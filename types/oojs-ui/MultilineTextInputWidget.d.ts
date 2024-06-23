declare namespace OO.ui {
    /**
     * MultilineTextInputWidgets, like HTML textareas, are featuring customization options to
     * configure number of rows visible. In addition, these widgets can be autosized to fit user
     * inputs and can show {@link OO.ui.mixin.IconElement icons} and
     * {@link OO.ui.mixin.IndicatorElement indicators}.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs#MultilineTextInputWidget)
     * for more information and examples.
     *
     * This widget can be used inside an HTML form, such as a OO.ui.FormLayout.
     *
     *     // A MultilineTextInputWidget.
     *     var multilineTextInput = new OO.ui.MultilineTextInputWidget( {
     *         value: 'Text input on multiple lines'
     *     } );
     *     $( document.body ).append( multilineTextInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MultilineTextInputWidget
     */
    interface MultilineTextInputWidget extends MultilineTextInputWidget.Props, MultilineTextInputWidget.Prototype {}

    namespace MultilineTextInputWidget {
        interface EventMap extends TextInputWidget.EventMap {
            resize: [];
        }

        interface ConfigOptions extends TextInputWidget.ConfigOptions {
            /**
             * Number of visible lines in textarea. If used with `autosize`, specifies minimum
             * number of rows to display.
             */
            rows?: number;

            /**
             * Automatically resize the text input to fit its content. Use the {@link maxRows}
             * config to specify a maximum number of displayed rows.
             */
            autosize?: boolean;

            /**
             * Maximum number of rows to display when {@link autosize} is set to true.
             * Defaults to the maximum of `10` and `2 * rows`, or `10` if `rows` isn't provided.
             */
            maxRows?: number;
        }

        type Static = TextInputWidget.Static;

        type Props = TextInputWidget.Props;

        interface Prototype extends TextInputWidget.Prototype {
            /**
             * Automatically adjust the size of the text input.
             *
             * This only affects multiline inputs that are {@link ConfigOptions.autosize autosized}.
             *
             * @param force Force an update, even if the value hasn't changed
             * @return The widget, for chaining
             */
            adjustSize(force?: boolean): this;

            /**
             * Check if the input automatically adjusts its size.
             *
             * @return
             */
            isAutosizing(): boolean;

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
            new(config?: ConfigOptions): MultilineTextInputWidget;
            prototype: Prototype;
            static: Static;
            super: TextInputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TextInputWidget.Constructor;
        }
    }

    const MultilineTextInputWidget: MultilineTextInputWidget.Constructor;
}
