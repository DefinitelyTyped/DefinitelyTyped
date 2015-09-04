// Type definitions for WinJS
// Project: http://try.buildwinjs.com/
// Definitions by: TypeScript samples <https://www.typescriptlang.org/>, Adam Hewitt <https://github.com/adamhewitt627>, Craig Treasure <https://github.com/craigktreasure>, Jeff Fisher <https://github.com/xirzec>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/**
 * Defines an Element object.
**/
interface Element {
    winControl: any;
}

/**
 * Utility class for easy access to operations on application folders
**/
interface IOHelper {
    /**
     * Determines whether the specified file exists in the folder.
     * @param filename The name of the file.
     * @returns A promise that completes with a value of either true (if the file exists) or false.
    **/
    exists(filename: string): WinJS.Promise<boolean>;

    /**
     * Reads the specified file. If the file doesn't exist, the specified default value is returned.
     * @param fileName The file to read from.
     * @param def The default value to be returned if the file failed to open.
     * @returns A promise that completes with a value that is either the contents of the file, or the specified default value.
     **/
    readText(fileName: string, def?: string): WinJS.Promise<string>;

    /**
     * Deletes a file from the folder.
     * @param fileName The file to be deleted.
     * @returns A promise that is fulfilled when the file has been deleted.
    **/
    remove(fileName: string): WinJS.Promise<void>;

    /**
     * Writes the specified text to the specified file.
     * @param fileName The name of the file.
     * @param text The content to be written to the file.
     * @returns A promise that is completed when the file has been written.
     **/
    writeText(fileName: string, text: string): WinJS.Promise<number>;
}

/**
 * Provides application-level functionality, for example activation, storage, and application events.
**/
declare module WinJS.Application {
    //#region Objects

    /**
     * The local storage of the application.
    **/
    var local: IOHelper;

    /**
     * The roaming storage of the application.
    **/
    var roaming: IOHelper;

    /**
     * The temp storage of the application.
    **/
    var temp: IOHelper;

    /**
     * An object used for storing app information that can be used to restore the app's state after it has been suspended and then resumed. Data that can usefully be contained in this object includes the current navigation page or any information the user has added to the input controls on the page. You should not add information about customization (for example colors) or user-defined lists of content.
    **/
    var sessionState: any;

    //#endregion Objects

    //#region Methods

    /**
     * Informs the application object that asynchronous work is being performed, and that this event handler should not be considered complete until the promise completes. This function can be set inside the handlers for all WinJS.Application events: onactivated oncheckpoint onerror onloaded onready onsettings onunload.
     * @param promise The promise that should complete before processing is complete.
    **/
    function setPromise(promise: Promise<any>): void;

    //#endregion Methods

    //#region Functions

    /**
     * Adds an event listener for application-level events: activated, checkpoint, error, loaded, ready, settings, and unload.
     * @param type The type (name) of the event. You can use any of the following:"activated", "checkpoint", "error", "loaded", "ready", "settings", and" unload".
     * @param listener The listener to invoke when the event is raised.
     * @param capture true to initiate capture, otherwise false.
    **/
    function addEventListener(type: string, listener: Function, capture?: boolean): void;

    /**
     * Queues a checkpoint event.
    **/
    function checkpoint(): void;

    /**
     * Queues an event to be processed by the WinJS.Application event queue.
     * @param eventRecord The event object is expected to have a type property that is used as the event name when dispatching on the WinJS.Application event queue. The entire object is provided to event listeners in the detail property of the event.
    **/
    function queueEvent(eventRecord: any): void;

    /**
     * Removes an event listener from the control.
     * @param type The type (name) of the event.
     * @param listener The listener to remove.
     * @param useCapture Specifies whether or not to initiate capture.
    **/
    function removeEventListener(type: string, listener: Function, useCapture?: any): void;

    /**
     * Starts dispatching application events (the activated, checkpoint, error, loaded, ready, settings, and unload events).
    **/
    function start(): void;

    /**
     * Stops application event processing and resets WinJS.Application to its initial state. All WinJS.Application event listeners (for the activated, checkpoint, error, loaded, ready, settings, and unload events) are removed.
    **/
    function stop(): void;

    //#endregion Functions

    //#region Events

    /**
     * Occurs when WinRT activation has occurred. The name of this event is "activated" (and also "mainwindowactivated"). This event occurs after the loaded event and before the ready event.
     * @param eventInfo An object that contains information about the event. For more information about event arguments, see the WinRT event argument classes: WebUICachedFileUpdaterActivatedEventArgs, WebUICameraSettingsActivatedEventArgs, WebUIContactPickerActivatedEventArgs, WebUIDeviceActivatedEventArgs, WebUIFileActivatedEventArgs, WebUIFileOpenPickerActivatedEventArgs, WebUIFileSavePickerActivatedEventArgs, WebUILaunchActivatedEventArgs, WebUIPrintTaskSettingsActivatedEventArgs, WebUIProtocolActivatedEventArgs, WebUISearchActivatedEventArgs, WebUIShareTargetActivatedEventArgs.
    **/
    function onactivated(eventInfo: CustomEvent): void;

    /**
     * Occurs when receiving PLM notification or when the checkpoint function is called.
     * @param eventInfo An object that contains information about the event. The detail property of this object includes the following subproperties: type, setPromise.
    **/
    function oncheckpoint(eventInfo: CustomEvent): void;

    /**
     * Occurs when an unhandled error has been raised.
     * @param eventInfo An object that contains information about the event.
    **/
    function onerror(eventInfo: CustomEvent): void;

    /**
     * Occurs after the DOMContentLoaded event, which fires after the page has been parsed but before all the resources are loaded. This event occurs before the activated event and the ready event.
     * @param eventInfo An object that contains information about the event. The detail property of this object includes the following subproperties: type, setPromise.
    **/
    function onloaded(eventInfo: CustomEvent): void;

    /**
     * Occurs when the application is ready. This event occurs after the loaded event and the activated event.
     * @param eventInfo An object that contains information about the event. The detail property of this object includes the following sub-properties: type, setPromise.
    **/
    function onready(eventInfo: CustomEvent): void;

    /**
     * Occurs when the settings charm is invoked.
     * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: type, applicationcommands.
    **/
    function onsettings(eventInfo: CustomEvent): void;

    /**
     * Occurs when the application is about to be unloaded.
     * @param eventInfo An object that contains information about the event. The detail property of this object includes the following sub-properties: type, setPromise.
    **/
    function onunload(eventInfo: CustomEvent): void;

    //#endregion Events

}
/**
 * Provides functionality for data and template binding.
**/
declare module WinJS.Binding {
    //#region Properties

    /**
     * Determines whether or not binding should automatically set the ID of an element. This property should be set to true in apps that use WinJS (WinJS) binding.
    **/
    var optimizeBindingReferences: boolean;

    //#endregion Properties

    //#region Objects

    /**
     * Allows you to add bindable properties dynamically.
    **/
    var dynamicObservableMixin: {
        //#region Methods

        /**
         * Adds a property with change notification to this object, including a ECMAScript5 property definition.
         * @param name The name of the property to add.
         * @param value This object is returned.
        **/
        addProperty(name: string, value: any): void;

        /**
         * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
         * @param name The name of the property to which to bind the action.
         * @param action The function to invoke asynchronously when the property may have changed.
         * @returns This object is returned.
        **/
        bind(name: string, action: any): Function;

        /**
         * Gets a property value by name.
         * @param name The name of the property to get.
         * @returns The value of the property as an observable object.
        **/
        getProperty(name: string): any;

        /**
         * Notifies listeners that a property value was updated.
         * @param name The name of the property that is being updated.
         * @param newValue The new value for the property.
         * @param oldValue The old value for the property.
         * @returns A promise that is completed when the notifications are complete.
        **/
        notify(name: string, newValue: string, oldValue: string): Promise<any>;

        /**
         * Removes a property value.
         * @param name The name of the property to remove.
         * @returns This object is returned.
        **/
        removeProperty(name: string): any;

        /**
         * Updates a property value and notifies any listeners.
         * @param name The name of the property to update.
         * @param value The new value of the property.
         * @returns This object is returned.
        **/
        setProperty(name: string, value: any): any;

        /**
         * Removes one or more listeners from the notification list for a given property.
         * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
         * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
         * @returns This object is returned.
        **/
        unbind(name: string, action: Function): any;

        /**
         * Updates a property value and notifies any listeners.
         * @param name The name of the property to update.
         * @param value The new value of the property.
         * @returns A promise that completes when the notifications for this property change have been processed. If multiple notifications are coalesced, the promise may be canceled or the value of the promise may be updated. The fulfilled value of the promise is the new value of the property for which the notifications have been completed.
        **/
        updateProperty(name: string, value: any): Promise<any>;

        //#endregion Methods

    };

    /**
     * Do not instantiate. A list returned by the createFiltered method.
    **/
    class FilteredListProjection<T> extends ListProjection<T> {
        //#region Methods

        /**
         * Returns a key/data pair for the specified index.
         * @param index The index of the value to retrieve.
         * @returns An object that has two properties: key and data.
        **/
        getItem(index: number): IKeyDataPair<T>;

        /**
         * Returns the index of the first occurrence of a key in a list.
         * @param key The key to locate in the list.
         * @returns The index of the first occurrence of a key in a list, or -1 if not found.
        **/
        indexOfKey(key: string): number;

        /**
         * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
         * @param index The index of the value that was mutated.
        **/
        notifyMutated(index: number): void;

        /**
         * Replaces the value at the specified index with a new value.
         * @param index The index of the value that was replaced.
         * @param newValue The new value.
        **/
        setAt(index: number, newValue: T): void;

        //#endregion Methods

        //#region Properties

        /**
         * The length of the list. Returns an integer value one higher than the highest element defined in an list.
        **/
        length: number;

        //#endregion Properties

    }

    /**
     * Do not instantiate. A list of groups.
    **/
    class GroupsListProjection<T> extends ListBase<T> {
        //#region Methods

        /**
         * Gets a key/data pair for the specified index.
         * @param index The index of the value to retrieve.
         * @returns An object that has two properties: key and data.
        **/
        getItem(index: number): IKeyDataPair<T>;

        /**
         * Gets a key/data pair for the specified key.
         * @param key The key of the value to retrieve.
         * @returns An object with two properties: key and data.
        **/
        getItemFromKey(key: string): IKeyDataPair<T>;

        /**
         * Returns the index of the first occurrence of a key in a list.
         * @param key The key to locate in the list.
         * @returns The index of the first occurrence of a key in a list, or -1 if not found.
        **/
        indexOfKey(key: string): number;

        //#endregion Methods

        //#region Properties

        /**
         * The length of the list. Returns an integer value one higher than the highest element defined in an list.
        **/
        length: number;

        //#endregion Properties

    }

    /**
     * Do not instantiate. Sorts the underlying list by group key and within a group respects the position of the item in the underlying list. Returned by createGrouped.
    **/
    class GroupedSortedListProjection<T> extends SortedListProjection<T> {
        //#region Properties

        /**
         * Gets a List, which is a projection of the groups that were identified in this list.
        **/
        groups: GroupsListProjection<T>;

        //#endregion Properties

        /**
         * Returns a key/data pair for the specified index.
         * @param index The index of the value to retrieve.
         * @returns An object that has two properties: key and data.
        **/
        getItem(index: number): IGroupKeyDataPair<T>;
    }

    /**
     * Represents a list of objects that can be accessed by index or by a string key. Provides methods to search, sort, filter, and manipulate the data.
    **/
    class List<T> extends ListBaseWithMutators<T> {
        //#region Constructors

        /**
         * Creates a List object.
         * @constructor 
         * @param list The array containing the elements to initalize the list.
         * @param options You can set two Boolean options: binding and proxy. If options.binding is true, the list contains the result of calling as on the element values. If options.proxy is true, the list specified as the first parameter is used as the storage for the List. This option should be used with care, because uncoordinated edits to the data storage may result in errors.
        **/
        constructor(list?: T[], options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Gets a key/data pair for the specified list index.
         * @param index The index of value to retrieve.
         * @returns An object with .key and .data properties.
        **/
        getItem(index: number): IKeyDataPair<T>;

        /**
         * Gets a key/data pair for the list item key specified.
         * @param key The key of the value to retrieve.
         * @returns An object with .key and .data properties.
        **/
        getItemFromKey(key: string): IKeyDataPair<T>;

        /**
         * Gets the index of the first occurrence of a key in a list.
         * @param key The key to locate in the list.
         * @returns The index of the first occurrence of a key in a list, or -1 if not found.
        **/
        indexOfKey(key: string): number;

        /**
         * Moves the value at index to the specified position.
         * @param index The original index of the value.
         * @param newIndex The index of the value after the move.
        **/
        move(index: number, newIndex: number): void;

        /**
         * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
         * @param index The index of the value that was mutated.
        **/
        notifyMutated(index: number): void;

        /**
         * Returns a list with the elements reversed. This method reverses the elements of a list object in place. It does not create a new list object during execution.
        **/
        reverse(): void;

        /**
         * Replaces the value at the specified index with a new value.
         * @param index The index of the value that was replaced.
         * @param newValue The new value.
        **/
        setAt(index: number, newValue: T): void;

        /**
         * Returns a list with the elements sorted. This method sorts the elements of a list object in place. It does not create a new list object during execution.
         * @param sortFunction The function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
        **/
        sort(sortFunction?: (left: T, right: T) => number): void;

        /**
         * Removes elements from a list and, if necessary, inserts new elements in their place, returning the deleted elements.
         * @param start The zero-based location in the list from which to start removing elements.
         * @param howMany The number of elements to remove.
         * @param item The elements to insert into the list in place of the deleted elements.
         * @returns The deleted elements.
        **/
        splice(start: number, howMany?: number, ...item: T[]): T[];

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the length of the list, which is an integer value one higher than the highest element defined in the list.
        **/
        length: number;

        //#endregion Properties

    }

    /**
     * Represents a base class for lists.
    **/
    class ListBase<T> {
        //#region Events

        /**
         * An item in the list has changed its value.
         * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, newItem, newValue, oldItem, oldValue.
        **/
        onitemchanged(eventInfo: CustomEvent): void;

        /**
         * A new item has been inserted into the list.
         * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
        **/
        oniteminserted(eventInfo: CustomEvent): void;

        /**
         * An item has been changed locations in the list.
         * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
        **/
        onitemmoved(eventInfo: CustomEvent): void;

        /**
         * An item has been mutated. This event occurs as a result of calling the notifyMutated method.
         * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
        **/
        onitemmutated(eventInfo: CustomEvent): void;

        /**
         * An item has been removed from the list.
         * @param eventInfo An object that contains information about the event. The detail contains the following information: index, key, value.
        **/
        onitemremoved(eventInfo: CustomEvent): void;

