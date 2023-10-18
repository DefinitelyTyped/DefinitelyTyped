import * as Immutable from "immutable";
import { SyntheticEvent } from "react";

export interface Data extends Immutable.Map<any, any> {}

export namespace Data {
    function create(properties: Immutable.Map<string, any> | { [key: string]: any }): Data;
    function fromJSON(object: { [key: string]: any }): Data;
    function fromJS(object: { [key: string]: any }): Data;
}

export interface RulesByNodeType {
    [key: string]: Rules;
}

export interface ObjectAndType {
    object?: string | undefined;
    type?: string | undefined;
}

export interface Rules {
    data?: {
        [key: string]: (v: any) => boolean;
    } | undefined;
    first?: ObjectAndType | ObjectAndType[] | undefined;
    isAtomic?: boolean | undefined;
    isVoid?: boolean | undefined;
    last?: ObjectAndType | ObjectAndType[] | undefined;
    marks?:
        | Array<{
            type: string | ((type: string) => boolean);
        }>
        | undefined;
    next?: ObjectAndType | ObjectAndType[] | undefined;
    nodes?:
        | Array<{
            min?: number | undefined;
            max?: number | undefined;
            match?: ObjectAndType | ObjectAndType[] | undefined;
        }>
        | undefined;
    normalize?: ((editor: Editor, error: SlateError) => void) | undefined;
    parent?: ObjectAndType | ObjectAndType[] | undefined;
    text?: RegExp | ((text: string) => boolean) | undefined;
    previous?: ObjectAndType | ObjectAndType[] | undefined;
}

export interface SchemaProperties {
    rules?: Array<{ match: ObjectAndType | ObjectAndType[] } & Rules> | undefined;
    document?: Rules | undefined;
    blocks?: RulesByNodeType | undefined;
    inlines?: RulesByNodeType | undefined;
    marks?: RulesByNodeType | undefined;
    annotations?: RulesByNodeType | undefined;
    decorations?: RulesByNodeType | undefined;
}

export type Path = Immutable.List<number> | number[] | string;
export interface ValueProperties {
    object?: "value" | undefined;
    annotations?: Immutable.Map<string, Annotation> | { [key: string]: AnnotationJSON } | undefined;
    data?: Data | { [key: string]: any } | undefined;
    document?: Document | undefined;
    selection?: Selection | undefined;
}

export interface ValueJSON {
    object?: "value" | undefined;
    annotations?: { [key: string]: AnnotationJSON } | undefined;
    data?: { [key: string]: any } | undefined;
    document?: DocumentJSON | undefined;
    selection?: SelectionJSON | undefined;
}

export class Value extends Immutable.Record({}) {
    object: "value";
    annotations: Immutable.Map<string, Annotation>;
    data: Data;
    document: Document;
    selection: Selection;

    readonly startBlock: Block;
    readonly endBlock: Block;
    readonly anchorBlock: Block;
    readonly focusBlock: Block;
    readonly nextBlock: Block;
    readonly previousBlock: Block;

    readonly startInline: Inline;
    readonly endInline: Inline;
    readonly anchorInline: Inline;
    readonly focusInline: Inline;
    readonly nextInline: Inline;
    readonly previousInline: Inline;

    readonly startText: Text;
    readonly endText: Text;
    readonly anchorText: Text;
    readonly focusText: Text;
    readonly nextText: Text;
    readonly previousText: Text;

    readonly marks: Immutable.OrderedSet<Mark>;
    readonly activeMarks: Immutable.OrderedSet<Mark>;
    readonly blocks: Immutable.List<Block>;
    readonly fragment: Document;
    readonly inlines: Immutable.List<Inline>;
    readonly texts: Immutable.List<Text>;

    static create(properties?: ValueProperties | ValueJSON | Value): Value;
    static createProperties(attrs: ValueProperties | ValueJSON | Value): ValueProperties;
    static fromJSON(properties: ValueProperties | ValueJSON): Value;
    static fromJS(properties: ValueProperties | ValueJSON): Value;
    static isValue(maybeValue: any): maybeValue is Value;

    toJSON(options?: {
        preserveAnnotations?: boolean | undefined;
        preserveData?: boolean | undefined;
        preserveSelection?: boolean | undefined;
    }): ValueJSON;
    toJS(options?: {
        preserveAnnotations?: boolean | undefined;
        preserveData?: boolean | undefined;
        preserveSelection?: boolean | undefined;
    }): ValueJSON;
    addAnnotation(annotation: Annotation | AnnotationProperties | AnnotationJSON): Value;
    addMark(path: Path, mark: MarkProperties | MarkJSON | Mark | string): Value;
    insertNode(path: Path, node: Node): Value;
    insertText(
        path: Path,
        offset: number,
        text: string,
    ): Value;
    mergeNode(path: Path): Value;
    moveNode(path: Immutable.List<number>, newPath: Immutable.List<number>, newIndex?: number): Value;
    removeAnnotation(annotation: Annotation | AnnotationProperties | AnnotationJSON): Value;
    removeMark(path: Path, mark: MarkProperties | MarkJSON | Mark | string): Value;
    removeNode(path: Path): Value;
    removeText(path: Path, offset: number, text: string): Value;
    setAnnotation(
        properties: AnnotationProperties | AnnotationJSON | Annotation,
        newProperties: AnnotationProperties | AnnotationJSON | Annotation,
    ): Value;
    setNode(path: Path, properties: NodeProperties): Value;
    setMark(
        path: Path,
        properties: MarkProperties,
        newProperties: MarkProperties,
    ): Value;
    setProperties(properties: ValueProperties): Value;
    setSelection(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType
            | string,
    ): Value;
    splitNode(
        path: Path,
        position: number,
        properties: NodeProperties,
    ): Value;
    mapRanges(iterator: (val: Selection | Annotation) => any): Value;
    mapPoints(iterator: (point: Point) => Point): Value;
}

export interface DocumentProperties {
    object?: "document" | undefined;
    nodes?: Immutable.List<Node> | Node[] | undefined;
    key?: string | undefined;
    data?: Data | { [key: string]: any } | undefined;
}

export interface DocumentJSON {
    object?: "document" | undefined;
    nodes?: NodeJSON[] | undefined;
    key?: string | undefined;
    data?: { [key: string]: any } | undefined;
}

export class Document extends BaseNode {
    object: "document";

    static create(
        properties:
            | DocumentProperties
            | DocumentJSON
            | Document
            | Array<NodeJSON | NodeProperties | Node>
            | Immutable.List<NodeJSON | NodeProperties | Node>,
    ): Document;
    static fromJSON(properties: DocumentJSON | DocumentProperties | Document): Document;
    static fromJS(properties: DocumentJSON | DocumentProperties | Document): Document;
    static isDocument(maybeDocument: any): maybeDocument is Document;

    toJSON(): DocumentJSON;
    toJS(): DocumentJSON;
}

export interface BlockProperties {
    object?: "block" | undefined;
    type: string;
    key?: string | undefined;
    nodes?: Immutable.List<Block | Text | Inline> | Array<Block | Text | Inline> | undefined;
    data?: Data | { [key: string]: any } | undefined;
}

export interface BlockJSON {
    object?: "block" | undefined;
    type: string;
    key?: string | undefined;
    nodes?: Array<BlockJSON | InlineJSON | TextJSON> | undefined;
    data?: { [key: string]: any } | undefined;
}

export class Block extends BaseNode {
    object: "block";
    nodes: Immutable.List<Block | Text | Inline>;

    static create(
        properties:
            | BlockProperties
            | BlockJSON
            | Block
            | string,
    ): Block;
    static createList(
        array?:
            | Array<BlockProperties | BlockJSON | Block | string>
            | Immutable.List<BlockProperties | BlockJSON | Block | string>,
    ): Immutable.List<Block>;
    static fromJSON(properties: BlockJSON | BlockProperties | Block): Block;
    static fromJS(properties: BlockJSON | BlockProperties | Block): Block;
    static isBlock(maybeBlock: any): maybeBlock is Block;
    static isBlockList(
        maybeBlockList: any,
    ): maybeBlockList is Immutable.List<Block>;

    toJSON(): BlockJSON;
    toJS(): BlockJSON;
}

export interface InlineProperties {
    object?: "inline" | undefined;
    type: string;
    key?: string | undefined;
    nodes?: Immutable.List<Inline | Text> | Array<Inline | Text> | undefined;
    data?: Data | { [key: string]: any } | undefined;
}

export interface InlineJSON {
    object?: "inline" | undefined;
    type: string;
    key?: string | undefined;
    nodes?: Array<InlineJSON | TextJSON> | undefined;
    data?: { [key: string]: any } | undefined;
}

export class Inline extends BaseNode {
    object: "inline";
    nodes: Immutable.List<Inline | Text>;

    static create(
        properties:
            | InlineProperties
            | InlineJSON
            | Inline
            | string,
    ): Inline;
    static createList(
        elements?:
            | Immutable.List<InlineProperties | InlineJSON | Inline | string>
            | Array<InlineProperties | InlineJSON | Inline | string>,
    ): Immutable.List<Inline>;
    static fromJSON(
        properties:
            | InlineProperties
            | InlineJSON
            | Inline,
    ): Inline;
    static fromJS(
        properties:
            | InlineProperties
            | InlineJSON
            | Inline,
    ): Inline;
    static isInline(maybeInline: any): maybeInline is Inline;
    static isInlineList(
        maybeInlineList: any,
    ): maybeInlineList is Immutable.List<Inline>;

    toJSON(): InlineJSON;
    toJS(): InlineJSON;
}

export interface TextProperties {
    object?: "text" | undefined;
    key?: string | undefined;
    text?: string | undefined;
    marks?: Immutable.Set<Mark> | Mark[] | undefined;
}

export interface TextJSON {
    object?: "text" | undefined;
    key?: string | undefined;
    text?: string | undefined;
    marks?: MarkJSON[] | undefined;
}

export interface LeafAndOffset {
    startOffset: number;
    endOffset: number;
    index: number;
    leaf: Leaf;
}

export class Text extends Immutable.Record({}) {
    object: "text";
    key: string;

    readonly text: string;
    readonly marks: Immutable.Set<Mark> | null;

    static create(properties?: TextProperties | TextJSON | Text | string): Text;
    static createList(
        elements?:
            | Array<TextProperties | TextJSON | Text | string>
            | Immutable.List<TextProperties | TextJSON | Text | string>,
    ): Immutable.List<Text>;
    static fromJSON(properties: TextJSON | TextProperties | Text): Text;
    static fromJS(properties: TextJSON | TextProperties | Text): Text;
    static isText(maybeText: any): maybeText is Text;
    static isTextList(maybeTextList: any): maybeTextList is Immutable.List<Text>;

    toJSON(options?: { preserveKeys?: boolean | undefined }): TextJSON;
    toJS(options?: { preserveKeys?: boolean | undefined }): TextJSON;

    addMark(mark: MarkProperties | MarkJSON | Mark | string): Text;
    addMarks(
        marks:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Text;
    getKeysToPathsTable(): { [key: string]: number[] };
    getLeaves(
        annotations: Immutable.Map<string, Annotation>,
        decorations?: Decoration[] | Immutable.List<Decoration>,
    ): Immutable.List<Leaf>;
    getFirstText(): Text | null;
    getLastText(): Text | null;
    getText(): string;
    getNode(path: Path): Node | null;
    getPath(key: Immutable.List<number> | string | Node): Immutable.List<number> | null;
    hasNode(path: Path): boolean;
    insertText(index: number, string: string): Text;
    regenerateKey(): Text;
    removeMark(mark: MarkProperties | MarkJSON | Mark | string): Text;
    removeText(index: number, length: number): Text;
    resolvePath(path: Path, index?: number): Immutable.List<number>;
    setMark(
        properties: MarkProperties | MarkJSON | Mark | string,
        newProperties: MarkProperties,
    ): Text;
    splitText(index: number): Text[];
    mergeText(other: Text): Text;
    normalize(editor: Editor): () => void | void;
    validate(editor: Editor): Error | void;
}

export interface LeafProperties {
    object?: "leaf" | undefined;
    marks?: Immutable.Set<Mark> | Mark[] | undefined;
    text?: string | undefined;
}

export interface LeafJSON {
    object?: "leaf" | undefined;
    marks?: MarkJSON[] | undefined;
    text?: string | undefined;
}

export class Leaf extends Immutable.Record({}) {
    object: "leaf";
    marks: Immutable.Set<Mark> | null;
    text: string;

