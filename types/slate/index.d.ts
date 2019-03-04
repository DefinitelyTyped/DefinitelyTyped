// Type definitions for slate 0.44
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Kalley Powell <https://github.com/kalley>
//                 Francesco Agnoletto <https://github.com/Kornil>
//                 Irwan Fario Subastian <https://github.com/isubasti>
//                 Hanna Greaves <https://github.com/sgreav>
//                 Jack Allen <https://github.com/jackall3n>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as Immutable from "immutable";
import { SyntheticEvent } from "react";

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
    type?: string;
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
    normalize?: (editor: Editor, error: SlateError) => void;
    parent?: ObjectAndType | ObjectAndType[];
    text?: RegExp;
}

export interface SchemaProperties {
    document?: Rules;
    blocks?: RulesByNodeType;
    inlines?: RulesByNodeType;
}

export interface ValueProperties {
    document?: Document;
    selection?: Selection;
    data?: Data;
    decorations?: Immutable.List<Decoration> | null;
}

export interface ValueJSON {
    document?: DocumentJSON;
    selection?: Selection;
    data?: Data;
    decorations?: Immutable.List<Decoration> | null;
    object?: "value";
}

export type Path = Immutable.List<number> | string | number;

export class Value extends Immutable.Record({}) {
    document: Document;
    selection: Selection;
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
    getActiveMarksBetweenOffsets(
        startOffset: number,
        endOffset: number
    ): Immutable.Set<Mark>;
    getActiveMarks(): Immutable.Set<Mark>;
    getFirstText(): Text;
    getLastText(): Text;
    getText(): string;
    getMarksBetweenOffsets(
        startOffset: number,
        endOffset: number
    ): Immutable.Set<Mark>;
    getMarks(): Immutable.OrderedSet<Mark>;
    getMarksAsArray(): Mark[];
    getMarksAtIndex(index: number): Immutable.OrderedSet<Mark>;
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
    setLeaves(leaves: Immutable.List<Leaf>): Text;
}

export interface LeafProperties {
    marks?: Immutable.Set<Mark>;
    text?: string;
}

export interface LeafJSON {
    marks?: MarkJSON[];
    text?: string;
    object: "leaf";
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
    getBlocks(): Immutable.List<Block>;
    getBlocksAsArray(): Block[];
    getBlocksByType(type: string): Immutable.List<Block>;
    getBlocksByTypeAsArray(type: string): Block[];
    getChild(path: Path): Node | null;
    getClosestBlock(path: Path): Block | null;
    getClosestInline(path: Path): Inline | null;
    getClosestVoid(key: string | Path): Node | null;
    getClosest(path: Path, iterator: (node: Node) => boolean): Node | null;
    getCommonAncestor(a: Path, b: Path): Node;
    getDecorations(editor: Editor): Immutable.List<Decoration>;
    getDepth(path: Path, startAt?: number): number;
    getDescendant(path: Path): Node | null;
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
    getLeafBlocksAtRange(range: Range): Immutable.List<Block>;
    getLeafBlocksAtRangeAsArray(range: Range): Block[];
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
    getRootBlocksAtRange(range: Range): Immutable.List<Block>;
    getRootInlinesAtRange(range: Range): Immutable.List<Block>;
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
    hasVoidParent(path: Path, editor: Editor): boolean;
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
    normalize(editor: Editor): () => void | void;
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
    validate(editor: Editor): Error | void;
}

export interface MarkProperties {
    type: string;
    data?: Immutable.Map<string, any> | { [key: string]: any };
}

export interface MarkJSON {
    type: string;
    data?: { [key: string]: any };
    object: "mark";
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

export type ErrorCode =
    | "child_object_invalid"
    | "child_required"
    | "child_type_invalid"
    | "child_unknown"
    | "child_min_invalid"
    | "child_max_invalid"
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

export interface EditorProperties {
    onChange?: (change: { operations: Immutable.List<Operation>, value: Value }) => void;
    plugins?: any[];
    readOnly?: boolean;
    value?: Value;
}

export class Editor implements Controller {
    object: "editor";
    onChange: (change: { operations: Immutable.List<Operation>, value: Value }) => void;
    plugins: any[];
    readOnly: boolean;
    value: Value;
    constructor(attributes: EditorProperties)

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

