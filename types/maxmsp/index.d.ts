/*
 * Max globals
 * https://docs.cycling74.com/max7/vignettes/jsglobal
 */
declare var inspector: number;
declare var inlets: number;
declare var outlets: number;
declare var autowatch: number;
declare var jsarguments: any[];
declare var arguments: IArguments;
declare var box: Maxobj;
declare var editfontsize: number;
declare var inlet: number;
declare var max: Max;
declare var maxclass: string;
declare var messagename: string;
declare var patcher: Patcher;
declare function error(...messages: any[]): void;
declare function cpost(...message: any[]): void;
declare function post(...message: any[]): void;
/**
 * Sends a message to the named Max object.
 * A named Max object is an object associated with a global symbol (not an object with a patcher-specific name).
 * For example, Max receive objects are bound to global symbols.
 * The following code would send the message bang to the named object flower.
 */
declare function messnamed(object_name: string, message_name: string, ...message_arguments: any[]): void;
declare function arrayfromargs(arguments: IArguments): any[];
declare function assist(arguments: any): void;
declare function declareattribute(
    attribute_name: string,
    getter_name?: string,
    setter_name?: string,
    embed?: number,
): void;
declare function embedmessage(method_name: string, ...arguments: any[]): void;
declare function notifyclients(): void;
declare function outlet(outlet_number: number, ...arguments: any[]): void;
declare function setinletassist(inlet_number: number, object: any): void;
declare function setoutletassist(outlet_number: number, object: any): void;

type Range = [number, number];
type Color = [number, number, number, number];
type Rect = [number, number, number, number];
type Position = [number, number];
type Size = [number, number];

type MaxMessage =
    | "buildcollective"
    | "checkpreempt"
    | "clean"
    | "clearmaxwindow"
    | "closefile"
    | "crash"
    | "db.exportmetadata"
    | "db.importmetadata"
    | "db.reset"
    | "debug"
    | "disablevirtualmididestinations"
    | "disablevirtualmidisources"
    | "enablepathcache"
    | "externaleditor"
    | "externs"
    | "fileformat"
    | "fixwidthratio"
    | "getarch"
    | "getdefaultpatcherheight"
    | "getdefaultpatcherwidth"
    | "getenablepathcache"
    | "geteventinterval"
    | "getfixwidthratio"
    | "getpollthrottle"
    | "getqueuethrottle"
    | "getrefreshrate"
    | "getruntime"
    | "getslop"
    | "getsysqelemthrottle"
    | "getsystem"
    | "getversion"
    | "hidecursor"
    | "hidemenubar"
    | "htmlref"
    | "interval"
    | "launchbrowser"
    | "maxcharheightforsubpixelantialiasing"
    | "maxinwmenu"
    | "maxwindow"
    | "midilist"
    | "nativetextrendering"
    | "notypeinfo"
    | "objectfile"
    | "openfile"
    | "paths"
    | "preempt"
    | "pupdate"
    | "purgemididevices"
    | "quit"
    | "refresh"
    | "refreshrate"
    | "relaunchmax"
    | "runtime"
    | "sendinterval"
    | "sendapppath"
    | "setdefaultpatcherheight"
    | "setdefaultpatcherwidth"
    | "seteventinterval"
    | "setmixergbitmode"
    | "setmixerlatency"
    | "setmixerparallel"
    | "setmixerramptime"
    | "setmirrortoconsole"
    | "setsleep"
    | "setpollthrottle"
    | "setqueuethrottle"
    | "setslop"
    | "setsysqelemthrottle"
    | "showcursor"
    | "showmenubar"
    | "size"
    | "system"
    | "useexternaleditor"
    | "useslowbutcompletesearching"
    | string;

/**
 * The Buffer object in JavaScript is a companion to the buffer~ object you instantiate in Max patchers,
 * and provides the ability to access samples and metadata for the buffer~ object with the associated name.
 * https://docs.cycling74.com/max7/vignettes/jsbuffer
 */
declare class Buffer {
    /**
     * [constructor description]
     * The name is required at the time the object is created.
     */
    constructor(name: string);

    /**
     * Return the number of channels in the buffer~ object.
     */
    channelcount: number;

    /**
     * Return the number of frames (samples in a single channel) in the buffer~ object.
     */
    framecount: number;

    /**
     * Return the length of the buffer~ object in milliseconds.
     */
    length: number;

    /**
     * Return an array with count samples from channel (1-based counting) starting at frame (zero-based counting).
     */
    peek(channel: number, frame: number, count: number): number[];

    /**
     * Write into the buffer~ object at channel (1-based counting) and frame (0-based counting).
     * Samples may be a single sample value or an array of sample values.
     * It is computationally more efficient to use an array.
     */
    poke(channel: number, frame: number, samples: number | number[]): void;

    /**
     * Send a message to the associated buffer~ object. Can send any message that buffer~ understands.
     */
    send(message_name: string, ...message_arguments: any[]): void;
}

/**
 * The Dict object in JS is a companion to the dict object you create in a Max patcher. It provides the ability to access structured data (a dictionary) associated with a name.
 * Example code can be found in the "js" tab of the dict help patcher.
 * https://docs.cycling74.com/max7/vignettes/jsdict
 */
declare class Dict {
    /**
     * If no name is provided as an argument then a unique name will be generated for the dictionary.
     * The following properties mirror the attributes of the same name from the Max dict object. See the dict reference for more details.
     */
    constructor(name?: string);

    /**
     * Access or set the name of a dict object as a property of the dict object
     */
    name: string;

    /**
     * The quiet property functions the same as the @quiet attribute to dict in Max. It suppresses many errors or warnings if set to true.
     */
    quiet: boolean;

    /**
     * Add values to the end of an array associated with the specified key.
     */
    append(key: string, value: any[]): void;

    /**
     * Erase the contents of the dictionary, restoring to a clean state
     */
    clear(): void;

    /**
     * Make a clone of the incoming dictionary.
     */
    clone(name: string): void;

    /**
     * Return a 0 or 1 indicating the specified key exists (or doesn't) in the dictionary.
     */
    contains(key: string): number;

    /**
     * Return the value associated with a key.
     */
    get(key: string): any;

    /**
     * Return a list of all the keys in a dictionary.
     */
    getkeys(): any[];

    /**
     * Return a list of all the dictionaries that currently exist.
     */
    getnames(): string[];

    /**
     * Return the number of values associated with a key.
     */
    getsize(): number;

    /**
     * Return the type of the values associated with a key.
     */
    gettype(): string;

    /**
     * Replace the content of a dictionary.
     */
    parse(key: string, value: string): void;

    /**
     * Pull the content of a named coll object into the dictionary.
     */
    pull_from_coll(coll_name: string): void;

    /**
     * Push the dictionary's content into a named coll object. The keys in the dictionary will become the indices in the coll, and the values for those indices the values of the dictionary's keys.
     */
    push_to_coll(coll_name: string): void;

    /**
     * Read the dictionary contents from a file.
     */
    readany(filename: string): void;

    /**
     * Remove a key and its associated value from the dictionary.
     */
    remove(key: string): void;

    /**
     * Set the value for a key to a specified value, creating heirarchy.
     */
    replace(key: string, value: any[]): void;

    /**
     * Set the value for a key to a specified value.
     */
    set(key: string, value: any[]): void;

    /**
     * Set the value for a key to dictionary content defined using JSON.
     */
    setparse(key: string, value: any[]): void;

    /**
     * Open a save dialog to write the dictionary contents to a file.
     */
    writeagain(): void;

    /**
     * Return the content of the dictionary as a JSON string.
     */
    stringify(): string;

    /**
     * Read a file from disk in the JSON format.
     */
    import_json(filename: string): void;

    /**
     * Write a file to disk in the JSON format.
     */
    export_json(filename: string): void;

    /**
     * Read a file from disk in the YAML format.
     */
    import_yaml(filename: string): void;

    /**
     * Write a file to disk in the YAML format.
     */
    export_yaml(filename: string): void;
}

/**
 * The File object provides a means of reading and writing files from Javascript.
 * https://docs.cycling74.com/max7/vignettes/jsfileobject
 */
declare class File {
    /**
     * filename can be a file in the Max search path, an absolute path, or a relative path. Acceptable values for access can be "read", "write", or "readwrite".
     * The default value for access is "read". Acceptable values for typelist are four character filetype codes listed in the file max-fileformats.txt,
     * which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. By default, typelist is empty.
     * If able to, the File constructor opens the file specified by filename, provided it is one of the types in typelist.
     */
    constructor(filename: string, access?: "read" | "write" | "readwrite", typelist?: string);

    /**
     * File access permissions: "read", "write", or "readwrite". By default, this value is "read".
     */
    access: string;

    /**
     * The assumed file byteorder (endianness): "big", "little", or "native". By default, this value is "native".
     */
    byteorder: string;

    /**
     * The location of the end of file, in bytes.
     */
    eof: number;

    /**
     * The current filename.
     */
    filename: string;

    /**
     * The four-character code associated. See Filetypes Recognized in Max for possible values.
     * (In Max 7 documentation, Filetypes link points to the wrong page. This has been reported.)
     */
    filetype: string;

    /**
     * The absolute path to parent folder.
     */
    foldername: string;

    /**
     * Return a true/false indicating if the File constructor is successful in finding and opening the file.
     */
    isopen: boolean;

    /**
     * The line break convention to use when writing lines: "dos", "mac", "unix", or "native". By default, this value is "native".
     */
    linebreak: string;

    /**
     * The current file position, in bytes.
     */
    position: number;

    /**
     * An array file type codes to filter by when opening a file. By default, this is the empty array.
     */
    typelist: string[];

    /**
     * Opens the file specified by the filename argument. If no argument is specified, it will open the last opened file.
     */
    open(filename?: string): void;

    /**
     * Closes the currently open file.
     */
    close(): void; // TODO: Docs say string [symbol] ???

    /**
     * Writes the characters contained in the string argument as characters to the file, starting at the current file position,
     * and inserts a line break appropriate to the linebreak property. The file position is updated accordingly.
     */
    writeline(characters: string): void;

    /**
     * Reads and returns a string containing up to maximum_count characters or up to the first line break as read from the file,
     *  starting at the current file position. The file position is updated accordingly.
     */
    readline(maximum_count?: number): string;

    /**
     * Writes the characters contained in the string argument as characters to the file, starting at the current file position.
     * Unlike writeline(), no line break is inserted. The file position is updated accordingly.
     */
    writestring(characters: string): void;

    /**
     * Reads and returns a string containing up to char_count characters as read from the file, starting at the current file position.
     * Unlike readline(), line breaks are not considered. The file position is updated accordingly.
     */
    readstring(char_count: number): string;

    /**
     * Writes the numbers contained in the byte_array argument as bytes to the file, starting at the current file position.
     * The file position is updated accordingly.
     */
    writebytes(byte_array: number[]): void;

    /**
     * Reads and returns an array containing up to byte_count numbers, read as bytes from the file, starting at the current file position.
     * The file position is updated accordingly.
     */
    readbytes(byte_count: number): number[];

    /**
     * Writes the single character strings contained in the char_array argument as characters to the file, starting at the current file position.
     * The file position is updated accordingly.
     */
    writechars(char_array: string[]): void;

    /**
     * Reads and returns an array containing the single character strings, read as characters from the file, starting at the current file position.
     * The file position is updated accordingly.
     */
    readchars(char_count: number): string[];

    /**
     * Writes the numbers contained in the int16_array argument as signed 16-bit integers to the file, starting at the current file position.
     * The byteorder property is taken into account when writing these values. The file position is updated accordingly.
     */
    writeint16(int16_array: number[]): void;

    /**
     * Reads and returns an array containing the numbers read as signed 16-bit integers from the file starting at the current file position.
     * The byteorder property is taken into account when reading these values. The file position is updated accordingly.
     */
    readint16(int16_count: number): number[];

    /**
     * Writes the numbers contained in the int32_array argument as signed 32-bit integers to the file, starting at the current file position.
     * The byteorder property is taken into account when writing these values. The file position is updated accordingly.
     */
    writeint32(int32_array: number[]): void;

    /**
     * Reads and returns an array containing the numbers read as signed 32-bit integers from the file starting at the current file position.
     * The byteorder property is taken into account when reading these values. The file position is updated accordingly.
     */
    readint32(int32_count: number): number[];

    /**
     * Writes the numbers contained in the float32_array argument as 32-bit floating point numbers to the file, starting at the current file position.
     * The byteorder property is taken into account when writing these values. The file position is updated accordingly.
     */
    writefloat32(int32_array: number[]): void;

    /**
     * Reads and returns an array containing the numbers read as 32-bit floating point numbers from the file starting at the current file position.
     * The byteorder property is taken into account when reading these values. The file position is updated accordingly.
     */
    readfloat32(float32_count: number): number[];

    /**
     * Writes the numbers contained in the float64_array argument as 64-bit floating point numbers to the file, starting at the current file position.
     * The byteorder property is taken into account when writing these values. The file position is updated accordingly.
     */
    writefloat64(int64_array: number[]): void;

    /**
     * Reads and returns an array containing the numbers read as 64-bit floating point numbers from the file starting at the current file position.
     * The byteorder property is taken into account when reading these values. The file position is updated accordingly.
     */
    readfloat64(float64_count: number): number[];
}

