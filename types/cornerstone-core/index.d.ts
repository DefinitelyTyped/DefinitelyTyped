// Type definitions for cornerstone-core 2.3
// Project: https://github.com/cornerstonejs/cornerstone
// Definitions by: Seoyeon Lee <https://github.com/iamssen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// See more: https://docs.cornerstonejs.org/api.html
// See more: https://github.com/cornerstonejs/cornerstone/wiki
// See more: https://github.com/cornerstonejs/cornerstone/blob/97756a50d7/src/index.js

// TODO remove this type after clearitify all the unknown function types
export type __UnknownFunction__ = (...params: unknown[]) => unknown;

export type EventTypes = 'cornerstonenewimage'
    | 'cornerstoneinvalidated'
    | 'cornerstoneprerender'
    | 'cornerstoneimagecachemaximumsizechanged'
    | 'cornerstoneimagecachepromiseremoved'
    | 'cornerstoneimagecachefull'
    | 'cornerstoneimagecachechanged'
    | 'cornerstonewebgltextureremoved'
    | 'cornerstonewebgltexturecachefull'
    | 'cornerstoneimageloaded'
    | 'cornerstoneimageloadfailed'
    | 'cornerstoneelementresized'
    | 'cornerstoneimagerendered'
    | 'cornerstonelayeradded'
    | 'cornerstonelayerremoved'
    | 'cornerstoneactivelayerchanged'
    | 'cornerstoneelementdisabled'
    | 'cornerstoneelementenabled';

export enum EVENTS {
    NEW_IMAGE = 'cornerstonenewimage',
    INVALIDATED = 'cornerstoneinvalidated',
    PRE_RENDER = 'cornerstoneprerender',
    IMAGE_CACHE_MAXIMUM_SIZE_CHANGED = 'cornerstoneimagecachemaximumsizechanged',
    IMAGE_CACHE_PROMISE_REMOVED = 'cornerstoneimagecachepromiseremoved',
    IMAGE_CACHE_FULL = 'cornerstoneimagecachefull',
    IMAGE_CACHE_CHANGED = 'cornerstoneimagecachechanged',
    WEBGL_TEXTURE_REMOVED = 'cornerstonewebgltextureremoved',
    WEBGL_TEXTURE_CACHE_FULL = 'cornerstonewebgltexturecachefull',
    IMAGE_LOADED = 'cornerstoneimageloaded',
    IMAGE_LOAD_FAILED = 'cornerstoneimageloadfailed',
    ELEMENT_RESIZED = 'cornerstoneelementresized',
    IMAGE_RENDERED = 'cornerstoneimagerendered',
    LAYER_ADDED = 'cornerstonelayeradded',
    LAYER_REMOVED = 'cornerstonelayerremoved',
    ACTIVE_LAYER_CHANGED = 'cornerstoneactivelayerchanged',
    ELEMENT_DISABLED = 'cornerstoneelementdisabled',
    ELEMENT_ENABLED = 'cornerstoneelementenabled',
}

export const events: EventTarget;

// ================================================================
// Objects
// ================================================================
/**
 * A two-dimensional vector
 */
export interface Vec2 {
    x: number;
    y: number;
}

export interface CornerstoneEventData {
    canvasContext?: CanvasRenderingContext2D;
    element?: HTMLElement;
    enabledElement?: EnabledElement;
    image?: Image;
    renderTimeInMs?: number;
    viewport?: Viewport;

    oldImage?: Image;
    frameRate?: number;
}

export interface CornerstoneEvent extends Event {
    detail?: CornerstoneEventData;
}

/**
 * Lookup Table Array
 *
 * @link https://docs.cornerstonejs.org/api.html#lut
 */
export interface LUT {
    id: string;
    firstValueMapped: number;
    numBitsPerEntry: number;
    lut: number[];
}

/**
 * Maps scalar values into colors via a lookup table
 * LookupTable is an object that is used by mapper objects to map scalar values
 * into rgba (red-green-blue-alpha transparency) color specification, or rgba into scalar values.
 * The color table can be created by direct insertion of color values,
 * or by specifying hue, saturation, value, and alpha range and generating a table
 */
export interface LookupTable {
    // TODO
    __foo__: 'bar';
}

/**
 * VOI
 *
 * @link https://docs.cornerstonejs.org/api.html#voi
 */
export interface VOI {
    windowWidth: number;
    windowCenter: number;
}

/**
 * Volume of Interest Lookup Table Function
 */
export type VOILUTFunction = (modalityLutValue: number) => number;

/**
 * A Viewport Settings Object Cornerstone
 *
 * @link https://docs.cornerstonejs.org/api.html#viewport
 */
export interface Viewport {
    /**
     * The scale applied to the image.
     * A scale of 1.0 will display no zoom (one image pixel takes up one screen pixel).
     * A scale of 2.0 will be double zoom and a scale of .5 will be zoomed out by 2x
     */
    scale: number;

    /**
     * an object with properties x and y which describe the translation to apply in the pixel coordinate system.
     * Note that the image is initially displayed centered in the enabled element with a x and y translation of 0 and 0 respectively.
     */
    translation: Vec2;

    /** an object with properties windowWidth and windowCenter. */
    voi: VOI;

    /** Whether or not the image is inverted. */
    invert: boolean;

    /** true if the image smooth / interpolation should be used when zoomed in on the image or false if pixel replication should be used. */
    pixelReplication: boolean;

    /** the rotation of the image (90 degree increments). Default is 0 */
    rotation: number;