    static create(properties: LeafProperties | LeafJSON | Leaf): Leaf;
    static createLeaves(leaves: Immutable.List<Leaf>): Immutable.List<Leaf>;
    static splitLeaves(
        leaves: Immutable.List<Leaf>,
        offset: number,
    ): Array<Immutable.List<Leaf>>;
    static createList(
        attrs?:
            | Array<LeafProperties | LeafJSON | Leaf>
            | Immutable.List<LeafProperties | LeafJSON | Leaf>,
    ): Immutable.List<Leaf>;
    static fromJSON(properties: LeafJSON | LeafProperties): Leaf;
    static fromJS(properties: LeafJSON | LeafProperties): Leaf;
    static isLeaf(maybeLeaf: any): maybeLeaf is Leaf;
    static isLeafList(
        maybeLeafList: any,
    ): maybeLeafList is Immutable.List<Leaf>;

    updateMark(mark: Mark, newMark: Mark): Leaf;
    addMarks(marks: Immutable.Set<Mark>): Leaf;
    addMark(mark: Mark): Leaf;
    removeMark(mark: Mark): Leaf;

    insertText(offset: number, string: string): Leaf;

    toJSON(): LeafJSON;
    toJS(): LeafJSON;
}

interface IterableOptions {
    direction?: string | undefined;
    downward?: boolean | undefined;
    upward?: boolean | undefined;
    includeBlocks?: boolean | undefined;
    includeDocument?: boolean | undefined;
    includeInlines?: boolean | undefined;
    includeRoot?: boolean | undefined;
    includeTarget?: boolean | undefined;
    includeTargetAncestors?: boolean | undefined;
    includeTexts?: boolean | undefined;
    match?: ((node: Node, path: Immutable.List<number>) => boolean | null) | undefined;
    range?: RangeProperties | RangeJSON | Range | undefined;
    path?: Path | undefined;
}

export namespace NodeFactory {
    function create(attrs: Node | NodeJSON | NodeProperties): Node;
    function createList(
        elements?:
            | Array<Node | NodeJSON | NodeProperties>
            | Immutable.List<Node | NodeJSON | NodeProperties>,
    ): Immutable.List<Node>;
    function createProperties(
        attrs?: Block | Inline | string | { type?: string | undefined; data?: object | undefined },
    ): NodeProperties;
    function fromJSON(value: { [key: string]: any }): NodeJSON;
    function fromJS(value: { [key: string]: any }): NodeJSON;
    function isNode(maybeNode: any): maybeNode is Node;
    function isNodeList(maybeNodeList: any): maybeNodeList is Immutable.List<Node>;
}

export type Node = Document | Block | Inline | Text;
export type NodeJSON = DocumentJSON | BlockJSON | InlineJSON | TextJSON;
export type NodeProperties =
    | DocumentProperties
    | BlockProperties
    | InlineProperties
    | TextProperties;

declare class BaseNode extends Immutable.Record({}) {
    data: Data;
    type: string;
    key: string;
    object: "document" | "block" | "inline" | "text";
    nodes: Immutable.List<Node>;

    readonly text: string;

    static isNode(maybeNode: any): maybeNode is Node;
    static isNodeList(
        maybeNodeList: any,
    ): maybeNodeList is Immutable.List<Node>;
    static createProperties(
        attrs: NodeProperties | string | Node,
    ): NodeProperties;
    static fromJSON(value: NodeJSON | NodeProperties | Node): Node;
    static fromJS(value: NodeJSON | NodeProperties | Node): Node;

    addMark(path: Path, mark: Mark): Node;
    ancestors(path: Path): Iterable<[Node, Immutable.List<number>]>;
    blocks(
        options?: IterableOptions & {
            onlyLeaves?: boolean | undefined;
            onlyRoots?: boolean | undefined;
            onlyTypes?: string[] | undefined;
        },
    ): Iterable<[Block, Immutable.List<number>]>;
    createAnnotation(properties: AnnotationProperties | AnnotationJSON | Annotation): Annotation;
    createDecoration(properties: DecorationProperties | DecorationJSON | Decoration): Decoration;
    createIterable(options?: IterableOptions): Iterable<[Node, Immutable.List<number>]>;
    createPoint(properties: PointProperties | PointJSON | Point): Point;
    createRange(properties: RangeTypeProperties | RangeTypeJSON | RangeType): Range;
    createSelection(properties: SelectionProperties | SelectionJSON | Selection | Range): Selection;
    descendants(options?: IterableOptions): Iterable<[Node, Immutable.List<number>]>;
    filterDescendants(predicate?: (node: Node, path: Immutable.List<number>) => boolean): Immutable.List<Node>;
    findDescendant(predicate?: (node: Node, path: Immutable.List<number>) => boolean): Node | null;
    forEachDescendant(predicate?: (node: Node, path: Immutable.List<number>) => boolean): void;
    getActiveMarksAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.Set<Mark>;
    getAncestors(path: Path): Immutable.List<Node> | null;
    getBlocks(): Immutable.List<Block>;
    getBlocksByType(type: string): Immutable.List<Block>;
    getChild(path: Path): Node | null;
    getClosest(path: Path, predicate: (node: Node, path: Immutable.List<number>) => boolean): Node | null;
    getClosestBlock(path: Path): Block | null;
    getClosestInline(path: Path): Inline | null;
    getClosestVoid(path: Path, editor: Editor): Node | null;
    getCommonAncestor(a: Path, b: Path): Node | null;
    getDecorations(editor: Editor): Immutable.List<Decoration>;
    getDepth(path: Path, startAt?: number): number | null;
    getDescendant(path: Path): Node | null;
    getDescendantsAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Node>;
    getFirstText(): Text | null;
    getFragmentAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Document;
    getFurthest(path: Path, predicate?: (node: Node, path: Immutable.List<number>) => boolean): Node | null;
    getFurthestBlock(path: Path): Block | null;
    getFurthestChild(path: Path): Node | null;
    getFurthestInline(path: Path): Inline | null;
    getInlines(): Immutable.List<Inline>;
    getInlinesByType(type: string): Immutable.List<Inline>;
    getInsertMarksAtPoint(point: PointProperties | PointJSON | Point): Immutable.Set<Mark>;
    getInsertMarksAtRange(range: RangeProperties | RangeJSON | Range): Immutable.Set<Mark>;
    getKeysToPathsTable(): { [key: string]: number[] };
    getLastText(): Text | null;
    getLeafBlocksAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Block>;
    getLeafInlinesAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Inline>;
    getNode(path: Path): Node | null;
    getNodesToPathsMap(): Map<Node, Immutable.List<number>>;
    getMarks(): Immutable.OrderedSet<Mark>;
    getMarksAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.OrderedSet<Mark>;
    getMarksByType(type: string): Immutable.OrderedSet<Mark>;
    getNextBlock(path: Path): Block | null;
    getNextNode(path: Path): Node | null;
    getNextSibling(path: Path): Node | null;
    getNextText(path: Path): Text | null;
    getOffset(path: Path): number;
    getOffsetAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): number;
    getParent(path: Path): Node | null;
    getPath(key: Immutable.List<number> | string | Node): Immutable.List<number> | null;
    getPreviousBlock(path: Path): Block | null;
    getPreviousNode(path: Path): Node | null;
    getPreviousSibling(path: Path): Node | null;
    getPreviousText(path: Path): Text | null;
    getRootBlocksAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Block>;
    getRootInlinesAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Inline>;
    getText(): string;
    getTextAtOffset(offset: number): Text | null;
    getTextDirection(): string | null;
    getTexts(): Immutable.List<Text>;
    getTextsAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Immutable.List<Text>;
    hasBlockChildren(): boolean;
    hasChild(path: Path): boolean;
    hasInlineChildren(): boolean;
    hasDescendant(path: Path): boolean;
    hasNode(path: Path): boolean;
    hasVoidParent(path: Path, editor: Editor): boolean;
    inlines(
        options?: IterableOptions & {
            onlyLeaves?: boolean | undefined;
            onlyRoots?: boolean | undefined;
            onlyTypes?: string[] | undefined;
        },
    ): Iterable<[Inline, Immutable.List<number>]>;
    insertNode(path: Path, node: Node): Node;
    insertText(
        path: Path,
        offset: number,
        text: string,
    ): Node;
    isLeafBlock(): this is Block;
    isLeafInline(): this is Inline;
    isInRange(path: Path, range: RangeTypeProperties | RangeTypeJSON | RangeType): boolean;
    mapChildren(predicate?: (node: Node, index: number, nodes: Immutable.List<Node>) => Node): Node;
    mapDescendants(predicate?: (node: Node, index: number, nodes: Immutable.List<Node>) => Node): Node | void;
    marks(options?: IterableOptions & { onlyTypes: string[] }): Iterable<[Mark, Node, Immutable.List<number>]>;
    mergeNode(path: Path): Node;
    moveNode(path: Path, newPath: Path, newIndex?: number): Node;
    normalize(editor: Editor): () => void | void;
    regenerateKey(): Node;
    removeMark(path: Path, mark: Mark): Node;
    removeNode(path: Path): Node;
    removeText(path: Path, offset: number, text: string): Node;
    replaceNode(path: Path, node: Node): Node;
    resolveAnnotation(annotation: Annotation | AnnotationProperties | AnnotationJSON): Annotation;
    resolveDecoration(decoration: RangeType | RangeTypeProperties | RangeTypeJSON): Decoration;
    resolvePath(path: Path, index?: number): Immutable.List<number>;
    resolvePoint(point: Point | PointProperties | PointJSON): Point;
    resolveRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Range;
    resolveSelection(selection: Selection | SelectionProperties | SelectionJSON | Range): Selection;
    setNode(path: Path, properties: NodeProperties): Node;
    setMark(
        path: Path,
        properties: MarkProperties,
        newProperties: MarkProperties,
    ): Node;
    siblings(path: Path, options?: IterableOptions): Iterable<[Node, Immutable.List<number>]>;
    splitNode(path: Path, position: number, properties: NodeProperties): Node;
    texts(options: IterableOptions): Iterable<[Text, Immutable.List<number>]>;
    validate(editor: Editor): Error | void;

    /**
     * Deprecated.
     */

    getBlocksAtRange(range: RangeProperties | RangeJSON | Range): Immutable.List<Block>;
    getBlocksAtRangeAsArray(range: RangeProperties | RangeJSON | Range): Block[];
    getInlinesAtRange(range: RangeProperties | RangeJSON | Range): Immutable.List<Inline>;
    getInlinesAtRangeAsArray(range: RangeProperties | RangeJSON | Range): Inline[];
    getNextTextAndPath(path: Path): Text | null;
    getNextDeepMatchingNodeAndPath(
        path: Immutable.List<number>,
        iterator?: () => boolean,
    ): null | [Node, Immutable.List<number>];
    getPreviousTextAndPath(path: Path): Text | null;
    findFirstDescendantAndPath(
        iterator: (
            node: Node,
            path: Immutable.List<number>,
            nodes: Immutable.List<Node>,
        ) => boolean,
        pathToThisNode: Immutable.List<number>,
    ): [Node, Immutable.List<number>] | null;
    getPreviousMatchingNodeAndPath(
        path: Immutable.List<number>,
        iterator?: (node: Node) => boolean,
    ): [Node, Immutable.List<number>] | null;
    getPreviousDeepMatchingNodeAndPath(
        path: Immutable.List<number>,
        iterator?: (node: Node) => boolean,
    ): [Node, Immutable.List<number>] | null;
    findLastDescendantAndPath(
        iterator: (
            node: Node,
            path: Immutable.List<number>,
            nodes: Immutable.List<Node>,
        ) => boolean,
        pathToThisNode: Immutable.List<number>,
    ): [Node, Immutable.List<number>] | null;
    findDescendantAndPath(
        iterator: (
            node: Node,
            path: Immutable.List<number>,
            nodes: Immutable.List<Node>,
        ) => boolean,
        path?: Immutable.List<number>,
        findLast?: boolean,
    ): [Node, Immutable.List<number>] | null;
    forEachDescendantWithPath(
        iterator: (
            node: Node,
            path: Immutable.List<number>,
            nodes: Immutable.List<Node>,
        ) => boolean,
        path?: Immutable.List<number>,
        findLast?: boolean,
    ): boolean;
    getNextMatchingNodeAndPath(
        path: Immutable.List<number>,
        iterator?: (node: Node) => boolean,
    ): [Node, Immutable.List<number>] | null;
    getSelectionIndexes(range: RangeType, isSelected?: boolean): { start: number; end: number } | boolean | null;
    getTextsBetweenPositionsAsArray(startPath: Path, endPath: Path): Array<Node | null>;
    getOrderedMarksBetweenPositions(
        startPath: Path,
        startOffset: number,
        endPath: Path,
        endOffset: number,
    ): Immutable.OrderedSet<Mark>;
    getTextsBetweenPathPositionsAsArray(
        startPath: Immutable.List<number>,
        endPath: Immutable.List<number>,
    ): Array<Node | null>;
    getFurthestAncestor(path: Path): Node | null;
    getLeafBlocksAtRangeAsArray(range: Range | RangeProperties | RangeJSON): Block[];
    getLeafBlocksBetweenPathPositionsAsArray(
        startPath: Immutable.List<number>,
        endPath: Immutable.List<number>,
    ): Block[];
    getBlocksAsArray(): Block[];
    getBlocksByTypeAsArray(type: string): Block[];
    getFurthestOnlyChildAncestor(path: Path): Node | null;
    getInlinesAsArray(): Inline[];
    getInlinesByTypeAsArray(type: string): Inline[];
    getLeafInlinesAtRangeAsArray(range: Range | RangeProperties | RangeJSON): Inline[];
    getOrderedMarks(): Immutable.OrderedSet<Mark>;
    getOrderedMarksAtRange(range: RangeProperties | RangeJSON | Range): Immutable.OrderedSet<Mark>;
    getOrderedMarksByType(type: string): Immutable.OrderedSet<Mark>;
    getOrderedMarksByTypeAsArray(type: string): Mark[];
    getMarksAsArray(): Mark[];
    getRootInlinesAtRangeAsArray(range: RangeProperties | RangeJSON | Range): Inline[];
    getTextsAsArray(): Text[];
    getTextsAtRangeAsArray(range: RangeProperties | RangeJSON | Range): Text[];
    getMarksAtPosition(path: Path, offset: number): Immutable.OrderedSet<Mark>;
    getNodesAtRange(range: RangeProperties | RangeJSON | Range): boolean;
    isNodeInRange(path: Path, range: RangeProperties | RangeJSON | Range): boolean;

