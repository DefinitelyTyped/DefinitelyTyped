// Type definitions for Office.js
// Project: http://dev.office.com
// Definitions by: OfficeDev <https://github.com/OfficeDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
office-js
Copyright (c) Microsoft Corporation
*/

declare namespace Office {
    export var context: Context;
    /**
     * This method is called after the Office API was loaded.
     * @param reason Indicates how the app was initialized
     */
    export function initialize(reason: InitializationReason): void;
    /**
     * Indicates if the large namespace for objects will be used or not.
     * @param useShortNamespace  Indicates if 'true' that the short namespace will be used
     */
    export function useShortNamespace(useShortNamespace: boolean): void;
    // Enumerations
    export enum AsyncResultStatus {
        /**
         * Operation succeeded
         */
        Succeeded,
        /**
         * Operation failed, check error object
         */
        Failed
    }
    export enum InitializationReason {
        /**
         * Indicates the app was just inserted in the document
         */
        Inserted,
        /**
         * Indicates if the extension already existed in the document
         */
        DocumentOpened
    }
    // Objects
    export interface AsyncResult {
        asyncContext: any;
        status: AsyncResultStatus;
        error: Error;
        value: any;
    }
    export interface Context {
        contentLanguage: string;
        displayLanguage: string;
        license: string;
        touchEnabled: boolean;
        ui: UI;
        requirements: {
            /**
             * Check if the specified requirement set is supported by the host Office application.
             * @param name - Set name. e.g.: "MatrixBindings".
             * @param minVersion - The minimum required version.
             */
            isSetSupported(name: string, minVersion?: number): boolean;
        }
    }
    export interface Error {
        message: string;
        name: string;
    }
    export interface UI {
        /**
        * Displays a dialog to show or collect information from the user or to facilitate Web navigation.
        * @param startAddress Accepts the initial HTTPS Url that opens in the dialog.
        * @param options Optional. Accepts a DialogOptions object to define dialog behaviors.
        * @param callback Optional. Accepts a callback method to handle the dialog creation attempt.
        */
        displayDialogAsync(startAddress: string, options?: DialogOptions, callback?: (result: AsyncResult) => void): void;
        /**
         * Synchronously delivers a message from the dialog to its parent add-in.
         * @param messageObject Accepts a message from the dialog to deliver to the add-in.
         */
        messageParent(messageObject: any): void;
    }
    export interface DialogOptions {
        /**
         * Optional. Defines the width of the dialog as a percentage of the current display. Defaults to 99%. 250px minimum.
         */
        height?: number,
        /**
         * Optional. Defines the height of the dialog as a percentage of the current display. Defaults to 99%. 150px minimum.
         */
        width?: number,
        /**
         * Optional. Determines whether the dialog is safe to display within a Web frame.
         */
        xFrameDenySafe?: boolean,
    }

    /**
     * Dialog object returned as part of the displayDialogAsync callback. The object exposes methods for registering event handlers and closing the dialog
     */
    export interface DialogHandler {
        /**
         * When called from an active add-in dialog, asynchronously closes the dialog.
         */
        close(): void;
        /**
         * Adds an event handler for DialogMessageReceived or DialogEventReceived
         */
        addEventHandler(eventType: Office.EventType, handler: Function): void;

    }
}

