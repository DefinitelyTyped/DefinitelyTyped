import getPolyfill = require('./polyfill');

declare function shimGetOwnPropertyDescriptors(): ReturnType<typeof getPolyfill>;
export = shimGetOwnPropertyDescriptors;
