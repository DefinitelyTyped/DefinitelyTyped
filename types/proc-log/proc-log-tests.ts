/**
 * Test suite created by JDB <https://github.com/legodude17>
 */

/// <reference types="node" />

import log = require("proc-log");

log.error("some", "random", "args");
const only = {};
log.warn("not", only, "strings");
const any = 4;
log.notice(any, "value", "works");
log.info("isn't", "that", "cool?");
/**
 * No arguments works too
 */
log.verbose();
/**
 * Literally anything
 */
log.http(Symbol("hi!"));
/**
 * They accept any combination of arguments, so I can't really test the failure case
 */
log.silly("fail");

/**
 * Pause and resume
 */
log.pause();
log.resume();
// @ts-expect-error
log.pause("argument");
// @ts-expect-error
log.resume(only);

/**
 * LEVELS array
 */
// $ExpectType "error"
const error = log.LEVELS[0];
// @ts-expect-error
const fail = log.LEVELS[7];
