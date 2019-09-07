import imagemin = require('imagemin');
import imageminOptipng = require('imagemin-optipng');

imagemin([ '*.png' ], {
    destination: 'output',
    plugins: [ imageminOptipng(), imageminOptipng({ optimizationLevel: 2 }) ],
});
