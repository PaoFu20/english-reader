# ============================================================
#  deploy.ps1 -- English Reader deploy script
#  Run after modifying index.html to push to production
#  Mobile: https://paofu20.github.io/english-reader/
# ============================================================
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host "=== English Reader - Deploy ===" -ForegroundColor Cyan
Write-Host ""

# Check if index.html has changes
$status = git status --porcelain index.html
if (-not $status) {
    Write-Host "[OK] index.html unchanged, skip deploy" -ForegroundColor Green
    exit 0
}

Write-Host "[1/3] Stage index.html ..." -ForegroundColor Yellow
git add index.html

Write-Host "[2/3] Commit: updated at $timestamp" -ForegroundColor Yellow
git commit -m "deploy: update index.html ($timestamp)"

Write-Host "[3/3] Push to GitHub + Gitee ..." -ForegroundColor Yellow
git push github master
git push origin master

Write-Host ""
Write-Host "=== Deploy complete! ===" -ForegroundColor Green
Write-Host "GitHub Pages: https://paofu20.github.io/english-reader/" -ForegroundColor Cyan
Write-Host "Gitee Pages:  https://paofu20.gitee.io/english-reader/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Tip: GitHub Pages refreshes in 1-2 minutes" -ForegroundColor DarkGray
