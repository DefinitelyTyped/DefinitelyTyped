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
    (uploader: plupload.Uploader): any;
}

interface plupload_event_file {
    (uploader: plupload.Uploader, file: any): any;
}

interface plupload_event_files {
    (uploader: plupload.Uploader, files: any[]): any;
}

interface plupload_event_OptionChanged {
    (uploader: plupload.Uploader, name: string, value: any, oldValue: any): any;
}

interface plupload_event_FileUploaded {
    (uploader: plupload.Uploader, file: any, response: plupload_response): any;
}

interface plupload_event_ChunkUploaded {
    (uploader: plupload.Uploader, file: any, response: plupload_chunk_response): any;
}

interface plupload_event_Error {
    (uploader: plupload.Uploader, error: plupload_error): any;
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

declare namespace plupload {

    class Uploader {

        constructor(settings: plupload_settings);

        /**
         * Unique id for the Uploader instance.
         *
         * @property id
         * @type String
         */
        id: string;

        /**
         * Current state of the total uploading progress. This one can either be plupload.STARTED or plupload.STOPPED.
         * These states are controlled by the stop/start methods. The default value is STOPPED.
         *
         * @property state
         * @type Number
         */
        state: number;

        /**
         * Map of features that are available for the uploader runtime. Features will be filled
         * before the init event is called, these features can then be used to alter the UI for the end user.
         * Some of the current features that might be in this map is: dragdrop, chunks, jpgresize, pngresize.
         *
         * @property features
         * @type Object
         */
        features: any;

        /**
         * Current runtime name.
         *
         * @property runtime
         * @type String
         */
        runtime: string;

        /**
         * Current upload queue, an array of File instances.
         *
         * @property files
         * @type Array
         * @see plupload.File
         */
        files: Array<any>;

        /**
         * Object with name/value settings.
         *
         * @property settings
         * @type Object
         */
        settings: any;

        /**
         * Total progess information. How many files has been uploaded, total percent etc.
         *
         * @property total
         * @type plupload.QueueProgress
         */
        total: plupload_queue_progress;

        /**
         * Initializes the Uploader instance and adds internal event listeners.
         *
         * @method init
         */
        init(): void;

        /**
         * Set the value for the specified option(s).
         *
         * @method setOption
         * @since 2.1
         * @param {String|Object} option Name of the option to change or the set of key/value pairs
         * @param {Mixed} [value] Value for the option (is ignored, if first argument is object)
         */
        setOption(option: string | any, value?: any): void;

        /**
         * Get the value for the specified option or the whole configuration, if not specified.
         *
         * @method getOption
         * @since 2.1
         * @param {String} [option] Name of the option to get
         * @return {Mixed} Value for the option or the whole set
         */
        getOption(option?: string): any;

        /**
         * Refreshes the upload instance by dispatching out a refresh event to all runtimes.
         * This would for example reposition flash/silverlight shims on the page.
         *
         * @method refresh
         */
        refresh(): void;

        /**
         * Starts uploading the queued files.
         *
         * @method start
         */
        start(): void;

        /**
         * Stops the upload of the queued files.
         *
         * @method stop
         */
        stop(): void;

        /**
         * Disables/enables browse button on request.
         *
         * @method disableBrowse
         * @param {Boolean} disable Whether to disable or enable (default: true)
         */
        disableBrowse(disable: boolean): void;

        // TODO: Make plupload.File typing
        /**
         * Returns the specified file object by id.
         *
         * @method getFile
         * @param {String} id File id to look for.
         * @return {plupload.File} File object or undefined if it wasn't found;
         */
        getFile(id: string): any;

        /**
         * Adds file to the queue programmatically. Can be native file, instance of Plupload.File,
         * instance of mOxie.File, input[type="file"] element, or array of these. Fires FilesAdded,
         * if any files were added to the queue. Otherwise nothing happens.
         *
         * @method addFile
         * @since 2.0
         * @param {plupload.File|mOxie.File|File|Node|Array} file File or files to add to the queue.
         * @param {String} [fileName] If specified, will be used as a name for the file
         */
        addFile(file: any, fileName?: string): void;

        /**
         * Removes a specific file.
         *
         * @method removeFile
         * @param {plupload.File|String} file File to remove from queue.
         */
        removeFile(file: any): any;

        /**
         * Removes part of the queue and returns the files removed. This will also trigger the
         * FilesRemoved and QueueChanged events.
         *
         * @method splice
         * @param {Number} [start=0] Start index to remove from.
         * @param {Number} [length] Number of files to remove (defaults to number of files in the queue).
         * @return {Array} Array of files that was removed.
         */
        splice(start?: number, length?: number): any;

