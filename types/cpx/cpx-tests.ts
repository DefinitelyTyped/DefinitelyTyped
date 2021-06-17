import * as cpx from "cpx";

const SRC = "**/.js";
const DEST = ".tmp/";
const callback = (error: Error | null) => { };
const ASYNC_OPTIONS: cpx.AsyncOptions = { includeEmptyDirs: true };
const SYNC_OPTIONS: cpx.SyncOptions = { preserve: true };
const WATCH_OPTIONS: cpx.WatchOptions = { initialCopy: true };

cpx.copy(SRC, DEST); // $ExpectType Promise<void>
cpx.copy(SRC, DEST, callback); // $ExpectType Promise<void>
cpx.copy(SRC, DEST, ASYNC_OPTIONS); // $ExpectType Promise<void>
cpx.copy(SRC, DEST, ASYNC_OPTIONS, callback); // $ExpectType Promise<void>

cpx.copySync(SRC, DEST, SYNC_OPTIONS); // $ExpectType void
cpx.copySync(SRC, DEST); // $ExpectType void

const watch = cpx.watch(SRC, DEST, WATCH_OPTIONS);
watch.close();
watch.open();
watch.on("copy", (x) => x);
