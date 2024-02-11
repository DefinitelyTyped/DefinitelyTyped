declare namespace OO.ui {
    /**
     * PageLayouts are used within {@link OO.ui.BookletLayout booklet layouts} to create pages that
     * users can select and display from the booklet's optional
     * {@link OO.ui.OutlineSelectWidget outline} navigation. Pages are usually not instantiated
     * directly, rather extended to include the required content and functionality.
     *
     * Each page must have a unique symbolic name, which is passed to the constructor. In addition,
     * the page's outline item is customized (with a label, outline level, etc.) using
     * the setupOutlineItem method. See {@link OO.ui.BookletLayout BookletLayout} for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PageLayout
     */
    interface PageLayout extends PageLayout.Props, PageLayout.Prototype {}

    namespace PageLayout {
        interface EventMap {
            active: [active: boolean];
        }

        type ConfigOptions = PanelLayout.ConfigOptions;

        type Static = PanelLayout.Static;

        type Props = PanelLayout.Props;

        interface Prototype extends PanelLayout.Prototype {
            /**
             * Get the symbolic name of the page.
             *
             * @return Symbolic name of page
             */
            getName(): string;

            /**
             * Check if page is active.
             *
             * Pages become active when they are shown in a {@link OO.ui.BookletLayout booklet layout}
             * that is configured to display only one page at a time. Additional CSS is applied to
             * the  page's outline item to reflect the active state.
             *
             * @return Page is active
             */
            isActive(): boolean;

            /**
             * Get outline item.
             *
             * The outline item allows users to access the page from the booklet's outline
             * navigation. The outline item itself can be customized (with a label, level, etc.)
             * using the setupOutlineItem method.
             *
             * @return Outline option widget
             */
            getOutlineItem(): OutlineOptionWidget | null;

            /**
             * Set or unset the outline item.
             *
             * Specify an {@link OO.ui.OutlineOptionWidget outline option} to set it,
             * or `null` to clear the outline item. To customize the outline item itself (e.g., to
             * set a label or outline level), use setupOutlineItem instead of this method.
             *
             * @param outlineItem Outline option widget, null to clear
             * @return The layout, for chaining
             */
            setOutlineItem(outlineItem: OutlineOptionWidget | null): this;

            /**
             * Set the page to its 'active' state.
             *
             * Pages become active when they are shown in a booklet layout that is configured to
             * display only one page at a time. Additional CSS is applied to the outline item to
             * reflect the page's active state. Outside of the booklet context, setting the active
             * state on a page does nothing.
             *
             * @param active Page is active
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
             * @param name Unique symbolic name of page
             * @param config Configuration options
             */
            new(name: string, config?: ConfigOptions): PageLayout;
            prototype: Prototype;
            static: Static;
            super: PanelLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: PanelLayout.Constructor;
        }
    }

    const PageLayout: PageLayout.Constructor;
}
