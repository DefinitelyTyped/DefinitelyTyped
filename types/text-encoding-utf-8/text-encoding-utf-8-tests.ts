import { TextDecoder, TextEncoder } from "text-encoding-utf-8";

function test_encoder() {
    const text = "plain text";
    let uint8array: Uint8Array;

    // constructor
    uint8array = new TextEncoder().encode(text);
    uint8array = new TextEncoder('utf-8').encode(text);

    uint8array = TextEncoder().encode(text);
    uint8array = TextEncoder('utf-8').encode(text);

    // attributes
    const encoder = new TextEncoder();
    encoder.encoding = 'utf-8';
    const encoding: string = encoder.encoding;

    // methods
    encoder.encode();
    encoder.encode(text);
}

function test_decoder() {
    let text = "plain text";
    const uint8array: Uint8Array = TextEncoder().encode(text);
    const arrayBuffer: ArrayBuffer = uint8array.buffer;

    // constructor
    text = new TextDecoder().decode(uint8array);
    text = new TextDecoder('utf-8').decode(uint8array);

    text = TextDecoder().decode(uint8array);
    text = TextDecoder('utf-8').decode(uint8array);

    // attributes
    const decoder = new TextDecoder();

    decoder.encoding = 'utf-8';
    const encoding: string = decoder.encoding;

    decoder.fatal = true;
    const fatal: boolean = decoder.fatal;

    decoder.ignoreBOM = true;
    const ignoreBOM: boolean = decoder.ignoreBOM;

    // methods
    decoder.decode();
    decoder.decode(uint8array);
    decoder.decode(arrayBuffer);
}
