declare namespace OO.ui {
    /**
     * CheckboxMultiselectWidget is a {@link OO.ui.MultiselectWidget multiselect widget} that contains
     * checkboxes and is used together with OO.ui.CheckboxMultioptionWidget. The
     * CheckboxMultiselectWidget provides an interface for adding, removing and selecting options.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options)
     * for more information.
     *
     * If you want to use this within an HTML form, such as a OO.ui.FormLayout, use
     * OO.ui.CheckboxMultiselectInputWidget instead.
     *
     *     // A CheckboxMultiselectWidget with CheckboxMultioptions.
     *     var option1 = new OO.ui.CheckboxMultioptionWidget( {
     *             data: 'a',
     *             selected: true,
     *             label: 'Selected checkbox'
     *         } ),
     *         option2 = new OO.ui.CheckboxMultioptionWidget( {
     *             data: 'b',
     *             label: 'Unselected checkbox'
     *         } ),
     *         multiselect = new OO.ui.CheckboxMultiselectWidget( {
     *             items: [ option1, option2 ]
     *         } );
     *     $( document.body ).append( multiselect.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.CheckboxMultiselectWidget
     */
    interface CheckboxMultiselectWidget extends CheckboxMultiselectWidget.Props, CheckboxMultiselectWidget.Prototype {}

    namespace CheckboxMultiselectWidget {
        type ConfigOptions = MultiselectWidget.ConfigOptions;

        type Static = MultiselectWidget.Static;

        interface Props extends MultiselectWidget.Props {
            $lastClicked: JQuery | null;
        }

        interface Prototype extends MultiselectWidget.Prototype {
            /**
             * Get an option by its position relative to the specified item (or to the start of the
             * option array, if item is `null`). The direction in which to search through the option
             * array is specified with a number: -1 for reverse (the default) or 1 for forward. The
             * method will return an option, or `null` if there are no options in the array.
             *
             * @param item Item to describe the start position, or `null` to start at the beginning
             *   of the array.
             * @param direction Direction to move in: -1 to move backward, 1 to move forward
             * @return Item at position, `null` if there are no items in the select.
             */
            getRelativeFocusableItem(
                item: CheckboxMultioptionWidget | null,
                direction: 1 | -1,
            ): CheckboxMultioptionWidget | null;

            /**
             * Handle click events on checkboxes.
             *
             * @param e jQuery.Event
             */
            onClick(e: JQuery.Event): void;

            /**
             * Focus the widget
             *
             * @return The widget, for chaining
             */
            focus(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): CheckboxMultiselectWidget;
            prototype: Prototype;
            static: Static;
            super: MultiselectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: MultiselectWidget.Constructor;
        }
    }

    const CheckboxMultiselectWidget: CheckboxMultiselectWidget.Constructor;
}
