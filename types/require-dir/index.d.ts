// Type definitions for require-dir 0.3
// Project: https://github.com/aseemk/requireDir
// Definitions by: weekens <https://github.com/weekens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type options = {
   recurse?: boolean,
   duplicates?: boolean,
   filter?: any,
   mapKey?: any,
   mapValue?: any
}

declare function requireDir(directory: string, options: options): { [path: string]: any };

export = requireDir;