    /**
     * Assertion variants.
     */

    assertChild(path: Path): Node;
    assertDepth(path: Path, startAt?: number): number;
    assertDescendant(path: Path): Node;
    assertNode(path: Path): Node;
    assertParent(path: Path): Node;
    assertPath(key: Path): Immutable.List<number>;
}

export interface MarkProperties {
    object?: "mark" | undefined;
    type: string;
    data?: Data | { [key: string]: any } | undefined;
}

export interface MarkJSON {
    object?: "mark" | undefined;
    type: string;
    data?: { [key: string]: any } | undefined;
}

export class Mark extends Immutable.Record({}) {
    object: "mark";
    type: string;
    data: Data;

    static create(properties: MarkProperties | MarkJSON | Mark | string): Mark;
    static createSet(
        element?:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Immutable.Set<Mark>;
    static createProperties(attrs: Partial<MarkProperties | MarkJSON | Mark | string>): MarkProperties;
    static fromJSON(properties: MarkProperties | MarkJSON | Mark): Mark;
    static fromJS(properties: MarkProperties | MarkJSON | Mark): Mark;
    static isMark(maybeMark: any): maybeMark is Mark;
    static isMarkSet(maybeMarkSet: any): maybeMarkSet is Immutable.Set<Mark>;

    toJSON(): MarkJSON;
    toJS(): MarkJSON;
}

export interface SelectionProperties {
    object?: "selection" | undefined;
    anchor?: Point | undefined;
    focus?: Point | undefined;
    isFocused?: boolean | undefined;
    marks?: Immutable.Set<Mark> | Mark[] | undefined;
}

export interface SelectionJSON {
    object?: "selection" | undefined;
    anchor?: PointJSON | undefined;
    focus?: PointJSON | undefined;
    isFocused?: boolean | undefined;
    marks?: MarkJSON[] | undefined;
}

export class Selection extends BaseRange {
    object: "selection";
    anchor: Point;
    focus: Point;
    isFocused: boolean;
    marks: Immutable.Set<Mark>;

    readonly isBlurred: boolean;

    static create(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType,
    ): Selection;
    static createProperties(
        attrs:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType
            | string,
    ): SelectionProperties;
    static fromJSON(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON,
    ): Selection;
    static fromJS(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON,
    ): Selection;

    toJSON(): SelectionJSON;
    toJS(): SelectionJSON;

    isSelection(maybeSelection: any): maybeSelection is Selection;
    setIsFocused(value: boolean): Selection;
    setMarks(marks: Immutable.Set<Mark>): Selection;
    setProperties(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType
            | string,
    ): Selection;
}

export interface RangeProperties {
    object?: "range" | undefined;
    anchor?: Point | undefined;
    focus?: Point | undefined;
}

export interface RangeJSON {
    object?: "range" | undefined;
    anchor?: PointJSON | undefined;
    focus?: PointJSON | undefined;
}

export class Range extends BaseRange {
    object: "range";
    anchor: Point;
    focus: Point;

    static create(properties: RangeTypeProperties | RangeTypeJSON | RangeType): Range;
    static createList(
        elements?:
            | Array<RangeTypeProperties | RangeTypeJSON | RangeType>
            | Immutable.List<RangeTypeProperties | RangeTypeJSON | RangeType>,
    ): Immutable.List<Range>;
    static createProperties(
        attrs: RangeTypeProperties | RangeTypeJSON | RangeType,
    ): RangeProperties;
    static fromJSON(properties: RangeTypeJSON): Range;
    static fromJS(properties: RangeTypeJSON): Range;
    static isRange(maybeRange: any): maybeRange is RangeType;

    toJSON(options?: { preserveKeys?: boolean | undefined }): RangeJSON;
    toJS(options?: { preserveKeys?: boolean | undefined }): RangeJSON;
}

export interface DecorationProperties {
    object?: "decoration" | undefined;
    anchor?: Point | undefined;
    focus?: Point | undefined;
    type?: string | undefined;
    data?: Data | { [key: string]: any } | undefined;
}

export interface DecorationJSON {
    object?: "decoration" | undefined;
    anchor?: PointJSON | undefined;
    focus?: PointJSON | undefined;
    type?: string | undefined;
    data?: { [key: string]: any } | undefined;
}

export class Decoration extends BaseRange {
    object: "decoration";
    anchor: Point;
    focus: Point;
    type: string;
    data: Data;

    static create(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType,
    ): Decoration;
    static createList(
        elements?:
            | Array<RangeTypeProperties | RangeTypeJSON | RangeType>
            | Immutable.List<RangeTypeProperties | RangeTypeJSON | RangeType>,
    ): Immutable.List<Decoration>;
    static createProperties(
        attrs: RangeTypeProperties | RangeTypeJSON | RangeType,
    ): DecorationProperties;
    static fromJSON(properties: DecorationJSON & { mark?: MarkJSON | undefined }): Decoration;
    static fromJSON(properties: DecorationJSON & { mark?: MarkJSON | undefined }): Decoration;
    static isDecoration(maybeDecoration: any): maybeDecoration is Decoration;

    setProperties(properties: RangeTypeProperties | RangeTypeJSON | RangeType): Decoration;

    toJSON(): DecorationJSON;
    toJS(): DecorationJSON;
}

export interface AnnotationProperties {
    object?: "annotation" | undefined;
    key: string;
    type: string;
    data?: Data | { [key: string]: any } | undefined;
    anchor?: Point | undefined;
    focus?: Point | undefined;
}

export interface AnnotationJSON {
    object?: "annotation" | undefined;
    key: string;
    type: string;
    data?: { [key: string]: any } | undefined;
    anchor?: PointJSON | undefined;
    focus?: PointJSON | undefined;
}

export class Annotation extends BaseRange {
    object: "annotation";
    key: string;
    type: string;
    data: Data;
    anchor: Point;
    focus: Point;

    static create(properties: Annotation | AnnotationProperties | AnnotationJSON): Annotation;
    static createMap(
        elements?:
            | { [key: string]: Annotation | AnnotationProperties | AnnotationJSON }
            | Immutable.Map<string, Annotation>,
    ): Immutable.Map<string, Annotation>;
    static createProperties(
        attrs: AnnotationProperties | AnnotationJSON | Annotation,
    ): AnnotationProperties;
    static fromJSON(properties: AnnotationProperties | AnnotationJSON): Annotation;
    static fromJS(properties: AnnotationProperties | AnnotationJSON): Annotation;
    static isAnnotation(maybeAnnotation: any): maybeAnnotation is Annotation;

    toJSON(): AnnotationJSON;
    toJS(): AnnotationJSON;

    setProperties(properties: AnnotationProperties | AnnotationJSON | Annotation): Annotation;
}

export type RangeTypeProperties =
    | RangeProperties
    | SelectionProperties
    | DecorationProperties
    | AnnotationProperties;

export type RangeTypeJSON = RangeJSON | SelectionJSON | DecorationJSON | AnnotationJSON;
export type RangeType = Range | Selection | Decoration | Annotation;

declare class BaseRange extends Immutable.Record({}) {
    readonly isCollapsed: boolean;
    readonly isExpanded: boolean;
    readonly isBackward: boolean;
    readonly isForward: boolean;
    readonly isUnset: boolean;
    readonly isSet: boolean;
    readonly start: Point;
    readonly end: Point;

    flip(): RangeType;
    moveForward(n?: number): RangeType;
    moveBackward(n?: number): RangeType;

    moveAnchorBackward(n?: number): RangeType;
    moveAnchorForward(n?: number): RangeType;
    moveAnchorTo(path: string | number | Immutable.List<number>, offset?: number): RangeType;
    moveAnchorToStartOfNode(node: Node): RangeType;
    moveAnchorToEndOfNode(node: Node): RangeType;

    moveEndBackward(n?: number): RangeType;
    moveEndForward(n?: number): RangeType;
    moveEndTo(path: string | number | Immutable.List<number>, offset?: number): RangeType;
    moveEndToStartOfNode(node: Node): RangeType;
    moveEndToEndOfNode(node: Node): RangeType;

    moveFocusBackward(n?: number): RangeType;
    moveFocusForward(n?: number): RangeType;
    moveFocusTo(path: string | number | Immutable.List<number>, offset?: number): RangeType;
    moveFocusToStartOfNode(node: Node): RangeType;
    moveFocusToEndOfNode(node: Node): RangeType;

    moveStartBackward(n?: number): RangeType;
    moveStartForward(n?: number): RangeType;
    moveStartTo(path: string | number | Immutable.List<number>, offset?: number): RangeType;
    moveStartToStartOfNode(node: Node): RangeType;
    moveStartToEndOfNode(node: Node): RangeType;

    moveToAnchor(): RangeType;
    moveToEnd(): RangeType;
    moveToEndOfNode(node: Node): RangeType;
    moveToFocus(): RangeType;
    moveToRangeOfNode(start: Node, end?: Node): RangeType;
    moveToStart(): RangeType;
    moveToStartOfNode(node: Node): RangeType;

    normalize(node: Node): RangeType;

    setAnchor(anchor: Point): RangeType;
    setEnd(point: Point): RangeType;
    setFocus(focus: Point): RangeType;
    setIsAtomic(value: boolean): RangeType;
    setIsFocused(value: boolean): RangeType;
    setMarks(marks: Immutable.Set<Mark>): RangeType;
    setPoints(values: Point[]): RangeType;
    updatePoints(updater: (point: Point) => Point): RangeType;
    setStart(point: Point): RangeType;
    setProperties(
        properties: RangeTypeProperties | RangeTypeJSON | RangeType,
    ): RangeType;

    toJSON(): RangeTypeJSON;
    toJS(): RangeTypeJSON;
    toRange(): RangeType;
    unset(): RangeType;
}

export interface PointProperties {
    object?: "point" | undefined;
    key?: string | undefined;
    offset?: number | undefined;
    path?: Immutable.List<number> | undefined;
}

export interface PointJSON {
    object?: "point" | undefined;
    key?: string | undefined;
    offset?: number | undefined;
    path?: number[] | undefined;
}

export class Point extends Immutable.Record({}) {
    object: "point";
    key: string;
    offset: number;
    path: Immutable.List<number>;

    static create(properties: PointProperties | PointJSON | Point): Point;
    static createProperties(properties: PointProperties | PointJSON | Point): Point;
    static fromJSON(properties: PointJSON | PointProperties): Point;
    static fromJS(properties: PointJSON | PointProperties): Point;
    static isPoint(maybePoint: any): maybePoint is Point;

    readonly isSet: boolean;
    readonly isUnset: boolean;

    isAfterPoint(point: Point): boolean;
    isAfterRange(range: RangeType): boolean;
    isAtEndofRange(range: RangeType): boolean;
    isAtStartOfRange(range: RangeType): boolean;
    isBeforePoint(point: Point): boolean;
    isBeforeRange(range: RangeType): boolean;
    isInRange(range: RangeType): boolean;
    isAtEndOfNode(node: Node): boolean;
    isAtStartOfNode(node: Node): boolean;
    isInNode(node: Node): boolean;

