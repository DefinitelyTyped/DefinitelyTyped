declare namespace OO.ui {
    /**
     * IconWidget is a generic widget for {@link OO.ui.mixin.IconElement icons}.
     * In general, IconWidgets should be used with OO.ui.LabelWidget, which creates a label that
     * identifies the icon’s function. See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Icons)
     * for a list of icons included in the library.
     *
     *     // An IconWidget with a label via LabelWidget.
     *     var myIcon = new OO.ui.IconWidget( {
     *             icon: 'help',
     *             title: 'Help'
     *          } ),
     *          // Create a label.
     *          iconLabel = new OO.ui.LabelWidget( {
     *              label: 'Help'
     *          } );
     *      $( document.body ).append( myIcon.$element, iconLabel.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.IconWidget
     */
    interface IconWidget extends IconWidget.Props, IconWidget.Prototype {}

    namespace IconWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap, mixin.FlaggedElement.EventMap {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions
        {}

        interface Static
            extends
                Widget.Static,
                mixin.IconElement.Static,
                mixin.TitledElement.Static,
                mixin.LabelElement.Static,
                mixin.FlaggedElement.Static
        {}

        interface Props
            extends
                Widget.Props,
                mixin.IconElement.Props,
                mixin.TitledElement.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IconElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype
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
            new(config?: ConfigOptions): IconWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const IconWidget: IconWidget.Constructor;
}
