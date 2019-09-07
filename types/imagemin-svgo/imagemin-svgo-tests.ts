import imagemin = require('imagemin');
import imageminSvgo = require('imagemin-svgo');

imagemin([ '*.svg' ], {
    destination: 'output',
    plugins: [ imageminSvgo(), imageminSvgo({ floatPrecision: 2 }) ],
});
