import RuleContext from '../context/RuleContext';
import Recognizer from '../Recognizer';
import Predicate from './Predicate';

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
    static andContext(a: any, b: any): any;
    static orContext(a: any, b: any): any;

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
    evalPrecedence(parser: Recognizer, outerContext: RuleContext): SemanticContext;
}
