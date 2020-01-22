import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import Feature from '../../Feature';
import { Size } from '../../size';
import WebGLBuffer from '../../webgl/Buffer';
import WebGLContext from '../../webgl/Context';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';
import Locations from './circlereplay/defaultshader/Locations';
import WebGLLineStringReplay from './LineStringReplay';
import Locations_1 from './linestringreplay/defaultshader/Locations';
import Locations_2 from './polygonreplay/defaultshader/Locations';
import Locations_3 from './texturereplay/defaultshader/Locations';

export default class WebGLReplay extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent);
    protected indices: number[];
    protected indicesBuffer: WebGLBuffer;
    protected lineStringReplay: WebGLLineStringReplay;
    protected origin: Coordinate;
    protected startIndices: number[];
    protected startIndicesFeature: (Feature | RenderFeature)[];
    protected tolerance: number;
    protected vertices: number[];
    protected verticesBuffer: WebGLBuffer;
    protected drawElements(gl: WebGLRenderingContext, context: WebGLContext, start: number, end: number): void;
    protected drawHitDetectionReplay<T>(
        gl: WebGLRenderingContext,
        context: WebGLContext,
        skippedFeaturesHash: { [key: string]: boolean },
        featureCallback: (p0: Feature | RenderFeature) => T | undefined,
        oneByOne: boolean,
        opt_hitExtent?: Extent
    ): T | undefined;
    protected drawHitDetectionReplayAll<T>(
        gl: WebGLRenderingContext,
        context: WebGLContext,
        skippedFeaturesHash: { [key: string]: boolean },
        featureCallback: (p0: Feature | RenderFeature) => T | undefined
    ): T | undefined;
    protected drawHitDetectionReplayOneByOne<T>(
        gl: WebGLRenderingContext,
        context: WebGLContext,
        skippedFeaturesHash: { [key: string]: boolean },
        featureCallback: (p0: Feature | RenderFeature) => T | undefined,
        opt_hitExtent?: Extent
    ): T | undefined;
    protected drawReplay(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, hitDetection: boolean): void;
    protected setUpProgram(gl: WebGLRenderingContext, context: WebGLContext, size: Size, pixelRatio: number): Locations | Locations_1 | Locations_2 | Locations_3;
    protected shutDownProgram(gl: WebGLRenderingContext, locations: Locations | Locations_1 | Locations_2 | Locations_3): void;
    protected maxExtent: Extent;
    finish(context: WebGLContext): void;
    getDeleteResourcesFunction(context: WebGLContext): () => void;
    replay<T>(
        context: WebGLContext,
        center: Coordinate,
        resolution: number,
        rotation: number,
        size: Size,
        pixelRatio: number,
        opacity: number,
        skippedFeaturesHash: { [key: string]: boolean },
        featureCallback: (p0: Feature | RenderFeature) => T | undefined,
        oneByOne: boolean,
        opt_hitExtent?: Extent
    ): T | undefined;
}
