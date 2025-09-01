const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3010;

// Configuración para producción
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
    app.use(compression()); // Comprimir respuestas
}

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir imágenes
app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, 'public', 'images', imageName));
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>Página no encontrada</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        padding: 50px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        min-height: 100vh;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    h1 { font-size: 3rem; margin-bottom: 1rem; }
                    p { font-size: 1.2rem; margin-bottom: 2rem; }
                    a { 
                        color: #e74c3c; 
                        text-decoration: none; 
                        font-weight: bold;
                        background: white;
                        padding: 10px 20px;
                        border-radius: 25px;
                        transition: transform 0.3s ease;
                    }
                    a:hover { transform: translateY(-2px); }
                </style>
            </head>
            <body>
                <h1>❤️ 404</h1>
                <p>Página no encontrada</p>
                <a href="/">Volver al inicio</a>
            </body>
        </html>
    `);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log(`❤️  Rifa Benéfica - Por un Corazón Sano`);
    console.log(`📁 Sirviendo archivos desde la carpeta 'public'`);
});