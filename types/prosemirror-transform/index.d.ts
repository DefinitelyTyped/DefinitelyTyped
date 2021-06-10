// Type definitions for prosemirror-transform 1.1
// Project: https://github.com/ProseMirror/prosemirror-transform
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
    ContentMatch,
    Fragment,
    Mark,
    MarkType,
    Node as ProsemirrorNode,
    NodeRange,
    NodeType,
    Schema,
    Slice,
} from 'prosemirror-model';

/**
 * There are several things that positions can be mapped through.
 * Such objects conform to this interface.
 */
export interface Mappable {
    /**
     * Map a position through this object. When given, `assoc` (should
     * be -1 or 1, defaults to 1) determines with which side the
     * position is associated, which determines in which direction to
     * move when a chunk of content is inserted at the mapped position.
     */
    map(pos: number, assoc?: number): number;
    /**
     * Map a position, and return an object containing additional
     * information about the mapping. The result's `deleted` field tells
     * you whether the position was deleted (completely enclosed in a
     * replaced range) during the mapping. When content on only one side
     * is deleted, the position itself is only considered deleted when
     * `assoc` points in the direction of the deleted content.
     */
    mapResult(pos: number, assoc?: number): MapResult;
}
/**
 * An object representing a mapped position with extra
 * information.
 */
export class MapResult {
    /**
     * The mapped version of the position.
     */
    pos: number;
    /**
     * Tells you whether the position was deleted, that is,
     * whether the step removed its surroundings from the document.
     */
    deleted: boolean;
}
/**
 * A map describing the deletions and insertions made by a step, which
 * can be used to find the correspondence between positions in the
 * pre-step version of a document and the same position in the
 * post-step version.
 */
export class StepMap implements Mappable {
    /**
     * Create a position map. The modifications to the document are
     * represented as an array of numbers, in which each group of three
     * represents a modified chunk as `[start, oldSize, newSize]`.
     */
    constructor(ranges: number[]);
    /**
     * Calls the given function on each of the changed ranges included in
     * this map.
     */
    forEach(f: (oldStart: number, oldEnd: number, newStart: number, newEnd: number) => void): void;
    /**
     * Create an inverted version of this map. The result can be used to
     * map positions in the post-step document to the pre-step document.
     */
    invert(): StepMap;
    /**
     * Map a position through this object. When given, `assoc` (should
     * be -1 or 1, defaults to 1) determines with which side the
     * position is associated, which determines in which direction to
     * move when a chunk of content is inserted at the mapped position.
     */
    map(pos: number, assoc?: number): number;
    /**
     * Map a position, and return an object containing additional
     * information about the mapping. The result's `deleted` field tells
     * you whether the position was deleted (completely enclosed in a
     * replaced range) during the mapping. When content on only one side
     * is deleted, the position itself is only considered deleted when
     * `assoc` points in the direction of the deleted content.
     */
    mapResult(pos: number, assoc?: number): MapResult;
    /**
     * Create a map that moves all positions by offset `n` (which may be
     * negative). This can be useful when applying steps meant for a
     * sub-document to a larger document, or vice-versa.
     */
    static offset(n: number): StepMap;
}
/**
 * A mapping represents a pipeline of zero or more [step
 * maps](#transform.StepMap). It has special provisions for losslessly
 * handling mapping positions through a series of steps in which some
 * steps are inverted versions of earlier steps. (This comes up when
 * ‘[rebasing](/docs/guide/#transform.rebasing)’ steps for
 * collaboration or history management.)
 */
export class Mapping implements Mappable {
    /**
     * Create a new mapping with the given position maps.
     */
    constructor(maps?: StepMap[]);
    /**
     * The step maps in this mapping.
     */
    maps: StepMap[];
    /**
     * The starting position in the `maps` array, used when `map` or
     * `mapResult` is called.
     */
    from: number;
    /**
     * The end position in the `maps` array.
     */
    to: number;
    /**
     * Create a mapping that maps only through a part of this one.
     */
    slice(from?: number, to?: number): Mapping;
    /**
     * Add a step map to the end of this mapping. If `mirrors` is
     * given, it should be the index of the step map that is the mirror
     * image of this one.
     */
    appendMap(map: StepMap, mirrors?: number): void;
    /**
     * Add all the step maps in a given mapping to this one (preserving
     * mirroring information).
     */
    appendMapping(mapping: Mapping): void;
    /**
     * Finds the offset of the step map that mirrors the map at the
     * given offset, in this mapping (as per the second argument to
     * appendMap).
     */
    getMirror(n: number): number | undefined | null;
    /**
     * Append the inverse of the given mapping to this one.
     */
    appendMappingInverted(mapping: Mapping): void;
    /**
     * Map a position through this object. When given, `assoc` (should
     * be -1 or 1, defaults to 1) determines with which side the
     * position is associated, which determines in which direction to
     * move when a chunk of content is inserted at the mapped position.
     */
    map(pos: number, assoc?: number): number;
    /**
     * Map a position, and return an object containing additional
     * information about the mapping. The result's `deleted` field tells
     * you whether the position was deleted (completely enclosed in a
     * replaced range) during the mapping. When content on only one side
     * is deleted, the position itself is only considered deleted when
     * `assoc` points in the direction of the deleted content.
     */
    mapResult(pos: number, assoc?: number): MapResult;
    /**
     * Create an inverted version of this mapping.
     */
    invert(): Mapping;
}
/**
 * Add a mark to all inline content between two positions.
 */
