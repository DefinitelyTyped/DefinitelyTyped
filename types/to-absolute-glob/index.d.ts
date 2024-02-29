declare function toAbsoluteGlob(pattern: string, options?: toAbsoluteGlob.Options): string;
declare namespace toAbsoluteGlob {
    interface Options {
        cwd?: string | undefined;
        root?: string | undefined;
    }
}
export = toAbsoluteGlob;
