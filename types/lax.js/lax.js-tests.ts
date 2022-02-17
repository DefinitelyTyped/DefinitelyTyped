import { lax } from 'lax.js';

lax.addDriver('driverName', (frame: number) => frame);
lax.addElements('.selector', {
    driverName: {
        scale: [
            ['elInY', 'elOutY'],
            [0, 1],
        ],
    }
});
lax.removeElements('.selector');
