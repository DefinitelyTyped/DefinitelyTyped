import Renderer from '../common/Renderer.js';

export default class WebGPURenderer extends Renderer {
    constructor(parameters?: {
        canvas?: HTMLCanvasElement | undefined;
        antialias?: boolean | undefined;
        sampleCount?: number | undefined;
        logarithmicDepthBuffer?: boolean | undefined;
    });
}
