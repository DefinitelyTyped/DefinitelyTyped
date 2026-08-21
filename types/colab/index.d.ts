declare global {
    namespace google.colab {
        namespace kernel {
            /**
             * Request that a registered method be invoked on the kernel.
             * The method must have been registered via Python using
             * `google.colab.output.register_callback`.
             *
             * @param functionName The name of the function registered on the kernel.
             * @param args Array of args passed as the Python *args argument.
             * @param kwargs Object of args passed as the Python **kwargs argument.
             */
            function invokeFunction(
                // tslint:disable-next-line:no-any intentionally allow any params.
                functionName: string,
                args?: any[],
                // tslint:disable-next-line:no-any intentionally allow any params.
                kwargs?: { [key: string]: any },
            ): Promise<unknown>;

            /**
             * Requests that the client start proxying content from the kernel's port
             * `port` to be available from the user's browser. This returns a URL which
             * can be used to access data on that port.
             *
             * @param port The TCP port number to be made available to the notebook
             *     viewer. Must be accessible as http://localhost:{port}.
             * @param cache True if the contents of HTTP GET requests should be cached in
             *     the notebook for offline viewing.
             * @return A promise resolved with a URL which can be used by the current
             *     viewer of the notebook to access the port. This URL is only valid for
             *     the current viewer while this notebook is open.
             */
            function proxyPort(port: number, { cache }?: { cache?: boolean }): Promise<string>;

            /**
             * True if this is a trusted output and can communicate with the kernel.
             * Trusted outputs are outputs which were generated in the current browser
             * session.
             */
            const accessAllowed: boolean;

            /**
             * APIs for leveraging Jupyter Comm channels within Colaboratory.
             * For more information about comm channels see:
             * https://jupyter-notebook.readthedocs.io/en/v6.5.0/comms.html
             */
            namespace comms {
                /** Placeholder for any JSON serializable type. */
                // tslint:disable-next-line:no-any
                type JsonType = any;

                interface Message {
                    /** The JSON structured data of the message. */
                    readonly data: JsonType;
                    /** Optional binary buffers transferred with the message. */
                    readonly buffers?: ArrayBuffer[];
                }

                interface Comm {
                    /**
                     * Send a comm message to the kernel.
                     * @param data The message data to be sent.
                     * @param opts Any binary buffers to be included in the message.
                     * @return Promise which will be resolved when the kernel successfully
                     *     receives the comm message.
                     */
                    send(data: JsonType, opts?: { buffers?: ArrayBuffer[] }): Promise<void>;
                    /**
                     * Closes the comm channel and notifies the kernel that the channel
                     * is closed.
                     */
                    close(): void;
                    /**
                     * An async iterator of the incoming messages from the kernel.
                     * The iterator will end when the comm channel is closed.
                     */
                    readonly messages: AsyncIterable<Message>;
                }

                /**
                 * Open a new comm channel to the kernel.
                 *
                 * The kernel should have registered a handler following the documentation
                 * at
                 * https://jupyter-notebook.readthedocs.io/en/v6.5.0/comms.html#opening-a-comm-from-the-frontend.
                 *
                 * @param targetName The name of the channel registered on the kernel.
                 * @param data Any data to be sent with the open message.
                 * @param buffers Any binary data to be sent with the open message.
                 * @return The established comm channel.
                 */
                function open(targetName: string, data?: JsonType, buffers?: ArrayBuffer[]): Promise<Comm>;

                /**
                 * Listen comm channels opened by the kernel.
                 *
                 * See
                 * https://jupyter-notebook.readthedocs.io/en/v6.5.0/comms.html#opening-a-comm-from-the-kernel.
                 *
                 * @param targetName The name used by the kernel to open a new comm channel.
                 * @param callback Function invoked with any new comm channels.
                 */
                function registerTarget(targetName: string, callback: (comm: Comm) => void): void;
            }
        }

        namespace output {
            /**
             * Returns the current element which outputs go to for this outputframe.
             * Unlike @getDefaultOutputArea when outputs are redirected to another element
             * then this will return that redirected element.
             */
            function getActiveOutputArea(): Element;

            /**
             * Returns the default element which outputs go to for this outputframe.
             */
            function getDefaultOutputArea(): Element;

            /**
             * Pause processing of additional outputs until the provided promise has been
             * resolved. This is used when asynchronous initialization must be performed.
             *
             * When outputs are initially being rendered then automatic resizing of the
             * outputframe will be paused until this promise is resolved. This can be used
             * to reduce layout jank while rendering complex outputs.
             */
            function pauseOutputUntil(promise: Promise<unknown>): void;

            interface ResizeOptions {
                /** The maximum height that the outputframe is allowed to have. */
                maxHeight?: number;

                interactive?: boolean;
            }

            /**
             * Request that the outputframe get resized to the specified height.
             * @param height The height in pixels that the iframe height should be set to.
             * @param autoResize False if automatic resizing should be disabled.
             */
            function setIframeHeight(height: number, autoResize?: boolean, options?: ResizeOptions): void;

            /**
             * Request that the outputframe get resized to the content height.
             * Outputs should now be using the browser's ResizeObserver so this should
             * now happen automatically.
             */
            function resizeIframeToContent(): void;
        }

        namespace widgets {
            /**
             * @param url URL to an ES6 module exporting a WidgetManagerModule API.
             * @param args custom arguments to `createWidgetManager`.
             */
            // tslint:disable-next-line:no-any
            function installCustomManager(url: string, args: any): void;
        }

        /**
         * The interface a custom widget manager ES6 module is expected to
         * implement.
         *
         * In plain code this means that the module would a method such as:
         *
         * ```
         *    function createWidgetManager(environment: WidgetEnvironment) {
         *       ...
         *    }
         * ```
         */
        interface WidgetManagerModule {
            createWidgetManager(state: WidgetEnvironment, arguments?: unknown): WidgetManager;
        }

        /**
         * The host API of the widget manager.
         */
        interface WidgetEnvironment {
            /**
             * @param modelId The ID of the model for which the model state is desired.
             */
            getModelState(modelId: string): Promise<ModelState | undefined>;
        }

        /** Custom widget manager. */
        interface WidgetManager {
            /**
             * Render the model specified by modelId into the container element.
             */
            render(modelId: string, container: Element): Promise<void>;
        }

        /** Per-model state. */
        interface ModelState {
            modelName: string;
            modelModule: string;
            modelModuleVersion?: string;

            state: { [key: string]: unknown };
            /**
             * If connected to a kernel then this is the comm channel to the kernel.
             * This will only be set if currently connected to a kernel.
             */
            comm?: kernel.comms.Comm;
        }
    }
}

// tells TypeScript that this is a module, which enables `declare global`
export {};
