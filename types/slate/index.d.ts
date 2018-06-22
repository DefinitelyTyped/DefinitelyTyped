// Type definitions for slate 0.33
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as Immutable from 'immutable';

export namespace Slate {
  interface Data {
    [key: string]: any;
  }

  interface RulesByNodeType {
    [key: string]: Rules;
  }

  interface KindsAndTypes {
    kinds?: string[];
    types?: string[];
  }

  type InvalidReason =
    | 'child_kind_invalid'
    | 'child_required'
    | 'child_type_invalid'
    | 'child_unknown'
    | 'first_child_kind_invalid'
    | 'first_child_type_invalid'
    | 'last_child_kind_invalid'
    | 'last_child_type_invalid'
    | 'node_data_invalid'
    | 'node_is_void_invalid'
    | 'node_mark_invalid'
    | 'node_text_invalid'
    | 'parent_kind_invalid'
    | 'parent_type_invalid';

  interface Rules {
    data?: {
      [key: string]: (v: any) => boolean;
    };
    first?: KindsAndTypes;
    isVoid?: boolean;
    last?: KindsAndTypes;
    nodes?: Array<{
      kinds?: string[];
      types?: string[];
      min?: number;
      max?: number;
    }>;
    normalize?: (
      change: Change,
      reason: InvalidReason,
      context: { [key: string]: any }
    ) => void;
    parent?: KindsAndTypes;
    text?: RegExp;
  }

  interface SchemaProperties {
    document?: Rules;
    blocks?: RulesByNodeType;
    inlines?: RulesByNodeType;
  }

  class Schema extends Immutable.Record({}) {
    document: Rules;
    blocks: RulesByNodeType;
    inlines: RulesByNodeType;

    static create(properties: SchemaProperties | Schema): Schema;
    static fromJSON(object: SchemaProperties): Schema;
    static isSchema(maybeSchema: any): maybeSchema is Schema;

    toJSON(): SchemaProperties;
  }

  interface ValueProperties {
    document?: Document;
    selection?: Range;
    history?: History;
    schema?: Schema;
    data?: Data;
    decorations?: Immutable.List<Range> | null;
  }

  interface ValueJSON {
    document?: DocumentJSON;
    selection?: Range;
    history?: History;
    schema?: Schema;
    data?: Data;
    decorations?: Immutable.List<Range> | null;
    object?: 'value';
  }

  class Value extends Immutable.Record({}) {
    document: Document;
    selection: Range;
    history: History;
    schema: Schema;
    data: Data;
    object: 'value';
    decorations: Immutable.List<Range> | null;

    readonly anchorText: Text;
    readonly focusText: Text;
    readonly startText: Text;
    readonly endText: Text;

    readonly anchorBlock: Block;
    readonly focusBlock: Block;
    readonly startBlock: Block;
    readonly endBlock: Block;

    readonly marks: Immutable.Set<Mark>;
    readonly activeMarks: Immutable.Set<Mark>;
    readonly blocks: Immutable.List<Block>;
    readonly fragment: Document;
    readonly inlines: Immutable.List<Inline>;
    readonly text: Immutable.List<Text>;
    readonly characters: Immutable.List<Character>;
    readonly hasUndos: boolean;
    readonly hasRedos: boolean;

    readonly anchorKey: string;
    readonly focusKey: string;
    readonly startKey: string;
    readonly endKey: string;
    readonly anchorOffset: number;
    readonly focusOffset: number;
    readonly startOffset: number;
    readonly endOffset: number;
    readonly isBackward: boolean;
    readonly isBlurred: boolean;
    readonly isCollapsed: boolean;
    readonly isExpanded: boolean;
    readonly isFocused: boolean;
    readonly isForward: boolean;

    static create(properties?: ValueProperties | Value): Value;
    static fromJSON(properties: ValueJSON): Value;
    static isValue(maybeValue: any): maybeValue is Value;

    change(): Change;
    toJSON(): ValueJSON;
  }

  interface DocumentProperties {
    nodes?: Immutable.List<Node> | Node[];
    key?: string;
    data?: Immutable.Map<string, any> | { [key: string]: any };
  }

  interface DocumentJSON {
    nodes?: NodeJSON[];
    key?: string;
    data?: { [key: string]: any };
    object?: 'document';
  }

  class Document<DataMap = { [key: string]: any }> extends BaseNode<
    DataMap
  > {
    object: 'document';
    nodes: Immutable.List<Block>;

    static create(
      properties: DocumentProperties | Document | Immutable.List<Node> | Node[]
    ): Document;
    static fromJSON(properties: DocumentProperties | Document): Document;
    static isDocument(maybeDocument: any): maybeDocument is Document;

    toJSON(): DocumentJSON;
  }

