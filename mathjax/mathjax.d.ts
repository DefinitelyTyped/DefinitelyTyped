// Type definitions for MathJax
// Project: https://github.com/mathjax/MathJax
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// These are slightly preliminary and can use some more strong typing here and there. Please feel free to improve.
declare var MathJax:jax.IMathJax;

declare module jax {

    export interface IMathJax {
        Hub?:IMathJaxHub;
        Ajax?:IAjax;
        Message?:IMessage;
        HTML?:IHTML;
        Callback?:ICallback;
        Localization?:ILocalization;
        InputJax?:IInputJax;
        OutputJax?:IOutputJax;
    }

    export interface ICallback {
        (fn:Function):ICallbackObject;
        (fns:Function[]):ICallbackObject;
        (objs:any[]):ICallbackObject;
        (obj:any):ICallbackObject;
        (code:string):ICallbackObject;
        /*Waits for the specified time (given in milliseconds) and then performs the callback. It returns the Callback
        * object (or a blank one if none was supplied). The returned callback structure has a timeout property set to
        * the result of the setTimeout() call that was used to perform the wait so that you can cancel the wait, if
        * needed. Thus MathJax.Callback.Delay() can be used to start a timeout delay that executes the callback if an
        * action doesn’t occur within the given time (and if the action does occur, the timeout can be canceled).
        * Since MathJax.Callback.Delay() returns a callback structure, it can be used in a callback queue to insert a
        * delay between queued commands.
        */
        Delay(time:number, callback:any):ICallbackObject;
        /*Creates a MathJax.CallBack.Queue object and pushes the given callbacks into the queue. See Using Queues for
        * more details about MathJax queues.
        */
        Queue(...args:any[]):IQueue;
        /*Looks for a named signal, creates it if it doesn’t already exist, and returns the signal object. See Using
        * Signals for more details.
        */
        Signal(name:string):ISignal;
        /*Calls each callback in the hooks array (or the single hook if it is not an array), passing it the arguments
        * stored in the data array. If reset is true, then the callback’s reset() method will be called before each hook
        * is executed. If any of the hooks returns a Callback object, then it collects those callbacks and returns a new
        * callback that will execute when all the ones returned by the hooks have been completed. Otherwise,
        * MathJax.Callback.ExecuteHooks() returns null.
        */
        ExecuteHooks(hooks:any[], data:any[], reset:boolean):ICallbackObject;
        /*Creates a prioritized list of hooks that are called in order based on their priority (low priority numbers are
        * handled first). This is meant to replace MathJax.Callback.ExecuteHooks() and is used internally for signal
        * callbacks, pre- and post-filters, and other lists of callbacks.
        */
        Hooks(reset:boolean):IHooks;
    }

    export interface IHooks {
        Add(hook:any, priority:number):ICallbackObject;
        Remove(hook:ICallbackObject):void;
        Execute():ICallbackObject;
    }

    export interface IQueue {
        /*This is non-zero when the queue is waiting for a command to complete, i.e. a command being processed returns a
        * Callback object, indicating that the queue should wait for that action to complete before processing
        * additional commands.
        */
        pending:number;
        /*This is non-zero when the queue is executing one of the commands in the queue.*/
        running:number;
        /*An array containing the queued commands that are yet to be performed.*/
        queue:any[];
        /*Adds commands to the queue and runs them (if the queue is not pending or running another command). If one of
        * the callbacks is an actual Callback object rather than a callback specification, then the command queued is
        * an internal command to wait for the given callback to complete. That is, that callback is not itself queued
        * to be executed, but a wait for that callback is queued. The Push() method returns the last callback that was
        * added to the queue (so that it can be used for further synchronization, say as an entry in some other queue).
        */
        Push(specs:any[]):ICallbackObject;
        /*Process the commands in the queue, provided the queue is not waiting for another command to complete. This
        * method is used internally; you should not need to call it yourself.
        */
        Process():void;
        /*Increments the running property, indicating that any commands that are added to the queue should not be
        * executed immediately, but should be queued for later execution (when its Resume() is called). This method is
        * used internally; you should not need to call it yourself.
        */
        Suspend():void;
        /*Decrements the running property, if it is positive. When it is zero, commands can be processed, but that is
        * not done automatically — you would need to call Process() to make that happen. This method is used
        * internally; you should not need to call it yourself.
        */
        Resume():void;
        /*Used internally when an entry in the queue is a Callback object rather than a callback specification.
        * A callback to this function (passing it the original callback) is queued instead, and it simply returns the
        * callback it was passed. Since the queue will wait for a callback if it is the return value of one of the
        * commands it executes, this effectively makes the queue wait for the original callback at that point in the
        * command queue.
        */
        wait(callback:Function):Function;
        /*An internal function used to restart processing of the queue after it has been waiting for a command to
        * complete.
        */
        call():void;
    }

    export interface ISignal {
        /*The name of the signal. Each signal is named so that various components can access it. The first one to
        * request a particular signal causes it to be created, and other requests for the signal return references
        * to the same object.
        */
        name:string;
        /*Array used internally to store the post history so that when new listeners express interests in this signal,
        * they can be informed of the signals that have been posted so far. This can be cleared using the signal’s
        * Clear() method.
        */
        posted:any[];
        /*Array of callbacks to the listeners who have expressed interest in hearing about posts to this signal.
        * When a post occurs, the listeners are called, each in turn, passing them the message that was posted.
        */
        listeners:ICallbackObject[];
        /*Posts a message to all the listeners for the signal. The listener callbacks are called in turn (with the
        * message as an argument), and if any return a Callback object, the posting will be suspended until the callback
        * is executed. In this way, the Post() call can operate asynchronously, and so the callback parameter is used to
        * synchronize with its operation; the callback will be called when all the listeners have responded to the post.
        *
        * If a Post() to this signal occurs while waiting for the response from a listener (either because a listener
        * returned a Callback object and we are waiting for it to complete when the Post() occurred, or because the
        * listener itself called the Post() method), the new message will be queued and will be posted after the current
        * message has been sent to all the listeners, and they have all responded. This is another way in which posting
        * can be asynchronous; the only sure way to know that a posting has occurred is through its callback. When the
        * posting is complete, the callback is called, passing it the signal object that has just completed.
        *
        * Returns the callback object (or a blank callback object if none was provided).
        */
        Post(message:string):ICallbackObject;
        Post(message:string, callback:ICallbackObject):ICallbackObject;
        /*This causes the history of past messages to be cleared so new listeners will not receive them. Note that since
        * the signal may be operating asynchronously, the Clear() may be queued for later. In this way, the Post() and
        * Clear() operations will be performed in the proper order even when they are delayed. The callback is called
        * when the Clear() operation is completed.
        *
        * Returns the callback (or a blank callback if none is provided).
        */
        Clear():ICallbackObject;
        Clear(callback:ICallbackObject):ICallbackObject;
        /*This method registers a new listener on the signal. It creates a Callback object from the callback
        * specification, attaches it to the signal, and returns that Callback object. When new messages are posted to
        * the signal, it runs the callback, passing it the message that was posted. If the callback itself returns a
        * Callback object, that indicates that the listener has started an asynchronous operation and the poster should
        * wait for that callback to complete before allowing new posts on the signal.
        *
        * If ignorePast is false or not present, then before Interest() returns, the callback will be called with all
        * the past messages that have been sent to the signal.
        */
        Interest(callback:ICallbackObject):ICallbackObject;
        Interest(callback:ICallbackObject, ignorePast:boolean):ICallbackObject;
        /*This removes a listener from the signal so that no new messages will be sent to it. The callback should be the
        * one returned by the original Interest() call that attached the listener to the signal in the first place.
        * Once removed, the listener will no longer receive messages from the signal.
        */
        NoInterest(callback:ICallbackObject):void;
        /*This creates a callback that is called whenever the signal posts the given message. This is a little easier
        * than having to write a function that must check the message each time it is called. Although the message here
        * is a string, if a message posted to the signal is an array, then only the first element of that array is used
        * to match against the message. That way, if a message contains an identifier plus arguments, the hook will
        * match the identifier and still get called with the complete set of arguments.
        *
        * Returns the Callback object that was produced.
        */
        MessageHook(message:string, callback:ICallbackObject):ICallbackObject;
        /*Used internally to call the listeners when a particular message is posted to the signal.*/
        ExecuteHook(message:string):void;
    }

    export interface ICallbackObject {
        /*The function to be called when the callback is executed.*/
        hook:number;
        /*An array containing the arguments to pass to the callback function when it is executed.*/
        data:any[];
        /*The object to use as this during the call to the callback function.*/
        object:any;
        /*Set to true after the callback has been called, and undefined otherwise. A callback will not be executed a
         * second time unless the callback’s reset() method is called first, or its autoReset property is set to true.
         */
        called:boolean;
        /*Set this to true if you want to be able to call the callback more than once. (This is the case for signal
         * listeners, for example).*/
        autoReset:boolean;
        /*Clears the callback’s called property.*/
        reset():void;
    }

