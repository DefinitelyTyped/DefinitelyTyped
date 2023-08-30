// Type definitions for zipcelx-on-steroids 1.0
// Project: https://github.com/davidramos-om/zipcelx-on-steroids#readme
// Definitions by: David Ramos <https://github.com/davidramos-om>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The value and type of a single cell. Only strings and numbers are supported.
 */
export interface ZipCelXCell {
    /**
     * The cell value
     */
    value: string | number;
    /**
     * The cell value type
     */
    type: "string" | "number";
}

/**
 * A Row (a set of cells)
 */
export type ZipCelXRow = ZipCelXCell[];

/**
 * A DataSet (a set of rows)
 */
export type ZipCelXDataSet = ZipCelXRow[];

/**
 * Represents a Sheet
 */
export interface ZipCelXSheet {
    /**
     * The sheet's DataSet
     */
    data: ZipCelXDataSet;
}

/**
 * The zipcelx configuration
 */
export interface ZipCelXConfig {
    /**
     * The file name of the exported file
     */

    filename: string;

    /**
     * The sheet to be exported as an .xlsx file
     */
    sheet: {
        data: ZipCelXDataSet;
    };
}

export default function zipcelx(config: ZipCelXConfig, target: "export" | "blob"): Promise<Blob> | void;
