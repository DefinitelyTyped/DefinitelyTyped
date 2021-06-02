// Type definitions for non-npm package vscode-notebook-renderer 1.57
// Project: https://github.com/microsoft/vscode-docs/blob/notebook/api/extension-guides/notebook.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import { VSCodeEvent } from './events';

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
     * The data as text. Note the a UTF-8 decoder is used is create
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

export interface RendererContext<T> {
    /**
     * Sets renderer-specific state that is persisted in the webview.
     */
    setState(value: T): void;

    /**
     * Gets any previously set renderer-specific state.
     * @see RendererContext.setState
     */
    getState(): T | undefined;

    /**
     * Gets the return value of an already activated renderer. It returns
     * undefined if the specified renderer is not available or has not been
     * activated yet.
     */
    getRenderer(id: string): RendererApi | undefined;

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

export interface RendererApi {
    /**
     * Method called by the editor to render a cell.
     */
    renderCell(id: string, info: CellInfo): void;

    /**
     * Destroys a previously-rendered cell.
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
 * Describes the function that should be exported as "activate" from your
 * renderer entrypoint.
 */
export type ActivationFunction<TState = any> = (context: RendererContext<TState>) => RendererApi;
