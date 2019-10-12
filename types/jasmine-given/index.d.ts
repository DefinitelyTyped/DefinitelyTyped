// Type definitions for jasmine-given 2.6
// Project: https://github.com/searls/jasmine-given
// Definitions by: Shai Reznik <https://github.com/shairez>
//                 Dmitry Efimenko <https://github.com/DmitryEfimenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/** Action method that should be called when the async work is complete */
interface DoneFn {
  (): void;

  /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
  fail: (message?: Error | string) => void;
}

declare function Given(func: (done: DoneFn) => void): void;
declare function When(func: (done: DoneFn) => void): void;
declare function Then(func: (done: DoneFn) => void): void;
declare function Then(label: string, func: (done: DoneFn) => void): void;
declare function And(func: (done: DoneFn) => void): void;
declare function Invariant(func: (done: DoneFn) => void): void;
