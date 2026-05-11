/**
 * Calculate the transform for a Cornerstone enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element
 * @param [scale] The viewport scale
 * @return The current transform
 */
declare function calculateTransform(enabledElement: any, scale?: number): Transform;
/**
 * Internal API function to draw an image to a given enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param [invalidated = false] - true if pixel data has been invalidated and cached rendering should not be used
 */
export function drawImage(enabledElement: any, invalidated?: boolean): void;
/**
 * Creates a LUT used while rendering to convert stored pixel values to
 * display pixels
 *
 * @param image A Cornerstone Image Object
 * @param windowWidth The Window Width
 * @param windowCenter The Window Center
 * @param invert A boolean describing whether or not the image has been inverted
 * @param [modalityLUT] A modality Lookup Table
 * @param [voiLUT] A Volume of Interest Lookup Table
 *
 * @returns A lookup table to apply to the image
 */
export function generateLut(
    image: Image,
    windowWidth: number,
    windowCenter: number,
    invert: boolean,
    modalityLUT?: any[],
    voiLUT?: any[],
): Uint8ClampedArray;
/**
 * Creates a new viewport object containing values for the image and canvas
 *
 * @param canvas A Canvas DOM element
 * @param image A Cornerstone Image Object
 * @returns viewport object
 */
export function getDefaultViewport(
    canvas: HTMLElement,
    image: new(width?: number, height?: number) => HTMLImageElement,
): any;
export function getTransform(enabledElement: any): Transform;
/**
 * Polyfills requestAnimationFrame for older browsers.
 *
 * @param callback A parameter specifying a function to call when it's time to update your animation for the next repaint.
 * The callback has one single argument, a DOMHighResTimeStamp, which indicates the current time (the time returned from performance.now() ) for when requestAnimationFrame starts to fire callbacks.
 *
 * @return A long integer value, the request id, that uniquely identifies the entry in the callback list. This is a non-zero value, but you may not make any other assumptions about its value.
 * You can pass this value to window.cancelAnimationFrame() to cancel the refresh callback request.
 */
export function requestAnimationFrame(callback: (timestamp: number) => void): number;

/**
 * Sets new values for `getDefaultViewport`
 *
 * @param viewport - Object that sets new values for getDefaultViewport
 */
export function setDefaultViewport(viewport: Viewport): void;
/**
 * Converts stored color pixel values to display pixel values using a LUT.
 *
 * Note: Skips alpha value for any input image pixel data.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 */
export function storedColorPixelDataToCanvasImageData(
    image: new(width?: number, height?: number) => HTMLImageElement,
    lut: any[],
    canvasImageDataData: Uint8ClampedArray,
): void;
/**
 * This function transforms stored pixel values into a canvas image data buffer
 * by using a LUT.  This is the most performance sensitive code in cornerstone and
 * we use a special trick to make this go as fast as possible.  Specifically we
 * use the alpha channel only to control the luminance rather than the red, green and
 * blue channels which makes it over 3x faster. The canvasImageDataData buffer needs
 * to be previously filled with white pixels.
 *
 * NOTE: Attribution would be appreciated if you use this technique!
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageData(
    image: new(width?: number, height?: number) => HTMLImageElement,
    lut: any[],
    canvasImageDataData: Uint8ClampedArray,
): void;
/**
 * @param image A Cornerstone Image Object
 * @param colorLut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageDataColorLUT(
    image: new(width?: number, height?: number) => HTMLImageElement,
    colorLut: any,
    canvasImageDataData: Uint8ClampedArray,
): void;

/**
 * @param image A Cornerstone Image Object
 * @param grayscaleLut Lookup table array
 * @param colorLut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageDataPseudocolorLUT(
    image: Image,
    grayscaleLut: any[],
    colorLut: any,
    canvasImageDataData: Uint8ClampedArray,
): void;
/**
 * This function transforms stored pixel values into a canvas image data buffer
 * by using a LUT.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 */
declare function storedPixelDataToCanvasImageDataRGBA(
    image: new(width?: number, height?: number) => HTMLImageElement,
    lut: any[],
    canvasImageDataData: Uint8ClampedArray,
): void;
declare class Transform {
    reset(): void;
    m: number[];
    clone(): Transform;
    multiply(matrix: any): void;
    invert(): void;
    rotate(rad: any): void;
    translate(x: any, y: any): void;
    scale(sx: any, sy: any): void;
    transformPoint(
        px: any,
        py: any,
    ): {
        x: any;
        y: any;
    };
}

