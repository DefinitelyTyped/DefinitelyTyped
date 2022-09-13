import imagemin from 'imagemin';
import imageminOptipng = require('imagemin-optipng');

imagemin(['*.png'], {
    plugins: [
        imageminOptipng(),
        imageminOptipng({ optimizationLevel: 2 })
    ]
});
