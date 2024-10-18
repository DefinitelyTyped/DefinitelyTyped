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
    spaceBehavesLikeTab?: boolean | undefined;
    leftRightIntoCmdGoes?: string | undefined;
    restrictMismatchedBrackets?: boolean | undefined;
    sumStartsWithNEquals?: boolean | undefined;
    supSubsRequireOperand?: boolean | undefined;
    charsThatBreakOutOfSupSub?: string | undefined;
    autoSubscriptNumerals?: boolean | undefined;
    autoCommands?: string | undefined;
    autoOperatorNames?: string | undefined;
    maxDepth?: number | undefined;
    substituteTextarea?(): HTMLTextAreaElement;
    handlers?: {
        enter?(mathField: MQ): any;
        edit?(mathField: MQ): any;
        upOutOf?(mathField: MQ): any;
        moveOutOf?(direction: number, mathField: MQ): any;
    } | undefined;
}
