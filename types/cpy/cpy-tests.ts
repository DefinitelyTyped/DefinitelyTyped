import cpy = require('cpy');

cpy(['src/*.png', '!src/goat.png'], 'dist').then(() => {
    console.log('files copied');
});

cpy('foo.js', 'destination', {
    rename: basename => `prefix-${basename}`
});
