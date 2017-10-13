// Type definitions for prosemirror-markdown 0.21
// Project: https://github.com/ProseMirror/prosemirror-markdown
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { MarkdownIt } from 'markdown-it';
import { Mark, Node, Schema } from 'prosemirror-model';

export class MarkdownParser {
  constructor(schema: Schema, tokenizer: MarkdownIt, tokens: { [key: string]: any });
}

export type NodeSerializer = (state: MarkdownSerializerState, node?: Node, parent?: Node, index?: number) => void;

export interface MarkSerializer {
  open: string | ((state: MarkdownSerializerState, mark: Mark) => string);
  close: string | ((state: MarkdownSerializerState, mark: Mark) => string);
  mixable?: boolean;
}

export interface NodeSerializerSpec {
    [ nodeName: string ]: NodeSerializer;
}

export interface MarkSerializerSpec {
    [ markName: string ]: MarkSerializer;
}

export class MarkdownSerializer {
  constructor(nodes: NodeSerializerSpec, marks: MarkSerializerSpec);
  serialize(content: Node, options?: { [key: string]: any }): string;
  nodes: any;
  marks: any;
}

export const defaultMarkdownSerializer: MarkdownSerializer;

export class MarkdownSerializerState {
  constructor(nodes: NodeSerializerSpec, marks: MarkSerializerSpec, options?: object);
  flushClose(size: number): void;
  wrapBlock(delim: string, firstDelim: string | null, node: Node, f: (...args: any[]) => void): void;
  atBlank(): boolean;
  ensureNewLine(): void;
  write(content?: string): void;
  closeBlock(node: Node): void;
  text(text: string, escape?: boolean): void;
  render(node: Node, parent: Node, index: number): void;
  renderContent(parent: Node): void;
  renderInline(parent: Node): void;
  renderList(node: Node, delim: string, firstDelim: (number: number) => string): void;
  esc(str: string, startOfLine?: boolean): string;
  quote(str: string): string;
  repeat(str: string, n: number): string;
  markString(mark: Mark, open: boolean): string;
  out: any;
  closed: any;
  nodes: any;
  marks: any;
}
