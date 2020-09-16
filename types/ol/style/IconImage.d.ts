import { Color } from '../color';
import Target from '../events/Target';
import ImageState from '../ImageState';
import { Size } from '../size';

export default class IconImage extends Target {
    constructor(
        image: HTMLImageElement | HTMLCanvasElement,
        src: string | undefined,
        size: Size,
        crossOrigin: string,
        imageState: ImageState,
        color: Color,
    );
    getHitDetectionImage(): HTMLImageElement | HTMLCanvasElement;
    getImage(pixelRatio: number): HTMLImageElement | HTMLCanvasElement;
    getImageState(): ImageState;
    getPixelRatio(pixelRatio: number): number;
    getSize(): Size;
    getSrc(): string;
    load(): void;
}
export function get(
    image: HTMLImageElement | HTMLCanvasElement,
    src: string,
    size: Size,
    crossOrigin: string,
    imageState: ImageState,
    color: Color,
): IconImage;
