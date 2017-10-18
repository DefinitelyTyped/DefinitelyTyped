// Type definitions for JQuery DataTables Buttons extension 1.4.0
// Project: http://datatables.net/extensions/buttons/
// Definitions by: Kiarash Ghiaseddin <https://github.com/Silver-Connection/DefinitelyTyped>, Sam Germano <https://github.com/SammyG4Free>, Jim Hartford <https://github.com/jimhartford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    export interface Settings {
        /**
         * Buttons extension options
         */
        buttons?: boolean | string[] | ButtonsSettings | ButtonSettings[];
    }

    export interface StaticFunctions {
        Buttons: ButtonStaticFunctions;
    }

    export interface ButtonStaticFunctions {
        new (dt: DataTables.Api, settings: boolean | string[] | ButtonsSettings | ButtonSettings[]):void;
        version: string;
        defaults: ButtonsSettings;
    }

    interface ExtSettings {
        buttons: ExtButtonsSettings;
    }

    export interface Api {
        button(): ButtonApi;
        button(buttonSelector: any): ButtonApi;
        button(groupSelector: any, buttonSelector: any): ButtonApi;
        buttons: ButtonsGlobalApi;
    }

    export interface ButtonsGlobalApi {
        (): ButtonsApi;
        (buttonSelector: any): ButtonsApi;
        (groupSelector: any, buttonSelector: any): ButtonsApi;

        /**
         * Resize the Flash movie clips to take account of the current button dimensions.
         */
        resize(): DataTables.Api;

        /**
         * Display / hide an information message to the end user to indicate that something has happened.
         */
        info(title: string, message?: string, time?: number): DataTables.Api;

        /**
         * Get export meta information that is common to many different button types.
         */
        exportInfo(options?: ButtonsApiExportInfoParameter): ButtonsApiExportInfoReturn;

        /**
         * Obtain data from a DataTable that is suitable for exporting by saving into a file or copying to clipboard.
         */
        exportData(options?: ButtonsApiExportDataParameter): ButtonsApiExportDataReturn;
    }

    export interface ButtonApi {
        /**
         * Get the action function for the selected button.
         */
        action(): FunctionButtonAction;

        /**
         * Set the action function for the selected button.
         */
        action(set: FunctionButtonAction): DataTables.Api;

        /**
         * Get the active state for the selected button.
         */
        active(): boolean;
        
        /**
         * Set the active state for the selected button.
         */
        active(state: boolean): DataTables.Api;

        /**
         * Create a new button, adding it to the selected button instance and inserting immediately into the document.
         */
        add(index: number | string, config: string|FunctionButtom|ButtonSettings): DataTables.Api;

        /**
         * Disable the selected buttons.
         */
        disable(): DataTables.Api;

        /**
         * Set the enabled state for the selected button.
         */
        enable(state?: boolean): DataTables.Api;

        /**
         * Get a jQuery object that contains a reference to the node for the selected button.
         */
        node(): JQuery;
        nodes(): JQuery;

        /**
         * Determine if a button is currently in the processing state or not.
         */
        processing(): boolean;

        /**
         * Set the processing state for the selected button.
         */
        processing(set: boolean): DataTables.Api;

        /**
         * Set the processing state for the selected button.
         */
        processing(set: boolean): DataTables.Api;

        /**
         * Remove the selected button from the display. The button is destroyed and can no longer be used once removed.
         */
        remove(): DataTables.Api;

        /**
         * Get the display text for the selected button.
         */
        text(): DataTables.Api;

        /**
         * Set the display text for the selected button
         */
        text(title: string | FunctionButtonText): DataTables.Api;

        /**
         * Programmatically trigger the action of the selected button.
         */
        trigger(): DataTables.Api;
    }

    export interface ButtonsApi extends ButtonApi {
        /**
         * Get a jQuery instance that contains a reference to the button container instance.
         */
        container(): JQuery;
        containers(): JQuery;

        /**
         * Destroy the selected button instances, removing the container and all button elements from the document.
         */
        destroy(): DataTables.Api;
    }

    interface ButtonsApiExportInfoParameter {
        extension?: string | (() => string);
        filename?: string | (() => string);
        messageBottom?: null | string | (() => string);
        messageTop?: null | string | (() => string);
        title?: null | string | (() => string);
    }

    interface ButtonsApiExportInfoReturn {
        filename: string;
        messageTop: string;
        messageBottom: string;
        title: string;
    }

    interface ButtonsApiExportDataParameter {
        rows?: any;
        columns?: any;
        modifier?: any;
        orthogonal?: string;
        stripHtml?: boolean;
        stripNewlines?: boolean;
        decodeEntities?: boolean;
        trim?: boolean;
        format?: any;
    }

    interface ButtonsApiExportDataReturn {
        header: string[];
        footer: string[];
        body: string[];
    }

    //#region "Button Settings"

    interface ButtonsSettings {
        name?: string;
        tabIndex?: number;
        buttons: Array<string|FunctionButtom|ButtonSettings>;
        dom?: ButtonDomSettings;
    }

    interface ButtonDomSettings {
        button?: ButtonDomButtomButton;
        buttonContainer?: ButtonDomButtomCommon;
        buttonLiner?: ButtonDomButtomCommon;
        collection?: ButtonDomButtomCommon;
        container?: ButtonDomButtomCommon;
    }

    interface ButtonDomButtomCommon {
        className?: string;
        tag?: string;
    }

    interface ButtonDomButtomButton extends ButtonDomButtomCommon {
        active?: string;
        disabled?: string;
    }

    interface ButtomSettingsCommon {
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
        text?: string | FunctionButtonText;

        /**
         * Button 'title' attribute text
         */
        titleAttr?: string;
    }

    export interface ButtonKey {
        key?: string;
        shiftKey?: boolean;
        altKey?: boolean;
        ctrlKey?: boolean;
        metaKey?: boolean;
    }

    /**
     * A function that will be executed upon creation of the buttons.
     */
    export interface FunctionButtom {
        (dt: DataTables.Api): ButtomSettingsCommon
    }

    export interface FunctionButtonText {
        (dt: DataTables.Api, node: JQuery, config: any): string
    }

    export interface FunctionButtonAvailable {
        (dt: DataTables.Api, config: any): boolean
    }

    export interface FunctionButtonInit {
        (dt: DataTables.Api, node: JQuery, config: any): void
    }

    export interface FunctionButtonAction {
        (e: any, dt: DataTables.Api, node: JQuery, config: ButtonSettings): void
    }

    export interface FunctionButtonCustomize {
        (win: Window|string): void
    }

    export interface FunctionExtButtonsCollectionText {
        (a: any): string;
    }

    interface ExtButtonsSettings {
        collection: ExtButtonsCollectionSettings;
    }

    interface ExtButtonsCollectionSettings {
        action: FunctionButtonAction,
        autoClose: boolean;
        background: boolean;
        backgroundClassName: string;
        className: string;
        collectionLayout: string;
        fade: number;
        text: FunctionExtButtonsCollectionText;
    }

    //#endregion "Button Defaults"

    //#region "Add-Ons"

    /**
    * Buttons extension options
    */
    export interface ButtonSettings extends ButtomSettingsCommon {

        //#region (HTML-)File-Export

        /**
         * CSV / EXCEL: Define what the exported filename should be
         */
        filename?: string;
        
        /**
         * COPY / CSV: field separator
         */
        fieldSeparator?: string;

        /**
         * COPY / CSV: field boundary
         */
        fieldBoundary?: string;

        /**
         * COPY / CSV: field separator
         */
        newLine?: string;

        /**
         * CSV / EXCEL / PDF: file extension
         */
        extension?: string;

        /**
         * CSV: UTF-8 boom
         */
        bom?: boolean;

        /**
         * CSV: charset
         */
        charset?: string|boolean;

        /**
         * CSV: escape char
         */
        escapeChar?: string;

        /**
         * EXCEL
         */
        customizeData?: FunctionButtonCustomizeData;

        /**
         * PDF: portrait / landscape
         */
        orientation?: string;

        /**
         * PDF: A3 / A4 / A5 / LEGAL / LETTER / TABLOID
         */
        pageSize?: string;

        //#endregion (HTML-)File-Export

        //#region Export and Print

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        exportOptions?: ButtonExportOptions | Object;
        
        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        customize?: FunctionButtonCustomize;

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        header?: boolean;

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show footer
         */
        footer?: boolean;

        /**
         * COPY / PRINT: title
         */
        title?: string;
        
        /**
         * COPY / EXCEL / PDF / PRINT: field separator
         */
        messageTop?: string;

        /**
         * COPY / EXCEL / PDF / PRINT: field separator
         */
        messageBottom?: string;

        /**
         * PDF / PRINT: Extra message
         */
        message?: string|DataTables.Api|JQuery|Object;

        /**
         * PRINT: Show print dialoge on click
         */
        autoPrint?: boolean;

        //#endregion Export and Print
    
        //#region ColVis

        /**
         * COLVIS: Column selector
         */
        columns?: any;

        /**
         * COLVIS:
         */
        columnText?: FunctionButtonColvisColumnText;

        //#endregion ColVis
    }

    export interface ButtonExportOptions {
        columns?: string | number | string[] | number[];
    }

    export interface FunctionButtonCustomizeData {
        (content: any): void;
    }

    export interface FunctionButtonColvisColumnText {
        (dt: DataTables.Api, i: number, title: string):string;
    }

    //#endregion "button-settings
}
