declare global {
    const ZAFClient: {
        init(callback?: (context: ZAFContext) => void): ZAFClient;
    };
}

export interface ZAFClient {
    /**
     * Requests context for the app, such as the host and location.
     * Depending on the location, the context may provide additional
     * identifiers that you can use with the REST API to request additional data.
     * @returns A JavaScript Promise object.
     */
    context(): Promise<ZAFContext>;
    /**
     * Gets data from the UI asynchronously. For a complete list of supported paths, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * Some path segments can take arguments that you can specify using a colon syntax.
     * For example, to retrieve information about the options available to the type ticket field,
     * you could call client.get('ticketField:type.options').
     * @param paths an array of path strings or a single path string
     * @returns A JavaScript Promise object.
     */
    get(paths: string[] | string): Promise<ZAFGetSetResponse>;
    /**
     * Executes an action identified by the name path parameter, or multiple actions defined in the obj argument,
     * within the product interface.
     * For a complete list of supported paths, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * Some path segments can take arguments that you can specify using a colon syntax.
     * For example, to hide the priority ticket field, call client.invoke('ticketFields:priority.hide').
     * @param name the path to call
     * @param args (optional) arguments to be passed to the call, or
     * @returns A JavaScript Promise object with the value returned from the method call(s).
     */
    invoke(name: string, ...args: any[]): Promise<void>;
    /**
     * Executes an action identified by the name path parameter, or multiple actions defined in the obj argument,
     * within the product interface.
     * For a complete list of supported paths, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * Some path segments can take arguments that you can specify using a colon syntax.
     * For example, to hide the priority ticket field, call client.invoke('ticketFields:priority.hide').
     * @param obj an object containing invoke paths as keys and arrays of arguments as values
     * @returns A JavaScript Promise object with the value returned from the method call(s).
     */
    invoke(obj: { [key: string]: any[] }): Promise<void>;
    /**
     * Allows you to add handlers to a framework event. You can add as many handler as you wish.
     * They will be executed in the order they were added.
     *
     * For available events, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * See also Working with framework events.
     * @param event the name of the framework event you want to listen to. This can be framework, request, or custom events
     * @param callback a function to be called when this event fires
     * @param context (optional) the value of this within your handler
     */
    on(event: string, callback: (data: any) => void, context?: any): void;
    /**
     * Allows you to remove a handler for a framework event.
     * @param event the name of the event
     * @param callback the function you attached earlier with client.on()
     */
    off(event: string, callback: (data: any) => void): void;
    /**
     * Requests metadata for the app, such as the app id, installation id,
     * app plan information, and Stripe subscription id (if applicable).
     * @returns a promise that resolves with the metadata
     */
    metadata(): Promise<ZAFMetadata>;
    /**
     * Returns whether or not an event has the specified handler attached to it.
     * @param name the name of the event
     * @param handler the handler you want to test
     */
    has(name: string, handler: (data: any) => void): boolean;
    /**
     * Initialize a ZAFClient for another location.
     * @param guid the GUID for the desired instance of the app
     * @returns An instance of ZAFClient for the requested instance GUID

     * Note that instances are transient in some locations (like ticket sidebar), so if the ticket tab is closed that instance is destroyed.
     */
    instance(guid: string): ZAFClient;
    /**
     * Sets data in the UI asynchronously. For a complete list of supported paths, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * Some path segments can take arguments that you can specify using a colon syntax. For example, to set the due date of a task, you could call client.set('ticket.customField:due_date', new Date()).
     * @param key the path to which to set the value val
     * @param value the value to set
     * @returns A JavaScript Promise object.
     */
    set(key: string, value: any): Promise<ZAFGetSetResponse>;
    /**
     * Sets data in the UI asynchronously. For a complete list of supported paths, see:
     * - Core Apps API
     * - Support Apps API
     * - Chat Apps API
     * - Sell Apps API

     * Some path segments can take arguments that you can specify using a colon syntax. For example, to set the due date of a task, you could call client.set('ticket.customField:due_date', new Date()).
     * @param obj an object containing the keys and values to update
     * @returns A JavaScript Promise object.
     */
    set(obj: { [key: string]: any }): Promise<ZAFGetSetResponse>;
    /**
     * Triggers the specified event on the client.
     * @param name the name of the event you want to trigger
     * @param data (optional) data you want to pass to the handler
     */
    trigger(name: string, data?: any): void;
    /**
     * Makes an HTTP request. See Making API requests from a Zendesk app.
     * @param options the url of the resource to request, or an object containing a combination of  properties with their supported values.
     * @returns A JavaScript Promise object.
     */
    request(options: ZAFRequestOptions | string): Promise<any>;
}

export interface ZAFContext {
    instanceGuid: string;
    product: string;
    account: {
        [key: string]: string;
    };
    location: string;
    ticketId?: string;
}

export interface ZAFGetSetResponse {
    [path: string]: string | number | boolean;
}

export interface ZAFMetadata {
    appId: number;
    name: string;
    installationId: number;
    version: string;
    stripe_subscription_id?: string;
    plan?: ZAFPlan;
    settings: ZAFSettings;
}

export interface ZAFPlan {
    name: string;
}

export interface ZAFSettings {
    [index: string]: string;
    title: string;
}
export interface ZAFRequestOptions {
    accepts?: any;
    autoRetry?: boolean;
    cache?: boolean;
    contentType?: boolean | string;
    cors?: boolean;
    crossDomain?: boolean;
    data?: any;
    dataType?: string;
    headers?: {
        [key: string]: string;
    };
    httpCompleteResponse?: boolean;
    ifModified?: boolean;
    jwt?: ZAFRequestJWT;
    mimeType?: string;
    secure?: boolean;
    timeout?: number;
    traditional?: boolean;
    type?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    url: string;
    xhrFields?: Partial<XMLHttpRequest>;
}

export interface ZAFRequestJWT {
    algorithm: string;
    secret_key: string;
    expiry?: number;
    claims?: {
        [key: string]: any;
    };
}
