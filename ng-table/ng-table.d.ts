// Type definitions for ng-table
// Project: https://github.com/esvit/ng-table
// Definitions by: Christian Crowhurst <https://github.com/christianacca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

/**
 * Parameters manager for an ngTable directive
 */
declare class NgTableParams<T> {
    /**
     * The page of data rows currently being displayed in the table
     */
    data: T[];

    constructor(baseParameters?: NgTable.IParamValues<T>, baseSettings?: NgTable.ISettings<T>)
    
    /**
     * Returns the number of data rows per page
     */
    count(): number
    /**
     * Sets the number of data rows per page.
     * Changes to count will cause `isDataReloadRequired` to return true
     */
    count(count: number): NgTableParams<T>
    
    /**
     * Returns the current filter values used to restrict the set of data rows.
     * @param trim supply true to return the current filter minus any insignificant values
     * (null,  undefined and empty string)
     */
    filter(trim?: boolean): NgTable.IFilterValues
    /**
     * Sets filter values to the `filter` supplied; any existing filter will be removed
     * Changes to filter will cause `isDataReloadRequired` to return true and the current `page` to be set to 1
     */
    filter(filter: NgTable.IFilterValues): NgTableParams<T>
    /**
     * Generate array of pages.
     * When no arguments supplied, the current parameter state of this `NgTableParams` instance will be used
     */
    generatePagesArray(currentPage?: number, totalItems?: number, pageSize?: number, maxBlocks?: number): NgTable.IPageButton[]
    /**
     * Returns the current grouping used to group the data rows
     */
    group(): NgTable.Grouping<T>
    /**
     * Sets grouping to the `field` and `sortDirection` supplied; any existing grouping will be removed
     * Changes to group will cause `isDataReloadRequired` to return true and the current `page` to be set to 1
     */
    group(field: string, sortDirection?: string): NgTableParams<T>
    /**
     * Sets grouping to the `group` supplied; any existing grouping will be removed.
     * Changes to group will cause `isDataReloadRequired` to return true and the current `page` to be set to 1
     */
    group(group: NgTable.Grouping<T>): NgTableParams<T>
    /**
     * Returns true when an attempt to `reload` the current `parameter` values have resulted in a failure.
     * This method will continue to return true until the `reload` is successfully called or when the
     * `parameter` values have changed
     */
    hasErrorState(): boolean
    /**
     * Returns true if `filter` has significant filter value(s) (any value except null, undefined, or empty string),
     * otherwise false
     */
    hasFilter(): boolean
    /**
     * Return true when a change to `filters` require the `reload` method
     * to be run so as to ensure the data presented to the user reflects these filters
     */
    hasFilterChanges(): boolean
    /**
     * Returns true when at least one group has been set
     */
    hasGroup(): boolean
    /**
     * Returns true when the `group` and when supplied, the `sortDirection` matches an existing group
     */
    hasGroup(group: string | NgTable.IGroupingFunc<T>, sortDirection?: string): boolean
    /**
     * Return true when a change to this instance should require the `reload` method
     * to be run so as to ensure the data rows presented to the user reflects the current state.
     * 
     * Note that this method will return false when the `reload` method has run but fails. In this case
     * `hasErrorState` will return true.
     * 
     * The built-in `ngTable` directives will watch for when this function returns true and will then call
     * the `reload` method to load its data rows
     */
    isDataReloadRequired(): boolean
    /**
     * Returns sorting values in a format that can be consumed by the angular `$orderBy` filter service
     */
    orderBy(): string[]
    /**
     * Trigger a reload of the data rows
     */
    reload<TResult extends NgTable.Data.DataResult<T>>(): ng.IPromise<TResult[]>
    /**
     * Returns the settings for the table.
     */
    settings(): NgTable.ISettings<T>
    /**
     * Sets the settings for the table; new setting values will be merged with the existing settings.
     * Supplying a new `dataset` will cause `isDataReloadRequired` to return true and the `ngTableEventsChannel`
     * to fire its `datasetChanged` event
     */
    settings(newSettings: NgTable.ISettings<T>): NgTableParams<T>
    /** 
     * Returns the current sorting used to order the data rows.
     * Changes to sorting will cause `isDataReloadRequired` to return true
     */
    sorting(): NgTable.ISortingValues
    /**
     * Sets sorting values to the `sorting` supplied; any existing sorting will be removed.
     * Changes to sorting will cause `isDataReloadRequired` to return true
     */
    sorting(sorting: NgTable.ISortingValues): NgTableParams<T>
    /**
     * Sets sorting to the `field` and `direction` supplied; any existing sorting will be removed
     */
    sorting(field: string, direction: string): NgTableParams<T>
    /**
     * Returns the index of the current "slice" of data rows
     */
    page(): number
    /**
     * Sets the index of the current "slice" of data rows. The index starts at 1.
     * Changing the page number will cause `isDataReloadRequired` to return true
     */
    page(page: number): NgTableParams<T>
    /**
     * Returns the count of the data rows that match the current `filter`
     */
    total(): number
    /**
     * Sets `settings().total` to the value supplied.
     * Typically you will need to set a `total` in the body of any custom `getData` function
     * you supply as a setting value to this instance.
     * @example
     * var tp = new NgTableParams({}, { getData: customGetData })
     * function customGetData(params) {
     *      var queryResult = /* code to fetch current data rows and total *\/
     *      params.total(queryResult.total);
     *      return queryResult.dataRowsPage;
     * }
     */
    total(total: number): NgTableParams<T>
    /**
     * Returns the current parameter values uri-encoded. Set `asString` to 
     * true for the parameters to be returned as an array of strings of the form 'paramName=value'
     * otherwise parameters returned as a key-value object
     */
    url(asString?: boolean): { [name: string]: string } | string[]
}