/**
 * The Folder object is a js “external object” defined in the Max object called jsfolder. It is used to iterate through files in a folder.
 * https://docs.cycling74.com/max7/vignettes/jsfolderobject
 */
declare class Folder {
    /**
     * pathname can either be the name of a folder in the search path or a complete pathname using Max path syntax.
     */
    constructor(pathname: string);

    /**
     * Non-zero (true) if there are no more files to examine in the folder, or if the pathname argument to the Folder object didn’t find a folder.
     */
    end: boolean;

    /**
     * The total number of files of the specified type(s) contained in the folder.
     */
    count: number;

    /**
     * The full pathname of the folder
     */
    pathname: string;

    /**
     * The list of file types that will be used to find files in the folder. To search for all files (the default), set the typelist property to an empty array.
     */
    typelist: string[];

    /**
     * The name of the current file.
     */
    filename: string;

    /**
     * An array containing the values year, month, day, hour, minute, and second with the last modified date of the current file.
     * These values can be used to create a Javascript Date object.
     */
    moddate: number[];

    /**
     * The four-character code associated with the current file's filetype. These codes are listed in the file max-fileformats.txt,
     * which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows.
     * If there is no mapping for the file's extension, a nil value is returned.
     */
    filetype: string;

    /**
     * The extension of the current file's name, including the period. If there are no characters after the period, a nil value is returned.
     */
    extension: string;

    /**
     * [reset description]
     * Documentation is faulty, this has been reported.
     */
    reset(): void;

    /**
     * Start iterating at the beginning of the list of files. Re-opens the folder if it was previously closed with the close() function.
     */
    append(): void;

    /**
     * Moves to the next file.
     */
    next(): void;

    /**
     * Closes the folder. To start using it again, call the reset() function.
     */
    close(): void;
}

/**
 * The Global object is a fairly generic Javascript object that allows you to share data among js instances by adding and accessing properties. You can also access Global object properties from Max
 * messages completely outside of js. Executing methods stored in Global objects from Max is not supported. However, methods are certainly among the kinds of things you can store within a Global
 * object. A Global is basically a reference to a Javascript object that you can't access directly. The object is connected to the Max symbol with the name you supplied as an argument (this allows it
 * to be accessed from Max). Every time you access a Global, it hands off the access to the secret hidden Javascript object. This means you can create any number of Global objects in your code, in any
 * number of js instances, and if they all have the same name, they will all share the same data. In this way, a Global resembles a namespace. https://docs.cycling74.com/max7/vignettes/jsglobalobject
 */
declare class Global {
    /**
     * name represents a String that uniquely identifies the Global.
     */
    constructor(name: string);

    /**
     * Sends the value of the named property property_name to the named Max receive object (or other Max object) bound to the specified receive_name symbol.
     * TODO: Can have any property assigned to it
     */
    sendnamed(receive_name: string, property_name: string): void;

    /*
     * Global is used to set user defined properties that can't be known beforehand, casting
     * a Globals instance as any to work with it defeats the whole purpose of using TS.
     * This indexed access type will make sure you put the right checks in place before
     * things go sideways, one can always cast to any if this becomes too annoying.
     */
    [index: string | number | symbol]: unknown;
}

/**
 * The LiveAPI object provides a means of communicating with the Live API functions from JavaScript. For background information on this functionality, please see the Live API Overview and Live Object
 * Model documents, as well as the Reference pages for live.path, live.object and live.observer objects, which provide the same basic functionality as the LiveAPI object, but from the Max patcher.
 * https://docs.cycling74.com/max7/vignettes/jsliveapi
 */
declare class LiveAPI {
    /**
     * callback is an optional JavaScript function. This function will be called when the LiveAPI object refers to a new object in Live (if the LiveAPI object's path change, for instance), or when an
     * observed property changes. path refers to the object in Live "pointed to" by the LiveAPI object (e.g. "live_set tracks 0 devices 0"). Alternately, a valid id can be used to refer a LiveAPI
     * object to an object in Live. Technical note: you cannot use the LiveAPI object in JavaScript global code. Use the live.thisdevice object to determine when your Max Device has completely loaded
     * (the object sends a bang from its left outlet when the Device is fully initialized, including the Live API). Legacy note: previous versions of the LiveAPI object required the jsthis object's
     * this.patcher property as the first argument. For backward-compatibility, this first argument is still supported, but is no longer necessary.
     */
    constructor(callback: any, name: string);

    /**
     * The id of the Live object referred to by the LiveAPI object. These ids are dynamic and awarded in realtime from the Live application, so should not be stored and used over multiple runs of Max
     * for Live.
     */
    id: number;

    /**
     * The path to the Live object referred to by the LiveAPI object. These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always
     * refer to the first device of the first track of the open Live Set.
     */
    path: string;

    /**
     * The path to the Live object referred to by the LiveAPI object, without any quoting (the path property contains a quoted path). These paths are dependent on the currently open Set in Live, but
     * are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
     */
    unquotedpath: string;

    /**
     * An array of children of the object at the current path.
     */
    children: string[];

    /**
     * The follow mode of the LiveAPI object. 0 (default) means that LiveAPI follows the object referred to by the path, even if it is moved in the Live user interface. For instance, consider a Live
     * Set with two tracks, "Track 1" and "Track 2", left and right respectively. If your LiveAPI object's path is live_set tracks 0, the left-most track, it will refer to "Track 1". Should the
     * position of "Track 1" change, such that it is now to the right of "Track 2", the LiveAPI object continues to refer to "Track 1". A mode of 1 means that LiveAPI updates the followed object based
     * on its location in the Live user interface. In the above example, the LiveAPI object would always refer to the left-most track, updating its id when the object at that position in the user
     * interface changes.
     */
    mode: number;

    /**
     * The type of the object at the current path. Please see the Live API Overview and Live Object Model documents for more information.
     */
    type: string;

    /**
     * A description of the object at the current path, including id, type, children, properties and functions.
     */
    info: string;

    /**
     * The observed property, child or child-list of the object at the current path, if desired. For instance, if the LiveAPI object refers to "live_set tracks 1", setting the property to "mute" would
     * cause changes to the "mute" property of the 2nd track to be reported to the callback function defined in the LiveAPI Constructor.
     */
    property: string;

    /**
     * The type of the currently observed property or child. The types of the properties and children are given in the Live Object Model.
     */
    proptype: string;

    /**
     * The patcher of the LiveAPI object, as passed into the Constructor.
     */
    patcher: any;

    /**
     * The count of children of the object at the current path, as specified by the child argument.
     */
    getcount(child: string): number;

    /**
     * Navigates to the path and causes the id of the object at that path out be sent to the callback function defined in the Constructor. If there is no object at the path, id 0 is sent.
     */
    goto(path: string): void;

    /**
     * Returns the value or list of values of the specified property of the current object.
     */
    get(property: string): any;

    /**
     * Returns the value or list of values of the specified property of the current object as a String object.
     */
    getstring(property: string): any;

    /**
     * Sets the value or list of values of the specified property of the current object.
     */
    set(property: string, value: any): void;

    /**
     * Calls the given function of the current object, optionally with a list of arguments.
     */
    call(func: string, args: any): void;
}

/**
 * The Max object can be accessed as a property of a jsthis object. Any message you can send to the max object using the semicolon notation in a message box can be invoked within Javascript using
 * Javascript syntax. http://max-javascript-reference.tim-schenk.de/symbols/max.html
 */
declare class Max {
    /**
     * The pathname of the Max application
     */
    readonly appath: string;

    /**
     * 1 if the command (Macintosh) or control (Windows) key is currently held down
     */
    readonly cmdkeydown: number;

    /**
     * 1 if the control key is currently held down
     */
    readonly ctrlkeydown: number;

    /**
     * [db description]
     * TODO: max.db?
     */
    readonly db: any;

    /**
     * The Patcher object of the frontmost patcher window, or a nil value if no patcher window is visible.
     */
    readonly frontpatcher: Patcher;

    /**
     * 1 if the js object is within a plug-in; note that this would be 1 if the js object was within a plug-in loaded into the vst~ object in Max.
     */
    readonly isplugin: number;

    /**
     * 1 if the currently executing Max application environment does not allow editing, 0 if it doe
     */
    readonly isruntime: number;

    /**
     * 1 if the user has disabled loadbang for the currently loading patch. If your object implements a loadbang method, it can test this property and choose to do nothing if it is true.
     */
    readonly loadbangdisabled: number;

    /**
     * 1 if the option (Macintosh) or alt (Windows) key is currently held down
     */
    readonly optionkeydown: number;

    /**
     * The name of the platform (e.g., “windows” or “macintosh”)
     */
    readonly os: string;

    /**
     * The current OS version number.
     */
    readonly osversion: string;

    /**
     * 1 if the shift key is currently held down
     */
    readonly shiftkeydown: number;

    /**
     * The current scheduler time in milliseconds - will be a floating-point value.
     */
    readonly time: number;

    /**
     * The version of the Max application, in the following form: "451"
     */
    readonly version: string;

    /**
     * The word buildcollective, followed by a reference name symbol and an output filename, builds a collective using the patcher associated with the symbol. The collective is named with the output
     * filename.
     */
    buildcollective(name: string, filename: string): void;

    /**
     * The word checkpreempt, followed by a symbol, sends the current Overdrive mode to the receive object named by the symbol.
     */
    checkpreempt(receive_object: string): void;

    /**
     * Causes Max not to show a Save Changes dialog when you close a window or quit, even if there are windows that have been modified. This is useful in conjunction with the quit message below.
     */
    clean(): void;

    /**
     * The word closefile, followed by a symbol, closes the patcher file previously opened with the openfile message to Max associated with the symbol.
     */
    closefile(symbol: string): void;

    /**
     * The word debug, followed by a zero or one, toggles the sending of Max's internal debugging output to the Max window. Debug information may be of limited use for anyone who isn't debugging Max
     * itself.
     */
    debug(enable: 0 | 1): void;

    /**
     * The word enablepathcache, followed by a zero or one, turns on (or off) Max's search path cache. This should only be done if you noticed unusual behavior when opening files.
     */
    enablepathcache(enable: 0 | 1): void;

    /**
     * (Macintosh only) The word enablerefresh, followed by a zero or one, toggles an alternative to the standard way in which the screen contents are updated, resulting in better visual performance.
     * This feature is enabled by default. The rate at which refresh is done can be set by using the setrefreshrate message.
     */
    enablerefresh(enable: 0 | 1): void;

    /**
     * List all of the external objects currently loaded in the Max window.
     */
    externs(): void;

    /**
     * The word fileformat, followed by two symbols that specify a file extension and a four-character file type, tells Max to associate a filename extension with a particular filetype. The message
     * max fileformat .tx TEXT associates the extension .tx with TEXT (text) files. This allows a user to send a message read george and locate a file with the name george.tx. It also ensures that
     * files with the extension .tx will appear in a standard open file dialog where text files can be chosen.
     */
    fileformat(extension: string, filetype: string): void;

    /**
     * The word fixwidthratio, followed by a floating-point number, sets the ratio of the box to the width of the text when the user chooses Fix Width from the Object menu. The default value is 1.0. A
     * value of 1.1 would make boxes wider than they needed to be, and a value of 0.9 would make boxes narrower than they need to be.
     */
    fixwidthratio(ratio: number): void;

    /**
     * The word getdefaultpatcherheight followed by a symbol used as the name of a receive object, causes Max to report the current default patcher height in pixels to the named receive object (See
     * also the setdefaultpatcherheight message to Max.)
     */
    getdefaultpatcherheight(object_name: string): void;

    /**
     * The word getdefaultpatcherwidth, followed by a symbol used as the name of a receive object, causes Max to report the current default patcher width in pixels to the named receive object (See
     * also the setdefaultpatcherwidth message to Max.)
     */
    getdefaultpatcherwidth(object_name: string): void;

    /**
     * The word getenablepathcache, followed by a symbol used as the name of a receive object, will report whether the path cache is enabled to the named receive object. (See also the enablepathcache
     * message to Max.)
     */
    getenablepathcache(object_name: string): void;

    /**
     * (Macintosh only.) The word getenablerefresh, followed by a symbol used as the name of a receive object, will report whether enhanced refresh is enabled to the named receive object. (See also
     * the enablerefresh message to Max.)
     */
    getenablerefresh(object_name: string): void;

    /**
     * The word geteventinterval, followed by a symbol used as the name of a receive object, will report the event interval to the named receive object. (See also the seteventinterval message to Max.)
     */
    geteventinterval(object_name: string): void;

    /**
     * The word getfixwidthratio, followed by a symbol used as the name of a receive object, reports the current fix with ratio value to the named receive object. (See also the fixwidthratio message
     * to Max.)
     */
    getfixwidthratio(object_name: string): void;

    /**
     * The word getpollthrottle, followed by a symbol used as the name of a receive object, reports the current poll throttle value to the named receive object. (See also the setpollthrottle message
     * to Max.)
     */
    getpollthrottle(object_name: string): void;

    /**
     * The word getqueuethrottle, followed by a symbol used as the name of a receive object, causes Max to report the current queue throttle value to the named receive object. (See also the
     * setqueuethrottle message to Max.)
     */
    getqueuethrottle(object_name: string): void;

