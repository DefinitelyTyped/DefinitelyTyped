import promisify = require('./implementation');
import util = require('util');

declare function getPolyfill(): typeof promisify | typeof util.promisify;
export = getPolyfill;
