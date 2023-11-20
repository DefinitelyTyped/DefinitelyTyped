/// <reference types="jquery" />
/// <reference types="datatables.net"/>

declare namespace DataTables {
    interface Settings {
        /**
         * Buttons extension options
         */
        buttons?: boolean | string[] | ButtonsSettings | ButtonSettings[] | undefined;
    }

    interface LanguageSettings {
        buttons?: {} | undefined;
    }

    interface StaticFunctions {
        Buttons: ButtonStaticFunctions;
    }

    interface ButtonStaticFunctions {
        new(dt: Api, settings: boolean | string[] | ButtonsSettings | ButtonSettings[]): undefined;
        version: string;
        defaults: ButtonsSettings;
    }

    interface ExtSettings {
        buttons: ExtButtonsSettings;
    }

    interface Api {
        button(groupSelector?: any, buttonSelector?: any): ButtonApi;
        buttons: ButtonsGlobalApi;
    }

    interface ButtonsGlobalApi {
        (groupSelector?: any, buttonSelector?: any): ButtonsApi;

        /**
         * Resize the Flash movie clips to take account of the current button dimensions.
         */
        resize(): Api;

        /**
         * Display / hide an information message to the end user to indicate that something has happened.
         */
        info(title: string, message?: string, time?: number): Api;

        /**
         * Get meta information that is common to many different button types.
         */
        exportInfo(options?: ButtonsApiExportInfoParameter): ButtonsApiExportInfoReturn;

        /**
         * Obtain data from a DataTable that is suitable for exporting by saving into a file or copying to clipboard.
         */
        exportData(options?: ButtonsApiExportDataParameter): ButtonsApiExportDataReturn;
    }

    interface ButtonApi {
        /**
         * Get the action function for the selected button.
         */
        action(): FunctionButtonAction;

        /**
         * Set the action function for the selected button.
         */
        action(set: FunctionButtonAction): Api;

        /**
         * Get the active state for the selected button.
         */
        active(): boolean;

        /**
         * Set the active state for the selected button.
         */
        active(state: boolean): Api;

        /**
         * Create a new button, adding it to the selected button instance and inserting immediately into the document.
         */
        add(index: number | string, config: string | FunctionButtom | ButtonSettings): Api;

        /**
         * Disable the selected buttons.
         */
        disable(): Api;

        /**
         * Set the enabled state for the selected button.
         */
        enable(state?: boolean): Api;

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
        processing(set: boolean): Api;

        /**
         * Set the processing state for the selected button.
         */
        processing(set: boolean): Api;

        /**
         * Remove the selected button from the display. The button is destroyed and can no longer be used once removed.
         */
        remove(): Api;

        /**
         * Get / Set the display text for the selected button
         */
        text(title?: string | FunctionButtonText): Api;

        /**
         * Programmatically trigger the action of the selected button.
         */
        trigger(): Api;
    }

    interface ButtonsApi extends ButtonApi {
        /**
         * Get a jQuery instance that contains a reference to the button container instance.
         */
        container(): JQuery;
        containers(): JQuery;

        /**
         * Destroy the selected button instances, removing the container and all button elements from the document.
         */
        destroy(): Api;
    }

    interface ButtonsApiExportInfoParameter {
        extension?: string | (() => string) | undefined;
        filename?: string | (() => string) | undefined;
        messageBottom?: null | string | (() => string) | undefined;
        messageTop?: null | string | (() => string) | undefined;
        title?: null | string | (() => string) | undefined;
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
        orthogonal?: string | undefined;
        stripHtml?: boolean | undefined;
        stripNewlines?: boolean | undefined;
        decodeEntities?: boolean | undefined;
        trim?: boolean | undefined;
        format?: any;
    }

    interface ButtonsApiExportDataReturn {
        header: string[];
        footer: string[];
        body: string[];
    }

    // #region "Button Settings"

    interface ButtonsSettings {
        name?: string | undefined;
        tabIndex?: number | undefined;
        buttons: Array<string | FunctionButtom | ButtonSettings>;
        dom?: ButtonDomSettings | undefined;
    }

    interface ButtonDomSettings {
        button?: ButtonDomButtomButton | undefined;
        buttonContainer?: ButtonDomButtomCommon | undefined;
        buttonLiner?: ButtonDomButtomCommon | undefined;
        collection?: ButtonDomButtomCommon | undefined;
        container?: ButtonDomButtomCommon | undefined;
    }

    interface ButtonDomButtomCommon {
        className?: string | undefined;
        tag?: string | undefined;
    }

    interface ButtonDomButtomButton extends ButtonDomButtomCommon {
        active?: string | undefined;
        disabled?: string | undefined;
    }

    interface ButtomSettingsCommon {
        /**
         * Action to take when the button is activated
         */
        action?: FunctionButtonAction | undefined;

        /**
         * Ensure that any requirements have been satisfied before initialising a button
         */
        available?: FunctionButtonAvailable | undefined;

        /**
         * Set the class name for the button
         */
        className?: string | undefined;

