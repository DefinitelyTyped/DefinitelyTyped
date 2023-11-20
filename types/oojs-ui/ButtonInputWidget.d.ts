declare namespace OO.ui {
    /**
     * ButtonInputWidget is used to submit HTML forms and is intended to be used within
     * a OO.ui.FormLayout. If you do not need the button to work with HTML forms, you probably
     * want to use OO.ui.ButtonWidget instead. Button input widgets can be rendered as either an
     * HTML `<button>` (the default) or an HTML `<input>` tags. See the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs#Button_inputs)
     * for more information.
     *
     *     // A ButtonInputWidget rendered as an HTML button, the default.
     *     var button = new OO.ui.ButtonInputWidget( {
     *         label: 'Input button',
     *         icon: 'check',
     *         value: 'check'
     *     } );
     *     $( document.body ).append( button.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonInputWidget
     */
    interface ButtonInputWidget extends ButtonInputWidget.Props, ButtonInputWidget.Prototype {}

    namespace ButtonInputWidget {
        interface EventMap
            extends
                InputWidget.EventMap,
                mixin.ButtonElement.EventMap,
                mixin.LabelElement.EventMap,
                mixin.FlaggedElement.EventMap
        {}

        interface ConfigOptions
            extends
                InputWidget.ConfigOptions,
                mixin.ButtonElement.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions
        {
            /** The value of the HTML `'type'` attribute: 'button', 'submit' or 'reset'. */
            type?: "button" | "submit" | "reset";

            /**
             * Use an `<input>` tag instead of a `<button>` tag, the default.
             * Widgets configured to be an `<input>` do not support {@link icon icons} and
             * {@link indicator indicators},
             * non-plaintext {@link label labels}, or {@link value values}. In general,
             * useInputTag should only be set to `true` when there’s need to support IE 6 in a form
             * with multiple buttons.
             */
            useInputTag?: boolean;

            flags?: LiteralUnion<mixin.ButtonElement.Flag> | Array<LiteralUnion<mixin.ButtonElement.Flag>>;
        }

        interface Static
            extends
                InputWidget.Static,
                mixin.ButtonElement.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.FlaggedElement.Static
        {}

        interface Props
            extends
                InputWidget.Props,
                mixin.ButtonElement.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props
        {}

        interface Prototype
            extends
                InputWidget.Prototype,
                mixin.ButtonElement.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype
        {
            /**
             * Set label value.
             *
             * If {@link ConfigOptions.useInputTag useInputTag} is `true`, the label is set as the
             * `value` of the `<input>` tag.
             *
             * @param label Label nodes, text, a function that returns nodes or text, or `null` for
             *  no label
             * @return The widget, for chaining
             */
            setLabel(label: Deferrable<string | JQuery> | null): this;

            /**
             * Set the value of the input.
             *
             * This method is disabled for button inputs configured as
             * {@link ConfigOptions.useInputTag &lt;input&gt; tags}, as they do not support
             * {@link ConfigOptions.value values}.
             *
             * @param value New value
             * @return The widget, for chaining
             */
            setValue(value: string): this;

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
            new(config?: ConfigOptions): ButtonInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const ButtonInputWidget: ButtonInputWidget.Constructor;
}
