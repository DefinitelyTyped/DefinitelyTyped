// Type definitions for react-native-uuid-generator 4.0
// Project: https://github.com/Traviskn/react-native-uuid-generator#readme
// Definitions by: burtek <https://github.com/burtek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace UUIDGenerator {
    function getRandomUUID(): Promise<string>;
    function getRandomUUID(callback: (uuid: string) => void): void;
}

export default UUIDGenerator;
