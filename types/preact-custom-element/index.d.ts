// Type definitions for preact-custom-element 4.3
// Project: https://github.com/preactjs/preact-custom-element#readme
// Definitions by: Nicolai Kasper <https://github.com/paull39>
//                 Jan Biasi <https://github.com/janbiasi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.9

import { ComponentClass, FunctionalComponent, FunctionComponent } from "preact";
declare function register(
    componentDefinition: FunctionComponent<any> | ComponentClass<any> | FunctionalComponent<any>,
    tagName?: string,
    observedAttributes?: string[],
    options?: { shadow: boolean; mode?: "open" | "closed" },
): void;

export = register;
