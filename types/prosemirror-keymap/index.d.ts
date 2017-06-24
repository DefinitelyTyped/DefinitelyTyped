// Type definitions for prosemirror-keymap 0.21
// Project: https://github.com/ProseMirror/prosemirror-keymap
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export interface Bindings {
    [key: string]: any;
}

export function keymap<T>(bindings: Bindings): Plugin<T>;
export function keydownHandler(bindings: Bindings): (view: EditorView, event: Event) => boolean;
