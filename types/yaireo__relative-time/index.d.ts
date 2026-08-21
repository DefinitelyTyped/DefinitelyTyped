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

export as namespace RelativeTime;
