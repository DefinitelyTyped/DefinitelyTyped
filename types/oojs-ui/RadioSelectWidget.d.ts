declare namespace OO.ui {
    /**
     * RadioSelectWidget is a {@link OO.ui.SelectWidget select widget} that contains radio
     * options and is used together with OO.ui.RadioOptionWidget. The RadioSelectWidget provides
     * an interface for adding, removing and selecting options.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options)
     * for more information.
     *
     * If you want to use this within an HTML form, such as a OO.ui.FormLayout, use
     * OO.ui.RadioSelectInputWidget instead.
     *
     *     // A RadioSelectWidget with RadioOptions.
     *     var option1 = new OO.ui.RadioOptionWidget( {
     *             data: 'a',
     *             label: 'Selected radio option'
     *         } ),
     *         option2 = new OO.ui.RadioOptionWidget( {
     *             data: 'b',
     *             label: 'Unselected radio option'
     *         } );
     *         radioSelect = new OO.ui.RadioSelectWidget( {
     *             items: [ option1, option2 ]
     *         } );
     *
     *     // Select 'option 1' using the RadioSelectWidget's selectItem() method.
     *     radioSelect.selectItem( option1 );
     *
     *     $( document.body ).append( radioSelect.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.RadioSelectWidget
     */
    interface RadioSelectWidget extends RadioSelectWidget.Props, RadioSelectWidget.Prototype {}

    namespace RadioSelectWidget {
        interface ConfigOptions extends SelectWidget.ConfigOptions, mixin.TabIndexedElement.ConfigOptions {}

        type Static = SelectWidget.Static;

        interface Props extends SelectWidget.Props, mixin.TabIndexedElement.Props {}

        interface Prototype extends SelectWidget.Prototype, mixin.TabIndexedElement.Prototype {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RadioSelectWidget;
            prototype: Prototype;
            static: Static;
            super: SelectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectWidget.Constructor;
        }
    }

    const RadioSelectWidget: RadioSelectWidget.Constructor;
}