export class AddMarkStep<S extends Schema = any> extends Step<S> {
    constructor(from: number, to: number, mark: Mark<S>);
}
/**
 * Remove a mark from all inline content between two positions.
 */
export class RemoveMarkStep<S extends Schema = any> extends Step<S> {
    constructor(from: number, to: number, mark: Mark<S>);
}
/**
 * Abstraction to build up and track an array of
 * [steps](#transform.Step) representing a document transformation.
 *
 * Most transforming methods return the `Transform` object itself, so
 * that they can be chained.
 */
export class Transform<S extends Schema = any> {
    /**
     * Create a transform that starts with the given document.
     */
    constructor(doc: ProsemirrorNode<S>);
    /**
     * Add the given mark to the inline content between `from` and `to`.
     */
    addMark(from: number, to: number, mark: Mark<S>): this;
    /**
     * Remove marks from inline nodes between `from` and `to`. When `mark`
     * is a single mark, remove precisely that mark. When it is a mark type,
     * remove all marks of that type. When it is null, remove all marks of
     * any type.
     */
    removeMark(from: number, to: number, mark?: Mark<S> | MarkType<S>): this;
    /**
     * Removes all marks and nodes from the content of the node at `pos`
     * that don't match the given new parent node type. Accepts an
     * optional starting [content match](#model.ContentMatch) as third
     * argument.
     */
    clearIncompatible(pos: number, parentType: NodeType<S>, match?: ContentMatch<S>): this;
    /**
     * Replace the part of the document between `from` and `to` with the
     * given `slice`.
     */
    replace(from: number, to?: number, slice?: Slice<S>): this;
    /**
     * Replace the given range with the given content, which may be a
     * fragment, node, or array of nodes.
     */
    replaceWith(from: number, to: number, content: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>): this;
    /**
     * Delete the content between the given positions.
     */
    delete(from: number, to: number): this;
    /**
     * Insert the given content at the given position.
     */
    insert(pos: number, content: Fragment<S> | ProsemirrorNode<S> | Array<ProsemirrorNode<S>>): this;
    /**
     * Replace a range of the document with a given slice, using `from`,
     * `to`, and the slice's [`openStart`](#model.Slice.openStart) property
     * as hints, rather than fixed start and end points. This method may
     * grow the replaced area or close open nodes in the slice in order to
     * get a fit that is more in line with WYSIWYG expectations, by
     * dropping fully covered parent nodes of the replaced region when
     * they are marked [non-defining](#model.NodeSpec.defining), or
     * including an open parent node from the slice that _is_ marked as
     * [defining](#model.NodeSpec.defining).
     *
     * This is the method, for example, to handle paste. The similar
     * [`replace`](#transform.Transform.replace) method is a more
     * primitive tool which will _not_ move the start and end of its given
     * range, and is useful in situations where you need more precise
     * control over what happens.
     */
    replaceRange(from: number, to: number, slice: Slice<S>): this;
    /**
     * Replace the given range with a node, but use `from` and `to` as
     * hints, rather than precise positions. When from and to are the same
     * and are at the start or end of a parent node in which the given
     * node doesn't fit, this method may _move_ them out towards a parent
     * that does allow the given node to be placed. When the given range
     * completely covers a parent node, this method may completely replace
     * that parent node.
     */
    replaceRangeWith(from: number, to: number, node: ProsemirrorNode<S>): this;
    /**
     * Delete the given range, expanding it to cover fully covered
     * parent nodes until a valid replace is found.
     */
    deleteRange(from: number, to: number): this;
    /**
     * Split the content in the given range off from its parent, if there
     * is sibling content before or after it, and move it up the tree to
     * the depth specified by `target`. You'll probably want to use
     * [`liftTarget`](#transform.liftTarget) to compute `target`, to make
     * sure the lift is valid.
     */
    lift(range: NodeRange<S>, target: number): this;
    /**
     * Wrap the given [range](#model.NodeRange) in the given set of wrappers.
     * The wrappers are assumed to be valid in this position, and should
     * probably be computed with [`findWrapping`](#transform.findWrapping).
     */
    wrap(range: NodeRange<S>, wrappers: Array<{ type: NodeType<S>; attrs?: { [key: string]: any } | null }>): this;
    /**
     * Set the type of all textblocks (partly) between `from` and `to` to
     * the given node type with the given attributes.
     */
    setBlockType(from: number, to: number | undefined, type: NodeType<S>, attrs?: { [key: string]: any }): this;
    /**
     * Change the type, attributes, and/or marks of the node at `pos`.
     * When `nodeType` is null, the existing node type is preserved,
     */
    setNodeMarkup(pos: number, type?: NodeType<S>, attrs?: { [key: string]: any }, marks?: Array<Mark<S>>): this;
    /**
     * Split the node at the given position, and optionally, if `depth` is
     * greater than one, any number of nodes above that. By default, the
     * parts split off will inherit the node type of the original node.
     * This can be changed by passing an array of types and attributes to
     * use after the split.
     */
    split(
        pos: number,
        depth?: number,
        typesAfter?: Array<{ type: NodeType<S>; attrs?: { [key: string]: any } | null }>,
    ): this;
    /**
     * Join the blocks around the given position. If depth is 2, their
     * last and first siblings are also joined, and so on.
     */
    join(pos: number, depth?: number, p1?: boolean): this;
    /**
     * The current document (the result of applying the steps in the
     * transform).
     */
    doc: ProsemirrorNode<S>;
    /**
     * The steps in this transform.
     */
    steps: Array<Step<S>>;
    /**
     * The documents before each of the steps.
     */
    docs: Array<ProsemirrorNode<S>>;
    /**
     * A mapping with the maps for each of the steps in this transform.
     */
    mapping: Mapping;
    /**
     * The starting document.
     */
    before: ProsemirrorNode<S>;
    /**
     * Apply a new step in this transform, saving the result. Throws an
     * error when the step fails.
     */
    step(step: Step<S>): this;
    /**
     * Try to apply a step in this transformation, ignoring it if it
     * fails. Returns the step result.
     */
    maybeStep(step: Step<S>): StepResult<S>;
    /**
     * True when the document has been changed (when there are any
     * steps).
     */
    docChanged: boolean;
}
/**
 * Replace a part of the document with a slice of new content.
 */
