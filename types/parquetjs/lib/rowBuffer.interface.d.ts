export interface RowBufferInterface {
    rowCount: number;
    columnData: {
        [key: string]: {
            dlevels: number[];
            rlevels: number[];
            values: Buffer[];
            count: number;
        };
    };
}
