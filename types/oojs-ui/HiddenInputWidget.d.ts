declare namespace OO.ui {
    /**
     * Data widget intended for creating `<input type="hidden">` inputs.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.HiddenInputWidget
     */
    interface HiddenInputWidget extends HiddenInputWidget.Props, HiddenInputWidget.Prototype {}

    namespace HiddenInputWidget {
        interface ConfigOptions extends Widget.ConfigOptions {
            /** The value of the input. */
            value?: string;
            /** The value of the input’s HTML `name` attribute. */
            name?: string;
        }

        type Static = Widget.Static;

        type Props = Widget.Props;

        type Prototype = Widget.Prototype;

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): HiddenInputWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const HiddenInputWidget: HiddenInputWidget.Constructor;
}
