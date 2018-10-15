// Type definitions for slate 0.40
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Kalley Powell <https://github.com/kalley>
//                 Francesco Agnoletto <https://github.com/Kornil>
//                 Irwan Fario Subastian <https://github.com/isubasti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as Immutable from "immutable";

export class Data extends Immutable.Record({}) {
    [key: string]: any;

    static create(properties: object): Data;
    static fromJSON(object: object): Data;
    static fromJS(object: object): Data;
}

export interface RulesByNodeType {
    [key: string]: Rules;
}

export interface ObjectAndType {
    object?: string;
    types?: string;
}

export interface Rules {
    data?: {
        [key: string]: (v: any) => boolean;
    };
    first?: ObjectAndType | ObjectAndType[];
    isVoid?: boolean;
    last?: ObjectAndType | ObjectAndType[];
    nodes?: Array<{
        min?: number;
        max?: number;
        match?: ObjectAndType | ObjectAndType[];
    }>;
    normalize?: (change: Change, error: SlateError) => void;
    parent?: ObjectAndType | ObjectAndType[];
    text?: RegExp;
}

export interface SchemaProperties {
    document?: Rules;
    blocks?: RulesByNodeType;
    inlines?: RulesByNodeType;
}

export class Schema extends Immutable.Record({}) {
    stack: Stack;
    rules: Rules[];

    static create(properties: SchemaProperties | Schema): Schema;
    static fromJSON(object: SchemaProperties): Schema;
    static fromJS(object: SchemaProperties): Schema;
    static isSchema(maybeSchema: any): maybeSchema is Schema;

    validateNode(node: Node): Error | void;
    testNode(node: Node): boolean;
    assertNode(node: Node): boolean;
    getNodeRules(node: Node): any[];
    isVoid(node: Node): boolean;
    isAtomic(mark: Mark): boolean;
    normalizeNode(node: Node): () => void;
    testRules(object: any, rules: object | any[]): boolean;
    validateRules(
        object: any,
        rule: object | any[],
        rules: any[] | null,
        options?: object
    ): Error | void;

    toJSON(): SchemaProperties;
    toJS(): SchemaProperties;
}

export interface ValueProperties {
    document?: Document;
    selection?: Selection;
    history?: History;
    schema?: Schema;
    data?: Data;
    decorations?: Immutable.List<Decoration> | null;
}

export interface ValueJSON {
    document?: DocumentJSON;
    selection?: Selection;
    history?: History;
    schema?: Schema;
    data?: Data;
    decorations?: Immutable.List<Decoration> | null;
    object?: "value";
}

export type Path = Immutable.List<number> | string;

export class Value extends Immutable.Record({}) {
    document: Document;
    selection: Selection;
    history: History;
    schema: Schema;
    data: Data;
    object: "value";
    decorations: Immutable.List<Decoration>;

    readonly anchorText: Text;
    readonly focusText: Text;
    readonly startText: Text;
    readonly endText: Text;
    readonly nextText: Text;
    readonly previousText: Text;

    readonly anchorBlock: Block;
    readonly focusBlock: Block;
    readonly startBlock: Block;
    readonly endBlock: Block;
    readonly nextBlock: Block;
    readonly previousBlock: Block;

    readonly anchorInline: Inline;
    readonly focusInline: Inline;
    readonly startInline: Inline;
    readonly endInline: Inline;
    readonly nextInline: Inline;
    readonly previousInline: Inline;

    readonly marks: Immutable.Set<Mark>;
    readonly activeMarks: Immutable.Set<Mark>;
    readonly blocks: Immutable.List<Block>;
    readonly fragment: Document;
    readonly inlines: Immutable.List<Inline>;
    readonly texts: Immutable.List<Text>;

    static create(properties?: ValueProperties | Value): Value;
    static createProperties(attrs: ValueProperties | Value): ValueProperties;
    static fromJSON(properties: ValueJSON): Value;
    static fromJS(properties: ValueJSON): Value;
    static isValue(maybeValue: any): maybeValue is Value;

    change(): Change;
    toJSON(): ValueJSON;
    addMark(path: Path, offset: number, length: number, mark: Mark): Value;
    insertNode(path: Path, node: Node): Value;
    insertText(
        path: Path,
        offset: number,
        text: string,
        marks: Immutable.Set<Mark>
    ): Value;
    isValue(value: Value): boolean;
    mergeNode(path: Path): Value;
    moveNode(path: Path, newPath: Path, newIndex?: number): Value;
    removeMark(path: Path, offset: number, length: number, mark: Mark): Value;
    removeNode(path: Path): Value;
    removeText(path: Path, offset: number, text: Text): Value;
    setNode(path: Path, properties: any): Value;
    setMark(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Value;
    setProperties(properties: ValueProperties): Value;
    setSelection(properties: RangeProperties): Value;
    splitNode(path: Path, position: number, properties: any): Value;
    mapRanges(iterator: () => void): Value;
    clearAtomicRanges(key: string, from: number, to?: number): Value;
}

export interface DocumentProperties {
    nodes?: Immutable.List<Node> | Node[];
    key?: string;
    data?: Immutable.Map<string, any> | { [key: string]: any };
}

export interface DocumentJSON {
    nodes?: NodeJSON[];
    key?: string;
    data?: { [key: string]: any };
    object?: "document";
}

export class Document<DataMap = { [key: string]: any }> extends BaseNode<
    DataMap
> {
    object: "document";
    nodes: Immutable.List<Block>;

    static create(
        properties:
            | DocumentProperties
            | Document
            | Immutable.List<Node>
            | Node[]
    ): Document;
    static fromJSON(properties: DocumentJSON | Document): Document;
    static fromJS(properties: DocumentJSON | Document): Document;
    static isDocument(maybeDocument: any): maybeDocument is Document;

    toJSON(): DocumentJSON;
}

export interface BlockProperties {
    type: string;
    key?: string;
    nodes?: Immutable.List<Node>;
    data?: Immutable.Map<string, any> | { [key: string]: any };
}

export interface BlockJSON {
    type: string;
    key?: string;
    nodes?: Array<BlockJSON | InlineJSON | TextJSON>;
    data?: { [key: string]: any };
    object: "block";
}

export class Block extends BaseNode {
    object: "block";
    nodes: Immutable.List<Block | Text | Inline>;

