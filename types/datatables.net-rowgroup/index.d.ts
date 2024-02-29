/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /**
         * RowGroup extension options
         */
        rowGroup?: boolean | RowGroupSettings | undefined;
    }

    interface StaticFunctions {
        RowGroup: RowGroupStaticFunctions;
    }

    interface RowGroupStaticFunctions {
        new(dt: Api, settings: boolean | RowGroupSettings): undefined;
        version: string;
        defaults: RowGroupSettings;
    }

    interface Api {
        rowGroup(): RowGroupApi;
    }

    interface RowGroupApi {
        /**
         * Get the data source for the row grouping
         */
        dataSrc(): number | string;

        /**
         * Set the data source for the row grouping
         */
        dataSrc(prop: number | string): Api;

        /**
         * Disable RowGroup's interaction with the table
         */
        disable(): Api;

        /**
         * Enable or disable RowGroup's interaction with the table
         */
        enable(enable?: boolean): Api;
    }

    /**
     * RowGroup extension options
     */
    interface RowGroupSettings {
        /**
         * Set the class name to be used for the grouping rows
         */
        className?: string | undefined;

        /**
         * Text to show for rows which have null, undefined or empty string group data
         */
        emptyDataGroup?: string | undefined;

        /**
         * Set the data point to use as the grouping data source
         */
        dataSrc?: number | string | string[] | undefined;

        /**
         * Provides the ability to disable row grouping at initialisation
         */
        enable?: boolean | undefined;

        /**
         * Set the class name to be used for the grouping start rows
         */
        startClassName?: string | undefined;

        /**
         * Set the class name to be used for the grouping end rows
         */
        endClassName?: string | undefined;

        /**
         * Provide a function that can be used to control the data shown in the end grouping row
         */
        endRender?: ((rows: Api, group: string) => string | HTMLElement | JQuery) | undefined;

        /**
         * Provide a function that can be used to control the data shown in the start grouping row
         */
        startRender?: ((rows: Api, group: string, level: number) => string | HTMLElement | JQuery) | undefined;
    }
}
