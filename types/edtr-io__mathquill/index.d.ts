// Type definitions for @edtr-io/mathquill 0.11
// Project: https://github.com/edtr-io/mathquill#readme
// Definitions by: Marco Gonzalez <https://github.com/magonzalez9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface MathField {
    focus(): MQ;
    blur(): MQ;
    write(latex: string): MQ;
    cmd(latex: string): MQ;
    select(): MQ;
    clearSelection(): MQ;
    moveToLeftEnd(): MQ;
    moveToRightEnd(): MQ;
    moveToDirEnd(direction: number): MQ;
    keystroke(keys: string): MQ;
    typedText(text: string): MQ;
    config(config: Config): MQ;
}

export interface MQ extends MathField {
    L: number;
    R: number;
    revert(): MQ;
    reflow(): MQ;
    el(): HTMLElement;
    latex(): string;
    latex(latex: string): MQ;
}

export interface Config {
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: string;
    restrictMismatchedBrackets?: boolean;
    sumStartsWithNEquals?: boolean;
    supSubsRequireOperand?: boolean;
    charsThatBreakOutOfSupSub?: string;
    autoSubscriptNumerals?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
    maxDepth?: number;
    substituteTextarea?(): HTMLTextAreaElement;
    handlers?: {
        enter?(mathField: MQ): any;
        edit?(mathField: MQ): any;
        upOutOf?(mathField: MQ): any;
        moveOutOf?(direction: number, mathField: MQ): any;
    };
}
