/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /**
         * Enable and configure the RowReorder extension for DataTables
         */
        rowReorder?: RowReorderSettings | undefined;
    }

    interface RowReorderSettings {
        /**
         * Configure the data point that will be used for the reordering data
         */
        dataSrc?: string | undefined;
        /**
         * Attach an Editor instance for database updating
         */
        editor?: any;
        /**
         * Enable / disable RowReorder's user interaction
         */
        enable?: boolean | undefined;
        /**
         * Set the options for the Editor form when submitting data
         */
        formOptions?: any;
        /**
         * Define the selector used to pick the elements that will start a drag
         */
        selector?: string | undefined;
        /**
         * Horizontal position control of the row being dragged
         */
        snapX?: number | boolean | undefined;
        /**
         * Control automatic of data when a row is dropped
         */
        update?: boolean | undefined;
    }
}