    /** true if the image is flipped horizontally. Default is false */
    hflip: boolean;

    /** true if the image is flipped vertically. Default is false */
    vfilip: boolean;

    /** the modality LUT to apply or undefined if none */
    modalityLUT: LUT | undefined;

    /** the VOI LUT to apply or undefined if none */
    voiLUT: LUT | undefined;

    /** an optional colormap ID or colormap object (from colors/colormap.js). This will be applied during rendering to convert the image to pseudocolor */
    colormap: string | object | undefined;

    /** whether or not to render this image as a label map (i.e. skip modality and VOI LUT pipelines and use only a color lookup table) */
    labelmap: boolean | undefined;

    /** ? */
    displayedArea: {
        // Displayed Area is 1-based
        tlhc: {
            x: number;
            y: number;
        };

        // Bottom Right Hand Corner
        brhc: {
            x: number;
            y: number;
        };

        rowPixelSpacing: number;

        columnPixelSpacing: number;

        presentationSizeMode: string;
    };
}

/**
 * An Image Load Object
 *
 * @link https://docs.cornerstonejs.org/api.html#imageloadobject
 */
export interface ImageLoadObject {
    /** The Promise tracking the loading of this image */
    // TODO promise type
    promise: Promise<{}>;

    /** A function to cancel the image load request */
    cancelFn: () => void | undefined;
}

/**
 * Image Statistics Object
 *
 * https://docs.cornerstonejs.org/api.html#imagestats
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
 *
 * @link https://docs.cornerstonejs.org/api.html#image
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
    getPixelData: () => Uint8Array;

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

    /** The Lookup Table */
    lut: LUT;

    /** Is the color pixel data stored in RGBA? */
    rgba: boolean;

    /** horizontal distance between the middle of each pixel (or width of each pixel) in mm or undefined if not known */
    columnPixelSpacing: number;

    /** vertical distance between the middle of each pixel (or height of each pixel) in mm or undefined if not known */
    rowPixelSpacing: number;

    /** true if the the image should initially be displayed be inverted, false if not. This is here mainly to support DICOM images with a photometric interpretation of MONOCHROME1 */
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

    /** true if pixel data is RGB, false if grayscale */
    color: boolean;

    /** @deprecated Use viewport.colormap instead. an optional colormap ID or colormap object (from colors/colormap.js). This will be applied during rendering to convert the image to pseudocolor */
    colormap?: string | object;

    /** whether or not to render this image as a label map (i.e. skip modality and VOI LUT pipelines and use only a color lookup table) */
    labelmap?: boolean;

    /** ? */
    voiLUT?: LUT;

    /** the width of the image. This is the same as columns but duplicated for convenience */
    width: number;

    /** the height of the image. This is the same as rows but duplicated for convenience */
    height: number;
}

/**
 * An Enabled Element Layer in Cornerstone
 *
 * @link https://docs.cornerstonejs.org/api.html#enabledelementlayer
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

    /** Whether or not the image pixel data underlying the enabledElement has been changed, necessitating a redraw */
    invalid: boolean;

    /** A flag for triggering a redraw of the canvas without re-retrieving the pixel data, since it remains valid */
    needsRedraw: boolean;

    // TODO Type 확인 필요
    /** Layer drawing options */
    options?: { renderer?: 'webgl' };
}

/**
 * An Enabled Element in Cornerstone
 *
 * @link https://docs.cornerstonejs.org/api.html#enabledelement
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

    /** Whether or not to synchronize the viewport parameters */
    syncViewports?: boolean;

    // for each of the enabled element's layers

    /** The previous state for the sync viewport boolean */
    lastSyncViewportsState?: boolean;
}

// TODO https://github.com/cornerstonejs/cornerstone/blob/master/src/imageCache.js#L175
export interface ImageCache {
    // TODO
    __foo__: 'bar';
}

// ================================================================
// EnabledElements
// ================================================================
/**
 * Retrieves a Cornerstone Enabled Element object
 *
 * @param element An HTML Element enabled for Cornerstone
 * @returns A Cornerstone Enabled Element
 */
export function getEnabledElement(element: HTMLElement): EnabledElement;

/**
 * Adds a Cornerstone Enabled Element object to the central store of enabledElements
 *
 * @param enabledElement EnabledElement A Cornerstone enabledElement Object
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
 * @returns An Array of Cornerstone enabledElement Objects
 */
export function getEnabledElements(): EnabledElement[];

// ================================================================
// ImageLoader
// ================================================================
/**
 * Load an image using a registered Cornerstone Image Loader.
 *
 * The image loader that is used will be determined by the image loader scheme matching against the imageId.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param options Options to be passed to the Image Loader
 * @returns An Object which can be used to act after an image is loaded or loading fails
 */
export function loadImageFromImageLoader(imageId: string, options?: object): ImageLoadObject;

/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to the loaded image object or fail if an error occurred. The loaded image is not stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param options Options to be passed to the Image Loader
 */
export function loadImage(imageId: string, options?: object): Promise<Image>;

/**
 * Loads an image given an imageId and optional priority and returns a promise which will resolve to the loaded image object or fail if an error occurred. The image is stored in the cache.
 *
 * @param imageId A Cornerstone Image Object's imageId
 * @param options Options to be passed to the Image Loader
 * @returns Image Loader Object
 */
export function loadAndCacheImage(imageId: string, options?: object): ImageLoadObject;

