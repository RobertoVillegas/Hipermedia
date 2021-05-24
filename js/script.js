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
monogatari.action('particles').particles({});

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
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
  'back': 'back1.jpg',
});

// Define the Characters
monogatari.characters({
  y: {
    name: 'Yui',
    color: '#5bcaff',
    sprites: {
      normal: 'ProtagonistaGlobo.png',
    },
  },
  r: {
    name: 'Rey',
    color: '#FFE628',
    directory: 'king',
    sprites: {
      normal: 'king1.jpg',
    },
    expressions: {
      angry: 'expressions/normal.png',
      normal: 'expressions/normal.jpg',

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
      angry: 'expressions/normal.jpg',
      normal: 'expressions/normal.jpg',

    },
    default_expression: 'normal'
  },

  p: {
    name: 'Padres',
    color: '#5bcaff',
    sprites: {
      normal: 'padres.jpg',
    },
  },



});

monogatari.script({
  // The game starts here.




  Escena1: [
    'show scene #000000 with fadeIn',


    // 'show notification Welcome',
    // {
    //   Input: {
    //     Text: 'What is your name?',
    //     Validation: function (input) {
    //       return input.trim().length > 0;
    //     },
    //     Save: function (input) {
    //       this.storage({
    //         player: {
    //           name: input,
    //         },
    //       });
    //       return true;
    //     },
    //     Revert: function () {
    //       this.storage({
    //         player: {
    //           name: '',
    //         },
    //       });
    //     },
    //     Warning: 'You must enter a name!',
    //   },
    // },
    // 'show character y normal at center with fadeInUp',
    // ' y Hi {{player.name}} Welcome to Monogatari!',
    'centered Érase una vez una mujer muy pobre que dio a luz un niño.',
    'centered Como el pequeño vino al mundo envuelto en la tela de la suerte, predijéronle que al cumplir los catorce años se casaría con la hija del Rey.',
    'centered Ocurrió que unos días después el Rey pasó por el pueblo,',
    'show background back with fadeIn',
    'Sin darse a conocer, y al preguntar qué novedades había, le respondieron:',
    'show character c normal at center with fadeInUp',
    'c:normal Uno de estos días ha nacido un niño con una tela de la suerte. A quien esto sucede, la fortuna lo protege.',
    'c:normal También le han pronosticado que a los catorce años se casará con la hija del Rey.',
    'hide character c with fadeOut',
    'El Rey, que era hombre de corazón duro, se irritó al oír aquella profecía,',
    // 'show background #000000 with fadeIn',
    'show character p normal at right with fadeInUp',
    'Y, yendo a encontrar a los padres, les dijo con tono muy amable:',
    'show character r normal at left with fadeInUp',
    'r:normal Vosotros sois muy pobres; dejadme, pues, a vuestro hijo, que yo lo cuidaré.',


    //   {
    //     Choice: {
    //       Dialog: 'y Have you already read some documentation?',
    //       Yes: {
    //         Text: 'Yes',
    //         Do: 'jump Escena2',
    //       },
    //       No: {
    //         Text: 'No',
    //         Do: 'jump Escena2',
    //       },
    //     },
    //   },
    // ],

    // Yes: [
    //   'y Thats awesome!',
    //   'y Then you are ready to go ahead and create an amazing Game!',
    //   'y I can’t wait to see what story you’ll tell!',
    //   'jump Escena2',
    // ],

    // No: [
    //   'y You can do it now.',

    //   'show message Help',

    //   'y Go ahead and create an amazing Game!',
    //   'y I can’t wait to see what story you’ll tell!',
    //   'jump Escena2',
    // ],
  ]
});
