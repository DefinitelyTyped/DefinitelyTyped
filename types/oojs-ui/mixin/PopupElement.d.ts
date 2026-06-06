declare namespace OO.ui.mixin {
    /**
     * PopupElement is mixed into other classes to generate a {@link OO.ui.PopupWidget popup widget}.
     * A popup is a container for content. It is overlaid and positioned absolutely. By default, each
     * popup has an anchor, which is an arrow-like protrusion that points toward the popup’s origin.
     * See {@link OO.ui.PopupWidget PopupWidget} for an example.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.PopupElement
     */
    interface PopupElement {
        /**
         * Get popup.
         *
         * @return Popup widget
         */
        getPopup(): PopupWidget;
    }

    namespace PopupElement {
        interface ConfigOptions {
            /** Configuration to pass to popup */
            popup?: PopupWidget.ConfigOptions;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PopupElement;
            prototype: PopupElement;
            static: {};
        }
    }

    const PopupElement: PopupElement.Constructor;
}
