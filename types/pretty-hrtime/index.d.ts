export = prettyHrtime;

declare function prettyHrtime(hrTime: [number, number], options?: prettyHrtime.Options): string;

declare namespace prettyHrtime {
    interface Options {
        verbose?: boolean | undefined;
        precise?: boolean | undefined;
    }
}
