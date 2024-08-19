declare namespace path {
    interface PathObject {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    }

    interface Path {
        resolve(this: void, ...pathSegments: string[]): string;
        normalize(this: void, path: string): string;
        isAbsolute(this: void, path: string): boolean;
        join(this: void, ...paths: string[]): string;
        relative(this: void, from: string, to: string): string;
        dirname(this: void, path: string): string;
        basename(this: void, path: string, ext?: string): string;
        extname(this: void, path: string): string;
        format(this: void, pathObject: Partial<PathObject>): string;
        parse(this: void, path: string): PathObject;

        readonly sep: string;
        readonly delimiter: string;
        readonly win32: null;
        readonly posix: Path;
    }
}

declare const path: path.Path;
export = path;
