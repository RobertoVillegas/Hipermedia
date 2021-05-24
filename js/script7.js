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
  Escena7: [
    'show scene #191A21 with fadeIn',
    'centered Al cabo, el afortunado mozo estuvo de regreso a palacio, junto a su esposa, que sintió una gran alegría al verlo de nuevo, y a la que contó sus aventuras.',
    'Entregó al Rey los tres cabellos de oro del diablo, y al reparar el monarca en los cuatro asnos con sus cargas de oro, díjole, muy contento:',
    'r:normal Ya que has cumplido todas las condiciones, puedes quedarte con mi hija.',
    'r:normal Y Pero, querido yerno, dime de dónde has sacado tanto oro. ¡Es un tesoro inmenso!',
    'pr:normal He cruzado un río y lo he cogido de la orilla opuesta, donde hay oro en vez de arena.',
    'r:normal ¿Y no podría yo ir a buscar un poco?',
    'pr:normal Todo el que queráis',
    'pr:normal En el río hay un barquero que os pasará, y en la otra margen podréis llenar los sacos.',
    'El avaro rey se puso en camino sin perder tiempo, y al llegar al río hizo seña al barquero de que lo pasara.',
    'El barquero le hizo montar en la barca, y, antes de llegar a la orilla opuesta. poniéndole en la mano la pértiga, saltó a tierra.',
    'centered Desde aquel día, el Rey tiene que estar bogando; es el castigo por sus pecados.',
    'centered Nadie ha ido a quitarle la pértiga de la mano',

    'jump Escena8',


  ],
});
