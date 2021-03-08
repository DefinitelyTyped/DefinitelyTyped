import DocumentFragment from "./documentfragment";
import { Item } from "./item";
import Node from "./node";
import Text from "./text";
import { TreeWalkerValue } from "./treewalker";
import Element from "./element";
import Operation from "./operation/operation";
import Document from "./document";

/**
 * Represents how position is "sticking" with neighbour nodes. Used to define how position should be transformed (moved)
 * in edge cases. Possible values: `'toNone'`, `'toNext'`, `'toPrevious'`.
 *
 * Examples:
 *
 *        Insert. Position is at | and nodes are inserted at the same position, marked as ^:
 *
 *        - sticks to none:           <p>f^|oo</p>  ->  <p>fbar|oo</p>
 *        - sticks to next node:      <p>f^|oo</p>  ->  <p>fbar|oo</p>
 *        - sticks to previous node:  <p>f|^oo</p>  ->  <p>f|baroo</p>
 *
 *
 *        Move. Position is at | and range [oo] is moved to position ^:
 *
 *        - sticks to none:           <p>f|[oo]</p><p>b^ar</p>  ->  <p>f|</p><p>booar</p>
 *        - sticks to none:           <p>f[oo]|</p><p>b^ar</p>  ->  <p>f|</p><p>booar</p>
 *
 *        - sticks to next node:      <p>f|[oo]</p><p>b^ar</p>  ->  <p>f</p><p>b|ooar</p>
 *        - sticks to next node:      <p>f[oo]|</p><p>b^ar</p>  ->  <p>f|</p><p>booar</p>
 *
 *        - sticks to previous node:  <p>f|[oo]</p><p>b^ar</p>  ->  <p>f|</p><p>booar</p>
 *        - sticks to previous node:  <p>f[oo]|</p><p>b^ar</p>  ->  <p>f</p><p>boo|ar</p>
 */
export type PositionStickiness = "toNone" | "toNext" | "toPrevious";

/**
 * Represents a position in the model tree.
 *
 * A position is represented by its {@link module:engine/model/position~Position#root} and
 * a {@link module:engine/model/position~Position#path} in that root.
 *
 * You can create position instances via its constructor or the `createPosition*()` factory methods of
 * {@link module:engine/model/model~Model} and {@link module:engine/model/writer~Writer}.
 *
 * **Note:** Position is based on offsets, not indexes. This means that a position between two text nodes
 * `foo` and `bar` has offset `3`, not `1`. See {@link module:engine/model/position~Position#path} for more information.
 *
 * Since a position in the model is represented by a {@link module:engine/model/position~Position#root position root} and
 * {@link module:engine/model/position~Position#path position path} it is possible to create positions placed in non-existing places.
 * This requirement is important for operational transformation algorithms.
 *
 * Also, {@link module:engine/model/operation/operation~Operation operations}
 * kept in the {@link module:engine/model/document~Document#history document history}
 * are storing positions (and ranges) which were correct when those operations were applied, but may not be correct
 * after the document has changed.
 *
 * When changes are applied to the model, it may also happen that {@link module:engine/model/position~Position#parent position parent}
 * will change even if position path has not changed. Keep in mind, that if a position leads to non-existing element,
 * {@link module:engine/model/position~Position#parent} and some other properties and methods will throw errors.
 *
 * In most cases, position with wrong path is caused by an error in code, but it is sometimes needed, as described above.
 */
