// Type definitions for react-mathquill 0.1
// Project: https://github.com/viktorstrate/react-mathquill#readme
// Definitions by: Marco Gonzalez <https://github.com/magonzalez9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5'

import { ComponentProps, ReactNode, Component } from 'react';

export interface MathField {
    focus(): MathQuill;
    blur(): MathQuill;
    write(latex: string): MathQuill;
    cmd(latex: string): MathQuill;
    select(): MathQuill;
    clearSelection(): MathQuill;
    moveToLeftEnd(): MathQuill;
    moveToRightEnd(): MathQuill;
    moveToDirEnd(direction: number): MathQuill;
    keystroke(keys: string): MathQuill;
    typedText(text: string): MathQuill;
    config(config: Config): MathQuill;
}

export interface MathQuill extends MathField {
    L: number;
    R: number;
    revert(): MathQuill;
    reflow(): MathQuill;
    el(): HTMLElement;
    latex(): string;
    latex(latex: string): MathQuill;
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
        enter?(mathField: MathQuill): any;
        edit?(mathField: MathQuill): any;
        upOutOf?(mathField: MathQuill): any;
        moveOutOf?(direction: number, mathField: MathQuill): any;
    };
}

export interface Props extends Omit<ComponentProps<'span'>, 'onChange'> {
    latex: string;
    config?: Config;
    onChange?(mathField: MathQuill): any;
    mathquillDidMount?(mathField: MathQuill): any;
}

export function addStyles(): any;

declare class Mathquill extends Component<Props> {}

export default Mathquill;
