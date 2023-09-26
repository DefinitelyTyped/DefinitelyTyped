/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * autoFill extension options
         */
        autoFill?: boolean | AutoFillSettings | undefined;
    }

    interface AutoFillSettings {
        /*
         * Always ask the end user if an action should be taken or not
         */
        alwaysAsk?: boolean | undefined;
        /*
         * Select the columns that can be auto filled
         */
        columns: string | number[];
        /*
         * Initial enablement state of AutoFill
         */
        enable?: boolean | undefined;
    }
}
