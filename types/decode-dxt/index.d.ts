// Type definitions for decode-dxt 1.0
// Project: https://github.com/kchapelier/decode-dxt
// Definitions by: Luke Horvat <https://github.com/lukehorvat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DXTFormat = 'dxt1' | 'dxt2' | 'dxt3' | 'dxt4' | 'dxt5';

declare const decodeDXT: {
    /**
     * Decode a DXT image to RGBA data.
     */
    (imageDataView: DataView, width: number, height: number, format?: DXTFormat): Uint8Array;
} & {
    [F in DXTFormat]: F;
};

export = decodeDXT;