/**
 * Registers an imageLoader plugin with cornerstone for the specified scheme
 *
 * @param scheme The scheme to use for this image loader (e.g. 'dicomweb', 'wadouri', 'http')
 * @param imageLoader A Cornerstone Image Loader function
 */
export function registerImageLoader(scheme: string, imageLoader: __UnknownFunction__): void;

/**
 * Registers a new unknownImageLoader and returns the previous one
 *
 * @param imageLoader A Cornerstone Image Loader
 * @returns The previous Unknown Image Loader
 */
export function registerUnknownImageLoader(imageLoader: __UnknownFunction__): __UnknownFunction__ | undefined;

// ================================================================
// ImageCache
// ================================================================

// ================================================================
// Metadata
// ================================================================
/**
 * Adds a metadata provider with the specified priority
 *
 * @param provider Metadata provider function
 * @param priority 0 is default/normal, > 0 is high, < 0 is low (optional, default 0)
 */
export function addProvider(provider: __UnknownFunction__, priority: number): void;

/**
 * Removes the specified provider
 *
 * @param provider Metadata provider function
 */
export function removeProvider(provider: __UnknownFunction__): void;

/**
 * Gets metadata from the registered metadata providers. Will call each one from highest priority to lowest until one responds
 *
 * @param type The type of metadata requested from the metadata store
 * @param imageId The Cornerstone Image Object's imageId
 * @returns The metadata retrieved from the metadata store
 *
 * TODO check clearitify the unknown type
 */
export function getMetaData(type: string, imageId: string): unknown;

// ================================================================
// ViewportSettings
// ================================================================
/**
 * Retrieves the viewport for the specified enabled element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns The Cornerstone Viewport settings for this element, if they exist. Otherwise, undefined
 */
export function getViewport(element: HTMLElement): Viewport | undefined;

/**
 * Sets/updates viewport of a given enabled element
 * @param element DOM element of the enabled element
 * @param viewport Object containing the viewport properties
 */
export function setViewport(element: HTMLElement, viewport?: Viewport): void;

// ================================================================
// PixelCoordinateSystem
// ================================================================
/**
 * Converts a point in the canvas coordinate system to the pixel coordinate system system.
 * This can be used to reset tools' image coordinates after modifications have been made in canvas space
 * (e.g. moving a tool by a few cm, independent of image resolution).
 *
 * @param element The Cornerstone element within which the input point lies
 * @param pt The input point in the canvas coordinate system
 * @returns The transformed point in the pixel coordinate system
 */
export function canvasToPixel(element: HTMLElement, pt: { x: number, y: number }): { x: number, y: number };

/**
 * Converts a point in the pixel coordinate system to the canvas coordinate system system.
 * This can be used to render using canvas context without having the weird side effects that come from scaling and non square pixels
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param pt The transformed point in the pixel coordinate system
 * @returns The input point in the canvas coordinate system
 */
export function pixelToCanvas(element: HTMLElement, pt: { x: number, y: number }): { x: number, y: number };

// ================================================================
// EnabledElementLayers
// ================================================================
/**
 * Helper function to trigger an event on a Cornerstone element with a specific layerId
 *
 * @param eventName The event name (e.g. CornerstoneLayerAdded)
 * @param enabledElement The Cornerstone enabled element
 * @param layerId The layer's unique identifier
 */
export function triggerEventForLayer(eventName: EventTypes, enabledElement: EnabledElement, layerId: string): void;

/**
 * Rescale the target layer to the base layer based on the relative size of each image and their pixel dimensions.
 *
 * This function will update the Viewport parameters of the target layer to a new scale.
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
 * @returns layerId The new layer's unique identifier
 */
export function addLayer(element: HTMLElement, image: Image, options: object): string;

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
 * @returns The layer
 */
export function getLayer(element: HTMLElement, layerId: string): EnabledElementLayer;

/**
 * Retrieve all layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns An array of layers
 */
export function getLayers(element: HTMLElement): EnabledElementLayer[];

/**
 * Retrieve all visible layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns An array of layers
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
 * @param layerId The unique identifier for the layer
 */
export function setLayerImage(element: HTMLElement, image: Image, layerId?: string): void;

/**
 * Retrieve the currently active layer for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @returns The currently active layer
 */
export function getActiveLayer(element: HTMLElement): EnabledElementLayer;

// ================================================================
// Internal
// ================================================================
/**
 * Internal API function to draw an image to a given enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used (optional, default false)
 */
export function drawImage(enabledElement: EnabledElement, invalidated?: boolean): void;

/**
 * Creates a LUT used while rendering to convert stored pixel values to display pixels
 *
 * @param image A Cornerstone Image Object
 * @param windowWidth The Window Width
 * @param windowCenter The Window Center
 * @param invert A boolean describing whether or not the image has been inverted
 * @param modalityLUT A modality Lookup Table
 * @param voiLUT A Volume of Interest Lookup Table
 * @returns A lookup table to apply to the image
 */
export function generateLut(image: Image, windowWidth: number, windowCenter: number, invert: boolean, modalityLUT?: number[], voiLUT?: number[]): Uint8ClampedArray;

