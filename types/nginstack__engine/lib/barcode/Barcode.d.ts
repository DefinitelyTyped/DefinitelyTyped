export = Barcode;
declare function Barcode(code: string, type: string): void;
declare class Barcode {
    constructor(code: string, type: string);
    code: string;
    type: string;
    height: number;
    angle: number;
    getJpegImage(): ArrayBuffer;
}
declare namespace Barcode {
    let CODE_EAN13: string;
    let CODE_2_5_INTERLEAVED: string;
    let CODE_128_A: string;
    let CODE_128_B: string;
    let CODE_128_C: string;
}
