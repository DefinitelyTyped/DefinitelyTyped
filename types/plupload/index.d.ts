// Type definitions for Plupload 2.0
// Project: http://www.plupload.com/
// Definitions by: Patrick Bußmann <https://github.com/patrickbussmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface plupload_settings {
    /** Required Options */
    browse_button: any,
    url: string,

    /** Filters */
    filters?: plupload_filters,

    /** Control the request */
    headers?: any;
    max_retries?: number;
    multipart?: boolean;
    multipart_params?: any;

    /** Chunk */
    chunk_size?: number | string;

    /** Client-Side Image Resize */
    resize?: plupload_resize;

    /** Drag&Drop Files from the Desktop */
    drop_element?: string;

    /** Useful Options */
    multi_selection?: boolean;
    required_features?: string | any;
    unique_names?: boolean;

    /** Optional */
    runtimes?: string;
    file_data_name?: string;
    container?: any;
    flash_swf_url?: string;
    silverlight_xap_url?: string;

    /** Events */
    init?: plupload_events;
}

interface plupload_filters {
    mime_types?: plupload_filters_mime_types[];
    max_file_size?: number | string;
    prevent_duplicates?: boolean;
}

interface plupload_filters_mime_types {
    title: string;
    extensions: string;
}

interface plupload_resize {
    width?: number;
    height?: number;
    crop?: boolean;
    quality?: number;
    preserve_headers?: boolean;
}

interface plupload_queue_progress {
    size: number;
    loaded: number;
    uploaded: number;
    failed: number;
    queued: number;
    percent: number;
    bytesPerSec: number;
    reset(): void;
}

interface plupload_event {
    (uploader: plupload): any;
}

interface plupload_event_file {
    (uploader: plupload, file: any): any;
}

interface plupload_event_files {
    (uploader: plupload, files: any[]): any;
}

interface plupload_event_OptionChanged {
    (uploader: plupload, name: string, value: any, oldValue: any): any;
}

interface plupload_event_FileUploaded {
    (uploader: plupload, file: any, response: plupload_response): any;
}

interface plupload_event_ChunkUploaded {
    (uploader: plupload, file: any, response: plupload_chunk_response): any;
}

interface plupload_event_Error {
    (uploader: plupload, error: plupload_error): any;
}

interface plupload_events {
    Init?: plupload_event;
    PostInit?: plupload_event;
    OptionChanged?: plupload_event_OptionChanged;
    Refresh?: plupload_event;
    StateChanged?: plupload_event;
    UploadFile?: plupload_event_file;
    BeforeUpload?: plupload_event_file;
    QueueChanged?: plupload_event;
    UploadProgress?: plupload_event_file;
    FilesRemoved?: plupload_event_files;
    FileFiltered?: plupload_event_file;
    FilesAdded?: plupload_event_files;
    FileUploaded?: plupload_event_FileUploaded;
    ChunkUploaded?: plupload_event_ChunkUploaded;
    UploadComplete?: plupload_event_files;
    Error?: plupload_event_Error;
    Destroy?: plupload_event;
}

interface plupload_response {
    response: string;
    status: number;
    responseHeaders: string;
}

interface plupload_chunk_response extends plupload_response {
    offset: number;
    total: number;
}

interface plupload_error extends plupload_response {
    code: number;
    message: string;
    file: any;
}

declare class plupload {
    static Uploader(settings: plupload_settings): void;

    static VERSION: string;

    static STOPPED: number;
    static STARTED: number;
    static QUEUED: number;
    static UPLOADING: number;
    static FAILED: number;
    static DONE: number;
    static GENERIC_ERROR: number;
    static HTTP_ERROR: number;
    static IO_ERROR: number;
    static SECURITY_ERROR: number;
    static INIT_ERROR: number;
    static FILE_SIZE_ERROR: number;
    static FILE_EXTENSION_ERROR: number;
    static FILE_DUPLICATE_ERROR: number;
    static IMAGE_FORMAT_ERROR: number;
    static MEMORY_ERROR: number;
    static IMAGE_DIMENSIONS_ERROR: number;

