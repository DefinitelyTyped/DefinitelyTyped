// Type definitions for jasmine-given 2.6
// Project: https://github.com/searls/jasmine-given
// Definitions by: Shai Reznik <https://github.com/shairez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function Given(func: () => void): void;
declare function When(func: () => void): void;
declare function Then(func: () => void): void;
declare function And(func: () => void): void;
declare function Invariant(func: () => void): void;
