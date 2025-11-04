# Instrucciones de Personalización y Hosting para tu Web Romántica

Hola,

Aquí tienes el paquete completo de tu página web romántica. El diseño es oscuro, elegante y minimalista, con un corazón interactivo que revela una carta de amor y una galería de fotos.

## 1. Contenido del Paquete

El archivo `romantic_web.zip` contiene los siguientes archivos y carpetas:

*   `index.html`: La estructura principal de la página.
*   `style.css`: Los estilos de diseño (tema oscuro).
*   `script.js`: La lógica de interactividad (corazón, modales).
*   `README.md`: Instrucciones detalladas de personalización.
*   `assets/images/`: Carpeta para tus imágenes (actualmente vacía, lista para tus fotos).

## 2. Personalización Obligatoria

Debes realizar estos cambios antes de subir la web:

### A. La Carta de Amor

1.  Abre el archivo **`index.html`**.
2.  Busca la sección de la carta de amor (dentro de `<div id="love-letter">`).
3.  **Reemplaza** el texto de marcador de posición `[Aquí puedes escribir tu mensaje personal...]` con tu mensaje real y sincero.
4.  **Reemplaza** `[Tu Nombre]` en la firma con tu nombre.

### B. La Galería de Fotos

1.  Sube tus fotos a un servicio de hosting de imágenes (o a la carpeta `assets/images/` de tu propio hosting).
2.  Abre el archivo **`index.html`**.
3.  Busca los elementos `<img>` dentro de `<div id="photo-gallery">`.
4.  **Reemplaza** el valor del atributo `src` (`./assets/images/placeholder-1.jpg`, etc.) con la URL directa de tus imágenes.

## 3. Personalización Opcional (Música)

Para añadir la canción especial que elegiste:

1.  Consigue el archivo de audio de tu canción (preferiblemente en formato `.mp3`).
2.  Sube el archivo de audio a tu hosting.
3.  Abre el archivo **`index.html`**.
4.  Busca el comentario `<!-- CÓDIGO PARA MÚSICA DE FONDO -->`.
5.  **Descomenta** (elimina `<!--` y `-->`) y **personaliza** el siguiente código, reemplazando `URL_DE_TU_CANCION.mp3` con la URL directa de tu archivo de audio:

\`\`\`html
<audio id="background-music" loop autoplay>
    <source src="URL_DE_TU_CANCION.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
\`\`\`

**Nota sobre la Música:** La reproducción automática (`autoplay`) puede ser bloqueada por los navegadores. El código JavaScript intentará iniciar la música al primer clic del usuario en el corazón, asegurando que se reproduzca.

## 4. Hosting y Despliegue

1.  Descomprime el archivo `romantic_web.zip`.
2.  Sube todos los archivos y carpetas (incluyendo `index.html`, `style.css`, `script.js`, `assets/`) a la **carpeta raíz** de tu hosting privado.
3.  Una vez subido, tu novia podrá acceder a la web a través de la URL principal de tu dominio.

¡Espero que le encante!
