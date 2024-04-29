import LexerAction from "../action/LexerAction";
import InputStream from "../InputStream";
import Lexer from "../Lexer";
import HashCode from "../misc/HashCode";

export default class LexerActionExecutor {
    /**
     * Creates a {@link LexerActionExecutor} which executes the actions for
     * the input `lexerActionExecutor` followed by a specified `lexerAction`.
     *
     * @param lexerActionExecutor The executor for actions already traversed by
     * the lexer while matching a token within a particular {@link LexerATNConfig}.
     * If this is `null`, the method behaves as though it were an empty executor.
     * @param lexerAction The lexer action to execute after the actions
     * specified in `lexerActionExecutor`.
     *
     * @return A {@link LexerActionExecutor} for executing the combine actions
     * of `lexerActionExecutor` and `lexerAction`.
     */
    static append(lexerActionExecutor: LexerActionExecutor, lexerAction: LexerAction): LexerActionExecutor;

    readonly lexerActions: LexerAction[];

    /**
     * Caches the result of {@link hashCode} since the hash code is an element
     * of the performance-critical {@link LexerATNConfig.hashCode} operation
     */
    readonly cachedHashCode: number;

    /**
     * Represents an executor for a sequence of lexer actions which traversed during
     * the matching operation of a lexer rule (token).
     *
     * The executor tracks position information for position-dependent lexer actions
     * efficiently, ensuring that actions appearing only at the end of the rule do
     * not cause bloating of the {@link DFA} created for the lexer.
     */
    constructor(lexerActions: LexerAction[] | null);

    /**
     * Creates a {@link LexerActionExecutor} which encodes the current offset
     * for position-dependent lexer actions.
     *
     * Normally, when the executor encounters lexer actions where
     * {@link LexerAction.isPositionDependent} returns `true`, it calls
     * {@link IntStream.seek} on the input {@link CharStream} to set the input
     * position to the _end_ of the current token. This behavior provides
     * for efficient DFA representation of lexer actions which appear at the end
     * of a lexer rule, even when the lexer rule matches a variable number of
     * characters.
     *
     * Prior to traversing a match transition in the ATN, the current offset
     * from the token start index is assigned to all position-dependent lexer
     * actions which have not already been assigned a fixed offset. By storing
     * the offsets relative to the token start index, the DFA representation of
     * lexer actions which appear in the middle of tokens remains efficient due
     * to sharing among tokens of the same length, regardless of their absolute
     * position in the input stream.
     *
     * If the current executor already has offsets assigned to all
     * position-dependent lexer actions, the method returns `this`.
     *
     * @param offset The current offset to assign to all position-dependent
     * lexer actions which do not already have offsets assigned.
     *
     * @return A {@link LexerActionExecutor} which stores input stream offsets
     * for all position-dependent lexer actions.
     */
    fixOffsetBeforeMatch(offset: number): LexerActionExecutor;

    /**
     * Execute the actions encapsulated by this executor within the context of a
     * particular {@link Lexer}.
     *
     * This method calls {@link IntStream//seek} to set the position of the
     * {@code input} {@link CharStream} prior to calling {@link LexerAction.execute}
     * on a position-dependent action. Before the method returns, the input position
     * will be restored to the same position it was in when the method was invoked.
     *
     * @param lexer The lexer instance.
     * @param input The input stream which is the source for the current token.
     * When this method is called, the current {@link IntStream.index} for
     * `input` should be the start of the following token, i.e. 1 character past
     * the end of the current token.
     * @param startIndex The token start index. This value may be passed to
     * {@link IntStream.seek} to set the `input` position to the beginning
     * of the token.
     */
    execute(lexer: Lexer, input: InputStream, startIndex: number): void;

    hashCode(): number;

    updateHashCode(hash: HashCode): void;

    equals(other: LexerActionExecutor): boolean;
}
