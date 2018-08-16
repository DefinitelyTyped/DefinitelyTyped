// Type definitions for slate 0.33
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Kalley Powell <https://github.com/kalley>
//                 Francesco Agnoletto <https://github.com/Kornil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as Immutable from 'immutable';

export class Data {
  [key: string]: any;
  static create(options: Data): Data;
  static fromJSON(object: Record<string, any>): Data;
  static fromJS(object: Record<string, any>): Data;
}

export interface RulesByNodeType {
  [key: string]: Rules;
}

export interface ObjectsAndTypes {
  objects?: string[];
  types?: string[];
}

export type InvalidReason =
  | 'child_object_invalid'
  | 'child_required'
  | 'child_type_invalid'
  | 'child_unknown'
  | 'first_child_object_invalid'
  | 'first_child_type_invalid'
  | 'last_child_object_invalid'
  | 'last_child_type_invalid'
  | 'node_data_invalid'
  | 'node_is_void_invalid'
  | 'node_mark_invalid'
  | 'node_text_invalid'
  | 'parent_object_invalid'
  | 'parent_type_invalid';

export interface Rules {
  data?: {
    [key: string]: (v: any) => boolean;
  };
  first?: ObjectsAndTypes;
  isVoid?: boolean;
  last?: ObjectsAndTypes;
  nodes?: Array<{
    objects?: string[];
    types?: string[];
    min?: number;
    max?: number;
  }>;
  normalize?: (
    change: Change,
    reason: InvalidReason,
    context: Record<string, any>
  ) => void;
  parent?: ObjectsAndTypes;
  text?: RegExp;
}

export interface SchemaProperties {
  document?: Rules;
  blocks?: RulesByNodeType;
  inlines?: RulesByNodeType;
}

export class Schema extends Immutable.Record({}) {
  document: Rules;
  blocks: RulesByNodeType;
  inlines: RulesByNodeType;

  static create(properties: SchemaProperties | Schema): Schema;
  static fromJSON(object: SchemaProperties): Schema;
  static fromJS(object: SchemaProperties): Schema;
  static isSchema(maybeSchema: any): maybeSchema is Schema;

  toJSON(): SchemaProperties;
}

export interface HistoryJSON {
  object?: 'history';
  redos?: Immutable.Stack<Operation>;
  undos?: Immutable.Stack<Operation>;
}

export class History extends Immutable.Record({ redos: Immutable.Stack(), undos: Immutable.Stack() }) {
  object: 'history';

  static create(properties: HistoryJSON | History): History;
  static createOperationsList(operations: Operation[] | Immutable.List<Operation>): Immutable.List<Operation>;
  static fromJSON(object: HistoryJSON): History;
  static fromJS(object: HistoryJSON): History;
  static isHistory(maybeHistory: any): maybeHistory is History;

  save(operation: Operation, options: { merge?: boolean, skip?: boolean }): History;
  toJSON(): HistoryJSON;
}

export interface ValueProperties {
  document?: Document;
  selection?: Range;
  history?: History;
  schema?: Schema;
  data?: Record<string, any>;
  decorations?: Immutable.List<Range> | null;
}

export interface ValueJSON {
  document?: DocumentJSON;
  selection?: Range;
  history?: History;
  schema?: Schema;
  data?: Record<string, any>;
  decorations?: Immutable.List<Range> | null;
  object?: 'value';
}

export class Value extends Immutable.Record({}) {
  document: Document;
  selection: Range;
  history: History;
  schema: Schema;
  data: Record<string, any>;
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

  readonly anchorInline: Inline;
  readonly focusInline: Inline;
  readonly startInline: Inline;
  readonly endInline: Inline;

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
  static fromJS(properties: ValueJSON): Value;
  static isValue(maybeValue: any): maybeValue is Value;

  change(): Change;
  toJSON(): ValueJSON;
}

export interface DocumentProperties {
  nodes?: Immutable.List<Node> | Node[];
  key?: string;
  data?: Immutable.Map<string, any> | Record<string, any>;
}

export interface DocumentJSON {
  nodes?: NodeJSON[];
  key?: string;
  data?: Record<string, any>;
  object?: 'document';
}

export class Document<DataMap = Record<string, any>> extends BaseNode<
  DataMap
