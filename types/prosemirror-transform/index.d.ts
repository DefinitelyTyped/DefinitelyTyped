// Type definitions for prosemirror-transform 0.18
// Project: https://github.com/ProseMirror/prosemirror-transform
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { ProsemirrorNode } from 'prosemirror-model'
import { Mark } from 'prosemirror-model'
import { MarkType } from 'prosemirror-model'
import { Slice } from 'prosemirror-model'
import { Fragment } from 'prosemirror-model'
import { NodeRange } from 'prosemirror-model'
import { NodeType } from 'prosemirror-model'
import { Schema } from 'prosemirror-model'

declare module "prosemirror-transform" {
  export interface Mappable {
    map(pos: number, assoc?: number): number
    mapResult(pos: number, assoc?: number): MapResult

  }
  export class MapResult {
    pos: number;
    deleted: boolean;

  }
  export class StepMap {
    constructor(ranges: number[])
    mapResult(pos: number, assoc?: number): MapResult
    map(pos: number, assoc?: number): number
    forEach(f: (oldStart: number, oldEnd: number, newStart: number, newEnd: number) => void): void
    invert(): StepMap

  }
  export class Mapping {
    constructor(maps?: StepMap[])
    maps: StepMap[];
    from: number;
    to: number;
    slice(from?: number, to?: number): Mapping
    appendMap(map: StepMap, mirrors?: number): void
    appendMapping(mapping: Mapping): void
    appendMappingInverted(mapping: Mapping): void
    map(pos: number, assoc?: number): number
    mapResult(pos: number, assoc?: number): MapResult

  }
  export class Transform {
    constructor(doc: ProsemirrorNode)
    addMark(from: number, to: number, mark: Mark): Transform
    removeMark(from: number, to: number, mark?: Mark | MarkType): Transform
    clearMarkup(from: number, to: number): Transform
    replaceRange(from: number, to: number, slice: Slice): Transform
    replaceRangeWith(from: number, to: number, node: ProsemirrorNode): Transform
    deleteRange(from: number, to: number): Transform
    delete(from: number, to: number): Transform
    replace(from: number, to?: number, slice?: Slice): Transform
    replaceWith(from: number, to: number, content: Fragment | ProsemirrorNode | ProsemirrorNode[]): Transform
    insert(pos: number, content: Fragment | ProsemirrorNode | ProsemirrorNode[]): Transform
    lift(range: NodeRange, target: number): Transform
    wrap(range: NodeRange, wrappers: { type: NodeType, attrs?: Object }[]): Transform
    setBlockType(from: number, to: number |  void, type: NodeType, attrs?: Object): Transform
    setNodeType(pos: number, type?: NodeType, attrs?: Object, marks?: Mark[]): Transform
    split(pos: number, depth?: number, typesAfter?: { type: NodeType, attrs?: Object }[]): Transform
    join(pos: number, depth?: number, p1?: boolean): Transform
    doc: ProsemirrorNode;
    steps: Step[];
    docs: ProsemirrorNode[];
    mapping: Mapping;
    before: ProsemirrorNode;
    step(step: Step): Transform
    maybeStep(step: Step): StepResult
    docChanged: boolean;

  }
  export class AddMarkStep extends Step {
    constructor(from: number, to: number, mark: Mark)

  }
  export class RemoveMarkStep extends Step {
    constructor(from: number, to: number, mark: Mark)

  }
  export function replaceStep(doc: ProsemirrorNode, from: number, to?: number, slice?: Slice): Step
  export class ReplaceStep extends Step {
    constructor(from: number, to: number, slice: Slice, structure?: boolean)

  }
  export class ReplaceAroundStep extends Step {
    constructor(from: number, to: number, gapFrom: number, gapTo: number, slice: Slice, insert: number, structure?: boolean)

  }
  export class Step {
    apply(doc: ProsemirrorNode): StepResult
    getMap(): StepMap
    invert(doc: ProsemirrorNode): Step
    map(mapping: Mappable): Step
    merge(other: Step): Step
    offset(n: number): Step
    toJSON(): Object
    static fromJSON(schema: Schema, json: Object): Step
    static jsonID(id: string, stepClass: Step): void

  }
  export class StepResult {
    doc?: ProsemirrorNode;
    failed?: string;
    static ok(doc: ProsemirrorNode): StepResult
    static fail(message: string): StepResult
    static fromReplace(doc: ProsemirrorNode, from: number, to: number, slice: Slice): StepResult

  }
  export function liftTarget(range: NodeRange): number
  export function findWrapping(range: NodeRange, nodeType: NodeType, attrs?: Object): { type: NodeType, attrs?: Object }[]
  export function canSplit(doc: ProsemirrorNode, pos: number, depth?: { type: NodeType, attrs?: Object }[]): boolean
  export function canJoin(doc: ProsemirrorNode, pos: number): boolean
  export function joinPoint(doc: ProsemirrorNode, pos: number, dir?: number): number
  export function insertPoint(doc: ProsemirrorNode, pos: number, nodeType: NodeType, attrs?: Object): number

}