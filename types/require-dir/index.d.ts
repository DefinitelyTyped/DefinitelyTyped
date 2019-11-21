// Type definitions for require-dir 1.0
// Project: https://github.com/aseemk/requireDir
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface options {
   recurse?: boolean;
   duplicates?: boolean;
   filter?: any;
   mapKey?: any;
   mapValue?: any;
}

declare function requireDir(directory: string, options?: options): { [path: string]: any };

export = requireDir;
