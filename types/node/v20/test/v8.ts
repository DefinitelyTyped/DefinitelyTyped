import * as assert from "node:assert";
import { Readable } from "node:stream";
import * as v8 from "node:v8";
import * as zlib from "node:zlib";

const heapStats = v8.getHeapStatistics();
const numOfDetached = heapStats.number_of_detached_contexts;
const heapSpaceStats = v8.getHeapSpaceStatistics();

const zapsGarbage: number = heapStats.does_zap_garbage;

v8.setFlagsFromString("--collect_maps");

const stream: Readable = v8.getHeapSnapshot();
const fileName = v8.writeHeapSnapshot("file");

v8.takeCoverage();
v8.stopCoverage();

{
    const profiler = new v8.GCProfiler();
    profiler.start();
    setTimeout(() => {
        console.log(profiler.stop());
    }, 1000);
}

const disable = v8.promiseHooks.createHook({
    init: (promise, parent) => {},
    before: promise => {},
    after: promise => {},
    settled: promise => {},
});

const stopInit = v8.promiseHooks.onInit((promise, parent) => {});
const stopBefore = v8.promiseHooks.onBefore(promise => {});
const stopAfter = v8.promiseHooks.onAfter(promise => {});
const stopSettled = v8.promiseHooks.onSettled(promise => {});

class BookShelf {
    storage: Map<string, Buffer | string> = new Map();

    constructor(bookNames: string[]) {
        for (const bookName of bookNames) {
            this.storage.set(bookName, bookName);
        }
    }

    static compressAll(shelf: BookShelf): void {
        for (const [book, content] of shelf.storage) {
            shelf.storage.set(book, zlib.gzipSync(content));
        }
    }

    static decompressAll(shelf: BookShelf): void {
        for (const [book, content] of shelf.storage) {
            shelf.storage.set(book, zlib.gunzipSync(content));
        }
    }
}

const bookNames = ["book1.en_US", "book1.es_ES", "book2.zh_CN"];

const shelf = new BookShelf(bookNames);

assert(v8.startupSnapshot.isBuildingSnapshot());
v8.startupSnapshot.addSerializeCallback(BookShelf.compressAll, shelf);
v8.startupSnapshot.addDeserializeCallback(BookShelf.decompressAll, shelf);
v8.startupSnapshot.setDeserializeMainFunction((shelf: BookShelf): void => {
    const lang = "en_US";
    const book = process.argv[1];
    const name = `${book}.${lang}`;
    console.log(shelf.storage.get(name));
}, shelf);

class A {
    foo = "bar";
}
v8.queryObjects(A); // $ExpectType number | string[]
const a = new A();
v8.queryObjects(A); // $ExpectType number | string[]
v8.queryObjects(A, { format: "count" }); // $ExpectType number
v8.queryObjects(A, { format: "summary" }); // $ExpectType string[]