    static create(properties: BlockProperties | Block | string): Block;
    static createList(
        array?: BlockProperties[] | Block[] | string[]
    ): Immutable.List<Block>;
    static fromJSON(properties: BlockJSON | Block): Block;
    static fromJS(properties: BlockJSON | Block): Block;
    static isBlock(maybeBlock: any): maybeBlock is Block;
    static isBlockList(
        maybeBlockList: any
    ): maybeBlockList is Immutable.List<Block>;

    toJSON(): BlockJSON;
}

export interface InlineProperties {
    type: string;
    key?: string;
    nodes?: Immutable.List<Node>;
    data?: Immutable.Map<string, any> | { [key: string]: any };
}

export interface InlineJSON {
    type: string;
    key?: string;
    nodes?: NodeJSON[];
    data?: { [key: string]: any };
    object: "inline";
}

export class Inline extends BaseNode {
    object: "inline";
    nodes: Immutable.List<Inline | Text>;

    static create(properties: InlineProperties | Inline | string): Inline;
    static createList(
        array?: InlineProperties[] | Inline[] | string[]
    ): Immutable.List<Inline>;
    static fromJSON(properties: InlineJSON | Inline): Inline;
    static fromJS(properties: InlineJSON | Inline): Inline;
    static isInline(maybeInline: any): maybeInline is Inline;
    static isInlineList(
        maybeInlineList: any
    ): maybeInlineList is Immutable.List<Inline>;

    toJSON(): InlineJSON;
}

export interface TextProperties {
    key?: string;
    text?: string;
    marks?: Mark[];
}

export interface TextJSON {
    key?: string;
    leaves: LeafJSON[];
    object: "text";
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

    static create(properties: TextProperties | Text | string): Text;
    static createList(
        elements?:
            | Text[]
            | TextProperties[]
            | Immutable.List<Text>
            | Immutable.List<TextProperties>
    ): Immutable.List<Text>;
    static fromJSON(properties: TextJSON | Text): Text;
    static fromJS(properties: TextJSON | Text): Text;
    static isText(maybeText: any): maybeText is Text;

    toJSON(): TextJSON;

    getKeysToPathsTable(): object;
    getString(): string;
    searchLeafAtOffset(offset: number): LeafAndOffset;
    addMark(index: number, length: number, mark: Mark): Text;
    addMarks(index: number, lenght: number, marks: Immutable.Set<Mark>): Text;
    getLeaves(decorations?: Range[]): Immutable.List<Leaf>;
    getActiveMarksBetweenOffset(
        startOffset: number,
        endOffset: number
    ): Immutable.Set<Mark>;
    getActiveMarks(): Immutable.Set<Mark>;
    getFirstText(): Text;
    getLastText(): Text;
    getText(): string;
    getMarksBetweenOffset(
        startOffset: number,
        endOffset: number
    ): Immutable.Set<Mark>;
    getMarks(): Immutable.OrderedSet<Mark>;
    getMarksAsArray(): Mark[];
    getMarksAtIndex(index: number): Mark;
    getNode(key: string): Node | null;
    getPath(key: string | Path): Path;
    hasNode(key: string): boolean;
    insertText(offset: number, text: string, marks?: Immutable.Set<Mark>): Text;
    regenerateKey(): Text;
    removeMark(index: number, length: Mark, mark: Mark): Text;
    removeText(start: number, length: number): Text;
    resolvePath(path: Path, index: number): Immutable.List<string>;
    updateMark(
        index: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Text;
    splitText(offset: number): Text[];
    mergeText(text: Text): Text;
    normalize(schema: Schema): () => void | null;
    validate(schema: Schema): Error | null;
    getFirstInvalidNode(schema: Schema): Text | null;
    setLeaves(leaves: Immutable.List<Leaf>): Text;
}

export interface LeafProperties {
    marks?: Immutable.Set<Mark>;
    text?: string;
}

export interface LeafJSON {
    marks?: Mark[];
    text?: string;
}

export class Leaf extends Immutable.Record({}) {
    object: "leaf";
    marks: Immutable.Set<Mark> | null;
    text: string;

    static create(properties: LeafProperties): Leaf;
    static createLeaves(leaves: Immutable.List<Leaf>): Immutable.List<Leaf>;
    static splitLeaves(
        leaves: Immutable.List<Leaf>,
        offset: number
    ): Array<Immutable.List<Leaf>>;
    static createList(
        attrs?:
            | Leaf[]
            | LeafProperties[]
            | Immutable.List<Leaf>
            | Immutable.List<LeafProperties>
    ): Immutable.List<Leaf>;
    static fromJSON(properties: LeafJSON): Leaf;
    static fromJS(properties: LeafJSON): Leaf;
    static isLeaf(maybeLeaf: any): maybeLeaf is Leaf;
    static isLeafList(
        maybeLeafList: any
    ): maybeLeafList is Immutable.List<Leaf>;

