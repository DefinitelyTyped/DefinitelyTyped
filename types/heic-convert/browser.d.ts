interface ConversionOptions {
    /**
     * the HEIC file buffer
     */
    buffer: Uint8Array;
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
    convert(): Promise<Uint8Array>;
}

/** @async */
declare function convert(image: ConversionOptions): Promise<Uint8Array>;
declare namespace convert {
    /** @async */
    function all(image: ConversionOptions): Promise<Convertible[]>;
}

export = convert;