        /**
         * The list has been refreshed. Any references to items in the list may be incorrect.
         * @param eventInfo An object that contains information about the event. The detail property of this object is null.
        **/
        onreload(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Adds an event listener to the control.
         * @param type The type (name) of the event.
         * @param listener The listener to invoke when the event gets raised.
         * @param useCapture If true, initiates capture, otherwise false.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
         * @param name The name of the property to which to bind the action.
         * @param action The function to invoke asynchronously when the property may have changed.
         * @returns A reference to this observableMixin object.
        **/
        bind(name: string, action: Function): any;

        /**
         * Returns a new list consisting of a combination of two arrays.
         * @param item Additional items to add to the end of the list.
         * @returns An array containing the concatenation of the list and any other supplied items.
        **/
        concat(...item: T[]): T[];

        /**
         * Creates a live filtered projection over this list. As the list changes, the filtered projection reacts to those changes and may also change.
         * @param predicate A function that accepts a single argument. The createFiltered function calls the callback with each element in the list. If the function returns true, that element will be included in the filtered list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
         * @returns A filtered projection over the list.
        **/
        createFiltered(predicate: (x: T) => boolean): FilteredListProjection<T>;

        /**
         * Creates a live grouped projection over this list. As the list changes, the grouped projection reacts to those changes and may also change. The grouped projection sorts all the elements of the list to be in group-contiguous order. The grouped projection also contains a .groups property, which is a List representing the groups that were found in the list.
         * @param groupKey A function that accepts a single argument. The function is called with each element in the list, the function should return a string representing the group containing the element. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
         * @param groupData A function that accepts a single argument. The function is called once, on one element per group. It should return the value that should be set as the data of the .groups list element for this group. The data value usually serves as summary or header information for the group.
         * @param groupSorter A function that accepts two arguments. The function is called with pairs of group keys found in the list. It must return one of the following numeric values: negative if the first argument is less than the second (sorted before), zero if the two arguments are equivalent, positive if the first argument is greater than the second (sorted after).
         * @returns A grouped projection over the list.
        **/
        createGrouped(groupKey: (x: T) => string, groupData: (x: T) => any, groupSorter?: (left: string, right: string) => number): GroupedSortedListProjection<T>;

        /**
         * Creates a live sorted projection over this list. As the list changes, the sorted projection reacts to those changes and may also change.
         * @param sorter A function that accepts two arguments. The function is called with elements in the list. It must return one of the following numeric values: negative if the first argument is less than the second, zero if the two arguments are equivalent, positive if the first argument is greater than the second. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
         * @returns A sorted projection over the list.
        **/
        createSorted(sorter: (left: T, right: T) => number): SortedListProjection<T>;

        /**
         * Raises an event of the specified type and with the specified additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Checks whether the specified callback function returns true for all elements in a list.
         * @param callback A function that accepts up to three arguments. This function is called for each element in the list until it returns false or the end of the list is reached.
         * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
         * @returns true if the callback returns true for all elements in the list.
        **/
        every(callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

        /**
         * Returns the elements of a list that meet the condition specified in a callback function.
         * @param callback A function that accepts up to three arguments. The function is called for each element in the list. This function must always return the same results, given the same inputs. The results should not depend on values that are subject to change. You must call notifyMutated each time an item changes. Do not batch change notifications.
         * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
         * @returns An array containing the elements that meet the condition specified in the callback function.
        **/
        filter(callback: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];

        /**
         * Calls the specified callback function for each element in a list.
         * @param callback A function that accepts up to three arguments. The function is called for each element in the list. The arguments are as follows: value, index, array.
         * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
        **/
        forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

        /**
         * Gets the value at the specified index.
         * @param index The index of the value to get.
         * @returns The value at the specified index.
        **/
        getAt(index: number): T;

        /**
         * Gets the index of the first occurrence of the specified value in a list.
         * @param searchElement The value to locate in the list.
         * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
         * @returns The index of the first occurrence of a value in a list or -1 if not found.
        **/
        indexOf(searchElement: T, fromIndex?: number): number;

        /**
         * Returns a string consisting of all the elements of a list separated by the specified separator string.
         * @param separator A string used to separate the elements of a list. If this parameter is omitted, the list elements are separated with a comma.
         * @returns The elements of a list separated by the specified separator string.
        **/
        join(separator?: string): string;

        /**
         * Gets the index of the last occurrence of the specified value in a list.
         * @param searchElement The value to locate in the list.
         * @param fromIndex The index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the list.
         * @returns The index of the last occurrence of a value in a list, or -1 if not found.
        **/
        lastIndexOf(searchElement: T, fromIndex?: number): number;

        /**
         * Calls the specified callback function on each element of a list, and returns an array that contains the results.
         * @param callback A function that accepts up to three arguments. The function is called for each element in the list.
         * @param thisArg n object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
         * @returns An array containing the result of calling the callback function on each element in the list.
        **/
        map<G>(callback: (value: T, index: number, array: T[]) => G, thisArg?: any): G[];

        /**
         * Notifies listeners that a property value was updated.
         * @param name The name of the property that is being updated.
         * @param newValue The new value for the property.
         * @param oldValue The old value for the property.
         * @returns A promise that is completed when the notifications are complete.
        **/
        notify(name: string, newValue: any, oldValue: any): Promise<any>;

        /**
         * Forces the list to send a reload notification to any listeners.
        **/
        notifyReload(): void;

        /**
         * Accumulates a single result by calling the specified callback function for all elements in a list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
         * @param initiallValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the function provides this value as an argument instead of a list value.
         * @returns The return value from the last call to the callback function.
        **/
        reduce(callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initiallValue?: T): T;

        /**
         * Accumulates a single result by calling the specified callback function for all elements in a list, starting with the last member of the list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callback A function that accepts up to four arguments. These arguments are: previousValue, currentValue, currentIndex, array. The function is called for each element in the list.
         * @param initialValue If initialValue is specified, it is used as the value with which to start the accumulation. The first call to the callback function provides this value as an argument instead of a list value.
         * @returns The return value from the last call to callback function.
        **/
        reduceRight(callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initialValue?: T): T;

        /**
         * Removes an event listener from the control.
         * @param type The type (name) of the event.
         * @param listener The listener to remove.
         * @param useCapture true if capture is to be initiated, otherwise false.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Extracts a section of a list and returns a new list.
         * @param begin The index that specifies the beginning of the section.
         * @param end The index that specifies the end of the section.
         * @returns Returns a section of list.
        **/
        slice(begin: number, end?: number): T[];

        /**
         * Checks whether the specified callback function returns true for any element of a list.
         * @param callback A function that accepts up to three arguments. The function is called for each element in the list until it returns true, or until the end of the list.
         * @param thisArg An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used.
         * @returns true if callback returns true for any element in the list.
        **/
        some(callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

        /**
         * Removes one or more listeners from the notification list for a given property.
         * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
         * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
         * @returns This object is returned.
        **/
        unbind(name: string, action: Function): any;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the IListDataSource for the list. The only purpose of this property is to adapt a List to the data model that is used by ListView and FlipView.
        **/
        dataSource: WinJS.UI.IListDataSource<T>;

        /**
         * Indicates that the object is compatibile with declarative processing.
        **/
        static supportedForProcessing: boolean;

        //#endregion Properties
    }

    /**
     * Represents a base class for normal list modifying operations.
    **/
    class ListBaseWithMutators<T> extends ListBase<T> {
        //#region Methods

        /**
         * Removes the last element from a list and returns it.
         * @returns The last element from the list.
        **/
        pop(): T;

        /**
         * Appends new element(s) to a list, and returns the new length of the list.
         * @param value The element to insert at the end of the list.
         * @returns The new length of the list.
        **/
        push(value: T): number;
        push(...values: T[]): number;

        /**
         * Removes the first element from a list and returns it.
         * @returns The first element from the list.
        **/
        shift(): T;

        /**
         * Appends new element(s) to a list, and returns the new length of the list.
         * @param value The element to insert at the start of the list.
         * @returns The new length of the list.
        **/
        unshift(value: T): number;
        unshift(...values: T[]): number;

        //#endregion Methods
    }

    /**
     * Represents a base class for list projections.
    **/
    class ListProjection<T> extends ListBaseWithMutators<T> {
        //#region Methods

        /**
         * Disconnects a WinJS.Binding.List projection from its underlying WinJS.Binding.List. It's only important to call this method when the WinJS.Binding.List projection and the WinJS.Binding.List have different lifetimes. (Call this method on the WinJS.Binding.List projection, not the underlying WinJS.Binding.List.)
        **/
        dispose(): void;

        /**
         * Gets a key/data pair for the specified key.
         * @param key The key of the value to retrieve.
         * @returns An object with two properties: key and data.
        **/
        getItemFromKey(key: string): IKeyDataPair<T>;

        /**
         * Moves the value at index to position newIndex.
         * @param index The original index of the value.
         * @param newIndex The index of the value after the move.
        **/
        move(index: number, newIndex: number): void;

        /**
         * Removes elements from a list and, if necessary, inserts new elements in their place, returning the deleted elements.
         * @param start The zero-based location in the list from which to start removing elements.
         * @param howMany The number of elements to remove.
         * @param item The elements to insert into the list in place of the deleted elements.
         * @returns The deleted elements.
        **/
        splice(start: number, howMany?: number, ...item: T[]): T[];

        //#endregion Methods
    }

    /**
     * Provides a standard implementation of the bindable contract, as well as a basic storage mechanism that participates in change notification and an asynchronous notification implementation.
    **/
    var mixin: {
        //#region Methods

        /**
         * Adds a property to the object. The property includes change notification and an ECMAScript 5 property definition .
         * @param name The name of the property to add.
         * @param value The value of the property.
         * @returns This object is returned.
        **/
        addProperty(name: string, value: any): any;

        /**
         * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
         * @param name The name of the property to which to bind the action.
         * @param action The function to invoke asynchronously when the property may have changed.
         * @returns This object is returned.
        **/
        bind(name: string, action: any): Function;

        /**
         * Gets a property value by name.
         * @param name The name of the property to get.
         * @returns The value of the property as an observable object.
        **/
        getProperty(name: string): any;

        /**
         * Notifies listeners that a property value was updated.
         * @param name The name of the property that is being updated.
         * @param newValue The new value for the property.
         * @param oldValue The old value for the property.
         * @returns A promise that is completed when the notifications are complete.
        **/
        notify(name: string, newValue: string, oldValue: string): Promise<any>;

        /**
         * Removes a property value.
         * @param name The name of the property to remove.
         * @returns This object is returned.
        **/
        removeProperty(name: string): any;

        /**
         * Updates a property value and notifies any listeners.
         * @param name The name of the property to update.
         * @param value The new value of the property.
         * @returns This object is returned.
        **/
        setProperty(name: string, value: any): any;

        /**
         * Removes one or more listeners from the notification list for a given property.
         * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
         * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
         * @returns This object is returned.
        **/
        unbind(name: string, action: Function): any;

        /**
         * Updates a property value and notifies any listeners.
         * @param name The name of the property to update.
         * @param value The new value of the property.
         * @returns A promise that completes when the notifications for this property change have been processed. If multiple notifications are coalesced, the promise may be canceled or the value of the promise may be updated. The fulfilled value of the promise is the new value of the property for which the notifications have been completed.
        **/
        updateProperty(name: string, value: any): Promise<any>;

        //#endregion Methods

    };

    /**
     * Provides functions that can make an object observable.
    **/
    var observableMixin: {
        //#region Methods

        /**
         * Links the specified action to the property specified in the name parameter. This function is invoked when the value of the property may have changed. It is not guaranteed that the action will be called only when a value has actually changed, nor is it guaranteed that the action will be called for every value change. The implementation of this function coalesces change notifications, such that multiple updates to a property value may result in only a single call to the specified action.
         * @param name The name of the property to which to bind the action.
         * @param action The function to invoke asynchronously when the property may have changed.
         * @returns A reference to this observableMixin object.
        **/
        bind(name: string, action: Function): any;

        /**
         * Notifies listeners that a property value was updated.
         * @param name The name of the property that is being updated.
         * @param newValue The new value for the property.
         * @param oldValue The old value for the property.
         * @returns A promise that is completed when the notifications are complete.
        **/
        notify(name: string, newValue: any, oldValue: any): Promise<any>;

        /**
         * Removes one or more listeners from the notification list for a given property.
         * @param name The name of the property to unbind. If this parameter is omitted, all listeners for all events are removed.
         * @param action The function to remove from the listener list for the specified property. If this parameter is omitted, all listeners are removed for the specific property.
         * @returns This object is returned.
        **/
        unbind(name: string, action: Function): any;

        //#endregion Methods

    };

    /**
     * Do not instantiate. Returned by the createSorted method.
    **/
    class SortedListProjection<T> extends ListProjection<T> {
        //#region Methods

        /**
         * Returns a key/data pair for the specified index.
         * @param index The index of the value to retrieve.
         * @returns An object that has two properties: key and data.
        **/
        getItem(index: number): IKeyDataPair<T>;

        /**
         * Returns the index of the first occurrence of a key.
         * @param key The key to locate in the list.
         * @returns The index of the first occurrence of a key in a list, or -1 if not found.
        **/
        indexOfKey(key: string): number;

        /**
         * Forces the list to send a itemmutated notification to any listeners for the value at the specified index.
         * @param index The index of the value that was mutated.
        **/
        notifyMutated(index: number): void;

        /**
         * Replaces the value at the specified index with a new value.
         * @param index The index of the value to be replaced.
         * @param newValue The new value.
        **/
        setAt(index: number, newValue: T): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the length of the list. Returns an integer value one higher than the highest element defined in a list.
        **/
        length: number;

        //#endregion Properties

    }

    /**
     * Provides a reusable declarative binding element.
    **/
    class Template {
        //#region Constructors

        /**
         * Creates a template that provides a reusable declarative binding element.
         * @constructor 
         * @param element The DOM element to convert to a template.
         * @param options If this parameter is supplied, the template is loaded from the URI and the content of the element parameter is ignored. You can add the following options: href.
        **/
        constructor(element: HTMLElement, options?:any);

        //#endregion Constructors

        //#region Methods

        /**
          * Binds values from the specified data context to elements that are descendants of the specified root element that have the declarative binding attributes specified (data-win-bind).
          * @param dataContext The object to use for default data binding.
          * @param container The element to which to add this rendered template. If this parameter is omitted, a new DIV is created.
          * @returns A Promise that will be completed after binding has finished. The value is either container or the created DIV. promise that is completed after binding has finished.
        **/
        render(dataContext: any, container?: HTMLElement): Promise<HTMLElement>;

        /**
          * Renders a template based on the specified URI (static method).
          * @param href The URI from which to load the template.
          * @param dataContext The object to use for default data binding.
          * @param container The element to which to add this rendered template. If this parameter is omitted, a new DIV is created.
          * @returns A promise that is completed after binding has finished. The value is either the object in the container parameter or the created DIV.
        **/
        static render(href: string, dataContext: any, container?: HTMLElement): Promise<HTMLElement>;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the default binding initializer for the template.
        **/
        bindingInitializer: any;

        /**
         * Gets or sets a value that specifies whether a debug break is inserted into the first rendering of each template. This property only has an effect when the app is in debug mode.
        **/
        debugBreakOnRender: boolean;

        /**
         * This property is deprecated and might not be available in future versions of the WinJS. Gets or sets a value that specifies whether optimized template processing has been disabled.
        **/
        disableOptimizedProcessing: boolean;

        /**
         * Gets the DOM element that is used as the template.
        **/
        element: HTMLElement;

        /**
         * Gets a value that specifies whether templates should be instantiated without the creation of an additional child element.
        **/
        extractChild: boolean;

        /**
         * Determines whether the Template contains declarative controls that must be processed separately. This property is always true. The controls that belong to a Template object's children are instantiated when a Template instance is rendered.
        **/
        isDeclarativeControlContainer: boolean;

        //#endregion Properties

    }

    //#endregion Objects

    //#region Functions

    /**
     * Adds a CSS class from the specified path of the source object to a destination object.
     * @param source The source object that has the class to copy.
     * @param sourceProperties The path on the source object to the source class.
     * @param dest The destination object.
    **/
    function addClassOneTime(source: any, sourceProperties: any[], dest: HTMLElement): void;

    /**
     * Returns an observable object. This may be an observable proxy for the specified object, an existing proxy, or the specified object itself if it directly supports observation.
     * @param data The object to observe.
     * @returns The observable object.
    **/
    function as<U>(data: U): U;

    /**
     * Binds to one or more properties on the observable object or or on child values of that object.
     * @param observable The object to bind to.
     * @param bindingDescriptor An object literal containing the binding declarations. Binding declarations take the form: { propertyName: (function | bindingDeclaration), ... }.
     * @returns An object that contains at least a "cancel" field, which is a function that removes all bindings associated with this bind request.
    **/
    function bind(observable: any, bindingDescriptor: any): any;

    /**
     * Creates a default binding initializer for binding between a source property and a destination property with the specified converter function that is executed on the value of the source property.
     * @param convert The conversion function that takes the source property and produces a value that is set to the destination property. This function must be accessible from the global namespace.
     * @returns The binding initializer.
    **/
    function converter(convert: Function): Function;

    /**
     * Creates a one-way binding between the source object and the destination object. Warning Do not attempt to bind data to the ID of an HTML element.
     * @param source The source object.
     * @param sourceProperties The path on the source object to the source property.
     * @param dest The destination object.
     * @param destProperties The path on the destination object to the destination property.
     * @returns An object with a cancel method that is used to coalesce bindings.
    **/
    function defaultBind(source: any, sourceProperties: any, dest: any, destProperties: any): any;

    /**
     * Creates a new constructor function that supports observability with the specified set of properties.
     * @param data The object to use as the pattern for defining the set of properties.
     * @returns A constructor function with 1 optional argument that is the initial state of the properties.
    **/
    function define(data: any): Function;

    /**
     * Wraps the specified object so that all its properties are instrumented for binding. This is meant to be used in conjunction with the binding mixin.
     * @param shape The specification for the bindable object.
     * @returns An object with a set of properties all of which are wired for binding.
    **/
    function expandProperties(shape: any): any;

    /**
     * Marks a custom initializer function as being compatible with declarative data binding.
     * @param customInitializer The custom initializer to be marked as compatible with declarative data binding.
     * @returns The input customInitializer.
    **/
    function initializer(customInitializer: Function): Function;

    /**
     * Notifies listeners that a property value was updated.
     * @param name The name of the property that is being updated.
     * @param newValue The new value for the property.
     * @param oldValue The old value for the property.
     * @returns A promise that is completed when the notifications are complete.
    **/
    function notify(name: string, newValue: string, oldValue: string): Promise<any>;

    /**
     * Sets the destination property to the value of the source property.
     * @param source The source object.
     * @param sourceProperties The path on the source object to the source property.
     * @param dest The destination object.
     * @param destProperties The path on the destination object to the destination property.
     * @returns An object with a cancel method that is used to coalesce bindings.
    **/
    function oneTime(source: any, sourceProperties: any, dest: any, destProperties: any): any;

    /**
     * Binds the values of an object to the values of a DOM element that has the data-win-bind attribute. If multiple DOM elements are to be bound, you must set the attribute on all of them. See the example below for details.
     * @param rootElement Optional. The element at which to start traversing to find elements to bind to. If this parameter is omitted, the entire document is searched.
     * @param dataContext The object that contains the values to which the DOM element should be bound.
     * @param skipRoot If true, specifies that only the children of rootElement should be bound, otherwise rootElement should be bound as well.
     * @param bindingCache The cached binding data.
     * @param defaultInitializer The binding initializer to use in the case that one is not specified in a binding expression. If not provided, the behavior is the same as Binding.defaultBind.
     * @returns A Promise that completes when every item that contains the data-win-bind attribute has been processed and the update has started.
    **/
    function processAll(rootElement?: Element, dataContext?: any, skipRoot?: boolean, bindingCache?: any, defaultInitializer?: Function): Promise<void>;

    /**
     * Creates a one-way binding between the source object and an attribute on the destination element.
     * @param source The source object.
     * @param sourceProperties The path on the source object to the source property.
     * @param dest The destination object.
     * @param destProperties The path on the destination object to the destination property. This must be a single name.
     * @returns An object with a cancel() method that is used to coalesce bindings.
    **/
    function setAttribute(source: any, sourceProperties: any[], dest: Element, destProperties: any[]): any;

    /**
     * Sets an attribute on the destination element to the value of the source property.
     * @param source The source object.
     * @param sourceProperties The path on the source object to the source property.
     * @param dest The destination object.
     * @param destProperties The path on the destination object to the destination property. This must be a single name.
    **/
    function setAttributeOneTime(source: any, sourceProperties: any[], dest: Element, destProperties: any[]): void;

    /**
     * Returns the original (non-observable) object is returned if the specified object is an observable proxy,
     * @param data The object for which to retrieve the original value.
     * @returns If the specified object is an observable proxy, the original object is returned, otherwise the same object is returned.
    **/
    function unwrap(data: any): any;

    //#endregion Functions

    //#region Interfaces

    interface IKeyDataPair<T> {
        key: string;
        data: T;
    }

    interface IGroupKeyDataPair<T> extends IKeyDataPair<T> {
        groupSize: number;
        firstItemIndexHint: number;
        firstItemKey: string;
    }

    //#endregion Interfaces

}
/**
 * Provides helper functions for defining Classes.
**/
declare module WinJS.Class {
    //#region Functions

    /**
     * Defines a class using the given constructor and the specified instance members.
     * @param constructor A constructor function that is used to instantiate this type.
     * @param instanceMembers The set of instance fields, properties, and methods made available on the type.
     * @param staticMembers The set of static fields, properties, and methods made available on the type.
     * @returns The newly-defined type.
    **/
    function define(constructor?: Function, instanceMembers?: any, staticMembers?: any): any;

    /**
     * Creates a sub-class based on the specified baseClass parameter, using prototype inheritance.
     * @param baseClass The type to inherit from.
     * @param constructor A constructor function that is used to instantiate this type.
     * @param instanceMembers The set of instance fields, properties, and methods to be made available on the type.
     * @param staticMembers The set of static fields, properties, and methods to be made available on the type.
     * @returns The newly-defined type.
    **/
    function derive(baseClass: any, constructor: Function, instanceMembers?: any, staticMembers?: any): any;

    /**
     * Defines a class using the given constructor and the union of the set of instance members specified by all the mixin objects. The mixin parameter list is of variable length. For more information, see Adding functionality with WinJS mixins.
     * @param constructor A constructor function that will be used to instantiate this class.
     * @param mixin An object declaring the set of instance members. The mixin parameter list is of variable length.
     * @returns The newly defined class.
    **/
    function mix(constructor: Function, ...mixin: any[]): any;

    //#endregion Functions

}
/**
 * The WinJS namespace provides special Windows Library for JavaScript functionality, including Promise and xhr.
**/
declare module WinJS {
    //#region Properties

    /**
     * Can be set to show the results of a validation process.
    **/
    var validation: boolean;

    //#endregion Properties

    //#region Objects

    /**
     * An error object.
    **/
    class ErrorFromName {
        //#region Constructors

        /**
         * Creates an Error object with the specified name and message properties.
         * @constructor 
         * @param name The name of this error. The name is meant to be consumed programmatically and should not be localized.
         * @param message The message for this error. The message is meant to be consumed by humans and should be localized.
        **/
        constructor(name: string, message?: string);

        //#endregion Constructors

    }

    interface IPromise<T> {
        cancel(): void;
        done<U>(onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): void;
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
    }

    /**
     * Provides a mechanism to schedule work to be done on a value that has not yet been computed. It is an abstraction for managing interactions with asynchronous APIs. For more information about asynchronous programming, see Asynchronous programming. For more information about promises in JavaScript, see Asynchronous programming in JavaScript. For more information about using promises, see the WinJS Promise sample.
    **/
    class Promise<T> implements IPromise<T> {
        //#region Constructors

        /**
         * A promise provides a mechanism to schedule work to be done on a value that has not yet been computed. It is a convenient abstraction for managing interactions with asynchronous APIs. For more information about asynchronous programming, see Asynchronous programming. For more information about promises in JavaScript, see Asynchronous programming in JavaScript. For more information about using promises, see the WinJS Promise sample.
         * @constructor 
         * @param init The function that is called during construction of the Promise that contains the implementation of the operation that the Promise will represent. This can be synchronous or asynchronous, depending on the nature of the operation. Note that placing code within this function does not automatically run it asynchronously; that must be done explicitly with other asynchronous APIs such as setImmediate, setTimeout, requestAnimationFrame, and the Windows Runtime asynchronous APIs. The init function is given three arguments: completeDispatch, errorDispatch, progressDispatch. This parameter is optional.
         * @param onCancel The function to call if a consumer of this promise wants to cancel its undone work. Promises are not required to support cancellation.
        **/
        constructor(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when there is an error in processing a promise.
         * @param eventInfo An object that contains information about the event.
        **/
        static onerror(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Adds an event listener for the promise.
         * @param type The type (name) of the event.
         * @param listener The listener to invoke when the event is raised.
         * @param capture true to initiate capture, otherwise false.
        **/
        static addEventListener(type: string, listener: Function, capture?: boolean): void;

        /**
         * Returns a promise that is fulfilled when one of the input promises has been fulfilled.
         * @param value An array that contains Promise objects or objects whose property values include Promise objects.
         * @returns A promise that on fulfillment yields the value of the input (complete or error).
        **/
        static any(value: IPromise<any>[]): IPromise<any>;
        static any(value: any): IPromise<any>;

        /**
         * Returns a promise. If the object is already a Promise it is returned; otherwise the object is wrapped in a Promise. You can use this function when you need to treat a non-Promise object like a Promise, for example when you are calling a function that expects a promise, but already have the value needed rather than needing to get it asynchronously.
         * @param value The value to be treated as a Promise.
         * @returns The promise.
        **/
        static as<U>(value?: U): IPromise<U>;

        /**
         * Attempts to cancel the fulfillment of a promised value. If the promise hasn't already been fulfilled and cancellation is supported, the promise enters the error state with a value of Error("Canceled").
        **/
        cancel(): void;

        /**
         * Canceled promise value, can be returned from a promise completion handler to indicate cancelation of the promise chain.
         */
        static cancel: IPromise<any>;

        /**
         * Raises an event of the specified type and properties.
         * @param type The type (name) of the event.
         * @param details The set of additional properties to be attached to the event object.
         * @returns true if preventDefault was called on the event; otherwise, false.
        **/
        static dispatchEvent(type: string, details: any): boolean;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. After the handlers have finished executing, this function throws any error that would have been returned from then as a promise in the error state. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The fulfilled value is passed as the single argument. If the value is null, the fulfilled value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while executing the function, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. If it is null, the error is forwarded. The value returned from the function is the fulfilled value of the promise returned by then.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
        **/
        done<U>(onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): void;

        /**
         * Determines whether a value fulfills the promise contract.
         * @param value A value that may be a promise.
         * @returns true if the object conforms to the promise contract (has a then function), otherwise false.
        **/
        static is(value: any): boolean;

        /**
         * Creates a Promise that is fulfilled when all the values are fulfilled.
         * @param values An object whose members contain values, some of which may be promises.
         * @returns A Promise whose value is an object with the same field names as those of the object in the values parameter, where each field value is the fulfilled value of a promise.
        **/
        static join(values: any): IPromise<any>;

        /**
         * Removes an event listener from the control.
         * @param eventType The type (name) of the event.
         * @param listener The listener to remove.
         * @param capture Specifies whether or not to initiate capture.
        **/
        static removeEventListener(eventType: string, listener: Function, capture?: boolean): void;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;

        /**
         * Allows you to specify the work to be done on the fulfillment of the promised value, the error handling to be performed if the promise fails to fulfill a value, and the handling of progress notifications along the way. For more information about the differences between then and done, see the following topics: Quickstart: using promises in JavaScript How to handle errors when using promises in JavaScript Chaining promises in JavaScript.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        then<U>(onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;


        /**
         * A static helper that functions identically to then() off a promise instance.
         * @param promise The promise to chain from.
         * @param onComplete The function to be called if the promise is fulfilled successfully with a value. The value is passed as the single argument. If the value is null, the value is returned. The value returned from the function becomes the fulfilled value of the promise returned by then. If an exception is thrown while this function is being executed, the promise returned by then moves into the error state.
         * @param onError The function to be called if the promise is fulfilled with an error. The error is passed as the single argument. In different cases this object may be of different types, so it is necessary to test the object for the properties you expect. If the error is null, it is forwarded. The value returned from the function becomes the value of the promise returned by the then function.
         * @param onProgress The function to be called if the promise reports progress. Data about the progress is passed as the single argument. Promises are not required to support progress.
         * @returns The promise whose value is the result of executing the onComplete function.
        **/
        static then(promise: IPromise<any>, onComplete?: (value: any) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): IPromise<any>;

        /**
         * Performs an operation on all the input promises and returns a promise that has the shape of the input and contains the result of the operation that has been performed on each input.
         * @param values A set of values (which could be either an array or an object) of which some or all are promises..
         * @param complete The function to be called if the promise is fulfilled with a value. This function takes a single argument, which is the fulfilled value of the promise.
         * @param error The function to be called if the promise is fulfilled with an error. This function takes a single argument, which is the error value of the promise.
         * @param progress The function to be called if the promise reports progress. This function takes a single argument, which is the data about the progress of the promise. Promises are not required to support progress.
         * @returns A Promise that is the result of calling join on the values parameter.
        **/
        static thenEach(values: any, complete?: (value: any) => void, error?: (error: any) => void, progress?: (progress: any) => void): IPromise<any>;

        /**
         * This method has two forms: WinJS.Promise.timeout(timeout) and WinJS.Promise.timeout(timeout, promise). WinJS.Promise.timeout(timeout) creates a promise that is completed asynchronously after the specified timeout, essentially wrapping a call to setTimeout within a promise. WinJS.Promise.timeout(timeout, promise) sets a timeout period for completion of the specified promise, automatically canceling the promise if it is not completed within the timeout period.
         * @param timeout The timeout period in milliseconds. If this value is zero or not specified, msSetImmediate is called, otherwise setTimeout is called.
         * @param promise Optional. A promise that will be canceled if it doesn't complete within the timeout period.
         * @returns If the promise parameter is omitted, returns a promise that will be fulfilled after the timeout period. If the promise paramater is provided, the same promise is returned.
        **/
        static timeout(timeout?: number, promise?: IPromise<any>): IPromise<any>;

        /**
         * Wraps a non-promise value in a promise. This method is like wrapError, which allows you to produce a Promise in error conditions, in that it allows you to return a Promise in success conditions.
         * @param value Some non-promise value to be wrapped in a promise.
         * @returns A promise that is successfully fulfilled with the specified value.
        **/
        static wrap<U>(value?: U): IPromise<U>;

        /**
         * Wraps a non-promise error value in a promise. You can use this function if you need to pass an error to a function that requires a promise.
         * @param error A non-promise error value to be wrapped in a promise.
         * @returns A promise that is in an error state with the specified value.
        **/
        static wrapError<U>(error: U): IPromise<U>;

        //#endregion Methods

    }

    //#endregion Objects

    //#region Functions

    /**
     * You can provide an implementation of this method yourself, or use WinJS.Utilities.startLog to create one that logs to the JavaScript console.
     * @param message The message to log.
     * @param tags The tag or tags to categorize the message (winjs, winjs controls, etc.).
     * @param type The type of message (error, warning, info, etc.).
    **/
    function log(message: string, tags?: string, type?: string): void;
    function log(message: ()=>string, tags?: string, type?: string): void;

    /**
     * This method has been deprecated. Strict processing is always on; you don't have to call this method to turn it on.
    **/
    function strictProcessing(): void;

    /**
     * Wraps calls to XMLHttpRequest in a promise.
     * @param options The options that are applied to the XMLHttpRequest object, as follows: type, url, user, password, responseType, headers, data, customRequestInitializer.
     * @returns A promise that returns the XMLHttpRequest object when it completes.
    **/
    function xhr(options: IXHROptions): Promise<XMLHttpRequest>;

    //#endregion Functions

    //#region Interfaces

    interface IXHROptions {
        type?: string;
        url: string;
        user?: string;
        password?: string;
        headers?: any;
        data?: any;
        responseType?: string;
        customRequestInitializer?:(request: XMLHttpRequest) => void;
    }

    //#endregion Interfaces
}
/**
 * Provides helper functions for defining namespaces. For more information, see Organizing your code with WinJS.Namespace.
**/
declare module WinJS.Namespace {
    //#region Functions

    /**
     * Defines a new namespace with the specified name. For more information, see Organizing your code with WinJS.Namespace.
     * @param name The name of the namespace. This could be a dot-separated name for nested namespaces.
     * @param members The members of the new namespace.
     * @returns The newly-defined namespace.
    **/
    function define(name?: string, members?: any): any;

    /**
     * Defines a new namespace with the specified name under the specified parent namespace. For more information, see Organizing your code with WinJS.Namespace.
     * @param parentNamespace The parent namespace.
     * @param name The name of the new namespace.
     * @param members The members of the new namespace.
     * @returns The newly-defined namespace.
    **/
    function defineWithParent(parentNamespace?: any, name?: string, members?: any): any;

    //#endregion Functions

}
/**
 * Provides functionality for dealing with basic navigation, including the navigation stack.
**/
declare module WinJS.Navigation {
    //#region Properties

    /**
     * Determines whether it is possible to navigate backwards.
    **/
    var canGoBack: boolean;

    /**
     * Determines if it is possible to navigate forwards.
    **/
    var canGoForward: boolean;

    /**
     * Gets or sets the navigation history.
    **/
    var history: any;

    /**
     * Gets or sets the current location.
    **/
    var location: string;

    /**
     * Gets or sets a user-defined object that represents the state associated with the current location.
    **/
    var state: any;

    //#endregion Properties

    //#region Functions

    /**
     * Adds an event listener to the control.
     * @param eventType The type (name) of the event.
     * @param listener The listener to invoke when the event gets raised.
     * @param capture If true, specifies that capture should be initiated, otherwise false.
    **/
    function addEventListener(eventType: string, listener: Function, capture?: boolean): void;

    /**
     * Navigates backwards.
     * @param distance The number of entries to go back into the history.
     * @returns A promise that is completed with a value that indicates whether or not the navigation was successful.
    **/
    function back(distance?: number): Promise<boolean>;

    /**
     * Navigates forwards.
     * @param distance The number of entries to go forward.
     * @returns A promise that is completed with a value that indicates whether or not the navigation was successful.
    **/
    function forward(distance?: number): Promise<boolean>;

    /**
     * Navigates to a location.
     * @param location The location to navigate to. Generally the location is a string containing the URL, but it may be anything.
     * @param initialState A user-defined object that represents the navigation state that may be accessed through state.
     * @returns A promise that is completed with a value that indicates whether or not the navigation was successful (true if successful, otherwise false).
    **/
    function navigate(location: any, initialState?: any): Promise<boolean>;

    /**
     * Removes an event listener from the control.
     * @param eventType The type (name) of the event.
     * @param listener The listener to remove.
     * @param useCapture Specifies whether or not to initiate capture.
    **/
    function removeEventListener(eventType: string, listener: Function, useCapture?: boolean): void;

    //#endregion Functions

    //#region Events

    /**
     * Occurs before navigation.
     * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
    **/
    function onbeforenavigate(eventInfo: CustomEvent): void;

    /**
     * Occurs after navigation has taken place.
     * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
    **/
    function onnavigated(eventInfo: CustomEvent): void;

    /**
     * Occurs when navigation is taking place.
     * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: location, state.
    **/
    function onnavigating(eventInfo: CustomEvent): void;

    //#endregion Events

}
/**
 * Provides functions for accessing resources and localizing content.
**/
declare module WinJS.Resources {
    //#region Functions

    /**
     * Registers an event handler for the specified event. Use this method to register for events that are related to resources, such as when the app's language, scale, or contrast changes.
     * @param type The name of the event to handle.
     * @param listener The listener (event handler function) to associate with the event.
     * @param useCapture Set to true to register the listener for the capturing phase; otherwise, set to false to register the listener for the bubbling phase.
    **/
    function addEventListener(type: string, listener: Function, useCapture?: boolean): void;

    /**
     * Raises an event of the specified type and with the specified additional properties.
     * @param type The name of the event to raise.
     * @param details The set of additional properties to attach to the event object.
    **/
    function dispatchEvent(type: string, details: any): void;

    /**
     * Retrieves the resource string that has the specified resource identifier.
     * @param resourceId The resource ID of the string to retrieve.
     * @returns An object that can contain these properties: value, empty, lang.
    **/
    function getString(resourceId: string): { value: string; empty?: boolean; lang?: string; };

    /**
     * Processes data-win-res attributes on elements and replaces attributes and properties with resource strings.
     * @param rootElement The element to process. The element and its child elements will be processed. If an element isn't specified, the entire document is processed.
    **/
    function processAll(rootElement?: HTMLElement): Promise<void>;

    /**
     * Removes an event listener that the addEventListener method registered.
     * @param type The name of the event that the event listener is registered for.
     * @param listener The listener (event handler function) to remove.
     * @param useCapture Set to true to remove the capturing phase listener; set to false to remove the bubbling phase listener.
    **/
    function removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

    //#endregion Functions

    //#region Events

    /**
     * Occurs when the user changes the system's language or contrast, or the scale of the display, or when the user changes any of the items in the current context's qualifier values list. For more info about the current context's qualifier values list, see the Remarks section.
     * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.qualifier, detail.changed.
    **/
    function oncontextchanged(eventInfo: CustomEvent): void;

    //#endregion Events

}
/**
 * Provides access to the Windows animations. These functions provide developers with the ability to use animations in their custom controls that are consistent with animations used by Windows controls.
**/
declare module WinJS.UI.Animation {
    //#region Functions

    /**
     * Creates an object that performs an animation that adds an item or items to a list.
     * @param added Element or elements to add to the list.
     * @param affected Element or elements affected by the added items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createAddToListAnimation(added: any, affected: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that adds an item or items to a list of search results.
     * @param added Element or elements to add to the list.
     * @param affected Element or elements affected by the added items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createAddToSearchListAnimation(added: any, affected: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that collapses a list.
     * @param hidden Element or elements hidden as a result of the collapse.
     * @param affected Element or elements affected by the hidden items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createCollapseAnimation(hidden: any, affected: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that removes an item or items from a list.
     * @param deleted Element or elements to delete from the list.
     * @param remaining Element or elements affected by the removal of the deleted items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createDeleteFromListAnimation(deleted: any, remaining: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that removes an item or items from a list of search results.
     * @param deleted Element or elements to delete from the list.
     * @param remaining Element or elements affected by the removal of the deleted items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createDeleteFromSearchListAnimation(deleted: any, remaining: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that expands a list.
     * @param revealed Element or elements revealed by the expansion.
     * @param affected Element or elements affected by the newly revealed items.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createExpandAnimation(revealed: any, affected: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs a peek animation.
     * @param element Element or elements involved in the peek.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise that completes when the animation is finished.
    **/
    function createPeekAnimation(element: any): IAnimationMethodResponse;

    /**
     * Creates an object that performs an animation that moves an item or items.
     * @param element Element or elements involved in the reposition.
     * @returns An object whose execute method is used to execute the animation. The execute method returns a Promise object that completes when the animation is finished.
    **/
    function createRepositionAnimation(element: any): IAnimationMethodResponse;

    /**
     * Performs an animation that fades an item or items in, fading out existing items that occupy the same space.
     * @param incoming Element or elements being faded in.
     * @param outgoing Element or elements being replaced.
     * @returns An object that completes when the animation has finished.
    **/
    function crossFade(incoming: any, outgoing: any): Promise<any>;

    /**
     * Performs an animation when a dragged object is moved such that dropping it in that position would move other items. The potentially affected items are animated out of the way to show where the object would be dropped.
     * @param target Element or elements that the dragged object would cause to be moved if it were dropped.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function dragBetweenEnter(target: any, offset?: any): Promise<any>;

    /**
     * Performs an animation when a dragged object is moved away from items that it had previously involved in a dragBetweenEnter animation. The affected objects are animated back to their original positions.
     * @param target Element or elements that the dragged object would no longer cause to be displaced, due to its moving away. This should be the same element or element collection passed as the target parameter in the dragBetweenEnter animation.
     * @returns An object that completes when the animation is finished.
    **/
    function dragBetweenLeave(target: any): Promise<any>;

    /**
     * Performs an animation when the user finishes dragging an object.
     * @param dragSource Element or elements that were dragged.
     * @param offset Initial offset from the drop point. The dropped object begins at the offset and animates to its final position at the drop point. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @param affected Element or elements whose position the dropped object affects. Typically, this is all other items in a reorderable list. This should be the same element or element collection passed as the affected parameter in the dragSourceStart animation.
     * @returns An object that completes when the animation is finished.
    **/
    function dragSourceEnd(dragSource: any, offset?: any, affected?: any): Promise<any>;

    /**
     * Performs an animation when the user begins to drag an object.
     * @param dragSource Element or elements being dragged.
     * @param affected Element or elements whose position is affected by the movement of the dragged object. Typically, this is all other items in a reorderable list.
     * @returns An object that completes when the animation is finished.
    **/
    function dragSourceStart(dragSource: any, affected?: any): Promise<any>;

    /**
     * Performs an animation that displays one or more elements on a page.
     * @param incoming Element or elements that compose the incoming content.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @param options Optional. Set this value to { mechanism: "transition" } to play the animation using CSS transitions instead of the default CSS animations. In some cases this can result in improved performance.
     * @returns An object that completes when the animation is finished.
    **/
    function enterContent(incoming: any, offset?: any, options?: any): Promise<any>;

    /**
     * Performs an animation that shows a new page of content, either when transitioning between pages in a running app or when displaying the first content in a newly launched app.
     * @param element Element or an array of elements that represent the content. If element refers to an array of elements, the elements enter in array order.
     * @param offset An initial offset where the element or elements begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function enterPage(element: any, offset?: any): Promise<any>;

    /**
     * Performs an animation that hides one or more elements on a page.
     * @param outgoing Element or elements that compose the outgoing content.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function exitContent(outgoing: any, offset?: any): Promise<any>;

    /**
     * Performs an animation that dismisses the current page when transitioning between pages in an app.
     * @param outgoing Element or elements that compose the outgoing page.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function exitPage(outgoing: any, offset?: any): Promise<any>;

    /**
     * Performs an animation that fades an item or set of items into view.
     * @param shown Element or elements being faded in.
     * @returns An object that completes when the animation has finished. Use this object when subsequent actions need this animation to finish before they take place.
    **/
    function fadeIn(shown: any): Promise<any>;

    /**
     * Performs an animation that fades an item or set of items out of view.
     * @param hidden Element or elements being faded out.
     * @returns An object that completes when the animation is finished.
    **/
    function fadeOut(hidden: any): Promise<any>;

    /**
     * Performs an animation that hides edge-based user interface (UI).
     * @param element Element or elements that are being hidden.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Offsets should be the chosen so that the elements end the animation just off-screen. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @param options Optional. Set this value to { mechanism: "transition" } to play the animation using CSS transitions instead of the default CSS animations. In some cases this can result in improved performance.
     * @returns An object that completes when the animation is finished.
    **/
    function hideEdgeUI(element: any, offset?: any, options?: any): Promise<any>;

    /**
     * Performs an animation that hides a panel.
     * @param element Element or elements that are being hidden.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Offsets should be the chosen so that the elements end the animation just off-screen. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function hidePanel(element: any, offset?: any): Promise<any>;

    /**
     * Performs an animation that removes pop-up user interface (UI).
     * @param element Element or elements that are being hidden.
     * @returns An object that completes when the animation is finished.
    **/
    function hidePopup(element: any): Promise<any>;

    /**
     * Performs an animation when a pointer is pressed on an object.
     * @param element Element or elements on which the pointer is pressed.
     * @returns An object that completes when the animation is finished.
    **/
    function pointerDown(element: any): Promise<any>;

    /**
     * Performs an animation when a pointer is released.
     * @param element Element or elements that the pointer was pressed on.
     * @returns An object that completes when the animation is finished.
    **/
    function pointerUp(element: any): Promise<any>;

    /**
     * Performs an animation that slides a narrow, edge-based user interface (UI) into view.
     * @param element Element or elements that are being shown.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Offsets should be the chosen so that the elements begin the animation from just off-screen. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @param options Optional. Set this value to { mechanism: "transition" } to play the animation using CSS transitions instead of the default CSS animations. In some cases this can result in improved performance.
     * @returns An object that completes when the animation is finished.
    **/
    function showEdgeUI(element: any, offset?: any, options?: any): Promise<any>;

    /**
     * Performs an animation that slides a large panel user interface (UI) into view.
     * @param element Element or elements that are being shown.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Offsets should be the chosen so that the elements begin the animation from just off-screen. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function showPanel(element: any, offset?: any): Promise<any>;

    /**
     * Performs an animation that displays a pop-up user interface (UI).
     * @param element Element or elements that are being shown.
     * @param offset Initial offsets where the animated objects begin relative to their final position at the end of the animation. Offsets should be the chosen so that the elements begin the animation from just off-screen. Set this parameter to null to use the recommended default offset. Note When the element parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function showPopup(element: any, offset?: any): Promise<any>;

    /**
     * Performs a deselection animation in response to a swipe interaction.
     * @param deselected Element or elements that become unselected.
     * @param selection Element or elements that represent the selection, typically a check mark.
     * @returns An object that completes when the animation is finished.
    **/
    function swipeDeselect(deselected: any, selection: any): Promise<any>;

    /**
     * Performs an animation that reveals an item or items in response to a swipe interaction.
     * @param target Element or elements being revealed.
     * @param offset An initial offset where the animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function swipeReveal(target: any, offset?: any): Promise<any>;

    /**
     * Performs a selection animation in response to a swipe interaction.
     * @param selected Element or elements being selected.
     * @param selection Element or elements that show that something is selected, typically a check mark.
     * @returns An object that completes when the animation is finished.
    **/
    function swipeSelect(selected: any, selection: any): Promise<any>;

    /**
     * Performs an animation that updates a badge.
     * @param incoming Element or elements that comprise the new badge.
     * @param offset Initial offsets where incoming animated objects begin relative to their final position at the end of the animation. Set this parameter to null to use the recommended default offset. Note When the incoming parameter specifies an array of elements, the offset parameter can specify an offset array with each item specified for its corresponding element array item. If the array of offsets is smaller than the array of elements, the last offset is applied to all remaining elements.
     * @returns An object that completes when the animation is finished.
    **/
    function updateBadge(incoming: any, offset?: any): Promise<any>;

    /**
     * Execute a slide up animation.
     * @param incoming Single element or collection of elements to animate sliding up.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideUp(incoming: any): Promise<any>;

    /**
     * Execute a slide down animation.
     * @param incoming Single element or collection of elements to animate sliding down.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideDown(incoming: any): Promise<any>;

    /**
     * Execute a slide in from right to left animation.
     * @param page The page containing all elements to slide.
     * @param first First element or collection of elements to animate sliding in.
     * @param second Second element or collection of elements to animate sliding in, which will be offset slightly farther than the first.
     * @param third Third element or collection of elements to animate sliding in, which will be offset slightly farther than the second.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideLeftIn(page: any, first: any, second: any, third: any): Promise<any>;

    /**
     * Execute a slide out from right to left animation.
     * @param page The page containing all elements to slide.
     * @param first First element or collection of elements to animate sliding out.
     * @param second Second element or collection of elements to animate sliding out, which will be offset slightly farther than the first.
     * @param third Third element or collection of elements to animate sliding out, which will be offset slightly farther than the second.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideLeftOut(page: any, first: any, second: any, third: any): Promise<any>;

    /**
     * Execute a slide in from left to right animation.
     * @param page The page containing all elements to slide.
     * @param first First element or collection of elements to animate sliding in.
     * @param second Second element or collection of elements to animate sliding in, which will be offset slightly farther than the first.
     * @param third Third element or collection of elements to animate sliding in, which will be offset slightly farther than the second.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideRightIn(page: any, first: any, second: any, third: any): Promise<any>;

    /**
     * Execute a slide out from left to right animation.
     * @param page The page containing all elements to slide.
     * @param first First element or collection of elements to animate sliding out.
     * @param second Second element or collection of elements to animate sliding out, which will be offset slightly farther than the first.
     * @param third Third element or collection of elements to animate sliding out, which will be offset slightly farther than the second.
     * @returns A Promise that completes when the animation is finished.
    **/
    function slideRightOut(page: any, first: any, second: any, third: any): Promise<any>;

    /**
     * Execute a continuum animation, scaling up the incoming page while scaling, rotating, and translating the incoming item.
     * @param page Single element to be scaled up that is the page root and does not contain the incoming item.
     * @param itemRoot Root of the item that will be translated as part of the continuum animation.
     * @param itemContent Content of the item that will be scaled and rotated as part of the continuum animation.
     * @returns A Promise that completes when the animation is finished.
    **/
    function continuumForwardIn(page: any, itemRoot: any, itemContent: any): Promise<any>;

    /**
     * Execute a continuum animation, scaling down the outgoing page while scaling, rotating, and translating the outgoing item.
     * @param page Single element to be scaled down that is the page root and contains the outgoing item.
     * @param item Single element to be scaled, rotated, and translated away from the outgoing page.
     * @returns A Promise that completes when the animation is finished.
    **/
    function continuumForwardOut(page: any, item: any): Promise<any>;

    /**
     * Execute a continuum animation, scaling down the incoming page while scaling, rotating, and translating the incoming item.
     * @param page Single element to be scaled down that is the page root and contains the incoming item.
     * @param item Single element to be scaled, rotated, and translated into its final position on the page.
     * @returns A Promise that completes when the animation is finished.
    **/
    function continuumBackwardIn(page: any, item: any): Promise<any>;

    /**
     * Execute a continuum animation, scaling down the outgoing page while.
     * @param page Single element to be scaled down that is the page root.
     * @returns A Promise that completes when the animation is finished.
    **/
    function continuumBackwardOut(page: any): Promise<any>;

    /**
     * Execute a turnstile forward in animation.
     * @param incoming Single element or collection of elements to animate.
     * @returns A Promise that completes when the animation is finished.
    **/
    function turnstileForwardIn(incoming: any): Promise<any>;

    /**
     * Execute a turnstile forward out animation.
     * @param outgoing Single element or collection of elements to animate.
     * @returns A Promise that completes when the animation is finished.
    **/
    function turnstileForwardOut(outgoing: any): Promise<any>;

    /**
     * Execute a turnstile backward in animation.
     * @param incoming Single element or collection of elements to animate.
     * @returns A Promise that completes when the animation is finished.
    **/
    function turnstileBackwardIn(incoming: any): Promise<any>;

    /**
     * Execute a turnstile backward out animation.
     * @param outgoing Single element or collection of elements to animate.
     * @returns A Promise that completes when the animation is finished.
    **/
    function turnstileBackwardOut(outgoing: any): Promise<any>;


    //#endregion Functions

    //#region Interfaces

    interface IAnimationMethodResponse {
        execute(): Promise<any>;
    }

    //#endregion Interfaces

}
/**
 * Provides controls and objects that manipulate data.
**/
declare module WinJS.UI {
    //#region Enumerations

    /**
     * Specifies an icon that appears in an AppBarCommand object.
    **/
    enum AppBarIcon {
        previous,
        next,
        play,
        pause,
        edit,
        save,
        clear,
        delete,
        remove,
        add,
        cancel,
        accept,
        more,
        redo,
        undo,
        home,
        up,
        forward,
        right,
        back,
        left,
        favorite,
        camera,
        settings,
        video,
        sync,
        download,
        mail,
        find,
        help,
        upload,
        emoji,
        twopage,
        leavechat,
        mailforward,
        clock,
        send,
        crop,
        rotatecamera,
        people,
        closepane,
        openpane,
        world,
        flag,
        previewlink,
        globe,
        trim,
        attachcamera,
        zoomin,
        bookmarks,
        document,
        protecteddocument,
        page,
        bullets,
        comment,
        mail2,
        contactinfo,
        hangup,
        viewall,
        mappin,
        phone,
        videochat,
        switch,
        contact,
        rename,
        pin,
        musicinfo,
        go,
        keyboard,
        dockleft,
        dockright,
        dockbottom,
        remote,
        refresh,
        rotate,
        shuffle,
        list,
        shop,
        selectall,
        orientation,
        import,
        importall,
        browsephotos,
        webcam,
        pictures,
        savelocal,
        caption,
        stop,
        showresults,
        volume,
        repair,
        message,
        page2,
        calendarday,
        calendarweek,
        calendar,
        characters,
        mailreplyall,
        read,
        link,
        accounts,
        showbcc,
        hidebcc,
        cut,
        attach,
        paste,
        filter,
        copy,
        emoji2,
        important,
        mailreply,
        slideshow,
        sort,
        manage,
        allapps,
        disconnectdrive,
        mapdrive,
        newwindow,
        openwith,
        contactpresence,
        priority,
        uploadskydrive,
        gototoday,
        font,
        fontcolor,
        contact2,
        folder,
        audio,
        placeholder,
        view,
        setlockscreen,
        settile,
        cc,
        stopslideshow,
        permissions,
        highlight,
        disableupdates,
        unfavorite,
        unpin,
        openlocal,
        mute,
        italic,
        underline,
        bold,
        movetofolder,
        likedislike,
        dislike,
        like,
        alignright,
        aligncenter,
        alignleft,
        zoom,
        zoomout,
        openfile,
        otheruser,
        admin,
        street,
        map,
        clearselection,
        fontdecrease,
        fontincrease,
        fontsize,
        cellphone,
        reshare,
        tag,
        repeatone,
        repeatall,
        outlinestar,
        solidstar,
        calculator,
        directions,
        target,
        library,
        phonebook,
        memo,
        microphone,
        postupdate,
        backtowindow,
        fullscreen,
        newfolder,
        calendarreply,
        unsyncfolder,
        reporthacked,
        syncfolder,
        blockcontact,
        switchapps,
        addfriend,
        touchpointer,
        gotostart,
        zerobars,
        onebar,
        twobars,
        threebars,
        fourbars,
        scan,
        preview
    }

    /**
     * Indicates whether the IListDataAdapter was able to provide a count.
    **/
    enum CountResult {
        /**
         * Indicates no count is available.
        **/
        unknown
    }

    /**
     * Indicates that the IListDataAdapter was unable to provide a count.
    **/
    enum CountError {
        /**
         * An attempt to count items timed out.
        **/
        noResponse
    }

    /**
     * Describes the status of an IListDataSource.
    **/
    enum DataSourceStatus {
        /**
         * The IListDataSource is ready.
        **/
        ready,
        /**
         * The IListDataSource is still loading.
        **/
        waiting,
        /**
         * The IListDataSource failed to load.
        **/
        failure
    }

    /**
     * Specifies the type of error that occurred during an edit operation on a IListDataSource or an IListDataAdapter.
    **/
    enum EditError {
        /**
         * The edit operation timed out.
        **/
        noResponse,
        /**
         * The data source cannot be written to.
        **/
        notPermitted,
        /**
         * The item has changed.
        **/
        noLongerMeaningful
    }

    /**
     * Specifies the type of error encountered when retrieving items from an IListDataAdapter.
    **/
    enum FetchError {
        /**
         * The fetch operation timed out.
        **/
        noResponse,
        /**
         * The specified item could not be located.
        **/
        doesNotExist
    }

    /**
     * Specifies how group headers in a ListView respond to the tap interaction.
    **/
    enum GroupHeaderTapBehavior {
        /**
         * The group is invoked.
        **/
        invoke,
        /**
         * Nothing happens.
        **/
        none
    }

    /**
     * Specifies the position of group headers relative to their items in a ListView.
    **/
    enum HeaderPosition {
        /**
         * Group headers appear to the left of items.
        **/
        left,
        /**
         * Group headers appear above items.
        **/
        top
    }

    /**
     * Specifies that type of animation for which a contentanimating event was raised.
    **/
    enum ListViewAnimationType {
        /**
         * The animation plays when the ListView is first displayed.
        **/
        entrance,
        /**
         * The animation plays when the ListView is changing its content.
        **/
        contentTransition
    }

    /**
     * Describes the type of object in a ListView.
    **/
    enum ObjectType {
        /**
         * The object is a group header in the list.
        **/
        groupHeader,
        /**
         * The object is an item in the list.
        **/
        item
    }

    /**
     * Specifies the orientation of a control.
    **/
    enum Orientation {
        /**
         * A horizontal layout.
        **/
        horizontal,
        /**
         * A vertical layout.
        **/
        vertical
    }

    /**
     * Specifies the selection mode of a ListView.
    **/
    enum SelectionMode {
        /**
         * Items cannot be selected.
        **/
        none,
        /**
         * A single item may be selected.
        **/
        single,
        /**
         * Multiple items may be selected. Clicking additional items adds them to the selection.
        **/
        multi
    }

    /**
     * Specifies whether elements are selected when the user performs a swipe interaction.
    **/
    enum SwipeBehavior {
        /**
         * The swipe interaction selects the elements touched by the swipe.
        **/
        select,
        /**
         * The swipe interaction does not change which elements are selected.
        **/
        none
    }

    /**
     * Specifies how items in a ListView respond to the tap interaction.
    **/
    enum TapBehavior {
        /**
         * The item is selected and invoked.
        **/
        directSelect,
        /**
         * The item is selected if was not already selected, and its deselected if it was already selected.
        **/
        toggleSelect,
        /**
         * The item is invoked but not selected.
        **/
        invokeOnly,
        /**
         * Nothing happens.
        **/
        none
    }

    //#endregion Enumerations

    //#region Interfaces

    /**
     * Contains items that were requested from an IListDataAdapter and provides some information about those items.
    **/
    interface IFetchResult<T> {
        //#region Properties

        /**
         * Gets or sets the index of the requested item in the IListDataAdapter object's data source.
        **/
        absoluteIndex: number;

        /**
         * Gets or sets a value that indicates whether this IFetchResult contains the last items at the end of the IListDataAdapter object's data source.
        **/
        atEnd: boolean;

        /**
         * Gets or sets a value that indicates whether this IFetchResult contains the first items at the beginning of the IListDataAdapter object's data source.
        **/
        atStart: boolean;

        /**
         * Gets or sets the items returned by the fetch operation.
        **/
        items: T[];

        /**
         * Gets or sets the location of the requested item within the items array.
        **/
        offset: number;

        /**
         * Gets or sets the number of items in the IListDataAdapter object's underlying data source.
        **/
        totalCount: number;

        //#endregion Properties

    }

    /**
     * Represents an item in a list.
    **/
    interface IItem<T> {
        //#region Properties

        /**
         * Gets or sets the item's data.
        **/
        data: T;

        /**
         * Gets the group key for the item. This property is only available for items that belong to a grouped data source.
        **/
        groupKey: string;

        /**
         * Gets the temporary ID of the item.
        **/
        handle: string;

        /**
         * Gets the item's index in the IListDataSource.
        **/
        index: number;

        /**
         * Gets or sets the key the identifies the item.
        **/
        key: string;

        //#endregion Properties

    }

    /**
     * Provides a mechanism for retrieving IItem objects asynchronously.
    **/
    interface IItemPromise<T> extends IPromise<T> {

        //#region Methods

        /**
         * Stops change notification tracking for the IItem that fulfills this IItemPromise.
        **/
        release(): void;

        /**
         * Begins change notification tracking for the IItem that fulfills this IItemPromise.
        **/
        retain(): IItemPromise<T>;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the temporary ID of the IItem that fulfills this promise.
        **/
        handle: string;

        /**
         * Gets or sets the index of the IItem contained by this IItemPromise.
        **/
        index: number;

        //#endregion Properties

    }

    /**
     * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface. Represents a layout for the ListView.
    **/
    interface ILayout {
        //#region Methods

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param beginScrollPosition The first visible pixel in the ListView. For horizontal layouts, this is the x-coordinate of the pixel. For vertical layouts, this is the y-coordinate.
         * @param wholeItem true if the item must be completely visible; otherwise, false if its ok for the item to be partially visible. Promise.
         * @returns A Promise for the index of the first visible item at the specified point.
        **/
        calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): Promise<any>;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param endScrollPosition The last visible pixel in the ListView. For horizontal layouts, this is the x-coordinate of the pixel. For vertical layouts, this is the y-coordinate.
         * @param wholeItem true if the item must be completely visible; otherwise, false if its ok for the item to be partially visible. Promise.
         * @returns A Promise for the index of the last visible item at the specified point.
        **/
        calculateLastVisible(endScrollPosition: number, wholeItem: boolean): Promise<any>;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @returns A object that has these properties: animationPromise, newEndIndex.
        **/
        endLayout(): any;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param itemIndex The index of the item.
         * @returns A Promise that returns an object with these properties: left, top, contentWidth, contentHeight, totalWidth, totalHeight.
        **/
        getItemPosition(itemIndex: number): Promise<any>;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param itemIndex The data source index of the current item.
         * @param element The element for the current item.
         * @param keyPressed The key that was pressed. This function must check for the arrow keys (leftArrow, upArrow, rightArrow, downArrow), pageDown, and pageUp and determine which item the user navigated to.
         * @returns A Promise that contains the index of the next item (This item becomes the current item).
        **/
        getKeyboardNavigatedItem(itemIndex: number, element: HTMLElement, keyPressed: WinJS.Utilities.Key): Promise<number>;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @returns A Promise that returns an object that has these properties: beginScrollPosition, endScrollPosition.
        **/
        getScrollBarRange(): Promise<any>;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param x The x-coordinate to test.
         * @param y The y-coordinate to test.
        **/
        hitTest(x: number, y: number): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param elements The elements that represent the items that were added.
        **/
        itemsAdded(elements: HTMLElement[]): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
        **/
        itemsMoved(): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param elements The elements that represent the items that were removed.
        **/
        itemsRemoved(elements: HTMLElement[]): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param groupIndex The index of the group in the group data source.
         * @param element The element to render for the group header.
        **/
        layoutHeader(groupIndex: number, element: HTMLElement): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param itemIndex The index of the item in the data source.
         * @param element The element to render for the item.
        **/
        layoutItem(itemIndex: number, element: HTMLElement): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param element The element that represents a header in the data source.
        **/
        prepareHeader(element: HTMLElement): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param element An element that represents an item in the data source.
        **/
        prepareItem(element: HTMLElement): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param element The element being released.
        **/
        releaseItem(element: HTMLElement): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
        **/
        reset(): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param site The layout site for the layout. You can use this object to query the hosting ListView for info you might need to lay out items.
        **/
        setSite(site: ILayoutSite): void;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
         * @param beginScrollPosition The starting pixel of the area to which the items are rendered.
         * @param endScrollPosition The last pixel of the area to which the items are rendered.
         * @param count The upper bound of the number of items to render.
         * @returns A Promise that returns an object that has these properties: beginIndex, endIndex.
        **/
        startLayout(beginScrollPosition: number, endScrollPosition: number, count: number): Promise<any>;

        //#endregion Methods

        //#region Properties

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayout2 interface.
        **/
        horizontal: boolean;

        //#endregion Properties

    }

    /**
     * Represents a layout for the ListView.
    **/
    interface ILayout2 {
        //#region Methods

        /**
         * Called when the ListView finishes a drag operation.
        **/
        dragLeave(): void;

        /**
         * Called when the ListView initiates a drag operation.
         * @param x The x-coordinate of the drag.
         * @param y The y-coordinate of the drag.
         * @param dragInfo An object that indicates whether the item is selected.
        **/
        dragOver(x: number, y: number, dragInfo: number): void;

        /**
         * Called when the ListView requests that the ILayout2 execute animations.
        **/
        executeAnimations(): void;

        /**
         * Determines the next item to receive keyboard focus.
         * @param currentItem An object that describes the current item. It has these properties: index, type.
         * @param pressedKey The key that was pressed.
         * @returns An object that describes the next item that should receive focus. It has these properties: index, type.
        **/
        getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;

        /**
         * Gets the item at the specified hit-test coordinates. These coordinates are absolute coordinates (they are not relative to the layout's content area).
         * @param x The x-coordinate to test for.
         * @param y The y-coordinate to test for.
         * @returns An object that describes the item at the hit test coordinates. It has these properties: type, index.
        **/
        hitTest(x: number, y: number): any;

        /**
         * Sets the rendering site and specifies whether the layout supports groups. This method is called by the ListView to initialize the layout.
         * @param site The rendering site for the layout.
         * @param groupsEnabled Set to true if this layout supports groups; set to false if it does not.
        **/
        initialize(site: ILayoutSite2, groupsEnabled: boolean): void;

        /**
         * Retrieves the indexes of the items in the specified pixel range.
         * @param firstPixel The first pixel the range of items falls between.
         * @param lastPixel The last pixel the range of items falls between.
        **/
        itemsFromRange(firstPixel: number, lastPixel: number): void;

        /**
         * Performs a layout pass.
         * @param tree A structure representing the layout tree that is returned from the ListView.
         * @param changedRange An object that lists the index of the first item in the changed item range. This object has these properties: startIndex.
         * @param modifiedItems An object that contains the old and new indexes of the items that have been modified in the tree.
         * @param modifiedGroups An object that contains the old and new indexes of the group elements that have been modified in the tree.
         * @returns A Promise that executes after layout is complete, or an object that contains two Promise objects: realizedRangeComplete, layoutComplete.
        **/
        layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): any;

        /**
         * Called when the ListView requests that the ILayout2 set up animations.
        **/
        setupAnimations(): void;

        /**
         * Releases resources that were obtained during the call to initialize.
        **/
        uninitialize(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the orientation of the layout.
        **/
        orientation: any;

        //#endregion Properties

    }

    /**
     * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use the ILayoutSite2 interface. Represents a rendering site for an ILayout.
    **/
    interface ILayoutSite {
        //#region Properties

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        animationsDisabled: boolean;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        itemSurface: HTMLElement;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        rtl: boolean;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        scrollbarPos: number;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        surface: HTMLElement;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        viewport: HTMLElement;

        /**
         * This API is no longer supported. Starting with the Windows Library for JavaScript 2.0 Preview, use a the ILayoutSite2 interface.
        **/
        viewportSize: any;

        //#endregion Properties

    }

    /**
     * Represents a rendering site for an ILayout2.
    **/
    interface ILayoutSite2 {
        //#region Properties

        /**
         * Gets the number of groups in the site.
        **/
        groupCount: number;

        /**
         * Gets the number of items in the site.
        **/
        itemCount: Promise<number>;

        /**
         * Gets the pixel range of the realization area.
        **/
        realizedRange: any;

        /**
         * Gets the tree for use by an object that implements the ILayout2 interface.
        **/
        tree: any;

        /**
         * Gets the pixel range of visible items in the site.
        **/
        visibleRange: any;

        //#endregion Properties

    }

    /**
     * Retrieves items from a IListDataSource, enumerates the contents of a IListDataSource, and can optionally register for change notifications.
    **/
    interface IListBinding<T> {
        //#region Methods

        /**
         * Retrieves the current item.
         * @returns An IItemPromise that contains the current item. If the cursor has moved past the start or end of the list, the promise completes with a value of null. If the current item has been moved or deleted, the promise returns an error.
        **/
        current(): IItemPromise<IItem<T>>;

        /**
         * Gets the first item from the IListDataSource and makes it the current item.
         * @returns An IItemPromise that contains the requested IItem. If the list is empty, the promise completes with a value of null.
        **/
        first(): IItemPromise<IItem<T>>;

        /**
         * Retrieves the item from the IListDataSource that has the specified description and makes it the current item.
         * @param description A domain-specific description, to be interpreted by the IListDataAdapter, that identifies the item to retrieve.
         * @returns An IItemPromise that contains the requested IItem object. If the item wasn't found, the promise completes with a value of null.
        **/
        fromDescription(description: string): IItemPromise<IItem<T>>;

        /**
         * Retrieves the item from the IListDataSource that has the specified index and makes it the current item.
         * @param index A value greater than or equal to 0 that is the index of the item to retrieve.
         * @returns An IItemPromise that contains the requested IItem. If the item wasn't found, the promise completes with a value of null.
        **/
        fromIndex(index: number): IItemPromise<IItem<T>>;

        /**
         * Retrieves the item from the IListDataSource that has the specified key and makes it the current item.
         * @param key The key that identifies the item to retrieve. This value must be a non-empty string.
         * @param hints Domain-specific information that provides additional information to the IListDataAdapter to improve retrieval time.
         * @returns An IItemPromise that contains the requested IItem. If they item couldn't be found, the promise completes with a value of null.
        **/
        fromKey(key: string, hints?: any): IItemPromise<IItem<T>>;

        /**
         * Makes the specified IItem or IItemPromise the current item.
         * @param item The IItem or IItemPromise that will become the current item.
         * @returns An IItemPromise that contains the specified item, if it exists. If the specified item is not in the list, the promise completes with a value of null.
        **/
        jumpToItem(item: IItem<T>): IItemPromise<IItem<T>>;

        /**
         * Retrieves the last item in the IListDataSource and makes it the current item.
         * @returns An IItemPromise that contains the requested IItem. f the list is empty, the promise completes with a value of null.
        **/
        last(): IItemPromise<IItem<T>>;

        /**
         * Retrieves the item after the current item and makes it the current item.
         * @returns An IItemPromise that contains the item after the current item. If the cursor moves past the end of the list, the promise completes with a value of null.
        **/
        next(): IItemPromise<IItem<T>>;

        /**
         * Retrieves the item before the current item and makes it the current item.
         * @returns An IItemPromise that contains the item before the current item. If the cursor moves past the start of the list, the promise completes with a value of null.
        **/
        previous(): IItemPromise<IItem<T>>;

        /**
         * Releases resources, stops notifications, and cancels outstanding promises for all tracked items returned by this IListBinding.
        **/
        release(): void;

        /**
         * Creates a request to stop change notifications for the specified item. The change notifications stop when the number of releaseItem calls matches the number of IIItemPromise.retain calls.
         * @param item The IItem or IItemPromise that should stop receiving notifications.
        **/
        releaseItem(item: IItem<T>): void;

        //#endregion Methods

    }

    /**
     * Accesses data for an IListDataSource.
    **/
    interface IListDataAdapter<T> {
        //#region Methods

        /**
         * Overwrites the data of the specified item.
         * @param key The key of the item to overwrite.
         * @param newData The new data for the item.
         * @param indexHint The index of the item, if known.
         * @returns A Promise that returns null or undefined when the operation completes.
        **/
        change(key: string, newData: T, indexHint: number): Promise<void>;

        /**
         * Gets the number of items in the IListDataAdapter object's data source.
         * @returns A Promise that contains the number of items the IListDataAdapter contains, or an approximate value if the actual number is unknown.
        **/
        getCount(): Promise<number>;

        /**
         * Inserts the specified data after the specified item.
         * @param key A key that can be used to retrieve the new data.
         * @param data The new data to add to the IListDataAdapter object's data source.
         * @param previousKey The key of an item in the IListDataAdapter object's data source. The new data will be inserted after this item.
         * @param previousIndexHint The index of the item to insert the new data after, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAfter(key: string, data: T, previousKey: string, previousIndexHint: number): Promise<IItem<T>>;

        /**
         * Adds the specified key and data to the end of the IListDataAdapter object's data source.
         * @param key A key that can be used to retrieve the new data.
         * @param data The new data to add to the IListDataAdapter object's data source.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAtEnd(key: string, data: T): Promise<IItem<T>>;

        /**
         * Adds the specified key and data to the beginning of the IListDataAdapter object's data source.
         * @param key A key that can be used to retrieve the new data.
         * @param data The new data to add to the IListDataAdapter object's data source.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAtStart(key: string, data: T): Promise<IItem<T>>;

        /**
         * Inserts the specified data before the specified item.
         * @param key A key that can be used to retrieve the new data.
         * @param data The new data to add to the IListDataAdapter object's data source.
         * @param nextKey The key of an item in the IListDataAdapter object's data source. The new data will be inserted before this item.
         * @param nextIndexHint The index of the item to insert the new data before, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertBefore(key: string, data: T, nextKey: string, nextIndexHint: number): Promise<IItem<T>>;

        /**
         * Retrieves the item that matches the specified description and also retrieves the specified number of items before and after the matched item.
         * @param description A description of the item to locate.
         * @param countBefore The number of items before the matched item to retrieve.
         * @param countAfter The number of items after the matched item to retrieve.
         * @returns A Promise that provides an IFetchResult that contains the selected items or a FetchError if an error was encountered.
        **/
        itemsFromDescription(description: string, countBefore: number, countAfter: number): Promise<IFetchResult<T>>;

        /**
         * Retrieves the specified number of items from the end of the IListDataAdapter object's data source.
         * @param count The number of items to retrieve.
         * @returns A Promise that provides an IFetchResult that contains the selected items or a FetchError if an error was encountered.
        **/
        itemsFromEnd(count: number): Promise<IFetchResult<T>>;

        /**
         * Retrieves the item at the specified index and also retrieves the specified number of items before and after the selected item.
         * @param index The index of the item to retrieve.
         * @param countBefore The number of items to retrieve from before the selected item.
         * @param countAfter The number of items to retrieve from after the selected item.
         * @returns A Promise that provides an IFetchResult that contains the selected items or a FetchError if an error was encountered.
        **/
        itemsFromIndex(index: number, countBefore: number, countAfter: number): Promise<IFetchResult<T>>;

        /**
         * Retrieves the item that has the specified key and also retrieves the specified number of items before and after the selected item.
         * @param key The key of the item to retrieve.
         * @param countBefore The number of items to retrieve from before the selected item.
         * @param countAfter The number of items to retrieve from after the selected item.
         * @returns A Promise that provides an IFetchResult that contains the selected items or a FetchError if an error was encountered.
        **/
        itemsFromKey(key: string, countBefore: number, countAfter: number): Promise<IFetchResult<T>>;

        /**
         * Retrieves the specified number of items from the beginning of the IListDataAdapter object's data source.
         * @param count The number of items to retrieve.
         * @returns A Promise that provides an IFetchResult that contains the selected items or a FetchError if an error was encountered.
        **/
        itemsFromStart(count: number): Promise<IFetchResult<T>>;

        /**
         * Returns a string representation of the specified item that can be used for comparisons.
         * @param item The item for which to generate a signature.
         * @returns The signature representation of the specified item.
        **/
        itemSignature(item: IItem<T>): string;

        /**
         * Moves the specified item to just after another item.
         * @param key A key of the item to move.
         * @param previousKey The key of another item. The item to move will be moved to just after this item.
         * @param indexHint The index of the item to move, if known.
         * @param previousIndexHint The index to move the item after, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        moveAfter(key: string, previousKey: any, indexHint: string, previousIndexHint: number): Promise<IItem<T>>;

        /**
         * Moves the specified item to just before another item.
         * @param key A key of the item to move.
         * @param nextKey The key of another item. The item to move will be moved to just before this item.
         * @param indexHint The index of the item to move, if known.
         * @param nextIndexHint The index to move the item before, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        moveBefore(key: string, nextKey: any, indexHint: string, nextIndexHint: number): Promise<IItem<T>>;

        /**
         * Moves the specified item to the end of the IListDataAdapter object's data source.
         * @param key The key for the item to move.
         * @param indexHint The index of the item to move, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        moveToEnd(key: string, indexHint: number): Promise<IItem<T>>;

        /**
         * Moves the specified item to the beginning of the IListDataAdapter object's data source.
         * @param key The key for the item to move.
         * @param indexHint The index of the item to move, if known.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        moveToStart(key: string, indexHint: number): Promise<IItem<T>>;

        /**
         * Removes the specified item from the IListDataAdapter object's data source.
         * @param key The key of the item to remove.
         * @param data The new data for the item.
         * @param indexHint The index of the item.
         * @returns A Promise that returns null or undefined when the operation completes.
        **/
        remove(key: string, data: T, indexHint: number): Promise<void>;

        /**
         * Registers a notification handler. The IListDataAdapter uses the handler to notify listening objects when its data changes.
         * @param notificationHandler The notification handler that the IListDataAdapter will use to provide change notifications. .
        **/
        setNotificationHandler(notificationHandler: IListDataNotificationHandler<T>): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that specifies whether to use an object's identity to determine if an item has changed.
        **/
        compareByIdentity: boolean;

        //#endregion Properties

    }

    /**
     * Notifies clients when an IListDataAdapter object's data changes.
    **/
    interface IListDataNotificationHandler<T> {
        //#region Methods

        /**
         * Indicates the start of a notification batch. Objects that are listening for notifications should defer making updates until endNotifications is called.
        **/
        beginNotifications(): void;

        /**
         * Raises a notification that an item in the IListDataAdapter object's data source has changed.
         * @param item The item that changed.
        **/
        changed(item: IItem<T>): void;

        /**
         * Indicates the end of a notification batch. When the beginNotifications method is called, objects listening for notifications should defer making updates until endNotifications is called.
        **/
        endNotifications(): void;

        /**
         * Raises a notification that an item has been added to the IListDataAdapter object's data source.
         * @param newItem The new item added to the IListDataAdapter object's data source.
         * @param previousKey The key of the item that now precedes the new item, or null if the item was inserted at the start of the list. If nextKey is provided, this parameter may be null.
         * @param nextKey The key of the item that now follows the new item, or null if the item was inserted at the end of the list. If previousKey is provided, this parameter may be null.
         * @param index The index of the new item.
        **/
        inserted(newItem: IItem<T>, previousKey: string, nextKey: string, index?: number): void;

        /**
         * Indicates that all previous data obtained from the IListDataAdapter is invalid and should be refreshed.
         * @returns A Promise that completes when the data has been completely refreshed and all change notifications have been sent.
        **/
        invalidateAll(): Promise<any>;

        /**
         * Raises a notification that an item was moved within the IListDataAdapter object's data source.
         * @param item The item that was moved.
         * @param previousKey The key of the item that now precedes the new item, or null if the item was moved to the beginning of the list. If nextKey is provided, this parameter may be null.
         * @param nextKey The key of the item that now follows the new item, or null if the item was moved to the end of the list. If previousKey is provided, this parameter may be null.
         * @param oldIndex The item's original index.
         * @param newIndex The item's new index.
        **/
        moved(item: IItem<T>, previousKey: string, nextKey: string, oldIndex?: number, newIndex?: number): void;

        /**
         * Reloads data from the IListDataAdapter.
        **/
        reload(): void;

        /**
         * Raises a notification that an item was removed from the IListDataAdapter object's data source.
         * @param key The key of the item that was removed.
         * @param index The index of the item that was removed.
        **/
        removed(key: string, index?: number): void;

        //#endregion Methods

    }

    /**
     * Provides access to a data source and enables you to bind, change, add, remove, and move items in that data source.
    **/
    interface IListDataSource<T> {
        //#region Events

        /**
         * Occurs when the status of the IListDataSource changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: status.
        **/
        statuschanged(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Notifies the IListDataSource that a sequence of edits is about to begin. The IListDataSource will defer notifications until endEdits is called.
        **/
        beginEdits(): void;

        /**
         * Overwrites the data of the specified item.
         * @param key The key for the item to replace.
         * @param newData The new data for the item.
         * @returns A Promise that contains the IItem that was updated or an EditError if an error was encountered.
        **/
        change(key: string, newData: T): Promise<IItem<T>>;

        /**
         * Creates an IListBinding that can retrieve items from the IListDataSource, enumerate the contents of the IListDataSource object's data, and optionally register for change notifications.
         * @param notificationHandler Enables the IListBinding to register for change notifications for individual items obtained from the IListDataSource. If you omit this parameter, change notifications won't be available.
         * @returns The new IListBinding.
        **/
        createListBinding(notificationHandler?: IListNotificationHandler<T>): IListBinding<T>;

        /**
         * Notifies the IListDataSource that the batch of edits that began with the last beginEdits call has completed. The IListDataSource will submit notifications for any changes that occurred between the beginEdits and endEdits calls as a batch and resume normal change notifications.
        **/
        endEdits(): void;

        /**
         * Retrieves the number of items in the data source.
         * @returns A Promise that provides a Number that is the number of items in the data source.
        **/
        getCount(): Promise<number>;

        /**
         * Inserts a new item after another item.
         * @param key The key that can be used to retrieve the new item, if known.
         * @param data The data for the item to add.
         * @param previousKey The key for an item in the data source. The new item will be added after this item.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAfter(key: string, data: T, previousKey: string): Promise<IItem<T>>;

        /**
         * Adds an item to the end of the data source.
         * @param key The key that can be used to retrieve the new item, if known.
         * @param data The data for the item to add.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAtEnd(key: string, data: T): Promise<IItem<T>>;

        /**
         * Adds an item to the beginning of the data source.
         * @param key The key that can be used to retrieve the new item, if known.
         * @param data The data for the item to add.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertAtStart(key: string, data: T): Promise<IItem<T>>;

        /**
         * Inserts an item before another item.
         * @param key The key that can be used to retrieve the new item, if known.
         * @param data The data for the item to add.
         * @param nextKey The key of an item in the data source. The new item will be inserted before this item.
         * @returns A Promise that contains the IItem that was added or an EditError if an error was encountered.
        **/
        insertBefore(key: string, data: T, nextKey: string): Promise<IItem<T>>;

        /**
         * Indicates that all previous data obtained from the IListDataAdapter is invalid and should be refreshed.
         * @returns A Promise that completes when the data has been completely refreshed and all notifications have been sent.
        **/
        invalidateAll(): Promise<any>;

        /**
         * Retrieves the item that has the specified description.
         * @param description Domain-specific information, to be interpreted by the IListDataAdapter, that describes the item to retrieve.
         * @returns A Promise that provides an IItem that contains the requested item or a FetchError if an error was encountered. If the item wasn't found, the promise completes with a value of null.
        **/
        itemFromDescription(description: any): Promise<IItem<T>>;

        /**
         * Retrieves the item at the specified index.
         * @param index A value that is greater than or equal to zero that is the index of the item to retrieve.
         * @returns A Promise that provides an IItem that contains the requested item or a FetchError if an error was encountered. If the item wasn't found, the promise completes with a value of null.
        **/
        itemFromIndex(index: number): Promise<IItem<T>>;

        /**
         * Retrieves the item with the specified key.
         * @param key The key of the item to retrieve. It must be a non-empty string.
         * @param description Domain-specific information that IListDataAdapter can use to improve the retrieval time.
         * @returns A Promise that provides an IItem that contains the requested item or a FetchError if an error was encountered. If the item was not found, the promise completes with a null value.
        **/
        itemFromKey(key: string, description?: any): Promise<IItem<T>>;

        /**
         * Moves an item to just after another item.
         * @param key The key that identifies the item to move.
         * @param previousKey The key of another item in the data source. The item specified by the key parameter will be moved after this item.
         * @returns A Promise that contains the IItem that was moved or an EditError if an error was encountered.
        **/
        moveAfter(key: string, previousKey: string): Promise<IItem<T>>;

        /**
         * Moves an item before another item.
         * @param key The key that identifies the item to move.
         * @param nextKey The key of another item in the data source. The item specified by the key parameter will be moved before this item.
         * @returns A Promise that contains the IItem that was moved or an EditError if an error was encountered.
        **/
        moveBefore(key: string, nextKey: string): Promise<IItem<T>>;

        /**
         * Moves an item to the end of the data source.
         * @param key The key that identifies the item to move.
         * @returns A Promise that contains the IItem that was moved or an EditError if an error was encountered.
        **/
        moveToEnd(key: string): Promise<IItem<T>>;

        /**
         * Moves the specified item to the beginning of the data source.
         * @param key The key that identifies the item to move.
         * @returns A Promise that contains the IItem that was moved or an EditError if an error was encountered.
        **/
        moveToStart(key: string): Promise<IItem<T>>;

        /**
         * Removes the specified item from the data source.
         * @param key The key that identifies the item to remove.
         * @returns A Promise that contains nothing if the operation was successful or an EditError if an error was encountered.
        **/
        remove(key: string): Promise<IItem<T>>;

        //#endregion Methods

    }

    /**
     * Used by an IListBinding to provide change notifications when items in a IListDataSource change.
    **/
    interface IListNotificationHandler<T> {
        //#region Methods

        /**
         * Indicates the start of a notification batch. Objects that are listening for notifications should defer making updates until endNotifications is called.
        **/
        beginNotifications(): void;

        /**
         * Indicates that an item changed.
         * @param newItem The updated item.
         * @param oldItem The original item.
        **/
        changed(newItem: IItem<T>, oldItem: IItem<T>): void;

        /**
         * Indicates that the number of items in the IListDataSource has changed.
         * @param newCount The updated count.
         * @param oldCount The original count.
        **/
        countChanged(newCount: number, oldCount: number): void;

        /**
         * Indicates the end of a notification batch. When the beginNotifications method is called, objects listening for notifications should defer making updates until endNotifications is called.
        **/
        endNotifications(): void;

        /**
         * Indicates that the index of an item changed.
         * @param handle The temporary ID of the item.
         * @param newIndex The new index.
         * @param oldIndex The original index.
        **/
        indexChanged(handle: string, newIndex: number, oldIndex: number): void;

        /**
         * Indicates that an item was added to the IListDataSource.
         * @param itemPromise A promise for the new IItem.
         * @param previousHandle The temporary ID of the item that precedes the new item.
         * @param nextHandle The temporary ID of the item that follows the new item.
        **/
        inserted(itemPromise: IItemPromise<T>, previousHandle: string, nextHandle: string): void;

        /**
         * Indicates that an IItemPromise was fulfilled and that the item is now available.
         * @param item The fulfilled item.
        **/
        itemAvailable(item: IItem<T>): void;

        /**
         * Indicates that an item was moved.
         * @param item A promise for the IItem that was moved.
         * @param previousHandle The temporary ID of the item that now precedes the moved item.
         * @param nextHandle The temporary ID of the item that now follows the moved item.
        **/
        moved(item: IItemPromise<T>, previousHandle: string, nextHandle: string): void;

        /**
         * Indicates that an item was removed.
         * @param handle The temporary ID of the item that was removed.
         * @param mirage true if the item never actually existed; false if the item was actually present in the IListDataSource.
        **/
        removed(handle: string, mirage: boolean): void;

        //#endregion Methods

    }

    /**
     * Used by ListView's currentItem API
    **/
    interface IListViewItem {
        /**
         * Gets or sets index of the ListView item.
        **/
        index?: number;

        /**
         * Gets or sets key of the ListView item.
        **/
        key?: string;

        /**
         * Gets or sets whether the ListView item is focused.
        **/
        hasFocus?: boolean;

        /**
         * Gets or sets whether the ListView item is focused and is showing its focus visual.
        **/
        showFocus?: boolean;

        /**
         * Gets the type, if any.
        **/
        type?: WinJS.UI.ObjectType;
    }

    /**
     * Represents a selection of ListView items.
    **/
    interface ISelection<T> {
        //#region Methods

        /**
         * Adds one or more items to the selection.
         * @param items The indexes or keys of the items to add. You can provide different types of objects for the items parameter: you can specify an index, a key, or a range of indexes. It can also be an array that contains one or more of these objects. For more info, see the Remarks section.
         * @returns A Promise that is fulfilled when the operation completes.
        **/
        add(items: any): Promise<any>;

        /**
         * Clears the selection.
         * @returns A Promise that is fulfilled when the clear operation completes.
        **/
        clear(): Promise<any>;

        /**
         * Returns the number of items in the selection.
         * @returns The number of items in the selection.
        **/
        count(): number;

        /**
         * Returns a list of the indexes for the items in the selection.
         * @returns The list of indexes for the items in the selection as an array of Number objects.
        **/
        getIndices(): number[];

        /**
         * Returns an array that contains the items in the selection.
         * @returns A Promise that contains an array of the requested IItem objects.
        **/
        getItems(): Promise<IItem<T>[]>;

        /**
         * Gets an array of the index ranges for the selected items.
         * @returns An array that contains an ISelectionRange object for each index range in the selection.
        **/
        getRanges(): ISelectionRange[];

        /**
         * Returns a value that indicates whether the selection contains every item in the data source.
         * @returns true if the selection contains every item in the data source; otherwise, false.
        **/
        isEverything(): boolean;

        /**
         * Removes the specified items from the selection.
         * @param items The indexes or keys of the items to remove. You can provide different types of objects for the items parameter: you can specify an index, a key, or a range of indexes. It can also be an array that contains one or more of these objects. For more info, see the Remarks section.
         * @returns A Promise that is fulfilled when the operation completes.
        **/
        remove(items: any): Promise<any>;

        /**
         * Adds all the items in the ListView to the selection.
        **/
        selectAll(): void;

        /**
         * Clears the current selection and replaces it with the specified items.
         * @param items The indexes or keys of the items that make up the selection. You can provide different types of objects for the items parameter: you can specify an index, a key, or a range of indexes. It can also be an array that contains one or more of these objects. For more info, see the Remarks section.
         * @returns A Promise that is fulfilled when the operation completes.
        **/
        set(items: any): Promise<any>;

        //#endregion Methods

    }

    /**
     * Represents a range of indexes or keys in an ISelection.
    **/
    interface ISelectionRange {
        //#region Properties

        /**
         * Gets or sets the index of the first item in the range.
        **/
        firstIndex: number;

        /**
         * Gets or sets the key of the first item in the range.
        **/
        firstKey: any;

        /**
         * Gets or sets the index of the last item in the range.
        **/
        lastIndex: number;

        /**
         * Gets or sets of the key of the last item in the range.
        **/
        lastKey: any;

        //#endregion Properties

    }

    /**
     * Supports semantic zoom functionality by exposing a control as either the zoomed in or the zoomed out view of the SemanticZoom control.
    **/
    interface IZoomableView<T> {
        //#region Methods

        /**
         * Initiates semantic zoom on the custom control.
        **/
        beginZoom(): void;

        /**
         * Initializes the semantic zoom state for the custom control.
         * @param isZoomedOut True if this is the zoomed out view; otherwise false.
         * @param isCurrentView True if this is the current view; otherwise false.
         * @param triggerZoom The function that manages semantic zoom behavior. Triggers a zoom in or zoom out if the control is the visible control.
         * @param prefetchedPages The number of pages of content to pre-fetch for zooming. This value is dependent on the size of the semantic zoom container. More content can be displayed based on the zoom factor and the size of the container.
        **/
        configureForZoom(isZoomedOut: boolean, isCurrentView: boolean, triggerZoom: Function, prefetchedPages: number): void;

        /**
         * Terminates semantic zoom on the zoomed in or zoomed out child of the custom control.
         * @param isCurrentView True if the control is the visible control; otherwise false.
        **/
        endZoom(isCurrentView: boolean): void;

        /**
         * Retrieves the current item of the zoomed in or zoomed out child of the custom control.
         * @returns An object that represents the selected item. This return value must be a Promise for the following: item, position.
        **/
        getCurrentItem(): Promise<{ item: T; position: Utilities.IPosition }>;

        /**
         * Retrieves the panning axis of the zoomed-in or zoomed-out child of the custom control.
         * @returns Identifies the panning axis of the child control. Implementation specific.
        **/
        getPanAxis(): string;

        /**
         * Manages pointer input for the custom control.
         * @param pointerId The ID of the pointer.
        **/
        handlePointer(pointerId: string): void;

        /**
         * Positions the specified item within the viewport of the child control when panning or zooming begins.
         * @param item The object to position within the viewport of the child control. item can be a number, a string, or an object with any number of properties.
         * @param position An object that contains the position data of the item relative to the child control. position must be an object with four number properties: left, top, width, and height. These values specify a rectangle that is typically the bounding box of the current item, though the details are up to the control. The units of the position must be in pixels. And the coordinates must be relative to the top-left of the control viewport (which should occupy the same area as the semantic zoom viewport), except when in RTL mode. In RTL mode, return coordinates relative to the top-right off the control viewport. The rectangle is transformed from the coordinate system of one control to that of the other.
        **/
        positionItem(item: T, position: Utilities.IPosition): void;

        /**
         * Selects the item closest to the specified screen coordinates.
         * @param x The x-coordinate in DIPs relative to the upper-left corner of the SemanticZoom viewport.
         * @param y The y-coordinate in DIPs relative to the upper-left corner of the SemanticZoom viewport..
        **/
        setCurrentItem(x: number, y: number): void;

        //#endregion Methods

    }

    //#endregion Interfaces

    //#region Objects

    /**
     * Represents an application toolbar for displaying commands.
    **/
    class AppBar {
        //#region Constructors

        /**
         * Creates a new AppBar object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new AppBar.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs immediately after the AppBar is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onafterhide(eventInfo: Event): void;

        /**
         * Occurs after the AppBar is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onaftershow(eventInfo: Event): void;

        /**
         * Occurs before the AppBar is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforehide(eventInfo: Event): void;

        /**
         * Occurs before a hidden AppBar is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeshow(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this AppBar. Call this method when the AppBar is no longer needed. After calling this method, the AppBar becomes unusable.
        **/
        dispose(): void;

        /**
         * Returns the AppBarCommand object identified by id.
         * @param id The element idenitifier (ID) of the command to be returned.
         * @returns The command identified by id. If multiple commands have the same ID, returns an array of all the commands matching the ID.
        **/
        getCommandById(id: string): AppBarCommand;

        /**
         * Hides the AppBar.
        **/
        hide(): void;

        /**
         * Hides the specified commands of the AppBar.
         * @param commands The commands to hide. The array elements may be AppBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to hide the commands immediately, without animating them; otherwise, false.
        **/
        hideCommands(commands: any[], immediate?: boolean): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Shows the AppBar if it is not disabled.
        **/
        show(): void;

        /**
         * Shows the specified commands of the AppBar.
         * @param commands The commands to show. The array elements may be AppBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the commands immediately, without animating them; otherwise, false.
        **/
        showCommands(commands: any[], immediate?: boolean): void;

        /**
         * Shows the specified commands of the AppBar while hiding all other commands.
         * @param commands The commands to show. The array elements may be AppBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the specified commands (and hide the others) immediately, without animating them; otherwise, false.
        **/
        showOnlyCommands(commands: any[], immediate?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets/Sets how AppBar will display itself while hidden. Values are "none" and "minimal".
        **/
        closedDisplayMode: string;

        /**
         * Sets the AppBarCommand objects that appear in the app bar.
        **/
        commands: AppBarCommand[];

        /**
         * Gets or sets a value that indicates whether the AppBar is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the AppBar.
        **/
        element: HTMLElement;

        /**
         * Gets a value that indicates whether the AppBar is hidden or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * Gets or sets the layout of the app bar contents.
        **/
        layout: string;

        /**
         * Gets or sets a value that specifies whether the AppBar appears at the top or bottom of the main view.
        **/
        placement: string;

        /**
         * Gets or sets a value that indicates whether the AppBar is sticky (won't light dismiss). If not sticky, the app bar dismisses normally when the user touches outside of the appbar.
        **/
        sticky: boolean;

        //#endregion Properties

    }

    /**
     * Represents a command to be displayed in an app bar.
    **/
    class AppBarCommand {
        //#region Constructors

        /**
         * Creates a new AppBarCommand object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new AppBarCommand.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Releases resources held by this AppBarCommand. Call this method when the AppBarCommand is no longer needed. After calling this method, the AppBarCommand becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that indicates whether the AppBarCommand is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the AppBarCommand.
        **/
        element: HTMLElement;

        /**
         * Adds an extra CSS class during construction.
        **/
        extraClass: string;

        /**
         * Gets or sets the HTMLElement with a 'content' type AppBarCommand that should receive focus whenever focus moves by the user pressing HOME or the arrow keys, from the previous AppBarCommand to this AppBarCommand.
        **/
        firstElementFocus: HTMLElement;

        /**
         * Gets or sets the Flyout object displayed by this command. The specified flyout is shown when the AppBarCommand's button is invoked.
        **/
        flyout: Flyout;

        /**
         * Gets or sets a value that indicates whether the AppBarCommand is hiding or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * Gets or sets the icon of the AppBarCommand.
        **/
        icon: string;

        /**
         * Gets the element identifier (ID) of the command.
        **/
        id: string;

        /**
         * Gets or sets the label of the command.
        **/
        label: string;

        /**
         * Gets or sets the HTMLElement with a 'content' type AppBarCommand that should receive focus whenever focus moves by the user pressing END or the arrow keys, from the previous AppBarCommand to this AppBarCommand.
        **/
        lastElementFocus: HTMLElement;

        /**
         * Gets or sets the function to be invoked when the command is clicked.
        **/
        onclick: Function;

        /**
         * Gets the section of the app bar that the command is in.
        **/
        section: string;

        /**
         * Gets or sets the selected state of a toggle button.
        **/
        selected: boolean;

        /**
         * Gets or sets the tooltip of the command.
        **/
        tooltip: string;

        /**
         * Gets the type of the command.
        **/
        type: string;

        //#endregion Properties

    }

    /**
     * Provides backwards navigation in the form of a button.
    **/
    class BackButton {
        //#region Constructors

        /**
         * Creates a new BackButton.
         * @constructor 
         * @param element The DOM element hosts the new BackButton.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this BackButton. Call this method when the BackButton is no longer needed. After calling this method, the BackButton becomes unusable.
        **/
        dispose(): void;

        /**
         * Checks the current navigation history and updates the value of the control's disabled attribute.
        **/
        refresh(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the HTML element that hosts this BackButton.
        **/
        element: HTMLElement;

        //#endregion Properties

    }

    /**
     * Represents a layout for the ListView in which items are arranged in a grid and items can span multiple grid cells.
    **/
    class CellSpanningLayout {
        //#region Constructors

        /**
         * Creates a new CellSpanningLayout.
         * @constructor 
         * @param options An object that contains one or more property/value pairs to apply to the new CellSpanningLayout. Each property of the options object corresponds to one of the object's properties or events. Event names must begin with "on".
        **/
        constructor(options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragLeave(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragOver(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        executeAnimations(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param currentItem An object that describes the current item. It has these properties: index, type.
         * @param pressedKey The key that was pressed.
         * @returns An object that describes the next item that should receive focus. It has these properties: index, type.
        **/
        getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param x The x-coordinate, or the horizontal position on the screen.
         * @param y The y-coordinate, or the vertical position on the screen.
        **/
        hitTest(x: number, y: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param site The rendering site for the layout.
         * @param groupsEnabled Set to true if this layout supports groups; set to false if it does not.
        **/
        initialize(site: ILayoutSite2, groupsEnabled: boolean): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param firstPixel The first pixel the range of items falls between.
         * @param lastPixel The last pixel the range of items falls between.
        **/
        itemsFromRange(firstPixel: number, lastPixel: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param tree 
         * @param changedRange 
         * @param modifiedItems 
         * @param modifiedGroups 
        **/
        layout(tree: ILayoutSite2, changedRange: any, modifiedItems: any, modifiedGroups: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        setupAnimations(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        uninitialize(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the position of group headers relative to their items.
        **/
        groupHeaderPosition: WinJS.UI.HeaderPosition;

        /**
         * Gets or sets a function that enables cell-spanning and establishes base cell dimensions.
        **/
        groupInfo: Function;

        /**
         * Gets or sets a function that returns the width and height of an item, as well as whether it should appear in a new column. Setting this function improves performance because the ListView can allocate space for an item without having to measure it first.
        **/
        itemInfo: Function;

        /**
         * Gets or set the maximum number of rows or columns, depending on the orientation, to display before content begins to wrap.
        **/
        maximumRowsOrColumns: number;

        /**
         * This API supports the Windows Library for JavaScript infrastructure and is not intended to be used directly from your code.
        **/
        numberOfItemsPerItemsBlock: any;

        /**
         * Gets the orientation of the CellSpanningLayout. For a CellSpanningLayout, this property always returns Orientation.horizontal.
        **/
        orientation: WinJS.UI.Orientation;

        //#endregion Properties

    }

    /**
     * Allows users to pick a date value.
    **/
    class DatePicker {
        //#region Constructors

        /**
         * Initializes a new instance of the DatePicker control.
         * @constructor 
         * @param element The DOM element associated with the DatePicker control.
         * @param options The set of options to be applied initially to the DatePicker control. The options are the following: calendar, current, datePattern, disabled, maxYear, minYear, monthPattern, yearPattern.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when any of the controls are changed by the user.
         * @param eventInfo An object that contains information about the event.
        **/
        onchange(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Adds an event listener.
         * @param type The type (name) of the event.
         * @param listener The function that handles the event.
         * @param capture If true, specifies that capture should be initiated, otherwise false.
        **/
        addEventListener(type: string, listener: Function, capture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this DatePicker. Call this method when the DatePicker is no longer needed. After calling this method, the DatePicker becomes unusable.
        **/
        dispose(): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        raiseEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes a listener for the specified event.
         * @param type The name of the event for which to remove a listener.
         * @param listener The listener.
         * @param useCapture Optional. The same value that was passed to addEventListener for this listener. It may be omitted if it was omitted when calling addEventListener.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: any): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the calendar to use.
        **/
        calendar: string;

        /**
         * Gets or sets the current date of the DatePicker. You can use either a date string or a Date object to set this property.
        **/
        current: Date;

        /**
         * Gets or sets the display pattern for the date. The default date pattern is day.integer(2). You can change the date pattern by changing the number of integers displayed.
        **/
        datePattern: string;

        /**
         * Specifies whether the DatePicker is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element for the DatePicker.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the maximum Gregorian year available for picking.
        **/
        maxYear: number;

        /**
         * Gets or sets the minimum Gregorian year available for picking.
        **/
        minYear: number;

        /**
         * Gets or sets the display pattern for the month. The default month pattern is month.abbreviated. You can change the month pattern to the following values: month.full. The full name of the month. month.abbreviated(n). You can use abbreviated with or without specifying the number of letters in the abbreviation. If you do specify the number of letters, the actual length of the month name that appears may vary. month.solo.full. A representation of the month that is suitable for stand-alone display. You can also use month.solo.abbreviated(n). month.integer(n). You can use integer with or without specifying the number of integers.
        **/
        monthPattern: string;

        /**
         * Gets or sets the display pattern for the year. The default year pattern is year.full. You can change the year pattern to the following values: year.abbreviated(n). You can use abbreviated with or without specifying the number of letters in the abbreviation.
        **/
        yearPattern: string;

        //#endregion Properties

    }

    /**
     * Adds event-related methods to the control.
    **/
    class DOMEventMixin {
        //#region Methods

        /**
         * Adds an event listener to the control.
         * @param type The type (name) of the event.
         * @param listener The listener to invoke when the event gets raised.
         * @param useCapture true to initiate capture; otherwise, false.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type, adding the specified additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes an event listener from the control.
         * @param type The type (name) of the event.
         * @param listener The listener to remove.
         * @param useCapture true to initiate capture; otherwise, false.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Adds the set of declaratively specified options (properties and events) to the specified control. If the name of the options property begins with "on", the property value is a function and the control supports addEventListener. This method calls the addEventListener method on the control.
         * @param control The control on which the properties and events are to be applied.
         * @param options The set of options that are specified declaratively.
        **/
        setOptions(control: any, options: any): void;

        //#endregion Methods

    }

    /**
     * Displays a collection, such as a set of photos, one item at a time.
    **/
    class FlipView<T> {
        //#region Constructors

        /**
         * Creates a new FlipView.
         * @constructor 
         * @param element The DOM element that hosts the control.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the pageselected event, add a property named "onpageselected" and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when the datasource count changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: source.
        **/
        ondatasourcecountchanged(eventInfo: Event): void;

        /**
         * Raised when the FlipView flips to a page and its renderer function completes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.source.
        **/
        onpagecompleted(eventInfo: CustomEvent): void;

        /**
         * Raised when the FlipView flips to a page.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.source.
        **/
        onpageselected(eventInfo: CustomEvent): void;

        /**
         * Occurs when an item becomes invisible or visible.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.source, detail.visible.
        **/
        onpagevisibilitychanged(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. For a list of events, see the FlipView object page.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Returns the number of items in the FlipView control's itemDataSource.
         * @returns A Promise that contains the number of items in the list or WinJS.UI.CountResult.unknown if the count is unavailable.
        **/
        count(): Promise<number>;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this FlipView. Call this method when the FlipView is no longer needed. After calling this method, the FlipView becomes unusable.
        **/
        dispose(): void;

        /**
         * Forces the FlipView to update its layout. Use this function when making the FlipView visible again after its style.display property had been set to "none".
        **/
        forceLayout(): void;

        /**
         * Navigates to the next page.
         * @returns true if the FlipView begins navigating to the next page; false if the FlipView is already at the last item or is in the middle of another navigation animation.
        **/
        next(): boolean;

        /**
         * Navigates to the previous item.
         * @returns true if the FlipView begins navigating to the previous page; nfalse if the FlipView is already at the first page or is in the middle of another navigation animation.
        **/
        previous(): boolean;

        /**
         * Unregisters an event handler for the specified event.
         * @param eventName The name of the event.
         * @param eventHandler The event handler function to remove.
         * @param useCapture Set to true to unregister the event handler for the capturing phase; otherwise, set to false to unregister the event handler for the bubbling phase.
        **/
        removeEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Sets custom animations for the FlipView to use when navigating between pages.
         * @param animations An object that contains up to three fields, one for each navigation action: next, previous, and jump. Each of those fields must be a function with this signature: function (outgoingPage, incomingPage) Each function must return a WinJS.Promise that completes once the animations are finished. If a field is null or undefined, the FlipView reverts to its default animation for that action.
        **/
        setCustomAnimations(animations: any): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the index of the currently displayed page.
        **/
        currentPage: number;

        /**
         * Gets the HTML element that hosts this FlipView.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the data source that provides the FlipView with items to display. The FlipView displays one item at a time, on its own page.
        **/
        itemDataSource: IListDataSource<T>;

        /**
         * Gets or sets the spacing between each item, in pixels.
        **/
        itemSpacing: number;

        /**
         * Gets or sets a Template or function that defines the HTML for each item's page.
        **/
        itemTemplate: any;

        /**
         * Gets or sets the orientation of the FlipView, horizontal or vertical.
        **/
        orientation: string;

        //#endregion Properties

    }

    /**
     * Displays lightweight UI that is either information, or requires user interaction. Unlike a dialog, a Flyout can be light dismissed by clicking or tapping off of it.
    **/
    class Flyout {
        //#region Constructors

        /**
         * Creates a new Flyout object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new Flyout.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised immediately after a flyout is fully hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onafterhide(eventInfo: Event): void;

        /**
         * Raised immediately after a flyout is fully shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onaftershow(eventInfo: Event): void;

        /**
         * Raised just before hiding a flyout.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforehide(eventInfo: Event): void;

        /**
         * Raised just before showing a flyout.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeshow(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Releases resources held by this object. Call this method when the object is no longer needed. After calling this method, the object becomes unusable.
        **/
        dispose(): void;

        /**
         * Hides the Flyout, if visible, regardless of other states.
        **/
        hide(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Shows the Flyout, if hidden, regardless of other states.
         * @param anchor Required. The DOM element to anchor the Flyout.
         * @param placement The placement of the Flyout to the anchor: the string literal "top", "bottom", "left", or "right".
         * @param alignment For "top" or "bottom" placement, the alignment of the Flyout to the anchor's edge: the string literal "center", "left", or "right".
        **/
        show(anchor: HTMLElement, placement?: string, alignment?: string): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the default alignment to be used for this Flyout.
        **/
        alignment: string;

        /**
         * Gets or sets the default anchor to be used for this Flyout.
        **/
        anchor: HTMLElement;

        /**
         * Gets the DOM element that hosts the Flyout.
        **/
        element: HTMLElement;

        /**
         * Gets a value that indicates whether the Flyout is hidden or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * Gets or sets the default placement to be used for this Flyout.
        **/
        placement: string;

        //#endregion Properties

    }

    /**
     * Represents a grid layout for the ListView in which items are arranged in a horizontal grid.
    **/
    class GridLayout {
        //#region Constructors

        /**
         * Creates a new GridLayout object.
         * @constructor 
         * @param options The set of properties and values to apply to the new GridLayout.
        **/
        constructor(options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param wholeItem 
        **/
        calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): void;

        /**
         * This method is no longer supported.
         * @param endScrollPosition 
         * @param wholeItem 
        **/
        calculateLastVisible(endScrollPosition: number, wholeItem: boolean): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragLeave(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragOver(): void;

        /**
         * This method is no longer supported.
        **/
        endLayout(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        executeAnimations(): void;

        /**
         * Determines the next item to receive keyboard focus.
         * @param currentItem An object that describes the current item. It has these properties: index, type.
         * @param pressedKey The key that was pressed.
         * @returns An object that describes the next item that should receive focus. It has these properties: index, type.
        **/
        getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;

        /**
         * This method is no longer supported.
         * @param itemIndex 
        **/
        getItemPosition(itemIndex: number): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element 
         * @param keyPressed 
        **/
        getKeyboardNavigatedItem(itemIndex: number, element: any, keyPressed: any): void;

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param endScrollPosition 
        **/
        getScrollbarRange(beginScrollPosition: number, endScrollPosition: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param x The x-coordinate, or the horizontal position on the screen.
         * @param y The y-coordinate, or the vertical position on the screen.
        **/
        hitTest(x: number, y: number): void;

        /**
         * This method is no longer supported.
        **/
        init(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param site The rendering site for the layout.
         * @param groupsEnabled Set to true if this layout supports groups; set to false if it does not.
        **/
        initialize(site: ILayoutSite2, groupsEnabled: boolean): void;

        /**
         * This method is no longer supported.
         * @param elements 
        **/
        itemsAdded(elements: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param firstPixel The first pixel the range of items falls between.
         * @param lastPixel The last pixel the range of items falls between.
        **/
        itemsFromRange(firstPixel: number, lastPixel: number): void;

        /**
         * This method is no longer supported.
        **/
        itemsMoved(): void;

        /**
         * This method is no longer supported.
         * @param elements 
        **/
        itemsRemoved(elements: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param tree 
         * @param changedRange 
         * @param modifiedItems 
         * @param modifiedGroups 
        **/
        layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): void;

        /**
         * This method is no longer supported.
         * @param groupIndex 
         * @param element A DOM element.
        **/
        layoutHeader(groupIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element A DOM element.
        **/
        layoutItem(itemIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param element 
        **/
        prepareHeader(element: HTMLElement): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element A DOM element.
        **/
        prepareItem(itemIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param item 
         * @param newItem 
        **/
        releaseItem(item: any, newItem: any): void;

        /**
         * This method is no longer supported.
        **/
        reset(): void;

        /**
         * This method is no longer supported.
         * @param layoutSite 
        **/
        setSite(layoutSite: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        setupAnimations(): void;

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param endScrollPositionScrollPosition 
        **/
        startLayout(beginScrollPosition: number, endScrollPositionScrollPosition: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        uninitialize(): void;

        /**
         * This method is no longer supported.
         * @param count 
        **/
        updateBackdrop(count: number): void;

        //#endregion Methods

        //#region Properties

        /**
         * This property is no longer supported. Starting with Windows Library for JavaScript 2.0, use the .win-listview.win-container.win-backdrop CSS selector.
        **/
        backdropColor: string;

        /**
         * This property is no longer supported. Starting with Windows Library for JavaScript 2.0, use the .win-listview.win-container.win-backdrop CSS selector.
        **/
        disableBackdrop: boolean;

        /**
         * Gets or sets the position of group headers.
        **/
        groupHeaderPosition: WinJS.UI.HeaderPosition;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use a CellSpanningLayout.
        **/
        groupInfo: Function;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use the orientation property instead.
        **/
        horizontal: boolean;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use a CellSpanningLayout.
        **/
        itemInfo: Function;

        /**
         * Gets or set the maximum number of rows or columns, depending on the orientation, to display before content begins to wrap.
        **/
        maximumRowsOrColumns: number;

        /**
         * This property is no longer supported. Starting with Windows Library for JavaScript 2.0, use the maximumRowsOrColumns property.
        **/
        maxRows: number;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        numberOfItemsPerItemsBlock: any;

        /**
         * Gets or sets the orientation of the GridLayout.
        **/
        orientation: WinJS.UI.Orientation;

        //#endregion Properties

    }

    /**
     * Creates a hub navigation pattern consisting of sections that can be navigated to. Each section is defined by a HubSection object.
    **/
    class Hub {
        //#region Constructors

        /**
         * Creates a new Hub control.
         * @constructor 
         * @param element The DOM element that will host the Hub control.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the contentanimating event, add a property named "oncontentanimating" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised when the Hub is about to play entrance, content transition, insert, or remove animations.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.type, detail.index, detail.section.
        **/
        oncontentanimating(eventInfo: CustomEvent): void;

        /**
         * Raised when the user clicks on an interactive header.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.index, detail.section.
        **/
        onheaderinvoked(eventInfo: CustomEvent): void;

        /**
         * Raised when the Hub control's loadingState changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: loadingState.
        **/
        onloadingstatechanged(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this Hub. Call this method when the Hub is no longer needed. After calling this method, the Hub becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that hosts the Hub control.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the Template or templating function that creates the DOM elements for each HubSection header. Your HubSection object should provide strings for HubSection.header property.
        **/
        headerTemplate: any;

        /**
         * Gets or sets the index of the first HubSection at least partially in view. This property is useful for animating the visible content in the Hub.
        **/
        indexOfFirstVisible: number;

        /**
         * Gets or sets the index of last HubSection at least partially in view. Used for animating the visible content in the Hub.
        **/
        indexOfLastVisible: number;

        /**
         * Gets a value that indicates whether the hub is still loading or whether loading is complete. The value changes to complete after all the sections and content inside them has loaded.
        **/
        loadingState: string;

        /**
         * Gets or sets the orientation of sections within the Hub.
        **/
        orientation: Orientation;

        /**
         * Gets or sets the distance between the start of the Hub and the current viewable area.
        **/
        scrollPosition: number;

        /**
         * Gets or sets the index of the first visible HubSection.
        **/
        sectionOnScreen: number;

        /**
         * Gets or sets the List that contains the HubSection objects that belong to this Hub.
        **/
        sections: WinJS.Binding.List<HubSection>;

        /**
         * This API supports the SemanticZoom infrastructure and is not intended to be used directly from your code.
        **/
        zoomableView: IZoomableView<any>;

        //#endregion Properties

    }

    /**
     * Defines a section of a Hub.
    **/
    class HubSection {
        //#region Constructors

        /**
         * Creates a new HubSection.
         * @constructor 
         * @param element The DOM element hosts the new HubSection.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Releases resources held by this HubSection. Call this method when the HubSection is no longer needed. After calling this method, the HubSection becomes unusable.
        **/
        dispose(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that hosts the HubSection control's content.
        **/
        contentElement: HTMLElement;

        /**
         * Gets the DOM element that hosts this HubSection.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the header for this HubSection.
        **/
        header: string;

        /**
         * Gets a value that specifies whether the header is static.
        **/
        isHeaderStatic: boolean;

        //#endregion Properties

    }

    /**
     * Enables you to include an HTML page dynamically. As part of the constructor, you must include an option indicating the URI of the page.
    **/
    class HtmlControl {
        //#region Constructors

        /**
         * Initializes a new instance of HtmlControl to define a new page control.
         * @constructor
         * @param element The element that hosts the HtmlControl.
         * @param options The options for configuring the page. The uri option is required in order to specify the source document for the content of the page. Other options are the ones used by the WinJS.Pages.render method.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

    }

    /**
     * Defines an item that can be pressed, swiped, and dragged.
    **/
    class ItemContainer {
        //#region Constructors

        /**
         * Creates a new ItemContainer.
         * @constructor 
         * @param element The DOM element hosts the new ItemContainer. For the ItemContainer to be accessible, this element must have its role attribute set to "list" or "listbox". If tapBehavior is set to none and selectionDisabled is true, then use the "list" role; otherwise, use the "listbox" role.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised when the item is invoked. (You can use the tapBehavior property to specify whether taps and clicks invoke the item.)
         * @param eventInfo An object that contains information about the event.
        **/
        oninvoked(eventInfo: CustomEvent): void;

        /**
         * Raised after the item is selected or deselected.
         * @param eventInfo An object that contains information about the event.
        **/
        onselectionchanged(eventInfo: CustomEvent): void;

        /**
         * Raised just before the current selection changes.
         * @param eventInfo An object that contains information about the event.
        **/
        onselectionchanging(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this ItemContainer. Call this method when the ItemContainer is no longer needed. After calling this method, the ItemContainer becomes unusable.
        **/
        dispose(): void;

        /**
         * Forces the ItemContainer to update its layout. Call this function when the reading direction of the app changes after the control has been initialized.
        **/
        forceLayout(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that specifies whether the item can be dragged.
        **/
        draggable: boolean;

        /**
         * Gets the element that hosts this ItemContainer.
        **/
        element: HTMLElement;

        /**
         * Gets or sets a value that specifies whether the item is selected.
        **/
        selected: boolean;

        /**
         * Gets or sets a value that specifies whether selection of this item is disabled.
        **/
        selectionDisabled: boolean;

        /**
         * Gets or sets how the ItemContainer reacts to the swipe gesture. The swipe gesture can select the swiped items or can have no effect on the current selection.
        **/
        swipeBehavior: WinJS.UI.SwipeBehavior;

        /**
         * Gets or sets the orientation of swipe gestures.
        **/
        swipeOrientation: Orientation;

        /**
         * Gets or sets how the ItemContainer reacts when the user taps or clicks an item.
        **/
        tapBehavior: TapBehavior;

        //#endregion Properties

    }

    /**
     * This object supports the WinJS infrastructure and is not intended to be used directly from your code.
    **/
    class Layout {
    }

    /**
     * Represents a layout for the ListView in which items are arranged in a vertical list.
    **/
    class ListLayout {
        //#region Constructors

        /**
         * Creates a new ListLayout.
         * @constructor 
         * @param options An object that contains one or more property/value pairs to apply to the new ListLayout. Each property of the options object corresponds to one of the object's properties or events. Event names must begin with "on".
        **/
        constructor(options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param wholeItem 
        **/
        calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): void;

        /**
         * This method is no longer supported.
         * @param endScrollPosition 
         * @param wholeItem 
        **/
        calculateLastVisible(endScrollPosition: number, wholeItem: boolean): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragLeave(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        dragOver(): void;

        /**
         * This method is no longer supported.
        **/
        endLayout(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        executeAnimations(): void;

        /**
         * Determines the next item to receive keyboard focus.
         * @param currentItem An object that describes the current item. It has these properties: index, type.
         * @param pressedKey The key that was pressed.
         * @returns An object that describes the next item that should receive focus. It has these properties: index, type.
        **/
        getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;

        /**
         * This method is no longer supported.
         * @param itemIndex 
        **/
        getItemPosition(itemIndex: number): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element 
         * @param keyPressed 
        **/
        getKeyboardNavigatedItem(itemIndex: number, element: HTMLElement, keyPressed: any): void;

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param endScrollPosition 
        **/
        getScrollbarRange(beginScrollPosition: number, endScrollPosition: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param x The x-coordinate, or the horizontal position on the screen.
         * @param y The y-coordinate, or the vertical position on the screen.
        **/
        hitTest(x: number, y: number): void;

        /**
         * This method is no longer supported.
        **/
        init(): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        initialize(): void;

        /**
         * This method is no longer supported.
         * @param elements 
        **/
        itemsAdded(elements: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param firstPixel 
         * @param lastPixel 
        **/
        itemsFromRange(firstPixel: number, lastPixel: number): void;

        /**
         * This method is no longer supported.
        **/
        itemsMoved(): void;

        /**
         * This method is no longer supported.
         * @param elements 
        **/
        itemsRemoved(elements: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
         * @param tree 
         * @param changedRange 
         * @param modifiedItems 
         * @param modifiedGroups 
        **/
        layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): void;

        /**
         * This method is no longer supported.
         * @param groupIndex 
         * @param element A DOM element.
        **/
        layoutHeader(groupIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element A DOM element.
        **/
        layoutItem(itemIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param element 
        **/
        prepareHeader(element: HTMLElement): void;

        /**
         * This method is no longer supported.
         * @param itemIndex 
         * @param element A DOM element.
        **/
        prepareItem(itemIndex: number, element: any): void;

        /**
         * This method is no longer supported.
         * @param item 
         * @param newItem 
        **/
        releaseItem(item: any, newItem: any): void;

        /**
         * This method is no longer supported.
        **/
        reset(): void;

        /**
         * This method is no longer supported.
         * @param layoutSite 
        **/
        setSite(layoutSite: any): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        setupAnimations(): void;

        /**
         * This method is no longer supported.
         * @param beginScrollPosition 
         * @param endScrollPositionScrollPosition 
        **/
        startLayout(beginScrollPosition: number, endScrollPositionScrollPosition: number): void;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        uninitialize(): void;

        /**
         * This method is no longer supported.
         * @param count 
        **/
        updateBackdrop(count: number): void;

        //#endregion Methods

        //#region Properties

        /**
         * This property is no longer supported. Starting with Windows Library for JavaScript 2.0, use the .win-listview.win-container.win-backdrop CSS selector.
        **/
        backdropColor: string;

        /**
         * This property is no longer supported. Starting with Windows Library for JavaScript 2.0, use the .win-listview.win-container.win-backdrop CSS selector.
        **/
        disableBackdrop: boolean;

        /**
         * Gets or sets the position of group headers.
        **/
        groupHeaderPosition: WinJS.UI.HeaderPosition;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use a CellSpanningLayout.
        **/
        groupInfo: Function;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use the orientation property instead.
        **/
        horizontal: boolean;

        /**
         * This property is no longer supported. Starting with the Windows Library for JavaScript 2.0, use a CellSpanningLayout.
        **/
        itemInfo: Function;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        numberOfItemsPerItemsBlock: any;

        /**
         * Gets or sets the orientation of the GridLayout.
        **/
        orientation: WinJS.UI.Orientation;

        //#endregion Properties

    }

    /**
     * Displays data items in a customizable list or grid.
    **/
    class ListView<T> {
        //#region Constructors

        /**
         * Creates a new ListView.
         * @constructor 
         * @param element The DOM element that hosts the ListView control.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the selectionchanged event, add a property named "onselectionchanged" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when the ListView is about to play an entrance or contentTransition animation.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.type, detail.setPromise.
        **/
        oncontentanimating(eventInfo: CustomEvent): void;

        /**
         * Raised when the user taps or clicks a group header.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.groupHeaderIndex, detail.groupHeaderPromise.
        **/
        ongroupheaderinvoked(eventInfo: CustomEvent): void;

        /**
         * Raised when the ListView is a drop target and the onitemdragenter has been disabled. This is raised every time the cursor is moved between a new pair of items. If you call preventDefault on this event, then the ListView does not move the items slightly above/below the cursor to provide visual feedback for a drop.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains additional information about the event.
        **/
        onitemdragbetween(eventInfo: CustomEvent): void;

        /**
         * Raised when the user is dragging an item from the ListView and the datasource changes while the user is dragging.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains additional information about the event.
        **/
        onitemdragchanged(eventInfo: CustomEvent): void;

        /**
         * Raised when an item is dropped onto the ListView as the result of a drag operation.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.dataTransfer, detail.index, detail.insertAfterIndex.
        **/
        onitemdragdrop(eventInfo: CustomEvent): void;

        /**
         * Raised when the user drops an item dragged from a ListView.
         * @param eventInfo An object that contains information about the event.
        **/
        onitemdragend(eventInfo: CustomEvent): void;

        /**
         * Raised when an dragged item enters the bounds of the ListView control.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.dataTransfer.
        **/
        onitemdragenter(eventInfo: CustomEvent): void;

        /**
         * Raised when a draggable item leaves the bounds of a ListView control.
         * @param eventInfo An object that contains information about the event.
        **/
        onitemdragleave(eventInfo: CustomEvent): void;

        /**
         * Raised when the user begins to drag an item from a ListView control.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.dataTransfer, detail.dragInfo.
        **/
        onitemdragstart(eventInfo: CustomEvent): void;

        /**
         * Occurs when the user taps or clicks an item.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.itemIndex.
        **/
        oniteminvoked(eventInfo: CustomEvent): void;

        /**
         * Raised when the focused item changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.oldFocus, detail.oldNewFocus.
        **/
        onkeyboardnavigating(eventInfo: CustomEvent): void;

        /**
         * Occurs when the ListView control's loadingState changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.scrolling.
        **/
        onloadingstatechanged(eventInfo: CustomEvent): void;

        /**
         * Occurs after the current selection changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object is null. To obtain the selected items, use the ListView.selection property.
        **/
        onselectionchanged(eventInfo: CustomEvent): void;

        /**
         * Occurs just before the current selection changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.newSelection, detail.preventTapBehavior.
        **/
        onselectionchanging(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. See the ListView object page for a list of events. Note that you drop the "on" when specifying the event name for the addEventListener method. For example, instead of specifying "onselectionchange", you specify "selectionchange".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this object. Call this method when the object is no longer needed. After calling this method, the object becomes unusable.
        **/
        dispose(): void;

        /**
         * Returns the DOM element that represents the item at the specified index.
         * @param itemIndex The index of the item.
         * @returns The DOM element that represents the item at the specified index.
        **/
        elementFromIndex(itemIndex: number): HTMLElement;

        /**
         * Makes the item at the specified index visible. If necessary, the ListView will scroll to the item.
         * @param itemIndex The index of the item to scroll into view.
        **/
        ensureVisible(itemIndex: number): void;

        /**
         * Forces the ListView to update its layout. Use this function when making the ListView visible again after its style.display property had been set to "none".
        **/
        forceLayout(): void;

        /**
         * Returns the index of the item that the specified DOM element displays.
         * @param element The DOM element that displays the item.
         * @returns The index of the item displayed by element.
        **/
        indexOfElement(element: HTMLElement): number;

        /**
         * Loads the next set of pages if the ListView control's loadingBehavior is set to "incremental" (otherwise, it does nothing). The number of pages to be loaded is determined by the pagesToLoad property.
        **/
        loadMorePages(): void;

        /**
         * Repositions all the visible items in the ListView to adjust for items whose sizes have changed. Most apps won’t ever need to call this method. For more info, see the Remarks section.
        **/
        recalculateItemPosition(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        /**
         * Triggers the ListView disposal service manually.
        **/
        static triggerDispose(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that indicates whether the next set of pages is automatically loaded when the user scrolls beyond the number of pages specified by the pagesToLoadThreshold property.
        **/
        automaticallyLoadPages: boolean;

        /**
         * Gets or sets an IListViewItem that indicates which item should have keyboard focus and the focus state of that item.
        **/
        currentItem: IListViewItem;

        /**
         * Gets the HTML element that hosts this ListView.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the data source that contains the groups for the items in the itemDataSource.
        **/
        groupDataSource: IListDataSource<T>;

        /**
         * Gets or sets how the ListView reacts when the user taps or clicks a group header.
        **/
        groupHeaderTapBehavior: GroupHeaderTapBehavior;

        /**
         * Gets or sets the Template or function that creates the DOM elements for each group header in the groupDataSource. Each group header can contain multiple elements, but it must have a single root element.
        **/
        groupHeaderTemplate: any;

        /**
         * Gets or sets the first visible item.
        **/
        indexOfFirstVisible: number;

        /**
         * Gets the index of the last visible item in the ListView.
        **/
        indexOfLastVisible: number;

        /**
         * Gets or sets the data source that provides the ListView with items.
        **/
        itemDataSource: IListDataSource<T>;

        /**
         * Go Gets or sets a value that specifies whether items can be dragged. When this is set to true the ListView provides built in behaviors related to item dragging.
        **/
        itemsDraggable: boolean;

        /**
         * Gets or sets whether the ListView control's items can be reordered within itself by dragging and dropping.
        **/
        itemsReorderable: boolean;

        /**
         * Gets or sets the WinJS.Binding.Template or templating function that creates the DOM elements for each item in the itemDataSource. Each item can contain multiple elements, but it must have a single root element.
        **/
        itemTemplate: any;

        /**
         * Gets or sets an object that controls the layout of the ListView.
        **/
        layout: ILayout2;

        /**
         * Gets or sets a value that specifies how the ListView fetches items and adds and removes them to the DOM. Don't change the value of this property after the ListView has begun loading data.
        **/
        loadingBehavior: string;

        /**
         * Gets a value that indicates whether the ListView is still loading or whether loading is complete.
        **/
        loadingState: string;

        /**
         * Gets or sets the maximum number of realized items.
        **/
        maxDeferredItemCleanup: number;

        /**
         * Gets or sets the number of pages to load when the loadingBehavior property is set to "incremental" and the user scrolls beyond the threshold specified by the pagesToLoadThreshold property.
        **/
        pagesToLoad: number;

        /**
         * Gets or sets the threshold (in pages) for initiating an incremental load. When the last visible item is within the specified number of pages from the end of the loaded portion of the list, and if automaticallyLoadPages is true and loadingBehavior is set to "incremental", the ListView initiates an incremental load.
        **/
        pagesToLoadThreshold: number;

        /**
         * Gets or sets the function that is called when the ListView discards or recycles the element representation of a group header.
        **/
        resetGroupHeader: (header: any, element: HTMLElement) => void;

        /**
         * Gets or sets the function that is called when an item is removed, an item is changed, or an item falls outside of the realized range of the ListView.
        **/
        resetItem: (item: T, element: HTMLElement) => void;

        /**
         * Gets or sets the distance, in pixels, of the start of the viewable area within the viewport.
        **/
        scrollPosition: number;

        /**
         * Gets an ISelection that contains the range of currently selected items.
        **/
        selection: ISelection<T>;

        /**
         * Gets or sets the selection mode of the ListView.
        **/
        selectionMode: SelectionMode;

        /**
         * Gets or sets how the ListView reacts to the swipe gesture. The swipe gesture can select the swiped items or can have no effect on the current selection.
        **/
        swipeBehavior: WinJS.UI.SwipeBehavior;

        /**
         * Gets or sets how the ListView reacts when the user taps or clicks an item.
        **/
        tapBehavior: TapBehavior;

        /**
         * Gets a ZoomableView that supports semantic zoom functionality. This API supports the SemanticZoom infrastructure and is not intended to be used directly from your code.
        **/
        zoomableView: IZoomableView<ListView<T>>;

        //#endregion Properties

    }

    /**
 * A tab control that displays multiple items.
**/
    class Pivot {
        //#region Constructors

        /**
         * Creates a new Pivot.
         * @constructor 
         * @param element The DOM element hosts the new Pivot.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the cancel event, add a property named "oncancel" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised when a PivotItem control's animation ends.
         * @param eventInfo An object that contains information about the event.
        **/
        onitemanimationend(eventInfo: Event): void;

        /**
         * Raised when a PivotItem control's animation starts.
         * @param eventInfo An object that contains information about the event.
        **/
        onitemanimationstart(eventInfo: Event): void;

        /**
         * Raised when the user navigates to a different PivotItem.
         * @param eventInfo An object that contains information about the event.
        **/
        onselectionchanged(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this Pivot. Call this method when the Pivot is no longer needed. After calling this method, the Pivot becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that hosts the Pivot control.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the Binding.List that contains the PivotItem objects that belong to this Pivot.
        **/
        items: Binding.List<PivotItem>;

        /**
         * Gets or sets a value that specifies whether the Pivot control is locked to the current item.
        **/
        locked: boolean;

        /**
         * Gets or sets the index of the PivotItem control in view.
        **/
        selectedIndex: number;

        /**
         * Gets or sets the PivotItem control in view within the Pivot control.
        **/
        selectedItem: PivotItem;

        /**
         * Gets or sets the title displayed above the PivotItem controls.
        **/
        title: string;

        //#endregion Properties
    }

    /**
     * An item within a Pivot control.
    **/
    class PivotItem {
        //#region Constructors

        /**
         * Creates a new PivotItem.
         * @constructor 
         * @param element The DOM element hosts the new PivotItem.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the cancel event, add a property named "oncancel" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Releases resources held by this PivotItem. Call this method when the PivotItem is no longer needed. After calling this method, the PivotItem becomes unusable.
        **/
        dispose(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that hosts the PivotItem control's content.
        **/
        contentElement: HTMLElement;

        /**
         * Gets the DOM element that hosts the PivotItem control.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the header for this PivotItem.
        **/
        header: string;

        //#endregion Properties
    }

    /**
     * Represents a menu flyout for displaying commands.
    **/
    class Menu {
        //#region Constructors

        /**
         * Creates a new Menu object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new Menu.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs immediately after the Menu is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onafterhide(eventInfo: Event): void;

        /**
         * Occurs after the Menu is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onaftershow(eventInfo: Event): void;

        /**
         * Occurs before the Menu is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforehide(eventInfo: Event): void;

        /**
         * Occurs before a hidden Menu is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeshow(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Releases resources held by this Menu. Call this method when the Menu is no longer needed. After calling this method, the Menu becomes unusable.
        **/
        dispose(): void;

        /**
         * Returns the MenuCommand object identified by id.
         * @param id The element identifier (ID) of the command to be returned.
         * @returns The command identified by id.
        **/
        getCommandById(id: string): MenuCommand;

        /**
         * Hides the Menu.
        **/
        hide(): void;

        /**
         * Hides the specified commands of the Menu.
         * @param commands The commands to hide. The array elements may be MenuCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to hide the commands immediately, without animating them; otherwise, false.
        **/
        hideCommands(commands: any[], immediate: boolean): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Shows the Menu, if hidden, regardless of other states.
         * @param anchor Required. The DOM element to anchor the Menu.
         * @param placement The placement of the Menu to the anchor: top, bottom, left, or right.
         * @param alignment For top or bottom placement, the alignment of the Menu to the anchor's edge: center, left, or right.
        **/
        show(anchor: HTMLElement, placement?: string, alignment?: string): void;

        /**
         * Shows the specified commands of the Menu.
         * @param commands The commands to show. The array elements may be Menu objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the commands immediately, without animating them; otherwise, false.
        **/
        showCommands(commands: any[], immediate: boolean): void;

        /**
         * Shows the specified commands of the Menu while hiding all other commands.
         * @param commands The commands to show. The array elements may be MenuCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the specified commands (and hide the others) immediately, without animating them; otherwise, false.
        **/
        showOnlyCommands(commands: any[], immediate: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the default alignment to be used for this Menu.
        **/
        alignment: string;

        /**
         * Gets or sets the default anchor to be used for this Menu.
        **/
        anchor: HTMLElement;

        /**
         * Sets the MenuCommand objects that appear in the menu.
        **/
        commands: MenuCommand[];

        /**
         * Gets the DOM element that hosts the Menu.
        **/
        element: HTMLElement;

        /**
         * Gets a value that indicates whether the Menu is hidden or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * Gets or sets the default placement to be used for this Menu.
        **/
        placement: string;

        //#endregion Properties

    }

    /**
     * Represents a command to be displayed in a Menu object.
    **/
    class MenuCommand {
        //#region Constructors

        /**
         * Creates a new MenuCommand object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new MenuCommand.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Disposes this control.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that indicates whether the MenuCommand is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the MenuCommand.
        **/
        element: HTMLElement;

        /**
         * Adds an extra CSS class during construction.
        **/
        extraClass: string;

        /**
         * Gets or sets the Flyout object displayed by this command. The specified flyout is shown when the MenuCommand's button is invoked.
        **/
        flyout: Flyout;

        /**
         * Gets a value that indicates whether the MenuCommand is hidden or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * Gets the element identifier (ID) of the command.
        **/
        id: string;

        /**
         * Gets or sets the label of the command.
        **/
        label: string;

        /**
         * Gets or sets the function to be invoked when the command is clicked.
        **/
        onclick: Function;

        /**
         * Gets or sets the selected state of a toggle button.
        **/
        selected: boolean;

        /**
         * Gets the type of the command.
        **/
        type: string;

        //#endregion Properties

    }

    /**
     * Displays navigation commands in a toolbar that the user can show or hide.
    **/
    class NavBar {
        //#region Constructors

        /**
         * Creates a new NavBar.
         * @constructor 
         * @param element The DOM element that will host the new NavBar.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs immediately after the NavBar is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onafterhide(eventInfo: Event): void;

        /**
         * Raised after the NavBar is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onaftershow(eventInfo: Event): void;

        /**
         * Raised just before the NavBar is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforehide(eventInfo: Event): void;

        /**
         * Occurs before a hidden NavBar is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeshow(eventInfo: Event): void;

        /**
         * Occurs after the NavBar has finished processing its child elements.
         * @param eventInfo An object that contains information about the event.
        **/
        onchildrenprocessed(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this NavBar. Call this method when the NavBar is no longer needed. After calling this method, the NavBar becomes unusable.
        **/
        dispose(): void;

        /**
         * Hides the NavBar.
        **/
        hide(): void;

        /**
         * Hides the specified commands of the NavBar.
         * @param commands The commands to hide. The array elements may be NavBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to hide the commands immediately, without animating them; otherwise, false.
        **/
        hideCommands(commands: any[], immediate: boolean): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        /**
         * Shows the NavBar if it is not disabled.
        **/
        show(): void;

        /**
         * Shows the specified commands of the NavBar.
         * @param commands The commands to show. The array elements may be NavBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the commands immediately, without animating them; otherwise, false.
        **/
        showCommands(commands: any[], immediate: boolean): void;

        /**
         * Shows the specified commands of the NavBar while hiding all other commands.
         * @param commands The commands to show. The array elements may be NavBarCommand objects, or the string identifiers (IDs) of commands.
         * @param immediate The parameter immediate is not supported and may be altered or unavailable in the future. true to show the specified commands (and hide the others) immediately, without animating them; otherwise, false.
        **/
        showOnlyCommands(commands: any[], immediate: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        commands: AppBarCommand;

        /**
         * Gets or sets a value that indicates whether the NavBar is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the HTML element that hosts this NavBar.
        **/
        element: HTMLElement;

        /**
         * Gets a value that indicates whether the NavBar is hidden or in the process of becoming hidden.
        **/
        hidden: boolean;

        /**
         * This API supports the WinJS infrastructure and is not intended to be used directly from your code.
        **/
        layout: string;

        /**
         * Gets or sets a value that specifies whether the NavBar appears at the top or bottom of the main view.
        **/
        placement: string;

        /**
         * Gets or sets a value that indicates whether the NavBar is sticky (won't light dismiss). If not sticky, the NavBar dismisses normally when the user touches outside of the NavBar.
        **/
        sticky: boolean;

        //#endregion Properties

    }

    /**
     * Represents a navigation command in a NavBarContainer.
    **/
    class NavBarCommand {
        //#region Constructors

        /**
         * Creates a new NavBarCommand.
         * @constructor 
         * @param element The DOM element hosts the new NavBarCommand.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this NavBarCommand. Call this method when the NavBarCommand is no longer needed. After calling this method, the NavBarCommand becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the HTML element that hosts this NavBarCommand.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the command's icon.
        **/
        icon: string;

        /**
         * Gets or sets the label of the command.
        **/
        label: string;

        /**
         * Get or sets the location to navigate to when this command is invoked.
        **/
        location: any;

        /**
         * Gets or sets a value that specifies whether to show the split tab stop.
        **/
        splitButton: boolean;

        /**
         * Gets a value that indicates whether the splitButton is open.
        **/
        splitOpened: boolean;

        /**
         * Gets or sets a user-defined object that represents the state associated with the command's location.
        **/
        state: any;

        /**
         * Gets or sets the tooltip of the command.
        **/
        tooltip: any;

        //#endregion Properties

    }

    /**
     * Contains a group of NavBarCommand objects in a NavBar.
    **/
    class NavBarContainer {
        //#region Constructors

        /**
         * Creates a new NavBarContainer.
         * @constructor 
         * @param element The DOM element hosts the new NavBarContainer.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when a child NavBarCommand object's click event fires.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.index, detail.navbarcommand, detail.data.
        **/
        oninvoked(eventInfo: CustomEvent): void;

        /**
         * Occurs when the split button of a child NavBarCommand is opened or closed. A split button is toggled when the user navigates to another page or opens another split button.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.opened, detail.index, detail.navbarcommand, detail.data.
        **/
        onsplittoggle(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this NavBarCommand. Call this method when the NavBarCommand is no longer needed. After calling this method, the NavBarCommand becomes unusable.
        **/
        dispose(): void;

        /**
         * Forces the NavBarContainer to update its layout. Use this function when making the NavBarContainer visible again after you set its style.display property to "none".
        **/
        forceLayout(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the index of the current item.
        **/
        currentIndex: number;

        /**
         * Gets or sets a WinJS.Binding.List that generates NavBarCommand objects.
        **/
        data: WinJS.Binding.List<NavBarCommand>;

        /**
         * Gets the HTML element that hosts this NavBarContainer.
        **/
        element: HTMLElement;

        /**
         * Gets or sets a value that specifies whether NavBarCommand objects in this container use a fixed or dynamic width.
        **/
        fixedSize: boolean;

        /**
         * Gets or sets a value that specifies whether the NavBarContainer has a horizontal or vertical layout.
        **/
        layout: Orientation;

        /**
         * Gets or sets a value that specifies how many rows of navigation commands to display on a page.
        **/
        maxRows: number;

        /**
         * Gets or sets the WinJS.Binding.Template or templating function that creates the DOM elements for each item in the data source. Each item can contain multiple elements, but it must have a single root element.
        **/
        template: WinJS.Binding.Template;

        //#endregion Properties

    }

    /**
     * Lets the user rate something by clicking an icon that represents a rating. The Rating control can display three types of ratings: an average rating, a tentative rating, and the user's rating.
    **/
    class Rating {
        //#region Constructors

        /**
         * Creates a new Rating.
         * @constructor 
         * @param element The DOM element hosts the new Rating.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the cancel event, add a property named "oncancel" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised when the user finishes interacting with the rating control without committing a tentative rating.
         * @param eventInfo An object that contains information about the event.
        **/
        oncancel(eventInfo: Event): void;

        /**
         * Raised when the user commits a change to the userRating.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.tentativeRating.
        **/
        onchange(eventInfo: CustomEvent): void;

        /**
         * Raised when the user is choosing a new tentative Rating.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.tentativeRating.
        **/
        onpreviewchange(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Releases resources held by this Rating. Call this method when the Rating is no longer needed. After calling this method, the Rating becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the average rating.
        **/
        averageRating: number;

        /**
         * Gets or sets whether the control is disabled. When the control is disabled, the user can't specify a new user rating or modify an existing rating.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the Rating.
        **/
        element: HTMLElement;

        /**
         * Gets or sets whether control lets the user clear the rating.
        **/
        enableClear: boolean;

        /**
         * Gets or sets the maximum possible rating value.
        **/
        maxRating: number;

        /**
         * Gets or sets a set of descriptions to show for rating values in the tooltip.
        **/
        tooltipStrings: string[];

        /**
         * Gets or sets the user's rating.
        **/
        userRating: number;

        //#endregion Properties

    }

    /**
     * Generates HTML from a set of data. Use this control to generate lists of items.
    **/
    class Repeater {
        //#region Constructors

        /**
         * Creates a new Repeater control.
         * @constructor 
         * @param elemnt The DOM element that will host the new control. The Repeater will create an element if this value is null.
         * @param options An object that contains one or more property/value pairs to apply to the new Repeater. Each property of the options object corresponds to one of the object's properties or events. Event names must begin with "on".
        **/
        constructor(element?:HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised after an item in the Repeater control's data source changes and after the corresponding DOM element has been updated.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.index, detail.key, detail.newElement, detail.newItem, detail.newValue, detail.oldElement, detail.oldItem, detail.oldValue, detail.setPromise.
        **/
        onitemchanged(eventInfo: CustomEvent): void;

        /**
         * Raised after an item in the Repeater control's data source changes but before the corresponding DOM element has been updated.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.index, detail.key, detail.newElement, detail.newItem, detail.newValue, detail.oldElement, detail.oldItem, detail.oldValue, detail.setPromise.
        **/
        onitemchanging(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been added to the Repeater control's data source and after the corresponding DOM element has been added.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.key, detail.value.
        **/
        oniteminserted(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been added to the Repeater control's data source but before the corresponding DOM element has been added.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.key, detail.value.
        **/
        oniteminserting(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been moved from one index to another in the Repeater control's data source and after the corresponding DOM element has been moved.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.key, detail.oldIndex, detail.newIndex.
        **/
        onitemmoved(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been moved from one index to another in the Repeater control's data source but before the corresponding DOM element has been moved.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.key, detail.oldIndex, detail.newIndex.
        **/
        onitemmoving(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been moved from one index to another in the Repeater control's data source and after the corresponding DOM element has been moved.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.item, detail.setPromise.
        **/
        onitemremoved(eventInfo: CustomEvent): void;

        /**
         * Raised after an item has been removed from the Repeater control's data source but before the corresponding DOM element has been removed.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElement, detail.index, detail.item, detail.setPromise.
        **/
        onitemremoving(eventInfo: CustomEvent): void;

        /**
         * Raised when the Repeater has finished loading a new set of data. This event is only fired on construction. This event is only raised when the Repeater is constructed or its data source or template changes.
         * @param eventInfo An object that contains information about the event.
        **/
        onitemsloaded(eventInfo: CustomEvent): void;

        /**
         * Raised after the Repeater control's underlying data has been updated and after the updated HTML has been reloaded.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElements.
        **/
        onitemsreloaded(eventInfo: CustomEvent): void;

        /**
         * Raised after the Repeater control's underlying data has been updated but before the updated HTML has been reloaded.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.affectedElements, detail.setPromise.
        **/
        onitemsreloading(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this Repeater. Call this method when the Repeater is no longer needed. After calling this method, the Repeater becomes unusable.
        **/
        dispose(): void;

        /**
         * Returns the HTML element for the item at the specified index.
         * @param index The index of the item.
         * @returns The DOM element for the specified item.
        **/
        elementFromIndex(index: number): HTMLElement;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the List that provides the Repeater with items to display.
        **/
        data: WinJS.Binding.List<any>;

        /**
         * Gets the DOM element that hosts the Repeater.
        **/
        element: HTMLElement;

        /**
         * Gets the number of items in the Repeater control.
        **/
        length: number;

        /**
         * Gets or sets a WinJS.Binding.Template or custom rendering function that defines the HTML of each item within the Repeater.
        **/
        template: WinJS.Binding.Template;

        //#endregion Properties

    }

    /**
     * Enables the user to perform search queries and select suggestions.
    **/
    class SearchBox {
        //#region Constructors

        /**
         * Creates a new SearchBox.
         * @constructor 
         * @param element The DOM element hosts the new SearchBox.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised when the user or the app changes the queryText.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.language, detail.queryText, detail.linguisticDetails.
        **/
        onquerychanged(eventInfo: CustomEvent): void;

        /**
         * Raised awhen the user clicks the search glyph or presses Enter.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.language, detail.queryText, detail.linguisticDetails, detail.keyModifiers.
        **/
        onquerysubmitted(eventInfo: CustomEvent): void;

        /**
         * Raised when the app automatically redirects focus to the search box. This event can only be raised when the focusOnKeyboardInput property is set to true.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.propertyName.
        **/
        onreceivingfocusonkeyboardinput(eventInfo: CustomEvent): void;

        /**
         * Raised when the user selects a suggested option for the search.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.tag, detail.keyModifiers, detail.storageFile.
        **/
        onresultsuggestionschosen(eventInfo: CustomEvent): void;

        /**
         * Raised when the system requests search suggestions from this app.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: detail.language, detail.linguisticDetails, detail.queryText, detail.searchSuggestionCollection.
        **/
        onsuggestionsrequested(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. Note that you drop the "on" when specifying the event name. For example, instead of specifying "onclick", you specify "click".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this SearchBox. Call this method when the SearchBox is no longer needed. After calling this method, the SearchBox becomes unusable.
        **/
        dispose(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        /**
         * Specifies whether suggestions based on local files are automatically displayed in the search pane, and defines the criteria that Windows uses to locate and filter these suggestions.
         * @param settings The new settings for local content suggestions.
        **/
        setLocalContentSuggestionSettings(settings: any): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets whether the first suggestion is chosen when the user presses Enter.
        **/
        chooseSuggestionOnEnter: boolean;

        /**
         * Gets or sets a value that specifies whether the SearchBox is disabled. If the control is disabled, it won't receive focus.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the SearchBox.
        **/
        element: HTMLElement;

        /**
         * Gets or sets a value that specifies whether the search box automatically receives focus when the user types into the app window.
        **/
        focusOnKeyboardInput: boolean;

        /**
         * Gets or sets the placeholder text for the SearchBox. This text is displayed if there is no other text in the input box.
        **/
        placeholderText: string;

        /**
         * Gets or sets the query text for the SearchBox.
        **/
        queryText: string;

        /**
         * Gets or sets the search history context. This context is used a secondary key (the app ID is the primary key) for storing search history.
        **/
        searchHistoryContext: string;

        /**
         * Gets or sets a value that specifies whether search history is disabled.
        **/
        searchHistoryDisabled: boolean;

        //#endregion Properties

        static createResultSuggestionImage(url: string): any;

    }

    /**
     * Enables the user to zoom between two different views supplied by two child controls. One child control supplies the zoomed-out view and the other provides the zoomed-in view.
    **/
    class SemanticZoom {
        //#region Constructors

        /**
         * Creates a new SemanticZoom.
         * @constructor 
         * @param element The DOM element that hosts the SemanticZoom.
         * @param options An object that contains one or more property/value pairs to apply to the new control. This object can contain these properties: initiallyZoomedOut Boolean, zoomFactor 0.2–0.85.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when the control zooms in or out.
         * @param eventInfo An object that contains information about the event. The detail property of this object is true when the control is zoomed out. Otherwise, it's false.
        **/
        onzoomchanged(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this SemanticZoom. Call this method when the SemanticZoom is no longer needed. After calling this method, the SemanticZoom becomes unusable.
        **/
        dispose(): void;

        /**
         * Forces the SemanticZoom to update its layout. Use this function when making the SemanticZoom visible again after its style.display property had been set to "none".
        **/
        forceLayout(): void;

        /**
         * Unregisters an event handler for the specified event.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that hosts the SemanticZoom control.
        **/
        element: HTMLElement;

        /**
         * Gets or a sets a value that specifies whether to display the SemanticZoom zoom out button.
        **/
        enableButton: boolean;

        /**
         * Determines whether any controls contained in a SemanticZoom should be processed separately. This property is always true, meaning that the SemanticZoom takes care of processing its own controls.
        **/
        isDeclarativeControlContainer: boolean;

        /**
         * Gets or sets a value that indicates whether SemanticZoom is locked and zooming between views is disabled.
        **/
        locked: boolean;

        /**
         * Gets or sets a value that indicates whether the control is zoomed out.
        **/
        zoomedOut: boolean;

        /**
         * Gets or sets a value that specifies how much the scaling the cross-fade animation performs when the SemanticZoom transitions between views.
        **/
        zoomFactor: number;

        //#endregion Properties

    }

    /**
     * Provides users with fast, in-context access to settings that affect the current Windows Store app.
    **/
    class SettingsFlyout {
        //#region Constructors

        /**
         * Creates a new SettingsFlyout object.
         * @constructor 
         * @param element The DOM element that will host the control.
         * @param options The set of properties and values to apply to the new SettingsFlyout.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised immediately after the SettingsFlyout is completely hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onafterhide(eventInfo: Event): void;

        /**
         * Raised immediately after a SettingsFlyout is fully shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onaftershow(eventInfo: Event): void;

        /**
         * Raised just before hiding a SettingsFlyout.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforehide(eventInfo: Event): void;

        /**
         * Raised just before showing a SettingsFlyout.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeshow(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param type The event type to register. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this SettingsFlyout. Call this method when the SettingsFlyout is no longer needed. After calling this method, the SettingsFlyout becomes unusable.
        **/
        dispose(): void;

        /**
         * Hides the SettingsFlyout, if visible, regardless of other states.
        **/
        hide(): void;

        /**
         * Loads a fragment of the SettingsFlyout. Your app calls this when the user invokes a settings command and the WinJS.Application.onsettings event occurs.
         * @param e An object that contains information about the event, received from the WinJS.Application.onsettings event. The detail property of this object contains the applicationcommands sub-property that you set to an array of settings commands. You then populate the SettingsFlyout with these commands by a call to populateSettings.
        **/
        static populateSettings(e: CustomEvent): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param type The event type to unregister. It must be beforeshow, beforehide, aftershow, or afterhide.
         * @param listener The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Shows the SettingsPane UI, if hidden.
        **/
        show(): void;

        /**
         * Shows the SettingsPane UI, if hidden, regardless of other state.
        **/
        static show(): void;

        /**
         * Show the Settings flyout using the Settings element identifier (ID) and the path of the page that contains the Settings element.
         * @param id The ID of the Settings element.
         * @param path The path of the page that contains the Settings element.
        **/
        static showSettings(id: string, path: any): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element the SettingsFlyout is attached to.
        **/
        element: HTMLElement;

        /**
         * Gets whether the SettingsFlyout is hidden.
        **/
        hidden: boolean;

        /**
         * Gets or sets the settings command Id for the SettingsFlyout control.
        **/
        settingsCommandId: string;

        /**
         * This property may be unavailable or altered in future versions. Use the CSS width property of the element that has the win-settingsflyout class instead.
        **/
        width: string;

        //#endregion Properties

    }

    /**
     * A type of IListDataSource that provides read-access to an object that implements the IStorageQueryResultBase interface. A StorageDataSource enables you to query and bind to items in the data source.
    **/
    class StorageDataSource<T> {
        //#region Constructors

        /**
         * Creates a new StorageDataSource object.
         * @constructor
         * @param query The IStorageQueryResultBase that the StorageDataSource obtains its items from. Instead of IStorageQueryResultBase, you can also pass one of these string values: Music, Pictures, Videos, Documents.
         * @param options The set of properties and values to apply to the new StorageDataSource. Properties on this object may include: mode , requestedThumbnailSize , thumbnailOptions , synchronous .
        **/
        constructor(query: any, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Draws the thumbnail for the specified item to the specified img element.
         * @param item The item to retrieve the thumbnail for.
         * @param image The img element that will display the thumbnail.
         * @returns A Promise that completes when the full-quality thumbnail is visible.
        **/
        loadThumbnail(item: IItem<T>, image: HTMLImageElement): Promise<void>;

        //#endregion Methods

    }

    /**
     * Prevents a DOM sub-tree from receiving tab navigations and focus.
    **/
    class TabContainer {
        //#region Constructors

        /**
         * Creates a new TabContainer.
         * @constructor 
         * @param element The DOM element that hosts the TabContainer control.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties.
        **/
        constructor(element: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Releases resources held by this TabContainer. Call this method when the TabContainer is no longer needed. After calling this method, the TabContainer becomes unusable.
        **/
        dispose(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the child DOM element that receives tab focus.
        **/
        childFocus: HTMLElement;

        /**
         * Gets or sets the tab index of this container.
        **/
        tabIndex: number;

        //#endregion Properties

    }

    /**
     * Allows users to select time values.
    **/
    class TimePicker {
        //#region Constructors

        /**
         * Initializes a new instance of a TimePicker control.
         * @constructor 
         * @param element The DOM element associated with the TimePicker control.
         * @param options The set of options to be applied initially to the TimePicker control. The options are the following: clock.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when any of the controls are changed by the user.
         * @param eventInfo An object that contains information about the event.
        **/
        onchange(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Adds an event listener.
         * @param type The type (name) of the event.
         * @param listener The function that handles the event.
         * @param capture If true, specifies that capture should be initiated, otherwise false.
        **/
        addEventListener(type: string, listener: Function, capture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this TimePicker. Call this method when the TimePicker is no longer needed. After calling this method, the TimePicker becomes unusable.
        **/
        dispose(): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        raiseEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes a listener for the specified event.
         * @param type The name of the event for which to remove a listener.
         * @param listener The listener.
         * @param useCapture Optional. The same value that was passed to addEventListener for this listener. It may be omitted if it was omitted when calling addEventListener.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: any): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the type of clock to display (12HourClock or 24HourClock). It defaults to the user setting.
        **/
        clock: string;

        /**
         * Gets or sets the current time of the TimePicker. Note that the date value is always July 15, 2011.
        **/
        current: Date;

        /**
         * Specifies whether the TimePicker is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element for the TimePicker.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the display pattern for the hour. The default hour pattern is hour.integer(2). You can change the hour pattern by changing the number of integers displayed.
        **/
        hourPattern: string;

        /**
         * Gets or sets the minute increment. For example, 15 specifies that the TimePicker minute control should display only the choices 00, 15, 30, 45.
        **/
        minuteIncrement: number;

        /**
         * Gets or sets the display pattern for the minute. The default minute pattern is minute.integer(2). You can change the minute pattern by changing the number of integers displayed.
        **/
        minutePattern: string;

        /**
         * Gets or sets the display pattern for the period. The default period pattern is period.abbreviated(2). You can change the period pattern by changing the number of integers displayed.
        **/
        periodPattern: string;

        //#endregion Properties

    }

    /**
     * A control that lets the user switch an option between two states: on (checked is set to true) and off (checked is set to false).
    **/
    class ToggleSwitch {
        //#region Constructors

        /**
         * Creates a new ToggleSwitch.
         * @constructor 
         * @param element The DOM that hosts the control.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the change event, add a property named "onchange" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when the ToggleSwitch control is flipped to on (checked == true) or off (checked == false).
         * @param eventInfo An object that contains information about the event.
        **/
        onchange(eventInfo: Event): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Releases resources held by this ToggleSwitch. Call this method when the ToggleSwitch is no longer needed. After calling this method, the ToggleSwitch becomes unusable.
        **/
        dispose(): void;

        /**
         * Handles the specified event.
         * @param event The event.
        **/
        handleEvent(event: any): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        raiseEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets a value that specifies whether the control is on or off.
        **/
        checked: boolean;

        /**
         * Gets or sets a value that specifies whether the control is disabled.
        **/
        disabled: boolean;

        /**
         * Gets the DOM element that hosts the ToggleSwitch.
        **/
        element: HTMLElement;

        /**
         * Gets or sets the text that displays when the ToggleSwitch is off (checked is set to false).
        **/
        labelOff: string;

        /**
         * Gets or sets the text that displays when the ToggleSwitch is on (checked is set to true).
        **/
        labelOn: string;

        /**
         * Gets or sets the main text for the ToggleSwitch control. This text is always displayed, regardless of whether the control is switched on or off.
        **/
        title: string;

        //#endregion Properties

    }

    /**
     * Displays a tooltip that can contain images and formatting.
    **/
    class Tooltip {
        //#region Constructors

        /**
         * Creates a new Tooltip.
         * @constructor
         * @param element The DOM element associated that hosts the Tooltip.
         * @param options An object that contains one or more property/value pairs to apply to the new control. Each property of the options object corresponds to one of the control's properties or events. Event names must begin with "on". For example, to provide a handler for the opened event, add a property named "onopened" to the options object and set its value to the event handler.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Raised just before the Tooltip is hidden.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeclose(eventInfo: CustomEvent): void;

        /**
         * Raised just before the Tooltip appears.
         * @param eventInfo An object that contains information about the event.
        **/
        onbeforeopen(eventInfo: CustomEvent): void;

        /**
         * Raised when the Tooltip is no longer displayed.
         * @param eventInfo An object that contains information about the event.
        **/
        onclosed(eventInfo: CustomEvent): void;

        /**
         * Raised when the Tooltip is shown.
         * @param eventInfo An object that contains information about the event.
        **/
        onopened(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Adds an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Hides the Tooltip.
        **/
        close(): void;

        /**
         * Releases resources held by this Tooltip. Call this method when the Tooltip is no longer needed. After calling this method, the Tooltip becomes unusable.
        **/
        dispose(): void;

        /**
         * Shows the Tooltip.
         * @param type A value that specifies when to show the Tooltip. The default value is "mousedown".
        **/
        open(type?: string): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets or sets the HTML element that is the content of the Tooltip.
        **/
        contentElement: HTMLElement;

        /**
         * Gets the DOM element that hosts the Tooltip control.
        **/
        element: HTMLElement;

        /**
         * Gets or appends additional CSS classes to apply to the element that hosts the Tooltip.
        **/
        extraClass: string;

        /**
         * Gets or sets a value that specifies whether the Tooltip is an infotip, a tooltip that contains a lot of info and should be displayed for longer than a typical Tooltip.
        **/
        infotip: boolean;

        /**
         * Gets or sets the HTML content of the Tooltip.
        **/
        innerHTML: string;

        /**
         * Gets or sets the position for the Tooltip relative to its target element: top, bottom, left or right.
        **/
        placement: string;

        //#endregion Properties

    }

    /**
     * Scales a single child element to fill the available space without resizing it. This control reacts to changes in the size of the container as well as changes in size of the child element. For example, a media query may result in a change in aspect ratio.
    **/
    class ViewBox {
        //#region Constructors

        /**
         * Initializes a new instance of the ViewBox control.
         * @constructor
         * @param element The DOM element that functions as the scaling box. This element fills 100% of the width and height allotted to it.
         * @param options The set of options to be applied initially to the ViewBox control. There are currently no options on this control, and any options included in this parameter are ignored.
        **/
        constructor(element?: HTMLElement, options?: any);

        //#endregion Constructors

        //#region Methods

        /**
         * Adds an event handler for the specified event.
         * @param eventName The name of the event to handle.
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Releases resources held by this ViewBox. Call this method when the ViewBox is no longer needed. After calling this method, the ViewBox becomes unusable.
        **/
        dispose(): void;

        /**
         * Forces the ViewBox to update its layout. Use this function when making the ViewBox visible again after its style.display property had been set to "none".
        **/
        forceLayout(): void;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the DOM element that functions as the scaling box.
        **/
        element: HTMLElement;

        //#endregion Properties

    }

    /**
     * A special data source for VirtualizedDataSource.computeDataSourceGroups
     **/
    interface IListGroupDataSource<T> extends IListDataSource<T> {
        groups: IListDataSource<T>;
    }

    /**
     * Serves as the base class for a custom IListDataSource.
    **/
    class VirtualizedDataSource<T> {
        //#region Constructors

        /**
         * Initializes the VirtualizedDataSource base class of a custom data source.
         * @constructor 
         * @param listDataAdapter The object that supplies data to the VirtualizedDataSource.
         * @param options An object that can contain properties that specify additional options for the VirtualizedDataSource. It supports these properties: cacheSize.
        **/
        constructor(listDataAdapter: IListDataAdapter<T>, options?: any);

        //#endregion Constructors

        //#region Events

        /**
         * Occurs when the status of the VirtualizedDataSource changes.
         * @param eventInfo An object that contains information about the event. The detail property of this object contains the following sub-properties: status.
        **/
        statuschanged(eventInfo: CustomEvent): void;

        //#endregion Events

        //#region Methods

        /**
         * Registers an event handler for the specified event.
         * @param eventName The name of the event to handle. See the VirtualizedDataSource object page for a list of events. Note that you drop the "on" when specifying the event name for the addEventListener method. For example, instead of specifying "onstatuschanged", you specify "statuschanged".
         * @param eventHandler The event handler function to associate with the event.
         * @param useCapture Set to true to register the event handler for the capturing phase; otherwise, set to false to register the event handler for the bubbling phase.
        **/
        addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event, otherwise false.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes an event handler that the addEventListener method registered.
         * @param eventName The name of the event that the event handler is registered for. See the VirtualizedDataSource object page for a list of events.
         * @param eventCallback The event handler function to remove.
         * @param useCapture Set to true to remove the capturing phase event handler; set to false to remove the bubbling phase event handler.
        **/
        removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;

        //#endregion Methods

    }

    //#endregion Objects

    //#region Functions

    /**
     * Returns a new IListDataSource that adds group information to the items of another IListDataSource.
     * @param listDataSource The data source for the individual items to group.
     * @param groupKey A callback function that accepts a single argument: an item in the IListDataSource. The function is called for each item in the list and must return the group key for that item as a string.
     * @param groupData A callback function that accepts a single argument: an item in the IListDataSource. The function is called on one IListDataSource item for each group and must return an object that represents the header of that group.
     * @param options An object that can contain properties that specify additional options: groupCountEstimate, batchSize.
     * @returns An IListGroupDataSource that contains the items in the original data source and provides additional group information in the form of a "groups" property. The "groups" property returns another IListDataSource that enumerates the different groups in the list.
    **/
    function computeDataSourceGroups<T>(listDataSource: IListDataSource<T>, groupKey: Function, groupData: Function, options?: any): IListGroupDataSource<T>;

    /**
     * Used to disables all Animations Library and ListView animations. Calling this function does not guarantee that the animations will be disabled, as the determination is made based on several factors.
    **/
    function disableAnimations(): void;

    /**
     * Used to enable all Animations Library and ListView animations. Calling this function does not guarantee that the animations will be enabled, as the determination is made based on several factors.
    **/
    function enableAnimations(): void;

    /**
     * Marks a event handler function as being compatible with declarative processing.
     * @param handler The handler to be marked as compatible with declarative processing.
     * @returns The handler, marked as compatible with declarative processing.
    **/
    function eventHandler(handler: any): any;

    /**
     * Asynchronously executes a collection of CSS animations on a collection of elements. This is the underlying animation mechanism used by the Animations Library. Apps are encouraged to use the Animations Library to conform with the standard look and feel of the rest of the system, rather than calling this function directly.
     * @param element Element or elements to be animated. This parameter can be expressed in several ways: As the special value "undefined", which means that the animation has no target, As a single object, As a JavaScript array (possibly empty), in which each element of the array can be a single element or a JavaScript array of elements., As a NodeList (for example, the result of querySelectorAll), As an HTMLCollection.
     * @param animation The animation description or an array of animation descriptions to apply to element. An animation description is a JavaScript object with specific properties, listed below. There are two types of animation descriptions: one for keyframe-based animations and one for explicit animations. These types are distinguished by whether the keyframe property has a defined value. The following properties are required for both types of animation descriptions: property (string), delay (number), duration (number), timing (string). If an animation has a keyframe property with a defined, non-null value, then the animation is a keyframe-based animation. A keyframe-based animation description requires the following property in addition to those mentioned above: keyframe (string). If an animation does not have a keyframe property, or if the value of the property is null or undefined, then the animation is an explicit animation. An explicit animation description requires the following properties in addition to the common properties mentioned above: from, to. The values given in the from and to properties must be valid for the CSS property specified by the property property. For example, if the CSS property is "opacity", then the from and to properties must be numbers between 0 and 1 (inclusive).
     * @returns Returns a Promise object that completes when the CSS animation is complete.
    **/
    function executeAnimation(element: HTMLElement, animation: any): Promise<any>;

    /**
     * Asynchronously executes a collection of CSS transitions on a collection of elements. This is the underlying animation mechanism used by the Animations Library. Apps are encouraged to use the Animations Library to conform with the standard look and feel of the rest of the system, rather than calling this function directly.
     * @param element Element or elements on which to perform the transition. This parameter can be expressed in several ways: As the special value "undefined", which means that the transition has no target, As a single object, As a JavaScript array (possibly empty), in which each element of the array can be a single element or a JavaScript array of elements., As a NodeList (for example, the result of querySelectorAll), As an HTMLCollection.
     * @param transition The transition description or an array of transition descriptions to apply to element. A transition description is a JavaScript object with these properties: property (string), delay (number), duration (number), timing (string), from (optional), to. The values given in the from and to properties must be valid for the CSS property specified by the property property. For example, if the CSS property is "opacity", then the from and to properties must be numbers between 0 and 1 (inclusive).
     * @returns Returns a Promise that completes when the transition is finished.
    **/
    function executeTransition(element: HTMLElement, transition: any): Promise<any>;

    /**
     * Retrieves the items in the specified index range.
     * @param dataSource The data source that contains the items to retrieve.
     * @param ranges An array of ISelectionRange objects that have firstIndex and lastIndex values.
     * @returns A Promise that contains an array of the requested IItem objects.
    **/
    function getItemsFromRanges<U>(dataSource: IListDataSource<U>, ranges: ISelectionRange[]): Promise<IItem<U>>;

    /**
     * Determines whether the Animations Library and ListView animations will be performed if called.
     * @returns Returns true if animations will be performed; otherwise false.
    **/
    function isAnimationEnabled(): boolean;

    /**
     * Applies declarative control binding to all elements, starting at the specified root element.
     * @param rootElement The element at which to start applying the binding. If this parameter is not specified, the binding is applied to the entire document.
     * @param skipRoot If true, the elements to be bound skip the specified root element and include only the children.
     * @returns A promise that is fulfilled when binding has been applied to all the controls.
    **/
    function processAll(rootElement?: Element, skipRoot?: boolean): Promise<any>;

    /**
     * Applies declarative control binding to the specified element.
     * @param element The element to bind.
     * @returns A promise that is fulfilled after the control is activated. The value of the promise is the control that is attached to element.
    **/
    function process(element: Element): Promise<any>;

    /**
     * Walks the DOM tree from the given element to the root of the document. Whenever a selector scope is encountered, this method performs a lookup within that scope for the specified selector string. The first matching element is returned.
     * @param selector The selector string.
     * @param element The element to begin walking to the root of the document from.
     * @returns The target element, if found.
    **/
    function scopedSelect(selector: string, element: HTMLElement): HTMLElement;

    /**
     * Given a DOM element and a control, attaches the control to the element.
     * @param element Element to associate with the control.
     * @param control The control to attach to the element.
    **/
    function setControl(element: HTMLElement, control: any): void;

    /**
     * Adds the set of declaratively specified options (properties and events) to the specified control. If name of the options property begins with "on", the property value is a function and the control supports addEventListener. setControl calls addEventListener on the control.
     * @param control The control on which the properties and events are to be applied.
     * @param options The set of options that are specified declaratively.
    **/
    function setOptions(control: any, options?: any): void;

    //#endregion Functions

}
/**
 * Provides functions to load HTML content programmatically.
**/
declare module WinJS.UI.Fragments {
    //#region Functions

    /**
     * Starts loading the fragment at the specified location. The returned promise completes when the fragment is ready to be copied.
     * @param href The URI that contains the fragment to be copied.
     * @returns A promise that is fulfilled when the fragment has been prepared for copying.
    **/
    function cache(href: string): Promise<any>;

    /**
     * Removes any cached information about the specified fragment. This method does not unload any scripts or styles that are referenced by the fragment.
     * @param href The URI that contains the fragment to be cleared. If no URI is provided, the entire contents of the cache are cleared.
    **/
    function clearCache(href: string): void;
    function clearCache(href: HTMLElement): void;

    /**
     * Loads the contents of the specified URI into the specified element without copying it.
     * @param href The URI that contains the fragment to copy.
     * @param element Optional. The element to which the fragment is appended.
     * @returns A promise that is fulfilled when the fragment has been loaded. If a target element is not specified, the copied fragment is the completed value. The element is not added to the cache. See also rendercopy, where the element is added to the cache.
    **/
    function render(href: string, element?: HTMLElement): Promise<HTMLElement>;

    /**
     * Loads and copies the contents of the specified URI into the specified element.
     * @param href The URI that contains the fragment to copy.
     * @param target The element to which the fragment is appended.
     * @returns A promise that is fulfilled when the fragment has been loaded. If a target element is not specified, the copied fragment is the completed value. The fragment is added to the cache. See also render, where the element is not added to the cache.
    **/
    function renderCopy(href: string, target?: HTMLElement): Promise<HTMLElement>;
    function renderCopy(href: HTMLElement, target?: HTMLElement): Promise<HTMLElement>;

    //#endregion Functions

}
/**
 * Provides methods for defining and displaying PageControl objects.
**/
declare module WinJS.UI.Pages {
    //#region Interfaces

    /**
     * Provides members for a PageControl. You implement this interface when defining a new PageControl.
    **/
    interface IPageControlMembers {
        //#region Methods

        /**
         * Called if any error occurs during the processing of the page.
         * @param err The error that occurred.
         * @returns Nothing if the error was handled, or an error promise if the error was not handled.
        **/
        error? (err: any): any;

        /**
         * Initializes the control before the content of the control is set. Use the processed method for any initialization that should be done after the content of the control has been set.
         * @param element The DOM element that will contain all the content for the page.
         * @param options The options passed to the constructor of the page.
         * @returns A promise that is fulfilled when initialization is complete, if asynchronous processing is necessary. If not, returns nothing.
        **/
        init? (element: HTMLElement, options: any): any;

        /**
         * Creates DOM objects from the content in the specified URI. This method is called after the PageControl is defined and before the init method is called.
         * @param uri The URI from which to create DOM objects.
         * @returns A promise whose fulfilled value is the set of unparented DOM objects.
        **/
        load? (uri: string): any;

        /**
         * Initializes the control after the content of the control is set.
         * @param element The DOM element that will contain all the content for the page.
         * @param options The options that are to be passed to the constructor of the page.
         * @returns A promise that is fulfilled when initialization is complete, if asynchronous processing is necessary. If not, returns nothing.
        **/
        processed? (element: HTMLElement, options: any): any;

        /**
         * Called after all initialization and rendering is complete. At this time, the element is ready for use.
         * @param element The DOM element that contains all the content for the page.
         * @param options An object that contains one or more property/value pairs to apply to the PageControl. How these property/value pairs are used (or not used) depends on the implementation of that particular PageControl.
         * @returns A promise that is fulfilled when the element is ready for use, if asynchronous processing is necessary. If not, returns nothing.
        **/
        ready? (element: HTMLElement, options: any): any;

        /**
         * Takes the elements returned by the load method and attaches them to the specified element.
         * @param element The DOM element to which the loadResult elements are appended.
         * @param options An object that contains one or more property/value pairs to apply to the PageControl. How these property/value pairs are used (or not used) depends on the implementation of that particular PageControl.
         * @param loadResult A Promise that contains the elements returned from the load method.
        **/
        render? (element: HTMLElement, options: any, loadResult: Promise<any>): void;

        //#endregion Methods

    }

    //#endregion Interfaces

    //#region Objects

    //#endregion Objects

    //#region Functions

    /**
     * Creates a new PageControl from the specified URI that contains the specified members. Multiple calls to this method for the same URI are allowed, and all members will be merged.
     * @param uri The URI for the content that defines the page.
     * @param members An object that defines the members that the control will have.
     * @returns A constructor function that creates the PageControl.
    **/
    function define(uri: string, members: IPageControlMembers): (element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>) => void;

    /**
     * Gets an already-defined page control for the specified URI, or creates a new one.
     * @param uri The URI for the content that defines the page.
     * @returns A constructor function that creates the page.
    **/
    function get(uri: string): (element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>) => void;

    /**
     * Creates a PageControl from the specified URI and inserts it inside the specified element.
     * @param uri The URI for the content that defines the page.
     * @param element The DOM element to which the PageControl is appended.
     * @param options An object that contains one or more property/value pairs to apply to the new PageControl. How these property/value pairs are used (or not used) depends on the implementation of that particular PageControl.
     * @param parentedPromise A Promise that is fulfilled when the new PageControl is done rendering and its contents becomes the child of element.
     * @returns A promise that is fulfilled when rendering is complete, if asynchronous processing is necessary. If not, returns nothing.
    **/
    function render(uri: string, element?: HTMLElement, options?: any, parentedPromise?: Promise<any>): Promise<any>;

    //#endregion Functions

}
/**
 * Provides methods for detecting when the user tabs to or from DOM elements.
**/
declare module WinJS.UI.TrackTabBehavior {
    //#region Functions

    /**
     * Sets the tab order for the specified element within its container.
     * @param element The element to update.
     * @param tabIndex The index value of the element within its container.
    **/
    function attach(element: HTMLElement, tabIndex: number): void;

    /**
     * Removes the tab order information from the specified element.
     * @param element The element to remove tab information from.
    **/
    function detatch(element: HTMLElement): void;

    //#endregion Functions

}
/**
 * Provides helper functions, for example, functions to add and remove CSS classes.
**/
declare module WinJS.Utilities {
    //#region Enumerations

    /**
     * Defines a set of keyboard values.
    **/
    enum Key {
        /**
         * The BACKSPACE key.
        **/
        backspace,
        /**
         * The TAB key.
        **/
        tab,
        /**
         * The ENTER key.
        **/
        enter,
        /**
         * The SHIFT key.
        **/
        shift,
        /**
         * The CTRL key.
        **/
        ctrl,
        /**
         * The ALT key.
        **/
        alt,
        /**
         * The PAUSE key.
        **/
        pause,
        /**
         * The CAPS LOCK key.
        **/
        capsLock,
        /**
         * The ESCAPE key.
        **/
        escape,
        /**
         * The SPACE key.
        **/
        space,
        /**
         * The PAGE UP key.
        **/
        pageUp,
        /**
         * The PAGE DOWN key.
        **/
        pageDown,
        /**
         * The END key.
        **/
        end,
        /**
         * The HOME key.
        **/
        home,
        /**
         * The LEFT ARROW key.
        **/
        leftArrow,
        /**
         * The UP ARROW key.
        **/
        upArrow,
        /**
         * The RIGHT ARROW key.
        **/
        rightArrow,
        /**
         * The DOWN ARROW key.
        **/
        downArrow,
        /**
         * The INSERT key.
        **/
        insert,
        /**
         * The DELETE key.
        **/
        deleteKey,
        /**
         * The 0 key.
        **/
        num0,
        /**
         * The 1 key.
        **/
        num1,
        /**
         * The 2 key.
        **/
        num2,
        /**
         * The 3 key.
        **/
        num3,
        /**
         * The 4 key.
        **/
        num4,
        /**
         * The 5 key.
        **/
        num5,
        /**
         * The 6 key.
        **/
        num6,
        /**
         * The 7 key.
        **/
        num7,
        /**
         * The 8 key.
        **/
        num8,
        /**
         * The 9 key.
        **/
        num9,
        /**
         * The a key.
        **/
        a,
        /**
         * The b key.
        **/
        b,
        /**
         * The c key.
        **/
        c,
        /**
         * The d key.
        **/
        d,
        /**
         * The e key.
        **/
        e,
        /**
         * The f key.
        **/
        f,
        /**
         * The g key.
        **/
        g,
        /**
         * The h key.
        **/
        h,
        /**
         * The i key.
        **/
        i,
        /**
         * The j key.
        **/
        j,
        /**
         * The k key.
        **/
        k,
        /**
         * The l key.
        **/
        l,
        /**
         * The m key.
        **/
        m,
        /**
         * The n key.
        **/
        n,
        /**
         * The o key.
        **/
        o,
        /**
         * The p key.
        **/
        p,
        /**
         * The q key.
        **/
        q,
        /**
         * The r key.
        **/
        r,
        /**
         * The s key.
        **/
        s,
        /**
         * The t key.
        **/
        t,
        /**
         * The u key.
        **/
        u,
        /**
         * The v key.
        **/
        v,
        /**
         * The w key.
        **/
        w,
        /**
         * The x key.
        **/
        x,
        /**
         * The y key.
        **/
        y,
        /**
         * The z key.
        **/
        z,
        /**
         * The left Windows key.
        **/
        leftWindows,
        /**
         * The right Windows key.
        **/
        rightWindows,
        /**
         * The menu key.
        **/
        menu,
        /**
         * The 0 key on the numerical keypad.
        **/
        numPad0,
        /**
         * The 1 key on the numerical keypad.
        **/
        numPad1,
        /**
         * The 2 key on the numerical keypad.
        **/
        numPad2,
        /**
         * The 3 key on the numerical keypad.
        **/
        numPad3,
        /**
         * The 4 key on the numerical keypad.
        **/
        numPad4,
        /**
         * The 5 key on the numerical keypad.
        **/
        numPad5,
        /**
         * The 6 key on the numerical keypad.
        **/
        numPad6,
        /**
         * The 7 key on the numerical keypad.
        **/
        numPad7,
        /**
         * The 8 key on the numerical keypad.
        **/
        numPad8,
        /**
         * The 9 key on the numerical keypad.
        **/
        numPad9,
        /**
         * The multiplication key (*).
        **/
        multiply,
        /**
         * The addition key (+).
        **/
        add,
        /**
         * The subtraction key (-).
        **/
        subtract,
        /**
         * The decimal point key (.)
        **/
        decimalPoint,
        /**
         * The division key (/).
        **/
        divide,
        /**
         * The F1 key.
        **/
        F1,
        /**
         * The F2 key.
        **/
        F2,
        /**
         * The F3 key.
        **/
        F3,
        /**
         * The F4 key.
        **/
        F4,
        /**
         * The F5 key.
        **/
        F5,
        /**
         * The F6 key.
        **/
        F6,
        /**
         * The F7 key.
        **/
        F7,
        /**
         * The F8 key.
        **/
        F8,
        /**
         * The F9 key.
        **/
        F9,
        /**
         * The F10 key.
        **/
        F10,
        /**
         * The F11 key.
        **/
        F11,
        /**
         * The F12 key.
        **/
        F12,
        /**
         * The NUMBER LOCK key.
        **/
        numLock,
        /**
         * The SCROLL LOCK key.
        **/
        scrollLock,
        /**
         * The browser BACK key.
        **/
        browserBack,
        /**
         * The browser FORWARD key.
        **/
        browserForward,
        /**
         * The semicolon key (;).
        **/
        semicolon,
        /**
         * The equals key (=).
        **/
        equal,
        /**
         * The comma key (,).
        **/
        comma,
        /**
         * The dash key (-).
        **/
        dash,
        /**
         * The period key (.).
        **/
        period,
        /**
         * The forward slash key (/).
        **/
        forwardSlash,
        /**
         * The grave accent key (`).
        **/
        graveAccent,
        /**
         * The open bracket key ([).
        **/
        openBracket,
        /**
         * The backslash key (\).
        **/
        backSlash,
        /**
         * The close bracket key (]).
        **/
        closeBracket,
        /**
         * The single quote key (').
        **/
        singleQuote
    }

    //#endregion Enumerations

    //#region Objects

    /**
     * A mixin that contains event-related functions.
    **/
    var eventMixin: {
        //#region Methods

        /**
         * Adds an event listener to the control.
         * @param type The type (name) of the event.
         * @param listener The listener to invoke when the event gets raised.
         * @param useCapture If true, initiates capture, otherwise false.
        **/
        addEventListener(type: string, listener: Function, useCapture?: boolean): void;

        /**
         * Raises an event of the specified type and with the specified additional properties.
         * @param type The type (name) of the event.
         * @param eventProperties The set of additional properties to be attached to the event object when the event is raised.
         * @returns true if preventDefault was called on the event.
        **/
        dispatchEvent(type: string, eventProperties: any): boolean;

        /**
         * Removes an event listener from the control.
         * @param type The type (name) of the event.
         * @param listener The listener to remove.
         * @param useCapture true if capture is to be initiated, otherwise false.
        **/
        removeEventListener(type: string, listener: Function, useCapture?: boolean): void;

        //#endregion Methods

    };

    /**
     * Represents the result of a query selector, and provides various operations that perform actions over the elements of the collection.
    **/
    interface QueryCollection<T> extends Array<T> {
        //#region Methods

        /**
         * Adds the specified class to all the elements in the collection.
         * @param name The name of the class to add.
         * @returns This QueryCollection object.
        **/
        addClass(name: string): QueryCollection<T>;

        /**
         * Creates a QueryCollection that contains the children of the specified parent element.
         * @param element The parent element.
         * @returns The QueryCollection that contains the children of the element.
        **/
        children(element: HTMLElement): QueryCollection<T>;

        /**
         * Clears the specified style property for all the elements in the collection.
         * @param name The name of the style property to be cleared.
         * @returns This QueryCollection object.
        **/
        clearStyle(name: string): QueryCollection<T>;

        /**
         * Creates controls that are attached to the elements in this QueryCollection, if the ctor parameter is a function, or configures the controls that are attached to the elements in this QueryCollection, if the ctor parameter is an object.
         * @param ctor If this parameter is a function, it is a constructor function that is used to create controls to attach to the elements. If it is an object, it is the set of options passed to the controls.
         * @param options The options passed to the newly-created controls.
         * @returns This QueryCollection object.
        **/
        control(ctor: any, options?: any): QueryCollection<T>;

        /**
         * Performs an action on each item in the QueryCollection.
         * @param callbackFn The action to perform on each item.
         * @param thisArg The argument to bind to callbackFn.
         * @returns The QueryCollection.
        **/
        forEach(callbackFn: (value: T, index: number, array: T[]) => void, thisArg?: any): QueryCollection<T>;

        /**
         * Gets an item from the QueryCollection.
         * @param index The index of the item to return.
         * @returns A single item from the collection.
        **/
        get(index: number): T;

        /**
         * Gets an attribute value from the first element in the collection.
         * @param name The name of the attribute.
         * @returns The value of the attribute.
        **/
        getAttribute(name: string): any;

        /**
         * Determines whether the specified class exists on the first element of the collection.
         * @param name The name of the class.
         * @returns true if the element has the specified class; otherwise, false.
        **/
        hasClass(name: string): boolean;

        /**
         * Looks up an element by ID and wraps the result in a QueryCollection.
         * @param id The ID of the element.
         * @returns A QueryCollection that contains the element, if it is found.
        **/
        id(id: string): QueryCollection<T>;

        /**
         * Adds a set of items to this QueryCollection.
         * @param items The items to add to the QueryCollection. This may be an array-like object, a document fragment, or a single item.
        **/
        include(items: T): void;

        /**
         * Adds a set of items to this QueryCollection.
         * @param items The items to add to the QueryCollection. This may be an array-like object, a document fragment, or a single item.
        **/
        include(items: T[]): void;

        /**
         * Adds a set of items to this QueryCollection.
         * @param items The items to add to the QueryCollection. This may be an array-like object, a document fragment, or a single item.
        **/
        include(items: HTMLCollection): void;

        /**
         * Registers the listener for the specified event on all the elements in the collection.
         * @param eventType The name of the event.
         * @param listener The event handler function to be called when the event occurs.
         * @param capture true if capture == true is to be passed to addEventListener; otherwise, false.
        **/
        listen(eventType: string, listener: Function, capture?: boolean): void;

        /**
         * Executes a query selector on all the elements in the collection and aggregates the result into a QueryCollection.
         * @param query The query selector string.
         * @returns A QueryCollection object containing the aggregate results of executing the query on all the elements in the collection.
        **/
        query(query: any): QueryCollection<T>;

        /**
         * Removes the specified class from all the elements in the collection.
         * @param name The name of the class to be removed.
         * @returns his QueryCollection object.
        **/
        removeClass(name: string): QueryCollection<T>;

        /**
         * Unregisters the listener for the specified event on all the elements in the collection.
         * @param eventType The name of the event.
         * @param listener The event handler function.
         * @param capture true if capture == true; otherwise, false.
         * @returns This QueryCollection object.
        **/
        removeEventListener(eventType: string, listener: Function, capture?: boolean): QueryCollection<T>;

        /**
         * Sets an attribute value on all the items in the collection.
         * @param name The name of the attribute to be set.
         * @param value The value of the attribute to be set.
         * @returns This QueryCollection object.
        **/
        setAttribute(name: string, value: any): QueryCollection<T>;

        /**
         * Sets the specified style property for all the elements in the collection.
         * @param name The name of the style property.
         * @param value The value for the property.
         * @returns This QueryCollection object.
        **/
        setStyle(name: string, value: any): QueryCollection<T>;

        /**
         * Renders a template that is bound to the given data and parented to the elements included in the QueryCollection. If the QueryCollection contains multiple elements, the template is rendered multiple times, once at each element in the QueryCollection per item of data passed.
         * @param templateElement The DOM element to which the template control is attached.
         * @param data The data to render. If the data is an array (or any other object that has a forEach method) then the template is rendered multiple times, once for each item in the collection.
         * @param renderDonePromiseCallback If supplied, this function is called each time the template gets rendered, and is passed a promise that is fulfilled when the template rendering is complete.
         * @returns The QueryCollection.
        **/
        template(templateElement: HTMLElement, data: any, renderDonePromiseCallback?: Function): QueryCollection<T>;

        /**
         * Toggles (adds or removes) the specified class on all the elements in the collection. If the class is present, it is removed; if it is absent, it is added.
         * @param name The name of the class to be toggled.
         * @returns This QueryCollection object.
        **/
        toggleClass(name: string): QueryCollection<T>;

        //#endregion Methods

    }

    /**
     * Constructor support for QueryCollection interface
    **/
    export var QueryCollection: {
        new <T>(items: T[]): QueryCollection<T>;
        prototype: QueryCollection<any>;
    }

    //#endregion Objects

    //#region Functions

    /**
     * Adds the specified class to the specified element.
     * @param e The element to which to add the class.
     * @param name The name of the class to add.
     * @returns The element.
    **/
    function addClass<T extends HTMLElement>(e: T, name: string): T;

    /**
     * Gets a collection of elements that are the direct children of the specified element.
     * @param element The parent element.
     * @returns The collection of children of the element.
    **/
    function children(element: HTMLElement): QueryCollection<HTMLElement>;

    /**
     * Converts a CSS positioning string for the specified element to pixels.
     * @param element The element.
     * @param value The CSS positioning string.
     * @returns The number of pixels.
    **/
    function convertToPixels(element: HTMLElement, value: string): number;

    /**
     * Creates an object that has one event for each name passed to the function.
     * @param events A variable list of property names.
     * @returns The object with the specified properties. The names of the properties are prefixed with 'on'.
    **/
    function createEventProperties(...events: string[]): any;

    /**
     * Gets the data value associated with the specified element.
     * @param element The element.
     * @returns The value associated with the element.
    **/
    function data(element: HTMLElement): any;

    /**
     * Disposes all first-generation disposable elements that are descendents of the specified element. The specified element itself is not disposed.
     * @param element The root element whose sub-tree is to be disposed.
    **/
    function disposeSubTree(element: HTMLElement): void;

    /**
     * Removes all the child nodes from the specified element.
     * @param element The element.
     * @returns The element.
    **/
    function empty<T extends HTMLElement>(element: T): T;

    /**
     * Determines whether the specified event occurred within the specified element.
     * @param element The element.
     * @param event The event.
     * @returns true if the event occurred within the element; otherwise, false.
    **/
    function eventWithinElement(element: HTMLElement, event: Event): boolean;

    /**
     * Adds tags and type to a logging message.
     * @param message The message to be formatted.
     * @param tag The tag(s) to be applied to the message. Multiple tags should be separated by spaces.
     * @param type The type of the message.
     * @returns The formatted message.
    **/
    function formatLog(message: string, tag: string, type: string): string;

    /**
     * Gets the height of the content of the specified element. The content height does not include borders or padding.
     * @param element The element.
     * @returns The content height of the element.
    **/
    function getContentHeight(element: HTMLElement): number;

    /**
     * Gets the width of the content of the specified element. The content width does not include borders or padding.
     * @param element The element.
     * @returns The content width of the element.
    **/
    function getContentWidth(element: HTMLElement): number;

    /**
     * Gets the leaf-level type or namespace specified by the name parameter.
     * @param name The name of the member.
     * @param root The root to start in. Defaults to the global object.
     * @returns The leaf-level type or namespace in the specified parent namespace.
    **/
    function getMember(name: string, root?: any): any;

    /**
     * Gets the position of the specified element.
     * @param element The element.
     * @returns An object that contains the left, top, width and height properties of the element.
    **/
    function getPosition(element: HTMLElement): IPosition;

    /**
     * Gets the left coordinate of the specified element relative to the specified parent.
     * @param element The element.
     * @param parent The parent element.
     * @returns The relative left coordinate.
    **/
    function getRelativeLeft(element?: HTMLElement, parent?: HTMLElement): number;

    /**
     * Gets the top coordinate of the element relative to the specified parent.
     * @param element The element.
     * @param parent The parent element.
     * @returns The relative top coordinate.
    **/
    function getRelativeTop(element?: HTMLElement, parent?: HTMLElement): number;

    /**
     * Gets the scrollLeft and scrollTop of the specified element, adjusting the scrollLeft to change from browser specific coordinates to logical coordinates when in RTL.
     * @param element The element.
     * @returns An object with two properties: scrollLeft and scrollTop
    **/
    function getScrollPosition(element: HTMLElement): { scrollLeft: number; scrollTop: number};

    /**
     * Gets the tab index of the specified element.
     * @param element The element
     * @returns The tabIndex of the element. Returns -1 if the element cannot be tabbed to.
    **/
    function getTabIndex(element: HTMLElement): number;

    /**
     * Gets the height of the element, including its margins.
     * @param element The element.
     * @returns The height of the element including margins.
    **/
    function getTotalHeight(element: HTMLElement): number;

    /**
     * Gets the width of the element, including margins.
     * @param element The element.
     * @returns The width of the element including margins.
    **/
    function getTotalWidth(element: HTMLElement): number;

    /**
     * Determines whether the specified element has the specified class.
     * @param e The element.
     * @param name The name of the class.
     * @returns true if the element has the class, otherwise false.
    **/
    function hasClass(e: HTMLElement, name: string): boolean;

    /**
     * Returns a collection with zero or one elements matching the specified id.
     * @param id The ID of the element (or elements).
     * @returns A collection of elements whose id matches the id parameter.
    **/
    function id(id: string): QueryCollection<HTMLElement>;

    /**
     * Calls insertAdjacentHTML on the specified element.
     * @param element The element on which insertAdjacentHTML is to be called.
     * @param position The position relative to the element at which to insert the HTML. Possible values are: beforebegin, afterbegin, beforeend, afterend.
     * @param text The text to insert.
    **/
    function insertAdjacentHTML(element: HTMLElement, position: string, text: string): void;

    /**
     * Calls insertAdjacentHTML on the specified element in the context of MSApp.execUnsafeLocalFunction.
     * @param element The element on which insertAdjacentHTML is to be called.
     * @param position The position relative to the element at which to insert the HTML. Possible values are: beforebegin, afterbegin, beforeend, afterend.
     * @param text Value to be provided to insertAdjacentHTML.
    **/
    function insertAdjacentHTMLUnsafe(element: HTMLElement, position: string, text: string): void;

    /**
     * Attaches the default dispose API wrapping the dispose implementation to the specified element.
     * @param element The element to mark as disposable.
     * @param disposeImpl The function containing the element-specific dispose logic, called by the dispose function that markDisposable attaches.
    **/
    function markDisposable(element: HTMLElement, disposeImpl?: Function): void;

    /**
     * Marks a function as being compatible with declarative processing. Declarative processing is performed by WinJS.UI.processAll or WinJS.Binding.processAll.
     * @param func The function to be marked as compatible with declarative processing.
     * @returns The input function, marked as compatible with declarative processing.
    **/
    function markSupportedForProcessing<U extends Function>(func: U): U;

    /**
     * Returns a QueryCollection with zero or one elements matching the specified selector query.
     * @param query The CSS selector to use. See Selectors for more information.
     * @param element Optional. The root element at which to start the query. If this parameter is omitted, the scope of the query is the entire document.
     * @returns A QueryCollection with zero or one elements matching the specified selector query.
    **/
    function query(query: any, element?: HTMLElement): QueryCollection<HTMLElement>;

    /**
     * Ensures that the specified function executes only after the DOMContentLoaded event has fired for the current page. The DOMContentLoaded event occurs after the page has been parsed but before all the resources are loaded.
     * @param callback A function that executes after the DOMContentLoaded event has occurred.
     * @param async If true, the callback should be executed asynchronously.
     * @returns A promise that completes after the DOMContentLoaded event has occurred.
    **/
    function ready(callback?: Function, async?: boolean): Promise<any>;

    /**
     * Removes the specified class from the specified element.
     * @param e The element from which to remove the class.
     * @param name The name of the class to remove.
     * @returns The element.
    **/
    function removeClass<T extends HTMLElement>(e: T, name: string): T;

    /**
     * Asserts that the value is compatible with declarative processing. Declarative processing is performed by WinJS.UI.processAll or WinJS.Binding.processAll. If the value is not compatible, and strictProcessing is on, an exception is thrown. All functions that have been declared using WinJS.Class.define, WinJS.Class.derive, WinJS.UI.Pages.define, or WinJS.Binding.converter are automatically marked as supported for declarative processing. Any other function that you use from a declarative context (that is, a context in which an HTML element has a data-win-control or data-win-options attribute) must be marked manually by calling this function. When you mark a function as supported for declarative processing, you are guaranteeing that the code in the function is secure from injection of third-party content.
     * @param value The value to be tested for compatibility with declarative processing. If the value is a function it must be marked with a property supportedForProcessing with a value of true when strictProcessing is on. For more information, see WinJS.Utilities.markSupportedForProcessing.
     * @returns The input value.
    **/
    function requireSupportedForProcessing<T>(value: T): T;

    /**
     * Sets the innerHTML property of the specified element to the specified text.
     * @param element The element on which the innerHTML property is to be set.
     * @param text The value to be set to the innerHTML property.
    **/
    function setInnerHTML(element: HTMLElement, text: string): void;

    /**
     * Sets the innerHTML property of the specified element to the specified text.
     * @param element The element on which the innerHTML property is to be set.
     * @param text The value to be set to the innerHTML property.
    **/
    function setInnerHTMLUnsafe(element: HTMLElement, text: string): void;

    /**
     * Sets the outerHTML property of the specified element to the specified text.
     * @param element The element on which the outerHTML property is to be set.
     * @param text The value to be set to the outerHTML property.
    **/
    function setOuterHTML(element: HTMLElement, text: string): void;

    /**
     * Sets the outerHTML property of the specified element to the specified text in the context of MSApp.execUnsafeLocalFunction.
     * @param element The element on which the outerHTML property is to be set.
     * @param text The value to be set to the outerHTML property.
    **/
    function setOuterHTMLUnsafe(element: HTMLElement, text: string): void;

    /**
     * Sets the scrollLeft and scrollTop of the specified element, changing the scrollLeft from logical coordinates to browser-specific coordinates when in RTL.
     * @param element The element.
     * @param position An object describing the position to set.
    **/
    function setScrollPosition(element: HTMLElement, position: { scrollLeft: number; scrollTop: number}): void;

    /**
     * Configures a logger that writes messages containing the specified tags to the JavaScript console.
     * @param options The tags for messages to log. Multiple tags should be separated by spaces. May contain type, tags, excludeTags and action properties.
    **/
    function startLog(options?: ILogOptions): void;
    function startLog(tags?: string): void;

    /**
     * Removes the WinJS logger that had previously been set up.
    **/
    function stopLog(): void;

    /**
     * Toggles (adds or removes) the specified class on the specified element. If the class is present, it is removed; if it is absent, it is added.
     * @param e The element on which to toggle the class.
     * @param name The name of the class to toggle.
     * @returns The element.
    **/
    function toggleClass<T extends HTMLElement>(e: T, name: string): T;

    //#endregion Functions

    //#region Properties

    /**
     * Gets whether the current script context has access to WinRT APIs.
    **/
    var hasWinRT: boolean;

    /**
     * Indicates whether the app is running on Windows Phone.
    **/
    var isPhone: boolean;

    //#endregion Properties

    //#region Interfaces

    interface ILogOptions {
        type?: string;
        action?: (message: string, tags: string, type: string) => void;
        excludeTags?: string;
        tags?: string;
    }

    interface IPosition {
        left: number;
        top: number;
        width: number;
        height: number;
    }

    //#endregion Interfaces

}
/**
 * Provides functions and objects for scheduling and managing asynchronous tasks.
**/
declare module WinJS.Utilities.Scheduler {
    //#region Enumerations

    /**
     * Represents a priority for a job managed by the Scheduler.
    **/
    enum Priority {
        /**
         * A priority higher than the normal priority level.
        **/
        aboveNormal,
        /**
         * A priority less than the normal priority level.
        **/
        belowNormal,
        /**
         * A high priority.
        **/
        high,
        /**
         * The idle priority for work items.
        **/
        idle,
        /**
         * The highest priority.
        **/
        max,
        /**
         * The lowest priority.
        **/
        min,
        /**
         * The normal priority for work items.
        **/
        normal
    }

    //#endregion Enumerations

    //#region Interfaces

    /**
     * Represents a work item that's executed by the Scheduler.
    **/
    interface IJob {
        //#region Methods

        /**
         * Cancels the job.
        **/
        cancel(): void;

        /**
         * Pauses the job.
        **/
        pause(): void;

        /**
         * Resumes the job.
        **/
        resume(): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets a value that indicates whether the job has successfully completed.
        **/
        completed: boolean;

        /**
         * Gets the unique numeric identifier assigned to the job.
        **/
        id: number;

        /**
         * Gets or sets the name of the job.
        **/
        name: string;

        /**
         * Gets or sets the owner of the job.
        **/
        owner: IOwnerToken;

        /**
         * Gets or sets the priority of the job.
        **/
        priority: Priority;

        //#endregion Properties

    }

    /**
     * Provides a control mechanism that allows a job to cooperatively yield. This object is passed to your work function when you schedule it.
    **/
    interface IJobInfo {
        //#region Methods

        /**
         * Uses a Promise to determine how long the scheduler should wait before rescheduling the job after it yields.
         * @param promise Once the work item yields, the scheduler will wait for this Promise to complete before rescheduling the job.
        **/
        setPromise(promise: Promise<any>): void;

        /**
         * Specifies the next unit of work to run once this job yields.
         * @param work The next unit of work to run once this job yields.
        **/
        setWork(work: Function): void;

        //#endregion Methods

        //#region Properties

        /**
         * Gets the work item associated with this IJobInfo.
        **/
        job: IJob;

        /**
         * Gets a value that specifies whether the job should yield.
        **/
        shouldYield: boolean;

        //#endregion Properties

    }

    /**
     * Represents an object that owns jobs. You can use this object to cancel a set of jobs.
    **/
    interface IOwnerToken {
        //#region Methods

        /**
         * Synchronously cancels the job that this token owns, including paused and blocked jobs.
        **/
        cancelAll(): void;

        //#endregion Methods

    }

    //#endregion Interfaces

    //#region Properties

    /**
     * Gets the current priority at which the caller is executing.
     **/
    var currentPriority: Priority;

    //#endregion Properties

    //#region Functions

    /**
     * Creates and returns a new IOwnerToken which can be set to the owner property of one or more jobs.
     * @returns A new IOwnerToken which can be set to the owner property of one or more jobs.
    **/
    function createOwnerToken(): IOwnerToken;

    /**
     * Runs the specified callback in a high priority context.
     * @param callback The callback to run in a high priority callback.
     * @returns The return value of the callback.
    **/
    function execHigh<U>(callback: () => U): U;

    /**
     * Returns a string representation of the scheduler's state for diagnostic purposes. The jobs and drain requests are displayed in the order in which they are currently expected to be processed. The current job and drain request are marked by an asterisk.
     * @returns A string representation of the scheduler's state for diagnostic purposes. The jobs and drain requests are displayed in the order in which they are currently expected to be processed. The current job and drain request are marked by an asterisk.
    **/
    function retrieveState(): string;

    /**
     * Runs jobs in the scheduler without timeslicing until all jobs at the specified priority and higher have executed.
     * @param priority The priority to which the scheduler should drain. The default is -15.
     * @param name An optional description of the drain request for diagnostics.
     * @returns A Promise which completes when the drain has finished. Canceling this Promise cancels the drain request. This Promise will never enter an error state.
    **/
    function requestDrain(priority?: Priority, name?: string): Promise<any>;

    /**
     * Schedules the specified function to execute asynchronously.
     * @param work A function that represents the work item to be scheduled. When called the work item will receive as its first argument an object which allows the work item to ask the scheduler if it should yield cooperatively and if so allows the work item to either provide a function to be run as a continuation or a WinJS.Promise which will when complete provide a function to run as a continuation. Provide these fields for the object: shouldYield, setWork(work), setPromise(promise), job.
     * @param priority The priority of the work item. If you don't specify a priority, it defaults to WinJS.Utilities.Scheduler.Priority.normal.
     * @param thisArg A "this" instance to be bound to the work item. The default value is null.
     * @param name A description of the work item for diagnostics. The default value is an empty string.
     * @returns The job instance that represents this work item.
    **/
    function schedule(work: (jobInfo: IJobInfo) => any, priority?: Priority, thisArg?: any, name?: string): IJob;

    /**
     * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.aboveNormal priority.
     * @param promiseValue The value returned by the completed Promise.
     * @param jobName A string that describes the job for diagnostic purposes.
     * @returns A Promise that completes within a job of aboveNormal priority.
    **/
    function schedulePromiseAboveNormal<U>(promiseValue?: U, jobName?: string): Promise<U>;

    /**
     * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.belowNormal priority.
     * @param promiseValue The value returned by the completed Promise.
     * @param jobName A string that describes the job for diagnostic purposes.
     * @returns A Promise that completes within a job of belowNormal priority.
    **/
    function schedulePromiseBelowNormal<U>(promiseValue?: U, jobName?: string): Promise<U>;

    /**
     * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.high priority.
     * @param promiseValue The value returned by the completed Promise.
     * @param jobName A string that describes the job for diagnostic purposes.
     * @returns A Promise that completes within a job of high priority.
    **/
    function schedulePromiseHigh<U>(promiseValue?: U, jobName?: string): Promise<U>;

    /**
     * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.Idle priority.
     * @param promiseValue The value returned by the completed Promise.
     * @param jobName A string that describes the job for diagnostic purposes.
     * @returns A Promise that completes within a job of idle priority.
    **/
    function schedulePromiseIdle<U>(promiseValue?: U, jobName?: string): Promise<U>;

    /**
     * Schedules a job to complete the returned Promise at WinJS.Utilities.Scheduler.Priority.normal priority.
     * @param promiseValue The value returned by the completed Promise.
     * @param jobName A string that describes the job for diagnostic purposes.
     * @returns A Promise that completes within a job of normal priority.
    **/
    function schedulePromiseNormal<U>(promiseValue?: U, jobName?: string): Promise<U>;

    //#endregion Functions

}
