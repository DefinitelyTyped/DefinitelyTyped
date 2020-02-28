import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import Feature from '../../Feature';
import Geometry from '../../geom/Geometry';
import SimpleGeometry from '../../geom/SimpleGeometry';
import { Transform } from '../../transform';
import { DeclutterGroup, FillStrokeState } from '../canvas';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';

export default class CanvasReplay extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    protected coordinates: number[];
    protected hitDetectionInstructions: any[];
    protected instructions: any[];
    protected maxLineWidth: number;
    protected overlaps: boolean;
    protected pixelRatio: number;
    protected state: FillStrokeState;
    protected tolerance: number;
    protected appendFlatCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number, closed: boolean, skipFirst: boolean): number;
    protected applyPixelRatio(dashArray: number[]): number[];
    protected beginGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    protected getBufferedMaxExtent(): Extent;
    protected maxExtent: Extent;
    protected resolution: number;
    applyStroke(state: FillStrokeState): void;
    createFill(state: FillStrokeState, geometry: Geometry | RenderFeature): any[];
    createStroke(state: FillStrokeState): any[];
    drawCustom(): void;
    drawCustom(geometry: SimpleGeometry, feature: Feature | RenderFeature, renderer: () => void): void;
    drawCustomCoordinates_(flatCoordinates: number[], offset: number, ends: number[], stride: number, replayEnds: number[]): number;
    endGeometry(geometry: Geometry | RenderFeature, feature: Feature | RenderFeature): void;
    finish(): void;
    renderDeclutter_(declutterGroup: DeclutterGroup, feature: Feature | RenderFeature): void;
    replay(context: CanvasRenderingContext2D, transform: Transform, viewRotation: number, skippedFeaturesHash: { [key: string]: boolean }, snapToPixel: boolean): void;
    replayHitDetection<T>(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        skippedFeaturesHash: { [key: string]: boolean },
        opt_featureCallback?: () => void,
        opt_hitExtent?: Extent
    ): T | undefined;
    replayImage_(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        anchorX: number,
        anchorY: number,
        declutterGroup: DeclutterGroup,
        height: number,
        opacity: number,
        originX: number,
        originY: number,
        rotation: number,
        scale: number,
        snapToPixel: boolean,
        width: number,
        padding: number[],
        fillInstruction: any[],
        strokeInstruction: any[]
    ): void;
    replayTextBackground_(context: CanvasRenderingContext2D, p1: Coordinate, p2: Coordinate, p3: Coordinate, p4: Coordinate, fillInstruction: any[], strokeInstruction: any[]): void;
    reverseHitDetectionInstructions(): void;
    updateFillStyle(state: FillStrokeState, createFill: (this: CanvasReplay, p0: FillStrokeState, p1: Geometry | RenderFeature) => any[], geometry: Geometry | RenderFeature): void;
    updateStrokeStyle(state: FillStrokeState, applyStroke: (this: CanvasReplay, p0: FillStrokeState) => void): void;
}
