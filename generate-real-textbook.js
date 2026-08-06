/**
 * 生成真实的 PEP 人教版小学英语课本数据（含黑体/白体标记）
 * 输出 textbook-data-extra.js
 * 用法: node generate-real-textbook.js
 *
 * 黑体词（bold=true）：课本加粗词，要求听/说/认读（三会）
 * 白体词（bold=false）：课本白体词，仅要求听/说（二会）
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// 音标词典
// ============================================================
const PHONETIC_DICT = {
  ruler: '/ˈruːlər/', pencil: '/ˈpensəl/', eraser: '/ɪˈreɪsər/', crayon: '/ˈkreɪɒn/',
  bag: '/bæɡ/', pen: '/pen/', book: '/bʊk/', no: '/nəʊ/', your: '/jɔːr/', school: '/skuːl/',
  red: '/red/', green: '/ɡriːn/', yellow: '/ˈjeləʊ/', blue: '/bluː/', black: '/blæk/',
  brown: '/braʊn/', white: '/waɪt/', orange: '/ˈɒrɪndʒ/', OK: '/ˌəʊˈkeɪ/', mum: '/mʌm/', mom: '/mɒm/',
  face: '/feɪs/', ear: '/ɪər/', eye: '/aɪ/', nose: '/nəʊz/', mouth: '/maʊθ/',
  arm: '/ɑːrm/', hand: '/hænd/', head: '/hed/', body: '/ˈbɒdi/', leg: '/leɡ/', foot: '/fʊt/',
  duck: '/dʌk/', pig: '/pɪɡ/', cat: '/kæt/', bear: '/beər/', dog: '/dɒɡ/',
  elephant: '/ˈelɪfənt/', monkey: '/ˈmʌŋki/', bird: '/bɜːrd/', tiger: '/ˈtaɪɡər/', panda: '/ˈpændə/',
  zoo: '/zuː/', funny: '/ˈfʌni/',
  bread: '/bred/', juice: '/dʒuːs/', egg: '/eɡ/', milk: '/mɪlk/', water: '/ˈwɔːtər/',
  cake: '/keɪk/', fish: '/fɪʃ/', rice: '/raɪs/',
  one: '/wʌn/', two: '/tuː/', three: '/θriː/', four: '/fɔːr/', five: '/faɪv/',
  six: '/sɪks/', seven: '/ˈsevən/', eight: '/eɪt/', nine: '/naɪn/', ten: '/ten/',
  brother: '/ˈbrʌðər/', plate: '/pleɪt/',

  UK: '/ˌjuːˈkeɪ/', Canada: '/ˈkænədə/', USA: '/ˌjuːesˈeɪ/', China: '/ˈtʃaɪnə/',
  she: '/ʃiː/', student: '/ˈstjuːdənt/', pupil: '/ˈpjuːpəl/', he: '/hiː/',
  teacher: '/ˈtiːtʃər/', boy: '/bɔɪ/', girl: '/ɡɜːrl/', new: '/njuː/', friend: '/frend/', today: '/təˈdeɪ/',
  father: '/ˈfɑːðər/', dad: '/dæd/', man: '/mæn/', woman: '/ˈwʊmən/', mother: '/ˈmʌðər/',
  sister: '/ˈsɪstər/', grandmother: '/ˈɡrændˌmʌðər/', grandma: '/ˈɡrændmɑː/',
  grandfather: '/ˈɡrændˌfɑːðər/', grandpa: '/ˈɡrændpɑː/', family: '/ˈfæməli/',
  thin: '/θɪn/', fat: '/fæt/', tall: '/tɔːl/', short: '/ʃɔːrt/', long: '/lɒŋ/',
  small: '/smɔːl/', big: '/bɪɡ/', giraffe: '/dʒɪˈræf/', so: '/səʊ/', children: '/ˈtʃɪldrən/', tail: '/teɪl/',
  on: '/ɒn/', in: '/ɪn/', under: '/ˈʌndər/', chair: '/tʃeər/', desk: '/desk/',
  cap: '/kæp/', ball: '/bɔːl/', car: '/kɑːr/', boat: '/bəʊt/', map: '/mæp/',
  pear: '/peər/', apple: '/ˈæpəl/', banana: '/bəˈnænə/', watermelon: '/ˈwɔːtərˌmelən/',
  strawberry: '/ˈstrɔːbəri/', grape: '/ɡreɪp/', buy: '/baɪ/', fruit: '/fruːt/',
  eleven: '/ɪˈlevən/', twelve: '/twelv/', thirteen: '/ˌθɜːrˈtiːn/', fourteen: '/ˌfɔːrˈtiːn/',
  fifteen: '/ˌfɪfˈtiːn/', sixteen: '/ˌsɪksˈtiːn/', seventeen: '/ˌsevənˈtiːn/',
  eighteen: '/ˌeɪˈtiːn/', nineteen: '/ˌnaɪnˈtiːn/', twenty: '/ˈtwenti/', kite: '/kaɪt/', beautiful: '/ˈbjuːtɪfəl/', toy: '/tɔɪ/', box: '/bɒks/',

  classroom: '/ˈklæsruːm/', window: '/ˈwɪndəʊ/', blackboard: '/ˈblækbɔːrd/', light: '/laɪt/',
  picture: '/ˈpɪktʃər/', door: '/dɔːr/', computer: '/kəmˈpjuːtər/', fan: '/fæn/',
  wall: '/wɔːl/', floor: '/flɔːr/', near: '/nɪər/', clean: '/kliːn/', really: '/ˈriːəli/', TV: '/ˌtiːˈviː/', help: '/help/',
  schoolbag: '/ˈskuːlbæɡ/', maths: '/mæθs/', English: '/ˈɪŋɡlɪʃ/', Chinese: '/ˌtʃaɪˈniːz/',
  storybook: '/ˈstɔːribʊk/', candy: '/ˈkændi/', notebook: '/ˈnəʊtbʊk/', key: '/kiː/',
  cute: '/kjuːt/', lost: '/lɒst/', wow: '/waʊ/',
  strong: '/strɒŋ/', friendly: '/ˈfrendli/', quiet: '/ˈkwaɪət/', hair: '/heər/',
  shoe: '/ʃuː/', glasses: '/ˈɡlæsɪz/', his: '/hɪz/', her: '/hɜːr/', hat: '/hæt/', right: '/raɪt/', or: '/ɔːr/',
  bedroom: '/ˈbedruːm/', living: '/ˈlɪvɪŋ/', room: '/ruːm/', study: '/ˈstʌdi/',
  kitchen: '/ˈkɪtʃɪn/', bathroom: '/ˈbæθruːm/', bed: '/bed/', phone: '/fəʊn/',
  table: '/ˈteɪbəl/', sofa: '/ˈsəʊfə/', fridge: '/frɪdʒ/', find: '/faɪnd/', them: '/ðem/',
  beef: '/biːf/', chicken: '/ˈtʃɪkɪn/', noodles: '/ˈnuːdəlz/', soup: '/suːp/', vegetable: '/ˈvedʒtəbəl/',
  chopsticks: '/ˈtʃɒpstɪks/', bowl: '/bəʊl/', fork: '/fɔːrk/', knife: '/naɪf/',
  spoon: '/spuːn/', dinner: '/ˈdɪnər/', ready: '/ˈredi/', pass: '/pæs/', try: '/traɪ/',
  parents: '/ˈpeərənts/', cousin: '/ˈkʌzən/', uncle: '/ˈʌŋkəl/', aunt: '/ænt/',
  doctor: '/ˈdɒktər/', cook: '/kʊk/', driver: '/ˈdraɪvər/', farmer: '/ˈfɑːrmər/',
  nurse: '/nɜːrs/', people: '/ˈpiːpəl/', little: '/ˈlɪtəl/', but: '/bʌt/', puppy: '/ˈpʌpi/',

  first: '/fɜːrst/', second: '/ˈsekənd/', office: '/ˈɒfɪs/', library: '/ˈlaɪbrəri/',
  playground: '/ˈpleɪɡraʊnd/', art: '/ɑːrt/', music: '/ˈmjuːzɪk/', next: '/nekst/',
  homework: '/ˈhəʊmwɜːrk/', class: '/klæs/', forty: '/ˈfɔːrti/', way: '/weɪ/',
  breakfast: '/ˈbrekfəst/', lunch: '/lʌntʃ/', get: '/ɡet/', up: '/ʌp/', go: '/ɡəʊ/', home: '/həʊm/',
  over: '/ˈəʊvər/', now: '/naʊ/', kid: '/kɪd/', thirty: '/ˈθɜːrti/', hurry: '/ˈhʌri/',
  come: '/kʌm/', minute: '/ˈmɪnɪt/',
  cold: '/kəʊld/', cool: '/kuːl/', warm: '/wɔːrm/', hot: '/hɒt/',
  sunny: '/ˈsʌni/', windy: '/ˈwɪndi/', cloudy: '/ˈklaʊdi/', snowy: '/ˈsnəʊi/', rainy: '/ˈreɪni/',
  outside: '/ˌaʊtˈsaɪd/', careful: '/ˈkeərfəl/', weather: '/ˈweðər/', degree: '/dɪˈɡriː/',
  world: '/wɜːrld/', fly: '/flaɪ/', love: '/lʌv/', London: '/ˈlʌndən/', Sydney: '/ˈsɪdni/',
  tomato: '/təˈmeɪtəʊ/', potato: '/pəˈteɪtəʊ/', carrot: '/ˈkærət/', horse: '/hɔːrs/',
  cow: '/kaʊ/', sheep: '/ʃiːp/', hen: '/hen/', these: '/ðiːz/', animal: '/ˈænɪməl/',
  those: '/ðəʊz/', garden: '/ˈɡɑːrdən/', farm: '/fɑːrm/', goat: '/ɡəʊt/', eat: '/iːt/',
  clothes: '/kləʊðz/', pants: '/pænts/', dress: '/dres/', skirt: '/skɜːrt/',
  coat: '/kəʊt/', sweater: '/ˈswetər/', sock: '/sɒk/', shorts: '/ʃɔːrts/',
  jacket: '/ˈdʒækɪt/', shirt: '/ʃɜːrt/', pack: '/pæk/', wait: '/weɪt/', whose: '/huːz/', yours: '/jɔːrz/',
  glove: '/ɡlʌv/', scarf: '/skɑːrf/', umbrella: '/ʌmˈbrelə/', sunglasses: '/ˈsʌnˌɡlæsɪz/',
  pretty: '/ˈprɪti/', expensive: '/ɪkˈspensɪv/', cheap: '/tʃiːp/', nice: '/naɪs/',
  size: '/saɪz/', too: '/tuː/', eighty: '/ˈeɪti/', sale: '/seɪl/', more: '/mɔːr/', us: '/ʌs/', dollar: '/ˈdɒlər/',
  just: '/dʒʌst/',

  old: '/əʊld/', young: '/jʌŋ/', funny: '/ˈfʌni/', kind: '/kaɪnd/', strict: '/strɪkt/',
  polite: '/pəˈlaɪt/', helpful: '/ˈhelpfəl/', clever: '/ˈklevər/', shy: '/ʃaɪ/',
  know: '/nəʊ/', our: '/aʊər/', Ms: '/mɪz/', will: '/wɪl/', sometimes: '/ˈsʌmtaɪmz/',
  robot: '/ˈrəʊbɒt/', him: '/hɪm/', speak: '/spiːk/', finish: '/ˈfɪnɪʃ/',
  Monday: '/ˈmʌndeɪ/', Tuesday: '/ˈtjuːzdeɪ/', Wednesday: '/ˈwenzdeɪ/',
  Thursday: '/ˈθɜːrzdeɪ/', Friday: '/ˈfraɪdeɪ/', Saturday: '/ˈsætərdeɪ/', Sunday: '/ˈsʌndeɪ/',
  weekend: '/ˌwiːkˈend/', wash: '/wɒʃ/', my: '/maɪ/', watch: '/wɒtʃ/',
  do: '/duː/', read: '/riːd/', books: '/bʊks/', play: '/pleɪ/', football: '/ˈfʊtbɔːl/',
  cooking: '/ˈkʊkɪŋ/', often: '/ˈɒfən/', park: '/pɑːrk/', tired: '/taɪərd/',
  sports: '/spɔːrts/', should: '/ʃʊd/', every: '/ˈevri/', day: '/deɪ/', schedule: '/ˈʃedjuːl/', sport: '/spɔːrt/',
  sandwich: '/ˈsænwɪdʒ/', salad: '/ˈsæləd/', hamburger: '/ˈhæmbɜːrɡər/', ice: '/aɪs/', cream: '/kriːm/',
  tea: '/tiː/', fresh: '/freʃ/', healthy: '/ˈhelθi/', delicious: '/dɪˈlɪʃəs/', sweet: '/swiːt/',
  drink: '/drɪŋk/', thirsty: '/ˈθɜːrsti/', favourite: '/ˈfeɪvərɪt/', food: '/fuːd/', onion: '/ˈʌnjən/', dear: '/dɪər/',
  sing: '/sɪŋ/', song: '/sɒŋ/', kung: '/kʌŋ/', fu: '/fuː/', dance: '/dæns/',
  draw: '/drɔː/', cartoons: '/kɑːrˈtuːnz/', swim: '/swɪm/', basketball: '/ˈbæskɪtbɔːl/',
  ping: '/pɪŋ/', pong: '/pɒŋ/', party: '/ˈpɑːrti/', wonderful: '/ˈwʌndərfəl/',
  learn: '/lɜːrn/', any: '/ˈeni/', problem: '/ˈprɒbləm/', want: '/wɒnt/', send: '/send/', email: '/ˈiːmeɪl/',
  cartoon: '/kɑːrˈtuːn/', next: '/nekst/',
  clock: '/klɒk/', plant: '/plænt/', bottle: '/ˈbɒtəl/', bike: '/baɪk/', photo: '/ˈfəʊtəʊ/',
  front: '/frʌnt/', between: '/bɪˈtwiːn/', above: '/əˈbʌv/', beside: '/bɪˈsaɪd/', behind: '/bɪˈhaɪnd/',
  there: '/ðeər/', grandparent: '/ˈɡrændˌpeərənt/', their: '/ðeər/',
  house: '/haʊs/', lots: '/lɒts/', flower: '/ˈflaʊər/', move: '/muːv/',
  dirty: '/ˈdɜːrti/', everywhere: '/ˈevriweər/', mouse: '/maʊs/', live: '/lɪv/', nature: '/ˈneɪtʃər/',
  forest: '/ˈfɒrɪst/', river: '/ˈrɪvər/', lake: '/leɪk/', mountain: '/ˈmaʊntɪn/',
  hill: '/hɪl/', tree: '/triː/', bridge: '/brɪdʒ/', building: '/ˈbɪldɪŋ/', village: '/ˈvɪlɪdʒ/',
  boating: '/ˈbəʊtɪŋ/', rabbit: '/ˈræbɪt/', high: '/haɪ/',

  eat_bf: '/iːt ˈbrekfəst/', have_class: '/hæv klæs/', play_sports: '/pleɪ spɔːrts/',
  exercise: '/ˈeksərsaɪz/', do_exercises: '/duː ˈmɔːrnɪŋ ˈeksərsaɪzɪz/',
  eat_dinner: '/iːt ˈdɪnər/', clean_room: '/kliːn ruːm/', go_walk: '/ɡəʊ fər ə wɔːk/',
  go_shop: '/ɡəʊ ˈʃɒpɪŋ/', take: '/teɪk/', dancing: '/ˈdænsɪŋ/', dance_class: '/teɪk ə ˈdænsɪŋ klæs/',
  when: '/wen/', after: '/ˈæftər/', start: '/stɑːrt/', usually: '/ˈjuːʒuəli/',
  Spain: '/speɪn/', late: '/leɪt/', am: '/ˌeɪˈem/', pm: '/ˌpiːˈem/',
  why: '/waɪ/', shop: '/ʃɒp/', work: '/wɜːrk/', last: '/læst/',
  sound: '/saʊnd/', also: '/ˈɔːlsəʊ/', busy: '/ˈbɪzi/', need: '/niːd/',
  letter: '/ˈletər/', island: '/ˈaɪlənd/', always: '/ˈɔːlweɪz/', cave: '/keɪv/', win: '/wɪn/',
  spring: '/sprɪŋ/', summer: '/ˈsʌmər/', autumn: '/ˈɔːtəm/', winter: '/ˈwɪntər/',
  season: '/ˈsiːzən/', picnic: '/ˈpɪknɪk/', pick: '/pɪk/', apples: '/ˈæpəlz/',
  snowman: '/ˈsnəʊmæn/', make: '/meɪk/', which: '/wɪtʃ/', best: '/best/',
  snow: '/snəʊ/', job: '/dʒɒb/', good: '/ɡʊd/', because: '/bɪˈkɒz/',
  vacation: '/veɪˈkeɪʃən/', all: '/ɔːl/', pink: '/pɪŋk/', lovely: '/ˈlʌvli/', leaf: '/liːf/',
  leaves: '/liːvz/', fall: '/fɔːl/', paint: '/peɪnt/',
  January: '/ˈdʒænjuəri/', February: '/ˈfebruəri/', March: '/mɑːrtʃ/', April: '/ˈeɪprəl/',
  May: '/meɪ/', June: '/dʒuːn/', July: '/dʒʊˈlaɪ/', August: '/ˈɔːɡəst/',
  September: '/sepˈtembər/', October: '/ɒkˈtəʊbər/', November: '/nəʊˈvembər/', December: '/dɪˈsembər/',
  few: '/fjuː/', thing: '/θɪŋ/', meet: '/miːt/', trip: '/trɪp/', year: '/jɪər/',
  contest: '/ˈkɒntest/', national: '/ˈnæʃənəl/', holiday: '/ˈhɒlədeɪ/', game: '/ɡeɪm/',
  roll: '/rəʊl/', act: '/ækt/', riddle: '/ˈrɪdəl/', Easter: '/ˈiːstər/', bunny: '/ˈbʌni/',
  fifth: '/fɪfθ/', twelfth: '/twelfθ/', twentieth: '/ˈtwentiəθ/', special: '/ˈspeʃəl/',
  Christmas: '/ˈkrɪsməs/', Thanksgiving: '/ˌθæŋksˈɡɪvɪŋ/', chocolate: '/ˈtʃɒklət/',
  running: '/ˈrʌnɪŋ/', climbing: '/ˈklaɪmɪŋ/', jumping: '/ˈdʒʌmpɪŋ/', sleeping: '/ˈsliːpɪŋ/',
  mine: '/maɪn/', hers: '/hɜːrz/', theirs: '/ðeərz/', ours: '/aʊərz/',
  each: '/iːtʃ/', other: '/ˈʌðər/', excited: '/ɪkˈsaɪtɪd/',
  keep: '/kiːp/', turn: '/tɜːrn/', quietly_adv: '/ˈkwaɪətli/', Canadian: '/kəˈneɪdiən/',
  Spanish: '/ˈspænɪʃ/', American: '/əˈmerɪkən/',
  bamboo: '/bæmˈbuː/', its: '/ɪts/', show: '/ʃəʊ/', anything: '/ˈeniθɪŋ/', else: '/els/',
  exhibition: '/ˌeksɪˈbɪʃən/', say: '/seɪ/', sushi: '/ˈsuːʃi/', teach: '/tiːtʃ/', sure: '/ʃʊər/',
  kitten: '/ˈkɪtən/', diary: '/ˈdaɪəri/', still: '/stɪl/', noise: '/nɔɪz/', fur: '/fɜːr/', open: '/ˈəʊpən/',

  by: '/baɪ/', bus: '/bʌs/', train: '/treɪn/', how: '/haʊ/', foot: '/fʊt/',
  traffic: '/ˈtræfɪk/', stop: '/stɒp/', museum: '/mjuːˈziːəm/', science: '/ˈsaɪəns/',
  post: '/pəʊst/', hospital: '/ˈhɒspɪtəl/', cinema: '/ˈsɪnəmə/', bookstore: '/ˈbʊkstɔːr/',
  where: '/weər/', please: '/pliːz/', straight: '/streɪt/', then: '/ðen/',
  left: '/left/', crossing: '/ˈkrɒsɪŋ/', sir: '/sɜːr/', ask: '/æsk/', street: '/striːt/',
  get: '/ɡet/', give: '/ɡɪv/', follow: '/ˈfɒləʊ/', tell: '/tel/', far: '/fɑːr/',
  tonight: '/təˈnaɪt/', tomorrow: '/təˈmɒrəʊ/', magazine: '/ˌmæɡəˈziːn/',
  together: '/təˈɡeðər/', moon: '/muːn/', mooncake: '/ˈmuːnkeɪk/', poem: '/ˈpəʊɪm/',
  hobby: '/ˈhɒbi/', ride: '/raɪd/', dive: '/daɪv/', violin: '/ˌvaɪəˈlɪn/',
  kites: '/kaɪts/', collect: '/kəˈlekt/', stamps: '/stæmps/',
  pen_pal: '/pen pæl/', twin: '/twɪn/', look: '/lʊk/', something: '/ˈsʌmθɪŋ/',
  idea: '/aɪˈdɪə/', join: '/dʒɔɪn/', share: '/ʃeər/', goal: '/ɡəʊl/', club: '/klʌb/',
  singer: '/ˈsɪŋər/', writer: '/ˈraɪtər/', actor: '/ˈæktər/', actress: '/ˈæktrəs/',
  artist: '/ˈɑːrtɪst/', reporter: '/rɪˈpɔːrtər/', engineer: '/ˌendʒɪˈnɪər/',
  accountant: '/əˈkaʊntənt/', policeman: '/pəˈliːsmən/', salesperson: '/ˈseɪlzˌpɜːrsən/',
  cleaner: '/ˈkliːnər/', factory: '/ˈfæktəri/', design: '/dɪˈzaɪn/', money: '/ˈmʌni/', enjoy: '/ɪnˈdʒɔɪ/',
  coach: '/kəʊtʃ/', pilot: '/ˈpaɪlət/', scientist: '/ˈsaɪəntɪst/', fisherman: '/ˈfɪʃərmən/',
  postman: '/ˈpəʊstmən/', businessman: '/ˈbɪznɪsmæn/', secretary: '/ˈsekrətəri/',
  rain: '/reɪn/', cloud: '/klaʊd/', sun: '/sʌn/', stream: '/striːm/',
  seed: '/siːd/', soil: '/sɔɪl/', sprout: '/spraʊt/',
  angry: '/ˈæŋɡri/', afraid: '/əˈfreɪd/', sad: '/sæd/', worried: '/ˈwʌrid/', happy: '/ˈhæpi/',
  breath: '/breθ/', deep: '/diːp/', count: '/kaʊnt/', chase: '/tʃeɪs/', mice: '/maɪs/',
  bad: '/bæd/', hurt: '/hɜːrt/', ill: '/ɪl/', wrong: '/rɒŋ/', feel: '/fiːl/', well: '/wel/',
  sit: '/sɪt/', grass: '/ɡræs/', hear: '/hɪər/', ant: '/ænt/', worry: '/ˈwʌri/',
  stuck: '/stʌk/', mud: '/mʌd/', pull: '/pʊl/', everyone: '/ˈevriwʌn/', wear: '/weər/',

  taller: '/ˈtɔːlər/', shorter: '/ˈʃɔːrtər/', stronger: '/ˈstrɒŋər/', older: '/ˈəʊldər/',
  younger: '/ˈjʌŋər/', bigger: '/ˈbɪɡər/', heavier: '/ˈheviər/', longer: '/ˈlɒŋər/',
  thinner: '/ˈθɪnər/', smaller: '/ˈsmɔːlər/',
  cleaned: '/kliːnd/', washed: '/wɒʃt/', watched: '/wɒtʃt/', stayed: '/steɪd/',
  saw: '/sɔː/', had: '/hæd/', slept: '/slept/', yesterday: '/ˈjestərdeɪ/',
  before: '/bɪˈfɔːr/', drank: '/dræŋk/', better: '/ˈbetər/', faster: '/ˈfæstər/',
  went: '/went/', camp: '/kæmp/', camping: '/ˈkæmpɪŋ/', fishing: '/ˈfɪʃɪŋ/',
  rode: '/rəʊd/', ate: '/eɪt/', took: '/tʊk/', pictures: '/ˈpɪktʃərz/',
  bought: '/bɔːt/', fell: '/fel/', off: '/ɒf/', mule: '/mjuːl/', beach: '/biːtʃ/', basket: '/ˈbæskɪt/',
  dining: '/ˈdaɪnɪŋ/', hall: '/hɔːl/', gym: '/dʒɪm/', ago: '/əˈɡəʊ/', cycling: '/ˈsaɪklɪŋ/',
  skate: '/skeɪt/', badminton: '/ˈbædmɪntən/', star: '/stɑːr/', easy: '/ˈiːzi/',
  different: '/ˈdɪfərənt/', active: '/ˈæktɪv/', race: '/reɪs/', nothing: '/ˈnʌθɪŋ/',
  thought: '/θɔːt/', felt: '/felt/', woke: '/wəʊk/', dream: '/driːm/',
};

const PHRASE_DICT = {
  'pencil box': '/ˈpensəl bɒks/', 'hot dog': '/ˌhɒt ˈdɒɡ/', 'French fries': '/ˌfrentʃ ˈfraɪz/',
  'teacher\'s desk': '/ˈtiːtʃərz desk/', 'teacher\'s office': '/ˈtiːtʃərz ˈɒfɪs/',
  'first floor': '/ˌfɜːrst ˈflɔːr/', 'second floor': '/ˌsekənd ˈflɔːr/',
  'computer room': '/kəmˈpjuːtər ruːm/', 'art room': '/ɑːrt ruːm/', 'music room': '/ˈmjuːzɪk ruːm/',
  'next to': '/ˌnekst ˈtuː/', 'English class': '/ˈɪŋɡlɪʃ klæs/', 'music class': '/ˈmjuːzɪk klæs/',
  'PE class': '/ˌpiːˈiː klæs/', 'get up': '/ˌɡet ˈʌp/', 'go to school': '/ˌɡəʊ tə ˈskuːl/',
  'go home': '/ˌɡəʊ ˈhəʊm/', 'go to bed': '/ˌɡəʊ tə ˈbed/',
  'hurry up': '/ˌhʌri ˈʌp/', 'come on': '/ˌkʌm ˈɒn/', 'just a minute': '/ˌdʒʌst ə ˈmɪnɪt/',
  'be careful': '/bi ˈkeərfəl/', 'try on': '/ˌtraɪ ˈɒn/', 'how much': '/ˌhaʊ ˈmʌtʃ/',
  'maths book': '/mæθs bʊk/', 'English book': '/ˈɪŋɡlɪʃ bʊk/', 'Chinese book': '/ˌtʃaɪˈniːz bʊk/',
  'so much': '/ˌsəʊ ˈmʌtʃ/', 'living room': '/ˈlɪvɪŋ ruːm/', 'help yourself': '/ˌhelp jɔːrˈself/',
  'baby brother': '/ˈbeɪbi ˈbrʌðər/', 'football player': '/ˈfʊtbɔːl ˈpleɪər/',
  'wash my clothes': '/ˌwɒʃ maɪ ˈkləʊðz/', 'watch TV': '/ˌwɒtʃ ˌtiːˈviː/',
  'do homework': '/ˌduː ˈhəʊmwɜːrk/', 'read books': '/ˌriːd ˈbʊks/',
  'play football': '/ˌpleɪ ˈfʊtbɔːl/', 'play sports': '/ˌpleɪ ˈspɔːrts/',
  'ice cream': '/ˌaɪs ˈkriːm/', 'sing English songs': '/ˌsɪŋ ˈɪŋɡlɪʃ sɒŋz/',
  'play the pipa': '/ˌpleɪ ðə ˈpiːpə/', 'do kung fu': '/ˌduː ˌkʌŋ ˈfuː/',
  'kung fu': '/ˌkʌŋ ˈfuː/', 'draw cartoons': '/ˌdrɔː kɑːrˈtuːnz/',
  'play basketball': '/ˌpleɪ ˈbæskɪtbɔːl/', 'play ping-pong': '/ˌpleɪ ˈpɪŋpɒŋ/',
  'speak English': '/ˌspiːk ˈɪŋɡlɪʃ/', 'no problem': '/ˌnəʊ ˈprɒbləm/',
  'water bottle': '/ˈwɔːtər ˌbɒtəl/', 'in front of': '/ɪn ˈfrʌnt əv/',
  'lots of': '/ˌlɒts əv/', 'go boating': '/ˌɡəʊ ˈbəʊtɪŋ/',
  'eat breakfast': '/ˌiːt ˈbrekfəst/', 'have...class': '/hæv klæs/',
  'do morning exercises': '/ˌduː ˈmɔːrnɪŋ ˈeksərsaɪzɪz/',
  'eat dinner': '/ˌiːt ˈdɪnər/', 'clean my room': '/ˌkliːn maɪ ˈruːm/',
  'go for a walk': '/ˌɡəʊ fər ə ˈwɔːk/', 'go shopping': '/ˌɡəʊ ˈʃɒpɪŋ/',
  'take a dancing class': '/ˌteɪk ə ˈdænsɪŋ klæs/',
  'go on a picnic': '/ˌɡəʊ ɒn ə ˈpɪknɪk/', 'pick apples': '/ˌpɪk ˈæpəlz/',
  'make a snowman': '/ˌmeɪk ə ˈsnəʊmæn/', 'go swimming': '/ˌɡəʊ ˈswɪmɪŋ/',
  'good job': '/ˌɡʊd ˈdʒɒb/', 'traffic light': '/ˈtræfɪk laɪt/', 'traffic rule': '/ˈtræfɪk ruːl/',
  'get to': '/ˌɡet ˈtuː/', 'post office': '/ˈpəʊst ˌɒfɪs/',
  'science museum': '/ˈsaɪəns mjuːˈziːəm/', 'next week': '/ˌnekst ˈwiːk/',
  'this morning': '/ˌðɪs ˈmɔːrnɪŋ/', 'this afternoon': '/ˌðɪs ˌæftərˈnuːn/',
  'this evening': '/ˌðɪs ˈiːvnɪŋ/', 'take a trip': '/ˌteɪk ə ˈtrɪp/',
  'read a magazine': '/ˌriːd ə ˌmæɡəˈziːn/', 'go to the cinema': '/ˌɡəʊ tə ðə ˈsɪnəmə/',
  'theme park': '/ˈθiːm pɑːrk/', 'the Great Wall': '/ðə ˌɡreɪt ˈwɔːl/',
  'ride a bike': '/ˌraɪd ə ˈbaɪk/', 'play the violin': '/ˌpleɪ ðə ˌvaɪəˈlɪn/',
  'make kites': '/ˌmeɪk ˈkaɪts/', 'collect stamps': '/kəˌlekt ˈstæmps/',
  'pen pal': '/ˈpen pæl/', 'TV reporter': '/ˌtiːˈviː rɪˈpɔːrtər/',
  'went camping': '/ˌwent ˈkæmpɪŋ/', 'went fishing': '/ˌwent ˈfɪʃɪŋ/',
  'took pictures': '/ˌtʊk ˈpɪktʃərz/', 'on foot': '/ˌɒn ˈfʊt/',
  'see a film': '/ˌsiː ə ˈfɪlm/', 'comic book': '/ˈkɒmɪk bʊk/',
  'get together': '/ˌɡet təˈɡeðər/', 'head teacher': '/ˌhed ˈtiːtʃər/',
  'see a doctor': '/ˌsiː ə ˈdɒktər/', 'take a deep breath': '/ˌteɪk ə ˌdiːp ˈbreθ/',
  'count to ten': '/ˌkaʊnt tə ˈten/', 'pay attention to': '/ˌpeɪ əˈtenʃən tə/',
  'slow down': '/ˌsləʊ ˈdaʊn/', 'keep to the right': '/ˌkiːp tə ðə ˈraɪt/',
  'keep your desk clean': '/ˌkiːp jɔːr desk ˈkliːn/', 'talk quietly': '/ˌtɔːk ˈkwaɪətli/',
  'take turns': '/ˌteɪk ˈtɜːrnz/', 'have a look': '/ˌhæv ə ˈlʊk/',
  'each other': '/ˌiːtʃ ˈʌðər/', 'a few': '/ə ˈfjuː/', 'sports meet': '/ˈspɔːrts miːt/',
  'National Day': '/ˌnæʃənəl ˈdeɪ/', 'of course': '/əv ˈkɔːrs/',
  'look for': '/ˈlʊk fɔːr/', 'how about': '/ˌhaʊ əˈbaʊt/',
  'green beans': '/ˌɡriːn ˈbiːnz/', 'green bean': '/ˌɡriːn ˈbiːn/',
  'New York': '/ˌnjuː ˈjɔːrk/', 'Mid-autumn festival': '/mɪd ˈɔːtəm ˈfestɪvəl/',
  'go cycling': '/ˌɡəʊ ˈsaɪklɪŋ/', 'ice-skate': '/ˌaɪs ˈskeɪt/',
  'dining hall': '/ˈdaɪnɪŋ hɔːl/',
};

function getPhonetic(text) {
  if (PHRASE_DICT[text]) return PHRASE_DICT[text];
  if (PHONETIC_DICT[text]) return PHONETIC_DICT[text];
  const lower = text.toLowerCase();
  if (PHONETIC_DICT[lower]) return PHONETIC_DICT[lower];
  return '';
}

// ============================================================
// 构建单词
// ============================================================
function V(en, zh, bold) {
  return { en, zh, phonetic: getPhonetic(en), bold: bold === undefined ? true : bold };
}

// ============================================================
// 简单例句
// ============================================================
function makeSentences(grade, unitId, words) {
  const tpl = {
    '3-1': { en:'I have a ruler and a pencil.', zh:'我有一把尺子和一支铅笔。', ws:[V('I','我'),V('have','有'),V('a','一个'),V('ruler','尺子'),V('and','和'),V('a','一个'),V('pencil','铅笔')] },
    '3-2': { en:'I see red and blue.', zh:'我看到红色和蓝色。', ws:[V('I','我'),V('see','看见'),V('red','红色'),V('and','和'),V('blue','蓝色')] },
    '3-3': { en:'Look at my nose and mouth.', zh:'看我的鼻子和嘴。', ws:[V('Look','看'),V('at','在'),V('my','我的'),V('nose','鼻子'),V('and','和'),V('mouth','嘴')] },
    '3-4': { en:'Look at the duck! It is funny!', zh:'看那只鸭子！真好笑！', ws:[V('Look','看'),V('at','在'),V('the','这'),V('duck','鸭子'),V('It','它'),V('is','是'),V('funny','滑稽的')] },
    '3-5': { en:'I like bread and milk.', zh:'我喜欢面包和牛奶。', ws:[V('I','我'),V('like','喜欢'),V('bread','面包'),V('and','和'),V('milk','牛奶')] },
    '3-6': { en:'I have three books.', zh:'我有三本书。', ws:[V('I','我'),V('have','有'),V('three','三'),V('books','书')] },

    '4-1': { en:'The classroom is near the library.', zh:'教室在图书馆旁边。', ws:[V('The','这'),V('classroom','教室'),V('is','是'),V('near','在...旁'),V('the','这'),V('library','图书馆')] },
    '4-2': { en:'I have lunch at twelve o\'clock.', zh:'我十二点吃午餐。', ws:[V('I','我'),V('have','吃'),V('lunch','午餐'),V('at','在'),V('twelve','十二'),V('o\'clock','点钟')] },
    '4-3': { en:'It\'s warm and sunny today.', zh:'今天温暖又晴朗。', ws:[V('It\'s','它是'),V('warm','温暖的'),V('and','和'),V('sunny','晴朗的'),V('today','今天')] },
    '4-4': { en:'These are tomatoes and carrots.', zh:'这些是西红柿和胡萝卜。', ws:[V('These','这些'),V('are','是'),V('tomatoes','西红柿'),V('and','和'),V('carrots','胡萝卜')] },
    '4-5': { en:'I like this pretty dress.', zh:'我喜欢这条漂亮的连衣裙。', ws:[V('I','我'),V('like','喜欢'),V('this','这'),V('pretty','漂亮的'),V('dress','连衣裙')] },
    '4-6': { en:'The sunglasses are cheap.', zh:'这副太阳镜很便宜。', ws:[V('The','这'),V('sunglasses','太阳镜'),V('are','是'),V('cheap','便宜的')] },

    '5-1': { en:'Our new English teacher is young and kind.', zh:'我们的新英语老师又年轻又和蔼。', ws:[V('Our','我们的'),V('new','新的'),V('English','英语'),V('teacher','老师'),V('is','是'),V('young','年轻的'),V('and','和'),V('kind','和蔼的')] },
    '5-2': { en:'I often do my homework on the weekend.', zh:'我经常在周末做作业。', ws:[V('I','我'),V('often','经常'),V('do','做'),V('my','我的'),V('homework','作业'),V('on','在'),V('the','这'),V('weekend','周末')] },
    '5-3': { en:'My favourite food is ice cream. It is sweet.', zh:'我最喜欢的食物是冰淇淋。它是甜的。', ws:[V('My','我的'),V('favourite','最喜欢的'),V('food','食物'),V('is','是'),V('ice','冰'),V('cream','奶油'),V('It','它'),V('is','是'),V('sweet','甜的')] },
    '5-4': { en:'I can sing and dance for the party.', zh:'我可以为派对唱歌跳舞。', ws:[V('I','我'),V('can','能'),V('sing','唱歌'),V('and','和'),V('dance','跳舞'),V('for','为了'),V('the','这'),V('party','派对')] },
    '5-5': { en:'There is a big clock on the wall.', zh:'墙上有一个大钟。', ws:[V('There','那里'),V('is','有'),V('a','一个'),V('big','大的'),V('clock','钟'),V('on','在...上'),V('the','这'),V('wall','墙')] },
    '5-6': { en:'Is there a river in the forest?', zh:'森林里有河吗？', ws:[V('Is','是'),V('there','那里'),V('a','一个'),V('river','河'),V('in','在...里'),V('the','这'),V('forest','森林')] },

    '6-1': { en:'I go to school by bike every day.', zh:'我每天骑自行车上学。', ws:[V('I','我'),V('go','去'),V('to','到'),V('school','学校'),V('by','乘坐'),V('bike','自行车'),V('every','每个'),V('day','天')] },
    '6-2': { en:'The hospital is next to the post office.', zh:'医院在邮局旁边。', ws:[V('The','这'),V('hospital','医院'),V('is','是'),V('next','下一个'),V('to','到'),V('the','这'),V('post','邮政'),V('office','局')] },
    '6-3': { en:'I am going to take a trip tomorrow.', zh:'我明天要去旅行。', ws:[V('I','我'),V('am','是'),V('going','去'),V('to','到'),V('take','进行'),V('a','一个'),V('trip','旅行'),V('tomorrow','明天')] },
    '6-4': { en:'My hobby is collecting stamps.', zh:'我的爱好是集邮。', ws:[V('My','我的'),V('hobby','爱好'),V('is','是'),V('collecting','收集'),V('stamps','邮票')] },
    '6-5': { en:'My uncle is an engineer in a factory.', zh:'我叔叔是一家工厂的工程师。', ws:[V('My','我的'),V('uncle','叔叔'),V('is','是'),V('an','一个'),V('engineer','工程师'),V('in','在...里'),V('a','一个'),V('factory','工厂')] },
    '6-6': { en:'We should plant more trees.', zh:'我们应该种更多的树。', ws:[V('We','我们'),V('should','应该'),V('plant','种植'),V('more','更多的'),V('trees','树')] },
  };
  const def = { en:'Let\'s learn English!', zh:'让我们一起学英语！', ws:[V('Let\'s','让我们'),V('learn','学习'),V('English','英语')] };
  const s = tpl[grade + '-' + unitId] || def;
  return [{ en: s.en, zh: s.zh, words: s.ws }];
}

// ============================================================
// 课本定义 — 词汇 + 黑体标记
// bold=true: 课本加粗词（三会：听/说/认读）
// bold=false: 课本白体词（二会：听/说）
// ============================================================

// 黑体词集合（英文标识）
const BOLD_SETS = {
  // ---- 三上 (旧版 2013) ----
  'pep-3a': {
    u1: ['ruler','pencil','eraser','crayon','bag','pen','pencil box','book'],  // 黑体8，白体：no, your, school
    u2: ['red','green','yellow','blue'],  // 黑体4，白体：black,brown,white,orange,OK,mum
    u3: ['face','ear','eye','nose','mouth'],  // 黑体5，白体：arm,hand,head,body,leg,foot
    u4: ['duck','pig','cat','bear','dog'],  // 黑体5，白体：elephant,monkey,bird,tiger,panda,zoo,funny
    u5: ['bread','juice','egg','milk'],  // 黑体4，白体：water,cake,fish,rice
    u6: ['one','two','three','four','five'],  // 黑体5，白体：six,seven,eight,nine,ten,brother,plate
  },
  // ---- 三下 (旧版 2013) ----
  'pep-3b': {
    u1: ['UK','Canada','USA','China','she','student','pupil','he','teacher'],  // 黑体9，白体：boy,girl,friend,new,today
    u2: ['father','mother','man','woman','grandmother','grandfather','sister','brother','family'],  // 黑体9，白体：dad,grandma,grandpa
    u3: ['thin','fat','tall','short','long','small','big','giraffe'],  // 黑体8，白体：so,children,tail
    u4: ['on','in','under','chair','desk'],  // 黑体5，白体：cap,ball,car,boat,map
    u5: ['pear','apple','orange','banana','watermelon','strawberry','grape'],  // 黑体7，白体：buy,fruit
    u6: ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'],  // 黑体10，白体：kite,beautiful,toy,box
  },
  // ---- 四上 (旧版 2013) ----
  'pep-4a': {
    u1: ['classroom','window','blackboard','light','picture','door','teacher\'s desk','computer','fan','wall','floor'],  // 黑体11，白体：really,near,TV,clean,help
    u2: ['schoolbag','maths book','English book','Chinese book','storybook'],  // 黑体5，白体：candy,notebook,toy,key,wow,lost,so much,cute
    u3: ['strong','friendly','quiet','hair','shoe','glasses'],  // 黑体6，白体：his,or,right,hat,her
    u4: ['bedroom','living room','study','kitchen','bathroom','bed','phone','table','sofa','fridge'],  // 黑体10，白体：find,them
    u5: ['beef','chicken','noodles','soup','vegetable','chopsticks','bowl','fork','knife','spoon'],  // 黑体10，白体：dinner,ready,help yourself,pass,try
    u6: ['parents','cousin','uncle','aunt','baby brother','doctor','cook','driver','farmer','nurse'],  // 黑体10，白体：football player,puppy,people,little,but
  },
  // ---- 四下 (旧版 2013) ----
  'pep-4b': {
    u1: ['first floor','second floor','teacher\'s office','library','playground','computer room','art room','music room'],  // 黑体8，白体：next to,homework,class,forty,way
    u2: ['breakfast','English class','lunch','music class','PE class','dinner','get up','go to school','go home','go to bed'],  // 黑体10，白体：over,now,o\'clock,kid,thirty,hurry up,come on,just a minute
    u3: ['cold','cool','warm','hot','sunny','windy','cloudy','snowy','rainy'],  // 黑体9，白体：outside,be careful,weather,degree,world,fly,London,Sydney,how about
    u4: ['tomato','potato','carrot','horse','cow','sheep','hen'],  // 黑体7，白体：these,animal,those,garden,farm,goat,eat,green beans
    u5: ['clothes','pants','hat','dress','skirt','coat','sweater','sock','shorts','jacket','shirt'],  // 黑体11，白体：yours,whose,pack,wait
    u6: ['glove','scarf','umbrella','sunglasses','pretty','expensive','cheap','nice'],  // 黑体8，白体：try on,size,of course,too,just,how much,dollar,sale,more,us
  },
  // ---- 五上 (旧版 2013) ----
  'pep-5a': {
    u1: ['old','young','funny','kind','strict','polite','hard-working','helpful','clever','shy'],  // 黑体10，白体：know,our,Ms,will,sometimes,robot,him,speak,finish
    u2: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','weekend','wash my clothes','watch TV','do homework','read books','play football'],  // 黑体13，白体：cooking,often,park,tired,play sports,should,every,day,schedule,sport
    u3: ['sandwich','hamburger','tea','healthy','fresh','salad','ice cream','delicious','hot','sweet'],  // 黑体10，白体：thirsty,drink,favourite,food,dear,onion
    u4: ['sing','song','kung fu','dance','draw cartoons','cook','swim','play basketball','play ping-pong','speak English'],  // 黑体10，白体：party,wonderful,learn,any,problem,want,send,email,next,play the pipa
    u5: ['clock','plant','bottle','water bottle','bike','photo','in front of','between','above','beside','behind'],  // 黑体11，白体：there,grandparent,their,house,lots of,flower,move,dirty,everywhere,mouse,live,nature
    u6: ['forest','river','lake','mountain','hill','tree','bridge','building','village'],  // 黑体9，白体：go boating,rabbit,high,house
  },
  // ---- 五下 (旧版 2013) ----
  'pep-5b': {
    u1: ['eat breakfast','have...class','play sports','exercise','do morning exercises','eat dinner','clean my room','go for a walk','go shopping','take','dancing','take a dancing class'],  // 黑体12，白体：when,after,start,usually,Spain,late,a.m.,p.m.,why,shop,work,last,sound,also,busy,need,play,letter,live,island,always,cave,go swimming,win
    u2: ['spring','summer','autumn','winter','season','go on a picnic','pick apples','make a snowman','go swimming'],  // 黑体9，白体：picnic,pick,snowman,best,good job,vacation,which,snow,because,all,pink,lovely,leaf,fall,paint
    u3: ['January','February','March','April','May','June','July','August','September','October','November','December'],  // 黑体12，白体：few,thing,meet,sports meet,trip,year,contest,national,National Day,American,Christmas,holiday,game,look for,plant,the Great Wall,Thanksgiving,roll,chocolate,RSVP,bunny,Easter,by
    u4: ['first','second','third','fourth','fifth','twelfth','twentieth','twenty-first','twenty-second','thirtieth','special'],  // 黑体11，白体：fool,kitten,diary,still,noise,fur,open,walk
    u5: ['mine','yours','his','hers','theirs','ours','climbing','eating','playing','jumping','drinking','sleeping','each other'],  // 黑体13，白体：excited,like
    u6: ['keep to the right','keep your desk clean','talk quietly','take turns'],  // 黑体4，白体：bamboo,its,show,anything,else,exhibition,say,have a look,sushi,teach,sure,Canadian,Spanish
  },
  // ---- 六上 (旧版 2013) ----
  'pep-6a': {
    u1: ['by','foot','bus','train','how','stop','traffic light','traffic rule','get to'],  // 黑体9，白体：science,museum,post office,hospital,cinema,bookstore,where,turn,left,right,straight,crossing,sir,ask,street,get,give,follow,tell,far,on foot,ship,subway,taxi,slow down,helmet,must,wear,attention,pay attention to,traffic
    u2: ['next week','this morning','this afternoon','this evening','tonight','tomorrow','take a trip','read a magazine','go to the cinema','theme park','the Great Wall','together'],  // 黑体12，白体：see a film,supermarket,dictionary,comic book,word,postcard,lesson,space,travel,half,price,Mid-autumn festival,get together,mooncake,poem,moon
    u3: ['hobby','ride a bike','dive','play the violin','make kites','collect stamps','live','show','pen pal'],  // 黑体9，白体：dear,twin,look,something,idea,shall,join,share,jasmine,amazing,goal,club
    u4: ['singer','writer','actor','actress','artist','TV reporter','engineer','accountant','policeman','salesperson','cleaner','work','factory'],  // 黑体13，白体：design,money,enjoy,coach,pilot,scientist,fisherman,postman,businessman,police officer,head teacher,secretary,gym,university
    u5: ['rain','cloud','sun','stream','flower','seed','soil','sprout','plant','should'],  // 黑体10，白体：then
    u6: ['angry','afraid','sad','worried','happy','see a doctor','take a deep breath','count to ten'],  // 黑体8，白体：wear,more,deep,breath,chase,mice,bad,hurt,ill,wrong,feel,well,sit,grass,hear,ant,worry,stuck,mud,pull,everyone
  },
  // ---- 六下 (旧版 2013) ----
  'pep-6b': {
    u1: ['taller','shorter','stronger','older','younger','bigger','heavier','longer','thinner','smaller'],  // 黑体10
    u2: ['cleaned','washed','watched','stayed','read','saw','had','slept','last','yesterday','before'],  // 黑体11，白体：drank,show,magazine,better,faster
    u3: ['went','camp','went camping','fish','went fishing','rode','hurt','ate','took','took pictures','bought','fell'],  // 黑体12，白体：off,mule,beach,basket
    u4: ['dining hall','grass','gym','ago','cycling','go cycling','ice-skate','badminton','star'],  // 黑体9，白体：easy,different,active,race,nothing,thought,felt,trip,woke,dream
  },
};

// 获取某个词是否为黑体
function isBold(bookId, unitIdx, en) {
  const bookBold = BOLD_SETS[bookId];
  if (!bookBold) return false;
  const unitBold = bookBold['u' + (unitIdx + 1)];
  if (!unitBold) return false;
  return unitBold.includes(en);
}

// ============================================================
// 可视化词表（all words）
// ============================================================
const ALL_WORDS = {
  // ---- 三上 ----
  'pep-3a': {
    u1: [['ruler','尺子'],['pencil','铅笔'],['eraser','橡皮'],['crayon','蜡笔'],['bag','书包'],['pen','钢笔'],['pencil box','铅笔盒'],['book','书'],['no','不'],['your','你的'],['school','学校']],
    u2: [['red','红色'],['green','绿色'],['yellow','黄色'],['blue','蓝色'],['black','黑色'],['brown','棕色'],['white','白色'],['orange','橙色'],['OK','好'],['mum','妈妈']],
    u3: [['face','脸'],['ear','耳朵'],['eye','眼睛'],['nose','鼻子'],['mouth','嘴'],['arm','胳膊'],['hand','手'],['head','头'],['body','身体'],['leg','腿'],['foot','脚']],
    u4: [['duck','鸭子'],['pig','猪'],['cat','猫'],['bear','熊'],['dog','狗'],['elephant','大象'],['monkey','猴子'],['bird','鸟'],['tiger','老虎'],['panda','熊猫'],['zoo','动物园'],['funny','滑稽的']],
    u5: [['bread','面包'],['juice','果汁'],['egg','蛋'],['milk','牛奶'],['water','水'],['cake','蛋糕'],['fish','鱼'],['rice','米饭']],
    u6: [['one','一'],['two','二'],['three','三'],['four','四'],['five','五'],['six','六'],['seven','七'],['eight','八'],['nine','九'],['ten','十'],['brother','兄弟'],['plate','盘子']],
  },
  // ---- 三下 ----
  'pep-3b': {
    u1: [['UK','英国'],['Canada','加拿大'],['USA','美国'],['China','中国'],['she','她'],['student','学生'],['pupil','小学生'],['he','他'],['teacher','教师'],['boy','男孩'],['girl','女孩'],['friend','朋友'],['new','新的'],['today','今天']],
    u2: [['father','父亲'],['mother','母亲'],['man','男人'],['woman','女人'],['grandmother','祖母'],['grandfather','祖父'],['sister','姐妹'],['brother','兄弟'],['family','家庭'],['dad','爸爸'],['grandma','奶奶'],['grandpa','爷爷']],
    u3: [['thin','瘦的'],['fat','胖的'],['tall','高的'],['short','矮的'],['long','长的'],['small','小的'],['big','大的'],['giraffe','长颈鹿'],['so','这么'],['children','儿童'],['tail','尾巴']],
    u4: [['on','在...上'],['in','在...里'],['under','在...下'],['chair','椅子'],['desk','书桌'],['cap','帽子'],['ball','球'],['car','小汽车'],['boat','小船'],['map','地图']],
    u5: [['pear','梨'],['apple','苹果'],['orange','橙子'],['banana','香蕉'],['watermelon','西瓜'],['strawberry','草莓'],['grape','葡萄'],['buy','买'],['fruit','水果']],
    u6: [['eleven','十一'],['twelve','十二'],['thirteen','十三'],['fourteen','十四'],['fifteen','十五'],['sixteen','十六'],['seventeen','十七'],['eighteen','十八'],['nineteen','十九'],['twenty','二十'],['kite','风筝'],['beautiful','美丽的'],['toy','玩具'],['box','盒子']],
  },
  // ---- 四上 ----
  'pep-4a': {
    u1: [['classroom','教室'],['window','窗户'],['blackboard','黑板'],['light','灯'],['picture','图画'],['door','门'],['teacher\'s desk','讲台'],['computer','计算机'],['fan','风扇'],['wall','墙壁'],['floor','地板'],['near','在...旁'],['really','真的'],['TV','电视'],['clean','打扫'],['help','帮助']],
    u2: [['schoolbag','书包'],['maths book','数学书'],['English book','英语书'],['Chinese book','语文书'],['storybook','故事书'],['candy','糖果'],['notebook','笔记本'],['toy','玩具'],['key','钥匙'],['cute','可爱的'],['lost','丢失'],['wow','哇'],['so much','非常']],
    u3: [['strong','强壮的'],['friendly','友好的'],['quiet','安静的'],['hair','头发'],['shoe','鞋'],['glasses','眼镜'],['his','他的'],['or','或者'],['right','正确的'],['hat','帽子'],['her','她的']],
    u4: [['bedroom','卧室'],['living room','客厅'],['study','书房'],['kitchen','厨房'],['bathroom','浴室'],['bed','床'],['phone','电话'],['table','桌子'],['sofa','沙发'],['fridge','冰箱'],['find','找到'],['them','他们']],
    u5: [['beef','牛肉'],['chicken','鸡肉'],['noodles','面条'],['soup','汤'],['vegetable','蔬菜'],['chopsticks','筷子'],['bowl','碗'],['fork','餐叉'],['knife','刀'],['spoon','勺子'],['dinner','晚餐'],['ready','准备好'],['help yourself','请自便'],['pass','传递'],['try','尝试']],
    u6: [['parents','父母'],['cousin','表兄妹'],['uncle','叔叔'],['aunt','阿姨'],['baby brother','婴儿弟弟'],['doctor','医生'],['cook','厨师'],['driver','司机'],['farmer','农民'],['nurse','护士'],['football player','足球运动员'],['puppy','小狗'],['people','人们'],['little','小的'],['but','但是']],
  },
  // ---- 四下 ----
  'pep-4b': {
    u1: [['first floor','一楼'],['second floor','二楼'],['teacher\'s office','教师办公室'],['library','图书馆'],['playground','操场'],['computer room','计算机房'],['art room','美术教室'],['music room','音乐教室'],['next to','紧邻'],['homework','作业'],['class','班级'],['forty','四十'],['way','方向']],
    u2: [['breakfast','早餐'],['English class','英语课'],['lunch','午餐'],['music class','音乐课'],['PE class','体育课'],['dinner','正餐'],['get up','起床'],['go to school','去上学'],['go home','回家'],['go to bed','上床睡觉'],['over','结束'],['now','现在'],['o\'clock','点钟'],['kid','小孩'],['thirty','三十'],['hurry up','快点'],['come on','加油'],['just a minute','稍等']],
    u3: [['cold','寒冷的'],['cool','凉爽的'],['warm','温暖的'],['hot','热的'],['sunny','晴朗的'],['windy','多风的'],['cloudy','多云的'],['snowy','下雪的'],['rainy','多雨的'],['outside','在户外'],['be careful','小心'],['weather','天气'],['degree','度数'],['world','世界'],['fly','放风筝'],['London','伦敦'],['Sydney','悉尼'],['how about','怎么样']],
    u4: [['tomato','西红柿'],['potato','土豆'],['carrot','胡萝卜'],['green beans','豆角'],['horse','马'],['cow','奶牛'],['sheep','绵羊'],['hen','母鸡'],['these','这些'],['animal','动物'],['those','那些'],['garden','花园'],['farm','农场'],['goat','山羊'],['eat','吃']],
    u5: [['clothes','衣服'],['pants','裤子'],['hat','帽子'],['dress','连衣裙'],['skirt','女裙'],['coat','大衣'],['sweater','毛衣'],['sock','短袜'],['shorts','短裤'],['jacket','夹克衫'],['shirt','衬衫'],['yours','你的'],['whose','谁的'],['pack','收拾'],['wait','等待']],
    u6: [['glove','手套'],['scarf','围巾'],['umbrella','雨伞'],['sunglasses','太阳镜'],['pretty','精致的'],['expensive','昂贵的'],['cheap','便宜的'],['nice','好的'],['try on','试穿'],['size','尺码'],['of course','当然'],['too','太'],['just','正好'],['how much','多少钱'],['eighty','八十'],['dollar','美元'],['sale','大减价'],['more','更多的'],['us','我们']],
  },
  // ---- 五上 ----
  'pep-5a': {
    u1: [['old','老的'],['young','年轻的'],['funny','滑稽的'],['kind','和蔼的'],['strict','严格的'],['polite','有礼貌的'],['hard-working','勤劳的'],['helpful','有帮助的'],['clever','聪明的'],['shy','害羞的'],['know','知道'],['our','我们的'],['Ms','女士'],['will','将要'],['sometimes','有时'],['robot','机器人'],['him','他'],['speak','讲'],['finish','完成']],
    u2: [['Monday','星期一'],['Tuesday','星期二'],['Wednesday','星期三'],['Thursday','星期四'],['Friday','星期五'],['Saturday','星期六'],['Sunday','星期日'],['weekend','周末'],['wash my clothes','洗衣服'],['watch TV','看电视'],['do homework','做作业'],['read books','看书'],['play football','踢足球'],['cooking','烹饪'],['often','常常'],['park','公园'],['tired','疲倦的'],['play sports','做运动'],['should','应该'],['every','每个'],['day','一天'],['schedule','日程'],['sport','运动']],
    u3: [['sandwich','三明治'],['hamburger','汉堡包'],['tea','茶'],['healthy','健康的'],['fresh','新鲜的'],['salad','沙拉'],['ice cream','冰淇淋'],['delicious','美味的'],['hot','辣的'],['sweet','甜的'],['thirsty','口渴的'],['drink','喝'],['favourite','最喜欢的'],['food','食物'],['dear','亲爱的'],['onion','洋葱']],
    u4: [['sing','唱歌'],['song','歌曲'],['kung fu','功夫'],['dance','跳舞'],['draw cartoons','画漫画'],['cook','做饭'],['swim','游泳'],['play basketball','打篮球'],['play ping-pong','打乒乓球'],['speak English','说英语'],['party','派对'],['wonderful','了不起的'],['learn','学习'],['any','任何的'],['problem','问题'],['want','想要'],['send','发送'],['email','电子邮件'],['next','下一个'],['play the pipa','弹琵琶']],
    u5: [['clock','钟'],['plant','植物'],['bottle','瓶子'],['water bottle','水瓶'],['bike','自行车'],['photo','照片'],['in front of','在...前面'],['between','在...之间'],['above','在...上面'],['beside','在旁边'],['behind','在后面'],['there','那里'],['grandparent','祖父母'],['their','他们的'],['house','房子'],['lots of','许多'],['flower','花'],['move','搬家'],['dirty','肮脏的'],['everywhere','到处'],['mouse','老鼠'],['live','居住'],['nature','大自然']],
    u6: [['forest','森林'],['river','河'],['lake','湖'],['mountain','山'],['hill','小山'],['tree','树'],['bridge','桥'],['building','建筑物'],['village','村庄'],['go boating','去划船'],['rabbit','兔子'],['high','高的'],['house','房子']],
  },
  // ---- 五下 ----
  'pep-5b': {
    u1: [['eat breakfast','吃早饭'],['have...class','上...课'],['play sports','进行体育运动'],['exercise','运动'],['do morning exercises','做早操'],['eat dinner','吃晚饭'],['clean my room','打扫房间'],['go for a walk','散步'],['go shopping','购物'],['take','学习；上(课)'],['dancing','跳舞'],['take a dancing class','上舞蹈课'],['when','什么时候'],['after','在...后'],['start','开始'],['usually','通常'],['Spain','西班牙'],['late','晚'],['a.m.','上午'],['p.m.','下午'],['why','为什么'],['shop','购物'],['work','工作'],['last','上一个'],['sound','听起来'],['also','也'],['busy','忙的'],['need','需要'],['play','戏剧'],['letter','信'],['live','居住'],['island','岛'],['always','总是'],['cave','洞穴'],['go swimming','去游泳'],['win','获胜']],
    u2: [['spring','春天'],['summer','夏天'],['autumn','秋天'],['winter','冬天'],['season','季节'],['picnic','野餐'],['go on a picnic','去野餐'],['pick','摘'],['pick apples','摘苹果'],['snowman','雪人'],['make a snowman','堆雪人'],['go swimming','去游泳'],['which','哪一个'],['best','最好的'],['snow','雪'],['good job','做得好'],['because','因为'],['vacation','假期'],['all','全部'],['pink','粉色'],['lovely','可爱的'],['leaf','叶子'],['fall','秋天；落下'],['paint','绘画']],
    u3: [['January','一月'],['February','二月'],['March','三月'],['April','四月'],['May','五月'],['June','六月'],['July','七月'],['August','八月'],['September','九月'],['October','十月'],['November','十一月'],['December','十二月'],['few','不多'],['thing','事情'],['meet','集会'],['sports meet','运动会'],['trip','旅行'],['year','年'],['contest','比赛'],['national','国家的'],['National Day','国庆节'],['American','美国的'],['Christmas','圣诞节'],['holiday','假日'],['game','游戏'],['look for','寻找'],['plant','种植'],['the Great Wall','长城'],['Thanksgiving','感恩节'],['roll','滚动'],['chocolate','巧克力'],['RSVP','请赐复'],['bunny','兔子'],['Easter','复活节'],['by','在...之前']],
    u4: [['first','第一'],['second','第二'],['third','第三'],['fourth','第四'],['fifth','第五'],['twelfth','第十二'],['twentieth','第二十'],['twenty-first','第二十一'],['twenty-second','第二十二'],['thirtieth','第三十'],['special','特别的'],['fool','愚蠢的'],['kitten','小猫'],['diary','日记'],['still','仍然'],['noise','声音'],['fur','皮毛'],['open','开着的'],['walk','走']],
    u5: [['mine','我的'],['yours','你的'],['his','他的'],['hers','她的'],['theirs','他们的'],['ours','我们的'],['climbing','攀爬'],['eating','吃'],['playing','玩'],['jumping','跳'],['drinking','喝'],['sleeping','睡'],['each other','相互'],['excited','兴奋的'],['like','像']],
    u6: [['keep to the right','靠右'],['keep your desk clean','保持桌面干净'],['talk quietly','小声说话'],['take turns','按顺序来'],['bamboo','竹子'],['its','它的'],['show','展示'],['anything','任何事'],['else','其他'],['exhibition','展览'],['say','说'],['have a look','看一看'],['sushi','寿司'],['teach','教'],['sure','当然'],['Canadian','加拿大的'],['Spanish','西班牙的']],
  },
  // ---- 六上 ----
  'pep-6a': {
    u1: [['on foot','步行'],['by','乘'],['bus','公交车'],['train','火车'],['how','怎样'],['stop','停'],['traffic light','交通灯'],['traffic rule','交通规则'],['get to','到达'],['foot','脚'],['science','科学'],['museum','博物馆'],['post office','邮局'],['hospital','医院'],['cinema','电影院'],['bookstore','书店'],['where','哪里'],['turn','转弯'],['left','左边'],['right','右边'],['straight','直走'],['crossing','十字路口'],['sir','先生'],['ask','问'],['street','街道'],['get','到达'],['give','给'],['follow','跟着'],['tell','告诉'],['far','较远的'],['ship','船'],['subway','地铁'],['taxi','出租车'],['slow down','减慢'],['helmet','头盔'],['must','必须'],['wear','穿戴'],['attention','注意'],['pay attention to','注意'],['traffic','交通']],
    u2: [['next week','下周'],['this morning','今天上午'],['this afternoon','今天下午'],['this evening','今晚'],['tonight','今夜'],['tomorrow','明天'],['take a trip','去旅行'],['read a magazine','读杂志'],['go to the cinema','去电影院'],['theme park','主题公园'],['the Great Wall','长城'],['together','一起'],['see a film','看电影'],['supermarket','超市'],['dictionary','字典'],['comic book','连环画'],['word','单词'],['postcard','明信片'],['lesson','课程'],['space','太空'],['travel','旅行'],['half','一半'],['price','价格'],['Mid-autumn festival','中秋节'],['get together','聚会'],['mooncake','月饼'],['poem','诗'],['moon','月亮']],
    u3: [['hobby','爱好'],['ride a bike','骑自行车'],['dive','跳水'],['play the violin','拉小提琴'],['make kites','做风筝'],['collect stamps','集邮'],['live','居住'],['show','展示'],['pen pal','笔友'],['dear','亲爱的'],['twin','双胞胎'],['look','看'],['something','某事'],['idea','想法'],['shall','表示征求'],['join','加入'],['share','分享'],['jasmine','茉莉'],['amazing','令人惊奇的'],['goal','射门'],['club','俱乐部']],
    u4: [['singer','歌手'],['writer','作家'],['actor','男演员'],['actress','女演员'],['artist','艺术家'],['TV reporter','电视台记者'],['engineer','工程师'],['accountant','会计'],['policeman','警察'],['salesperson','销售员'],['cleaner','清洁工'],['work','工作'],['factory','工厂'],['design','设计'],['money','钱'],['enjoy','享受'],['coach','教练'],['pilot','飞行员'],['scientist','科学家'],['fisherman','渔民'],['postman','邮递员'],['businessman','商人'],['police officer','警察'],['head teacher','校长'],['secretary','秘书'],['gym','体育馆'],['university','大学']],
    u5: [['rain','雨'],['cloud','云'],['sun','太阳'],['stream','小溪'],['flower','花'],['seed','种子'],['soil','土壤'],['sprout','苗'],['plant','种植'],['should','应该'],['then','然后']],
    u6: [['angry','生气的'],['afraid','害怕的'],['sad','难过的'],['worried','担心的'],['happy','高兴的'],['see a doctor','看医生'],['take a deep breath','深呼吸'],['count to ten','数到十'],['wear','穿'],['more','更多的'],['deep','深的'],['breath','呼吸'],['chase','追赶'],['mice','老鼠'],['bad','邪恶的'],['hurt','伤害'],['ill','有病的'],['wrong','错的'],['feel','感到'],['well','健康'],['sit','坐'],['grass','草'],['hear','听到'],['ant','蚂蚁'],['worry','担心'],['stuck','陷住'],['mud','泥'],['pull','拉'],['everyone','每个人']],
  },
  // ---- 六下 ----
  'pep-6b': {
    u1: [['taller','更高的'],['shorter','更矮的'],['stronger','更强壮的'],['older','更年长的'],['younger','更年轻的'],['bigger','更大的'],['heavier','更重的'],['longer','更长的'],['thinner','更瘦的'],['smaller','更小的']],
    u2: [['cleaned','打扫了'],['washed','洗了'],['watched','看了'],['stayed','停留了'],['read','读'],['saw','看见'],['had','有'],['slept','睡觉'],['last','上一个'],['yesterday','昨天'],['before','之前'],['drank','喝'],['show','演出'],['magazine','杂志'],['better','更好的'],['faster','更快的']],
    u3: [['went','去'],['camp','露营'],['went camping','去露营'],['fish','钓鱼'],['went fishing','去钓鱼'],['rode','骑'],['hurt','受伤'],['ate','吃'],['took','拿走'],['took pictures','拍照'],['bought','买'],['fell','摔倒'],['off','落下'],['mule','骡子'],['beach','海滩'],['basket','篮子']],
    u4: [['dining hall','餐厅'],['grass','草坪'],['gym','体育馆'],['ago','以前'],['cycling','骑自行车'],['go cycling','去骑自行车'],['ice-skate','滑冰'],['badminton','羽毛球'],['star','星'],['easy','容易的'],['different','不同的'],['active','活跃的'],['race','赛跑'],['nothing','没有什么'],['thought','想'],['felt','感觉'],['trip','旅行'],['woke','醒来'],['dream','梦']],
  },
};

// ============================================================
// 课本元数据
// ============================================================
const BOOKS = [
  { id:'pep-3a',name:'人教版 PEP 三年级上册',grade:3,sem:'上',color:'#FF9500',
    units:[{id:'u1',name:'Unit 1 Hello!'},{id:'u2',name:'Unit 2 Colours'},{id:'u3',name:'Unit 3 Look at Me!'},{id:'u4',name:'Unit 4 We Love Animals'},{id:'u5',name:'Unit 5 Let\'s Eat!'},{id:'u6',name:'Unit 6 Happy Birthday!'}]},
  { id:'pep-3b',name:'人教版 PEP 三年级下册',grade:3,sem:'下',color:'#FF6B35',
    units:[{id:'u1',name:'Unit 1 Welcome Back to School!'},{id:'u2',name:'Unit 2 My Family'},{id:'u3',name:'Unit 3 At the Zoo'},{id:'u4',name:'Unit 4 Where Is My Car?'},{id:'u5',name:'Unit 5 Do You Like Pears?'},{id:'u6',name:'Unit 6 How Many?'}]},
  { id:'pep-4a',name:'人教版 PEP 四年级上册',grade:4,sem:'上',color:'#34C759',
    units:[{id:'u1',name:'Unit 1 My Classroom'},{id:'u2',name:'Unit 2 My Schoolbag'},{id:'u3',name:'Unit 3 My Friends'},{id:'u4',name:'Unit 4 My Home'},{id:'u5',name:'Unit 5 Dinner\'s Ready'},{id:'u6',name:'Unit 6 Meet My Family!'}]},
  { id:'pep-4b',name:'人教版 PEP 四年级下册',grade:4,sem:'下',color:'#30B0C7',
    units:[{id:'u1',name:'Unit 1 My School'},{id:'u2',name:'Unit 2 What Time Is It?'},{id:'u3',name:'Unit 3 Weather'},{id:'u4',name:'Unit 4 At the Farm'},{id:'u5',name:'Unit 5 My Clothes'},{id:'u6',name:'Unit 6 Shopping'}]},
  { id:'pep-5a',name:'人教版 PEP 五年级上册',grade:5,sem:'上',color:'#007AFF',
    units:[{id:'u1',name:'Unit 1 What\'s He Like?'},{id:'u2',name:'Unit 2 My Week'},{id:'u3',name:'Unit 3 What Would You Like?'},{id:'u4',name:'Unit 4 What Can You Do?'},{id:'u5',name:'Unit 5 There Is a Big Bed'},{id:'u6',name:'Unit 6 In a Nature Park'}]},
  { id:'pep-5b',name:'人教版 PEP 五年级下册',grade:5,sem:'下',color:'#6C5CE7',
    units:[{id:'u1',name:'Unit 1 My Day'},{id:'u2',name:'Unit 2 My Favourite Season'},{id:'u3',name:'Unit 3 My School Calendar'},{id:'u4',name:'Unit 4 When Is Easter?'},{id:'u5',name:'Unit 5 Whose Dog Is It?'},{id:'u6',name:'Unit 6 Work Quietly!'}]},
  { id:'pep-6a',name:'人教版 PEP 六年级上册',grade:6,sem:'上',color:'#FF3B30',
    units:[{id:'u1',name:'Unit 1 How Do You Go There?'},{id:'u2',name:'Unit 2 Where Is the Science Museum?'},{id:'u3',name:'Unit 3 What Are You Going to Do?'},{id:'u4',name:'Unit 4 I Have a Pen Pal'},{id:'u5',name:'Unit 5 What Does She Do?'},{id:'u6',name:'Unit 6 The Story of Rain'}]},
  { id:'pep-6b',name:'人教版 PEP 六年级下册',grade:6,sem:'下',color:'#AF52DE',
    units:[{id:'u1',name:'Unit 1 How Tall Are You?'},{id:'u2',name:'Unit 2 Last Weekend'},{id:'u3',name:'Unit 3 Where Did You Go?'},{id:'u4',name:'Unit 4 Then and Now'}]},
];

// ============================================================
// 生成课本数据
// ============================================================
function buildBook(meta) {
  const units = meta.units.map((u, ui) => {
    const rawWords = ALL_WORDS[meta.id]['u' + (ui + 1)] || [];
    const words = rawWords.map(([en, zh]) => {
      const bold = isBold(meta.id, ui, en);
      return { en, zh, phonetic: getPhonetic(en), bold };
    });

    const sents = makeSentences(meta.grade, ui + 1, words);
    const parts = [
      { id: 'u' + (ui+1) + '-talk-a', name: "Part A Let's talk", type: 'dialogue',
        sentences: sents.map((s, si) => ({ id: 's' + (ui+1) + 'a' + (si+1), en: s.en, zh: s.zh, words: s.words })) },
      { id: 'u' + (ui+1) + '-talk-b', name: "Part B Let's talk", type: 'dialogue',
        sentences: [sents[0]].map((s, si) => ({ id: 's' + (ui+1) + 'b' + (si+1), en: s.en, zh: s.zh, words: s.words })) },
    ];

    return { id: 'u' + (ui + 1), name: u.name, parts, words };
  });

  return { id: meta.id, name: meta.name, grade: meta.grade, semester: meta.sem, coverColor: meta.color, units };
}

// ============================================================
// 主程序
// ============================================================
function main() {
  const textbooks = {};
  BOOKS.forEach(b => { textbooks[b.id] = buildBook(b); });
  const json = JSON.stringify(textbooks, null, 2);
  const output = `// 自动生成 — 基于 PEP 人教版 2013 版真实词汇表（含黑体/白体标记）
// bold=true: 黑体加粗词（三会：听/说/认读），bold=false: 白体词（二会：听/说）
// 运行 node generate-real-textbook.js 重新生成
window.__EXTRA_TEXTBOOKS = ${json};
`;
  fs.writeFileSync(path.join(__dirname, 'textbook-data-extra.js'), output, 'utf-8');
  let totalWords = 0, totalBold = 0;
  Object.values(textbooks).forEach(b => {
    b.units.forEach(u => { u.words.forEach(w => { totalWords++; if (w.bold) totalBold++; }); });
  });
  console.log('Books: ' + Object.keys(textbooks).length + ' | Total words: ' + totalWords + ' | Bold: ' + totalBold + ' | White: ' + (totalWords - totalBold));
}

main();
