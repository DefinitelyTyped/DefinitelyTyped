import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import { Size } from '../../size';
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
    constructor(
        resolution: number,
        pixelRatio: number,
        overlaps: boolean,
        instructions: SerializableInstructions,
        renderBuffer: Size,
    );
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
    ): void;
    executeHitDetection<T>(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        opt_featureCallback?: () => void,
        opt_hitExtent?: Extent,
    ): T | undefined;
    renderDeclutter(declutterGroup: DeclutterGroup, feature: FeatureLike, opacity: number, declutterTree: any): any;
    replayTextBackground_(
        context: CanvasRenderingContext2D,
        p1: Coordinate,
        p2: Coordinate,
        p3: Coordinate,
        p4: Coordinate,
        fillInstruction: any[],
        strokeInstruction: any[],
        declutter: boolean,
    ): void;
}
