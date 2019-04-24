/**
 * A DOM node, a selector string (which will be passed to
 * `document.querySelector()` to find the DOM node), or a function that
 * returns a DOM node.
 */
export type FocusTarget = HTMLElement | string | { (): HTMLElement };

export interface Options {
    /**
     * A function that will be called when the focus trap activates.
     */
    onActivate?: () => void;

    /**
     * A function that will be called when the focus trap deactivates.
     */
    onDeactivate?: () => void;

    /**
     * By default, when a focus trap is activated the first element in the
     * focus trap's tab order will receive focus. With this option you can
     * specify a different element to receive that initial focus.
     */
    initialFocus?: FocusTarget;

    /**
     * By default, an error will be thrown if the focus trap contains no
     * elements in its tab order. With this option you can specify a
     * fallback element to programmatically receive focus if no other
     * tabbable elements are found. For example, you may want a popover's
     * `<div>` to receive focus if the popover's content includes no
     * tabbable elements. *Make sure the fallback element has a negative
     * `tabindex` so it can be programmatically focused.*
     */
    fallbackFocus?: FocusTarget;

    /**
     * Default: `true`. If `false`, when the trap is deactivated,
     * focus will *not* return to the element that had focus before activation.
     */
    returnFocusOnDeactivate?: boolean;

    /**
     * Default: `true`. If `false`, the `Escape` key will not trigger
     * deactivation of the focus trap. This can be useful if you want
     * to force the user to make a decision instead of allowing an easy
     * way out.
     */
    escapeDeactivates?: boolean;

    /**
     * Default: `false`. If `true`, a click outside the focus trap will
     * deactivate the focus trap and allow the click event to do its thing.
     */
    clickOutsideDeactivates?: boolean;
}

export type ActivateOptions = Pick<Options, "onActivate">;

export interface DeactivateOptions extends Pick<Options, "onDeactivate"> {
    returnFocus?: boolean;
}

export interface FocusTrap {
    activate(activateOptions?: ActivateOptions): void;
    deactivate(deactivateOptions?: DeactivateOptions): void;
    pause(): void;
    unpause(): void;
}

/**
 * Returns a new focus trap on `element`.
 *
 * @param element
 *  The element to be the focus trap, or a selector that will be used to
 *  find the element.
 */
export default function focusTrap(
    element: HTMLElement | string,
    userOptions?: Options
): FocusTrap;
