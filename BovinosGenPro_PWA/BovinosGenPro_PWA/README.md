# BovinoGen PRO - PWA

Aplicación web progresiva (PWA) orientada a la simulación genética bovina y al registro de ejemplares de hato.

## Estructura de archivos
- `index.html`: Interfaz principal con simulador de cruzamiento y registro.
- `styles.css`: Hojas de estilo modernas y responsivas.
- `app.js`: Lógica de simulación genética y almacenamiento local (LocalStorage).
- `manifest.json`: Archivo de configuración PWA.
- `service-worker.js`: Script para el almacenamiento en caché y uso Offline.
- `icon.svg`: Icono de la aplicación.

## Uso
1. Extrae los archivos en una carpeta.
2. Ejecuta los archivos mediante un servidor web local (Live Server en VS Code, Python `http.server`, Docker, etc.) para que el Service Worker funcione correctamente.
3. Puedes probarla apagando tu conexión de red para comprobar su funcionamiento offline.
