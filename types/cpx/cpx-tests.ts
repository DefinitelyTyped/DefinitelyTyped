import * as cpx from "cpx";

const SRC = "**/.js";
const DEST = ".tmp/";
const callback = (error: Error | null) => { };
const ASYNC_OPTIONS: cpx.AsyncOptions = { includeEmptyDirs: true };
const SYNC_OPTIONS: cpx.SyncOptions = { preserve: true };
const WATCH_OPTIONS: cpx.WatchOptions = { initialCopy: true };

cpx.copy(SRC, DEST);
cpx.copy(SRC, DEST, callback);
cpx.copy(SRC, DEST, ASYNC_OPTIONS);
cpx.copy(SRC, DEST, ASYNC_OPTIONS, callback);

cpx.copySync(SRC, DEST, SYNC_OPTIONS);
cpx.copySync(SRC, DEST);

const watch = cpx.watch(SRC, DEST, WATCH_OPTIONS);
watch.close();
watch.open();
watch.on("copy", (x) => x);
