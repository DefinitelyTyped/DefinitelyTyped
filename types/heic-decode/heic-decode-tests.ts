import decode = require('heic-decode');
const { all } = decode;

// $ExpectType Promise<DecodedImage>
decode({ buffer: new ArrayBuffer(10) });

// $ExpectType Promise<Decodable[]>
all({ buffer: new ArrayBuffer(10) });
