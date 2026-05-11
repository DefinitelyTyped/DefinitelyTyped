declare namespace OO.ui {
    /**
     * CheckboxMultioptionWidget is an option widget that looks like a checkbox.
     * The class is used with OO.ui.CheckboxMultiselectWidget to create a selection of checkbox options.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Button_selects_and_option)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.CheckboxMultioptionWidget
     */
    interface CheckboxMultioptionWidget extends CheckboxMultioptionWidget.Props, CheckboxMultioptionWidget.Prototype {}

    namespace CheckboxMultioptionWidget {
        type ConfigOptions = MultioptionWidget.ConfigOptions;

        type Static = MultioptionWidget.Static;

        type Props = MultioptionWidget.Props;

        interface Prototype extends MultioptionWidget.Prototype {
            /**
             * Focus the widget.
             */
            focus(): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): CheckboxMultioptionWidget;
            prototype: Prototype;
            static: Static;
            super: MultioptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: MultioptionWidget.Constructor;
        }
    }

    const CheckboxMultioptionWidget: CheckboxMultioptionWidget.Constructor;
}
