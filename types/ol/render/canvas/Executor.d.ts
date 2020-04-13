import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import { Transform } from '../../transform';
import { DeclutterGroup, FillState, Label, StrokeState, TextState } from '../canvas';

export interface SerializableInstructions {
    instructions: any[];
    hitDetectionInstructions: any[];
    coordinates: number[];
    textStates: { [key: string]: TextState };
    fillStates: { [key: string]: FillState };
    strokeStates: { [key: string]: StrokeState };
}
export default class Executor {
    constructor(resolution: number, pixelRatio: number, overlaps: boolean, instructions: SerializableInstructions);
    protected coordinates: number[];
    protected hitDetectionInstructions: any[];
    protected instructions: any[];
    protected overlaps: boolean;
    protected pixelRatio: number;
    protected resolution: number;
    createLabel(text: string, textKey: string, fillKey: string, strokeKey: string): Label;
    execute(context: CanvasRenderingContext2D, transform: Transform, viewRotation: number, snapToPixel: boolean): void;
    executeHitDetection<T>(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        opt_featureCallback?: () => void,
        opt_hitExtent?: Extent,
    ): T;
    renderDeclutter(declutterGroup: DeclutterGroup, feature: FeatureLike, opacity: number, declutterTree: any): any;
    replayImageOrLabel_(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        imageOrLabel: Label | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
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
        strokeInstruction: any[],
    ): void;
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
