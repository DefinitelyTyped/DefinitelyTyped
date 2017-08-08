// Type definitions for prosemirror-state 0.21
// Project: https://github.com/ProseMirror/prosemirror-state
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Mark, MarkType, Node, ResolvedPos, Schema, Slice } from 'prosemirror-model';
import { Mappable, Mapping, Transform } from 'prosemirror-transform';
import { EditorProps, EditorView } from 'prosemirror-view';

export interface AnyObject {
  [key: string]: any;
}

export interface PluginSpecProps {
  // State is not part of this type.
  // state: EditorProps["state"];
  // dispatchTransaction?: EditorProps["dispatchTransaction"];
  handleDOMEvents?: EditorProps["handleDOMEvents"];
  handleKeyDown?: EditorProps["handleKeyDown"];
  handleKeyPress?: EditorProps["handleKeyPress"];
  handleTextInput?: EditorProps["handleTextInput"];
  handleClickOn?: EditorProps["handleClickOn"];
  handleClick?: EditorProps["handleClick"];
  handleDoubleClickOn?: EditorProps["handleDoubleClickOn"];
  handleDoubleClick?: EditorProps["handleDoubleClick"];
  handleTripleClickOn?: EditorProps["handleTripleClickOn"];
  handleTripleClick?: EditorProps["handleTripleClick"];
  handleContextMenu?: EditorProps["handleContextMenu"];
  handlePaste?: EditorProps["handlePaste"];
  handleDrop?: EditorProps["handleDrop"];
  onFocus?: EditorProps["onFocus"];
  onBlur?: EditorProps["onBlur"];
  createSelectionBetween?: EditorProps["createSelectionBetween"];
  domParser?: EditorProps["domParser"];
  clipboardParser?: EditorProps["clipboardParser"];
  transformPasted?: EditorProps["transformPasted"];
  transformPastedHTML?: EditorProps["transformPastedHTML"];
  transformPastedText?: EditorProps["transformPastedText"];
  nodeViews?: EditorProps["nodeViews"];
  clipboardSerializer?: EditorProps["clipboardSerializer"];
  decorations?: EditorProps["decorations"];
  editable?: EditorProps["editable"];
  attributes?: EditorProps["attributes"];
  scrollThreshold?: EditorProps["scrollThreshold"];
  scrollMargin?: EditorProps["scrollMargin"];
}

export interface PluginSpec<T = any> {
  props?: PluginSpecProps | null;
  state?: StateField<T> | null;
  key?: PluginKey | null;
  view?: ((p: EditorView) => {
    update?: ((view: EditorView, prevState: EditorState) => void) | null,
    destroy?: (() => void) | null
  }) | null;
  filterTransaction?: ((p1: Transaction, p2: EditorState) => boolean) | null;
  appendTransaction?: ((transactions: Transaction[], oldState: EditorState, newState: EditorState) => Transaction | null | undefined) | null;
}

export class Plugin<T = any> {
  constructor(spec: PluginSpec<T>)
  props: PluginSpecProps;
  spec: AnyObject;
  getState(state: EditorState): T | undefined;
}

export interface StateField <T> {
  init(config: AnyObject, instance: EditorState): T;
  apply(tr: Transaction, value: T, oldState: EditorState, newState: EditorState): T;
  toJSON?: ((value: T) => any) | null;
  fromJSON?: ((config: AnyObject, value: any, state: EditorState) => T) | null;
}
export class PluginKey {
  constructor(name?: string)
  get(state: EditorState): Plugin | null | undefined;
  getState(state: EditorState): any | null | undefined;
}
export class Selection {
  constructor($anchor: ResolvedPos, $head: ResolvedPos, ranges?: SelectionRange[])
  ranges: SelectionRange[];
  $anchor: ResolvedPos;
  $head: ResolvedPos;
  anchor: number;
  head: number;
  from: number;
  to: number;
  $from: ResolvedPos;
  $to: ResolvedPos;
  empty: boolean;
  eq(p: Selection): boolean;
  map(doc: Node, mapping: Mappable): Selection;
  content: Slice;
  replace(tr: Transaction, content?: Slice): void;
  replaceWith(tr: Transaction, node: Node): void;
  toJSON(): AnyObject;
  getBookmark(): SelectionBookmark;
  visible: boolean;
  static findFrom($pos: ResolvedPos, dir: number, textOnly?: boolean): Selection | null | undefined;
  static near($pos: ResolvedPos, bias?: number): Selection;
  static atStart(doc: Node): Selection;
  static atEnd(doc: Node): Selection;
  static fromJSON(doc: Node, json: AnyObject): Selection;
  static jsonID(id: string, selectionClass: { new(...args: any[]): Selection }): void;
}
export interface SelectionBookmark {
  map(mapping: Mapping): SelectionBookmark;
  resolve(doc: Node): Selection;
}
export class SelectionRange {
  constructor($from: ResolvedPos, $to: ResolvedPos)
  $from: ResolvedPos;
  $to: ResolvedPos;
}
export class TextSelection extends Selection {
  constructor($anchor: ResolvedPos, $head?: ResolvedPos)
  $cursor?: ResolvedPos | null;
  static create(doc: Node, anchor: number, head?: number): TextSelection;
  static between($anchor: ResolvedPos, $head: ResolvedPos, bias?: number): Selection;
}
export class NodeSelection extends Selection {
  constructor($pos: ResolvedPos)
  node: Node;
  static create(doc: Node, from: number, p1?: number): NodeSelection;
  static isSelectable(node: Node): boolean;
}
export class AllSelection extends Selection {
  constructor(doc: Node)
}
export class EditorState {
  doc: Node;
  selection: Selection;
  storedMarks?: Mark[] | null;
  schema: Schema;
  plugins: Plugin[];
  apply(tr: Transaction): EditorState;
  applyTransaction(tr: Transaction): { state: EditorState, transactions: Transaction[] };
  tr: Transaction;
  reconfigure(config: AnyObject): EditorState;
  toJSON(pluginFields?: { [name: string]: Plugin }): AnyObject;
  static create(config: AnyObject): EditorState;
  static fromJSON(config: AnyObject, json: AnyObject, pluginFields?: { [name: string]: Plugin }): EditorState;
}
export class Transaction extends Transform {
  time: number;
  storedMarks?: Mark[] | null;
  selection: Selection;
  setSelection(selection: Selection): Transaction;
  selectionSet: boolean;
  setStoredMarks(marks?: Mark[]): Transaction;
  ensureMarks(marks: Mark[]): Transaction;
  storedMarksSet: boolean;
  setTime(time: number): Transaction;
  replaceSelection(slice: Slice): Transaction;
  replaceSelectionWith(node: Node, inheritMarks?: boolean): Transaction;
  deleteSelection(): Transaction;
  insertText(text: string, from?: number, to?: number): Transaction;
  setMeta(key: string | Plugin | PluginKey, value: any): Transaction;
  getMeta(key: string | Plugin | PluginKey): any;
  isGeneric: boolean;
  scrollIntoView(): Transaction;
  addStoredMark(mark: Mark): Transaction;
  removeStoredMark(mark: Mark | MarkType): Transaction;
}
