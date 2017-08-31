import * as getOwnPropertyDescriptors from 'object.getownpropertydescriptors';

let obj = { normal: Infinity };
let enumDescriptor = {
        enumerable: false,
        writable: false,
        configurable: true,
        value: true
};
let writableDescriptor = {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 42
};

Object.defineProperty(obj, 'enumerable', enumDescriptor);
Object.defineProperty(obj, 'writable', writableDescriptor);

let descriptors = getOwnPropertyDescriptors(obj);