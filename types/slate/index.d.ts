// Type definitions for slate 0.43
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Kalley Powell <https://github.com/kalley>
//                 Francesco Agnoletto <https://github.com/Kornil>
//                 Irwan Fario Subastian <https://github.com/isubasti>
//                 Sebastian Greaves <https://github.com/sgreav>
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
    normalize?: (editor: Editor, error: SlateError) => void;
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
    onChange?: (value: Value) => void;
    plugins?: any[];
    readOnly?: boolean;
    value?: Value;
}

export class Editor {
    object: "editor";
    onChange: (value: Value) => void;
    plugins: any[];
    readOnly: boolean;
    value: Value;
    constructor(attributes: EditorProperties)

    /**
     * Apply an `operation` to the editor, updating its value.
     */
    applyOperation(operation: Operation): Editor;

    /**
     * Synchronously flush the current changes to editor, calling onChange.
     * In normal operation you never need to use this method! Reserved for testing.
     */
    flush(): Editor;

    command(name: string, ...args: any[]): void;
    event(handler: string, event: Event | SyntheticEvent): void;
    query(query: string, ...args: any[]): any;

    /**
     * Add a new command by type with the editor. This will make the command available as a top-level method on the editor
     */
    registerCommand(command: string): void;

    /**
     * Add a new query by type with the editor. This will make the query available as a top-level method on the editor.
     */
    registerQuery(query: string): void;

    /**
     * Run the middleware stack by key with args, returning its result.
     * In normal operation you never need to use this method! Reserved for testing.
     */
    run(key: string, ...args: any[]): any;
    setReadOnly(readOnly: boolean): Editor;

    /**
     * Set the editor's value state.
     * You can optionally provide a normalize option to either for the editor to completely re-normalize the new value based on its schema or not.
     * By default, the editor will re-normalize only if the value is not equal to its previously seen value (which it knows was normalized).
     */
    setValue(value: Value, options?: { normalize: () => void }): Editor;

    // Built in Command Operations //
    // Current Selection Commands //
    /**
     * Add a mark to the characters in the current selection
     */
    addMark(mark: Mark | MarkProperties | string): Editor;

    /**
     * Delete everything in the current selection.
     */
    delete(): Editor;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteBackward(n: number): Editor;

    /**
     * Delete backward n characters at the current cursor.
     * If the selection is expanded, behaviour is equivalent to delete()
     */
    deleteForward(n: number): Editor;

    /**
     * Insert a new block at the same level as the current block, splitting the current block to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertBlock(block: Block | BlockProperties | string): Editor;

    /**
     * Insert a document fragment at the current selection. If the selection is expanded, it will be deleted first.
     */
    insertFragment(fragment: Document): Editor;

    /**
     * Insert a new inline at the current cursor position, splitting the text to make room if it is non-empty.
     * If the selection is expanded, it will be deleted first.
     */
    insertInline(inline: Inline | InlineProperties): Editor;

    /**
     * Insert a string of text at the current selection. If the selection is expanded, it will be deleted first
     */
    insertText(text: string): Editor;

    /**
     * Set the properties of the Blocks in the current selection.
     * Passing a string will set the blocks' type only.
     */
    setBlocks(properties: BlockProperties | string): Editor;

    /**
     * Set the properties of the Inlines nodes in the current selection.
     * Passing a string will set the nodes' type only.
     */
    setInlines(properties: InlineProperties | string): Editor;

    /**
     * Split the Block in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first.
     */
    splitBlock(depth: number): Editor;

    /**
     * Split the Inline node in the current selection by depth levels.
     * If the selection is expanded, it will be deleted first
     */
    splitInline(depth: number): Editor;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type for removal.
     */
    removeMark(mark: Mark | MarkProperties | string): Editor;

    /**
     * Remove a mark from the characters in the current selection.
     * Passing a string will implicitly create a Mark of that type.
     */
    replaceMark(
        mark: Mark | MarkProperties | string,
        newMark: Mark | MarkProperties | string
    ): Editor;

    /**
     * Add or remove a mark from the characters in the current selection, depending on it already exists on any or not.
     * Passing a string will implicitly create a Mark of that type to toggle.
     */
    toggleMark(mark: Mark | MarkProperties | string): Editor;

    /**
     * Unwrap all Block nodes in the current selection that match a type and/or data
     */
    unwrapBlock(properties: BlockProperties | string): Editor;

