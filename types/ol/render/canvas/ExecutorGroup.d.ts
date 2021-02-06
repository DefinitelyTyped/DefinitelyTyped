import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import { DeclutterItems } from '../../PluggableMap';
import { Transform } from '../../transform';
import { DeclutterGroup } from '../canvas';
import { SerializableInstructions } from './Builder';
import BuilderType from './BuilderType';

export default class ExecutorGroup {
    constructor(
        maxExtent: Extent,
        resolution: number,
        pixelRatio: number,
        overlaps: boolean,
        allInstructions: { [key: string]: { [key in BuilderType]: SerializableInstructions } },
        opt_renderBuffer?: number,
    );
    clip(context: CanvasRenderingContext2D, transform: Transform): void;
    execute(
        context: CanvasRenderingContext2D,
        contextScale: number,
        transform: Transform,
        viewRotation: number,
        snapToPixel: boolean,
        opt_builderTypes?: BuilderType[],
        opt_declutterReplays?: { [key: string]: DeclutterGroup },
    ): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        resolution: number,
        rotation: number,
        hitTolerance: number,
        callback: (p0: FeatureLike) => T,
        declutteredFeatures: FeatureLike[],
    ): T | undefined;
    getClipCoords(transform: Transform): number[];
    hasExecutors(executors: BuilderType[]): boolean;
    isEmpty(): boolean;
}
/**
 * This methods creates a circle inside a fitting array. Points inside the
 * circle are marked by true, points on the outside are undefined.
 * It uses the midpoint circle algorithm.
 * A cache is used to increase performance.
 */
export function getCircleArray(radius: number): (boolean | undefined)[][];
export function replayDeclutter(
    declutterReplays: { [key: string]: any[] },
    context: CanvasRenderingContext2D,
    rotation: number,
    opacity: number,
    snapToPixel: boolean,
    declutterItems: DeclutterItems[],
): void;