declare namespace NgTable {

    interface IDataSettings {
        applyPaging?: boolean;
    }
    
    /**
     * An angular value object that allow for overriding of the initial default values used when constructing
     * an instance of `NgTableParams`  
     */
    interface IDefaults {
        params?: IParamValues<any>;
        settings?: ISettings<any>
    }

    /**
     * Map of the names of fields declared on a data row and the corrosponding filter value
     */
    interface IFilterValues { [name: string]: any }
    
    /**
     * Map of the names of fields on a data row and the corrosponding sort direction;
     * Set the value of a key to undefined to let value of `ISettings.defaultSort` apply
     */
    interface ISortingValues { [name: string]: string }

    type Grouping<T> = IGroupValues | IGroupingFunc<T>;

    /**
     * Map of the names of fields on a data row and the corrosponding sort direction
     */
    interface IGroupValues { [name: string]: string }
    
    /**
     * Signature of a function that should return the name of the group
     * that the `item` should be placed within
     */
    interface IGroupingFunc<T> {
        (item: T): string;
        /**
         * 'asc' or 'desc'; leave undefined to let the value of `ISettings.groupOptions.defaultSort` apply
         */
        sortDirection?: string
    }
     
    /**
     * The runtime values for `NgTableParams` that determine the set of data rows and 
     * how they are to be displayed in a table
     */
    interface IParamValues<T> {
        /**
         * The index of the "slice" of data rows, starting at 1, to be displayed by the table.
         */
        page?: number;
        /**
         * The number of data rows per page
         */
        count?: number;
        /** 
         * The filter that should be applied to restrict the set of data rows
         */
        filter?: IFilterValues;
        /**
         * The sort order that should be applied to the data rows.
         */
        sorting?: ISortingValues;
        /**
         * The grouping that should be applied to the data rows
         */
        group?: string | Grouping<T>;
    }


    type FilterComparator<T> = boolean | IFilterComparatorFunc<T>;

    interface IFilterComparatorFunc<T> {
        (actual: T, expected: T): boolean;
    }

    interface IFilterFunc<T> {
        (data: T[], filter: IFilterValues, filterComparator: FilterComparator<T>): T[]
    }


