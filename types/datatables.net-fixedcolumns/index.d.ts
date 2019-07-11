// Type definitions for datatables.net-fixedcolumns 3.2
// Project: https://datatables.net
// Definitions by: Konstantin Kuznetsov <https://github.com/Arik-neKrol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * FixedColumns extension options
         */
        fixedColumns?: boolean | FixedColumnsSettings;
    }

    interface FixedColumnsSettings {
        /*
         * The algorithm to use. This can be one of (see below for full description):
         * 'none' | 'semiauto' | 'auto'
         */
        heightMatch?: string;

        /*
         * The number of columns on the left hand side of the table to fix in place.
         */
        leftColumns?: number;

        /*
         * The number of columns on the right hand side of the table to fix in place.
         */
        rightColumns?: number;
    }

    interface Api {
        fixedColumns: FixedColumnsMethodsModel;
    }

    interface FixedColumnsMethodsModel {
        /*
        * Get FixedColumns Api
        */
        fixedColumns(): FixedColumnsMethods;
    }

    interface FixedColumnsMethods extends Api {
        /*
        * Update the data shown in the FixedColumns
        */
        update(): void;

        /*
        * Redraw the fixed columns based on new table size
        */
        relayout(): void;

        /*
        * Get the row index of a row in a fixed column
        */
        rowIndex(): number;

        /*
        * Get the cell index of a cell in a fixed column
        */
        cellIndex(): CellIndex;
    }

    /*
    */
    interface CellIndex {
        row: number;
        column: number;
        columnVisible: number;
    }

    interface RowsMethods {
        /*
         * Recalculate the height of one or more rows after a data change
         */
        recalcHeight(): void;

    }
}
