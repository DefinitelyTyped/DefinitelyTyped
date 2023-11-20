import { EditorView } from "prosemirror-view";

export interface ApplyDevToolsOptions {
    diffWorker?: Worker | undefined;
}

/**
 * Wraps the EditorView instance in the applyDevTools.
 */
export default function applyDevTools(view: EditorView, options?: ApplyDevToolsOptions): void;