    // Commandable
    addMark(mark: Mark | MarkProperties | string): Editor;
    delete(): Editor;
    deleteBackward(n: number): Editor;
    deleteForward(n: number): Editor;
    insertBlock(block: Block | BlockProperties | string): Editor;
    insertFragment(fragment: Document): Editor;
    insertInline(inline: Inline | InlineProperties): Editor;
    insertText(text: string): Editor;
    setBlocks(properties: BlockProperties | string): Editor;
    setInlines(properties: InlineProperties | string): Editor;
    splitBlock(depth: number): Editor;
    splitInline(depth: number): Editor;
    removeMark(mark: Mark | MarkProperties | string): Editor;
    replaceMark(
        mark: Mark | MarkProperties | string,
        newMark: Mark | MarkProperties | string
    ): Editor;
    toggleMark(mark: Mark | MarkProperties | string): Editor;
    unwrapBlock(properties: BlockProperties | string): Editor;
    unwrapInline(properties: InlineProperties | string): Editor;
    wrapBlock(properties: BlockProperties | string): Editor;
    wrapInline(properties: InlineProperties | string): Editor;
    wrapText(prefix: string, suffix?: string): Editor;
    blur(): Editor;
    deselect(): Editor;
    flip(): Editor;
    focus(): Editor;
    moveAnchorBackward(n?: number): Editor;
    moveAnchorForward(n?: number): Editor;
    moveAnchorTo(path: Path, offset?: number): Editor;
    moveAnchorToEndOfBlock(): Editor;
    moveAnchorToEndOfInline(): Editor;
    moveAnchorToEndOfDocument(): Editor;
    moveAnchorToEndOfNextBlock(): Editor;
    moveAnchorToEndOfNextInline(): Editor;
    moveAnchorToEndOfNextText(): Editor;
    moveAnchorEndOfNode(node: Node): Editor;
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
    moveAnchorToStartOfNode(node: Node): Editor;
    moveAnchorToStartOfPreviousBlock(): Editor;
    moveAnchorToStartOfPreviousInline(): Editor;
    moveAnchorToStartOfPreviousText(): Editor;
    moveAnchorToStartOfText(): Editor;
    moveEndBackward(n?: number): Editor;
    moveEndForward(n?: number): Editor;
    moveEndTo(path: Path, offset?: number): Editor;
    moveEndToEndOfBlock(): Editor;
    moveEndToEndOfDocument(): Editor;
    moveEndToEndOfInline(): Editor;
    moveEndToEndOfNextBlock(): Editor;
    moveEndToEndOfNextInline(): Editor;
    moveEndToEndOfNextText(): Editor;
    moveEndToEndOfNode(node: Node): Editor;
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
    moveEndToStartOfNode(node: Node): Editor;
    moveEndToStartOfPreviousBlock(): Editor;
    moveEndToStartOfPreviousInline(): Editor;
    moveEndToStartOfPreviousText(): Editor;
    moveEndToStartOfText(): Editor;
    moveFocusBackward(n?: number): Editor;
    moveFocusForward(n?: number): Editor;
    moveFocusTo(path: Path, offset?: number): Editor;
    moveFocusToEndOfBlock(): Editor;
    moveFocusToEndOfDocument(): Editor;
    moveFocusToEndOfInline(): Editor;
    moveFocusToEndOfNextBlock(): Editor;
    moveFocusToEndOfNextInline(): Editor;
    moveFocusToEndOfNextText(): Editor;
    moveFocusToEndOfNode(node: Node): Editor;
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
    moveFocusToStartOfNode(node: Node): Editor;
    moveFocusToStartOfPreviousBlock(): Editor;
    moveFocusToStartOfPreviousInline(): Editor;
    moveFocusToStartOfPreviousText(): Editor;
    moveFocusToStartOfText(): Editor;
    moveStartForward(n?: number): Editor;
    moveStartBackward(n?: number): Editor;
    moveStartTo(path: Path, n?: number): Editor;
    moveStartToEndOfBlock(): Editor;
    moveStartToEndOfDocument(): Editor;
    moveStartToEndOfInline(): Editor;
    moveStartToEndOfNextBlock(): Editor;
    moveStartToEndOfNextInline(): Editor;
    moveStartToEndOfNextText(): Editor;
    moveStartToEndOfNode(node: Node): Editor;
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
    moveStartToStartOfNode(node: Node): Editor;
    moveStartToStartOfPreviousBlock(): Editor;
    moveStartToStartOfPreviousInline(): Editor;
    moveStartToStartOfPreviousText(): Editor;
    moveStartToStartOfText(): Editor;
    moveBackward(n?: number): Editor;
    moveForward(n?: number): Editor;
    moveTo(path: Path, offset?: number): Editor;
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
    moveToEndOfNode(node: Node): Editor;
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
    moveToStartOfNode(node: Node): Editor;
    moveToStartOfPreviousBlock(): Editor;
    moveToStartOfPreviousInline(): Editor;
    moveToStartOfPreviousText(): Editor;
    moveToStartOfText(): Editor;
    moveToRangeOfDocument(): Editor;
    moveToRangeOfNode(node: Node): Editor;
    select(properties: Range | RangeProperties): Editor;
    addMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    deleteAtRange(range: Range): Editor;
    deleteCharBackwardAtRange(range: Range): Editor;
    deleteLineBackwardAtRange(range: Range): Editor;
    deleteWordBackwardAtRange(range: Range): Editor;
    deleteBackwardAtRange(range: Range, n: number): Editor;
    deleteCharForwardAtRange(range: Range): Editor;
    deleteLineForwardAtRange(range: Range): Editor;
    deleteWordForwardAtRange(range: Range): Editor;
    deleteForwardAtRange(range: Range, n: number): Editor;
    insertBlockAtRange(range: Range, block: Block | BlockProperties | string): Editor;
    insertFragmentAtRange(range: Range, fragment: Document): Editor;
    insertInlineAtRange(range: Range, inline: Inline | InlineProperties): Editor;
    insertTextAtRange(range: Range, text: string): Editor;
    setBlocksAtRange(range: Range, properties: BlockProperties | string): Editor;
    setInlinesAtRange(range: Range, properties: InlineProperties | string): Editor;
    splitBlockAtRange(range: Range, depth: number): Editor;
    splitInlineAtRange(range: Range, depth: number): Editor;
    removeMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    toggleMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    unwrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    unwrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    wrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    wrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    wrapTextAtRange(range: Range, prefix: string, suffix?: string): Editor;
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    addMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    insertNodeByKey(key: string, index: number, node: Node): Editor;
    insertNodeByPath(path: Path, index: number, node: Node): Editor;
    insertFragmentByKey(key: string, index: number, fragment: Document): Editor;
    insertFragmentByPath(path: Path, index: number, fragment: Document): Editor;
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    insertTextByPath(
        path: Path,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    mergeNodeByKey(key: string): Editor;
    mergeNodeByPath(path: Path): Editor;
    moveNodeByKey(key: string, newKey: string, newIndex: number): Editor;
    moveNodeByPath(path: Path, newPath: Path, newIndex: number): Editor;
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark | Mark | string
    ): Editor;
    removeMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    removeNodeByKey(key: string): Editor;
    removeNodeByPath(path: Path): Editor;
    replaceNodeByKey(key: string, node: Node): Editor;
    replaceNodeByPath(path: Path, newNode: Node): Editor;
    removeTextByKey(key: string, offset: number, length: number): Editor;
    removeTextByPath(path: Path, offset: number, length: number): Editor;
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    setMarksByPath(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    setNodeByKey(key: string, properties: BlockProperties | InlineProperties | string): Editor;
    setNodeByPath(path: Path, properties: NodeProperties | InlineProperties | string): Editor;
    splitNodeByKey(key: string, offset: number): Editor;
    splitNodeByPath(path: Path, position: number): Editor;
    unwrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    unwrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    unwrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    unwrapBlockByPath(path: Path, properties: BlockProperties | string): Editor;
    unwrapNodeByKey(key: string): Editor;
    unwrapNodeByPath(path: Path): Editor;
    wrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    wrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    wrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    wrapBlockByPath(path: Path, block: Block | string): Editor;
    wrapNodeByKey(key: string, parent: Node): Editor;
    wrapNodeByPath(path: Path, parent: Node): Editor;
    normalize(): Editor;
    withoutNormalizing(fn: () => void): Editor;
    withoutSaving(fn: () => void): Editor;
    withoutMerging(fn: () => void): Editor;
    redo(): Editor;
    undo(): Editor;
    snapshotSelection(): Editor;
    command(name: string, ...args: any[]): Editor;
    query(query: string, ...args: any[]): Editor;
    registerCommand(command: string): Editor;
    registerQuery(query: string): Editor;
    applyOperation(operation: Operation): Editor;
    run(key: string, ...args: any[]): Editor;
}

export interface Controller {
    // Current Selection Commands //
    /**
     * Add a mark to the characters in the current selection
     */
    addMark(mark: Mark | MarkProperties | string): Controller;

