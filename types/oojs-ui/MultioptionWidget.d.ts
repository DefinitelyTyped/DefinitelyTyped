declare namespace OO.ui {
    /**
     * MultioptionWidgets are special elements that can be selected and configured with data. The
     * data is often unique for each option, but it does not have to be. MultioptionWidgets are used
     * with OO.ui.SelectWidget to create a selection of mutually exclusive options. For more information
     * and examples, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options).
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MultioptionWidget
     */
    interface MultioptionWidget extends MultioptionWidget.Props, MultioptionWidget.Prototype {}

    namespace MultioptionWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap {
            change: [selected: boolean];
        }

        interface ConfigOptions
            extends Widget.ConfigOptions, mixin.LabelElement.ConfigOptions, mixin.TitledElement.ConfigOptions
        {
            /** Whether the option is initially selected */
            selected?: boolean;
        }

        interface Static extends Widget.Static, mixin.LabelElement.Static, mixin.TitledElement.Static {}

        interface Props extends Widget.Props, mixin.LabelElement.Props, mixin.TitledElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.LabelElement.Prototype, mixin.TitledElement.Prototype {
            /**
             * Check if the option is selected.
             *
             * @return Item is selected
             */
            isSelected(): boolean;

            /**
             * Set the option’s selected state. In general, all modifications to the selection
             * should be handled by the SelectWidget’s
             * {@link OO.ui.SelectWidget.selectItem selectItem( [item] )} method instead of this
             * method.
             *
             * @param state Select option
             * @return The widget, for chaining
             */
            setSelected(state?: boolean): this;

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
            new(config?: ConfigOptions): MultioptionWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const MultioptionWidget: MultioptionWidget.Constructor;
}
