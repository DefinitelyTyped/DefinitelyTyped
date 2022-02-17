import { lax } from 'lax.js';

lax.init();
lax.addDriver('driverName', (frame: number) => frame);
lax.addElements('.selector', {
    driverName: {
        scale: [
            ['elInY', 'elOutY'],
            [0, 1],
        ],
    }
});
