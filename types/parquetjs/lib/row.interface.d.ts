export interface RowInterface {
    [key: string]: ScalarType|RowInterface|RowInterface[];
}

export type ScalarType = boolean|number|string;
