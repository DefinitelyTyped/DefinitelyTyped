import { Extent } from '../extent';
import ImageBase from '../ImageBase';
import Projection from '../proj/Projection';

export type FunctionType = (() => void);
export default class ReprojImage extends ImageBase {
    constructor(sourceProj: Projection, targetProj: Projection, targetExtent: Extent, targetResolution: number, pixelRatio: number, getImageFunction: FunctionType);
    getProjection(): Projection;
}
