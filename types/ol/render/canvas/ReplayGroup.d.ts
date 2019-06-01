import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import Feature from 'ol/Feature';
import { DeclutterGroup } from 'ol/render/canvas';
import CanvasReplay from 'ol/render/canvas/Replay';
import RenderFeature from 'ol/render/Feature';
import ReplayGroup from 'ol/render/ReplayGroup';
import ReplayType from 'ol/render/ReplayType';
import { Transform } from 'ol/transform';
export function getCircleArray(radius: number): any[][];
export function replayDeclutter(declutterReplays: { [key: string]: any[] }, context: CanvasRenderingContext2D, rotation: number, snapToPixel: boolean): void;
export default class CanvasReplayGroup extends ReplayGroup {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any, opt_renderBuffer?: number);
    clip(context: CanvasRenderingContext2D, transform: Transform): void;
    finish(): void;
    forEachFeatureAtCoordinate<T>(coordinate: Coordinate, resolution: number, rotation: number, hitTolerance: number, skippedFeaturesHash: { [key: string]: boolean }, callback: ((param0: Feature | RenderFeature) => T), declutterReplays: { [key: string]: DeclutterGroup }): T;
    getClipCoords(transform: Transform): number[];
    getReplays(): { [key: string]: { [key in ReplayType]: CanvasReplay } };
    hasReplays(replays: ReplayType[]): boolean;
    replay(context: CanvasRenderingContext2D, transform: Transform, viewRotation: number, skippedFeaturesHash: { [key: string]: boolean }, snapToPixel: boolean, opt_replayTypes?: ReplayType[], opt_declutterReplays?: { [key: string]: DeclutterGroup }): void;
}
