document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    //  1. ELEMENTOS DEL DOM
    // ========================================
    const heart = document.getElementById('heart');
    const mainSection = document.getElementById('main-section');
    const loveLetterSection = document.getElementById('love-letter-section');
    const transitionSection = document.getElementById('transition-section');
    const photoGallerySection = document.getElementById('photo-gallery-section');
    const finalMessageSection = document.getElementById('final-message-section');
    const backgroundMusic = document.getElementById('background-music');

    const closeLetter = document.getElementById('close-letter');
    const nextToGallery = document.getElementById('next-to-gallery');
    const closeGallery = document.getElementById('close-gallery');
    const backToLetter = document.getElementById('back-to-letter');
    const closeFinal = document.getElementById('close-final');
    const restart = document.getElementById('restart');

    // ========================================
    //  2. ESTADO DE LA PÁGINA
    // ========================================
    let heartClicked = localStorage.getItem('heartClicked') === 'true';

    // ========================================
    //  3. FUNCIONES DE ANIMACIÓN Y EFECTOS
    // ========================================

    // --- Lluvia de Corazones ---
    const heartRainContainer = document.createElement('div');
    heartRainContainer.className = 'heart-rain-container';
    document.body.appendChild(heartRainContainer);

    function createFallingHeart() {
        const fallingHeart = document.createElement('div');
        fallingHeart.className = 'falling-heart';
        fallingHeart.innerHTML = '♡';
        fallingHeart.style.left = Math.random() * 100 + 'vw';
        fallingHeart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        fallingHeart.style.fontSize = (Math.random() * 10 + 10) + 'px';
        heartRainContainer.appendChild(fallingHeart);
        setTimeout(() => { fallingHeart.remove(); }, 7000);
    }

    function startHeartRain() {
        const rainInterval = setInterval(createFallingHeart, 200);
        setTimeout(() => {
            clearInterval(rainInterval);
            // Limpia los corazones restantes para no sobrecargar
            heartRainContainer.innerHTML = '';
        }, 8000); // La lluvia dura 8 segundos
    }

    // --- Efecto de Escritura (Typed.js) ---
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-title', {
            strings: ['Para Ti, Melissa ♡'],
            typeSpeed: 80,
            startDelay: 500,
            showCursor: false
        });
    }

    // --- Efecto Parallax en la pantalla principal ---
    window.addEventListener('mousemove', function(e) {
        if (!heartClicked) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // Movimiento más sutil
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            const contentWrapper = document.querySelector('.content-wrapper');
            if (contentWrapper) {
                contentWrapper.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
    });

    // ========================================
    //  4. FUNCIONES DE UTILIDAD
    // ========================================

    // --- Contador de Días ---
    function calculateDays() {
        // ¡IMPORTANTE! Asegúrate de que esta es la fecha correcta.
        const startDate = new Date('2025-09-28');
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const daysElement = document.getElementById('days-together');
        if (daysElement) {
            daysElement.textContent = diffDays;
        }
    }
    calculateDays();

    // --- Reproducir música con interacción ---
    function playMusic() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(e => console.log("La música necesita interacción del usuario."));
        }
    }

    // ========================================
    //  5. EVENTOS PRINCIPALES DE NAVEGACIÓN
    // ========================================

    // --- Clic en el Corazón Principal ---
    heart.addEventListener('click', () => {
        heartClicked = true;
        localStorage.setItem('heartClicked', 'true');
        playMusic();
        startHeartRain();
        mainSection.classList.add('hidden');
        loveLetterSection.classList.remove('hidden');
    });

    // --- Ir a la Galería ---
    nextToGallery.addEventListener('click', () => {
        loveLetterSection.classList.add('hidden');
        transitionSection.classList.remove('hidden');
        setTimeout(() => {
            transitionSection.classList.add('hidden');
            photoGallerySection.classList.remove('hidden');
        }, 2500); // Duración de la pantalla de transición
    });

    // --- Volver a la Carta ---
    backToLetter.addEventListener('click', () => {
        photoGallerySection.classList.add('hidden');
        loveLetterSection.classList.remove('hidden');
    });

    // --- Botones para Cerrar y Reiniciar ---
    [closeLetter, closeGallery, closeFinal].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                loveLetterSection.classList.add('hidden');
                photoGallerySection.classList.add('hidden');
                finalMessageSection.classList.add('hidden');
                mainSection.classList.remove('hidden');
                heartClicked = false;
                localStorage.setItem('heartClicked', 'false');
            });
        }
    });

    restart.addEventListener('click', () => {
        finalMessageSection.classList.add('hidden');
        mainSection.classList.remove('hidden');
        heartClicked = false;
        localStorage.setItem('heartClicked', 'false');
    });

    // ========================================
    //  6. MEJORAS DE EXPERIENCIA DE USUARIO
    // ========================================

    // --- Zoom en Galería ---
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-image');
            const overlay = document.createElement('div');
            overlay.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,14,39,.95);display:flex;align-items:center;justify-content:center;z-index:2000;cursor:pointer;backdrop-filter:blur(5px);animation:fadeIn .3s;`;
            const expandedImg = document.createElement('img');
            expandedImg.src = img.src;
            expandedImg.style.cssText = `max-width:90%;max-height:90%;object-fit:contain;border-radius:15px;animation:slideUp .3s ease-out;`;
            overlay.appendChild(expandedImg);
            document.body.appendChild(overlay);
            overlay.addEventListener('click', () => overlay.remove());
        });
    });

    // --- Navegación con Teclado (Enter y Escape) ---
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const visibleModal = document.querySelector('.modal:not(.hidden)');
            if (visibleModal) {
                visibleModal.querySelector('.close-btn')?.click();
            }
        }
        if (e.key === 'Enter' && document.activeElement === heart) {
            heart.click();
        }
    });

    // --- Reproducir música en cualquier primer clic ---
    document.addEventListener('click', playMusic, { once: true });

    console.log('✨ ¡Página romántica cargada y lista para sorprender! ✨');
});
