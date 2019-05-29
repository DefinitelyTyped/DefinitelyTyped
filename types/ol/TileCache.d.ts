import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import LRUCache from 'ol/structs/LRUCache';
import TileRange from 'ol/TileRange';
export default class TileCache extends LRUCache<any> {
    constructor(opt_highWaterMark?: number);
    expireCache(usedTiles: { [key: string]: TileRange }): void;
    pruneExceptNewestZ(): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
