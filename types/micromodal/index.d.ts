/**
 * MicroModal configuration options
 */
interface Config {
    /**
     * Custom data attribute used to identify a modal element, and to store
     * an auto-generated id when a modal is opened by element. Default is
     * data-micromodal-id.
     */
    identifier?: string | undefined;

    /** This is fired when the modal is opening. */
    onShow?: ((modal: HTMLElement, activeElement: Element | null, event: Event | null) => void) | undefined;

    /** This is fired when the modal is closing. */
    onClose?: ((modal: HTMLElement, activeElement: Element | null, event: Event | null) => void) | undefined;

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
    type MicroModalConfig = Config;

    /**
     * Binds click handlers to all modal triggers
     * @param config configuration options
     */
    function init(config?: MicroModalConfig): void;

    /**
     * Initializes a single modal and caches it without binding it to a
     * trigger, so it can later be shown with `show`.
     * @param targetModal The id or element of the modal to initialize
     * @param config configuration options
     */
    function initModal(targetModal: string | HTMLElement, config?: MicroModalConfig): void;

    /**
     * Updates the configuration of an already-initialized modal.
     * @param targetModal The id or element of the modal to reconfigure
     * @param config configuration options
     */
    function config(targetModal: string | HTMLElement, config: MicroModalConfig): void;

    /**
     * Shows a particular modal
     * @param targetModal The id or element of the modal to display
     * @param config configuration options
     */
    function show(targetModal: string | HTMLElement, config?: MicroModalConfig): void;

    /**
     * Closes a particular modal, or the most recently opened modal when
     * no modal is given.
     * @param targetModal The id or element of the modal to close
     */
    function close(targetModal?: string | HTMLElement): void;

    /**
     * Closes every open modal.
     */
    function closeAll(): void;

    /**
     * Closes the modal if it is open and discards its cached instance, so
     * the next `show` re-resolves the modal element. Useful when the
     * modal's DOM element is recreated between opens.
     * @param targetModal The id or element of the modal to remove
     */
    function removeModal(targetModal: string | HTMLElement): void;
}

// Upstream ships a UMD module {init, ...} and an ES module {default: {init, ...}}.
// eslint-disable-next-line @definitelytyped/export-just-namespace
export = MicroModal;
export as namespace MicroModal;
