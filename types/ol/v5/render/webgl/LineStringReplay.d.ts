import { Extent } from '../../extent';
import Feature from '../../Feature';
import RenderFeature from '../Feature';
import WebGLReplay from './Replay';

export default class WebGLLineStringReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
    drawPolygonCoordinates(flatCoordinates: number[], holeFlatCoordinates: number[][], stride: number): void;
    getCurrentIndex(): number;
    setPolygonStyle(feature: Feature | RenderFeature, opt_index?: number): void;
}