    export interface IMathJaxHub {
        /*This holds the configuration parameters for MathJax. Set these values using MathJax.Hub.Config() described
        * below. The options and their default values are given in the Core Options reference page.
        */
        config?:IMathJaxConfig;
        /*The minimum time (in milliseconds) between updates of the “Processing Math” message. After this amount of time
        * has passed, and after the next equation has finished being processed, MathJax will stop processing momentarily
        * so that the update message can be displayed, and so that the browser can handle user interaction.
        */
        processUpdateTime?:number;
        /*The amount of time (in milliseconds) that MathJax pauses after issuing its processing message before starting
        * the processing again (to give browsers time to handle user interaction).
        */
        processUpdateDelay?:number;
        /*The hub processing signal (tied to the MathJax.Hub.Register.MessageHook() method).*/
        signal?:ISignal;
        /*MathJax’s main processing queue. Use MathJax.Hub.Queue() to push callbacks onto this queue.*/
        queue?:any;
        /*The name of the browser as determined by MathJax. It will be one of Firefox, Safari, Chrome, Opera, MSIE,
        * Konqueror, or unkown. This is actually an object with additional properties and methods concerning the
        * browser
        */
        Browser?:IBrowserInfo;
        /*An object storing the MIME types associated with the various registered input jax (these are the types of the
        * <script> tags that store the math to be processed by each input jax).
        */
        inputJax?:any;
        /*An object storing the output jax associate with the various element jax MIME types for the registered output
        * jax.
        */
        outputJax?:any;
        Register?:IRegister;
        /*Sets the configuration options (stored in MathJax.Hub.config) to the values stored in the options object.*/
        Config(config:IMathJaxConfig):void;
        /*When delayStartupUntil is specified in the configuration file or in the script that loads MathJax.js,
        * MathJax’s startup sequence is delayed until this routine is called.
        */
        Configured():void;
        /*Pushes the given callbacks onto the main MathJax command queue. This synchronizes the commands with MathJax so
         * that they will be performed in the proper order even when some run asynchronously. See Using Queues for more
         * details about how to use queues, and the MathJax queue in particular. You may supply as many callback
         * specifications in one call to the Queue() method as you wish.
         */
        Queue(callBack:any):any;
        /*Calls the preprocessors on the given element (or elements if it is an array of elements), and then typesets
        * any math elements within the element. If no element is provided, the whole document is processed. The element
        * is either the DOM id of the element, a reference to the DOM element itself, or an array of id’s or refereneces.
        * The callback is called when the process is complete. See the Modifying Math section for details of how to use
        * this method properly.
        */
        Typeset(element:any, callBack:any):any;
        /*Calls the loaded preprocessors on the entire document, or on the given DOM element (or elements, if it is an
        * array of elements). The element is either the DOM id of the element, a reference to the DOM element itself, or
        * an array of id’s or references. The callback is called when the processing is complete.
        */
        PreProcess(element:any, callBack:any):any;
        /*Scans either the entire document or a given DOM element (or array of elements) for MathJax <script> tags and
        * processes the math those tags contain. The element is either the DOM id of the element to scan, a reference to
        * the DOM element itself, or an array of id’s or references. The callback is called when the processing is
        * complete.
        */
        Process(element:any, callBack:any):any;
        /*Scans either the entire document or a given DOM element (or elements if it is an array of elements) for
        * mathematics that has changed since the last time it was processed, or is new, and typesets the mathematics
        * they contain. The element is either the DOM id of the element to scan, a reference to the DOM element itself,
        * or an array of id’s or references. The callback is called when the processing is complete.
        */
        Update(element:any, callBack:any):any;
        /*Removes any typeset mathematics from the document or DOM element (or elements if it is an array of elements),
        * and then processes the mathematics again, re-typesetting everything. This may be necessary, for example, if
        * the CSS styles have changed and those changes would affect the mathematics. Reprocess calls both the input and
        * output jax to completely rebuild the data for mathematics. The element is either the DOM id of the element to
        * scan, a reference to the DOM element itself, or an array of id’s or references. The callback is called when
        * the processing is complete.
        */
        Reprocess(element:any, callBack:any):any;
        /*Removes any typeset mathematics from the document or DOM element (or elements if it is an array of elements),
        * and then renders the mathematics again, re-typesetting everything from the current internal version (without
        * calling the input jax again). The element is either the DOM id of the element to scan, a reference to the DOM
        * element itself, or an array of id’s or references. The callback is called when the processing is complete.
        */
        Rerender(element:any, callBack:any):any;
        /*Returns a list of all the element jax in the document or a specific DOM element. The element is either the DOM
        * id of the element, or a reference to the DOM element itself.
        */
        getAllJax(element:any):any[];
        /*Returns a list of all the element jax of a given MIME-type in the document or a specific DOM element. The
        * element is either the DOM id of the element to search, or a reference to the DOM element itself.
        */
        getJaxByType(type:string, element:any):void;
        /*Returns a list of all the element jax associated with input <script> tags with the given MIME-type within the
        * given DOM element or the whole document. The element is either the DOM id of the element to search, or a
        * reference to the DOM element itself.
        */
        getJaxByInputType(type:string, element:any):void;
        /*Returns the element jax associated with a given DOM element. If the element does not have an associated
        * element jax, null is returned. The element is either the DOM id of the element, or a reference to the DOM
        * element itself.
        */
        getJaxFor(element:any):any;
        /*Returns 0 if the element is not a <script> that can be processed by MathJax or the result of an output jax,
        * returns -1 if the element is an unprocessed <script> tag that could be handled by MathJax, and returns 1 if
        * the element is a processed <script> tag or an element that is the result of an output jax.
        */
        isJax(element:any):number;
        /*Sets the output jax for the given element jax type (or jax/mml if none is specified) to be the one given by
        * renderer, which must be the name of a renderer, such as NativeMML or HTML-CSS. Note that this does not cause
        * the math on the page to be rerendered; it just sets the renderer for output in the future
        * (call :meth:Rerender() above to replace the current renderings by new ones).
        */
        setRenderer(renderer:string, type:string):void;
        /*Inserts data from the src object into the dst object. The key:value pairs in src are (recursively) copied into
        * dst, so that if value is itself an object, its content is copied into the corresponding object in dst.
        * That is, objects within src are merged into the corresponding objects in dst (they don’t replace them).
        */
        Insert(dst:any, src:any):any;
        /*This is called when an internal error occurs during the processing of a math element (i.e., an error in the
        * MathJax code itself). The script is a reference to the <script> tag where the error occurred, and error is the
        * Error object for the error. The default action is to insert an HTML snippet at the location of the script, but
        * this routine can be overriden during MathJax configuration in order to perform some other action.
        * MathJax.Hub.lastError holds the error value of the last error on the page.
        */
        formatError(script:any, error:any):void;
    }

    export interface IRegister {
        /*Used by preprocessors to register themselves with MathJax so that they will be called during the
        * MathJax.Hub.PreProcess() action.
        */
        PreProcessor(callBack:any):void;
        /*Registers a listener for a particular message being sent to the hub processing signal (where PreProcessing,
        * Processing, and New Math messages are sent). When the message equals the type, the callback will be called
        * with the message as its parameter.
        */
        MessageHook(type:string, callBack:any):void;
        /*Registers a listener for a particular message being sent to the startup signal (where initialization and
        * component startup messages are sent). When the message equals the type, the callback will be called with the
        * message as its parameter. See the Using Signals documentation for more details.
        */
        StartupHook(type:string, callBack:any):void;
        /*Registers a callback to be called when a particular file is completely loaded and processed. (The callback is
        * called when the file makes its MathJax.Ajax.loadComplete() call.) The file should be the complete file name,
        * e.g., "[MathJax]/config/default.js".
        */
        LoadHook(file:string, callBack:Function):void;
    }

    export interface IBrowserInfo {
        /*The browser version number, e.g., "4.0"*/
        version:string;

        /*These are boolean values that indicate whether the browser is running on a Macintosh computer or a Windows
        * computer. They will both be false for a Linux computer.
        */
        isMac?:boolean;
        isPC?:boolean;

        /*This is true when MathJax is running a mobile version of a WebKit or Gecko-based browser.*/
        isMobile?:boolean;

        /*These are true when the browser is the indicated one, and false otherwise.*/
        isFirefox?:boolean;
        isSafari?:boolean;
        isChrome?:boolean;
        isOpera?:boolean;
        isMSIE?:boolean;
        isKonqueror?:boolean;

        /*This tests whether the browser version is at least that given in the version string. Note that you can not
        * simply do a numeric comparison, as version 4.10 should be considered later than 4.9, for example. Similarly,
        * 4.10 is different from 4.1, for instance.*/
        versionAtLeast(version:string):void;

        /* This lets you perform browser-specific functions. Here, choices is an object whose properties are the names of the browsers and whose values are the functions to be performed. Each function is passed one parameter, which is the MathJax.Hub.Browser object. You do not need to include every browser as one of your choices — only those for which you need to do special processing. For example:
        *MathJax.Hub.Browser.Select({
        *    MSIE: function (browser) {
        *    if (browser.versionAtLeast("8.0")) {... do version 8 stuff ... }
        *        ... do general MSIE stuff ...
        *    },
        *    Firefox: function (browser) {
        *    if (browser.isMac) {... do Mac stuff ... }
        *        ... do general Firefox stuff
        *    }
        *});*/
        Select(choices:any):void;
    }

    export interface IAjax {
        /*Number of milliseconds to wait for a file to load before it is considered to have failed to load.*/
        timeout?:number;
        STATUS:ISTATUS;
        /*An object containing the names of the files that have been loaded (or requested) so far.
        * MathJax.Ajax.loaded["file"] will be non-null when the file has been loaded, with the value being the
        * MathJax.Ajax.STATUS value of the load attempt.
        */
        loaded:any;
        /*An object containing the files that are currently loading, the callbacks that are to be run when they load or
        * timeout, and additional internal data.*/
        loading:boolean;
        /*An object containing the load hooks for the various files, set up by the LoadHook() method, or by the
        * MathJax.Hub.Register.LoadHook() method.
        */
        loadHooks:any;
        /*Loads the given file if it hasn’t been already. The file must be a JavaScript file or a CSS stylesheet; i.e.,
        * it must end in .js or .css. Alternatively, it can be an object with a single key:value pair where the key is
        * one of js or css and the value is the file of that type to be loaded (this makes it possible to have the file
        * be created by a CGI script, for example, or to use a data:: URL). The file must be relative to the MathJax
        * home directory and can not contain ../ file path components.
        *
        * When the file is completely loaded and run, the callback, if provided, will be executed passing it the status
        * of the file load. If there was an error while loading the file, or if the file fails to load within the time
        * limit given by MathJax.Ajax.timout, the status will be MathJax.Ajax.STATUS.ERROR otherwise it will be
        * MathJax.Ajax.STATUS.OK. If the file is already loaded, the callback will be called immediately and the file
        * will not be loaded again.
        */
        Require(file:string, callBack:any):any;
        /*Used internally to load a given file without checking if it already has been loaded, or where it is to
        * be found.
        */
        Load(file:string, callBack:any):any;
        /*Called from within the loaded files to inform MathJax that the file has been completely loaded and
        * initialized. The file parameter is the name of the file that has been loaded. This routine will cause any
        * callback functions registered for the file or included in the MathJax.Ajax.Require() calls to be executed,
        * passing them the status of the load (MathJax.Ajax.STATUS.OK or MathJax.Ajax.STATUS.ERROR) as their
        * last parameter.
        */
        loadComplete(file:string):void;
        /*Called when the timeout period is over and the file hasn’t loaded. This indicates an error condition, and the
        * MathJax.Ajax.loadError() method will be executed, then the file’s callback will be run with
        * MathJax.Ajax.STATUS.ERROR as its parameter.
        */
        loadTimeout(file:string):void;
        /*The default error handler called when a file fails to load. It puts a warning message into the MathJax message
        * box on screen.
        */
        loadError(file:string):void;
        /*Registers a callback to be executed when the given file is loaded. The file load operation needs to be started
        * when this method is called, so it can be used to register a hook for a file that may be loaded in the future.
        */
        LoadHook(file:string, callBack:any):any;
        /*Used with combined configuration files to indicate what files are in the configuration file. Marks the files
        * as loading (since there will never be an explicit Load() or Require() call for them), so that load-hooks and
        * other load-related events can be properly processed when the loadComplete() occurs.
        */
        Preloading(...args:any[]):void;
        /*Creates a stylesheet from the given style data. styles can either be a string containing a stylesheet
        * definition, or an object containing a CSS Style Object.
        */
        Styles(styles:any, callback:any):any;
        /*Returns a complete URL to a file (replacing [MathJax] with the actual root URL location).*/
        fileURL(file:string):string;
    }

