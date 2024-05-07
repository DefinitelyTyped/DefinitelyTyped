import BitSet from "../misc/BitSet";
import HashCode from "../misc/HashCode";
import HashSet from "../misc/HashSet";
import DoubleDict from "../utils/DoubleDict";
import ATNConfig from "./ATNConfig";
import ATNSimulator from "./ATNSimulator";
import SemanticContext from "./SemanticContext";

/**
 * Specialized `Set<{@link ATNConfig}>` that can track
 * info about the set, with support for combining similar configurations using a
 * graph-structured stack
 */
export default class ATNConfigSet {
    /**
     * The reason that we need this is because we don't want the hash map to use
     * the standard hash code and equals. We need all configurations with the
     * same `(s,i,_,semctx)` to be equal. Unfortunately, this key effectively
     * doubles the number of objects associated with ATNConfigs. The other solution
     * is to use a hash table that lets us specify the equals/hashcode operation.
     * All configs but hashed by (s, i, _, pi) not including context. Wiped out
     * when we go readonly as this set becomes a DFA state
     */
    configLookup: HashSet;

    /**
     * Indicates that this configuration set is part of a full context
     * LL prediction. It will be used to determine how to merge $. With SLL
     * it's a wildcard whereas it is not for LL context merge
     */
    readonly fullCtx: boolean;

    /**
     * Indicates that the set of configurations is read-only. Do not
     * allow any code to manipulate the set; DFA states will point at
     * the sets and they must not change. This does not protect the other
     * fields; in particular, conflictingAlts is set after
     * we've made this readonly
     */
    readOnly: boolean;

    configs: ATNConfig[];
    uniqueAlt: number;
    conflictingAlts: BitSet;

    /**
     * Used in parser and lexer. In lexer, it indicates we hit a pred
     * while computing a closure operation. Don't make a DFA state from this
     */
    hasSemanticContext: boolean;
    dipsIntoOuterContext: boolean;
    cachedHashCode: number;

    constructor(fullCtx: boolean);

    /**
     * Adding a new config means merging contexts with existing configs for
     * `(s, i, pi, _)`, where `s` is the {@link ATNConfig.state}, `i` is
     * the {@link ATNConfig.alt}, and `pi` is the {@link ATNConfig.semanticContext}.
     * We use `(s,i,pi)` as key.
     *
     * This method updates {@link dipsIntoOuterContext} and
     * {@link hasSemanticContext} when necessary.
     */
    add(config: ATNConfig, mergeCache?: DoubleDict): boolean;

    getStates(): HashSet;

    getPredicates(): SemanticContext[];

    optimizeConfigs(interpreter: ATNSimulator): void;

    addAll(coll: ATNConfig[]): boolean;

    equals(other: ATNConfigSet): boolean;

    hashCode(): number;

    updateHashCode(hash: HashCode): void;

    isEmpty(): boolean;

    contains(item: any): boolean;

    containsFast(item: any): boolean;

    clear(): void;

    setReadonly(readOnly: boolean): void;

    toString(): string;

    get items(): ATNConfig[];

    get length(): number;
}
