export interface CoordinateSystem {
    x: number;
    y: number;
}
export interface CanvasCoordinate extends CoordinateSystem {
    _canvasCoordinateBrand: string;
}
export interface PixelCoordinate extends CoordinateSystem {
    _pixelCoordinateBrand: string;
}

/**
 * Converts a point in the canvas coordinate system to the pixel coordinate system
 * system.  This can be used to reset tools' image coordinates after modifications
 * have been made in canvas space (e.g. moving a tool by a few cm, independent of
 * image resolution).
 *
 * @param element The Cornerstone element within which the input point lies
 * @param pt The input point in the canvas coordinate system
 *
 * @returns The transformed point in the pixel coordinate system
 */
export function canvasToPixel(element: HTMLElement, pt: CanvasCoordinate): PixelCoordinate;

/**
 * Converts a point in the pixel coordinate system to the canvas coordinate system
 * system.  This can be used to render using canvas context without having the weird
 * side effects that come from scaling and non square pixels
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param pt The transformed point in the pixel coordinate system
 *
 * @returns The input point in the canvas coordinate system
 */
export function pixelToCanvas(element: HTMLElement, pt: PixelCoordinate): CanvasCoordinate;

/**
 * Converts a point in the page coordinate system to the pixel coordinate
 * system
 *
 * @param element The Cornerstone element within which the input point lies
 * @param pageX The x value in the page coordinate system
 * @param pageY The y value in the page coordinate system
 *
 * @returns The transformed point in the pixel coordinate system
 */
export function pageToPixel(element: HTMLElement, pageX: number, pageY: number): PixelCoordinate;
