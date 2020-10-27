// Type definitions for linebreak 1.0
// Project: https://github.com/devongovett/linebreaker
// Definitions by: Soheil Rashidi <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'linebreak' {
    class Break {
        position: number;
        required: boolean;
    }

    class LineBreaker {
        string: string;
        pos: number;
        lastPos: number;
        curClass: number;
        nextClass: number;

        constructor(string: string);

        nextCodePoint(): number;
        nextCharClass(): number;
        nextBreak(): Break;
    }

    export = LineBreaker;
}
