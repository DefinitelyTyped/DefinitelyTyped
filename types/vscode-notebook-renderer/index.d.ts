// Type definitions for non-npm package vscode-notebook-renderer 1.48
// Project: https://github.com/microsoft/vscode-docs/blob/notebook/api/extension-guides/notebook.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

// todo: update "Project" link above to docs site, once it becomes available

export interface Disposable {
    dispose(): void;
}

export interface VSCodeEvent<T> {
    (listener: (e: T) => any, thisArgs?: any, disposables?: Disposable[]): Disposable;
}

export interface NotebookOutputEventParams  {
    element: HTMLElement;
    outputId: string;
    output: NotebookOutput;
    mimeType: string;
}

/**
 * Notebook output data -- corresponds to the `CellDisplayOutput` in the VS Code types.
 */
export interface NotebookOutput {
    data: { [mimeType: string]: any };
    metadata?: NotebookCellOutputMetadata;
}

export interface NotebookCellOutputMetadata {
    /**
     * Additional attributes of a cell metadata.
     */
    custom?: { [key: string]: any; };
}

export interface NotebookRendererApi<T> {
    setState(value: T): void;
    getState(): T | undefined;

    /**
     * Sends a message to the renderer extension code. Can be received in
     * the `onDidReceiveMessage` event in `NotebookCommunication`.
     */
    postMessage(msg: unknown): void;

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

    /**
     * Called when the renderer uses `postMessage` on the NotebookCommunication
     * instance for this renderer.
     */
    onDidReceiveMessage: VSCodeEvent<any>;
}

declare global {
    function acquireNotebookRendererApi(rendererId: string): NotebookRendererApi<any>;
}