        /**
         * Dispatches the specified event name and its arguments to all listeners.
         * @method trigger
          * @param {String} name Event name to fire.
         * @param {Object..} Multiple arguments to pass along to the listener functions.
        */
        trigger(name: string, Multiple: any): any;
        
        hasEventListener(name: string): any;
        bind(name: string, func: any, scope?: any): any;
        unbind(name: string, func: any): any;
        unbindAll(): any;
        destroy(): any;
    }

    export const VERSION: string;

    /**
     * The state of the queue before it has started and after it has finished
     *
     * @property STOPPED
     * @static
     * @final
     */
    export const STOPPED: number;

    /**
     * Upload process is running
     *
     * @property STARTED
     * @static
     * @final
     */
    export const STARTED: number;

    /**
     * File is queued for upload
     *
     * @property QUEUED
     * @static
     * @final
     */
    export const QUEUED: number;

    /**
     * File is being uploaded
     *
     * @property UPLOADING
     * @static
     * @final
     */
    export const UPLOADING: number;

    /**
     * File has failed to be uploaded
     *
     * @property FAILED
     * @static
     * @final
     */
    export const FAILED: number;

    /**
     * File has been uploaded successfully
     *
     * @property DONE
     * @static
     * @final
     */
    export const DONE: number;

    /**
     * Generic error for example if an exception is thrown inside Silverlight.
     *
     * @property GENERIC_ERROR
     * @static
     * @final
     */
    export const GENERIC_ERROR: number;

    /**
     * HTTP transport error. For example if the server produces a HTTP status other than 200.
     *
     * @property HTTP_ERROR
     * @static
     * @final
     */
    export const HTTP_ERROR: number;

    /**
     * Generic I/O error. For example if it wasn't possible to open the file stream on local machine.
     *
     * @property IO_ERROR
     * @static
     * @final
     */
    export const IO_ERROR: number;

    /**
     * @property SECURITY_ERROR
     * @static
     * @final
     */
    export const SECURITY_ERROR: number;

    /**
     * Initialization error. Will be triggered if no runtime was initialized.
     *
     * @property INIT_ERROR
     * @static
     * @final
     */
    export const INIT_ERROR: number;

    /**
     * File size error. If the user selects a file that is too large or is empty it will be blocked and
     * an error of this type will be triggered.
     *
     * @property FILE_SIZE_ERROR
     * @static
     * @final
     */
    export const FILE_SIZE_ERROR: number;

    /**
     * File extension error. If the user selects a file that isn't valid according to the filters setting.
     *
     * @property FILE_EXTENSION_ERROR
     * @static
     * @final
     */
    export const FILE_EXTENSION_ERROR: number;

    /**
     * Duplicate file error. If prevent_duplicates is set to true and user selects the same file again.
     *
     * @property FILE_DUPLICATE_ERROR
     * @static
     * @final
     */
    export const FILE_DUPLICATE_ERROR: number;

    /**
     * Runtime will try to detect if image is proper one. Otherwise will throw this error.
     *
     * @property IMAGE_FORMAT_ERROR
     * @static
     * @final
     */
    export const IMAGE_FORMAT_ERROR: number;

    /**
     * While working on files runtime may run out of memory and will throw this error.
     *
     * @since 2.1.2
     * @property MEMORY_ERROR
     * @static
     * @final
     */
    export const MEMORY_ERROR: number;

    /**
     * Each runtime has an upper limit on a dimension of the image it can handle. If bigger, will throw this error.
     *
     * @property IMAGE_DIMENSIONS_ERROR
     * @static
     * @final
     */
    export const IMAGE_DIMENSIONS_ERROR: number;

    export const mimeTypes: any;
    export const ua: any;

    /**
     * Gets the true type of the built-in object (better version of typeof).
     * @credits Angus Croll (http://javascriptweblog.wordpress.com/)
     *
     * @method typeOf
     * @static
     * @param {Object} o Object to check.
     * @return {String} Object [[Class]]
     */
    function typeOf(o: any): string;

    /**
     * Extends the specified object with another object.
     *
     * @method extend
     * @static
     * @param {Object} target Object to extend.
     * @param {Object..} obj Multiple objects to extend with.
     * @return {Object} Same as target, the extended object.
     */
    function extend(target: any): any;

    /**
     * Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
     * The only way a user would be able to get the same ID is if the two persons at the same exact millisecond manages
     * to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
     * It's more probable for the earth to be hit with an asteriod. You can also if you want to be 100% sure set the plupload.guidPrefix property
     * to an user unique key.
     *
     * @method guid
     * @static
     * @return {String} Virtually unique id.
     */
    function guid(guid: string): string;

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
    function each(obj: any, callback: Function): void;

