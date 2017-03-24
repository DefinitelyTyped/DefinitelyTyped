// Type definitions for datatables.net-fixedheader 3.1
// Project: https://datatables.net/extensions/fixedheader/
// Definitions by: Jared Szechy <https://github.com/szechyjs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * FixedHeader extension options
         */
        fixedHeader?: boolean | FixedHeaderSettings;
    }

    /*
     * FixedHeader extension options
     */
    interface FixedHeaderSettings {
        /*
         * Enable / disable fixed footer
         */
        footer?: boolean;

        /*
         * Offset the table's fixed footer
         */
        footerOffset?: number;

        /*
         * Enable / disable fixed header
         */
        header?: boolean;

        /*
         * Offset the table's fixed header
         */
        headerOffset?: number;
    }
}
