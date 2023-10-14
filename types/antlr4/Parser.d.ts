import ATN from "./atn/ATN";
import CommonTokenFactory from "./CommonTokenFactory";
import CommonTokenStream from "./CommonTokenStream";
import ParserRuleContext from "./context/ParserRuleContext";
import ErrorStrategy from "./error/ErrorStrategy";
import RecognitionException from "./error/RecognitionException";
import Recognizer from "./Recognizer";
import Token from "./Token";
import ParseTreeListener from "./tree/ParseTreeListener";

export default class Parser extends Recognizer {
    /**
     * Specifies whether or not the parser should construct a parse tree during
     * the parsing process. The default value is `true`.
     */
    buildParseTrees: boolean;

    constructor(input: CommonTokenStream);

    _errHandler: ErrorStrategy;

    reset(): void;

    /**
     * Match current input symbol against `ttype`. If the symbol type
     * matches, {@link ErrorStrategy.reportMatch} and {@link consume} are
     * called to complete the match process.
     *
     * If the symbol type does not match, {@link ErrorStrategy.recoverInline}
     * is called on the current error strategy to attempt recovery.
     * If {@link getBuildParseTree} is `true` and the token index of the symbol returned by
     * {@link ANTLRErrorStrategy.recoverInline} is `-1`, the symbol is added to
     * the parse tree by calling {@link ParserRuleContext.addErrorNode}.
     *
     * @return the matched symbol
     * @throws {RecognitionException} if the current input symbol did not match
     * `ttype` and the error strategy could not recover from the mismatched symbol
     */
    match(): Token;

    /**
     * Match current input symbol as a wildcard. If the symbol type matches
     * (i.e. has a value greater than 0), {@link ErrorStrategy.reportMatch}
     * and {@link consume} are called to complete the match process.
     *
     * If the symbol type does not match, {@link ErrorStrategy.recoverInline}
     * is called on the current error strategy to attempt recovery.
     * If {@link getBuildParseTree} is `true` and the token index of the symbol
     * returned by {@link ErrorStrategy.recoverInline} is `-1`, the symbol is
     * added to the parse tree by calling {@link ParserRuleContext.addErrorNode}.
     *
     * @return the matched symbol
     * @throws {RecognitionException} if the current input symbol did not match
     * a wildcard and the error strategy could not recover from the mismatched
     * symbol
     */
    matchWildcard(): Token;

    getParseListeners(): ParseTreeListener[];

    /**
     * Registers `listener` to receive events during the parsing process.
     *
     * To support output-preserving grammar transformations (including but not
     * limited to left-recursion removal, automated left-factoring, and
     * optimized code generation), calls to listener methods during the parse
     * may differ substantially from calls made by {@link ParseTreeWalker.DEFAULT}
     * used after the parse is complete. In particular, rule entry and exit events
     * may occur in a different order during the parse than after the parser.
     * In addition, calls to certain rule entry methods may be omitted.
     *
     * With the following specific exceptions, calls to listener events are
     * _deterministic_, i.e. for identical input the calls to listener
     * methods will be the same.
     *
     * - Alterations to the grammar used to generate code may change the
     * behavior of the listener calls.
     * - Alterations to the command line options passed to ANTLR 4 when
     * generating the parser may change the behavior of the listener calls.
     * - Changing the version of the ANTLR Tool used to generate the parser
     * may change the behavior of the listener calls.
     *
     * @param listener the listener to add
     * @throws {string} if `listener` is `null`
     */
    addParseListener(listener: ParseTreeListener): void;

    /**
     * Remove `listener` from the list of parse listeners.
     *
     * If `listener` is `null` or has not been added as a parse
     * listener, this method does nothing.
     *
     * @param listener the listener to remove
     */
    removeParseListener(listener: ParseTreeListener): void;

    removeParseListeners(): void;

    /**
     * Notify any parse listeners of an enter rule event.
     */
    triggerEnterRuleEvent(): void;

    /**
     * Notify any parse listeners of an exit rule event.
     * @see addParseListener
     */
    triggerExitRuleEvent(): void;

    getTokenFactory(): CommonTokenFactory;

