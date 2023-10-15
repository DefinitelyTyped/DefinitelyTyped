declare namespace OO.ui {
    /**
     * CheckboxMultiselectInputWidget is a
     * {@link OO.ui.CheckboxMultiselectWidget CheckboxMultiselectWidget} intended to be used within a
     * HTML form, such as a OO.ui.FormLayout. The selected values are synchronized with the value of
     * HTML `<input type=checkbox>` tags. Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for
     * more information about input widgets.
     *
     *     // A CheckboxMultiselectInputWidget with three options.
     *     var multiselectInput = new OO.ui.CheckboxMultiselectInputWidget( {
     *         options: [
     *             { data: 'a', label: 'First' },
     *             { data: 'b', label: 'Second' },
     *             { data: 'c', label: 'Third' }
     *         ]
     *     } );
     *     $( document.body ).append( multiselectInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.CheckboxMultiselectInputWidget
     */
    interface CheckboxMultiselectInputWidget
        extends CheckboxMultiselectInputWidget.Props, CheckboxMultiselectInputWidget.Prototype
    {}

    namespace CheckboxMultiselectInputWidget {
        interface ConfigOptions extends InputWidget.ConfigOptions {
            /** Array of menu options in the format `{ data: …, label: …, disabled: … }` */
            options?: Array<Pick<CheckboxMultioptionWidget.ConfigOptions, "data" | "label" | "disabled">>;
        }

        type Static = InputWidget.Static;

        type Props = InputWidget.Props;

        interface Prototype extends InputWidget.Prototype {
            /**
             * Clean up incoming value.
             *
             * @param value Original value
             * @return Cleaned up value
             */
            cleanUpValue(value: string[]): string[];

            /**
             * Set the options available for this input.
             *
             * @param options Array of menu options in the format
             *  `{ data: …, label: …, disabled: … }`
             * @return The widget, for chaining
             */
            setOptions(
                options: Array<Pick<CheckboxMultioptionWidget.ConfigOptions, "data" | "label" | "disabled">>,
            ): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): CheckboxMultiselectInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const CheckboxMultiselectInputWidget: CheckboxMultiselectInputWidget.Constructor;
}
