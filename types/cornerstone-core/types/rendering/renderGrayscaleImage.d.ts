/**
 * API function to draw a grayscale image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderGrayscaleImage(enabledElement: any, invalidated: boolean): void;
/**
 * API function to draw a grayscale image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @param [useAlphaChannel] - Whether or not to render the grayscale image using only the alpha channel.
 * This does not work if this layer is not the first layer in the enabledElement.
 */
export function addGrayscaleLayer(layer: any, invalidated: boolean, useAlphaChannel?: boolean): void;
