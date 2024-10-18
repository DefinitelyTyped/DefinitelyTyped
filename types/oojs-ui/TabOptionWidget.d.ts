declare namespace OO.ui {
    /**
     * TabOptionWidget is an item in a {@link OO.ui.TabSelectWidget TabSelectWidget}.
     *
     * Currently, this class is only used by {@link OO.ui.IndexLayout index layouts}, which contain
     * {@link OO.ui.TabPanelLayout tab panel layouts}. See {@link OO.ui.IndexLayout IndexLayout}
     * for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TabOptionWidget
     */
    interface TabOptionWidget extends TabOptionWidget.Props, TabOptionWidget.Prototype {}

    namespace TabOptionWidget {
        interface ConfigOptions extends OptionWidget.ConfigOptions {
            /** Hyperlink to add to TabOption. Mostly used in OOUI PHP. */
            href?: string;
        }

        type Static = OptionWidget.Static;

        type Props = OptionWidget.Props;

        type Prototype = OptionWidget.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): TabOptionWidget;
            prototype: Prototype;
            static: Static;
            super: OptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: OptionWidget.Constructor;
        }
    }

    const TabOptionWidget: TabOptionWidget.Constructor;
}
