// Type definitions for heic-convert 1.2
// Project: https://github.com/catdad-experiments/heic-convert
// Definitions by: Tregan <https://github.com/treemmett>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ConversionOptions {
    /**
     * the HEIC file buffer
     */
    buffer: ArrayBufferLike;
    /**
     * output format
     */
    format: 'JPEG' | 'PNG';
    /**
     * the JPEG compression quality, between 0 and 1
     */
    quality?: number;
}

interface Convertible {
    convert(): Promise<ArrayBuffer>;
}

declare function convert(image: ConversionOptions): Promise<ArrayBuffer>;
declare namespace convert {
    function all(image: ConversionOptions): Promise<Convertible[]>;
}

export = convert;
