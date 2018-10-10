import { ErrorListener, ProxyErrorListener } from './error/ErrorListener';
import { Token } from './Token';
import { ParserRuleContext } from './ParserRuleContext';

export class Recognizer {
    state: number;

    checkVersion(toolVersion: number): void;

    addErrorListener(listener: ErrorListener): void;

    removeErrorListeners(): void;

    getTokenTypeMap(): any;

    getRuleIndexMap(): any;

    getTokenType(tokenName: string): any;

    getErrorHeader(e: any): string;

    getTokenErrorDisplay(t: Token): string;

    getErrorListenerDispatch(): ProxyErrorListener;

    sempred(localCtx: ParserRuleContext, ruleIndex: number, actionIndex: number): boolean;

    precpred(localCtx: ParserRuleContext, precedence: any): boolean;
}
