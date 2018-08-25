import imagemin = require('imagemin');
import imageminGifsicle = require('imagemin-gifsicle');

imagemin(['*.png'], {
    plugins: [
        imageminGifsicle(),
        imageminGifsicle({ colors: 255 })
    ]
});
