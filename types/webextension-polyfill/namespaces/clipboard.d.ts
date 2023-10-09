//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.clipboard
 *
 * Offers the ability to write to the clipboard. Reading is not supported because the clipboard can already be read through
 * the standard web platform APIs.
 * Permissions: "clipboardWrite"
 */
export namespace Clipboard {
    /**
     * The type of imageData.
     */
    type SetImageDataImageTypeEnum = "jpeg" | "png";

    interface Static {
        /**
         * Copy an image to the clipboard. The image is re-encoded before it is written to the clipboard. If the image is invalid,
         * the clipboard is not modified.
         *
         * @param imageData The image data to be copied.
         * @param imageType The type of imageData.
         */
        setImageData(imageData: ArrayBuffer, imageType: SetImageDataImageTypeEnum): Promise<void>;
    }
}
