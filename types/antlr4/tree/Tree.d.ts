import {Interval} from '../IntervalSet';
import {Token} from '../Token';
import {ParserRuleContext} from '../ParserRuleContext';

export declare const INVALID_INTERVAL: Interval;

interface ParseTree {
}

export declare class RuleNode implements ParseTree {
}

export declare class TerminalNode implements ParseTree {
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


export declare class ErrorNode extends TerminalNode {
}

export declare class ParseTreeVisitor {
    visit(ctx: ParserRuleContext): any;

    visitChildren(ctx: ParserRuleContext): any;

    visitTerminal(node: TerminalNode): any;

    visitErrorNode(node: ErrorNode): any;
}


export declare interface ParseTreeListener {
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}

export declare class TerminalNodeImpl extends TerminalNode {

}

export declare class ErrorNodeImpl extends TerminalNode {
    constructor(token: Token);

    isErrorNode(): boolean;

    accept(visitor: ParseTreeVisitor): any;
}

export declare class ParseTreeWalker {
    static readonly DEFAULT: ParseTreeWalker;

    walk(listener: ParseTreeListener, rule: any): void;

    enterRule(listener: ParseTreeListener, rule: any): void;

    exitRule(listener: ParseTreeListener, rule: any): void;


}