    /**
     * Delete everything in the current selection.
     */
    delete(): Controller;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteBackward(n: number): Controller;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteForward(n: number): Controller;

    /**
     * Insert a new block at the same level as the current block, splitting the current block to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertBlock(block: Block | BlockProperties | string): Controller;

    /**
     * Insert a document fragment at the current selection. If the selection is expanded, it will be deleted first.
     */
    insertFragment(fragment: Document): Controller;

    /**
     * Insert a new inline at the current cursor position, splitting the text to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertInline(inline: Inline | InlineProperties): Controller;

    /**
     * Insert a string of text at the current selection. If the selection is expanded, it will be deleted first
     */
    insertText(text: string): Controller;

    /**
     * Set the properties of the Blocks in the current selection.
     * Passing a string will set the blocks' type only.
     */
    setBlocks(properties: BlockProperties | string): Controller;

    /**
     * Set the properties of the Inlines nodes in the current selection.
     * Passing a string will set the nodes' type only.
     */
    setInlines(properties: InlineProperties | string): Controller;

    /**
     * Split the Block in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first.
     */
    splitBlock(depth: number): Controller;

    /**
     * Split the Inline node in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first
     */
    splitInline(depth: number): Controller;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type for removal.
     */
    removeMark(mark: Mark | MarkProperties | string): Controller;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type.
     */
    replaceMark(
        mark: Mark | MarkProperties | string,
        newMark: Mark | MarkProperties | string
    ): Controller;

