import countImport = require('./count');
import emptyImport = require('./empty');
import errorImport = require('./error');
import infiniteImport = require('./infinite');
import keysImport = require('./keys');
import onceImport = require('./once');
import valuesImport = require('./values');

export const count: typeof countImport;
export const empty: typeof emptyImport;
export const error: typeof errorImport;
export const infinite: typeof infiniteImport;
export const keys: typeof keysImport;
export const once: typeof onceImport;
export const values: typeof valuesImport;
