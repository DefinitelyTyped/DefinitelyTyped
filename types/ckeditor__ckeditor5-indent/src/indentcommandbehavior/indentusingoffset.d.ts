import { IndentBehavior } from '../indentblockcommand';

export default class IndentUsingOffset implements IndentBehavior {
    readonly isForward: boolean;
    readonly offset: number;
    unit: string;
    constructor(config: { direction: 'forward' | 'backward'; offset: number; unit: string });
    checkEnabled(indentAttributeValue: string): boolean;
    getNextIndent(indentAttributeValue: string): string | undefined;
}
