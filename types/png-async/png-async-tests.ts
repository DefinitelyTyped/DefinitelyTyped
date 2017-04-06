
import fs = require('fs');
import png = require('png-async');

var devnull = process.platform === 'win32' ? 'nul' : '/dev/null';

// stream test
var img = new png.Image({
    width: 1,
    height: 1,
    fill: true
})
    .pack()
    .pipe(png.createImage({
        deflateStrategy: png.EDeflateStrategy.FIXED,
        filterType: png.EFilterType.Auto
    })
        .on('parsed', function () {

            if (this.data[0] !== 0) {
                throw new Error('invalid data');
            }

            this.data[0] = 255;
            this.data[3] = 255;

            this.pack().pipe(fs.createWriteStream(devnull)).on('finish', () => {
                console.log('done');
            });
        })
    );