export namespace internal {
    export { drawImage };
    export { generateLut };
    export { getDefaultViewport };
    export { requestAnimationFrame };
    export { setDefaultViewport };
    export { storedPixelDataToCanvasImageData };
    export { storedPixelDataToCanvasImageDataRGBA };
    export { storedPixelDataToCanvasImageDataColorLUT };
    export { storedPixelDataToCanvasImageDataPseudocolorLUT };
    export { storedColorPixelDataToCanvasImageData };
    export { getTransform };
    export { calculateTransform };
    export { Transform };
}

/**
 * API function to render a color image to an enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderColorImage(enabledElement: any, invalidated: boolean): void;
export function addColorLayer(layer: any, invalidated: any): void;
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
/**
 * API function to draw a pseudo-color image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderPseudoColorImage(enabledElement: any, invalidated: boolean): void;
/**
 * API function to draw a pseudo-color image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function addPseudoColorLayer(layer: any, invalidated: boolean): void;
/**
 * Render the image to the provided canvas immediately.
 * @param canvas The HTML canvas where the image will be rendered.
 * @param image An Image loaded by a Cornerstone Image Loader
 * @param [viewport = null] A set of Cornerstone viewport parameters
 * @param [options = null] Options for rendering the image (e.g. enable webgl by {renderer: 'webgl'})
 */
export function renderToCanvas(canvas: any, image: any, viewport?: any, options?: any): void;
/**
 * API function to draw a standard web image (PNG, JPG) to an enabledImage
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated - true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderWebImage(enabledElement: any, invalidated: boolean): void;

/**
 * Sets a new image object for a given element.
 *
 * Will also apply an optional viewport setting.
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param image An Image loaded by a Cornerstone Image Loader
 * @param [viewport] A set of Cornerstone viewport parameters
 */
export function displayImage(element: HTMLElement, image: Image, viewport?: Viewport): void;

/**
 * Draws all invalidated enabled elements and clears the invalid flag after drawing it
 */
export function drawInvalidated(): void;

/**
 * Immediately draws the enabled element
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function draw(element: HTMLElement): void;

/**
 * Sets the invalid flag on the enabled element and fires an event
 *
 * @param element The DOM element enabled for Cornerstone
 */
export function invalidate(element: HTMLElement): void;

/**
 * Forces the image to be updated/redrawn for all enabled elements
 * displaying the specified imageId
 *
 * @param imageId The imageId of the Cornerstone Image Object to redraw
 */
export function invalidateImageId(imageId: string): void;

/**
 * Forces the image to be updated/redrawn for the specified enabled element
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param [invalidated=false] Whether or not the image pixel data has been changed, necessitating a redraw
 */
export function updateImage(element: HTMLElement, invalidated?: boolean): void;
/**
 * Enable an HTML Element for use in Cornerstone
 *
 * - If there is a Canvas already present within the HTMLElement, and it has the class
 * 'cornerstone-canvas', this function will use this existing Canvas instead of creating
 * a new one. This may be helpful when using libraries (e.g. React, Vue) which don't
 * want third parties to change the DOM.
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param options Options for the enabledElement
 */
export function enable(
    element: HTMLElement,
    options?: {
        renderer?: "webgl";
    },
): void;

/**
 *  Disable an HTML element for further use in Cornerstone
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function disable(element: HTMLElement): void;
/**
 * Retrieves any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 * @returns Whatever data is stored for this enabled element
 */
export function getElementData(element: HTMLElement, dataType: string): any;
/**
 * Clears any data for a Cornerstone enabledElement for a specific string
 * dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 */
export function removeElementData(element: HTMLElement, dataType: string): void;

/**
 * Rescale the target layer to the base layer based on the
 * relative size of each image and their pixel dimensions.
 *
 * This function will update the Viewport parameters of the
 * target layer to a new scale.
 *
 * @param baseLayer The base layer
 * @param targetLayer The target layer to rescale
 */
export function rescaleImage(baseLayer: EnabledElementLayer, targetLayer: EnabledElementLayer): void;
/**
 * Add a layer to a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image A Cornerstone Image object to add as a new layer
 * @param options Options for the layer
 *
 * @returns layerId The new layer's unique identifier
 */
export function addLayer(element: HTMLElement, image: Image, options: EnabledElementLayer["options"]): string;
/**
 * Remove a layer from a Cornerstone element given a layer ID
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 */
export function removeLayer(element: HTMLElement, layerId: string): void;
/**
 * Retrieve a layer from a Cornerstone element given a layer ID
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 * @return The layer
 */
