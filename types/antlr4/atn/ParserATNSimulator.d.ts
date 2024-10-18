import ParserRuleContext from "../context/ParserRuleContext";
import RuleContext from "../context/RuleContext";
import DFA from "../dfa/DFA";
import DFAState from "../dfa/DFAState";
import PredPrediction from "../dfa/PredPrediction";
import NoViableAltException from "../error/NoViableAltException";
import BitSet from "../misc/BitSet";
import HashSet from "../misc/HashSet";
import Parser from "../Parser";
import ATNState from "../state/ATNState";
import DecisionState from "../state/DecisionState";
import TokenStream from "../TokenStream";
import Transition from "../transition/Transition";
import DoubleDict from "../utils/DoubleDict";
import ATN from "./ATN";
import ATNConfig from "./ATNConfig";
import ATNConfigSet from "./ATNConfigSet";
import ATNSimulator from "./ATNSimulator";
import PredictionContextCache from "./PredictionContextCache";
import SemanticContext from "./SemanticContext";

export default class ParserATNSimulator extends ATNSimulator {
    parser: Parser;
    decisionToDFA: DFA[];
    predictionMode: number;
    _input: TokenStream | null;
    _startIndex: number;
    _outerContext: ParserRuleContext;
    _dfa: DFA;

    /**
     * Each prediction operation uses a cache for merge of prediction contexts.
     * Don't keep around as it wastes huge amounts of memory. DoubleKeyMap
     * isn't synchronized but we're ok since two threads shouldn't reuse same
     * parser/atnsim object because it can only handle one input at a time.
     * This maps graphs a and b to merged result c. (a,b)->>c. We can avoid
     * the merge if we ever see a and b again.  Note that (b,a)->>c should
     * also be examined during cache lookup.
     */
    mergeCache: DoubleDict | null;

    debug: boolean;
    debug_closure: boolean;
    debug_add: boolean;
    debug_list_atn_decisions: boolean;
    dfa_debug: boolean;
    retry_debug: boolean;

    constructor(parser: Parser, atn: ATN, decisionToDFA: DFA[], sharedContextCache: PredictionContextCache);

    reset(): void;

    adaptivePredict(input: TokenStream, decision: number, outerContext: ParserRuleContext): ParserATNSimulator;

