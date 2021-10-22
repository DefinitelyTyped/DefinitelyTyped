import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import Geometry from '../../geom/Geometry';
import SimpleGeometry from '../../geom/SimpleGeometry';
import Fill from '../../style/Fill';
import Stroke from '../../style/Stroke';
import { FillStrokeState, SerializableInstructions } from '../canvas';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';

export default class CanvasBuilder extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    protected coordinates: number[];
    protected hitDetectionInstructions: any[];
    protected instructions: any[];
    protected maxLineWidth: number;
    protected pixelRatio: number;
    protected state: FillStrokeState;
    protected tolerance: number;
    protected appendFlatLineCoordinates(
        flatCoordinates: number[],
        offset: number,
        end: number,
        stride: number,
        closed: boolean,
        skipFirst: boolean,
    ): number;
    protected appendFlatPointCoordinates(flatCoordinates: number[], stride: number): number;
    protected applyPixelRatio(dashArray: number[]): number[];
    protected beginGeometry(geometry: Geometry | RenderFeature, feature: FeatureLike): void;
    /**
     * Get the buffered rendering extent.  Rendering will be clipped to the extent
     * provided to the constructor.  To account for symbolizers that may intersect
     * this extent, we calculate a buffered extent (e.g. based on stroke width).
     */
    protected getBufferedMaxExtent(): Extent;
    protected maxExtent: Extent;
    protected resolution: number;
    applyStroke(state: FillStrokeState): void;
    createFill(state: FillStrokeState): any[];
    createStroke(state: FillStrokeState): any[];
    drawCustom(geometry: SimpleGeometry, feature: FeatureLike, renderer: () => void): void;
    drawCustomCoordinates_(
        flatCoordinates: number[],
        offset: number,
        ends: number[],
        stride: number,
        builderEnds: number[],
    ): number;
    endGeometry(feature: FeatureLike): void;
    finish(): SerializableInstructions;
    /**
     * Reverse the hit detection instructions.
     */
    reverseHitDetectionInstructions(): void;
    setFillStrokeStyle(fillStyle: Fill, strokeStyle: Stroke): void;
    updateFillStyle(state: FillStrokeState, createFill: (this: CanvasBuilder, p0: FillStrokeState) => any[]): void;
    updateStrokeStyle(state: FillStrokeState, applyStroke: (this: CanvasBuilder, p0: FillStrokeState) => void): void;
}
