import imagemin = require('imagemin');
import imageminSvgo = require('imagemin-svgo');

imagemin(['*.svg'], {
    plugins: [
        imageminSvgo(),
        imageminSvgo({ floatPrecision: 2 })
    ]
});