    export interface ISTATUS {
        /*The value used to indicate that a file load has occurred successfully.*/
        OK:string;
        /*The value used to indicate that a file load has caused an error or a timeout to occur.*/
        ERROR:string;
    }

    export interface IMessage {
        /*This sets the message being displayed to the given message string. If n is not null, it represents a message
        * id number and the text is set for that message id, otherwise a new id number is created for this message. If
        * delay is provided, it is the time (in milliseconds) to display the message before it is cleared. If delay is
        * not provided, the message will not be removed automatically; you must call the MathJax.Messsage.Clear() method
        * by hand to remove it. If message is an array, then it represents a localizable string, as described in the
        * Localization strings documentation.
        */
        Set(message:string, n:number, delay:number):number;
        /*This causes the message with id n to be removed after the given delay, in milliseconds. The default delay is
        * 600 milliseconds.*/
        Clear(n:number, delay:number):void;
        /*This removes the message frame from the window (it will reappear when future messages are set, however).*/
        Remove():void;
        /*This sets the message area to a “Loading file” message, where file is the name of the file (with [MathJax]
        * representing the root directory).
        */
        File(file:string):number;
        /*This method is called on each message before it is displayed. It can be used to modify (e.g., shorten) the
        * various messages before they are displayed. The default action is to check if the messageStyle configuration
        * parameter is simple, and if so, convert loading and processing messages to a simpler form. This method can be
        * overridden to perform other sanitization of the message strings.
        */
        filterText(text:string, n:number):string;
        /*Returns a string of all the messages issued so far, separated by newlines. This is used in debugging MathJax
        * operations.
        */
        Log():string;
    }

    export interface IHTML {
        Cookie?:ICookie;
        /*Creates a DOM element of the given type. If attributes is non-null, it is an object that contains key:value
        * pairs of attributes to set for the newly created element. If contents is non-null, it is an HTML snippet that
        * describes the contents to create for the element.
        */
        Element(type:string, attributes:any, contents:any):any;
        /*Creates a DOM element and appends it to the parent node provided. It is equivalent to:
        * parent.appendChild(MathJax.HTML.Element(type,attributes,content))
        */
        addElement(parent:any, type:string, attributes:any, content:any):any;
        /*Creates a DOM text node with the given text as its content.*/
        TextNode(text:string):any;
        /*Creates a DOM text node with the given text and appends it to the parent node.*/
        addText(parent:any, text:string):any;
        /*Sets the contents of the script element to be the given text, properly taking into account the browser
        * limitations and bugs.
        */
        setScript(script:string, text:string):void;
        /*Gets the contents of the script element, properly taking into account the browser limitations and bugs.*/
        getScript(script:string):string;
    }

    export interface ICookie {
        prefix?:string;
        expires?:number;
        /*Creates a MathJax cookie using the MathJax.HTML.Cookie.prefix and the name as the cookie name, and the
        * key:value pairs in the data object as the data for the cookie.
        */
        Set(name:string,data:any):void
        /*Looks up the data for the cookie named name and merges the data into the given obj object, or returns a new
        * object containing the data.
        */
        Get(name:string):any;
        Get(name:string,obj:any):any;
    }

    export interface IMenuSettings {
        /*This indicates when typeset mathematics should be zoomed. It can be set to "None", "Hover", "Click", or
        * "Double-Click" to set the zoom trigger.
        */
        zoom?:string;
        /*These values indicate which keys must be pressed in order for math zoom to be triggered. For example, if CTRL
        * is set to true and zoom is "Click", then math will be zoomed only when the user control-clicks on mathematics
        * (i.e., clicks while holding down the CTRL key). If more than one is true, then all the indicated keys must be
        * pressed for the zoom to occur.
        */
        CTRL?:boolean;
        ALT?:boolean;
        CMD?:boolean;
        Shift?:boolean;
        /*This is the zoom scaling factor, and it can be set to any of the values available in the Zoom Factor menu of
        * the Settings submenu of the contextual menu.
        */
        zscale?:string;
        /*This controls what contextual menu will be presented when a right click (on a PC) or CTRL-click (on the Mac)
        * occurs over a typeset equation. When set to "MathJax", the MathJax contextual menu will appear; when set to
        * "Browser", the browser’s contextual menu will be used. For example, in Internet Explorer with the MathPlayer
        * plugin, if this is set to "Browser", you will get the MathPlayer contextual menu rather than the MathJax menu.
        */
        context?:string;
        /*This controls whether the “Show Source” menu item includes special class names that help MathJax to typeset
        * the mathematics that was produced by the TeX input jax. If these are included, then you can take the output
        * from “Show Source” and put it into a page that uses MathJax’s MathML input jax and expect to get the same
        * results as the original TeX. (Without this, there may be some spacing differences.)
        */
        texHints?:boolean;
    }

    export interface IErrorSettings {
        /*This is an HTML snippet that will be inserted at the location of the mathematics for any formula that causes
        * MathJax to produce an internal error (i.e., an error in the MathJax code itself). See the description of HTML
        * snippets for details on how to represent HTML code in this way.
        */
        message?:string[];
        /*This is the CSS style description to use for the error messages produced by internal MathJax errors. See the
        * section on CSS style objects for details on how these are specified in JavaScript.
        */
        style?:any;
    }