    updateMark(mark: Mark, newMark: Mark): Leaf;
    addMarks(marks: Immutable.Set<Mark>): Leaf;
    addMark(mark: Mark): Leaf;
    removeMark(mark: Mark): Leaf;
    toJSON(): LeafProperties;
}

export type Node = Document | Block | Inline | Text;
export type NodeJSON = DocumentJSON | BlockJSON | InlineJSON | TextJSON;
export type NodeProperties =
    | DocumentProperties
    | BlockProperties
    | InlineProperties
    | TextProperties;

// tslint:disable-next-line strict-export-declare-modifiers
declare class BaseNode<
    DataMap = { [key: string]: any }
> extends Immutable.Record({}) {
    data: Immutable.Map<keyof DataMap, DataMap[keyof DataMap]>;
    type: string;
    key: string;
    object: "document" | "block" | "inline" | "text";
    nodes: Immutable.List<Node>;

    readonly text: string;

    static isNode(maybeNode: any): maybeNode is Node;
    static isNodeList(
        maybeNodeList: any
    ): maybeNodeList is Immutable.List<Node>;
    static createProperties(
        attrs: NodeProperties | string | Node
    ): NodeProperties;
    static fromJSON(value: NodeJSON | Node): Node;
    static fromJS(value: NodeJSON | Node): Node;

    addMark(path: Path, offset: number, length: number, mark: Mark): Node;
    createDecoration(properties: DecorationProperties | Decoration): Decoration;
    createPoint(properties: PointProperties | Point): Point;
    createRange(properties: RangeProperties | Range): Range;
    createSelection(properties: SelectionProperties | Selection): Selection;
    filterDescendants(iterator: (node: Node) => boolean): Immutable.List<Node>;
    findDescendants(iterator: (node: Node) => boolean): Node | null;
    getActiveMarksAtRange(range: Range): Immutable.Set<Mark>;
    getAncestors(path: Path): Immutable.List<Node> | null;
    getBlocksAtRange(range: Range): Immutable.List<Block>;
    getBlocksAtRangeAsArray(range: Range): Block[];
    getBlocks(): Immutable.List<Block>;
    getBlocksAsArray(): Block[];
    getBlocksByType(type: string): Immutable.List<Block>;
    getBlocksByTypeAsArray(type: string): Block[];
    getChild(path: Path): Node | null;
    getClosestBlock(path: Path): Block | null;
    getClosestInline(path: Path): Inline | null;
    getClosestVoid(path: Path, schema: Schema): Node | null;
    getClosest(path: Path, iterator: (node: Node) => boolean): Node | null;
    getCommonAncestor(a: Path, b: Path): Node;
    getDecorations(stack: Stack): Immutable.List<Range>;
    getDepth(path: Path, startAt?: number): number;
    getDescendant(path: Path): Node | null;
    getFirstInvalidNode(schema: Schema): Node | null;
    getFirstText(): Text | null;
    getFragmentAtRange(range: Range): Document;
    getFurthest(path: Path, iterator: (node: Node) => boolean): Node | null;
    getFurthestAncestor(path: Path): Node | null;
    getFurthestBlock(path: Path): Block | null;
    getFurthestInline(path: Path): Inline | null;
    getFurthestOnlyChildAncestor(path: Path): Node | null;
    getInlines(): Immutable.List<Inline>;
    getInlinesAsArray(): Inline[];
    getInlinesAtRange(range: Range): Immutable.List<Inline>;
    getInlinesAtRangeAsArray(range: Range): Inline[];
    getInlinesByType(type: string): Immutable.List<Inline>;
    getInlinesByTypeAsArray(type: string): Inline[];
    getInsertMarksAtRange(range: Range): Immutable.Set<Mark>;
    getKeysToPathsTable(): object;
    getLastText(): Text | null;
    getMarks(): Immutable.Set<Mark>;
    getMarksAsArray(): Mark[];
    getMarksAtPosition(key: string, offset: number): Immutable.Set<Mark>;
    getMarksAtRange(range: Range): Immutable.Set<Mark>;
    getMarksByType(type: string): Immutable.Set<Mark>;
    getMarksByTypeAsArray(type: string): Mark[];
    getNextBlock(key: string | Node): Block | null;
    getNextNode(path: Path): Node | null;
    getNextSibling(path: Path): Node | null;
    getNextText(path: Path): Text | null;
    getNode(path: Path): Node | null;
    getOffset(key: string): number;
    getOffsetAtRange(range: Range): number;
    getOrderedMarks(): Immutable.OrderedSet<Mark>;
    getOrderedMarksAtRange(range: Range): Immutable.OrderedSet<Mark>;
    getOrderedMarksBetweenPositions(
        startKey: string,
        startOffset: number,
        endKey: string,
        endOffset: number
    ): Immutable.OrderedSet<Mark>;
    getOrderedMarksByType(type: string): Immutable.OrderedSet<Mark>;
    getParent(path: Path): Node | null;
    getPath(key: string | Path): Path;
    getPreviousBlock(key: string | Node): Block | null;
    getPreviousNode(path: Path): Node | null;
    getPreviousSibling(path: Path): Node | null;
    getPreviousText(path: Path): Text | null;
    getSelectionIndexes(
        range: Range,
        isSelected?: boolean
    ): { start: number; end: number } | null;
    getText(): string;
    getTextAtOffset(offset: number): Text | null;
    getTextDirection(): string | null;
    getTexts(): Immutable.List<Text>;
    getTextsAsArray(): Text[];
    getTextsAtRange(range: Range): Immutable.List<Text>;
    getTextsAtRangeAsArray(range: Range): Text[];
    getTextsBetweenPositionsAsArray(startKey: string, endKey: string): Text[];
    hasBlockChildren(): boolean;
    hasChild(path: Path): boolean;
    hasInlineChildren(): boolean;
    hasDescendant(path: Path): boolean;
    hasNode(path: Path): boolean;
    hasVoidParent(path: Path, schema: Schema): boolean;
    insertNode(path: Path, node: Node): Node;
    insertText(
        path: Path,
        offset: number,
        text: string,
        marks: Immutable.Set<Mark>
    ): Node;
    isLeafBlock(): boolean;
    isLeafInline(): boolean;
    mapChildren(iterator: () => void): Node;
    mapDescendants(iterator: () => void): Node;
    mergeNode(path: Path): Node;
    moveNode(path: Path, newPath: Path, newIndex?: number): Node;
    normalize(schema: Schema): () => void | void;
    refinedNOde(path: Path, key: string): Node | null;
    refindPath(path: Path, key: string): Immutable.List<string> | null;
    regenerateKey(): Node;
    removeMark(path: Path, offset: number, length: number, mark: Mark): Node;
    removeNode(path: Path): Node;
    removeText(path: Path, offset: number, text: string): Node;
    replaceNode(path: Path, node: Node): Node;
    resolvePath(path: Path, index: number): Immutable.List<string>;
    resolvePoint(point: Point): Point;
    resolveRange(range: Range): Range;
    setNode(path: Path, properties: NodeProperties): Node;
    setMark(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Node;
    splitNode(path: Path, position: number, properties: NodeProperties): Node;
    validate(schema: Schema): Error | void;
}

export interface MarkProperties {
    type: string;
    data?: Immutable.Map<string, any> | { [key: string]: any };
}

export interface MarkJSON {
    type: string;
    data?: { [key: string]: any };
}

export class Mark extends Immutable.Record({}) {
    object: "mark";
    type: string;
    data: Immutable.Map<string, any>;

    static create(properties: MarkProperties | Mark | string): Mark;
    static createSet(
        array: MarkProperties[] | Mark[] | string[]
    ): Immutable.Set<Mark>;
    static fromJSON(properties: MarkJSON | Mark): Mark;
    static fromJS(properties: MarkJSON | Mark): Mark;
    static isMark(maybeMark: any): maybeMark is Mark;

    toJSON(): MarkProperties;
}

export interface ChangeOption {
    normalize?: boolean;
}

export class Change extends Immutable.Record({}) {
    object: "change";
    value: Value;
    operations: Immutable.List<Operation>;

    call(customChange: (change: Change, ...args: any[]) => Change): Change;

    applyOperations(operations: Operation[]): Change;
    applyOperation(operation: Operation): Change;

    withoutNormalization(fn: (change: Change) => void): Change;
    setOperationFlag(key: string, value: any): Change;
    getFlag(key: string, options?: object): any;
    unsetOperationFlag(key: string): Change;

    // Full Value Change
    setValue(properties: Value | ValueProperties): Change;

    // Current Value Changes
    deleteBackward(n: number): Change;
    deleteForward(n: number): Change;
    delete(): Change;
    insertBlock(block: Block | BlockProperties | string): Change;
    insertFragment(fragment: Document): Change;
    insertInline(inline: Inline | InlineProperties): Change;
    insertText(text: string): Change;
    addMark(mark: Mark | MarkProperties | string): Change;
    setBlocks(properties: BlockProperties | string): Change;
    setInlines(properties: InlineProperties | string): Change;
    splitBlock(depth: number): Change;
    splitInline(depth: number): Change;
    removeMark(mark: Mark | MarkProperties | string): Change;
    replaceMark(
        mark: Mark | MarkProperties | string,
        newMark: Mark | MarkProperties | string
    ): Change;
    toggleMark(mark: Mark | MarkProperties | string): Change;
    unwrapBlock(properties: BlockProperties | string): Change;
    unwrapInline(properties: InlineProperties | string): Change;
    wrapBlock(properties: BlockProperties | string): Change;
    wrapInline(properties: InlineProperties | string): Change;
    wrapText(prefix: string, suffix?: string): Change;

    // Selection Changes
    blur(): Change;

    flip(): Change;
    focus(): Change;
    move(n: number): Change;

    moveAnchorBackward(n?: number): Change;
    moveAnchorForward(n?: number): Change;
    moveAnchorTo(path: Path, offset: number): Change;
    moveAnchorToEndOfBlock(): Change;
    moveAnchorToEndOfInline(): Change;
    moveAnchorToEndOfDocument(): Change;
    moveAnchorToEndOfNextBlock(): Change;
    moveAnchorToEndOfNextInline(): Change;
    moveAnchorToEndOfNextText(): Change;
    moveAnchorEndOfNode(node: Node): Change;
    moveAnchorToEndOfPreviousBlock(): Change;
    moveAnchorToEndOfPreviousInline(): Change;
    moveAnchorToEndOfPreviousText(): Change;
    moveAnchorToEndOfText(): Change;
    moveAnchorToStartOfBlock(): Change;
    moveAnchorToStartOfDocument(): Change;
    moveAnchorToStartOfInline(): Change;
    moveAnchorToStartOfNextBlock(): Change;
    moveAnchorToStartOfNextInline(): Change;
    moveAnchorToStartOfNextText(): Change;
    moveAnchorToStartOfNode(node: Node): Change;
    moveAnchorToStartOfPreviousBlock(): Change;
    moveAnchorToStartOfPreviousInline(): Change;
    moveAnchorToStartOfPreviousText(): Change;
    moveAnchorToStartOfText(): Change;

    moveBackward(point: Point, n?: number): Change;
    moveEndBackward(point: Point, n?: number): Change;
    moveEndForward(point: Point, n?: number): Change;

    moveEndTo(path: Path, offset: number): Change;
    moveEndToEndOfBlock(): Change;
    moveEndToEndOfDocument(): Change;
    moveEndToEndOfInline(): Change;
    moveEndToEndOfNextBlock(): Change;
    moveEndToEndOfNextInline(): Change;
    moveEndToEndOfNextText(): Change;
    moveEndToEndOfNode(node: Node): Change;
    moveEndToEndOfPreviousBlock(): Change;
    moveEndToEndOfPreviousInline(): Change;
    moveEndToEndOfPreviousText(): Change;
    moveEndToEndOfText(): Change;
    moveEndToStartOfBlock(): Change;
    moveEndToStartOfDocument(): Change;
    moveEndToStartOfInline(): Change;
    moveEndToStartOfNextBlock(): Change;
    moveEndToStartOfNextInline(): Change;
    moveEndToStartOfNextText(): Change;
    moveEndToStartOfNode(node: Node): Change;
    moveEndToStartOfPreviousBlock(): Change;
    moveEndToStartOfPreviousInline(): Change;
    moveEndToStartOfPreviousText(): Change;
    moveEndToStartOfText(): Change;

    moveFocusBackward(n?: number): Change;
    moveFocusForward(n?: number): Change;
    moveFocusTo(point: Point, n?: number): Change;
    moveFocusToEndOfBlock(): Change;
    moveFocusToEndOfDocument(): Change;
    moveFocusToEndOfInline(): Change;
    moveFocusToEndOfNextBlock(): Change;
    moveFocusToEndOfNextInline(): Change;
    moveFocusToEndOfNextText(): Change;
    moveFocusToEndOfNode(node: Node): Change;
    moveFocusToEndOfPreviousBlock(): Change;
    moveFocusToEndOfPreviousInline(): Change;
    moveFocusToEndOfPreviousText(): Change;
    moveFocusToEndOfText(): Change;
    moveFocusToStartOfBlock(): Change;
    moveFocusToStartOfDocument(): Change;
    moveFocusToStartOfInline(): Change;
    moveFocusToStartOfNextBlock(): Change;
    moveFocusToStartOfNextInline(): Change;
    moveFocusToStartOfNextText(): Change;
    moveFocusToStartOfNode(node: Node): Change;
    moveFocusToStartOfPreviousBlock(): Change;
    moveFocusToStartOfPreviousInline(): Change;
    moveFocusToStartOfPreviousText(): Change;
    moveFocusToStartOfText(): Change;

    moveForward(point: Point, n?: number): Change;

    moveStartForward(point: Point, n?: number): Change;
    moveStartBackward(point: Point, n?: number): Change;
    moveStartTo(point: Point, n?: number): Change;
    moveStartToEndOfBlock(): Change;
    moveStartToEndOfDocument(): Change;
    moveStartToEndOfInline(): Change;
    moveStartToEndOfNextBlock(): Change;
    moveStartToEndOfNextInline(): Change;
    moveStartToEndOfNextText(): Change;
    moveStartToEndOfNode(node: Node): Change;
    moveStartToEndOfPreviousBlock(): Change;
    moveStartToEndOfPreviousInline(): Change;
    moveStartToEndOfPreviousText(): Change;
    moveStartToEndOfText(): Change;
    moveStartToStartOfBlock(): Change;
    moveStartToStartOfDocument(): Change;
    moveStartToStartOfInline(): Change;
    moveStartToStartOfNextBlock(): Change;
    moveStartToStartOfNextInline(): Change;
    moveStartToStartOfNextText(): Change;
    moveStartToStartOfNode(node: Node): Change;
    moveStartToStartOfPreviousBlock(): Change;
    moveStartToStartOfPreviousInline(): Change;
    moveStartToStartOfPreviousText(): Change;
    moveStartToStartOfText(): Change;

    moveTo(path: Path, offset: number): Change;
    moveToAnchor(): Change;
    moveToFocus(): Change;
    moveToStart(): Change;
    moveToEnd(): Change;
    moveToEndOfBlock(): Change;
    moveToEndOfDocument(): Change;
    moveToEndOfInline(): Change;
    moveToEndOfNextBlock(): Change;
    moveToEndOfNextInline(): Change;
    moveToEndOfNextText(): Change;
    moveToEndOfNode(node: Node): Change;
    moveToEndOfPreviousBlock(): Change;
    moveToEndOfPreviousInline(): Change;
    moveToEndOfPreviousText(): Change;
    moveToEndOfText(): Change;
    moveToStartOfBlock(): Change;
    moveToStartOfDocument(): Change;
    moveToStartOfInline(): Change;
    moveToStartOfNextBlock(): Change;
    moveToStartOfNextInline(): Change;
    moveToStartOfNextText(): Change;
    moveToStartOfNode(node: Node): Change;
    moveToStartOfPreviousBlock(): Change;
    moveToStartOfPreviousInline(): Change;
    moveToStartOfPreviousText(): Change;
    moveToStartOfText(): Change;

    moveToRangeOfDocument(): Change;
    moveToRangeOfNode(node: Node): Change;
    select(properties: Range | RangeProperties, options: ChangeOption): Change;
    setAnchor(point: Point): Change;
    setEnd(point: Point): Change;
    setFocus(point: Point): Change;
    setStart(point: Point): Change;
    snapshotSelection(): Change;
    deselect(): Change;

    // Document Changes
    deleteCharBackwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteLineBackwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteWordBackwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteBackwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteCharForwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteLineForwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteWordForwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteForwardAtRange(range: Range, options?: ChangeOption): Change;
    deleteAtRange(range: Range, options?: ChangeOption): Change;
    insertBlockAtRange(
        range: Range,
        block: Block | BlockProperties | string,
        options?: ChangeOption
    ): Change;
    insertFragmentAtRange(
        range: Range,
        fragment: Document,
        options?: ChangeOption
    ): Change;
    insertInlineAtRange(
        range: Range,
        inline: Inline | InlineProperties,
        options?: ChangeOption
    ): Change;
    insertTextAtRange(
        range: Range,
        text: string,
        marks?: Immutable.Set<Mark>,
        options?: ChangeOption
    ): Change;
    addMarkAtRange(
        range: Range,
        mark: Mark | MarkProperties | string,
        options?: ChangeOption
    ): Change;
    addMarksAtRange(
        range: Range,
        marks: Mark[] | MarkProperties[] | string[],
        options?: ChangeOption
    ): Change;
    setBlocksAtRange(
        range: Range,
        properties: BlockProperties | string,
        options?: ChangeOption
    ): Change;
    setInlinesAtRange(
        range: Range,
        properties: InlineProperties | string,
        options?: ChangeOption
    ): Change;
    splitBlockAtRange(
        range: Range,
        depth: number,
        height?: number,
        options?: ChangeOption
    ): Change;
    splitInlineAtRange(
        range: Range,
        depth: number,
        height?: number,
        options?: ChangeOption
    ): Change;
    removeMarkAtRange(
        range: Range,
        mark: Mark | MarkProperties | string,
        options?: ChangeOption
    ): Change;
    toggleMarkAtRange(
        range: Range,
        mark: Mark | MarkProperties | string,
        options?: ChangeOption
    ): Change;
    unwrapBlockAtRange(
        range: Range,
        properties: BlockProperties | string,
        options?: ChangeOption
    ): Change;
    unwrapInlineAtRange(
        range: Range,
        properties: InlineProperties | string,
        options?: ChangeOption
    ): Change;
    wrapBlockAtRange(
        range: Range,
        properties: BlockProperties | string,
        options?: ChangeOption
    ): Change;
    wrapInlineAtRange(
        range: Range,
        properties: InlineProperties | string,
        options?: ChangeOption
    ): Change;
    wrapTextAtRange(
        range: Range,
        prefix: string,
        suffix?: string,
        options?: ChangeOption
    ): Change;

    // Node Changes
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark
    ): Change;
    insertNodeByKey(key: string, index: number, node: Node): Change;
    insertFragmentByKey(key: string, index: number, fragment: Document): Change;
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Change;
    moveNodeByKey(key: string, newKey: string, newIndex: number): Change;
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark
    ): Change;
    removeNodeByKey(key: string): Change;
    replaceNodeByKey(key: string, node: Node): Change;
    removeTextByKey(key: string, offset: number, length: number): Change;
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Change;
    setNodeByKey(
        key: string,
        properties: BlockProperties | InlineProperties | string
    ): Change;
    splitNodeByKey(key: string, offset: number): Change;
    unwrapInlineByKey(
        key: string,
        properties: InlineProperties | string
    ): Change;
    unwrapBlockByKey(key: string, properties: BlockProperties | string): Change;
    unwrapNodeByKey(key: string): Change;
    wrapInlineByKey(key: string, properties: InlineProperties | string): Change;
    wrapBlockByKey(key: string, properties: BlockProperties | string): Change;
    wrapNodeByKey(key: string): Change;

