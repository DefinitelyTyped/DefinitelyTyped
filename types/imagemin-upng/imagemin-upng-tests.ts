import imagemin from 'imagemin';
import upng from 'imagemin-upng';
import fs = require('fs');

const buffer = fs.readFileSync('some-png.png');

imagemin(['images/*.png'], {
    destination: 'build/images',
    plugins: [
        upng(),
        upng({}),
        upng({
            cnum: 128,
        }),
    ],
}).then(() => {
    // done
});

(async () => {
    const data = await upng({
        cnum: 128,
    })(buffer);
})();
