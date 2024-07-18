declare namespace OO.ui {
    /**
     * InputWidget is the base class for all input widgets, which
     * include {@link OO.ui.TextInputWidget text inputs},
     * {@link OO.ui.CheckboxInputWidget checkbox inputs}, {@link OO.ui.RadioInputWidget radio inputs},
     * and {@link OO.ui.ButtonInputWidget button inputs}.
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for more information and examples.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.InputWidget
     */
    interface InputWidget extends InputWidget.Props, InputWidget.Prototype {}

    namespace InputWidget {
        interface EventMap extends Widget.EventMap {
            change: [value: string];
        }

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.AccessKeyedElement.ConfigOptions
        {
            /** The value of the input’s HTML `name` attribute. */
            name?: string;
            /** The value of the input. */
            value?: string;
            /** The directionality of the input (ltr/rtl). */
            dir?: Direction;
            /** The value of the input’s HTML `id` attribute. */
            inputId?: string;
            /**
             * The name of an input filter function. Input filters modify the value of an input
             * before it is accepted.
             */
            inputFilter?: (value: string) => string;
        }

        interface Static extends Widget.Static, mixin.TitledElement.Static, mixin.AccessKeyedElement.Static {}

        interface Props
            extends
                Widget.Props,
                mixin.TabIndexedElement.Props,
                mixin.TitledElement.Props,
                mixin.AccessKeyedElement.Props
        {
            $input: JQuery;
        }

        interface Prototype
            extends
                Widget.Prototype,
                mixin.TabIndexedElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.AccessKeyedElement.Prototype
        {
            /**
             * Get the value of the input.
             *
             * @return Input value
             */
            getValue(): string;

            /**
             * Set the directionality of the input.
             *
             * @param dir Text directionality: 'ltr', 'rtl' or 'auto'
             * @return The widget, for chaining
             */
            setDir(dir: Direction | "auto"): this;

            /**
             * Set the value of the input.
             *
             * @param value New value
             * @return The widget, for chaining
             */
            setValue(value: string): this;

            /**
             * Set the 'id' attribute of the `<input>` element.
             *
             * @param id
             * @return The widget, for chaining
             */
            setInputId(id: string): this;

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
            new(config?: ConfigOptions): InputWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const InputWidget: InputWidget.Constructor;
}
