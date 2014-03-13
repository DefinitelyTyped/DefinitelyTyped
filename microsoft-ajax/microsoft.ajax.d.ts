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
    /**
    * Creates a callback method, given the function to callback and the parameter to pass to it.
    * @return 
    *       The callback function.
    *
    * @param method
    *           The function for which the callback method will be created.
    * @param context
    *           The parameter to pass to the function. This parameter can be null, but it cannot be omitted.
    */
    static createCallback(method: Function, context: Object): Function;
    /**
    * Creates a delegate function that keeps the context from its creation. The context defines the object instance to which the this keyword points.
    * @param instance
    *           The object instance that will be the context for the function. This parameter can be null.
    * @param method 
    *           The function from which the delegate is created.
    * @return The delegate function.
    */
    static createDelegate(instance: Object, method: Function): Function;
    /**
    * Returns the base implementation of a method from the base class of the specified instance.
    * @param instance
    *          The instance for which the base method is requested.
    * @param name
    *          The name of the method to retrieve as a reference.   
    */
    getBaseMethod(instance: Object, name: string): any;
    /**
    * Returns the base class of the instance.
    * Use the getBaseType method to retrieve the base class of the instance.
    */
    getBaseType(): Type;
    /**
    * Returns an Array object that contains the list of interfaces that the type implements.
    * Use the getInterfaces function to return a list of objects that define the interfaces on a type object. 
    * This enables you to enumerate the array to determine the object's interfaces.
    *
    * @return An Array object that contains the list of interfaces that the type implements.
    */
    getInterfaces(): any[];
    /**
    * Returns the name of the type of the instance.
    * @return A string representing the fully qualified name of the type of the instance.
    * @example Object.getType(c[i]).getName()
    */
    getName(): string;
    /**
    * Returns an Array object containing references to all the root namespaces of the client application. This method is static and is invoked without creating an instance of the object.
    * Use the getRootNamespaces function to return an array containing references to all the root namespaces of the client application.
    * @return An object containing references to all the root namespaces of the client application.
    */
    static getRootNamespaces(): any;
    /**
    * Determines whether a class implements a specified interface type.
    * @param interfaceType
    *           The interface to test.
    * @return true if the class implements interfaceType; otherwise, false.
    */
    implementsInterface(interfaceType: Type): boolean;
    /**
    * Determines whether an instance inherits from a specified class.
    * @param parentType
    *           The fully qualified name of the class to test as a base class for the current instance.
    * @return true if the instance inherits from parentType; otherwise, false.
    */
    inheritsFrom(parentType: string);
    /**
    * Initializes the base class and its members in the context of a given instance, which provides the model for inheritance and for initializing base members.
    * @param instance
    *           The instance to initialize the base class for. Usually this.
    * @param baseArguments
    *           (Optional) The arguments for the base constructor. Can be null.
    */
    initializeBase(instance: any, baseArguments?: any[]): any;
    /**
    * Returns a value that indicates whether the specified type is a class. This method is static and can be invoked without creating an instance of the object.
    * @param type
    *           The type to test.
    * @return true if the specified type is a class; otherwise, false.
    */
    static isClass(type: any): boolean;
    /**
    * Indicates whether the specified type is an enumeration.
    * @param type
    *           The type to test.
    * @return true if the type is an enumeration; otherwise, false.
    */
    static isEnum(type: any): boolean;    
    /**
    * Get a value that indicates whether the specified type is an integer of flags.
    * @param
    *      The type to test.
    * @return true if the type is an integer of flags; otherwise, false.  
    */
    static isFlags(type: any): boolean;    
    /**
    * Determines whether an instance implements an interface.
    * @param typeInstanceVar
    *           The instance on which the interface is tested.   
    * @return 
    */ 
    isImplementedBy(typeInstanceVar: any): boolean;
    /**
    * Returns a value that indicates whether an object is an instance of a specified class or of one of its derived classes.
    * @param instance   
    *           The object to test.
    * @return true if instance is an instance of the class; false if instance does not implement the interface, or if it is undefined or null.
    */
    isInstanceOfType(instance: any): boolean;
    /**
    * Returns a value that indicates whether the specified type is an interface. This is a static member that is invoked directly without creating an instance of the class.
    * @param type
    *           The type to test.
    * @return true if the specified type is an interface; otherwise, false.  
    */
    static isInterface(type: any): boolean;
    /**
    * Returns a value that indicates whether the specified object is a namespace. This is a static member that is invoked directly without creating an instance of the class.  
    * @param object
    *           The object to test.
    * @return true if the specified object is a namespace; otherwise, false.
    */
    static isNamespace(object: any): boolean;
    /**
    * Returns an instance of the type specified by a type name. This is a static member that is invoked directly without creating an instance of its class.
    * @param typeName
    *           A string that represents a fully qualified class name. Can be null.
    * @param ns
    *           (Optional) The namespace that contains the class.
    * @return The class represented by typeName, or null if a class that matches typeName does not occur in the namespace.
    */
    static parse(typeName: string, ns?: string): any;
    /**
    * Registers a class as defined by a constructor with an optional base type and interface type.   
    * @param typeName
    *           A string that represents the fully qualified name of the type.
    * @param baseType
    *           (Optional) The base type.
    * @param interfaceTypes
    *           (Optional) An unbounded array of interface type definitions that the type implements.
    * @return The registered type.
    */
    registerClass(typeName: string, baseType?: any, interfaceTypes?: any[]): any;
    /**
    * Registers an enumeration.  
    * @param name
    *           The fully-qualified name of the enumeration.
    * @param flags
    *           (Optional) true if the enumeration is a collection of flags; otherwise, false.
    */
    registerEnum(name: string, flags?: boolean): void;
    /**
    * Registers an interface defined by a constructor.  
    * @param typeName
    *           A string that represents the fully qualified name of the class to be registered as an interface.
    * @return The registered interface.
    */
    registerInterface(typeName: string): any;
    /**
    * Creates a namespace. This member is static and can be invoked without creating an instance of the class.  
    * @param namespacePath
    *           A string that represents the fully qualified namespace to register.
    */
    static registerNamespace(namespacePath: string): void;
    /**
    * Copies members from the base class to the prototype associated with the derived class, and continues this process up the inheritance chain. This enables you to reflect on the inherited members of a derived type.  
    * Use the resolveInheritance method to reflect on the inherited members of a derived type. 
    * You invoke this method from the type that you want to reflect on. 
    * The resolveInheritance method copies members from the base class to the prototype associated with the derived class, and continues this process up the inheritance chain. 
    * If the derived type overrides a base type member, the base type member is not copied to the derived type's prototype. 
    * After invoking a derived type's resolveInheritance method, you can examine the members of the derived type to discover all members, which includes inherited members.  
    */ 
    resolveInheritance(): void;
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

    //#region Classes   

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
        /**
        * Raised after all scripts have been loaded but before objects are created.
        */
        remove_init(handler: Function): void;
        /**
        * Raised after all scripts have been loaded and after the objects in the application have been created and initialized.
        */
        add_load(handler: Function): void;
         /**
        * Raised after all scripts have been loaded and after the objects in the application have been created and initialized.
        */
        remove_load(handler: Function): void;
        /**
        * Occurs when the user clicks the browser's Back or Forward button.
        */
        add_navigate(handler: Function): void;
        /**
        * Occurs when the user clicks the browser's Back or Forward button.
        */
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
        findComponent(id: string, parent?: Sys.Component): Sys.Component;
        /**
        * Returns an array of all components that have been registered with the application by using the addComponent method. This member is static and can be invoked without creating an instance of the class.
        */
        getComponents(): Sys.Component[];
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

    /**
    * Provides the base class for the Control and Behavior classes, and for any other object whose lifetime should be managed by the ASP.NET AJAX client library.
    */
    class Component {

        //#region Constructors

        /**
        * When overridden in a derived class, initializes an instance of that class and registers it with the application as a disposable object.
        */
        constructor();

        //#endregion

        //#region Events

        /**
        * Raised when the dispose method is called for a component.
        */
        add_disposing(handler: Function): void;
        /**
        * Raised when the dispose method is called for a component.
        */
        remove_disposing(handler: Function): void;

        /**
        * Raised when the raisePropertyChanged method of the current Component object is called.
        */
        add_propertyChanged(handler: Function): void;
        /**
        * Raised when the raisePropertyChanged method of the current Component object is called.
        */
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
        static create(type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement): Sys.Component;
        /**
        * Called by the create method to indicate that the process of setting properties of a component instance has finished.        
        * This method is called by the create method ($create).   
        * Sets the isUpdating property of the current Component object to false, calls the initialize method if it has not already been called, and then calls the updated method.
        */
        endUpdate(): void;
        /**
        * Initializes the current Component object.
        * The initialize method sets the isInitialized property of the current Component object to true. This function is called by the create method ($create) and overridden in derived classes to initialize the component.
        */
        initialize(): void;
        /** 
        * Raises the propertyChanged event for the specified property.
        * @param propertyName
        *               The name of the property that changed.
        */
        raisePropertyChanged(propertyName: string): void; 
        /**
        * Called by the endUpdate method as a placeholder for additional logic in derived classes.  
        * Override the updated method in a derived class to add custom post-update logic.
        */
        updated(): void;
        /**
        * Raises the disposing event of the current Component and removes the component from the application.
        */
        dispose(): void;

        //#endregion

        //#region Properties

        //#endregion
    }

    /**
    * Represents a culture definition that can be applied to objects that accept a culture-related setting.
    */ 
    class CultureInfo {

        //#region Constructors

        /**
        * Initializes a new instance of the Sys.CultureInfo class.   
        * @param name
        *           The culture value (locale) that represents a language and region.
        * @param numberFormat
        *           A culture-sensitive numeric formatting string.
        * @param dateTimeFormat
        *           A culture-sensitive date formatting string.
        */
        constructor(name: string, numberFormat: string, dateTimeFormat: string);

        //#endregion

        //#region Properties

        /**
        * Gets an object that contains an array of culture-sensitive formatting and parsing strings values that can be applied to Number type extensions. 
        * Use the numberFormat field to retrieve an object that contains an array of formatting strings that are based on the current culture or on the invariant culture. 
        * Each formatting string can be used to specify how to format Number type extensions.
        * @return An object that contains an array of culture-sensitive formatting strings.  
        */
        numberFormat: string[];
        /**
        * Gets the culture value (locale) that represents a language and region.
        * @return The culture value (locale) that represents a language and region.
        */
        name: string;
        /**
        * Gets the globalization values of the invariant culture as sent by the server. This member is static and can be invoked without creating an instance of the class.
        * The InvariantCulture field contains the following fields associated with the invariant (culture-independent) culture: name, dateTimeFormat, and numberFormat.
        * @return A CultureInfo object.  
        */
        static InvariantCulture: CultureInfo;
        /**
        * Gets the globalization values of the current culture as sent by the server. This member is static and can be invoked without creating an instance of the class.
        * The CurrentCulture field contains the following fields associated with the current culture: name, dateTimeFormat, and numberFormat.
        * @return A Sys.CultureInfo object.
        */
        static CurrentCulture: CultureInfo;
        /**
        * Gets an object that contains an array of culture-sensitive formatting and parsing string values that can be applied to Date type extensions.
        * Use the dateTimeFormat field to retrieve an object that contains an array of formatting strings that are based on the current culture or on the invariant culture. 
        * Each formatting string can be used to specify how to format Date type extensions.
        * @return An object that contains an array of culture-sensitive formatting strings.
        */
        dateTimeFormat: string[];

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
    
    /**
    * Describes a change in a collection.
    */
    class CollectionChange {
        // to define
    }

     //#endregion

    //#region Interfaces

    /**
    * Provides a common interface for all components that can contain other components.
    */
    interface IContainer {
        
        /**
        * Adds a Component object to the current container.
        * Implement this method for an object that will contain one or more component objects in order to programmatically add components to that container.
        * @param component
        *           The Component object to add. 
        */
        addComponent(component: Component): void;
        /**
        * Returns the specified Component instance.
        * Implement this method for an object that will contain one or more component objects to access components within that container.
        * @param id
        *           The ID of the Component object to search for.
        * @return The Component instance with the specified ID.
        */
        findComponent(id: string): Component;
        /**
        * Returns an array of all objects in the current container that inherit from Component.
        * Implement this method for an object that will contain one or more component objects so that the components in that container are available. Types that implement this method should return a copy of the list of components so that modifying the array does not change the contents of the container.
        * @return An array of all objects in the current container that inherit from Component.
        */
        getComponents(): Component[];
        /**
        * Removes a Component object from the current container.
        * @param component
        *               The Component object to remove.
        */
        removeComponent(component: Component): void;
    }

    /**
    * Provides a common interface for the application-defined tasks of closing, releasing, or resetting resources held by instances of a registered Microsoft Ajax Library class.
    */ 
    interface IDisposable {
        // to define
    }

    /**
    * Indicates that the type that implements the interface provides disposing notifications.
    */
    interface INotifyDisposing {
        // to define
    }

    /**
    * Defines the propertyChanged event.
    */
    interface INotifyPropertyChange {
        // to define
    }

    //#endregion

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
    * Event handlers can use the cancel property to cancel the operation in progress. The semantics of canceling an event depend on the event source.
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

        //#region Constructors

        /**
        * Initializes a new instance of the CancelEventArgs class.
        */ 
        constructor();

        //#endregion

        //#region Properties

        /**
        * true to request that the event be canceled; otherwise, false. The default is false.
        */
        set_cancel(value: boolean): void;

        /*
        * true to request that the event be canceled; otherwise, false. The default is false.
        * @return if the event is to be canceled; otherwise, false.
        */
        get_cancel(): boolean;

        //#endregion

    }

    /**
    * This class is used by the Sys.Application Class to hold event arguments for the navigate event.
    */
    class HistoryEventArgs extends EventArgs {

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

    /**
    * Contains types related to the user interface (UI), such as controls, events, and UI properties in the Microsoft Ajax Library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397431(v=vs.100).aspx}
    */
    module UI {

        /**
        * Provides a base class for all ASP.NET AJAX clientbehaviors.
        */
        class Behavior extends Sys.Component {

            //#region Methods
            
            /**
            * Gets a Sys.UI.Behavior instance with the specified name property from the specified HTML Document Object Model (DOM) element. This member a static member and can be invoked without creating an instance of the class.
            * @return The specified Behavior object, if found; otherwise, null.
            */
            static getBehaviorByName(element: Sys.UI.DomElement, name: string): Behavior;
            /**
            * Gets an array of Sys.UI.Behavior objects that are of the specified type from the specified HTML Document Object Model (DOM) element. This method is static and can be invoked without creating an instance of the class.
            * @return An array of all Behavior objects of the specified type that are associated with the specified DOM element, if found; otherwise, an empty array.
            */
            static getBehaviorsByType(element: Sys.UI.DomElement, type: Sys.UI.Behavior): Behavior[];
            /**
            * Gets the Sys.UI.Behavior objects that are associated with the specified HTML Document Object Model (DOM) element. This member is static and can be invoked without creating an instance of the class.
            * @param element
            *           The Sys.UI.DomElement object to search.
            * @return An array of references to Behavior objects, or null if no references exist.
            */
            static getBehaviors(element: DomElement): Behavior[];

            /**
            * Removes the current Behavior object from the application.
            * The dispose method releases all resources from the Sys.UI.Behavior object, unbinds it from its associated HTML Document Object Model (DOM) element, and unregisters it from the application.
            */
            dispose(): void;
            
            //#endregion

            //#region Properties

            /**
            * Gets the HTML Document Object Model (DOM) element that the current Sys.UI.Behavior object is associated with.
            * @return The DOM element that the current Behavior object is associated with.
            */
            get_element(): Sys.UI.DomElement;

            /**
            * Gets or sets the identifier for the Sys.UI.Behavior object.
            * A generated identifier that consists of the ID of the associated Sys.UI.DomElement, the "$" character, and the name value of the Behavior object.
            */
            get_id(): string;

            /**
            * Gets or sets the identifier for the Sys.UI.Behavior object.
            * @param value
            *           The string value to use as the identifier.
            */
            set_id(value: string): void;

            /*
            * Gets or sets the name of the Sys.UI.Behavior object.
            * If you do not explicitly set the name property, getting the property value sets it to its default value, which is equal to the type of the Behavior object. The name property remains null until it is accessed.
            * @param value
            *           A string value to use as the name.
            */
            set_name(value: string): void;

            /**
            * Gets or sets the name of the Sys.UI.Behavior object. 
            */
            get_name(): string;

            //#endregion

        }
        /**
        * Creates an object that contains a set of integer coordinates representing position, width, and height.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397698(v=vs.100).aspx}
        */
        class Bounds {
            
            //#region Constructors

            /**
            * Initializes a new instance of the Sys.UI.Bounds class.
            */
            constructor();

            //#endregion

            //#region Fields

            /**
            * Gets the height of an object in pixels. This property is read-only.
            * @return A number that represents the height of an object in pixels.
            */
            height: number;

            /**
            * Gets the width of an object in pixels. This property is read-only.
            * @return A number that represents the width of an object in pixels.
            */
            width: number;

            /**
            * Gets the x-coordinate of an object in pixels.
            * @return A number that represents the x-coordinate of an object in pixels.
            */
            x: number;

            /**
            * Gets the y-coordinate of anobject in pixels.
            * @return A number that represents the y-coordinate of an object in pixels.  
            */
            y: number;

            //#endregion

        }
        /**
        * Provides the base class for all all ASP.NET AJAX client controls.
        */
        class Control extends Sys.Component {
            
        }
        /**
        * Defines static methods and properties that provide helper APIs for manipulating and inspecting DOM elements.
        */
        class DomElement {
            
        }
        /**
        * Provides cross-browser access to DOM event properties and helper APIs that are used to attach handlers to DOM element events.
        */
        class DomEvent {
            
        }
        /**
        * Describes key codes.
        */
        enum Key {
            
        }
        /**
        * Describes mouse button locations.
        */
        enum MouseButton {
            
        }
        /**
        * Creates an object that contains a set of integer coordinates that represent a position.
        */
        class Point {
            
        }
        /**
        * Describes the layout of a DOM element in the page when the element's visible property is set to false.
        */
        enum VisibilityMode {
            
        }
    }

    //#endregion

    //#region Sys.WebForms Namespace

    module WebForms {

        /**
        * Used by the beginRequest event of the PageRequestManager class to pass argument information to event handlers.
        */ 
        class BeginRequestEventArgs extends EventArgs {

        }

        /**
        * Used by the endRequest event of the PageRequestManager class to pass argument information to event handlers.
        */ 
        class EndRequestEventArgs extends EventArgs {

        }

        /**
        * Used by the initializeRequest event of the PageRequestManager class to pass argument information to event handlers.
        */ 
        class InitializeRequestEventArgs extends EventArgs {
                    
        }

        /**
        * Used by the pageLoaded event of the PageRequestManager class to send event data that represents the UpdatePanel controls that were updated and created in the most recent postback.
        */ 
        class PageLoadedEventArgs extends EventArgs {

        
        }

        /**
        * Used by the pageLoading event of the PageRequestManager class to send event data that represents the UpdatePanel controls that are being updated and deleted as a result of the most recent postback.
        */ 
        class PageLoadingEventArgs extends EventArgs {

        }

        /**
        * Manages client partial-page updates of server UpdatePanel controls. In addition, defines properties, events, and methods that can be used to customize a Web page with client script.
        */ 
        class PageRequestManager extends EventArgs {

            //#region Constructors 

            /**
            * Initializes a new instance of the Sys.WebForms.PageRequestManager Class.
            */
            constructor();

            //#endregion

            //#region Events

            /**
            * Raised before the processing of an asynchronous postback starts and the postback request is sent to the server.
            * @param beginRequestHandler
            *               The name of the handler method that will be called.
            */
            add_beginRequest(beginRequestHandler: (sender, args) => void): void;
            /**
            * Raised before the processing of an asynchronous postback starts and the postback request is sent to the server.
            *  @param beginRequestHandler
            *               The handler method that will be removed.
            */
            remove_beginRequest(beginRequestHandler: Function): void;
            /**
            * Raised after an asynchronous postback is finished and control has been returned to the browser.
            * @param endRequestHandler
            *               The name of the handler method that will be called.
            */ 
            add_endRequest(endRequestHandler: (sender, args) => void): void;
            /**
            * Raised after an asynchronous postback is finished and control has been returned to the browser.
            * @param endRequestHandler
            *               The name of the handler method that will be removed.
            */
            remove_endRequest(endRequestHandler: (sender, args) => void): void;
            /**
            * Raised during the initialization of the asynchronous postback.
            * @param initializeRequestHandler
            *               The name of the handler method that will be called.
            */
            add_initializeRequest(initializeRequestHandler: (sender, args) => void): void;
            /**
            * Raised during the initialization of the asynchronous postback.
            * @param initializeRequestHandler
            *               The name of the handler method that will be called.
            */
            remove_initializeRequest(initializeRequestHandler: (sender, args) => void): void;
            /**
            * Raised after all content on the page is refreshed as a result of either a synchronous or an asynchronous postback.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            add_pageLoaded(pageLoadedHandler: (sender, args) => void): void;
            /**
            * Raised after all content on the page is refreshed as a result of either a synchronous or an asynchronous postback.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            remove_pageLoaded(pageLoadedHandler: (sender, args) => void): void;
            /**
            * Raised after the response from the server to an asynchronous postback is received but before any content on the page is updated.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            add_pageLoading(pageLoadingHandler: (sender, args) => void): void;
            /**
            * Raised after the response from the server to an asynchronous postback is received but before any content on the page is updated.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            remove_pageLoading(pageLoadingHandler: (sender, args) => void): void;

            //#endregion

            //#region Methods

            /**
            * Returns the instance of the PageRequestManager class for the page.
            * @return The current instance of the PageRequestManager class. You do not create a new instance of the PageRequestManager class directly. Instead, an instance is available when partial-page rendering is enabled.
            */
            getInstance(): PageRequestManager;

            /**
            * Stops all updates that would occur as a result of an asynchronous postback.
            * The abortPostBack method stops the currently executing postback. To cancel a new postback, provide an event handler for the initializeRequest event and use the cancel event of the Sys.CancelEventArgs class.
            */
            abortPostBack(): void;

            /**
            * Begins an asynchronous postback.
            * @param updatePanelsToUpdate 
            *                   (Optional) An array of UniqueID values or ClientID values for UpdatePanel controls that must be re-rendered.
            * @param eventTarget 
            *                   (Optional) A string that contains the target of the event.
            * @param eventArgument 
            *                   (Optional) A string that contains an argument for the event.
            * @param causesValidation 
            *                   (Optional) true to cause validation.
            * @param validationGroup 
            *                   (Optional) A string that contains the name of the validation group.
            */
            beginAsyncPostBack(updatePanelsToUpdate?: string[], eventTarget?: string, eventArgument?: string, causesValidation?: boolean, validationGroup?: string): void;

            /**
            * Releases ECMAScript (JavaScript) resources and detaches events.
            * the dispose method to free client resources. The PageRequestManager instance calls the dispose method during the window.unload event of the browser. 
            * If you call the dispose method and then reference members of the PageRequestManager class, an error occurs. In typical page developer scenarios, you do not have to call the dispose method.
            */
            dispose(): void;

            //#endregion

            //#region Properties           

            //#endregion
        }

        //#region Exceptions 



        //#endregion


    }

    //#endregion

}

//#endregion
