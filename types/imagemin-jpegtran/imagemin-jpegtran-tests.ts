import imagemin = require('imagemin');
import imageminJpegtran = require('imagemin-jpegtran');

imagemin(['*.png'], {
    plugins: [
        imageminJpegtran(),
        imageminJpegtran({ progressive: true })
    ]
});