    /**
     * Tell our token source and error strategy about a new way to create tokens.
     */
    setTokenFactory(factory: CommonTokenFactory): void;

    /**
     * The ATN with bypass alternatives is expensive to create so we create it lazily.
     */
    getATNWithBypassAlts(): ATN;

    /**
     * Calls getTokenStream
     */
    getInputStream(): CommonTokenStream;

    /**
     * Calls setTokenStream
     */
    setInputStream(input: CommonTokenStream): void;

    getTokenStream(): CommonTokenStream;

    /**
     * Set the token stream and reset the parser.
     */
    setTokenStream(stream: CommonTokenStream): void;

    /**
     * Match needs to return the current input symbol, which gets put
     * into the label for the associated token ref; e.g., x=ID.
     */
    getCurrentToken(): ReturnType<CommonTokenStream["LT"]>;

    notifyErrorListeners(msg: string, offendingToken: Token, err?: RecognitionException): void;

    /**
     * Consume and return the current symbol.
     *
     * E.g., given the following input with `A` being the current lookahead
     * symbol, this function moves the cursor to `B` and returns `A`.
     *
     * A B
     * ^
     *
     * If the parser is not in error recovery mode, the consumed symbol is added
     * to the parse tree using {@link ParserRuleContext.addChild(Token)}, and
     * {@link ParseTreeListener.visitTerminal} is called on any parse listeners.
     * If the parser _is_ in error recovery mode, the consumed symbol is
     * added to the parse tree using {@link ParserRuleContext.addErrorNode(Token)}, and
     * {@link ParseTreeListener.visitErrorNode} is called on any parse listeners.
     */
    consume(): Token;

    addContextToParseTree(): void;

    /**
     * Always called by generated parsers upon entry to a rule.
     * Access field {@link _ctx} get the current context.
     */
    enterRule(localCtx: ParserRuleContext, state: number, ruleIndex?: number): void;

    exitRule(): void;

    enterOuterAlt(): void;

    /**
     * Get the precedence level for the top-most precedence rule.
     *
     * @return The precedence level for the top-most precedence rule, or -1 if
     * the parser context is not nested within a precedence rule.
     */
    getPrecedence(): number;

    enterRecursionRule(
        localCtx: ParserRuleContext,
        state: number,
        ruleIndex: number | undefined,
        precedence: number,
    ): void;

    pushNewRecursionContext(localCtx: ParserRuleContext, state: number, ruleIndex?: number): void;

    unrollRecursionContexts(parentCtx: ParserRuleContext): void;

    getInvokingContext(ruleIndex: number): ParserRuleContext;

    inContext(context: ParserRuleContext): boolean;

    /**
     * Checks whether or not `symbol` can follow the current state in the
     * ATN. The behavior of this method is equivalent to the following, but is
     * implemented such that the complete context-sensitive follow set does not
     * need to be explicitly constructed.
     *
     * `return getExpectedTokens().contains(symbol);`
     *
     * @param symbol the symbol type to check
     * @return `true` if `symbol` can follow the current state in
     * the ATN, otherwise `false`.
     */
    isExpectedToken(symbol: Token): boolean;

    /**
     * Computes the set of input symbols which could follow the current parser
     * state and context, as given by {@link getState} and {@link getContext},
     * respectively.
     *
     * @see ATN.getExpectedTokens
     */
    getExpectedTokens(): Token[];

    getExpectedTokensWithinCurrentRule(): Token[];

    getRuleIndex(ruleName: string): number;

    /**
     * Return list of the rule names in your parser instance
     * leading up to a call to the current rule. You could override if
     * you want more details such as the file/line info of where
     * in the ATN a rule is invoked.
     *
     * this is very useful for error messages.
     */
    getRuleInvocationStack(p?: ParserRuleContext): string[];

    /**
     * For debugging and other purposes.
     */
    getDFAStrings(): string;

    /**
     * For debugging and other purposes.
     */
    dumpDFA(): void;

    getSourceName(): string;

    /**
     * During a parse is sometimes useful to listen in on the rule entry and exit
     * events as well as token matches. this is for quick and dirty debugging.
     */
    setTrace(trace: boolean): void;
}
