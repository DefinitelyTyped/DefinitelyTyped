declare namespace OO.ui {
    /**
     * A ButtonGroupWidget groups related buttons and is used together with OO.ui.ButtonWidget and
     * its subclasses. Each button in a group is addressed by a unique reference. Buttons can be added,
     * removed, and cleared from the group.
     *
     *     // A ButtonGroupWidget with two buttons.
     *     var button1 = new OO.ui.PopupButtonWidget( {
     *             label: 'Select a category',
     *             icon: 'menu',
     *             popup: {
     *                 $content: $( '<p>List of categories…</p>' ),
     *                 padded: true,
     *                 align: 'left'
     *             }
     *         } ),
     *         button2 = new OO.ui.ButtonWidget( {
     *             label: 'Add item'
     *         } ),
     *         buttonGroup = new OO.ui.ButtonGroupWidget( {
     *             items: [ button1, button2 ]
     *         } );
     *     $( document.body ).append( buttonGroup.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonGroupWidget
     */
    interface ButtonGroupWidget extends ButtonGroupWidget.Props, ButtonGroupWidget.Prototype {}

    namespace ButtonGroupWidget {
        interface EventMap extends Widget.EventMap, mixin.GroupElement.EventMap {}

        interface ConfigOptions
            extends Widget.ConfigOptions, mixin.GroupElement.ConfigOptions, mixin.TitledElement.ConfigOptions
        {
            /** Buttons to add */
            items?: ButtonWidget[];
        }

        interface Static extends Widget.Static, mixin.TitledElement.Static {}

        interface Props extends Widget.Props, mixin.GroupElement.Props, mixin.TitledElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.GroupElement.Prototype, mixin.TitledElement.Prototype {
            /**
             * Focus the widget
             *
             * @return The widget, for chaining
             */
            focus(): this;

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
            new(config?: ConfigOptions): ButtonGroupWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const ButtonGroupWidget: ButtonGroupWidget.Constructor;
}
