// Type definitions for JQuery DataTables Buttons extension 1.1.0
// Project: http://datatables.net/extensions/buttons/
// Definitions by: Sam Germano <https://github.com/SammyG4Free>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../jquery.dataTables/jquery.dataTables.d.ts"/>

declare namespace DataTables {
    export interface Settings {
        /**
         * Buttons extension options
         */
        buttons?: boolean | string[] | ButtonSettings[];
    }

    //#region "button-settings"

    /**
    * Buttons extension options
    */
    export interface ButtonSettings {
        /**
        * Action to take when the button is activated
        */
        action?: FunctionButtonAction;

        /**
        * Ensure that any requirements have been satisfied before initialising a button
        */
        available?: FunctionButtonAvailable;

        /**
        * Set the class name for the button
        */
        className?: string;

        /**
        * Function that is called when the button is destroyed
        */
        destroy?: FunctionButtonInit;

        /**
        * Set a button's initial enabled state
        */
        enabled?: boolean;

        /**
        * Define which button type the button should be based on
        */
        extend?: string;

        /**
        * Initialisation function that can be used to add events specific to this button
        */
        init?: FunctionButtonInit;

        /**
        * Define an activation key for a button
        */
        key?: string | ButtonKey;

        /**
        * Set a name for each selection
        */
        name?: string;

        /**
        * Unique namespace for every button
        */
        namespace?: string;

        /**
        * The text to show in the button
        */
        text?: string | ButtonText;

        /**
        * Button 'title' attribute text
        */
        titleAttr?: string;

        exportOptions?: ButtonExportOptions;
        autoPrint?: boolean;
        customize?: FunctionButtonCustomize;
    }

    export interface FunctionButtonAvailable {
        (dt: DataTables.DataTable, config: any): boolean
    }
    export interface ButtonExportOptions {
        columns?: string;
    }

    export interface ButtonKey {
        key?: string;
        shiftKey?: boolean;
        altKey?: boolean;
        ctrlKey?: boolean;
        metaKey?: boolean;
    }

    export interface ButtonText {
        (dt: DataTables.DataTable, node: JQuery, config: any): string
    }
    export interface FunctionButtonInit {
        (dt: DataTables.DataTable, node: JQuery, config: any): void
    }
    // api object?
    export interface FunctionButtonAction {
        (e: any, dt: DataTables.DataTable, node: JQuery, config: any): void
    }

    export interface FunctionButtonCustomize {
        (win: Window): void
    }
    //#endregion "button-settings
}
