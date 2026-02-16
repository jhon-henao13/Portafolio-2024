document.addEventListener('DOMContentLoaded', () => {
    
    const toggleMenuElement = document.getElementById("toggle-menu");
    const mainMenuElement = document.getElementById("nav-menu");
    const closeMenuElement = document.getElementById("close-menu");

    // Verificamos que los elementos existan para evitar errores en consola
    if (toggleMenuElement && mainMenuElement && closeMenuElement) {
        
        // Abrir menú móvil
        toggleMenuElement.addEventListener('click', () => {
            mainMenuElement.classList.add('show');
        });

        // Cerrar menú móvil al tocar la X
        closeMenuElement.addEventListener('click', () => {
            mainMenuElement.classList.remove('show');
        });

        // Cerrar menú automáticamente al hacer click en cualquier enlace (Mejor UX)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenuElement.classList.remove('show');
            });
        });
        
    } else {
        console.warn("No se encontraron los IDs del menú. Revisa tu HTML.");
    }


        tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true, // Cámbialo a true para que la librería gestione el fondo total
            zIndex: -1    // Esto asegura que se vaya al fondo automáticamente
        },
        // ELIMINAMOS la sección 'background' de aquí para que no cree capas extra
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                push: { quantity: 3 },
                repulse: { distance: 100, duration: 0.4 }
            }
        },
        particles: {
            color: { value: "#10D589" },
            links: {
                color: "#10D589",
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1.5
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: true,
                speed: 1, // Le subí un poquito la velocidad (0.6 era casi estático)
                straight: false
            },
            number: {
                value: 80,
                density: { enable: true, area: 800 }
            },
            opacity: {
                value: 0.4 // Subido de 0.2 a 0.4 para que se vean mejor sobre el fondo oscuro
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } }
        },
        detectRetina: true
    });

});