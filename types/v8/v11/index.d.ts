// Type definitions for non-npm package Node.js 11.15
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Ivan Sieder <https://github.com/ivansieder>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Readable } from 'stream';

export {};

export interface HeapSpaceInfo {
    space_name: string;
    space_size: number;
    space_used_size: number;
    space_available_size: number;
    physical_space_size: number;
}

// ** Signifies if the --zap_code_space option is enabled or not.  1 == enabled, 0 == disabled. */
export type DoesZapCodeSpaceFlag = 0 | 1;

export interface HeapInfo {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: DoesZapCodeSpaceFlag;
}

export function getHeapStatistics(): HeapInfo;
export function getHeapSpaceStatistics(): HeapSpaceInfo[];
export function setFlagsFromString(flags: string): void;
/**
 * Generates a snapshot of the current V8 heap and returns a Readable
 * Stream that may be used to read the JSON serialized representation.
 * This conversation was marked as resolved by joyeecheung
 * This JSON stream format is intended to be used with tools such as
 * Chrome DevTools. The JSON schema is undocumented and specific to the
 * V8 engine, and may change from one version of V8 to the next.
 */
export function getHeapSnapshot(): Readable;

/**
 *
 * @param fileName The file path where the V8 heap snapshot is to be
 * saved. If not specified, a file name with the pattern
 * `'Heap-${yyyymmdd}-${hhmmss}-${pid}-${thread_id}.heapsnapshot'` will be
 * generated, where `{pid}` will be the PID of the Node.js process,
 * `{thread_id}` will be `0` when `writeHeapSnapshot()` is called from
 * the main Node.js thread or the id of a worker thread.
 */
export function writeHeapSnapshot(fileName?: string): string;
