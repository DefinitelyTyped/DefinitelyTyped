// Type definitions for preact-custom-element 4.0
// Project: https://github.com/preactjs/preact-custom-element#readme
// Definitions by: Nicolai Kasper <https://github.com/paull39>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

import { ComponentClass, FunctionComponent, FunctionalComponent } from 'preact';
declare function register(
    componentDefinition: FunctionComponent<any> | ComponentClass<any> | FunctionalComponent<any>,
    tagName: string,
    observedAttributes?: string[],
    options?: { shadow: boolean },
): void;

export = register;