    /**
     * Unwrap all Inline nodes in the current selection that match a type and/or data
     */
    unwrapInline(properties: InlineProperties | string): Editor;

    /**
     * Wrap the Block nodes in the current selection with a new Block
     */
    wrapBlock(properties: BlockProperties | string): Editor;

    /**
     *  Wrap the Block nodes in the current selection with a new Inline
     */
    wrapInline(properties: InlineProperties | string): Editor;

    /**
     * Surround the text in the current selection with prefix and suffix strings.
     * If the suffix is ommitted, the prefix will be used instead.
     */
    wrapText(prefix: string, suffix?: string): Editor;

    // Selection Commands //
    /**
     * Blur the current selection
     */
    blur(): Editor;

    /**
     * Unset the selection
     */
    deselect(): Editor;

    /**
     * Flip the selection
     */
    flip(): Editor;

    /**
     * Focus the current selection
     */
    focus(): Editor;

    /**
     * Move the anchor of the current selection backward n characters
     */
    moveAnchorBackward(n?: number): Editor;
    /**
     * Move the anchor of the current selection forward n characters
     */
    moveAnchorForward(n?: number): Editor;
    /**
     * Move the anchor of the current selection to a new path and offset
     */
    moveAnchorTo(path: Path, offset: number): Editor;
    /**
     * Move the anchor of the current selection to the end of the closest block parent.
     */
    moveAnchorToEndOfBlock(): Editor;
    /**
     * Move the anchor of the current selection to the end of the closest inline parent.
     */
    moveAnchorToEndOfInline(): Editor;
    /**
     * Move the anchor of the current selection to the end of the document.
     */
    moveAnchorToEndOfDocument(): Editor;
    /**
     * Move the anchor of the current selection to the end of the next block.
     */
    moveAnchorToEndOfNextBlock(): Editor;
    /**
     * Move the anchor of the current selection to the end of the next inline.
     */
    moveAnchorToEndOfNextInline(): Editor;
    /**
     * Move the anchor of the current selection to the end of the next text.
     */
    moveAnchorToEndOfNextText(): Editor;
    /**
     * Move the anchor of the current selection to the end of the provided node.
     */
    moveAnchorEndOfNode(node: Node): Editor;
    /**
     * Move the anchor of the current selection to the end of the previous block.
     */
    moveAnchorToEndOfPreviousBlock(): Editor;
    /**
     * Move the anchor of the current selection to the end of the previous inline.
     */
    moveAnchorToEndOfPreviousInline(): Editor;
    /**
     * Move the anchor of the current selection to the end of the previous text.
     */
    moveAnchorToEndOfPreviousText(): Editor;
    /**
     * Move the anchor of the current selection to the end of the current text node.
     */
    moveAnchorToEndOfText(): Editor;
    /**
     * Move the anchor of the current selection to the start of the closest block parent.
     */
    moveAnchorToStartOfBlock(): Editor;
    /**
     * Move the anchor of the current selection to the start of the document.
     */
    moveAnchorToStartOfDocument(): Editor;
    /**
     * Move the anchor of the current selection to the start of the closest inline parent.
     */
    moveAnchorToStartOfInline(): Editor;
    /**
     * Move the anchor of the current selection to the start of the next block.
     */
    moveAnchorToStartOfNextBlock(): Editor;
    /**
     * Move the anchor of the current selection to the start of the next inline.
     */
    moveAnchorToStartOfNextInline(): Editor;
    /**
     * Move the anchor of the current selection to the start of the next text node.
     */
    moveAnchorToStartOfNextText(): Editor;
    /**
     * Move the anchor of the current selection to the start of the provided node.
     */
    moveAnchorToStartOfNode(node: Node): Editor;
    /**
     * Move the anchor of the current selection to the start of the previous block.
     */
    moveAnchorToStartOfPreviousBlock(): Editor;
    /**
     * Move the anchor of the current selection to the start of the previous inline.
     */
    moveAnchorToStartOfPreviousInline(): Editor;
    /**
     * Move the anchor of the current selection to the start of the previous text node.
     */
    moveAnchorToStartOfPreviousText(): Editor;
    /**
     * Move the anchor of the current selection to the start of the current text node.
     */
    moveAnchorToStartOfText(): Editor;

