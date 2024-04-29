import DFA from "./DFA";
import DFAState from "./DFAState";

/**
 * A DFA walker that knows how to dump them to serialized strings.
 */
export default class DFASerializer {
    readonly dfa: DFA;
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(dfa: DFA, literalNames?: string[], symbolicNames?: string[]);

    toString(): string | null;
    getEdgeLabel(i: number): string;
    getStateString(s: DFAState): string;
}
