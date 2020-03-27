import flat = require('./implementation');

declare function getPolyfill(): typeof flat;
export = getPolyfill;
