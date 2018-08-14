// Type definitions for shallow-equals v1.0.0
// Project: https://github.com/hughsk/shallow-equals
// Definitions by: Ross Solomon <https://github.com/rsolomon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function shallowEquals<A, B>(
    a?: A,
    b?: B,
    compare?: (objA?: A, objB?: B) => boolean,
): boolean;

declare namespace shallowEquals {

}

export = shallowEquals;
