import { Extent } from '../../extent';
import WebGLReplay from './Replay';

export interface PolygonSegment {
    p0: PolygonVertex;
    p1: PolygonVertex;
}
export interface PolygonVertex {
    x: number;
    y: number;
    i: number;
    reflex?: boolean;
}
export default class WebGLPolygonReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
}
