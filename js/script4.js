/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
  Help: {
    title: 'Help',
    subtitle: 'Some useful Links',
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
  Welcome: {
    title: 'Welcome',
    body: 'This is the Monogatari VN Engine',
    icon: '',
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({
  'stars': {
    'particles': {
      'number': {
        'value': 355,
        'density': {
          'enable': true,
          'value_area': 789.1476416322727
        }
      },
      'color': {
        'value': '#ffffff'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 5
        },
        'image': {
          'src': '',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.48927153781200905,
        'random': false,
        'anim': {
          'enable': true,
          'speed': 0.2,
          'opacity_min': 0,
          'sync': false
        }
      },
      'size': {
        'value': 2,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 2,
          'size_min': 0,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 150,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 0.2,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'bubble'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 83.91608391608392,
          'size': 1,
          'duration': 3,
          'opacity': 1,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  },

  'fireSparks': {
    'particles': {
      'number': {
        'value': 400,
        'density': {
          'enable': true,
          'value_area': 3000
        }
      },
      'color': {
        'value': '#fc0000'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#000000'
        },
        'polygon': {
          'nb_sides': 3
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.5,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 1,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 2,
        'random': true,
        'anim': {
          'enable': true,
          'speed': 5,
          'size_min': 0,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 500,
        'color': '#ffffff',
        'opacity': 0.4,
        'width': 2
      },
      'move': {
        'enable': true,
        'speed': 7.8914764163227265,
        'direction': 'top',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false,
          'mode': 'bubble'
        },
        'onclick': {
          'enable': false,
          'mode': 'repulse'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 0.5
          }
        },
        'bubble': {
          'distance': 400,
          'size': 4,
          'duration': 0.3,
          'opacity': 1,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  }


});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {});

// Define the music used in the game.
monogatari.assets('music', {});

// Define the voice files used in the game.
monogatari.assets('voices', {});

// Define the sounds used in the game.
monogatari.assets('sounds', {});

// Define the videos used in the game.
monogatari.assets('videos', {});

// Define the images used in the game.
monogatari.assets('images', {});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {});

// Define the Characters
monogatari.characters({
  cen: {
    name: 'Centinela',
    color: '#4E98AB',
    directory: 'centinela',
    sprites: {
      normal: 'centinela.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  gu: {
    name: 'Guarda',
    color: '#4E98AB',
    directory: 'guarda',
    sprites: {
      normal: 'guarda.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  bar: {
    name: 'Barquero',
    color: '#4E98AB',
    directory: 'barquero',
    sprites: {
      normal: 'barquero.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  ama: {
    name: 'Ama de Llaves',
    color: '#B0521E',
    directory: 'ama',
    sprites: {
      normal: 'ama.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

});

monogatari.script({
  // The game starts here.
  Escena4: [
    'show scene #191A21 with fadeIn',
    'centered Condújolo su camino a una gran ciudad; el centinela de la puerta le preguntó cuál era su oficio y qué cosas sabía.',
    'show image 4FuenteVino1.png with fadeIn',

    'pr:normal Yo lo sé todo',
    'cen:normal En este caso podrás prestarnos un servicio',
    'cen:normal Explícanos por qué la fuente de la plaza, de la que antes manaba vino, se ha secado y ni siquiera da agua.',
    'pr:normal Lo sabréis, pero os lo diré cuando vuelva.',

    'hide image 4FuenteVino1.png with fadeOut',
    'show image 4ArbolManzan1.png with fadeIn',

    'Siguió adelante y llegó a una segunda ciudad, donde el guarda de la muralla le preguntó, a su vez, cuál era su oficio y qué cosas sabía.',
    'pr:normal Yo lo sé todo',
    'gu:normal Entonces puedes hacernos un favor.',
    'gu:normal Dinos por qué un árbol que tenemos en la ciudad, que antes daba manzanas de oro, ahora no tiene ni hojas siquiera.',

    'hide image 4ArbolManzan1.png with fadeOut',

    'show particles stars',
    'show image 4Barquero.png fadeIn',
    'Prosiguiendo su ruta, llegó a la orilla de un ancho y profundo río que había de cruzar. Preguntóle el barquero qué oficio tenía y cuáles eran sus conocimientos.',
    'pr:normal Lo sé todo',
    'bar:normal Siendo así, puedes hacerme un favor',
    'bar:normal Dime por qué tengo que estar bogando eternamente de una a otra orilla, sin que nadie venga a relevarme.',
    'pr:normal Lo sabrás pero te lo diré cuando vuelva.',
    'hide image 4Barquero.png with fadeOut',
    'hide particles stars',

    'show background #57001a with fadeIn',

    'centered Cuando hubo cruzado el río, encontró la entrada del infierno.',
    'show particles fireSparks',
    'show image .png',
    'Todo estaba lleno de hollín; el diablo había salido, pero su ama se hallaba sentada en un ancho sillón.',
    'ama:normal ¿Qué quieres?',
    'pr:normal Quisiera tres cabellos de oro de la cabeza del diablo, pues sin ellos no podré conservar a mi esposa.',
    'ama:normal Mucho pides. Si viene el diablo y te encuentra aquí, mal lo vas a pasar. Pero me das lástima; veré de ayudarte.',
    'centered Y, transformándolo en hormiga, le dijo:',
    '',
    'ama:normal Disimúlate entre los pliegues de mi falda; aquí estarás seguro.',
    'pr:normal Bueno, no está mal para empezar;',
    'pr:normal pero es que, además, quisiera saber tres cosas:',
    'pr:normal por qué una fuente que antes manaba vino se ha secado y no da ni siquiera agua;',
    'pr:normal por qué un árbol que daba manzanas de oro no tiene ahora ni hojas,',
    'pr:normal y por qué un barquero ha de estar bogando sin parar de una a otra orilla, sin que nunca lo releven.',
    'ama:normal Son preguntas muy difíciles de contestar',
    'ama:normal pero tú quédate aquí tranquilo y callado y presta atento oído a lo que diga el diablo cuando yo le arranque los tres cabellos de oro.',

    'jump Escena5',
  ],
});
