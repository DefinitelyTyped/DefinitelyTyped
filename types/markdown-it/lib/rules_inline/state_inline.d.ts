import MarkdownIt = require("..");
import State = require("../rules_core/state_core");
import Token = require("../token");

export = StateInline;

declare class StateInline extends State {
    /**
     * Stores `{ start: end }` pairs. Useful for backtrack
     * optimization of pairs parse (emphasis, strikes).
     */
    cache: { [start: number]: number };

    /** Emphasis-like delimiters */
    delimiters: MarkdownIt.Delimiter[];

    pending: string;
    pendingLevel: number;

    /** Index of the first character of this token. */
    pos: number;

    /** Index of the last character that can be used (for example the one before the end of this line). */
    posMax: number;

    /**
     * Push new token to "stream".
     * If pending text exists, flush it as text token.
     */
    push(type: string, tag: string, nesting: number): Token;

    /** Flush pending text */
    pushPending(): Token;

    /**
     * Scan a sequence of emphasis-like markers and determine whether
     * it can start an emphasis sequence or end an emphasis sequence.
     * @param start - position to scan from (it should point to a valid marker)
     * @param canSplitWord - determine if these markers can be found inside a word
     */
    scanDelims(start: number, canSplitWord: boolean): {
        can_open: boolean,
        can_close: boolean,
        length: number
    };
}