    // by path
    addMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string,
        options: ChangeOption
    ): Change;
    insertFragmentByPath(
        path: Path,
        index: number,
        fragment: Document,
        options: ChangeOption
    ): Change;
    insertNodeByPath(
        path: Path,
        index: number,
        node: Node,
        options: ChangeOption
    ): Change;
    insertTextByPath(
        path: Path,
        offset: number,
        text: string,
        marks: Immutable.Set<Mark> | null | undefined,
        options: ChangeOption
    ): Change;
    mergeNodeByPath(path: Path, options: ChangeOption): Change;
    mergeNodeByKey(key: string, options: ChangeOption): Change;
    moveNodeByPath(
        path: Path,
        newPath: Path,
        newIndex: number,
        options: ChangeOption
    ): Change;
    removeMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string,
        options: ChangeOption
    ): Change;
    removeAllMarksByPath(path: Path, options: ChangeOption): Change;
    removeAllMarksByKey(key: string, options: ChangeOption): Change;
    removeNodeByPath(path: Path, options: ChangeOption): Change;
    removeTextByPath(
        path: Path,
        offset: number,
        length: number,
        options: ChangeOption
    ): Change;
    replaceNodeByPath(path: Path, newNode: Node, options: ChangeOption): Change;
    replaceTextByPath(
        path: Path,
        offset: number,
        length: number,
        text: string,
        marks: Immutable.Set<Mark> | null | undefined,
        options: ChangeOption
    ): Change;
    replaceTextByKey(
        key: string,
        offset: number,
        length: number,
        text: string,
        marks: Immutable.Set<Mark> | null | undefined,
        options: ChangeOption
    ): Change;
    setMarksByPath(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties,
        options: ChangeOption
    ): Change;
    setNodeByPath(
        path: Path,
        properties: NodeProperties,
        options: ChangeOption
    ): Change;
    setTextByPath(
        path: Path,
        text: string,
        marks: Immutable.Set<Mark> | null | undefined,
        options: ChangeOption
    ): Change;
    setTextByKey(
        key: string,
        text: string,
        marks: Immutable.Set<Mark> | null | undefined,
        options: ChangeOption
    ): Change;
    splitNodeByPath(
        path: Path,
        position: number,
        options?: ChangeOption
    ): Change;
    splitDescendantByPath(
        path: Path,
        textPath: Path,
        textOffset: number,
        options: ChangeOption
    ): Change;
    unwrapInlineByPath(
        path: Path,
        properties: InlineProperties,
        options: ChangeOption
    ): Change;
    unwrapBlockByPath(
        path: Path,
        properties: BlockProperties,
        options: ChangeOption
    ): Change;
    unwrapNodeByPath(path: Path, options: ChangeOption): Change;
    wrapBlockByPath(path: Path, block: Block, options: ChangeOption): Change;
    wrapInlineByPath(path: Path, inline: Inline, options: ChangeOption): Change;
    wrapNodeByPath(path: Path, node: Node): Change;

    normalize(options: ChangeOption): Change;
    normalizeDocument(options: ChangeOption): Change;
    normalizeNodeByKey(key: string, options: ChangeOption): Change;
    normalizeAncestorsByKey(key: string): Change;
    normalizeParentByKey(key: string, options: ChangeOption): Change;
    normalizeNodeByPath(path: Path, options: ChangeOption): Change;
    normalizeParentByPath(path: Path, options: ChangeOption): Change;
    normalizeNodeAndChildren(node: Node, schema: Schema): Change;
    normalizeNode(node: Node, schema: Schema): Change;

    // History Changes
    redo(): Change;
    undo(): Change;
}

