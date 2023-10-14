declare namespace OO.ui {
    /**
     * PopupButtonWidgets toggle the visibility of a contained {@link OO.ui.PopupWidget PopupWidget},
     * which is used to display additional information or options.
     *
     *     // A PopupButtonWidget.
     *     var popupButton = new OO.ui.PopupButtonWidget( {
     *         label: 'Popup button with options',
     *         icon: 'menu',
     *         popup: {
     *             $content: $( '<p>Additional options here.</p>' ),
     *             padded: true,
     *             align: 'force-left'
     *         }
     *     } );
     *     // Append the button to the DOM.
     *     $( document.body ).append( popupButton.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PopupButtonWidget
     */
    interface PopupButtonWidget extends PopupButtonWidget.Props, PopupButtonWidget.Prototype {}

    namespace PopupButtonWidget {
        interface ConfigOptions extends ButtonWidget.ConfigOptions, mixin.PopupElement.ConfigOptions {
            /**
             * Render the popup into a separate layer. This configuration is useful
             * in cases where the expanded popup is larger than its containing `<div>`. The specified
             * overlay layer is usually on top of the containing `<div>` and has a larger area.
             * By default, the popup uses relative positioning.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;
        }

        type Static = ButtonWidget.Static;

        interface Props extends ButtonWidget.Props {
            $overlay: JQuery;
        }

        interface Prototype extends ButtonWidget.Prototype, mixin.PopupElement {}

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PopupButtonWidget;
            prototype: Prototype;
            static: Static;
            super: ButtonWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: ButtonWidget.Constructor;
        }
    }

    const PopupButtonWidget: PopupButtonWidget.Constructor;
}
