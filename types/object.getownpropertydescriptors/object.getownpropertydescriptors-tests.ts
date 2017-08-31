/// <reference types="node" />

import * as getOwnPropertyDescriptors from 'object.getownpropertydescriptors';

const obj = { normal: Infinity };
const enumDescriptor = {
        enumerable: false,
        writable: false,
        configurable: true,
        value: true
};
const writableDescriptor = {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 42
};

Object.defineProperty(obj, 'enumerable', enumDescriptor);
Object.defineProperty(obj, 'writable', writableDescriptor);

const descriptors = getOwnPropertyDescriptors(obj);