> {
  object: 'document';
  nodes: Immutable.List<Block>;

  static create(
    properties: DocumentProperties | Document | Immutable.List<Node> | Node[]
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
  isVoid?: boolean;
  data?: Immutable.Map<string, any> | Record<string, any>;
}

export interface BlockJSON {
  type: string;
  key?: string;
  nodes?: NodeJSON[];
  isVoid?: boolean;
  data?: Record<string, any>;
  object: 'block';
}

export class Block extends BaseNode {
  isVoid: boolean;
  object: 'block';
  nodes: Immutable.List<Block | Text | Inline>;

  static create(properties: BlockProperties | Block | string): Block;
  static createList(
    array: (BlockProperties[] | Block[] | string[])
  ): Immutable.List<Block>;
  static fromJSON(properties: BlockJSON | Block): Block;
  static fromJS(properties: BlockJSON | Block): Block;
  static isBlock(maybeBlock: any): maybeBlock is Block;

  toJSON(): BlockJSON;
}

export interface InlineProperties {
  type: string;
  key?: string;
  nodes?: Immutable.List<Node>;
  isVoid?: boolean;
  data?: Immutable.Map<string, any> | Record<string, any>;
}

export interface InlineJSON {
  type: string;
  key?: string;
  nodes?: NodeJSON[];
  isVoid?: boolean;
  data?: Record<string, any>;
  object: 'inline';
}

export class Inline extends BaseNode {
  isVoid: boolean;
  object: 'inline';
  nodes: Immutable.List<Inline | Text>;

  static create(properties: InlineProperties | Inline | string): Inline;
  static createList(
    array: (InlineProperties[] | Inline[] | string[])
  ): Immutable.List<Inline>;
  static fromJSON(properties: InlineJSON | Inline): Inline;
  static fromJS(properties: InlineJSON | Inline): Inline;
  static isInline(maybeInline: any): maybeInline is Inline;

  toJSON(): InlineJSON;
}

export interface Leaf {
  object: 'leaf';
  marks?: Mark[];
  text: string;
}

export interface TextProperties {
  key?: string;
  characters: Immutable.List<Character>;
}

export interface TextJSON {
  key?: string;
  characters?: Character[];
  leaves: Leaf[];
  object: 'text';
}

export class Text extends Immutable.Record({}) {
  object: 'text';
  characters: Immutable.List<Character>;
  key: string;
  text: string;

  static create(properties: TextProperties | Text | string): Text;
  static fromJSON(properties: TextJSON | Text): Text;
  static fromJS(properties: TextJSON | Text): Text;
  static isText(maybeText: any): maybeText is Text;

  toJSON(): TextJSON;
}

export type Node = Document | Block | Inline | Text;
export type NodeJSON = DocumentJSON | BlockJSON | InlineJSON | TextJSON;

// tslint:disable-next-line strict-export-declare-modifiers
declare class BaseNode<DataMap = Record<string, any>> extends Immutable.Record(
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

export interface CharacterProperties {
  marks?: Immutable.Set<Mark> | Mark[];
  text: string;
}

export class Character extends Immutable.Record({}) {
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
  static fromJS(properties: CharacterProperties | Character): Character;
  static isCharacter(maybeCharacter: any): maybeCharacter is Character;

  toJSON(): CharacterProperties;
}

export interface MarkProperties {
  type: string;
  data?: Immutable.Map<string, any> | Record<string, any>;
}

export interface MarkJSON {
  type: string;
  data?: Record<string, any>;
}

export class Mark extends Immutable.Record({}) {
  object: 'mark';
  type: string;
  data: Immutable.Map<string, any>;

  static create(properties: MarkProperties | Mark | string): Mark;
  static createSet(
    array: (MarkProperties[] | Mark[] | string[])
  ): Immutable.Set<Mark>;
  static fromJSON(properties: MarkJSON | Mark): Mark;
  static fromJS(properties: MarkJSON | Mark): Mark;
  static isMark(maybeMark: any): maybeMark is Mark;

  toJSON(): MarkProperties;
}

export class Change extends Immutable.Record({}) {
  object: 'change';
  value: Value;
  operations: Immutable.List<Operation>;

  call(customChange: (change: Change, ...args: any[]) => Change): Change;
  withoutNormalization(customChange: (change: Change) => void): Change;

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

export interface RangeProperties {
  anchorKey?: string | null;
  anchorOffset?: number;
  focusKey?: string | null;
  focusOffset?: number;
  isFocused?: boolean;
  isBackward?: boolean | null;
  marks?: Immutable.Set<Mark> | null;
}

export interface RangeJSON {
  anchorKey?: string | null;
  anchorOffset?: number;
  focusKey?: string | null;
  focusOffset?: number;
  isFocused?: boolean;
  isBackward?: boolean | null;
  marks?: MarkJSON[] | null;
}

export class Range extends Immutable.Record({}) {
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
  static fromJS(properties: RangeJSON): Range;
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
  type: 'insert_text';
  path: number[];
  offset: number;
  text: string;
  marks: Mark[];
}

export interface RemoveTextOperation {
  type: 'remove_text';
  path: number[];
  offset: number;
  text: string;
}

export interface AddMarkOperation {
  type: 'add_mark';
  path: number[];
  offset: number;
  length: number;
  mark: Mark;
}

export interface RemoveMarkOperation {
  type: 'remove_mark';
  path: number[];
  offset: number;
  length: number;
  mark: Mark;
}

export interface SetMarkOperation {
  type: 'set_mark';
  path: number[];
  offset: number;
  length: number;
  mark: Mark;
  properties: MarkProperties;
}

export interface InsertNodeOperation {
  type: 'insert_node';
  path: number[];
  node: Node;
}

export interface MergeNodeOperation {
  type: 'merge_node';
  path: number[];
  position: number;
}

export interface MoveNodeOperation {
  type: 'move_node';
  path: number[];
  newPath: number[];
}

export interface RemoveNodeOperation {
  type: 'remove_node';
  path: number[];
  node: Node;
}

export interface SetNodeOperation {
  type: 'set_node';
  path: number[];
  properties: BlockProperties | InlineProperties | TextProperties;
}

export interface SplitNodeOperation {
  type: 'split_node';
  path: number[];
  position: number;
  target: number;
}

export interface SetSelectionOperation {
  type: 'set_selection';
  properties: RangeProperties;
  selection: Range;
}

export interface SetValueOperation {
  type: 'set_value';
  properties: ValueProperties;
  value: Value;
}

export const Operations: {
  apply: (value: Value, operation: Operation) => Value;
  invert: (operation: Operation) => Operation;
};

export class Stack extends Immutable.Record({}) {
  plugins: any[];
}

export function setKeyGenerator(func: () => string): null;
export function resetKeyGenerator(): null;

export {};
