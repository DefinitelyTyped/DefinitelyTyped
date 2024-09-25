export = slug;
export as namespace slug;

declare function slug(string: string, replacement: string): string;
declare function slug(string: string, opts?: slug.Options): string;

declare namespace slug {
    const charmap: CharMap;
    const defaults: {
        charmap: CharMap;
        mode: string;
        modes: {
            pretty: Mode;
            rfc3986: Mode;
        };
        multicharmap: CharMap;
        fallback: boolean;
    };
    const multicharmap: CharMap;

    function extend(entry: CharMap): void;
    function reset(): void;
    function setLocale(locale: string): void;

    interface Mode {
        charmap?: CharMap | null | undefined;
        lower?: boolean | null | undefined;
        multicharmap?: CharMap | null | undefined;
        remove?: RegExp | null | undefined;
        replacement?: string | null | undefined;
        symbols?: boolean | null | undefined;
        trim?: boolean | null | undefined;
        fallback?: boolean | null | undefined;
    }

    type Options = {
        locale?: string | undefined;
        mode?: "pretty" | "rfc3986" | null | undefined;
    } & Partial<Mode>;

    type CharMap = Record<string, string>;
}
