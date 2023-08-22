// Type definitions for skeleton-rendezvous 1.1
// Project: https://github.com/SocketCluster/skeleton-rendezvous#readme
// Definitions by: aikoven <https://github.com/aikoven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SkeletonRendezvousHasher {
    interface Options {
        fanout?: number;
        hashAlgorithm?: string;
        targetClusterSize?: number;
        minClusterSize?: number;
        sites?: string[];
    }
}

// eslint-disable-next-line no-redeclare
declare class SkeletonRendezvousHasher {
    constructor(options?: SkeletonRendezvousHasher.Options);
    getSites(): string[];
    setSites(sites: string[]): void;
    addSites(sites: string[]): void;
    removeSites(sites: string | string[]): void;
    findSite(key: string): string;
    hash(key: string): string;
}

export = SkeletonRendezvousHasher;
