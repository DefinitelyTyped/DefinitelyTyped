// Type definitions for rehype-react 4.0
// Project: https://github.com/rhysd/rehype-react
// Definitions by: Adrian Kremer <https://github.com/adriankremer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface Options {
    createElement: typeof React.createElement;
    Fragment?: React.ComponentType<{ children?: React.ReactNode }>;
    components?: {
        [tagName: string]: React.ComponentType<any>;
    };
    prefix?: string;
}

declare class RehypeReact {
    constructor(options: Options)
    Compiler: (node: any) => any;
}

export = RehypeReact;
