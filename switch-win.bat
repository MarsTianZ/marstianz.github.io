@echo off
:: Baris ini WAJIB biar script-nya jalan tepat di folder web kamu, bukan nyasar ke System32
cd /d "%~dp0"

echo Memeriksa status folder node_modules...

:: Kita cek keberadaan folder cadangan Windows.
:: Kalau ada, berarti node_modules yang lagi aktif sekarang itu murni punya Linux.
if exist "node_modules_win\" (
    echo [1/2] Mengamankan versi Linux...
    ren "node_modules" "node_modules_linux"
    
    echo [2/2] Mengaktifkan versi Windows...
    ren "node_modules_win" "node_modules"
    
    echo.
    echo Beres bos! Siap gas ngoding di Windows.
) else (
    echo.
    echo Folder node_modules_win tidak ditemukan. 
    echo Kayaknya ini foldernya emang udah versi Windows deh. Nggak ada yang perlu diubah!
)

echo.
pause