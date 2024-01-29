declare namespace OO.ui.mixin {
    /**
     * Element that will stick adjacent to a specified container, even when it is inserted elsewhere
     * in the document (for example, in an OO.ui.Window's $overlay).
     *
     * The elements's position is automatically calculated and maintained when window is resized or the
     * page is scrolled. If you reposition the container manually, you have to call {@link position} to make
     * sure the element is still placed correctly.
     *
     * As positioning is only possible when both the element and the container are attached to the DOM
     * and visible, it's only done after you call {@link togglePositioning}. You might want to do this inside
     * the toggle method to display a floating popup, for example.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.FloatableElement
     */
    interface FloatableElement extends FloatableElement.Props, FloatableElement.Prototype {}

    namespace FloatableElement {
        type VerticalPosition = "below" | "above" | "top" | "bottom" | "center";

        type HorizontalPosition = "before" | "after" | "start" | "end" | "center";

        interface ConfigOptions {
            /**
             * Node to position, assigned to {@link Props.$floatable $floatable}, omit to use
             * {@link Element.Props.$element $element}
             */
            $floatable?: JQuery;

            /** Node to position adjacent to */
            $floatableContainer?: JQuery;

            /**
             * Where to position {@link $floatable} vertically:
             * - 'below': Directly below {@link $floatableContainer}, aligning f's top edge with fC's bottom edge
             * - 'above': Directly above $floatableContainer, aligning f's bottom edge with fC's top edge
             * - 'top': Align the top edge with $floatableContainer's top edge
             * - 'bottom': Align the bottom edge with $floatableContainer's bottom edge
             * - 'center': Vertically align the center with $floatableContainer's center
             */
            verticalPosition?: VerticalPosition;

            /**
             * Where to position {@link $floatable} horizontally:
             * - 'before': Directly before {@link $floatableContainer}, aligning f's end edge with fC's start edge
             * - 'after': Directly after $floatableContainer, aligning f's start edge with fC's end edge
             * - 'start': Align the start (left in LTR, right in RTL) edge with $floatableContainer's start edge
             * - 'end': Align the end (right in LTR, left in RTL) edge with $floatableContainer's end edge
             * - 'center': Horizontally align the center with $floatableContainer's center
             */
            horizontalPosition?: HorizontalPosition;

            /** Whether to hide the floatable element if the container is out of view */
            hideWhenOutOfView?: boolean;
        }

        interface Props {
            $floatable: JQuery;

            $floatableContainer: JQuery;
        }

        interface Prototype {
            /**
             * Set floatable element.
             *
             * If an element is already set, it will be cleaned up before setting up the new element.
             *
             * @param $floatable Element to make floatable
             */
            setFloatableElement($floatable: JQuery): void;

            /**
             * Set floatable container.
             *
             * The element will be positioned relative to the specified container.
             *
             * @param $floatableContainer Container to keep visible, or null to unset
             */
            setFloatableContainer($floatableContainer: JQuery | null): void;

            /**
             * Change how the element is positioned vertically.
             *
             * @param position 'below', 'above', 'top', 'bottom' or 'center'
             */
            setVerticalPosition(position: VerticalPosition): void;

            /**
             * Change how the element is positioned horizontally.
             *
             * @param position 'before', 'after', 'start', 'end' or 'center'
             */
            setHorizontalPosition(position: HorizontalPosition): void;

            /**
             * Toggle positioning.
             *
             * Do not turn positioning on until after the element is attached to the DOM and visible.
             *
             * @param positioning Enable positioning, omit to toggle
             * @return The element, for chaining
             */
            togglePositioning(positioning?: boolean): this;

            /**
             * Check if the floatable is hidden to the user because it was offscreen.
             *
             * @return Floatable is out of view
             */
            isFloatableOutOfView(): boolean;

            /**
             * Position the floatable below its container.
             *
             * This should only be done when both of them are attached to the DOM and visible.
             *
             * @return The element, for chaining
             */
            position(): this;

            /**
             * Compute how {@link Props.$floatable $floatable} should be positioned based on the
             * position of {@link Props.$floatableContainer $floatableContainer} and the positioning
             * settings. This is a helper for {@link position} that shouldn't be called directly,
             * but may be overridden by subclasses if they want to change or add to the positioning
             * logic.
             *
             * @return New position to apply with {@link JQueryStatic.css() .css()}.
             * Keys are 'top', 'left', 'bottom' and 'right'.
             */
            computePosition(): Record<"top" | "left" | "bottom" | "right", number | "">;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): FloatableElement;
            prototype: Prototype;
            static: {};
        }
    }

    const FloatableElement: FloatableElement.Constructor;
}
