import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import RenderFeature from 'ol/render/Feature';
import WebGLReplay from 'ol/render/webgl/Replay';
export default class WebGLLineStringReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
    drawPolygonCoordinates(flatCoordinates: number[], holeFlatCoordinates: number[][], stride: number): void;
    getCurrentIndex(): number;
    setPolygonStyle(feature: Feature | RenderFeature, opt_index?: number): void;
}
