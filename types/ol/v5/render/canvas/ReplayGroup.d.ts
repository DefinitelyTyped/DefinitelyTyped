import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import Feature from '../../Feature';
import { Transform } from '../../transform';
import { DeclutterGroup } from '../canvas';
import RenderFeature from '../Feature';
import ReplayGroup from '../ReplayGroup';
import ReplayType from '../ReplayType';
import CanvasReplay from './Replay';

export default class CanvasReplayGroup extends ReplayGroup {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any, opt_renderBuffer?: number);
    clip(context: CanvasRenderingContext2D, transform: Transform): void;
    finish(): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        resolution: number,
        rotation: number,
        hitTolerance: number,
        skippedFeaturesHash: { [key: string]: boolean },
        callback: (p0: Feature | RenderFeature) => T,
        declutterReplays: { [key: string]: DeclutterGroup }
    ): T | undefined;
    getClipCoords(transform: Transform): number[];
    getReplays(): { [key: string]: { [key in ReplayType]: CanvasReplay } };
    hasReplays(replays: ReplayType[]): boolean;
    replay(
        context: CanvasRenderingContext2D,
        transform: Transform,
        viewRotation: number,
        skippedFeaturesHash: { [key: string]: boolean },
        snapToPixel: boolean,
        opt_replayTypes?: ReplayType[],
        opt_declutterReplays?: { [key: string]: DeclutterGroup }
    ): void;
}
export function getCircleArray(radius: number): (boolean | undefined)[][];
export function replayDeclutter(declutterReplays: { [key: string]: any[] }, context: CanvasRenderingContext2D, rotation: number, snapToPixel: boolean): void;
