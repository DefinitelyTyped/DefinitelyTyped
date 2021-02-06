// Type definitions for vue-cropperjs 4.1
// Project: https://github.com/Agontuk/vue-cropperjs
// Definitions by: Dylan Kidd <https://github.com/Dylkid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VueConstructor } from 'vue';

export type previewPropType = string | string[] | Element | NodeList;

export type DragMode = 'none' | 'crop' | 'move';

export interface CroppedCanvasOptions {
  /**
   * the destination width of the output canvas.
   */
  width?: number;
  /**
   *  the destination height of the output canvas.
   */
  height?: number;
  /**
   * the minimum destination width of the output canvas, the default value is 0.
   */
  minWidth?: number;
  /**
   * the minimum destination height of the output canvas, the default value is 0.
   */
  minHeight?: number;
  /**
   * the maximum destination width of the output canvas, the default value is Infinity.
   */
  maxWidth?: number;
  /**
   * the maximum destination height of the output canvas, the default value is Infinity.
   */
  maxHeight?: number;
  /**
   * a color to fill any alpha values in the output canvas, the default value is transparent.
   */
  fillColor?: string;
  /**
   * set to change if images are smoothed (true, default) or not (false).
   */
  imageSmoothingEnabled?: boolean;
  /**
   * set the quality of image smoothing, one of "low" (default), "medium", or "high".
   */
  imageSmoothingQuality?: 'low' | 'medium' | 'high';
}

export interface CropBoxData {
  /**
   * the offset left of the crop box
   */
  left: number;
  /**
   * the offset top of the crop box
   */
  top: number;
  /**
   * the width of the crop box
   */
  width: number;
  /**
   * the height of the crop box
   */
  height: number;
}

export interface CanvasData {
  /**
   * the offset left of the canvas
   */
  left: number;
  /**
   * the offset top of the canvas
   */
  top: number;
  /**
   * the width of the canvas
   */
  width: number;
  /**
   * the height of the canvas
   */
  height: number;
  /**
   * the natural width of the canvas (read only)
   */
  naturalWidth: number;
  /**
   * the natural height of the canvas (read only)
   */
  naturalHeight: number;
}

export interface ImageData {
  /**
   * the offset left of the image
   */
  left: number;
  /**
   * the offset top of the image
   */
  top: number;
  /**
   * the width of the image
   */
  width: number;
  /**
   * the height of the image
   */
  height: number;
  /**
   * the natural width of the image
   */
  naturalWidth: number;
  /**
   * the natural height of the image
   */
  naturalHeight: number;
  /**
   * the aspect ratio of the image
   */
  aspectRatio: number;
  /**
   * the rotated degrees of the image if rotated
   */
  rotate: number;
  /**
   * the scaling factor to apply on the abscissa of the image if scaled
   */
  scaleX: number;
  /**
   * the scaling factor to apply on the ordinate of the image if scaled
   */
  scaleY: number;
}

export interface ContainerData {
  /**
   * the current width of the container
   */
  width: number;
  /**
   * the current height of the container
   */
  height: number;
}

export interface CropperData {
  /**
   * the offset left of the cropped area
   */
  x: number;
  /**
   * the offset top of the cropped area
   */
  y: number;
  /**
   * the width of the cropped area
   */
  width: number;
  /**
   * the height of the cropped area
   */
  height: number;
  /**
   * the rotated degrees of the image
   */
  rotate: number;
  /**
   * the scaling factor to apply on the abscissa of the image
   */
  scaleX: number;
  /**
   * the scaling factor to apply on the ordinate of the image
   */
  scaleY: number;
}

