import { Extent } from './extent';
import ImageBase from './ImageBase';
import ImageState from './ImageState';

export type LoadFunction = (p0: ImageWrapper, p1: string) => void;
export default class ImageWrapper extends ImageBase {
    constructor(
        extent: Extent,
        resolution: number | undefined,
        pixelRatio: number,
        src: string,
        crossOrigin: string,
        imageLoadFunction: LoadFunction,
    );
    protected state: ImageState;
    getImage(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    load(): void;
    setImage(image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): void;
}
export function listenImage(
    image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement,
    loadHandler: () => any,
    errorHandler: () => any,
): () => void;
