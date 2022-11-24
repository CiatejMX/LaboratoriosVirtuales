const particlesConfig = {
  "particles": {
    "number": {
        "value": 150,
        "density": {
            "enable": false,
            "value_area": 500
        }
    },
    "color": {
        "value": "#FFF"
    },
    "shape": {
        "type": "circle",
        "polygon": {
            "sides": 100
        },
        "stroke": {
            "width": 4,
            "color": "#2ea0b9"
          }
    },
    "opacity": {
        "value": 1,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
    },
    "size": {
        "value": 6,
        "random": false,
        "anim": {
            "enable": true,
            "speed": 20,
            "size_min": 1,
            "sync": false
        }
    },

    "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FFF",
        "opacity": 0.4,
        "width": 2
    },
    "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
        }
    }
},
"interactivity": {
    "detect_on": 'canvas',
    "events": {
        "onhover": {
            "enable": true,
            "mode": ["grab"]
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 140,
            "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
"retina_detect": true,
}

export default particlesConfig;