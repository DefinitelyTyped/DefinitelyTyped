import createLibavCore from 'ffmpeg__libav-core';

(async () => {
    // $ExpectType LibavCore
    const libavCore = await createLibavCore();

    // $ExpectType number
    libavCore.NULL;
})();
