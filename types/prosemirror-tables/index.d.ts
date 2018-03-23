// Type definitions for prosemirror-tables 0.1
// Project: https://github.com/ProseMirror/prosemirror-tables
// Definitions by: Oscar Wallhult <https://github.com/superchu>
//                 Eduard Shvedai <https://github.com/eshvedai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import { EditorState, Plugin, SelectionRange, Transaction, PluginKey } from 'prosemirror-state';
import { Node as ProsemirrorNode, NodeSpec, Slice, ResolvedPos } from 'prosemirror-model';
import { NodeView } from 'prosemirror-view';

export interface TableNodesOptions {
  tableGroup?: string;
  cellContent: string;
  cellAttributes: { [key: string]: CellAttributes };
}

export type getFromDOM = (dom: Element) => any;
export type setDOMAttr = (value: any, attrs: any) => any;

export interface CellAttributes {
  default: any;
  getFromDOM?: getFromDOM;
  setDOMAttr?: setDOMAttr;
}

export interface TableNodes {
  table: NodeSpec;
  table_row: NodeSpec;
  table_cell: NodeSpec;
  table_header: NodeSpec;
}

export function tableNodes(options: TableNodesOptions): TableNodes;

export interface CellSelectionJSON {
  type: string;
  anchor: number;
  head: number;
}

export class CellSelection {
  constructor($anchorCell: ResolvedPos, $headCell?: ResolvedPos);

  from: number;
  to: number;
  $from: ResolvedPos;
  $to: ResolvedPos;
  anchor: number;
  head: number;
  $anchor: ResolvedPos;
  $head: ResolvedPos;
  $anchorCell: ResolvedPos;
  $headCell: ResolvedPos;
  empty: boolean;
  ranges: SelectionRange[];

  map(doc: ProsemirrorNode, mapping: any): any;
  content(): Slice;
  replace(tr: Transaction, content: Slice): void;
  replaceWith(tr: Transaction, node: ProsemirrorNode): void;
  forEachCell(f: (node: ProsemirrorNode, pos: number) => void): void;
  isRowSelection(): boolean;
  isColSelection(): boolean;
  eq(other: any): boolean;
  toJSON(): CellSelectionJSON;
  getBookmark(): {anchor: number, head: number};

  static colSelection(anchorCell: ResolvedPos, headCell?: ResolvedPos): CellSelection;
  static rowSelection(anchorCell: ResolvedPos, headCell?: ResolvedPos): CellSelection;
  static create(doc: ProsemirrorNode, anchorCell: number, headCell?: number): CellSelection;
  static fromJSON(doc: ProsemirrorNode, json: CellSelectionJSON): CellSelection;
}

export interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export class TableMap {
  width: number;
  height: number;
  map: number[];
  problems?: object[];

  findCell(pos: number): Rect;
  colCount(pos: number): number;
  nextCell(pos: number, axis: string, dir: number): number;
  rectBetween(a: number, b: number): Rect;
  cellsInRect(rect: Rect): number[];
  positionAt(row: number, col: number, table: ProsemirrorNode): number;

  static get(table: ProsemirrorNode): TableMap;
}

export function tableEditing(): Plugin;

export function deleteTable(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function goToNextCell(direction: number): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;

export function toggleHeaderCell(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function toggleHeaderColumn(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function toggleHeaderRow(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function setCellAttr(name: string, value: any): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;

export function splitCell(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function mergeCells(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function deleteRow(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function addRowAfter(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function addRowBefore(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function deleteColumn(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function addColumnAfter(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function addColumnBefore(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;

export function columnResizing(props: { handleWidth?: number, cellMinWidth?: number, View?: NodeView }): Plugin;

export const columnResizingPluginKey: PluginKey;

export function updateColumnsOnResize(node: ProsemirrorNode, colgroup: Element, table: Element, cellMinWidth: number, overrideCol?: number, overrideValue?: number): void;

export function cellAround(pos: ResolvedPos): ResolvedPos | null;

export function isInTable(state: EditorState): boolean;

export function selectionCell(state: EditorState): ResolvedPos | null | undefined;

export function moveCellForward(pos: ResolvedPos): ResolvedPos;

export function inSameTable($a: ResolvedPos, $b: ResolvedPos): boolean;

export function findCell(pos: ResolvedPos): {top: number, left: number, right: number, buttom: number};

export function colCount(pos: ResolvedPos): number;

export function nextCell(pos: ResolvedPos, axis: string, dir: number): null | ResolvedPos;
