// Type definitions for react-native-base64 0.1
// Project: https://github.com/eranbo/react-native-base64#readme
// Definitions by: seongjoojin <https://github.com/seongjoojin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Base64 {
    encode: (input: string) => string;
    decode: (input: string) => string;
}

declare const base64: Base64;
export = base64;
