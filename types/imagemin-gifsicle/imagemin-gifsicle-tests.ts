import imagemin = require('imagemin');
import imageminGifsicle = require('imagemin-gifsicle');

imagemin([ '*.gif' ], {
    destination: 'output',
    plugins: [ imageminGifsicle(), imageminGifsicle({ colors: 255 }) ],
});
