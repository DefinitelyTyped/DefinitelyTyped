/// <reference types="node" />

import { Stats } from "fs";

/**
 * Safely clone a Node.js fs.Stats instance without losing class methods.
 *
 * @param stats - The fs.Stats instance to clone
 * @returns A new Stats instance with the same properties
 *
 * @example
 * ```javascript
 * var fs = require('fs');
 * var cloneStats = require('clone-stats');
 *
 * var stats = fs.statSync('file.txt');
 * var cloned = cloneStats(stats);
 *
 * cloned.isFile(); // still works!
 * ```
 */
declare function cloneStats(stats: Stats): Stats;

export = cloneStats;
