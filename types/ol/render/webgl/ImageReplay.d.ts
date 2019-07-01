import { Extent } from '../../extent';
import WebGLTextureReplay from './TextureReplay';

export default class WebGLImageReplay extends WebGLTextureReplay {
    constructor(tolerance: number, maxExtent: Extent);
    protected hitDetectionImages_: any[];
    protected images_: any[];
}
