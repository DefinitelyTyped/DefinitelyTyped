// Type definitions for react-native-get-random-value 1.8
// Project: https://github.com/LinusU/react-native-get-random-values
// Definitions by: Fabio Nettis <https://github.com/fabio-nettis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
