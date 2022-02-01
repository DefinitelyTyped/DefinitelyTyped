import Feature from '../Feature';
import { ObjectEvent } from '../Object';
import PluggableMap, { FrameState } from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import { Pixel } from '../pixel';
import { OrderFunction } from '../render';
import RenderEvent from '../render/Event';
import CanvasVectorImageLayerRenderer from '../renderer/canvas/VectorImageLayer';
import CanvasVectorLayerRenderer from '../renderer/canvas/VectorLayer';
import CanvasVectorTileLayerRenderer from '../renderer/canvas/VectorTileLayer';
import WebGLPointsLayerRenderer from '../renderer/webgl/PointsLayer';
import VectorSource from '../source/Vector';
import VectorTile from '../source/VectorTile';
import { StyleFunction, StyleLike } from '../style/Style';
import { BackgroundColor } from './Base';
import Layer from './Layer';

export type TBaseVectorLayerBaseEventTypes = 'change' | 'error';
export type TBaseVectorLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:source'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TBaseVectorLayerRenderEventTypes = 'postrender' | 'prerender';
export interface Options<VectorSourceType extends VectorSource | VectorTile = VectorSource | VectorTile> {
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    renderOrder?: OrderFunction | undefined;
    renderBuffer?: number | undefined;
    source?: VectorSourceType | undefined;
    map?: PluggableMap | undefined;
    declutter?: boolean | undefined;
    style?: StyleLike | null | undefined;
    background?: BackgroundColor | undefined;
    updateWhileAnimating?: boolean | undefined;
    updateWhileInteracting?: boolean | undefined;
    properties?: Record<string, any> | undefined;
}
export default class BaseVectorLayer<
    VectorSourceType extends VectorSource | VectorTile = VectorSource | VectorTile,
    RendererType extends
        | CanvasVectorLayerRenderer
        | CanvasVectorTileLayerRenderer
        | CanvasVectorImageLayerRenderer
        | WebGLPointsLayerRenderer =
        | CanvasVectorLayerRenderer
        | CanvasVectorTileLayerRenderer
        | CanvasVectorImageLayerRenderer
        | WebGLPointsLayerRenderer,
> extends Layer<VectorSourceType, RendererType> {
    constructor(opt_options?: Options<VectorSourceType>);
    getDeclutter(): boolean;
    /**
     * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
     * that resolves with an array of features. The array will either contain the topmost feature
     * when a hit was detected, or it will be empty.
     * The hit detection algorithm used for this method is optimized for performance, but is less
     * accurate than the one used in {@link module:ol/PluggableMap~PluggableMap#getFeaturesAtPixel}: Text
     * is not considered, and icons are only represented by their bounding box instead of the exact
     * image.
     */
    getFeatures(pixel: Pixel): Promise<Feature<Geometry>[]>;
    getRenderBuffer(): number | undefined;
    getRenderOrder(): (p0: Feature<Geometry>, p1: Feature<Geometry>) => number | null | undefined;
    /**
     * Get the style for features.  This returns whatever was passed to the style
     * option at construction or to the setStyle method.
     */
    getStyle(): StyleLike | null | undefined;
    /**
     * Get the style function.
     */
    getStyleFunction(): StyleFunction | undefined;
    getUpdateWhileAnimating(): boolean;
    getUpdateWhileInteracting(): boolean;
    /**
     * Render declutter items for this layer
     */
    renderDeclutter(frameState: FrameState): void;
    setRenderOrder(renderOrder: OrderFunction | null | undefined): void;
    /**
     * Set the style for features.  This can be a single style object, an array
     * of styles, or a function that takes a feature and resolution and returns
     * an array of styles. If set to null, the layer has no style (a null style),
     * so only features that have their own styles will be rendered in the layer. Call
     * setStyle() without arguments to reset to the default style. See
     * {@link module:ol/style/Style~Style} for information on the default style.
     */
    setStyle(opt_style?: StyleLike | null): void;
    on(type: TBaseVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TBaseVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TBaseVectorLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TBaseVectorLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TBaseVectorLayerBaseEventTypes | TBaseVectorLayerBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TBaseVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TBaseVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TBaseVectorLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TBaseVectorLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TBaseVectorLayerObjectEventTypes | TBaseVectorLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TBaseVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TBaseVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TBaseVectorLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TBaseVectorLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TBaseVectorLayerRenderEventTypes | TBaseVectorLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
