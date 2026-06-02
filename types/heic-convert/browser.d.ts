interface ConversionOptions {
    /**
     * the HEIC file buffer
     */
    buffer: NodeJS.NonSharedUint8Array;
    /**
     * output format
     */
    format: "JPEG" | "PNG";
    /**
     * the JPEG compression quality, between 0 and 1
     * @default 0.92
     */
    quality?: number;
}

interface Convertible {
    convert(): Promise<NodeJS.NonSharedUint8Array>;
}

/** @async */
declare function convert(image: ConversionOptions): Promise<NodeJS.NonSharedUint8Array>;
declare namespace convert {
    /** @async */
    function all(image: ConversionOptions): Promise<Convertible[]>;
}

export = convert;
