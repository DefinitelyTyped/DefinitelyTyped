// Type definitions for react-is-deprecated v0.1.2
// Project: https://github.com/Aweary/react-is-deprecated
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module 'react-is-deprecated' {
  import { Validator, Requireable, ValidationMap, ReactPropTypes } from 'react';

  export function deprecate<T>(validator: Validator<T>, message: string): Validator<T>;

  interface Deprecatable<T> {
    isDeprecated: (message: string) => Validator<T>;
  }

  // Unfortunately this copy-paste must happen -- I can't just take PropTypes and programmatically
  // define a version that intersects in the Deprecatable interface into the keys.
  interface DeprecatablePropTypes {
    any: Requireable<any> & Deprecatable<any>;
    array: Requireable<any> & Deprecatable<any>;
    bool: Requireable<any> & Deprecatable<any>;
    func: Requireable<any> & Deprecatable<any>;
    number: Requireable<any> & Deprecatable<any>;
    object: Requireable<any> & Deprecatable<any>;
    string: Requireable<any> & Deprecatable<any>;
    node: Requireable<any> & Deprecatable<any>;
    element: Requireable<any> & Deprecatable<any>;
    instanceOf(expectedClass: {}): Requireable<any> & Deprecatable<any>;
    oneOf(types: any[]): Requireable<any> & Deprecatable<any>;
    oneOfType(types: Validator<any>[]): Requireable<any> & Deprecatable<any>;
    arrayOf(type: Validator<any>): Requireable<any> & Deprecatable<any>;
    objectOf(type: Validator<any>): Requireable<any> & Deprecatable<any>;
    shape(type: ValidationMap<any>): Requireable<any> & Deprecatable<any>;
  }

  export function addIsDeprecated(propTypes: ReactPropTypes): DeprecatablePropTypes;
}
