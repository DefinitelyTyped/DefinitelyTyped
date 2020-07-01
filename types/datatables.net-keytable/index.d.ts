// Type definitions for datatables.net-keytable 2.5
// Project: https://datatables.net
// Definitions by: Konstantin Kuznetsov <https://github.com/Arik-neKrol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /*
         * KeyTable extension options
         */
        keys?: boolean | KeyTableSettings;
    }

    interface KeyTableSettings {
        /*
         * Allow KeyTable's focus to be blurred (removed) from a table
         *
         * When set to true this option allows the table to lose focus (i.e. to be blurred),
         * while false will not allow the table to lose focus.
         */
        blurable?: boolean;

        /*
         * Set the class name used for the focused cell
         *
         * The class name to be added and removed from cells as they gain and loose focus.
         */
        className?: string;

        /*
         * Enable / disable clipboard interaction with KeyTable
         *
         * A boolean flag that can optionally be used to disable KeyTables' clipboard interaction.
         */
        clipboard?: boolean;

        /*
         * Set the orthogonal data point for the data to copy to clipboard.
         */
        clipboardOrthogonal?: string;

        /*
         * Select the columns that can gain focus
         *
         * The columns that can gain focus. This accepts all of the options of column-selector
         * such as class name selector, jQuery pseudo selects and column index selectors.
         */
        columns?: any;

        /*
         * Control if editing should be activated immediately upon focus
         *
         * true to enable editing on focus, false to disable.
         */
        editOnFocus?: boolean;

        /*
         * Attach an Editor instance for Excel like editing
         *
         * The Editor instance to use for editing of the table
         */
        editor?: any;

        /*
         * Cell to receive initial focus in the table
         *
         * The cell that will receive focus when the table is initialised. This accepts all of
         * the options of cell-selector such as class name selector, jQuery pseudo selects and
         * cell index selectors.
         */
        focus?: any;

        /*
         * Limit the keys that KeyTable will listen for and take action on
         *
         * As null KeyTable will listen for all key presses, regardless of what key is pressed.
         * an array you can limit the keys that KeyTable will take action on to just the key
         * codes given in the array.
         */
        keys?: number[] | null;

        /*
         * Set the table's tab index for when it will receive focus
         *
         * The tab index for the table. Like all other tab indexes, this can be -1 to disallow
         * tabbing into the table.
         */
        tabIndex?: number;
    }

    interface Api {
        keys: {
            /*
             * Disable KeyTable's interactions (mouse and keyboard)
             */
            disable(): Api;

            /*
             * Enable or disable KeyTable's interactions (mouse and keyboard)
             */
            enable(): Api;
        };
    }

    interface CellMethods {
        /*
         * Focus on a cell
         */
        focus(): Api;
    }
}
