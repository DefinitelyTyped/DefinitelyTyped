// Type definitions for pick-deep 1.0
// Project: https://github.com/strikeentco/pick-deep#readme
// Definitions by: Elliott Campbell <https://github.com/ElliottCampbellJHA>
//                 Eric Heikes <https://github.com/eheikes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function pick(obj: object, paths: string | ReadonlyArray<string | ReadonlyArray<string>>, separator?: string): object;
export = pick;
