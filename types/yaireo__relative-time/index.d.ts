// Type definitions for @yaireo/relative-time 1.0
// Project: https://github.com/yairEO/relative-time
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Settings {
    /**
     * @default browser locale
     * @example 'es'
     */
    locale?: string;

    /**
     * @default { numeric: 'auto' }
     */
    options?: Intl.DateTimeFormatOptions;
}

declare class RelativeTime {
    constructor(settings?: Settings);

    from(d1: Date, d2?: Date): string;
}

export = RelativeTime;

export as namespace RelativeTime
