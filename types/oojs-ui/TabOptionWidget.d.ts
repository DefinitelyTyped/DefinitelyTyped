declare namespace OO.ui {
    interface TabOptionWidget extends TabOptionWidget.Props, TabOptionWidget.Prototype { }

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
