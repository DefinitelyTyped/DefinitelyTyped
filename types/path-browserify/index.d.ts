// Type definitions for path-browserify 1.0
// Project: https://github.com/browserify/path-browserify
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace path {
    interface PathObject {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    }

    interface Path {
        resolve(...pathSegments: string[]): string;
        normalize(path: string): string;
        isAbsolute(path: string): boolean;
        join(...paths: string[]): string;
        relative(from: string, to: string): string;
        dirname(path: string): string;
        basename(path: string, ext?: string): string;
        extname(path: string): string;
        format(pathObject: Partial<PathObject>): string;
        parse(path: string): PathObject;

        readonly sep: string;
        readonly delimiter: string;
        readonly win32: null;
        readonly posix: Path;
    }
}

declare const path: path.Path;
export = path;
