import imagemin = require('imagemin');
import imageminSvgo = require('imagemin-svgo');

imagemin(['*.svg'], {
    plugins: [
        imageminSvgo(),
        imageminSvgo({}),
        imageminSvgo({
            floatPrecision: 2,
            plugins: [
                {
                    removeViewBox: false,
                },
            ],
        }),
    ],
});
