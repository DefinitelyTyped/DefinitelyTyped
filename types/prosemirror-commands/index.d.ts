// Type definitions for prosemirror-commands 0.18
// Project: https://github.com/ProseMirror/prosemirror-commands
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { EditorState } from 'prosemirror-state'
import { Transaction } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { NodeType } from 'prosemirror-model'
import { MarkType } from 'prosemirror-model'
import { ProsemirrorNode } from 'prosemirror-model'

declare module "prosemirror-commands" {
  export function deleteSelection(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function joinBackward(state: EditorState, dispatch?: (tr: Transaction) => void, view?: EditorView): boolean
  export function joinForward(state: EditorState, dispatch?: (tr: Transaction) => void, view?: EditorView): boolean
  export function joinUp(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function joinDown(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function lift(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function newlineInCode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function exitCode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function createParagraphNear(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function liftEmptyBlock(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function splitBlock(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function splitBlockKeepMarks(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function selectParentNode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function wrapIn(nodeType: NodeType, attrs?: Object): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean
  export function setBlockType(nodeType: NodeType, attrs?: Object): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean
  export function toggleMark(markType: MarkType, attrs?: Object): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean
  export function autoJoin(command: (state: EditorState, fn?: (tr: Transaction) => void) => boolean, isJoinable: ((before: ProsemirrorNode, after: ProsemirrorNode) => boolean) | string[]): (state: EditorState, fn?: (tr: Transaction) => void) => boolean
  export function chainCommands(...commands: ((p1: EditorState, fn?: (tr: Transaction) => void) => boolean)[]): (p1: EditorState, fn?: (tr: Transaction) => void) => boolean
  export let baseKeymap: Object;

}