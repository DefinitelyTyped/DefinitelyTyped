import imagemin from 'imagemin';
import imageminGifsicle = require('imagemin-gifsicle');

imagemin(['*.gif'], {
    plugins: [
        imageminGifsicle(),
        imageminGifsicle({}),
        imageminGifsicle({ colors: 255, interlaced: true, optimizationLevel: 2 }),
    ],
});
