import ATNSimulator from "./atn/ATNSimulator";
import ParserRuleContext from "./context/ParserRuleContext";
import ConsoleErrorListener from "./error/ConsoleErrorListener";
import ErrorListener from "./error/ErrorListener";
import ProxyErrorListener from "./error/ProxyErrorListener";
import RecognitionException from "./error/RecognitionException";
import Token from "./Token";

export default class Recognizer {
    checkVersion(toolVersion: number): void;

    addErrorListener(listener: ErrorListener): void;

    removeErrorListeners(): void;

    getLiteralNames(): Array<string | null>;

    getSymbolicNames(): Array<string | null>;

    getTokenNames(): Array<string | "<INVALID">;

    getTokenTypeMap(): Record<string, number>;

    /**
     * Get a map from rule names to rule indexes.
     * Used for XPath and tree pattern compilation.
     */
    getRuleIndexMap(): Record<string, number>;

    getTokenType(tokenName: string): number;

    getErrorHeader(e: RecognitionException): string;

    /**
     * @deprecated This method is not called by the ANTLR 4 Runtime. Specific
     * implementations of {@link ErrorStrategy} may provide a similar feature
     * when necessary. For example, see {@link DefaultErrorStrategy.getTokenErrorDisplay}.
     */
    getTokenErrorDisplay(t: Token): string;

    getErrorListenerDispatch(): ProxyErrorListener;

    /**
     * subclass needs to override these if there are sempreds or actions
     * that the ATN interp needs to execute
     */
    sempred(localCtx: ParserRuleContext, ruleIndex: number, actionIndex: number): boolean;

    precpred(localCtx: ParserRuleContext, precedence: number): boolean;

    set state(arg: number);
    get state(): number;
}
