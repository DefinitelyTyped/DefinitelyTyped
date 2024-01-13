/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * colReorder extension options
         */
        colReorder?: boolean | ColReorderSettings | undefined;
    }

    interface ColReorderSettings {
        /*
         * Number of columns (counting from the left) to disallow reordering of, '0' in default
         */
        fixedColumnsLeft?: number | undefined;

        /*
         * Number of columns (counting from the right) to disallow reordering of, '0' in default
         */
        fixedColumnsRight?: number | undefined;

        /*
         * Set a default order for the columns in the table
         */
        order?: number[] | undefined;

        /*
         * Enable / disable live reordering of columns during a drag, 'true' in default
         */
        realtime?: boolean | undefined;
        /*
         * Callback after reorder
         */
        reorderCallback: () => void;
    }

    interface Api {
        colReorder: {
            /*
             * Programmatically reorder columns
             */
            move(from: number, to: number, drop: boolean, invalidate: boolean): Api;
            /*
             * Get / set column order
             */
            order(newOrder?: number[], originalIndexes?: boolean): Api;
            /*
             * Restore the loaded column order
             */
            reset(): Api;
            /*
             * Convert one or more column indexes to and from current and original indexes
             */
            transpose(
                idx?: number | number[],
                direction?: "toCurrent" | "toOriginal" | "fromOriginal" | "fromCurrent",
            ): Api;
        };
    }
}