    /**
     * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
     *
     * @method getPos
     * @static
     * @param {Element} node HTML element or element id to get x, y position from.
     * @param {Element} root Optional root element to stop calculations at.
     * @return {object} Absolute position of the specified element object with x, y fields.
     */
    function getPos(node: Element, root: Element): any;

    /**
     * Returns the size of the specified node in pixels.
     *
     * @method getSize
     * @static
     * @param {Node} node Node to get the size of.
     * @return {Object} Object with a w and h property.
     */
    function getSize(node: Node): any;

    /**
     * Encodes the specified string.
     *
     * @method xmlEncode
     * @static
     * @param {String} s String to encode.
     * @return {String} Encoded string.
     */
    function xmlEncode(str: string): string;

    /**
     * Forces anything into an array.
     *
     * @method toArray
     * @static
     * @param {Object} obj Object with length field.
     * @return {Array} Array object containing all items.
     */
    function toArray(obj: any): Array<any>;

    /**
     * Find an element in array and return its index if present, otherwise return -1.
     *
     * @method inArray
     * @static
     * @param {mixed} needle Element to find
     * @param {Array} array
     * @return {Int} Index of the element, or -1 if not found
     */
    function inArray(needle: any, array: Array<any>): number;

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
    function inSeries(queue: Array<any>, callback: Function): void;

    /**
     * Extends the language pack object with new items.
     *
     * @method addI18n
     * @static
     * @param {Object} pack Language pack items to add.
     * @return {Object} Extended language pack object.
     */
    function addI18n(pack: any): any;

    /**
     * Translates the specified string by checking for the english string in the language pack lookup.
     *
     * @method translate
     * @static
     * @param {String} str String to look for.
     * @return {String} Translated string or the input string if it wasn't found.
     */
    function translate(str: string): string;

    /**
     * Pseudo sprintf implementation - simple way to replace tokens with specified values.
     *
     * @param {String} str String with tokens
     * @return {String} String with replaced tokens
     */
    function sprintf(str: string): string;

    /**
     * Checks if object is empty.
     *
     * @method isEmptyObj
     * @static
     * @param {Object} obj Object to check.
     * @return {Boolean}
     */
    function isEmptyObj(obj: any): boolean;

    /**
     * Checks if specified DOM element has specified class.
     *
     * @method hasClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    function hasClass(obj: any, name: string): any;

    /**
     * Adds specified className to specified DOM element.
     *
     * @method addClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    function addClass(obj: any, name: string): any;

    /**
     * Removes specified className from specified DOM element.
     *
     * @method removeClass
     * @static
     * @param {Object} obj DOM element like object to add handler to.
     * @param {String} name Class name
     */
    function removeClass(obj: any, name: string): any;

    /**
     * Returns a given computed style of a DOM element.
     *
     * @method getStyle
     * @static
     * @param {Object} obj DOM element like object.
     * @param {String} name Style you want to get from the DOM element
     */
    function getStyle(obj: any, name: string): any;

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
    function addEvent(obj: any, name: string, callback: Function, key?: string): any;

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
    function removeEvent(obj: any, name: string, optional?: Function | string): any;

    /**
     * Remove all kind of events from the specified object
     *
     * @method removeAllEvents
     * @static
     * @param {Object} obj DOM element to remove event listeners from.
     * @param {String} (optional) unique key to match, when removing events.
     */
    function removeAllEvents(obj: any, key?: string): any;

    /**
     * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
     *
     * @method cleanName
     * @static
     * @param {String} s String to clean up.
     * @return {String} Cleaned string.
     */
    function cleanName(name: string): string;

    /**
     * Builds a full url out of a base URL and an object with items to append as query string items.
     *
     * @method buildUrl
     * @static
     * @param {String} url Base URL to append query string items to.
     * @param {Object} items Name/value object to serialize as a querystring.
     * @return {String} String with url + serialized query string items.
     */
    function buildUrl(url: string, items: any): string;

    /**
     * Formats the specified number as a size string for example 1024 becomes 1 KB.
     *
     * @method formatSize
     * @static
     * @param {Number} size Size to format as string.
     * @return {String} Formatted size string.
     */
    function formatSize(size: number): string;

    /**
     * Parses the specified size string into a byte value. For example 10kb becomes 10240.
     *
     * @method parseSize
     * @static
     * @param {String|Number} size String to parse or number to just pass through.
     * @return {Number} Size in bytes.
     */
    function parseSize(size: number | string): number;


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
    function predictRuntime(config: any, runtimes: string): string;

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
    function addFileFilter(name: string, cb: Function): void;
}

declare module 'plupload' {
    export = plupload;
}
