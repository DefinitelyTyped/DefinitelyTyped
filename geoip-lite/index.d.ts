// Type definitions for GeoIP-lite 1.1.6
// Project: https://github.com/bluesmoon/node-geoip
// Definitions by: Yuce Tekol <http://yuce.me/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace mod {
    export interface Lookup {
        range: Array<number>; // range start, end
        country: string;
        region: string;
        city: string;
        ll: Array<number>; // latitude, longitude
    }

    export function lookup(ip: string): Lookup;
    export function pretty(ip: number): string;
    export function startWatchingDataUpdate(): void;
    export function stopWatchingDataUpdate(): void;
}
export = mod;
