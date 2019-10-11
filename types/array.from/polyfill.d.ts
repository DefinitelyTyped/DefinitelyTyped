import ArrayFrom = require('./implementation');

declare function getPolyfill(): typeof ArrayFrom;
export = getPolyfill;