export default class Position {
    /**
     * Creates a position.
     *
     * See {@link module:engine/model/position~PositionStickiness}.
     */
    constructor(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness);
    root: DocumentFragment;
    path: number[];
    stickiness: PositionStickiness | undefined;
    /**
     * Offset at which this position is located in its {@link module:engine/model/position~Position#parent parent}. It is equal
     * to the last item in position {@link module:engine/model/position~Position#path path}.
     *
     */
    get offset(): number;
    set offset(newOffset: number);
    /**
     * Parent element of this position.
     *
     * Keep in mind that `parent` value is calculated when the property is accessed.
     * If {@link module:engine/model/position~Position#path position path}
     * leads to a non-existing element, `parent` property will throw error.
     *
     * Also it is a good idea to cache `parent` property if it is used frequently in an algorithm (i.e. in a long loop).
     */
    readonly parent: DocumentFragment;
    /**
     * Position {@link module:engine/model/position~Position#offset offset} converted to an index in position's parent node. It is
     * equal to the {@link module:engine/model/node~Node#index index} of a node after this position. If position is placed
     * in text node, position index is equal to the index of that text node.
     */
    readonly index: number;
    /**
     * Returns {@link module:engine/model/text~Text text node} instance in which this position is placed or `null` if this
     * position is not in a text node.
     */
    readonly textNode: Text;
    /**
     * Node directly after this position or `null` if this position is in text node.
     */
    readonly nodeAfter: Node | null;
    /**
     * Node directly before this position or `null` if this position is in text node.
     *
     */
    readonly nodeBefore: Node | null;
    /**
     * Is `true` if position is at the beginning of its {@link module:engine/model/position~Position#parent parent}, `false` otherwise.
     */
    readonly isAtStart: boolean;
    /**
     * Is `true` if position is at the end of its {@link module:engine/model/position~Position#parent parent}, `false` otherwise.
     */
    readonly isAtEnd: boolean;
    /**
     * Checks whether this position is before or after given position.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    compareWith(otherPosition: Position): "different" | "same" | "before" | "after";
    /**
     * Gets the farthest position which matches the callback using
     * {@link module:engine/model/treewalker~TreeWalker TreeWalker}.
     *
     * For example:
     *
     *         getLastMatchingPosition( value => value.type == 'text' );
     *         // <paragraph>[]foo</paragraph> -> <paragraph>foo[]</paragraph>
     *
     *         getLastMatchingPosition( value => value.type == 'text', { direction: 'backward' } );
     *         // <paragraph>foo[]</paragraph> -> <paragraph>[]foo</paragraph>
     *
     *         getLastMatchingPosition( value => false );
     *         // Do not move the position.
     *
     * return `true` if the value should be skipped or `false` if not.
     *
     */
    getLastMatchingPosition(
        skip: (value: TreeWalkerValue) => boolean,
        options?: {
            direction?: "forward" | "backward";
            boundaries?: null | Range;
            startPosition?: Position;
            singleCharacters?: boolean;
            shallow?: boolean;
            ignoreElementEnd?: boolean;
        },
    ): Position;
    /**
     * Returns a path to this position's parent. Parent path is equal to position {@link module:engine/model/position~Position#path path}
     * but without the last item.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    getParentPath(): number[];
    /**
     * Returns ancestors array of this position, that is this position's parent and its ancestors.
     *
     */
    getAncestors(): Item[];
    /**
     * Returns the parent element of the given name. Returns null if the position is not inside the desired parent.
     *
     */
    findAncestor(parentName: string): Element;
    /**
     * Returns the slice of two position {@link #path paths} which is identical. The {@link #root roots}
     * of these two paths must be identical.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    getCommonPath(position: Position): number[];
    /**
     * Returns an {@link module:engine/model/element~Element} or {@link module:engine/model/documentfragment~DocumentFragment}
     * which is a common ancestor of both positions. The {@link #root roots} of these two positions must be identical.
     *
     */
    getCommonAncestor(position: Position): Element | DocumentFragment | null;
    /**
     * Returns a new instance of `Position`, that has same {@link #parent parent} but it's offset
     * is shifted by `shift` value (can be a negative value).
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    getShiftedBy(shift: number): Position;
    /**
     * Checks whether this position is after given position.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     * @see module:engine/model/position~Position#isBefore
     */
    isAfter(otherPosition: Position): boolean;
    /**
     * Checks whether this position is before given position.
     *
     * **Note:** watch out when using negation of the value returned by this method, because the negation will also
     * be `true` if positions are in different roots and you might not expect this. You should probably use
     * `a.isAfter( b ) || a.isEqual( b )` or `!a.isBefore( p ) && a.root == b.root` in most scenarios. If your
     * condition uses multiple `isAfter` and `isBefore` checks, build them so they do not use negated values, i.e.:
     *
     *        if ( a.isBefore( b ) && c.isAfter( d ) ) {
     *            // do A.
     *        } else {
     *            // do B.
     *        }
     *
     * or, if you have only one if-branch:
     *
     *        if ( !( a.isBefore( b ) && c.isAfter( d ) ) {
     *            // do B.
     *        }
     *
     * rather than:
     *
     *        if ( !a.isBefore( b ) || && !c.isAfter( d ) ) {
     *            // do B.
     *        } else {
     *            // do A.
     *        }
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    isBefore(otherPosition: Position): boolean;
    /**
     * Checks whether this position is equal to given position.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    isEqual(otherPosition: Position): boolean;
    /**
     * Checks whether this position is touching given position. Positions touch when there are no text nodes
     * or empty nodes in a range between them. Technically, those positions are not equal but in many cases
     * they are very similar or even indistinguishable.
     *
     */
    isTouching(otherPosition: Position): boolean;
    /**
     * Checks whether this object is of the given.
     *
     *        position.is( 'position' ); // -> true
     *        position.is( 'model:position' ); // -> true
     *
     *        position.is( 'view:position' ); // -> false
     *        position.is( 'documentSelection' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     *
     */
    is(type: string): boolean;
    /**
     * Checks if two positions are in the same parent.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     *
     */
    hasSameParentAs(position: Position): boolean;
    /**
     * Returns a copy of this position that is transformed by given `operation`.
     *
     * The new position's parameters are updated accordingly to the effect of the `operation`.
     *
     * For example, if `n` nodes are inserted before the position, the returned position {@link ~Position#offset} will be
     * increased by `n`. If the position was in a merged element, it will be accordingly moved to the new element, etc.
     *
     * This method is safe to use it on non-existing positions (for example during operational transformation).
     */
    getTransformedByOperation(operation: Operation): Position;
    toJSON(): {
        root: DocumentFragment;
        path: number[];
        stickiness: PositionStickiness | undefined;
    };
    /**
     * Returns a new position that is equal to current position.
     */
    clone(): Position;
    /**
     * Creates a `Position` instance from given plain object (i.e. parsed JSON string).
     *
     */
    static fromJSON(json: Record<string, unknown>, doc: Document): Position;
}