    moveBackward(n?: number): this;
    moveForward(n?: number): this;
    moveTo(path: string | number | Immutable.List<number>, offset?: number): this;
    moveToStartOfNode(node: Node): this;
    moveToEndOfNode(node: Node): this;
    normalize(node: Node): this;
    setKey(key: string): this;
    setOffset(offset: number): this;
    setPath(path: Immutable.List<number> | number[]): this;
    toJSON(options?: { preserveKeys?: boolean | undefined }): PointJSON;
    toJS(options?: { preserveKeys?: boolean | undefined }): PointJSON;
    unset(): this;
}

export type Operation =
    | InsertTextOperation
    | RemoveTextOperation
    | AddMarkOperation
    | RemoveMarkOperation
    | SetMarkOperation
    | AddAnnotationOperation
    | RemoveAnnotationOperation
    | SetAnnotationOperation
    | InsertNodeOperation
    | MergeNodeOperation
    | MoveNodeOperation
    | RemoveNodeOperation
    | SetNodeOperation
    | SplitNodeOperation
    | SetSelectionOperation
    | SetValueOperation;

export interface OperationProperties {
    object?: "operation" | undefined;
    type: string;
    text?: string | undefined;
    target?: number | undefined;
    properties?:
        | NodeProperties
        | ValueProperties
        | SelectionProperties
        | AnnotationProperties
        | undefined;
    position?: number | undefined;
    path?: Immutable.List<number> | undefined;
    offset?: number | undefined;
    node?: Node | undefined;
    newProperties?:
        | NodeProperties
        | ValueProperties
        | SelectionProperties
        | MarkProperties
        | AnnotationProperties
        | undefined;
    newPath?: Immutable.List<number> | undefined;
    mark?: Mark | undefined;
    data?: Data | { [key: string]: any } | undefined;
    annotation?: Annotation | undefined;
}

export interface OperationJSON {
    object?: "operation" | undefined;
    type: string;
    text?: string | undefined;
    target?: number | undefined;
    properties?:
        | NodeJSON
        | ValueJSON
        | SelectionJSON
        | AnnotationJSON
        | undefined;
    position?: number | undefined;
    path?: number[] | undefined;
    offset?: number | undefined;
    node?: Node | undefined;
    newProperties?:
        | NodeJSON
        | ValueJSON
        | SelectionJSON
        | MarkJSON
        | AnnotationJSON
        | undefined;
    newPath?: number[] | undefined;
    mark?: MarkJSON | undefined;
    data?: { [key: string]: any } | undefined;
    annotation?: AnnotationJSON | undefined;
}

export class BaseOperation extends Immutable.Record({}) {
    object: "operation";
    type: string;

    static create(attrs?: Operation | OperationProperties | OperationJSON): Operation;
    static createList():
        | Immutable.List<Operation | OperationProperties | OperationJSON>
        | Array<Operation | OperationProperties | OperationJSON>;

    static fromJSON(object: OperationProperties | OperationJSON): Operation;
    static fromJS(object: OperationProperties | OperationJSON): Operation;

    static isOperation(maybeOperation: any): maybeOperation is Operation;
    static isOperationList(maybeOperationList: any): maybeOperationList is Immutable.List<Operation>;

    toJSON(): OperationJSON;

    apply(value: Value): Value;
    invert(): this;
}

export class InsertTextOperation extends BaseOperation {
    type: "insert_text";
    path: Immutable.List<number>;
    offset: number;
    text: string;
    data: Data;
}

export class RemoveTextOperation extends BaseOperation {
    type: "remove_text";
    path: Immutable.List<number>;
    offset: number;
    text: string;
    data: Data;
}

export class AddMarkOperation extends BaseOperation {
    type: "add_mark";
    path: Immutable.List<number>;
    mark: Mark;
    data: Data;
}

export class RemoveMarkOperation extends BaseOperation {
    type: "remove_mark";
    path: Immutable.List<number>;
    mark: Mark;
    data: Data;
}

export class SetMarkOperation extends BaseOperation {
    type: "set_mark";
    path: Immutable.List<number>;
    properties: MarkProperties;
    newProperties: MarkProperties;
    data: Data;
}

export class AddAnnotationOperation extends BaseOperation {
    type: "add_annotation";
    annotation: Annotation;
    data: Data;
}

export class RemoveAnnotationOperation extends BaseOperation {
    type: "remove_annotation";
    annotation: Annotation;
    data: Data;
}

export class SetAnnotationOperation extends BaseOperation {
    type: "set_annotation";
    properties: AnnotationProperties;
    newProperties: AnnotationProperties;
    data: Data;
}

export class InsertNodeOperation extends BaseOperation {
    type: "insert_node";
    path: Immutable.List<number>;
    node: Node;
    data: Data;
}

export class MergeNodeOperation extends BaseOperation {
    type: "merge_node";
    path: Immutable.List<number>;
    position: number;
    properties: NodeProperties;
    data: Data;
}

export class MoveNodeOperation extends BaseOperation {
    type: "move_node";
    path: Immutable.List<number>;
    newPath: Immutable.List<number>;
    data: Data;
}

export class RemoveNodeOperation extends BaseOperation {
    type: "remove_node";
    path: Immutable.List<number>;
    node: Node;
    data: Data;
}

export class SetNodeOperation extends BaseOperation {
    type: "set_node";
    path: Immutable.List<number>;
    properties: NodeProperties;
    newProperties: NodeProperties;
    data: Data;
}

export class SplitNodeOperation extends BaseOperation {
    type: "split_node";
    path: Immutable.List<number>;
    position: number;
    target: number;
    properties: NodeProperties;
    data: Data;
}

export class SetSelectionOperation extends BaseOperation {
    type: "set_selection";
    properties: SelectionProperties;
    newProperties: SelectionProperties;
    data: Data;
}

export class SetValueOperation extends BaseOperation {
    type: "set_value";
    properties: ValueProperties;
    newProperties: ValueProperties;
    data: Data;
}

export type ErrorCode =
    | "child_max_invalid"
    | "child_min_invalid"
    | "child_object_invalid"
    | "child_required"
    | "child_type_invalid"
    | "child_unknown"
    | "first_child_object_invalid"
    | "first_child_type_invalid"
    | "last_child_object_invalid"
    | "last_child_type_invalid"
    | "next_sibling_object_invalid"
    | "next_sibling_type_invalid"
    | "node_data_invalid"
    | "node_is_void_invalid"
    | "node_mark_invalid"
    | "node_object_invalid"
    | "node_text_invalid"
    | "node_type_invalid"
    | "parent_object_invalid"
    | "parent_type_invalid"
    | "previous_sibling_object_invalid"
    | "previous_sibling_type_invalid";

export class SlateError extends Error {
    code: ErrorCode;
    [key: string]: any;
}

export namespace KeyUtils {
    function create(key?: string): string;
    function setGenerator(func: () => any): void;
    function resetGenerator(): void;
}

export type useMemoization = (enabled: boolean) => void;
export type resetMemoization = () => void;

export namespace PathUtils {
    /**
     * Compare paths `path` and `target` to see which is before or after.
     */
    function compare(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): number | null;

    /**
     * Create a path from `attrs`.
     */
    function create(
        attrs: Immutable.List<number> | number[],
    ): Immutable.List<number>;

    /**
     * Crop paths `a` and `b` to an equal size, defaulting to the shortest.
     */
    function crop(
        a: Immutable.List<number>,
        b: Immutable.List<number>,
        size?: number,
    ): Array<Immutable.List<number>>;

    /**
     * Decrement a `path` by `n` at `index`, defaulting to the last index.
     */
    function decrement(
        path: Immutable.List<number>,
        n?: number,
        index?: number,
    ): Immutable.List<number>;

    /**
     * Get all ancestor paths of the given path.
     */
    function getAncestors(
        path: Immutable.List<number>,
    ): Immutable.List<number>;

    /**
     * Increment a `path` by `n` at `index`, defaulting to the last index.
     */
    function increment(
        path: Immutable.List<number>,
        n?: number,
        index?: number,
    ): Immutable.List<number>;

