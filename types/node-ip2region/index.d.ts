// Type definitions for node-ip2region 1.0
// Project: https://github.com/lionsoul2014/ip2region
// Definitions by: DCsunset <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/// <reference types="node" />

type SearchResult = {
    city: number;
    region: string;
} | null;

type SearchCallback = (err: NodeJS.ErrnoException, result: SearchResult) => void;

declare class IP2Region {
    //#region Static Functions

    // Single Instance
    static create(dbPath?: string): IP2Region;

    /**
     * For backward compatibility
     */
    static destroy(): void;

    //#endregion

    constructor(options?: { dbPath: string });

    //#region Public Functions
    /**
     * Destroy the current file by closing it.
     */
    destroy(): void;

    /**
     * Sync of binarySearch.
     * @param ip The IP address to search for.
     * @return A result something like `{ city: 2163, region: '中国|0|广东省|深圳市|阿里云' }`
     */
    binarySearchSync(ip: string): SearchResult;

    /**
     * Async of binarySearch.
     * @param ip The IP address to search for.
     * @param callBack The callBack function with two parameters, if successful,
     * err is null and result is `{ city: 2163, region: '中国|0|广东省|深圳市|阿里云' }`
     */
    binarySearch(ip: string, callBack: SearchCallback): void;

    /**
     * Sync of btreeSearch.
     * @param ip The IP address to search for.
     * @return A result something like `{ city: 2163, region: '中国|0|广东省|深圳市|阿里云' }`
     */
    btreeSearchSync(ip: string): SearchResult;

    /**
     * Async of btreeSearch.
     * @param ip The IP address to search for.
     * @param callBack The callBack function with two parameters, if successful,
     * err is null and result is `{ city: 2163, region: '中国|0|广东省|深圳市|阿里云' }`
     */
    btreeSearch(ip: string, callBack: SearchCallback): void;

    /**
     * Sync of MemorySearch.
     * @param ip
     */
    memorySearchSync(ip: string): SearchResult;

    /**
     * Async of MemorySearch.
     * @param ip
     */
    memorySearch(ip: string, callBack: SearchCallback): void;
}

export = IP2Region;
