declare namespace OO.ui {
    /**
     * Layouts are containers for elements and are used to arrange other widgets of arbitrary type in
     * a way that is centrally controlled and can be updated dynamically. Layouts can be, and usually
     * are, combined.
     * See {@link OO.ui.FieldsetLayout FieldsetLayout}, {@link OO.ui.FieldLayout FieldLayout},
     * {@link OO.ui.FormLayout FormLayout}, {@link OO.ui.PanelLayout PanelLayout},
     * {@link OO.ui.StackLayout StackLayout}, {@link OO.ui.PageLayout PageLayout},
     * {@link OO.ui.HorizontalLayout HorizontalLayout}, and {@link OO.ui.BookletLayout BookletLayout}
     * for more information and examples.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Layout
     */
    interface Layout extends Layout.Props, Layout.Prototype {}

    namespace Layout {
        type ConfigOptions = Element.ConfigOptions;

        type Static = Element.Static;

        type Props = Element.Props;

        interface Prototype extends Element.Prototype, EventEmitter {
            /**
             * Reset scroll offsets
             *
             * @return The layout, for chaining
             */
            resetScroll(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): Layout;
            prototype: Prototype;
            static: Static;
            super: Element.Constructor;
            /** @deprecated Use `super` instead */
            parent: Element.Constructor;
        }
    }

    const Layout: Layout.Constructor;
}
