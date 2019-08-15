import { RuleContext } from './RuleContext';
import { Token } from './Token';
import { ErrorNode, ParseTreeListener } from './tree/Tree';
import { Interval } from './IntervalSet';
import { RecognitionException } from './error/Errors';

export class ParserRuleContext extends RuleContext {
    readonly start: Token;
    readonly stop: Token;
    readonly ruleIndex: number;
    readonly exception: RecognitionException;

    constructor(parent: any, invokingState: number);

    copyFrom(ctx: any): void;

    enterRule(listener: ParseTreeListener): void;

    exitRule(listener: ParseTreeListener): void;

    addChild(child: any): any;

    removeLastChild(): void;

    addTokenNode(token: Token): Token;

    addErrorNode(badToken: Token): ErrorNode;

    getChild(i: number, type?: any): any;

    getToken(ttype: number, i: number): Token;

    getTokens(ttype: number): Token[];

    getTypedRuleContext(cxtType: any, i: number): any;

    getTypedRuleContexts(cxtType: any): any[];

    getChildCount(): number;

    getSourceInterval(): Interval;

    static readonly EMPTY: ParserRuleContext;
}
