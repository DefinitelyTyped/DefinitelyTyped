import ATNConfigSet from "../atn/ATNConfigSet";
import DFA from "../dfa/DFA";
import BitSet from "../misc/BitSet";
import Recognizer from "../Recognizer";
import Token from "../Token";
import RecognitionException from "./RecognitionException";

/**
 * Provides an empty default implementation of ANTLRErrorListener. The
 * default implementation of each method does nothing, but can be overridden as
 * necessary.
 */
export default class ErrorListener {
    syntaxError(
        recognizer: Recognizer,
        offendingSymbol: Token,
        line: number,
        column: number,
        msg: string,
        e: RecognitionException,
    ): void;

    reportAmbiguity(
        recognizer: Recognizer,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: BitSet,
        configs: ATNConfigSet,
    ): void;

    reportAttemptingFullContext(
        recognizer: Recognizer,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: BitSet,
        configs: ATNConfigSet,
    ): void;

    reportContextSensitivity(
        recognizer: Recognizer,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: ATNConfigSet,
    ): void;
}
