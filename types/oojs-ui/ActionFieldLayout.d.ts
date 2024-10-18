declare namespace OO.ui {
    /**
     * ActionFieldLayouts are used with OO.ui.FieldsetLayout. The layout consists of a field-widget,
     * a button, and an optional label and/or help text. The field-widget (e.g., a
     * {@link OO.ui.TextInputWidget TextInputWidget}), is required and is specified before any optional
     * configuration settings.
     *
     * Labels can be aligned in one of four ways:
     *
     * - **left**: The label is placed before the field-widget and aligned with the left margin.
     *   A left-alignment is used for forms with many fields.
     * - **right**: The label is placed before the field-widget and aligned to the right margin.
     *   A right-alignment is used for long but familiar forms which users tab through,
     *   verifying the current field with a quick glance at the label.
     * - **top**: The label is placed above the field-widget. A top-alignment is used for brief forms
     *   that users fill out from top to bottom.
     * - **inline**: The label is placed after the field-widget and aligned to the left.
     *   An inline-alignment is best used with checkboxes or radio buttons.
     *
     * Help text is accessed via a help icon that appears in the upper right corner of the rendered
     * field layout when help text is specified.
     *
     *     // Example of an ActionFieldLayout
     *     var actionFieldLayout = new OO.ui.ActionFieldLayout(
     *         new OO.ui.TextInputWidget( {
     *             placeholder: 'Field widget'
     *         } ),
     *         new OO.ui.ButtonWidget( {
     *             label: 'Button'
     *         } ),
     *         {
     *             label: 'An ActionFieldLayout. This label is aligned top',
     *             align: 'top',
     *             help: 'This is help text'
     *         }
     *     );
     *
     *     $( document.body ).append( actionFieldLayout.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ActionFieldLayout
     */
    interface ActionFieldLayout<T extends Widget = Widget>
        extends ActionFieldLayout.Props, ActionFieldLayout.Prototype<T>
    {}

    namespace ActionFieldLayout {
        type ConfigOptions = FieldLayout.ConfigOptions;

        type Static = FieldLayout.Static;

        type Props = FieldLayout.Props;

        type Prototype<T extends Widget = Widget> = FieldLayout.Prototype<T>;

        interface Constructor {
            /**
             * @param fieldWidget Field widget
             * @param buttonWidget Button widget
             * @param config Configuration options
             */
            new<T extends Widget>(
                fieldWidget: T,
                buttonWidget: ButtonWidget,
                config?: ConfigOptions,
            ): ActionFieldLayout<T>;
            prototype: Prototype;
            static: Static;
            super: FieldLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: FieldLayout.Constructor;
        }
    }

    const ActionFieldLayout: ActionFieldLayout.Constructor;
}
