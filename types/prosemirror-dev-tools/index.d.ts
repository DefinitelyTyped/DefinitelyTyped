// Type definitions for prosemirror-dev-tools 2.1
// Project: https://github.com/d4rkr00t/prosemirror-dev-tools#readme
// Definitions by: Ifiok Jr. <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export as namespace applyDevTools;

export interface ApplyDevToolsOptions {
    /**
     * From version 1.3.1 it's required for UMD build to provide EditorState
     * class (not instance).
     *
     * Previously it was causing different artifacts when working with state
     * e.g. rolling back to some history checkpoint or when restoring from
     * snapshot due to EditorState classes were different in UMD bundle and in
     * actual client code.
     */
    EditorState: typeof EditorState;
}

/**
 * Wraps the EditorView instance in the applyDevTools.
 */
declare function applyDevTools(view: EditorView, options?: ApplyDevToolsOptions): void;

export default applyDevTools;
