import * as slip from "slip";

let encodeOptions: slip.EncodeOptions = {
    bufferPadding: 4,
    offset: 1,
    byteLength: 2,
};

let decodeOptions: slip.DecodeOptions = {
    bufferSize: 2048,
    maxMessageSize: 4096,
    onMessage: (_msg: Uint8Array): void => {},
    onError: (_msgBuffer: Uint8Array, _errorMsg: string): void => {},
};

// @ts-expect-error
slip.encode();
slip.encode([1, 2]); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
slip.encode(new ArrayBuffer(4)); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>
slip.encode(new Uint8Array([1, 2]), encodeOptions); // $ExpectType Uint8Array || Uint8Array<ArrayBuffer>

new slip.Decoder(); // $ExpectType Decoder
new slip.Decoder(decodeOptions); // $ExpectType Decoder

// @ts-expect-error
(new slip.Decoder()).decode();
(new slip.Decoder()).decode([1, 2]); // $ExpectType void
(new slip.Decoder()).decode(new ArrayBuffer(4)); // $ExpectType void
(new slip.Decoder()).decode(new Uint8Array([1, 2])); // $ExpectType void

slip.END; // $ExpectType number
slip.ESC; // $ExpectType number
slip.ESC_END; // $ExpectType number
slip.ESC_ESC; // $ExpectType number
