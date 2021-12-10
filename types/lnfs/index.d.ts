// Type definitions for lnfs 3.0
// Project: https://github.com/kevva/lnfs
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as fs from 'fs';

export = lnfs;

/**
 * Safely force create symlinks.
 *
 * @param src Path to source file.
 * @param dest Path to destination.
 * @param type Default: `file`. Is only available on Windows (ignored on other platforms).
 *
 * @example
 * import lnfs = require('lnfs');
 *
 * lnfs('foo.txt', 'bar.txt').then(() => {
 *   console.log('Symlink successfully created!');
 * });
 */
declare function lnfs(src: string, dest: string, type?: fs.symlink.Type): Promise<string>;