/**
 * This function transforms stored pixel values into a canvas image data buffer by using a LUT.
 * This is the most performance sensitive code in cornerstone and we use a special trick to make this go as fast as possible.
 * Specifically we use the alpha channel only to control the luminance rather
 * than the red, green and blue channels which makes it over 3x faster.
 * The canvasImageDataData buffer needs to be previously filled with white pixels.
 *
 * NOTE: Attribution would be appreciated if you use this technique!
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageData(image: Image, lut: number[], canvasImageData: Uint8ClampedArray): void;

/**
 * Converts stored color pixel values to display pixel values using a LUT.
 *
 * Note: Skips alpha value for any input image pixel data.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedColorPixelDataToCanvasImageData(image: Image, lut: number[], canvasImageData: Uint8ClampedArray): void;

/**
 *
 * @param image A Cornerstone Image Object
 * @param colorLut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageDataColorLUT(image: Image, colorLut: LookupTable | number[], canvasImageData: Uint8ClampedArray): void;

/**
 *
 * @param image A Cornerstone Image Object
 * @param grayscaleLut Lookup table array
 * @param colorLut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageDataPseudocolorLUT(image: Image, grayscaleLut: number[], colorLut: LookupTable | number[], canvasImageData: Uint8ClampedArray): void;

/**
 * This function transforms stored pixel values into a canvas image data buffer by using a LUT.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedPixelDataToCanvasImageDataRGBA(image: Image, lut: number[], canvasImageData: Uint8ClampedArray): void;

/**
 * Computes the VOI to display all the pixels if no VOI LUT data (Window Width/Window Center or voiLUT) exists on the viewport object.
 *
 * @param viewport Object containing the viewport properties
 * @param image An Image loaded by a Cornerstone Image Loader
 */
export function computeAutoVoi(viewport: Viewport, image: object): void;

/**
 * Check if viewport has voi LUT data
 *
 * @param viewport The viewport to check for voi LUT data
 * @returns true viewport has LUT data (Window Width/Window Center or voiLUT). Otherwise, false.
 */
export function hasVoi(viewport: Viewport): boolean;

/**
 * Creates a LUT used while rendering to convert stored pixel values to display pixels
 *
 * @param image A Cornerstone Image Object
 * @param windowWidth The Window Width
 * @param windowCenter The Window Center
 * @param invert A boolean describing whether or not the image has been inverted
 * @param voiLUT A Volume of Interest Lookup Table
 * @returns A lookup table to apply to the image
 */
export function generateColorLut(image: Image, windowWidth: number, windowCenter: number, invert: boolean, voiLUT?: number): Uint8ClampedArray;

/**
 * Converts stored RGBA color pixel values to display pixel values using a LUT.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageData canvasImageData.data buffer filled with white pixels
 */
export function storedRGBAPixelDataToCanvasImageData(image: Image, lut: number[], canvasImageData: Uint8ClampedArray): void;

/**
 * Draw an image to a given enabled element synchronously
 *
 * @param enabledElement An enabled element to draw into
 * @param invaidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function drawImageSync(enabledElement: EnabledElement, invaidated: boolean): void;

/**
 * Internal function to render all layers for a Cornerstone enabled element
 *
 * @param context Canvas context to draw upon
 * @param layers The array of all layers for this enabled element
 * @param invalidated A boolean whether or not this image has been invalidated and must be redrawn
 */
export function renderLayers(context: CanvasRenderingContext2D, layers: EnabledElementLayer[], invalidated: boolean): void;

/**
 * Generate a unique identifier
 *
 * @returns A unique identifier
 */
export function guid(): string;

/**
 * Generates a linear modality transformation function
 *
 * See DICOM PS3.3 C.11.1 Modality LUT Module
 *
 * @link http://dicom.nema.org/medical/Dicom/current/output/chtml/part03/sect_C.11.html
 *
 * @param slope m in the equation specified by Rescale Intercept (0028,1052).
 * @param intercept The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).Output units = m*SV + b.
 * @returns A linear modality LUT function. Given a stored pixel it returns the modality pixel value
 *
 * TODO check clearitify the unknown type
 */
export function generateLinearModalityLUT(slope: number, intercept: number): (param: unknown) => unknown;

/**
 * Get the appropriate Modality LUT for the current situation.
 *
 * @param slope m in the equation specified by Rescale Intercept (0028,1052).
 * @param intercept The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).
 * @param modalityLUT A modality LUT function. Given a stored pixel it returns the modality pixel value.
 * @returns A modality LUT function. Given a stored pixel it returns the modality pixel value.
 */
export function getModalityLUT(slope?: number, intercept?: number, modalityLUT?: __UnknownFunction__): (p: unknown) => unknown;

// TODO define type
export type Transform = unknown;

/**
 * Calculate the transform for a Cornerstone enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element
 * @param scale The viewport scale
 * @returns The current transform
 */
export function calculateTransform(enabledElement: EnabledElement, scale?: number): Transform;

// ================================================================
// imageCache
// ================================================================
export const imageCache: ImageCache;

// ================================================================
// rendering
// ================================================================
/**
 * API function to draw a label map image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderLabelMapImage(enabledElement: EnabledElement, invalidated: boolean): void;

/**
 * Determine whether or not an Enabled Element needs to be re-rendered.
 *
 * If the imageId has changed, or if any of the last rendered viewport parameters have changed, this function will return true.
 *
 * @param enabledElement
 * @param image
 * @returns Whether or not the Enabled Element needs to re-render its image
 */
export function doesImageNeedToBeRendered(enabledElement: EnabledElement, image: Image): boolean;

/**
 * API function to draw a pseudo-color image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderPseudoColorImage(enabledElement: EnabledElement, invalidated: boolean): void;

/**
 * Check if two lookup tables match
 */
