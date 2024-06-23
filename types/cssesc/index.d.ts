export = cssesc;

declare function cssesc(string: string, options?: Readonly<Partial<cssesc.Options>>): string;

declare namespace cssesc {
    interface Options {
        escapeEverything: boolean;
        isIdentifier: boolean;
        quotes: string;
        wrap: boolean;
    }

    const options: Options;

    const version: string;
}
