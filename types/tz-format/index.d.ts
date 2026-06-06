declare function format(): string;
declare function format(
    /**
     * Offset from UTC in hours.
     */
    offset: number,
): string;
declare function format(
    /**
     * Date to be formatted
     * @default new Date()
     */
    date: Date,
    /**
     * Offset from UTC in hours.
     */
    offset?: number,
): string;

export = format;