export function lutMatches(a: LUT, b: LUT): boolean;

/**
 * API function to render a color image to an enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderColorImage(enabledElement: EnabledElement, invalidated: boolean): void;

/**
 * API function to draw a grayscale image to a given enabledElement
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderGrayscaleImage(enabledElement: EnabledElement, invalidated: boolean): void;

/**
 * API function to draw a standard web image (PNG, JPG) to an enabledImage
 *
 * @param enabledElement The Cornerstone Enabled Element to redraw
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function renderWebImage(enabledElement: EnabledElement, invalidated: boolean): void;

// ================================================================
// WebGLRendering
// ================================================================
/**
 * Returns the image data type as a string representation.
 *
 * @param image The cornerstone image object
 */
export function getImageDataType(image: Image): 'rgb' | 'iint16' | 'uint16' | 'int8' | 'uint8';

/**
 * Convert stored pixel data to image data.
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
export function storedPixelDataToImageData(image: Image): Uint8Array;

/**
 * Creates and compiles a shader.
 *
 * @param gl The WebGL Context.
 * @param shaderSource The GLSL source code for the shader.
 * @param shaderType The type of shader, VERTEX_SHADER or FRAGMENT_SHADER.
 * @returns The shader.
 */
export function compileShader(gl: WebGLRenderingContext, shaderSource: string, shaderType: number): WebGLShader;

/**
 * Creates a program from 2 shaders.
 *
 * @param gl The WebGL context.
 * @param vertexShader A vertex shader.
 * @param fragmentShader A fragment shader.
 */
export function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram;

/**
 * Creates a program from 2 shaders source (Strings)
 *
 * @param gl The WebGL context.
 * @param vertexShaderSrc Vertex shader string
 * @param fragShaderSrc Fragment shader string
 */
export function createProgramFromString(gl: WebGLShader, vertexShaderSrc: WebGLShader, fragShaderSrc: WebGLShader): WebGLProgram;

// ================================================================
//
// ================================================================
export function generateLinearVOILUT(windowWidth: number, windowCenter: number): LUT | VOILUTFunction;

/**
 * Generate a non-linear volume of interest lookup table
 *
 * @param voiLUT Volume of Interest Lookup Table Object
 * @returns VOI LUT mapping function
 */
export function generateNonLinearVOILUT(voiLUT: LUT): VOILUTFunction;

/**
 * Retrieve a VOI LUT mapping function given the current windowing settings and the VOI LUT for the image
 *
 * @param windowWidth
 * @param windowCenter
 * @param voiLUT Volume of Interest Lookup Table Object
 * @returns VOI LUT mapping function
 */
export function getVOILut(windowWidth: number, windowCenter: number, voiLUT?: LUT): VOILUTFunction;

// https://github.com/cornerstonejs/cornerstone/blob/12da9ed267499345ef192d9e5f214cc79122ffc3/test/internal/getDefaultViewport_test.js
/**
 * Creates a new viewport object containing default values for the image and canvas
 *
 * @param canvas
 * @param image
 */
export function getDefaultViewport(canvas: HTMLCanvasElement | {} | undefined, image?: Image): Viewport;

/**
 * API function to draw a pseudo-color image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function addLabelMapLayer(layer: EnabledElementLayer, invalidated: boolean): void;

/**
 * API function to draw a pseudo-color image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function addPseudoColorLayer(layer: EnabledElementLayer, invalidated: boolean): void;

/**
 * Retrieve or generate a LUT Array for an Image and Viewport
 *
 * @param image
 * @param viewport
 * @param invalidated Whether or not the LUT data has been invalidated (e.g. by a change to the windowWidth, windowCenter, or invert viewport parameters).
 * @returns LUT Array
 */
export function getLut(image: Image, viewport: Viewport, invalidated: boolean): Uint8ClampedArray;

/**
 * API function to draw a grayscale image to a given layer
 *
 * @param layer The layer that the image will be added to
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 * @param useAlphaChannel Whether or not to render the grayscale image using only the alpha channel.
 *                        This does not work if this layer is not the first layer in the enabledElement. (optional, default false)
 */
export function addGrayscaleLayer(layer: EnabledElementLayer, invalidated: boolean, useAlphaChannel?: boolean): void;

/**
 * Disable an HTML element for further use in Cornerstone
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function disable(element: HTMLElement): void;

/**
 * Returns whether or not an Enabled Element has either a currently active image or a non-empty Array of Enabled Element Layers.
 *
 * @param enabledElement
 * @returns Whether or not the Enabled Element has an active image or valid set of layers
 */
export function hasImageOrLayers(enabledElement: EnabledElement): boolean;

/**
 * Enable an HTML Element for use in Cornerstone
 *
 * - If there is a Canvas already present within the HTMLElement, and it has the class 'cornerstone-canvas',
 *   this function will use this existing Canvas instead of creating a new one. This may be helpful when using libraries (e.g. React, Vue)
 *   which don't want third parties to change the DOM.
 *
 * @param element
 * @param options
 */
export function enable(element: HTMLElement, options?: { renderer?: 'webgl' }): void;

/**
 * Sets a new image object for a given element.
 *
 * Will also apply an optional viewport setting.
 *
 * @param element
 * @param image
 * @param viewport
 */
export function displayImage(element: HTMLElement, image: Image, viewport: Viewport): void;

/**
 * Immediately draws the enabled element
 * @param element An HTML Element enabled for Cornerstone
 *
 * Draw the image immediately
 * @param timestamp The current time for when requestAnimationFrame starts to fire callbacks
 */