    /**
     * Is a `path` above another `target` path?
     */
    function isAbove(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is a `path` after another `target` path in a document?
     */
    function isAfter(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is a `path` before another `target` path in a document?
     */
    function isBefore(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is a `path` equal to another `target` path in a document?
     */
    function isEqual(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is a `path` older than a `target` path? Meaning that it ends as an older
     * sibling of one of the indexes in the target.
     */
    function isOlder(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is an `any` object a path?
     */
    function isPath(
        maybePath: any,
    ): maybePath is Immutable.List<number> | number[];

    /**
     * Is a `path` a sibling of a `target` path?
     */
    function isSibling(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Is a `path` younger than a `target` path? Meaning that it ends as a younger
     * sibling of one of the indexes in the target.
     */
    function isYounger(
        path: Immutable.List<number>,
        target: Immutable.List<number>,
    ): boolean;

    /**
     * Lift a `path` to refer to its `n`th ancestor.
     */
    function lift(
        path: Immutable.List<number>,
        n?: number,
    ): Immutable.List<number>;

    /**
     * Drop a `path`, returning a relative path from a depth of `n`.
     */
    function drop(
        path: Immutable.List<number>,
        n?: number,
    ): Immutable.List<number>;

    /**
     * Get the maximum length of paths `a` and `b`.
     */
    function max(
        a: Immutable.List<number>,
        b: Immutable.List<number>,
    ): number;

    /**
     * Get the minimum length of paths `a` and `b`.
     */
    function min(
        a: Immutable.List<number>,
        b: Immutable.List<number>,
    ): number;

    /**
     * Get the common ancestor path of path `a` and path `b`.
     */
    function relate(
        a: Immutable.List<number>,
        b: Immutable.List<number>,
    ): Immutable.List<number>;

    /**
     * Transform a `path` by an `operation`, adjusting it to stay current.
     */
    function transform(
        path: Immutable.List<number>,
        operation: Operation | OperationJSON | OperationProperties,
    ): Immutable.List<Immutable.List<number>>;
}

export interface Command {
    type: string;
    args: any[];
}

export interface Query {
    type: string;
    args: any[];
}

export type CommandFunc<T extends Controller = Controller> = (editor: T, ...args: any[]) => T;
export type QueryFunc<T extends Controller = Controller> = (editor: T, ...args: any[]) => any;

export interface Plugin<T extends Controller = Controller> {
    normalizeNode?: ((node: Node, editor: T, next: () => void) => ((editor: T) => void) | void) | undefined;
    onChange?: ((editor: T, next: () => void) => void) | undefined;
    onCommand?: ((command: Command, editor: T, next: () => void) => void) | undefined;
    onConstruct?: ((editor: T, next: () => void) => void) | undefined;
    onQuery?: ((query: Query, editor: T, next: () => void) => void) | undefined;
    validateNode?: ((node: Node, editor: T, next: () => void) => SlateError | void) | undefined;

    commands?: { [name: string]: CommandFunc<T> } | undefined;
    queries?: { [name: string]: QueryFunc<T> } | undefined;
    schema?: SchemaProperties | undefined;
}

export interface Plugins<T extends Controller = Controller> extends Array<Plugin<T> | Plugins<T>> {}

export interface EditorProperties<T extends Controller = Controller> {
    object?: "editor" | undefined;
    onChange?: ((change: { operations: Immutable.List<Operation>; value: Value }) => void) | undefined;
    plugins?: Plugins<T> | undefined;
    readOnly?: boolean | undefined;
    value?: Value | undefined;
}

export interface EditorOptions {
    controller?: Controller | undefined;
    construct?: boolean | undefined;
    normalize?: boolean | undefined;
}

export class Editor implements Controller {
    object: "editor";
    controller: Controller;
    middleware: object;
    onChange: (change: { operations: Immutable.List<Operation>; value: Value }) => void;
    operations: Immutable.List<Operation>;
    plugins: Array<Plugin<Editor>>;
    readOnly: boolean;
    value: Value;

    constructor(attributes: EditorProperties<Editor>, options?: EditorOptions);

    /**
     * Synchronously flush the current changes to editor, calling onChange.
     * In normal operation you never need to use this method! Reserved for testing.
     */
    flush(): Editor;

    setReadOnly(readOnly: boolean): Editor;

    /**
     * Set the editor's value state.
     * You can optionally provide a normalize option to either for the editor to completely re-normalize the new value based on its schema or not.
     * By default, the editor will re-normalize only if the value is not equal to its previously seen value (which it knows was normalized).
     */
    setValue(value: Value, options?: { normalize: boolean }): Editor;

    isEditor(maybeEditor: any): maybeEditor is Editor;

    addMark(mark: string | MarkProperties | MarkJSON | Mark): Editor;
    addMarks(
        mark: Set<string | MarkProperties | MarkJSON | Mark> | Array<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    delete(): Editor;
    deleteBackward(n?: number): Editor;
    deleteForward(n?: number): Editor;
    insertBlock(block: string | Block | BlockProperties | BlockJSON): Editor;
    insertFragment(fragment: Document): Editor;
    insertInline(inline: string | Inline | InlineProperties | InlineJSON): Editor;
    insertText(
        text: string,
        marks?:
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>
            | Array<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    setBlocks(properties: string | Block | BlockProperties | BlockJSON): Editor;
    setInlines(properties: string | Inline | InlineProperties): Editor;
    splitBlock(depth?: number): Editor;
    splitInline(depth: number): Editor;
    removeMark(mark: string | MarkProperties | MarkJSON | Mark): Editor;
    replaceMark(
        mark: string | MarkProperties | MarkJSON | Mark,
        newMark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    toggleMark(mark: string | MarkProperties | MarkJSON | Mark): Editor;
    unwrapBlock(properties: string | Block | BlockProperties | BlockJSON): Editor;
    unwrapInline(properties: string | Inline | InlineProperties | InlineJSON): Editor;
    wrapBlock(properties: string | Block | BlockProperties | BlockJSON): Editor;
    wrapInline(properties: string | Inline | InlineProperties | InlineJSON): Editor;
    wrapText(prefix: string, suffix?: string): Editor;
    blur(): Editor;
    deselect(): Editor;
    flip(): Editor;
    focus(): Editor;
    moveAnchorBackward(n?: number): Editor;
    moveAnchorWordBackward(): Editor;
    moveAnchorForward(n?: number): Editor;
    moveAnchorWordForward(): Editor;
    moveAnchorTo(path: string | number | Immutable.List<number>, offset?: number): Editor;
    moveAnchorToEndOfBlock(): Editor;
    moveAnchorToEndOfInline(): Editor;
    moveAnchorToEndOfDocument(): Editor;
    moveAnchorToEndOfNextBlock(): Editor;
    moveAnchorToEndOfNextInline(): Editor;
    moveAnchorToEndOfNextText(): Editor;
    moveAnchorToEndOfNode(node: Block | Document | Inline | Text): Editor;
    moveAnchorToEndOfPreviousBlock(): Editor;
    moveAnchorToEndOfPreviousInline(): Editor;
    moveAnchorToEndOfPreviousText(): Editor;
    moveAnchorToEndOfText(): Editor;
    moveAnchorToStartOfBlock(): Editor;
    moveAnchorToStartOfDocument(): Editor;
    moveAnchorToStartOfInline(): Editor;
    moveAnchorToStartOfNextBlock(): Editor;
    moveAnchorToStartOfNextInline(): Editor;
    moveAnchorToStartOfNextText(): Editor;
    moveAnchorToStartOfNode(node: Block | Document | Inline | Text): Editor;
    moveAnchorToStartOfPreviousBlock(): Editor;
    moveAnchorToStartOfPreviousInline(): Editor;
    moveAnchorToStartOfPreviousText(): Editor;
    moveAnchorToStartOfText(): Editor;
    moveEndBackward(n?: number): Editor;
    moveEndForward(n?: number): Editor;
    moveEndTo(path: string | number | Immutable.List<number>, offset?: number): Editor;
    moveEndToEndOfBlock(): Editor;
    moveEndToEndOfDocument(): Editor;
    moveEndToEndOfInline(): Editor;
    moveEndToEndOfNextBlock(): Editor;
    moveEndToEndOfNextInline(): Editor;
    moveEndToEndOfNextText(): Editor;
    moveEndToEndOfNode(node: Block | Document | Inline | Text): Editor;
    moveEndToEndOfPreviousBlock(): Editor;
    moveEndToEndOfPreviousInline(): Editor;
    moveEndToEndOfPreviousText(): Editor;
    moveEndToEndOfText(): Editor;
    moveEndToStartOfBlock(): Editor;
    moveEndToStartOfDocument(): Editor;
    moveEndToStartOfInline(): Editor;
    moveEndToStartOfNextBlock(): Editor;
    moveEndToStartOfNextInline(): Editor;
    moveEndToStartOfNextText(): Editor;
    moveEndToStartOfNode(node: Block | Document | Inline | Text): Editor;
    moveEndToStartOfPreviousBlock(): Editor;
    moveEndToStartOfPreviousInline(): Editor;
    moveEndToStartOfPreviousText(): Editor;
    moveEndToStartOfText(): Editor;
    moveEndWordBackward(): Editor;
    moveEndWordForward(): Editor;
    moveFocusBackward(n?: number): Editor;
    moveFocusForward(n?: number): Editor;
    moveFocusTo(path: string | number | Immutable.List<number>, offset?: number): Editor;
    moveFocusToEndOfBlock(): Editor;
    moveFocusToEndOfDocument(): Editor;
    moveFocusToEndOfInline(): Editor;
    moveFocusToEndOfNextBlock(): Editor;
    moveFocusToEndOfNextInline(): Editor;
    moveFocusToEndOfNextText(): Editor;
    moveFocusToEndOfNode(node: Block | Document | Inline | Text): Editor;
    moveFocusToEndOfPreviousBlock(): Editor;
    moveFocusToEndOfPreviousInline(): Editor;
    moveFocusToEndOfPreviousText(): Editor;
    moveFocusToEndOfText(): Editor;
    moveFocusToStartOfBlock(): Editor;
    moveFocusToStartOfDocument(): Editor;
    moveFocusToStartOfInline(): Editor;
    moveFocusToStartOfNextBlock(): Editor;
    moveFocusToStartOfNextInline(): Editor;
    moveFocusToStartOfNextText(): Editor;
    moveFocusToStartOfNode(node: Block | Document | Inline | Text): Editor;
    moveFocusToStartOfPreviousBlock(): Editor;
    moveFocusToStartOfPreviousInline(): Editor;
    moveFocusToStartOfPreviousText(): Editor;
    moveFocusToStartOfText(): Editor;
    moveFocusWordBackward(): Editor;
    moveFocusWordForward(): Editor;
    moveStartForward(n?: number): Editor;
    moveStartBackward(n?: number): Editor;
    moveStartTo(path: string | number | Immutable.List<number>, n?: number): Editor;
    moveStartToEndOfBlock(): Editor;
    moveStartToEndOfDocument(): Editor;
    moveStartToEndOfInline(): Editor;
    moveStartToEndOfNextBlock(): Editor;
    moveStartToEndOfNextInline(): Editor;
    moveStartToEndOfNextText(): Editor;
    moveStartToEndOfNode(node: Block | Document | Inline | Text): Editor;
    moveStartToEndOfPreviousBlock(): Editor;
    moveStartToEndOfPreviousInline(): Editor;
    moveStartToEndOfPreviousText(): Editor;
    moveStartToEndOfText(): Editor;
    moveStartToStartOfBlock(): Editor;
    moveStartToStartOfDocument(): Editor;
    moveStartToStartOfInline(): Editor;
    moveStartToStartOfNextBlock(): Editor;
    moveStartToStartOfNextInline(): Editor;
    moveStartToStartOfNextText(): Editor;
    moveStartToStartOfNode(node: Block | Document | Inline | Text): Editor;
    moveStartToStartOfPreviousBlock(): Editor;
    moveStartToStartOfPreviousInline(): Editor;
    moveStartToStartOfPreviousText(): Editor;
    moveStartToStartOfText(): Editor;
    moveStartWordForward(): Editor;
    moveStartWordBackward(): Editor;
    moveBackward(n?: number): Editor;
    moveForward(n?: number): Editor;
    moveTo(path: string | number | Immutable.List<number>, offset?: number): Editor;
    moveToAnchor(): Editor;
    moveToFocus(): Editor;
    moveToStart(): Editor;
    moveToEnd(): Editor;
    moveToEndOfBlock(): Editor;
    moveToEndOfDocument(): Editor;
    moveToEndOfInline(): Editor;
    moveToEndOfNextBlock(): Editor;
    moveToEndOfNextInline(): Editor;
    moveToEndOfNextText(): Editor;
    moveToEndOfNode(node: Block | Document | Inline | Text): Editor;
    moveToEndOfPreviousBlock(): Editor;
    moveToEndOfPreviousInline(): Editor;
    moveToEndOfPreviousText(): Editor;
    moveToEndOfText(): Editor;
    moveToStartOfBlock(): Editor;
    moveToStartOfDocument(): Editor;
    moveToStartOfInline(): Editor;
    moveToStartOfNextBlock(): Editor;
    moveToStartOfNextInline(): Editor;
    moveToStartOfNextText(): Editor;
    moveToStartOfNode(node: Block | Document | Inline | Text): Editor;
    moveToStartOfPreviousBlock(): Editor;
    moveToStartOfPreviousInline(): Editor;
    moveToStartOfPreviousText(): Editor;
    moveToStartOfText(): Editor;
    moveWordBackward(): Editor;
    moveWordForward(): Editor;
    moveToRangeOfDocument(): Editor;
    moveToRangeOfNode(node: Block | Document | Inline | Text): Editor;
    select(
        properties: string | RangeTypeProperties | RangeTypeJSON | RangeType,
        options?: { snapshot?: boolean | undefined },
    ): Editor;
    setAnchor(point: Point): void;
    setEnd(point: Point): void;
    setFocus(point: Point): void;
    setStart(point: Point): void;
    addMarkAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        mark: string | MarkProperties | Mark,
    ): Editor;
    addMarksAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        marks:
            | Array<string | MarkProperties | MarkJSON | Mark>
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    deleteAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteCharBackward(): Editor;
    deleteCharBackwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteLineBackward(): Editor;
    deleteLineBackwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteWordBackward(): Editor;
    deleteWordBackwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteBackwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, n?: number): Editor;
    deleteCharForward(): Editor;
    deleteCharForwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteLineForward(): Editor;
    deleteLineForwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteWordForwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType): Editor;
    deleteWordForward(): Editor;
    deleteForwardAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, n?: number): Editor;
    insertBlockAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        block: string | Block | BlockProperties | BlockJSON,
    ): Editor;
    insertFragmentAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, fragment: Document): Editor;
    insertInlineAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        inline: Inline | InlineProperties | InlineJSON,
    ): Editor;
    insertTextAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, text: string): Editor;
    setBlocksAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Block | BlockProperties | BlockJSON,
    ): Editor;
    setInlinesAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Inline | InlineProperties | InlineJSON,
    ): Editor;
    splitBlockAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, height?: number): Editor;
    splitInlineAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, height?: number): Editor;
    removeMarkAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        mark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    toggleMarkAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        mark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    unwrapBlockAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Block | BlockProperties | BlockJSON,
    ): Editor;
    unwrapInlineAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Inline | InlineProperties | InlineJSON,
    ): Editor;
    wrapBlockAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Block | BlockProperties | BlockJSON,
    ): Editor;
    wrapInlineAtRange(
        range: RangeTypeProperties | RangeTypeJSON | RangeType,
        properties: string | Inline | InlineProperties | InlineJSON,
    ): Editor;
    wrapTextAtRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, prefix: string, suffix?: string): Editor;
    addMarkByKey(key: string, offset: number, length: number, mark: string | MarkProperties | MarkJSON | Mark): Editor;
    addMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        mark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    addMarksByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        marks:
            | Array<string | MarkProperties | MarkJSON | Mark>
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    insertNodeByKey(key: string, index: number, node: Block | Document | Inline | Text): Editor;
    insertNodeByPath(path: Immutable.List<number>, index: number, node: Block | Document | Inline | Text): Editor;
    insertFragmentByKey(key: string, index: number, fragment: Document): Editor;
    insertFragmentByPath(path: Immutable.List<number>, index: number, fragment: Document): Editor;
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?:
            | Array<string | MarkProperties | MarkJSON | Mark>
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    insertTextByPath(
        path: Immutable.List<number>,
        offset: number,
        text: string,
        marks?:
            | Array<string | MarkProperties | MarkJSON | Mark>
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    mergeNodeByKey(key: string): Editor;
    mergeNodeByPath(path: Immutable.List<number>): Editor;
    moveNodeByKey(key: string, newKey: string, newIndex: number): Editor;
    moveNodeByPath(path: Immutable.List<number>, newPath: Immutable.List<number>, newIndex: number): Editor;
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    removeMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        mark: string | MarkProperties | MarkJSON | Mark,
    ): Editor;
    removeAllMarksByKey(key: string): Editor;
    removeAllMarksByPath(path: Immutable.List<number>): Editor;
    removeMarksByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        marks:
            | Array<string | MarkProperties | MarkJSON | Mark>
            | Immutable.Set<string | MarkProperties | MarkJSON | Mark>,
    ): Editor;
    removeNodeByKey(key: string): Editor;
    removeNodeByPath(path: Immutable.List<number>): Editor;
    replaceNodeByKey(key: string, node: Block | Document | Inline | Text): Editor;
    replaceNodeByPath(path: Immutable.List<number>, newNode: Block | Document | Inline | Text): Editor;
    removeTextByKey(key: string, offset: number, length: number): Editor;
    removeTextByPath(path: Immutable.List<number>, offset: number, length: number): Editor;
    replaceTextByKey(key: string, node: Block | Document | Inline | Text): Editor;
    replaceTextByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[],
    ): Editor;
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        properties: string | MarkProperties | MarkJSON | Mark,
        newProperties: string | Partial<MarkProperties> | Partial<MarkJSON> | Partial<Mark>,
    ): Editor;
    setMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        properties: string | MarkProperties | MarkJSON | Mark,
        newProperties: string | Partial<MarkProperties> | Partial<MarkJSON> | Partial<Mark>,
    ): Editor;
    setNodeByKey(key: string, properties: string | Partial<BlockProperties> | Partial<InlineProperties>): Editor;
    setNodeByPath(path: Immutable.List<number>, newProperties: string | NodeProperties): Editor;
    setTextByKey(key: string, text: string, marks: Immutable.Set<Mark>): Editor;
    setTextByPath(path: Immutable.List<number>, text: string, marks: Immutable.Set<Mark>): Editor;
    splitDescendantsByKey(key: string, textKey: string, textOffset: number): Editor;
    splitDescendantsByPath(path: Immutable.List<number>, textPath: Immutable.List<number>, textOffset: number): Editor;
    splitNodeByKey(key: string, offset: number): Editor;
    splitNodeByPath(path: Immutable.List<number>, position: number, options?: { target?: number | undefined }): Editor;
    unwrapInlineByKey(key: string, properties: string | InlineProperties): Editor;
    unwrapInlineByPath(path: Path, properties: string | InlineProperties): Editor;
    unwrapBlockByKey(key: string, properties: string | BlockProperties): Editor;
    unwrapBlockByPath(path: Path, properties: string | BlockProperties): Editor;
    unwrapChildrenByKey(key: string): Editor;
    unwrapChildrenByPath(path: Immutable.List<number> | number[]): Editor;
    unwrapNodeByKey(key: string): Editor;
    unwrapNodeByPath(path: Immutable.List<number>): Editor;
    wrapInlineByKey(key: string, properties: string | InlineProperties): Editor;
    wrapInlineByPath(path: Path, properties: string | InlineProperties): Editor;
    wrapBlockByKey(key: string, properties: string | BlockProperties): Editor;
    wrapBlockByPath(path: Immutable.List<number>, block: string | Block): Editor;
    wrapNodeByKey(key: string, parent: Block | Document | Inline | Text): Editor;
    wrapNodeByPath(path: Immutable.List<number>, parent: Block | Document | Inline | Text): Editor;
    normalize(): Editor;
    withoutNormalizing(fn: () => void): Editor;
    withoutSaving(fn: () => void): Editor;
    withoutMerging(fn: () => void): Editor;
    redo(): Editor;
    undo(): Editor;
    save(operation: Operation): void;
    snapshotSelection(): Editor;
    command(type: string | ((...args: any[]) => any), ...args: any[]): Editor;
    hasCommand(type: string): boolean;
    hasQuery(type: string): boolean;
    query(query: string | ((...args: any[]) => any), ...args: any[]): any;
    registerCommand(command: string): Editor;
    registerQuery(query: string): Editor;
    applyOperation(operation: Operation | OperationJSON | OperationProperties): Editor;
    run(key: string, ...args: any[]): Editor;
    setData(data: Data): Editor;
    addAnnotation(annotation: AnnotationProperties | AnnotationJSON | Annotation): Editor;
    removeAnnotation(annotation: AnnotationProperties | AnnotationJSON | Annotation): Editor;
    setAnnotation(annotation: Annotation, newProperties: AnnotationProperties | AnnotationJSON | Annotation): Editor;
}