    export interface IMathJaxConfig {
        MathZoom?:IMathZoom;
        MathMenu?:IMathMenu;
        MathEvents?:IMathEvents;
        FontWarnings?:IFontWarnings;
        Safe?:ISafe;
        MatchWebFonts?:IMatchWebFonts;
        SVG?:ISVGOutputProcessor;
        MMLorHTML?:IMMLorHTMLConfiguration;
        NativeMML?:INativeMMLOutputProcessor;
        "HTML-CSS"?:IHTMLCSSOutputProcessor;
        AsciiMath?:IAsciiMathInputProcessor;
        MathML?:IMathMLInputProcessor;
        TeX?:ITeXInputProcessor;
        jsMath2jax?:IJSMath2jaxPreprocessor;
        asciimath2jax?:IAsciimath2jaxPreprocessor;
        mml2jax?:IMML2jaxPreprocessor;
        tex2jax?:ITEX2jaxPreprocessor;
        /*A comma-separated list of input and output jax to initialize at startup. Their main code is loaded only when
         * they are actually used, so it is not inefficient to include jax that may not actually be used on the page.
         * These are found in the MathJax/jax directory.
         */
        jax?:string[];
        /*A comma-separated list of extensions to load at startup. The default directory is MathJax/extensions. The
         * tex2jax and mml2jax preprocessors can be listed here, as well as a FontWarnings extension that you can use to
         * inform your user that mathematics fonts are available that they can download to improve their experience of
         * your site.
         */
        extensions?:string[];
        /*A comma-separated list of configuration files to load when MathJax starts up, e.g., to define local macros,
         * etc., and there is a sample config file named config/local/local.js. The default directory is the
         * MathJax/config directory. The MMLorHTML.js configuration is one such configuration file, and there are a
         * number of other pre-defined configurations (see Using a configuration file for more details).
         */
        config?:string[];
        /*A comma-separated list of CSS stylesheet files to be loaded when MathJax starts up. The default directory is
         * the MathJax/config directory.
         */
        styleSheets?:string;
        /*CSS styles to be defined dynamically at startup time. These are in the form selector:rules (see CSS Style
         * Objects for complete details).
         */
        styles?:any;
        /*Patterns to remove from before and after math script tags. If you are not using one of the preprocessors, you
         * need to insert something extra into your HTML file in order to avoid a bug in Internet Explorer. IE removes
         * spaces from the DOM that it thinks are redundant, and since a <script> tag usually doesn’t add content to the
         * page, if there is a space before and after a MathJax <script> tag, IE will remove the first space. When
         * MathJax inserts the typeset mathematics, this means there will be no space before it and the preceding text.
         * In order to avoid this, you should include some “guard characters” before or after the math SCRIPT tag; define
         * the patterns you want to use below. Note that these are used as part of a regular expression, so you will need
         * to quote special characters. Furthermore, since they are javascript strings, you must quote javascript special
         * characters as well. So to obtain a backslash, you must use \\ (doubled for javascript). For example, "\\["
         * represents the pattern \[ in the regular expression, or [ in the text of the web page. That means that if you
         * want an actual backslash in your guard characters, you need to use "\\\\" in order to get \\ in the regular
         * expression, and \ in the actual text. If both preJax and postJax are defined, both must be present in order
         * to be removed.
         *
         * See also the preRemoveClass comments below.
         *
         * Examples:
         *
         * preJax: "\\\\\\\\\" makes a double backslash the preJax text
         *
         * preJax: "\\[\\[", postJax: "\\]\\]" makes it so jax scripts must be enclosed in double brackets.
         */
        preJax?:any;
        postJax?:any;
        /*This is the CSS class name for math previews that will be removed preceding a MathJax SCRIPT tag. If the tag
         * just before the MathJax <script> tag is of this class, its contents are removed when MathJax processes the
         * <script> tag. This allows you to include a math preview in a form that will be displayed prior to MathJax
         * performing its typesetting. It also avoids the Internet Explorer space-removal bug, and can be used in place
         * of preJax and postJax if that is more convenient.
         *
         * For example
         *
         * <span class="MathJax_Preview">[math]</span><script  type="math/tex">...</script>
         * would display “[math]” in place of the math until MathJax is able to typeset it.
         */
        preRemoveClass?:string;
        /*This value controls whether the Processing Math: nn% messages are displayed in the lower left-hand corner.
         * Set to false to prevent those messages (though file loading and other messages will still be shown).
         */
        showProcessingMessages?:boolean;
        /*This value controls the verbosity of the messages in the lower left-hand corner. Set it to "none" to eliminate
         * all messages, or set it to "simple" to show “Loading...” and “Processing...” rather than showing the full file
         * name or the percentage of the mathematics processed.
         */
        messageStyle?:string;
        /*These two parameters control the alignment and shifting of displayed equations. The first can be "left",
         * "center", or "right", and determines the alignment of displayed equations. When the alignment is not "center",
         * the second determines an indentation from the left or right side for the displayed equations.*/
        displayAlign?:string;
        displayIndent?:string;
        /*Normally MathJax will perform its startup commands (loading of configuration, styles, jax, and so on) as soon
         * as it can. If you expect to be doing additional configuration on the page, however, you may want to have it
         * wait until the page’s onload handler is called. If so, set this to "onload". You can also set this to
         * "configured", in which case, MathJax will delay its startup until you explicitly call
         * MathJax.Hub.Configured(). See Configuring MathJax after it is loaded for more details.
         */
        delayStartupUntil?:string;
        /*Normally MathJax will typeset the mathematics on the page as soon as the page is loaded. If you want to delay
         * that process, in which case you will need to call MathJax.Hub.Typeset() yourself by hand, set this value to
         * true.
         */
        skipStartupTypeset?:boolean;
        /*This is a list of DOM element ID’s that are the ones to process for mathematics when any of the Hub typesetting
         * calls (Typeset(), Process(), Update(), etc.) are called with no element specified, and during MathJax’s initial
         * typesetting run when it starts up. This lets you restrict the processing to particular containers rather than
         * scanning the entire document for mathematics. If none are supplied, the complete document is processed.
         */
        elements?:string[];
        /*ince typesetting usually changes the vertical dimensions of the page, if the URL contains an anchor position,
         * then after the page is typeset, you may no longer be positioned at the correct position on the page. MathJax
         * can reposition to that location after it completes its initial typesetting of the page. This value controls
         * whether MathJax will reposition the browser to the #hash location from the page URL after typesetting for
         * the page.
         */
        positionToHash?:boolean;
        /*These control whether to attach the MathJax contextual menu to the expressions typeset by MathJax. Since the
         * code for handling MathPlayer in Internet Explorer is somewhat delicate, it is controlled separately via
         * showMathMenuMSIE, but the latter is now deprecated in favor of the MathJax contextual menu settings for
         * MathPlayer (see below).
         *
         * If showMathMenu is true, then right-clicking (on Windows or Linux) or control-clicking (on Mac OS X) will
         * produce a MathJax menu that allows you to get the source of the mathematics in various formats, change the
         * size of the mathematics relative to the surrounding text, get information about MathJax, and configure other
         * MathJax settings.
         *
         * Set this to false to disable the menu. When true, the MathMenu configuration block determines the operation
         * of the menu. See the MathMenu options for more details.
         *
         * These values used to be listed in the separate output jax, but have been moved to this more central location
         * since they are shared by all output jax. MathJax will still honor their values from their original positions,
         * if they are set there.
         */
        showMathMenu?:boolean;
        showMathMenuMSIE?:boolean;
        /*This block contains settings for the mathematics contextual menu that act as the defaults for the user’s
         * settings in that menu.
         * There are also settings for format, renderer, font, mpContext, and mpMouse, but these are maintained by
         * MathJax and should not be set by the page author.
         */
        menuSettings?:IMenuSettings;
        /*This block contains settings that control how MathJax responds to unexpected errors while processing
         * mathematical equations. Rather than simply crash, MathJax can report an error and go on.
         */
        errorSettings?:IErrorSettings;
        "v1.0-compatible"?:boolean;
    }

    export interface IMathZoom {
        /*This is a list of CSS declarations for styling the zoomed mathematics. See the definitions in
        * extensions/MathZoom.js for details of what are defined by default. See CSS Style Objects for details on how
        * to specify CSS style in a JavaScript object.
        */
        styles:any;
    }

    export interface IMathMenu {
        /*This is the hover delay for the display (in milliseconds) for submenus in the contextual menu: when the mouse
        * is over a submenu label for this long, the menu will appear. (The submenu also will appear if you click on its
        * label.)
        */
        delay?:number;
        /*This is the URL for the MathJax Help menu item. When the user selects that item, the browser opens a new window
        * with this URL.
        */
        helpURL?:string;
        /*This controls whether the “Math Renderer” item will be displayed in the “Math Settings” submenu of the MathJax
        * contextual menu. It allows the user to change between the HTML-CSS, NativeMML, and SVG output processors for
        * the mathematics on the page. Set to false to prevent this menu item from showing.
        */
        showRenderer?:boolean;
        /*This controls whether the “Font Preference” item will be displayed in the “Math Settings” submenu of the MathJax
         * contextual menu. This submenu lets the user select what font to use in the mathematics produced by the HTML-CSS
         * output processor. Note that changing the selection in the font menu will cause the page to reload. Set to false
         * to prevent this menu item from showing.
         * */
        showFontMenu?:boolean;
        /*This controls whether the “Language” item will be displayed in the MathJax contextual menu. This submenu allows
        * the user to select the language to use for the MathJax user interface, including the contextual menu, the about
        * and help dialogs, the message box at the lower left, and any warning messages produced by MathJax. Set this to
        * false to prevent this menu item from showing. This will force the user to use the language you have set for
        * MathJax.
        */
        showLocale?:boolean;
        /*This controls whether the “MathPlayer” item will be displayed in the “Math Settings” submenu of the MathJax
        * contextual menu. This submenu lets the user select what events should be passed on to the MathPlayer plugin,
        * when it is present. Mouse events can be passed on (so that clicks will be processed by MathPlayer rather than
        * MathJax), and menu events can be passed on (to allow the user access to the MathPlayer menu). Set to false to
        * prevent this menu item from showing.
        * */
        showMathPlayer?:boolean;
        /*This controls whether the “Contextual Menu” item will be displayed in the “Math Settings” submenu of the MathJax
        * contextual menu. It allows the user to decide whether the MathJax menu or the browser’s default contextual menu
        * will be shown when the context menu click occurs over mathematics typeset by MathJax. Set to false to prevent
        * this menu item from showing.
        */
        showContext?:boolean;
        /*These are the settings for the Annotation submenu of the “Show Math As” menu. If the <math> root element has a
        * <semantics> child that contains one of the following annotation formats, the source will be available via the
        * “Show Math As” menu. Each format has a list of possible encodings. For example, "TeX": ["TeX", "LaTeX",
        * "application/x-tex"] will map an annotation with an encoding of "TeX", "LaTeX", or "application/x-tex" to the
        * "TeX" menu.
        */
        semanticsAnnotations?:any;
        /*These are the settings for the window.open() call that creates the Show Source window. The initial width and
        * height will be reset after the source is shown in an attempt to make the window fit the output better.
        */
        windowSettings?:any;
        /*This is a list of CSS declarations for styling the menu components. See the definitions in
        * extensions/MathMenu.js for details of what are defined by default. See CSS Style Objects for details on how
        * to specify CSS style in a JavaScript object.
        */
        styles?:any;
    }

    export interface IMathEvents {
        /*This value is the time (in milliseconds) that a user must hold the mouse still over a math element before it
        * is considered to be hovering over the math.
        */
        hover?:number;
        /*This is a list of CSS declarations for styling the zoomed mathematics. See the definitions in
        * extensions/MathEvents.js for details of what are defined by default. See CSS Style Objects for details on how
        * to specify CSS style in a JavaScript object.
        */
        styles?:any;
    }

    export interface IFontWarnings {
        /*This sets the CSS styles to be used for the font warning message window. See the extensions/FontWarnings.js
        * file for details of what are set by default. See the CSS style objects for details about how to specify CSS
        * styles via javascript objects.
        */
        messageStyle?:any;
        /*This block contains HTML snippets to be used for the various messages that the FontWarning extension can
        * produce.
        * See the description of HTML snippets for details about how to describe the messages using HTML snippets. Note
        * that in addition to the usual rules for defining such snippets, the FontWarnings snippets can include
        * references to pre-defined snippets (that represent elements common to all three messages). These are defined
        * below in the HTML block, and are referenced using ["name"] within the snippet, where name is the name of one
        * of the snippets defined in the HTML configuration block
        */
        Message?:IHTMLMessages;
        /*This object defines HTML snippets that are common to more than one message in the Message section above. They
        * can be included in other HTML snippets by by using ["name"] in an HTML snippet, where name refers to the name
        * of the snippet in the HTML block.
        * You can add your own pre-defined HTML snippets to this object, or override the ones that are there with your
        * own text.
        */
        HTML?:IHTMLSnippets;
        /*This is the amount of time to show the FontWarning message, in milliseconds. The default is 12 seconds.
        * Setting this value to zero means that the message will not fade out (the user must close it manually).
        */
        removeAfter?:number;
        /*This is the number of steps to take while fading out the FontWarning message. More steps make for a smoother
        * fade-out. Set to zero to cause the message to be removed without fading.
        */
        fadeoutSteps?:number;
        /*This is the time used to perform the fade-out, in milliseconds. The default is 1.5 seconds.*/
        fadeoutTime?:number;
    }

    export interface IHTMLMessages {
        /*The message used for when MathJax uses web-based fonts (rather than local fonts installed on the user’s
        * system).
        */
        webFont?:any[];
        /*The message used for when MathJax must use image fonts rather than local or web-based fonts (for those
        * browsers that don’t handle the @font-face CSS directive).
        */
        imageFonts?:any[];
        /*The message used when MathJax is unable to find any font to use (i.e., neither local nor web-based nor
        * image-based fonts are available).
        */
        noFonts?:any[];
    }

