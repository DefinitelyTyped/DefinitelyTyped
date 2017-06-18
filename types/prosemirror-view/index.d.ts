// Type definitions for prosemirror-view 0.21
// Project: https://github.com/ProseMirror/prosemirror-view
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { DOMParser, DOMSerializer, Node, ResolvedPos, Slice } from 'prosemirror-model';
import { EditorState, Selection, Transaction } from 'prosemirror-state';
import { Mapping } from 'prosemirror-transform';
import * as dom from './dom';

export class Decoration {
  spec: object;
  static widget(pos: number, dom: Node, spec?: { side?: number | null, stopEvent?: ((event: Event) => boolean) | null, key?: string | null }): Decoration;
  static inline(from: number, to: number, attrs: DecorationAttrs, spec?: { inclusiveStart?: boolean | null, inclusiveEnd?: boolean | null }): Decoration;
  static node(from: number, to: number, attrs: DecorationAttrs, spec?: object): Decoration;
}
export interface DecorationAttrs {
  class?: string | null;
  style?: string | null;
  nodeName?: string | null;
}
export class DecorationSet {
  find(start?: number, end?: number): Decoration[];
  map(mapping: Mapping, doc: Node, options?: { onRemove?: ((decorationSpec: object) => void) | null }): DecorationSet;
  add(doc: Node, decorations: Decoration[]): DecorationSet;
  remove(decorations: Decoration[]): DecorationSet;
  static create(doc: Node, decorations: Decoration[]): DecorationSet;
  static empty: DecorationSet;
}
export class EditorView {
  constructor(place: dom.Node | ((p: dom.Node) => void) | { mount: dom.Node } | undefined, props: EditorProps)
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
  endOfTextblock(dir: 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward', state?: EditorState): boolean;
  destroy(): void;
  dispatch(tr: Transaction): void;
}
export interface EditorProps {
  state: EditorState;
  dispatchTransaction?: ((tr: Transaction) => void) | null;
  handleDOMEvents?: { [name: string]: (view: EditorView, event: Event) => boolean } | null;
  handleKeyDown?: ((view: EditorView, event: KeyboardEvent) => boolean) | null;
  handleKeyPress?: ((view: EditorView, event: KeyboardEvent) => boolean) | null;
  handleTextInput?: ((view: EditorView, from: number, to: number, text: string) => boolean) | null;
  handleClickOn?: ((view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean) => boolean) | null;
  handleClick?: ((view: EditorView, pos: number, event: MouseEvent) => boolean) | null;
  handleDoubleClickOn?: ((view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean) => boolean) | null;
  handleDoubleClick?: ((view: EditorView, pos: number, event: MouseEvent) => boolean) | null;
  handleTripleClickOn?: ((view: EditorView, pos: number, node: Node, nodePos: number, event: MouseEvent, direct: boolean) => boolean) | null;
  handleTripleClick?: ((view: EditorView, pos: number, event: MouseEvent) => boolean) | null;
  handleContextMenu?: ((view: EditorView, pos: number, event: MouseEvent) => boolean) | null;
  handlePaste?: ((view: EditorView, event: Event, slice: Slice) => boolean) | null;
  handleDrop?: ((view: EditorView, event: Event, slice: Slice, moved: boolean) => boolean) | null;
  onFocus?: ((view: EditorView, event: Event) => void) | null;
  onBlur?: ((view: EditorView, event: Event) => void) | null;
  createSelectionBetween?: ((view: EditorView, anchor: ResolvedPos, head: ResolvedPos) => Selection | null | undefined) | null;
  domParser?: DOMParser | null;
  clipboardParser?: DOMParser | null;
  transformPasted?: ((p: Slice) => Slice) | null;
  transformPastedHTML?: ((p: string) => string) | null;
  transformPastedText?: ((p: string) => string) | null;
  nodeViews?: { [name: string]: (node: Node, view: EditorView, getPos: () => number, decorations: Decoration[]) => NodeView } | null;
  clipboardSerializer?: DOMSerializer | null;
  decorations?: ((p: EditorState) => DecorationSet | null | undefined) | null;
  editable?: ((p: EditorState) => boolean) | null;
  attributes?: { [name: string]: string } | ((p: EditorState) => { [name: string]: string } | null | undefined) | null;
  scrollThreshold?: number | null;
  scrollMargin?: number | null;
}
export interface NodeView {
  dom?: dom.Node | null;
  contentDOM?: dom.Node | null;
  update?: ((node: Node, decorations: Decoration[]) => boolean) | null;
  selectNode?: (() => void) | null;
  deselectNode?: (() => void) | null;
  setSelection?: ((anchor: number, head: number, root: Document) => void) | null;
  stopEvent?: ((event: Event) => boolean) | null;
  ignoreMutation?: ((p: MutationRecord) => boolean) | null;
  destroy?: (() => void) | null;
}
