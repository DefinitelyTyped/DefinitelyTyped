// Type definitions for subsume 1.0
// Project: https://github.com/sindresorhus/subsume#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Subsume;

declare class Subsume {
    static parse(text: string, id: string): Subsume.ParseResult;

    id: string;
    prefix: string;
    postfix: string;
    regex: RegExp;

    constructor(id?: string);
    compose(text: string): string;
    parse(text: string): Subsume.ParseResult;
}

declare namespace Subsume {
    interface ParseResult {
        data?: string;
        rest: string;
    }
}
