import decode, {all} from "./";

// $ExpectType Promise<DecodedImage>
decode({buffer: new ArrayBuffer(10)});

// $ExpectType Promise<Array<Decodable>>
all({buffer: new ArrayBuffer(10)})