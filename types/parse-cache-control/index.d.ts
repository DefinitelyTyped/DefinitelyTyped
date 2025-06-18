/**
 * Simple function to parse Cache-Control headers.
 * Taken from {@link https://github.com/hapijs/wreck|Wreck}.
 */
declare function parseCacheControl(field: string): parseCacheControl.Header | null;

declare namespace parseCacheControl {
    interface Header {
        "max-age"?: number | undefined;
        "must-revalidate"?: boolean | undefined;
        "no-cache"?: boolean | undefined;
        "no-store"?: boolean | undefined;
        private?: boolean | undefined;
    }
}

export = parseCacheControl;
