export interface Map {
    [key: string]: any;
}
export interface CursorParams {
    page?: number | undefined;
    per_page?: number | undefined;
}
export type Strings = string[];

export interface Cursor {
    page?: number | undefined;
    per_page?: number | undefined;
    has_more?: boolean | undefined;
    current_page?: number | undefined;
    total_pages?: number | undefined;
}
export interface Entries<T> extends Cursor {
    entries: T[];
}
export interface Summary {
    current: number;
    previous: number;
    ["percentage-change"]: number;
}
export interface EntriesSummary<T> {
    entries: T[];
    summary: Summary;
}
