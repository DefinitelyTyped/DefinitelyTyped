import imagemin = require('imagemin');
import imageminMozjpeg = require('imagemin-mozjpeg');

imagemin([ '*.jpg' ]);
/* Comment out since imagemin 8 PR is not yet merged
imagemin([ '*.jpg' ], {
    destination: 'something',
    plugins: [
        imageminMozjpeg(),
        imageminMozjpeg({
            quality: 10,
            progressive: true,
            targa: false,
            revert: false,
            fastCrush: true,
            dcScanOpt: 1,
            trellis: true,
            trellisDC: true,
            tune: 'hvs-psnr',
            overshoot: true,
            arithmetic: true,
            dct: 'int',
            quantBaseline: false,
            quantTable: 1,
            smooth: 5,
            maxMemory: 1024,
            sample: [ '2x1', '3x2' ],
        }),
    ],
});
*/