export function getLayer(element: HTMLElement, layerId: string): EnabledElementLayer;
/**
 * Retrieve all layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 *
 * @return An array of layers
 */
export function getLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Retrieve all visible layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 *
 * @return An array of layers
 */
export function getVisibleLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Set the active layer for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 */
export function setActiveLayer(element: HTMLElement, layerId: string): void;
/**
 * Set a new image for a specific layerId
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image The image to be displayed in this layer
 * @param [layerId] The unique identifier for the layer
 */
export function setLayerImage(element: HTMLElement, image: Image, layerId?: string): void;
/**
 * Retrieve the currently active layer for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @return The currently active layer
 */
export function getActiveLayer(element: HTMLElement): EnabledElementLayer;
/**
 * Purge the layers
 *
 * @param element The DOM element enabled for Cornerstone
 */
export function purgeLayers(element: HTMLElement): void;

/**
 * Retrieves a Cornerstone Enabled Element object
 *
 * @param element An HTML Element enabled for Cornerstone
 *
 * @returns A Cornerstone Enabled Element
 */
export function getEnabledElement(element: HTMLElement): EnabledElement;
/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param enabledElement A Cornerstone enabledElement Object
 */
export function addEnabledElement(enabledElement: EnabledElement): void;
/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param imageId A Cornerstone Image ID
 * @returns An Array of Cornerstone enabledElement Objects
 */
export function getEnabledElementsByImageId(imageId: string): EnabledElement[];
/**
 * Retrieve all of the currently enabled Cornerstone elements
 *
 * @return An Array of Cornerstone enabledElement Objects
 */
export function getEnabledElements(): EnabledElement[];

/**
 * A two-dimensional vector
 */
export interface vec2 {
    /** The x distance */
    x: number;
    /** The y distance */
    y: number;
}

/**
 * VOI
 */
export interface VOI {
    /** Window Width for display */
    windowWidth: number;
    /** Window Center for display */
    windowCenter: number;
}

/**
 * Lookup Table Array
 */
export interface LUT {
    firstValueMapped: number;
    numBitsPerEntry: number;
    lut: any[];
}

/**
 * Image Statistics Object
 */
export interface ImageStats {
    /** The time in ms taken to retrieve stored pixels required to draw the image */
    lastGetPixelDataTime?: number;
    /** The time in ms taken to map from stored pixel array to canvas pixel array */
    lastStoredPixelDataToCanvasImageDataTime?: number;
    /** The time in ms taken for putImageData to put the canvas pixel data into the canvas context */
    lastPutImageDataTime?: number;
    /** The total time in ms taken for the entire rendering function to run */
    lastRenderTime?: number;
    /** The time in ms taken to generate the lookup table for the image */
    lastLutGenerateTime?: number;
}

/**
 * An Image Object in Cornerstone
 */
export interface Image {
    /** The imageId associated with this image object */
    imageId: string;
    /** the minimum stored pixel value in the image */
    minPixelValue: number;
    /** the maximum stored pixel value in the image */
    maxPixelValue: number;
    /** the rescale slope to convert stored pixel values to modality pixel values or 1 if not specified */
    slope: number;
    /** the rescale intercept used to convert stored pixel values to modality values or 0 if not specified */
    intercept: number;
    /** the default windowCenter to apply to the image */
    windowCenter: number;
    /** the default windowWidth to apply to the image */
    windowWidth: number;
    /** a function that returns the underlying pixel data. An array of integers for grayscale and an array of RGBA for color */
    getPixelData: () => number[];
    /** a function that returns a canvas imageData object for the image. This is only needed for color images */
    getImageData: () => ImageData;
    /** a function that returns a canvas element with the image loaded into it. This is only needed for color images. */
    getCanvas: () => HTMLCanvasElement;
    /** a function that returns a JavaScript Image object with the image data. This is optional and typically used for images encoded in standard web JPEG and PNG formats */
    getImage: () => HTMLImageElement;
    /** number of rows in the image. This is the same as height but duplicated for convenience */
    rows: number;
    /** number of columns in the image. This is the same as width but duplicated for convenience */
    columns: number;
    /** the height of the image. This is the same as rows but duplicated for convenience */
    height: number;
    /** the width of the image. This is the same as columns but duplicated for convenience */
    width: number;
    /** true if pixel data is RGB, false if grayscale */
    color: boolean;
    /** The Lookup Table */
    lut: LUT;
    /** Is the color pixel data stored in RGBA? */
    rgba: boolean;
    /** horizontal distance between the middle of each pixel (or width of each pixel) in mm or undefined if not known */
    columnPixelSpacing: number;
    /** vertical distance between the middle of each pixel (or height of each pixel) in mm or undefined if not known */
    rowPixelSpacing: number;
    /**
     * true if the the image should initially be displayed be inverted, false if not.
     * This is here mainly to support DICOM images with a photometric interpretation of MONOCHROME1
     */
    invert: boolean;
    /** the number of bytes used to store the pixels for this image. */
    sizeInBytes: number;
    /** Whether or not the image has undergone false color mapping */
    falseColor?: boolean;
    /** Original pixel data for an image after it has undergone false color mapping */
    origPixelData?: number[];
    /** Statistics for the last redraw of the image */
    stats?: ImageStats;
    /** Cached Lookup Table for this image. */
    cachedLut: LUT;
    /**
     * @deprecated Use viewport.colormap instead.
     *
     * an optional colormap ID or colormap object (from colors/colormap.js). This will be applied during rendering to convert the image to pseudocolor
     */
    colormap?: unknown;
    /** whether or not to render this image as a label map (i.e. skip modality and VOI LUT pipelines and use only a color lookup table) */
    labelmap?: boolean;
}

