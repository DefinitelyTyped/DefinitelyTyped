/// <reference types="node"/>

import thunky = require("thunky");
import thunkyp = require("thunky/promise");

const test = thunky((callback: (num: number) => void) => {
    setTimeout(() => {
        callback(Math.random());
    }, 1000);
});

test; // $ExpectType (callback: (num: number) => void) => void

test(num => {
    num; // $ExpectType number
});

declare const db: {
    open(conn: string, cb: (err: Error | undefined, db: DB) => void): void;
};

interface DB {
    query(q: string, cb: (err: Error | undefined, data?: any) => void): void;
}

const getDb = thunky((callback: (err: Error | undefined, db: DB) => void) => {
    db.open("", callback);
});

getDb; // $ExpectType (callback: (err: Error | undefined, db: DB) => void) => void
getDb((err, db) => {
    err; // $ExpectType Error | undefined
    db; // $ExpectType DB
});

thunkyp(async () => 42); // $ExpectType () => Promise<number>
thunkyp(async (foo: string) => 42); // $ExpectType (foo: string) => Promise<number>
thunkyp(() => 42); // $ExpectType () => Promise<number>
thunkyp((foo: string) => 42); // $ExpectType (foo: string) => Promise<number>
