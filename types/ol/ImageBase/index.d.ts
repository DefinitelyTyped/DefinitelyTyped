declare module 'ol/ImageBase' {

  import Target from 'ol/events/Target';
  import { Extent } from 'ol/extent';
  import ImageState from 'ol/ImageState';

  export default class ImageBase extends Target {
    constructor(extent: Extent, resolution: number, pixelRatio: number, state: ImageState);
    protected extent: Extent;
    protected resolution: number;
    protected state: ImageState;
    protected changed(): void;
    getExtent(): Extent;
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    getPixelRatio(): number;
    getResolution(): number;
    getState(): ImageState;
    load(): void;
  }

}
