import imagemin = require('imagemin');
import imageminUpng = require('imagemin-upng');
import fs = require('fs');

const buffer = fs.readFileSync('some-png.png');

imagemin(['images/*.png'], {
    destination: 'build/images',
    plugins: [
        imageminUpng(),
        imageminUpng({}),
        imageminUpng({
            cnum: 128,
        }),
    ],
}).then(() => {
    // done
});

(async () => {
    const data = await imageminUpng({
        cnum: 128,
    })(buffer);
})();
