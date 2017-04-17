// Type definitions for requireDir
// Project: https://github.com/aseemk/requireDir
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "require-dir" {
    namespace requireDir {
        interface Option {
            /**
             * Whether to recursively require() subdirectories too.
             * (node_modules within subdirectories will be ignored.)
             * Default is false.
             */
            recurse?: boolean;
            /**
             * Automatically add camelcase aliases for files with dash- and underscore-separated names.
             * E.g. foo-bar.js will be exposed under both the original 'foo-bar' name as well as a 'fooBar' alias.
             * Default is false.
             */
            camelcase?: boolean;
            /**
             * Specifying this option require()'s all files and returns full filename keys in addition to basename keys.
             * Default is false.
             */
            duplicates?: boolean;
        }
    }

    function requireDir(path?: string, option?: requireDir.Option): { [name: string]: any };

    export = requireDir;
}
