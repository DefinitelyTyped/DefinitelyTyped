// Type definitions for slate-react 0.12
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Patrick Sachs <https://github.com/PatrickSachs>
//                 Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import { Slate } from 'slate';
import * as Immutable from 'immutable';
import * as React from 'react';

// Values prefixed with "data-..." (Used for spellchecking according to docs)
export interface RenderAttributes {
  [key: string]: any;
}

export interface RenderMarkProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Editor;
  mark: Slate.Mark;
  marks: Immutable.Set<Slate.Mark>;
  node: Slate.Node;
  offset: number;
  text: string;
}

export interface RenderNodeProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Editor;
  isSelected: boolean;
  key: string;
  node: Slate.Block;
  parent: Slate.Node;
}

export interface Plugin {
  onBeforeInput?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onBlur?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onFocus?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onClick?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onCopy?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onCut?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onDrop?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onKeyDown?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onKeyUp?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onPaste?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onSelect?: (event: Event, change: Slate.Change, editor: Editor) => Slate.Change | void;
  onChange?: (change: Slate.Change) => any;
  renderEditor?: (props: RenderAttributes, editor: Editor) => object | void;
  schema?: Slate.Schema;
  decorateNode?: (node: Slate.Node) => Slate.Range[] | void;
  renderMark?: (props: RenderMarkProps) => any;
  renderNode?: (props: RenderNodeProps) => any;
  renderPlaceholder?: (props: RenderAttributes) => any;
  renderPortal?: (props: RenderAttributes) => any;
  validateNode?: (node: Node) => any;
}

export interface BasicEditorProps {
  value: Slate.Value;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  className?: string;
  onChange?: (change: Slate.Change) => any;
  placeholder?: any;
  plugins?: Plugin[];
  readOnly?: boolean;
  role?: string;
  schema?: Slate.Schema;
  spellCheck?: boolean;
  style?: { [key: string]: string };
  tabIndex?: number;
}

// tsling:disable interface-over-type-literal
export type EditorProps = BasicEditorProps & Plugin;

export interface EditorState {
  schema: Slate.Schema;
  value: Slate.Value;
  stack: Slate.Stack; // [TODO] define stack
}

export class Editor extends React.Component<EditorProps, EditorState> {
  schema: Slate.Schema;
  value: Slate.Value;
  stack: Slate.Stack;

  // Instance Methods
  blur(): void;
  change(fn: (change: Slate.Change) => any): void;
  change(...args: any[]): void;
  focus(): void;
}

export type SlateType = 'fragment' | 'html' | 'node' | 'rich' | 'text' | 'files';

export function findDOMNode(node: Slate.Node): Element;
export function findDOMRange(range: Slate.Range): Range;
export function findNode(element: Element, value: Slate.Value): Slate.Node;
export function findRange(selection: Selection, value: Slate.Value): Slate.Range;
export function getEventRange(event: Event, value: Slate.Value): Slate.Range;
export function getEventTransfer(event: Event): { type: SlateType; node: Slate.Node };
export function setEventTransfer(event: Event, type: SlateType, data: any): void;
