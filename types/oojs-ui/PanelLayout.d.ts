declare namespace OO.ui {
    /**
     * PanelLayouts expand to cover the entire area of their parent. They can be configured with
     * scrolling, padding, and a frame, and are often used together with
     * {@link OO.ui.StackLayout StackLayouts}.
     *
     *     // Example of a panel layout
     *     var panel = new OO.ui.PanelLayout( {
     *         expanded: false,
     *         framed: true,
     *         padded: true,
     *         $content: $( '<p>A panel layout with padding and a frame.</p>' )
     *     } );
     *     $( document.body ).append( panel.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PanelLayout
     */
    interface PanelLayout extends PanelLayout.Props, PanelLayout.Prototype {}

    namespace PanelLayout {
        interface ConfigOptions extends Layout.ConfigOptions {
            /** Allow vertical scrolling */
            scrollable?: boolean;
            /** Add padding between the content and the edges of the panel. */
            padded?: boolean;
            /** Expand the panel to fill the entire parent element. */
            expanded?: boolean;
            /** Render the panel with a frame to visually separate it from outside content. */
            framed?: boolean;
        }

        type Static = Layout.Static;

        type Props = Layout.Props;

        interface Prototype extends Layout.Prototype {
            /**
             * Focus the panel layout
             *
             * The default implementation just focuses the first focusable element in the panel
             */
            focus(): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PanelLayout;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const PanelLayout: PanelLayout.Constructor;
}