    export interface IHTMLSnippets {
        /*The HTML for the close box in the FontWarning message.*/
        closeBox?:string;
        /*The HTML for a paragraph suggesting an upgrade to a more modern browser that supports web fonts.*/
        webfonts?:string;
        /*HTML that includes links to the MathJax and STIX font download pages.*/
        fonts?:string;
        /*HTML that gives the download link for the STIX fonts only. (Used in place of fonts when the HTML-CSS option
        * for availableFonts only includes the STIX fonts.)
        */
        STIXfonts?:string;
        /*HTML that gives the download link for the MathJax TeX fonts only. (Used in place of fonts when the HTML-CSS
        * option for availableFonts only includes the TeX fonts.)
        */
        TeXfonts?:string;
    }

    export interface ISafe {
        /*This block contains the flags that control what the Safe extension will allow, and what it will block. The
        * flags can be set to "all", "none", or "safe". When set to "all", no filtering is done for these values (this
        * gives MathJax’s default behavior). When set to "none", these values are always filtered out. When set to
        * "safe", then only some values are allowed.
        */
        allow?:ISafeAllow;
        /*This is the minimum font size (in em’s) that the TeX input jax will allow when fontsize is set to "safe" above.
        * The default is the size of \scriptsize. Values less than this are set to this value.
        */
        sizeMin?:number;
        /*This is the maximum font size (in em’s) that the TeX input jax will allow when fontsize is set to "safe" above.
        * The default is the size of \large. Values larger than this are set to this value.
        */
        sizeMax?:number;
        /*This is an object that lists the protocols that can be used in href attributes and the \href macro when URLs
        * is set to "safe" above.
        * Note that if a protocol doesn’t appear in the list, it is assumed to be false, so technically, javascript need
        * not have been listed, but it is given to make it explicit that it should not be allowed.
        */
        safeProtocols?:ISafeProtocols;
        /*This is an object that lists the style properties that can be used in MathML style attributes and the \style
        * and \bbox macros when styles is set to "safe" in the allowed property above.
        * Any style property that doesn’t appear on this list is not allowed to be entered and will be removed (silently)
        * from the style definition.
        */
        safeStyles?:ISafeStyles;
        /*This is an object that lists the TeX extensions that can be loaded via the \require{} macro when require is
        * set to "safe" in the allowed property above.
        * These configuration options give you a lot of control over what actions MathJax is allowed to take. It is also
        * possible override the individual filtering functions in order to customize the filtering even further, should
        * that be needed. See the code for the details of the function names and their definitions.
        */
        safeRequire?:ISafeRequire;
    }

    export interface ISafeAllow {
        /*When set to "safe" only URL’s with protocols that are listed in the safeProtocols property (see below) are
        * allowed as targets of href attributes or the \href macro. By default, these are http://, https://, and
        * file:// URL’s.
        */
        URLs?:string;
        /*When set to "safe", only class names that begin with MJX- and contain only letters, numbers, or the
        * characters -, _, or . are allowed.
        */
        classes?:string;
        /*When set to "safe", only ID’s that begin with MJX- and contain only letters, numbers, or the characters -, _,
        * or . are allowed.
        */
        cssIDs?:string;
        /*When set to "safe", only styles taken from a predefined set of styles are allowed to be given. These are
        * listed in the safeStyles property (see below).
        */
        styles?:string;
        /*When set to "safe", only the extensions listed in the safeRequire property (see below) are allowed to be
        * loaded by the \require{} macro.
        */
        require?:string;
        /*When set to "safe", MathJax will try to limit the font size to sizes between those given by the sizeMin and
        * sizeMax properties. These are .7 and 1.44 by default, which means sizes between \scriptsize and \large are
        * allowed. This also filters MathML fontsize, mathsize, and scriptminsize attributes, but here, "safe" acts as
        * "none", since they are given in sizes with units, and the actual size of the units is not determined at input
        * time (it is part of the output processing). In addition, the scriptlevel attribute is restricted to
        * non-negative values (so scripts can’t be made larger), and the scriptsizemultiplier is restricted to being
        * no larger than 1, and no less than .6.
        */
        fontsize?:string;
    }

    export interface ISafeProtocols {
        http?:boolean;
        https?:boolean;
        file?:boolean;
        javascript?:boolean;
    }

    export interface ISafeStyles {
        color?:boolean;
        backgroundColor?:boolean;
        border?:boolean;
        cursor?:boolean;
        margin?:boolean;
        padding?:boolean;
        textShadow?:boolean;
        fontFamily?:boolean;
        fontSize?:boolean;
        fontStyle?:boolean;
        fontWeight?:boolean;
        opacity?:boolean;
        outline?:boolean;
    }

    export interface ISafeRequire {
        action?:boolean;
        amscd?:boolean;
        amsmath?:boolean;
        amssymbols?:boolean;
        autobold?:boolean;
        "autoload-all"?:boolean;
        bbox?:boolean;
        begingroup?:boolean;
        boldsymbol?:boolean;
        cancel?:boolean;
        color?:boolean;
        enclose?:boolean;
        extpfeil?:boolean;
        HTML?:boolean;
        mathchoice?:boolean;
        mhchem?:boolean;
        newcommand?:boolean;
        noErrors?:boolean;
        noUndefined?:boolean;
        unicode?:boolean;
        verb?:boolean;
    }

    export interface IMatchWebFonts {
        /*This block controls whether to apply font size matching for each output mode.*/
        matchFor?:IMatchFor;
        /*Initial delay before the first check for web fonts (in milliseconds).*/
        fontCheckDelay?:number;
        /*How long to keep looking for fonts (in milliseconds).*/
        fontCheckTimeout?:number;
    }

    export interface IMatchFor {
        /*Whether to match the font size for the HTML-CSS output.*/
        "HTML-CSS"?:boolean;
        /*Whether to match the font size for the NativeMML output.*/
        NativeMML?:boolean;
        /*Whether to match the font size for the SVG output.*/
        SVG?:boolean;
    }

    export interface ISVGOutputProcessor {
        /*The scaling factor (as a percentage) of math with respect to the surrounding text. The SVG output processor
        * tries to match the ex-size of the mathematics with that of the text where it is placed, but you may want to
        * adjust the results using this scaling factor. The user can also adjust this value using the contextual menu
        * item associated with the typeset mathematics.
        */
        scale?:number;
        /*This gives a minimum scale (as a percent) for the scaling used by MathJax to match the equation to the
        * surrounding text. This will prevent MathJax from making the mathematics too small.
        */
        minScaleAdjust?:number;
        /*This is the font to use for rendering the mathematics. The possible values are TeX, STIX-Web, Asana-Math,
        * Neo-Euler, Gyre-Pagella, Gyre-Termes and Latin-Modern. Note that not all mathematical characters are available
        * in all fonts (e.g., Neo-Euler does not include italic characters), so some mathematics may work better in some
        * fonts than in others. The STIX-Web font is the most complete.
        */
        font?:string;
        /*This is the stroke width to use for all character paths (1em = 1000 units). This is a cheap way of getting
        * slightly lighter or darker characters, but remember that not all displays will act the same, so a value that
        * is good for you may not be good for everyone.
        */
        blacker?:number;
        /*This is the font-family CSS value used for characters that are not in the selected font (e.g., this is where
        * to look for characters not included in the MathJax TeX fonts). IE will stop looking after the first font that
        * exists on the system (even if it doesn’t contain the needed character), so order these carefully.
        */
        undefinedFamily?:string[];
        /*This setting controls whether <mtext> elements will be typeset using the math fonts or the font of the
        * surrounding text. When false, the font for mathvariant="normal" will be used; when true, the font will be
        * inherited from the surrounding paragraph.
        */
        mtextFontInherit?:boolean;
        /*This controls whether the MathML structure is retained and CSS classes are added to mark the original MathML
        * elements (as in the output from the HTML-CSS output jax). By default, the SVG output jax removes unneeded
        * nesting in order to produce a more efficient markup, but if you want to use CSS to style the elements as if
        * they were MathML, you might need to set this to true.
        */
        addMMLclasses?:boolean;
        /*EqnChunk is the number of equations that will be typeset before they appear on screen. Larger values make for
        * less visual flicker as the equations are drawn, but also mean longer delays before the reader sees anything.
        */
        EqnChunk?:number;
        /*EqChunkFactor is the factor by which the EqnChunk will grow after each chunk is displayed.*/
        EqnChunkFactor?:number;
        /*EqChunkDelay is the time (in milliseconds) to delay between chunks (to allow the browser to respond to other
        * user interaction).
        * Set EqnChunk to 1, EqnChunkFactor to 1, and EqnChunkDelay to 10 to get the behavior from MathJax v1.1 and
        * below.
        */
        EqnChunkDelay?:number;
        /*This option indicates whether MathJax should try to adjust the x-height of equations to match the x-height of
        * the surrounding text. See the MatchWebFonts options for finer control, especially if you are using Web fonts.
        */
        matchFontHeight?:boolean;
        /*This is an object that configures automatic linebreaking in the SVG output. In order to be backward compatible
        * with earlier versions of MathJax, only explicit line breaks are performed by default, so you must enable line
        * breaks if you want automatic ones.
        */
        linebreaks?:ILineBreaks;
        /*This is a list of CSS declarations for styling the SVG output. See the definitions in jax/output/SVG/config.js
         * for some examples of what are defined by default. See CSS Style Objects for details on how to specify CSS
         * style in a JavaScript object.
         */
        styles?:any;
        /*This sets the configuration options for <maction> elements with actiontype="tooltip". (See also the
        * #MathJax_Tooltip style setting in jax/output/SVG/config.js, which can be overridden using the styles option
        * above.)
        */
        tooltip?:IToolTip;
    }

    export interface ILineBreaks {
        /*This controls the automatic breaking of expressions: when false, only linebreak="newline" is processed; when
        * true, line breaks are inserted automatically in long expressions.
        */
        automatic?:boolean;
        /*This controls how wide the lines of mathematics can be.
        * Use an explicit width like "30em" for a fixed width. Use "container" to compute the size from the containing
        * element. Use "nn% container" for a portion of the container. Use "nn%" for a portion of the window size.
        * The container-based widths may be slower, and may not produce the expected results if the layout width changes
        * due to the removal of previews or inclusion of mathematics during typesetting.
        */
        width?:string;
    }

