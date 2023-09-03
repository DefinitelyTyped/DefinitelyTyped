declare namespace OO.ui.mixin {
    /**
     * Element that can be automatically clipped to visible boundaries.
     *
     * Whenever the element's natural height changes, you have to call
     * {@link OO.ui.mixin.ClippableElement.clip} to make sure it's still
     * clipping correctly.
     *
     * The dimensions of {@link ClippableElement.Props.$clippableContainer $clippableContainer} will
     * be compared to the boundaries of the nearest scrollable container. If $clippableContainer is
     * too tall and/or too wide, then {@link ClippableElement.Props.$clippable $clippable} will be
     * given a fixed reduced height and/or width and will be made scrollable. By default, $clippable
     * and $clippableContainer are the same element, but you can build a static footer by setting
     * $clippableContainer to an element that contains $clippable and the footer.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.ClippableElement
     */
    interface ClippableElement extends ClippableElement.Props, ClippableElement.Prototype {}

    namespace ClippableElement {
        interface ConfigOptions {
            /**
             * Node to clip, assigned to {@link Props.$clippable $clippable},
             * omit to use {@link Element.Props.$element $element}
             */
            $clippable?: JQuery;

            /**
             * Node to keep visible, assigned to {@link Props.$clippableContainer $clippableContainer},
             * omit to use {@link $clippable}
             */
            $clippableContainer?: JQuery;
        }

        interface Props {
            $clippable: JQuery;

            $clippableContainer: JQuery;
        }

        interface Prototype {
            /**
             * Set clippable element.
             *
             * If an element is already set, it will be cleaned up before setting up the new element.
             *
             * @param $clippable Element to make clippable
             */
            setClippableElement($clippable: JQuery): void;

            /**
             * Set clippable container.
             *
             * This is the container that will be measured when deciding whether to clip. When clipping,
             * {@link Props.$clippable $clippable} will be resized in order to keep the clippable
             * container fully visible.
             *
             * If the clippable container is unset, {@link Props.$clippable $clippable} will be used.
             *
             * @param $clippableContainer Container to keep visible, or null to unset
             */
            setClippableContainer($clippableContainer: JQuery | null): void;

            /**
             * Toggle clipping.
             *
             * Do not turn clipping on until after the element is attached to the DOM and visible.
             *
             * @param clipping Enable clipping, omit to toggle
             * @return The element, for chaining
             */
            toggleClipping(clipping?: boolean): this;

            /**
             * Check if the element will be clipped to fit the visible area of the nearest scrollable
             * container.
             *
             * @return Element will be clipped to the visible area
             */
            isClipping(): boolean;

            /**
             * Check if the bottom or right of the element is being clipped by the nearest scrollable
             * container.
             *
             * @return Part of the element is being clipped
             */
            isClipped(): boolean;

            /**
             * Check if the right of the element is being clipped by the nearest scrollable container.
             *
             * @return Part of the element is being clipped
             */
            isClippedHorizontally(): boolean;

            /**
             * Check if the bottom of the element is being clipped by the nearest scrollable container.
             *
             * @return Part of the element is being clipped
             */
            isClippedVertically(): boolean;

            /**
             * Set the ideal size. These are the dimensions {@link Props.$clippable} will have when
             * it's not being clipped.
             *
             * @param width Width as a number of pixels or CSS string with unit suffix
             * @param height Height as a number of pixels or CSS string with unit suffix
             */
            setIdealSize(width?: number | string, height?: number | string): void;

            /**
             * Return the side of the clippable on which it is "anchored" (aligned to something else).
             * ClippableElement will clip the opposite side when reducing element's width.
             *
             * Classes that mix in ClippableElement should override this to return 'right' if their
             * clippable is absolutely positioned and using 'right: Npx' (and not using 'left').
             * If your class also mixes in FloatableElement, this is handled automatically.
             *
             * (This can't be guessed from the actual CSS because the computed values for
             * 'left'/'right' are always in pixels, even if they were unset or set to 'auto'.)
             *
             * When in doubt, 'left' (or 'right' in RTL) is a reasonable fallback.
             *
             * @return 'left' or 'right'
             */
            getHorizontalAnchorEdge(): "left" | "right";

            /**
             * Return the side of the clippable on which it is "anchored" (aligned to something else).
             * ClippableElement will clip the opposite side when reducing element's width.
             *
             * Classes that mix in ClippableElement should override this to return 'bottom' if their
             * clippable is absolutely positioned and using 'bottom: Npx' (and not using 'top').
             * If your class also mixes in FloatableElement, this is handled automatically.
             *
             * (This can't be guessed from the actual CSS because the computed values for 'left'/'right'
             * are always in pixels, even if they were unset or set to 'auto'.)
             *
             * When in doubt, 'top' is a reasonable fallback.
             *
             * @return 'top' or 'bottom'
             */
            getVerticalAnchorEdge(): "top" | "bottom";

            /**
             * Clip element to visible boundaries and allow scrolling when needed. You should call
             * this method when the element's natural height changes.
             *
             * Element will be clipped the bottom or right of the element is within 10px of the edge
             * of, or overlapped by, the visible area of the nearest scrollable container.
             *
             * Because calling clip() when the natural height changes isn't always possible, we also
             * set max-height when the element isn't being clipped. This means that if the element
             * tries to grow beyond the edge, something reasonable will happen before clip() is called.
             *
             * @return The element, for chaining
             */
            clip(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ClippableElement;
            prototype: Prototype;
            static: {};
        }
    }

    const ClippableElement: ClippableElement.Constructor;
}
