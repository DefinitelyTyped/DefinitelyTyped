import walk = require("npm-bundled");

// Async with promise
async function test() {
    const result: string[] = await walk();
    const resultPath: string[] = await walk({ path: "/tmp/project" });
    const resultStr: string[] = await walk("/tmp/project");
}

// Async with callback
walk({ path: "/tmp" }, (err, result) => {
    if (err) return;
    const names: string[] = result;
});

// Sync
const syncResult: string[] = walk.sync();
const syncPath: string[] = walk.sync({ path: "/tmp" });
const syncStr: string[] = walk.sync("/tmp");

// BundleWalker class
const walker = new walk.BundleWalker({ path: "/tmp" });
walker.on("done", (result: string[]) => {});
walker.start();
const result: string[] = walker.result;

// BundleWalkerSync class
const syncWalker = new walk.BundleWalkerSync({ path: "/tmp" });
syncWalker.start();
const syncRes: string[] = syncWalker.result;
