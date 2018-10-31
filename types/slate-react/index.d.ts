// Type definitions for slate-react 0.12
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Patrick Sachs <https://github.com/PatrickSachs>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Francesco Agnoletto <https://github.com/Kornil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { Mark, Node, Block, Inline, Change, Schema, Value, Stack } from 'slate';
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
  mark: Mark;
  marks: Immutable.Set<Mark>;
  node: Node;
  offset: number;
  text: string;
}

export interface RenderNodeProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Editor;
  isSelected: boolean;
  key: string;
  node: Block | Inline;
  parent: Node;
}

export interface Plugin {
  onBeforeInput?: (event: Event, change: Change, editor: Editor) => Change | void;
  onBlur?: (event: Event, change: Change, editor: Editor) => Change | void;
  onFocus?: (event: Event, change: Change, editor: Editor) => Change | void;
  onClick?: (event: Event, change: Change, editor: Editor) => Change | void;
  onCopy?: (event: Event, change: Change, editor: Editor) => Change | void;
  onCut?: (event: Event, change: Change, editor: Editor) => Change | void;
  onDrop?: (event: Event, change: Change, editor: Editor) => Change | void;
  onKeyDown?: (event: Event, change: Change, editor: Editor) => Change | void;
  onKeyUp?: (event: Event, change: Change, editor: Editor) => Change | void;
  onPaste?: (event: Event, change: Change, editor: Editor) => Change | void;
  onSelect?: (event: Event, change: Change, editor: Editor) => Change | void;
  onChange?: (change: Change) => any;
  renderEditor?: (props: RenderAttributes, editor: Editor) => object | void;
  schema?: Schema;
  decorateNode?: (node: Node) => Range[] | void;
  renderMark?: (props: RenderMarkProps) => any;
  renderNode?: (props: RenderNodeProps) => any;
  renderPlaceholder?: (props: RenderAttributes) => any;
  renderPortal?: (props: RenderAttributes) => any;
  validateNode?: (node: Node) => any;
}

export interface BasicEditorProps {
  value: Value;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  className?: string;
  onChange?: (change: Change) => any;
  placeholder?: any;
  plugins?: Plugin[];
  readOnly?: boolean;
  role?: string;
  schema?: Schema;
  spellCheck?: boolean;
  style?: { [key: string]: string };
  tabIndex?: number;
}

// tsling:disable interface-over-type-literal
export type EditorProps = BasicEditorProps & Plugin;

export interface EditorState {
  schema: Schema;
  value: Value;
  stack: Stack; // [TODO] define stack
}

export class Editor extends React.Component<EditorProps, EditorState> {
  schema: Schema;
  value: Value;
  stack: Stack;

  // Instance Methods
  blur(): void;
  change(fn: (change: Change) => any): void;
  change(...args: any[]): void;
  focus(): void;
}

export type SlateType = 'fragment' | 'html' | 'node' | 'rich' | 'text' | 'files';

export function findDOMNode(node: Node): Element;
export function findDOMRange(range: Range): Range;
export function findNode(element: Element, value: Value): Node;
export function findRange(selection: Selection, value: Value): Range;
export function getEventRange(event: Event, value: Value): Range;
export function getEventTransfer(event: Event): { type: SlateType; node: Node };
export function setEventTransfer(event: Event, type: SlateType, data: any): void;
