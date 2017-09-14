// Type definitions for Microsoft ASP.NET Ajax client side library
// Project: http://msdn.microsoft.com/en-us/library/ee341002(v=vs.100).aspx
// Definitions by: Patrick Magee <https://github.com/pjmagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//#region Global Namespace

/**
* Global Namespace
* This section includes members or types that extend the ECMAScript (JavaScript) Global object and other core objects.
* @see {@link http://msdn.microsoft.com/en-us/library/bb310818(v=vs.100).aspx}
*/

//#region JavaScript Base Type Extensions

/**
* Provides extended reflection-like functionality to the base ECMAScript (JavaScript) Object object.
* Object Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397554(v=vs.100).aspx}
*/
interface ObjectConstructor {
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
* Provides extensions to the base ECMAScript (JavaScript) Array functionality by adding static methods.
* Array Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb383786(v=vs.100).aspx}
*/
interface ArrayConstructor {


    //#region Extensions

    /**
    * Adds an element to the end of an Array object. This function is static and is invoked without creating an instance of the object.
    * @param array
    *       The array to add the item to.
    * @param item
    *
    */
    add<T>(array: T[], element: T): void;
    /**
    * Copies all the elements of the specified array to the end of an Array object.
    */
    addRange<T>(array: T[], items: T[]): void;
    /**
    * Removes all elements from an Array object.
    */
    clear<T>(array: T[]): void;
    /**
    * Creates a shallow copy of an Array object.
    */
    clone<T>(array: T[]): T[];
    /**
    * Determines whether an element is in an Array object.
    */
    contains<T>(array: T[], element: T): boolean;
    /**
    * Removes the first element from an Array object.
    */
    dequeue<T>(array: T[]): T;
    /**
    * Adds an element to the end of an Array object. Use the add function instead of the Array.enqueue function.
    */
    enqueue<T>(array: T[], element: T): void;
    /**
    * Performs a specified action on each element of an Array object.
    */
    forEach<T>(array: T[], method: (element: T, index: number, array: T[]) => void, instance: any): void;
    /**
    * Searches for the specified element of an Array object and returns its index.
    */
    indexOf<T>(array: T[], item: T, startIndex?: number): number;
    /**
    * Inserts a value at the specified location in an Array object.
    */
    insert<T>(array: T[], index: number, item: T): void;
    /**
    * Creates an Array object from a string representation.
    */
    parse<T>(value: string): T[];
    /**
    * Removes the first occurrence of an element in an Array object.
    */
    remove<T>(array: T[], item: T): boolean;
    /**
    * Removes an element at the specified location in an Array object.
    */
    removeAt<T>(array: T[], index: number): void;

    //#endregion
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
}

interface NumberConstructor {

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
* Provides extensions to the base ECMAScript (JavaScript) Date object.
* Date Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb310850(v=vs.100).aspx}
*/
interface Date {

    /**
    * Formats a date by using the invariant (culture-independent) culture.
    */
    format(format: string): string;
    /**
    * Formats a date by using the current culture. This function is static and can be invoked without creating an instance of the object.
    */
    localeFormat(format: string): string;
}

interface DateConstructor {
    /**
    * Creates a date from a locale-specific string by using the current culture. This function is static and can be invoked without creating an instance of the object.
    * @exception (Debug) formats contains an invalid format.
    * @param value
    *           A locale-specific string that represents a date.
    * @param formats
    *           (Optional) An array of custom formats.
    */
    parseLocale(value: string, formats?: string[]): Date;
    parseLocale(value: string, ...formats: string[]): Date;
    /**
    * Creates a date from a string by using the invariant culture. This function is static and can be invoked without creating an instance of the object.
    * @return If value is a valid string representation of a date in the invariant format, an object of type Date; otherwise, null.
    * @param value
    *           A locale-specific string that represents a date.
    * @param formats
    *           (Optional) An array of custom formats.
    */
    parseInvariant(value: string, formats?: string[]): string;
    parseInvariant(value: string, ...formats: string[]): string;
}


/**
* Provides static functions that extend the built-in ECMAScript (JavaScript) Function type by including exception
* details and support for application-compilation modes (debug or release).
* @see {@link http://msdn.microsoft.com/en-us/library/dd409270(v=vs.100).aspx}
*/
interface FunctionConstructor {

    //#region Extensions

    /**
      * Creates a delegate function that retains the context first used during an objects creation.
      * @see {@link http://msdn.microsoft.com/en-us/library/dd393582(v=vs.100).aspx }
      */
    createCallback(method: Function, ...context: any[]): Function;
    /**
      * Creates a callback function that retains the parameter initially used during an object's creation.
      * @see {@link http://msdn.microsoft.com/en-us/library/dd409287(v=vs.100).aspx }
      */
    createDelegate(instance: any, method: Function): Function;

    /**
      * A function that does nothing.
      * @see {@link http://msdn.microsoft.com/en-us/library/dd393667(v=vs.100).aspx }
      */
    emptyMethod(): Function;

    /**
      * Validates the parameters to a method are as expected.
      * @see {@link http://msdn.microsoft.com/en-us/library/dd393712(v=vs.100).aspx }
      */
    validateParameters(parameters: any, expectedParameters: Object[], validateParameterCount?: boolean): any;

    //#endregion
}

/**
* Provides static functions that extend the built-in ECMAScript (JavaScript) Error type by including exception details and support for application-compilation modes (debug or release).
* Error Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb310947(v=vs.100).aspx}
*/
interface ErrorConstructor {

    //#region Extensions

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


    //#endregion
}


interface String {

    //#region Extensions

    /**
    * Formats a number by using the invariant culture.
    * @returns true if the end of the String object matches suffix; otherwise, false.
    */
    endsWith(suffix: string): boolean;

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

    //#endregion
}

/**
* Provides extensions to the base ECMAScript (JavaScript) String object by including static and instance methods.
* String Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397472(v=vs.100).aspx}
*/
interface StringConstructor {
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
}


/**
* Provides extensions to the base ECMAScript (JavaScript) Boolean object.
* Boolean Type Extensions
* @see {@link http://msdn.microsoft.com/en-us/library/bb397557(v=vs.100).aspx}
*/
interface BooleanConstructor {

    //#region Extensions

    /**
    * Converts a string representation of a logical value to its Boolean object equivalent.
    */
    parse(value: string): Boolean;

