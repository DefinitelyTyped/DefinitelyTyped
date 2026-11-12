import decode = require("heic-decode");
const { all } = decode;

// $ExpectType Promise<DecodedImage>
decode({ buffer: new Uint8Array(10) });

decode({ buffer: new Uint8Array(10) }).then((image) => {
    // $ExpectType number
    image.width;
    // $ExpectType number
    image.height;
    const data: Uint8ClampedArray = image.data;
    data;
});

// $ExpectType Promise<DecodableImages>
all({ buffer: new Uint8Array(10) });

all({ buffer: new Uint8Array(10) }).then((images) => {
    // $ExpectType number
    images[0].width;
    // $ExpectType number
    images[0].height;
    images[0].decode().then((image) => {
        const data: Uint8ClampedArray = image.data;
        data;
    });
    images.dispose();
});
