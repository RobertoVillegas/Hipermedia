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

  'rain': {
    'particles': {
      'number': {
        'value': 400,
        'density': {
          'enable': true,
          'value_area': 3000
        }
      },
      'color': {
        'value': '#e0e0e0'
      },
      'shape': {
        'type': 'line',
        'stroke': {
          'width': 3,
          'color': '#ffffff'
        },
        'polygon': {
          'nb_sides': 2
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.8,
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
          'enable': false,
          'speed': 5,
          'size_min': 0,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 500,
        'color': '#ffffff',
        'opacity': 0.8,
        'width': 2
      },
      'move': {
        'enable': true,
        'speed': 20,
        'direction': 'bottom',
        'random': false,
        'straight': true,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 0,
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
monogatari.assets('sounds', {
  'trueno': 'truenos.mp3',
  'lluvia': 'lluvia.mp3',
  'fogata': 'fogata.mp3'
});

// Define the videos used in the game.
monogatari.assets('videos', {});

// Define the images used in the game.
monogatari.assets('images', {});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {});

// Define the Characters
monogatari.characters({
  r: {
    name: 'Rey',
    color: '#FFE628',
    directory: 'rey',
    sprites: {
      normal: 'rey.png',
    },
    expressions: {
      angry: 'expressions/angry.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },
  m: {
    name: 'Molineros',
    color: '#EE9E64',
    directory: 'adoptivos',
    sprites: {
      normal: 'adoptivos.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  a: {
    name: 'Anciana',
    color: '#FFA6A6',
    directory: 'anciana',
    sprites: {
      normal: 'anciana.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  pr: {
    name: 'Muchacho',
    color: '#4E98AB',
    directory: 'protagonista',
    sprites: {
      normal: 'protagonista.png',
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
  Escena2: [
    'show scene #191A21 with fadeIn',
    'show particles rain',


    'play sound lluvia with loop',
    'play sound trueno with volume 50',
    'centered He aquí que un día el Rey, sorprendido por una tempestad, entró a guarecerse en el molino y preguntó a los molineros si aquel guapo muchacho era hijo suyo.',
    'hide particles rain',

    'show background #343746 with fadeIn',

    'show image 2molinosolo.png center with fadeIn',

    'm:normal No, es un niño expósito; hace catorce años que lo encontramos en una caja, en la presa del molino.',

    'Comprendió el Rey que no podía ser otro sino aquel niño de la suerte que había arrojado al río, y dijo.',

    'r:normal Buena gente, ¿dejaríais que el chico llevara una carta mía a la Señora Reina? Le daré en pago dos monedas de oro.',
    'm:normal ¡Como mande el Señor Rey!',
    'show image 2molino.png center with fadeIn',
    'stop sound lluvia with fade 12',

    'El Rey escribió entonces una carta a la Reina, en los siguientes términos:',
    'r:normal En cuanto se presente el muchacho con esta carta, lo mandarás matar y enterrar, y esta orden debe cumplirse antes de mi regreso.',

    'hide image 2molino.png with fadeOut',
    'hide image 2molinosolo.png with fadeOut',
    'Púsose el muchacho en camino con la carta, pero se extravió, y al anochecer llegó a un gran bosque.',
    'Vio una lucecita en la oscuridad y se dirigió allí, resultando ser una casita muy pequeña.',
    'show image 2GuaridaBandidos.png with fadeIn',
    'show image 2GuaridaP1.png with fadeIn',

    'play sound fogata',
    'Al entrar sólo había una anciana sentada junto al fuego, la cual se asustó al ver al mozo y le dijo:',

    'a:normal ¿De dónde vienes y adónde vas?',

    'pr:normal Vengo del molino y voy a llevar una carta a la Señora Reina. Pero como me extravié, me gustaría pasar aquí la noche.',

    'a:normal ¡Pobre chico!. Has venido a dar en una guarida de bandidos, y si vienen te matarán.',

    'pr:normal Venga quien venga, no tengo miedo. Estoy tan cansado que no puedo dar un paso más',
    'stop sound fogata with fade 5',


    'Y, tendiéndose sobre un banco, se quedó dormido en el acto.',
    'hide image 2GuaridaP1.png with fadeOut',
    'show image 2GuaridaP2.png with fadeIn',


    'A poco llegaron los bandidos y preguntaron, enfurecidos, quién era el forastero que allí dormía.',

    'a:normal  ¡Ay!, es un chiquillo inocente que se extravió en el bosque; lo he acogido por compasión. Parece que lleva una carta para la Reina.',
    'Los bandoleros abrieron el sobre y leyeron el contenido de la carta, es decir, la orden de que se diera muerte al mozo en cuanto llegara.',
    'A pesar de su endurecido corazón, los ladrones se apiadaron, y el capitán rompió la carta y la cambió por otra',
    'en la que ordenaba que al llegar el muchacho lo casasen con la hija del Rey.',
    'Dejándolo luego descansar tranquilamente en su banco hasta la mañana, y, cuando se despertó, le dieron la carta y le mostraron el camino.',
    'La Reina, al recibir y leer la misiva, se apresuró a cumplir lo que en ella se le mandaba: Organizó una boda magnífica,',
    'Y la princesa fue unida en matrimonio al favorito de la fortuna. Y como el muchacho era guapo y apuesto,',

    'hide image 2GuaridaP2.png with fadeOut',
    'show background #191A21 with fadeIn',

    'centered su esposa vivía feliz y satisfecha con él.',
    'jump Escena3',
  ],
});