export function draw(elementOrTimestamp: HTMLElement | DOMHighResTimeStamp): void;

/**
 * Draws all invalidated enabled elements and clears the invalid flag after drawing it
 */
export function drawInvalidated(): void;

/**
 * Sets the invalid flag on the enabled element and fire an event
 *
 * @param element The DOM element enabled for Cornerstone
 */
export function invalidate(element: HTMLElement): void;

/**
 * Forces the image to be updated/redrawn for the all enabled elements displaying the specified imageId
 *
 * @param imageId The imageId of the Cornerstone Image Object to redraw
 */
export function invalidateImageId(imageId: string): void;

/**
 * Forces the image to be updated/redrawn for the specified enabled element
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param invalidated Whether or not the image pixel data has been changed, necessitating a redraw (optional, default false)
 */
export function updateImage(element: HTMLElement, invalidated: boolean): void;

/**
 * Internal API function to draw a composite image to a given enabled element
 *
 * @param enabledElement An enabled element to draw into
 * @param invalidated true if pixel data has been invalidated and cached rendering should not be used
 */
export function drawCompositeImage(enabledElement: EnabledElement, invalidated: boolean): void;

/**
 * Create a canvas and append it to the element
 *
 * @param element An HTML Element
 * @returns canvas A Canvas DOM element
 */
export function createCanvas(element: HTMLElement): HTMLCanvasElement;

/**
 * Create a canvas or returns the one that already exists for a given element
 *
 * @param element An HTML Element
 * @returns canvas A Canvas DOM element
 */
export function getCanvas(element: HTMLElement): HTMLCanvasElement;

/**
 * Retrieves any data for a Cornerstone enabledElement for a specific string dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 * @returns Whatever data is stored for this enabled element
 *
 * TODO check clearitify the unknown type
 */
export function getElementData(element: HTMLElement, dataType: string): unknown;

/**
 * Clears any data for a Cornerstone enabledElement for a specific string dataType
 *
 * @param element An HTML Element enabled for Cornerstone
 * @param dataType A string name for an arbitrary set of data
 */
export function removeElementData(element: HTMLElement, dataType: string): void;

/**
 * Adjusts an image's scale and translation so the image is centered and all pixels in the image are viewable.
 *
 * @param element The Cornerstone element to update
 */
export function fitToWindow(element: HTMLElement): void;

/**
 * Retrieves the current image dimensions given an enabled element
 *
 * @param enabledElement The Cornerstone Enabled Element
 * @returns The Image dimensions
 */
export function getImageSize(enabledElement: EnabledElement): { width: number, height: number };

/**
 * Returns a default viewport for display the specified image on the specified enabled element. The default viewport is fit to window
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image A Cornerstone Image Object
 * @returns The default viewport for the image
 */
export function getDefaultViewportForImage(element: HTMLElement, image: Image): Viewport;

/**
 * Returns the currently displayed image for an element or undefined if no image has been displayed yet
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

/**
 * Converts a point in the page coordinate system to the pixel coordinate system
 *
 * @param element The Cornerstone element within which the input point lies
 * @param pageX The x value in the page coordinate system
 * @param pageY The y value in the page coordinate system
 * @returns The transformed point in the pixel coordinate system
 */
export function pageToPixel(element: HTMLElement, pageX: number, pageY: number): { x: number, y: number };

/**
 * Resets the viewport to the default settings
 *
 * @param element An HTML Element enabled for Cornerstone
 */
export function reset(element: HTMLElement): void;

/**
 * This module is responsible for enabling an element to display images with cornerstone
 *
 * @param element The DOM element enabled for Cornerstone
 * @param canvas The Canvas DOM element within the DOM element enabled for Cornerstone
 */
export function setCanvasSize(element: HTMLElement, canvas: HTMLCanvasElement): void;

/**
 * Checks if the image of a given enabled element fitted the window before the resize
 *
 * @param enabledElement The Cornerstone Enabled Element
 * @param oldCanvasWidth The width of the canvas before the resize
 * @param oldCanvasHeight The height of the canvas before the resize
 * @returns true if it fitted the windows, false otherwise
 */
export function wasFitToWindow(enabledElement: EnabledElement, oldCanvasWidth: number, oldCanvasHeight: number): boolean;

/**
 * Rescale the image relative to the changed size of the canvas
 *
 * @param enabledElement The Cornerstone Enabled Element
 * @param oldCanvasWidth The width of the canvas before the resize
 * @param oldCanvasHeight The height of the canvas before the resize
 */
export function relativeRescale(enabledElement: EnabledElement, oldCanvasWidth: number, oldCanvasHeight: number): void;

/**
 * Resizes an enabled element and optionally fits the image to window
 *
 * @param element The DOM element enabled for Cornerstone
 * @param forceFitToWindow true to to force a refit, false to rescale accordingly
 */
export function resize(element: HTMLElement, forceFitToWindow?: boolean): void;

/**
 * Sets the canvas context transformation matrix to the pixel coordinate system. This allows geometry to be driven using the canvas context using coordinates in the pixel coordinate system
 *
 * @param enabledElement
 * @param context The CanvasRenderingContext2D for the enabledElement's Canvas
 * @param scale Optional scale to apply
 */
export function setToPixelCoordinateSystem(enabledElement: EnabledElement, context: CanvasRenderingContext2D, scale?: number): void;

