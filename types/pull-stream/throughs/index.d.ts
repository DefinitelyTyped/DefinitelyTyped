import asyncMapImport = require('./async-map');
import filterNotImport = require('./filter-not');
import filterImport = require('./filter');
import flattenImport = require('./flatten');
import mapImport = require('./map');
import nonUniqueImport = require('./non-unique');
import takeImport = require('./take');
import throughImport = require('./through');
import uniqueImport = require('./unique');

export const asyncMap: typeof asyncMapImport;
export const filterNot: typeof filterNotImport;
export const filter: typeof filterImport;
export const flatten: typeof flattenImport;
export const map: typeof mapImport;
export const nonUnique: typeof nonUniqueImport;
export const take: typeof takeImport;
export const through: typeof throughImport;
export const unique: typeof uniqueImport;