declare namespace Office {
    /**
     * Returns a promise of an object described in the expression. Callback is invoked only if method fails.
     * @param expression The object to be retrieved. Example "bindings#BindingName", retrieves a binding promise for a binding named 'BindingName'
     * @param callback The optional callback method
     */
    export function select(expression: string, callback?: (result: AsyncResult) => void): Binding;
    // Enumerations
    export enum ActiveView {
        Read,
        Edit
    }
    export enum BindingType {
        /**
         * Text based Binding
         */
        Text,
        /**
         * Matrix based Binding
         */
        Matrix,
        /**
         * Table based Binding
         */
        Table
    }
    export enum CoercionType {
        /**
         * Coerce as Text
         */
        Text,
        /**
         * Coerce as Matrix
         */
        Matrix,
        /**
         * Coerce as Table
         */
        Table,
        /**
         * Coerce as HTML
         */
        Html,
        /**
         * Coerce as Office Open XML
         */
        Ooxml,
        /**
         * Coerce as JSON object containing an array of the ids, titles, and indexes of the selected slides.
         */
        SlideRange,
        /**
        * Coerce as Image
        */
        Image
    }
    export enum DocumentMode {
        /**
         * Document in Read Only Mode
         */
        ReadOnly,
        /**
         * Document in Read/Write Mode
         */
        ReadWrite
    }
    export enum EventType {
        /**
         * Occurs when the user changes the current view of the document.
         */
        ActiveViewChanged,
        /**
         * Triggers when a binding level data change happens
         */
        BindingDataChanged,
        /**
         *  Triggers when a binding level selection happens
         */
        BindingSelectionChanged,
        /**
         * Triggers when Dialog sends a message via MessageParent.
         */
        DialogMessageReceived,
        /**
         * Triggers when Dialog has a event, such as dialog closed, dialog navigation failed.
         */
        DialogEventReceived,
        /**
         * Triggers when a document level selection happens
         */
        DocumentSelectionChanged,
        /**
         * Triggers when a customXmlPart node was deleted
         */
        NodeDeleted,
        /**
         * Triggers when a customXmlPart node was inserted
         */
        NodeInserted,
        /**
         * Triggers when a customXmlPart node was replaced
         */
        NodeReplaced,
        /**
         * Triggers when settings change in a co-Auth session.
         */
        SettingsChanged,
        /**
         * Triggers when a Task selection happens in Project.
         */
        TaskSelectionChanged,
        /**
         *  Triggers when a Resource selection happens in Project.
         */
        ResourceSelectionChanged,
        /**
         * Triggers when a View selection happens in Project.
         */
        ViewSelectionChanged
    }
    export enum FileType {
        /**
         * Returns the file as plain text
         */
        Text,
        /**
         * Returns the file as a byte array
         */
        Compressed,
        /**
         * Returns the file in PDF format as a byte array
         */
        Pdf
    }
    export enum FilterType {
        /**
         * Returns all items
         */
        All,
        /**
         * Returns only visible items
         */
        OnlyVisible
    }
    export enum GoToType {
        /**
         * Goes to a binding object using the specified binding id.
         */
        Binding,
        /**
         * Goes to a named item using that item's name.
         * In Excel, you can use any structured reference for a named range or table: "Worksheet2!Table1"
         */
        NamedItem,
        /**
         * Goes to a slide using the specified id.
         */
        Slide,
        /**
         * Goes to the specified index by slide number or enum Office.Index
         */
        Index
    }
    export enum Index {
        First,
        Last,
        Next,
        Previous
    }
    export enum SelectionMode {
        Default,
        Selected,
        None
    }
    export enum ValueFormat {
        /**
         * Returns items without format
         */
        Unformatted,
        /**
         * Returns items with format
         */
        Formatted
    }
    // Objects
    export interface Binding {
        document: Document;
        /**
         * Id of the Binding
         */
        id: string;
        type: BindingType;
        /**
         * Adds an event handler to the object using the specified event type.
         * @param eventType The event type. For binding it can be 'bindingDataChanged' and 'bindingSelectionChanged'
         * @param handler The name of the handler
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the current selection.
         * @param options Syntax example: {coercionType: 'matrix,'valueFormat: 'formatted', filterType:'all'}
         *       coercionType: The expected shape of the selection. If not specified returns the bindingType shape. Use Office.CoercionType or text value.
         *       valueFormat: Get data with or without format. Use Office.ValueFormat or text value.
         *       startRow: Used in partial get for table/matrix. Indicates the start row.
         *       startColumn: Used in partial get for table/matrix. Indicates the start column.
         *       rowCount: Used in partial get for table/matrix. Indicates the number of rows from the start row.
         *       columnCount: Used in partial get for table/matrix. Indicates the number of columns from the start column.
         *       filterType: Get the visible or all the data. Useful when filtering data. Use Office.FilterType or text value.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getDataAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes an event handler from the object using the specified event type.
         * @param eventType The event type. For binding can be 'bindingDataChanged' and 'bindingSelectionChanged'
         * @param options Syntax example: {handler:eventHandler}
         *       handler: Indicates a specific handler to be removed, if not specified all handlers are removed
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        removeHandlerAsync(eventType: EventType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Writes the specified data into the current selection.
         * @param data The data to be set. Either a string or value, 2d array or TableData object
         * @param options Syntax example: {coercionType:Office.CoercionType.Matrix} or {coercionType: 'matrix'}
         *       coercionType: Explicitly sets the shape of the data object. Use Office.CoercionType or text value. If not supplied is inferred from the data type.
         *       startRow: Used in partial set for table/matrix. Indicates the start row.
         *       startColumn: Used in partial set for table/matrix. Indicates the start column.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setDataAsync(data: TableData | any, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface Bindings {
        document: Document;
        /**
         * Creates a binding against a named object in the document
         * @param itemName Name of the bindable object in the document. For Example 'MyExpenses' table in Excel."
         * @param bindingType The Office BindingType for the data
         * @param options Syntax example: {id: "BindingID"}
         *       id: Name of the binding, autogenerated if not supplied.
         *       asyncContext: Object keeping state for the callback
         *       columns: The string[] of the columns involved in the binding
         * @param callback The optional callback method
         */
        addFromNamedItemAsync(itemName: string, bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Create a binding by prompting the user to make a selection on the document.
         * @param bindingType The Office BindingType for the data
         * @param options addFromPromptAsyncOptions- e.g. {promptText: "Please select data", id: "mySales"}
         *       promptText: Greet your users with a friendly word.
         *       asyncContext: Object keeping state for the callback
         *       id: Identifier.
         *       sampleData: A TableData that gives sample table in the Dialog.TableData.Headers is [][] of string.
         * @param callback The optional callback method
         */
        addFromPromptAsync(bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Create a binding based on what the user's current selection.
         * @param bindingType The Office BindingType for the data
         * @param options addFromSelectionAsyncOptions- e.g. {id: "BindingID"}
         *       id: Identifier.
         *       asyncContext: Object keeping state for the callback
         *       columns: The string[] of the columns involved in the binding
         *       sampleData: A TableData that gives sample table in the Dialog.TableData.Headers is [][] of string.
         * @param callback The optional callback method
         */
        addFromSelectionAsync(bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets an array with all the binding objects in the document.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getAllAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Retrieves a binding based on its Name
         * @param id The binding id
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes the binding from the document
         * @param id The binding id
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        releaseByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface Context {
        document: Document;
    }
    export interface CustomXmlNode {
        baseName: string;
        namespaceUri: string;
        nodeType: string;
        /**
         * Gets the nodes associated with the xPath expression.
         * @param xPath The xPath expression
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getNodesAsync(xPath: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the node value.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getNodeValueAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the text of an XML node in a custom XML part.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getTextAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the node's XML.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getXmlAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets the node value.
         * @param value The value to be set on the node
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setNodeValueAsync(value: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously sets the text of an XML node in a custom XML part.
         * @param text Required. The text value of the XML node.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setTextAsync(text: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets the node XML.
         * @param xml The XML to be set on the node
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setXmlAsync(xml: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface CustomXmlPart {
        builtIn: boolean;
        id: string;
        namespaceManager: CustomXmlPrefixMappings;
        /**
         * Adds an event handler to the object using the specified event type.
         * @param eventType The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced'
         * @param handler The name of the handler
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addHandlerAsync(eventType: EventType, handler?: (result: any) => void, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Deletes the Custom XML Part.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        deleteAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the nodes associated with the xPath expression.
         * @param xPath The xPath expression
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getNodesAsync(xPath: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the XML for the Custom XML Part.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getXmlAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes an event handler from the object using the specified event type.
         * @param eventType The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced'
         * @param options Syntax example: {handler:eventHandler}
         *       handler: Indicates a specific handler to be removed, if not specified all handlers are removed
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        removeHandlerAsync(eventType: EventType, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface CustomXmlParts {
        /**
         * Asynchronously adds a new custom XML part to a file.
         * @param xml The XML to add to the newly created custom XML part.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        addAsync(xml: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the specified custom XML part by its id.
         * @param id The id of the custom XML part.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Asynchronously gets the specified custom XML part(s) by its namespace.
         * @param ns  The namespace to search.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback A function that is invoked when the callback returns, whose only parameter is of type AsyncResult.
         */
        getByNamespaceAsync(ns: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface CustomXmlPrefixMappings {
        /**
         * Adds a namespace.
         * @param prefix The namespace prefix
         * @param ns The namespace URI
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addNamespaceAsync(prefix: string, ns: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets a namespace  with the specified prefix
         * @param prefix The namespace prefix
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getNamespaceAsync(prefix: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets a prefix  for  the specified URI
         * @param ns The namespace URI
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getPrefixAsync(ns: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface Document {
        bindings: Bindings;
        customXmlParts: CustomXmlParts;
        mode: DocumentMode;
        settings: Settings;
        url: string;
        /**
         * Adds an event handler for the specified event type.
         * @param eventType The event type. For document can be 'DocumentSelectionChanged'
         * @param handler The name of the handler
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the current view of the presentation.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getActiveViewAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the entire file in slices of up to 4MB.
         * @param fileType The format in which the file will be returned
         * @param options Syntax example: {sliceSize:1024}
         *       sliceSize: Specifies the desired slice size (in bytes) up to 4MB. If not specified a default slice size of 4MB will be used.
         * @param callback The optional callback method
         */
        getFileAsync(fileType: FileType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets file properties of the current document.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getFilePropertiesAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Returns the current selection.
         * @param coercionType The expected shape of the selection.
         * @param options Syntax example: {valueFormat: 'formatted', filterType:'all'}
         *       valueFormat: Get data with or without format. Use Office.ValueFormat or text value.
         *       filterType: Get the visible or all the data. Useful when filtering data. Use Office.FilterType or text value.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getSelectedDataAsync(coercionType: CoercionType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Goes to the specified object or location in the document.
         * @param id The identifier of the object or location to go to.
         * @param goToType The type of the location to go to.
         * @param options Syntax example: {asyncContext:context}
         *       selectionMode: Use Office.SelectionMode or text value.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        goToByIdAsync(id: string | number, goToType: GoToType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Removes an event handler for the specified event type.
         * @param eventType The event type. For document can be 'DocumentSelectionChanged'
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         *       handler: The name of the handler. If not specified all handlers are removed
         * @param callback The optional callback method
         */
        removeHandlerAsync(eventType: EventType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Writes the specified data into the current selection.
         * @param data The data to be set. Either a string or value, 2d array or TableData object
         * @param options Syntax example: {coercionType:Office.CoercionType.Matrix} or {coercionType: 'matrix'}
         *       coercionType: Explicitly sets the shape of the data object. Use Office.CoercionType or text value. If not supplied is inferred from the data type.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setSelectedDataAsync(data: string | TableData | any[][], options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface File {
        size: number;
        sliceCount: number;
        /**
         * Closes the File.
         * @param callback The optional callback method
         */
        closeAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the specified slice.
         * @param sliceIndex The index of the slice to be retrieved
         * @param callback The optional callback method
         */
        getSliceAsync(sliceIndex: number, callback?: (result: AsyncResult) => void): void;
    }
    export interface FileProperties {
        /**
         * File's URL
         */
        url: string
    }
    export interface MatrixBinding extends Binding {
        columnCount: number;
        rowCount: number;
    }
    export interface Settings {
        /**
         * Adds an event handler for the object using the specified event type.
         * @param eventType The event type. For settings can be 'settingsChanged'
         * @param handler The name of the handler
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addHandlerAsync(eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Retrieves the setting with the specified name.
         * @param settingName The name of the setting
         */
        get(name: string): any;
        /**
         * Gets the latest version of the settings object.
         * @param callback The optional callback method
         */
        refreshAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Removes the setting with the specified name.
         * @param settingName The name of the setting
         */
        remove(name: string): void;
        /**
         * Removes an event handler for the specified event type.
         * @param eventType The event type. For settings can be 'settingsChanged'
         * @param options Syntax example: {handler:eventHandler}
         *       handler: Indicates a specific handler to be removed, if not specified all handlers are removed
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        removeHandlerAsync(eventType: EventType, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Saves all settings.
         * @param options Syntax example: {overwriteIfStale:false}
         *       overwriteIfStale: Indicates whether the setting will be replaced if stale.
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        saveAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Sets a value for the setting with the specified name.
         * @param settingName The name of the setting
         * @param value The value for the setting
         */
        set(name: string, value: any): void;
    }
    export interface Slice {
        data: any;
        index: number;
        size: number;
    }
    export interface TableBinding extends Binding {
        columnCount: number;
        hasHeaders: boolean;
        rowCount: number;
        /**
         * Adds the specified columns to the table
         * @param tableData  A TableData object with the headers and rows
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addColumnsAsync(tableData: TableData | any[][], options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Adds the specified rows to the table
         * @param rows  A 2D array with the rows to add
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addRowsAsync(rows: TableData | any[][], options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Clears the table
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        deleteAllDataValuesAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Clears formatting on the bound table.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        clearFormatsAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Gets the formatting on specified items in the table.
         * @param cellReference An object literal containing name-value pairs that specify the range of cells to get formatting from.
         * @param formats An array specifying the format properties to get.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getFormatsAsync(cellReference?: any, formats?: any[], options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Sets formatting on specified items and data in the table.
         * @param formatsInfo Array elements are themselves three-element arrays:[target, type, formats]
         *       target: The identifier of the item to format. String.
         *       type: The kind of item to format. String.
         *       formats: An object literal containing a list of property name-value pairs that define the formatting to apply.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setFormatsAsync(formatsInfo?: any[], options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Updates table formatting options on the bound table.
         * @param tableOptions An object literal containing a list of property name-value pairs that define the table options to apply.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setTableOptionsAsync(tableOptions: any, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export class TableData {
        constructor(rows: any[][], headers: any[]);
        constructor();
        headers: any[];
        rows: any[][];
    }
    export enum Table {
        All,
        Data,
        Headers
    }
    export interface TextBinding extends Binding { }
    export enum ProjectProjectFields {
        CurrencyDigits,
        CurrencySymbol,
        CurrencySymbolPosition,
        DurationUnits,
        GUID,
        Finish,
        Start,
        ReadOnly,
        VERSION,
        WorkUnits,
        ProjectServerUrl,
        WSSUrl,
        WSSList
    }
    export enum ProjectResourceFields {
        Accrual,
        ActualCost,
        ActualOvertimeCost,
        ActualOvertimeWork,
        ActualOvertimeWorkProtected,
        ActualWork,
        ActualWorkProtected,
        BaseCalendar,
        Baseline10BudgetCost,
        Baseline10BudgetWork,
        Baseline10Cost,
        Baseline10Work,
        Baseline1BudgetCost,
        Baseline1BudgetWork,
        Baseline1Cost,
        Baseline1Work,
        Baseline2BudgetCost,
        Baseline2BudgetWork,
        Baseline2Cost,
        Baseline2Work,
        Baseline3BudgetCost,
        Baseline3BudgetWork,
        Baseline3Cost,
        Baseline3Work,
        Baseline4BudgetCost,
        Baseline4BudgetWork,
        Baseline4Cost,
        Baseline4Work,
        Baseline5BudgetCost,
        Baseline5BudgetWork,
        Baseline5Cost,
        Baseline5Work,
        Baseline6BudgetCost,
        Baseline6BudgetWork,
        Baseline6Cost,
        Baseline6Work,
        Baseline7BudgetCost,
        Baseline7BudgetWork,
        Baseline7Cost,
        Baseline7Work,
        Baseline8BudgetCost,
        Baseline8BudgetWork,
        Baseline8Cost,
        Baseline8Work,
        Baseline9BudgetCost,
        Baseline9BudgetWork,
        Baseline9Cost,
        Baseline9Work,
        BaselineBudgetCost,
        BaselineBudgetWork,
        BaselineCost,
        BaselineWork,
        BudgetCost,
        BudgetWork,
        ResourceCalendarGUID,
        Code,
        Cost1,
        Cost10,
        Cost2,
        Cost3,
        Cost4,
        Cost5,
        Cost6,
        Cost7,
        Cost8,
        Cost9,
        ResourceCreationDate,
        Date1,
        Date10,
        Date2,
        Date3,
        Date4,
        Date5,
        Date6,
        Date7,
        Date8,
        Date9,
        Duration1,
        Duration10,
        Duration2,
        Duration3,
        Duration4,
        Duration5,
        Duration6,
        Duration7,
        Duration8,
        Duration9,
        Email,
        End,
        Finish1,
        Finish10,
        Finish2,
        Finish3,
        Finish4,
        Finish5,
        Finish6,
        Finish7,
        Finish8,
        Finish9,
        Flag10,
        Flag1,
        Flag11,
        Flag12,
        Flag13,
        Flag14,
        Flag15,
        Flag16,
        Flag17,
        Flag18,
        Flag19,
        Flag2,
        Flag20,
        Flag3,
        Flag4,
        Flag5,
        Flag6,
        Flag7,
        Flag8,
        Flag9,
        Group,
        Units,
        Name,
        Notes,
        Number1,
        Number10,
        Number11,
        Number12,
        Number13,
        Number14,
        Number15,
        Number16,
        Number17,
        Number18,
        Number19,
        Number2,
        Number20,
        Number3,
        Number4,
        Number5,
        Number6,
        Number7,
        Number8,
        Number9,
        OvertimeCost,
        OvertimeRate,
        OvertimeWork,
        PercentWorkComplete,
        CostPerUse,
        Generic,
        OverAllocated,
        RegularWork,
        RemainingCost,
        RemainingOvertimeCost,
        RemainingOvertimeWork,
        RemainingWork,
        ResourceGUID,
        Cost,
        Work,
        Start,
        Start1,
        Start10,
        Start2,
        Start3,
        Start4,
        Start5,
        Start6,
        Start7,
        Start8,
        Start9,
        StandardRate,
        Text1,
        Text10,
        Text11,
        Text12,
        Text13,
        Text14,
        Text15,
        Text16,
        Text17,
        Text18,
        Text19,
        Text2,
        Text20,
        Text21,
        Text22,
        Text23,
        Text24,
        Text25,
        Text26,
        Text27,
        Text28,
        Text29,
        Text3,
        Text30,
        Text4,
        Text5,
        Text6,
        Text7,
        Text8,
        Text9
    }
    export enum ProjectTaskFields {
        ActualCost,
        ActualDuration,
        ActualFinish,
        ActualOvertimeCost,
        ActualOvertimeWork,
        ActualStart,
        ActualWork,
        Text1,
        Text10,
        Finish10,
        Start10,
        Text11,
        Text12,
        Text13,
        Text14,
        Text15,
        Text16,
        Text17,
        Text18,
        Text19,
        Finish1,
        Start1,
        Text2,
        Text20,
        Text21,
        Text22,
        Text23,
        Text24,
        Text25,
        Text26,
        Text27,
        Text28,
        Text29,
        Finish2,
        Start2,
        Text3,
        Text30,
        Finish3,
        Start3,
        Text4,
        Finish4,
        Start4,
        Text5,
        Finish5,
        Start5,
        Text6,
        Finish6,
        Start6,
        Text7,
        Finish7,
        Start7,
        Text8,
        Finish8,
        Start8,
        Text9,
        Finish9,
        Start9,
        Baseline10BudgetCost,
        Baseline10BudgetWork,
        Baseline10Cost,
        Baseline10Duration,
        Baseline10Finish,
        Baseline10FixedCost,
        Baseline10FixedCostAccrual,
        Baseline10Start,
        Baseline10Work,
        Baseline1BudgetCost,
        Baseline1BudgetWork,
        Baseline1Cost,
        Baseline1Duration,
        Baseline1Finish,
        Baseline1FixedCost,
        Baseline1FixedCostAccrual,
        Baseline1Start,
        Baseline1Work,
        Baseline2BudgetCost,
        Baseline2BudgetWork,
        Baseline2Cost,
        Baseline2Duration,
        Baseline2Finish,
        Baseline2FixedCost,
        Baseline2FixedCostAccrual,
        Baseline2Start,
        Baseline2Work,
        Baseline3BudgetCost,
        Baseline3BudgetWork,
        Baseline3Cost,
        Baseline3Duration,
        Baseline3Finish,
        Baseline3FixedCost,
        Baseline3FixedCostAccrual,
        Basline3Start,
        Baseline3Work,
        Baseline4BudgetCost,
        Baseline4BudgetWork,
        Baseline4Cost,
        Baseline4Duration,
        Baseline4Finish,
        Baseline4FixedCost,
        Baseline4FixedCostAccrual,
        Baseline4Start,
        Baseline4Work,
        Baseline5BudgetCost,
        Baseline5BudgetWork,
        Baseline5Cost,
        Baseline5Duration,
        Baseline5Finish,
        Baseline5FixedCost,
        Baseline5FixedCostAccrual,
        Baseline5Start,
        Baseline5Work,
        Baseline6BudgetCost,
        Baseline6BudgetWork,
        Baseline6Cost,
        Baseline6Duration,
        Baseline6Finish,
        Baseline6FixedCost,
        Baseline6FixedCostAccrual,
        Baseline6Start,
        Baseline6Work,
        Baseline7BudgetCost,
        Baseline7BudgetWork,
        Baseline7Cost,
        Baseline7Duration,
        Baseline7Finish,
        Baseline7FixedCost,
        Baseline7FixedCostAccrual,
        Baseline7Start,
        Baseline7Work,
        Baseline8BudgetCost,
        Baseline8BudgetWork,
        Baseline8Cost,
        Baseline8Duration,
        Baseline8Finish,
        Baseline8FixedCost,
        Baseline8FixedCostAccrual,
        Baseline8Start,
        Baseline8Work,
        Baseline9BudgetCost,
        Baseline9BudgetWork,
        Baseline9Cost,
        Baseline9Duration,
        Baseline9Finish,
        Baseline9FixedCost,
        Baseline9FixedCostAccrual,
        Baseline9Start,
        Baseline9Work,
        BaselineBudgetCost,
        BaselineBudgetWork,
        BaselineCost,
        BaselineDuration,
        BaselineFinish,
        BaselineFixedCost,
        BaselineFixedCostAccrual,
        BaselineStart,
        BaselineWork,
        BudgetCost,
        BudgetFixedCost,
        BudgetFixedWork,
        BudgetWork,
        TaskCalendarGUID,
        ConstraintDate,
        ConstraintType,
        Cost1,
        Cost10,
        Cost2,
        Cost3,
        Cost4,
        Cost5,
        Cost6,
        Cost7,
        Cost8,
        Cost9,
        Date1,
        Date10,
        Date2,
        Date3,
        Date4,
        Date5,
        Date6,
        Date7,
        Date8,
        Date9,
        Deadline,
        Duration1,
        Duration10,
        Duration2,
        Duration3,
        Duration4,
        Duration5,
        Duration6,
        Duration7,
        Duration8,
        Duration9,
        Duration,
        EarnedValueMethod,
        FinishSlack,
        FixedCost,
        FixedCostAccrual,
        Flag10,
        Flag1,
        Flag11,
        Flag12,
        Flag13,
        Flag14,
        Flag15,
        Flag16,
        Flag17,
        Flag18,
        Flag19,
        Flag2,
        Flag20,
        Flag3,
        Flag4,
        Flag5,
        Flag6,
        Flag7,
        Flag8,
        Flag9,
        FreeSlack,
        HasRollupSubTasks,
        ID,
        Name,
        Notes,
        Number1,
        Number10,
        Number11,
        Number12,
        Number13,
        Number14,
        Number15,
        Number16,
        Number17,
        Number18,
        Number19,
        Number2,
        Number20,
        Number3,
        Number4,
        Number5,
        Number6,
        Number7,
        Number8,
        Number9,
        ScheduledDuration,
        ScheduledFinish,
        ScheduledStart,
        OutlineLevel,
        OvertimeCost,
        OvertimeWork,
        PercentComplete,
        PercentWorkComplete,
        Predecessors,
        PreleveledFinish,
        PreleveledStart,
        Priority,
        Active,
        Critical,
        Milestone,
        Overallocated,
        IsRollup,
        Summary,
        RegularWork,
        RemainingCost,
        RemainingDuration,
        RemainingOvertimeCost,
        RemainingWork,
        ResourceNames,
        Cost,
        Finish,
        Start,
        Work,
        StartSlack,
        Status,
        Successors,
        StatusManager,
        TotalSlack,
        TaskGUID,
        Type,
        WBS,
        WBSPREDECESSORS,
        WBSSUCCESSORS,
        WSSID
    }
    export enum ProjectViewTypes {
        Gantt,
        NetworkDiagram,
        TaskDiagram,
        TaskForm,
        TaskSheet,
        ResourceForm,
        ResourceSheet,
        ResourceGraph,
        TeamPlanner,
        TaskDetails,
        TaskNameForm,
        ResourceNames,
        Calendar,
        TaskUsage,
        ResourceUsage,
        Timeline
    }
    // Objects
    export interface Document {
        /**
         * Get Project field (Ex. ProjectWebAccessURL).
         * @param fieldId Project level fields.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getProjectFieldAsync(fieldId: number, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get resource field for provided resource Id. (Ex.ResourceName)
         * @param resourceId Either a string or value of the Resource Id.
         * @param fieldId Resource Fields.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getResourceFieldAsync(resourceId: string, fieldId: number, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get the current selected Resource's Id.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getSelectedResourceAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get the current selected Task's Id.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getSelectedTaskAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get the current selected View Type (Ex. Gantt) and View Name.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getSelectedViewAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get the Task Name, WSS Task Id, and ResourceNames for given taskId.
         * @param taskId Either a string or value of the Task Id.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getTaskAsync(taskId: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get task field for provided task Id. (Ex. StartDate).
         * @param taskId Either a string or value of the Task Id.
         * @param fieldId Task Fields.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getTaskFieldAsync(taskId: string, fieldId: number, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Get the WSS Url and list name for the Tasks List, the MPP is synced too.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getWSSUrlAsync(options?: any, callback?: (result: AsyncResult) => void): void;
    }
}




////////////////////////////////////////////////////////////////
////////////////////// Begin Exchange APIs /////////////////////
////////////////////////////////////////////////////////////////


declare namespace Office.MailboxEnums {
    export enum BodyType {
        /**
         * The body is in HTML format
         */
        Html,
        /**
         * The body is in text format
         */
        text
    }
    export enum EntityType {
        /**
         * Specifies that the entity is a meeting suggestion
         */
        MeetingSuggestion,
        /**
         * Specifies that the entity is a task suggestion
         */
        TaskSuggestion,
        /**
         * Specifies that the entity is a postal address
         */
        Address,
        /**
         * Specifies that the entity is SMTP email address
         */
        EmailAddress,
        /**
         * Specifies that the entity is an Internet URL
         */
        Url,
        /**
         * Specifies that the entity is US phone number
         */
        PhoneNumber,
        /**
         * Specifies that the entity is a contact
         */
        Contact
    }
    export enum ItemType {
        /**
         * A meeting request, response, or cancellation
         */
        Message,
        /**
         * Specifies an appointment item
         */
        Appointment
    }
    export enum ResponseType {
        /**
         * There has been no response from the attendee
         */
        None,
        /**
         * The attendee is the meeting organizer
         */
        Organizer,
        /**
         * The meeting request was tentatively accepted by the attendee
         */
        Tentative,
        /**
         * The meeting request was accepted by the attendee
         */
        Accepted,
        /**
         * The meeting request was declined by the attendee
         */
        Declined
    }
    export enum RecipientType {
        /**
         * Specifies that the recipient is not one of the other recipient types
         */
        Other,
        /**
         * Specifies that the recipient is a distribution list containing a list of email addresses
         */
        DistributionList,
        /**
         * Specifies that the recipient is an SMTP email address that is on the Exchange server
         */
        User,
        /**
         * Specifies that the recipient is an SMTP email address that is not on the Exchange server
         */
        ExternalUser
    }
    export enum AttachmentType {
        /**
         * The attachment is a file
         */
        File,
        /**
         * The attachment is an Exchange item
         */
        Item
    }
}
declare namespace Office {
    export module Types {
        export interface ItemRead extends Office.Item {
            subject: any;
            /**
             * Displays a reply form that includes the sender and all the recipients of the selected message
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyAllForm(htmlBody: string): void;
            /**
             * Displays a reply form that includes only the sender of the selected message
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyForm(htmlBody: string): void;
            /**
             * Gets an array of entities found in an message
             */
            getEntities(): Office.Entities;
            /**
             * Gets an array of entities of the specified entity type found in an message
             * @param entityType One of the EntityType enumeration values
             */
            getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities;
            /**
             * Returns well-known entities that pass the named filter defined in the manifest XML file
             * @param name  A TableData object with the headers and rows
             */
            getFilteredEntitiesByName(name: string): Office.Entities;
            /**
             * Returns string values in the currently selected message object that match the regular expressions defined in the manifest XML file
             */
            getRegExMatches(): string[];
            /**
             * Returns string values that match the named regular expression defined in the manifest XML file
             */
            getRegExMatchesByName(name: string): string[];
        }
        export interface ItemCompose extends Office.Item {
            body: Office.Body;
            subject: any;
            /**
             * Adds a file to a message as an attachment
             * @param uri The URI that provides the location of the file to attach to the message. The maximum length is 2048 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addFileAttachmentAsync(uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Adds an Exchange item, such as a message, as an attachment to the message
             * @param itemId The Exchange identifier of the item to attach. The maximum length is 100 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addItemAttachmentAsync(itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Removes an attachment from a message
             * @param attachmentIndex The index of the attachment to remove. The maximum length of the string is 100 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            removeAttachmentAsync(attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void): void;
        }
        export interface MessageCompose extends Office.Message {
            attachments: Office.AttachmentDetails[];
            body: Office.Body;
            bcc: Office.Recipients;
            cc: Office.Recipients;
            subject: Office.Subject;
            to: Office.Recipients;
            /**
             * Adds a file to a message as an attachment
             * @param uri The URI that provides the location of the file to attach to the message. The maximum length is 2048 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addFileAttachmentAsync(uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Adds an Exchange item, such as a message, as an attachment to the message
             * @param itemId The Exchange identifier of the item to attach. The maximum length is 100 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addItemAttachmentAsync(itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Removes an attachment from a message
             * @param attachmentIndex The index of the attachment to remove. The maximum length of the string is 100 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            removeAttachmentAsync(attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void): void;
        }
        export interface MessageRead extends Office.Message {
            cc: Office.EmailAddressDetails[];
            from: Office.EmailAddressDetails;
            internetMessageId: string;
            normalizedSubject: string;
            sender: Office.EmailAddressDetails;
            subject: string;
            to: Office.EmailAddressDetails;
            /**
             * Displays a reply form that includes the sender and all the recipients of the selected message
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyAllForm(htmlBody: string): void;
            /**
             * Displays a reply form that includes only the sender of the selected message
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyForm(htmlBody: string): void;
            /**
             * Gets an array of entities found in an message
             */
            getEntities(): Office.Entities;
            /**
             * Gets an array of entities of the specified entity type found in an message
             * @param entityType One of the EntityType enumeration values
             */
            getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities;
            /**
             * Returns well-known entities that pass the named filter defined in the manifest XML file
             * @param name  A TableData object with the headers and rows
             */
            getFilteredEntitiesByName(name: string): Office.Entities;
            /**
             * Returns string values in the currently selected message object that match the regular expressions defined in the manifest XML file
             */
            getRegExMatches(): string[];
            /**
             * Returns string values that match the named regular expression defined in the manifest XML file
             */
            getRegExMatchesByName(name: string): string[];
        }
        export interface AppointmentCompose extends Office.Appointment {
            body: Office.Body;
            end: Office.Time;
            location: Office.Location;
            optionalAttendees: Office.Recipients;
            requiredAttendees: Office.Recipients;
            start: Office.Time;
            subject: Office.Subject;
            /**
             * Adds a file to an appointment as an attachment
             * @param uri The URI that provides the location of the file to attach to the appointment. The maximum length is 2048 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addFileAttachmentAsync(uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Adds an Exchange item, such as a message, as an attachment to the appointment
             * @param itemId The Exchange identifier of the item to attach. The maximum length is 100 characters
             * @param attachmentName The name of the attachment that is shown while the attachment is uploading. The maximum length is 255 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            addItemAttachmentAsync(itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void): void;
            /**
             * Removes an attachment from a appointment
             * @param attachmentIndex The index of the attachment to remove. The maximum length of the string is 100 characters
             * @param options Any optional parameters or state data passed to the method
             * @param callback The optional callback method
             */
            removeAttachmentAsync(attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void): void;
        }
        export interface AppointmentRead extends Office.Appointment {
            attachments: Office.AttachmentDetails[];
            end: Date;
            location: string;
            normalizedSubject: string;
            optionalAttendees: Office.EmailAddressDetails;
            organizer: Office.EmailAddressDetails;
            requiredAttendees: Office.EmailAddressDetails;
            resources: string[];
            start: Date;
            subject: string;
            /**
             * Displays a reply form that includes the organizer and all the attendees of the selected appointment item
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyAllForm(htmlBody: string): void;
            /**
             * Displays a reply form that includes only the organizer of the selected appointment item
             * @param htmlBody A string that contains text and HTML and that represents the body of the reply form. The string is limited to 32 KB
             */
            displayReplyForm(htmlBody: string): void;
            /**
             * Gets an array of entities found in an appointment
             */
            getEntities(): Office.Entities;
            /**
             * Gets an array of entities of the specified entity type found in an appointment
             * @param entityType One of the EntityType enumeration values
             */
            getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities;
            /**
             * Returns well-known entities that pass the named filter defined in the manifest XML file
             * @param name  A TableData object with the headers and rows
             */
            getFilteredEntitiesByName(name: string): Office.Entities;
            /**
             * Returns string values in the currently selected appointment object that match the regular expressions defined in the manifest XML file
             */
            getRegExMatches(): string[];
            /**
             * Returns string values that match the named regular expression defined in the manifest XML file
             */
            getRegExMatchesByName(name: string): string[];
        }
    }
    export module cast {
        export module item {
            function toAppointmentCompose(item: Office.Item): Office.Types.AppointmentCompose;
            function toAppointmentRead(item: Office.Item): Office.Types.AppointmentRead;
            function toAppointment(item: Office.Item): Office.Appointment;
            function toMessageCompose(item: Office.Item): Office.Types.MessageCompose;
            function toMessageRead(item: Office.Item): Office.Types.MessageRead;
            function toMessage(item: Office.Item): Office.Message;
            function toItemCompose(item: Office.Item): Office.Types.ItemCompose;
            function toItemRead(item: Office.Item): Office.Types.ItemRead;
        }
    }
    export interface AttachmentDetails {
        attachmentType: Office.MailboxEnums.AttachmentType;
        contentType: string;
        id: string;
        isInline: boolean;
        name: string;
        size: number;
    }
    export interface Contact {
        personName: string;
        businessName: string;
        phoneNumbers: PhoneNumber[];
        emailAddresses: string[];
        urls: string[];
        addresses: string[];
        contactString: string;
    }

    export interface Context {
        mailbox: Mailbox;
        roamingSettings: RoamingSettings;
    }
    export interface CustomProperties {
        /**
         * Returns the value of the specified custom property
         * @param name The name of the property to be returned
         */
        get(name: string): any;
        /**
         * Sets the specified property to the specified value
         * @param name The name of the property to be set
         * @param value The value of the property to be set
         */
        set(name: string, value: string): void;
        /**
         * Removes the specified property from the custom property collection.
         * @param name The name of the property to be removed
         */
        remove(name: string): void;
        /**
         * Saves the custom property collection to the server
         * @param callback The optional callback method
         * @param userContext Optional variable for any state data that is passed to the saveAsync method
         */
        saveAsync(callback?: (result: AsyncResult) => void, userContext?: any): void;
    }
    export interface EmailAddressDetails {
        emailAddress: string;
        displayName: string;
        appointmentResponse: Office.MailboxEnums.ResponseType;
        recipientType: Office.MailboxEnums.RecipientType;
    }
    export interface EmailUser {
        name: string;
        userId: string;
    }
    export interface Entities {
        addresses: string[];
        taskSuggestions: string[];
        meetingSuggestions: MeetingSuggestion[];
        emailAddresses: string[];
        urls: string[];
        phoneNumbers: PhoneNumber[];
        contacts: Contact[];
    }
    export interface Item {
        dateTimeCreated: Date;
        dateTimeModified: Date;
        itemClass: string;
        itemId: string;
        itemType: Office.MailboxEnums.ItemType;
        /**
         * Asynchronously loads custom properties that are specific to the item and a app for Office
         * @param callback The optional callback method
         * @param userContext Optional variable for any state data that is passed to the asynchronous method
         */
        loadCustomPropertiesAsync(callback?: (result: AsyncResult) => void, userContext?: any): void;
    }
    export interface Appointment extends Item {
    }
    export interface Body {
        /**
         * Gets a value that indicates whether the content is in HTML or text format
         * @param tableData  A TableData object with the headers and rows
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the getTypeAsync method returns
         */
        getTypeAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Adds the specified content to the beginning of the item body
         * @param data The string to be inserted at the beginning of the body. The string is limited to 1,000,000 characters
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        prependAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Replaces the selection in the body with the specified text
         * @param data The string to be inserted at the beginning of the body. The string is limited to 1,000,000 characters
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        setSelectedDataAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface Location {
        /**
         * Begins an asynchronous request for the location of an appointment
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        getAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Begins an asynchronous request to set the location of an appointment
         * @param data The location of the appointment. The string is limited to 255 characters
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the location is set
         */
        setAsync(location: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface Mailbox {
        item: Item;
        userProfile: UserProfile;
        /**
         * Gets a Date object from a dictionary containing time information
         * @param timeValue A Date object
         */
        convertToLocalClientTime(timeValue: Date): any;
        /**
         * Gets a dictionary containing time information in local client time
         * @param input A dictionary containing a date. The dictionary should contain the following fields: year, month, date, hours, minutes, seconds, time zone, time zone offset
         */
        convertToUtcClientTime(input: any): Date;
        /**
         * Displays an existing calendar appointment
         * @param itemId The Exchange Web Services (EWS) identifier for an existing calendar appointment
         */
        displayAppointmentForm(itemId: any): void;
        /**
         * Displays an existing message
         * @param itemId The Exchange Web Services (EWS) identifier for an existing message
         */
        displayMessageForm(itemId: any): void;
        /**
         * Displays a form for creating a new calendar appointment
         * @param requiredAttendees An array of strings containing the email addresses or an array containing an EmailAddressDetails object for each of the required attendees for the appointment. The array is limited to a maximum of 100 entries
         * @param optionalAttendees An array of strings containing the email addresses or an array containing an EmailAddressDetails object for each of the optional attendees for the appointment. The array is limited to a maximum of 100 entries
         * @param start A Date object specifying the start date and time of the appointment
         * @param end A Date object specifying the end date and time of the appointment
         * @param location A string containing the location of the appointment. The string is limited to a maximum of 255 characters
         * @param resources An array of strings containing the resources required for the appointment. The array is limited to a maximum of 100 entries
         * @param subject A string containing the subject of the appointment. The string is limited to a maximum of 255 characters
         * @param body The body of the appointment message. The body content is limited to a maximum size of 32 KB
         */
        displayNewAppointmentForm(requiredAttendees: any, optionalAttendees: any, start: Date, end: Date, location: string, resources: string[], subject: string, body: string): void;
        /**
         * Gets a string that contains a token used to get an attachment or item from an Exchange Server
         * @param callback The optional method to call when the string is inserted
         * @param userContext Optional variable for any state data that is passed to the asynchronous method
         */
        getCallbackTokenAsync(callback?: (result: AsyncResult) => void, userContext?: any): void;
        /**
         * Gets a token identifying the user and the app for Office
         * @param callback The optional method to call when the string is inserted
         * @param userContext Optional variable for any state data that is passed to the asynchronous method
         */
        getUserIdentityTokenAsync(callback?: (result: AsyncResult) => void, userContext?: any): void;
        /**
         * Makes an asynchronous request to an Exchange Web Services (EWS) service on the Exchange server that hosts the user’s mailbox
         * @param data The EWS request
         * @param callback The optional method to call when the string is inserted
         * @param userContext Optional variable for any state data that is passed to the asynchronous method
         */
        makeEwsRequestAsync(data: any, callback?: (result: AsyncResult) => void, userContext?: any): void;
    }
    export interface Message extends Item {
        conversationId: string;
    }
    export interface MeetingRequest extends Message {
        start: Date;
        end: Date;
        location: string;
        optionalAttendees: EmailAddressDetails[];
        requiredAttendees: EmailAddressDetails[];
    }
    export interface MeetingSuggestion {
        meetingString: string;
        attendees: EmailAddressDetails[];
        location: string;
        subject: string;
        start: Date;
        end: Date;
    }
    export interface PhoneNumber {
        phoneString: string;
        originalPhoneString: string;
        type: string;
    }
    export interface Recipients {
        /**
         * Begins an asynchronous request to add a recipient list to an appointment or message
         * @param recipients The recipients to add to the recipients list
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        addAsync(recipients: any, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Begins an asynchronous request to get the recipient list for an appointment or message
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        getAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Begins an asynchronous request to set the recipient list for an appointment or message
         * @param recipients The recipients to add to the recipients list
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        setAsync(recipients: any, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface RoamingSettings {
        /**
         * Retrieves the specified setting
         * @param name The case-sensitive name of the setting to retrieve
         */
        get(name: string): any;
        /**
         * Removes the specified setting
         * @param name The case-sensitive name of the setting to remove
         */
        remove(name: string): void;
        /**
         * Saves the settings
         * @param callback A function that is invoked when the callback returns, whose only parameter is of type AsyncResult
         */
        saveAsync(callback?: (result: AsyncResult) => void): void;
        /**
         * Sets or creates the specified setting
         * @param name The case-sensitive name of the setting to set or create
         * @param value Specifies the value to be stored
         */
        set(name: string, value: any): void;
    }
    export interface Subject {
        /**
         * Begins an asynchronous request to get the subject of an appointment or message
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        getAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Begins an asynchronous call to set the subject of an appointment or message
         * @param data The subject of the appointment. The string is limited to 255 characters
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        setAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface TaskSuggestion {
        assignees: EmailUser[];
        taskString: string;
    }
    export interface Time {
        /**
         * Begins an asynchronous request to get the start or end time
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        getAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Begins an asynchronous request to set the start or end time
         * @param dateTime A date-time object in Coordinated Universal Time (UTC)
         * @param options Any optional parameters or state data passed to the method
         * @param callback The optional method to call when the string is inserted
         */
        setAsync(dateTime: Date, options?: any, callback?: (result: AsyncResult) => void): void;
    }
    export interface UserProfile {
        displayName: string;
        emailAddress: string;
        timeZone: string;
    }
}


////////////////////////////////////////////////////////////////
/////////////////////// End Exchange APIs //////////////////////
////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
///////////////// Begin OfficeExtension runtime ////////////////
////////////////////////////////////////////////////////////////


declare module OfficeExtension {
    /** An abstract proxy object that represents an object in an Office document. You create proxy objects from the context (or from other proxy objects), add commands to a queue to act on the object, and then synchronize the proxy object state with the document by calling "context.sync()". */
    class ClientObject {
        /** The request context associated with the object */
        context: ClientRequestContext;
        /** Returns a boolean value for whether the corresponding object is a null object. You must call "context.sync()" before reading the isNullObject property. */
        isNullObject: boolean;
    }
}
declare module OfficeExtension {
    interface LoadOption {
        select?: string | string[];
        expand?: string | string[];
        top?: number;
        skip?: number;
    }
    /** An abstract RequestContext object that facilitates requests to the host Office application. The "Excel.run" and "Word.run" methods provide a request context. */
    class ClientRequestContext {
        constructor(url?: string);

        /** Collection of objects that are tracked for automatic adjustments based on surrounding changes in the document. */
        trackedObjects: TrackedObjects;

        /** Request headers */
        requestHeaders: { [name: string]: string };

        /** Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties. */
        load(object: ClientObject, option?: string | string[]| LoadOption): void;

        /**
        * Queues up a command to recursively load the specified properties of the object and its navigation properties.
        * You must call "context.sync()" before reading the properties.
        * 
        * @param object The object to be loaded.
        * @param options The key-value pairing of load options for the types, such as { "Workbook": "worksheets,tables",  "Worksheet": "tables",  "Tables": "name" }
        * @param maxDepth The maximum recursive depth.
        */
        loadRecursive(object: ClientObject, options: { [typeName: string]: string | string[] | LoadOption }, maxDepth?: number): void;

        /** Adds a trace message to the queue. If the promise returned by "context.sync()" is rejected due to an error, this adds a ".traceMessages" array to the OfficeExtension.Error object, containing all trace messages that were executed. These messages can help you monitor the program execution sequence and detect the cause of the error. */
        trace(message: string): void;

        /** Synchronizes the state between JavaScript proxy objects and the Office document, by executing instructions queued on the request context and retrieving properties of loaded Office objects for use in your code. This method returns a promise, which is resolved when the synchronization is complete. */
        sync<T>(passThroughValue?: T): IPromise<T>;
    }
}
declare module OfficeExtension {
    /** Contains the result for methods that return primitive types. The object's value property is retrieved from the document after "context.sync()" is invoked. */
    class ClientResult<T> {
        /** The value of the result that is retrieved from the document after "context.sync()" is invoked. */
        value: T;
    }
}
declare module OfficeExtension {
    /** The error object returned by "context.sync()", if a promise is rejected due to an error while processing the request. */
    class Error {
        /** Error name: "OfficeExtension.Error".*/
        name: string;
        /** The error message passed through from the host Office application. */
        message: string;
        /** Stack trace, if applicable. */
        stack: string;
        /** Error code string, such as "InvalidArgument". */
        code: string;
        /** Trace messages (if any) that were added via a "context.trace()" invocation before calling "context.sync()". If there was an error, this contains all trace messages that were executed before the error occurred. These messages can help you monitor the program execution sequence and detect the case of the error. */
        traceMessages: Array<string>;
        /** Debug info, if applicable. The ".errorLocation" property can describe the object and method or property that caused the error. */
        debugInfo: {
            /** If applicable, will return the object type and the name of the method or property that caused the error. */
            errorLocation?: string;
        };
    }
}
declare module OfficeExtension {
    class ErrorCodes {
        static accessDenied: string;
        static generalException: string;
        static activityLimitReached: string;
    }
}
declare module OfficeExtension {
    /** An IPromise object that represents a deferred interaction with the host Office application. */
    interface IPromise<R> {
        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => U): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => void): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => void): IPromise<U>;


        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => U): IPromise<U>;

        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => void): IPromise<U>;
    }

    /** An Promise object that represents a deferred interaction with the host Office application. The publically-consumable OfficeExtension.Promise is available starting in ExcelApi 1.2 and WordApi 1.2. Promises can be chained via ".then", and errors can be caught via ".catch". Remember to always use a ".catch" on the outer promise, and to return intermediary promises so as not to break the promise chain. When a "native" Promise implementation is available, OfficeExtension.Promise will switch to use the native Promise instead. */
    export class Promise<R> implements IPromise<R>
    {
        /**
         * Creates a new promise based on a function that accepts resolve and reject handlers.
         */
        constructor(func: (resolve: (value?: R | IPromise<R>) => void, reject: (error?: any) => void) => void);

        /**
         * Creates a promise that resolves when all of the child promises resolve.
         */
        static all<U>(promises: OfficeExtension.IPromise<U>[]): IPromise<U[]>;

        /**
         * Creates a promise that is resolved.
         */
        static resolve<U>(value: U): IPromise<U>;

        /**
         * Creates a promise that is rejected.
         */
        static reject<U>(error: any): IPromise<U>;

        /* This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => U): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => void): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IPromise<U>;

        /**
         * This method will be called once the previous promise has been resolved.
         * Both the onFulfilled on onRejected callbacks are optional.
         * If either or both are omitted, the next onFulfilled/onRejected in the chain will be called called.

         * @returns A new promise for the value or error that was returned from onFulfilled/onRejected.
         */
        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => void): IPromise<U>;


        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => IPromise<U>): IPromise<U>;

        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => U): IPromise<U>;

        /**
         * Catches failures or exceptions from actions within the promise, or from an unhandled exception earlier in the call stack.
         * @param onRejected function to be called if or when the promise rejects.
         */
        catch<U>(onRejected?: (error: any) => void): IPromise<U>;
    }
}

declare module OfficeExtension {
    /** Collection of tracked objects, contained within a request context. See "context.trackedObjects" for more information. */
    class TrackedObjects {
        /** Track a new object for automatic adjustment based on surrounding changes in the document. Only some object types require this. If you are using an object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created. */
        add(object: ClientObject): void;
        /** Track a new object for automatic adjustment based on surrounding changes in the document. Only some object types require this. If you are using an object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created. */
        add(objects: ClientObject[]): void;
        /** Release the memory associated with an object that was previously added to this collection. Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect. */
        remove(object: ClientObject): void;
        /** Release the memory associated with an object that was previously added to this collection. Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect. */
        remove(objects: ClientObject[]): void;
    }
}

declare module OfficeExtension {
    export class EventHandlers<T> {
        constructor(context: ClientRequestContext, parentObject: ClientObject, name: string, eventInfo: EventInfo<T>);
        add(handler: (args: T) => IPromise<any>): EventHandlerResult<T>;
        remove(handler: (args: T) => IPromise<any>): void;
        removeAll(): void;
    }

    export class EventHandlerResult<T> {
        constructor(context: ClientRequestContext, handlers: EventHandlers<T>, handler: (args: T) => IPromise<any>);
        remove(): void;
    }

    export interface EventInfo<T> {
        registerFunc: (callback: (args: any) => void) => IPromise<any>;
        unregisterFunc: (callback: (args: any) => void) => IPromise<any>;
        eventArgsTransformFunc: (args: any) => IPromise<T>;
    }
}
declare module OfficeExtension {
    /**
    * Request URL and headers 
    */
    interface RequestUrlAndHeaderInfo {
        /** Request URL */
        url: string;
        /** Request headers */
        headers?: {
            [name: string]: string;
        };
    }
}



////////////////////////////////////////////////////////////////
////////////////// End OfficeExtension runtime /////////////////
////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
//////////////// Begin Excel APIs (latest = 1.3) ///////////////
////////////////////////////////////////////////////////////////


declare module Excel {
    interface ThreeArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowSideArrow: Icon;
        greenUpArrow: Icon;
    }
    interface ThreeArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        graySideArrow: Icon;
        grayUpArrow: Icon;
    }
    interface ThreeFlagsSet {
        [index: number]: Icon;
        redFlag: Icon;
        yellowFlag: Icon;
        greenFlag: Icon;
    }
    interface ThreeTrafficLights1Set {
        [index: number]: Icon;
        redCircleWithBorder: Icon;
        yellowCircle: Icon;
        greenCircle: Icon;
    }
    interface ThreeTrafficLights2Set {
        [index: number]: Icon;
        redTrafficLight: Icon;
        yellowTrafficLight: Icon;
        greenTrafficLight: Icon;
    }
    interface ThreeSignsSet {
        [index: number]: Icon;
        redDiamond: Icon;
        yellowTriangle: Icon;
        greenCircle: Icon;
    }
    interface ThreeSymbolsSet {
        [index: number]: Icon;
        redCrossSymbol: Icon;
        yellowExclamationSymbol: Icon;
        greenCheckSymbol: Icon;
    }
    interface ThreeSymbols2Set {
        [index: number]: Icon;
        redCross: Icon;
        yellowExclamation: Icon;
        greenCheck: Icon;
    }
    interface FourArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowDownInclineArrow: Icon;
        yellowUpInclineArrow: Icon;
        greenUpArrow: Icon;
    }
    interface FourArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        grayDownInclineArrow: Icon;
        grayUpInclineArrow: Icon;
        grayUpArrow: Icon;
    }
    interface FourRedToBlackSet {
        [index: number]: Icon;
        blackCircle: Icon;
        grayCircle: Icon;
        pinkCircle: Icon;
        redCircle: Icon;
    }
    interface FourRatingSet {
        [index: number]: Icon;
        oneBar: Icon;
        twoBars: Icon;
        threeBars: Icon;
        fourBars: Icon;
    }
    interface FourTrafficLightsSet {
        [index: number]: Icon;
        blackCircleWithBorder: Icon;
        redCircleWithBorder: Icon;
        yellowCircle: Icon;
        greenCircle: Icon;
    }
    interface FiveArrowsSet {
        [index: number]: Icon;
        redDownArrow: Icon;
        yellowDownInclineArrow: Icon;
        yellowSideArrow: Icon;
        yellowUpInclineArrow: Icon;
        greenUpArrow: Icon;
    }
    interface FiveArrowsGraySet {
        [index: number]: Icon;
        grayDownArrow: Icon;
        grayDownInclineArrow: Icon;
        graySideArrow: Icon;
        grayUpInclineArrow: Icon;
        grayUpArrow: Icon;
    }
    interface FiveRatingSet {
        [index: number]: Icon;
        noBars: Icon;
        oneBar: Icon;
        twoBars: Icon;
        threeBars: Icon;
        fourBars: Icon;
    }
    interface FiveQuartersSet {
        [index: number]: Icon;
        whiteCircleAllWhiteQuarters: Icon;
        circleWithThreeWhiteQuarters: Icon;
        circleWithTwoWhiteQuarters: Icon;
        circleWithOneWhiteQuarter: Icon;
        blackCircle: Icon;
    }
    interface ThreeStarsSet {
        [index: number]: Icon;
        silverStar: Icon;
        halfGoldStar: Icon;
        goldStar: Icon;
    }
    interface ThreeTrianglesSet {
        [index: number]: Icon;
        redDownTriangle: Icon;
        yellowDash: Icon;
        greenUpTriangle: Icon;
    }
    interface FiveBoxesSet {
        [index: number]: Icon;
        noFilledBoxes: Icon;
        oneFilledBox: Icon;
        twoFilledBoxes: Icon;
        threeFilledBoxes: Icon;
        fourFilledBoxes: Icon;
    }
    interface IconCollections {
        threeArrows: ThreeArrowsSet;
        threeArrowsGray: ThreeArrowsGraySet;
        threeFlags: ThreeFlagsSet;
        threeTrafficLights1: ThreeTrafficLights1Set;
        threeTrafficLights2: ThreeTrafficLights2Set;
        threeSigns: ThreeSignsSet;
        threeSymbols: ThreeSymbolsSet;
        threeSymbols2: ThreeSymbols2Set;
        fourArrows: FourArrowsSet;
        fourArrowsGray: FourArrowsGraySet;
        fourRedToBlack: FourRedToBlackSet;
        fourRating: FourRatingSet;
        fourTrafficLights: FourTrafficLightsSet;
        fiveArrows: FiveArrowsSet;
        fiveArrowsGray: FiveArrowsGraySet;
        fiveRating: FiveRatingSet;
        fiveQuarters: FiveQuartersSet;
        threeStars: ThreeStarsSet;
        threeTriangles: ThreeTrianglesSet;
        fiveBoxes: FiveBoxesSet;
    }
    var icons: IconCollections;
    /**
     *
     * Provides information about the binding that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface BindingSelectionChangedEventArgs {
        /**
         *
         * Gets the Binding object that represents the binding that raised the SelectionChanged event.
         *
         * [Api set: ExcelApi 1.2]
         */
        binding: Excel.Binding;
        /**
         *
         * Gets the number of columns selected.
         *
         * [Api set: ExcelApi 1.2]
         */
        columnCount: number;
        /**
         *
         * Gets the number of rows selected.
         *
         * [Api set: ExcelApi 1.2]
         */
        rowCount: number;
        /**
         *
         * Gets the index of the first column of the selection (zero-based).
         *
         * [Api set: ExcelApi 1.2]
         */
        startColumn: number;
        /**
         *
         * Gets the index of the first row of the selection (zero-based).
         *
         * [Api set: ExcelApi 1.2]
         */
        startRow: number;
    }
    /**
     *
     * Provides information about the binding that raised the DataChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface BindingDataChangedEventArgs {
        /**
         *
         * Gets the Binding object that represents the binding that raised the DataChanged event.
         *
         * [Api set: ExcelApi 1.2]
         */
        binding: Excel.Binding;
    }
    /**
     *
     * Provides information about the document that raised the SelectionChanged event.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface SelectionChangedEventArgs {
        /**
         *
         * Gets the workbook object that raised the SelectionChanged event.
         *
         * [Api set: ExcelApi 1.2]
         */
        workbook: Excel.Workbook;
    }
    /**
     *
     * Represents the Excel application that manages the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Application extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        calculationMode: string;
        /**
         *
         * Recalculate all currently opened workbooks in Excel.
         *
         * @param calculationType Specifies the calculation type to use. See Excel.CalculationType for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        calculate(calculationType: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Application;
        toJSON(): {
            "calculationMode": string;
        };
    }
    /**
     *
     * Workbook is the top level object which contains related workbook objects such as worksheets, tables, ranges, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Workbook extends OfficeExtension.ClientObject {
        /**
         *
         * Represents Excel application instance that contains this workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        application: Excel.Application;
        /**
         *
         * Represents a collection of bindings that are part of the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        bindings: Excel.BindingCollection;
        /**
         *
         * Represents Excel application instance that contains this workbook. Read-only.
         *
         * [Api set: ExcelApi 1.2]
         */
        functions: Excel.Functions;
        /**
         *
         * Represents a collection of workbook scoped named items (named ranges and constants). Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        names: Excel.NamedItemCollection;
        /**
         *
         * Represents a collection of PivotTables associated with the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        pivotTables: Excel.PivotTableCollection;
        /**
         *
         * Represents a collection of tables associated with the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        tables: Excel.TableCollection;
        /**
         *
         * Represents a collection of worksheets associated with the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        worksheets: Excel.WorksheetCollection;
        /**
         *
         * Gets the currently selected range from the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        getSelectedRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Workbook;
        /**
         *
         * Occurs when the selection in the document is changed.
         *
         * [Api set: ExcelApi 1.2]
         */
        onSelectionChanged: OfficeExtension.EventHandlers<Excel.SelectionChangedEventArgs>;
        toJSON(): {};
    }
    /**
     *
     * An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Worksheet extends OfficeExtension.ClientObject {
        /**
         *
         * Returns collection of charts that are part of the worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        charts: Excel.ChartCollection;
        /**
         *
         * Collection of PivotTables that are part of the worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        pivotTables: Excel.PivotTableCollection;
        /**
         *
         * Returns sheet protection object for a worksheet.
         *
         * [Api set: ExcelApi 1.2]
         */
        protection: Excel.WorksheetProtection;
        /**
         *
         * Collection of tables that are part of the worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        tables: Excel.TableCollection;
        /**
         *
         * Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        id: string;
        /**
         *
         * The display name of the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * The zero-based position of the worksheet within the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: number;
        /**
         *
         * The Visibility of the worksheet.
         *
         * [Api set: ExcelApi 1.1 for reading visibility; 1.2 for setting it.]
         */
        visibility: string;
        /**
         *
         * Activate the worksheet in the Excel UI.
         *
         * [Api set: ExcelApi 1.1]
         */
        activate(): void;
        /**
         *
         * Deletes the worksheet from the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid.
         *
         * @param row The row number of the cell to be retrieved. Zero-indexed.
         * @param column the column number of the cell to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets the range object specified by the address or name.
         *
         * @param address The address or the name of the range. If not specified, the entire worksheet range is returned.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(address?: string): Excel.Range;
        /**
         *
         * The used range is the smallest range that encompasses any cells that have a value or formatting assigned to them. If the worksheet is blank, this function will return the top left cell.
         *
         * @param valuesOnly Considers only cells with values as used cells (ignores formatting). [Api set: ExcelApi 1.2]
         *
         * [Api set: ExcelApi 1.1]
         */
        getUsedRange(valuesOnly?: boolean): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Worksheet;
        toJSON(): {
            "id": string;
            "name": string;
            "position": number;
            "protection": WorksheetProtection;
            "visibility": string;
        };
    }
    /**
     *
     * Represents a collection of worksheet objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    class WorksheetCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Worksheet>;
        /**
         *
         * Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call ".activate() on it.
         *
         * @param name The name of the worksheet to be added. If specified, name should be unqiue. If not specified, Excel determines the name of the new worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        add(name?: string): Excel.Worksheet;
        /**
         *
         * Gets the currently active worksheet in the workbook.
         *
         * [Api set: ExcelApi 1.1]
         */
        getActiveWorksheet(): Excel.Worksheet;
        /**
         *
         * Gets a worksheet object using its Name or ID.
         *
         * @param key The Name or ID of the worksheet.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(key: string): Excel.Worksheet;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.WorksheetCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents the protection of a sheet object.
     *
     * [Api set: ExcelApi 1.2]
     */
    class WorksheetProtection extends OfficeExtension.ClientObject {
        /**
         *
         * Sheet protection options. Read-Only.
         *
         * [Api set: ExcelApi 1.2]
         */
        options: Excel.WorksheetProtectionOptions;
        /**
         *
         * Indicates if the worksheet is protected. Read-Only.
         *
         * [Api set: ExcelApi 1.2]
         */
        protected: boolean;
        /**
         *
         * Protects a worksheet. Fails if the worksheet has been protected.
         *
         * @param options sheet protection options.
         *
         * [Api set: ExcelApi 1.2]
         */
        protect(options?: Excel.WorksheetProtectionOptions): void;
        /**
         *
         * Unprotects a worksheet.
         *
         * [Api set: ExcelApi 1.2]
         */
        unprotect(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.WorksheetProtection;
        toJSON(): {
            "options": WorksheetProtectionOptions;
            "protected": boolean;
        };
    }
    /**
     *
     * Represents the options in sheet protection.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface WorksheetProtectionOptions {
        /**
         *
         * Represents the worksheet protection option of allowing using auto filter feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowAutoFilter?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing deleting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowDeleteColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing deleting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowDeleteRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting cells.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatCells?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing formatting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowFormatRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertColumns?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting hyperlinks.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertHyperlinks?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing inserting rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowInsertRows?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing using PivotTable feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowPivotTables?: boolean;
        /**
         *
         * Represents the worksheet protection option of allowing using sort feature.
         *
         * [Api set: ExcelApi 1.2]
         */
        allowSort?: boolean;
    }
    /**
     *
     * Range represents a set of one or more contiguous cells such as a cell, a row, a column, block of cells, etc.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Range extends OfficeExtension.ClientObject {
        /**
         *
         * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.RangeFormat;
        /**
         *
         * Represents the range sort of the current range.
         *
         * [Api set: ExcelApi 1.2]
         */
        sort: Excel.RangeSort;
        /**
         *
         * The worksheet containing the current range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        worksheet: Excel.Worksheet;
        /**
         *
         * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        address: string;
        /**
         *
         * Represents range reference for the specified range in the language of the user. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        addressLocal: string;
        /**
         *
         * Number of cells in the range. This API will return -1 if the cell count exceeds 2^31-1 (2,147,483,647). Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        cellCount: number;
        /**
         *
         * Represents the total number of columns in the range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        columnCount: number;
        /**
         *
         * Represents if all columns of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        columnHidden: boolean;
        /**
         *
         * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        columnIndex: number;
        /**
         *
         * Represents the formula in A1-style notation.
         *
         * [Api set: ExcelApi 1.1]
         */
        formulas: Array<Array<any>>;
        /**
         *
         * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
         *
         * [Api set: ExcelApi 1.1]
         */
        formulasLocal: Array<Array<any>>;
        /**
         *
         * Represents the formula in R1C1-style notation.
         *
         * [Api set: ExcelApi 1.2]
         */
        formulasR1C1: Array<Array<any>>;
        /**
         *
         * Represents if all cells of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        hidden: boolean;
        /**
         *
         * Represents Excel's number format code for the given cell.
         *
         * [Api set: ExcelApi 1.1]
         */
        numberFormat: Array<Array<any>>;
        /**
         *
         * Returns the total number of rows in the range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        rowCount: number;
        /**
         *
         * Represents if all rows of the current range are hidden.
         *
         * [Api set: ExcelApi 1.2]
         */
        rowHidden: boolean;
        /**
         *
         * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        rowIndex: number;
        /**
         *
         * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        text: Array<Array<any>>;
        /**
         *
         * Represents the type of data of each cell. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        valueTypes: Array<Array<string>>;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: Array<Array<any>>;
        /**
         *
         * Clear range values, format, fill, border, etc.
         *
         * @param applyTo Determines the type of clear action. See Excel.ClearApplyTo for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(applyTo?: string): void;
        /**
         *
         * Deletes the cells associated with the range.
         *
         * @param shift Specifies which way to shift the cells. See Excel.DeleteShiftDirection for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(shift: string): void;
        /**
         *
         * Gets the smallest range object that encompasses the given ranges. For example, the GetBoundingRect of "B2:C5" and "D10:E15" is "B2:E16".
         *
         * @param anotherRange The range object or address or range name.
         *
         * [Api set: ExcelApi 1.1]
         */
        getBoundingRect(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid. The returned cell is located relative to the top left cell of the range.
         *
         * @param row Row number of the cell to be retrieved. Zero-indexed.
         * @param column Column number of the cell to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets a column contained in the range.
         *
         * @param column Column number of the range to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getColumn(column: number): Excel.Range;
        /**
         *
         * Gets a certain number of columns to the right of the current Range object.
         *
         * @param count The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        getColumnsAfter(count?: number): Excel.Range;
        /**
         *
         * Gets a certain number of columns to the left of the current Range object.
         *
         * @param count The number of columns to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        getColumnsBefore(count?: number): Excel.Range;
        /**
         *
         * Gets an object that represents the entire column of the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        getEntireColumn(): Excel.Range;
        /**
         *
         * Gets an object that represents the entire row of the range.
         *
         * [Api set: ExcelApi 1.1]
         */
        getEntireRow(): Excel.Range;
        /**
         *
         * Gets the range object that represents the rectangular intersection of the given ranges.
         *
         * @param anotherRange The range object or range address that will be used to determine the intersection of ranges.
         *
         * [Api set: ExcelApi 1.1]
         */
        getIntersection(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the last cell within the range. For example, the last cell of "B2:D5" is "D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastCell(): Excel.Range;
        /**
         *
         * Gets the last column within the range. For example, the last column of "B2:D5" is "D2:D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastColumn(): Excel.Range;
        /**
         *
         * Gets the last row within the range. For example, the last row of "B2:D5" is "B5:D5".
         *
         * [Api set: ExcelApi 1.1]
         */
        getLastRow(): Excel.Range;
        /**
         *
         * Gets an object which represents a range that's offset from the specified range. The dimension of the returned range will match this range. If the resulting range is forced outside the bounds of the worksheet grid, an exception will be thrown.
         *
         * @param rowOffset The number of rows (positive, negative, or 0) by which the range is to be offset. Positive values are offset downward, and negative values are offset upward.
         * @param columnOffset The number of columns (positive, negative, or 0) by which the range is to be offset. Positive values are offset to the right, and negative values are offset to the left.
         *
         * [Api set: ExcelApi 1.1]
         */
        getOffsetRange(rowOffset: number, columnOffset: number): Excel.Range;
        /**
         *
         * Gets a Range object similar to the current Range object, but with its bottom-right corner expanded (or contracted) by some number of rows and columns.
         *
         * @param deltaRows The number of rows by which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.
         * @param deltaColumns The number of columnsby which to expand the bottom-right corner, relative to the current range. Use a positive number to expand the range, or a negative number to decrease it.
         *
         * [Api set: ExcelApi 1.2]
         */
        getResizedRange(deltaRows: number, deltaColumns: number): Excel.Range;
        /**
         *
         * Gets a row contained in the range.
         *
         * @param row Row number of the range to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRow(row: number): Excel.Range;
        /**
         *
         * Gets a certain number of rows above the current Range object.
         *
         * @param count The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        getRowsAbove(count?: number): Excel.Range;
        /**
         *
         * Gets a certain number of rows below the current Range object.
         *
         * @param count The number of rows to include in the resulting range. In general, use a positive number to create a range outside the current range. You can also use a negative number to create a range within the current range. The default value is 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        getRowsBelow(count?: number): Excel.Range;
        /**
         *
         * Returns the used range of the given range object.
         *
         * @param valuesOnly Considers only cells with values as used cells. [Api set: ExcelApi 1.2]
         *
         * [Api set: ExcelApi 1.1]
         */
        getUsedRange(valuesOnly?: boolean): Excel.Range;
        /**
         *
         * Represents the visible rows of the current range.
         *
         * [Api set: ExcelApi 1.3]
         */
        getVisibleView(): Excel.RangeView;
        /**
         *
         * Inserts a cell or a range of cells into the worksheet in place of this range, and shifts the other cells to make space. Returns a new Range object at the now blank space.
         *
         * @param shift Specifies which way to shift the cells. See Excel.InsertShiftDirection for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        insert(shift: string): Excel.Range;
        /**
         *
         * Merge the range cells into one region in the worksheet.
         *
         * @param across Set true to merge cells in each row of the specified range as separate merged cells. The default value is false.
         *
         * [Api set: ExcelApi 1.2]
         */
        merge(across?: boolean): void;
        /**
         *
         * Selects the specified range in the Excel UI.
         *
         * [Api set: ExcelApi 1.1]
         */
        select(): void;
        /**
         *
         * Unmerge the range cells into separate cells.
         *
         * [Api set: ExcelApi 1.2]
         */
        unmerge(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Range;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Excel.Range;
        /**
         * Release the memory associated with this object, if it has previously been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Excel.Range;
        toJSON(): {
            "address": string;
            "addressLocal": string;
            "cellCount": number;
            "columnCount": number;
            "columnHidden": boolean;
            "columnIndex": number;
            "format": RangeFormat;
            "formulas": any[][];
            "formulasLocal": any[][];
            "formulasR1C1": any[][];
            "hidden": boolean;
            "numberFormat": any[][];
            "rowCount": number;
            "rowHidden": boolean;
            "rowIndex": number;
            "text": any[][];
            "values": any[][];
            "valueTypes": string[][];
        };
    }
    /**
     *
     * Represents a string reference of the form SheetName!A1:B5, or a global or local named range
     *
     * [Api set: ExcelApi 1.2]
     */
    interface RangeReference {
        address: string;
    }
    /**
     *
     * RangeView represents a set of visible cells of the parent range.
     *
     * [Api set: ExcelApi 1.3]
     */
    class RangeView extends OfficeExtension.ClientObject {
        /**
         *
         * Represents a collection of range views associated with the range. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        rows: Excel.RangeViewCollection;
        /**
         *
         * Represents the cell addresses of the RangeView.
         *
         * [Api set: ExcelApi 1.3]
         */
        cellAddresses: Array<Array<any>>;
        /**
         *
         * Returns the number of visible columns. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        columnCount: number;
        /**
         *
         * Represents the formula in A1-style notation.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulas: Array<Array<any>>;
        /**
         *
         * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulasLocal: Array<Array<any>>;
        /**
         *
         * Represents the formula in R1C1-style notation.
         *
         * [Api set: ExcelApi 1.3]
         */
        formulasR1C1: Array<Array<any>>;
        /**
         *
         * Returns a value that represents the index of the RangeView. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        index: number;
        /**
         *
         * Represents Excel's number format code for the given cell.
         *
         * [Api set: ExcelApi 1.3]
         */
        numberFormat: Array<Array<any>>;
        /**
         *
         * Returns the number of visible rows. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        rowCount: number;
        /**
         *
         * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        text: Array<Array<any>>;
        /**
         *
         * Represents the type of data of each cell. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        valueTypes: Array<Array<string>>;
        /**
         *
         * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.3]
         */
        values: Array<Array<any>>;
        /**
         *
         * Gets the parent range associated with the current RangeView.
         *
         * [Api set: ExcelApi 1.3]
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeView;
        toJSON(): {
            "cellAddresses": any[][];
            "columnCount": number;
            "formulas": any[][];
            "formulasLocal": any[][];
            "formulasR1C1": any[][];
            "index": number;
            "numberFormat": any[][];
            "rowCount": number;
            "text": any[][];
            "values": any[][];
            "valueTypes": string[][];
        };
    }
    /**
     *
     * Represents a collection of worksheet objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.3]
     */
    class RangeViewCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.RangeView>;
        /**
         *
         * Gets a RangeView Row via it's index. Zero-Indexed.
         *
         * @param index Index of the visible row.
         *
         * [Api set: ExcelApi 1.3]
         */
        getItemAt(index: number): Excel.RangeView;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeViewCollection;
        toJSON(): {};
    }
    /**
     *
     * Setting represents a key-value pair of a setting persisted to the document.
     *
     * [Api set: ExcelApi 1.3]
     */
    class Setting extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the value stored for this setting.
         *
         * [Api set: ExcelApi 1.3]
         */
        value: any;
        /**
         *
         * Returns the key that represents the id of the Setting. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        key: string;
        /**
         *
         * Deletes the setting.
         *
         * [Api set: ExcelApi 1.3]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Setting;
        toJSON(): {
            "key": string;
        };
    }
    /**
     *
     * A collection of all the nameditem objects that are part of the workbook or worksheet, depending on how it was reached.
     *
     * [Api set: ExcelApi 1.1]
     */
    class NamedItemCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.NamedItem>;
        /**
         *
         * Gets a nameditem object using its name
         *
         * @param name nameditem name.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(name: string): Excel.NamedItem;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.NamedItemCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a defined name for a range of cells or value. Names can be primitive named objects (as seen in the type below), range object, reference to a range. This object can be used to obtain range object associated with names.
     *
     * [Api set: ExcelApi 1.1]
     */
    class NamedItem extends OfficeExtension.ClientObject {
        /**
         *
         * The name of the object. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Indicates the type of the value returned by the name's formula. See Excel.NamedItemType for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        type: string;
        /**
         *
         * Represents the value computed by the name's formula. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        value: any;
        /**
         *
         * Specifies whether the object is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         *
         * Returns the range object that is associated with the name. Throws an exception if the named item's type is not a range.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the range object that is associated with the name. Returns a null object if the named item's type is not a range
         *
         * [Api set: ExcelApi 1.1]
         */
        getRangeOrNullObject(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.NamedItem;
        toJSON(): {
            "name": string;
            "type": string;
            "value": any;
            "visible": boolean;
        };
    }
    /**
     *
     * Represents an Office.js binding that is defined in the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Binding extends OfficeExtension.ClientObject {
        /**
         *
         * Represents binding identifier. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        id: string;
        /**
         *
         * Returns the type of the binding. See Excel.BindingType for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        type: string;
        /**
         *
         * Deletes the binding.
         *
         * [Api set: ExcelApi 1.3]
         */
        delete(): void;
        /**
         *
         * Returns the range represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the table represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTable(): Excel.Table;
        /**
         *
         * Returns the text represented by the binding. Will throw an error if binding is not of the correct type.
         *
         * [Api set: ExcelApi 1.1]
         */
        getText(): OfficeExtension.ClientResult<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Binding;
        /**
         *
         * Occurs when data or formatting within the binding is changed.
         *
         * [Api set: ExcelApi 1.2]
         */
        onDataChanged: OfficeExtension.EventHandlers<Excel.BindingDataChangedEventArgs>;
        /**
         *
         * Occurs when the selection is changed within the binding.
         *
         * [Api set: ExcelApi 1.2]
         */
        onSelectionChanged: OfficeExtension.EventHandlers<Excel.BindingSelectionChangedEventArgs>;
        toJSON(): {
            "id": string;
            "type": string;
        };
    }
    /**
     *
     * Represents the collection of all the binding objects that are part of the workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    class BindingCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Binding>;
        /**
         *
         * Returns the number of bindings in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Add a new binding to a particular Range.
         *
         * @param range Range to bind the binding to. May be an Excel Range object, or a string. If string, must contain the full address, including the sheet name
         * @param bindingType Type of binding. See Excel.BindingType.
         * @param id Name of binding.
         *
         * [Api set: ExcelApi 1.3]
         */
        add(range: Excel.Range | string, bindingType: string, id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on a named item in the workbook.
         *
         * @param name Name from which to create binding.
         * @param bindingType Type of binding. See Excel.BindingType.
         * @param id Name of binding.
         *
         * [Api set: ExcelApi 1.3]
         */
        addFromNamedItem(name: string, bindingType: string, id: string): Excel.Binding;
        /**
         *
         * Add a new binding based on the current selection.
         *
         * @param bindingType Type of binding. See Excel.BindingType.
         * @param id Name of binding.
         *
         * [Api set: ExcelApi 1.3]
         */
        addFromSelection(bindingType: string, id: string): Excel.Binding;
        /**
         *
         * Gets a binding object by ID.
         *
         * @param id Id of the binding object to be retrieved.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(id: string): Excel.Binding;
        /**
         *
         * Gets a binding object based on its position in the items array.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.Binding;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.BindingCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a collection of all the tables that are part of the workbook or worksheet, depending on how it was reached.
     *
     * [Api set: ExcelApi 1.1]
     */
    class TableCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Table>;
        /**
         *
         * Returns the number of tables in the workbook. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Create a new table. The range object or source address determines the worksheet under which the table will be added. If the table cannot be added (e.g., because the address is invalid, or the table would overlap with another table), an error will be thrown.
         *
         * @param address A Range object, or a string address or name of the range representing the data source. If the address does not contain a sheet name, the currently-active sheet is used. [Api set: ExcelApi 1.1 for string parameter; 1.3 for accepting a Range object as well]
         * @param hasHeaders Boolean value that indicates whether the data being imported has column labels. If the source does not contain headers (i.e,. when this property set to false), Excel will automatically generate header shifting the data down by one row.
         *
         * [Api set: ExcelApi 1.1]
         */
        add(address: Excel.Range | string, hasHeaders: boolean): Excel.Table;
        /**
         *
         * Gets a table by Name or ID.
         *
         * @param key Name or ID of the table to be retrieved.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(key: number | string): Excel.Table;
        /**
         *
         * Gets a table based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents an Excel table.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Table extends OfficeExtension.ClientObject {
        /**
         *
         * Represents a collection of all the columns in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        columns: Excel.TableColumnCollection;
        /**
         *
         * Represents a collection of all the rows in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        rows: Excel.TableRowCollection;
        /**
         *
         * Represents the sorting for the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        sort: Excel.TableSort;
        /**
         *
         * The worksheet containing the current table. Read-only.
         *
         * [Api set: ExcelApi 1.2]
         */
        worksheet: Excel.Worksheet;
        /**
         *
         * Indicates whether the first column contains special formatting.
         *
         * [Api set: ExcelApi 1.3]
         */
        highlightFirstColumn: boolean;
        /**
         *
         * Indicates whether the last column contains special formatting.
         *
         * [Api set: ExcelApi 1.3]
         */
        highlightLastColumn: boolean;
        /**
         *
         * Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        id: number;
        /**
         *
         * Name of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to make reading the table easier.
         *
         * [Api set: ExcelApi 1.3]
         */
        showBandedColumns: boolean;
        /**
         *
         * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make reading the table easier.
         *
         * [Api set: ExcelApi 1.3]
         */
        showBandedRows: boolean;
        /**
         *
         * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the table contains a header row.
         *
         * [Api set: ExcelApi 1.3]
         */
        showFilterButton: boolean;
        /**
         *
         * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
         *
         * [Api set: ExcelApi 1.1]
         */
        showHeaders: boolean;
        /**
         *
         * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
         *
         * [Api set: ExcelApi 1.1]
         */
        showTotals: boolean;
        /**
         *
         * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
         *
         * [Api set: ExcelApi 1.1]
         */
        style: string;
        /**
         *
         * Clears all the filters currently applied on the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        clearFilters(): void;
        /**
         *
         * Converts the table into a normal range of cells. All data is preserved.
         *
         * [Api set: ExcelApi 1.2]
         */
        convertToRange(): Excel.Range;
        /**
         *
         * Deletes the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with header row of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with totals row of the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTotalRowRange(): Excel.Range;
        /**
         *
         * Reapplies all the filters currently on the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        reapplyFilters(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Table;
        toJSON(): {
            "highlightFirstColumn": boolean;
            "highlightLastColumn": boolean;
            "id": number;
            "name": string;
            "showBandedColumns": boolean;
            "showBandedRows": boolean;
            "showFilterButton": boolean;
            "showHeaders": boolean;
            "showTotals": boolean;
            "style": string;
        };
    }
    /**
     *
     * Represents a collection of all the columns that are part of the table.
     *
     * [Api set: ExcelApi 1.1]
     */
    class TableColumnCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.TableColumn>;
        /**
         *
         * Returns the number of columns in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Adds a new column to the table.
         *
         * @param index Specifies the relative position of the new column. If null or -1, the addition happens at the end. Columns with a higher index will be shifted to the side. Zero-indexed.
         * @param values A 2-dimensional array of unformatted values of the table column.
         * @param name Specifies the name of the new column. If null, the default name will be used.
         *
         * [Api set: ExcelApi 1.1 requires an index smaller than the total column count; 1.4 allows index to be optional (null or -1) and will append a column at the end; 1.4 allows name parameter at creation time.]
         */
        add(index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number, name?: string): Excel.TableColumn;
        /**
         *
         * Gets a column object by Name or ID.
         *
         * @param key Column Name or ID.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(key: number | string): Excel.TableColumn;
        /**
         *
         * Gets a column based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.TableColumn;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableColumnCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a column in a table.
     *
     * [Api set: ExcelApi 1.1]
     */
    class TableColumn extends OfficeExtension.ClientObject {
        /**
         *
         * Retrieve the filter applied to the column.
         *
         * [Api set: ExcelApi 1.2]
         */
        filter: Excel.Filter;
        /**
         *
         * Returns a unique key that identifies the column within the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        id: number;
        /**
         *
         * Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        index: number;
        /**
         *
         * Represents the name of the table column.
         *
         * [Api set: ExcelApi 1.1 for getting the name; 1.4 for setting it.]
         */
        name: string;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: Array<Array<any>>;
        /**
         *
         * Deletes the column from the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the header row of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the totals row of the column.
         *
         * [Api set: ExcelApi 1.1]
         */
        getTotalRowRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableColumn;
        toJSON(): {
            "id": number;
            "index": number;
            "name": string;
            "values": any[][];
        };
    }
    /**
     *
     * Represents a collection of all the rows that are part of the table.
     *
     * [Api set: ExcelApi 1.1]
     */
    class TableRowCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.TableRow>;
        /**
         *
         * Returns the number of rows in the table. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Adds one or more rows to the table. The return object will be the top of the newly added row(s).
         *
         * @param index Specifies the relative position of the new row. If null or -1, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed.
         * @param values A 2-dimensional array of unformatted values of the table row.
         *
         * [Api set: ExcelApi 1.1 for adding a single row; 1.4 allows adding of multiple rows.]
         */
        add(index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number): Excel.TableRow;
        /**
         *
         * Gets a row based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.TableRow;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableRowCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a row in a table.
     *
     * [Api set: ExcelApi 1.1]
     */
    class TableRow extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        index: number;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         *
         * [Api set: ExcelApi 1.1]
         */
        values: Array<Array<any>>;
        /**
         *
         * Deletes the row from the table.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Returns the range object associated with the entire row.
         *
         * [Api set: ExcelApi 1.1]
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableRow;
        toJSON(): {
            "index": number;
            "values": any[][];
        };
    }
    /**
     *
     * A format object encapsulating the range's font, fill, borders, alignment, and other properties.
     *
     * [Api set: ExcelApi 1.1]
     */
    class RangeFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Collection of border objects that apply to the overall range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        borders: Excel.RangeBorderCollection;
        /**
         *
         * Returns the fill object defined on the overall range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.RangeFill;
        /**
         *
         * Returns the font object defined on the overall range. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.RangeFont;
        /**
         *
         * Returns the format protection object for a range.
         *
         * [Api set: ExcelApi 1.2]
         */
        protection: Excel.FormatProtection;
        /**
         *
         * Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        columnWidth: number;
        /**
         *
         * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        horizontalAlignment: string;
        /**
         *
         * Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        rowHeight: number;
        /**
         *
         * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        verticalAlignment: string;
        /**
         *
         * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
         *
         * [Api set: ExcelApi 1.1]
         */
        wrapText: boolean;
        /**
         *
         * Changes the width of the columns of the current range to achieve the best fit, based on the current data in the columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        autofitColumns(): void;
        /**
         *
         * Changes the height of the rows of the current range to achieve the best fit, based on the current data in the columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        autofitRows(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFormat;
        toJSON(): {
            "columnWidth": number;
            "fill": RangeFill;
            "font": RangeFont;
            "horizontalAlignment": string;
            "protection": FormatProtection;
            "rowHeight": number;
            "verticalAlignment": string;
            "wrapText": boolean;
        };
    }
    /**
     *
     * Represents the format protection of a range object.
     *
     * [Api set: ExcelApi 1.2]
     */
    class FormatProtection extends OfficeExtension.ClientObject {
        /**
         *
         * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't have uniform formula hidden setting.
         *
         * [Api set: ExcelApi 1.2]
         */
        formulaHidden: boolean;
        /**
         *
         * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform lock setting.
         *
         * [Api set: ExcelApi 1.2]
         */
        locked: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.FormatProtection;
        toJSON(): {
            "formulaHidden": boolean;
            "locked": boolean;
        };
    }
    /**
     *
     * Represents the background of a range object.
     *
     * [Api set: ExcelApi 1.1]
     */
    class RangeFill extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Resets the range background.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFill;
        toJSON(): {
            "color": string;
        };
    }
    /**
     *
     * Represents the border of an object.
     *
     * [Api set: ExcelApi 1.1]
     */
    class RangeBorder extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        sideIndex: string;
        /**
         *
         * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        style: string;
        /**
         *
         * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        weight: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeBorder;
        toJSON(): {
            "color": string;
            "sideIndex": string;
            "style": string;
            "weight": string;
        };
    }
    /**
     *
     * Represents the border objects that make up range border.
     *
     * [Api set: ExcelApi 1.1]
     */
    class RangeBorderCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.RangeBorder>;
        /**
         *
         * Number of border objects in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a border object using its name
         *
         * @param index Index value of the border object to be retrieved. See Excel.BorderIndex for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(index: string): Excel.RangeBorder;
        /**
         *
         * Gets a border object using its index
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.RangeBorder;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeBorderCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for an object.
     *
     * [Api set: ExcelApi 1.1]
     */
    class RangeFont extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the bold status of font.
         *
         * [Api set: ExcelApi 1.1]
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         *
         * [Api set: ExcelApi 1.1]
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Font size.
         *
         * [Api set: ExcelApi 1.1]
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFont;
        toJSON(): {
            "bold": boolean;
            "color": string;
            "italic": boolean;
            "name": string;
            "size": number;
            "underline": string;
        };
    }
    /**
     *
     * A collection of all the chart objects on a worksheet.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Chart>;
        /**
         *
         * Returns the number of charts in the worksheet. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Creates a new chart.
         *
         * @param type Represents the type of a chart. See Excel.ChartType for details.
         * @param sourceData The Range object corresponding to the source data.
         * @param seriesBy Specifies the way columns or rows are used as data series on the chart. See Excel.ChartSeriesBy for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        add(type: string, sourceData: Excel.Range, seriesBy?: string): Excel.Chart;
        /**
         *
         * Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned.
         *
         * @param name Name of the chart to be retrieved.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItem(name: string): Excel.Chart;
        /**
         *
         * Gets a chart based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.Chart;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a chart object in a workbook.
     *
     * [Api set: ExcelApi 1.1]
     */
    class Chart extends OfficeExtension.ClientObject {
        /**
         *
         * Represents chart axes. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        axes: Excel.ChartAxes;
        /**
         *
         * Represents the datalabels on the chart. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        dataLabels: Excel.ChartDataLabels;
        /**
         *
         * Encapsulates the format properties for the chart area. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartAreaFormat;
        /**
         *
         * Represents the legend for the chart. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        legend: Excel.ChartLegend;
        /**
         *
         * Represents either a single series or collection of series in the chart. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        series: Excel.ChartSeriesCollection;
        /**
         *
         * Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        title: Excel.ChartTitle;
        /**
         *
         * The worksheet containing the current chart. Read-only.
         *
         * [Api set: ExcelApi 1.2]
         */
        worksheet: Excel.Worksheet;
        /**
         *
         * Represents the height, in points, of the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        height: number;
        /**
         *
         * The distance, in points, from the left side of the chart to the worksheet origin.
         *
         * [Api set: ExcelApi 1.1]
         */
        left: number;
        /**
         *
         * Represents the name of a chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
         *
         * [Api set: ExcelApi 1.1]
         */
        top: number;
        /**
         *
         * Represents the width, in points, of the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        width: number;
        /**
         *
         * Deletes the chart object.
         *
         * [Api set: ExcelApi 1.1]
         */
        delete(): void;
        /**
         *
         * Renders the chart as a base64-encoded image by scaling the chart to fit the specified dimensions.
            The aspect ratio is preserved as part of the resizing.
         *
         * @param height (Optional) The desired height of the resulting image.
         * @param width (Optional) The desired width of the resulting image.
         * @param fittingMode (Optional) The method used to scale the chart to the specified to the specified dimensions (if both height and width are set)."
         *
         * [Api set: ExcelApi 1.2]
         */
        getImage(width?: number, height?: number, fittingMode?: string): OfficeExtension.ClientResult<string>;
        /**
         *
         * Resets the source data for the chart.
         *
         * @param sourceData The Range object corresponding to the source data.
         * @param seriesBy Specifies the way columns or rows are used as data series on the chart. Can be one of the following: Auto (default), Rows, Columns. See Excel.ChartSeriesBy for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        setData(sourceData: Excel.Range, seriesBy?: string): void;
        /**
         *
         * Positions the chart relative to cells on the worksheet.
         *
         * @param startCell The start cell. This is where the chart will be moved to. The start cell is the top-left or top-right cell, depending on the user's right-to-left display settings.
         * @param endCell (Optional) The end cell. If specified, the chart's width and height will be set to fully cover up this cell/range.
         *
         * [Api set: ExcelApi 1.1]
         */
        setPosition(startCell: Excel.Range | string, endCell?: Excel.Range | string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Chart;
        toJSON(): {
            "axes": ChartAxes;
            "dataLabels": ChartDataLabels;
            "format": ChartAreaFormat;
            "height": number;
            "left": number;
            "legend": ChartLegend;
            "name": string;
            "title": ChartTitle;
            "top": number;
            "width": number;
        };
    }
    /**
     *
     * Encapsulates the format properties for the overall chart area.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAreaFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of an object, which includes background formatting information. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAreaFormat;
        toJSON(): {
            "fill": ChartFill;
            "font": ChartFont;
        };
    }
    /**
     *
     * Represents a collection of chart series.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartSeriesCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.ChartSeries>;
        /**
         *
         * Returns the number of series in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Retrieves a series based on its position in the collection
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.ChartSeries;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeriesCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a series in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartSeries extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartSeriesFormat;
        /**
         *
         * Represents a collection of all points in the series. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        points: Excel.ChartPointsCollection;
        /**
         *
         * Represents the name of a series in a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeries;
        toJSON(): {
            "format": ChartSeriesFormat;
            "name": string;
        };
    }
    /**
     *
     * encapsulates the format properties for the chart series
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartSeriesFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of a chart series, which includes background formating information. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents line formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeriesFormat;
        toJSON(): {
            "fill": ChartFill;
            "line": ChartLineFormat;
        };
    }
    /**
     *
     * A collection of all the chart points within a series inside a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartPointsCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.ChartPoint>;
        /**
         *
         * Returns the number of chart points in the collection. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        count: number;
        /**
         *
         * Retrieve a point based on its position within the series.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: ExcelApi 1.1]
         */
        getItemAt(index: number): Excel.ChartPoint;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPointsCollection;
        toJSON(): {
            "count": number;
        };
    }
    /**
     *
     * Represents a point of a series in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartPoint extends OfficeExtension.ClientObject {
        /**
         *
         * Encapsulates the format properties chart point. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartPointFormat;
        /**
         *
         * Returns the value of a chart point. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        value: any;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPoint;
        toJSON(): {
            "format": ChartPointFormat;
            "value": any;
        };
    }
    /**
     *
     * Represents formatting object for chart points.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartPointFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of a chart, which includes background formating information. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPointFormat;
        toJSON(): {
            "fill": ChartFill;
        };
    }
    /**
     *
     * Represents the chart axes.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAxes extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the category axis in a chart. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        categoryAxis: Excel.ChartAxis;
        /**
         *
         * Represents the series axis of a 3-dimensional chart. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        seriesAxis: Excel.ChartAxis;
        /**
         *
         * Represents the value axis in an axis. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        valueAxis: Excel.ChartAxis;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxes;
        toJSON(): {
            "categoryAxis": ChartAxis;
            "seriesAxis": ChartAxis;
            "valueAxis": ChartAxis;
        };
    }
    /**
     *
     * Represents a single axis in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAxis extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart object, which includes line and font formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartAxisFormat;
        /**
         *
         * Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        majorGridlines: Excel.ChartGridlines;
        /**
         *
         * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        minorGridlines: Excel.ChartGridlines;
        /**
         *
         * Represents the axis title. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        title: Excel.ChartAxisTitle;
        /**
         *
         * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        majorUnit: any;
        /**
         *
         * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        maximum: any;
        /**
         *
         * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        minimum: any;
        /**
         *
         * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
         *
         * [Api set: ExcelApi 1.1]
         */
        minorUnit: any;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxis;
        toJSON(): {
            "format": ChartAxisFormat;
            "majorGridlines": ChartGridlines;
            "majorUnit": any;
            "maximum": any;
            "minimum": any;
            "minorGridlines": ChartGridlines;
            "minorUnit": any;
            "title": ChartAxisTitle;
        };
    }
    /**
     *
     * Encapsulates the format properties for the chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAxisFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         *
         * Represents chart line formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisFormat;
        toJSON(): {
            "font": ChartFont;
            "line": ChartLineFormat;
        };
    }
    /**
     *
     * Represents the title of a chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAxisTitle extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of chart axis title. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartAxisTitleFormat;
        /**
         *
         * Represents the axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        text: string;
        /**
         *
         * A boolean that specifies the visibility of an axis title.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisTitle;
        toJSON(): {
            "format": ChartAxisTitleFormat;
            "text": string;
            "visible": boolean;
        };
    }
    /**
     *
     * Represents the chart axis title formatting.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartAxisTitleFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisTitleFormat;
        toJSON(): {
            "font": ChartFont;
        };
    }
    /**
     *
     * Represents a collection of all the data labels on a chart point.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartDataLabels extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the format of chart data labels, which includes fill and font formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartDataLabelFormat;
        /**
         *
         * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: string;
        /**
         *
         * String representing the separator used for the data labels on a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        separator: string;
        /**
         *
         * Boolean value representing if the data label bubble size is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showBubbleSize: boolean;
        /**
         *
         * Boolean value representing if the data label category name is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showCategoryName: boolean;
        /**
         *
         * Boolean value representing if the data label legend key is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showLegendKey: boolean;
        /**
         *
         * Boolean value representing if the data label percentage is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showPercentage: boolean;
        /**
         *
         * Boolean value representing if the data label series name is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showSeriesName: boolean;
        /**
         *
         * Boolean value representing if the data label value is visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        showValue: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartDataLabels;
        toJSON(): {
            "format": ChartDataLabelFormat;
            "position": string;
            "separator": string;
            "showBubbleSize": boolean;
            "showCategoryName": boolean;
            "showLegendKey": boolean;
            "showPercentage": boolean;
            "showSeriesName": boolean;
            "showValue": boolean;
        };
    }
    /**
     *
     * Encapsulates the format properties for the chart data labels.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartDataLabelFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of the current chart data label. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartDataLabelFormat;
        toJSON(): {
            "fill": ChartFill;
            "font": ChartFont;
        };
    }
    /**
     *
     * Represents major or minor gridlines on a chart axis.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartGridlines extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of chart gridlines. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartGridlinesFormat;
        /**
         *
         * Boolean value representing if the axis gridlines are visible or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartGridlines;
        toJSON(): {
            "format": ChartGridlinesFormat;
            "visible": boolean;
        };
    }
    /**
     *
     * Encapsulates the format properties for chart gridlines.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartGridlinesFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents chart line formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartGridlinesFormat;
        toJSON(): {
            "line": ChartLineFormat;
        };
    }
    /**
     *
     * Represents the legend in a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartLegend extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartLegendFormat;
        /**
         *
         * Boolean value for whether the chart legend should overlap with the main body of the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        overlay: boolean;
        /**
         *
         * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        position: string;
        /**
         *
         * A boolean value the represents the visibility of a ChartLegend object.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLegend;
        toJSON(): {
            "format": ChartLegendFormat;
            "overlay": boolean;
            "position": string;
            "visible": boolean;
        };
    }
    /**
     *
     * Encapsulates the format properties of a chart legend.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartLegendFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of an object, which includes background formating information. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLegendFormat;
        toJSON(): {
            "fill": ChartFill;
            "font": ChartFont;
        };
    }
    /**
     *
     * Represents a chart title object of a chart.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartTitle extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        format: Excel.ChartTitleFormat;
        /**
         *
         * Boolean value representing if the chart title will overlay the chart or not.
         *
         * [Api set: ExcelApi 1.1]
         */
        overlay: boolean;
        /**
         *
         * Represents the title text of a chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        text: string;
        /**
         *
         * A boolean value the represents the visibility of a chart title object.
         *
         * [Api set: ExcelApi 1.1]
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartTitle;
        toJSON(): {
            "format": ChartTitleFormat;
            "overlay": boolean;
            "text": string;
            "visible": boolean;
        };
    }
    /**
     *
     * Provides access to the office art formatting for chart title.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartTitleFormat extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the fill format of an object, which includes background formating information. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for an object. Read-only.
         *
         * [Api set: ExcelApi 1.1]
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartTitleFormat;
        toJSON(): {
            "fill": ChartFill;
            "font": ChartFont;
        };
    }
    /**
     *
     * Represents the fill formatting for a chart element.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartFill extends OfficeExtension.ClientObject {
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFill;
        /**
         *
         * Clear the fill color of a chart element.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         *
         * Sets the fill formatting of a chart element to a uniform color.
         *
         * @param color HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         *
         * [Api set: ExcelApi 1.1]
         */
        setSolidColor(color: string): void;
        toJSON(): {};
    }
    /**
     *
     * Enapsulates the formatting options for line elements.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartLineFormat extends OfficeExtension.ClientObject {
        /**
         *
         * HTML color code representing the color of lines in the chart.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Clear the line format of a chart element.
         *
         * [Api set: ExcelApi 1.1]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLineFormat;
        toJSON(): {
            "color": string;
        };
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for a chart object.
     *
     * [Api set: ExcelApi 1.1]
     */
    class ChartFont extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the bold status of font.
         *
         * [Api set: ExcelApi 1.1]
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         *
         * [Api set: ExcelApi 1.1]
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         *
         * [Api set: ExcelApi 1.1]
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         *
         * [Api set: ExcelApi 1.1]
         */
        name: string;
        /**
         *
         * Size of the font (e.g. 11)
         *
         * [Api set: ExcelApi 1.1]
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
         *
         * [Api set: ExcelApi 1.1]
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFont;
        toJSON(): {
            "bold": boolean;
            "color": string;
            "italic": boolean;
            "name": string;
            "size": number;
            "underline": string;
        };
    }
    /**
     *
     * Manages sorting operations on Range objects.
     *
     * [Api set: ExcelApi 1.2]
     */
    class RangeSort extends OfficeExtension.ClientObject {
        /**
         *
         * Perform a sort operation.
         *
         * @param fields The list of conditions to sort on.
         * @param matchCase Whether to have the casing impact string ordering.
         * @param hasHeaders Whether the range has a header.
         * @param orientation Whether the operation is sorting rows or columns.
         * @param method The ordering method used for Chinese characters.
         *
         * [Api set: ExcelApi 1.2]
         */
        apply(fields: Array<Excel.SortField>, matchCase?: boolean, hasHeaders?: boolean, orientation?: string, method?: string): void;
        toJSON(): {};
    }
    /**
     *
     * Manages sorting operations on Table objects.
     *
     * [Api set: ExcelApi 1.2]
     */
    class TableSort extends OfficeExtension.ClientObject {
        /**
         *
         * Represents the current conditions used to last sort the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        fields: Array<Excel.SortField>;
        /**
         *
         * Represents whether the casing impacted the last sort of the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        matchCase: boolean;
        /**
         *
         * Represents Chinese character ordering method last used to sort the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        method: string;
        /**
         *
         * Perform a sort operation.
         *
         * @param fields The list of conditions to sort on.
         * @param matchCase Whether to have the casing impact string ordering.
         * @param method The ordering method used for Chinese characters.
         *
         * [Api set: ExcelApi 1.2]
         */
        apply(fields: Array<Excel.SortField>, matchCase?: boolean, method?: string): void;
        /**
         *
         * Clears the sorting that is currently on the table. While this doesn't modify the table's ordering, it clears the state of the header buttons.
         *
         * [Api set: ExcelApi 1.2]
         */
        clear(): void;
        /**
         *
         * Reapplies the current sorting parameters to the table.
         *
         * [Api set: ExcelApi 1.2]
         */
        reapply(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableSort;
        toJSON(): {
            "fields": SortField[];
            "matchCase": boolean;
            "method": string;
        };
    }
    /**
     *
     * Represents a condition in a sorting operation.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface SortField {
        /**
         *
         * Represents whether the sorting is done in an ascending fashion.
         *
         * [Api set: ExcelApi 1.2]
         */
        ascending?: boolean;
        /**
         *
         * Represents the color that is the target of the condition if the sorting is on font or cell color.
         *
         * [Api set: ExcelApi 1.2]
         */
        color?: string;
        /**
         *
         * Represents additional sorting options for this field.
         *
         * [Api set: ExcelApi 1.2]
         */
        dataOption?: string;
        /**
         *
         * Represents the icon that is the target of the condition if the sorting is on the cell's icon.
         *
         * [Api set: ExcelApi 1.2]
         */
        icon?: Excel.Icon;
        /**
         *
         * Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row).
         *
         * [Api set: ExcelApi 1.2]
         */
        key: number;
        /**
         *
         * Represents the type of sorting of this condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        sortOn?: string;
    }
    /**
     *
     * Manages the filtering of a table's column.
     *
     * [Api set: ExcelApi 1.2]
     */
    class Filter extends OfficeExtension.ClientObject {
        /**
         *
         * The currently applied filter on the given column.
         *
         * [Api set: ExcelApi 1.2]
         */
        criteria: Excel.FilterCriteria;
        /**
         *
         * Apply the given filter criteria on the given column.
         *
         * @param criteria The criteria to apply.
         *
         * [Api set: ExcelApi 1.2]
         */
        apply(criteria: Excel.FilterCriteria): void;
        /**
         *
         * Apply a "Bottom Item" filter to the column for the given number of elements.
         *
         * @param count The number of elements from the bottom to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyBottomItemsFilter(count: number): void;
        /**
         *
         * Apply a "Bottom Percent" filter to the column for the given percentage of elements.
         *
         * @param percent The percentage of elements from the bottom to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyBottomPercentFilter(percent: number): void;
        /**
         *
         * Apply a "Cell Color" filter to the column for the given color.
         *
         * @param color The background color of the cells to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyCellColorFilter(color: string): void;
        /**
         *
         * Apply a "Icon" filter to the column for the given criteria strings.
         *
         * @param criteria1 The first criteria string.
         * @param criteria2 The second criteria string.
         * @param oper The operator that describes how the two criteria are joined.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyCustomFilter(criteria1: string, criteria2?: string, oper?: string): void;
        /**
         *
         * Apply a "Dynamic" filter to the column.
         *
         * @param criteria The dynamic criteria to apply.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyDynamicFilter(criteria: string): void;
        /**
         *
         * Apply a "Font Color" filter to the column for the given color.
         *
         * @param color The font color of the cells to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyFontColorFilter(color: string): void;
        /**
         *
         * Apply a "Icon" filter to the column for the given icon.
         *
         * @param icon The icons of the cells to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyIconFilter(icon: Excel.Icon): void;
        /**
         *
         * Apply a "Top Item" filter to the column for the given number of elements.
         *
         * @param count The number of elements from the top to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyTopItemsFilter(count: number): void;
        /**
         *
         * Apply a "Top Percent" filter to the column for the given percentage of elements.
         *
         * @param percent The percentage of elements from the top to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyTopPercentFilter(percent: number): void;
        /**
         *
         * Apply a "Values" filter to the column for the given values.
         *
         * @param values The list of values to show.
         *
         * [Api set: ExcelApi 1.2]
         */
        applyValuesFilter(values: Array<string | Excel.FilterDatetime>): void;
        /**
         *
         * Clear the filter on the given column.
         *
         * [Api set: ExcelApi 1.2]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Filter;
        toJSON(): {
            "criteria": FilterCriteria;
        };
    }
    /**
     *
     * Represents the filtering criteria applied to a column.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface FilterCriteria {
        /**
         *
         * The HTML color string used to filter cells. Used with "cellColor" and "fontColor" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        color?: string;
        /**
         *
         * The first criterion used to filter data. Used as an operator in the case of "custom" filtering.
             For example ">50" for number greater than 50 or "=*s" for values ending in "s".
            
             Used as a number in the case of top/bottom items/percents. E.g. "5" for the top 5 items if filterOn is set to "topItems"
         *
         * [Api set: ExcelApi 1.2]
         */
        criterion1?: string;
        /**
         *
         * The second criterion used to filter data. Only used as an operator in the case of "custom" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        criterion2?: string;
        /**
         *
         * The dynamic criteria from the Excel.DynamicFilterCriteria set to apply on this column. Used with "dynamic" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        dynamicCriteria?: string;
        /**
         *
         * The property used by the filter to determine whether the values should stay visible.
         *
         * [Api set: ExcelApi 1.2]
         */
        filterOn: string;
        /**
         *
         * The icon used to filter cells. Used with "icon" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        icon?: Excel.Icon;
        /**
         *
         * The operator used to combine criterion 1 and 2 when using "custom" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        operator?: string;
        /**
         *
         * The set of values to be used as part of "values" filtering.
         *
         * [Api set: ExcelApi 1.2]
         */
        values?: Array<string | Excel.FilterDatetime>;
    }
    /**
     *
     * Represents how to filter a date when filtering on values.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface FilterDatetime {
        /**
         *
         * The date in ISO8601 format used to filter data.
         *
         * [Api set: ExcelApi 1.2]
         */
        date: string;
        /**
         *
         * How specific the date should be used to keep data. For example, if the date is 2005-04-02 and the specifity is set to "month", the filter operation will keep all rows with a date in the month of april 2009.
         *
         * [Api set: ExcelApi 1.2]
         */
        specificity: string;
    }
    /**
     *
     * Represents a cell icon.
     *
     * [Api set: ExcelApi 1.2]
     */
    interface Icon {
        /**
         *
         * Represents the index of the icon in the given set.
         *
         * [Api set: ExcelApi 1.2]
         */
        index: number;
        /**
         *
         * Represents the set that the icon is part of.
         *
         * [Api set: ExcelApi 1.2]
         */
        set: string;
    }
    /**
     *
     * Represents a collection of all the PivotTables that are part of the workbook or worksheet.
     *
     * [Api set: ExcelApi 1.3]
     */
    class PivotTableCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.PivotTable>;
        /**
         *
         * Gets a PivotTable by name.
         *
         * @param name Name of the PivotTable to be retrieved.
         *
         * [Api set: ExcelApi 1.3]
         */
        getItem(name: string): Excel.PivotTable;
        /**
         *
         * Refreshes all the PivotTables in the collection.
         *
         * [Api set: ExcelApi 1.3]
         */
        refreshAll(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.PivotTableCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents an Excel PivotTable.
     *
     * [Api set: ExcelApi 1.3]
     */
    class PivotTable extends OfficeExtension.ClientObject {
        /**
         *
         * The worksheet containing the current PivotTable. Read-only.
         *
         * [Api set: ExcelApi 1.3]
         */
        worksheet: Excel.Worksheet;
        /**
         *
         * Name of the PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        name: string;
        /**
         *
         * Refreshes the PivotTable.
         *
         * [Api set: ExcelApi 1.3]
         */
        refresh(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.PivotTable;
        toJSON(): {
            "name": string;
        };
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module BindingType {
        var range: string;
        var table: string;
        var text: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module BorderIndex {
        var edgeTop: string;
        var edgeBottom: string;
        var edgeLeft: string;
        var edgeRight: string;
        var insideVertical: string;
        var insideHorizontal: string;
        var diagonalDown: string;
        var diagonalUp: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module BorderLineStyle {
        var none: string;
        var continuous: string;
        var dash: string;
        var dashDot: string;
        var dashDotDot: string;
        var dot: string;
        var double: string;
        var slantDashDot: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module BorderWeight {
        var hairline: string;
        var thin: string;
        var medium: string;
        var thick: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module CalculationMode {
        var automatic: string;
        var automaticExceptTables: string;
        var manual: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module CalculationType {
        var recalculate: string;
        var full: string;
        var fullRebuild: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module ClearApplyTo {
        var all: string;
        var formats: string;
        var contents: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module ChartDataLabelPosition {
        var invalid: string;
        var none: string;
        var center: string;
        var insideEnd: string;
        var insideBase: string;
        var outsideEnd: string;
        var left: string;
        var right: string;
        var top: string;
        var bottom: string;
        var bestFit: string;
        var callout: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module ChartLegendPosition {
        var invalid: string;
        var top: string;
        var bottom: string;
        var left: string;
        var right: string;
        var corner: string;
        var custom: string;
    }
    /**
     *
     * Specifies whether the series are by rows or by columns. On Desktop, the "auto" option will inspect the source data shape to automatically guess whether the data is by rows or columns; on Excel Online, "auto" will simply default to "columns".
     *
     * [Api set: ExcelApi 1.1]
     */
    module ChartSeriesBy {
        /**
         *
         * On Desktop, the "auto" option will inspect the source data shape to automatically guess whether the data is by rows or columns; on Excel Online, "auto" will simply default to "columns".
         *
         */
        var auto: string;
        var columns: string;
        var rows: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module ChartType {
        var invalid: string;
        var columnClustered: string;
        var columnStacked: string;
        var columnStacked100: string;
        var _3DColumnClustered: string;
        var _3DColumnStacked: string;
        var _3DColumnStacked100: string;
        var barClustered: string;
        var barStacked: string;
        var barStacked100: string;
        var _3DBarClustered: string;
        var _3DBarStacked: string;
        var _3DBarStacked100: string;
        var lineStacked: string;
        var lineStacked100: string;
        var lineMarkers: string;
        var lineMarkersStacked: string;
        var lineMarkersStacked100: string;
        var pieOfPie: string;
        var pieExploded: string;
        var _3DPieExploded: string;
        var barOfPie: string;
        var xyscatterSmooth: string;
        var xyscatterSmoothNoMarkers: string;
        var xyscatterLines: string;
        var xyscatterLinesNoMarkers: string;
        var areaStacked: string;
        var areaStacked100: string;
        var _3DAreaStacked: string;
        var _3DAreaStacked100: string;
        var doughnutExploded: string;
        var radarMarkers: string;
        var radarFilled: string;
        var surface: string;
        var surfaceWireframe: string;
        var surfaceTopView: string;
        var surfaceTopViewWireframe: string;
        var bubble: string;
        var bubble3DEffect: string;
        var stockHLC: string;
        var stockOHLC: string;
        var stockVHLC: string;
        var stockVOHLC: string;
        var cylinderColClustered: string;
        var cylinderColStacked: string;
        var cylinderColStacked100: string;
        var cylinderBarClustered: string;
        var cylinderBarStacked: string;
        var cylinderBarStacked100: string;
        var cylinderCol: string;
        var coneColClustered: string;
        var coneColStacked: string;
        var coneColStacked100: string;
        var coneBarClustered: string;
        var coneBarStacked: string;
        var coneBarStacked100: string;
        var coneCol: string;
        var pyramidColClustered: string;
        var pyramidColStacked: string;
        var pyramidColStacked100: string;
        var pyramidBarClustered: string;
        var pyramidBarStacked: string;
        var pyramidBarStacked100: string;
        var pyramidCol: string;
        var _3DColumn: string;
        var line: string;
        var _3DLine: string;
        var _3DPie: string;
        var pie: string;
        var xyscatter: string;
        var _3DArea: string;
        var area: string;
        var doughnut: string;
        var radar: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module ChartUnderlineStyle {
        var none: string;
        var single: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module DeleteShiftDirection {
        var up: string;
        var left: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module DynamicFilterCriteria {
        var unknown: string;
        var aboveAverage: string;
        var allDatesInPeriodApril: string;
        var allDatesInPeriodAugust: string;
        var allDatesInPeriodDecember: string;
        var allDatesInPeriodFebruray: string;
        var allDatesInPeriodJanuary: string;
        var allDatesInPeriodJuly: string;
        var allDatesInPeriodJune: string;
        var allDatesInPeriodMarch: string;
        var allDatesInPeriodMay: string;
        var allDatesInPeriodNovember: string;
        var allDatesInPeriodOctober: string;
        var allDatesInPeriodQuarter1: string;
        var allDatesInPeriodQuarter2: string;
        var allDatesInPeriodQuarter3: string;
        var allDatesInPeriodQuarter4: string;
        var allDatesInPeriodSeptember: string;
        var belowAverage: string;
        var lastMonth: string;
        var lastQuarter: string;
        var lastWeek: string;
        var lastYear: string;
        var nextMonth: string;
        var nextQuarter: string;
        var nextWeek: string;
        var nextYear: string;
        var thisMonth: string;
        var thisQuarter: string;
        var thisWeek: string;
        var thisYear: string;
        var today: string;
        var tomorrow: string;
        var yearToDate: string;
        var yesterday: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module FilterDatetimeSpecificity {
        var year: string;
        var month: string;
        var day: string;
        var hour: string;
        var minute: string;
        var second: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module FilterOn {
        var bottomItems: string;
        var bottomPercent: string;
        var cellColor: string;
        var dynamic: string;
        var fontColor: string;
        var values: string;
        var topItems: string;
        var topPercent: string;
        var icon: string;
        var custom: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module FilterOperator {
        var and: string;
        var or: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module HorizontalAlignment {
        var general: string;
        var left: string;
        var center: string;
        var right: string;
        var fill: string;
        var justify: string;
        var centerAcrossSelection: string;
        var distributed: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module IconSet {
        var invalid: string;
        var threeArrows: string;
        var threeArrowsGray: string;
        var threeFlags: string;
        var threeTrafficLights1: string;
        var threeTrafficLights2: string;
        var threeSigns: string;
        var threeSymbols: string;
        var threeSymbols2: string;
        var fourArrows: string;
        var fourArrowsGray: string;
        var fourRedToBlack: string;
        var fourRating: string;
        var fourTrafficLights: string;
        var fiveArrows: string;
        var fiveArrowsGray: string;
        var fiveRating: string;
        var fiveQuarters: string;
        var threeStars: string;
        var threeTriangles: string;
        var fiveBoxes: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module ImageFittingMode {
        var fit: string;
        var fitAndCenter: string;
        var fill: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module InsertShiftDirection {
        var down: string;
        var right: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module NamedItemType {
        var string: string;
        var integer: string;
        var double: string;
        var boolean: string;
        var range: string;
        var error: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module RangeUnderlineStyle {
        var none: string;
        var single: string;
        var double: string;
        var singleAccountant: string;
        var doubleAccountant: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module SheetVisibility {
        var visible: string;
        var hidden: string;
        var veryHidden: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module RangeValueType {
        var unknown: string;
        var empty: string;
        var string: string;
        var integer: string;
        var double: string;
        var boolean: string;
        var error: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module SortOrientation {
        var rows: string;
        var columns: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module SortOn {
        var value: string;
        var cellColor: string;
        var fontColor: string;
        var icon: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module SortDataOption {
        var normal: string;
        var textAsNumber: string;
    }
    /**
     * [Api set: ExcelApi 1.2]
     */
    module SortMethod {
        var pinYin: string;
        var strokeCount: string;
    }
    /**
     * [Api set: ExcelApi 1.1]
     */
    module VerticalAlignment {
        var top: string;
        var center: string;
        var bottom: string;
        var justify: string;
        var distributed: string;
    }
    /**
     *
     * An object containing the result of a function-evaluation operation
     *
     * [Api set: ExcelApi 1.2]
     */
    class FunctionResult<T> extends OfficeExtension.ClientObject {
        /**
         *
         * Error value (such as "#DIV/0") representing the error. If the error string is not set, then the function succeeded, and its result is written to the Value field. The error is always in the English locale.
         *
         * [Api set: ExcelApi 1.2]
         */
        error: string;
        /**
         *
         * The value of function evaluation. The value field will be populated only if no error has occurred (i.e., the Error property is not set).
         *
         * [Api set: ExcelApi 1.2]
         */
        value: T;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): FunctionResult<T>;
        toJSON(): {
            "error": string;
            "value": T;
        };
    }
    /**
     *
     * An object for evaluating Excel functions.
     *
     * [Api set: ExcelApi 1.2]
     */
    class Functions extends OfficeExtension.ClientObject {
        /**
         *
         * Returns the absolute value of a number, a number without its sign.
         *
         * @param number Is the real number for which you want the absolute value.
         *
         * [Api set: ExcelApi 1.2]
         */
        abs(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the accrued interest for a security that pays periodic interest.
         *
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param firstInterest Is the security's first interest date, expressed as a serial date number.
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param rate Is the security's annual coupon rate.
         * @param par Is the security's par value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         * @param calcMethod Is a logical value: to accrued interest from issue date = TRUE or omitted; to calculate from last coupon payment date = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        accrInt(issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, calcMethod?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the accrued interest for a security that pays interest at maturity.
         *
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param settlement Is the security's maturity date, expressed as a serial date number.
         * @param rate Is the security's annual coupon rate.
         * @param par Is the security's par value.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        accrIntM(issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arccosine of a number, in radians in the range 0 to Pi. The arccosine is the angle whose cosine is Number.
         *
         * @param number Is the cosine of the angle you want and must be from -1 to 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        acos(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic cosine of a number.
         *
         * @param number Is any real number equal to or greater than 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        acosh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arccotangent of a number, in radians in the range 0 to Pi.
         *
         * @param number Is the cotangent of the angle you want.
         *
         * [Api set: ExcelApi 1.2]
         */
        acot(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic cotangent of a number.
         *
         * @param number Is the hyperbolic cotangent of the angle that you want.
         *
         * [Api set: ExcelApi 1.2]
         */
        acoth(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the prorated linear depreciation of an asset for each accounting period.
         *
         * @param cost Is the cost of the asset.
         * @param datePurchased Is the date the asset is purchased.
         * @param firstPeriod Is the date of the end of the first period.
         * @param salvage Is the salvage value at the end of life of the asset.
         * @param period Is the period.
         * @param rate Is the rate of depreciation.
         * @param basis Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.
         *
         * [Api set: ExcelApi 1.2]
         */
        amorDegrc(cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the prorated linear depreciation of an asset for each accounting period.
         *
         * @param cost Is the cost of the asset.
         * @param datePurchased Is the date the asset is purchased.
         * @param firstPeriod Is the date of the end of the first period.
         * @param salvage Is the salvage value at the end of life of the asset.
         * @param period Is the period.
         * @param rate Is the rate of depreciation.
         * @param basis Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.
         *
         * [Api set: ExcelApi 1.2]
         */
        amorLinc(cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE.
         *
         * @param values List of parameters, whose elements are 1 to 255 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.
         *
         * [Api set: ExcelApi 1.2]
         */
        and(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Converts a Roman numeral to Arabic.
         *
         * @param text Is the Roman numeral you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        arabic(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of areas in a reference. An area is a range of contiguous cells or a single cell.
         *
         * @param reference Is a reference to a cell or range of cells and can refer to multiple areas.
         *
         * [Api set: ExcelApi 1.2]
         */
        areas(reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes full-width (double-byte) characters to half-width (single-byte) characters. Use with double-byte character sets (DBCS).
         *
         * @param text Is a text, or a reference to a cell containing a text.
         *
         * [Api set: ExcelApi 1.2]
         */
        asc(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the arcsine of a number in radians, in the range -Pi/2 to Pi/2.
         *
         * @param number Is the sine of the angle you want and must be from -1 to 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        asin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic sine of a number.
         *
         * @param number Is any real number equal to or greater than 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        asinh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arctangent of a number in radians, in the range -Pi/2 to Pi/2.
         *
         * @param number Is the tangent of the angle you want.
         *
         * [Api set: ExcelApi 1.2]
         */
        atan(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the arctangent of the specified x- and y- coordinates, in radians between -Pi and Pi, excluding -Pi.
         *
         * @param xNum Is the x-coordinate of the point.
         * @param yNum Is the y-coordinate of the point.
         *
         * [Api set: ExcelApi 1.2]
         */
        atan2(xNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse hyperbolic tangent of a number.
         *
         * @param number Is any real number between -1 and 1 excluding -1 and 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        atanh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the average of the absolute deviations of data points from their mean. Arguments can be numbers or names, arrays, or references that contain numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 arguments for which you want the average of the absolute deviations.
         *
         * [Api set: ExcelApi 1.2]
         */
        aveDev(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the average (arithmetic mean) of its arguments, which can be numbers or names, arrays, or references that contain numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 numeric arguments for which you want the average.
         *
         * [Api set: ExcelApi 1.2]
         */
        average(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the average (arithmetic mean) of its arguments, evaluating text and FALSE in arguments as 0; TRUE evaluates as 1. Arguments can be numbers, names, arrays, or references.
         *
         * @param values List of parameters, whose elements are 1 to 255 arguments for which you want the average.
         *
         * [Api set: ExcelApi 1.2]
         */
        averageA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Finds average(arithmetic mean) for the cells specified by a given condition or criteria.
         *
         * @param range Is the range of cells you want evaluated.
         * @param criteria Is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.
         * @param averageRange Are the actual cells to be used to find the average. If omitted, the cells in range are used.
         *
         * [Api set: ExcelApi 1.2]
         */
        averageIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, averageRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Finds average(arithmetic mean) for the cells specified by a given set of conditions or criteria.
         *
         * @param averageRange Are the actual cells to be used to find the average.
         * @param values List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be used to find the average.
         *
         * [Api set: ExcelApi 1.2]
         */
        averageIfs(averageRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Converts a number to text (baht).
         *
         * @param number Is a number that you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        bahtText(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts a number into a text representation with the given radix (base).
         *
         * @param number Is the number that you want to convert.
         * @param radix Is the base Radix that you want to convert the number into.
         * @param minLength Is the minimum length of the returned string.  If omitted leading zeros are not added.
         *
         * [Api set: ExcelApi 1.2]
         */
        base(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minLength?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the modified Bessel function In(x).
         *
         * @param x Is the value at which to evaluate the function.
         * @param n Is the order of the Bessel function.
         *
         * [Api set: ExcelApi 1.2]
         */
        besselI(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Bessel function Jn(x).
         *
         * @param x Is the value at which to evaluate the function.
         * @param n Is the order of the Bessel function.
         *
         * [Api set: ExcelApi 1.2]
         */
        besselJ(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the modified Bessel function Kn(x).
         *
         * @param x Is the value at which to evaluate the function.
         * @param n Is the order of the function.
         *
         * [Api set: ExcelApi 1.2]
         */
        besselK(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Bessel function Yn(x).
         *
         * @param x Is the value at which to evaluate the function.
         * @param n Is the order of the function.
         *
         * [Api set: ExcelApi 1.2]
         */
        besselY(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the beta probability distribution function.
         *
         * @param x Is the value between A and B at which to evaluate the function.
         * @param alpha Is a parameter to the distribution and must be greater than 0.
         * @param beta Is a parameter to the distribution and must be greater than 0.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         * @param A Is an optional lower bound to the interval of x. If omitted, A = 0.
         * @param B Is an optional upper bound to the interval of x. If omitted, B = 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        beta_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the cumulative beta probability density function (BETA.DIST).
         *
         * @param probability Is a probability associated with the beta distribution.
         * @param alpha Is a parameter to the distribution and must be greater than 0.
         * @param beta Is a parameter to the distribution and must be greater than 0.
         * @param A Is an optional lower bound to the interval of x. If omitted, A = 0.
         * @param B Is an optional upper bound to the interval of x. If omitted, B = 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        beta_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to decimal.
         *
         * @param number Is the binary number you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        bin2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to hexadecimal.
         *
         * @param number Is the binary number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        bin2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a binary number to octal.
         *
         * @param number Is the binary number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        bin2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the individual term binomial distribution probability.
         *
         * @param numberS Is the number of successes in trials.
         * @param trials Is the number of independent trials.
         * @param probabilityS Is the probability of success on each trial.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        binom_Dist(numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the probability of a trial result using a binomial distribution.
         *
         * @param trials Is the number of independent trials.
         * @param probabilityS Is the probability of success on each trial.
         * @param numberS Is the number of successes in trials.
         * @param numberS2 If provided this function returns the probability that the number of successful trials shall lie between numberS and numberS2.
         *
         * [Api set: ExcelApi 1.2]
         */
        binom_Dist_Range(trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS2?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.
         *
         * @param trials Is the number of Bernoulli trials.
         * @param probabilityS Is the probability of success on each trial, a number between 0 and 1 inclusive.
         * @param alpha Is the criterion value, a number between 0 and 1 inclusive.
         *
         * [Api set: ExcelApi 1.2]
         */
        binom_Inv(trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'And' of two numbers.
         *
         * @param number1 Is the decimal representation of the binary number you want to evaluate.
         * @param number2 Is the decimal representation of the binary number you want to evaluate.
         *
         * [Api set: ExcelApi 1.2]
         */
        bitand(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number shifted left by shift_amount bits.
         *
         * @param number Is the decimal representation of the binary number you want to evaluate.
         * @param shiftAmount Is the number of bits that you want to shift Number left by.
         *
         * [Api set: ExcelApi 1.2]
         */
        bitlshift(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'Or' of two numbers.
         *
         * @param number1 Is the decimal representation of the binary number you want to evaluate.
         * @param number2 Is the decimal representation of the binary number you want to evaluate.
         *
         * [Api set: ExcelApi 1.2]
         */
        bitor(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number shifted right by shift_amount bits.
         *
         * @param number Is the decimal representation of the binary number you want to evaluate.
         * @param shiftAmount Is the number of bits that you want to shift Number right by.
         *
         * [Api set: ExcelApi 1.2]
         */
        bitrshift(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a bitwise 'Exclusive Or' of two numbers.
         *
         * @param number1 Is the decimal representation of the binary number you want to evaluate.
         * @param number2 Is the decimal representation of the binary number you want to evaluate.
         *
         * [Api set: ExcelApi 1.2]
         */
        bitxor(number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the value you want to round.
         * @param significance Is the multiple to which you want to round.
         * @param mode When given and nonzero this function will round away from zero.
         *
         * [Api set: ExcelApi 1.2]
         */
        ceiling_Math(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the value you want to round.
         * @param significance Is the multiple to which you want to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        ceiling_Precise(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the character specified by the code number from the character set for your computer.
         *
         * @param number Is a number between 1 and 255 specifying which character you want.
         *
         * [Api set: ExcelApi 1.2]
         */
        char(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the left-tailed probability of the chi-squared distribution.
         *
         * @param x Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param degFreedom Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param cumulative Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        chiSq_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the right-tailed probability of the chi-squared distribution.
         *
         * @param x Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param degFreedom Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        chiSq_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the left-tailed probability of the chi-squared distribution.
         *
         * @param probability Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.
         * @param degFreedom Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        chiSq_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the right-tailed probability of the chi-squared distribution.
         *
         * @param probability Is a probability associated with the chi-squared distribution, a value between 0 and 1 inclusive.
         * @param degFreedom Is the number of degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        chiSq_Inv_RT(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Chooses a value or action to perform from a list of values, based on an index number.
         *
         * @param indexNum Specifies which value argument is selected. indexNum must be between 1 and 254, or a formula or a reference to a number between 1 and 254.
         * @param values List of parameters, whose elements are 1 to 254 numbers, cell references, defined names, formulas, functions, or text arguments from which CHOOSE selects.
         *
         * [Api set: ExcelApi 1.2]
         */
        choose(indexNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number | string | boolean>;
        /**
         *
         * Removes all nonprintable characters from text.
         *
         * @param text Is any worksheet information from which you want to remove nonprintable characters.
         *
         * [Api set: ExcelApi 1.2]
         */
        clean(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns a numeric code for the first character in a text string, in the character set used by your computer.
         *
         * @param text Is the text for which you want the code of the first character.
         *
         * [Api set: ExcelApi 1.2]
         */
        code(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of columns in an array or reference.
         *
         * @param array Is an array or array formula, or a reference to a range of cells for which you want the number of columns.
         *
         * [Api set: ExcelApi 1.2]
         */
        columns(array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of combinations for a given number of items.
         *
         * @param number Is the total number of items.
         * @param numberChosen Is the number of items in each combination.
         *
         * [Api set: ExcelApi 1.2]
         */
        combin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of combinations with repetitions for a given number of items.
         *
         * @param number Is the total number of items.
         * @param numberChosen Is the number of items in each combination.
         *
         * [Api set: ExcelApi 1.2]
         */
        combina(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts real and imaginary coefficients into a complex number.
         *
         * @param realNum Is the real coefficient of the complex number.
         * @param iNum Is the imaginary coefficient of the complex number.
         * @param suffix Is the suffix for the imaginary component of the complex number.
         *
         * [Api set: ExcelApi 1.2]
         */
        complex(realNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, iNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, suffix?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Joins several text strings into one text string.
         *
         * @param values List of parameters, whose elements are 1 to 255 text strings to be joined into a single text string and can be text strings, numbers, or single-cell references.
         *
         * [Api set: ExcelApi 1.2]
         */
        concatenate(...values: Array<string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<string>;
        /**
         *
         * Returns the confidence interval for a population mean, using a normal distribution.
         *
         * @param alpha Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.
         * @param standardDev Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.
         * @param size Is the sample size.
         *
         * [Api set: ExcelApi 1.2]
         */
        confidence_Norm(alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the confidence interval for a population mean, using a Student's T distribution.
         *
         * @param alpha Is the significance level used to compute the confidence level, a number greater than 0 and less than 1.
         * @param standardDev Is the population standard deviation for the data range and is assumed to be known. standardDev must be greater than 0.
         * @param size Is the sample size.
         *
         * [Api set: ExcelApi 1.2]
         */
        confidence_T(alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number from one measurement system to another.
         *
         * @param number Is the value in from_units to convert.
         * @param fromUnit Is the units for number.
         * @param toUnit Is the units for the result.
         *
         * [Api set: ExcelApi 1.2]
         */
        convert(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fromUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, toUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosine of an angle.
         *
         * @param number Is the angle in radians for which you want the cosine.
         *
         * [Api set: ExcelApi 1.2]
         */
        cos(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosine of a number.
         *
         * @param number Is any real number.
         *
         * [Api set: ExcelApi 1.2]
         */
        cosh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cotangent of an angle.
         *
         * @param number Is the angle in radians for which you want the cotangent.
         *
         * [Api set: ExcelApi 1.2]
         */
        cot(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cotangent of a number.
         *
         * @param number Is the angle in radians for which you want the hyperbolic cotangent.
         *
         * [Api set: ExcelApi 1.2]
         */
        coth(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells in a range that contain numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 arguments that can contain or refer to a variety of different types of data, but only numbers are counted.
         *
         * [Api set: ExcelApi 1.2]
         */
        count(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells in a range that are not empty.
         *
         * @param values List of parameters, whose elements are 1 to 255 arguments representing the values and cells you want to count. Values can be any type of information.
         *
         * [Api set: ExcelApi 1.2]
         */
        countA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Counts the number of empty cells in a specified range of cells.
         *
         * @param range Is the range from which you want to count the empty cells.
         *
         * [Api set: ExcelApi 1.2]
         */
        countBlank(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells within a range that meet the given condition.
         *
         * @param range Is the range of cells from which you want to count nonblank cells.
         * @param criteria Is the condition in the form of a number, expression, or text that defines which cells will be counted.
         *
         * [Api set: ExcelApi 1.2]
         */
        countIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the number of cells specified by a given set of conditions or criteria.
         *
         * @param values List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition in the form of a number, expression, or text that defines which cells will be counted.
         *
         * [Api set: ExcelApi 1.2]
         */
        countIfs(...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Returns the number of days from the beginning of the coupon period to the settlement date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupDayBs(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days in the coupon period that contains the settlement date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupDays(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days from the settlement date to the next coupon date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupDaysNc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the next coupon date after the settlement date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupNcd(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of coupons payable between the settlement date and maturity date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupNum(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the previous coupon date before the settlement date.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        coupPcd(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosecant of an angle.
         *
         * @param number Is the angle in radians for which you want the cosecant.
         *
         * [Api set: ExcelApi 1.2]
         */
        csc(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosecant of an angle.
         *
         * @param number Is the angle in radians for which you want the hyperbolic cosecant.
         *
         * [Api set: ExcelApi 1.2]
         */
        csch(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cumulative interest paid between two periods.
         *
         * @param rate Is the interest rate.
         * @param nper Is the total number of payment periods.
         * @param pv Is the present value.
         * @param startPeriod Is the first period in the calculation.
         * @param endPeriod Is the last period in the calculation.
         * @param type Is the timing of the payment.
         *
         * [Api set: ExcelApi 1.2]
         */
        cumIPmt(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cumulative principal paid on a loan between two periods.
         *
         * @param rate Is the interest rate.
         * @param nper Is the total number of payment periods.
         * @param pv Is the present value.
         * @param startPeriod Is the first period in the calculation.
         * @param endPeriod Is the last period in the calculation.
         * @param type Is the timing of the payment.
         *
         * [Api set: ExcelApi 1.2]
         */
        cumPrinc(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Averages the values in a column in a list or database that match conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        daverage(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dcount(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Counts nonblank cells in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dcountA(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Extracts from a database a single record that matches the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dget(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | boolean | string>;
        /**
         *
         * Returns the largest number in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dmax(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the smallest number in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dmin(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Multiplies the values in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dproduct(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates the standard deviation based on a sample from selected database entries.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dstDev(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Calculates the standard deviation based on the entire population of selected database entries.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dstDevP(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Adds the numbers in the field (column) of records in the database that match the conditions you specify.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dsum(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample from selected database entries.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dvar(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population of selected database entries.
         *
         * @param database Is the range of cells that makes up the list or database. A database is a list of related data.
         * @param field Is either the label of the column in double quotation marks or a number that represents the column's position in the list.
         * @param criteria Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition.
         *
         * [Api set: ExcelApi 1.2]
         */
        dvarP(database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number that represents the date in Microsoft Excel date-time code.
         *
         * @param year Is a number from 1900 or 1904 (depending on the workbook's date system) to 9999.
         * @param month Is a number from 1 to 12 representing the month of the year.
         * @param day Is a number from 1 to 31 representing the day of the month.
         *
         * [Api set: ExcelApi 1.2]
         */
        date(year: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, day: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a date in the form of text to a number that represents the date in Microsoft Excel date-time code.
         *
         * @param dateText Is text that represents a date in a Microsoft Excel date format, between 1/1/1900 or 1/1/1904 (depending on the workbook's date system) and 12/31/9999.
         *
         * [Api set: ExcelApi 1.2]
         */
        datevalue(dateText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the day of the month, a number from 1 to 31.
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel.
         *
         * [Api set: ExcelApi 1.2]
         */
        day(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days between the two dates.
         *
         * @param endDate startDate and endDate are the two dates between which you want to know the number of days.
         * @param startDate startDate and endDate are the two dates between which you want to know the number of days.
         *
         * [Api set: ExcelApi 1.2]
         */
        days(endDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of days between two dates based on a 360-day year (twelve 30-day months).
         *
         * @param startDate startDate and endDate are the two dates between which you want to know the number of days.
         * @param endDate startDate and endDate are the two dates between which you want to know the number of days.
         * @param method Is a logical value specifying the calculation method: U.S. (NASD) = FALSE or omitted; European = TRUE.
         *
         * [Api set: ExcelApi 1.2]
         */
        days360(startDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, method?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the depreciation of an asset for a specified period using the fixed-declining balance method.
         *
         * @param cost Is the initial cost of the asset.
         * @param salvage Is the salvage value at the end of the life of the asset.
         * @param life Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param period Is the period for which you want to calculate the depreciation. Period must use the same units as Life.
         * @param month Is the number of months in the first year. If month is omitted, it is assumed to be 12.
         *
         * [Api set: ExcelApi 1.2]
         */
        db(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes half-width (single-byte) characters within a character string to full-width (double-byte) characters. Use with double-byte character sets (DBCS).
         *
         * @param text Is a text, or a reference to a cell containing a text.
         *
         * [Api set: ExcelApi 1.2]
         */
        dbcs(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify.
         *
         * @param cost Is the initial cost of the asset.
         * @param salvage Is the salvage value at the end of the life of the asset.
         * @param life Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param period Is the period for which you want to calculate the depreciation. Period must use the same units as Life.
         * @param factor Is the rate at which the balance declines. If Factor is omitted, it is assumed to be 2 (the double-declining balance method).
         *
         * [Api set: ExcelApi 1.2]
         */
        ddb(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to binary.
         *
         * @param number Is the decimal integer you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        dec2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to hexadecimal.
         *
         * @param number Is the decimal integer you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        dec2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a decimal number to octal.
         *
         * @param number Is the decimal integer you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        dec2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text representation of a number in a given base into a decimal number.
         *
         * @param number Is the number that you want to convert.
         * @param radix Is the base Radix of the number you are converting.
         *
         * [Api set: ExcelApi 1.2]
         */
        decimal(number: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts radians to degrees.
         *
         * @param angle Is the angle in radians that you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        degrees(angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Tests whether two numbers are equal.
         *
         * @param number1 Is the first number.
         * @param number2 Is the second number.
         *
         * [Api set: ExcelApi 1.2]
         */
        delta(number1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of squares of deviations of data points from their sample mean.
         *
         * @param values List of parameters, whose elements are 1 to 255 arguments, or an array or array reference, on which you want DEVSQ to calculate.
         *
         * [Api set: ExcelApi 1.2]
         */
        devSq(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the discount rate for a security.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param pr Is the security's price per $100 face value.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        disc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number to text, using currency format.
         *
         * @param number Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.
         * @param decimals Is the number of digits to the right of the decimal point. The number is rounded as necessary; if omitted, Decimals = 2.
         *
         * [Api set: ExcelApi 1.2]
         */
        dollar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.
         *
         * @param fractionalDollar Is a number expressed as a fraction.
         * @param fraction Is the integer to use in the denominator of the fraction.
         *
         * [Api set: ExcelApi 1.2]
         */
        dollarDe(fractionalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.
         *
         * @param decimalDollar Is a decimal number.
         * @param fraction Is the integer to use in the denominator of a fraction.
         *
         * [Api set: ExcelApi 1.2]
         */
        dollarFr(decimalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual duration of a security with periodic interest payments.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param coupon Is the security's annual coupon rate.
         * @param yld Is the security's annual yield.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        duration(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the value you want to round.
         * @param significance Is the multiple to which you want to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        ecma_Ceiling(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date that is the indicated number of months before or after the start date.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param months Is the number of months before or after startDate.
         *
         * [Api set: ExcelApi 1.2]
         */
        edate(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the effective annual interest rate.
         *
         * @param nominalRate Is the nominal interest rate.
         * @param npery Is the number of compounding periods per year.
         *
         * [Api set: ExcelApi 1.2]
         */
        effect(nominalRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the last day of the month before or after a specified number of months.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param months Is the number of months before or after the startDate.
         *
         * [Api set: ExcelApi 1.2]
         */
        eoMonth(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error function.
         *
         * @param lowerLimit Is the lower bound for integrating ERF.
         * @param upperLimit Is the upper bound for integrating ERF.
         *
         * [Api set: ExcelApi 1.2]
         */
        erf(lowerLimit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, upperLimit?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complementary error function.
         *
         * @param x Is the lower bound for integrating ERF.
         *
         * [Api set: ExcelApi 1.2]
         */
        erfC(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complementary error function.
         *
         * @param X Is the lower bound for integrating ERFC.PRECISE.
         *
         * [Api set: ExcelApi 1.2]
         */
        erfC_Precise(X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error function.
         *
         * @param X Is the lower bound for integrating ERF.PRECISE.
         *
         * [Api set: ExcelApi 1.2]
         */
        erf_Precise(X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number matching an error value.
         *
         * @param errorVal Is the error value for which you want the identifying number, and can be an actual error value or a reference to a cell containing an error value.
         *
         * [Api set: ExcelApi 1.2]
         */
        error_Type(errorVal: string | number | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a positive number up and negative number down to the nearest even integer.
         *
         * @param number Is the value to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        even(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether two text strings are exactly the same, and returns TRUE or FALSE. EXACT is case-sensitive.
         *
         * @param text1 Is the first text string.
         * @param text2 Is the second text string.
         *
         * [Api set: ExcelApi 1.2]
         */
        exact(text1: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, text2: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns e raised to the power of a given number.
         *
         * @param number Is the exponent applied to the base e. The constant e equals 2.71828182845904, the base of the natural logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        exp(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the exponential distribution.
         *
         * @param x Is the value of the function, a nonnegative number.
         * @param lambda Is the parameter value, a positive number.
         * @param cumulative Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        expon_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lambda: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the future value of an initial principal after applying a series of compound interest rates.
         *
         * @param principal Is the present value.
         * @param schedule Is an array of interest rates to apply.
         *
         * [Api set: ExcelApi 1.2]
         */
        fvschedule(principal: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, schedule: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the (left-tailed) F probability distribution (degree of diversity) for two data sets.
         *
         * @param x Is the value at which to evaluate the function, a nonnegative number.
         * @param degFreedom1 Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param cumulative Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        f_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets.
         *
         * @param x Is the value at which to evaluate the function, a nonnegative number.
         * @param degFreedom1 Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        f_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the (left-tailed) F probability distribution: if p = F.DIST(x,...), then F.INV(p,...) = x.
         *
         * @param probability Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.
         * @param degFreedom1 Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        f_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the (right-tailed) F probability distribution: if p = F.DIST.RT(x,...), then F.INV.RT(p,...) = x.
         *
         * @param probability Is a probability associated with the F cumulative distribution, a number between 0 and 1 inclusive.
         * @param degFreedom1 Is the numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         * @param degFreedom2 Is the denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10.
         *
         * [Api set: ExcelApi 1.2]
         */
        f_Inv_RT(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the factorial of a number, equal to 1*2*3*...* Number.
         *
         * @param number Is the nonnegative number you want the factorial of.
         *
         * [Api set: ExcelApi 1.2]
         */
        fact(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the double factorial of a number.
         *
         * @param number Is the value for which to return the double factorial.
         *
         * [Api set: ExcelApi 1.2]
         */
        factDouble(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logical value FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        false(): FunctionResult<boolean>;
        /**
         *
         * Returns the starting position of one text string within another text string. FIND is case-sensitive.
         *
         * @param findText Is the text you want to find. Use double quotes (empty text) to match the first character in withinText; wildcard characters not allowed.
         * @param withinText Is the text containing the text you want to find.
         * @param startNum Specifies the character at which to start the search. The first character in withinText is character number 1. If omitted, startNum = 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        find(findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Finds the starting position of one text string within another text string. FINDB is case-sensitive. Use with double-byte character sets (DBCS).
         *
         * @param findText Is the text you want to find.
         * @param withinText Is the text containing the text you want to find.
         * @param startNum Specifies the character at which to start the search.
         *
         * [Api set: ExcelApi 1.2]
         */
        findB(findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Fisher transformation.
         *
         * @param x Is the value for which you want the transformation, a number between -1 and 1, excluding -1 and 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        fisher(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the Fisher transformation: if y = FISHER(x), then FISHERINV(y) = x.
         *
         * @param y Is the value for which you want to perform the inverse of the transformation.
         *
         * [Api set: ExcelApi 1.2]
         */
        fisherInv(y: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number to the specified number of decimals and returns the result as text with or without commas.
         *
         * @param number Is the number you want to round and convert to text.
         * @param decimals Is the number of digits to the right of the decimal point. If omitted, Decimals = 2.
         * @param noCommas Is a logical value: do not display commas in the returned text = TRUE; do display commas in the returned text = FALSE or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        fixed(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noCommas?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Rounds a number down, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the value you want to round.
         * @param significance Is the multiple to which you want to round.
         * @param mode When given and nonzero this function will round towards zero.
         *
         * [Api set: ExcelApi 1.2]
         */
        floor_Math(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the numeric value you want to round.
         * @param significance Is the multiple to which you want to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        floor_Precise(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the future value of an investment based on periodic, constant payments and a constant interest rate.
         *
         * @param rate Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper Is the total number of payment periods in the investment.
         * @param pmt Is the payment made each period; it cannot change over the life of the investment.
         * @param pv Is the present value, or the lump-sum amount that a series of future payments is worth now. If omitted, Pv = 0.
         * @param type Is a value representing the timing of payment: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        fv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Gamma function value.
         *
         * @param x Is the value for which you want to calculate Gamma.
         *
         * [Api set: ExcelApi 1.2]
         */
        gamma(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of the gamma function.
         *
         * @param x Is the value for which you want to calculate GAMMALN, a positive number.
         *
         * [Api set: ExcelApi 1.2]
         */
        gammaLn(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of the gamma function.
         *
         * @param x Is the value for which you want to calculate GAMMALN.PRECISE, a positive number.
         *
         * [Api set: ExcelApi 1.2]
         */
        gammaLn_Precise(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the gamma distribution.
         *
         * @param x Is the value at which you want to evaluate the distribution, a nonnegative number.
         * @param alpha Is a parameter to the distribution, a positive number.
         * @param beta Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.DIST returns the standard gamma distribution.
         * @param cumulative Is a logical value: return the cumulative distribution function = TRUE; return the probability mass function = FALSE or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        gamma_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the gamma cumulative distribution: if p = GAMMA.DIST(x,...), then GAMMA.INV(p,...) = x.
         *
         * @param probability Is the probability associated with the gamma distribution, a number between 0 and 1, inclusive.
         * @param alpha Is a parameter to the distribution, a positive number.
         * @param beta Is a parameter to the distribution, a positive number. If beta = 1, GAMMA.INV returns the inverse of the standard gamma distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        gamma_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns 0.5 less than the standard normal cumulative distribution.
         *
         * @param x Is the value for which you want the distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        gauss(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the greatest common divisor.
         *
         * @param values List of parameters, whose elements are 1 to 255 values.
         *
         * [Api set: ExcelApi 1.2]
         */
        gcd(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Tests whether a number is greater than a threshold value.
         *
         * @param number Is the value to test against step.
         * @param step Is the threshold value.
         *
         * [Api set: ExcelApi 1.2]
         */
        geStep(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, step?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the geometric mean of an array or range of positive numeric data.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the mean.
         *
         * [Api set: ExcelApi 1.2]
         */
        geoMean(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Looks for a value in the top row of a table or array of values and returns the value in the same column from a row you specify.
         *
         * @param lookupValue Is the value to be found in the first row of the table and can be a value, a reference, or a text string.
         * @param tableArray Is a table of text, numbers, or logical values in which data is looked up. tableArray can be a reference to a range or a range name.
         * @param rowIndexNum Is the row number in tableArray from which the matching value should be returned. The first row of values in the table is row 1.
         * @param rangeLookup Is a logical value: to find the closest match in the top row (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        hlookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rowIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Returns the harmonic mean of a data set of positive numbers: the reciprocal of the arithmetic mean of reciprocals.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the harmonic mean.
         *
         * [Api set: ExcelApi 1.2]
         */
        harMean(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts a Hexadecimal number to binary.
         *
         * @param number Is the hexadecimal number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        hex2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a hexadecimal number to decimal.
         *
         * @param number Is the hexadecimal number you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        hex2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a hexadecimal number to octal.
         *
         * @param number Is the hexadecimal number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        hex2Oct(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hour as a number from 0 (12:00 A.M.) to 23 (11:00 P.M.).
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel, or text in time format, such as 16:48:00 or 4:48:00 PM.
         *
         * [Api set: ExcelApi 1.2]
         */
        hour(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hypergeometric distribution.
         *
         * @param sampleS Is the number of successes in the sample.
         * @param numberSample Is the size of the sample.
         * @param populationS Is the number of successes in the population.
         * @param numberPop Is the population size.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        hypGeom_Dist(sampleS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberSample: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, populationS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberPop: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Creates a shortcut or jump that opens a document stored on your hard drive, a network server, or on the Internet.
         *
         * @param linkLocation Is the text giving the path and file name to the document to be opened, a hard drive location, UNC address, or URL path.
         * @param friendlyName Is text or a number that is displayed in the cell. If omitted, the cell displays the linkLocation text.
         *
         * [Api set: ExcelApi 1.2]
         */
        hyperlink(linkLocation: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, friendlyName?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Rounds a number up, to the nearest integer or to the nearest multiple of significance.
         *
         * @param number Is the value you want to round.
         * @param significance Is the optional multiple to which you want to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        iso_Ceiling(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE.
         *
         * @param logicalTest Is any value or expression that can be evaluated to TRUE or FALSE.
         * @param valueIfTrue Is the value that is returned if logicalTest is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions.
         * @param valueIfFalse Is the value that is returned if logicalTest is FALSE. If omitted, FALSE is returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        if(logicalTest: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, valueIfTrue?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>, valueIfFalse?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Returns the absolute value (modulus) of a complex number.
         *
         * @param inumber Is a complex number for which you want the absolute value.
         *
         * [Api set: ExcelApi 1.2]
         */
        imAbs(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the argument q, an angle expressed in radians.
         *
         * @param inumber Is a complex number for which you want the argument.
         *
         * [Api set: ExcelApi 1.2]
         */
        imArgument(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the complex conjugate of a complex number.
         *
         * @param inumber Is a complex number for which you want the conjugate.
         *
         * [Api set: ExcelApi 1.2]
         */
        imConjugate(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosine of a complex number.
         *
         * @param inumber Is a complex number for which you want the cosine.
         *
         * [Api set: ExcelApi 1.2]
         */
        imCos(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosine of a complex number.
         *
         * @param inumber Is a complex number for which you want the hyperbolic cosine.
         *
         * [Api set: ExcelApi 1.2]
         */
        imCosh(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cotangent of a complex number.
         *
         * @param inumber Is a complex number for which you want the cotangent.
         *
         * [Api set: ExcelApi 1.2]
         */
        imCot(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the cosecant of a complex number.
         *
         * @param inumber Is a complex number for which you want the cosecant.
         *
         * [Api set: ExcelApi 1.2]
         */
        imCsc(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic cosecant of a complex number.
         *
         * @param inumber Is a complex number for which you want the hyperbolic cosecant.
         *
         * [Api set: ExcelApi 1.2]
         */
        imCsch(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quotient of two complex numbers.
         *
         * @param inumber1 Is the complex numerator or dividend.
         * @param inumber2 Is the complex denominator or divisor.
         *
         * [Api set: ExcelApi 1.2]
         */
        imDiv(inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the exponential of a complex number.
         *
         * @param inumber Is a complex number for which you want the exponential.
         *
         * [Api set: ExcelApi 1.2]
         */
        imExp(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of a complex number.
         *
         * @param inumber Is a complex number for which you want the natural logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        imLn(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-10 logarithm of a complex number.
         *
         * @param inumber Is a complex number for which you want the common logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        imLog10(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-2 logarithm of a complex number.
         *
         * @param inumber Is a complex number for which you want the base-2 logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        imLog2(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a complex number raised to an integer power.
         *
         * @param inumber Is a complex number you want to raise to a power.
         * @param number Is the power to which you want to raise the complex number.
         *
         * [Api set: ExcelApi 1.2]
         */
        imPower(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the product of 1 to 255 complex numbers.
         *
         * @param values Inumber1, Inumber2,... are from 1 to 255 complex numbers to multiply.
         *
         * [Api set: ExcelApi 1.2]
         */
        imProduct(...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the real coefficient of a complex number.
         *
         * @param inumber Is a complex number for which you want the real coefficient.
         *
         * [Api set: ExcelApi 1.2]
         */
        imReal(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the secant of a complex number.
         *
         * @param inumber Is a complex number for which you want the secant.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSec(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic secant of a complex number.
         *
         * @param inumber Is a complex number for which you want the hyperbolic secant.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSech(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sine of a complex number.
         *
         * @param inumber Is a complex number for which you want the sine.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSin(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic sine of a complex number.
         *
         * @param inumber Is a complex number for which you want the hyperbolic sine.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSinh(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of a complex number.
         *
         * @param inumber Is a complex number for which you want the square root.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSqrt(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the difference of two complex numbers.
         *
         * @param inumber1 Is the complex number from which to subtract inumber2.
         * @param inumber2 Is the complex number to subtract from inumber1.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSub(inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of complex numbers.
         *
         * @param values List of parameters, whose elements are from 1 to 255 complex numbers to add.
         *
         * [Api set: ExcelApi 1.2]
         */
        imSum(...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the tangent of a complex number.
         *
         * @param inumber Is a complex number for which you want the tangent.
         *
         * [Api set: ExcelApi 1.2]
         */
        imTan(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the imaginary coefficient of a complex number.
         *
         * @param inumber Is a complex number for which you want the imaginary coefficient.
         *
         * [Api set: ExcelApi 1.2]
         */
        imaginary(inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down to the nearest integer.
         *
         * @param number Is the real number you want to round down to an integer.
         *
         * [Api set: ExcelApi 1.2]
         */
        int(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest rate for a fully invested security.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param investment Is the amount invested in the security.
         * @param redemption Is the amount to be received at maturity.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        intRate(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate.
         *
         * @param rate Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per Is the period for which you want to find the interest and must be in the range 1 to Nper.
         * @param nper Is the total number of payment periods in an investment.
         * @param pv Is the present value, or the lump-sum amount that a series of future payments is worth now.
         * @param fv Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, Fv = 0.
         * @param type Is a logical value representing the timing of payment: at the end of the period = 0 or omitted, at the beginning of the period = 1.
         *
         * [Api set: ExcelApi 1.2]
         */
        ipmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a series of cash flows.
         *
         * @param values Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return.
         * @param guess Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        irr(values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is an error (#VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!) excluding #N/A, and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isErr(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is an error (#N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!), and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isError(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns TRUE if the number is even.
         *
         * @param number Is the value to test.
         *
         * [Api set: ExcelApi 1.2]
         */
        isEven(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a reference is to a cell containing a formula, and returns TRUE or FALSE.
         *
         * @param reference Is a reference to the cell you want to test.  Reference can be a cell reference, a formula, or name that refers to a cell.
         *
         * [Api set: ExcelApi 1.2]
         */
        isFormula(reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is a logical value (TRUE or FALSE), and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isLogical(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is #N/A, and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isNA(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is not text (blank cells are not text), and returns TRUE or FALSE.
         *
         * @param value Is the value you want tested: a cell; a formula; or a name referring to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isNonText(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Checks whether a value is a number, and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isNumber(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns TRUE if the number is odd.
         *
         * @param number Is the value to test.
         *
         * [Api set: ExcelApi 1.2]
         */
        isOdd(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is text, and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isText(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the ISO week number in the year for a given date.
         *
         * @param date Is the date-time code used by Microsoft Excel for date and time calculation.
         *
         * [Api set: ExcelApi 1.2]
         */
        isoWeekNum(date: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest paid during a specific period of an investment.
         *
         * @param rate Interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per Period for which you want to find the interest.
         * @param nper Number of payment periods in an investment.
         * @param pv Lump sum amount that a series of future payments is right now.
         *
         * [Api set: ExcelApi 1.2]
         */
        ispmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is a reference, and returns TRUE or FALSE.
         *
         * @param value Is the value you want to test. Value can refer to a cell, a formula, or a name that refers to a cell, formula, or value.
         *
         * [Api set: ExcelApi 1.2]
         */
        isref(value: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the kurtosis of a data set.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the kurtosis.
         *
         * [Api set: ExcelApi 1.2]
         */
        kurt(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the k-th largest value in a data set. For example, the fifth largest number.
         *
         * @param array Is the array or range of data for which you want to determine the k-th largest value.
         * @param k Is the position (from the largest) in the array or cell range of the value to return.
         *
         * [Api set: ExcelApi 1.2]
         */
        large(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the least common multiple.
         *
         * @param values List of parameters, whose elements are 1 to 255 values for which you want the least common multiple.
         *
         * [Api set: ExcelApi 1.2]
         */
        lcm(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the specified number of characters from the start of a text string.
         *
         * @param text Is the text string containing the characters you want to extract.
         * @param numChars Specifies how many characters you want LEFT to extract; 1 if omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        left(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the start of a text string. Use with double-byte character sets (DBCS).
         *
         * @param text Is the text string containing the characters you want to extract.
         * @param numBytes Specifies how many characters you want LEFT to return.
         *
         * [Api set: ExcelApi 1.2]
         */
        leftb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the number of characters in a text string.
         *
         * @param text Is the text whose length you want to find. Spaces count as characters.
         *
         * [Api set: ExcelApi 1.2]
         */
        len(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of characters in a text string. Use with double-byte character sets (DBCS).
         *
         * @param text Is the text whose length you want to find.
         *
         * [Api set: ExcelApi 1.2]
         */
        lenb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the natural logarithm of a number.
         *
         * @param number Is the positive real number for which you want the natural logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        ln(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logarithm of a number to the base you specify.
         *
         * @param number Is the positive real number for which you want the logarithm.
         * @param base Is the base of the logarithm; 10 if omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        log(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, base?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the base-10 logarithm of a number.
         *
         * @param number Is the positive real number for which you want the base-10 logarithm.
         *
         * [Api set: ExcelApi 1.2]
         */
        log10(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the lognormal distribution of x, where ln(x) is normally distributed with parameters Mean and Standard_dev.
         *
         * @param x Is the value at which to evaluate the function, a positive number.
         * @param mean Is the mean of ln(x).
         * @param standardDev Is the standard deviation of ln(x), a positive number.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        logNorm_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with parameters Mean and Standard_dev.
         *
         * @param probability Is a probability associated with the lognormal distribution, a number between 0 and 1, inclusive.
         * @param mean Is the mean of ln(x).
         * @param standardDev Is the standard deviation of ln(x), a positive number.
         *
         * [Api set: ExcelApi 1.2]
         */
        logNorm_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Looks up a value either from a one-row or one-column range or from an array. Provided for backward compatibility.
         *
         * @param lookupValue Is a value that LOOKUP searches for in lookupVector and can be a number, text, a logical value, or a name or reference to a value.
         * @param lookupVector Is a range that contains only one row or one column of text, numbers, or logical values, placed in ascending order.
         * @param resultVector Is a range that contains only one row or column, the same size as lookupVector.
         *
         * [Api set: ExcelApi 1.2]
         */
        lookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupVector: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, resultVector?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Converts all letters in a text string to lowercase.
         *
         * @param text Is the text you want to convert to lowercase. Characters in Text that are not letters are not changed.
         *
         * [Api set: ExcelApi 1.2]
         */
        lower(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the Macauley modified duration for a security with an assumed par value of $100.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param coupon Is the security's annual coupon rate.
         * @param yld Is the security's annual yield.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        mduration(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.
         *
         * @param values Is an array or a reference to cells that contain numbers that represent a series of payments (negative) and income (positive) at regular periods.
         * @param financeRate Is the interest rate you pay on the money used in the cash flows.
         * @param reinvestRate Is the interest rate you receive on the cash flows as you reinvest them.
         *
         * [Api set: ExcelApi 1.2]
         */
        mirr(values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, financeRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, reinvestRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number rounded to the desired multiple.
         *
         * @param number Is the value to round.
         * @param multiple Is the multiple to which you want to round number.
         *
         * [Api set: ExcelApi 1.2]
         */
        mround(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, multiple: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the relative position of an item in an array that matches a specified value in a specified order.
         *
         * @param lookupValue Is the value you use to find the value you want in the array, a number, text, or logical value, or a reference to one of these.
         * @param lookupArray Is a contiguous range of cells containing possible lookup values, an array of values, or a reference to an array.
         * @param matchType Is a number 1, 0, or -1 indicating which value to return.
         *
         * [Api set: ExcelApi 1.2]
         */
        match(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupArray: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, matchType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the largest value in a set of values. Ignores logical values and text.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.
         *
         * [Api set: ExcelApi 1.2]
         */
        max(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the largest value in a set of values. Does not ignore logical values and text.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the maximum.
         *
         * [Api set: ExcelApi 1.2]
         */
        maxA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the median, or the number in the middle of the set of given numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the median.
         *
         * [Api set: ExcelApi 1.2]
         */
        median(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the characters from the middle of a text string, given a starting position and length.
         *
         * @param text Is the text string from which you want to extract the characters.
         * @param startNum Is the position of the first character you want to extract. The first character in Text is 1.
         * @param numChars Specifies how many characters to return from Text.
         *
         * [Api set: ExcelApi 1.2]
         */
        mid(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns characters from the middle of a text string, given a starting position and length. Use with double-byte character sets (DBCS).
         *
         * @param text Is the text string containing the characters you want to extract.
         * @param startNum Is the position of the first character you want to extract in text.
         * @param numBytes Specifies how many characters to return from text.
         *
         * [Api set: ExcelApi 1.2]
         */
        midb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the smallest number in a set of values. Ignores logical values and text.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.
         *
         * [Api set: ExcelApi 1.2]
         */
        min(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the smallest value in a set of values. Does not ignore logical values and text.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, empty cells, logical values, or text numbers for which you want the minimum.
         *
         * [Api set: ExcelApi 1.2]
         */
        minA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the minute, a number from 0 to 59.
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:00 or 4:48:00 PM.
         *
         * [Api set: ExcelApi 1.2]
         */
        minute(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the remainder after a number is divided by a divisor.
         *
         * @param number Is the number for which you want to find the remainder after the division is performed.
         * @param divisor Is the number by which you want to divide Number.
         *
         * [Api set: ExcelApi 1.2]
         */
        mod(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, divisor: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the month, a number from 1 (January) to 12 (December).
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel.
         *
         * [Api set: ExcelApi 1.2]
         */
        month(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the multinomial of a set of numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 values for which you want the multinomial.
         *
         * [Api set: ExcelApi 1.2]
         */
        multiNomial(...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts non-number value to a number, dates to serial numbers, TRUE to 1, anything else to 0 (zero).
         *
         * @param value Is the value you want converted.
         *
         * [Api set: ExcelApi 1.2]
         */
        n(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate.
         *
         * @param rate Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param pmt Is the payment made each period; it cannot change over the life of the investment.
         * @param pv Is the present value, or the lump-sum amount that a series of future payments is worth now.
         * @param fv Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, zero is used.
         * @param type Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        nper(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the error value #N/A (value not available).
         *
         * [Api set: ExcelApi 1.2]
         */
        na(): FunctionResult<number | string>;
        /**
         *
         * Returns the negative binomial distribution, the probability that there will be Number_f failures before the Number_s-th success, with Probability_s probability of a success.
         *
         * @param numberF Is the number of failures.
         * @param numberS Is the threshold number of successes.
         * @param probabilityS Is the probability of a success; a number between 0 and 1.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        negBinom_Dist(numberF: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of whole workdays between two dates.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param endDate Is a serial date number that represents the end date.
         * @param holidays Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         *
         * [Api set: ExcelApi 1.2]
         */
        networkDays(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of whole workdays between two dates with custom weekend parameters.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param endDate Is a serial date number that represents the end date.
         * @param weekend Is a number or string specifying when weekends occur.
         * @param holidays Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         *
         * [Api set: ExcelApi 1.2]
         */
        networkDays_Intl(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual nominal interest rate.
         *
         * @param effectRate Is the effective interest rate.
         * @param npery Is the number of compounding periods per year.
         *
         * [Api set: ExcelApi 1.2]
         */
        nominal(effectRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the normal distribution for the specified mean and standard deviation.
         *
         * @param x Is the value for which you want the distribution.
         * @param mean Is the arithmetic mean of the distribution.
         * @param standardDev Is the standard deviation of the distribution, a positive number.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        norm_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.
         *
         * @param probability Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.
         * @param mean Is the arithmetic mean of the distribution.
         * @param standardDev Is the standard deviation of the distribution, a positive number.
         *
         * [Api set: ExcelApi 1.2]
         */
        norm_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the standard normal distribution (has a mean of zero and a standard deviation of one).
         *
         * @param z Is the value for which you want the distribution.
         * @param cumulative Is a logical value for the function to return: the cumulative distribution function = TRUE; the probability density function = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        norm_S_Dist(z: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).
         *
         * @param probability Is a probability corresponding to the normal distribution, a number between 0 and 1 inclusive.
         *
         * [Api set: ExcelApi 1.2]
         */
        norm_S_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Changes FALSE to TRUE, or TRUE to FALSE.
         *
         * @param logical Is a value or expression that can be evaluated to TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        not(logical: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<boolean>;
        /**
         *
         * Returns the current date and time formatted as a date and time.
         *
         * [Api set: ExcelApi 1.2]
         */
        now(): FunctionResult<number>;
        /**
         *
         * Returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).
         *
         * @param rate Is the rate of discount over the length of one period.
         * @param values List of parameters, whose elements are 1 to 254 payments and income, equally spaced in time and occurring at the end of each period.
         *
         * [Api set: ExcelApi 1.2]
         */
        npv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts text to number in a locale-independent manner.
         *
         * @param text Is the string representing the number you want to convert.
         * @param decimalSeparator Is the character used as the decimal separator in the string.
         * @param groupSeparator Is the character used as the group separator in the string.
         *
         * [Api set: ExcelApi 1.2]
         */
        numberValue(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimalSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, groupSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to binary.
         *
         * @param number Is the octal number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oct2Bin(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to decimal.
         *
         * @param number Is the octal number you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        oct2Dec(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts an octal number to hexadecimal.
         *
         * @param number Is the octal number you want to convert.
         * @param places Is the number of characters to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oct2Hex(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a positive number up and negative number down to the nearest odd integer.
         *
         * @param number Is the value to round.
         *
         * [Api set: ExcelApi 1.2]
         */
        odd(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security with an odd first period.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param firstCoupon Is the security's first coupon date, expressed as a serial date number.
         * @param rate Is the security's interest rate.
         * @param yld Is the security's annual yield.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oddFPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield of a security with an odd first period.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param firstCoupon Is the security's first coupon date, expressed as a serial date number.
         * @param rate Is the security's interest rate.
         * @param pr Is the security's price.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oddFYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security with an odd last period.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param lastInterest Is the security's last coupon date, expressed as a serial date number.
         * @param rate Is the security's interest rate.
         * @param yld Is the security's annual yield.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oddLPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield of a security with an odd last period.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param lastInterest Is the security's last coupon date, expressed as a serial date number.
         * @param rate Is the security's interest rate.
         * @param pr Is the security's price.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        oddLYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE.
         *
         * @param values List of parameters, whose elements are 1 to 255 conditions that you want to test that can be either TRUE or FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        or(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Returns the number of periods required by an investment to reach a specified value.
         *
         * @param rate Is the interest rate per period.
         * @param pv Is the present value of the investment.
         * @param fv Is the desired future value of the investment.
         *
         * [Api set: ExcelApi 1.2]
         */
        pduration(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, exclusive) of the data set.
         *
         * @param array Is the array or range of data with numeric values that defines relative standing.
         * @param x Is the value for which you want to know the rank.
         * @param significance Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).
         *
         * [Api set: ExcelApi 1.2]
         */
        percentRank_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a value in a data set as a percentage of the data set as a percentage (0..1, inclusive) of the data set.
         *
         * @param array Is the array or range of data with numeric values that defines relative standing.
         * @param x Is the value for which you want to know the rank.
         * @param significance Is an optional value that identifies the number of significant digits for the returned percentage, three digits if omitted (0.xxx%).
         *
         * [Api set: ExcelApi 1.2]
         */
        percentRank_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive.
         *
         * @param array Is the array or range of data that defines relative standing.
         * @param k Is the percentile value that is between 0 through 1, inclusive.
         *
         * [Api set: ExcelApi 1.2]
         */
        percentile_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th percentile of values in a range, where k is in the range 0..1, inclusive.
         *
         * @param array Is the array or range of data that defines relative standing.
         * @param k Is the percentile value that is between 0 through 1, inclusive.
         *
         * [Api set: ExcelApi 1.2]
         */
        percentile_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of permutations for a given number of objects that can be selected from the total objects.
         *
         * @param number Is the total number of objects.
         * @param numberChosen Is the number of objects in each permutation.
         *
         * [Api set: ExcelApi 1.2]
         */
        permut(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.
         *
         * @param number Is the total number of objects.
         * @param numberChosen Is the number of objects in each permutation.
         *
         * [Api set: ExcelApi 1.2]
         */
        permutationa(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the value of the density function for a standard normal distribution.
         *
         * @param x Is the number for which you want the density of the standard normal distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        phi(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the value of Pi, 3.14159265358979, accurate to 15 digits.
         *
         * [Api set: ExcelApi 1.2]
         */
        pi(): FunctionResult<number>;
        /**
         *
         * Calculates the payment for a loan based on constant payments and a constant interest rate.
         *
         * @param rate Is the interest rate per period for the loan. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper Is the total number of payments for the loan.
         * @param pv Is the present value: the total amount that a series of future payments is worth now.
         * @param fv Is the future value, or a cash balance you want to attain after the last payment is made, 0 (zero) if omitted.
         * @param type Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        pmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Poisson distribution.
         *
         * @param x Is the number of events.
         * @param mean Is the expected numeric value, a positive number.
         * @param cumulative Is a logical value: for the cumulative Poisson probability, use TRUE; for the Poisson probability mass function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        poisson_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the result of a number raised to a power.
         *
         * @param number Is the base number, any real number.
         * @param power Is the exponent, to which the base number is raised.
         *
         * [Api set: ExcelApi 1.2]
         */
        power(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, power: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the payment on the principal for a given investment based on periodic, constant payments and a constant interest rate.
         *
         * @param rate Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param per Specifies the period and must be in the range 1 to nper.
         * @param nper Is the total number of payment periods in an investment.
         * @param pv Is the present value: the total amount that a series of future payments is worth now.
         * @param fv Is the future value, or cash balance you want to attain after the last payment is made.
         * @param type Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        ppmt(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security that pays periodic interest.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param rate Is the security's annual coupon rate.
         * @param yld Is the security's annual yield.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        price(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a discounted security.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param discount Is the security's discount rate.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        priceDisc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value of a security that pays interest at maturity.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param rate Is the security's interest rate at date of issue.
         * @param yld Is the security's annual yield.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        priceMat(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Multiplies all the numbers given as arguments.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, logical values, or text representations of numbers that you want to multiply.
         *
         * [Api set: ExcelApi 1.2]
         */
        product(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Converts a text string to proper case; the first letter in each word to uppercase, and all other letters to lowercase.
         *
         * @param text Is text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing text to partially capitalize.
         *
         * [Api set: ExcelApi 1.2]
         */
        proper(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the present value of an investment: the total amount that a series of future payments is worth now.
         *
         * @param rate Is the interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR.
         * @param nper Is the total number of payment periods in an investment.
         * @param pmt Is the payment made each period and cannot change over the life of the investment.
         * @param fv Is the future value, or a cash balance you want to attain after the last payment is made.
         * @param type Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        pv(rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quartile of a data set, based on percentile values from 0..1, exclusive.
         *
         * @param array Is the array or cell range of numeric values for which you want the quartile value.
         * @param quart Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.
         *
         * [Api set: ExcelApi 1.2]
         */
        quartile_Exc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the quartile of a data set, based on percentile values from 0..1, inclusive.
         *
         * @param array Is the array or cell range of numeric values for which you want the quartile value.
         * @param quart Is a number: minimum value = 0; 1st quartile = 1; median value = 2; 3rd quartile = 3; maximum value = 4.
         *
         * [Api set: ExcelApi 1.2]
         */
        quartile_Inc(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the integer portion of a division.
         *
         * @param numerator Is the dividend.
         * @param denominator Is the divisor.
         *
         * [Api set: ExcelApi 1.2]
         */
        quotient(numerator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, denominator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts degrees to radians.
         *
         * @param angle Is an angle in degrees that you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        radians(angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a random number greater than or equal to 0 and less than 1, evenly distributed (changes on recalculation).
         *
         * [Api set: ExcelApi 1.2]
         */
        rand(): FunctionResult<number>;
        /**
         *
         * Returns a random number between the numbers you specify.
         *
         * @param bottom Is the smallest integer RANDBETWEEN will return.
         * @param top Is the largest integer RANDBETWEEN will return.
         *
         * [Api set: ExcelApi 1.2]
         */
        randBetween(bottom: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, top: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the average rank is returned.
         *
         * @param number Is the number for which you want to find the rank.
         * @param ref Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.
         * @param order Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.
         *
         * [Api set: ExcelApi 1.2]
         */
        rank_Avg(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the rank of a number in a list of numbers: its size relative to other values in the list; if more than one value has the same rank, the top rank of that set of values is returned.
         *
         * @param number Is the number for which you want to find the rank.
         * @param ref Is an array of, or a reference to, a list of numbers. Nonnumeric values are ignored.
         * @param order Is a number: rank in the list sorted descending = 0 or omitted; rank in the list sorted ascending = any nonzero value.
         *
         * [Api set: ExcelApi 1.2]
         */
        rank_Eq(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the interest rate per period of a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.
         *
         * @param nper Is the total number of payment periods for the loan or investment.
         * @param pmt Is the payment made each period and cannot change over the life of the loan or investment.
         * @param pv Is the present value: the total amount that a series of future payments is worth now.
         * @param fv Is the future value, or a cash balance you want to attain after the last payment is made. If omitted, uses Fv = 0.
         * @param type Is a logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted.
         * @param guess Is your guess for what the rate will be; if omitted, Guess = 0.1 (10 percent).
         *
         * [Api set: ExcelApi 1.2]
         */
        rate(nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the amount received at maturity for a fully invested security.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param investment Is the amount invested in the security.
         * @param discount Is the security's discount rate.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        received(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Replaces part of a text string with a different text string.
         *
         * @param oldText Is text in which you want to replace some characters.
         * @param startNum Is the position of the character in oldText that you want to replace with newText.
         * @param numChars Is the number of characters in oldText that you want to replace.
         * @param newText Is the text that will replace characters in oldText.
         *
         * [Api set: ExcelApi 1.2]
         */
        replace(oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Replaces part of a text string with a different text string. Use with double-byte character sets (DBCS).
         *
         * @param oldText Is text in which you want to replace some characters.
         * @param startNum Is the position of the character in oldText that you want to replace with newText.
         * @param numBytes Is the number of characters in oldText that you want to replace with newText.
         * @param newText Is the text that will replace characters in oldText.
         *
         * [Api set: ExcelApi 1.2]
         */
        replaceB(oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Repeats text a given number of times. Use REPT to fill a cell with a number of instances of a text string.
         *
         * @param text Is the text you want to repeat.
         * @param numberTimes Is a positive number specifying the number of times to repeat text.
         *
         * [Api set: ExcelApi 1.2]
         */
        rept(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberTimes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the end of a text string.
         *
         * @param text Is the text string that contains the characters you want to extract.
         * @param numChars Specifies how many characters you want to extract, 1 if omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        right(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the specified number of characters from the end of a text string. Use with double-byte character sets (DBCS).
         *
         * @param text Is the text string containing the characters you want to extract.
         * @param numBytes Specifies how many characters you want to extract.
         *
         * [Api set: ExcelApi 1.2]
         */
        rightb(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts an Arabic numeral to Roman, as text.
         *
         * @param number Is the Arabic numeral you want to convert.
         * @param form Is the number specifying the type of Roman numeral you want.
         *
         * [Api set: ExcelApi 1.2]
         */
        roman(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, form?: boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Rounds a number to a specified number of digits.
         *
         * @param number Is the number you want to round.
         * @param numDigits Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero to the nearest integer.
         *
         * [Api set: ExcelApi 1.2]
         */
        round(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number down, toward zero.
         *
         * @param number Is any real number that you want rounded down.
         * @param numDigits Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.
         *
         * [Api set: ExcelApi 1.2]
         */
        roundDown(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Rounds a number up, away from zero.
         *
         * @param number Is any real number that you want rounded up.
         * @param numDigits Is the number of digits to which you want to round. Negative rounds to the left of the decimal point; zero or omitted, to the nearest integer.
         *
         * [Api set: ExcelApi 1.2]
         */
        roundUp(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of rows in a reference or array.
         *
         * @param array Is an array, an array formula, or a reference to a range of cells for which you want the number of rows.
         *
         * [Api set: ExcelApi 1.2]
         */
        rows(array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns an equivalent interest rate for the growth of an investment.
         *
         * @param nper Is the number of periods for the investment.
         * @param pv Is the present value of the investment.
         * @param fv Is the future value of the investment.
         *
         * [Api set: ExcelApi 1.2]
         */
        rri(nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the secant of an angle.
         *
         * @param number Is the angle in radians for which you want the secant.
         *
         * [Api set: ExcelApi 1.2]
         */
        sec(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic secant of an angle.
         *
         * @param number Is the angle in radians for which you want the hyperbolic secant.
         *
         * [Api set: ExcelApi 1.2]
         */
        sech(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the second, a number from 0 to 59.
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel or text in time format, such as 16:48:23 or 4:48:47 PM.
         *
         * [Api set: ExcelApi 1.2]
         */
        second(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sum of a power series based on the formula.
         *
         * @param x Is the input value to the power series.
         * @param n Is the initial power to which you want to raise x.
         * @param m Is the step by which to increase n for each term in the series.
         * @param coefficients Is a set of coefficients by which each successive power of x is multiplied.
         *
         * [Api set: ExcelApi 1.2]
         */
        seriesSum(x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, m: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coefficients: Excel.Range | string | number | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sheet number of the referenced sheet.
         *
         * @param value Is the name of a sheet or a reference that you want the sheet number of.  If omitted the number of the sheet containing the function is returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        sheet(value?: Excel.Range | string | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the number of sheets in a reference.
         *
         * @param reference Is a reference for which you want to know the number of sheets it contains.  If omitted the number of sheets in the workbook containing the function is returned.
         *
         * [Api set: ExcelApi 1.2]
         */
        sheets(reference?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sign of a number: 1 if the number is positive, zero if the number is zero, or -1 if the number is negative.
         *
         * @param number Is any real number.
         *
         * [Api set: ExcelApi 1.2]
         */
        sign(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the sine of an angle.
         *
         * @param number Is the angle in radians for which you want the sine. Degrees * PI()/180 = radians.
         *
         * [Api set: ExcelApi 1.2]
         */
        sin(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic sine of a number.
         *
         * @param number Is any real number.
         *
         * [Api set: ExcelApi 1.2]
         */
        sinh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the skewness of a distribution: a characterization of the degree of asymmetry of a distribution around its mean.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers or names, arrays, or references that contain numbers for which you want the skewness.
         *
         * [Api set: ExcelApi 1.2]
         */
        skew(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.
         *
         * @param values List of parameters, whose elements are 1 to 254 numbers or names, arrays, or references that contain numbers for which you want the population skewness.
         *
         * [Api set: ExcelApi 1.2]
         */
        skew_p(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the straight-line depreciation of an asset for one period.
         *
         * @param cost Is the initial cost of the asset.
         * @param salvage Is the salvage value at the end of the life of the asset.
         * @param life Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         *
         * [Api set: ExcelApi 1.2]
         */
        sln(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the k-th smallest value in a data set. For example, the fifth smallest number.
         *
         * @param array Is an array or range of numerical data for which you want to determine the k-th smallest value.
         * @param k Is the position (from the smallest) in the array or range of the value to return.
         *
         * [Api set: ExcelApi 1.2]
         */
        small(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of a number.
         *
         * @param number Is the number for which you want the square root.
         *
         * [Api set: ExcelApi 1.2]
         */
        sqrt(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the square root of (number * Pi).
         *
         * @param number Is the number by which p is multiplied.
         *
         * [Api set: ExcelApi 1.2]
         */
        sqrtPi(number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates standard deviation based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * @param values List of parameters, whose elements are 1 to 255 values corresponding to a sample of a population and can be values or names or references to values.
         *
         * [Api set: ExcelApi 1.2]
         */
        stDevA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates standard deviation based on an entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * @param values List of parameters, whose elements are 1 to 255 values corresponding to a population and can be values, names, arrays, or references that contain values.
         *
         * [Api set: ExcelApi 1.2]
         */
        stDevPA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates standard deviation based on the entire population given as arguments (ignores logical values and text).
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers corresponding to a population and can be numbers or references that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         */
        stDev_P(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Estimates standard deviation based on a sample (ignores logical values and text in the sample).
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers corresponding to a sample of a population and can be numbers or references that contain numbers.
         *
         * [Api set: ExcelApi 1.2]
         */
        stDev_S(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns a normalized value from a distribution characterized by a mean and standard deviation.
         *
         * @param x Is the value you want to normalize.
         * @param mean Is the arithmetic mean of the distribution.
         * @param standardDev Is the standard deviation of the distribution, a positive number.
         *
         * [Api set: ExcelApi 1.2]
         */
        standardize(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Replaces existing text with new text in a text string.
         *
         * @param text Is the text or the reference to a cell containing text in which you want to substitute characters.
         * @param oldText Is the existing text you want to replace. If the case of oldText does not match the case of text, SUBSTITUTE will not replace the text.
         * @param newText Is the text you want to replace oldText with.
         * @param instanceNum Specifies which occurrence of oldText you want to replace. If omitted, every instance of oldText is replaced.
         *
         * [Api set: ExcelApi 1.2]
         */
        substitute(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, instanceNum?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns a subtotal in a list or database.
         *
         * @param functionNum Is the number 1 to 11 that specifies the summary function for the subtotal.
         * @param values List of parameters, whose elements are 1 to 254 ranges or references for which you want the subtotal.
         *
         * [Api set: ExcelApi 1.2]
         */
        subtotal(functionNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Adds all the numbers in a range of cells.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers to sum. Logical values and text are ignored in cells, included if typed as arguments.
         *
         * [Api set: ExcelApi 1.2]
         */
        sum(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Adds the cells specified by a given condition or criteria.
         *
         * @param range Is the range of cells you want evaluated.
         * @param criteria Is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.
         * @param sumRange Are the actual cells to sum. If omitted, the cells in range are used.
         *
         * [Api set: ExcelApi 1.2]
         */
        sumIf(range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sumRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Adds the cells specified by a given set of conditions or criteria.
         *
         * @param sumRange Are the actual cells to sum.
         * @param values List of parameters, where the first element of each pair is the Is the range of cells you want evaluated for the particular condition , and the second element is is the condition or criteria in the form of a number, expression, or text that defines which cells will be added.
         *
         * [Api set: ExcelApi 1.2]
         */
        sumIfs(sumRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>): FunctionResult<number>;
        /**
         *
         * Returns the sum of the squares of the arguments. The arguments can be numbers, arrays, names, or references to cells that contain numbers.
         *
         * @param values List of parameters, whose elements are 1 to 255 numbers, arrays, names, or references to arrays for which you want the sum of the squares.
         *
         * [Api set: ExcelApi 1.2]
         */
        sumSq(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the sum-of-years' digits depreciation of an asset for a specified period.
         *
         * @param cost Is the initial cost of the asset.
         * @param salvage Is the salvage value at the end of the life of the asset.
         * @param life Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param per Is the period and must use the same units as Life.
         *
         * [Api set: ExcelApi 1.2]
         */
        syd(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not.
         *
         * @param value Is the value to test.
         *
         * [Api set: ExcelApi 1.2]
         */
        t(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the bond-equivalent yield for a treasury bill.
         *
         * @param settlement Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param discount Is the Treasury bill's discount rate.
         *
         * [Api set: ExcelApi 1.2]
         */
        tbillEq(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the price per $100 face value for a treasury bill.
         *
         * @param settlement Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param discount Is the Treasury bill's discount rate.
         *
         * [Api set: ExcelApi 1.2]
         */
        tbillPrice(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield for a treasury bill.
         *
         * @param settlement Is the Treasury bill's settlement date, expressed as a serial date number.
         * @param maturity Is the Treasury bill's maturity date, expressed as a serial date number.
         * @param pr Is the Treasury Bill's price per $100 face value.
         *
         * [Api set: ExcelApi 1.2]
         */
        tbillYield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the left-tailed Student's t-distribution.
         *
         * @param x Is the numeric value at which to evaluate the distribution.
         * @param degFreedom Is an integer indicating the number of degrees of freedom that characterize the distribution.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability density function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        t_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the two-tailed Student's t-distribution.
         *
         * @param x Is the numeric value at which to evaluate the distribution.
         * @param degFreedom Is an integer indicating the number of degrees of freedom that characterize the distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        t_Dist_2T(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the right-tailed Student's t-distribution.
         *
         * @param x Is the numeric value at which to evaluate the distribution.
         * @param degFreedom Is an integer indicating the number of degrees of freedom that characterize the distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        t_Dist_RT(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the left-tailed inverse of the Student's t-distribution.
         *
         * @param probability Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive.
         * @param degFreedom Is a positive integer indicating the number of degrees of freedom to characterize the distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        t_Inv(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the two-tailed inverse of the Student's t-distribution.
         *
         * @param probability Is the probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive.
         * @param degFreedom Is a positive integer indicating the number of degrees of freedom to characterize the distribution.
         *
         * [Api set: ExcelApi 1.2]
         */
        t_Inv_2T(probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the tangent of an angle.
         *
         * @param number Is the angle in radians for which you want the tangent. Degrees * PI()/180 = radians.
         *
         * [Api set: ExcelApi 1.2]
         */
        tan(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the hyperbolic tangent of a number.
         *
         * @param number Is any real number.
         *
         * [Api set: ExcelApi 1.2]
         */
        tanh(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a value to text in a specific number format.
         *
         * @param value Is a number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value.
         * @param formatText Is a number format in text form from the Category box on the Number tab in the Format Cells dialog box (not General).
         *
         * [Api set: ExcelApi 1.2]
         */
        text(value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, formatText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Converts hours, minutes, and seconds given as numbers to an Excel serial number, formatted with a time format.
         *
         * @param hour Is a number from 0 to 23 representing the hour.
         * @param minute Is a number from 0 to 59 representing the minute.
         * @param second Is a number from 0 to 59 representing the second.
         *
         * [Api set: ExcelApi 1.2]
         */
        time(hour: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minute: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, second: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text time to an Excel serial number for a time, a number from 0 (12:00:00 AM) to 0.999988426 (11:59:59 PM). Format the number with a time format after entering the formula.
         *
         * @param timeText Is a text string that gives a time in any one of the Microsoft Excel time formats (date information in the string is ignored).
         *
         * [Api set: ExcelApi 1.2]
         */
        timevalue(timeText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the current date formatted as a date.
         *
         * [Api set: ExcelApi 1.2]
         */
        today(): FunctionResult<number>;
        /**
         *
         * Removes all spaces from a text string except for single spaces between words.
         *
         * @param text Is the text from which you want spaces removed.
         *
         * [Api set: ExcelApi 1.2]
         */
        trim(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the mean of the interior portion of a set of data values.
         *
         * @param array Is the range or array of values to trim and average.
         * @param percent Is the fractional number of data points to exclude from the top and bottom of the data set.
         *
         * [Api set: ExcelApi 1.2]
         */
        trimMean(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, percent: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the logical value TRUE.
         *
         * [Api set: ExcelApi 1.2]
         */
        true(): FunctionResult<boolean>;
        /**
         *
         * Truncates a number to an integer by removing the decimal, or fractional, part of the number.
         *
         * @param number Is the number you want to truncate.
         * @param numDigits Is a number specifying the precision of the truncation, 0 (zero) if omitted.
         *
         * [Api set: ExcelApi 1.2]
         */
        trunc(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns an integer representing the data type of a value: number = 1; text = 2; logical value = 4; error value = 16; array = 64.
         *
         * @param value Can be any value.
         *
         * [Api set: ExcelApi 1.2]
         */
        type(value: boolean | string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a number to text, using currency format.
         *
         * @param number Is a number, a reference to a cell containing a number, or a formula that evaluates to a number.
         * @param decimals Is the number of digits to the right of the decimal point.
         *
         * [Api set: ExcelApi 1.2]
         */
        usdollar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the Unicode character referenced by the given numeric value.
         *
         * @param number Is the Unicode number representing a character.
         *
         * [Api set: ExcelApi 1.2]
         */
        unichar(number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Returns the number (code point) corresponding to the first character of the text.
         *
         * @param text Is the character that you want the Unicode value of.
         *
         * [Api set: ExcelApi 1.2]
         */
        unicode(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Converts a text string to all uppercase letters.
         *
         * @param text Is the text you want converted to uppercase, a reference or a text string.
         *
         * [Api set: ExcelApi 1.2]
         */
        upper(text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<string>;
        /**
         *
         * Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify. By default, the table must be sorted in an ascending order.
         *
         * @param lookupValue Is the value to be found in the first column of the table, and can be a value, a reference, or a text string.
         * @param tableArray Is a table of text, numbers, or logical values, in which data is retrieved. tableArray can be a reference to a range or a range name.
         * @param colIndexNum Is the column number in tableArray from which the matching value should be returned. The first column of values in the table is column 1.
         * @param rangeLookup Is a logical value: to find the closest match in the first column (sorted in ascending order) = TRUE or omitted; find an exact match = FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        vlookup(lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, colIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number | string | boolean>;
        /**
         *
         * Converts a text string that represents a number to a number.
         *
         * @param text Is the text enclosed in quotation marks or a reference to a cell containing the text you want to convert.
         *
         * [Api set: ExcelApi 1.2]
         */
        value(text: string | boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * @param values List of parameters, whose elements are 1 to 255 value arguments corresponding to a sample of a population.
         *
         * [Api set: ExcelApi 1.2]
         */
        varA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population, including logical values and text. Text and the logical value FALSE have the value 0; the logical value TRUE has the value 1.
         *
         * @param values List of parameters, whose elements are 1 to 255 value arguments corresponding to a population.
         *
         * [Api set: ExcelApi 1.2]
         */
        varPA(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Calculates variance based on the entire population (ignores logical values and text in the population).
         *
         * @param values List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a population.
         *
         * [Api set: ExcelApi 1.2]
         */
        var_P(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Estimates variance based on a sample (ignores logical values and text in the sample).
         *
         * @param values List of parameters, whose elements are 1 to 255 numeric arguments corresponding to a sample of a population.
         *
         * [Api set: ExcelApi 1.2]
         */
        var_S(...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<number>;
        /**
         *
         * Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify.
         *
         * @param cost Is the initial cost of the asset.
         * @param salvage Is the salvage value at the end of the life of the asset.
         * @param life Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
         * @param startPeriod Is the starting period for which you want to calculate the depreciation, in the same units as Life.
         * @param endPeriod Is the ending period for which you want to calculate the depreciation, in the same units as Life.
         * @param factor Is the rate at which the balance declines, 2 (double-declining balance) if omitted.
         * @param noSwitch Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE.
         *
         * [Api set: ExcelApi 1.2]
         */
        vdb(cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noSwitch?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the week number in the year.
         *
         * @param serialNumber Is the date-time code used by Microsoft Excel for date and time calculation.
         * @param returnType Is a number (1 or 2) that determines the type of the return value.
         *
         * [Api set: ExcelApi 1.2]
         */
        weekNum(serialNumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a number from 1 to 7 identifying the day of the week of a date.
         *
         * @param serialNumber Is a number that represents a date.
         * @param returnType Is a number: for Sunday=1 through Saturday=7, use 1; for Monday=1 through Sunday=7, use 2; for Monday=0 through Sunday=6, use 3.
         *
         * [Api set: ExcelApi 1.2]
         */
        weekday(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the Weibull distribution.
         *
         * @param x Is the value at which to evaluate the function, a nonnegative number.
         * @param alpha Is a parameter to the distribution, a positive number.
         * @param beta Is a parameter to the distribution, a positive number.
         * @param cumulative Is a logical value: for the cumulative distribution function, use TRUE; for the probability mass function, use FALSE.
         *
         * [Api set: ExcelApi 1.2]
         */
        weibull_Dist(x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date before or after a specified number of workdays.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param days Is the number of nonweekend and non-holiday days before or after startDate.
         * @param holidays Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         *
         * [Api set: ExcelApi 1.2]
         */
        workDay(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the serial number of the date before or after a specified number of workdays with custom weekend parameters.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param days Is the number of nonweekend and non-holiday days before or after startDate.
         * @param weekend Is a number or string specifying when weekends occur.
         * @param holidays Is an optional array of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays.
         *
         * [Api set: ExcelApi 1.2]
         */
        workDay_Intl(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the internal rate of return for a schedule of cash flows.
         *
         * @param values Is a series of cash flows that correspond to a schedule of payments in dates.
         * @param dates Is a schedule of payment dates that corresponds to the cash flow payments.
         * @param guess Is a number that you guess is close to the result of XIRR.
         *
         * [Api set: ExcelApi 1.2]
         */
        xirr(values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the net present value for a schedule of cash flows.
         *
         * @param rate Is the discount rate to apply to the cash flows.
         * @param values Is a series of cash flows that correspond to a schedule of payments in dates.
         * @param dates Is a schedule of payment dates that corresponds to the cash flow payments.
         *
         * [Api set: ExcelApi 1.2]
         */
        xnpv(rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns a logical 'Exclusive Or' of all arguments.
         *
         * @param values List of parameters, whose elements are 1 to 254 conditions you want to test that can be either TRUE or FALSE and can be logical values, arrays, or references.
         *
         * [Api set: ExcelApi 1.2]
         */
        xor(...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>): FunctionResult<boolean>;
        /**
         *
         * Returns the year of a date, an integer in the range 1900 - 9999.
         *
         * @param serialNumber Is a number in the date-time code used by Microsoft Excel.
         *
         * [Api set: ExcelApi 1.2]
         */
        year(serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the year fraction representing the number of whole days between start_date and end_date.
         *
         * @param startDate Is a serial date number that represents the start date.
         * @param endDate Is a serial date number that represents the end date.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        yearFrac(startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the yield on a security that pays periodic interest.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param rate Is the security's annual coupon rate.
         * @param pr Is the security's price per $100 face value.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param frequency Is the number of coupon payments per year.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        yield(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual yield for a discounted security. For example, a treasury bill.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param pr Is the security's price per $100 face value.
         * @param redemption Is the security's redemption value per $100 face value.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        yieldDisc(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the annual yield of a security that pays interest at maturity.
         *
         * @param settlement Is the security's settlement date, expressed as a serial date number.
         * @param maturity Is the security's maturity date, expressed as a serial date number.
         * @param issue Is the security's issue date, expressed as a serial date number.
         * @param rate Is the security's interest rate at date of issue.
         * @param pr Is the security's price per $100 face value.
         * @param basis Is the type of day count basis to use.
         *
         * [Api set: ExcelApi 1.2]
         */
        yieldMat(settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        /**
         *
         * Returns the one-tailed P-value of a z-test.
         *
         * @param array Is the array or range of data against which to test X.
         * @param x Is the value to test.
         * @param sigma Is the population (known) standard deviation. If omitted, the sample standard deviation is used.
         *
         * [Api set: ExcelApi 1.2]
         */
        z_Test(array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sigma?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>): FunctionResult<number>;
        toJSON(): {};
    }
    module ErrorCodes {
        var accessDenied: string;
        var apiNotFound: string;
        var generalException: string;
        var insertDeleteConflict: string;
        var invalidArgument: string;
        var invalidBinding: string;
        var invalidOperation: string;
        var invalidReference: string;
        var invalidSelection: string;
        var itemAlreadyExists: string;
        var itemNotFound: string;
        var notImplemented: string;
        var unsupportedOperation: string;
    }
}
declare module Excel {
    /**
     * The RequestContext object facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the request context is required to get access to the Excel object model from the add-in.
     */
    class RequestContext extends OfficeExtension.ClientRequestContext {
        constructor(url?: string);
        workbook: Workbook;
    }
    /**
     * Executes a batch script that performs actions on the Excel object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using a new remote RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param object - A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the remote RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param object - A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the RequestContext of previously-created API objects.
     * @param objects - An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Excel object model, using the remote RequestContext of previously-created API objects.
     * @param requestInfo - The URL of the remote workbook and the request headers to be sent.
     * @param objects - An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the RequestContext is required to get access to the Excel object model from the add-in.
     */
    function run<T>(requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
}



////////////////////////////////////////////////////////////////
//////////////////////// End Excel APIs ////////////////////////
////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
//////////////////////// Begin Word APIs ///////////////////////
////////////////////////////////////////////////////////////////


declare module Word {
    /**
     *
     * The Application object.
     *
     * [Api set: WordApi 1.3]
     */
    class Application extends OfficeExtension.ClientObject {
        /**
         *
         * Creates a new document by using a base64 encoded .docx file.
         *
         * @param base64File Optional. The base64 encoded .docx file. The default value is null.
         *
         * [Api set: WordApi 1.3]
         */
        createDocument(base64File?: string): Word.Document;
        /**
         * Create a new instance of Word.Application object
         */
        static newObject(context: OfficeExtension.ClientRequestContext): Word.Application;
        toJSON(): {};
    }
    /**
     *
     * Represents the body of a document or a section.
     *
     * [Api set: WordApi 1.1]
     */
    class Body extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of rich text content control objects in the body. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the body. Use this to get and set font name, size, color and other properties. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects in the body. The collection does not include floating images. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the collection of list objects in the body. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        lists: Word.ListCollection;
        /**
         *
         * Gets the collection of paragraph objects in the body. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the parent body of the body. For example, a table cell body's parent body could be a header. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentBody: Word.Body;
        /**
         *
         * Gets the content control that contains the body. Returns a null object if there isn't a parent content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the parent section of the body. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentSection: Word.Section;
        /**
         *
         * Gets the collection of table objects in the body. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        tables: Word.TableCollection;
        /**
         *
         * Gets or sets the style name for the body. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the "styleBuiltIn" property.
         *
         * [Api set: WordApi 1.1]
         */
        style: string;
        /**
         *
         * Gets or sets the built-in style name for the body. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the "style" property.
         *
         * [Api set: WordApi 1.3]
         */
        styleBuiltIn: string;
        /**
         *
         * Gets the text of the body. Use the insertText method to insert text. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        text: string;
        /**
         *
         * Gets the type of the body. The type can be 'MainDoc', 'Section', 'Header', 'Footer', or 'TableCell'. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        type: string;
        /**
         *
         * Clears the contents of the body object. The user can perform the undo operation on the cleared content.
         *
         * [Api set: WordApi 1.1]
         */
        clear(): void;
        /**
         *
         * Gets the HTML representation of the body object.
         *
         * [Api set: WordApi 1.1]
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the OOXML (Office Open XML) representation of the body object.
         *
         * [Api set: WordApi 1.1]
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the whole body, or the starting or ending point of the body, as a range.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Start', 'End', 'After' or 'Content'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Inserts a break at the specified location in the main document. The insertLocation value can be 'Start' or 'End'.
         *
         * @param breakType Required. The break type to add to the body.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the body object with a Rich Text content control.
         *
         * [Api set: WordApi 1.1]
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document into the body at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. The base64 encoded content of a .docx file.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in the document.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a picture into the body at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param base64EncodedImage Required. The base64 encoded image to be inserted in the body.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         *
         * [Api set: WordApi 1.2]
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML at the specified location.  The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts a table with the specified number of rows and columns. The insertLocation value can be 'Start' or 'End'.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertTable(rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>): Word.Table;
        /**
         *
         * Inserts text into the body at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the body object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.1]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects the body and navigates the Word UI to it.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.1]
         */
        select(selectionMode?: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Body;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Body;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Body;
        toJSON(): {
            "font": Font;
            "style": string;
            "styleBuiltIn": string;
            "text": string;
            "type": string;
        };
    }
    /**
     *
     * Represents a content control. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported.
     *
     * [Api set: WordApi 1.1]
     */
    class ContentControl extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of content control objects in the content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the content control. Use this to get and set font name, size, color, and other properties. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects in the content control. The collection does not include floating images. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the collection of list objects in the content control. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        lists: Word.ListCollection;
        /**
         *
         * Get the collection of paragraph objects in the content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the parent body of the content control. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentBody: Word.Body;
        /**
         *
         * Gets the content control that contains the content control. Returns a null object if there isn't a parent content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the table that contains the content control. Returns a null object if it is not contained in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the table cell that contains the content control. Returns a null object if it is not contained in a table cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTableCell: Word.TableCell;
        /**
         *
         * Gets the collection of table objects in the content control. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        tables: Word.TableCollection;
        /**
         *
         * Gets or sets the appearance of the content control. The value can be 'boundingBox', 'tags' or 'hidden'.
         *
         * [Api set: WordApi 1.1]
         */
        appearance: string;
        /**
         *
         * Gets or sets a value that indicates whether the user can delete the content control. Mutually exclusive with removeWhenEdited.
         *
         * [Api set: WordApi 1.1]
         */
        cannotDelete: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the user can edit the contents of the content control.
         *
         * [Api set: WordApi 1.1]
         */
        cannotEdit: boolean;
        /**
         *
         * Gets or sets the color of the content control. Color is specified in '#RRGGBB' format or by using the color name.
         *
         * [Api set: WordApi 1.1]
         */
        color: string;
        /**
         *
         * Gets an integer that represents the content control identifier. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        id: number;
        /**
         *
         * Gets or sets the placeholder text of the content control. Dimmed text will be displayed when the content control is empty.
         *
         * [Api set: WordApi 1.1]
         */
        placeholderText: string;
        /**
         *
         * Gets or sets a value that indicates whether the content control is removed after it is edited. Mutually exclusive with cannotDelete.
         *
         * [Api set: WordApi 1.1]
         */
        removeWhenEdited: boolean;
        /**
         *
         * Gets or sets the style name for the content control. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the "styleBuiltIn" property.
         *
         * [Api set: WordApi 1.1]
         */
        style: string;
        /**
         *
         * Gets or sets the built-in style name for the content control. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the "style" property.
         *
         * [Api set: WordApi 1.3]
         */
        styleBuiltIn: string;
        /**
         *
         * Gets the content control subtype. The subtype can be 'RichTextInline', 'RichTextParagraphs', 'RichTextTableCell', 'RichTextTableRow' and 'RichTextTable' for rich text content controls. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        subtype: string;
        /**
         *
         * Gets or sets a tag to identify a content control.
         *
         * [Api set: WordApi 1.1]
         */
        tag: string;
        /**
         *
         * Gets the text of the content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        text: string;
        /**
         *
         * Gets or sets the title for a content control.
         *
         * [Api set: WordApi 1.1]
         */
        title: string;
        /**
         *
         * Gets the content control type. Only rich text content controls are supported currently. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        type: string;
        /**
         *
         * Clears the contents of the content control. The user can perform the undo operation on the cleared content.
         *
         * [Api set: WordApi 1.1]
         */
        clear(): void;
        /**
         *
         * Deletes the content control and its content. If keepContent is set to true, the content is not deleted.
         *
         * @param keepContent Required. Indicates whether the content should be deleted with the content control. If keepContent is set to true, the content is not deleted.
         *
         * [Api set: WordApi 1.1]
         */
        delete(keepContent: boolean): void;
        /**
         *
         * Gets the HTML representation of the content control object.
         *
         * [Api set: WordApi 1.1]
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the Office Open XML (OOXML) representation of the content control object.
         *
         * [Api set: WordApi 1.1]
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the whole content control, or the starting or ending point of the content control, as a range.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Before', 'Start', 'End', 'After' or 'Content'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Gets the text ranges in the content control by using punctuation marks and/or other ending marks.
         *
         * @param endingMarks Required. The punctuation marks and/or other ending marks as an array of strings.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        getTextRanges(endingMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
        /**
         *
         * Inserts a break at the specified location in the main document. The insertLocation value can be 'Start', 'End', 'Before' or 'After'. This method cannot be used with 'RichTextTable', 'RichTextTableRow' and 'RichTextTableCell' content controls.
         *
         * @param breakType Required. Type of break.
         * @param insertLocation Required. The value can be 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Inserts a document into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. The base64 encoded content of a .docx file.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'. 'Replace' cannot be used with 'RichTextTable' and 'RichTextTableRow' content controls.
         *
         * [Api set: WordApi 1.1]
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'. 'Replace' cannot be used with 'RichTextTable' and 'RichTextTableRow' content controls.
         *
         * [Api set: WordApi 1.1]
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts an inline picture into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64EncodedImage Required. The base64 encoded image to be inserted in the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'. 'Replace' cannot be used with 'RichTextTable' and 'RichTextTableRow' content controls.
         *
         * [Api set: WordApi 1.2]
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML into the content control at the specified location.  The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'. 'Replace' cannot be used with 'RichTextTable' and 'RichTextTableRow' content controls.
         *
         * [Api set: WordApi 1.1]
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Start', 'End', 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragrph text to be inserted.
         * @param insertLocation Required. The value can be 'Start', 'End', 'Before' or 'After'. 'Before' and 'After' cannot be used with 'RichTextTable', 'RichTextTableRow' and 'RichTextTableCell' content controls.
         *
         * [Api set: WordApi 1.1]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts a table with the specified number of rows and columns into, or next to, a content control. The insertLocation value can be 'Start', 'End', 'Before' or 'After'.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param insertLocation Required. The value can be 'Start', 'End', 'Before' or 'After'. 'Before' and 'After' cannot be used with 'RichTextTable', 'RichTextTableRow' and 'RichTextTableCell' content controls.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertTable(rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>): Word.Table;
        /**
         *
         * Inserts text into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. The text to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'. 'Replace' cannot be used with 'RichTextTable' and 'RichTextTableRow' content controls.
         *
         * [Api set: WordApi 1.1]
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the content control object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.1]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects the content control. This causes Word to scroll to the selection.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.1]
         */
        select(selectionMode?: string): void;
        /**
         *
         * Splits the content control into child ranges by using delimiters.
         *
         * @param delimiters Required. The delimiters as an array of strings.
         * @param multiParagraphs Optional. Indicates whether a returned child range can cover multiple paragraphs. Default is false which indicates that the paragraph boundaries are also used as delimiters.
         * @param trimDelimiters Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        split(delimiters: Array<string>, multiParagraphs?: boolean, trimDelimiters?: boolean, trimSpacing?: boolean): Word.RangeCollection;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ContentControl;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.ContentControl;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.ContentControl;
        toJSON(): {
            "appearance": string;
            "cannotDelete": boolean;
            "cannotEdit": boolean;
            "color": string;
            "font": Font;
            "id": number;
            "placeholderText": string;
            "removeWhenEdited": boolean;
            "style": string;
            "styleBuiltIn": string;
            "subtype": string;
            "tag": string;
            "text": string;
            "title": string;
            "type": string;
        };
    }
    /**
     *
     * Contains a collection of [contentControl](contentControl.md) objects. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported.
     *
     * [Api set: WordApi 1.1]
     */
    class ContentControlCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.ContentControl>;
        /**
         *
         * Gets a content control by its identifier.
         *
         * @param id Required. A content control identifier.
         *
         * [Api set: WordApi 1.1]
         */
        getById(id: number): Word.ContentControl;
        /**
         *
         * Gets the content controls that have the specified tag.
         *
         * @param tag Required. A tag set on a content control.
         *
         * [Api set: WordApi 1.1]
         */
        getByTag(tag: string): Word.ContentControlCollection;
        /**
         *
         * Gets the content controls that have the specified title.
         *
         * @param title Required. The title of a content control.
         *
         * [Api set: WordApi 1.1]
         */
        getByTitle(title: string): Word.ContentControlCollection;
        /**
         *
         * Gets the content controls that have the specified types and/or subtypes.
         *
         * @param types Required. An array of content control types and/or subtypes.
         *
         * [Api set: WordApi 1.3]
         */
        getByTypes(types: Array<string>): Word.ContentControlCollection;
        /**
         *
         * Gets the first content control in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.ContentControl;
        /**
         *
         * Gets a content control by its index in the collection.
         *
         * @param index The index.
         *
         * [Api set: WordApi 1.1]
         */
        getItem(index: number): Word.ContentControl;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ContentControlCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.ContentControlCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.ContentControlCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a custom property.
     *
     * [Api set: WordApi 1.3]
     */
    class CustomProperty extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the key of the custom property. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        key: string;
        /**
         *
         * Gets the value type of the custom property. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        type: string;
        /**
         *
         * Gets or sets the value of the custom property.
         *
         * [Api set: WordApi 1.3]
         */
        value: any;
        /**
         *
         * Deletes the custom property.
         *
         * [Api set: WordApi 1.3]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.CustomProperty;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.CustomProperty;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.CustomProperty;
        toJSON(): {
            "key": string;
            "type": string;
            "value": any;
        };
    }
    /**
     *
     * Contains the collection of [customProperty](customProperty.md) objects.
     *
     * [Api set: WordApi 1.3]
     */
    class CustomPropertyCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.CustomProperty>;
        /**
         *
         * Deletes all custom properties in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        deleteAll(): void;
        /**
         *
         * Gets the count of custom properties.
         *
         * [Api set: WordApi 1.3]
         */
        getCount(): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets a custom property object by its key, which is case-insensitive.
         *
         * @param key The key that identifies the custom property object.
         *
         * [Api set: WordApi 1.3]
         */
        getItem(key: string): Word.CustomProperty;
        /**
         *
         * Creates or sets a custom property.
         *
         * @param key Required. The custom property's key, which is case-insensitive.
         * @param value Required. The custom property's value.
         *
         * [Api set: WordApi 1.3]
         */
        set(key: string, value: any): Word.CustomProperty;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.CustomPropertyCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.CustomPropertyCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.CustomPropertyCollection;
        toJSON(): {};
    }
    /**
     *
     * The Document object is the top level object. A Document object contains one or more sections, content controls, and the body that contains the contents of the document.
     *
     * [Api set: WordApi 1.1]
     */
    class Document extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the body object of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        body: Word.Body;
        /**
         *
         * Gets the collection of content control objects in the current document. This includes content controls in the body of the document, headers, footers, textboxes, etc.. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the properties of the current document. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        properties: Word.DocumentProperties;
        /**
         *
         * Gets the collection of section objects in the document. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        sections: Word.SectionCollection;
        /**
         *
         * Indicates whether the changes in the document have been saved. A value of true indicates that the document hasn't changed since it was saved. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        saved: boolean;
        /**
         *
         * Gets the current selection of the document. Multiple selections are not supported.
         *
         * [Api set: WordApi 1.1]
         */
        getSelection(): Word.Range;
        /**
         *
         * Open the document.
         *
         * [Api set: WordApi 1.3]
         */
        open(): void;
        /**
         *
         * Saves the document. This will use the Word default file naming convention if the document has not been saved before.
         *
         * [Api set: WordApi 1.1]
         */
        save(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Document;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Document;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Document;
        toJSON(): {
            "body": Body;
            "properties": DocumentProperties;
            "saved": boolean;
        };
    }
    /**
     *
     * Represents document properties.
     *
     * [Api set: WordApi 1.3]
     */
    class DocumentProperties extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of custom properties of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        customProperties: Word.CustomPropertyCollection;
        /**
         *
         * Gets the application name of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        applicationName: string;
        /**
         *
         * Gets or sets the author of the document.
         *
         * [Api set: WordApi 1.3]
         */
        author: string;
        /**
         *
         * Gets or sets the category of the document.
         *
         * [Api set: WordApi 1.3]
         */
        category: string;
        /**
         *
         * Gets or sets the comments of the document.
         *
         * [Api set: WordApi 1.3]
         */
        comments: string;
        /**
         *
         * Gets or sets the company of the document.
         *
         * [Api set: WordApi 1.3]
         */
        company: string;
        /**
         *
         * Gets the creation date of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        creationDate: Date;
        /**
         *
         * Gets or sets the format of the document.
         *
         * [Api set: WordApi 1.3]
         */
        format: string;
        /**
         *
         * Gets or sets the keywords of the document.
         *
         * [Api set: WordApi 1.3]
         */
        keywords: string;
        /**
         *
         * Gets or sets the last author of the document.
         *
         * [Api set: WordApi 1.3]
         */
        lastAuthor: string;
        /**
         *
         * Gets the last print date of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        lastPrintDate: Date;
        /**
         *
         * Gets the last save time of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        lastSaveTime: Date;
        /**
         *
         * Gets or sets the manager of the document.
         *
         * [Api set: WordApi 1.3]
         */
        manager: string;
        /**
         *
         * Gets the revision number of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        revisionNumber: string;
        /**
         *
         * Gets the security of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        security: number;
        /**
         *
         * Gets or sets the subject of the document.
         *
         * [Api set: WordApi 1.3]
         */
        subject: string;
        /**
         *
         * Gets the template of the document. Read only.
         *
         * [Api set: WordApi 1.3]
         */
        template: string;
        /**
         *
         * Gets or sets the title of the document.
         *
         * [Api set: WordApi 1.3]
         */
        title: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.DocumentProperties;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.DocumentProperties;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.DocumentProperties;
        toJSON(): {
            "applicationName": string;
            "author": string;
            "category": string;
            "comments": string;
            "company": string;
            "creationDate": Date;
            "format": string;
            "keywords": string;
            "lastAuthor": string;
            "lastPrintDate": Date;
            "lastSaveTime": Date;
            "manager": string;
            "revisionNumber": string;
            "security": number;
            "subject": string;
            "template": string;
            "title": string;
        };
    }
    /**
     *
     * Represents a font.
     *
     * [Api set: WordApi 1.1]
     */
    class Font extends OfficeExtension.ClientObject {
        /**
         *
         * Gets or sets a value that indicates whether the font is bold. True if the font is formatted as bold, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        bold: boolean;
        /**
         *
         * Gets or sets the color for the specified font. You can provide the value in the '#RRGGBB' format or the color name.
         *
         * [Api set: WordApi 1.1]
         */
        color: string;
        /**
         *
         * Gets or sets a value that indicates whether the font has a double strike through. True if the font is formatted as double strikethrough text, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        doubleStrikeThrough: boolean;
        /**
         *
         * Gets or sets the highlight color. To set it, use a value either in the '#RRGGBB' format or the color name. To remove highlight color, set it to null. The returned highlight color can be in the '#RRGGBB' format, or an empty string for mixed highlight colors, or null for no highlight color.
         *
         * [Api set: WordApi 1.1]
         */
        highlightColor: string;
        /**
         *
         * Gets or sets a value that indicates whether the font is italicized. True if the font is italicized, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        italic: boolean;
        /**
         *
         * Gets or sets a value that represents the name of the font.
         *
         * [Api set: WordApi 1.1]
         */
        name: string;
        /**
         *
         * Gets or sets a value that represents the font size in points.
         *
         * [Api set: WordApi 1.1]
         */
        size: number;
        /**
         *
         * Gets or sets a value that indicates whether the font has a strike through. True if the font is formatted as strikethrough text, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        strikeThrough: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the font is a subscript. True if the font is formatted as subscript, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        subscript: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the font is a superscript. True if the font is formatted as superscript, otherwise, false.
         *
         * [Api set: WordApi 1.1]
         */
        superscript: boolean;
        /**
         *
         * Gets or sets a value that indicates the font's underline type. 'None' if the font is not underlined.
         *
         * [Api set: WordApi 1.1]
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Font;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Font;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Font;
        toJSON(): {
            "bold": boolean;
            "color": string;
            "doubleStrikeThrough": boolean;
            "highlightColor": string;
            "italic": boolean;
            "name": string;
            "size": number;
            "strikeThrough": boolean;
            "subscript": boolean;
            "superscript": boolean;
            "underline": string;
        };
    }
    /**
     *
     * Represents an inline picture.
     *
     * [Api set: WordApi 1.1]
     */
    class InlinePicture extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the parent paragraph that contains the inline image. Read-only.
         *
         * [Api set: WordApi 1.2]
         */
        paragraph: Word.Paragraph;
        /**
         *
         * Gets the content control that contains the inline image. Returns a null object if there isn't a parent content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the table that contains the inline image. Returns a null object if it is not contained in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the table cell that contains the inline image. Returns a null object if it is not contained in a table cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTableCell: Word.TableCell;
        /**
         *
         * Gets or sets a string that represents the alternative text associated with the inline image
         *
         * [Api set: WordApi 1.1]
         */
        altTextDescription: string;
        /**
         *
         * Gets or sets a string that contains the title for the inline image.
         *
         * [Api set: WordApi 1.1]
         */
        altTextTitle: string;
        /**
         *
         * Gets or sets a number that describes the height of the inline image.
         *
         * [Api set: WordApi 1.1]
         */
        height: number;
        /**
         *
         * Gets or sets a hyperlink on the image. Use a newline character ('\n') to separate the address part from the optional location part.
         *
         * [Api set: WordApi 1.1]
         */
        hyperlink: string;
        /**
         *
         * Gets or sets a value that indicates whether the inline image retains its original proportions when you resize it.
         *
         * [Api set: WordApi 1.1]
         */
        lockAspectRatio: boolean;
        /**
         *
         * Gets or sets a number that describes the width of the inline image.
         *
         * [Api set: WordApi 1.1]
         */
        width: number;
        /**
         *
         * Deletes the inline picture from the document.
         *
         * [Api set: WordApi 1.2]
         */
        delete(): void;
        /**
         *
         * Gets the base64 encoded string representation of the inline image.
         *
         * [Api set: WordApi 1.1]
         */
        getBase64ImageSrc(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the next inline image.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.InlinePicture;
        /**
         *
         * Gets the picture, or the starting or ending point of the picture, as a range.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Inserts a break at the specified location in the main document. The insertLocation value can be 'Before' or 'After'.
         *
         * @param breakType Required. The break type to add.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the inline picture with a rich text content control.
         *
         * [Api set: WordApi 1.1]
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param base64File Required. The base64 encoded content of a .docx file.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param html Required. The HTML to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts an inline picture at the specified location. The insertLocation value can be 'Replace', 'Before' or 'After'.
         *
         * @param base64EncodedImage Required. The base64 encoded image to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML at the specified location.  The insertLocation value can be 'Before' or 'After'.
         *
         * @param ooxml Required. The OOXML to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts text at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Selects the inline picture. This causes Word to scroll to the selection.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.2]
         */
        select(selectionMode?: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.InlinePicture;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.InlinePicture;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.InlinePicture;
        toJSON(): {
            "altTextDescription": string;
            "altTextTitle": string;
            "height": number;
            "hyperlink": string;
            "lockAspectRatio": boolean;
            "width": number;
        };
    }
    /**
     *
     * Contains a collection of [inlinePicture](inlinePicture.md) objects.
     *
     * [Api set: WordApi 1.1]
     */
    class InlinePictureCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.InlinePicture>;
        /**
         *
         * Gets the first inline image in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.InlinePicture;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.InlinePictureCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.InlinePictureCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.InlinePictureCollection;
        toJSON(): {};
    }
    /**
     *
     * Contains a collection of [paragraph](paragraph.md) objects.
     *
     * [Api set: WordApi 1.3]
     */
    class List extends OfficeExtension.ClientObject {
        /**
         *
         * Gets paragraphs in the list. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the list's id.
         *
         * [Api set: WordApi 1.3]
         */
        id: number;
        /**
         *
         * Checks whether each of the 9 levels exists in the list. A true value indicates the level exists, which means there is at least one list item at that level. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        levelExistences: Array<boolean>;
        /**
         *
         * Gets all 9 level types in the list. Each type can be 'Bullet', 'Number' or 'Picture'. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        levelTypes: Array<string>;
        /**
         *
         * Gets the paragraphs that occur at the specified level in the list.
         *
         * @param level Required. The level in the list.
         *
         * [Api set: WordApi 1.3]
         */
        getLevelParagraphs(level: number): Word.ParagraphCollection;
        /**
         *
         * Gets the bullet, number or picture at the specified level as a string.
         *
         * @param level Required. The level in the list.
         *
         * [Api set: WordApi 1.3]
         */
        getLevelString(level: number): OfficeExtension.ClientResult<string>;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Start', 'End', 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.3]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Sets the alignment of the bullet, number or picture at the specified level in the list.
         *
         * @param level Required. The level in the list.
         * @param alignment Required. The level alignment that can be 'left', 'centered' or 'right'.
         *
         * [Api set: WordApi 1.3]
         */
        setLevelAlignment(level: number, alignment: string): void;
        /**
         *
         * Sets the bullet format at the specified level in the list. If the bullet is 'Custom', the charCode is required.
         *
         * @param level Required. The level in the list.
         * @param listBullet Required. The bullet.
         * @param charCode Optional. The bullet character's code value. Used only if the bullet is 'Custom'.
         * @param fontName Optional. The bullet's font name. Used only if the bullet is 'Custom'.
         *
         * [Api set: WordApi 1.3]
         */
        setLevelBullet(level: number, listBullet: string, charCode?: number, fontName?: string): void;
        /**
         *
         * Sets the two indents of the specified level in the list.
         *
         * @param level Required. The level in the list.
         * @param textIndent Required. The text indent in points. It is the same as paragraph left indent.
         * @param textIndent Required. The relative indent, in points, of the bullet, number or picture. It is the same as paragraph first line indent.
         *
         * [Api set: WordApi 1.3]
         */
        setLevelIndents(level: number, textIndent: number, bulletNumberPictureIndent: number): void;
        /**
         *
         * Sets the numbering format at the specified level in the list.
         *
         * @param level Required. The level in the list.
         * @param listNumbering Required. The ordinal format.
         * @param formatString Optional. The numbering string format defined as an array of strings and/or integers. Each integer is a level of number type that is higher than or equal to this level. For example, an array of ["(", level - 1, ".", level, ")"] can define the format of "(2.c)", where 2 is the parent's item number and c is this level's item number.
         *
         * [Api set: WordApi 1.3]
         */
        setLevelNumbering(level: number, listNumbering: string, formatString?: Array<any>): void;
        /**
         *
         * Sets the starting number at the specified level in the list. Default value is 1.
         *
         * @param level Required. The level in the list.
         * @param startingNumber Required. The number to start with.
         *
         * [Api set: WordApi 1.3]
         */
        setLevelStartingNumber(level: number, startingNumber: number): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.List;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.List;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.List;
        toJSON(): {
            "id": number;
            "levelExistences": boolean[];
            "levelTypes": string[];
        };
    }
    /**
     *
     * Contains a collection of [list](list.md) objects.
     *
     * [Api set: WordApi 1.3]
     */
    class ListCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.List>;
        /**
         *
         * Gets a list by its identifier.
         *
         * @param id Required. A list identifier.
         *
         * [Api set: WordApi 1.3]
         */
        getById(id: number): Word.List;
        /**
         *
         * Gets the first list in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.List;
        /**
         *
         * Gets a list object by its index in the collection.
         *
         * @param index A number that identifies the index location of a list object.
         *
         * [Api set: WordApi 1.3]
         */
        getItem(index: number): Word.List;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ListCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.ListCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.ListCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents the paragraph list item format.
     *
     * [Api set: WordApi 1.3]
     */
    class ListItem extends OfficeExtension.ClientObject {
        /**
         *
         * Gets or sets the level of the item in the list.
         *
         * [Api set: WordApi 1.3]
         */
        level: number;
        /**
         *
         * Gets the list item bullet, number or picture as a string. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        listString: string;
        /**
         *
         * Gets the list item order number in relation to its siblings. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        siblingIndex: number;
        /**
         *
         * Gets the list item parent, or the closest ancestor if the parent does not exist.
         *
         * @param parentOnly Optional. Specified only the list item's parent will be returned. The default is false that specifies to get the lowest ancestor.
         *
         * [Api set: WordApi 1.3]
         */
        getAncestor(parentOnly?: boolean): Word.Paragraph;
        /**
         *
         * Gets all descendant list items of the list item.
         *
         * @param directChildrenOnly Optional. Specified only the list item's direct children will be returned. The default is false that indicates to get all descendant items.
         *
         * [Api set: WordApi 1.3]
         */
        getDescendants(directChildrenOnly?: boolean): Word.ParagraphCollection;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ListItem;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.ListItem;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.ListItem;
        toJSON(): {
            "level": number;
            "listString": string;
            "siblingIndex": number;
        };
    }
    /**
     *
     * Represents a single paragraph in a selection, range, content control, or document body.
     *
     * [Api set: WordApi 1.1]
     */
    class Paragraph extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of content control objects in the paragraph. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the paragraph. Use this to get and set font name, size, color, and other properties. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects in the paragraph. The collection does not include floating images. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the List to which this paragraph belongs. Returns a null object if the paragraph is not in a list. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        list: Word.List;
        /**
         *
         * Gets the ListItem for the paragraph. Returns a null object if the paragraph is not part of a list. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        listItem: Word.ListItem;
        /**
         *
         * Gets the parent body of the paragraph. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentBody: Word.Body;
        /**
         *
         * Gets the content control that contains the paragraph. Returns a null object if there isn't a parent content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the table that contains the paragraph. Returns a null object if it is not contained in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the table cell that contains the paragraph. Returns a null object if it is not contained in a table cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTableCell: Word.TableCell;
        /**
         *
         * Gets or sets the alignment for a paragraph. The value can be 'left', 'centered', 'right', or 'justified'.
         *
         * [Api set: WordApi 1.1]
         */
        alignment: string;
        /**
         *
         * Gets or sets the value, in points, for a first line or hanging indent. Use a positive value to set a first-line indent, and use a negative value to set a hanging indent.
         *
         * [Api set: WordApi 1.1]
         */
        firstLineIndent: number;
        /**
         *
         * Indicates the paragraph is the last one inside its parent body. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        isLastParagraph: boolean;
        /**
         *
         * Checks whether the paragraph is a list item. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        isListItem: boolean;
        /**
         *
         * Gets or sets the left indent value, in points, for the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        leftIndent: number;
        /**
         *
         * Gets or sets the line spacing, in points, for the specified paragraph. In the Word UI, this value is divided by 12.
         *
         * [Api set: WordApi 1.1]
         */
        lineSpacing: number;
        /**
         *
         * Gets or sets the amount of spacing, in grid lines. after the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        lineUnitAfter: number;
        /**
         *
         * Gets or sets the amount of spacing, in grid lines, before the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        lineUnitBefore: number;
        /**
         *
         * Gets or sets the outline level for the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        outlineLevel: number;
        /**
         *
         * Gets or sets the right indent value, in points, for the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        rightIndent: number;
        /**
         *
         * Gets or sets the spacing, in points, after the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        spaceAfter: number;
        /**
         *
         * Gets or sets the spacing, in points, before the paragraph.
         *
         * [Api set: WordApi 1.1]
         */
        spaceBefore: number;
        /**
         *
         * Gets or sets the style name for the paragraph. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the "styleBuiltIn" property.
         *
         * [Api set: WordApi 1.1]
         */
        style: string;
        /**
         *
         * Gets or sets the built-in style name for the paragraph. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the "style" property.
         *
         * [Api set: WordApi 1.3]
         */
        styleBuiltIn: string;
        /**
         *
         * Gets the level of the paragraph's table. It returns 0 if the paragraph is not in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        tableNestingLevel: number;
        /**
         *
         * Gets the text of the paragraph. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        text: string;
        /**
         *
         * Lets the paragraph join an existing list at the specified level. Fails if the paragraph cannot join the list or if the paragraph is already a list item.
         *
         * @param listId Required. The ID of an existing list.
         * @param level Required. The level in the list.
         *
         * [Api set: WordApi 1.3]
         */
        attachToList(listId: number, level: number): Word.List;
        /**
         *
         * Clears the contents of the paragraph object. The user can perform the undo operation on the cleared content.
         *
         * [Api set: WordApi 1.1]
         */
        clear(): void;
        /**
         *
         * Deletes the paragraph and its content from the document.
         *
         * [Api set: WordApi 1.1]
         */
        delete(): void;
        /**
         *
         * Moves this paragraph out of its list, if the paragraph is a list item.
         *
         * [Api set: WordApi 1.3]
         */
        detachFromList(): void;
        /**
         *
         * Gets the HTML representation of the paragraph object.
         *
         * [Api set: WordApi 1.1]
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the next paragraph.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.Paragraph;
        /**
         *
         * Gets the Office Open XML (OOXML) representation of the paragraph object.
         *
         * [Api set: WordApi 1.1]
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the previous paragraph.
         *
         * [Api set: WordApi 1.3]
         */
        getPrevious(): Word.Paragraph;
        /**
         *
         * Gets the whole paragraph, or the starting or ending point of the paragraph, as a range.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Start', 'End', 'After' or 'Content'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Gets the text ranges in the paragraph by using punctuation marks and/or other ending marks.
         *
         * @param endingMarks Required. The punctuation marks and/or other ending marks as an array of strings.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        getTextRanges(endingMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
        /**
         *
         * Inserts a break at the specified location in the main document. The insertLocation value can be 'Before' or 'After'.
         *
         * @param breakType Required. The break type to add to the document.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the paragraph object with a rich text content control.
         *
         * [Api set: WordApi 1.1]
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. The base64 encoded content of a .docx file.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in the paragraph.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a picture into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64EncodedImage Required. The base64 encoded image to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted in the paragraph.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts a table with the specified number of rows and columns. The insertLocation value can be 'Before' or 'After'.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertTable(rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>): Word.Table;
        /**
         *
         * Inserts text into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         *
         * [Api set: WordApi 1.1]
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the paragraph object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.1]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects and navigates the Word UI to the paragraph.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.1]
         */
        select(selectionMode?: string): void;
        /**
         *
         * Splits the paragraph into child ranges by using delimiters.
         *
         * @param delimiters Required. The delimiters as an array of strings.
         * @param trimDelimiters Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        split(delimiters: Array<string>, trimDelimiters?: boolean, trimSpacing?: boolean): Word.RangeCollection;
        /**
         *
         * Starts a new list with this paragraph. Fails if the paragraph is already a list item.
         *
         * [Api set: WordApi 1.3]
         */
        startNewList(): Word.List;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Paragraph;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Paragraph;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Paragraph;
        toJSON(): {
            "alignment": string;
            "firstLineIndent": number;
            "font": Font;
            "isLastParagraph": boolean;
            "isListItem": boolean;
            "leftIndent": number;
            "lineSpacing": number;
            "lineUnitAfter": number;
            "lineUnitBefore": number;
            "listItem": ListItem;
            "outlineLevel": number;
            "rightIndent": number;
            "spaceAfter": number;
            "spaceBefore": number;
            "style": string;
            "styleBuiltIn": string;
            "tableNestingLevel": number;
            "text": string;
        };
    }
    /**
     *
     * Contains a collection of [paragraph](paragraph.md) objects.
     *
     * [Api set: WordApi 1.1]
     */
    class ParagraphCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Paragraph>;
        /**
         *
         * Gets the first paragraph in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.Paragraph;
        /**
         *
         * Gets the last paragraph in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getLast(): Word.Paragraph;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ParagraphCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.ParagraphCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.ParagraphCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a contiguous area in a document.
     *
     * [Api set: WordApi 1.1]
     */
    class Range extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the collection of content control objects in the range. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the range. Use this to get and set font name, size, color, and other properties. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inline picture objects in the range. Read-only.
         *
         * [Api set: WordApi 1.2]
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the collection of list objects in the range. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        lists: Word.ListCollection;
        /**
         *
         * Gets the collection of paragraph objects in the range. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the parent body of the range. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentBody: Word.Body;
        /**
         *
         * Gets the content control that contains the range. Returns a null object if there isn't a parent content control. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the table that contains the range. Returns null if it is not contained in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the table cell that contains the range. Returns a null object if it is not contained in a table cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTableCell: Word.TableCell;
        /**
         *
         * Gets the collection of table objects in the range. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        tables: Word.TableCollection;
        /**
         *
         * Gets the first hyperlink in the range, or sets a hyperlink on the range. All hyperlinks in the range are deleted when you set a new hyperlink on the range. Use a newline character ('\n') to separate the address part from the optional location part.
         *
         * [Api set: WordApi 1.3]
         */
        hyperlink: string;
        /**
         *
         * Checks whether the range length is zero. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        isEmpty: boolean;
        /**
         *
         * Gets or sets the style name for the range. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the "styleBuiltIn" property.
         *
         * [Api set: WordApi 1.1]
         */
        style: string;
        /**
         *
         * Gets or sets the built-in style name for the range. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the "style" property.
         *
         * [Api set: WordApi 1.3]
         */
        styleBuiltIn: string;
        /**
         *
         * Gets the text of the range. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        text: string;
        /**
         *
         * Clears the contents of the range object. The user can perform the undo operation on the cleared content.
         *
         * [Api set: WordApi 1.1]
         */
        clear(): void;
        /**
         *
         * Compares this range's location with another range's location.
         *
         * @param range Required. The range to compare with this range.
         *
         * [Api set: WordApi 1.3]
         */
        compareLocationWith(range: Word.Range): OfficeExtension.ClientResult<string>;
        /**
         *
         * Deletes the range and its content from the document.
         *
         * [Api set: WordApi 1.1]
         */
        delete(): void;
        /**
         *
         * Returns a new range that extends from this range in either direction to cover another range. This range is not changed.
         *
         * @param range Required. Another range.
         *
         * [Api set: WordApi 1.3]
         */
        expandTo(range: Word.Range): Word.Range;
        /**
         *
         * Gets the HTML representation of the range object.
         *
         * [Api set: WordApi 1.1]
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets hyperlink child ranges within the range.
         *
         * [Api set: WordApi 1.3]
         */
        getHyperlinkRanges(): Word.RangeCollection;
        /**
         *
         * Gets the next text range by using punctuation marks and/or other ending marks.
         *
         * @param endingMarks Required. The punctuation marks and/or other ending marks as an array of strings.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the returned range. Default is false which indicates that spacing characters at the start and end of the range are included.
         *
         * [Api set: WordApi 1.3]
         */
        getNextTextRange(endingMarks: Array<string>, trimSpacing?: boolean): Word.Range;
        /**
         *
         * Gets the OOXML representation of the range object.
         *
         * [Api set: WordApi 1.1]
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Clones the range, or gets the starting or ending point of the range as a new range.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Start', 'End', 'After' or 'Content'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Gets the text child ranges in the range by using punctuation marks and/or other ending marks.
         *
         * @param endingMarks Required. The punctuation marks and/or other ending marks as an array of strings.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        getTextRanges(endingMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
        /**
         *
         * Inserts a break at the specified location in the main document. The insertLocation value can be 'Before' or 'After'.
         *
         * @param breakType Required. The break type to add.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the range object with a rich text content control.
         *
         * [Api set: WordApi 1.1]
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document at the specified location. The insertLocation value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * @param base64File Required. The base64 encoded content of a .docx file.
         * @param insertLocation Required. The value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML at the specified location. The insertLocation value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * @param html Required. The HTML to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a picture at the specified location. The insertLocation value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * @param base64EncodedImage Required. The base64 encoded image to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.2]
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML at the specified location.  The insertLocation value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * @param ooxml Required. The OOXML to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts a table with the specified number of rows and columns. The insertLocation value can be 'Before' or 'After'.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertTable(rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>): Word.Table;
        /**
         *
         * Inserts text at the specified location. The insertLocation value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start', 'End', 'Before' or 'After'.
         *
         * [Api set: WordApi 1.1]
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Returns a new range as the intersection of this range with another range. This range is not changed.
         *
         * @param range Required. Another range.
         *
         * [Api set: WordApi 1.3]
         */
        intersectWith(range: Word.Range): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the range object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.1]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects and navigates the Word UI to the range.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.1]
         */
        select(selectionMode?: string): void;
        /**
         *
         * Splits the range into child ranges by using delimiters.
         *
         * @param delimiters Required. The delimiters as an array of strings.
         * @param multiParagraphs Optional. Indicates whether a returned child range can cover multiple paragraphs. Default is false which indicates that the paragraph boundaries are also used as delimiters.
         * @param trimDelimiters Optional. Indicates whether to trim delimiters from the ranges in the range collection. Default is false which indicates that the delimiters are included in the ranges returned in the range collection.
         * @param trimSpacing Optional. Indicates whether to trim spacing characters (spaces, tabs, column breaks and paragraph end marks) from the start and end of the ranges returned in the range collection. Default is false which indicates that spacing characters at the start and end of the ranges are included in the range collection.
         *
         * [Api set: WordApi 1.3]
         */
        split(delimiters: Array<string>, multiParagraphs?: boolean, trimDelimiters?: boolean, trimSpacing?: boolean): Word.RangeCollection;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Range;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Range;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Range;
        toJSON(): {
            "font": Font;
            "hyperlink": string;
            "isEmpty": boolean;
            "style": string;
            "styleBuiltIn": string;
            "text": string;
        };
    }
    /**
     *
     * Contains a collection of [range](range.md) objects.
     *
     * [Api set: WordApi 1.3]
     */
    class RangeCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Range>;
        /**
         *
         * Gets the first range in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.RangeCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.RangeCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.RangeCollection;
        toJSON(): {};
    }
    /**
     *
     * Specifies the options to be included in a search operation.
     *
     * [Api set: WordApi 1.1]
     */
    class SearchOptions extends OfficeExtension.ClientObject {
        matchWildCards: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to ignore all punctuation characters between words. Corresponds to the Ignore punctuation check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        ignorePunct: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to ignore all whitespace between words. Corresponds to the Ignore whitespace characters check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        ignoreSpace: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to perform a case sensitive search. Corresponds to the Match case check box in the Find and Replace dialog box (Edit menu).
         *
         * [Api set: WordApi 1.1]
         */
        matchCase: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to match words that begin with the search string. Corresponds to the Match prefix check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        matchPrefix: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to match words that end with the search string. Corresponds to the Match suffix check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        matchSuffix: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to find operation only entire words, not text that is part of a larger word. Corresponds to the Find whole words only check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        matchWholeWord: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the search will be performed using special search operators. Corresponds to the Use wildcards check box in the Find and Replace dialog box.
         *
         * [Api set: WordApi 1.1]
         */
        matchWildcards: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.SearchOptions;
        /**
         * Create a new instance of Word.SearchOptions object
         */
        static newObject(context: OfficeExtension.ClientRequestContext): Word.SearchOptions;
        toJSON(): {
            "ignorePunct": boolean;
            "ignoreSpace": boolean;
            "matchCase": boolean;
            "matchPrefix": boolean;
            "matchSuffix": boolean;
            "matchWholeWord": boolean;
            "matchWildcards": boolean;
        };
    }
    /**
     *
     * Represents a section in a Word document.
     *
     * [Api set: WordApi 1.1]
     */
    class Section extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the body object of the section. This does not include the header/footer and other section metadata. Read-only.
         *
         * [Api set: WordApi 1.1]
         */
        body: Word.Body;
        /**
         *
         * Gets or sets a value that indicates whether even-numbered pages have a different header and footer from odd-numbered pages in the section.
         *
         * [Api set: WordApi 1.3]
         */
        headerFooterEvenPageDifferent: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the first page has a different header and footer from the other pages in the section.
         *
         * [Api set: WordApi 1.3]
         */
        headerFooterFirstPageDifferent: boolean;
        /**
         *
         * Gets one of the section's footers.
         *
         * @param type Required. The type of footer to return. This value can be: 'primary', 'firstPage' or 'evenPages'.
         *
         * [Api set: WordApi 1.1]
         */
        getFooter(type: string): Word.Body;
        /**
         *
         * Gets one of the section's headers.
         *
         * @param type Required. The type of header to return. This value can be: 'primary', 'firstPage' or 'evenPages'.
         *
         * [Api set: WordApi 1.1]
         */
        getHeader(type: string): Word.Body;
        /**
         *
         * Gets the next section.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.Section;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Section;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Section;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Section;
        toJSON(): {
            "body": Body;
            "headerFooterEvenPageDifferent": boolean;
            "headerFooterFirstPageDifferent": boolean;
        };
    }
    /**
     *
     * Contains the collection of the document's [section](section.md) objects.
     *
     * [Api set: WordApi 1.1]
     */
    class SectionCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Section>;
        /**
         *
         * Gets the first section in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.Section;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.SectionCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.SectionCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.SectionCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a table in a Word document.
     *
     * [Api set: WordApi 1.3]
     */
    class Table extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the font. Use this to get and set font name, size, color, and other properties. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        font: Word.Font;
        /**
         *
         * Gets the paragraph after the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        paragraphAfter: Word.Paragraph;
        /**
         *
         * Gets the paragraph before the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        paragraphBefore: Word.Paragraph;
        /**
         *
         * Gets the parent body of the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentBody: Word.Body;
        /**
         *
         * Gets the content control that contains the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets the table that contains this table. Returns a null object if it is not contained in a table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the table cell that contains this table. Returns a null object if it is not contained in a table cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTableCell: Word.TableCell;
        /**
         *
         * Gets all of the table rows. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        rows: Word.TableRowCollection;
        /**
         *
         * Gets the child tables nested one level deeper. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        tables: Word.TableCollection;
        /**
         *
         * Gets or sets the alignment of the table against the page column. The value can be 'left', 'centered' or 'right'.
         *
         * [Api set: WordApi 1.3]
         */
        alignment: string;
        /**
         *
         * Gets and sets the number of header rows.
         *
         * [Api set: WordApi 1.3]
         */
        headerRowCount: number;
        /**
         *
         * Gets the height of the table in points. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        height: number;
        /**
         *
         * Gets and sets the horizontal alignment of every cell in the table. The value can be 'left', 'centered', 'right', or 'justified'.
         *
         * [Api set: WordApi 1.3]
         */
        horizontalAlignment: string;
        /**
         *
         * Indicates whether all of the table rows are uniform. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        isUniform: boolean;
        /**
         *
         * Gets the nesting level of the table. Top-level tables have level 1. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        nestingLevel: number;
        /**
         *
         * Gets the number of rows in the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        rowCount: number;
        /**
         *
         * Gets and sets the shading color.
         *
         * [Api set: WordApi 1.3]
         */
        shadingColor: string;
        /**
         *
         * Gets or sets the style name for the table. Use this property for custom styles and localized style names. To use the built-in styles that are portable between locales, see the "styleBuiltIn" property.
         *
         * [Api set: WordApi 1.3]
         */
        style: string;
        /**
         *
         * Gets and sets whether the table has banded columns.
         *
         * [Api set: WordApi 1.3]
         */
        styleBandedColumns: boolean;
        /**
         *
         * Gets and sets whether the table has banded rows.
         *
         * [Api set: WordApi 1.3]
         */
        styleBandedRows: boolean;
        /**
         *
         * Gets or sets the built-in style name for the table. Use this property for built-in styles that are portable between locales. To use custom styles or localized style names, see the "style" property.
         *
         * [Api set: WordApi 1.3]
         */
        styleBuiltIn: string;
        /**
         *
         * Gets and sets whether the table has a first column with a special style.
         *
         * [Api set: WordApi 1.3]
         */
        styleFirstColumn: boolean;
        /**
         *
         * Gets and sets whether the table has a last column with a special style.
         *
         * [Api set: WordApi 1.3]
         */
        styleLastColumn: boolean;
        /**
         *
         * Gets and sets whether the table has a total (last) row with a special style.
         *
         * [Api set: WordApi 1.3]
         */
        styleTotalRow: boolean;
        /**
         *
         * Gets and sets the text values in the table, as a 2D Javascript array.
         *
         * [Api set: WordApi 1.3]
         */
        values: Array<Array<string>>;
        /**
         *
         * Gets and sets the vertical alignment of every cell in the table. The value can be 'top', 'center' or 'bottom'.
         *
         * [Api set: WordApi 1.3]
         */
        verticalAlignment: string;
        /**
         *
         * Gets and sets the width of the table in points.
         *
         * [Api set: WordApi 1.3]
         */
        width: number;
        /**
         *
         * Adds columns to the start or end of the table, using the first or last existing column as a template. This is applicable to uniform tables. The string values, if specified, are set in the newly inserted rows.
         *
         * @param insertLocation Required. It can be 'Start' or 'End', corresponding to the appropriate side of the table.
         * @param columnCount Required. Number of columns to add.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        addColumns(insertLocation: string, columnCount: number, values?: Array<Array<string>>): void;
        /**
         *
         * Adds rows to the start or end of the table, using the first or last existing row as a template. The string values, if specified, are set in the newly inserted rows.
         *
         * @param insertLocation Required. It can be 'Start' or 'End'.
         * @param rowCount Required. Number of rows to add.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        addRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): Word.TableRowCollection;
        /**
         *
         * Autofits the table columns to the width of their contents.
         *
         * [Api set: WordApi 1.3]
         */
        autoFitContents(): void;
        /**
         *
         * Autofits the table columns to the width of the window.
         *
         * [Api set: WordApi 1.3]
         */
        autoFitWindow(): void;
        /**
         *
         * Clears the contents of the table.
         *
         * [Api set: WordApi 1.3]
         */
        clear(): void;
        /**
         *
         * Deletes the entire table.
         *
         * [Api set: WordApi 1.3]
         */
        delete(): void;
        /**
         *
         * Deletes specific columns. This is applicable to uniform tables.
         *
         * @param columnIndex Required. The first column to delete.
         * @param columnCount Optional. The number of columns to delete. Default 1.
         *
         * [Api set: WordApi 1.3]
         */
        deleteColumns(columnIndex: number, columnCount?: number): void;
        /**
         *
         * Deletes specific rows.
         *
         * @param rowIndex Required. The first row to delete.
         * @param rowCount Optional. The number of rows to delete. Default 1.
         *
         * [Api set: WordApi 1.3]
         */
        deleteRows(rowIndex: number, rowCount?: number): void;
        /**
         *
         * Distributes the column widths evenly.
         *
         * [Api set: WordApi 1.3]
         */
        distributeColumns(): void;
        /**
         *
         * Distributes the row heights evenly.
         *
         * [Api set: WordApi 1.3]
         */
        distributeRows(): void;
        /**
         *
         * Gets the border style for the specified border.
         *
         * @param borderLocation Required. The border location.
         *
         * [Api set: WordApi 1.3]
         */
        getBorder(borderLocation: string): Word.TableBorder;
        /**
         *
         * Gets the table cell at a specified row and column.
         *
         * @param rowIndex Required. The index of the row.
         * @param cellIndex Required. The index of the cell in the row.
         *
         * [Api set: WordApi 1.3]
         */
        getCell(rowIndex: number, cellIndex: number): Word.TableCell;
        /**
         *
         * Gets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        getCellPadding(cellPaddingLocation: string): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets the next table.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.Table;
        /**
         *
         * Gets the range that contains this table, or the range at the start or end of the table.
         *
         * @param rangeLocation Optional. The range location can be 'Whole', 'Start', 'End' or 'After'.
         *
         * [Api set: WordApi 1.3]
         */
        getRange(rangeLocation?: string): Word.Range;
        /**
         *
         * Inserts a content control on the table.
         *
         * [Api set: WordApi 1.3]
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         *
         * [Api set: WordApi 1.3]
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts a table with the specified number of rows and columns. The insertLocation value can be 'Before' or 'After'.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertTable(rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>): Word.Table;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the table object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.3]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects the table, or the position at the start or end of the table, and navigates the Word UI to it.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.3]
         */
        select(selectionMode?: string): void;
        /**
         *
         * Sets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        setCellPadding(cellPaddingLocation: string, cellPadding: number): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Table;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.Table;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.Table;
        toJSON(): {
            "alignment": string;
            "font": Font;
            "headerRowCount": number;
            "height": number;
            "horizontalAlignment": string;
            "isUniform": boolean;
            "nestingLevel": number;
            "rowCount": number;
            "shadingColor": string;
            "style": string;
            "styleBandedColumns": boolean;
            "styleBandedRows": boolean;
            "styleBuiltIn": string;
            "styleFirstColumn": boolean;
            "styleLastColumn": boolean;
            "styleTotalRow": boolean;
            "values": string[][];
            "verticalAlignment": string;
            "width": number;
        };
    }
    /**
     *
     * Contains the collection of the document's Table objects.
     *
     * [Api set: WordApi 1.3]
     */
    class TableCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Table>;
        /**
         *
         * Gets the first table in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a row in a Word document.
     *
     * [Api set: WordApi 1.3]
     */
    class TableRow extends OfficeExtension.ClientObject {
        /**
         *
         * Gets cells. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        cells: Word.TableCellCollection;
        /**
         *
         * Gets the font. Use this to get and set font name, size, color, and other properties. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        font: Word.Font;
        /**
         *
         * Gets parent table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the number of cells in the row. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        cellCount: number;
        /**
         *
         * Gets and sets the horizontal alignment of every cell in the row. The value can be 'left', 'centered', 'right', or 'justified'.
         *
         * [Api set: WordApi 1.3]
         */
        horizontalAlignment: string;
        /**
         *
         * Checks whether the row is a header row. Read-only. To set the number of header rows, use HeaderRowCount on the Table object.
         *
         * [Api set: WordApi 1.3]
         */
        isHeader: boolean;
        /**
         *
         * Gets and sets the preferred height of the row in points.
         *
         * [Api set: WordApi 1.3]
         */
        preferredHeight: number;
        /**
         *
         * Gets the index of the row in its parent table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        rowIndex: number;
        /**
         *
         * Gets and sets the shading color.
         *
         * [Api set: WordApi 1.3]
         */
        shadingColor: string;
        /**
         *
         * Gets and sets the text values in the row, as a 1D Javascript array.
         *
         * [Api set: WordApi 1.3]
         */
        values: Array<string>;
        /**
         *
         * Gets and sets the vertical alignment of the cells in the row. The value can be 'top', 'center' or 'bottom'.
         *
         * [Api set: WordApi 1.3]
         */
        verticalAlignment: string;
        /**
         *
         * Clears the contents of the row.
         *
         * [Api set: WordApi 1.3]
         */
        clear(): void;
        /**
         *
         * Deletes the entire row.
         *
         * [Api set: WordApi 1.3]
         */
        delete(): void;
        /**
         *
         * Gets the border style of the cells in the row.
         *
         * @param borderLocation Required. The border location.
         *
         * [Api set: WordApi 1.3]
         */
        getBorder(borderLocation: string): Word.TableBorder;
        /**
         *
         * Gets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        getCellPadding(cellPaddingLocation: string): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets the next row.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.TableRow;
        /**
         *
         * Inserts rows using this row as a template. If values are specified, inserts the values into the new rows.
         *
         * @param insertLocation Required. Where the new rows should be inserted, relative to the current row. It can be 'Before' or 'After'.
         * @param rowCount Required. Number of rows to add
         * @param values Optional. Strings to insert in the new rows, specified as a 2D array. The number of cells in each row must not exceed the number of cells in the existing row.
         *
         * [Api set: WordApi 1.3]
         */
        insertRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): Word.TableRowCollection;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the row. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         *
         * [Api set: WordApi 1.3]
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildcards?: boolean;
        }): Word.RangeCollection;
        /**
         *
         * Selects the row and navigates the Word UI to it.
         *
         * @param selectionMode Optional. The selection mode can be 'Select', 'Start' or 'End'. 'Select' is the default.
         *
         * [Api set: WordApi 1.3]
         */
        select(selectionMode?: string): void;
        /**
         *
         * Sets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        setCellPadding(cellPaddingLocation: string, cellPadding: number): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableRow;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableRow;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableRow;
        toJSON(): {
            "cellCount": number;
            "font": Font;
            "horizontalAlignment": string;
            "isHeader": boolean;
            "preferredHeight": number;
            "rowIndex": number;
            "shadingColor": string;
            "values": string[];
            "verticalAlignment": string;
        };
    }
    /**
     *
     * Contains the collection of the document's TableRow objects.
     *
     * [Api set: WordApi 1.3]
     */
    class TableRowCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.TableRow>;
        /**
         *
         * Gets the first row in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.TableRow;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableRowCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableRowCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableRowCollection;
        toJSON(): {};
    }
    /**
     *
     * Represents a table cell in a Word document.
     *
     * [Api set: WordApi 1.3]
     */
    class TableCell extends OfficeExtension.ClientObject {
        /**
         *
         * Gets the body object of the cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        body: Word.Body;
        /**
         *
         * Gets the parent row of the cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentRow: Word.TableRow;
        /**
         *
         * Gets the parent table of the cell. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        parentTable: Word.Table;
        /**
         *
         * Gets the index of the cell in its row. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        cellIndex: number;
        /**
         *
         * Gets and sets the width of the cell's column in points. This is applicable to uniform tables.
         *
         * [Api set: WordApi 1.3]
         */
        columnWidth: number;
        /**
         *
         * Gets and sets the horizontal alignment of the cell. The value can be 'left', 'centered', 'right', or 'justified'.
         *
         * [Api set: WordApi 1.3]
         */
        horizontalAlignment: string;
        /**
         *
         * Gets the index of the cell's row in the table. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        rowIndex: number;
        /**
         *
         * Gets or sets the shading color of the cell. Color is specified in "#RRGGBB" format or by using the color name.
         *
         * [Api set: WordApi 1.3]
         */
        shadingColor: string;
        /**
         *
         * Gets and sets the text of the cell.
         *
         * [Api set: WordApi 1.3]
         */
        value: string;
        /**
         *
         * Gets and sets the vertical alignment of the cell. The value can be 'top', 'center' or 'bottom'.
         *
         * [Api set: WordApi 1.3]
         */
        verticalAlignment: string;
        /**
         *
         * Gets the width of the cell in points. Read-only.
         *
         * [Api set: WordApi 1.3]
         */
        width: number;
        /**
         *
         * Deletes the column containing this cell. This is applicable to uniform tables.
         *
         * [Api set: WordApi 1.3]
         */
        deleteColumn(): void;
        /**
         *
         * Deletes the row containing this cell.
         *
         * [Api set: WordApi 1.3]
         */
        deleteRow(): void;
        /**
         *
         * Gets the border style for the specified border.
         *
         * @param borderLocation Required. The border location.
         *
         * [Api set: WordApi 1.3]
         */
        getBorder(borderLocation: string): Word.TableBorder;
        /**
         *
         * Gets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        getCellPadding(cellPaddingLocation: string): OfficeExtension.ClientResult<number>;
        /**
         *
         * Gets the next cell.
         *
         * [Api set: WordApi 1.3]
         */
        getNext(): Word.TableCell;
        /**
         *
         * Adds columns to the left or right of the cell, using the cell's column as a template. This is applicable to uniform tables. The string values, if specified, are set in the newly inserted rows.
         *
         * @param insertLocation Required. It can be 'Before' or 'After'.
         * @param columnCount Required. Number of columns to add
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertColumns(insertLocation: string, columnCount: number, values?: Array<Array<string>>): void;
        /**
         *
         * Inserts rows above or below the cell, using the cell's row as a template. The string values, if specified, are set in the newly inserted rows.
         *
         * @param insertLocation Required. It can be 'Before' or 'After'.
         * @param rowCount Required. Number of rows to add.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: WordApi 1.3]
         */
        insertRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): Word.TableRowCollection;
        /**
         *
         * Sets cell padding in points.
         *
         * @param cellPaddingLocation Required. The cell padding location can be 'Top', 'Left', 'Bottom' or 'Right'.
         *
         * [Api set: WordApi 1.3]
         */
        setCellPadding(cellPaddingLocation: string, cellPadding: number): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableCell;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableCell;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableCell;
        toJSON(): {
            "body": Body;
            "cellIndex": number;
            "columnWidth": number;
            "horizontalAlignment": string;
            "rowIndex": number;
            "shadingColor": string;
            "value": string;
            "verticalAlignment": string;
            "width": number;
        };
    }
    /**
     *
     * Contains the collection of the document's TableCell objects.
     *
     * [Api set: WordApi 1.3]
     */
    class TableCellCollection extends OfficeExtension.ClientObject {
        /** Gets the loaded child items in this collection. */
        items: Array<Word.TableCell>;
        /**
         *
         * Gets the first table cell in this collection.
         *
         * [Api set: WordApi 1.3]
         */
        getFirst(): Word.TableCell;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableCellCollection;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableCellCollection;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableCellCollection;
        toJSON(): {};
    }
    /**
     *
     * Specifies the border style
     *
     * [Api set: WordApi 1.3]
     */
    class TableBorder extends OfficeExtension.ClientObject {
        /**
         *
         * Gets or sets the table border color, as a hex value or name.
         *
         * [Api set: WordApi 1.3]
         */
        color: string;
        /**
         *
         * Gets or sets the type of the table border.
         *
         * [Api set: WordApi 1.3]
         */
        type: string;
        /**
         *
         * Gets or sets the width, in points, of the table border. Not applicable to table border types that have fixed widths.
         *
         * [Api set: WordApi 1.3]
         */
        width: number;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableBorder;
        /**
         * Track the object for automatic adjustment based on surrounding changes in the document. This call is a shorthand for context.trackedObjects.add(thisObject). If you are using this object across ".sync" calls and outside the sequential execution of a ".run" batch, and get an "InvalidObjectPath" error when setting a property or invoking a method on the object, you needed to have added the object to the tracked object collection when the object was first created.
         */
        track(): Word.TableBorder;
        /**
         * Release the memory associated with this object, if has previous been tracked. This call is shorthand for context.trackedObjects.remove(thisObject). Having many tracked objects slows down the host application, so please remember to free any objects you add, once you're done using them. You will need to call "context.sync()" before the memory release takes effect.
         */
        untrack(): Word.TableBorder;
        toJSON(): {
            "color": string;
            "type": string;
            "width": number;
        };
    }
    /**
     *
     * Specifies supported content control types and subtypes.
     *
     * [Api set: WordApi]
     */
    module ContentControlType {
        var unknown: string;
        var richTextInline: string;
        var richTextParagraphs: string;
        var richTextTableCell: string;
        var richTextTableRow: string;
        var richTextTable: string;
        var plainTextInline: string;
        var plainTextParagraph: string;
        var picture: string;
        var buildingBlockGallery: string;
        var checkBox: string;
        var comboBox: string;
        var dropDownList: string;
        var datePicker: string;
        var repeatingSection: string;
        var richText: string;
        var plainText: string;
    }
    /**
     *
     * ContentControl appearance
     *
     * [Api set: WordApi]
     */
    module ContentControlAppearance {
        var boundingBox: string;
        var tags: string;
        var hidden: string;
    }
    /**
     *
     * Underline types
     *
     * [Api set: WordApi]
     */
    module UnderlineType {
        var mixed: string;
        var none: string;
        /**
         *
         * @deprecated Hidden is no longer supported.
         */
        var hidden: string;
        /**
         *
         * @deprecated DotLine is no longer supported.
         */
        var dotLine: string;
        var single: string;
        var word: string;
        var double: string;
        var thick: string;
        var dotted: string;
        var dottedHeavy: string;
        var dashLine: string;
        var dashLineHeavy: string;
        var dashLineLong: string;
        var dashLineLongHeavy: string;
        var dotDashLine: string;
        var dotDashLineHeavy: string;
        var twoDotDashLine: string;
        var twoDotDashLineHeavy: string;
        var wave: string;
        var waveHeavy: string;
        var waveDouble: string;
    }
    /**
     *
     * Page break, line break, and four section breaks
     *
     * [Api set: WordApi]
     */
    module BreakType {
        /**
         *
         * Page break.
         *
         */
        var page: string;
        /**
         *
         * @deprecated Use sectionNext instead.
         */
        var next: string;
        /**
         *
         * Section break, with the new section starting on the next page.
         *
         */
        var sectionNext: string;
        /**
         *
         * Section break, with the new section starting on the same page.
         *
         */
        var sectionContinuous: string;
        /**
         *
         * Section break, with the new section starting on the next even-numbered page.
         *
         */
        var sectionEven: string;
        /**
         *
         * Section break, with the new section starting on the next odd-numbered page.
         *
         */
        var sectionOdd: string;
        /**
         *
         * Line break.
         *
         */
        var line: string;
    }
    /**
     *
     * The insertion location types
     *
     * [Api set: WordApi]
     */
    module InsertLocation {
        var before: string;
        var after: string;
        var start: string;
        var end: string;
        var replace: string;
    }
    /**
     * [Api set: WordApi]
     */
    module Alignment {
        var mixed: string;
        var unknown: string;
        var left: string;
        var centered: string;
        var right: string;
        var justified: string;
    }
    /**
     * [Api set: WordApi]
     */
    module HeaderFooterType {
        var primary: string;
        var firstPage: string;
        var evenPages: string;
    }
    /**
     * [Api set: WordApi]
     */
    module BodyType {
        var unknown: string;
        var mainDoc: string;
        var section: string;
        var header: string;
        var footer: string;
        var tableCell: string;
    }
    /**
     * [Api set: WordApi]
     */
    module SelectionMode {
        var select: string;
        var start: string;
        var end: string;
    }
    /**
     * [Api set: WordApi]
     */
    module ImageFormat {
        var unsupported: string;
        var undefined: string;
        var bmp: string;
        var jpeg: string;
        var gif: string;
        var tiff: string;
        var png: string;
        var icon: string;
        var exif: string;
        var wmf: string;
        var emf: string;
        var pict: string;
        var pdf: string;
        var svg: string;
    }
    /**
     * [Api set: WordApi]
     */
    module RangeLocation {
        var whole: string;
        var start: string;
        var end: string;
        var before: string;
        var after: string;
        var content: string;
    }
    /**
     * [Api set: WordApi]
     */
    module LocationRelation {
        var unrelated: string;
        var equal: string;
        var containsStart: string;
        var containsEnd: string;
        var contains: string;
        var insideStart: string;
        var insideEnd: string;
        var inside: string;
        var adjacentBefore: string;
        var overlapsBefore: string;
        var before: string;
        var adjacentAfter: string;
        var overlapsAfter: string;
        var after: string;
    }
    /**
     * [Api set: WordApi]
     */
    module BorderLocation {
        var top: string;
        var left: string;
        var bottom: string;
        var right: string;
        var insideHorizontal: string;
        var insideVertical: string;
        var inside: string;
        var outside: string;
        var all: string;
    }
    /**
     * [Api set: WordApi]
     */
    module CellPaddingLocation {
        var top: string;
        var left: string;
        var bottom: string;
        var right: string;
    }
    /**
     * [Api set: WordApi]
     */
    module BorderType {
        var mixed: string;
        var none: string;
        var single: string;
        var double: string;
        var dotted: string;
        var dashed: string;
        var dotDashed: string;
        var dot2Dashed: string;
        var triple: string;
        var thinThickSmall: string;
        var thickThinSmall: string;
        var thinThickThinSmall: string;
        var thinThickMed: string;
        var thickThinMed: string;
        var thinThickThinMed: string;
        var thinThickLarge: string;
        var thickThinLarge: string;
        var thinThickThinLarge: string;
        var wave: string;
        var doubleWave: string;
        var dashedSmall: string;
        var dashDotStroked: string;
        var threeDEmboss: string;
        var threeDEngrave: string;
    }
    /**
     * [Api set: WordApi]
     */
    module VerticalAlignment {
        var mixed: string;
        var top: string;
        var center: string;
        var bottom: string;
    }
    /**
     * [Api set: WordApi]
     */
    module ListLevelType {
        var bullet: string;
        var number: string;
        var picture: string;
    }
    /**
     * [Api set: WordApi]
     */
    module ListBullet {
        var custom: string;
        var solid: string;
        var hollow: string;
        var square: string;
        var diamonds: string;
        var arrow: string;
        var checkmark: string;
    }
    /**
     * [Api set: WordApi]
     */
    module ListNumbering {
        var none: string;
        var arabic: string;
        var upperRoman: string;
        var lowerRoman: string;
        var upperLetter: string;
        var lowerLetter: string;
    }
    /**
     * [Api set: WordApi]
     */
    module Style {
        /**
         *
         * Mixed styles or other style not in this list.
         *
         */
        var other: string;
        /**
         *
         * Reset character and paragraph style to default.
         *
         */
        var normal: string;
        var heading1: string;
        var heading2: string;
        var heading3: string;
        var heading4: string;
        var heading5: string;
        var heading6: string;
        var heading7: string;
        var heading8: string;
        var heading9: string;
        /**
         *
         * Table-of-content level 1.
         *
         */
        var toc1: string;
        /**
         *
         * Table-of-content level 2.
         *
         */
        var toc2: string;
        /**
         *
         * Table-of-content level 3.
         *
         */
        var toc3: string;
        /**
         *
         * Table-of-content level 4.
         *
         */
        var toc4: string;
        /**
         *
         * Table-of-content level 5.
         *
         */
        var toc5: string;
        /**
         *
         * Table-of-content level 6.
         *
         */
        var toc6: string;
        /**
         *
         * Table-of-content level 7.
         *
         */
        var toc7: string;
        /**
         *
         * Table-of-content level 8.
         *
         */
        var toc8: string;
        /**
         *
         * Table-of-content level 9.
         *
         */
        var toc9: string;
        var footnoteText: string;
        var header: string;
        var footer: string;
        var caption: string;
        var footnoteReference: string;
        var endnoteReference: string;
        var endnoteText: string;
        var title: string;
        var subtitle: string;
        var hyperlink: string;
        var strong: string;
        var emphasis: string;
        var noSpacing: string;
        var listParagraph: string;
        var quote: string;
        var intenseQuote: string;
        var subtleEmphasis: string;
        var intenseEmphasis: string;
        var subtleReference: string;
        var intenseReference: string;
        var bookTitle: string;
        var bibliography: string;
        /**
         *
         * Table-of-content heading.
         *
         */
        var tocHeading: string;
        var tableGrid: string;
        var plainTable1: string;
        var plainTable2: string;
        var plainTable3: string;
        var plainTable4: string;
        var plainTable5: string;
        var tableGridLight: string;
        var gridTable1Light: string;
        var gridTable1Light_Accent1: string;
        var gridTable1Light_Accent2: string;
        var gridTable1Light_Accent3: string;
        var gridTable1Light_Accent4: string;
        var gridTable1Light_Accent5: string;
        var gridTable1Light_Accent6: string;
        var gridTable2: string;
        var gridTable2_Accent1: string;
        var gridTable2_Accent2: string;
        var gridTable2_Accent3: string;
        var gridTable2_Accent4: string;
        var gridTable2_Accent5: string;
        var gridTable2_Accent6: string;
        var gridTable3: string;
        var gridTable3_Accent1: string;
        var gridTable3_Accent2: string;
        var gridTable3_Accent3: string;
        var gridTable3_Accent4: string;
        var gridTable3_Accent5: string;
        var gridTable3_Accent6: string;
        var gridTable4: string;
        var gridTable4_Accent1: string;
        var gridTable4_Accent2: string;
        var gridTable4_Accent3: string;
        var gridTable4_Accent4: string;
        var gridTable4_Accent5: string;
        var gridTable4_Accent6: string;
        var gridTable5Dark: string;
        var gridTable5Dark_Accent1: string;
        var gridTable5Dark_Accent2: string;
        var gridTable5Dark_Accent3: string;
        var gridTable5Dark_Accent4: string;
        var gridTable5Dark_Accent5: string;
        var gridTable5Dark_Accent6: string;
        var gridTable6Colorful: string;
        var gridTable6Colorful_Accent1: string;
        var gridTable6Colorful_Accent2: string;
        var gridTable6Colorful_Accent3: string;
        var gridTable6Colorful_Accent4: string;
        var gridTable6Colorful_Accent5: string;
        var gridTable6Colorful_Accent6: string;
        var gridTable7Colorful: string;
        var gridTable7Colorful_Accent1: string;
        var gridTable7Colorful_Accent2: string;
        var gridTable7Colorful_Accent3: string;
        var gridTable7Colorful_Accent4: string;
        var gridTable7Colorful_Accent5: string;
        var gridTable7Colorful_Accent6: string;
        var listTable1Light: string;
        var listTable1Light_Accent1: string;
        var listTable1Light_Accent2: string;
        var listTable1Light_Accent3: string;
        var listTable1Light_Accent4: string;
        var listTable1Light_Accent5: string;
        var listTable1Light_Accent6: string;
        var listTable2: string;
        var listTable2_Accent1: string;
        var listTable2_Accent2: string;
        var listTable2_Accent3: string;
        var listTable2_Accent4: string;
        var listTable2_Accent5: string;
        var listTable2_Accent6: string;
        var listTable3: string;
        var listTable3_Accent1: string;
        var listTable3_Accent2: string;
        var listTable3_Accent3: string;
        var listTable3_Accent4: string;
        var listTable3_Accent5: string;
        var listTable3_Accent6: string;
        var listTable4: string;
        var listTable4_Accent1: string;
        var listTable4_Accent2: string;
        var listTable4_Accent3: string;
        var listTable4_Accent4: string;
        var listTable4_Accent5: string;
        var listTable4_Accent6: string;
        var listTable5Dark: string;
        var listTable5Dark_Accent1: string;
        var listTable5Dark_Accent2: string;
        var listTable5Dark_Accent3: string;
        var listTable5Dark_Accent4: string;
        var listTable5Dark_Accent5: string;
        var listTable5Dark_Accent6: string;
        var listTable6Colorful: string;
        var listTable6Colorful_Accent1: string;
        var listTable6Colorful_Accent2: string;
        var listTable6Colorful_Accent3: string;
        var listTable6Colorful_Accent4: string;
        var listTable6Colorful_Accent5: string;
        var listTable6Colorful_Accent6: string;
        var listTable7Colorful: string;
        var listTable7Colorful_Accent1: string;
        var listTable7Colorful_Accent2: string;
        var listTable7Colorful_Accent3: string;
        var listTable7Colorful_Accent4: string;
        var listTable7Colorful_Accent5: string;
        var listTable7Colorful_Accent6: string;
    }
    /**
     * [Api set: WordApi]
     */
    module DocumentPropertyType {
        var string: string;
        var number: string;
        var date: string;
        var boolean: string;
    }
    module ErrorCodes {
        var accessDenied: string;
        var generalException: string;
        var invalidArgument: string;
        var itemNotFound: string;
        var notImplemented: string;
    }
}
declare module Word {
    /**
     * The RequestContext object facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the request context is required to get access to the Word object model from the add-in.
     */
    class RequestContext extends OfficeExtension.ClientRequestContext {
        constructor(url?: string);
        document: Document;
        application: Application;
    }
    /**
     * Executes a batch script that performs actions on the Word object model, using a new RequestContext. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
     */
    function run<T>(batch: (context: Word.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Word object model, using the RequestContext of a previously-created API object. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param object - A previously-created API object. The batch will use the same RequestContext as the passed-in object, which means that any changes applied to the object will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
     */
    function run<T>(object: OfficeExtension.ClientObject, batch: (context: Word.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
    /**
     * Executes a batch script that performs actions on the Word object model, using the RequestContext of previously-created API objects.
     * @param objects - An array of previously-created API objects. The array will be validated to make sure that all of the objects share the same context. The batch will use this shared RequestContext, which means that any changes applied to these objects will be picked up by "context.sync()".
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the RequestContext is required to get access to the Word object model from the add-in.
     */
    function run<T>(objects: OfficeExtension.ClientObject[], batch: (context: Word.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
}





////////////////////////////////////////////////////////////////
///////////////////////// End Word APIs ////////////////////////
////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////
////////////////////// Begin OneNote APIs //////////////////////
////////////////////////////////////////////////////////////////


declare namespace OneNote {
    /**
     *
     * Represents the top-level object that contains all globally addressable OneNote objects such as notebooks, the active notebook, and the active section.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Application extends OfficeExtension.ClientObject {
        private m_notebooks;
        /**
         *
         * Gets the collection of notebooks that are open in the OneNote application instance. In OneNote Online, only one notebook at a time is open in the application instance. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        notebooks: OneNote.NotebookCollection;
        /**
         *
         * Gets the active notebook if one exists. If no notebook is active, throws ItemNotFound.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveNotebook(): OneNote.Notebook;
        /**
         *
         * Gets the active notebook if one exists. If no notebook is active, returns null.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveNotebookOrNull(): OneNote.Notebook;
        /**
         *
         * Gets the active outline if one exists, If no outline is active, throws ItemNotFound.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveOutline(): OneNote.Outline;
        /**
         *
         * Gets the active outline if one exists, otherwise returns null.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveOutlineOrNull(): OneNote.Outline;
        /**
         *
         * Gets the active page if one exists. If no page is active, throws ItemNotFound.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActivePage(): OneNote.Page;
        /**
         *
         * Gets the active page if one exists. If no page is active, returns null.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActivePageOrNull(): OneNote.Page;
        /**
         *
         * Gets the active section if one exists. If no section is active, throws ItemNotFound.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveSection(): OneNote.Section;
        /**
         *
         * Gets the active section if one exists. If no section is active, returns null.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getActiveSectionOrNull(): OneNote.Section;
        /**
         *
         * Opens the specified page in the application instance.
         *
         * @param page The page to open.
         *
         * [Api set: OneNoteApi 1.1]
         */
        navigateToPage(page: OneNote.Page): void;
        /**
         *
         * Gets the specified page, and opens it in the application instance.
         *
         * @param url The client url of the page to open.
         *
         * [Api set: OneNoteApi 1.1]
         */
        navigateToPageWithClientUrl(url: string): OneNote.Page;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Application;
    }
    /**
     *
     * Represents ink analysis data for a given set of ink strokes.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysis extends OfficeExtension.ClientObject {
        private m_id;
        private m_page;
        private m_paragraphs;
        private m__ReferenceId;
        /**
         *
         * Gets the parent page object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        page: OneNote.Page;
        /**
         *
         * Gets the ink analysis paragraphs in this page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraphs: OneNote.InkAnalysisParagraphCollection;
        /**
         *
         * Gets the ID of the InkAnalysis object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysis;
    }
    /**
     *
     * Represents ink analysis data for an identified paragraph formed by ink strokes.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisParagraph extends OfficeExtension.ClientObject {
        private m_id;
        private m_inkAnalysis;
        private m_lines;
        private m__ReferenceId;
        /**
         *
         * Reference to the parent InkAnalysisPage. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        inkAnalysis: OneNote.InkAnalysis;
        /**
         *
         * Gets the ink analysis lines in this ink analysis paragraph. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        lines: OneNote.InkAnalysisLineCollection;
        /**
         *
         * Gets the ID of the InkAnalysisParagraph object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisParagraph;
    }
    /**
     *
     * Represents a collection of InkAnalysisParagraph objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisParagraphCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.InkAnalysisParagraph>;
        /**
         *
         * Returns the number of InkAnalysisParagraphs in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a InkAnalysisParagraph object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the InkAnalysisParagraph object, or the index location of the InkAnalysisParagraph object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.InkAnalysisParagraph;
        /**
         *
         * Gets a InkAnalysisParagraph on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.InkAnalysisParagraph;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisParagraphCollection;
    }
    /**
     *
     * Represents ink analysis data for an identified text line formed by ink strokes.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisLine extends OfficeExtension.ClientObject {
        private m_id;
        private m_paragraph;
        private m_words;
        private m__ReferenceId;
        /**
         *
         * Reference to the parent InkAnalysisParagraph. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraph: OneNote.InkAnalysisParagraph;
        /**
         *
         * Gets the ink analysis words in this ink analysis line. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        words: OneNote.InkAnalysisWordCollection;
        /**
         *
         * Gets the ID of the InkAnalysisLine object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisLine;
    }
    /**
     *
     * Represents a collection of InkAnalysisLine objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisLineCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.InkAnalysisLine>;
        /**
         *
         * Returns the number of InkAnalysisLines in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a InkAnalysisLine object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the InkAnalysisLine object, or the index location of the InkAnalysisLine object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.InkAnalysisLine;
        /**
         *
         * Gets a InkAnalysisLine on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.InkAnalysisLine;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisLineCollection;
    }
    /**
     *
     * Represents ink analysis data for an identified word formed by ink strokes.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisWord extends OfficeExtension.ClientObject {
        private m_id;
        private m_languageId;
        private m_line;
        private m_strokePointers;
        private m_wordAlternates;
        private m__ReferenceId;
        /**
         *
         * Reference to the parent InkAnalysisLine. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        line: OneNote.InkAnalysisLine;
        /**
         *
         * Gets the ID of the InkAnalysisWord object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * The id of the recognized language in this inkAnalysisWord. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        languageId: string;
        /**
         *
         * Weak references to the ink strokes that were recognized as part of this ink analysis word. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        strokePointers: Array<OneNote.InkStrokePointer>;
        /**
         *
         * The words that were recognized in this ink word, in order of likelihood. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        wordAlternates: Array<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisWord;
    }
    /**
     *
     * Represents a collection of InkAnalysisWord objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkAnalysisWordCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.InkAnalysisWord>;
        /**
         *
         * Returns the number of InkAnalysisWords in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a InkAnalysisWord object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the InkAnalysisWord object, or the index location of the InkAnalysisWord object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.InkAnalysisWord;
        /**
         *
         * Gets a InkAnalysisWord on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.InkAnalysisWord;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysisWordCollection;
    }
    /**
     *
     * Represents a group of ink strokes.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class FloatingInk extends OfficeExtension.ClientObject {
        private m_id;
        private m_inkStrokes;
        private m_pageContent;
        private m__ReferenceId;
        /**
         *
         * Gets the strokes of the FloatingInk object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        inkStrokes: OneNote.InkStrokeCollection;
        /**
         *
         * Gets the PageContent parent of the FloatingInk object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        pageContent: OneNote.PageContent;
        /**
         *
         * Gets the ID of the FloatingInk object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.FloatingInk;
    }
    /**
     *
     * Represents a single stroke of ink.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkStroke extends OfficeExtension.ClientObject {
        private m_floatingInk;
        private m_id;
        private m__ReferenceId;
        /**
         *
         * Gets the ID of the InkStroke object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        floatingInk: OneNote.FloatingInk;
        /**
         *
         * Gets the ID of the InkStroke object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkStroke;
    }
    /**
     *
     * Represents a collection of InkStroke objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkStrokeCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.InkStroke>;
        /**
         *
         * Returns the number of InkStrokes in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a InkStroke object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the InkStroke object, or the index location of the InkStroke object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.InkStroke;
        /**
         *
         * Gets a InkStroke on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.InkStroke;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkStrokeCollection;
    }
    /**
     *
     * A container for the ink in a word in a paragraph.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkWord extends OfficeExtension.ClientObject {
        private m_id;
        private m_languageId;
        private m_paragraph;
        private m_wordAlternates;
        private m__ReferenceId;
        /**
         *
         * The parent paragraph containing the ink word. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraph: OneNote.Paragraph;
        /**
         *
         * Gets the ID of the InkWord object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * The id of the recognized language in this ink word. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        languageId: string;
        /**
         *
         * The words that were recognized in this ink word, in order of likelihood. Read-only.
         *
         * [Api set: OneNoteApi]
         */
        wordAlternates: Array<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkWord;
    }
    /**
     *
     * Represents a collection of InkWord objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class InkWordCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.InkWord>;
        /**
         *
         * Returns the number of InkWords in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a InkWord object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the InkWord object, or the index location of the InkWord object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.InkWord;
        /**
         *
         * Gets a InkWord on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.InkWord;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkWordCollection;
    }
    /**
     *
     * Represents a OneNote notebook. Notebooks contain section groups and sections.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Notebook extends OfficeExtension.ClientObject {
        private m_clientUrl;
        private m_id;
        private m_name;
        private m_sectionGroups;
        private m_sections;
        private m__ReferenceId;
        /**
         *
         * The section groups in the notebook. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        sectionGroups: OneNote.SectionGroupCollection;
        /**
         *
         * The the sections of the notebook. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        sections: OneNote.SectionCollection;
        /**
         *
         * The client url of the notebook. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        clientUrl: string;
        /**
         *
         * Gets the ID of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the name of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        name: string;
        /**
         *
         * Adds a new section to the end of the notebook.
         *
         * @param name The name of the new section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addSection(name: string): OneNote.Section;
        /**
         *
         * Adds a new section group to the end of the notebook.
         *
         * @param name The name of the new section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addSectionGroup(name: string): OneNote.SectionGroup;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Notebook;
    }
    /**
     *
     * Represents a collection of notebooks.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class NotebookCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.Notebook>;
        /**
         *
         * Returns the number of notebooks in the collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets the collection of notebooks with the specified name that are open in the application instance.
         *
         * @param name The name of the notebook.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getByName(name: string): OneNote.NotebookCollection;
        /**
         *
         * Gets a notebook by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the notebook, or the index location of the notebook in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.Notebook;
        /**
         *
         * Gets a notebook on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.Notebook;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.NotebookCollection;
    }
    /**
     *
     * Represents a OneNote section group. Section groups can contain sections and other section groups.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class SectionGroup extends OfficeExtension.ClientObject {
        private m_clientUrl;
        private m_id;
        private m_name;
        private m_notebook;
        private m_parentSectionGroup;
        private m_parentSectionGroupOrNull;
        private m_sectionGroups;
        private m_sections;
        private m__ReferenceId;
        /**
         *
         * Gets the notebook that contains the section group. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        notebook: OneNote.Notebook;
        /**
         *
         * Gets the section group that contains the section group. Throws ItemNotFound if the section group is a direct child of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentSectionGroup: OneNote.SectionGroup;
        /**
         *
         * Gets the section group that contains the section group. Returns null if the section group is a direct child of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentSectionGroupOrNull: OneNote.SectionGroup;
        /**
         *
         * The collection of section groups in the section group. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        sectionGroups: OneNote.SectionGroupCollection;
        /**
         *
         * The collection of sections in the section group. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        sections: OneNote.SectionCollection;
        /**
         *
         * The client url of the section group. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        clientUrl: string;
        /**
         *
         * Gets the ID of the section group. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the name of the section group. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        name: string;
        /**
         *
         * Adds a new section to the end of the section group.
         *
         * @param title The name of the new section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addSection(title: string): OneNote.Section;
        /**
         *
         * Adds a new section group to the end of this sectionGroup.
         *
         * @param name The name of the new section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addSectionGroup(name: string): OneNote.SectionGroup;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.SectionGroup;
    }
    /**
     *
     * Represents a collection of section groups.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class SectionGroupCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.SectionGroup>;
        /**
         *
         * Returns the number of section groups in the collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets the collection of section groups with the specified name.
         *
         * @param name The name of the section group.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getByName(name: string): OneNote.SectionGroupCollection;
        /**
         *
         * Gets a section group by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the section group, or the index location of the section group in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.SectionGroup;
        /**
         *
         * Gets a section group on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.SectionGroup;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.SectionGroupCollection;
    }
    /**
     *
     * Represents a OneNote section. Sections can contain pages.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Section extends OfficeExtension.ClientObject {
        private m_clientUrl;
        private m_id;
        private m_name;
        private m_notebook;
        private m_pages;
        private m_parentSectionGroup;
        private m_parentSectionGroupOrNull;
        private m__ReferenceId;
        /**
         *
         * Gets the notebook that contains the section. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        notebook: OneNote.Notebook;
        /**
         *
         * The collection of pages in the section. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        pages: OneNote.PageCollection;
        /**
         *
         * Gets the section group that contains the section. Throws ItemNotFound if the section is a direct child of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentSectionGroup: OneNote.SectionGroup;
        /**
         *
         * Gets the section group that contains the section. Returns null if the section is a direct child of the notebook. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentSectionGroupOrNull: OneNote.SectionGroup;
        /**
         *
         * The client url of the section. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        clientUrl: string;
        /**
         *
         * Gets the ID of the section. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the name of the section. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        name: string;
        /**
         *
         * Adds a new page to the end of the section.
         *
         * @param title The title of the new page.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addPage(title: string): OneNote.Page;
        /**
         *
         * Copies this section to specified notebook.
         *
         * @param destinationNotebook The notebook to copy this section to.
         *
         * [Api set: OneNoteApi 1.1]
         */
        copyToNotebook(destinationNotebook: OneNote.Notebook): OneNote.Section;
        /**
         *
         * Copies this section to specified section group.
         *
         * @param destinationSectionGroup The section group to copy this section to.
         *
         * [Api set: OneNoteApi 1.1]
         */
        copyToSectionGroup(destinationSectionGroup: OneNote.SectionGroup): OneNote.Section;
        /**
         *
         * Inserts a new section before or after the current section.
         *
         * @param location The location of the new section relative to the current section.
         * @param title The name of the new section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertSectionAsSibling(location: string, title: string): OneNote.Section;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Section;
    }
    /**
     *
     * Represents a collection of sections.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class SectionCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.Section>;
        /**
         *
         * Returns the number of sections in the collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets the collection of sections with the specified name.
         *
         * @param name The name of the section.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getByName(name: string): OneNote.SectionCollection;
        /**
         *
         * Gets a section by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the section, or the index location of the section in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.Section;
        /**
         *
         * Gets a section on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.Section;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.SectionCollection;
    }
    /**
     *
     * Represents a OneNote page.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Page extends OfficeExtension.ClientObject {
        private m_clientUrl;
        private m_contents;
        private m_id;
        private m_inkAnalysisOrNull;
        private m_pageLevel;
        private m_parentSection;
        private m_title;
        private m_webUrl;
        private m__ReferenceId;
        /**
         *
         * The collection of PageContent objects on the page. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        contents: OneNote.PageContentCollection;
        /**
         *
         * Text interpretation for the ink on the page. Returns null if there is no ink analysis information. Read only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        inkAnalysisOrNull: OneNote.InkAnalysis;
        /**
         *
         * Gets the section that contains the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentSection: OneNote.Section;
        /**
         *
         * The client url of the page. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        clientUrl: string;
        /**
         *
         * Gets the ID of the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets or sets the indentation level of the page.
         *
         * [Api set: OneNoteApi 1.1]
         */
        pageLevel: number;
        /**
         *
         * Gets or sets the title of the page.
         *
         * [Api set: OneNoteApi 1.1]
         */
        title: string;
        /**
         *
         * The web url of the page. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        webUrl: string;
        /**
         *
         * Adds an Outline to the page at the specified position.
         *
         * @param left The left position of the top, left corner of the Outline.
         * @param top The top position of the top, left corner of the Outline.
         * @param html An HTML string that describes the visual presentation of the Outline. See [supported HTML](../../docs/onenote/onenote-add-ins-page-content.md#supported-html) for the OneNote add-ins JavaScript API.
         *
         * [Api set: OneNoteApi 1.1]
         */
        addOutline(left: number, top: number, html: string): OneNote.Outline;
        /**
         *
         * Copies this page to specified section.
         *
         * @param destinationSection The section to copy this page to.
         *
         * [Api set: OneNoteApi 1.1]
         */
        copyToSection(destinationSection: OneNote.Section): OneNote.Page;
        /**
         *
         * Inserts a new page before or after the current page.
         *
         * @param location The location of the new page relative to the current page.
         * @param title The title of the new page.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertPageAsSibling(location: string, title: string): OneNote.Page;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Page;
    }
    /**
     *
     * Represents a collection of pages.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class PageCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.Page>;
        /**
         *
         * Returns the number of pages in the collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets the collection of pages with the specified title.
         *
         * @param title The title of the page.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getByTitle(title: string): OneNote.PageCollection;
        /**
         *
         * Gets a page by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the page, or the index location of the page in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.Page;
        /**
         *
         * Gets a page on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.Page;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.PageCollection;
    }
    /**
     *
     * Represents a region on a page that contains top-level content types such as Outline or Image. A PageContent object can be assigned an XY position.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class PageContent extends OfficeExtension.ClientObject {
        private m_id;
        private m_image;
        private m_ink;
        private m_left;
        private m_outline;
        private m_parentPage;
        private m_top;
        private m_type;
        private m__ReferenceId;
        /**
         *
         * Gets the Image in the PageContent object. Throws an exception if PageContentType is not Image.
         *
         * [Api set: OneNoteApi 1.1]
         */
        image: OneNote.Image;
        /**
         *
         * Gets the ink in the PageContent object. Throws an exception if PageContentType is not Ink.
         *
         * [Api set: OneNoteApi 1.1]
         */
        ink: OneNote.FloatingInk;
        /**
         *
         * Gets the Outline in the PageContent object. Throws an exception if PageContentType is not Outline.
         *
         * [Api set: OneNoteApi 1.1]
         */
        outline: OneNote.Outline;
        /**
         *
         * Gets the page that contains the PageContent object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentPage: OneNote.Page;
        /**
         *
         * Gets the ID of the PageContent object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets or sets the left (X-axis) position of the PageContent object.
         *
         * [Api set: OneNoteApi 1.1]
         */
        left: number;
        /**
         *
         * Gets or sets the top (Y-axis) position of the PageContent object.
         *
         * [Api set: OneNoteApi 1.1]
         */
        top: number;
        /**
         *
         * Gets the type of the PageContent object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        type: string;
        /**
         *
         * Deletes the PageContent object.
         *
         * [Api set: OneNoteApi 1.1]
         */
        delete(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.PageContent;
    }
    /**
     *
     * Represents the contents of a page, as a collection of PageContent objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class PageContentCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.PageContent>;
        /**
         *
         * Returns the number of page contents in the collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a PageContent object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the PageContent object, or the index location of the PageContent object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.PageContent;
        /**
         *
         * Gets a page content on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.PageContent;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.PageContentCollection;
    }
    /**
     *
     * Represents a container for Paragraph objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Outline extends OfficeExtension.ClientObject {
        private m_id;
        private m_pageContent;
        private m_paragraphs;
        private m__ReferenceId;
        /**
         *
         * Gets the PageContent object that contains the Outline. This object defines the position of the Outline on the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        pageContent: OneNote.PageContent;
        /**
         *
         * Gets the collection of Paragraph objects in the Outline. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraphs: OneNote.ParagraphCollection;
        /**
         *
         * Gets the ID of the Outline object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Adds the specified HTML to the bottom of the Outline.
         *
         * @param html The HTML string to append. See [supported HTML](../../docs/onenote/onenote-add-ins-page-content.md#supported-html) for the OneNote add-ins JavaScript API.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendHtml(html: string): void;
        /**
         *
         * Adds the specified image to the bottom of the Outline.
         *
         * @param base64EncodedImage HTML string to append.
         * @param width Optional. Width in the unit of Points. The default value is null and image width will be respected.
         * @param height Optional. Height in the unit of Points. The default value is null and image height will be respected.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendImage(base64EncodedImage: string, width: number, height: number): OneNote.Image;
        /**
         *
         * Adds the specified text to the bottom of the Outline.
         *
         * @param paragraphText HTML string to append.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendRichText(paragraphText: string): OneNote.RichText;
        /**
         *
         * Adds a table with the specified number of rows and columns to the bottom of the outline.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendTable(rowCount: number, columnCount: number, values?: Array<Array<string>>): OneNote.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Outline;
    }
    /**
     *
     * A container for the visible content on a page. A Paragraph can contain any one ParagraphType type of content.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Paragraph extends OfficeExtension.ClientObject {
        private m_id;
        private m_image;
        private m_inkWords;
        private m_outline;
        private m_paragraphs;
        private m_parentParagraph;
        private m_parentParagraphOrNull;
        private m_parentTableCell;
        private m_parentTableCellOrNull;
        private m_richText;
        private m_table;
        private m_type;
        private m__ReferenceId;
        /**
         *
         * Gets the Image object in the Paragraph. Throws an exception if ParagraphType is not Image. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        image: OneNote.Image;
        /**
         *
         * Gets the Ink collection in the Paragraph. Throws an exception if ParagraphType is not Ink. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        inkWords: OneNote.InkWordCollection;
        /**
         *
         * Gets the Outline object that contains the Paragraph. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        outline: OneNote.Outline;
        /**
         *
         * The collection of paragraphs under this paragraph. Read only
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraphs: OneNote.ParagraphCollection;
        /**
         *
         * Gets the parent paragraph object. Throws if a parent paragraph does not exist. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentParagraph: OneNote.Paragraph;
        /**
         *
         * Gets the parent paragraph object. Returns null if a parent paragraph does not exist. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentParagraphOrNull: OneNote.Paragraph;
        /**
         *
         * Gets the TableCell object that contains the Paragraph if one exists. If parent is not a TableCell, throws ItemNotFound. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentTableCell: OneNote.TableCell;
        /**
         *
         * Gets the TableCell object that contains the Paragraph if one exists. If parent is not a TableCell, returns null. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentTableCellOrNull: OneNote.TableCell;
        /**
         *
         * Gets the RichText object in the Paragraph. Throws an exception if ParagraphType is not RichText. Read-only
         *
         * [Api set: OneNoteApi 1.1]
         */
        richText: OneNote.RichText;
        /**
         *
         * Gets the Table object in the Paragraph. Throws an exception if ParagraphType is not Table. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        table: OneNote.Table;
        /**
         *
         * Gets the ID of the Paragraph object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the type of the Paragraph object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        type: string;
        /**
         *
         * Deletes the paragraph
         *
         * [Api set: OneNoteApi 1.1]
         */
        delete(): void;
        /**
         *
         * Inserts the specified HTML content
         *
         * @param insertLocation The location of new contents relative to the current Paragraph.
         * @param html An HTML string that describes the visual presentation of the content. See [supported HTML](../../docs/onenote/onenote-add-ins-page-content.md#supported-html) for the OneNote add-ins JavaScript API.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertHtmlAsSibling(insertLocation: string, html: string): void;
        /**
         *
         * Inserts the image at the specified insert location..
         *
         * @param insertLocation The location of the table relative to the current Paragraph.
         * @param base64EncodedImage HTML string to append.
         * @param width Optional. Width in the unit of Points. The default value is null and image width will be respected.
         * @param height Optional. Height in the unit of Points. The default value is null and image height will be respected.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertImageAsSibling(insertLocation: string, base64EncodedImage: string, width: number, height: number): OneNote.Image;
        /**
         *
         * Inserts the paragraph text at the specifiec insert location.
         *
         * @param insertLocation The location of the table relative to the current Paragraph.
         * @param paragraphText HTML string to append.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertRichTextAsSibling(insertLocation: string, paragraphText: string): OneNote.RichText;
        /**
         *
         * Adds a table with the specified number of rows and columns before or after the current paragraph.
         *
         * @param insertLocation The location of the table relative to the current Paragraph.
         * @param rowCount The number of rows in the table.
         * @param columnCount The number of columns in the table.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertTableAsSibling(insertLocation: string, rowCount: number, columnCount: number, values?: Array<Array<string>>): OneNote.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Paragraph;
    }
    /**
     *
     * Represents a collection of Paragraph objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class ParagraphCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.Paragraph>;
        /**
         *
         * Returns the number of paragraphs in the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a Paragraph object by ID or by its index in the collection. Read-only.
         *
         * @param index The ID of the Paragraph object, or the index location of the Paragraph object in the collection.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.Paragraph;
        /**
         *
         * Gets a paragraph on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.Paragraph;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.ParagraphCollection;
    }
    /**
     *
     * Represents a RichText object in a Paragraph.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class RichText extends OfficeExtension.ClientObject {
        private m_id;
        private m_paragraph;
        private m_text;
        private m__ReferenceId;
        /**
         *
         * Gets the Paragraph object that contains the RichText object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraph: OneNote.Paragraph;
        /**
         *
         * Gets the ID of the RichText object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the text content of the RichText object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        text: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.RichText;
    }
    /**
     *
     * Represents an Image. An Image can be a direct child of a PageContent object or a Paragraph object.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Image extends OfficeExtension.ClientObject {
        private m_description;
        private m_height;
        private m_hyperlink;
        private m_id;
        private m_ocrData;
        private m_pageContent;
        private m_paragraph;
        private m_width;
        private m__ReferenceId;
        /**
         *
         * Gets the PageContent object that contains the Image. Throws if the Image is not a direct child of a PageContent. This object defines the position of the Image on the page. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        pageContent: OneNote.PageContent;
        /**
         *
         * Gets the Paragraph object that contains the Image. Throws if the Image is not a direct child of a Paragraph. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraph: OneNote.Paragraph;
        /**
         *
         * Gets or sets the description of the Image.
         *
         * [Api set: OneNoteApi 1.1]
         */
        description: string;
        /**
         *
         * Gets or sets the height of the Image layout.
         *
         * [Api set: OneNoteApi 1.1]
         */
        height: number;
        /**
         *
         * Gets or sets the hyperlink of the Image.
         *
         * [Api set: OneNoteApi 1.1]
         */
        hyperlink: string;
        /**
         *
         * Gets the ID of the Image object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the data obtained by OCR (Optical Character Recognition) of this Image, such as OCR text and language.
         *
         * [Api set: OneNoteApi 1.1]
         */
        ocrData: OneNote.ImageOcrData;
        /**
         *
         * Gets or sets the width of the Image layout.
         *
         * [Api set: OneNoteApi 1.1]
         */
        width: number;
        /**
         *
         * Gets the base64-encoded binary representation of the Image.
            Example: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...
         *
         * [Api set: OneNoteApi 1.1]
         */
        getBase64Image(): OfficeExtension.ClientResult<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Image;
    }
    /**
     *
     * Represents a table in a OneNote page.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class Table extends OfficeExtension.ClientObject {
        private m_borderVisible;
        private m_columnCount;
        private m_id;
        private m_paragraph;
        private m_rowCount;
        private m_rows;
        private m__ReferenceId;
        /**
         *
         * Gets the Paragraph object that contains the Table object. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraph: OneNote.Paragraph;
        /**
         *
         * Gets all of the table rows. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        rows: OneNote.TableRowCollection;
        /**
         *
         * Gets or sets whether the borders are visible or not. True if they are visible, false if they are hidden.
         *
         * [Api set: OneNoteApi 1.1]
         */
        borderVisible: boolean;
        /**
         *
         * Gets the number of columns in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        columnCount: number;
        /**
         *
         * Gets the ID of the table. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the number of rows in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        rowCount: number;
        /**
         *
         * Adds a column to the end of the table. Values, if specified, are set in the new column. Otherwise the column is empty.
         *
         * @param values Optional. Strings to insert in the new column, specified as an array. Must not have more values than rows in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendColumn(values?: Array<string>): void;
        /**
         *
         * Adds a row to the end of the table. Values, if specified, are set in the new row. Otherwise the row is empty.
         *
         * @param values Optional. Strings to insert in the new row, specified as an array. Must not have more values than columns in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendRow(values?: Array<string>): OneNote.TableRow;
        /**
         *
         * Clears the contents of the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        clear(): void;
        /**
         *
         * Gets the table cell at a specified row and column.
         *
         * @param rowIndex The index of the row.
         * @param cellIndex The index of the cell in the row.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getCell(rowIndex: number, cellIndex: number): OneNote.TableCell;
        /**
         *
         * Inserts a column at the given index in the table. Values, if specified, are set in the new column. Otherwise the column is empty.
         *
         * @param index Index where the column will be inserted in the table.
         * @param values Optional. Strings to insert in the new column, specified as an array. Must not have more values than rows in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertColumn(index: number, values?: Array<string>): void;
        /**
         *
         * Inserts a row at the given index in the table. Values, if specified, are set in the new row. Otherwise the row is empty.
         *
         * @param index Index where the row will be inserted in the table.
         * @param values Optional. Strings to insert in the new row, specified as an array. Must not have more values than columns in the table.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertRow(index: number, values?: Array<string>): OneNote.TableRow;
        setShadingColor(colorCode: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Table;
    }
    /**
     *
     * Represents a row in a table.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class TableRow extends OfficeExtension.ClientObject {
        private m_cellCount;
        private m_cells;
        private m_id;
        private m_parentTable;
        private m_rowIndex;
        private m__ReferenceId;
        /**
         *
         * Gets the cells in the row. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        cells: OneNote.TableCellCollection;
        /**
         *
         * Gets the parent table. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentTable: OneNote.Table;
        /**
         *
         * Gets the number of cells in the row. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        cellCount: number;
        /**
         *
         * Gets the ID of the row. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the index of the row in its parent table. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        rowIndex: number;
        /**
         *
         * Clears the contents of the row.
         *
         * [Api set: OneNoteApi 1.1]
         */
        clear(): void;
        /**
         *
         * Inserts a row before or after the current row.
         *
         * @param insertLocation Where the new rows should be inserted relative to the current row.
         * @param values Strings to insert in the new row, specified as an array. Must not have more cells than in the current row. Optional.
         *
         * [Api set: OneNoteApi 1.1]
         */
        insertRowAsSibling(insertLocation: string, values?: Array<string>): OneNote.TableRow;
        setShadingColor(colorCode: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableRow;
    }
    /**
     *
     * Contains a collection of TableRow objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class TableRowCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.TableRow>;
        /**
         *
         * Returns the number of table rows in this collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a table row object by ID or by its index in the collection. Read-only.
         *
         * @param index A number that identifies the index location of a table row object.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.TableRow;
        /**
         *
         * Gets a table row at its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.TableRow;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableRowCollection;
    }
    /**
     *
     * Represents a cell in a OneNote table.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class TableCell extends OfficeExtension.ClientObject {
        private m_cellIndex;
        private m_id;
        private m_paragraphs;
        private m_parentRow;
        private m_rowIndex;
        private m_shadingColor;
        private m__ReferenceId;
        /**
         *
         * Gets the collection of Paragraph objects in the TableCell. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        paragraphs: OneNote.ParagraphCollection;
        /**
         *
         * Gets the parent row of the cell. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        parentRow: OneNote.TableRow;
        /**
         *
         * Gets the index of the cell in its row. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        cellIndex: number;
        /**
         *
         * Gets the ID of the cell. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        id: string;
        /**
         *
         * Gets the index of the cell's row in the table. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        rowIndex: number;
        /**
         *
         * Gets and sets the shading color of the cell
         *
         * [Api set: OneNoteApi 1.1]
         */
        shadingColor: string;
        /**
         *
         * Adds the specified HTML to the bottom of the TableCell.
         *
         * @param html The HTML string to append. See [supported HTML](../../docs/onenote/onenote-add-ins-page-content.md#supported-html) for the OneNote add-ins JavaScript API.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendHtml(html: string): void;
        /**
         *
         * Adds the specified image to table cell.
         *
         * @param base64EncodedImage HTML string to append.
         * @param width Optional. Width in the unit of Points. The default value is null and image width will be respected.
         * @param height Optional. Height in the unit of Points. The default value is null and image height will be respected.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendImage(base64EncodedImage: string, width: number, height: number): OneNote.Image;
        /**
         *
         * Adds the specified text to table cell.
         *
         * @param paragraphText HTML string to append.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendRichText(paragraphText: string): OneNote.RichText;
        /**
         *
         * Adds a table with the specified number of rows and columns to table cell.
         *
         * @param rowCount Required. The number of rows in the table.
         * @param columnCount Required. The number of columns in the table.
         * @param values Optional 2D array. Cells are filled if the corresponding strings are specified in the array.
         *
         * [Api set: OneNoteApi 1.1]
         */
        appendTable(rowCount: number, columnCount: number, values?: Array<Array<string>>): OneNote.Table;
        /**
         *
         * Clears the contents of the cell.
         *
         * [Api set: OneNoteApi 1.1]
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableCell;
    }
    /**
     *
     * Contains a collection of TableCell objects.
     *
     * [Api set: OneNoteApi 1.1]
     */
    class TableCellCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<OneNote.TableCell>;
        /**
         *
         * Returns the number of tablecells in this collection. Read-only.
         *
         * [Api set: OneNoteApi 1.1]
         */
        count: number;
        /**
         *
         * Gets a table cell object by ID or by its index in the collection. Read-only.
         *
         * @param index A number that identifies the index location of a table cell object.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItem(index: number | string): OneNote.TableCell;
        /**
         *
         * Gets a tablecell at its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         *
         * [Api set: OneNoteApi 1.1]
         */
        getItemAt(index: number): OneNote.TableCell;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableCellCollection;
    }
    /**
     *
     * Represents data obtained by OCR (optical character recognition) of an image
     *
     * [Api set: OneNoteApi 1.1]
     */
    interface ImageOcrData {
        /**
         *
         * Represents the OCR language, with values such as EN-US
         *
         * [Api set: OneNoteApi 1.1]
         */
        ocrLanguageId: string;
        /**
         *
         * Represents the text obtained by OCR of the image
         *
         * [Api set: OneNoteApi 1.1]
         */
        ocrText: string;
    }
    /**
     *
     * Weak reference to an ink stroke object and its content parent
     *
     * [Api set: OneNoteApi 1.1]
     */
    interface InkStrokePointer {
        /**
         *
         * Represents the id of the page content object corresponding to this stroke
         *
         * [Api set: OneNoteApi 1.1]
         */
        contentId: string;
        /**
         *
         * Represents the id of the ink stroke
         *
         * [Api set: OneNoteApi 1.1]
         */
        inkStrokeId: string;
    }
    /**
     * [Api set: OneNoteApi]
     */
    module InsertLocation {
        var before: string;
        var after: string;
    }
    /**
     * [Api set: OneNoteApi]
     */
    module Alignment {
        var left: string;
        var centered: string;
        var right: string;
        var justified: string;
    }
    /**
     * [Api set: OneNoteApi]
     */
    module Selected {
        var notSelected: string;
        var partialSelected: string;
        var selected: string;
    }
    /**
     * [Api set: OneNoteApi]
     */
    module PageContentType {
        var outline: string;
        var image: string;
        var ink: string;
        var other: string;
    }
    /**
     * [Api set: OneNoteApi]
     */
    module ParagraphType {
        var richText: string;
        var image: string;
        var table: string;
        var ink: string;
        var other: string;
    }
    module ErrorCodes {
        var generalException: string;
    }
}
declare namespace OneNote {
    class RequestContext extends OfficeExtension.ClientRequestContext {
        private m_onenote;
        constructor(url?: string);
        application: Application;
    }
    /**
 * Executes a batch script that performs actions on the OneNote object model. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
 * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the OneNote application. Since the Office add-in and the WoOneNote application run in two different processes, the request context is required to get access to the OneNote object model from the add-in.
 */
    function run<T>(batch: (context: OneNote.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
}


////////////////////////////////////////////////////////////////
/////////////////////// End OneNote APIs ///////////////////////
////////////////////////////////////////////////////////////////