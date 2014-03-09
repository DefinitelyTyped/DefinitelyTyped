// Type definitions for microsoft asp.net ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

//#region Global Namespace

/**
* Global Namespace
* This section includes members or types that extend the ECMAScript (JavaScript) Global object and other core objects.
* @see {@link http://msdn.microsoft.com/en-us/library/bb310818(v=vs.100).aspx}
*/

//#region JavaScript Base Type Extensions

/**
* Provides extensions to the base ECMAScript (JavaScript) Array functionality by adding static methods.
* Array Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb383786(v=vs.100).aspx}
*/
interface Array<T> {
    /**
    * Adds an element to the end of an Array object.
    */
    add(element: T): void;
    /**
    * Copies all the elements of the specified array to the end of an Array object.
    */
    addRange(array: T, items: T): void;
    /**
    * Removes all elements from an Array object.
    */
    clear(): void;
    /**
    * Creates a shallow copy of an Array object.
    */
    clone(): Array<T>;
    /**
    * Determines whether an element is in an Array object.
    */
    contains(element: T): boolean;
    /**
    * Removes the first element from an Array object.
    */
    dequeue(): T;
    /**
    * Adds an element to the end of an Array object. Use the add function instead of the Array.enqueue function.
    */
    enqueue(element: T): void;
    /**
    * Performs a specified action on each element of an Array object.
    */
    forEach(array: T[], method: Function, instance: T[]): void;
    /**
    * Searches for the specified element of an Array object and returns its index.
    */
    indexOf(array: T[], item: T, startIndex?: number): number;
    /**
    * Inserts a value at the specified location in an Array object.
    */
    insert(array: T[], index: number, item: T);
    /**
    * Creates an Array object from a string representation.
    */
    parse(value: string): any[];
    /**
    * Removes the first occurrence of an element in an Array object.
    */
    remove(array: T[], item: T): boolean;
    /**
    * Removes an element at the specified location in an Array object.
    */
    removeAt(array: T[], index: number): void;
}

/**
* Provides extensions to the base ECMAScript (JavaScript) Boolean object. 
* Boolean Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397557(v=vs.100).aspx}
*/
interface Boolean {
    /**
    * Converts a string representation of a logical value to its Boolean object equivalent.
    */
    parse(value: string): boolean;
}

/**
* Provides extensions to the base ECMAScript (JavaScript) Date object.
* Date Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb310850(v=vs.100).aspx}
*/
interface Date {
    /**
    * Formats a date by using the invariant (culture-independent) culture.
    */
    format(value: string): string;
    /**
    * Formats a date by using the current culture. This function is static and can be invoked without creating an instance of the object.
    */
    localeFormat(value: string): string;
    /**
    * Creates a date from a locale-specific string by using the current culture. This function is static and can be invoked without creating an instance of the object.
    * @exception (Debug) formats contains an invalid format.
    * @param value
    *           A locale-specific string that represents a date.
    * @param formats
    *           (Optional) An array of custom formats.
    */
    parseLocale(value: string): string;
    parseLocale(value: string, formats?: string[]): string;
    parseLocale(value: string, ...formats: string[]): string;
    /**
    * Creates a date from a string by using the invariant culture. This function is static and can be invoked without creating an instance of the object.
    * @return If value is a valid string representation of a date in the invariant format, an object of type Date; otherwise, null.
    * @param value
    *           A locale-specific string that represents a date.
    * @param formats
    *           (Optional) An array of custom formats.
    */
    parseInvariant(value: string): string;
    parseInvariant(value: string, formats?: string[]): string;
    parseInvariant(value: string, ...formats: string[]): string;
}

