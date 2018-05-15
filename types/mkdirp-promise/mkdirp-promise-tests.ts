import mkdirpPromise = require("mkdirp-promise");

(async () => {
    const path = await mkdirpPromise("hello");
    if (path) await mkdirpPromise(path, { mode: 123 });
})();
