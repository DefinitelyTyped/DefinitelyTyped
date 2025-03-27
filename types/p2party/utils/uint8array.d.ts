/**
 * Turns an array of Uint8Arrays into one Uint8Array.
 */
export declare const concatUint8Arrays: (arrays: Uint8Array[]) => Promise<Uint8Array>;
/**
 * Compares two Uint8Arrays.
 */
export declare const uint8ArraysAreEqual: (array1: Uint8Array, array2: Uint8Array) => Promise<boolean>;
/**
 * Converts Uint8Array to hex string.
 */
export declare const uint8ArrayToHex: (array: Uint8Array) => string;
/**
 * Converts hex string to Uint8Array.
 */
export declare const hexToUint8Array: (hexString: string) => Uint8Array<ArrayBuffer>;
/**
 * Converts a string or a File into a Uint8Array.
 */
export declare const serializer: (data: string | File) => Promise<Uint8Array>;
//# sourceMappingURL=uint8array.d.ts.map