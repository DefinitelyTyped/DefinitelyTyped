import getOwnPropertyDescriptors = require('./implementation');

declare function getPolyfill(): typeof getOwnPropertyDescriptors;
export = getPolyfill;
