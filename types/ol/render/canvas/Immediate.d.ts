import { Extent } from '../../extent';
import { Transform } from '../../transform';
import VectorContext from '../VectorContext';

export default class CanvasImmediateRenderer extends VectorContext {
    constructor(context: CanvasRenderingContext2D, pixelRatio: number, extent: Extent, transform: Transform, viewRotation: number);
}
