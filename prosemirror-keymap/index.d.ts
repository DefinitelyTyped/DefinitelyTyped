// Type definitions for prosemirror-keymap 0.18
// Project: https://github.com/ProseMirror/prosemirror-keymap
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

declare module "prosemirror-keymap" {
  export function keymap(bindings: Object): Plugin
  export function keydownHandler(bindings: Object): (view: EditorView, event: Event) => boolean

}