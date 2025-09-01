#!/bin/bash

echo "🔍 Verificando archivos para deploy..."

# Verificar que existen los archivos necesarios
files=("package.json" "server.js" "Dockerfile" "public/index.html")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - OK"
    else
        echo "❌ $file - FALTA"
        exit 1
    fi
done

# Verificar imágenes
if [ -d "public/images" ] && [ "$(ls -A public/images)" ]; then
    echo "✅ Imágenes - OK"
else
    echo "⚠️  Carpeta de imágenes vacía o no existe"
fi

# Verificar sintaxis del package.json
if node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))"; then
    echo "✅ package.json - Sintaxis válida"
else
    echo "❌ package.json - Error de sintaxis"
    exit 1
fi

echo ""
echo "🚀 Todo listo para deploy!"
echo "📝 Recuerda:"
echo "   1. Subir código a GitHub"
echo "   2. Configurar repositorio en EasyPanel"
echo "   3. Usar Dockerfile como build method"
echo "   4. Configurar PORT=3000"