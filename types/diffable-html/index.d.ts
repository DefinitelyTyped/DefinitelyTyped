declare function format(
    html: string,
    options?: {
        sortAttributes?: (names: string[]) => string[];
    },
): string;

export = format;
