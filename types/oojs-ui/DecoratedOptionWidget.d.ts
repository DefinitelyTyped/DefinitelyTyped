declare namespace OO.ui {
    /**
     * DecoratedOptionWidgets are {@link OO.ui.OptionWidget options} that can be configured
     * with an {@link OO.ui.mixin.IconElement icon} and/or
     * {@link OO.ui.mixin.IndicatorElement indicator}.
     * This class is used with OO.ui.SelectWidget to create a selection of mutually exclusive
     * options. For more information about options and selects, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options).
     *
     *     // Decorated options in a select widget.
     *     var select = new OO.ui.SelectWidget( {
     *         items: [
     *             new OO.ui.DecoratedOptionWidget( {
     *                 data: 'a',
     *                 label: 'Option with icon',
     *                 icon: 'help'
     *             } ),
     *             new OO.ui.DecoratedOptionWidget( {
     *                 data: 'b',
     *                 label: 'Option with indicator',
     *                 indicator: 'next'
     *             } )
     *         ]
     *     } );
     *     $( document.body ).append( select.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.DecoratedOptionWidget
     */
    interface DecoratedOptionWidget extends DecoratedOptionWidget.Props, DecoratedOptionWidget.Prototype {}

    namespace DecoratedOptionWidget {
        interface ConfigOptions
            extends OptionWidget.ConfigOptions, mixin.IconElement.ConfigOptions, mixin.IndicatorElement.ConfigOptions
        {}

        interface Static extends OptionWidget.Static, mixin.IconElement.Static, mixin.IndicatorElement.Static {}

        interface Props extends OptionWidget.Props, mixin.IconElement.Props, mixin.IndicatorElement.Props {}

        interface Prototype
            extends OptionWidget.Prototype, mixin.IconElement.Prototype, mixin.IndicatorElement.Prototype
        {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): DecoratedOptionWidget;
            prototype: Prototype;
            static: Static;
            super: OptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: OptionWidget.Constructor;
        }
    }

    const DecoratedOptionWidget: DecoratedOptionWidget.Constructor;
}
