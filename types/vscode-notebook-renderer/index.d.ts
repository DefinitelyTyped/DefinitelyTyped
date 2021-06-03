// Type definitions for non-npm package vscode-notebook-renderer 1.57
// Project: https://github.com/microsoft/vscode-docs/blob/notebook/api/extension-guides/notebook.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import { VSCodeEvent } from './events';

/**
 * Information about a rendered cell.
 */
export interface CellInfo {
    /**
     * HTML element where the cell should be renderer.
     */
    readonly element: HTMLElement;

    /**
     * Mime type being rendered.
     */
    readonly mime: string;

    /**
     * The data as text. Note that a UTF-8 decoder is used is create
     * the string from the underlying bytes.
     */
    text(): string;

    /**
     * The data as object - parsed from JSON. Note that this will
     * throw an error when the underlying data is not a valid JSON string.
     */
    json(): any;

    /**
     * The data as bytes.
     */
    bytes(): Uint8Array;

    /**
     * The data as blob. The blob-type will be initialized the `mime`
     * of this object.
     */
    blob(): Blob;

    /**
     * cell metadata.
     */
    readonly metadata: unknown;
}

/**
 * Collection of APIs provided to your renderer.
 *
 * @template TState Type of the renderer specific state persisted in the webview.
 */
export interface RendererContext<TState> {
    /**
     * Sets renderer-specific state that is persisted in the webview.
     */
    setState(value: TState): void;

    /**
     * Gets any previously set renderer-specific state.
     * @see RendererContext.setState
     */
    getState(): TState | undefined;

    /**
     * Retrieve the API of another renderer.
     *
     * This allows the current renderer to extend another renderer.
     *
     * @param id Id of the renderer to retrieve. This is the `id` of the `notebookRenderer` contribution in
     * the target renderer's `package.json`.
     *
     * @return The API of the requested renderer. This is the object returned from its `activate` method. Returns
     * `undefined` if the requested renderer cannot be found.
     */
    getRenderer(id: string): Promise<RendererApi | undefined>;

    /**
     * Method that may be present if `requiresMessaging` is set to `true`
     * or `optional` in the renderer contribution point.
     *
     * Sends a message to a renderer listening via the `vscode.notebook.createRendererMessaging`
     * object in the extension host.
     */
    postMessage?(message: unknown): void;

    /**
     * Event that may be present if `requiresMessaging` is set to `true`
     * or `optional` in the renderer contribution point.
     *
     * Fires when a message is sent via the `vscode.notebook.createRendererMessaging`
     * object in the extension host.
     */
    onDidReceiveMessage?: VSCodeEvent<any>;
}

/**
 * API returned by your renderer. This is invoked by the editor to manage the lifecycle of rendered cells.
 */
export interface RendererApi {
    /**
     * Method called by the editor to render a cell.
     */
    renderCell(id: string, info: CellInfo): void;

    /**
     * Destroys a previously-rendered cell.
     *
     * @param id the of the cell being removed. If undefined, all cells are
     * being removed.
     */
    destroyCell?(id?: string): void;

    /**
     * Additional properties may be returned for others to consume in
     * {@link RendererContext.getRenderer}.
     */
    [key: string]: unknown;
}

/**
 * Describes the function that should be exported as `activate` from your
 * renderer entrypoint.
 *
 * @template TState Type of the renderer specific state persisted in the webview.
 */
export type ActivationFunction<TState = any> = (context: RendererContext<TState>) => RendererApi;
