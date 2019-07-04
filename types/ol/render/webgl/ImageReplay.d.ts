import { Extent } from 'ol/extent';
import WebGLTextureReplay from 'ol/render/webgl/TextureReplay';
export default class WebGLImageReplay extends WebGLTextureReplay {
    constructor(tolerance: number, maxExtent: Extent);
    protected hitDetectionImages_: any[];
    protected images_: any[];
}
