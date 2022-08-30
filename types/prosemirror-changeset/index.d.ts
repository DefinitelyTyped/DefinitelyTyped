// Type definitions for prosemirror-changeset 2.1
// Project: https://github.com/prosemirror/prosemirror-changeset#readme
// Definitions by: Pierre-Marc Airoldi <https://github.com/pmairoldi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

import { StepMap } from 'prosemirror-transform';
import { Node, Schema } from 'prosemirror-model';

export class Span {
    constructor(length: number, data: any);

    get length(): number;
    get data(): any;

    cut(length: number): Span;

    static slice(spans: Span[], from: number, to: number): Span[];

    static join(a: Span[], b: Span[], combine: (a: any, b: any) => any): Span[];

    static len(spans: Span[]): number;
}

export class Change {
    constructor(fromA: number, toA: number, fromB: number, toB: number, deleted: Span[], inserted: Span[]);

    get fromA(): number;
    get toA(): number;
    get fromB(): number;
    get toB(): number;
    get deleted(): Span[];
    get inserted(): Span[];

    get lenA(): number;
    get lenB(): number;

    slice(startA: number, endA: number, startB: number, endB: number): Change;

    // :: ([Change], [Change], (any, any) → any) → [Change]
    // This merges two changesets (the end document of x should be the
    // start document of y) into a single one spanning the start of x to
    // the end of y.
    static merge(x: Change[], y: Change[], combine: (a: any, b: any) => any): Change[];
}

export class ChangeSet<S extends Schema = any> {
    constructor(config: any, changes: Change[]);

    get changes(): Change[];

    // :: (Node, [StepMap], union<[any], any>) → ChangeSet
    // Computes a new changeset by adding the given step maps and
    // metadata (either as an array, per-map, or as a single value to be
    // associated with all maps) to the current set. Will not mutate the
    // old set.
    //
    // Note that due to simplification that happens after each add,
    // incrementally adding steps might create a different final set
    // than adding all those changes at once, since different document
    // tokens might be matched during simplification depending on the
    // boundaries of the current changed ranges.
    addSteps(newDoc: Node<S>, maps: StepMap[], data?: any): ChangeSet<S>;

    // :: Node
    // The starting document of the change set.
    get startDoc(): Node<S>;

    // :: (f: (range: Change) → any) → ChangeSet
    // Map the span's data values in the given set through a function
    // and construct a new set with the resulting data.
    map(f: (range: Change) => any): ChangeSet<S>;

    // :: (ChangeSet, ?[StepMap]) → ?{from: number, to: number}
    // Compare two changesets and return the range in which they are
    // changed, if any. If the document changed between the maps, pass
    // the maps for the steps that changed it as second argument, and
    // make sure the method is called on the old set and passed the new
    // set. The returned positions will be in new document coordinates.
    changedRange(b: ChangeSet<S>, maps?: StepMap[]): { from: number; to: number } | undefined;

    // :: (Node, ?(a: any, b: any) → any) → ChangeSet
    // Create a changeset with the given base object and configuration.
    // The `combine` function is used to compare and combine metadata—it
    // should return null when metadata isn't compatible, and a combined
    // version for a merged range when it is.
    static create<S extends Schema = any>(doc: Node<S>, combine?: (a: any, b: any) => any): ChangeSet<S>;
}

// :: ([Change], Node) → [Change]
// Simplifies a set of changes for presentation. This makes the
// assumption that having both insertions and deletions within a word
// is confusing, and, when such changes occur without a word boundary
// between them, they should be expanded to cover the entire set of
// words (in the new document) they touch. An exception is made for
// single-character replacements.
export function simplifyChanges(changes: Change[], doc: Node): Change[];