/**
 * A Viewport Settings Object Cornerstone
 */
export interface Viewport {
    /**
     * The scale applied to the image. A scale of 1.0 will display no zoom (one image pixel takes up one screen pixel).
     * A scale of 2.0 will be double zoom and a scale of .5 will be zoomed out by 2x
     */
    scale?: number;
    /**
     * An object with properties x and y which describe the translation to apply in the pixel coordinate system.
     * Note that the image is initially displayed centered in the enabled element with a x and y translation of 0 and 0 respectively.
     */
    translation?: vec2;
    /** an object with properties windowWidth and windowCenter. */
    voi?: VOI;
    /** Whether or not the image is inverted. */
    invert?: boolean;
    /** true if the image smooth / interpolation should be used when zoomed in on the image or false if pixel replication should be used. */
    pixelReplication?: boolean;
    /** true if the image is flipped horizontally. Default is false */
    hflip?: boolean;
    /** true if the image is flipped vertically. Default is false */
    vflip?: boolean;
    /** the rotation of the image (90 degree increments). Default is 0 */
    rotation?: number;
    /** the modality LUT to apply or undefined if none */
    modalityLUT?: LUT;
    /** the modality LUT to apply or undefined if none */
    voiLUT?: LUT;
    /** an optional colormap ID or colormap object (from colors/colormap.js). This will be applied during rendering to convert the image to pseudocolor */
    colormap?: unknown;
    /** whether or not to render this image as a label map (i.e. skip modality and VOI LUT pipelines and use only a color lookup table) */
    labelmap?: boolean;
}

/**
 * An Enabled Element in Cornerstone
 */
export interface EnabledElement {
    /** The DOM element which has been enabled for use by Cornerstone */
    element: HTMLElement;
    /** The image currently displayed in the enabledElement */
    image?: Image;
    /** The current viewport settings of the enabledElement */
    viewport?: Viewport;
    /** The current canvas for this enabledElement */
    canvas?: HTMLCanvasElement;
    /** Whether or not the image pixel data underlying the enabledElement has been changed, necessitating a redraw */
    invalid: boolean;
    /** A flag for triggering a redraw of the canvas without re-retrieving the pixel data, since it remains valid */
    needsRedraw: boolean;
    /** The layers that have been added to the enabledElement */
    layers?: EnabledElementLayer[];
    /** Whether or not to synchronize the viewport parameters for each of the enabled element's layers */
    syncViewports?: boolean;
    /** The previous state for the sync viewport boolean */
    lastSyncViewportsState?: boolean;
}

/**
 * An Enabled Element Layer in Cornerstone
 */
export interface EnabledElementLayer {
    /** The DOM element which has been enabled for use by Cornerstone */
    element: HTMLElement;
    /** The image currently displayed in the enabledElement */
    image?: Image;
    /** The current viewport settings of the enabledElement */
    viewport?: Viewport;
    /** The current canvas for this enabledElement */
    canvas?: HTMLCanvasElement;
    /** Layer drawing options */
    options?: {
        viewport?: Viewport;
        visible?: boolean;
        opacity?: number;
    };
    /** Whether or not the image pixel data underlying the enabledElement has been changed, necessitating a redraw */
    invalid: boolean;
    /** A flag for triggering a redraw of the canvas without re-retrieving the pixel data, since it remains valid */
    needsRedraw: boolean;
}

