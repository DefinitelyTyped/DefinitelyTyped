import imagemin = require('imagemin');
import imageminPngquant = require('imagemin-pngquant');

imagemin(['*.png'], {
    plugins: [
        imageminPngquant(),
        imageminPngquant({
            speed: 11,
            strip: true,
            quality: [0.4, 0.5],
            dithering: 0,
            posterize: 1,
            verbose: true
        })
    ]
});