export interface SelectionProperties {
    anchor?: Point;
    focus?: Point;
    isFocused?: boolean;
    marks?: Immutable.Set<Mark> | null;
}

export interface SelectionJSON {
    anchor?: PointJSON;
    focus?: PointJSON;
    isFocused?: boolean;
    isBackward?: boolean | null;
    marks?: MarkJSON[] | null;
}

export class Selection extends BaseRange {
    object: "selection";
    anchor: Point;
    focus: Point;
    isFocused: boolean;
    marks: Immutable.Set<Mark> | null;

    readonly isBlurred: boolean;

    static create(
        properties: SelectionProperties | Selection | Range
    ): Selection;
    static createProperties(
        attrs: SelectionProperties | string | Selection | Range
    ): SelectionProperties;
    static fromJSON(properties: SelectionJSON): Selection;

    toJSON(): SelectionJSON;

    isSelection(maybeSelection: any): maybeSelection is Selection;
    setIsFocused(value: boolean): Selection;
    setMarks(marks: Immutable.Set<Mark>): Selection;
    setProperties(properties: Selection | SelectionProperties): Selection;
}

export interface RangeProperties {
    anchor?: Point;
    focus?: Point;
}

export interface RangeJSON {
    anchor?: PointJSON;
    focus?: PointJSON;
}