    /**
     * (Macintosh only) The word getrefreshrate, followed by a symbol used as the name of a receive object, causes Max to report the current refresh rate in Hertz to the named receive object. (See
     * also the setrefreshrate message to Max.)
     */
    getrefreshrate(object_name: string): void;

    /**
     * The word getruntime, followed by a symbol used as the name of a receive object,sends a 1 to the named receive object if the current version of Max is a runtime version, and a 0 if not.
     */
    getruntime(object_name: string): void;

    /**
     * The word getsleep, followed by a symbol used as the name of a receive object, causes Max to report the sleep time to the named receive object. (See also the setsleep message to Max.)
     */
    getsleep(object_name: string): void;

    /**
     * The word getslop, followed by a symbol used as the name of a receive object, reports the scheduler slop value to the named receive object. (See also the setslop message to Max.)
     */
    getslop(object_name: string): void;

    /**
     * The word getqueuethrottle, followed by a symbol used as the name of a receive object, reports the maximum number of patcher UI update events processed at a time to the named receive object.
     * (See also the setsysqelemthrottle message to Max.)
     */
    getsysqelemthrottle(object_name: string): void;

    /**
     * The word getsystem, followed by a symbol used as the name of a receive object, will report the name of the system (macintosh or windows) to the named receive object.
     */
    getsystem(object_name: string): void;

    /**
     * The word getversion, followed by a symbol used as the name of a receive object, will report the Max version number (e.g. 6.1.3 is reported as 1300) to the named receive object.
     */
    getversion(object_name: string): void;

    /**
     * Hides the cursor if it is visible.
     */
    hidecursor(): void;

    /**
     * Hides the menu bar. Although the pull-down menus are not available when the menu bar is hidden, menu shortcut (accelerator) keys continue to work.
     */
    hidemenubar(): void;

    /**
     * The word htmlref, followed by an object name as a symbol, looks for a file called .html in the search path. If found, a web browser is opened to view the page.
     */
    htmlref(object_name: string): void;

    /**
     * The word interval, followed by a number from 1 to 20, sets the timing interval of Max's internal scheduler in milliseconds. The default value is 1. This message only affects the scheduler when
     * Overdrive is on and scheduler in audio interrupt (available with MSP) is off. (When using scheduler in audio interrupt mode the signal vector size determines the scheduler interval.) Larger
     * scheduler intervals can improve CPU efficiency on slower computer models at the expense of timing accuracy.
     */
    interval(value: number): void;

    /**
     * The word launchbrowser, followed by a URL as a symbol, opens a web browser to view the URL.
     */
    launchbrowser(url: string): void;

    /**
     * The word maxcharheightforsubpixelantialiasing, followed by a number, sets a threshold font size (in points) for native subpixel aliasing. Since the look of subpixel antialiasing may be
     * undesirable when working with large fonts as compared to regular antialiasing, this attribute lets you specify a threshold font size; if a font is larger than the specified size, it will be
     * rendered using regular rather than subpixel antialiasing. Note that Max honors your computer's system preferences - Max won't use subpixel aliasing if you've disabled it for your system.
     * Setting this attribute value to zero value is 0 will always use regular antialiasing, and setting a very high value will always use subpixel antialiasing (unless it is disabled in system
     * preferences).
     */
    maxcharheightforsubpixelantialiasing(points: number): void;

    /**
     * When using the runtime version of Max *and* an active custom menubar object, maxinwmenu, followed by the number 1, will place an item called Status in the Windows menu, allowing users to see
     * the Max window (labeled Status in the runtime version). When maxinwmenu is followed by 0 the menu item is not present. The default is for the Status item to be present in the Windows menu
     */
    maxinwmenu(enable: 0 | 1): void;

    /**
     * Displays the Max Window. If the Max window if not currently open, the window will be displayed. If the window is currently open, it will bring it to the front.
     */
    maxwindow(): void;

    /**
     * Sends a message to max
     */
    message(maxMessage: MaxMessage): void;

    /**
     * The word midi, followed by a variable-length message, allows messages to be sent to configure the system MIDI object.
     * TODO: find out options
     */
    midi(...message: any[]): void;

    /**
     * Prints the names of all current MIDI devices in the Max window. (See also MIDI Messages to Max.)
     */
    midilist(): void;

    /**
     * The word nativetextrendering, followed by a zero or one, toggles between using JUCE font rendering (0) and the platform-native font rendering for your computer (1) when displaying text in Max.
     */
    nativetextrendering(enable: 0 | 1): void;

    /**
     * (Macintosh) The word notypeinfo, followed by zero or one, sets whether Max saves files with traditional Mac OS four-character type information. By default, Max does save this information in
     * files.
     */
    notypeinfo(enable: 0 | 1): void;

    /**
     * The word objectfile, followed by two symbols that specify an object name and a file name, creates a mapping between the external object and its filename. For example, the *~ object is in a file
     * called times~ so at startup Max executes the command max objectfile *~ times~.
     */
    objectfile(object_name: string, file_name: string): void;

    /**
     * The word openfile, followed by two symbols that specify an reference name and a file name or path name, attempts to open the patcher with the specified name. If successful, the patcher is
     * associated with the reference symbol, which can be passed as argument to the buildcollective, buildplugin, and closefile messages to Max. The openfile message is intended for batch collective
     * building.
     */
    openfile(reference_name: string, file_name: string): void;

    /**
     * List the current search paths in the Max window. There is a button in the File Preferences window that does this.
     */
    paths(): void;

    /**
     * innum specifies an input port, outnum specifies an output port, portname is the name of the port as a single symbol (i.e. It is necessary to use double quotes). An abbrev value is 0 for no
     * abbrev (- in menu), 1 for 'a' and 26 for 'z'.
     */
    portabbrev(...message: any[]): void; // TODO: Documentation is unclear

    /**
     * Enables (1) or disables (0) the port specified by portname. All ports are enabled by default.
     * TODO: Seems to be missing a parameter
     */
    portenable(portname: string): 0 | 1;

    /**
     * Similar to portabbrev, but offset is the channel offset added to identify input or output ports when a MIDI object can send to or receive from multiple ports by channel number. Must be a
     * multiple of 16 (e.g. max midi portoffset innum PortA 16 sets the channel offset for PortA device to 16).
     */
    portoffset(...message: any[]): void;

    /**
     * The word preempt, followed by a one (on) or zero (off), toggles Overdrive mode.
     */
    preempt(mode: 0 | 1): void;

    /**
     * The word pupdate, followed by two integer values that specify horizontal and vertical position, moves the mouse cursor to that global location.
     */
    pupdate(x: number, y: number): void;

    /**
     * Quits the Max application; equivalent to choosing Quit from the File menu. If there are unsaved changes to open files, and you haven't sent Max the clean message, Max will ask whether to save
     * changes.
     */
    quit(): void;

    /**
     * Causes all Max windows to be updated.
     */
    refresh(): void;

    /**
     * (Macintosh only) The word setrefreshrate, followed by a number, sets the rate, in frames per second, at which the visual display is updated. On Macintosh systems, the rate at which the screen
     * is refreshed is unrelated to the rate at which you change its contents. Better visual performance can be achieved - at the cost of a slight performance decrease in Jitter, and little or no
     * performance decrease for audio processing - by specifying a higher frame rate. When enabled using the enablerefresh 1 message, the default rate is 28.57 FPS. Refresh enable is off by default.
     */
    refreshrate(fps: number): void;

    /**
     * The word runtime, followed by a zero or one and a message, executes the message if the current version of Max is a runtime version (1) or non-runtime (0).
     */
    runtime(isRunstime: 0 | 1, ...message: any[]): void;

    /**
     * The word sendapppath, followed by a symbol, sends a symbol with the path of the Max application to the receive object named by the symbol.
     */
    sendapppath(object_name: string): void;

    /**
     * The word sendinterval, followed by a symbol, sends the current scheduler interval to the receive object named by the symbol.
     */
    sendinterval(object_name: string): void;

    /**
     * The word setdefaultpatcherheight, followed by an integer value greater than 100, sets the default patcher height in pixels.
     */
    setdefaultpatcherheight(height: number): void;

    /**
     * The word setdefaultpatcherwidth, followed by an integer value greater than 100, sets the default patcher width in pixels.
     */
    setdefaultpatcherwidth(width: number): void;

    /**
     * The word seteventinterval, followed by an integer value, sets the time between invocations of the event-level timer (The default value is 2 milliseconds). The event-level timer handles low
     * priority tasks like drawing user interface updates and playing movies.
     */
    seteventinterval(interval: number): void;

    /**
     * The word setmirrortoconsole, followed by a 1 or 0, turns on or off (default is 0, off) mirroring of Max window posts to the system console. The system console is available on the Mac using
     * Console.app, or on Windows using the DbgView program (free download from Microsoft).
     */
    setmirrortoconsole(enable: 0 | 1): void;

    /**
     * The word setpollthrottle, followed by an integer, sets the maximum number of events the scheduler executes each time it is called (The default value is 20). Setting this value lower may
     * decrease accuracy of timing at the expense of efficiency.
     */
    setpollthrottle(event_count: number): void;

    /**
     * The word setqueuethrottle, followed by an integer value, sets the maximum number of events handled at low-priority each time the low-priority queue handler is called (The default value is 2).
     * Changing this value may affect the responsiveness of the user interface.
     */
    setqueuethrottle(event_count: number): void;

    /**
     * The word setsleep, followed by a number, sets the time between calls to get the next system event, in 60ths of a second. The default value is 2.
     */
    setsleep(interval: number): void;

    /**
     * The word setslop, followed by a floating-point value, sets the scheduler slop value - the amount of time a scheduled event can be earlier than the current time before the time of the event is
     * adjusted to match the current time. The default value is 25 milliseconds.
     */
    setslop(slop_value: number): void;

    /**
     * The word setsysqelemthrottle, followed by a number, sets the maximum number of patcher UI update events to process at a time. Lower values can lead to more processing power available to other
     * low-priority Max processes, and higher values make the user interface more responsive (especially when using many bpatchers).
     */
    setsysqelemthrottle(event_count: number): void;

    /**
     * Shows the cursor if it is hidden.
     */
    showcursor(): void;

    /**
     * Shows the menu bar after it has been hidden with hidemenubar.
     */
    showmenubar(): void;

    /**
     * Prints the number of symbols in the symbol table in the Max window.
     */
    size(): void;

    /**
     * The word system, followed by the name of an Operating System (windows or macintosh) and a message, will execute the message if Max is running on the named OS.
     */
    system(os: "windows" | "macintosh", message: string): void;

    /**
     * The word useslowbutcompletesearching, followed by a one (on) or zero (off), toggles complete file searching. When enabled, it causes files not found in Max's cache of the search path to be
     * searched in the file system. This is necessary only in extremely rare cases where the file cache does not update properly. One such case is copying a file into the search path using a version
     * of the Mac OS prior to 10.5.5 over a network. This option may cause patcher files to be loaded more slowly. The setting defaults to off with each launch of the application, and is not stored in
     * the user's preferences. useslowbutcompletesearching 0 turns the setting off.
     */
    useslowbutcompletesearching(enable: 0 | 1): void;
}

declare class MaxobjConnection {
    srcobject: object;
    dstobject: object;
    srcoutlet: number;
    dstinlet: number;
}

/**
 * A Maxobj is a Javascript representation of a Max object in a patcher. It is returned by various methods of a Javascript Patcher object, such as newobject().One important thing to keep in mind about
 * a Maxobj is that it could eventually refer to an object that no longer exists if the underlying Max object is freed. The valid property can be used to test for this condition.
 * https://docs.cycling74.com/max7/vignettes/jsmaxobj
 */
declare class Maxobj {
    constructor();

    /**
     * The location of an object in a patcher. When the object's rectangle is changed, it will move on screen if it is visible. The coordinates are stored in the following order: left, top, right,
     * bottom.
     */
    rect: number[];

    /**
     * The Max class (as opposed to the Javascript class, which is "Maxobj" and accessed via the standard class property) of the object.
     */
    maxclass: string;

    /**
     * The Patcher object that contains the Maxobj
     */
    patcher: any;

    /**
     * Is the object set to be hidden in a locked patcher
     */
    hidden: boolean;

    /**
     * If the object is set to use one of the standard 16 colors, this property is the index of the color
     */
    colorindex: number;

    /**
     * If there is another object after this one in the Patcher's list of objects, this property returns it, otherwise it returns a nil value
     */
    nextobject: any;

    /**
     * The patcher-specific name of the object, as set with the Name... dialog
     */
    varname: string;

    /**
     * Whether the object can be selected for text entry (a number box would be an example of an object whose canhilite property returns true)
     */
    canhilite: boolean;

    /**
     * Whether the object is in the Patcher's background layer
     */
    background: boolean;

    /**
     * Whether the object ignores clicks
     */
    ignoreclick: boolean;

    /**
     * Whether the object is selected in an unlocked patcher window.
     */
    selected: boolean;

    /**
     * If the Maxobj refers to an object is of Max class js, this returns the associated jsthis object
     * TODO: Correct return type
     */
    js: any;

