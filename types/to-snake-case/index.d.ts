// Type definitions for to-snake-case 1.0
// Project: https://github.com/ianstormtaylor/to-snake-case
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Courtesy of @mmkal
// https://github.com/microsoft/TypeScript/pull/40336#issuecomment-686541786
type UpperChar = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

type FromCamelCase<S extends string, Joiner extends string> = S extends `${infer Head}${UpperChar}${infer _Tail}`
    ? Head extends `${infer H}${UpperChar}${infer T}` // get rid of `Head`s that contain upper-case characters - we only want the shortest head up to the first upper-case char.
        ? never
        : S extends `${Head}${infer U}${infer Tail}`
            ? `${Head}${Head extends '' ? '' : Joiner}${lowercase U}${FromCamelCase<Tail, Joiner>}`
            : never
    : S

type ToSnakeCase<S extends string> = FromCamelCase<S, '_'>

declare function toSnakeCase<T extends string>(str: T): ToSnakeCase<T>;
export = toSnakeCase;
