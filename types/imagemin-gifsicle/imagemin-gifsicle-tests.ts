import imagemin = require('imagemin');
import imageminGifsicle = require('imagemin-gifsicle');

imagemin(['*.gif'], {
    plugins: [
        imageminGifsicle(),
        imageminGifsicle({ colors: 255 })
    ]
});
