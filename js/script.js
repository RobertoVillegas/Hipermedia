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


});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {});

// Define the music used in the game.
monogatari.assets('music', {
  'mainTheme': 'alexander-nakarada-medieval-loop-one.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {});

// Define the sounds used in the game.
monogatari.assets('sounds', {

  'riverFlow': 'river.mp3',
  'babyLaughing': 'babyLaughing.mp3'
});

// Define the videos used in the game.
monogatari.assets('videos', {});

// Define the images used in the game.
monogatari.assets('images', {
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
  'back': 'back1.jpg',
});

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
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },
  c: {
    name: 'Campesinos',
    color: '#9FBD6E',
    directory: 'peasants',
    sprites: {
      normal: 'normal.jpg',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  p: {
    name: 'Padres',
    color: '#9FBD6E',
    directory: 'padres',
    sprites: {
      normal: 'padres.png',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.png',

    },
    default_expression: 'normal'
  },

  m: {
    name: 'Molineros',
    color: '#9FBD6E',
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


});

monogatari.script({
  // The game starts here.




  Escena1: [
    'play music mainTheme with loop with volume 50',
    'show scene #191A21 with fadeIn',

    //'jump Escena2',
    //'jump Escena4',


    'centered Érase una vez una mujer muy pobre que dio a luz un niño.',
    'centered Como el pequeño vino al mundo envuelto en la tela de la suerte, predijéronle que al cumplir los catorce años se casaría con la hija del Rey.',
    'centered Ocurrió que unos días después el Rey pasó por el pueblo,',
    'show background #343746 with fadeIn',
    'show image 1pueblo.png center with fadeIn',


    'Sin darse a conocer, y al preguntar qué novedades había, le respondieron:',

    'c:normal Uno de estos días ha nacido un niño con una tela de la suerte. A quien esto sucede, la fortuna lo protege.',
    'c:normal También le han pronosticado que a los catorce años se casará con la hija del Rey.',

    'El Rey, que era hombre de corazón duro, se irritó al oír aquella profecía,',
    // 'show background #000000 with fadeIn',
    'show image 1padres.png center with fadeIn',
    'Y, yendo a encontrar a los padres, les dijo con tono muy amable:',

    'r:normal Vosotros sois muy pobres; dejadme, pues, a vuestro hijo, que yo lo cuidaré.',
    'Al principio, el matrimonio se negaba,',
    'show image 1padresoro.png with fadeIn',
    'pero al ofrecerles el forastero un buen bolso de oro, pensaron:',
    'p:normal Ha nacido con buena estrella; será, pues, por su bien',
    'y, al fin, aceptaron y le entregaron el niño.',

    'play sound riverFlow with fade 15 with loop with volume 25',

    'El Rey lo metió en una cajita y prosiguió con él su camino, hasta que llegó al borde de un profundo río.',
    'Arrojó al agua la caja, y pensó:',
    'r:normal Así he librado a mi hija de un pretendiente bien inesperado.',
    'Pero la caja, en lugar de irse al fondo, se puso a flotar como un barquito, sin que entrara en ella ni una gota de agua.',
    'Y así continuó, corriente abajo, hasta cosa de dos millas de la capital del reino, donde quedó detenida en la presa de un molino.',

    'hide image 1padresoro.png with fadeOut',
    'hide image 1padres.png with fadeOut',
    'hide image 1pueblo.png with fadeOut',
    'show image 1bebecaja.png center with fadeIn',

    'Uno de los mozos, que por fortuna se encontraba presente y la vio, sacó la caja con un gancho, creyendo encontrar en ella algún tesoro.',


    'play sound babyLaughing with volume 40',
    'Al abrirla ofreciéndose a su vista un hermoso chiquillo, alegre y vivaracho. Llevándolo el mozo al molinero Y su mujer, que, como no tenían hijos, exclamaron:',
    'stop sound riverFlow with fade 12',
    'm:normal ¡Es Dios que nos lo envía!',
    'hide image 1bebecaja.png with fadeOut',
    'show background #191A21 with fadeIn',
    'centered Y cuidaron con todo cariño al niño abandonado, el cual creció en edad, salud y buenas cualidades.',
    'jump Escena2',


  ]
});
