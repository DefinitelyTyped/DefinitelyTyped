declare namespace OO.ui {
    /**
     * OutlineSelectWidget is a structured list that contains
     * {@link OO.ui.OutlineOptionWidget outline options}
     * A set of controls can be provided with an {@link OO.ui.OutlineControlsWidget outline controls}
     * widget.
     *
     * **Currently, this class is only used by {@link OO.ui.BookletLayout booklet layouts}.**
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.OutlineSelectWidget
     */
    interface OutlineSelectWidget extends OutlineSelectWidget.Props, OutlineSelectWidget.Prototype {}

    namespace OutlineSelectWidget {
        interface ConfigOptions extends SelectWidget.ConfigOptions, mixin.TabIndexedElement.ConfigOptions {}

        type Static = SelectWidget.Static;

        interface Props extends SelectWidget.Props, mixin.TabIndexedElement.Props {}

        interface Prototype extends SelectWidget.Prototype, mixin.TabIndexedElement.Prototype {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): OutlineSelectWidget;
            prototype: Prototype;
            static: Static;
            super: SelectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectWidget.Constructor;
        }
    }

    const OutlineSelectWidget: OutlineSelectWidget.Constructor;
}
