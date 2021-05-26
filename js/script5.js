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
  dia: {
    name: 'Diablo',
    color: '#FF7676',
    directory: 'diablo',
    sprites: {
      normal: 'diablo.png',
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
  Escena5: [
    'show scene #4A190C with fadeIn',

    'centered Al anochecer llegó el diablo a casa, y ya al entrar notó que el aire no era puro:',
    'dia:normal ¡Huelo, huelo a carne humana! -dijo-; aquí pasa algo extraño.',
    'Y registró todos los rincones, buscando y rebuscando, pero no encontró nada. El ama le increpó:',
    'ama:normal Yo venga barrer y arreglar; pero apenas llegas tú, lo revuelves todo. Siempre tienes la carne humana pegada en las narices. ¡Siéntate y cena, vamos!',
    'Comió y bebió, y, como estaba cansado, puso la cabeza en el regazo del ama, pidiéndole que lo despiojara un poco.',
    'A los pocos minutos dormía profundamente, resoplando y roncando.',
    'Entonces, la vieja le agarró un cabello de oro y, arrancándoselo, lo puso a un lado.',
    'dia:normal ¡Uy!',
    'dia:normal ¿qué estás haciendo?',
    'ama:normal He tenido un mal sueño y te he tirado de los pelos.',
    'dia:normal ¿Y qué has soñado? ',
    'ama:normal He soñado que una fuente de una plaza de la que manaba vino, se había secado y ni siquiera salía agua de ella.',
    'ama:normal ¿Quién tiene la culpa?',
    'dia:normal ¡Oh, si lo supiesen!.',
    'dia:normal Hay un sapo debajo de una piedra de la fuente; si lo matasen volvería a manar vino.',
    'La vieja se puso a despiojar al diablo, hasta que lo vio nuevamente dormido, y roncando de un modo que hacía vibrar los cristales de las ventanas.',
    'Arrancóle entonces el segundo cabello.',
    'dia:normal ¡Uy!, ¿qué haces?',
    'ama:normal No lo tomes a mal es que estaba soñando.',
    'dia:normal ¿Y qué has soñado ahora ?',
    'ama:normal He soñado que en un cierto reino crecía un manzano que antes producía manzanas de oro, y, en cambio, ahora ni hojas echa.',
    'ama:normal ¿A qué se deberá esto?',
    'dia:normal ¡Ah, si lo supiesen!.',
    'dia:normal En la raíz vive una rata que lo roe; si la matasen, el árbol volvería a dar manzanas de oro;',
    'dia:normal pero si no la matan, el árbol se secará del todo. Mas déjame tranquilo con tus sueños; si vuelves a molestarme te daré un sopapo.',
    'ama:normal La mujer lo tranquilizó y siguió despiojándolo, hasta que lo vio otra vez dormido y lo oyó roncar.Cogiéndole el tercer cabello, se lo arrancó de un tirón.',
    'El diablo se levantó de un salto, vociferando y dispuesto a arrearle a la vieja; pero ésta logró apaciguarlo por tercera vez, diciéndole:',
    'ama:normal ¿Y qué puedo hacerle, si tengo pesadillas?',
    'dia:normal ¿Qué has soñado, pues?',
    'ama:normal He visto un barquero que se quejaba de tener que estar siempre bogando de una a otra orilla, sin que nadie vaya a relevarlo.',
    'ama:normal ¿Quién tiene la culpa?',
    'dia:normal ¡Bah, el muy bobo!.',
    'dia:normal Si cuando le llegue alguien a pedirle que lo pase le pone el remo en la mano, el otro tendrá que bogar y él quedará libre.',

    'centered Teniendo ya el ama los tres cabellos de oro y habiéndole sonsacado la respuesta a las tres preguntas, dejó descansar en paz al viejo ogro, que no se despertó hasta la madrugada.',


    'jump Escena6',
  ],
});
