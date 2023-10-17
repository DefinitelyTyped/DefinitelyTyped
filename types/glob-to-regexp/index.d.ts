export as namespace GlobToRegExp;

export = GlobToRegExp;

declare function GlobToRegExp(glob: string, options?: GlobToRegExp.Options): RegExp;

declare namespace GlobToRegExp {
    interface Options {
        extended?: boolean | undefined;
        globstar?: boolean | undefined;
        flags?: string | undefined;
    }
}
