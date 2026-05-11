/**
 * Options passed to the open() method of the EyeDropper API
 */
interface ColorSelectionOptions {
    /**
     * An AbortSignal. The eyedropper selection is aborted when abort() is called on the associated AbortController.
     */
    signal?: AbortSignal;
}

/**
 * Result returned from the open() method of the EyeDropper API when a color is successfully selected
 */
interface ColorSelectionResult {
    /**
     * A string in hexadecimal sRGB format (#RRGGBB) representing the selected color
     */
    sRGBHex: string;
}

/**
 * The EyeDropper interface provides access to a browser-supplied eyedropper tool.
 * It allows users to sample colors from their screen, including content outside of the browser window.
 */
interface EyeDropper {
    /**
     * Initiates the eyedropper mode.
     * Returns a promise that resolves with the selected color when the user selects a pixel,
     * or rejects if the operation is cancelled or fails.
     *
     * @param options - Optional configuration including an AbortSignal to cancel the operation
     * @returns A promise that resolves to a ColorSelectionResult containing the selected color in sRGB hex format
     * @throws {DOMException} NotAllowedError if user activation is required but not present
     * @throws {DOMException} InvalidStateError if the eyedropper is already open
     * @throws {DOMException} AbortError if the operation is aborted via the AbortSignal
     * @throws {DOMException} OperationError if the operation fails for other reasons
     */
    open(options?: ColorSelectionOptions): Promise<ColorSelectionResult>;
}

declare var EyeDropper: {
    prototype: EyeDropper;
    /**
     * Creates a new EyeDropper instance
     */
    new(): EyeDropper;
};
