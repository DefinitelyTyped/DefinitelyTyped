import { EventsKey } from './events';
import Event from './events/Event';
import LRUCache from './structs/LRUCache';
import TileRange from './TileRange';

export default class TileCache extends LRUCache<any> {
    constructor(opt_highWaterMark?: number);
    expireCache(usedTiles: { [key: string]: TileRange }): void;
    pruneExceptNewestZ(): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
