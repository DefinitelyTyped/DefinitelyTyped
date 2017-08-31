// Type definitions for Object.getOwnPropertyDescriptors
// Project: https://github.com/ljharb/Object.getOwnPropertyDescriptors
// Definitions by: Taras Mankovski <https://github.com/taras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ObjectGetOwnPropertyDescriptors {
  /**
   * Returns an object containing all own property descriptors of an object
   * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor } ;
}

declare module "object.getownpropertydescriptors" {
  export = ObjectGetOwnPropertyDescriptors;
}
