// Type definitions for keymirror 0.1.1
// Project: https://github.com/STRML/keyMirror
// Definitions by: Johannes Fahrenkrug <https://github.com/jfahrenkrug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare function KeyMirror<T>(obj: T): {[K in keyof T]: K};
export = KeyMirror;