  interface BlockProperties {
    type: string;
    key?: string;
    nodes?: Immutable.List<Node>;
    isVoid?: boolean;
    data?: Immutable.Map<string, any> | { [key: string]: any };
  }

  interface BlockJSON {
    type: string;
    key?: string;
    nodes?: NodeJSON[];
    isVoid?: boolean;
    data?: { [key: string]: any };
    object: 'block';
  }

  class Block extends BaseNode {
    isVoid: boolean;
    object: 'block';
    nodes: Immutable.List<Block | Text | Inline>;

    static create(properties: BlockProperties | Block | string): Block;
    static createList(
      array: (BlockProperties[] | Block[] | string[])
    ): Immutable.List<Block>;
    static fromJSON(properties: BlockProperties | Block): Block;
    static isBlock(maybeBlock: any): maybeBlock is Block;

    toJSON(): BlockJSON;
  }

  interface InlineProperties {
    type: string;
    key?: string;
    nodes?: Immutable.List<Node>;
    isVoid?: boolean;
    data?: Immutable.Map<string, any> | { [key: string]: any };
  }

  interface InlineJSON {
    type: string;
    key?: string;
    nodes?: NodeJSON[];
    isVoid?: boolean;
    data?: { [key: string]: any };
    object: 'inline';
  }

  class Inline extends BaseNode {
    isVoid: boolean;
    object: 'inline';
    nodes: Immutable.List<Inline | Text>;

    static create(properties: InlineProperties | Inline | string): Inline;
    static createList(
      array: (InlineProperties[] | Inline[] | string[])
    ): Immutable.List<Inline>;
    static fromJSON(properties: InlineProperties | Inline): Inline;
    static isInline(maybeInline: any): maybeInline is Inline;

    toJSON(): InlineJSON;
  }

  interface Leaf {
    marks?: Mark[];
    text: string;
  }

  interface TextProperties {
    key?: string;
    characters: Immutable.List<Character>;
  }

  interface TextJSON {
    key?: string;
    characters?: Character[];
    leaves: Leaf[];
    object: 'text';
  }

  class Text extends Immutable.Record({}) {
    object: 'text';
    characters: Immutable.List<Character>;
    key: string;
    text: string;

    static create(properties: TextProperties | Text | string): Text;
    static fromJSON(properties: TextProperties | Text): Text;
    static isText(maybeText: any): maybeText is Text;

    toJSON(): TextJSON;
  }

  type Node = Document | Block | Inline | Text;
  type NodeJSON = DocumentJSON | BlockJSON | InlineJSON | TextJSON;

  class BaseNode<DataMap = { [key: string]: any }> extends Immutable.Record(
    {}
  ) {
    data: Immutable.Map<keyof DataMap, DataMap[keyof DataMap]>;
    type: string;
    key: string;
    object: 'document' | 'block' | 'inline' | 'text';
    nodes: Immutable.List<Node>;
    readonly text: string;

    filterDescendants(iterator: (node: Node) => boolean): Immutable.List<Node>;
    findDescendants(iterator: (node: Node) => boolean): Node | null;
    getBlocksAtRange(range: Range): Immutable.List<Block>;
    getBlocks(): Immutable.List<Block>;
    getCharactersAtRange(range: Range): Immutable.List<Character>;
    getChild(key: string | Node): Node | null;
    getClosestBlock(key: string | Node): Block | null;
    getClosestInline(key: string | Node): Inline | null;
    getClosest(key: string | Node, match: (node: Node) => boolean): Node | null;
    getDepth(key: string | Node): number;
    getDescendant(key: string | Node): Node | null;
    getFirstText(): Text | null;
    getFragmentAtRange(range: Range): Document;
    getFurthest(key: string, iterator: (node: Node) => boolean): Node | null;
    getFurthestAncestor(key: string): Node | null;
    getFurthestBlock(key: string): Block | null;
    getFurthestInline(key: string): Inline | null;
    getFurthestOnlyChildAncestor(key: string): Node | null;
    getInlinesAtRange(range: Range): Immutable.List<Inline>;
    getLastText(): Text | null;
    getMarksAtRange(range: Range): Immutable.Set<Mark>;
    getNextBlock(key: string | Node): Block | null;
    getNextSibling(key: string | Node): Node | null;
    getNextText(key: string | Node): Text | null;
    getParent(key: string | Node): Node | null;
    getPreviousBlock(key: string | Node): Block | null;
    getPreviousSibling(key: string | Node): Node | null;
    getPreviousText(key: string | Node): Text | null;
    getTexts(): Immutable.List<Text>;
    getTextsAsArray(): Text[];
    getTextAtOffset(offset: number): Text | null;
    getTextsAtRange(range: Range): Immutable.List<Text>;
    getTextsAtRangeAsArray(range: Range): Text[];
    hasChild(key: string | Node): boolean;
  }