    export interface IToolTip {
        /*The delay (in milliseconds) before the tooltip is posted after the mouse is moved over the maction element.*/
        delayPost:number;
        /*The delay (in milliseconds) before the tooltop is cleared after the mouse moves out of the maction element.*/
        delayClear:number;
        /*The X offset from the mouse position (in pixels) where the tooltip will be placed.*/
        offsetX:number;
        /*The Y offset from the mouse position (in pixels) where the tooltip will be placed.*/
        offsetY:number;
    }

    export interface IMMLorHTMLConfiguration {
        /*This lets you set the preferred renderer on a browser-by-browser basis. You set the browser to either "MML" or
         * "HTML" depending on whether you want to use the NativeMML or HTML-CSS output processor. Note that although
         * Opera and Safari do process some MathML natively, their support is not sufficient to handle the more
         * complicated output generated by MathJax, so their settings are "HTML" by default. Although Firefox does
         * support a large subset of MathJax, it does not implement all the features needed by MathJax, and so it is
         * also set to "HTML" by default (this is new in v2.0).
         *
         * Note that users can still use the MathJax contextual menu to select a different renderer after the default
         * one has been chosen by MMLorHTML.js.
         */
        prefer?:IBrowserPreference;
    }

    export interface IBrowserPreference {
        MSIE?:string;
        Firefox?:string;
        Safari?:string;
        Chrome?:string;
        Opera?:string;
        other?:string;
    }

    export interface INativeMMLOutputProcessor {
        /*The scaling factor (as a percentage) of math with respect to the surrounding text. The NativeMML output
        * processor tries to match the ex-size of the mathematics with that of the text where it is placed, but you may
        * want to adjust the results using this scaling factor. The user can also adjust this value using the contextual
        * menu item associated with the typeset mathematics.
        */
        scale?:number;
        /*This gives a minimum scale (as a percent) for the scaling used by MathJax to match the equation to the
        * surrounding text. This will prevent MathJax from making the mathematics too small.
        */
        minScaleAdjust?:number;
        /*This option indicates whether MathJax should try to adjust the x-height of equations to match the x-height of
        * the surrounding text. See the MatchWebFonts options for finer control, especially if you are using Web fonts.
        */
        matchFontHeight?:boolean;
        /*This is a list of CSS declarations for styling the NativeMML output. See the definitions in
        * jax/output/NativeMML/config.js for some examples of what are defined by default. See CSS Style Objects for
        * details on how to specify CSS style in a JavaScript object.
        */
        styles?:any;
    }

    export interface IHTMLCSSOutputProcessor {
        /*The scaling factor (as a percentage) of math with respect to the surrounding text. The HTML-CSS output
        * processor tries to match the ex-size of the mathematics with that of the text where it is placed, but you may
        * want to adjust the results using this scaling factor. The user can also adjust this value using the contextual
        * menu item associated with the typeset mathematics.
        */
        scale?:number;
        /*This gives a minimum scale (as a percent) for the scaling used by MathJax to match the equation to the
        * surrounding text. This will prevent MathJax from making the mathematics too small.
        */
        minScaleAdjust?:number;
        /*This is a list of the fonts to look for on a user’s computer in preference to using MathJax’s web-based fonts.
        * These must correspond to directories available in the jax/output/HTML-CSS/fonts directory, where MathJax
        * stores data about the characters available in the fonts. Set this to ["TeX"], for example, to prevent the use
        * of the STIX fonts, or set it to an empty list, [], if you want to force MathJax to use web-based or image
        * fonts.
        */
        availableFonts?:string[];
        /*Which font to prefer out of the availableFonts list, when more than one is available on the user’s computer.
        * Set it to null if you want MathJax to use web-based or image fonts.
        */
        preferredFont?:string;
        /*This is the web-based font to use when none of the fonts listed above are available on the user’s computer. The
        * possible values are TeX, STIX-Web, Asana-Math, Neo-Euler, Gyre-Pagella, Gyre-Termes and Latin-Modern. Note
        * that not all mathematical characters are available in all fonts (e.g., Neo-Euler does not include italic
        * characters), so some mathematics may work better in some fonts than in others. The STIX-Web font is the most
        * complete.
        *
        * These fonts are stored in the fonts/HTML-CSS folder in the MathJax directory. Set this to null to disable web
        * fonts.
        */
        webFont?:string;
        /* This is the font to use for image fallback mode (when none of the fonts listed above are available and the
        * browser doesn’t support web-fonts via the @font-face CSS directive). Note that currently only the TeX font is
        * available as an image font (they are stored in the fonts/HTML-CSS directory).
        *
        * Set this to null if you want to prevent the use of image fonts (e.g., you have deleted or not installed the
        * image fonts on your server). In this case, only browsers that support web-based fonts will be able to view
        * your pages without having the fonts installed on the client computer. The browsers that support web-based
        * fonts include: IE6 and later, Chrome, Safari3.1 and above, Firefox3.5 and later, and Opera10 and later. Note
        * that Firefox3.0 is not on this list.
        */
        imageFont?:string;
        /*This is the font-family CSS value used for characters that are not in the selected font (e.g., for web-based
        * fonts, this is where to look for characters not included in the MathJax web fonts). IE will stop looking after
        * the first font that exists on the system (even if it doesn’t contain the needed character), so order these
        * carefully.
        */
        undefinedFamily?:string[];
        /*This setting controls whether <mtext> elements will be typeset using the math fonts or the font of the
        * surrounding text. When false, the font for mathvariant="normal" will be used; when true, the font will be
        * inherited from the surrounding paragraph.
        */
        mtextFontInherit?:boolean;
        /*EqnChunk is the number of equations that will be typeset before they appear on screen. Larger values make for
         * less visual flicker as the equations are drawn, but also mean longer delays before the reader sees anything.
         */
        EqnChunk?:number;
        /*EqChunkFactor is the factor by which the EqnChunk will grow after each chunk is displayed.*/
        EqnChunkFactor?:number;
        /*EqChunkDelay is the time (in milliseconds) to delay between chunks (to allow the browser to respond to other
         * user interaction).
         * Set EqnChunk to 1, EqnChunkFactor to 1, and EqnChunkDelay to 10 to get the behavior from MathJax v1.1 and
         * below.
         */
        EqnChunkDelay?:number;
        /*This option indicates whether MathJax should try to adjust the x-height of equations to match the x-height of
        * the surrounding text. See the MatchWebFonts options for finer control, especially if you are using Web fonts.
        */
        matchFontHeight?:boolean;
        /*This is an object that configures automatic linebreaking in the SVG output. In order to be backward compatible
         * with earlier versions of MathJax, only explicit line breaks are performed by default, so you must enable line
         * breaks if you want automatic ones.
         */
        linebreaks?:ILineBreaks;
        /*This is a list of CSS declarations for styling the SVG output. See the definitions in jax/output/SVG/config.js
         * for some examples of what are defined by default. See CSS Style Objects for details on how to specify CSS
         * style in a JavaScript object.
         */
        styles?:any;
        /*This value has been moved to the core configuration block, since it applies to all output jax, but it will
        * still be honored (for now) if it is set here. See the Core configuration options for more details.
        */
        showMathMenu?:boolean;
        /*This sets the configuration options for <maction> elements with actiontype="tooltip". (See also the
         * #MathJax_Tooltip style setting in jax/output/SVG/config.js, which can be overridden using the styles option
         * above.)
         */
        tooltip?:IToolTip;
    }

    export interface IAsciiMathInputProcessor {
        /*Determines whether operators like summation symbols will have their limits above and below the operators
        * (true) or to their right (false). The former is how they would appear in displayed equations that appear on
        * their own lines, while the latter is better suited to in-line equations so that they don’t interfere with the
        * line spacing so much.
        */
        displaystyle?:boolean;
        /*This is the character to be used for decimal points in numbers. if you change this to ",", then you need to be
         * careful about entering points or intervals. E.g., use (1, 2) rather than (1,2) in that case.
         */
        decimal?:string;
    }

    export interface IMathMLInputProcessor {
        /*Specifies whether to use TeX spacing or MathML spacing when the HTML-CSS output jax is used.*/
        useMathMLspacing?:boolean;
    }

    export interface ITeXInputProcessor {
        /*This specifies the side on which \tag{} macros will place the tags. Set it to "left" to place the tags on the
        * left-hand side.
        */
        TagSide?:string;
        /*This is the amount of indentation (from the right or left) for the tags produced by the \tag{} macro.*/
        TagIndent?:string;
        /*The width to use for the multline environment that is part of the AMSmath extension. This width gives room for
        * tags at either side of the equation, but if you are displaying mathematics in a small area or a thin column of
        * text, you might need to change the value to leave sufficient margin for tags.
        */
        MultLineWidth?:string;
        /*This object controls the automatic equation numbering and the equation referencing.*/
        equationNumbers?:IEquationNumbers;
        /*This lists macros to define before the TeX input processor begins. These are name:value pairs where the name
        * gives the name of the TeX macro to be defined, and value gives the replacement text for the macro. The value
        * can be an array of the form [value,n], where value is the replacement text and n is the number of parameters
        * for the macro. Note that since the value is a javascript string, backslashes in the replacement text must be
        * doubled to prevent them from acting as javascript escape characters.
        */
        Macros?:any;
        /*Because a definition of the form \def\x{\x} \x would cause MathJax to loop infinitely, the MAXMACROS constant
        * will limit the number of macro substitutions allowed in any expression processed by MathJax.
        */
        MAXMACROS?:number;
        /*Because a definition of the form \def\x{\x aaa} \x would loop infinitely, and at the same time stack up lots
        * of a’s in MathJax’s equation buffer, the MAXBUFFER constant is used to limit the size of the string being
        * processed by MathJax. It is set to 5KB, which should be sufficient for any reasonable equation.
        */
        MAXBUFFER?:number;
    }

