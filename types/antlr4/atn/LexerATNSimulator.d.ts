import DFA from "../dfa/DFA";
import DFAState from "../dfa/DFAState";
import InputStream from "../InputStream";
import Lexer from "../Lexer";
import ATNState from "../state/ATNState";
import DecisionState from "../state/DecisionState";
import Transition from "../transition/Transition";
import ATN from "./ATN";
import ATNConfig from "./ATNConfig";
import ATNConfigSet from "./ATNConfigSet";
import ATNSimulator from "./ATNSimulator";
import LexerActionExecutor from "./LexerActionExecutor";
import LexerATNConfig from "./LexerATNConfig";
import OrderedATNConfigSet from "./OrderedATNConfigSet";
import PredictionContextCache from "./PredictionContextCache";

export class SimState {
    reset(): void;
}

export default class LexerATNSimulator extends ATNSimulator {
    static readonly debug: false;
    static readonly dfa_debug: false;
    static readonly MIN_DFA_EDGE: 0;
    static readonly MAX_DFA_EDGE: 127;

    decisionToDFA: DFA[];
    recog: Lexer;
    /**
     * The current token's starting index into the character stream.
     * Shared across DFA to ATN simulation in case the ATN fails and the
     * DFA did not have a previous accept state. In this case, we use the
     * ATN-generated exception object
     */
    startIndex: number;
    line: number;
    /**
     * The index of the character relative to the beginning of the line
     * 0..n-1
     */
    column: number;
    mode: number;
    /**
     * Used during DFA/ATN exec to record the most recent accept configuration
     * info
     */
    prevAccept: SimState;

    /**
     * When we hit an accept state in either the DFA or the ATN, we
     * have to notify the character stream to start buffering characters
     * via {@link IntStream.mark} and record the current state. The current sim state
     * includes the current index into the input, the current line,
     * and current character position in that line. Note that the Lexer is
     * tracking the starting line and characterization of the token. These
     * variables track the "state" of the simulator when it hits an accept state.
     *
     * We track these variables separately for the DFA and ATN simulation
     * because the DFA simulation often has to fail over to the ATN
     * simulation. If the ATN simulation fails, we need the DFA to fall
     * back to its previously accepted state, if any. If the ATN succeeds,
     * then the ATN does the accept and the DFA simulator that invoked it
     * can simply return the predicted token type.
     */
    constructor(recog: Lexer, atn: ATN, decisionToDFA: DFA[], sharedContextCache: PredictionContextCache);

    copyState(simulator: LexerATNSimulator): void;

    match(input: InputStream, mode: number): number;

    reset(): void;

    matchATN(input: InputStream): number;

    execATN(input: InputStream, ds0: DFAState): number;

    /**
     * Get an existing target state for an edge in the DFA. If the target state
     * for the edge has not yet been computed or is otherwise not available,
     * this method returns `null`.
     *
     * @param s The current DFA state
     * @param t The next input symbol
     * @return The existing target DFA state for the given input symbol
     * `t`, or `null` if the target state for this edge is not
     * already cached
     */
    getExistingTargetState(s: DFAState, t: number): DFAState | null;

    /**
     * Compute a target state for an edge in the DFA, and attempt to add the
     * computed state and corresponding edge to the DFA.
     *
     * @param input The input stream
     * @param s The current DFA state
     * @param t The next input symbol
     *
     * @return The computed target DFA state for the given input symbol
     * `t`. If `t` does not lead to a valid DFA state, this method
     * returns {@link ERROR}.
     */
    computeTargetState(input: InputStream, s: DFAState, t: number): DFAState;

    failOrAccept(prevAccept: SimState, input: InputStream, reach: ATNConfigSet, t: number): number;

    /**
     * Given a starting configuration set, figure out all ATN configurations
     * we can reach upon input `t`. Parameter `reach` is a return parameter.
     */
    getReachableConfigSet(input: InputStream, closure: ATNConfigSet, reach: ATNConfigSet, t: number): void;

    accept(
        input: InputStream,
        lexerActionExecutor: LexerActionExecutor | null,
        startIndex: number,
        index: number,
        line: number,
        charPos: number,
    ): void;

    getReachableTarget(trans: Transition, t: number): ATNState;

    computeStartState(input: InputStream, p: DecisionState): OrderedATNConfigSet;

    /**
     * Since the alternatives within any lexer decision are ordered by
     * preference, this method stops pursuing the closure as soon as an accept
     * state is reached. After the first accept state is reached by depth-first
     * search from `config`, all other (potentially reachable) states for
     * this rule would have a lower priority.
     *
     * @return `true` if an accept state is reached, otherwise `false`
     */
    closure(
        input: InputStream,
        config: ATNConfig,
        configs: ATNConfigSet,
        currentAltReachedAcceptState: boolean,
        speculative: boolean,
        treatEofAsEpsilon: boolean,
    ): boolean;

    getEpsilonTarget(
        input: InputStream,
        config: ATNConfig,
        trans: Transition,
        configs: ATNConfigSet,
        speculative: boolean,
        treatEofAsEpsilon: boolean,
    ): LexerATNConfig | null;

    /**
     * Evaluate a predicate specified in the lexer.
     *
     * If `speculative` is `true`, this method was called before
     * {@link consume} for the matched character. This method should call
     * {@link consume} before evaluating the predicate to ensure position
     * sensitive values, including {@link Lexer.getText}, {@link Lexer.getLine},
     * and {@link Lexer.getcolumn}, properly reflect the current lexer state.
     * This method should restore `input` and the simulator to the original
     * state before returning (i.e. undo the actions made by the call
     * to {@link consume}.
     *
     * @param input The input stream.
     * @param ruleIndex The rule containing the predicate.
     * @param predIndex The index of the predicate within the rule.
     * @param speculative `true` if the current index in `input` is
     * one character before the predicate's location.
     *
     * @return `true` if the specified predicate evaluates to `true`.
     */
    evaluatePredicate(input: InputStream, ruleIndex: number, predIndex: number, speculative: boolean): boolean;

    captureSimState(settings: SimState, input: InputStream, dfaState: DFAState): void;

    addDFAEdge(from_: DFAState, tk: number, to?: DFAState, cfgs?: ATNConfigSet): DFAState;

    /**
     * Add a new DFA state if there isn't one with this set of
     * configurations already. This method also detects the first
     * configuration containing an ATN rule stop state. Later, when
     * traversing the DFA, we will know which rule to accept.
     */
    addDFAState(configs: ATNConfigSet): DFAState;

    getDFA(mode: number): DFA | undefined;

    getText(input: InputStream): string;

    consume(input: InputStream): void;

    getTokenName(tt: number): string;
}