/**
 * An Image Load Object
 */
export interface ImageLoadObject {
    /** The Promise tracking the loading of this image */
    promise: Promise<Image>;
    /** A function to cancel the image load request */
    cancelFn?: () => void;
}
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

/**
 * Retrieves the viewport for the specified enabled element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns The Cornerstone Viewport settings for this element, if they exist. Otherwise, undefined
 */
export function getViewport(element: HTMLElement): Required<Viewport> | undefined;

/**
 * Sets/updates viewport of a given enabled element
 *
 * @param element - DOM element of the enabled element
 * @param [viewport] - Object containing the viewport properties
 */
export function setViewport(element: HTMLElement, viewport?: Viewport): void;
export const events: EventTarget;
export namespace EVENTS {
    const NEW_IMAGE: string;
    const INVALIDATED: string;
    const PRE_RENDER: string;
    const IMAGE_CACHE_MAXIMUM_SIZE_CHANGED: string;
    const IMAGE_CACHE_PROMISE_REMOVED: string;
    const IMAGE_CACHE_FULL: string;
    const IMAGE_CACHE_CHANGED: string;
    const WEBGL_TEXTURE_REMOVED: string;
    const WEBGL_TEXTURE_CACHE_FULL: string;
    const IMAGE_LOADED: string;
    const IMAGE_LOAD_FAILED: string;
    const ELEMENT_RESIZED: string;
    const IMAGE_RENDERED: string;
    const LAYER_ADDED: string;
    const LAYER_REMOVED: string;
    const ACTIVE_LAYER_CHANGED: string;
    const ELEMENT_DISABLED: string;
    const ELEMENT_ENABLED: string;
}
/**
 * EventTarget - Provides the [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface
 */
declare class EventTarget {
    listeners: {};
    namespaces: {};
    addEventNamespaceListener(type: any, callback: any): void;
    removeEventNamespaceListener(type: any): void;
    addEventListener(type: any, callback: any): void;
    removeEventListener(type: any, callback: any): void;
    dispatchEvent(event: any): boolean;
}
/**
 * Convert an image to a false color image
 *
 * @param image A Cornerstone Image Object
 * @param colormap - it can be a colormap object or a colormap id (string)
 *
 * @returns - Whether or not the image has been converted to a false color image
 */
export function convertImageToFalseColorImage(
    image: new(width?: number, height?: number) => HTMLImageElement,
    colormap: unknown,
): boolean;
/**
 * Convert the image of a element to a false color image
 *
 * @param element The Cornerstone element
 * @param colormap - it can be a colormap object or a colormap id (string)
 */
export function convertToFalseColorImage(element: HTMLElement, colormap: any): void;
/**
 * Restores a false color image to its original version
 *
 * @param image A Cornerstone Image Object
 * @returns True if the image object had a valid restore function, which was run. Otherwise, false.
 */
export function restoreImage(image: new(width?: number, height?: number) => HTMLImageElement): boolean;
/**
 * Adjusts an image's scale and translation so the image is centered and all pixels
 * in the image are viewable.
 *
 * @param element The Cornerstone element to update
 */
export function fitToWindow(element: HTMLElement): void;

/**
 * Returns a default viewport for display the specified image on the specified
 * enabled element.  The default viewport is fit to window
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image A Cornerstone Image Object
 *
 * @returns The default viewport for the image
 */
export function getDefaultViewportForImage(element: HTMLElement, image: Image): Required<Viewport>;

/**
 * Returns the currently displayed image for an element or undefined if no image has
 * been displayed yet
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns The Cornerstone Image Object displayed in this element
 */
export function getImage(element: HTMLElement): Image;
/**
 * Retrieves an array of pixels from a rectangular region with modality LUT transformation applied
 *
 * @param element The DOM element enabled for Cornerstone
 * @param x The x coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param y The y coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param width The width of the of the sampling rectangle in image coordinates
 * @param height The height of the of the sampling rectangle in image coordinates
 * @returns The modality pixel value of the pixels in the sampling rectangle
 */
