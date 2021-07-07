/**
 * API function to draw a label map image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderLabelMapImage(enabledElement: any, invalidated: boolean): void;
/**
 * API function to draw a pseudo-color image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function addLabelMapLayer(layer: any, invalidated: boolean): void;
