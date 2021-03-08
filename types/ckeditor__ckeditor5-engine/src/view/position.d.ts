import TreeWalker, { TreeWalkerOptions, TreeWalkerValue } from "./treewalker";
import EditableElement from "./editableelement";
import Node from "./node";
import DocumentFragment from "./documentfragment";

/**
 * Position in the view tree. Position is represented by its parent node and an offset in this parent.
 *
 * In order to create a new position instance use the `createPosition*()` factory methods available in:
 *
 * * {@link module:engine/view/view~View}
 * * {@link module:engine/view/downcastwriter~DowncastWriter}
 * * {@link module:engine/view/upcastwriter~UpcastWriter}
 */
export default class Position {
    /**
     * Creates a position.
     */
    constructor(parent: Node | DocumentFragment, offset: number);

    readonly parent: Node | DocumentFragment;

    readonly offset: number;

    /**
     * Node directly after the position. Equals `null` when there is no node after position or position is located
     * inside text node.
     */
    readonly nodeAfter: Node | null;

    /**
     * Node directly before the position. Equals `null` when there is no node before position or position is located
     * inside text node.
     */
    readonly nodeBefore: Node | null;

    /**
     * Is `true` if position is at the beginning of its {@link module:engine/view/position~Position#parent parent}, `false` otherwise.
     */
    readonly isAtStart: boolean;

    /**
     * Is `true` if position is at the end of its {@link module:engine/view/position~Position#parent parent}, `false` otherwise.
     */
    readonly isAtEnd: boolean;

    /**
     * Position's root, that is the root of the position's parent element.
     */
    readonly root: Node | DocumentFragment;

    /**
     * {@link module:engine/view/editableelement~EditableElement EditableElement} instance that contains this position, or `null` if
     * position is not inside an editable element.
     */
    readonly editableElement: EditableElement | null;

    /**
     * Returns a new instance of Position with offset incremented by `shift` value.
     */
    getShiftedBy(shift: number): Position;

    /**
     * Gets the farthest position which matches the callback using
     * {@link module:engine/view/treewalker~TreeWalker TreeWalker}.
     *
     * For example:
     *
     *         getLastMatchingPosition( value => value.type == 'text' ); // <p>{}foo</p> -> <p>foo[]</p>
     *         getLastMatchingPosition( value => value.type == 'text', { direction: 'backward' } ); // <p>foo[]</p> -> <p>{}foo</p>
     *         getLastMatchingPosition( value => false ); // Do not move the position.
     */
    getLastMatchingPosition(skip: (value: TreeWalkerValue) => boolean, options?: TreeWalkerOptions): Position;

    /**
     * Returns ancestors array of this position, that is this position's parent and it's ancestors.
     */
    getAncestors(): Node[];

    /**
     * Returns a {@link module:engine/view/node~Node} or {@link module:engine/view/documentfragment~DocumentFragment}
     * which is a common ancestor of both positions.
     */
    getCommonAncestor(position: Position): Array<Node | DocumentFragment>;

    /**
     * Checks whether this object is of the given type.
     *
     *        position.is( 'position' ); // -> true
     *        position.is( 'view:position' ); // -> true
     *
     *        position.is( 'model:position' ); // -> false
     *        position.is( 'element' ); // -> false
     *        position.is( 'range' ); // -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string): boolean;

    /**
     * Checks whether this position equals given position.
     */
    isEqual(otherPosition: Position): boolean;

    /**
     * Checks whether this position is located before given position. When method returns `false` it does not mean that
     * this position is after give one. Two positions may be located inside separate roots and in that situation this
     * method will still return `false`.
     *
     * @see module:engine/view/position~Position#isAfter
     * @see module:engine/view/position~Position#compareWith
     */
    isBefore(otherPosition: Position): boolean;

    /**
     * Checks whether this position is located after given position. When method returns `false` it does not mean that
     * this position is before give one. Two positions may be located inside separate roots and in that situation this
     * method will still return `false`.
     *
     * @see module:engine/view/position~Position#isBefore
     * @see module:engine/view/position~Position#compareWith
     */
    isAfter(otherPosition: Position): boolean;

    /**
     * Checks whether this position is before, after or in same position that other position. Two positions may be also
     * different when they are located in separate roots.
     */
    compareWith(otherPosition: Position): PositionRelation;

    /**
     * Creates a {@link module:engine/view/treewalker~TreeWalker TreeWalker} instance with this positions as a start position.
     */
    getWalker(options?: TreeWalkerOptions): TreeWalker;

    clone(): Position;
}

/**
 * A flag indicating whether this position is `'before'` or `'after'` or `'same'` as given position.
 * If positions are in different roots `'different'` flag is returned.
 */
type PositionRelation = "before" | "after" | "same" | "different";

export {};
