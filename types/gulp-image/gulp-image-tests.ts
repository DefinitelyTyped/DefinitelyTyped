import image = require('gulp-image');

// @ts-expect-error
image(false);

image();                        // $ExpectType Transform
image({});
image({
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    mozjpeg: true,
    guetzli: false,
    gifsicle: true,
    svgo: true,
    concurrent: 10,
    quiet: true // defaults to false
});
image({
    optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
    pngquant: ['--speed=1', '--force', 256],
    zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
    jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
    mozjpeg: ['-optimize', '-progressive'],
    guetzli: ['--quality', 85],
    gifsicle: ['--optimize'],
    svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
});
