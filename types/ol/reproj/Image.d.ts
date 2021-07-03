import { Extent } from '../extent';
import ImageBase from '../ImageBase';
import Projection from '../proj/Projection';

export type FunctionType = (p0: Extent, p1: number, p2: number) => ImageBase;
export default class ReprojImage extends ImageBase {
    constructor(
        sourceProj: Projection,
        targetProj: Projection,
        targetExtent: Extent,
        targetResolution: number,
        pixelRatio: number,
        getImageFunction: FunctionType,
        opt_contextOptions?: any,
    );
    /**
     * Clean up.
     */
    disposeInternal(): void;
    getImage(): HTMLCanvasElement;
    getProjection(): Projection;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
}
