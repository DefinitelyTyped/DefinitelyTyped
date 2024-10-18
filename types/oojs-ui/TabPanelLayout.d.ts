declare namespace OO.ui {
    /**
     * TabPanelLayouts are used within {@link OO.ui.IndexLayout index layouts} to create tab panels that
     * users can select and display from the index's optional {@link OO.ui.TabSelectWidget tab}
     * navigation. TabPanels are usually not instantiated directly, rather extended to include the
     * required content and functionality.
     *
     * Each tab panel must have a unique symbolic name, which is passed to the constructor. In addition,
     * the tab panel's tab item is customized (with a label) using the {@link setupTabItem} method. See
     * {@link OO.ui.IndexLayout IndexLayout} for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TabPanelLayout
     */
    interface TabPanelLayout extends TabPanelLayout.Props, TabPanelLayout.Prototype {}

    namespace TabPanelLayout {
        interface EventMap {
            active: [active: boolean];
        }

        interface ConfigOptions extends PanelLayout.ConfigOptions {
            /** Label for tab panel's tab */
            label?: Deferrable<string> | JQuery | HtmlSnippet;
            /** Additional tab item config */
            tabItemConfig?: TabOptionWidget.ConfigOptions;
        }

        type Static = PanelLayout.Static;

        type Props = PanelLayout.Props;

        interface Prototype extends PanelLayout.Prototype {
            /**
             * Get the symbolic name of the tab panel.
             *
             * @return Symbolic name of tab panel
             */
            getName(): string;

            /**
             * Check if tab panel is active.
             *
             * Tab panels become active when they are shown in a {@link OO.ui.IndexLayout index layout} that is
             * configured to display only one tab panel at a time. Additional CSS is applied to the tab panel's
             * tab item to reflect the active state.
             *
             * @return Tab panel is active
             */
            isActive(): boolean;

            /**
             * Get tab item.
             *
             * The tab item allows users to access the tab panel from the index's tab
             * navigation. The tab item itself can be customized (with a label, level, etc.) using the
             * {@link setupTabItem} method.
             *
             * @return  Tab option widget
             */
            getTabItem(): TabOptionWidget | null;

            /**
             * Get config for creating a tab item.
             *
             * @return Tab option config
             */
            getTabItemConfig(): TabOptionWidget.ConfigOptions;

            /**
             * Set or unset the tab item.
             *
             * Specify a {@link OO.ui.TabOptionWidget tab option} to set it,
             * or `null` to clear the tab item. To customize the tab item itself (e.g., to set a label or tab
             * level), use {@link setupTabItem} instead of this method.
             *
             * @param tabItem Tab option widget, null to clear
             * @return The layout, for chaining
             */
            setTabItem(tabItem: TabOptionWidget | null): this;

            /**
             * Set up the tab item.
             *
             * Use this method to customize the tab item (e.g., to add a label or tab level). To set or unset
             * the tab item itself (with a {@link OO.ui.TabOptionWidget tab option} or `null`), use
             * the {@link setTabItem} method instead.
             *
             * @return The layout, for chaining
             */
            setupTabItem(): this;

            /**
             * Set the tab panel to its 'active' state.
             *
             * Tab panels become active when they are shown in a index layout that is configured to display only
             * one tab panel at a time. Additional CSS is applied to the tab item to reflect the tab panel's
             * active state. Outside of the index context, setting the active state on a tab panel does nothing.
             *
             * @param active Tab panel is active
             */
            setActive(active: boolean): void;

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
            /**
             * @param name Unique symbolic name of tab panel
             * @param config Configuration options
             */
            new(name: string, config?: ConfigOptions): TabPanelLayout;
            prototype: Prototype;
            static: Static;
            super: PanelLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: PanelLayout.Constructor;
        }
    }

    const TabPanelLayout: TabPanelLayout.Constructor;
}