    interface IFilterSettings<T> {
        /**
         * Use this to determine how items are matched against the filter values.
         * This setting is identical to the `comparator` parameter supported by the angular 
         * `$filter` filter service
         * 
         * Defaults to `undefined` which will result in a case insensitive susbstring match when 
         * `IDefaultGetData` service is supplying the implementation for the
         * `ISettings.getData` function
         */
        filterComparator?: FilterComparator<T>;
        /**
         * A duration to wait for the user to stop typing before applying the filter.
         * - Defaults to 0 for small managed inmemory arrays ie where a `ISettings.dataset` argument is 
         *   supplied to `NgTableParams.settings`.
         * - Defaults to 500 milliseconds otherwise.
         */
        filterDelay?: number;
        /**
         * The number of elements up to which a managed inmemory array is considered small. Defaults to 10000.
         */
        filterDelayThreshold?: number;
        /**
         * Overrides `IDefaultGetDataProvider.filterFilterName`.
         * The value supplied should be the name of the angular `$filter` service that will be selected to perform 
         * the actual filter logic.
         * Defaults to 'filter'.
         */
        filterFilterName?: string;
        /**
         * Tells `IDefaultGetData` to use this function supplied to perform the filtering instead of selecting an angular $filter.
         */
        filterFn?: IFilterFunc<T>;
        /**
         * The layout to use when multiple html templates are to rendered in a single table header column.
         * Available values:
         * - stack (the default)
         * - horizontal 
         */
        filterLayout?: string
    }

    interface IGroupSettings {
        /**
         * The default sort direction that will be used whenever a group is supplied that
         * does not define its own sort direction
         */
        defaultSort?: string;
        /**
         * Determines whether groups should be displayed expanded to show their items. Defaults to true
         */
        isExpanded?: boolean;
    }
    
    /**
     * Definition of the buttons rendered by the data row pager directive
     */
    interface IPageButton {
        type: string;
        number?: number;
        active: boolean;
        current?: boolean;
    }
        
    /**
     * Configuration settings for `NgTableParams`
     */
    interface ISettings<T> {
        /**
         * Returns true whenever a call to `getData` is in progress
         */
        $loading?: boolean;
        /**
         * An array that contains all the data rows that NgTable should manage.
         * The `gateData` function will be used to manage the data rows
         * that ultimately will be displayed.
         */
        dataset?: T[];
        dataOptions?: {};
        /**
         * The total number of data rows before paging has been applied.
         * Typically you will not need to supply this yourself
         */
        total?: number;
        /**
         * The default sort direction that will be used whenever a sorting is supplied that
         * does not define its own sort direction
         */
        defaultSort?: string;
        filterOptions?: IFilterSettings<T>;
        groupOptions?: IGroupSettings;
        /**
         * The page size buttons that should be displayed. Each value defined in the array
         * determines the possible values that can be supplied to `NgTableParams.page()`
         */
        counts?: number[];
        /**
         * The collection of interceptors that should apply to the results of a call to
         * the `getData` function before the data rows are displayed in the table
         */
        interceptors?: IInterceptor<T>[];
        /**
         * Configuration for the template that will display the page size buttons
         */
        paginationMaxBlocks?: number;
        /**
         * Configuration for the template that will display the page size buttons
         */
        paginationMinBlocks?: number;
        /**
         * The html tag that will be used to display the sorting indicator in the table header
         */
        sortingIndicator?: string;
        /**
         * The function that will be used fetch data rows. Leave undefined to let the `IDefaultGetData`
         * service provide a default implementation that will work with the `dataset` array you supply.
         * 
         * Typically you will supply a custom function when you need to execute filtering, paging and sorting
         * on the server
         */
        getData?: Data.IGetDataFunc<T> | Data.IInterceptableGetDataFunc<T>;
        /** 
         * The function that will be used group data rows according to the groupings returned by `NgTableParams.group()`
        */
        getGroups?: Data.IGetGroupFunc<T>;
    }

