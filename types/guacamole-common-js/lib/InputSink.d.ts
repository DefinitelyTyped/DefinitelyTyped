/**
 * A hidden input field which attempts to keep itself focused at all times,
 * except when another input field has been intentionally focused, whether
 * programatically or by the user. The actual underlying input field, returned
 * by getElement(), may be used as a reliable source of keyboard-related events,
 * particularly composition and input events which may require a focused input
 * field to be dispatched at all.
 */
export class InputSink {
    /**
     * Attempts to focus the underlying input field. The focus attempt occurs
     * asynchronously, and may silently fail depending on browser restrictions.
     */
    focus(): void;

    /**
     * Returns the underlying input field. This input field MUST be manually
     * added to the DOM for the Guacamole.InputSink to have any effect.
     */
    getElement(): HTMLElement;
}
