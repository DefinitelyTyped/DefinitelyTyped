declare namespace OO.ui {
    /**
     * DropdownInputWidget is a {@link OO.ui.DropdownWidget DropdownWidget} intended to be used
     * within an HTML form, such as a OO.ui.FormLayout. The selected value is synchronized with the
     * value of a hidden HTML `input` tag. Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for more information about input widgets.
     *
     * A DropdownInputWidget always has a value (one of the options is always selected), unless there
     * are no options. If no `value` configuration option is provided, the first option is selected.
     * If you need a state representing no value (no option being selected), use a DropdownWidget.
     *
     * This and OO.ui.RadioSelectInputWidget support similar configuration options.
     *
     *     // A DropdownInputWidget with three options.
     *     var dropdownInput = new OO.ui.DropdownInputWidget( {
     *         options: [
     *             { data: 'a', label: 'First' },
     *             { data: 'b', label: 'Second', disabled: true },
     *             { optgroup: 'Group label' },
     *             { data: 'c', label: 'First sub-item)' }
     *         ]
     *     } );
     *     $( document.body ).append( dropdownInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.DropdownInputWidget
     */
    interface DropdownInputWidget extends DropdownInputWidget.Props, DropdownInputWidget.Prototype {}

    namespace DropdownInputWidget {
        interface Option {
            data?: any;
            label?: string;
            optgroup?: string;
            disabled?: boolean;
        }

        interface ConfigOptions extends InputWidget.ConfigOptions, mixin.RequiredElement.ConfigOptions {
            /** Array of menu options in the format described above. */
            options?: Option[];
            /** Configuration options for {@link OO.ui.DropdownWidget DropdownWidget} */
            dropdown?: DropdownWidget.ConfigOptions;
            /**
             * Render the menu into a separate layer. This configuration is
             * useful in cases where the expanded menu is larger than its containing `<div>`. The
             * specified overlay layer is usually on top of the containing `<div>` and has a larger
             * area. By default, the menu uses relative positioning. Pass 'true' to use the default
             * overlay. See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery | boolean;
        }

        type Static = InputWidget.Static;

        interface Props extends InputWidget.Props, mixin.RequiredElement.Props {}

        interface Prototype extends InputWidget.Prototype, mixin.RequiredElement.Prototype {
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
            new(config?: ConfigOptions): DropdownInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const DropdownInputWidget: DropdownInputWidget.Constructor;
}
