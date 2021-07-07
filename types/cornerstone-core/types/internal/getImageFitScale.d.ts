/**
 * Calculates the horizontal, vertical and minimum scale factor for an image
 * @param windowSize The window size where the image is displayed. This can be any HTML element or structure with a width, height fields (e.g. canvas).
 * @param image The cornerstone image object
 * @param rotation Optional. The rotation angle of the image.
 * @return The calculated horizontal, vertical and minimum scale factor
 */
export default function _default(windowSize: {
    width: number;
    height: number;
}, image: any, rotation?: number): {
    horizontalScale: any;
    verticalScale: any;
    scaleFactor: any;
};
