import lax from 'lax.js';

lax.init();
lax.addDriver('driverName', frame => frame);
lax.addElement('.selector', {
    driverName: {
        scale: [
            ['elInY', 'elOutY'],
            [0, 1],
        ],
    }
});