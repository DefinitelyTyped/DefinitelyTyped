/**
 * Render the image to the provided canvas immediately.
 * @param canvas The HTML canvas where the image will be rendered.
 * @param image An Image loaded by a Cornerstone Image Loader
 * @param [viewport = null] A set of Cornerstone viewport parameters
 * @param [options = null] Options for rendering the image (e.g. enable webgl by {renderer: 'webgl'})
 */
export default function _default(canvas: any, image: any, viewport?: any, options?: any): void;
export interface EnabledElementStub {
    /**
     * The enabled element
     */
    element: HTMLElement;
    /**
     * The current canvas
     */
    canvas: HTMLCanvasElement;
    /**
     * Currently displayed image
     */
    image: any;
    /**
     * Whether or not the image pixel data has been changed
     */
    invalid: boolean;
    /**
     * A flag for triggering a redraw of the canvas without re-retrieving the pixel data, since it remains valid
     */
    needsRedraw: boolean;
    /**
     * Layer drawing options
     */
    options: any;
    /**
     * Layers added to the EnabledElement
     */
    layers: any[];
    data: any;
    renderingTools: any;
    /**
     * The current viewport
     */
    viewport: any;
}