export class Range extends BaseRange {
    object: "range";
    anchor: Point;

    static create(properties: RangeProperties | Range): Range;
    static createList(
        elements?:
            | Range[]
            | RangeProperties[]
            | Immutable.List<Range>
            | Immutable.List<RangeProperties>
    ): Immutable.List<Range>;
    static createProperties(
        attrs: RangeProperties | string | Range
    ): RangeProperties;
    static fromJSON(properties: RangeJSON): Range;
    static fromJS(properties: RangeJSON): Range;
    static isRange(maybeRange: any): maybeRange is Range;

    toJSON(): RangeJSON;
}

export interface DecorationProperties {
    anchor?: Point;
    focus?: Point;
    mark?: Mark | null;
}

export interface DecorationJSON {
    anchor?: PointJSON;
    focus?: PointJSON;
    mark?: MarkJSON | null;
}

export class Decoration extends BaseRange {
    object: "decoration";
    anchor: Point;
    focus: Point;
    mark: Mark | null;
    static create(properties: DecorationProperties | Range): Decoration;
    static createList(
        elements?:
            | Decoration[]
            | DecorationProperties[]
            | Immutable.List<Decoration>
            | Immutable.List<DecorationProperties>
    ): Immutable.List<Decoration>;
    static createProperties(
        attrs: DecorationProperties | string | Decoration
    ): DecorationProperties;
    static fromJSON(properties: DecorationJSON): Decoration;
    static fromJS(properties: DecorationJSON): Decoration;
    static isDecoration(maybeDecoration: any): maybeDecoration is Decoration;