    /**
     * Add or remove a mark from the characters in the current selection, depending on it already exists on any or not.
     * Passing a string will implicitly create a Mark of that type to toggle.
     */
    toggleMark(mark: Mark | MarkProperties | string): Controller;

    /**
     * Unwrap all Block nodes in the current selection that match a type and/or data
     */
    unwrapBlock(properties: BlockProperties | string): Controller;

    /**
     * Unwrap all Inline nodes in the current selection that match a type and/or data
     */
    unwrapInline(properties: InlineProperties | string): Controller;

    /**
     * Wrap the Block nodes in the current selection with a new Block
     */
    wrapBlock(properties: BlockProperties | string): Controller;

    /**
     *  Wrap the Block nodes in the current selection with a new Inline
     */
    wrapInline(properties: InlineProperties | string): Controller;

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
    /**
     * Move the anchor of the current selection forward n characters
     */
    moveAnchorForward(n?: number): Controller;
    /**
     * Move the anchor of the current selection to a new path and offset
     */
    moveAnchorTo(path: Path, offset?: number): Controller;
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
    moveAnchorEndOfNode(node: Node): Controller;
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
    moveEndTo(path: Path, offset?: number): Controller;
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
    moveFocusTo(path: Path, offset?: number): Controller;
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
    moveStartTo(path: Path, n?: number): Controller;
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
    moveTo(path: Path, offset?: number): Controller;
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
    select(properties: Range | RangeProperties): Controller;

