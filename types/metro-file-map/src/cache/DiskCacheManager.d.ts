import type { BuildParameters, CacheData, CacheManager, FileData } from '../flow-types';

export interface DiskCacheConfig {
    buildParameters: BuildParameters;
    cacheFilePrefix?: string | null;
    cacheDirectory?: string | null;
}

export class DiskCacheManager implements CacheManager {
    constructor(options: DiskCacheConfig);
    static getCacheFilePath(
        buildParameters: BuildParameters,
        cacheFilePrefix?: string | null,
        cacheDirectory?: string | null,
    ): string;
    getCacheFilePath(): string;
    read(): Promise<CacheData | null>;
    write(
        dataSnapshot: CacheData,
        { changed, removed }: Readonly<{ changed: FileData; removed: FileData }>,
    ): Promise<void>;
}
