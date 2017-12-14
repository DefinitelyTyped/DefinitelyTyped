// Type definitions for word-list-json 0.2
// Project: https://github.com/sindresorhus/word-list
// Definitions by: Dovid Meiseles <https://github.com/dovidm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */
interface Lengths {
    [key: string]: number;
}
export const words: string[];
export const lengths: Lengths;

export default interface Words {
    words: typeof words & typeof lengths;
}
