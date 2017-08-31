// Type definitions for Object.getOwnPropertyDescriptors 2.0
// Project: https://github.com/ljharb/Object.getOwnPropertyDescriptors
// Definitions by: Taras Mankovski <https://github.com/taras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Returns an object containing all own property descriptors of an object
 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
export function getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };
