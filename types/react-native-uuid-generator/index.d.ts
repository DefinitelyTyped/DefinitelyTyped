// Type definitions for react-native-uuid-generator 4.0
// Project: https://github.com/Traviskn/react-native-uuid-generator#readme
// Definitions by: Bartosz Dotryw <https://github.com/burtek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class UUIDGenerator {
    static getRandomUUID(): Promise<string>;
    static getRandomUUID(callback: (uuid: string) => void): void;
}
