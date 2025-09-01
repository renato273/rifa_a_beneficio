# Usar Node.js LTS Alpine para menor tamaño
FROM mcr.microsoft.com/oss/library/node:18-alpine

# Instalar dumb-init para manejo correcto de señales
RUN apk add --no-cache dumb-init

# Crear usuario no-root por seguridad
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Crear directorio de trabajo
WORKDIR /app

# Cambiar propietario del directorio
RUN chown nextjs:nodejs /app

# Cambiar a usuario no-root
USER nextjs

# Copiar package.json y package-lock.json
COPY --chown=nextjs:nodejs package*.json ./

# Instalar dependencias
RUN npm ci --only=production && npm cache clean --force

# Copiar el resto de archivos
COPY --chown=nextjs:nodejs . .

# Exponer el puerto
EXPOSE 3000

# Usar dumb-init para manejo correcto de señales
ENTRYPOINT ["dumb-init", "--"]

# Comando para iniciar la aplicación
CMD ["npm", "start"]