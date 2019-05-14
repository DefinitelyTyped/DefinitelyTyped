import Event from 'ol/events/Event';
import PluggableMap, { FrameState } from 'ol/PluggableMap';
import EventType from 'ol/render/EventType';
import MapRenderer from 'ol/renderer/Map';
import { Size } from 'ol/size';
import PriorityQueue from 'ol/structs/PriorityQueue';
import Tile from 'ol/Tile';
import WebGLContext from 'ol/webgl/Context';
export interface TextureCacheEntry {
    magFilter: number;
    minFilter: number;
    texture: WebGLTexture;
}
export default class WebGLMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    protected handleWebGLContextLost(event: Event): void;
    protected handleWebGLContextRestored(): void;
    bindTileTexture(tile: Tile, tileSize: Size, tileGutter: number, magFilter: number, minFilter: number): void;
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    getContext(): WebGLContext;
    getGL(): WebGLRenderingContext;
    getTileTextureQueue(): PriorityQueue<any[]>;
    isTileTextureLoaded(tile: Tile): boolean;
}
