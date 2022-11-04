/**
 * Test suite created by JDB <https://github.com/legodude17>
 */

/// <reference types="node" />

import log = require('proc-log');
import buffer = require('buffer');
import http = require('http');

log.error('some', 'random', 'args');
const only = {};
log.warn('not', only, 'strings');
const any = 4;
log.notice(any, 'value', 'works');
const buffers = buffer.Buffer.alloc(8, 42);
log.info('even', buffers);
/**
 * No arguments works too
 */
log.verbose();
/**
 * Literally anything
 */
log.http(http);
/**
 * This should be a failure case but they accept any combination of arguments
 */
log.silly('fail');

/**
 * Pause and resume
 */
log.pause();
log.resume();
// @ts-expect-error
log.pause('argument');
// @ts-expect-error
log.resume(only);

/**
 * LEVELS array
 */
// $ExpectType "error"
const error = log.LEVELS[0];
// @ts-expect-error
const fail = log.LEVELS[7];
