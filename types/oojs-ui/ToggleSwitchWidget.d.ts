declare namespace OO.ui {
    /**
     * ToggleSwitches are switches that slide on and off. Their state is represented by a Boolean
     * value (`true` for ‘on’, and `false` otherwise, the default). The ‘off’ state is represented
     * visually by a slider in the leftmost position.
     *
     *     // Toggle switches in the 'off' and 'on' position.
     *     var toggleSwitch1 = new OO.ui.ToggleSwitchWidget(),
     *         toggleSwitch2 = new OO.ui.ToggleSwitchWidget( {
     *             value: true
     *         } );
     *         // Create a FieldsetLayout to layout and label switches.
     *         fieldset = new OO.ui.FieldsetLayout( {
     *             label: 'Toggle switches'
     *         } );
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( toggleSwitch1, {
     *             label: 'Off',
     *             align: 'top'
     *         } ),
     *         new OO.ui.FieldLayout( toggleSwitch2, {
     *             label: 'On',
     *             align: 'top'
     *         } )
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToggleSwitchWidget
     */
    interface ToggleSwitchWidget extends ToggleSwitchWidget.Props, ToggleSwitchWidget.Prototype {}

    namespace ToggleSwitchWidget {
        interface ConfigOptions extends ToggleWidget.ConfigOptions, mixin.TabIndexedElement.ConfigOptions {}

        type Static = ToggleWidget.Static;

        interface Props extends ToggleWidget.Props, mixin.TabIndexedElement.Props {
            $glow: JQuery;
            $grip: JQuery;
        }

        interface Prototype extends ToggleWidget.Prototype, mixin.TabIndexedElement.Prototype {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ToggleSwitchWidget;
            prototype: Prototype;
            static: Static;
            super: ToggleWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: ToggleWidget.Constructor;
        }
    }

    const ToggleSwitchWidget: ToggleSwitchWidget.Constructor;
}
