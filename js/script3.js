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
  Escena3: [
    'show scene #191A21 with fadeIn',

    'centered Transcurrido algún tiempo, regresó el Rey al palacio y vio que se había cumplido el vaticinio: el niño de la suerte se había casado con su hija.',
    'r:normal ¿Cómo pudo ser eso?. En mi carta daba yo una orden muy distinta.',
    'Entonces la Reina le presentó el escrito, para que leyera él mismo lo que allí decía. Leyó el Rey la carta y se dio cuenta de que había sido cambiada por otra.',
    'Preguntó entonces al joven qué había sucedido con el mensaje que le confiara, y por qué lo había sustituido por otro.',
    'pr:normal No sé nada. Debieron cambiármela durante la noche, mientras dormía en la casa del bosque.',
    'r:angry Esto no puede quedar así.',
    'r:normal Quien quiera conseguir a mi hija debe ir antes al infierno y traerme tres pelos de oro de la cabeza del diablo. Si lo haces, conservarás a mi hija.',
    'Esperaba el Rey librarse de él para siempre con aquel encargo; pero el afortunado muchacho respondió:',
    'pr:normal Traeré los tres cabellos de oro. El diablo no me da miedo.',
    'centered Se despidió de su esposa y emprendió su peregrinación.',
    'jump Escena4',

  ],
});
