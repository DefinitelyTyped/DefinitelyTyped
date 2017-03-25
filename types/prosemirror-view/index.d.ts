// Type definitions for prosemirror-view 0.18
// Project: https://github.com/ProseMirror/prosemirror-view
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { ProsemirrorNode } from 'prosemirror-model'
import { Mapping } from 'prosemirror-transform'
import { EditorState } from 'prosemirror-state'
import { Transaction } from 'prosemirror-state'
import { DOMParser } from 'prosemirror-model'
import { Slice } from 'prosemirror-model'
import { DOMSerializer } from 'prosemirror-model'

declare module "prosemirror-view" {
  export class Decoration {
    spec: Object;
    static widget(pos: number, dom: Node, spec?: { associative?: string, stopEvent?(event: Event): boolean, key?: string }): Decoration
    static inline(from: number, to: number, attrs: DecorationAttrs, spec?: { inclusiveLeft?: boolean, inclusiveRight?: boolean }): Decoration
    static node(from: number, to: number, attrs: DecorationAttrs, spec?: Object): Decoration

  }
  export interface DecorationAttrs {
    class?: string;
    style?: string;
    nodeName?: string;

  }
  export class DecorationSet {
    find(start?: number, end?: number): Decoration[]
    map(mapping: Mapping, doc: ProsemirrorNode, options?: { onRemove?(decorationSpec: Object): void }): DecorationSet
    add(doc: ProsemirrorNode, decorations: Decoration[]): DecorationSet
    remove(decorations: Decoration[]): DecorationSet
    static create(doc: ProsemirrorNode, decorations: Decoration[]): DecorationSet
    static empty: DecorationSet;

  }
  export class EditorView {
    constructor(place: Node | ((p: Node) => void) | { mount: Node } |  void, props: EditorProps)
    state: EditorState;
    dom: Element;
    props: EditorProps;
    update(props: EditorProps): void
    setProps(props: EditorProps): void
    updateState(state: EditorState): void
    hasFocus(): boolean
    someProp(propName: string, f: (prop: any) => any): any
    focus(): void
    root: Document | DocumentFragment;
    posAtCoords(coords: { left: number, top: number }): { pos: number, inside: number } | void
    coordsAtPos(pos: number): { left: number, right: number, top: number, bottom: number }
    endOfTextblock(dir: "up" | "down" | "left" | "right" | "forward" | "backward", state?: EditorState): boolean
    destroy(): void
    dispatch(tr: Transaction): void

  }
  export interface EditorProps {
    state: EditorState;
    dispatchTransaction?(tr: Transaction): void
    handleDOMEvents?: Object;
    handleKeyDown?(view: EditorView, event: KeyboardEvent): boolean
    handleKeyPress?(view: EditorView, event: KeyboardEvent): boolean
    handleTextInput?(view: EditorView, from: number, to: number, text: string): boolean
    handleClickOn?(view: EditorView, pos: number, node: ProsemirrorNode, nodePos: number, event: MouseEvent, direct: boolean): boolean
    handleClick?(view: EditorView, pos: number, event: MouseEvent): boolean
    handleDoubleClickOn?(view: EditorView, pos: number, node: ProsemirrorNode, nodePos: number, event: MouseEvent, direct: boolean): boolean
    handleDoubleClick?(view: EditorView, pos: number, event: MouseEvent): boolean
    handleTripleClickOn?(view: EditorView, pos: number, node: ProsemirrorNode, nodePos: number, event: MouseEvent, direct: boolean): boolean
    handleTripleClick?(view: EditorView, pos: number, event: MouseEvent): boolean
    handleContextMenu?(view: EditorView, pos: number, event: MouseEvent): boolean
    onFocus?(view: EditorView, event: Event): void
    onBlur?(view: EditorView, event: Event): void
    domParser?: DOMParser;
    clipboardParser?: DOMParser;
    transformPasted?(p: Slice): Slice
    transformPastedHTML?(p: string): string
    transformPastedText?(p: string): string
    nodeViews?: Object;
    clipboardSerializer?: DOMSerializer;
    decorations?(p: EditorState): DecorationSet
    editable?(p: EditorState): boolean
    attributes?: Object | ((p: EditorState) => Object | void);
    scrollThreshold?: number;
    scrollMargin?: number;

  }
  export interface NodeView {
    dom?: Node;
    contentDOM?: Node;
    update?(node: ProsemirrorNode, decorations: Decoration[]): boolean
    selectNode?(): void
    deselectNode?(): void
    setSelection?(anchor: number, head: number, root: Document): void
    stopEvent?(event: Event): boolean
    ignoreMutation?(p: MutationRecord): boolean
    destroy?(): void

  }

}