/**
 * Converts the image pixel data into a false color data
 *
 * @deprecated This function is superseded by the ability to set the Viewport parameters to include colormaps.
 * @param image A Cornerstone Image Object
 * @param lookupTable A lookup table Object
 */
export function pixelDataToFalseColorData(image: Image, lookupTable: LookupTable): void;

/**
 * Converts an HSV (Hue, Saturation, Value) color to RGB (Red, Green, Blue) color value
 *
 * TODO https://docs.cornerstonejs.org/api.html#hsvtorgb
 *
 * @param hue A number representing the hue color value
 * @param sat A number representing the saturation color value
 * @param val A number representing the value color value
 * @returns Array<Numberp> An RGB color array
 *
 * TODO check clearitify the unknown type
 */
export function HSVToRGB(hue: number, sat: number, val: number): unknown[];

/**
 * Maps a value to an index in the table
 *
 * @param v A double value which table index will be returned.
 * @param p An object that contains the Table "Range", the table "MaxIndex", A "Shift" from first value in the table and the table "Scale" value
 * @returns The mapped index in the table
 *
 * TODO check clearitify the unknown type
 */
export function linearIndexLookupMain(v: number, p: unknown): number;

/**
 * Specify the number of values (i.e., colors) in the lookup table.
 *
 * @param n The number of colors in he LookupTable
 */
export function setNumberOfTableValues(n: number): void;

/**
 * Set the shape of the table ramp to either 'linear', 'scurve' or 'sqrt'
 *
 * @param ramp A string value representing the shape of the table. Allowed values are 'linear', 'scurve' or 'sqrt'
 */
export function setRamp(ramp: 'linear' | 'scurve' | 'sqrt'): void;

/**
 * Sets the minimum/maximum scalar values for scalar mapping.
 * Scalar values less than minimum range value are clamped to minimum range value.
 * Scalar values greater than maximum range value are clamped to maximum range value.
 *
 * @param start A double representing the minimum scaler value of the LookupTable
 * @param end A double representing the maximum scaler value of the LookupTable
 */
export function setTableRange(start: number, end: number): void;

/**
 * Set the range in hue (using automatic generation). Hue ranges between [0,1].
 *
 * @param start A double representing the minimum hue value in a range. Min. is 0
 * @param end A double representing the maximum hue value in a range. Max. is 1
 */
export function setHueRange(start: number, end: number): void;

/**
 * Set the range in saturation (using automatic generation). Saturation ranges between [0,1].
 *
 * @param start A double representing the minimum Saturation value in a range. Min. is 0
 * @param end A double representing the maximum Saturation value in a range. Max. is 1
 */
export function setSaturationRange(start: number, end: number): void;

/**
 * Set the range in value (using automatic generation). Value ranges between [0,1].
 * @param start A double representing the minimum value in a range. Min. is 0
 * @param end A double representing the maximum value in a range. Max. is 1
 */
export function setValueRange(start: number, end: number): void;

/**
 * Sets the range of scalars which will be mapped.
 *
 * @deprecated Not Used
 * @param start the minimum scalar value in the range
 * @param end the maximum scalar value in the range
 */
export function setRange(start: number, end: number): void;

/**
 * Set the range in alpha (using automatic generation). Alpha ranges from [0,1].
 *
 * @param start A double representing the minimum alpha value
 * @param end A double representing the maximum alpha value
 */
export function setAlphaRange(start: number, end: number): void;

/**
 * Map one value through the lookup table and return the color as an RGBA array of doubles between 0 and 1.
 *
 * @param scalar A double scalar value which will be mapped to a color in the LookupTable
 * @returns An RGBA array of doubles between 0 and 1
 */
export function getColor(scalar: number): number[];

/**
 * Generate lookup table from hue, saturation, value, alpha min/max values. Table is built from linear ramp of each value.
 *
 * @param force true to force the build of the LookupTable.
 *              Otherwie, false. This is useful if a lookup table has been defined manually (using SetTableValue)
 *              and then an application decides to rebuild the lookup table using the implicit process.
 */
export function build(force: boolean): void;

/**
 * Ensures the out-of-range colors (Below range and Above range) are set correctly.
 */
export function buildSpecialColors(): void;

/**
 * Similar to GetColor - Map one value through the lookup table and return the color as an RGBA array of doubles between 0 and 1.
 *
 * @param v A double scalar value which will be mapped to a color in the LookupTable
 * @returns An RGBA array of doubles between 0 and 1
 */
export function mapValue(v: number): number[];

/**
 * Return the table index associated with a particular value.
 *
 * @param v A double value which table index will be returned.
 * @returns The index in the LookupTable
 */
export function getIndex(v: number): number;

/**
 * Directly load color into lookup table.
 * Use [0,1] double values for color component specification.
 * Make sure that you've either used the Build() method or used SetNumberOfTableValues() prior to using this method.
 *
 * @param index The index in the LookupTable of where to insert the color value
 * @param rgba An array of [0,1] double values for an RGBA color component
 */
export function setTableValue(index: number, rgba: number[]): void;

/**
 * Generate linearly spaced vectors
 *
 * @link http://cens.ioc.ee/local/man/matlab/techdoc/ref/linspace.html
 * @param a A number representing the first vector
 * @param b A number representing the second vector
 * @param n The number of linear spaced vectors to generate
 * @returns An array of points representing linear spaced vectors.
 *
 * TODO check clearitify the unknown type
 */
export function linspace(a: number, b: number, n: number): unknown[];

