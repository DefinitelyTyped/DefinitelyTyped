/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /**
         * @description Enable and configure the FixedColumns extension for DataTables.
         * @see {@link https://datatables.net/reference/option/fixedColumns}
         */
        fixedColumns?: boolean | FixedColumnsSettings | undefined;
    }

    interface FixedColumnsSettings {
        /**
         * Row height matching algorithm to use
         *
         * FixedColumns has three different algorithms that it can use: 'none', 'semiauto', 'auto'
         * @see {@link https://datatables.net/reference/option/fixedColumns.heightMatch}
         */
        heightMatch?: "none" | "semiauto" | "auto" | undefined;

        /**
         * @description The number of columns on the left hand side of the table to fix in place.
         * @see {@link https://datatables.net/reference/option/fixedColumns.leftColumns}
         */
        leftColumns?: number | undefined;

        /**
         * @description The number of columns on the right hand side of the table to fix in place.
         * @see {@link https://datatables.net/reference/option/fixedColumns.rightColumns}
         */
        rightColumns?: number | undefined;
    }

    interface Api {
        /**
         * @description Namespacing for FixedColumns methods - FixedColumns' methods are available on the returned API instance.
         * @see {@link https://datatables.net/reference/api/fixedColumns()}
         */
        fixedColumns(): FixedColumnsMethods;
    }

    interface FixedColumnsMethods extends Api {
        /**
         * @description Update the data shown in the FixedColumns.
         * @see {@link https://datatables.net/reference/api/fixedColumns().update()}
         */
        update(): Api;

        /**
         * @description Redraw the fixed columns based on new table size
         * @see {@link https://datatables.net/reference/api/fixedColumns().relayout()}
         */
        relayout(): Api;

        /**
         * @deprecated
         * Deprecated as of v3.2.1. Use dt.row(this).index() instead
         *
         * Get the row index of a row in a fixed column
         */
        rowIndex(): number;

        /**
         * @deprecated
         * Deprecated as of v3.2.1 use dt.cell(this).index() instead
         *
         * Get the cell index of a cell in a fixed column
         *
         * @param row The cell (td or th) to get the cell index of. This can be either a cell in the fixed columns or in the host DataTable.
         */
        cellIndex(row: JQuery | Node): CellIndexReturn;
    }

    interface RowsMethods {
        /**
         * @description Mark the heights of the selected rows (from rows()) to be recalculated on the next draw.
         * @see {@link https://datatables.net/reference/api/rows().recalcHeight()}
         */
        recalcHeight(): Api;
    }

    interface CellMethods {
        /**
         * @description Get the fixed column cell node for a cell or the cell from the original DataTable if there is no matching fixed cell found.
         * @see {@link https://datatables.net/reference/api/cell().fixedNode()}
         */
        fixedNode(): Node;
    }

    interface CellsMethods {
        /**
         * @description Get the fixed column cell nodes for multiple cells or an Api instance containing
         * the cells from the original DataTable if there is no matching fixed cell found.
         * @see {@link https://datatables.net/reference/api/cells().fixedNodes()}
         */
        fixedNodes(): Api;
    }
}