export class ReplaceStep<S extends Schema = any> extends Step<S> {
    /**
     * The given `slice` should fit the 'gap' between `from` and
     * `to`—the depths must line up, and the surrounding nodes must be
     * able to be joined with the open sides of the slice. When
     * `structure` is true, the step will fail if the content between
     * from and to is not just a sequence of closing and then opening
     * tokens (this is to guard against rebased replace steps
     * overwriting something they weren't supposed to).
     */
    constructor(from: number, to: number, slice: Slice<S>, structure?: boolean);
}
/**
 * Replace a part of the document with a slice of content, but
 * preserve a range of the replaced content by moving it into the
 * slice.
 */
export class ReplaceAroundStep<S extends Schema = any> extends Step<S> {
    /**
     * Create a replace-around step with the given range and gap.
     * `insert` should be the point in the slice into which the content
     * of the gap should be moved. `structure` has the same meaning as
     * it has in the [`ReplaceStep`](#transform.ReplaceStep) class.
     */
    constructor(
        from: number,
        to: number,
        gapFrom: number,
        gapTo: number,
        slice: Slice<S>,
        insert: number,
        structure?: boolean,
    );
}
/**
 * ‘Fit’ a slice into a given position in the document, producing a
 * [step](#transform.Step) that inserts it. Will return null if
 * there's no meaningful way to insert the slice here, or inserting it
 * would be a no-op (an empty slice over an empty range).
 */
export function replaceStep<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    from: number,
    to?: number,
    slice?: Slice<S>,
): Step<S> | null | undefined;
/**
 * A step object represents an atomic change. It generally applies
 * only to the document it was created for, since the positions
 * stored in it will only make sense for that document.
 *
 * New steps are defined by creating classes that extend `Step`,
 * overriding the `apply`, `invert`, `map`, `getMap` and `fromJSON`
 * methods, and registering your class with a unique
 * JSON-serialization identifier using
 * [`Step.jsonID`](#transform.Step^jsonID).
 */
