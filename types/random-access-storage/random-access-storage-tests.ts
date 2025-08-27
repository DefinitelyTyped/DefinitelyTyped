/// <reference types="node" />
import RandomAccessStorage = require("random-access-storage");

const storage = new RandomAccessStorage();

// $ExpectType boolean
storage.readable;
// $ExpectType boolean
storage.writable;
// $ExpectType boolean
storage.deletable;
// $ExpectType boolean
storage.truncatable;
// $ExpectType boolean
storage.statable;
// $ExpectType boolean
storage.opened;
// $ExpectType boolean
storage.closed;
// $ExpectType boolean
storage.unlinked;
// $ExpectType boolean
storage.writing;

const events = ["open", "close", "unlink", "suspend", "unsuspend"] as const;
events.forEach(event => {
    storage.on(event, () => {});
});

storage.open((_err: null | Error) => {});
storage.read(12, 34, (_err: null | Error, _data?: Buffer) => {});
storage.write(123, Buffer.alloc(0), (_err: null | Error) => {});
storage.del(12, 34, (_err: null | Error) => {});
storage.truncate(123, (_err: null | Error) => {});
storage.stat((_err: null | Error, _stats?: { size: number }) => {});
storage.suspend((_err: null | Error) => {});
storage.close((_err: null | Error) => {});
storage.unlink((_err: null | Error) => {});

new RandomAccessStorage({});
new RandomAccessStorage({
    createAlways: true,
    open(req) {
        // $ExpectType boolean
        req.create;
        req.callback(null);
        req.callback(new Error("test error"));
    },
    read(req) {
        // $ExpectType number
        req.offset;
        // $ExpectType number
        req.size;
        req.callback(null, Buffer.alloc(0));
        req.callback(new Error("test error"));
    },
    write(req) {
        // $ExpectType number
        req.offset;
        // $ExpectType Buffer || Buffer<ArrayBufferLike>
        req.data;
        req.callback(null);
        req.callback(new Error("test error"));
    },
    del(req) {
        // $ExpectType number
        req.offset;
        // $ExpectType number
        req.size;
        req.callback(null);
        req.callback(new Error("test error"));
    },
    truncate(req) {
        // $ExpectType number
        req.offset;
        req.callback(null);
        req.callback(new Error("test error"));
    },
    stat(req) {
        req.callback(null, { size: 123 });
        req.callback(new Error("test error"));
    },
    suspend(req) {
        req.callback(null);
        req.callback(new Error("test error"));
    },
    close(req) {
        req.callback(null);
        req.callback(new Error("test error"));
    },
    unlink(req) {
        req.callback(null);
        req.callback(new Error("test error"));
    },
});
