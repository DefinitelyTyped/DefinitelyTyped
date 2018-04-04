// Type definitions for jasmine-given 2.6
// Project: https://github.com/searls/jasmine-given
// Definitions by: Shai Reznik <https://github.com/shairez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function Given(func: (done?: () => void) => void): void;
declare function When(func: (done?: () => void) => void): void;
declare function Then(func: (done?: () => void) => void): void;
declare function Then(label: string, func: (done?: () => void) => void): void;
declare function And(func: (done?: () => void) => void): void;
declare function Invariant(func: (done?: () => void) => void): void;
