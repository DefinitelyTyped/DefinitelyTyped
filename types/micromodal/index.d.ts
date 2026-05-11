/**
 * MicroModal configuration options
 */
export interface MicroModalConfig {
    /** This is fired when the modal is opening. */
    onShow?: ((modal?: HTMLElement) => void) | undefined;

    /** This is fired when the modal is closing. */
    onClose?: ((modal?: HTMLElement) => void) | undefined;

    /** Custom data attribute to open modal. Default is data-micromodal-trigger. */
    openTrigger?: string | undefined;

    /** Custom data attribute to close modal. Default is data-micromodal-close. */
    closeTrigger?: string | undefined;

    /** Custom class to be applied when modal is open. Default class is is-open. */
    openClass?: string | undefined;

    /** This disables scrolling on the page while the modal is open. The default value is false. */
    disableScroll?: boolean | undefined;

    /** Disable auto focus on first focusable element. Default is false */
    disableFocus?: boolean | undefined;

    /**
     * Set this to true if using css animations to open the modal.
     * This allows it to wait for the animation to finish before focusing on an element inside the modal. Default is false
     */
    awaitOpenAnimation?: boolean | undefined;

    /**
     * Set this to true if using css animations to hide the modal.
     * This allows it to wait for the animation to finish before removing it from the DOM. Default is false
     */
    awaitCloseAnimation?: boolean | undefined;

    /** This option suppresses the console warnings if passed as true. The default value is false. */
    debugMode?: boolean | undefined;
}

/**
 * MicroModal controller
 */
declare namespace MicroModal {
    /**
     * Binds click handlers to all modal triggers
     * @param config configuration options
     */
    function init(config?: MicroModalConfig): void;

    /**
     * Shows a particular modal
     * @param targetModal The id of the modal to display
     * @param config configuration options
     */
    function show(targetModal: string, config?: MicroModalConfig): void;

    /**
     * Closes the active modal
     */
    function close(targetModal?: string): void;
}

export default MicroModal;
