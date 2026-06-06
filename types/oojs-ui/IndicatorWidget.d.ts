declare namespace OO.ui {
    /**
     * IndicatorWidgets create indicators, which are small graphics that are generally used to draw
     * attention to the status of an item or to clarify the function within a control. For a list of
     * indicators included in the library, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Indicators).
     *
     *     // An indicator widget.
     *     var indicator1 = new OO.ui.IndicatorWidget( {
     *             indicator: 'required'
     *         } ),
     *         // Create a fieldset layout to add a label.
     *         fieldset = new OO.ui.FieldsetLayout();
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( indicator1, {
     *             label: 'A required indicator:'
     *         } )
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.IndicatorWidget
     */
    interface IndicatorWidget extends IndicatorWidget.Props, IndicatorWidget.Prototype {}

    namespace IndicatorWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions
        {}

        interface Static
            extends Widget.Static, mixin.IndicatorElement.Static, mixin.TitledElement.Static, mixin.LabelElement.Static
        {}

        interface Props
            extends Widget.Props, mixin.IndicatorElement.Props, mixin.TitledElement.Props, mixin.LabelElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.LabelElement.Prototype
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
            new(config?: ConfigOptions): IndicatorWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const IndicatorWidget: IndicatorWidget.Constructor;
}
