import RBush from 'rbush';
import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import Feature from '../../Feature';
import Geometry from '../../geom/Geometry';
import VectorLayer from '../../layer/Vector';
import { Pixel } from '../../pixel';
import { FrameState } from '../../PluggableMap';
import { TransformFunction } from '../../proj';
import BuilderGroup from '../../render/canvas/BuilderGroup';
import ExecutorGroup from '../../render/canvas/ExecutorGroup';
import Style from '../../style/Style';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';
import CanvasLayerRenderer from './Layer';

export default class CanvasVectorLayerRenderer extends CanvasLayerRenderer {
    constructor(vectorLayer: VectorLayer);
    forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    /**
     * Asynchronous layer level hit detection.
     */
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    prepareFrame(frameState: FrameState): boolean;
    /**
     * Render declutter items for this layer
     */
    renderDeclutter(frameState: FrameState): void;
    renderFeature(
        feature: Feature<Geometry>,
        squaredTolerance: number,
        styles: Style | Style[],
        builderGroup: BuilderGroup,
        opt_transform?: TransformFunction,
        opt_declutterBuilderGroup?: BuilderGroup,
    ): boolean;
    /**
     * Render the layer.
     */
    renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    renderWorlds(executorGroup: ExecutorGroup, frameState: FrameState, opt_declutterTree?: RBush<any>): void;
    /**
     * Get a rendering container from an existing target, if compatible.
     */
    useContainer(target: HTMLElement, transform: string, opacity: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