    // Document Range Commands //

    /**
     * Add a mark to the characters in the range.
     * Passing a string as `mark` will implicitly create a mark with that `type`
     */
    addMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Controller;
    /**
     * Delete everything in the range
     */
    deleteAtRange(range: Range): Controller;
    /**
     * Delete backward until the char boundary at a range
     */
    deleteCharBackwardAtRange(range: Range): Controller;
    /**
     * Delete backward until the line boundary at a range
     */
    deleteLineBackwardAtRange(range: Range): Controller;
    /**
     * Delete backward until the word boundary at a range
     */
    deleteWordBackwardAtRange(range: Range): Controller;
    /**
     * Delete backward n characters at a range
     */
    deleteBackwardAtRange(range: Range, n: number): Controller;
    /**
     * Delete forward until the char boundary at a range
     */
    deleteCharForwardAtRange(range: Range): Controller;
    /**
     * Delete forward until the line boundary at a range
     */
    deleteLineForwardAtRange(range: Range): Controller;
    /**
     * Delete forward until the word boundary at a range
     */
    deleteWordForwardAtRange(range: Range): Controller;
    /**
     * Delete forward n characters at a range
     */
    deleteForwardAtRange(range: Range, n: number): Controller;

    /**
     * Insert a block node at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertBlockAtRange(range: Range, block: Block | BlockProperties | string): Controller;
    /**
     * Insert a document fragment at a range, if the range is expanded, it will be deleted first.
     */
    insertFragmentAtRange(range: Range, fragment: Document): Controller;
    /**
     * Insert a new inline at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertInlineAtRange(range: Range, inline: Inline | InlineProperties): Controller;
    /**
     * Insert text at range. If the range is expanded it will be deleted first
     */
    insertTextAtRange(range: Range, text: string): Controller;
    /**
     * Set the properties of the block nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setBlocksAtRange(range: Range, properties: BlockProperties | string): Controller;
    /**
     * Set the properties of the inline nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setInlinesAtRange(range: Range, properties: InlineProperties | string): Controller;
    /**
     * Split the block in a range by depth levels. If the range is expanded it will be deleted first.
     */
    splitBlockAtRange(range: Range, depth: number): Controller;
    /**
     * Split the inline in a range by depth levels. If the range is expanded it will be deleted first.
     */
    splitInlineAtRange(range: Range, depth: number): Controller;
    /**
     * Remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    removeMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Controller;
    /**
     * Add or remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    toggleMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Controller;
    /**
     * Unwrap all block nodes in a range that match properties
     */
    unwrapBlockAtRange(range: Range, properties: BlockProperties | string): Controller;
    /**
     * Unwrap all inline nodes in a range that match properties
     */
    unwrapInlineAtRange(range: Range, properties: InlineProperties | string): Controller;
    /**
     * wrap all block nodes in a range with a new block node with the provided properties
     */
    wrapBlockAtRange(range: Range, properties: BlockProperties | string): Controller;
    /**
     * wrap all inline nodes in a range with a new inline node with the provided properties
     */
    wrapInlineAtRange(range: Range, properties: InlineProperties | string): Controller;
    /**
     * Surround the text in a range with a prefix and suffix. If the suffix is ommitted,
     * the prefix will be used instead.
     */
    wrapTextAtRange(range: Range, prefix: string, suffix?: string): Controller;