    /**
     * Whether patchcords are connected to the object's inlets and outlets and, if so,
     * the connected objects. Returns a generic object with two arrays,
     * 'inputs' and 'outputs', of MaxobjConnection objects.
     * These have the properties 'srcobject', 'dstobject', 'srcoutlet' and 'dstinlet'
     * which can be used to walk the graph from JS.
     */
    patchcords: { inputs: MaxobjConnection[]; outputs: MaxobjConnection[] };

    /**
     * Returns whether the Maxobj refers to a valid Max object
     */
    valid: boolean;

    /**
     * Sends the object the message specified by the string, followed by any additional arguments provided. This is useful for sending messages to object which dynamically dispatch messages with the
     * “anything” message, as is the case for instances of js, jsui, lcd, and others.
     */
    message(message: string, ...anything: any[]): void;

    /**
     * Opens a help file describing the object, if it exists
     */
    help(): void;

    /**
     * If the object contains a patcher, this function returns a (Javascript) Patcher object.
     * The optional index is used for specifying an instance number, which only applies to poly~ objects.
     * If the object does not contain a subpatcher, a nil value is returned.
     */
    subpatcher(index?: number): Patcher;

    /**
     * Returns a Boolean value if the object has an entry in its message list for the message specified by the string. If the entry is not a message that can be sent by a user within Max (i.e., it's a
     * C-level “untyped” message), false is returned. This doesn’t work for messages which are dynamically dispatched with the “anything” message, as is the case for instances of js, jsui, lcd, and
     * others.
     */
    understands(message: string): boolean;

    /**
     * Returns an Array value containing the names of available attributes for the object.
     */
    getattrnames(): string[];

    /**
     * Returns the value of the attribute specified by attribute_name. Lists are returned as JS Array objects.
     */
    getattr(attribute_name: string): unknown;

    /**
     * Sets the value of the attribute specified by attribute_name.
     */
    setattr(attribute_name: string, anything: unknown): void;

    /**
     * Returns an Array value containing the names of available attributes for the object's box.
     */
    getboxattrnames(): string[];

    /**
     * Returns the value of the object's box attribute specified by box_attribute_name. Lists are returned as JS Array objects.
     */
    getboxattr(box_attribute_name: string): unknown;

    /**
     * Sets the value of the object's box attribute specified by box_attribute_name.
     */
    setboxattr(box_attribute_name: string, ...anything: unknown[]): void;
}

/**
 * The MaxobjListener object listens for changes to a Maxobj object's value,
 * or changes to a specified attribute of a Maxobj object.
 * When a change occurs, a user-specified function will be called.
 * The object also provides methods for getting and setting the value of the observed value or attribute.
 */
declare class MaxobjListener {
    constructor(object: Maxobj, attribute_name: string, callback: (data: MaxobjListenerData<any>) => void);

    /**
     * The Maxobj to observe.
     */
    maxobject: Maxobj;

    /**
     * An attribute to observe for changes, if desired.
     */
    attrname: string;

    /**
     * Never execute the callback function in response to calling setvalue from this MaxobjListener.
     */
    silent: number;

    /**
     * Report the value of the Maxobj or its specified attribute. List values are reported in a JS Array object.
     */
    getvalue(): void;

    /**
     * Set the value of the Maxobj or its specified attribute.
     */
    setvalue(): void;

    /**
     * Set the value of the Maxobj or its specified attribute, without executing the callback function (also see the silent property).
     */
    setvalue_silent(): void;
}

/**
 * The MaxobjListenerData object is the argument to your MaxobjListener's function
 */
declare class MaxobjListenerData<Tvalue> {
    /**
     * The MaxobjListener which called the function.
     */
    listener: MaxobjListener;

    /**
     * The Maxobj being observed.
     */
    maxobject: Maxobj;

    /**
     * If the MaxobjListener is observing an attribute, the attribute's name, otherwise undefined.
     */
    attrname: string;

    /**
     * The current value of the observed object or attribute. List values are represented by a JS Array object.
     */
    value: Tvalue;
}

/**
 * The Patcher object is a Javascript representation of a Max patcher. You can find, create, modify, and iterate through objects within a patcher, send messages to a patcher that you would use with
 * the thispatcher object, etc. https://docs.cycling74.com/max7/vignettes/jspatcherobject
 */
declare class Patcher {
    /**
     * Uses 100, 100, 400, 400 as default window coordinates
     */
    constructor();

    /**
     * left, top, bottom, right: global screen coordinates of the Patcher window
     */
    constructor(left: number, top: number, bottom: number, right: number);

    /**
     * If the patcher is a subpatcher, the box property returns the Maxobj that contains it.
     */
    box: Maxobj;

    /**
     * Number of objects in the patcher
     */
    count: number;

    /**
     * The patcher’s file path on disk
     */
    filepath: string;

    /**
     * If the patcher contains objects, this is the first one in its list. You can iterate through all objects in a patcher using the nextobject property of a Maxobj.
     */
    firstobject: Maxobj;

    /**
     * The patcher's name (its window title, without any brackets that appear for subpatchers)
     */
    name: string;

    /**
     * The patcher's locked state. This property is read-only in the runtime version of Max.
     */
    locked: boolean;

    /**
     * Returns "patcher"
     */
    maxclass: string;

    /**
     * Returns the Max class name of the parent object if this is a subpatcher, or a nil value if this is a top-level patcher.
     */
    parentclass: string;

    /**
     * If the patcher is a subpatcher, this returns the parent patcher. Otherwise it returns a nil value.
     */
    parentpatcher: Patcher;

    /**
     * X/Y coordinate array for the scroll offset of a patcher is window
     */
    scrolloffset: number[];

    /**
     * X/Y coordinate array for the patcher's fixed origin
     */
    scrollorigin: number[];

    /**
     * A Javascript representation of the window associated with the patcher. For more information, see the Wind Object.
     */
    wind: Wind;

    /**
     * Returns the value of the attribute specified by attribute_name. Lists are returned as JS Array objects.
     */
    getattr(attribute_name: string): unknown;

    /**
     * Sends message to the patcher followed by any additional arguments (..anything) provided.
     * This is useful for manupulating patchers which dynamically can do things like: creating new buttons,
     * resizing it's window, switching to presentation mode, ...
     */
    message(message: string, ...anything: any[]): void;

    /**
     * Creates a new object of Max class classname in a patcher using the specified parameters and returns a Maxobj (see below) that represents it.
     */
    newobject(classname: string, ...params: any[]): Maxobj;

    /**
     * Creates a new object of class classname in a patcher using the specified parameters and return a Maxobj (see below) that represents it.
     */
    newdefault(left: number, top: number, classname: string, ...args: any[]): Maxobj;

    // TODO: Are from_object: any actually strings, or Maxobjs?

    /**
     * Connects two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
     */
    connect(from_object: any, outlet: number, to_object: any, inlet: number): void;

    /**
     * Connects two objects (of type Maxobj) in a patcher with a hidden patch cord. Arguments are the same as for the connect message above.
     */
    hiddenconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

    /**
     * Disconnects an existing connection between two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
     */
    disconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

    /**
     * For all objects in a patcher, calls the function with the each object's Maxobj as an argument. Does not recurse into subpatchers.
     */
    apply(func: any): void;

    /**
     * For all objects in a patcher, calls the function with the each object's Maxobj as an argument.
     * Same as apply() except that applydeep() recurses into subpatchers (depth first).
     */
    applydeep(func: any): void;

    /**
     * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
     * Does not recurse into subpatchers.
     */
    applyif(action_function: any, test_function: any): void;

    /**
     * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
     * Same as applyif() except that applydeepif() recurses into subpatchers
     */
    applydeepif(action_function: any, test_function: any): void;

    /**
     * Removes the object (a Maxobj passed as an argument) from a patcher
     */
    remove(obj: any): void;

    /**
     * Returns the first object found in a patcher with the given name. The name is a local name as specified by the Name... dialog in a patcher, not the name of a send or receive object. You can also
     * set an object's name using the varname property of a Maxobj.
     */
    getnamed(name: string): Maxobj;

    /**
     * Calls the function on each object in a patcher, passing it as a Maxobj argument to the function. If the function returns true, the iteration stops and the Maxobj object is returned as the value
     * of the getlogical() method. Otherwise getlogical() returns a nil value. Please note that access to patcher attributes in global code is not supported. This requires the use of loadbang().
     */
    getlogical(func: any): Maxobj | null;

    /**
     * Moves the object to the front of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
     */
    bringtofront(obj: any): void;

    /**
     * Moves the object to the back of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
     */
    sendtoback(obj: any): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolyBuffer                                                                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jspolybuffer

/**
 * The PolyBuffer object in JS is a companion to the polybuffer~ object you create in a Max patcher. It provides the ability to access a group of buffer~ objects associated with a name.
 */
declare class PolyBuffer {
    /**
     * If no name is provided as an argument then instantiation will fail.
     */
    constructor(name: string);

    name: string;
    count: number;
    size: number;
    open(): void;
    wclose(): void;
    readfolder(folder_path: string): void;
    writefolder(folder_path: string): void;
    append(soundfile_path: string): void;
    appendempty(duration: number, channels: number): void;
    clear(): void;
    print(): void;
    send(index: number, ...msg: any[]): void;

    /**
     * Return an array containing index, name, path, duration, channel, and sample rate.
     */
    dump(): string[];

    /**
     * Return an array containing names of the buffer~ objects and file names.
     */
    getshortname(filename: string): string[];

    /**
     * Return an array containing names of all the buffer~ objects.
     */
    getbufferlist(filename: string): string[];
}

/**
 * A task is a function that can be scheduled or repeated. You can set the arguments to the function as well as the object that will be this when the function is called.
 * https://docs.cycling74.com/max7/vignettes/jstaskobject
 */
declare class Task {
    /**
     * The object argument represents the this during the execution of the function. Use the this keyword (referring to the jsthis object) to be able to use outlets and other js object features. The
     * function argument represents the function you want to execute, and arguments (an array) represents the arguments to pass to the function. The object and arguments arguments are optional. If not
     * present, the parent of the function object (typically jsthis) will be assumed, and there will be no arguments supplied to the function.
     */
    constructor(func: any, obj?: any, ...args: any[]);

    /**
     * The arguments passed to the task function. arguments[0] is the first argument.
     */
    arguments: any[];

    /**
     * The function that is executed in the Task. You can even change this within the task function itself.
     */
    function: any;

    /**
     * Whether the Task is running or not. Within a function executing within a task, this will always be 1.
     */
    running: boolean;

    /**
     * The time in milliseconds between repeats of the task function. The default interval is 500 ms.
     * See documentation for an example.
     */
    interval: number;

    /**
     * The object that is assigned to be the this in the task function. Most often this will be your jsthis object, so you can, for example access the outlet() method. You set up your jsthis object to
     * be the this by creating a task with the keyword this as the first argument. See documentation for an example.
     */
    object: any;

    /**
     * The number of times the task function has been called. Outside of a task function, the value of iterations is always 0. The value resets each time the task is started (using the repeat(),
     * execute(), or schedule() methods.
     */
    iterations: number;

    /**
     * Repeat a task function. The optional number argument specifies the number of repetitions. If the argument is not present or is negative, the task repeats until it is cancelled. The optional
     * initialdelay argument sets the delay in milliseconds until the first iteration. See documentation for an example.
     */
    repeat(times: number): void;

    /**
     * Run the task once, right now. Equivalent to calling the task function with its arguments.
     */
    execute(): void;

    /**
     * Run the task once, with a delay. The optional delay argument sets the time (in milliseconds) before the task function will be executed.
     */
    schedule(delay?: number): void;

    /**
     * If a task is scheduled or repeating, any future executions are cancelled. This method can be used within a task function for a self-canceling Task. See documentation for an example.
     */
    cancel(): void;
}

/**
 * The Wind object is a property of a Patcher that represents its window. You cannot create a new Wind or access other types of windows such as that of a Max table object.
 * https://docs.cycling74.com/max7/vignettes/jswindobj
 */
declare class Wind {
    /**
     * The Patcher object associated with the window.
     */
    assoc: Patcher;

    /**
     * The Max class of the object associated with the window.
     */
    assocclass: string;

    /**
     * Has the window’s contents been modified? This property is read-only in the runtime version of Max.
     */
    dirty: boolean;

    /**
     * Does the window have a grow area?
     */
    hasgrow: boolean;

    /**
     * Does the window have a horizontal scroll bar?
     */
    hashorizscroll: boolean;

    /**
     * Does the window have a vertical scroll bar?
     */
    hasvertscroll: boolean;

    /**
     * Does the window have a zoom box?
     */
    haszoom: boolean;

    /**
     * Does the window have a window title bar?
     */
    hastitlebar: boolean;

    /**
     * An array of four coordinates (left, top, right, bottom) representing the window’s location in global coordinates.
     */
    location: number[];

    /**
     * The Wind object of the next patcher visible in the application’s list of windows The first Wind object can be accessed using the frontpatcher property of the Max object (as
     * max.frontpatcher.wind).
     */
    next: Wind;

    /**
     * An array of two coordinates (width, height) representing the window’s size.
     */
    size: number[];

    /**
     * The window’s title.
     */
    title: string;

    /**
     * Can you see the window?
     */
    visible: boolean;

    /**
     * Move the window in front of all other windows.
     */
    bringtofront(): void;

