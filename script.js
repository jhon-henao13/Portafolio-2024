const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.querySelector(".nav-links-div");

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('nav-links-div--show')
})



tsParticles.load("tsparticles", {
    fullScreen: {
        enable: false
    },
    background: {
        color: {
            value: "#001E1A"
        }
    },
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
            push: {
                quantity: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#10D589"  // Verde profesional
        },
        links: {
            color: "#10D589",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1.5
        },
        collisions: {
            enable: false
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce"
            },
            random: true,
            speed: 0.6,
            straight: false
        },
        number: {
            value: 70,
            density: {
                enable: true,
                area: 800
            }
        },
        opacity: {
            value: 0.2
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    },
    detectRetina: true
});
