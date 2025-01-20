declare namespace OO.ui {
    /**
     * PopupTagMultiselectWidget is a {@link OO.ui.TagMultiselectWidget OO.ui.TagMultiselectWidget}
     * intended to use a popup. The popup can be configured to have a default input to insert values
     * into the widget.
     *
     *     // A PopupTagMultiselectWidget.
     *     var widget = new OO.ui.PopupTagMultiselectWidget();
     *     $( document.body ).append( widget.$element );
     *
     *     // Example: A PopupTagMultiselectWidget with an external popup.
     *     var popupInput = new OO.ui.TextInputWidget(),
     *         widget = new OO.ui.PopupTagMultiselectWidget( {
     *            popupInput: popupInput,
     *            popup: {
     *               $content: popupInput.$element
     *            }
     *         } );
     *     $( document.body ).append( widget.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.PopupTagMultiselectWidget
     */
    interface PopupTagMultiselectWidget extends PopupTagMultiselectWidget.Props, PopupTagMultiselectWidget.Prototype {}

    namespace PopupTagMultiselectWidget {
        interface ConfigOptions extends TagMultiselectWidget.ConfigOptions, mixin.PopupElement.ConfigOptions {
            /**
             * An overlay for the popup.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;

            /**
             * An input widget inside the popup that will be
             * focused when the popup is opened and will be used as replacement for the
             * general input in the widget.
             *
             * @deprecated
             */
            popupInput?: InputWidget;
        }

        type Static = TagMultiselectWidget.Static;

        interface Props extends TagMultiselectWidget.Props {
            $overlay: JQuery;
        }

        interface Prototype extends TagMultiselectWidget.Prototype, mixin.PopupElement {
            /**
             * Respond to popup toggle event
             *
             * @param isVisible Popup is visible
             */
            onPopupToggle(isVisible: boolean): void;

            /**
             * Respond to popup input enter event
             */
            onPopupInputEnter(): void;

            /**
             * Add a tag by the popup value.
             * Whatever is responsible for setting the value in the popup should call
             * this method to add a tag, or use the regular methods like #addTag or
             * {@link setValue} directly.
             *
             * @param data The value of item
             * @param label The label of the tag. If not given, the data is used.
             */
            addTagByPopupValue(data: string, label?: string): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): PopupTagMultiselectWidget;
            prototype: Prototype;
            static: Static;
            super: TagMultiselectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TagMultiselectWidget.Constructor;
        }
    }

    const PopupTagMultiselectWidget: PopupTagMultiselectWidget.Constructor;
}
