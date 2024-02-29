export as namespace Coverup;

export = coverup;

declare function coverup(value: string, options?: coverup.Options): string;

declare namespace coverup {
    interface Options {
        char?: string | undefined;
        keepLeft?: number | undefined;
        keepRight?: number | undefined;
        compactTo?: number | undefined;
        keepSymbols?: boolean | undefined;
    }
}
