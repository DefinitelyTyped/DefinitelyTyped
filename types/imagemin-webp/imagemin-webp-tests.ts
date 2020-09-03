import imagemin = require('imagemin');
import imageminWebp = require('imagemin-webp');

imagemin(['*.webp'], {
    plugins: [
        imageminWebp(),
        imageminWebp({
            crop: {
                height: 20,
                width: 30,
                x: 10,
                y: 10,
            },
            preset: 'photo',
            metadata: 'all',
            lossless: true,
        }),
    ],
});
