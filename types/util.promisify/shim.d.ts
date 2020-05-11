import getPolyfill = require('./polyfill');

declare function shimUtilPromisify(): ReturnType<typeof getPolyfill>;
export = shimUtilPromisify;
