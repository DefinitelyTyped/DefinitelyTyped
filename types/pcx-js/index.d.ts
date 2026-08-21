// Type definitions for pcx-js 1.1.0
// Project: https://github.com/warpdesign/pcx-js
export = PCX;

export as namespace PCX;

declare class PCX {
    constructor();

    constructor(buffer: ArrayBuffer);

    decode(): PCX.DecodeType;

    _readLEWord(offset: number): number;

    isPCXFile(): boolean;

    readHeader(): string | object;

    _isRLE(offset: number): boolean;

    _lengthRLE(offset: number): number;

    getPalette(): void;

    setColorFromPalette(pos: number, index: number): void;

    decode4bpp(): void;

    decode8bpp(ctx?: any): void;
}

declare namespace PCX {
    interface Header {
        version: number;
        bpp: number;
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        hdpi: number;
        vdpi: number;
        palette: null | Uint8Array;
        bitplanes: number;
    }

    interface DecodeType {
        pixelArray: Uint8ClampedArray;
        palette: Uint8Array;
        width: number;
        height: number;
        header: Header;
    }
}
