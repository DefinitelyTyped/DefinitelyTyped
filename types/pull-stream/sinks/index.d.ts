import collectImport = require('./collect');
import concatImport = require('./concat');
import drainImport = require('./drain');
import findImport = require('./find');
import logImport = require('./log');
import onEndImport = require('./on-end');
import reduceImport = require('./reduce');

export const collect: typeof collectImport;
export const concat: typeof concatImport;
export const drain: typeof drainImport;
export const find: typeof findImport;
export const log: typeof logImport;
export const onEnd: typeof onEndImport;
export const reduce: typeof reduceImport;
