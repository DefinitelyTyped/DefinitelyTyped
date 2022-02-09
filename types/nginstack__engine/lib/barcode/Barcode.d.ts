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
    const CODE_EAN13: string;
    const CODE_2_5_INTERLEAVED: string;
    const CODE_128_A: string;
    const CODE_128_B: string;
    const CODE_128_C: string;
}
