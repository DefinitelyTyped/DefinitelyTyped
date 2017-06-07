// Type definitions for prosemirror-view 0.21
// Project: https://github.com/ProseMirror/prosemirror-view
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { DOMParser, DOMSerializer, ProsemirrorNode as Node, ResolvedPos, Slice } from 'prosemirror-model';
import { EditorState, Selection, Transaction } from 'prosemirror-state';
import { Mapping } from 'prosemirror-transform';

export interface AnyObject {
  [key: string]: any;
}

export class Decoration {
  spec: AnyObject;
  static widget(pos: number, dom: Node, spec?: { side?: number | null, stopEvent?: ((event: Event) => boolean) | null, key?: string | null }): Decoration;
  static inline(from: number, to: number, attrs: DecorationAttrs, spec?: { inclusiveStart?: boolean | null, inclusiveEnd?: boolean | null }): Decoration;
  static node(from: number, to: number, attrs: DecorationAttrs, spec?: AnyObject): Decoration;
}
export interface DecorationAttrs {
  class?: string | null;
  style?: string | null;
  nodeName?: string | null;
}
export class DecorationSet {
  find(start?: number, end?: number): Decoration[];
  map(mapping: Mapping, doc: Node, options?: { onRemove?: ((decorationSpec: AnyObject) => void) | null }): DecorationSet;
  add(doc: Node, decorations: Decoration[]): DecorationSet;
  remove(decorations: Decoration[]): DecorationSet;
  static create(doc: Node, decorations: Decoration[]): DecorationSet;
  static empty: DecorationSet;
}
export class EditorView {
  constructor(place: null | Node | ((p: Node) => void) | { mount: Node }, props: EditorProps)
  state: EditorState;
  dom: Element;
  props: EditorProps;
  update(props: EditorProps): void;
  setProps(props: EditorProps): void;
  updateState(state: EditorState): void;
  hasFocus(): boolean;
  someProp(propName: string, f: (prop: any) => any): any;
  focus(): void;
  root: Document | DocumentFragment;
  posAtCoords(coords: { left: number, top: number }): { pos: number, inside: number } | null | undefined;
  coordsAtPos(pos: number): { left: number, right: number, top: number, bottom: number };
  endOfTextblock(dir: "up" | "down" | "left" | "right" | "forward" | "backward", state?: EditorState): boolean;
  destroy(): void;
  dispatch(tr: Transaction): void;
}
export interface EditorProps {
  state: EditorState;
  dispatchTransaction(tr: Transaction): void;
  handleDOMEvents?: { [name: string]: (view: EditorView, event: Event) => boolean } | null;
  handleKeyDown(view: EditorView, event: KeyboardEvent): boolean;
  handleKeyPress(view: EditorView, event: KeyboardEvent): boolean;
  handleTextInput(view: EditorView, from: number, to: number, text: string): boolean;
  handleClickOn(view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean): boolean;
  handleClick(view: EditorView, pos: number, event: MouseEvent): boolean;
  handleDoubleClickOn(view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean): boolean;
  handleDoubleClick(view: EditorView, pos: number, event: MouseEvent): boolean;
  handleTripleClickOn(view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean): boolean;
  handleTripleClick(view: EditorView, pos: number, event: MouseEvent): boolean;
  handleContextMenu(view: EditorView, pos: number, event: MouseEvent): boolean;
  handlePaste(view: EditorView, event: Event, slice: Slice): boolean;
  handleDrop(view: EditorView, event: Event, slice: Slice, moved: boolean): boolean;
  onFocus(view: EditorView, event: Event): void;
  onBlur(view: EditorView, event: Event): void;
  createSelectionBetween(view: EditorView, anchor: ResolvedPos, head: ResolvedPos): Selection | null | undefined;
  domParser?: DOMParser | null;
  clipboardParser?: DOMParser | null;
  transformPasted(p: Slice): Slice;
  transformPastedHTML(p: string): string;
  transformPastedText(p: string): string;
  nodeViews?: { [name: string]: (node: Node, view: EditorView, getPos: () => number, decorations: Decoration[]) => NodeView } | null;
  clipboardSerializer?: DOMSerializer | null;
  decorations(p: EditorState): DecorationSet | null | undefined;
  editable(p: EditorState): boolean;
  attributes?: { [name: string]: string } | ((p: EditorState) => { [name: string]: string } | null | undefined) | null;
  scrollThreshold?: number | null;
  scrollMargin?: number | null;
}
export interface NodeView {
  dom?: Node | null;
  contentDOM?: Node | null;
  update(node: Node, decorations: Decoration[]): boolean;
  selectNode(): void;
  deselectNode(): void;
  setSelection(anchor: number, head: number, root: Document): void;
  stopEvent(event: Event): boolean;
  ignoreMutation(p: MutationRecord): boolean;
  destroy(): void;
}
