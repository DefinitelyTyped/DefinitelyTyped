// Type definitions for prosemirror-menu 0.18
// Project: https://github.com/ProseMirror/prosemirror-menu
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { ProsemirrorNode } from 'prosemirror-model'
import { EditorView } from 'prosemirror-view'
import { EditorState } from 'prosemirror-state'
import { Transaction } from 'prosemirror-state'
import { NodeType } from 'prosemirror-model'
import { EditorProps } from 'prosemirror-view'

declare module "prosemirror-menu" {
  export interface MenuElement {
    render(pm: any): Node

  }
  export class MenuItem {
    constructor(spec: MenuItemSpec)
    spec: MenuItemSpec;
    render(view: EditorView): Node

  }
  export interface MenuItemSpec {
    run(p1: EditorState, fn: (p: Transaction) => void, p2: EditorView): void
    select?(p: EditorState): boolean
    onDeselect?: string;
    active?(p: EditorState): boolean
    render?(p: EditorView): Node
    icon?: Object;
    label?: string;
    title?: string;
    class: string;
    css: string;
    execEvent: string;

  }
  export class Dropdown {
    constructor(content: MenuElement[], options?: Object)
    render(view: EditorView): Node

  }
  export class DropdownSubmenu {
    constructor(content: MenuElement[], options?: Object)
    render(view: EditorView): Node

  }
  export function renderGrouped(view: EditorView, content: MenuElement | MenuElement[][]): DocumentFragment
  export let icons: Object;
  export let joinUpItem: MenuItem;
  export let liftItem: MenuItem;
  export let selectParentNodeItem: MenuItem;
  export function undoItem(p: Object): MenuItem
  export function redoItem(p: Object): MenuItem
  export function wrapItem(nodeType: NodeType, options: Object): MenuItem
  export function blockTypeItem(nodeType: NodeType, options: Object): MenuItem
  export class MenuBarEditorView {
    wrapper: Node;
    editor: EditorView;
    props: EditorProps;
    update(props: EditorProps): void
    updateState(state: EditorState): void
    destroy(): void

  }

}