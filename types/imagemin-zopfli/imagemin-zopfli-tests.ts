import imagemin from 'imagemin';
import imageminZopfli = require('imagemin-zopfli');

imagemin(['*.png'], {
    plugins: [
        imageminZopfli(),
        imageminZopfli({}),
        imageminZopfli({
            '8bit': true,
            transparent: true,
            iterations: 256,
            more: true,
        }),
    ],
});

imageminZopfli(); // $ExpectType Plugin
