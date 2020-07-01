import { Extent } from '../../extent';
import { TransformFunction } from '../../proj';
import { Transform } from '../../transform';
import VectorContext from '../VectorContext';

export default class CanvasImmediateRenderer extends VectorContext {
    constructor(
        context: CanvasRenderingContext2D,
        pixelRatio: number,
        extent: Extent,
        transform: Transform,
        viewRotation: number,
        opt_squaredTolerance?: number,
        opt_userTransform?: TransformFunction,
    );
    setTransform(transform: Transform): void;
}
