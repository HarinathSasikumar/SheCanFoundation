@echo off
echo ========================================================
echo 🌸 Starting She Can Foundation Full-Stack App 🌸
echo ========================================================

:: Add Node.js to PATH temporarily for this script
set PATH=C:\Users\HARINATH\AppData\Local\nvm\v24.4.0;%PATH%

:: Run both frontend and backend concurrently
call npm run dev

pause
