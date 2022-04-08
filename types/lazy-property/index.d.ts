// Type definitions for lazy-property 1.0
// Project: https://github.com/mikolalysenko/lazy-property
// Definitions by: Jan Kühnlein <https://github.com/jank1310>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function addLazyProperty(
    object: object,
    name: string,
    initializer: () => any,
    enumerable?: boolean,
): void;

export = addLazyProperty;
