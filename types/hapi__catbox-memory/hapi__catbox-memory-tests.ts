import * as CatboxMemory from '@hapi/catbox-memory';
import { Client } from '@hapi/catbox';

const client = new CatboxMemory<string>({
    allowMixedContent: true,
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
});

const client2 = new CatboxMemory<string>();

const catboxMemoryOptions: CatboxMemory.Options = {
    allowMixedContent: true,
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
};

const client3 = new Client<string>(CatboxMemory, catboxMemoryOptions);