    /**
     * Configuration values that determine the behaviour of the `ngTableFilterConfig` service
     */
    interface IFilterConfigValues {
        /**
         * The default base url to use when deriving the url for a filter template given just an alias name
         * Defaults to 'ng-table/filters/'
         */
        defaultBaseUrl?: string;
        /**
         * The extension to use when deriving the url of a filter template when given just an alias name
         */
        defaultExt?: string;
        /**
         * A map of alias names and their corrosponding urls. A lookup against this map will be used
         * to find the url matching an alias name.
         * If no match is found then a url will be derived using the following pattern `${defaultBaseUrl}${aliasName}.${defaultExt}`
         */
        aliasUrls?: { [name: string]: string };
    }
    
    /**
     * The angular provider used to configure the behaviour of the `ngTableFilterConfig` service
     */
    interface IFilterConfigProvider {
        $get: IFilterConfig;
        /**
         * Reset back to factory defaults the config values that `ngTableFilterConfig` service will use
         */
        resetConfigs(): void;
        /**
         * Set the config values used by `ngTableFilterConfig` service
         */
        setConfig(customConfig: IFilterConfigValues): void;
    }
    
    /**
     * A key value-pair map where the key is the name of a field in a data row and the value is the definition 
     * for the template used to render a filter cell in the header of a html table.
     * Where the value is supplied as a string this should either be url to a html template or an alias to a url registered
     * using the `ngTableFilterConfigProvider` 
     * @example
     * vm.ageFilter = { "age": "number" }
     * @example
     * vm.ageFilter = { "age": "my/custom/ageTemplate.html" }
     * @example
     * vm.ageFilter = { "age": { id: "number", placeholder: "Age of person"} }
     */
    interface IFilterTemplateDefMap {
        [name: string]: string | IFilterTemplateDef
    }
    
    /**
     * A fully qualified template definition for a single filter
     */
    interface IFilterTemplateDef {
        /**
         * A url to a html template of an alias to a url registered using the `ngTableFilterConfigProvider` 
         */
        id: string,
        /**
         * The text that should be rendered as a prompt to assist the user when entering a filter value
         */
        placeholder: string
    }
    
    /**
     * Exposes configuration values and methods used to return the location of the html
     * templates used to render the filter row of an ng-table directive
     */
    interface IFilterConfig {
        /**
         * Readonly copy of the final values used to configure the service.
         */
        config: IFilterConfigValues,
        /**
         * Return the url of the html filter template for the supplied definition and key.
         * For more information see the documentation for `IFilterTemplateMap`
         */
        getTemplateUrl(filterDef: string | IFilterTemplateDef, filterKey?: string): string,
        /**
         * Return the url of the html filter template registered with the alias supplied
         */
        getUrlForAlias(aliasName: string, filterKey?: string): string
    }

    interface InternalTableParams<T> extends NgTableParams<T> {
        isNullInstance: boolean
    }
    
    /**
     * A custom object that can be registered with an NgTableParams instance that can be used
     * to post-process the results (and failures) returned by its `getData` function
     */
    interface IInterceptor<T> {
        response?: <TData>(data: TData, params: NgTableParams<T>) => TData;
        responseError?: (reason: any, params: NgTableParams<T>) => any;
    }

    type SelectData = ISelectOption[] | ISelectDataFunc

    interface ISelectOption {
        id: string | number;
        title: string;
    }

    interface ISelectDataFunc {
        (): ISelectOption[] | ng.IPromise<ISelectOption[]>
    }    
        
    /**
     * Definition of the constructor function that will construct new instances of `NgTableParams`.
     * On construction of `NgTableParams` the `ngTableEventsChannel` will fire its `afterCreated` event.
     */
    interface ITableParamsConstructor<T> {
        new (baseParameters?: IParamValues<T>, baseSettings?: ISettings<T>): NgTableParams<T>
    }


    namespace Data {

        type DataResult<T> = T | IDataRowGroup<T>;

        interface IDataRowGroup<T> {
            data: T[];
            $hideRows: boolean;
            value: string;
        }
             
