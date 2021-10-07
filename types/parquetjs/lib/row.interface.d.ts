export interface RowInterface {
    [key: string]: ScalarType | ArrayType | RowInterface | RowInterface[];
}

export type ScalarType = boolean | number | string | Date;

export type ArrayType = boolean[] | number[] | string[] | Date[];