        /**
         * Function that is called when the button is destroyed
         */
        destroy?: FunctionButtonInit | undefined;

        /**
         * Set a button's initial enabled state
         */
        enabled?: boolean | undefined;

        /**
         * Define which button type the button should be based on
         */
        extend?: string | undefined;

        /**
         * Initialisation function that can be used to add events specific to this button
         */
        init?: FunctionButtonInit | undefined;

        /**
         * Define an activation key for a button
         */
        key?: string | ButtonKey | undefined;

        /**
         * Set a name for each selection
         */
        name?: string | undefined;

        /**
         * Unique namespace for every button
         */
        namespace?: string | undefined;

        /**
         * The text to show in the button
         */
        text?: string | FunctionButtonText | undefined;

        /**
         * Button 'title' attribute text
         */
        titleAttr?: string | undefined;
    }

    interface ButtonKey {
        key?: string | undefined;
        shiftKey?: boolean | undefined;
        altKey?: boolean | undefined;
        ctrlKey?: boolean | undefined;
        metaKey?: boolean | undefined;
    }

    /**
     * A function that will be executed upon creation of the buttons.
     */
    type FunctionButtom = (dt: Api) => ButtomSettingsCommon;

    type FunctionButtonText = (dt: Api, node: JQuery, config: any) => string;

    type FunctionButtonAvailable = (dt: Api, config: any) => boolean;

    type FunctionButtonInit = (dt: Api, node: JQuery, config: any) => void;

    type FunctionButtonAction = (e: any, dt: Api, node: JQuery, config: ButtonSettings) => void;

    type FunctionButtonCustomize = (win: Window | string) => void;

    type FunctionExtButtonsCollectionText = (a: any) => string;

    interface ExtButtonsSettings {
        collection: ExtButtonsCollectionSettings;
        csvHtml5: ButtonSettings;
    }

    interface ExtButtonsCollectionSettings {
        action: FunctionButtonAction;
        autoClose: boolean;
        background: boolean;
        backgroundClassName: string;
        className: string;
        collectionLayout: string;
        fade: number;
        text: FunctionExtButtonsCollectionText;
    }

    // #endregion "Button Defaults"

    // #region "Add-Ons"

    /**
     * Buttons extension options
     */
    interface ButtonSettings extends ButtomSettingsCommon {
        // #region (HTML-)File-Export

        /**
         * CSV / EXCEL: Define what the exported filename should be
         */
        filename?: string | undefined;

        /**
         * COPY / CSV: field separator
         */
        fieldSeparator?: string | undefined;

        /**
         * COPY / CSV: field boundary
         */
        fieldBoundary?: string | undefined;

        /**
         * COPY / CSV: field separator
         */
        newLine?: string | undefined;

        /**
         * CSV / EXCEL / PDF: file extension
         */
        extension?: string | undefined;

        /**
         * CSV: UTF-8 boom
         */
        bom?: boolean | undefined;

        /**
         * CSV: charset
         */
        charset?: string | boolean | undefined;

        /**
         * CSV: escape char
         */
        escapeChar?: string | undefined;

        /**
         * EXCEL
         */
        customizeData?: FunctionButtonCustomizeData | undefined;

        /**
         * PDF: portrait / landscape
         */
        orientation?: string | undefined;

        /**
         * PDF: A3 / A4 / A5 / LEGAL / LETTER / TABLOID
         */
        pageSize?: string | undefined;

        // #endregion (HTML-)File-Export

        // #region Export and Print

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        exportOptions?: ButtonExportOptions | object | undefined;

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        customize?: FunctionButtonCustomize | undefined;

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show header
         */
        header?: boolean | undefined;

        /**
         * COPY / CSV / EXCEL / PDF / PRINT: show footer
         */
        footer?: boolean | undefined;

        /**
         * COPY / PRINT: title
         */
        title?: string | undefined;

        /**
         * COPY / EXCEL / PDF / PRINT: field separator
         */
        messageTop?: string | undefined;

        /**
         * COPY / EXCEL / PDF / PRINT: field separator
         */
        messageBottom?: string | undefined;

        /**
         * PDF / PRINT: Extra message
         */
        message?: string | Api | JQuery | object | undefined;

        /**
         * PRINT: Show print dialoge on click
         */
        autoPrint?: boolean | undefined;

        // #endregion Export and Print

        // #region ColVis

        /**
         * COLVIS: Column selector
         */
        columns?: any;

        /**
         * COLVIS:
         */
        columnText?: FunctionButtonColvisColumnText | undefined;

        // #endregion ColVis

        // #region Buttons

        /**
         * List of buttons to be created
         */
        buttons?: Array<string | FunctionButtom | ButtonSettings> | undefined;

        // #endregion Buttons
    }

    type ButtonSelectorTypes = string | number | JQuery;
    interface ButtonExportOptions {
        columns?: ButtonSelectorTypes | ButtonSelectorTypes[] | undefined;
    }

    type FunctionButtonCustomizeData = (content: any) => void;

    type FunctionButtonColvisColumnText = (dt: Api, i: number, title: string) => string;

    // #endregion "button-settings
}
