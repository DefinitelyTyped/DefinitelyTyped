// Type definitions for prosemirror-state 0.18
// Project: https://github.com/ProseMirror/prosemirror-state
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EditorProps } from 'prosemirror-view'
import { EditorView } from 'prosemirror-view'
import { ResolvedPos } from 'prosemirror-model'
import { ProsemirrorNode } from 'prosemirror-model'
import { Mappable } from 'prosemirror-transform'
import { Mark } from 'prosemirror-model'
import { Schema } from 'prosemirror-model'
import { Transform } from 'prosemirror-transform'
import { Slice } from 'prosemirror-model'
import { MarkType } from 'prosemirror-model'

declare module "prosemirror-state" {
  export type PluginSpec = { props?: EditorProps, state?: StateField<any>, key?: PluginKey, view?(p: EditorView): { update?(view: EditorView, prevState: EditorState): void, destroy?(): void }, filterTransaction?(p1: Transaction, p2: EditorState): boolean, appendTransaction?(transactions: Transaction[], oldState: EditorState, newState: EditorState): Transaction };
  export class Plugin {
    constructor(spec: PluginSpec)
    props: EditorProps;
    spec: Object;
    getState(state: EditorState): any

  }
  export interface StateField<T> {
    init(config: Object, instance: EditorState): T
    apply(tr: Transaction, value: T, oldState: EditorState, newState: EditorState): T
    toJSON?(value: T): any
    fromJSON?(config: Object, value: any, state: EditorState): T

  }
  export class PluginKey {
    constructor(name?: string)
    get(state: EditorState): Plugin
    getState(state: EditorState): any

  }
  export class Selection {
    from: number;
    to: number;
    $from: ResolvedPos;
    $to: ResolvedPos;
    empty: boolean;
    eq(other: Selection): boolean
    map(doc: ProsemirrorNode, mapping: Mappable): Selection
    toJSON(): Object
    static findFrom($pos: ResolvedPos, dir: number, textOnly?: boolean): Selection
    static near($pos: ResolvedPos, bias?: number, textOnly?: boolean): Selection
    static atStart(doc: ProsemirrorNode, textOnly?: boolean): Selection
    static atEnd(doc: ProsemirrorNode, textOnly?: boolean): Selection
    static between($anchor: ResolvedPos, $head: ResolvedPos, bias?: number): Selection
    static fromJSON(doc: ProsemirrorNode, json: Object): Selection

  }
  export class TextSelection extends Selection {
    constructor($anchor: ResolvedPos, $head?: ResolvedPos)
    anchor: number;
    head: number;
    $anchor: ResolvedPos;
    $head: ResolvedPos;
    static create(doc: ProsemirrorNode, anchor: number, head?: number): TextSelection

  }
  export class NodeSelection extends Selection {
    constructor($from: ResolvedPos)
    node: ProsemirrorNode;
    static create(doc: ProsemirrorNode, from: number, p1?: number): TextSelection
    static isSelectable(node: ProsemirrorNode): boolean

  }
  export class EditorState {
    doc: ProsemirrorNode;
    selection: Selection;
    storedMarks?: Mark[];
    schema: Schema;
    plugins: Plugin[];
    apply(tr: Transaction): EditorState
    applyTransaction(tr: Transaction): { state: EditorState, transactions: Transaction[] }
    tr: Transaction;
    reconfigure(config: Object): EditorState
    toJSON(pluginFields?: Object): Object
    static create(config: Object): EditorState
    static fromJSON(config: Object, json: Object, pluginFields?: Object): EditorState

  }
  export class Transaction extends Transform {
    time: number;
    storedMarks?: Mark[];
    selection: Selection;
    setSelection(selection: Selection): Transaction
    selectionSet: boolean;
    setStoredMarks(marks?: Mark[]): Transaction
    storedMarksSet: boolean;
    setTime(time: number): Transaction
    replaceSelection(slice: Slice): Transaction
    replaceSelectionWith(node: ProsemirrorNode, inheritMarks?: boolean): Transaction
    deleteSelection(): Transaction
    insertText(text: string, from?: number, to?: number): Transaction
    setMeta(key: string | Plugin | PluginKey, value: any): Transaction
    getMeta(key: string | Plugin | PluginKey): any
    isGeneric: boolean;
    scrollIntoView(): Transaction
    addStoredMark(mark: Mark): Transaction
    removeStoredMark(mark: Mark | MarkType): Transaction

  }

}