    export interface IEquationNumbers {
        /*This controls whether equations are numbered and how. By default it is set to "none" to be compatible with
        * earlier versions of MathJax where auto-numbering was not performed (so pages will not change their
        * appearance). You can change this to "AMS" for equations numbered as the AMSmath package would do, or "all" to
        * get an equation number for every displayed equation.
        */
        autoNumber?:string;
        /*A function that tells MathJax what tag to use for equation number n. This could be used to have the equations
        * labeled by a sequence of symbols rather than numbers, or to use section and subsection numbers instead.
        */
        formatNumber?:(n:number)=>string;
        /*A function that tells MathJax how to format an equation number for displaying as a tag for an equation. This
        * is what appears in the margin of a tagged or numbered equation.*/
        formatTag?:(n:number)=>string;
        /*A function that tells MathJax what ID to use as an anchor for the equation (so that it can be used in URL
        * references).
        */
        formatID?:()=>string;
        /*A function that takes an equation ID and returns the URL to link to it.*/
        formatURL?:(id:string)=>string;
        /*This controls whether element ID’s use the \label name or the equation number. When true, use the label, when
        * false, use the equation number.
        */
        useLabelIds?:boolean;
    }

    export interface IJSMath2jaxPreprocessor {
        /*This controls whether jsMath2jax inserts MathJax_Preview spans to make a preview available, and what preview
        * to use, when it locates in-line or display mathematics in the page. The default is "TeX", which means use the
        * TeX code as the preview (which will be visible until it is processed by MathJax). Set to "none" to prevent
        * previews from being inserted (the math will simply disappear until it is typeset). Set to an array containing
        * the description of an HTML snippet in order to use the same preview for all equations on the page.
        */
        preview:any;
    }

    export interface IAsciimath2jaxPreprocessor {
        /*Array of pairs of strings that are to be used as math delimiters. The first in each pair is the initial
        * delimiter and the second is the terminal delimiter. You can have as many pairs as you want. For example,
        *
        * delimiters: [ ['$','$'], ['`','`'] ]
        * would cause asciimath2jax to look for $...$ and `...` as delimiters for inline mathematics. (Note that the
        * single dollar signs are not enabled by default because they are used too frequently in normal text, so if you
        * want to use them for math delimiters, you must specify them explicitly.)
        *
        * Note that the delimiters can’t look like HTML tags (i.e., can’t include the less-than sign), as these would be
        * turned into tags by the browser before MathJax has the chance to run. You can only include text, not tags,
        * as your math delimiters.
        */
        delimiters?:any;
        /*This controls whether asciimath2jax inserts MathJax_Preview spans to make a preview available, and what
        * preview to use, when it locates in-line or display mathematics in the page. The default is "AsciiMath", which
        * means use the ASCIIMath code as the preview (which will be visible until it is processed by MathJax). Set to
        * "none" to prevent previews from being inserted (the math will simply disappear until it is typeset). Set to
        * an array containing the description of an HTML snippet in order to use the same preview for all equations
        * on the page.
        *
        * Examples:
        *
        * preview: ["[math]"],     //  insert the text "[math]" as the preview
        * preview: [["img",{src: "/images/mypic.jpg"}]],  // insert an image as the preview
        */
        preview?:any;
        /*This array lists the names of the tags whose contents should not be processed by asciimath2jax (other than to
        * look for ignore/process classes as listed below). You can add to (or remove from) this list to prevent MathJax
        * from processing mathematics in specific contexts.
        */
        skipTags?:string[];
        /*This is the class name used to mark elements whose contents should not be processed by asciimath2jax (other
        * than to look for the processClass pattern below). Note that this is a regular expression, and so you need to
        * be sure to quote any regexp special characters. The pattern is inserted into one that requires your pattern to
        * match a complete word, so setting ignoreClass: "class2" would cause it to match an element with class="class1
        * class2 class3" but not class="myclass2". Note that you can assign several classes by separating them by the
        * vertical line character (|). For instance, with ignoreClass: "class1|class2" any element assigned a class of
        * either class1 or class2 will be skipped.
        */
        ignoreClass?:string;
        /*This is the class name used to mark elements whose contents should be processed by asciimath2jax. This is used
        * to restart processing within tags that have been marked as ignored via the ignoreClass or to cause a tag that
        * appears in the skipTags list to be processed rather than skipped. Note that this is a regular expression, and
        * so you need to be sure to quote any regexp special characters. The pattern is inserted into one that requires
        * your pattern to match a complete word, so setting processClass: "class2" would cause it to match an element
        * with class="class1 class2 class3" but not class="myclass2". Note that you can assign several classes by
        * separating them by the vertical line character (|). For instance, with processClass: "class1|class2" any
        * element assigned a class of either class1 or class2 will have its contents processed.
        */
        processClass?:string;
    }

    export interface IMML2jaxPreprocessor {
        /*This controls whether mml2jax inserts MathJax_Preview spans to make a preview available, and what preview to
        * use, when it locates mathematics on the page. Possible values are: "mathml", "alttext", , "altimg", "none",
        * or an HTML snippet.
        *
        * The default is "mathml", in which case MathJax keeps the content of the <math> tag as the preview (until it is
        * processed by MathJax). Set to "alttext", to use the <math> tag’s alttext attribute as the preview, if the tag
        * has one. Set to "altimg" to use an image described by the altimg* attributes of the <math> element. Set to
        * "none" to prevent the previews from being inserted (the math will simply disappear until it is typeset). Set
        * to an array containing the description of an HTML snippet in order to use the same preview for all equations
        * on the page (e.g., you could have it say "[math]" or load an image).
        *
        * Examples:
        *
        * preview: ["[math]"],     //  insert the text "[math]" as the preview
        * preview: [["img",{src: "/images/mypic.jpg"}]],  // insert an image as the preview
        */
        preview?:any;
    }

    export interface ITEX2jaxPreprocessor {
        /*Array of pairs of strings that are to be used as in-line math delimiters. The first in each pair is the
        * initial delimiter and the second is the terminal delimiter. You can have as many pairs as you want. For
        * example,
        *
        * inlineMath: [ ['$','$'], ['\\(','\\)'] ]
        * would cause tex2jax to look for $...$ and \(...\) as delimiters for inline mathematics. (Note that the single
        * dollar signs are not enabled by default because they are used too frequently in normal text, so if you want to
        * use them for math delimiters, you must specify them explicitly.)
        *
        * Note that the delimiters can’t look like HTML tags (i.e., can’t include the less-than sign), as these would be
        * turned into tags by the browser before MathJax has the chance to run. You can only include text, not tags, as
        * your math delimiters.
        */
        inlineMath?:any;
        /*Array of pairs of strings that are to be used as delimiters for displayed equations. The first in each pair is
        * the initial delimiter and the second is the terminal delimiter. You can have as many pairs as you want.
        *
        * Note that the delimiters can’t look like HTML tags (i.e., can’t include the less-than sign), as these would be
        * turned into tags by the browser before MathJax has the chance to run. You can only include text, not tags, as
        * your math delimiters.
        */
        displayMath?:any;
        /*This value determines whether tex2jax requires braces to be balanced within math delimiters (which allows for
        * nested dollar signs). Set to false to get pre-v2.0 compatibility. When true,
        *
        * $y = x^2 \hbox{ when $x > 2$}$.
        * will be properly handled as a single expression. When false, it would be interpreted as two searpate
        * expressions, each with improperly balanced braces.
        */
        balanceBraces?:boolean;
        /*When set to true, you may use \$ to represent a literal dollar sign, rather than using it as a math delimiter.
        * When false, \$ will not be altered, and the dollar sign may be considered part of a math delimiter. Typically
        * this is set to true if you enable the $ ... $ in-line delimiters, so you can type \$ and tex2jax will convert
        * it to a regular dollar sign in the rendered document.
        */
        processEscapes?:boolean;
        /*When true, tex2jax looks not only for the in-line and display math delimiters, but also for LaTeX environments
        * (\begin{something}...\end{something}) and marks them for processing by MathJax. When false, LaTeX environments
        * will not be processed outside of math mode.
        */
        processEnvironments?:boolean;
        /*This controls whether tex2jax inserts MathJax_Preview spans to make a preview available, and what preview to
        * use, when it locates in-line or display mathematics in the page. The default is "TeX", which means use the TeX
        * code as the preview (which will be visible until it is processed by MathJax). Set to "none" to prevent
        * previews from being inserted (the math will simply disappear until it is typeset). Set to an array containing
        * the description of an HTML snippet in order to use the same preview for all equations on the page.
        *
        * Examples:
        *
        * preview: ["[math]"],     //  insert the text "[math]" as the preview
        * preview: [["img",{src: "/images/mypic.jpg"}]],  // insert an image as the preview
        */
        preview?:any;
        /*This array lists the names of the tags whose contents should not be processed by tex2jax (other than to look
        * for ignore/process classes as listed below). You can add to (or remove from) this list to prevent MathJax from
        * processing mathematics in specific contexts.
        */
        skipTags?:string[];
        /*This is the class name used to mark elements whose contents should not be processed by tex2jax (other than to
        * look for the processClass pattern below). Note that this is a regular expression, and so you need to be sure
        * to quote any regexp special characters. The pattern is inserted into one that requires your pattern to match
        * a complete word, so setting ignoreClass: "class2" would cause it to match an element with class="class1 class2
        * class3" but not class="myclass2". Note that you can assign several classes by separating them by the vertical
        * line character (|). For instance, with ignoreClass: "class1|class2" any element assigned a class of either
        * class1 or class2 will be skipped.
        */
        ignoreClass?:string;
        /*This is the class name used to mark elements whose contents should be processed by tex2jax. This is used to
        * restart processing within tags that have been marked as ignored via the ignoreClass or to cause a tag that
        * appears in the skipTags list to be processed rather than skipped. Note that this is a regular expression, and
        * so you need to be sure to quote any regexp special characters. The pattern is inserted into one that requires
        * your pattern to match a complete word, so setting processClass: "class2" would cause it to match an element
        * with class="class1 class2 class3" but not class="myclass2". Note that you can assign several classes by
        * separating them by the vertical line character (|). For instance, with processClass: "class1|class2" any
        * element assigned a class of either class1 or class2 will have its contents processed.*/
        processClass?:string;
    }