    /**
     * Move the end of the selection backward n characters
     */
    moveEndBackward(n?: number): Editor;
    /**
     * Move the end of the selection foward n characters
     */
    moveEndForward(n?: number): Editor;

    /**
     * Move the end of the selection to a new path and offset
     */
    moveEndTo(path: Path, offset: number): Editor;
    /**
     * Move the end of the current selection to the end of the closest block parent.
     */
    moveEndToEndOfBlock(): Editor;
    /**
     * Move the end of the current selection to the end of the document.
     */
    moveEndToEndOfDocument(): Editor;
    /**
     * Move the end of the current selection to the end of the closest inline parent.
     */
    moveEndToEndOfInline(): Editor;
    /**
     * Move the anchor of the current selection to the end of the next block.
     */
    moveEndToEndOfNextBlock(): Editor;
    /**
     * Move the end of the current selection to the end of the next inline.
     */
    moveEndToEndOfNextInline(): Editor;
    /**
     * Move the end of the current selection to the end of the next text.
     */
    moveEndToEndOfNextText(): Editor;
    /**
     * Move the end of the current selection to the end of the provided node.
     */
    moveEndToEndOfNode(node: Node): Editor;
    /**
     * Move the end of the current selection to the end of the previous block.
     */
    moveEndToEndOfPreviousBlock(): Editor;
    /**
     * Move the end of the current selection to the end of the previous inline.
     */
    moveEndToEndOfPreviousInline(): Editor;
    /**
     * Move the editor of the current selection to the end of the previous text.
     */
    moveEndToEndOfPreviousText(): Editor;
    /**
     * Move the end of the current selection to the end of the current text node.
     */
    moveEndToEndOfText(): Editor;
    /**
     * Move the end of the current selection to the start of the closest block parent.
     */
    moveEndToStartOfBlock(): Editor;
    /**
     * Move the end of the current selection to the start of the document.
     */
    moveEndToStartOfDocument(): Editor;
    /**
     * Move the end of the current selection to the start of the closest inline parent.
     */
    moveEndToStartOfInline(): Editor;
    /**
     * Move the end of the current selection to the start of the next block.
     */
    moveEndToStartOfNextBlock(): Editor;
    /**
     * Move the end of the current selection to the start of the next inline.
     */
    moveEndToStartOfNextInline(): Editor;
    /**
     * Move the end of the current selection to the start of the next text node.
     */
    moveEndToStartOfNextText(): Editor;
    /**
     * Move the end of the current selection to the start of the provided node.
     */
    moveEndToStartOfNode(node: Node): Editor;
    /**
     * Move the end of the current selection to the start of the previous block.
     */
    moveEndToStartOfPreviousBlock(): Editor;
    /**
     * Move the end of the current selection to the start of the previous inline.
     */
    moveEndToStartOfPreviousInline(): Editor;
    /**
     * Move the end of the current selection to the start of the previous text node.
     */
    moveEndToStartOfPreviousText(): Editor;
    /**
     * Move the end of the current selection to the start of the current text node.
     */
    moveEndToStartOfText(): Editor;