/**
 * Returns a text node at the given position.
 *
 * This is a helper function optimized to reuse the position parent instance for performance reasons.
 *
 * Normally, you should use {@link module:engine/model/position~Position#textNode `Position#textNode`}.
 * If you start hitting performance issues with {@link module:engine/model/position~Position#parent `Position#parent`}
 * check if your algorithm does not access it multiple times (which can happen directly or indirectly via other position properties).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/6579.
 *
 * See also:
 *
 * * {@link module:engine/model/position~getNodeAfterPosition}
 * * {@link module:engine/model/position~getNodeBeforePosition}
 */
export function getTextNodeAtPosition(position: Position, positionParent: Element | DocumentFragment): Text | null;

/**
 * Returns the node after the given position.
 *
 * This is a helper function optimized to reuse the position parent instance and the calculation of the text node at the
 * specific position for performance reasons.
 *
 * Normally, you should use {@link module:engine/model/position~Position#nodeAfter `Position#nodeAfter`}.
 * If you start hitting performance issues with {@link module:engine/model/position~Position#parent `Position#parent`} and/or
 * {@link module:engine/model/position~Position#textNode `Position#textNode`}
 * check if your algorithm does not access those properties multiple times
 * (which can happen directly or indirectly via other position properties).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/6579 and https://github.com/ckeditor/ckeditor5/issues/6582.
 *
 * See also:
 *
 * * {@link module:engine/model/position~getTextNodeAtPosition}
 * * {@link module:engine/model/position~getNodeBeforePosition}
 */
export function getNodeAfterPosition(
    position: Position,
    positionParent: Element | DocumentFragment,
    textNode: Text | null,
): Node | null;

/**
 * Returns the node before the given position.
 *
 * Refer to {@link module:engine/model/position~getNodeBeforePosition} for documentation on when to use this util method.
 *
 * See also:
 *
 * * {@link module:engine/model/position~getTextNodeAtPosition}
 * * {@link module:engine/model/position~getNodeAfterPosition}
 */
export function getNodeBeforePosition(
    position: Position,
    positionParent: Element | DocumentFragment,
    textNode: Text | null,
): Node | null;

export {};
