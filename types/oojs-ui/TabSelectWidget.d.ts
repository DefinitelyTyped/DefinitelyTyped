declare namespace OO.ui {
    /**
     * TabSelectWidget is a list that contains {@link OO.ui.TabOptionWidget tab options}
     *
     * **Currently, this class is only used by {@link OO.ui.IndexLayout index layouts}.**
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TabSelectWidget
     */
    interface TabSelectWidget extends TabSelectWidget.Props, TabSelectWidget.Prototype {}

    namespace TabSelectWidget {
        interface ConfigOptions extends SelectWidget.ConfigOptions, mixin.TabIndexedElement.ConfigOptions {
            /** Use framed tabs */
            framed?: boolean;
        }

        type Static = SelectWidget.Static;

        interface Props extends SelectWidget.Props, mixin.TabIndexedElement.Props {}

        interface Prototype extends SelectWidget.Prototype, mixin.TabIndexedElement.Prototype {
            /**
             * Check if tabs are framed.
             *
             * @return Tabs are framed
             */
            isFramed(): boolean;

            /**
             * Render the tabs with or without frames.
             *
             * @param framed Make tabs framed, omit to toggle
             * @return The element, for chaining
             */
            toggleFramed(framed?: boolean): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): TabSelectWidget;
            prototype: Prototype;
            static: Static;
            super: SelectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectWidget.Constructor;
        }
    }

    const TabSelectWidget: TabSelectWidget.Constructor;
}
