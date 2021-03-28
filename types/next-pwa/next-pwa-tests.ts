import withPwa = require('next-pwa');

withPwa({
    pwa: {
        dest: 'public',
        swSrc: 'service-worker.js'
    }
});

withPwa({
    pwa: {
        dest: 'public'
    }
});
