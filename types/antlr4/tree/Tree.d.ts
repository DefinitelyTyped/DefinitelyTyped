import { Interval } from '../IntervalSet';
import { Token } from '../Token';
import { ParserRuleContext } from '../ParserRuleContext';

export const INVALID_INTERVAL: Interval;

export class ParseTree {
}

export class RuleNode extends ParseTree {
}

export class TerminalNode implements ParseTree {
    constructor(symbol: Token);

    getChild(i: number): any;

    getSymbol(): Token;

    getParent(): any;

    getPayload(): Token;

    getSourceInterval(): Interval;

    getChildCount(): number;

    accept(visitor: ParseTreeVisitor): any;

    getText(): string;

    toString(): string;

    readonly parentCtx: any;
    readonly symbol: Token;
}

export class ErrorNode extends TerminalNode {
}

export class ParseTreeVisitor {
    visit(ctx: ParserRuleContext): any;

    visitChildren(ctx: ParserRuleContext): any;

    visitTerminal(node: TerminalNode): any;

    visitErrorNode(node: ErrorNode): any;
}

export interface ParseTreeListener {
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}

export class TerminalNodeImpl extends TerminalNode {
}

export class ErrorNodeImpl extends TerminalNode {
    constructor(token: Token);

    isErrorNode(): boolean;

    accept(visitor: ParseTreeVisitor): any;
}

export class ParseTreeWalker {
    static readonly DEFAULT: ParseTreeWalker;

    walk(listener: ParseTreeListener, rule: any): void;

    enterRule(listener: ParseTreeListener, rule: any): void;

    exitRule(listener: ParseTreeListener, rule: any): void;
}
