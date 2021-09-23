// Type definitions for react-native-base64 0.2
// Project: https://github.com/eranbo/react-native-base64#readme
// Definitions by: seongjoojin <https://github.com/seongjoojin>,
//                 markyao6275 <https://github.com/markyao6275>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Base64 {
    encode: (input: string) => string;
    decode: (input: string) => string;
    encodeFromByteArray: (byteArray: Uint8Array) => string;
}

declare const base64: Base64;
export = base64;
