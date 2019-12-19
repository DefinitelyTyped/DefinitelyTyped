import Target from './events/Target';
import { Extent } from './extent';
import ImageState from './ImageState';

export default class ImageBase extends Target {
    constructor(extent: Extent, resolution: number | undefined, pixelRatio: number, state: ImageState);
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
