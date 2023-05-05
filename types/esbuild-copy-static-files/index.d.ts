// Type definitions for esbuild-copy-static-files 0.1
// Project: https://github.com/nickjj/esbuild-copy-static-files
// Definitions by: David Enke <https://github.com/davidenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ You can declare types that are available via importing the module */
export interface CopyStaticFilesOptions {
    src: string;
    dest: string;
    filter: (src: string, dest: string) => boolean;

    dereference: boolean;
    errorOnExist: boolean;
    force: boolean;
    preserveTimestamps: boolean;
    recursive: boolean;
}

declare function copyStaticFiles(options?: Partial<CopyStaticFilesOptions>): (build: any) => void;
export default copyStaticFiles;
