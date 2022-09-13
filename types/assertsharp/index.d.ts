// Type definitions for assertsharp
// Project: https://www.npmjs.com/package/assertsharp
// Definitions by: Bruno Leonardo Michels <https://github.com/brunolm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Assert {
    static AreEqual<T>(expected: T, actual: T, message?: string): void;
    static AreNotEqual<T>(notExpected: T, actual: T, message?: string): void;
    static AreNotSame<T>(notExpected: T, actual: T, message?: string): void;
    static AreSequenceEqual<T>(expected: T[], actual: T[], equals?: (x: any, y: any) => boolean, message?: string): void;
    static Fail(message?: string): void;
    static IsFalse(actual: boolean, message?: string): void;
    static IsInstanceOfType(actual: any, expectedType: Function, message?: string): void;
    static IsNotInstanceOfType(actual: any, wrongType: Function, message?: string): void;
    static IsNotNull(actual: any, message?: string): void;
    static IsNull(actual: any, message?: string): void;
    static IsTrue(actual: boolean, message?: string): void;
    static Throws(fn: () => void, message?: string): void;
}
