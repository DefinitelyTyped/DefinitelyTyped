// Type definitions for non-npm package vscode-notebook-renderer 1.57
// Project: https://github.com/microsoft/vscode-docs/blob/notebook/api/extension-guides/notebook.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import { VSCodeEvent } from './events';

export * from './events';

/**
 * Notebook output event -- a supertype of the `NotebookCellOutputItem` in the VS Code types.
 */
export interface NotebookOutputEventParams  {
    readonly element: HTMLElement;
    readonly outputId: string;

    readonly mime: string;
    readonly value: any;
    readonly metadata?: Record<string, any>;
}

export interface NotebookRendererApi<T> {
    setState(value: T): void;
    getState(): T | undefined;
    /**
     * Fired before an output is destroyed, with its output ID, or undefined if
     * all cells are about to unmount.
     */
    onWillDestroyOutput: VSCodeEvent<{ outputId: string } | undefined>;

    /**
     * Fired when an output is rendered. The `outputId` provided is the same
     * as the one given in `NotebookOutputRenderer.render` in the extension
     * API, and `onWillDestroyOutput`.
     */
    onDidCreateOutput: VSCodeEvent<NotebookOutputEventParams>;
}

declare global {
    function acquireNotebookRendererApi(): NotebookRendererApi<any>;
}