    /**
     * Move the focus of the current selection backward n characters
     */
    moveFocusBackward(n?: number): Editor;
    /**
     * Move the focus of the current selection forward n characters
     */
    moveFocusForward(n?: number): Editor;
    /**
     * Move the focus of the current selection to a new path and offset
     */
    moveFocusTo(path: Path, offset: number): Editor;
    /**
     * Move the focus of the current selection to the end of the closest block parent.
     */
    moveFocusToEndOfBlock(): Editor;
    /**
     * Move the focus of the current selection to the end of the document.
     */
    moveFocusToEndOfDocument(): Editor;
    /**
     * Move the focus of the current selection to the end of the closest inline parent.
     */
    moveFocusToEndOfInline(): Editor;
    /**
     * Move the focus of the current selection to the end of the next block.
     */
    moveFocusToEndOfNextBlock(): Editor;
    /**
     * Move the focus of the current selection to the end of the next inline.
     */
    moveFocusToEndOfNextInline(): Editor;
    /**
     * Move the focus of the current selection to the end of the next text.
     */
    moveFocusToEndOfNextText(): Editor;
    /**
     * Move the focus of the current selection to the end of the provided node.
     */
    moveFocusToEndOfNode(node: Node): Editor;
    /**
     * Move the focus of the current selection to the end of the previous block.
     */
    moveFocusToEndOfPreviousBlock(): Editor;
    /**
     * Move the focus of the current selection to the end of the previous inline.
     */
    moveFocusToEndOfPreviousInline(): Editor;
    /**
     * Move the focus of the current selection to the end of the previous text.
     */
    moveFocusToEndOfPreviousText(): Editor;
    /**
     * Move the focus of the current selection to the end of the current text node.
     */
    moveFocusToEndOfText(): Editor;
    /**
     * Move the focus of the current selection to the start of the closest block parent.
     */
    moveFocusToStartOfBlock(): Editor;
    /**
     * Move the focus of the current selection to the start of the document.
     */
    moveFocusToStartOfDocument(): Editor;
    /**
     * Move the focus of the current selection to the start of the closest inline parent.
     */
    moveFocusToStartOfInline(): Editor;
    /**
     * Move the focus of the current selection to the start of the next block.
     */
    moveFocusToStartOfNextBlock(): Editor;
    /**
     * Move the focus of the current selection to the start of the next inline.
     */
    moveFocusToStartOfNextInline(): Editor;
    /**
     * Move the focus of the current selection to the start of the next text node.
     */
    moveFocusToStartOfNextText(): Editor;
    /**
     * Move the focus of the current selection to the start of the provided node.
     */
    moveFocusToStartOfNode(node: Node): Editor;
    /**
     * Move the focus of the current selection to the start of the previous block.
     */
    moveFocusToStartOfPreviousBlock(): Editor;
    /**
     * Move the focus of the current selection to the start of the previous inline.
     */
    moveFocusToStartOfPreviousInline(): Editor;
    /**
     * Move the focus of the current selection to the start of the previous text node.
     */
    moveFocusToStartOfPreviousText(): Editor;
    /**
     * Move the focus of the current selection to the start of the current text node.
     */
    moveFocusToStartOfText(): Editor;

    /**
     * Move the start of the current selection backward n characters
     */
    moveStartForward(point: Point, n?: number): Editor;
    /**
     * Move the start of the current selection forward n characters
     */
    moveStartBackward(point: Point, n?: number): Editor;
    /**
     * Move the start of the current selection to a new path and offset
     */
    moveStartTo(point: Point, n?: number): Editor;
    /**
     * Move the start of the current selection to the end of the closest block parent.
     */
    moveStartToEndOfBlock(): Editor;
    /**
     * Move the start of the current selection to the end of the document.
     */
    moveStartToEndOfDocument(): Editor;
    /**
     * Move the start of the current selection to the end of the closest inline parent.
     */
    moveStartToEndOfInline(): Editor;
    /**
     * Move the start of the current selection to the end of the next block.
     */
    moveStartToEndOfNextBlock(): Editor;
    /**
     * Move the start of the current selection to the end of the next inline.
     */
    moveStartToEndOfNextInline(): Editor;
    /**
     * Move the start of the current selection to the end of the next text.
     */
    moveStartToEndOfNextText(): Editor;
    /**
     * Move the start of the current selection to the end of the provided node.
     */
    moveStartToEndOfNode(node: Node): Editor;
    /**
     * Move the start of the current selection to the end of the previous block.
     */
    moveStartToEndOfPreviousBlock(): Editor;
    /**
     * Move the start of the current selection to the end of the previous inline.
     */
    moveStartToEndOfPreviousInline(): Editor;
    /**
     * Move the start of the current selection to the end of the previous text.
     */
    moveStartToEndOfPreviousText(): Editor;
    /**
     * Move the start of the current selection to the end of the current text node.
     */
    moveStartToEndOfText(): Editor;
    /**
     * Move the start of the current selection to the start of the closest block parent.
     */
    moveStartToStartOfBlock(): Editor;
    /**
     * Move the start of the current selection to the start of the document.
     */
    moveStartToStartOfDocument(): Editor;
    /**
     * Move the start of the current selection to the start of the closest inline parent.
     */
    moveStartToStartOfInline(): Editor;
    /**
     * Move the start of the current selection to the start of the next block.
     */
    moveStartToStartOfNextBlock(): Editor;
    /**
     * Move the start of the current selection to the start of the next inline.
     */
    moveStartToStartOfNextInline(): Editor;
    /**
     * Move the start of the current selection to the start of the next text node.
     */
    moveStartToStartOfNextText(): Editor;
    /**
     * Move the start of the current selection to the start of the provided node.
     */
    moveStartToStartOfNode(node: Node): Editor;
    /**
     * Move the start of the current selection to the start of the previous block.
     */
    moveStartToStartOfPreviousBlock(): Editor;
    /**
     * Move the start of the current selection to the start of the previous inline.
     */
    moveStartToStartOfPreviousInline(): Editor;
    /**
     * Move the start of the current selection to the start of the previous text node.
     */
    moveStartToStartOfPreviousText(): Editor;
    /**
     * Move the start of the current selection to the start of the current text node.
     */
    moveStartToStartOfText(): Editor;

