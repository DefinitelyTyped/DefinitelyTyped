declare namespace OO.ui.mixin {
    /**
     * ButtonElement is often mixed into other classes to generate a button, which is a clickable
     * interface element that can be configured with access keys for keyboard interaction.
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Buttons_and_Switches#Buttons)
     * for examples.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.ButtonElement
     */
    interface ButtonElement extends ButtonElement.Props, ButtonElement.Prototype {}

    namespace ButtonElement {
        /**
         * @see https://www.mediawiki.org/wiki/OOUI/Elements/Flagged#ButtonElement_and_Tool
         */
        type Flag = "progressive" | "destructive" | "primary";

        interface EventMap {
            click: [];
        }

        interface ConfigOptions {
            /**
             * The button element created by the class. If this configuration is omitted,
             * the button element will use a generated `<a>`.
             */
            $button?: JQuery;
            /** Render the button with a frame */
            framed?: boolean;
        }

        interface Static {
            /**
             * Cancel mouse down events.
             *
             * This property is usually set to `true` to prevent the focus from changing when the
             * button is clicked.
             * Classes such as {@link OO.ui.mixin.DraggableElement DraggableElement} and
             * {@link OO.ui.ButtonOptionWidget ButtonOptionWidget} use a value of `false` so that
             * dragging behavior is possible and mousedown events can be handled by a parent widget.
             */
            cancelButtonMouseDownEvents: boolean;
        }

        interface Props {
            $button: JQuery;
        }

        interface Prototype {
            /**
             * Set the button element.
             *
             * This method is used to retarget a button mixin so that its functionality applies to
             * the specified button element instead of the one created by the class. If a button
             * element is already set, the method will remove the mixin’s effect on that element.
             *
             * @param $button Element to use as button
             */
            setButtonElement($button: JQuery): void;

            /**
             * Check if button has a frame.
             *
             * @return Button is framed
             */
            isFramed(): boolean;

            /**
             * Render the button with or without a frame. Omit the `framed` parameter to toggle the
             * button frame on and off.
             *
             * @param framed Make button framed, omit to toggle
             * @return The element, for chaining
             */
            toggleFramed(framed?: boolean): this;

            // The two functions below are marked as protected in ButtonElement's doc, but are made
            // public in ButtonWidget's doc, so they are listed here.

            /**
             * Set the button's active state.
             *
             * The active state can be set on:
             *
             *  - {@link OO.ui.ButtonOptionWidget ButtonOptionWidget} when it is selected
             *  - {@link OO.ui.ToggleButtonWidget ToggleButtonWidget} when it is toggle on
             *  - {@link OO.ui.ButtonWidget ButtonWidget} when clicking the button would only refresh
             * the page
             *
             * @param value Make button active
             * @return The element, for chaining
             */
            setActive(value: boolean): this;

            /**
             * Check if the button is active
             */
            isActive(): boolean;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ButtonElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const ButtonElement: ButtonElement.Constructor;
}
