// Type definitions for Office.js
// Project: http://dev.office.com
// Definitions by: OfficeDev <https://github.com/OfficeDev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
office-js
Copyright (c) Microsoft Corporation
*/

declare module Office {
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
}
declare module OfficeExtension {
    /** An abstract proxy object that represents an object in an Office document. You create proxy objects from the context (or from other proxy objects), add commands to a queue to act on the object, and then synchronize the proxy object state with the document by calling "context.sync()". */
    class ClientObject {
        /** The request context associated with the object */
        context: ClientRequestContext;
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
        /** Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties. */
        load(object: ClientObject, option?: string | string[] | LoadOption): void;
        /** Adds a trace message to the queue. If the promise returned by "context.sync()" is rejected due to an error, this adds a ".traceMessages" array to the OfficeExtension.Error object, containing all trace messages that were executed. These messages can help you monitor the program execution sequence and detect the cause of the error. */
        trace(message: string): void;
        /** Synchronizes the state between JavaScript proxy objects and the Office document, by executing instructions queued on the request context and retrieving properties of loaded Office objects for use in your code.�This method returns a promise, which is resolved when the synchronization is complete. */
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
    /** A Promise object that represents a deferred interaction with the host Office application. Promises can be chained via ".then", and errors can be caught via ".catch".  Remember to always use a ".catch" on the outer promise, and to return intermediary promises so as not to break the promise chain. */
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

declare module Office {
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
        SlideRange
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
        setDataAsync(data: any, options?: any, callback?: (result: AsyncResult) => void): void;
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
    export interface Bindings {
        /**
         * Gets a value that indicates whether the content is in HTML or text format.
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        getTypeAsync(options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Adds the specified content to the beginning of the item body
         * @param data The string to be inserted at the beginning of the body
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        prependAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Replaces the selection in the body with the specified text
         * @param data The string to be inserted at the beginning of the body
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        setSelectedDataAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
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
        goToByIdAsync(id: string, goToType: GoToType, options?: any, callback?: (result: AsyncResult) => void): void;
        goToByIdAsync(id: number, goToType: GoToType, options?: any, callback?: (result: AsyncResult) => void): void;
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
        setSelectedDataAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void;
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
        addColumnsAsync(tableData: TableData, options?: any, callback?: (result: AsyncResult) => void): void;
        /**
         * Adds the specified rows to the table  
         * @param rows  A 2D array with the rows to add 
         * @param options Syntax example: {asyncContext:context}
         *       asyncContext: Object keeping state for the callback
         * @param callback The optional callback method
         */
        addRowsAsync(rows: any[][], options?: any, callback?: (result: AsyncResult) => void): void;
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
        setFormatsAsync(formatsInfo?: any[][], options?: any, callback?: (result: AsyncResult) => void): void;
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
        constructor(rows: any[][], headers: any[][]);
        headers: any[][];
        rows: any[][];
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


declare module Excel {
    /**
     *
     * Represents the Excel application that manages the workbook.
     */
    class Application extends OfficeExtension.ClientObject {
        private m_calculationMode;
        /**
         *
         * Returns the calculation mode used in the workbook. See Excel.CalculationMode for details. Read-only.
         */
        calculationMode: string;
        /**
         *
         * Recalculate all currently opened workbooks in Excel.
         *
         * @param calculationType Specifies the calculation type to use. See Excel.CalculationType for details.
         */
        calculate(calculationType: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Application;
    }
    /**
     *
     * Workbook is the top level object which contains related workbook objects such as worksheets, tables, ranges, etc.
     */
    class Workbook extends OfficeExtension.ClientObject {
        private m_application;
        private m_bindings;
        private m_names;
        private m_tables;
        private m_worksheets;
        /**
         *
         * Represents Excel application instance that contains this workbook. Read-only.
         */
        application: Excel.Application;
        /**
         *
         * Represents a collection of bindings that are part of the workbook. Read-only.
         */
        bindings: Excel.BindingCollection;
        /**
         *
         * Represents a collection of workbook scoped named items (named ranges and constants). Read-only.
         */
        names: Excel.NamedItemCollection;
        /**
         *
         * Represents a collection of tables associated with the workbook. Read-only.
         */
        tables: Excel.TableCollection;
        /**
         *
         * Represents a collection of worksheets associated with the workbook. Read-only.
         */
        worksheets: Excel.WorksheetCollection;
        /**
         *
         * Gets the currently selected range from the workbook.
         *
         */
        getSelectedRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Workbook;
    }
    /**
     *
     * An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc.
     */
    class Worksheet extends OfficeExtension.ClientObject {
        private m_charts;
        private m_id;
        private m_name;
        private m_position;
        private m_tables;
        private m_visibility;
        /**
         *
         * Returns collection of charts that are part of the worksheet. Read-only.
         */
        charts: Excel.ChartCollection;
        /**
         *
         * Collection of tables that are part of the worksheet. Read-only.
         */
        tables: Excel.TableCollection;
        /**
         *
         * Returns a value that uniquely identifies the worksheet in a given workbook. The value of the identifier remains the same even when the worksheet is renamed or moved. Read-only.
         */
        id: string;
        /**
         *
         * The display name of the worksheet.
         */
        name: string;
        /**
         *
         * The zero-based position of the worksheet within the workbook.
         */
        position: number;
        /**
         *
         * The Visibility of the worksheet, Read-only.
         */
        visibility: string;
        /**
         *
         * Activate the worksheet in the Excel UI.
         *
         */
        activate(): void;
        /**
         *
         * Deletes the worksheet from the workbook.
         *
         */
        delete(): void;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid.
         *
         * @param row The row number of the cell to be retrieved. Zero-indexed.
         * @param column the column number of the cell to be retrieved. Zero-indexed.
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets the range object specified by the address or name.
         *
         * @param address The address or the name of the range. If not specified, the entire worksheet range is returned.
         */
        getRange(address?: string): Excel.Range;
        /**
         *
         * The used range is the smallest range than encompasses any cells that have a value or formatting assigned to them. If the worksheet is blank, this function will return the top left cell.
         *
         */
        getUsedRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Worksheet;
    }
    /**
     *
     * Represents a collection of worksheet objects that are part of the workbook.
     */
    class WorksheetCollection extends OfficeExtension.ClientObject {
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Worksheet>;
        /**
         *
         * Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call ".activate() on it.
         *
         * @param name The name of the worksheet to be added. If specified, name should be unqiue. If not specified, Excel determines the name of the new worksheet.
         */
        add(name?: string): Excel.Worksheet;
        /**
         *
         * Gets the currently active worksheet in the workbook.
         *
         */
        getActiveWorksheet(): Excel.Worksheet;
        /**
         *
         * Gets a worksheet object using its Name or ID.
         *
         * @param key The Name or ID of the worksheet.
         */
        getItem(key: string): Excel.Worksheet;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.WorksheetCollection;
    }
    /**
     *
     * Range represents a set of one or more contiguous cells such as a cell, a row, a column, block of cells, etc.
     */
    class Range extends OfficeExtension.ClientObject {
        private m_address;
        private m_addressLocal;
        private m_cellCount;
        private m_columnCount;
        private m_columnIndex;
        private m_format;
        private m_formulas;
        private m_formulasLocal;
        private m_numberFormat;
        private m_rowCount;
        private m_rowIndex;
        private m_text;
        private m_valueTypes;
        private m_values;
        private m_worksheet;
        private m__ReferenceId;
        /**
         *
         * Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
         */
        format: Excel.RangeFormat;
        /**
         *
         * The worksheet containing the current range. Read-only.
         */
        worksheet: Excel.Worksheet;
        /**
         *
         * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4). Read-only.
         */
        address: string;
        /**
         *
         * Represents range reference for the specified range in the language of the user. Read-only.
         */
        addressLocal: string;
        /**
         *
         * Number of cells in the range. Read-only.
         */
        cellCount: number;
        /**
         *
         * Represents the total number of columns in the range. Read-only.
         */
        columnCount: number;
        /**
         *
         * Represents the column number of the first cell in the range. Zero-indexed. Read-only.
         */
        columnIndex: number;
        /**
         *
         * Represents the formula in A1-style notation.
         */
        formulas: Array<Array<any>>;
        /**
         *
         * Represents the formula in A1-style notation, in the user's language and number-formatting locale.  For example, the English "=SUM(A1, 1.5)" formula would become "=SUMME(A1; 1,5)" in German.
         */
        formulasLocal: Array<Array<any>>;
        /**
         *
         * Represents Excel's number format code for the given cell.
         */
        numberFormat: Array<Array<any>>;
        /**
         *
         * Returns the total number of rows in the range. Read-only.
         */
        rowCount: number;
        /**
         *
         * Returns the row number of the first cell in the range. Zero-indexed. Read-only.
         */
        rowIndex: number;
        /**
         *
         * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that happens in Excel UI will not affect the text value returned by the API. Read-only.
         */
        text: Array<Array<any>>;
        /**
         *
         * Represents the type of data of each cell. Read-only.
         */
        valueTypes: Array<Array<string>>;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         */
        values: Array<Array<any>>;
        /**
         *
         * Clear range values, format, fill, border, etc.
         *
         * @param applyTo Determines the type of clear action. See Excel.ClearApplyTo for details.
         */
        clear(applyTo?: string): void;
        /**
         *
         * Deletes the cells associated with the range.
         *
         * @param shift Specifies which way to shift the cells. See Excel.DeleteShiftDirection for details.
         */
        delete(shift: string): void;
        /**
         *
         * Gets the smallest range object that encompasses the given ranges. For example, the GetBoundingRect of "B2:C5" and "D10:E15" is "B2:E16".
         *
         * @param anotherRange The range object or address or range name.
         */
        getBoundingRect(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the range object containing the single cell based on row and column numbers. The cell can be outside the bounds of its parent range, so long as it's stays within the worksheet grid. The returned cell is located relative to the top left cell of the range.
         *
         * @param row Row number of the cell to be retrieved. Zero-indexed.
         * @param column Column number of the cell to be retrieved. Zero-indexed.
         */
        getCell(row: number, column: number): Excel.Range;
        /**
         *
         * Gets a column contained in the range.
         *
         * @param column Column number of the range to be retrieved. Zero-indexed.
         */
        getColumn(column: number): Excel.Range;
        /**
         *
         * Gets an object that represents the entire column of the range.
         *
         */
        getEntireColumn(): Excel.Range;
        /**
         *
         * Gets an object that represents the entire row of the range.
         *
         */
        getEntireRow(): Excel.Range;
        /**
         *
         * Gets the range object that represents the rectangular intersection of the given ranges.
         *
         * @param anotherRange The range object or range address that will be used to determine the intersection of ranges.
         */
        getIntersection(anotherRange: Excel.Range | string): Excel.Range;
        /**
         *
         * Gets the last cell within the range. For example, the last cell of "B2:D5" is "D5".
         *
         */
        getLastCell(): Excel.Range;
        /**
         *
         * Gets the last column within the range. For example, the last column of "B2:D5" is "D2:D5".
         *
         */
        getLastColumn(): Excel.Range;
        /**
         *
         * Gets the last row within the range. For example, the last row of "B2:D5" is "B5:D5".
         *
         */
        getLastRow(): Excel.Range;
        /**
         *
         * Gets an object which represents a range that's offset from the specified range. The dimension of the returned range will match this range. If the resulting range is forced outside the bounds of the worksheet grid, an exception will be thrown.
         *
         * @param rowOffset The number of rows (positive, negative, or 0) by which the range is to be offset. Positive values are offset downward, and negative values are offset upward.
         * @param columnOffset The number of columns (positive, negative, or 0) by which the range is to be offset. Positive values are offset to the right, and negative values are offset to the left.
         */
        getOffsetRange(rowOffset: number, columnOffset: number): Excel.Range;
        /**
         *
         * Gets a row contained in the range.
         *
         * @param row Row number of the range to be retrieved. Zero-indexed.
         */
        getRow(row: number): Excel.Range;
        /**
         *
         * Returns the used range of the given range object.
         *
         */
        getUsedRange(): Excel.Range;
        /**
         *
         * Inserts a cell or a range of cells into the worksheet in place of this range, and shifts the other cells to make space. Returns a new Range object at the now blank space.
         *
         * @param shift Specifies which way to shift the cells. See Excel.InsertShiftDirection for details.
         */
        insert(shift: string): Excel.Range;
        /**
         *
         * Selects the specified range in the Excel UI.
         *
         */
        select(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Range;
    }
    /**
     *
     * A collection of all the nameditem objects that are part of the workbook.
     */
    class NamedItemCollection extends OfficeExtension.ClientObject {
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.NamedItem>;
        /**
         *
         * Gets a nameditem object using its name
         *
         * @param name nameditem name.
         */
        getItem(name: string): Excel.NamedItem;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.NamedItemCollection;
    }
    /**
     *
     * Represents a defined name for a range of cells or value. Names can be primitive named objects (as seen in the type below), range object, reference to a range. This object can be used to obtain range object associated with names.
     */
    class NamedItem extends OfficeExtension.ClientObject {
        private m_name;
        private m_type;
        private m_value;
        private m_visible;
        private m__Id;
        /**
         *
         * The name of the object. Read-only.
         */
        name: string;
        /**
         *
         * Indicates what type of reference is associated with the name. See Excel.NamedItemType for details. Read-only.
         */
        type: string;
        /**
         *
         * Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
         */
        value: any;
        /**
         *
         * Specifies whether the object is visible or not.
         */
        visible: boolean;
        /**
         *
         * Returns the range object that is associated with the name. Throws an exception if the named item's type is not a range.
         *
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.NamedItem;
    }
    /**
     *
     * Represents an Office.js binding that is defined in the workbook.
     */
    class Binding extends OfficeExtension.ClientObject {
        private m_id;
        private m_type;
        /**
         *
         * Represents binding identifier. Read-only.
         */
        id: string;
        /**
         *
         * Returns the type of the binding. See Excel.BindingType for details. Read-only.
         */
        type: string;
        /**
         *
         * Returns the range represented by the binding. Will throw an error if binding is not of the correct type.
         *
         */
        getRange(): Excel.Range;
        /**
         *
         * Returns the table represented by the binding. Will throw an error if binding is not of the correct type.
         *
         */
        getTable(): Excel.Table;
        /**
         *
         * Returns the text represented by the binding. Will throw an error if binding is not of the correct type.
         *
         */
        getText(): OfficeExtension.ClientResult<string>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Binding;
    }
    /**
     *
     * Represents the collection of all the binding objects that are part of the workbook.
     */
    class BindingCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Binding>;
        /**
         *
         * Returns the number of bindings in the collection. Read-only.
         */
        count: number;
        /**
         *
         * Gets a binding object by ID.
         *
         * @param id Id of the binding object to be retrieved.
         */
        getItem(id: string): Excel.Binding;
        /**
         *
         * Gets a binding object based on its position in the items array.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Binding;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.BindingCollection;
    }
    /**
     *
     * Represents a collection of all the tables that are part of the workbook.
     */
    class TableCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Table>;
        /**
         *
         * Returns the number of tables in the workbook. Read-only.
         */
        count: number;
        /**
         *
         * Create a new table. The range source address determines the worksheet under which the table will be added. If the table cannot be added (e.g., because the address is invalid, or the table would overlap with another table), an error will be thrown.
         *
         * @param address Address or name of the range object representing the data source. If the address does not contain a sheet name, the currently-active sheet is used.
         * @param hasHeaders Boolean value that indicates whether the data being imported has column labels. If the source does not contain headers (i.e,. when this property set to false), Excel will automatically generate header shifting the data down by one row.
         */
        add(address: string, hasHeaders: boolean): Excel.Table;
        /**
         *
         * Gets a table by Name or ID.
         *
         * @param key Name or ID of the table to be retrieved.
         */
        getItem(key: number | string): Excel.Table;
        /**
         *
         * Gets a table based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Table;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableCollection;
    }
    /**
     *
     * Represents an Excel table.
     */
    class Table extends OfficeExtension.ClientObject {
        private m_columns;
        private m_id;
        private m_name;
        private m_rows;
        private m_showHeaders;
        private m_showTotals;
        private m_style;
        /**
         *
         * Represents a collection of all the columns in the table. Read-only.
         */
        columns: Excel.TableColumnCollection;
        /**
         *
         * Represents a collection of all the rows in the table. Read-only.
         */
        rows: Excel.TableRowCollection;
        /**
         *
         * Returns a value that uniquely identifies the table in a given workbook. The value of the identifier remains the same even when the table is renamed. Read-only.
         */
        id: number;
        /**
         *
         * Name of the table.
         */
        name: string;
        /**
         *
         * Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
         */
        showHeaders: boolean;
        /**
         *
         * Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
         */
        showTotals: boolean;
        /**
         *
         * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21, TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style present in the workbook can also be specified.
         */
        style: string;
        /**
         *
         * Deletes the table.
         *
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the table.
         *
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with header row of the table.
         *
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire table.
         *
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with totals row of the table.
         *
         */
        getTotalRowRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Table;
    }
    /**
     *
     * Represents a collection of all the columns that are part of the table.
     */
    class TableColumnCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.TableColumn>;
        /**
         *
         * Returns the number of columns in the table. Read-only.
         */
        count: number;
        /**
         *
         * Adds a new column to the table.
         *
         * @param index Specifies the relative position of the new column. The previous column at this position is shifted to the right. The index value should be equal to or less than the last column's index value, so it cannot be used to append a column at the end of the table. Zero-indexed.
         * @param values A 2-dimensional array of unformatted values of the table column.
         */
        add(index: number, values?: Array<Array<boolean | string | number>> | boolean | string | number): Excel.TableColumn;
        /**
         *
         * Gets a column object by Name or ID.
         *
         * @param key Column Name or ID.
         */
        getItem(key: number | string): Excel.TableColumn;
        /**
         *
         * Gets a column based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.TableColumn;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableColumnCollection;
    }
    /**
     *
     * Represents a column in a table.
     */
    class TableColumn extends OfficeExtension.ClientObject {
        private m_id;
        private m_index;
        private m_name;
        private m_values;
        /**
         *
         * Returns a unique key that identifies the column within the table. Read-only.
         */
        id: number;
        /**
         *
         * Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
         */
        index: number;
        /**
         *
         * Returns the name of the table column. Read-only.
         */
        name: string;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         */
        values: Array<Array<any>>;
        /**
         *
         * Deletes the column from the table.
         *
         */
        delete(): void;
        /**
         *
         * Gets the range object associated with the data body of the column.
         *
         */
        getDataBodyRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the header row of the column.
         *
         */
        getHeaderRowRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the entire column.
         *
         */
        getRange(): Excel.Range;
        /**
         *
         * Gets the range object associated with the totals row of the column.
         *
         */
        getTotalRowRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableColumn;
    }
    /**
     *
     * Represents a collection of all the rows that are part of the table.
     */
    class TableRowCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.TableRow>;
        /**
         *
         * Returns the number of rows in the table. Read-only.
         */
        count: number;
        /**
         *
         * Adds a new row to the table.
         *
         * @param index Specifies the relative position of the new row. If null, the addition happens at the end. Any rows below the inserted row are shifted downwards. Zero-indexed.
         * @param values A 2-dimensional array of unformatted values of the table row.
         */
        add(index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number): Excel.TableRow;
        /**
         *
         * Gets a row based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.TableRow;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableRowCollection;
    }
    /**
     *
     * Represents a row in a table.
     */
    class TableRow extends OfficeExtension.ClientObject {
        private m_index;
        private m_values;
        /**
         *
         * Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
         */
        index: number;
        /**
         *
         * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell that contain an error will return the error string.
         */
        values: Array<Array<any>>;
        /**
         *
         * Deletes the row from the table.
         *
         */
        delete(): void;
        /**
         *
         * Returns the range object associated with the entire row.
         *
         */
        getRange(): Excel.Range;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableRow;
    }
    /**
     *
     * A format object encapsulating the range's font, fill, borders, alignment, and other properties.
     */
    class RangeFormat extends OfficeExtension.ClientObject {
        private m_borders;
        private m_fill;
        private m_font;
        private m_horizontalAlignment;
        private m_verticalAlignment;
        private m_wrapText;
        /**
         *
         * Collection of border objects that apply to the overall range selected Read-only.
         */
        borders: Excel.RangeBorderCollection;
        /**
         *
         * Returns the fill object defined on the overall range. Read-only.
         */
        fill: Excel.RangeFill;
        /**
         *
         * Returns the font object defined on the overall range selected Read-only.
         */
        font: Excel.RangeFont;
        /**
         *
         * Represents the horizontal alignment for the specified object. See Excel.HorizontalAlignment for details.
         */
        horizontalAlignment: string;
        /**
         *
         * Represents the vertical alignment for the specified object. See Excel.VerticalAlignment for details.
         */
        verticalAlignment: string;
        /**
         *
         * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap setting
         */
        wrapText: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFormat;
    }
    /**
     *
     * Represents the background of a range object.
     */
    class RangeFill extends OfficeExtension.ClientObject {
        private m_color;
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange")
         */
        color: string;
        /**
         *
         * Resets the range background.
         *
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFill;
    }
    /**
     *
     * Represents the border of an object.
     */
    class RangeBorder extends OfficeExtension.ClientObject {
        private m_color;
        private m_sideIndex;
        private m_style;
        private m_weight;
        /**
         *
         * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         */
        color: string;
        /**
         *
         * Constant value that indicates the specific side of the border. See Excel.BorderIndex for details. Read-only.
         */
        sideIndex: string;
        /**
         *
         * One of the constants of line style specifying the line style for the border. See Excel.BorderLineStyle for details.
         */
        style: string;
        /**
         *
         * Specifies the weight of the border around a range. See Excel.BorderWeight for details.
         */
        weight: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeBorder;
    }
    /**
     *
     * Represents the border objects that make up range border.
     */
    class RangeBorderCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.RangeBorder>;
        /**
         *
         * Number of border objects in the collection. Read-only.
         */
        count: number;
        /**
         *
         * Gets a border object using its name
         *
         * @param index Index value of the border object to be retrieved. See Excel.BorderIndex for details.
         */
        getItem(index: string): Excel.RangeBorder;
        /**
         *
         * Gets a border object using its index
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.RangeBorder;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeBorderCollection;
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for an object.
     */
    class RangeFont extends OfficeExtension.ClientObject {
        private m_bold;
        private m_color;
        private m_italic;
        private m_name;
        private m_size;
        private m_underline;
        /**
         *
         * Represents the bold status of font.
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         */
        name: string;
        /**
         *
         * Font size.
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.RangeUnderlineStyle for details.
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFont;
    }
    /**
     *
     * A collection of all the chart objects on a worksheet.
     */
    class ChartCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.Chart>;
        /**
         *
         * Returns the number of charts in the worksheet. Read-only.
         */
        count: number;
        /**
         *
         * Creates a new chart.
         *
         * @param type Represents the type of a chart. See Excel.ChartType for details.
         * @param sourceData The Range object corresponding to the source data.
         * @param seriesBy Specifies the way columns or rows are used as data series on the chart. See Excel.ChartSeriesBy for details.
         */
        add(type: string, sourceData: Excel.Range, seriesBy?: string): Excel.Chart;
        /**
         *
         * Gets a chart using its name. If there are multiple charts with the same name, the first one will be returned.
         *
         * @param name Name of the chart to be retrieved.
         */
        getItem(name: string): Excel.Chart;
        /**
         *
         * Gets a chart based on its position in the collection.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.Chart;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartCollection;
    }
    /**
     *
     * Represents a chart object in a workbook.
     */
    class Chart extends OfficeExtension.ClientObject {
        private m_axes;
        private m_dataLabels;
        private m_format;
        private m_height;
        private m_left;
        private m_legend;
        private m_name;
        private m_series;
        private m_title;
        private m_top;
        private m_width;
        private m__Id;
        /**
         *
         * Represents chart axes. Read-only.
         */
        axes: Excel.ChartAxes;
        /**
         *
         * Represents the datalabels on the chart. Read-only.
         */
        dataLabels: Excel.ChartDataLabels;
        /**
         *
         * Encapsulates the format properties for the chart area. Read-only.
         */
        format: Excel.ChartAreaFormat;
        /**
         *
         * Represents the legend for the chart. Read-only.
         */
        legend: Excel.ChartLegend;
        /**
         *
         * Represents either a single series or collection of series in the chart. Read-only.
         */
        series: Excel.ChartSeriesCollection;
        /**
         *
         * Represents the title of the specified chart, including the text, visibility, position and formating of the title. Read-only.
         */
        title: Excel.ChartTitle;
        /**
         *
         * Represents the height, in points, of the chart object.
         */
        height: number;
        /**
         *
         * The distance, in points, from the left side of the chart to the worksheet origin.
         */
        left: number;
        /**
         *
         * Represents the name of a chart object.
         */
        name: string;
        /**
         *
         * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of the chart area (on a chart).
         */
        top: number;
        /**
         *
         * Represents the width, in points, of the chart object.
         */
        width: number;
        /**
         *
         * Deletes the chart object.
         *
         */
        delete(): void;
        /**
         *
         * Resets the source data for the chart.
         *
         * @param sourceData The Range object corresponding to the source data.
         * @param seriesBy Specifies the way columns or rows are used as data series on the chart. Can be one of the following: Auto (default), Rows, Columns. See Excel.ChartSeriesBy for details.
         */
        setData(sourceData: Excel.Range, seriesBy?: string): void;
        /**
         *
         * Positions the chart relative to cells on the worksheet.
         *
         * @param startCell The start cell. This is where the chart will be moved to. The start cell is the top-left or top-right cell, depending on the user's right-to-left display settings.
         * @param endCell (Optional) The end cell. If specified, the chart's width and height will be set to fully cover up this cell/range.
         */
        setPosition(startCell: Excel.Range | string, endCell?: Excel.Range | string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Chart;
    }
    /**
     *
     * Encapsulates the format properties for the overall chart area.
     */
    class ChartAreaFormat extends OfficeExtension.ClientObject {
        private m_fill;
        private m_font;
        /**
         *
         * Represents the fill format of an object, which includes background formatting information. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAreaFormat;
    }
    /**
     *
     * Represents a collection of chart series.
     */
    class ChartSeriesCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.ChartSeries>;
        /**
         *
         * Returns the number of series in the collection. Read-only.
         */
        count: number;
        /**
         *
         * Retrieves a series based on its position in the collection
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.ChartSeries;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeriesCollection;
    }
    /**
     *
     * Represents a series in a chart.
     */
    class ChartSeries extends OfficeExtension.ClientObject {
        private m_format;
        private m_name;
        private m_points;
        /**
         *
         * Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
         */
        format: Excel.ChartSeriesFormat;
        /**
         *
         * Represents a collection of all points in the series. Read-only.
         */
        points: Excel.ChartPointsCollection;
        /**
         *
         * Represents the name of a series in a chart.
         */
        name: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeries;
    }
    /**
     *
     * encapsulates the format properties for the chart series
     */
    class ChartSeriesFormat extends OfficeExtension.ClientObject {
        private m_fill;
        private m_line;
        /**
         *
         * Represents the fill format of a chart series, which includes background formating information. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents line formatting. Read-only.
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeriesFormat;
    }
    /**
     *
     * A collection of all the chart points within a series inside a chart.
     */
    class ChartPointsCollection extends OfficeExtension.ClientObject {
        private m_count;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Excel.ChartPoint>;
        /**
         *
         * Returns the number of chart points in the collection. Read-only.
         */
        count: number;
        /**
         *
         * Retrieve a point based on its position within the series.
         *
         * @param index Index value of the object to be retrieved. Zero-indexed.
         */
        getItemAt(index: number): Excel.ChartPoint;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPointsCollection;
    }
    /**
     *
     * Represents a point of a series in a chart.
     */
    class ChartPoint extends OfficeExtension.ClientObject {
        private m_format;
        private m_value;
        /**
         *
         * Encapsulates the format properties chart point. Read-only.
         */
        format: Excel.ChartPointFormat;
        /**
         *
         * Returns the value of a chart point. Read-only.
         */
        value: any;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPoint;
    }
    /**
     *
     * Represents formatting object for chart points.
     */
    class ChartPointFormat extends OfficeExtension.ClientObject {
        private m_fill;
        /**
         *
         * Represents the fill format of a chart, which includes background formating information. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPointFormat;
    }
    /**
     *
     * Represents the chart axes.
     */
    class ChartAxes extends OfficeExtension.ClientObject {
        private m_categoryAxis;
        private m_seriesAxis;
        private m_valueAxis;
        /**
         *
         * Represents the category axis in a chart. Read-only.
         */
        categoryAxis: Excel.ChartAxis;
        /**
         *
         * Represents the series axis of a 3-dimensional chart. Read-only.
         */
        seriesAxis: Excel.ChartAxis;
        /**
         *
         * Represents the value axis in an axis. Read-only.
         */
        valueAxis: Excel.ChartAxis;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxes;
    }
    /**
     *
     * Represents a single axis in a chart.
     */
    class ChartAxis extends OfficeExtension.ClientObject {
        private m_format;
        private m_majorGridlines;
        private m_majorUnit;
        private m_maximum;
        private m_minimum;
        private m_minorGridlines;
        private m_minorUnit;
        private m_title;
        /**
         *
         * Represents the formatting of a chart object, which includes line and font formatting. Read-only.
         */
        format: Excel.ChartAxisFormat;
        /**
         *
         * Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
         */
        majorGridlines: Excel.ChartGridlines;
        /**
         *
         * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
         */
        minorGridlines: Excel.ChartGridlines;
        /**
         *
         * Represents the axis title. Read-only.
         */
        title: Excel.ChartAxisTitle;
        /**
         *
         * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string.  The returned value is always a number.
         */
        majorUnit: any;
        /**
         *
         * Represents the maximum value on the value axis.  Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         */
        maximum: any;
        /**
         *
         * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis values).  The returned value is always a number.
         */
        minimum: any;
        /**
         *
         * Represents the interval between two minor tick marks. "Can be set to a numeric value or an empty string (for automatic axis values). The returned value is always a number.
         */
        minorUnit: any;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxis;
    }
    /**
     *
     * Encapsulates the format properties for the chart axis.
     */
    class ChartAxisFormat extends OfficeExtension.ClientObject {
        private m_font;
        private m_line;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
         */
        font: Excel.ChartFont;
        /**
         *
         * Represents chart line formatting. Read-only.
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisFormat;
    }
    /**
     *
     * Represents the title of a chart axis.
     */
    class ChartAxisTitle extends OfficeExtension.ClientObject {
        private m_format;
        private m_text;
        private m_visible;
        /**
         *
         * Represents the formatting of chart axis title. Read-only.
         */
        format: Excel.ChartAxisTitleFormat;
        /**
         *
         * Represents the axis title.
         */
        text: string;
        /**
         *
         * A boolean that specifies the visibility of an axis title.
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisTitle;
    }
    /**
     *
     * Represents the chart axis title formatting.
     */
    class ChartAxisTitleFormat extends OfficeExtension.ClientObject {
        private m_font;
        /**
         *
         * Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisTitleFormat;
    }
    /**
     *
     * Represents a collection of all the data labels on a chart point.
     */
    class ChartDataLabels extends OfficeExtension.ClientObject {
        private m_format;
        private m_position;
        private m_separator;
        private m_showBubbleSize;
        private m_showCategoryName;
        private m_showLegendKey;
        private m_showPercentage;
        private m_showSeriesName;
        private m_showValue;
        /**
         *
         * Represents the format of chart data labels, which includes fill and font formatting. Read-only.
         */
        format: Excel.ChartDataLabelFormat;
        /**
         *
         * DataLabelPosition value that represents the position of the data label. See Excel.ChartDataLabelPosition for details.
         */
        position: string;
        /**
         *
         * String representing the separator used for the data labels on a chart.
         */
        separator: string;
        /**
         *
         * Boolean value representing if the data label bubble size is visible or not.
         */
        showBubbleSize: boolean;
        /**
         *
         * Boolean value representing if the data label category name is visible or not.
         */
        showCategoryName: boolean;
        /**
         *
         * Boolean value representing if the data label legend key is visible or not.
         */
        showLegendKey: boolean;
        /**
         *
         * Boolean value representing if the data label percentage is visible or not.
         */
        showPercentage: boolean;
        /**
         *
         * Boolean value representing if the data label series name is visible or not.
         */
        showSeriesName: boolean;
        /**
         *
         * Boolean value representing if the data label value is visible or not.
         */
        showValue: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartDataLabels;
    }
    /**
     *
     * Encapsulates the format properties for the chart data labels.
     */
    class ChartDataLabelFormat extends OfficeExtension.ClientObject {
        private m_fill;
        private m_font;
        /**
         *
         * Represents the fill format of the current chart data label. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartDataLabelFormat;
    }
    /**
     *
     * Represents major or minor gridlines on a chart axis.
     */
    class ChartGridlines extends OfficeExtension.ClientObject {
        private m_format;
        private m_visible;
        /**
         *
         * Represents the formatting of chart gridlines. Read-only.
         */
        format: Excel.ChartGridlinesFormat;
        /**
         *
         * Boolean value representing if the axis gridlines are visible or not.
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartGridlines;
    }
    /**
     *
     * Encapsulates the format properties for chart gridlines.
     */
    class ChartGridlinesFormat extends OfficeExtension.ClientObject {
        private m_line;
        /**
         *
         * Represents chart line formatting. Read-only.
         */
        line: Excel.ChartLineFormat;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartGridlinesFormat;
    }
    /**
     *
     * Represents the legend in a chart.
     */
    class ChartLegend extends OfficeExtension.ClientObject {
        private m_format;
        private m_overlay;
        private m_position;
        private m_visible;
        /**
         *
         * Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
         */
        format: Excel.ChartLegendFormat;
        /**
         *
         * Boolean value for whether the chart legend should overlap with the main body of the chart.
         */
        overlay: boolean;
        /**
         *
         * Represents the position of the legend on the chart. See Excel.ChartLegendPosition for details.
         */
        position: string;
        /**
         *
         * A boolean value the represents the visibility of a ChartLegend object.
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLegend;
    }
    /**
     *
     * Encapsulates the format properties of a chart legend.
     */
    class ChartLegendFormat extends OfficeExtension.ClientObject {
        private m_fill;
        private m_font;
        /**
         *
         * Represents the fill format of an object, which includes background formating information. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLegendFormat;
    }
    /**
     *
     * Represents a chart title object of a chart.
     */
    class ChartTitle extends OfficeExtension.ClientObject {
        private m_format;
        private m_overlay;
        private m_text;
        private m_visible;
        /**
         *
         * Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
         */
        format: Excel.ChartTitleFormat;
        /**
         *
         * Boolean value representing if the chart title will overlay the chart or not.
         */
        overlay: boolean;
        /**
         *
         * Represents the title text of a chart.
         */
        text: string;
        /**
         *
         * A boolean value the represents the visibility of a chart title object.
         */
        visible: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartTitle;
    }
    /**
     *
     * Provides access to the office art formatting for chart title.
     */
    class ChartTitleFormat extends OfficeExtension.ClientObject {
        private m_fill;
        private m_font;
        /**
         *
         * Represents the fill format of an object, which includes background formating information. Read-only.
         */
        fill: Excel.ChartFill;
        /**
         *
         * Represents the font attributes (font name, font size, color, etc.) for an object. Read-only.
         */
        font: Excel.ChartFont;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartTitleFormat;
    }
    /**
     *
     * Represents the fill formatting for a chart element.
     */
    class ChartFill extends OfficeExtension.ClientObject {
        /**
         *
         * Clear the fill color of a chart element.
         *
         */
        clear(): void;
        /**
         *
         * Sets the fill formatting of a chart element to a uniform color.
         *
         * @param color HTML color code representing the color of the border line, of the form #RRGGBB (e.g. "FFA500") or as a named HTML color (e.g. "orange").
         */
        setSolidColor(color: string): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFill;
    }
    /**
     *
     * Enapsulates the formatting options for line elements.
     */
    class ChartLineFormat extends OfficeExtension.ClientObject {
        private m_color;
        /**
         *
         * HTML color code representing the color of lines in the chart.
         */
        color: string;
        /**
         *
         * Clear the line format of a chart element.
         *
         */
        clear(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLineFormat;
    }
    /**
     *
     * This object represents the font attributes (font name, font size, color, etc.) for a chart object.
     */
    class ChartFont extends OfficeExtension.ClientObject {
        private m_bold;
        private m_color;
        private m_italic;
        private m_name;
        private m_size;
        private m_underline;
        /**
         *
         * Represents the bold status of font.
         */
        bold: boolean;
        /**
         *
         * HTML color code representation of the text color. E.g. #FF0000 represents Red.
         */
        color: string;
        /**
         *
         * Represents the italic status of the font.
         */
        italic: boolean;
        /**
         *
         * Font name (e.g. "Calibri")
         */
        name: string;
        /**
         *
         * Size of the font (e.g. 11)
         */
        size: number;
        /**
         *
         * Type of underline applied to the font. See Excel.ChartUnderlineStyle for details.
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFont;
    }
    module BindingType {
        var range: string;
        var table: string;
        var text: string;
    }
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
    module BorderWeight {
        var hairline: string;
        var thin: string;
        var medium: string;
        var thick: string;
    }
    module CalculationMode {
        var automatic: string;
        var automaticExceptTables: string;
        var manual: string;
    }
    module CalculationType {
        var recalculate: string;
        var full: string;
        var fullRebuild: string;
    }
    module ClearApplyTo {
        var all: string;
        var formats: string;
        var contents: string;
    }
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
    module ChartLegendPosition {
        var invalid: string;
        var top: string;
        var bottom: string;
        var left: string;
        var right: string;
        var corner: string;
        var custom: string;
    }
    module ChartSeriesBy {
        var auto: string;
        var columns: string;
        var rows: string;
    }
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
    module ChartUnderlineStyle {
        var none: string;
        var single: string;
    }
    module DeleteShiftDirection {
        var up: string;
        var left: string;
    }
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
    module InsertShiftDirection {
        var down: string;
        var right: string;
    }
    module NamedItemType {
        var string: string;
        var integer: string;
        var double: string;
        var boolean: string;
        var range: string;
    }
    module RangeUnderlineStyle {
        var none: string;
        var single: string;
        var double: string;
        var singleAccountant: string;
        var doubleAccountant: string;
    }
    module SheetVisibility {
        var visible: string;
        var hidden: string;
        var veryHidden: string;
    }
    module RangeValueType {
        var unknown: string;
        var empty: string;
        var string: string;
        var integer: string;
        var double: string;
        var boolean: string;
        var error: string;
    }
    module VerticalAlignment {
        var top: string;
        var center: string;
        var bottom: string;
        var justify: string;
        var distributed: string;
    }
    module ErrorCodes {
        var accessDenied: string;
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
        private m_workbook;
        constructor(url?: string);
        workbook: Workbook;
    }
    /**
     * Executes a batch script that performs actions on the Excel object model. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param batch - A function that takes in an Excel.RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Excel application. Since the Office add-in and the Excel application run in two different processes, the request context is required to get access to the Excel object model from the add-in.
     */
    function run<T>(batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
}

declare module Word {
    /**
     *
     * Represents the body of a document or a section.
     */
    class Body extends OfficeExtension.ClientObject {
        private m_contentControls;
        private m_font;
        private m_inlinePictures;
        private m_paragraphs;
        private m_parentContentControl;
        private m_style;
        private m_text;
        private m__ReferenceId;
        /**
         *
         * Gets the collection of rich text content control objects that are in the body. Read-only.
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the body. Use this to get and set font name, size, color, and other properties. Read-only.
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects that are in the body. The collection does not include floating images. Read-only.
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the collection of paragraph objects that are in the body. Read-only.
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the content control that contains the body. Returns null if there isn't a parent content control. Read-only.
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets or sets the style used for the body. This is the name of the pre-installed or custom style.
         */
        style: string;
        /**
         *
         * Gets the text of the body. Use the insertText method to insert text. Read-only.
         */
        text: string;
        /**
         *
         * Clears the contents of the body object. The user can perform the undo operation on the cleared content.
         *
         */
        clear(): void;
        /**
         *
         * Gets the HTML representation of the body object.
         *
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the OOXML (Office Open XML) representation of the body object.
         *
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Inserts a break at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param breakType Required. The break type to add to the body.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the body object with a Rich Text content control.
         *
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document into the body at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. The base64 encoded file contents to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in the document.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts OOXML at the specified location.  The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts text into the body at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the body object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSoundsLike?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildCards?: boolean;
        }): Word.SearchResultCollection;
        /**
         *
         * Selects the body and navigates the Word UI to it.
         *
         */
        select(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Body;
    }
    /**
     *
     * Represents a content control. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported.
     */
    class ContentControl extends OfficeExtension.ClientObject {
        private m_appearance;
        private m_cannotDelete;
        private m_cannotEdit;
        private m_color;
        private m_contentControls;
        private m_font;
        private m_id;
        private m_inlinePictures;
        private m_paragraphs;
        private m_parentContentControl;
        private m_placeholderText;
        private m_removeWhenEdited;
        private m_style;
        private m_tag;
        private m_text;
        private m_title;
        private m_type;
        private m__ReferenceId;
        /**
         *
         * Gets the collection of content control objects in the content control. Read-only.
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the content control. Use this to get and set font name, size, color, and other properties. Read-only.
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects in the content control. The collection does not include floating images. Read-only.
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Get the collection of paragraph objects in the content control. Read-only.
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the content control that contains the content control. Returns null if there isn't a parent content control. Read-only.
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets or sets the appearance of the content control. The value can be 'boundingBox', 'tags' or 'hidden'.
         */
        appearance: string;
        /**
         *
         * Gets or sets a value that indicates whether the user can delete the content control. Mutually exclusive with removeWhenEdited.
         */
        cannotDelete: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the user can edit the contents of the content control.
         */
        cannotEdit: boolean;
        /**
         *
         * Gets or sets the color of the content control. Color is set in "#RRGGBB" format or by using the color name.
         */
        color: string;
        /**
         *
         * Gets an integer that represents the content control identifier. Read-only.
         */
        id: number;
        /**
         *
         * Gets or sets the placeholder text of the content control. Dimmed text will be displayed when the content control is empty.
         */
        placeholderText: string;
        /**
         *
         * Gets or sets a value that indicates whether the content control is removed after it is edited. Mutually exclusive with cannotDelete.
         */
        removeWhenEdited: boolean;
        /**
         *
         * Gets or sets the style used for the content control. This is the name of the pre-installed or custom style.
         */
        style: string;
        /**
         *
         * Gets or sets a tag to identify a content control.
         */
        tag: string;
        /**
         *
         * Gets the text of the content control. Read-only.
         */
        text: string;
        /**
         *
         * Gets or sets the title for a content control.
         */
        title: string;
        /**
         *
         * Gets the content control type. Only rich text content controls are supported currently. Read-only.
         */
        type: string;
        /**
         *
         * Clears the contents of the content control. The user can perform the undo operation on the cleared content.
         *
         */
        clear(): void;
        /**
         *
         * Deletes the content control and its content. If keepContent is set to true, the content is not deleted.
         *
         * @param keepContent Required. Indicates whether the content should be deleted with the content control. If keepContent is set to true, the content is not deleted.
         */
        delete(keepContent: boolean): void;
        /**
         *
         * Gets the HTML representation of the content control object.
         *
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the Office Open XML (OOXML) representation of the content control object.
         *
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Inserts a break at the specified location. The insertLocation value can be 'Before', 'After', 'Start' or 'End'.
         *
         * @param breakType Required. Type of break (breakType.md)
         * @param insertLocation Required. The value can be 'Before', 'After', 'Start' or 'End'.
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Inserts a document into the current content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. Base64 encoded contents of the file to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts OOXML into the content control at the specified location.  The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before', 'After', 'Start' or 'End'.
         *
         * @param paragraphText Required. The paragrph text to be inserted.
         * @param insertLocation Required. The value can be 'Before', 'After', 'Start' or 'End'.
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts text into the content control at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. The text to be inserted in to the content control.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the content control object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSoundsLike?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildCards?: boolean;
        }): Word.SearchResultCollection;
        /**
         *
         * Selects the content control. This causes Word to scroll to the selection.
         *
         */
        select(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ContentControl;
    }
    /**
     *
     * Contains a collection of ContentControl objects. Content controls are bounded and potentially labeled regions in a document that serve as containers for specific types of content. Individual content controls may contain contents such as images, tables, or paragraphs of formatted text. Currently, only rich text content controls are supported.
     */
    class ContentControlCollection extends OfficeExtension.ClientObject {
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Word.ContentControl>;
        /**
         *
         * Gets a content control by its identifier.
         *
         * @param id Required. A content control identifier.
         */
        getById(id: number): Word.ContentControl;
        /**
         *
         * Gets the content controls that have the specified tag.
         *
         * @param tag Required. A tag set on a content control.
         */
        getByTag(tag: string): Word.ContentControlCollection;
        /**
         *
         * Gets the content controls that have the specified title.
         *
         * @param title Required. The title of a content control.
         */
        getByTitle(title: string): Word.ContentControlCollection;
        /**
         *
         * Gets a content control by its index in the collection.
         *
         * @param index The index
         */
        getItem(index: number): Word.ContentControl;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ContentControlCollection;
    }
    /**
     *
     * The Document object is the top level object. A Document object contains one or more sections, content controls, and the body that contains the contents of the document.
     */
    class Document extends OfficeExtension.ClientObject {
        private m_body;
        private m_contentControls;
        private m_saved;
        private m_sections;
        /**
         *
         * Gets the body of the document. The body is the text that excludes headers, footers, footnotes, textboxes, etc.. Read-only.
         */
        body: Word.Body;
        /**
         *
         * Gets the collection of content control objects that are in the current document. This includes content controls in the body of the document, headers, footers, textboxes, etc.. Read-only.
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the collection of section objects that are in the document. Read-only.
         */
        sections: Word.SectionCollection;
        /**
         *
         * Indicates whether the changes in the document have been saved. A value of true indicates that the document hasn't changed since it was saved. Read-only.
         */
        saved: boolean;
        /**
         *
         * Gets the current selection of the document. Multiple selections are not supported.
         *
         */
        getSelection(): Word.Range;
        /**
         *
         * Saves the document. This will use the Word default file naming convention if the document has not been saved before.
         *
         */
        save(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Document;
    }
    /**
     *
     * Represents a font.
     */
    class Font extends OfficeExtension.ClientObject {
        private m_bold;
        private m_color;
        private m_doubleStrikeThrough;
        private m_highlightColor;
        private m_italic;
        private m_name;
        private m_size;
        private m_strikeThrough;
        private m_subscript;
        private m_superscript;
        private m_underline;
        private m__ReferenceId;
        /**
         *
         * Gets or sets a value that indicates whether the font is bold. True if the font is formatted as bold, otherwise, false.
         */
        bold: boolean;
        /**
         *
         * Gets or sets the color for the specified font. You can provide the value in the "#RRGGBB" format or the color name.
         */
        color: string;
        /**
         *
         * Gets or sets a value that indicates whether the font has a double strike through. True if the font is formatted as double strikethrough text, otherwise, false.
         */
        doubleStrikeThrough: boolean;
        /**
         *
         * Gets or sets the highlight color for the specified font. You can provide the value as either in the "#RRGGBB" format or the color name.
         */
        highlightColor: string;
        /**
         *
         * Gets or sets a value that indicates whether the font is italicized. True if the font is italicized, otherwise, false.
         */
        italic: boolean;
        /**
         *
         * Gets or sets a value that represents the name of the font.
         */
        name: string;
        /**
         *
         * Gets or sets a value that represents the font size in points.
         */
        size: number;
        /**
         *
         * Gets or sets a value that indicates whether the font has a strike through. True if the font is formatted as strikethrough text, otherwise, false.
         */
        strikeThrough: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the font is a subscript. True if the font is formatted as subscript, otherwise, false.
         */
        subscript: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the font is a superscript. True if the font is formatted as superscript, otherwise, false.
         */
        superscript: boolean;
        /**
         *
         * Gets or sets a value that indicates the font's underline type. 'None' if the font is not underlined.
         */
        underline: string;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Font;
    }
    /**
     *
     * Represents an inline picture.
     */
    class InlinePicture extends OfficeExtension.ClientObject {
        private m_altTextDescription;
        private m_altTextTitle;
        private m_height;
        private m_hyperlink;
        private m_lockAspectRatio;
        private m_parentContentControl;
        private m_width;
        private m__Id;
        private m__ReferenceId;
        /**
         *
         * Gets the content control that contains the inline image. Returns null if there isn't a parent content control. Read-only.
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets or sets a string that represents the alternative text associated with the inline image
         */
        altTextDescription: string;
        /**
         *
         * Gets or sets a string that contains the title for the inline image.
         */
        altTextTitle: string;
        /**
         *
         * Gets or sets a number that describes the height of the inline image.
         */
        height: number;
        /**
         *
         * Gets or sets the hyperlink associated with the inline image.
         */
        hyperlink: string;
        /**
         *
         * Gets or sets a value that indicates whether the inline image retains its original proportions when you resize it.
         */
        lockAspectRatio: boolean;
        /**
         *
         * Gets or sets a number that describes the width of the inline image.
         */
        width: number;
        /**
         *
         * Gets the base64 encoded string representation of the inline image.
         *
         */
        getBase64ImageSrc(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Wraps the inline picture with a rich text content control.
         *
         */
        insertContentControl(): Word.ContentControl;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.InlinePicture;
    }
    /**
     *
     * Contains a collection of [inlinePicture](inlinePicture.md) objects.
     */
    class InlinePictureCollection extends OfficeExtension.ClientObject {
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Word.InlinePicture>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.InlinePictureCollection;
    }
    /**
     *
     * Represents a single paragraph in a selection, range, content control, or document body.
     */
    class Paragraph extends OfficeExtension.ClientObject {
        private m_alignment;
        private m_contentControls;
        private m_firstLineIndent;
        private m_font;
        private m_inlinePictures;
        private m_leftIndent;
        private m_lineSpacing;
        private m_lineUnitAfter;
        private m_lineUnitBefore;
        private m_outlineLevel;
        private m_parentContentControl;
        private m_rightIndent;
        private m_spaceAfter;
        private m_spaceBefore;
        private m_style;
        private m_text;
        private m__Id;
        private m__ReferenceId;
        /**
         *
         * Gets the collection of content control objects that are in the paragraph. Read-only.
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the paragraph. Use this to get and set font name, size, color, and other properties. Read-only.
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of inlinePicture objects that are in the paragraph. The collection does not include floating images. Read-only.
         */
        inlinePictures: Word.InlinePictureCollection;
        /**
         *
         * Gets the content control that contains the paragraph. Returns null if there isn't a parent content control. Read-only.
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets or sets the alignment for a paragraph. The value can  be "left", "centered", "right", or "justified".
         */
        alignment: string;
        /**
         *
         * Gets or sets the value, in points, for a first line or hanging indent. Use a positive value to set a first-line indent, and use a negative value to set a hanging indent.
         */
        firstLineIndent: number;
        /**
         *
         * Gets or sets the left indent value, in points, for the paragraph.
         */
        leftIndent: number;
        /**
         *
         * Gets or sets the line spacing, in points, for the specified paragraph. In the Word UI, this value is divided by 12.
         */
        lineSpacing: number;
        /**
         *
         * Gets or sets the amount of spacing, in grid lines. after the paragraph.
         */
        lineUnitAfter: number;
        /**
         *
         * Gets or sets the amount of spacing, in grid lines, before the paragraph.
         */
        lineUnitBefore: number;
        /**
         *
         * Gets or sets the outline level for the paragraph.
         */
        outlineLevel: number;
        /**
         *
         * Gets or sets the right indent value, in points, for the paragraph.
         */
        rightIndent: number;
        /**
         *
         * Gets or sets the spacing, in points, after the paragraph.
         */
        spaceAfter: number;
        /**
         *
         * Gets or sets the spacing, in points, before the paragraph.
         */
        spaceBefore: number;
        /**
         *
         * Gets or sets the style used for the paragraph. This is the name of the pre-installed or custom style.
         */
        style: string;
        /**
         *
         * Gets the text of the paragraph. Read-only.
         */
        text: string;
        /**
         *
         * Clears the contents of the paragraph object. The user can perform the undo operation on the cleared content.
         *
         */
        clear(): void;
        /**
         *
         * Deletes the paragraph and its content from the document.
         *
         */
        delete(): void;
        /**
         *
         * Gets the HTML representation of the paragraph object.
         *
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the Office Open XML (OOXML) representation of the paragraph object.
         *
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Inserts a break at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param breakType Required. The break type to add to the document.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the paragraph object with a rich text content control.
         *
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document into the current paragraph at the specified location. The insertLocation value can be 'Start' or 'End'.
         *
         * @param base64File Required. The file base64 encoded file contents to be inserted.
         * @param insertLocation Required. The value can be 'Start' or 'End'.
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in the paragraph.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a picture into the paragraph at the specified location. The insertLocation value can be 'Before', 'After', 'Start' or 'End'.
         *
         * @param base64EncodedImage Required. The HTML to be inserted in the paragraph.
         * @param insertLocation Required. The value can be 'Before', 'After', 'Start' or 'End'.
         */
        insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
        /**
         *
         * Inserts OOXML into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted in the paragraph.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts text into the paragraph at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the paragraph object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSoundsLike?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildCards?: boolean;
        }): Word.SearchResultCollection;
        /**
         *
         * Selects and navigates the Word UI to the paragraph.
         *
         */
        select(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Paragraph;
    }
    /**
     *
     * Contains a collection of [paragraph](paragraph.md) objects.
     */
    class ParagraphCollection extends OfficeExtension.ClientObject {
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Paragraph>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.ParagraphCollection;
    }
    /**
     *
     * Represents a contiguous area in a document.
     */
    class Range extends OfficeExtension.ClientObject {
        private m_contentControls;
        private m_font;
        private m_paragraphs;
        private m_parentContentControl;
        private m_style;
        private m_text;
        private m__Id;
        private m__ReferenceId;
        /**
         *
         * Gets the collection of content control objects that are in the range. Read-only.
         */
        contentControls: Word.ContentControlCollection;
        /**
         *
         * Gets the text format of the range. Use this to get and set font name, size, color, and other properties. Read-only.
         */
        font: Word.Font;
        /**
         *
         * Gets the collection of paragraph objects that are in the range. Read-only.
         */
        paragraphs: Word.ParagraphCollection;
        /**
         *
         * Gets the content control that contains the range. Returns null if there isn't a parent content control. Read-only.
         */
        parentContentControl: Word.ContentControl;
        /**
         *
         * Gets or sets the style used for the range. This is the name of the pre-installed or custom style.
         */
        style: string;
        /**
         *
         * Gets the text of the range. Read-only.
         */
        text: string;
        /**
         *
         * Clears the contents of the range object. The user can perform the undo operation on the cleared content.
         *
         */
        clear(): void;
        /**
         *
         * Deletes the range and its content from the document.
         *
         */
        delete(): void;
        /**
         *
         * Gets the HTML representation of the range object.
         *
         */
        getHtml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Gets the OOXML representation of the range object.
         *
         */
        getOoxml(): OfficeExtension.ClientResult<string>;
        /**
         *
         * Inserts a break at the specified location. The insertLocation value can be 'Replace', 'Before' or 'After'.
         *
         * @param breakType Required. The break type to add to the range.
         * @param insertLocation Required. The value can be 'Replace', 'Before' or 'After'.
         */
        insertBreak(breakType: string, insertLocation: string): void;
        /**
         *
         * Wraps the range object with a rich text content control.
         *
         */
        insertContentControl(): Word.ContentControl;
        /**
         *
         * Inserts a document into the range at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param base64File Required. The file base64 encoded file contents to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts HTML into the range at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param html Required. The HTML to be inserted in the range.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertHtml(html: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts OOXML into the range at the specified location.  The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param ooxml Required. The OOXML to be inserted in the range.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertOoxml(ooxml: string, insertLocation: string): Word.Range;
        /**
         *
         * Inserts a paragraph into the range at the specified location. The insertLocation value can be 'Before' or 'After'.
         *
         * @param paragraphText Required. The paragraph text to be inserted.
         * @param insertLocation Required. The value can be 'Before' or 'After'.
         */
        insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
        /**
         *
         * Inserts text into the range at the specified location. The insertLocation value can be 'Replace', 'Start' or 'End'.
         *
         * @param text Required. Text to be inserted.
         * @param insertLocation Required. The value can be 'Replace', 'Start' or 'End'.
         */
        insertText(text: string, insertLocation: string): Word.Range;
        /**
         *
         * Performs a search with the specified searchOptions on the scope of the range object. The search results are a collection of range objects.
         *
         * @param searchText Required. The search text.
         * @param searchOptions Optional. Options for the search.
         */
        search(searchText: string, searchOptions?: Word.SearchOptions | {
            ignorePunct?: boolean;
            ignoreSpace?: boolean;
            matchCase?: boolean;
            matchPrefix?: boolean;
            matchSoundsLike?: boolean;
            matchSuffix?: boolean;
            matchWholeWord?: boolean;
            matchWildCards?: boolean;
        }): Word.SearchResultCollection;
        /**
         *
         * Selects and navigates the Word UI to the range.
         *
         */
        select(): void;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Range;
    }
    /**
     *
     * Specifies the options to be included in a search operation.
     */
    class SearchOptions extends OfficeExtension.ClientObject {
        private m_ignorePunct;
        private m_ignoreSpace;
        private m_matchCase;
        private m_matchPrefix;
        private m_matchSoundsLike;
        private m_matchSuffix;
        private m_matchWholeWord;
        private m_matchWildCards;
        /**
         *
         * Gets or sets a value that indicates whether to ignore all punctuation characters between words. Corresponds to the Ignore punctuation check box in the Find and Replace dialog box.
         */
        ignorePunct: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to ignore all white space between words. Corresponds to the Ignore white-space characters check box in the Find and Replace dialog box.
         */
        ignoreSpace: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to perform a case sensitive search. Corresponds to the Match case check box in the Find and Replace dialog box (Edit menu).
         */
        matchCase: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to match words that begin with the search string. Corresponds to the Match prefix check box in the Find and Replace dialog box.
         */
        matchPrefix: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to find words that sound similar to the search string. Corresponds to the Sounds like check box in the Find and Replace dialog box
         */
        matchSoundsLike: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to match words that end with the search string. Corresponds to the Match suffix check box in the Find and Replace dialog box.
         */
        matchSuffix: boolean;
        /**
         *
         * Gets or sets a value that indicates whether to find operation only entire words, not text that is part of a larger word. Corresponds to the Find whole words only check box in the Find and Replace dialog box.
         */
        matchWholeWord: boolean;
        /**
         *
         * Gets or sets a value that indicates whether the search will be performed using special search operators. Corresponds to the Use wildcards check box in the Find and Replace dialog box.
         */
        matchWildCards: boolean;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.SearchOptions;
        /**
         * Create a new instance of Word.SearchOptions object
         */
        static newObject(context: OfficeExtension.ClientRequestContext): Word.SearchOptions;
    }
    /**
     *
     * Contains a collection of [range](range.md) objects as a result of a search operation.
     */
    class SearchResultCollection extends OfficeExtension.ClientObject {
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Range>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.SearchResultCollection;
    }
    /**
     *
     * Represents a section in a Word document.
     */
    class Section extends OfficeExtension.ClientObject {
        private m_body;
        private m__Id;
        private m__ReferenceId;
        /**
         *
         * Gets the body of the section. This does not include the header/footer and other section metadata. Read-only.
         */
        body: Word.Body;
        /**
         *
         * Gets one of the section's footers.
         *
         * @param type Required. The type of footer to return. This value can be: 'primary', 'firstPage' or 'evenPages'.
         */
        getFooter(type: string): Word.Body;
        /**
         *
         * Gets one of the section's headers.
         *
         * @param type Required. The type of header to return. This value can be: 'primary', 'firstPage' or 'evenPages'.
         */
        getHeader(type: string): Word.Body;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.Section;
    }
    /**
     *
     * Contains the collection of the document's [section](section.md) objects.
     */
    class SectionCollection extends OfficeExtension.ClientObject {
        private m__ReferenceId;
        private m__items;
        /** Gets the loaded child items in this collection. */
        items: Array<Word.Section>;
        /**
         * Queues up a command to load the specified properties of the object. You must call "context.sync()" before reading the properties.
         */
        load(option?: string | string[] | OfficeExtension.LoadOption): Word.SectionCollection;
    }
    /**
     *
     * ContentControl types
     */
    module ContentControlType {
        var richText: string;
    }
    /**
     *
     * ContentControl appearance
     */
    module ContentControlAppearance {
        var boundingBox: string;
        var tags: string;
        var hidden: string;
    }
    /**
     *
     * Underline types
     */
    module UnderlineType {
        var none: string;
        var single: string;
        var word: string;
        var double: string;
        var dotted: string;
        var hidden: string;
        var thick: string;
        var dashLine: string;
        var dotLine: string;
        var dotDashLine: string;
        var twoDotDashLine: string;
        var wave: string;
    }
    module BreakType {
        var page: string;
        var column: string;
        var next: string;
        var sectionContinuous: string;
        var sectionEven: string;
        var sectionOdd: string;
        var line: string;
        var lineClearLeft: string;
        var lineClearRight: string;
        var textWrapping: string;
    }
    module InsertLocation {
        var before: string;
        var after: string;
        var start: string;
        var end: string;
        var replace: string;
    }
    module Alignment {
        var unknown: string;
        var left: string;
        var centered: string;
        var right: string;
        var justified: string;
    }
    module HeaderFooterType {
        var primary: string;
        var firstPage: string;
        var evenPages: string;
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
        private m_document;
        constructor(url?: string);
        document: Document;
    }
    /**
     * Executes a batch script that performs actions on the Word object model. When the promise is resolved, any tracked objects that were automatically allocated during execution will be released.
     * @param batch - A function that takes in a RequestContext and returns a promise (typically, just the result of "context.sync()"). The context parameter facilitates requests to the Word application. Since the Office add-in and the Word application run in two different processes, the request context is required to get access to the Word object model from the add-in.
     */
    function run<T>(batch: (context: Word.RequestContext) => OfficeExtension.IPromise<T>): OfficeExtension.IPromise<T>;
}

declare module Office.MailboxEnums {
    export enum BodyType {
        /**
         * The body is in HTML format
         */
        HTML,
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
declare module Office {
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