    /**
     * Move the anchor and focus of the selection backward n characters.
     */
    moveBackward(n?: number): Editor;
    /**
     * Move the anchor and focus of the selection forward n characters.
     */
    moveForward(n?: number): Editor;
    /**
     * Collapse the current selection at the provided new path and offset.
     */
    moveTo(path: Path, offset: number): Editor;
    /**
     * Collapse the current selection at the anchor.
     */
    moveToAnchor(): Editor;
    /**
     * Collapse the current selection at the focus.
     */
    moveToFocus(): Editor;
    /**
     * Collapse the current selection at the start.
     */
    moveToStart(): Editor;
    /**
     * Collapse the current selection at the end.
     */
    moveToEnd(): Editor;
    /**
     * Collapse the current selection at the end of the closest block parent.
     */
    moveToEndOfBlock(): Editor;
    /**
     * Collapse the current selection at the end of the document.
     */
    moveToEndOfDocument(): Editor;
    /**
     * Collapse the current selection at the end of the closest inline parent.
     */
    moveToEndOfInline(): Editor;
    /**
     * Collapse the current selection at the end of the next block.
     */
    moveToEndOfNextBlock(): Editor;
    /**
     * Collapse the current selection at the end of the inline.
     */
    moveToEndOfNextInline(): Editor;
    /**
     * Collapse the current selection at the end of the next text node.
     */
    moveToEndOfNextText(): Editor;
    /**
     * Collapse the current selection at the end of the provided node.
     */
    moveToEndOfNode(node: Node): Editor;
    /**
     * Collapse the current selection at the end of the previous block.
     */
    moveToEndOfPreviousBlock(): Editor;
    /**
     * Collapse the current selection at the end of the previous inline.
     */
    moveToEndOfPreviousInline(): Editor;
    /**
     * Collapse the current selection at the end of the previous text node.
     */
    moveToEndOfPreviousText(): Editor;
    /**
     * Collapse the current selection at the end of the current text node.
     */
    moveToEndOfText(): Editor;
    /**
     * Collapse the current selection at the start of the nearest block parent.
     */
    moveToStartOfBlock(): Editor;
    /**
     * Collapse the current selection at the start of the document.
     */
    moveToStartOfDocument(): Editor;
    /**
     * Collapse the current selection at the start of the nearest inline parent.
     */
    moveToStartOfInline(): Editor;
    /**
     * Collapse the current selection at the start of the next block.
     */
    moveToStartOfNextBlock(): Editor;
    /**
     * Collapse the current selection at the start of the next inline.
     */
    moveToStartOfNextInline(): Editor;
    /**
     * Collapse the current selection at the start of the next text node.
     */
    moveToStartOfNextText(): Editor;
    /**
     * Collapse the current selection at the start of the provided node.
     */
    moveToStartOfNode(node: Node): Editor;
    /**
     * Collapse the current selection at the start of the previous block.
     */
    moveToStartOfPreviousBlock(): Editor;
    /**
     * Collapse the current selection at the start of the previous inline.
     */
    moveToStartOfPreviousInline(): Editor;
    /**
     * Collapse the current selection at the start of the previous text node.
     */
    moveToStartOfPreviousText(): Editor;
    /**
     * Collapse the current selection at the start of the current text node.
     */
    moveToStartOfText(): Editor;

    /**
     * Move the current selection's anchor to the start of the document and its focus to the end of it, selecting everything.
     */
    moveToRangeOfDocument(): Editor;
    /**
     * Move the current selection's anchor to the start of the provided node and its focus to the end of it.
     */
    moveToRangeOf(node: Node): Editor;
    /**
     * Merge the current selection with the provided properties
     */
    select(properties: Range | RangeProperties): Editor;

    // Document Range Commands //