  interface CharacterProperties {
    marks?: Immutable.Set<Mark> | Mark[];
    text: string;
  }

  class Character extends Immutable.Record({}) {
    object: 'character';
    marks: Immutable.Set<Mark>;
    text: string;

    static create(
      properties: CharacterProperties | Character | string
    ): Character;
    static createList(
      array: (CharacterProperties[] | Character[] | string[])
    ): Immutable.List<Character>;
    static fromJSON(properties: CharacterProperties | Character): Character;
    static isCharacter(maybeCharacter: any): maybeCharacter is Character;

    toJSON(): CharacterProperties;
  }

  interface MarkProperties {
    type: string;
    data?: Immutable.Map<string, any> | { [key: string]: any };
  }

  interface MarkJSON {
    type: string;
    data?: { [key: string]: any };
  }

  class Mark extends Immutable.Record({}) {
    object: 'mark';
    type: string;
    data: Immutable.Map<string, any>;

    static create(properties: MarkProperties | Mark | string): Mark;
    static createSet(
      array: (MarkProperties[] | Mark[] | string[])
    ): Immutable.Set<Mark>;
    static fromJSON(properties: MarkJSON | Mark): Mark;
    static isMark(maybeMark: any): maybeMark is Mark;

    toJSON(): MarkProperties;
  }

  class Change extends Immutable.Record({}) {
    object: 'change';
    value: Value;
    operations: Immutable.List<Operation>;

    call(customChange: (change: Change, ...args: any[]) => Change): Change;

    applyOperations(operations: Operation[]): Change;
    applyOperation(operation: Operation): Change;

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
    toggleMark(mark: Mark | MarkProperties | string): Change;
    unwrapBlock(properties: BlockProperties | string): Change;
    unwrapInline(properties: InlineProperties | string): Change;
    wrapBlock(properties: BlockProperties | string): Change;
    wrapInline(properties: InlineProperties | string): Change;
    wrapText(prefix: string, suffix?: string): Change;

    // Selection Changes
    blur(): Change;
    collapseToAnchor(): Change;
    collapseToFocus(): Change;
    collapseToStart(): Change;
    collapseToEnd(): Change;
    collapseToStartOf(node: Node): Change;
    collapseToEndOf(node: Node): Change;
    collapseToStartOfNextBlock(): Change;
    collapseToEndOfNextBlock(): Change;
    collapseToStartOfPreviousBlock(): Change;
    collapseToEndOfPreviousBlock(): Change;
    collapseToStartOfNextText(): Change;
    collapseToEndOfNextText(): Change;
    collapseToStartOfPreviousText(): Change;
    collapseToEndOfPreviousText(): Change;
    extend(n: number): Change;
    extendToStartOf(node: Node): Change;
    extendToEndOf(node: Node): Change;
    flip(): Change;
    focus(): Change;
    move(n: number): Change;
    moveStart(n: number): Change;
    moveEnd(n: number): Change;
    moveOffsetsTo(anchorOffset: number, focusOffset: number): Change;
    moveToRangeOf(node: Node): Change;
    select(properties: Range | RangeProperties): Change;
    selectAll(): Change;
    deselect(): Change;

    // Document Changes
    deleteBackwardAtRange(range: Range, n: number): Change;
    deleteForwardAtRange(range: Range, n: number): Change;
    deleteAtRange(range: Range): Change;
    insertBlockAtRange(
      range: Range,
      block: Block | BlockProperties | string
    ): Change;
    insertFragmentAtRange(range: Range, fragment: Document): Change;
    insertInlineAtRange(
      range: Range,
      inline: Inline | InlineProperties
    ): Change;
    insertTextAtRange(range: Range, text: string): Change;
    addMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Change;
    setBlocksAtRange(range: Range, properties: BlockProperties | string): Change;
    setInlinesAtRange(
      range: Range,
      properties: InlineProperties | string
    ): Change;
    splitBlockAtRange(range: Range, depth: number): Change;
    splitInlineAtRange(range: Range, depth: number): Change;
    removeMarkAtRange(
      range: Range,
      mark: Mark | MarkProperties | string
    ): Change;
    toggleMarkAtRange(
      range: Range,
      mark: Mark | MarkProperties | string
    ): Change;
    unwrapBlockAtRange(
      range: Range,
      properties: BlockProperties | string
    ): Change;
    unwrapInlineAtRange(
      range: Range,
      properties: InlineProperties | string
    ): Change;
    wrapBlockAtRange(
      range: Range,
      properties: BlockProperties | string
    ): Change;
    wrapInlineAtRange(
      range: Range,
      properties: InlineProperties | string
    ): Change;
    wrapTextAtRange(range: Range, prefix: string, suffix?: string): Change;

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