    static mimeTypes: any;
    static ua: any;

    static typeOf(o: any): string;
    static extend(target: any): any;
    static guid(guid: string): string;

    /** Properties */
    id: string;
    state: number;
    features: string;
    runtime: string;
    files: any;
    settings: any;
    total: plupload_queue_progress;

    /** Methods */
    init(): any;
    setOption(option: string | any, value?: any): any;
    getOption(option?: string): any;
    refresh(): any;
    start(): any;
    stop(): any;
    disableBrowse(disable: boolean): any;
    getFile(id: string): any;
    addFile(file: any, fileName?: string): any;
    removeFile(file: any): any;
    splice(start?: number, length?: number): any;
    trigger(name: string, Multiple: any): any;
    hasEventListener(name: string): any;
    bind(name: string, func: any, scope: any): any;
    unbind(name: string, func: any): any;
    unbindAll(): any;
    destroy(): any;

    /** Utility methods **/

    /**
     * Executes the callback function for each item in array/object. If you return false in the
     * callback it will break the loop.
     *
     * @method each
     * @static
     * @param {Object} obj Object to iterate.
     * @param {function} callback Callback function to execute for each item.
     */
    static each(obj: Object, callback: Function): void;

    /**
     * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
     *
     * @method getPos
     * @static
     * @param {Element} node HTML element or element id to get x, y position from.
     * @param {Element} root Optional root element to stop calculations at.
     * @return {object} Absolute position of the specified element object with x, y fields.
     */
    static getPos(node: Element, root: Element): Object;

    /**
     * Returns the size of the specified node in pixels.
     *
     * @method getSize
     * @static
     * @param {Node} node Node to get the size of.
     * @return {Object} Object with a w and h property.
     */
    static getSize(node: Node): Object;

    /**
     * Encodes the specified string.
     *
     * @method xmlEncode
     * @static
     * @param {String} s String to encode.
     * @return {String} Encoded string.
     */
    static xmlEncode(str: string): string;

    /**
     * Forces anything into an array.
     *
     * @method toArray
     * @static
     * @param {Object} obj Object with length field.
     * @return {Array} Array object containing all items.
     */
    static toArray(obj: Object): Array<any>;

    /**
     * Find an element in array and return its index if present, otherwise return -1.
     *
     * @method inArray
     * @static
     * @param {mixed} needle Element to find
     * @param {Array} array
     * @return {Int} Index of the element, or -1 if not found
     */
    static inArray(needle: any, array: Array<any>): number;

    /**
    Recieve an array of functions (usually async) to call in sequence, each  function
    receives a callback as first argument that it should call, when it completes. Finally,
    after everything is complete, main callback is called. Passing truthy value to the
    callback as a first argument will interrupt the sequence and invoke main callback
    immediately.
    @method inSeries
    @static
    @param {Array} queue Array of functions to call in sequence
    @param {Function} cb Main callback that is called in the end, or in case of error
    */
    static inSeries(queue: Array<any>, callback: Function): void;

    /**
     * Extends the language pack object with new items.
     *
     * @method addI18n
     * @static
     * @param {Object} pack Language pack items to add.
     * @return {Object} Extended language pack object.
     */
    static addI18n(pack: Object): Object;

    /**
     * Translates the specified string by checking for the english string in the language pack lookup.
     *
     * @method translate
     * @static
     * @param {String} str String to look for.
     * @return {String} Translated string or the input string if it wasn't found.
     */
    static translate(str: string): string;

    /**
     * Pseudo sprintf implementation - simple way to replace tokens with specified values.
     *
     * @param {String} str String with tokens
     * @return {String} String with replaced tokens
     */
    static sprintf(str: string): string;

