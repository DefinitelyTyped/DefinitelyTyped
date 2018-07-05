// Returns a hex code for an attractive color
randomColor();

// Returns an array of ten green colors
randomColor({
    count: 10,
    hue: 'green'
});

// Returns a hex code for a light blue
randomColor({
    luminosity: 'light',
    hue: 'blue'
});

// Returns a hex code for a 'truly random' color
randomColor({
    luminosity: 'random',
    hue: 'random'
});

// Returns a bright color in RGB
randomColor({
    luminosity: 'bright',
    format: 'rgb' // e.g. 'rgb(225,200,20)'
});

// Returns a dark RGB color with random alpha
randomColor({
    luminosity: 'dark',
    format: 'rgba' // e.g. 'rgba(9, 1, 107, 0.6482447960879654)'
});

// Returns a light HSL color with random alpha
randomColor({
    luminosity: 'light',
    format: 'hsla' // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
});