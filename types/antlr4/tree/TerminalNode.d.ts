import ParseTree from './ParseTree';
import ParseTreeVisitor from './ParseTreeVisitor';
import Interval from '../misc/Interval';
import Token from '../Token';

export default class TerminalNode implements ParseTree {
    parentCtx: any;
    symbol: Token;

    constructor(symbol: Token);

    getChild(i: number): null;

    getSymbol(): Token;

    getParent(): ParseTree;

    getPayload(): Token;

    getSourceInterval(): Interval;

    getChildCount(): number;

    accept<T extends ParseTreeVisitor>(visitor: T): any; // TODO clarify

    getText(): string;

    toString(): string;
}
