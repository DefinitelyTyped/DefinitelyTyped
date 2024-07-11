declare namespace OO.ui {
    /**
     * MenuOptionWidget is an option widget that looks like a menu item. The class is used with
     * OO.ui.MenuSelectWidget to create a menu of mutually exclusive options. Please see
     * the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Menu_selects_and_options)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuOptionWidget
     */
    interface MenuOptionWidget extends MenuOptionWidget.Props, MenuOptionWidget.Prototype {}

    namespace MenuOptionWidget {
        type ConfigOptions = DecoratedOptionWidget.ConfigOptions;

        type Static = DecoratedOptionWidget.Static;

        type Props = DecoratedOptionWidget.Props;

        type Prototype = DecoratedOptionWidget.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): MenuOptionWidget;
            prototype: Prototype;
            static: Static;
            super: DecoratedOptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: DecoratedOptionWidget.Constructor;
        }
    }

    const MenuOptionWidget: MenuOptionWidget.Constructor;
}