    /**
     * Scroll the window so that x and y are at the top-left corner.
     */
    scrollto(x: number, y: number): void;

    /**
     * Moves the window behind all other windows.
     */
    sendtoback(): void;

    /**
     * Set the global location of the window according to the coordinates passed in as arguments.
     */
    setlocation(left: number, top: number, bottom: number, right: number): void;
}

/**
 * The SQLite object provides access to the SQLite database system (see http://www.sqlite.org for more information). A companion object, SQLResult, is required for most database operations.
 * https://docs.cycling74.com/max7/vignettes/jssqliteobject
 */
declare class SQLite {
    /**
     * No arguments are required for the instantiation of an SQLite object. However, all future calls to the database will be through this instance of the object.
     */
    constructor();

    /**
     * Open an SQLite-format file for database operations. The required filename argument is the file to access. The optional on_disk argument determines if the file should be memory-based (0) or
     * disk-based (1). The optional must_exist argument, if non-zero, requires the file to exist to be opened. If zero, then a file will be created if it does not exist. This method returns an error
     * code if unsuccessful, or a zero if the call results in an opened database.
     */
    open(filename: string, on_disk: number, must_exist: number): number;

    /**
     * Closes a previously opened SQLite database.
     */
    close(): void;

    /**
     * Perform an SQL command on the database. This command must be in standard SQL language syntax, limited to the operations that SQLite supports. The result argument will return with an SQLResult
     * object with any applicable results. The method returns an error code if unsuccessful, or a zero if the call results in a completed operation. See documentation for an example.
     */
    exec(command: string, result: any): number;

    /**
     * Start an SQL transaction on the database. This allows you to batch database updates, and to roll back sets of changes if they do not all complete. When you are done with batch updates, a call
     * to endtransaction() should be executed.
     */
    begintransaction(): void;

    /**
     * Complete a transaction and flush all database writes to the file.
     */
    endtransaction(): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SQLResult                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssqlresultobject

/**
 * An SQLResult object is a container for results obtained in an SQLite.exec call. Not every exec() call will produce results, but any database query (SELECT in particular) will generate an SQLResult
 * object even if the result is empty. https://docs.cycling74.com/max7/vignettes/jssqlresultobject
 */
declare class SQLResult {
    constructor();

    /**
     * Returns the number of records that were returned in the SQLResult object.
     */
    numrecords(): number;

    /**
     * Returns the number of fields in the dataset returned in the SQLResult object.
     */
    numfields(): number;

    /**
     * Returns the name of a column at the requested index.
     */
    fieldname(index: number): string;

    /**
     * Returns the value of the column identified by index, and in the record identified by record_no.
     * See documentation for an example.
     */
    value(index: number, record_no: number): any;
}

/*
 * JSUI: https://docs.cycling74.com/max7/vignettes/jsuiobject
 */

declare var mgraphics: MGraphics;
declare var sketch: Sketch;
declare function refresh(): void;

/**
 * https://docs.cycling74.com/max7/vignettes/jsmgraphics
 */
declare class MGraphics {
    constructor();

    /**
     * When autosketch is set to 1, the drawing commands will immediately be drawn without waiting a drawing execution command. While this is convenient, it is less flexible than working with
     * autosketch set to 0.
     */
    autosketch: number;

    /**
     * As described in the narrative above, the relative_coords setting determines whether the locations in the drawing area range from 0,0 through the size in pixels (relative_coords = 0), or if the
     * drawing area ranges from (-aspect, 1.0) through (aspect, -1.0).
     */
    relative_coords: number;

    /**
     * When autofill is set to 1, any shape command will immediately be filled without requiring a fill execution command. While this is convenient, it is less flexible than working with autofill set
     * to 0.
     */
    autofill: number;

    /**
     * Array of two values width and height of the jsui object in the maxpat
     */
    size: [number, number];

    /**
     * The init routine is the first thing that an mgraphics-based Javascript program needs to call. It initializes the library, sets up the internal mgraphics variables and prepares the jsui object
     * for drawing.
     */
    init(): void;

    /**
     * Force a redraw of the display area by calling the paint() function.
     */
    redraw(): void;

    /**
     * Returns a copy of the current path to be stored and reused at a later time.
     */
    copy_path(): void;

    /**
     * Appends a stored path to the current path at the current end point.
     */
    append_path(path: any): void;

    /**
     * Create a line that connects the current path point to the origin of the path, thereby closing the path into a fill-able shape.
     */
    close_path(): void;

    /**
     * Using the current path, round the corners to the radius provided (or as close as possible given the path’s angle).
     */
    path_roundcorners(radius: number): void;

    /**
     * Returns an array with the current X and Y coordinates of the path ending position.
     */
    get_current_point(): number[];

