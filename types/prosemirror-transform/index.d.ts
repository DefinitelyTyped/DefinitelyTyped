// Type definitions for prosemirror-transform 0.21
// Project: https://github.com/ProseMirror/prosemirror-transform
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Fragment, Mark, MarkType, Node, NodeRange, NodeType, Schema, Slice } from 'prosemirror-model';

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
  slice(from?: number, to?: number): Mapping;
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
  addMark(from: number, to: number, mark: Mark): Transform;
  removeMark(from: number, to: number, mark?: Mark | MarkType): Transform;
  clearMarkup(from: number, to: number): Transform;
  replaceRange(from: number, to: number, slice: Slice): Transform;
  replaceRangeWith(from: number, to: number, node: Node): Transform;
  deleteRange(from: number, to: number): Transform;
  delete(from: number, to: number): Transform;
  replace(from: number, to?: number, slice?: Slice): Transform;
  replaceWith(from: number, to: number, content: Fragment | Node | Node[]): Transform;
  insert(pos: number, content: Fragment | Node | Node[]): Transform;
  lift(range: NodeRange, target: number): Transform;
  wrap(range: NodeRange, wrappers: Array<{ type: NodeType, attrs?: object | null }>): Transform;
  setBlockType(from: number, to: number | undefined, type: NodeType, attrs?: object): Transform;
  setNodeType(pos: number, type?: NodeType, attrs?: object, marks?: Mark[]): Transform;
  split(pos: number, depth?: number, typesAfter?: Array<{ type: NodeType, attrs?: object | null }>): Transform;
  join(pos: number, depth?: number, p1?: boolean): Transform;
  doc: Node;
  steps: Step[];
  docs: Node[];
  mapping: Mapping;
  before: Node;
  step(step: Step): Transform;
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
  toJSON(): object;
  static fromJSON(schema: Schema, json: object): Step;
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
export function findWrapping(range: NodeRange, nodeType: NodeType, attrs?: object): Array<{ type: NodeType, attrs?: object | null }> | null | undefined;
export function canSplit(doc: Node, pos: number, depth?: number, typesAfter?: Array<{ type: NodeType, attrs?: object | null }>): boolean;
export function canJoin(doc: Node, pos: number): boolean;
export function joinPoint(doc: Node, pos: number, dir?: number): number | null | undefined;
export function insertPoint(doc: Node, pos: number, nodeType: NodeType, attrs?: object): number | null | undefined;