    /**
     * Add a mark to the characters in the range.
     * Passing a string as `mark` will implicitly create a mark with that `type`
     */
    addMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    /**
     * Delete everything in the range
     */
    deleteAtRange(range: Range): Editor;
    /**
     * Delete backward until the char boundary at a range
     */
    deleteCharBackwardAtRange(range: Range): Editor;
    /**
     * Delete backward until the line boundary at a range
     */
    deleteLineBackwardAtRange(range: Range): Editor;
    /**
     * Delete backward until the word boundary at a range
     */
    deleteWordBackwardAtRange(range: Range): Editor;
    /**
     * Delete backward n characters at a range
     */
    deleteBackwardAtRange(range: Range, n: number): Editor;
    /**
     * Delete forward until the char boundary at a range
     */
    deleteCharForwardAtRange(range: Range): Editor;
    /**
     * Delete forward until the line boundary at a range
     */
    deleteLineForwardAtRange(range: Range): Editor;
    /**
     * Delete forward until the word boundary at a range
     */
    deleteWordForwardAtRange(range: Range): Editor;
    /**
     * Delete forward n characters at a range
     */
    deleteForwardAtRange(range: Range, n: number): Editor;

    /**
     * Insert a block node at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertBlockAtRange(range: Range, block: Block | BlockProperties | string): Editor;
    /**
     * Insert a document fragment at a range, if the range is expanded, it will be deleted first.
     */
    insertFragmentAtRange(range: Range, fragment: Document): Editor;
    /**
     * Insert a new inline at range, splitting text to make room if it is non-empty.
     * If the range is expanded, it will be deleted first.
     */
    insertInlineAtRange(range: Range, inline: Inline | InlineProperties): Editor;
    /**
     * Insert text at range. If the range is expanded it will be deleted first
     */
    insertTextAtRange(range: Range, text: string): Editor;
    /**
     * Set the properties of the block nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setBlocksAtRange(range: Range, properties: BlockProperties | string): Editor;
    /**
     * Set the properties of the inline nodes in a range.
     * Passing a string will set the nodes' type only
     */
    setInlinesAtRange(range: Range, properties: InlineProperties | string): Editor;
    /**
     * Split the block in a range by depth levels. If the range is expanded it will be deleted first.
     */
    splitBlockAtRange(range: Range, depth: number): Editor;
    /**
     * Split the inline in a range by depth levels. If the range is expanded it will be deleted first.
     */
    splitInlineAtRange(range: Range, depth: number): Editor;
    /**
     * Remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    removeMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    /**
     * Add or remove a mark from characters in the range. Passing a string will
     * implicitly create a mark of that type for deletion.
     */
    toggleMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    /**
     * Unwrap all block nodes in a range that match properties
     */
    unwrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    /**
     * Unwrap all inline nodes in a range that match properties
     */
    unwrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    /**
     * wrap all block nodes in a range with a new block node with the provided properties
     */
    wrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    /**
     * wrap all inline nodes in a range with a new inline node with the provided properties
     */
    wrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    /**
     * Surround the text in a range with a prefix and suffix. If the suffix is ommitted,
     * the prefix will be used instead.
     */
    wrapTextAtRange(range: Range, prefix: string, suffix?: string): Editor;

