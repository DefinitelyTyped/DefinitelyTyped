declare namespace OO.ui {
    /**
     * IndexLayouts contain {@link OO.ui.TabPanelLayout tab panel layouts} as well as
     * {@link OO.ui.TabSelectWidget tabs} that allow users to easily navigate through the tab panels
     * and select which one to display. By default, only one tab panel is displayed at a time. When a
     * user navigates to a new tab panel, the index layout automatically focuses on the first focusable
     * element, unless the default setting is changed.
     *
     *     // Example of a IndexLayout that contains two TabPanelLayouts.
     *
     *     function TabPanelOneLayout( name, config ) {
     *         TabPanelOneLayout.super.call( this, name, config );
     *         this.$element.append( '<p>First tab panel</p>' );
     *     }
     *     OO.inheritClass( TabPanelOneLayout, OO.ui.TabPanelLayout );
     *     TabPanelOneLayout.prototype.setupTabItem = function () {
     *         this.tabItem.setLabel( 'Tab panel one' );
     *     };
     *
     *     var tabPanel1 = new TabPanelOneLayout( 'one' ),
     *         tabPanel2 = new OO.ui.TabPanelLayout( 'two', { label: 'Tab panel two' } );
     *
     *     tabPanel2.$element.append( '<p>Second tab panel</p>' );
     *
     *     var index = new OO.ui.IndexLayout();
     *
     *     index.addTabPanels( [ tabPanel1, tabPanel2 ] );
     *     $( document.body ).append( index.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.IndexLayout
     */
    interface IndexLayout extends IndexLayout.Props, IndexLayout.Prototype {}

    namespace IndexLayout {
        interface EventMap {
            set: [tabPanel: TabPanelLayout];
            add: [tabPanels: TabPanelLayout[], index: number];
            remove: [tabPanels: TabPanelLayout[]];
        }

        interface ConfigOptions extends MenuLayout.ConfigOptions {
            /** Content stack (see {@link MenuLayout}) */
            contentPanel?: StackLayout;
            /** Show all tab panels, one after another */
            continuous?: boolean;
            /**
             * Focus on the first focusable element when a new tab panel is displayed. Disabled on
             * mobile.
             */
            autoFocus?: boolean;
            /** Render the tabs with frames */
            framed?: boolean;
        }

        type Static = MenuLayout.Static;

        type Props = MenuLayout.Props;

        interface Prototype extends MenuLayout.Prototype {
            /**
             * Focus the first input in the current tab panel.
             *
             * If no tab panel is selected, the first selectable tab panel will be selected.
             * If the focus is already in an element on the current tab panel, nothing will happen.
             *
             * @param itemIndex A specific item to focus on
             */
            focus(itemIndex?: number): void;

            /**
             * Find the first focusable input in the index layout and focus
             * on it.
             */
            focusFirstFocusable(): void;

            /**
             * Get the tab panel closest to the specified tab panel.
             *
             * @param tabPanel Tab panel to use as a reference point
             * @return Tab panel closest to the specified
             */
            getClosestTabPanel(tabPanel: TabPanelLayout): TabPanelLayout | null;

            /**
             * Get the tabs widget.
             *
             * @return Tabs widget
             */
            getTabs(): TabSelectWidget;

            /**
             * Get a tab panel by its symbolic name.
             *
             * @param name Symbolic name of tab panel
             * @return Tab panel, if found
             */
            getTabPanel(name: string): TabPanelLayout | undefined;

            /**
             * Get the current tab panel.
             *
             * @return Current tab panel, if found
             */
            getCurrentTabPanel(): TabPanelLayout | undefined;

            /**
             * Get the symbolic name of the current tab panel.
             *
             * @return Symbolic name of the current tab panel
             */
            getCurrentTabPanelName(): string | null;

            /**
             * Add tab panels to the index layout.
             *
             * When tab panels are added with the same names as existing tab panels, the existing tab panels
             * will be automatically removed before the new tab panels are added.
             *
             * @param tabPanels Tab panels to add
             * @param index Index of the insertion point
             * @return The layout, for chaining
             */
            addTabPanels(tabPanels: TabPanelLayout[], index: number): this;

            /**
             * Remove the specified tab panels from the index layout.
             *
             * To remove all tab panels from the index, you may wish to use the {@link clearTabPanels} method instead.
             *
             * @param tabPanels An array of tab panels to remove
             * @return The layout, for chaining
             */
            removeTabPanels(tabPanels: TabPanelLayout[]): this;

            /**
             * Clear all tab panels from the index layout.
             *
             * To remove only a subset of tab panels from the index, use the {@link removeTabPanels} method.
             *
             * @return The layout, for chaining
             */
            clearTabPanels(): this;

            /**
             * Set the current tab panel by symbolic name.
             *
             * @param name Symbolic name of tab panel
             */
            setTabPanel(name: string): void;

            /**
             * Select the first selectable tab panel.
             *
             * @return The layout, for chaining
             */
            selectFirstSelectableTabPanel(): this;

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
            new(config?: ConfigOptions): IndexLayout;
            prototype: Prototype;
            static: Static;
            super: MenuLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: MenuLayout.Constructor;
        }
    }

    const IndexLayout: IndexLayout.Constructor;
}