        /**
         * A default implementation of the getData function that will apply the `filter`, `orderBy` and
         * paging values from the `NgTableParams` instance supplied to the data array supplied.
         * 
         * A call to this function will:
         * - return the resulting array
         * - assign the total item count after filtering to the `total` of the `NgTableParams` instance supplied
         */
        interface IDefaultGetData<T> {
            (data: T[], params: NgTableParams<T>): T[];
            /**
             * Convenience function that this service will use to apply paging to the data rows.
             * 
             * Returns a slice of rows from the `data` array supplied and sets the `NgTableParams.total()`
             * on the `params` instance supplied to `data.length`
             */
            applyPaging(data: T[], params: NgTableParams<T>): T[],
            /**
             * Returns a reference to the function that this service will use to filter data rows
             */
            getFilterFn(params: NgTableParams<T>): IFilterFunc<T>,
            /**
             * Returns a reference to the function that this service will use to sort data rows
             */
            getOrderByFn(params?: NgTableParams<T>): void
        }   

        /**
         * Allows for the configuration of the ngTableDefaultGetData service.
         */
        interface IDefaultGetDataProvider {
            $get<T>(): IDefaultGetData<T>;
            /**
             * The name of a angular filter that knows how to apply the values returned by
             * `NgTableParams.filter()` to restrict an array of data.
             * (defaults to the angular `filter` filter service)
             */
            filterFilterName: string,
            /**
             * The name of a angular filter that knows how to apply the values returned by
            * `NgTableParams.orderBy()` to sort an array of data.
            * (defaults to the angular `orderBy` filter service)
            */
            sortingFilterName: string
        }

        interface IGetDataBcShimFunc<T> {
            (originalFunc: ILegacyGetDataFunc<T>): { (params: NgTableParams<T>): ng.IPromise<T[]> }
        }
        
        /**
         * Signature of a function that will called whenever NgTable requires to load data rows
         * into the table.
         * `params` is the table requesting the data rows
         */
        interface IGetDataFunc<T> {
            (params: NgTableParams<T>): T[] | ng.IPromise<T[]>;
        }

        interface IGetGroupFunc<T> {
            (params: NgTableParams<T>): { [name: string]: IDataRowGroup<T>[] }
        }
        
        /**
         * Variation of the `IGetDataFunc` function signature that allows for flexibility for
         * the shape of the return value.
         * Typcially you will use this function signature when you want to configure `NgTableParams` with
         * interceptors that will return the final data rows array.   
         */
        interface IInterceptableGetDataFunc<T> {
            <TResult>(params: NgTableParams<T>): TResult;
        }

        interface ILegacyGetDataFunc<T> {
            ($defer: ng.IDeferred<T[]>, params: NgTableParams<T>): void
        }
    }

    namespace Events {
        interface IEventSelectorFunc {
            (publisher: NgTableParams<any>): boolean
        }

        type EventSelector<T> = NgTableParams<T> | IEventSelectorFunc

        interface IDatasetChangedListener<T> {
            (publisher: NgTableParams<T>, newDataset: T[], oldDataset: T[]): any
        }
        interface IAfterCreatedListener {
            (publisher: NgTableParams<any>): any
        }
        interface IAfterReloadDataListener<T> {
            (publisher: NgTableParams<T>, newData: NgTable.Data.DataResult<T>[], oldData: NgTable.Data.DataResult<T>[]): any
        }
        interface IPagesChangedListener {
            (publisher: NgTableParams<any>, newPages: NgTable.IPageButton[], oldPages: NgTable.IPageButton[]): any
        }
        
        interface IUnregistrationFunc {
            (): void
        }

