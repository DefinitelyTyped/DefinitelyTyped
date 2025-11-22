// Type definitions for pdf417 0.1
// Project: https://github.com/NCR-Shi/pdf417
// Definitions by: kneecola <https://github.com/kneecola>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generates a PDF417 barcode as a base64 encoded image data URL.
 *
 * @param text - The text to encode into the barcode. The text is NOT included in the generated barcode image.
 * @param blockWidth - Width of the basic unit used for drawing the barcode in pixels. Affects the barcode's size and length-to-width ratio.
 * @param blockHeight - Height of the basic unit used for drawing the barcode in pixels. Affects the barcode's size and length-to-width ratio.
 * @returns A base64 encoded image data URL (e.g., "data:image/png;base64,...")
 *
 * @example
 * ```typescript
 * import generateBarcode from 'pdf417';
 *
 * const barcodeUrl = generateBarcode('Hello World', 2, 2);
 * // Use the URL in an img element: <img src={barcodeUrl} />
 * ```
 */
declare function generateBarcode(
    text: string,
    blockWidth: number,
    blockHeight: number
): string;

export default generateBarcode;