    export interface ILocalization {
        /*The currently selected locale, e.g., "fr". This is set by the setLocale() method, and should not be modified
        * by hand.
        */
        locale:string;
        /*The URL for the localization data files. This can be overridden for individual languages or domains
        * (see below). The default is [MathJax]/localization.
        */
        directory:string;
        /*This is the main data structure that holds the translation strings. It consists of an entry for each language
        * that MathJax knows about, e.g., there would be an entry with key fr whose value is the data for the French
        * translation. Initially, these simply reference the files that define the translation data, which MathJax will
        * load when needed. After the file is loaded, they will contain the translation data as well. This is described
        * in more detail below.
        */
        strings:any;
        /*The function (described in detail above) that returns the translated string for a given id, substituting the
        * given arguments as needed.
        */
        _(id:number, message:string, ...args:any[]):void;
        /*Sets the selected locale to the given one*/
        setLocale(locale:string):void;
        /*Defines (or adds to) the translation data for the given locale and domain. The def is the definition to be
        * merged with the current translation data (if it exists) or to be used as the complete definition (if not).
        */
        addTranslation(locale:string, domain:string, def:any):void;
        /*Sets the CSS for the given div to reflect the needs of the locale. In particular, it sets the font-family,
        * if needed, and the direction (for right-to-left languages).
        */
        setCSS(div:any):any;
        /*Get the font-family needed to display text in the selected language. Returns null if no special font is
        * required.
        */
        fontFamily():string;
        /*Get the direction needed to display text in the selected language. Returns null if no special font is
        * required.*/
        fontDirection():string;
        /*The method that returns the index into the list of plural texts for the value n. See the [CLDR rules]
        * (http://unicode.org/cldr/charts/supplemental/language_plural_rules.html) for more information. This calls the
        * locale’s plural() method, if there is one, otherwise it defaults to the English version.
        */
        plural(value:any):number;
        /*The method that returns the localized version of the number n. This calls the locale’s number() method, if
        * there is one, otherwise it defaults to the English version.
        */
        number(value:number):string;
        /*This causes MathJax to load the data file for the given domain in the current language, and calls the callback
        * when that is complete. If the domain is already loaded, the callback is called immediately. This lets you
        * synchronize actions that require localization with the loading of the needed data so that you are sure that
        * the needed translations are available. See the section on synchonization above for details.
        */
        loadDomain(domain:string):ICallbackObject;
        loadDomain(domain:string, callback:ICallbackObject):ICallbackObject;
        /*This method runs the function fn with error trapping and if an asynchronous file load is performed (for loading
        * localizaton data), reruns the function again after the file loads. This lets you synchronize actions that
        * require localization with the loading of the needed data (see the section on synchronization above for
        * details). Note that the function should be one that can be run multiple times, if needed. Also note that Try()
        * can return before the fn has been completed, so you should consider fn to be running asynchronously (you can
        * use callbacks to synchronize with other actions, if needed).
        */
        Try(spec:any):void;
    }

    export interface IInputJax {
        /*The name of the jax.*/
        id:string;
        /*The version number of the jax.*/
        version:string;
        /*The directory where the jax files are stored (e.g., "[MathJax]/jax/input/TeX").*/
        directory:string;
        /*The name of the ElementJax class that this input jax will produce (typically mml, as that is the only
        * ElementJax at the moment).
        */
        elementJax:string;
        /*This is the method that the MathJax.Hub calls when it needs the input jax to process the given math <script>.
        * Its default action is to do the following:
        *
        * Start loading any element jax specified in the elementJax array;
        * Start loading the jax’s jax.js file;
        * Start loading the required output jax (so it is ready when needed); and
        * Redefine itself to simply return the callback for the load operation (so that further calls to it will cause
        * the processing to wait for the callback).
        * Once the jax.js file has loaded, this method is replaced by the jax’s Translate() method (see below), so that
        * subsequent calls to Process() will perform the appropriate translation.
        */
        Process(script:any, state:any):any;
        /*This is the main routine called by MathJax when a <script> of the appropriate type is found. The default
        * Translate() method throws an error indicating that Translate() hasn’t been defined, so when the jax.js file
        * loads, it should override the default Translate() with its own version that does the actual translation.
        *
        * The translation process should include the creation of an Element Jax that stores the data needed for this
        * element.
        */
        Translate(script:any, state:any):IElementJax;
        /*This registers the MIME-type associated with this input jax so that MathJax knows to call this input jax when
        * it sees a <script> of that type. An input jax can register more than one type, but it will be responsible for
        * distinguishing elements of the various types from one another.
        */
        Register(mimetype:string):void;
        /*This implements the element jax’s needsUpdate() method, and returns true if the jax needs to be rerendered
        * (i.e., the text has changed), and false otherwise.
        */
        needsUpdate(element:any):boolean;
    }

    export interface IOutputJax {
        /*The name of the jax.*/
        id:string;
        /*The version number of the jax.*/
        version:string;
        /*The directory where the jax files are stored (e.g., "[MathJax]/jax/output/HTML-CSS");*/
        directory:string;
        /*The directory where the fonts are stored (e.g., "[MathJax]/fonts")*/
        fontDir:string;
        /*The directory where MathJax images are found (e.g. "[MathJax]/images")*/
        imageDir:string;
        /*This is called by MathJax.Hub to ask the output processor to prepare to process math scripts. Its default
        * action is to start loading the jax’s jax.js file, and redefine itself to simply return the callback for the
        * load operation (so that further calls to it will cause the processing to wait for the callback).
        *
        * Once the jax.js file has loaded, this method is replaced by the jax’s preTranslate() method, so that subsequent
        * calls to preProcess() will perform the appropriate translation.
        */
        preProcess(state:any):void;
        /*This routine replaces preProcess() above when the jax’s jax.js file is loaded. It is called by MathJax.Hub to
        * ask the output processor to prepare to process math scripts. (For example, the HTML-CSS output jax uses this
        * to determine em-sizes for all the mathematics at once, to minimize page reflows that slow down Internet
        * Explorer.)
        *
        * The routine can use state.jax[this.id] to obtain the array of element jax that are to be processed. The output
        * jax can use the state variable to maintain its own state information, but any properties that it adds to the
        * variable should have a prefix that is the output jax’s ID. For example, the HTML-CSS output jax might use
        * state.HTMLCSSlast to keep track of the last equation it processed, or could add state.HTMLCSS = {...} to
        * create an object of its own within the state variable.
        */
        preTranslate(state:any):void;
        /*This is the main routine called by MathJax when an element jax is to be converted to output. The default
        * Translate() method throws an error indicating that Translate() hasn’t been defined, so when the jax.js file
        * loads, it should override the default Translate() with its own version that does the actual translation.
        *
        * You should use MathJax.Hub.getJaxFor(script) to obtain the element jax for the given script. The translation
        * process may modify the element jax (e.g., if it has data that needs to be stored with the jax), and may insert
        * DOM elements into the document near the jax’s <script> tag. The output jax can use the state variable to
        * maintain information about its processing state, but see preTranslate() above for naming conventions for
        * properties that are added.
        */
        Translate(script:any, state:any):IElementJax;
        /*This routines is called by MathJax.Hub when the translation of math elements is complete, and can be used by
        * the output processor to finalize any actions that it needs to complete. (For example, making the mathematics
        * visible, or forcing a reflow of the page.)
        *
        * The routine can use state.jax[this.id] to obtain the array of element jax that were processed, or can use the
        * state variable to store its own state information (see preProcess() above for caveats about naming
        * properties).
        */
        postTranslate(state:any):void;
        /*This registers the MIME-type for the element jax associated with this output jax so that MathJax knows to call
        * this jax when it wants to display an element jax of that type. Several output jax may register for the same
        * input jax, in which case the first one to register will be the default one for that type.
        */
        Register(mimetype:string):void;
        /*Removes the output associated with the given element jax. The routine can use jax.SourceElement() to locate
        * the <script> tag associated with the element jax.
        */
        Remove(jax:any):void;
        /*This is called by the event-handling code (MathEvents) to get the element jax associated with the DOM element
        * that caused an event to occur. The output jax will have attached event handlers to some DOM element that is
        * part of its output, and the MathEvents code uses this routine to map back to the jax associated with that
        * output.
        */
        getJaxFromMath(math:any):IElementJax;
        Zoom(jax:any, span:any, math:any, Mw:number, Mh:number):IZoomStruct;
    }


    export interface IZoomStruct {
        /*The vertical offset from the top of the span to the baseline of the mathematics*/
        Y:number;
        /*The width of the original mathematics element*/
        mW:number;
        /*The height of the original mathematics element*/
        mH:number;
        /*The width of the zoomed math*/
        zW:number;
        /*The height of the zoomed math*/
        zH:number;
    }

    export interface IElementJax {
        /*The name of the jax.*/
        id:string;
        /*The version number of the jax.*/
        version:string;
        /*The directory where the jax files are stored (e.g., "[MathJax]/jax/element/mml").*/
        directory:string;
        /*The name of the input jax that created the element.*/
        inputJax:string;
        /*The name of the output jax that has processed this element.*/
        outputJax:string;
        /*The DOM id of the <script> tag that generated this element (if it doesn’t have one initially, the MathJax hub
        * will supply one). Note that this is not a reference to the element itself; that element will have a reference
        * to this element jax, and if inputID were a reference back, that would cause a reference loop, which some
        * browsers would not free properly during trash collection, thus causing a memory leak.
        */
        inputID:string;
        /*A string indicating the original input text that was processed for this element. (In the future, this may be
        * managed by the input jax rather than MathJax.Hub.)
        */
        originalText:string;
        /*The MIME-type of the element jax (jax/mml in the case of an mml element jax).*/
        mimeType:string;
        /*Sets the input text for this element to the given text and reprocesses the mathematics. (I.e., updates the
        * equation to the new one given by text). When the processing is complete, the callback, if any, is called.
        */
        Text(text:string):ICallbackObject;
        Text(text:string, callback:any):ICallbackObject;
        /*Removes the output and produces it again (for example, if CSS has changed that would alter the spacing of the
        * mathematics). Note that the internal representation isn’t regenerated; only the output is. The callback, if
        * any, is called when the process completes.
        */
        Rerender(callback:any):ICallbackObject;
        /*Removes the output and then retranslates the input into the internal form and reredners the output again. The
        * callback, if any, is called when the process completes.
        */
        Reprocess(callback:any):ICallbackObject;
        /*Removes the output for this element from the web page (but does not remove the original <script>). The
        * <script> will be considered unprocessed, and the next call to MathJax.hub.Typeset() will re-display it.
        */
        Remove():void;
        /*Returns a reference to the original <script> DOM element associated to this element jax.*/
        SourceElement():any;
        /*Indicates whether the mathematics has changed so that its output needs to be updated.*/
        needsUpdate():boolean;
    }
}
