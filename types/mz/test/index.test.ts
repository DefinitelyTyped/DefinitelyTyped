import mz = require('mz');

import child_process = require('mz/child_process');
import crypto = require('mz/crypto');
import dns = require('mz/dns');
import fs = require('mz/fs');
import readline = require('mz/readline');
import zlib = require('mz/zlib');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

expectType<typeof child_process>(mz.child_process);
expectType<typeof crypto>(mz.crypto);
expectType<typeof dns>(mz.dns);
expectType<typeof fs>(mz.fs);
expectType<typeof readline>(mz.readline);
expectType<typeof zlib>(mz.zlib);
