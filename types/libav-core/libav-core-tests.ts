import createLibavCore, { LibavCore, Pointer } from 'libav-core';

(async () => {
    // $ExpectType LibavCore
    const libavCore = await createLibavCore();

    // $ExpectType number
    libavCore.NULL;
})();
