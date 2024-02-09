import { rgbaToACS, rgbaToZ64 } from 'zpl-image';

rgbaToACS(Buffer.from([]), 42); // $ExpectType AcsImage
rgbaToACS(Buffer.from([]), 42, { black: 42, rotate: 'N', notrim: true }); // $ExpectType AcsImage

rgbaToZ64(Buffer.from([]), 42); // $ExpectType ZplImage
rgbaToZ64(Buffer.from([]), 42, { black: 42, rotate: 'N', notrim: true }); // $ExpectType ZplImage
