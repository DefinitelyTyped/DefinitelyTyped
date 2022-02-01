import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import LRUCache from './structs/LRUCache';

export type TTileCacheBaseEventTypes = 'change' | 'error';
export default class TileCache extends LRUCache<any> {
    constructor();
    expireCache(usedTiles: Record<string, boolean>): void;
    /**
     * Prune all tiles from the cache that don't have the same z as the newest tile.
     */
    pruneExceptNewestZ(): void;
    on(type: TTileCacheBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileCacheBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileCacheBaseEventTypes | TTileCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
}
