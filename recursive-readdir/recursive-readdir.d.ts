// Type definitions for recursive-readdir v1.2.1
// Project: https://github.com/jergason/recursive-readdir/
// Definitions by: Elisée Maurer <https://github.com/elisee/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "recursive-readdir" {

    module RecursiveReaddir {
        interface readdir {
            (path: string, callback: (error: Error, files: string[]) => any): void;
            // ignorePattern supports glob syntax via https://github.com/isaacs/minimatch
            (path: string, ignorePattern: string[], callback: (error: Error, files: string[]) => any): void;
        }
    }

    var r: RecursiveReaddir.readdir;
    export = r;
}