/**
* Provides static functions that extend the built-in ECMAScript (JavaScript) Error type by including exception details and support for application-compilation modes (debug or release).
* Error Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb310947(v=vs.100).aspx}
*/
interface Error {
    /**
    * Creates an Error object that represents the Sys.ParameterCountException exception.
    */
    parameterCount(message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.NotImplementedException exception.
    */
    notImplemented(message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.ArgumentException exception.
    */
    argument(paramName?: any, message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.ArgumentNullException exception.
    */
    argumentNull(paramName?: any, message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.ArgumentOutOfRangeException exception.
    */
    argumentOutOfRange(paramName?: string, actualValue?: any, message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.ArgumentTypeException exception.
    */
    argumentType(paramName?: string, actualType?: any, expectedType?: any, message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.ArgumentUndefinedException exception.
    */
    argumentUndefined(paramName?: string, message?: string): Error;
    /**
    * Creates an Error object that can contain additional error information.
    */
    create(message?: string, errorInfo?: Object): Error;
    /**
    * Creates an Error object that represents the Sys.FormatException exception.
    */
    format(message?: string): Error;
    /**
    * Creates an Error object that represents the Sys.InvalidOperationException exception.
    */
    invalidOperation(message?: string): Error;
    /**
    * Updates the fileName and lineNumber properties of an Error instance to indicate where the error was thrown instead of where the error was created. Use this function if you are creating custom error types.
    */
    popStackFrame(): void;
}

/**
* Extends the base ECMAScript (JavaScript) Number functionality with static and instance methods.
* Number Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb310835(v=vs.100).aspx}
*/
interface Number {
    /**
    * Formats a number by using the invariant culture.
    */
    format(format: string): string;
    /**
    * Formats a number by using the current culture.
    */
    localeFormat(format: string): string;
    /**
    * Returns a numeric value from a string representation of a number. This function is static and can be called without creating an instance of the object.
    */
    parseInvariant(format: string): number;
    /**
    * Creates a numeric value from a locale-specific string.
    */
    parseLocale(format: string): number;
}

/**
* Provides extended reflection-like functionality to the base ECMAScript (JavaScript) Object object.
* Object Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397554(v=vs.100).aspx}
*/
interface Object {
    /**
    * Formats a number by using the invariant culture.
    */
    getType(instance: any): Type;
    /**
    * Returns a string that identifies the run-time type name of an object.
    */
    getTypeName(instance: any): string;
}

/**
* Provides extensions to the base ECMAScript (JavaScript) String object by including static and instance methods.
* String Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397472(v=vs.100).aspx}
*/
interface String {
    /**
    * Formats a number by using the invariant culture.
    * @returns true if the end of the String object matches suffix; otherwise, false.
    */
    endsWith(suffix: string): boolean;
    /**
    * Replaces each format item in a String object with the text equivalent of a corresponding object's value.
    * @returns A copy of the string with the formatting applied.
    */
    format(format: string, ...args: any[]): string;
    /**
    * Replaces the format items in a String object with the text equivalent of a corresponding object's value. The current culture is used to format dates and numbers.
    * @returns A copy of the string with the formatting applied.
    */
    localeFormat(format: string, ...args: any[]): string;
    /**
    * Removes leading and trailing white-space characters from a String object.
    * @returns A copy of the string with all white-space characters removed from the start and end of the string.
    */
    trim(): string;
    /**
    * Removes trailing white-space characters from a String object.
    * @returns A copy of the string with all white-space characters removed from the end of the string.
    */
    trimEnd(): string;
    /**
    * Removes leading white-space characters from a String object.
    * @returns A copy of the string with all white-space characters removed from the start of the string.
    */
    trimStart(): string;
}

//#endregion

//#region ASP.NET Types

/**
* Provides a typing and type-reflection system for ECMAScript (JavaScript) object-oriented programming functionality.
* Type Class
* @see {@link http://msdn.microsoft.com/en-us/library/bb397568(v=vs.100).aspx}
*/
declare class Type {
    /**
    * Invokes a base method with specified arguments.
    * @returns A value of the class that the base method returns. If the base method does not return a value, no value is returned.
    */
    callBaseMethod(instance: any, name: string, baseArguments?: any[]): any;
}

//#endregion

//#region Shortcuts to commonly used APIs

/**
* Creates and initializes a component of the specified type. This method is static and can be called without creating an instance of the class.
* @param type
*           The type of the component to create.
* @param properties
*           (Optional) A JSON object that describes the properties and their values.
* @param events
*           (Optional) A JSON object that describes the events and their handlers.
* @param references
*           (Optional) A JSON object that describes the properties that are references to other components.
* @param element
*           (Optional) The DOM element that the component should be attached to.
*
* @returns A new instance of a component that uses the specified parameters.
*/
declare function $create(type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement): Sys.Component;

/**
* Returns the specified Component object. This member is static and can be invoked without creating an instance of the class.
* @return A Component object that contains the component requested by ID, if found; otherwise, null.
*/
declare function $find(id: string, parent?: Sys.Component): Sys.Component;

//#endregion

//#endregion

//#region Sys Namespace

/**
* Represents the root namespace for the Microsoft Ajax Library, which contains all fundamental classes and base classes.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397702(v=vs.100).aspx}
*/
declare module Sys {
    /**
    * @see {@link http://msdn.microsoft.com/en-us/library/bb384161(v=vs.100).aspx}
    */
    class Application {

        //#region Constructors

        constructor();

        //#endregion

        //#region Events

        /**
        * Raised after all scripts have been loaded but before objects are created.
        */
        add_init(handler: Function): void;
        remove_init(handler: Function): void;
        /**
        * Raised after all scripts have been loaded and after the objects in the application have been created and initialized.
        */
        add_load(handler: Function): void;
        remove_load(handler: Function): void;
        /**
        * Occurs when the user clicks the browser's Back or Forward button.
        */
        add_navigate(handler: Function): void;
        remove_navigate(handler: Function): void;

        //#endregion

        //#region Methods

        /**
        * Registers a component with the application and initializes it if the component is not already initialized.
        */
        addComponent(component: any): void;
        /**
        * Instructs the application to start creating components.
        */
        beginCreateComponents(): void;
        /**
        * Creates a history point and adds it to the browser's history stack.
        */
        addHistoryPoint(state: Object, title?: string): void;
        /**
        * Called by the Sys.Application.beginUpdate Method to indicate that the process of setting component properties of the application has begun.
        */
        beginUpdate(): void;
        /**
        * Releases resources and dependencies held by the client application.
        */
        dispose(): void;
        /**
        * Releases resources and dependencies associated with an element and its child nodes.
        * @param element
        *           The element to dispose.
        * @param childNodesOnly
        *           A boolean value used to determine whether to dispose of the element and its child nodes or to dispose only its child nodes.
        */
        disposeElement(element: Element, childNodesOnly: boolean): void;
        /**
        * Instructs the application to finalize component creation.
        */
        endCreateComponents(): void;
        /**
        * Called by the Sys.Application.endCreateComponents Method to indicate that the process of updating the application has completed.
        */
        endUpdate(): void;
        /**
        * Returns the specified Component object. This member is static and can be invoked without creating an instance of the class.
        * @return A Component object that contains the component requested by ID, if found; otherwise, null.
        */
        findComponent(id: string, parent?: Component): Component;
        /**
        * Returns an array of all components that have been registered with the application by using the addComponent method. This member is static and can be invoked without creating an instance of the class.
        */
        getComponents(): Component[];
        /**
        * This function supports the client-script infrastructure and is not intended to be used directly from your code.
        */
        initialize(): void;
        /**
        * Called by a referenced script to indicate that it has been loaded. This API is obsolete. You no longer need to call this method in order to notify the Microsoft Ajax Library that the JavaScript file has been loaded.
        */
        notifyScriptLoaded(): void;
        /**
        * Raises the load event. This member is static and can be invoked without creating an instance of the class.
        */
        raiseLoad(): void;
        /** 
        * Raises the Sys.INotifyPropertyChange.propertyChanged event.
        */
        raisePropertyChanged(propertyName: string): void;
        /**
        * Registers with the application an object that will require disposing. This member is static and can be invoked without creating an instance of the class.
        */
        registerDisposableObject(object: any): void;
        /**
        * Removes the object from the application and disposes the object if it is disposable. This member is static and can be invoked without creating an instance of the class.
        */
        removeComponent(component: Component): void;
        /**
        * Unregisters a disposable object from the application. This member is static and can be invoked without creating an instance of the class.
        */
        unregisterDisposableObject(object: any): void;
        /**
        * Called by the Sys.Application.endUpdate method as a placeholder for additional logic.
        */
        updated(): void;

        //#endregion

        //#region Properties

        /**
        * Gets or sets a value that indicates whether the Web application supports history point management.
        */
        get_enableHistory(): boolean;
        /**
        * Gets or sets a value that indicates whether the Web application supports history point management.
        * @param value
        *           true to allow the Web application to support history points, or false to not allow history points.
        */
        set_enableHistory(value: boolean): void;
        /**
        * Gets a value that indicates whether the application is in the process of creating components. This member is static and can be invoked without creating an instance of the class.
        */
        get_isCreatingComponents(): boolean;
        /**
        * Gets a value that indicates whether the application is in the process of disposing its resources. This member is static and can be invoked without creating an instance of the class.
        */
        get_isDisposing(): boolean;

        //#endregion
    }

    /**
    * Provides information about the current Web browser.
    * @see {@link http://msdn.microsoft.com/en-us/library/cc679064(v=vs.100).aspx}
    */
    class Browser {

        //#region Fields

        /**
        * Gets an object that represents the user agent of the browser.
        */
        agent: any;
        /**
        * Gets a value that indicates the document compatibility mode of the browser.
        */
        documentMode: number;
        /*
        * Gets a value that indicates whether the browser supports debug statements.
        */
        hasDebuggerStatement: boolean;
        /**
        * Gets the name of the browser.
        */
        name: string;
        /*
        * Gets the version number of the browser.
        */
        version: number;

        //#endregion
    }

    class Component {

        //#region Constructors

        constructor();

        //#endregion

        //#region Events

        /**
        * Raised when the dispose method is called for a component.
        */
        add_disposing(handler: Function): void;

        remove_disposing(handler: Function): void;

        /**
        * Raised when the raisePropertyChanged method of the current Component object is called.
        */
        add_propertyChanged(handler: Function): void;

        remove_propertyChanged(handler: Function): void;

        //#endregion

        //#region Methods

        /**
        * Called by the create method to indicate that the process of setting properties of a component instance has begun.
        */
        beginUpdate(): void;

        /**
        * Creates and initializes a component of the specified type. This method is static and can be called without creating an instance of the class.
        * @param type
        *           The type of the component to create.
        * @param properties
        *           (Optional) A JSON object that describes the properties and their values.
        * @param events
        *           (Optional) A JSON object that describes the events and their handlers.
        * @param references
        *           (Optional) A JSON object that describes the properties that are references to other components.
        * @param element
        *           (Optional) The DOM element that the component should be attached to.
        *
        * @returns A new instance of a component that uses the specified parameters.
        */
        create(type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement): Component;

        //#endregion

        //#region Properties

        //#endregion
    }

    /**
    * Provides debugging and tracing functionality for client ECMAScript (JavaScript) code. This class is static and can be invoked directly without creating an instance of the class.
    */
    class Debug {

        //#region Constructors

        constructor();

        //#endregion

        //#region Methods

        assert(condition: boolean, message?: string, displayCaller?: boolean): void;

        /**
         * Clears all trace messages from the trace console.
         */
        clearTrace(): void;

        /**
        * Displays a message in the debugger's output window and breaks into the debugger.
        * @param message
        *           The message to display.  
        */
        fail(message: string): void;

        /**
        * Appends a text line to the debugger console and to the trace console, if available.
        * @param text
        *       The text to display.
        */
        trace(text: string): void;

        /**
         * Dumps an object to the debugger console and to the trace console, if available.
         * @param object
         *      The object to dump.
         * @param name
         *      (Optional) The name of the object.
         */
        traceDump(object: any, name?: string): void;

        //#endregion
    }

    //#region Event Args

    /**
    * Provides a base class for classes that are used by event sources to pass event argument information.
    */
    class EventArgs {

        //#region Constructors

        constructor();

        //#endregion

        //#region Fields

        /**
        * A static object of type EventArgs that is used as a convenient way to specify an empty EventArgs instance.
        */
        Empty: EventArgs;

        //#endregion

    }

    /**
    * Provides a class for command events.
    */
    class CommandEventArgs extends EventArgs {

        //#region Constructors

        constructor(commandName: string, commandArgument: any, commandSource: any);

        //#endregion

        //#region Properties

        /**
        * Gets a string that specifies the command name.
        */
        get_commandName(): string;

        /**
        * Gets a value that represents the command argument.
        */
        get_commandArgument(): any;

        /**
        * Gets a value that represents the command source.
        */
        get_commandSource(): any;

        //#endregion
    }

    /**
    * Provides the base class for events that can be canceled.
    */
    class CancelEventArgs extends EventArgs {

        //#region Properties

        /**
        * true to request that the event be canceled; otherwise, false. The default is false.
        */
        set_cancel(value: boolean): void;

        /*
        * true to request that the event be canceled; otherwise, false. The default is false.
        */
        get_cancel(): boolean;

        //#endregion

    }

    //#endregion

    //#region Exception Types

    /**
    * Raised when a function or method is invoked and at least one of the passed arguments does not meet the parameter specification of the called function or method.
    */
    class ArgumentException {

    }
    /**
    * Raised when an argument has an invalid value of null.
    */
    class ArgumentNullException {

    }
    /**
    * Raised when an argument value is outside an acceptable range.
    */
    class ArgumentOutOfRangeException {

    }
    /**
    * Raised when a parameter is not an allowed type.
    */
    class ArgumentTypeException {

    }
    /**
    * Raised when an argument for a required method parameter is undefined.
    */
    class ArgumentUndefinedException {

    }
    /**
    * 
    */
    class FormatException {

    }
    /**
    * Raised when a call to a method has failed, but the reason was not invalid arguments.
    */
    class InvalidOperationException {

    }
    /**
    * Raised when a requested method is not supported by an object.
    */
    class NotImplementedException {

    }
    /**
    * Raised when an invalid number of arguments have been passed to a function.
    */
    class ParameterCountException {

    }
    /**
    * Raised by the Microsoft Ajax Library framework when a script does not load successfully. This exception should not be thrown by the developer.
    */
    class ScriptLoadFailedException {

    }

    //#endregion
    
    //#region Sys.Net Namespace

    /**
    * The Sys.Net namespace contains classes that manage communication between AJAX-enabled ASP.NET client applications and Web services on the server. For more information, see Using Web Services in ASP.NET AJAX. The Sys.Net namespace is part of the Microsoft Ajax Library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310860(v=vs.100).aspx}
    */
    module Net {

        /**
        * Provides the script API to make a Web request.
        */
        class WebRequest {

            //#region Constructors

            /**
            * Initializes a new instance of the Sys.Net.WebRequest class.
            */
            constructor();

            //#endregion

            //#region Members

            /**
            * Registers a handler for the completed request event of the Web request.
            * @see {@link http://msdn.microsoft.com/en-us/library/bb310841(v=vs.100).aspx}
            */
            add_completed(handler: (reference: any, eventArgs: Sys.EventArgs) => void): void;

            /**
            * Removes the event handler added by the add_completed method.
            * @see {@link http://msdn.microsoft.com/en-us/library/bb397454(v=vs.100).aspx}
            */ 
            remove_completed(handler: (reference: any, eventArgs: Sys.EventArgs) => void): void;

            /**
            * Gets the resolved URL of the Sys.Net.WebRequest instance.
            * @returns The resolved URL that the Web request is directed to.
            */
            getResolvedUrl(): string;

            /**
            * Executes a Web request. 
            */
            invoke(): void;

            /**
            * Raises the completed event for the associated Sys.Net.WebRequest instance.
            * @param eventArgs
            *           The value to pass to the Web request completed event handler.
            */
            completed(eventArgs: Sys.EventArgs): void;            

            //#endregion

        }
    }

    //#endregion

    //#region Sys.Serialization Namespace

    /**
    * Contains classes related to data serialization for AJAX client functionality in ASP.NET. For more information, see Using Web Services in ASP.NET AJAX.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310840(v=vs.100).aspx}
    */
    module Serialization {

        /**
        * Serializes JavaScript types into JSON-formatted data and deserializes JSON-formatted data into JavaScript types
        * The JavaScriptSerializer class contains only static methods.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310857(v=vs.100).aspx}
        */
        class JavaScriptSerializer {

            //#region Constructors

            /**
            * Initializes a new instance of the Sys.Serialization.JavaScriptSerializer class.
            */
            constructor();

            //#endregion

            //#region Methods 
            
            /**
            * Converts an ECMAScript (JavaScript) object graph into a JSON string. This member is static and can be invoked without creating an instance of the class.
            * @static
            * @param value
            *           The JavaScript object graph to serialize.
            * @exception Sys.ArgumentException
            *           value contains a value that cannot be serialized.
            */
            static serialize(value: any): string;

            /**
            * Converts a JSON string into an ECMAScript (JavaScript) object graph. This member is static and can be invoked without creating an instance of the class.
            * @static
            * @param value
            *           The JSON string to deserialize.
            */
            static deserialize(value: string): any;

            //#endregion
        }
    }

    //#endregion

    //#region Sys.Services Namespace

    /**
    * Contains types that provide script access in AJAX-enabled ASP.NET client applications to the ASP.NET authentication service, profile service, and other application services. 
    * The Sys.Services namespace is part of the Microsoft Ajax Library.  
    * For more information @{see Using Web Services in ASP.NET AJAX {@link http://msdn.microsoft.com/en-us/library/bb515101(v=vs.100).aspx}}
    * @see {@link http://msdn.microsoft.com/en-us/library/bb311017(v=vs.100).aspx}
    */
    module Services {

        /**
        * Provides the client proxy class for the authentication service.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310861(v=vs.100).aspx}
        */
        class AuthenticationService {

        }

        /**
        * Defines a profile group.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310801(v=vs.100).aspx}
        */ 
        class ProfileGroup {

        }

        /**
        * Provides the client proxy class for the role service.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb513880(v=vs.100).aspx}
        */
        class RoleService {

        }

        /**
        * Provides the client proxy class for the profile service.
        * 
        */ 
        class ProfileService {

        }

    }

    //#endregion


    //#region Sys.UI Namespace

    module UI {

    }

    //#endregion

}

//#endregion