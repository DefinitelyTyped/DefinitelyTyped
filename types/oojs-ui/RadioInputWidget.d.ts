declare namespace OO.ui {
    /**
     * RadioInputWidget creates a single radio button. Because radio buttons are usually used as a set,
     * in most cases you will want to use a {@link OO.ui.RadioSelectWidget radio select}
     * with {@link OO.ui.RadioOptionWidget radio options} instead of this class. For more information,
     * please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs).
     *
     * This widget can be used inside an HTML form, such as a OO.ui.FormLayout.
     *
     *     // An example of selected, unselected, and disabled radio inputs
     *     var radio1 = new OO.ui.RadioInputWidget( {
     *         value: 'a',
     *         selected: true
     *     } );
     *     var radio2 = new OO.ui.RadioInputWidget( {
     *         value: 'b'
     *     } );
     *     var radio3 = new OO.ui.RadioInputWidget( {
     *         value: 'c',
     *         disabled: true
     *     } );
     *     // Create a fieldset layout with fields for each radio button.
     *     var fieldset = new OO.ui.FieldsetLayout( {
     *         label: 'Radio inputs'
     *     } );
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( radio1, { label: 'Selected', align: 'inline' } ),
     *         new OO.ui.FieldLayout( radio2, { label: 'Unselected', align: 'inline' } ),
     *         new OO.ui.FieldLayout( radio3, { label: 'Disabled', align: 'inline' } ),
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.RadioInputWidget
     */
    interface RadioInputWidget extends RadioInputWidget.Props, RadioInputWidget.Prototype {}

    namespace RadioInputWidget {
        interface ConfigOptions extends InputWidget.ConfigOptions, mixin.RequiredElement.ConfigOptions {
            /** Select the radio button initially. By default, the radio button is not selected. */
            selected?: boolean;
        }

        type Static = InputWidget.Static;

        interface Props extends InputWidget.Props, mixin.RequiredElement.Props {}

        interface Prototype extends InputWidget.Prototype, mixin.RequiredElement.Prototype {
            /**
             * Set selection state of this radio button.
             *
             * @param state `true` for selected
             * @return The widget, for chaining
             */
            setSelected(state: boolean): this;

            /**
             * Check if this radio button is selected.
             *
             * @return Radio is selected
             */
            isSelected(): boolean;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RadioInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const RadioInputWidget: RadioInputWidget.Constructor;
}
