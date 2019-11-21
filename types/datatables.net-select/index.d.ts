// Type definitions for datatables.net-select 1.2
// Project: https://datatables.net/extensions/select/, https://datatables.net
// Definitions by: Jared Szechy <https://github.com/szechyjs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * Select extension options
         */
        select?: boolean | string | SelectSettings;
    }

    interface SelectSettings {
        /*
         * Indicate if the selected items will be removed when clicking outside of the table
         */
        blurable?: boolean;

        /*
         * Set the class name that will be applied to selected items
         */
        className?: string;

        /*
         * Enable / disable the display for item selection information in the table summary
         */
        info?: boolean;

        /*
         * Set which table items to select (rows, columns or cells)
         */
        items?: string;

        /*
         * Set the element selector used for mouse event capture to select items
         */
        selector?: string;

        /*
         * Set the selection style for end user interaction with the table
         */
        style?: "api" | "single" | "multi" | "os" | "multi+shift";
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
