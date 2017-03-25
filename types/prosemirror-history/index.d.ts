// Type definitions for prosemirror-history 0.18
// Project: https://github.com/ProseMirror/prosemirror-history
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'prosemirror-state'
import { EditorState } from 'prosemirror-state'
import { Transaction } from 'prosemirror-state'

declare module "prosemirror-history" {
  export function history(config?: { depth?: number, newGroupDelay: number, preserveItems?: boolean }): Plugin
  export function undo(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function redo(state: EditorState, dispatch?: (tr: Transaction) => void): boolean
  export function undoDepth(state: EditorState): number
  export function redoDepth(state: EditorState): number

}