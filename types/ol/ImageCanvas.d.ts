import { Extent } from './extent';
import ImageBase from './ImageBase';

/**
 * A function that is called to trigger asynchronous canvas drawing.  It is
 * called with a "done" callback that should be called when drawing is done.
 * If any error occurs during drawing, the "done" callback should be called with
 * that error.
 */
export type Loader = (p0: (p0?: Error) => void) => void;
export default class ImageCanvas extends ImageBase {
    constructor(extent: Extent, resolution: number, pixelRatio: number, canvas: HTMLCanvasElement, opt_loader?: Loader);
    /**
     * Get any error associated with asynchronous rendering.
     */
    getError(): Error;
    getImage(): HTMLCanvasElement;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
}
