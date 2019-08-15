// Type definitions for datatables.net-autofill 2.2
// Project: https://datatables.net
// Definitions by: Andy Ma <https://github.com/andy-maca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
  interface Settings {
    /*
     * autoFill extension options
     */
    autoFill?: boolean | AutoFillSettings;
  }

  interface AutoFillSettings {
    /*
     * Always ask the end user if an action should be taken or not
     */
    alwaysAsk?: boolean;
    /*
     * Select the columns that can be auto filled
     */
    columns: string | number[];
    /*
     *
     * Initial enablement state of AutoFill
     */
    enable?: boolean;
  }
}
