import * as CatboxMemory from 'catbox-memory';

const client = new CatboxMemory<string>({
    allowMixedContent: true,
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
});
