import resize = require('gulp-image-resize');

resize();                       // $ExpectType Transform
resize(undefined);
resize("1");                  // $ExpectError

resize({                        // $ExpectType Transform
    width: 100,
    height: 100,
    crop: true,
    upscale: false
});

resize({
    widt: 5                     // $ExpectError
});

resize({
    width: undefined,
    height: undefined,
    upscale: undefined,
    crop: undefined,
    gravity: undefined,
    quality: undefined,
    format: undefined,
    filter: undefined,
    sharpen: undefined,
    samplingFactor: undefined,
    noProfile: undefined,
    interlace: undefined,
    imageMagick: undefined,
    background: undefined,
    flatten: undefined,
    percentage: undefined,
    cover: undefined
});

resize({ format: 'jpeg' });
resize({ width: 100 });
resize({ percentage: 50 });
