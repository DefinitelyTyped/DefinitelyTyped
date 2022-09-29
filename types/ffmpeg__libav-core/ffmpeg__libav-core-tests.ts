import createLibavCore = require('@ffmpeg/libav-core');

(async () => {
    // $ExpectType LibavCore
    const libavCore = await createLibavCore();

    // $ExpectType number
    libavCore.NULL;
})();
