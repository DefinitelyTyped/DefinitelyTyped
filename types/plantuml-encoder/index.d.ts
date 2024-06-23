/// <reference types="node" />

declare namespace PlantUmlEncoder {
    /**
     * Union type for possible typed arrays.
     */
    type TypedArray =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | BigInt64Array
        | BigUint64Array;
}

/**
 * Wrapper object for the encode and decode functions.
 */
declare const PlantUmlEncoder: {
    /**
     * Encodes PlantUML code.
     * @param puml The PlantUML code that should be encoded.
     * @returns The encoded PlantUML code.
     */
    encode: (puml: string | Buffer | PlantUmlEncoder.TypedArray | DataView | ArrayBuffer) => string;

    /**
     * Decodes encoded PlantUML code.
     * @param encodedPuml The encoded PlantUML code that should be decoded.
     * @returns The decoded PlantUML code.
     */
    decode: (encodedPuml: string) => string;
};

export = PlantUmlEncoder;
