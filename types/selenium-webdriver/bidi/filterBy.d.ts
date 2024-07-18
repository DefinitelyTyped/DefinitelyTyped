declare class FilterBy {
    constructor(level: string);

    static logLevel(level: string | undefined): FilterBy;
    getLevel(): string;
}

export { FilterBy };
