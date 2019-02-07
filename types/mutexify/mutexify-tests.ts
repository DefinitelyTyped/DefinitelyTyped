import mutexify = require("mutexify");
const lock = mutexify();

lock(release => {
    release();
});
