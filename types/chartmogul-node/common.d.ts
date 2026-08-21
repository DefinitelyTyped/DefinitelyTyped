export interface Map {
    [key: string]: any;
}
export interface CursorParams {
    cursor?: string;
    per_page?: number;
    /** @deprecated Use cursor-based pagination instead */
    page?: number;
}
export type Strings = string[];

export interface Cursor {
    page?: number;
    per_page?: number;
    cursor?: string;
    has_more?: boolean;
    current_page?: number;
    total_pages?: number;
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