    //#endregion
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
    inheritsFrom(parentType: string): boolean;
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
* @see {@link http://msdn.microsoft.com/en-us/library/bb397487(v=vs.100).aspx}
*
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
* @returns A new instance of a component that uses the specified parameters.
*/
declare function $create(type: Type, properties?: any, events?: any, references?: any, element?: HTMLElement): Sys.Component;

/**
* Returns the specified Component object. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397441(v=vs.100).aspx}
* @param id A string that contains the ID of the component to find.
* @param parent (Optional) The component or element that contains the component to find.
* @return A Component object that contains the component requested by ID, if found; otherwise, null.
*/
declare function $find(id: string, parent?: Sys.Component): Sys.Component;

/**
* Returns the specified Component object. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397441(v=vs.100).aspx}
* @param id A string that contains the ID of the component to find.
* @param parent (Optional) The component or element that contains the component to find.
* @return A Component object that contains the component requested by ID, if found; otherwise, null.
*/
declare function $find(id: string, parent?: HTMLElement): Sys.Component;

/*
* Provides a shortcut to the addHandler method of the Sys.UI.DomEvent class. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb311019(v=vs.100).aspx}
* @param element The DOM element that exposes the event.
* @param eventName The name of the event.
* @param handler The event handler to add.
* @param autoRemove (Optional) A boolean value that determines whether the handler should be removed automatically when the element is disposed.
*/
declare function $addHandler(element: HTMLElement, eventName: string, handler: (e: Sys.UI.DomEvent) => void, autoRemove?: boolean): void;

/**
* Provides a shortcut to the addHandlers method of the Sys.UI.DomEvent class. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb384012(v=vs.100).aspx}
* @param element The DOM element that exposes the event.
* @param events A dictionary of events and their handlers.
* @param handlerOwner (Optional) The object instance that is the context for the delegates that should be created from the handlers.
* @param autoRemove (Optional) A boolean value that determines whether the handler should be removed automatically when the element is disposed.
*/
declare function $addHandlers(element: HTMLElement, events: { [event: string]: (e: Sys.UI.DomEvent) => void }, handlerOwner?: any, autoRemove?: boolean): void;

/**
* Provides a shortcut to the clearHandlers method of the Sys.UI.DomEvent class. This member is static and can be invoked without creating an instance of the class.
* For details about the method that this shortcut represents, see Sys.UI.DomEvent clearHandlers Method.
* @see {@link http://msdn.microsoft.com/en-us/library/bb310959(v=vs.100).aspx}
* @param The DOM element that exposes the events.
*/
declare function $clearHandlers(element: HTMLElement): void;

/**
* Provides a shortcut to the getElementById method of the HTMLElement class. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397717(v=vs.100).aspx}
* @param id
*           The ID of the DOM element to find.
* @param element
*           The parent element to search. The default is the document element.
* @return
*   The  HTMLElement
*/
declare function $get(id: string, element?: HTMLElement): HTMLElement;

/**
* Provides a shortcut to the removeHandler method of the Sys.UI.DomEvent class. This member is static and can be invoked without creating an instance of the class.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397510(v=vs.100).aspx}
* @param element The DOM element that exposes the event.
* @param eventName The name of the DOM event.
* @param handler The event handler to remove.
*/
declare function $removeHandler(element: HTMLElement, eventName: string, handler: (e: Sys.UI.DomEvent) => void): void;

//#endregion

//#endregion

//#region Sys Namespace

/**
* Represents the root namespace for the Microsoft Ajax Library, which contains all fundamental classes and base classes.
* @see {@link http://msdn.microsoft.com/en-us/library/bb397702(v=vs.100).aspx}
*/
declare namespace Sys {

    //#region Classes

    /**
    * Provides a run-time object that exposes client events and manages client components that are registered with the application.
    * The members of this object are available globally after the client application has been initialized.
    * The members can be invoked without creating an instance of the class.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb384161(v=vs.100).aspx}
    */
    interface Application extends Component, IContainer {

        //#region Constructors

        constructor(): void;

        //#endregion

        //#region Events

        /**
        * Raised after all scripts have been loaded but before objects are created.
        */
        add_init(handler: (sender: Application, eventArgs: EventArgs) => void): void;
        /**
        * Raised after all scripts have been loaded but before objects are created.
        */
        remove_init(handler: (sender: Application, eventArgs: EventArgs) => void): void;
        /**
        * Raised after all scripts have been loaded and after the objects in the application have been created and initialized.
        */
        add_load(handler: (sender: Application, eventArgs: ApplicationLoadEventArgs) => void): void;
        /**
       * Raised after all scripts have been loaded and after the objects in the application have been created and initialized.
       */
        remove_load(handler: (sender: Application, eventArgs: ApplicationLoadEventArgs) => void): void;
        /**
        * Occurs when the user clicks the browser's Back or Forward button.
        */
        add_navigate(handler: (sender: Application, eventArgs: HistoryEventArgs) => void): void;
        /**
        * Occurs when the user clicks the browser's Back or Forward button.
        */
        remove_navigate(handler: (sender: Application, eventArgs: HistoryEventArgs) => void): void;

        /**
        * Raised before all objects in the client application are disposed, typically when the DOM window.unload event is raised.
        */
        add_unload(handler: Function): void;

        /**
        * Raised before all objects in the client application are disposed, typically when the DOM window.unload event is raised.
        */
        remove_unload(handler: Function): void;

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
        * Returns the specified Component object. This member is static and can be invoked without creating an instance of the class.
        * @return A Component object that contains the component requested by ID, if found; otherwise, null.
        */
        findComponent(id: string, parent?: HTMLElement): Sys.Component;
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

    var Application: Application;

    /**
    * Provides information about the current Web browser.
    * The Sys.Browser object determines which browser is being used and provides some information about it. You can use this object to help customize your code to the unique requirements or capabilities of the browser.
    * @see {@link http://msdn.microsoft.com/en-us/library/cc679064(v=vs.100).aspx}
    */
    interface Browser {

        //#region Fields

        /**
        * Gets an object that represents the user agent of the browser.
        */
        agent: any;
        /**
        * Gets a value that indicates the document compatibility mode of the browser.
        * @return
        *
        */
        documentMode: number;
        /*
        * Gets a value that indicates whether the browser supports debug statements.
        * @return
        *   True if the browser supports debug statements
        */
        hasDebuggerStatement: boolean;
        /**
        * Gets the name of the browser.
        * @return
        *   The name of the browser
        */
        name: string;
        /*
        * Gets the version number of the browser.
        * @return
        *   The version of the browser
        */
        version: number;

        //#endregion
    }

    export function Browser(): Sys.Browser;

    /**
    * Provides the base class for the Control and Behavior classes, and for any other object whose lifetime should be managed by the ASP.NET AJAX client library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397516(v=vs.100).aspx}
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

        /**
         * Gets an EventHandlerList object that contains references to all the event handlers that are mapped to the current component's events.
         * This member supports the client-script infrastructure and is not intended to be used directly from your code.
         * @return
         *      An EventHandlerList object that contains references to all the events and handlers for this component.
         */
        get_events(): any;
        /**
        * Gets the ID of the current Component object.
        * @return
        *       The id
        */
        get_id(): string;
        /**
        * Sets the ID of the current Component object.
        * @param value A string that contains the ID of the component.
        */
        set_id(value: string): void;
        /**
         * Gets a value indicating whether the current Component object is initialized.
         * @return
         *      true if the current Component is initialized; otherwise, false.
         */
        get_isInitialized(): boolean;
        /**
         * Gets a value indicating whether the current Component object is updating.
         * @return
         *      true if the current Component object is updating; otherwise, false.
         */
        get_isUpdating(): boolean;

        //#endregion
    }

    /**
    * Represents a culture definition that can be applied to objects that accept a culture-related setting.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb384004(v=vs.100).aspx}
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
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397422(v=vs.100).aspx}
    */
    class Debug {

        //#region Constructors

        /**
         * Initializes a new instance of the Sys.Debug class.
         */
        constructor();

        //#endregion

        //#region Methods

        /**
         * Checks for a condition, and if the condition is false, displays a message and prompts the user to break into the debugger.
         * When you call the assert method in your code, express the success of an operation as true or false and use that value for condition. If the operation fails (if condition is false), the assert logic is executed.
         * The assert method should be used to catch developer errors. To respond to user errors and to run-time error conditions such as network errors or permission failures, throw an exception.
         * Debugging behavior, requirements, and the output of trace messages vary with different browsers. For more information, see Debugging and Tracing Ajax Applications Overview.
         *
         * @param condition
         *      true to continue to execute code; false to display message and break into the debugger.
         * @param message
         *      (Optional) The message to display. The default is an empty string ("").
         * @param displayCaller
         *      (Optional) true to indicate that the name of the function that is calling assert should be displayed in the message. The default is false.
         */
        static assert(condition: boolean, message?: string, displayCaller?: boolean): void;
        /**
         * Clears all trace messages from the trace console.
         */
        static clearTrace(): void;
        /**
        * Displays a message in the debugger's output window and breaks into the debugger.
        * @param message
        *           The message to display.
        */
        static fail(message: string): void;
        /**
        * Appends a text line to the debugger console and to the trace console, if available.
        * @param text
        *       The text to display.
        */
        static trace(text: string): void;
        /**
         * Dumps an object to the debugger console and to the trace console, if available.
         * @param object
         *      The object to dump.
         * @param name
         *      (Optional) The name of the object.
         */
        static traceDump(object: any, name?: string): void;

        //#endregion
    }

    /**
    * Describes a change in a collection.
    * @see {@link http://msdn.microsoft.com/en-us/library/dd393798(v=vs.100).aspx}
    */
    class CollectionChange {

        //#region Constructors

        /**
        * Creates a CollectionChange object based on the supplied parameters.
        * @param action
        *           A NotifyCollectionChangedAction enumeration value.
        * @param newItems
        *           (Optional) The items that were added when the action is add or replace.
        * @param newStartingIndex
        *           (Optional) An integer that represents the index where new items have been inserted.
        * @param oldItems
        *           (Optional) The items that were removed when the action is remove or replace.
        *  @param oldStartingIndex
        *           (Optional) An integer that represents the index where old items have been removed.
        */
        constructor(action: NotifyCollectionChangedAction, newItems: any[], newStartingIndex: number, oldItems: any[], oldStartingIndex: number);

        //#endregion

        //#region Fields

        /**
        * Gets a NotifyCollectionChangedAction object that contains the change action enumeration value.
        * @return A NotifyCollectionChangedAction object.
        */
        action: NotifyCollectionChangedAction;
        /**
        * @return An array of items that were added.
        */
        newItems: any[];
        /**
        * The index where new items have been inserted.
        * @return An integer that represents the index where new items have been inserted.
        */
        newStartingIndex: number;
        /**
        * The items that were removed when the NotifyCollectionChangedAction object is set to remove.
        * @return An array containing the items that were removed.
        */
        oldItems: any[];
        /**
        * Gets the index where old items have been removed.
        * @return An integer that represents the index where old items have been removed.
        */
        oldStartingIndex: number;

        //#endregion
    }

    /**
    * Adds update and management functionality to target objects such as arrays, DOM elements, and objects.
    * The Sys.Observer class is based on the Observer pattern. The Sys.Observer class maintains a list of interested dependents (observers) in a separate object (the subject).
    * All methods that are contained in the Sys.Observer class are static.
    * In order to be used with the Sys.Observer class, an object must be an object, array, or DOM element.
    * @see {@link http://msdn.microsoft.com/en-us/library/dd393710(v=vs.100).aspx}
    */
    class Observer {

        //#region Methods

        /**
        * Adds an item to the collection in an observable manner.
        * @param target
        *           The array to which an item will be added.
        * @param item
        *           The item to add.
        */
        static add(target: any[], item: any): void;
        /**
        * Adds an event handler to the target.
        * @param target The array to which an event handler will be added.
        * @param handler The event handler.
        */
        static addCollectionChanged(target: any, handler: Function): void;
        /**
        * Adds an observable event handler to the target.
        * @param eventName A string that contains the event name.
        * @param handler The added function.
        */
        static addEventHandler(target: any, eventName: string, handler: Function): void;
        /**
        * Adds a propertyChanged event handler to the target.
        * @param target The object to observe.
        * @param handler The function handler to add.
        */
        static addPropertyChanged(target: any, handler: Function): void;
        /**
        * Adds items to the collection in an observable manner.
        * @param target The array to which items will be added.
        * @param items The array of items to add.
        */
        static addRange(target: any[], items: any[]): void;
        /**
        * Begins the process of updating the target object.
        * @param target The object to update.
        */
        static beginUpdate(target: any): void;
        /**
        * Clears the array of its elements in an observable manner.
        * @param target The array to clear.
        */
        static clear(target: any): void;
        /**
        * Ends the process of updating the target object.
        * @param target The object being updated.
        */
        static endUpdate(target: any): void;
        /**
        * Inserts an item at the specified index in an observable manner.
        * @param target The array to which the item is inserted.
        * @param index A number that represents the index where the item will be inserted.
        * @param item The item to insert.
        */
        static insert(target: any, index: number, item: any): void;
        /**
        * Makes an object directly observable by adding observable methods to it.
        * @param target The object, array, or DOM element to make observable.
        * @return The observable object.
        * @see {@link http://msdn.microsoft.com/en-us/library/dd393633(v=vs.100).aspx}
        */
        static makeObservable(target: any): any;
        /**
        * Raises the collectionChanged event.
        * @param target The collection to which an event is raised.
        * @param changes A Sys.CollectionChange object that contains the list of changes that were performed on the collection since the last event.
        */
        static raiseCollectionChanged(target: any[], changes: Sys.CollectionChange): void;
        /**
        * Raises an observable event on the target.
        * @param target The target object.
        * @param eventName A string that contains the event name.
        * @param eventArgs A Sys.EventArgs object used to pass event argument information.
        */
        static raiseEvent(target: any, eventName: string, eventArgs: Sys.EventArgs): void;
        /**
        * Raises a propertyChanged notification event.
        * @param target The object to which an event is raised.
        * @param propertyName The name of the property that changed.
        */
        static raisePropertyChanged(target: any, propertyName: string): void;
        /**
        * Removes the first occurrence of an item from the array in an observable manner.
        * @param target The array to which the item will be removed.
        * @param item The item to remove.
        * @return true if the item is found in the array. Otherwise false.
        */
        static remove(target: any[], item: any): boolean;
        /**
        * Removes the item at the specified index from the array in an observable manner.
        * @param target The array to which an item is removed.
        * @param index A number that represents the index of the item to remove.
        */
        static removeAt(target: any[], index: number): void;
        /**
        * Removes the collectionChanged event handler from the target.
        * @param target The array from which the collectionChanged event handler is removed.
        * @param handler The function to remove.
        */
        static removeCollectionChanged(target: any, handler: Function): void;
        /**
        * Removes a propertyChanged event handler from the target.
        * @param target The object to observe.
        * @param handler The event handler to remove.
        */
        static removeEventHandler(target: any, handler: Function): void;
        /**
        * Sets a property or field on the target in an observable manner.
        * The raisePropertyChanged method is called after the setValue method set the value of the target object property.
        * @param target The object to which the property is set.
        * @param propertyName A string that contains the name of the property or field to set.
        * @param value The value to set.
        */
        static setValue(target: any, propertyName: string, value: any): void;

        //#endregion

        //#region Properties

        /**
        * Indicates that the target is being updated.
        * @param target The target object to update.
        * @return true if given target argument is currently updating; otherwise false.
        */
        static isUpdating(target: any): boolean;

        //#endregion
    }

    /**
    * Provides static, culture-neutral exception messages that are used by the Microsoft Ajax Library framework.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397705(v=vs.100).aspx}
    * This type supports the .NET Framework infrastructure and is not intended to be used directly from your code.
    */
    class Res {

        //#region Fields

        /**
        * @return "Actual value was {0}."
        */
        static actualValue: string;
        /**
        * @return "The application failed to load within the specified time out period."
        */
        static appLoadTimedout: string;
        /**
        * @return "Value does not fall within the expected range."
        */
        static argument: string;
        /**
        * @return "Value cannot be null."
        */
        static argumentNull: string;
        /**
        * @return "Specified argument was out of the range of valid values.
        */
        static argumentOutOfRange: string;
        /**
        * @return "Object cannot be converted to the required type."
        */
        static argumentType: string;
        /**
        * @return "Object of type '{0}' cannot be converted to type '{1}'."
        */
        static argumentTypeWithTypes: string;
        /**
        * @return "Value cannot be undefined."
        */
        static argumentUndefined: string;
        /**
        * @return "Assertion Failed: {0}"
        */
        static assertFailed: string;
        /**
        * @return "Assertion Failed: {0}\r\nat {1}"
        */
        static assetFailedCaller: string;
        /**
        * @return "Base URL does not contain ://."
        */
        static badBaseUrl1: string;
        /**
        * @return "Base URL does not contain another /."
        */
        static badBaseUrl2: string;
        /**
        * @return "Cannot find last / in base URL."
        */
        static badBaseUrl3: string;
        /**
        * @return "{0}\r\n\r\nBreak into debugger?"
        */
        static breakIntoDebugger: string;
        /**
        * @return "Cannot abort when executor has not started."
        */
        static cannotAbortBeforeStart: string;
        /**
        * @return "Cannot call {0} when responseAvailable is false."
        */
        static cannotCallBeforeResponse: string;
        /**
        * @return "Cannot call {0} once started."
        */
        static cannotCallOnceStarted: string;
        /**
        * @return "Cannot call {0} outside of a completed event handler."
        */
        static cannotCallOutsideHandler: string;
        /**
        * @return "Cannot deserialize empty string."
        */
        static cannotDeserializeEmptyString: string;
        /**
        * @return "Cannot serialize non-finite numbers."
        */
        static cannotSerializeNonFiniteNumbers: string;
        /**
        * @return "The id property can't be set on a control."
        */
        static controlCantSetId: string;
        /**
        * @return "'{0}' is not a valid value for enum {1}."
        */
        static enumInvalidValue: string;
        /**
        * @return "Handler was not added through the Sys.UI.DomEvent.addHandler method.
        */
        static eventHandlerInvalid: string;
        /**
        * @return "One of the identified items was in an invalid format."
        */
        static format: string;
        /**
        * @return "The string was not recognized as a valid Date."
        */
        static formatBadDate: string;
        /**
        * @return "Format specifier was invalid."
        */
        static formatBadFormatSpecifier: string;
        /**
        * @return "Input string was not in a correct format."
        */
        static formatInvalidString: string;
        /**
        * @return "Could not create a valid Sys.Net.WebRequestExecutor from: {0}."
        */
        static invalidExecutorType: string;
        /**
        * @return "httpVerb cannot be set to an empty or null string."
        */
        static invalidHttpVerb: string;
        /**
        * @return "Operation is not valid due to the current state of the object."
        */
        static invalidOperation: string;
        /**
        * @return "Value must be greater than or equal to zero."
        */
        static invalidTimeout: string;
        /**
        * @return "Cannot call invoke more than once."
        */
        static invokeCalledTwice: string;
        /**
        * @return "The method or operation is not implemented."
        */
        static notImplemented: string;
        /**
        * @return "Cannot call executeRequest with a null webRequest."
        */
        static nullWebRequest: string;

        /**
         * @return "'{0}' is not an event."
         */
        static undefinedEvent: string;

        /**
         * @return "Handler must be a function."
         */
        static eventHandlerNotFunction: string;

        /**
         * @return "'{0}' is not a property or an existing field."
         */
        static propertyUndefined: string;

        /**
         * @return "'{0}' is not an Array property."
         */
        static propertyNotAnArray: string;

        /**
         * @return "'{0}' is not a writable property."
         */
        static propertyNotWritable: string;

        //#endregion
    }

    /**
    * Provides a mechanism to concatenate strings.
    * The StringBuilder class represents a mutable string of characters and provides a mechanism to concatenate a sequence of strings.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310852(v=vs.100).aspx}
    */
    class StringBuilder {

        //#region Constructors

        /**
        * Creates a new instance of StringBuilder and optionally accepts initial text to concatenate. You can specify a string in the optional initialText parameter to initialize the value of the StringBuilder instance.
        * @param initialText
        *           (Optional) The string that is used to initialize the value of the instance. If the value is null, the new StringBuilder instance will contain an empty string ("").
        */
        constructor(initialText?: string);

        //#endregion

        //#region Methods

        /**
        * Appends a copy of a specified string to the end of the Sys.StringBuilder instance.
        * Use the append method to append a copy of a specified string to the end of a StringBuilder instance. If text is an empty string, null, or undefined, the StringBuilder instance remains unchanged.
        * @param text
        *             The string to append to the end of the StringBuilder instance.
        */
        append(text: string): void;

        /**
        * Appends a string with a line terminator to the end of the Sys.StringBuilder instance.
        * Use the appendLine method to append a specified string and a line terminator to the end of a Stringbuilder instance. The line terminator is a combination of a carriage return and a newline character. If no string is specified in text, only the line terminator is appended.
        * @param text
        *           (Optional) The string to append with a line terminator to the end of the StringBuilder instance.
        */
        appendLine(text: string): void;

        /**
        * Clears the contents of the Sys.StringBuilder instance.
        * Use the clear method to clear the StringBuilder instance of its current contents.
        */
        clear(): void;

        /**
        * Determines whether the Sys.StringBuilder object has content.
        * Use the isEmpty method to determine whether a StringBuilder instance has any content. If you append an empty string, null, or an undefined value to an empty StringBuilder instance, the instance remains empty and unchanged.
        * @return true if the StringBuilder instance contains no elements; otherwise, false.
        */
        isEmpty(): boolean;

        /**
        * Creates a string from the contents of a Sys.StringBuilder instance, and optionally inserts a delimiter between each element of the created string.
        * Use the toString method to create a string from the contents of a StringBuilder instance. Use the toString method with the optional separator parameter to insert a specified string delimiter between each element of the created string.
        * @param separator
        *           (Optional) A string to append between each element of the string that is returned.
        * @return A string representation of the StringBuilder instance. If separator is specified, the delimiter string is inserted between each element of the returned string.
        */
        toString(separator?: string): string;

        //#endregion
    }

    //#endregion

    //#region Enumerations

    /**
    * Describes how a collection has changed.
    * @see {@link http://msdn.microsoft.com/en-us/library/dd393774(v=vs.100).aspx}
    */
    enum NotifyCollectionChangedAction {
        /**
        * The integer 0, indicating the changed action to the collection is add.
        */
        add = 0,
        /**
        * The integer 1, indicating the changed action to the collection is remove.
        */
        remove = 1,
        /**
        * The integer 2, indicating the changed action to the collection is reset.
        */
        reset = 2
    }

    //#endregion

    //#region Interfaces

    /**
    * Provides a common interface for all components that can contain other components.
    */
    interface IContainer {

        //#region Methods

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

        //#endregion
    }

    /**
    * Provides a common interface for the application-defined tasks of closing, releasing, or resetting resources held by instances of a registered Microsoft Ajax Library class.
    * Implement the IDisposable interface to provide a common interface for closing or releasing resources held by instances of your registered Microsoft Ajax Library class.
    * You register an interface by when you register the class by calling the Type.registerClass method. You specify IDisposable in the interfaceTypes parameter when you call Type.registerClass.
    */
    interface IDisposable {

        //#region Methods

        /**
        * Releases resources held by an object that implements the Sys.IDisposable interface.
        * Implement the dispose method to close or release resources held by an object, or to prepare an object for reuse.
        */
        dispose(): void;

        //#endregion
    }

    /**
    * Indicates that the type that implements the interface provides disposing notifications.
    * Implement this interface if the class must notify other objects when it is releasing resources. The base component class already implements this interface. Therefore, typically this interface is already available.
    */
    interface INotifyDisposing {

        //#region Events

        /**
        * Occurs when an object's resources are released.
        * @param handler
        *       The name of the event handler for the disposing event.
        */
        add_disposing(handler: Function): void;
        /**
        * Occurs when an object's resources are released.
        * @param handler
        *       The name of the event handler for the disposing event.
        */
        remove_disposing(handler: Function): void;

        //#endregion
    }

    /**
    * Defines the propertyChanged event.
    */
    interface INotifyPropertyChange {

        //#region Events

        /**
        * Occurs when a component property is set to a new value.
        * @param handler
        *       The name of the event handler for the propertyChanged event.
        */
        add_propertyChanged(handler: Function): void;
        /**
        * Occurs when a component property is set to a new value.
        * @param handler
        *       The name of the event handler for the propertyChanged event.
        */
        remove_propertyChanged(handler: Function): void;

        //#endregion
    }

    //#endregion

    //#region Event Args

    /*
    * Used by the Application class to hold event arguments for the load event.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb383787(v=vs.100).aspx}
    */
    class ApplicationLoadEventArgs {

        //#region Constructors

        /**
        * Initializes a new instance of the ApplicationLoadEventArgs class.
        * @param components
        *           The list of components that were created since the last time the load event was raised.
        * @param isPartialLoad
        *           true to indicate that the event is a partial-page update.
        */
        constructor(components: any, isPartialLoad: boolean);

        //#endregion

        //#region Properties

        /**
        * Gets an array of all the components that were created since the last time the load event was raised.
        * @return An array of all the components that were created since the last time the load event was raised.
        */
        get_components(): Component[];
        /**
        * Returns a value that indicates whether the page is engaged in a partial-page update.
        * @return true if the page is engaged in a partial-page update; otherwise, false.
        */
        get_isPartialLoad(): boolean;

        //#endregion
    }

    /**
    * Provides a base class for classes that are used by event sources to pass event argument information.
    * The EventArgs class is a base class and not intended to be used directly. Override this constructor to provide specific functionality.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb383795(v=vs.100).aspx}
    */
    class EventArgs {

        //#region Constructors

        /**
         * Initializes a new instance of the EventArgs class.
         */
        constructor();

        //#endregion

        //#region Fields

        /**
        * A static object of type EventArgs that is used as a convenient way to specify an empty EventArgs instance.
        */
        static Empty: EventArgs;

        /**
        * An object of type EventArgs that is used as a convenient way to specify an empty EventArgs instance.
        */
        Empty: EventArgs;

        //#endregion

    }

    /**
    * Provides a class for command events.
    * Event handlers can use the cancel property to cancel the operation in progress. The semantics of canceling an event depend on the event source.
    * @see {@link http://msdn.microsoft.com/en-us/library/dd393715(v=vs.100).aspx
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
    * @see {@link http://msdn.microsoft.com/en-us/library/bb311009(v=vs.100).aspx}
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
    * @see {@link http://msdn.microsoft.com/en-us/library/cc488008(v=vs.100).aspx}
    */
    class HistoryEventArgs extends EventArgs {

        //#region Constructors

        /**
        * For a live code example that demonstrates this event in action, and for a view of how this event is used in code, see Managing Browser History Using Client Script.
        * @param state Object. A collection of key/value pairs that represent the state data. This data will be added to the main state to form the global state of the new history point.
        */
        constructor(state: any);

        //#endregion

        //#region Methods

        /**
        * Object. A collection of name/value pairs that represent the state of a Web page.
        * The state object stores the data that is required in order to restore a Web page to a specified application state.
        * @return Object. A collection of name/value pairs that represent the state of a Web page.
        */
        get_State(): any;

        //#endregion
    }

    /**
    * Describes how the collection was changed.
    * @see {@link http://msdn.microsoft.com/en-us/library/dd393665(v=vs.100).aspx}
    */
    class NotifyCollectionChangedEventArgs extends EventArgs {

        //#region Constructors

        /**
        * Initializes a new instance of the CancelEventArgs class.
        * @param changes
        *           A CollectionChange object that contains an array of changes that were performed on the collection since the last event.
        */
        constructor(changes: CollectionChange);

        //#endregion

        //#region Properties

        /**
        * Gets an array of changes that were performed on the collection since the last event.
        * @return An array of CollectionChange objects that were performed on the collection since the last event.
        */
        get_changes(): CollectionChange[];

        //#endregion
    }

    /**
    * Used by the propertyChanged event to indicate which property has changed.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310957(v=vs.100).aspx}
    */
    class PropertyChangedEventArgs extends EventArgs {

        //#region Constructors

        /**
        * Initializes a new instance of the PropertyChangedEventArgs class.
        * @param propertyName
        *           The name of the property that changed.
        */
        constructor(propertyName: string);

        //#endregion

        //#region Methods

        /**
        * Gets the name of the property that changed.
        * Use the propertyName property to determine the name of the property that changed.
        * @return A string that contains the name of the property that changed.
        */
        propertyName(): string;


        //#endregion
    }

    //#endregion

    //#region Exception Types
    // Really not a types
    ///**
    //* Raised when a function or method is invoked and at least one of the passed arguments does not meet the parameter specification of the called function or method.
    //*/
    //class ArgumentException {

    //}
    ///**
    //* Raised when an argument has an invalid value of null.
    //*/
    //class ArgumentNullException {

    //}
    ///**
    //* Raised when an argument value is outside an acceptable range.
    //*/
    //class ArgumentOutOfRangeException {

    //}
    ///**
    //* Raised when a parameter is not an allowed type.
    //*/
    //class ArgumentTypeException {

    //}
    ///**
    //* Raised when an argument for a required method parameter is undefined.
    //*/
    //class ArgumentUndefinedException {

    //}
    ///**
    //*
    //*/
    //class FormatException {

    //}
    ///**
    //* Raised when a call to a method has failed, but the reason was not invalid arguments.
    //*/
    //class InvalidOperationException {

    //}
    ///**
    //* Raised when a requested method is not supported by an object.
    //*/
    //class NotImplementedException {

    //}
    ///**
    //* Raised when an invalid number of arguments have been passed to a function.
    //*/
    //class ParameterCountException {

    //}
    ///**
    //* Raised by the Microsoft Ajax Library framework when a script does not load successfully. This exception should not be thrown by the developer.
    //*/
    //class ScriptLoadFailedException {

    //}

    //#endregion

    //#region Sys.Net Namespace

    /**
    * The Sys.Net namespace contains classes that manage communication between AJAX-enabled ASP.NET client applications and Web services on the server. For more information, see Using Web Services in ASP.NET AJAX. The Sys.Net namespace is part of the Microsoft Ajax Library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310860(v=vs.100).aspx}
    */
    namespace Net {

        /**
         * Generated Proxy Classes
         * Enables your application to call Web services asynchronously by using ECMAScript (JavaScript).
         * @see {@link http://msdn.microsoft.com/en-us/library/bb310823(v=vs.100).aspx}
         */
        class WebServiceProxy {
            static invoke(
                servicePath: string,
                methodName: string,
                useGet?: boolean,
                params?: any,
                onSuccess?: (result: string, eventArgs: EventArgs) => void,
                onFailure?: (error: WebServiceError) => void,
                userContext?: any,
                timeout?: number,
                enableJsonp?: boolean,
                jsonpCallbackParameter?: string): WebRequest;
        }

        class WebServiceError {
            get_errorObject(): any;
            get_exceptionType(): any;
            get_message(): string;
            get_stackTrace(): string;
            get_statusCode(): number;
            get_timedOut(): boolean;
        }

        /**
         * Contains information about a Web request that is ready to be sent to the current Sys.Net.WebRequestExecutor instance.
         * This class represents the type for the second parameter of the callback function added by the add_invokingRequest method.
         * The callback function is called before the Web request is routed to the current instance of the WebRequestExecutor class.
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/bb397488(v=vs.100).aspx}
         */
        class NetworkRequestEventArgs {

            //#region Constructors

            /**
             * Initializes a new instance of the Sys.Net.NetworkRequestEventArgs. class.
             * @param value
             *      The current WebRequest instance.
             */
            constructor(value: WebRequest);

            //#endregion

            //#region Methods

            //#endregion

            //#region Properties

            /**
             * Gets the Web request to be routed to the current Sys.Net.WebRequestExecutor instance.
             * Use this property to inspect the contents of a Web request before it is routed to the current instance of the Sys.Net.WebRequestExecutor class.
             * You can access the Web request instance from the handler that is called before the request is routed.
             * This event handler is added by using the add_invokingRequest method.
             * @return
             *      The WebRequest.
             */
            get_webRequest(): WebRequest;

            //#endregion

        }

        /**
        * Provides the script API to make a Web request.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310979(v=vs.100).aspx}
        */
        class WebRequest {

            //#region Constructors

            /**
            * Initializes a new instance of the Sys.Net.WebRequest class.
            */
            constructor();

            //#endregion

            //#region Members
            get_url(): string;
            set_url(value: string): void;
            get_httpVerb(): string;
            set_httpVerb(value: string): void;
            get_timeout(): number;
            set_timeout(value: number): void;
            get_body(): string;
            set_body(value: string): void;
            get_headers(): { [key: string]: string; };
            get_userContext(): any;
            set_userContext(value: any): void;
            get_executor(): WebRequestExecutor;
            set_executor(value: WebRequestExecutor): void;

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

        /**
        * Provides the abstract base class from which network executors derive.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397434(v=vs.100).aspx}
        */
        class WebRequestExecutor {

            //#region Constructors

            /**
            * Initializes a Sys.Net.WebRequestExecutor instance when implemented in a derived class.
            */
            constructor();

            //#endregion

            //#region Methods

            /**
            * Stops the pending network request issued by the executor.
            * The specifics of aborting a request vary depending on how an executor is implemented.
            * However, all executors that derive from WebRequestExecutor must set their state to aborted and must raise the completed event of the associated Sys.Net.WebRequest object.
            * The executor properties do not contain consistent data after abort has been called.
            */
            abort(): void;
            /**
            * Instructs the executor to execute a Web request.
            * When this method is called, the executor packages the content of the Web request instance and initiates processing.
            * This method is intended to be used by a custom executor. If you are implementing a custom executor, you instantiate the executor, assign it to the Web request instance, and then invoke the method on the executor instance.
            * @see {@link http://msdn.microsoft.com/en-us/library/bb383834(v=vs.100).aspx}
            */
            executeRequest(): void;
            /**
            * Gets all the response headers for the current request.
            * If a request finished successfully and with valid response data, this method returns all the response headers.
            * @return All the response headers
            * @see {@link http://msdn.microsoft.com/en-us/library/bb310805(v=vs.100).aspx}
            */
            getAllResponseHeaders(): string;
            /**
            * Gets the value of the specified response header.
            * @return The specified response header.
            */
            getResponseHeader(key: string): string;

            //#endregion

            //#region Properties

            /**
            * Gets the JSON-evaluated object from the response.
            * @return The JSON-evaluated response object.
            */
            object(): any;
            /**
            * Gets a value indicating whether the request associated with the executor was aborted.
            * When the current instance of the Sys.Net.WebRequestExecutor class is aborted, it must set its state to aborted and it must raise the completed event of the associated request object.
            * @return true if the request associated with the executor was aborted; otherwise, false.
            */
            get_aborted(): boolean;
            /**
            * Gets a value indicating whether the request completed successfully.
            * Successful completion usually means a well-formed response was received by the executor.
            * If a response was received, the current instance of the Sys.Net.WebRequestExecutor class must set its state to completed.
            * It must also raise the completed event of the associated request object.
            * @return true if the request completed successfully; otherwise, false.
            */
            get_responseAvailable(): boolean;
            /**
            * Gets the text representation of the response body. When a request has completed successfully with valid response data, this property returns the text that is contained in the response body.
            * @return The text representation of the response body.
            */
            get_responseData(): string;
            /**
            * Returns a value indicating whether the executor has started processing the request.
            * The executor returns true if substantial processing of the request has started. For executors that make network calls, substantial processing means that a network call has been started.
            * @return true if the executor has started processing the request; otherwise, false.
            */
            get_started(): boolean;
            /**
            * Gets a success status code.
            * The statusCode property returns an integer that specifies that a request completed successfully and with valid response data.
            * @return An integer that represents a status code.
            */
            get_statusCode(): number;
            /**
            * Gets status information about a request that completed successfully.
            * The statusText property returns status information if a request completed successfully and with valid response data.
            * @return the status text
            */
            get_statusText(): string;
            /**
            * Gets a value indicating whether the request timed out.
            * Executors use the time-out information associated with the request to raise the completed event on the associated WebRequest object.
            * @return true if the request timed out; otherwise, false.
            */
            get_timedOut(): boolean;
            /**
            * Attempts to get the response to the current request as an XMLDOM object.
            * If a request finished successfully with valid response data, this method tries to get the response as an XMLDOM object.
            */
            get_xml(): XMLDocument;
            /**
            * Gets the WebRequest object associated with the executor.
            * @return The WebRequest object associated with the current executor instance.
            */
            get_webRequest(): Sys.Net.WebRequest;

            //#endregion
        }


        /**
         * Manages the flow of the Web requests issued by the Sys.Net.WebRequest object to the associated executor object.
         * @see {@link http://msdn.microsoft.com/en-us/library/bb397435(v=vs.100).aspx}
         */
        class IWebRequestManager {

            //#region Constructor

            /**
             * Initializes a new instance of the Sys.Net.WebRequestManager class when implemented in a derived class.
             */
            constructor();

            //#endregion

            //#region Methods

            /**
             * Registers a handler for the completed request event of the WebRequestManager.
             * @param handler
             *      The function registered to handle the completed request event.
             */
            add_completedRequest(handler: (sender: WebRequestExecutor, eventArgs: EventArgs) => void): void;
            /**
             * Registers a handler for processing the invoking request event of the WebRequestManager.
             * @param handler
             *      The function registered to handle the invoking request event.
             */
            add_invokingRequest(handler: (sender: WebRequestExecutor, networkRequestEventArgs: NetworkRequestEventArgs) => void): void;
            /**
             * Sends Web requests to the default network executor.
             * This member supports the client-script infrastructure and is not intended to be used directly from your code.
             * @param WebRequest
             *      An instance of the Sys.Net.WebRequest class.
             */
            executeRequest(WebRequest: Sys.Net.WebRequest): void;
            /**
             * Removes the event handler set by the add_completedRequest method.
             * Use the remove_ completedRequest method to remove the event handler you set using the add_ completedRequest method.
             * @param handler
             *      The function that handles the completed request event.
             */
            remove_completedRequest(handler: (sender: WebRequestExecutor, eventArgs: EventArgs) => void): void;
            /**
             * Removes the event handler set by the add_invokingRequest method.
             * Use the remove_invokingRequest method to remove the event handler you set using the add_invokingRequest method.
             * @param handler
             *          The function that handles the invoking request event.
             */
            remove_invokingRequest(handler: (sender: WebRequestExecutor, networkRequestEventArgs: NetworkRequestEventArgs) => void): void;

            //#endregion

            //#region Properties

            /**
             * Gets or sets the default network executor type that is used to make network requests.
             * @return
             *      The object that represents the default Web request executor.
             */
            get_defaultExecutorType(): Sys.Net.WebRequestExecutor;
            /**
             * Gets or sets the default network executor type that is used to make network requests.
             * @param value
             *          A reference to an implementation of the WebRequestExecutor class.
             */
            set_defaultExecutorType(value: Sys.Net.WebRequestExecutor): void;
            /**
             * Gets or sets the time-out for the default network executor.
             * @return
             *      An integer value that indicates the current time-out for the default executor.
             */
            get_defaultTimeout(): number;
            /**
             * Gets or sets the time-out for the default network executor.
             *
             * @throws Sys.ArgumentOutOfRangeException An invalid parameter was passed.
             * @param value
             *          The time in milliseconds that the default executor should wait before timing out a Web request. This value must be 0 or a positive integer.
             */
            set_defaultTimeout(value: number): void;

            //#endregion

        }

        export var WebRequestManager: IWebRequestManager;

    }

    //#endregion

    //#region Sys.Serialization Namespace

    /**
    * Contains classes related to data serialization for AJAX client functionality in ASP.NET. For more information, see Using Web Services in ASP.NET AJAX.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb310840(v=vs.100).aspx}
    */
    namespace Serialization {

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
    namespace Services {

        /**
        * Provides the client proxy class for the authentication service.
        * The AuthenticationService class is a singleton; it has only one instance with a global point of access.
        * It is always available to your application and you do not have to instantiate it.
        * The AuthenticationService class provides script access to user authentication.
        * It calls methods of the authentication service through the same infrastructure used to call any other Web service method.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310861(v=vs.100).aspx}
        */
        class AuthenticationService {

            //#region Constructors

            /**
            * Initializes a new instance of the Sys.Services.AuthenticationService class.
            */
            constructor();

            //#endregion

            //#region Fields

            /**
            * Specifies the path of the default authentication service.
            */
            DefaultWebServicePath: string;

            //#endregion

            //#region Methods

            /**
            * Authenticates the user's credentials.
            * @param userName (required) The user name to authenticate.
            * @param password
            *           The user's password. The default is null.
            * @param isPersistent
            *           true if the issued authentication ticket should be persistent across browser sessions; otherwise, false. The default is false.
            * @param redirctUrl
            *           The URL to redirect the browser to on successful login. The default is null.
            * @param customInfo
            *
            * @param loginCompletedCallback
            *           The function to call when the login has finished successfully. The default is null.
            * @param failedCallback
            *           The function to call if the login fails. The default is null.
            * @param userContext
            *           User context information that you are passing to the callback functions.
            * @exception Sys.ArgumentNullException - username is null.
            */
            login(userName: string, password: string, isPersistent: boolean, customInfo: any, redirectUrl: string, loginCompletedCallback: Function, failedCallback: Function, userContext: any): void;

            /**
            * Logs out the currently authenticated user.
            *
            * If redirectUrl is null or is an empty string, the page is redirected to itself after the call to the authentication Web service finishes and the completed callback function is called.
            * This makes sure that any user-related data is cleared from the page. If redirectUrl is not null or is a non-empty string, the page is redirected to the specified URL after a successful call to the Web service.
            * This URL can be an absolute virtual path, a relative virtual path, or a fully qualified domain name and a path.
            * If the call to the Web service fails, the page is not redirected or refreshed. Instead, the failed callback function is called.
            *
            * @param redirectUrl
            *           The URL to redirect the browser to on successful logout. The default is null.
            * @param logoutCompletedCallback
            *           The function that is called when the logout has finished. The default is null.
            * @param failedCallback
            *           The function that is called if the logout has failed. The default is null.
            * @param userContext
            *            User context information that you are passing to the callback functions.
            */
            logout(redirectUrl: string, logoutCompletedCallback: Function, failedCallback: Function, userContext: any): void;

            //#endregion

            //#region Properties

            /**
            * Gets or sets the name of the default failure callback function.
            */
            get_defaultFailedCallback(): Function;
            /**
            * Gets or sets the name of the default failure callback function.
            * @param value
            *           A string that contains the name of the default failure callback function.
            */
            set_defaultFailedCallback(value: string): void;
            /**
            * Gets or sets the default succeeded callback function for the service.
            * @return A reference to the succeeded callback function for the service.
            */
            defaultSucceededCallback(): Function;
            /**
            * Gets or sets the default succeeded callback function for the service.
            * @param value
            *           A reference to the succeeded callback function for the service.
            */
            defaultSucceededCallback(value: Function): void;
            /**
            * Gets or sets the default user context for the service.
            * @return A reference to the user context for the service.
            */
            defaultUserContext(): Object
            /**
            * Gets or sets the default user context for the service.
            * @param value
            *       A reference to the user context for the service.
            */
            defaultUserContext(value: Object): void;
            /**
            * Gets the authentication state of the current user.
            * The value of this property is set by the ScriptManager object during a page request.
            * @return true if the current user is logged in; otherwise, false.
            */
            get_isLoggedIn(): boolean;
            /**
            * Gets or sets the authentication service path.
            * You usually set the path property in declarative markup. This value can be an absolute virtual path, a relative virtual path, or a fully qualified domain name and a path.
            * By default, the path property is set to an empty string. If you do not set the path property, the internal default path is used, which points to the built-in authentication service.
            * @param value
            *           The authentication service path.
            */
            set_path(value: string): void;
            /**
            * Gets or sets the authentication service path.
            * By default, the path property is set to an empty string. If you do not set the path property, the internal default path is used, which points to the built-in authentication service.
            */
            get_path(): string;
            /**
            * Gets or sets the authentication service time-out value.
            * The timeout property represents the time in milliseconds that the current instance of the Sys.Net.WebRequestExecutor class should wait before timing out the request.
            * By setting a time-out interval, you can make sure that a pending request returns based on a time interval that you specify, instead of waiting for the asynchronous communication layer to time out.
            * @param value
            *           The time-out value in milliseconds.
            */
            set_timeout(value: number): void;
            /**
            * Gets or sets the authentication service time-out value.
            * The timeout property represents the time in milliseconds that the current instance of the Sys.Net.WebRequestExecutor class should wait before timing out the request.
            * The timeout in milliseconds
            * @return
            *       The timeout
            */
            get_timeout(): number;

            //#endregion
        }

        /**
        * Defines a profile group.
        * The ProfileGroup class defines the type of an element as a group in the properties collection of the Sys.Services.ProfileService class.
        * Profile group properties are accessed as subproperties of the related group, as shown in the following ECMAScript (JavaScript) example:
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310801(v=vs.100).aspx}
        */
        class ProfileGroup {

            //#region Constructors

            constructor();

            /**
            * Initializes a new instance of the Sys.Services.ProfileGroup class.
            * @param properties
            *           (Optional) An object that contains the settings for this profile group. This parameter can be null.
            */

            constructor(properties: Object);

            //#endregion

            //#region Methods



            //#endregion

        }

        /**
        * Provides the client proxy class for the role service.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb513880(v=vs.100).aspx}
        */
        class RoleService {

        }

        /**
        * Provides the client proxy class for the profile service.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb383800(v=vs.100).aspx}
        */
        class ProfileService {

            new(): ProfileService;

            //#region Fields

            /**
             * Specifies the path of the default profile service.
             */
            static DefaultWebServicePath: string;
            /**
             * Contains the loaded profile data. You can access the loaded profile data directly from the properties field.
             * An element in the properties field can be a property group of type ProfileGroup. If it is, the related properties appear as sub-properties. For more information, see Sys.Services.ProfileGroup Class.
             */
            static properties: any;

            //#endregion

            //#region Methods

            /**
            * Loads the specified profile properties.
            *
            * If propertyNames is not supplied, all profile properties enabled for read access are loaded from the server.
            * The loaded profile can then be accessed directly from the properties field.
            * This enables your application to access the profile properties by using simple field syntax, as shown in the following example:
            * @example
            *      Sys.Services.ProfileService.load(null, LoadCompletedCallback, ProfileFailedCallback, null);
            *
            * @param propertyName
            *      A string array that contains the profile properties to load.
            * @param loadCompletedCallback
            *      The function that is called when loading has completed. The default is null.
            * @param failedCallback
            *      The function that is called when loading has failed. The default is null.
            * @param userContext
            *      User context information passed to the callback functions.
            */
            static load(propertyNames: string[], loadCompletedCallback: Function, failedCallback: Function, userContext: any): void;
            /**
             * @param propertyNames
             *          A string array that contains the profile properties to save.
             * @param saveCompletedCallback
             *          The function that is called when the save method has finished. The default is null.
             * @param failedCallback
             *          The function that is called if the save method has failed. The default is null.
             * @param userContext
             *      User context information passed to the callback functions.
             */
            static save(propertyNames: string[], saveCompletedCallback: Function, failedCallback: Function, userContext: any): void;

            //#endregion

            //#region Properties

            /**
             * Gets or sets the name of the default failure callback function.
             * @param value
             *      A string that contains the name of the default failure callback function.
             */
            static set_defaultFailedCallback(value: string): void;
            static get_defaultFailedCallback(): Function;
            /**
             * Gets or sets the name of the default load-completed callback function.
             *
             * @param value
             *      A string that contains the name of the default load-completed callback function.
             */
            static set_defaultLoadCompletedCallback(value: string): void;
            static get_defaultLoadCompletedCallback(): Function;
            /**
             * Gets or sets the name of the default save-completed callback function.
             * @param value
             *      A string that contains the name of the default save-completed callback function.
             */
            static set_defaultSaveCompletedCallback(value: string): void;
            static get_defaultSaveCompletedCallback(): Function;
            /**
             * Gets or sets the default succeeded callback function for the service.
             * @return
             *      A reference to the succeeded callback function for the service.
             */
            static defaultSucceededCallback(): Function;
            static defaultSucceededCallback(value: Function): void;
            /**
             * Gets or sets the default user context for the service.
             * @return
             *      A reference to the user context for the service.
             */
            static defaultUserContext(): Object;
            /**
             * Gets or sets the default user context for the service.
             */
            static defaultUserContext(value: Object): void;
            /**
             * Gets or sets the profile service path.
             * @param value
             *          A string that contains the profile service path.
             */
            static set_path(value: string): void;
            /**
             * Gets or sets the profile service path.
             * @return
             *      The profile path
             */
            static get_path(): string;

            /**
             * Gets or sets the profile service time-out value.
             * The timeout property represents the time in milliseconds that the current instance of the Sys.Net.WebRequestExecutor class should wait before timing out the request.
             * By setting a time-out interval, you can make sure that a pending request returns based on a time interval that you specify, instead of waiting for the asynchronous communication layer to time out.
             *
             * @param value
             *          The time-out value in milliseconds.
             */
            static set_timeout(value: number): void;
            /**
             * Gets or sets the profile service time-out value.
             */
            static get_timeout(): number;

            //#endregion
        }

    }

    //#endregion

    //#region Sys.UI Namespace

    /**
    * Contains types related to the user interface (UI), such as controls, events, and UI properties in the Microsoft Ajax Library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397431(v=vs.100).aspx}
    */
    namespace UI {

        /**
        * Provides a base class for all ASP.NET AJAX client behaviors.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb311020(v=vs.100).aspx}
        */
        class Behavior extends Sys.Component {

            //#region Methods

            /**
            * Gets a Sys.UI.Behavior instance with the specified name property from the specified HTML Document Object Model (DOM) element. This member a static member and can be invoked without creating an instance of the class.
            * @return The specified Behavior object, if found; otherwise, null.
            */
            static getBehaviorByName(element: HTMLElement, name: string): Behavior;
            /**
            * Gets an array of Sys.UI.Behavior objects that are of the specified type from the specified HTML Document Object Model (DOM) element. This method is static and can be invoked without creating an instance of the class.
            * @return An array of all Behavior objects of the specified type that are associated with the specified DOM element, if found; otherwise, an empty array.
            */
            static getBehaviorsByType(element: HTMLElement, type: Sys.UI.Behavior): Behavior[];
            /**
            * Gets the Sys.UI.Behavior objects that are associated with the specified HTML Document Object Model (DOM) element. This member is static and can be invoked without creating an instance of the class.
            * @param element
            *           The HTMLElement object to search.
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
            get_element(): HTMLElement;
            /**
            * Gets or sets the identifier for the Sys.UI.Behavior object.
            * A generated identifier that consists of the ID of the associated HTMLElement, the "$" character, and the name value of the Behavior object.
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

            //#region Constructors

            /**
            * When called from a derived class, initializes a new instance of that class.
            * The Control constructor is a complete constructor function. However, because the Control class is an abstract base class, the constructor should be called only from derived classes.
            * @param element
            *           The HTMLElement object that the control will be associated with.
            *
            * @throws Error.invalidOperation Function
            */
            constructor(element: HTMLElement);

            //#endregion

            //#region Methods

            /**
             * Adds a CSS class to the HTML Document Object Model (DOM) element that the control is attached to.
             * Use the addCssClass method to add a CSS class to a control. If the CSS class has already been added to the control, addCssClass makes no changes to the control.
             * @param className
             *          A string that contains the name of the CSS class to add.
             */
            addCssClass(className: string): void;
            /**
             * Removes the current control from the application.
             * The dispose method releases all resources from the Sys.UI.Control object, unbinds it from its associated HTML Document Object Model (DOM) element, and unregisters it from the application.
             */
            dispose(): void;
            /**
             * Initializes the current Sys.UI.Control object.
             * The initialize method initializes the control and sets the base Sys.Component.isInitialized property to true. You can override this method to include additional initialization logic for your derived class.
             */
            initialize(): void;
            /**
             * Called when an event is raised by the raiseBubbleEvent method.
             *
             * The onBubbleEvent method returns false to make sure that unhandled events propagate (bubble) to the parent control.
             * In derived classes, you should override the onBubbleEvent method and return true when events are handled to prevent the events from bubbling further.
             * For an explanation of bubbling, see Sys.UI.Control raiseBubbleEvent Method.
             *
             * @param source
             *          The object that triggered the event.
             * @param args
             *          The event arguments.
             * @return
             *      false in all cases.
             */
            onBubbleEvent(source: any, args: any): boolean;
            /**
             * Calls the onBubbleEvent method of the parent control.
             *
             * When the raiseBubbleEvent method is called, the source object and args values are sent to the onBubbleEvent handler of the current control.
             * If onBubbleEvent returns false, they are sent to the onBubbleEvent handler of the parent control.
             * This process continues until an onBubbleEvent event handler returns true, which indicates that the event has been handled.
             * Any event that bubbles to the Sys.Application instance without being handled is ignored.
             *
             * @param source
             *          The object that triggered the event.
             * @param args
             *          The event arguments.
             */
            raiseBubbleEvent(source: any, args: any): void;
            /**
             * Removes a CSS class from the HTML Document Object Model (DOM) element that the control is attached to.
             * Use the removeCssClass method to remove a CSS class from a control. If the CSS class has already been removed from the control, removeCssClass makes no changes to the control.
             *
             * @param className
             *          A string that contains the name of the CSS class to remove.
             */
            removeCssClass(className: string): void;
            /**
             * Toggles a CSS class of the HTML Document Object Model (DOM) element that the control is attached to.
             * @param className
             *          A string that contains the name of the CSS class to toggle.
             */
            toggleCssClass(className: string): void;

            //#endregion

            //#region Properties
            /**
            * Gets the HTML Document Object Model (DOM) element that the current Sys.UI.Control object is associated with.
            * @return The DOM element that the current Control object is associated with.
            */
            get_element(): HTMLElement;
            /**
            * Gets or sets the identifier for the Sys.UI.Control object.
            * A generated identifier that consists of the ID of the associated HTMLElement, the "$" character, and the name value of the Control object.
            */
            get_id(): string;
            /**
            * Gets or sets the identifier for the Sys.UI.Control object.
            * @param value
            *           The string value to use as the identifier.
            */
            set_id(value: string): void;
            /*
            * Gets or sets the name of the Sys.UI.Control object.
            * If you do not explicitly set the name property, getting the property value sets it to its default value, which is equal to the type of the Control object. The name property remains null until it is accessed.
            * @param value
            *           A string value to use as the name.
            */

            //#endregion
        }
        /**
        * Defines static methods and properties that provide helper APIs for manipulating and inspecting DOM elements.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb383788(v=vs.100).aspx}
        */
        interface DomElement {

            //#region Constructors


            //#endregion

            //#region Methods

            /**
             * Adds a CSS class to a DOM element if the class is not already part of the DOM element. This member is static and can be invoked without creating an instance of the class.
             * If the element does not support a CSS class, no change is made to the element.
             * @param element
             *             The HTMLElement object to add the CSS class to.
             * @param className
             *             The name of the CSS class to add.
             */
            addCssClass(element: HTMLElement, className: string): void;
            /**
             * Gets a value that indicates whether the DOM element contains the specified CSS class. This member is static and can be invoked without creating an instance of the class.
             * @param element
             *          The HTMLElement object to test for the CSS class.
             * @param className
             *          The name of the CSS class to test for.
             * @return
             *          true if the element contains the specified CSS class; otherwise, false.
             */
            containsCssClass(element: HTMLElement, className: string): boolean;
            /**
             * Gets a set of integer coordinates that represent the position, width, and height of a DOM element. This member is static and can be invoked without creating an instance of the class.
             *
             * @param element
             *          The HTMLElement instance to get the coordinates of.
             * @return
             *      An object of the JavaScript type Object that contains the x-coordinate and y-coordinate of the upper-left corner, the width, and the height of the element in pixels.
             */
            getBounds(element: HTMLElement): { x: number; y: number; width: number; height: number; };
            /**
             * @param id
             *      The ID of the element to find.
             * @param element
             *      (optional) The parent element to search in. The default is the document element.
             */
            getElementById(id: string): HTMLElement;
            getElementById(id: string, element?: HTMLElement): HTMLElement;
            getElementById(id: string, element?: HTMLElement): HTMLElement;
            getElementById(id: string, element: any): any;
            /**
             * Gets the absolute position of a DOM element relative to the upper-left corner of the owner frame or window. This member is static and can be invoked without creating an instance of the class.             *
             * @param element
             *      The target element.             *
             * @return
             *      An object of the JavaScript type Object that contains the x-coordinate and y-coordinate of the element in pixels.
             */
            getLocation(element: HTMLElement): Sys.UI.Point;
            /*
             * Returns a value that represents the layout characteristics of a DOM element when it is hidden by invoking the HTMLElement.setVisible method. This member is static and can be invoked without creating an instance of the class.
             * @param element
             *      The target DOM element.
             * @return
             *    A Sys.UI.VisibilityMode enumeration value that indicates the layout characteristics of element when it is hidden by invoking the setVisible method.
             */
            getVisibilityMode(element: HTMLElement): Sys.UI.VisibilityMode;
            /**
             * Gets a value that indicates whether a DOM element is currently visible on the Web page. This member is static and can be invoked without creating an instance of the class.
             * @param element
             *      The target DOM element.
             * @return
             *      true if element is visible on the Web page; otherwise, false
             */
            getVisible(element: any): boolean;
            /**
             * Determines whether the specified object is a DOM element.
             * @param obj
             *      An object
             * @return
             *      true if the object is a DOM element; otherwise, false.
             */
            isDomElement(obj: any): boolean;
            /**
             * Raises a bubble event. A bubble event causes an event to be raised and then propagated up the control hierarchy until it is handled.
             * @param source
             *      The DOM element that triggers the event.
             * @param args
             *      The event arguments
             */
            raiseBubbleEvent(source: HTMLElement, args: EventArgs): void;
            /**
             * Removes a CSS class from a DOM element. This member is static and can be invoked without creating an instance of the class. If the element does not include a CSS class, no change is made to the element.
             * @param element
             *          The HTMLElement object to remove the CSS class from.
             * @param className
             *          The name of the CSS class to remove.
             */
            removeCssClass(element: HTMLElement, className: string): void;
            removeCssClass(element: HTMLElement, className: string): void;
            removeCssClass(element: any, className: string): void;
            /**
             * Returns the element that has either the specified ID in the specified container, or is the specified element itself.
             * The resolveElement method is used to verify that an ID or an object can be resolved as an element.             *
             * @param elementOrElementId
             *          The element to resolve, or the ID of the element to resolve. This parameter can be null.
             * @param containerElement
             *          (Optional) The specified container.
             * @return
             *      A DOM element.
             */
            resolveElement(elementOrElementId: string|HTMLElement, containerElement?: HTMLElement): HTMLElement;
            /**
             * Sets the position of a DOM element. This member is static and can be invoked without creating an instance of the class.
             * he left and top style attributes (upper-left corner) of an element specify the relative position of an element.
             * The actual position will depend on the offsetParent property of the target element and the positioning mode of the element.             *
             * @param element The target element.
             * @param x The x-coordinate in pixels.
             * @param y The y-coordinate in pixels.
             */
            setLocation(element: HTMLElement, x: number, y: number): void;
            /**
             * Sets the layout characteristics of a DOM element when it is hidden by invoking the HTMLElement.setVisible method.
             * This member is static and can be invoked without creating an instance of the class.
             *
             * Use the setVisibilityMode method to set the layout characteristics of a DOM element when it is hidden by invoking the HTMLElement.setVisible method.
             * For example, if value is set to Sys.UI.VisibilityMode.collapse, the element uses no space on the page when the setVisible method is called to hide the element.
             *
             * @param element
             *          The target DOM element.
             * @param value
             *          A Sys.UI.VisibilityMode enumeration value.
             */
            setVisibilityMode(element: HTMLElement, value: Sys.UI.VisibilityMode): void;
            /**
             * Sets a DOM element to be visible or hidden. This member is static and can be invoked without creating an instance of the class.
             *
             * Use the setVisible method to set a DOM element as visible or hidden on the Web page.
             * If you invoke this method with value set to false for an element whose visibility mode is set to "hide," the element will not be visible.
             * However, it will occupy space on the page. If the element's visibility mode is set to "collapse," the element will occupy no space in the page.
             * For more information about how to set the layout characteristics of hidden DOM elements, see HTMLElement setVisibilityMode Method.
             *
             * @param element
             *      The target DOM element.
             * @param value
             *      true to make element visible on the Web page; false to hide element.
             */
            setVisible(element: HTMLElement, value: boolean): void;
            /**
             * Toggles a CSS class in a DOM element. This member is static and can be invoked without creating an instance of the class.
             * Use the toggleCssClass method to hide a CSS class of an element if it is shown, or to show a CSS class of an element if it is hidden.
             *
             * @param element
             *          The HTMLElement object to toggle.
             * @param className
             *          The name of the CSS class to toggle.
             */
            toggleCssClass(element: HTMLElement, className: string): void;

            //#endregion

        }

        var DomElement: DomElement;

        /**
        * Provides cross-browser access to DOM event properties and helper APIs that are used to attach handlers to DOM element events.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310935(v=vs.100).aspx}
        */
        class DomEvent {

            //#region Constructors

            /**
            * Initializes a new instance of the Sys.UI.DomEvent class and associates it with the specified HTMLElement object.
            * @param domElement
            *           The HTMLElement object to associate with the event.
            */
            constructor(domElement: HTMLElement);

            //#endregion

            //#region Methods

            /**
             * Provides a method to add a DOM event handler to the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class.
             * Use the addHandler method to add a DOM event handler to the element that exposes the event. The eventName parameter should not include the "on" prefix. For example, specify "click" instead of "onclick".
             * This method can be accessed through the $addHandler shortcut method.
             *
             * @param element
             *          The element that exposes the event.
             * @param eventName
             *          The name of the event.
             * @param handler
             *          The client function that is called when the event occurs.
             * @param autoRemove
             *          (Optional) A boolean value that determines whether the handler should be removed automatically when the element is disposed.
             */
            static addHandler(element: HTMLElement, eventName: string, handler: (e: DomEvent) => void, autoRemove?: boolean): void;
            /**
             * Adds a list of DOM event handlers to the DOM element that exposes the events. This member is static and can be invoked without creating an instance of the class.
             * Use the addHandlers method to add a list of DOM event handlers to the element that exposes the event.
             * The events parameter takes a comma-separated list of name/value pairs in the format name:value, where name is the name of the DOM event and value is the name of the handler function.
             * If there is more than one name/value pair, the list must be enclosed in braces ({}) to identify it as a single parameter. Multiple name/value pairs are separated with commas.
             * Event names should not include the "on" prefix. For example, specify "click" instead of "onclick".
             * If handlerOwner is specified, delegates are created for each handler. These delegates are attached to the specified object instance, and the this pointer from the delegate handler will refer to the handlerOwner object.
             * This method can be accessed through the $addHandlers shortcut method.
             *
             * @param element
             *          The DOM element that exposes the events.
             * @param events
             *          A dictionary of event handlers.
             * @param handlerOwner
             *          (Optional) The object instance that is the context for the delegates that should be created from the handlers.
             * @param autoRemove
             *          (Optional) A boolean value that determines whether the handler should be removed automatically when the element is disposed.
             *
             * @throws Error.invalidOperation - (Debug) One of the handlers specified in events is not a function.
             *
             */
            static addHandlers(element: HTMLElement, events: { [event: string]: (e: DomEvent) => void }, handlerOwner?: any, autoRemove?: boolean): void;
            /**
             * Removes all DOM event handlers from a DOM element that were added through the Sys.UI.DomEvent addHandler or the Sys.UI.DomEvent addHandlers methods.
             * This member is static and can be invoked without creating an instance of the class.
             * This method can be accessed through the $clearHandlers shortcut method.
             *
             * @param element
             *          The element that exposes the events.
             */
            static clearHandlers(element: HTMLElement): void;
            /**
             * Removes a DOM event handler from the DOM element that exposes the event. This member is static and can be invoked without creating an instance of the class.
             *
             * @param element
             *          The element that exposes the event.
             * @param eventName
             *          The name of the event.
             * @param handler
             *          The event handler to remove.
             */
            static removeHandler(element: HTMLElement, eventName: string, handler: (e: DomEvent) => void): void;
            /**
             * Prevents the default DOM event action from happening.
             * Use the preventDefault method to prevent the default event action for the browser from occurring.
             * For example, if you prevent the keydown event of an input element from occurring, the character typed by the user is not automatically appended to the input element's value.
             */
            preventDefault(): void;
            /**
             * Prevents an event from being propagated (bubbled) to parent elements.
             * By default, event notification is bubbled from a child object to parent objects until it reaches the document object.
             * The event notification stops if the event is handled during the propagation process.
             * Use the stopPropagation method to prevent an event from being propagated to parent elements.
             */
            stopPropagation(): void;

            //#endregion

            //#region Fields

            /**
             * Gets a Boolean value that indicates the state of the ALT key when the associated event occurred.
             * Use the altKey field to determine whether the ALT key is pressed when the event occurred.
             *
             * @return true if the ALT key was pressed when the event occurred; otherwise, false.
             */
            altKey: boolean;
            /**
             * Gets a Sys.UI.MouseButton enumeration value that indicates the button state of the mouse when the related event occurred.
             * Use the button field to determine which mouse button was pressed when the related event occurred.
             * @return A MouseButton value
             */
            button: Sys.UI.MouseButton;
            /**
             * Gets the character code of the key that raised the associated keyPress event.
             * Use the charCode field to get the character code of a pressed key or key combination that raised a keyPress event.
             * The keyPress event provides a single character code that identifies key combinations.
             * The keyPress event is not raised for single modifier keys such as ALT, CTRL, and SHIFT.
             *
             * @return An integer value that represents the character code of the key or key combination that was pressed to raise the keyPress event.
             */
            charCode: number;
            /**
             * Gets the x-coordinate of the mouse pointer's position relative to the client area of the browser window, excluding window scroll bars.
             * @return An integer that represents the x-coordinate in pixels.
             */
            clientX: number;
            /**
             * Gets the y-coordinate of the mouse pointer's position relative to the client area of the browser window, excluding window scroll bars.
             * @return An integer that represents the y-coordinate in pixels.
             */
            clientY: number;
            /**
             * Gets a Boolean value that indicates the state of the CTRL key when the associated event occurred.
             * @return true if the CTRL key was pressed when the event occurred; otherwise, false.
             */
            ctrlKey: boolean;
            /**
             * Gets the key code of the key that raised the keyUp or keyDown event.
             * @return An integer value that represents the key code of the key that was pressed to raise the keyUp or keyDown event.
             */
            keyCode: number;
            /**
             * Gets the x-coordinate of the mouse pointer's position relative to the object that raised the event.
             * @return An integer that represents the x-coordinate in pixels.
             */
            offsetX: number;
            /**
             * Gets the y-coordinate of the mouse pointer's position relative to the object that raised the event.
             * @return An integer that represents the y-coordinate in pixels.
             */
            offsetY: number;
            /**
             * Gets the x-coordinate of the mouse pointer's position relative to the user's screen.
             * @return An integer that represents the x-coordinate in pixels.
             */
            screenX: number;
            /**
             * Gets the y-coordinate of the mouse pointer's position relative to the user's screen.
             * @return An integer that represents the y-coordinate in pixels.
             */
            screenY: number;
            /**
             * Gets a Boolean value that indicates the state of the SHIFT key when the associated event occurred.
             * @return true if the SHIFT key was pressed when the event occurred; otherwise, false.
             */
            shiftKey: boolean;
            /**
             * Gets the object that the event acted on.
             * @return An object that represents the target that the event acted on.
             */
            target: any;
            /**
             * Gets the name of the event that was raised.
             * @return A string that represents the name of the event that was raised.
             */
            type: string;

            //#endregion
        }
        /**
        * Describes key codes.
        * The values correspond to values in the Document Object Model (DOM).
        */
        enum Key {
            /**
             * Represents the BACKSPACE key.
             */
            backspace,
            /*
             * Represents the TAB key.
             */
            tab,
            /**
             * Represents the ENTER key.
             */
            enter,
            /**
             * Represents the ESC key.
             */
            esc,
            /*
             * Represents the SPACEBAR key.
             */
            space,
            /**
             * Represents the PAGE UP key.
             */
            pageUp,
            /**
             * Represents the PAGE DOWN key.
             */
            pageDown,
            /**
             * Represents the END key.
             */
            end,
            /**
             * Represents the HOME key.
             */
            home,
            /**
             * Represents the LEFT ARROW key.
             */
            left,
            /**
             * Represents the UP ARROW key.
             */
            up,
            /**
             * Represents the RIGHT ARROW key.
             */
            right,
            /**
             * Represents the DOWN ARROW key.
             */
            down,
            /**
             * Represents DELETE key.
             */
            del
        }
        /**
        * Describes mouse button locations.
        */
        enum MouseButton {
            /**
            * Represents the left mouse button.
            */
            leftButton,
            /**
            * Represents the middle mouse button.
            */
            middleButton,
            /**
            * Represents the right mouse button.
            */
            rightButton
        }
        /**
        * Creates an object that contains a set of integer coordinates that represent a position. The getLocation method of the HTMLElement class returns a Point object.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb383992(v=vs.100).aspx}        *
        */
        class Point {

            //#region Constructors

            /**
             * Creates an object that contains a set of integer coordinates that represent a position.
             * @param x The number of pixels between the location and the left edge of the parent frame.
             * @param y The number of pixels between the location and the top edge of the parent frame.
             */
            constructor(x: number, y: number);

            //#endregion

            //#region Fields

            /**
             * Gets the x-coordinate of a Sys.UI.Point object in pixels. This property is read-only.
             * @return A number that represents the x-coordinate of the Point object in pixels.
             */
            x: number;

            /**
             * Gets the y-coordinate of a Sys.UI.Point object in pixels. This property is read-only.
             * @return A number that represents the y-coordinate of the Point object in pixels.
             */
            y: number;

            //#endregion

        }
        /**
        * Describes the layout of a DOM element in the page when the element's visible property is set to false.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397498(v=vs.100).aspx}
        */
        enum VisibilityMode {
            /**
             * The element is not visible, but it occupies space on the page.
             */
            hide,
            /**
             * The element is not visible, and the space it occupies is collapsed.
             */
            collapse
        }
    }

    //#endregion

    //#region Sys.WebForms Namespace

    /**
    * The Sys.WebForms namespace contains classes related to partial-page rendering in the Microsoft Ajax Library.
    * @see {@link http://msdn.microsoft.com/en-us/library/bb397566(v=vs.100).aspx}
    */
    namespace WebForms {

        /**
        * Used by the beginRequest event of the PageRequestManager class to pass argument information to event handlers.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb384003(v=vs.100).aspx}
        */
        class BeginRequestEventArgs extends EventArgs {

            //#region Constructors

            /**
            * Initializes a new instance of the BeginRequestEventArgs class.
            * @param request
            *           A Sys.Net.WebRequest representing the web request for the EventArgs.
            * @param postBackElement
            *           The postback element that initiated the async postback.
            * @param updatePanelsToUpdate
            *           (Optional) A list of UniqueIDs for UpdatePanel controls that are requested to update their rendering by the client. Server-side processing may update additional UpdatePanels.
            */
            constructor(request: Sys.Net.WebRequest, postBackElement: any, updatePanelsToUpdate: string[]);

            //#endregion

            //#region Properties

            /**
            * Gets the postback element that initiated the asynchronous postback. This property is read-only.
            * @readonly
            * @return An HTML DOM element.
            */
            get_postBackElement(): HTMLElement;
            /**
            * Gets the request object that represents the current postback.
            * @return An instance of the Sys.Net.WebRequest class.
            */
            get_request(): Sys.Net.WebRequest;
            /**
            * Gets a list of UniqueID values for UpdatePanel controls that should re-render their content, as requested by the client.
            * Server-side processing might update additional UpdatePanel controls.
            * @return An array of UniqueID values for UpdatePanel controls.
            */
            get_updatePanelsToUpdate(): string[];

            //#endregion
        }

        /**
        * Used by the endRequest event of the PageRequestManager class to pass argument information to event handlers.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397499.aspx}
        */
        class EndRequestEventArgs extends EventArgs {

            //#region Constructors

            /**
            * Initializes a new instance of the EndRequestEventArgs class.
            * @param error
            *           An error object.
            * @param dataItems
            *           An object containing data items.
            * @param response
            *           An object of type Sys.Net.WebRequestExecutor.
            */
            constructor(error: Error, dataItems: any, response: Sys.Net.WebRequestExecutor);

            //#endregion

            //#region Properties

            /**
            * Gets a JSON data structure that contains data items that were registered by using the RegisterDataItem method of the ScriptManager class.
            * The JavaScript Error object exposes several properties that define the error. The Microsoft Ajax Library provides additional functions for the Error object.
            * @return A JSON data structure that contains name/value pairs that were registered as data items by using the RegisterDataItem method of the ScriptManager class.
            */
            get_dataItems(): any;
            /**
            * Gets the Error object.
            * @return A base ECMAScript (JavaScript) Error object.
            */
            get_error(): Error;
            /**
            * Get or sets a value that indicates whether the error has been handled.
            * Use this property to determine whether an asynchronous postback error has already been handled. If it has not and if you want to take action on the error, you can set the error as handled.
            * @return true if the error has been handled; otherwise false.
            */
            get_errorHandled(): boolean;
            /**
            * Get or sets a value that indicates whether the error has been handled.
            * Use this property to determine whether an asynchronous postback error has already been handled. If it has not and if you want to take action on the error, you can set the error as handled.
            * @param value
            *         true or false.
            */
            set_errorHandled(value: boolean): void;
            /**
            * Gets a response object that is represented by the Sys.Net.WebRequestExecutor class.
            * @return A response object that is represented by the WebRequestExecutor class.
            */
            get_response(): Sys.Net.WebRequestExecutor;

            //#endregion
        }

        /**
        * Used by the initializeRequest event of the PageRequestManager class to pass argument information to event handlers.
        * This class contains private members that support the client-script infrastructure and are not intended to be used directly from your code. Names of private members begin with an underscore ( _ ).
        * @see {@link http://msdn.microsoft.com/en-us/library/bb311030(v=vs.100).aspx}
        */
        class InitializeRequestEventArgs extends EventArgs {

            //#region Constructors

            /**
            * Initializes a new instance of the EndRequestEventArgs class.
            * @param request
            *           A Sys.Net.WebRequest object that represents the Web request for the EventArgs object.
            * @param datapostBackElementItems
            *           The postback element that initiated the asynchronous postback.
            * @param updatePanelsToUpdate
            *           (Optional) A list of UniqueID values for UpdatePanel controls that are being requested to update their rendering by the client. Server-side processing might update additional UpdatePanel controls.
            */
            constructor(request: Sys.Net.WebRequest, postBackElement: any, updatePanelsToUpdate: string[]);

            //#endregion

            //#region Properties

            /**
            * Gets the postback element that initiated the asynchronous postback.
            * @return An HTML DOM element.
            */
            get_postBackElement(): HTMLElement;

            /**
            * Gets the request object that represents the current postback.
            * @return A request object that is represented by the Sys.Net.WebRequestExecutor class.
            */
            get_request(): Sys.Net.WebRequestExecutor;

            /**
            * Gets or sets a list of UniqueID values for UpdatePanel controls that should re-render their content, as requested by the client.
            * The returned array can be modified by a client event handler to add or remove UpdatePanel controls that should re-render their content dynamically. Server processing can also modify the array.
            * @return An array of UniqueID values for UpdatePanel controls.
            */
            get_updatePanelsToUpdate(): string[];

            //#endregion

        }

        /**
        * Used by the pageLoaded event of the PageRequestManager class to send event data that represents the UpdatePanel controls that were updated and created in the most recent postback.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397476(v=vs.100).aspx}
        */
        class PageLoadedEventArgs extends EventArgs {

            //#region Constructors

            /**
            * Initializes a new instance of the PageLoadedEventArgs class.
            */
            constructor();

            //#endregion

            //#region Properties

            /**
            * Gets a JSON data structure that contains data items that were registered by using the RegisterDataItem method of the ScriptManager class.
            * A page or control must be in partial-page rendering mode to register data items that use the RegisterDataItem method of the ScriptManager class
            * Use the IsInAsyncPostBack property to check whether the page is in partial-page rendering mode.The dataItems property returns a JSON data structure that contains name/value pairs.
            * The name is the unique ID of the control that is used in the control parameter of the RegisterDataItem method. The value is the dataItem parameter of the RegisterDataItem method.
            *
            * @return A JSON data structure that contains name/value pairs that were registered as data items that use the RegisterDataItem method of the ScriptManager class.
            */
            get_dataItems(): any;
            /**
            * Gets an array of HTML div elements that represent UpdatePanel controls that were created when the DOM was updated during the last asynchronous postback.
            * If an UpdatePanel control is updated as a result of a partial-page update, the array referenced in the panelsCreated property of the PageLoadedEventArgs class contains a reference to the corresponding div element.
            * The pageLoaded event of the Sys.WebForms.PageRequestManager class uses a PageLoadedEventArgs object to return its event data.
            * @return An array of div elements that were created during the DOM manipulation that was caused by the last asynchronous postback. If no elements were created, the property returns null.
            */
            get_panelsCreated(): HTMLDivElement[];
            /**
            * Gets an array of HTML <div> elements that represent UpdatePanel controls that were updated when the DOM was updated during the last asynchronous postback.
            * If an UpdatePanel control is updated as a result of a partial-page update, the array referenced in the panelsUpdated property of the PageLoadedEventArgs class contains a reference to the corresponding <div> element.
            * The pageLoaded event of the Sys.WebForms.PageRequestManager class uses a PageLoadedEventArgs object to return its event data.
            * @return An array of <div> elements that were updated during the DOM manipulation that was the result of the last asynchronous postback. If no elements were created, the property returns null.
            */
            get_panelsUpdated(): HTMLDivElement[];

            //#endregion
        }

        /**
        * Used by the pageLoading event of the PageRequestManager class to send event data that represents the UpdatePanel controls that are being updated and deleted as a result of the most recent postback.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb310960(v=vs.100).aspx}
        */
        class PageLoadingEventArgs extends EventArgs {

            //#region Constructors

            /**
            * Initializes a new instance of the PageLoadingEventArgs class.
            */
            constructor();

            //#endregion

            //#region Properties

            /**
            * Gets a JSON data structure that contains data items that were registered by using the RegisterDataItem method of the ScriptManager class.
            * page or control must be in partial-page rendering mode to register data items that use the RegisterDataItem method of the ScriptManager class.
            * Use the IsInAsyncPostBack property to check whether the page is in partial-page rendering mode.
            * The dataItems property returns a JSON data structure that contains name/value pairs.
            * The name is the unique ID of the control that is used in the control parameter of the RegisterDataItem method. The value is the dataItem parameter of the RegisterDataItem method.
            * @return A JSON data structure that contains name/value pairs that were registered as data items by using the RegisterDataItem method of the ScriptManager class.
            */
            get_dataItems(): any;
            /**
            * Gets an array of HTML <div> elements that represent UpdatePanel controls that will be deleted from the DOM as a result of the current asynchronous postback.
            * If the contents of an UpdatePanel control will be deleted as the result of a partial-page update, the array that is referenced in the panelsDeleting property of the PageLoadingEventArgs class contains a reference to the corresponding <div> element.
            * The pageLoading event of the Sys.WebForms.PageRequestManager class uses a PageLoadingEventArgs object to return its event data.
            * @return An array of <div> elements that will be deleted from the DOM. If no elements will be deleted, the property returns null.
            */
            get_panelsDeleting(): HTMLDivElement[];
            /**
            * Gets an array of HTML <div> elements that represent UpdatePanel controls that will be updated in the DOM as a result of the current asynchronous postback.
            * If the contents of any UpdatePanel controls will be updated as the result of a partial-page update, the panelsUpdating property contains an array that references the corresponding <div> elements.
            * The pageLoading event of the Sys.WebForms.PageRequestManager class uses a PageLoadingEventArgs object to return its event data.
            * @return An array of <div> elements that will be updated in the DOM. If no elements will be updated, the property returns null.
            */
            get_panelsUpdating(): HTMLDivElement[];

            //#endregion

        }

        /**
        * Manages client partial-page updates of server UpdatePanel controls. In addition, defines properties, events, and methods that can be used to customize a Web page with client script.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb311028(v=vs.100).aspx}
        */
        class PageRequestManager {

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
            add_beginRequest(beginRequestHandler: (sender: any, args: BeginRequestEventArgs) => void): void;
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
            add_endRequest(endRequestHandler: (sender: any, args: Sys.WebForms.EndRequestEventArgs) => void): void;
            /**
            * Raised after an asynchronous postback is finished and control has been returned to the browser.
            * @param endRequestHandler
            *               The name of the handler method that will be removed.
            */
            remove_endRequest(endRequestHandler: (sender: any, args: Sys.WebForms.EndRequestEventArgs) => void): void;
            /**
            * Raised during the initialization of the asynchronous postback.
            * @param initializeRequestHandler
            *               The name of the handler method that will be called.
            */
            add_initializeRequest(initializeRequestHandler: (sender: any, args: InitializeRequestEventArgs) => void): void;
            /**
            * Raised during the initialization of the asynchronous postback.
            * @param initializeRequestHandler
            *               The name of the handler method that will be called.
            */
            remove_initializeRequest(initializeRequestHandler: (sender: any, args: InitializeRequestEventArgs) => void): void;
            /**
            * Raised after all content on the page is refreshed as a result of either a synchronous or an asynchronous postback.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            add_pageLoaded(pageLoadedHandler: (sender: any, args: PageLoadedEventArgs) => void): void;
            /**
            * Raised after all content on the page is refreshed as a result of either a synchronous or an asynchronous postback.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            remove_pageLoaded(pageLoadedHandler: (sender: any, args: PageLoadedEventArgs) => void): void;
            /**
            * Raised after the response from the server to an asynchronous postback is received but before any content on the page is updated.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            add_pageLoading(pageLoadingHandler: (sender: any, args: PageLoadingEventArgs) => void): void;
            /**
            * Raised after the response from the server to an asynchronous postback is received but before any content on the page is updated.
            * @param pageLoadedHandler
            *               The name of the handler method that will be called.
            */
            remove_pageLoading(pageLoadingHandler: (sender: any, args: PageLoadingEventArgs) => void): void;

            //#endregion

            //#region Methods

            /**
            * Returns the instance of the PageRequestManager class for the page.
            * @return The current instance of the PageRequestManager class. You do not create a new instance of the PageRequestManager class directly. Instead, an instance is available when partial-page rendering is enabled.
            */
            static getInstance(): PageRequestManager;

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

            get_isInAsyncPostBack(): boolean;

            //#endregion
        }

        //#region Exceptions: Defines exceptions that can occur during partial-page updates.

        /**
        * Raised when an error occurs while processing the response from the server.
        * If the response to an asynchronous postback returns without an error but there is an error processing the response in the client, the Sys.WebForms.PageRequestManagerParserErrorException is raised.
        * For information about how to handle this error condition, see Debugging and Tracing Ajax Applications Overview.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397466(v=vs.100).aspx}
        */
        class PageRequestManagerParserErrorException {
            // Nothing to define
        }

        /**
        * Raised when an error occurs on the server.
        * If an error occurs on the server while the request is being processed, an error response is returned to the browser and the Sys.WebForms.PageRequestManagerServerErrorException exception is raised.
        * To customize error handling and to display more information about the server error, handle the AsyncPostBackError event and use the AsyncPostBackErrorMessage and AllowCustomErrorsRedirect properties.
        * For an example of how to provide custom error handling during partial-page updates, see Customizing Error Handling for ASP.NET UpdatePanel Controls.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397466(v=vs.100).aspx}        *
        */
        class PageRequestManagerServerErrorException {
            // Nothing to define
        }

        /**
        * Raised when the request times out.
        * A partial-page update is initiated by a client request (an asynchronous postback) to the server. The server processes the request and returns a response to the client.
        * If the browser does not receive a response in a specified time, the Sys.WebForms.PageRequestManagerTimeoutException is raised.
        * To change the interval that elapses before asynchronous postbacks time out, set the AsyncPostBackTimeout property of the ScriptManager control.
        * @see {@link http://msdn.microsoft.com/en-us/library/bb397466(v=vs.100).aspx}
        */
        class PageRequestManagerTimeoutException {
            // Nothing to define
        }

        //#endregion

    }

    //#endregion

}

//#endregion
