import imagemin = require('imagemin');
import imageminJpegtran = require('imagemin-jpegtran');

imagemin([ '*.jpg' ], {
    destination: 'output',
    plugins: [ imageminJpegtran(), imageminJpegtran({ progressive: true }) ],
});
