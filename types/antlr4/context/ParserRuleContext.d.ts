import RecognitionException from "../error/RecognitionException";
import Token from "../Token";
import ErrorNode from "../tree/ErrorNode";
import ParseTree from "../tree/ParseTree";
import ParseTreeListener from "../tree/ParseTreeListener";
import TerminalNode from "../tree/TerminalNode";
import RuleContext from "./RuleContext";

export default class ParserRuleContext extends RuleContext {
    static readonly EMPTY: ParserRuleContext;

    readonly start: Token;
    readonly stop: Token;
    readonly ruleIndex: number;
    readonly exception: RecognitionException;

    constructor(parent?: RuleContext, invokingState?: number);

    copyFrom(ctx: ParserRuleContext): void;

    enterRule(listener: ParseTreeListener): void;

    exitRule(listener: ParseTreeListener): void;

    addChild(child: ParserRuleContext): TerminalNode;

    removeLastChild(): void;

    addTokenNode(token: Token): Token;

    addErrorNode(badToken: Token): ErrorNode;

    getChild<T extends ParseTree>(i: number, type?: { new(...args: any[]): T }): T | null;

    getToken(ttype: number, i: number): Token;

    getTokens(ttype: number): Token[];

    getTypedRuleContext<T extends ParserRuleContext>(cxtType: { new(...args: any[]): T }, i: number): T;

    getTypedRuleContexts<T extends ParserRuleContext>(cxtType: { new(...args: any[]): T }): T[];
}
