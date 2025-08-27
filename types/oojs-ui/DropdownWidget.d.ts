declare namespace OO.ui {
    /**
     * DropdownWidgets are not menus themselves, rather they contain a menu of options created with
     * OO.ui.MenuOptionWidget. The DropdownWidget takes care of opening and displaying the menu so that
     * users can interact with it.
     *
     * If you want to use this within an HTML form, such as a OO.ui.FormLayout, use
     * OO.ui.DropdownInputWidget instead.
     *
     *     // A DropdownWidget with a menu that contains three options.
     *     var dropDown = new OO.ui.DropdownWidget( {
     *         label: 'Dropdown menu: Select a menu option',
     *         menu: {
     *             items: [
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'a',
     *                     label: 'First'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'b',
     *                     label: 'Second'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'c',
     *                     label: 'Third'
     *                 } )
     *             ]
     *         }
     *     } );
     *
     *     $( document.body ).append( dropDown.$element );
     *
     *     dropDown.getMenu().selectItemByData( 'b' );
     *
     *     dropDown.getMenu().findSelectedItem().getData(); // Returns 'b'.
     *
     * For more information, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Menu_selects_and_options).
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.DropdownWidget
     */
    interface DropdownWidget extends DropdownWidget.Props, DropdownWidget.Prototype {}

    namespace DropdownWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions
        {
            /** Configuration options to pass to {@link OO.ui.MenuSelectWidget menu select widget}. */
            menu?: MenuSelectWidget.ConfigOptions;
            /**
             * Render the menu into a separate layer. This configuration is
             * useful in cases where the expanded menu is larger than its containing `<div>`.
             * The specified overlay layer is usually on top of the containing `<div>` and has a
             * larger area. By default, the menu uses relative positioning. Pass 'true' to use the
             * default overlay. See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery | boolean;
        }

        interface Static
            extends
                Widget.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.TitledElement.Static
        {}

        interface Props
            extends
                Widget.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.LabelElement.Props,
                mixin.TitledElement.Props,
                mixin.TabIndexedElement.Props
        {
            $handle: JQuery;
            $overlay: JQuery;
        }

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.TabIndexedElement.Prototype
        {
            /**
             * Get the menu.
             *
             * @return Menu of widget
             */
            getMenu(): MenuSelectWidget;

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
            new(config?: ConfigOptions): DropdownWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const DropdownWidget: DropdownWidget.Constructor;
}
