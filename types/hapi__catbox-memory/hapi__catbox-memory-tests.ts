import * as CatboxMemory from '@hapi/catbox-memory';

const client = new CatboxMemory<string>({
    allowMixedContent: true,
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
});