        interface IEventsChannel {
            /**
             * Subscribe to receive notification whenever a new `NgTableParams` instance has finished being constructed.
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called. Supply a
             * `scope` to have angular automatically unregister the listener when the `scope` is destroyed.
             * 
             * @param listener the function that will be called when the event fires
             * @param scope the angular `$scope` that will limit the lifetime of the event subscription
             * @param eventFilter a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onAfterCreated(listener: Events.IAfterCreatedListener, scope: ng.IScope, eventFilter?: Events.IEventSelectorFunc): IUnregistrationFunc;
            /**
             * Subscribe to receive notification whenever a new `NgTableParams` instance has finished being constructed.
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called.
             * 
             * @param listener the function that will be called when the event fires
             * @param eventFilter a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onAfterCreated(listener: Events.IAfterCreatedListener, eventFilter?: Events.IEventSelectorFunc): IUnregistrationFunc;
            /**
             * Subscribe to receive notification whenever the `reload` method of an `NgTableParams` instance has successfully executed
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called. Supply a
             * `scope` to have angular automatically unregister the listener when the `scope` is destroyed.
             * 
             * @param listener the function that will be called when the event fires
             * @param scope the angular `$scope` that will limit the lifetime of the event subscription
             * @param eventFilter either the specific `NgTableParams` instance you want to receive events for or a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onAfterReloadData<T>(listener: Events.IAfterReloadDataListener<T>, scope: ng.IScope, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;
            /**
             * Subscribe to receive notification whenever the `reload` method of an `NgTableParams` instance has successfully executed
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called.
             * 
             * @param listener the function that will be called when the event fires
             * @param eventFilter a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onAfterReloadData<T>(listener: Events.IAfterReloadDataListener<T>, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;
            
            /**
             * Subscribe to receive notification whenever a new data rows *array* is supplied as a `settings` value to a `NgTableParams` instance.
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called. Supply a
             * `scope` to have angular automatically unregister the listener when the `scope` is destroyed.
             * 
             * @param listener the function that will be called when the event fires
             * @param scope the angular `$scope` that will limit the lifetime of the event subscription
             * @param eventFilter either the specific `NgTableParams` instance you want to receive events for or a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onDatasetChanged<T>(listener: Events.IDatasetChangedListener<T>, scope: ng.IScope, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;
            /**
             * Subscribe to receive notification whenever a new data rows *array* is supplied as a `settings` value to a `NgTableParams` instance.
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called.
             * 
             * @param listener the function that will be called when the event fires
             * @param eventFilter either the specific `NgTableParams` instance you want to receive events for or a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onDatasetChanged<T>(listener: Events.IDatasetChangedListener<T>, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;
            
            /**
             * Subscribe to receive notification whenever the paging buttons for an `NgTableParams` instance change
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called. Supply a
             * `scope` to have angular automatically unregister the listener when the `scope` is destroyed.
             * 
             * @param listener the function that will be called when the event fires
             * @param scope the angular `$scope` that will limit the lifetime of the event subscription
             * @param eventFilter either the specific `NgTableParams` instance you want to receive events for or a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onPagesChanged<T>(listener: Events.IPagesChangedListener, scope: ng.IScope, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;
            /**
             * Subscribe to receive notification whenever the paging buttons for an `NgTableParams` instance change
             * Optionally supply an `eventFilter` to restrict which events that should trigger the `listener` to be called.
             * 
             * @param listener the function that will be called when the event fires
             * @param eventFilter either the specific `NgTableParams` instance you want to receive events for or a predicate function that should return true to receive the event
             * @return a unregistration function that when called will unregister the `listener`
             */
            onPagesChanged<T>(listener: Events.IPagesChangedListener, eventFilter?: Events.EventSelector<T>): IUnregistrationFunc;

            publishAfterCreated<T>(publisher: NgTableParams<T>): void;
            publishAfterReloadData<T>(publisher: NgTableParams<T>, newData: T[], oldData: T[]): void;
            publishDatasetChanged<T>(publisher: NgTableParams<T>, newDataset: T[], oldDataset: T[]): void;
            publishPagesChanged<T>(publisher: NgTableParams<T>, newPages: NgTable.IPageButton[], oldPages: NgTable.IPageButton[]): void;
        }
    }

    namespace Columns {

        type ColumnFieldContext = ng.IScope & {
            $column: IColumnDef;
            $columns: IColumnDef[];
        }

        interface IColumnField<T> {
            (context?: ColumnFieldContext): T;
            assign($scope: ng.IScope, value: T): void;
        }
        
