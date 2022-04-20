import decode, { all } from "heic-decode";

// $ExpectType Promise<DecodedImage>
decode({buffer: new ArrayBuffer(10)});

// $ExpectType Promise<Decodable[]>
all({buffer: new ArrayBuffer(10)});
