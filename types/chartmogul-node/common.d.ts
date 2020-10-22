export interface Map {
    [key: string]: any;
}
export interface CursorParams {
    page?: number;
    per_page?: number;
}
export type Strings = string[];

export interface Cursor {
    page?: number;
    per_page?: number;
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
    ['percentage-change']: number;
}
export interface EntriesSummary<T> {
    entries: T[];
    summary: Summary;
}
