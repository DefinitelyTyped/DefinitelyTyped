/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * Select extension options
         */
        select?: boolean | string | SelectSettings | undefined;
    }

    interface SelectSettings {
        /*
         * Indicate if the selected items will be removed when clicking outside of the table
         */
        blurable?: boolean | undefined;

        /*
         * Set the class name that will be applied to selected items
         */
        className?: string | undefined;

        /*
         * Enable / disable the display for item selection information in the table summary
         */
        info?: boolean | undefined;

        /*
         * Set which table items to select (rows, columns or cells)
         */
        items?: string | undefined;

        /*
         * Set the element selector used for mouse event capture to select items
         */
        selector?: string | undefined;

        /*
         * Set the selection style for end user interaction with the table
         */
        style?: "api" | "single" | "multi" | "os" | "multi+shift" | undefined;
    }

    interface Api {
        select: {
            /*
             * Get the current selection style applied to the table
             */
            style(): string;
            /*
             * Set the table's selection style
             */
            style(s: "api" | "single" | "multi" | "os"): Api;
        };
    }

    interface RowMethods {
        /**
         * Select a row
         */
        select(): Api;
        /**
         * Deselect a row
         */
        deselect(): Api;
    }

    interface RowsMethods {
        /**
         * Select multiple rows
         */
        select(): Api;
        /**
         * Deselect a row
         */
        deselect(): Api;
    }

    interface CellMethods {
        /**
         * Select cell
         */
        select(): Api;

        /**
         * Deselect a cell
         */
        deselect(): Api;
    }

    interface CellsMethods {
        /**
         * Select multiple cells
         */
        select(): Api;

        /**
         * Deselect cells
         */
        deselect(): Api;
    }
}
