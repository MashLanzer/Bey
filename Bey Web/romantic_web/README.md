# Proyecto Web Romántico para Melissa/Bey

Este es un proyecto web minimalista y elegante, con un tema oscuro, diseñado para ser un regalo especial.

## Estructura del Proyecto

*   `index.html`: Archivo principal de la página web.
*   `style.css`: Hoja de estilos para el diseño (tema oscuro).
*   `script.js`: Lógica de la página (interactividad del corazón, revelación de contenido).
*   `assets/images/`: Directorio para las imágenes de la galería.

## Personalización

### 1. Carta de Amor

El contenido de la carta de amor se encuentra en el archivo `index.html` dentro de la sección `<div id="love-letter">`.

**Instrucciones:**
1.  Abre `index.html`.
2.  Busca el texto que comienza con "Mi amada Melissa/Bey,".
3.  Reemplaza el texto de marcador de posición `[Aquí puedes escribir tu mensaje personal...]` con tu mensaje real.
4.  Reemplaza `[Tu Nombre]` con tu nombre.

### 2. Galería de Fotos

La galería de fotos se encuentra en el archivo `index.html` dentro de la sección `<div id="photo-gallery">`.

**Instrucciones:**
1.  Sube tus fotos a un servicio de hosting de imágenes (como Imgur, Google Photos, o tu propio hosting).
2.  Abre `index.html`.
3.  Busca los elementos `<img>` con la clase `gallery-image`.
4.  Reemplaza el valor del atributo `src` (`./assets/images/placeholder-1.jpg`, etc.) con la URL directa de tus imágenes.
5.  Asegúrate de que tus imágenes tengan una buena resolución y proporción para que se vean bien en el diseño.

### 3. Música de Fondo (Autoplay)

Para añadir música de fondo con reproducción automática, debes modificar el archivo `index.html`.

**Instrucciones:**
1.  Consigue el archivo de audio de tu canción especial (preferiblemente en formato `.mp3`).
2.  Sube el archivo de audio a tu hosting.
3.  Abre `index.html`.
4.  Busca el comentario `<!-- CÓDIGO PARA MÚSICA DE FONDO -->`.
5.  Inserta el siguiente código justo debajo, reemplazando `URL_DE_TU_CANCION.mp3` con la URL directa de tu archivo de audio:

'''html
<audio id="background-music" loop autoplay>
    <source src="URL_DE_TU_CANCION.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
'''

**Nota Importante:** La mayoría de los navegadores modernos bloquean la reproducción automática de audio a menos que el usuario interactúe primero con la página. El código JavaScript está diseñado para intentar iniciar la música después del primer clic en el corazón.

## Despliegue

Simplemente sube todos los archivos y carpetas (`index.html`, `style.css`, `script.js`, `assets/`) a la carpeta raíz de tu hosting privado.
