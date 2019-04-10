// Type definitions for rehype-react 2.0
// Project: https://github.com/rhysd/rehype-react
// Definitions by: Adrian Kremer <https://github.com/adriankremer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import React from "react";

export interface Options {
    createElement: typeof React.createElement,
    components: {
        [tagName: string]: React.ComponentType<any>
    },
    prefix?: string
}

export default class RehypeReact {
    constructor(options: Options)
    Compiler: (node: any) => any
}
