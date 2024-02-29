declare namespace OO.ui {
    /**
     * ToggleButtons are buttons that have a state (‘on’ or ‘off’) that is represented by a
     * Boolean value. Like other {@link OO.ui.ButtonWidget buttons}, toggle buttons can be
     * configured with {@link OO.ui.mixin.IconElement icons},
     * {@link OO.ui.mixin.IndicatorElement indicators},
     * {@link OO.ui.mixin.TitledElement titles}, {@link OO.ui.mixin.FlaggedElement styling flags},
     * and {@link OO.ui.mixin.LabelElement labels}. Please see
     * the [OOUI documentation](https://www.mediawiki.org/wiki/OOUI/Widgets/Buttons_and_Switches#Toggle_buttons)
     * on MediaWiki for more information.
     *
     *     // Toggle buttons in the 'off' and 'on' state.
     *     var toggleButton1 = new OO.ui.ToggleButtonWidget( {
     *             label: 'Toggle Button off'
     *         } ),
     *         toggleButton2 = new OO.ui.ToggleButtonWidget( {
     *             label: 'Toggle Button on',
     *             value: true
     *         } );
     *     // Append the buttons to the DOM.
     *     $( document.body ).append( toggleButton1.$element, toggleButton2.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToggleButtonWidget
     */
    interface ToggleButtonWidget extends ToggleButtonWidget.Props, ToggleButtonWidget.Prototype {}

    namespace ToggleButtonWidget {
        interface EventMap
            extends
                ToggleWidget.EventMap,
                mixin.ButtonElement.EventMap,
                mixin.LabelElement.EventMap,
                mixin.FlaggedElement.EventMap
        {}

        interface ConfigOptions
            extends
                ToggleWidget.ConfigOptions,
                mixin.ButtonElement.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions
        {
            flags?: LiteralUnion<mixin.ButtonElement.Flag> | Array<LiteralUnion<mixin.ButtonElement.Flag>>;
        }

        interface Static
            extends
                ToggleWidget.Static,
                mixin.ButtonElement.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.FlaggedElement.Static
        {}

        interface Props
            extends
                ToggleWidget.Props,
                mixin.ButtonElement.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props,
                mixin.TabIndexedElement.Props
        {}

        interface Prototype
            extends
                ToggleWidget.Prototype,
                mixin.ButtonElement.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.TabIndexedElement.Prototype
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
            new(config?: ConfigOptions): ToggleButtonWidget;
            prototype: Prototype;
            static: Static;
            super: ToggleWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: ToggleWidget.Constructor;
        }
    }

    const ToggleButtonWidget: ToggleButtonWidget.Constructor;
}
