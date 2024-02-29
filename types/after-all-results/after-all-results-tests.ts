/// <reference types="node" />

import * as fs from "node:fs";
import afterAll = require("after-all-results");

// $ExpectType (callback?: ((err: Error | null, ...args: unknown[]) => void) | undefined) => (err: Error | null, result: number | Stats) => void
const next = afterAll((err, results: [fs.Stats, number]) => {});

fs.stat("/path", next());
fs.open(
    "/path",
    next((err, fd) => {
        err; // $ExpectType Error | null
        fd; // $ExpectType unknown
    }),
);
// @ts-expect-error
fs.opendir("/path", next());
