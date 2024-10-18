declare namespace OO.ui {
    /**
     * RadioSelectInputWidget is a {@link OO.ui.RadioSelectWidget RadioSelectWidget} intended to be
     * used within an HTML form, such as a OO.ui.FormLayout. The selected value is synchronized with
     * the value of a hidden HTML `input` tag. Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for more information about input widgets.
     *
     * This and OO.ui.DropdownInputWidget support similar configuration options.
     *
     *     // A RadioSelectInputWidget with three options
     *     var radioSelectInput = new OO.ui.RadioSelectInputWidget( {
     *         options: [
     *             { data: 'a', label: 'First' },
     *             { data: 'b', label: 'Second'},
     *             { data: 'c', label: 'Third' }
     *         ]
     *     } );
     *     $( document.body ).append( radioSelectInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.RadioSelectInputWidget
     */
    interface RadioSelectInputWidget extends RadioSelectInputWidget.Props, RadioSelectInputWidget.Prototype {}

    namespace RadioSelectInputWidget {
        interface Option {
            data?: any;
            label?: string;
        }

        interface ConfigOptions extends InputWidget.ConfigOptions {
            /** Array of menu options in the format `{ data: …, label: … }` */
            options?: Option[];
        }

        type Static = InputWidget.Static;

        type Props = InputWidget.Props;

        interface Prototype extends InputWidget.Prototype {
            /**
             * Set the options available for this input.
             *
             * @param options Array of menu options in the format `{ data: …, label: … }`
             * @return The widget, for chaining
             */
            setOptions(options: Option[]): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RadioSelectInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const RadioSelectInputWidget: RadioSelectInputWidget.Constructor;
}
