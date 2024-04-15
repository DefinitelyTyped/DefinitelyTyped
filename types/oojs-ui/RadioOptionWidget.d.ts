declare namespace OO.ui {
    /**
     * RadioOptionWidget is an option widget that looks like a radio button.
     * The class is used with OO.ui.RadioSelectWidget to create a selection of radio options.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Button_selects_and_option)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.RadioOptionWidget
     */
    interface RadioOptionWidget extends RadioOptionWidget.Props, RadioOptionWidget.Prototype {}

    namespace RadioOptionWidget {
        type ConfigOptions = OptionWidget.ConfigOptions;

        type Static = OptionWidget.Static;

        type Props = OptionWidget.Props;

        type Prototype = OptionWidget.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RadioOptionWidget;
            prototype: Prototype;
            static: Static;
            super: OptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: OptionWidget.Constructor;
        }
    }

    const RadioOptionWidget: RadioOptionWidget.Constructor;
}
