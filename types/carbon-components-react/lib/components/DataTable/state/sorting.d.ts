export type DataTableSortState = "ASC" | "DESC" | "NONE";

export type DataTableSortStates = Readonly<{
    ASC: Extract<DataTableSortState, "ASC">,
    DESC: Extract<DataTableSortState, "DESC">,
    NONE: Extract<DataTableSortState, "NONE">,
}>;

export declare const sortStates: DataTableSortStates;
export declare const initialSortState: Extract<DataTableSortState, "NONE">;
