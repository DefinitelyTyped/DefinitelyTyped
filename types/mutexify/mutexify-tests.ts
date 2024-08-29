import mutexify = require("mutexify");
const lock = mutexify();

lock(release => {
    release();
});

import mutexifyPromises = require("mutexify/promise");
const lockPromises = mutexifyPromises();

async function usesLock() {
    const release = await lockPromises();
    release();
}