    toJSON(): DecorationJSON;

    setProperties(properties: Decoration | DecorationProperties): Decoration;
}

export type RangeTypeProperties =
    | RangeProperties
    | SelectionProperties
    | DecorationProperties;

export type RangeTypeJSON = RangeJSON | SelectionJSON | DecorationJSON;
export type RangeType = Range | Selection | Decoration;

// tslint:disable-next-line strict-export-declare-modifiers
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
    moveAnchorTo(path: Path, offset?: number): RangeType;
    moveAnchorToStartOfNode(node: Node): RangeType;
    moveAnchorToEndOfNode(node: Node): RangeType;

    moveEndBackward(n?: number): RangeType;
    moveEndForward(n?: number): RangeType;
    moveEndTo(path: Path, offset?: number): RangeType;
    moveEndToStartOfNode(node: Node): RangeType;
    moveEndToEndOfNode(node: Node): RangeType;

    moveFocusBackward(n?: number): RangeType;
    moveFocusForward(n?: number): RangeType;
    moveFocusTo(path: Path, offset?: number): RangeType;
    moveFocusToStartOfNode(node: Node): RangeType;
    moveFocusToEndOfNode(node: Node): RangeType;

    moveStartBackward(n?: number): RangeType;
    moveStartForward(n?: number): RangeType;
    moveStartTo(path: Path, offset?: number): RangeType;
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
    updatePoints(updator: () => Point): RangeType;
    setStart(point: Point): RangeType;
    setProperties(
        properties: RangeTypeProperties | string | RangeType
    ): RangeType;

    toJSON(): RangeTypeJSON;
    toRange(): RangeType;
    unset(): RangeType;
}

export interface PointProperties {
    key?: string | null;
    offset?: number;
    path?: Path | null;
}

export interface PointJSON {
    key?: string | null;
    offset?: number;
    path?: Path | null;
    object: "point";
}