    /**
     * Add a circular, clockwise, arc to the current path.
     * x_center The horizontal coordinate of the arc's center.
     * y_center The vertical coordinate of the arc's center.
     * radius   The radius of the arc.
     * angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
     * angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
     */
    arc(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

    /**
     * Add a circular, counter-clockwise, arc to the current path.
     * x_center The horizontal coordinate of the arc's center.
     * y_center The vertical coordinate of the arc's center.
     * radius   The radius of the arc.
     * angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
     * angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
     */
    arc_negative(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

    /**
     * Add a non-circular arc to the current path.
     * x_center The horizontal coordinate of the arc's center.
     * y_center The vertical coordinate of the arc's center.
     * radius_x The horizontal radius of the arc.
     * radius_y The vertical radius of the arc.
     * angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
     * angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
     */
    ovalarc(
        x_center: number,
        y_center: number,
        radius_x: number,
        radius_y: number,
        angle1: number,
        angle2: number,
    ): void;

    /**
     * Add a cubic Bezier spline to the current path.
     * x1 The first control point.
     * y1 The first control point.
     * x2 The second control point.
     * y2 The second control point.
     * x3 The destination point.
     * y3 The destination point.
     */
    curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Add a cubic Bezier spline to the current path, using coordinates relative to the current point.
     * x1 The first control point.
     * y1 The first control point.
     * x2 The second control point.
     * y2 The second control point.
     * x3 The destination point.
     * y3 The destination point.
     */
    rel_curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Add a line segment to the current path.
     * x The destination point.
     * y The destination point.
     */
    line_to(x: number, y: number): void;

    /**
     * Add a line segment to the current path, using coordinates relative to the current point.
     * x The destination point.
     * y The destination point.
     */
    rel_line_to(x: number, y: number): void;

    /**
     * Move the cursor to a new point and begin a new subpath.
     * x The new location.
     * y The new location.
     */
    move_to(x: number, y: number): void;

    /**
     * Move the cursor to a new point and begin a new subpath, using coordinates relative to the current point.
     * x The new location.
     * y The new location.
     */
    rel_move_to(x: number, y: number): void;

    /**
     * Add a closed rectangle path in the context.
     * x      The horizontal origin.
     * y      The vertical origin.
     * width  The width of the rect.
     * height The height of the rect.
     */
    rectangle(x: number, y: number, width: number, height: number): void;

    /**
     * Add a closed rounded-rectangle path in the context.
     * x      The horizontal origin.
     * y      The vertical origin.
     * width  The width of the rect.
     * height The height of the rect.
     * ovalwidth  The width of the oval used for the round corners.
     * ovalheight The height of the oval used for the round corners.
     */
    rectangle_rounded(x: number, y: number, width: number, height: number, ovalwidth: number, ovalheight: number): void;

    /**
     * Add a closed elliptical path in the context.
     * x      The horizontal origin.
     * y      The vertical origin.
     * width  The width of the rect.
     * height The height of the rect.
     */
    ellipse(x: number, y: number, width: number, height: number): void;

    /**
     * Sets the current font face by name.
     */
    select_font_face(fontname: string): void;

    /**
     * Sets the current font size, using either an integer or floating-point value.
     */
    set_font_size(size: number): void;

    /**
     * Places the display text in the drawing area at the current location, and using the current font and size. Since a path is not being created, it does not conform to the transformations otherwise
     * available with paths.
     */
    show_text(text: string): void;

    /**
     * Create a path that uses the display text, the current font and the current size. The result is subject to all of the transforms ordinarily available to paths.
     */
    text_path(text: string): void;

    /**
     * Returns an array with three values: ascent, descent and height.
     */
    font_extents(): number[];

    /**
     * Returns an array with two values: width and height. This is the measurement of the provided text using the current font and size.
     */
    text_measure(text: string): [number, number];

    /**
     * Returns a Javascript array where each value is the text name of a font installed on your system. You can determine the length of the array by using the variable fontlist.length.
     */
    getfontlist(): string[];

    /**
     * Create a solid color pattern.
     */
    pattern_create_rgba(red: number, green: number, blue: number, alpha: number): Pattern;

    /**
     * Create a pattern using an image for the background. Repeating patterns depends on the extend value set using the set_extend() function.
     */
    pattern_create_for_surface(image: Image): Pattern;

    /**
     * Create a linear gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative
     * coordinates.
     */
    pattern_create_linear(x1: number, y1: number, x2: number, y2: number): Pattern;

    /**
     * Create a radial gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative
     * coordinates.
     */
    pattern_create_radial(x1: number, y1: number, rad1: number, x2: number, y2: number, rad2: number): Pattern;

    /**
     * Modifies the transform matrix by moving it by absolute (positive or negative) delta amounts.
     */
    translate(x: number, y: number): void;

    /**
     * Modifies the transform matrix that scales all X and Y values by the values provided.
     * Note: This affects everything from size to location, and also scales line widths.
     */
    scale(scale_x: number, scale_y: number): void;

    /**
     * Modifies the transform matrix by rotating it. The rotation values is in radians (2-pi for a complete rotation).
     */
    rotate(rad: number): void;

    /**
     * Directly modify the transform matrix (and therefore the user space) using six values. The xx and yy values provide scaling support, xy and yx provide rotational warping, and x0 and y0 provide
     * location offset.
     */
    transform(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

    /**
     * Directly set the tranform matrix for the current drawing context.
     */
    set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

    /**
     * Retrieve the current transform matrix for the current drawing context.
     */
    get_matrix(): number[];

    /**
     * Revert the transform matrix to default (normal) values.
     */
    identity_matrix(): void;

    /**
     * Given a user location (such as from get_current_point()), returns the device location. This helps find one’s position even with transform matrices in place.
     */
    user_to_device(pos: number[]): number[];

    /**
     * Given a device position, returns the user space location. This will determine a location despite user space deformation (using matrix transforms).
     */
    device_to_user(pos: number[]): number[];

    /**
     * Save the current Mgraphics state for later restoration. This is particularly useful when doing multiple transformations or matrix manipulation of the user space.
     */
    save(): void;

    /**
     * Restore the Mgraphics system to a previously saved state.
     */
    restore(): void;

    /**
     * Define a starting point for a path execution group. This group can be used for creating an image from a set of path functions without actually drawing the results to the screen.
     */
    push_group(): void;

    /**
     * Complete a path execution group, returning the results as an Image object. This image can be used for later drawing of the group results.
     */
    pop_group(): Image;

    /**
     * Set the color and alpha channels to be used for drawing routines.
     */
    // tslint:disable-next-line: unified-signatures
    set_source_rgba(rgba: number[]): void;

    /**
     * Set the color and alpha channels to be used for drawing routines.
     */
    // tslint:disable-next-line: unified-signatures
    set_source_rgba(rgb: number[], alpha: number): void;

    /**
     * Set the color and alpha channels to be used for drawing routines.
     */
    set_source_rgba(red: number, green: number, blue: number, alpha: number): void;

    /**
     * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
     */
    set_source_rgb(rgb: number[]): void;

    /**
     * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
     */
    set_source_rgb(red: number, green: number, blue: number): void;

    /**
     * Sets the pattern to be used for the next fill() call. The name parameter must be a previously created pattern.
     */
    set_source(pattern: Pattern): void;

    /**
     * Sets the provided surface as the source for drawing routines.
     * TODO: Surface type?
     */
    set_source_surface(surface: any): void;

    /**
     * Create a transform for the color and alpha channels using scale amounts to determine a color multiplier (either positive or negative). Note: One of the set_source_* routines must be called to
     * apply this transform to an actual color.
     */
    scale_source_rgba(red: number, green: number, blue: number, alpha: number): void;

    /**
     * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
     */
    scale_source_rgb(red: number, green: number, blue: number): void;

    /**
     * Create a transform for the color and alpha channels by absolute delta amounts to determine a color offset (either positive or negative). Note: One of the set_source_* routines must be called to
     * apply this transform to an actual color.
     */
    translate_source_rgba(red: number, green: number, blue: number, alpha: number): void;

    /**
     * Set the appearance of the end-point of a drawn line. The options are butt, round, or square.
     */
    set_line_cap(line_cap: "butt" | "round" | "square"): void;

    /**
     * Retrieve the appearance attribute of the current line_cap setting. The returned value is the same as the values used by set_line_cap.
     */
    get_line_cap(): "butt" | "round" | "square";

    /**
     * Set the appearance of the connection point between lines. The options are miter, round, or bevel.
     */
    set_line_join(line_join: "miter" | "round" | "bevel"): void;

    /**
     * Retrieve the appearance attribute of the current line_join setting. The returned value is the same as the values used by set_line_join.
     */
    get_line_join(): "miter" | "round" | "bevel";

    /**
     * Set the width of path lines drawn using the stroke() function. The width value is dependent on the coordinate system in use.
     */
    set_line_width(width: number): void;

    /**
     * Retrieve the current line width as a floating-point number.
     */
    get_line_width(): number;

    /**
     * Fill the path with the current source color. When the fill is completed, the path will be destroyed.
     */
    fill(): void;

    /**
     * Fill the path with the current source color, but do not destroy the path when the fill is completed.
     */
    fill_preserve(): void;

    /**
     * Fill the path with the current source color, but override the alpha value for a fill-specific transparency.
     */
    fill_with_alpha(alpha: number): void;

    /**
     * A combination of the two previous routines, this fills the path with the source color, but overrides the alpha value. It does not destroy the path when the fill is complete.
     */
    fill_preserve_with_alpha(alpha: number): void;

    /**
     * Place an image (typically stored as an Image object) into the current surface. The drawing is placed at the top-left of the drawing context, changeable using a transform matrix or translate
     * function. You can also choose the section of the image to draw using four optional arguments that describe a rectangle taken from the image.
     */
    // image_surface_draw(myImage: Image): void;
    image_surface_draw(
        myImage: Image,
        source_top?: number,
        source_left?: number,
        source_width?: number,
        source_height?: number,
    ): void;

    /**
     * Render an SVG file into the current user context.
     */
    svg_render(filename: string): void;

    /**
     * Given a fillable path, determine if a point is within the fill zone. Returns 0 (false) or 1 (true).
     */
    in_fill(...args: any[]): number;

    /**
     * Determine the enclosing rectangle for the current fill area. Returns an array that contains the top/left and bottom/right points of the fill area.
     */
    fill_extent(): number[];

    /**
     * Draw the outline of the path with the color and line size chosen. When the drawing is complete, the path is deleted.
     */
    stroke(): void;

    /**
     * Draw the outline of the path with the color and line size chosen, but do not destroy the path when completed. This is useful for situations where you need to both fill a path and draw its
     * outline.
     */
    stroke_preserve(): void;

    /**
     * Draw the outline of the path with the color and line size chosen, but override the alpha value of the color with a new alpha channel value. This allows you to change transparency without
     * resetting the color values.
     */
    stroke_with_alpha(alpha: number): void;

    /**
     * A combination of the above two routines, this will draw the line, preserve the path, and override the alpha value in a single routine call.
     */
    stroke_preserve_with_alpha(alpha: number): void;
}

/**
 * No Constructor. Object created by different MGraphics functions.
 * http://max-javascript-reference.tim-schenk.de/symbols/Pattern.html
 */
declare class Pattern {
    /**
     * A function called on a previously created pattern, the add_color_stop_rgba will define a color value for one of the influence points of the pattern.
     */
    add_color_stop_rgba(index: number, red: number, green: number, blue: number, alpha: number): void;

    /**
     * Returns the extend value of the pattern.
     */
    get_extend(): string;

    /**
     * Returns the current transform matrix for the pattern
     */
    get_matrix(): number[];

    /**
     * Returns the type of pattern that was created.
     */
    get_type(): string;

    /**
     * Revert the user space transform matrix to its default (normal) orientation.
     */
    identity_matrix(): void;

    /**
     * Apply a rotation transform on the user space in which the pattern is displayed.
     */
    rotate(rotation: number): void;

    /**
     * Scale the pattern by a factor in both X and Y coordinate spaces.
     */
    scale(x: number, y: number): void;

    /**
     * Determines how the pattern will be created when there is more space than available information.
     */
    set_extend(extend_type: string): void;

    /**
     * set_matrix(xx, xy, yx, yy, x0, y0)
     */
    set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

    /**
     * Apply a translation transform (spatial offset) on the user space in which the pattern is displayed.
     */
    translate(x: number, y: number): void;
}

/**
 * Sketch Every instance of jsui has an instance of Sketch bound to the variable "sketch". This is often the only instance of Sketch you will need to use. However, if you want to do things like render
 * sprites, have multiple layers of images, or use drawing commands to create alpha channels for images, then you can create additional instances to render in. By default, when any function in your
 * jsui object has been called the context is already set for the instance of Sketch bound to the variable "sketch". https://docs.cycling74.com/max7/vignettes/jssketchobject
 */
declare class Sketch {
    /**
     * create a new instance of Sketch with default width and height
     */
    constructor();

    /**
     * create a new instance of sketch with specified width and height
     */
    constructor(width: number, height: number);

    /**
     * Moves the drawing position to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
     */
    move(delta_x: number, delta_y: number, delta_z?: number): void;

    /**
     * Moves the drawing position to the location specified by the x, y, and z arguments.
     */
    moveto(x: number, y: number, z?: number): void;

    /**
     * Draws a point at the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location specified by the x, y, and z arguments.
     */
    point(x: number, y: number, z?: number): void;

    /**
     * Draws a line from the current drawing position to the location specified the sum of the current drawing position and the delta x, y, and z arguments. After this method has been called, the
     * drawing position is updated to the location specified by the sum of the current drawing position and the delta x, y, and z arguments.
     */
    line(delta_x: number, delta_y: number, delta_z?: number): void;

    /**
     * Draws a line from the current drawing position to the location specified by the x, y, and z arguments. After this method has been called, the drawing position is updated to the location
     * specified by the x, y, and z arguments.
     */
    lineto(x: number, y: number, z?: number): void;

    /**
     * Draws a line from the location specified by the x1, y1, and z1 arguments to the location specified by the x2, y2, and z2 arguments. After this method has been called, the drawing position is
     * updated to the location specified by the x2, y2, and z2 arguments.
     */
    linesegment(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    linesegment(x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Draws a filled triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location
     * specified by the x3, y3, and z3 arguments.
     */
    tri(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
    ): void;
    tri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

    /**
     * Draws a framed triangle with three corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, and z3 arguments. After this method has been called, the drawing position is updated to the location
     * specified by the x3, y3, and z3 arguments.
     */
    frametri(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
    ): void;

    /**
     * Draws a filled quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated
     * to the location specified by the x4, y4, and z4 arguments.
     */
    quad(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number,
    ): void;

    /**
     * Draws a framed quadrilateral with four corners specified by the x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, and z4 arguments. After this method has been called, the drawing position is updated
     * to the location specified by the x4, y4, and z4 arguments.
     */
    framequad(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number,
    ): void;

    /**
     * Draws a filled circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end
     * arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    circle(radius: number, theta_start: number, theta_end: number): void;

    /**
     * Draws a cube with width 2*scale_x, height 2*scale_y, depth 2*scale_z, and center point at the current drawing position. If the scale_y and scale_z arguments are not specified, they will assume
     * the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    cube(scale_x: number, scale_y: number, scale_z?: number): void;

    /**
     * Draws a cylinder with top radius specified by the radius1 argument, bottom radius specified by the radius2 argument, length specified by the mag argument, and center point at the current
     * drawing position. If the theta_start and theta_end arguments are specified, then a patch will be drawn instead of a full cylinder. The theta_start and theta_end arguments are in terms of
     * degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    cylinder(radius1: number, radius2: number, mag: number, theta_start: number, theta_end: number): void;

    /**
     * Draws a filled ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The
     * theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    ellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;

    /**
     * Draws a framed circle with radius specified by the radius argument. If theta_start and theta_end are specified, then an arc will be drawn instead of a full circle. The theta_start and theta_end
     * arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    framecircle(radius: number, theta_start: number, theta_end: number): void;

    /**
     * Draws a framed ellipse with radii specified by the radius1 and radius2 arguments. If theta_start and theta_end are specified, then an arc will be drawn instead of a full ellipse. The
     * theta_start and theta_end arguments are in terms of degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    frameellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;

    /**
     * Draws a plane with top width 2*scale_x1, left height 2*scale_y1, bottom width 2*scale_x2, right height 2*scale_y2, and center point at the current drawing position. If scale_y1 is not
     * specified, it will assume the same value as scale_x1. If scale_x2 and scale_y2 are not specified, they will assume the same values as scale_x1 and scale_y1 respectively. The current
     * shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    plane(scale_x1: number, scale_y1: number, scale_x2: number, scale_y2: number): void;

    /**
     * Draws a rounded plane with width 2*scale_x, and height 2*scale_y and center point at the current drawing position. The size of the rounded portion of the plane is determined by the round_amount
     * argument. If scale_y is not specified, it will assume the same value as scale_x. The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    roundedplane(round_amount: number, scale_x: number, scale_y: number): void;

    /**
     * Draws a sphere with radius specified by the radius argument and center point at the current drawing position. If the theta1_start, theta1_end, theta2_start, and theta2_end arguments are
     * specified, then a patch will be drawn instead of a full sphere. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of degrees(0-360). The current shapeorient,
     * shapeslice, and shapeprim values will also affect the drawing.
     */
    sphere(radius: number, theta1_start: number, theta1_end: number, theta2_start: number, theta2_end: number): void;

    /**
     * Draws a torus with major radius specified by the radius1 argument, minor radius specified by the radius2 argument, and center point at the current drawing position. If theta1_start, theta1_end,
     * theta2_start, and theta2_end are specified, then a patch will be drawn instead of a full torus. The theta1_start, theta1_end, theta2_start, and theta2_end arguments are in terms of
     * degrees(0-360). The current shapeorient, shapeslice, and shapeprim values will also affect the drawing.
     */
    torus(
        radius1: number,
        radius2: number,
        theta1_start: number,
        theta1_end: number,
        theta2_start: number,
        theta2_end: number,
    ): void;

    /**
     * Sets the rotation for drawing internal to any of the "shape" drawing methods to the rotation specified by the x_rot, y_rot, and rotation_x, rotation_y, and rotation_z arguments. See
     * documentation for an example.
     */
    shapeorient(rotation_x: number, rotation_y: number, rotation_z?: number): void;

    /**
     * Sets the number of slices to use when rendering any of the "shape" drawing methods. Increasing the slice_a and slice_b arguments will increase the quality at which the shape is rendered, while
     * decreasing these values will improve performance.
     */
    shapeslice(slice_a: number, slice_b: number): void;

    /**
     * Sets the OpenGL drawing primitive to use within any of the "shape" drawing methods. Acceptable values for the draw_prim argument are the following strings: lines, line_loop, line_strip, points,
     * polygon, quads, quad_grid, quad_strip, triangles, tri_grid, tri_fan, tri_strip.
     */
    shapeprim(draw_prim: string): void;

    /**
     * Sets the current font to the fontname specified by the fontname argument.
     */
    font(fontname: string): void;

    /**
     * Sets the fontsize to the size specified by the points argument. Note that this size is an absolute, rather than relative value.
     */
    fontsize(points: number): void;

    /**
     * Returns an array containing the width and height of the given string in absolute screen coordinates, taking into account the current font and fontsize.
     */
    gettextinfo(str: string): number[];

    /**
     * Draws the text specified by the string argument at the current drawing position, taking into account the current font, fontsize, and text alignment. Text is strictly 2D, and does not take into
     * account any world transformations. After calling the text method, if the x axis text alignment is set to "left", the current drawing position will be updated to reflect the world position
     * associated with the end of the string. If the x axis text alignment is set to "right", the current drawing position will be updated to reflect the world position associated with the end of the
     * string. If the x axis text alignment is set to "center", the current drawing position will remain unchanged.
     */
    text(str: string): void;

    /**
     * Sets the alignment of text to be drawn with respect to the current drawing position. Acceptable values for the x axis alignment are: "left", "right", or "center". Acceptable values for the y
     * axis alignment are: "bottom", "top", or "center". The default alignment is "left", "bottom".
     */
    textalign(align_x: string, align_y: string): void;

    /**
     * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can
     * be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of
     * pixels is supported. The source object can either be an instance of Image, or Sketch. If blending is enabled in the destination sketch object, alpha blending will be performed and the current
     * alpha color will also be applied globally. The copypixels method is much faster than obtaining the equivalent result using glbindtexture() to texture a plane, and is the recommended means of
     * drawing images when scaling and rotation is not required.
     */
    copypixels(
        source_object: string,
        destination_x: number,
        destination_y: number,
        source_x: number,
        source_y: number,
        width: number,
        height: number,
    ): void;

    /**
     * Returns the depth value associated with the currently rendered pixel at a given absolute screen coordinate.
     */
    depthatpixel(x: number, y: number): number;

    /**
     * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS
     * allocated memory. Once called, the Sketch object is not available for any other use.
     */
    freepeer(): void;

    /**
     * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point
     * numbers in the range 0.-1.
     */
    getpixel(x: number, y: number): number[];

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    setpixel(x: number, y: number, red: number, green: number, blue: number, alpha: number): void;

    /**
     * Returns an array containing the x, y, and z world coordinates associated with a given screen pixel using the same the depth from the camera as 0,0,0. Optionally a third depth arg may be
     * specified, which may be useful for hit detection and other applications. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping
     * plane. The worldtoscreen method can be used to determine the depth value of a given world coordinate. The depthatpixel method can be used to determine the depth value associated with the
     * currently rendered pixel at a given absolute screen coordinate.
     */
    screentoworld(x: number, y: number): number[];

    /**
     * Returns an array containing the x, y, and depth screen coordinates associated with a given world coordinate. The depth value is typically specified in the range 0.-1. where 0 is the near
     * clipping plane, and 1. is the far clipping plane.
     */
    worldtoscreen(x: number, y: number, z?: number): number[];

    /**
     * Begin definition of a stroked path of the style specified by the stroke_style argument. Currently supported stroke styles are "basic2d" and "line".
     */
    beginstroke(stroke_style: "basic2d" | "line"): void;

    /**
     * End definition of a stroked path, and render the path.
     */
    endstroke(): void;

    /**
     * Set the current value of the parameter specified by the parameter_name argument to be the value specified by parameter_values argument(s). Some parameters are global for the extent of a stroked
     * path definition, while others may vary on a point by point basis.
     */
    strokeparam(parameter_name: string, ...args: any[]): void;

    /**
     * Defines an anchor point at the location specified by the x, y, and z arguments. Some stroke styles such as "basic2d" will ignore the z coordinate.
     */
    strokepoint(x: number, y: number, z?: number): void;

    /**
     * The default2d method is a simple way to set the graphics state to default properties useful for 2D graphics. It is called everytime your object is resized if default2d() has been called more
     * recently than default3d().
     */
    default2d(): void;

    /**
     * The default3d method is a simple way to set the graphics state to default properties useful for 3D graphics. It is called everytime the jsui object is resized if default3d() has been called
     * more recently than default2d().
     */
    default3d(): void;

    /**
     * The orth3d method is a simple way to set the graphics state to default properties useful for 3D graphics, using an orthographic projection (i.e. object scale is not affected by distance from
     * the camera). It is called every time the jsui object is resized if ortho3d() has been called more recently than default2d(), or default3d().
     */
    ortho3d(): void;

    glbegin(draw_prim: any[]): void;
    glbindtexture(image_object: string): void;
    glblendfunc(src_function: string, dst_function: string): void;
    glclear(): void;
    glclearcolor(red: number, green: number, blue: number, alpha: number): void;
    glcleardepth(depth: number): void;
    glclipplane(plane: number, coeff1: number, coeff2: number, coeff3: number, coeff4: number): void;
    glcolor(red: number, green: number, blue: number, alpha: number): void;
    glcolormask(red: number, green: number, blue: number, alpha: number): void;
    glcolormaterial(face: number, mode: any[]): void;
    glcullface(face: number): void;
    gldepthmask(on: number): void;
    gldepthrange(near: number, far: number): void;
    gldisable(capability: number): void;
    gldrawpixels(image: string): void;
    gledgeflag(on: number): void;
    glenable(capability: number): void;
    glend(): void;
    glfinish(): void;
    glflush(): void;
    glfog(parameter_name: string, value: number): void;
    glfrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    glhint(target: string, mode: number): void;
    gllight(light: string, parameter_name: string, value: number): void;
    gllightmodel(parameter_name: string, value: number): void;
    gllinestipple(factor: any[], bit_pattern: any[]): void;
    gllinewidth(width: number): void;
    glloadidentity(): void;
    glloadmatrix(matrix_array: number[]): void;
    gllogicop(opcode: any[]): void;
    glmaterial(): void;
    glmatrixmode(mode: string): void;
    glmultmatrix(matrix_array: any[]): void;
    glnormal(x: number, y: number, z?: number): void;
    glortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    glpointsize(size: number): void;
    glpolygonmode(): void;
    glpolygonoffset(): void;
    glpopattrib(): void;
    glpopmatrix(): void;
    glpushattrib(): void;
    glpushmatrix(): void;
    glrect(x1: number, y1: number, x2: number, y2: number): void;
    glrotate(angle: number, x: number, y: number, z?: number): void;
    glscale(x_scale: number, y_scale: number, z_scale?: number): void;
    glscissor(x: number, y: number, width: number, height: number): void;
    glshademodel(mode: any[]): void;
    gltexcoord(s: number[], t: number[]): void;
    gltexenv(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
    gltexgen(coord: number[], parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
    gltexparameter(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
    gltranslate(delta_x: number, delta_y: number, delta_z?: number): void;
    glulookat(
        eye_x: number,
        eye_y: number,
        eye_z: number,
        center_x: number,
        center_y: number,
        center_z: number,
        up_x: number,
        up_y: number,
        up_z: number,
    ): void;
    glulookat(eye_x: number, eye_y: number, center_x: number, center_y: number, up_x: number, up_y: number): void;
    gluortho2d(left: number, right: number, bottom: number, top: number): void;
    gluperspective(fovy: number, aspect: number, near: number, far: number): void;
    glvertex(x: number, y: number, z?: number): void;
    glviewport(x: number, y: number, width: number, height: number): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Image                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsimageobject

/**
 * Image The Image object can be used to draw images in an instance of the Sketch. It is possible to load image files from disk, create images from instances of Sketch, or generate them manually. The
 * Image object has several methods to assist in manipulating images once generated. Note that alphablending is on by default in sketch. Certain file formats which contain alpha channels such as PICT
 * or TIFF may have their alpha channel set all off. File formats which do not contain an alpha channel such as JPEG, by default have an alpha channel of all on. If you are having trouble seeing an
 * image when attempting to draw in an instance of Sketch, you may want to either turn off blending with gldisable("blend"), or set the alpha channel to be all on with clearchannel("alpha",1.).
 * https://docs.cycling74.com/max7/vignettes/jsimageobject
 */
declare class Image {
    /**
     * create a new Image instance with default width and height or from:
     * a file from disk
     * another instance of Image
     * an instance of Sketch
     */
    constructor(filename?: string | Image | Sketch);

    /**
     * Create a new Image instance with the specified witdth and height
     */
    // tslint:disable-next-line: unified-signatures
    constructor(width: number, height: number);

    /**
     * Access or set the size of an image. size[0] is width size[1] is height.
     */
    size: number[];

    /**
     * Adjusts all channel values in the image channel specified by the channel argument, by multiplying the channel value by the value specified by the scale argument and then adding the value
     * specified by the bias argument. The resulting channel is clipped to the range 0.-1. Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
     */
    adjustchannel(channel: "red" | "green" | "blue" | "alpha", scale: number, bias: number): void;

    /**
     * Generates an alpha channel based on the chromatic distance from the specified RGB target color. If no tolerance, fade or minkey arguments are specified they are assumed to be 0. If no maxkey
     * argument is specified, it is assumed to be 1.
     */
    alphachroma(
        red: number,
        green: number,
        blue: number,
        tolerance: number,
        fade: number,
        minkey: number,
        maxkey?: number,
    ): void;

    /**
     * Similar to the copychannel method, except supports a blend amount specified by the alpha argument. The source object can only be an instance of Image (not Sketch). If the source object is not
     * the same size as the destination object, then rectangle composed of the minimum width and height of each, is the rectangle of values which will be blended. Acceptable values for the channel
     * arguments are the strings: "red", "green", "blue", or "alpha".
     */
    blendchannel(
        source_object: any,
        alpha: number,
        source_channel: "red" | "green" | "blue" | "alpha",
        destination_channel: "red" | "green" | "blue" | "alpha",
    ): void;

    /**
     * Similar to the copypixels method, except supports alpha blending, including a global alpha value specified by the alpha argument. This global alpha value is multiplied by the source object's
     * alpha channel at each pixel. Instances of Sketch do not contain an alpha channel, which is assumed to be all on. The source object can either be an instance of Image, or Sketch.
     */
    blendpixels(
        source_object: any,
        alpha: number,
        dest_x: number,
        dest_y: number,
        rc_x: number,
        src_y: number,
        width: number,
        height: number,
    ): void;

    /**
     * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
     */
    clear(): void;

    /**
     * Sets all pixels in the image to be the value specified by the red, green, blue, and alpha arguments. If no arguments are specified, these values are assumed to be (0, 0, 0, 1) respectively.
     */
    clear(red: number, green: number, blue: number, alpha: number): void;

    /**
     * Sets all channel values in the image channel specified by the channel argument to be the value specified by the value argument. If no value argument is specified, it is assumed to be 0.
     * Acceptable values for the channel argument are the strings: "red", "green", "blue", or "alpha".
     */
    clearchannel(channel: "red" | "green" | "blue" | "alpha", value: number): void;

    /**
     * Copies the channel values from the source object's channel specified by the source_channel argument to the destination object's channel specified by the destination_channel argument. The source
     * object can only be an instance of Image (not Sketch). If the source object is not the same size as the destination object, then rectangle composed of the minimum width and height of each, is
     * the rectangle of values which will be copied. Acceptable values for the channel arguments are the strings: "red", "green", "blue", or "alpha".
     */
    copychannel(
        source_object: string,
        source_channel: "red" | "green" | "blue" | "alpha",
        destination_channel: "red" | "green" | "blue" | "alpha",
    ): void;

    /**
     * Copies pixels from the source object to the location specified by the destination_x and destination_y arguments. The initial x and y offset into the source and size of the rectangle copied can
     * be speified by the source_x, source_y, width and height arguments. If these are not present an x and y offset of zero and width and height equal to the source image is assumed. No scaling of
     * pixels is supported. The source object can either be an instance of Image, or Sketch.
     */
    copypixels(
        source_object: string,
        dest_x: number,
        dest_y: number,
        src_x: number,
        src_y: number,
        width: number,
        height: number,
    ): void;

    /**
     * Flips the image horizontally and or vertically. Arguments can be 0 or 1, where 0 is no flip, and 1 is flip.
     */
    flip(horizontal_flip: 0 | 1, vertical_flip: 0 | 1): void;

    /**
     * Frees the image data from the native c peer, which is not considered by the JavaScript garbage collector, and may consume lots of memory until the garbage collector decides to run based on JS
     * allocated memory. Once called, the Image object is not available for any other use.
     */
    freepeer(): void;

    /**
     * Copies the pixels from the jit.matrix object specified by matrixname to the image.
     */
    fromnamedmatrix(matrixname: string): void;

    /**
     * Returns an array containing the pixel value at the specified location. This array is ordered RGBA, i.e. array element 0 is red, 1, green, 2, blue, 3 alpha. Color values are floating point
     * numbers in the range 0.-1.
     */
    getpixel(x: number, y: number): number[];

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(x: number, y: number, red: number, green: number, blue: number, alpha?: number): void;

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(x: number, y: number, rgba: number[]): void;

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(x: number, y: number, rgb: number[], a?: number): void;

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(position: number[], red: number, green: number, blue: number, alpha: number): void;

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(position: number[], rgba: number[]): void;

    /**
     * Sets the pixel value at the specified location. Color values are floating point numbers in the range 0.-1.
     */
    // tslint:disable-next-line: unified-signatures
    setpixel(position: number[], rgb: number[], a?: number): void;

    /**
     * Swaps the axes of the image so that width becomes height and vice versa. The effective result is that the image is rotated 90 degrees counter clockwise, and then flipped vertically.
     */
    swapxy(): void;

    /**
     * Copy the pixels from the image to the jit.matrix object specified by matrixname.
     */
    tonamedmatrix(matrixname: string): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaxCanvas                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class MaxCanvas {
    // TODO:
    // if (!jsui || !(jsui instanceof js)) {
    //      post("missing or wrong argument for MaxCanvas, call \"new MaxCanvas(this);\"\n");
    //      return;
    // }
    constructor(jsui: object);
    getContext(type: "max-2d"): CanvasRenderingContext2D;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasRenderingContext2D                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasRenderingContext2D {
    constructor(maxCanvas: MaxCanvas);
    save(): void;
    restore(): void;
    scale(x: number, y: number): void;
    rotate(x: number): void;
    translate(x: number, y: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    createPattern(image: Image, repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"): CanvasPattern;
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise: number): void;
    fill(): void;
    stroke(): void;
    isPointInPath(x: number, y: number): boolean;
    fillText(text: string, x: number, y: number, maxWidth: number): void;
    strokeText(text: string, x: number, y: number, maxWidth: number): void;
    measureText(text: string): number;
    drawImage(image: Image, dx: number, dy: number): void;
    drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(
        image: Image,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
    ): void;
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    // getImageData(): ... not yet implemented in CanvasExtension.js
    putImageData(
        imagedata: ImageData,
        dx: number,
        dy: number,
        not_used_dirtyX: number,
        not_used_dirtyY: number,
        not_used_dirtyWidth: number,
        not_used_dirtyHeight: number,
    ): void;
    redraw(): void;
    paint(): void;
    roundedRect(x: number, y: number, w: number, h: number, ow: number, oh: number): void;
    setTimeout(expression: object, timeout: number): Task;
    clearInterval(task: Task): void;
    setSource(style: CanvasPattern | CanvasGradient | string): void;
    parseFontString(font: string): any[];
    getTextAlign(textString: string): number;
    getTextBaseline(): number;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasGradient                                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasGradient {
    constructor(patternObj: Pattern, radiHelper: any); // TODO: radiHelper: any ?
    addColorStop(offset: number, color: any): void; // TODO: color: any ?
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPattern                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tslint:disable-next-line: no-unnecessary-class
declare class CanvasPattern {
    constructor(pat: any, rep: any); // TODO: any?
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ImageData                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class ImageData {
    constructor(sketchimage: any); // TODO: any?
    set(index: number, value: number): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPixelArray                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasPixelArray {
    readonly length: number;
    array(index: number): number;
    array(index: number, value: number): void;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RGBAColor                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class RGBAColor {
    constructor(color: string, globalAlpha: number);
    readonly ok: boolean;
    r: number;
    g: number;
    b: number;
    a: number;
    toRGB(): string;
    toHex(): string;
}

declare function hslToRgba(h: number, s: number, l: number, a: number): number[];

/**
 * JitterObject
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterObject.html
 */
declare class JitterObject extends Maxobj {
    /**
     * Creates Jitter objects. (use JitterMatrix for jit.matrix)
     */
    constructor(object_name: string, ...params: any[]);

    /**
     * Deletes the JitterObject
     */
    freepeer(): void;

    /**
     * [getregisteredname description]
     */
    getregisteredname(): string;
}

/**
 * JitterMatrix The jit.matrix object is a named matrix which may be used for data storage and retrieval, resampling, and matrix type and planecount conversion operations.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterMatrix.html
 */
declare class JitterMatrix extends JitterObject {
    constructor(...args: any[]); // TODO:
    // From JitterReposUtils.js:
    // var s = new JitterMatrix(2, "long", x, y);

    /**
     * Matrix adaptation flag.
     */
    adapt: number;

    // TODO: Probably number[] for this and the following {any}.

    /**
     * The dimensions of matrix data.
     */
    dim: any;

    /**
     * The byte stride per dimension.
     */
    dimstride: any;

    /**
     * The destination dimension end position.
     */
    dstdimend: any;

    /**
     * The destination dimension start position.
     */
    dstdimstart: any;

    /**
     * Matrix interpolation flag.
     */
    interp: number;

    /**
     * The name of the matrix.
     */
    name: string;

    /**
     * The number of planes in matrix data.
     */
    planecount: number;

    /**
     * Maps input places to output planes.
     */
    planemap: any;

    /**
     * Total byte size of matrix.
     */
    size: number;

    /**
     * The source dimension end position.
     */
    srcdimend: any;

    /**
     * The source dimension start position.
     */
    srcdimstart: any;

    /**
     * The matrix data type.
     */
    type: string;

    /**
     * Destdim use flag.
     */
    usedstdim: number;

    /**
     * Srcdim use flag.
     */
    usesrcdim: number;

    /**
     * Outputs the currently stored matrix.
     */
    bang(): void;

    /**
     * Sets all matrix values to zero.
     */
    clear(): void;

    /**
     * Export the current frame as an image file with the name specified by the first argument.
     */
    exportimage(filename: string, file_type: string, use_dialog: 0 | 1): void;

    /**
     * Exports a matrix as a QuickTime movie.
     */
    exportmovie(filename: string, FPS: number, codec: string, quality: string, timescale: number): void;

    /**
     * exprfill(plane, expression)
     */
    exprfill(plane: number, expression: string): void;

    /**
     * The word fillplane, followed by an integer that specifies a plane number and a value, will fill the specified plane with the single value.
     */
    fillplane(plane: number, value: number): void;

    /**
     * Sets all cells to the value specified by value(s) and output the data.
     */
    float(values: number[]): void;

    /**
     * Sends the value(s) in the cell specified by position out the right outlet of the object as a list in the form cell cell-position0.
     */
    getcell(position: number[]): void;

    /**
     * Imports a QuickTime movie into the matrix.
     */
    importmovie(filename: string, time_offset: number): void;

    /**
     * Sets all cells to the value specified by value(s) and output the data.
     */
    int(values: number[]): void;

    /**
     * Copies the texture specified by texture-name to the matrix.
     */
    jit_gl_texture(texture_name: string): void;

    /**
     * Sets all cells to the value specified by value(s) and output the data.
     */
    list(values: number[]): void;

    /**
     * The word op, followed by the name of a jit.op object operator and a set of values, is equivalent to including a jit.op object with the specified operator set as an attribute and this jit.matrix
     * object specified as the output matrix.
     */
    op(...params: any[]): void;

    /**
     * Reads Jitter binary data files (.jxf) into a matrix set.
     */
    read(filename: string): void;

    /**
     * Sets all cells to the value specified by value(s).
     */
    setall(values: number[]): void;

    /**
     * Sets the cell specified by position to the value specified by value.
     */
    setcell(position: number[], plane: number, plane_number: number, val: number | number[], values: number[]): void;

    /**
     * The word setcell1d, followed by a number specifying an x coordinate and a list of values, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (1) is fixed.
     */
    setcell1d(...params: number[]): void;

    /**
     * The word setcell2d, followed by a pair of numbers specifying x and y coordinates and a list of values, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (2) is fixed.
     */
    setcell2d(...params: number[]): void;

    /**
     * The word setcell3d, followed by three numbers specifying x, y, and z coordinates and a list of values, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (3) is fixed.
     */
    setcell3d(...params: number[]): void;

    /**
     * The word setplane1d, followed by a number specifying an x coordinate, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
     */
    setplane1d(...params: number[]): void;

    /**
     * The word setplane2d, followed by a pair of numbers specifying x and y coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (2) is fixed, or use the "plane" token to specify which plane to set.
     */
    setplane2d(...params: number[]): void;

    /**
     * The word setplane3d, followed by three numbers specifying x, y, and z coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a
     * "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
     */
    setplane3d(...params: number[]): void;

    /**
     * Sets all cells to the value specified by value(s).
     */
    val(...params: number[]): void;

    /**
     * Writes matrix set as a Jitter binary data file (.jxf).
     */
    write(filename: string): void;
}

/**
 * JitterReposUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterReposUtils.html
 */
// tslint:disable-next-line: no-unnecessary-class
declare class JitterReposUtils {
    static interpbits: number;

    static cartopolmatrix2dfloat32(impulse: JitterMatrix, xs: number, ys: number, issigned: boolean): JitterMatrix;
    static genkernel2dfloat32(): JitterMatrix;
    static makemap_cartopol(x: number, y: number, xscale: number, yscale: number): JitterMatrix;
    static makemap_multi(x: number, y: number, xscale: number, yscale: number): JitterMatrix;
    static makemap_normal(x: number, y: number): JitterMatrix;
    static makemap_pinch(
        x: number,
        y: number,
        kx: number,
        ky: number,
        xpinch: number,
        ypinch: number,
        xamp: number,
        yamp: number,
        power: number,
    ): JitterMatrix;
    static pack2plane(uno: JitterMatrix, dos: JitterMatrix): JitterMatrix;
    static pinch2dfloat32(
        impulse: JitterMatrix,
        xpinch: number,
        ypinch: number,
        xamp: number,
        yamp: number,
        power: number,
    ): JitterMatrix;
    static rel2abs(rela: JitterMatrix): JitterMatrix;
    static unpack2plane(cero: JitterMatrix, uno: JitterMatrix, dos: JitterMatrix): void;
    static upsample1d(inmat: JitterMatrix, l: number): JitterMatrix;
    static upsample2d(inmat: JitterMatrix, x: number, y: number): JitterMatrix;
}

/**
 * JitterListener
 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event. Our JitterListener object is set
 * to listen to our jit.window object (mywindow). The getregisteredname() property of a JitterObject object returns the name by which that object can be accessed by the JitterListener (in the case of
 * jit.window objects, this will be the same as name of the drawing context). Whenever our jit.window object generates an event, a function called thecallback() will be triggered in our JavaScript
 * code. Now that we’ve instantiated a JitterListener, we can (in most cases) leave it alone and simply deal with the mechanics of the callback function it triggers in response to an event from the
 * object it listens to. http://max-javascript-reference.tim-schenk.de/symbols/JitterListener.html
 */
declare class JitterListener extends JitterObject {
    /**
     * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event.
     */
    constructor(object_name: string, callback: (event: any) => void);

    /**
     * The callback function to handle the event
     */
    function: (event: any) => void;

    /**
     * The object to listen to.
     */
    object: JitterObject;

    /**
     * Unknown
     */
    subjectname: string;
}

/**
 * JitterGUIUtils
 * classes for managing 3D UI objects.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIUtils.html
 */
// tslint:disable-next-line: no-unnecessary-class
declare class JitterGUIUtils {
    static trackers: JitterGUITracker[];
    static add_client(dest: any, newclient: any): any;
    static add_tracker(dest: any): any;
    static delete_bogus_clients(dest: any): any;
    static init(dest: any): any;
}

/**
 * JitterGUITracker
 * Data and interface are considered private. arbitrates between subclasses of JitterGUIElement on a given render destination.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUITracker.html
 */
declare class JitterGUITracker {
    constructor(dest: any);
    add_client(newclient: any): any;
    delete_bogus_clients(): any;
    delete_duplicate_clients(newclient: any): any;
    make_listener(): any;
}

/**
 * JitterEvent
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterEvent.html
 */
declare class JitterEvent {
    /**
     * depends on event type
     */
    args: any;

    /**
     * Name of the event to be handled
     */
    eventname: string;

    /**
     * The name of the object to listen to.
     */
    subjectname: string;
}

/**
 * JitterGUIElement
 * Subclass this to make a UI object.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIElement.html
 */
declare class JitterGUIElement {
    constructor(mobj: any);
    delete_me: any;
    destination: any;
    frontmost: any;
    highlight: any;
    intersect: any;
    jitterobj: JitterObject;
    localint: number[];
    maxobj: Maxobj;
    stilldown: any;

    /**
     * set true to get events even if we are behind another object
     */
    unblockable: boolean;
    unique_index: any;
    val: number;
    was_frontmost: any;
    worldint: number[];
    drawto(destination: any): void;
    free(): any;

    /**
     * return the intersection of the unit quad in world space with the line defined by raystart and rayend.
     */
    get_intersect(raystart: any, rayend: any, p1: any): any;
    handle_event(event: JitterEvent): any;

    /**
     * set the drawing destination.
     */
    init(destination: any): any;

    /**
     * parse jitter-style js arguments.
     */
    set_attr_args(...args: any[]): void;

    /**
     * adding the unique_index property allows one js instance to own multiple JitterGUIElements
     */
    set_unique_index(k: any): any;
    update(): any;
}

/**
 * Jitter3dUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/Jitter3dUtilsInterface.html
 * Max folder/jsextensions/jitter/Jitter3DUtils.js
 */
// tslint:disable-next-line: no-unnecessary-class
declare class Jitter3DUtils {
    /**
     * add quats
     */
    static add_quats(q1: number[], q2: number[], q3: number[]): void;

    /**
     * convert angle/axis rotation to quaternion.
     */
    static axis_to_quat(axis: number[], quat: number[]): void;

    /**
     * build rotation matrix m for the quaternion q.
     */
    static build_rotmatrix(m: number[], q: number[]): void;

    /**
     * set p1 to the point on sphere closest to line segment.
     */
    static closest_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): void;

    /**
     * return true if the ray defined by the line's two points intersects the quad.
     */
    static intersect_line_quad(
        line_a: number[],
        line_b: number[],
        pos: number[],
        rot: number[],
        scale: number[],
        p1: number[],
        p2: number[],
    ): boolean;

    /**
     * if the ray defined by the line's two points intersects the sphere, set p1 to the closest point of intersection.
     */
    static intersect_line_sphere(
        line_a: number[],
        line_b: number[],
        center: number[],
        r: number,
        p1: number[],
    ): boolean;

    /**
     * [normalize_quat description]
     */
    static normalize_quat(q: number[]): void;

    /**
     * convert quaternion to angle/axis rotation.
     */
    static quat_to_axis(quat: number[], axis: number[]): void;

    /**
     * [transform_point description]
     */
    static transform_point(p_in: number[], m: number[]): void;

    /**
     * add src1 and src2, save the result in dst
     */
    static vadd(src1: number[], src2: number[], dst: number[]): void;

    /**
     * copy the three indicies from v1 to v2
     */
    static vcopy(v1: number[], v2: number[]): void;

    /**
     * create the cross product of v1 and v2?
     */
    static vcross(v1: number[], v2: number[], cross: number[]): void;

    /**
     * divide src1 and src2, save the result in dst
     */
    static vdiv(src1: number[], src2: number[], dst: number[]): void;

    /**
     * [vdot description]
     */
    static vdot(v1: number[], v2: number[]): number;

    /**
     * distance-squared function
     */
    static vlength(v: number[]): number;

    /**
     * cheaper distance-squared function
     */
    static vlength2(v: number[]): number;

    /**
     * multiply src1 and src2, save the result in dst
     */
    static vmul(src1: number[], src2: number[], dst: number[]): void;

    /**
     * [vnormal description]
     */
    static vnormal(v: number[]): void;

    /**
     * scale the vector
     */
    static vscale(v: number[], div: number): void;

    /**
     * set all three indicies of v to x, y, z
     */
    static vset(v: number[], x: number, y: number, z: number): void;

    /**
     * subtract src1 and src2, save the result in dst
     */
    static vsub(src1: number[], src2: number[], dst: number[]): void;

    /**
     * set all three indicies of v to 0.0
     */
    static vzero(v: number[]): void;

    /**
     * convert rotation in Euler angles (xyz) to angle/axis rotation.
     */
    static xyz_to_axis(xyz: number[], axis: number[]): void;
}