export function getPixels(element: HTMLElement, x: number, y: number, width: number, height: number): number[];
/**
 * Retrieves an array of stored pixel values from a rectangular region of an image
 *
 * @param element The DOM element enabled for Cornerstone
 * @param x The x coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param y The y coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param width The width of the of the sampling rectangle in image coordinates
 * @param height The height of the of the sampling rectangle in image coordinates
 * @returns The stored pixel value of the pixels in the sampling rectangle
 */
export function getStoredPixels(element: HTMLElement, x: number, y: number, width: number, height: number): number[];

export namespace imageCache {
    /**
     * Sets the maximum size of cache and purges cache contents if necessary.
     *
     * @param numBytes The maximun size that the cache should occupy.
     */
    function setMaximumSizeBytes(numBytes: number): void;
    /**
     * Puts a new image loader into the cache
     *
     * @param imageId ImageId of the image loader
     * @param imageLoadObject The object that is loading or loaded the image
     */
    function putImageLoadObject(imageId: string, imageLoadObject: ImageLoadObject): void;
    /**
     * Retuns the object that is loading a given imageId
     *
     * @param imageId Image ID
     */
    function getImageLoadObject(imageId: string): void;
    /**
     * Removes the image loader associated with a given Id from the cache
     *
     * @param imageId Image ID
     */
    function removeImageLoadObject(imageId: string): void;

    interface CacheInformation {
        /**
         * The maximum size of the cache in bytes
         */
        maximumSizeInBytes: number;
        /**
         * Currently occupied space in the cache in bytes
         */
        cacheSizeInBytes: number;
        /**
         * Number of ImageLoaders in the cache
         */
        numberOfImagesCached: number;
    }
    /**
     * Gets the current state of the cache
     */
    function getCacheInfo(): void;
    /**
     * Removes all images from cache
     */
    function purgeCache(): void;
    /**
     * Updates the space than an image is using in the cache
     *
     * @param imageId Image ID
     * @param newCacheSize New image size
     */
    function changeImageIdCacheSize(imageId: string, newCacheSize: number): void;
    const cachedImages: any[];
    const imageCache: {};
}

export namespace metaData {
    type Provider = (type: string, imageId: string) => any;
    /**
     * Adds a metadata provider with the specified priority
     * @param provider Metadata provider function
     * @param [priority=0] - 0 is default/normal, > 0 is high, < 0 is low
     */
    function addProvider(provider: Provider, priority?: number): void;
    /**
     * Removes the specified provider
     *
     * @param provider Metadata provider function
     */
    function removeProvider(provider: Provider): void;
    /**
     * Gets metadata from the registered metadata providers.  Will call each one from highest priority to lowest
     * until one responds
     *
     * @param type The type of metadata requested from the metadata store
     * @param imageId The Cornerstone Image Object's imageId
     *
     * @returns The metadata retrieved from the metadata store
     */
    function get(type: string, imageId: string): any;
}

export namespace webGL {
    const isWebGLInitialized: boolean;
}

export namespace colors {
    /**
     * Return all available colormaps (id and name)
     * @returns An array of colormaps with an object containing the "id" and display "name"
     */
    function getColormapsList(): Array<{
        id: any;
        key: any;
    }>;
    /**
     * Return a colorMap object with the provided id and colormapData
     * if the Id matches existent colorMap objects (check colormapsData) the colormapData is ignored.
     * if the colormapData is not empty, the colorMap will be added to the colormapsData list. Otherwise, an empty colorMap object is returned.
     * @param id The ID of the colormap
     * @param colormapData - An object that can contain a name, numColors, gama, segmentedData and/or colors
     * @returns The Colormap Object
     */
    function getColormap(id: string, colormapData: any): any;

