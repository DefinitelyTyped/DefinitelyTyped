// TypeScript Version: 2.1

/// <reference types="node" />
import fs = require("fs");

export = Yaml;

declare namespace Yaml {
    interface Options {
        encoding: string;
    }
}

declare function Yaml(path: fs.PathLike, options?: Partial<Yaml.Options>): any;
