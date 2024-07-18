declare namespace OO.ui {
    /**
     * Window managers are used to open and close {@link OO.ui.Window windows} and control their
     * presentation. Managed windows are mutually exclusive. If a new window is opened while a current
     * window is opening or is opened, the current window will be closed and any on-going
     * {@link OO.ui.Process process} will be cancelled. Windows
     * themselves are persistent and—rather than being torn down when closed—can be repopulated with the
     * pertinent data and reused.
     *
     * Over the lifecycle of a window, the window manager makes available three promises: `opening`,
     * `opened`, and `closing`, which represent the primary stages of the cycle:
     *
     * **Opening**: the opening stage begins when the window manager’s {@link openWindow} or a window’s
     * {@link OO.ui.Window.open open} method is used, and the window manager begins to open the window.
     *
     * - an `opening` event is emitted with an `opening` promise
     * - the {@link getSetupDelay} method is called and the returned value is used to time a pause in execution
     *   before the window’s {@link OO.ui.Window.setup setup} method is called which executes
     *   {@link OO.ui.Window.getSetupProcess}.
     * - a `setup` progress notification is emitted from the `opening` promise
     * - the {@link getReadyDelay} method is called the returned value is used to time a pause in execution
     *   before the window’s {@link OO.ui.Window.ready ready} method is called which executes
     *   {@link OO.ui.Window.getReadyProcess}.
     * - a `ready` progress notification is emitted from the `opening` promise
     * - the `opening` promise is resolved with an `opened` promise
     *
     * **Opened**: the window is now open.
     *
     * **Closing**: the closing stage begins when the window manager's {@link closeWindow} or the
     * window's {@link OO.ui.Window.close close} methods is used, and the window manager begins
     * to close the window.
     *
     * - the `opened` promise is resolved with `closing` promise and a `closing` event is emitted
     * - the {@link getHoldDelay} method is called and the returned value is used to time a pause in execution
     *   before the window's {@link OO.ui.Window.getHoldProcess getHoldProcess} method is called on the
     *   window and its result executed
     * - a `hold` progress notification is emitted from the `closing` promise
     * - the {@link getTeardownDelay}() method is called and the returned value is used to time a pause in
     *   execution before the window's {@link OO.ui.Window.getTeardownProcess getTeardownProcess} method
     *   is called on the window and its result executed
     * - a `teardown` progress notification is emitted from the `closing` promise
     * - the `closing` promise is resolved. The window is now closed
     *
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Window_managers) for more information.
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.WindowManager
     */
    interface WindowManager extends WindowManager.Props, WindowManager.Prototype {}

    namespace WindowManager {
        interface WindowOpeningState {
            state: "setup" | "ready";
        }

        interface WindowClosingState {
            state: "hold" | "teardown";
        }

        interface WindowOpeningData {
            /**
             * Element to which the window will return focus when closed. Defaults the current
             * activeElement. If set to null, focus isn't changed on close.
             */
            $returnFocusTo?: JQuery | null;

            [x: string]: any;
        }

        interface EventMap {
            opening: [
                win: Window,
                opened: JQuery.Promise2<
                    JQuery.Promise<void>,
                    undefined | Error,
                    WindowOpeningState,
                    unknown,
                    never,
                    never
                >,
                data: unknown,
            ];
            closing: [win: Window, closed: JQuery.Promise<unknown, Error, WindowClosingState>, data: unknown];
            resize: [win: Window];
        }

        interface ConfigOptions extends Element.ConfigOptions {
            /**
             * Window factory to use for automatic instantiation
             * Note that window classes that are instantiated with a factory must have a
             * {@link Dialog.Static.name static name} property that specifies a symbolic name.
             */
            factory?: Factory;

            /**
             * Prevent interaction outside the current window
             */
            modal?: boolean;

            /**
             * Force the trapping of focus within windows. This is done automatically for modal
             * window managers and full screen windows.
             */
            forceTrapFocus?: boolean;
        }

        interface Static extends Element.Static {
            /**
             * Map of the symbolic name of each window size and its CSS properties.
             */
            sizes: Record<string, Window.Dimension>;

            /**
             * Symbolic name of the default window size.
             *
             * The default size is used if the window's requested size is not recognized.
             */
            defaultSize: string;
        }

        interface Props extends Element.Props {
            $returnFocusTo: JQuery | null;

            $ariaHidden: JQuery | null;

            $inert: JQuery | null;
        }

        interface Prototype extends Element.Prototype, EventEmitter {
            /**
             * Check if the window manager is modal, preventing interaction outside the current
             * window
             *
             * @return The window manager is modal
             */
            isModal(): boolean;

            /**
             * Check if window is opening.
             *
             * @param win Window to check
             * @return Window is opening
             */
            isOpening(win: Window): boolean;

            /**
             * Check if window is closing.
             *
             * @param win Window to check
             * @return Window is closing
             */
            isClosing(win: Window): boolean;

            /**
             * Check if window is opened.
             *
             * @param win Window to check
             * @return Window is opened
             */
            isOpened(win: Window): boolean;

            /**
             * Check if a window is being managed.
             *
             * @param win Window to check
             * @return Window is being managed
             */
            hasWindow(win: Window): boolean;

            /**
             * Get the number of milliseconds to wait after opening begins before executing the
             * ‘setup’ process.
             *
             * @param win Window being opened
             * @param data Window opening data
             * @return Milliseconds to wait
             */
            getSetupDelay(win: Window, data?: any): number;

            /**
             * Get the number of milliseconds to wait after setup has finished before executing the
             * ‘ready’ process.
             *
             * @param win Window being opened
             * @param data Window opening data
             * @return Milliseconds to wait
             */
            getReadyDelay(win: Window, data?: any): number;

            /**
             * Get the number of milliseconds to wait after closing has begun before executing the
             * 'hold' process.
             *
             * @param win Window being closed
             * @param data Window closing data
             * @return Milliseconds to wait
             */
            getHoldDelay(win: Window, data?: any): number;

            /**
             * Get the number of milliseconds to wait after the ‘hold’ process has finished before
             * executing the ‘teardown’ process.
             *
             * @param win Window being closed
             * @param data Window closing data
             * @return Milliseconds to wait
             */
            getTeardownDelay(win: Window, data?: any): number;

            /**
             * Get a window by its symbolic name.
             *
             * If the window is not yet instantiated and its symbolic name is recognized by a
             * factory, it will be instantiated and added to the window manager automatically.
             * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Window_managers)
             * for more information about using factories.
             *
             * @param name Symbolic name of the window
             * @return Promise resolved with matching window, or rejected with an OO.ui.Error
             * @throws {Error} An error is thrown if the symbolic name is not recognized by the
             *  factory.
             * @throws {Error} An error is thrown if the named window is not recognized as a managed
             *  window.
             */
            getWindow(name: string): JQuery.Promise<Window, Error>;

            /**
             * Get current window.
             *
             * @return Currently opening/opened/closing window
             */
            getCurrentWindow(): Window | null;

            /**
             * Open a window.
             *
             * @param win Window object or symbolic name of window to open
             * @param data Window opening data
             * @return A lifecycle object representing this particular
             *  opening of the window. For backwards-compatibility, then object is also a Thenable
             *  that is resolved when the window is done opening, with nested promise for when
             *  closing starts. This behaviour is deprecated and is not compatible with jQuery 3,
             *  see T163510.
             */
            openWindow(
                win: Window | string,
                data?: WindowOpeningData,
            ): WindowInstance & DeprecatedPromise<JQuery.Promise<void>, undefined | Error, WindowOpeningState, unknown>;
            openWindow<T>(
                win: Window | string,
                data?: T extends object ? never : T,
            ): WindowInstance & DeprecatedPromise<JQuery.Promise<void>, undefined | Error, WindowOpeningState, unknown>;

            /**
             * Close a window.
             *
             * @param win Window object or symbolic name of window to close
             * @param data Window closing data
             * @return A lifecycle object representing this particular
             *  opening of the window. For backwards-compatibility, the object is also a Thenable
             *  that is resolved when the window is done closing, see T163510.
             */
            closeWindow(
                win: Window | string,
                data?: any,
            ): WindowInstance & DeprecatedPromise<unknown, Error, WindowClosingState>;

            /**
             * Add windows to the window manager.
             *
             * Windows can be added by reference, symbolic name, or explicitly defined symbolic names.
             * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Window_managers)
             * for examples.
             *
             * This function can be called in two manners:
             *
             * 1. `.addWindows( [ winA, winB, ... ] )` (where `winA`, `winB` are OO.ui.Window objects)
             *
             *    This syntax registers windows under the symbolic names defined in their `.static.name`
             *    properties. For example, if `windowA.constructor.static.name` is `'nameA'`, calling
             *    `.openWindow( 'nameA' )` afterwards will open the window `windowA`. This syntax requires the
             *    static name to be set, otherwise an exception will be thrown.
             *
             *    This is the recommended way, as it allows for an easier switch to using a window factory.
             *
             * 2. `.addWindows( { nameA: winA, nameB: winB, ... } )`
             *
             *    This syntax registers windows under the explicitly given symbolic names. In this example,
             *    calling `.openWindow( 'nameA' )` afterwards will open the window `windowA`, regardless of what
             *    its `.static.name` is set to. The static name is not required to be set.
             *
             *    This should only be used if you need to override the default symbolic names.
             *
             * Example:
             *
             *     var windowManager = new OO.ui.WindowManager();
             *     $( document.body ).append( windowManager.$element );
             *
             *     // Add a window under the default name: see OO.ui.MessageDialog.static.name
             *     windowManager.addWindows( [ new OO.ui.MessageDialog() ] );
             *     // Add a window under an explicit name
             *     windowManager.addWindows( { myMessageDialog: new OO.ui.MessageDialog() } );
             *
             *     // Open window by default name
             *     windowManager.openWindow( 'message' );
             *     // Open window by explicitly given name
             *     windowManager.openWindow( 'myMessageDialog' );
             *
             * @param windows An array of window objects specified
             *  by reference, symbolic name, or explicitly defined symbolic names.
             * @throws {Error} An error is thrown if a window is added by symbolic name, but has neither an
             *  explicit nor a statically configured symbolic name.
             */
            addWindows(windows: Window[] | Record<string, Window>): void;

            /**
             * Remove the specified windows from the windows manager.
             *
             * Windows will be closed before they are removed. If you wish to remove all windows, you may wish
             * to use the {@link clearWindows} method instead. If you no longer need the window manager and want to
             * ensure that it no longer listens to events, use the {@link destroy} method.
             *
             * @param names Symbolic names of windows to remove
             * @return Promise resolved when window is closed and removed
             * @throws {Error} An error is thrown if the named windows are not managed by the window manager.
             */
            removeWindows(names: string[]): JQuery.Promise<void>;

            /**
             * Remove all windows from the window manager.
             *
             * Windows will be closed before they are removed. Note that the window manager, though not in use,
             * will still listen to events. If the window manager will not be used again, you may wish to use
             * the {@link destroy} method instead. To remove just a subset of windows, use the {@link removeWindows} method.
             *
             * @return Promise resolved when all windows are closed and removed
             */
            clearWindows(): JQuery.Promise<void>;

            /**
             * Set dialog size. In general, this method should not be called directly.
             *
             * Fullscreen mode will be used if the dialog is too wide to fit in the screen.
             *
             * @param win Window to update, should be the current window
             * @return The manager, for chaining
             */
            updateWindowSize(win: Window): this;

            /**
             * Destroy the window manager.
             */
            destroy(): void;

            // #region EventEmitter overloads
            on<K extends keyof EventMap, A extends ArgTuple = [], C = null>(
                event: K,
                method: EventHandler<C, (this: C, ...args: [...A, ...EventMap[K]]) => void>,
                args?: A,
                context?: C,
            ): this;
            on<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method: EventHandler<C>,
                args?: any[],
                context?: C,
            ): this;

            once<K extends keyof EventMap>(event: K, listener: (this: null, ...args: EventMap[K]) => void): this;
            once<K extends string>(
                event: K extends keyof EventMap ? never : K,
                listener: (this: null, ...args: any[]) => void,
            ): this;

            off<K extends keyof EventMap, C = null>(
                event: K,
                method?: EventHandler<C, (this: C, ...args: EventMap[K]) => void>,
                context?: C,
            ): this;
            off<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method?: EventHandler<C>,
                context?: C,
            ): this;

            emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emit<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            emitThrow<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emitThrow<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            connect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods: EventConnectionMap<T, C, EventMap>,
            ): this;

            disconnect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods?: EventConnectionMap<T, C, EventMap>,
            ): this;
            // #endregion
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): WindowManager;
            prototype: Prototype;
            static: Static;
            super: Element.Constructor;
            /** @deprecated Use `super` instead */
            parent: Element.Constructor;
        }
    }

    const WindowManager: WindowManager.Constructor;
}
