// Type definitions for prosemirror-dev-tools 3.0
// Project: https://github.com/d4rkr00t/prosemirror-dev-tools#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EditorView } from 'prosemirror-view';

export interface ApplyDevToolsOptions {
    diffWorker?: Worker;
}

/**
 * Wraps the EditorView instance in the applyDevTools.
 */
export default function applyDevTools(view: EditorView, options?: ApplyDevToolsOptions): void;
