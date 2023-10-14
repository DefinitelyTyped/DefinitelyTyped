import RuleContext from "../context/RuleContext";
import HashCode from "../misc/HashCode";
import Recognizer from "../Recognizer";
import Predicate from "./Predicate";

/**
 * A tree structure used to record the semantic context in which
 * an ATN configuration is valid.  It's either a single predicate,
 * a conjunction `p1&&p2`, or a sum of products `p1||p2`.
 *
 * I have scoped the {@link AND}, {@link OR}, and {@link Predicate} subclasses
 * of {@link SemanticContext} within the scope of this outer class.
 */
export default abstract class SemanticContext {
    static NONE: Predicate;
    static andContext(a: SemanticContext | null, b: SemanticContext | null): AND;
    static orContext(a: SemanticContext | null, b: SemanticContext | null): OR;

    hashCode(): number;

    /**
     * For context independent predicates, we evaluate them without a local
     * context (i.e., null context). That way, we can evaluate them without
     * having to create proper rule-specific context during prediction (as
     * opposed to the parser, which creates them naturally). In a practical
     * sense, this avoids a cast exception from RuleContext to myruleContext.
     *
     * For context dependent predicates, we must pass in a local context so that
     * references such as $arg evaluate properly as _localctx.arg. We only
     * capture context dependent predicates in the context in which we begin
     * prediction, so we passed in the outer context here in case of context
     * dependent predicate evaluation.
     */
    abstract evaluate(parser: Recognizer, outerContext: RuleContext): boolean;

    /**
     * Evaluate the precedence predicates for the context and reduce the result.
     *
     * @param parser The parser instance.
     * @param outerContext The current parser context object.
     * @return The simplified semantic context after precedence predicates are
     * evaluated, which will be one of the following values.
     *
     * - {@link NONE}: if the predicate simplifies to `true` after
     * precedence predicates are evaluated.
     * - `null`: if the predicate simplifies to `false` after
     * precedence predicates are evaluated.</li>
     * - `this`: if the semantic context is not changed as a result of
     * precedence predicate evaluation.
     * - A non-`null` {@link SemanticContext}: the new simplified
     * semantic context after precedence predicates are evaluated.
     */
    evalPrecedence(parser: Recognizer, outerContext: RuleContext): SemanticContext | null;
}

/**
 * A semantic context which is true whenever none of the contained contexts
 * is false
 */
export class AND extends SemanticContext {
    constructor(a: SemanticContext, b: SemanticContext);

    equals(other: SemanticContext): boolean;

    updateHashCode(hash: HashCode): void;

    evaluate(parser: any, outerContext: any): boolean;

    evalPrecedence(parser: any, outerContext: any): SemanticContext | null;

    toString(): string;
}

/**
 * A semantic context which is true whenever at least one of the contained
 * contexts is true
 */
export class OR extends SemanticContext {
    constructor(a: SemanticContext, b: SemanticContext);

    equals(other: SemanticContext): boolean;

    updateHashCode(hash: HashCode): void;

    evaluate(parser: Recognizer, outerContext: RuleContext): boolean;

    evalPrecedence(parser: Recognizer, outerContext: RuleContext): SemanticContext | null;

    toString(): string;
}
