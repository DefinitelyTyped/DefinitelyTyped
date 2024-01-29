declare namespace OO.ui {
    /**
     * ButtonOptionWidget is a special type of {@link OO.ui.mixin.ButtonElement button element} that
     * can be selected and configured with data. The class is
     * used with OO.ui.ButtonSelectWidget to create a selection of button options. Please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Button_selects_and_options)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonOptionWidget
     */
    interface ButtonOptionWidget extends ButtonOptionWidget.Props, ButtonOptionWidget.Prototype {}

    namespace ButtonOptionWidget {
        interface EventMap extends OptionWidget.EventMap, mixin.ButtonElement.EventMap {}

        interface ConfigOptions
            extends
                OptionWidget.ConfigOptions,
                mixin.ButtonElement.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions
        {
            flags?: LiteralUnion<mixin.ButtonElement.Flag> | Array<LiteralUnion<mixin.ButtonElement.Flag>>;
        }

        interface Static
            extends
                OptionWidget.Static,
                mixin.ButtonElement.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static
        {}

        interface Props
            extends OptionWidget.Props, mixin.ButtonElement.Props, mixin.IconElement.Props, mixin.IndicatorElement.Props
        {}

        interface Prototype
            extends
                OptionWidget.Prototype,
                mixin.ButtonElement.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype
        {
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
            new(config?: ConfigOptions): ButtonOptionWidget;
            prototype: Prototype;
            static: Static;
            super: OptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: OptionWidget.Constructor;
        }
    }

    const ButtonOptionWidget: ButtonOptionWidget.Constructor;
}
