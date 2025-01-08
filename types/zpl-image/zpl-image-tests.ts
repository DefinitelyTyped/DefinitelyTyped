import zplImage = require("zpl-image");

zplImage.rgbaToACS(Buffer.from([]), 42); // $ExpectType AcsImage
zplImage.rgbaToACS(Buffer.from([]), 42, { black: 42, rotate: "N", notrim: true }); // $ExpectType AcsImage
zplImage.rgbaToACS(Buffer.from([]), 42, {}); // $ExpectType AcsImage
zplImage.rgbaToACS(Buffer.from([]), 42, { black: undefined, rotate: undefined, notrim: undefined }); // $ExpectType AcsImage

zplImage.rgbaToZ64(Buffer.from([]), 42); // $ExpectType ZplImage
zplImage.rgbaToZ64(Buffer.from([]), 42, { black: 42, rotate: "N", notrim: true }); // $ExpectType ZplImage
