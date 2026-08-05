# ============================================================
#  deploy.ps1 — 英语朗读项目部署脚本
#  每次修改 index.html 后运行此脚本即可推送上线
#  手机访问: https://paofu20.github.io/english-reader/
# ============================================================
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host "=== 英语朗读 - 部署脚本 ===" -ForegroundColor Cyan
Write-Host ""

# 检查 index.html 是否有变更
$status = git status --porcelain index.html
if (-not $status) {
    Write-Host "[OK] index.html 无变更，跳过部署" -ForegroundColor Green
    exit 0
}

Write-Host "[1/3] 暂存 index.html ..." -ForegroundColor Yellow
git add index.html

Write-Host "[2/3] 提交: 更新于 $timestamp" -ForegroundColor Yellow
git commit -m "deploy: 更新 index.html ($timestamp)"

Write-Host "[3/3] 推送到 GitHub + Gitee ..." -ForegroundColor Yellow
git push github master
git push origin master

Write-Host ""
Write-Host "=== 部署完成! ===" -ForegroundColor Green
Write-Host "GitHub Pages: https://paofu20.github.io/english-reader/" -ForegroundColor Cyan
Write-Host "Gitee Pages:  https://paofu20.gitee.io/english-reader/" -ForegroundColor Cyan
Write-Host ""
Write-Host "提示: GitHub Pages 约 1-2 分钟后刷新" -ForegroundColor DarkGray
