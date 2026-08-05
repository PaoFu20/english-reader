/**
 * 生成 人教版 PEP 2024 版 三下~六下 课本数据
 * 输出 textbook-data-extra.js
 *
 * 用法: node generate-textbook-data.js
 *
 * 每册 6 单元（六下 4 单元），每单元 Part A/B 对话 + 单词表
 * 对话按年级递进复杂度：三年级简单句 → 六年级含过去时/比较级/从句
 */

const fs = require('fs');
const path = require('path');

// ---------- helper: build a word entry ----------
function W(en, zh, phonetic) {
  return { en, zh, phonetic };
}

// ---------- helper: build a sentence ----------
function S(id, en, zh, words) {
  return { id, en, zh, words };
}

// ---------- helper: build a part ----------
function part(id, name, type, sentences) {
  return { id, name, type, sentences };
}

// ---------- helper: build a unit ----------
function unit(id, name, parts, words) {
  return { id, name, parts, words };
}

// ---------- helper: build a whole book ----------
function book(id, name, grade, semester, coverColor, units) {
  return { id, name, grade, semester, coverColor, units };
}

// ====================================================================
//  三年级下册  (pep-3b)
// ====================================================================
const pep3b = book('pep-3b', '人教版 PEP 三年级下册', 3, '下', '#FF6B35', [
  unit('u1', 'Unit 1 Meeting New People', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "Hello! I'm Amy. What's your name?",
        '你好！我是艾米。你叫什么名字？', [
          W('Hello', '你好', '/həˈloʊ/'), W("I'm", '我是', '/aɪm/'),
          W('Amy', '艾米', '/ˈeɪmi/'), W('What', '什么', '/wʌt/'),
          W('is', '是', '/ɪz/'), W('your', '你的', '/jɔːr/'),
          W('name', '名字', '/neɪm/')
        ]),
      S('s1a2', 'Hi, Amy! My name is Tom.',
        '嗨，艾米！我叫汤姆。', [
          W('Hi', '嗨', '/haɪ/'), W('Amy', '艾米', '/ˈeɪmi/'),
          W('My', '我的', '/maɪ/'), W('name', '名字', '/neɪm/'),
          W('is', '是', '/ɪz/'), W('Tom', '汤姆', '/tɒm/')
        ]),
      S('s1a3', "Nice to meet you, Tom.",
        '很高兴认识你，汤姆。', [
          W('Nice', '好的', '/naɪs/'), W('to', '（不定式）', '/tuː/'),
          W('meet', '遇见', '/miːt/'), W('you', '你', '/juː/'),
          W('Tom', '汤姆', '/tɒm/')
        ]),
      S('s1a4', 'Nice to meet you too!',
        '我也很高兴认识你！', [
          W('Nice', '好的', '/naɪs/'), W('to', '（不定式）', '/tuː/'),
          W('meet', '遇见', '/miːt/'), W('you', '你', '/juː/'),
          W('too', '也', '/tuː/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "Excuse me. Are you a new student?",
        '打扰一下，你是新同学吗？', [
          W('Excuse', '原谅', '/ɪkˈskjuːz/'), W('me', '我', '/miː/'),
          W('Are', '是', '/ɑːr/'), W('you', '你', '/juː/'),
          W('a', '一个', '/ə/'), W('new', '新的', '/nuː/'),
          W('student', '学生', '/ˈstuːdnt/')
        ]),
      S('s1b2', "Yes, I'm from Class 2. Nice to meet you!",
        '是的，我来自二班。很高兴认识你！', [
          W('Yes', '是的', '/jɛs/'), W("I'm", '我是', '/aɪm/'),
          W('from', '来自', '/frʌm/'), W('Class', '班级', '/klæs/'),
          W('two', '二', '/tuː/'), W('Nice', '好的', '/naɪs/'),
          W('to', '（不定式）', '/tuː/'), W('meet', '遇见', '/miːt/'),
          W('you', '你', '/juː/')
        ]),
      S('s1b3', "Welcome to our school! Let me show you around.",
        '欢迎来到我们学校！我带你转转。', [
          W('Welcome', '欢迎', '/ˈwɛlkəm/'), W('to', '到', '/tuː/'),
          W('our', '我们的', '/aʊr/'), W('school', '学校', '/skuːl/'),
          W('Let', '让', '/lɛt/'), W('me', '我', '/miː/'),
          W('show', '展示', '/ʃoʊ/'), W('you', '你', '/juː/'),
          W('around', '四处', '/əˈraʊnd/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('new', '新的', '/nuː/'), W('student', '学生', '/ˈstuːdnt/'),
    W('meet', '遇见', '/miːt/'), W('friend', '朋友', '/frɛnd/'),
    W('class', '班级', '/klæs/'), W('from', '来自', '/frʌm/'),
    W('school', '学校', '/skuːl/'), W('welcome', '欢迎', '/ˈwɛlkəm/'),
    W('around', '四处；周围', '/əˈraʊnd/'), W('show', '展示；给……看', '/ʃoʊ/'),
    W('hello', '你好', '/həˈloʊ/'), W('name', '名字', '/neɪm/')
  ]),

  unit('u2', 'Unit 2 Expressing Yourself', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "Look at my new pencil case! It's blue.",
        '看我的新铅笔盒！它是蓝色的。', [
          W('Look', '看', '/lʊk/'), W('at', '在', '/æt/'),
          W('my', '我的', '/maɪ/'), W('new', '新的', '/nuː/'),
          W('pencil', '铅笔', '/ˈpɛnsl/'), W('case', '盒子', '/keɪs/'),
          W("It's", '它是', '/ɪts/'), W('blue', '蓝色的', '/bluː/')
        ]),
      S('s2a2', "Wow, it's so beautiful! I like the stars on it.",
        '哇，太漂亮了！我喜欢上面的星星。', [
          W('Wow', '哇', '/waʊ/'), W("it's", '它是', '/ɪts/'),
          W('so', '如此', '/soʊ/'), W('beautiful', '漂亮的', '/ˈbjuːtɪfl/'),
          W('I', '我', '/aɪ/'), W('like', '喜欢', '/laɪk/'),
          W('the', '这', '/ðə/'), W('stars', '星星', '/stɑːrz/'),
          W('on', '在……上', '/ɒn/'), W('it', '它', '/ɪt/')
        ]),
      S('s2a3', "Thank you! My mum gave it to me.",
        '谢谢！我妈妈给我的。', [
          W('Thank', '感谢', '/θæŋk/'), W('you', '你', '/juː/'),
          W('My', '我的', '/maɪ/'), W('mum', '妈妈', '/mʌm/'),
          W('gave', '给', '/ɡeɪv/'), W('it', '它', '/ɪt/'),
          W('to', '给', '/tuː/'), W('me', '我', '/miː/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "How do you feel today, Amy?",
        '艾米，你今天感觉怎么样？', [
          W('How', '怎样', '/haʊ/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('feel', '感觉', '/fiːl/'),
          W('today', '今天', '/təˈdeɪ/'), W('Amy', '艾米', '/ˈeɪmi/')
        ]),
      S('s2b2', "I feel happy! I made a new friend.",
        '我感觉很开心！我交了一个新朋友。', [
          W('I', '我', '/aɪ/'), W('feel', '感觉', '/fiːl/'),
          W('happy', '快乐的', '/ˈhæpi/'), W('I', '我', '/aɪ/'),
          W('made', '做；交', '/meɪd/'), W('a', '一个', '/ə/'),
          W('new', '新的', '/nuː/'), W('friend', '朋友', '/frɛnd/')
        ]),
      S('s2b3', "That's great! Friends make us happy.",
        '太棒了！朋友让我们快乐。', [
          W("That's", '那是', '/ðæts/'), W('great', '很棒的', '/ɡreɪt/'),
          W('Friends', '朋友（复数）', '/frɛndz/'), W('make', '使；让', '/meɪk/'),
          W('us', '我们', '/ʌs/'), W('happy', '快乐的', '/ˈhæpi/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('beautiful', '漂亮的', '/ˈbjuːtɪfl/'), W('happy', '快乐的', '/ˈhæpi/'),
    W('sad', '伤心的', '/sæd/'), W('feel', '感觉', '/fiːl/'),
    W('like', '喜欢', '/laɪk/'), W('love', '喜爱', '/lʌv/'),
    W('great', '很棒的', '/ɡreɪt/'), W('make', '做；使', '/meɪk/'),
    W('pencil', '铅笔', '/ˈpɛnsl/'), W('case', '盒子', '/keɪs/'),
    W('star', '星星', '/stɑːr/'), W('today', '今天', '/təˈdeɪ/')
  ]),

  unit('u3', 'Unit 3 Learning Better', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "What do you use to learn English?",
        '你用什么学英语？', [
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('use', '使用', '/juːz/'),
          W('to', '（不定式）', '/tuː/'), W('learn', '学习', '/lɜːrn/'),
          W('English', '英语', '/ˈɪŋɡlɪʃ/')
        ]),
      S('s3a2', "I use my tablet. I can watch videos and listen.",
        '我用我的平板。我可以看视频和听。', [
          W('I', '我', '/aɪ/'), W('use', '使用', '/juːz/'),
          W('my', '我的', '/maɪ/'), W('tablet', '平板电脑', '/ˈtæblɪt/'),
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('watch', '看', '/wɒtʃ/'), W('videos', '视频（复数）', '/ˈvɪdioʊz/'),
          W('and', '和', '/ænd/'), W('listen', '听', '/ˈlɪsn/')
        ]),
      S('s3a3', "That's a good way to learn!",
        '那是学习的好方法！', [
          W("That's", '那是', '/ðæts/'), W('a', '一个', '/ə/'),
          W('good', '好的', '/ɡʊd/'), W('way', '方法', '/weɪ/'),
          W('to', '（不定式）', '/tuː/'), W('learn', '学习', '/lɜːrn/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "I can see with my eyes.",
        '我可以用眼睛看。', [
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('see', '看见', '/siː/'), W('with', '用', '/wɪð/'),
          W('my', '我的', '/maɪ/'), W('eyes', '眼睛（复数）', '/aɪz/')
        ]),
      S('s3b2', "I can hear with my ears.",
        '我可以用耳朵听。', [
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('hear', '听见', '/hɪr/'), W('with', '用', '/wɪð/'),
          W('my', '我的', '/maɪ/'), W('ears', '耳朵（复数）', '/ɪrz/')
        ]),
      S('s3b3', "Our senses help us learn about the world!",
        '我们的感官帮助我们了解世界！', [
          W('Our', '我们的', '/aʊr/'), W('senses', '感官（复数）', '/ˈsɛnsɪz/'),
          W('help', '帮助', '/hɛlp/'), W('us', '我们', '/ʌs/'),
          W('learn', '学习', '/lɜːrn/'), W('about', '关于', '/əˈbaʊt/'),
          W('the', '这', '/ðə/'), W('world', '世界', '/wɜːrld/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('learn', '学习', '/lɜːrn/'), W('use', '使用', '/juːz/'),
    W('watch', '看', '/wɒtʃ/'), W('listen', '听', '/ˈlɪsn/'),
    W('see', '看见', '/siː/'), W('hear', '听见', '/hɪr/'),
    W('eye', '眼睛', '/aɪ/'), W('ear', '耳朵', '/ɪr/'),
    W('sense', '感官', '/sɛns/'), W('world', '世界', '/wɜːrld/'),
    W('tablet', '平板电脑', '/ˈtæblɪt/'), W('video', '视频', '/ˈvɪdioʊ/')
  ]),

  unit('u4', 'Unit 4 Healthy Food', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "I'm hungry. What do you want to eat?",
        '我饿了。你想吃什么？', [
          W("I'm", '我是', '/aɪm/'), W('hungry', '饿的', '/ˈhʌŋɡri/'),
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('want', '想要', '/wɒnt/'),
          W('to', '（不定式）', '/tuː/'), W('eat', '吃', '/iːt/')
        ]),
      S('s4a2', "I want some rice and vegetables.",
        '我想要一些米饭和蔬菜。', [
          W('I', '我', '/aɪ/'), W('want', '想要', '/wɒnt/'),
          W('some', '一些', '/sʌm/'), W('rice', '米饭', '/raɪs/'),
          W('and', '和', '/ænd/'), W('vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/')
        ]),
      S('s4a3', "Good choice! Vegetables are healthy.",
        '好选择！蔬菜很健康。', [
          W('Good', '好的', '/ɡʊd/'), W('choice', '选择', '/tʃɔɪs/'),
          W('Vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/'), W('are', '是', '/ɑːr/'),
          W('healthy', '健康的', '/ˈhɛlθi/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "Mum, can I have some ice cream?",
        '妈妈，我可以吃冰淇淋吗？', [
          W('Mum', '妈妈', '/mʌm/'), W('can', '可以', '/kæn/'),
          W('I', '我', '/aɪ/'), W('have', '吃；有', '/hæv/'),
          W('some', '一些', '/sʌm/'), W('ice', '冰', '/aɪs/'),
          W('cream', '奶油', '/kriːm/')
        ]),
      S('s4b2', "After dinner, OK? Eat your vegetables first.",
        '吃完饭再吃好吗？先吃你的蔬菜。', [
          W('After', '在……之后', '/ˈæftər/'), W('dinner', '晚餐', '/ˈdɪnər/'),
          W('OK', '好吗', '/oʊˈkeɪ/'), W('Eat', '吃', '/iːt/'),
          W('your', '你的', '/jɔːr/'), W('vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/'),
          W('first', '首先', '/fɜːrst/')
        ]),
      S('s4b3', "OK, Mum. Vegetables first, then ice cream!",
        '好的，妈妈。先吃蔬菜，再吃冰淇淋！', [
          W('OK', '好的', '/oʊˈkeɪ/'), W('Mum', '妈妈', '/mʌm/'),
          W('Vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/'), W('first', '首先', '/fɜːrst/'),
          W('then', '然后', '/ðɛn/'), W('ice', '冰', '/aɪs/'),
          W('cream', '奶油', '/kriːm/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('rice', '米饭', '/raɪs/'), W('vegetable', '蔬菜', '/ˈvɛdʒtəbl/'),
    W('fruit', '水果', '/fruːt/'), W('healthy', '健康的', '/ˈhɛlθi/'),
    W('hungry', '饿的', '/ˈhʌŋɡri/'), W('eat', '吃', '/iːt/'),
    W('drink', '喝', '/drɪŋk/'), W('water', '水', '/ˈwɔːtər/'),
    W('milk', '牛奶', '/mɪlk/'), W('bread', '面包', '/brɛd/'),
    W('egg', '鸡蛋', '/ɛɡ/'), W('ice cream', '冰淇淋', '/aɪs kriːm/')
  ]),

  unit('u5', 'Unit 5 Old Toys', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "What's in this big box?",
        '这个大盒子里面有什么？', [
          W("What's", '什么是', '/wʌts/'), W('in', '在……里面', '/ɪn/'),
          W('this', '这个', '/ðɪs/'), W('big', '大的', '/bɪɡ/'),
          W('box', '盒子', '/bɒks/')
        ]),
      S('s5a2', "These are my old toys. Look at this robot!",
        '这些是我的旧玩具。看这个机器人！', [
          W('These', '这些', '/ðiːz/'), W('are', '是', '/ɑːr/'),
          W('my', '我的', '/maɪ/'), W('old', '旧的', '/oʊld/'),
          W('toys', '玩具（复数）', '/tɔɪz/'), W('Look', '看', '/lʊk/'),
          W('at', '在', '/æt/'), W('this', '这个', '/ðɪs/'),
          W('robot', '机器人', '/ˈroʊbɒt/')
        ]),
      S('s5a3', "It still works! That's so cool.",
        '它还能动！太酷了。', [
          W('It', '它', '/ɪt/'), W('still', '仍然', '/stɪl/'),
          W('works', '工作；运转', '/wɜːrks/'), W("That's", '那是', '/ðæts/'),
          W('so', '如此', '/soʊ/'), W('cool', '酷的', '/kuːl/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "I don't play with this toy car anymore.",
        '我不再玩这个玩具车了。', [
          W('I', '我', '/aɪ/'), W("don't", '不', '/doʊnt/'),
          W('play', '玩', '/pleɪ/'), W('with', '和', '/wɪð/'),
          W('this', '这个', '/ðɪs/'), W('toy', '玩具', '/tɔɪ/'),
          W('car', '汽车', '/kɑːr/'), W('anymore', '不再', '/ˌɛniˈmɔːr/')
        ]),
      S('s5b2', "Let's give it to the younger kids. They will love it!",
        '我们把它给更小的孩子吧。他们会喜欢的！', [
          W("Let's", '让我们', '/lɛts/'), W('give', '给', '/ɡɪv/'),
          W('it', '它', '/ɪt/'), W('to', '给', '/tuː/'),
          W('the', '这', '/ðə/'), W('younger', '更小的', '/ˈjʌŋɡər/'),
          W('kids', '孩子（复数）', '/kɪdz/'), W('They', '他们', '/ðeɪ/'),
          W('will', '将会', '/wɪl/'), W('love', '喜爱', '/lʌv/'),
          W('it', '它', '/ɪt/')
        ]),
      S('s5b3', "Good idea! Old toys can make new friends happy.",
        '好主意！旧玩具可以让新朋友开心。', [
          W('Good', '好的', '/ɡʊd/'), W('idea', '主意', '/aɪˈdiːə/'),
          W('Old', '旧的', '/oʊld/'), W('toys', '玩具（复数）', '/tɔɪz/'),
          W('can', '可以', '/kæn/'), W('make', '使', '/meɪk/'),
          W('new', '新的', '/nuː/'), W('friends', '朋友（复数）', '/frɛndz/'),
          W('happy', '快乐的', '/ˈhæpi/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('toy', '玩具', '/tɔɪ/'), W('old', '旧的', '/oʊld/'),
    W('robot', '机器人', '/ˈroʊbɒt/'), W('car', '汽车', '/kɑːr/'),
    W('doll', '娃娃', '/dɒl/'), W('ball', '球', '/bɔːl/'),
    W('give', '给', '/ɡɪv/'), W('still', '仍然', '/stɪl/'),
    W('idea', '主意', '/aɪˈdiːə/'), W('young', '年轻的', '/jʌŋ/'),
    W('reuse', '再利用', '/riːˈjuːz/'), W('share', '分享', '/ʃɛr/')
  ]),

  unit('u6', 'Unit 6 Numbers in Life', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "How many apples do we need?",
        '我们需要多少个苹果？', [
          W('How', '多少', '/haʊ/'), W('many', '许多', '/ˈmɛni/'),
          W('apples', '苹果（复数）', '/ˈæplz/'), W('do', '（助动词）', '/duː/'),
          W('we', '我们', '/wiː/'), W('need', '需要', '/niːd/')
        ]),
      S('s6a2', "We need six apples for the fruit salad.",
        '我们需要六个苹果做水果沙拉。', [
          W('We', '我们', '/wiː/'), W('need', '需要', '/niːd/'),
          W('six', '六', '/sɪks/'), W('apples', '苹果（复数）', '/ˈæplz/'),
          W('for', '为了', '/fɔːr/'), W('the', '这', '/ðə/'),
          W('fruit', '水果', '/fruːt/'), W('salad', '沙拉', '/ˈsæləd/')
        ]),
      S('s6a3', "Let me count: one, two, three... six apples!",
        '让我数数：一、二、三……六个苹果！', [
          W('Let', '让', '/lɛt/'), W('me', '我', '/miː/'),
          W('count', '数', '/kaʊnt/'), W('one', '一', '/wʌn/'),
          W('two', '二', '/tuː/'), W('three', '三', '/θriː/'),
          W('six', '六', '/sɪks/'), W('apples', '苹果（复数）', '/ˈæplz/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "How much is this notebook?",
        '这个笔记本多少钱？', [
          W('How', '多少', '/haʊ/'), W('much', '多少（不可数）', '/mʌtʃ/'),
          W('is', '是', '/ɪz/'), W('this', '这个', '/ðɪs/'),
          W('notebook', '笔记本', '/ˈnoʊtbʊk/')
        ]),
      S('s6b2', "It's five yuan.",
        '五元。', [
          W("It's", '它是', '/ɪts/'), W('five', '五', '/faɪv/'),
          W('yuan', '元', '/juˈɑːn/')
        ]),
      S('s6b3', "OK, I'll take it. Numbers help us shop!",
        '好的，我买了。数字帮我们购物！', [
          W('OK', '好的', '/oʊˈkeɪ/'), W("I'll", '我将', '/aɪl/'),
          W('take', '拿；买', '/teɪk/'), W('it', '它', '/ɪt/'),
          W('Numbers', '数字（复数）', '/ˈnʌmbərz/'), W('help', '帮助', '/hɛlp/'),
          W('us', '我们', '/ʌs/'), W('shop', '购物', '/ʃɒp/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('number', '数字', '/ˈnʌmbər/'), W('count', '数数', '/kaʊnt/'),
    W('how many', '多少', '/haʊ ˈmɛni/'), W('need', '需要', '/niːd/'),
    W('one', '一', '/wʌn/'), W('two', '二', '/tuː/'),
    W('three', '三', '/θriː/'), W('four', '四', '/fɔːr/'),
    W('five', '五', '/faɪv/'), W('six', '六', '/sɪks/'),
    W('seven', '七', '/ˈsɛvn/'), W('eight', '八', '/eɪt/'),
    W('nine', '九', '/naɪn/'), W('ten', '十', '/tɛn/'),
    W('much', '多少（不可数）', '/mʌtʃ/'), W('yuan', '元', '/juˈɑːn/')
  ])
]);

// ====================================================================
//  四年级上册  (pep-4a)
// ====================================================================
const pep4a = book('pep-4a', '人教版 PEP 四年级上册', 4, '上', '#4ECDC4', [
  unit('u1', 'Unit 1 Helping at Home', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "Mum, I can help you clean the room.",
        '妈妈，我可以帮你打扫房间。', [
          W('Mum', '妈妈', '/mʌm/'), W('I', '我', '/aɪ/'),
          W('can', '可以', '/kæn/'), W('help', '帮助', '/hɛlp/'),
          W('you', '你', '/juː/'), W('clean', '打扫', '/kliːn/'),
          W('the', '这', '/ðə/'), W('room', '房间', '/ruːm/')
        ]),
      S('s1a2', "Thank you, dear. Can you sweep the floor?",
        '谢谢，亲爱的。你能扫地吗？', [
          W('Thank', '感谢', '/θæŋk/'), W('you', '你', '/juː/'),
          W('dear', '亲爱的', '/dɪr/'), W('Can', '能', '/kæn/'),
          W('you', '你', '/juː/'), W('sweep', '扫', '/swiːp/'),
          W('the', '这', '/ðə/'), W('floor', '地板', '/flɔːr/')
        ]),
      S('s1a3', "Sure! I can sweep the floor very well.",
        '当然！我扫地扫得很好。', [
          W('Sure', '当然', '/ʃʊr/'), W('I', '我', '/aɪ/'),
          W('can', '可以', '/kæn/'), W('sweep', '扫', '/swiːp/'),
          W('the', '这', '/ðə/'), W('floor', '地板', '/flɔːr/'),
          W('very', '非常', '/ˈvɛri/'), W('well', '好地', '/wɛl/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "Dad, let me wash the dishes tonight.",
        '爸爸，今晚让我来洗碗。', [
          W('Dad', '爸爸', '/dæd/'), W('let', '让', '/lɛt/'),
          W('me', '我', '/miː/'), W('wash', '洗', '/wɒʃ/'),
          W('the', '这', '/ðə/'), W('dishes', '碗碟（复数）', '/ˈdɪʃɪz/'),
          W('tonight', '今晚', '/təˈnaɪt/')
        ]),
      S('s1b2', "That's very kind of you. I'll dry the dishes.",
        '你真贴心。我来擦干碗碟。', [
          W("That's", '那是', '/ðæts/'), W('very', '非常', '/ˈvɛri/'),
          W('kind', '善良的', '/kaɪnd/'), W('of', '……的', '/ʌv/'),
          W('you', '你', '/juː/'), W("I'll", '我将', '/aɪl/'),
          W('dry', '擦干', '/draɪ/'), W('the', '这', '/ðə/'),
          W('dishes', '碗碟（复数）', '/ˈdɪʃɪz/')
        ]),
      S('s1b3', "Teamwork makes housework easy!",
        '团队合作让家务变简单！', [
          W('Teamwork', '团队合作', '/ˈtiːmwɜːrk/'), W('makes', '使', '/meɪks/'),
          W('housework', '家务', '/ˈhaʊswɜːrk/'), W('easy', '容易的', '/ˈiːzi/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('clean', '打扫', '/kliːn/'), W('sweep', '扫', '/swiːp/'),
    W('floor', '地板', '/flɔːr/'), W('wash', '洗', '/wɒʃ/'),
    W('dish', '碗碟', '/dɪʃ/'), W('dry', '擦干', '/draɪ/'),
    W('help', '帮助', '/hɛlp/'), W('housework', '家务', '/ˈhaʊswɜːrk/'),
    W('room', '房间', '/ruːm/'), W('kind', '善良的', '/kaɪnd/'),
    W('easy', '容易的', '/ˈiːzi/'), W('sure', '当然', '/ʃʊr/')
  ]),

  unit('u2', 'Unit 2 My Friends', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "Who's your best friend, Jack?",
        '杰克，你最好的朋友是谁？', [
          W("Who's", '谁是', '/huːz/'), W('your', '你的', '/jɔːr/'),
          W('best', '最好的', '/bɛst/'), W('friend', '朋友', '/frɛnd/'),
          W('Jack', '杰克', '/dʒæk/')
        ]),
      S('s2a2', "My best friend is Lucy. She's tall and kind.",
        '我最好的朋友是露西。她又高又善良。', [
          W('My', '我的', '/maɪ/'), W('best', '最好的', '/bɛst/'),
          W('friend', '朋友', '/frɛnd/'), W('is', '是', '/ɪz/'),
          W('Lucy', '露西', '/ˈluːsi/'), W("She's", '她是', '/ʃiːz/'),
          W('tall', '高的', '/tɔːl/'), W('and', '和', '/ænd/'),
          W('kind', '善良的', '/kaɪnd/')
        ]),
      S('s2a3', "She has long hair and big eyes.",
        '她有长头发和大眼睛。', [
          W('She', '她', '/ʃiː/'), W('has', '有', '/hæz/'),
          W('long', '长的', '/lɔːŋ/'), W('hair', '头发', '/hɛr/'),
          W('and', '和', '/ænd/'), W('big', '大的', '/bɪɡ/'),
          W('eyes', '眼睛（复数）', '/aɪz/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "Is your friend quiet or active?",
        '你的朋友是文静的还是活泼的？', [
          W('Is', '是', '/ɪz/'), W('your', '你的', '/jɔːr/'),
          W('friend', '朋友', '/frɛnd/'), W('quiet', '文静的', '/ˈkwaɪət/'),
          W('or', '或者', '/ɔːr/'), W('active', '活泼的', '/ˈæktɪv/')
        ]),
      S('s2b2', "She's a little quiet, but she's very friendly.",
        '她有点文静，但她很友好。', [
          W("She's", '她是', '/ʃiːz/'), W('a', '一点', '/ə/'),
          W('little', '有点', '/ˈlɪtl/'), W('quiet', '文静的', '/ˈkwaɪət/'),
          W('but', '但是', '/bʌt/'), W("she's", '她是', '/ʃiːz/'),
          W('very', '非常', '/ˈvɛri/'), W('friendly', '友好的', '/ˈfrɛndli/')
        ]),
      S('s2b3', "A good friend listens and shares.",
        '好朋友会倾听和分享。', [
          W('A', '一个', '/ə/'), W('good', '好的', '/ɡʊd/'),
          W('friend', '朋友', '/frɛnd/'), W('listens', '倾听', '/ˈlɪsnz/'),
          W('and', '和', '/ænd/'), W('shares', '分享', '/ʃɛrz/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('friend', '朋友', '/frɛnd/'), W('best', '最好的', '/bɛst/'),
    W('tall', '高的', '/tɔːl/'), W('short', '矮的', '/ʃɔːrt/'),
    W('kind', '善良的', '/kaɪnd/'), W('quiet', '文静的', '/ˈkwaɪət/'),
    W('active', '活泼的', '/ˈæktɪv/'), W('friendly', '友好的', '/ˈfrɛndli/'),
    W('hair', '头发', '/hɛr/'), W('eye', '眼睛', '/aɪ/'),
    W('long', '长的', '/lɔːŋ/'), W('big', '大的', '/bɪɡ/')
  ]),

  unit('u3', 'Unit 3 Places We Live In', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "Welcome to my home! This is the living room.",
        '欢迎来我家！这是客厅。', [
          W('Welcome', '欢迎', '/ˈwɛlkəm/'), W('to', '到', '/tuː/'),
          W('my', '我的', '/maɪ/'), W('home', '家', '/hoʊm/'),
          W('This', '这', '/ðɪs/'), W('is', '是', '/ɪz/'),
          W('the', '这', '/ðə/'), W('living', '起居', '/ˈlɪvɪŋ/'),
          W('room', '房间', '/ruːm/')
        ]),
      S('s3a2', "It's so warm and cosy! Where is your bedroom?",
        '真温馨舒适！你的卧室在哪里？', [
          W("It's", '它是', '/ɪts/'), W('so', '如此', '/soʊ/'),
          W('warm', '温暖的', '/wɔːrm/'), W('and', '和', '/ænd/'),
          W('cosy', '舒适的', '/ˈkoʊzi/'), W('Where', '哪里', '/wɛr/'),
          W('is', '是', '/ɪz/'), W('your', '你的', '/jɔːr/'),
          W('bedroom', '卧室', '/ˈbɛdrʊm/')
        ]),
      S('s3a3', "It's upstairs, next to the bathroom.",
        '在楼上，浴室旁边。', [
          W("It's", '它是', '/ɪts/'), W('upstairs', '楼上', '/ʌpˈstɛrz/'),
          W('next', '下一个', '/nɛkst/'), W('to', '到', '/tuː/'),
          W('the', '这', '/ðə/'), W('bathroom', '浴室', '/ˈbæθruːm/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "Do you live in a house or an apartment?",
        '你住的是房子还是公寓？', [
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('live', '住', '/lɪv/'), W('in', '在……里', '/ɪn/'),
          W('a', '一个', '/ə/'), W('house', '房子', '/haʊs/'),
          W('or', '或者', '/ɔːr/'), W('an', '一个', '/æn/'),
          W('apartment', '公寓', '/əˈpɑːrtmənt/')
        ]),
      S('s3b2', "I live in an apartment on the fifth floor.",
        '我住在五楼的一间公寓。', [
          W('I', '我', '/aɪ/'), W('live', '住', '/lɪv/'),
          W('in', '在……里', '/ɪn/'), W('an', '一个', '/æn/'),
          W('apartment', '公寓', '/əˈpɑːrtmənt/'), W('on', '在', '/ɒn/'),
          W('the', '这', '/ðə/'), W('fifth', '第五', '/fɪfθ/'),
          W('floor', '楼层', '/flɔːr/')
        ]),
      S('s3b3', "There's a nice park near my home.",
        '我家附近有一个漂亮的公园。', [
          W("There's", '有', '/ðɛrz/'), W('a', '一个', '/ə/'),
          W('nice', '好的', '/naɪs/'), W('park', '公园', '/pɑːrk/'),
          W('near', '在……附近', '/nɪr/'), W('my', '我的', '/maɪ/'),
          W('home', '家', '/hoʊm/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('home', '家', '/hoʊm/'), W('house', '房子', '/haʊs/'),
    W('apartment', '公寓', '/əˈpɑːrtmənt/'), W('living room', '客厅', '/ˈlɪvɪŋ ruːm/'),
    W('bedroom', '卧室', '/ˈbɛdrʊm/'), W('bathroom', '浴室', '/ˈbæθruːm/'),
    W('kitchen', '厨房', '/ˈkɪtʃɪn/'), W('upstairs', '楼上', '/ʌpˈstɛrz/'),
    W('park', '公园', '/pɑːrk/'), W('near', '在……附近', '/nɪr/'),
    W('warm', '温暖的', '/wɔːrm/'), W('cosy', '舒适的', '/ˈkoʊzi/')
  ]),

  unit('u4', 'Unit 4 Helping in the Community', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "Let's go to the community centre today.",
        '我们今天去社区中心吧。', [
          W("Let's", '让我们', '/lɛts/'), W('go', '去', '/ɡoʊ/'),
          W('to', '到', '/tuː/'), W('the', '这', '/ðə/'),
          W('community', '社区', '/kəˈmjuːnɪti/'), W('centre', '中心', '/ˈsɛntər/'),
          W('today', '今天', '/təˈdeɪ/')
        ]),
      S('s4a2', "What can we do there?",
        '我们可以在那里做什么？', [
          W('What', '什么', '/wʌt/'), W('can', '可以', '/kæn/'),
          W('we', '我们', '/wiː/'), W('do', '做', '/duː/'),
          W('there', '那里', '/ðɛr/')
        ]),
      S('s4a3', "We can help clean the garden and plant flowers.",
        '我们可以帮忙打扫花园、种花。', [
          W('We', '我们', '/wiː/'), W('can', '可以', '/kæn/'),
          W('help', '帮助', '/hɛlp/'), W('clean', '打扫', '/kliːn/'),
          W('the', '这', '/ðə/'), W('garden', '花园', '/ˈɡɑːrdn/'),
          W('and', '和', '/ænd/'), W('plant', '种植', '/plænt/'),
          W('flowers', '花（复数）', '/ˈflaʊərz/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "The community library needs volunteers.",
        '社区图书馆需要志愿者。', [
          W('The', '这', '/ðə/'), W('community', '社区', '/kəˈmjuːnɪti/'),
          W('library', '图书馆', '/ˈlaɪbrɛri/'), W('needs', '需要', '/niːdz/'),
          W('volunteers', '志愿者（复数）', '/ˌvɒlənˈtɪrz/')
        ]),
      S('s4b2', "I can help sort the books. I love reading!",
        '我可以帮忙整理书籍。我喜欢阅读！', [
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('help', '帮助', '/hɛlp/'), W('sort', '整理', '/sɔːrt/'),
          W('the', '这', '/ðə/'), W('books', '书（复数）', '/bʊks/'),
          W('I', '我', '/aɪ/'), W('love', '喜爱', '/lʌv/'),
          W('reading', '阅读', '/ˈriːdɪŋ/')
        ]),
      S('s4b3', "Helping others makes our community stronger!",
        '帮助他人让社区更强大！', [
          W('Helping', '帮助', '/ˈhɛlpɪŋ/'), W('others', '他人', '/ˈʌðərz/'),
          W('makes', '使', '/meɪks/'), W('our', '我们的', '/aʊr/'),
          W('community', '社区', '/kəˈmjuːnɪti/'), W('stronger', '更强大的', '/ˈstrɔːŋɡər/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('community', '社区', '/kəˈmjuːnɪti/'), W('centre', '中心', '/ˈsɛntər/'),
    W('library', '图书馆', '/ˈlaɪbrɛri/'), W('volunteer', '志愿者', '/ˌvɒlənˈtɪr/'),
    W('help', '帮助', '/hɛlp/'), W('clean', '打扫', '/kliːn/'),
    W('garden', '花园', '/ˈɡɑːrdn/'), W('plant', '种植', '/plænt/'),
    W('flower', '花', '/ˈflaʊər/'), W('sort', '整理', '/sɔːrt/'),
    W('book', '书', '/bʊk/'), W('strong', '强大的', '/strɔːŋ/')
  ]),

  unit('u5', 'Unit 5 The Weather and Us', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "What's the weather like today?",
        '今天天气怎么样？', [
          W("What's", '什么是', '/wʌts/'), W('the', '这', '/ðə/'),
          W('weather', '天气', '/ˈwɛðər/'), W('like', '像', '/laɪk/'),
          W('today', '今天', '/təˈdeɪ/')
        ]),
      S('s5a2', "It's sunny and warm. Great for playing outside!",
        '晴天、暖和。适合出去玩！', [
          W("It's", '它是', '/ɪts/'), W('sunny', '晴朗的', '/ˈsʌni/'),
          W('and', '和', '/ænd/'), W('warm', '温暖的', '/wɔːrm/'),
          W('Great', '很好的', '/ɡreɪt/'), W('for', '对于', '/fɔːr/'),
          W('playing', '玩', '/ˈpleɪɪŋ/'), W('outside', '在外面', '/aʊtˈsaɪd/')
        ]),
      S('s5a3', "Don't forget your hat! The sun is strong.",
        '别忘了戴帽子！太阳很大。', [
          W("Don't", '不要', '/doʊnt/'), W('forget', '忘记', '/fərˈɡɛt/'),
          W('your', '你的', '/jɔːr/'), W('hat', '帽子', '/hæt/'),
          W('The', '这', '/ðə/'), W('sun', '太阳', '/sʌn/'),
          W('is', '是', '/ɪz/'), W('strong', '强烈的', '/strɔːŋ/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "It's going to rain this afternoon.",
        '今天下午要下雨。', [
          W("It's", '它是', '/ɪts/'), W('going', '将要', '/ˈɡoʊɪŋ/'),
          W('to', '（不定式）', '/tuː/'), W('rain', '下雨', '/reɪn/'),
          W('this', '这个', '/ðɪs/'), W('afternoon', '下午', '/ˌæftərˈnuːn/')
        ]),
      S('s5b2', "I'll take my umbrella. Do you have one?",
        '我会带我的伞。你有吗？', [
          W("I'll", '我将', '/aɪl/'), W('take', '带', '/teɪk/'),
          W('my', '我的', '/maɪ/'), W('umbrella', '雨伞', '/ʌmˈbrɛlə/'),
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('have', '有', '/hæv/'), W('one', '一个', '/wʌn/')
        ]),
      S('s5b3', "Yes, I always carry one in my bag.",
        '有，我包里总放着一把。', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('always', '总是', '/ˈɔːlweɪz/'), W('carry', '携带', '/ˈkæri/'),
          W('one', '一个', '/wʌn/'), W('in', '在……里', '/ɪn/'),
          W('my', '我的', '/maɪ/'), W('bag', '包', '/bæɡ/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('weather', '天气', '/ˈwɛðər/'), W('sunny', '晴朗的', '/ˈsʌni/'),
    W('rainy', '下雨的', '/ˈreɪni/'), W('cloudy', '多云的', '/ˈklaʊdi/'),
    W('windy', '有风的', '/ˈwɪndi/'), W('warm', '温暖的', '/wɔːrm/'),
    W('cold', '冷的', '/koʊld/'), W('hot', '热的', '/hɒt/'),
    W('umbrella', '雨伞', '/ʌmˈbrɛlə/'), W('hat', '帽子', '/hæt/'),
    W('rain', '雨；下雨', '/reɪn/'), W('forget', '忘记', '/fərˈɡɛt/')
  ]),

  unit('u6', 'Unit 6 Changing for the Seasons', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "Which season do you like best?",
        '你最喜欢哪个季节？', [
          W('Which', '哪个', '/wɪtʃ/'), W('season', '季节', '/ˈsiːzn/'),
          W('do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('like', '喜欢', '/laɪk/'), W('best', '最', '/bɛst/')
        ]),
      S('s6a2', "I like spring best. Flowers bloom everywhere.",
        '我最喜欢春天。到处花开。', [
          W('I', '我', '/aɪ/'), W('like', '喜欢', '/laɪk/'),
          W('spring', '春天', '/sprɪŋ/'), W('best', '最', '/bɛst/'),
          W('Flowers', '花（复数）', '/ˈflaʊərz/'), W('bloom', '开花', '/bluːm/'),
          W('everywhere', '到处', '/ˈɛvriwɛr/')
        ]),
      S('s6a3', "I like winter because I can make a snowman!",
        '我喜欢冬天因为可以堆雪人！', [
          W('I', '我', '/aɪ/'), W('like', '喜欢', '/laɪk/'),
          W('winter', '冬天', '/ˈwɪntər/'), W('because', '因为', '/bɪˈkɔːz/'),
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('make', '做；堆', '/meɪk/'), W('a', '一个', '/ə/'),
          W('snowman', '雪人', '/ˈsnoʊmæn/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "The leaves turn yellow in autumn.",
        '秋天树叶变黄。', [
          W('The', '这', '/ðə/'), W('leaves', '树叶（复数）', '/liːvz/'),
          W('turn', '变成', '/tɜːrn/'), W('yellow', '黄色的', '/ˈjɛloʊ/'),
          W('in', '在', '/ɪn/'), W('autumn', '秋天', '/ˈɔːtəm/')
        ]),
      S('s6b2', "And it gets cooler. We need to wear jackets.",
        '而且天气变凉了。我们需要穿外套。', [
          W('And', '而且', '/ænd/'), W('it', '它', '/ɪt/'),
          W('gets', '变得', '/ɡɛts/'), W('cooler', '更凉爽', '/ˈkuːlər/'),
          W('We', '我们', '/wiː/'), W('need', '需要', '/niːd/'),
          W('to', '（不定式）', '/tuː/'), W('wear', '穿', '/wɛr/'),
          W('jackets', '外套（复数）', '/ˈdʒækɪts/')
        ]),
      S('s6b3', "Each season brings different fun activities!",
        '每个季节都有不同的有趣活动！', [
          W('Each', '每个', '/iːtʃ/'), W('season', '季节', '/ˈsiːzn/'),
          W('brings', '带来', '/brɪŋz/'), W('different', '不同的', '/ˈdɪfrənt/'),
          W('fun', '有趣的', '/fʌn/'), W('activities', '活动（复数）', '/ækˈtɪvɪtiz/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('spring', '春天', '/sprɪŋ/'), W('summer', '夏天', '/ˈsʌmər/'),
    W('autumn', '秋天', '/ˈɔːtəm/'), W('winter', '冬天', '/ˈwɪntər/'),
    W('season', '季节', '/ˈsiːzn/'), W('warm', '温暖的', '/wɔːrm/'),
    W('cool', '凉爽的', '/kuːl/'), W('cold', '冷的', '/koʊld/'),
    W('hot', '热的', '/hɒt/'), W('leaf', '树叶', '/liːf/'),
    W('snowman', '雪人', '/ˈsnoʊmæn/'), W('jacket', '外套', '/ˈdʒækɪt/')
  ])
]);

// ====================================================================
//  四年级下册  (pep-4b)
// ====================================================================
const pep4b = book('pep-4b', '人教版 PEP 四年级下册', 4, '下', '#45B7D1', [
  unit('u1', 'Unit 1 Class Rules', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "What are the rules in our class?",
        '我们班有什么规则？', [
          W('What', '什么', '/wʌt/'), W('are', '是', '/ɑːr/'),
          W('the', '这', '/ðə/'), W('rules', '规则（复数）', '/ruːlz/'),
          W('in', '在……里', '/ɪn/'), W('our', '我们的', '/aʊr/'),
          W('class', '班级', '/klæs/')
        ]),
      S('s1a2', "We must listen to the teacher carefully.",
        '我们必须认真听老师讲。', [
          W('We', '我们', '/wiː/'), W('must', '必须', '/mʌst/'),
          W('listen', '听', '/ˈlɪsn/'), W('to', '对', '/tuː/'),
          W('the', '这', '/ðə/'), W('teacher', '老师', '/ˈtiːtʃər/'),
          W('carefully', '认真地', '/ˈkɛrfəli/')
        ]),
      S('s1a3', "We should raise our hand before speaking.",
        '我们应该先举手再发言。', [
          W('We', '我们', '/wiː/'), W('should', '应该', '/ʃʊd/'),
          W('raise', '举起', '/reɪz/'), W('our', '我们的', '/aʊr/'),
          W('hand', '手', '/hænd/'), W('before', '在……之前', '/bɪˈfɔːr/'),
          W('speaking', '说话', '/ˈspiːkɪŋ/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "Don't run in the classroom. It's dangerous.",
        '别在教室里跑。很危险。', [
          W("Don't", '不要', '/doʊnt/'), W('run', '跑', '/rʌn/'),
          W('in', '在……里', '/ɪn/'), W('the', '这', '/ðə/'),
          W('classroom', '教室', '/ˈklæsrʊm/'), W("It's", '它是', '/ɪts/'),
          W('dangerous', '危险的', '/ˈdeɪndʒərəs/')
        ]),
      S('s1b2', "Keep the classroom clean and tidy, please.",
        '请保持教室干净整洁。', [
          W('Keep', '保持', '/kiːp/'), W('the', '这', '/ðə/'),
          W('classroom', '教室', '/ˈklæsrʊm/'), W('clean', '干净的', '/kliːn/'),
          W('and', '和', '/ænd/'), W('tidy', '整洁的', '/ˈtaɪdi/'),
          W('please', '请', '/pliːz/')
        ]),
      S('s1b3', "Good rules help us learn better together!",
        '好的规则帮助我们更好地一起学习！', [
          W('Good', '好的', '/ɡʊd/'), W('rules', '规则（复数）', '/ruːlz/'),
          W('help', '帮助', '/hɛlp/'), W('us', '我们', '/ʌs/'),
          W('learn', '学习', '/lɜːrn/'), W('better', '更好地', '/ˈbɛtər/'),
          W('together', '一起', '/təˈɡɛðər/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('rule', '规则', '/ruːl/'), W('must', '必须', '/mʌst/'),
    W('should', '应该', '/ʃʊd/'), W('listen', '听', '/ˈlɪsn/'),
    W('raise', '举起', '/reɪz/'), W('hand', '手', '/hænd/'),
    W('run', '跑', '/rʌn/'), W('clean', '干净的', '/kliːn/'),
    W('tidy', '整洁的', '/ˈtaɪdi/'), W('carefully', '认真地', '/ˈkɛrfəli/'),
    W('classroom', '教室', '/ˈklæsrʊm/'), W('dangerous', '危险的', '/ˈdeɪndʒərəs/')
  ]),

  unit('u2', 'Unit 2 Family Rules', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "What rules do you have at home?",
        '你家有什么规矩？', [
          W('What', '什么', '/wʌt/'), W('rules', '规则（复数）', '/ruːlz/'),
          W('do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('have', '有', '/hæv/'), W('at', '在', '/æt/'),
          W('home', '家', '/hoʊm/')
        ]),
      S('s2a2', "I must finish my homework before watching TV.",
        '我必须做完作业才能看电视。', [
          W('I', '我', '/aɪ/'), W('must', '必须', '/mʌst/'),
          W('finish', '完成', '/ˈfɪnɪʃ/'), W('my', '我的', '/maɪ/'),
          W('homework', '家庭作业', '/ˈhoʊmwɜːrk/'), W('before', '在……之前', '/bɪˈfɔːr/'),
          W('watching', '看', '/ˈwɒtʃɪŋ/'), W('TV', '电视', '/ˌtiː ˈviː/')
        ]),
      S('s2a3', "I help my parents with chores on weekends.",
        '我周末帮父母做家务。', [
          W('I', '我', '/aɪ/'), W('help', '帮助', '/hɛlp/'),
          W('my', '我的', '/maɪ/'), W('parents', '父母', '/ˈpɛrənts/'),
          W('with', '在……方面', '/wɪð/'), W('chores', '家务', '/tʃɔːrz/'),
          W('on', '在', '/ɒn/'), W('weekends', '周末', '/ˈwiːkɛndz/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "Mum says no phones at the dinner table.",
        '妈妈说餐桌上不能玩手机。', [
          W('Mum', '妈妈', '/mʌm/'), W('says', '说', '/sɛz/'),
          W('no', '不许', '/noʊ/'), W('phones', '手机（复数）', '/foʊnz/'),
          W('at', '在', '/æt/'), W('the', '这', '/ðə/'),
          W('dinner', '晚餐', '/ˈdɪnər/'), W('table', '桌子', '/ˈteɪbl/')
        ]),
      S('s2b2', "That's a good rule. Family time is important!",
        '那是个好规矩。家庭时光很重要！', [
          W("That's", '那是', '/ðæts/'), W('a', '一个', '/ə/'),
          W('good', '好的', '/ɡʊd/'), W('rule', '规则', '/ruːl/'),
          W('Family', '家庭', '/ˈfæməli/'), W('time', '时间', '/taɪm/'),
          W('is', '是', '/ɪz/'), W('important', '重要的', '/ɪmˈpɔːrtnt/')
        ]),
      S('s2b3', "Rules at home keep us safe and happy.",
        '家里的规矩让我们安全快乐。', [
          W('Rules', '规则（复数）', '/ruːlz/'), W('at', '在', '/æt/'),
          W('home', '家', '/hoʊm/'), W('keep', '保持', '/kiːp/'),
          W('us', '我们', '/ʌs/'), W('safe', '安全的', '/seɪf/'),
          W('and', '和', '/ænd/'), W('happy', '快乐的', '/ˈhæpi/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('homework', '家庭作业', '/ˈhoʊmwɜːrk/'), W('finish', '完成', '/ˈfɪnɪʃ/'),
    W('chore', '家务', '/tʃɔːr/'), W('rule', '规则', '/ruːl/'),
    W('family', '家庭', '/ˈfæməli/'), W('dinner', '晚餐', '/ˈdɪnər/'),
    W('table', '桌子', '/ˈteɪbl/'), W('phone', '手机', '/foʊn/'),
    W('safe', '安全的', '/seɪf/'), W('important', '重要的', '/ɪmˈpɔːrtnt/'),
    W('weekend', '周末', '/ˈwiːkɛnd/'), W('parent', '父母', '/ˈpɛrənt/')
  ]),

  unit('u3', 'Unit 3 Time for School', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "What time do you get up?",
        '你几点起床？', [
          W('What', '什么', '/wʌt/'), W('time', '时间', '/taɪm/'),
          W('do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('get', '（起）', '/ɡɛt/'), W('up', '（床）', '/ʌp/')
        ]),
      S('s3a2', "I get up at seven o'clock every morning.",
        '我每天早上七点起床。', [
          W('I', '我', '/aɪ/'), W('get', '（起）', '/ɡɛt/'),
          W('up', '（床）', '/ʌp/'), W('at', '在', '/æt/'),
          W('seven', '七', '/ˈsɛvn/'), W("o'clock", '……点钟', '/əˈklɒk/'),
          W('every', '每个', '/ˈɛvri/'), W('morning', '早上', '/ˈmɔːrnɪŋ/')
        ]),
      S('s3a3', "School starts at eight. Don't be late!",
        '八点上课。别迟到！', [
          W('School', '学校', '/skuːl/'), W('starts', '开始', '/stɑːrts/'),
          W('at', '在', '/æt/'), W('eight', '八', '/eɪt/'),
          W("Don't", '不要', '/doʊnt/'), W('be', '是', '/biː/'),
          W('late', '迟到的', '/leɪt/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "Hurry up, Tom! You'll be late for school!",
        '快点，汤姆！你上学要迟到了！', [
          W('Hurry', '赶快', '/ˈhʌri/'), W('up', '起来', '/ʌp/'),
          W('Tom', '汤姆', '/tɒm/'), W("You'll", '你将', '/juːl/'),
          W('be', '是', '/biː/'), W('late', '迟到的', '/leɪt/'),
          W('for', '对于', '/fɔːr/'), W('school', '学校', '/skuːl/')
        ]),
      S('s3b2', "I'm coming! I just need to pack my schoolbag.",
        '我来了！我只需要收拾书包。', [
          W("I'm", '我是', '/aɪm/'), W('coming', '来', '/ˈkʌmɪŋ/'),
          W('I', '我', '/aɪ/'), W('just', '只', '/dʒʌst/'),
          W('need', '需要', '/niːd/'), W('to', '（不定式）', '/tuː/'),
          W('pack', '收拾', '/pæk/'), W('my', '我的', '/maɪ/'),
          W('schoolbag', '书包', '/ˈskuːlbæɡ/')
        ]),
      S('s3b3', "Being on time shows respect for others.",
        '准时是对他人的尊重。', [
          W('Being', '是；做到', '/ˈbiːɪŋ/'), W('on', '在', '/ɒn/'),
          W('time', '时间', '/taɪm/'), W('shows', '表示', '/ʃoʊz/'),
          W('respect', '尊重', '/rɪˈspɛkt/'), W('for', '对', '/fɔːr/'),
          W('others', '他人', '/ˈʌðərz/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('time', '时间', '/taɪm/'), W("o'clock", '……点钟', '/əˈklɒk/'),
    W('morning', '早上', '/ˈmɔːrnɪŋ/'), W('school', '学校', '/skuːl/'),
    W('late', '迟到的', '/leɪt/'), W('hurry', '赶快', '/ˈhʌri/'),
    W('pack', '收拾', '/pæk/'), W('schoolbag', '书包', '/ˈskuːlbæɡ/'),
    W('start', '开始', '/stɑːrt/'), W('get up', '起床', '/ɡɛt ʌp/'),
    W('every', '每个', '/ˈɛvri/'), W('respect', '尊重', '/rɪˈspɛkt/')
  ]),

  unit('u4', 'Unit 4 Going Shopping', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "Let's go shopping! I need new shoes.",
        '我们去购物吧！我需要新鞋。', [
          W("Let's", '让我们', '/lɛts/'), W('go', '去', '/ɡoʊ/'),
          W('shopping', '购物', '/ˈʃɒpɪŋ/'), W('I', '我', '/aɪ/'),
          W('need', '需要', '/niːd/'), W('new', '新的', '/nuː/'),
          W('shoes', '鞋子（复数）', '/ʃuːz/')
        ]),
      S('s4a2', "How about this pair? They look nice.",
        '这双怎么样？看起来不错。', [
          W('How', '怎样', '/haʊ/'), W('about', '关于', '/əˈbaʊt/'),
          W('this', '这', '/ðɪs/'), W('pair', '双', '/pɛr/'),
          W('They', '它们', '/ðeɪ/'), W('look', '看起来', '/lʊk/'),
          W('nice', '好的', '/naɪs/')
        ]),
      S('s4a3', "Can I try them on? Size 36, please.",
        '我可以试穿吗？请拿 36 码。', [
          W('Can', '可以', '/kæn/'), W('I', '我', '/aɪ/'),
          W('try', '试', '/traɪ/'), W('them', '它们', '/ðɛm/'),
          W('on', '穿上', '/ɒn/'), W('Size', '尺码', '/saɪz/'),
          W('36', '36', '/ˈθɜːrti sɪks/'), W('please', '请', '/pliːz/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "How much is this T-shirt?",
        '这件 T 恤多少钱？', [
          W('How', '多少', '/haʊ/'), W('much', '（多少钱）', '/mʌtʃ/'),
          W('is', '是', '/ɪz/'), W('this', '这', '/ðɪs/'),
          W('T-shirt', 'T恤', '/ˈtiːʃɜːrt/')
        ]),
      S('s4b2', "It's 45 yuan. But it's on sale today — only 30 yuan!",
        '45 元。但今天打折——只要 30 元！', [
          W("It's", '它是', '/ɪts/'), W('45', '四十五', '/ˈfɔːrti faɪv/'),
          W('yuan', '元', '/juˈɑːn/'), W('But', '但是', '/bʌt/'),
          W("it's", '它是', '/ɪts/'), W('on', '在', '/ɒn/'),
          W('sale', '打折', '/seɪl/'), W('today', '今天', '/təˈdeɪ/'),
          W('only', '只', '/ˈoʊnli/'), W('30', '三十', '/ˈθɜːrti/'),
          W('yuan', '元', '/juˈɑːn/')
        ]),
      S('s4b3', "That's a good deal! I'll take it.",
        '真划算！我买了。', [
          W("That's", '那是', '/ðæts/'), W('a', '一个', '/ə/'),
          W('good', '好的', '/ɡʊd/'), W('deal', '交易', '/diːl/'),
          W("I'll", '我将', '/aɪl/'), W('take', '拿；买', '/teɪk/'),
          W('it', '它', '/ɪt/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('shop', '购物', '/ʃɒp/'), W('need', '需要', '/niːd/'),
    W('shoes', '鞋子', '/ʃuːz/'), W('T-shirt', 'T恤', '/ˈtiːʃɜːrt/'),
    W('size', '尺码', '/saɪz/'), W('try on', '试穿', '/traɪ ɒn/'),
    W('much', '多少', '/mʌtʃ/'), W('yuan', '元', '/juˈɑːn/'),
    W('sale', '打折', '/seɪl/'), W('pair', '双', '/pɛr/'),
    W('deal', '交易', '/diːl/'), W('only', '只', '/ˈoʊnli/')
  ]),

  unit('u5', 'Unit 5 Farms and Us', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "Look at all the animals on the farm!",
        '看农场上的所有动物！', [
          W('Look', '看', '/lʊk/'), W('at', '在', '/æt/'),
          W('all', '所有', '/ɔːl/'), W('the', '这', '/ðə/'),
          W('animals', '动物（复数）', '/ˈænɪmlz/'), W('on', '在……上', '/ɒn/'),
          W('the', '这', '/ðə/'), W('farm', '农场', '/fɑːrm/')
        ]),
      S('s5a2', "I can see cows, sheep, and some chickens.",
        '我能看到牛、羊和一些鸡。', [
          W('I', '我', '/aɪ/'), W('can', '可以', '/kæn/'),
          W('see', '看见', '/siː/'), W('cows', '奶牛（复数）', '/kaʊz/'),
          W('sheep', '绵羊', '/ʃiːp/'), W('and', '和', '/ænd/'),
          W('some', '一些', '/sʌm/'), W('chickens', '鸡（复数）', '/ˈtʃɪkɪnz/')
        ]),
      S('s5a3', "The farmer is milking the cow. Can I try?",
        '农夫在挤牛奶。我可以试试吗？', [
          W('The', '这', '/ðə/'), W('farmer', '农夫', '/ˈfɑːrmər/'),
          W('is', '正在', '/ɪz/'), W('milking', '挤奶', '/ˈmɪlkɪŋ/'),
          W('the', '这', '/ðə/'), W('cow', '奶牛', '/kaʊ/'),
          W('Can', '可以', '/kæn/'), W('I', '我', '/aɪ/'),
          W('try', '尝试', '/traɪ/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "What do farmers grow on the farm?",
        '农民在农场上种什么？', [
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('farmers', '农民（复数）', '/ˈfɑːrmərz/'), W('grow', '种植', '/ɡroʊ/'),
          W('on', '在……上', '/ɒn/'), W('the', '这', '/ðə/'),
          W('farm', '农场', '/fɑːrm/')
        ]),
      S('s5b2', "They grow vegetables like tomatoes and carrots.",
        '他们种蔬菜，比如西红柿和胡萝卜。', [
          W('They', '他们', '/ðeɪ/'), W('grow', '种植', '/ɡroʊ/'),
          W('vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/'), W('like', '像', '/laɪk/'),
          W('tomatoes', '西红柿（复数）', '/təˈmeɪtoʊz/'), W('and', '和', '/ænd/'),
          W('carrots', '胡萝卜（复数）', '/ˈkærəts/')
        ]),
      S('s5b3', "Farms give us fresh food every day!",
        '农场每天给我们新鲜的食物！', [
          W('Farms', '农场（复数）', '/fɑːrmz/'), W('give', '给', '/ɡɪv/'),
          W('us', '我们', '/ʌs/'), W('fresh', '新鲜的', '/frɛʃ/'),
          W('food', '食物', '/fuːd/'), W('every', '每个', '/ˈɛvri/'),
          W('day', '天', '/deɪ/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('farm', '农场', '/fɑːrm/'), W('farmer', '农民', '/ˈfɑːrmər/'),
    W('cow', '奶牛', '/kaʊ/'), W('sheep', '绵羊', '/ʃiːp/'),
    W('chicken', '鸡', '/ˈtʃɪkɪn/'), W('grow', '种植', '/ɡroʊ/'),
    W('tomato', '西红柿', '/təˈmeɪtoʊ/'), W('carrot', '胡萝卜', '/ˈkærət/'),
    W('fresh', '新鲜的', '/frɛʃ/'), W('milk', '牛奶；挤奶', '/mɪlk/'),
    W('animal', '动物', '/ˈænɪml/'), W('food', '食物', '/fuːd/')
  ]),

  unit('u6', 'Unit 6 From Farm to Table', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "Where does milk come from?",
        '牛奶从哪里来？', [
          W('Where', '哪里', '/wɛr/'), W('does', '（助动词）', '/dʌz/'),
          W('milk', '牛奶', '/mɪlk/'), W('come', '来', '/kʌm/'),
          W('from', '从', '/frʌm/')
        ]),
      S('s6a2', "Milk comes from cows on the farm.",
        '牛奶来自农场的奶牛。', [
          W('Milk', '牛奶', '/mɪlk/'), W('comes', '来', '/kʌmz/'),
          W('from', '从', '/frʌm/'), W('cows', '奶牛（复数）', '/kaʊz/'),
          W('on', '在……上', '/ɒn/'), W('the', '这', '/ðə/'),
          W('farm', '农场', '/fɑːrm/')
        ]),
      S('s6a3', "Then it goes to the factory and then to the shop!",
        '然后它去了工厂，再到商店！', [
          W('Then', '然后', '/ðɛn/'), W('it', '它', '/ɪt/'),
          W('goes', '去', '/ɡoʊz/'), W('to', '到', '/tuː/'),
          W('the', '这', '/ðə/'), W('factory', '工厂', '/ˈfæktəri/'),
          W('and', '和', '/ænd/'), W('then', '然后', '/ðɛn/'),
          W('to', '到', '/tuː/'), W('the', '这', '/ðə/'),
          W('shop', '商店', '/ʃɒp/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "How does bread get to our table?",
        '面包是怎么到我们餐桌上的？', [
          W('How', '怎样', '/haʊ/'), W('does', '（助动词）', '/dʌz/'),
          W('bread', '面包', '/brɛd/'), W('get', '到达', '/ɡɛt/'),
          W('to', '到', '/tuː/'), W('our', '我们的', '/aʊr/'),
          W('table', '桌子', '/ˈteɪbl/')
        ]),
      S('s6b2', "First, farmers grow wheat. Then it's made into flour.",
        '首先，农民种小麦。然后它被做成面粉。', [
          W('First', '首先', '/fɜːrst/'), W('farmers', '农民（复数）', '/ˈfɑːrmərz/'),
          W('grow', '种植', '/ɡroʊ/'), W('wheat', '小麦', '/wiːt/'),
          W('Then', '然后', '/ðɛn/'), W("it's", '它是', '/ɪts/'),
          W('made', '做成', '/meɪd/'), W('into', '成为', '/ˈɪntuː/'),
          W('flour', '面粉', '/ˈflaʊər/')
        ]),
      S('s6b3', "So much work goes into the food we eat!",
        '我们吃的食物背后有这么多劳动！', [
          W('So', '如此', '/soʊ/'), W('much', '多', '/mʌtʃ/'),
          W('work', '工作；劳动', '/wɜːrk/'), W('goes', '进入', '/ɡoʊz/'),
          W('into', '进入', '/ˈɪntuː/'), W('the', '这', '/ðə/'),
          W('food', '食物', '/fuːd/'), W('we', '我们', '/wiː/'),
          W('eat', '吃', '/iːt/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('milk', '牛奶', '/mɪlk/'), W('bread', '面包', '/brɛd/'),
    W('farm', '农场', '/fɑːrm/'), W('factory', '工厂', '/ˈfæktəri/'),
    W('shop', '商店', '/ʃɒp/'), W('wheat', '小麦', '/wiːt/'),
    W('flour', '面粉', '/ˈflaʊər/'), W('table', '桌子', '/ˈteɪbl/'),
    W('first', '首先', '/fɜːrst/'), W('then', '然后', '/ðɛn/'),
    W('come from', '来自', '/kʌm frʌm/'), W('grow', '种植', '/ɡroʊ/')
  ])
]);

// ====================================================================
//  五年级上册  (pep-5a)
// ====================================================================
const pep5a = book('pep-5a', '人教版 PEP 五年级上册', 5, '上', '#96CEB4', [
  unit('u1', 'Unit 1 Different Friends', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "Tell me about your friends. What are they like?",
        '跟我说说你的朋友们。他们是什么样的？', [
          W('Tell', '告诉', '/tɛl/'), W('me', '我', '/miː/'),
          W('about', '关于', '/əˈbaʊt/'), W('your', '你的', '/jɔːr/'),
          W('friends', '朋友（复数）', '/frɛndz/'), W('What', '什么', '/wʌt/'),
          W('are', '是', '/ɑːr/'), W('they', '他们', '/ðeɪ/'),
          W('like', '像', '/laɪk/')
        ]),
      S('s1a2', "Tom is sporty — he plays basketball every day.",
        '汤姆爱运动——他每天打篮球。', [
          W('Tom', '汤姆', '/tɒm/'), W('is', '是', '/ɪz/'),
          W('sporty', '爱运动的', '/ˈspɔːrti/'), W('he', '他', '/hiː/'),
          W('plays', '打；玩', '/pleɪz/'), W('basketball', '篮球', '/ˈbæskɪtbɔːl/'),
          W('every', '每个', '/ˈɛvri/'), W('day', '天', '/deɪ/')
        ]),
      S('s1a3', "And Lily is creative. She loves painting and music.",
        '而莉莉很有创造力。她喜欢画画和音乐。', [
          W('And', '而', '/ænd/'), W('Lily', '莉莉', '/ˈlɪli/'),
          W('is', '是', '/ɪz/'), W('creative', '有创造力的', '/kriˈeɪtɪv/'),
          W('She', '她', '/ʃiː/'), W('loves', '喜爱', '/lʌvz/'),
          W('painting', '画画的', '/ˈpeɪntɪŋ/'), W('and', '和', '/ænd/'),
          W('music', '音乐', '/ˈmjuːzɪk/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "My friends and I are so different, but we get along well.",
        '我和朋友很不一样，但我们相处得很好。', [
          W('My', '我的', '/maɪ/'), W('friends', '朋友（复数）', '/frɛndz/'),
          W('and', '和', '/ænd/'), W('I', '我', '/aɪ/'),
          W('are', '是', '/ɑːr/'), W('so', '如此', '/soʊ/'),
          W('different', '不同的', '/ˈdɪfrənt/'), W('but', '但是', '/bʌt/'),
          W('we', '我们', '/wiː/'), W('get', '相处', '/ɡɛt/'),
          W('along', '（融洽）', '/əˈlɔːŋ/'), W('well', '好地', '/wɛl/')
        ]),
      S('s1b2', "That's the best part! Different friends teach us new things.",
        '这才是最棒的！不同的朋友教我们新东西。', [
          W("That's", '那是', '/ðæts/'), W('the', '这', '/ðə/'),
          W('best', '最好的', '/bɛst/'), W('part', '部分', '/pɑːrt/'),
          W('Different', '不同的', '/ˈdɪfrənt/'), W('friends', '朋友（复数）', '/frɛndz/'),
          W('teach', '教', '/tiːtʃ/'), W('us', '我们', '/ʌs/'),
          W('new', '新的', '/nuː/'), W('things', '东西', '/θɪŋz/')
        ]),
      S('s1b3', "A friend is someone who accepts you as you are.",
        '朋友就是接受真实你的人。', [
          W('A', '一个', '/ə/'), W('friend', '朋友', '/frɛnd/'),
          W('is', '是', '/ɪz/'), W('someone', '某人', '/ˈsʌmwʌn/'),
          W('who', '谁', '/huː/'), W('accepts', '接受', '/əkˈsɛpts/'),
          W('you', '你', '/juː/'), W('as', '作为', '/æz/'),
          W('you', '你', '/juː/'), W('are', '是', '/ɑːr/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('sporty', '爱运动的', '/ˈspɔːrti/'), W('creative', '有创造力的', '/kriˈeɪtɪv/'),
    W('different', '不同的', '/ˈdɪfrənt/'), W('basketball', '篮球', '/ˈbæskɪtbɔːl/'),
    W('painting', '画画的', '/ˈpeɪntɪŋ/'), W('music', '音乐', '/ˈmjuːzɪk/'),
    W('accept', '接受', '/əkˈsɛpt/'), W('get along', '相处', '/ɡɛt əˈlɔːŋ/'),
    W('someone', '某人', '/ˈsʌmwʌn/'), W('teach', '教', '/tiːtʃ/'),
    W('part', '部分', '/pɑːrt/'), W('best', '最好的', '/bɛst/')
  ]),

  unit('u2', 'Unit 2 My Feelings', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "You look worried. What's the matter?",
        '你看起来很担心。怎么了？', [
          W('You', '你', '/juː/'), W('look', '看起来', '/lʊk/'),
          W('worried', '担心的', '/ˈwʌrid/'), W("What's", '什么是', '/wʌts/'),
          W('the', '这', '/ðə/'), W('matter', '事情；问题', '/ˈmætər/')
        ]),
      S('s2a2', "I have a big test tomorrow. I feel nervous.",
        '我明天有大考。我感到紧张。', [
          W('I', '我', '/aɪ/'), W('have', '有', '/hæv/'),
          W('a', '一个', '/ə/'), W('big', '大的', '/bɪɡ/'),
          W('test', '考试', '/tɛst/'), W('tomorrow', '明天', '/təˈmɒroʊ/'),
          W('I', '我', '/aɪ/'), W('feel', '感到', '/fiːl/'),
          W('nervous', '紧张的', '/ˈnɜːrvəs/')
        ]),
      S('s2a3', "Don't worry. You've studied hard. You'll do great!",
        '别担心。你学习很努力。你会考好的！', [
          W("Don't", '不要', '/doʊnt/'), W('worry', '担心', '/ˈwʌri/'),
          W("You've", '你已经', '/juːv/'), W('studied', '学习', '/ˈstʌdid/'),
          W('hard', '努力地', '/hɑːrd/'), W("You'll", '你将会', '/juːl/'),
          W('do', '做', '/duː/'), W('great', '很好的', '/ɡreɪt/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "When I feel sad, I listen to music.",
        '当我感到难过时，我听音乐。', [
          W('When', '当……时', '/wɛn/'), W('I', '我', '/aɪ/'),
          W('feel', '感到', '/fiːl/'), W('sad', '伤心的', '/sæd/'),
          W('I', '我', '/aɪ/'), W('listen', '听', '/ˈlɪsn/'),
          W('to', '（介词）', '/tuː/'), W('music', '音乐', '/ˈmjuːzɪk/')
        ]),
      S('s2b2', "That's a good way. I like to talk to my best friend.",
        '那是个好办法。我喜欢跟我最好的朋友说。', [
          W("That's", '那是', '/ðæts/'), W('a', '一个', '/ə/'),
          W('good', '好的', '/ɡʊd/'), W('way', '方法', '/weɪ/'),
          W('I', '我', '/aɪ/'), W('like', '喜欢', '/laɪk/'),
          W('to', '（不定式）', '/tuː/'), W('talk', '说话', '/tɔːk/'),
          W('to', '对', '/tuː/'), W('my', '我的', '/maɪ/'),
          W('best', '最好的', '/bɛst/'), W('friend', '朋友', '/frɛnd/')
        ]),
      S('s2b3', "Sharing feelings makes us feel lighter.",
        '分享感受让我们更轻松。', [
          W('Sharing', '分享', '/ˈʃɛrɪŋ/'), W('feelings', '感受（复数）', '/ˈfiːlɪŋz/'),
          W('makes', '使', '/meɪks/'), W('us', '我们', '/ʌs/'),
          W('feel', '感觉', '/fiːl/'), W('lighter', '更轻松的', '/ˈlaɪtər/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('feel', '感觉', '/fiːl/'), W('feeling', '感受', '/ˈfiːlɪŋ/'),
    W('happy', '快乐的', '/ˈhæpi/'), W('sad', '伤心的', '/sæd/'),
    W('worried', '担心的', '/ˈwʌrid/'), W('nervous', '紧张的', '/ˈnɜːrvəs/'),
    W('angry', '生气的', '/ˈæŋɡri/'), W('excited', '兴奋的', '/ɪkˈsaɪtɪd/'),
    W('worry', '担心', '/ˈwʌri/'), W('share', '分享', '/ʃɛr/'),
    W('test', '考试', '/tɛst/'), W('matter', '事情；问题', '/ˈmætər/')
  ]),

  unit('u3', 'Unit 3 Work and Play', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "What do you usually do after school?",
        '你放学后通常做什么？', [
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('usually', '通常', '/ˈjuːʒuəli/'),
          W('do', '做', '/duː/'), W('after', '在……之后', '/ˈæftər/'),
          W('school', '学校', '/skuːl/')
        ]),
      S('s3a2', "I usually do my homework first. Then I play football.",
        '我通常先做作业。然后踢足球。', [
          W('I', '我', '/aɪ/'), W('usually', '通常', '/ˈjuːʒuəli/'),
          W('do', '做', '/duː/'), W('my', '我的', '/maɪ/'),
          W('homework', '家庭作业', '/ˈhoʊmwɜːrk/'), W('first', '首先', '/fɜːrst/'),
          W('Then', '然后', '/ðɛn/'), W('I', '我', '/aɪ/'),
          W('play', '玩；踢', '/pleɪ/'), W('football', '足球', '/ˈfʊtbɔːl/')
        ]),
      S('s3a3', "Balance is important. Work hard, play hard!",
        '平衡很重要。努力学习，痛快玩耍！', [
          W('Balance', '平衡', '/ˈbæləns/'), W('is', '是', '/ɪz/'),
          W('important', '重要的', '/ɪmˈpɔːrtnt/'), W('Work', '学习；工作', '/wɜːrk/'),
          W('hard', '努力地', '/hɑːrd/'), W('play', '玩耍', '/pleɪ/'),
          W('hard', '痛快地', '/hɑːrd/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "Do you have any hobbies?",
        '你有什么爱好吗？', [
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('have', '有', '/hæv/'), W('any', '任何', '/ˈɛni/'),
          W('hobbies', '爱好（复数）', '/ˈhɒbiz/')
        ]),
      S('s3b2', "Yes, I enjoy reading and playing chess.",
        '有，我喜欢阅读和下棋。', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('enjoy', '享受；喜欢', '/ɪnˈdʒɔɪ/'), W('reading', '阅读', '/ˈriːdɪŋ/'),
          W('and', '和', '/ænd/'), W('playing', '下；玩', '/ˈpleɪɪŋ/'),
          W('chess', '国际象棋', '/tʃɛs/')
        ]),
      S('s3b3', "Hobbies make life colourful and fun!",
        '爱好让生活多姿多彩！', [
          W('Hobbies', '爱好（复数）', '/ˈhɒbiz/'), W('make', '使', '/meɪk/'),
          W('life', '生活', '/laɪf/'), W('colourful', '多彩的', '/ˈkʌlərfl/'),
          W('and', '和', '/ænd/'), W('fun', '有趣的', '/fʌn/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('usually', '通常', '/ˈjuːʒuəli/'), W('homework', '家庭作业', '/ˈhoʊmwɜːrk/'),
    W('after', '在……之后', '/ˈæftər/'), W('hobby', '爱好', '/ˈhɒbi/'),
    W('enjoy', '享受；喜欢', '/ɪnˈdʒɔɪ/'), W('reading', '阅读', '/ˈriːdɪŋ/'),
    W('chess', '国际象棋', '/tʃɛs/'), W('football', '足球', '/ˈfʊtbɔːl/'),
    W('balance', '平衡', '/ˈbæləns/'), W('important', '重要的', '/ɪmˈpɔːrtnt/'),
    W('colourful', '多彩的', '/ˈkʌlərfl/'), W('life', '生活', '/laɪf/')
  ]),

  unit('u4', 'Unit 4 Healthy Habits', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "What time do you go to bed?",
        '你几点睡觉？', [
          W('What', '什么', '/wʌt/'), W('time', '时间', '/taɪm/'),
          W('do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('go', '去', '/ɡoʊ/'), W('to', '（介词）', '/tuː/'),
          W('bed', '床', '/bɛd/')
        ]),
      S('s4a2', "I go to bed at 9:30 and get up at 7:00.",
        '我九点半睡觉，七点起床。', [
          W('I', '我', '/aɪ/'), W('go', '去', '/ɡoʊ/'),
          W('to', '（介词）', '/tuː/'), W('bed', '床', '/bɛd/'),
          W('at', '在', '/æt/'), W('9:30', '九点半', '/naɪn ˈθɜːrti/'),
          W('and', '和', '/ænd/'), W('get', '（起）', '/ɡɛt/'),
          W('up', '（床）', '/ʌp/'), W('at', '在', '/æt/'),
          W('7:00', '七点', '/ˈsɛvn/')
        ]),
      S('s4a3', "That's a healthy routine. Sleep is very important!",
        '那是健康的作息。睡眠很重要！', [
          W("That's", '那是', '/ðæts/'), W('a', '一个', '/ə/'),
          W('healthy', '健康的', '/ˈhɛlθi/'), W('routine', '日常作息', '/ruːˈtiːn/'),
          W('Sleep', '睡眠', '/sliːp/'), W('is', '是', '/ɪz/'),
          W('very', '非常', '/ˈvɛri/'), W('important', '重要的', '/ɪmˈpɔːrtnt/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "You should drink more water every day.",
        '你应该每天多喝水。', [
          W('You', '你', '/juː/'), W('should', '应该', '/ʃʊd/'),
          W('drink', '喝', '/drɪŋk/'), W('more', '更多的', '/mɔːr/'),
          W('water', '水', '/ˈwɔːtər/'), W('every', '每个', '/ˈɛvri/'),
          W('day', '天', '/deɪ/')
        ]),
      S('s4b2', "And don't eat too much junk food. Eat more fruit!",
        '还有别吃太多垃圾食品。多吃水果！', [
          W('And', '还有', '/ænd/'), W("don't", '不要', '/doʊnt/'),
          W('eat', '吃', '/iːt/'), W('too', '太', '/tuː/'),
          W('much', '多', '/mʌtʃ/'), W('junk', '垃圾', '/dʒʌŋk/'),
          W('food', '食品', '/fuːd/'), W('Eat', '吃', '/iːt/'),
          W('more', '更多的', '/mɔːr/'), W('fruit', '水果', '/fruːt/')
        ]),
      S('s4b3', "Good habits keep our body and mind strong!",
        '好习惯让我们的身心更强壮！', [
          W('Good', '好的', '/ɡʊd/'), W('habits', '习惯（复数）', '/ˈhæbɪts/'),
          W('keep', '保持', '/kiːp/'), W('our', '我们的', '/aʊr/'),
          W('body', '身体', '/ˈbɒdi/'), W('and', '和', '/ænd/'),
          W('mind', '头脑', '/maɪnd/'), W('strong', '强壮的', '/strɔːŋ/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('habit', '习惯', '/ˈhæbɪt/'), W('healthy', '健康的', '/ˈhɛlθi/'),
    W('routine', '日常作息', '/ruːˈtiːn/'), W('sleep', '睡眠', '/sliːp/'),
    W('water', '水', '/ˈwɔːtər/'), W('drink', '喝', '/drɪŋk/'),
    W('junk food', '垃圾食品', '/dʒʌŋk fuːd/'), W('fruit', '水果', '/fruːt/'),
    W('body', '身体', '/ˈbɒdi/'), W('mind', '头脑', '/maɪnd/'),
    W('strong', '强壮的', '/strɔːŋ/'), W('more', '更多的', '/mɔːr/')
  ]),

  unit('u5', 'Unit 5 Food We Eat', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "What's your favourite food?",
        '你最喜欢的食物是什么？', [
          W("What's", '什么是', '/wʌts/'), W('your', '你的', '/jɔːr/'),
          W('favourite', '最喜欢的', '/ˈfeɪvərɪt/'), W('food', '食物', '/fuːd/')
        ]),
      S('s5a2', "I love dumplings! My grandma makes the best dumplings.",
        '我爱饺子！我奶奶做的饺子最好吃。', [
          W('I', '我', '/aɪ/'), W('love', '喜爱', '/lʌv/'),
          W('dumplings', '饺子（复数）', '/ˈdʌmplɪŋz/'), W('My', '我的', '/maɪ/'),
          W('grandma', '奶奶', '/ˈɡrænmɑː/'), W('makes', '做', '/meɪks/'),
          W('the', '这', '/ðə/'), W('best', '最好的', '/bɛst/'),
          W('dumplings', '饺子（复数）', '/ˈdʌmplɪŋz/')
        ]),
      S('s5a3', "Food brings family together, doesn't it?",
        '食物让家人聚在一起，不是吗？', [
          W('Food', '食物', '/fuːd/'), W('brings', '带来', '/brɪŋz/'),
          W('family', '家庭', '/ˈfæməli/'), W('together', '在一起', '/təˈɡɛðər/'),
          W("doesn't", '不是吗', '/ˈdʌznt/'), W('it', '它', '/ɪt/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "Let's make a sandwich. What do we need?",
        '我们来做三明治。需要什么？', [
          W("Let's", '让我们', '/lɛts/'), W('make', '做', '/meɪk/'),
          W('a', '一个', '/ə/'), W('sandwich', '三明治', '/ˈsænwɪtʃ/'),
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('we', '我们', '/wiː/'), W('need', '需要', '/niːd/')
        ]),
      S('s5b2', "We need bread, eggs, tomatoes, and some cheese.",
        '我们需要面包、鸡蛋、西红柿和一些奶酪。', [
          W('We', '我们', '/wiː/'), W('need', '需要', '/niːd/'),
          W('bread', '面包', '/brɛd/'), W('eggs', '鸡蛋（复数）', '/ɛɡz/'),
          W('tomatoes', '西红柿（复数）', '/təˈmeɪtoʊz/'), W('and', '和', '/ænd/'),
          W('some', '一些', '/sʌm/'), W('cheese', '奶酪', '/tʃiːz/')
        ]),
      S('s5b3', "Cooking is fun! And homemade food tastes the best.",
        '做饭很有趣！而且家里做的食物味道最好。', [
          W('Cooking', '做饭', '/ˈkʊkɪŋ/'), W('is', '是', '/ɪz/'),
          W('fun', '有趣的', '/fʌn/'), W('And', '而且', '/ænd/'),
          W('homemade', '家里做的', '/ˈhoʊmˈmeɪd/'), W('food', '食物', '/fuːd/'),
          W('tastes', '尝起来', '/teɪsts/'), W('the', '这', '/ðə/'),
          W('best', '最好', '/bɛst/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('favourite', '最喜欢的', '/ˈfeɪvərɪt/'), W('dumpling', '饺子', '/ˈdʌmplɪŋ/'),
    W('sandwich', '三明治', '/ˈsænwɪtʃ/'), W('bread', '面包', '/brɛd/'),
    W('egg', '鸡蛋', '/ɛɡ/'), W('cheese', '奶酪', '/tʃiːz/'),
    W('homemade', '家里做的', '/ˈhoʊmˈmeɪd/'), W('taste', '尝起来', '/teɪst/'),
    W('cook', '做饭', '/kʊk/'), W('bring', '带来', '/brɪŋ/'),
    W('together', '在一起', '/təˈɡɛðər/'), W('delicious', '美味的', '/dɪˈlɪʃəs/')
  ]),

  unit('u6', 'Unit 6 Nature and Us', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "Look! There's a beautiful mountain behind the lake.",
        '看！湖后面有一座美丽的山。', [
          W('Look', '看', '/lʊk/'), W("There's", '有', '/ðɛrz/'),
          W('a', '一个', '/ə/'), W('beautiful', '美丽的', '/ˈbjuːtɪfl/'),
          W('mountain', '山', '/ˈmaʊntn/'), W('behind', '在……后面', '/bɪˈhaɪnd/'),
          W('the', '这', '/ðə/'), W('lake', '湖', '/leɪk/')
        ]),
      S('s6a2', "Let's go hiking there this weekend!",
        '我们这周末去那里远足吧！', [
          W("Let's", '让我们', '/lɛts/'), W('go', '去', '/ɡoʊ/'),
          W('hiking', '远足；徒步', '/ˈhaɪkɪŋ/'), W('there', '那里', '/ðɛr/'),
          W('this', '这个', '/ðɪs/'), W('weekend', '周末', '/ˈwiːkɛnd/')
        ]),
      S('s6a3', "Nature is so peaceful. We should protect it.",
        '大自然如此宁静。我们应该保护它。', [
          W('Nature', '大自然', '/ˈneɪtʃər/'), W('is', '是', '/ɪz/'),
          W('so', '如此', '/soʊ/'), W('peaceful', '宁静的', '/ˈpiːsfl/'),
          W('We', '我们', '/wiː/'), W('should', '应该', '/ʃʊd/'),
          W('protect', '保护', '/prəˈtɛkt/'), W('it', '它', '/ɪt/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "What can we do to help the environment?",
        '我们可以做什么来帮助环境？', [
          W('What', '什么', '/wʌt/'), W('can', '可以', '/kæn/'),
          W('we', '我们', '/wiː/'), W('do', '做', '/duː/'),
          W('to', '（不定式）', '/tuː/'), W('help', '帮助', '/hɛlp/'),
          W('the', '这', '/ðə/'), W('environment', '环境', '/ɪnˈvaɪrənmənt/')
        ]),
      S('s6b2', "We can plant trees and use less plastic.",
        '我们可以种树、少用塑料。', [
          W('We', '我们', '/wiː/'), W('can', '可以', '/kæn/'),
          W('plant', '种植', '/plænt/'), W('trees', '树（复数）', '/triːz/'),
          W('and', '和', '/ænd/'), W('use', '使用', '/juːz/'),
          W('less', '更少的', '/lɛs/'), W('plastic', '塑料', '/ˈplæstɪk/')
        ]),
      S('s6b3', "Every small action counts. Let's start today!",
        '每个小行动都算数。让我们从今天开始！', [
          W('Every', '每个', '/ˈɛvri/'), W('small', '小的', '/smɔːl/'),
          W('action', '行动', '/ˈækʃn/'), W('counts', '算数', '/kaʊnts/'),
          W("Let's", '让我们', '/lɛts/'), W('start', '开始', '/stɑːrt/'),
          W('today', '今天', '/təˈdeɪ/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('nature', '大自然', '/ˈneɪtʃər/'), W('mountain', '山', '/ˈmaʊntn/'),
    W('lake', '湖', '/leɪk/'), W('river', '河流', '/ˈrɪvər/'),
    W('forest', '森林', '/ˈfɔːrɪst/'), W('environment', '环境', '/ɪnˈvaɪrənmənt/'),
    W('protect', '保护', '/prəˈtɛkt/'), W('plant', '种植', '/plænt/'),
    W('tree', '树', '/triː/'), W('plastic', '塑料', '/ˈplæstɪk/'),
    W('peaceful', '宁静的', '/ˈpiːsfl/'), W('action', '行动', '/ˈækʃn/')
  ])
]);

// ====================================================================
//  五年级下册  (pep-5b)
// ====================================================================
const pep5b = book('pep-5b', '人教版 PEP 五年级下册', 5, '下', '#6C5CE7', [
  unit('u1', 'Unit 1 Following the Rules', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "We should follow the rules in the library.",
        '我们在图书馆应该遵守规则。', [
          W('We', '我们', '/wiː/'), W('should', '应该', '/ʃʊd/'),
          W('follow', '遵守', '/ˈfɒloʊ/'), W('the', '这', '/ðə/'),
          W('rules', '规则（复数）', '/ruːlz/'), W('in', '在……里', '/ɪn/'),
          W('the', '这', '/ðə/'), W('library', '图书馆', '/ˈlaɪbrɛri/')
        ]),
      S('s1a2', "Talk quietly. Don't eat or drink here.",
        '轻声交谈。不要在这里吃喝。', [
          W('Talk', '说话', '/tɔːk/'), W('quietly', '轻声地', '/ˈkwaɪətli/'),
          W("Don't", '不要', '/doʊnt/'), W('eat', '吃', '/iːt/'),
          W('or', '或', '/ɔːr/'), W('drink', '喝', '/drɪŋk/'),
          W('here', '这里', '/hɪr/')
        ]),
      S('s1a3', "Rules make public places better for everyone.",
        '规则让公共场所对每个人都更好。', [
          W('Rules', '规则（复数）', '/ruːlz/'), W('make', '使', '/meɪk/'),
          W('public', '公共的', '/ˈpʌblɪk/'), W('places', '场所（复数）', '/ˈpleɪsɪz/'),
          W('better', '更好的', '/ˈbɛtər/'), W('for', '对', '/fɔːr/'),
          W('everyone', '每个人', '/ˈɛvriwʌn/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "What's the most important rule at school?",
        '学校最重要的规则是什么？', [
          W("What's", '什么是', '/wʌts/'), W('the', '这', '/ðə/'),
          W('most', '最', '/moʊst/'), W('important', '重要的', '/ɪmˈpɔːrtnt/'),
          W('rule', '规则', '/ruːl/'), W('at', '在', '/æt/'),
          W('school', '学校', '/skuːl/')
        ]),
      S('s1b2', "Respect others. Treat people the way you want to be treated.",
        '尊重他人。用你希望被对待的方式待人。', [
          W('Respect', '尊重', '/rɪˈspɛkt/'), W('others', '他人', '/ˈʌðərz/'),
          W('Treat', '对待', '/triːt/'), W('people', '人们', '/ˈpiːpl/'),
          W('the', '这', '/ðə/'), W('way', '方式', '/weɪ/'),
          W('you', '你', '/juː/'), W('want', '想要', '/wɒnt/'),
          W('to', '（不定式）', '/tuː/'), W('be', '被', '/biː/'),
          W('treated', '对待', '/ˈtriːtɪd/')
        ]),
      S('s1b3', "When everyone follows the rules, life is easier.",
        '当每个人都遵守规则时，生活更轻松。', [
          W('When', '当……时', '/wɛn/'), W('everyone', '每个人', '/ˈɛvriwʌn/'),
          W('follows', '遵守', '/ˈfɒloʊz/'), W('the', '这', '/ðə/'),
          W('rules', '规则（复数）', '/ruːlz/'), W('life', '生活', '/laɪf/'),
          W('is', '是', '/ɪz/'), W('easier', '更轻松', '/ˈiːziər/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('rule', '规则', '/ruːl/'), W('follow', '遵守', '/ˈfɒloʊ/'),
    W('respect', '尊重', '/rɪˈspɛkt/'), W('quietly', '轻声地', '/ˈkwaɪətli/'),
    W('public', '公共的', '/ˈpʌblɪk/'), W('treat', '对待', '/triːt/'),
    W('everyone', '每个人', '/ˈɛvriwʌn/'), W('library', '图书馆', '/ˈlaɪbrɛri/'),
    W('important', '重要的', '/ɪmˈpɔːrtnt/'), W('way', '方式', '/weɪ/'),
    W('better', '更好的', '/ˈbɛtər/'), W('easier', '更轻松的', '/ˈiːziər/')
  ]),

  unit('u2', 'Unit 2 Our Community', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "Is there a post office near here?",
        '这附近有邮局吗？', [
          W('Is', '有', '/ɪz/'), W('there', '（存在句）', '/ðɛr/'),
          W('a', '一个', '/ə/'), W('post', '邮政', '/poʊst/'),
          W('office', '局', '/ˈɒfɪs/'), W('near', '在……附近', '/nɪr/'),
          W('here', '这里', '/hɪr/')
        ]),
      S('s2a2', "Yes, go straight and turn right at the corner.",
        '有，直走然后在拐角处右转。', [
          W('Yes', '是的', '/jɛs/'), W('go', '走', '/ɡoʊ/'),
          W('straight', '直地', '/streɪt/'), W('and', '然后', '/ænd/'),
          W('turn', '转', '/tɜːrn/'), W('right', '右边', '/raɪt/'),
          W('at', '在', '/æt/'), W('the', '这', '/ðə/'),
          W('corner', '拐角', '/ˈkɔːrnər/')
        ]),
      S('s2a3', "Thanks! Our community has everything we need.",
        '谢谢！我们社区什么都有。', [
          W('Thanks', '谢谢', '/θæŋks/'), W('Our', '我们的', '/aʊr/'),
          W('community', '社区', '/kəˈmjuːnɪti/'), W('has', '有', '/hæz/'),
          W('everything', '一切', '/ˈɛvriθɪŋ/'), W('we', '我们', '/wiː/'),
          W('need', '需要', '/niːd/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "I want to join the community clean-up this Saturday.",
        '我想参加这周六的社区清扫活动。', [
          W('I', '我', '/aɪ/'), W('want', '想要', '/wɒnt/'),
          W('to', '（不定式）', '/tuː/'), W('join', '参加', '/dʒɔɪn/'),
          W('the', '这', '/ðə/'), W('community', '社区', '/kəˈmjuːnɪti/'),
          W('clean-up', '清扫', '/kliːn ʌp/'), W('this', '这个', '/ðɪs/'),
          W('Saturday', '周六', '/ˈsætərdeɪ/')
        ]),
      S('s2b2', "Great! Many neighbours will be there. Let's go together!",
        '太好了！很多邻居会去。我们一起去吧！', [
          W('Great', '太好了', '/ɡreɪt/'), W('Many', '许多', '/ˈmɛni/'),
          W('neighbours', '邻居（复数）', '/ˈneɪbərz/'), W('will', '将会', '/wɪl/'),
          W('be', '在', '/biː/'), W('there', '那里', '/ðɛr/'),
          W("Let's", '让我们', '/lɛts/'), W('go', '去', '/ɡoʊ/'),
          W('together', '一起', '/təˈɡɛðər/')
        ]),
      S('s2b3', "A strong community is built by caring people.",
        '强大的社区是由有爱心的人建立的。', [
          W('A', '一个', '/ə/'), W('strong', '强大的', '/strɔːŋ/'),
          W('community', '社区', '/kəˈmjuːnɪti/'), W('is', '是', '/ɪz/'),
          W('built', '建立', '/bɪlt/'), W('by', '由', '/baɪ/'),
          W('caring', '有爱心的', '/ˈkɛrɪŋ/'), W('people', '人们', '/ˈpiːpl/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('community', '社区', '/kəˈmjuːnɪti/'), W('neighbour', '邻居', '/ˈneɪbər/'),
    W('post office', '邮局', '/poʊst ˈɒfɪs/'), W('straight', '直地', '/streɪt/'),
    W('turn', '转', '/tɜːrn/'), W('corner', '拐角', '/ˈkɔːrnər/'),
    W('join', '参加', '/dʒɔɪn/'), W('clean-up', '清扫', '/kliːn ʌp/'),
    W('build', '建立', '/bɪld/'), W('caring', '有爱心的', '/ˈkɛrɪŋ/'),
    W('together', '一起', '/təˈɡɛðər/'), W('everything', '一切', '/ˈɛvriθɪŋ/')
  ]),

  unit('u3', 'Unit 3 Life in Different Seasons', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "Which season do you like best, and why?",
        '你最喜欢哪个季节，为什么？', [
          W('Which', '哪个', '/wɪtʃ/'), W('season', '季节', '/ˈsiːzn/'),
          W('do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('like', '喜欢', '/laɪk/'), W('best', '最', '/bɛst/'),
          W('and', '和', '/ænd/'), W('why', '为什么', '/waɪ/')
        ]),
      S('s3a2', "I like summer best because I can go swimming every day.",
        '我最喜欢夏天因为我可以每天去游泳。', [
          W('I', '我', '/aɪ/'), W('like', '喜欢', '/laɪk/'),
          W('summer', '夏天', '/ˈsʌmər/'), W('best', '最', '/bɛst/'),
          W('because', '因为', '/bɪˈkɔːz/'), W('I', '我', '/aɪ/'),
          W('can', '可以', '/kæn/'), W('go', '去', '/ɡoʊ/'),
          W('swimming', '游泳', '/ˈswɪmɪŋ/'), W('every', '每个', '/ˈɛvri/'),
          W('day', '天', '/deɪ/')
        ]),
      S('s3a3', "I prefer autumn. The cool wind feels so nice.",
        '我更喜欢秋天。凉爽的风很舒服。', [
          W('I', '我', '/aɪ/'), W('prefer', '更喜欢', '/prɪˈfɜːr/'),
          W('autumn', '秋天', '/ˈɔːtəm/'), W('The', '这', '/ðə/'),
          W('cool', '凉爽的', '/kuːl/'), W('wind', '风', '/wɪnd/'),
          W('feels', '感觉', '/fiːlz/'), W('so', '如此', '/soʊ/'),
          W('nice', '舒服', '/naɪs/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "People's lives change with the seasons.",
        '人们的生活随季节变化。', [
          W("People's", '人们的', '/ˈpiːplz/'), W('lives', '生活（复数）', '/lɪvz/'),
          W('change', '变化', '/tʃeɪndʒ/'), W('with', '随', '/wɪð/'),
          W('the', '这', '/ðə/'), W('seasons', '季节（复数）', '/ˈsiːznz/')
        ]),
      S('s3b2', "In winter, we wear thick coats and stay indoors more.",
        '冬天我们穿厚外套，更多待在室内。', [
          W('In', '在……里', '/ɪn/'), W('winter', '冬天', '/ˈwɪntər/'),
          W('we', '我们', '/wiː/'), W('wear', '穿', '/wɛr/'),
          W('thick', '厚的', '/θɪk/'), W('coats', '外套（复数）', '/koʊts/'),
          W('and', '和', '/ænd/'), W('stay', '待', '/steɪ/'),
          W('indoors', '在室内', '/ɪnˈdɔːrz/'), W('more', '更多', '/mɔːr/')
        ]),
      S('s3b3', "In summer, life moves outdoors. Different but both fun!",
        '夏天生活移到户外。虽然不同但都很有趣！', [
          W('In', '在……里', '/ɪn/'), W('summer', '夏天', '/ˈsʌmər/'),
          W('life', '生活', '/laɪf/'), W('moves', '移动', '/muːvz/'),
          W('outdoors', '在户外', '/aʊtˈdɔːrz/'), W('Different', '不同的', '/ˈdɪfrənt/'),
          W('but', '但是', '/bʌt/'), W('both', '两者都', '/boʊθ/'),
          W('fun', '有趣的', '/fʌn/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('season', '季节', '/ˈsiːzn/'), W('spring', '春天', '/sprɪŋ/'),
    W('summer', '夏天', '/ˈsʌmər/'), W('autumn', '秋天', '/ˈɔːtəm/'),
    W('winter', '冬天', '/ˈwɪntər/'), W('prefer', '更喜欢', '/prɪˈfɜːr/'),
    W('because', '因为', '/bɪˈkɔːz/'), W('change', '变化', '/tʃeɪndʒ/'),
    W('indoors', '在室内', '/ɪnˈdɔːrz/'), W('outdoors', '在户外', '/aʊtˈdɔːrz/'),
    W('thick', '厚的', '/θɪk/'), W('wind', '风', '/wɪnd/')
  ]),

  unit('u4', 'Unit 4 My Hometown', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "Tell me about your hometown. What's it like?",
        '跟我说说你的家乡。是什么样的？', [
          W('Tell', '告诉', '/tɛl/'), W('me', '我', '/miː/'),
          W('about', '关于', '/əˈbaʊt/'), W('your', '你的', '/jɔːr/'),
          W('hometown', '家乡', '/ˈhoʊmtaʊn/'), W("What's", '什么是', '/wʌts/'),
          W('it', '它', '/ɪt/'), W('like', '像', '/laɪk/')
        ]),
      S('s4a2', "It's a small town near the sea. The seafood is amazing!",
        '是个海边小镇。海鲜超好吃！', [
          W("It's", '它是', '/ɪts/'), W('a', '一个', '/ə/'),
          W('small', '小的', '/smɔːl/'), W('town', '小镇', '/taʊn/'),
          W('near', '在……附近', '/nɪr/'), W('the', '这', '/ðə/'),
          W('sea', '海', '/siː/'), W('The', '这', '/ðə/'),
          W('seafood', '海鲜', '/ˈsiːfuːd/'), W('is', '是', '/ɪz/'),
          W('amazing', '令人惊叹的', '/əˈmeɪzɪŋ/')
        ]),
      S('s4a3', "There's an old bridge and a famous temple too.",
        '还有一座古桥和一座著名的寺庙。', [
          W("There's", '有', '/ðɛrz/'), W('an', '一个', '/æn/'),
          W('old', '古老的', '/oʊld/'), W('bridge', '桥', '/brɪdʒ/'),
          W('and', '和', '/ænd/'), W('a', '一个', '/ə/'),
          W('famous', '著名的', '/ˈfeɪməs/'), W('temple', '寺庙', '/ˈtɛmpl/'),
          W('too', '也', '/tuː/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "Do you miss your hometown?",
        '你想念你的家乡吗？', [
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('miss', '想念', '/mɪs/'), W('your', '你的', '/jɔːr/'),
          W('hometown', '家乡', '/ˈhoʊmtaʊn/')
        ]),
      S('s4b2', "Yes, I miss the food and the friendly people there.",
        '想，我想念那儿的食物和友善的人们。', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('miss', '想念', '/mɪs/'), W('the', '这', '/ðə/'),
          W('food', '食物', '/fuːd/'), W('and', '和', '/ænd/'),
          W('the', '这', '/ðə/'), W('friendly', '友善的', '/ˈfrɛndli/'),
          W('people', '人们', '/ˈpiːpl/'), W('there', '那里', '/ðɛr/')
        ]),
      S('s4b3', "No matter where we go, home is always in our hearts.",
        '无论走到哪里，家永远在心中。', [
          W('No', '没有', '/noʊ/'), W('matter', '无论', '/ˈmætər/'),
          W('where', '哪里', '/wɛr/'), W('we', '我们', '/wiː/'),
          W('go', '走', '/ɡoʊ/'), W('home', '家', '/hoʊm/'),
          W('is', '是', '/ɪz/'), W('always', '永远', '/ˈɔːlweɪz/'),
          W('in', '在……里', '/ɪn/'), W('our', '我们的', '/aʊr/'),
          W('hearts', '心（复数）', '/hɑːrts/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('hometown', '家乡', '/ˈhoʊmtaʊn/'), W('town', '小镇', '/taʊn/'),
    W('bridge', '桥', '/brɪdʒ/'), W('temple', '寺庙', '/ˈtɛmpl/'),
    W('sea', '海', '/siː/'), W('famous', '著名的', '/ˈfeɪməs/'),
    W('miss', '想念', '/mɪs/'), W('seafood', '海鲜', '/ˈsiːfuːd/'),
    W('amazing', '令人惊叹的', '/əˈmeɪzɪŋ/'), W('friendly', '友善的', '/ˈfrɛndli/'),
    W('heart', '心', '/hɑːrt/'), W('always', '永远', '/ˈɔːlweɪz/')
  ]),

  unit('u5', 'Unit 5 Travelling Around', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "Where are you going for the summer holiday?",
        '你暑假要去哪里？', [
          W('Where', '哪里', '/wɛr/'), W('are', '（进行时）', '/ɑːr/'),
          W('you', '你', '/juː/'), W('going', '去', '/ˈɡoʊɪŋ/'),
          W('for', '在', '/fɔːr/'), W('the', '这', '/ðə/'),
          W('summer', '夏天', '/ˈsʌmər/'), W('holiday', '假期', '/ˈhɒlədeɪ/')
        ]),
      S('s5a2', "We're going to Beijing! We'll visit the Great Wall.",
        '我们要去北京！我们要参观长城。', [
          W("We're", '我们要', '/wɪr/'), W('going', '去', '/ˈɡoʊɪŋ/'),
          W('to', '到', '/tuː/'), W('Beijing', '北京', '/beɪˈdʒɪŋ/'),
          W("We'll", '我们将', '/wiːl/'), W('visit', '参观', '/ˈvɪzɪt/'),
          W('the', '这', '/ðə/'), W('Great', '（长）', '/ɡreɪt/'),
          W('Wall', '（城）', '/wɔːl/')
        ]),
      S('s5a3', "Travelling opens our eyes to the world!",
        '旅行让我们开阔眼界！', [
          W('Travelling', '旅行', '/ˈtrævəlɪŋ/'), W('opens', '打开', '/ˈoʊpənz/'),
          W('our', '我们的', '/aʊr/'), W('eyes', '眼睛（复数）', '/aɪz/'),
          W('to', '对', '/tuː/'), W('the', '这', '/ðə/'),
          W('world', '世界', '/wɜːrld/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "How will you get there — by train or by plane?",
        '你怎么去——坐火车还是坐飞机？', [
          W('How', '怎么', '/haʊ/'), W('will', '将', '/wɪl/'),
          W('you', '你', '/juː/'), W('get', '到达', '/ɡɛt/'),
          W('there', '那里', '/ðɛr/'), W('by', '乘坐', '/baɪ/'),
          W('train', '火车', '/treɪn/'), W('or', '或者', '/ɔːr/'),
          W('by', '乘坐', '/baɪ/'), W('plane', '飞机', '/pleɪn/')
        ]),
      S('s5b2', "By train. It's slower but we can see the countryside.",
        '坐火车。虽然慢但可以看到乡村风景。', [
          W('By', '乘坐', '/baɪ/'), W('train', '火车', '/treɪn/'),
          W("It's", '它是', '/ɪts/'), W('slower', '更慢的', '/ˈsloʊər/'),
          W('but', '但是', '/bʌt/'), W('we', '我们', '/wiː/'),
          W('can', '可以', '/kæn/'), W('see', '看到', '/siː/'),
          W('the', '这', '/ðə/'), W('countryside', '乡村', '/ˈkʌntrisaɪd/')
        ]),
      S('s5b3', "The journey itself can be the best part of the trip!",
        '旅途本身可能就是旅行中最棒的部分！', [
          W('The', '这', '/ðə/'), W('journey', '旅途', '/ˈdʒɜːrni/'),
          W('itself', '本身', '/ɪtˈsɛlf/'), W('can', '可能', '/kæn/'),
          W('be', '是', '/biː/'), W('the', '这', '/ðə/'),
          W('best', '最好的', '/bɛst/'), W('part', '部分', '/pɑːrt/'),
          W('of', '的', '/ʌv/'), W('the', '这', '/ðə/'),
          W('trip', '旅行', '/trɪp/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('travel', '旅行', '/ˈtrævl/'), W('holiday', '假期', '/ˈhɒlədeɪ/'),
    W('visit', '参观', '/ˈvɪzɪt/'), W('train', '火车', '/treɪn/'),
    W('plane', '飞机', '/pleɪn/'), W('journey', '旅途', '/ˈdʒɜːrni/'),
    W('trip', '旅行', '/trɪp/'), W('countryside', '乡村', '/ˈkʌntrisaɪd/'),
    W('world', '世界', '/wɜːrld/'), W('Great Wall', '长城', '/ɡreɪt wɔːl/'),
    W('slow', '慢的', '/sloʊ/'), W('itself', '本身', '/ɪtˈsɛlf/')
  ]),

  unit('u6', 'Unit 6 Making a Travel Plan', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "Let's make a travel plan for the weekend!",
        '我们来为周末做个旅行计划吧！', [
          W("Let's", '让我们', '/lɛts/'), W('make', '做', '/meɪk/'),
          W('a', '一个', '/ə/'), W('travel', '旅行', '/ˈtrævl/'),
          W('plan', '计划', '/plæn/'), W('for', '为了', '/fɔːr/'),
          W('the', '这', '/ðə/'), W('weekend', '周末', '/ˈwiːkɛnd/')
        ]),
      S('s6a2', "First, we should check the weather forecast.",
        '首先我们应该查天气預报。', [
          W('First', '首先', '/fɜːrst/'), W('we', '我们', '/wiː/'),
          W('should', '应该', '/ʃʊd/'), W('check', '检查', '/tʃɛk/'),
          W('the', '这', '/ðə/'), W('weather', '天气', '/ˈwɛðər/'),
          W('forecast', '預报', '/ˈfɔːrkæst/')
        ]),
      S('s6a3', "Then decide where to go and what to pack.",
        '然后决定去哪里和带什么。', [
          W('Then', '然后', '/ðɛn/'), W('decide', '决定', '/dɪˈsaɪd/'),
          W('where', '哪里', '/wɛr/'), W('to', '（不定式）', '/tuː/'),
          W('go', '去', '/ɡoʊ/'), W('and', '和', '/ænd/'),
          W('what', '什么', '/wʌt/'), W('to', '（不定式）', '/tuː/'),
          W('pack', '打包', '/pæk/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "Don't forget to bring your camera!",
        '别忘了带相机！', [
          W("Don't", '不要', '/doʊnt/'), W('forget', '忘记', '/fərˈɡɛt/'),
          W('to', '（不定式）', '/tuː/'), W('bring', '带', '/brɪŋ/'),
          W('your', '你的', '/jɔːr/'), W('camera', '相机', '/ˈkæmərə/')
        ]),
      S('s6b2', "And some snacks and water for the road.",
        '还要带些零食和水路上吃。', [
          W('And', '和', '/ænd/'), W('some', '一些', '/sʌm/'),
          W('snacks', '零食（复数）', '/snæks/'), W('and', '和', '/ænd/'),
          W('water', '水', '/ˈwɔːtər/'), W('for', '为了', '/fɔːr/'),
          W('the', '这', '/ðə/'), W('road', '路', '/roʊd/')
        ]),
      S('s6b3', "A good plan makes the trip smooth and happy!",
        '好的计划让旅途顺利又开心！', [
          W('A', '一个', '/ə/'), W('good', '好的', '/ɡʊd/'),
          W('plan', '计划', '/plæn/'), W('makes', '使', '/meɪks/'),
          W('the', '这', '/ðə/'), W('trip', '旅途', '/trɪp/'),
          W('smooth', '顺利的', '/smuːð/'), W('and', '和', '/ænd/'),
          W('happy', '开心的', '/ˈhæpi/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('plan', '计划', '/plæn/'), W('travel', '旅行', '/ˈtrævl/'),
    W('weather', '天气', '/ˈwɛðər/'), W('forecast', '預报', '/ˈfɔːrkæst/'),
    W('decide', '决定', '/dɪˈsaɪd/'), W('pack', '打包', '/pæk/'),
    W('camera', '相机', '/ˈkæmərə/'), W('snack', '零食', '/snæk/'),
    W('bring', '带', '/brɪŋ/'), W('forget', '忘记', '/fərˈɡɛt/'),
    W('smooth', '顺利的', '/smuːð/'), W('road', '路', '/roʊd/')
  ])
]);

// ====================================================================
//  六年级上册  (pep-6a)
// ====================================================================
const pep6a = book('pep-6a', '人教版 PEP 六年级上册', 6, '上', '#FD79A8', [
  unit('u1', 'Unit 1 Amazing Places', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "Have you ever been to the Great Wall?",
        '你去过长城吗？', [
          W('Have', '（完成时）', '/hæv/'), W('you', '你', '/juː/'),
          W('ever', '曾经', '/ˈɛvər/'), W('been', '去过', '/biːn/'),
          W('to', '到', '/tuː/'), W('the', '这', '/ðə/'),
          W('Great', '（长）', '/ɡreɪt/'), W('Wall', '（城）', '/wɔːl/')
        ]),
      S('s1a2', "Yes, I went there last year. It was incredible!",
        '去过，我去年去的。太壮观了！', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('went', '去', '/wɛnt/'), W('there', '那里', '/ðɛr/'),
          W('last', '上一个', '/læst/'), W('year', '年', '/jɪr/'),
          W('It', '它', '/ɪt/'), W('was', '是', '/wʌz/'),
          W('incredible', '不可思议的', '/ɪnˈkrɛdəbl/')
        ]),
      S('s1a3', "It's one of the wonders of the world!",
        '它是世界奇迹之一！', [
          W("It's", '它是', '/ɪts/'), W('one', '之一', '/wʌn/'),
          W('of', '的', '/ʌv/'), W('the', '这', '/ðə/'),
          W('wonders', '奇迹（复数）', '/ˈwʌndərz/'), W('of', '的', '/ʌv/'),
          W('the', '这', '/ðə/'), W('world', '世界', '/wɜːrld/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "I'd love to visit the pyramids in Egypt someday.",
        '我希望有一天能去看埃及的金字塔。', [
          W("I'd", '我想', '/aɪd/'), W('love', '想', '/lʌv/'),
          W('to', '（不定式）', '/tuː/'), W('visit', '参观', '/ˈvɪzɪt/'),
          W('the', '这', '/ðə/'), W('pyramids', '金字塔（复数）', '/ˈpɪrəmɪdz/'),
          W('in', '在', '/ɪn/'), W('Egypt', '埃及', '/ˈiːdʒɪpt/'),
          W('someday', '有一天', '/ˈsʌmdeɪ/')
        ]),
      S('s1b2', "Me too! Amazing places tell stories of our past.",
        '我也是！神奇的地方讲述着我们的过去。', [
          W('Me', '我', '/miː/'), W('too', '也', '/tuː/'),
          W('Amazing', '神奇的', '/əˈmeɪzɪŋ/'), W('places', '地方（复数）', '/ˈpleɪsɪz/'),
          W('tell', '讲述', '/tɛl/'), W('stories', '故事（复数）', '/ˈstɔːriz/'),
          W('of', '的', '/ʌv/'), W('our', '我们的', '/aʊr/'),
          W('past', '过去', '/pæst/')
        ]),
      S('s1b3', "Travel helps us understand different cultures better.",
        '旅行帮助我们更好地理解不同文化。', [
          W('Travel', '旅行', '/ˈtrævl/'), W('helps', '帮助', '/hɛlps/'),
          W('us', '我们', '/ʌs/'), W('understand', '理解', '/ˌʌndərˈstænd/'),
          W('different', '不同的', '/ˈdɪfrənt/'), W('cultures', '文化（复数）', '/ˈkʌltʃərz/'),
          W('better', '更好地', '/ˈbɛtər/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('amazing', '神奇的', '/əˈmeɪzɪŋ/'), W('wonder', '奇迹', '/ˈwʌndər/'),
    W('incredible', '不可思议的', '/ɪnˈkrɛdəbl/'), W('pyramid', '金字塔', '/ˈpɪrəmɪd/'),
    W('culture', '文化', '/ˈkʌltʃər/'), W('understand', '理解', '/ˌʌndərˈstænd/'),
    W('past', '过去', '/pæst/'), W('world', '世界', '/wɜːrld/'),
    W('visit', '参观', '/ˈvɪzɪt/'), W('travel', '旅行', '/ˈtrævl/'),
    W('someday', '有一天', '/ˈsʌmdeɪ/'), W('story', '故事', '/ˈstɔːri/')
  ]),

  unit('u2', 'Unit 2 Getting Together', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "Are you free this Saturday evening?",
        '你这周六晚上有空吗？', [
          W('Are', '是', '/ɑːr/'), W('you', '你', '/juː/'),
          W('free', '有空的', '/friː/'), W('this', '这个', '/ðɪs/'),
          W('Saturday', '周六', '/ˈsætərdeɪ/'), W('evening', '晚上', '/ˈiːvnɪŋ/')
        ]),
      S('s2a2', "Yes! What's the plan?",
        '有空！什么计划？', [
          W('Yes', '是的', '/jɛs/'), W("What's", '什么是', '/wʌts/'),
          W('the', '这', '/ðə/'), W('plan', '计划', '/plæn/')
        ]),
      S('s2a3', "Let's have a potluck dinner. Everyone brings a dish!",
        '我们来办百乐餐吧。每人带一道菜！', [
          W("Let's", '让我们', '/lɛts/'), W('have', '举办', '/hæv/'),
          W('a', '一个', '/ə/'), W('potluck', '百乐餐', '/ˈpɒtlʌk/'),
          W('dinner', '晚餐', '/ˈdɪnər/'), W('Everyone', '每人', '/ˈɛvriwʌn/'),
          W('brings', '带来', '/brɪŋz/'), W('a', '一个', '/ə/'),
          W('dish', '菜', '/dɪʃ/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "We should invite our new classmate too.",
        '我们也应该邀请新同学。', [
          W('We', '我们', '/wiː/'), W('should', '应该', '/ʃʊd/'),
          W('invite', '邀请', '/ɪnˈvaɪt/'), W('our', '我们的', '/aʊr/'),
          W('new', '新的', '/nuː/'), W('classmate', '同学', '/ˈklæsmeɪt/'),
          W('too', '也', '/tuː/')
        ]),
      S('s2b2', "Good idea! Getting together helps us become closer.",
        '好主意！聚会让我们更亲近。', [
          W('Good', '好的', '/ɡʊd/'), W('idea', '主意', '/aɪˈdiːə/'),
          W('Getting', '聚会', '/ˈɡɛtɪŋ/'), W('together', '一起', '/təˈɡɛðər/'),
          W('helps', '帮助', '/hɛlps/'), W('us', '我们', '/ʌs/'),
          W('become', '变得', '/bɪˈkʌm/'), W('closer', '更亲近的', '/ˈkloʊsər/')
        ]),
      S('s2b3', "The best times are the moments we share together.",
        '最好的时光是我们一起度过的时刻。', [
          W('The', '这', '/ðə/'), W('best', '最好的', '/bɛst/'),
          W('times', '时光（复数）', '/taɪmz/'), W('are', '是', '/ɑːr/'),
          W('the', '这', '/ðə/'), W('moments', '时刻（复数）', '/ˈmoʊmənts/'),
          W('we', '我们', '/wiː/'), W('share', '分享', '/ʃɛr/'),
          W('together', '一起', '/təˈɡɛðər/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('together', '一起', '/təˈɡɛðər/'), W('free', '有空的', '/friː/'),
    W('invite', '邀请', '/ɪnˈvaɪt/'), W('plan', '计划', '/plæn/'),
    W('potluck', '百乐餐', '/ˈpɒtlʌk/'), W('dish', '菜', '/dɪʃ/'),
    W('classmate', '同学', '/ˈklæsmeɪt/'), W('share', '分享', '/ʃɛr/'),
    W('moment', '时刻', '/ˈmoʊmənt/'), W('become', '变得', '/bɪˈkʌm/'),
    W('closer', '更亲近的', '/ˈkloʊsər/'), W('idea', '主意', '/aɪˈdiːə/')
  ]),

  unit('u3', 'Unit 3 Healthy Life', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "You look full of energy! What's your secret?",
        '你看起来精力充沛！有什么秘诀？', [
          W('You', '你', '/juː/'), W('look', '看起来', '/lʊk/'),
          W('full', '充满', '/fʊl/'), W('of', '的', '/ʌv/'),
          W('energy', '能量', '/ˈɛnərdʒi/'), W("What's", '什么是', '/wʌts/'),
          W('your', '你的', '/jɔːr/'), W('secret', '秘诀', '/ˈsiːkrɪt/')
        ]),
      S('s3a2', "I exercise for 30 minutes every morning.",
        '我每天早上锻炼 30 分钟。', [
          W('I', '我', '/aɪ/'), W('exercise', '锻炼', '/ˈɛksərsaɪz/'),
          W('for', '（时长）', '/fɔːr/'), W('30', '三十', '/ˈθɜːrti/'),
          W('minutes', '分钟', '/ˈmɪnɪts/'), W('every', '每个', '/ˈɛvri/'),
          W('morning', '早上', '/ˈmɔːrnɪŋ/')
        ]),
      S('s3a3', "And I try to eat a balanced diet with lots of vegetables.",
        '而且我尽量吃均衡饮食，多吃蔬菜。', [
          W('And', '而且', '/ænd/'), W('I', '我', '/aɪ/'),
          W('try', '尽量', '/traɪ/'), W('to', '（不定式）', '/tuː/'),
          W('eat', '吃', '/iːt/'), W('a', '一个', '/ə/'),
          W('balanced', '均衡的', '/ˈbælənst/'), W('diet', '饮食', '/ˈdaɪət/'),
          W('with', '带着', '/wɪð/'), W('lots', '许多', '/lɒts/'),
          W('of', '的', '/ʌv/'), W('vegetables', '蔬菜（复数）', '/ˈvɛdʒtəblz/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "Do you think mental health is as important as physical health?",
        '你认为心理健康和身体健康一样重要吗？', [
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('think', '认为', '/θɪŋk/'), W('mental', '心理的', '/ˈmɛntl/'),
          W('health', '健康', '/hɛlθ/'), W('is', '是', '/ɪz/'),
          W('as', '一样', '/æz/'), W('important', '重要的', '/ɪmˈpɔːrtnt/'),
          W('as', '像', '/æz/'), W('physical', '身体的', '/ˈfɪzɪkl/'),
          W('health', '健康', '/hɛlθ/')
        ]),
      S('s3b2', "Absolutely! A healthy mind lives in a healthy body.",
        '当然！健康的心灵寓于健康的身体。', [
          W('Absolutely', '当然', '/ˌæbsəˈluːtli/'), W('A', '一个', '/ə/'),
          W('healthy', '健康的', '/ˈhɛlθi/'), W('mind', '心灵', '/maɪnd/'),
          W('lives', '居住', '/lɪvz/'), W('in', '在……里', '/ɪn/'),
          W('a', '一个', '/ə/'), W('healthy', '健康的', '/ˈhɛlθi/'),
          W('body', '身体', '/ˈbɒdi/')
        ]),
      S('s3b3', "Take care of both, and you'll live a happy life!",
        '两者都照顾到，你就会过上幸福的生活！', [
          W('Take', '照顾', '/teɪk/'), W('care', '关心', '/kɛr/'),
          W('of', '的', '/ʌv/'), W('both', '两者', '/boʊθ/'),
          W('and', '那么', '/ænd/'), W("you'll", '你将会', '/juːl/'),
          W('live', '过', '/lɪv/'), W('a', '一个', '/ə/'),
          W('happy', '幸福的', '/ˈhæpi/'), W('life', '生活', '/laɪf/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('health', '健康', '/hɛlθ/'), W('healthy', '健康的', '/ˈhɛlθi/'),
    W('exercise', '锻炼', '/ˈɛksərsaɪz/'), W('diet', '饮食', '/ˈdaɪət/'),
    W('balanced', '均衡的', '/ˈbælənst/'), W('mental', '心理的', '/ˈmɛntl/'),
    W('physical', '身体的', '/ˈfɪzɪkl/'), W('energy', '能量', '/ˈɛnərdʒi/'),
    W('mind', '心灵', '/maɪnd/'), W('body', '身体', '/ˈbɒdi/'),
    W('secret', '秘诀', '/ˈsiːkrɪt/'), W('absolutely', '当然', '/ˌæbsəˈluːtli/')
  ]),

  unit('u4', 'Unit 4 Managing Money Well', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "Do you get pocket money from your parents?",
        '你从父母那里拿零花钱吗？', [
          W('Do', '（助动词）', '/duː/'), W('you', '你', '/juː/'),
          W('get', '得到', '/ɡɛt/'), W('pocket', '口袋', '/ˈpɒkɪt/'),
          W('money', '钱', '/ˈmʌni/'), W('from', '从', '/frʌm/'),
          W('your', '你的', '/jɔːr/'), W('parents', '父母', '/ˈpɛrənts/')
        ]),
      S('s4a2', "Yes, I get 10 yuan a week. I try to save half of it.",
        '有，我每周拿 10 元。我尽量存一半。', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('get', '得到', '/ɡɛt/'), W('10', '十', '/tɛn/'),
          W('yuan', '元', '/juˈɑːn/'), W('a', '每', '/ə/'),
          W('week', '周', '/wiːk/'), W('I', '我', '/aɪ/'),
          W('try', '尽量', '/traɪ/'), W('to', '（不定式）', '/tuː/'),
          W('save', '存', '/seɪv/'), W('half', '一半', '/hæf/'),
          W('of', '的', '/ʌv/'), W('it', '它', '/ɪt/')
        ]),
      S('s4a3', "Saving money is a great life skill!",
        '存钱是很棒的生活技能！', [
          W('Saving', '存', '/ˈseɪvɪŋ/'), W('money', '钱', '/ˈmʌni/'),
          W('is', '是', '/ɪz/'), W('a', '一个', '/ə/'),
          W('great', '很棒的', '/ɡreɪt/'), W('life', '生活', '/laɪf/'),
          W('skill', '技能', '/skɪl/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "What do you spend your money on?",
        '你把钱花在什么上面？', [
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('spend', '花费', '/spɛnd/'),
          W('your', '你的', '/jɔːr/'), W('money', '钱', '/ˈmʌni/'),
          W('on', '在……上', '/ɒn/')
        ]),
      S('s4b2', "Mostly books and art supplies. I keep a spending diary.",
        '主要是书和美术用品。我记账。', [
          W('Mostly', '主要', '/ˈmoʊstli/'), W('books', '书（复数）', '/bʊks/'),
          W('and', '和', '/ænd/'), W('art', '美术', '/ɑːrt/'),
          W('supplies', '用品', '/səˈplaɪz/'), W('I', '我', '/aɪ/'),
          W('keep', '保持；记', '/kiːp/'), W('a', '一个', '/ə/'),
          W('spending', '支出', '/ˈspɛndɪŋ/'), W('diary', '日记', '/ˈdaɪəri/')
        ]),
      S('s4b3', "Knowing where your money goes is the first step to managing it.",
        '知道钱花在哪里是理财的第一步。', [
          W('Knowing', '知道', '/ˈnoʊɪŋ/'), W('where', '哪里', '/wɛr/'),
          W('your', '你的', '/jɔːr/'), W('money', '钱', '/ˈmʌni/'),
          W('goes', '去', '/ɡoʊz/'), W('is', '是', '/ɪz/'),
          W('the', '这', '/ðə/'), W('first', '第一', '/fɜːrst/'),
          W('step', '步', '/stɛp/'), W('to', '（不定式）', '/tuː/'),
          W('managing', '管理', '/ˈmænɪdʒɪŋ/'), W('it', '它', '/ɪt/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('money', '钱', '/ˈmʌni/'), W('pocket money', '零花钱', '/ˈpɒkɪt ˈmʌni/'),
    W('save', '存', '/seɪv/'), W('spend', '花费', '/spɛnd/'),
    W('manage', '管理', '/ˈmænɪdʒ/'), W('diary', '日记', '/ˈdaɪəri/'),
    W('skill', '技能', '/skɪl/'), W('half', '一半', '/hæf/'),
    W('mostly', '主要', '/ˈmoʊstli/'), W('supply', '用品', '/səˈplaɪ/'),
    W('step', '步', '/stɛp/'), W('week', '周', '/wiːk/')
  ]),

  unit('u5', 'Unit 5 Exploring Space', [
    part('u5-talk-a', "Part A Let's talk", 'dialogue', [
      S('s5a1', "Have you ever looked at the stars at night?",
        '你晚上看过星星吗？', [
          W('Have', '（完成时）', '/hæv/'), W('you', '你', '/juː/'),
          W('ever', '曾经', '/ˈɛvər/'), W('looked', '看', '/lʊkt/'),
          W('at', '向', '/æt/'), W('the', '这', '/ðə/'),
          W('stars', '星星（复数）', '/stɑːrz/'), W('at', '在', '/æt/'),
          W('night', '晚上', '/naɪt/')
        ]),
      S('s5a2', "Yes! I love stargazing. The universe is so mysterious.",
        '看过！我喜欢观星。宇宙太神秘了。', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('love', '喜爱', '/lʌv/'), W('stargazing', '观星', '/ˈstɑːrɡeɪzɪŋ/'),
          W('The', '这', '/ðə/'), W('universe', '宇宙', '/ˈjuːnɪvɜːrs/'),
          W('is', '是', '/ɪz/'), W('so', '如此', '/soʊ/'),
          W('mysterious', '神秘的', '/mɪˈstɪriəs/')
        ]),
      S('s5a3', "Astronauts have been to the moon. Maybe one day we can too!",
        '宇航员去过月球。也许有一天我们也能！', [
          W('Astronauts', '宇航员（复数）', '/ˈæstrənɔːts/'), W('have', '（完成时）', '/hæv/'),
          W('been', '去过', '/biːn/'), W('to', '到', '/tuː/'),
          W('the', '这', '/ðə/'), W('moon', '月球', '/muːn/'),
          W('Maybe', '也许', '/ˈmeɪbi/'), W('one', '一个', '/wʌn/'),
          W('day', '天', '/deɪ/'), W('we', '我们', '/wiː/'),
          W('can', '可以', '/kæn/'), W('too', '也', '/tuː/')
        ])
    ]),
    part('u5-talk-b', "Part B Let's talk", 'dialogue', [
      S('s5b1', "What do you want to know about space?",
        '你想了解太空的什么？', [
          W('What', '什么', '/wʌt/'), W('do', '（助动词）', '/duː/'),
          W('you', '你', '/juː/'), W('want', '想', '/wɒnt/'),
          W('to', '（不定式）', '/tuː/'), W('know', '了解', '/noʊ/'),
          W('about', '关于', '/əˈbaʊt/'), W('space', '太空', '/speɪs/')
        ]),
      S('s5b2', "I want to know if there's life on other planets.",
        '我想知道其他星球上有没有生命。', [
          W('I', '我', '/aɪ/'), W('want', '想', '/wɒnt/'),
          W('to', '（不定式）', '/tuː/'), W('know', '知道', '/noʊ/'),
          W('if', '是否', '/ɪf/'), W("there's", '有', '/ðɛrz/'),
          W('life', '生命', '/laɪf/'), W('on', '在……上', '/ɒn/'),
          W('other', '其他的', '/ˈʌðər/'), W('planets', '星球（复数）', '/ˈplænɪts/')
        ]),
      S('s5b3', "Exploring space helps us understand our place in the universe.",
        '探索太空帮助我们理解自己在宇宙中的位置。', [
          W('Exploring', '探索', '/ɪkˈsplɔːrɪŋ/'), W('space', '太空', '/speɪs/'),
          W('helps', '帮助', '/hɛlps/'), W('us', '我们', '/ʌs/'),
          W('understand', '理解', '/ˌʌndərˈstænd/'), W('our', '我们的', '/aʊr/'),
          W('place', '位置', '/pleɪs/'), W('in', '在……里', '/ɪn/'),
          W('the', '这', '/ðə/'), W('universe', '宇宙', '/ˈjuːnɪvɜːrs/')
        ])
    ]),
    part('u5-words', 'Unit 5 单词表', 'words', [])
  ], [
    W('space', '太空', '/speɪs/'), W('universe', '宇宙', '/ˈjuːnɪvɜːrs/'),
    W('planet', '星球', '/ˈplænɪt/'), W('star', '星星', '/stɑːr/'),
    W('moon', '月球', '/muːn/'), W('astronaut', '宇航员', '/ˈæstrənɔːt/'),
    W('explore', '探索', '/ɪkˈsplɔːr/'), W('mysterious', '神秘的', '/mɪˈstɪriəs/'),
    W('life', '生命', '/laɪf/'), W('stargazing', '观星', '/ˈstɑːrɡeɪzɪŋ/'),
    W('maybe', '也许', '/ˈmeɪbi/'), W('place', '位置', '/pleɪs/')
  ]),

  unit('u6', 'Unit 6 Energy, Nature and Us', [
    part('u6-talk-a', "Part A Let's talk", 'dialogue', [
      S('s6a1', "Where does the electricity in our homes come from?",
        '我们家里的电从哪里来？', [
          W('Where', '哪里', '/wɛr/'), W('does', '（助动词）', '/dʌz/'),
          W('the', '这', '/ðə/'), W('electricity', '电', '/ɪˌlɛkˈtrɪsɪti/'),
          W('in', '在……里', '/ɪn/'), W('our', '我们的', '/aʊr/'),
          W('homes', '家（复数）', '/hoʊmz/'), W('come', '来', '/kʌm/'),
          W('from', '从', '/frʌm/')
        ]),
      S('s6a2', "Some comes from burning coal, but that pollutes the air.",
        '有些来自燃煤，但那会污染空气。', [
          W('Some', '一些', '/sʌm/'), W('comes', '来', '/kʌmz/'),
          W('from', '从', '/frʌm/'), W('burning', '燃烧', '/ˈbɜːrnɪŋ/'),
          W('coal', '煤', '/koʊl/'), W('but', '但是', '/bʌt/'),
          W('that', '那', '/ðæt/'), W('pollutes', '污染', '/pəˈluːts/'),
          W('the', '这', '/ðə/'), W('air', '空气', '/ɛr/')
        ]),
      S('s6a3', "That's why we need clean energy like solar and wind power!",
        '所以我们需要太阳能和风能这样的清洁能源！', [
          W("That's", '那就是', '/ðæts/'), W('why', '为什么', '/waɪ/'),
          W('we', '我们', '/wiː/'), W('need', '需要', '/niːd/'),
          W('clean', '清洁的', '/kliːn/'), W('energy', '能源', '/ˈɛnərdʒi/'),
          W('like', '像', '/laɪk/'), W('solar', '太阳能的', '/ˈsoʊlər/'),
          W('and', '和', '/ænd/'), W('wind', '风', '/wɪnd/'),
          W('power', '能', '/ˈpaʊər/')
        ])
    ]),
    part('u6-talk-b', "Part B Let's talk", 'dialogue', [
      S('s6b1', "What can we do to save energy at home?",
        '我们在家可以怎样节约能源？', [
          W('What', '什么', '/wʌt/'), W('can', '可以', '/kæn/'),
          W('we', '我们', '/wiː/'), W('do', '做', '/duː/'),
          W('to', '（不定式）', '/tuː/'), W('save', '节约', '/seɪv/'),
          W('energy', '能源', '/ˈɛnərdʒi/'), W('at', '在', '/æt/'),
          W('home', '家', '/hoʊm/')
        ]),
      S('s6b2', "Turn off lights when we leave a room. Use less hot water.",
        '离开房间时关灯。少用热水。', [
          W('Turn', '关', '/tɜːrn/'), W('off', '掉', '/ɒf/'),
          W('lights', '灯（复数）', '/laɪts/'), W('when', '当……时', '/wɛn/'),
          W('we', '我们', '/wiː/'), W('leave', '离开', '/liːv/'),
          W('a', '一个', '/ə/'), W('room', '房间', '/ruːm/'),
          W('Use', '使用', '/juːz/'), W('less', '更少的', '/lɛs/'),
          W('hot', '热的', '/hɒt/'), W('water', '水', '/ˈwɔːtər/')
        ]),
      S('s6b3', "Small changes today make a big difference tomorrow!",
        '今天的小改变带来明天的大不同！', [
          W('Small', '小的', '/smɔːl/'), W('changes', '改变（复数）', '/ˈtʃeɪndʒɪz/'),
          W('today', '今天', '/təˈdeɪ/'), W('make', '带来', '/meɪk/'),
          W('a', '一个', '/ə/'), W('big', '大的', '/bɪɡ/'),
          W('difference', '不同', '/ˈdɪfrəns/'), W('tomorrow', '明天', '/təˈmɒroʊ/')
        ])
    ]),
    part('u6-words', 'Unit 6 单词表', 'words', [])
  ], [
    W('energy', '能源', '/ˈɛnərdʒi/'), W('electricity', '电', '/ɪˌlɛkˈtrɪsɪti/'),
    W('coal', '煤', '/koʊl/'), W('solar', '太阳能的', '/ˈsoʊlər/'),
    W('wind', '风', '/wɪnd/'), W('power', '能', '/ˈpaʊər/'),
    W('clean', '清洁的', '/kliːn/'), W('save', '节约', '/seɪv/'),
    W('pollute', '污染', '/pəˈluːt/'), W('turn off', '关掉', '/tɜːrn ɒf/'),
    W('difference', '不同', '/ˈdɪfrəns/'), W('change', '改变', '/tʃeɪndʒ/')
  ])
]);

// ====================================================================
//  六年级下册  (pep-6b) — 4 units
// ====================================================================
const pep6b = book('pep-6b', '人教版 PEP 六年级下册', 6, '下', '#00B894', [
  unit('u1', 'Unit 1 How Tall Are You?', [
    part('u1-talk-a', "Part A Let's talk", 'dialogue', [
      S('s1a1', "How tall are you, Mike?",
        '迈克，你有多高？', [
          W('How', '多', '/haʊ/'), W('tall', '高', '/tɔːl/'),
          W('are', '是', '/ɑːr/'), W('you', '你', '/juː/'),
          W('Mike', '迈克', '/maɪk/')
        ]),
      S('s1a2', "I'm 1.62 metres. I'm taller than last year.",
        '我 1.62 米。我比去年高了。', [
          W("I'm", '我是', '/aɪm/'), W('1.62', '1.62', '/wʌn pɔɪnt sɪks tuː/'),
          W('metres', '米（复数）', '/ˈmiːtərz/'), W("I'm", '我是', '/aɪm/'),
          W('taller', '更高', '/ˈtɔːlər/'), W('than', '比', '/ðæn/'),
          W('last', '上一个', '/læst/'), W('year', '年', '/jɪr/')
        ]),
      S('s1a3', "You're taller than me now! I need to eat more.",
        '你现在比我高了！我需要多吃点。', [
          W("You're", '你是', '/jʊr/'), W('taller', '更高', '/ˈtɔːlər/'),
          W('than', '比', '/ðæn/'), W('me', '我', '/miː/'),
          W('now', '现在', '/naʊ/'), W('I', '我', '/aɪ/'),
          W('need', '需要', '/niːd/'), W('to', '（不定式）', '/tuː/'),
          W('eat', '吃', '/iːt/'), W('more', '更多', '/mɔːr/')
        ])
    ]),
    part('u1-talk-b', "Part B Let's talk", 'dialogue', [
      S('s1b1', "Who is the tallest in your class?",
        '你们班谁最高？', [
          W('Who', '谁', '/huː/'), W('is', '是', '/ɪz/'),
          W('the', '这', '/ðə/'), W('tallest', '最高的', '/ˈtɔːlɪst/'),
          W('in', '在……里', '/ɪn/'), W('your', '你的', '/jɔːr/'),
          W('class', '班级', '/klæs/')
        ]),
      S('s1b2', "David is the tallest. He's even taller than our teacher!",
        '大卫最高。他甚至比我们老师还高！', [
          W('David', '大卫', '/ˈdeɪvɪd/'), W('is', '是', '/ɪz/'),
          W('the', '这', '/ðə/'), W('tallest', '最高的', '/ˈtɔːlɪst/'),
          W("He's", '他是', '/hiːz/'), W('even', '甚至', '/ˈiːvn/'),
          W('taller', '更高', '/ˈtɔːlər/'), W('than', '比', '/ðæn/'),
          W('our', '我们的', '/aʊr/'), W('teacher', '老师', '/ˈtiːtʃər/')
        ]),
      S('s1b3', "Everyone grows at their own pace. Being healthy matters more.",
        '每个人都有自己的生长节奏。健康更重要。', [
          W('Everyone', '每个人', '/ˈɛvriwʌn/'), W('grows', '生长', '/ɡroʊz/'),
          W('at', '以', '/æt/'), W('their', '他们的', '/ðɛr/'),
          W('own', '自己的', '/oʊn/'), W('pace', '节奏', '/peɪs/'),
          W('Being', '（保持）', '/ˈbiːɪŋ/'), W('healthy', '健康的', '/ˈhɛlθi/'),
          W('matters', '更重要', '/ˈmætərz/'), W('more', '更', '/mɔːr/')
        ])
    ]),
    part('u1-words', 'Unit 1 单词表', 'words', [])
  ], [
    W('tall', '高的', '/tɔːl/'), W('taller', '更高的', '/ˈtɔːlər/'),
    W('tallest', '最高的', '/ˈtɔːlɪst/'), W('metre', '米', '/ˈmiːtər/'),
    W('than', '比', '/ðæn/'), W('short', '矮的', '/ʃɔːrt/'),
    W('heavy', '重的', '/ˈhɛvi/'), W('bigger', '更大的', '/ˈbɪɡər/'),
    W('grow', '生长', '/ɡroʊ/'), W('pace', '节奏', '/peɪs/'),
    W('even', '甚至', '/ˈiːvn/'), W('own', '自己的', '/oʊn/')
  ]),

  unit('u2', 'Unit 2 Last Weekend', [
    part('u2-talk-a', "Part A Let's talk", 'dialogue', [
      S('s2a1', "How was your weekend, Amy?",
        '艾米，你周末过得怎么样？', [
          W('How', '怎么样', '/haʊ/'), W('was', '是', '/wʌz/'),
          W('your', '你的', '/jɔːr/'), W('weekend', '周末', '/ˈwiːkɛnd/'),
          W('Amy', '艾米', '/ˈeɪmi/')
        ]),
      S('s2a2', "It was great! I visited my grandparents on Saturday.",
        '很棒！我周六去看望了爷爷奶奶。', [
          W('It', '它', '/ɪt/'), W('was', '是', '/wʌz/'),
          W('great', '很棒的', '/ɡreɪt/'), W('I', '我', '/aɪ/'),
          W('visited', '看望', '/ˈvɪzɪtɪd/'), W('my', '我的', '/maɪ/'),
          W('grandparents', '祖父母', '/ˈɡrænˌpɛrənts/'), W('on', '在', '/ɒn/'),
          W('Saturday', '周六', '/ˈsætərdeɪ/')
        ]),
      S('s2a3', "On Sunday, I stayed home and read a book.",
        '周日我待在家里看了本书。', [
          W('On', '在', '/ɒn/'), W('Sunday', '周日', '/ˈsʌndeɪ/'),
          W('I', '我', '/aɪ/'), W('stayed', '待', '/steɪd/'),
          W('home', '家', '/hoʊm/'), W('and', '和', '/ænd/'),
          W('read', '读', '/rɛd/'), W('a', '一本', '/ə/'),
          W('book', '书', '/bʊk/')
        ])
    ]),
    part('u2-talk-b', "Part B Let's talk", 'dialogue', [
      S('s2b1', "Did you do anything special last weekend?",
        '你上周末做了什么特别的事吗？', [
          W('Did', '（过去时）', '/dɪd/'), W('you', '你', '/juː/'),
          W('do', '做', '/duː/'), W('anything', '任何事', '/ˈɛniθɪŋ/'),
          W('special', '特别的', '/ˈspɛʃl/'), W('last', '上一个', '/læst/'),
          W('weekend', '周末', '/ˈwiːkɛnd/')
        ]),
      S('s2b2', "Yes! I went to the science museum. It was so cool!",
        '有！我去了科学博物馆。太酷了！', [
          W('Yes', '是的', '/jɛs/'), W('I', '我', '/aɪ/'),
          W('went', '去', '/wɛnt/'), W('to', '到', '/tuː/'),
          W('the', '这', '/ðə/'), W('science', '科学', '/ˈsaɪəns/'),
          W('museum', '博物馆', '/mjuˈziːəm/'), W('It', '它', '/ɪt/'),
          W('was', '是', '/wʌz/'), W('so', '如此', '/soʊ/'),
          W('cool', '酷的', '/kuːl/')
        ]),
      S('s2b3', "Weekends are the best time to explore and learn new things!",
        '周末是探索和学习新事物的最佳时间！', [
          W('Weekends', '周末（复数）', '/ˈwiːkɛndz/'), W('are', '是', '/ɑːr/'),
          W('the', '这', '/ðə/'), W('best', '最好的', '/bɛst/'),
          W('time', '时间', '/taɪm/'), W('to', '（不定式）', '/tuː/'),
          W('explore', '探索', '/ɪkˈsplɔːr/'), W('and', '和', '/ænd/'),
          W('learn', '学习', '/lɜːrn/'), W('new', '新的', '/nuː/'),
          W('things', '事物', '/θɪŋz/')
        ])
    ]),
    part('u2-words', 'Unit 2 单词表', 'words', [])
  ], [
    W('weekend', '周末', '/ˈwiːkɛnd/'), W('last', '上一个', '/læst/'),
    W('visited', '看望（过去式）', '/ˈvɪzɪtɪd/'), W('stayed', '待（过去式）', '/steɪd/'),
    W('read', '读（过去式）', '/rɛd/'), W('went', '去（过去式）', '/wɛnt/'),
    W('museum', '博物馆', '/mjuˈziːəm/'), W('special', '特别的', '/ˈspɛʃl/'),
    W('anything', '任何事', '/ˈɛniθɪŋ/'), W('explore', '探索', '/ɪkˈsplɔːr/'),
    W('grandparent', '祖父母', '/ˈɡrænˌpɛrənt/'), W('science', '科学', '/ˈsaɪəns/')
  ]),

  unit('u3', 'Unit 3 Where Did You Go?', [
    part('u3-talk-a', "Part A Let's talk", 'dialogue', [
      S('s3a1', "Where did you go over the winter holiday?",
        '你寒假去哪里了？', [
          W('Where', '哪里', '/wɛr/'), W('did', '（过去时）', '/dɪd/'),
          W('you', '你', '/juː/'), W('go', '去', '/ɡoʊ/'),
          W('over', '在……期间', '/ˈoʊvər/'), W('the', '这', '/ðə/'),
          W('winter', '冬天', '/ˈwɪntər/'), W('holiday', '假期', '/ˈhɒlədeɪ/')
        ]),
      S('s3a2', "I went to Harbin with my family. We saw the ice festival!",
        '我和家人去了哈尔滨。我们看了冰雪节！', [
          W('I', '我', '/aɪ/'), W('went', '去', '/wɛnt/'),
          W('to', '到', '/tuː/'), W('Harbin', '哈尔滨', '/hɑːrˈbɪn/'),
          W('with', '和', '/wɪð/'), W('my', '我的', '/maɪ/'),
          W('family', '家人', '/ˈfæməli/'), W('We', '我们', '/wiː/'),
          W('saw', '看见', '/sɔː/'), W('the', '这', '/ðə/'),
          W('ice', '冰', '/aɪs/'), W('festival', '节', '/ˈfɛstɪvl/')
        ]),
      S('s3a3', "It was freezing but absolutely beautiful!",
        '虽然冷得要命但美极了！', [
          W('It', '它', '/ɪt/'), W('was', '是', '/wʌz/'),
          W('freezing', '极冷的', '/ˈfriːzɪŋ/'), W('but', '但是', '/bʌt/'),
          W('absolutely', '绝对地', '/ˌæbsəˈluːtli/'), W('beautiful', '美丽的', '/ˈbjuːtɪfl/')
        ])
    ]),
    part('u3-talk-b', "Part B Let's talk", 'dialogue', [
      S('s3b1', "What did you buy there?",
        '你在那里买了什么？', [
          W('What', '什么', '/wʌt/'), W('did', '（过去时）', '/dɪd/'),
          W('you', '你', '/juː/'), W('buy', '买', '/baɪ/'),
          W('there', '那里', '/ðɛr/')
        ]),
      S('s3b2', "I bought some postcards and local snacks for my friends.",
        '我买了些明信片和当地零食给朋友。', [
          W('I', '我', '/aɪ/'), W('bought', '买（过去式）', '/bɔːt/'),
          W('some', '一些', '/sʌm/'), W('postcards', '明信片（复数）', '/ˈpoʊstkɑːrdz/'),
          W('and', '和', '/ænd/'), W('local', '当地的', '/ˈloʊkl/'),
          W('snacks', '零食（复数）', '/snæks/'), W('for', '给', '/fɔːr/'),
          W('my', '我的', '/maɪ/'), W('friends', '朋友（复数）', '/frɛndz/')
        ]),
      S('s3b3', "Travelling creates memories that last a lifetime!",
        '旅行创造一生难忘的回忆！', [
          W('Travelling', '旅行', '/ˈtrævəlɪŋ/'), W('creates', '创造', '/kriˈeɪts/'),
          W('memories', '回忆（复数）', '/ˈmɛməriz/'), W('that', '那些', '/ðæt/'),
          W('last', '持续', '/læst/'), W('a', '一个', '/ə/'),
          W('lifetime', '一生', '/ˈlaɪftaɪm/')
        ])
    ]),
    part('u3-words', 'Unit 3 单词表', 'words', [])
  ], [
    W('holiday', '假期', '/ˈhɒlədeɪ/'), W('went', '去（过去式）', '/wɛnt/'),
    W('saw', '看见（过去式）', '/sɔː/'), W('bought', '买（过去式）', '/bɔːt/'),
    W('postcard', '明信片', '/ˈpoʊstkɑːrd/'), W('local', '当地的', '/ˈloʊkl/'),
    W('freezing', '极冷的', '/ˈfriːzɪŋ/'), W('memory', '回忆', '/ˈmɛməri/'),
    W('lifetime', '一生', '/ˈlaɪftaɪm/'), W('festival', '节日', '/ˈfɛstɪvl/'),
    W('absolutely', '绝对地', '/ˌæbsəˈluːtli/'), W('create', '创造', '/kriˈeɪt/')
  ]),

  unit('u4', 'Unit 4 Then and Now', [
    part('u4-talk-a', "Part A Let's talk", 'dialogue', [
      S('s4a1', "Look at this old photo. That's me five years ago!",
        '看这张老照片。那是五年前的我！', [
          W('Look', '看', '/lʊk/'), W('at', '向', '/æt/'),
          W('this', '这', '/ðɪs/'), W('old', '旧的', '/oʊld/'),
          W('photo', '照片', '/ˈfoʊtoʊ/'), W("That's", '那是', '/ðæts/'),
          W('me', '我', '/miː/'), W('five', '五', '/faɪv/'),
          W('years', '年（复数）', '/jɪrz/'), W('ago', '以前', '/əˈɡoʊ/')
        ]),
      S('s4a2', "You were so little! Now you've grown so much.",
        '你那时候好小！现在你长大了这么多。', [
          W('You', '你', '/juː/'), W('were', '是（过去式）', '/wɜːr/'),
          W('so', '如此', '/soʊ/'), W('little', '小的', '/ˈlɪtl/'),
          W('Now', '现在', '/naʊ/'), W("you've", '你已经', '/juːv/'),
          W('grown', '成长', '/ɡroʊn/'), W('so', '如此', '/soʊ/'),
          W('much', '多', '/mʌtʃ/')
        ]),
      S('s4a3', "Time flies! But some things never change, like friendship.",
        '时光飞逝！但有些事永不变，比如友谊。', [
          W('Time', '时光', '/taɪm/'), W('flies', '飞逝', '/flaɪz/'),
          W('But', '但是', '/bʌt/'), W('some', '一些', '/sʌm/'),
          W('things', '事情', '/θɪŋz/'), W('never', '永不', '/ˈnɛvər/'),
          W('change', '改变', '/tʃeɪndʒ/'), W('like', '像', '/laɪk/'),
          W('friendship', '友谊', '/ˈfrɛndʃɪp/')
        ])
    ]),
    part('u4-talk-b', "Part B Let's talk", 'dialogue', [
      S('s4b1', "How has our school changed?",
        '我们学校发生了怎样的变化？', [
          W('How', '怎样', '/haʊ/'), W('has', '（完成时）', '/hæz/'),
          W('our', '我们的', '/aʊr/'), W('school', '学校', '/skuːl/'),
          W('changed', '改变', '/tʃeɪndʒd/')
        ]),
      S('s4b2', "Before, there was no computer lab. Now we have two!",
        '以前没有计算机室。现在我们有两个！', [
          W('Before', '以前', '/bɪˈfɔːr/'), W('there', '（存在句）', '/ðɛr/'),
          W('was', '有', '/wʌz/'), W('no', '没有', '/noʊ/'),
          W('computer', '计算机', '/kəmˈpjuːtər/'), W('lab', '实验室', '/læb/'),
          W('Now', '现在', '/naʊ/'), W('we', '我们', '/wiː/'),
          W('have', '有', '/hæv/'), W('two', '两个', '/tuː/')
        ]),
      S('s4b3', "Change is everywhere. The important thing is to keep learning.",
        '变化无处不在。重要的是不断学习。', [
          W('Change', '变化', '/tʃeɪndʒ/'), W('is', '是', '/ɪz/'),
          W('everywhere', '无处不在', '/ˈɛvriwɛr/'), W('The', '这', '/ðə/'),
          W('important', '重要的', '/ɪmˈpɔːrtnt/'), W('thing', '事情', '/θɪŋ/'),
          W('is', '是', '/ɪz/'), W('to', '（不定式）', '/tuː/'),
          W('keep', '保持', '/kiːp/'), W('learning', '学习', '/ˈlɜːrnɪŋ/')
        ])
    ]),
    part('u4-words', 'Unit 4 单词表', 'words', [])
  ], [
    W('ago', '以前', '/əˈɡoʊ/'), W('before', '以前', '/bɪˈfɔːr/'),
    W('now', '现在', '/naʊ/'), W('then', '那时', '/ðɛn/'),
    W('change', '改变', '/tʃeɪndʒ/'), W('grow', '成长', '/ɡroʊ/'),
    W('photo', '照片', '/ˈfoʊtoʊ/'), W('little', '小的', '/ˈlɪtl/'),
    W('friendship', '友谊', '/ˈfrɛndʃɪp/'), W('computer', '计算机', '/kəmˈpjuːtər/'),
    W('lab', '实验室', '/læb/'), W('everywhere', '无处不在', '/ˈɛvriwɛr/')
  ])
]);

// ====================================================================
//  输出
// ====================================================================
const allBooks = { pep3b, pep4a, pep4b, pep5a, pep5b, pep6a, pep6b };

let out = '// Auto-generated textbook data for grades 3B–6B\n';
out += '// Generated: ' + new Date().toISOString().split('T')[0] + '\n';
out += 'window.__EXTRA_TEXTBOOKS = {\n';

let first = true;
for (const book of Object.values(allBooks)) {
  if (!first) out += ',\n';
  first = false;
  out += '  ' + JSON.stringify(book.id) + ': ' + JSON.stringify(book, null, 2);
}

out += '\n};\n';

const target = path.join(__dirname, 'textbook-data-extra.js');
fs.writeFileSync(target, out, 'utf-8');
console.log('Written: ' + target);
console.log('Size: ' + (fs.statSync(target).size / 1024).toFixed(1) + ' KB');
console.log('Books: ' + Object.keys(allBooks).length);
