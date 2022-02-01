import Collection from '../Collection';
import Feature, { FeatureLike } from '../Feature';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Geometry from '../geom/Geometry';
import SimpleGeometry from '../geom/SimpleGeometry';
import BaseVectorLayer from '../layer/BaseVector';
import VectorLayer from '../layer/Vector';
import CanvasVectorImageLayerRenderer from '../renderer/canvas/VectorImageLayer';
import CanvasVectorLayerRenderer from '../renderer/canvas/VectorLayer';
import CanvasVectorTileLayerRenderer from '../renderer/canvas/VectorTileLayer';
import WebGLPointsLayerRenderer from '../renderer/webgl/PointsLayer';
import VectorSource from '../source/Vector';
import VectorTile from '../source/VectorTile';
import { StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export type TModifyBaseEventTypes = 'change' | 'error';
export type TModifyObjectEventTypes = 'change:active' | 'propertychange';
export type TModifyModifyEventTypes = 'modifyend' | 'modifystart';
export interface Options {
    condition?: Condition | undefined;
    deleteCondition?: Condition | undefined;
    insertVertexCondition?: Condition | undefined;
    pixelTolerance?: number | undefined;
    style?: StyleLike | undefined;
    source?: VectorSource<Geometry> | undefined;
    hitDetection?:
        | boolean
        | BaseVectorLayer<
              VectorSource<Geometry> | VectorTile,
              | CanvasVectorLayerRenderer
              | CanvasVectorTileLayerRenderer
              | CanvasVectorImageLayerRenderer
              | WebGLPointsLayerRenderer
          >
        | undefined;
    features?: Collection<Feature<Geometry>> | undefined;
    wrapX?: boolean | undefined;
    snapToPointer?: boolean | undefined;
}
export interface SegmentData {
    depth?: number[] | undefined;
    feature: FeatureLike;
    geometry: SimpleGeometry;
    index?: number | undefined;
    segment: number[][];
    featureSegments?: SegmentData[] | undefined;
}
declare enum ModifyEventType {
    MODIFYSTART = 'modifystart',
    MODIFYEND = 'modifyend',
}
export default class Modify extends PointerInteraction {
    constructor(options: Options);
    /**
     * Get the overlay layer that this interaction renders the modification point or vertex to.
     */
    getOverlay(): VectorLayer<VectorSource<Geometry>>;
    /**
     * Handle pointer down events.
     */
    handleDownEvent(evt: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer drag events.
     */
    handleDragEvent(evt: MapBrowserEvent<UIEvent>): void;
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} and may modify the geometry.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer up events.
     */
    handleUpEvent(evt: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Removes the vertex currently being pointed.
     */
    removePoint(): boolean;
    /**
     * Activate or deactivate the interaction.
     */
    setActive(active: boolean): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: TModifyBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TModifyBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TModifyBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TModifyBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TModifyBaseEventTypes | TModifyBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TModifyObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TModifyObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TModifyObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TModifyObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TModifyObjectEventTypes | TModifyObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TModifyModifyEventTypes, listener: ListenerFunction<ModifyEvent>): EventsKey;
    on(type: TModifyModifyEventTypes[], listener: ListenerFunction<ModifyEvent>): EventsKey[];
    once(type: TModifyModifyEventTypes, listener: ListenerFunction<ModifyEvent>): EventsKey;
    once(type: TModifyModifyEventTypes[], listener: ListenerFunction<ModifyEvent>): EventsKey[];
    un(type: TModifyModifyEventTypes | TModifyModifyEventTypes[], listener: ListenerFunction<ModifyEvent>): void;
}
export class ModifyEvent extends BaseEvent {
    constructor(type: ModifyEventType, features: Collection<FeatureLike>, MapBrowserEvent: MapBrowserEvent<UIEvent>);
    /**
     * The features being modified.
     */
    features: Collection<FeatureLike>;
    /**
     * Associated {@link module:ol/MapBrowserEvent}.
     */
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
}