export interface VueCropperMethods {
  /**
   * Reset cropper to original state
   */
  reset(): void;
  /**
   * Clear image from the cropper
   */
  clear(): void;
  /**
   * Initialize the cropper
   */
  initCrop(): void;
  /**
   * Replace the image's src and rebuild the cropper.
   * @param url A new image url.
   * @param hasSameSize Default false If the new image has the same size as the old one,
   * then it will not rebuild the cropper and only update the URLs of all related images. This can be used for applying filters.
   */
  replace(url: string, hasSameSize?: boolean): void;
  /**
   * Enable (unfreeze) the cropper.
   */
  enable(): void;
  /**
   * Disable (freeze) the cropper.
   */
  disable(): void;
  /**
   * Destroy the cropper and remove the instance from the image.
   */
  destroy(): void;
  /**
   * Move the canvas (image wrapper) with relative offsets.
   * @param offsetX Moving size (px) in the horizontal direction.
   * @param offsetY Moving size (px) in the vertical direction. If not present, its default value is offsetX.
   */
  move(offsetX: number, offsetY?: number): void;
  /**
   * Move the canvas (image wrapper) to an absolute point.
   * @param x The left value of the canvas
   * @param y The top value of the canvas. If not present, its default value is x.
   */
  moveTo(x: number, y?: number): void;
  /**
   * Zoom the canvas (image wrapper) with a relative ratio.
   * @param ratio Zoom in: requires a positive number (ratio > 0) Zoom out: requires a negative number (ratio < 0)
   * @param _originalEvent
   */
  relativeZoom(ratio: number, _originalEvent?: Event): void;
  /**
   * Zoom the canvas (image wrapper) to an absolute ratio.
   * @param ratio Requires a positive number (ratio > 0)
   * @param _originalEvent
   */
  zoomTo(ratio: number, _originalEvent?: Event): void;
  /**
   * Rotate the image with a relative degree.
   * @param degree Rotate right: requires a positive number (degree > 0) Rotate left: requires a negative number (degree < 0)
   */
  rotate(degree: number): void;
  /**
   * Rotate the image to an absolute degree.
   * @param degree Amount to rotate image
   */
  rotateTo(degree: number): void;
  /**
   * @param _scaleX The scaling factor to apply to the abscissa of the image. When equal to 1 it does nothing
   */
  scaleX(_scaleX: number): void;
  /**
   * @param _scaleY The scaling factor to apply to the ordinate of the image. When equal to 1 it does nothing
   */
  scaleY(_scaleY: number): void;
  /**
   * Scale the image.
   * Requires CSS3 2D Transforms support (IE 9+).
   * @param scaleX The scaling factor to apply to the abscissa of the image. When equal to 1 it does nothing
   * @param scaleY The scaling factor to apply to the ordinate of the image. When equal to 1 it does nothing
   */
  scale(scaleX: number, scaleY?: number): void;
  /**
   * Change the cropped area position and size with new data (base on the original image).
   * Note: This method only available when the value of the viewMode option is greater than or equal to 1.
   * @param data The cropper data to set with. You may need to round the data properties before passing them in.
   */
  setData(data: CropperData): void;
  /**
   * Output the final cropped area position and size data (base on the natural size of the original image).
   */
  getData(rounded?: boolean): CropperData;
  /**
   * Output the container size data.
   */
  getContainerData(): ContainerData;
  /**
   * Output the image position, size, and other related data.
   */
  getImageData(): ImageData;
  /**
   * Output the canvas (image wrapper) position and size data.
   */
  getCanvasData(): CanvasData;
  /**
   * Change the canvas (image wrapper) position and size with new data.
   * @param data Canvas Data to be set
   */
  setCanvasData(data: CanvasData): void;
  /**
   * Output the crop box position and size data.
   */
  getCropBoxData(): CropBoxData;
  /**
   * Change the crop box position and size with new data.
   * @param data Crop Box Data
   */
  setCropBoxData(data: CropBoxData): void;
  /**
   * Get a canvas drawn the cropped image (lossy compression). If it is not cropped, then returns a canvas drawn the whole image.
   * Avoid to get a blank (or black) output image, you might need to set the maxWidth and maxHeight properties to limited numbers, because of the size limits of a canvas element.
   * Also, you should limit them maximum zoom ratio (in the zoom event) as the same reason.
   * @param options
   */
  getCroppedCanvas(options?: CroppedCanvasOptions): HTMLCanvasElement;
  /**
   * Change the aspect ratio of the crop box.
   * @param aspectRatio
   */
  setAspectRatio(aspectRatio: number): void;
  /**
   * Change the drag mode.
   * Tips: You can toggle the "crop" and "move" mode by double click on the cropper.
   * @param mode
   */
  setDragMode(mode: DragMode): void;
}

export interface VueCropperProps {
  containerStyle: Record<string, any>;
  src: {
    type: string;
    default: '';
  };
  alt: string;
  imgStyle: Record<string, any>;

  viewMode: number;
  dragMode: string;
  initialAspectRatio: number;
  aspectRatio: number;
  data: Record<string, any>;
  preview: previewPropType;
  responsive: {
    type: boolean;
    default: true;
  };
  restore: {
    type: boolean;
    default: true;
  };
  checkCrossOrigin: {
    type: boolean;
    default: true;
  };
  checkOrientation: {
    type: boolean;
    default: true;
  };
  modal: {
    type: boolean;
    default: true;
  };
  guides: {
    type: boolean;
    default: true;
  };
  center: {
    type: boolean;
    default: true;
  };
  highlight: {
    type: boolean;
    default: true;
  };
  background: {
    type: boolean;
    default: true;
  };
  autoCrop: {
    type: boolean;
    default: true;
  };
  autoCropArea: number;
  movable: {
    type: boolean;
    default: true;
  };
  rotatable: {
    type: boolean;
    default: true;
  };
  scalable: {
    type: boolean;
    default: true;
  };
  zoomable: {
    type: boolean;
    default: true;
  };
  zoomOnTouch: {
    type: boolean;
    default: true;
  };
  zoomOnWheel: {
    type: boolean;
    default: true;
  };
  wheelZoomRatio: number;
  cropBoxMovable: {
    type: boolean;
    default: true;
  };
  cropBoxResizable: {
    type: boolean;
    default: true;
  };
  toggleDragModeOnDblclick: {
    type: boolean;
    default: true;
  };

  minCanvasWidth: number;
  minCanvasHeight: number;
  minCropBoxWidth: number;
  minCropBoxHeight: number;
  minContainerWidth: number;
  minContainerHeight: number;

  ready: () => void;
  cropstart: () => void;
  cropmove: () => void;
  cropend: () => void;
  crop: () => void;
  zoom: () => void;
}
export interface VueCropperJsConstructor extends VueConstructor {
  props: VueCropperProps;
  methods: VueCropperMethods;
  data: () => void;
}

export const VueCropperJs: VueCropperJsConstructor;

export default VueCropperJs;
