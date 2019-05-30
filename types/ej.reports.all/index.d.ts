// Type definitions for non-npm package ej.reports 4.1
// Project: http://help.syncfusion.com/js/typescript
// Definitions by: Syncfusion <https://github.com/syncfusion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/*!
*  filename: ej.reports.all.d.ts
*  version : 4.1.0.16
*  Copyright Syncfusion Inc. 2001 - 2019. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws.
*/
declare namespace ej {
    const dataUtil: dataUtil;
    function isMobile(): boolean;
    function isIOS(): boolean;
    function isAndroid(): boolean;
    function isFlat(): boolean;
    function isWindows(): boolean;
    function isCssCalc(): boolean;
    function getCurrentPage(): JQuery;
    function isLowerResolution(): boolean;
    function browserInfo(): browserInfoOptions;
    function isTouchDevice(): boolean;
    function addPrefix(style: string): string;
    function animationEndEvent(): string;
    function blockDefaultActions(e: any): void;
    function buildTag(tag: string, innerHtml?: string, styles?: any, attrs?: any): JQuery;
    function cancelEvent(): string;
    function copyObject(): string;
    function createObject(nameSpace: string, value: any, initIn: any): JQuery;
    function createObject(element: any, eventEmitter: any, model: any): any;
    function setCulture(culture: string): void;
    function getObject(element: string, model: any): any;
    function getObject(nameSpace: string, fromdata?: any): any;
    function defineClass(className: string, constructor: any, proto: any, replace: boolean): any;
    function destroyWidgets(element: any): void;
    function endEvent(): string;
    function event(type: string, data: any, eventProp: any): any;
    function getAndroidVersion(): any;
    function getAttrVal(ele: any, val: string, option: any): any;
    function getBooleanVal(ele: any, val: string, option: any): any;
    function getClearString(): string;
    function getDimension(element: any, method: string): any;
    function getFontString(fontObj: any): string;
    function getFontStyle(style: string): string;
    function getMaxZindex(): number;
    function getNameSpace(className: string): string;
    function getOffset(ele: string): any;
    function getRenderMode(): string;
    function getScrollableParents(element: any): JQuery;
    function getTheme(): string;
    function getZindexPartial(element: any, popupEle: string): number;
    function hasRenderMode(element: string): void;
    function hasStyle(prop: string): boolean;
    function hasTheme(element: string): string;
    function hexFromRGB(color: string): string;
    function ieClearRemover(element: string): void;
    function isAndroidWebView(): string;
    function isDevice(): boolean;
    function isIOS7(): boolean;
    function isIOSWebView(): boolean;
    function isLowerAndroid(): boolean;
    function isNullOrUndefined(value: any): boolean;
    function isPlainObject(): JQuery;
    function isPortrait(): any;
    function isTablet(): boolean;
    function isWindowsWebView(): string;
    function listenEvents(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function listenTouchEvent(selectors: any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function logBase(val: string, base: string): number;
    function measureText(text: string, maxwidth: number, font: string): string;
    function moveEvent(): string;
    function print(element: string, printWindow: any): void;
    function proxy(fn: any, context?: string, arg?: string): any;
    function round(value: string, div: string, up: string): any;
    function sendAjaxRequest(ajaxOptions: any): void;
    function setCaretToPos(nput: string, pos1: string, pos2: string): void;
    function setRenderMode(element: string): void;
    function setTheme(): any;
    function startEvent(): string;
    function tapEvent(): string;
    function tapHoldEvent(): string;
    function throwError(): any;
    function transitionEndEvent(): any;
    function userAgent(): boolean;
    function widget(pluginName: string, className: string, proto: any): any;
    function avg(json: any, filedName: string): any;
    function getGuid(prefix: string): number;
    function group(jsonArray: any, field: string, agg: string, level: number, groupDs: string): any;
    function isJSON(jsonData: string): string;
    function max(jsonArray: any, fieldName?: string, comparer?: string): any;
    function min(jsonArray: any, fieldName: string, comparer: string): any;
    function merge(first: string, second: string): any;
    function mergeshort(jsonArray: any, fieldName: string, comparer: string): any;
    function parseJSON(jsonText: string): string;
    function parseTable(table: number, headerOption: string, headerRowIndex: string): any;
    function select(jsonArray: any, fields: string): any;
    function setTransition(): boolean;
    function sum(json: string, fieldName: string): string;
    function swap(array: any, x: string, y: string): any;
    const cssUA: string;
    const serverTimezoneOffset: number;
    const transform: string;
    const transformOrigin: string;
    const transformStyle: string;
    const transition: string;
    const transitionDelay: string;
    const transitionDuration: string;
    const transitionProperty: string;
    const transitionTimingFunction: string;
    const template: any;
    const util: {
        valueFunction(val: string): any;
    };
    export namespace device {
        function isAndroid(): boolean;
        function isIOS(): boolean;
        function isFlat(): boolean;
        function isIOS7(): boolean;
        function isWindows(): boolean;
    }
    export namespace widget {
        const autoInit: boolean;
        const registeredInstances: any[];
        const registeredWidgets: any[];
        function register(pluginName: string, className: string, prototype: any): void;
        function destroyAll(elements: Element): void;
        function init(element: Element): void;
        function registerInstance(element: Element, pluginName: string, className: string, prototype: any): void;
    }

    interface browserInfoOptions {
        name: string;
        version: string;
        culture: any;
        isMSPointerEnabled: boolean;
    }
    class WidgetBase {
        destroy(): void;
        element: JQuery;
        setModel(options: any, forceSet?: boolean): any;
        option(prop?: any, value?: any, forceSet?: boolean): any;
        _trigger(eventName?: string, eventProp?: any): any;
        _on(element: JQuery, eventType?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _on(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _off(element: JQuery, eventName: string, handler?: (eventObject: JQueryEventObject) => any): any;
        _off(element: JQuery, eventType?: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): any;
        persistState(): void;
        restoreState(silent: boolean): void;
    }

    class Widget extends WidgetBase {
        constructor(pluginName: string, className: string, proto: any);
        static fn: Widget;
        static extend(widget: Widget): any;
        register(pluginName: string, className: string, prototype: any): void;
        destroyAll(elements: Element): void;
        model: any;
    }


    interface BaseEvent {
        cancel: boolean;
        type: string;
    }
    class DataManager {
        constructor(dataSource?: any, query?: ej.Query, adaptor?: any);
        setDefaultQuery(query: ej.Query): void;
        executeQuery(query?: ej.Query, done?: any, fail?: any, always?: any): JQueryPromise<any>;
        executeLocal(query?: ej.Query): ej.DataManager;
        saveChanges(changes?: Changes, key?: string, tableName?: string): JQueryDeferred<any>;
        insert(data: any, tableName?: string): JQueryPromise<any>;
        remove(keyField: string, value: any, tableName?: string): any;
        update(keyField: string, value: any, tableName?: string): any;
    }

    class Query {
        constructor();
        static fn: Query;
        static extend(prototype: any): Query;
        key(field: string): ej.Query;
        using(dataManager: ej.DataManager): ej.Query;
        execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
        executeLocal(dataManager: ej.DataManager): ej.DataManager;
        clone(): ej.Query;
        from(tableName: any): ej.Query;
        addParams(key: string, value: string): ej.Query;
        expand(tables: any): ej.Query;
        where(fieldName: string, operator: ej.FilterOperators, value: any, ignoreCase?: boolean, ignoreAccent?: boolean): ej.Query;
        where(predicate: ej.Predicate): ej.Query;
        search(searchKey: any, fieldNames?: any, operator?: string, ignoreCase?: boolean, ignoreAccent?: boolean): ej.Query;
        sortBy(fieldName: string, comparer?: ej.SortOrder, isFromGroup?: boolean): ej.Query;
        sortByDesc(fieldName: string): ej.Query;
        group(fieldName: string): ej.Query;
        page(pageIndex: number, pageSize: number): ej.Query;
        take(nos: number): ej.Query;
        skip(nos: number): ej.Query;
        select(fieldNames: any): ej.Query;
        hierarchy(query: ej.Query, selectorFn: any): ej.Query;
        foreignKey(key: string): ej.Query;
        requiresCount(): ej.Query;
        range(start: number, end: number): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        pvt: any;
        type: ej.Adaptor;
        options: AdaptorOptions;
        extend(overrides: any): ej.Adaptor;
        processQuery(dm: ej.DataManager, query: ej.Query): any;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
    }

    interface AdaptorOptions {
        from?: string;
        requestType?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        group?: string;
        take?: string;
        search?: string;
        count?: string;
        where?: string;
        aggregates?: string;
    }

    class UrlAdaptor extends ej.Adaptor {
        constructor();
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        onGroup(e: any): void;
        onAggregates(e: any): void;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        getFiltersFrom(data: any, query: ej.Query): ej.Predicate;
    }
    class WebMethodAdaptor extends ej.UrlAdaptor {
        constructor();
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
    }
    class CacheAdaptor extends ej.UrlAdaptor {
        constructor();
        init(adaptor: any, timeStamp: number, pageSize: number): void;
        generateKey(url: string, query: ej.Query): string;
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: any): any;
        processResponse(data: any, ds: any, query: ej.Query, xhr: JQueryXHR, request?: any, changes?: Changes): any;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string };
    }
    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        options: UrlAdaptorOptions;
        onEachWhere(filter: any, requiresCast: boolean): any;
        onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        onWhere(filters: string[]): string;
        onEachSearch(e: any): void;
        onSearch(e: any): string;
        onEachSort(e: any): string;
        onSortBy(e: any): string;
        onGroup(e: any): string;
        onSelect(e: any): string;
        onAggregates(e: any): string;
        onCount(e: any): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
        convertToQueryString(req: any, query: ej.Query, dm: ej.DataManager): JQueryParam;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any; };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any; accept: string; };
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: any; contentType: string; };
        generateDeleteRequest(arr: any[], e: any): string;
        generateInsertRequest(arr: any[], e: any): string;
        generateUpdateRequest(arr: any[], e: any): string;
    }
    interface UrlAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class WebApiAdaptor extends ej.ODataAdaptor {
        constructor();
        insert(dm: ej.DataManager, data: any, tableName?: string): { url: string; type: string; data: any; };
        remove(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; };
        update(dm: ej.DataManager, value: any, keyField?: string, tableName?: string): { url: string; type: string; data: any; accept: string; };
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
    }

    class ODataV4Adaptor extends ej.ODataAdaptor {
        constructor();
        options: ODataAdaptorOptions;
        onCount(e: any): string;
        onEachSearch(e: any): void;
        onSearch(e: any): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processQuery(ds: any, query: ej.Query): {
            type: string; url: string; ejPvtData: any; contentType?: string; data?: any;
        };
        processResponse(data: any, ds: any, query: ej.Query, xhr: any, request: any, changes: Changes): {
            result: any; count: number
        };
    }
    interface ODataAdaptorOptions {
        requestType?: string;
        accept?: string;
        multipartAccept?: string;
        sortBy?: string;
        select?: string;
        skip?: string;
        take?: string;
        count?: string;
        search?: string;
        where?: string;
        expand?: string;
        batch?: string;
        changeSet?: string;
        batchPre?: string;
        contentId?: string;
        batchContent?: string;
        changeSetContent?: string;
        batchChangeSetContentType?: string;
    }

    class JsonAdaptor extends ej.Adaptor {
        constructor();
        processQuery(ds: any, query: ej.Query): string;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): Changes;
        onWhere(ds: any, e: any): any;
        onAggregates(ds: any, e: any): any;
        onSearch(ds: any, e: any): any;
        onSortBy(ds: any, e: any, query: ej.Query): any;
        onGroup(ds: any, e: any, query: ej.Query): any;
        onPage(ds: any, e: any, query: ej.Query): any;
        onRange(ds: any, e: any): any;
        onTake(ds: any, e: any): any;
        onSkip(ds: any, e: any): any;
        onSelect(ds: any, e: any): any;
        insert(dm: ej.DataManager, data: any, tableName?: string): any;
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): any;
    }
    class ForeignKeyAdaptor extends ej.JsonAdaptor {
        constructor(data: any, type: string);
        processQuery(ds: any, query: ej.Query): any;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: any };
    }
    class remoteSaveAdaptor extends ej.UrlAdaptor {
        constructor();
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        insert(dm: ej.DataManager, data: any, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
    }
    class TableModel {
        constructor(name: string, jsonArray: any[], dataManager: ej.DataManager, modelComputed: any);
        on(eventName: string, handler: any): void;
        off(eventName: string, handler: any): void;
        setDataManager(dataManager: DataManager): void;
        saveChanges(): void;
        rejectChanges(): void;
        insert(json: any): void;
        update(value: any): void;
        remove(key: string): void;
        isDirty(): boolean;
        getChanges(): Changes;
        toArray(): any[];
        setDirty(dirty: any, model: any): void;
        get(index: number): void;
        length(): number;
        bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        formElements: string[];
        computes(value: any): void;
        on(eventName: string, handler: any): void;
        off(eventName: string, handler: any): void;
        set(field: string, value: any): void;
        get(field: string): any;
        revert(suspendEvent: any): void;
        save(dm: ej.DataManager, key: string): void;
        markCommit(): void;
        markDelete(): void;
        changeState(state: boolean, args: any): void;
        properties(): any;
        bindTo(element: any): void;
        unbind(element: any): void;
    }
    interface Changes {
        changed?: any[];
        added?: any[];
        deleted?: any[];
    }
    class Predicate {
        constructor();
        constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean, ignoreAccent?: boolean);
        and(field: string, operator: any, value: any, ignoreCase: boolean, ignoreAccent?: boolean): ej.Predicate;
        or(field: string, operator: any, value: any, ignoreCase: boolean, ignoreAccent?: boolean): ej.Predicate;
        or(predicate: any[]): any;
        validate(record: any): boolean;
        toJSON(): {
            isComplex: boolean;
            field: string;
            operator: string;
            value: any;
            ignoreCase: boolean;
            condition: string;
            predicates: any;
        };
    }
    interface dataUtil {
        swap(array: any[], x: number, y: number): void;
        mergeSort(jsonArray: any[], fieldName?: string, comparer?: any): any[];
        max(jsonArray: any[], fieldName?: string, comparer?: string): any[];
        min(jsonArray: any[], fieldName: string, comparer: string): any[];
        distinct(jsonArray: any[], fieldName?: string, requiresCompleteRecord?: any): any[];
        sum(json: any, fieldName: string): number;
        avg(json: any, fieldName: string): number;
        select(jsonArray: any[], fieldName: string, fields: string): any[];
        group(jsonArray: any[], field: string, /* internal */ level: number): any[];
        parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): any;
    }
    interface AjaxSettings {
        type?: string;
        cache: boolean;
        data?: any;
        dataType?: string;
        contentType?: any;
        async?: boolean;
    }
    enum FilterOperators {
        contains,
        endsWith,
        equal,
        greaterThan,
        greaterThanOrEqual,
        lessThan,
        lessThanOrEqual,
        notEqual,
        startsWith
    }

    enum MatrixDefaults {
        m11,
        m12,
        m21,
        m22,
        offsetX,
        offsetY,
        type
    }
    enum MatrixTypes {
        Identity,
        Scaling,
        Translation,
        Unknown
    }

    enum Orientation {
        Horizontal,
        Vertical
    }

    enum SliderType {
        Default,
        MinRange,
        Range
    }

    enum eventType {
        click,
        mouseDown,
        mouseLeave,
        mouseMove,
        mouseUp
    }
    enum headerOption {
        row,
        tHead
    }

    enum filterType {
        StartsWith,
        Contains,
        EndsWith,
        LessThan,
        GreaterThan,
        LessThanOrEqual,
        GreaterThanOrEqual,
        Equal,
        NotEqual
    }
    enum Animation {
        Fade,
        None,
        Slide
    }
    enum Type {
        Overlay,
        Slide
    }
    enum SortOrder {
        Ascending,
        Descending
    }
    const globalize: globalize;
    const cultures: culture;
    function addCulture(name: string, culture?: any): void;
    function preferredCulture(culture?: string): culture;
    function format(value: any, format: string, culture?: string): string;
    function parseInt(value: string, radix?: any, culture?: string): number;
    function parseFloat(value: string, radix?: any, culture?: string): number;
    function parseDate(value: string, format: string, culture?: string): Date;
    function getLocalizedConstants(controlName: string, culture?: string): any;
	function findCulture(culture?: string): culture;

    interface globalize {
        addCulture(name: string, culture?: any): void;
        preferredCulture(culture?: string): culture;
        format(value: any, format: string, culture?: string): string;
        parseInt(value: string, radix?: any, culture?: string): number;
        parseFloat(value: string, radix?: any, culture?: string): number;
        parseDate(value: string, format: string, culture?: string): Date;
        getLocalizedConstants(controlName: string, culture?: string): any;
		findCulture(culture?: string): culture;
    }
    interface culture {
        name?: string;
        englishName?: string;
        namtiveName?: string;
        language?: string;
        isRTL: boolean;
        numberFormat?: formatSettings;
        calendars?: calendarsSettings;
    }
    interface formatSettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        percent: percentSettings;
        currency: currencySettings;
    }
    interface percentSettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface currencySettings {
        pattern: string[];
        decimals: number;
        groupSizes: number[];
        symbol: string;
    }
    interface calendarsSettings {
        standard: standardSettings;
    }
    interface standardSettings {
        firstDay: number;
        days: daySettings;
        months: monthSettings;
        AM: string[];
        PM: string[];
        twoDigitYearMax: number;
        patterns: patternSettings;
    }
    interface daySettings {
        names: string[];
        namesAbbr: string[];
        namesShort: string[];
    }
    interface monthSettings {
        names: string[];
        namesAbbr: string[];
    }
    interface patternSettings {
        d: string;
        D: string;
        t: string;
        T: string;
        f: string;
        F: string;
        M: string;
        Y: string;
        S: string;
    }
    class ReportViewer extends ej.Widget {
        static fn: ReportViewer;
        constructor(element: JQuery | Element, options?: ReportViewer.Model);
        static Locale: any;
        model: ReportViewer.Model;
        defaults: ReportViewer.Model;

        /** Export the report to the specified format.
         * @returns {void}
         */
        exportReport(): void;

        /** Fit the report page to the container.
         * @returns {void}
         */
        fitToPage(): void;

        /** Fit the report page height to the container.
         * @returns {void}
         */
        fitToPageHeight(): void;

        /** Fit the report page width to the container.
         * @returns {void}
         */
        fitToPageWidth(): void;

        /** Get the available datasets name of the rdlc report.
         * @returns {void}
         */
        getDataSetNames(): void;

        /** Get the available parameters of the report.
         * @returns {void}
         */
        getParameters(): void;

        /** Navigate to first page of report.
         * @returns {void}
         */
        gotoFirstPage(): void;

        /** Navigate to last page of the report.
         * @returns {void}
         */
        gotoLastPage(): void;

        /** Navigate to next page from the current page.
         * @returns {void}
         */
        gotoNextPage(): void;

        /** Go to specific page index of the report.
         * @returns {void}
         */
        gotoPageIndex(): void;

        /** Navigate to previous page from the current page.
         * @returns {void}
         */
        gotoPreviousPage(): void;

        /** Print the report.
         * @returns {void}
         */
        print(): void;

        /** Apply print layout to the report.
         * @returns {void}
         */
        printLayout(): void;

        /** Refresh the report.
         * @returns {void}
         */
        refresh(): void;
    }
    export namespace ReportViewer {

        export interface Model {

            /** Gets or sets the list of data sources for the RDLC report.
             * @Default {[]}
             */
            dataSources?: DataSource[];

            /** Enables or disables the page cache of report.
             * @Default {false}
             */
            enablePageCache?: boolean;

            /** Specifies the export settings.
             */
            exportSettings?: ExportSettings;

            /** When set to true, adapts the report layout to fit the screen size of devices on which it renders.
             * @Default {true}
             */
            isResponsive?: boolean;

            /** Specifies the locale for report viewer.
             * @Default {en-US}
             */
            locale?: string;

            /** Specifies the page settings.
             */
            pageSettings?: PageSettings;

            /** Gets or sets the list of parameters associated with the report.
             * @Default {[]}
             */
            parameters?: Parameter[];

            /** Enables and disables the print mode.
             * @Default {false}
             */
            printMode?: boolean;

            /** Specifies the print option of the report.
             * @Default {ej.ReportViewer.PrintOptions.Default}
             */
            printOptions?: ej.ReportViewer.PrintOptions|string;

            /** Specifies the processing mode of the report.
             * @Default {ej.ReportViewer.ProcessingMode.Remote}
             */
            processingMode?: ej.ReportViewer.ProcessingMode|string;

            /** Specifies the render layout.
             * @Default {ej.ReportViewer.RenderMode.Default}
             */
            renderMode?: ej.ReportViewer.RenderMode|string;

            /** Gets or sets the path of the report file.
             * @Default {empty}
             */
            reportPath?: string;

            /** Gets or sets the reports server URL.
             * @Default {empty}
             */
            reportServerUrl?: string;

            /** Specifies the report Web API service URL.
             * @Default {empty}
             */
            reportServiceUrl?: string;

            /** Specifies the toolbar settings.
             */
            toolbarSettings?: ToolbarSettings;

            /** Gets or sets the zoom factor for report viewer.
             * @Default {1}
             */
            zoomFactor?: number;

            /** Specifies the token for authorizing reporting service url to process the reports.
             * @Default {empty}
             */
            serviceAuthorizationToken?: string;

            /** Enables and disables the parameter block scroller.
             * @Default {true}
             */
            enableParameterBlockScroller?: boolean;

            /** Enables and disables the data source credential block scroller.
             * @Default {true}
             */
            enableDatasourceBlockScroller?: boolean;

            /** Render the ReportViewer height based on the report content size.
             * @Default {false}
             */
            sizeToReportContent?: boolean;

            /** Enables and disables the rendering of Viewer when default values are specified for the parameters.
             * @Default {true}
             */
            autoRender?: boolean;

            /** Enables and disables the Error Notification bar.
             * @Default {true}
             */
            enableNotificationBar?: boolean;

            /** Enables and disables the drop-down parameter search.
             * @Default {false}
             */
            enableDropDownSearch?: boolean;

            /** Enables and disables the PageVirtualization.
             * @Default {false}
             */
            enablePageVirtualization?: boolean;

            /** Fires when the report viewer is destroyed successfully.If you want to perform any operation after destroying the reportviewer control,you can make use of the destroy event.
             */
            destroy?(e: DestroyEventArgs): void;

            /** Fires during drill through action done in report.If you want to perform any operation when a drill through action is performed, you can make use of the drillThrough event.
             */
            drillThrough?(e: DrillThroughEventArgs): void;

            /** Fires before report rendering is completed.If you want to perform any operation before the rendering of report,you can make use of the renderingBegin event.
             */
            renderingBegin?(e: RenderingBeginEventArgs): void;

            /** Fires after report rendering completed.If you want to perform any operation after the rendering of report,you can make use of this renderingComplete event.
             */
            renderingComplete?(e: RenderingCompleteEventArgs): void;

            /** Fires when any error occurred while rendering the report.If you want to perform any operation when an error occurs in the report, you can make use of the reportError event.
             */
            reportError?(e: ReportErrorEventArgs): void;

            /** Fires when the report is being exported.If you want to perform any operation before exporting of report, you can make use of the reportExport event.
             */
            reportExport?(e: ReportExportEventArgs): void;

            /** Fires when the report is loaded.If you want to perform any operation after the successful loading of report, you can make use of the reportLoaded event.
             */
            reportLoaded?(e: ReportLoadedEventArgs): void;

            /** Fires when user clicks on a failed report item in the rendered report, before displaying error details dialog. If you want to show custom error detail or perform any action before
             * viewing error detail, you can make use of the showError event.
             */
            showError?(e: ShowErrorEventArgs): void;

            /** Fires when click the View Report Button.
             */
            viewReportClick?(e: ViewReportClickEventArgs): void;

            /** Fires before the ajax request process started.
             */
            ajaxBeforeLoad?(e: AjaxBeforeLoadEventArgs): void;

            /** Fires when ajax post call succeed.
             */
            ajaxSuccess?(e: AjaxSuccessEventArgs): void;

            /** Fires when ajax request failed.
             */
            ajaxError?(e: AjaxErrorEventArgs): void;

            /** This event will be triggered on rendering the Report Viewer toolbar.
             */
            toolbarRendering?(e: ToolbarRenderingEventArgs): void;

            /** Fires when the export progress is changed. To perform any operation when the export progress is changed, use the exportProgressChanged event.
             */
            exportProgressChanged?(e: ExportProgressChangedEventArgs): void;

            /** Fires when the print progress is changed. To perform any operation when the print progress is changed, use the printProgressChanged event.
             */
            printProgressChanged?(e: PrintProgressChangedEventArgs): void;

            /** Fires when the export items are clicked. To perform any operation when the export items are clicked, use the exportItemClick event.
             */
            exportItemClick?(e: ExportItemClickEventArgs): void;

            /** Fires when the toolbar items are clicked. To perform any operation when the toolbar items are clicked, use the toolBarItemClick event.
             */
            toolBarItemClick?(e: ToolBarItemClickEventArgs): void;

            /** Fires when the hyperlink action is performed in the report. To perform any operation during the hyperlink action, use the hyperlink event.
             */
            hyperlink?(e: HyperlinkEventArgs): void;

            /** Fires when the report print action is performed in the report. To perform any operation during the report print action, use the ReportPrint event.
             */
            reportPrint?(e: ReportPrintEventArgs): void;
        }

        export interface DestroyEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface DrillThroughEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the actionInfo's parameters bookmarkLink, reportName, parameters.
             */
            actionInfo?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface RenderingBeginEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface RenderingCompleteEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;

            /** returns the collection of parameters.
             */
            reportParameters?: any;
        }

        export interface ReportErrorEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the error details.
             */
            error?: string;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportExportEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportLoadedEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ShowErrorEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the error code.
             */
            errorCode?: string;

            /** returns the error message.
             */
            message?: string;

            /** returns the detailed error information.
             */
            detail?: string;
        }

        export interface ViewReportClickEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the parameter collection.
             */
            parameters?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface AjaxBeforeLoadEventArgs {

            /** returns the reportViewerToken.
             */
            reportViewerToken?: string;

            /** returns the serviceAuthorizationToken.
             */
            serviceAuthorizationToken?: string;

            /** Send the headerReq collection.
             */
            headerReq?: any;

            /** Send the headers collection.
             */
            headers?: any;

            /** Send the custom data.
             */
            data?: string;
        }

        export interface AjaxSuccessEventArgs {

            /** returns the success data.
             */
            data?: any;
        }

        export interface AjaxErrorEventArgs {

            /** returns the error details
             */
            msg?: string;
        }

        export interface ToolbarRenderingEventArgs {
        }

        export interface ExportProgressChangedEventArgs {

            /** returns the export format
             */
            format?: string;

            /** returns the stage of export processing.
             */
            stage?: string;

            /** true if the event should be handled; otherwise, false.
             */
            handled?: boolean;

            /** returns ReportViewer container Id.
             */
            containerId?: string;
        }

        export interface PrintProgressChangedEventArgs {

            /** returns the stage of export processing.
             */
            stage?: string;

            /** returns the currentPage value
             */
            currentPage?: string;

            /** returns the totalPages value
             */
            totalPages?: string;

            /** true if the event should be handled; otherwise, false.
             */
            handled?: boolean;

            /** returns ReportViewer container Id.
             */
            containerId?: string;
        }

        export interface ExportItemClickEventArgs {

            /** returns the export format value.
             */
            value?: string;
        }

        export interface ToolBarItemClickEventArgs {

            /** returns the toolbar clicked item name .
             */
            target?: string;

            /** returns the CSS class name specified for the toolbar item
             */
            cssClass?: string;

            /** returns the Toolbar item rendered group index
             */
            groupIndex?: string;

            /** returns the Toolbar item rendered index
             */
            Index?: string;

            /** returns the Toolbar item value.
             */
            value?: string;
        }

        export interface HyperlinkEventArgs {

            /** true if the event should be canceled; otherwise, false.
             */
            cancel?: boolean;

            /** returns the actionInfo's hyperLink detail
             */
            actionInfo?: any;

            /** returns the report model.
             */
            model?: any;

            /** returns the name of the event.
             */
            type?: string;
        }

        export interface ReportPrintEventArgs {

            /** true if you have to load the external style file; otherwise, false.
             */
            isStyleLoad?: boolean;
        }

        export interface DataSource {

            /** Gets or sets the name of the data source.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the values of data source.
             * @Default {[]}
             */
            value?: any[];
        }

        export interface ExportSettings {

            /** Specifies the export formats.
             * @Default {ej.ReportViewer.ExportOptions.All}
             */
            exportOptions?: ej.ReportViewer.ExportOptions|string;

            /** Specifies the excel export format.
             * @Default {ej.ReportViewer.ExcelFormats.Excel97to2003}
             */
            excelFormat?: ej.ReportViewer.ExcelFormats|string;

            /** Specifies the word export format.
             * @Default {ej.ReportViewer.WordFormats.Doc}
             */
            wordFormat?: ej.ReportViewer.WordFormats|string;

            /** Add the custom icon item to the export options.
             * @Default {empty}
             */
            customItems?: any[];
        }

        export interface PageSettings {

            /** Specifies the print layout orientation.
             * @Default {null}
             */
            orientation?: ej.ReportViewer.Orientation|string;

            /** Specifies the paper size of print layout.
             * @Default {null}
             */
            paperSize?: ej.ReportViewer.PaperSize|string;
        }

        export interface Parameter {

            /** Gets or sets the parameter labels.
             * @Default {null}
             */
            labels?: any[];

            /** Gets or sets the name of the parameter.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets whether the parameter allows nullable value or not.
             * @Default {false}
             */
            nullable?: boolean;

            /** Gets or sets the prompt message associated with the specified parameter.
             * @Default {empty}
             */
            prompt?: string;

            /** Gets or sets the parameter values.
             * @Default {[]}
             */
            values?: any[];
        }

        export interface ToolbarSettings {

            /** Fires when user click on toolbar item in the toolbar.
             * @Default {empty}
             */
            click?: string;

            /** Specifies the toolbar items.
             * @Default {ej.ReportViewer.ToolbarItems.All}
             */
            items?: ej.ReportViewer.ToolbarItems|string;

            /** Shows or hides the toolbar.
             * @Default {true}
             */
            showToolbar?: boolean;

            /** Shows or hides the tooltip of toolbar items.
             * @Default {true}
             */
            showTooltip?: boolean;

            /** Specifies the toolbar template ID.
             * @Default {empty}
             */
            templateId?: string;

            /** Add the custom icon item to the toolbar.
             * @Default {empty}
             */
            customItems?: any[];

            /** Add the custom icon groups to the toolbar.
             * @Default {empty}
             */
            customGroups?: any[];
        }

        enum ExportOptions {

            ///Specifies the All property in ExportOptions to get all available options.
            All,

            ///Specifies the PDF property in ExportOptions to get PDF option.
            PDF,

            ///Specifies the Word property in ExportOptions to get Word option.
            Word,

            ///Specifies the Excel property in ExportOptions to get Excel option.
            Excel,

            ///Specifies the HTML property in ExportOptions to get HTML option.
            HTML
        }


        enum ExcelFormats {

            ///Specifies the Excel97to2003 property in ExcelFormats to get specified version of exported format.
            Excel97to2003,

            ///Specifies the Excel2007 property in ExcelFormats to get specified version of exported format.
            Excel2007,

            ///Specifies the Excel2010 property in ExcelFormats to get specified version of exported format.
            Excel2010,

            ///Specifies the Excel2013 property in ExcelFormats to get specified version of exported format.
            Excel2013
        }


        enum WordFormats {

            ///Specifies the Doc property in WordFormats to get specified version of exported format.
            Doc,

            ///Specifies the Dot property in WordFormats to get specified version of exported format.
            Dot,

            ///Specifies the DOCX property in WordFormats to get specified version of exported format.
            DOCX,

            ///Specifies the Word2007 property in WordFormats to get specified version of exported format.
            Word2007,

            ///Specifies the Word2010 property in WordFormats to get specified version of exported format.
            Word2010,

            ///Specifies the Word2013 property in WordFormats to get specified version of exported format.
            Word2013,

            ///Specifies the Word2007Dotx property in WordFormats to get specified version of exported format.
            Word2007Dotx,

            ///Specifies the Word2010Dotx property in WordFormats to get specified version of exported format.
            Word2010Dotx,

            ///Specifies the Word2013Dotx property in WordFormats to get specified version of exported format.
            Word2013Dotx,

            ///Specifies the Word2007Docm property in WordFormats to get specified version of exported format.
            Word2007Docm,

            ///Specifies the Word2010Docm property in WordFormats to get specified version of exported format.
            Word2010Docm,

            ///Specifies the Word2013Docm property in WordFormats to get specified version of exported format.
            Word2013Docm,

            ///Specifies the Word2007Dotm property in WordFormats to get specified version of exported format.
            Word2007Dotm,

            ///Specifies the Word2010Dotm property in WordFormats to get specified version of exported format.
            Word2010Dotm,

            ///Specifies the Word2013Dotm property in WordFormats to get specified version of exported format.
            Word2013Dotm,

            ///Specifies the RTF property in WordFormats to get specified version of exported format.
            RTF,

            ///Specifies the Txt property in WordFormats to get specified version of exported format.
            Txt,

            ///Specifies the EPUB property in WordFormats to get specified version of exported format.
            EPUB,

            ///Specifies the HTML property in WordFormats to get specified version of exported format.
            HTML,

            ///Specifies the XML property in WordFormats to get specified version of exported format.
            XML,

            ///Specifies the Automatic property in WordFormats to get specified version of exported format.
            Automatic
        }


        enum Orientation {

            ///Specifies the Landscape property in pageSettings.orientation to get specified layout.
            Landscape,

            ///Specifies the portrait property in pageSettings.orientation to get specified layout.
            Portrait
        }


        enum PaperSize {

            ///Specifies the A3 as value in pageSettings.paperSize to get specified size.
            A3,

            ///Specifies the A4 as value in pageSettings.paperSize to get specified size.
            Portrait,

            ///Specifies the B4(JIS) as value in pageSettings.paperSize to get specified size.
            B4_JIS,

            ///Specifies the B5(JIS) as value in pageSettings.paperSize to get specified size.
            B5_JIS,

            ///Specifies the Envelope #10 as value in pageSettings.paperSize to get specified size.
            Envelope_10,

            ///Specifies the Envelope as value in pageSettings.paperSize to get specified size.
            Envelope_Monarch,

            ///Specifies the Executive as value in pageSettings.paperSize to get specified size.
            Executive,

            ///Specifies the Legal as value in pageSettings.paperSize to get specified size.
            Legal,

            ///Specifies the Letter as value in pageSettings.paperSize to get specified size.
            Letter,

            ///Specifies the Tabloid as value in pageSettings.paperSize to get specified size.
            Tabloid,

            ///Specifies the Custom as value in pageSettings.paperSize to get specified size.
            Custom
        }


        enum PrintOptions {

            ///Specifies the Default property in printOptions.
            Default,

            ///Specifies the NewTab property in printOptions.
            NewTab,

            ///Specifies the None property in printOptions.
            None
        }


        enum ProcessingMode {

            ///Specifies the Remote property in processingMode.
            Remote,

            ///Specifies the Local property in processingMode.
            Local
        }


        enum RenderMode {

            ///Specifies the Default property in RenderMode to get default output.
            Default,

            ///Specifies the Mobile property in RenderMode to get specified output.
            Mobile,

            ///Specifies the Desktop property in RenderMode to get specified output.
            Desktop
        }


        enum ToolbarItems {

            ///Specifies the Print as value in ToolbarItems to get specified item.
            Print,

            ///Specifies the Refresh as value in ToolbarItems to get specified item.
            Refresh,

            ///Specifies the Zoom as value in ToolbarItems to get specified item.
            Zoom,

            ///Specifies the FittoPage as value in ToolbarItems to get specified item.
            FittoPage,

            ///Specifies the Export as value in ToolbarItems to get specified item.
            Export,

            ///Specifies the PageNavigation as value in ToolbarItems to get specified item.
            PageNavigation,

            ///Specifies the Parameters as value in ToolbarItems to get specified item.
            Parameters,

            ///Specifies the PrintLayout as value in ToolbarItems to get specified item.
            PrintLayout,

            ///Specifies the PageSetup as value in ToolbarItems to get specified item.
            PageSetup
        }

    }

    class ReportDesigner extends ej.Widget {
        static fn: ReportDesigner;
        constructor(element: JQuery | Element, options?: ReportDesigner.Model);
        static Locale: any;
        model: ReportDesigner.Model;
        defaults: ReportDesigner.Model;

        /** Add a dataset to the report at runtime.
         * @param {any} a JSON to define a connection properties for dataset.
         * @returns {void}
         */
        addDataSet(dataset: any): void;

        /** Add a datasource to the report at runtime.
         * @param {any} a JSON to define a connection properties for datasource.
         * @returns {void}
         */
        addDataSource(datasource: any): void;

        /** Add a report item to the report at runtime.
         * @param {any} JSON for the new report item to be added
         * @returns {void}
         */
        addReportItem(item: any): void;

        /** Visually move the selected report item over its closest intersected report items.
         * @returns {void}
         */
        bringForward(): void;

        /** Visually move the selected report item over all other intersected report items.
         * @returns {void}
         */
        bringToFront(): void;

        /** Determines whether a copy operation is possible.
         * @returns {boolean}
         */
        canCopy(): boolean;

        /** Determines whether a cut operation is possible.
         * @returns {boolean}
         */
        canCut(): boolean;

        /** Determines whether a paste operation is possible.
         * @returns {boolean}
         */
        canPaste(): boolean;

        /** Returns the boolean value indicating whether the user can redo the previous action in the report.
         * @returns {boolean}
         */
        canRedo(): boolean;

        /** Determines whether a delete operation is possible.
         * @returns {boolean}
         */
        canRemove(): boolean;

        /** Returns a boolean value indicating whether the user can undo the previous action in the report.
         * @returns {boolean}
         */
        canUndo(): boolean;

        /** Clone the existing dataset in the report at runtime.
         * @param {string} Name of the existing dataset.
         * @returns {void}
         */
        cloneDataSet(name: string): void;

        /** Clone the existing datasource in the report at runtime.
         * @param {string} Name of the existing datasource.
         * @returns {void}
         */
        cloneDataSource(name: string): void;

        /** Copies the selected report item from design panel to the Report Designer internal clipboard.
         * @returns {void}
         */
        copy(): void;

        /** Cuts the selected report item from design panel to the Report Designer internal clipboard.
         * @returns {void}
         */
        cut(): void;

        /** Returns the boolean value that specifies whether the report has changes or not.
         * @returns {boolean}
         */
        hasReportChanges(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is a new report or not.
         * @returns {boolean}
         */
        isNewReport(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is a new server report or not.
         * @returns {boolean}
         */
        isNewServerReport(): boolean;

        /** Returns the boolean value that specifies whether the currently processing report is obtained from the server or local.
         * @returns {boolean}
         */
        isServerReport(): boolean;

        /** To create a new report.
         * @returns {void}
         */
        newReport(): void;

        /** To create a new report in the server.
         * @returns {void}
         */
        newServerReport(): void;

        /** This method opens the report from the server.
         * @returns {void}
         */
        openReport(): void;

        /** Opens the client browse dialog to browse the report.
         * @returns {void}
         */
        openReportFromDevice(): void;

        /** Opens the report designer browse dialog to browse the available reports in the reportserver.
         * @returns {void}
         */
        openServerReportDialog(): void;

        /** Pastes the selected report item from the Report Designer internal clipboard to design panel.
         * @returns {void}
         */
        paste(): void;

        /** Reverses the action of the last Undo command.
         * @returns {void}
         */
        redo(): void;

        /** Deletes the selected report item from the report.
         * @returns {void}
         */
        remove(): void;

        /** Remove a dataset from the report at runtime.
         * @param {string} Name of the dataset.
         * @returns {void}
         */
        removeDataSet(dataset: string): void;

        /** Remove a datasource from the report at runtime.
         * @param {string} Name of the datasource.
         * @returns {void}
         */
        removeDatasource(datasource: string): void;

        /** Remove the given report item from the report.
         * @param {string} Name of the report item to be removed from report
         * @returns {void}
         */
        removeReportItem(itemName: string): void;

        /** This method saves the report into the server.
         * @returns {void}
         */
        saveReport(): void;

        /** Opens the report designer browse dialog to save the report into server.
         * @returns {void}
         */
        saveServerReportDialog(): void;

        /** To download the designed report.
         * @returns {void}
         */
        saveToDevice(): void;

        /** Update the selection to report item at runtime.
         * @param {string} Name of the report item.
         * @returns {void}
         */
        selectReportItem(itemName: string): void;

        /** Visually move the selected report item behind its closest intersected report item.
         * @returns {void}
         */
        sendBackward(): void;

        /** Visually move the selected report item behind all other intersected report items.
         * @returns {void}
         */
        sendToBack(): void;

        /** Performs switch action from viewer to designer at runtime.
         * @returns {void}
         */
        showDesign(): void;

        /** To open the new report dialog.
         * @returns {void}
         */
        showNewReportDialog(): void;

        /** To open the server browse dialog.
         * @returns {void}
         */
        showOpenSaveReportDialog(): void;

        /** Performs switch action from designer to viewer at runtime.
         * @returns {void}
         */
        showPreview(): void;

        /** Reverses the last action that was performed.
         * @returns {void}
         */
        undo(): void;

        /** Update the dataset in the report at runtime.
         * @param {string} Name of the existing dataset.
         * @param {any} a JSON to define a connection properties for dataset.
         * @returns {void}
         */
        updateDataset(datasetName: string, dataset: any): void;

        /** Update the datasource in the report at runtime.
         * @param {string} Name of the existing datasource.
         * @param {any} a JSON to define a connection properties for datasource.
         * @returns {void}
         */
        updateDatasource(datasourceName: string, datasource: any): void;
    }
    export namespace ReportDesigner {

        export interface Model {

            /** Shows or hides the items of configuration pane in ReportDesigner control.
             * @Default {ej.ReportDesigner.ConfigureItems.All}
             */
            configurePaneSettings?: ConfigurePaneSettings;

            /** Specifies the locale for report designer.
             * @Default {en-US}
             */
            locale?: string;

            /** Gets or sets the list of custom data extension items.
             * @Default {[]}
             */
            reportDataExtensions?: ReportDataExtension[];

            /** Gets or sets the list of custom report items.
             * @Default {[]}
             */
            reportItemExtensions?: ReportItemExtension[];

            /** Gets or sets the report path of server.
             * @Default {null}
             */
            reportPath?: string;

            /** Gets or sets the reports server URL.
             * @Default {null}
             */
            reportServerUrl?: string;

            /** Gets or sets the serviceAuthorizationToken to access the Report Server API services.
             * @Default {empty}
             */
            serviceAuthorizationToken?: string;

            /** Gets or sets the URL of the  WebAPI service; it will be used for processing the report.
             * @Default {null}
             */
            serviceUrl?: string;

            /** Gets or sets the tenant name of the user groups; it will be used when integrating report designer with server.
             * @Default {null}
             */
            tenantName?: string;

            /** Defines the settings of the ReportDesigner toolbar.
             */
            toolbarSettings?: ToolbarSettings;

            /** This event will be triggered before AJAX loads.
             */
            ajaxBeforeLoad?(e: AjaxBeforeLoadEventArgs): void;

            /** This event will be triggered when AJAX result is failed.
             */
            ajaxError?(e: AjaxErrorEventArgs): void;

            /** This event will be triggered when AJAX result is succeeded.
             */
            ajaxSuccess?(e: AjaxSuccessEventArgs): void;

            /** This event will be triggered when the Report Designer widget is created.
             */
            create?(e: CreateEventArgs): void;

            /** This event will be triggered when the Report Designer widget is destroyed.
             */
            destroy?(e: DestroyEventArgs): void;

            /** This event will be triggered while clicking open menu items.
             */
            openReportClick?(e: OpenReportClickEventArgs): void;

            /** This event will be triggered when the report is modified.
             */
            reportModified?(e: ReportModifiedEventArgs): void;

            /** This event will be triggered when the report is opened.
             */
            reportOpened?(e: ReportOpenedEventArgs): void;

            /** This event will be triggered when the report is saved.
             */
            reportSaved?(e: ReportSavedEventArgs): void;

            /** This event will be triggered when the save menu items are clicked.
             */
            saveReportClick?(e: SaveReportClickEventArgs): void;

            /** This event will be triggered while clicking the toolbar items.
             */
            toolbarClick?(e: ToolbarClickEventArgs): void;

            /** This event will be triggered on rendering the Report Designer toolbar.
             */
            toolbarRendering?(e: ToolbarRenderingEventArgs): void;

            /** This event will be triggered on locale change action in report designer.
             */
            extensionLocaleChanged?(e: ExtensionLocaleChangedEventArgs): void;
        }

        export interface AjaxBeforeLoadEventArgs {

            /** AJAX headers, we can pass any custom header through this property.
             */
            headers?: any[];

            /** To pass the custom data while AJAX post back.
             */
            data?: any;

            /** Token of report designer.
             */
            reportDesignerToken?: string;

            /** Token of ReportingService.
             */
            serviceAuthorizationToken?: string;

            /** Action type of AJAX call back.
             */
            actionType?: string;
        }

        export interface AjaxErrorEventArgs {
        }

        export interface AjaxSuccessEventArgs {
        }

        export interface CreateEventArgs {
        }

        export interface DestroyEventArgs {
        }

        export interface OpenReportClickEventArgs {

            /** DOM of the clicked target.
             */
            target?: JQuery;

            /** Name of selected item.
             */
            select?: string;
        }

        export interface ReportModifiedEventArgs {

            /** Specifies whether the report is modified or not.
             */
            isModified?: boolean;

            /** Name of Opened Report.
             */
            reportName?: string;
        }

        export interface ReportOpenedEventArgs {

            /** Specifies whether report opened from device or server.
             */
            isServerReport?: boolean;

            /** Name of Opened Report.
             */
            reportName?: string;
        }

        export interface ReportSavedEventArgs {

            /** Specifies whether report opened from device or server.
             */
            isServerReport?: boolean;

            /** States whether report is downloaded from ReportServer.
             */
            reportAction?: string;
        }

        export interface SaveReportClickEventArgs {

            /** DOM of the clicked target.
             */
            target?: JQuery;

            /** Name of selected item.
             */
            select?: string;
        }

        export interface ToolbarClickEventArgs {

            /** DOM of the clicked target.
             */
            target?: JQuery;

            /** Name of clicked item.
             */
            click?: string;
        }

        export interface ToolbarRenderingEventArgs {
        }

        export interface ExtensionLocaleChangedEventArgs {
        }

        export interface ConfigurePaneSettings {

            /** Shows or hides the configuration pane in ReportDesigner control.
             * @Default {true}
             */
            showConfigurePane?: boolean;
        }

        export interface ReportDataExtension {

            /** Gets or sets the name of the datasource type.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the class name of the data extension.
             * @Default {empty}
             */
            className?: string;

            /** Gets or sets the image class name to load image in data pane tile.
             * @Default {empty}
             */
            imageClass?: string;

            /** Gets or sets the name for data extension item to display in the data pane tile.
             * @Default {empty}
             */
            displayName?: string;
        }

        export interface ReportItemExtension {

            /** Gets or sets the name for the report item.
             * @Default {empty}
             */
            name?: string;

            /** Gets or sets the class name of the report item.
             * @Default {empty}
             */
            className?: string;

            /** Gets or sets the image class name to load image in widgets pane tile.
             * @Default {empty}
             */
            imageClass?: string;

            /** Gets or sets the name for custom report item to display in the widgets pane tile.
             * @Default {empty}
             */
            displayName?: string;

            /** Gets or sets the category name for the report item.
             * @Default {empty}
             */
            category?: string;

            /** Gets information to provide content for custom report item tooltip.
             * @Default {null}
             */
            toolTip?: any;
        }

        export interface ToolbarSettings {

            /** Shows or hides the grouped items in the toolbar with the help of enum ej.ReportDesigner.ToolbarItems.
             * @Default {ej.ReportDesigner.ToolbarItems.All}
             */
            items?: ej.ReportDesigner.ToolbarItems|string;

            /** Shows or hides the toolbar.
             * @Default {true}
             */
            showToolbar?: boolean;

            /** Specifies the toolbar template ID.
             * @Default {empty}
             */
            templateId?: string;
        }

        enum ToolbarItems {

            ///Creates a new, blank report.
            New,

            ///Displays the Open dialog box to retrieve an existing report.
            Open,

            ///Saves the active report to a specified location.
            Save,

            ///Removes the selected item from the active report.
            Cut,

            ///Copies selected text or object to the clipboard.
            Copy,

            ///Pastes the item that cut or copied into (the position of the insertion point) the report from the clipboard.
            Paste,

            ///Deletes the selected item or text from the report.
            Delete,

            ///Reverses the last action or deletes the last entry that is typed.
            Undo,

            ///Reverses the action of the last Undo command.
            Redo,

            ///Used to "zoom in" to get a close-up view of a report or "zoom out" to see more of the page at a reduced size.
            Zoom,

            ///Previews the active report in report viewer.
            Preview,

            ///Enables/Disables the gridline in active report.
            GridLine,

            ///Enables header area in the report.
            Header,

            ///Enables footer area in the report.
            Footer,

            ///Visually move the selected report item behind its closest intersected report item.
            SendBackward,

            ///Visually move the selected report item over its closest intersected report items.
            BringForward,

            ///Visually move the selected report item behind all other intersected report items.
            SendToBack,

            ///Visually move the selected report item over all other intersected report items.
            BringToFront,

            ///Switches from preview to design view of the report.
            EditDesign,

            ///Shows all the toolbar items.
            All
        }

    }

}

interface JQueryXHR {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryPromise<T> {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryDeferred<T> {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQueryParam {
    /**
     * Returns the cancel option value.
     */
    cancel?: boolean;
}
interface JQuery {
    data(key: any): any;
}
interface Window {
    ej: typeof ej;
}
interface JQuery {

    ejReportDesigner(options?: ej.ReportDesigner.Model): JQuery;
    ejReportDesigner(memberName: any, value?: any, param?: any): any;

    ejReportViewer(options?: ej.ReportViewer.Model): JQuery;
    ejReportViewer(memberName: any, value?: any, param?: any): any;
    data(key: "ejReportDesigner"): ej.ReportDesigner;
    data(key: "ejReportViewer"): ej.ReportViewer;
}