    /**
     * Maps scalar values into colors via a lookup table
     * LookupTable is an object that is used by mapper objects to map scalar values into rgba (red-green-blue-alpha transparency) color specification,
     * or rgba into scalar values. The color table can be created by direct insertion of color values, or by specifying hue, saturation, value, and alpha range and generating a table
     */
    class LookupTable {
        NumberOfColors: number;
        Ramp: string;
        TableRange: number[];
        HueRange: number[];
        SaturationRange: number[];
        ValueRange: number[];
        AlphaRange: number[];
        NaNColor: number[];
        BelowRangeColor: number[];
        UseBelowRangeColor: boolean;
        AboveRangeColor: number[];
        UseAboveRangeColor: boolean;
        InputRange: number[];
        Table: any[];
        /**
         * Specify the number of values (i.e., colors) in the lookup table.
         * @param number The number of colors in he LookupTable
         */
        setNumberOfTableValues(number: number): void;
        /**
         * Set the shape of the table ramp to either 'linear', 'scurve' or 'sqrt'
         * @param ramp A string value representing the shape of the table. Allowed values are 'linear', 'scurve' or 'sqrt'
         */
        setRamp(ramp: string): void;
        /**
         * Sets the minimum/maximum scalar values for scalar mapping.
         * Scalar values less than minimum range value are clamped to minimum range value.
         * Scalar values greater than maximum range value are clamped to maximum range value.
         * @param start A double representing the minimum scaler value of the LookupTable
         * @param end A double representing the maximum scaler value of the LookupTable
         */
        setTableRange(start: number, end: any): void;
        /**
         * Set the range in hue (using automatic generation). Hue ranges between [0,1].
         * @param start A double representing the minimum hue value in a range. Min. is 0
         * @param end A double representing the maximum hue value in a range. Max. is 1
         */
        setHueRange(start: number, end: number): void;
        /**
         * Set the range in saturation (using automatic generation). Saturation ranges between [0,1].
         * @param start A double representing the minimum Saturation value in a range. Min. is 0
         * @param end A double representing the maximum Saturation value in a range. Max. is 1
         */
        setSaturationRange(start: number, end: number): void;
        /**
         * Set the range in value (using automatic generation). Value ranges between [0,1].
         * @param start A double representing the minimum value in a range. Min. is 0
         * @param end A double representing the maximum value in a range. Max. is 1
         */
        setValueRange(start: any, end: any): void;
        /**
         * (Not Used) Sets the range of scalars which will be mapped.
         * @param start the minimum scalar value in the range
         * @param end the maximum scalar value in the range
         */
        setRange(start: number, end: number): void;
        /**
         * Set the range in alpha (using automatic generation). Alpha ranges from [0,1].
         * @param start A double representing the minimum alpha value
         * @param end A double representing the maximum alpha value
         */
        setAlphaRange(start: number, end: number): void;
        /**
         * Map one value through the lookup table and return the color as an
         * RGBA array of doubles between 0 and 1.
         * @param scalar A double scalar value which will be mapped to a color in the LookupTable
         * @returns An RGBA array of doubles between 0 and 1
         */
        getColor(scalar: number): number[];
        /**
         * Generate lookup table from hue, saturation, value, alpha min/max values. Table is built from linear ramp of each value.
         * @param force true to force the build of the LookupTable. Otherwie, false. This is useful if a lookup table has been defined manually
         * (using SetTableValue) and then an application decides to rebuild the lookup table using the implicit process.
         */
        build(force: boolean): void;
        /**
         * Ensures the out-of-range colors (Below range and Above range) are set correctly.
         */
        buildSpecialColors(): void;
        /**
         * Similar to GetColor - Map one value through the lookup table and return the color as an
         * RGBA array of doubles between 0 and 1.
         * @param v A double scalar value which will be mapped to a color in the LookupTable
         * @returns An RGBA array of doubles between 0 and 1
         */
        mapValue(v: any): number[];
        /**
         * Return the table index associated with a particular value.
         * @param v A double value which table index will be returned.
         * @returns The index in the LookupTable
         */
        getIndex(v: number): number;
        /**
         * Directly load color into lookup table. Use [0,1] double values for color component specification.
         * Make sure that you've either used the Build() method or used SetNumberOfTableValues() prior to using this method.
         * @param index The index in the LookupTable of where to insert the color value
         * @param rgba An array of [0,1] double values for an RGBA color component
         */
        setTableValue(index: number, rgba: number[], ...args: any[]): void;
    }
}
export type ImageLoaderOptions = any;
export type ImageLoader = (imageId: string, options?: ImageLoaderOptions) => ImageLoadObject;
/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to
 * the loaded image object or fail if an error occurred.  The loaded image is not stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param [options] Options to be passed to the Image Loader
 *
 * @returns An Object which can be used to act after an image is loaded or loading fails
 */
export function loadImage(imageId: string, options?: ImageLoaderOptions): Promise<Image>;
/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to
 * the loaded image object or fail if an error occurred. The image is stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param [options] Options to be passed to the Image Loader
 *
 * @returns Image Loader Object
 */
export function loadAndCacheImage(imageId: string, options?: ImageLoaderOptions): Promise<Image>;
/**
 * Registers an imageLoader plugin with cornerstone for the specified scheme
 *
 * @param scheme The scheme to use for this image loader (e.g. 'dicomweb', 'wadouri', 'http')
 * @param imageLoader A Cornerstone Image Loader function
 */