    /**
     * Checks if object is empty.
     *
     * @method isEmptyObj
     * @static
     * @param {Object} obj Object to check.
     * @return {Boolean}
     */
    static isEmptyObj(obj: Object): boolean;

    /**
     * Checks if specified DOM element has specified class.
     *
     * @method hasClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    static hasClass(obj: Object, name: string): any;

    /**
     * Adds specified className to specified DOM element.
     *
     * @method addClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    static addClass(obj: Object, name: string): any;

    /**
     * Removes specified className from specified DOM element.
     *
     * @method removeClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    static removeClass(obj: Object, name: string): any;

    /**
     * Returns a given computed style of a DOM element.
     *
     * @method getStyle
     * @static
     * @param {Object} obj DOM element like object.
     * @param {String} name Style you want to get from the DOM element
     */
    static getStyle(obj: Object, name: string): any;

    /**
     * Adds an event handler to the specified object and store reference to the handler
     * in objects internal Plupload registry (@see removeEvent).
     *
     * @method addEvent
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Name to add event listener to.
     * @param {Function} callback Function to call when event occurs.
     * @param {String} (optional) key that might be used to add specifity to the event record.
     */
    static addEvent(obj: Object, name: string, callback: Function, key?: string);

    /**
     * Remove event handler from the specified object. If third argument (callback)
     * is not specified remove all events with the specified name.
     *
     * @method removeEvent
     * @static
     * @param {Object} obj DOM element to remove event listener(s) from.
     * @param {String} name Name of event listener to remove.
     * @param {Function|String} (optional) might be a callback or unique key to match.
     */
    static removeEvent(obj: Object, name: string, optional?: Function | string);

    /**
     * Remove all kind of events from the specified object
     *
     * @method removeAllEvents
     * @static
     * @param {Object} obj DOM element to remove event listeners from.
     * @param {String} (optional) unique key to match, when removing events.
     */
    static removeAllEvents(obj: Object, key?: string);

    /**
     * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
     *
     * @method cleanName
     * @static
     * @param {String} s String to clean up.
     * @return {String} Cleaned string.
     */
    static cleanName(name: string): string;

    /**
     * Builds a full url out of a base URL and an object with items to append as query string items.
     *
     * @method buildUrl
     * @static
     * @param {String} url Base URL to append query string items to.
     * @param {Object} items Name/value object to serialize as a querystring.
     * @return {String} String with url + serialized query string items.
     */
    static buildUrl(url, items): string;

    /**
     * Formats the specified number as a size string for example 1024 becomes 1 KB.
     *
     * @method formatSize
     * @static
     * @param {Number} size Size to format as string.
     * @return {String} Formatted size string.
     */
    static formatSize(size: number): string;

    /**
     * Parses the specified size string into a byte value. For example 10kb becomes 10240.
     *
     * @method parseSize
     * @static
     * @param {String|Number} size String to parse or number to just pass through.
     * @return {Number} Size in bytes.
     */
    static parseSize(size: number | string): number;


    /**
     * A way to predict what runtime will be choosen in the current environment with the
     * specified settings.
     *
     * @method predictRuntime
     * @static
     * @param {Object|String} config Plupload settings to check
     * @param {String} [runtimes] Comma-separated list of runtimes to check against
     * @return {String} Type of compatible runtime
     */
    static predictRuntime(config: Object | string, runtimes: string): string;

    /**
     * Registers a filter that will be executed for each file added to the queue.
     * If callback returns false, file will not be added.
     *
     * Callback receives two arguments: a value for the filter as it was specified in settings.filters
     * and a file to be filtered. Callback is executed in the context of uploader instance.
     *
     * @method addFileFilter
     * @static
     * @param {String} name Name of the filter by which it can be referenced in settings.filters
     * @param {String} cb Callback - the actual routine that every added file must pass
     */
    static addFileFilter(name: string, cb: Function): void;
}
