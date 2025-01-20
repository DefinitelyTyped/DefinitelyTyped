declare namespace OO.ui {
    /**
     * ComboBoxInputWidgets combine a {@link OO.ui.TextInputWidget text input} (where a value
     * can be entered manually) and a {@link OO.ui.MenuSelectWidget menu of options} (from which
     * a value can be chosen instead). Users can choose options from the combo box in one of two ways:
     *
     * - by typing a value in the text input field. If the value exactly matches the value of a menu
     *   option, that option will appear to be selected.
     * - by choosing a value from the menu. The value of the chosen option will then appear in the text
     *   input field.
     *
     * After the user chooses an option, its `data` will be used as a new value for the widget.
     * A `label` also can be specified for each option: if given, it will be shown instead of the
     * `data` in the dropdown menu.
     *
     * This widget can be used inside an HTML form, such as a OO.ui.FormLayout.
     *
     * For more information about menus and options, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options#Menu_selects_and_options).
     *
     *     // A ComboBoxInputWidget.
     *     var comboBox = new OO.ui.ComboBoxInputWidget( {
     *         value: 'Option 1',
     *         options: [
     *             { data: 'Option 1' },
     *             { data: 'Option 2' },
     *             { data: 'Option 3' }
     *         ]
     *     } );
     *     $( document.body ).append( comboBox.$element );
     *
     *     // Example: A ComboBoxInputWidget with additional option labels.
     *     var comboBox = new OO.ui.ComboBoxInputWidget( {
     *         value: 'Option 1',
     *         options: [
     *             {
     *                 data: 'Option 1',
     *                 label: 'Option One'
     *             },
     *             {
     *                 data: 'Option 2',
     *                 label: 'Option Two'
     *             },
     *             {
     *                 data: 'Option 3',
     *                 label: 'Option Three'
     *             }
     *         ]
     *     } );
     *     $( document.body ).append( comboBox.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ComboBoxInputWidget
     */
    interface ComboBoxInputWidget extends ComboBoxInputWidget.Props, ComboBoxInputWidget.Prototype {}

    namespace ComboBoxInputWidget {
        interface Option {
            data?: any;
            label?: string;
        }

        interface ConfigOptions extends TextInputWidget.ConfigOptions {
            /** Array of menu options in the format `{ data: …, label: … }` */
            options?: Option[];
            /** Configuration options to pass to the {@link OO.ui.MenuSelectWidget menu select widget}. */
            menu?: MenuSelectWidget.ConfigOptions;
            /**
             * Render the menu into a separate layer. This configuration is
             * useful in cases where the expanded menu is larger than its containing `<div>`. The
             * specified overlay layer is usually on top of the containing `<div>` and has a larger
             * area. By default, the menu uses relative positioning.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;
        }

        type Static = TextInputWidget.Static;

        interface Props extends TextInputWidget.Props {
            $overlay: JQuery;
            $field: JQuery;
        }

        interface Prototype extends TextInputWidget.Prototype {
            /**
             * Get the combobox's menu.
             *
             * @return Menu widget
             */
            getMenu(): MenuSelectWidget;

            /**
             * Get the combobox's text input widget.
             *
             * @return Text input widget
             */
            getInput(): TextInputWidget;

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
            new(config?: ConfigOptions): ComboBoxInputWidget;
            prototype: Prototype;
            static: Static;
            super: TextInputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TextInputWidget.Constructor;
        }
    }

    const ComboBoxInputWidget: ComboBoxInputWidget.Constructor;
}