export interface Controller {
    // Current Selection Commands //
    /**
     * Add a mark to the characters in the current selection
     */
    addMark(mark: MarkProperties | MarkJSON | Mark | string): Controller;
    addMarks(
        mark:
            | Set<MarkProperties | MarkJSON | Mark | string>
            | Array<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Delete everything in the current selection.
     */
    delete(): Controller;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteBackward(n?: number): Controller;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteForward(n?: number): Controller;

    /**
     * Insert a new block at the same level as the current block, splitting the current block to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertBlock(block: Block | BlockProperties | BlockJSON | string): Controller;

    /**
     * Insert a document fragment at the current selection. If the selection is expanded, it will be deleted first.
     */
    insertFragment(fragment: Document): Controller;

    /**
     * Insert a new inline at the current cursor position, splitting the text to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertInline(inline: Inline | InlineProperties | InlineJSON | string): Controller;

    /**
     * Insert a string of text at the current selection. If the selection is expanded, it will be deleted first
     */
    insertText(text: string): Controller;

    /**
     * Set the properties of the Blocks in the current selection.
     * Passing a string will set the blocks' type only.
     */
    setBlocks(properties: Block | BlockProperties | BlockJSON | string): Controller;

    /**
     * Set the properties of the Inlines nodes in the current selection.
     * Passing a string will set the nodes' type only.
     */
    setInlines(properties: Inline | InlineProperties | InlineProperties | string): Controller;

    /**
     * Split the Block in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first.
     */
    splitBlock(depth?: number): Controller;

    /**
     * Split the Inline node in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first
     */
    splitInline(depth: number): Controller;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type for removal.
     */
    removeMark(mark: Mark | MarkProperties | MarkJSON | string): Controller;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type.
     */
    replaceMark(
        mark: MarkProperties | MarkJSON | Mark | string,
        newMark: MarkProperties | MarkJSON | Mark | string,
    ): Controller;

    /**
     * Add or remove a mark from the characters in the current selection, depending on it already exists on any or not.
     * Passing a string will implicitly create a Mark of that type to toggle.
     */
    toggleMark(mark: MarkProperties | MarkJSON | Mark | string): Controller;

    /**
     * Unwrap all Block nodes in the current selection that match a type and/or data
     */
    unwrapBlock(properties: BlockProperties | BlockJSON | Block | string): Controller;

    /**
     * Unwrap all Inline nodes in the current selection that match a type and/or data
     */
    unwrapInline(properties: InlineProperties | InlineJSON | Inline | string): Controller;

    /**
     * Wrap the Block nodes in the current selection with a new Block
     */
    wrapBlock(properties: BlockProperties | BlockJSON | Block | string): Controller;

    /**
     *  Wrap the Block nodes in the current selection with a new Inline
     */
    wrapInline(properties: InlineProperties | InlineJSON | Inline | string): Controller;

    /**
     * Surround the text in the current selection with prefix and suffix strings.
     * If the suffix is ommitted, the prefix will be used instead.
     */
    wrapText(prefix: string, suffix?: string): Controller;

    // Selection Commands //
    /**
     * Blur the current selection
     */
    blur(): Controller;

    /**
     * Unset the selection
     */
    deselect(): Controller;

    /**
     * Flip the selection
     */
    flip(): Controller;

    /**
     * Focus the current selection
     */
    focus(): Controller;

    /**
     * Move the anchor of the current selection backward n characters
     */
    moveAnchorBackward(n?: number): Controller;
    moveAnchorWordBackward(): Controller;
    /**
     * Move the anchor of the current selection forward n characters
     */
    moveAnchorForward(n?: number): Controller;
    moveAnchorWordForward(): Controller;
    /**
     * Move the anchor of the current selection to a new path and offset
     */
    moveAnchorTo(path: string | number | Immutable.List<number>, offset?: number): Controller;
    /**
     * Move the anchor of the current selection to the end of the closest block parent.
     */
    moveAnchorToEndOfBlock(): Controller;
    /**
     * Move the anchor of the current selection to the end of the closest inline parent.
     */
    moveAnchorToEndOfInline(): Controller;
    /**
     * Move the anchor of the current selection to the end of the document.
     */
    moveAnchorToEndOfDocument(): Controller;
    /**
     * Move the anchor of the current selection to the end of the next block.
     */
    moveAnchorToEndOfNextBlock(): Controller;
    /**
     * Move the anchor of the current selection to the end of the next inline.
     */
    moveAnchorToEndOfNextInline(): Controller;
    /**
     * Move the anchor of the current selection to the end of the next text.
     */
    moveAnchorToEndOfNextText(): Controller;
    /**
     * Move the anchor of the current selection to the end of the provided node.
     */
    moveAnchorToEndOfNode(node: Node): Controller;
    /**
     * Move the anchor of the current selection to the end of the previous block.
     */
    moveAnchorToEndOfPreviousBlock(): Controller;
    /**
     * Move the anchor of the current selection to the end of the previous inline.
     */
    moveAnchorToEndOfPreviousInline(): Controller;
    /**
     * Move the anchor of the current selection to the end of the previous text.
     */
    moveAnchorToEndOfPreviousText(): Controller;
    /**
     * Move the anchor of the current selection to the end of the current text node.
     */
    moveAnchorToEndOfText(): Controller;
    /**
     * Move the anchor of the current selection to the start of the closest block parent.
     */
    moveAnchorToStartOfBlock(): Controller;
    /**
     * Move the anchor of the current selection to the start of the document.
     */
    moveAnchorToStartOfDocument(): Controller;
    /**
     * Move the anchor of the current selection to the start of the closest inline parent.
     */
    moveAnchorToStartOfInline(): Controller;
    /**
     * Move the anchor of the current selection to the start of the next block.
     */
    moveAnchorToStartOfNextBlock(): Controller;
    /**
     * Move the anchor of the current selection to the start of the next inline.
     */
    moveAnchorToStartOfNextInline(): Controller;
    /**
     * Move the anchor of the current selection to the start of the next text node.
     */
    moveAnchorToStartOfNextText(): Controller;
    /**
     * Move the anchor of the current selection to the start of the provided node.
     */
    moveAnchorToStartOfNode(node: Node): Controller;
    /**
     * Move the anchor of the current selection to the start of the previous block.
     */
    moveAnchorToStartOfPreviousBlock(): Controller;
    /**
     * Move the anchor of the current selection to the start of the previous inline.
     */
    moveAnchorToStartOfPreviousInline(): Controller;
    /**
     * Move the anchor of the current selection to the start of the previous text node.
     */
    moveAnchorToStartOfPreviousText(): Controller;
    /**
     * Move the anchor of the current selection to the start of the current text node.
     */
    moveAnchorToStartOfText(): Controller;

    /**
     * Move the end of the selection backward n characters
     */
    moveEndBackward(n?: number): Controller;
    /**
     * Move the end of the selection foward n characters
     */
    moveEndForward(n?: number): Controller;

    /**
     * Move the end of the selection to a new path and offset
     */
    moveEndTo(path: string | number | Immutable.List<number>, offset?: number): Controller;
    /**
     * Move the end of the current selection to the end of the closest block parent.
     */
    moveEndToEndOfBlock(): Controller;
    /**
     * Move the end of the current selection to the end of the document.
     */
    moveEndToEndOfDocument(): Controller;
    /**
     * Move the end of the current selection to the end of the closest inline parent.
     */
    moveEndToEndOfInline(): Controller;
    /**
     * Move the anchor of the current selection to the end of the next block.
     */
    moveEndToEndOfNextBlock(): Controller;
    /**
     * Move the end of the current selection to the end of the next inline.
     */
    moveEndToEndOfNextInline(): Controller;
    /**
     * Move the end of the current selection to the end of the next text.
     */
    moveEndToEndOfNextText(): Controller;
    /**
     * Move the end of the current selection to the end of the provided node.
     */
    moveEndToEndOfNode(node: Node): Controller;
    /**
     * Move the end of the current selection to the end of the previous block.
     */
    moveEndToEndOfPreviousBlock(): Controller;
    /**
     * Move the end of the current selection to the end of the previous inline.
     */
    moveEndToEndOfPreviousInline(): Controller;
    /**
     * Move the commandable of the current selection to the end of the previous text.
     */
    moveEndToEndOfPreviousText(): Controller;
    /**
     * Move the end of the current selection to the end of the current text node.
     */
    moveEndToEndOfText(): Controller;
    /**
     * Move the end of the current selection to the start of the closest block parent.
     */
    moveEndToStartOfBlock(): Controller;
    /**
     * Move the end of the current selection to the start of the document.
     */
    moveEndToStartOfDocument(): Controller;
    /**
     * Move the end of the current selection to the start of the closest inline parent.
     */
    moveEndToStartOfInline(): Controller;
    /**
     * Move the end of the current selection to the start of the next block.
     */
    moveEndToStartOfNextBlock(): Controller;
    /**
     * Move the end of the current selection to the start of the next inline.
     */
    moveEndToStartOfNextInline(): Controller;
    /**
     * Move the end of the current selection to the start of the next text node.
     */
    moveEndToStartOfNextText(): Controller;
    /**
     * Move the end of the current selection to the start of the provided node.
     */
    moveEndToStartOfNode(node: Node): Controller;
    /**
     * Move the end of the current selection to the start of the previous block.
     */
    moveEndToStartOfPreviousBlock(): Controller;
    /**
     * Move the end of the current selection to the start of the previous inline.
     */
    moveEndToStartOfPreviousInline(): Controller;
    /**
     * Move the end of the current selection to the start of the previous text node.
     */
    moveEndToStartOfPreviousText(): Controller;
    /**
     * Move the end of the current selection to the start of the current text node.
     */
    moveEndToStartOfText(): Controller;
    moveEndWordBackward(): Controller;
    moveEndWordForward(): Controller;
    /**
     * Move the focus of the current selection backward n characters
     */
    moveFocusBackward(n?: number): Controller;
    /**
     * Move the focus of the current selection forward n characters
     */
    moveFocusForward(n?: number): Controller;
    /**
     * Move the focus of the current selection to a new path and offset
     */
    moveFocusTo(path: string | number | Immutable.List<number>, offset?: number): Controller;
    /**
     * Move the focus of the current selection to the end of the closest block parent.
     */
    moveFocusToEndOfBlock(): Controller;
    /**
     * Move the focus of the current selection to the end of the document.
     */
    moveFocusToEndOfDocument(): Controller;
    /**
     * Move the focus of the current selection to the end of the closest inline parent.
     */
    moveFocusToEndOfInline(): Controller;
    /**
     * Move the focus of the current selection to the end of the next block.
     */
    moveFocusToEndOfNextBlock(): Controller;
    /**
     * Move the focus of the current selection to the end of the next inline.
     */
    moveFocusToEndOfNextInline(): Controller;
    /**
     * Move the focus of the current selection to the end of the next text.
     */
    moveFocusToEndOfNextText(): Controller;
    /**
     * Move the focus of the current selection to the end of the provided node.
     */
    moveFocusToEndOfNode(node: Node): Controller;
    /**
     * Move the focus of the current selection to the end of the previous block.
     */
    moveFocusToEndOfPreviousBlock(): Controller;
    /**
     * Move the focus of the current selection to the end of the previous inline.
     */
    moveFocusToEndOfPreviousInline(): Controller;
    /**
     * Move the focus of the current selection to the end of the previous text.
     */
    moveFocusToEndOfPreviousText(): Controller;
    /**
     * Move the focus of the current selection to the end of the current text node.
     */
    moveFocusToEndOfText(): Controller;
    /**
     * Move the focus of the current selection to the start of the closest block parent.
     */
    moveFocusToStartOfBlock(): Controller;
    /**
     * Move the focus of the current selection to the start of the document.
     */
    moveFocusToStartOfDocument(): Controller;
    /**
     * Move the focus of the current selection to the start of the closest inline parent.
     */
    moveFocusToStartOfInline(): Controller;
    /**
     * Move the focus of the current selection to the start of the next block.
     */
    moveFocusToStartOfNextBlock(): Controller;
    /**
     * Move the focus of the current selection to the start of the next inline.
     */
    moveFocusToStartOfNextInline(): Controller;
    /**
     * Move the focus of the current selection to the start of the next text node.
     */
    moveFocusToStartOfNextText(): Controller;
    /**
     * Move the focus of the current selection to the start of the provided node.
     */
    moveFocusToStartOfNode(node: Node): Controller;
    /**
     * Move the focus of the current selection to the start of the previous block.
     */
    moveFocusToStartOfPreviousBlock(): Controller;
    /**
     * Move the focus of the current selection to the start of the previous inline.
     */
    moveFocusToStartOfPreviousInline(): Controller;
    /**
     * Move the focus of the current selection to the start of the previous text node.
     */
    moveFocusToStartOfPreviousText(): Controller;
    /**
     * Move the focus of the current selection to the start of the current text node.
     */
    moveFocusToStartOfText(): Controller;
    moveFocusWordBackward(): Controller;
    moveFocusWordForward(): Controller;
    /**
     * Move the start of the current selection backward n characters
     */
    moveStartForward(n?: number): Controller;
    /**
     * Move the start of the current selection forward n characters
     */
    moveStartBackward(n?: number): Controller;
    /**
     * Move the start of the current selection to a new path and offset
     */
    moveStartTo(path: string | number | Immutable.List<number>, n?: number): Controller;
    /**
     * Move the start of the current selection to the end of the closest block parent.
     */
    moveStartToEndOfBlock(): Controller;
    /**
     * Move the start of the current selection to the end of the document.
     */
    moveStartToEndOfDocument(): Controller;
    /**
     * Move the start of the current selection to the end of the closest inline parent.
     */
    moveStartToEndOfInline(): Controller;
    /**
     * Move the start of the current selection to the end of the next block.
     */
    moveStartToEndOfNextBlock(): Controller;
    /**
     * Move the start of the current selection to the end of the next inline.
     */
    moveStartToEndOfNextInline(): Controller;
    /**
     * Move the start of the current selection to the end of the next text.
     */
    moveStartToEndOfNextText(): Controller;
    /**
     * Move the start of the current selection to the end of the provided node.
     */
    moveStartToEndOfNode(node: Node): Controller;
    /**
     * Move the start of the current selection to the end of the previous block.
     */
    moveStartToEndOfPreviousBlock(): Controller;
    /**
     * Move the start of the current selection to the end of the previous inline.
     */
    moveStartToEndOfPreviousInline(): Controller;
    /**
     * Move the start of the current selection to the end of the previous text.
     */
    moveStartToEndOfPreviousText(): Controller;
    /**
     * Move the start of the current selection to the end of the current text node.
     */
    moveStartToEndOfText(): Controller;
    /**
     * Move the start of the current selection to the start of the closest block parent.
     */
    moveStartToStartOfBlock(): Controller;
    /**
     * Move the start of the current selection to the start of the document.
     */
    moveStartToStartOfDocument(): Controller;
    /**
     * Move the start of the current selection to the start of the closest inline parent.
     */
    moveStartToStartOfInline(): Controller;
    /**
     * Move the start of the current selection to the start of the next block.
     */
    moveStartToStartOfNextBlock(): Controller;
    /**
     * Move the start of the current selection to the start of the next inline.
     */
    moveStartToStartOfNextInline(): Controller;
    /**
     * Move the start of the current selection to the start of the next text node.
     */
    moveStartToStartOfNextText(): Controller;
    /**
     * Move the start of the current selection to the start of the provided node.
     */
    moveStartToStartOfNode(node: Node): Controller;
    /**
     * Move the start of the current selection to the start of the previous block.
     */
    moveStartToStartOfPreviousBlock(): Controller;
    /**
     * Move the start of the current selection to the start of the previous inline.
     */
    moveStartToStartOfPreviousInline(): Controller;
    /**
     * Move the start of the current selection to the start of the previous text node.
     */
    moveStartToStartOfPreviousText(): Controller;
    /**
     * Move the start of the current selection to the start of the current text node.
     */
    moveStartToStartOfText(): Controller;
    moveStartWordForward(): Controller;
    moveStartWordBackward(): Controller;
    /**
     * Move the anchor and focus of the selection backward n characters.
     */
    moveBackward(n?: number): Controller;
    /**
     * Move the anchor and focus of the selection forward n characters.
     */
    moveForward(n?: number): Controller;
    /**
     * Collapse the current selection at the provided new path and offset.
     */
    moveTo(path: string | number | Immutable.List<number>, offset?: number): Controller;
    /**
     * Collapse the current selection at the anchor.
     */
    moveToAnchor(): Controller;
    /**
     * Collapse the current selection at the focus.
     */
    moveToFocus(): Controller;
    /**
     * Collapse the current selection at the start.
     */
    moveToStart(): Controller;
    /**
     * Collapse the current selection at the end.
     */
    moveToEnd(): Controller;
    /**
     * Collapse the current selection at the end of the closest block parent.
     */
    moveToEndOfBlock(): Controller;
    /**
     * Collapse the current selection at the end of the document.
     */
    moveToEndOfDocument(): Controller;
    /**
     * Collapse the current selection at the end of the closest inline parent.
     */
    moveToEndOfInline(): Controller;
    /**
     * Collapse the current selection at the end of the next block.
     */
    moveToEndOfNextBlock(): Controller;
    /**
     * Collapse the current selection at the end of the inline.
     */
    moveToEndOfNextInline(): Controller;
    /**
     * Collapse the current selection at the end of the next text node.
     */
    moveToEndOfNextText(): Controller;
    /**
     * Collapse the current selection at the end of the provided node.
     */
    moveToEndOfNode(node: Node): Controller;
    /**
     * Collapse the current selection at the end of the previous block.
     */
    moveToEndOfPreviousBlock(): Controller;
    /**
     * Collapse the current selection at the end of the previous inline.
     */
    moveToEndOfPreviousInline(): Controller;
    /**
     * Collapse the current selection at the end of the previous text node.
     */
    moveToEndOfPreviousText(): Controller;
    /**
     * Collapse the current selection at the end of the current text node.
     */
    moveToEndOfText(): Controller;
    /**
     * Collapse the current selection at the start of the nearest block parent.
     */
    moveToStartOfBlock(): Controller;
    /**
     * Collapse the current selection at the start of the document.
     */
    moveToStartOfDocument(): Controller;
    /**
     * Collapse the current selection at the start of the nearest inline parent.
     */
    moveToStartOfInline(): Controller;
    /**
     * Collapse the current selection at the start of the next block.
     */
    moveToStartOfNextBlock(): Controller;
    /**
     * Collapse the current selection at the start of the next inline.
     */
    moveToStartOfNextInline(): Controller;
    /**
     * Collapse the current selection at the start of the next text node.
     */
    moveToStartOfNextText(): Controller;
    /**
     * Collapse the current selection at the start of the provided node.
     */
    moveToStartOfNode(node: Node): Controller;
    /**
     * Collapse the current selection at the start of the previous block.
     */
    moveToStartOfPreviousBlock(): Controller;
    /**
     * Collapse the current selection at the start of the previous inline.
     */
    moveToStartOfPreviousInline(): Controller;
    /**
     * Collapse the current selection at the start of the previous text node.
     */
    moveToStartOfPreviousText(): Controller;
    /**
     * Collapse the current selection at the start of the current text node.
     */
    moveToStartOfText(): Controller;
    moveWordBackward(): Controller;
    moveWordForward(): Controller;
    /**
     * Move the current selection's anchor to the start of the document and its focus to the end of it, selecting everything.
     */
    moveToRangeOfDocument(): Controller;
    /**
     * Move the current selection's anchor to the start of the provided node and its focus to the end of it.
     */
    moveToRangeOfNode(node: Node): Controller;
    /**
     * Merge the current selection with the provided properties
     */
    select(
        properties:
            | RangeTypeProperties
            | RangeTypeJSON
            | RangeType
            | string,
        options?: { snapshot?: boolean | undefined },
    ): Controller;
    setAnchor(point: Point): void;
    setEnd(point: Point): void;
    setFocus(point: Point): void;
    setStart(point: Point): void;

    // Document Range Commands //

    /**
     * Add a mark to the characters in the range.
     * Passing a string as `mark` will implicitly create a mark with that `type`
     */
    addMarkAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        mark: Mark | MarkProperties | string,
    ): Controller;
    addMarksAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        marks:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Delete everything in the range
     */
    deleteAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete backward one character
     */
    deleteCharBackward(): Controller;
    /**
     * Delete backward until the char boundary at a range
     */
    deleteCharBackwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete backward one line
     */
    deleteLineBackward(): Controller;
    /**
     * Delete backward until the line boundary at a range
     */
    deleteLineBackwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete backward one word.
     */
    deleteWordBackward(): Controller;
    /**
     * Delete backward until the word boundary at a range
     */
    deleteWordBackwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete backward n characters at a range
     */
    deleteBackwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON, n?: number): Controller;
    /**
     * Delete forward one character
     */
    deleteCharForward(): Controller;
    /**
     * Delete forward until the char boundary at a range
     */
    deleteCharForwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete forward one line
     */
    deleteLineForward(): Controller;
    /**
     * Delete forward until the line boundary at a range
     */
    deleteLineForwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete forward until the word boundary at a range
     */
    deleteWordForwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON): Controller;
    /**
     * Delete forward one word
     */
    deleteWordForward(): Controller;
    /**
     * Delete forward n characters at a range
     */
    deleteForwardAtRange(range: RangeType | RangeTypeProperties | RangeTypeJSON, n?: number): Controller;
    /**
     * Insert a block node at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertBlockAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        block: Block | BlockProperties | BlockJSON | string,
    ): Controller;
    /**
     * Insert a document fragment at a range, if the range is expanded, it will be deleted first.
     */
    insertFragmentAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        fragment: Document,
    ): Controller;
    /**
     * Insert a new inline at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertInlineAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        inline: Inline | InlineJSON | InlineProperties,
    ): Controller;
    /**
     * Insert text at range. If the range is expanded it will be deleted first
     */
    insertTextAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        text: string,
    ): Controller;
    /**
     * Set the properties of the block nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setBlocksAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: Block | BlockJSON | BlockProperties | string,
    ): Controller;
    /**
     * Set the properties of the inline nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setInlinesAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: InlineProperties | InlineJSON | Inline | string,
    ): Controller;
    /**
     * Split the block nodes at a `range`, to optional `height`.
     */
    splitBlockAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        height?: number,
    ): Controller;
    /**
     * Split the inline nodes at a `range`, to optional `height`.
     */
    splitInlineAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        height?: number,
    ): Controller;
    /**
     * Remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    removeMarkAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        mark: Mark | MarkProperties | MarkJSON | string,
    ): Controller;
    /**
     * Add or remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    toggleMarkAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        mark: Mark | MarkProperties | MarkJSON | string,
    ): Controller;
    /**
     * Unwrap all block nodes in a range that match properties
     */
    unwrapBlockAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: BlockProperties | BlockJSON | Block | string,
    ): Controller;
    /**
     * Unwrap all inline nodes in a range that match properties
     */
    unwrapInlineAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: InlineProperties | InlineJSON | Inline | string,
    ): Controller;
    /**
     * wrap all block nodes in a range with a new block node with the provided properties
     */
    wrapBlockAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: BlockProperties | BlockJSON | Block | string,
    ): Controller;
    /**
     * wrap all inline nodes in a range with a new inline node with the provided properties
     */
    wrapInlineAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        properties: InlineProperties | InlineJSON | Inline | string,
    ): Controller;
    /**
     * Surround the text in a range with a prefix and suffix. If the suffix is ommitted,
     * the prefix will be used instead.
     */
    wrapTextAtRange(
        range: RangeType | RangeTypeProperties | RangeTypeJSON,
        prefix: string,
        suffix?: string,
    ): Controller;

    // Node commands //
    /**
     * Add a mark to length characters starting at an offset in a node by key
     */
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: MarkProperties | MarkJSON | Mark | string,
    ): Controller;
    /**
     * Add a mark to length characters starting at an offset in a node by path
     */
    addMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        mark: MarkProperties | MarkJSON | Mark | string,
    ): Controller;
    addMarksByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        marks:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Insert a node at index inside a parent node by key
     */
    insertNodeByKey(key: string, index: number, node: Node): Controller;
    /**
     * Insert a node at index inside a parent node by apth
     */
    insertNodeByPath(path: Immutable.List<number>, index: number, node: Node): Controller;
    /**
     * Insert a document fragment at index inside a parent node by key
     */
    insertFragmentByKey(key: string, index: number, fragment: Document): Controller;
    /**
     * Insert a document fragment at index inside a parent node by path
     */
    insertFragmentByPath(path: Immutable.List<number>, index: number, fragment: Document): Controller;
    /**
     * Insert text at an offset in a text node by its key with optional marks
     */
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Insert text at an offset in a text node by its path with optional marks
     */
    insertTextByPath(
        path: Immutable.List<number>,
        offset: number,
        text: string,
        marks?:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Merge a node by its key with its previous sibling
     */
    mergeNodeByKey(key: string): Controller;
    /**
     * Merge a node by its path with its previous sibling
     */
    mergeNodeByPath(path: Immutable.List<number>): Controller;
    /**
     * Move a node by its key to a new parent node with with newkey at newindex
     */
    moveNodeByKey(key: string, newKey: string, newIndex: number): Controller;
    /**
     * Move a node by its path to a new parent node with with newpath at newindex
     */
    moveNodeByPath(
        path: Immutable.List<number>,
        newPath: Immutable.List<number>,
        newIndex: number,
    ): Controller;
    /**
     * Remove a mark from length characters starting at an offset in a node by key
     */
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: MarkProperties | MarkJSON | Mark | string,
    ): Controller;
    /**
     * Remove a mark from length characters starting at an offset in a node by path
     */
    removeMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        mark: MarkProperties | MarkJSON | Mark | string,
    ): Controller;
    /**
     * Remove all `marks` from node by `key`.
     */
    removeAllMarksByKey(key: string): Controller;
    /**
     * Remove all `marks` from node by `path`.
     */
    removeAllMarksByPath(path: Immutable.List<number>): Controller;
    removeMarksByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        marks:
            | Array<MarkProperties | MarkJSON | Mark | string>
            | Immutable.Set<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Remove a node from the document by its key
     */
    removeNodeByKey(key: string): Controller;
    /**
     * Remove a node from the document by its path
     */
    removeNodeByPath(path: Immutable.List<number>): Controller;
    /**
     * Replace a node in the document with a new node by key
     */
    replaceNodeByKey(key: string, node: Node): Controller;
    /**
     * Replace a node in the document with a new node by path
     */
    replaceNodeByPath(path: Immutable.List<number>, newNode: Node): Controller;
    /**
     * Remove length characters of text starting at an offset in a node by key
     */
    removeTextByKey(key: string, offset: number, length: number): Controller;
    /**
     * Remove length characters of text starting at an offset in a node by path
     */
    removeTextByPath(path: Immutable.List<number>, offset: number, length: number): Controller;
    /**
     * Set a dictionary of newProperties on a mark by its key.
     */
    /**
     * Replace a length of text at offset with new text and optional marks by key
     */
    replaceTextByKey(key: string, node: Node): Controller;
    /**
     * Replace a length of text at offset with new text and optional marks by path
     */
    replaceTextByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[],
    ): Controller;
    /**
     * Remove length characters of text starting at an offset in a node by key
     */
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        properties: MarkProperties | MarkJSON | Mark | string,
        newProperties: Partial<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Set a dictionary of newProperties on a mark by its path.
     */
    setMarkByPath(
        path: Immutable.List<number>,
        offset: number,
        length: number,
        properties: MarkProperties | MarkJSON | Mark | string,
        newProperties: Partial<MarkProperties | MarkJSON | Mark | string>,
    ): Controller;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByKey(key: string, properties: BlockProperties | InlineProperties | string): Controller;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByPath(path: Immutable.List<number>, newProperties: NodeProperties | InlineProperties | string): Controller;
    /**
     *  Insert `text` at `offset` in node by `key`.
     */
    setTextByKey(key: string, text: string, marks: Immutable.Set<Mark>): Controller;
    /**
     *  Insert `text` at `offset` in node by `path`.
     */
    setTextByPath(path: Immutable.List<number>, text: string, marks: Immutable.Set<Mark>): Controller;
    /**
     * Split a node deeply down the tree by `key`, `textKey` and `textOffset`.
     */
    splitDescendantsByKey(key: string, textKey: string, textOffset: number): Controller;
    /**
     * Split a node deeply down the tree by `path`, `textPath` and `textOffset`.
     */
    splitDescendantsByPath(
        path: Immutable.List<number>,
        textPath: Immutable.List<number>,
        textOffset: number,
    ): Controller;

    /**
     * Split a node by its key at an offset
     */
    splitNodeByKey(key: string, offset: number): Controller;
    /**
     * Split a node by its path at an offset
     */
    splitNodeByPath(
        path: Immutable.List<number>,
        position: number,
        options?: { target?: number | undefined },
    ): Controller;
    /**
     * Unwrap all inner content of an inline node by its key that match properties
     */
    unwrapInlineByKey(key: string, properties: InlineProperties | string): Controller;
    /**
     * Unwrap all inner content of an inline node by its path that match properties
     */
    unwrapInlineByPath(path: Path, properties: InlineProperties | string): Controller;
    /**
     * Unwrap all inner content of a block node by its key that match properties
     */
    unwrapBlockByKey(key: string, properties: BlockProperties | string): Controller;
    /**
     * Unwrap all inner content of a block node by its path that match properties
     */
    unwrapBlockByPath(path: Path, properties: BlockProperties | string): Controller;
    /**
     * Unwrap all of the children of a node by its key.
     */
    unwrapChildrenByKey(key: string): Controller;
    /**
     * Unwrap all of the children of a node, by removing the node and replacing it
     * with the children in the tree.
     */
    unwrapChildrenByPath(path: Immutable.List<number> | number[]): Controller;
    /**
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByKey(key: string): Controller;
    /**
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByPath(path: Immutable.List<number>): Controller;
    /**
     * Wrap the given node by key in an Inline node that matches properties.
     */
    wrapInlineByKey(key: string, properties: InlineProperties | string): Controller;
    /**
     * Wrap the given node by path in an Inline node that matches properties.
     */
    wrapInlineByPath(path: Path, properties: InlineProperties | string): Controller;
    /**
     * Wrap the given node by key in a block node that matches properties.
     */
    wrapBlockByKey(key: string, properties: BlockProperties | string): Controller;
    /**
     * Wrap the given node by path in a block node that matches properties.
     */
    wrapBlockByPath(path: Immutable.List<number>, block: Block | string): Controller;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByKey(key: string, parent: Node): Controller;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByPath(path: Immutable.List<number>, parent: Node): Controller;

    // Miscellaneous Commands //
    /**
     * Normalizes the document with the value's schema. Run automatically unless manually disabled.
     * Use it sparingly and strategically, as it can be very expensive.
     */
    normalize(): Controller;
    /**
     * Calls the provided function with the current commandable as the first argument.
     * Normalization does not occur while the function is executing and is deferred to execute immediately after completion.
     *
     * This allows for sequence change operations to not be interrupted by normalization
     */
    withoutNormalizing(fn: () => void): Controller;
    /**
     * By default all operations are saved to the commandable's history. If you have
     * changes that you don't want to show up in history, use this function.
     */
    withoutSaving(fn: () => void): void;
    /**
     * Usually all command operations are merged into a single save point in history,
     * if more control is desired, create single save points using this function.
     */
    withoutMerging(fn: () => void): void;

    // History Commands //
    /**
     * Move forward one step in the history
     */
    redo(): Controller;
    /**
     * Move backward one step in the history
     */
    undo(): Controller;
    /**
     * Save an `operation` into the history.
     */
    save(operation: Operation): void;
    /**
     * Snapshot the current selection for undo purposes.
     */
    snapshotSelection(): Controller;
    command(type: string | ((...args: any[]) => any), ...args: any[]): Controller;
    /**
     * Check if a command by type has been registered.
     */
    hasCommand(type: string): boolean;
    /**
     * Check if a query by type has been registered.
     */
    hasQuery(type: string): boolean;
    query(query: string | ((...args: any[]) => any), ...args: any[]): any;
    /**
     * Add a new command by type to the controller. This will make the command available as a top-level method on the controller
     */
    registerCommand(command: string): Controller;
    /**
     * Add a new query by type to the controller. This will make the query available as a top-level method on the controller.
     */
    registerQuery(query: string): Controller;
    /**
     * Apply an `operation` to the controller, updating its value.
     */
    applyOperation(operation: Operation | OperationJSON | OperationProperties): Controller;
    /**
     * Run the middleware stack by key with args, returning its result.
     * In normal operation you never need to use this method! Reserved for testing.
     */
    run(key: string, ...args: any[]): Controller;
    /**
     * Set data
     */
    setData(data: Data): Controller;
    /**
     * Add annotation
     */
    addAnnotation(annotation: Annotation | AnnotationProperties | AnnotationJSON): Controller;
    /**
     * Remove annotation
     */
    removeAnnotation(annotation: Annotation | AnnotationProperties | AnnotationJSON): Controller;
    /**
     * Set annotation
     */
    setAnnotation(
        annotation: Annotation,
        newProperties: AnnotationProperties | AnnotationJSON | Annotation,
    ): Controller;
}

export {};