    // Node commands //
    /**
     * Add a mark to length characters starting at an offset in a node by key
     */
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Controller;
    /**
     * Add a mark to length characters starting at an offset in a node by path
     */
    addMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Controller;
    /**
     * Insert a node at index inside a parent node by key
     */
    insertNodeByKey(key: string, index: number, node: Node): Controller;
    /**
     * Insert a node at index inside a parent node by apth
     */
    insertNodeByPath(path: Path, index: number, node: Node): Controller;
    /**
     * Insert a document fragment at index inside a parent node by key
     */
    insertFragmentByKey(key: string, index: number, fragment: Document): Controller;
    /**
     * Insert a document fragment at index inside a parent node by path
     */
    insertFragmentByPath(path: Path, index: number, fragment: Document): Controller;
    /**
     * Insert text at an offset in a text node by its key with optional marks
     */
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Controller;
    /**
     * Insert text at an offset in a text node by its path with optional marks
     */
    insertTextByPath(
        path: Path,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Controller;
    /**
     * Merge a node by its key with its previous sibling
     */
    mergeNodeByKey(key: string): Controller;
    /**
     * Merge a node by its path with its previous sibling
     */
    mergeNodeByPath(path: Path): Controller;
    /**
     * Move a node by its key to a new parent node with with newkey at newindex
     */
    moveNodeByKey(key: string, newKey: string, newIndex: number): Controller;
    /**
     * Move a node by its path to a new parent node with with newpath at newindex
     */
    moveNodeByPath(path: Path, newPath: Path, newIndex: number): Controller;
    /**
     * Remove a mark from length characters starting at an offset in a node by key
     */
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark | Mark | string
    ): Controller;
    /**
     * Remove a mark from length characters starting at an offset in a node by path
     */
    removeMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Controller;
    /**
     * Remove a node from the document by its key
     */
    removeNodeByKey(key: string): Controller;
    /**
     * Remove a node from the document by its path
     */
    removeNodeByPath(path: Path): Controller;
    /**
     * Replace a node in the document with a new node by key
     */
    replaceNodeByKey(key: string, node: Node): Controller;
    /**
     * Replace a node in the document with a new node by path
     */
    replaceNodeByPath(path: Path, newNode: Node): Controller;
    /**
     * Remove length characters of text starting at an offset in a node by key
     */
    removeTextByKey(key: string, offset: number, length: number): Controller;
    /**
     * Remove length characters of text starting at an offset in a node by path
     */
    removeTextByPath(path: Path, offset: number, length: number): Controller;
    /**
     * Set a dictionary of properties on a mark by its key.
     */
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Controller;
    /**
     * Set a dictionary of properties on a mark by its path.
     */
    setMarksByPath(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Controller;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByKey(key: string, properties: BlockProperties | InlineProperties | string): Controller;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByPath(path: Path, properties: NodeProperties | InlineProperties | string): Controller;
    /**
     * Split a node by its key at an offset
     */
    splitNodeByKey(key: string, offset: number): Controller;
    /**
     * Split a node by its path at an offset
     */
    splitNodeByPath(path: Path, position: number): Controller;
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
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByKey(key: string): Controller;
    /**
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByPath(path: Path): Controller;
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
    wrapBlockByPath(path: Path, block: Block | string): Controller;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByKey(key: string, parent: Node): Controller;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByPath(path: Path, parent: Node): Controller;

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
    withoutSaving(fn: () => void): Controller;
    /**
     * Usually all command operations are merged into a single save point in history,
     * if more control is desired, create single save points using this function.
     */
    withoutMerging(fn: () => void): Controller;

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
     * Snapshot the current selection for undo purposes.
     */
    snapshotSelection(): Controller;
    command(name: string, ...args: any[]): Controller;
    query(query: string, ...args: any[]): Controller;
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
    applyOperation(operation: Operation): Controller;
    /**
     * Run the middleware stack by key with args, returning its result.
     * In normal operation you never need to use this method! Reserved for testing.
     */
    run(key: string, ...args: any[]): Controller;
}

export {};
