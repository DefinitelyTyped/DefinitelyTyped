declare namespace OO.ui {
    /**
     * MultiselectWidget allows selecting multiple options from a list.
     *
     * For more information about menus and options, please see the [OOUI documentation
     * on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Menu_selects_and_options).
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MultiselectWidget
     */
    interface MultiselectWidget extends MultiselectWidget.Props, MultiselectWidget.Prototype {}

    namespace MultiselectWidget {
        interface EventMap extends Widget.EventMap, mixin.GroupElement.EventMap {
            select: [];
        }

        interface ConfigOptions
            extends Widget.ConfigOptions, mixin.GroupElement.ConfigOptions, mixin.TitledElement.ConfigOptions
        {
            /** An array of options to add to the multiselect. */
            items?: MultioptionWidget[];
        }

        interface Static extends Widget.Static, mixin.TitledElement.Static {}

        interface Props extends Widget.Props, mixin.GroupElement.Props, mixin.TitledElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.GroupElement.Prototype, mixin.TitledElement.Prototype {
            /**
             * Find options that are selected.
             *
             * @return Selected options
             */
            findSelectedItems(): MultioptionWidget[];

            /**
             * Find the data of options that are selected.
             *
             * @return Values of selected options
             */
            findSelectedItemsData(): unknown[];

            /**
             * Select options by reference. Options not mentioned in the `items` array will be deselected.
             *
             * @param items Items to select
             * @return The widget, for chaining
             */
            selectItems(items: MultioptionWidget[]): this;

            /**
             * Select items by their data. Options not mentioned in the `datas` array will be deselected.
             *
             * @param datas Values of items to select
             * @return The widget, for chaining
             */
            selectItemsByData(datas: any[]): this;

            /**
             * Deselect all items.
             *
             * @return The widget, for chaining
             */
            clearSelection(): this;

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
            new(config?: ConfigOptions): MultiselectWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const MultiselectWidget: MultiselectWidget.Constructor;
}
