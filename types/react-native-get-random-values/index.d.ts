export type TypedIntArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray;

declare global {
    interface crypto {
        getRandomValues<T extends TypedIntArray>(array: T): T | null;
    }
}