    /**
     * Performs ATN simulation to compute a predicted alternative based
     *  upon the remaining input, but also updates the DFA cache to avoid
     *  having to traverse the ATN again for the same input sequence.
     *
     * There are some key conditions we're looking for after computing a new
     * set of ATN configs (proposed DFA state):
     *       if the set is empty, there is no viable alternative for current symbol
     *       does the state uniquely predict an alternative?
     *       does the state have a conflict that would prevent us from
     *         putting it on the work list?
     *
     * We also have some key operations to do:
     *       add an edge from previous DFA state to potentially new DFA state, D,
     *         upon current symbol but only if adding to work list, which means in all
     *         cases except no viable alternative (and possibly non-greedy decisions?)
     *       collecting predicates and adding semantic context to DFA accept states
     *       adding rule context to context-sensitive DFA accept states
     *       consuming an input symbol
     *       reporting a conflict
     *       reporting an ambiguity
     *       reporting a context sensitivity
     *       reporting insufficient predicates
     *
     * cover these cases:
     *    dead end
     *    single alt
     *    single alt + preds
     *    conflict
     *    conflict + preds
     */
    execATN(dfa: DFA, s0: DFAState, input: TokenStream, startIndex: number, outerContext: ParserRuleContext): number;

    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `null`.
     *
     * @param previousD The current DFA state
     * @param t The next input symbol
     * @return The existing target DFA state for the given input symbol
     * `t`, or `null` if the target state for this edge is not already cached.
     */
    getExistingTargetState(previousD: DFAState, t: number): DFAState;

    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param dfa The DFA
     * @param previousD The current DFA state
     * @param t The next input symbol
     *
     * @return The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link ERROR}
     */
    computeTargetState(dfa: DFA, previousD: DFAState, t: number): DFAState;

    predicateDFAState(dfaState: DFAState, decisionState: DecisionState): void;

    execATNWithFullContext(
        dfa: DFA,
        D: DFAState,
        s0: ATNConfigSet,
        input: TokenStream,
        startIndex: number,
        outerContext: ParserRuleContext,
    ): number;

    computeReachSet(closure: ATNConfigSet, t: number, fullCtx: boolean): ATNConfigSet;

    /**
     * Return a configuration set containing only the configurations from
     * `configs` which are in a {@link RuleStopState}. If all
     * configurations in `configs` are already in a rule stop state, this
     * method simply returns `configs`.
     *
     * When `lookToEndOfRule` is true, this method uses
     * {@link ATN.nextTokens} for each configuration in `configs` which is
     * not already in a rule stop state to see if a rule stop state is reachable
     * from the configuration via epsilon-only transitions.</p>
     *
     * @param configs the configuration set to update
     * @param lookToEndOfRule when true, this method checks for rule stop states
     * reachable by epsilon-only transitions from each configuration in `configs`.
     *
     * @return `configs` if all configurations in `configs` are in a
     * rule stop state, otherwise return a new configuration set containing only
     * the configurations from `configs` which are in a rule stop state
     */
    removeAllConfigsNotInRuleStopState(configs: ATNConfigSet, lookToEndOfRule: boolean): ATNConfigSet;

    computeStartState(p: ATNState, ctx: RuleContext, fullCtx: boolean): ATNConfigSet;

    /**
     * This method transforms the start state computed by
     * {@link computeStartState} to the special start state used by a
     * precedence DFA for a particular precedence value. The transformation
     * process applies the following changes to the start state's configuration
     * set.
     *
     * - Evaluate the precedence predicates for each configuration using
     * {@link SemanticContext.evalPrecedence}.
     * - Remove all configurations which predict an alternative greater than
     * 1, for which another configuration that predicts alternative 1 is in the
     * same ATN state with the same prediction context. This transformation is
     * valid for the following reasons:
     *
     * - The closure block cannot contain any epsilon transitions which bypass
     * the body of the closure, so all states reachable via alternative 1 are
     * part of the precedence alternatives of the transformed left-recursive
     * rule.
     * - The "primary" portion of a left recursive rule cannot contain an
     * epsilon transition, so the only way an alternative other than 1 can exist
     * in a state that is also reachable via alternative 1 is by nesting calls
     * to the left-recursive rule, with the outer calls not being at the
     * preferred precedence level.
     *
     * The prediction context must be considered by this filter to address
     * situations like the following.
     *
     * ```
     * grammar TA;
     * prog: statement* EOF;
     * statement: letterA | statement letterA 'b' ;
     * letterA: 'a';
     * ```
     *
     * If the above grammar, the ATN state immediately before the token
     * reference `'a'` in `letterA` is reachable from the left edge
     * of both the primary and closure blocks of the left-recursive rule
     * `statement`. The prediction context associated with each of these
     * configurations distinguishes between them, and prevents the alternative
     * which stepped out to `prog` (and then back in to `statement`
     * from being eliminated by the filter.
     *
     * @param configs The configuration set computed by
     * {@link computeStartState} as the start state for the DFA.
     * @return The transformed configuration set representing the start state
     * for a precedence DFA at a particular precedence level (determined by
     * calling {@link Parser.getPrecedence})
     */
    applyPrecedenceFilter(configs: ATNConfigSet): ATNConfigSet;

    getReachableTarget(trans: Transition, ttype: number): ATNState;

    getPredsForAmbigAlts(ambigAlts: BitSet, configs: ATNConfigSet, nalts: number): SemanticContext[];

    getPredicatePredictions(ambigAlts: BitSet, altToPred: SemanticContext[]): PredPrediction[] | null;

    /**
     * This method is used to improve the localization of error messages by
     * choosing an alternative rather than throwing a
     * {@link NoViableAltException} in particular prediction scenarios where the
     * {@link ERROR} state was reached during ATN simulation.
     *
     * The default implementation of this method uses the following
     * algorithm to identify an ATN configuration which successfully parsed the
     * decision entry rule. Choosing such an alternative ensures that the
     * {@link ParserRuleContext} returned by the calling rule will be complete
     * and valid, and the syntax error will be reported later at a more
     * localized location.
     *
     * - If a syntactically valid path or paths reach the end of the decision rule and
     * they are semantically valid if predicated, return the min associated alt.</li>
     * - Else, if a semantically invalid but syntactically valid path exist
     * or paths exist, return the minimum associated alt.
     * - Otherwise, return {@link ATN//INVALID_ALT_NUMBER}.
     *
     * In some scenarios, the algorithm described above could predict an
     * alternative which will result in a {@link FailedPredicateException} in
     * the parser. Specifically, this could occur if the _only_ configuration
     * capable of successfully parsing to the end of the decision rule is
     * blocked by a semantic predicate. By choosing this alternative within
     * {@link adaptivePredict} instead of throwing a
     * {@link NoViableAltException}, the resulting
     * {@link FailedPredicateException} in the parser will identify the specific
     * predicate which is preventing the parser from successfully parsing the
     * decision rule, which helps developers identify and correct logic errors
     * in semantic predicates.
     *
     * @param configs The ATN configurations which were valid immediately before
     * the {@link ERROR} state was reached
     * @param outerContext The is the \gamma_0 initial parser context from the paper
     * or the parser stack at the instant before prediction commences.
     *
     * @return The value to return from {@link adaptivePredict}, or
     * {@link ATN.INVALID_ALT_NUMBER} if a suitable alternative was not
     * identified and {@link adaptivePredict} should report an error instead
     */
    getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(
        configs: ATNConfigSet,
        outerContext: ParserRuleContext,
    ): number;

    getAltThatFinishedDecisionEntryRule(configs: ATNConfigSet): number;

    /**
     * Walk the list of configurations and split them according to
     * those that have preds evaluating to true/false. If no pred, assume
     * true pred and include in succeeded set.  Returns Pair of sets.
     *
     * Create a new set so as not to alter the incoming parameter.
     *
     * Assumption: the input stream has been restored to the starting point
     * prediction, which is where predicates need to evaluate.
     */
    splitAccordingToSemanticValidity(configs: ATNConfigSet, outerContext: ParserRuleContext): ATNConfigSet[];

    /**
     * Look through a list of predicate/alt pairs, returning alts for the
     * pairs that win. A {@code NONE} predicate indicates an alt containing an
     * unpredicated config which behaves as "always true." If !complete
     * then we stop at the first predicate that evaluates to true. This
     * includes pairs with null predicates.
     */
    evalSemanticContext(predPredictions: PredPrediction[], outerContext: ParserRuleContext, complete: boolean): BitSet;

    closure(
        config: ATNConfig,
        configs: ATNConfigSet,
        closureBusy: HashSet,
        collectPredicates: boolean,
        fullCtx: boolean,
        treatEofAsEpsilon: boolean,
    ): void;

    closureCheckingStopState(
        config: ATNConfig,
        configs: ATNConfigSet,
        closureBusy: HashSet,
        collectPredicates: boolean,
        fullCtx: boolean,
        depth: number,
        treatEofAsEpsilon: boolean,
    ): void;

    canDropLoopEntryEdgeInLeftRecursiveRule(config: ATNConfig): boolean;

    getRuleName(index: number): string;

    getEpsilonTarget(
        config: ATNConfig,
        t: Transition,
        collectPredicates: boolean,
        inContext: boolean,
        fullCtx: boolean,
        treatEofAsEpsilon: boolean,
    ): ATNConfig | null;

    actionTransition(config: ATNConfig, t: Transition): ATNConfig;

    precedenceTransition(
        config: ATNConfig,
        pt: Transition,
        collectPredicates: boolean,
        inContext: boolean,
        fullCtx: boolean,
    ): ATNConfig | null;

    predTransition(
        config: ATNConfig,
        pt: Transition,
        collectPredicates: boolean,
        inContext: boolean,
        fullCtx: boolean,
    ): ATNConfig | null;

    ruleTransition(config: ATNConfig, t: Transition): ATNConfig;

    getConflictingAlts(configs: ATNConfigSet): BitSet;

    /**
     * Sam pointed out a problem with the previous definition, v3, of
     * ambiguous states. If we have another state associated with conflicting
     * alternatives, we should keep going. For example, the following grammar
     *
     * s : (ID | ID ID?) ';' ;
     *
     * When the ATN simulation reaches the state before ';', it has a DFA
     * state that looks like: [12|1|[], 6|2|[], 12|2|[]]. Naturally
     * 12|1|[] and 12|2|[] conflict, but we cannot stop processing this node
     * because alternative to has another way to continue, via [6|2|[]].
     * The key is that we have a single state that has config's only associated
     * with a single alternative, 2, and crucially the state transitions
     * among the configurations are all non-epsilon transitions. That means
     * we don't consider any conflicts that include alternative 2. So, we
     * ignore the conflict between alts 1 and 2. We ignore a set of
     * conflicting alts when there is an intersection with an alternative
     * associated with a single alt state in the state&rarr;config-list map.
     *
     * It's also the case that we might have two conflicting configurations but
     * also a 3rd nonconflicting configuration for a different alternative:
     * [1|1|[], 1|2|[], 8|3|[]]. This can come about from grammar:
     *
     * a : A | A | A B ;
     *
     * After matching input A, we reach the stop state for rule A, state 1.
     * State 8 is the state right before B. Clearly alternatives 1 and 2
     * conflict and no amount of further lookahead will separate the two.
     * However, alternative 3 will be able to continue and so we do not
     * stop working on this state. In the previous example, we're concerned
     * with states associated with the conflicting alternatives. Here alt
     * 3 is not associated with the conflicting configs, but since we can continue
     * looking for input reasonably, I don't declare the state done. We
     * ignore a set of conflicting alts when we have an alternative
     * that we still need to pursue
     */
    getConflictingAltsOrUniqueAlt(configs: ATNConfigSet): BitSet;

    getTokenName(t: number): string;

    getLookaheadName(input: TokenStream): string;

    /**
     * Used for debugging in adaptivePredict around execATN but I cut
     * it out for clarity now that alg. works well. We can leave this
     * "dead" code for a bit
     */
    dumpDeadEndConfigs(nvae: NoViableAltException): void;

    noViableAlt(
        input: TokenStream,
        outerContext: ParserRuleContext,
        configs: ATNConfigSet,
        startIndex: number,
    ): NoViableAltException;

    getUniqueAlt(configs: ATNConfigSet): number;

    /**
     * Add an edge to the DFA, if possible. This method calls
     * {@link addDFAState} to ensure the `to` state is present in the
     * DFA. If `from` is `null`, or if `t` is outside the
     * range of edges that can be represented in the DFA tables, this method
     * returns without adding the edge to the DFA.
     *
     * If `to` is `null`, this method returns `null`.
     * Otherwise, this method returns the {@link DFAState} returned by calling
     * {@link addDFAState} for the `to` state.
     *
     * @param dfa The DFA
     * @param from_ The source state for the edge
     * @param t The input symbol
     * @param to The target state for the edge
     *
     * @return If `to` is `null`, this method returns `null`;
     * otherwise this method returns the result of calling {@link addDFAState}
     * on `to`
     */
    addDFAEdge(dfa: DFA, from_: DFAState, t: number, to: DFAState): DFAState;

    /**
     * Add state `D` to the DFA if it is not already present, and return
     * the actual instance stored in the DFA. If a state equivalent to `D`
     * is already in the DFA, the existing state is returned. Otherwise this
     * method returns `D` after adding it to the DFA.
     *
     * If `D` is {@link ERROR}, this method returns {@link ERROR} and
     * does not change the DFA.
     *
     * @param dfa The dfa
     * @param D The DFA state to add
     * @return The state stored in the DFA. This will be either the existing
     * state if `D` is already in the DFA, or `D` itself if the state was
     * not already present
     */
    addDFAState(dfa: DFA, D: DFAState): DFAState;

    reportAttemptingFullContext(
        dfa: DFA,
        conflictingAlts: BitSet,
        configs: ATNConfigSet,
        startIndex: number,
        stopIndex: number,
    ): void;

    reportContextSensitivity(
        dfa: DFA,
        prediction: number,
        configs: ATNConfigSet,
        startIndex: number,
        stopIndex: number,
    ): void;

    reportAmbiguity(
        dfa: DFA,
        D: DFAState,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: BitSet,
        configs: ATNConfigSet,
    ): void;
}
