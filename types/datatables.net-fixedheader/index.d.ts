// Type definitions for datatables.net-fixedheader 3.1
// Project: https://datatables.net/extensions/fixedheader/
// Definitions by: Jared Szechy <https://github.com/szechyjs>, Kiarash Ghiaseddin <https://github.com/Silver-Connection>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * FixedHeader extension options
         */
        fixedHeader?: boolean | FixedHeaderSettings;
    }

    interface StaticFunctions {
        FixedHeader: FixedHeaderStaticFunctions;
    }

    interface FixedHeaderStaticFunctions {
        new (dt: Api, settings: boolean | FixedHeaderSettings): undefined;
        version: string;
        defaults: FixedHeaderSettings;
    }

    interface Api {
        fixedHeader: FixedHeaderApi;
    }

    interface FixedHeaderApi {
        /**
         * Recalculate the position of the DataTable on the page and adjust the fixed element as appropriate.
         */
        adjust(): Api;

        /**
         * Disable the fixed elements
         */
        disable(): Api;

        /**
         * Enable / disable the fixed elements
         */
        enable(enable: boolean): Api;

        /**
         * Get the fixed footer's offset.
         */
        footerOffset(offset: number): Api;

        /**
         * Get the fixed header's offset.
         */
        headerOffset(offset: number): Api;
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
