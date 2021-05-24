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
    'play music mainTheme with loop with volume 50',
    'show scene #191A21 with fadeIn',


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
    'show background #343746 with fadeIn',
    'show image pueblo.png center with fadeIn',


    'Sin darse a conocer, y al preguntar qué novedades había, le respondieron:',

    'c:normal Uno de estos días ha nacido un niño con una tela de la suerte. A quien esto sucede, la fortuna lo protege.',
    'c:normal También le han pronosticado que a los catorce años se casará con la hija del Rey.',

    'El Rey, que era hombre de corazón duro, se irritó al oír aquella profecía,',
    // 'show background #000000 with fadeIn',
    'show character p normal at right with fadeInUp',
    'Y, yendo a encontrar a los padres, les dijo con tono muy amable:',
    'show character r normal at left with fadeInUp',
    'r:normal Vosotros sois muy pobres; dejadme, pues, a vuestro hijo, que yo lo cuidaré.',
    'Al principio, el matrimonio se negaba,',
    'pero al ofrecerles el forastero un buen bolso de oro, pensaron:',
    'Ha nacido con buena estrella; será, pues, por su bien',
    'y, al fin, aceptaron y le entregaron el niño.',
    'hide character p with fadeOut',
    'hide character r with fadeOut',
    'El Rey lo metió en una cajita y prosiguió con él su camino, hasta que llegó al borde de un profundo río.',
    'Arrojó al agua la caja, y pensó:',
    'r:normal Así he librado a mi hija de un pretendiente bien inesperado.',
    'Pero la caja, en lugar de irse al fondo, se puso a flotar como un barquito, sin que entrara en ella ni una gota de agua.',
    'Y así continuó, corriente abajo, hasta cosa de dos millas de la capital del reino, donde quedó detenida en la presa de un molino.',
    'Uno de los mozos, que por fortuna se encontraba presente y la vio, sacó la caja con un gancho, creyendo encontrar en ella algún tesoro.',
    'Al abrirla ofreciéndose a su vista un hermoso chiquillo, alegre y vivaracho. Llevándolo el mozo al molinero Y su mujer, que, como no tenían hijos, exclamaron:',
    '¡Es Dios que nos lo envía!',
    'show background #191A21 with fadeIn',
    'centered Y cuidaron con todo cariño al niño abandonado, el cual creció en edad, salud y buenas cualidades.',
    'jump Escena2',




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
