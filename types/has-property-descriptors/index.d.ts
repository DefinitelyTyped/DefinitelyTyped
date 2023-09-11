// Type definitions for has-property-descriptors 1.0
// Project: https://github.com/inspect-js/has-property-descriptors#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function hasPropertyDescriptors(): boolean;

declare namespace hasPropertyDescriptors {
    function hasArrayLengthDefineBug(): boolean
}

export = hasPropertyDescriptors;
