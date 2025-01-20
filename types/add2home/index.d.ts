declare var addToHome: {
    /** Shows the popup.
     * @param {boolean} overrideChecks Override all the compatibility checks and always show the popup.
     */
    show: (overrideChecks: boolean) => void;
    /** Closes the popup. */
    close: () => void;
    /** Reset the local and session storages so the popup will show again (for automatic mode - has no affect if manually opening the popup). */
    reset: () => void;
};
