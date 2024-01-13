declare namespace OO.ui {
    /**
     * SelectFileWidgets allow for selecting files, using the HTML5 File API. These
     * widgets can be configured with {@link OO.ui.mixin.IconElement icons}, {@link
     * OO.ui.mixin.IndicatorElement indicators} and {@link OO.ui.mixin.TitledElement titles}.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets)
     * for more information and examples.
     *
     * Although SelectFileWidget inherits from SelectFileInputWidget, it does not
     * behave as an InputWidget, and can't be used in HTML forms.
     *
     *     // A file select widget.
     *     var selectFile = new OO.ui.SelectFileWidget();
     *     $( document.body ).append( selectFile.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.SelectFileWidget
     */
    interface SelectFileWidget extends SelectFileWidget.Props, SelectFileWidget.Prototype {}

    namespace SelectFileWidget {
        // HACK: See SelectWidget.d.ts
        interface EventMap extends Widget.EventMap {
            change: [value: File | null];
        }

        interface ConfigOptions extends SelectFileInputWidget.ConfigOptions, mixin.PendingElement.ConfigOptions {
            /** Text to display when file support is missing in the browser. */
            notsupported?: string;
            /** Whether to accept files by drag and drop. */
            droppable?: boolean;
            /**
             * Show only the select file button, no info field. Requires {@link showDropTarget} to
             * be false.
             */
            buttonOnly?: boolean;
            /** Whether to show a drop target. Requires {@link droppable} to be true. */
            showDropTarget?: boolean;
            /** File size limit in MiB above which to not try and show a preview (for performance). */
            thumbnailSizeLimit?: number;
        }

        interface Static extends SelectFileInputWidget.Static {
            /**
             * Check if this widget is supported
             *
             * @return
             */
            isSupported(): boolean;
        }

        interface Props extends SelectFileInputWidget.Props, mixin.PendingElement.Props {}

        // HACK: Fix LSP violation
        interface Prototype extends
            Omit<
                SelectFileInputWidget.Prototype,
                "getValue" | "setValue" | "on" | "once" | "off" | "connect" | "disconnect"
            >,
            mixin.PendingElement.Prototype
        {
            /**
             * Get the current value of the field
             *
             * For single file widgets returns a File or null.
             * For multiple file widgets returns a list of Files.
             *
             * @return
             */
            getValue(): File | File[] | null;

            /**
             * Set the current value of the field
             *
             * @param files Files to select
             */
            setValue(files: File[] | null): void;

            /**
             * If the selected file is an image, get its URL and load it.
             *
             * @param file File
             * @return Promise resolves with the image URL after it has loaded
             */
            loadAndGetImageUrl(file: File): JQuery.Promise<string>;

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
            new(config?: ConfigOptions): SelectFileWidget;
            prototype: Prototype;
            static: Static;
            super: SelectFileInputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectFileInputWidget.Constructor;
        }
    }

    const SelectFileWidget: SelectFileWidget.Constructor;
}