export class Step<S extends Schema = any> {
    /**
     * Applies this step to the given document, returning a result
     * object that either indicates failure, if the step can not be
     * applied to this document, or indicates success by containing a
     * transformed document.
     */
    apply(doc: ProsemirrorNode<S>): StepResult<S>;
    /**
     * Get the step map that represents the changes made by this step,
     * and which can be used to transform between positions in the old
     * and the new document.
     */
    getMap(): StepMap;
    /**
     * Create an inverted version of this step. Needs the document as it
     * was before the step as argument.
     */
    invert(doc: ProsemirrorNode<S>): Step<S>;
    /**
     * Map this step through a mappable thing, returning either a
     * version of that step with its positions adjusted, or `null` if
     * the step was entirely deleted by the mapping.
     */
    map(mapping: Mappable): Step<S> | null | undefined;
    /**
     * Try to merge this step with another one, to be applied directly
     * after it. Returns the merged step when possible, null if the
     * steps can't be merged.
     */
    merge(other: Step<S>): Step<S> | null | undefined;
    /**
     * Create a JSON-serializeable representation of this step. When
     * defining this for a custom subclass, make sure the result object
     * includes the step type's [JSON id](#transform.Step^jsonID) under
     * the `stepType` property.
     */
    toJSON(): { [key: string]: any };
    /**
     * Deserialize a step from its JSON representation. Will call
     * through to the step class' own implementation of this method.
     */
    static fromJSON<S extends Schema = any>(schema: S, json: { [key: string]: any }): Step<S>;
    /**
     * To be able to serialize steps to JSON, each step needs a string
     * ID to attach to its JSON representation. Use this method to
     * register an ID for your step classes. Try to pick something
     * that's unlikely to clash with steps from other modules.
     */
    static jsonID(id: string, stepClass: { new (...args: any[]): Step }): void;
}
/**
 * The result of [applying](#transform.Step.apply) a step. Contains either a
 * new document or a failure value.
 */
export class StepResult<S extends Schema = any> {
    /**
     * The transformed document.
     */
    doc?: ProsemirrorNode<S> | null;
    /**
     * Text providing information about a failed step.
     */
    failed?: string | null;
    /**
     * Create a successful step result.
     */
    static ok<S extends Schema = any>(doc: ProsemirrorNode<S>): StepResult<S>;
    /**
     * Create a failed step result.
     */
    static fail(message: string): StepResult;
    /**
     * Call [`Node.replace`](#model.Node.replace) with the given
     * arguments. Create a successful result if it succeeds, and a
     * failed one if it throws a `ReplaceError`.
     */
    static fromReplace<S extends Schema = any>(
        doc: ProsemirrorNode<S>,
        from: number,
        to: number,
        slice: Slice<S>,
    ): StepResult<S>;
}
/**
 * Try to find a target depth to which the content in the given range
 * can be lifted. Will not go across
 * [isolating](#model.NodeSpec.isolating) parent nodes.
 */
export function liftTarget(range: NodeRange): number | null | undefined;
/**
 * Try to find a valid way to wrap the content in the given range in a
 * node of the given type. May introduce extra nodes around and inside
 * the wrapper node, if necessary. Returns null if no valid wrapping
 * could be found. When `innerRange` is given, that range's content is
 * used as the content to fit into the wrapping, instead of the
 * content of range.
 */
export function findWrapping<S extends Schema = any>(
    range: NodeRange<S>,
    nodeType: NodeType<S>,
    attrs?: { [key: string]: any },
    innerRange?: NodeRange<S>,
): Array<{ type: NodeType<S>; attrs?: { [key: string]: any } | null }> | null | undefined;
/**
 * Check whether splitting at the given position is allowed.
 */
export function canSplit<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    pos: number,
    depth?: number,
    typesAfter?: Array<{ type: NodeType<S>; attrs?: { [key: string]: any } | null } | null | undefined>,
): boolean;
/**
 * Test whether the blocks before and after a given position can be
 * joined.
 */
export function canJoin(doc: ProsemirrorNode, pos: number): boolean;
/**
 * Find an ancestor of the given position that can be joined to the
 * block before (or after if `dir` is positive). Returns the joinable
 * point, if any.
 */
export function joinPoint(doc: ProsemirrorNode, pos: number, dir?: number): number | null | undefined;
/**
 * Try to find a point where a node of the given type can be inserted
 * near `pos`, by searching up the node hierarchy when `pos` itself
 * isn't a valid place but is at the start or end of a node. Return
 * null if no position was found.
 */
export function insertPoint<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    pos: number,
    nodeType: NodeType<S>,
): number | null | undefined;
/**
 * Finds a position at or around the given position where the given
 * slice can be inserted. Will look at parent nodes' nearest boundary
 * and try there, even if the original position wasn't directly at
 * the start or end of that node. Returns null when no position was
 * found.
 */
export function dropPoint<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    pos: number,
    slice: Slice<S>,
): number | null | undefined;
