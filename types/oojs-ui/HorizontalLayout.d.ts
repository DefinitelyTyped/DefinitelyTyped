declare namespace OO.ui {
    /**
     * HorizontalLayout arranges its contents in a single line (using `display: inline-block` for its
     * items), with small margins between them. Convenient when you need to put a number of block-level
     * widgets on a single line next to each other.
     *
     * Note that inline elements, such as OO.ui.ButtonWidgets, do not need this wrapper.
     *
     *     // HorizontalLayout with a text input and a label.
     *     var layout = new OO.ui.HorizontalLayout( {
     *       items: [
     *         new OO.ui.LabelWidget( { label: 'Label' } ),
     *         new OO.ui.TextInputWidget( { value: 'Text' } )
     *       ]
     *     } );
     *     $( document.body ).append( layout.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.HorizontalLayout
     */
    interface HorizontalLayout extends HorizontalLayout.Props, HorizontalLayout.Prototype {}

    namespace HorizontalLayout {
        type EventMap = mixin.GroupElement.EventMap;

        interface ConfigOptions extends Layout.ConfigOptions {
            /** Widgets or other layouts to add to the layout. */
            items?: Array<Widget | Layout>;
        }

        type Static = Layout.Static;

        interface Props extends Layout.Props, mixin.GroupElement.Props {}

        interface Prototype extends Layout.Prototype, mixin.GroupElement.Prototype {
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
            new(config?: ConfigOptions): HorizontalLayout;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const HorizontalLayout: HorizontalLayout.Constructor;
}
