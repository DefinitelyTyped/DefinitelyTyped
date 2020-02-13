// Type definitions for config-yaml 1.1
// Project: https://github.com/neolao/config-yaml#readme
// Definitions by: Arylo Yeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

/// <reference types="node" />
import * as fs from 'fs';

export = Yaml;

declare namespace Yaml {
    interface Options {
        encoding: string;
    }
}

declare function Yaml(path: fs.PathLike, options?: Partial<Yaml.Options>): any;
