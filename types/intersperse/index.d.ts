// Type definitions for intersperse 1.0
// Project: https://github.com/curvedmark/intersperse
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function intersperse<T, U>(items: T[], separator: U): Array<T | U>;

export = intersperse;
