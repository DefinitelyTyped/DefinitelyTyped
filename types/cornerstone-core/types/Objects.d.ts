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
