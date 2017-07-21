// Type definitions for prosemirror-menu 0.21
// Project: https://github.com/ProseMirror/prosemirror-menu
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { Transaction } from 'prosemirror-state';
import { Plugin } from 'prosemirror-state';
import { NodeType } from 'prosemirror-model';
import { EditorProps } from 'prosemirror-view';

export interface MenuElement {
  render(pm: any): Node;
}
export class MenuItem {
  constructor(spec: MenuItemSpec)
  spec: MenuItemSpec;
  render(view: EditorView): Node;
}
export interface MenuItemSpec {
  run(p1: EditorState, fn: (p: Transaction) => void, p2: EditorView, ev: Event): void;
  select?(p: EditorState): boolean;
  onDeselected?: string;
  active?(p: EditorState): boolean;
  render?(p: EditorView): Node;
  icon?: { [key: string]: any };
  label?: string;
  title?: string | ((s: EditorState) => string);
  class: string;
  css: string;
  execEvent: string;
}
export class Dropdown {
  constructor(content: MenuElement[], options?: object)
  render(view: EditorView): Node;
}
export class DropdownSubmenu {
  constructor(content: MenuElement[], options?: object)
  render(view: EditorView): Node;
}
export function renderGrouped(view: EditorView, content: MenuElement | MenuElement[][]): DocumentFragment;
export let icons: { [key: string]: any };
export let joinUpItem: MenuItem;
export let liftItem: MenuItem;
export let selectParentNodeItem: MenuItem;
export function undoItem(p: object): MenuItem;
export function redoItem(p: object): MenuItem;
export function wrapItem(nodeType: NodeType, options: object): MenuItem;
export function blockTypeItem(nodeType: NodeType, options: object): MenuItem;
export function menuBar(options: { content: MenuElement[][], floating?: boolean }): Plugin;