export function registerImageLoader(scheme: string, imageLoader: ImageLoader): void;
/**
 * Registers a new unknownImageLoader and returns the previous one
 *
 * @param imageLoader A Cornerstone Image Loader
 *
 * @returns The previous Unknown Image Loader
 */
export function registerUnknownImageLoader(imageLoader: ImageLoader): ImageLoader | undefined;

/**
 * @deprecated This function is superseded by the ability to set the Viewport parameters to include colormaps.
 *
 * Converts the image pixel data into a false color data
 *
 * @param image A Cornerstone Image Object
 * @param lookupTable A lookup table Object
 */
export function pixelDataToFalseColorData(image: Image, lookupTable: colors.LookupTable | number[]): void;

export namespace rendering {
    export { renderColorImage as colorImage };
    export { renderGrayscaleImage as grayscaleImage };
    export { renderWebImage as webImage };
    export { renderPseudoColorImage as pseudoColorImage };
    export { renderLabelMapImage as labelMapImage };
    export { renderToCanvas as toCanvas };
}
/**
 * Resets the viewport to the default settings
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function reset(element: HTMLElement): void;
/**
 * Resizes an enabled element and optionally fits the image to window
 *
 * @param element The DOM element enabled for Cornerstone
 * @param forceFitToWindow true to to force a refit, false to rescale accordingly
 */
export function resize(element: HTMLElement, forceFitToWindow?: boolean): void;

/**
 * Sets the canvas context transformation matrix to the pixel coordinate system.  This allows
 * geometry to be driven using the canvas context using coordinates in the pixel coordinate system
 * @param enabledElement The
 * @param context The CanvasRenderingContext2D for the enabledElement's Canvas
 * @param [scale] Optional scale to apply
 */
export function setToPixelCoordinateSystem(
    enabledElement: EnabledElement,
    context: CanvasRenderingContext2D,
    scale?: number,
): void;
/**
 * Trigger a CustomEvent
 *
 * @param el The element or EventTarget to trigger the event upon
 * @param type The event type name
 * @param detail=null The event data to be sent
 * @returns The return value is false if at least one event listener called preventDefault(). Otherwise it returns true.
 */
export function triggerEvent(el: EventTarget, type: string, detail?: any): boolean;

declare namespace cornerstone {
    export { drawImage };
    export { generateLut };
    export { getDefaultViewport };
    export { requestAnimationFrame };
    export { storedPixelDataToCanvasImageData };
    export { storedColorPixelDataToCanvasImageData };
    export { storedPixelDataToCanvasImageDataColorLUT };
    export { storedPixelDataToCanvasImageDataPseudocolorLUT };
    export { internal };
    export { renderLabelMapImage };
    export { renderPseudoColorImage };
    export { renderColorImage };
    export { renderGrayscaleImage };
    export { renderWebImage };
    export { renderToCanvas };
    export { canvasToPixel };
    export { disable };
    export { displayImage };
    export { draw };
    export { drawInvalidated };
    export { enable };
    export { getElementData };
    export { removeElementData };
    export { getEnabledElement };
    export { addEnabledElement };
    export { getEnabledElementsByImageId };
    export { getEnabledElements };
    export { addLayer };
    export { removeLayer };
    export { getLayer };
    export { getLayers };
    export { getVisibleLayers };
    export { setActiveLayer };
    export { getActiveLayer };
    export { purgeLayers };
    export { setLayerImage };
    export { fitToWindow };
    export { getDefaultViewportForImage };
    export { setDefaultViewport };
    export { getImage };
    export { getPixels };
    export { getStoredPixels };
    export { getViewport };
    export { loadImage };
    export { loadAndCacheImage };
    export { registerImageLoader };
    export { registerUnknownImageLoader };
    export { invalidate };
    export { invalidateImageId };
    export { pageToPixel };
    export { pixelToCanvas };
    export { reset };
    export { resize };
    export { setToPixelCoordinateSystem };
    export { setViewport };
    export { updateImage };
    export { pixelDataToFalseColorData };
    export { rendering };
    export { imageCache };
    export { metaData };
    export { webGL };
    export { colors };
    export { convertImageToFalseColorImage };
    export { convertToFalseColorImage };
    export { restoreImage };
    export { EVENTS };
    export { events };
    export { triggerEvent };
    export { Image };
    export { Viewport };
}

export default cornerstone;

export as namespace cornerstone;
