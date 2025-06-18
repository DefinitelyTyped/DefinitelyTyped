declare namespace OO.ui {
    /**
     * ButtonSelectWidget is a {@link OO.ui.SelectWidget select widget} that contains
     * button options and is used together with
     * OO.ui.ButtonOptionWidget. The ButtonSelectWidget provides an interface for
     * highlighting, choosing, and selecting mutually exclusive options. Please see
     * the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options)
     * for more information.
     *
     *     // A ButtonSelectWidget that contains three ButtonOptionWidgets.
     *     var option1 = new OO.ui.ButtonOptionWidget( {
     *             data: 1,
     *             label: 'Option 1',
     *             title: 'Button option 1'
     *         } ),
     *         option2 = new OO.ui.ButtonOptionWidget( {
     *             data: 2,
     *             label: 'Option 2',
     *             title: 'Button option 2'
     *         } ),
     *         option3 = new OO.ui.ButtonOptionWidget( {
     *             data: 3,
     *             label: 'Option 3',
     *             title: 'Button option 3'
     *         } ),
     *         buttonSelect = new OO.ui.ButtonSelectWidget( {
     *             items: [ option1, option2, option3 ]
     *         } );
     *     $( document.body ).append( buttonSelect.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonSelectWidget
     */
    interface ButtonSelectWidget extends ButtonSelectWidget.Props, ButtonSelectWidget.Prototype {}

    namespace ButtonSelectWidget {
        interface ConfigOptions extends SelectWidget.ConfigOptions, mixin.TabIndexedElement.ConfigOptions {}

        type Static = SelectWidget.Static;

        interface Props extends SelectWidget.Props, mixin.TabIndexedElement.Props {}

        interface Prototype extends SelectWidget.Prototype, mixin.TabIndexedElement.Prototype {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ButtonSelectWidget;
            prototype: Prototype;
            static: Static;
            super: SelectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectWidget.Constructor;
        }
    }

    const ButtonSelectWidget: ButtonSelectWidget.Constructor;
}
