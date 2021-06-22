import { Recognizer } from '../Recognizer';
import { Token } from '../Token';

export class ErrorListener {
    syntaxError(recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void;
    reportAmbiguity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, exact: any, ambigAlts: any, configs: any): void;
    reportAttemptingFullContext(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
    reportContextSensitivity(recognizer: Recognizer, dfa: any, startIndex: number, stopIndex: number, conflictingAlts: any, configs: any): void;
}

export class ConsoleErrorListener extends ErrorListener {
}

export class ProxyErrorListener extends ErrorListener {
}
