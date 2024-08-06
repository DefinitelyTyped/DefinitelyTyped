interface IsURL {
    (url: unknown, supportIncomplete?: boolean): boolean;
    lenient(url: unknown): boolean;
}

declare const isURL: IsURL;

export = isURL;