/**
 * Returns the "rank/index" of the element in a sorted array if found or the highest index if not. Uses (binary search)
 *
 * @param array A sorted array to search in
 * @param elem the element in the array to search for
 * @returns The rank/index of the element in the given array
 *
 * TODO check clearitify the unknown type
 */
export function getRank(array: unknown[], elem: unknown): number;

/**
 * Find the indices into a sorted array a such that, if the corresponding elements In v were inserted before the indices, the order of a would be preserved.
 *
 * @link http://lagrange.univ-lyon1.fr/docs/numpy/1.11.0/reference/generated/numpy.searchsorted.html
 * @param inputArray The array where the values will be inserted
 * @param values An array of the values to be inserted into the inputArray
 * @returns The indices where elements should be inserted to maintain order.
 *
 * TODO check clearitify the unknown type
 */
export function searchSorted(inputArray: unknown[], values: unknown[]): number[];

/**
 * Creates an N -element 1-d lookup table
 *
 * @param N The number of elements in the result lookup table
 * @param data represented by a list of x,y0,y1 mapping correspondences.
 *             Each element in this List represents how a value between 0 and 1 (inclusive)
 *             represented by x is mapped to A corresponding value between 0 and 1 (inclusive).
 *             The two values of y are to allow for Discontinuous mapping functions (say as might be found in a sawtooth)
 *             where y0 represents The value of y for values of x <= to that given,
 *             and y1 is the value to be used for x > Than that given).
 *             The list must start with x=0, end with x=1, and all values of x must be In increasing order.
 *             Values between the given mapping points are determined by simple linear Interpolation.
 * @param gamma value denotes a "gamma curve" value which adjusts the brightness at the bottom and top of the map.
 * @returns an array "result" where result[x*(N-1)] gives the closest value for Values of x between 0 and 1.
 *
 * TODO check clearitify the unknown type
 */
export function makeMappingArray(N: number, data: unknown[], gamma: unknown): unknown[];

/**
 * The lookup table is generated using linear interpolation for each Primary color, with the 0-1 domain divided into any number of Segments.
 *
 * @link https://github.com/stefanv/matplotlib/blob/3f1a23755e86fef97d51e30e106195f34425c9e3/lib/matplotlib/colors.py#L663
 * @param segmentedData An object with a red, green and blue entries. Each entry should be a list of x, y0, y1 tuples, forming rows in a table.
 * @param N The number of elements in the result Colormap
 * @param gamma value denotes a "gamma curve" value which adjusts the brightness at the bottom and top of the Colormap.
 * @returns The created Colormap object
 *
 * TODO check clearitify the unknown type
 */
export function createLinearSegmentedColormap(segmentedData: { red: unknown[], green: unknown[], blue: unknown[] }, N: number, gamma: unknown): unknown;

/**
 * Return all available colormaps (id and name)
 *
 * @returns Array<{id, key}> An array of colormaps with an object containing the "id" and display "name"
 */
export function getColormapsList(): Array<{ id: string, key: string }>;

/**
 * Return a colorMap object with the provided id and colormapData
 * if the Id matches existent colorMap objects (check colormapsData) the colormapData is ignored.
 * if the colormapData is not empty, the colorMap will be added to the colormapsData list. Otherwise, an empty colorMap object is returned.
 *
 * @param id The ID of the colormap
 * @param colormapData An object that can contain a name, numColors, gama, segmentedData and/or colors
 * @returns The Colormap Object
 *
 * TODO check clearitify the unknown type
 */
export function getColormap(id: string, colormapData: object): unknown;

/**
 * Retrieves the minimum and maximum pixel values from an Array of pixel data
 *
 * @param pixelData The input pixel data array
 * @returns The minimum and maximum pixel values in the input Array
 */
export function getPixelValues(pixelData: number[]): { minPixelValue: number, maxPixelValue: number };

/**
 * Retrieve a function that will allow an image object to be reset to its original form after a false color mapping transformation
 *
 * @param image A Cornerstone Image Object
 * @returns A function for resetting an Image Object to its original form
 */
export function getRestoreImageMethod(image: Image): __UnknownFunction__;

/**
 * User can pass a colormap or its id as string to some of these public functions. Then we need to make sure it will be converted into a colormap object if it's a string.
 *
 * @param colormap A colormap ID or Object
 * @returns The colormap
 *
 * TODO check clearitify the unknown type
 */
export function ensuresColormap(colormap: unknown): unknown;

/**
 * Restores a false color image to its original version
 *
 * @param image A Cornerstone Image Object
 * @returns True if the image object had a valid restore function, which was run. Otherwise, false.
 */
export function restoreImage(image: Image): boolean;

/**
 * Convert an image to a false color image
 *
 * @param image A Cornerstone Image Object
 * @param colormap  it can be a colormap object or a colormap id (string)
 * @returns Whether or not the image has been converted to a false color image
 */
export function convertImageToFalseColorImage(image: Image, colormap: string | object): boolean;

/**
 * Convert the image of a element to a false color image
 *
 * @param element The Cornerstone element
 * @param colormap it can be a colormap object or a colormap id (string)
 */
export function convertToFalseColorImage(element: HTMLElement, colormap: string | object): void;

/**
 * Trigger a CustomEvent
 *
 * @param el The element or EventTarget to trigger the event upon
 * @param type The event type name
 * @param detail null The event data to be sent (optional, default null)
 */
export function triggerEvent(el: EventTarget, type: EventTypes, detail: CornerstoneEventData | null): void;
