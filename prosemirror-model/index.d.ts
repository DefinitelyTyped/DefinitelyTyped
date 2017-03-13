// Type definitions for prosemirror-model 0.18
// Project: https://github.com/ProseMirror/prosemirror-model
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type OrderedMap<T> = T;

declare module "prosemirror-model" {
  export class ContentMatch {
    matchNode(node: ProsemirrorNode): ContentMatch
    matchType(type: NodeType, attrs?: Object, marks?: Mark[]): ContentMatch
    matchFragment(fragment: Fragment, from?: number, to?: number): ContentMatch | boolean
    matchToEnd(fragment: Fragment, start?: number, end?: number): boolean
    validEnd(): boolean
    fillBefore(after: Fragment, toEnd: boolean, startIndex?: number): Fragment
    allowsMark(markType: MarkType): boolean
    findWrapping(target: NodeType, targetAttrs?: Object, targetMarks?: Mark[]): { type: NodeType, attrs: Object }[]
    findWrappingFor(node: ProsemirrorNode): { type: NodeType, attrs: Object }[]

  }
  export class Fragment {
    append(other: Fragment): Fragment
    cut(from: number, to?: number): Fragment
    replaceChild(index: number, node: ProsemirrorNode): Fragment
    eq(other: Fragment): boolean
    firstChild?: ProsemirrorNode;
    lastChild?: ProsemirrorNode;
    childCount: number;
    child(index: number): ProsemirrorNode
    offsetAt(index: number): number
    maybeChild(index: number): ProsemirrorNode
    forEach(f: (node: ProsemirrorNode, offset: number, index: number) => void): void
    findDiffStart(other: Fragment): number
    findDiffEnd(other: ProsemirrorNode): { a: number, b: number } | void
    toString(): string
    toJSON(): Object | void
    static fromJSON(schema: Schema, value?: Object): Fragment
    static fromArray(array: ProsemirrorNode[]): Fragment
    static from(nodes?: Fragment | ProsemirrorNode | ProsemirrorNode[]): Fragment
    static empty: Fragment;

  }
  export interface ParseRule {
    tag?: string;
    style?: string;
    context?: string;
    node?: string;
    mark?: string;
    priority?: number;
    ignore?: boolean;
    skip?: boolean;
    attrs?: Object;
    getAttrs?(p: Node | string): boolean | Object
    contentElement?: string;
    getContent?(p: Node): Fragment
    preserveWhitespace?: boolean;

  }
  export class DOMParser {
    constructor(schema: Schema, rules: ParseRule[])
    schema: Schema;
    rules: ParseRule[];
    parse(dom: Node, options?: { preserveWhitespace?: boolean, findPositions?: { node: Node, offset: number }[], from?: number, to?: number, topNode?: ProsemirrorNode, topStart?: number, context?: ResolvedPos }): ProsemirrorNode
    parseSlice(dom: Node, options?: Object): Slice
    static schemaRules(schema: Schema): ParseRule[]
    static fromSchema(schema: Schema): DOMParser

  }
  export class Mark {
    type: MarkType;
    attrs: Object;
    addToSet(set: Mark[]): Mark[]
    removeFromSet(set: Mark[]): Mark[]
    isInSet(set: Mark[]): boolean
    eq(other: Mark): boolean
    toJSON(): Object
    static fromJSON(schema: Schema, json: Object): Mark
    static sameSet(a: Mark[], b: Mark[]): boolean
    static setFrom(marks?: Mark | Mark[]): Mark[]
    static none: Mark[];

  }
  export class ProsemirrorNode {
    type: NodeType;
    attrs: Object;
    content: Fragment;
    marks: Mark[];
    text?: string;
    nodeSize: number;
    childCount: number;
    child(index: number): ProsemirrorNode
    maybeChild(index: number): ProsemirrorNode
    forEach(f: (node: ProsemirrorNode, offset: number, index: number) => void): void
    nodesBetween(from: number |  void, to: number |  void, f: (node: ProsemirrorNode, pos: number, parent: ProsemirrorNode, index: number) => void): void
    descendants(f: (node: ProsemirrorNode, pos: number, parent: ProsemirrorNode) => void): void
    textContent: string;
    textBetween(from: number, to: number, blockSeparator?: string, leafText?: string): string
    firstChild?: ProsemirrorNode;
    lastChild?: ProsemirrorNode;
    eq(other: ProsemirrorNode): boolean
    sameMarkup(other: ProsemirrorNode): boolean
    hasMarkup(type: NodeType, attrs?: Object, marks?: Mark[]): boolean
    copy(content?: Fragment): ProsemirrorNode
    mark(marks: Mark[]): ProsemirrorNode
    cut(from: number, to?: number): ProsemirrorNode
    slice(from: number, to?: number): Slice
    replace(from: number, to: number, slice: Slice): ProsemirrorNode
    nodeAt(pos: number): ProsemirrorNode
    childAfter(pos: number): { node?: ProsemirrorNode, index: number, offset: number }
    childBefore(pos: number): { node?: ProsemirrorNode, index: number, offset: number }
    resolve(pos: number): ResolvedPos
    rangeHasMark(from: number |  void, to: number |  void, type: MarkType): boolean
    isBlock: boolean;
    isTextblock: boolean;
    isInline: boolean;
    isText: boolean;
    isLeaf: boolean;
    isAtom: boolean;
    toString(): string
    contentMatchAt(index: number): ContentMatch
    canReplace(from: number, to: number, replacement?: Fragment, start?: number, end?: number): boolean
    canReplaceWith(from: number, to: number, type: NodeType, attrs?: Mark[]): boolean
    canAppend(other: ProsemirrorNode): boolean
    check(): void
    toJSON(): Object
    static fromJSON(schema: Schema, json: Object): ProsemirrorNode

  }
  export class ReplaceError extends Error {

  }
  export class Slice {
    constructor(content: Fragment, openLeft: number, openRight: number)
    content: Fragment;
    openLeft: number;
    openRight: number;
    size: number;
    toJSON(): Object | void
    static fromJSON(schema: Schema, json?: Object): Slice
    static maxOpen(fragment: Fragment): Slice
    static empty: Slice;

  }
  export class ResolvedPos {
    pos: number;
    depth: number;
    parentOffset: number;
    parent: ProsemirrorNode;
    node(depth?: number): ProsemirrorNode
    index(depth?: number): number
    indexAfter(depth?: number): number
    start(depth?: number): number
    end(depth?: number): number
    before(depth?: number): number
    after(depth?: number): number
    textOffset: number;
    nodeAfter?: ProsemirrorNode;
    nodeBefore?: ProsemirrorNode;
    marks(after?: boolean): Mark[]
    sharedDepth(pos: number): number
    blockRange(other?: ResolvedPos, pred?: (p: ProsemirrorNode) => boolean): NodeRange
    sameParent(other: ResolvedPos): boolean

  }
  export class NodeRange {
    $from: ResolvedPos;
    $to: ResolvedPos;
    depth: number;
    start: number;
    end: number;
    parent: ProsemirrorNode;
    startIndex: number;
    endIndex: number;

  }
  export class NodeType {
    name: string;
    schema: Schema;
    spec: NodeSpec;
    isBlock: boolean;
    isText: boolean;
    isInline: boolean;
    isTextblock: boolean;
    isLeaf: boolean;
    isAtom: boolean;
    create(attrs?: Object, content?: Fragment | ProsemirrorNode | ProsemirrorNode[], marks?: Mark[]): ProsemirrorNode
    createChecked(attrs?: Object, content?: Fragment | ProsemirrorNode | ProsemirrorNode[], marks?: Mark[]): ProsemirrorNode
    createAndFill(attrs?: Object, content?: Fragment | ProsemirrorNode | ProsemirrorNode[], marks?: Mark[]): ProsemirrorNode
    validContent(content: Fragment, attrs?: Object): boolean

  }
  export class MarkType {
    name: string;
    schema: Schema;
    spec: MarkSpec;
    create(attrs?: Object): Mark
    removeFromSet(set: Mark[]): Mark[]
    isInSet(set: Mark[]): Mark
    excludes: MarkType;

  }
  export interface SchemaSpec {
    nodes: Object | OrderedMap<NodeSpec>;
    marks?: Object | OrderedMap<MarkSpec>;
    topNode?: string;

  }
  export interface NodeSpec {
    content?: string;
    group?: string;
    inline?: boolean;
    atom?: boolean;
    attrs?: Object;
    selectable?: boolean;
    draggable?: boolean;
    code?: boolean;
    defining?: boolean;
    toDOM?(p: ProsemirrorNode): DOMOutputSpec
    parseDOM?: ParseRule[];

  }
  export interface MarkSpec {
    attrs?: Object;
    inclusiveRight?: boolean;
    excludes?: string;
    group?: string;
    toDOM?(mark: Mark): DOMOutputSpec
    parseDOM?: ParseRule[];

  }
  export interface AttributeSpec {
    default?: any;
    compute?(): any

  }
  export class Schema {
    constructor(spec: SchemaSpec)
    spec: SchemaSpec;
    nodes: Object;
    marks: Object;
    cached: Object;
    topNodeType: NodeType;
    node(type: string | NodeType, attrs?: Object, content?: Fragment | ProsemirrorNode | ProsemirrorNode[], marks?: Mark[]): ProsemirrorNode
    text(text: string, marks?: Mark[]): ProsemirrorNode
    mark(type: string | MarkType, attrs?: Object): Mark
    nodeFromJSON(json: Object): ProsemirrorNode
    markFromJSON(json: Object): Mark

  }
  export interface DOMOutputSpec {

  }
  export class DOMSerializer {
    constructor(nodes: Object, marks: Object)
    nodes: Object;
    marks: Object;
    serializeFragment(fragment: Fragment, options?: Object): DocumentFragment
    serializeNode(node: ProsemirrorNode, options?: Object): Node
    static renderSpec(doc: Document, structure: DOMOutputSpec): { dom: Node, contentDOM?: Node }
    static fromSchema(schema: Schema): DOMSerializer
    static nodesFromSchema(schema: Schema): Object
    static marksFromSchema(schema: Schema): Object

  }

}