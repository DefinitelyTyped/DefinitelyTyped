import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import Feature from '../../Feature';
import { Size } from '../../size';
import WebGLContext from '../../webgl/Context';
import RenderFeature from '../Feature';
import ReplayGroup from '../ReplayGroup';

export default class WebGLReplayGroup extends ReplayGroup {
    constructor(tolerance: number, maxExtent: Extent, opt_renderBuffer?: number);
    finish(context: WebGLContext): void;
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        context: WebGLContext,
        center: Coordinate,
        resolution: number,
        rotation: number,
        size: Size,
        pixelRatio: number,
        opacity: number,
        skippedFeaturesHash: { [key: string]: boolean },
        callback: (p0: Feature | RenderFeature) => T | undefined
    ): T | undefined;
    getDeleteResourcesFunction(context: WebGLContext): () => void;
    hasFeatureAtCoordinate(
        coordinate: Coordinate,
        context: WebGLContext,
        center: Coordinate,
        resolution: number,
        rotation: number,
        size: Size,
        pixelRatio: number,
        opacity: number,
        skippedFeaturesHash: { [key: string]: boolean }
    ): boolean;
    replay(context: WebGLContext, center: Coordinate, resolution: number, rotation: number, size: Size, pixelRatio: number, opacity: number, skippedFeaturesHash: { [key: string]: boolean }): void;
}
