type DXTFormat = "dxt1" | "dxt2" | "dxt3" | "dxt4" | "dxt5";

declare const decodeDXT:
    & {
        /**
         * Decode a DXT image to RGBA data.
         */
        (imageDataView: DataView, width: number, height: number, format?: DXTFormat): Uint8Array;
    }
    & {
        [F in DXTFormat]: F;
    };

export = decodeDXT;
