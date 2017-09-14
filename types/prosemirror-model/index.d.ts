// Type definitions for prosemirror-model 0.21
// Project: https://github.com/ProseMirror/prosemirror-model
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import OrderedMap = require('orderedmap');
import * as dom from './dom';

export interface AnyObject {
  [key: string]: any;
}

export class ContentMatch {
  matchNode(node: Node): ContentMatch | null | undefined;
  matchType(type: NodeType, attrs?: AnyObject, marks?: Mark[]): ContentMatch | null | undefined;
  matchFragment(fragment: Fragment, from?: number, to?: number): ContentMatch | boolean | null | undefined;
  matchToEnd(fragment: Fragment, start?: number, end?: number): boolean;
  validEnd(): boolean;
  fillBefore(after: Fragment, toEnd: boolean, startIndex?: number): Fragment | null | undefined;
  allowsMark(markType: MarkType): boolean;
  findWrapping(target: NodeType, targetAttrs?: AnyObject, targetMarks?: Mark[]): Array<{ type: NodeType, attrs: AnyObject }> | null | undefined;
  findWrappingFor(node: Node): Array<{ type: NodeType, attrs: AnyObject }> | null | undefined;
}
export class Fragment {
  nodesBetween(from: number, to: number, f: (node: Node, start: number, parent: Node, index: number) => boolean | null | void): void;
  descendants(f: (node: Node, pos: number, parent: Node) => boolean | null | void): void;
  append(other: Fragment): Fragment;
  cut(from: number, to?: number): Fragment;
  replaceChild(index: number, node: Node): Fragment;
  eq(other: Fragment): boolean;
  firstChild?: Node | null;
  lastChild?: Node | null;
  childCount: number;
  child(index: number): Node;
  offsetAt(index: number): number;
  maybeChild(index: number): Node | null | undefined;
  forEach(f: (node: Node, offset: number, index: number) => void): void;
  findDiffStart(other: Fragment): number | null | undefined;
  findDiffEnd(other: Node): { a: number, b: number } | null | undefined;
  toString(): string;
  toJSON(): AnyObject | null | undefined;
  static fromJSON(schema: Schema, value?: AnyObject): Fragment;
  static fromArray(array: Node[]): Fragment;
  static from(nodes?: Fragment | Node | Node[]): Fragment;
  static empty: Fragment;
}
export interface ParseRule {
  tag?: string | null;
  namespace?: string | null;
  style?: string | null;
  context?: string | null;
  node?: string | null;
  mark?: string | null;
  priority?: number | null;
  ignore?: boolean | null;
  skip?: boolean | null;
  attrs?: AnyObject | null;
  getAttrs?: ((p: dom.Node | string) => boolean | AnyObject | null | void) | null;
  contentElement?: string | null;
  getContent?: ((p: dom.Node) => Fragment) | null;
  preserveWhitespace?: boolean | 'full' | null;
}
export class DOMParser {
  constructor(schema: Schema, rules: ParseRule[])
  schema: Schema;
  rules: ParseRule[];
  parse(dom: dom.Node, options?: {
    preserveWhitespace?: boolean | 'full' | null,
    findPositions?: Array<{ node: Node, offset: number }> | null,
    from?: number | null,
    to?: number | null,
    topNode?: Node | null,
    topStart?: number | null,
    context?: ResolvedPos | null
  }): Node;
  parseSlice(dom: dom.Node, options?: AnyObject): Slice;
  static schemaRules(schema: Schema): ParseRule[];
  static fromSchema(schema: Schema): DOMParser;
}
export class Mark {
  type: MarkType;
  attrs: AnyObject;
  addToSet(set: Mark[]): Mark[];
  removeFromSet(set: Mark[]): Mark[];
  isInSet(set: Mark[]): boolean;
  eq(other: Mark): boolean;
  toJSON(): AnyObject;
  static fromJSON(schema: Schema, json: AnyObject): Mark;
  static sameSet(a: Mark[], b: Mark[]): boolean;
  static setFrom(marks?: Mark | Mark[]): Mark[];
  static none: Mark[];
}
export class Node {
  type: NodeType;
  attrs: { [key: string]: any };
  content: Fragment;
  marks: Mark[];
  text?: string | null;
  nodeSize: number;
  childCount: number;
  child(index: number): Node;
  maybeChild(index: number): Node | null | undefined;
  forEach(f: (node: Node, offset: number, index: number) => void): void;
  nodesBetween(from: number | undefined, to: number | undefined, f: (node: Node, pos: number, parent: Node, index: number) => boolean | null | void): void;
  descendants(f: (node: Node, pos: number, parent: Node) => boolean | null | void): void;
  textContent: string;
  textBetween(from: number, to: number, blockSeparator?: string, leafText?: string): string;
  firstChild?: Node | null;
  lastChild?: Node | null;
  eq(other: Node): boolean;
  sameMarkup(other: Node): boolean;
  hasMarkup(type: NodeType, attrs?: AnyObject, marks?: Mark[]): boolean;
  copy(content?: Fragment): Node;
  mark(marks: Mark[]): Node;
  cut(from: number, to?: number): Node;
  slice(from: number, to?: number): Slice;
  replace(from: number, to: number, slice: Slice): Node;
  nodeAt(pos: number): Node | null | undefined;
  childAfter(pos: number): { node?: Node | null, index: number, offset: number };
  childBefore(pos: number): { node?: Node | null, index: number, offset: number };
  resolve(pos: number): ResolvedPos;
  rangeHasMark(from: number | undefined, to: number | undefined, type: MarkType): boolean;
  isBlock: boolean;
  isTextblock: boolean;
  inlineContent: boolean;
  isInline: boolean;
  isText: boolean;
  isLeaf: boolean;
  isAtom: boolean;
  toString(): string;
  contentMatchAt(index: number): ContentMatch;
  canReplace(from: number, to: number, replacement?: Fragment, start?: number, end?: number): boolean;
  canReplaceWith(from: number, to: number, type: NodeType, attrs?: Mark[]): boolean;
  canAppend(other: Node): boolean;
  check(): void;
  toJSON(): AnyObject;
  static fromJSON(schema: Schema, json: AnyObject): Node;
}
export class ReplaceError extends Error {
}
export class Slice {
  constructor(content: Fragment, openStart: number, openEnd: number)
  content: Fragment;
  openStart: number;
  openEnd: number;
  size: number;
  eq(other: Slice): boolean;
  toJSON(): AnyObject | null | undefined;
  static fromJSON(schema: Schema, json?: AnyObject): Slice;
  static maxOpen(fragment: Fragment): Slice;
  static empty: Slice;
}
export class ResolvedPos {
  pos: number;
  depth: number;
  parentOffset: number;
  parent: Node;
  doc: Node;
  node(depth?: number): Node;
  index(depth?: number): number;
  indexAfter(depth?: number): number;
  start(depth?: number): number;
  end(depth?: number): number;
  before(depth?: number): number;
  after(depth?: number): number;
  textOffset: number;
  nodeAfter?: Node | null;
  nodeBefore?: Node | null;
  marks(after?: boolean): Mark[];
  sharedDepth(pos: number): number;
  blockRange(other?: ResolvedPos, pred?: (p: Node) => boolean): NodeRange | null | undefined;
  sameParent(other: ResolvedPos): boolean;
  max(other: ResolvedPos): ResolvedPos;
  min(other: ResolvedPos): ResolvedPos;
}
export class NodeRange {
  $from: ResolvedPos;
  $to: ResolvedPos;
  depth: number;
  start: number;
  end: number;
  parent: Node;
  startIndex: number;
  endIndex: number;
}
export class NodeType {
  name: string;
  schema: Schema;
  spec: NodeSpec;
  isBlock: boolean;
  isText: boolean;
  isInline: boolean;
  isTextblock: boolean;
  inlineContent: boolean;
  isLeaf: boolean;
  isAtom: boolean;
  create(attrs?: AnyObject, content?: Fragment | Node | Node[], marks?: Mark[]): Node;
  createChecked(attrs?: AnyObject, content?: Fragment | Node | Node[], marks?: Mark[]): Node;
  createAndFill(attrs?: AnyObject, content?: Fragment | Node | Node[], marks?: Mark[]): Node | null | undefined;
  validContent(content: Fragment, attrs?: AnyObject): boolean;
}
export class MarkType {
  name: string;
  schema: Schema;
  spec: MarkSpec;
  create(attrs?: AnyObject): Mark;
  removeFromSet(set: Mark[]): Mark[];
  isInSet(set: Mark[]): Mark | null | undefined;
  excludes(other: MarkType): boolean;
}
export interface SchemaSpec {
  nodes: { [name: string]: NodeSpec } | OrderedMap<NodeSpec>;
  marks?: { [name: string]: MarkSpec } | OrderedMap<MarkSpec> | null;
  topNode?: string | null;
}
export interface NodeSpec {
  content?: string | null;
  group?: string | null;
  inline?: boolean | null;
  atom?: boolean | null;
  attrs?: { [name: string]: AttributeSpec } | null;
  selectable?: boolean | null;
  draggable?: boolean | null;
  code?: boolean | null;
  defining?: boolean | null;
  isolating?: boolean | null;
  toDOM?: ((node: Node) => DOMOutputSpec) | null;
  parseDOM?: ParseRule[] | null;
}
export interface MarkSpec {
  attrs?: { [name: string]: AttributeSpec } | null;
  inclusive?: boolean | null;
  excludes?: string | null;
  group?: string | null;
  toDOM?: ((mark: Mark, inline: boolean) => DOMOutputSpec) | null;
  parseDOM?: ParseRule[] | null;
}
export interface AttributeSpec {
  default?: any | null;
  compute?: (() => any) | null;
}
export class Schema {
  constructor(spec: SchemaSpec)
  spec: SchemaSpec;
  nodes: { [name: string]: NodeType };
  marks: { [name: string]: MarkType };
  cached: AnyObject;
  topNodeType: NodeType;
  node(type: string | NodeType, attrs?: AnyObject, content?: Fragment | Node | Node[], marks?: Mark[]): Node;
  text(text: string, marks?: Mark[]): Node;
  mark(type: string | MarkType, attrs?: AnyObject): Mark;
  nodeFromJSON(json: AnyObject): Node;
  markFromJSON(json: AnyObject): Mark;
}
export interface DOMOutputSpecArray {
  0: string;
  1?: DOMOutputSpec | 0 | { [attr: string]: string };
  2?: DOMOutputSpec | 0;
  3?: DOMOutputSpec | 0;
  4?: DOMOutputSpec | 0;
  5?: DOMOutputSpec | 0;
  6?: DOMOutputSpec | 0;
  7?: DOMOutputSpec | 0;
  8?: DOMOutputSpec | 0;
  9?: DOMOutputSpec | 0;
}
export type DOMOutputSpec
    = string
    | dom.Node
    | DOMOutputSpecArray;
export class DOMSerializer {
  constructor(nodes: { [name: string]: (node: Node) => DOMOutputSpec }, marks: { [name: string]: (mark: Mark, inline: boolean) => DOMOutputSpec })
  nodes: { [name: string]: (node: Node) => DOMOutputSpec };
  marks: { [name: string]: (mark: Mark) => DOMOutputSpec };
  serializeFragment(fragment: Fragment, options?: AnyObject): DocumentFragment;
  serializeNode(node: Node, options?: AnyObject): Node;
  static renderSpec(doc: Document, structure: DOMOutputSpec): { dom: Node, contentDOM?: Node | null };
  static fromSchema(schema: Schema): DOMSerializer;
  static nodesFromSchema(schema: Schema): { [name: string]: (node: Node) => DOMOutputSpec };
  static marksFromSchema(schema: Schema): { [name: string]: (mark: Mark) => DOMOutputSpec };
}
