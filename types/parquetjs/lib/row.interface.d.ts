export interface RowInterface {
    [key: string]: ScalarType|RowInterface|RowInterface[];
}

declare type ScalarType = boolean|number|string;
