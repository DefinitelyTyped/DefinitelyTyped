import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import { Size } from '../../size';
import WebGLContext from '../../webgl/Context';
import VectorContext from '../VectorContext';

export default class WebGLImmediateRenderer extends VectorContext {
    constructor(context: WebGLContext, center: Coordinate, resolution: number, rotation: number, size: Size, extent: Extent, pixelRatio: number);
}
