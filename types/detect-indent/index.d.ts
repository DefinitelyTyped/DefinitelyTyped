// Type definitions for detect-indent 5.0
// Project: https://github.com/sindresorhus/detect-indent
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = detectIndent;

declare function detectIndent(str: string): detectIndent.IndentInfo;

declare namespace detectIndent {
    interface IndentInfo {
        amount: number;
        type: 'tab' | 'space' | null;
        indent: string;
    }
}