        /**
         * The definition of the column within a ngTable.
         * When using `ng-table` directive a column definition will be parsed from each `td` tag found in the
         * `tr` data row tag.
         * 
         * @example
         * <tr>
         *  <td data-title="'Name of User'" filter="{ username: 'text'}" sortable="'username'" />
         *  <td data-title="'Age of User'" filter="{ age: 'number'}" sortable="'age'" />
         * </tr>
         */
        interface IColumnDef {
            /**
             * Custom CSS class that should be added to the `th` tag(s) of this column in the table header
             * 
             * To set this on the `td` tag of a html table use the attribute `header-class` or `data-header-class`
             */
            class: IColumnField<string>;
            /**
             * The `ISelectOption`s that can be used in a html filter template for this colums.
             */
            data?: SelectData;
            /**
             * The index position of this column within the `$columns` container array 
             */
            id: number;
            /**
             * The definition of 0 or more html filter templates that should be rendered for this column in
             * the table header
             */
            filter: IColumnField<IFilterTemplateDefMap>;
            /**
             * Supplies the `ISelectOption`s that can be used in a html filter template for this colums.
             * At the creation of the `NgTableParams` this field will be called and the result then assigned
             * to the `data` field of this column.
             */
            filterData: IColumnField<ng.IPromise<SelectData> | SelectData>;
            /**
             * The name of the data row field that will be used to group on, or false when this column
             * does not support grouping
             */
            groupable: IColumnField<string | boolean>;
            /**
             * The url of a custom html template that should be used to render a table header for this column
             * 
             * To set this on the `td` tag for a html table use the attribute `header` or `data-header`
             */
            headerTemplateURL: IColumnField<string | boolean>;
            /**
             * The text that should be used as a tooltip for this column in the table header
             */
            headerTitle: IColumnField<string>;
            /**
             * Determines whether this column should be displayed in the table
             * 
             * To set this on the `td` tag for a html table use the attribute `ng-if`
             */
            show: IColumnField<boolean>;
            /**
             * The name of the data row field that will be used to sort on, or false when this column
             * does not support sorting
             */
            sortable: IColumnField<string | boolean>;
            /**
             * The title of this column that should be displayed in the table header
             */
            title: IColumnField<string>;
            /**
             * An alternate column title. Typically this can be used for responsive table layouts
             * where the titleAlt should be used for small screen sizes
             */
            titleAlt: IColumnField<string>;
        }

        type DynamicTableColField<T> = IDynamicTableColFieldFunc<T> | T;

        interface IDynamicTableColFieldFunc<T> {
            (context: ColumnFieldContext): T;
        }
        
        /**
         * The definition of the column supplied to a ngTableDynamic directive.
         */
        interface IDynamicTableColDef {
            /**
             * Custom CSS class that should be added to the `th` tag(s) of this column in the table header
             */
            class?: DynamicTableColField<string>;
            /**
             * The definition of 0 or more html filter templates that should be rendered for this column in
             * the table header
             */
            filter?: DynamicTableColField<IFilterTemplateDefMap>;
            /**
             * Supplies the `ISelectOption`s that can be used in a html filter template for this colums.
             * At the creation of the `NgTableParams` this field will be called and the result then assigned
             * to the `data` field of this column.
             */
            filterData?: DynamicTableColField<ng.IPromise<SelectData> | SelectData>;
            /**
             * The name of the data row field that will be used to group on, or false when this column
             * does not support grouping
             */
            groupable?: DynamicTableColField<string | boolean>;
            /**
             * The url of a custom html template that should be used to render a table header for this column
             */
            headerTemplateURL?: DynamicTableColField<string | boolean>;
            /**
             * The text that should be used as a tooltip for this column in the table header
             */
            headerTitle?: DynamicTableColField<string>;
            /**
             * Determines whether this column should be displayed in the table
             */
            show?: DynamicTableColField<boolean>;
            /**
             * The name of the data row field that will be used to sort on, or false when this column
             * does not support sorting
             */
            sortable?: DynamicTableColField<string|boolean>;
            /**
             * The title of this column that should be displayed in the table header
             */
            title?: DynamicTableColField<string>;
            /**
             * An alternate column title. Typically this can be used for responsive table layouts
             * where the titleAlt should be used for small screen sizes
             */
            titleAlt?: DynamicTableColField<string>;
        }
    }
}

