import Target from './events/Target';
import { Extent } from './extent';
import ImageState from './ImageState';

export default abstract class ImageBase extends Target {
    constructor(extent: Extent, resolution: number | undefined, pixelRatio: number, state: ImageState);
    protected extent: Extent;
    protected resolution: number;
    protected state: ImageState;
    protected changed(): void;
    getExtent(): Extent;
    abstract getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    getPixelRatio(): number;
    getResolution(): number;
    getState(): ImageState;
    /**
     * Load not yet loaded URI.
     */
    abstract load(): void;
}
