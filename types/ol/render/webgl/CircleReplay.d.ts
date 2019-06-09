import { Extent } from 'ol/extent';
import WebGLReplay from 'ol/render/webgl/Replay';
export default class WebGLCircleReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
}
