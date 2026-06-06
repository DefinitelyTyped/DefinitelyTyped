/// <reference types="node" />
import { Compiler } from "webpack";

interface Options {
    overlay?: boolean;
    runsInNextJs?: boolean;
}

declare class PreactRefreshPlugin {
    constructor(options?: Options);

    apply(compiler: Compiler): void;
}

export = PreactRefreshPlugin;