    // Node commands //
    /**
     * Add a mark to length characters starting at an offset in a node by key
     */
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark
    ): Editor;
    /**
     * Add a mark to length characters starting at an offset in a node by path
     */
    addMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    /**
     * Insert a node at index inside a parent node by key
     */
    insertNodeByKey(key: string, index: number, node: Node): Editor;
    /**
     * Insert a node at index inside a parent node by apth
     */
    insertNodeByPath(path: Path, index: number, node: Node): Editor;
    /**
     * Insert a document fragment at index inside a parent node by key
     */
    insertFragmentByKey(key: string, index: number, fragment: Document): Editor;
    /**
     * Insert a document fragment at index inside a parent node by path
     */
    insertFragmentByPath(path: Path, index: number, fragment: Document): Editor;
    /**
     * Insert text at an offset in a text node by its key with optional marks
     */
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    /**
     * Insert text at an offset in a text node by its path with optional marks
     */
    insertTextByPath(
        path: Path,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    /**
     * Merge a node by its key with its previous sibling
     */
    mergeNodeByKey(key: string): Editor;
    /**
     * Merge a node by its path with its previous sibling
     */
    mergeNodeByPath(path: Path): Editor;
    /**
     * Move a node by its key to a new parent node with with newkey at newindex
     */
    moveNodeByKey(key: string, newKey: string, newIndex: number): Editor;
    /**
     * Move a node by its path to a new parent node with with newpath at newindex
     */
    moveNodeByPath(path: Path, newPath: Path, newIndex: number): Editor;
    /**
     * Remove a mark from length characters starting at an offset in a node by key
     */
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark
    ): Editor;
    /**
     * Remove a mark from length characters starting at an offset in a node by path
     */
    removeMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    /**
     * Remove a node from the document by its key
     */
    removeNodeByKey(key: string): Editor;
    /**
     * Remove a node from the document by its path
     */
    removeNodeByPath(path: Path): Editor;
    /**
     * Replace a node in the document with a new node by key
     */
    replaceNodeByKey(key: string, node: Node): Editor;
    /**
     * Replace a node in the document with a new node by path
     */
    replaceNodeByPath(path: Path, newNode: Node): Editor;
    /**
     * Remove length characters of text starting at an offset in a node by key
     */
    removeTextByKey(key: string, offset: number, length: number): Editor;
    /**
     * Remove length characters of text starting at an offset in a node by path
     */
    removeTextByPath(path: Path, offset: number, length: number): Editor;
    /**
     * Set a dictionary of properties on a mark by its key.
     */
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    /**
     * Set a dictionary of properties on a mark by its path.
     */
    setMarksByPath(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByKey(
        key: string,
        properties: BlockProperties | InlineProperties | string
    ): Editor;
    /**
     * Set a dictionary of properties on a node by its key.
     */
    setNodeByPath(path: Path, properties: NodeProperties): Editor;
    /**
     * Split a node by its key at an offset
     */
    splitNodeByKey(key: string, offset: number): Editor;
    /**
     * Split a node by its path at an offset
     */
    splitNodeByPath(path: Path, position: number): Editor;
    /**
     * Unwrap all inner content of an inline node by its key that match properties
     */
    unwrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    /**
     * Unwrap all inner content of an inline node by its path that match properties
     */
    unwrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    /**
     * Unwrap all inner content of a block node by its key that match properties
     */
    unwrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    /**
     * Unwrap all inner content of a block node by its path that match properties
     */
    unwrapBlockByPath(path: Path, properties: BlockProperties): Editor;
    /**
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByKey(key: string): Editor;
    /**
     * Unwrap a single node from its parent. if the node is surrounded with siblings the parent will be split.
     * If the node is an only child, it will replace the parent
     */
    unwrapNodeByPath(path: Path): Editor;
    /**
     * Wrap the given node by key in an Inline node that matches properties.
     */
    wrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    /**
     * Wrap the given node by path in an Inline node that matches properties.
     */
    wrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    /**
     * Wrap the given node by key in a block node that matches properties.
     */
    wrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    /**
     * Wrap the given node by path in a block node that matches properties.
     */
    wrapBlockByPath(path: Path, block: Block | string): Editor;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByKey(key: string, parent: Node): Editor;
    /**
     * Wrap the node with the specified key with the parent node, this will clear all children of the parent.
     */
    wrapNodeByPath(path: Path, parent: Node): Editor;

    // Miscellaneous Commands //
    /**
     * Normalizes the document with the value's schema. Run automatically unless manually disabled.
     * Use it sparingly and strategically, as it can be very expensive.
     */
    normalize(): Editor;
    /**
     * Calls the provided function with the current editor as the first argument.
     * Normalization does not occur while the function is executing and is deferred to execute immediately after completion.
     *
     * This allows for sequence change operations to not be interrupted by normalization
     */
    withoutNormalization(fn: () => void): Editor;
    /**
     * By default all operations are saved to the editor's history. If you have
     * changes that you don't want to show up in history, use this function.
     */
    withoutSaving(fn: () => void): Editor;
    /**
     * Usually all command operations are merged into a single save point in history,
     * if more control is desired, create single save points using this function.
     */
    withoutMerging(fn: () => void): Editor;

    // History Commands //
    /**
     * Move forward one step in the history
     */
    redo(): Editor;
    /**
     * Move backward one step in the history
     */
    undo(): Editor;
    /**
     * Snapshot the current selection for undo purposes.
     */
    snapshotSelection(): Editor;
}

export {};