export class Point extends Immutable.Record({}) {
    object: "point";
    key: string | null;
    offset: number;
    path: Path | null;

    static create(properties: PointProperties | Point): Point;
    static createProperties(properties: PointProperties | Point): Point;
    static fromJSON(properties: PointJSON): Point;
    static fromJS(properties: PointJSON): Point;
    static isPoint(maybePoint: any): maybePoint is Point;

    readonly isSet: boolean;
    readonly isUnset: boolean;

    isAtEndOfNode(node: Node): boolean;
    isAtStartOfNode(node: Node): boolean;
    isInNode(node: Node): boolean;
    moveBackward(n?: number): Point;
    moveForward(n?: number): Point;
    moveTo(path: Path, offset?: number): Point;
    moveToStartOfNode(node: Node): Point;
    moveToEndOfNode(node: Node): Point;
    normalize(node: Node): Point;
    setKey(key: string): Point;
    setOffset(offset: number): Point;
    setPath(path: Path): Point;
    toJSON(options: any): object;
    unset(): Point;
}

export type Operation =
    | InsertTextOperation
    | RemoveTextOperation
    | AddMarkOperation
    | RemoveMarkOperation
    | SetMarkOperation
    | InsertNodeOperation
    | MergeNodeOperation
    | MoveNodeOperation
    | RemoveNodeOperation
    | SetNodeOperation
    | SplitNodeOperation
    | SetSelectionOperation
    | SetValueOperation;

export interface InsertTextOperation {
    type: "insert_text";
    path: number[];
    offset: number;
    text: string;
    marks: Mark[];
}

export interface RemoveTextOperation {
    type: "remove_text";
    path: number[];
    offset: number;
    text: string;
}

export interface AddMarkOperation {
    type: "add_mark";
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
}

export interface RemoveMarkOperation {
    type: "remove_mark";
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
}

export interface SetMarkOperation {
    type: "set_mark";
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
    properties: MarkProperties;
}

export interface InsertNodeOperation {
    type: "insert_node";
    path: number[];
    node: Node;
}

export interface MergeNodeOperation {
    type: "merge_node";
    path: number[];
    position: number;
}

export interface MoveNodeOperation {
    type: "move_node";
    path: number[];
    newPath: number[];
}

export interface RemoveNodeOperation {
    type: "remove_node";
    path: number[];
    node: Node;
}

export interface SetNodeOperation {
    type: "set_node";
    path: number[];
    properties: BlockProperties | InlineProperties | TextProperties;
}

export interface SplitNodeOperation {
    type: "split_node";
    path: number[];
    position: number;
    target: number;
}

export interface SetSelectionOperation {
    type: "set_selection";
    properties: RangeProperties;
    selection: Range;
}

export interface SetValueOperation {
    type: "set_value";
    properties: ValueProperties;
    value: Value;
}

export interface Operations {
    apply: (value: Value, operation: Operation) => Value;
    invert: (operation: Operation) => Operation;
}

export interface StackProperties {
    plugins?: any[];
}

export interface StackJSON {
    object: "stack";
    plugins: any[];
}

export class Stack extends Immutable.Record({}) {
    object: "stack";
    plugins: any[];

    static create(attrs: StackProperties): Stack;
    static isStack(maybeStack: any): maybeStack is Stack;

    static fromJSON(properties: StackJSON): Stack;
    static fromJS(properties: StackJSON): Stack;
    toJSON(options: any): object;
}

export interface HistoryProperties {
    undos?: Operation[];
    redos?: Operation[];
}

export interface HistoryJSON {
    object: "history";
    undos: any[];
    redos: any[];
}

export interface HistoryOptions {
    merge?: boolean;
    skip?: boolean;
}

export class History extends Immutable.Record({}) {
    redos: Stack;
    undos: Stack;
    object: "history";

    static create(attrs: History | HistoryProperties): History;
    static createOperationsList(
        oeprations?: Immutable.List<Operation> | Operation[]
    ): Immutable.List<Operation>;
    static fromJSON(object: HistoryJSON): History;
    static fromJS(object: HistoryJSON): History;
    static isHistory(maybeHistory: any): maybeHistory is History;

    save(operation: Operation, options?: HistoryOptions): History;
    toJSON(): HistoryJSON;
    toJS(): HistoryJSON;
}

export type ErrorCode =
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

export interface KeyUtils {
    create(key: string): string;
    setGenerator(func: () => any): void;
    resetGenerator(): void;
}

export type useMemoization = () => void;
export type resetMemoization = () => void;

export interface PathUtils {
    compare(
        path: Immutable.List<number>,
        target: Immutable.List<number>
    ): number | null;
    create(attrs: Immutable.List<number> | string): Immutable.List<number>;
    crop(
        a: Immutable.List<number>,
        b: Immutable.List<number>,
        size?: number
    ): Array<Immutable.List<number>>;
    decrement(
        path: Immutable.List<number>,
        n?: number,
        index?: number
    ): Immutable.List<number>;
    increment(
        path: Immutable.List<number>,
        n?: number,
        index?: number
    ): Immutable.List<number>;
    isAbove(
        path: Immutable.List<number>,
        target: Immutable.List<number>
    ): boolean;
    isAfter(
        path: Immutable.List<number>,
        target: Immutable.List<number>
    ): boolean;
    isBefore(
        path: Immutable.List<number>,
        target: Immutable.List<number>
    ): boolean;
    lift(path: Immutable.List<number>): Immutable.List<number>;
    max(a: Immutable.List<number>, b: Immutable.List<number>): number;
    min(a: Immutable.List<number>, b: Immutable.List<number>): number;
    relate(
        a: Immutable.List<number>,
        b: Immutable.List<number>
    ): Immutable.List<number>;
}

export {};
