import Interval from "../misc/Interval";
import Parser from "../Parser";
import ParseTreeVisitor from "../tree/ParseTreeVisitor";
import RuleNode from "../tree/RuleNode";

/**
 * A rule context is a record of a single rule invocation. It knows
 * which context invoked it, if any. If there is no parent context, then
 * naturally the invoking state is not valid.  The parent link
 * provides a chain upwards from the current rule invocation to the root
 * of the invocation tree, forming a stack. We actually carry no
 * information about the rule associated with this context (except
 * when parsing). We keep only the state number of the invoking state from
 * the ATN submachine that invoked this. Contrast this with the s
 * pointer inside ParserRuleContext that tracks the current state
 * being "executed" for the current rule.
 *
 * The parent contexts are useful for computing lookahead sets and
 * getting error information.
 *
 * These objects are used during parsing and prediction.
 * For the special case of parsers, we use the subclass
 * ParserRuleContext.
 *
 * @see ParserRuleContext
 */
export default class RuleContext extends RuleNode {
    readonly parentCtx: RuleContext;

    /**
     * What state invoked the rule associated with this context?
     * The "return address" is the followState of invokingState
     * If parent is null, this should be -1.
     */
    readonly invokingState: number;

    constructor(parent?: RuleContext, invokingState?: number);

    depth(): number;

    /**
     * A context is empty if there is no invoking state; meaning nobody call
     * current context.
     */
    isEmpty(): boolean;

    getSourceInterval(): Interval;

    getRuleContext(): RuleContext;

    getPayload(): RuleContext;

    /**
     * Return the combined text of all child nodes. This method only considers
     * tokens which have been added to the parse tree.
     *
     * Since tokens on hidden channels (e.g. whitespace or comments) are not
     * added to the parse trees, they will not appear in the output of this
     * method.
     */
    getText(): string;

    /**
     * For rule associated with this parse tree internal node, return
     * the outer alternative number used to match the input. Default
     * implementation does not compute nor store this alt num. Create
     * a subclass of ParserRuleContext with backing field and set
     * option contextSuperClass.
     * to set it.
     */
    getAltNumber(): 0;

    /**
     * Set the outer alternative number for this context node. Default
     * implementation does nothing to avoid backing field overhead for
     * trees that don't need it.  Create
     * a subclass of ParserRuleContext with backing field and set
     * option contextSuperClass.
     */
    setAltNumber(altNumber: number): void;

    getChild(i: number): RuleContext | null;

    getChildCount(): number;

    accept(visitor: ParseTreeVisitor): void;

    /**
     * Print out a whole tree, not just a node, in LISP format
     * (root child1 .. childN). Print just a node if this is a leaf.
     */
    toStringTree(ruleNames: string[], recog: Parser): string;

    toString(ruleNames: string[], stop: RuleContext): string;
}
