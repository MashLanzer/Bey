/* ========================================
   INTERACTIVIDAD DE LA PÁGINA ROMÁNTICA
   ======================================== */

// Variables para los elementos del DOM
const heart = document.getElementById('heart');
const mainSection = document.getElementById('main-section');
const loveLetter = document.getElementById('love-letter-section');
const photoGallery = document.getElementById('photo-gallery-section');
const finalMessage = document.getElementById('final-message-section');
const closeLetter = document.getElementById('close-letter');
const closeGallery = document.getElementById('close-gallery');
const closeFinal = document.getElementById('close-final');
const nextToGallery = document.getElementById('next-to-gallery');
const backToLetter = document.getElementById('back-to-letter');
const restart = document.getElementById('restart');
const backgroundMusic = document.getElementById('background-music');

// Estado de la página
let heartClicked = false;

/* ========================================
   EVENTO: CLIC EN EL CORAZÓN
   ======================================== */

heart.addEventListener('click', function() {
    heartClicked = true;
    
    // Reproducir música de fondo si existe
    if (backgroundMusic) {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay bloqueado. La música se reproducirá después de la interacción del usuario.');
        });
    }
    
    // Ocultar sección principal
    mainSection.classList.add('hidden');
    
    // Mostrar carta de amor
    loveLetter.classList.remove('hidden');
    
    // Agregar efecto de pulso al corazón antes de desaparecer
    heart.style.animation = 'none';
    setTimeout(() => {
        heart.style.animation = '';
    }, 10);
});

/* ========================================
   EVENTO: CERRAR CARTA DE AMOR
   ======================================== */

closeLetter.addEventListener('click', function() {
    loveLetter.classList.add('hidden');
    mainSection.classList.remove('hidden');
});

/* ========================================
   EVENTO: IR A LA GALERÍA DESDE LA CARTA
   ======================================== */

nextToGallery.addEventListener('click', function() {
    loveLetter.classList.add('hidden');
    photoGallery.classList.remove('hidden');
});

/* ========================================
   EVENTO: CERRAR GALERÍA
   ======================================== */

closeGallery.addEventListener('click', function() {
    photoGallery.classList.add('hidden');
    mainSection.classList.remove('hidden');
});

/* ========================================
   EVENTO: VOLVER A LA CARTA DESDE LA GALERÍA
   ======================================== */

backToLetter.addEventListener('click', function() {
    photoGallery.classList.add('hidden');
    loveLetter.classList.remove('hidden');
});

/* ========================================
   EVENTO: CERRAR MENSAJE FINAL
   ======================================== */

closeFinal.addEventListener('click', function() {
    finalMessage.classList.add('hidden');
    mainSection.classList.remove('hidden');
});

/* ========================================
   EVENTO: REINICIAR LA EXPERIENCIA
   ======================================== */

restart.addEventListener('click', function() {
    finalMessage.classList.add('hidden');
    mainSection.classList.remove('hidden');
    heartClicked = false;
});

/* ========================================
   EFECTO: CLIC EN LA GALERÍA (OPCIONAL)
   ======================================== */

// Agregar efecto de zoom al hacer clic en las imágenes
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Crear un modal de imagen expandida (opcional)
        const img = this.querySelector('.gallery-image');
        const src = img.src;
        const alt = img.alt;
        
        // Crear overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 14, 39, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
            cursor: pointer;
        `;
        
        // Crear imagen expandida
        const expandedImg = document.createElement('img');
        expandedImg.src = src;
        expandedImg.alt = alt;
        expandedImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(255, 107, 157, 0.3);
            animation: slideUp 0.3s ease-out;
        `;
        
        overlay.appendChild(expandedImg);
        document.body.appendChild(overlay);
        
        // Cerrar al hacer clic en el overlay
        overlay.addEventListener('click', function() {
            overlay.remove();
        });
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                overlay.remove();
            }
        });
    });
});

/* ========================================
   EFECTO: SONIDO AL PASAR SOBRE EL CORAZÓN
   ======================================== */

