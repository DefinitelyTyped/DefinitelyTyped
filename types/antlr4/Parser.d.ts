import { CommonTokenStream } from './CommonTokenStream';
import { Recognizer } from './Recognizer';
import { Token } from './Token';
import { ParseTreeListener } from './tree/Tree';
import { Lexer } from './Lexer';
import { InputStream } from './InputStream';
import { ParserRuleContext } from './ParserRuleContext';
import { ErrorStrategy } from './error/ErrorStrategy';

export class Parser extends Recognizer {
    constructor(input: CommonTokenStream);

    buildParseTrees: boolean;

    _errHandler: ErrorStrategy;

    reset(): void;

    match(): Token;

    matchWildcard(): Token;

    getParseListeners(): ParseTreeListener[];

    addParseListener(lister: ParseTreeListener): void;

    removeParseListener(lister: ParseTreeListener): void;

    removeParseListeners(): void;

    triggerEnterRuleEvent(): void;

    triggerExitRuleEvent(): void;

    getTokenFactory(): any;

    setTokenFactory(factory: any): void;

    getATNWithBypassAlts(): any;

    compileParseTreePattern(pattern: any, patternRuleIndex: any, lexer: Lexer): any;

    getInputStream(): InputStream;

    getTokenStream(): any;

    setTokenStream(stream: any): any;

    getCurrentToken(): Token;

    notifyErrorListeners(msg: string, offendingToken: Token, err: any): void;

    consume(): any;

    addContextToParseTree(): any;

    enterRule(localCtx: ParserRuleContext, state: any, ruleIndex: number): void;

    exitRule(): void;

    enterOuterAlt(): void;

    getPrecedence(): any;

    enterRecursionRule(localCtx: ParserRuleContext, state: any, ruleIndex: any, precedence: any): void;

    pushNewRecursionContext(localCtx: ParserRuleContext, state: any, ruleIndex: any, precedence: any): void;

    unrollRecursionContexts(parentCtx: ParserRuleContext): void;

    getInvokingContext(ruleIndex: number): any;

    isExpectedToken(symbol: Token): boolean;

    getExpectedTokens(): Token[];

    getExpectedTokensWithinCurrentRule(): Token[];

    getRuleIndex(ruleName: string): number;

    getRuleInvocationStack(p: any): any;

    getDFAStrings(): any;

    dumpDFA(): void;

    getSourceName(): any;

    setTrace(trace: boolean): void;
}
