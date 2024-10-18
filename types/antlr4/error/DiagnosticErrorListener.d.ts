import ATNConfigSet from "../atn/ATNConfigSet";
import DFA from "../dfa/DFA";
import BitSet from "../misc/BitSet";
import Parser from "../Parser";
import ErrorListener from "./ErrorListener";

/**
 * This implementation of {@link ErrorListener} can be used to identify
 * certain potential correctness and performance problems in grammars. "Reports"
 * are made by calling {@link Parser.notifyErrorListeners} with the appropriate
 * message.
 *
 * - Ambiguities: These are cases where more than one path through the
 * grammar can match the input.
 *
 * - Weak context sensitivity: These are cases where full-context prediction
 * resolved an SLL conflict to a unique alternative which equalled the
 * minimum alternative of the SLL conflict.
 *
 * - Strong (forced) context sensitivity: These are cases where the
 * full-context prediction resolved an SLL conflict to a unique alternative,
 * _and_ the minimum alternative of the SLL conflict was found to not be
 * a truly viable alternative. Two-stage parsing cannot be used for inputs where
 * this situation occurs.
 */
export default class DiagnosticErrorListener extends ErrorListener {
    readonly exactOnly: boolean;

    constructor(exactOnly: boolean);

    getDecisionDescription(recognizer: Parser, dfa: DFA): string;

    /**
     * Computes the set of conflicting or ambiguous alternatives from a
     * configuration set, if that information was not already provided by the
     * parser.
     *
     * @param reportedAlts The set of conflicting or ambiguous alternatives, as
     * reported by the parser.
     * @param configs The conflicting or ambiguous configuration set.
     * @return `reportedAlts` if it is not `null`, otherwise
     * returns the set of alternatives represented in `configs`.
     */
    getConflictingAlts(reportedAlts: BitSet, configs: ATNConfigSet): BitSet;
}
