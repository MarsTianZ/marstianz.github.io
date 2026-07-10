#!/bin/bash
echo "Ngecek folder node_modules..."

if [ -d "node_modules" ]; then
    echo "Mengamankan versi Windows..."
    mv node_modules node_modules_win
fi

if [ -d "node_modules_linux" ]; then
    echo "Mengaktifkan versi Linux..."
    mv node_modules_linux node_modules
fi

echo ""
echo "Beres bos! Siap gas ngoding di Linux."
