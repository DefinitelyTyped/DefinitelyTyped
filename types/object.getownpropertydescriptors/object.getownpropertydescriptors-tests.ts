import descriptors = require('object.getownpropertydescriptors');

descriptors({ language: 'TypeScript' });
// => { language: TypedPropertyDescriptor<string>; }

const { language } = descriptors({ language: 'TypeScript' });

language;
// => {
//      writable: undefined | boolean,
//      enumerable: undefined | boolean,
//      configurable: undefined | boolean,
//      get: undefined | (() => string),
//      set: undefined | ((value: string) => void),
//      value: undefined | string
// }

descriptors.shim();
// => typeof descriptors

const getOwnPropertyDescriptorsPolyfill = descriptors.getPolyfill();

getOwnPropertyDescriptorsPolyfill({ name: 'object.getownpropertydescriptors' });
// => { name: TypedPropertyDescriptor<string>; }

descriptors.implementation();
// => typeof descriptors
