// Type definitions for DevExtreme 14.2+
// Project: http://js.devexpress.com/
// Definitions by: DevExpress Inc. <http://devexpress.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

declare module DevExpress {
    /** A mixin that provides a capability to fire and subscribe to events. */
    export interface EventsMixin<T> {
        /** Subscribes to a specified event. */
        on(eventName: string, eventHandler: Function): T;
        /** Subscribes to the specified events. */
        on(events: { [eventName: string]: Function; }): T;
        /** Detaches all event handlers from the specified event. */
        off(eventName: string): Object;
        /** Detaches a particular event handler from the specified event. */
        off(eventName: string, eventHandler: Function): T;
    }
    /** An object that serves as a namespace for the methods required to perform validation. */
    export module validationEngine {
        export interface IValidator {
            validate(): ValidatorValidationResult;
        }
        export interface ValidatorValidationResult {
            isValid: boolean;
            name?: string;
            value: any;
            brokenRule: any;
            validationRules: any[];
        }
        export interface ValidationGroupValidationResult {
            isValid: boolean;
            brokenRules: any[];
            validators: IValidator[];
        }
        export interface GroupConfig extends EventsMixin<GroupConfig> {
            group: any;
            validators: IValidator[];
            validate(): ValidationGroupValidationResult;
        }
        /** Provides access to the object that represents the specified validation group. */
        export function getGroupConfig(group: any): GroupConfig
        /** Provides access to the object that represents the default validation group. */
        export function getGroupConfig(): GroupConfig
        /** Validates rules of the validators that belong to the specified validation group. */
        export function validateGroup(group: any): ValidationGroupValidationResult;
        /** Validates rules of the validators that belong to the default validation group. */
        export function validateGroup(): ValidationGroupValidationResult;
        /** Validates the rules that are defined within the dxValidator objects that are registered for the specified ViewModel. */
        export function validateModel(model: Object): ValidationGroupValidationResult;
        /** Registers all the dxValidator objects by which the fields of the specified ViewModel are extended. */
        export function registerModelForValidation(model: Object): void;
    }
    export var hardwareBackButton: JQueryCallback;
    /** Processes the hardware back button click. */
    export function processHardwareBackButton(): void;
    /** Specifies whether or not the entire application/site supports right-to-left representation. */
    export var rtlEnabled: boolean;
    /** Registers a new component in the DevExpress.ui namespace, and a jQuery plugin and Knockout binding for the required component. */
    export function registerComponent(name: string, componentClass: Object): void;
    /** Registers a new component in the specified namespace as a jQuery plugin, Angular directive and Knockout binding. */
    export function registerComponent(name: string, namespace: Object, componentClass: Object): void;
    /** Requests that the browser call a specified function to update animation before the next repaint. */
    export function requestAnimationFrame(callback: Function): number;
    /** Cancels an animation frame request scheduled with the requestAnimationFrame method. */
    export function cancelAnimationFrame(requestID: number): void;
    /** Custom Knockout binding that links an HTML element with a specific action. */
    export class Action { }
    /** Used to get URLs that vary in a locally running application and the application running on production. */
    export class EndpointSelector {
        constructor(options: {
            [key: string]: {
                local?: string;
                production?: string;
            }
        });
        /** Returns a local or a productional URL depending on how the application is currently running. */
        urlFor(key: string): string;
    }
    /** An object that serves as a namespace for the methods that are used to animate UI elements. */
    export module fx {
        /** The animation object specifies the widget animation options. */
        export interface AnimationOptions {
            /** A function called after animation is completed. */
            complete?: (element: JQuery, config: AnimationOptions) => void;
            /** A number specifying wait time before animation execution. */
            delay?: number;
            /** A number specifying the time in milliseconds spent on animation. */
            duration?: number;
            /** A string specifying the type of an easing function used for animation. */
            easing?: string;
            /** Specifies the initial widget animation state. */
            from?: any;
            /** A function called before animation is started. */
            start?: (element: JQuery, config: AnimationOptions) => void;
            /** Specifies the initial widget animation state. */
            to?: any;
            /** A string value specifying the animation type. */
            type?: string;
            /** Specifies the animation direction for the "slideIn" and "slideOut" animation types. */
            direction?: string;
        }
        /** Animates the specified element. */
        export function animate(element: HTMLElement, config: Object): Object;
        /** Returns a value indicating whether the specified element is being animated. */
        export function isAnimating(element: HTMLElement): boolean;
        /** Stops the animation. */
        export function stop(element: HTMLElement, jumpToEnd: boolean): void;
    }
    /** An object that serves as a namespace for the methods and events specifying information on the current device. */
    export module devices {
        /** The device object defines the device on which the application is running. */
        export interface Device {
            /** Indicates whether or not the device platform is Android. */
            android?: boolean;
            /** Specifies the type of the device on which the application is running. */
            deviceType?: string;
            /** Indicates whether or not the device platform is generic, which means that the application will look and behave according to a generic "light" or "dark" theme. */
            generic?: boolean;
            /** Indicates whether or not the device platform is iOS. */
            ios?: boolean;
            /** Indicates whether or not the device type is 'phone'. */
            phone?: boolean;
            /** Specifies the platform of the device on which the application is running. */
            platform?: string;
            /** Indicates whether or not the device type is 'tablet'. */
            tablet?: boolean;
            /** Indicates whether or not the device platform is Tizen. */
            tizen?: boolean;
            /** Specifies an array with the major and minor versions of the device platform. */
            version?: Array<number>;
            /** Indicates whether or not the device platform is Windows8. */
            win8?: boolean;
        }
        export var orientationChanged: JQueryCallback;
        /** Overrides actual device information to force the application to operate as if it was running on the specified device. */
        export function current(deviceName: any): void;
        /** Returns information about the current device. */
        export function current(): Device;
        /** Returns the current device orientation. */
        export function orientation(): string;
        /** Returns real information about the current device regardless of the value passed to the devices.current(deviceName) method. */
        export function real(): Device;
    }
    /** The position object specifies the widget positioning options. */
    export interface PositionOptions {
        /** The target element position that the widget is positioned against. */
        at?: string;
        /** The element within which the widget is positioned. */
        boundary?: Element;
        /** A string value holding horizontal and vertical offset from the window's boundaries. */
        boundaryOffset?: string;
        /** Specifies how to move the widget if it overflows the screen. */
        collision?: any;
        /** The position of the widget to align against the target element. */
        my?: string;
        /** The target element that the widget is positioned against. */
        of?: HTMLElement;
        /** A string value holding horizontal and vertical offset in pixels, separated by a space (e.g., "5 -10"). */
        offset?: string;
    }
    export interface ComponentOptions {
        /** A handler for the optionChanged event. */
        onOptionChanged?: Function;
        /** A handler for the disposing event. */
        onDisposing?: Function;
    }
    /** A base class for all components and widgets. */
    export class Component {
        constructor(options?: ComponentOptions)
        /** Prevents the component from refreshing until the endUpdate method is called. */
        beginUpdate(): void;
        /** Enables the component to refresh after the beginUpdate method call. */
        endUpdate(): void;
        /** Returns an instance of this component class. */
        instance(): Component;
        /** Sets one or more options of this component. */
        option(options: Object): void;
        /** Returns the configuration options of this component. */
        option(): Object;
        /** Gets the value of the specified configuration option of this component. */
        option(optionName: string): any;
        /** Sets a value to the specified configuration option of this component. */
        option(optionName: string, optionValue: any): void;
    }
    export interface DOMComponentOptions extends ComponentOptions {
        /** Specifies whether or not the current component supports a right-to-left representation. */
        rtlEnabled?: boolean;
    }
    /** A base class for all components. */
    export class DOMComponent extends Component {
        constructor(element: JQuery, options?: DOMComponentOptions);
        constructor(element: HTMLElement, options?: DOMComponentOptions);
        /** Returns the root HTML element of the widget. */
        element(): JQuery;
        /** Specifies the device-dependent default configuration options for this component. */
        static defaultOptions(rule: {
            device?: any;
            options?: any;
        }): void;
    }
    export module data {
        export interface ODataError extends Error {
            httpStatus?: number;
            errorDetails?: any;
        }
        export interface StoreOptions {
            inserted?: (values: Object, key: any) => void;
            inserting?: (values: Object) => void;
            loaded?: (result: Array<any>) => void;
            loading?: (loadOptions: LoadOptions) => void;
            modified?: () => void;
            modifying?: () => void;
            removed?: (key: any) => void;
            removing?: (key: any) => void;
            updated?: (key: any, values: Object) => void;
            updating?: (key: any, values: Object) => void;
            /** A handler for the modified event. */
            onModified?: () => void;
            /** A handler for the modifying event. */
            onModifying?: () => void;
            /** A handler for the removed event. */
            onRemoved?: (key: any) => void;
            /** A handler for the removing event. */
            onRemoving?: (key: any) => void;
            /** A handler for the updated event. */
            onUpdated?: (key: any, values: Object) => void;
            /** A handler for the updating event. */
            onUpdating?: (key: any, values: Object) => void;
            /** A handler for the loaded event. */
            onLoaded?: (result: Array<any>) => void;
            /** A handler for the loading event. */
            onLoading?: (loadOptions: LoadOptions) => void;
            /** A handler for the inserted event. */
            onInserted?: (values: Object, key: any) => void;
            /** A handler for the inserting event. */
            onInserting?: (values: Object) => void;
            /** Specifies the function called when the Store causes an error. */
            errorHandler?: (e: Error) => void;
            /** Specifies the key properties within the data associated with the Store. */
            key?: any;
        }
        export interface LoadOptions {
            filter?: Object;
            sort?: Object;
            select?: Object;
            group?: Object;
            skip?: number;
            take?: number;
            userData?: Object;
            requireTotalCount?: boolean;
        }
        /** The base class for all Stores. */
        export class Store implements EventsMixin<Store> {
            inserted: JQueryCallback;
            inserting: JQueryCallback;
            loaded: JQueryCallback;
            loading: JQueryCallback;
            modified: JQueryCallback;
            modifying: JQueryCallback;
            removed: JQueryCallback;
            removing: JQueryCallback;
            updated: JQueryCallback;
            updating: JQueryCallback;
            constructor(options?: StoreOptions);
            /** Returns the data item specified by the key. */
            byKey(key: any, extraOptions?: Object): JQueryPromise<any>;
            /** Adds an item to the data associated with this Store. */
            insert(values: Object): JQueryPromise<any>;
            /** Returns the key expression specified via the key configuration option. */
            key(): any;
            /** Returns the key of the Store item that matches the specified object. */
            keyOf(obj: Object): any;
            /** Starts loading the data. */
            load(obj?: LoadOptions): JQueryPromise<any[]>;
            /** Removes the data item specified by the key. */
            remove(key: any): JQueryPromise<any>;
            /** Obtains the total count of items that will be returned by the load() function. */
            totalCount(obj?: {
                filter?: Object;
                select?: Object;
                group?: Object;
                sort?: Object;
            }): JQueryPromise<any>;
            /** Updates the data item specified by the key. */
            update(key: any, values: Object): JQueryPromise<any>;
            on(eventName: "removing", eventHandler: (key: any) => void): Store;
            on(eventName: "removed", eventHandler: (key: any) => void): Store;
            on(eventName: "updating", eventHandler: (key: any, values: Object) => void): Store;
            on(eventName: "updated", eventHandler: (key: any, values: Object) => void): Store;
            on(eventName: "inserting", eventHandler: (values: Object) => void): Store;
            on(eventName: "inserted", eventHandler: (values: Object, key: any) => void): Store;
            on(eventName: "modifying", eventHandler: () => void): Store;
            on(eventName: "modified", eventHandler: () => void): Store;
            on(eventName: "loading", eventHandler: (loadOptions: LoadOptions) => void): Store;
            on(eventName: "loaded", eventHandler: (result: Array<any>) => void): Store;
            on(eventName: string, eventHandler: Function): Store;
            on(events: { [eventName: string]: Function; }): Store;
            off(eventName: "removing"): Store;
            off(eventName: "removed"): Store;
            off(eventName: "updating"): Store;
            off(eventName: "updated"): Store;
            off(eventName: "inserting"): Store;
            off(eventName: "inserted"): Store;
            off(eventName: "modifying"): Store;
            off(eventName: "modified"): Store;
            off(eventName: "loading"): Store;
            off(eventName: "loaded"): Store;
            off(eventName: string): Store;
            off(eventName: "removing", eventHandler: (key: any) => void): Store;
            off(eventName: "removed", eventHandler: (key: any) => void): Store;
            off(eventName: "updating", eventHandler: (key: any, values: Object) => void): Store;
            off(eventName: "updated", eventHandler: (key: any, values: Object) => void): Store;
            off(eventName: "inserting", eventHandler: (values: Object) => void): Store;
            off(eventName: "inserted", eventHandler: (values: Object, key: any) => void): Store;
            off(eventName: "modifying", eventHandler: () => void): Store;
            off(eventName: "modified", eventHandler: () => void): Store;
            off(eventName: "loading", eventHandler: (loadOptions: LoadOptions) => void): Store;
            off(eventName: "loaded", eventHandler: (result: Array<any>) => void): Store;
            off(eventName: string, eventHandler: Function): Store;
        }
        export interface ArrayStoreOptions extends StoreOptions {
            /** Specifies the array associated with this Store. */
            data?: Array<any>;
        }
        /** A Store accessing an in-memory array. */
        export class ArrayStore extends Store {
            constructor(options?: ArrayStoreOptions);
            /** Clears all data associated with the current ArrayStore. */
            clear(): void;
            /** Creates the Query object for the underlying array. */
            createQuery(): Query;
        }
        interface Promise {
            then(doneFn?: Function, failFn?: Function, progressFn?: Function): Promise;
        }
        export interface CustomStoreOptions extends StoreOptions {
            /** The user implementation of the byKey(key, extraOptions) method. */
            byKey?: (key: any) => Promise;
            /**
             * User implementation of the byKey(key, extraOptions) method.
             * @deprecated Use "byKey" instead
             */
            lookup?: (key: any) => Promise;
            /** The user implementation of the insert(values) method. */
            insert?: (values: Object) => Promise;
            /** The user implementation of the load(options) method. */
            load?: (options?: LoadOptions) => Promise;
            /** The user implementation of the remove(key) method. */
            remove?: (key: any) => Promise;
            /** The user implementation of the totalCount(options) method. */
            totalCount?: () => Promise;
            /** The user implementation of the update(key, values) method. */
            update?: (key: any, values: Object) => Promise;
        }
        /** A Store object that enables you to implement your own data access logic. */
        export class CustomStore extends Store {
            constructor(options: CustomStoreOptions);
        }
        export interface DataSourceOptions {
            /** Specifies data filtering conditions. */
            filter?: Object;
            /** Specifies data grouping conditions. */
            group?: Object;
            /** The item mapping function. */
            map?: (record: any) => any;
            /** Specifies the maximum number of items the page can contain. */
            pageSize?: number;
            /** Specifies whether a DataSource loads data by pages, or all items at once. */
            paginate?: boolean;
            /** The data post processing function. */
            postProcess?: (data: any[]) => any[];
            /** Specifies a value by which the required items are searched. */
            searchExpr?: Object;
            /** Specifies the comparison operation used to search for the required items. */
            searchOperation?: string;
            /** Specifies the value to which the search expression is compared. */
            searchValue?: Object;
            /** Specifies the initial select option value. */
            select?: Object;
            /** Specifies the initial sort option value. */
            sort?: Object;
            /** Specifies the underlying Store instance used to access data. */
            store?: any;
            /** A handler for the changed event. */
            onChanged?: () => void;
            /** A handler for the loadingChanged event. */
            onLoadingChanged?: (isLoading: boolean) => void;
            /** A handler for the loadError event. */
            onLoadError?: (e?: Error) => void;
        }
        /** An object that provides access to a data web service or local data storage for collection container widgets. */
        export class DataSource implements EventsMixin<DataSource> {
            constructor(options?: DataSourceOptions);
            changed: JQueryCallback;
            loadError: JQueryCallback;
            loadingChanged: JQueryCallback;
            /** Disposes all resources associated with this DataSource. */
            dispose(): void;
            /** Returns the current filter option value. */
            filter(): Object;
            /** Sets the filter option value. */
            filter(filterExpr: Object): void;
            /** Returns the current group option value. */
            group(): Object;
            /** Sets the group option value. */
            group(groupExpr: Object): void;
            /** Indicates whether or not the current page contains fewer items than the number of items specified by the pageSize configuration option. */
            isLastPage(): boolean;
            /** Indicates whether or not at least one load() method execution has successfully finished. */
            isLoaded(): boolean;
            /** Indicates whether or not the DataSource is currently being loaded. */
            isLoading(): boolean;
            /** Returns the array of items currently operated by the DataSource. */
            items(): Array<any>;
            /** Returns the key expression. */
            key(): any;
            /** Starts loading data. */
            load(): JQueryPromise<Array<any>>;
            /** Returns an object that would be passed to the load() method of the underlying Store according to the current data shaping option values of the current DataSource instance. */
            loadOptions(): Object;
            /** Returns the current pageSize option value. */
            pageSize(): number;
            /** Sets the pageSize option value. */
            pageSize(value: number): void;
            /** Specifies the index of the currently loaded page. */
            pageIndex(): number;
            /** Specifies the index of the page to be loaded during the next load() method execution. */
            pageIndex(newIndex: number): void;
            /** Returns the current paginate option value. */
            paginate(): boolean;
            /** Sets the paginate option value. */
            paginate(value: boolean): void;
            /** Returns the searchExpr option value. */
            searchExpr(): Object;
            /** Sets the searchExpr option value. */
            searchExpr(expr: Object): void;
            /** Returns the currently specified search operation. */
            searchOperation(): string;
            /** Sets the current search operation. */
            searchOperation(op: string): void;
            /** Returns the searchValue option value. */
            searchValue(): Object;
            /** Sets the searchValue option value. */
            searchValue(value: Object): void;
            /** Returns the current select option value. */
            select(): Object;
            /** Sets the select option value. */
            select(expr: Object): void;
            /** Returns the current sort option value. */
            sort(): Object;
            /** Sets the sort option value. */
            sort(sortExpr: Object): void;
            /** Returns the underlying Store instance. */
            store(): Store;
            /** Returns the number of data items available in an underlying Store after the last load() operation without paging. */
            totalCount(): number;
            on(eventName: "loadingChanged", eventHandler: (isLoading: boolean) => void): DataSource;
            on(eventName: "loadError", eventHandler: (e?: Error) => void): DataSource;
            on(eventName: "changed", eventHandler: () => void): DataSource;
            on(eventName: string, eventHandler: Function): DataSource;
            on(events: { [eventName: string]: Function; }): DataSource;
            off(eventName: "loadingChanged"): DataSource;
            off(eventName: "loadError"): DataSource;
            off(eventName: "changed"): DataSource;
            off(eventName: string): DataSource;
            off(eventName: "loadingChanged", eventHandler: (isLoading: boolean) => void): DataSource;
            off(eventName: "loadError", eventHandler: (e?: Error) => void): DataSource;
            off(eventName: "changed", eventHandler: () => void): DataSource;
            off(eventName: string, eventHandler: Function): DataSource;
        }
        /** An object used to work with primitive data types not supported by JavaScript when accessing an OData web service. */
        export class EdmLiteral {
            /** Returns a string representation of the value associated with this EdmLiteral object. */
            valueOf(): string;
        }
        /** An object used to generate and hold the GUID. */
        export class Guid {
            /** Creates a new Guid instance that holds the specified GUID. */
            constructor(value: string);
            /** Creates a new Guid instance holding the generated GUID. */
            constructor();
            /** Returns a string representation of the Guid instance. */
            toString(): string;
            /** Returns a string representation of the Guid instance. */
            valueOf(): string;
        }
        export interface LocalStoreOptions extends ArrayStoreOptions {
            /** Specifies the time (in miliseconds) after the change operation, before the data is flushed. */
            flushInterval?: number;
            /** Specifies whether the data is flushed immediatelly after each change operation, or after the delay specified via the flushInterval option. */
            immediate?: boolean;
            /** The unique identifier used to distinguish the data within the HTML5 Web Storage. */
            name?: string;
        }
        /** A Store providing access to the HTML5 Web Storage. */
        export class LocalStore extends ArrayStore {
            constructor(options?: LocalStoreOptions);
            /** Removes all data associated with this Store. */
            clear(): void;
        }
        export interface ODataContextOptions extends ODataStoreOptions {
            /** Specifies the list of entities to be accessed via the ODataContext. */
            entities?: Object;
            /** Specifies the function called if the ODataContext causes an error. */
            errorHandler?: (e: Error) => void;
        }
        /** Provides access to the entire OData service. */
        export class ODataContext {
            constructor(options?: ODataContextOptions);
            /** Initiates the specified WebGet service operation that returns a value. For the information on service operations, refer to the OData documentation. */
            get(operationName: string, params: Object): JQueryPromise<any>;
            /** Initiates the specified WebGet service operation that returns nothing. For the information on service operations, refer to the OData documentation. */
            invoke(operationName: string, params: Object, httpMethod: Object): JQueryPromise<any>;
            /** Return a special proxy object to describe the entity link. */
            objectLink(entityAlias: string, key: any): Object;
        }
        export interface ODataStoreOptions extends StoreOptions {
            /** A function used to customize a web request before it is sent. */
            beforeSend?: (request: Object) => void;
            /** Specifies whether the ODataStore uses the JSONP approach to access non-CORS-compatible remote services. */
            jsonp?: boolean;
            /** Specifies the type of the ODataStore key property. The following key types are supported out of the box: String, Int32, Int64, and Guid. */
            keyType?: any;
            /** Specifies the URL of the data service being accessed via the current ODataContext. */
            url?: string;
            /** Specifies the version of the OData protocol used to interact with the data service. */
            version?: number;
            /** Specifies the value of the withCredentials field of the underlying jqXHR object. */
            withCredentials?: boolean;
        }
        /** A Store providing access to a separate OData web service entity. */
        export class ODataStore extends Store {
            constructor(options?: ODataStoreOptions);
            /** Creates the Query object for the OData endpoint. */
            createQuery(loadOptions: Object): Object;
        }
        /** An universal chainable data query interface object. */
        export interface Query {
            /** Calculates a custom summary for the items in the current Query. */
            aggregate(step: (accumulator: any, value: any) => any): JQueryPromise<any>;
            /** Calculates a custom summary for the items in the current Query. */
            aggregate(seed: any, step: (accumulator: any, value: any) => any, finalize: (result: any) => any): JQueryPromise<any>;
            /** Calculates the average item value for the current Query. */
            avg(getter: Object): JQueryPromise<any>;
            /** Finds the item with the maximum getter value. */
            max(getter: Object): JQueryPromise<any>;
            /** Finds the item with the maximum value in the Query. */
            max(): JQueryPromise<any>;
            /** Finds the item with the minimum value in the Query. */
            min(): JQueryPromise<any>;
            /** Finds the item with the minimum getter value. */
            min(getter: Object): JQueryPromise<any>;
            /** Calculates the average item value for the current Query, if each Query item has a numeric type. */
            avg(): JQueryPromise<any>;
            /** Returns the total count of items in the current Query. */
            count(): JQueryPromise<any>;
            /** Executes the Query. */
            enumerate(): JQueryPromise<any>;
            /** Filters the current Query data. */
            filter(criteria: Array<any>): Query;
            /** Groups the current Query data. */
            groupBy(getter: Object): Query;
            /** Applies the specified transformation to each item. */
            select(getter: Object): Query;
            /** Limits the data item count. */
            slice(skip: number, take?: number): Query;
            /** Sorts current Query data. */
            sortBy(getter: Object, desc: boolean): Query;
            /** Sorts current Query data. */
            sortBy(getter: Object): Query;
            /** Calculates the sum of item getter values in the current Query. */
            sum(getter: Object): JQueryPromise<any>;
            /** Calculates the sum of item values in the current Query. */
            sum(): JQueryPromise<any>;
            /** Adds one more sorting condition to the current Query. */
            thenBy(getter: Object): Query;
            /** Adds one more sorting condition to the current Query. */
            thenBy(getter: Object, desc: boolean): Query;
            /** Returns the array of current Query items. */
            toArray(): Array<any>;
        }
        /** The global data layer error handler. */
        export var errorHandler: (e: Error) => void;
        /** Encodes the specified string or array of bytes to base64 encoding. */
        export function base64_encode(input: any): string;
        /** Creates a Query instance. */
        export function query(array: Array<any>): Query;
        /** Creates a Query instance for accessing the remote service specified by a URL. */
        export function query(url: string, queryOptions: Object): Query;
        /** This section describes the utility objects provided by the DevExtreme data layer. */
        export var utils: {
            /** Compiles a getter function from the getter expression. */
            compileGetter(expr: any): Function;
            /** Compiles a setter function from the setter expression. */
            compileSetter(expr: any): Function;
            odata: {
                /** Holds key value converters for OData. */
                keyConverters: {
                    String(value: any): string;
                    Int32(value: any): number;
                    Int64(value: any): EdmLiteral;
                    Guid(value: any): Guid;
                    Boolean(value: any): boolean;
                    Single(value: any): EdmLiteral;
                    Decimal(value: any): EdmLiteral;
                };
            }
        }
    }
    /** An object that serves as a namespace for DevExtreme UI widgets as well as for methods implementing UI logic in DevExtreme sites/applications. */
    export module ui {
        /**
         * Sets parameters for the viewport meta tag.
         * @deprecated Use the "DevExpress.utils.initMobileViewport" option instead.
         */
        export function initViewport(options: { allowZoom?: boolean; allowPan?: boolean; allowSelection?: boolean }): void;
        export interface WidgetOptions extends DOMComponentOptions {
            /** A Boolean value specifying whether or not the widget changes its state when interacting with a user. */
            activeStateEnabled?: boolean;
            /** A Boolean value specifying whether or not the widget can respond to user interaction. */
            disabled?: boolean;
            /** Specifies the height of the widget. */
            height?: any;
            /** A Boolean value specifying whether or not the widget changes its state when being hovered by an end user. */
            hoverStateEnabled?: boolean;
            /** Specifies whether or not the widget can be focused. */
            focusStateEnabled?: boolean;
            /** A Boolean value specifying whether or not the widget is visible. */
            visible?: boolean;
            /** Specifies the width of the widget. */
            width?: any;
            /** Specifies the widget tab index. */
            tabIndex?: number;
            /** Specifies the text of the hint displayed for the widget. */
            hint?: string;
        }
        /** The base class for widgets. */
        export class Widget extends DOMComponent {
            constructor(options?: WidgetOptions);
            /** Redraws the widget. */
            repaint(): void;
            /** Sets focus on the widget. */
            focus(): void;
        }
        export interface CollectionWidgetOptions extends WidgetOptions {
            /** A data source used to fetch data to be displayed by the widget. */
            dataSource?: any;
            itemClickAction?: any;
            itemHoldAction?: Function;
            /** The time period in milliseconds before the onItemHold event is raised. */
            itemHoldTimeout?: number;
            itemRender?: any;
            itemRenderedAction?: Function;
            /** An array of items displayed by the widget. */
            items?: Array<any>;
            /**
             * A function performed when a widget item is selected.
             * @deprecated Use the 'onSelectionChanged' option instead
             */
            itemSelectAction?: Function;
            /** The template to be used for rendering items. */
            itemTemplate?: any;
            loopItemFocus?: boolean;
            /** The text or HTML markup displayed by the widget if the item collection is empty. */
            noDataText?: string;
            onContentReady?: any;
            contentReadyAction?: any;
            /** A handler for the itemClick event. */
            onItemClick?: any;
            /** A handler for the itemContextMenu event. */
            onItemContextMenu?: Function;
            /** A handler for the itemHold event. */
            onItemHold?: Function;
            /** A handler for the itemRendered event. */
            onItemRendered?: Function;
            /** A handler for the selectionChanged event. */
            onSelectionChanged?: Function;
            /** The index of the currently selected widget item. */
            selectedIndex?: number;
            /** The selected item object. */
            selectedItem?: Object;
            /** An array of currently selected item objects. */
            selectedItems?: Array<any>;
            /** A handler for the itemDeleting event. */
            onItemDeleting?: Function;
            /** A handler for the itemDeleted event. */
            onItemDeleted?: Function;
            /** A handler for the itemReordered event. */
            onItemReordered?: Function;
        }
        /** The base class for widgets containing an item collection. */
        export class CollectionWidget extends Widget {
            constructor(element: JQuery, options?: CollectionWidgetOptions);
            constructor(element: HTMLElement, options?: CollectionWidgetOptions);
            selectItem(itemElement: any): void;
            unselectItem(itemElement: any): void;
            deleteItem(itemElement: any): JQueryPromise<void>;
            isItemSelected(itemElement: any): boolean;
            reorderItem(itemElement: any, toItemElement: any): JQueryPromise<void>;
        }
        export interface DataExpressionMixinOptions {
            /** A data source used to fetch data to be displayed by the widget. */
            dataSource?: any;
            /** Specifies the name of the data source item field whose value is displayed by the widget. */
            displayExpr?: any;
            /** Specifies the name of a data source item field whose value is held in the value configuration option. */
            valueExpr?: any;
            itemRender?: any;
            /** An array of items displayed by the widget. */
            items?: Array<any>;
            /** The template to be used for rendering items. */
            itemTemplate?: any;
            /** The currently selected value in the widget. */
            value?: any;
        }
        export interface EditorOptions extends WidgetOptions {
            /** The currently specified value. */
            value?: any;
            /** A handler for the valueChanged event. */
            onValueChanged?: Function;
            valueChangeAction?: Function;
            /** A Boolean value specifying whether or not the widget is read-only. */
            readOnly?: boolean;
            /** Holds the object that defines the error that occurred during validation. */
            validationError?: Object;
            /** Specifies whether the editor's value is valid. */
            isValid?: boolean;
            /** Specifies how the message about the validation rules that are not satisfied by this editor's value is displayed. */
            validationMessageMode?: string;
        }
        /** A base class for editors. */
        export class Editor extends Widget { }
        /** An object that serves as a namespace for methods displaying a message in an application/site. */
        export var dialog: {
            /** Creates an alert dialog message containing a single "OK" button. */
            alert(message: string, title: string): JQueryPromise<void>;
            /** Creates a confirm dialog that contains "Yes" and "No" buttons. */
            confirm(message: string, title: string): JQueryPromise<boolean>;
            /** Creates a custom dialog using the options specified by the passed configuration object. */
            custom(options: { title?: string; message?: string; buttons?: Array<Object>; }): {
                show(): JQueryPromise<any>;
                hide(): void;
                hide(value: any): void;
            };
        };
        /** Creates a toast message. */
        export function notify(message: any, type: string, displayTime: number): void;
        /** Creates a toast message. */
        export function notify(options: Object): void;
        /** An object that serves as a namespace for the methods that work with DevExtreme CSS Themes. */
        export var themes: {
            /** Returns the name of the currently applied theme. */
            current(): string;
            /** Changes the current theme to the specified one. */
            current(themeName: string): void;
        };
        /** Sets a specified template engine. */
        export function setTemplateEngine(name: string): void;
        /** Sets a custom template engine defined via custom compile and render functions. */
        export function setTemplateEngine(options: Object): void;
        /** An object that serves as a namespace for utility methods that can be helpful when working with the DevExtreme framework and UI widgets. */
        export var utils: {
            /** Sets parameters for the viewport meta tag. */
            initMobileViewport(options: { allowZoom?: boolean; allowPan?: boolean; allowSelection?: boolean }): void;
        };
    }
}
declare module DevExpress.framework {
    /** An object used to store information on the views displayed in an application. */
    export class ViewCache {
        viewRemoved: JQueryCallback;
        /** Removes all the viewInfo objects from the cache. */
        clear(): void;
        /** Obtains a viewInfo object from the cache by the specified key. */
        getView(key: string): Object;
        /** Checks whether or not a viewInfo object is contained in the view cache under the specified key. */
        hasView(key: string): boolean;
        /** Removes a viewInfo object from the cache by the specified key. */
        removeView(key: string): Object;
        /** Adds the specified viewInfo object to the cache under the specified key. */
        setView(key: string, viewInfo: Object): void;
    }
    export interface dxCommandOptions extends DOMComponentOptions {
        action?: any;
        /** Specifies an action performed when the execute() method of the command is called. */
        onExecute?: any;
        /** Indicates whether or not the widget that displays this command is disabled. */
        disabled?: boolean;
        /** Specifies the name of the icon shown inside the widget associated with this command. */
        icon?: string;
        /** A URL pointing to the icon shown inside the widget associated with this command. */
        iconSrc?: string;
        /** The identifier of the command. */
        id?: string;
        /** Specifies the title of the widget associated with this command. */
        title?: string;
        /** Specifies the type of the button, if the command is rendered as a dxButton widget. */
        type?: string;
        /** A Boolean value specifying whether or not the widget associated with this command is visible. */
        visible?: boolean;
    }
    /** A markup component used to define markup options for a command. */
    export class dxCommand extends DOMComponent {
        constructor(element: JQuery, options: dxCommandOptions);
        constructor(options: dxCommandOptions);
        /** Executes the action associated with this command. */
        execute(): void;
    }
    /** An object responsible for routing. */
    export class Router {
        /** Adds a routing rule to the list of registered rules. */
        register(pattern: string, defaults?: Object, constraints?: Object): void;
        /** Decodes the specified URI to an object using the registered routing rules. */
        parse(uri: string): Object;
        /** Formats an object to a URI. */
        format(obj: Object): string;
    }
    export module html {
        export var layoutSets: Array<string>;
        export interface HtmlApplicationOptions {
            /** Specifies where the commands that are defined in the application's views must be displayed. */
            commandMapping?: Object;
            /**
             * The name of the default layout used by the application.
             * @deprecated Use the "navigationType" option instead.
             */
            defaultLayout?: string;
            /** Specifies whether or not view caching is disabled. */
            disableViewCache?: boolean;
            /** An array of layout controllers that should be used to show application views in the current navigation context. */
            layoutSet?: any;
            /** Specifies whether the current application must behave as a mobile or web application. */
            mode?: string;
            /** Specifies the object that represents a root namespace of the application. */
            namespace?: Object;
            /** Specifies application behavior when the user navigates to a root view. */
            navigateToRootViewMode?: string;
            /** An array of dxCommand configuration objects used to define commands available from the application's global navigation. */
            navigation?: Array<any>;
            /**
             * Specifies a strategy for choosing layouts for views in your application.
             * @deprecated Use the "layoutSet" option instead.
             */
            navigationType?: string;
            /**
             * Specifies the object that represents the root namespace of the application.
             * @deprecated Use the "namespace" option instead.
             */
            ns?: Object;
            /** Indicates whether on not to use the title of the previously displayed view as text on the Back button. */
            useViewTitleAsBackText?: boolean;
            /** A custom view cache to be used in the application. */
            viewCache?: Object;
            /** Specifies a limit for the views that can be cached. */
            viewCacheSize?: number;
            /** Specifies options for the viewport meta tag of a mobile browser. */
            viewPort?: JQuery;
            /** A custom router to be used in the application. */
            router?: Router;
        }
        /** An object used to manage views, as well as control the application life cycle. */
        export class HtmlApplication implements EventsMixin<HtmlApplication> {
            constructor(options: HtmlApplicationOptions);
            afterViewSetup: JQueryCallback;
            beforeViewSetup: JQueryCallback;
            initialized: JQueryCallback;
            navigating: JQueryCallback;
            navigatingBack: JQueryCallback;
            resolveLayoutController: JQueryCallback;
            viewDisposed: JQueryCallback;
            viewDisposing: JQueryCallback;
            viewHidden: JQueryCallback;
            viewRendered: JQueryCallback;
            viewShowing: JQueryCallback;
            viewShown: JQueryCallback;
            /** Provides access to the ViewCache object. */
            viewCache: ViewCache;
            /** An array of dxCommand components that are created based on the application's navigation option value. */
            navigation: Array<any>;
            /** Provides access to the Router object. */
            router: Router;
            /** Navigates to the URI preceding the current one in the navigation history. */
            back(): void;
            /** Returns a Boolean value indicating whether or not backwards navigation is currently possible. */
            canBack(): boolean;
            /** Removes the application state that has been saved by the saveState() method to the state storage. */
            clearState(): void;
            /** Creates global navigation commands.  */
            createNavigation(navigationConfig: Array<any>): void;
            /** Returns an HTML template of the specified view. */
            getViewTemplate(viewName: string): JQuery;
            /** Returns a configuration object used to create a dxView component for a specified view. */
            getViewTemplateInfo(viewName: string): Object;
            /** Adds a specified HTML template to a collection of view or layout templates. */
            loadTemplates(source: any): JQueryPromise<any>;
            /** Navigates to the specified URI. */
            navigate(uri?: any, options?: Object): void;
            /** Renders navigation commands to the navigation command containers that are located in the layouts used in the application. */
            renderNavigation(): void;
            /** Restores the application state that has been saved by the saveState() method to the state storage, and applies it to the application. */
            restoreState(): void;
            /** Saves the current application state. */
            saveState(): void;
            /** Provides access to the object that defines the current context to be considered when choosing an appropriate template for a view. */
            templateContext(): Object;
            on(eventName: "initialized", eventHandler: () => void): HtmlApplication;
            on(eventName: "afterViewSetup", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "beforeViewSetup", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "navigating", eventHandler: (e: {
                currentUri: string;
                uri: string;
                cancel: boolean;
                options: {
                    root: boolean;
                    target: string;
                    direction: string;
                    rootInDetailPane: boolean;
                    modal: boolean;
                };
            }) => void): HtmlApplication;
            on(eventName: "navigatingBack", eventHandler: (e: {
                cancel: boolean;
                isHardwareButton: boolean;
            }) => void): HtmlApplication;
            on(eventName: "resolveLayoutController", eventHandler: (e: {
                viewInfo: Object;
                layoutController: Object;
                availableLayoutControllers: Array<Object>;
            }) => void): HtmlApplication;
            on(eventName: "viewDisposed", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "viewDisposing", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "viewHidden", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "viewRendered", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            on(eventName: "viewShowing", eventHandler: (e: {
                viewInfo: Object;
                direction: string;
            }) => void): HtmlApplication;
            on(eventName: "viewShown", eventHandler: (e: {
                viewInfo: Object;
                direction: string;
            }) => void): HtmlApplication;
            on(eventName: string, eventHandler: Function): HtmlApplication;
            on(events: { [eventName: string]: Function; }): HtmlApplication;
            off(eventName: "initialized"): HtmlApplication;
            off(eventName: "afterViewSetup"): HtmlApplication;
            off(eventName: "beforeViewSetup"): HtmlApplication;
            off(eventName: "navigating"): HtmlApplication;
            off(eventName: "navigatingBack"): HtmlApplication;
            off(eventName: "resolveLayoutController"): HtmlApplication;
            off(eventName: "viewDisposed"): HtmlApplication;
            off(eventName: "viewDisposing"): HtmlApplication;
            off(eventName: "viewHidden"): HtmlApplication;
            off(eventName: "viewRendered"): HtmlApplication;
            off(eventName: "viewShowing"): HtmlApplication;
            off(eventName: "viewShown"): HtmlApplication;
            off(eventName: string): HtmlApplication;
            off(eventName: "initialized", eventHandler: () => void): HtmlApplication;
            off(eventName: "afterViewSetup", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "beforeViewSetup", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "navigating", eventHandler: (e: {
                currentUri: string;
                uri: string;
                cancel: boolean;
                options: {
                    root: boolean;
                    target: string;
                    direction: string;
                    rootInDetailPane: boolean;
                    modal: boolean;
                };
            }) => void): HtmlApplication;
            off(eventName: "navigatingBack", eventHandler: (e: {
                cancel: boolean;
                isHardwareButton: boolean;
            }) => void): HtmlApplication;
            off(eventName: "resolveLayoutController", eventHandler: (e: {
                viewInfo: Object;
                layoutController: Object;
                availableLayoutControllers: Array<Object>;
            }) => void): HtmlApplication;
            off(eventName: "viewDisposed", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "viewDisposing", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "viewHidden", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "viewRendered", eventHandler: (e: {
                viewInfo: Object;
            }) => void): HtmlApplication;
            off(eventName: "viewShowing", eventHandler: (e: {
                viewInfo: Object;
                direction: string;
            }) => void): HtmlApplication;
            off(eventName: "viewShown", eventHandler: (e: {
                viewInfo: Object;
                direction: string;
            }) => void): HtmlApplication;
            off(eventName: string, eventHandler: Function): HtmlApplication;
        }
    }
}
declare module DevExpress.ui {
    export interface dxValidatorOptions extends DOMComponentOptions {
        /** An array of validation rules to be checked for the editor with which the dxValidator object is associated. */
        validationRules?: Array<any>;
        /** Specifies the editor name to be used in the validation default messages. */
        name?: string;
        /** An object that specifies what and when to validate and how to apply the validation result. */
        adapter?: Object;
        /** Specifies the validation group the editor will be related to. */
        validationGroup?: string;
        /** A handler for the validated event. */
        onValidated?: (params: validationEngine.ValidatorValidationResult) => void;
    }
    /** A widget that is used to validate the associated DevExtreme editors against the defined validation rules. */
    export class dxValidator extends DOMComponent implements validationEngine.IValidator {
        constructor(element: JQuery, options?: dxValidatorOptions);
        constructor(element: Element, options?: dxValidatorOptions);
        /** Validates the value of the editor that is controlled by the current dxValidator object against the list of the specified validation rules. */
        validate(): validationEngine.ValidatorValidationResult;
    }
    /** The widget that is used in the Knockout and Angular approaches to combine the editors to be validated. */
    export class dxValidationGroup extends DOMComponent {
        constructor(element: JQuery);
        constructor(element: Element);
        /** Validates rules of the validators that belong to the current validation group. */
        validate(): validationEngine.ValidationGroupValidationResult;
    }
    export interface dxValidationSummaryOptions extends CollectionWidgetOptions {
        /** Specifies the validation group for which summary should be generated. */
        validationGroup?: string;
    }
    /** A widget for displaying the result of checking validation rules for editors. */
    export class dxValidationSummary extends CollectionWidget {
        constructor(element: JQuery, options?: dxValidationSummaryOptions);
        constructor(element: Element, options?: dxValidationSummaryOptions);
    }
    export interface dxTooltipOptions extends dxPopoverOptions {
    }
    /** A tooltip widget. */
    export class dxTooltip extends dxPopover {
        constructor(element: JQuery, options?: dxTooltipOptions);
        constructor(element: Element, options?: dxTooltipOptions);
    }
    export interface dxDropDownListOptions extends dxDropDownEditorOptions {
        /** Returns the value currently displayed by the widget. */
        displayValue?: string;
        /** The minimum number of characters that must be entered into the text box to begin a search. */
        minSearchLength?: number;
        /** Specifies the name of a data source item field or an expression whose value is compared to the search criterion. */
        searchExpr?: Object;
        /** Specifies the binary operation used to filter data. */
        searchMode?: string;
        /** Specifies the time delay, in milliseconds, after the last character has been typed in, before a search is executed. */
        searchTimeout?: number;
        /** A handler for the valueChanged event. */
        onValueChanged?: Function;
        /** Specifies DOM event names that update a widget's value. */
        valueChangeEvent?: string;
        /** Specifies whether or not the widget supports searching. */
        searchEnabled?: boolean;
        /** Specifies whether or not the widget displays items by pages. */
        pagingEnabled?: boolean;
    }
    /** A base class for drop-down list widgets. */
    export class dxDropDownList extends dxDropDownEditor {
        constructor(element: JQuery, options?: dxDropDownListOptions);
        constructor(element: Element, options?: dxDropDownListOptions);
    }
    export interface dxToolbarOptions extends CollectionWidgetOptions {
        menuItemRender?: any;
        /** The template used to render menu items. */
        menuItemTemplate?: any;
        /** Informs the widget about its location in a view HTML markup. */
        renderAs?: string;
    }
    /** A toolbar widget. */
    export class dxToolbar extends CollectionWidget {
        constructor(element: JQuery, options?: dxToolbarOptions);
        constructor(element: Element, options?: dxToolbarOptions);
    }
    export interface dxToastOptions extends dxOverlayOptions {
        animation?: fx.AnimationOptions;
        /** The time span in milliseconds during which the dxToast widget is visible. */
        displayTime?: number;
        height?: any;
        /** The dxToast message text. */
        message?: string;
        position?: PositionOptions;
        shading?: boolean;
        /** Specifies the dxToast widget type. */
        type?: string;
        width?: any;
        closeOnBackButton?: boolean;
    }
    /** The toast message widget. */
    export class dxToast extends dxOverlay {
        constructor(element: JQuery, options?: dxToastOptions);
        constructor(element: Element, options?: dxToastOptions);
    }
    export interface dxTextEditorOptions extends EditorOptions {
        /** A handler for the change event. */
        onChange?: Function;
        changeAction?: Function;
        /** A handler for the copy event. */
        onCopy?: Function;
        copyAction?: Function;
        /** A handler for the cut event. */
        onCut?: Function;
        cutAction?: Function;
        /** A handler for the enterKey event. */
        onEnterKey?: Function;
        enterKeyAction?: Function;
        /** A handler for the focusIn event. */
        onFocusIn?: Function;
        focusInAction?: Function;
        /** A handler for the focusOut event. */
        onFocusOut?: Function;
        focusOutAction?: Function;
        /** A handler for the input event. */
        onInput?: Function;
        inputAction?: Function;
        /** A handler for the keyDown event. */
        onKeyDown?: Function;
        keyDownAction?: Function;
        /** A handler for the keyPress event. */
        onKeyPress?: Function;
        keyPressAction?: Function;
        /** A handler for the keyUp event. */
        onKeyUp?: Function;
        keyUpAction?: Function;
        /** A handler for the paste event. */
        onPaste?: Function;
        pasteAction?: Function;
        /** The text displayed by the widget when the widget value is empty. */
        placeholder?: string;
        /** Specifies whether to display the Clear button in the widget. */
        showClearButton?: boolean;
        /** Specifies the current value displayed by the widget. */
        value?: any;
        valueUpdateAction?: Function;
        valueChangeAction?: Function;
        /** Specifies DOM event names that update a widget's value. */
        valueChangeEvent?: string;
        valueUpdateEvent?: string;
        /** Specifies whether or not the widget checks the inner text for spelling mistakes. */
        spellcheck?: boolean;
    }
    /** A base class for text editing widgets. */
    export class dxTextEditor extends Editor {
        constructor(element: JQuery, options?: dxTextEditorOptions);
        constructor(element: Element, options?: dxTextEditorOptions);
        /** Removes focus from the input element. */
        blur(): void;
        /** Sets focus to the input element representing the widget. */
        focus(): void;
    }
    export interface dxTextBoxOptions extends dxTextEditorOptions {
        /** Specifies the maximum number of characters you can enter into the textbox. */
        maxLength?: any;
        /** The "mode" attribute value of the actual HTML input element representing the text box. */
        mode?: string;
    }
    /** A single-line text box widget. */
    export class dxTextBox extends dxTextEditor {
        constructor(element: JQuery, options?: dxTextBoxOptions);
        constructor(element: Element, options?: dxTextBoxOptions);
    }
    export interface dxTextAreaOptions extends dxTextBoxOptions {
        /** Specifies whether or not the widget checks the inner text for spelling mistakes. */
        spellcheck?: boolean;
    }
    /** A widget used to display and edit multi-line text. */
    export class dxTextArea extends dxTextBox {
        constructor(element: JQuery, options?: dxTextAreaOptions);
        constructor(element: Element, options?: dxTextAreaOptions);
    }
    export interface dxTabsOptions extends CollectionWidgetOptions {
        /** Specifies whether or not an end-user can scroll tabs by swiping. */
        scrollByContent?: boolean;
        /** Specifies whether or not an end-user can scroll tabs. */
        scrollingEnabled?: boolean;
        /** A Boolean value that specifies the availability of navigation buttons. */
        showNavButtons?: boolean;
    }
    /** A tab strip used to switch between pages. */
    export class dxTabs extends CollectionWidget {
        constructor(element: JQuery, options?: dxTabsOptions);
        constructor(element: Element, options?: dxTabsOptions);
    }
    export interface dxTabPanelOptions extends dxMultiViewOptions {
        /** A handler for the titleClick event. */
        onTitleClick?: any;
        /** A handler for the titleHold event. */
        onTitleHold?: Function;
        /** A handler for the titleRendered event. */
        onTitleRendered?: Function;
        /** A template to be used for rendering the widget title. */
        titleTemplate?: any;
    }
    /** A widget used to display a view and to switch between several views by clicking the appropriate tabs. */
    export class dxTabPanel extends dxMultiView {
        constructor(element: JQuery, options?: dxTabPanelOptions);
        constructor(element: Element, options?: dxTabPanelOptions);
    }
    export interface dxSelectBoxOptions extends dxDropDownListOptions {
        /** The template to be used for rendering the widget text field. */
        fieldTemplate?: any;
        /** The text that is provided as a hint in the select box editor. */
        placeholder?: string;
        /** Specifies whether or not the widget allows an end-user to enter a custom value. */
        editEnabled?: boolean;
    }
    /** A widget that allows you to select an item in a dropdown list. */
    export class dxSelectBox extends dxDropDownList {
        constructor(element: JQuery, options?: dxSelectBoxOptions);
        constructor(element: Element, options?: dxSelectBoxOptions);
        /** Closes the drop-down editor. */
        close(): void;
        /** Opens the drop-down editor. */
        open(): void;
    }
    export interface dxTagBoxOptions extends dxSelectBoxOptions {
        /** Holds the list of selected values. */
        values?: Array<any>;
        /** Holds the last selected value. */
        value?: any;
        /** A handler for the valueChanged event. */
        onValueChanged?: (e: {
            component: dxTagBox;
            element: JQuery;
            model: Object;
            value: Object;
            values: Object;
            itemData: Object;
            jQueryEvent: JQueryEventObject;
        }) => void;
    }
    /** A widget that allows you to select multiple items from a dropdown list. */
    export class dxTagBox extends dxSelectBox {
        constructor(element: JQuery, options?: dxTagBoxOptions);
        constructor(element: Element, options?: dxTagBoxOptions);
    }
    export interface dxScrollViewOptions extends dxScrollableOptions {
        /** A handler for the pullDown event. */
        onPullDown?: Function;
        pullDownAction?: Function;
        /** Specifies the text shown in the pullDown panel when pulling the content down lowers the refresh threshold. */
        pulledDownText?: string;
        /** Specifies the text shown in the pullDown panel while pulling the content down to the refresh threshold. */
        pullingDownText?: string;
        /** A handler for the reachBottom event. */
        onReachBottom?: Function;
        reachBottomAction?: Function;
        /** Specifies the text shown in the pullDown panel displayed when content is scrolled to the bottom. */
        reachBottomText?: string;
        /** Specifies the text shown in the pullDown panel displayed when the content is being refreshed. */
        refreshingText?: string;
        /** Returns a value indicating if the scrollView content is larger then the widget container. */
        isFull(): boolean;
        /** Locks the widget until the release(preventScrollBottom) method is called and executes the function passed to the onPullDown option and the handler assigned to the pullDown event. */
        refresh(): void;
        /** Notifies the scroll view that data loading is finished. */
        release(preventScrollBottom: boolean): JQueryPromise<void>;
        /** Toggles the loading state of the widget. */
        toggleLoading(showOrHide: boolean): void;
    }
    /** A widget used to display scrollable content. */
    export class dxScrollView extends dxScrollable {
        constructor(element: JQuery, options?: dxScrollViewOptions);
        constructor(element: Element, options?: dxScrollViewOptions);
    }
    export interface dxScrollableLocation {
        top?: number;
        left?: number;
    }
    export interface dxScrollableOptions extends DOMComponentOptions {
        /** A string value specifying the available scrolling directions. */
        direction?: string;
        /** A Boolean value specifying whether or not the widget can respond to user interaction. */
        disabled?: boolean;
        /** A handler for the scroll event. */
        onScroll?: Function;
        scrollAction?: Function;
        /** Specifies when the widget shows the scrollbar. */
        showScrollbar?: string;
        /** A handler for the update event. */
        onUpdated?: Function;
        updateAction?: Function;
        /** Indicates whether to use native or simulated scrolling. */
        useNative?: boolean;
    }
    /** A widget used to display scrollable content. */
    export class dxScrollable extends DOMComponent {
        constructor(element: JQuery, options?: dxScrollableOptions);
        constructor(element: Element, options?: dxScrollableOptions);
        /** Returns the height of the scrollable widget in pixels. */
        clientHeight(): number;
        /** Returns the width of the scrollable widget in pixels. */
        clientWidth(): number;
        /** An HTML element of the widget. */
        content(): JQuery;
        /** Scrolls the widget content by the specified number of pixels. */
        scrollBy(distance: number): void;
        /** Scrolls widget content by the specified number of pixels in horizontal and vertical directions. */
        scrollBy(distanceObject: dxScrollableLocation): void;
        /** Returns the height of the scrollable content in pixels. */
        scrollHeight(): number;
        /** Returns the current scroll position against the leftmost position. */
        scrollLeft(): number;
        /** Returns how far the scrollable content is scrolled from the top and from the left. */
        scrollOffset(): dxScrollableLocation;
        /** Scrolls widget content to the specified position. */
        scrollTo(targetLocation: number): void;
        /** Scrolls widget content to a specified position. */
        scrollTo(targetLocation: dxScrollableLocation): void;
        /** Scrolls widget content to the specified element. */
        scrollToElement(element: Element): void;
        /** Returns the current scroll position against the topmost position. */
        scrollTop(): number;
        /** Returns the width of the scrollable content in pixels. */
        scrollWidth(): number;
        /** Updates the dimensions of the scrollable contents. */
        update(): void;
    }
    export interface dxRadioGroupOptions extends CollectionWidgetOptions {
        /** Specifies the radio group layout. */
        layout?: string;
    }
    /** A widget that enables a user to select one item within a list of items represented by radio buttons. */
    export class dxRadioGroup extends CollectionWidget {
        constructor(element: JQuery, options?: dxRadioGroupOptions);
        constructor(element: Element, options?: dxRadioGroupOptions);
    }
    export interface dxPopupOptions extends dxOverlayOptions {
        animation?: fx.AnimationOptions;
        /** Specifies whether or not to allow a user to drag the popup window. */
        dragEnabled?: boolean;
        /** A Boolean value specifying whether or not to display the widget in full-screen mode. */
        fullScreen?: boolean;
        position?: PositionOptions;
        /** A Boolean value specifying whether or not to display the title in the overlay window. */
        showTitle?: boolean;
        /** The title in the overlay window. */
        title?: string;
        /** A template to be used for rendering the widget title. */
        titleTemplate?: any;
        width?: any;
        /** Specifies items displayed on the top or bottom toolbar of the popup window. */
        buttons?: Array<any>;
        /** A handler for the titleRendered event. */
        onTitleRendered?: Function;
    }
    /** A widget that displays required content in a popup window. */
    export class dxPopup extends dxOverlay {
        constructor(element: JQuery, options?: dxPopupOptions);
        constructor(element: Element, options?: dxPopupOptions);
    }
    export interface dxPopoverOptions extends dxPopupOptions {
        /** An object defining animation options of the widget. */
        animation?: fx.AnimationOptions;
        /** Specifies the height of the widget. */
        height?: any;
        /** An object defining widget positioning options. */
        position?: PositionOptions;
        shading?: boolean;
        /** A Boolean value specifying whether or not to display the title in the overlay window. */
        showTitle?: boolean;
        /** The target element associated with a popover. */
        target?: any;
        /** Specifies the width of the widget. */
        width?: any;
    }
    /** A widget that displays the required content in a popup window. */
    export class dxPopover extends dxPopup {
        constructor(element: JQuery, options?: dxPopoverOptions);
        constructor(element: Element, options?: dxPopoverOptions);
    }
    export interface dxOverlayOptions extends WidgetOptions {
        /** An object that defines the animation options of the widget. */
        animation?: fx.AnimationOptions;
        /** A Boolean value specifying whether or not the widget is closed if a user presses the Back hardware button. */
        closeOnBackButton?: boolean;
        /** A Boolean value specifying whether or not the widget is closed if a user clicks outside of the overlapping window. */
        closeOnOutsideClick?: any;
        /** A template to be used for rendering widget content. */
        contentTemplate?: any;
        /** Specifies whether widget content is rendered when the widget is shown or when rendering the widget. */
        deferRendering?: boolean;
        /** Specifies whether or not an end-user can drag the widget. */
        dragEnabled?: boolean;
        /** The height of the widget in pixels. */
        height?: any;
        /** A handler for the hidden event. */
        onHidden?: Function;
        hiddenAction?: Function;
        /** A handler for the hiding event. */
        onHiding?: Function;
        hidingAction?: Function;
        /** An object defining widget positioning options. */
        position?: PositionOptions;
        /** A Boolean value specifying whether or not the main screen is inactive while the widget is active. */
        shading?: boolean;
        /** Specifies the shading color. */
        shadingColor?: string;
        /** A handler for the showing event. */
        onShowing?: Function;
        showingAction?: Function;
        /** A handler for the shown event. */
        onShown?: Function;
        shownAction?: Function;
        /** A Boolean value specifying whether or not the widget is visible. */
        visible?: boolean;
        /** The widget width in pixels. */
        width?: any;
    }
    /** A widget displaying the required content in an overlay window. */
    export class dxOverlay extends Widget {
        constructor(element: JQuery, options?: dxOverlayOptions);
        constructor(element: Element, options?: dxOverlayOptions);
        /** An HTML element of the widget. */
        content(): JQuery;
        /** Hides the widget. */
        hide(): JQueryPromise<void>;
        /** Recalculates the overlay's size and position. */
        repaint(): void;
        /** Shows the widget. */
        show(): JQueryPromise<void>;
        /** Toggles the visibility of the widget. */
        toggle(showing: boolean): JQueryPromise<void>;
    }
    export interface dxNumberBoxOptions extends dxTextEditorOptions {
        /** The maximum value accepted by the number box. */
        max?: number;
        /** The minimum value accepted by the number box. */
        min?: number;
        /** Specifies whether to show spin buttons. */
        showSpinButtons?: boolean;
        useTouchSpinButtons?: boolean;
        /** Specifies by which value the widget value changes when a spin button is clicked. */
        step?: number;
        /** The current number box value. */
        value?: number;
    }
    /** A textbox widget that enables a user to enter numeric values. */
    export class dxNumberBox extends dxTextEditor {
        constructor(element: JQuery, options?: dxNumberBoxOptions);
        constructor(element: Element, options?: dxNumberBoxOptions);
    }
    export interface dxNavBarOptions extends dxTabsOptions { }
    /** A widget that contains items used to navigate through application views. */
    export class dxNavBar extends dxTabs {
        constructor(element: JQuery, options?: dxNavBarOptions);
        constructor(element: Element, options?: dxNavBarOptions);
    }
    export interface dxMultiViewOptions extends CollectionWidgetOptions {
        /** Specifies whether or not to animate the displayed item change. */
        animationEnabled?: boolean;
        /** A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped. */
        loop?: boolean;
        /** The index of the currently displayed item. */
        selectedIndex?: number;
        /** A Boolean value specifying whether or not to allow users to change the selected index by swiping. */
        swipeEnabled?: boolean;
    }
    /** A widget used to display a view and to switch between several views. */
    export class dxMultiView extends CollectionWidget {
        constructor(element: JQuery, options?: dxMultiViewOptions);
        constructor(element: Element, options?: dxMultiViewOptions);
    }
    export interface dxMapOptions extends WidgetOptions {
        /** Specifies whether or not the widget automatically adjusts center and zoom option values when adding a new marker or route. */
        autoAdjust?: boolean;
        bounds?: {
            northEast?: {
                lat?: number;
                lng?: number;
            };
            southWest?: {
                lat?: number;
                lng?: number;
            };
            /** An object, a string, or an array specifying the location displayed at the center of the widget. */
            center?: {
                /** The latitude location displayed in the center of the widget. */
                lat?: number;
                /** The longitude location displayed in the center of the widget. */
                lng?: number;
            };
            /** A handler for the click event. */
            onClick?: any;
            clickAction?: any;
            /** Specifies whether or not map widget controls are available. */
            controls?: boolean;
            /** Specifies the height of the widget. */
            height?: number;
            /** A key used to authenticate the application within the required map provider. */
            key?: {
                /** A key used to authenticate the application within the "Bing" map provider. */
                bing?: string;
                /** A key used to authenticate the application within the "Google" map provider. */
                google?: string;
                /** A key used to authenticate the application within the "Google Static" map provider. */
                googleStatic?: string;
            }
            /**
             * An object, a string, or an array specifying the location displayed at the center of the widget.
             * @deprecated Use the 'center' option instead
             */
            location?: {
                lat?: number;
                lng?: number;
            };
            /** A handler for the markerAdded event. */
            onMarkerAdded?: Function;
            markerAddedAction?: Function;
            /** A URL pointing to the custom icon to be used for map markers. */
            markerIconSrc?: string;
            /** A handler for the markerRemoved event. */
            onMarkerRemoved?: Function;
            markerRemovedAction?: Function;
            /** An array of markers displayed on a map. */
            markers?: Array<any>;
            /** The name of the current map data provider. */
            provider?: string;
            /** A handler for the ready event. */
            onReady?: Function;
            readyAction?: Function;
            /** A handler for the routeAdded event. */
            onRouteAdded?: Function;
            routeAddedAction?: Function;
            /** A handler for the routeRemoved event. */
            onRouteRemoved?: Function;
            routeRemovedAction?: Function;
            /** An array of routes shown on the map. */
            routes?: Array<any>;
            /** The type of a map to display. */
            type?: string;
            /** Specifies the width of the widget. */
            width?: number;
            /** The zoom level of the map. */
            zoom?: number;
            /** Adds a marker to the map. */
            addMarker(markerOptions: Object): JQueryPromise<Object>;
            /** Adds a route to the map. */
            addRoute(options: Object): JQueryPromise<Object>;
            /** Removes a marker from the map. */
            removeMarker(marker: Object): JQueryPromise<void>;
            /** Removes a route from the map. */
            removeRoute(route: any): JQueryPromise<void>;
        };
    }
    /** An interactive map widget. */
    export class dxMap extends Widget {
        constructor(element: JQuery, options?: dxMapOptions);
        constructor(element: Element, options?: dxMapOptions);
    }
    export interface dxLookupOptions extends dxDropDownListOptions {
        /** An object defining widget animation options. */
        animation?: fx.AnimationOptions;
        autoPagingEnabled?: boolean;
        /** The text displayed on the Cancel button. */
        cancelButtonText?: string;
        /** The text displayed on the Clear button. */
        clearButtonText?: string;
        /** A Boolean value specifying whether or not the widget is closed if a user clicks outside of the overlaying window. */
        closeOnOutsideClick?: any;
        /** The text displayed on the Done button. */
        doneButtonText?: string;
        /** A Boolean value specifying whether or not to display the lookup in full-screen mode. */
        fullScreen?: boolean;
        /** A Boolean value specifying whether or not to group widget items. */
        grouped?: boolean;
        groupRender?: any;
        /** The name of the template used to display a group header. */
        groupTemplate?: any;
        /** The text displayed on the button used to load the next page from the data source. */
        nextButtonText?: string;
        /** The text or HTML markup displayed by the widget if there are no items satisfying the specified search condition. */
        noDataText?: string;
        /** A handler for the pageLoading event. */
        onPageLoading?: Function;
        pageLoadingAction?: Function;
        /** Specifies the text shown in the pullDown panel, which is displayed when the widget is scrolled to the bottom. */
        pageLoadingText?: string;
        /** The text displayed by the widget when nothing is selected. */
        placeholder?: string;
        /** The height of the widget popup element. */
        popupHeight?: any;
        /** The width of the widget popup element. */
        popupWidth?: any;
        /** An object defining widget positioning options. */
        position?: PositionOptions;
        /** Specifies the text displayed in the pullDown panel when the widget is pulled below the refresh threshold. */
        pulledDownText?: string;
        /** Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold. */
        pullingDownText?: string;
        /** A handler for the pullRefresh event. */
        onPullRefresh?: Function;
        pullRefreshAction?: Function;
        /** A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture. */
        pullRefreshEnabled?: boolean;
        /** Specifies the text displayed in the pullDown panel while the widget is being refreshed. */
        refreshingText?: string;
        /** A handler for the scroll event. */
        onScroll?: Function;
        scrollAction?: Function;
        /** A Boolean value specifying whether or not the search bar is visible. */
        searchEnabled?: boolean;
        /** The text that is provided as a hint in the lookup's search bar. */
        searchPlaceholder?: string;
        /** A Boolean value specifying whether or not the main screen is inactive while the lookup is active. */
        shading?: boolean;
        /** Specifies whether to display the Cancel button in the lookup window. */
        showCancelButton?: boolean;
        /** Specifies whether to display the Done button in the lookup window. */
        showDoneButton?: boolean;
        /** A Boolean value specifying whether the widget loads the next page automatically when you reach the bottom of the list or when a button is clicked. */
        showNextButton?: boolean;
        /** The title of the lookup window. */
        title?: string;
        /** A template to be used for rendering the widget title. */
        titleTemplate?: any;
        /** Specifies whether or not the widget uses native scrolling. */
        useNativeScrolling?: boolean;
        /** Specifies whether or not to show lookup contents in a dxPopover widget. */
        usePopover?: boolean;
        /** A handler for the valueChanged event. */
        onValueChanged?: Function;
        contentReadyAction?: Function;
        onContentReady?: Function;
        titleRender?: any;
        /** A handler for the titleRendered event. */
        onTitleRendered?: Function;
    }
    /** A widget that allows a user to select predefined values from a lookup window. */
    export class dxLookup extends dxDropDownList {
        constructor(element: JQuery, options?: dxLookupOptions);
        constructor(element: Element, options?: dxLookupOptions);
        /** This section lists the data source fields that are used in a default template for lookup drop-down items. */
    }
    export interface dxLoadPanelOptions extends dxOverlayOptions {
        /** An object defining the animation options of the widget. */
        animation?: fx.AnimationOptions;
        /** The delay in milliseconds after which the load panel is displayed. */
        delay?: number;
        /** The height of the widget. */
        height?: number;
        /** A URL pointing to an image to be used as a load indicator. */
        indicatorSrc?: string;
        /** The text displayed in the load panel. */
        message?: string;
        /** A Boolean value specifying whether or not to show a load indicator. */
        showIndicator?: boolean;
        /** A Boolean value specifying whether or not to show the pane behind the load indicator. */
        showPane?: boolean;
        /** The width of the widget. */
        width?: number;
    }
    /** A widget used to indicate whether or not an element is loading. */
    export class dxLoadPanel extends dxOverlay {
        constructor(element: JQuery, options?: dxLoadPanelOptions);
        constructor(element: Element, options?: dxLoadPanelOptions);
    }
    export interface dxLoadIndicatorOptions extends WidgetOptions {
        /** Specifies the path to an image used as the indicator. */
        indicatorSrc?: string;
    }
    /** The widget used to indicate the loading process. */
    export class dxLoadIndicator extends Widget {
        constructor(element: JQuery, options?: dxLoadIndicatorOptions);
        constructor(element: Element, options?: dxLoadIndicatorOptions);
    }
    export interface dxListOptions extends CollectionWidgetOptions {
        /** A Boolean value specifying whether or not to load the next page from the data source when the list is scrolled to the bottom. */
        autoPagingEnabled?: boolean;
        /** Specifies whether or not the widget displays items by pages. */
        pagingEnabled?: boolean;
        /** An object used to set configuration options for the dxList's edit mode. */
        editConfig?: {
            /** Specifies whether the list items can be deleted. */
            deleteEnabled?: boolean;
            /**
             * A mode specifying how to delete a list item.
             * @deprecated Use the "deleteType" option instead.
             */
            deleteMode?: string;
            /** Specifies the way a user can delete items from the list. */
            deleteType?: string;
            itemRender?: any;
            /** The template used to render list items in edit mode. */
            itemTemplate?: any;
            /** Specifies the array of items for a context menu called for a list item. */
            menuItems?: Array<any>;
            /** Specifies whether an item context menu is shown when a user swipes or holds an item. */
            menuType?: string;
            /** Specifies whether or not a user can reorder items. */
            reorderEnabled?: boolean;
            /** Specifies whether the list items can be selected. */
            selectionEnabled?: boolean;
            /**
             * A mode specifying how to select a list item.
             * @deprecated Use the "selectionType" option instead.
             */
            selectionMode?: string;
            /** A type specifying how to select a list item. */
            selectionType?: string;
            /** Specifies whether the item list represented by this widget is editable. */
            editEnabled?: boolean;
            /** Specifies whether or not to show the load panel during data loading. */
            indicateLoading?: boolean;
        };
        /** A Boolean value specifying whether or not to display a grouped list. */
        grouped?: boolean;
        groupRender?: any;
        /** The name of the template used to display a group header. */
        groupTemplate?: any;
        /** A handler for the itemDeleted event. */
        onItemDeleted?: Function;
        itemDeleteAction?: Function;
        /** A handler for the itemReordered event. */
        onItemReordered?: Function;
        itemReorderAction?: Function;
        /** A handler for the itemClick event. */
        onItemClick?: any;
        /** A handler for the itemSwipe event. */
        onItemSwipe?: Function;
        itemSwipeAction?: Function;
        /** The text displayed on the button used to load the next page from the data source. */
        nextButtonText?: string;
        /** A handler for the pageLoading event. */
        onPageLoading?: Function;
        pageLoadingAction?: Function;
        /** Specifies the text shown in the pullDown panel, which is displayed when the list is scrolled to the bottom. */
        pageLoadingText?: string;
        /** Specifies the text displayed in the pullDown panel when the list is pulled below the refresh threshold. */
        pulledDownText?: string;
        /** Specifies the text shown in the pullDown panel while the list is being pulled down to the refresh threshold. */
        pullingDownText?: string;
        /** A handler for the pullRefresh event. */
        onPullRefresh?: Function;
        pullRefreshAction?: Function;
        /** A Boolean value specifying whether or not the widget supports the "pull down to refresh" gesture. */
        pullRefreshEnabled?: boolean;
        /** Specifies the text displayed in the pullDown panel while the list is being refreshed. */
        refreshingText?: string;
        /** A handler for the scroll event. */
        onScroll?: Function;
        scrollAction?: Function;
        /** A Boolean value specifying whether to enable or disable list scrolling. */
        scrollingEnabled?: boolean;
        /** Specifies whether the list supports single item selection or multi-selection. */
        selectionMode?: string;
        /** A Boolean value specifying whether the widget loads the next page automatically when you reach the bottom of the list or when a button is clicked. */
        showNextButton?: boolean;
        /** A Boolean value specifying if the widget scrollbar is visible. */
        showScrollbar?: boolean;
        /** Specifies whether or not the widget uses native scrolling. */
        useNativeScrolling?: boolean;
        itemUnselectAction?: Function;
        onItemContextMenu?: Function;
        onItemHold?: Function;
        /** Specifies whether or not an end-user can collapse groups. */
        collapsibleGroups?: boolean;
    }
    /** A list widget. */
    export class dxList extends CollectionWidget {
        constructor(element: JQuery, options?: dxListOptions);
        constructor(element: Element, options?: dxListOptions);
        /** Returns the height of the widget in pixels. */
        clientHeight(): number;
        /** Removes the specified item from the list. */
        deleteItem(itemIndex: any): JQueryPromise<void>;
        /** Removes the specified item from the list. */
        deleteItem(itemElement: Element): JQueryPromise<void>;
        /** Returns a Boolean value that indicates whether or not the specified item is selected. */
        isItemSelected(itemIndex: any): boolean;
        /** Returns a Boolean value that indicates whether or not the specified item is selected. */
        isItemSelected(itemElement: Element): boolean;
        /**
         * Reloads list data.
         * @deprecated Use the "reload" method instead.
         */
        refresh(): void;
        /** Reloads list data. */
        reload(): void;
        /** Moves the specified item to the specified position in the list. */
        reorderItem(itemElement: Element, toItemElement: Element): JQueryPromise<void>;
        /** Moves the specified item to the specified position in the list. */
        reorderItem(itemIndex: any, toItemIndex: any): JQueryPromise<void>;
        /** Scrolls the list content by the specified number of pixels. */
        scrollBy(distance: number): void;
        /** Returns the height of the list content in pixels. */
        scrollHeight(): number;
        /** Scrolls list content to the specified position. */
        scrollTo(location: number): void;
        /** Scrolls the list to the specified item. */
        scrollToItem(itemElement: Element): void;
        /** Scrolls the list to the specified item. */
        scrollToItem(itemIndex: any): void;
        /** Returns how far the list content is scrolled from the top. */
        scrollTop(): number;
        /** Selects the specified item from the list. */
        selectItem(itemElement: Element): void;
        /** Selects the specified item from the list. */
        selectItem(itemIndex: any): void;
        /** Deselects the specified item from the list. */
        unselectItem(itemElement: Element): void;
        /** Unselects the specified item from the list. */
        unselectItem(itemIndex: any): void;
        /**
         * Updates the widget scrollbar according to widget content size.
         * @deprecated Use the "updateDimensions" method instead.
         */
        update(): JQueryPromise<void>;
        /** Updates the widget scrollbar according to widget content size. */
        updateDimensions(): JQueryPromise<void>;
        /** Expands the specified group. */
        expandGroup(groupIndex: number): JQueryPromise<void>;
        /** Collapses the specified group. */
        collapseGroup(groupIndex: number): JQueryPromise<void>;
    }
    export interface dxGalleryOptions extends CollectionWidgetOptions {
        /** The time, in milliseconds, spent on slide animation. */
        animationDuration?: number;
        /** A Boolean value specifying whether or not to allow users to switch between items by clicking an indicator. */
        indicatorEnabled?: boolean;
        /** A Boolean value specifying whether or not to scroll back to the first item after the last item is swiped. */
        loop?: boolean;
        /** The index of the currently active gallery item. */
        selectedIndex?: number;
        /** A Boolean value specifying whether or not to display an indicator that points to the selected gallery item. */
        showIndicator?: boolean;
        /** A Boolean value that specifies the availability of the "Forward" and "Back" navigation buttons. */
        showNavButtons?: boolean;
        /** The time interval in milliseconds, after which the gallery switches to the next item. */
        slideshowDelay?: number;
        /** A Boolean value specifying whether or not to allow users to switch between items by swiping. */
        swipeEnabled?: boolean;
    }
    /** An image gallery widget. */
    export class dxGallery extends CollectionWidget {
        constructor(element: JQuery, options?: dxGalleryOptions);
        constructor(element: Element, options?: dxGalleryOptions);
        /** Shows the specified gallery item. */
        goToItem(itemIndex: number, animation: boolean): JQueryPromise<any>;
        /** Shows the next gallery item. */
        nextItem(animation: boolean): JQueryPromise<any>;
        /** Shows the previous gallery item. */
        prevItem(animation: boolean): JQueryPromise<any>;
    }
    export interface dxDropDownEditorOptions extends dxTextBoxOptions {
        /** A handler for the closed event. */
        onClosed?: Function;
        /** A handler for the opened event. */
        onOpened?: Function;
        /** Specifies whether or not the drop-down window is displayed. */
        opened?: boolean;
        closeAction?: Function;
        openAction?: Function;
        shownAction?: Function;
        hiddenAction?: Function;
    }
    /** A drop-down editor widget. */
    export class dxDropDownEditor extends dxTextBox {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
        /** Closes the drop-down editor. */
        close(): void;
        /** Opens the drop-down editor. */
        open(): void;
    }
    export interface dxDateBoxOptions extends dxTextEditorOptions {
        /** A dxCalendar configuration object used to initialize the drop-down calendar. */
        calendarOptions?: dxCalendarOptions;
        /** Specifies whether or not to close the drop-down calendar when widget value has been changed. */
        closeOnValueChange?: boolean;
        /** A format used to display date/time information. */
        format?: string;
        /** A Globalize format string specifying the date display format. */
        formatString?: string;
        /** The last date that can be selected within the widget. */
        max?: Date;
        /** The minimum date that can be selected within the widget. */
        min?: Date;
        /** The text displayed by the widget when the widget value is not yet specified. This text is also used as a title of the date picker. */
        placeholder?: string;
        /** Specifies whether or not a user can pick out a date via the drop-down calendar. */
        useCalendar?: boolean;
        /** A Date object specifying the date and time currently selected using the date box. */
        value?: Date;
        /** Specifies whether or not the widget uses the native HTML input element. */
        useNative?: boolean;
        /** Specifies the interval between neighboring values in the popup list in minutes. */
        interval?: number;
    }
    /** A date box widget. */
    export class dxDateBox extends dxTextEditor {
        constructor(element: JQuery, options?: dxDateBoxOptions);
        constructor(element: Element, options?: dxDateBoxOptions);
    }
    export interface dxCheckBoxOptions extends EditorOptions {
        checked?: boolean;
        /** Specifies the widget state. */
        value?: boolean;
        /** Specifies the text displayed by the check box. */
        text?: string;
    }
    /** A check box widget. */
    export class dxCheckBox extends Editor {
        constructor(element: JQuery, options?: dxCheckBoxOptions);
        constructor(element: Element, options?: dxCheckBoxOptions);
    }
    export interface dxCalendarOptions extends EditorOptions {
        /** Specifies a date displayed on the current calendar page. */
        currentDate?: Date;
        /** Specifies the first day of a week. */
        firstDayOfWeek?: number;
        /** The latest date the widget allows to select. */
        max?: Date;
        /** The earliest date the widget allows to select. */
        min?: Date;
    }
    /** A calendar widget. */
    export class dxCalendar extends Editor {
        constructor(element: JQuery, options?: dxCalendarOptions);
        constructor(element: Element, options?: dxCalendarOptions);
    }
    export interface dxButtonOptions extends WidgetOptions {
        /** A handler for the click event. */
        onClick?: any;
        clickAction?: any;
        /** The name of an icon to be displayed on the button. */
        icon?: string;
        /** A URL pointing to the image to be displayed on the button. */
        iconSrc?: string;
        /** The text displayed on the button. */
        text?: string;
        /** Specifies the button type. */
        type?: string;
        /** Specifies the name of the validation group to be accessed in the click event handler. */
        validationGroup?: string;
    }
    /** A button widget. */
    export class dxButton extends Widget {
        constructor(element: JQuery, options?: dxButtonOptions);
        constructor(element: Element, options?: dxButtonOptions);
    }
    export interface dxBoxOptions extends CollectionWidget {
        /** Specifies how widget items are aligned along the main direction. */
        align?: string;
        /** Specifies the direction of item positioning in the widget. */
        direction?: string;
        /** Specifies how widget items are aligned cross-wise. */
        crossAlign?: string;
    }
    /** A container widget used to arrange inner elements. */
    export class dxBox extends CollectionWidget {
        constructor(element: JQuery, options?: dxBoxOptions);
        constructor(element: Element, options?: dxBoxOptions);
    }
    export interface dxResponsiveBoxOptions extends CollectionWidgetOptions {
        /** Specifies the collection of rows for the grid used to position layout elements. */
        rows?: Array<Object>;
        /** Specifies the collection of columns for the grid used to position layout elements. */
        cols?: Array<Object>;
        /** Specifies the function returning the screen factor depending on the screen width. */
        screenByWidth?: (width: number) => string;
        /** Specifies the screen factor with which all elements are located in a single column. */
        singleColumnScreen?: string;
    }
    /** A widget used to build an adaptive markup dependent on screen resolution. */
    export class dxResponsiveBox extends CollectionWidget {
        constructor(element: JQuery, options?: dxBoxOptions);
        constructor(element: Element, options?: dxBoxOptions);
    }
    export interface dxAutocompleteOptions extends dxDropDownListOptions {
        /** The minimum number of characters that must be entered into the text box to begin a search. */
        minSearchLength?: number;
        /** Specifies the maximum count of items displayed by the widget. */
        maxItemCount?: number;
        /** Specifies the currently selected item. */
        selectedItem?: Object;
    }
    /** A textbox widget that supports autocompletion. */
    export class dxAutocomplete extends dxDropDownList {
        constructor(element: JQuery, options?: dxAutocompleteOptions);
        constructor(element: Element, options?: dxAutocompleteOptions);
        /** Opens the drop-down editor. */
        open(): void;
        /** Closes the drop-down editor. */
        close(): void;
    }
    export interface dxAccordionOptions extends CollectionWidgetOptions {
        /** A number specifying the time in milliseconds spent on the animation of the expanding or collapsing of a panel. */
        animationDuration?: number;
        /** Specifies the height of the widget. */
        height?: any;
        /** Specifies whether all items can be collapsed or whether at least one item must always be expanded. */
        collapsible?: boolean;
        /** Specifies whether the widget can expand several items or only a single item at once. */
        multiple?: boolean;
        /** The template to be used for rendering dxAccordion items. */
        itemTemplate?: any;
        /** A handler for the itemTitleClick event. */
        onItemTitleClick?: any;
        /** A handler for the itemTitleHold event. */
        onItemTitleHold?: Function;
        /** The template to be used for rendering an item title. */
        itemTitleTemplate?: any;
        /** The index number of the currently selected item. */
        selectedIndex?: number;
    }
    /** A widget that displays data source items on collapsible panels. */
    export class dxAccordion extends CollectionWidget {
        constructor(element: JQuery, options?: dxAccordionOptions);
        constructor(element: Element, options?: dxAccordionOptions);
        /** Collapses the specified item. */
        collapseItem(index: number): JQueryPromise<dxAccordion>;
        /** Expands the specified item. */
        expandItem(index: number): JQueryPromise<dxAccordion>;
    }
    export interface dxFileUploaderFile {
        /** Specifies the selected file name. */
        name?: string;
        /** Specifies the selected file size in bytes. */
        size?: number;
        /** Specifies the MIME type of the selected file. */
        type?: string;
        /** Specifies the date and time of the last selected file modification. */
        lastModifiedDate?: Date;
    }
    export interface dxFileUploaderOptions extends EditorOptions {
        /** An object that holds the selected file data. */
        value?: dxFileUploaderFile;
        /** Holds data of the files selected in the widget. */
        values?: Array<dxFileUploaderFile>;
        /** Specifies the text displayed on the button opening the file selection dialog. */
        buttonText?: string;
        /** Specifies the text displayed on the area to which an end-user can drop a file. */
        labelText?: string;
        /** Specifies the value passed to the name attribute of the underlying input element. */
        name?: string;
        /** Specifies whether the widget enables an end-user to select a single file or multiple files. */
        multiple?: boolean;
        /** Specifies a file type or several types accepted by the widget. */
        accept?: string;
    }
    /** A widget used to select and upload a file or multiple files. */
    export class dxFileUploader extends Editor {
        constructor(element: JQuery, options?: dxFileUploaderOptions);
        constructor(element: Element, options?: dxFileUploaderOptions);
    }
    export interface dxTrackBarOptions extends EditorOptions {
        /** The minimum value the widget can accept. */
        min?: number;
        /** The maximum value the widget can accept. */
        max?: number;
        /** The current widget value. */
        value?: number;
    }
    /** A base class for track bar widgets. */
    export class dxTrackBar extends Editor {
        constructor(element: JQuery, options?: dxTrackBarOptions);
        constructor(element: Element, options?: dxTrackBarOptions);
    }
    export interface dxProgressBarOptions extends dxTrackBarOptions {
        /** Specifies a format for the progress status. */
        statusFormat?: any;
        /** Specifies whether or not the widget displays a progress status. */
        showStatus?: boolean;
        /** A handler for the complete event. */
        onComplete?: Function;
    }
    /** A widget used to indicate a progress. */
    export class dxProgressBar extends dxTrackBar {
        constructor(element: JQuery, options?: dxProgressBarOptions);
        constructor(element: Element, options?: dxProgressBarOptions);
    }
    export interface dxSliderOptions extends dxTrackBarOptions {
        /** The slider step size. */
        step?: number;
        /** The current slider value. */
        value?: number;
        /** Specifies whether or not to highlight a range selected within the widget. */
        showRange?: boolean;
        /** Specifies options for the slider tooltip. */
        tooltip?: {
            /** Specifies whether or not the tooltip is enabled. */
            enabled?: boolean;
            /** Specifies format for the tooltip. */
            format?: any;
            /** Specifies whether the tooltip is located over or under the slider. */
            position?: string;
            /** Specifies whether the widget always shows a tooltip or only when a pointer is over the slider. */
            showMode?: string;
        };
        /** Specifies options for labels displayed at the min and max values. */
        label?: {
            /** Specifies whether or not slider labels are visible. */
            visible?: boolean;
            /** Specifies whether labels are located over or under the scale. */
            position?: string;
            /** Specifies a format for labels. */
            format?: any;
        };
    }
    /** A widget that allows a user to select a numeric value within a given range. */
    export class dxSlider extends dxTrackBar {
        constructor(element: JQuery, options?: dxSliderOptions);
        constructor(element: Element, options?: dxSliderOptions);
    }
    export interface dxRangeSliderOptions extends dxSliderOptions {
        /** The left edge of the interval currently selected using the range slider. */
        start?: number;
        /** The right edge of the interval currently selected using the range slider. */
        end?: number;
    }
    /** A widget that enables a user to select a range of numeric values. */
    export class dxRangeSlider extends dxSlider {
        constructor(element: JQuery, options?: dxRangeSliderOptions);
        constructor(element: Element, options?: dxRangeSliderOptions);
    }
    export interface dxTileViewOptions extends CollectionWidgetOptions {
        /** Specifies the height of the base tile view item. */
        baseItemHeight?: number;
        /** Specifies the width of the base tile view item. */
        baseItemWidth?: number;
        /** Specifies the height of the widget. */
        height?: any;
        /** Specifies the distance in pixels between adjacent tiles. */
        itemMargin?: number;
        listHeight?: any;
        /** A Boolean value specifying whether or not to display a scrollbar. */
        showScrollbar?: boolean;
    }
    /** A widget displaying several blocks of data as tiles. */
    export class dxTileView extends CollectionWidget {
        constructor(element: JQuery, options?: dxTileViewOptions);
        constructor(element: Element, options?: dxTileViewOptions);
        /** Returns the current scroll position of the widget content. */
        scrollPosition(): number;
    }
    export interface dxSwitchOptions extends EditorOptions {
        /** Text displayed when the widget is in a disabled state. */
        offText?: string;
        /** Text displayed when the widget is in an enabled state. */
        onText?: string;
        /** A Boolean value specifying whether the current switch state is "On" or "Off". */
        value?: boolean;
    }
    /** A switch widget. */
    export class dxSwitch extends Editor {
        constructor(element: JQuery, options?: dxSwitchOptions);
        constructor(element: Element, options?: dxSwitchOptions);
    }
    export interface dxSlideoutOptions extends CollectionWidgetOptions {
        /** A Boolean value specifying whether or not the widget changes its state when interacting with a user. */
        activeStateEnabled?: boolean;
        /** A Boolean value specifying whether or not to display a grouped menu. */
        menuGrouped?: boolean;
        menuGroupRender?: any;
        /** The name of the template used to display a group header. */
        menuGroupTemplate?: any;
        menuItemRender?: any;
        /** The template used to render menu items. */
        menuItemTemplate?: any;
        /** Specifies whether or not the slide-out menu is displayed. */
        menuVisible?: boolean;
        /** Indicates whether the menu can be shown/hidden by swiping the widget's main panel. */
        swipeEnabled?: boolean;
    }
    /** The dxSlideOut widget allows you to slide-out the current view to reveal an item list. */
    export class dxSlideOut extends CollectionWidget {
        constructor(element: JQuery, options?: dxSlideoutOptions);
        constructor(element: Element, options?: dxSlideoutOptions);
        /** Hides the widget's slide-out menu. */
        hideMenu(): JQueryPromise<void>;
        /** Displays the widget's slide-out menu. */
        showMenu(): JQueryPromise<void>;
        /** Toggles the visibility of the widget's slide-out menu. */
        toggleMenuVisibility(showing: boolean): JQueryPromise<void>;
    }
    export interface dxPivotOptions extends CollectionWidgetOptions {
        /** The index of the currently active pivot item. */
        selectedIndex?: number;
    }
    /** A widget that is similar to a traditional tab control, but optimized for the phone with simplified end-user interaction. */
    export class dxPivot extends CollectionWidget {
        constructor(element: JQuery, options?: dxPivotOptions);
        constructor(element: Element, options?: dxPivotOptions);
    }
    export interface dxPanoramaOptions extends CollectionWidgetOptions {
        /** An object exposing options for setting a background image for the panorama. */
        backgroundImage?: {
            /** Specifies the height of the panorama's background image. */
            height?: number;
            /** Specifies the URL of the image that is used as the panorama's background image. */
            url?: string;
            /** Specifies the width of the panorama's background image. */
            width?: number;
        };
        /** The index of the currently active panorama item. */
        selectedIndex?: number;
        /** Specifies the widget content title. */
        title?: string;
    }
    /** A widget displaying the required content in a long horizontal canvas that extends beyond the frames of the screen. */
    export class dxPanorama extends CollectionWidget {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
    }
    export interface dxDropDownMenuOptions extends WidgetOptions {
        /** A handler for the buttonClick event. */
        onButtonClick?: any;
        buttonClickAction?: any;
        /** The name of the icon to be displayed by the DropDownMenu button. */
        buttonIcon?: string;
        /** A URL pointing to the image to be displayed by the DropDownMenu button. */
        buttonIconSrc?: string;
        /** The text displayed in the DropDownMenu button. */
        buttonText?: string;
        /** A data source used to fetch data to be displayed by the widget. */
        dataSource?: any;
        /** A handler for the itemClick event. */
        onItemClick?: any;
        itemClickAction?: any;
        itemRender?: any;
        /** An array of items displayed by the widget. */
        items?: Array<any>;
        /** The template to be used for rendering items. */
        itemTemplate?: any;
        /** Specifies whether or not to show the drop down menu within a dxPopover widget. */
        usePopover?: boolean;
        /** The width of the menu popup in pixels. */
        popupWidth?: any;
        /** The height of the menu popup in pixels. */
        popupHeight?: any;
    }
    /** A drop-down menu widget. */
    export class dxDropDownMenu extends Widget {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
        /** This section lists the data source fields that are used in a default template for drop-down menu items. */
    }
    export interface dxActionSheetOptions extends CollectionWidgetOptions {
        cancelClickAction?: any;
        /** A handler for the cancelClick event. */
        onCancelClick?: any;
        /** The text displayed in the button that closes the action sheet. */
        cancelText?: string;
        /** Specifies whether to display the Cancel button in action sheet. */
        showCancelButton?: boolean;
        /** A Boolean value specifying whether or not the title of the action sheet is visible. */
        showTitle?: boolean;
        /** Specifies the element the action sheet popover points at. */
        target?: any;
        /** The title of the action sheet. */
        title?: string;
        /** Specifies whether or not to show the action sheet within a dxPopover widget. */
        usePopover?: boolean;
        /** A Boolean value specifying whether or not the dxActionSheet widget is visible. */
        visible?: boolean;
    }
    /** A widget consisting of a set of choices related to a certain task. */
    export class dxActionSheet extends CollectionWidget {
        constructor(element: JQuery, options?: dxActionSheetOptions);
        constructor(element: Element, options?: dxActionSheetOptions);
        /** Hides the widget. */
        hide(): JQueryPromise<dxActionSheet>;
        /** Shows the widget. */
        show(): JQueryPromise<dxActionSheet>;
        /** Shows or hides the widget depending on the Boolean value passed as the parameter. */
        toggle(showing: boolean): JQueryPromise<dxActionSheet>;
    }
    export interface dxColorBoxOptions extends dxDropDownEditorOptions {
        /** Specifies the text displayed on the button that applies changes and closes the drop-down editor. */
        applyButtonText?: string;
        /** Specifies whether the widget value is updated after the Apply button is clicked or immediately after a color is selected in the palette. */
        applyValueMode?: string;
        /** Specifies the text displayed on the button that cancels changes and closes the drop-down editor. */
        cancelButtonText?: string;
        /** Specifies whether or not the widget value includes the alpha channel component. */
        editAlphaChannel?: boolean;
        /** The color currently selected by the widget. */
        value?: string;
    }
    /** A widget used to specify a color value. */
    export class dxColorBox extends dxDropDownEditor {
        constructor(element: JQuery, options?: dxColorBoxOptions);
        constructor(element: Element, options?: dxColorBoxOptions);
    }
    export interface dxColorPickerOptions extends dxColorBoxOptions { }
    /**
     * A widget used to specify a color value.
     * @deprecated Use the dxColorBox widget instead
     */
    export class dxColorPicker extends dxColorBox {
        constructor(element: JQuery, options?: dxColorPickerOptions);
        constructor(element: Element, options?: dxColorPickerOptions);
    }
    export interface dxTreeViewOptions extends CollectionWidgetOptions {
        /** Specifies whether a nested or plain array is used as a data source. */
        dataStructure?: string;
        /** An array of currently expanded item objects. */
        expandedItems?: Array<any>;
        /** Specifies whether or not a check box is displayed at each tree view item. */
        showCheckBoxes?: boolean;
        /** Specifies whether or not to select nodes recursively. */
        selectNodesRecursive?: boolean;
        /** Specifies whether the "Select All" check box is displayed over the tree view. */
        selectAllEnabled?: boolean;
        /** Specifies the text displayed at the "Select All" check box. */
        selectAllText?: string;
        /** Specifies the name of the data source item field used as a key. */
        keyExpr?: any;
        /** Specifies the name of the data source item field whose value is displayed by the widget. */
        displayExpr?: any;
        /** Specifies the name of the data source item field whose value defines whether or not the corresponding node is selected. */
        selectedExpr?: any;
        /** Specifies the name of the data source item field whose value defines whether or not the corresponding node is expanded. */
        expandedExpr?: any;
        /** Specifies the name of the data source item field that contains an array of nested items. */
        itemsExpr?: any;
        /** Specifies the name of the data source item field that holds the key of the parent item. */
        parentIdExpr?: any;
        /** A string value specifying available scrolling directions. */
        scrollDirection?: string;
        /** A handler for the itemSelected event. */
        onItemSelected?: Function;
        /** A handler for the itemExpanded event. */
        onItemExpanded?: Function;
        /** A handler for the itemCollapsed event. */
        onItemCollapsed?: Function;
    }
    /** A widget displaying specified data items as a tree. */
    export class dxTreeView extends CollectionWidget {
        constructor(element: JQuery, options?: dxTreeViewOptions);
        constructor(element: Element, options?: dxTreeViewOptions);
        /** Updates the tree view scrollbars according to the current size of the widget content. */
        updateDimensions(): JQueryPromise<void>;
        /** Selects the specified item. */
        selectItem(itemElement: any): void;
        /** Unselects the specified item. */
        unselectItem(itemElement: any): void;
        /** Expands the specified item. */
        expandItem(itemElement: any): void;
        /** Collapses the specified item. */
        collapseItem(itemElement: any): void;
        /** Returns all nodes of the tree view. */
        getNodes(): Array<Object>;
    }
    export interface dxMenuBaseOptions extends CollectionWidgetOptions {
        /** An object that defines the animation options of the widget. */
        animation?: fx.AnimationOptions;
        /** A Boolean value specifying whether or not the widget changes its state when interacting with a user. */
        activeStateEnabled?: boolean;
        /** Specifies the name of the CSS class associated with the menu. */
        cssClass?: string;
        /** Holds an array of menu items. */
        items?: Array<any>;
        /** Specifies whether or not an item becomes selected if an end-user clicks it. */
        selectionByClick?: boolean;
        /** Specifies the selection mode supported by the menu. */
        selectionMode?: string;
        /** Specifies the user interaction by which submenus are shown. */
        showSubmenuMode?: string;
    }
    export class dxMenuBase extends CollectionWidget {
        constructor(element: JQuery, options?: dxMenuBaseOptions);
        constructor(element: Element, options?: dxMenuBaseOptions);
        /** Selects the specified item. */
        selectItem(itemElement: any): void;
        /** Unselects the specified item. */
        unselectItem(itemElement: any): void;
    }
    export interface dxMenuOptions extends dxMenuBaseOptions {
        firstSubMenuDirection?: string;
        /** Specifies whether the menu has horizontal or vertical orientation. */
        orientation?: string;
        /** Specifies by which user interaction the first-level submenu is shown. */
        showFirstSubmenuMode?: string;
        showPopupMode?: string;
        /** Specifies by which user interaction secondary-level submenus are shown. */
        showSubmenuMode?: string;
        /** Specifies the direction at which the submenus are displayed. */
        submenuDirection?: string;
        /** A handler for the submenuHidden event. */
        onSubmenuHidden?: Function;
        submenuHiddenAction?: Function;
        /** A handler for the submenuHiding event. */
        onSubmenuHiding?: Function;
        submenuHidingAction?: Function;
        /** A handler for the submenuShowing event. */
        onSubmenuShowing?: Function;
        submenuShowingAction?: Function;
        /** A handler for the submenuShown event. */
        onSubmenuShown?: Function;
        submenuShownAction?: Function;
    }
    /** A menu widget. */
    export class dxMenu extends dxMenuBase {
        constructor(element: JQuery, options?: dxMenuOptions);
        constructor(element: Element, options?: dxMenuOptions);
    }
    export interface dxContextMenuOptions extends dxMenuBaseOptions {
        direction?: string;
        hiddenAction?: Function;
        hidingAction?: Function;
        /** Specifies whether the context menu can be called only from code or by user interaction as well. */
        invokeOnlyFromCode?: boolean;
        /** A handler for the hidden event. */
        onHidden?: Function;
        /** A handler for the hiding event. */
        onHiding?: Function;
        /** A handler for the positioning event. */
        onPositioning?: Function;
        /** A handler for the showing event. */
        onShowing?: Function;
        /** A handler for the shown event. */
        onShown?: Function;
        /** An object defining widget positioning options. */
        position?: PositionOptions;
        positioningAction?: Function;
        showingAction?: Function;
        shownAction?: Function;
        /** Specifies by which user interaction the context menu is shown. */
        showSubmenuMode?: string;
        /** Specifies the direction at which submenus are displayed. */
        submenuDirection?: string;
        /** The target element associated with a popover. */
        target?: any;
        /** A Boolean value specifying whether or not the widget is visible. */
        visible?: boolean;
    }
    /** A context menu widget. */
    export class dxContextMenu extends dxMenuBase {
        constructor(element: JQuery, options?: dxContextMenuOptions);
        constructor(element: Element, options?: dxContextMenuOptions);
    }
    export interface dxRemoteOperations {
        /** Specifies whether or not filtering must be performed on the server side. */
        filtering?: boolean;
        /** Specifies whether or not paging must be performed on the server side. */
        paging?: boolean;
        /** Specifies whether or not sorting must be performed on the server side. */
        sorting?: boolean;
    }
    export interface dxDataGridColumn {
        /** Specifies the content alignment within column cells. */
        alignment?: string;
        /** Specifies whether the values in a column can be edited at runtime. Setting this option makes sense only when editing is enabled for a grid. */
        allowEditing?: boolean;
        /** Specifies whether or not a column can be used for filtering grid records. Setting this option makes sense only when the filter row or search panel is visible. */
        allowFiltering?: boolean;
        /** Specifies whether a column can be used for grouping grid records at runtime. Setting this option makes sense only when the group panel is visible. */
        allowGrouping?: boolean;
        /** Specifies whether or not a column can be hidden by a user. Setting this option makes sense only when the column chooser is visible. */
        allowHiding?: boolean;
        /** Specifies whether or not a particular column can be used in column reordering. Setting this option makes sense only when the allowColumnReordering option is set to true. */
        allowReordering?: boolean;
        /** Specifies whether or not a particular column can be resized by a user. Setting this option makes sense only when the allowColumnResizing option is true. */
        allowResizing?: boolean;
        /** Specifies whether grid records can be sorted by a specific column at runtime. Setting this option makes sense only when the sorting mode differs from none. */
        allowSorting?: boolean;
        /** Specifies whether groups appear expanded or not when records are grouped by a specific column. Setting this option makes sense only when grouping is allowed for this column. */
        autoExpandGroup?: boolean;
        /** Specifies a callback function that returns a value to be displayed in a column cell. */
        calculateCellValue?: (rowData: Object) => string;
        /** Specifies a callback function that defines filters for customary calculated grid cells. */
        calculateFilterExpression?: (filterValue: any, selectedFilterOperation: string) => Array<any>;
        /** Specifies a caption for a column. */
        caption?: string;
        /** Specifies a custom template for grid column cells. */
        cellTemplate?: any;
        /** Specifies a CSS class to be applied to a column. */
        cssClass?: string;
        /** Specifies a callback function that determines grouping values. */
        calculateGroupValue?: (rowData: Object) => string;
        /** Specifies a callback function that returns the text to be displayed in the cells of a column. */
        customizeText?: (cellInfo: { value: any; valueText: string }) => string;
        /** Specifies the field of a data source that provides data for a column. */
        dataField?: string;
        /** Specifies the required type of column values. */
        dataType?: string;
        /** Specifies a custom template for the cell of a grid column when it is in an editing state. */
        editCellTemplate?: any;
        /** Specifies whether HTML tags are displayed as plain text or applied to the values of the column. */
        encodeHtml?: boolean;
        /** In a boolean column, replaces all false items with a specified text. */
        falseText?: string;
        /** Specifies the set of available filter operations. */
        filterOperations?: Array<any>;
        /** Specifies a filter value for a column. */
        filterValue?: any;
        /** Specifies a format for the values displayed in a column. */
        format?: string;
        /** Specifies a custom template for the group cell of a grid column. */
        groupCellTemplate?: any;
        /** Specifies the index of a column when grid records are grouped by the values of this column. */
        groupIndex?: number;
        /** Specifies a custom template for the header of a grid column. */
        headerCellTemplate?: any;
        /** Specifies options of a lookup column. */
        lookup?: {
            /** Specifies whether or not a user can nullify values of a lookup column. */
            allowClearing?: boolean;
            /** 
Specifies the data source providing data for a lookup column.
 */
            dataSource?: any;
            /** Specifies the expression defining the data source field whose values must be displayed. */
            displayExpr?: any;
            /** Specifies the expression defining the data source field whose values must be replaced. */
            valueExpr?: string;
        };
        /** Specifies a precision for formatted values displayed in a column. */
        precision?: number;
        /** Specifies a filter operation applied to a column. */
        selectedFilterOperation?: string;
        /** Specifies whether or not the column displays its values by using editors. */
        showEditorAlways?: boolean;
        /** Specifies whether or not to display the column when grid records are grouped by it. */
        showWhenGrouped?: boolean;
        /** Specifies the index of a column when grid records are sorted by the values of this column. */
        sortIndex?: number;
        /** Specifies the initial sort order of column values. */
        sortOrder?: string;
        /** In a boolean column, replaces all true items with a specified text. */
        trueText?: string;
        /** Specifies whether a column is visible or not. */
        visible?: boolean;
        /** Specifies the sequence number of the column in the grid. */
        visibleIndex?: number;
        /** Specifies a column width in pixels or percentages. */
        width?: any;
        /** Specifies an array of validation rules to be checked when updating column cell values. */
        validationRules?: Array<Object>;
        /** Specifies whether or not to display the header of a hidden column in the column chooser. */
        showInColumnChooser?: boolean;
        /** Specifies the identifier of the column. */
        name?: string;
    }
    export interface dxDataGridOptions extends WidgetOptions {
        /** Specifies whether the outer borders of the grid are visible or not. */
        showBorders?: boolean;
        /** Indicates whether to show the error row for the grid. */
        errorRowEnabled?: boolean;
        /** A handler for the rowValidating event. */
        onRowValidating?: (e: Object) => void;
        initNewRow?: (e: { data: Object }) => void;
        /** A handler for the initNewRow event. */
        onInitNewRow?: (e: { data: Object }) => void;
        rowInserted?: (e: { data: Object; key: any }) => void;
        /** A handler for the rowInserted event. */
        onRowInserted?: (e: { data: Object; key: any }) => void;
        rowInserting?: (e: { data: Object; cancel: boolean }) => void;
        /** A handler for the rowInserting event. */
        onRowInserting?: (e: { data: Object; cancel: boolean }) => void;
        rowRemoved?: (e: { data: Object; key: any }) => void;
        /** A handler for the rowRemoved event. */
        onRowRemoved?: (e: { data: Object; key: any }) => void;
        rowRemoving?: (e: { data: Object; key: any; cancel: boolean }) => void;
        /** A handler for the rowRemoving event. */
        onRowRemoving?: (e: { data: Object; key: any; cancel: boolean }) => void;
        rowUpdated?: (e: { data: Object; key: any }) => void;
        /** A handler for the rowUpdated event. */
        onRowUpdated?: (e: { data: Object; key: any }) => void;
        rowUpdating?: (e: { oldData: Object; newData: Object; key: any; cancel: boolean }) => void;
        /** A handler for the rowUpdating event. */
        onRowUpdating?: (e: { oldData: Object; newData: Object; key: any; cancel: boolean }) => void;
        /** Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content. */
        cellHintEnabled?: boolean;
        /** Specifies whether or not grid columns can be reordered by a user. */
        allowColumnReordering?: boolean;
        /** Specifies whether or not grid columns can be resized by a user. */
        allowColumnResizing?: boolean;
        cellClick?: any;
        /** A handler for the cellClick event. */
        onCellClick?: any;
        cellHoverChanged?: (e: Object) => void;
        /** A handler for the cellHoverChanged event. */
        onCellHoverChanged?: (e: Object) => void;
        cellPrepared?: (e: Object) => void;
        /** A handler for the cellPrepared event. */
        onCellPrepared?: (e: Object) => void;
        /** Specifies whether or not the width of grid columns depends on column content. */
        columnAutoWidth?: boolean;
        /** Specifies the options of a column chooser. */
        columnChooser?: {
            /** Specifies text displayed by the column chooser panel when it does not contain any columns. */
            emptyPanelText?: string;
            /** Specifies whether a user can invoke the column chooser or not. */
            enabled?: boolean;
            /** Specifies the height of the column chooser panel. */
            height?: number;
            /** Specifies text displayed in the title of the column chooser panel. */
            title?: string;
            /** Specifies the width of the column chooser panel. */
            width?: number;
        };
        /** 
An array of grid columns.
 */
        columns?: Array<dxDataGridColumn>;
        onContentReady?: Function;
        contentReadyAction?: Function;
        /** Specifies a function that customizes grid columns after they are created. */
        customizeColumns?: (columns: Array<dxDataGridColumn>) => void;
        dataErrorOccurred?: (errorObject: Error) => void;
        /** Specifies a data source for the grid. */
        dataSource?: any;
        editingStart?: (e: {
            data: Object;
            key: any;
            cancel: boolean;
            column: dxDataGridColumn
        }) => void;
        /** A handler for the editingStart event. */
        onEditingStart?: (e: {
            data: Object;
            key: any;
            cancel: boolean;
            column: dxDataGridColumn
        }) => void;
        editorPrepared?: (e: Object) => void;
        /** A handler for the editorPrepared event. */
        onEditorPrepared?: (e: Object) => void;
        editorPreparing?: (e: Object) => void;
        /** A handler for the editorPreparing event. */
        onEditorPreparing?: (e: Object) => void;
        /** Contains options that specify how grid content can be changed. */
        editing?: {
            /** Specifies whether or not grid records can be edited at runtime. */
            editEnabled?: boolean;
            /** Specifies how grid values can be edited manually. */
            editMode?: string;
            /** Specifies whether or not new records can be inserted into a grid. */
            insertEnabled?: boolean;
            /** Specifies whether or not records can be deleted from a grid. */
            removeEnabled?: boolean;
            /** Contains options that specify texts for editing-related grid controls. */
            texts?: {
                /** Specifies text for a hint that appears when a user hovers the mouse pointer over the "Save" button. Setting this option makes sense only when the editMode option is set to batch. */
                saveAllChanges?: string;
                /** Specifies text for a cancel button displayed when a row is in the editing state. Setting this option makes sense only when the editEnabled option is set to true. */
                cancelRowChanges?: string;
                /** Specifies text for a hint that appears when a user hovers the mouse pointer over the "Revert" button. Setting this option makes sense only when the editMode option is set to batch. */
                cancelAllChanges?: string;
                /** Specifies a message to be displayed by a confirmation window. Setting this option makes sense only when the edit mode is "row". */
                confirmDeleteMessage?: string;
                /** Specifies text to be displayed in the title of a confirmation window. Setting this option makes sense only when the edit mode is "row". */
                confirmDeleteTitle?: string;
                /** Specifies text for a button that deletes a row from a grid. Setting this option makes sense only when the removeEnabled option is set to true. */
                deleteRow?: string;
                /** Specifies text for a hint that appears when a user hovers the mouse pointer over the "Add" button. Setting this option makes sense only when the insertEnabled option is true. */
                addRow?: string;
                /** Specifies text for a button that turns a row into the editing state. Setting this option makes sense only when the editEnabled option is set to true. */
                editRow?: string;
                /**
                 * Specifies text for a button that recovers a deleted row. Setting this option makes sense only if the grid uses the batch edit mode and the removeEnabled option is set to true.
                 * @deprecated Use the "undeleteRow" option instead.
                 */
                recoverRow?: string;
                /** Specifies text for a save button displayed when a row is in the editing state. Setting this option makes sense only when the editEnabled option is set to true. */
                saveRowChanges?: string;
                /** Specifies text for a button that recovers a deleted row. Setting this option makes sense only if the grid uses the batch edit mode and the removeEnabled option is set to true. */
                undeleteRow?: string;
            };
        };
        /** Specifies filter row options. */
        filterRow?: {
            /** Specifies when to apply a filter. */
            applyFilter?: string;
            /** Specifies text for the hint that pops up when a user hovers the mouse pointer over the "Apply Filter" button. */
            applyFilterText?: string;
            /** Specifies descriptions for filter operations. */
            operationDescriptions?: {
                "=": string;
                "<>": string;
                "<": string;
                "<=": string;
                ">": string;
                ">=": string;
                "startswith": string;
                "contains": string;
                "notcontains": string;
                "endswith": string;
            };
            /** Specifies text for the reset operation in a filter list. */
            resetOperationText?: string;
            /** Specifies text for the operation of clearing the applied filter when a select box is used. */
            showAllText?: string;
            /** Specifies whether or not an icon that allows the user to choose a filter operation is visible. */
            showOperationChooser?: boolean;
            /** Specifies whether the filter row is visible or not. */
            visible?: boolean;
        };
        /** Specifies the behavior of grouped grid records. */
        grouping?: {
            /** Specifies whether the user can collapse grouped records in a grid or not. */
            allowCollapsing?: boolean;
            /** Specifies whether groups appear expanded or not. */
            autoExpandAll?: boolean;
            /** Specifies the message displayed in a group row when the corresponding group is continued from the previous page. */
            groupContinuedMessage?: string;
            /** 
Specifies the message displayed in a group row when the corresponding group continues on the next page.
 */
            groupContinuesMessage?: string;
        };
        /** Specifies options that configure the group panel. */
        groupPanel?: {
            /** Specifies whether columns can be dragged onto or from the group panel. */
            allowColumnDragging?: boolean;
            /** Specifies text displayed by the group panel when it does not contain any columns. */
            emptyPanelText?: string;
            /** Specifies whether the group panel is visible or not. */
            visible?: boolean;
        };
        /** Specifies options configuring the load panel. */
        loadPanel?: {
            /** Specifies whether to show the load panel or not. */
            enabled?: boolean;
            /** Specifies the height of the load panel in pixels. */
            height?: number;
            /** Specifies a URL pointing to an image to be used as a loading indicator. */
            indicatorSrc?: string;
            /** Specifies whether or not a loading indicator must be displayed on the load panel. */
            showIndicator?: boolean;
            /** Specifies whether or not the pane of the load panel must be displayed. */
            showPane?: boolean;
            /** Specifies text displayed by the load panel. */
            text?: string;
            /** Specifies the width of the load panel in pixels. */
            width?: number;
        };
        /** Specifies text displayed when a grid does not contain any records. */
        noDataText?: string;
        /** Specifies the options of a grid pager. */
        pager?: {
            /** Specifies the page sizes that can be selected at runtime. */
            allowedPageSizes?: any;
            /** Specifies whether to show the page size selector or not. */
            showPageSizeSelector?: boolean;
            /** Specifies whether to show the pager or not. */
            visible?: any;
            /** Specifies the text accompanying the page navigator. */
            infoText?: string;
            /** Specifies whether or not to display the text accompanying the page navigator. This text is specified by the infoText option. */
            showInfo?: boolean;
            /** Specifies whether or not to display buttons that switch the grid to the previous or next page. */
            showNavigationButtons?: boolean;
        };
        /** Specifies paging options. */
        paging?: {
            /** Specifies whether dxDataGrid loads data page by page or all at once.  */
            enabled?: boolean;
            /** Specifies the grid page that should be displayed by default. */
            pageIndex?: number;
            /** Specifies the size of grid pages. */
            pageSize?: number;
        };
        /** Specifies whether or not grid rows must be shaded in a different way. */
        rowAlternationEnabled?: boolean;
        rowClick?: any;
        /** A handler for the rowClick event. */
        onRowClick?: any;
        rowPrepared?: (e: Object) => void;
        /** A handler for the rowPrepared event. */
        onRowPrepared?: (e: Object) => void;
        /** Specifies a custom template for grid rows. */
        rowTemplate?: any;
        /** A configuration object specifying scrolling options. */
        scrolling?: {
            /** Specifies the scrolling mode. */
            mode?: string;
            /** Specifies whether or not a grid must preload pages adjacent to the current page when using virtual scrolling. */
            preloadEnabled?: boolean;
        };
        /** Specifies options of the search panel. */
        searchPanel?: {
            /** Specifies whether or not search strings in the located grid records should be highlighted. */
            highlightSearchText?: boolean;
            /** Specifies text displayed by the search panel when no search string was typed. */
            placeholder?: string;
            /** Specifies whether the search panel is visible or not. */
            visible?: boolean;
            /** Specifies the width of the search panel in pixels. */
            width?: number;
            /** Sets a search string for the search panel. */
            text?: string;
        };
        /** Specifies the operations that must be performed on the server side. */
        remoteOperations?: any;
        /** Allows you to sort groups according to the values of group summary items. */
        sortByGroupSummaryInfo?: Array<{
            /** Specifies the group summary item whose values must be used to sort groups. */
            summaryItem?: string;
            /** Specifies the identifier of the column that must be used in grouping so that sorting by group summary item values be applied. */
            groupColumn?: string;
            /** Specifies the sort order of group summary item values. */
            sortOrder?: string;
        }>;
        /** Allows you to build a master-detail interface in the grid. */
        masterDetail?: {
            /** Enables an end-user to expand/collapse detail sections. */
            enabled?: boolean;
            /** Specifies whether detail sections appear expanded or collapsed. */
            autoExpandAll?: boolean;
            /** Specifies the template for detail sections. */
            template?: any;
        };
        /** Specifies the keys of the records that must appear selected initially. */
        selectedRowKeys?: Array<any>;
        /** Specifies options of runtime selection. */
        selection?: {
            /** Specifies whether the user can select all grid records at once. */
            allowSelectAll?: boolean;
            /** Specifies the selection mode. */
            mode?: string;
        };
        selectionChanged?: (e: {
            currentSelectedRowKeys: Array<any>;
            currentDeselectedRowKeys: Array<any>;
            selectedRowKeys: Array<any>;
            selectedRowsData: Array<any>;
        }) => void;
        /** A handler for the dataErrorOccured event. */
        onDataErrorOccurred?: (e: { error: Error }) => void;
        /** A handler for the selectionChanged event. */
        onSelectionChanged?: (e: {
            currentSelectedRowKeys: Array<any>;
            currentDeselectedRowKeys: Array<any>;
            selectedRowKeys: Array<any>;
            selectedRowsData: Array<any>;
        }) => void;
        /** Specifies whether column headers are visible or not. */
        showColumnHeaders?: boolean;
        /** Specifies whether or not vertical lines separating one grid column from another are visible. */
        showColumnLines?: boolean;
        /** Specifies whether or not horizontal lines separating one grid row from another are visible. */
        showRowLines?: boolean;
        /** Specifies options of runtime sorting. */
        sorting?: {
            /** Specifies text for the context menu item that sets an ascending sort order in a column. */
            ascendingText?: string;
            /** Specifies text for the context menu item that resets sorting settings for a column. */
            clearText?: string;
            /** Specifies text for the context menu item that sets a descending sort order in a column. */
            descendingText?: string;
            /** Specifies the runtime sorting mode. */
            mode?: string;
        };
        /** Specifies options of state storing. */
        stateStoring?: {
            /** Specifies a callback function that performs specific actions on state loading. */
            customLoad?: () => JQueryPromise<Object>;
            /** Specifies a callback function that performs specific actions on state saving. */
            customSave?: (gridState: Object) => void;
            /** Specifies whether or not a grid saves its state. */
            enabled?: boolean;
            /** Specifies the delay between the last change of a grid state and the operation of saving this state in milliseconds. */
            savingTimeout?: number;
            /** Specifies a unique key to be used for storing the grid state. */
            storageKey?: string;
            /** Specifies the type of storage to be used for state storing. */
            type?: string;
        };
        /** Specifies the options of the grid summary. */
        summary?: {
            /** Contains options that specify text patterns for summary items. */
            texts?: {
                /** Specifies a pattern for the 'sum' summary items when they are displayed in the parent column. */
                sum?: string;
                /** Specifies a pattern for the 'sum' summary items displayed in a group row or in any other column rather than the parent one. */
                sumOtherColumn?: string;
                /** Specifies a pattern for the 'min' summary items when they are displayed in the parent column. */
                min?: string;
                /** Specifies a pattern for the 'min' summary items displayed in a group row or in any other column rather than the parent one. */
                minOtherColumn?: string;
                /** Specifies a pattern for the 'max' summary items when they are displayed in the parent column. */
                max?: string;
                /** Specifies a pattern for the 'max' summary items displayed in a group row or in any other column rather than the parent one. */
                maxOtherColumn?: string;
                /** Specifies a pattern for the 'avg' summary items when they are displayed in the parent column. */
                avg?: string;
                /** Specifies a pattern for the 'avg' summary items displayed in a group row or in any other column rather than the parent one. */
                avgOtherColumn?: string;
                /** Specifies a pattern for the 'count' summary items. */
                count?: string;
            };
            /** Specifies items of the group summary. */
            groupItems?: Array<{
                /** Specifies the identifier of a summary item. */
                name?: string;
                /** Specifies the column that provides data for a group summary item. */
                column?: string;
                /** Customizes the text to be displayed in the summary item. */
                customizeText?: (itemInfo: {
                    value: any;
                    valueText: string;
                }) => string;
                /** Specifies a pattern for the summary item text. */
                displayFormat?: string;
                /** Specifies a precision for the summary item value of a numeric format. */
                precision?: number;
                /** Specifies whether or not a summary item must be displayed in the group footer. */
                showInGroupFooter?: boolean;
                /** Specifies the column that must hold the summary item when this item is displayed in the group footer. */
                showInColumn?: string;
                /** Specifies how to aggregate data for a summary item. */
                summaryType?: string;
                /** Specifies a format for the summary item value. */
                valueFormat?: string;
            }>;
            /** Specifies items of the total summary. */
            totalItems?: Array<{
                /** Specifies the identifier of a summary item. */
                name?: string;
                /** Specifies the alignment of a summary item. */
                alignment?: string;
                /** Specifies the column that provides data for a summary item. */
                column?: string;
                /** Specifies a CSS class to be applied to a summary item. */
                cssClass?: string;
                /** Customizes the text to be displayed in the summary item. */
                customizeText?: (itemInfo: {
                    value: any;
                    valueText: string;
                }) => string;
                /** Specifies a pattern for the summary item text. */
                displayFormat?: string;
                /** Specifies a precision for the summary item value of a numeric format. */
                precision?: number;
                /** Specifies the column that must hold the summary item. */
                showInColumn?: string;
                /** Specifies how to aggregate data for a summary item. */
                summaryType?: string;
                /** Specifies a format for the summary item value. */
                valueFormat?: string;
            }>;
            /** Allows you to use a custom aggregate function to calculate the value of a summary item. */
            calculateCustomSummary?: (options: {
                component: dxDataGrid;
                name?: string;
                value: any;
                totalValue: any;
                summaryProcess: string
            }) => void;
        };
        /** Specifies whether text that does not fit into a column should be wrapped. */
        wordWrapEnabled?: boolean;
    }
    /** 
A data grid widget.
 */
    export class dxDataGrid extends Widget {
        constructor(element: JQuery, options?: dxDataGridOptions);
        constructor(element: Element, options?: dxDataGridOptions);
        /** Ungroups grid records. */
        clearGrouping(): void;
        /** Clears sorting settings of all grid columns at once. */
        clearSorting(): void;
        /** Allows you to obtain a cell by its row index and the data field of its column. */
        getCellElement(rowIndex: number, dataField: string): any;
        /** Allows you to obtain a cell by its row index and the visible index of its column. */
        getCellElement(rowIndex: number, visibleColumnIndex: number): any;
        /** Returns the current state of the grid. */
        state(): Object;
        /** Sets the grid state. */
        state(state: Object): void;
        /** Allows you to obtain the row index by a data key. */
        getRowIndexByKey(key: any): number;
        /** Allows you to obtain the data key by a row index. */
        getKeyByRowIndex(rowIndex: number): any;
        /** Adds a new column to a grid. */
        addColumn(columnOptions: dxDataGridColumn): void;
        /** Displays the load panel.  */
        beginCustomLoading(messageText: string): void;
        /** Discards changes made in a grid. */
        cancelEditData(): void;
        /** Clears the filter applied to grid records from code. */
        clearFilter(): void;
        /** Deselects all grid records. */
        clearSelection(): void;
        /** Draws the cell being edited from the editing state. Use this method when the edit mode is batch. */
        closeEditCell(): void;
        /** Collapses groups or master rows in a grid. */
        collapseAll(groupIndex?: number): void;
        /** Returns the number of data columns in a grid. */
        columnCount(): number;
        /** Returns the value of a specific column option. */
        columnOption(id: number, optionName: string): any;
        /** Sets an option of a specific column. */
        columnOption(id: number, optionName: string, optionValue: any): void;
        /** Returns the options of a column by an identifier. */
        columnOption(id: any): Object;
        /** Sets several options of a column at once. */
        columnOption(id: any, options: Object): void;
        /** Sets a specific cell into the editing state. */
        editCell(rowIndex: number, columnIndex: number): void;
        /** Sets a specific row into the editing state. */
        editRow(rowIndex: number): void;
        /** Hides the load panel.  */
        endCustomLoading(): void;
        /** Expands groups or master rows in a grid. */
        expandAll(groupIndex: number): void;
        /** Allows you to find out whether a specific group or master row is expanded or collapsed. */
        isRowExpanded(key: any): boolean;
        /** Allows you to expand a specific group or master row by its key. */
        expandRow(key: any): void;
        /** Allows you to collapse a specific group or master row by its key. */
        collapseRow(key: any): void;
        /** Applies a filter to grid records. */
        filter(filterExpr: Array<any>): void;
        /** Gets the keys of currently selected grid records.  */
        getSelectedRowKeys(): Array<Object>;
        /** Gets the data objects of currently selected grid records.  */
        getSelectedRowsData(): Array<Object>;
        /** Hides the column chooser panel. */
        hideColumnChooser(): void;
        /** Adds a new data row to a grid. */
        insertRow(): void;
        /** Returns the key corresponding to the passed data object. */
        keyOf(obj: Object): any;
        /** Switches a grid to a specified page. */
        pageIndex(newIndex: number): void;
        /** Gets the index of the current page. */
        pageIndex(): number;
        /** Sets the page size. */
        pageSize(value: number): void;
        /** Gets the current page size. */
        pageSize(): number;
        /**
         * Recovers a row deleted in the batch edit mode.
         * @deprecated Use the "undeleteRow" method instead.
         */
        recoverRow(rowIndex: number): void;
        /** Refreshes grid data. */
        refresh(): void;
        /** Removes a specific row from a grid. */
        removeRow(rowIndex: number): void;
        /** Saves changes made in a grid. */
        saveEditData(): void;
        /** 
Searches grid records by a search string.
 */
        searchByText(text: string): void;
        /** Selects all grid records. */
        selectAll(): void;
        /** Selects specific grid records. */
        selectRows(keys: Array<any>, preserve: boolean): void;
        /** Deselects specific grid records. */
        deselectRows(keys: Array<any>): void;
        /** Selects grid rows by indexes. */
        selectRowsByIndexes(indexes: Array<any>): void;
        /** Allows you to find out whether a row is selected or not. */
        isRowSelected(key: any): boolean;
        /** Invokes the column chooser panel. */
        showColumnChooser(): void;
        startSelectionWithCheckboxes(): boolean;
        /** Returns the number of records currently held by a grid. */
        totalCount(): number;
        /** Recovers a row deleted in the batch edit mode. */
        undeleteRow(rowIndex: number): void;
        /** Allows you to obtain a data object by its key. */
        byKey(key: any): JQueryPromise<any>;
        /** Gets the value of a total summary item. */
        getTotalSummaryValue(summaryItemName: string): any;
    }
}
declare module DevExpress.viz.charts {
    /** This section describes the fields and methods that can be used in code to manipulate the Series object. */
    export interface BaseSeries {
        /** Provides information about the state of the series object. */
        fullState: number;
        /** Returns the type of the series. */
        type: string;
        /** Unselects all the selected points of the series. The points are displayed in an initial style. */
        clearSelection(): void;
        /** Gets a point from the series point collection based on the specified argument. */
        getPointByArg(pointArg: any): Object;
        /** Gets a point from the series point collection based on the specified point position. */
        getPointByPos(positionIndex: number): Object;
        /** Selects the series. The series is displayed in a 'selected' style until another series is selected or the current series is deselected programmatically. */
        select(): void;
        /** Selects the specified point. The point is displayed in a 'selected' style. */
        selectPoint(point: BasePoint): void;
        /** Deselects the specified point. The point is displayed in an initial style. */
        deselectPoint(point: BasePoint): void;
        /** Returns an array of all points in the series. */
        getAllPoints(): Array<BasePoint>;
        /** Returns visible series points. */
        getVisiblePoints(): Array<BasePoint>;
    }
    /** This section describes the methods that can be used in code to manipulate the Point object. */
    export interface BasePoint {
        /** Provides information about the state of the point object. */
        fullState: number;
        /** Returns the point's argument value that was set in the data source. */
        originalArgument: any;
        /** Returns the point's value that was set in the data source. */
        originalValue: any;
        /** Returns the tag of the point. */
        tag: string;
        /** Deselects the point. */
        clearSelection(): void;
        /** Gets the color of a particular point. */
        getColor(): string;
        /** Hides the tooltip of the point. */
        hideTooltip(): void;
        /** Provides information about the hover state of a point. */
        isHovered(): any;
        /** Provides information about the selection state of a point. */
        isSelected(): any;
        /** Selects the point. The point is displayed in a 'selected' style until another point is selected or the current point is deselected programmatically. */
        select(): void;
        /** Shows the tooltip of the point. */
        showTooltip(): void;
        /** Allows you to obtain the label of a series point. */
        getLabel(): any;
        /** Returns the series object to which the point belongs. */
        series: BaseSeries;
    }
    /** This section describes the fields and methods that can be used in code to manipulate the Series object. */
    export interface ChartSeries extends BaseSeries {
        /** Returns the name of the series pane. */
        pane: string;
        /** Returns the name of the value axis of the series. */
        axis: string;
        /** Returns the name of the series. */
        name: string;
        /** Returns the tag of the series. */
        tag: string;
        /** Hides a particular series. */
        hide(): void;
        /** Provides information about the hover state of a series. */
        isHovered(): any;
        /** Provides information about the selection state of a series. */
        isSelected(): any;
        /** Provides information about the visibility state of a series. */
        isVisible(): boolean;
        /** Makes a particular series visible. */
        show(): void;
        selectPoint(point: ChartPoint): void;
        deselectPoint(point: ChartPoint): void;
        getAllPoints(): Array<ChartPoint>;
        getVisiblePoints(): Array<ChartPoint>;
    }
    /** This section describes the methods that can be used in code to manipulate the Point object. */
    export interface ChartPoint extends BasePoint {
        /** Contains the close value of the point. This field is useful for points belonging to a series of the candle stick or stock type only. */
        originalCloseValue: any;
        /** Contains the high value of the point. This field is useful for points belonging to a series of the candle stick or stock type only. */
        originalHighValue: any;
        /** Contains the low value of the point. This field is useful for points belonging to a series of the candle stick or stock type only. */
        originalLowValue: any;
        /** Contains the first value of the point. This field is useful for points belonging to a series of the range area or range bar type only. */
        originalMinValue: any;
        /** Contains the open value of the point. This field is useful for points belonging to a series of the candle stick or stock type only. */
        originalOpenValue: any;
        /** Contains the size of the bubble as it was set in the data source. This field is useful for points belonging to a series of the bubble type only. */
        size: any;
        /** Gets the parameters of the point's minimum bounding rectangle (MBR). */
        getBoundingRect(): { x: number; y: number; width: number; height: number; };
        series: ChartSeries;
    }
    /** This section describes the methods that can be used in code to manipulate the Label object. */
    export interface Label {
        /** Gets the parameters of the label's minimum bounding rectangle (MBR). */
        getBoundingRect(): { x: number; y: number; width: number; height: number; };
        /** Hides the point label. */
        hide(): void;
        /** Shows the point label. */
        show(): void;
    }
    export interface PieSeries extends BaseSeries {
        selectPoint(point: PiePoint): void;
        deselectPoint(point: PiePoint): void;
        getAllPoints(): Array<PiePoint>;
        getVisiblePoints(): Array<PiePoint>;
    }
    /** This section describes the methods that can be used in code to manipulate the Point object. */
    export interface PiePoint extends BasePoint {
        /** Gets the percentage value of the specific point. */
        percent: any;
        /** Provides information about the visibility state of a point. */
        isVisible(): boolean;
        /** Makes a specific point visible. */
        show(): void;
        /** Hides a specific point. */
        hide(): void;
        series: PieSeries;
    }
    /** This section describes the fields and methods that can be used in code to manipulate the Series object. */
    export interface PolarSeries extends BaseSeries {
        /** Returns the name of the value axis of the series. */
        axis: string;
        /** Returns the name of the series. */
        name: string;
        /** Returns the tag of the series. */
        tag: string;
        /** Hides a particular series. */
        hide(): void;
        /** Provides information about the hover state of a series. */
        isHovered(): any;
        /** Provides information about the selection state of a series. */
        isSelected(): any;
        /** Provides information about the visibility state of a series. */
        isVisible(): boolean;
        /** Makes a particular series visible. */
        show(): void;
        selectPoint(point: PolarPoint): void;
        deselectPoint(point: PolarPoint): void;
        getAllPoints(): Array<PolarPoint>;
        getVisiblePoints(): Array<PolarPoint>;
    }
    /** This section describes the methods that can be used in code to manipulate the Point object. */
    export interface PolarPoint extends BasePoint {
        /** Gets the parameters of the point's minimum bounding rectangle (MBR). */
        getBoundingRect(): Object;
        series: PolarSeries;
    }
    export interface Strip {
        /** Specifies a color for a strip. */
        color?: string;
        /** An object that defines the label configuration options of a strip. */
        label?: {
            /** Specifies the text displayed in a strip. */
            text?: string;
        };
        /** Specifies a start value for a strip. */
        startValue?: any;
        /** Specifies an end value for a strip. */
        endValue?: any;
    }
    export interface BaseSeriesConfigLabel {
        /** Specifies a format for arguments displayed by point labels. */
        argumentFormat?: string;
        /** Specifies a precision for formatted point arguments displayed in point labels. */
        argumentPrecision?: number;
        /** Specifies a background color for point labels. */
        backgroundColor?: string;
        /** Specifies border options for point labels. */
        border?: viz.core.DashedBorder;
        /** Specifies connector options for series point labels. */
        connector?: {
            /** Specifies the color of label connectors. */
            color?: string;
            /** Indicates whether or not label connectors are visible. */
            visible?: boolean;
            /** Specifies the width of label connectors. */
            width?: number;
        };
        /** Specifies a callback function that returns the text to be displayed by point labels. */
        customizeText?: (pointInfo: Object) => string;
        /** Specifies font options for the text displayed in point labels. */
        font?: viz.core.Font;
        /** Specifies a format for the text displayed by point labels. */
        format?: string;
        position?: string;
        /** Specifies a precision for formatted point values displayed in point labels. */
        precision?: number;
        /** Specifies the angle used to rotate point labels from their initial position. */
        rotationAngle?: number;
        /** Specifies the visibility of point labels. */
        visible?: boolean;
    }
    export interface SeriesConfigLabel extends BaseSeriesConfigLabel {
        /** Specifies whether or not to show a label when the point has a zero value. */
        showForZeroValues?: boolean;
    }
    export interface ChartSeriesConfigLabel extends SeriesConfigLabel {
        /** Specifies how to align point labels relative to the corresponding data points that they represent. */
        alignment?: string;
        /** Specifies how to shift point labels horizontally from their initial positions. */
        horizontalOffset?: number;
        /** Specifies how to shift point labels vertically from their initial positions. */
        verticalOffset?: number;
        /** Specifies a precision for the percentage values displayed in the labels of a full-stacked-like series. */
        percentPrecision?: number;
    }
    export interface BaseCommonSeriesConfig {
        /** Specifies the data source field that provides arguments for series points. */
        argumentField?: string;
        axis?: string;
        /** An object defining the label configuration options for a series in the dxChart widget. */
        label?: ChartSeriesConfigLabel;
        /** Specifies border options for point labels. */
        border?: viz.core.DashedBorder;
        /** Specifies a series color. */
        color?: string;
        /** Specifies the dash style of the series' line. */
        dashStyle?: string;
        hoverMode?: string;
        /** An object defining configuration options for a hovered series. */
        hoverStyle?: {
            /** An object defining the border options for a hovered series. */
            border?: viz.core.DashedBorder;
            /** <p>Sets a color for a series when it is hovered over.</p> */
            color?: string;
            /** Specifies the dash style for the line in a hovered series. */
            dashStyle?: string;
            /** Specifies the hatching options to be applied when a series is hovered over. */
            hatching?: viz.core.Hatching;
            /** Specifies the width of a line in a hovered series. */
            width?: number;
        };
        /** Specifies whether a chart ignores null data points or not. */
        ignoreEmptyPoints?: boolean;
        /** Specifies how many points are acceptable to be in a series to display all labels for these points. Otherwise, the labels will not be displayed. */
        maxLabelCount?: number;
        /** Specifies the minimal length of a displayed bar in pixels. */
        minBarSize?: number;
        /** Specifies opacity for a series. */
        opacity?: number;
        /** Specifies the series elements to highlight when the series is selected. */
        selectionMode?: string;
        /** An object defining configuration options for a selected series. */
        selectionStyle?: {
            /** An object defining the border options for a selected series. */
            border?: viz.core.DashedBorder;
            /** Sets a color for a series when it is selected. */
            color?: string;
            /** Specifies the dash style for the line in a selected series. */
            dashStyle?: string;
            /** Specifies the hatching options to be applied when a series is selected. */
            hatching?: viz.core.Hatching;
            /** Specifies the width of a line in a selected series. */
            width?: number;
        };
        /** Specifies whether or not to show the series in the chart's legend. */
        showInLegend?: boolean;
        /** Specifies the name of the stack where the values of the _stackedBar_ series must be located. */
        stack?: string;
        /** Specifies the name of the data source field that provides data about a point. */
        tagField?: string;
        /** Specifies the data source field that provides values for series points. */
        valueField?: string;
        /** Specifies the visibility of a series. */
        visible?: boolean;
        /** Specifies a line width. */
        width?: number;
        /** Configures error bars. */
        valueErrorBar?: {
            /** Specifies whether error bars must be displayed in full or partially. */
            displayMode?: string;
            /** Specifies the data field that provides data for low error values. */
            lowValueField?: string;
            /** Specifies the data field that provides data for high error values. */
            highValueField?: string;
            /** Specifies how error bar values must be calculated. */
            type?: string;
            /** Specifies the value to be used for generating error bars. */
            value?: number;
            /** Specifies the color of error bars. */
            color?: string;
            /** Specifies the opacity of error bars. */
            opacity?: number;
            /** Specifies the length of the lines that indicate the error bar edges. */
            edgeLength?: number;
            /** Specifies the width of the error bar line. */
            lineWidth?: number;
        };
    }
    export interface CommonPointOptions {
        /** Specifies border options for points in the line and area series. */
        border?: viz.core.Border;
        /** Specifies the points color. */
        color?: string;
        /** Specifies what series points to highlight when a point is hovered over. */
        hoverMode?: string;
        /** An object defining configuration options for a hovered point. */
        hoverStyle?: {
            /** An object defining the border options for a hovered point. */
            border?: viz.core.Border;
            /** Sets a color for a point when it is hovered over. */
            color?: string;
            /** Specifies the diameter of a hovered point in the series that represents data points as symbols (not as bars for instance). */
            size?: number;
        };
        /** Specifies what series points to highlight when a point is selected. */
        selectionMode?: string;
        /** An object defining configuration options for a selected point. */
        selectionStyle?: {
            /** An object defining the border options for a selected point. */
            border?: viz.core.Border;
            /** <p>Sets a color for a point when it is selected.</p> */
            color?: string;
            /** Specifies the diameter of a selected point in the series that represents data points as symbols (not as bars for instance). */
            size?: number;
        };
        /** Specifies the point diameter in pixels for those series that represent data points as symbols (not as bars for instance). */
        size?: number;
        /** Specifies a symbol for presenting points of the line and area series. */
        symbol?: string;
        visible?: boolean;
    }
    export interface ChartCommonPointOptions extends CommonPointOptions {
        /** An object specifying the parameters of an image that is used as a point marker. */
        image?: {
            /** Specifies the height of an image that is used as a point marker. */
            height?: any;
            /** Specifies a URL leading to the image to be used as a point marker. */
            url?: any;
            /** Specifies the width of an image that is used as a point marker. */
            width?: any;
        };
    }
    export interface PolarCommonPointOptions extends CommonPointOptions {
        /** An object specifying the parameters of an image that is used as a point marker. */
        image?: {
            /** Specifies the height of an image that is used as a point marker. */
            height?: number;
            /** Specifies a URL leading to the image to be used as a point marker. */
            url?: string;
            /** Specifies the width of an image that is used as a point marker. */
            width?: number;
        };
    }
    /** An object that defines configuration options for chart series. */
    export interface CommonSeriesConfig extends BaseCommonSeriesConfig {
        /** Specifies the data source field that provides a 'close' value for a _candleStick_ or _stock_ series. */
        closeValueField?: string;
        /** Specifies a radius for bar corners. */
        cornerRadius?: number;
        /** Specifies the data source field that provides a 'high' value for a _candleStick_ or _stock_ series. */
        highValueField?: string;
        /** Specifies the color for the body (rectangle) of a _candleStick_ series. */
        innerColor?: string;
        /** Specifies the data source field that provides a 'low' value for a _candleStick_ or _stock_ series. */
        lowValueField?: string;
        /** Specifies the data source field that provides an 'open' value for a _candleStick_ or _stock_ series. */
        openValueField?: string;
        /** Specifies the pane that will be used to display a series. */
        pane?: string;
        /** An object defining configuration options for points in line-, scatter- and area-like series. */
        point?: ChartCommonPointOptions;
        /** Specifies the data source field that provides values for one end of a range series. To set the data source field for the other end of the range series, use the rangeValue2Field property. */
        rangeValue1Field?: string;
        /** Specifies the data source field that provides values for the second end of a range series. To set the data source field for the other end of the range series, use the rangeValue1Field property. */
        rangeValue2Field?: string;
        /** Specifies reduction options for the stock or candleStick series. */
        reduction?: {
            /** Specifies a color for the points whose reduction level price is lower in comparison to the value in the previous point. */
            color?: string;
            /** Specifies for which price level (open, high, low or close) to enable reduction options in the series. */
            level?: string;
        };
        /** Specifies the data source field that defines the size of bubbles. */
        sizeField?: string;
    }
    export interface CommonSeriesSettings extends CommonSeriesConfig {
        /** <p>An object that specifies configuration options for all series of the <i>area</i> type in the chart.</p> */
        area?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _bar_ type in the chart. */
        bar?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the bubble type in the chart. */
        bubble?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _candleStick_ type in the chart. */
        candlestick?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _fullStackedArea_ type in the chart. */
        fullstackedarea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the Full-Stacked Spline Area type in the chart. */
        fullstackedsplinearea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _fullStackedBar_ type in the chart. */
        fullstackedbar?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _fullStackedLine_ type in the chart. */
        fullstackedline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the Full-Stacked Spline type in the chart. */
        fullstackedspline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _line_ type in the chart. */
        line?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _rangeArea_ type in the chart. */
        rangearea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _rangeBar_ type in the chart. */
        rangebar?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _scatter_ type in the chart. */
        scatter?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _spline_ type in the chart. */
        spline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _splineArea_ type in the chart. */
        splinearea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stackedArea_ type in the chart. */
        stackedarea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the Stacked Spline Area type in the chart. */
        stackedsplinearea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stackedBar_ type in the chart. */
        stackedbar?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stackedLine_ type in the chart. */
        stackedline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the Stacked Spline type in the chart. */
        stackedspline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stepArea_ type in the chart. */
        steparea?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stepLine_ type in the chart. */
        stepline?: CommonSeriesConfig;
        /** An object that specifies configuration options for all series of the _stock_ type in the chart. */
        stock?: CommonSeriesConfig;
        /** Sets a series type. */
        type?: string;
    }
    export interface SeriesConfig extends CommonSeriesConfig {
        /** Specifies the name that identifies the series. */
        name?: string;
        /** Specifies data about a series. */
        tag?: any;
        /** Sets the series type. */
        type?: string;
    }
    /** An object that defines configuration options for polar chart series. */
    export interface CommonPolarSeriesConfig extends BaseCommonSeriesConfig {
        /** Specifies whether or not to close the chart by joining the end point with the first point. */
        closed?: boolean;
        label?: SeriesConfigLabel;
        point?: PolarCommonPointOptions;
    }
    export interface CommonPolarSeriesSettings extends CommonPolarSeriesConfig {
        /** An object that specifies configuration options for all series of the <i>area</i> type in the chart. */
        area?: CommonPolarSeriesConfig;
        /** An object that specifies configuration options for all series of the _bar_ type in the chart. */
        bar?: CommonPolarSeriesConfig;
        /** An object that specifies configuration options for all series of the _line_ type in the chart. */
        line?: CommonPolarSeriesConfig;
        /** An object that specifies configuration options for all series of the _scatter_ type in the chart. */
        scatter?: CommonPolarSeriesConfig;
        /** An object that specifies configuration options for all series of the _stackedBar_ type in the chart. */
        stackedbar?: CommonPolarSeriesConfig;
        /** Sets a series type. */
        type?: string;
    }
    export interface PolarSeriesConfig extends CommonPolarSeriesConfig {
        /** Specifies the name that identifies the series. */
        name?: string;
        /** Specifies data about a series. */
        tag?: any;
        /** Sets the series type. */
        type?: string;
    }
    export interface PieSeriesConfigLabel extends BaseSeriesConfigLabel {
        /** Specifies how to shift labels from their initial position in a radial direction in pixels. */
        radialOffset?: number;
        /** Specifies a precision for the percentage values displayed in labels. */
        percentPrecision?: number;
    }
    /** An object that defines configuration options for chart series. */
    export interface CommonPieSeriesConfig {
        /** Specifies the data source field that provides arguments for series points. */
        argumentField?: string;
        /** Specifies the required type for series arguments. */
        argumentType?: string;
        /** An object defining the series border configuration options. */
        border?: viz.core.DashedBorder;
        /** Specifies a series color. */
        color?: string;
        /** Specifies the chart elements to highlight when a series is hovered over. */
        hoverMode?: string;
        /** An object defining configuration options for a hovered series. */
        hoverStyle?: {
            /** An object defining the border options for a hovered series. */
            border?: viz.core.DashedBorder;
            /** Sets a color for the series when it is hovered over. */
            color?: string;
            /** Specifies the hatching options to be applied when a point is hovered over. */
            hatching?: viz.core.Hatching;
        };
        /** Specifies the fraction of the inner radius relative to the total radius in the series of the 'doughnut' type. */
        innerRadius?: number;
        /** An object defining the label configuration options. */
        label?: PieSeriesConfigLabel;
        /** Specifies how many points are acceptable to be in a series to display all labels for these points. Otherwise, the labels will not be displayed. */
        maxLabelCount?: number;
        /** Specifies a minimal size of a displayed pie segment. */
        minSegmentSize?: number;
        /** Specifies the direction in which the dxPieChart's series points are located. */
        segmentsDirection?: string;
        /** <p>Specifies the chart elements to highlight when the series is selected.</p> */
        selectionMode?: string;
        /** An object defining configuration options for the series when it is selected. */
        selectionStyle?: {
            /** An object defining the border options for a selected series. */
            border?: viz.core.DashedBorder;
            /** Sets a color for a series when it is selected. */
            color?: string;
            /** Specifies the hatching options to be applied when a point is selected. */
            hatching?: viz.core.Hatching;
        };
        /** Specifies chart segment grouping options. */
        smallValuesGrouping?: {
            /** Specifies the name of the grouped chart segment. This name represents the segment in the chart legend. */
            groupName?: string;
            /** Specifies the segment grouping mode. */
            mode?: string;
            /** Specifies a threshold for segment values. */
            threshold?: number;
            /** Specifies how many segments must not be grouped. */
            topCount?: number;
        };
        /** Specifies a start angle for a pie chart in arc degrees. */
        startAngle?: number;
        /** <p>Specifies the name of the data source field that provides data about a point.</p> */
        tagField?: string;
        /** Specifies the data source field that provides values for series points. */
        valueField?: string;
        /** Specifies the required type for series values. */
        valueType?: string;
    }
    export interface PieSeriesConfig extends CommonPieSeriesConfig {
        /** Sets the series type. */
        type?: string;
    }
    export interface SeriesTemplate {
        /** Specifies a callback function that returns a series object with individual series settings. */
        customizeSeries?: (seriesName: string) => SeriesConfig;
        /** Specifies a data source field that represents the series name. */
        nameField?: string;
    }
    export interface PolarSeriesTemplate {
        /** Specifies a callback function that returns a series object with individual series settings. */
        customizeSeries?: (seriesName: string) => PolarSeriesConfig;
        /** Specifies a data source field that represents the series name. */
        nameField?: string;
    }
    export interface ChartCommonConstantLineLabel {
        /** Specifies font options for a constant line label. */
        font?: viz.core.Font;
        /** Specifies the position of the constant line label relative to the chart plot. */
        position?: string;
    }
    export interface PolarCommonConstantLineLabel {
        /** Specifies font options for a constant line label. */
        font?: viz.core.Font;
    }
    export interface ConstantLineStyle {
        /** Specifies a color for a constant line. */
        color?: string;
        /** Specifies a dash style for a constant line. */
        dashStyle?: string;
        /** Specifies a constant line width in pixels. */
        width?: number;
    }
    export interface ChartCommonConstantLineStyle extends ConstantLineStyle {
        /** An object defining constant line label options. */
        label?: ChartCommonConstantLineLabel;
        /** Specifies the space between the constant line label and the left/right side of the constant line. */
        paddingLeftRight?: number;
        /** Specifies the space between the constant line label and the top/bottom side of the constant line. */
        paddingTopBottom?: number;
    }
    export interface PolarCommonConstantLineStyle extends ConstantLineStyle {
        /** An object defining constant line label options. */
        label?: PolarCommonConstantLineLabel;
    }
    export interface CommonAxisLabel {
        /** Specifies font options for axis labels. */
        font?: viz.core.Font;
        /** Specifies the spacing between an axis and its labels in pixels. */
        indentFromAxis?: number;
        /** Indicates whether or not axis labels are visible. */
        visible?: boolean;
    }
    export interface ChartCommonAxisLabel extends CommonAxisLabel {
        /** Specifies the label's position relative to the tick (grid line). */
        alignment?: string;
        /** Specifies the overlap resolving algorithm to be applied to axis labels. */
        overlappingBehavior?: {
            /** Specifies how to arrange axis labels. */
            mode?: string;
            /** Specifies the angle used to rotate axis labels. */
            rotationAngle?: number;
            /** Specifies the spacing that must be set between staggered rows when the 'stagger' algorithm is applied. */
            staggeringSpacing?: number;
        };
    }
    export interface PolarCommonAxisLabel extends CommonAxisLabel {
        /** Specifies the overlap resolving algorithm to be applied to axis labels. */
        overlappingBehavior?: string;
    }
    export interface CommonAxisTitle {
        /** Specifies font options for an axis title. */
        font?: viz.core.Font;
        /** Specifies a margin for an axis title in pixels. */
        margin?: number;
    }
    export interface BaseCommonAxisSettings {
        /** Specifies the color of the line that represents an axis. */
        color?: string;
        /** Specifies whether ticks/grid lines of a discrete axis are located between labels or cross the labels. */
        discreteAxisDivisionMode?: string;
        /** An object defining the configuration options for the grid lines of an axis in the dxPolarChart widget. */
        grid?: {
            /** Specifies a color for grid lines. */
            color?: string;
            /** Specifies an opacity for grid lines. */
            opacity?: number;
            /** Indicates whether or not the grid lines of an axis are visible. */
            visible?: boolean;
            /** Specifies the width of grid lines. */
            width?: number;
        };
        /** Specifies the options of the minor grid. */
        minorGrid?: {
            /** Specifies a color for the lines of the minor grid. */
            color?: string;
            /** Specifies an opacity for the lines of the minor grid. */
            opacity?: number;
            /** Indicates whether the minor grid is visible or not. */
            visible?: boolean;
            /** Specifies a width for the lines of the minor grid. */
            width?: number;
        };
        /** Indicates whether or not an axis is inverted. */
        inverted?: boolean;
        /** Specifies the opacity of the line that represents an axis. */
        opacity?: number;
        /** Indicates whether or not to set ticks/grid lines of a continuous axis of the 'date-time' type at the beginning of each date-time interval. */
        setTicksAtUnitBeginning?: boolean;
        /** An object defining the configuration options for axis ticks. */
        tick?: {
            /** Specifies ticks color. */
            color?: string;
            /** Specifies tick opacity. */
            opacity?: number;
            /** Indicates whether or not ticks are visible on an axis. */
            visible?: boolean;
        };
        /** Specifies the options of the minor ticks. */
        minorTick?: {
            /** Specifies a color for the minor ticks. */
            color?: string;
            /** Specifies an opacity for the minor ticks. */
            opacity?: number;
            /** Indicates whether or not the minor ticks are displayed on an axis. */
            visible?: boolean;
        };
        /** Indicates whether or not the line that represents an axis in a chart is visible. */
        visible?: boolean;
        /** Specifies the width of the line that represents an axis in the chart. */
        width?: number;
    }
    export interface ChartCommonAxisSettings extends BaseCommonAxisSettings {
        /** Specifies the appearance of all the widget's constant lines. */
        constantLineStyle?: ChartCommonConstantLineStyle;
        /** An object defining the label configuration options that are common for all axes in the dxChart widget. */
        label?: ChartCommonAxisLabel;
        /** Specifies a coefficient that determines the spacing between the maximum series point and the axis. */
        maxValueMargin?: number;
        /** Specifies a coefficient that determines the spacing between the minimum series point and the axis. */
        minValueMargin?: number;
        /** Specifies, in pixels, the space reserved for an axis. */
        placeholderSize?: number;
        /** An object defining configuration options for strip style. */
        stripStyle?: {
            /** An object defining the configuration options for a strip label style. */
            label?: {
                /** Specifies font options for a strip label. */
                font?: viz.core.Font;
                /** Specifies the label's position on a strip. */
                horizontalAlignment?: string;
                /** Specifies a label's position on a strip. */
                verticalAlignment?: string;
            };
            /** Specifies the spacing, in pixels, between the left/right strip border and the strip label. */
            paddingLeftRight?: number;
            /** Specifies the spacing, in pixels, between the top/bottom strip borders and the strip label. */
            paddingTopBottom?: number;
        };
        /** An object defining the title configuration options that are common for all axes in the dxChart widget. */
        title?: CommonAxisTitle;
        /** Indicates whether or not to display series with indents from axis boundaries. */
        valueMarginsEnabled?: boolean;
    }
    export interface PolarCommonAxisSettings extends BaseCommonAxisSettings {
        /** Specifies the appearance of all the widget's constant lines. */
        constantLineStyle?: PolarCommonConstantLineStyle;
        /** An object defining the label configuration options that are common for all axes in the dxPolarChart widget. */
        label?: PolarCommonAxisLabel;
        /** An object defining configuration options for strip style. */
        stripStyle?: {
            /** An object defining the configuration options for a strip label style. */
            label?: {
                /** Specifies font options for a strip label. */
                font?: viz.core.Font;
            };
        };
    }
    export interface ChartConstantLineLabel extends ChartCommonConstantLineLabel {
        /** Specifies the horizontal alignment of a constant line label. */
        horizontalAlignment?: string;
        /** Specifies the vertical alignment of a constant line label. */
        verticalAlignment?: string;
        /** Specifies the text to be displayed in a constant line label. */
        text?: string;
    }
    export interface PolarConstantLineLabel extends PolarCommonConstantLineLabel {
        /** Specifies the text to be displayed in a constant line label. */
        text?: string;
    }
    export interface AxisLabel {
        /** Specifies the text for a hint that appears when a user hovers the mouse pointer over a label on the value axis. */
        customizeHint?: (argument: { value: any; valueText: string }) => string;
        /** Specifies a callback function that returns the text to be displayed in value axis labels. */
        customizeText?: (argument: { value: any; valueText: string }) => string;
        /** Specifies a format for the text displayed by axis labels. */
        format?: string;
        /** Specifies a precision for the formatted value displayed in the axis labels. */
        precision?: number;
    }
    export interface ChartAxisLabel extends ChartCommonAxisLabel, AxisLabel { }
    export interface PolarAxisLabel extends PolarCommonAxisLabel, AxisLabel { }
    export interface AxisTitle extends CommonAxisTitle {
        /** Specifies the text for the value axis title. */
        text?: string;
    }
    export interface ChartConstantLineStyle extends ChartCommonConstantLineStyle {
        /** An object defining constant line label options. */
        label?: ChartConstantLineLabel;
    }
    export interface ChartConstantLine extends ChartConstantLineStyle {
        /** An object defining constant line label options. */
        label?: ChartConstantLineLabel;
        /** Specifies a value to be displayed by a constant line. */
        value?: any;
    }
    export interface PolarConstantLine extends PolarCommonConstantLineStyle {
        /** An object defining constant line label options. */
        label?: PolarConstantLineLabel;
        /** Specifies a value to be displayed by a constant line. */
        value?: any;
    }
    export interface Axis {
        /** Specifies a coefficient for dividing the value axis. */
        axisDivisionFactor?: number;
        /** Specifies the order in which discrete values are arranged on the value axis. */
        categories?: Array<any>;
        /** Specifies the value to be raised to a power when generating ticks for a logarithmic axis. */
        logarithmBase?: number;
        /** Specifies an interval between axis ticks/grid lines. */
        tickInterval?: any;
        /** Specifies the interval between minor ticks. */
        minorTickInterval?: any;
        /** Specifies the number of minor ticks between two neighboring major ticks. */
        minorTickCount?: number;
        /** Specifies the required type of the value axis. */
        type?: string;
        /** Specifies options for value axis strips. */
        strips?: Array<Strip>;
    }
    export interface ChartAxis extends ChartCommonAxisSettings, Axis {
        /** Defines an array of the value axis constant lines. */
        constantLines?: Array<ChartConstantLine>;
        /** Specifies the appearance options for the constant lines of the value axis. */
        constantLineStyle?: ChartCommonConstantLineStyle;
        /** Specifies options for value axis labels. */
        label?: ChartAxisLabel;
        /** Specifies the maximum value on the value axis. */
        max?: any;
        /** Specifies the minimum value on the value axis. */
        min?: any;
        /** Specifies the position of the value axis on a chart. */
        position?: string;
        /** Specifies the title for a value axis. */
        title?: AxisTitle;
    }
    export interface PolarAxis extends PolarCommonAxisSettings, Axis {
        /** Defines an array of the value axis constant lines. */
        constantLines?: Array<PolarConstantLine>;
        /** Specifies options for value axis labels. */
        label?: PolarAxisLabel;
    }
    export interface ArgumentAxis {
        /** Specifies the desired type of axis values. */
        argumentType?: string;
        /** Specifies the elements that will be highlighted when the argument axis is hovered over. */
        hoverMode?: string;
    }
    export interface ChartArgumentAxis extends ChartAxis, ArgumentAxis { }
    export interface PolarArgumentAxis extends PolarAxis, ArgumentAxis {
        /** Specifies a start angle for the argument axis in degrees. */
        startAngle?: number;
        /** Specifies whether or not to display the first point at the angle specified by the startAngle option. */
        firstPointOnStartAngle?: boolean;
        /** Specifies the period of the argument values in the data source. */
        period?: number;
    }
    export interface ValueAxis {
        /** Specifies the name of the value axis. */
        name?: string;
        /** Specifies whether or not to indicate a zero value on the value axis. */
        showZero?: boolean;
        /** Specifies the desired type of axis values. */
        valueType?: string;
    }
    export interface ChartValueAxis extends ChartAxis, ValueAxis {
        /** Specifies the spacing, in pixels, between multiple value axes in a chart. */
        multipleAxesSpacing?: number;
        /** Specifies the value by which the chart's value axes are synchronized. */
        synchronizedValue?: number;
    }
    export interface PolarValueAxis extends PolarAxis, ValueAxis {
        /** Indicates whether to display series with indents from axis boundaries. */
        valueMarginsEnabled?: boolean;
        /** Specifies a coefficient that determines the spacing between the maximum series point and the axis. */
        maxValueMargin?: number;
        /** Specifies a coefficient that determines the spacing between the minimum series point and the axis. */
        minValueMargin?: number;
        tick?: {
            visible?: boolean;
        }
    }
    export interface CommonPane {
        /** Specifies a background color in a pane. */
        backgroundColor?: string;
        /** Specifies the border options of a chart's pane. */
        border?: PaneBorder;
    }
    export interface Pane extends CommonPane {
        /** Specifies the name of a pane. */
        name?: string;
    }
    export interface PaneBorder extends viz.core.DashedBorderWithOpacity {
        /** Specifies the bottom border's visibility state in a pane. */
        bottom?: boolean;
        /** Specifies the left border's visibility state in a pane. */
        left?: boolean;
        /** Specifies the right border's visibility state in a pane. */
        right?: boolean;
        /** Specifies the top border's visibility state in a pane. */
        top?: boolean;
    }
    export interface ChartAnimation extends viz.core.Animation {
        /** Specifies the maximum series point count in the chart that the animation supports. */
        maxPointCountSupported?: number;
    }
    export interface BaseChartTooltip extends viz.core.Tooltip {
        /** Specifies a format for arguments of the chart's series points. */
        argumentFormat?: string;
        /** Specifies a precision for formatted arguments displayed in tooltips. */
        argumentPrecision?: number;
        /** Specifies a precision for a percent value displayed in tooltips for stacked series and dxPieChart series. */
        percentPrecision?: number;
    }
    export interface BaseChartOptions<TPoint> extends viz.core.BaseWidgetOptions {
        /** Specifies adaptive layout options. */
        adaptiveLayout?: {
            /** Specifies the width of the widget container that is small enough for the layout to begin adapting. */
            width?: number;
            /** Specifies the height of the widget container that is small enough for the layout to begin adapting. */
            height?: number;
            /** Specifies whether or not point labels can be hidden when the layout is adapting. */
            keepLabels?: boolean;
        };
        /** Specifies animation options. */
        animation?: ChartAnimation;
        /** Specifies a callback function that returns an object with options for a specific point label. */
        customizeLabel?: (labelInfo: Object) => Object;
        /** Specifies a callback function that returns an object with options for a specific point. */
        customizePoint?: (pointInfo: Object) => Object;
        /** Specifies a data source for the chart. */
        dataSource?: any;
        done?: Function;
        /** Specifies the appearance of the loading indicator. */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** Specifies options of a dxChart's (dxPieChart's) legend. */
        legend?: core.BaseLegend;
        /** Specifies the blank space between the chart's extreme elements and the boundaries of the area provided for the widget (see size) in pixels. */
        margin?: viz.core.Margins;
        /** Sets the name of the palette to be used in the chart. Alternatively, an array of colors can be set as a custom palette to be used within this chart. */
        palette?: any;
        /** A handler for the done event. */
        onDone?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        /** A handler for the pointClick event. */
        onPointClick?: any;
        pointClick?: any;
        /** A handler for the pointHoverChanged event. */
        onPointHoverChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TPoint;
        }) => void;
        pointHoverChanged?: (point: TPoint) => void;
        /** A handler for the pointSelectionChanged event. */
        onPointSelectionChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TPoint;
        }) => void;
        pointSelectionChanged?: (point: TPoint) => void;
        /** Specifies whether a single point or multiple points can be selected in the chart. */
        pointSelectionMode?: string;
        /** Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates. */
        redrawOnResize?: boolean;
        /** Specifies options for the dxChart and dxPieChart widget series. */
        series?: any;
        /** Specifies the size of the widget in pixels. */
        size?: viz.core.Size;
        /** Sets the name of the theme to be used in the chart. */
        theme?: string;
        /** Specifies a title for the chart. */
        title?: {
            /** Specifies font options for the title. */
            font?: viz.core.Font;
            /** Specifies the title's horizontal position in the chart. */
            horizontalAlignment?: string;
            /** Specifies a title's position on the chart in the vertical direction. */
            verticalAlignment?: string;
            /** Specifies the distance between the title and surrounding chart elements in pixels. */
            margin?: viz.core.Margins;
            /** Specifies the height of the space reserved for the title. */
            placeholderSize?: number;
            /** Specifies a text for the chart's title. */
            text?: string;
        };
        /** Specifies tooltip options. */
        tooltip?: BaseChartTooltip;
        /** A handler for the tooltipShown event. */
        onTooltipShown?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        /** A handler for the tooltipHidden event. */
        onTooltipHidden?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        tooltipHidden?: (point: TPoint) => void;
        tooltipShown?: (point: TPoint) => void;
    }
    /** A base class for all chart widgets included in the ChartJS library. */
    export class BaseChart extends viz.core.BaseWidget {
        /** Deselects the chart's selected series. The series is displayed in an initial style. */
        clearSelection(): void;
        /** Gets the current size of the widget. */
        getSize(): { width: number; height: number };
        /** Displays the loading indicator. */
        showLoadingIndicator(): void;
        /** Conceals the loading indicator. */
        hideLoadingIndicator(): void;
        /** Hides all widget tooltips. */
        hideTooltip(): void;
        /** Redraws a widget. */
        render(renderOptions?: {
            force?: boolean;
            animate?: boolean;
            asyncSeriesRendering?: boolean;
        }): void;
    }
    export interface AdvancedLegend extends core.BaseLegend {
        /** Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item. */
        customizeHint?: (seriesInfo: { seriesName: string; seriesIndex: number; seriesColor: string; }) => string;
        /** <p>Specifies a callback function that returns the text to be displayed by legend items.</p> */
        customizeText?: (seriesInfo: { seriesName: string; seriesIndex: number; seriesColor: string; }) => string;
        /** Specifies what series elements to highlight when a corresponding item in the legend is hovered over. */
        hoverMode?: string;
    }
    export interface AdvancedOptions<TPoint, TSeries> extends BaseChartOptions<TPoint> {
        /** A handler for the argumentAxisClick event. */
        onArgumentAxisClick?: any;
        /** Specifies the color of the parent page element. */
        containerBackgroundColor?: string;
        /** An object providing options for managing data from a data source. */
        dataPrepareSettings?: {
            /** Specifies whether or not to validate the values from a data source. */
            checkTypeForAllData?: boolean;
            /** Specifies whether or not to convert the values from a data source into the data type of an axis. */
            convertToAxisDataType?: boolean;
            /** Specifies how to sort the series points. */
            sortingMethod?: any;
        };
        /** A handler for the legendClick event. */
        onLegendClick?: any;
        /** A handler for the seriesClick event. */
        onSeriesClick?: any;
        /** A handler for the seriesHoverChanged event. */
        onSeriesHoverChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TSeries;
        }) => void;
        /** A handler for the seriesSelectionChanged event. */
        onSeriesSelectionChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TSeries;
        }) => void;
        /** Specifies whether a single series or multiple series can be selected in the chart. */
        seriesSelectionMode?: string;
        /** Specifies how the chart must behave when series point labels overlap. */
        resolveLabelOverlapping?: string;
    }
    export interface Legend extends AdvancedLegend {
        /** Specifies whether the legend is located outside or inside the chart's plot. */
        position?: string;
    }
    export interface ChartTooltip extends BaseChartTooltip {
        /** Specifies whether the tooltip must be located in the center of a bar or on its edge. Applies only to the Bar series. */
        location?: string;
        /** Specifies the kind of information to display in a tooltip. */
        shared?: boolean;
    }
    export interface dxChartOptions extends AdvancedOptions<ChartPoint, ChartSeries> {
        /** Specifies a value indicating whether all bars in a series must have the same width, or may have different widths if any points in other series are missing. */
        equalBarWidth?: any;
        adaptiveLayout?: {
            keepLabels?: boolean;
        };
        /** Indicates whether or not to synchronize value axes when they are displayed on a single pane. */
        synchronizeMultiAxes?: boolean;
        /** Specifies whether or not to filter the series points depending on their quantity. */
        useAggregation?: boolean;
        /** Indicates whether or not to adjust a value axis to the current minimum and maximum values of a zoomed chart. */
        adjustOnZoom?: boolean;
        /** Specifies argument axis options for the dxChart widget. */
        argumentAxis?: ChartArgumentAxis;
        argumentAxisClick?: any;
        /** An object defining the configuration options that are common for all axes of the dxChart widget. */
        commonAxisSettings?: ChartCommonAxisSettings;
        /** An object defining the configuration options that are common for all panes in the dxChart widget. */
        commonPaneSettings?: CommonPane;
        /** An object defining the configuration options that are common for all series of the dxChart widget. */
        commonSeriesSettings?: CommonSeriesSettings;
        /** An object that specifies the appearance options of the chart crosshair. */
        crosshair?: {
            /** Specifies a color for the crosshair lines. */
            color?: string;
            /** Specifies a dash style for the crosshair lines. */
            dashStyle?: string;
            /** Specifies whether to enable the crosshair or not. */
            enabled?: boolean;
            /** Specifies the opacity of the crosshair lines. */
            opacity?: number;
            /** Specifies the width of the crosshair lines. */
            width?: number;
            /** Specifies the appearance of the horizontal crosshair line. */
            horizontalLine?: CrosshaierWithLabel;
            /** Specifies the appearance of the vertical crosshair line. */
            verticalLine?: CrosshaierWithLabel;
            /** Specifies the options of the crosshair labels. */
            label?: {
                /** Specifies a color for the background of the crosshair labels. */
                backgroundColor?: string;
                /** Specifies whether the crosshair labels are visible or not. */
                visible?: boolean;
                /** Specifies font options for the text of the crosshair labels. */
                font?: viz.core.Font;
            }
        };
        /** Specifies a default pane for the chart's series. */
        defaultPane?: string;
        /** Specifies a coefficient determining the diameter of the largest bubble. */
        maxBubbleSize?: number;
        /** Specifies the diameter of the smallest bubble measured in pixels. */
        minBubbleSize?: number;
        /** Defines the dxChart widget's <a href="/Documentation/Howto/Data_Visualization/Charts/Chart_Elements?version=14_2#Panes">pane(s)</a>. */
        panes?: Array<Pane>;
        /** Swaps the axes round so that the value axis becomes horizontal and the argument axes becomes vertical. */
        rotated?: boolean;
        /** Specifies the options of a chart's legend. */
        legend?: Legend;
        /** Specifies options for dxChart widget series. */
        series?: Array<SeriesConfig>;
        legendClick?: any;
        seriesClick?: any;
        seriesHoverChanged?: (series: ChartSeries) => void;
        seriesSelectionChanged?: (series: ChartSeries) => void;
        /** Defines options for the series template. */
        seriesTemplate?: SeriesTemplate;
        /** Specifies tooltip options. */
        tooltip?: ChartTooltip;
        /** Specifies value axis options for the dxChart widget. */
        valueAxis?: Array<ChartValueAxis>;
        /** Enables scrolling in your chart. */
        scrollingMode?: string;
        /** Enables zooming in your chart. */
        zoomingMode?: string;
        /** Specifies the settings of the scroll bar. */
        scrollBar?: {
            /** Specifies whether the scroll bar is visible or not. */
            visible?: boolean;
            /** Specifies the spacing between the scroll bar and the chart's plot in pixels. */
            offset?: number;
            /** Specifies the color of the scroll bar. */
            color?: string;
            /** Specifies the width of the scroll bar in pixels. */
            width?: number;
            /** Specifies the opacity of the scroll bar. */
            opacity?: number;
            /** Specifies the position of the scroll bar in the chart. */
            position?: string;
        };
    }
    /** A widget used to embed charts into HTML JS applications. */
    export class dxChart extends BaseChart {
        constructor(element: JQuery, options?: dxChartOptions);
        constructor(element: Element, options?: dxChartOptions);
        /** Returns an array of all series in the chart. */
        getAllSeries(): Array<ChartSeries>;
        /** Gets a series within the chart's series collection by the specified name (see the name option). */
        getSeriesByName(seriesName: string): ChartSeries;
        /** Gets a series within the chart's series collection by its position number. */
        getSeriesByPos(seriesIndex: number): ChartSeries;
        /** Sets the specified start and end values for the chart's argument axis. */
        zoomArgument(startValue: any, endValue: any): void;
    }
    interface CrosshaierWithLabel extends viz.core.DashedBorderWithOpacity {
        /** Configures the label that belongs to the horizontal crosshair line. */
        label?: {
            /** Specifies a color for the background of the label that belongs to the horizontal crosshair line. */
            backgroundColor?: string;
            /** Specifies whether the label of the horizontal crosshair line is visible or not. */
            visible?: boolean;
            /** Specifies font options for the text of the label that belongs to the horizontal crosshair line. */
            font?: viz.core.Font;
        }
    }
    export interface PolarChartTooltip extends BaseChartTooltip {
        /** Specifies the kind of information to display in a tooltip. */
        shared?: boolean;
    }
    export interface dxPolarChartOptions extends AdvancedOptions<PolarPoint, PolarSeries> {
        /** Specifies a value indicating whether all bars in a series must have the same angle, or may have different angles if any points in other series are missing. */
        equalBarWidth?: boolean;
        /** Specifies adaptive layout options. */
        adaptiveLayout?: {
            width?: number;
            height?: number;
            /** Specifies whether or not point labels can be hidden when the layout is adapting. */
            keepLabels?: boolean;
        };
        /** Indicates whether or not to display a "spider web". */
        useSpiderWeb?: boolean;
        /** Specifies argument axis options for the dxPolarChart widget. */
        argumentAxis?: PolarArgumentAxis;
        /** An object defining the configuration options that are common for all axes of the dxPolarChart widget. */
        commonAxisSettings?: PolarCommonAxisSettings;
        /** An object defining the configuration options that are common for all series of the dxPolarChart widget. */
        commonSeriesSettings?: CommonPolarSeriesSettings;
        /** Specifies the options of a chart's legend. */
        legend?: AdvancedLegend;
        /** Specifies options for dxPolarChart widget series. */
        series?: Array<PolarSeriesConfig>;
        /** Defines options for the series template. */
        seriesTemplate?: PolarSeriesTemplate;
        /** Specifies tooltip options. */
        tooltip?: PolarChartTooltip;
        /** Specifies value axis options for the dxPolarChart widget. */
        valueAxis?: PolarValueAxis;
    }
    /** A chart widget displaying data in a polar coordinate system. */
    export class dxPolarChart extends BaseChart {
        constructor(element: JQuery, options?: dxPolarChartOptions);
        constructor(element: Element, options?: dxPolarChartOptions);
        /** Returns an array of all series in the chart. */
        getAllSeries(): Array<PolarSeries>;
        /** Gets a series within the chart's series collection by the specified name (see the name option). */
        getSeriesByName(seriesName: string): PolarSeries;
        /** Gets a series within the chart's series collection by its position number. */
        getSeriesByPos(seriesIndex: number): PolarSeries;
    }
    export interface PieLegend extends core.BaseLegend {
        /** Specifies what chart elements to highlight when a corresponding item in the legend is hovered over. */
        hoverMode?: string;
    }
    export interface dxPieChartOptions extends BaseChartOptions<PiePoint> {
        /** Specifies adaptive layout options. */
        adaptiveLayout?: {
            /** Specifies whether or not point labels can be hidden when the layout is adapting. */
            keepLabels?: boolean;
        };
        /** Specifies dxPieChart legend options. */
        legend?: PieLegend;
        /** Specifies options for the series of the dxPieChart widget. */
        series?: Array<PieSeriesConfig>;
        /** Specifies the diameter of the pie. */
        diameter?: number;
        /** A handler for the legendClick event. */
        onLegendClick?: any;
        legendClick?: any;
        /** Specifies how the chart must behave when series point labels overlap. */
        resolveLabelOverlapping?: string;
    }
    /** A circular chart widget for HTML JS applications. */
    export class dxPieChart extends BaseChart {
        constructor(element: JQuery, options?: dxPieChartOptions);
        constructor(element: Element, options?: dxPieChartOptions);
        /** Provides access to the dxPieChart series. */
        getSeries(): PieSeries;
    }
}
declare module DevExpress.viz.core {
    export interface Border {
        /** Sets a border color for a selected series. */
        color?: string;
        /** Sets border visibility for a selected series. */
        visible?: boolean;
        /** Sets a border width for a selected series. */
        width?: number;
    }
    export interface DashedBorder extends Border {
        /** Specifies a dash style for the border of a selected series point. */
        dashStyle?: string;
    }
    export interface DashedBorderWithOpacity extends DashedBorder {
        /** Specifies the opacity of the tooltip's border. */
        opacity?: number;
    }
    export interface Font {
        /** Specifies the font color for a strip label. */
        color?: string;
        /** Specifies the font family for a strip label. */
        family?: string;
        /** Specifies the font opacity for a strip label. */
        opacity?: number;
        /** Specifies the font size for a strip label. */
        size?: any;
        /** Specifies the font weight for the text displayed in strips. */
        weight?: number;
    }
    export interface Hatching {
        /** Specifies how to apply hatching to highlight a selected series. */
        direction?: string;
        /** Specifies the opacity of hatching lines. */
        opacity?: number;
        /** Specifies the distance between hatching lines in pixels. */
        step?: number;
        /** Specifies the width of hatching lines in pixels. */
        width?: number;
    }
    export interface Margins {
        /** Specifies the legend's bottom margin in pixels. */
        bottom?: number;
        /** Specifies the legend's left margin in pixels. */
        left?: number;
        /** Specifies the legend's right margin in pixels. */
        right?: number;
        /** Specifies the legend's bottom margin in pixels. */
        top?: number;
    }
    export interface Size {
        /** Specifies the width of the widget. */
        width?: number;
        /** Specifies the height of the widget. */
        height?: number;
    }
    export interface Tooltip {
        /** Specifies the length of the tooltip's arrow in pixels. */
        arrowLength?: number;
        /** Specifies the appearance of the tooltip's border. */
        border?: viz.core.DashedBorderWithOpacity;
        /** Specifies a color for the tooltip. */
        color?: string;
        customizeText?: Function;
        /** Allows you to change the appearance of particular tooltips. */
        customizeTooltip?: (arg: Object) => { color?: string; text?: string };
        /** Specifies whether or not the tooltip is enabled. */
        enabled?: boolean;
        /** Specifies font options for the text displayed by the tooltip. */
        font?: Font;
        /** Specifies a format for the text displayed by the tooltip. */
        format?: string;
        /** Specifies the opacity of a tooltip. */
        opacity?: number;
        /** Specifies a distance from the tooltip's left/right boundaries to the inner text in pixels. */
        paddingLeftRight?: number;
        /** Specifies a distance from the tooltip's top/bottom boundaries to the inner text in pixels. */
        paddingTopBottom?: number;
        /** Specifies a precision for formatted values displayed by the tooltip. */
        precision?: number;
        /** Specifies options of the tooltip's shadow. */
        shadow?: {
            /** Specifies the blur distance of the tooltip's shadow. */
            blur?: number;
            /** Specifies the color of the tooltip's shadow. */
            color?: string;
            /** Specifies the horizontal offset of the tooltip's shadow relative to the tooltip in pixels. */
            offsetX?: number;
            /** Specifies the vertical offset of the tooltip's shadow relative to the tooltip in pixels. */
            offsetY?: number;
            /** Specifies the opacity of the tooltip's shadow. */
            opacity?: number;
        };
    }
    export interface Animation {
        /** Determines how long animation runs. */
        duration?: number;
        /** Specifies the animation easing mode. */
        easing?: string;
        /** Indicates whether or not animation is enabled. */
        enabled?: boolean;
    }
    export interface LoadingIndicator {
        /** Specifies a color for the loading indicator background. */
        backgroundColor?: string;
        /** Specifies font options for the loading indicator text. */
        font?: viz.core.Font;
        /** Specifies whether to show the loading indicator or not. */
        show?: boolean;
        /** Specifies a text to be displayed by the loading indicator. */
        text?: string;
    }
    export interface LegendBorder extends viz.core.DashedBorderWithOpacity {
        /** Specifies a radius for the corners of the legend border. */
        cornerRadius?: number;
    }
    export interface BaseLegend {
        /** Specifies the color of the legend's background. */
        backgroundColor?: string;
        /** Specifies legend border settings. */
        border?: viz.core.LegendBorder;
        /** Specifies how many columns must be taken to arrange legend items. */
        columnCount?: number;
        /** Specifies the spacing between a pair of neighboring legend columns in pixels. */
        columnItemSpacing?: number;
        /** Specifies whether or not item columns in the legend have an equal width. */
        equalColumnWidth?: boolean;
        /** Specifies font options for legend items. */
        font?: viz.core.Font;
        /** Specifies the legend's position on the map. */
        horizontalAlignment?: string;
        /** Specifies the alignment of legend items. */
        itemsAlignment?: string;
        /** Specifies the position of text relative to the item marker. */
        itemTextPosition?: string;
        /** Specifies the distance between the legend and the container borders in pixels. */
        margin?: viz.core.Margins;
        /** Specifies the size of item markers in the legend in pixels. */
        markerSize?: number;
        /** Specifies whether to arrange legend items horizontally or vertically.  */
        orientation?: string;
        /** Specifies the spacing between the legend left/right border and legend items in pixels. */
        paddingLeftRight?: number;
        /** Specifies the spacing between the legend top/bottom border and legend items in pixels. */
        paddingTopBottom?: number;
        /** Specifies how many rows must be taken to arrange legend items. */
        rowCount?: number;
        /** Specifies the spacing between a pair of neighboring legend rows in pixels. */
        rowItemSpacing?: number;
        /** Specifies the legend's position on the map. */
        verticalAlignment?: string;
        /** Specifies whether or not the legend is visible on the map. */
        visible?: boolean;
    }
    export interface BaseWidgetOptions {
        drawn?: (widget: Object) => void;
        /** A handler for the drawn event. */
        onDrawn?: (e: {
            component: BaseWidget;
            element: Element;
        }) => void;
        incidentOccured?: (incidentInfo: {
            id: string;
            type: string;
            args: any;
            text: string;
            widget: string;
            version: string;
        }) => void;
        /** A handler for the incidentOccurred event. */
        onIncidentOccurred?: (
        component: BaseWidget,
        element: Element,
        target: {
            id: string;
            type: string;
            args: any;
            text: string;
            widget: string;
            version: string;
        }
        ) => void;
        /** Notifies a widget that it is embedded into an HTML page that uses a path modifier. */
        pathModified?: boolean;
        /** Specifies whether or not the widget supports right-to-left representation. */
        rtlEnabled?: boolean;
    }
    /** This section describes options and methods that are common to all widgets. */
    export class BaseWidget extends DOMComponent {
        /** Returns the widget's SVG markup. */
        svg(): string;
    }
}
declare module DevExpress.viz.gauges {
    export interface BaseRangeContainer {
        /** Specifies a range container's background color. */
        backgroundColor?: string;
        /** Specifies the offset of the range container from an invisible scale line in pixels. */
        offset?: number;
        /** Sets the name of the palette or an array of colors to be used for coloring the gauge range container. */
        palette?: any;
        /** An array of objects representing ranges contained in the range container. */
        ranges?: Array<{ startValue: number; endValue: number; color: string }>;
        /** Specifies a color of a range. */
        color?: string;
        /** Specifies an end value of a range. */
        endValue?: number;
        /** Specifies a start value of a range. */
        startValue?: number;
    }
    export interface ScaleTick {
        /** Specifies the color of the scale's minor ticks. */
        color?: string;
        /** Specifies an array of custom minor ticks. */
        customTickValues?: Array<any>;
        /** Specifies the length of the scale's minor ticks. */
        length?: number;
        /** Indicates whether automatically calculated minor ticks are visible or not. */
        showCalculatedTicks?: boolean;
        /** Specifies an interval between minor ticks. */
        tickInterval?: number;
        /** Indicates whether scale minor ticks are visible or not. */
        visible?: boolean;
        /** Specifies the width of the scale's minor ticks. */
        width?: number;
    }
    export interface ScaleMajorTick extends ScaleTick {
        /** Specifies whether or not to expand the current major tick interval if labels overlap each other. */
        useTicksAutoArrangement?: boolean;
    }
    export interface BaseScaleLabel {
        /** Specifies whether or not scale labels should be colored similarly to their corresponding ranges in the range container. */
        useRangeColors?: boolean;
        /** Specifies a callback function that returns the text to be displayed in scale labels. */
        customizeText?: (scaleValue: { value: number; valueText: string }) => string;
        /** Specifies font options for the text displayed in the scale labels of the gauge. */
        font?: viz.core.Font;
        /** Specifies a format for the text displayed in scale labels. */
        format?: string;
        /** Specifies a precision for the formatted value displayed in the scale labels. */
        precision?: number;
        /** Specifies whether or not scale labels are visible on the gauge. */
        visible?: boolean;
    }
    export interface BaseScale {
        /** Specifies the end value for the scale of the gauge. */
        endValue?: number;
        /** Specifies whether or not to hide the first scale label. */
        hideFirstLabel?: boolean;
        /** Specifies whether or not to hide the first major tick on the scale. */
        hideFirstTick?: boolean;
        /** Specifies whether or not to hide the last scale label. */
        hideLastLabel?: boolean;
        /** Specifies whether or not to hide the last major tick on the scale. */
        hideLastTick?: boolean;
        /** Specifies common options for scale labels. */
        label?: BaseScaleLabel;
        /** Specifies options of the gauge's major ticks. */
        majorTick?: ScaleMajorTick;
        /** Specifies options of the gauge's minor ticks. */
        minorTick?: ScaleTick;
        /** Specifies the start value for the scale of the gauge. */
        startValue?: number;
    }
    export interface BaseSubvalueIndicator {
        /** Specifies the length of an arrow for the subvalue indicator of the textCloud type in pixels. */
        arrowLength?: number;
        /** Specifies the color of a subvalue indicator. */
        color?: string;
        /** Specifies the length for a subvalue indicator of the triangleMarker type in pixels. */
        length?: number;
        /** Sets the array of colors to be used for coloring the subvalue indicators. */
        palette?: Array<any>;
        /** Specifies the appearance of the text displayed in a subvalue indicator of the textCloud type. */
        text?: Object;
        /** Specifies a callback function that returns the text to be displayed in a subvalue indicator of the textCloud type. */
        customizeText?: (indicatedSubvalue: { value: number; valueText: string }) => string;
        /** Specifies font options for the text displayed by a subvalue indicator of the textCloud type. */
        font?: viz.core.Font;
        /** Specifies a format for the text displayed in a subvalue indicator of the textCloud type. */
        format?: string;
        /** Specifies a precision for the formatted value displayed in a subvalue indicator of the textCloud type. */
        precision?: number;
        /** Overriden by descriptions for specific widgets. */
        type?: string;
        /** Specifies the width for a subvalue indicator of the triangleMarker type in pixels. */
        width?: number;
    }
    export interface BaseValueIndicator {
        /** Specifies the background color for the value indicator of the rangeBar type. */
        backgroundColor?: string;
        /** Specifies the base value for the value indicator of the rangeBar type. */
        baseValue?: number;
        /** Specifies the color of the value indicator. */
        color?: string;
        /** Specifies the range bar size for a value indicator of the rangeBar type. */
        size?: number;
        /** Specifies the appearance of the text displayed in a value indicator of the rangeBar type. */
        text?: {
            /** Specifies a callback function that returns the text to be displayed in a value indicator of the rangeBar type. */
            customizeText?: (indicatedValue: { value: number; valueText: string }) => string;
            /** Specifies font options for the text displayed by a value indicator of the rangeBar type. */
            font?: viz.core.Font;
            /** Specifies a format for the text displayed in a value indicator of the rangeBar type. */
            format?: string;
            /** Specifies the range bar's label indent in pixels. */
            indent?: number;
            /** Specifies a precision for the formatted value displayed by a value indicator of the rangeBar type. */
            precision?: number;
        };
    }
    export interface SharedGaugeOptions {
        /** Specifies animation options. */
        animation?: viz.core.Animation;
        /** Specifies the appearance of the loading indicator. */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates. */
        redrawOnResize?: boolean;
        /** Specifies the size of the widget in pixels. */
        size?: viz.core.Size;
        /** Specifies a subtitle for a gauge. */
        subtitle?: {
            /** Specifies font options for the subtitle. */
            font?: viz.core.Font;
            /** Specifies a text for the subtitle. */
            text?: string;
        };
        /** Specifies the name of the theme to be applied. */
        theme?: string;
        /** Specifies a title for a gauge. */
        title?: {
            /** Specifies font options for the title. */
            font?: viz.core.Font;
            /** Specifies a title's position on the gauge. */
            position?: string;
            /** Specifies a text for the title. */
            text?: string;
        };
        /** Specifies options for gauge tooltips. */
        tooltip?: viz.core.Tooltip;
    }
    export interface BaseGaugeOptions extends viz.core.BaseWidgetOptions, SharedGaugeOptions {
        /** Specifies the color of the parent page element. */
        containerBackgroundColor?: string;
        /** Specifies the blank space in pixels between the widget's extreme elements and the boundaries of the area provided for the widget (see the size option). */
        margin?: viz.core.Margins;
        /** Specifies options of the gauge's range container. */
        rangeContainer?: BaseRangeContainer;
        /** Specifies a gauge's scale options. */
        scale?: BaseScale;
        /** Specifies the appearance options of subvalue indicators. */
        subvalueIndicator?: BaseSubvalueIndicator;
        /** Specifies a set of subvalues to be designated by the subvalue indicators. */
        subvalues?: Array<number>;
        /** Specifies the main value on a gauge. */
        value?: number;
        /** Specifies the appearance options of the value indicator. */
        valueIndicator?: BaseValueIndicator;
    }
    /** A gauge widget. */
    export class dxBaseGauge extends viz.core.BaseWidget {
        /** Displays the loading indicator. */
        showLoadingIndicator(): void;
        /** Conceals the loading indicator. */
        hideLoadingIndicator(): void;
        /** Redraws a widget. */
        render(): void;
        /** Returns the main gauge value. */
        value(): number;
        /** Updates a gauge value. */
        value(value: number): void;
        /** Returns an array of gauge subvalues. */
        subvalues(): Array<number>;
        /** Updates gauge subvalues. */
        subvalues(subvalues: Array<number>): void;
    }
    export interface LinearRangeContainer extends BaseRangeContainer {
        /** Specifies the orientation of the range container on a vertically oriented dxLinearGauge widget. */
        horizontalOrientation?: string;
        /** Specifies the orientation of a range container on a horizontally oriented dxLinearGauge widget. */
        verticalOrientation?: string;
        /** Specifies the width of the range container's start and end boundaries in the dxLinearGauge widget. */
        width?: any;
        /** Specifies an end width of a range container. */
        end?: number;
        /** Specifies a start width of a range container. */
        start?: number;
    }
    export interface LinearScaleLabel extends BaseScaleLabel {
        /** Specifies the spacing between scale labels and ticks. */
        indentFromTick?: number;
    }
    export interface LinearScale extends BaseScale {
        /** Specifies the orientation of scale ticks on a vertically oriented dxLinearGauge widget. */
        horizontalOrientation?: string;
        label?: LinearScaleLabel;
        /** Specifies the orientation of scale ticks on a horizontally oriented dxLinearGauge widget. */
        verticalOrientation?: string;
    }
    export interface LinearSubvalueIndicator extends BaseSubvalueIndicator {
        /** Specifies the orientation of the subvalue indicators on a vertically oriented dxLinearGauge widget. */
        horizontalOrientation?: string;
        /** Specifies the distance between a subvalue indicator and an invisible scale line in pixels. */
        offset?: number;
        /** Specifies the orientation of the subvalue indicators on a horizontally oriented dxLinearGauge widget. */
        verticalOrientation?: string;
    }
    export interface LinearValueIndicator extends BaseValueIndicator {
        /** Specifies the orientation of the rangeBar value indicator on a vertically oriented dxLinearGauge widget. */
        horizontalOrientation?: string;
        /** Specifies the length of a value indicator in pixels. */
        length?: number;
        /** Specifies the distance between a value indicator and an invisible scale line. */
        offset?: number;
        /** Specifies the type of the value indicator. */
        type?: string;
        /** Specifies the orientation of the rangeBar value indicator on a horizontally oriented dxLinearGauge widget. */
        verticalOrientation?: string;
        /** Specifies the width of a value indicator in pixels. */
        width?: number;
    }
    export interface dxLinearGaugeOptions extends BaseGaugeOptions {
        /** Specifies the options required to set the geometry of the dxLinearGauge widget. */
        geometry?: {
            /** Indicates whether to display the dxLinearGauge widget vertically or horizontally. */
            orientation?: string;
        };
        /** Specifies gauge range container options. */
        rangeContainer?: LinearRangeContainer;
        scale?: LinearScale;
        subvalueIndicator?: LinearSubvalueIndicator;
        valueIndicator?: LinearValueIndicator;
    }
    /** A widget that represents a gauge with a linear scale. */
    export class dxLinearGauge extends dxBaseGauge {
        constructor(element: JQuery, options?: dxLinearGaugeOptions);
        constructor(element: Element, options?: dxLinearGaugeOptions);
    }
    export interface CircularRangeContainer extends BaseRangeContainer {
        /** Specifies the orientation of the range container in the dxCircularGauge widget. */
        orientation?: string;
        /** Specifies the range container's width in pixels. */
        width?: number;
    }
    export interface CircularScaleLabel extends BaseScaleLabel {
        /** Specifies the spacing between scale labels and ticks. */
        indentFromTick?: number;
    }
    export interface CircularScale extends BaseScale {
        label?: CircularScaleLabel;
        /** Specifies the orientation of scale ticks. */
        orientation?: string;
    }
    export interface CircularSubvalueIndicator extends BaseSubvalueIndicator {
        /** Specifies the distance between a subvalue indicator and an invisible scale line in pixels. */
        offset?: number;
    }
    export interface CircularValueIndicator extends BaseValueIndicator {
        /** Specifies the distance between the needle and the center of a gauge for the value indicator of needle-like types. */
        indentFromCenter?: number;
        /** Specifies the distance between the value indicator and the invisible scale line. */
        offset?: number;
        /** Specifies the second color for the value indicator of the twoColorNeedle type. */
        secondColor?: string;
        /** Specifies the length of a twoNeedleColor type value indicator tip as a percentage. */
        secondFraction?: number;
        /** Specifies the inner diameter in pixels, so that the spindle has the shape of a ring. */
        spindleGapSize?: number;
        /** Specifies the spindle's diameter in pixels for the value indicator of a needle-like type. */
        spindleSize?: number;
        /** Specifies the value indicator type. */
        type?: string;
        /** Specifies, in pixels, the width for a value indicator of a needle-like type. */
        width?: number;
    }
    export interface dxCircularGaugeOptions extends BaseGaugeOptions {
        /** Specifies the options required to set the geometry of the dxCircularGauge widget. */
        geometry?: {
            /** Specifies the end angle of the circular gauge's arc. */
            endAngle?: number;
            /** Specifies the start angle of the circular gauge's arc. */
            startAngle?: number;
        };
        /** Specifies gauge range container options. */
        rangeContainer?: CircularRangeContainer;
        scale?: CircularScale;
        subvalueIndicator?: CircularSubvalueIndicator;
        valueIndicator?: CircularValueIndicator;
    }
    /** A widget that represents a gauge with a circular scale. */
    export class dxCircularGauge extends dxBaseGauge {
        constructor(element: JQuery, options?: dxCircularGaugeOptions);
        constructor(element: Element, options?: dxCircularGaugeOptions);
    }
    export interface dxBarGaugeOptions extends viz.core.BaseWidgetOptions, SharedGaugeOptions {
        /** Specifies a color for the remaining segment of the bar's track. */
        backgroundColor?: string;
        /** Specifies a distance between bars in pixels. */
        barSpacing?: number;
        /** Specifies a base value for bars. */
        baseValue?: number;
        /** Specifies an end value for the gauge's invisible scale. */
        endValue?: number;
        /** Defines the shape of the gauge's arc. */
        geometry?: {
            /** Specifies the end angle of the bar gauge's arc. */
            endAngle?: number;
            /** Specifies the start angle of the bar gauge's arc. */
            startAngle?: number;
        };
        /** Specifies the options of the labels that accompany gauge bars. */
        label?: {
            /** Specifies a color for the label connector text. */
            connectorColor?: string;
            /** Specifies the width of the label connector in pixels. */
            connectorWidth?: number;
            /** Specifies a callback function that returns a text for labels. */
            customizeText?: (barValue: { value: number; valueText: string }) => string;
            /** Specifies font options for bar labels. */
            font?: viz.core.Font;
            /** Specifies a format for bar labels. */
            format?: string;
            /** Specifies the distance between the upper bar and bar labels in pixels. */
            indent?: number;
            /** Specifies a precision for the formatted value displayed by labels. */
            precision?: number;
            /** Specifies whether bar labels appear on a gauge or not. */
            visible?: boolean;
        };
        /** Sets the name of the palette or an array of colors to be used for coloring the gauge range container. */
        palette?: string;
        /** Defines the radius of the bar that is closest to the center relatively to the radius of the topmost bar. */
        relativeInnerRadius?: number;
        /** Specifies a start value for the gauge's invisible scale. */
        startValue?: number;
        /** Specifies the array of values to be indicated on a bar gauge. */
        values?: Array<number>;
    }
    /** A circular bar widget. */
    export class dxBarGauge extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxBarGaugeOptions);
        constructor(element: Element, options?: dxBarGaugeOptions);
        /** Displays the loading indicator. */
        showLoadingIndicator(): void;
        /** Conceals the loading indicator. */
        hideLoadingIndicator(): void;
        /** Redraws the widget. */
        render(): void;
        /** Returns an array of gauge values. */
        values(): Array<number>;
        /** Updates the values displayed by a gauge. */
        values(values: Array<number>): void;
    }
}
declare module DevExpress.viz.map {
    /** This section describes the fields and methods that can be used in code to manipulate the Area object. */
    export interface Area {
        /** Contains the element type. */
        type: string;
        /** Return the value of an attribute. */
        attribute(name: string): any;
        /** Provides information about the selection state of an area. */
        selected(): boolean;
        /** Sets a new selection state for an area. */
        selected(state: boolean): void;
    }
    /** This section describes the fields and methods that can be used in code to manipulate the Markers object. */
    export interface Marker {
        /** Contains the descriptive text accompanying the map marker. */
        text: string;
        /** Contains the type of the element. */
        type: string;
        /** Contains the URL of an image map marker. */
        url: string;
        /** Contains the value of a bubble map marker. */
        value: number;
        /** Contains the values of a pie map marker. */
        values: Array<number>;
        /** Returns the value of an attribute. */
        attribute(name: string): any;
        /** Returns the coordinates of a specific marker. */
        coordinates(): Array<number>;
        /** Provides information about the selection state of a marker. */
        selected(): boolean;
        /** Sets a new selection state for a marker. */
        selected(state: boolean): void;
    }
    export interface AreaSettings {
        /** Specifies the width of the area border in pixels. */
        borderWidth?: number;
        /** Specifies a color for the area border. */
        borderColor?: string;
        click?: any;
        /** Specifies a color for an area. */
        color?: string;
        /** Specifies the function that customizes each area individually. */
        customize?: (areaInfo: Area) => AreaSettings;
        /** Specifies a color for the area border when the area is hovered over. */
        hoveredBorderColor?: string;
        /** Specifies the pixel-measured width of the area border when the area is hovered over. */
        hoveredBorderWidth?: number;
        /** Specifies a color for an area when this area is hovered over. */
        hoveredColor?: string;
        /** Specifies whether or not to change the appearance of an area when it is hovered over. */
        hoverEnabled?: boolean;
        /** Configures area labels. */
        label?: {
            /** Specifies the data field that provides data for area labels. */
            dataField?: string;
            /** Enables area labels. */
            enabled?: boolean;
            /** Specifies font options for area labels. */
            font?: viz.core.Font;
        };
        /** Specifies the name of the palette or a custom range of colors to be used for coloring a map. */
        palette?: any;
        /** Specifies the number of colors in a palette. */
        paletteSize?: number;
        /** Allows you to paint areas with similar attributes in the same color. */
        colorGroups?: Array<number>;
        /** Specifies the field that provides data to be used for coloring areas. */
        colorGroupingField?: string;
        /** Specifies a color for the area border when the area is selected. */
        selectedBorderColor?: string;
        /** Specifies a color for an area when this area is selected. */
        selectedColor?: string;
        /** Specifies the pixel-measured width of the area border when the area is selected. */
        selectedBorderWidth?: number;
        selectionChanged?: (area: Area) => void;
        /** Specifies whether single or multiple areas can be selected on a vector map. */
        selectionMode?: string;
    }
    export interface MarkerSettings {
        /** Specifies a color for the marker border. */
        borderColor?: string;
        /** Specifies the width of the marker border in pixels. */
        borderWidth?: number;
        click?: any;
        /** Specifies a color for a marker of the dot or bubble type. */
        color?: string;
        /** Specifies the function that customizes each marker individually. */
        customize?: (markerInfo: Marker) => MarkerSettings;
        font?: Object;
        /** Specifies the pixel-measured width of the marker border when the marker is hovered over. */
        hoveredBorderWidth?: number;
        /** Specifies a color for the marker border when the marker is hovered over. */
        hoveredBorderColor?: string;
        /** Specifies a color for a marker of the dot or bubble type when this marker is hovered over. */
        hoveredColor?: string;
        /** Specifies whether or not to change the appearance of a marker when it is hovered over. */
        hoverEnabled?: boolean;
        /** Specifies marker label options. */
        label?: {
            /** Enables marker labels. */
            enabled?: boolean;
            /** Specifies font options for marker labels. */
            font?: viz.core.Font;
        };
        /** Specifies the pixel-measured diameter of the marker that represents the biggest value. Setting this option makes sense only if you use markers of the bubble type. */
        maxSize?: number;
        /** Specifies the pixel-measured diameter of the marker that represents the smallest value. Setting this option makes sense only if you use markers of the bubble type. */
        minSize?: number;
        /** Specifies the opacity of markers. Setting this option makes sense only if you use markers of the bubble type. */
        opacity?: number;
        /** Specifies the pixel-measured width of the marker border when the marker is selected. */
        selectedBorderWidth?: number;
        /** Specifies a color for the marker border when the marker is selected. */
        selectedBorderColor?: string;
        /** Specifies a color for a marker of the dot or bubble type when this marker is selected. */
        selectedColor?: string;
        selectionChanged?: (marker: Marker) => void;
        /** Specifies whether a single or multiple markers can be selected on a vector map. */
        selectionMode?: string;
        /** Specifies the size of markers. Setting this option makes sense for any type of marker except bubble. */
        size?: number;
        /** Specifies the type of markers to be used on the map. */
        type?: string;
        /** Specifies the name of a palette or a custom set of colors to be used for coloring markers of the pie type. */
        palette?: any;
        /** Allows you to paint markers with similar attributes in the same color. */
        colorGroups?: Array<number>;
        /** Specifies the field that provides data to be used for coloring markers. */
        colorGroupingField?: string;
        /** Allows you to display bubbles with similar attributes in the same size. */
        sizeGroups?: Array<number>;
        /** Specifies the field that provides data to be used for sizing bubble markers. */
        sizeGroupingField?: string;
    }
    export interface dxVectorMapOptions extends viz.core.BaseWidgetOptions {
        /** An object specifying options for the map areas. */
        areaSettings?: AreaSettings;
        /** Specifies the options for the map background. */
        background?: {
            /** Specifies a color for the background border. */
            borderColor?: string;
            /** Specifies a color for the background. */
            color?: string;
        };
        /** Specifies the positioning of a map in geographical coordinates. */
        bounds?: Array<number>;
        /** Specifies the options of the control bar. */
        controlBar?: {
            /** Specifies a color for the outline of the control bar elements. */
            borderColor?: string;
            /** Specifies a color for the inner area of the control bar elements. */
            color?: string;
            /** Specifies whether or not to display the control bar. */
            enabled?: boolean;
            /** Specifies the margin of the control bar in pixels. */
            margin?: number;
            /** Specifies the position of the control bar. */
            horizontalAlignment?: string;
            /** Specifies the position of the control bar. */
            verticalAlignment?: string;
        };
        /** Specifies the appearance of the loading indicator. */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** Specifies a data source for the map area. */
        mapData?: any;
        /** Specifies a data source for the map markers. */
        markers?: any;
        /** An object specifying options for the map markers. */
        markerSettings?: MarkerSettings;
        /** Specifies the size of the dxVectorMap widget. */
        size?: viz.core.Size;
        /** Specifies the name of the theme to be applied. */
        theme?: Object;
        /** Specifies tooltip options. */
        tooltip?: viz.core.Tooltip;
        /** Configures map legends. */
        legends?: Array<Legend>;
        /** Specifies whether or not the map should respond when a user rolls the mouse wheel. */
        wheelEnabled?: boolean;
        /** Specifies whether the map should respond to touch gestures. */
        touchEnabled?: boolean;
        /** Disables the zooming capability. */
        zoomingEnabled?: boolean;
        /** Specifies the geographical coordinates of the center for a map. */
        center?: Array<number>;
        centerChanged?: (center: Array<number>) => void;
        /** A handler for the centerChanged event. */
        onCenterChanged?: (e: {
            center: Array<number>;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** Specifies a number that is used to zoom a map initially. */
        zoomFactor?: number;
        zoomFactorChanged?: (zoomFactor: number) => void;
        /** A handler for the zoomFactorChanged event. */
        onZoomFactorChanged?: (e: {
            zoomFactor: number;
            component: dxVectorMap;
            element: Element;
        }) => void;
        click?: any;
        /** A handler for the click event. */
        onClick?: any;
        /** A handler for the areaClick event. */
        onAreaClick?: any;
        /** A handler for the areaSelectionChanged event. */
        onAreaSelectionChanged?: (e: {
            target: Area;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** A handler for the markerClick event. */
        onMarkerClick?: any;
        /** A handler for the markerSelectionChanged event. */
        onMarkerSelectionChanged?: (e: {
            target: Marker;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** Disables the panning capability. */
        panningEnabled?: boolean;
    }
    export interface Legend extends viz.core.BaseLegend {
        /** Specifies text for legend items. */
        customizeText?: (itemInfo: { start: number; end: number; index: number; color: string; size: number; }) => string;
        /** Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item. */
        customizeHint?: (itemInfo: { start: number; end: number; index: number; color: string; size: number }) => string;
        /** Specifies the source of data for the legend. */
        source?: string;
    }
    /** A vector map widget. */
    export class dxVectorMap extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxVectorMapOptions);
        constructor(element: Element, options?: dxVectorMapOptions);
        /** Displays the loading indicator. */
        showLoadingIndicator(): void;
        /** Conceals the loading indicator. */
        hideLoadingIndicator(): void;
        /** Redraws a widget. */
        render(): void;
        /** Gets the current coordinates of the map center. */
        center(): Array<number>;
        /** Sets the coordinates of the map center. */
        center(centerCoordinates: Array<number>): void;
        /** Deselects all the selected areas on a map. The areas are displayed in their initial style after. */
        clearAreaSelection(): void;
        /** Deselects all the selected markers on a map. The markers are displayed in their initial style after. */
        clearMarkerSelection(): void;
        /** Deselects all the selected area and markers on a map at once. The areas and markers are displayed in their initial style after. */
        clearSelection(): void;
        /** Converts client area coordinates into map coordinates. */
        convertCoordinates(x: number, y: number): Array<number>;
        /** Returns an array with all the map areas. */
        getAreas(): Array<Area>;
        /** Returns an array with all the map markers. */
        getMarkers(): Array<Marker>;
        /** Gets the current coordinates of the map viewport. */
        viewport(): Array<any>;
        /** Sets the coordinates of the map viewport. */
        viewport(viewportCoordinates: Array<number>): void;
        /** Gets the current value of the map zoom factor. */
        zoomFactor(): number;
        /** Sets the value of the map zoom factor. */
        zoomFactor(zoomFactor: number): void;
    }
}
declare module DevExpress.viz.rangeSelector {
    export interface dxRangeSelectorOptions extends viz.core.BaseWidgetOptions {
        /** Specifies the options for the range selector's background. */
        background?: {
            /** Specifies the background color for the dxRangeSelector. */
            color?: string;
            /** Specifies image options. */
            image?: {
                /** Specifies a location for the image in the background of a range selector. */
                location?: string;
                /** Specifies the image's URL. */
                url?: string;
            };
            /** Indicates whether or not the background (background color and/or image) is visible. */
            visible?: boolean;
        };
        /** Specifies the dxRangeSelector's behavior options. */
        behavior?: {
            /** Indicates whether or not you can swap sliders. */
            allowSlidersSwap?: boolean;
            /** 
Indicates whether or not animation is enabled.
 */
            animationEnabled?: boolean;
            /** Specifies when to call the onSelectedRangeChanged function. */
            callSelectedRangeChanged?: string;
            /** Indicates whether or not an end user can specify the range using a mouse, without the use of sliders. */
            manualRangeSelectionEnabled?: boolean;
            /** Indicates whether or not an end user can shift the selected range to the required location on a scale by clicking. */
            moveSelectedRangeByClick?: boolean;
            /** Indicates whether to snap a slider to ticks. */
            snapToTicks?: boolean;
        };
        /** Specifies the options required to display a chart as the range selector's background. */
        chart?: {
            /** Specifies a coefficient for determining an indent from the bottom background boundary to the lowest chart point. */
            bottomIndent?: number;
            /** An object defining the common configuration options for the chart’s series. */
            commonSeriesSettings?: viz.charts.CommonSeriesSettings;
            /** An object providing options for managing data from a data source. */
            dataPrepareSettings?: {
                /** Specifies whether or not to validate values from a data source. */
                checkTypeForAllData?: boolean;
                /** Specifies whether or not to convert the values from a data source into the data type of an axis. */
                convertToAxisDataType?: boolean;
                /** Specifies how to sort series points. */
                sortingMethod?: any;
            };
            /** Specifies a value indicating whether all bars in a series must have the same width, or may have different widths if any points in other series are missing. */
            equalBarWidth?: any;
            /** An object defining the chart’s series. */
            series?: Array<viz.charts.SeriesConfig>;
            /** Defines options for the series template. */
            seriesTemplate?: viz.charts.SeriesTemplate;
            /** Specifies a coefficient for determining an indent from the background's top boundary to the topmost chart point. */
            topIndent?: number;
            /** Specifies whether or not to filter the series points depending on their quantity. */
            useAggregation?: boolean;
            /** Specifies options for the chart's value axis. */
            valueAxis?: {
                /** Indicates whether or not the chart's value axis must be inverted. */
                inverted?: boolean;
                /** Specifies the value to be raised to a power when generating ticks for a logarithmic value axis. */
                logarithmBase?: number;
                /** Specifies the maximum value of the chart's value axis. */
                max?: number;
                /** Specifies the minimum value of the chart's value axis. */
                min?: number;
                /** Specifies the type of the value axis. */
                type?: string;
                /** Specifies the desired type of axis values. */
                valueType?: string;
            };
        };
        /** Specifies the color of the parent page element. */
        containerBackgroundColor?: string;
        /** Specifies a data source for the scale values and for the chart at the background. */
        dataSource?: any;
        /** Specifies the data source field that provides data for the scale. */
        dataSourceField?: string;
        /** Specifies the appearance of the loading indicator. */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** Specifies the blank space in pixels between the dxRangeSelector widget's extreme elements and the boundaries of the area provided for the widget (see size). */
        margin?: viz.core.Margins;
        /** Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates. */
        redrawOnResize?: boolean;
        /** Specifies options of the range selector's scale. */
        scale?: {
            /** Specifies the scale's end value. */
            endValue?: any;
            /** Specifies common options for scale labels. */
            label?: {
                /** Specifies a callback function that returns the text to be displayed in scale labels. */
                customizeText?: (scaleValue: { value: any; valueText: string; }) => string;
                /** Specifies font options for the text displayed in the range selector's scale labels. */
                font?: viz.core.Font;
                /** Specifies a format for the text displayed in scale labels. */
                format?: string;
                /** Specifies a precision for the formatted value displayed in the scale labels. */
                precision?: number;
                /** Specifies a spacing between scale labels and the background bottom edge. */
                topIndent?: number;
                /** Specifies whether or not the scale's labels are visible. */
                visible?: boolean;
            };
            /** Specifies the value to be raised to a power when generating ticks for a logarithmic scale. */
            logarithmBase?: number;
            /** Specifies an interval between major ticks. */
            majorTickInterval?: any;
            /** Specifies options for the date-time scale's markers. */
            marker?: {
                /** Defines the options that can be set for the text that is displayed by the scale markers. */
                label?: {
                    /** Specifies a callback function that returns the text to be displayed in scale markers. */
                    customizeText?: (markerValue: { value: any; valueText: string }) => string;
                    /** Specifies a format for the text displayed in scale markers. */
                    format?: string;
                };
                /** Specifies the height of the marker's separator. */
                separatorHeight?: number;
                /** Specifies the space between the marker label and the marker separator. */
                textLeftIndent?: number;
                /** Specifies the space between the marker's label and the top edge of the marker's separator. */
                textTopIndent?: number;
                /** Specified the indent between the marker and the scale lables. */
                topIndent?: number;
                /** Indicates whether scale markers are visible. */
                visible?: boolean;
            };
            /** Specifies the maximum range that can be selected. */
            maxRange?: any;
            /** Specifies the number of minor ticks between neighboring major ticks. */
            minorTickCount?: number;
            /** 
Specifies an interval between minor ticks.
 */
            minorTickInterval?: any;
            /** Specifies the minimum range that can be selected. */
            minRange?: any;
            /** Specifies the height of the space reserved for the scale in pixels. */
            placeholderHeight?: number;
            /** Indicates whether or not to set ticks of a date-time scale at the beginning of each date-time interval. */
            setTicksAtUnitBeginning?: boolean;
            /** Specifies whether or not to show ticks for the boundary scale values, when neither major ticks nor minor ticks are created for these values. */
            showCustomBoundaryTicks?: boolean;
            /** Indicates whether or not to show minor ticks on the scale. */
            showMinorTicks?: boolean;
            /** Specifies the scale's start value. */
            startValue?: any;
            /** Specifies options defining the appearance of scale ticks. */
            tick?: {
                /** Specifies the color of scale ticks (both major and minor ticks). */
                color?: string;
                /** Specifies the opacity of scale ticks (both major and minor ticks). */
                opacity?: number;
                /** Specifies the width of the scale's ticks (both major and minor ticks). */
                width?: number;
            };
            /** Specifies the type of the scale. */
            type?: string;
            /** Specifies whether or not to expand the current tick interval if labels overlap each other. */
            useTicksAutoArrangement?: boolean;
            /** Specifies the type of values on the scale. */
            valueType?: string;
            /** Specifies the order of arguments on a discrete scale. */
            categories?: Array<any>;
        };
        /** Specifies the range to be selected when displaying the dxRangeSelector. */
        selectedRange?: {
            /** Specifies the start value of the range to be selected when displaying the dxRangeSelector widget on a page. */
            startValue?: any;
            /** Specifies the end value of the range to be selected when displaying the dxRangeSelector widget on a page. */
            endValue?: any;
        };
        selectedRangeChanged?: (selectedRange: { startValue: any; endValue: any; }) => void;
        /** A handler for the selectedRangeChanged event. */
        onSelectedRangeChanged?: (e: {
            startValue: any;
            endValue: any;
            component: dxRangeSelector;
            element: Element;
        }) => void;
        /** Specifies the options of the range selector's shutters. */
        shutter?: {
            /** Specifies shutter color. */
            color?: string;
            /** Specifies the opacity of the color of shutters. */
            opacity?: number;
        };
        /** Specifies in pixels the size of the dxRangeSelector widget. */
        size?: viz.core.Size;
        /** Specifies the appearance of the range selector's slider handles. */
        sliderHandle?: {
            /** Specifies the color of the slider handles. */
            color?: string;
            /** Specifies the opacity of the slider handles. */
            opacity?: number;
            /** Specifies the width of the slider handles. */
            width?: number;
        };
        /** Defines the options of the range selector slider markers. */
        sliderMarker?: {
            /** Specifies the color of the slider markers. */
            color?: string;
            /** Specifies a callback function that returns the text to be displayed by slider markers. */
            customizeText?: (scaleValue: { value: any; valueText: any; }) => string;
            /** Specifies font options for the text displayed by the range selector slider markers. */
            font?: viz.core.Font;
            /** Specifies a format for the text displayed in slider markers. */
            format?: string;
            /** Specifies the color used for the slider marker text when the currently selected range does not match the minRange and maxRange values. */
            invalidRangeColor?: string;
            /** Specifies the empty space between the marker's border and the marker’s text. */
            padding?: number;
            /** Specifies in pixels the height and width of the space reserved for the range selector slider markers. */
            placeholderSize?: {
                /** Specifies the height of the placeholder for the left and right slider markers. */
                height?: number;
                /** Specifies the width of the placeholder for the left and right slider markers. */
                width?: {
                    /** Specifies the width of the left slider marker's placeholder. */
                    left?: number;
                    /** Specifies the width of the right slider marker's placeholder. */
                    right?: number;
                };
            };
            /** Specifies a precision for the formatted value displayed in slider markers. */
            precision?: number;
            /** Indicates whether or not the slider markers are visible. */
            visible?: boolean;
        };
        /** Sets the name of the theme to be used by the range selector. */
        theme?: string;
    }
    /** A widget that allows end users to select a range of values on a scale. */
    export class dxRangeSelector extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxRangeSelectorOptions);
        constructor(element: Element, options?: dxRangeSelectorOptions);
        /** Displays the loading indicator. */
        showLoadingIndicator(): void;
        /** Conceals the loading indicator. */
        hideLoadingIndicator(): void;
        /** Redraws a widget. */
        render(skipChartAnimation?: boolean): void;
        /** Returns the currently selected range. */
        getSelectedRange(): { startValue: any; endValue: any; };
        /** Sets a specified range. */
        setSelectedRange(selectedRange: { startValue: any; endValue: any; }): void;
    }
}
declare module DevExpress.viz.sparklines {
    export interface SparklineTooltip extends viz.core.Tooltip {
        /** Specifies how a tooltip is horizontally aligned relative to the graph. */
        horizontalAlignment?: string;
        /** Specifies how a tooltip is vertically aligned relative to the graph. */
        verticalAlignment?: string;
    }
    export interface BaseSparklineOptions extends viz.core.BaseWidgetOptions {
        /** Specifies the blank space between the widget's extreme elements and the boundaries of the area provided for the widget in pixels. */
        margin?: viz.core.Margins;
        /** Specifies the size of the widget. */
        size?: viz.core.Size;
        /** Specifies the name of the theme to be applied. */
        theme?: string;
        /** Specifies tooltip options. */
        tooltip?: SparklineTooltip;
    }
    /** Overridden by descriptions for particular widgets. */
    export class BaseSparkline extends viz.core.BaseWidget {
        /** Redraws a widget. */
        render(): void;
    }
    export interface dxBulletOptions extends BaseSparkline {
        /** Specifies a color for the bullet bar. */
        color?: string;
        /** Specifies an end value for the invisible scale. */
        endScaleValue?: number;
        /** Specifies whether or not to show the target line. */
        showTarget?: boolean;
        /** Specifies whether or not to show the line indicating zero on the invisible scale. */
        showZeroLevel?: boolean;
        /** Specifies a start value for the invisible scale. */
        startScaleValue?: number;
        /** Specifies the value indicated by the target line. */
        target?: number;
        /** Specifies a color for both the target and zero level lines. */
        targetColor?: string;
        /** Specifies the width of the target line. */
        targetWidth?: number;
        /** Specifies the primary value indicated by the bullet bar. */
        value?: number;
    }
    /** A bullet graph widget. */
    export class dxBullet extends BaseSparkline {
        constructor(element: JQuery, options?: dxBulletOptions);
        constructor(element: Element, options?: dxBulletOptions);
    }
    export interface dxSparklineOptions extends BaseSparklineOptions {
        /** Specifies the data source field that provides arguments for a sparkline. */
        argumentField?: string;
        /** Sets a color for the bars indicating negative values. Available for a sparkline of the bar type only. */
        barNegativeColor?: string;
        /** Sets a color for the bars indicating positive values. Available for a sparkline of the bar type only. */
        barPositiveColor?: string;
        /** Specifies a data source for the sparkline. */
        dataSource?: Array<any>;
        /** Sets a color for the boundary of both the first and last points on a sparkline. */
        firstLastColor?: string;
        /** Specifies whether a sparkline ignores null data points or not. */
        ignoreEmptyPoints?: boolean;
        /** Sets a color for a line on a sparkline. Available for the sparklines of the line- and area-like types. */
        lineColor?: string;
        /** Specifies a width for a line on a sparkline. Available for the sparklines of the line- and area-like types. */
        lineWidth?: number;
        /** Sets a color for the bars indicating the values that are less than the winloss threshold. Available for a sparkline of the winloss type only. */
        lossColor?: string;
        /** Sets a color for the boundary of the maximum point on a sparkline. */
        maxColor?: string;
        /** Sets a color for the boundary of the minimum point on a sparkline. */
        minColor?: string;
        /** Sets a color for points on a sparkline. Available for the sparklines of the line- and area-like types. */
        pointColor?: string;
        /** Specifies the diameter of sparkline points in pixels. Available for the sparklines of line- and area-like types. */
        pointSize?: number;
        /** Specifies a symbol to use as a point marker on a sparkline. Available for the sparklines of the line- and area-like types. */
        pointSymbol?: string;
        /** Specifies whether or not to indicate both the first and last values on a sparkline. */
        showFirstLast?: boolean;
        /** Specifies whether or not to indicate both the minimum and maximum values on a sparkline. */
        showMinMax?: boolean;
        /** Determines the type of a sparkline. */
        type?: string;
        /** Specifies the data source field that provides values for a sparkline. */
        valueField?: string;
        /** Sets a color for the bars indicating the values greater than a winloss threshold. Available for a sparkline of the winloss type only. */
        winColor?: string;
        /** Specifies a value that serves as a threshold for the sparkline of the winloss type. */
        winlossThreshold?: number;
    }
    /** A sparkline widget. */
    export class dxSparkline extends BaseSparkline {
        constructor(element: JQuery, options?: dxSparklineOptions);
        constructor(element: Element, options?: dxSparklineOptions);
    }
}
interface JQuery {
    dxProgressBar(options?: DevExpress.ui.dxProgressBarOptions): JQuery;
    dxProgressBar(methodName: string, ...params: any[]): any;
    dxProgressBar(methodName: "instance"): DevExpress.ui.dxProgressBar;
    dxSlider(options?: DevExpress.ui.dxSliderOptions): JQuery;
    dxSlider(methodName: string, ...params: any[]): any;
    dxSlider(methodName: "instance"): DevExpress.ui.dxSlider;
    dxRangeSlider(options?: DevExpress.ui.dxRangeSliderOptions): JQuery;
    dxRangeSlider(methodName: string, ...params: any[]): any;
    dxRangeSlider(methodName: "instance"): DevExpress.ui.dxRangeSlider;
    dxFileUploader(options?: DevExpress.ui.dxFileUploaderOptions): JQuery;
    dxFileUploader(methodName: string, ...params: any[]): any;
    dxFileUploader(methodName: "instance"): DevExpress.ui.dxFileUploader;
    dxValidator(): JQuery;
    dxValidator(methodName: string, ...params: any[]): any;
    dxValidator(methodName: "instance"): DevExpress.ui.dxValidator;
    dxValidatonGroup(): JQuery;
    dxValidatonGroup(methodName: string, ...params: any[]): any;
    dxValidatonGroup(methodName: "instance"): DevExpress.ui.dxValidationGroup;
    dxValidationSummary(): JQuery;
    dxValidationSummary(methodName: string, ...params: any[]): any;
    dxValidationSummary(methodName: "instance"): DevExpress.ui.dxValidationSummary;
    dxTooltip(options?: DevExpress.ui.dxTooltipOptions): JQuery;
    dxTooltip(methodName: string, ...params: any[]): any;
    dxTooltip(methodName: "instance"): DevExpress.ui.dxTooltip;
    dxDropDownList(options?: DevExpress.ui.dxDropDownListOptions): JQuery;
    dxDropDownList(methodName: string, ...params: any[]): any;
    dxDropDownList(methodName: "instance"): DevExpress.ui.dxDropDownList;
    dxToolbar(options?: DevExpress.ui.dxToolbarOptions): JQuery;
    dxToolbar(methodName: string, ...params: any[]): any;
    dxToolbar(methodName: "instance"): DevExpress.ui.dxToolbar;
    dxToast(options?: DevExpress.ui.dxToastOptions): JQuery;
    dxToast(methodName: string, ...params: any[]): any;
    dxToast(methodName: "instance"): DevExpress.ui.dxToast;
    dxTextEditor(options?: DevExpress.ui.dxTextEditorOptions): JQuery;
    dxTextEditor(methodName: string, ...params: any[]): any;
    dxTextEditor(methodName: "instance"): DevExpress.ui.dxTextEditor;
    dxTextBox(options?: DevExpress.ui.dxTextBoxOptions): JQuery;
    dxTextBox(methodName: string, ...params: any[]): any;
    dxTextBox(methodName: "instance"): DevExpress.ui.dxTextBox;
    dxTextArea(options?: DevExpress.ui.dxTextAreaOptions): JQuery;
    dxTextArea(methodName: string, ...params: any[]): any;
    dxTextArea(methodName: "instance"): DevExpress.ui.dxTextArea;
    dxTabs(options?: DevExpress.ui.dxTabsOptions): JQuery;
    dxTabs(methodName: string, ...params: any[]): any;
    dxTabs(methodName: "instance"): DevExpress.ui.dxTabs;
    dxTabPanel(options?: DevExpress.ui.dxTabPanelOptions): JQuery;
    dxTabPanel(methodName: string, ...params: any[]): any;
    dxTabPanel(methodName: "instance"): DevExpress.ui.dxTabPanel;
    dxSelectBox(options?: DevExpress.ui.dxSelectBoxOptions): JQuery;
    dxSelectBox(methodName: string, ...params: any[]): any;
    dxSelectBox(methodName: "instance"): DevExpress.ui.dxSelectBox;
    dxScrollView(options?: DevExpress.ui.dxScrollViewOptions): JQuery;
    dxScrollView(methodName: string, ...params: any[]): any;
    dxScrollView(methodName: "instance"): DevExpress.ui.dxScrollView;
    dxScrollable(options?: DevExpress.ui.dxScrollableOptions): JQuery;
    dxScrollable(methodName: string, ...params: any[]): any;
    dxScrollable(methodName: "instance"): DevExpress.ui.dxScrollable;
    dxRadioGroup(options?: DevExpress.ui.dxRadioGroupOptions): JQuery;
    dxRadioGroup(methodName: string, ...params: any[]): any;
    dxRadioGroup(methodName: "instance"): DevExpress.ui.dxRadioGroup;
    dxPopup(options?: DevExpress.ui.dxPopupOptions): JQuery;
    dxPopup(methodName: string, ...params: any[]): any;
    dxPopup(methodName: "instance"): DevExpress.ui.dxPopup;
    dxPopover(options?: DevExpress.ui.dxPopoverOptions): JQuery;
    dxPopover(methodName: string, ...params: any[]): any;
    dxPopover(methodName: "instance"): DevExpress.ui.dxPopover;
    dxOverlay(options?: DevExpress.ui.dxOverlayOptions): JQuery;
    dxOverlay(methodName: string, ...params: any[]): any;
    dxOverlay(methodName: "instance"): DevExpress.ui.dxOverlay;
    dxNumberBox(options?: DevExpress.ui.dxNumberBoxOptions): JQuery;
    dxNumberBox(methodName: string, ...params: any[]): any;
    dxNumberBox(methodName: "instance"): DevExpress.ui.dxNumberBox;
    dxNavBar(options?: DevExpress.ui.dxNavBarOptions): JQuery;
    dxNavBar(methodName: string, ...params: any[]): any;
    dxNavBar(methodName: "instance"): DevExpress.ui.dxNavBar;
    dxMultiView(options?: DevExpress.ui.dxMultiViewOptions): JQuery;
    dxMultiView(methodName: string, ...params: any[]): any;
    dxMultiView(methodName: "instance"): DevExpress.ui.dxMultiView;
    dxMap(options?: DevExpress.ui.dxMapOptions): JQuery;
    dxMap(methodName: string, ...params: any[]): any;
    dxMap(methodName: "instance"): DevExpress.ui.dxMap;
    dxLookup(options?: DevExpress.ui.dxLookupOptions): JQuery;
    dxLookup(methodName: string, ...params: any[]): any;
    dxLookup(methodName: "instance"): DevExpress.ui.dxLookup;
    dxLoadPanel(options?: DevExpress.ui.dxLoadPanelOptions): JQuery;
    dxLoadPanel(methodName: string, ...params: any[]): any;
    dxLoadPanel(methodName: "instance"): DevExpress.ui.dxLoadPanel;
    dxLoadIndicator(options?: DevExpress.ui.dxLoadIndicatorOptions): JQuery;
    dxLoadIndicator(methodName: string, ...params: any[]): any;
    dxLoadIndicator(methodName: "instance"): DevExpress.ui.dxLoadIndicator;
    dxList(options?: DevExpress.ui.dxListOptions): JQuery;
    dxList(methodName: string, ...params: any[]): any;
    dxList(methodName: "instance"): DevExpress.ui.dxList;
    dxGallery(options?: DevExpress.ui.dxGalleryOptions): JQuery;
    dxGallery(methodName: string, ...params: any[]): any;
    dxGallery(methodName: "instance"): DevExpress.ui.dxGallery;
    dxDropDownEditor(options?: DevExpress.ui.dxDropDownEditorOptions): JQuery;
    dxDropDownEditor(methodName: string, ...params: any[]): any;
    dxDropDownEditor(methodName: "instance"): DevExpress.ui.dxDropDownEditor;
    dxDateBox(options?: DevExpress.ui.dxDateBoxOptions): JQuery;
    dxDateBox(methodName: string, ...params: any[]): any;
    dxDateBox(methodName: "instance"): DevExpress.ui.dxDateBox;
    dxCheckBox(options?: DevExpress.ui.dxCheckBoxOptions): JQuery;
    dxCheckBox(methodName: string, ...params: any[]): any;
    dxCheckBox(methodName: "instance"): DevExpress.ui.dxCheckBox;
    dxBox(options?: DevExpress.ui.dxBoxOptions): JQuery;
    dxBox(methodName: string, ...params: any[]): any;
    dxBox(methodName: "instance"): DevExpress.ui.dxBox;
    dxButton(options?: DevExpress.ui.dxButtonOptions): JQuery;
    dxButton(methodName: string, ...params: any[]): any;
    dxButton(methodName: "instance"): DevExpress.ui.dxButton;
    dxCalendar(options?: DevExpress.ui.dxCalendarOptions): JQuery;
    dxCalendar(methodName: string, ...params: any[]): any;
    dxCalendar(methodName: "instance"): DevExpress.ui.dxCalendar;
    dxAccordion(options?: DevExpress.ui.dxAccordionOptions): JQuery;
    dxAccordion(methodName: string, ...params: any[]): any;
    dxAccordion(methodName: "instance"): DevExpress.ui.dxAccordion;
    dxAutocomplete(options?: DevExpress.ui.dxAutocompleteOptions): JQuery;
    dxAutocomplete(methodName: string, ...params: any[]): any;
    dxAutocomplete(methodName: "instance"): DevExpress.ui.dxAutocomplete;
    dxTileView(options?: DevExpress.ui.dxTileViewOptions): JQuery;
    dxTileView(methodName: string, ...params: any[]): any;
    dxTileView(methodName: "instance"): DevExpress.ui.dxTileView;
    dxSwitch(options?: DevExpress.ui.dxSwitchOptions): JQuery;
    dxSwitch(methodName: string, ...params: any[]): any;
    dxSwitch(methodName: "instance"): DevExpress.ui.dxSwitch;
    dxSlideOut(options?: DevExpress.ui.dxSlideoutOptions): JQuery;
    dxSlideOut(methodName: string, ...params: any[]): any;
    dxSlideOut(methodName: "instance"): DevExpress.ui.dxSlideOut;
    dxPivot(options?: DevExpress.ui.dxPivotOptions): JQuery;
    dxPivot(methodName: string, ...params: any[]): any;
    dxPivot(methodName: "instance"): DevExpress.ui.dxPivot;
    dxPanorama(options?: DevExpress.ui.dxPanoramaOptions): JQuery;
    dxPanorama(methodName: string, ...params: any[]): any;
    dxPanorama(methodName: "instance"): DevExpress.ui.dxPanorama;
    dxActionSheet(options?: DevExpress.ui.dxActionSheetOptions): JQuery;
    dxActionSheet(methodName: string, ...params: any[]): any;
    dxActionSheet(methodName: "instance"): DevExpress.ui.dxActionSheet;
    dxDropDownMenu(options?: DevExpress.ui.dxDropDownMenuOptions): JQuery;
    dxDropDownMenu(methodName: string, ...params: any[]): any;
    dxDropDownMenu(methodName: "instance"): DevExpress.ui.dxDropDownMenu;
    dxTreeView(options?: DevExpress.ui.dxTreeViewOptions): JQuery;
    dxTreeView(methodName: string, ...params: any[]): any;
    dxTreeView(methodName: "instance"): DevExpress.ui.dxTreeView;
    dxMenuBase(options?: DevExpress.ui.dxMenuBaseOptions): JQuery;
    dxMenuBase(methodName: string, ...params: any[]): any;
    dxMenuBase(methodName: "instance"): DevExpress.ui.dxMenuBase;
    dxMenu(options?: DevExpress.ui.dxMenuOptions): JQuery;
    dxMenu(methodName: string, ...params: any[]): any;
    dxMenu(methodName: "instance"): DevExpress.ui.dxMenu;
    dxContextMenu(options?: DevExpress.ui.dxContextMenuOptions): JQuery;
    dxContextMenu(methodName: string, ...params: any[]): any;
    dxContextMenu(methodName: "instance"): DevExpress.ui.dxContextMenu;
    dxColorBox(options?: DevExpress.ui.dxColorBoxOptions): JQuery;
    dxColorBox(methodName: string, ...params: any[]): any;
    dxColorBox(methodName: "instance"): DevExpress.ui.dxColorBox;
    dxDataGrid(options?: DevExpress.ui.dxDataGridOptions): JQuery;
    dxDataGrid(methodName: string, ...params: any[]): any;
    dxDataGrid(methodName: "instance"): DevExpress.ui.dxDataGrid;
    dxChart(options?: DevExpress.viz.charts.dxChartOptions): JQuery;
    dxChart(methodName: string, ...params: any[]): any;
    dxChart(methodName: "instance"): DevExpress.viz.charts.dxChart;
    dxPieChart(options?: DevExpress.viz.charts.dxPieChartOptions): JQuery;
    dxPieChart(methodName: string, ...params: any[]): any;
    dxPieChart(methodName: "instance"): DevExpress.viz.charts.dxPieChart;
    dxPolarChart(options?: DevExpress.viz.charts.dxPolarChartOptions): JQuery;
    dxPolarChart(methodName: string, ...params: any[]): any;
    dxPolarChart(methodName: "instance"): DevExpress.viz.charts.dxPolarChart;
    dxLinearGauge(options?: DevExpress.viz.gauges.dxLinearGaugeOptions): JQuery;
    dxLinearGauge(methodName: string, ...params: any[]): any;
    dxLinearGauge(methodName: "instance"): DevExpress.viz.gauges.dxLinearGauge;
    dxCircularGauge(options?: DevExpress.viz.gauges.dxCircularGaugeOptions): JQuery;
    dxCircularGauge(methodName: string, ...params: any[]): any;
    dxCircularGauge(methodName: "instance"): DevExpress.viz.gauges.dxCircularGauge;
    dxBarGauge(options?: DevExpress.viz.gauges.dxBarGaugeOptions): JQuery;
    dxBarGauge(methodName: string, ...params: any[]): any;
    dxBarGauge(methodName: "instance"): DevExpress.viz.gauges.dxBarGauge;
    dxRangeSelector(options?: DevExpress.viz.rangeSelector.dxRangeSelectorOptions): JQuery;
    dxRangeSelector(methodName: string, ...params: any[]): any;
    dxRangeSelector(methodName: "instance"): DevExpress.viz.rangeSelector.dxRangeSelector;
    dxVectorMap(options?: DevExpress.viz.map.dxVectorMapOptions): JQuery;
    dxVectorMap(methodName: string, ...params: any[]): any;
    dxVectorMap(methodName: "instance"): DevExpress.viz.map.dxVectorMap;
    dxBullet(options?: DevExpress.viz.sparklines.dxBulletOptions): JQuery;
    dxBullet(methodName: string, ...params: any[]): any;
    dxBullet(methodName: "instance"): DevExpress.viz.sparklines.dxBullet;
    dxSparkline(options?: DevExpress.viz.sparklines.dxSparklineOptions): JQuery;
    dxSparkline(methodName: string, ...params: any[]): any;
    dxSparkline(methodName: "instance"): DevExpress.viz.sparklines.dxSparkline;
}