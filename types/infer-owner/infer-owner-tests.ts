import inferOwner = require("infer-owner");

// Async usage
async function test() {
    const result = await inferOwner("/tmp");
    const uid: number = result.uid;
    const gid: number = result.gid;
}

// Sync usage
const syncResult = inferOwner.sync("/tmp");
const uid: number = syncResult.uid;
const gid: number = syncResult.gid;

// Clear cache
inferOwner.clearCache();
