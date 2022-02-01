import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import RenderEvent from '../render/Event';
import WebGLTileLayerRenderer from '../renderer/webgl/TileLayer';
import DataTileSource from '../source/DataTile';
import TileImage from '../source/TileImage';
import { ExpressionValue } from '../style/expressions';
import { UniformValue } from '../webgl/Helper';
import PaletteTexture from '../webgl/PaletteTexture';
import BaseTileLayer from './BaseTile';

export type TWebGLTileLayerBaseEventTypes = 'change' | 'error';
export type TWebGLTileLayerObjectEventTypes =
    | 'change:extent'
    | 'change:maxResolution'
    | 'change:maxZoom'
    | 'change:minResolution'
    | 'change:minZoom'
    | 'change:opacity'
    | 'change:preload'
    | 'change:source'
    | 'change:useInterimTilesOnError'
    | 'change:visible'
    | 'change:zIndex'
    | 'propertychange';
export type TWebGLTileLayerRenderEventTypes = 'postrender' | 'prerender';
export interface Options {
    style?: Style | undefined;
    className?: string | undefined;
    opacity?: number | undefined;
    visible?: boolean | undefined;
    extent?: Extent | undefined;
    zIndex?: number | undefined;
    minResolution?: number | undefined;
    maxResolution?: number | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    preload?: number | undefined;
    source?: SourceType | undefined;
    map?: PluggableMap | undefined;
    useInterimTilesOnError?: boolean | undefined;
    cacheSize?: number | undefined;
}
export interface ParsedStyle {
    vertexShader: string;
    fragmentShader: string;
    uniforms: Record<string, UniformValue>;
    paletteTextures: PaletteTexture[];
}
export type SourceType = DataTileSource | TileImage;
/**
 * Translates tile data to rendered pixels.
 */
export interface Style {
    variables?: Record<string, string | number> | undefined;
    color?: ExpressionValue | undefined;
    brightness?: ExpressionValue | undefined;
    contrast?: ExpressionValue | undefined;
    exposure?: ExpressionValue | undefined;
    saturation?: ExpressionValue | undefined;
    gamma?: ExpressionValue | undefined;
}
export default class WebGLTileLayer extends BaseTileLayer<SourceType, WebGLTileLayerRenderer> {
    constructor(opt_options: Options);
    /**
     * Clean up underlying WebGL resources.
     */
    dispose(): void;
    /**
     * Update the layer style.  The updateStyleVariables function is a more efficient
     * way to update layer rendering.  In cases where the whole style needs to be updated,
     * this method may be called instead.
     */
    setStyle(style: Style): void;
    /**
     * Update any variables used by the layer style and trigger a re-render.
     */
    updateStyleVariables(variables: Record<string, number>): void;
    on(type: TWebGLTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TWebGLTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TWebGLTileLayerBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TWebGLTileLayerBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TWebGLTileLayerBaseEventTypes | TWebGLTileLayerBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TWebGLTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TWebGLTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TWebGLTileLayerObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TWebGLTileLayerObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TWebGLTileLayerObjectEventTypes | TWebGLTileLayerObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TWebGLTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    on(type: TWebGLTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    once(type: TWebGLTileLayerRenderEventTypes, listener: ListenerFunction<RenderEvent>): EventsKey;
    once(type: TWebGLTileLayerRenderEventTypes[], listener: ListenerFunction<RenderEvent>): EventsKey[];
    un(
        type: TWebGLTileLayerRenderEventTypes | TWebGLTileLayerRenderEventTypes[],
        listener: ListenerFunction<RenderEvent>,
    ): void;
}
