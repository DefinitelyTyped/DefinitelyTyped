// Type definitions for prosemirror-transform 0.21
// Project: https://github.com/ProseMirror/prosemirror-transform
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Fragment, Mark, MarkType, ProsemirrorNode as Node, NodeRange, NodeType, Schema, Slice } from 'prosemirror-model';

export interface Mappable {
  map(pos: number, assoc?: number): number;
  mapResult(pos: number, assoc?: number): MapResult;
}
export class MapResult {
  pos: number;
  deleted: boolean;
}
export class StepMap {
  constructor(ranges: number[])
  mapResult(pos: number, assoc?: number): MapResult;
  map(pos: number, assoc?: number): number;
  forEach(f: (oldStart: number, oldEnd: number, newStart: number, newEnd: number) => void): void;
  invert(): StepMap;
}
export class Mapping {
  constructor(maps?: StepMap[])
  maps: StepMap[];
  from: number;
  to: number;
  slice(from?: number, to?: number): this;
  appendMap(map: StepMap, mirrors?: number): void;
  appendMapping(mapping: Mapping): void;
  appendMappingInverted(mapping: Mapping): void;
  map(pos: number, assoc?: number): number;
  mapResult(pos: number, assoc?: number): MapResult;
}
export class AddMarkStep extends Step {
  constructor(from: number, to: number, mark: Mark)
}
export class RemoveMarkStep extends Step {
  constructor(from: number, to: number, mark: Mark)
}
export class Transform {
  constructor(doc: Node)
  addMark(from: number, to: number, mark: Mark): this;
  removeMark(from: number, to: number, mark?: Mark | MarkType): this;
  clearMarkup(from: number, to: number): this;
  replaceRange(from: number, to: number, slice: Slice): this;
  replaceRangeWith(from: number, to: number, node: Node): this;
  deleteRange(from: number, to: number): this;
  delete(from: number, to: number): this;
  replace(from: number, to?: number, slice?: Slice): this;
  replaceWith(from: number, to: number, content: Fragment | Node | Node[]): this;
  insert(pos: number, content: Fragment | Node | Node[]): this;
  lift(range: NodeRange, target: number): this;
  wrap(range: NodeRange, wrappers: Array<{ type: NodeType, attrs?: { [key: string]: any } | null }>): this;
  setBlockType(from: number, to: number | undefined, type: NodeType, attrs?: { [key: string]: any }): this;
  setNodeType(pos: number, type?: NodeType, attrs?: { [key: string]: any }, marks?: Mark[]): this;
  split(pos: number, depth?: number, typesAfter?: Array<{ type: NodeType, attrs?: { [key: string]: any } | null }>): this;
  join(pos: number, depth?: number, p1?: boolean): this;
  doc: Node;
  steps: Step[];
  docs: Node[];
  mapping: Mapping;
  before: Node;
  step(step: Step): this;
  maybeStep(step: Step): StepResult;
  docChanged: boolean;
}
export class ReplaceStep extends Step {
  constructor(from: number, to: number, slice: Slice, structure?: boolean)
}
export class ReplaceAroundStep extends Step {
  constructor(from: number, to: number, gapFrom: number, gapTo: number, slice: Slice, insert: number, structure?: boolean)
}
export function replaceStep(doc: Node, from: number, to?: number, slice?: Slice): Step | null | undefined;
export class Step {
  apply(doc: Node): StepResult;
  getMap(): StepMap;
  invert(doc: Node): Step;
  map(mapping: Mappable): Step | null | undefined;
  merge(other: Step): Step | null | undefined;
  offset(n: number): Step;
  toJSON(): { [key: string]: any };
  static fromJSON(schema: Schema, json: { [key: string]: any }): Step;
  static jsonID(id: string, stepClass: { new(...args: any[]): Step }): void;
}
export class StepResult {
  doc?: Node | null;
  failed?: string | null;
  static ok(doc: Node): StepResult;
  static fail(message: string): StepResult;
  static fromReplace(doc: Node, from: number, to: number, slice: Slice): StepResult;
}
export function liftTarget(range: NodeRange): number | null | undefined;
export function findWrapping(range: NodeRange, nodeType: NodeType, attrs?: { [key: string]: any }): Array<{ type: NodeType, attrs?: { [key: string]: any } | null }> | null | undefined;
export function canSplit(doc: Node, pos: number, depth?: number, typesAfter?: Array<{ type: NodeType, attrs?: { [key: string]: any } | null }>): boolean;
export function canJoin(doc: Node, pos: number): boolean;
export function joinPoint(doc: Node, pos: number, dir?: number): number | null | undefined;
export function insertPoint(doc: Node, pos: number, nodeType: NodeType, attrs?: { [key: string]: any }): number | null | undefined;
