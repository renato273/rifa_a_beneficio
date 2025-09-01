# 🎁 Rifa Benéfica - Por un Corazón Sano

Un sitio web elegante y responsivo para rifas benéficas, construido con Node.js y Express.

## ✨ Características

- **Diseño moderno y responsivo** - Se adapta a todos los dispositivos
- **Slider interactivo** - Galería de premios con navegación suave
- **Modal de imágenes** - Click en las imágenes para verlas en tamaño completo
- **Animaciones CSS** - Efectos visuales atractivos
- **Corazones flotantes** - Animación de fondo temática
- **Navegación por teclado** - Soporte completo para teclas de navegación

## 🚀 Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd rifa-benefica
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Agrega tus imágenes**
   - Coloca las imágenes de los premios en la carpeta `public/images/`
   - Los nombres de archivo deben coincidir con los especificados en el código:
     - `1.jpeg` - Parlante Radioshack
     - `2.jpeg` - Set para Condimentos
     - `3.jpeg` - Tablet
     - `4.jpg` - Hopie

4. **Inicia el servidor**
   ```bash
   npm start
   ```

5. **Abre tu navegador**
   - Visita: `http://localhost:3000`

## 🛠️ Scripts disponibles

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor en modo desarrollo con auto-recarga (requiere nodemon)

## 📁 Estructura del proyecto

```
rifa-benefica/
├── public/                 # Archivos estáticos
│   ├── images/            # Imágenes de los premios
│   │   ├── 1.jpeg
│   │   ├── 2.jpeg
│   │   ├── 3.jpeg
│   │   └── 4.jpg
│   └── index.html         # Página principal
├── server.js              # Servidor Express
├── package.json           # Configuración del proyecto
└── README.md             # Este archivo
```

## 🎨 Personalización

### Cambiar información de contacto
Edita el archivo `public/index.html` y busca la sección `.contact-info`:

```html
<div class="contact-info">
    <h3>📞 Información de Contacto</h3>
    <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
    <p><strong>Email:</strong> rifa.benefica@ejemplo.com</p>
    <p><strong>Precio del boleto:</strong> 5.000 GS</p>
    <p><strong>Fecha del sorteo:</strong> 10 de Octubre, 2025</p>
</div>
```

### Agregar más premios
En el archivo `public/index.html`, busca el array `images` en el JavaScript:

```javascript
const images = [
    {
        src: '/images/nueva-imagen.jpg',
        title: 'Nuevo Premio',
        description: 'Descripción del nuevo premio'
    },
    // ... más imágenes
];
```

### Cambiar colores y estilos
Modifica las variables CSS en la sección `<style>` del archivo `public/index.html`.

## 🌐 Despliegue

### Despliegue local
El servidor está configurado para ejecutarse en el puerto 3000 por defecto. Puedes cambiar esto modificando la variable `PORT` en `server.js`.

### Despliegue en producción
Para desplegar en servicios como Heroku, Vercel, o DigitalOcean:

1. Asegúrate de que `package.json` tenga el script `start`
2. El servidor usa `process.env.PORT` para la configuración automática del puerto
3. Sube todos los archivos excepto `node_modules/`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ❤️ Apoyo

Si este proyecto te ayuda, considera darle una ⭐ en GitHub.

---

**Desarrollado con ❤️ para ayudar a causas benéficas**