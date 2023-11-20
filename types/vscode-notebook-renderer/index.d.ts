import { VSCodeEvent } from "./events";

/**
 * Information about a rendered cell output.
 */
export interface OutputItem {
    /**
     * Unique id of the output item.
     */
    readonly id: string;

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
    data(): Uint8Array;

    /**
     * The data as blob. The blob-type will be initialized the `mime`
     * of this object.
     */
    blob(): Blob;

    /**
     * Output item metadata.
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
    onDidReceiveMessage?: VSCodeEvent<any> | undefined;

    /**
     * Information about the current workspace.
     */
    readonly workspace: {
        /**
         * When true, the user has explicitly trusted the contents of the workspace.
         */
        readonly isTrusted: boolean;
    };
}

/**
 * API returned by your renderer. This is invoked by the editor to manage the lifecycle of rendered output items.
 */
export interface RendererApi {
    /**
     * Called by the editor to render an output item.
     *
     * This is invoked by the editor when an output item is first rendered or when
     * the output item is updated.
     *
     * @param outputItem Output item to render.
     * @param element Html element to render into.
     * @param signal Fired if rendering has been canceled.
     *
     * @return If rendering is asynchronous, a promise that resolves when rendering has finished.
     */
    renderOutputItem(outputItem: OutputItem, element: HTMLElement, signal: AbortSignal): void | Promise<void>;

    /**
     * Called by the editor when a previously-rendered output item is being disposed of.
     *
     * Your renderer should implement this if you need to clean up anything that was registered
     * during `renderOutputItem`. This would include global event listeners or any HTML elements outside of the
     * output item's node.
     *
     * @param id The id of the item being removed. If `undefined`, all cells are being removed.
     */
    disposeOutputItem?(id?: string): void;

    /**
     * Optional additional methods and properties for other renderers to consume using
     * {@link RendererContext.getRenderer}.
     *
     * This lets your renderer expose hooks that other renderers can use to extend its behavior.
     */
    [key: string]: unknown;
}

/**
 * Describes the function that should be exported as `activate` from your
 * renderer entrypoint.
 *
 * @template TState Type of the renderer specific state persisted in the webview.
 */
export interface ActivationFunction<TState = any> {
    /**
     * @param context Collection of APIs provided to your renderer.
     *
     * @return The renderer for your API or undefined if your renderer extends another and will not be called directly.
     */
    (context: RendererContext<TState>): Promise<RendererApi | undefined> | RendererApi | undefined;
}
