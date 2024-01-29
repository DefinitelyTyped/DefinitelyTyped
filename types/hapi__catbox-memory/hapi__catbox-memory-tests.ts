import { Client } from "@hapi/catbox";
import { Engine as CatboxMemory } from "@hapi/catbox-memory";

const client = new CatboxMemory<string>({
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
});

const client2 = new CatboxMemory<string>();

const catboxMemoryOptions: CatboxMemory.Options = {
    cloneBuffersOnGet: false,
    maxByteSize: 1024,
    minCleanupIntervalMsec: 1000,
};

const client3 = new Client<string>(CatboxMemory, catboxMemoryOptions);
