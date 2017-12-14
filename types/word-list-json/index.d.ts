// Type definitions for word-list-json 0.2
// Project: https://github.com/sindresorhus/word-list
// Definitions by: Dovid Meiseles <https://github.com/dovidm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */

interface Lengths {
    [key: string]: number;
}

type words = string[];

export default interface Words extends words {
    lengths: Lengths;
}