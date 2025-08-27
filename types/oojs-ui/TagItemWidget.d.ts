declare namespace OO.ui {
    /**
     * TagItemWidgets are used within a {@link OO.ui.TagMultiselectWidget TagMultiselectWidget}
     * to display the selected items.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TagItemWidget
     */
    interface TagItemWidget extends TagItemWidget.Props, TagItemWidget.Prototype {}

    namespace TagItemWidget {
        interface EventMap
            extends
                Widget.EventMap,
                mixin.LabelElement.EventMap,
                mixin.FlaggedElement.EventMap,
                mixin.DraggableElement.EventMap
        {
            remove: [];
            navigate: [direction: TagMultiselectWidget.Direction];
            select: [];
            valid: [isValid: boolean];
            fixed: [isFixed: boolean];
        }

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions,
                mixin.DraggableElement.ConfigOptions
        {
            /** Item is valid */
            valid?: boolean;
            /** Item is fixed. This means the item is always included in the values and cannot be removed. */
            fixed?: boolean;
        }

        interface Static
            extends Widget.Static, mixin.LabelElement.Static, mixin.FlaggedElement.Static, mixin.DraggableElement.Static
        {}

        interface Props
            extends
                Widget.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props,
                mixin.TabIndexedElement.Props,
                mixin.DraggableElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.TabIndexedElement.Prototype,
                mixin.DraggableElement.Prototype
        {
            /**
             * Set this item as fixed, meaning it cannot be removed
             *
             * @param state Item is fixed, omit to toggle
             * @return The widget, for chaining
             */
            setFixed(state?: boolean): this;

            /**
             * Check whether the item is fixed
             *
             * @return
             */
            isFixed(): boolean;

            /**
             * Handle removal of the item
             *
             * This is mainly for extensibility concerns, so other children
             * of this class can change the behavior if they need to. This
             * is called by both clicking the 'remove' button but also
             * on keypress, which is harder to override if needed.
             */
            remove(): void;

            /**
             * Handle a keydown event on the widget
             *
             * @param e Key down event
             * @return false to stop the operation
             */
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            onKeyDown(e: JQuery.Event): boolean | void;

            /**
             * Select this item
             */
            select(): void;

            /**
             * Set the valid state of this item
             *
             * @param valid Item is valid, omit to toggle
             */
            toggleValid(valid?: boolean): void;

            /**
             * Check whether the item is valid
             *
             * @return Item is valid
             */
            isValid(): boolean;

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
            new(config?: ConfigOptions): TagItemWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const TagItemWidget: TagItemWidget.Constructor;
}
