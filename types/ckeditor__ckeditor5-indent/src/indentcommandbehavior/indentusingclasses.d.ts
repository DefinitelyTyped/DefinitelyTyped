import { IndentBehavior } from '../indentblockcommand';

export default class IndentUsingClasses implements IndentBehavior {
    readonly isForward: boolean;
    readonly classes: string[];
    constructor(config: { direction: 'forward' | 'backward'; classes: string[] });
    checkEnabled(indentAttributeValue: string): boolean;
    getNextIndent(indentAttributeValue: string): string | undefined;
}
