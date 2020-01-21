import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import Feature, { FeatureLike } from '../../Feature';
import Geometry from '../../geom/Geometry';
import Layer from '../../layer/Layer';
import { Pixel } from '../../pixel';
import { FrameState } from '../../PluggableMap';
import Source from '../../source/Source';
import { UniformValue } from '../../webgl/Helper';
import WebGLLayerRenderer, { PostProcessesOptions } from './Layer';

export interface CustomAttribute {
    name: string;
    callback: (p0: Feature<Geometry>, p1: { [key: string]: any }) => number;
}
export interface FeatureCacheItem {
    feature: Feature<Geometry>;
    properties: { [key: string]: any };
    geometry: Geometry;
}
export interface Options {
    attributes?: CustomAttribute[];
    vertexShader: string;
    fragmentShader: string;
    hitVertexShader?: string;
    hitFragmentShader?: string;
    uniforms?: { [key: string]: UniformValue };
    postProcesses?: PostProcessesOptions[];
}
export default class WebGLPointsLayerRenderer extends WebGLLayerRenderer {
    constructor(layer: Layer<Source>, options: Options);
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T | void;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    handleFontsChanged(): void;
    prepareFrame(frameState: FrameState): boolean;
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    renderHitDetection(frameState: FrameState): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
