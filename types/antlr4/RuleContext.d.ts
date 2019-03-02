import { ParseTreeVisitor, RuleNode } from './tree/Tree';
import { Interval } from './IntervalSet';
import { ParserRuleContext } from './ParserRuleContext';

export class RuleContext extends RuleNode {
    readonly invokingState: number;
    readonly parentCtx: ParserRuleContext;

    constructor(parent: any, invokingState: number);

    depth(): number;

    isEmpty(): boolean;

    getSourceInterval(): Interval;

    getRuleContext(): RuleContext;

    getPayload(): RuleContext;

    getText(): string;

    getAltNumber(): number;

    setAltNumber(altNumber: number): void;

    getChild(i: number): any;

    getChildCount(): number;

    accept(visitor: ParseTreeVisitor): void;

    toStringTree(ruleNames: string[], recog: any): string;
}
