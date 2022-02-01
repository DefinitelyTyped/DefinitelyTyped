import { FeatureLike } from '../../Feature';
import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import SimpleGeometry from '../../geom/SimpleGeometry';
import { Transform } from '../../transform';
import { Label, SerializableInstructions } from '../canvas';
import RBush from 'rbush';

export interface BBox {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    value: any;
}
export type FeatureCallback<T> = (p0: FeatureLike, p1: SimpleGeometry) => T;
export interface ImageOrLabelDimensions {
    drawImageX: number;
    drawImageY: number;
    drawImageW: number;
    drawImageH: number;
    originX: number;
    originY: number;
    scale: number[];
    declutterBox: BBox;
    canvasTransform: Transform;
}
export type ReplayImageOrLabelArgs = any;
export default class Executor {
    constructor(resolution: number, pixelRatio: number, overlaps: boolean, instructions: SerializableInstructions);
    protected coordinates: number[];
    protected hitDetectionInstructions: any[];
    protected instructions: any[];
    protected overlaps: boolean;
    protected pixelRatio: number;
    protected resolution: number;
    createLabel(text: string, textKey: string, fillKey: string, strokeKey: string): Label;
    execute(
        context: CanvasRenderingContext2D,
        contextScale: number,
        transform: Transform,
        viewRotation: number,
        snapToPixel: boolean,
        opt_declutterTree?: RBush<any>,
    ): void;
    executeHitDetection<T>(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        opt_featureCallback?: FeatureCallback<T>,
        opt_hitExtent?: Extent,
    ): T | undefined;
    replayTextBackground_(
        context: CanvasRenderingContext2D,
        p1: Coordinate,
        p2: Coordinate,
        p3: Coordinate,
        p4: Coordinate,
        fillInstruction: any[],
        strokeInstruction: any[],
    ): void;
}
