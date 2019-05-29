import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import VectorContext from 'ol/render/VectorContext';
import { Size } from 'ol/size';
import WebGLContext from 'ol/webgl/Context';
export default class WebGLImmediateRenderer extends VectorContext {
    constructor(context: WebGLContext, center: Coordinate, resolution: number, rotation: number, size: Size, extent: Extent, pixelRatio: number);
}