heart.addEventListener('mouseenter', function() {
    if (!heartClicked) {
        // Puedes agregar un sonido aquí si lo deseas
        // const sound = new Audio('path/to/sound.mp3');
        // sound.play();
    }
});

/* ========================================
   EFECTO: SCROLL SUAVE EN MODALES
   ======================================== */

const modalContents = document.querySelectorAll('.modal-content');

modalContents.forEach(modal => {
    modal.addEventListener('wheel', function(e) {
        // El scroll ya funciona automáticamente, pero puedes agregar efectos aquí
    });
});

/* ========================================
   EFECTO: ANIMACIÓN AL CARGAR LA PÁGINA
   ======================================== */

window.addEventListener('load', function() {
    // Agregar clase de animación al contenedor
    const container = document.querySelector('.container');
    container.style.opacity = '1';
});

/* ========================================
   FUNCIONALIDAD: PERMITIR NAVEGACIÓN CON TECLADO
   ======================================== */

document.addEventListener('keydown', function(e) {
    // ESC para cerrar modales
    if (e.key === 'Escape') {
        if (!loveLetter.classList.contains('hidden')) {
            closeLetter.click();
        } else if (!photoGallery.classList.contains('hidden')) {
            closeGallery.click();
        } else if (!finalMessage.classList.contains('hidden')) {
            closeFinal.click();
        }
    }
    
    // Enter para confirmar acciones
    if (e.key === 'Enter') {
        if (!loveLetter.classList.contains('hidden') && document.activeElement === nextToGallery) {
            nextToGallery.click();
        }
    }
});

/* ========================================
   FUNCIONALIDAD: DETECTAR MODO OSCURO DEL SISTEMA
   ======================================== */

// Detectar preferencia de modo oscuro del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El modo oscuro ya está aplicado por defecto
    document.documentElement.style.colorScheme = 'dark';
}

/* ========================================
   FUNCIONALIDAD: COMPARTIR LA PÁGINA (OPCIONAL)
   ======================================== */

// Si deseas agregar un botón de compartir, puedes usar esta función:
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: 'Para Ti, Melissa ♡',
            text: 'Un regalo especial hecho con amor',
            url: window.location.href
        }).catch(err => console.log('Error al compartir:', err));
    } else {
        alert('Copia el enlace de la página para compartirlo');
    }
}

/* ========================================
   FUNCIONALIDAD: GUARDAR ESTADO EN LOCALSTORAGE
   ======================================== */

// Guardar el estado de la página para recordar si el usuario ya vio la carta
function saveState() {
    localStorage.setItem('heartClicked', heartClicked);
}

function loadState() {
    const saved = localStorage.getItem('heartClicked');
    if (saved === 'true') {
        heartClicked = true;
    }
}

// Cargar estado al iniciar
loadState();

// Guardar estado cuando cambia
heart.addEventListener('click', saveState);
closeLetter.addEventListener('click', () => {
    heartClicked = false;
    saveState();
});

/* ========================================
   FUNCIONALIDAD: EFECTO PARALLAX (OPCIONAL)
   ======================================== */

window.addEventListener('mousemove', function(e) {
    if (!heartClicked) {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        
        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
            contentWrapper.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
});

/* ========================================
   FUNCIONALIDAD: REPRODUCIR MÚSICA AL HACER CLIC
   ======================================== */

// Intentar reproducir música cuando el usuario interactúa
document.addEventListener('click', function() {
    if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            // Silenciar errores de autoplay
        });
    }
}, { once: true });

/* ========================================
   FUNCIONALIDAD: PREVENIR ZOOM EN MÓVIL
   ======================================== */

document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

/* ========================================
   FUNCIONALIDAD: MEJORAR ACCESIBILIDAD
   ======================================== */

// Agregar atributos ARIA para mejor accesibilidad
heart.setAttribute('role', 'button');
heart.setAttribute('aria-label', 'Haz clic para revelar el mensaje de amor');
heart.setAttribute('tabindex', '0');

// Permitir activar el corazón con Enter o Space
heart.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        heart.click();
    }
});

console.log('✨ ¡Página romántica cargada correctamente! ✨');
