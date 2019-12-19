import { Extent } from './extent';
import ImageBase from './ImageBase';

export type Loader = (p0: (p0?: Error) => void) => void;
export default class ImageCanvas extends ImageBase {
    constructor(extent: Extent, resolution: number, pixelRatio: number, canvas: HTMLCanvasElement, opt_loader?: Loader);
    getError(): Error;
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
}