    // History Changes
    redo(): Change;
    undo(): Change;
  }

  interface RangeProperties {
    anchorKey?: string | null;
    anchorOffset?: number;
    focusKey?: string | null;
    focusOffset?: number;
    isFocused?: boolean;
    isBackward?: boolean | null;
    marks?: Immutable.Set<Mark> | null;
  }

  interface RangeJSON {
    anchorKey?: string | null;
    anchorOffset?: number;
    focusKey?: string | null;
    focusOffset?: number;
    isFocused?: boolean;
    isBackward?: boolean | null;
    marks?: MarkJSON[] | null;
  }

  class Range extends Immutable.Record({}) {
    object: 'range';
    anchorKey: string | null;
    anchorOffset: number;
    focusKey: string | null;
    focusOffset: number;
    isFocused: boolean;
    isBackward: boolean | null;
    marks: Immutable.Set<Mark> | null;

    readonly isBlurred: boolean;
    readonly isCollapsed: boolean;
    readonly isExpanded: boolean;
    readonly isForward: boolean;
    readonly startKey: string;
    readonly startOffset: number;
    readonly endKey: string;
    readonly endOffset: number;

    static create(properties: RangeProperties | Range): Range;
    static fromJSON(properties: RangeJSON): Range;
    static isRange(maybeRange: any): maybeRange is Range;

    toJSON(): RangeProperties;

    hasAnchorAtStartOf(node: Node): boolean;
    hasFocusAtStartOf(node: Node): boolean;
    hasStartAtStartOf(node: Node): boolean;
    hasEndAtStartOf(node: Node): boolean;
    hasEdgeAtStartOf(node: Node): boolean;

    hasAnchorAtEndOf(node: Node): boolean;
    hasFocusAtEndOf(node: Node): boolean;
    hasStartAtEndOf(node: Node): boolean;
    hasEndAtEndOf(node: Node): boolean;
    hasEdgeAtEndOf(node: Node): boolean;

    hasAnchorBetween(node: Node, start: number, end: number): boolean;
    hasFocusBetween(node: Node, start: number, end: number): boolean;
    hasStartBetween(node: Node, start: number, end: number): boolean;
    hasEndBetween(node: Node, start: number, end: number): boolean;
    hasEdgeBetween(node: Node, start: number, end: number): boolean;

    hasAnchorIn(node: Node): boolean;
    hasFocusIn(node: Node): boolean;
    hasStartIn(node: Node): boolean;
    hasEndIn(node: Node): boolean;
    hasEdgeIn(node: Node): boolean;

    isAtStartOf(node: Node): boolean;
    isAtEndOf(node: Node): boolean;
  }

  type Operation =
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

  interface InsertTextOperation {
    type: 'insert_text';
    path: number[];
    offset: number;
    text: string;
    marks: Mark[];
  }

  interface RemoveTextOperation {
    type: 'remove_text';
    path: number[];
    offset: number;
    text: string;
  }

  interface AddMarkOperation {
    type: 'add_mark';
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
  }

  interface RemoveMarkOperation {
    type: 'remove_mark';
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
  }

  interface SetMarkOperation {
    type: 'set_mark';
    path: number[];
    offset: number;
    length: number;
    mark: Mark;
    properties: MarkProperties;
  }

  interface InsertNodeOperation {
    type: 'insert_node';
    path: number[];
    node: Node;
  }

  interface MergeNodeOperation {
    type: 'merge_node';
    path: number[];
    position: number;
  }

  interface MoveNodeOperation {
    type: 'move_node';
    path: number[];
    newPath: number[];
  }

  interface RemoveNodeOperation {
    type: 'remove_node';
    path: number[];
    node: Node;
  }

  interface SetNodeOperation {
    type: 'set_node';
    path: number[];
    properties: BlockProperties | InlineProperties | TextProperties;
  }

  interface SplitNodeOperation {
    type: 'split_node';
    path: number[];
    position: number;
    target: number;
  }

  interface SetSelectionOperation {
    type: 'set_selection';
    properties: RangeProperties;
    selection: Range;
  }

  interface SetValueOperation {
    type: 'set_value';
    properties: ValueProperties;
    value: Value;
  }

  const Operations: {
    apply: (value: Value, operation: Operation) => Value;
    invert: (operation: Operation) => Operation;
  };

  class Stack extends Immutable.Record({}) {
    plugins: any[];
  }

  function setKeyGenerator(func: () => string): null;
  function resetKeyGenerator(): null;
}
