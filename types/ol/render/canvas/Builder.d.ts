import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import Geometry from '../../geom/Geometry';
import { FillState, FillStrokeState, StrokeState, TextState } from '../canvas';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';

export interface SerializableInstructions {
    instructions: any[];
    hitDetectionInstructions: any[];
    coordinates: number[];
    textStates?: { [key: string]: TextState };
    fillStates?: { [key: string]: FillState };
    strokeStates?: { [key: string]: StrokeState };
}
export default class CanvasBuilder extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    protected coordinates: number[];
    protected hitDetectionInstructions: any[];
    protected instructions: any[];
    protected maxLineWidth: number;
    protected pixelRatio: number;
    protected state: FillStrokeState;
    protected tolerance: number;
    protected appendFlatCoordinates(
        flatCoordinates: number[],
        offset: number,
        end: number,
        stride: number,
        closed: boolean,
        skipFirst: boolean,
    ): number;
    protected applyPixelRatio(dashArray: number[]): number[];
    protected beginGeometry(geometry: Geometry | RenderFeature, feature: FeatureLike): void;
    protected getBufferedMaxExtent(): Extent;
    protected maxExtent: Extent;
    protected resolution: number;
    applyStroke(state: FillStrokeState): void;
    createFill(state: FillStrokeState): any[];
    createStroke(state: FillStrokeState): any[];
    drawCustom(): void;
    drawCustomCoordinates_(
        flatCoordinates: number[],
        offset: number,
        ends: number[],
        stride: number,
        builderEnds: number[],
    ): number;
    endGeometry(feature: FeatureLike): void;
    finish(): SerializableInstructions;
    reverseHitDetectionInstructions(): void;
    updateFillStyle(state: FillStrokeState, createFill: (this: CanvasBuilder, p0: FillStrokeState) => any[]): void;
    updateStrokeStyle(state: FillStrokeState, applyStroke: (this: CanvasBuilder, p0: FillStrokeState) => void): void;
}
