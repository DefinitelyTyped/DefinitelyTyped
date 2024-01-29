declare namespace OO.ui {
    /**
     * MenuSectionOptionWidgets are used inside {@link OO.ui.MenuSelectWidget menu select widgets} to
     * group one or more related {@link OO.ui.MenuOptionWidget menu options}. MenuSectionOptionWidgets
     * cannot be highlighted or selected.
     *
     *     var dropdown = new OO.ui.DropdownWidget( {
     *         menu: {
     *             items: [
     *                 new OO.ui.MenuSectionOptionWidget( {
     *                     label: 'Dogs'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'corgi',
     *                     label: 'Welsh Corgi'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'poodle',
     *                     label: 'Standard Poodle'
     *                 } ),
     *                 new OO.ui.MenuSectionOptionWidget( {
     *                     label: 'Cats'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'lion',
     *                     label: 'Lion'
     *                 } )
     *             ]
     *         }
     *     } );
     *     $( document.body ).append( dropdown.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuSectionOptionWidget
     */
    interface MenuSectionOptionWidget extends MenuSectionOptionWidget.Props, MenuSectionOptionWidget.Prototype {}

    namespace MenuSectionOptionWidget {
        type ConfigOptions = DecoratedOptionWidget.ConfigOptions;

        type Static = DecoratedOptionWidget.Static;

        type Props = DecoratedOptionWidget.Props;

        type Prototype = DecoratedOptionWidget.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): MenuSectionOptionWidget;
            prototype: Prototype;
            static: Static;
            super: DecoratedOptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: DecoratedOptionWidget.Constructor;
        }
    }

    const MenuSectionOptionWidget: MenuSectionOptionWidget.Constructor;
}
