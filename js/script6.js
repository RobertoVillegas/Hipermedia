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
monogatari.assets('images', {});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {});

// Define the Characters
monogatari.characters({
  y: {
    name: 'Yui',
    color: '#5bcaff',
  },
});

monogatari.script({
  // The game starts here.
  Escena6: [
    'show scene #191A21 with fadeIn',

    'centered Marchado que se hubo el diablo, la vieja sacó la hormiga del pliegue de su falda y devolvió al hijo de la suerte su figura humana.',
    'ama:normal Ahí tienes los tres cabellos de oro y supongo que oirías lo que el diablo respondió a tus tres preguntas.',
    'pr:normal Sí, lo he oído y no lo olvidaré',
    'ama:normal Ya tienes, pues, lo que querías, y puedes volverte.',

    'show background #343746 with fadeIn',
    'centered Dando las gracias a la vieja por su ayuda, salió el muchacho del infierno, muy contento del éxito de su empresa.',
    'Al llegar al lugar donde estaba el barquero, pidióle éste la prometida respuesta.',
    'pr:normal Primero pásame y te diré de qué manera puedes librarte.',
    'Cuando estuvieron en la orilla opuesta, le transmitió el consejo del diablo:',
    'pr:normal Al primero que venga a pedirte que lo pases, ponle el remo en la mano.',

    'Siguió su camino y llegó a la ciudad del árbol estéril, donde le salió al encuentro el guarda, a quien había prometido una respuesta.',
    'pr:normal Matad la rata que roe la raíz y volverá a dar manzanas de oro.',
    'Agradeceselo el guarda y le ofreció, en recompensa, dos asnos cargados de oro.',

    'Finalmente, se presentó a las puertas de la otra ciudad, aquella en que se había secado la fuente, y dijo al guarda lo que oyera al diablo:',
    'pr:normal Hay un sapo bajo una piedra de la fuente. Buscadlo y matadlo y volveréis a tener vino en abundancia.',
    'centered Dióle las gracias el guarda, y, con ellas, otros dos asnos cargados de oro.',



    'jump Escena7',



  ],
});
