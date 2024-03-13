/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * FixedHeader extension options
         */
        fixedHeader?: boolean | FixedHeaderSettings | undefined;
    }

    interface StaticFunctions {
        FixedHeader: FixedHeaderStaticFunctions;
    }

    interface FixedHeaderStaticFunctions {
        new(dt: Api, settings: boolean | FixedHeaderSettings): undefined;
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
        footer?: boolean | undefined;

        /*
         * Offset the table's fixed footer
         */
        footerOffset?: number | undefined;

        /*
         * Enable / disable fixed header
         */
        header?: boolean | undefined;

        /*
         * Offset the table's fixed header
         */
        headerOffset?: number | undefined;
    }
}
