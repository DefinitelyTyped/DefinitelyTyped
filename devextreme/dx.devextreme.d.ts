// Type definitions for DevExtreme 15.1.3
// Project: http://js.devexpress.com/
// Definitions by: DevExpress Inc. <http://devexpress.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module DevExpress  {
    /** @docid EventsMixin */
    export interface EventsMixin<T> {
        /** @docid EventsMixinMethods_on#on(eventName,eventHandler) */
        on(eventName: string, eventHandler: Function): T;
        /** @docid EventsMixinMethods_on#on(events) */
        on(events: { [eventName: string]: Function; }): T;
        /** @docid EventsMixinMethods_off#off(eventName) */
        off(eventName: string): Object;
        /** @docid EventsMixinMethods_off#off(eventName,eventHandler) */
        off(eventName: string, eventHandler: Function): T;
    }
    /** @docid validationEngine */
    export module validationEngine {
        export interface IValidator {
            validate(): ValidatorValidationResult;
            reset(): void;
        }
        /** @docid_ignore requiredRule */
        /** @docid_ignore requiredRuleOptions_type */
        /** @docid_ignore requiredRuleOptions_trim */
        /** @docid_ignore requiredRuleOptions_message */
        /** @docid_ignore numericRule */
        /** @docid_ignore numericRuleOptions_type */
        /** @docid_ignore numericRuleOptions_message */
        /** @docid_ignore rangeRule */
        /** @docid_ignore rangeRuleOptions_type */
        /** @docid_ignore rangeRuleOptions_min */
        /** @docid_ignore rangeRuleOptions_max */
        /** @docid_ignore rangeRuleOptions_message */
        /** @docid_ignore rangeRuleOptions_reevaluate */
        /** @docid_ignore stringLengthRule */
        /** @docid_ignore stringLengthRuleOptions_type */
        /** @docid_ignore stringLengthRuleOptions_min */
        /** @docid_ignore stringLengthRuleOptions_max */
        /** @docid_ignore stringLengthRuleOptions_trim */
        /** @docid_ignore stringLengthRuleOptions_message */
        /** @docid_ignore customRule */
        /** @docid_ignore customRuleOptions_type */
        /** @docid_ignore customRuleOptions_validationCallback */
        /** @docid_ignore customRuleOptions_message */
        /** @docid_ignore customRuleOptions_reevaluate */
        /** @docid_ignore compareRule */
        /** @docid_ignore compareRuleOptions_type */
        /** @docid_ignore compareRuleOptions_comparisonTarget */
        /** @docid_ignore compareRuleOptions_comparisonType */
        /** @docid_ignore compareRuleOptions_message */
        /** @docid_ignore compareRuleOptions_reevaluate */
        /** @docid_ignore patternRule */
        /** @docid_ignore patternRuleOptions_type */
        /** @docid_ignore patternRuleOptions_pattern */
        /** @docid_ignore patternRuleOptions_message */
        /** @docid_ignore emailRule */
        /** @docid_ignore emailRuleOptions_type */
        /** @docid_ignore emailRuleOptions_message */
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
        export interface GroupConfig extends EventsMixin<GroupConfig>  {
            group: any;
            validators: IValidator[];
            validate(): ValidationGroupValidationResult;
            reset(): void;
        }
        /** @docid validationEngineMethods_getGroupConfig#getGroupConfig(group) */
        export function getGroupConfig(group: any): GroupConfig
        /** @docid validationEngineMethods_getGroupConfig#getGroupConfig() */
        export function getGroupConfig(): GroupConfig
        /** @docid validationEngineMethods_validateGroup#validateGroup(group) */
        export function validateGroup(group: any): ValidationGroupValidationResult;
        /** @docid validationEngineMethods_validateGroup#validateGroup() */
        export function validateGroup(): ValidationGroupValidationResult;
        /** @docid validationEngineMethods_resetGroup#resetGroup(group) */
        export function resetGroup(group: any): void;
        /** @docid validationEngineMethods_resetGroup#resetGroup() */
        export function resetGroup(): void;
        /** @docid validationEngineMethods_validateModel */
        export function validateModel(model: Object): ValidationGroupValidationResult;
        /** @docid validationEngineMethods_registerModelForValidation */
        export function registerModelForValidation(model: Object) : void;
    }
    export var hardwareBackButton: JQueryCallback;
    /** @docid processHardwareBackButton */
    export function processHardwareBackButton(): void;
    /** @docid rtlEnabled */
    export var rtlEnabled: boolean;
    /** @docid registerComponent#registerComponent(name,class) */
    export function registerComponent(name: string, componentClass: Object): void;
    /** @docid registerComponent#registerComponent(name,namespace,class) */
    export function registerComponent(name: string, namespace: Object, componentClass: Object): void;
    /** @docid requestAnimationFrame */
    export function requestAnimationFrame(callback: Function): number;
    /** @docid cancelAnimationFrame */
    export function cancelAnimationFrame(requestID: number): void;
    /** @docid dxaction */
    export class Action { }
    /** @docid EndpointSelector */
    export class EndpointSelector {
        constructor(options: {
            [key: string]: {
                local?: string;
                production?: string;
            }
        });
        /** @docid EndpointSelectorMethods_urlFor */
        urlFor(key: string): string;
    }
    /** @docid fx */
    export module fx {
        /** @docid animationConfig */
        export interface AnimationOptions {
            /** @docid animationConfig_complete */
            complete?: (element: JQuery, config: AnimationOptions) => void;
            /** @docid animationConfig_delay */
            delay?: number;
            /** @docid animationConfig_staggerDelay */
            staggerDelay?: number;
            /** @docid animationConfig_duration */
            duration?: number;
            /** @docid animationConfig_easing */
            easing?: string;
            /** @docid animationConfig_from */
            from?: any;
            /** @docid animationConfig_start */
            start?: (element: JQuery, config: AnimationOptions) => void;
            /** @docid animationConfig_to */
            to?: any;
            /** @docid animationConfig_type */
            type?: string;
            /** @docid animationConfig_direction */
            direction?: string;
        }
        /** @docid fxmethods_animate */
        export function animate(element: HTMLElement, config: AnimationOptions): Object;
        /** @docid fxmethods_isAnimating */
        export function isAnimating(element: HTMLElement): boolean;
        /** @docid fxmethods_stop */
        export function stop(element: HTMLElement, jumpToEnd: boolean): void;
    }
    /** @docid TransitionExecutor */
    export class TransitionExecutor {
        /** @docid TransitionExecutorMethods_reset */
        reset(): void;
        /** @docid TransitionExecutorMethods_enter */
        enter(elements: JQuery, animation: any): void;
        /** @docid TransitionExecutorMethods_leave */
        leave(elements: JQuery, animation: any): void;
        /** @docid TransitionExecutorMethods_start */
        start(config: Object): JQueryPromise<void>;
    }
    export class AnimationPresetCollection {
        /** @docid animationPresetsMethods_resetToDefaults */
        resetToDefaults(): void;
        /** @docid animationPresetsMethods_clear */
        clear(name: string): void;
        /** @docid animationPresetsMethods_registerPreset */
        registerPreset(name: string, config: any): void;
        /** @docid animationPresetsMethods_applyChanges */
        applyChanges(): void;
        /** @docid animationPresetsMethods_getPreset */
        getPreset(name: string): void;
        /** @docid animationPresetsMethods_registerDefaultPresets */
        registerDefaultPresets(): void;
    }
    /** @docid animationPresets */
    export var animationPresets: AnimationPresetCollection;
    /** @docid devices */
    export module devices {
        /** @docid device */
        export interface Device {
            /** @docid device_android */
            android?: boolean;
            /** @docid device_devicetype */
            deviceType?: string;
            /** @docid device_generic */
            generic?: boolean;
            /** @docid device_ios */
            ios?: boolean;
            /** @docid device_phone */
            phone?: boolean;
            /** @docid device_platform */
            platform?: string;
            /** @docid device_tablet */
            tablet?: boolean;
            /** @docid device_version */
            version?: Array<number>;
            /** @docid device_win8 */
            win8?: boolean;
            /** @docid device_grade */
            grade?: string;
        }
        /** @docid devicesevents_orientationChanged */
        export var orientationChanged: JQueryCallback;
        /** @docid devicesmethods_current#current(deviceName) */
        export function current(deviceName: any): void;
        /** @docid devicesmethods_current#current() */
        export function current(): Device;
        /** @docid devicesmethods_orientation */
        export function orientation(): string;
        /** @docid devicesmethods_real */
        export function real(): Device;
    }
    /** @docid position */
    export interface PositionOptions {
        /** @docid position_at */
        at?: string;
        /** @docid position_boundary */
        boundary?: Element;
        /** @docid position_boundaryOffset */
        boundaryOffset?: string;
        /** @docid position_collision */
        collision?: any;
        /** @docid position_my */
        my?: string;
        /** @docid position_of */
        of?: HTMLElement;
        /** @docid position_offset */
        offset?: string;
    }
    export interface ComponentOptions {
        /** @docid componentOptions_onInitialized */
        onInitialized?: Function;
        /** @docid componentOptions_onOptionChanged */
        onOptionChanged?: Function;
        /** @docid componentOptions_onDisposing */
        onDisposing?: Function;
    }
    /** @docid component */
    export class Component {
        constructor(options?: ComponentOptions)
        /** @docid componentmethods_beginupdate#beginUpdate() */
        beginUpdate(): void;
        /** @docid componentmethods_endupdate#endUpdate() */
        endUpdate(): void;
        /** @docid componentmethods_instance#instance() */
        instance(): Component;
        /** @docid componentmethods_option#option(options) */
        option(options: Object): void;
        /** @docid componentmethods_option#option() */
        option(): Object;
        /** @docid componentmethods_option#option(optionName) */
        option(optionName: string): any;
        /** @docid componentmethods_option#option(optionName,optionValue) */
        option(optionName: string, optionValue: any): void;
    }
    export interface DOMComponentOptions extends ComponentOptions {
        /** @docid_ignore domcomponentoptions_onOptionChanged */
        /** @docid_ignore domcomponentoptions_onDisposing */
        /** @docid domcomponentoptions_rtlEnabled */
        rtlEnabled?: boolean;
        /** @docid domcomponentoptions_height */
        height?: any;
        /** @docid domcomponentoptions_width */
        width?: any;
    }
    /** @docid domcomponent */
    export class DOMComponent extends Component {
        constructor(element: JQuery, options?: DOMComponentOptions);
        constructor(element: HTMLElement, options?: DOMComponentOptions);
        /** @docid domcomponentmethods_element */
        element(): JQuery;
        /** @docid domcomponentmethods_defaultOptions */
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
            /** @docid_ignore StoreOptions_loading */
            /** @docid_ignore StoreOptions_loaded */
            /** @docid_ignore StoreOptions_modified */
            /** @docid_ignore StoreOptions_modifying */
            /** @docid_ignore StoreOptions_inserted */
            /** @docid_ignore StoreOptions_inserting */
            /** @docid_ignore StoreOptions_removed */
            /** @docid_ignore StoreOptions_removing */
            /** @docid_ignore StoreOptions_updated */
            /** @docid_ignore StoreOptions_updating */
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
            /** @docid StoreOptions_onModified */
            onModified?: () => void;
            /** @docid StoreOptions_onModifying */
            onModifying?: () => void;
            /** @docid StoreOptions_onRemoved */
            onRemoved?: (key: any) => void;
            /** @docid StoreOptions_onRemoving */
            onRemoving?: (key: any) => void;
            /** @docid StoreOptions_onUpdated */
            onUpdated?: (key: any, values: Object) => void;
            /** @docid StoreOptions_onUpdating */
            onUpdating?: (key: any, values: Object) => void;
            /** @docid  StoreOptions_onLoaded */
            onLoaded?: (result: Array<any>) => void;
            /** @docid StoreOptions_onLoading */
            onLoading?: (loadOptions: LoadOptions) => void;
            /** @docid StoreOptions_onInserted */
            onInserted?: (values: Object, key: any) => void;
            /** @docid StoreOptions_onInserting */
            onInserting?: (values: Object) => void;
            /** @docid StoreOptions_errorHandler */
            errorHandler?: (e: Error) => void;
            /** @docid StoreOptions_key */
            key?: any;
        }
        export interface LoadOptions {
            filter?: Object;
            sort?: Object;
            select?: Object;
            expand?: Object;
            group?: Object;
            skip?: number;
            take?: number;
            userData?: Object;
            requireTotalCount?: boolean;
        }
        /** @docid Store */
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
            /** @docid StoreMethods_byKey */
            byKey(key: any): JQueryPromise<any>;
            /** @docid StoreMethods_insert */
            insert(values: Object): JQueryPromise<any>;
            /** @docid StoreMethods_key */
            key(): any;
            /** @docid StoreMethods_keyOf */
            keyOf(obj: Object): any;
            /** @docid StoreMethods_load */
            load(obj?: LoadOptions): JQueryPromise<any[]>;
            /** @docid StoreMethods_remove */
            remove(key: any): JQueryPromise<any>;
            /** @docid StoreMethods_totalCount */
            totalCount(obj?: {
                filter?: Object;
                select?: Object;
                group?: Object;
                sort?: Object;
            }): JQueryPromise<any>;
            /** @docid StoreMethods_update */
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
            /** @docid ArrayStoreOptions_data */
            data?: Array<any>;
        }
        /** @docid ArrayStore */
        export class ArrayStore extends Store {
            constructor(options?: ArrayStoreOptions);
            /** @docid ArrayStoreMethods_clear */
            clear(): void;
            /** @docid ArrayStoreMethods_createQuery */
            createQuery(): Query;
        }
                interface Promise {
            then(doneFn?: Function, failFn?: Function, progressFn?: Function): Promise;
        }
        export interface CustomStoreOptions extends StoreOptions {
            /** @docid CustomStoreOptions_byKey */
            byKey?: (key: any) => Promise;
            /** @docid CustomStoreOptions_insert */
            insert?: (values: Object) => Promise;
            /** @docid CustomStoreOptions_load */
            load?: (options?: LoadOptions) => Promise;
            /** @docid CustomStoreOptions_remove */
            remove?: (key: any) => Promise;
            /** @docid CustomStoreOptions_totalCount */
            totalCount?: () => Promise;
            /** @docid CustomStoreOptions_update */
            update?: (key: any, values: Object) => Promise;
        }
        /** @docid CustomStore */
        export class CustomStore extends Store {
            constructor(options: CustomStoreOptions);
        }
        export interface DataSourceOptions {
            /** @docid_ignore DataSourceOptions_store_type */
            /** @docid DataSourceOptions_filter */
            filter?: Object;
            /** @docid DataSourceOptions_group */
            group?: Object;
            /** @docid DataSourceOptions_map */
            map?: (record: any) => any;
            /** @docid DataSourceOptions_pageSize */
            pageSize?: number;
            /** @docid DataSourceOptions_paginate */
            paginate?: boolean;
            /** @docid DataSourceOptions_postProcess */
            postProcess?: (data: any[]) => any[];
            /** @docid DataSourceOptions_searchExpr */
            searchExpr?: Object;
            /** @docid DataSourceOptions_searchOperation */
            searchOperation?: string;
            /** @docid DataSourceOptions_searchValue */
            searchValue?: Object;
            /** @docid DataSourceOptions_select */
            select?: Object;
            /** @docid DataSourceOptions_expand */
            expand?: Object;
            /** @docid DataSourceOptions_sort */
            sort?: Object;
            /** @docid DataSourceOptions_store */
            store?: any;
            /** @docid DataSourceOptions_onChanged */
            onChanged?: () => void;
            /** @docid DataSourceOptions_onLoadingChanged */
            onLoadingChanged?: (isLoading: boolean) => void;
            /** @docid DataSourceOptions_onLoadError */
            onLoadError?: (e?: Error) => void;
        }
        /** @docid DataSource */
        export class DataSource implements EventsMixin<DataSource> {
            constructor(options?: DataSourceOptions);
            changed: JQueryCallback;
            loadError: JQueryCallback;
            loadingChanged: JQueryCallback;
            /** @docid DataSourceMethods_dispose */
            dispose(): void;
            /** @docid DataSourceMethods_filter#filter() */
            filter(): Object;
            /** @docid DataSourceMethods_filter#filter(filterExpr) */
            filter(filterExpr: Object): void;
            /** @docid DataSourceMethods_group#group() */
            group(): Object;
            /** @docid DataSourceMethods_group#group(groupExpr) */
            group(groupExpr: Object): void;
            /** @docid DataSourceMethods_isLastPage */
            isLastPage(): boolean;
            /** @docid DataSourceMethods_isLoaded */
            isLoaded(): boolean;
            /** @docid DataSourceMethods_isLoading */
            isLoading(): boolean;
            /** @docid DataSourceMethods_items */
            items(): Array<any>;
            /** @docid DataSourceMethods_key */
            key(): any;
            /** @docid DataSourceMethods_load */
            load(): JQueryPromise<Array<any>>;
            /** @docid DataSourceMethods_loadOptions */
            loadOptions(): Object;
            /** @docid DataSourceMethods_pageSize#pageSize() */
            pageSize(): number;
            /** @docid DataSourceMethods_pageSize#pageSize(value) */
            pageSize(value: number): void;
            /** @docid DataSourceMethods_pageIndex#pageIndex() */
            pageIndex(): number;
            /** @docid DataSourceMethods_pageIndex#pageIndex(newIndex) */
            pageIndex(newIndex: number): void;
            /** @docid DataSourceMethods_paginate#paginate() */
            paginate(): boolean;
            /** @docid DataSourceMethods_paginate#paginate(value) */
            paginate(value: boolean): void;
            /** @docid DataSourceMethods_searchExpr#searchExpr() */
            searchExpr(): Object;
            /** @docid DataSourceMethods_searchExpr#searchExpr(expr) */
            searchExpr(expr: Object): void;
            /** @docid DataSourceMethods_searchOperation#searchOperation() */
            searchOperation(): string;
            /** @docid DataSourceMethods_searchOperation#searchOperation(op) */
            searchOperation(op: string): void;
            /** @docid DataSourceMethods_searchValue#searchValue() */
            searchValue(): Object;
            /** @docid DataSourceMethods_searchValue#searchValue(value) */
            searchValue(value: Object): void;
            /** @docid DataSourceMethods_select#select() */
            select(): Object;
            /** @docid DataSourceMethods_select#select(expr) */
            select(expr: Object): void;
            /** @docid DataSourceMethods_sort#sort() */
            sort(): Object;
            /** @docid DataSourceMethods_sort#sort(sortExpr) */
            sort(sortExpr: Object): void;
            /** @docid DataSourceMethods_store */
            store(): Store;
            /** @docid DataSourceMethods_totalCount */
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
        /** @docid EdmLiteral */
        export class EdmLiteral {
            /** @docid EdmLiteralmethods_valueOf */
            valueOf(): string;
        }
        /** @docid Guid */
        export class Guid {
            /** @docid Guidmethods_ctor#ctor(value) */
            constructor(value: string);
            /** @docid Guidmethods_ctor#ctor() */
            constructor();
            /** @docid Guidmethods_toString */
            toString(): string;
            /** @docid Guidmethods_valueOf */
            valueOf(): string;
        }
        export interface LocalStoreOptions extends ArrayStoreOptions {
            /** @docid LocalStoreOptions_flushInterval */
            flushInterval?: number;
            /** @docid LocalStoreOptions_immediate */
            immediate?: boolean;
            /** @docid LocalStoreOptions_name */
            name?: string;
        }
        /** @docid LocalStore */
        export class LocalStore extends ArrayStore {
            constructor(options?: LocalStoreOptions);
            /** @docid LocalStoreMethods_clear */
            clear(): void;
        }
        export interface ODataContextOptions extends ODataStoreOptions {
            /** @docid ODataContextOptions_entities */
            entities?: Object;
            /** @docid ODataContextOptions_errorHandler */
            errorHandler?: (e: Error) => void;
        }
        /** @docid ODataContext */
        export class ODataContext {
            constructor(options?: ODataContextOptions);
            /** @docid ODataContextmethods_get */
            get(operationName: string, params: Object): JQueryPromise<any>;
            /** @docid ODataContextmethods_invoke */
            invoke(operationName: string, params: Object, httpMethod: Object): JQueryPromise<any>;
            /** @docid ODataContextmethods_objectLink */
            objectLink(entityAlias: string, key: any): Object;
        }
        export interface ODataStoreOptions extends StoreOptions {
            /** 
              * @docid ODataStoreOptions_beforeSend
              * @docid ODataContextOptions_beforeSend
              */
            beforeSend?: (request: Object) => void;
            /** 
              * @docid ODataStoreOptions_jsonp
              * @docid ODataContextOptions_jsonp
              */
            jsonp?: boolean;
            /** 
              * @docid ODataStoreOptions_keyType
              */
            keyType?: any;
            /** 
              * @docid ODataStoreOptions_url
              * @docid ODataContextOptions_url
              */
            url?: string;
            /** 
              * @docid ODataStoreOptions_version
              * @docid ODataContextOptions_version
              */
            version?: number;
            /** 
              * @docid ODataStoreOptions_withCredentials
              * @docid ODataContextOptions_withCredentials
              */
            withCredentials?: boolean;
        }
        /** @docid ODataStore */
        export class ODataStore extends Store {
            constructor(options?: ODataStoreOptions);
            /** @docid ODataStoreMethods_createQuery */
            createQuery(loadOptions: Object): Object;
            /** @docid ODataStoreMethods_byKey */
            byKey(key: any, extraOptions?: { expand?: Object }): JQueryPromise<any>;
        }
        /** @docid Query */
        export interface Query {
            /** @docid Querymethods_aggregate#aggregate(step) */
            aggregate(step: (accumulator: any, value: any) => any): JQueryPromise<any>;
            /** @docid Querymethods_aggregate#aggregate(seed,step,finalize) */
            aggregate(seed: any, step: (accumulator: any, value: any) => any, finalize: (result: any) => any): JQueryPromise<any>;
            /** @docid Querymethods_avg#avg(getter) */
            avg(getter: Object): JQueryPromise<any>;
            /** @docid Querymethods_max#max(getter) */
            max(getter: Object): JQueryPromise<any>;
            /** @docid Querymethods_max#max() */
            max(): JQueryPromise<any>;
            /** @docid Querymethods_min#min() */
            min(): JQueryPromise<any>;
            /** @docid Querymethods_min#min(getter) */
            min(getter: Object): JQueryPromise<any>;
            /** @docid Querymethods_avg#avg() */
            avg(): JQueryPromise<any>;
            /** @docid Querymethods_count */
            count(): JQueryPromise<any>;
            /** @docid Querymethods_enumerate */
            enumerate(): JQueryPromise<any>;
            /** @docid Querymethods_filter */
            filter(criteria: Array<any>): Query;
            /** @docid Querymethods_groupBy */
            groupBy(getter: Object): Query;
            /** @docid Querymethods_select */
            select(getter: Object): Query;
            /** @docid Querymethods_slice */
            slice(skip: number, take?: number): Query;
            /** @docid Querymethods_sortBy#sortBy(getter,desc) */
            sortBy(getter: Object, desc: boolean): Query;
            /** @docid Querymethods_sortBy#sortBy(getter) */
            sortBy(getter: Object): Query;
            /** @docid Querymethods_sum#sum(getter) */
            sum(getter: Object): JQueryPromise<any>;
            /** @docid Querymethods_sum#sum() */
            sum(): JQueryPromise<any>;
            /** @docid Querymethods_thenBy#thenBy(getter) */
            thenBy(getter: Object): Query;
            /** @docid Querymethods_thenBy#thenBy(getter,desc) */
            thenBy(getter: Object, desc: boolean): Query;
            /** @docid Querymethods_toArray */
            toArray(): Array<any>;
        }
        /** @docid Utils_errorHandler */
        export var errorHandler: (e: Error) => void;
        /** @docid Utils_base64encode */
        export function base64_encode(input: any): string;
        /** @docid Utils_query#query(array) */
        export function query(array: Array<any>): Query;
        /** @docid Utils_query#query(url,queryOptions) */
        export function query(url: string, queryOptions: Object): Query;
        /** @docid Utils */
        export var utils: {
            /** @docid Utils_compileGetter */
            compileGetter(expr: any): Function;
            /** @docid Utils_compileSetter */
            compileSetter(expr: any): Function;
            odata: {
                /** @docid Utils_odatakeyConverters */
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
    /** @docid ui */
    export module ui {
        /** @docid_ignore dxTemplate */
        /** @docid_ignore dxTemplateOptions_name */
        export interface WidgetOptions extends DOMComponentOptions {
            /** @docid_ignore WidgetOptions_contentReadyAction */
            /** @docid_ignore WidgetOptions_onContentReady */
            /** @docid_ignore WidgetOptions_onFocusIn */
            /** @docid_ignore WidgetOptions_onFocusOut */
            /** @docid WidgetOptions_activeStateEnabled */
            activeStateEnabled?: boolean;
            /** @docid WidgetOptions_disabled */
            disabled?: boolean;
            /** @docid WidgetOptions_hoverStateEnabled */
            hoverStateEnabled?: boolean;
            /** @docid WidgetOptions_focusStateEnabled */
            focusStateEnabled?: boolean;
            /** @docid WidgetOptions_accessKey */
            accessKey?: string;
            /** @docid WidgetOptions_visible */
            visible?: boolean;
            /** @docid WidgetOptions_tabIndex */
            tabIndex?: number;
            /** @docid WidgetOptions_hint */
            hint?: string;
        }
        /** @docid Widget */
        export class Widget extends DOMComponent {
            /** @docid_ignore dxItem */
            constructor(options?: WidgetOptions);
            /** @docid WidgetMethods_repaint */
            repaint(): void;
            /** @docid WidgetMethods_focus */
            focus(): void;
            /** @docid WidgetMethods_registerKeyHandler */
            registerKeyHandler(key: string, handler: Function): void;
        }
        export interface CollectionWidgetOptions extends WidgetOptions {
            /** @docid_ignore CollectionWidgetOptions_selectOnFocus */
            /** @docid_ignore CollectionWidgetOptions_selectionMode */
            /** @docid_ignore CollectionWidgetOptions_selectionByClick */
            /** @docid_ignore CollectionWidgetOptions_selectionRequired */
            /** @docid_ignore CollectionWidgetOptions_focusedElement */
            /** @docid CollectionWidgetOptions_datasource */
            dataSource?: any;
            /** @docid CollectionWidgetOptions_itemClickAction */
            itemClickAction?: any;
            /** @docid CollectionWidgetOptions_itemHoldAction */
            itemHoldAction?: Function;
            /** @docid CollectionWidgetOptions_itemHoldTimeout */
            itemHoldTimeout?: number;
            /** @docid CollectionWidgetOptions_itemRender */
            itemRender?: any;
            /** @docid CollectionWidgetOptions_itemRenderedAction */
            itemRenderedAction?: Function;
            /** @docid CollectionWidgetOptions_items */
            items?: Array<any>;
            /** @docid CollectionWidgetOptions_itemSelectAction */
            itemSelectAction?: Function;
            /** @docid CollectionWidgetOptions_itemTemplate */
            itemTemplate?: any;
            /** @docid CollectionWidgetOptions_loopItemFocus */
            loopItemFocus?: boolean;
            /** @docid CollectionWidgetOptions_noDataText */
            noDataText?: string;
            /** @docid CollectionWidgetOptions_onContentReady */
            onContentReady?: any;
            /** @docid CollectionWidgetOptions_contentReadyAction */
            contentReadyAction?: any;
            /** @docid CollectionWidgetOptions_onItemClick */
            onItemClick?: any;
            /** @docid CollectionWidgetOptions_onItemContextMenu */
            onItemContextMenu?: Function;
            /** @docid CollectionWidgetOptions_onItemHold */
            onItemHold?: Function;
            /** @docid CollectionWidgetOptions_onItemRendered */
            onItemRendered?: Function;
            /** @docid CollectionWidgetOptions_onSelectionChanged */
            onSelectionChanged?: Function;
            /** @docid CollectionWidgetOptions_selectedIndex */
            selectedIndex?: number;
            /** @docid CollectionWidgetOptions_selectedItem */
            selectedItem?: Object;
            /** @docid CollectionWidgetOptions_selectedItems */
            selectedItems?: Array<any>;
            /** @docid CollectionWidgetOptions_onItemDeleting */
            onItemDeleting?: Function;
            /** @docid CollectionWidgetOptions_onItemDeleted */
            onItemDeleted?: Function;
            /** @docid CollectionWidgetOptions_onItemReordered */
            onItemReordered?: Function;
        }
        /** @docid CollectionWidget */
        export class CollectionWidget extends Widget {
            constructor(element: JQuery, options?: CollectionWidgetOptions);
            constructor(element: HTMLElement, options?: CollectionWidgetOptions);
            /** @docid_ignore CollectionWidgetItemTemplate_disabled */
            /** @docid_ignore CollectionWidgetItemTemplate_html */
            /** @docid_ignore CollectionWidgetItemTemplate_text */
            /** @docid_ignore CollectionWidgetItemTemplate_visible */
            /** @docid_ignore CollectionWidgetItemTemplate_template */
            /** @docid_ignore CollectionWidgetEvents_ItemClick */
            /** @docid_ignore CollectionWidgetEvents_ItemContextMenu */
            /** @docid_ignore CollectionWidgetEvents_ItemHold */
            /** @docid_ignore CollectionWidgetEvents_ItemRendered */
            /** @docid_ignore CollectionWidgetmethods_itemElements */
            /** @docid_ignore CollectionWidgetmethods_itemsContainer */
            /** @docid_ignore CollectionWidgetmethods_getFocusedItemId */
            /** @docid CollectionWidgetMethods_selectItem */
            selectItem(itemElement: any): void;
            /** @docid CollectionWidgetMethods_unselectItem */
            unselectItem(itemElement: any): void;
            /** @docid CollectionWidgetMethods_deleteItem */
            deleteItem(itemElement: any): JQueryPromise<void>;
            /** @docid CollectionWidgetMethods_isItemSelected */
            isItemSelected(itemElement: any): boolean;
            /** @docid CollectionWidgetMethods_reorderItem */
            reorderItem(itemElement: any, toItemElement: any): JQueryPromise<void>;
        }
        /** @docid DataExpressionMixin */
        export interface DataExpressionMixinOptions {
            /** @docid DataExpressionMixinOptions_dataSource */
            dataSource?: any;
            /** @docid DataExpressionMixinOptions_displayExpr  */
            displayExpr?: any;
            /** @docid DataExpressionMixinOptions_valueExpr  */
            valueExpr?: any;
            /** @docid DataExpressionMixinOptions_itemRender  */
            itemRender?: any;
            /** @docid DataExpressionMixinOptions_items */
            items?: Array<any>;
            /** @docid DataExpressionMixinOptions_itemTemplate  */
            itemTemplate?: any;
            /** @docid DataExpressionMixinOptions_value */
            value?: Object;
        }
        export interface EditorOptions extends WidgetOptions {
            /** @docid EditorOptions_value */
            value?: Object;
            /** @docid EditorOptions_onValueChanged */
            onValueChanged?: Function;
            /** @docid EditorOptions_valueChangeAction */
            valueChangeAction?: Function;
            /** @docid EditorOptions_readOnly */
            readOnly?: boolean;
            /** @docid EditorOptions_validationError */
            validationError?: Object;
            /** @docid EditorOptions_isValid */
            isValid?: boolean;
            /** @docid EditorOptions_validationMessageMode */
            validationMessageMode?: string;
        }
        /** @docid Editor */
        export class Editor extends Widget {
            /** @docid EditorMethods_reset */
            reset(): void;
        }
        /** @docid ui_dialog */
        export var dialog: {
            /** @docid ui_dialogmethods_alert */
            alert(message: string, title: string): JQueryPromise<void>;
            /** @docid ui_dialogmethods_confirm */
            confirm(message: string, title: string): JQueryPromise<boolean>;
            /** @docid ui_dialogmethods_custom */
            custom(options: { title?: string; message?: string; buttons?: Array<Object>; }): {
                show(): JQueryPromise<any>;
                hide(): void;
                hide(value: any): void;
            };
        };
        /** @docid ui_notify#notify(message,type,displayTime) */
        export function notify(message: any, type: string, displayTime: number): void;
        /** @docid ui_notify#notify(options) */
        export function notify(options: Object): void;
        /** @docid ui_themes */
        export var themes: {
            /** @docid ui_themesmethods_current#current() */
            current(): string;
            /** @docid ui_themesmethods_current#current(themeName) */
            current(themeName: string): void;
        };
        /** @docid ui_setTemplateEngine#setTemplateEngine(name) */
        export function setTemplateEngine(name: string): void;
        /** @docid ui_setTemplateEngine#setTemplateEngine(options) */
        export function setTemplateEngine(options: Object): void;
        /** @docid utils */
        export var utils: {
            /** @docid utils_initMobileViewport */
            initMobileViewport(options: { allowZoom?: boolean; allowPan?: boolean; allowSelection?: boolean }): void;
        };
    }
}
declare module DevExpress.data  {
    export interface XmlaStoreOptions {
        /** @docid XmlaStoreOptions_url */
        url?: string;
        /** @docid XmlaStoreOptions_catalog */
        catalog?: string;
        /** @docid XmlaStoreOptions_cube */
        cube?: string;
    }
    /** @docid XmlaStore */
    export class XmlaStore {
        constructor(options: XmlaStoreOptions);
    }
    export interface PivotGridField {
        /** @docid PivotGridDataSourceOptions_fields_index */
        index?: number;
        /** @docid PivotGridDataSourceOptions_fields_visible */
        visible?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_dataField */
        dataField?: string;
        /** @docid PivotGridDataSourceOptions_fields_caption */
        caption?: string;
        /** @docid PivotGridDataSourceOptions_fields_dataType */
        dataType?: string;
        /** @docid PivotGridDataSourceOptions_fields_groupInterval */
        groupInterval?: any;
        /** @docid PivotGridDataSourceOptions_fields_summaryType */
        summaryType?: string;
        /** @docid PivotGridDataSourceOptions_fields_calculateCustomSummary*/
        calculateCustomSummary?: (options: {
            summaryProcess?: string;
            value?: any;
            totalValue?: any;
        }) => void;
        /** @docid PivotGridDataSourceOptions_fields_selector */
        selector?: (data: Object) => any;
        /** @docid PivotGridDataSourceOptions_fields_area */
        area?: string;
        /** @docid PivotGridDataSourceOptions_fields_areaIndex */
        areaIndex?: number;
        /** @docid PivotGridDataSourceOptions_fields_displayFolder */
        displayFolder?: string;
        /** @docid PivotGridDataSourceOptions_fields_groupName */
        groupName?: string;
        /** @docid PivotGridDataSourceOptions_fields_groupIndex */
        groupIndex?: number;
        /** @docid PivotGridDataSourceOptions_fields_sortOrder */
        sortOrder?: string;
        /** @docid PivotGridDataSourceOptions_fields_sortBy */
        sortBy?: string;
        /** @docid PivotGridDataSourceOptions_fields_sortBySummaryField */
        sortBySummaryField?: string;
        /** @docid PivotGridDataSourceOptions_fields_sortBySummaryPath */
        sortBySummaryPath?: Array<any>;
        /** @docid PivotGridDataSourceOptions_fields_filterValues */
        filterValues?: Array<any>;
        /** @docid PivotGridDataSourceOptions_fields_filterType */
        filterType?: string;
        /** @docid PivotGridDataSourceOptions_fields_expanded */
        expanded?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_isMeasure */
        isMeasure?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_format */
        format?: string;
        /** @docid PivotGridDataSourceOptions_fields_customizeText */
        customizeText?: (cellInfo: { value: any; valueText: string }) => string;
        /** @docid PivotGridDataSourceOptions_fields_precision */
        precision?: number;
        /** @docid PivotGridDataSourceOptions_fields_sortingMethod */
        sortingMethod?: (a: Object, b: Object) => number;
        /** @docid PivotGridDataSourceOptions_fields_allowSorting */
        allowSorting?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_allowSortingBySummary */
        allowSortingBySummary?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_allowFiltering */
        allowFiltering?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_allowExpandAll */
        allowExpandAll?: boolean;
        /** @docid PivotGridDataSourceOptions_fields_width */
        width?: number;
    }
    export interface PivotGridDataSourceOptions {
        /** @docid_ignore PivotGridDataSourceOptions_store_type */
        /** @docid PivotGridDataSourceOptions_store */
        store?: any;
        /** @docid PivotGridDataSourceOptions_retrieveFields */
        retrieveFields?: boolean;
        /** @docid PivotGridDataSourceOptions_filter */
        filter?: Object;
        /** @docid PivotGridDataSourceOptions_fields */
        fields?: Array<PivotGridField>;
        /** @docid PivotGridDataSourceOptions_localSorting */
        localSorting?: boolean;
        /** @docid PivotGridDataSourceOptions_onChanged */
        onChanged?: () => void;
        /** @docid PivotGridDataSourceOptions_onLoadingChanged */
        onLoadingChanged?: (isLoading: boolean) => void;
        /** @docid PivotGridDataSourceOptions_onLoadError */
        onLoadError?: (e?: Object) => void;
        /** @docid PivotGridDataSourceOptions_onFieldsPrepared */
        onFieldsPrepared?: (e?: Array<PivotGridField>) => void;
    }
    /** @docid PivotGridDataSource */
    export class PivotGridDataSource implements EventsMixin<PivotGridDataSource> {
        constructor(options?: PivotGridDataSource);
        /** @docid PivotGridDataSourceMethods_load */
        load(): JQueryPromise<any>;
        /** @docid PivotGridDataSourceMethods_isLoading */
        isLoading(): boolean;
        /** @docid PivotGridDataSourceMethods_getData */
        getData(): Object;
        /** @docid PivotGridDataSourceMethods_getAreaFields */
        getAreaFields(area: string, collectGroups: boolean): Array<PivotGridField>;
        /** @docid PivotGridDataSourceMethods_fields#fields() */
        fields(): Array<PivotGridField>;
        /** @docid PivotGridDataSourceMethods_fields#fields(fields) */
        fields(fields: Array<PivotGridField>): void;
        /** @docid PivotGridDataSourceMethods_field#field(id) */
        field(id: number): PivotGridField;
        /** @docid PivotGridDataSourceMethods_field#field(id, options) */
        field(id: number, field: PivotGridField): void;
        /** @docid PivotGridDataSourceMethods_collapseHeaderItem */
        collapseHeaderItem(area: string, path: Array<any>): void;
        /** @docid PivotGridDataSourceMethods_expandHeaderItem */
        expandHeaderItem(area: string, path: Array<any>): void;
        /** @docid PivotGridDataSourceMethods_dispose */
        dispose(): void;
        on(eventName: string, eventHandler: Function): PivotGridDataSource;
        on(events: { [eventName: string]: Function; }): PivotGridDataSource;
        off(eventName: string): PivotGridDataSource;
        off(eventName: string, eventHandler: Function): PivotGridDataSource;
    }
}
declare module DevExpress.framework  {
    /** @docid_ignore dxCommandContainer */
    /** @docid_ignore dxCommandContaineroptions_id */
    /** @docid_ignore dxcontent */
    /** @docid_ignore dxcontentoptions_targetPlaceholder */
    /** @docid_ignore dxcontentplaceholderoptions_contentCssPosition */
    /** @docid_ignore dxcontentplaceholderoptions_name */
    /** @docid_ignore dxcontentplaceholderoptions_transition */
    /** @docid_ignore dxcontentplaceholderoptions_animation */
    /** @docid_ignore dxcontentplaceholder */
    /** @docid_ignore dxtransitionoptions_name */
    /** @docid_ignore dxtransitionoptions_type */
    /** @docid_ignore dxtransitionoptions_animation */
    /** @docid_ignore dxtransition */
    /** @docid_ignore dxlayoutoptions_name */
    /** @docid_ignore dxlayout */
    /** @docid_ignore dxviewoptions_disableCache */
    /** @docid_ignore dxviewoptions_modal */
    /** @docid_ignore dxviewoptions_name */
    /** @docid_ignore dxviewoptions_orientation */
    /** @docid_ignore dxviewoptions_pane */
    /** @docid_ignore dxviewoptions_title */
    /** @docid_ignore dxview */
    /** @docid_ignore dxviewPlaceholderoptions_viewName */
    /** @docid_ignore dxviewPlaceholder */
    /** @docid ViewCache */
    export class ViewCache {
        /** @docid ViewCacheevents_viewRemoved */
        viewRemoved: JQueryCallback;
        /** @docid ViewCachemethods_clear */
        clear(): void;
        /** @docid ViewCachemethods_getView */
        getView(key: string): Object;
        /** @docid ViewCachemethods_hasView */
        hasView(key: string): boolean;
        /** @docid ViewCachemethods_removeView */
        removeView(key: string): Object;
        /** @docid ViewCachemethods_setView */
        setView(key: string, viewInfo: Object): void;
    }
    export interface dxCommandOptions extends DOMComponentOptions {
        /** @docid dxCommandOptions_action */
        action?: any;
        /** @docid dxCommandOptions_onExecute */
        onExecute?: any;
        /** @docid dxCommandOptions_disabled */
        disabled?: boolean;
        /** @docid dxCommandOptions_icon */
        icon?: string;
        /** @docid dxCommandOptions_iconSrc */
        iconSrc?: string;
        /** @docid dxCommandOptions_id */
        id?: string;
        /** @docid dxCommandOptions_title */
        title?: string;
        /** @docid dxCommandOptions_type */
        type?: string;
        /** @docid dxCommandOptions_visible */
        visible?: boolean;
    }
    /** @docid dxcommand */
    export class dxCommand extends DOMComponent {
        constructor(element: JQuery, options: dxCommandOptions);
        constructor(options: dxCommandOptions);
        /** @docid dxcommandmethods_execute */
        execute(): void;
    }
    /** @docid Router */
    export class Router {
        /** @docid RouterMethods_register */
        register(pattern: string, defaults?: Object, constraints?: Object): void;
        /** @docid RouterMethods_parse */
        parse(uri: string): Object;
        /** @docid RouterMethods_format */
        format(obj: Object): string;
    }
    export interface StateManagerOptions {
        /** @docid StateManageroptions_storage */
        storage?: Object;
    }
    /** @docid StateManager */
    export class StateManager {
        constructor(options?: StateManagerOptions);
        /** @docid StateManagerMethods_addStateSource */
        addStateSource(stateSource: Object): void;
        /** @docid StateManagerMethods_removeStateSource */
        removeStateSource(stateSource: Object): void;
        /** @docid StateManagerMethods_saveState */
        saveState(): void;
        /** @docid StateManagerMethods_restoreState */
        restoreState(): void;
        /** @docid StateManagerMethods_clearState */
        clearState(): void;
    }
    export module html {
        export var layoutSets: Array<string>;
        export var animationSets: { [animationSetName: string]: AnimationSet };
        export interface AnimationSet {
            [animationName: string]: any
        }
        export interface HtmlApplicationOptions {
            /** @docid HtmlApplicationoptions_commandMapping */
            commandMapping?: Object;
            /** @docid HtmlApplicationoptions_disableViewCache */
            disableViewCache?: boolean;
            /** @docid HtmlApplicationoptions_layoutSet */
            layoutSet?: any;
            /** @docid HtmlApplicationoptions_animationSet */
            animationSet?: AnimationSet;
            /** @docid HtmlApplicationoptions_mode */
            mode?: string;
            /** @docid HtmlApplicationoptions_namespace */
            namespace?: Object;
            /** @docid HtmlApplicationoptions_navigateToRootViewMode */
            navigateToRootViewMode?: string;
            /** @docid HtmlApplicationoptions_navigation */
            navigation?: Array<any>;
            /** @docid HtmlApplicationOptions_stateManager */
            stateManager?: StateManager;
            /** @docid HtmlApplicationOptions_stateStorage */
            stateStorage?: Object;
            /** @docid HtmlApplicationoptions_useViewTitleAsBackText */
            useViewTitleAsBackText?: boolean;
            /** @docid HtmlApplicationoptions_viewCache */
            viewCache?: Object;
            /** @docid HtmlApplicationoptions_viewCacheSize */
            viewCacheSize?: number;
            /** @docid HtmlApplicationoptions_viewPort */
            viewPort?: JQuery;
            /** @docid HtmlApplicationOptions_router */
            router?: Router;
        }
        /** @docid HtmlApplication */
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
            /** @docid HtmlApplicationfields_viewCache */
            viewCache: ViewCache;
            /** @docid HtmlApplicationfields_navigation */
            navigation: Array<any>;
            /** @docid HtmlApplicationFields_stateManager */
            stateManager: StateManager;
            /** @docid HtmlApplicationFields_router */
            router: Router;
            /** @docid HtmlApplicationmethods_back */
            back(): void;
            /** @docid HtmlApplicationmethods_canBack */
            canBack(): boolean;
            /** @docid HtmlApplicationmethods_clearState */
            clearState(): void;
            /** @docid HtmlApplicationmethods_createNavigation */
            createNavigation(navigationConfig: Array<any>): void;
            /** @docid HtmlApplicationmethods_getViewTemplate */
            getViewTemplate(viewName: string): JQuery;
            /** @docid HtmlApplicationmethods_getViewTemplateInfo */
            getViewTemplateInfo(viewName: string): Object;
            /** @docid HtmlApplicationmethods_loadTemplates */
            loadTemplates(source: any): JQueryPromise<any>;
            /** @docid HtmlApplicationmethods_navigate */
            navigate(uri?: any, options?: Object): void;
            /** @docid HtmlApplicationmethods_renderNavigation */
            renderNavigation(): void;
            /** @docid HtmlApplicationmethods_restoreState */
            restoreState(): void;
            /** @docid HtmlApplicationmethods_saveState */
            saveState(): void;
            /** @docid HtmlApplicationmethods_templateContext */
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
declare module DevExpress.ui  {
    export interface dxValidatorOptions extends DOMComponentOptions {
        /** @docid dxValidatorOptions_validationRules */
        validationRules?: Array<any>;
        /** @docid dxValidatorOptions_name */
        name?: string;
        /** @docid dxValidatorOptions_adapter */
        adapter?: Object;
        /** @docid dxValidatorOptions_validationGroup */
        validationGroup?: string;
        /** @docid dxValidatorOptions_onValidated */
        onValidated?: (params: validationEngine.ValidatorValidationResult) => void;
    }
    /** @docid dxValidator */
    export class dxValidator extends DOMComponent implements validationEngine.IValidator {
        constructor(element: JQuery, options?: dxValidatorOptions);
        constructor(element: Element, options?: dxValidatorOptions);
        /** @docid_ignore dxValidatorMethods_beginUpdate */
        /** @docid_ignore dxValidatorMethods_defaultOptions */
        /** @docid_ignore dxValidatorMethods_endUpdate */
        /** @docid_ignore dxValidatorOptions_rtlEnabled */
        /** @docid dxValidatorMethods_validate */
        validate(): validationEngine.ValidatorValidationResult;
        /** @docid dxValidatorMethods_reset */
        reset(): void;
    }
    /** @docid dxValidationGroup */
    export class dxValidationGroup extends DOMComponent {
        constructor(element: JQuery);
        constructor(element: Element);
        /** @docid_ignore dxValidationGroupMethods_beginUpdate */
        /** @docid_ignore dxValidationGroupMethods_defaultOptions */
        /** @docid_ignore dxValidationGroupMethods_endUpdate */
        /** @docid_ignore dxValidationGroupOptions_rtlEnabled */
        /** @docid dxValidationGroupMethods_validate */
        validate(): validationEngine.ValidationGroupValidationResult;
        /** @docid dxValidationGroupMethods_reset */
        reset(): void;
    }
    export interface dxValidationSummaryOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxValidationSummaryOptions_focusStateEnabled */
        /** @docid_ignore dxValidationSummaryOptions_noDataText */
        /** @docid_ignore dxValidationSummaryOptions_contentReadyAction */
        /** @docid_ignore dxValidationSummaryOptions_itemClickAction */
        /** @docid_ignore dxValidationSummaryOptions_itemHoldAction */
        /** @docid_ignore dxValidationSummaryOptions_itemRender */
        /** @docid_ignore dxValidationSummaryOptions_itemRenderedAction */
        /** @docid_ignore dxValidationSummaryOptions_itemSelectAction */
        /** @docid_ignore dxValidationSummary_Default_Item_Template */
        /** @docid_ignore dxValidationSummaryOptions_activeStateEnabled */
        /** @docid_ignore dxValidationSummaryOptions_dataSource */
        /** @docid_ignore dxValidationSummaryOptions_disabled */
        /** @docid_ignore dxValidationSummaryOptions_height */
        /** @docid_ignore dxValidationSummaryOptions_hint */
        /** @docid_ignore dxValidationSummaryOptions_itemHoldTimeout */
        /** @docid_ignore dxValidationSummaryOptions_onItemContextMenu */
        /** @docid_ignore dxValidationSummaryOptions_onItemHold */
        /** @docid_ignore dxValidationSummaryOptions_onItemRendered */
        /** @docid_ignore dxValidationSummaryOptions_onItemSelect */
        /** @docid_ignore dxValidationSummaryOptions_onSelectionChanged */
        /** @docid_ignore dxValidationSummaryOptions_rtlEnabled */
        /** @docid_ignore dxValidationSummaryOptions_selectedIndex */
        /** @docid_ignore dxValidationSummaryOptions_selectedItem */
        /** @docid_ignore dxValidationSummaryOptions_selectedItems */
        /** @docid_ignore dxValidationSummaryOptions_visible */
        /** @docid_ignore dxValidationSummaryOptions_width */
        /** @docid dxValidationSummaryOptions_validationGroup */
        validationGroup?: string;
    }
    /** @docid dxValidationSummary */
    export class dxValidationSummary extends CollectionWidget {
        constructor(element: JQuery, options?: dxValidationSummaryOptions);
        constructor(element: Element, options?: dxValidationSummaryOptions);
    }
    export interface dxResizableOptions extends DOMComponentOptions {
        /** @docid dxResizableOptions_handles */
        handles?: string;
        /** @docid dxResizableOptions_minWidth */
        minWidth?: number;
        /** @docid dxResizableOptions_maxWidth */
        maxWidth?: number;
        /** @docid dxResizableOptions_minHeight */
        minHeight?: number;
        /** @docid dxResizableOptions_maxHeight */
        maxHeight?: number;
        /** @docid dxResizableOptions_onResizeStart */
        onResizeStart?: Function;
        /** @docid dxResizableOptions_onResize */
        onResize?: Function;
        /** @docid dxResizableOptions_onResizeEnd */
        onResizeEnd?: Function;
    }
    /** @docid dxResizable */
    export class dxResizable extends DOMComponent {
        constructor(element: JQuery, options?: dxResizableOptions);
        constructor(element: Element, options?: dxResizableOptions);
    }
    export interface dxTooltipOptions extends dxPopoverOptions {
        /** @docid_ignore dxTooltipOptions_showtitle*/
        /** @docid_ignore dxTooltipOptions_title*/
        /** @docid_ignore dxTooltipOptions_titleTemplate */
    }
    /** @docid dxTooltip */
    export class dxTooltip extends dxPopover {
        constructor(element: JQuery, options?: dxTooltipOptions);
        constructor(element: Element, options?: dxTooltipOptions);
    }
    export interface dxDropDownListOptions extends dxDropDownEditorOptions {
        /** @docid_ignore dxDropDownListOptions_fieldTemplate*/
        /** @docid_ignore dxDropDownListOptions_fieldRender*/
        /** @docid_ignore dxDropDownListOptions_contentTemplate*/
        /** @docid_ignore dxDropDownListOptions_contentRender*/
        /** @docid_ignore dxDropDownListOptions_applyValueMode*/
        /** @docid dxDropDownListOptions_displayValue */
        displayValue?: string;
        /** @docid dxDropDownListOptions_minSearchLength */
        minSearchLength?: number;
        /** @docid dxDropDownListOptions_searchExpr */
        searchExpr?: Object;
        /** @docid dxDropDownListOptions_searchMode */
        searchMode?: string;
        /** @docid dxDropDownListOptions_searchTimeout */
        searchTimeout?: number;
        /** @docid dxDropDownListOptions_onValueChanged */
        onValueChanged?: Function;
        /** @docid dxDropDownListOptions_valueChangeEvent */
        valueChangeEvent?: string;
        /** @docid dxDropDownListOptions_searchEnabled */
        searchEnabled?: boolean;
        /** @docid dxDropDownListOptions_pagingEnabled */
        pagingEnabled?: boolean;
        /** @docid dxDropDownListOptions_noDataText */
        noDataText?: string;
        /** @docid dxDropDownListOptions_onSelectionChanged */
        onSelectionChanged?: Function;
        /** @docid dxDropDownListOptions_onItemClick */
        onItemClick?: Function;
        /** @docid dxDropDownListOptions_onContentReady */
        onContentReady?: Function;
    }
    /** @docid dxDropDownList */
    export class dxDropDownList extends dxDropDownEditor {
        constructor(element: JQuery, options?: dxDropDownListOptions);
        constructor(element: Element, options?: dxDropDownListOptions);
    }
    export interface dxToolbarOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxToolbarOptions_activeStateEnabled */
        /** @docid_ignore dxToolbarOptions_selectedIndex */
        /** @docid_ignore dxToolbarOptions_selectedItem */
        /** @docid_ignore dxToolbarOptions_selectedItems */
        /** @docid_ignore dxToolbarOptions_submenuType */
        /** @docid_ignore dxToolbarOptions_onSelectionChanged */
        /** @docid dxToolbarOptions_menuItemRender */
        menuItemRender?: any;
        /** @docid dxToolbarOptions_menuItemTemplate */
        menuItemTemplate?: any;
        /** @docid dxToolbarOptions_renderAs */
        renderAs?: string;
    }
    /** @docid dxToolbar */
    export class dxToolbar extends CollectionWidget {
        constructor(element: JQuery, options?: dxToolbarOptions);
        constructor(element: Element, options?: dxToolbarOptions);
        /** @docid_ignore dxToolbarItemTemplate_location */
        /** @docid_ignore dxToolbarItemTemplate_options */
        /** @docid_ignore dxToolbarItemTemplate_widget */
    }
    export interface dxToastOptions extends dxOverlayOptions {
        /** @docid_ignore dxToastOptions_disabled */
        /** @docid_ignore dxToastOptions_dragEnabled */
        /** @docid_ignore dxToastOptions_resizeEnabled */
        /** @docid dxToastOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxToastOptions_displaytime */
        displayTime?: number;
        /** @docid dxToastOptions_height */
        height?: any;
        /** @docid dxToastOptions_message */
        message?: string;
        /** @docid dxToastOptions_position */
        position?: PositionOptions;
        /** @docid dxToastOptions_shading */
        shading?: boolean;
        /** @docid dxToastOptions_type */
        type?: string;
        /** @docid dxToastOptions_width */
        width?: any;
        /** @docid dxToastOptions_closeOnBackButton */
        closeOnBackButton?: boolean;
    }
    /** @docid dxToast */
    export class dxToast extends dxOverlay {
        constructor(element: JQuery, options?: dxToastOptions);
        constructor(element: Element, options?: dxToastOptions);
    }
    export interface dxTextEditorOptions extends EditorOptions {
        /** @docid dxTextEditorOptions_onChange */
        onChange?: Function;
        /** @docid dxTextEditorOptions_changeAction */
        changeAction?: Function;
        /** @docid dxTextEditorOptions_onCopy */
        onCopy?: Function;
        /** @docid dxTextEditorOptions_copyAction */
        copyAction?: Function;
        /** @docid dxTextEditorOptions_onCut */
        onCut?: Function;
        /** @docid dxTextEditorOptions_cutAction */
        cutAction?: Function;
        /** @docid dxTextEditorOptions_onEnterKey */
        onEnterKey?: Function;
        /** @docid dxTextEditorOptions_enterKeyAction */
        enterKeyAction?: Function;
        /** @docid dxTextEditorOptions_onFocusIn */
        onFocusIn?: Function;
        /** @docid dxTextEditorOptions_focusInAction */
        focusInAction?: Function;
        /** @docid dxTextEditorOptions_onFocusOut */
        onFocusOut?: Function;
        /** @docid dxTextEditorOptions_focusOutAction */
        focusOutAction?: Function;
        /** @docid dxTextEditorOptions_onInput */
        onInput?: Function;
        /** @docid dxTextEditorOptions_inputAction */
        inputAction?: Function;
        /** @docid dxTextEditorOptions_onKeyDown */
        onKeyDown?: Function;
        /** @docid dxTextEditorOptions_keyDownAction */
        keyDownAction?: Function;
        /** @docid dxTextEditorOptions_onKeyPress */
        onKeyPress?: Function;
        /** @docid dxTextEditorOptions_keyPressAction */
        keyPressAction?: Function;
        /** @docid dxTextEditorOptions_onKeyUp */
        onKeyUp?: Function;
        /** @docid dxTextEditorOptions_keyUpAction */
        keyUpAction?: Function;
        /** @docid dxTextEditorOptions_onPaste */
        onPaste?: Function;
        /** @docid dxTextEditorOptions_pasteAction */
        pasteAction?: Function;
        /** @docid dxTextEditorOptions_placeholder */
        placeholder?: string;
        /** @docid dxTextEditorOptions_showClearButton */
        showClearButton?: boolean;
        /** @docid dxTextEditorOptions_value */
        value?: any;
        /** @docid dxTextEditorOptions_valueChangeEvent */
        valueChangeEvent?: string;
        /** @docid dxTextEditorOptions_spellcheck */
        spellcheck?: boolean;
        /** @docid dxTextEditorOptions_attr */
        attr?: Object;
        /** @docid dxTextEditorOptions_text */
        text?: string;
        /** @docid dxTextEditorOptions_focusStateEnabled */
        focusStateEnabled?: boolean;
        /** @docid dxTextEditorOptions_hoverStateEnabled */
        hoverStateEnabled?: boolean;
        /** @docid dxTextEditorOptions_mask */
        mask?: string;
        /** @docid dxTextEditorOptions_maskChar */
        maskChar?: string;
        /** @docid dxTextEditorOptions_maskRules */
        maskRules?: Object;
        /** @docid dxTextEditorOptions_maskInvalidMessage */
        maskInvalidMessage?: string;
    }
    /** @docid dxTextEditor */
    export class dxTextEditor extends Editor {
        constructor(element: JQuery, options?: dxTextEditorOptions);
        constructor(element: Element, options?: dxTextEditorOptions);
        /** @docid dxTextEditorMethods_blur */
        blur(): void;
        /** @docid dxTextEditorMethods_focus */
        focus(): void;
    }
    export interface dxTextBoxOptions extends dxTextEditorOptions {
        /** @docid dxTextBoxOptions_maxlength */
        maxLength?: any;
        /** @docid dxTextBoxOptions_mode */
        mode?: string;
    }
    /** @docid dxTextbox */
    export class dxTextBox extends dxTextEditor {
        constructor(element: JQuery, options?: dxTextBoxOptions);
        constructor(element: Element, options?: dxTextBoxOptions);
    }
    export interface dxTextAreaOptions extends dxTextBoxOptions {
        /** @docid_ignore dxTextAreaOptions_mode */
        /** @docid_ignore dxTextAreaOptions_showClearButton */
        /** @docid_ignore dxTextAreaOptions_mask */
        /** @docid_ignore dxTextAreaOptions_maskChar */
        /** @docid_ignore dxTextAreaOptions_maskRules */
        /** @docid_ignore dxTextAreaOptions_maskInvalidMessage */
        /** @docid dxTextAreaOptions_spellcheck */
        spellcheck?: boolean;
    }
    /** @docid dxTextArea */
    export class dxTextArea extends dxTextBox {
        constructor(element: JQuery, options?: dxTextAreaOptions);
        constructor(element: Element, options?: dxTextAreaOptions);
    }
    export interface dxTabsOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxTabsOptions_activeStateEnabled*/
        /** @docid_ignore dxTabsOptions_noDataText */
        /** @docid_ignore dxTabsOptions_wordWrap */
        /** @docid_ignore dxTabsOptions_selectedItems */
        /** @docid dxTabsOptions_selectionMode */
        selectionMode?: string;
        /** @docid dxTabsOptions_scrollByContent */
        scrollByContent?: boolean;
        /** @docid dxTabsOptions_scrollingEnabled */
        scrollingEnabled?: boolean;
        /** @docid dxTabsOptions_showNavButtons */
        showNavButtons?: boolean;
    }
    /** @docid dxTabs */
    export class dxTabs extends CollectionWidget {
        constructor(element: JQuery, options?: dxTabsOptions);
        constructor(element: Element, options?: dxTabsOptions);
        /** @docid_ignore dxTabsItemTemplate_icon */
        /** @docid_ignore dxTabsItemTemplate_iconSrc */
        /** @docid_ignore dxTabsItemTemplate_badge */
    }
    export interface dxTabPanelOptions extends dxMultiViewOptions {
        /** @docid_ignore dxTabPanelItemTemplate_title */
        /** @docid_ignore dxTabPanelOptions_animationEnabled */
        /** @docid dxTabPanelOptions_onTitleClick */
        onTitleClick?: any;
        /** @docid dxTabPanelOptions_onTitleHold */
        onTitleHold?: Function;
        /** @docid dxTabPanelOptions_onTitleRendered */
        onTitleRendered?: Function;
        /** @docid dxTabPanelOptions_titleTemplate */
        titleTemplate?: any;
        /** @docid dxTabPanelOptions_itemTitleTemplate */
        itemTitleTemplate?: any;
    }
    /** @docid dxTabPanel */
    export class dxTabPanel extends dxMultiView {
        constructor(element: JQuery, options?: dxTabPanelOptions);
        constructor(element: Element, options?: dxTabPanelOptions);
        /** @docid_ignore dxTabPanelItemTemplate_icon */
        /** @docid_ignore dxTabPanelItemTemplate_iconSrc */
        /** @docid_ignore dxTabPanelItemTemplate_badge */
        /** @docid_ignore dxTabPanelItemTemplate_visible */
        /** @docid_ignore dxTabPanelItemTemplate_tabtemplate */
    }
    export interface dxSelectBoxOptions extends dxDropDownListOptions {
        /** @docid_ignore dxSelectBoxOptions_valueChangeEvent */
        /** @docid_ignore dxSelectBoxOptions_valueUpdateEvent */
        /** @docid dxSelectBoxOptions_fieldTemplate */
        fieldTemplate?: any;
        /** @docid dxSelectBoxOptions_placeholder */
        placeholder?: string;
        /** @docid dxSelectBoxOptions_fieldEditEnabled */
        fieldEditEnabled?: boolean;
    }
    /** @docid dxSelectbox */
    export class dxSelectBox extends dxDropDownList {
        constructor(element: JQuery, options?: dxSelectBoxOptions);
        constructor(element: Element, options?: dxSelectBoxOptions);
    }
    export interface dxTagBoxOptions extends dxSelectBoxOptions {
        /** @docid_ignore dxTagBoxOptions_changeAction */
        /** @docid_ignore dxTagBoxOptions_closeAction */
        /** @docid_ignore dxTagBoxOptions_copyAction */
        /** @docid_ignore dxTagBoxOptions_cutAction */
        /** @docid_ignore dxTagBoxOptions_enterKeyAction */
        /** @docid_ignore dxTagBoxOptions_focusInAction */
        /** @docid_ignore dxTagBoxOptions_focusOutAction */
        /** @docid_ignore dxTagBoxOptions_hiddenAction */
        /** @docid_ignore dxTagBoxOptions_inputAction */
        /** @docid_ignore dxTagBoxOptions_itemRender */
        /** @docid_ignore dxTagBoxOptions_keyDownAction */
        /** @docid_ignore dxTagBoxOptions_keyPressAction */
        /** @docid_ignore dxTagBoxOptions_keyUpAction */
        /** @docid_ignore dxTagBoxOptions_openAction */
        /** @docid_ignore dxTagBoxOptions_pasteAction */
        /** @docid_ignore dxTagBoxOptions_shownAction */
        /** @docid_ignore dxTagBoxOptions_valueChangeAction */
        /** @docid_ignore dxTagBoxOptions_onValuesChanged */
        /** @docid_ignore dxTagBoxOptions_tagTemplate */
        /** @docid dxTagBoxOptions_values */
        values?: Array<any>;
    }
    /** @docid dxTagBox */
    export class dxTagBox extends dxSelectBox {
        constructor(element: JQuery, options?: dxTagBoxOptions);
        constructor(element: Element, options?: dxTagBoxOptions);
    }
    export interface dxScrollViewOptions extends dxScrollableOptions {
        /** @docid dxScrollViewOptions_onPullDown */
        onPullDown?: Function;
        /** @docid dxScrollViewOptions_pullDownAction */
        pullDownAction?: Function;
        /** @docid dxScrollViewOptions_pulledDownText */
        pulledDownText?: string;
        /** @docid dxScrollViewOptions_pullingDownText */
        pullingDownText?: string;
        /** @docid dxScrollViewOptions_onReachBottom */
        onReachBottom?: Function;
        /** @docid dxScrollViewOptions_reachBottomAction */
        reachBottomAction?: Function;
        /** @docid dxScrollViewOptions_reachBottomText */
        reachBottomText?: string;
        /** @docid dxScrollViewOptions_refreshingText */
        refreshingText?: string;
        /** @docid dxscrollviewmethods_isFull */
        isFull(): boolean;
        /** @docid dxscrollviewmethods_refresh */
        refresh(): void;
        /** @docid dxscrollviewmethods_release */
        release(preventScrollBottom: boolean): JQueryPromise<void>;
        /** @docid dxscrollviewmethods_toggleLoading */
        toggleLoading(showOrHide: boolean): void;
    }
    /** @docid dxscrollview */
    export class dxScrollView extends dxScrollable {
        constructor(element: JQuery, options?: dxScrollViewOptions);
        constructor(element: Element, options?: dxScrollViewOptions);
    }
    export interface dxScrollableLocation {
        top?: number;
        left?: number;
    }
    export interface dxScrollableOptions extends DOMComponentOptions {
        /** @docid dxScrollableOptions_direction */
        direction?: string;
        /** @docid dxScrollableOptions_disabled */
        disabled?: boolean;
        /** @docid dxScrollableOptions_onScroll */
        onScroll?: Function;
        /** @docid dxScrollableOptions_scrollAction */
        scrollAction?: Function;
        /** @docid dxScrollableOptions_showScrollbar */
        showScrollbar?: string;
        /** @docid dxScrollableOptions_onUpdated */
        onUpdated?: Function;
        /** @docid dxScrollableOptions_updateAction */
        updateAction?: Function;
        /** @docid dxScrollableOptions_useNative */
        useNative?: boolean;
        /** @docid dxScrollableOptions_bounceEnabled */
        bounceEnabled?: boolean;
        /** @docid dxScrollableOptions_scrollByContent */
        scrollByContent?: boolean;
        /** @docid dxScrollableOptions_scrollByThumb */
        scrollByThumb?: boolean;
    }
    /** @docid dxscrollable */
    export class dxScrollable extends DOMComponent {
        constructor(element: JQuery, options?: dxScrollableOptions);
        constructor(element: Element, options?: dxScrollableOptions);
        /** @docid dxscrollablemethods_clientHeight */
        clientHeight(): number;
        /** @docid dxscrollablemethods_clientWidth */
        clientWidth(): number;
        /** @docid dxscrollablemethods_content */
        content(): JQuery;
        /** @docid dxscrollablemethods_scrollBy#scrollBy(distance) */
        scrollBy(distance: number): void;
        /** @docid dxscrollablemethods_scrollBy#scrollBy(distanceObject) */
        scrollBy(distanceObject: dxScrollableLocation): void;
        /** @docid dxscrollablemethods_scrollHeight */
        scrollHeight(): number;
        /** @docid dxscrollablemethods_scrollLeft */
        scrollLeft(): number;
        /** @docid dxscrollablemethods_scrollOffset */
        scrollOffset(): dxScrollableLocation;
        /** @docid dxscrollablemethods_scrollTo#scrollTo(targetLocation) */
        scrollTo(targetLocation: number): void;
        /** @docid dxscrollablemethods_scrollTo#scrollTo(targetLocationObject) */
        scrollTo(targetLocation: dxScrollableLocation): void;
        /** @docid dxscrollablemethods_scrollToElement */
        scrollToElement(element: Element): void;
        /** @docid dxscrollablemethods_scrollTop */
        scrollTop(): number;
        /** @docid dxscrollablemethods_scrollWidth */
        scrollWidth(): number;
        /** @docid dxscrollablemethods_update */
        update(): void;
    }
    export interface dxRadioGroupOptions extends CollectionWidgetOptions {
        /** @docid dxRadioGroupOptions_layout */
        layout?: string;
    }
    /** @docid_ignore dxRadioButton */
    /** @docid dxRadioGroup */
    export class dxRadioGroup extends CollectionWidget {
        constructor(element: JQuery, options?: dxRadioGroupOptions);
        constructor(element: Element, options?: dxRadioGroupOptions);
    }
    export interface dxPopupOptions extends dxOverlayOptions {
        /** @docid dxPopupOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxPopupOptions_dragEnabled */
        dragEnabled?: boolean;
        /** @docid dxPopupOptions_fullScreen */
        fullScreen?: boolean;
        /** @docid dxPopupOptions_position */
        position?: PositionOptions;
        /** @docid dxPopupOptions_showtitle */
        showTitle?: boolean;
        /** @docid dxPopupOptions_title */
        title?: string;
        /** @docid dxPopupOptions_titleTemplate */
        titleTemplate?: any;
        /** @docid dxPopupOptions_width */
        width?: any;
        /** @docid dxPopupOptions_buttons */
        buttons?: Array<any>;
        /** @docid dxPopupOptions_showCloseButton */
        showCloseButton?: boolean;
        /** @docid dxPopupOptions_onTitleRendered */
        onTitleRendered?: Function;
    }
    /** @docid dxPopup */
    export class dxPopup extends dxOverlay {
        constructor(element: JQuery, options?: dxPopupOptions);
        constructor(element: Element, options?: dxPopupOptions);
    }
    export interface dxPopoverOptions extends dxPopupOptions {
        /** @docid_ignore dxPopoverOptions_closeOnOutsideClick*/
        /** @docid_ignore dxPopoverOptions_dragEnabled*/
        /** @docid_ignore dxPopoverOptions_resizeEnabled*/
        /** @docid_ignore dxPopoverOptions_fullScreen*/
        /** @docid dxPopoverOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxPopoverOptions_height */
        height?: any;
        /** @docid dxPopoverOptions_position */
        position?: PositionOptions;
        /** @docid dxPopoverOptions_shading */
        shading?: boolean;
        /** @docid dxPopoverOptions_showtitle */
        showTitle?: boolean;
        /** @docid dxPopoverOptions_target */
        target?: any;
        /** @docid dxPopoverOptions_width */
        width?: any;
    }
    /** @docid dxPopover */
    export class dxPopover extends dxPopup {
        constructor(element: JQuery, options?: dxPopoverOptions);
        constructor(element: Element, options?: dxPopoverOptions);
        /** @docid dxPopoverMethods_show */
        show(target?: any): JQueryPromise<void>;
    }
    export interface dxOverlayOptions extends WidgetOptions {
        /** @docid_ignore dxOverlayOptions_activeStateEnabled*/
        /** @docid_ignore dxOverlayOptions_contentReadyAction */
        /** @docid_ignore dxOverlayOptions_onContentReady */
        /** @docid dxOverlayOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxOverlayOptions_closeOnBackButton */
        closeOnBackButton?: boolean;
        /** @docid dxOverlayOptions_closeOnOutsideClick */
        closeOnOutsideClick?: any;
        /** @docid dxOverlayOptions_contentTemplate */
        contentTemplate?: any;
        /** @docid dxOverlayOptions_deferRendering */
        deferRendering?: boolean;
        /** @docid dxOverlayOptions_dragEnabled */
        dragEnabled?: boolean;
        /** @docid dxOverlayOptions_resizeEnabled */
        resizeEnabled?: boolean;
        /** @docid dxOverlayOptions_height */
        height?: any;
        /** @docid dxOverlayOptions_onHidden */
        onHidden?: Function;
        /** @docid dxOverlayOptions_hiddenAction */
        hiddenAction?: Function;
        /** @docid dxOverlayOptions_onHiding */
        onHiding?: Function;
        /** @docid dxOverlayOptions_hidingAction */
        hidingAction?: Function;
        /** @docid dxOverlayOptions_position */
        position?: PositionOptions;
        /** @docid dxOverlayOptions_shading */
        shading?: boolean;
        /** @docid dxOverlayOptions_shadingColor */
        shadingColor?: string;
        /** @docid dxOverlayOptions_onShowing */
        onShowing?: Function;
        /** @docid dxOverlayOptions_showingAction */
        showingAction?: Function;
        /** @docid dxOverlayOptions_onShown */
        onShown?: Function;
        /** @docid dxOverlayOptions_shownAction */
        shownAction?: Function;
        /** @docid dxOverlayOptions_visible */
        visible?: boolean;
        /** @docid dxOverlayOptions_width */
        width?: any;
    }
    /** @docid dxOverlay */
    export class dxOverlay extends Widget {
        constructor(element: JQuery, options?: dxOverlayOptions);
        constructor(element: Element, options?: dxOverlayOptions);
        /** @docid dxOverlaymethods_content */
        content(): JQuery;
        /** @docid dxOverlaymethods_hide */
        hide(): JQueryPromise<void>;
        /** @docid dxOverlaymethods_repaint */
        repaint(): void;
        /** @docid dxOverlaymethods_show */
        show(): JQueryPromise<void>;
        /** @docid dxOverlaymethods_toggle */
        toggle(showing: boolean): JQueryPromise<void>;
        /** @docid dxOverlayMethods_baseZIndex */
        static baseZIndex(zIndex: number): void;
    }
    export interface dxNumberBoxOptions extends dxTextEditorOptions {
        /** @docid_ignore dxNumberBoxOptions_mask */
        /** @docid_ignore dxNumberBoxOptions_maskChar */
        /** @docid_ignore dxNumberBoxOptions_maskRules */
        /** @docid_ignore dxNumberBoxOptions_maskInvalidMessage */
        /** @docid dxNumberBoxOptions_max */
        max?: number;
        /** @docid dxNumberBoxOptions_min */
        min?: number;
        /** @docid dxNumberBoxOptions_showSpinButtons */
        showSpinButtons?: boolean;
        /** @docid dxNumberBoxOptions_useTouchSpinButtons */
        useTouchSpinButtons?: boolean;
        /** @docid dxNumberBoxOptions_step */
        step?: number;
        /** @docid dxNumberBoxOptions_value */
        value?: number;
    }
    /** @docid dxNumberBox */
    export class dxNumberBox extends dxTextEditor {
        constructor(element: JQuery, options?: dxNumberBoxOptions);
        constructor(element: Element, options?: dxNumberBoxOptions);
    }
    export interface dxNavBarOptions extends dxTabsOptions {
        /** @docid dxNavBarOptions_scrollingEnabled */
        scrollingEnabled?: boolean;
    }
    /** @docid dxNavBar */
    export class dxNavBar extends dxTabs {
        constructor(element: JQuery, options?: dxNavBarOptions);
        constructor(element: Element, options?: dxNavBarOptions);
        /** @docid_ignore dxNavBarItemTemplate_badge */
    }
    export interface dxMultiViewOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxMultiViewOptions_noDataText */
        /** @docid_ignore dxMultiViewOptions_selectedItems */
        /** @docid dxMultiViewOptions_animationenabled */
        animationEnabled?: boolean;
        /** @docid dxMultiViewOptions_loop */
        loop?: boolean;
        /** @docid dxMultiViewOptions_selectedIndex */
        selectedIndex?: number;
        /** @docid dxMultiViewOptions_swipeenabled */
        swipeEnabled?: boolean;
    }
    /** @docid dxMultiView */
    export class dxMultiView extends CollectionWidget {
        constructor(element: JQuery, options?: dxMultiViewOptions);
        constructor(element: Element, options?: dxMultiViewOptions);
        /** @docid_ignore dxMultiViewItemTemplate_visible */
    }
    export interface dxMapOptions extends WidgetOptions {
        /** @docid dxMapOptions_autoAdjust */
        autoAdjust?: boolean;
        /** @docid dxMapOptions_bounds */
        bounds?: {
            /** @docid dxMapOptions_bounds_northEast */
            northEast?: {
                /** @docid dxMapOptions_bounds_northEast_lat */
                lat?: number;
                /** @docid dxMapOptions_bounds_northEast_lng */
                lng?: number;
            };
            /** @docid dxMapOptions_bounds_southWest */
            southWest?: {
                /** @docid dxMapOptions_bounds_southWest_lat */
                lat?: number;
                /** @docid dxMapOptions_bounds_southWest_lng */
                lng?: number;
            };
            /** @docid dxMapOptions_center */
            center?: {
                /** @docid dxMapOptions_center_lat */
                lat?: number;
                /** @docid dxMapOptions_center_lng */
                lng?: number;
            };
            /** @docid dxMapOptions_onClick */
            onClick?: any;
            /** @docid dxMapOptions_clickAction */
            clickAction?: any;
            /** @docid dxMapOptions_controls */
            controls?: boolean;
            /** @docid dxMapOptions_height */
            height?: number;
            /** @docid dxMapOptions_key */
            key?: {
                /** @docid dxMapOptions_key_bing */
                bing?: string;
                /** @docid dxMapOptions_key_google */
                google?: string;
                /** @docid dxMapOptions_key_googleStatic */
                googleStatic?: string;
            }
            /** @docid dxMapOptions_onMarkerAdded */
            onMarkerAdded?: Function;
            /** @docid dxMapOptions_markerAddedAction */
            markerAddedAction?: Function;
            /** @docid dxMapOptions_markerIconSrc */
            markerIconSrc?: string;
            /** @docid dxMapOptions_onMarkerRemoved */
            onMarkerRemoved?: Function;
            /** @docid dxMapOptions_markerRemovedAction */
            markerRemovedAction?: Function;
            /** @docid dxMapOptions_markers */
            markers?: Array<any>;
            /** @docid dxMapOptions_provider */
            provider?: string;
            /** @docid dxMapOptions_onReady */
            onReady?: Function;
            /** @docid dxMapOptions_readyAction */
            readyAction?: Function;
            /** @docid dxMapOptions_onRouteAdded */
            onRouteAdded?: Function;
            /** @docid dxMapOptions_routeAddedAction */
            routeAddedAction?: Function;
            /** @docid dxMapOptions_onRouteRemoved */
            onRouteRemoved?: Function;
            /** @docid dxMapOptions_routeRemovedAction */
            routeRemovedAction?: Function;
            /** @docid dxMapOptions_routes */
            routes?: Array<any>;
            /** @docid dxMapOptions_type */
            type?: string;
            /** @docid dxMapOptions_width */
            width?: number;
            /** @docid dxMapOptions_zoom */
            zoom?: number;
            /** @docid dxmapmethods_addmarker */
            addMarker(markerOptions: Object): JQueryPromise<Object>;
            /** @docid dxmapmethods_addroute */
            addRoute(options: Object): JQueryPromise<Object>;
            /** @docid dxmapmethods_removemarker */
            removeMarker(marker: Object): JQueryPromise<void>;
            /** @docid dxmapmethods_removeroute */
            removeRoute(route: any): JQueryPromise<void>;
        };
    }
    /** @docid dxmap */
    export class dxMap extends Widget {
        constructor(element: JQuery, options?: dxMapOptions);
        constructor(element: Element, options?: dxMapOptions);
    }
    export interface dxLookupOptions extends dxDropDownListOptions {
        /** @docid_ignore dxLookupOptions_onChange*/
        /** @docid_ignore dxLookupOptions_changeAction*/
        /** @docid_ignore dxLookupOptions_onCopy*/
        /** @docid_ignore dxLookupOptions_copyAction*/
        /** @docid_ignore dxLookupOptions_onCut*/
        /** @docid_ignore dxLookupOptions_cutAction*/
        /** @docid_ignore dxLookupOptions_onEnterKey*/
        /** @docid_ignore dxLookupOptions_enterKeyAction*/
        /** @docid_ignore dxLookupOptions_onFocusIn*/
        /** @docid_ignore dxLookupOptions_focusInAction*/
        /** @docid_ignore dxLookupOptions_onFocusOut*/
        /** @docid_ignore dxLookupOptions_focusOutAction*/
        /** @docid_ignore dxLookupOptions_onInput*/
        /** @docid_ignore dxLookupOptions_inputAction*/
        /** @docid_ignore dxLookupOptions_onKeyDown*/
        /** @docid_ignore dxLookupOptions_keyDownAction*/
        /** @docid_ignore dxLookupOptions_onKeyPress*/
        /** @docid_ignore dxLookupOptions_keyPressAction*/
        /** @docid_ignore dxLookupOptions_onKeyUp*/
        /** @docid_ignore dxLookupOptions_keyUpAction*/
        /** @docid_ignore dxLookupOptions_maxlength*/
        /** @docid_ignore dxLookupOptions_mode*/
        /** @docid_ignore dxLookupOptions_showClearButton*/
        /** @docid_ignore dxLookupOptions_onPaste*/
        /** @docid_ignore dxLookupOptions_readOnly*/
        /** @docid_ignore dxLookupOptions_minFilterLength */
        /** @docid_ignore dxLookupOptions_pasteAction */
        /** @docid_ignore dxLookupOptions_showDoneButton */
        /** @docid_ignore dxLookupOptions_doneButtonText */
        /** @docid_ignore dxLookupOptions_autoPagingEnabled */
        /** @docid_ignore dxLookupOptions_pagingEnabled */
        /** @docid dxLookupOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxLookupOptions_cancelButtonText */
        cancelButtonText?: string;
        /** @docid dxLookupOptions_clearButtonText */
        clearButtonText?: string;
        /** @docid dxLookupOptions_cleanSearchOnOpening */
        cleanSearchOnOpening?: boolean;
        /** @docid dxLookupOptions_closeOnOutsideClick */
        closeOnOutsideClick?: any;
        /** @docid dxLookupOptions_applyButtonText */
        applyButtonText?: string;
        /** @docid dxLookupOptions_fullScreen */
        fullScreen?: boolean;
        /** @docid dxLookupOptions_grouped */
        grouped?: boolean;
        /** @docid dxLookupOptions_groupRender */
        groupRender?: any;
        /** @docid dxLookupOptions_groupTemplate */
        groupTemplate?: any;
        /** @docid dxLookupOptions_nextButtonText */
        nextButtonText?: string;
        /** @docid dxLookupOptions_onPageLoading */
        onPageLoading?: Function;
        /** @docid dxLookupOptions_pageLoadMode */
        pageLoadMode?: string;
        /** @docid dxLookupOptions_pageLoadingAction */
        pageLoadingAction?: Function;
        /** @docid dxLookupOptions_pageLoadingText */
        pageLoadingText?: string;
        /** @docid dxLookupOptions_placeholder */
        placeholder?: string;
        /** @docid dxLookupOptions_popupHeight */
        popupHeight?: any;
        /** @docid dxLookupOptions_popupWidth */
        popupWidth?: any;
        /** @docid dxLookupOptions_position */
        position?: PositionOptions;
        /** @docid dxLookupOptions_pulledDownText */
        pulledDownText?: string;
        /** @docid dxLookupOptions_pullingDownText */
        pullingDownText?: string;
        /** @docid dxLookupOptions_onPullRefresh */
        onPullRefresh?: Function;
        /** @docid dxLookupOptions_pullRefreshAction */
        pullRefreshAction?: Function;
        /** @docid dxLookupOptions_pullRefreshEnabled */
        pullRefreshEnabled?: boolean;
        /** @docid dxLookupOptions_refreshingText */
        refreshingText?: string;
        /** @docid dxLookupOptions_onScroll */
        onScroll?: Function;
        /** @docid dxLookupOptions_scrollAction */
        scrollAction?: Function;
        /** @docid dxLookupOptions_searchEnabled */
        searchEnabled?: boolean;
        /** @docid dxLookupOptions_searchPlaceholder */
        searchPlaceholder?: string;
        /** @docid dxLookupOptions_shading */
        shading?: boolean;
        /** @docid dxLookupOptions_showCancelButton */
        showCancelButton?: boolean;
        /** @docid dxLookupOptions_showNextButton */
        showNextButton?: boolean;
        /** @docid dxLookupOptions_title */
        title?: string;
        /** @docid dxLookupOptions_titleTemplate */
        titleTemplate?: any;
        /** @docid dxLookupOptions_useNativeScrolling */
        useNativeScrolling?: boolean;
        /** @docid dxLookupOptions_usePopover */
        usePopover?: boolean;
        /** @docid dxLookupOptions_onValueChanged */
        onValueChanged?: Function;
        /** @docid dxLookupOptions_contentReadyAction */
        contentReadyAction?: Function;
        /** @docid dxLookupOptions_titleRender */
        titleRender?: any;
        /** @docid dxLookupOptions_onTitleRendered */
        onTitleRendered?: Function;
        /** @docid dxLookupOptions_showPopupTitle */
        showPopupTitle?: boolean;
    }
    /** @docid dxlookup */
    export class dxLookup extends dxDropDownList {
        constructor(element: JQuery, options?: dxLookupOptions);
        constructor(element: Element, options?: dxLookupOptions);
        /** @docid dxlookup_Default_Item_Template */
    }
    export interface dxLoadPanelOptions extends dxOverlayOptions {
        /** @docid_ignore dxLoadPanelOptions_closeOnBackButton */
        /** @docid_ignore dxLoadPanelOptions_disabled */
        /** @docid_ignore dxLoadPanelOptions_dragEnabled */
        /** @docid_ignore dxLoadPanelOptions_resizeEnabled */
        /** @docid_ignore dxLoadPanelOptions_contentTemplate */
        /** @docid dxLoadPanelOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxLoadPanelOptions_delay */
        delay?: number;
        /** @docid dxLoadPanelOptions_height */
        height?: number;
        /** @docid dxLoadPanelOptions_indicatorSrc */
        indicatorSrc?: string;
        /** @docid dxLoadPanelOptions_message */
        message?: string;
        /** @docid dxLoadPanelOptions_showIndicator */
        showIndicator?: boolean;
        /** @docid dxLoadPanelOptions_showPane */
        showPane?: boolean;
        /** @docid dxLoadPanelOptions_width */
        width?: number;
    }
    /** @docid dxLoadPanel */
    export class dxLoadPanel extends dxOverlay {
        constructor(element: JQuery, options?: dxLoadPanelOptions);
        constructor(element: Element, options?: dxLoadPanelOptions);
    }
    export interface dxLoadIndicatorOptions extends WidgetOptions {
        /** @docid_ignore dxLoadIndicatoroptions_disabled */
        /** @docid_ignore dxLoadIndicatoroptions_hoverStateEnabled */
        /** @docid_ignore dxLoadIndicatoroptions_activeStateEnabled */
        /** @docid dxLoadIndicatoroptions_indicatorsrc */
        indicatorSrc?: string;
    }
    /** @docid dxLoadIndicator */
    export class dxLoadIndicator extends Widget {
        constructor(element: JQuery, options?: dxLoadIndicatorOptions);
        constructor(element: Element, options?: dxLoadIndicatorOptions);
    }
    export interface dxListOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxListOptions_selectedIndex */
        /** @docid_ignore dxListOptions_selectedItem */
        /** @docid_ignore dxListOptions_autoPagingEnabled */
        /** @docid_ignore dxListOptions_showNextButton */
        /** @docid dxListOptions_grouped */
        grouped?: boolean;
        /** @docid dxListOptions_groupRender */
        groupRender?: any;
        /** @docid dxListOptions_groupTemplate */
        groupTemplate?: any;
        /** @docid dxListOptions_onItemDeleting */
        onItemDeleting?: Function;
        /** @docid dxListOptions_onItemDeleted */
        onItemDeleted?: Function;
        /** @docid dxListOptions_onGroupRendered */
        onGroupRendered?: Function;
        /** @docid dxListOptions_itemDeleteAction */
        itemDeleteAction?: Function;
        /** @docid dxListOptions_onItemReordered */
        onItemReordered?: Function;
        /** @docid dxListOptions_itemReorderAction */
        itemReorderAction?: Function;
        /** @docid dxListOptions_onItemClick */
        onItemClick?: any;
        /** @docid dxListOptions_onItemSwipe */
        onItemSwipe?: Function;
        /** @docid dxListOptions_itemSwipeAction */
        itemSwipeAction?: Function;
        /** @docid dxListOptions_nextButtonText */
        nextButtonText?: string;
        /** @docid dxListOptions_onPageLoading */
        onPageLoading?: Function;
        /** @docid dxListOptions_pageLoadingAction */
        pageLoadingAction?: Function;
        /** @docid dxListOptions_pageLoadingText */
        pageLoadingText?: string;
        /** @docid dxListOptions_pulledDownText */
        pulledDownText?: string;
        /** @docid dxListOptions_pullingDownText */
        pullingDownText?: string;
        /** @docid dxListOptions_onPullRefresh */
        onPullRefresh?: Function;
        /** @docid dxListOptions_pullRefreshAction */
        pullRefreshAction?: Function;
        /** @docid dxListOptions_pullRefreshEnabled */
        pullRefreshEnabled?: boolean;
        /** @docid dxListOptions_refreshingText */
        refreshingText?: string;
        /** @docid dxListOptions_onScroll */
        onScroll?: Function;
        /** @docid dxListOptions_scrollAction */
        scrollAction?: Function;
        /** @docid dxListOptions_scrollingEnabled */
        scrollingEnabled?: boolean;
        /** @docid dxListOptions_showScrollbar */
        showScrollbar?: string;
        /** @docid dxListOptions_useNativeScrolling */
        useNativeScrolling?: boolean;
        /** @docid dxListOptions_bounceEnabled */
        bounceEnabled?: boolean;
        /** @docid dxListOptions_scrollByContent */
        scrollByContent?: boolean;
        /** @docid dxListOptions_scrollByThumb */
        scrollByThumb?: boolean;
        /** @docid dxListOptions_itemUnselectAction */
        itemUnselectAction?: Function;
        /** @docid dxListOptions_onItemContextMenu */
        onItemContextMenu?: Function;
        /** @docid dxListOptions_onItemHold */
        onItemHold?: Function;
        /** @docid dxListOptions_collapsibleGroups */
        collapsibleGroups?: boolean;
        /** @docid dxListOptions_pageLoadMode */
        pageLoadMode?: string;
        /** @docid dxListOptions_showSelectionControls */
        showSelectionControls?: boolean;
        /** @docid dxListOptions_selectionMode */
        selectionMode?: string;
        /** @docid dxListOptions_selectAllText */
        selectAllText?: string;
        /** @docid dxListOptions_menuItems */
        menuItems?: Array<any>;
        /** @docid dxListOptions_menuMode */
        menuMode?: string;
        /** @docid dxListOptions_allowItemDeleting */
        allowItemDeleting?: boolean;
        /** @docid dxListOptions_itemDeleteMode */
        itemDeleteMode?: string;
        /** @docid dxListOptions_allowItemReordering */
        allowItemReordering?: boolean;
        /** @docid dxListOptions_indicateLoading */
        indicateLoading?: boolean;
    }
    /** @docid dxList */
    export class dxList extends CollectionWidget {
        constructor(element: JQuery, options?: dxListOptions);
        constructor(element: Element, options?: dxListOptions);
        /** @docid_ignore dxListItemTemplate_key */
        /** @docid_ignore dxListItemTemplate_badge */
        /** @docid_ignore dxListItemTemplate_showChevron */
        /** @docid_ignore dxListMethods_getFlatIndexByItemElement */
        /** @docid_ignore dxListMethods_getItemByIndex */
        /** @docid_ignore dxListMethods_getItemElementByFlatIndex */
        /** @docid dxListMethods_clientHeight */
        clientHeight(): number;
        /** @docid dxListMethods_deleteItem#deleteItem(itemIndex) */
        deleteItem(itemIndex: any): JQueryPromise<void>;
        /** @docid dxListMethods_deleteItem#deleteItem(itemElement) */
        deleteItem(itemElement: Element): JQueryPromise<void>;
        /** @docid dxListMethods_isItemSelected#isItemSelected(itemIndex) */
        isItemSelected(itemIndex: any): boolean;
        /** @docid dxListMethods_isItemSelected#isItemSelected(itemElement) */
        isItemSelected(itemElement: Element): boolean;
        /** @docid dxListMethods_reload */
        reload(): void;
        /** @docid dxListMethods_reorderItem#reorderItem(itemElement,toItemElement) */
        reorderItem(itemElement: Element, toItemElement: Element): JQueryPromise<void>;
        /** @docid dxListMethods_reorderItem#reorderItem(itemIndex,toItemIndex) */
        reorderItem(itemIndex: any, toItemIndex: any): JQueryPromise<void>;
        /** @docid dxListMethods_scrollBy */
        scrollBy(distance: number): void;
        /** @docid dxListMethods_scrollHeight */
        scrollHeight(): number;
        /** @docid dxListMethods_scrollTo */
        scrollTo(location: number): void;
        /** @docid dxListMethods_scrollToItem#scrollToItem(itemElement) */
        scrollToItem(itemElement: Element): void;
        /** @docid dxListMethods_scrollToItem#scrollToItem(itemIndex) */
        scrollToItem(itemIndex: any): void;
        /** @docid dxListMethods_scrollTop */
        scrollTop(): number;
        /** @docid dxListMethods_selectItem#selectItem(itemElement) */
        selectItem(itemElement: Element): void;
        /** @docid dxListMethods_selectItem#selectItem(itemIndex) */
        selectItem(itemIndex: any): void;
        /** @docid dxListMethods_unselectItem#unselectItem(itemElement) */
        unselectItem(itemElement: Element): void;
        /** @docid dxListMethods_unselectItem#unselectItem(itemIndex) */
        unselectItem(itemIndex: any): void;
        /** @docid dxListMethods_updateDimensions */
        updateDimensions(): JQueryPromise<void>;
        /** @docid dxListMethods_expandGroup */
        expandGroup(groupIndex: number): JQueryPromise<void>;
        /** @docid dxListMethods_collapseGroup */
        collapseGroup(groupIndex: number): JQueryPromise<void>;
    }
    export interface dxGalleryOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxGalleryOptions_activeStateEnabled */
        /** @docid_ignore dxGalleryOptions_noDataText */
        /** @docid_ignore dxGalleryOptions_selectedItems */
        /** @docid dxGalleryOptions_animationDuration */
        animationDuration?: number;
        /** @docid dxGalleryOptions_animationEnabled */
        animationEnabled?: boolean;
        /** @docid dxGalleryOptions_indicatorEnabled */
        indicatorEnabled?: boolean;
        /** @docid dxGalleryOptions_loop */
        loop?: boolean;
        /** @docid dxGalleryOptions_selectedindex */
        selectedIndex?: number;
        /** @docid dxGalleryOptions_showIndicator */
        showIndicator?: boolean;
        /** @docid dxGalleryOptions_showNavButtons */
        showNavButtons?: boolean;
        /** @docid dxGalleryOptions_slideshowdelay */
        slideshowDelay?: number;
        /** @docid dxGalleryOptions_swipeEnabled */
        swipeEnabled?: boolean;
        /** @docid dxGalleryOptions_wrapAround */
        wrapAround?: boolean;
        /** @docid dxGalleryOptions_stretchImages */
        stretchImages?: boolean;
        /** @docid dxGalleryOptions_initialItemWidth */
        initialItemWidth?: number;
    }
    /** @docid dxgallery */
    export class dxGallery extends CollectionWidget {
        constructor(element: JQuery, options?: dxGalleryOptions);
        constructor(element: Element, options?: dxGalleryOptions);
        /** @docid_ignore dxGalleryItemTemplate_imageSrc */
        /** @docid_ignore dxGalleryItemTemplate_visible */
        /** @docid dxgallerymethods_goToItem */
        goToItem(itemIndex: number, animation: boolean): JQueryPromise<any>;
        /** @docid dxgallerymethods_nextItem */
        nextItem(animation: boolean): JQueryPromise<any>;
        /** @docid dxgallerymethods_prevItem */
        prevItem(animation: boolean): JQueryPromise<any>;
    }
    export interface dxDropDownEditorOptions extends dxTextBoxOptions {
        /** @docid_ignore dxDropDownEditorOptions_mask */
        /** @docid_ignore dxDropDownEditorOptions_maskChar */
        /** @docid_ignore dxDropDownEditorOptions_maskRules */
        /** @docid_ignore dxDropDownEditorOptions_maskInvalidMessage */
        /** @docid dxDropDownEditorOptions_value */
        value?: Object;
        /** @docid dxDropDownEditorOptions_onClosed */
        onClosed?: Function;
        /** @docid dxDropDownEditorOptions_onOpened */
        onOpened?: Function;
        /** @docid dxDropDownEditorOptions_opened */
        opened?: boolean;
        /** @docid dxDropDownEditorOptions_closeAction */
        closeAction?: Function;
        /** @docid dxDropDownEditorOptions_openAction */
        openAction?: Function;
        /** @docid dxDropDownEditorOptions_shownAction */
        shownAction?: Function;
        /** @docid dxDropDownEditorOptions_hiddenAction */
        hiddenAction?: Function;
        /** @docid dxDropDownEditorOptions_fieldEditEnabled */
        fieldEditEnabled?: boolean;
        /** @docid dxDropDownEditorOptions_editEnabled */
        editEnabled?: boolean;
        /** @docid dxDropDownEditorOptions_applyValueMode */
        applyValueMode?: string;
    }
    /** @docid dxDropDownEditor */
    export class dxDropDownEditor extends dxTextBox {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
        /** @docid dxDropDownEditorMethods_close */
        close(): void;
        /** @docid dxDropDownEditorMethods_open */
        open(): void;
        /** @docid dxDropDownEditorMethods_reset */
        reset(): void;
        /** @docid dxDropDownEditorMethods_field */
        field(): JQuery;
        /** @docid dxDropDownEditorMethods_content */
        content(): JQuery;
    }
    export interface dxDateBoxOptions extends dxTextEditorOptions {
        /** @docid_ignore dxDateBoxOptions_mode*/
        /** @docid_ignore dxDateBoxOptions_closeOnValueChange */
        /** @docid dxDateBoxOptions_format */
        format?: string;
        /** @docid dxDateBoxOptions_formatString */
        formatString?: string;
        /** @docid dxDateBoxOptions_max */
        max?: Date;
        /** @docid dxDateBoxOptions_min */
        min?: Date;
        /** @docid dxDateBoxOptions_placeholder */
        placeholder?: string;
        /** @docid dxDateBoxOptions_useCalendar */
        useCalendar?: boolean;
        /** @docid dxDateBoxOptions_value */
        value?: Date;
        /** @docid dxDateBoxOptions_useNative */
        useNative?: boolean;
        /** @docid dxDateBoxOptions_interval */
        interval?: number;
        /** @docid dxDateBoxOptions_maxZoomLevel */
        maxZoomLevel?: string;
        /** @docid dxDateBoxOptions_pickerType */
        pickerType?: string;
    }
    /** @docid dxDateBox */
    export class dxDateBox extends dxDropDownEditor {
        constructor(element: JQuery, options?: dxDateBoxOptions);
        constructor(element: Element, options?: dxDateBoxOptions);
    }
    export interface dxCheckBoxOptions extends EditorOptions {
        /** @docid dxCheckBoxOptions_value */
        value?: boolean;
        /** @docid dxcheckboxoptions_text */
        text?: string;
    }
    /** @docid dxcheckbox */
    export class dxCheckBox extends Editor {
        constructor(element: JQuery, options?: dxCheckBoxOptions);
        constructor(element: Element, options?: dxCheckBoxOptions);
    }
    export interface dxCalendarOptions extends EditorOptions {
        /** @docid dxCalendarOptions_currentDate */
        currentDate?: Date;
        /** @docid dxCalendarOptions_firstDayOfWeek */
        firstDayOfWeek?: number;
        /** @docid dxCalendarOptions_max */
        max?: Date;
        /** @docid dxCalendarOptions_min */
        min?: Date;
        /** @docid dxCalendarOptions_showTodayButton */
        showTodayButton?: boolean;
        /** @docid dxCalendarOptions_zoomLevel */
        zoomLevel?: string;
        /** @docid dxCalendarOptions_maxZoomLevel */
        maxZoomLevel?: string;
        /** @docid dxCalendarOptions_minZoomLevel */
        minZoomLevel?: string;
		/** @docid dxCalendarOptions_cellTemplate */
		cellTemplate?: any;
    }
    /** @docid dxCalendar */
    export class dxCalendar extends Editor {
        constructor(element: JQuery, options?: dxCalendarOptions);
        constructor(element: Element, options?: dxCalendarOptions);
    }
    export interface dxButtonOptions extends WidgetOptions {
        /** @docid dxbuttonoptions_activeStateEnabled */
        activeStateEnabled?: boolean;
        /** @docid dxbuttonoptions_onClick */
        onClick?: any;
        /** @docid dxbuttonoptions_clickAction */
        clickAction?: any;
        /** @docid dxbuttonoptions_icon */
        icon?: string;
        /** @docid dxbuttonoptions_iconSrc */
        iconSrc?: string;
        /** @docid dxbuttonoptions_text */
        text?: string;
        /** @docid dxbuttonoptions_type */
        type?: string;
        /** @docid dxbuttonoptions_validationgroup */
        validationGroup?: string;
    }
    /** @docid dxbutton */
    export class dxButton extends Widget {
        constructor(element: JQuery, options?: dxButtonOptions);
        constructor(element: Element, options?: dxButtonOptions);
    }
    export interface dxBoxOptions extends CollectionWidget {
        /** @docid_ignore dxBoxOptions_focusStateEnabled */
        /** @docid_ignore dxBoxOptions_activeStateEnabled */
        /** @docid_ignore dxBoxOptions_hint */
        /** @docid_ignore dxBoxOptions_noDataText */
        /** @docid_ignore dxBoxOptions_onSelectionChanged */
        /** @docid_ignore dxBoxOptions_selectedIndex */
        /** @docid_ignore dxBoxOptions_selectedItem */
        /** @docid_ignore dxBoxOptions_selectedItems */
        /** @docid_ignore dxBoxOptions_tabIndex */
        /** @docid_ignore dxBoxOptions_itemRender */
        /** @docid_ignore dxBoxOptions_itemHoldAction */
        /** @docid_ignore dxBoxOptions_itemClickAction */
        /** @docid_ignore dxBoxOptions_itemSelectAction */
        /** @docid_ignore dxBoxOptions_itemRenderedAction */    
        /** @docid dxBoxOptions_align */
        align?: string;
        /** @docid dxBoxOptions_direction */
        direction?: string;
        /** @docid dxBoxOptions_crossAlign */
        crossAlign?: string;
        /** @docid_ignore dxBoxItemTemplate_ratio */
        /** @docid_ignore dxBoxItemTemplate_baseSize */
        /** @docid_ignore dxBoxItemTemplate_box */
    }
    /** @docid dxBox */
    export class dxBox extends CollectionWidget {
        constructor(element: JQuery, options?: dxBoxOptions);
        constructor(element: Element, options?: dxBoxOptions);    
    }
    export interface dxResponsiveBoxOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxResponsiveBoxOptions_activeStateEnabled */
        /** @docid_ignore dxResponsiveBoxOptions_focusStateEnabled */
        /** @docid_ignore dxResponsiveBoxOptions_hint */
        /** @docid_ignore dxResponsiveBoxOptions_noDataText */
        /** @docid_ignore dxResponsiveBoxOptions_onSelectionChanged */
        /** @docid_ignore dxResponsiveBoxOptions_selectedIndex */
        /** @docid_ignore dxResponsiveBoxOptions_selectedItem */
        /** @docid_ignore dxResponsiveBoxOptions_selectedItems */
        /** @docid_ignore dxResponsiveBoxOptions_tabIndex */        
        /** @docid_ignore dxResponsiveBoxOptions_contentReadyAction */
        /** @docid_ignore dxResponsiveBoxOptions_itemClickAction */
        /** @docid_ignore dxResponsiveBoxOptions_itemHoldAction */
        /** @docid_ignore dxResponsiveBoxOptions_itemRender */
        /** @docid_ignore dxResponsiveBoxOptions_itemRenderedAction */
        /** @docid_ignore dxResponsiveBoxOptions_itemSelectAction */
        /** @docid dxResponsiveBoxOptions_rows */
        rows?: Array<Object>;
        /** @docid dxResponsiveBoxOptions_cols */
        cols?: Array<Object>;
        /** @docid dxResponsiveBoxOptions_screenByWidth */
        screenByWidth?: (width: number) => string;
        /** @docid dxResponsiveBoxOptions_singleColumnScreen */
        singleColumnScreen?: string;
        /** @docid_ignore dxResponsiveBoxItemTemplate_location */
    }
    /** @docid dxResponsiveBox */
    export class dxResponsiveBox extends CollectionWidget {
        constructor(element: JQuery, options?: dxBoxOptions);
        constructor(element: Element, options?: dxBoxOptions);
    }
    export interface dxAutocompleteOptions extends dxDropDownListOptions {
        /** @docid_ignore dxAutocompleteOptions_searchEnabled */
        /** @docid_ignore dxAutocompleteOptions_noDataText */
        /** @docid_ignore dxAutocompleteOptions_displayExpr */
        /** @docid dxAutocompleteOptions_value */
        value?: string;
        /** @docid dxAutocompleteOptions_minSearchLength */
        minSearchLength?: number;
        /** @docid dxAutocompleteOptions_maxItemCount */
        maxItemCount?: number;
        /** @docid dxDropDownListOptions_selectedItem */
        selectedItem?: Object;
    }
    /** @docid dxAutocomplete */
    export class dxAutocomplete extends dxDropDownList {
        constructor(element: JQuery, options?: dxAutocompleteOptions);
        constructor(element: Element, options?: dxAutocompleteOptions);
        /** @docid_ignore dxAutocomplete_Default_Item_Template */
        /** @docid_ignore dxAutocompleteOptions_pagingEnabled */
        /** @docid dxAutocompletemethods_open */
        open(): void;
        /** @docid dxAutocompletemethods_close */
        close(): void;
    }
    export interface dxAccordionOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxAccordionItemTemplate_title */
        /** @docid dxAccordionOptions_animationDuration */
        animationDuration?: number;
        /** @docid dxAccordionOptions_height */
        height?: any;
        /** @docid dxAccordionOptions_collapsible */
        collapsible?: boolean;
        /** @docid dxAccordionOptions_multiple */
        multiple?: boolean;
        /** @docid dxAccordionOptions_itemTemplate */
        itemTemplate?: any;
        /** @docid dxAccordionOptions_onItemTitleClick */
        onItemTitleClick?: any;
        /** @docid dxAccordionOptions_onItemTitleHold */
        onItemTitleHold?: Function;
        /** @docid dxAccordionOptions_itemTitleTemplate */
        itemTitleTemplate?: any;
        /** @docid dxAccordionOptions_selectedIndex */
        selectedIndex?: number;
    }
    /** @docid dxAccordion */
    export class dxAccordion extends CollectionWidget {
        constructor(element: JQuery, options?: dxAccordionOptions);
        constructor(element: Element, options?: dxAccordionOptions);
        /** @docid_ignore dxAccordionItemTemplate_icon */
        /** @docid_ignore dxAccordionItemTemplate_iconSrc */
        /** @docid_ignore dxAccordionEvents_ItemTitleClick */
        /** @docid_ignore dxAccordionEvents_ItemTitleHold */
        /** @docid_ignore dxAccordionOptions_itemClickAction */
        /** @docid_ignore dxAccordionOptions_contentReadyAction */
        /** @docid_ignore dxAccordionOptions_itemHoldAction */
        /** @docid_ignore dxAccordionOptions_itemRender */
        /** @docid_ignore dxAccordionOptions_itemRenderedAction */
        /** @docid_ignore dxAccordionOptions_itemSelectAction */
        /** @docid dxAccordionMethods_collapseItem */
        collapseItem(index: number): JQueryPromise<dxAccordion>;
        /** @docid dxAccordionMethods_expandItem */
        expandItem(index: number): JQueryPromise<dxAccordion>;
    }
    export interface dxFileUploaderOptions extends EditorOptions {
        /** @docid dxFileUploaderOptions_value */
        value?: File;
        /** @docid dxFileUploaderOptions_values */
        values?: Array<File>;
        /** @docid dxFileUploaderOptions_buttonText */
        buttonText?: string;
        /** @docid dxFileUploaderOptions_selectButtonText */
        selectButtonText?: string;
        /** @docid dxFileUploaderOptions_uploadButtonText */
        uploadButtonText?: string;
        /** @docid dxFileUploaderOptions_labelText */
        labelText?: string;
        /** @docid dxFileUploaderOptions_name */
        name?: string;
        /** @docid dxFileUploaderOptions_multiple */
        multiple?: boolean;
        /** @docid dxFileUploaderOptions_accept */
        accept?: string;
        /** @docid dxFileUploaderOptions_uploadUrl */
        uploadUrl?: string;
        /** @docid dxFileUploaderOptions_allowCanceling */
        allowCanceling?: boolean;
        /** @docid dxFileUploaderOptions_showFileList */
        showFileList?: boolean;
        /** @docid dxFileUploaderOptions_progress */
        progress?: number;
        /** @docid dxFileUploaderOptions_readyToUploadMessage */
        readyToUploadMessage?: string;
        /** @docid dxFileUploaderOptions_uploadedMessage */
        uploadedMessage?: string;
        /** @docid dxFileUploaderOptions_uploadFailedMessage */
        uploadFailedMessage?: string;
        /** @docid dxFileUploaderOptions_uploadMode */
        uploadMode?: string;
    }
    /** @docid dxFileUploader */
    export class dxFileUploader extends Editor {
        constructor(element: JQuery, options?: dxFileUploaderOptions);
        constructor(element: Element, options?: dxFileUploaderOptions);
        /** @docid_ignore dxFileUploaderOptions_valueChangeAction */
    }
    export interface dxTrackBarOptions extends EditorOptions {
        /** @docid dxTrackBarOptions_min */
        min?: number;
        /** @docid dxTrackBarOptions_max */
        max?: number;
        /** @docid dxTrackBarOptions_value */
        value?: number;
    }
    /** @docid dxTrackBar */
    export class dxTrackBar extends Editor {
        constructor(element: JQuery, options?: dxTrackBarOptions);
        constructor(element: Element, options?: dxTrackBarOptions);
    }
    export interface dxProgressBarOptions extends dxTrackBarOptions {
        /** @docid_ignore dxProgressBarOptions_valueChangeAction */
        /** @docid_ignore dxProgressBarOptions_isValid */
        /** @docid_ignore dxProgressBarOptions_validationError */
        /** @docid_ignore dxProgressBarOptions_validationMessageMode */
        /** @docid_ignore dxProgressBarOptions_activeStateEnabled */
        /** @docid dxProgressBarOptions_statusFormat */
        statusFormat?: any;
        /** @docid dxProgressBarOptions_showStatus */
        showStatus?: boolean;
        /** @docid dxProgressBarOptions_onComplete */
        onComplete?: Function;
    }
    /** @docid dxProgressBar */
    export class dxProgressBar extends dxTrackBar {
        constructor(element: JQuery, options?: dxProgressBarOptions);
        constructor(element: Element, options?: dxProgressBarOptions);
    }
    export interface dxSliderOptions extends dxTrackBarOptions {
        /** @docid dxSliderOptions_step */
        step?: number;
        /** @docid dxSliderOptions_value */
        value?: number;
        /** @docid dxSliderOptions_showRange */
        showRange?: boolean;
        /** @docid dxSliderOptions_keyStep */
        keyStep?: number;
        /** @docid dxSliderOptions_tooltip */
        tooltip?: {
            /** @docid dxSliderOptions_tooltip_enabled */
            enabled?: boolean;
            /** @docid dxSliderOptions_tooltip_format */
            format?: any;
            /** @docid dxSliderOptions_tooltip_position */
            position?: string;
            /** @docid dxSliderOptions_tooltip_showMode */
            showMode?: string;
        };
        /** @docid dxSliderOptions_label */
        label?: {
            /** @docid dxSliderOptions_label_visible */
            visible?: boolean;
            /** @docid dxSliderOptions_label_position */
            position?: string;
            /** @docid dxSliderOptions_label_format */
            format?: any;
        };
    }
    /** @docid dxSlider */
    export class dxSlider extends dxTrackBar {
        constructor(element: JQuery, options?: dxSliderOptions);
        constructor(element: Element, options?: dxSliderOptions);
    }
    export interface dxRangeSliderOptions extends dxSliderOptions {
        /** @docid_ignore dxRangeSliderOptions_value */
        /** @docid_ignore dxRangeSliderOptions_onValueChanged */
        /** @docid dxRangeSliderOptions_start */
        start?: number;
        /** @docid dxRangeSliderOptions_end */
        end?: number;
    }
    /** @docid dxRangeSlider */
    export class dxRangeSlider extends dxSlider {
        constructor(element: JQuery, options?: dxRangeSliderOptions);
        constructor(element: Element, options?: dxRangeSliderOptions);
    }
    /** @docid_ignore dxDeferRendering */
    /** @docid_ignore dxDeferRenderingOptions_showLoadIndicator */
    /** @docid_ignore dxDeferRenderingOptions_hiddenUntilRendered */
    /** @docid_ignore dxDeferRenderingOptions_renderWhen */
    /** @docid_ignore dxDeferRenderingOptions_animation */
    /** @docid_ignore dxDeferRenderingOptions_staggerItemSelector */
    /** @docid_ignore dxDeferRenderingOptions_onRendered */
    /** @docid_ignore dxDeferRenderingOptions_onShown */
    export interface dxTileViewOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxTileViewOptions_selectedIndex */
        /** @docid_ignore dxTileViewOptions_selectedItem */
        /** @docid_ignore dxTileViewOptions_selectedItems */
        /** @docid_ignore dxTileViewOptions_onSelectionChanged */
        /** @docid dxTileViewOptions_activeStateEnabled */
        activeStateEnabled?: boolean;
        /** @docid dxTileViewOptions_baseItemHeight */
        baseItemHeight?: number;
        /** @docid dxTileViewOptions_baseItemwidth */
        baseItemWidth?: number;
        /** @docid dxTileViewOptions_height */
        height?: any;
        /** @docid dxTileViewOptions_itemMargin */
        itemMargin?: number;
        /** @docid dxTileViewOptions_showScrollbar */
        showScrollbar?: boolean;
    }
    /** @docid dxtileview */
    export class dxTileView extends CollectionWidget {
        constructor(element: JQuery, options?: dxTileViewOptions);
        constructor(element: Element, options?: dxTileViewOptions);
        /** @docid_ignore dxTileViewItemTemplate_heightRatio */
        /** @docid_ignore dxTileViewItemTemplate_widthRatio */
        /** @docid dxtileviewmethods_scrollPosition */
        scrollPosition(): number;
    }
    export interface dxSwitchOptions extends EditorOptions {
        /** @docid dxSwitchOptions_offText */
        offText?: string;
        /** @docid dxSwitchOptions_onText */
        onText?: string;
        /** @docid dxSwitchOptions_value */
        value?: boolean;
    }
    /** @docid dxSwitch */
    export class dxSwitch extends Editor {
        constructor(element: JQuery, options?: dxSwitchOptions);
        constructor(element: Element, options?: dxSwitchOptions);
    }
    export interface dxSlideOutViewOptions extends WidgetOptions {
        /** @docid_ignore dxSlideOutViewOptions_contentOffset */
        /** @docid dxSlideOutViewOptions_menuVisible */
        menuVisible?: boolean;
        /** @docid dxSlideOutViewOptions_swipeEnabled */
        swipeEnabled?: boolean;
        /** @docid dxSlideOutViewOptions_menuTemplate */
        menuTemplate?: any;
        /** @docid dxSlideOutViewOptions_contentTemplate */
        contentTemplate?: any;
    }
    /** @docid dxSlideOutView */
    export class dxSlideOutView extends Widget {
        constructor(element: JQuery, options?: dxSlideOutViewOptions);
        constructor(element: Element, options?: dxSlideOutViewOptions);
        /** @docid dxSlideOutViewMethods_menuContent */
        menuContent(): JQuery;
        /** @docid dxSlideOutViewMethods_content */
        content(): JQuery;
        /** @docid dxSlideOutViewMethods_showMenu */
        showMenu(): JQueryPromise<void>;
        /** @docid dxSlideOutViewMethods_hideMenu */
        hideMenu(): JQueryPromise<void>;
        /** @docid dxSlideOutViewMethods_toggleMenuVisibility */
        toggleMenuVisibility(): JQueryPromise<void>;
    }
    export interface dxSlideOutOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxSlideOutOptions_selectedItems */
        /** @docid dxSlideOutOptions_activeStateEnabled */
        activeStateEnabled?: boolean;
        /** @docid dxSlideOutOptions_menuGrouped */
        menuGrouped?: boolean;
        /** @docid dxSlideOutOptions_menuGroupRender */
        menuGroupRender?: any;
        /** @docid dxSlideOutOptions_menuGroupTemplate */
        menuGroupTemplate?: any;
        /** @docid dxSlideOutOptions_menuItemRender */
        menuItemRender?: any;
        /** @docid dxSlideOutOptions_menuItemTemplate */
        menuItemTemplate?: any;
        /** @docid dxSlideOutOptions_onMenuGroupRendered */
        onMenuGroupRendered?: Function;
        /** @docid dxSlideOutOptions_onMenuItemRendered */
        onMenuItemRendered?: Function;
        /** @docid dxSlideOutOptions_menuVisible */
        menuVisible?: boolean;
        /** @docid dxSlideOutOptions_swipeEnabled */
        swipeEnabled?: boolean;
        /** @docid dxSlideOutOptions_contentTemplate */
        contentTemplate?: any;
    }
    /** @docid dxSlideout */
    export class dxSlideOut extends CollectionWidget {
        constructor(element: JQuery, options?: dxSlideOutOptions);
        constructor(element: Element, options?: dxSlideOutOptions);
        /** @docid_ignore dxSlideOutItemTemplate_menutemplate */
        /** @docid dxslideoutmethods_hide */
        hideMenu(): JQueryPromise<void>;
        /** @docid dxslideoutmethods_show */
        showMenu(): JQueryPromise<void>;
        /** @docid dxslideoutmethods_toggleMenuVisibility */
        toggleMenuVisibility(showing: boolean): JQueryPromise<void>;
    }
    export interface dxPivotOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxPivotOptions_noDataText */
        /** @docid_ignore dxPivotOptions_selectedItems */
        /** @docid dxPivotOptions_selectedIndex */
        selectedIndex?: number;
        /** @docid dxPivotOptions_swipeEnabled */
        swipeEnabled?: boolean;
        /** @docid dxPivotOptions_contentTemplate */
        contentTemplate?: any;
    }
    /** @docid dxPivot */
    export class dxPivot extends CollectionWidget {
        constructor(element: JQuery, options?: dxPivotOptions);
        constructor(element: Element, options?: dxPivotOptions);
        /** @docid_ignore dxPivotItemTemplate_title */
        /** @docid_ignore dxPivotItemTemplate_visible */
    }
    export interface dxPanoramaOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxPanoramaOptions_noDataText */
        /** @docid_ignore dxPanoramaOptions_selectedItems */
        /** @docid dxPanoramaOptions_backgroundImage */
        backgroundImage?: {
            /** @docid dxPanoramaOptions_backgroundImage_height */
            height?: number;
            /** @docid dxPanoramaOptions_backgroundImage_url */
            url?: string;
            /** @docid dxPanoramaOptions_backgroundImage_width */
            width?: number;
        };
        /** @docid dxPanoramaOptions_selectedIndex */
        selectedIndex?: number;
        /** @docid dxPanoramaOptions_title */
        title?: string;
    }
    /** @docid dxPanorama */
    export class dxPanorama extends CollectionWidget {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
        /** @docid_ignore dxPanoramaItemTemplate_title */
        /** @docid_ignore dxPanoramaItemTemplate_visible */
    }
    export interface dxDropDownMenuOptions extends WidgetOptions {
        /** @docid_ignore dxDropDownMenuOptions_contentReadyAction */
        /** @docid_ignore dxDropDownMenuOptions_onContentReady */
        /** @docid dxDropDownMenuOptions_onButtonClick */
        onButtonClick?: any;
        /** @docid dxDropDownMenuOptions_buttonClickAction */
        buttonClickAction?: any;
        /** @docid dxDropDownMenuOptions_buttonIcon */
        buttonIcon?: string;
        /** @docid dxDropDownMenuOptions_buttonIconSrc */
        buttonIconSrc?: string;
        /** @docid dxDropDownMenuOptions_buttontext */
        buttonText?: string;
        /** @docid dxDropDownMenuOptions_dataSource */
        dataSource?: any;
        /** @docid dxDropDownMenuOptions_onItemClick */
        onItemClick?: any;
        /** @docid dxDropDownMenuOptions_itemClickAction */
        itemClickAction?: any;
        /** @docid dxDropDownMenuOptions_itemRender */
        itemRender?: any;
        /** @docid dxDropDownMenuOptions_items */
        items?: Array<any>;
        /** @docid dxDropDownMenuOptions_itemTemplate */
        itemTemplate?: any;
        /** @docid dxDropDownMenuOptions_usePopover */
        usePopover?: boolean;
        /** @docid dxDropDownMenuOptions_popupWidth */
        popupWidth?: any;
        /** @docid dxDropDownMenuOptions_popupHeight */
        popupHeight?: any;
        /** @docid dxDropDownMenuOptions_opened */
        opened?: boolean;
        /** @docid dxDropDownMenuOptions_hoverStateEnabled */
        hoverStateEnabled?: boolean;
    }
    /** @docid dxdropdownmenu */
    export class dxDropDownMenu extends Widget {
        constructor(element: JQuery, options?: dxDropDownEditorOptions);
        constructor(element: Element, options?: dxDropDownEditorOptions);
        /** @docid dxdropdownmenu_Default_Item_Template */
        /** @docid dxDropDownMenuMethods_open */
        open(): void;
        /** @docid dxDropDownMenuMethods_close */
        close(): void;
    }
    export interface dxActionSheetOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxActionSheetOptions_activeStateEnabled */
        /** @docid_ignore dxActionSheetOptions_selectedIndex */
        /** @docid_ignore dxActionSheetOptions_selectedItem */
        /** @docid_ignore dxActionSheetOptions_selectedItems */
        /** @docid_ignore dxActionSheetOptions_noDataText */
        /** @docid_ignore dxActionSheetOptions_onSelectionChanged */
        /** @docid dxActionSheetOptions_cancelClickAction */
        cancelClickAction?: any;
        /** @docid dxActionSheetOptions_onCancelClick */
        onCancelClick?: any;
        /** @docid dxActionSheetOptions_cancelText */
        cancelText?: string;
        /** @docid dxActionSheetOptions_showCancelButton */
        showCancelButton?: boolean;
        /** @docid dxActionSheetOptions_showTitle */
        showTitle?: boolean;
        /** @docid dxActionSheetOptions_target */
        target?: any;
        /** @docid dxActionSheetOptions_title */
        title?: string;
        /** @docid dxActionSheetOptions_usePopover */
        usePopover?: boolean;
        /** @docid dxActionSheetOptions_visible */
        visible?: boolean;
    }
    /** @docid dxactionsheet */
    export class dxActionSheet extends CollectionWidget {
        constructor(element: JQuery, options?: dxActionSheetOptions);
        constructor(element: Element, options?: dxActionSheetOptions);
        /** @docid_ignore dxActionSheetItemTemplate_clickAction */
        /** @docid_ignore dxActionSheetItemTemplate_html */
        /** @docid_ignore dxActionSheetItemtemplate_type */
        /** @docid_ignore dxActionSheetItemTemplate_visible */
        /** @docid_ignore dxActionSheetItemTemplate_onClick */
        /** @docid dxactionsheetmethods_hide */
        hide(): JQueryPromise<dxActionSheet>;
        /** @docid dxactionsheetmethods_show */
        show(): JQueryPromise<dxActionSheet>;
        /** @docid dxactionsheetmethods_toggle */
        toggle(showing: boolean): JQueryPromise<dxActionSheet>;
    }
    export interface dxSchedulerOptions extends WidgetOptions {
        /** @docid_ignore dxSchedulerItemTemplate_text */
        /** @docid_ignore dxSchedulerItemTemplate_startDate */
        /** @docid_ignore dxSchedulerItemTemplate_endDate */
        /** @docid_ignore dxSchedulerItemTemplate_description */
        /** @docid_ignore dxSchedulerItemTemplate_recurrenceRule */
        /** @docid_ignore dxSchedulerItemTemplate_allDay */
        /** @docid_ignore dxSchedulerItemTemplate_html */
        /** @docid_ignore dxSchedulerItemTemplate_disabled */
        /** @docid_ignore dxSchedulerItemTemplate_visible */
        /** @docid_ignore dxSchedulerItemTemplate_template */
        /** @docid dxSchedulerOptions_currentDate */
        currentDate?: Date;
        /** @docid dxSchedulerOptions_currentView */
        currentView?: string;
        /** @docid dxSchedulerOptions_dataSource */
        dataSource?: any;
        /** @docid dxSchedulerOptions_firstDayOfWeek */
        firstDayOfWeek?: number;
        /** @docid dxSchedulerOptions_appointmentTemplate */
        appointmentTemplate?: any;
        /** @docid dxSchedulerOptions_views */
        views?: Array<string>;
        /** @docid dxSchedulerOptions_groups */
        groups?: Array<string>;
        /** @docid dxSchedulerOptions_startDayHour */
        startDayHour?: number;
        /** @docid dxSchedulerOptions_endDayHour */
        endDayHour?: number;
        /** @docid dxSchedulerOptions_resources */
        resources?: Array<{
            /** @docid dxSchedulerOptions_resources_allowMultiple */
            allowMultiple?: boolean;
            /** @docid dxSchedulerOptions_resources_mainColor */
            mainColor?: boolean;
            /** @docid dxSchedulerOptions_resources_dataSource */
            dataSource?: any;
            /** @docid dxSchedulerOptions_resources_displayExpr */
            displayExpr?: any;
            /** @docid dxSchedulerOptions_resources_valueExpr */
            valueExpr?: any;
            /** @docid dxSchedulerOptions_resources_field */
            field?: string;
            /** @docid dxSchedulerOptions_resources_label */
            label?: string;
        }>;
        /** @docid dxSchedulerOptions_onAppointmentAdding */
        onAppointmentAdding?: Function;
        /** @docid dxSchedulerOptions_onAppointmentAdded */
        onAppointmentAdded?: Function;
        /** @docid dxSchedulerOptions_onAppointmentUpdating */
        onAppointmentUpdating?: Function;
        /** @docid dxSchedulerOptions_onAppointmentUpdated */
        onAppointmentUpdated?: Function;
        /** @docid dxSchedulerOptions_onAppointmentDeleting */
        onAppointmentDeleting?: Function;
        /** @docid dxSchedulerOptions_onAppointmentDeleted */
        onAppointmentDeleted?: Function;
        /** @docid dxSchedulerOptions_onAppointmentRendered */
        onAppointmentRendered?: Function;
    }
    /** @docid dxScheduler */
    export class dxScheduler extends Widget {
        constructor(element: JQuery, options?: dxSchedulerOptions);
        constructor(element: Element, options?: dxSchedulerOptions);
        /** @docid dxSchedulerMethods_addAppointment */
        addAppointment(appointment: Object): void;
        /** @docid dxSchedulerMethods_updateAppointment */
        updateAppointment(target: Object, appointment: Object): void;
        /** @docid dxSchedulerMethods_deleteAppointment */
        deleteAppointment(appointment: Object): void;
    }
    export interface dxColorBoxOptions extends dxDropDownEditorOptions {
        /** @docid_ignore dxColorBoxOptions_maxLength */
        /** @docid_ignore dxColorBoxOptions_showClearButton */
        /** @docid_ignore dxColorBoxOptions_mode */
        /** @docid dxColorBoxOptions_applyButtonText */
        applyButtonText?: string;
        /** @docid dxColorBoxOptions_applyValueMode */
        applyValueMode?: string;
        /** @docid dxColorBoxOptions_cancelButtonText */
        cancelButtonText?: string;
        /** @docid dxColorBoxOptions_editAlphaChannel */
        editAlphaChannel?: boolean;
        /** @docid dxColorBoxOptions_keyStep */
        keyStep?: number;
    }
    /** @docid dxColorBox */
    export class dxColorBox extends dxDropDownEditor {
        constructor(element: JQuery, options?: dxColorBoxOptions);
        constructor(element: Element, options?: dxColorBoxOptions);
    }
    export interface dxColorPickerOptions extends dxColorBoxOptions { }
    /** @docid dxColorPicker */
    export class dxColorPicker extends dxColorBox {
        constructor(element: JQuery, options?: dxColorPickerOptions);
        constructor(element: Element, options?: dxColorPickerOptions);
    }
    export interface dxTreeViewOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxTreeViewOptions_contentReadyAction */
        /** @docid_ignore dxTreeViewOptions_onItemReordered */
        /** @docid_ignore dxTreeViewOptions_itemClickAction */
        /** @docid_ignore dxTreeViewOptions_itemHoldAction */
        /** @docid_ignore dxTreeViewOptions_itemRender */
        /** @docid_ignore dxTreeViewOptions_itemRenderedAction */
        /** @docid_ignore dxTreeViewOptions_itemSelectAction */
        /** @docid_ignore dxTreeViewOptions_selectedItems */
        /** @docid_ignore dxTreeViewOptions_selectedItem */
        /** @docid_ignore dxTreeViewOptions_selectedIndex */
        /** @docid_ignore dxTreeViewItemTemplate_icon */
        /** @docid_ignore dxTreeViewItemTemplate_iconSrc */
        /** @docid_ignore dxTreeViewItemTemplate_selected */
        /** @docid_ignore dxTreeViewItemTemplate_expanded */
        /** @docid_ignore dxTreeViewItemTemplate_items */
        /** @docid_ignore dxTreeViewItemTemplate_parentId */
        /** @docid_ignore dxTreeViewItemTemplate_hasItems */
        /** @docid dxTreeViewOptions_animationEnabled */
        animationEnabled?: boolean;
        /** @docid dxTreeViewOptions_dataStructure */
        dataStructure?: string;
        /** @docid dxTreeViewOptions_expandAllEnabled */
        expandAllEnabled?: boolean;
        /** @docid dxTreeViewOptions_expandedItems */
        expandedItems?: Array<any>;
        /** @docid dxTreeViewOptions_showCheckBoxes */
        showCheckBoxes?: boolean;
        /** @docid dxTreeViewOptions_selectNodesRecursive */
        selectNodesRecursive?: boolean;
        /** @docid dxTreeViewOptions_selectAllEnabled */
        selectAllEnabled?: boolean;
        /** @docid dxTreeViewOptions_selectAllText */
        selectAllText?: string;
        /** @docid dxTreeViewOptions_keyExpr */
        keyExpr?: any;
        /** @docid dxTreeViewOptions_displayExpr */
        displayExpr?: any;
        /** @docid dxTreeViewOptions_selectedExpr */
        selectedExpr?: any;
        /** @docid dxTreeViewOptions_expandedExpr */
        expandedExpr?: any;
        /** @docid dxTreeViewOptions_itemsExpr */
        itemsExpr?: any;
        /** @docid dxTreeViewOptions_parentIdExpr */
        parentIdExpr?: any;
        /** @docid dxTreeViewOptions_disabledExpr */
        disabledExpr?: any;
        /** @docid dxTreeViewOptions_hasItemsExpr */
        hasItemsExpr?: any;
        /** @docid dxTreeViewOptions_virtualModeEnabled */
        virtualModeEnabled?: boolean;
        /** @docid dxTreeViewOptions_rootValue */
        rootValue?: any;
        /** @docid dxTreeViewOptions_scrollDirection */
        scrollDirection?: string;
        /** @docid dxTreeViewOptions_onItemSelected */
        onItemSelected?: Function;
        /** @docid dxTreeViewOptions_onItemExpanded */
        onItemExpanded?: Function;
        /** @docid dxTreeViewOptions_onItemCollapsed */
        onItemCollapsed?: Function;
    }
    /** @docid dxTreeView */
    export class dxTreeView extends CollectionWidget {
        constructor(element: JQuery, options?: dxTreeViewOptions);
        constructor(element: Element, options?: dxTreeViewOptions);
        /** @docid dxtreeViewmethods_updateDimensions */
        updateDimensions(): JQueryPromise<void>;
        /** @docid dxtreeViewmethods_selectItem */
        selectItem(itemElement: any): void;
        /** @docid dxtreeViewmethods_unselectItem */
        unselectItem(itemElement: any): void;
        /** @docid dxtreeViewmethods_expandItem */
        expandItem(itemElement: any): void;
        /** @docid dxtreeViewmethods_collapseItem */
        collapseItem(itemElement: any): void;
        /** @docid dxtreeViewmethods_getNodes */
        getNodes(): Array<Object>;
        /** @docid dxtreeViewmethods_selectAll */
        selectAll(): void;
        /** @docid dxtreeViewmethods_unselectAll */
        unselectAll(): void;
    }
    export interface dxMenuBaseOptions extends CollectionWidgetOptions {
        /** @docid_ignore dxMenuBaseOptions_itemHoldTimeout */
        /** @docid_ignore dxMenuBaseOptions_onItemHold */
        /** @docid_ignore dxMenuBaseOptions_noDataText */
        /** @docid_ignore dxMenuBaseOptions_selectedIndex */
        /** @docid_ignore dxMenuBaseItemTemplate_beginGroup */
        /** @docid dxMenuBaseOptions_animation */
        animation?: fx.AnimationOptions;
        /** @docid dxMenuBaseOptions_activeStateEnabled */
        activeStateEnabled?: boolean;
        /** @docid dxMenuBaseOptions_cssClass */
        cssClass?: string;
        /** @docid dxMenuBaseOptions_items */
        items?: Array<any>;
        /** @docid dxMenuBaseOptions_selectionByClick */
        selectionByClick?: boolean;
        /** @docid dxMenuBaseOptions_selectionMode */
        selectionMode?: string;
        /** @docid dxMenuBaseOptions_showSubmenuMode */
        showSubmenuMode?: {
            /** @docid dxMenuBaseOptions_showSubmenuMode_name */
            name?: string;
            /** @docid dxMenuBaseOptions_showSubmenuMode_delay */
            delay?: {
                /** @docid dxMenuBaseOptions_showSubmenuMode_delay_show */
                show?: number;
                /** @docid dxMenuBaseOptions_showSubmenuMode_delay_hide */
                hide?: number;
            };
        };
        /** @docid dxMenuBaseOptions_hoverStateEnabled */
        hoverStateEnabled?: boolean;
    }
    /** @docid dxMenuBase */
    export class dxMenuBase extends CollectionWidget {
        constructor(element: JQuery, options?: dxMenuBaseOptions);
        constructor(element: Element, options?: dxMenuBaseOptions);
        /** @docid dxMenuBaseMethods_selectItem */
        selectItem(itemElement: any): void;
        /** @docid dxMenuBaseMethods_unselectItem */
        unselectItem(itemElement: any): void;
    }
    export interface dxMenuOptions extends dxMenuBaseOptions {
        /** @docid_ignore dxMenuOptions_allowSelection */
        /** @docid_ignore dxMenuOptions_onItemReordered */
        /** @docid_ignore dxMenuOptions_onSelectionChange */
        /** @docid_ignore dxMenuOptions_selectedItems */
        /** @docid dxMenuOptions_hideSubmenuOnMouseLeave */
        hideSubmenuOnMouseLeave?: boolean;
        /** @docid dxMenuOptions_orientation */
        orientation?: string;
        /** @docid dxMenuOptions_showFirstSubmenuMode */
        showFirstSubmenuMode?: {
            /** @docid dxMenuOptions_showFirstSubmenuMode_name */
            name?: string;
            /** @docid dxMenuOptions_showFirstSubmenuMode_delay */
            delay?: {
                /** @docid dxMenuOptions_showFirstSubmenuMode_delay_show */
                show?: number;
                /** @docid dxMenuOptions_showFirstSubmenuMode_delay_hide */
                hide?: number;
            };
        };
        /** @docid dxMenuOptions_submenuDirection */
        submenuDirection?: string;
        /** @docid dxMenuOptions_onSubmenuHidden */
        onSubmenuHidden?: Function;
        /** @docid dxMenuOptions_submenuHiddenAction */
        submenuHiddenAction?: Function;
        /** @docid dxMenuOptions_onSubmenuHiding */
        onSubmenuHiding?: Function;
        /** @docid dxMenuOptions_submenuHidingAction */
        submenuHidingAction?: Function;
        /** @docid dxMenuOptions_onSubmenuShowing */
        onSubmenuShowing?: Function;
        /** @docid dxMenuOptions_submenuShowingAction */
        submenuShowingAction?: Function;
        /** @docid dxMenuOptions_onSubmenuShown */
        onSubmenuShown?: Function;
        /** @docid dxMenuOptions_submenuShownAction */
        submenuShownAction?: Function;
    }
    /** @docid dxMenu */
    export class dxMenu extends dxMenuBase {
        constructor(element: JQuery, options?: dxMenuOptions);
        constructor(element: Element, options?: dxMenuOptions);
        /** @docid_ignore dxMenuItemTemplate_disabled */
        /** @docid_ignore dxMenuItemTemplate_html */
        /** @docid_ignore dxMenuItemTemplate_icon */
        /** @docid_ignore dxMenuItemTemplate_iconSrc */
        /** @docid_ignore dxMenuItemTemplate_items */
        /** @docid_ignore dxMenuItemTemplate_selectable */
        /** @docid_ignore dxMenuItemTemplate_selected */
        /** @docid_ignore dxMenuItemTemplate_text */
        /** @docid_ignore dxMenuItemTemplate_visible */
        /** @docid_ignore dxMenuItemTemplate_closeMenuOnClick */
    }
    export interface dxContextMenuOptions extends dxMenuBaseOptions {
        /** @docid_ignore dxContextMenuOptions_itemHoldAction */
        /** @docid_ignore dxContextMenuOptions_onItemReordered */
        /** @docid dxContextMenuOptions_alternativeInvocationMode */
        alternativeInvocationMode?: {
            /** @docid dxContextMenuOptions_alternativeInvocationMode_enabled */
            enabled?: Boolean;
            /** @docid dxContextMenuOptions_alternativeInvocationMode_invokingElement */
            invokingElement?: any;
        };
        /** @docid dxContextMenuOptions_onHidden */
        onHidden?: Function;
        /** @docid dxContextMenuOptions_onHiding */
        onHiding?: Function;
        /** @docid dxContextMenuOptions_onPositioning */
        onPositioning?: Function;
        /** @docid dxContextMenuOptions_onShowing */
        onShowing?: Function;
        /** @docid dxContextMenuOptions_onShown */
        onShown?: Function;
        /** @docid dxContextMenuOptions_position */
        position?: PositionOptions;
        /** @docid dxContextMenuOptions_submenuDirection */
        submenuDirection?: string;
        /** @docid dxContextMenuOptions_target */
        target?: any;
        /** @docid dxContextMenuOptions_visible */
        visible?: boolean;
    }
    /** @docid dxContextMenu */
    export class dxContextMenu extends dxMenuBase {
        constructor(element: JQuery, options?: dxContextMenuOptions);
        constructor(element: Element, options?: dxContextMenuOptions);
        /** @docid dxContextMenuMethods_toggle */
        toggle(showing: boolean): JQueryPromise<void>;
        /** @docid dxContextMenuMethods_show */
        show(): JQueryPromise<void>;
        /** @docid dxContextMenuMethods_hide */
        hide(): JQueryPromise<void>;
        /** @docid_ignore dxContextMenu_Default_Item_Template */
    }
    export interface dxRemoteOperations {
        /** @docid dxDataGridOptions_remoteOperations_filtering */
        filtering?: boolean;
        /** @docid dxDataGridOptions_remoteOperations_paging */
        paging?: boolean;
        /** @docid dxDataGridOptions_remoteOperations_sorting */
        sorting?: boolean;
    }
    export interface dxDataGridColumn {
        /** @docid_ignore dxDataGridOptions_columns_resized*/
        /** @docid_ignore dxDataGridOptions_columns_grouped*/
        /** @docid dxDataGridOptions_columns_alignment */
        alignment?: string;
        /** @docid dxDataGridOptions_columns_allowEditing */
        allowEditing?: boolean;
        /** @docid dxDataGridOptions_columns_allowFiltering */
        allowFiltering?: boolean;
        /** @docid dxDataGridOptions_columns_allowFixing */
        allowFixing?: boolean;
        /** @docid dxDataGridOptions_columns_allowSearch */
        allowSearch?: boolean;
        /** @docid dxDataGridOptions_columns_allowGrouping */
        allowGrouping?: boolean;
        /** @docid dxDataGridOptions_columns_allowHiding */
        allowHiding?: boolean;
        /** @docid dxDataGridOptions_columns_allowReordering */
        allowReordering?: boolean;
        /** @docid dxDataGridOptions_columns_allowResizing */
        allowResizing?: boolean;
        /** @docid dxDataGridOptions_columns_allowSorting */
        allowSorting?: boolean;
        /** @docid dxDataGridOptions_columns_autoExpandGroup */
        autoExpandGroup?: boolean;
        /** @docid dxDataGridOptions_columns_calculateCellValue */
        calculateCellValue?: (rowData: Object) => string;
        /** @docid dxDataGridOptions_columns_calculateFilterExpression */
        calculateFilterExpression?: (filterValue: any, selectedFilterOperation: string) => Array<any>;
        /** @docid dxDataGridOptions_columns_caption */
        caption?: string;
        /** @docid dxDataGridOptions_columns_cellTemplate */
        cellTemplate?: any;
        /** @docid dxDataGridOptions_columns_cssClass */
        cssClass?: string;
        /** @docid dxDataGridOptions_columns_calculateGroupValue */
        calculateGroupValue?: any;
        /** @docid dxDataGridOptions_columns_calculateSortValue */
        calculateSortValue?: any;
        /** @docid dxDataGridOptions_columns_customizeText */
        customizeText?: (cellInfo: { value: any; valueText: string }) => string;
        /** @docid dxDataGridOptions_columns_dataField */
        dataField?: string;
        /** @docid dxDataGridOptions_columns_dataType */
        dataType?: string;
        /** @docid dxDataGridOptions_columns_editCellTemplate */
        editCellTemplate?: any;
        /** @docid dxDataGridOptions_columns_encodeHtml */
        encodeHtml?: boolean;
        /** @docid dxDataGridOptions_columns_falseText */
        falseText?: string;
        /** @docid dxDataGridOptions_columns_filterOperations */
        filterOperations?: Array<any>;
        /** @docid dxDataGridOptions_columns_filterValue */
        filterValue?: any;
        /** @docid dxDataGridOptions_columns_filterValues */
        filterValues?: Array<any>;
        /** @docid dxDataGridOptions_columns_filterType */
        filterType?: string;
        /** @docid dxDataGridOptions_columns_fixed */
        fixed?: boolean;
        /** @docid dxDataGridOptions_columns_fixedPosition */
        fixedPosition?: string;
        /** @docid dxDataGridOptions_columns_format */
        format?: string;
        /** @docid dxDataGridOptions_columns_groupCellTemplate */
        groupCellTemplate?: any;
        /** @docid dxDataGridOptions_columns_groupIndex */
        groupIndex?: number;
        /** @docid dxDataGridOptions_columns_headerCellTemplate */
        headerCellTemplate?: any;
        /** @docid dxDataGridOptions_columns_lookup */
        lookup?: {
            /** @docid dxDataGridOptions_columns_lookup_allowClearing */
            allowClearing?: boolean;
            /** @docid dxDataGridOptions_columns_lookup_dataSource */
            dataSource?: any;
            /** @docid dxDataGridOptions_columns_lookup_displayExpr */
            displayExpr?: any;
            /** @docid dxDataGridOptions_columns_lookup_valueExpr */
            valueExpr?: string;
        };
        /** @docid dxDataGridOptions_columns_precision */
        precision?: number;
        /** @docid dxDataGridOptions_columns_selectedFilterOperation */
        selectedFilterOperation?: string;
        /** @docid dxDataGridOptions_columns_showEditorAlways */
        showEditorAlways?: boolean;
        /** @docid dxDataGridOptions_columns_showWhenGrouped */
        showWhenGrouped?: boolean;
        /** @docid dxDataGridOptions_columns_sortIndex */
        sortIndex?: number;
        /** @docid dxDataGridOptions_columns_sortOrder */
        sortOrder?: string;
        /** @docid dxDataGridOptions_columns_trueText */
        trueText?: string;
        /** @docid dxDataGridOptions_columns_visible */
        visible?: boolean;
        /** @docid dxDataGridOptions_columns_visibleIndex */
        visibleIndex?: number;
        /** @docid dxDataGridOptions_columns_width */
        width?: any;
        /** @docid dxDataGridOptions_columns_validationRules */
        validationRules?: Array<Object>;
        /** @docid dxDataGridOptions_columns_showInColumnChooser */
        showInColumnChooser?: boolean;
        /** @docid dxDataGridOptions_columns_name */
        name?: string;
    }
    export interface dxDataGridOptions extends WidgetOptions {
        /** @docid_ignore dxDataGridOptions_regenerateColumnsByVisibleItems */
        /** @docid dxDataGridOptions_showBorders */
        showBorders?: boolean;
        /** @docid dxDataGridOptions_errorRowEnabled */
        errorRowEnabled?: boolean;
        /** @docid dxDataGridOptions_onRowValidating */
        onRowValidating?: (e: Object) => void;
        /** @docid dxDataGridOptions_onContextMenuPreparing */
        onContextMenuPreparing?: (e: Object) => void;
        /** @docid dxDataGridOptions_initNewRow */
        initNewRow?: (e: { data: Object }) => void;
        /** @docid dxDataGridOptions_onInitNewRow */
        onInitNewRow?: (e: { data: Object }) => void;
        /** @docid dxDataGridOptions_rowInserted */
        rowInserted?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_onRowInserted */
        onRowInserted?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_rowInserting */
        rowInserting?: (e: { data: Object; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_onRowInserting */
        onRowInserting?: (e: { data: Object; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_rowRemoved */
        rowRemoved?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_onRowRemoved */
        onRowRemoved?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_rowRemoving */
        rowRemoving?: (e: { data: Object; key: any; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_onRowRemoving */
        onRowRemoving?: (e: { data: Object; key: any; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_rowUpdated */
        rowUpdated?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_onRowUpdated */
        onRowUpdated?: (e: { data: Object; key: any }) => void;
        /** @docid dxDataGridOptions_rowUpdating */
        rowUpdating?: (e: { oldData: Object; newData: Object; key: any; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_onRowUpdating */
        onRowUpdating?: (e: { oldData: Object; newData: Object; key: any; cancel: boolean }) => void;
        /** @docid dxDataGridOptions_cellHintEnabled */
        cellHintEnabled?: boolean;
        /** @docid dxDataGridOptions_allowColumnReordering */
        allowColumnReordering?: boolean;
        /** @docid dxDataGridOptions_allowColumnResizing */
        allowColumnResizing?: boolean;
        /** @docid dxDataGridOptions_cellClick */
        cellClick?: any;
        /** @docid dxDataGridOptions_onCellClick */
        onCellClick?: any;
        /** @docid dxDataGridOptions_cellHoverChanged */
        cellHoverChanged?: (e: Object) => void;
        /** @docid dxDataGridOptions_onCellHoverChanged */
        onCellHoverChanged?: (e: Object) => void;
        /** @docid dxDataGridOptions_cellPrepared */
        cellPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_onCellPrepared */
        onCellPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_columnAutoWidth */
        columnAutoWidth?: boolean;
        /** @docid dxDataGridOptions_columnChooser */
        columnChooser?: {
            /** @docid dxDataGridOptions_columnChooser_emptyPanelText */
            emptyPanelText?: string;
            /** @docid dxDataGridOptions_columnChooser_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_columnChooser_height */
            height?: number;
            /** @docid dxDataGridOptions_columnChooser_title */
            title?: string;
            /** @docid dxDataGridOptions_columnChooser_width */
            width?: number;
        };
        /** @docid dxDataGridOptions_columnFixing */
        columnFixing?: {
            /** @docid dxDataGridOptions_columnFixing_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_columnFixing_texts */
            texts?: {
                /** @docid dxDataGridOptions_columnFixing_texts_fix */
                fix?: string;
                /** @docid dxDataGridOptions_columnFixing_texts_unfix */
                unfix?: string;
                /** @docid dxDataGridOptions_columnFixing_texts_leftPosition */
                leftPosition?: string;
                /** @docid dxDataGridOptions_columnFixing_texts_rightPosition */
                rightPosition?: string;
            };
        };
        /** @docid dxDataGridOptions_headerFilter */
        headerFilter?: {
            /** @docid dxDataGridOptions_headerFilter_visible */
            visible?: boolean;
            /** @docid dxDataGridOptions_headerFilter_height */
            height?: number;
            /** @docid dxDataGridOptions_headerFilter_width */
            width?: number;
            /** @docid dxDataGridOptions_headerFilter_texts */
            texts?: {
                /** @docid dxDataGridOptions_headerFilter_texts_emptyValue */
                emptyValue?: string;
                /** @docid dxDataGridOptions_headerFilter_texts_ok */
                ok?: string;
                /** @docid dxDataGridOptions_headerFilter_texts_cancel */
                cancel?: string;
            }
        };
        /** @docid dxDataGridOptions_columns */
        columns?: Array<dxDataGridColumn>;
        /** @docid dxDataGridOptions_onContentReady */
        onContentReady?: Function;
        /** @docid dxDataGridOptions_contentReadyAction */
        contentReadyAction?: Function;
        /** @docid dxDataGridOptions_customizeColumns */
        customizeColumns?: (columns: Array<dxDataGridColumn>) => void;
        /** @docid dxDataGridOptions_dataErrorOccurred */
        dataErrorOccurred?: (errorObject: Error) => void;
        /** @docid dxDataGridOptions_dataSource */
        dataSource?: any;
        /** @docid dxDataGridOptions_editingStart */
        editingStart?: (e: {
            data: Object;
            key: any;
            cancel: boolean;
            column: dxDataGridColumn
        }) => void;
        /** @docid dxDataGridOptions_onEditingStart */
        onEditingStart?: (e: {
            data: Object;
            key: any;
            cancel: boolean;
            column: dxDataGridColumn
        }) => void;
        /** @docid dxDataGridOptions_editorPrepared */
        editorPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_onEditorPrepared */
        onEditorPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_editorPreparing */
        editorPreparing?: (e: Object) => void;
        /** @docid dxDataGridOptions_onEditorPreparing */
        onEditorPreparing?: (e: Object) => void;
        /** @docid dxDataGridOptions_editing */
        editing?: {
            /** @docid dxDataGridOptions_editing_editEnabled */
            editEnabled?: boolean;
            /** @docid dxDataGridOptions_editing_editMode */
            editMode?: string;
            /** @docid dxDataGridOptions_editing_insertEnabled */
            insertEnabled?: boolean;
            /** @docid dxDataGridOptions_editing_removeEnabled */
            removeEnabled?: boolean;
            /** @docid dxDataGridOptions_editing_texts */
            texts?: {
                /** @docid dxDataGridOptions_editing_texts_saveAllChanges */
                saveAllChanges?: string;
                /** @docid dxDataGridOptions_editing_texts_cancelRowChanges */
                cancelRowChanges?: string;
                /** @docid dxDataGridOptions_editing_texts_cancelAllChanges */
                cancelAllChanges?: string;
                /** @docid dxDataGridOptions_editing_texts_confirmDeleteMessage */
                confirmDeleteMessage?: string;
                /** @docid dxDataGridOptions_editing_texts_confirmDeleteTitle */
                confirmDeleteTitle?: string;
                /** @docid dxDataGridOptions_editing_texts_deleteRow */
                deleteRow?: string;
                /** @docid dxDataGridOptions_editing_texts_addRow */
                addRow?: string;
                /** @docid dxDataGridOptions_editing_texts_editRow */
                editRow?: string;
                /** @docid dxDataGridOptions_editing_texts_saveRowChanges */
                saveRowChanges?: string;
                /** @docid dxDataGridOptions_editing_texts_undeleteRow */
                undeleteRow?: string;
            };
        };
        /** @docid dxDataGridOptions_filterRow */
        filterRow?: {
            /** @docid dxDataGridOptions_filterRow_applyFilter */
            applyFilter?: string;
            /** @docid dxDataGridOptions_filterRow_applyFilterText */
            applyFilterText?: string;
            /** @docid dxDataGridOptions_filterRow_operationDescriptions */
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
            /** @docid dxDataGridOptions_filterRow_resetOperationText */
            resetOperationText?: string;
            /** @docid dxDataGridOptions_filterRow_showAllText */
            showAllText?: string;
            /** @docid dxDataGridOptions_filterRow_showOperationChooser */
            showOperationChooser?: boolean;
            /** @docid dxDataGridOptions_filterRow_visible */
            visible?: boolean;
        };
        /** @docid dxDataGridOptions_grouping */
        grouping?: {
            /** @docid dxDataGridOptions_grouping_allowCollapsing */
            allowCollapsing?: boolean;
            /** @docid dxDataGridOptions_grouping_autoExpandAll */
            autoExpandAll?: boolean;
            /** @docid dxDataGridOptions_grouping_groupContinuedMessage */
            groupContinuedMessage?: string;
            /** @docid dxDataGridOptions_grouping_groupContinuesMessage */
            groupContinuesMessage?: string;
        };
        /** @docid dxDataGridOptions_groupPanel */
        groupPanel?: {
            /** @docid dxDataGridOptions_groupPanel_allowColumnDragging */
            allowColumnDragging?: boolean;
            /** @docid dxDataGridOptions_groupPanel_emptyPanelText */
            emptyPanelText?: string;
            /** @docid dxDataGridOptions_groupPanel_visible */
            visible?: boolean;
        };
        /** @docid dxDataGridOptions_loadPanel */
        loadPanel?: {
            /** @docid dxDataGridOptions_loadPanel_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_loadPanel_height */
            height?: number;
            /** @docid dxDataGridOptions_loadPanel_indicatorSrc */
            indicatorSrc?: string;
            /** @docid dxDataGridOptions_loadPanel_showIndicator */
            showIndicator?: boolean;
            /** @docid dxDataGridOptions_loadPanel_showPane */
            showPane?: boolean;
            /** @docid dxDataGridOptions_loadPanel_text */
            text?: string;
            /** @docid dxDataGridOptions_loadPanel_width */
            width?: number;
        };
        /** @docid dxDataGridOptions_noDataText */
        noDataText?: string;
        /** @docid dxDataGridOptions_pager */
        pager?: {
            /** @docid dxDataGridOptions_pager_allowedPageSizes */
            allowedPageSizes?: any;
            /** @docid dxDataGridOptions_pager_showPageSizeSelector */
            showPageSizeSelector?: boolean;
            /** @docid dxDataGridOptions_pager_visible */
            visible?: any;
            /** @docid dxDataGridOptions_pager_infoText */
            infoText?: string;
            /** @docid dxDataGridOptions_pager_showInfo */
            showInfo?: boolean;
            /** @docid dxDataGridOptions_pager_showNavigationButtons */
            showNavigationButtons?: boolean;
        };
        /** @docid dxDataGridOptions_paging */
        paging?: {
            /** @docid dxDataGridOptions_paging_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_paging_pageIndex */
            pageIndex?: number;
            /** @docid dxDataGridOptions_paging_pageSize */
            pageSize?: number;
        };
        /** @docid dxDataGridOptions_rowAlternationEnabled */
        rowAlternationEnabled?: boolean;
        /** @docid dxDataGridOptions_rowClick */
        rowClick?: any;
        /** @docid dxDataGridOptions_onRowClick */
        onRowClick?: any;
        /** @docid dxDataGridOptions_rowPrepared */
        rowPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_onRowPrepared */
        onRowPrepared?: (e: Object) => void;
        /** @docid dxDataGridOptions_rowTemplate */
        rowTemplate?: any;
        /** @docid dxDataGridOptions_scrolling */
        scrolling?: {
            /** @docid_ignore dxDataGridOptions_scrolling_useNativeScrolling*/
            /** @docid dxDataGridOptions_scrolling_mode */
            mode?: string;
            /** @docid dxDataGridOptions_scrolling_preloadEnabled */
            preloadEnabled?: boolean;
        };
        /** @docid dxDataGridOptions_searchPanel */
        searchPanel?: {
            /** @docid dxDataGridOptions_searchPanel_highlightSearchText */
            highlightSearchText?: boolean;
            /** @docid dxDataGridOptions_searchPanel_placeholder */
            placeholder?: string;
            /** @docid dxDataGridOptions_searchPanel_visible */
            visible?: boolean;
            /** @docid dxDataGridOptions_searchPanel_width */
            width?: number;
            /** @docid dxDataGridOptions_searchPanel_text */
            text?: string;
        };
        /** @docid dxDataGridOptions_remoteOperations */
        remoteOperations?: any;
        /** @docid dxDataGridOptions_sortByGroupSummaryInfo */
        sortByGroupSummaryInfo?: Array<{
            /** @docid dxDataGridOptions_sortByGroupSummaryInfo_summaryItem */
            summaryItem?: string;
            /** @docid dxDataGridOptions_sortByGroupSummaryInfo_groupColumn */
            groupColumn?: string;
            /** @docid dxDataGridOptions_sortByGroupSummaryInfo_sortOrder */
            sortOrder?: string;
        }>;
        /** @docid dxDataGridOptions_masterDetail */
        masterDetail?: {
            /** @docid dxDataGridOptions_masterDetail_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_masterDetail_autoExpandAll */
            autoExpandAll?: boolean;
            /** @docid dxDataGridOptions_masterDetail_template */
            template?: any;
        };
        /** @docid dxDataGridOptions_export */
        export?: {
            /** @docid dxDataGridOptions_export_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_export_fileName */
            fileName?: string;
            /** @docid dxDataGridOptions_export_excelFilterEnabled */
            excelFilterEnabled?: boolean;
            /** @docid dxDataGridOptions_export_excelWrapTextEnabled */
            excelWrapTextEnabled?: boolean;
            /** @docid dxDataGridOptions_export_proxyUrl */
            proxyUrl?: string;
            /** @docid dxDataGridOptions_export_allowExportSelectedData */
            allowExportSelectedData?: boolean;
            /** @docid dxDataGridOptions_export_texts */
            texts?: {
                /** @docid dxDataGridOptions_export_texts_exportTo */
                exportTo?: string;
                /** @docid dxDataGridOptions_export_texts_exportToExcel */
                exportToExcel?: string;
                /** @docid dxDataGridOptions_export_texts_excelFormat */
                excelFormat?: string;
                /** @docid dxDataGridOptions_export_texts_selectedRows */
                selectedRows?: string;
            }
        };
        /** @docid dxDataGridOptions_selectedRowKeys */
        selectedRowKeys?: Array<any>;
        /** @docid dxDataGridOptions_selection */
        selection?: {
            /** @docid_ignore dxDataGridOptions_selection_showCheckboxesInMultipleMode*/
            /** @docid dxDataGridOptions_selection_allowSelectAll */
            allowSelectAll?: boolean;
            /** @docid dxDataGridOptions_selection_mode */
            mode?: string;
        };
        /** @docid dxDataGridOptions_selectionChanged */
        selectionChanged?: (e: {
            currentSelectedRowKeys: Array<any>;
            currentDeselectedRowKeys: Array<any>;
            selectedRowKeys: Array<any>;
            selectedRowsData: Array<any>;
        }) => void;
        /** @docid dxDataGridOptions_onDataErrorOccurred */
        onDataErrorOccurred?: (e: { error: Error }) => void;
        /** @docid dxDataGridOptions_onSelectionChanged */
        onSelectionChanged?: (e: {
            currentSelectedRowKeys: Array<any>;
            currentDeselectedRowKeys: Array<any>;
            selectedRowKeys: Array<any>;
            selectedRowsData: Array<any>;
        }) => void;
        /** @docid dxDataGridOptions_onExporting */
        onExporting?: (e: {
            fileName: string;
            format: string;
            cancel: boolean;
        }) => void;
        /** @docid dxDataGridOptions_onExported */
        onExported?: (e: Object) => void;
        /** @docid dxDataGridOptions_onRowExpanding */
        onRowExpanding?: (e: Object) => void;
        /** @docid dxDataGridOptions_onRowExpanded */
        onRowExpanded?: (e: Object) => void;
        /** @docid dxDataGridOptions_onRowCollapsing */
        onRowCollapsing?: (e: Object) => void;
        /** @docid dxDataGridOptions_onRowCollapsed */
        onRowCollapsed?: (e: Object) => void;
        /** @docid dxDataGridOptions_showColumnHeaders */
        showColumnHeaders?: boolean;
        /** @docid dxDataGridOptions_showColumnLines */
        showColumnLines?: boolean;
        /** @docid dxDataGridOptions_showRowLines */
        showRowLines?: boolean;
        /** @docid dxDataGridOptions_sorting */
        sorting?: {
            /** @docid dxDataGridOptions_sorting_ascendingText */
            ascendingText?: string;
            /** @docid dxDataGridOptions_sorting_clearText */
            clearText?: string;
            /** @docid dxDataGridOptions_sorting_descendingText */
            descendingText?: string;
            /** @docid dxDataGridOptions_sorting_sortingMode */
            mode?: string;
        };
        /** @docid dxDataGridOptions_stateStoring */
        stateStoring?: {
            /** @docid dxDataGridOptions_stateStoring_customLoad */
            customLoad?: () => JQueryPromise<Object>;
            /** @docid dxDataGridOptions_stateStoring_customSave */
            customSave?: (gridState: Object) => void;
            /** @docid dxDataGridOptions_stateStoring_enabled */
            enabled?: boolean;
            /** @docid dxDataGridOptions_stateStoring_savingTimeout */
            savingTimeout?: number;
            /** @docid dxDataGridOptions_stateStoring_storageKey */
            storageKey?: string;
            /** @docid dxDataGridOptions_stateStoring_type */
            type?: string;
        };
        /** @docid dxDataGridOptions_summary */
        summary?: {
            /** @docid dxDataGridOptions_summary_texts */
            texts?: {
                /** @docid dxDataGridOptions_summary_texts_sum */
                sum?: string;
                /** @docid dxDataGridOptions_summary_texts_sumOtherColumn */
                sumOtherColumn?: string;
                /** @docid dxDataGridOptions_summary_texts_min */
                min?: string;
                /** @docid dxDataGridOptions_summary_texts_minOtherColumn */
                minOtherColumn?: string;
                /** @docid dxDataGridOptions_summary_texts_max */
                max?: string;
                /** @docid dxDataGridOptions_summary_texts_maxOtherColumn */
                maxOtherColumn?: string;
                /** @docid dxDataGridOptions_summary_texts_avg */
                avg?: string;
                /** @docid dxDataGridOptions_summary_texts_avgOtherColumn */
                avgOtherColumn?: string;
                /** @docid dxDataGridOptions_summary_texts_count */
                count?: string;
            };
            /** @docid dxDataGridOptions_summary_groupItems */
            groupItems?: Array<{
                /** @docid dxDataGridOptions_summary_groupItems_name */
                name?: string;
                /** @docid dxDataGridOptions_summary_groupItems_column */
                column?: string;
                /** @docid dxDataGridOptions_summary_groupItems_customizeText */
                customizeText?: (itemInfo: {
                    value: any;
                    valueText: string;
                }) => string;
                /** @docid dxDataGridOptions_summary_groupItems_displayFormat */
                displayFormat?: string;
                /** @docid dxDataGridOptions_summary_groupItems_precision */
                precision?: number;
                /** @docid dxDataGridOptions_summary_groupItems_showInGroupFooter */
                showInGroupFooter?: boolean;
                /** @docid dxDataGridOptions_summary_groupItems_alignByColumn */
                alignByColumn?: boolean;
                /** @docid dxDataGridOptions_summary_groupItems_showInColumn */
                showInColumn?: string;
                /** @docid dxDataGridOptions_summary_groupItems_summaryType */
                summaryType?: string;
                /** @docid dxDataGridOptions_summary_groupItems_valueFormat */
                valueFormat?: string;
            }>;
            /** @docid dxDataGridOptions_summary_totalItems */
            totalItems?: Array<{
                /** @docid dxDataGridOptions_summary_totalItems_name */
                name?: string;
                /** @docid dxDataGridOptions_summary_totalItems_alignment */
                alignment?: string;
                /** @docid dxDataGridOptions_summary_totalItems_column */
                column?: string;
                /** @docid dxDataGridOptions_summary_totalItems_cssClass */
                cssClass?: string;
                /** @docid dxDataGridOptions_summary_totalItems_customizeText */
                customizeText?: (itemInfo: {
                    value: any;
                    valueText: string;
                }) => string;
                /** @docid dxDataGridOptions_summary_totalItems_displayFormat */
                displayFormat?: string;
                /** @docid dxDataGridOptions_summary_totalItems_precision */
                precision?: number;
                /** @docid dxDataGridOptions_summary_totalItems_showInColumn */
                showInColumn?: string;
                /** @docid dxDataGridOptions_summary_totalItems_summaryType */
                summaryType?: string;
                /** @docid dxDataGridOptions_summary_totalItems_valueFormat */
                valueFormat?: string;
            }>;
            /** @docid dxDataGridOptions_summary_calculateCustomSummary */
            calculateCustomSummary?: (options: {
                component: dxDataGrid;
                name?: string;
                value: any;
                totalValue: any;
                summaryProcess: string
            }) => void;
        };
        /** @docid dxDataGridOptions_wordWrapEnabled */
        wordWrapEnabled?: boolean;
    }
    /** @docid dxdataGrid */
    export class dxDataGrid extends Widget {
        constructor(element: JQuery, options?: dxDataGridOptions);
        constructor(element: Element, options?: dxDataGridOptions);
        /** @docid_ignore dxDataGridMethods_stopSelectionWithCheckboxes */
        /** @docid dxDataGridMethods_clearGrouping */
        clearGrouping(): void;
        /** @docid dxDataGridMethods_clearSorting */
        clearSorting(): void;
        /** @docid dxDataGridMethods_getCellElement#getCellElement(rowIndex,dataField) */
        getCellElement(rowIndex: number, dataField: string): any;
        /** @docid dxDataGridMethods_getCellElement#getCellElement(rowIndex,visibleColumnIndex) */
        getCellElement(rowIndex: number, visibleColumnIndex: number): any;
        /** @docid dxDataGridMethods_state#state() */
        state(): Object;
        /** @docid dxDataGridMethods_state#state(state) */
        state(state: Object): void;
        /** @docid dxDataGridMethods_getRowIndexByKey */
        getRowIndexByKey(key: any): number;
        /** @docid dxDataGridMethods_getKeyByRowIndex */
        getKeyByRowIndex(rowIndex: number): any;
        /** @docid dxDataGridMethods_addColumn */
        addColumn(columnOptions: dxDataGridColumn): void;
        /** @docid dxDataGridMethods_beginCustomLoading */
        beginCustomLoading(messageText: string): void;
        /** @docid dxDataGridMethods_cancelEditData */
        cancelEditData(): void;
        /** @docid dxDataGridMethods_clearFilter */
        clearFilter(): void;
        /** @docid dxDataGridMethods_clearSelection */
        clearSelection(): void;
        /** @docid dxDataGridMethods_closeEditCell */
        closeEditCell(): void;
        /** @docid dxDataGridMethods_collapseAll */
        collapseAll(groupIndex?: number): void;
        /** @docid dxDataGridMethods_columnCount */
        columnCount(): number;
        /** @docid dxDataGridMethods_columnOption#columnOption(id,optionName) */
        columnOption(id: number, optionName: string): any;
        /** @docid dxDataGridMethods_columnOption#columnOption(id,optionName,optionValue) */
        columnOption(id: number, optionName: string, optionValue: any): void;
        /** @docid dxDataGridMethods_columnOption#columnOption(id) */
        columnOption(id: any): Object;
        /** @docid dxDataGridMethods_columnOption#columnOption(id,options) */
        columnOption(id: any, options: Object): void;
        /** @docid dxDataGridMethods_editCell */
        editCell(rowIndex: number, columnIndex: number): void;
        /** @docid dxDataGridMethods_editRow */
        editRow(rowIndex: number): void;
        /** @docid dxDataGridMethods_endCustomLoading */
        endCustomLoading(): void;
        /** @docid dxDataGridMethods_expandAll */
        expandAll(groupIndex: number): void;
        /** @docid dxDataGridMethods_isRowExpanded */
        isRowExpanded(key: any): boolean;
        /** @docid dxDataGridMethods_expandRow */
        expandRow(key: any): void;
        /** @docid dxDataGridMethods_collapseRow */
        collapseRow(key: any): void;
        /** @docid dxDataGridMethods_filter#filter(filterExpr) */
        filter(filterExpr?: any): void;
        /** @docid dxDataGridMethods_filter#filter() */
        filter(): any;
        /** @docid dxDataGridMethods_getCombinedFilter */
        getCombinedFilter(): any;
        /** @docid dxDataGridMethods_getSelectedRowKeys */
        getSelectedRowKeys(): Array<Object>;
        /** @docid dxDataGridMethods_getSelectedRowsData */
        getSelectedRowsData(): Array<Object>;
        /** @docid dxDataGridMethods_hideColumnChooser */
        hideColumnChooser(): void;
        /** @docid dxDataGridMethods_insertRow */
        insertRow(): void;
        /** @docid dxDataGridMethods_keyOf */
        keyOf(obj: Object): any;
        /** @docid dxDataGridMethods_pageIndex#pageIndex(newIndex) */
        pageIndex(newIndex: number): void;
        /** @docid dxDataGridMethods_pageIndex#pageIndex() */
        pageIndex(): number;
        /** @docid dxDataGridMethods_pageSize#pageSize(value) */
        pageSize(value: number): void;
        /** @docid dxDataGridMethods_pageSize#pageSize() */
        pageSize(): number;
        /** @docid dxDataGridMethods_refresh */
        refresh(): void;
        /** @docid dxDataGridMethods_removeRow */
        removeRow(rowIndex: number): void;
        /** @docid dxDataGridMethods_saveEditData */
        saveEditData(): void;
        /** @docid dxDataGridMethods_searchByText */
        searchByText(text: string): void;
        /** @docid dxDataGridMethods_selectAll */
        selectAll(): void;
        /** @docid dxDataGridMethods_deselectAll */
        deselectAll(): void;
        /** @docid dxDataGridMethods_selectRows */
        selectRows(keys: Array<any>, preserve: boolean): void;
        /** @docid dxDataGridMethods_deselectRows */
        deselectRows(keys: Array<any>): void;
        /** @docid dxDataGridMethods_selectRowsByIndexes */
        selectRowsByIndexes(indexes: Array<any>): void;
        /** @docid dxDataGridMethods_isRowSelected */
        isRowSelected(key: any): boolean;
        /** @docid dxDataGridMethods_showColumnChooser */
        showColumnChooser(): void;
        /** @docid dxDataGridMethods_startSelectionWithCheckboxes */
        startSelectionWithCheckboxes(): boolean;
        /** @docid dxDataGridMethods_totalCount */
        totalCount(): number;
        /** @docid dxDataGridMethods_undeleteRow */
        undeleteRow(rowIndex: number): void;
        /** @docid dxDataGridMethods_byKey */
        byKey(key: any): JQueryPromise<any>;
        /** @docid dxDataGridMethods_getTotalSummaryValue */
        getTotalSummaryValue(summaryItemName: string): any;
        /** @docid dxDataGridMethods_exportToExcel */
        exportToExcel(selectionOnly: boolean): void;
        /** @docid dxDataGridMethods_updateDimensions */
        updateDimensions(): void;
        /** @docid dxDataGridMethods_focus */
        focus(element?: JQuery): void;
    }
    export interface dxPivotGridOptions extends WidgetOptions {
        /** @docid_ignore dxPivotGridOptions_onContentReady */
        /** @docid_ignore dxPivotGridOptions_activeStateEnabled */
        /** @docid_ignore dxPivotGridOptions_hoverStateEnabled */
        /** @docid_ignore dxPivotGridOptions_focusStateEnabled */
        /** @docid_ignore dxPivotGridOptions_accessKey */
        /** @docid dxPivotGridOptions_dataSource */
        dataSource?: any;
        /** @docid dxPivotGridOptions_useNativeScrolling */
        useNativeScrolling?: any;
        /** @docid dxPivotGridOptions_allowSorting */
        allowSorting?: boolean;
        /** @docid dxPivotGridOptions_allowSortingBySummary */
        allowSortingBySummary?: boolean;
        /** @docid dxPivotGridOptions_allowFiltering */
        allowFiltering?: boolean;
        /** @docid dxPivotGridOptions_allowExpandAll */
        allowExpandAll?: boolean;
        /** @docid dxPivotGridOptions_showRowTotals */
        showRowTotals?: boolean;
        /** @docid dxPivotGridOptions_showRowGrandTotals */
        showRowGrandTotals?: boolean;
        /** @docid dxPivotGridOptions_showColumnTotals */
        showColumnTotals?: boolean;
        /** @docid dxPivotGridOptions_showColumnGrandTotals */
        showColumnGrandTotals?: boolean;
        /** @docid dxPivotGridOptions_fieldChooser */
        fieldChooser?: {
            /** @docid dxPivotGridOptions_fieldChooser_enabled */
            enabled?: boolean;
            /** @docid dxPivotGridOptions_fieldChooser_layout */
            layout?: number;
            /** @docid dxPivotGridOptions_fieldChooser_title */
            title?: string;
            /** @docid dxPivotGridOptions_fieldChooser_width */
            width?: number;
            /** @docid dxPivotGridOptions_fieldChooser_height */
            height?: number;
            /** @docid dxPivotGridOptions_fieldChooser_texts */
            texts?: {
                /** @docid dxPivotGridOptions_fieldChooser_texts_rowFields */
                rowFields?: string;
                /** @docid dxPivotGridOptions_fieldChooser_texts_columnFields */
                columnFields?: string;
                /** @docid dxPivotGridOptions_fieldChooser_texts_dataFields */
                dataFields?: string;
                /** @docid dxPivotGridOptions_fieldChooser_texts_filterFields */
                filterFields?: string;
                /** @docid dxPivotGridOptions_fieldChooser_texts_allFields */
                allFields?: string;
            };
        }
        /** @docid dxPivotGridOptions_texts */
        texts?: {
            /** @docid dxPivotGridOptions_texts_grandTotal */
            grandTotal?: string;
            /** @docid dxPivotGridOptions_texts_total */
            total?: string;
            /** @docid dxPivotGridOptions_texts_noData */
            noData?: string;
            /** @docid dxPivotGridOptions_texts_showFieldChooser */
            showFieldChooser?: string;
            /** @docid dxPivotGridOptions_texts_expandAll */
            expandAll?: string;
            /** @docid dxPivotGridOptions_texts_collapseAll */
            collapseAll?: string;
            /** @docid dxPivotGridOptions_texts_sortColumnBySummary */
            sortColumnBySummary?: string;
            /** @docid dxPivotGridOptions_texts_sortRowBySummary */
            sortRowBySummary?: string;
            /** @docid dxPivotGridOptions_texts_removeAllSorting */
            removeAllSorting?: string;
        };
        /** @docid dxPivotGridOptions_loadPanel */
        loadPanel?: {
            /** @docid dxPivotGridOptions_loadPanel_enabled */
            enabled?: boolean;
            /** @docid dxPivotGridOptions_loadPanel_height */
            height?: number;
            /** @docid dxPivotGridOptions_loadPanel_indicatorSrc */
            indicatorSrc?: string;
            /** @docid dxPivotGridOptions_loadPanel_showIndicator */
            showIndicator?: boolean;
            /** @docid dxPivotGridOptions_loadPanel_showPane */
            showPane?: boolean;
            /** @docid dxPivotGridOptions_loadPanel_text */
            text?: string;
            /** @docid dxPivotGridOptions_loadPanel_width */
            width?: number;
        };
        /** @docid dxPivotGridOptions_onCellClick */
        onCellClick?: (e: any) => void;
        /** @docid dxPivotGridOptions_onCellPrepared */
        onCellPrepared?: (e: any) => void;
    }
    /** @docid dxPivotGrid */
    export class dxPivotGrid extends Widget {
        constructor(element: JQuery, options?: dxPivotGridOptions);
        constructor(element: Element, options?: dxPivotGridOptions);
        /** @docid dxPivotGridMethods_getDataSource */
        getDataSource(): DevExpress.data.PivotGridDataSource;
        /** @docid dxPivotGridMethods_updateDimensions */
        updateDimensions(): void;
    }
    export interface dxPivotGridFieldChooserOptions extends WidgetOptions {
        /** @docid dxPivotGridFieldChooserOptions_layout */
        layout?: number;
        /** @docid dxPivotGridFieldChooserOptions_dataSource */
        dataSource?: DevExpress.data.PivotGridDataSource;
        /** @docid dxPivotGridFieldChooserOptions_onContentReady */
        onContentReady?: Function;
        /** @docid dxPivotGridFieldChooserOptions_texts */
        texts?: {
            /** @docid dxPivotGridFieldChooserOptions_texts_rowFields */
            rowFields?: string;
            /** @docid dxPivotGridFieldChooserOptions_texts_columnFields */
            columnFields?: string;
            /** @docid dxPivotGridFieldChooserOptions_texts_dataFields */
            dataFields?: string;
            /** @docid dxPivotGridFieldChooserOptions_texts_filterFields */
            filterFields?: string;
            /** @docid dxPivotGridFieldChooserOptions_texts_allFields */
            allFields?: string;
        };
    }
    /** @docid dxPivotGridFieldChooser */
    export class dxPivotGridFieldChooser extends Widget {
        constructor(element: JQuery, options?: dxPivotGridFieldChooserOptions);
        constructor(element: Element, options?: dxPivotGridFieldChooserOptions);
        /** @docid dxPivotGridFieldChooserMethods_updateDimensions */
        updateDimensions(): void;
    }
}
declare module DevExpress.viz.charts  {
    /** @docid baseSeriesObject*/
    export interface BaseSeries {
        /** @docid baseSeriesObjectFields_fullstate */
        fullState: number;
        /** @docid baseSeriesObjectFields_type */
        type: string;
        /** @docid baseSeriesObjectmethods_clearselection */
        clearSelection(): void;
        /** @docid baseSeriesObjectmethods_getcolor */
        getColor(): string;
		/** @docid baseSeriesObjectmethods_getpointbyarg */
        getPointByArg(pointArg: any): Object;
        /** @docid baseSeriesObjectmethods_getpointsbyarg */
        getPointsByArg(pointArg: any): Array<BasePoint>;
        /** @docid baseSeriesObjectmethods_getpointbypos */
        getPointByPos(positionIndex: number): Object;
        /** @docid baseSeriesObjectmethods_select */
        select(): void;
        /** @docid baseSeriesObjectmethods_selectpoint */
        selectPoint(point: BasePoint): void;
        /** @docid baseSeriesObjectmethods_deselectpoint */
        deselectPoint(point: BasePoint): void;
        /** @docid baseSeriesObjectmethods_getallpoints */
        getAllPoints(): Array<BasePoint>;
        /** @docid baseSeriesObjectmethods_getvisiblepoints */
        getVisiblePoints(): Array<BasePoint>;
    }
    /** @docid basePointObject */
    export interface BasePoint {
        /** @docid basePointObjectFields_fullstate */
        fullState: number;
        /** @docid basePointObjectFields_originalArgument */
        originalArgument: any;
        /** @docid basePointObjectFields_originalValue */
        originalValue: any;
        /** @docid basePointObjectFields_tag */
        tag: string;
        /** @docid basePointObjectmethods_clearselection */
        clearSelection(): void;
        /** @docid basePointObjectmethods_getcolor */
        getColor(): string;
        /** @docid basePointObjectmethods_hideTooltip */
        hideTooltip(): void;
        /** @docid basePointObjectmethods_isHovered */
        isHovered(): any;
        /** @docid basePointObjectmethods_isSelected */
        isSelected(): any;
        /** @docid basePointObjectmethods_select */
        select(): void;
        /** @docid basePointObjectmethods_showTooltip */
        showTooltip(): void;
        /** @docid basePointObjectmethods_getlabel */
        getLabel(): any;
        /** @docid basePointObjectFields_series */
        series: BaseSeries;
    }
    /** @docid chartSeriesObject */
    export interface ChartSeries extends BaseSeries {
        /** @docid chartSeriesObjectFields_pane */
        pane: string;
        /** @docid chartSeriesObjectFields_axis */
        axis: string;
        /** @docid chartSeriesObjectFields_name */
        name: string;
        /** @docid chartSeriesObjectFields_tag */
        tag: string;
        /** @docid chartSeriesObjectmethods_hide */
        hide(): void;
        /** @docid chartSeriesObjectmethods_isHovered */
        isHovered(): any;
        /** @docid chartSeriesObjectmethods_isSelected */
        isSelected(): any;
        /** @docid chartSeriesObjectmethods_isvisible */
        isVisible(): boolean;
        /** @docid chartSeriesObjectmethods_show */
        show(): void;
        selectPoint(point: ChartPoint): void;
        deselectPoint(point: ChartPoint): void;
        getAllPoints(): Array<ChartPoint>;
        getVisiblePoints(): Array<ChartPoint>;
    }
    /** @docid chartPointObject */
    export interface ChartPoint extends BasePoint {
        /** @docid chartPointObjectFields_originalCloseValue */
        originalCloseValue: any;
        /** @docid chartPointObjectFields_originalHighValue */
        originalHighValue: any;
        /** @docid chartPointObjectFields_originalLowValue */
        originalLowValue: any;
        /** @docid chartPointObjectFields_originalMinValue */
        originalMinValue: any;
        /** @docid chartPointObjectFields_originalOpenValue */
        originalOpenValue: any;
        /** @docid chartPointObjectFields_size */
        size: any;
        /** @docid chartPointObjectmethods_getboundingrect */
        getBoundingRect(): { x: number; y: number; width: number; height: number; };
        series: ChartSeries;
    }
    /** @docid baseLabelObject */
    export interface Label {
        /** @docid baseLabelObjectmethods_getboundingrect*/
        getBoundingRect(): { x: number; y: number; width: number; height: number; };
        /** @docid baseLabelObjectmethods_hide */
        hide(): void;
        /** @docid baseLabelObjectmethods_show */
        show(): void;
    }
    export interface PieSeries extends BaseSeries {
        selectPoint(point: PiePoint): void;
        deselectPoint(point: PiePoint): void;
        getAllPoints(): Array<PiePoint>;
        getVisiblePoints(): Array<PiePoint>;
    }
    /** @docid piePointObject */
    export interface PiePoint extends BasePoint {
        /** @docid piePointObjectFields_percent */
        percent: any;
        /** @docid piePointObjectmethods_isvisible */
        isVisible(): boolean;
        /** @docid piePointObjectmethods_show */
        show(): void;
        /** @docid piePointObjectmethods_hide */
        hide(): void;
        series: PieSeries;
    }
    /** @docid polarChartSeriesObject */
    export interface PolarSeries extends BaseSeries {
        /** @docid polarChartSeriesObjectFields_axis */
        axis: string;
        /** @docid polarChartSeriesObjectFields_name */
        name: string;
        /** @docid polarChartSeriesObjectFields_tag */
        tag: string;
        /** @docid polarChartSeriesObjectmethods_hide */
        hide(): void;
        /** @docid polarChartSeriesObjectmethods_isHovered */
        isHovered(): any;
        /** @docid polarChartSeriesObjectmethods_isSelected */
        isSelected(): any;
        /** @docid polarChartSeriesObjectmethods_isvisible */
        isVisible(): boolean;
        /** @docid polarChartSeriesObjectmethods_show */
        show(): void;
        selectPoint(point: PolarPoint): void;
        deselectPoint(point: PolarPoint): void;
        getAllPoints(): Array<PolarPoint>;
        getVisiblePoints(): Array<PolarPoint>;
    }
    /** @docid polarPointObject */
    export interface PolarPoint extends BasePoint {
        /** @docid_ignore polarPointObjectmethods_getboundingrect */
        series: PolarSeries;
    }
    export interface Strip {
        /** 
          * @docid dxchartoptions_argumentaxis_strips_color 
          * @docid dxchartoptions_valueaxis_strips_color
          * @docid dxpolarchartoptions_argumentaxis_strips_color
          * @docid dxpolarchartoptions_valueaxis_strips_color
          */
        color?: string;
        /** 
          * @docid dxchartoptions_argumentaxis_strips_label 
          * @docid dxchartoptions_valueaxis_strips_label
          * @docid dxpolarchartoptions_argumentaxis_strips_label 
          * @docid dxpolarchartoptions_valueaxis_strips_label
          */
        label?: {
            /** 
              * @docid dxchartoptions_argumentaxis_strips_label_text 
              * @docid dxchartoptions_valueaxis_strips_label_text
              * @docid dxpolarchartoptions_argumentaxis_strips_label_text 
              * @docid dxpolarchartoptions_valueaxis_strips_label_text
              */
            text?: string;
        };
        /** 
          * @docid dxchartoptions_argumentaxis_strips_startvalue 
          * @docid dxchartoptions_valueaxis_strips_startvalue
          * @docid dxpolarchartoptions_argumentaxis_strips_startvalue 
          * @docid dxpolarchartoptions_valueaxis_strips_startvalue
          */
        startValue?: any;
        /** 
          * @docid dxchartoptions_argumentaxis_strips_endvalue
          * @docid dxchartoptions_valueaxis_strips_endvalue 
          * @docid dxpolarchartoptions_argumentaxis_strips_endvalue
          * @docid dxpolarchartoptions_valueaxis_strips_endvalue 
          */
        endValue?: any;
    }
    export interface BaseSeriesConfigLabel {
        /** 
        * @docid commonseriesoptions_label_argumentFormat 
        * @docid commonpiechartseriesoptions_label_argumentFormat
        * @docid commonpolarchartseriesoptions_label_argumentFormat 
        */
        argumentFormat?: string;
        /** 
        * @docid commonseriesoptions_label_argumentprecision 
        * @docid commonpiechartseriesoptions_label_argumentprecision
        * @docid commonpolarchartseriesoptions_label_argumentprecision 
        */
        argumentPrecision?: number;
        /** 
        * @docid commonseriesoptions_label_backgroundcolor 
        * @docid commonpiechartseriesoptions_label_backgroundcolor
        * @docid commonpolarchartseriesoptions_label_backgroundcolor
        */
        backgroundColor?: string;
        /** 
        * @docid commonseriesoptions_label_border 
        * @docid commonpiechartseriesoptions_label_border
        * @docid commonpolarchartseriesoptions_label_border
        */
        border?: viz.core.DashedBorder;
        /** 
        * @docid commonseriesoptions_label_connector 
        * @docid commonpiechartseriesoptions_label_connector
        * @docid commonpolarchartseriesoptions_label_connector
        */
        connector?: {
            /** 
            * @docid commonseriesoptions_label_connector_color 
            * @docid commonpiechartseriesoptions_label_connector_color
            * @docid commonpolarchartseriesoptions_label_connector_color
            */
            color?: string;
            /** 
            * @docid commonseriesoptions_label_connector_visible 
            * @docid commonpiechartseriesoptions_label_connector_visible
            * @docid commonpolarchartseriesoptions_label_connector_visible
            */
            visible?: boolean;
            /** 
            * @docid commonseriesoptions_label_connector_width 
            * @docid commonpiechartseriesoptions_label_connector_width
            * @docid commonpolarchartseriesoptions_label_connector_width
            */
            width?: number;
        };
        /** 
          * @docid commonseriesoptions_label_customizetext 
          * @docid candlestickseriesoptions_label_customizetext
          * @docid fullstackedareaseriesoptions_label_customizetext
          * @docid fullstackedbarseriesoptions_label_customizetext
          * @docid fullstackedlineseriesoptions_label_customizetext
          * @docid fullstackedsplineareaseriesoptions_label_customizetext
          * @docid fullstackedsplineseriesoptions_label_customizetext
          * @docid stockseriesoptions_label_customizetext
          * @docid commonpiechartseriesoptions_label_customizetext
          * @docid commonpolarchartseriesoptions_label_customizetext
          */
        customizeText?: (pointInfo: Object) => string;
        /** 
          * @docid commonseriesoptions_label_font 
          * @docid commonpiechartseriesoptions_label_font
          * @docid commonpolarchartseriesoptions_label_font
          */
        font?: viz.core.Font;
        /** 
          * @docid commonseriesoptions_label_format 
          * @docid commonpiechartseriesoptions_label_format
          * @docid commonpolarchartseriesoptions_label_format
          */
        format?: string;
        /** 
          * @docid commonseriesoptions_label_position 
          * @docid fullstackedbarseriesoptions_label_position
          * @docid stackedbarseriesoptions_label_position
          * @docid commonpiechartseriesoptions_label_position
          * @docid commonpolarchartseriesoptions_label_position
          * @docid stackedbarpolarseriesoptions_label_position
          */
        position?: string;
        /** 
          * @docid commonseriesoptions_label_precision 
          * @docid commonpiechartseriesoptions_label_precision
          * @docid commonpolarchartseriesoptions_label_precision
          */
        precision?: number;
        /** 
          * @docid commonseriesoptions_label_rotationangle 
          * @docid commonpiechartseriesoptions_label_rotationangle
          * @docid commonpolarchartseriesoptions_label_rotationangle
          */
        rotationAngle?: number;
        /** 
          * @docid commonseriesoptions_label_visible 
          * @docid commonpiechartseriesoptions_label_visible
          * @docid commonpolarchartseriesoptions_label_visible
          */
        visible?: boolean;
    }
    export interface SeriesConfigLabel extends BaseSeriesConfigLabel {
        /**
         * @docid commonpolarchartseriesoptions_label_showforzerovalues
         * @docid commonseriesoptions_label_showforzerovalues
         */
        showForZeroValues?: boolean;
    }
    export interface ChartSeriesConfigLabel extends SeriesConfigLabel {
        /**
        * @docid commonseriesoptions_label_alignment 
        */
        alignment?: string;
        /**
        * @docid commonseriesoptions_label_horizontaloffset 
        */
        horizontalOffset?: number;
        /**
        * @docid commonseriesoptions_label_verticaloffset 
        */
        verticalOffset?: number;
        /** * @docid commonseriesoptions_label_percentprecision */
        percentPrecision?: number;
    }
	export interface BaseCommonSeriesConfig {
		/** 
          * @docid commonseriesoptions_argumentfield
          * @docid candlestickseriesoptions_argumentfield
          * @docid stockseriesoptions_argumentfield
          * @docid commonpolarchartseriesoptions_argumentfield
          */
        argumentField?: string;
        /**
		* @docid commonseriesoptions_axis 
		* @docid commonpolarchartseriesoptions_axis 
		*/
        axis?: string;
        /**
		* @docid commonseriesoptions_label 
        * @docid candlestickseriesoptions_label
        * @docid fullstackedareaseriesoptions_label
        * @docid fullstackedbarseriesoptions_label
        * @docid fullstackedlineseriesoptions_label
        * @docid fullstackedsplineareaseriesoptions_label
        * @docid fullstackedsplineseriesoptions_label
        * @docid stackedbarseriesoptions_label
        * @docid stockseriesoptions_label
		*/
        label?: ChartSeriesConfigLabel;
        /**
		* @docid commonseriesoptions_border 
		* @docid commonpolarchartseriesoptions_border 
        * @docid stepareaseriesoptions_border
		*/
        border?: viz.core.DashedBorder;
        /**
		* @docid commonseriesoptions_color 
		* @docid commonpolarchartseriesoptions_color 
		*/
        color?: string;
        /**
		* @docid commonseriesoptions_dashstyle 
		* @docid commonpolarchartseriesoptions_dashstyle 
		*/
        dashStyle?: string;
        /** 
          * @docid commonseriesoptions_hovermode 
          * @docid areaseriesoptions_hovermode
          * @docid barseriesoptions_hovermode
          * @docid bubbleseriesoptions_hovermode
          * @docid candlestickseriesoptions_hovermode
          * @docid fullstackedareaseriesoptions_hovermode
          * @docid fullstackedbarseriesoptions_hovermode
          * @docid fullstackedlineseriesoptions_hovermode
          * @docid fullstackedsplineareaseriesoptions_hovermode
          * @docid fullstackedsplineseriesoptions_hovermode
          * @docid lineseriesoptions_hovermode
          * @docid rangeareaseriesoptions_hovermode
          * @docid rangebarseriesoptions_hovermode
          * @docid splineareaseriesoptions_hovermode
          * @docid splineseriesoptions_hovermode
          * @docid stackedareaseriesoptions_hovermode
          * @docid stackedbarseriesoptions_hovermode
          * @docid stackedlineseriesoptions_hovermode
          * @docid stackedsplineareaseriesoptions_hovermode
          * @docid stackedsplineseriesoptions_hovermode
          * @docid stepareaseriesoptions_hovermode
          * @docid steplineseriesoptions_hovermode
          * @docid stockseriesoptions_hovermode
		  * @docid commonpolarchartseriesoptions_hovermode 
		  * @docid areapolarseriesoptions_hovermode
		  * @docid barpolarseriesoptions_hovermode
		  * @docid linepolarseriesoptions_hovermode
          * @docid stackedbarpolarseriesoptions_hovermode
          */
        hoverMode?: string;
        /**
		* @docid commonseriesoptions_hoverstyle 
		* @docid commonpolarchartseriesoptions_hoverstyle
        * @docid stepareaseriesoptions_hoverstyle
		*/
        hoverStyle?: {
            /**
			* @docid commonseriesoptions_hoverstyle_border
			* @docid commonpolarchartseriesoptions_hoverstyle_border
            * @docid stepareaseriesoptions_hoverstyle_border
			*/
            border?: viz.core.DashedBorder;
            /**
			* @docid commonseriesoptions_hoverstyle_color 
			* @docid commonpolarchartseriesoptions_hoverstyle_color 
			*/
            color?: string;
            /**
			* @docid commonseriesoptions_hoverstyle_dashstyle 
			* @docid commonpolarchartseriesoptions_hoverstyle_dashstyle 
			*/
            dashStyle?: string;
            /**
			* @docid commonseriesoptions_hoverstyle_hatching 
			* @docid commonpolarchartseriesoptions_hoverstyle_hatching 
			*/
            hatching?: viz.core.Hatching;
            /**
			* @docid commonseriesoptions_hoverstyle_width 
			* @docid commonpolarchartseriesoptions_hoverstyle_width 
			*/
            width?: number;
        };
        /**
		* @docid commonseriesoptions_ignoreemptypoints 
		* @docid commonpolarchartseriesoptions_ignoreemptypoints 
		*/
        ignoreEmptyPoints?: boolean;
        /**
		* @docid commonseriesoptions_maxlabelcount 
		* @docid commonpolarchartseriesoptions_maxlabelcount
		*/
        maxLabelCount?: number;
        /**
		* @docid commonseriesoptions_minbarsize
		* @docid commonpolarchartseriesoptions_minbarsize
		*/
        minBarSize?: number;
        /**
		* @docid commonseriesoptions_opacity
		* @docid commonpolarchartseriesoptions_opacity
		*/
        opacity?: number;
        /** 
          * @docid commonpolarchartseriesoptions_selectionmode
          * @docid areapolarseriesoptions_selectionmode
          * @docid barpolarseriesoptions_selectionmode
          * @docid linepolarseriesoptions_selectionmode
          * @docid stackedbarpolarseriesoptions_selectionmode
          * @docid commonseriesoptions_selectionmode 
          * @docid areaseriesoptions_selectionmode
          * @docid barseriesoptions_selectionmode
          * @docid bubbleseriesoptions_selectionmode
          * @docid candlestickseriesoptions_selectionmode
          * @docid fullstackedareaseriesoptions_selectionmode
          * @docid fullstackedbarseriesoptions_selectionmode
          * @docid fullstackedlineseriesoptions_selectionmode
          * @docid fullstackedsplineareaseriesoptions_selectionmode
          * @docid fullstackedsplineseriesoptions_selectionmode
          * @docid lineseriesoptions_selectionmode
          * @docid rangeareaseriesoptions_selectionmode
          * @docid rangebarseriesoptions_selectionmode
          * @docid splineareaseriesoptions_selectionmode
          * @docid splineseriesoptions_selectionmode
          * @docid stackedareaseriesoptions_selectionmode
          * @docid stackedbarseriesoptions_selectionmode
          * @docid stackedlineseriesoptions_selectionmode
          * @docid stackedsplineareaseriesoptions_selectionmode
          * @docid stackedsplineseriesoptions_selectionmode
          * @docid stepareaseriesoptions_selectionmode
          * @docid steplineseriesoptions_selectionmode
          * @docid stockseriesoptions_selectionmode
          */
        selectionMode?: string;
        /**
		* @docid commonseriesoptions_selectionstyle
		* @docid commonpolarchartseriesoptions_selectionstyle
		* @docid stepareaseriesoptions_selectionStyle
		*/
        selectionStyle?: {
            /**
			* @docid commonseriesoptions_selectionstyle_border
			* @docid commonpolarchartseriesoptions_selectionstyle_border
			* @docid stepareaseriesoptions_selectionStyle_border
			*/
            border?: viz.core.DashedBorder;
            /**
			* @docid commonseriesoptions_selectionstyle_color 
			* @docid commonpolarchartseriesoptions_selectionstyle_color 
			*/
            color?: string;
            /**
			* @docid commonseriesoptions_selectionstyle_dashstyle 
			* @docid commonpolarchartseriesoptions_selectionstyle_dashstyle 
			*/
            dashStyle?: string;
            /**
			* @docid commonseriesoptions_selectionstyle_hatching 
			* @docid commonpolarchartseriesoptions_selectionstyle_hatching 
			*/
            hatching?: viz.core.Hatching;
            /**
			* @docid commonseriesoptions_selectionstyle_width 
			* @docid commonpolarchartseriesoptions_selectionstyle_width 
			*/
            width?: number;
        };
        /**
		* @docid commonseriesoptions_showinlegend 
		* @docid commonpolarchartseriesoptions_showinlegend 
		*/
        showInLegend?: boolean;
        /**
		* @docid commonseriesoptions_stack
		* @docid commonpolarchartseriesoptions_stack 
		*/
        stack?: string;
        /**
		* @docid commonseriesoptions_tagfield 
		* @docid commonpolarchartseriesoptions_tagfield 
		*/
        tagField?: string;
        /**
		* @docid commonseriesoptions_valuefield 
		* @docid commonpolarchartseriesoptions_valuefield 
		*/
        valueField?: string;
        /**
		* @docid commonseriesoptions_visible 
		* @docid commonpolarchartseriesoptions_visible 
		*/
        visible?: boolean;
        /**
		* @docid commonseriesoptions_width 
		* @docid commonpolarchartseriesoptions_width 
		*/
        width?: number;
		/**
		* @docid commonseriesoptions_valueerrorbar 
		* @docid commonpolarchartseriesoptions_valueerrorbar 
		*/
		valueErrorBar?: {
			/**
			* @docid commonseriesoptions_valueerrorbar_displaymode 
			* @docid commonpolarchartseriesoptions_valueerrorbar_displaymode 
			*/
			displayMode?: string;
			/**
			* @docid commonseriesoptions_valueerrorbar_lowvaluefield 
			* @docid commonpolarchartseriesoptions_valueerrorbar_lowvaluefield 
			*/
			lowValueField?: string;
			/**
			* @docid commonseriesoptions_valueerrorbar_highvaluefield 
			* @docid commonpolarchartseriesoptions_valueerrorbar_highvaluefield 
			*/
			highValueField?: string;
			/**
			* @docid commonseriesoptions_valueerrorbar_type 
			* @docid commonpolarchartseriesoptions_valueerrorbar_type 
			*/
			type?: string;
			/**
			* @docid commonseriesoptions_valueerrorbar_value 
			* @docid commonpolarchartseriesoptions_valueerrorbar_value 
			*/
			value?: number;
			/**
			* @docid commonseriesoptions_valueerrorbar_color 
			* @docid commonpolarchartseriesoptions_valueerrorbar_color
			*/
			color?: string;
			/**
			* @docid commonseriesoptions_valueerrorbar_opacity 
			* @docid commonpolarchartseriesoptions_valueerrorbar_opacity 
			*/
			opacity?: number;
			/**
			* @docid commonseriesoptions_valueerrorbar_edgelength 
			* @docid commonpolarchartseriesoptions_valueerrorbar_edgelength 
			*/
            edgeLength?: number;
			/**
			* @docid commonseriesoptions_valueerrorbar_linewidth 
			* @docid commonpolarchartseriesoptions_valueerrorbar_linewidth 
			*/
			lineWidth?: number;
		};
	}
	export interface CommonPointOptions {
			/**
			* @docid commonseriesoptions_point_border 
			* @docid commonpolarchartseriesoptions_point_border 
			*/
            border?: viz.core.Border;
            /**
			* @docid commonseriesoptions_point_color 
			* @docid commonpolarchartseriesoptions_point_color 
			*/
            color?: string;
            /**
			* @docid commonseriesoptions_point_hovermode 
			* @docid commonpolarchartseriesoptions_point_hovermode 
			*/
            hoverMode?: string;
            /**
			* @docid commonseriesoptions_point_hoverstyle
			* @docid commonpolarchartseriesoptions_point_hoverstyle
			*/
            hoverStyle?: {
                /**
				* @docid commonseriesoptions_point_hoverstyle_border 
				* @docid commonpolarchartseriesoptions_point_hoverstyle_border
				*/
                border?: viz.core.Border;
                /**
				* @docid commonseriesoptions_point_hoverstyle_color 
				* @docid commonpolarchartseriesoptions_point_hoverstyle_color
				*/
                color?: string;
                /**
				* @docid commonseriesoptions_point_hoverstyle_size
				* @docid commonpolarchartseriesoptions_point_hoverstyle_size
				*/
                size?: number;
            };
            /**
			* @docid commonseriesoptions_point_selectionmode 
			* @docid commonpolarchartseriesoptions_point_selectionmode 
			*/
            selectionMode?: string;
            /**
			* @docid commonseriesoptions_point_selectionstyle 
			* @docid commonpolarchartseriesoptions_point_selectionstyle 
			*/
            selectionStyle?: {
                /**
				* @docid commonseriesoptions_point_selectionstyle_border 
				* @docid commonpolarchartseriesoptions_point_selectionstyle_border 
				*/
                border?: viz.core.Border;
                /**
				* @docid commonseriesoptions_point_selectionstyle_color 
				* @docid commonpolarchartseriesoptions_point_selectionstyle_color 
				*/
                color?: string;
                /**
				* @docid commonseriesoptions_point_selectionstyle_size 
				* @docid commonpolarchartseriesoptions_point_selectionstyle_size 
				*/
                size?: number;
            };
            /**
			* @docid commonseriesoptions_point_size 
			* @docid commonpolarchartseriesoptions_point_size 
			*/
            size?: number;
            /**
			* @docid commonseriesoptions_point_symbol 
			* @docid commonpolarchartseriesoptions_point_symbol 
			*/
            symbol?: string;
            /** 
              * @docid commonseriesoptions_point_visible
              * @docid commonpolarchartseriesoptions_point_visible 
              * @docid areaseriesoptions_point_visible
              * @docid fullstackedareaseriesoptions_point_visible
              * @docid fullstackedsplineareaseriesoptions_point_visible
              * @docid rangeareaseriesoptions_point_visible
              * @docid splineareaseriesoptions_point_visible
              * @docid stackedareaseriesoptions_point_visible
              * @docid stackedsplineareaseriesoptions_point_visible
              * @docid stepareaseriesoptions_point_visible
              * @docid areapolarseriesoptions_point_visible
              */
            visible?: boolean;
	}
	export interface ChartCommonPointOptions extends CommonPointOptions {
			/** @docid commonseriesoptions_point_image */
            image?: {
                /** @docid commonseriesoptions_point_image_height */
                height?: any;
                /** @docid_ignore commonseriesoptions_point_image_height_rangemaxpoint */
                /** @docid_ignore commonseriesoptions_point_image_height_rangeminpoint */
                /** @docid commonseriesoptions_point_image_url */
                url?: any;
                /** @docid_ignore commonseriesoptions_point_image_url_rangemaxpoint */
                /** @docid_ignore commonseriesoptions_point_image_url_rangeminpoint */
                /** @docid commonseriesoptions_point_image_width */
                width?: any;
                /** @docid_ignore commonseriesoptions_point_image_width_rangemaxpoint */
                /** @docid_ignore commonseriesoptions_point_image_width_rangeminpoint */
            };
	}
	export interface PolarCommonPointOptions extends CommonPointOptions {
			/** @docid commonpolarchartseriesoptions_point_image */
            image?: {
                /** @docid commonpolarchartseriesoptions_point_image_height */
                height?: number;
                /** @docid commonpolarchartseriesoptions_point_image_url */
                url?: string;
                /** @docid commonpolarchartseriesoptions_point_image_width */
                width?: number;
            };
	}
    /** @docid commonseries */
    export interface CommonSeriesConfig extends BaseCommonSeriesConfig {
        /** @docid commonseriesoptions_closevaluefield */
        closeValueField?: string;
        /** @docid commonseriesoptions_cornerradius */
        cornerRadius?: number;
        /** @docid commonseriesoptions_highvaluefield */
        highValueField?: string;
        /** @docid commonseriesoptions_innercolor */
        innerColor?: string;
        /** @docid commonseriesoptions_lowvaluefield */
        lowValueField?: string;
        /** @docid commonseriesoptions_openvaluefield */
        openValueField?: string;
        /** @docid commonseriesoptions_pane */
        pane?: string;
        /**
        * @docid commonseriesoptions_point
        * @docid fullstackedareaseriesoptions_point
        * @docid fullstackedsplineareaseriesoptions_point
        * @docid rangeareaseriesoptions_point
        * @docid splineareaseriesoptions_point
        * @docid stackedareaseriesoptions_point
        * @docid stackedsplineareaseriesoptions_point
        * @docid stepareaseriesoptions_point
        * @docid areaseriesoptions_point
        */
        point?: ChartCommonPointOptions;
        /** @docid commonseriesoptions_rangevalue1field */
        rangeValue1Field?: string;
        /** @docid commonseriesoptions_rangevalue2field */
        rangeValue2Field?: string;
        /** @docid commonseriesoptions_reduction */
        reduction?: {
            /** @docid commonseriesoptions_reduction_color */
            color?: string;
            /** @docid commonseriesoptions_reduction_level */
            level?: string;
        };
        /** @docid commonseriesoptions_sizefield */
        sizeField?: string;
    }
    export interface CommonSeriesSettings extends CommonSeriesConfig {
        /** @docid dxchartoptions_commonseriessettings_area */
        area?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_bar */
        bar?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_bubble */
        bubble?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_candlestick */
        candlestick?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_fullstackedarea */
        fullstackedarea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_fullstackedsplinearea */
        fullstackedsplinearea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_fullstackedbar */
        fullstackedbar?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_fullstackedline */
        fullstackedline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_fullstackedspline */
        fullstackedspline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_line */
        line?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_rangearea */
        rangearea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_rangebar */
        rangebar?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_scatter */
        scatter?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_spline */
        spline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_splinearea */
        splinearea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stackedarea */
        stackedarea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stackedsplinearea */
        stackedsplinearea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stackedbar */
        stackedbar?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stackedline */
        stackedline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stackedspline */
        stackedspline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_steparea */
        steparea?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stepline */
        stepline?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_stock */
        stock?: CommonSeriesConfig;
        /** @docid dxchartoptions_commonseriessettings_type */
        type?: string;
    }
    export interface SeriesConfig extends CommonSeriesConfig {
        /** @docid dxchartoptions_series_name */
        name?: string;
        /** @docid dxchartoptions_series_tag */
        tag?: any;
        /** @docid dxchartoptions_series_type */
        type?: string;
    }
	/** @docid commonpolarchartseries */
	export interface CommonPolarSeriesConfig extends BaseCommonSeriesConfig {
		/** @docid commonpolarchartseriesoptions_closed */
        closed?: boolean;
        /**
         * @docid commonpolarchartseriesoptions_label
         * @docid stackedbarpolarseriesoptions_label
         */
        label?: SeriesConfigLabel;
        /** 
        * @docid commonpolarchartseriesoptions_point
        * @docid areapolarseriesoptions_point
        */
        point?: PolarCommonPointOptions;
	}
	export interface CommonPolarSeriesSettings extends CommonPolarSeriesConfig {
        /** @docid dxpolarchartoptions_commonseriessettings_area */
        area?: CommonPolarSeriesConfig;
        /** @docid dxpolarchartoptions_commonseriessettings_bar */
        bar?: CommonPolarSeriesConfig;
        /** @docid dxpolarchartoptions_commonseriessettings_line */
        line?: CommonPolarSeriesConfig;
        /** @docid dxpolarchartoptions_commonseriessettings_scatter */
        scatter?: CommonPolarSeriesConfig;
        /** @docid dxpolarchartoptions_commonseriessettings_stackedbar */
        stackedbar?: CommonPolarSeriesConfig;
        /** @docid dxpolarchartoptions_commonseriessettings_type */
        type?: string;
    }
    export interface PolarSeriesConfig extends CommonPolarSeriesConfig {
        /** @docid dxpolarchartoptions_series_name */
        name?: string;
        /** @docid dxpolarchartoptions_series_tag */
        tag?: any;
        /** @docid dxpolarchartoptions_series_type */
        type?: string;
    }
    /** @docid_ignore areaseries */
    /** @docid_ignore barseries */
    /** @docid_ignore bubbleseries */
    /** @docid_ignore candlestickseries */
    /** @docid_ignore fullstackedareaseries */
    /** @docid_ignore fullstackedbarseries */
    /** @docid_ignore fullstackedlineseries */
    /** @docid_ignore fullstackedsplineareaseries */
    /** @docid_ignore fullstackedsplineseries */
    /** @docid_ignore lineseries */
    /** @docid_ignore rangeareaseries */
    /** @docid_ignore rangebarseries */
    /** @docid_ignore scatterseries */
    /** @docid_ignore splineareaseries */
    /** @docid_ignore splineseries */
    /** @docid_ignore stackedareaseries */
    /** @docid_ignore stackedbarseries */
    /** @docid_ignore stackedlineseries */
    /** @docid_ignore stackedsplineareaseries */
    /** @docid_ignore stackedsplineseries */
    /** @docid_ignore stepareaseries */
    /** @docid_ignore steplineseries */
    /** @docid_ignore stockseries */
    /** @docid_ignore areapolarseries */
    /** @docid_ignore barpolarseries */
    /** @docid_ignore linepolarseries */
    /** @docid_ignore scatterpolarseries */
    /** @docid_ignore stackedbarpolarseries */
    export interface PieSeriesConfigLabel extends BaseSeriesConfigLabel {
        /** @docid commonpiechartseriesoptions_label_radialoffset */
        radialOffset?: number;
        /** @docid commonpiechartseriesoptions_label_percentprecision */
        percentPrecision?: number;
    }
    /** @docid commonpiechartseries */
    export interface CommonPieSeriesConfig {
        /** @docid commonpiechartseriesoptions_argumentfield */
        argumentField?: string;
        /** @docid commonpiechartseriesoptions_argumentType */
        argumentType?: string;
        /** @docid commonpiechartseriesoptions_border */
        border?: viz.core.DashedBorder;
        /** @docid commonpiechartseriesoptions_color */
        color?: string;
        /** @docid commonpiechartseriesoptions_hovermode */
        hoverMode?: string;
        /** @docid commonpiechartseriesoptions_hoverstyle */
        hoverStyle?: {
            /** @docid commonpiechartseriesoptions_hoverstyle_border */
            border?: viz.core.DashedBorder;
            /** @docid commonpiechartseriesoptions_hoverstyle_color */
            color?: string;
            /** @docid commonpiechartseriesoptions_hoverstyle_hatching */
            hatching?: viz.core.Hatching;
        };
        /** @docid commonpiechartseriesoptions_innerradius */
        innerRadius?: number;
        /** @docid commonpiechartseriesoptions_label */
        label?: PieSeriesConfigLabel;
        /** @docid commonpiechartseriesoptions_maxlabelcount */
        maxLabelCount?: number;
        /** @docid commonpiechartseriesoptions_minsegmentsize */
        minSegmentSize?: number;
        /** @docid commonpiechartseriesoptions_segmentsdirection */
        segmentsDirection?: string;
        /** @docid commonpiechartseriesoptions_selectionmode */
        selectionMode?: string;
        /** @docid commonpiechartseriesoptions_selectionstyle */
        selectionStyle?: {
            /** @docid commonpiechartseriesoptions_selectionstyle_border */
            border?: viz.core.DashedBorder;
            /** @docid commonpiechartseriesoptions_selectionstyle_color */
            color?: string;
            /** @docid commonpiechartseriesoptions_selectionstyle_hatching */
            hatching?: viz.core.Hatching;
        };
        /** @docid commonpiechartseriesoptions_smallvaluesgrouping */
        smallValuesGrouping?: {
            /** @docid commonpiechartseriesoptions_smallvaluesgrouping_groupname */
            groupName?: string;
            /** @docid commonpiechartseriesoptions_smallvaluesgrouping_mode */
            mode?: string;
            /** @docid commonpiechartseriesoptions_smallvaluesgrouping_threshold */
            threshold?: number;
            /** @docid commonpiechartseriesoptions_smallvaluesgrouping_topcount */
            topCount?: number;
        };
        /** @docid commonpiechartseriesoptions_startangle */
        startAngle?: number;
        /** @docid commonpiechartseriesoptions_tagfield */
        tagField?: string;
        /** @docid commonpiechartseriesoptions_valuefield */
        valueField?: string;
    }
    export interface PieSeriesConfig extends CommonPieSeriesConfig {
        /** @docid dxpiechartoptions_series_type */
        type?: string;
    }
    /** @docid_ignore pieseries */
    /** @docid_ignore doughnutseries */
    export interface SeriesTemplate {
        /** 
          * @docid dxchartoptions_seriestemplate_customizeSeries 
          * @docid dxrangeselectoroptions_chart_seriestemplate_customizeSeries
          */
        customizeSeries?: (seriesName: string) => SeriesConfig;
        /** 
          * @docid dxchartoptions_seriestemplate_nameField 
          * @docid dxrangeselectoroptions_chart_seriestemplate_nameField
          */
        nameField?: string;
    }
	export interface PolarSeriesTemplate {
        /** @docid dxpolarchartoptions_seriestemplate_customizeSeries */
        customizeSeries?: (seriesName: string) => PolarSeriesConfig;
        /** @docid dxpolarchartoptions_seriestemplate_nameField */
        nameField?: string;
    }
    export interface ChartCommonConstantLineLabel {
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font */
        font?: viz.core.Font;
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_label_position */
        position?: string;
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_label_visible */
        visible?: boolean;
    }
    export interface PolarCommonConstantLineLabel {
        /** @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_visible */
        visible?: boolean;
		/** @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font */
        font?: viz.core.Font;
	}
	export interface ConstantLineStyle {
		/** 
		* @docid dxchartoptions_commonaxissettings_constantlinestyle_color 
		* @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_color 
		*/
        color?: string;
        /** 
		* @docid dxchartoptions_commonaxissettings_constantlinestyle_dashstyle 
		* @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_dashstyle 
		*/
        dashStyle?: string;
        /**
		* @docid dxchartoptions_commonaxissettings_constantlinestyle_width 
		* @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_width 
		*/
        width?: number;
	}
	export interface ChartCommonConstantLineStyle extends ConstantLineStyle {
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_label */
        label?: ChartCommonConstantLineLabel;
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_paddingleftright */
        paddingLeftRight?: number;
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle_paddingtopbottom */
        paddingTopBottom?: number;
    }
	export interface PolarCommonConstantLineStyle extends ConstantLineStyle {
		/** @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label */
        label?: PolarCommonConstantLineLabel;
	}
	export interface CommonAxisLabel {
		/** 
		* @docid dxchartoptions_commonaxissettings_label_font 
		* @docid dxpolarchartoptions_commonaxissettings_label_font 
		*/
        font?: viz.core.Font;
        /** 
		* @docid dxchartoptions_commonaxissettings_label_indentfromaxis 
		* @docid dxpolarchartoptions_commonaxissettings_label_indentfromaxis 
		*/
        indentFromAxis?: number;
        /** 
		* @docid dxchartoptions_commonaxissettings_label_visible
		* @docid dxpolarchartoptions_commonaxissettings_label_visible
		*/
        visible?: boolean;
	}
    export interface ChartCommonAxisLabel extends CommonAxisLabel {
        /** @docid dxchartoptions_commonaxissettings_label_alignment */
        alignment?: string;
		/** @docid dxchartoptions_commonaxissettings_label_overlappingBehavior */
        overlappingBehavior?: {
			/** @docid dxchartoptions_commonaxissettings_label_overlappingBehavior_mode */
            mode?: string;
            /** @docid dxchartoptions_commonaxissettings_label_overlappingBehavior_rotationangle */
            rotationAngle?: number;
            /** @docid dxchartoptions_commonaxissettings_label_overlappingBehavior_staggeringSpacing */
            staggeringSpacing?: number;
        };
    }
    export interface PolarCommonAxisLabel extends CommonAxisLabel {
        /** @docid dxpolarchartoptions_commonaxissettings_label_overlappingBehavior */
        overlappingBehavior?: string;
    }
	export interface CommonAxisTitle {
        /** @docid dxchartoptions_commonaxissettings_title_font */
        font?: viz.core.Font;
        /** @docid dxchartoptions_commonaxissettings_title_margin */
        margin?: number;
    }
    export interface BaseCommonAxisSettings {
        /**
		* @docid dxchartoptions_commonaxissettings_color
		* @docid dxpolarchartoptions_commonaxissettings_color
		*/
        color?: string;
		/**
		* @docid dxchartoptions_commonaxissettings_discreteaxisdivisionMode
		* @docid dxpolarchartoptions_commonaxissettings_discreteaxisdivisionMode
		*/
        discreteAxisDivisionMode?: string;
        /** 
		* @docid dxchartoptions_commonaxissettings_grid 
		* @docid dxpolarchartoptions_commonaxissettings_grid 
		*/
        grid?: {
            /**
			* @docid dxchartoptions_commonaxissettings_grid_color 
			* @docid dxpolarchartoptions_commonaxissettings_grid_color 
			*/
            color?: string;
            /** 
			* @docid dxchartoptions_commonaxissettings_grid_opacity
			* @docid dxpolarchartoptions_commonaxissettings_grid_opacity  
			*/
            opacity?: number;
            /**
			* @docid dxchartoptions_commonaxissettings_grid_visible 
			* @docid dxpolarchartoptions_commonaxissettings_grid_visible
			*/
            visible?: boolean;
            /** 
			* @docid dxchartoptions_commonaxissettings_grid_width
			* @docid dxpolarchartoptions_commonaxissettings_grid_width
			*/
            width?: number;
        };
		/** 
		* @docid dxchartoptions_commonaxissettings_minorgrid 
		* @docid dxpolarchartoptions_commonaxissettings_minorgrid 
		*/
        minorGrid?: {
            /** 
			* @docid dxchartoptions_commonaxissettings_minorgrid_color 
			* @docid dxpolarchartoptions_commonaxissettings_minorgrid_color 
			*/
            color?: string;
            /** 
			* @docid dxchartoptions_commonaxissettings_minorgrid_opacity 
			* @docid dxpolarchartoptions_commonaxissettings_minorgrid_opacity 
			*/
            opacity?: number;
            /** 
			* @docid dxchartoptions_commonaxissettings_minorgrid_visible 
			* @docid dxpolarchartoptions_commonaxissettings_minorgrid_visible 
			*/
            visible?: boolean;
            /** 
			* @docid dxchartoptions_commonaxissettings_minorgrid_width 
			* @docid dxpolarchartoptions_commonaxissettings_minorgrid_width 
			*/
            width?: number;
        };
        /** 
		* @docid dxchartoptions_commonaxissettings_inverted 
		* @docid dxpolarchartoptions_commonaxissettings_inverted 
		*/
        inverted?: boolean;
        /**
		* @docid dxchartoptions_commonaxissettings_opacity 
		* @docid dxpolarchartoptions_commonaxissettings_opacity 
		*/
        opacity?: number;
        /**
		* @docid dxchartoptions_commonaxissettings_setticksatunitbeginning
		* @docid dxpolarchartoptions_commonaxissettings_setticksatunitbeginning  
		*/
        setTicksAtUnitBeginning?: boolean;
        /**
		* @docid dxchartoptions_commonaxissettings_tick 
		* @docid dxpolarchartoptions_commonaxissettings_tick 
		*/
        tick?: {
            /**
			* @docid dxchartoptions_commonaxissettings_tick_color 
			* @docid dxpolarchartoptions_commonaxissettings_tick_color 
			*/
            color?: string;
            /** 
			* @docid dxchartoptions_commonaxissettings_tick_opacity 
			* @docid dxpolarchartoptions_commonaxissettings_tick_opacity 
			*/
            opacity?: number;
            /**
			* @docid dxchartoptions_commonaxissettings_tick_visible
			* @docid dxpolarchartoptions_commonaxissettings_tick_visible 
			*/
            visible?: boolean;
        };
		/**
		* @docid dxchartoptions_commonaxissettings_minortick 
		* @docid dxpolarchartoptions_commonaxissettings_minortick 
		*/
        minorTick?: {
            /**
			* @docid dxchartoptions_commonaxissettings_minortick_color 
			* @docid dxpolarchartoptions_commonaxissettings_minortick_color 
			*/
            color?: string;
            /**
			* @docid dxchartoptions_commonaxissettings_minortick_opacity 
			* @docid dxpolarchartoptions_commonaxissettings_minortick_opacity 
			*/
            opacity?: number;
            /**
			* @docid dxchartoptions_commonaxissettings_minortick_visible 
			* @docid dxpolarchartoptions_commonaxissettings_minortick_visible 
			*/
            visible?: boolean;
        };
        /**
		* @docid dxchartoptions_commonaxissettings_visible 
		* @docid dxpolarchartoptions_commonaxissettings_visible 
		*/
        visible?: boolean;
        /**
		* @docid dxchartoptions_commonaxissettings_width 
		* @docid dxpolarchartoptions_commonaxissettings_width 
		*/
        width?: number;
    }
	export interface ChartCommonAxisSettings extends BaseCommonAxisSettings {
        /** @docid dxchartoptions_commonaxissettings_constantlinestyle */
        constantLineStyle?: ChartCommonConstantLineStyle;
        /** @docid dxchartoptions_commonaxissettings_label */
        label?: ChartCommonAxisLabel;
        /** @docid dxchartoptions_commonaxissettings_maxvaluemargin */
		maxValueMargin?: number;
        /** @docid dxchartoptions_commonaxissettings_minvaluemargin */
		minValueMargin?: number;
        /** @docid dxchartoptions_commonaxissettings_placeholdersize */
        placeholderSize?: number;
		/** @docid dxchartoptions_commonaxissettings_stripstyle */
        stripStyle?: {
            /** @docid dxchartoptions_commonaxissettings_stripstyle_label */
            label?: {
                /** @docid dxchartoptions_commonaxissettings_stripstyle_label_font */
                font?: viz.core.Font;
                /** @docid dxchartoptions_commonaxissettings_stripstyle_label_horizontalalignment */
                horizontalAlignment?: string;
                /** @docid dxchartoptions_commonaxissettings_stripstyle_label_verticalalignment */
                verticalAlignment?: string;
            };
            /** @docid dxchartoptions_commonaxissettings_stripstyle_paddingleftright */
            paddingLeftRight?: number;
            /** @docid dxchartoptions_commonaxissettings_stripstyle_paddingtopbottom */
            paddingTopBottom?: number;
        };
        /** @docid dxchartoptions_commonaxissettings_title */
        title?: CommonAxisTitle;
        /** @docid dxchartoptions_commonaxissettings_valuemarginsenabled */
        valueMarginsEnabled?: boolean;
    }
	export interface PolarCommonAxisSettings extends BaseCommonAxisSettings {
        /** @docid dxpolarchartoptions_commonaxissettings_constantlinestyle */
        constantLineStyle?: PolarCommonConstantLineStyle;
        /** @docid dxpolarchartoptions_commonaxissettings_label */
        label?: PolarCommonAxisLabel;
        /** @docid dxpolarchartoptions_commonaxissettings_stripstyle */
        stripStyle?: {
            /** @docid dxpolarchartoptions_commonaxissettings_stripstyle_label */
            label?: {
                /** @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font */
                font?: viz.core.Font;
            };
        };
    }
    export interface ChartConstantLineLabel extends ChartCommonConstantLineLabel {
        /** 
        * @docid dxchartoptions_argumentaxis_constantlinestyle_label_horizontalalignment 
        * @docid dxchartoptions_valueaxis_constantlinestyle_label_horizontalalignment
        */
        horizontalAlignment?: string;
        /** 
        * @docid dxchartoptions_argumentaxis_constantlinestyle_label_verticalalignment 
        * @docid dxchartoptions_valueaxis_constantlinestyle_label_verticalalignment
        */
        verticalAlignment?: string;
        /** 
        * @docid dxchartoptions_argumentaxis_constantlines_label_text
        * @docid dxchartoptions_valueaxis_constantlines_label_text
        */
        text?: string;
    }
	export interface PolarConstantLineLabel extends PolarCommonConstantLineLabel {
        /** 
        * @docid dxpolarchartoptions_argumentaxis_constantlines_label_text
        * @docid dxpolarchartoptions_valueaxis_constantlines_label_text
        */
        text?: string;
    }
	export interface AxisLabel {
		  /** 
          * @docid dxchartoptions_argumentaxis_label_customizehint 
          * @docid dxchartoptions_valueaxis_label_customizehint
		  * @docid dxpolarchartoptions_argumentaxis_label_customizehint 
          * @docid dxpolarchartoptions_valueaxis_label_customizehint
          */
        customizeHint?: (argument: { value: any; valueText: string }) => string;
          /** 
          * @docid dxchartoptions_argumentaxis_label_customizetext 
          * @docid dxchartoptions_valueaxis_label_customizetext
          * @docid dxpolarchartoptions_argumentaxis_label_customizetext 
          * @docid dxpolarchartoptions_valueaxis_label_customizetext
          */
        customizeText?: (argument: { value: any; valueText: string }) => string;
          /** 
          * @docid dxchartoptions_argumentaxis_label_format 
          * @docid dxchartoptions_valueaxis_label_format
          * @docid dxpolarchartoptions_argumentaxis_label_format 
          * @docid dxpolarchartoptions_valueaxis_label_format
          */
        format?: string;
          /** 
          * @docid dxchartoptions_argumentaxis_label_precision 
          * @docid dxchartoptions_valueaxis_label_precision
          * @docid dxpolarchartoptions_argumentaxis_label_precision 
          * @docid dxpolarchartoptions_valueaxis_label_precision
          */
        precision?: number;
	}
    export interface ChartAxisLabel extends ChartCommonAxisLabel, AxisLabel {}
	export interface PolarAxisLabel extends PolarCommonAxisLabel, AxisLabel {}
    export interface AxisTitle extends CommonAxisTitle {
        /** 
        * @docid dxchartoptions_argumentaxis_title_text 
        * @docid dxchartoptions_valueaxis_title_text
        */
        text?: string;
    }
    export interface ChartConstantLineStyle extends ChartCommonConstantLineStyle {
        /** 
        * @docid dxchartoptions_argumentaxis_constantlinestyle_label
        * @docid dxchartoptions_valueaxis_constantlinestyle_label
		*/
        label?: ChartConstantLineLabel;
    }
    export interface ChartConstantLine extends ChartConstantLineStyle {
		/** 
		* @docid dxchartoptions_argumentaxis_constantlines_label 
		* @docid dxchartoptions_valueaxis_constantlines_label
		*/
        label?: ChartConstantLineLabel;
        /** 
        * @docid dxchartoptions_argumentaxis_constantlines_value 
        * @docid dxchartoptions_valueaxis_constantlines_value
        */
        value?: any;
	}
	export interface PolarConstantLine extends PolarCommonConstantLineStyle {
	/** 
		* @docid dxpolarchartoptions_argumentaxis_constantlines_label 
		* @docid dxpolarchartoptions_valueaxis_constantlines_label
		*/
        label?: PolarConstantLineLabel;
        /** 
        * @docid dxpolarchartoptions_argumentaxis_constantlines_value 
        * @docid dxpolarchartoptions_valueaxis_constantlines_value
        */
        value?: any;
	}
	export interface Axis {
	    /** 
        * @docid dxchartoptions_argumentaxis_axisdivisionfactor 
        * @docid dxchartoptions_valueaxis_axisdivisionfactor
        * @docid dxpolarchartoptions_argumentaxis_axisdivisionfactor 
        * @docid dxpolarchartoptions_valueaxis_axisdivisionfactor
        */
        axisDivisionFactor?: number;
        /** 
        * @docid dxchartoptions_argumentaxis_categories 
        * @docid dxchartoptions_valueaxis_categories
        * @docid dxpolarchartoptions_argumentaxis_categories 
        * @docid dxpolarchartoptions_valueaxis_categories
        */
        categories?: Array<any>;
        /** 
        * @docid dxchartoptions_argumentaxis_logarithmbase 
        * @docid dxchartoptions_valueaxis_logarithmbase
        * @docid dxpolarchartoptions_argumentaxis_logarithmbase 
        * @docid dxpolarchartoptions_valueaxis_logarithmbase
        */
        logarithmBase?: number;
        /** 
        * @docid dxchartoptions_argumentaxis_tickInterval 
        * @docid dxchartoptions_valueaxis_tickInterval
        * @docid dxpolarchartoptions_argumentaxis_tickInterval 
        * @docid dxpolarchartoptions_valueaxis_tickInterval
        */
        tickInterval?: any;
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_years */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_quarters */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_months */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_days */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_hours */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_minutes */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_seconds */
        /** @docid_ignore dxchartoptions_argumentaxis_tickInterval_milliseconds */
		/** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_years */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_quarters */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_months */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_days */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_hours */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_minutes */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_seconds */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_tickInterval_milliseconds */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_years */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_quarters */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_months */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_days */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_hours */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_minutes */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_seconds */
        /** @docid_ignore dxchartoptions_valueaxis_tickInterval_milliseconds */
		/** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_years */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_quarters */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_months */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_days */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_hours */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_minutes */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_seconds */
        /** @docid_ignore dxpolarchartoptions_valueaxis_tickInterval_milliseconds */
        /** 
          * @docid dxchartoptions_argumentaxis_minortickinterval
          * @docid dxchartoptions_valueaxis_minortickinterval
          * @docid dxpolarchartoptions_argumentaxis_minortickinterval
          * @docid dxpolarchartoptions_valueaxis_minortickinterval
          */
        minorTickInterval?: any;
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_years */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_quarters */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_months */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_days */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_hours */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_minutes */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_seconds */
        /** @docid_ignore dxchartoptions_argumentaxis_minortickinterval_milliseconds */
		/** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_years */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_quarters */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_months */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_days */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_hours */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_minutes */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_seconds */
        /** @docid_ignore dxpolarchartoptions_argumentaxis_minortickinterval_milliseconds */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_years */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_quarters */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_months */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_days */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_hours */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_minutes */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_seconds */
        /** @docid_ignore dxchartoptions_valueaxis_minortickinterval_milliseconds */
		/** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_years */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_quarters */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_months */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_days */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_hours */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_minutes */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_seconds */
        /** @docid_ignore dxpolarchartoptions_valueaxis_minortickinterval_milliseconds */
        /** 
        * @docid dxchartoptions_argumentaxis_minortickcount
        * @docid dxchartoptions_valueaxis_minortickcount
        * @docid dxpolarchartoptions_argumentaxis_minortickcount
        * @docid dxpolarchartoptions_valueaxis_minortickcount
        */
        minorTickCount?: number;
        /** 
          * @docid dxchartoptions_argumentaxis_type 
          * @docid dxchartoptions_valueaxis_type
          * @docid dxpolarchartoptions_argumentaxis_type 
          * @docid dxpolarchartoptions_valueaxis_type
          */
        type?: string;
		/** 
          * @docid dxchartoptions_valueaxis_pane
          */
        pane?: string;
        /** 
        * @docid dxchartoptions_argumentaxis_strips 
        * @docid dxchartoptions_valueaxis_strips
        * @docid dxpolarchartoptions_argumentaxis_strips 
        * @docid dxpolarchartoptions_valueaxis_strips
        */
        strips?: Array<Strip>;
	}
    export interface ChartAxis extends ChartCommonAxisSettings, Axis {
        /** 
          * @docid dxchartoptions_argumentaxis_constantlines 
          * @docid dxchartoptions_valueaxis_constantlines
          */
        constantLines?: Array<ChartConstantLine>;
        /** 
          * @docid dxchartoptions_argumentaxis_constantlinestyle 
          * @docid dxchartoptions_valueaxis_constantlinestyle
          */
        constantLineStyle?: ChartCommonConstantLineStyle;
        /** 
          * @docid dxchartoptions_argumentaxis_label 
          * @docid dxchartoptions_valueaxis_label
          */
        label?: ChartAxisLabel;
        /** 
          * @docid dxchartoptions_argumentaxis_max 
          * @docid dxchartoptions_valueaxis_max
          */
        max?: any;
        /** 
          * @docid dxchartoptions_argumentaxis_min 
          * @docid dxchartoptions_valueaxis_min
          */
        min?: any;
        /** 
          * @docid dxchartoptions_argumentaxis_position 
          * @docid dxchartoptions_valueaxis_position
          */
        position?: string;
        /** 
          * @docid dxchartoptions_argumentaxis_title 
          * @docid dxchartoptions_valueaxis_title
          */
        title?: AxisTitle;
    }
	export interface PolarAxis extends PolarCommonAxisSettings, Axis {
        /** 
          * @docid dxpolarchartoptions_argumentaxis_constantlines 
          * @docid dxpolarchartoptions_valueaxis_constantlines
          */
        constantLines?: Array<PolarConstantLine>;
        /** 
          * @docid dxpolarchartoptions_argumentaxis_label 
          * @docid dxpolarchartoptions_valueaxis_label
          */
        label?: PolarAxisLabel;
    }
	export interface ArgumentAxis {
	    /** 
		* @docid dxchartoptions_argumentaxis_argumenttype 
		* @docid dxpolarchartoptions_argumentaxis_argumenttype
		*/
        argumentType?: string;
        /**
		* @docid dxchartoptions_argumentaxis_hovermode 
		* @docid dxpolarchartoptions_argumentaxis_hovermode
		*/
        hoverMode?: string;
	}
    export interface ChartArgumentAxis extends ChartAxis, ArgumentAxis {}
	export interface PolarArgumentAxis extends PolarAxis, ArgumentAxis {
	    /** @docid dxpolarchartoptions_argumentaxis_startangle */
        startAngle?: number;
        /** @docid dxpolarchartoptions_argumentaxis_firstpointonstartangle */
        firstPointOnStartAngle?: boolean;
        /** @docid dxpolarchartoptions_argumentaxis_period */
        period?: number;
	}
	export interface ValueAxis {
        /** @docid dxchartoptions_valueaxis_name */
        name?: string;
        /** 
		* @docid dxchartoptions_valueaxis_showZero 
		* @docid dxpolarchartoptions_valueaxis_showZero 
		*/
        showZero?: boolean;
        /**
		* @docid dxchartoptions_valueaxis_valuetype 
		* @docid dxpolarchartoptions_valueaxis_valuetype 
		*/
        valueType?: string;
		}
    export interface ChartValueAxis extends ChartAxis, ValueAxis {
        /** @docid dxchartoptions_valueaxis_multipleaxesspacing */
        multipleAxesSpacing?: number;
        /** @docid dxchartoptions_valueaxis_synchronizedvalue */
        synchronizedValue?: number;
    }
	export interface PolarValueAxis extends PolarAxis, ValueAxis {
	    /** @docid dxpolarchartoptions_valueaxis_valuemarginsenabled */
	    valueMarginsEnabled?: boolean;
		/** @docid dxpolarchartoptions_valueaxis_maxvaluemargin */
        maxValueMargin?: number;
        /** @docid dxpolarchartoptions_valueaxis_minvaluemargin */
        minValueMargin?: number;
		/** @docid dxpolarchartoptions_valueaxis_tick */
		tick?: {
			/** @docid dxpolarchartoptions_valueaxis_tick_visible */
			visible?: boolean;
		}
	}
    export interface CommonPane {
        /** @docid dxchartoptions_commonpanesettings_backgroundcolor */
        backgroundColor?: string;
        /** @docid dxchartoptions_commonpanesettings_border */
        border?: PaneBorder;
    }
    export interface Pane extends CommonPane {
        /** @docid dxchartoptions_panes_name */
        name?: string;
    }
    export interface PaneBorder extends viz.core.DashedBorderWithOpacity {
        /** @docid dxchartoptions_commonpanesettings_border_bottom */
        bottom?: boolean;
        /** @docid dxchartoptions_commonpanesettings_border_left */
        left?: boolean;
        /** @docid dxchartoptions_commonpanesettings_border_right */
        right?: boolean;
        /** @docid dxchartoptions_commonpanesettings_border_top */
        top?: boolean;
    }
    export interface ChartAnimation extends viz.core.Animation {
        /** @docid basechartoptions_animation_maxpointcountsupported */
        maxPointCountSupported?: number;
    }
    export interface BaseChartTooltip extends viz.core.Tooltip {
        /** @docid basechartoptions_tooltip_argumentformat */
        argumentFormat?: string;
        /** @docid basechartoptions_tooltip_argumentprecision */
        argumentPrecision?: number;
        /** @docid basechartoptions_tooltip_percentprecision */
        percentPrecision?: number;
    }
    export interface BaseChartOptions<TPoint> extends viz.core.BaseWidgetOptions {
        /** @docid_ignore dxpolarchartoptions_done */
        /** @docid basechartoptions_adaptiveLayout */
        adaptiveLayout?: {
            /** @docid basechartoptions_adaptiveLayout_width */
            width?: number;
            /** @docid basechartoptions_adaptiveLayout_height */
            height?: number;
            /** @docid basechartoptions_adaptiveLayout_keepLabels */
            keepLabels?: boolean;
        };
        /** @docid basechartoptions_animation */
        animation?: ChartAnimation;
        /** @docid basechartoptions_customizelabel */
        customizeLabel?: (labelInfo: Object) => Object;
        /** @docid basechartoptions_customizepoint */
        customizePoint?: (pointInfo: Object) => Object;
        /** @docid basechartoptions_datasource */
        dataSource?: any;
        /** @docid basechartoptions_done */
        done?: Function;
        /** @docid basechartoptions_loadingindicator */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** @docid basechartoptions_legend */
        legend?: core.BaseLegend;
        /** @docid basechartoptions_margin */
        margin?: viz.core.Margins;
        /** 
          * @docid basechartoptions_palette 
          * @docid dxpiechartoptions_palette
          */
        palette?: any;
        /** @docid basechartoptions_ondone */
        onDone?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        /** @docid basechartoptions_onpointclick */
        onPointClick?: any;
        /** @docid basechartoptions_pointclick */
        pointClick?: any;
        /** @docid basechartoptions_onpointhoverchanged */
        onPointHoverChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TPoint;
        }) => void;
        /** @docid basechartoptions_pointhoverchanged */
        pointHoverChanged?: (point: TPoint) => void;
        /** @docid basechartoptions_onpointselectionchanged */
        onPointSelectionChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TPoint;
        }) => void;
        /** @docid basechartoptions_pointselectionchanged */
        pointSelectionChanged?: (point: TPoint) => void;
        /** @docid basechartoptions_pointSelectionMode */
        pointSelectionMode?: string;
        /** @docid basechartoptions_redrawonresize */
        redrawOnResize?: boolean;
        /** @docid basechartoptions_series */
        series?: any;
        /** @docid basechartoptions_size */
        size?: viz.core.Size;
        /** @docid basechartoptions_title */
        title?: {
            /** @docid basechartoptions_title_font */
            font?: viz.core.Font;
            /** @docid basechartoptions_title_horizontalalignment */
            horizontalAlignment?: string;
            /** @docid basechartoptions_title_verticalalignment */
            verticalAlignment?: string;
            /** @docid basechartoptions_title_margin */
            margin?: viz.core.Margins;
            /** @docid basechartoptions_title_placeholdersize */
            placeholderSize?: number;
            /** @docid basechartoptions_title_text */
            text?: string;
        };
        /** @docid basechartoptions_tooltip */
        tooltip?: BaseChartTooltip;
        /** @docid basechartoptions_ontooltipshown */
        onTooltipShown?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        /** @docid basechartoptions_ontooltiphidden */
        onTooltipHidden?: (e: {
            component: BaseChart;
            element: Element;
        }) => void;
        /** @docid basechartoptions_tooltipHidden */
        tooltipHidden?: (point: TPoint) => void;
        /** @docid basechartoptions_tooltipShown */
        tooltipShown?: (point: TPoint) => void;
    }
    /** @docid basechart **/
    export class BaseChart extends viz.core.BaseWidget {
        /** @docid basechartmethods_clearselection */
        clearSelection(): void;
        /** @docid basechartmethods_getsize */
        getSize(): { width: number; height: number };
        /** @docid basechartmethods_showLoadingIndicator */
        showLoadingIndicator(): void;
        /** @docid basechartmethods_hideLoadingIndicator */
        hideLoadingIndicator(): void;
        /** @docid basechartmethods_hideTooltip */
        hideTooltip(): void;
        /** @docid basechartmethods_render */
        render(renderOptions?: {
            force?: boolean;
            animate?: boolean;
            asyncSeriesRendering?: boolean;
        }): void;
    }
		export interface AdvancedLegend extends core.BaseLegend {
        /** 
		* @docid dxchartoptions_legend_customizehint
		* @docid dxpolarchartoptions_legend_customizehint
		*/
        customizeHint?: (seriesInfo: { seriesName: string; seriesIndex: number; seriesColor: string; }) => string;
        /** 
		* @docid dxchartoptions_legend_customizetext
		* @docid dxpolarchartoptions_legend_customizetext 
		*/
        customizeText?: (seriesInfo: { seriesName: string; seriesIndex: number; seriesColor: string; }) => string;
        /** 
		* @docid dxchartoptions_legend_hovermode 
		* @docid dxpolarchartoptions_legend_hovermode 
		*/
        hoverMode?: string;
    }
    export interface AdvancedOptions<TPoint, TSeries> extends BaseChartOptions<TPoint> {
        /**
        * @docid dxchartoptions_onargumentaxisclick
        * @docid dxpolarchartoptions_onargumentaxisclick 
        */
        onArgumentAxisClick?: any;
        /**
        *  @docid dxchartoptions_containerbackgroundcolor
        *  @docid dxpolarchartoptions_containerbackgroundcolor
        */
        containerBackgroundColor?: string;
        /**
        * @docid dxchartoptions_dataPrepareSettings 
        * @docid dxpolarchartoptions_dataPrepareSettings 
        */
        dataPrepareSettings?: {
            /**
            * @docid dxchartoptions_dataPrepareSettings_checkTypeForAllData 
            * @docid dxpolarchartoptions_dataPrepareSettings_checkTypeForAllData 
            */
            checkTypeForAllData?: boolean;
            /** 
            * @docid dxchartoptions_dataPrepareSettings_convertToAxisDataType 
            * @docid dxpolarchartoptions_dataPrepareSettings_convertToAxisDataType 
            */
            convertToAxisDataType?: boolean;
            /** 
            * @docid dxchartoptions_dataPrepareSettings_sortingMethod 
            * @docid dxpolarchartoptions_dataPrepareSettings_sortingMethod 
            */
            sortingMethod?: any;
        };
        /** 
        * @docid dxchartoptions_onlegendclick 
        * @docid dxpolarchartoptions_onlegendclick 
        */
        onLegendClick?: any;
        /** 
        * @docid dxchartoptions_onseriesclick 
        * @docid dxpolarchartoptions_onseriesclick 
        */
        onSeriesClick?: any;
        /** 
        * @docid dxchartoptions_onserieshoverchanged 
        * @docid dxpolarchartoptions_onserieshoverchanged 
        */
        onSeriesHoverChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TSeries;
        }) => void;
        /**
        * @docid dxchartoptions_onseriesselectionchanged 
        * @docid dxpolarchartoptions_onseriesselectionchanged 
        */
        onSeriesSelectionChanged?: (e: {
            component: BaseChart;
            element: Element;
            target: TSeries;
        }) => void;
        /** 
        * @docid dxchartoptions_seriesSelectionMode 
        * @docid dxpolarchartoptions_seriesSelectionMode 
        */
        seriesSelectionMode?: string;
        /**
        * @docid dxchartoptions_resolvelabeloverlapping 
        * @docid dxpolarchartoptions_resolvelabeloverlapping 
        */
        resolveLabelOverlapping?: string; 
    }
    export interface Legend extends AdvancedLegend {
        /** @docid dxchartoptions_legend_position */
        position?: string;
    }
    export interface ChartTooltip extends BaseChartTooltip {
        /** @docid dxchartoptions_tooltip_location */
        location?: string;
        /** @docid dxchartoptions_tooltip_shared */
        shared?: boolean;
    }
    export interface dxChartOptions extends AdvancedOptions<ChartPoint, ChartSeries> {
        /** @docid dxchartoptions_equalbarwidth */
        equalBarWidth?: any;
        /** @docid_ignore dxchartoptions_equalbarwidth_spacing */
        /** @docid_ignore dxchartoptions_equalbarwidth_width */
        /** @docid dxchartoptions_adaptiveLayout */
        adaptiveLayout?: {
            /** @docid dxchartoptions_adaptiveLayout_keepLabels */
            keepLabels?: boolean;
        };
        /** @docid dxchartoptions_synchronizemultiaxes */
        synchronizeMultiAxes?: boolean;
        /** @docid dxchartoptions_useAggregation */
        useAggregation?: boolean;
        /** @docid dxchartoptions_adjustonzoom */
        adjustOnZoom?: boolean;
        /** @docid dxchartoptions_argumentaxis */
        argumentAxis?: ChartArgumentAxis;
        /** @docid dxchartoptions_argumentaxisclick */
        argumentAxisClick?: any;
        /** @docid dxchartoptions_commonaxissettings */
        commonAxisSettings?: ChartCommonAxisSettings;
        /** @docid dxchartoptions_commonpanesettings */
        commonPaneSettings?: CommonPane;
        /** @docid dxchartoptions_commonseriessettings */
        commonSeriesSettings?: CommonSeriesSettings;
        /** @docid dxchartoptions_crosshair */
        crosshair?: {
            /** @docid dxchartoptions_crosshair_color */
            color?: string;
            /** @docid dxchartoptions_crosshair_dashstyle */
            dashStyle?: string;
            /** @docid dxchartoptions_crosshair_enabled */
            enabled?: boolean;
            /** @docid dxchartoptions_crosshair_opacity */
            opacity?: number;
            /** @docid dxchartoptions_crosshair_width */
            width?: number;
            /** @docid dxchartoptions_crosshair_horizontalline */
            horizontalLine?: CrosshaierWithLabel;
            /** @docid dxchartoptions_crosshair_verticalline */
            verticalLine?: CrosshaierWithLabel;
            /** @docid dxchartoptions_crosshair_label */
            label?: {
                /** @docid dxchartoptions_crosshair_label_backgroundcolor */
                backgroundColor?: string;
                /** @docid dxchartoptions_crosshair_label_visible */
                visible?: boolean;
                /** @docid dxchartoptions_crosshair_label_font */
                font?: viz.core.Font;
            }
        };
        /** @docid dxchartoptions_defaultpane */
        defaultPane?: string;
        /** @docid dxchartoptions_maxbubblesize */
        maxBubbleSize?: number;
        /** @docid dxchartoptions_minbubblesize */
        minBubbleSize?: number;
        /** @docid dxchartoptions_panes */
        panes?: Array<Pane>;
        /** @docid dxchartoptions_rotated */
        rotated?: boolean;
        /** @docid dxchartoptions_legend */
        legend?: Legend;
        /** @docid dxchartoptions_series */
        series?: Array<SeriesConfig>;
        /** @docid dxchartoptions_legendclick */
        legendClick?: any;
        /** @docid dxchartoptions_seriesclick */
        seriesClick?: any;
        /** @docid dxchartoptions_serieshoverchanged */
        seriesHoverChanged?: (series: ChartSeries) => void;
        /** @docid dxchartoptions_seriesselectionchanged */
        seriesSelectionChanged?: (series: ChartSeries) => void;
        /** @docid dxchartoptions_seriestemplate */
        seriesTemplate?: SeriesTemplate;
        /** @docid dxchartoptions_tooltip */
        tooltip?: ChartTooltip;
        /** @docid dxchartoptions_valueaxis */
        valueAxis?: Array<ChartValueAxis>;
        /** @docid dxchartoptions_scrollingmode */
        scrollingMode?: string;
        /** @docid dxchartoptions_zoomingmode */
        zoomingMode?: string;
        /** @docid dxchartoptions_scrollbar */
        scrollBar?: {
            /** @docid dxchartoptions_scrollbar_visible */
            visible?: boolean;
            /** @docid dxchartoptions_scrollbar_offset */
            offset?: number;
            /** @docid dxchartoptions_scrollbar_color */
            color?: string;
            /** @docid dxchartoptions_scrollbar_width */
            width?: number;
            /** @docid dxchartoptions_scrollbar_opacity */
            opacity?: number;
            /** @docid dxchartoptions_scrollbar_position */
            position?: string;
        };
    }
    /** @docid dxchart */
    export class dxChart extends BaseChart {
        constructor(element: JQuery, options?: dxChartOptions);
        constructor(element: Element, options?: dxChartOptions);
        /** @docid dxchartmethods_getallseries */
        getAllSeries(): Array<ChartSeries>;
        /** @docid dxchartmethods_getseriesbyname */
        getSeriesByName(seriesName: string): ChartSeries;
        /** @docid dxchartmethods_getseriesbypos */
        getSeriesByPos(seriesIndex: number): ChartSeries;
        /** @docid dxchartmethods_zoomargument */
        zoomArgument(startValue: any, endValue: any): void;
    }
    interface CrosshaierWithLabel extends viz.core.DashedBorderWithOpacity {
        /**
        * @docid dxchartoptions_crosshair_verticalline_label
        * @docid dxchartoptions_crosshair_horizontalline_label
        */
        label?: {
            /** 
            * @docid dxchartoptions_crosshair_verticalline_label_backgroundcolor
            * @docid dxchartoptions_crosshair_horizontalline_label_backgroundcolor 
            */
            backgroundColor?: string;
            /**
            * @docid dxchartoptions_crosshair_verticalline_label_visible
            * @docid dxchartoptions_crosshair_horizontalline_label_visible
            */
            visible?: boolean;
            /**
            * @docid dxchartoptions_crosshair_verticalline_label_font
            * @docid dxchartoptions_crosshair_horizontalline_label_font
            */
            font?: viz.core.Font;
        }
    }
    export interface PolarChartTooltip extends BaseChartTooltip {
        /** @docid dxpolarchartoptions_tooltip_shared */
        shared?: boolean;
    }
    export interface dxPolarChartOptions extends AdvancedOptions<PolarPoint, PolarSeries> {
        /** @docid dxpolarchartoptions_equalbarwidth */
        equalBarWidth?: boolean;
        /** @docid dxpolarchartoptions_adaptiveLayout */
        adaptiveLayout?: {
            /** @docid dxpolarchartoptions_adaptiveLayout_width */
            width?: number;
            /** @docid dxpolarchartoptions_adaptiveLayout_height */
            height?: number;
            /** @docid dxpolarchartoptions_adaptiveLayout_keepLabels */
            keepLabels?: boolean;
        };
	    /** @docid dxpolarchartoptions_usespiderweb */
        useSpiderWeb?: boolean;
        /** @docid dxpolarchartoptions_argumentaxis */
        argumentAxis?: PolarArgumentAxis;
        /** @docid dxpolarchartoptions_commonaxissettings */
        commonAxisSettings?: PolarCommonAxisSettings;
        /** @docid dxpolarchartoptions_commonseriessettings */
        commonSeriesSettings?: CommonPolarSeriesSettings;
        /** @docid dxpolarchartoptions_legend */
        legend?: AdvancedLegend;
        /** @docid dxpolarchartoptions_series */
        series?: Array<PolarSeriesConfig>;
        /** @docid dxpolarchartoptions_seriestemplate */
        seriesTemplate?: PolarSeriesTemplate;
        /** @docid dxpolarchartoptions_tooltip */
        tooltip?: PolarChartTooltip;
        /** @docid dxpolarchartoptions_valueaxis */
        valueAxis?: PolarValueAxis;
        /** @docid_ignore dxpolarchartoptions_drawn */
        /** @docid_ignore dxpolarchartoptions_incidentOccured */
        /** @docid_ignore dxpolarchartoptions_pointClick */
        /** @docid_ignore dxpolarchartoptions_pointHoverChanged */
        /** @docid_ignore dxpolarchartoptions_pointSelectionChanged */
        /** @docid_ignore dxpolarchartoptions_tooltipHidden */
        /** @docid_ignore dxpolarchartoptions_tooltipShown */
    }
    /** @docid dxpolarchart */
    export class dxPolarChart extends BaseChart {
        constructor(element: JQuery, options?: dxPolarChartOptions);
        constructor(element: Element, options?: dxPolarChartOptions);
        /** @docid dxpolarchartmethods_getallseries */
        getAllSeries(): Array<PolarSeries>;
        /** @docid dxpolarchartmethods_getseriesbyname */
        getSeriesByName(seriesName: string): PolarSeries;
        /** @docid dxpolarchartmethods_getseriesbypos */
        getSeriesByPos(seriesIndex: number): PolarSeries;
    }
    export interface PieLegend extends core.BaseLegend {
        /** @docid dxpiechartoptions_legend_hovermode */
        hoverMode?: string;
        /** @docid dxpiechartoptions_legend_customizehint */
        customizeHint?: (pointInfo: { pointName: string; pointIndex: number; pointColor: string; }) => string;
        /** @docid dxpiechartoptions_legend_customizetext */
        customizeText?: (pointInfo: { pointName: string; pointIndex: number; pointColor: string; }) => string;
    }
    export interface dxPieChartOptions extends BaseChartOptions<PiePoint> {
        /** @docid dxpiechartoptions_adaptiveLayout */
        adaptiveLayout?: {
            /** @docid dxpiechartoptions_adaptiveLayout_keepLabels */
            keepLabels?: boolean;
        };
        /** @docid dxpiechartoptions_legend */
        legend?: PieLegend;
        /** @docid dxpiechartoptions_series */
        series?: Array<PieSeriesConfig>;
        /** @docid dxpiechartoptions_diameter */
        diameter?: number;
        /** @docid dxpiechartoptions_onlegendclick */
        onLegendClick?: any;
        /** @docid dxpiechartoptions_legendclick */
        legendClick?: any;
        /** @docid dxpiechartoptions_resolvelabeloverlapping */
        resolveLabelOverlapping?: string; 
    }
    /** @docid dxpiechart */
    export class dxPieChart extends BaseChart {
        constructor(element: JQuery, options?: dxPieChartOptions);
        constructor(element: Element, options?: dxPieChartOptions);
        /** @docid dxpiechartmethods_getseries */
        getSeries(): PieSeries;
    }
}
declare module DevExpress.viz.core  {
    export interface Border {
        /** 
          * @docid commonseriesoptions_border_color
          * @docid commonseriesoptions_hoverstyle_border_color
          * @docid commonseriesoptions_label_border_color
          * @docid commonseriesoptions_point_border_color
          * @docid commonseriesoptions_point_hoverstyle_border_color
          * @docid commonseriesoptions_point_selectionstyle_border_color
          * @docid commonseriesoptions_selectionstyle_border_color
          * @docid basechartoptions_legend_border_color
          * @docid dxvectormapoptions_legends_border_color
          * @docid basechartoptions_tooltip_border_color
          * @docid basegaugeoptions_tooltip_border_color
          * @docid basesparklineoptions_tooltip_border_color
          * @docid dxchartoptions_commonpanesettings_border_color
          * @docid dxchartoptions_crosshair_horizontalline_color
          * @docid dxchartoptions_crosshair_verticalline_color
          * @docid commonpiechartseriesoptions_border_color
          * @docid commonpiechartseriesoptions_hoverstyle_border_color
          * @docid commonpiechartseriesoptions_label_border_color
          * @docid commonpiechartseriesoptions_selectionstyle_border_color
          * @docid dxvectormapoptions_tooltip_border_color
		  * @docid commonpolarchartseriesoptions_border_color
          * @docid commonpolarchartseriesoptions_hoverstyle_border_color
          * @docid commonpolarchartseriesoptions_label_border_color
          * @docid commonpolarchartseriesoptions_point_border_color
          * @docid commonpolarchartseriesoptions_point_hoverstyle_border_color
          * @docid commonpolarchartseriesoptions_point_selectionstyle_border_color
          * @docid commonpolarchartseriesoptions_selectionstyle_border_color
          */
        color?: string;
        /** 
          * @docid commonseriesoptions_border_visible
          * @docid commonseriesoptions_hoverstyle_border_visible
          * @docid commonseriesoptions_label_border_visible
          * @docid commonseriesoptions_point_border_visible
          * @docid commonseriesoptions_point_hoverstyle_border_visible
          * @docid commonseriesoptions_point_selectionstyle_border_visible
          * @docid commonseriesoptions_selectionstyle_border_visible
          * @docid basechartoptions_legend_border_visible
          * @docid dxvectormapoptions_legends_border_visible
          * @docid basechartoptions_tooltip_border_visible
          * @docid basegaugeoptions_tooltip_border_visible
          * @docid basesparklineoptions_tooltip_border_visible
          * @docid dxchartoptions_commonpanesettings_border_visible
          * @docid dxchartoptions_crosshair_horizontalline_visible
          * @docid dxchartoptions_crosshair_verticalline_visible
          * @docid stepareaseriesoptions_selectionstyle_border_visible
          * @docid stepareaseriesoptions_hoverstyle_border_visible
          * @docid stepareaseriesoptions_border_visible
          * @docid commonpiechartseriesoptions_border_visible
          * @docid commonpiechartseriesoptions_hoverstyle_border_visible
          * @docid commonpiechartseriesoptions_label_border_visible
          * @docid commonpiechartseriesoptions_selectionstyle_border_visible
          * @docid dxvectormapoptions_tooltip_border_visible
		  * @docid commonpolarchartseriesoptions_border_visible
          * @docid commonpolarchartseriesoptions_hoverstyle_border_visible
          * @docid commonpolarchartseriesoptions_label_border_visible
          * @docid commonpolarchartseriesoptions_point_border_visible
          * @docid commonpolarchartseriesoptions_point_hoverstyle_border_visible
          * @docid commonpolarchartseriesoptions_point_selectionstyle_border_visible
          * @docid commonpolarchartseriesoptions_selectionstyle_border_visible
          */
        visible?: boolean;
        /** 
          * @docid commonseriesoptions_border_width
          * @docid commonseriesoptions_hoverstyle_border_width
          * @docid commonseriesoptions_label_border_width
          * @docid commonseriesoptions_point_border_width
          * @docid commonseriesoptions_point_hoverstyle_border_width
          * @docid commonseriesoptions_point_selectionstyle_border_width
          * @docid commonseriesoptions_selectionstyle_border_width
          * @docid basechartoptions_legend_border_width
          * @docid dxvectormapoptions_legends_border_width          
          * @docid basechartoptions_tooltip_border_width
          * @docid basegaugeoptions_tooltip_border_width
          * @docid basesparklineoptions_tooltip_border_width
          * @docid dxchartoptions_commonpanesettings_border_width
          * @docid dxchartoptions_crosshair_horizontalline_width
          * @docid dxchartoptions_crosshair_verticalline_width
          * @docid commonpiechartseriesoptions_border_width
          * @docid commonpiechartseriesoptions_hoverstyle_border_width
          * @docid commonpiechartseriesoptions_label_border_width
          * @docid commonpiechartseriesoptions_selectionstyle_border_width 
          * @docid dxvectormapoptions_tooltip_border_width
		  * @docid commonpolarchartseriesoptions_border_width
          * @docid commonpolarchartseriesoptions_hoverstyle_border_width
          * @docid commonpolarchartseriesoptions_label_border_width
          * @docid commonpolarchartseriesoptions_point_border_width
          * @docid commonpolarchartseriesoptions_point_hoverstyle_border_width
          * @docid commonpolarchartseriesoptions_point_selectionstyle_border_width
          * @docid commonpolarchartseriesoptions_selectionstyle_border_width
          */
        width?: number;
    }
    export interface DashedBorder extends Border {
        /** 
          * @docid commonseriesoptions_border_dashstyle
          * @docid commonseriesoptions_label_border_dashstyle
          * @docid basechartoptions_legend_border_dashstyle
          * @docid dxvectormapoptions_legends_border_dashstyle
          * @docid basechartoptions_tooltip_border_dashstyle
          * @docid basegaugeoptions_tooltip_border_dashstyle
          * @docid basesparklineoptions_tooltip_border_dashstyle
          * @docid dxchartoptions_commonpanesettings_border_dashstyle
          * @docid dxchartoptions_crosshair_horizontalline_dashstyle
          * @docid dxchartoptions_crosshair_verticalline_dashstyle
          * @docid commonpiechartseriesoptions_label_border_dashstyle
          * @docid commonseriesoptions_hoverstyle_border_dashstyle
          * @docid commonseriesoptions_selectionstyle_border_dashstyle
          * @docid dxvectormapoptions_tooltip_border_dashstyle
		  * @docid commonpolarchartseriesoptions_border_dashstyle
          * @docid commonpolarchartseriesoptions_label_border_dashstyle
		  * @docid commonpolarchartseriesoptions_hoverstyle_border_dashstyle
          * @docid commonpolarchartseriesoptions_selectionstyle_border_dashstyle
          * @docid commonpiechartseriesoptions_border_dashstyle
          * @docid commonpiechartseriesoptions_hoverstyle_border_dashstyle
          * @docid commonpiechartseriesoptions_selectionstyle_border_dashstyle
          */
        dashStyle?: string;
    }
    export interface DashedBorderWithOpacity extends DashedBorder {
        /** 
          * @docid basechartoptions_legend_border_opacity
          * @docid dxvectormapoptions_legends_border_opacity
          * @docid dxchartoptions_commonpanesettings_border_opacity
          * @docid basechartoptions_tooltip_border_opacity 
          * @docid basegaugeoptions_tooltip_border_opacity
          * @docid basesparklineoptions_tooltip_border_opacity
          * @docid dxchartoptions_crosshair_horizontalline_opacity
          * @docid dxchartoptions_crosshair_verticalline_opacity
          * @docid dxvectormapoptions_tooltip_border_opacity
          */
        opacity?: number;
    }
    export interface Font {
        /** 
          * @docid commonseriesoptions_label_font_color
          * @docid basechartoptions_loadingindicator_font_color
          * @docid basechartoptions_legend_font_color
          * @docid dxvectormapoptions_legends_font_color
          * @docid basechartoptions_title_font_color
          * @docid basechartoptions_tooltip_font_color
          * @docid basegaugeoptions_loadingindicator_font_color
          * @docid basegaugeoptions_scale_label_font_color
          * @docid basegaugeoptions_subtitle_font_color
          * @docid commonIndicatoroptions_text_font_color
          * @docid linearTextCloudoptions_text_font_color
          * @docid circularTextCloudoptions_text_font_color
          * @docid basegaugeoptions_title_font_color
          * @docid basegaugeoptions_tooltip_font_color
          * @docid basesparklineoptions_tooltip_font_color
          * @docid dxbargaugeoptions_label_font_color
          * @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font_color
          * @docid dxchartoptions_commonaxissettings_label_font_color
          * @docid dxchartoptions_commonaxissettings_stripstyle_label_font_color
          * @docid dxchartoptions_commonaxissettings_title_font_color
		  * @docid dxchartoptions_crosshair_label_font_color
		  * @docid dxchartoptions_crosshair_horizontalline_label_font_color
		  * @docid dxchartoptions_crosshair_verticalline_label_font_color
          * @docid commonpiechartseriesoptions_label_font_color
          * @docid dxrangeselectoroptions_loadingindicator_font_color
          * @docid dxrangeselectoroptions_scale_label_font_color
          * @docid dxrangeselectoroptions_slidermarker_font_color
          * @docid dxvectormapoptions_areaSettings_label_font_color
          * @docid dxvectormapoptions_loadingindicator_font_color
          * @docid dxvectormapoptions_markerSettings_label_font_color
          * @docid dxvectormapoptions_tooltip_font_color
		  * @docid commonpolarchartseriesoptions_label_font_color
		  * @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font_color
          * @docid dxpolarchartoptions_commonaxissettings_label_font_color
          * @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font_color
          */
        color?: string;
        /** 
          * @docid commonseriesoptions_label_font_family
          * @docid basechartoptions_loadingindicator_font_family
          * @docid basechartoptions_legend_font_family
          * @docid dxvectormapoptions_legends_font_family
          * @docid basechartoptions_title_font_family
          * @docid basechartoptions_tooltip_font_family
          * @docid basegaugeoptions_loadingindicator_font_family
          * @docid basegaugeoptions_scale_label_font_family
          * @docid basegaugeoptions_subtitle_font_family
          * @docid commonIndicatoroptions_text_font_family
          * @docid basegaugeoptions_title_font_family
          * @docid basegaugeoptions_tooltip_font_family
          * @docid basesparklineoptions_tooltip_font_family
          * @docid dxbargaugeoptions_label_font_family
          * @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font_family
          * @docid dxchartoptions_commonaxissettings_label_font_family
          * @docid dxchartoptions_commonaxissettings_stripstyle_label_font_family
          * @docid dxchartoptions_commonaxissettings_title_font_family
		  * @docid dxchartoptions_crosshair_label_font_family
		  * @docid dxchartoptions_crosshair_horizontalline_label_font_family
		  * @docid dxchartoptions_crosshair_verticalline_label_font_family
          * @docid commonpiechartseriesoptions_label_font_family
          * @docid dxrangeselectoroptions_loadingindicator_font_family
          * @docid dxrangeselectoroptions_scale_label_font_family
          * @docid dxrangeselectoroptions_slidermarker_font_family
          * @docid dxvectormapoptions_areaSettings_label_font_family
          * @docid dxvectormapoptions_loadingindicator_font_family
          * @docid dxvectormapoptions_markerSettings_label_font_family
          * @docid dxvectormapoptions_tooltip_font_family
          * @docid commonpolarchartseriesoptions_label_font_family
          * @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font_family
          * @docid dxpolarchartoptions_commonaxissettings_label_font_family
          * @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font_family
          */
        family?: string;
        /** 
          * @docid commonseriesoptions_label_font_opacity
          * @docid basechartoptions_loadingindicator_font_opacity
          * @docid basechartoptions_legend_font_opacity
          * @docid dxvectormapoptions_legends_font_opacity
          * @docid basechartoptions_title_font_opacity
          * @docid basechartoptions_tooltip_font_opacity
          * @docid basegaugeoptions_loadingindicator_font_opacity
          * @docid basesparklineoptions_tooltip_font_opacity
          * @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font_opacity
          * @docid dxchartoptions_commonaxissettings_label_font_opacity
          * @docid dxchartoptions_commonaxissettings_stripstyle_label_font_opacity
          * @docid dxchartoptions_commonaxissettings_title_font_opacity
		  * @docid dxchartoptions_crosshair_label_font_opacity
		  * @docid dxchartoptions_crosshair_horizontalline_label_font_opacity
		  * @docid dxchartoptions_crosshair_verticalline_label_font_opacity
          * @docid commonpiechartseriesoptions_label_font_opacity 
          * @docid dxrangeselectoroptions_loadingindicator_font_opacity
          * @docid dxrangeselectoroptions_scale_label_font_opacity
          * @docid dxrangeselectoroptions_slidermarker_font_opacity
          * @docid dxvectormapoptions_areaSettings_label_font_opacity
          * @docid dxvectormapoptions_loadingindicator_font_opacity
          * @docid dxvectormapoptions_markerSettings_label_font_opacity
          * @docid dxvectormapoptions_tooltip_font_opacity
          * @docid commonpolarchartseriesoptions_label_font_opacity
          * @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font_opacity
          * @docid dxpolarchartoptions_commonaxissettings_label_font_opacity
          * @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font_opacity
          */
        opacity?: number;
        /** 
          * @docid commonseriesoptions_label_font_size
          * @docid basechartoptions_loadingindicator_font_size
          * @docid basechartoptions_legend_font_size
          * @docid dxvectormapoptions_legends_font_size
          * @docid basechartoptions_title_font_size
          * @docid basechartoptions_tooltip_font_size
          * @docid basegaugeoptions_loadingindicator_font_size
          * @docid basegaugeoptions_scale_label_font_size
          * @docid basegaugeoptions_subtitle_font_size
          * @docid basegaugeoptions_title_font_size
          * @docid basegaugeoptions_tooltip_font_size
          * @docid commonIndicatoroptions_text_font_size
          * @docid circularTextCloudoptions_text_font_size
          * @docid linearTextCloudoptions_text_font_size
          * @docid basesparklineoptions_tooltip_font_size
          * @docid dxbargaugeoptions_label_font_size
          * @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font_size
          * @docid dxchartoptions_commonaxissettings_label_font_size
          * @docid dxchartoptions_commonaxissettings_stripstyle_label_font_size
          * @docid dxchartoptions_commonaxissettings_title_font_size
		  * @docid dxchartoptions_crosshair_label_font_size
		  * @docid dxchartoptions_crosshair_horizontalline_label_font_size
		  * @docid dxchartoptions_crosshair_verticalline_label_font_size
          * @docid commonpiechartseriesoptions_label_font_size
          * @docid dxrangeselectoroptions_loadingindicator_font_size
          * @docid dxrangeselectoroptions_scale_label_font_size
          * @docid dxrangeselectoroptions_slidermarker_font_size
          * @docid dxvectormapoptions_areaSettings_label_font_size
          * @docid dxvectormapoptions_loadingindicator_font_size
          * @docid dxvectormapoptions_markerSettings_label_font_size
          * @docid dxvectormapoptions_tooltip_font_size
          * @docid commonpolarchartseriesoptions_label_font_size
          * @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font_size
          * @docid dxpolarchartoptions_commonaxissettings_label_font_size
          * @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font_size
          */
        size?: any;
        /** 
          * @docid commonseriesoptions_label_font_weight
          * @docid basechartoptions_loadingindicator_font_weight
          * @docid basechartoptions_legend_font_weight
          * @docid dxvectormapoptions_legends_font_weight
          * @docid basechartoptions_title_font_weight
          * @docid basechartoptions_tooltip_font_weight
          * @docid basegaugeoptions_loadingindicator_font_weight
          * @docid basegaugeoptions_scale_label_font_weight
          * @docid basegaugeoptions_subtitle_font_weight
          * @docid basegaugeoptions_title_font_weight
          * @docid basegaugeoptions_tooltip_font_weight
          * @docid commonIndicatoroptions_text_font_weight
          * @docid basesparklineoptions_tooltip_font_weight
          * @docid dxbargaugeoptions_label_font_weight
          * @docid dxchartoptions_commonaxissettings_constantlinestyle_label_font_weight
          * @docid dxchartoptions_commonaxissettings_label_font_weight
          * @docid dxchartoptions_commonaxissettings_stripstyle_label_font_weight
          * @docid dxchartoptions_commonaxissettings_title_font_weight
		  * @docid dxchartoptions_crosshair_label_font_weight
		  * @docid dxchartoptions_crosshair_horizontalline_label_font_weight
		  * @docid dxchartoptions_crosshair_verticalline_label_font_weight
          * @docid commonpiechartseriesoptions_label_font_weight
          * @docid dxrangeselectoroptions_loadingindicator_font_weight
          * @docid dxrangeselectoroptions_scale_label_font_weight
          * @docid dxrangeselectoroptions_slidermarker_font_weight
          * @docid dxvectormapoptions_areaSettings_label_font_weight
          * @docid dxvectormapoptions_loadingindicator_font_weight
          * @docid dxvectormapoptions_markerSettings_label_font_weight
          * @docid dxvectormapoptions_tooltip_font_weight
          * @docid commonpolarchartseriesoptions_label_font_weight
          * @docid dxpolarchartoptions_commonaxissettings_constantlinestyle_label_font_weight
          * @docid dxpolarchartoptions_commonaxissettings_label_font_weight
          * @docid dxpolarchartoptions_commonaxissettings_stripstyle_label_font_weight
          */
        weight?: number;
    }
    export interface Hatching {
        /** 
          * @docid commonseriesoptions_hoverstyle_hatching_direction
          * @docid commonseriesoptions_selectionstyle_hatching_direction
          * @docid commonpiechartseriesoptions_hoverstyle_hatching_direction
          * @docid commonpiechartseriesoptions_selectionstyle_hatching_direction
          * @docid commonpolarchartseriesoptions_hoverstyle_hatching_direction
          * @docid commonpolarchartseriesoptions_selectionstyle_hatching_direction
          */
        direction?: string;
        /** 
          * @docid commonseriesoptions_hoverstyle_hatching_opacity
          * @docid commonseriesoptions_selectionstyle_hatching_opacity
          * @docid commonpiechartseriesoptions_hoverstyle_hatching_opacity
          * @docid commonpiechartseriesoptions_selectionstyle_hatching_opacity
          * @docid commonpolarchartseriesoptions_hoverstyle_hatching_opacity
          * @docid commonpolarchartseriesoptions_selectionstyle_hatching_opacity
          */
        opacity?: number;
        /** 
          * @docid commonseriesoptions_hoverstyle_hatching_step
          * @docid commonseriesoptions_selectionstyle_hatching_step
          * @docid commonpiechartseriesoptions_hoverstyle_hatching_step
          * @docid commonpiechartseriesoptions_selectionstyle_hatching_step
          * @docid commonpolarchartseriesoptions_hoverstyle_hatching_step
          * @docid commonpolarchartseriesoptions_selectionstyle_hatching_step
          */
        step?: number;
        /** 
          * @docid commonseriesoptions_hoverstyle_hatching_width
          * @docid commonseriesoptions_selectionstyle_hatching_width
          * @docid commonpiechartseriesoptions_hoverstyle_hatching_width
          * @docid commonpiechartseriesoptions_selectionstyle_hatching_width
          * @docid commonpolarchartseriesoptions_hoverstyle_hatching_width
          * @docid commonpolarchartseriesoptions_selectionstyle_hatching_width
          */
        width?: number;
    }
    export interface Margins {
        /** 
          * @docid basechartoptions_margin_bottom 
          * @docid basechartoptions_legend_margin_bottom
          * @docid basechartoptions_title_margin_bottom
          * @docid basegaugeoptions_margin_bottom
          * @docid basesparklineoptions_margin_bottom
          * @docid dxrangeselectoroptions_margin_bottom
          * @docid dxvectormapoptions_legends_margin_bottom
          */
        bottom?: number;
        /** 
          * @docid basechartoptions_margin_left 
          * @docid basechartoptions_legend_margin_left
          * @docid basechartoptions_title_margin_left
          * @docid basegaugeoptions_margin_left
          * @docid basesparklineoptions_margin_left
          * @docid dxrangeselectoroptions_margin_left
          * @docid dxvectormapoptions_legends_margin_left
          */
        left?: number;
        /** 
          * @docid basechartoptions_margin_right 
          * @docid basechartoptions_legend_margin_right
          * @docid basechartoptions_title_margin_right
          * @docid basegaugeoptions_margin_right
          * @docid basesparklineoptions_margin_right
          * @docid dxrangeselectoroptions_margin_right
          * @docid dxvectormapoptions_legends_margin_right
          */
        right?: number;
        /** 
          * @docid basechartoptions_margin_top 
          * @docid basechartoptions_legend_margin_top
          * @docid basechartoptions_title_margin_top
          * @docid basegaugeoptions_margin_top
          * @docid basesparklineoptions_margin_top
          * @docid dxrangeselectoroptions_margin_top
          * @docid dxvectormapoptions_legends_margin_top
          */
        top?: number;
    }
    export interface Size {
        /** 
          * @docid basechartoptions_size_width 
          * @docid basegaugeoptions_size_width
          * @docid basesparklineoptions_size_width
          * @docid dxrangeselectoroptions_size_width
          * @docid dxvectormapoptions_size_width
          */
        width?: number;
        /** 
          * @docid basechartoptions_size_height 
          * @docid basegaugeoptions_size_height
          * @docid basesparklineoptions_size_height
          * @docid dxrangeselectoroptions_size_height
          * @docid dxvectormapoptions_size_height
          */
        height?: number;
    }
    export interface Tooltip {
        /** 
          * @docid basechartoptions_tooltip_arrowlength 
          * @docid basegaugeoptions_tooltip_arrowlength
          * @docid basesparklineoptions_tooltip_arrowlength
          * @docid dxvectormapoptions_tooltip_arrowlength
          */
        arrowLength?: number;
        /** 
          * @docid basechartoptions_tooltip_border 
          * @docid basegaugeoptions_tooltip_border
          * @docid basesparklineoptions_tooltip_border
          * @docid dxvectormapoptions_tooltip_border
          */
        border?: viz.core.DashedBorderWithOpacity;
        /** 
          * @docid basechartoptions_tooltip_color 
          * @docid basegaugeoptions_tooltip_color
          * @docid basesparklineoptions_tooltip_color
          * @docid dxvectormapoptions_tooltip_color
          */
        color?: string;
        /** 
          * @docid basechartoptions_tooltip_customizetooltip 
          * @docid basegaugeoptions_tooltip_customizetooltip
          * @docid basesparklineoptions_tooltip_customizetooltip
          * @docid dxvectormapoptions_tooltip_customizetooltip
          */
        customizeTooltip?: (arg: Object) => { color?: string; text?: string };
        /** 
          * @docid basechartoptions_tooltip_enabled 
          * @docid basegaugeoptions_tooltip_enabled
          * @docid basesparklineoptions_tooltip_enabled
          * @docid dxvectormapoptions_tooltip_enabled
          */
        enabled?: boolean;
        /** 
          * @docid basechartoptions_tooltip_font 
          * @docid basegaugeoptions_tooltip_font
          * @docid basesparklineoptions_tooltip_font
          * @docid dxvectormapoptions_tooltip_font
          */
        font?: Font;
        /** 
          * @docid basechartoptions_tooltip_format 
          * @docid basegaugeoptions_tooltip_format
          * @docid basesparklineoptions_tooltip_format
          */
        format?: string;
        /** 
          * @docid basechartoptions_tooltip_opacity 
          * @docid basegaugeoptions_tooltip_opacity
          * @docid basesparklineoptions_tooltip_opacity
          * @docid dxvectormapoptions_tooltip_opacity
          */
        opacity?: number;
        /** 
          * @docid basechartoptions_tooltip_paddingleftright 
          * @docid basegaugeoptions_tooltip_paddingleftright
          * @docid basesparklineoptions_tooltip_paddingleftright
          * @docid dxvectormapoptions_tooltip_paddingleftright
          */
        paddingLeftRight?: number;
        /** 
          * @docid basechartoptions_tooltip_paddingtopbottom 
          * @docid basegaugeoptions_tooltip_paddingtopbottom
          * @docid basesparklineoptions_tooltip_paddingtopbottom
          * @docid dxvectormapoptions_tooltip_paddingtopbottom
          */
        paddingTopBottom?: number;
        /** 
          * @docid basechartoptions_tooltip_precision 
          * @docid basegaugeoptions_tooltip_precision
          * @docid basesparklineoptions_tooltip_precision
          */
        precision?: number;
        /** 
          * @docid basechartoptions_tooltip_shadow 
          * @docid basegaugeoptions_tooltip_shadow
          * @docid basesparklineoptions_tooltip_shadow
          * @docid dxvectormapoptions_tooltip_shadow
          */
        shadow?: {
            /** 
              * @docid basechartoptions_tooltip_shadow_blur 
              * @docid basegaugeoptions_tooltip_shadow_blur
              * @docid basesparklineoptions_tooltip_shadow_blur
              * @docid dxvectormapoptions_tooltip_shadow_blur
              */
            blur?: number;
            /** 
              * @docid basechartoptions_tooltip_shadow_color 
              * @docid basegaugeoptions_tooltip_shadow_color
              * @docid basesparklineoptions_tooltip_shadow_color
              * @docid dxvectormapoptions_tooltip_shadow_color
              */
            color?: string;
            /** 
              * @docid basechartoptions_tooltip_shadow_offsetx 
              * @docid basegaugeoptions_tooltip_shadow_offsetx
              * @docid basesparklineoptions_tooltip_shadow_offsetx
              * @docid dxvectormapoptions_tooltip_shadow_offsetx
              */
            offsetX?: number;
            /** 
              * @docid basechartoptions_tooltip_shadow_offsety 
              * @docid basegaugeoptions_tooltip_shadow_offsety
              * @docid basesparklineoptions_tooltip_shadow_offsety
              * @docid dxvectormapoptions_tooltip_shadow_offsety
              */
            offsetY?: number;
            /** 
              * @docid basechartoptions_tooltip_shadow_opacity 
              * @docid basegaugeoptions_tooltip_shadow_opacity
              * @docid basesparklineoptions_tooltip_shadow_opacity
              * @docid dxvectormapoptions_tooltip_shadow_opacity
              */
            opacity?: number;
        };
    }
    export interface Animation {
        /** 
          * @docid basechartoptions_animation_duration 
          * @docid basegaugeoptions_animation_duration
          */
        duration?: number;
        /** 
          * @docid basechartoptions_animation_easing 
          * @docid basegaugeoptions_animation_easing
          */
        easing?: string;
        /** 
          * @docid basechartoptions_animation_enabled 
          * @docid basegaugeoptions_animation_enabled
          */
        enabled?: boolean;
    }
    export interface LoadingIndicator {
        /** 
          * @docid basechartoptions_loadingindicator_backgroundcolor 
          * @docid basegaugeoptions_loadingindicator_backgroundcolor
          * @docid dxrangeselectoroptions_loadingindicator_backgroundcolor
          * @docid dxvectormapoptions_loadingindicator_backgroundcolor
          */
        backgroundColor?: string;
        /** 
          * @docid basechartoptions_loadingindicator_font 
          * @docid basegaugeoptions_loadingindicator_font
          * @docid dxrangeselectoroptions_loadingindicator_font
          * @docid dxvectormapoptions_loadingindicator_font
          */
        font?: viz.core.Font;
        /** 
          * @docid basechartoptions_loadingindicator_show 
          * @docid basegaugeoptions_loadingindicator_show
          * @docid dxrangeselectoroptions_loadingindicator_show
          * @docid dxvectormapoptions_loadingindicator_show
          */
        show?: boolean;
        /** 
          * @docid basechartoptions_loadingindicator_text 
          * @docid basegaugeoptions_loadingindicator_text
          * @docid dxrangeselectoroptions_loadingindicator_text
          * @docid dxvectormapoptions_loadingindicator_text
          */
        text?: string;
    }
    export interface LegendBorder extends viz.core.DashedBorderWithOpacity {
        /** 
          * @docid basechartoptions_legend_border_cornerradius
          * @docid dxvectormapoptions_legends_border_cornerradius
          */
        cornerRadius?: number;
    }
    export interface BaseLegend {
        /**
          * @docid basechartoptions_legend_backgroundcolor
          * @docid dxvectormapoptions_legends_backgroundcolor
          */
        backgroundColor?: string;
        /**
          * @docid basechartoptions_legend_border
          * @docid dxvectormapoptions_legends_border
          */
        border?: viz.core.LegendBorder;
        /**
          * @docid basechartoptions_legend_columncount
          * @docid dxvectormapoptions_legends_columncount
          */
        columnCount?: number;
        /**
          * @docid basechartoptions_legend_columnitemspacing
          * @docid dxvectormapoptions_legends_columnitemspacing
          */
        columnItemSpacing?: number;
        /**
          * @docid basechartoptions_legend_font
          * @docid dxvectormapoptions_legends_font
          */
        font?: viz.core.Font;
        /**
          * @docid basechartoptions_legend_horizontalalignment
          * @docid dxvectormapoptions_legends_horizontalalignment
          */
        horizontalAlignment?: string;
        /**
          * @docid basechartoptions_legend_itemsalignment
          * @docid dxvectormapoptions_legends_itemsalignment
          */
        itemsAlignment?: string;
        /**
          * @docid basechartoptions_legend_itemtextposition
          * @docid dxvectormapoptions_legends_itemtextposition
          */
        itemTextPosition?: string;
        /**
          * @docid basechartoptions_legend_margin
          * @docid dxvectormapoptions_legends_margin
          */
        margin?: viz.core.Margins;
        /**
          * @docid basechartoptions_legend_markersize
          * @docid dxvectormapoptions_legends_markersize
          */
        markerSize?: number;
        /**
          * @docid basechartoptions_legend_orientation
          * @docid dxvectormapoptions_legends_orientation
          */
        orientation?: string;
        /**
          * @docid basechartoptions_legend_paddingleftright
          * @docid dxvectormapoptions_legends_paddingleftright
          */
        paddingLeftRight?: number;
        /**
          * @docid basechartoptions_legend_paddingtopbottom
          * @docid dxvectormapoptions_legends_paddingtopbottom
          */
        paddingTopBottom?: number;
        /**
          * @docid basechartoptions_legend_rowcount
          * @docid dxvectormapoptions_legends_rowcount
          */
        rowCount?: number;
        /**
          * @docid basechartoptions_legend_rowitemspacing
          * @docid dxvectormapoptions_legends_rowitemspacing
          */
        rowItemSpacing?: number;
        /**
          * @docid basechartoptions_legend_verticalalignment
          * @docid dxvectormapoptions_legends_verticalalignment
          */
        verticalAlignment?: string;
        /** 
          * @docid basechartoptions_legend_visible
          * @docid dxvectormapoptions_legends_visible
          */
        visible?: boolean;
    }
    export interface BaseWidgetOptions {
        /** @docid BaseWidgetOptions_drawn */
        drawn?: (widget: Object) => void;
        /** @docid BaseWidgetOptions_onDrawn */
        onDrawn?: (e: {
            component: BaseWidget;
            element: Element;
        }) => void;
        /** @docid BaseWidgetOptions_incidentoccured */
        incidentOccured?: (incidentInfo: {
            id: string;
            type: string;
            args: any;
            text: string;
            widget: string;
            version: string;
        }) => void;
        /** @docid BaseWidgetOptions_onIncidentoccurred */
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
        /** @docid BaseWidgetOptions_pathmodified */
        pathModified?: boolean;
        /** @docid BaseWidgetOptions_rtlEnabled */
        rtlEnabled?: boolean;
        /** @docid BaseWidgetOptions_theme */
        theme?: string;
    }
    /** @docid BaseWidget */
    export class BaseWidget extends DOMComponent {
        /** @docid_ignore BaseWidgetMethods_defaultOptions */
        /** @docid BaseWidgetMethods_svg */
        svg(): string;
    }
}
declare module DevExpress.viz.gauges  {
    export interface BaseRangeContainer {
        /** @docid basegaugeoptions_rangeContainer_backgroundColor */
        backgroundColor?: string;
        /** @docid basegaugeoptions_rangeContainer_offset */
        offset?: number;
        /** @docid basegaugeoptions_rangeContainer_palette */
        palette?: any;
        /** @docid basegaugeoptions_rangeContainer_ranges */
        ranges?: Array<{ startValue: number; endValue: number; color: string }>;
        /** @docid basegaugeoptions_rangeContainer_ranges_color */
        color?: string;
        /** @docid basegaugeoptions_rangeContainer_ranges_endValue */
        endValue?: number;
        /** @docid basegaugeoptions_rangeContainer_ranges_startValue */
        startValue?: number;
    }
    export interface ScaleTick {
        /** 
          * @docid basegaugeoptions_scale_majorTick_color 
          * @docid basegaugeoptions_scale_minorTick_color
          */
        color?: string;
        /** 
          * @docid basegaugeoptions_scale_majorTick_customTickValues         
          * @docid basegaugeoptions_scale_minorTick_customTickValues
          */
        customTickValues?: Array<any>;
        /** 
          * @docid basegaugeoptions_scale_majorTick_length 
          * @docid basegaugeoptions_scale_minorTick_length
          */
        length?: number;
        /** 
          * @docid basegaugeoptions_scale_majorTick_showCalculatedTicks 
          * @docid basegaugeoptions_scale_minorTick_showCalculatedTicks
          */
        showCalculatedTicks?: boolean;
        /** 
          * @docid basegaugeoptions_scale_majorTick_tickInterval 
          * @docid basegaugeoptions_scale_minorTick_tickInterval
          */
        tickInterval?: number;
        /** 
          * @docid basegaugeoptions_scale_majorTick_visible 
          * @docid basegaugeoptions_scale_minorTick_visible
          */
        visible?: boolean;
        /** 
          * @docid basegaugeoptions_scale_majorTick_width 
          * @docid basegaugeoptions_scale_minorTick_width
          */
        width?: number;
    }
    export interface ScaleMajorTick extends ScaleTick {
        /** @docid basegaugeoptions_scale_majorTick_useTicksAutoArrangement */
        useTicksAutoArrangement?: boolean;
    }
    export interface BaseScaleLabel {
        /** @docid basegaugeoptions_scale_label_useRangeColors */
        useRangeColors?: boolean;
        /** @docid basegaugeoptions_scale_label_customizeText */
        customizeText?: (scaleValue: { value: number; valueText: string }) => string;
        /** @docid basegaugeoptions_scale_label_font */
        font?: viz.core.Font;
        /** @docid basegaugeoptions_scale_label_format */
        format?: string;
        /** @docid basegaugeoptions_scale_label_precision */
        precision?: number;
        /** @docid basegaugeoptions_scale_label_visible */
        visible?: boolean;
    }
    export interface BaseScale {
        /** @docid basegaugeoptions_scale_endValue */
        endValue?: number;
        /** @docid basegaugeoptions_scale_hideFirstLabel */
        hideFirstLabel?: boolean;
        /** @docid basegaugeoptions_scale_hideFirstTick */
        hideFirstTick?: boolean;
        /** @docid basegaugeoptions_scale_hideLastLabel */
        hideLastLabel?: boolean;
        /** @docid basegaugeoptions_scale_hideLastTick */
        hideLastTick?: boolean;
        /** 
          * @docid basegaugeoptions_scale_label
          * @docid dxlineargaugeoptions_scale_label
          * @docid dxcirculargaugeoptions_scale_label
          */
        label?: BaseScaleLabel;
        /** @docid basegaugeoptions_scale_majorTick */
        majorTick?: ScaleMajorTick;
        /** @docid basegaugeoptions_scale_minorTick */
        minorTick?: ScaleTick;
        /** @docid basegaugeoptions_scale_startValue */
        startValue?: number;
    }
    /**
      * @docid_ignore commonIndicator
      * @docid_ignore circularRectangleNeedle
      * @docid_ignore circularTriangleNeedle
      * @docid_ignore circularTwoColorNeedle
      * @docid_ignore circularRangeBar
      * @docid_ignore circularTriangleMarker
      * @docid_ignore circularTextCloud
      * @docid_ignore linearRectangle
      * @docid_ignore linearCircle
      * @docid_ignore linearRhombus
      * @docid_ignore linearRangeBar
      * @docid_ignore linearTriangleMarker
      * @docid_ignore linearTextCloud
      */
    export interface BaseValueIndicator {
        /** 
          * @docid dxcirculargaugeoptions_valueIndicator_type
          * @docid dxcirculargaugeoptions_subvalueIndicator_type
          * @docid dxlineargaugeoptions_valueIndicator_type
          * @docid dxlineargaugeoptions_subvalueIndicator_type
          */
        type?: string;
        /** @docid commonIndicatoroptions_backgroundColor */
        backgroundColor?: string;
        /** @docid commonIndicatoroptions_baseValue */
        baseValue?: number;
        /** @docid commonIndicatoroptions_color */
        color?: string;
        /** @docid commonIndicatoroptions_size */
        size?: number;
        /**
          * @docid commonIndicatoroptions_text 
          * @docid circularTextCloudoptions_text
          * @docid linearTextCloudoptions_text
          */
        text?: {
            /** @docid commonIndicatoroptions_text_customizeText */
            customizeText?: (indicatedValue: { value: number; valueText: string }) => string;
            /**
              * @docid commonIndicatoroptions_text_font
              * @docid linearTextCloudoptions_text_font
              * @docid circularTextCloudoptions_text_font
              */
            font?: viz.core.Font;
            /** @docid commonIndicatoroptions_text_format */
            format?: string;
            /** @docid commonIndicatoroptions_text_indent */
            indent?: number;
            /** @docid commonIndicatoroptions_text_precision */
            precision?: number;
        };
        /**
          * @docid commonIndicatoroptions_offset 
          * @docid linearRectangleoptions_offset
          * @docid linearCircleoptions_offset
          * @docid linearRhombusoptions_offset
          * @docid linearRangeBaroptions_offset
          * @docid linearTriangleMarkeroptions_offset
          * @docid linearTextCloudoptions_offset
          */
        offset?: number;
        /** 
          * @docid commonIndicatoroptions_length 
          * @docid circularTriangleMarkeroptions_length
          * @docid linearTriangleMarkeroptions_length
          */
        length?: number;
        /**
          * @docid commonIndicatoroptions_width
          * @docid linearRectangleoptions_width
          * @docid linearRhombusoptions_width
          * @docid circularTriangleMarkeroptions_width
          * @docid linearTriangleMarkeroptions_width
          */
        width?: number;
        /** @docid commonIndicatoroptions_arrowLength */
        arrowLength?: number;
        /** @docid commonIndicatoroptions_palette */
        palette?: Array<any>;
        /** @docid commonIndicatoroptions_indentFromCenter */
        indentFromCenter?: number;
        /** @docid commonIndicatoroptions_secondColor */
        secondColor?: string;
        /** @docid commonIndicatoroptions_secondFraction */
        secondFraction?: number;
        /** @docid commonIndicatoroptions_spindleSize */
        spindleSize?: number;
        /** @docid commonIndicatoroptions_spindleGapSize */
        spindleGapSize?: number;
        /** @docid commonIndicatoroptions_horizontalOrientation */
        horizontalOrientation?: string;
        /** @docid commonIndicatoroptions_verticalOrientation */
        verticalOrientation?: string;
    }
    export interface SharedGaugeOptions {
        /** 
          * @docid basegaugeoptions_animation 
          * @docid dxbargaugeoptions_animation
          */
        animation?: viz.core.Animation;
        /** 
          * @docid basegaugeoptions_loadingindicator
          * @docid dxbargaugeoptions_loadingindicator 
          */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** 
          * @docid basegaugeoptions_redrawonresize 
          * @docid dxbargaugeoptions_redrawonresize
          */
        redrawOnResize?: boolean;
        /** 
          * @docid basegaugeoptions_size
          * @docid dxbargaugeoptions_size 
          */
        size?: viz.core.Size;
        /** 
          * @docid basegaugeoptions_subtitle 
          * @docid dxbargaugeoptions_subtitle
          */
        subtitle?: {
            /** @docid basegaugeoptions_subtitle_font */
            font?: viz.core.Font;
            /** @docid basegaugeoptions_subtitle_text */
            text?: string;
        };
        /** 
          * @docid basegaugeoptions_title 
          * @docid dxbargaugeoptions_title
          */
        title?: {
            /** @docid basegaugeoptions_title_font */
            font?: viz.core.Font;
            /** @docid basegaugeoptions_title_position */
            position?: string;
            /** @docid basegaugeoptions_title_text */
            text?: string;
        };
        /** 
          * @docid basegaugeoptions_tooltip 
          * @docid dxbargaugeoptions_tooltip
          */
        tooltip?: viz.core.Tooltip;
    }
    export interface BaseGaugeOptions extends viz.core.BaseWidgetOptions, SharedGaugeOptions {
        /** @docid basegaugeoptions_containerBackgroundColor */
        containerBackgroundColor?: string;
        /** @docid basegaugeoptions_margin */
        margin?: viz.core.Margins;
        /** @docid basegaugeoptions_rangeContainer */
        rangeContainer?: BaseRangeContainer;
        /** 
          * @docid basegaugeoptions_scale
          * @docid dxlineargaugeoptions_scale
          * @docid dxcirculargaugeoptions_scale
          */
        scale?: BaseScale;
        /** 
          * @docid dxlineargaugeoptions_subvalueIndicator
          * @docid dxcirculargaugeoptions_subvalueIndicator
          */
        subvalueIndicator?: BaseValueIndicator;
        /** @docid basegaugeoptions_subvalues */
        subvalues?: Array<number>;
        /** @docid basegaugeoptions_value */
        value?: number;
        /** 
          * @docid dxlineargaugeoptions_valueIndicator
          * @docid dxcirculargaugeoptions_valueIndicator
          */
        valueIndicator?: BaseValueIndicator;
    }
    /** @docid basegauge */
    export class dxBaseGauge extends viz.core.BaseWidget {
        /** @docid basegaugemethods_showLoadingIndicator */
        showLoadingIndicator(): void;
        /** @docid basegaugemethods_hideLoadingIndicator */
        hideLoadingIndicator(): void;
        /** @docid basegaugemethods_render */
        render(): void;
        /** @docid basegaugemethods_value#value() */
        value(): number;
        /** @docid basegaugemethods_value#value(value) */
        value(value: number): void;
        /** @docid basegaugemethods_subvalues#subvalues() */
        subvalues(): Array<number>;
        /** @docid basegaugemethods_subvalues#subvalues(subvalues) */
        subvalues(subvalues: Array<number>): void;
    }
    export interface LinearRangeContainer extends BaseRangeContainer {
        /** @docid dxlineargaugeoptions_rangeContainer_horizontalOrientation */
        horizontalOrientation?: string;
        /** @docid dxlineargaugeoptions_rangeContainer_verticalOrientation */
        verticalOrientation?: string;
        /** @docid dxlineargaugeoptions_rangeContainer_width */
        width?: any;
        /** @docid dxlineargaugeoptions_rangeContainer_width_end */
        end?: number;
        /** @docid dxlineargaugeoptions_rangeContainer_width_start */
        start?: number;
    }
    export interface LinearScaleLabel extends BaseScaleLabel {
        /** @docid dxlineargaugeoptions_scale_label_indentFromTick */
        indentFromTick?: number;
    }
    export interface LinearScale extends BaseScale {
        /** @docid dxlineargaugeoptions_scale_horizontalOrientation */
        horizontalOrientation?: string;
        label?: LinearScaleLabel;
        /** @docid dxlineargaugeoptions_scale_verticalOrientation */
        verticalOrientation?: string;
    }
    export interface dxLinearGaugeOptions extends BaseGaugeOptions {
        /** @docid dxlineargaugeoptions_geometry */
        geometry?: {
            /** @docid dxlineargaugeoptions_geometry_orientation */
            orientation?: string;
        };
        /** @docid dxlineargaugeoptions_rangeContainer */
        rangeContainer?: LinearRangeContainer;
        scale?: LinearScale;
    }
    /** @docid dxlineargauge */
    export class dxLinearGauge extends dxBaseGauge {
        constructor(element: JQuery, options?: dxLinearGaugeOptions);
        constructor(element: Element, options?: dxLinearGaugeOptions);
    }
    export interface CircularRangeContainer extends BaseRangeContainer {
        /** @docid dxcirculargaugeoptions_rangeContainer_orientation */
        orientation?: string;
        /** @docid dxcirculargaugeoptions_rangeContainer_width */
        width?: number;
    }
    export interface CircularScaleLabel extends BaseScaleLabel {
        /** @docid dxcirculargaugeoptions_scale_label_indentFromTick */
        indentFromTick?: number;
    }
    export interface CircularScale extends BaseScale {
        label?: CircularScaleLabel;
        /** @docid dxcirculargaugeoptions_scale_orientation */
        orientation?: string;
    }
    export interface dxCircularGaugeOptions extends BaseGaugeOptions {
        /** @docid dxcirculargaugeoptions_geometry */
        geometry?: {
            /** @docid dxcirculargaugeoptions_geometry_endAngle */
            endAngle?: number;
            /** @docid dxcirculargaugeoptions_geometry_startAngle */
            startAngle?: number;
        };
        /** @docid dxcirculargaugeoptions_rangeContainer */
        rangeContainer?: CircularRangeContainer;
        scale?: CircularScale;
    }
    /** @docid dxcirculargauge */
    export class dxCircularGauge extends dxBaseGauge {
        constructor(element: JQuery, options?: dxCircularGaugeOptions);
        constructor(element: Element, options?: dxCircularGaugeOptions);
    }
    export interface dxBarGaugeOptions extends viz.core.BaseWidgetOptions, SharedGaugeOptions {
        /** @docid dxbargaugeoptions_backgroundColor */
        backgroundColor?: string;
        /** @docid dxbargaugeoptions_barSpacing */
        barSpacing?: number;
        /** @docid dxbargaugeoptions_baseValue */
        baseValue?: number;
        /** @docid dxbargaugeoptions_endValue */
        endValue?: number;
        /** @docid dxbargaugeoptions_geometry */
        geometry?: {
            /** @docid dxbargaugeoptions_geometry_endAngle */
            endAngle?: number;
            /** @docid dxbargaugeoptions_geometry_startAngle */
            startAngle?: number;
        };
        /** @docid dxbargaugeoptions_label */
        label?: {
            /** @docid dxbargaugeoptions_label_connectorColor */
            connectorColor?: string;
            /** @docid dxbargaugeoptions_label_connectorWidth */
            connectorWidth?: number;
            /** @docid dxbargaugeoptions_label_customizeText */
            customizeText?: (barValue: { value: number; valueText: string }) => string;
            /** @docid dxbargaugeoptions_label_font */
            font?: viz.core.Font;
            /** @docid dxbargaugeoptions_label_format */
            format?: string;
            /** @docid dxbargaugeoptions_label_indent */
            indent?: number;
            /** @docid dxbargaugeoptions_label_precision */
            precision?: number;
            /** @docid dxbargaugeoptions_label_visible */
            visible?: boolean;
        };
        /** @docid dxbargaugeoptions_palette */
        palette?: string;
        /** @docid dxbargaugeoptions_relativeInnerRadius */
        relativeInnerRadius?: number;
        /** @docid dxbargaugeoptions_startValue */
        startValue?: number;
        /** @docid dxbargaugeoptions_values */
        values?: Array<number>;
    }
    /** @docid dxbargauge */
    export class dxBarGauge extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxBarGaugeOptions);
        constructor(element: Element, options?: dxBarGaugeOptions);
        /** @docid dxbargaugemethods_showLoadingIndicator */
        showLoadingIndicator(): void;
        /** @docid dxbargaugemethods_hideLoadingIndicator */
        hideLoadingIndicator(): void;
        /** @docid dxbargaugemethods_render */
        render(): void;
        /** @docid dxbargaugemethods_values#values() */
        values(): Array<number>;
        /** @docid dxbargaugemethods_values#values(newValues) */
        values(values: Array<number>): void;
    }
}
declare module DevExpress.viz.map  {
    /** @docid areaObjects */
    export interface Area {
        /** @docid areaObjectsfields_type */
        type: string;
        /** @docid areaObjectsmethods_attribute */
        attribute(name: string): any;
        /** @docid areaObjectsmethods_selected#selected() */
        selected(): boolean;
        /** @docid areaObjectsmethods_selected#selected(state) */
        selected(state: boolean): void;
        /** @docid areaObjectsmethods_applySettings */
        applySettings(settings: any): void;
    }
    /** @docid markerObjects */
    export interface Marker {
        /** @docid markerObjectsfields_text */
        text: string;
        /** @docid markerObjectsfields_type */
        type: string;
        /** @docid markerObjectsfields_url */
        url: string;
        /** @docid markerObjectsfields_value */
        value: number;
        /** @docid markerObjectsfields_values */
        values: Array<number>;
        /** @docid markerObjectsmethods_attribute */
        attribute(name: string): any;
        /** @docid markerObjectsmethods_coordinates */
        coordinates(): Array<number>;
        /** @docid markerObjectsmethods_selected#selected() */
        selected(): boolean;
        /** @docid markerObjectsmethods_selected#selected(state) */
        selected(state: boolean): void;
        /** @docid markerObjectsmethods_applySettings */
        applySettings(settings: any): void;
    }
    export interface AreaSettings {
        /** @docid dxvectormapoptions_areaSettings_borderWidth */
        borderWidth?: number;
        /** @docid dxvectormapoptions_areaSettings_borderColor */
        borderColor?: string;
        /** @docid dxvectormapoptions_areaSettings_click */
        click?: any;
        /** @docid dxvectormapoptions_areaSettings_color */
        color?: string;
        /** @docid dxvectormapoptions_areaSettings_customize */
        customize?: (areaInfo: Area) => AreaSettings;
        /** @docid dxvectormapoptions_areaSettings_hoveredBorderColor */
        hoveredBorderColor?: string;
        /** @docid dxvectormapoptions_areaSettings_hoveredBorderWidth */
        hoveredBorderWidth?: number;
        /** @docid dxvectormapoptions_areaSettings_hoveredColor */
        hoveredColor?: string;
        /** @docid dxvectormapoptions_areaSettings_hoverEnabled */
        hoverEnabled?: boolean;
        /** @docid dxvectormapoptions_areaSettings_label */
        label?: {
            /** @docid dxvectormapoptions_areaSettings_label_dataField */
            dataField?: string;
            /** @docid dxvectormapoptions_areaSettings_label_enabled */
            enabled?: boolean;
            /** @docid dxvectormapoptions_areaSettings_label_font */
            font?: viz.core.Font;
        };
        /** @docid dxvectormapoptions_areaSettings_palette */
        palette?: any;
        /** @docid dxvectormapoptions_areaSettings_paletteSize */
        paletteSize?: number;
        /** @docid dxvectormapoptions_areaSettings_colorGroups */
        colorGroups?: Array<number>;
        /** @docid dxvectormapoptions_areaSettings_colorGroupingField */
        colorGroupingField?: string;
        /** @docid dxvectormapoptions_areaSettings_selectedBorderColor */
        selectedBorderColor?: string;
        /** @docid dxvectormapoptions_areaSettings_selectedColor */
        selectedColor?: string;
        /** @docid dxvectormapoptions_areaSettings_selectedBorderWidth */
        selectedBorderWidth?: number;
        /** @docid dxvectormapoptions_areaSettings_selectionChanged */
        selectionChanged?: (area: Area) => void;
        /** @docid dxvectormapoptions_areaSettings_selectionMode */
        selectionMode?: string;
    }
    export interface MarkerSettings {
        /** @docid dxvectormapoptions_markerSettings_borderColor */
        borderColor?: string;
        /** @docid dxvectormapoptions_markerSettings_borderWidth */
        borderWidth?: number;
        /** @docid dxvectormapoptions_markerSettings_click */
        click?: any;
        /** @docid dxvectormapoptions_markerSettings_color */
        color?: string;
        /** @docid dxvectormapoptions_markerSettings_customize */
        customize?: (markerInfo: Marker) => MarkerSettings;
        /** @docid dxvectormapoptions_markerSettings_font */
        font?: Object;
        /** @docid dxvectormapoptions_markerSettings_hoveredBorderWidth */
        hoveredBorderWidth?: number;
        /** @docid dxvectormapoptions_markerSettings_hoveredBorderColor */
        hoveredBorderColor?: string;
        /** @docid dxvectormapoptions_markerSettings_hoveredColor */
        hoveredColor?: string;
        /** @docid dxvectormapoptions_markerSettings_hoverEnabled */
        hoverEnabled?: boolean;
        /** @docid dxvectormapoptions_markerSettings_label */
        label?: {
            /** @docid dxvectormapoptions_markerSettings_label_enabled */
            enabled?: boolean;
            /** @docid dxvectormapoptions_markerSettings_label_font */
            font?: viz.core.Font;
        };
        /** @docid dxvectormapoptions_markerSettings_maxSize */
        maxSize?: number;
        /** @docid dxvectormapoptions_markerSettings_minSize */
        minSize?: number;
        /** @docid dxvectormapoptions_markerSettings_opacity */
        opacity?: number;
        /** @docid dxvectormapoptions_markerSettings_selectedBorderWidth */
        selectedBorderWidth?: number;
        /** @docid dxvectormapoptions_markerSettings_selectedBorderColor */
        selectedBorderColor?: string;
        /** @docid dxvectormapoptions_markerSettings_selectedColor */
        selectedColor?: string;
        /** @docid dxvectormapoptions_markerSettings_selectionChanged */
        selectionChanged?: (marker: Marker) => void;
        /** @docid dxvectormapoptions_markerSettings_selectionMode */
        selectionMode?: string;
        /** @docid dxvectormapoptions_markerSettings_size */
        size?: number;
        /** @docid dxvectormapoptions_markerSettings_type */
        type?: string;
        /** @docid dxvectormapoptions_markerSettings_palette */
        palette?: any;
        /** @docid dxvectormapoptions_markerSettings_colorGroups */
        colorGroups?: Array<number>;
        /** @docid dxvectormapoptions_markerSettings_colorGroupingField */
        colorGroupingField?: string;
        /** @docid dxvectormapoptions_markerSettings_sizeGroups */
        sizeGroups?: Array<number>;
        /** @docid dxvectormapoptions_markerSettings_sizeGroupingField */
        sizeGroupingField?: string;
    }
    export interface dxVectorMapOptions extends viz.core.BaseWidgetOptions {
        /** @docid_ignore dxvectormapoptions_markers_attributes */
        /** @docid_ignore dxvectormapoptions_markers_coordinates */
        /** @docid_ignore dxvectormapoptions_markers_text */
        /** @docid_ignore dxvectormapoptions_markers_url */
        /** @docid_ignore dxvectormapoptions_markers_value */
        /** @docid_ignore dxvectormapoptions_markers_values */
        /** @docid dxvectormapoptions_areaSettings */
        areaSettings?: AreaSettings;
        /** @docid dxvectormapoptions_background */
        background?: {
            /** @docid dxvectormapoptions_background_borderColor */
            borderColor?: string;
            /** @docid dxvectormapoptions_background_color */
            color?: string;
        };
        /** @docid dxvectormapoptions_bounds */
        bounds?: Array<number>;
        /** @docid dxvectormapoptions_controlbar */
        controlBar?: {
            /** @docid dxvectormapoptions_controlbar_borderColor */
            borderColor?: string;
            /** @docid dxvectormapoptions_controlbar_color */
            color?: string;
            /** @docid dxvectormapoptions_controlbar_enabled */
            enabled?: boolean;
            /** @docid dxvectormapoptions_controlbar_margin */
            margin?: number;
            /** @docid dxvectormapoptions_controlbar_horizontalAlignment */
            horizontalAlignment?: string;
            /** @docid dxvectormapoptions_controlbar_verticalAlignment */
            verticalAlignment?: string;
            /** @docid dxvectormapoptions_controlbar_opacity */
            opacity?: number;
        };
        /** @docid dxvectormapoptions_loadingindicator */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** @docid dxvectormapoptions_mapData */
        mapData?: any;
        /** @docid dxvectormapoptions_markers */
        markers?: any;
        /** @docid dxvectormapoptions_markerSettings */
        markerSettings?: MarkerSettings;
        /** @docid dxvectormapoptions_size */
        size?: viz.core.Size;
        /** @docid dxvectormapoptions_tooltip */
        tooltip?: viz.core.Tooltip;
        /** @docid dxvectormapoptions_legends */
        legends?: Array<Legend>;
        /** @docid dxvectormapoptions_wheelEnabled */
        wheelEnabled?: boolean;
        /** @docid dxvectormapoptions_touchEnabled */
        touchEnabled?: boolean;
        /** @docid dxvectormapoptions_zoomingEnabled */
        zoomingEnabled?: boolean;
        /** @docid dxvectormapoptions_center */
        center?: Array<number>;
        /** @docid dxvectormapoptions_centerChanged */
        centerChanged?: (center: Array<number>) => void;
        /** @docid dxvectormapoptions_onCenterChanged */
        onCenterChanged?: (e: {
			center: Array<number>;
			component: dxVectorMap;
			element: Element;
		}) => void;
        /** @docid dxvectormapoptions_zoomFactor */
        zoomFactor?: number;
        /** @docid dxvectormapoptions_maxZoomFactor */
        maxZoomFactor?: number;
        /** @docid dxvectormapoptions_zoomFactorChanged */
        zoomFactorChanged?: (zoomFactor: number) => void;
        /** @docid dxvectormapoptions_onZoomFactorChanged */
        onZoomFactorChanged?: (e: {
            zoomFactor: number;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** @docid dxvectormapoptions_click */
        click?: any;
        /** @docid dxvectormapoptions_onClick */
        onClick?: any;
        /** @docid dxvectormapoptions_onAreaClick */
        onAreaClick?: any;
        /** @docid dxvectormapoptions_onAreaSelectionChanged */
        onAreaSelectionChanged?: (e: {
            target: Area;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** @docid dxvectormapoptions_onMarkerClick */
        onMarkerClick?: any;
        /** @docid dxvectormapoptions_onMarkerSelectionChanged */
        onMarkerSelectionChanged?: (e: {
            target: Marker;
            component: dxVectorMap;
            element: Element;
        }) => void;
        /** @docid dxvectormapoptions_panningEnabled */
        panningEnabled?: boolean;
    }
    export interface Legend extends viz.core.BaseLegend {
        /** @docid dxvectormapoptions_legends_customizetext */
        customizeText?: (itemInfo: { start: number; end: number; index: number; color: string; size: number; }) => string;
        /** @docid dxvectormapoptions_legends_customizehint */
        customizeHint?: (itemInfo: { start: number; end: number; index: number; color: string; size: number }) => string;
        /** @docid dxvectormapoptions_legends_source */
        source?: string;
    }
    /** @docid dxvectormap */
    export class dxVectorMap extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxVectorMapOptions);
        constructor(element: Element, options?: dxVectorMapOptions);
        /** @docid dxvectormapmethods_showLoadingIndicator */
        showLoadingIndicator(): void;
        /** @docid dxvectormapmethods_hideLoadingIndicator */
        hideLoadingIndicator(): void;
        /** @docid dxvectormapmethods_render */
        render(): void;
        /** @docid dxvectormapmethods_center#center() */
        center(): Array<number>;
        /** @docid dxvectormapmethods_center#center(centerCoordinates) */
        center(centerCoordinates: Array<number>): void;
        /** @docid dxvectormapmethods_clearAreaSelection */
        clearAreaSelection(): void;
        /** @docid dxvectormapmethods_clearMarkerSelection */
        clearMarkerSelection(): void;
        /** @docid dxvectormapmethods_clearSelection */
        clearSelection(): void;
        /** @docid dxvectormapmethods_convertCoordinates */
        convertCoordinates(x: number, y: number): Array<number>;
        /** @docid dxvectormapmethods_getAreas */
        getAreas(): Array<Area>;
        /** @docid dxvectormapmethods_getMarkers */
        getMarkers(): Array<Marker>;
        /** @docid dxvectormapmethods_viewport#viewport() */
        viewport(): Array<any>;
        /** @docid dxvectormapmethods_viewport#viewport(viewportCoordinates) */
        viewport(viewportCoordinates: Array<number>): void;
        /** @docid dxvectormapmethods_zoomFactor#zoomFactor() */
        zoomFactor(): number;
        /** @docid dxvectormapmethods_zoomFactor#zoomFactor(zoomFactor) */
        zoomFactor(zoomFactor: number): void;
    }
}
declare module DevExpress.viz.rangeSelector  {
    export interface dxRangeSelectorOptions extends viz.core.BaseWidgetOptions {
        /** @docid dxrangeselectoroptions_background */
        background?: {
            /** @docid dxrangeselectoroptions_background_color */
            color?: string;
            /** @docid dxrangeselectoroptions_background_image */
            image?: {
                /** @docid dxrangeselectoroptions_background_image_location */
                location?: string;
                /** @docid dxrangeselectoroptions_background_image_url */
                url?: string;
            };
            /** @docid dxrangeselectoroptions_background_visible */
            visible?: boolean;
        };
        /** @docid dxrangeselectoroptions_behavior */
        behavior?: {
            /** @docid dxrangeselectoroptions_behavior_allowslidersswap */
            allowSlidersSwap?: boolean;
            /** @docid dxrangeselectoroptions_behavior_animationenabled */
            animationEnabled?: boolean;
            /** @docid dxrangeselectoroptions_behavior_callselectedrangechanged */
            callSelectedRangeChanged?: string;
            /** @docid dxrangeselectoroptions_behavior_manualrangeselectionenabled */
            manualRangeSelectionEnabled?: boolean;
            /** @docid dxrangeselectoroptions_behavior_moveselectedrangebyclick */
            moveSelectedRangeByClick?: boolean;
            /** @docid dxrangeselectoroptions_behavior_snaptoticks */
            snapToTicks?: boolean;
        };
        /** @docid dxrangeselectoroptions_chart */
        chart?: {
            /** @docid dxrangeselectoroptions_chart_bottomindent */
            bottomIndent?: number;
            /** @docid dxrangeselectoroptions_chart_commonseriessettings */
            commonSeriesSettings?: viz.charts.CommonSeriesSettings;
            /** @docid dxrangeselectoroptions_chart_dataPrepareSettings */
            dataPrepareSettings?: {
                /** @docid dxrangeselectoroptions_chart_dataPrepareSettings_checkTypeForAllData */
                checkTypeForAllData?: boolean;
                /** @docid dxrangeselectoroptions_chart_dataPrepareSettings_convertToAxisDataType */
                convertToAxisDataType?: boolean;
                /** @docid dxrangeselectoroptions_chart_dataPrepareSettings_sortingMethod */
                sortingMethod?: any;
            };
            /** @docid dxrangeselectoroptions_chart_equalbarwidth */
            equalBarWidth?: any;
            /** @docid_ignore dxrangeselectoroptions_chart_equalbarwidth_spacing */
            /** @docid_ignore dxrangeselectoroptions_chart_equalbarwidth_width */
            /** @docid dxrangeselectoroptions_chart_series */
            series?: Array<viz.charts.SeriesConfig>;
            /** @docid dxrangeselectoroptions_chart_seriestemplate */
            seriesTemplate?: viz.charts.SeriesTemplate;
            /** @docid dxrangeselectoroptions_chart_topindent */
            topIndent?: number;
            /** @docid dxrangeselectoroptions_chart_useAggregation */
            useAggregation?: boolean;
            /** @docid dxrangeselectoroptions_chart_valueaxis */
            valueAxis?: {
                /** @docid dxrangeselectoroptions_chart_valueaxis_inverted */
                inverted?: boolean;
                /** @docid dxrangeselectoroptions_chart_valueaxis_logarithmbase */
                logarithmBase?: number;
                /** @docid dxrangeselectoroptions_chart_valueaxis_max */
                max?: number;
                /** @docid dxrangeselectoroptions_chart_valueaxis_min */
                min?: number;
                /** @docid dxrangeselectoroptions_chart_valueaxis_type */
                type?: string;
                /** @docid dxrangeselectoroptions_chart_valueaxis_valuetype */
                valueType?: string;
            };
        };
        /** @docid dxrangeselectoroptions_containerbackgroundcolor */
        containerBackgroundColor?: string;
        /** @docid dxrangeselectoroptions_datasource */
        dataSource?: any;
        /** @docid dxrangeselectoroptions_datasourcefield */
        dataSourceField?: string;
        /** @docid dxrangeselectoroptions_loadingindicator */
        loadingIndicator?: viz.core.LoadingIndicator;
        /** @docid dxrangeselectoroptions_margin */
        margin?: viz.core.Margins;
        /** @docid dxrangeselectoroptions_redrawonresize */
        redrawOnResize?: boolean;
        /** @docid dxrangeselectoroptions_scale */
        scale?: {
            /** @docid dxrangeselectoroptions_scale_endvalue */
            endValue?: any;
            /** @docid dxrangeselectoroptions_scale_label */
            label?: {
                /** @docid dxrangeselectoroptions_scale_label_customizetext */
                customizeText?: (scaleValue: { value: any; valueText: string; }) => string;
                /** @docid dxrangeselectoroptions_scale_label_font */
                font?: viz.core.Font;
                /** @docid dxrangeselectoroptions_scale_label_format */
                format?: string;
                /** @docid dxrangeselectoroptions_scale_label_precision */
                precision?: number;
                /** @docid dxrangeselectoroptions_scale_label_topindent */
                topIndent?: number;
                /** @docid dxrangeselectoroptions_scale_label_visible */
                visible?: boolean;
            };
            /** @docid dxrangeselectoroptions_scale_logarithmbase */
            logarithmBase?: number;
            /** @docid dxrangeselectoroptions_scale_majortickinterval */
            majorTickInterval?: any;
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_years */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_months */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_days */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_hours */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_minutes */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_seconds */
            /** @docid_ignore dxrangeselectoroptions_scale_majortickinterval_milliseconds */
            /** @docid dxrangeselectoroptions_scale_marker */
            marker?: {
                /** @docid dxrangeselectoroptions_scale_marker_label */
                label?: {
                    /** @docid dxrangeselectoroptions_scale_marker_label_customizeText */
                    customizeText?: (markerValue: { value: any; valueText: string }) => string;
                    /** @docid dxrangeselectoroptions_scale_marker_label_format */
                    format?: string;
                };
                /** @docid dxrangeselectoroptions_scale_marker_separatorheight */
                separatorHeight?: number;
                /** @docid dxrangeselectoroptions_scale_marker_textleftindent */
                textLeftIndent?: number;
                /** @docid dxrangeselectoroptions_scale_marker_texttopindent */
                textTopIndent?: number;
                /** @docid dxrangeselectoroptions_scale_marker_topindent */
                topIndent?: number;
                /** @docid dxrangeselectoroptions_scale_marker_visible */
                visible?: boolean;
            };
            /** @docid dxrangeselectoroptions_scale_maxrange */
            maxRange?: any;
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_years */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_months */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_days */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_hours */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_minutes */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_seconds */
            /** @docid_ignore dxrangeselectoroptions_scale_maxrange_milliseconds */
            /** @docid dxrangeselectoroptions_scale_minorTickCount */
            minorTickCount?: number;
            /** @docid dxrangeselectoroptions_scale_minortickinterval */
            minorTickInterval?: any;
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_years */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_months */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_days */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_hours */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_minutes */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_seconds */
            /** @docid_ignore dxrangeselectoroptions_scale_minortickinterval_milliseconds */
            /** @docid dxrangeselectoroptions_scale_minrange */
            minRange?: any;
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_years */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_months */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_days */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_hours */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_minutes */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_seconds */
            /** @docid_ignore dxrangeselectoroptions_scale_minrange_milliseconds */
            /** @docid dxrangeselectoroptions_scale_placeholderheight */
            placeholderHeight?: number;
            /** @docid dxrangeselectoroptions_scale_setticksatunitbeginning */
            setTicksAtUnitBeginning?: boolean;
            /** @docid dxrangeselectoroptions_scale_showBoundaryTicks */
            showCustomBoundaryTicks?: boolean;
            /** @docid dxrangeselectoroptions_scale_showminorticks */
            showMinorTicks?: boolean;
            /** @docid dxrangeselectoroptions_scale_startvalue */
            startValue?: any;
            /** @docid dxrangeselectoroptions_scale_tick */
            tick?: {
                /** @docid dxrangeselectoroptions_scale_tick_color */
                color?: string;
                /** @docid dxrangeselectoroptions_scale_tick_opacity */
                opacity?: number;
                /** @docid dxrangeselectoroptions_scale_tick_width */
                width?: number;
            };
            /** @docid dxrangeselectoroptions_scale_type */
            type?: string;
            /** @docid dxrangeselectoroptions_scale_useticksautoarrangement */
            useTicksAutoArrangement?: boolean;
            /** @docid dxrangeselectoroptions_scale_valueType */
            valueType?: string;
			/** @docid dxrangeselectoroptions_scale_categories */
			categories?: Array<any>;
        };
        /** @docid dxrangeselectoroptions_selectedrange */
        selectedRange?: {
            /** @docid dxrangeselectoroptions_selectedrange_startvalue */
            startValue?: any;
            /** @docid dxrangeselectoroptions_selectedrange_endvalue */
            endValue?: any;
        };
        /** @docid dxrangeselectoroptions_selectedrangecolor */
        selectedRangeColor?: string;
        /** @docid dxrangeselectoroptions_indent */
        indent?: {
            /** @docid dxrangeselectoroptions_indent_left */
            left?: number;
            /** @docid dxrangeselectoroptions_indent_right */
            right?: number;
        };
        /** @docid dxrangeselectoroptions_selectedrangechanged */
        selectedRangeChanged?: (selectedRange: { startValue: any; endValue: any; }) => void;
        /** @docid dxrangeselectoroptions_onselectedrangechanged */
        onSelectedRangeChanged?: (e: {
            startValue: any;
            endValue: any;
            component: dxRangeSelector;
            element: Element;
        }) => void;
        /** @docid dxrangeselectoroptions_shutter */
        shutter?: {
            /** @docid dxrangeselectoroptions_shutter_color */
            color?: string;
            /** @docid dxrangeselectoroptions_shutter_opacity */
            opacity?: number;
        };
        /** @docid dxrangeselectoroptions_size */
        size?: viz.core.Size;
        /** @docid dxrangeselectoroptions_sliderhandle */
        sliderHandle?: {
            /** @docid dxrangeselectoroptions_sliderhandle_color */
            color?: string;
            /** @docid dxrangeselectoroptions_sliderhandle_opacity */
            opacity?: number;
            /** @docid dxrangeselectoroptions_sliderhandle_width */
            width?: number;
        };
        /** @docid dxrangeselectoroptions_slidermarker */
        sliderMarker?: {
            /** @docid dxrangeselectoroptions_slidermarker_color */
            color?: string;
            /** @docid dxrangeselectoroptions_slidermarker_customizetext */
            customizeText?: (scaleValue: { value: any; valueText: any; }) => string;
            /** @docid dxrangeselectoroptions_slidermarker_font */
            font?: viz.core.Font;
            /** @docid dxrangeselectoroptions_slidermarker_format */
            format?: string;
            /** @docid dxrangeselectoroptions_slidermarker_invalidrangecolor */
            invalidRangeColor?: string;
            /** @docid dxrangeselectoroptions_slidermarker_padding */
            padding?: number;
            /** @docid dxrangeselectoroptions_slidermarker_paddingtopbottom */
            paddingTopBottom?: number;
            /** @docid dxrangeselectoroptions_slidermarker_paddingleftright */
            paddingLeftRight?: number;
            /** @docid dxrangeselectoroptions_slidermarker_placeholderHeight */
            placeholderHeight?: number;
            /** @docid dxrangeselectoroptions_slidermarker_placeholdersize */
            placeholderSize?: {
                /** @docid dxrangeselectoroptions_slidermarker_placeholdersize_height */
                height?: number;
                /** @docid dxrangeselectoroptions_slidermarker_placeholdersize_width */
                width?: {
                    /** @docid dxrangeselectoroptions_slidermarker_placeholdersize_width_left */
                    left?: number;
                    /** @docid dxrangeselectoroptions_slidermarker_placeholdersize_width_right */
                    right?: number;
                };
            };
            /** @docid dxrangeselectoroptions_slidermarker_precision */
            precision?: number;
            /** @docid dxrangeselectoroptions_slidermarker_visible */
            visible?: boolean;
        };
    }
    /** @docid dxrangeselector */
    export class dxRangeSelector extends viz.core.BaseWidget {
        constructor(element: JQuery, options?: dxRangeSelectorOptions);
        constructor(element: Element, options?: dxRangeSelectorOptions);
        /** @docid dxrangeselectormethods_showLoadingIndicator */
        showLoadingIndicator(): void;
        /** @docid dxrangeselectormethods_hideLoadingIndicator */
        hideLoadingIndicator(): void;
        /** @docid dxrangeselectormethods_render */
        render(skipChartAnimation?: boolean): void;
        /** @docid dxrangeselectormethods_getSelectedRange */
        getSelectedRange(): { startValue: any; endValue: any; };
        /** @docid dxrangeselectormethods_setSelectedRange */
        setSelectedRange(selectedRange: { startValue: any; endValue: any; }): void;
    }
}
declare module DevExpress.viz.sparklines  {
    export interface SparklineTooltip extends viz.core.Tooltip {
        /** @docid basesparklineoptions_tooltip_horizontalalignment */
        horizontalAlignment?: string;
        /** @docid basesparklineoptions_tooltip_verticalalignment */
        verticalAlignment?: string;
    }
    export interface BaseSparklineOptions extends viz.core.BaseWidgetOptions {
        /** @docid basesparklineoptions_margin */
        margin?: viz.core.Margins;
        /** @docid basesparklineoptions_size */
        size?: viz.core.Size;
        /** @docid basesparklineoptions_tooltip */
        tooltip?: SparklineTooltip;
    }
    /** @docid basesparkline */
    export class BaseSparkline extends viz.core.BaseWidget {
        /** @docid basesparklinemethods_render */
        render(): void;
    }
    export interface dxBulletOptions extends BaseSparkline {
        /** @docid dxbulletoptions_color */
        color?: string;
        /** @docid dxbulletoptions_endscalevalue */
        endScaleValue?: number;
        /** @docid dxbulletoptions_showtarget */
        showTarget?: boolean;
        /** @docid dxbulletoptions_showzerolevel */
        showZeroLevel?: boolean;
        /** @docid dxbulletoptions_startscalevalue */
        startScaleValue?: number;
        /** @docid dxbulletoptions_target */
        target?: number;
        /** @docid dxbulletoptions_targetcolor */
        targetColor?: string;
        /** @docid dxbulletoptions_targetwidth */
        targetWidth?: number;
        /** @docid dxbulletoptions_value */
        value?: number;
    }
    /** @docid dxbullet */
    export class dxBullet extends BaseSparkline {
        constructor(element: JQuery, options?: dxBulletOptions);
        constructor(element: Element, options?: dxBulletOptions);
    }
    export interface dxSparklineOptions extends BaseSparklineOptions {
        /** @docid dxsparklineoptions_argumentfield */
        argumentField?: string;
        /** @docid dxsparklineoptions_barnegativecolor */
        barNegativeColor?: string;
        /** @docid dxsparklineoptions_barpositivecolor */
        barPositiveColor?: string;
        /** @docid dxsparklineoptions_datasource */
        dataSource?: Array<any>;
        /** @docid dxsparklineoptions_firstlastcolor */
        firstLastColor?: string;
        /** @docid dxsparklineoptions_ignoreemptypoints */
        ignoreEmptyPoints?: boolean;
        /** @docid dxsparklineoptions_linecolor */
        lineColor?: string;
        /** @docid dxsparklineoptions_linewidth */
        lineWidth?: number;
        /** @docid dxsparklineoptions_losscolor */
        lossColor?: string;
        /** @docid dxsparklineoptions_maxcolor */
        maxColor?: string;
        /** @docid dxsparklineoptions_mincolor */
        minColor?: string;
        /** @docid dxsparklineoptions_pointcolor */
        pointColor?: string;
        /** @docid dxsparklineoptions_pointsize */
        pointSize?: number;
        /** @docid dxsparklineoptions_pointsymbol */
        pointSymbol?: string;
        /** @docid dxsparklineoptions_showfirstlast */
        showFirstLast?: boolean;
        /** @docid dxsparklineoptions_showminmax */
        showMinMax?: boolean;
        /** @docid dxsparklineoptions_type */
        type?: string;
        /** @docid dxsparklineoptions_valuefield */
        valueField?: string;
        /** @docid dxsparklineoptions_wincolor */
        winColor?: string;
        /** @docid dxsparklineoptions_winlossthreshold */
        winlossThreshold?: number;
        /** @docid dxsparklineoptions_minvalue*/
        minValue?: number;
        /** @docid dxsparklineoptions_maxvalue */
        maxValue?: number;
    }
    /** @docid dxsparkline */
    export class dxSparkline extends BaseSparkline {
        constructor(element: JQuery, options?: dxSparklineOptions);
        constructor(element: Element, options?: dxSparklineOptions);
    }
}
interface JQuery  {
    dxProgressBar(): JQuery;
    dxProgressBar(options: "instance"): DevExpress.ui.dxProgressBar;
    dxProgressBar(options: string): any;
    dxProgressBar(options: string, ...params: any[]): any;
    dxProgressBar(options: DevExpress.ui.dxProgressBarOptions): JQuery;
    dxSlider(): JQuery;
    dxSlider(options: "instance"): DevExpress.ui.dxSlider;
    dxSlider(options: string): any;
    dxSlider(options: string, ...params: any[]): any;
    dxSlider(options: DevExpress.ui.dxSliderOptions): JQuery;
    dxRangeSlider(): JQuery;
    dxRangeSlider(options: "instance"): DevExpress.ui.dxRangeSlider;
    dxRangeSlider(options: string): any;
    dxRangeSlider(options: string, ...params: any[]): any;
    dxRangeSlider(options: DevExpress.ui.dxRangeSliderOptions): JQuery;
    dxFileUploader(): JQuery;
    dxFileUploader(options: "instance"): DevExpress.ui.dxFileUploader;
    dxFileUploader(options: string): any;
    dxFileUploader(options: string, ...params: any[]): any;
    dxFileUploader(options: DevExpress.ui.dxFileUploaderOptions): JQuery;
    dxValidator(): JQuery;
    dxValidator(options: "instance"): DevExpress.ui.dxValidator;
    dxValidator(options: string): any;
    dxValidator(options: string, ...params: any[]): any;
    dxValidationGroup(): JQuery;
    dxValidationGroup(options: "instance"): DevExpress.ui.dxValidationGroup;
    dxValidationGroup(options: string): any;
    dxValidationGroup(options: string, ...params: any[]): any;
    dxValidationSummary(): JQuery;
    dxValidationSummary(options: "instance"): DevExpress.ui.dxValidationSummary;
    dxValidationSummary(options: string): any;
    dxValidationSummary(options: string, ...params: any[]): any;
    dxTooltip(): JQuery;
    dxTooltip(options: "instance"): DevExpress.ui.dxTooltip;
    dxTooltip(options: string): any;
    dxTooltip(options: string, ...params: any[]): any;
    dxTooltip(options: DevExpress.ui.dxTooltipOptions): JQuery;
    dxResizable(): JQuery;
    dxResizable(options: "instance"): DevExpress.ui.dxResizable;
    dxResizable(options: string): any;
    dxResizable(options: string, ...params: any[]): any;
    dxResizable(options: DevExpress.ui.dxResizableOptions): JQuery;
    dxDropDownList(): JQuery;
    dxDropDownList(options: "instance"): DevExpress.ui.dxDropDownList;
    dxDropDownList(options: string): any;
    dxDropDownList(options: string, ...params: any[]): any;
    dxDropDownList(options: DevExpress.ui.dxDropDownListOptions): JQuery;
    dxToolbar(): JQuery;
    dxToolbar(options: "instance"): DevExpress.ui.dxToolbar;
    dxToolbar(options: string): any;
    dxToolbar(options: string, ...params: any[]): any;
    dxToolbar(options: DevExpress.ui.dxToolbarOptions): JQuery;
    dxToast(): JQuery;
    dxToast(options: "instance"): DevExpress.ui.dxToast;
    dxToast(options: string): any;
    dxToast(options: string, ...params: any[]): any;
    dxToast(options: DevExpress.ui.dxToastOptions): JQuery;
    dxTextEditor(): JQuery;
    dxTextEditor(options: "instance"): DevExpress.ui.dxTextEditor;
    dxTextEditor(options: string): any;
    dxTextEditor(options: string, ...params: any[]): any;
    dxTextEditor(options: DevExpress.ui.dxTextEditorOptions): JQuery;
    dxTextBox(): JQuery;
    dxTextBox(options: "instance"): DevExpress.ui.dxTextBox;
    dxTextBox(options: string): any;
    dxTextBox(options: string, ...params: any[]): any;
    dxTextBox(options: DevExpress.ui.dxTextBoxOptions): JQuery;
    dxTextArea(): JQuery;
    dxTextArea(options: "instance"): DevExpress.ui.dxTextArea;
    dxTextArea(options: string): any;
    dxTextArea(options: string, ...params: any[]): any;
    dxTextArea(options: DevExpress.ui.dxTextAreaOptions): JQuery;
    dxTabs(): JQuery;
    dxTabs(options: "instance"): DevExpress.ui.dxTabs;
    dxTabs(options: string): any;
    dxTabs(options: string, ...params: any[]): any;
    dxTabs(options: DevExpress.ui.dxTabsOptions): JQuery;
    dxTabPanel(): JQuery;
    dxTabPanel(options: "instance"): DevExpress.ui.dxTabPanel;
    dxTabPanel(options: string): any;
    dxTabPanel(options: string, ...params: any[]): any;
    dxTabPanel(options: DevExpress.ui.dxTabPanelOptions): JQuery;
    dxSelectBox(): JQuery;
    dxSelectBox(options: "instance"): DevExpress.ui.dxSelectBox;
    dxSelectBox(options: string): any;
    dxSelectBox(options: string, ...params: any[]): any;
    dxSelectBox(options: DevExpress.ui.dxSelectBoxOptions): JQuery;
    dxScrollView(): JQuery;
    dxScrollView(options: "instance"): DevExpress.ui.dxScrollView;
    dxScrollView(options: string): any;
    dxScrollView(options: string, ...params: any[]): any;
    dxScrollView(options: DevExpress.ui.dxScrollViewOptions): JQuery;
    dxScrollable(): JQuery;
    dxScrollable(options: "instance"): DevExpress.ui.dxScrollable;
    dxScrollable(options: string): any;
    dxScrollable(options: string, ...params: any[]): any;
    dxScrollable(options: DevExpress.ui.dxScrollableOptions): JQuery;
    dxRadioGroup(): JQuery;
    dxRadioGroup(options: "instance"): DevExpress.ui.dxRadioGroup;
    dxRadioGroup(options: string): any;
    dxRadioGroup(options: string, ...params: any[]): any;
    dxRadioGroup(options: DevExpress.ui.dxRadioGroupOptions): JQuery;
    dxPopup(): JQuery;
    dxPopup(options: "instance"): DevExpress.ui.dxPopup;
    dxPopup(options: string): any;
    dxPopup(options: string, ...params: any[]): any;
    dxPopup(options: DevExpress.ui.dxPopupOptions): JQuery;
    dxPopover(): JQuery;
    dxPopover(options: "instance"): DevExpress.ui.dxPopover;
    dxPopover(options: string): any;
    dxPopover(options: string, ...params: any[]): any;
    dxPopover(options: DevExpress.ui.dxPopoverOptions): JQuery;
    dxOverlay(): JQuery;
    dxOverlay(options: "instance"): DevExpress.ui.dxOverlay;
    dxOverlay(options: string): any;
    dxOverlay(options: string, ...params: any[]): any;
    dxOverlay(options: DevExpress.ui.dxOverlayOptions): JQuery;
    dxNumberBox(): JQuery;
    dxNumberBox(options: "instance"): DevExpress.ui.dxNumberBox;
    dxNumberBox(options: string): any;
    dxNumberBox(options: string, ...params: any[]): any;
    dxNumberBox(options: DevExpress.ui.dxNumberBoxOptions): JQuery;
    dxNavBar(): JQuery;
    dxNavBar(options: "instance"): DevExpress.ui.dxNavBar;
    dxNavBar(options: string): any;
    dxNavBar(options: string, ...params: any[]): any;
    dxNavBar(options: DevExpress.ui.dxNavBarOptions): JQuery;
    dxMultiView(): JQuery;
    dxMultiView(options: "instance"): DevExpress.ui.dxMultiView;
    dxMultiView(options: string): any;
    dxMultiView(options: string, ...params: any[]): any;
    dxMultiView(options: DevExpress.ui.dxMultiViewOptions): JQuery;
    dxMap(): JQuery;
    dxMap(options: "instance"): DevExpress.ui.dxMap;
    dxMap(options: string): any;
    dxMap(options: string, ...params: any[]): any;
    dxMap(options: DevExpress.ui.dxMapOptions): JQuery;
    dxLookup(): JQuery;
    dxLookup(options: "instance"): DevExpress.ui.dxLookup;
    dxLookup(options: string): any;
    dxLookup(options: string, ...params: any[]): any;
    dxLookup(options: DevExpress.ui.dxLookupOptions): JQuery;
    dxLoadPanel(): JQuery;
    dxLoadPanel(options: "instance"): DevExpress.ui.dxLoadPanel;
    dxLoadPanel(options: string): any;
    dxLoadPanel(options: string, ...params: any[]): any;
    dxLoadPanel(options: DevExpress.ui.dxLoadPanelOptions): JQuery;
    dxLoadIndicator(): JQuery;
    dxLoadIndicator(options: "instance"): DevExpress.ui.dxLoadIndicator;
    dxLoadIndicator(options: string): any;
    dxLoadIndicator(options: string, ...params: any[]): any;
    dxLoadIndicator(options: DevExpress.ui.dxLoadIndicatorOptions): JQuery;
    dxList(): JQuery;
    dxList(options: "instance"): DevExpress.ui.dxList;
    dxList(options: string): any;
    dxList(options: string, ...params: any[]): any;
    dxList(options: DevExpress.ui.dxListOptions): JQuery;
    dxGallery(): JQuery;
    dxGallery(options: "instance"): DevExpress.ui.dxGallery;
    dxGallery(options: string): any;
    dxGallery(options: string, ...params: any[]): any;
    dxGallery(options: DevExpress.ui.dxGalleryOptions): JQuery;
    dxDropDownEditor(): JQuery;
    dxDropDownEditor(options: "instance"): DevExpress.ui.dxDropDownEditor;
    dxDropDownEditor(options: string): any;
    dxDropDownEditor(options: string, ...params: any[]): any;
    dxDropDownEditor(options: DevExpress.ui.dxDropDownEditorOptions): JQuery;
    dxDateBox(): JQuery;
    dxDateBox(options: "instance"): DevExpress.ui.dxDateBox;
    dxDateBox(options: string): any;
    dxDateBox(options: string, ...params: any[]): any;
    dxDateBox(options: DevExpress.ui.dxDateBoxOptions): JQuery;
    dxCheckBox(): JQuery;
    dxCheckBox(options: "instance"): DevExpress.ui.dxCheckBox;
    dxCheckBox(options: string): any;
    dxCheckBox(options: string, ...params: any[]): any;
    dxCheckBox(options: DevExpress.ui.dxCheckBoxOptions): JQuery;
    dxBox(): JQuery;
    dxBox(options: "instance"): DevExpress.ui.dxBox;
    dxBox(options: string): any;
    dxBox(options: string, ...params: any[]): any;
    dxBox(options: DevExpress.ui.dxBoxOptions): JQuery;
    dxButton(): JQuery;
    dxButton(options: "instance"): DevExpress.ui.dxButton;
    dxButton(options: string): any;
    dxButton(options: string, ...params: any[]): any;
    dxButton(options: DevExpress.ui.dxButtonOptions): JQuery;
    dxCalendar(): JQuery;
    dxCalendar(options: "instance"): DevExpress.ui.dxCalendar;
    dxCalendar(options: string): any;
    dxCalendar(options: string, ...params: any[]): any;
    dxCalendar(options: DevExpress.ui.dxCalendarOptions): JQuery;
    dxAccordion(): JQuery;
    dxAccordion(options: "instance"): DevExpress.ui.dxAccordion;
    dxAccordion(options: string): any;
    dxAccordion(options: string, ...params: any[]): any;
    dxAccordion(options: DevExpress.ui.dxAccordionOptions): JQuery;
    dxAutocomplete(): JQuery;
    dxAutocomplete(options: "instance"): DevExpress.ui.dxAutocomplete;
    dxAutocomplete(options: string): any;
    dxAutocomplete(options: string, ...params: any[]): any;
    dxAutocomplete(options: DevExpress.ui.dxAutocompleteOptions): JQuery;
    dxTileView(): JQuery;
    dxTileView(options: "instance"): DevExpress.ui.dxTileView;
    dxTileView(options: string): any;
    dxTileView(options: string, ...params: any[]): any;
    dxTileView(options: DevExpress.ui.dxTileViewOptions): JQuery;
    dxSwitch(): JQuery;
    dxSwitch(options: "instance"): DevExpress.ui.dxSwitch;
    dxSwitch(options: string): any;
    dxSwitch(options: string, ...params: any[]): any;
    dxSwitch(options: DevExpress.ui.dxSwitchOptions): JQuery;
    dxSlideOut(): JQuery;
    dxSlideOut(options: "instance"): DevExpress.ui.dxSlideOut;
    dxSlideOut(options: string): any;
    dxSlideOut(options: string, ...params: any[]): any;
    dxSlideOut(options: DevExpress.ui.dxSlideOutOptions): JQuery;
    dxPivot(): JQuery;
    dxPivot(options: "instance"): DevExpress.ui.dxPivot;
    dxPivot(options: string): any;
    dxPivot(options: string, ...params: any[]): any;
    dxPivot(options: DevExpress.ui.dxPivotOptions): JQuery;
    dxPanorama(): JQuery;
    dxPanorama(options: "instance"): DevExpress.ui.dxPanorama;
    dxPanorama(options: string): any;
    dxPanorama(options: string, ...params: any[]): any;
    dxPanorama(options: DevExpress.ui.dxPanoramaOptions): JQuery;
    dxActionSheet(): JQuery;
    dxActionSheet(options: "instance"): DevExpress.ui.dxActionSheet;
    dxActionSheet(options: string): any;
    dxActionSheet(options: string, ...params: any[]): any;
    dxActionSheet(options: DevExpress.ui.dxActionSheetOptions): JQuery;
    dxDropDownMenu(): JQuery;
    dxDropDownMenu(options: "instance"): DevExpress.ui.dxDropDownMenu;
    dxDropDownMenu(options: string): any;
    dxDropDownMenu(options: string, ...params: any[]): any;
    dxDropDownMenu(options: DevExpress.ui.dxDropDownMenuOptions): JQuery;
    dxTreeView(): JQuery;
    dxTreeView(options: "instance"): DevExpress.ui.dxTreeView;
    dxTreeView(options: string): any;
    dxTreeView(options: string, ...params: any[]): any;
    dxTreeView(options: DevExpress.ui.dxTreeViewOptions): JQuery;
    dxMenuBase(): JQuery;
    dxMenuBase(options: "instance"): DevExpress.ui.dxMenuBase;
    dxMenuBase(options: string): any;
    dxMenuBase(options: string, ...params: any[]): any;
    dxMenuBase(options: DevExpress.ui.dxMenuBaseOptions): JQuery;
    dxMenu(): JQuery;
    dxMenu(options: "instance"): DevExpress.ui.dxMenu;
    dxMenu(options: string): any;
    dxMenu(options: string, ...params: any[]): any;
    dxMenu(options: DevExpress.ui.dxMenuOptions): JQuery;
    dxContextMenu(): JQuery;
    dxContextMenu(options: "instance"): DevExpress.ui.dxContextMenu;
    dxContextMenu(options: string): any;
    dxContextMenu(options: string, ...params: any[]): any;
    dxContextMenu(options: DevExpress.ui.dxContextMenuOptions): JQuery;
    dxColorBox(): JQuery;
    dxColorBox(options: "instance"): DevExpress.ui.dxColorBox;
    dxColorBox(options: string): any;
    dxColorBox(options: string, ...params: any[]): any;
    dxColorBox(options: DevExpress.ui.dxColorBoxOptions): JQuery;
    dxDataGrid(): JQuery;
    dxDataGrid(options: "instance"): DevExpress.ui.dxDataGrid;
    dxDataGrid(options: string): any;
    dxDataGrid(options: string, ...params: any[]): any;
    dxDataGrid(options: DevExpress.ui.dxDataGridOptions): JQuery;
    dxPivotGrid(): JQuery;
    dxPivotGrid(options: "instance"): DevExpress.ui.dxPivotGrid;
    dxPivotGrid(options: string): any;
    dxPivotGrid(options: string, ...params: any[]): any;
    dxPivotGrid(options: DevExpress.ui.dxPivotGridOptions): JQuery;
    dxPivotGridFieldChooser(): JQuery;
    dxPivotGridFieldChooser(options: "instance"): DevExpress.ui.dxPivotGridFieldChooser;
    dxPivotGridFieldChooser(options: string): any;
    dxPivotGridFieldChooser(options: string, ...params: any[]): any;
    dxPivotGridFieldChooser(options: DevExpress.ui.dxPivotGridFieldChooserOptions): JQuery;
    dxScheduler(): JQuery;
    dxScheduler(options: "instance"): DevExpress.ui.dxScheduler;
    dxScheduler(options: string): any;
    dxScheduler(options: string, ...params: any[]): any;
    dxScheduler(options: DevExpress.ui.dxSchedulerOptions): JQuery;
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