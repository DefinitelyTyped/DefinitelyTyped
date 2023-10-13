import Interval from "../misc/Interval";
import Token from "../Token";
import ParseTree from "./ParseTree";
import ParseTreeVisitor from "./ParseTreeVisitor";

export default class TerminalNode implements ParseTree {
    parentCtx: ParseTree;
    symbol: Token;

    constructor(symbol: Token);

    getChild(i: number): null;

    getSymbol(): Token;

    getParent(): ParseTree;

    getPayload(): Token;

    getSourceInterval(): Interval;

    getChildCount(): number;

    accept<T extends ParseTreeVisitor>(visitor: T): T;

    getText(): string;

    toString(): string;
}
