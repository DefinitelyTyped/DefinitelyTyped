export class FilterBy {
    constructor(level?: FilterByLevel);

    static logLevel(level?: FilterByLevel): FilterBy;
    getLevel(): FilterByLevel;
}

export type FilterByLevel =
    | "debug"
    | "error"
    | "info"
    | "warning";
