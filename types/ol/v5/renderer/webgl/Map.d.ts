import Event from '../../events/Event';
import PluggableMap, { FrameState } from '../../PluggableMap';
import EventType from '../../render/EventType';
import { Size } from '../../size';
import PriorityQueue from '../../structs/PriorityQueue';
import Tile from '../../Tile';
import WebGLContext from '../../webgl/Context';
import MapRenderer from '../Map';

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
