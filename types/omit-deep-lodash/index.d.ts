// Type definitions for omit-deep-lodash 1.1
// Project: https://github.com/odynvolk/omit-deep-lodash
// Definitions by: Daniel Chong <https://github.com/dZefa>
//                 Bartosz Kopciuch <https://github.com/ideffix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function omitDeep(input: object, ...props: string[]): object;
declare function omitDeep(input: object, props: string[]): object;

export = omitDeep;
