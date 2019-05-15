import imagemin = require('imagemin');
import imageminJpegtran = require('imagemin-jpegtran');

imagemin(['*.jpg'], {
    plugins: [
        imageminJpegtran(),
        imageminJpegtran({ progressive: true })
    ]
});
