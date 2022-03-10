// Type definitions for @prefresh/webpack 3.3
// Project: https://github.com/preactjs/prefresh#readme
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Compiler } from 'webpack';

interface Options {
    overlay?: boolean;
    runsInNextJs?: boolean;
}

declare class PreactRefreshPlugin {
    constructor(options?: Options);

    apply(compiler: Compiler): void;
}

export = PreactRefreshPlugin;
