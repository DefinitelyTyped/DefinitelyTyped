declare namespace OO.ui {
    /**
     * StackLayouts contain a series of {@link OO.ui.PanelLayout panel layouts}. By default, only one
     * panel is displayed at a time, though the stack layout can also be configured to show all
     * contained panels, one after another, by setting the {@link StackLayout.ConfigOptions.continuous continuous}
     * option to 'true'.
     *
     *     // A stack layout with two panels, configured to be displayed continuously
     *     var myStack = new OO.ui.StackLayout( {
     *         items: [
     *             new OO.ui.PanelLayout( {
     *                 $content: $( '<p>Panel One</p>' ),
     *                 padded: true,
     *                 framed: true
     *             } ),
     *             new OO.ui.PanelLayout( {
     *                 $content: $( '<p>Panel Two</p>' ),
     *                 padded: true,
     *                 framed: true
     *             } )
     *         ],
     *         continuous: true
     *     } );
     *     $( document.body ).append( myStack.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.StackLayout
     */
    interface StackLayout extends StackLayout.Props, StackLayout.Prototype {}

    namespace StackLayout {
        interface EventMap extends mixin.GroupElement.EventMap {
            set: [item: Layout | null];
        }

        interface ConfigOptions extends PanelLayout.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /**
             * Show all panels, one after another. By default, only one panel is displayed at a time.
             */
            continuous?: boolean;

            /** Panel layouts to add to the stack layout. */
            items?: Layout[];
        }

        type Static = PanelLayout.Static;

        interface Props extends PanelLayout.Props, mixin.GroupElement.Props {}

        interface Prototype extends PanelLayout.Prototype, mixin.GroupElement.Prototype {
            /**
             * Get the current panel.
             *
             * @return
             */
            getCurrentItem(): Layout | null;
            /**
             * Add panel layouts to the stack layout.
             *
             * Panels will be added to the end of the stack layout array unless the optional index
             * parameter specifies a different insertion point. Adding a panel that is already in
             * the stack will move it to the end of the array or the point specified by the index.
             *
             * @param items Panels to add
             * @param index Index of the insertion point
             * @return The layout, for chaining
             */
            addItems(items: Layout[], index?: number): this;

            /**
             * Remove the specified panels from the stack layout.
             *
             * Removed panels are detached from the DOM, not removed, so that they may be reused.
             * To remove all panels, you may wish to use the {@link clearItems} method instead.
             *
             * @param itemsToRemove Panels to remove
             * @return The layout, for chaining
             */
            removeItems(itemsToRemove: Layout[]): this;

            /**
             * Clear all panels from the stack layout.
             *
             * Cleared panels are detached from the DOM, not removed, so that they may be reused.
             * To remove only a subset of panels, use the {@link removeItems} method.
             *
             * @return The layout, for chaining
             */
            clearItems(): this;

            /**
             * Show the specified panel.
             *
             * If another panel is currently displayed, it will be hidden.
             *
             * @param item Panel to show
             * @return The layout, for chaining
             */
            setItem(item: Layout): this;

            /**
             * Set the layout to continuous mode or not
             *
             * @param continuous Continuous mode
             */
            setContinuous(continuous: boolean): void;

            /**
             * Check if the layout is in continuous mode
             *
             * @return The layout is in continuous mode
             */
            isContinuous(): boolean;

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
            new(config?: ConfigOptions): StackLayout;
            prototype: Prototype;
            static: Static;
            super: PanelLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: PanelLayout.Constructor;
        }
    }

    const StackLayout: StackLayout.Constructor;
}
