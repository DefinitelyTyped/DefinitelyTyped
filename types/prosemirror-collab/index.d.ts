// Type definitions for prosemirror-collab 0.18
// Project: https://github.com/ProseMirror/prosemirror-collab
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'prosemirror-state'
import { EditorState } from 'prosemirror-state'
import { Step } from 'prosemirror-transform'
import { Transaction } from 'prosemirror-state'

declare module "prosemirror-collab" {
  export function collab(config?: { version?: number, clientID?: number }): Plugin
  export function receiveTransaction(state: EditorState, steps: Step[], clientIDs: number[]): Transaction
  export function sendableSteps(state: EditorState): { version: number, steps: Step[], clientID: number, origins: Transaction[] } | void
  export function getVersion(state: EditorState): number

}