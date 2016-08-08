// Type definitions for ej.mobile.all v14.1.0.41
// Project: http://help.syncfusion.com/js/typescript
// Definitions by: Syncfusion <https://github.com/syncfusion/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/*!
*  filename: ej.mobile.all.d.ts
*  version : 14.1.0.41
*  Copyright Syncfusion Inc. 2001 - 2016. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
declare module ej {
	
	var dataUtil: dataUtil;
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
    function blockDefaultActions(e: Object): void;
    function buildTag(tag: string, innerHtml: string, styles: Object, attrs: Object): JQuery;
    function cancelEvent(): string;
    function copyObject(): string;
    function createObject(nameSpace: string, value: Object, initIn: string): JQuery;
    function defineClass(className: string, constructor:any, proto: Object, replace: boolean): Object;
    function destroyWidgets(element: Object): void;
    function endEvent(): string;
    function event(type: string, data: any, eventProp: Object): Object;
    function getAndroidVersion(): Object;
    function getAttrVal(ele: Object, val: string, option: Object): Object;
    function getBooleanVal(ele: Object, val: string, option: Object): Object;
    function getClearString(): string;
    function getDimension(element: Object, method: string): Object;
    function getFontString(fontObj: Object): string;
    function getFontStyle(style: string): string;
    function getMaxZindex(): number;
    function getNameSpace(className: string): string;
    function getObject(nameSpace: string): Object;
    function getOffset(ele: string): Object;
    function getRenderMode(): string;
    function getScrollableParents(element: Object): void;
    function getTheme(): string;
    function getZindexPartial(element: Object, popupEle: string): number;
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
    function isNullOrUndefined(value: Object): boolean;
    function isPlainObject(): JQuery;
    function isPortrait(): any;
    function isTablet(): boolean;
    function isWindowsWebView(): string;
    function listenEvents(selectors:any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function listenTouchEvent(selectors:any, eventTypes: any, handlers: any, remove?: any, pluginObj?: any, disableMouse?: boolean): void;
    function logBase(val: string, base: string): number;
    function measureText(text: string, maxwidth: number, font: string): string;
    function moveEvent(): string;
    function print(element: string): void;
    function proxy(fn: Object, context: string, arg: string): boolean;
    function round(value: string, div: string, up: string): any;
    function sendAjaxRequest(ajaxOptions: Object): void;
    function setCaretToPos(nput: string, pos1: string, pos2: string): void;
    function setRenderMode(element: string): void;
    function setTheme(): Object;
    function startEvent(): string;
    function tapEvent(): string;
    function tapHoldEvent(): string;
    function throwError(): Object;
    function transitionEndEvent(): Object;
    function userAgent(): boolean;
    function widget(pluginName: string, className: string, proto: Object): Object;
    function avg(json: Object, filedName: string): any;
    function getGuid(prefix: string): number;
    function group(jsonArray: any, field: string, agg: string, level: number, groupDs: string): Object;
    function isJson(jsonData: string): string;
    function max(jsonArray: any, fieldName: string, comparer: string): any;
    function min(jsonArray: any, fieldName: string, comparer: string): any;
    function merge(first: string, second: string): any;
    function mergeshort(jsonArray: any, fieldName: string, comparer: string): any;
    function parseJson(jsonText: string): string;
    function parseTable(table: number, headerOption: string, headerRowIndex: string): Object;
    function select(jsonArray: any, fields: string): any;
    function setTransition(): boolean;
    function sum(json: string, fieldName: string): string;
    function swap(array: any, x: string, y: string): any; 
    var cssUA: string;
    var serverTimezoneOffset: number;
    var transform: string;
    var transformOrigin: string;
    var transformStyle: string;
    var transition: string;
    var transitionDelay: string;
    var transitionDuration: string;
    var transitionProperty: string;
    var transitionTimingFunction: string;
    export module device {
        function isAndroid(): boolean;
        function isIOS(): boolean;
        function isFlat(): boolean;
        function isIOS7(): boolean;
        function isWindows(): boolean;
    }
    export module widget {
        var autoInit: boolean;
        var registeredInstances: Array<any>;
        var registeredWidgets: Array<any>;
        function register(pluginName: string, className: string, prototype: any): void;
        function destroyAll(elements: Element): void;
        function init(element: Element): void;
        function registerInstance(element: Element, pluginName: string, className: string, prototype: any):void;
    } 
	
	interface browserInfoOptions {
		name: string;
		version: string;
		culture: Object;
		isMSPointerEnabled: boolean;
	}
	class WidgetBase {
        destroy(): void;
        element: JQuery;
        setModel(options: Object, forceSet?: boolean):any;
        option(prop?: Object, value?: Object, forceSet?: boolean): any;
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
        insert(data: Object, tableName: string): JQueryPromise<any>;
        remove(keyField: string, value: any, tableName: string): Object;
        update(keyField: string, value: any, tableName: string): Object;
    }    

    class Query {
        constructor();
        static fn: Query;
        static extend(prototype: Object): Query;
        key(field: string): ej.Query;
        using(dataManager: ej.DataManager): ej.Query;
        execute(dataManager: ej.DataManager, done: any, fail?: string, always?: string): any;
        executeLocal(dataManager: ej.DataManager): ej.DataManager;
        clone(): ej.Query;
        from(tableName: any): ej.Query;
        addParams(key: string, value: string): ej.Query;
        expand(tables: any): ej.Query;
        where(fieldName: string, operator: ej.FilterOperators, value: string, ignoreCase?: boolean): ej.Query;
		where(predicate:ej.Predicate):ej.Query;
        search(searchKey: any, fieldNames?:  any, operator?: string, ignoreCase?: boolean): ej.Query;
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
        range(start:number, end:number): ej.Query;
    }

    class Adaptor {
        constructor(ds: any);
        pvt: Object;
        type: ej.Adaptor;
        options: AdaptorOptions;
        extend(overrides: any): ej.Adaptor;
        processQuery(dm: ej.DataManager, query: ej.Query):any;
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes): Object;
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
        processQuery(dm: ej.DataManager, query: ej.Query, hierarchyFilters?: Object): {
            type: string; url: string; ejPvtData: Object; contentType?: string; data?: Object;
        }
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
        processResponse(data: Object, ds: any, query: ej.Query, xhr: JQueryXHR, request?: Object, changes?: Changes): Object;
        onGroup(e: any): void;
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): void;
        beforeSend(dm: ej.DataManager, request: any, settings?:any): void;
        insert(dm: ej.DataManager, data: Object, tableName: string): { url: string; data: any };
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data?: any };
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { type: string; url: string; data: any };
        getFiltersFrom(data: Object, query: ej.Query): ej.Predicate;
    }

    class ODataAdaptor extends ej.UrlAdaptor {
        constructor();
        options: UrlAdaptorOptions;
        onEachWhere(filter: any, requiresCast: boolean): any;
        onPredicate(pred: ej.Predicate, query: ej.Query, requiresCast: boolean): string;
        onComplexPredicate(pred: ej.Predicate, requiresCast: boolean): string;
        onWhere(filters: Array<string>): string;
        onEachSearch(e: Object): void;
        onSearch(e: Object): string;
        onEachSort(e: Object): string;
        onSortBy(e: Object): string;
        onGroup(e: Object): string;
        onSelect(e: Object): string;
        onCount(e: Object): string;
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: Object, ds: Object, query: ej.Query, xhr:any, request: any, changes: Changes): {
            result: Object; count: number
        };
        convertToQueryString(req: Object, query: ej.Query, dm: ej.DataManager): JQueryParam;
        insert(dm: ej.DataManager, data: Object, tableName: string): { url: string; data: Object; }
        remove(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; }
        update(dm: ej.DataManager, keyField: string, value: any, tableName: string): { url: string; type: string; data: Object; accept: string; }
        batchRequest(dm: ej.DataManager, changes: Changes, e: any): { url: string; type: string; data: Object; contentType: string; }
        generateDeleteRequest(arr: Array<any>, e: any): string;
        generateInsertRequest(arr: Array<any>, e: any): string;
        generateUpdateRequest(arr: Array<any>, e: any): string;
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

    class ODataV4Adaptor extends ej.ODataAdaptor {
        constructor();
        options: ODataAdaptorOptions;
        onCount(e: Object): string;
        onEachSearch(e: Object): void;
        onSearch(e: Object): string; 
        beforeSend(dm: ej.DataManager, request: any, settings?: any): void;
        processResponse(data: Object, ds: Object, query: ej.Query, xhr:any, request: any, changes: Changes): {
            result: Object; count: number
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
        processQuery(ds: Object, query: ej.Query): string;
        batchRequest(dm: ej.DataManager, changes: Changes, e:any): Changes;
        onWhere(ds: Object, e: any): any;
        onSearch(ds: Object, e: any): any
        onSortBy(ds: Object, e: any, query: ej.Query): Object;
        onGroup(ds: Object, e: any, query: ej.Query): Object;
        onPage(ds: Object, e: any, query: ej.Query): Object;
        onRange(ds: Object, e: any): Object;
        onTake(ds: Object, e: any): Object;
        onSkip(ds: Object, e: any): Object;
        onSelect(ds: Object, e: any): Object;
        insert(dm: ej.DataManager, data: any): Object;
        remove(dm: ej.DataManager, keyField: string, value:any, tableName: string): Object;
        update(dm: ej.DataManager, keyField: string, value:any, tableName: string): Object;
    }
    class TableModel {
        constructor(name: string, jsonArray: Array<any>, dataManager: ej.DataManager, modelComputed: any);
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
        toArray(): Array<any>;
        setDirty(dirty:any, model:any): void;
        get(index: number): void;
        length(): number;
        bindTo(element: any): void;
    }
    class Model {
        constructor(json: any, table: string, name: string);
        formElements: Array<string>;
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
        changed?: Array<any>;
        added?: Array<any>;
        deleted?: Array<any>;
    }
    class Predicate {
        constructor(field: string, operator: ej.FilterOperators, value: any, ignoreCase: boolean);
        and(field: string, operator: any, value:any, ignoreCase:boolean): void;
        or(field: string, operator: any, value: any, ignoreCase: boolean): void;
        validate(record: Object): boolean;
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
        swap(array: Array<any>, x: number, y: number): void;
        mergeSort(jsonArray: Array<any>, fieldName: string, comparer:any): Array<any>;
        max(jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        min(jsonArray: Array<any>, fieldName: string, comparer: string): Array<any>;
        distinct(jsonArray: Array<any>, fieldName: string, requiresCompleteRecord:any): Array<any>;
        sum(json:any, fieldName: string): number;
        avg(json:any, fieldName: string): number;
        select(jsonArray: Array<any>, fieldName: string, fields:string): Array<any>;
        group(jsonArray: Array<any>, field: string, /* internal */ level: number): Array<any>;
        parseTable(table: string, headerOption: ej.headerOption, headerRowIndex: number): Object;
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
		
	enum filterType{
		StartsWith,
		Contains,
		EndsWith,
		LessThan,
		GreaterThan,
		LessThanOrEqual ,
		GreaterThanOrEqual,
		Equal,
		NotEqual
	}
	enum Animation{
		Fade,
		None,
		Slide
	} 
	enum Type{
		Overlay,
		Slide
	}
	enum SortOrder
	{
		Ascending,
		Descending
	}

		var globalize:globalize;
		var cultures:culture;
		function addCulture(name: string, culture ?: any): void;
    	function preferredCulture(culture ?: string): culture;
    	function format(value: any, format: string, culture ?: string): string;
    	function parseInt(value: string, radix?: any, culture ?: string): number;
    	function parseFloat(value: string, radix?: any, culture ?: string): number;
    	function parseDate(value: string, format: string, culture ?: string): Date;
    	function getLocalizedConstants(controlName: string, culture ?: string): any;

interface globalize {  
        addCulture(name: string, culture?: any): void;
        preferredCulture(culture?: string): culture;
        format(value: any, format: string, culture?: string): string; 
        parseInt(value: string, radix?: any, culture?: string): number;
        parseFloat(value: string, radix?: any, culture?: string): number;
        parseDate(value: string, format: string, culture?: string): Date;
        getLocalizedConstants(controlName: string, culture?: string): any;
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
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        percent: percentSettings;
        currency: currencySettings;
    }
    interface percentSettings {
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        symbol: string;
    }
    interface currencySettings {
        pattern: Array<string>;
        decimals: number;
        groupSizes: Array<number>;
        symbol: string;
    }
    interface calendarsSettings {
        standard: standardSettings;
    }
    interface standardSettings {
        firstDay: number;
        days: daySettings;
        months: monthSettings;
        AM: Array<string>;
        PM: Array<string>;
        twoDigitYearMax: number;
        patterns: patternSettings;
    }
    interface daySettings {
        names: Array<string>;
        namesAbbr: Array<string>;
        namesShort: Array<string>;
    }
    interface monthSettings {
        names: Array<string>;
        namesAbbr: Array<string>;
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
}
declare module App {
	
var addMetaTags: boolean;
    var allowPopState: boolean;
    var allowPushState: boolean;
    var activePage: JQuery;
	var waitingPopUp: JQuery;
    var hashMonitoring: boolean;
    var pageTransition: string;
    var renderEJMControlByDef: boolean;
    function createPage(element: JQuery): void;
    function getLoaction(): string;
    function initPage(): void;
    function loadView(url: string): void;
    function transferPage(fromPage: Object, toPage: Object, options?: any, isFromAjax?: boolean): void;
    function userAgent(): void;
    
    var pageHistory: {
        activeHistory(): string;
        add(url: string, options?: PageOption): void;
        clearForward(): void;
        find(url: string): number;
        lastHistory(): string;
        nextHistory(): string;
        prevHistory(): string;
        makeUrlAbsolute(hashString: string): void;
    }
    //Pageoption type for appview page
    interface PageOption {
        title?: string;
        href?: string;
        hash?: string;
    }
    var route: {
        convertToRelativeUrl(): void;
        hasProtocol(url: string): boolean;
        setPageRenderMode(element: JQuery): void;
        splitUrl(url: string): any;
    }
}
declare module ej.mobile {
	
 //Global Interface
    interface windowsOption {
        renderDefault?: boolean;
    }
	enum RenderMode{
		Auto,
		IOS7,
		Android,
		Windows,
		Flat
	}
	enum Theme{
		Auto,
		Dark,
		Light
	}
class Accordion extends ej.Widget {
    static fn: Accordion;
    constructor(element: JQuery, options?: AccordionOptions);
    model: AccordionOptions;
    validTags: Array<string>;
    defaults: AccordionOptions;
    collapseAll(): void;
    disableItems(itemIndexes: Array<any>): void;
    enableItems(itemIndexes: Array<any>): void;
    selectItems(activeList: Array<any>): void;
    deselectItems(activeList: Array<any>): void;
    expandAll(): void;
    hide(): void;
    show(): void;
    destroy(): void;
    getItemsCount(): number;
}
//ejmAccordion Option
interface AccordionOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    enableCache?: boolean;
    allowMultipleOpen?: boolean;
    collapsible?: boolean;
    enabled?: boolean;
    enableMultipleOpen?: boolean;
    heightAdjustMode?: ej.mobile.Accordion.HeightAdjustMode;
    windows?: windowsOption;
    enablePersistence?: boolean;
    selectedItems?: Array<any>;
    disabledItems?: Array<any>;
    showHeaderIcon?: boolean;
    spinnerText?: string;
    items?: Array<itemCollection>;
    active? (e: AccordionActiveEventArgs): void;
    ajaxBeforeLoad? (e: AccordionAjaxBeforeLoadEventArgs): void;
    ajaxError? (e: AccordionAjaxErrorEventArgs): void;
    ajaxLoad? (e: AccordionAjaxLoadEventArgs): void;
    ajaxSuccess? (e: AccordionAjaxSuccessEventArgs): void;
    beforeActive? (e: AccordionBeforeActiveEventArgs): void;
    destroy? (e: AccordionEventArgs): void;
    create? (e: AccordionEventArgs): void;
}

interface itemCollection {
    ajaxUrl?: string;
    logoClass?: string;
}
//ejmejmAccordionEvent Arugument
interface AccordionEventArgs {
    cancel: boolean;
    type: string;
    model: AccordionOptions;
}
interface AccordionActiveEventArgs extends AccordionEventArgs {
    items: string;
    lastSelectedItemIndices: number;
    selectedItemIndices: number;
}
interface AccordionAjaxBeforeLoadEventArgs extends AccordionEventArgs {
    url: string;
}
interface AccordionAjaxErrorEventArgs extends AccordionEventArgs {
    title: string;
    data: Object;
    url: string;
}
interface AccordionAjaxLoadEventArgs extends AccordionEventArgs {
}
interface AccordionAjaxSuccessEventArgs extends AccordionEventArgs {
    content: Object;
    data: Object;
    url: string;
}
interface AccordionBeforeActiveEventArgs extends AccordionEventArgs {
    activeItemIndex?: number;
}
export module Accordion {
    enum HeightAdjustMode {
        Content,
        Auto,
        Fill
    }
}
class Autocomplete extends ej.Widget {
    static fn: Autocomplete;
    element: JQuery;
    constructor(element: JQuery, options?: AutocompleteOptions);
    model: AutocompleteOptions;
    defaults: AutocompleteOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
    clearText(): void;
    getSelectedItems(): Array<any>;
    getValue(): string;

}
interface AutocompleteOptions {
    allowScrolling?: boolean;
    filterType?: ej.mobile.Autocomplete.FilterType;
    caseSensitiveSearch?: boolean;
    cssClass?: string;
    enableAutoFill?: boolean;
    delimiterChar?: string;
    enableMultiSelect?: boolean;
    enableCheckbox?: boolean;
    dataSource?: any;
    filterMode?: string;
    itemsCount?: string|number;
    templateId?: string;
    fields?: fieldOptions;
    imageField?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    mapper?: string;
    watermarkText?: string;
    imageClass?: string;
    allowSorting?: boolean;
    value?: string;
    sortOrder?: ej.mobile.Autocomplete.SortOrder;
    emptyResultText?: string;
    showEmptyResultText?: boolean;
    minCharacter?: number;
    enableDistinct?: boolean;
    enablePersistence?: boolean;
    enabled?: boolean;
    mode?: ej.mobile.Autocomplete.Mode;
    selectedKeys?: string;
    windows?: windowsOption;
    touchEnd? (e: AutocompleteTouchEndEventArgs): void;
    keyPress? (e: AutocompleteKeyPressEventArgs): void;
    select? (e: AutocompleteSelectEventArgs): void;
    change? (e: AutocompleteChangeEventArgs): void;
    focusIn? (e: AutocompleteFocusInEventArgs): void;
    focusOut? (e: AutocompleteFocusOutEventArgs): void;
    destroy? (e: AutocompleteEventArgs): void;
    create? (e: AutocompleteEventArgs): void;
}
interface fieldOptions {
    text?: string;
    key?: string;
}
interface AutocompleteEventArgs {
    cancel: boolean;
    model: AutocompleteOptions;
    type: string;
}
interface AutocompleteTouchEndEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteKeyPressEventArgs extends AutocompleteEventArgs {
    value: string;
}
interface AutocompleteSelectEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteChangeEventArgs extends AutocompleteEventArgs {
    text: string;
    isChecked: boolean;
    checkedItemsText: Object;
    value: string;
}
interface AutocompleteFocusInEventArgs extends AutocompleteEventArgs {
    value: string;
}
interface AutocompleteFocusOutEventArgs extends AutocompleteEventArgs {
    value: string;
}
export module Autocomplete {
    enum FilterType {
        StartsWith,
        Contains
    }
    enum Mode {
        Search,
        Default
    }
    enum SortOrder {
        Ascending,
        Descending
    }
}
class Button extends ej.Widget {
    static fn: Button;
    element: JQuery;
    constructor(element: JQuery, options?: ButtonOptions);
    model: ButtonOptions;
    validTags: Array<string>;
    defaults: ButtonOptions;
    disable(): void;
    enable(): void;
}
class Actionlink extends ej.Widget {
    static fn: Actionlink;
    element: JQuery;
    constructor(element: Element, options?: ButtonOptions);
    model: Object;
    validTags: Array<string>;
    defaults: ButtonOptions;
    disable(): void;
    enable(): void;
}
interface ButtonOptions {
    touchStart?(e: ButtonEventArgs): void;
    touchEnd?(e: ButtonEventArgs): void;
    cssClass?: string;
    enabled?: (boolean | string);
    inline?: (boolean | string);
    renderMode?: (ej.mobile.RenderMode | string);
    text?: string;
    theme?: (ej.mobile.Theme | string);
    imageClass?: string;
    imagePosition?: (ej.mobile.Button.ImagePosition | string);
    contentType?: (ej.mobile.Button.ContentType | string);
    ios7?: ios7ButtonOptions;
    android?: androidButtonOption;
    windows?: windowsButtonOptions;
    flat?: flatButtonOption;
}
interface ButtonEventArgs {
    element: Object;
    text: string;
}
interface ios7ButtonOptions {
    style?: (ej.mobile.Button.IOS7.Style | string);
    color?: (ej.mobile.Button.IOS7.Color | string);
}
interface androidButtonOption {
    style?: (ej.mobile.Button.Android.Style | string);
}
interface windowsButtonOptions extends windowsOption {
    style?: (ej.mobile.Button.Windows.Style | string);
}
interface flatButtonOption {
    style?: (ej.mobile.Button.Flat.Style | string);
}
export module Button{
export module IOS7{
	enum Style{
		Normal,
		Back,
		Header,
		Dialog
	}
	enum Color{
		Gray,
		Black,
		Blue,
		Green,
		Red
	}
	} 
export module Android{
	enum Style{
		Normal,
		Small,
		Dialog
	}

}
export module Windows{
	enum Style{
		Normal,
		Back
		}
}
export module Flat{
	enum Style{
		Normal,
		Back,
		Header
		}
}
	enum ImagePosition{
		Left,
		Right
	}
	enum ContentType{
		Text,
		Image,
		Both
	}
}
class DatePicker extends ej.Widget {
    static fn: DatePicker;
	static Locale:any;
    element: JQuery;
    constructor(element: JQuery, options?: DatePickerOptions);
    model: DatePickerOptions;
    defaults: DatePickerOptions;
    disable(): void;
    enable(): void;
    hide(): void;
    show(): void;
    setCurrentDate(date:string): void;
    getValue(): string;
    destroy(): void;
}

//ejmDatePicker Options
interface DatePickerOptions {
    cssClass?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    culture?: string;
    dateFormat?: string;
    value?: string;
    enabled?: boolean;
	enablePersistence?: boolean;
    ios7?: ios7Option;
    windows?: windowsOption;
    maxDate?: string;
    minDate?: string;
    load? (e: DatePickerEventArgs): void;
    select? (e: DatePickerEventArgs): void;
    focusIn? (e: DatePickerEventArgs): void;
    focusOut? (e: DatePickerEventArgs): void;
    open? (e: DatePickerEventArgs): void;
    close? (e: DatePickerEventArgs): void;
    change? (e: DatePickerEventArgs): void;
    destroy? (e: DatePickerArgs): void;
    create? (e: DatePickerArgs): void;
}

interface DatePickerArgs {
    type: string;
    model: DatePickerOptions;
    value: string;
}
//ejmDatePickerEvent Arugument
interface DatePickerEventArgs extends DatePickerArgs {
    cancel: boolean;
 
}

interface ios7Option {
    renderDefault: boolean;
}


//Class ejmDropDownList
class DropDownList extends ej.Widget {
    static fn: DropDownList;
    constructor(element: JQuery, options?: DropDownListOptions);
    model: DropDownListOptions;
    defaults: DropDownListOptions;
    show(): void;
    hide(): void;
	getValue():string;
    selectItemByIndex(index:(number|string)): void;
    unselectItemByIndex(index:(number|string)): void;
    selectItemByIndices(indices:Array<any>): void;
    unselectItemByIndices(indices: Array<any>): void;
    destroy(): void;
    getSelectedItemsValue(): Array<string>;
    getSelectedItemValue(): string;
}

//ejmDropDownList WindowsOption
interface windowsDropDownListOption extends windowsOption {
    type?: ej.mobile.DropDownList.WindowsType;
}

interface androidDropDownListOption {
    popUpHeight?: number|string;
}

interface fieldsDropDownListOption {
    text?: string;
    groupBy?: string;
    imageClass?: string;
    imageUrl?: string;
    checkBy?: string;
    enableTemplate?: string;
    templateID?: string;
    value?: string;
}

//ejmDropDownList Option
interface DropDownListOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    readOnly?: boolean;
    targetID?: string;
    selectedItemIndex?: number|string;
    dataSource?: any;
    fields?: fieldsDropDownListOption;
    query?: string;
    allowVirtualScrolling?: boolean;
    virtualScrollMode?: ej.mobile.DropDownList.VirtualScrollingMode;
    itemRequestCount?: number|string;
    enabled?: boolean;
    enableMultiSelect?: boolean;
    delimiterChar?: string;
    enableGrouping?: boolean;
    mode?: ej.mobile.DropDownList.Mode;
    enableTemplate?: boolean;
    enablePersistence?: boolean;
    windows?: windowsDropDownListOption;
    android?: androidDropDownListOption;
    items?: Array<any>;
    focusIn? (e: DropDownArgs): void;
    focusOut? (e: DropDownArgs): void;
    select? (e: DropDownSelectArgs): void;
    change? (e: DropDownSelectArgs): void;
    checkChange? (e: DropDownListEventArgs): void;
}

interface DropDownArgs {
    cancel: boolean;
    type: string;
    model: DropDownListOptions;
}
//ejmDropDownListEvent Arugument
interface DropDownListEventArgs extends DropDownArgs {
    checked: boolean;
}

interface DropDownSelectArgs extends DropDownArgs {
    selectedText: string;
    value: string;
    selectedItem: Object;
}

export module DropDownList{
	enum VirtualScrollingMode{
		Continuous,
		Normal
	}
	enum WindowsType{
		ComboBox,
		List
	}
    enum Mode {
        Normal,
        Native
    }
}

class Numeric extends ej.Widget {
    static fn: Numeric;
    element: JQuery;
    constructor(element: JQuery, options?: EditorOptions);
    model: EditorOptions;
    ValidTags: Array<string>;
    defaults: EditorOptions;
    disable(): void;
    enable(): void;
    getValue(): any;
    setValue(value:number): void;
    
}

interface EditorOptions {
    cssClass?: string;
    enableStrictMode?: boolean;
    enabled?: boolean;
    showBorder?: boolean;
    showSpinButton?: boolean;
    incrementStep?: number;
    maxValue?: number;
    minValue?: number;
    name?: string;
    enablePersistence?: boolean;
    readOnly?: boolean;
    renderMode?: ej.mobile.RenderMode;
    decimalPlaces?: number;
    theme?: ej.mobile.Theme;
    value?: number;
    watermarkText?: string;   
    windows?: windowsOption;
    change? (e: EditorEventArgs): void;
	focusIn? (e: EditorEventArgs): void;
    focusOut? (e: EditorEventArgs): void;
    destroy?(e:EditorBaseArgs):void;
    create?(e:EditorBaseArgs):void;
}

interface EditorBaseArgs{
    cancel: boolean;
    type: string;
    model: EditorOptions;
}

interface EditorEventArgs extends EditorBaseArgs {    
    value: number;
    element: Object;
}


class Grid extends ej.Widget {
    static fn: Grid;
    element: JQuery;
    constructor(element: JQuery, options?: GridOptions);
    model: GridOptions;
    validTags: Array<string>;
    defaults: GridOptions;
    disable(): void;
    enable(): void;
    destroy(): void;
    getColumnByField(field:string): void;
    getColumnByHeaderText(headerText:string): void;
    getColumnByIndex(index:number): void;
    getColumnFieldNames(): void;
    getColumnIndexByField(field:string): void;
    getColumnMemberByIndex(colIdx:number): void;
    hideColumns(col:string): void;
    refreshContent(requestType:string): void;
    showColumns(col:string): void;
}
interface GridOptions {
    cssClass?: string;
    allowPaging?: boolean;
    allowSorting?: boolean;
    allowFiltering?: boolean;
    allowScrolling?: boolean;
    allowSelection?: boolean;
    dataSource: any;
    caption?: string;
    enablePersistence?: boolean;
    selectedRowIndex?: number;
    showCaption?: boolean;
    allowColumnSelector?: boolean;
    transition?: string;
    columns?: Array<Object>;
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    rowSelecting? (e: GridEventArgs): void;
    rowSelected? (e: GridEventArgs): void;
    actionBegin? (e: GridEventArgs): void;
    actionComplete? (e: GridEventArgs): void;
    actionSuccess? (e: GridEventArgs): void;
    actionFailure? (e: GridEventArgs): void;
    queryCellInfo? (e: GridEventArgs): void;
    rowDataBound? (e: GridEventArgs): void;
    modelChange? (e: GridEventArgs): void;
    load? (e: GridEventArgs): void;
    pageSettings?: PageSettings;
    scrollSettings?: ScrollSettings;
    sortSettings?: SortSettings;
    filterSettings?: FilterSettings;
}

interface PageSettings {
    pageSize?: number;
    currentPage?: number;
    display?: ej.mobile.Grid.PagerDisplay;
    type?: ej.mobile.Grid.PagerType;
    totalRecordsCount?: number;
}
interface ScrollSettings {
    enableColumnScrolling?: boolean;
    height?: any;
    width?: any;
    enableRowScrolling?: boolean;
    enableNativeScrolling?: boolean;
}
interface SortSettings {
    allowMultiSorting?: boolean;
    sortedColumns?: Array<any>;
}
interface FilterSettings {
    isCaseSensitive?: boolean;
    filterBarMode?: ej.mobile.Grid.FilterBarMode;
    interval?: number;
    filteredColumns?: Array<any>;
}

//ejmGridEvent Arugument
interface GridEventArgs {
    cancel: boolean;
    type: string;
    model: GridOptions;
}

export module Grid
{
enum PagerDisplay
{
Normal,
Fixed
}

enum PagerType
{
Normal,
Scrollable
}

enum FilterBarMode
{
Immediate,
OnEnter
}
enum Actions
{
Paging,
Sorting,
Filtering,
Refresh
}
}
class Header extends ej.Widget {
    static fn: Header;
    element: JQuery;
    constructor(element: JQuery, options?: HeaderOptions);
    model: HeaderOptions;
    defaults: HeaderOptions;
    getTitle(): string;
    destroy(): void;
}

interface HeaderOptions {
    hideForUnSupportedDevice?: boolean;
    leftButtonNavigationUrl?: string;
    leftButtonImageClass: string;
    leftButtonImageUrl: string;
    rightButtonNavigationUrl?: string;
	rightButtonImageClass?:string;
	rightButtonImageUrl?:string;
    cssClass?: string;
    title?: string;
    showTitle?: boolean;
    position?: ej.mobile.Header.Position;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
	leftButtonStyle?:ej.mobile.Header.HeaderLeftButtonStyle;	
    rightButtonStyle?:ej.mobile.Header.HeaderRightButtonStyle;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showLeftButton?: boolean;
    showRightButton?: boolean;
	enablePersistence?:boolean;
    templateId?: string;
    ios7?: Headerios7Options;
    flat?: HeaderFlatOptions;
    windows?: HeaderWindowsOptions;
    android?: HeaderAndroidOptions;
    leftButtonTap? (e: HeaderLeftButtonTapEventArgs): void;
    rightButtonTap? (e: HeaderRightButtonTapEventArgs): void;
    destroy?(e:HeaderBaseArgs):void;
    create?(e:HeaderBaseArgs):void;
}
interface HeaderWindowsOptions extends windowsOption {
    enableCustomText?: boolean;
    renderDefault?: boolean;
    rightButtonStyle?: ej.mobile.Header.Windows.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Windows.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface HeaderAndroidOptions {
    backButtonImageClass?: string;
    rightButtonStyle?: ej.mobile.Header.Android.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Android.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface Headerios7Options {
    rightButtonStyle?:  ej.mobile.Header.IOS7.HeaderRightButtonStyle;
    leftButtonStyle?:  ej.mobile.Header.IOS7.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface HeaderFlatOptions {
    rightButtonStyle?: ej.mobile.Header.Flat.HeaderRightButtonStyle;
    leftButtonStyle?: ej.mobile.Header.Flat.HeaderLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}

interface HeaderBaseArgs{
    cancel: boolean;
    type: string;
    model: FooterOptions;
}
interface HeaderLeftButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}
interface HeaderRightButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}

export module Header
{
enum Position
{
 Normal,
 Fixed
}
enum HeaderLeftButtonStyle
{
	Back,
	Header,
	Normal

}
enum HeaderRightButtonStyle
{
	Header,
	Normal
}

export module IOS7
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Header,
 Normal
}
enum HeaderRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Flat
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Android
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}

export module Windows
{
enum HeaderLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum HeaderRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}
}



/* ListView - Start*/
interface ajaxSettingsOptions {
    type?: string;
    cache?: boolean;
    async?: boolean;
    dataType?: string;   
    contentType?: string;
    url?: string;
    data?: Array<any>;
}
//Class ejmListView
class ListView extends ej.Widget {
    static fn: ListView;
    constructor(element: JQuery, options?: ListViewOptions);
    model: ListViewOptions;
    defaults: ListViewOptions;
    addItem(list?:Object, index?:number,groupid?:any): void;
    checkAllItem(): void;
    checkItem(index:number,childId?:any): void;
    deActive(index:number,childId?:any): void;
    disableItem(index:number,childId?:any): void;
    enableItem(index:number,childId?:any): void;
    getActiveItem(): void;
    getActiveItemText(): void;
    getCheckedItems(): void;
    getCheckedItemsText(): void;
    getItemsCount(): void;
    getItemText(index:number,childId?:any): void;
    hasChild(index:number,childId?:any): boolean;
    hide(): void;
    hideItem(index:number,childId?:any): void;
    isChecked(index:number,childId?:any): boolean;
    loadAjaxContent(): void;
    removeCheckMark(index:number,childId?:any): void;
    removeItem(index:number,childId?:any): void;
    selectItem(index:number,childId?:any): void;
    setActive(index:number,childId?:any): void;
    show(): void;
    showItem(index:number,childId?:any): void;
    unCheckAllItem(): void;
    unCheckItem(index: number, childId?: any): void;
    clear(): void;
    append(data: Object): void;
    getActiveItemData(): void;
    getSelectedItemValue(): void;
    getSelectedItemsValue(): void;
    destroy(): void;
}
//ejmListView IOS7Option
interface Ios7Option {
    inline?: boolean;
}
//ejmListView IOS7Option
interface windowsListViewOption extends windowsOption {
    preventSkew?: boolean;
    enableHeaderCustomText?: boolean;
}

//ejmListView Option
interface ListViewOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    enablePullToRefresh?: boolean;
    refreshThreshold?: number;
    pullToRefreshSettings?: pullToRefreshSettings;
    mode?: ej.mobile.ListView.Mode
    cssClass?: string;
    ios7?: Ios7Option;
    windows?: windowsListViewOption;
    adjustFixedPosition?: boolean;
    ajaxSettings?: ajaxSettingsOptions;
    enableCache?: boolean;
    allowScrolling?: boolean;
    checkDOMChanges?: boolean;
    dataBinding?: boolean;
    dataSource?: any;
    enableAjax?: boolean;
    enableCheckMark?: boolean;
    enableFiltering?: boolean;
    showHeader?: boolean;
    showHeaderBackButton?: boolean;
    enableNativeScrolling?: boolean;
    showScrollbars?: boolean;
    fieldSettings?: fieldSettings;
    enableGroupList?: boolean;
    headerBackButtonText?: string;
    hideHeaderForUnSupportedDevice?: boolean;
    headerTitle?: string;
    height?: number;
    persistSelection?: boolean;
    preventSelection?: boolean;
    query?: string;
    renderTemplate?: boolean;
    selectedItemIndex?: number;
    autoAdjustHeight?: boolean;
    autoAdjustScrollHeight?: boolean;
    templateId?: string;
    transition?: string;
    width?: number;
    items?: Array<any>;
    enablePersistence?: boolean;
    create? (e: ListViewBaseEventArgs): void;
    destroy? (e: ListViewBaseEventArgs): void;
    ajaxComplete? (e: ListViewEventArgs): void;
    ajaxError? (e: ListViewEventArgs): void;
    ajaxSuccess? (e: ListViewEventArgs): void;
    headerBackButtonTap? (e: ListViewEventArgs): void;
    load? (e: ListViewBaseEventArgs): void;
    loadComplete? (e: ListViewBaseEventArgs): void;
    touchEnd? (e: ListViewEventArgs): void;
    touchStart? (e: ListViewEventArgs): void;
    refreshBegin? (e: ListViewBaseEventArgs): void;
    refreshSuccess? (e: ListViewEventArgs): void;
    refreshError? (e: ListViewBaseEventArgs): void;
    refreshComplete? (e: ListViewBaseEventArgs): void;
    ajaxBeforeLoad? (e: ListViewEventArgs): void;
}
interface pullToRefreshSettings{
	pullText?:string;
	releaseText?:string;
	refreshText?:string;
	errorText?:string;
	appendData?:boolean;
	appendPosition?:ej.mobile.ListView.AppendPosition;
}
interface fieldSettings{
	navigateUrl?:string;
	href?:string;
	enableAjax?:string;
	preventSelection?:string;
	persistSelection?:string;
	text?:string;
	enableCheckMark?:string;
	checked?:string;
	primaryKey?:string;
	parentPrimaryKey?:string;
	imageClass?:string;
	imageUrl?:string;
	childHeaderTitle?:string;
	childId?:string;
	childHeaderBackButtonText?:string;
	renderTemplate?:string;
	templateId?:string;
	touchStart?:string;
	touchEnd?:string;
	attributes?:string;
	groupID?:string;
	id?:string; 
    value?: string;
}
//ejmListViewEvent Arugument
interface ListViewBaseEventArgs {
    cancel: boolean;
    type: string;
    model: ListViewOptions;
}
interface ListViewEventArgs extends ListViewBaseEventArgs {   
    ajaxData?: Object;
    data?: Object;
    errorData?: Object;
    successData?: Object;
    text?: string;
    element?: Object;
    id?: string;
    hasChild?: boolean;
    currentItem?: string;
    currentText?: string;
    currentItemIndex?: number;
    isChecked?: boolean;
    checkedItems?: number;
    checkedItemsText?: string;
}
export module ListView{
	enum AppendPosition{
		Bottom,
		Top
    }
    enum Mode {
        Page,
        Container
    }
}

class Menu extends ej.Widget {
    static fn: Menu;
    element: JQuery;
    constructor(element: JQuery, options?: MenuOptions);
    model: MenuOptions;
    defaults: MenuOptions;
    addItem(menu: any, index: number): void;
    disable(): void;
    disableItem(index: number): void;
    disableOverFlow(): void;
    disableOverFlowItem(index: number): void;
    enable(): void;
    enableItem(index: number): void;
    enableOverFlow(): void;
    enableOverFlowItem(index: number): void;
    hide(): void;
    removeItem(index: number): void;
    show(e: any, existing?: boolean): void;
    destroy(): void;
}
//ejmMenu Option
interface MenuOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    allowScrolling?: boolean;
    showScrollbars?: boolean;
    height?: (number|string);
    renderTemplate?: boolean;
    showOn?: ej.mobile.Menu.ShowOn;
    targetId?: string;
    target?: any;
    enablePersistence?: boolean;
    templateId?: string;
    width?: (number|string);
    items?: Array<any>;
    android?: AndroidOptions;
    ios7?: Ios7Options;
    windows?: WindowsOptions;
    hide? (e: MenuEvent): void;
    load? (e: MenuEvent): void;
    loadComplete? (e: MenuEvent): void;
    show? (e: MenuEvent): void;
    touchStart? (e: MenuTouchEventArgs): void;
    touchEnd? (e: MenuTouchEventArgs): void;
    create? (e: MenuEvent): void;
    destroy? (e: MenuEvent): void;
}
//ejmMenu IOS7 Option
interface Ios7Options {
    cancelButtonColor?: ej.mobile.Menu.IOS7.CancelButtonColor;
    cancelButtonText?: string;
    cancelButtonTouchEnd? (e: MenuCancelButtonTouchEndEventArgs): void;
    type?: ej.mobile.Menu.IOS7.Type;
    title?: string;
    showTitle?: boolean;
    showCancelButton?: boolean;
}

//ejmMenu Android Option
interface AndroidOptions {
    type?: ej.mobile.Menu.Android.Type;
}
interface WindowsOptions {
    type?: ej.mobile.Menu.Windows.Type;
    renderDefault?: boolean;
}
//ejmMenu Event Arugument
interface MenuEvent {
    cancel: boolean;
    type: string;
    model: MenuOptions;
}
interface MenuTouchEventArgs {
    item: Object;
    text: string;
}
interface MenuCancelButtonTouchEndEventArgs extends MenuEvent {
    item: Object;
    text: string;
}

export module Menu {
    export module IOS7 {
        enum Type {
            Auto,
            Animate,
            Normal
        }
        enum CancelButtonColor {
            Blue,
            Gray,
            Black,
            Green,
            Red
        }
    }

    export module Android {
        enum Type {
            Contextual,
            Popup,
            OptionsList,
            OptionsMenu
        }
    }
    export module Windows {
        enum Type {
            Contextual,
            Popup
        }
    }
    enum ShowOn {
        Tap,
        TapHold
    }
}



//Class ejmProgress
class Progress extends ej.Widget {
    static fn: Progress;
    element: JQuery;
    constructor(element: JQuery, options?: ProgressOptions);
    model: ProgressOptions;
    defaults: ProgressOptions;
    getValue(): number;
    getPercentage(): number;
    setCustomText(text: string): void;
    destroy(): void;
}

//ejmProgressbar Option
interface ProgressOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    enableCustomText?: boolean;
    enabled?: boolean;
    height?: number;
    incrementStep?: number;
    maxValue?: number;
    minValue?: number;
    orientation?: ej.mobile.Progress.Orientation;
    percentage?: number;
    enablePersistence?: boolean;
    text?: string;
    value?: number;
    width?: number;
    create? (e: ProgressEvent): void;
    destroy? (e: ProgressEvent): void;
    start? (e: ProgressStartEventArgs): void;
    change? (e: ProgressChangeEvent): void;
    complete? (e: ProgressCompleteEvent): void;
}
//ejmProgressbarEvent Arugument
interface ProgressEvent {
    cancel: boolean;
    type: string;       
    model: ProgressOptions;
}
interface ProgressStartEventArgs extends ProgressEvent {
    value: number;
    percentage: number;
}
interface ProgressChangeEvent extends ProgressEvent {
    value: number;
    element: Object;
    text: string;
    percentage: number;
}
interface ProgressCompleteEvent extends ProgressEvent {
    value: number;
    text: string;
    percentage: number;
}
export module Progress {
    enum Orientation {
        Horizontal,
        Vertical
    }
}

//Class ejmRadioButton
class RadioButton extends ej.Widget {
    static fn: RadioButton;
    element: JQuery;
    constructor(element: JQuery, options?: RadioButtonOptions);
    model: RadioButtonOptions;
    defaults: RadioButtonOptions;
    destroy(): void;
    enable(): void;
    disable(): void;
}

//ejmRadioButton Options
interface RadioButtonOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    checked?: boolean;
    text?: string;
    enabled?: boolean;
    enablePersistence?: boolean;
    create? (e: RadioButtonBaseEventArgs): void;
    destroy? (e: RadioButtonBaseEventArgs): void;
    touchStart? (e: RadioButtonEventArgs): void;
    touchEnd? (e: RadioButtonEventArgs): void;
    change? (e: RadioButtonEventArgs): void;   
}
//ejmRadioButtonEvent Arugument
interface RadioButtonBaseEventArgs {
    model: RadioButtonOptions;
    cancel: boolean;
    type: string;
}
interface RadioButtonEventArgs extends RadioButtonBaseEventArgs {   
    value: string;
    isChecked: boolean;   
}
 class Rating extends ej.Widget {
        static fn: Rating;
        element: JQuery;
        constructor(element?: JQuery, options?: RatingOptions);
        model: RatingOptions;
        defaults: RatingOptions;
        show(): void;
        hide(): void;
        getValue(): void
        reset(): void;
        enable(): void;
        disable(): void;
        setValue(value: number): void;
        destroy(): void;
    }

    interface RatingOptions {
        maxValue?: number;
        minValue?: number;
        value?: number;
        incrementStep?: number;
        precision?: ej.mobile.Rating.Precision;
        enabled?: boolean;
        theme?: ej.mobile.Theme;
        renderMode?: ej.mobile.RenderMode;
        shape?: ej.mobile.Rating.Shape;
        shapeWidth?: number;
        shapeHeight?: number;
        spaceBetweenShapes?: number;
        orientation?: ej.mobile.Rating.Orientation;
        readOnly?: boolean;
        backgroundColor?: any;
        selectionColor?: any;
        borderColor?: any;
        hoverColor?: any;
        enablePersistence?: boolean;
        create? (e: RatingBaseEventArgs): void;
        destroy? (e: RatingBaseEventArgs): void;
        tap? (e: RatingEventArgs): void;
        change? (e: RatingEventArgs): void;
        touchMove? (e: RatingEventArgs): void;
    }
 interface RatingBaseEventArgs {
     cancel: boolean;
     type: string;
     model: RatingOptions;
 }
    interface RatingEventArgs extends RatingBaseEventArgs {        
        value: number;
    }
export module Rating{
	enum Precision{
		Full,
		Exact,
		Half
	}
	enum Shape{
		Star,
		Circle,
		Diamond,
		Heart,
		Pentagon,
		Square,
		Triangle
	}
	enum Orientation{
		Horizontal,
		Vertical
	}

}
 class Rotator extends ej.Widget {
        static fn: Rotator;
        element: JQuery;
        constructor(element: JQuery, options?: RotatorOptions);
        model: RotatorOptions;
        validTags: Array<string>;
        defaults: RotatorOptions;
        renderDatasource(data: any): void;
        destroy(): void;
    }
 interface RotatorOptions {
        create? (e: RotatorBaseEventArgs): void;
        destroy? (e: RotatorBaseEventArgs): void;
        swipeLeft? (e: RotatorEventArgs): void;
        swipeRight? (e: RotatorEventArgs): void;
        swipeUp? (e: RotatorEventArgs): void;
        swipeDown? (e: RotatorEventArgs): void;
        change? (e: RotatorEventArgs): void;
        pagerSelect? (e: RotatorEventArgs): void;
        adjustFixedPosition?: boolean;
        targetId?: string;
		cssClass?:string;
		windows?:windowsOption;
		items?:Array<any>;
        renderMode?: ej.mobile.RenderMode;
        targetHeight?: (number|string);
        targetWidth?: (number|string);
		enablePersistence?:boolean;
        theme?: ej.mobile.Theme;
        currentItemIndex?: number;
        showPager?: boolean;
        showHeader?: boolean;
        headerTitle?: string;
        dataBinding?: boolean;
        dataSource?: any;
        orientation?: ej.mobile.Rotator.Orientation;
        pagerPosition?: PagerPosition;
    }
    interface PagerPosition {
        horizontal?: ej.mobile.Rotator.PagerPositionHorizontal;
        vertical?: ej.mobile.Rotator.PagerPositionVertical;
    }
 interface RotatorBaseEventArgs {
     cancel: boolean;
     model: RotatorOptions;
     type: string;
 }
 interface RotatorEventArgs extends RotatorBaseEventArgs {        
        targetElement: Object;
        element: number;
    }
export module Rotator{
	enum Orientation{
		Horizontal,
		Vertical
	}
	enum PagerPositionHorizontal{
		Bottom,
		Top,
	}
	enum PagerPositionVertical{
		Right,
		Left
	}

}
 class Slider extends ej.Widget {
        static fn: Slider;
        element: JQuery;
        constructor(element: JQuery, options?: SliderOptions);
        model: SliderOptions;
        defaults: SliderOptions;
        getValue(): void;
        dispose(): void;
        destroy(): void;
    }
    //ejmSlider Option
    interface SliderOptions {
        theme?: ej.mobile.Theme;
        renderMode?: ej.mobile.RenderMode;
        minValue?: number;
        maxValue?: number;
        value?: number;
        values?: Array<number>;
        orientation?: ej.mobile.Slider.Orientation;
        enableRange?: boolean;
        readOnly?: boolean;
        incrementStep?: number;
        enablePersistence?: boolean;
        enabled?: boolean;
        enableAnimation?: boolean;
        animationSpeed?: number;
        ios7?: Ios7Option;
        windows?: windowsOption;
        create? (e: SliderBaseEventArgs): void;
        destroy? (e: SliderBaseEventArgs): void;
        touchStart? (e: SliderEventArgs): void;
        touchEnd? (e: SliderEventArgs): void;
        load? (e: SliderEventArgs): void;
        change? (e: SliderEventArgs): void;
        slide? (e: SliderEventArgs): void;
    }

    //ejmSlider IOS7 Option
    interface Ios7Option {
        thumbStyle?: ej.mobile.Slider.ThumbStyle;
    }
 //ejmSlider Slide Event Arugument
 interface SliderBaseEventArgs {
     cancel: boolean;
     model: SliderOptions;
     type: string;
 }
 interface SliderEventArgs extends SliderBaseEventArgs {
     value?: number;
     values?: Array<number>;
 }   
export module Slider{
	enum Orientation{
		Horizontal,
		Vertical
	}
	enum ThumbStyle{
		Normal,
		Small
	
	}

}
class Tab extends ej.Widget {
    static fn: Tab;
    constructor(element: JQuery, options?: TabOptions);
    model:TabOptions;
    defaults: TabOptions;
    showBadge(index: (number|string)): void;
    hideBadge(index: (number|string)): void;
    updateBadgeValue(index: (number|string), value: (number|string)): void;
    selectItem(index?: (number|string)): void;
    enableItem(index?: (number|string)): void;
    disableItem(index?: (number|string)): void;
    enableContent(index?: (number|string)): void;
    disableContent(index?: (number|string)): void;
    addItem(tab: Object, index: (number|string)): void;
    addOverflowItem(tab: Object, index: (number|string)): void;
    removeItem(index: (number|string)): void;
    removeOverflowItem(index: (number|string)): void;
    getItemsCount(): number;
    getOverflowItemCount(): number;
    getActiveItemText(): string;
    getActiveItem(): Object;
    destroy(): void;
}

interface TabOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    allowScrolling?: boolean;
    enableNativeScrolling?: boolean;
    showScrollbars?: boolean;
    enableAjax?: boolean;
    showAjaxPopup?: boolean;
    badge?: badgeTabOptions;
    ios7?: ios7TabOptions;
    enableCache?: boolean;
    selectedItemIndex?: (number|string);
    enabled?: boolean;
    enablePersistence?: boolean;
    prefetchAjaxContent?: boolean;
    items?: Array<any>;
    overflowBadge?: overflowBadgeTabOptions;
    android?: androidTabOptions;
    windows?: windowsTabOptions;
    flat?: flatTabOptions;
    ajaxSettings?: ajaxSettingsTabOptions;
    prefetchContentLoaded? (e: TabPrefetchEventArgs): void;
    load? (e: TabEventArgs): void;
    loadComplete? (e: TabLoadCompleteEventArgs): void;
    touchStart? (e: TabEventArgs): void;
    touchEnd? (e: TabEventArgs): void;
    ajaxSuccess? (e: TabAjaxLoadSuccessEventArgs): void;
    ajaxError? (e: TabAjaxLoadErrorEventArgs): void;
    ajaxComplete? (e: TabEventArgs): void;
    create? (e: TabEventArgs): void;
    destroy? (e: TabEventArgs): void;
    ajaxBeforeLoad? (e: TabAjaxBeforeLoadEventArgs): void;
}

interface TabItemOptions {
    text?: string;
    href?: string;
    enableAjax?: boolean;
    badge?: badgeTabOptions;
    touchStart? (e: TabEventArgs): void;
    touchEnd? (e: TabEventArgs): void;
    ios7?: ios7TabOptions;
    android?: ios7TabOptions;
}

interface TabEventArgs {
    cancel: boolean;
    type: string;
    model: TabOptions;
}
interface TabAjaxBeforeLoadEventArgs extends TabEventArgs {
    content?: any;
    item?: any;
    index?: number;
    text?: string;
    url?: string;
}
interface TabLoadCompleteEventArgs extends TabEventArgs {
    element: Object;
    id: string;
}
interface TabPrefetchEventArgs extends TabEventArgs {
    item: Object;
    content: string;
    text: string;
    url: string;
    index: number;
}
interface TabAjaxLoadSuccessEventArgs extends TabEventArgs {
    element: Object;
    currentContent: string;
}

interface TabAjaxLoadErrorEventArgs extends TabEventArgs {
    status: boolean;
    error: string;
}
interface badgeTabOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
}
interface ios7TabOptions {
    imageClass?: string;
}
interface overflowBadgeTabOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
}
interface androidTabOptions {
    contentType?: ej.mobile.Tab.Android.ContentType;
    imageClass?: string;
    position?: ej.mobile.Tab.Position;
}
interface windowsTabOptions extends windowsOption {
    enableCustomText?: boolean;
    position?: ej.mobile.Tab.Position;
    enableTouchMove?: boolean;
    preventContentSwipe?: boolean;
}
interface flatTabOptions {
    position?: ej.mobile.Tab.Position;
}
interface ajaxSettingsTabOptions {
    type?: string;
    cache?: boolean;
    async?: boolean;
    dataType?: string;
    contentType?: string;
    url?: string;
    data?:  {};
}

export module Tab{
export module Android{
enum ContentType{
Text,
Image,
Both
}
}
enum Position{
Fixed,
Normal
}
}

class Tile extends ej.Widget {
    static fn: Tile;
    constructor(element: JQuery, options?: TileOptions);
    model: TileOptions;
    defaults: TileOptions;
    updateTemplate(id: string, index: (number|string)): void;
    destroy(): void;
}

interface TileOptions {
    android?: androidTileOptions;
    badge?: tileBadgeOptions;
    cssClass?: string;
    captionTemplateId?: string;
    enablePersistence?: boolean;
    imageClass?: string;
    imagePath?: string;
    imagePosition?: ej.mobile.Tile.ImagePosition;
    imageTemplateId?: string;
    imageUrl?: string;
    backgroundColor?: string;
    ios7?: ios7TileOptions;
    liveTile?: liveTileOptions;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showText?: boolean;
    text?: string;
    textAlignment?: ej.mobile.Tile.TextAlignment;
    tileSize?: ej.mobile.Tile.TileSize;
    width?: (number|string);
    height?: (number|string);
    touchEnd? (e: tileTouchEventArgs): void;
    touchStart? (e: tileTouchEventArgs): void;
    create? (e: TileEventArgs): void;
    destroy? (e: TileEventArgs): void;
}
interface TileEventArgs {
    cancel?: boolean;
    model?: TileOptions;
    type?: string;
}
interface tileBadgeOptions {
    enabled?: boolean;
    value?: (number|string);
    maxValue?: (number|string);
    minValue?: (number|string);
    text?: string;
}

interface liveTileOptions {
    enabled?: boolean;
    imageClass?: string;
    imageTemplateId?: string;
    imageUrl?: string[];
    type?: string;
    updateInterval?: number;
}

interface ios7TileOptions {
    textPosition?: ej.mobile.Tile.TextPosition;
}

interface androidTileOptions {
    textPosition?: ej.mobile.Tile.TextPosition;
}

interface tileTouchEventArgs extends TileEventArgs {
    text?: string;
}

export module Tile
{    
enum TextPosition
{
 Inner,
 Outer
}
enum TileSize
{
        Medium,
        Small,
        Large,
        Wide
}
enum TextAlignment
{
 
        Normal,
        Left,
        Right,
        Center
}
enum ImagePosition
{
        Center,
        Top,
        Bottom,
        Right,
        Left,
        TopLeft,
        TopRight,
        BottomRight,
        BottomLeft,
        Fill
}
}


class RadialSlider extends ej.Widget {
    static fn: RadialSlider;
    constructor(element: JQuery, options?: RadialSliderOptions);
    constructor(element: Element, options?: RadialSliderOptions);
	model:RadialSliderOptions;
	defaults:RadialSliderOptions;
    show(): void;
    hide(): void;
    destroy(): void;
}

interface RadialSliderOptions {
    radius?: number;
    endAngle?: number;
    startAngle?: number;
    ticks?: Array<any>;
    enableRoundOff?: boolean;
    value?: number|string;
    strokeWidth?: number;
    autoOpen?: boolean;
    enableAnimation?: boolean;
    cssClass?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    position?: ej.mobile.RadialSlider.Position;
    labelSpace?: string|number;
    innerCircleImageClass?: string;
    innerCircleImageUrl?: string;
    showInnerCircle?: boolean;
    inline?: boolean;
    stop? (e: RadialSliderStopEventArgs): void;
    start? (e: RadialSliderStartEventArgs): void;
    slide? (e: RadialSliderSlideEventArgs): void;
    change? (e: RadialSliderChangeEventArgs): void;
    mouseover? (e: RadialSliderMouseOverEventArgs): void;
    create? (e: RadialSliderCreateEventArgs): void;
    destroy? (e: RadialSliderCreateEventArgs): void;
}
interface RadialSliderCreateEventArgs {
    cancel: boolean;
    model: RadialSliderOptions;
    type: string;
}
interface RadialSliderStopEventArgs extends RadialSliderCreateEventArgs {
    value: number;
}

interface RadialSliderStartEventArgs extends RadialSliderCreateEventArgs {
    value: number;
}
interface RadialSliderSlideEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    selectedValue: number;
}
interface RadialSliderChangeEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    oldValue: number;
}
interface RadialSliderMouseOverEventArgs extends RadialSliderCreateEventArgs {
    value: number;
    selectedValue: number;
}
export module RadialSlider {
    enum Position {
        RightCenter,
        RightTop,
        RightBottom,
        LeftCenter,
        LeftTop,
        LeftBottom,
        TopLeft,
        TopRight,
        TopCenter,
        BottomLeft,
        BottomRight,
        BottomCenter
    }
}
class TimePicker extends ej.Widget {
    static fn: TimePicker;
	static Locale:any;
    constructor(element: JQuery, options?: TimePickerOptions);
    model: TimePickerOptions;
    defaults: TimePickerOptions;
    show(e?:any): void;
    hide(e?:any): void;
    enable(): void;
    disable(): void;
    getValue(): string;
    setCurrentTime(time: any): void;
    destroy(): void;
}
interface TimePickerOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    hourFormat?: ej.mobile.TimePicker.HourFormat;
    value?: string;
    culture?: string;
    timeFormat?: string;
    enabled?: boolean;
	enablePersistence?:boolean;
    ios7?: ios7TimepickerOptions;
    windows?: windowsOption;
    select? (e: TimepickerEventArgs): void;
    load? (e: TimepickerEventArgs): void;
    focusIn? (e: TimepickerEventArgs): void;
    focusOut? (e: TimepickerEventArgs): void;
    open? (e: TimepickerEventArgs): void;
    close? (e: TimepickerEventArgs): void;
    change? (e: TimepickerEventArgs): void;
    create? (e: TimePickerCommonEventArgs): void;
    destroy? (e: TimePickerCommonEventArgs): void;
}
interface TimePickerCommonEventArgs {
    cancel: boolean;
    type: string;
    model: TimePickerOptions;
}
interface TimepickerEventArgs extends TimePickerCommonEventArgs {
    value: string;
}
interface ios7TimepickerOptions {
    renderDefault?: boolean;
}

export module TimePicker{
enum HourFormat{
	TwentyFour,
	Twelve
}
}

//Class ejmToggleButton
class ToggleButton extends ej.Widget {
    static fn: ToggleButton;
    constructor(element: JQuery, options?: ToggleButtonOptions);
    model: ToggleButtonOptions;
    defaults: ToggleButtonOptions;
    enable(): void;
    disable(): void;
    destroy(): void;
}

//ejmToggleButton Option
interface ToggleButtonOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    animate?: boolean;
    toggleState?: boolean;
    windows?: windowsOption;
    enablePersistence?: boolean;
    enabled?: boolean;
    change? (e: ToggleButtonEventArgs): void;
    touchStart? (e: ToggleButtonEventArgs): void;
    touchEnd? (e: ToggleButtonEventArgs): void;
    create? (e: ToggleButtonCommonEventArgs): void;
    destroy? (e: ToggleButtonCommonEventArgs): void;
}

interface ToggleButtonCommonEventArgs {
    cancel: boolean;
    type: string;
    model: ToggleButtonOptions;
}
//ToggleButtonEvent Arugument
interface ToggleButtonEventArgs extends ToggleButtonCommonEventArgs {
    state: boolean;
}
//Class ejmToolbar
class Toolbar extends ej.Widget {
    static fn: Toolbar;
    constructor(element: JQuery, options?: ToolbarOptions);
    model: ToolbarOptions;
    validTags: Array<string>;
    defaults: ToolbarOptions;
    removeItem(index:number): void;
    addItem(newitem:string): void;
    showEllipsis(): void;
    disableItem(disableIcon:string): void;
    enableItem(enableIcon:string): void;
    hideItem(iconName:string): void;
    hideEllipsis(): void;
    showItem(iconName:string): void;
    hideMenu(): void;
    showMenu(): void;
    destroy(): void;
}

//ejmToolbar Android Options
interface ToolbarAndroidOptions {
    title?: string;
    titleIconUrl?: string;
    showBackNavigator?: boolean;
    showTitleIcon?: boolean;
    enableSplitView?: boolean;
    showEllipsis?: boolean;
    position?: ej.mobile.Toolbar.Position;

}
//ejmToolbar IOS7 Options
interface ToolbarIOS7Options {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Flat Options
interface ToolbarFlatOptions {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Windows Options
interface ToolbarWindowsOptions {
    position?: ej.mobile.Toolbar.Position;
}
//ejmToolbar Option
interface ToolbarOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    items?: Array<ToolbarItems>;
    enabled?: boolean;
	enablePersistence?:boolean;
    hide?: boolean;
    position?: ej.mobile.Toolbar.Position;
    android?: ToolbarAndroidOptions;
    windows?: windowsOption;
    ios7?: ToolbarIOS7Options;
    Flat?: ToolbarFlatOptions;
    templateId?: any;
    titleIconUrl?: any;
    touchStart? (e: ToolbarEventArgs): void;
    touchEnd? (e: ToolbarEventArgs): void;
    create? (e: ToolbarEventArgs): void;
    destroy? (e: ToolbarEventArgs): void;

}
interface ToolbarItems{
	iconName?: ej.mobile.Toolbar.IconName;
	iconUrl?: string;
}
//ejmToolbarEvent Arugument
interface ToolbarEventArgs {
    cancel: boolean;
    type: string;
    model: ToolbarOptions;
}

export module Toolbar{ 
	enum Position{
		Normal,
		Fixed
	}
	enum IconName{
		Add,
		Back,
		Bookmark,
        Close,
        Compose,
        Copy,
        Cut,
        Delete,
        Done,
        Edit,
        Mail,
        Next,
        Refresh,
        Overflow,
        Paste,
        Reply,
        Save,
        Search,
        Settings,
        Share 
	}
}
/*Group button*/
class GroupButton extends ej.Widget {
    static fn: GroupButton;
    element: JQuery;
    constructor(element?: JQuery, options?: GroupButtonOptions);
    model: GroupButtonOptions;
    defaults: GroupButtonOptions;
    destroy(): void;
    //add public functions
}
interface GroupButtonOptions {
    selectedItemIndex?: (number|string);
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    enablePersistence?: boolean;
    items?: Array<GroupButtonItemsOptions>;
    windows?: windowsOption;
    touchStart? (e: GroupButtonEventArgs): void;
    touchEnd? (e: GroupButtonEventArgs): void;
    destroy? (e: GroupButtonEventArgs): void;
    create? (e: GroupButtonEventArgs): void;
}
interface GroupButtonItemsOptions {
    text?: string;
    type?: string;
    imageClass?: string;
    imageUrl?: string;
}
interface GroupButtonEventArgs {
    cancel: boolean;
    type: string;
    model: GroupButtonOptions;
}
/* SplitPane */
class SplitPane extends ej.Widget {
    static fn: SplitPane;
    constructor(element: JQuery, options?: SplitPaneOptions);
    model:SplitPaneOptions;
    defaults: SplitPaneOptions;
    loadContent(toPage: string, options?: any): void;
    transferPage(toPage: any, options: any, existing: any, newPage: any): void;
    refreshRightScroller(): void;
    refreshLeftScroller(): void;
    destroy(): void;
}
interface SplitPaneOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    allowLeftPaneScrolling?: boolean;
    allowRightPaneScrolling?: boolean;
    android?: SplitPaneAndroidOptions;
    windows?: SplitPaneWindowsOptions;
    ios7?: SplitPaneIOS7Options;
    flat?: SplitPaneFlatOptions;
    enablePersistence?: boolean;
    enableSwipe?: boolean;
    overlayLeftPane?: boolean;
    overlayDirection?: ej.mobile.SplitPane.OverlayDirection;
    leftPaneScrollSettings?: Object;
    rightPaneScrollSettings?: Object;
    leftHeaderSettings?: Object;
    rightHeaderSettings?: Object;
    toolbarSettings?: Object;
    create? (e: SplitPaneBaseEventArgs): void;
    destroy? (e: SplitPaneBaseEventArgs): void;
    beforeTransfer? (e: SplitPaneEventArgs): void;
    afterLoadSuccess? (e: SplitPaneEventArgs): void;
}
interface SplitPaneBaseEventArgs {
    cancel: boolean;
    type: string;
    model: SplitPaneOptions;
}
interface SplitPaneEventArgs extends SplitPaneBaseEventArgs {
    element: Object;
    toPage: Object;
    leftPaneheader: Object;
    rightPaneheader: Object;
    toolbar: Object;
}
interface SplitPaneAndroidOptions {
    showToolbar?: boolean;
}
interface SplitPaneWindowsOptions {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}
interface SplitPaneIOS7Options {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}
interface SplitPaneFlatOptions {
    showLeftPaneHeader?: boolean;
    showRightPaneHeader?: boolean;
}

export module SplitPane{
enum OverlayDirection{
Left,
Right
}
}

class Dialog extends ej.Widget {
    static fn: Dialog;
    element: JQuery;
    constructor(element: JQuery, options?: DialogOptions);
    model: DialogOptions;
    defaults: DialogOptions;
    open(): void;
    close(): void;
    isOpened(): boolean;
    destroy(): void;
}
interface DialogOptions {
    cssClass?: string;
    enableAutoOpen?: boolean;
    title?: string;
    beforeClose? (e: DialogBeforeClose): void;
    open? (e: DialogOpen): void;
    close? (e: DialogClose): void;
    buttonTap? (e: DialogButtonTap): void;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    enableModal?: boolean;
    showButtons?: boolean;
    allowScrolling?: boolean;
    enableNativeScrolling?: boolean;
    mode?: ej.mobile.Dialog.Mode;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
    checkDOMChanges?: boolean;
    templateId?: string;
    targetHeight?: string|number;
    enablePersistence?: boolean;
    enableAnimation?: boolean;
    windows?: windowsOption;
    destroy? (e: DialogEventArgs): void;
    create? (e: DialogEventArgs): void;
}
interface DialogEventArgs {
    cancel: boolean;
    type: string;
    model: DialogOptions;
}
interface DialogBeforeClose extends DialogEventArgs{
    title: string;
}
interface DialogOpen extends DialogEventArgs {
    element: Object;
    title: string;
}
interface DialogClose extends DialogEventArgs {
    title: string;
    element: Object;
}
interface DialogButtonTap extends DialogEventArgs {
    text: string;
}

export module Dialog{
enum Mode{
        Alert,
        Confirm,
        Normal,
        FullView
}
}

class TextboxCommon extends ej.Widget {
    model: TextBoxOptions;
    disable(): void;
    enable(): void;
    getStrippedValue(): string;
    getUnstrippedValue(): string;
    getValue(): string;
    getWatermarkText(): string;
    refresh(): void;
    destroy(): void;
}
class TextBox extends TextboxCommon {
    static fn: TextBox;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;
}
/* Password */
class Password extends TextboxCommon {
    static fn: Password;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;
}
/* MaskEdit */
class MaskEdit extends TextboxCommon {
    static fn: MaskEdit;
    constructor(element: JQuery, options?: MaskEditOptions);
    defaults: MaskEditOptions;

}
/* TextArea */
class TextArea extends TextboxCommon {
    static fn: TextArea;
    constructor(element: JQuery, options?: TextBoxOptions);
    defaults: TextBoxOptions;

}
interface TextBoxOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    cssClass?: string;
    showBorder?: boolean;
    windows?: WindowsTextBoxOptions;
    value?: string;
    watermarkText?: string;
    change? (e: TextBoxChangeEventArgs): void;
    create? (e: TextBoxEventArgs): void;
    destroy? (e: TextBoxEventArgs): void;
    enabled?: boolean;
    enablePersistence?: boolean;
    readOnly?: boolean;
}
interface TextBoxEventArgs {
    cancel: boolean;
    type: string;
    model: TextBoxOptions;
}
interface MaskEditOptions extends TextBoxOptions {
    mask?: string;
}
interface WindowsTextBoxOptions extends windowsOption {
    allowReset?: boolean;
}
interface TextBoxChangeEventArgs extends TextBoxEventArgs {
    element: Object;
    value: string;
    isChecked: boolean;
}
class Footer extends ej.Widget {
    static fn: Footer;
    element: JQuery;
    constructor(element: JQuery, options?: FooterOptions);
    model: FooterOptions;
    defaults: FooterOptions;
    getTitle(): string;
    destroy(): void;
    
}

interface FooterOptions {
    hideForUnSupportedDevice?: boolean;
    leftButtonNavigationUrl?: string;
    rightButtonNavigationUrl?: string;
    title?: string;
    cssClass?: string;
    showTitle?: boolean;
    position?: ej.mobile.Footer.Position;
    leftButtonCaption?: string;
    rightButtonCaption?: string;
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    showLeftButton?: boolean;
    showRightButton?: boolean;
	enablePersistence?:boolean;
	leftButtonStyle?:ej.mobile.Footer.FooterLeftButtonStyle;
	rightButtonStyle?:ej.mobile.Footer.FooterRightButtonStyle;
    ios7?: Footerios7Options;
    flat?: FooterFlatOptions;
    android?: FooterAndroidOptions;
    templateId?: string;
    windows?: FooterWindowsOptions;
    leftButtonTap? (e: FooterLeftButtonTapEventArgs): void;
    rightButtonTap? (e: FooterRightButtonTapEventArgs): void;
    destroy?(e:FooterBaseArgs):void;
    create?(e:FooterBaseArgs):void;
}

interface FooterWindowsOptions extends windowsOption {
    renderDefault?: boolean;
    rightButtonStyle?: ej.mobile.Footer.Windows.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Windows.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface Footerios7Options {
    rightButtonStyle?:  ej.mobile.Footer.IOS7.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.IOS7.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface FooterFlatOptions {
    rightButtonStyle?: ej.mobile.Footer.Flat.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Flat.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}
interface FooterAndroidOptions {
    rightButtonStyle?: ej.mobile.Footer.Android.FooterRightButtonStyle;
    leftButtonStyle?: ej.mobile.Footer.Android.FooterLeftButtonStyle;
    showLeftButton?: boolean;
    showRightButton?: boolean;
}

interface FooterBaseArgs{
    cancel: boolean;
    type: string;
    model: FooterOptions;
}

interface FooterLeftButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}
interface FooterRightButtonTapEventArgs {
    text: string;
    cancel: boolean;
    model: Object;
    type: string;
    status: boolean;
}

export module Footer{
export module IOS7
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Header,
 Normal
}
enum FooterRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Flat
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Header,
 Normal
}
}

export module Android
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Normal,
 Header
}
}

export module Windows
{
enum FooterLeftButtonStyle
{
 Auto,
 Back,
 Normal,
 Header
}
enum FooterRightButtonStyle
{
 Auto,
 Normal,
 Header
}
} 
enum Position{
 Normal,
 Fixed
}
enum FooterLeftButtonStyle{
Back,
Header,
Normal
}
enum FooterRightButtonStyle{
Header,
Normal
}
}

class CheckBox extends ej.Widget {
    static fn: CheckBox;
    constructor(element: JQuery, options?: CheckBoxOptions);
    model: CheckBoxOptions;
    defaults: CheckBoxOptions;
    isChecked(): boolean;
    destroy(): void;

}
interface CheckBoxOptions {
    touchStart? (e: CheckBoxTouchStart): void;
    touchEnd? (e: CheckBoxTouchEnd): void;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    preventDefault?: boolean;
    theme?: ej.mobile.Theme;
    enabled?: boolean;
    checked?: boolean;
    enableTriState?: boolean;
    checkState?: ej.mobile.CheckBox.CheckState;
    windows?: windowsOption;
    enablePersistence?: boolean;
    text?: string;
    destroy? (e: checkBoxEventArgs): void;
    create? (e: checkBoxEventArgs): void;
}
interface checkBoxEventArgs {
    cancel: boolean;
    type: string;
    model: CheckBoxOptions;
}
interface CheckBoxTouchStart extends checkBoxEventArgs{
    element: Object;
    value: string;
    isChecked: boolean;
}
interface CheckBoxTouchEnd extends checkBoxEventArgs{
    element: Object;
    value: string;
    isChecked: boolean;
}
export module CheckBox{
	enum CheckState{
		Uncheck,
		Check,
		Indeterminate
	}	
}
class ScrollPanel extends ej.Widget {
        static fn: ScrollPanel;
        constructor(element: JQuery, target: any, options?: ScrollPanelOptions);
        model: ScrollPanelOptions;
        defaults: ScrollPanelOptions;
        refresh(): void;
        disable(): void;
        enable(): void;
        getComputedPosition(): void;
        stop(): void;
        getScrollPosition(): void;
        destroy(): void;
    }
    interface ScrollPanelOptions {
        renderMode?: ej.mobile.RenderMode;
        theme?: ej.mobile.Theme;
        enableResize?: boolean;
        targetHeight?: number;
        targetWidth?: number;
        scrollHeight?: number;
        scrollWidth?: number;
        target: any;
        enableFade?: boolean;
        enableShrink?: (boolean|string);
        autoAdjustHeight?: boolean;
        isRelative?: boolean;
        wheelSpeed?: number;
        enableInteraction?: boolean;
        enabled?: boolean;
		eventPassthrough?:any;
		translateZ?:string;
		mode?:ej.mobile.ScrollPanel.Mode;
        checkDOMChanges?: boolean;
        enableHrScroll?: boolean;
        enableVrScroll?: boolean;
        zoomMin?: number;
        zoomMax?: number;
        adjustFixedPosition?: boolean;
        startZoom?: number;
        startX?: number;
        startY?: number;
		bounceEasing?:string;
		enableDisplacement?:boolean;
		displacementValue?:number;
		displacementTime?:number;
		preventDefaultException?:{tagName?:any}
		deceleration?:any;
        disablePointer?: boolean;
        disableMouse?: boolean;
        disableTouch?: boolean;
        directionLockThreshold?: number;
        momentum?: boolean;
        enableBounce?: boolean;
        bounceTime?: number;
        preventDefault?: boolean;
        enableTransform?: boolean;
        enableTransition?: boolean;
        showScrollbars?: boolean;
        enableMouseWheel?: boolean;
        enableKeys?: boolean;
        enableZoom?: boolean;
        enableNativeScrolling?: boolean;
        invertWheel?: boolean;
        enablePersistence?: boolean;
        create? (e: ScrollPanelBaseEventArgs): void;
        destroy? (e: ScrollPanelBaseEventArgs): void;
        scrollStart? (e: ScrollPanelEventArgs): void;
        scroll? (e: ScrollPanelEventArgs): void;
        scrollEnd? (e: ScrollPanelEventArgs): void;        
        zoomStart? (e: ScrollPanelEventArgs): void;
        zoomEnd? (e: ScrollPanelEventArgs): void;
    }
interface ScrollPanelBaseEventArgs {
    cancel: boolean;
    type: string;
    model: ScrollPanelOptions;
}
interface ScrollPanelEventArgs extends ScrollPanelBaseEventArgs {
    x: number;
    y: number;
    object: Object;
}   
export module ScrollPanel{
	enum Mode{
		Page,
		Container
	}
}
class NavigationDrawer extends ej.Widget {
    static fn: NavigationDrawer;
    element: JQuery;
    constructor(element: JQuery, options?: NavigationDrawerOptions);
    model: NavigationDrawerOptions;
    defaults: NavigationDrawerOptions;
    open(e: any): void;
    close(e: any): void;
    toggle(e: any): void;
    destroy(): void;
}
//ejmNavigationDrawer Option
interface NavigationDrawerOptions {
    theme?: ej.mobile.Theme;
    renderMode?: ej.mobile.RenderMode;
    cssClass?: string;
    contentId?: string;
    allowScrolling?: boolean;
    scrollSettings?: {};
    considerSubPage?: boolean;
    direction?: ej.mobile.NavigationDrawer.Direction;
    showScrollbars?: boolean;
    targetId?: string;
    position?: ej.mobile.NavigationDrawer.Position;
    enableListView?: boolean;
    listViewSettings?: {};
    type?: ej.mobile.NavigationDrawer.Type;
    width?: string;
    items?: Array<any>;
    swipe? (e: NavigationDrawerSwipeEventArgs): void;
    open? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    beforeClose? (e: NavigationDrawerOpenBeforeCloseEventArgs): void;
    create? (e: NavigationDrawerEvent): void;
    destroy? (e: NavigationDrawerEvent): void;
}

interface NavigationDrawerEvent {
    type: string;
    cancel: boolean;
    model: NavigationDrawerOptions;
}

//ejmNavigationDrawer Swipe Event Arugument
interface NavigationDrawerSwipeEventArgs extends NavigationDrawerEvent {
    element: Object;
    targetElement: Object;
    direction: string;
}
//ejmNavigationDrawer Open and BeforeClose Event Arugument
interface NavigationDrawerOpenBeforeCloseEventArgs extends NavigationDrawerEvent {
    element: Object;
}

export module NavigationDrawer {
    enum Direction {
        Left,
        Right
    }
    enum Position {
        Normal,
        Fixed
    }
    enum Type {
        Overlay,
        Slide
    }
}


class RadialMenu extends ej.Widget {
    static fn: RadialMenu;
    constructor(element: JQuery, options?: RadialMenuOptions);
    model: RadialMenuOptions;
    defaults: RadialMenuOptions;
    show(): void;
    hide(): void;
    menuHide(): void;
    hideMenu(): void;
    showMenu(): void;
    enableItemByIndex(index: number): void;
    enableItemsByIndices(itemIndices: Array<number>): void;
    disableItemByIndex(itemIndex: number): void;
    disableItemsByIndices(itemIndices: Array<number>): void;
    updateBadgeValue(index: number, value: number): void;
    showBadge(index: number): void;
    hideBadge(index: number): void;
}

interface RadialMenuOptions {
    renderMode?: ej.mobile.RenderMode;
    theme?: ej.mobile.Theme;
    radius?: number;
    cssClass?: string;
    imageClass?: string;
    backImageClass?: string;
    position?: ej.mobile.RadialMenu.Position;
    enableAnimation?: boolean;
    windows?: windowsOption;
    items?: any;
    touch? (e: RadialMenuEventArgs): void;
    open? (e: RadialMenuEventArgs): void;
    close? (e: RadialMenuEventArgs): void;
    select? (e: RadialMenuEventArgs): void;
}
interface RadialMenuEventArgs {
    cancel: boolean;
    model: RadialMenuOptions;
    type: string;
    index: number;
    childIndex: number;
}
export module RadialMenu{
	enum Position{
	RightCenter,
	RightTop,
	RightBottom,
	LeftCenter,
	LeftTop,
	LeftBottom
	}
}


}
declare module ej.datavisualization {
	
class LinearGauge extends ej.Widget {
	static fn: LinearGauge;
	constructor(element: JQuery, options?: LinearGauge.Model);
	constructor(element: Element, options?: LinearGauge.Model);
	model:LinearGauge.Model;
	defaults:LinearGauge.Model;

	/** destroy the linear gauge all events bound using this._on will be unbind automatically and bring the control to pre-init state.
	* @returns {void}
	*/
	destroy(): void;

	/** To export Image
	* @returns {void}
	*/
	exportImage(): void;

	/** To get Bar Distance From Scale in number
	* @returns {void}
	*/
	getBarDistanceFromScale(): void;

	/** To get Bar Pointer Value in number
	* @returns {void}
	*/
	getBarPointerValue(): void;

	/** To get Bar Width in number
	* @returns {void}
	*/
	getBarWidth(): void;

	/** To get CustomLabel Angle in number
	* @returns {void}
	*/
	getCustomLabelAngle(): void;

	/** To get CustomLabel Value in string
	* @returns {void}
	*/
	getCustomLabelValue(): void;

	/** To get Label Angle in number
	* @returns {void}
	*/
	getLabelAngle(): void;

	/** To get LabelPlacement in number
	* @returns {void}
	*/
	getLabelPlacement(): void;

	/** To get LabelStyle in number
	* @returns {void}
	*/
	getLabelStyle(): void;

	/** To get Label XDistance From Scale in number
	* @returns {void}
	*/
	getLabelXDistanceFromScale(): void;

	/** To get PointerValue in number
	* @returns {void}
	*/
	getLabelYDistanceFromScale(): void;

	/** To get Major Interval Value in number
	* @returns {void}
	*/
	getMajorIntervalValue(): void;

	/** To get MarkerStyle in number
	* @returns {void}
	*/
	getMarkerStyle(): void;

	/** To get Maximum Value in number
	* @returns {void}
	*/
	getMaximumValue(): void;

	/** To get PointerValue in number
	* @returns {void}
	*/
	getMinimumValue(): void;

	/** To get Minor Interval Value in number
	* @returns {void}
	*/
	getMinorIntervalValue(): void;

	/** To get Pointer Distance From Scale in number
	* @returns {void}
	*/
	getPointerDistanceFromScale(): void;

	/** To get PointerHeight in number
	* @returns {void}
	*/
	getPointerHeight(): void;

	/** To get Pointer Placement in String
	* @returns {void}
	*/
	getPointerPlacement(): void;

	/** To get PointerValue in number
	* @returns {void}
	*/
	getPointerValue(): void;

	/** To get PointerWidth in number
	* @returns {void}
	*/
	getPointerWidth(): void;

	/** To get Range Border Width in number
	* @returns {void}
	*/
	getRangeBorderWidth(): void;

	/** To get Range Distance From Scale in number
	* @returns {void}
	*/
	getRangeDistanceFromScale(): void;

	/** To get Range End Value in number
	* @returns {void}
	*/
	getRangeEndValue(): void;

	/** To get Range End Width in number
	* @returns {void}
	*/
	getRangeEndWidth(): void;

	/** To get Range Position in number
	* @returns {void}
	*/
	getRangePosition(): void;

	/** To get Range Start Value in number
	* @returns {void}
	*/
	getRangeStartValue(): void;

	/** To get Range Start Width in number
	* @returns {void}
	*/
	getRangeStartWidth(): void;

	/** To get ScaleBarLength in number
	* @returns {void}
	*/
	getScaleBarLength(): void;

	/** To get Scale Bar Size in number
	* @returns {void}
	*/
	getScaleBarSize(): void;

	/** To get Scale Border Width in number
	* @returns {void}
	*/
	getScaleBorderWidth(): void;

	/** To get Scale Direction in number
	* @returns {void}
	*/
	getScaleDirection(): void;

	/** To get Scale Location in object
	* @returns {void}
	*/
	getScaleLocation(): void;

	/** To get Scale Style in string
	* @returns {void}
	*/
	getScaleStyle(): void;

	/** To get Tick Angle in number
	* @returns {void}
	*/
	getTickAngle(): void;

	/** To get Tick Height in number
	* @returns {void}
	*/
	getTickHeight(): void;

	/** To get getTickPlacement in number
	* @returns {void}
	*/
	getTickPlacement(): void;

	/** To get Tick Style in string
	* @returns {void}
	*/
	getTickStyle(): void;

	/** To get Tick Width in number
	* @returns {void}
	*/
	getTickWidth(): void;

	/** To get get Tick XDistance From Scale in number
	* @returns {void}
	*/
	getTickXDistanceFromScale(): void;

	/** To get Tick YDistance From Scale in number
	* @returns {void}
	*/
	getTickYDistanceFromScale(): void;

	/** Specifies the scales.
	* @returns {void}
	*/
	scales(): void;

	/** To set setBarDistanceFromScale
	* @returns {void}
	*/
	setBarDistanceFromScale(): void;

	/** To set setBarPointerValue
	* @returns {void}
	*/
	setBarPointerValue(): void;

	/** To set setBarWidth
	* @returns {void}
	*/
	setBarWidth(): void;

	/** To set setCustomLabelAngle
	* @returns {void}
	*/
	setCustomLabelAngle(): void;

	/** To set setCustomLabelValue
	* @returns {void}
	*/
	setCustomLabelValue(): void;

	/** To set setLabelAngle
	* @returns {void}
	*/
	setLabelAngle(): void;

	/** To set setLabelPlacement
	* @returns {void}
	*/
	setLabelPlacement(): void;

	/** To set setLabelStyle
	* @returns {void}
	*/
	setLabelStyle(): void;

	/** To set setLabelXDistanceFromScale
	* @returns {void}
	*/
	setLabelXDistanceFromScale(): void;

	/** To set setLabelYDistanceFromScale
	* @returns {void}
	*/
	setLabelYDistanceFromScale(): void;

	/** To set setMajorIntervalValue
	* @returns {void}
	*/
	setMajorIntervalValue(): void;

	/** To set setMarkerStyle
	* @returns {void}
	*/
	setMarkerStyle(): void;

	/** To set setMaximumValue
	* @returns {void}
	*/
	setMaximumValue(): void;

	/** To set setMinimumValue
	* @returns {void}
	*/
	setMinimumValue(): void;

	/** To set setMinorIntervalValue
	* @returns {void}
	*/
	setMinorIntervalValue(): void;

	/** To set setPointerDistanceFromScale
	* @returns {void}
	*/
	setPointerDistanceFromScale(): void;

	/** To set PointerHeight
	* @returns {void}
	*/
	setPointerHeight(): void;

	/** To set setPointerPlacement
	* @returns {void}
	*/
	setPointerPlacement(): void;

	/** To set PointerValue
	* @returns {void}
	*/
	setPointerValue(): void;

	/** To set PointerWidth
	* @returns {void}
	*/
	setPointerWidth(): void;

	/** To set setRangeBorderWidth
	* @returns {void}
	*/
	setRangeBorderWidth(): void;

	/** To set setRangeDistanceFromScale
	* @returns {void}
	*/
	setRangeDistanceFromScale(): void;

	/** To set setRangeEndValue
	* @returns {void}
	*/
	setRangeEndValue(): void;

	/** To set setRangeEndWidth
	* @returns {void}
	*/
	setRangeEndWidth(): void;

	/** To set setRangePosition
	* @returns {void}
	*/
	setRangePosition(): void;

	/** To set setRangeStartValue
	* @returns {void}
	*/
	setRangeStartValue(): void;

	/** To set setRangeStartWidth
	* @returns {void}
	*/
	setRangeStartWidth(): void;

	/** To set setScaleBarLength
	* @returns {void}
	*/
	setScaleBarLength(): void;

	/** To set setScaleBarSize
	* @returns {void}
	*/
	setScaleBarSize(): void;

	/** To set setScaleBorderWidth
	* @returns {void}
	*/
	setScaleBorderWidth(): void;

	/** To set setScaleDirection
	* @returns {void}
	*/
	setScaleDirection(): void;

	/** To set setScaleLocation
	* @returns {void}
	*/
	setScaleLocation(): void;

	/** To set setScaleStyle
	* @returns {void}
	*/
	setScaleStyle(): void;

	/** To set setTickAngle
	* @returns {void}
	*/
	setTickAngle(): void;

	/** To set setTickHeight
	* @returns {void}
	*/
	setTickHeight(): void;

	/** To set setTickPlacement
	* @returns {void}
	*/
	setTickPlacement(): void;

	/** To set setTickStyle
	* @returns {void}
	*/
	setTickStyle(): void;

	/** To set setTickWidth
	* @returns {void}
	*/
	setTickWidth(): void;

	/** To set setTickXDistanceFromScale
	* @returns {void}
	*/
	setTickXDistanceFromScale(): void;

	/** To set setTickYDistanceFromScale
	* @returns {void}
	*/
	setTickYDistanceFromScale(): void;
}
export module LinearGauge{

export interface Model {

	/**Specifies the animationSpeed
	* @Default {500}
	*/
	animationSpeed?: number;

	/**Specifies the backgroundColor for Linear gauge.
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the borderColor for Linear gauge.
	* @Default {null}
	*/
	borderColor?: string;

	/**Specifies the animate state
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Specifies the animate state for marker pointer
	* @Default {true}
	*/
	enableMarkerPointerAnimation?: boolean;

	/**Specifies the can resize state.
	* @Default {false}
	*/
	enableResize?: boolean;

	/**Specify frame of linear gauge
	* @Default {null}
	*/
	frame?: Frame;

	/**Specifies the height of Linear gauge.
	* @Default {400}
	*/
	height?: number;

	/**Specifies the labelColor for Linear gauge.
	* @Default {null}
	*/
	labelColor?: string;

	/**Specifies the maximum value of Linear gauge.
	* @Default {100}
	*/
	maximum?: number;

	/**Specifies the minimum value of Linear gauge.
	* @Default {0}
	*/
	minimum?: number;

	/**Specifies the orientation for Linear gauge.
	* @Default {Vertical}
	*/
	orientation?: string;

	/**Specify labelPosition value of Linear gauge See OuterCustomLabelPosition
	* @Default {bottom}
	*/
	outerCustomLabelPosition?: ej.datavisualization.LinearGauge.OuterCustomLabelPosition|string;

	/**Specifies the pointerGradient1 for Linear gauge.
	* @Default {null}
	*/
	pointerGradient1?: any;

	/**Specifies the pointerGradient2 for Linear gauge.
	* @Default {null}
	*/
	pointerGradient2?: any;

	/**Specifies the read only state.
	* @Default {true}
	*/
	readOnly?: boolean;

	/**Specifies the scales
	* @Default {null}
	*/
	scales?: Scales;

	/**Specifies the theme for Linear gauge. See LinearGauge.Themes
	* @Default {flatlight}
	*/
	theme?: ej.datavisualization.LinearGauge.Themes|string;

	/**Specifies the tick Color for Linear gauge.
	* @Default {null}
	*/
	tickColor?: string;

	/**Specify tooltip options of linear gauge
	* @Default {false}
	*/
	tooltip?: Tooltip;

	/**Specifies the value of the Gauge.
	* @Default {0}
	*/
	value?: number;

	/**Specifies the width of Linear gauge.
	* @Default {150}
	*/
	width?: number;

	/**Triggers while the bar pointer are being drawn on the gauge.*/
	drawBarPointers? (e: DrawBarPointersEventArgs): void;

	/**Triggers while the customLabel are being drawn on the gauge.*/
	drawCustomLabel? (e: DrawCustomLabelEventArgs): void;

	/**Triggers while the Indicator are being drawn on the gauge.*/
	drawIndicators? (e: DrawIndicatorsEventArgs): void;

	/**Triggers while the label are being drawn on the gauge.*/
	drawLabels? (e: DrawLabelsEventArgs): void;

	/**Triggers while the marker are being drawn on the gauge.*/
	drawMarkerPointers? (e: DrawMarkerPointersEventArgs): void;

	/**Triggers while the range are being drawn on the gauge.*/
	drawRange? (e: DrawRangeEventArgs): void;

	/**Triggers while the ticks are being drawn on the gauge.*/
	drawTicks? (e: DrawTicksEventArgs): void;

	/**Triggers when the gauge is initialized.*/
	init? (e: InitEventArgs): void;

	/**Triggers while the gauge start to Load.*/
	load? (e: LoadEventArgs): void;

	/**Triggers when the left mouse button is clicked.*/
	mouseClick? (e: MouseClickEventArgs): void;

	/**Triggers when clicking and dragging the mouse pointer over the gauge pointer.*/
	mouseClickMove? (e: MouseClickMoveEventArgs): void;

	/**Triggers when the mouse click is released.*/
	mouseClickUp? (e: MouseClickUpEventArgs): void;

	/**Triggers while the rendering of the gauge completed.*/
	renderComplete? (e: RenderCompleteEventArgs): void;
}

export interface DrawBarPointersEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the pointer
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the current Bar pointer element.
	*/
	barElement?: any;

	/**returns the index of the bar pointer.
	*/
	barPointerIndex?: number;

	/**returns the value of the bar pointer.
	*/
	PointerValue?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawCustomLabelEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the customLabel
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the customLabel style
	*/
	style?: any;

	/**returns the current customLabel element.
	*/
	customLabelElement?: any;

	/**returns the index of the customLabel.
	*/
	customLabelIndex?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawIndicatorsEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the Indicator
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the Indicator style
	*/
	style?: string;

	/**returns the current Indicator element.
	*/
	IndicatorElement?: any;

	/**returns the index of the Indicator.
	*/
	IndicatorIndex?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawLabelsEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the label
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the label belongs.
	*/
	scaleIndex?: number;

	/**returns the label style
	*/
	style?: string;

	/**returns the angle of the label.
	*/
	angle?: number;

	/**returns the current label element.
	*/
	element?: any;

	/**returns the index of the label.
	*/
	index?: number;

	/**returns the label value of the label.
	*/
	value?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawMarkerPointersEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the pointer
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the ticks style
	*/
	style?: string;

	/**returns the current marker pointer element.
	*/
	markerElement?: any;

	/**returns the index of the marker pointer.
	*/
	markerPointerIndex?: number;

	/**returns the value of the marker pointer.
	*/
	pointerValue?: number;

	/**returns the angle of the marker pointer.
	*/
	pointerAngle?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawRangeEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the range
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the range style
	*/
	style?: string;

	/**returns the current range element.
	*/
	rangeElement?: any;

	/**returns the index of the range.
	*/
	rangeIndex?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface DrawTicksEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the ticks
	*/
	position?: any;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the tick belongs.
	*/
	scaleIndex?: number;

	/**returns the ticks style
	*/
	style?: string;

	/**returns the angle of the tick.
	*/
	angle?: number;

	/**returns the current tick element.
	*/
	element?: any;

	/**returns the index of the tick.
	*/
	index?: number;

	/**returns the tick value of the tick.
	*/
	value?: number;

	/**returns the name of the event
	*/
	type?: any;
}

export interface InitEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the entire scale element.
	*/
	scaleElement?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface LoadEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the entire scale element.
	*/
	scaleElement?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the name of the event
	*/
	type?: any;
}

export interface MouseClickEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element* @param {Object} args.markerpointer returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	markerpointerindex?: number;

	/**returns the pointer element.
	*/
	markerpointerelement?: any;

	/**returns the value of the pointer.
	*/
	markerpointervalue?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface MouseClickMoveEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	index?: number;

	/**returns the pointer element.
	*/
	element?: any;

	/**returns the value of the pointer.
	*/
	value?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface MouseClickUpEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element* @param {Object} args.markerpointer returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	markerpointerIndex?: number;

	/**returns the pointer element.
	*/
	markerpointerElement?: any;

	/**returns the value of the pointer.
	*/
	markerpointerValue?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface RenderCompleteEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the entire scale element.
	*/
	scaleElement?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the name of the event
	*/
	type?: any;
}

export interface Frame {

	/**Specifies the frame background image url of linear gauge
	* @Default {null}
	*/
	backgroundImageUrl?: string;

	/**Specifies the frame InnerWidth
	* @Default {8}
	*/
	innerWidth?: number;

	/**Specifies the frame OuterWidth
	* @Default {12}
	*/
	outerWidth?: number;
}

export interface ScalesBarPointersBorder {

	/**Specifies the border Color of bar pointer
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border Width of bar pointer
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesBarPointers {

	/**Specifies the backgroundColor of bar pointer
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the border of bar pointer
	* @Default {null}
	*/
	border?: ScalesBarPointersBorder;

	/**Specifies the distanceFromScale of bar pointer
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specifies the scaleBar Gradient of bar pointer
	* @Default {null}
	*/
	gradients?: any;

	/**Specifies the opacity of bar pointer
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the value of bar pointer
	* @Default {null}
	*/
	value?: number;

	/**Specifies the pointer Width of bar pointer
	* @Default {width=30}
	*/
	width?: number;
}

export interface ScalesBorder {

	/**Specifies the border color of the Scale.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border width of the Scale.
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesCustomLabelsFont {

	/**Specifies the fontFamily in customLabels
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle in customLabels. See FontStyle
	* @Default {Bold}
	*/
	fontStyle?: ej.datavisualization.LinearGauge.FontStyle|string;

	/**Specifies the font size in customLabels
	* @Default {11px}
	*/
	size?: string;
}

export interface ScalesCustomLabelsPosition {

	/**Specifies the position x in customLabels
	* @Default {0}
	*/
	x?: number;

	/**Specifies the y in customLabels
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesCustomLabels {

	/**Specifies the label Color in customLabels
	* @Default {null}
	*/
	color?: number;

	/**Specifies the font in customLabels
	* @Default {null}
	*/
	font?: ScalesCustomLabelsFont;

	/**Specifies the opacity in customLabels
	* @Default {0}
	*/
	opacity?: string;

	/**Specifies the position in customLabels
	* @Default {null}
	*/
	position?: ScalesCustomLabelsPosition;

	/**Specifies the positionType in customLabels.See CustomLabelPositionType
	* @Default {null}
	*/
	positionType?: any;

	/**Specifies the textAngle in customLabels
	* @Default {0}
	*/
	textAngle?: number;

	/**Specifies the label Value in customLabels
	*/
	value?: string;
}

export interface ScalesIndicatorsBorder {

	/**Specifies the border Color in bar indicators
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border Width in bar indicators
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesIndicatorsFont {

	/**Specifies the fontFamily of font in bar indicators
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of font in bar indicators. See FontStyle
	* @Default {ej.datavisualization.LinearGauge.FontStyle.Bold}
	*/
	fontStyle?: ej.datavisualization.LinearGauge.FontStyle|string;

	/**Specifies the size of font in bar indicators
	* @Default {11px}
	*/
	size?: string;
}

export interface ScalesIndicatorsPosition {

	/**Specifies the x position in bar indicators
	* @Default {0}
	*/
	x?: number;

	/**Specifies the y position in bar indicators
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesIndicatorsStateRanges {

	/**Specifies the backgroundColor in bar indicators state ranges
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the borderColor in bar indicators state ranges
	* @Default {null}
	*/
	borderColor?: string;

	/**Specifies the endValue in bar indicators state ranges
	* @Default {60}
	*/
	endValue?: number;

	/**Specifies the startValue in bar indicators state ranges
	* @Default {50}
	*/
	startValue?: number;

	/**Specifies the text in bar indicators state ranges
	*/
	text?: string;

	/**Specifies the textColor in bar indicators state ranges
	* @Default {null}
	*/
	textColor?: string;
}

export interface ScalesIndicatorsTextLocation {

	/**Specifies the textLocation position in bar indicators
	* @Default {0}
	*/
	x?: number;

	/**Specifies the Y position in bar indicators
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesIndicators {

	/**Specifies the backgroundColor in bar indicators
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the border in bar indicators
	* @Default {null}
	*/
	border?: ScalesIndicatorsBorder;

	/**Specifies the font of bar indicators
	* @Default {null}
	*/
	font?: ScalesIndicatorsFont;

	/**Specifies the indicator Height of bar indicators
	* @Default {30}
	*/
	height?: number;

	/**Specifies the opacity in bar indicators
	* @Default {NaN}
	*/
	opacity?: number;

	/**Specifies the position in bar indicators
	* @Default {null}
	*/
	position?: ScalesIndicatorsPosition;

	/**Specifies the state ranges in bar indicators
	* @Default {Array}
	*/
	stateRanges?: Array<ScalesIndicatorsStateRanges>;

	/**Specifies the textLocation in bar indicators
	* @Default {null}
	*/
	textLocation?: ScalesIndicatorsTextLocation;

	/**Specifies the indicator Style of font in bar indicators
	* @Default {ej.datavisualization.LinearGauge.IndicatorType.Rectangle}
	*/
	type?: ej.datavisualization.LinearGauge.IndicatorTypes|string;

	/**Specifies the indicator Width in bar indicators
	* @Default {30}
	*/
	width?: number;
}

export interface ScalesLabelsDistanceFromScale {

	/**Specifies the xDistanceFromScale of labels.
	* @Default {-10}
	*/
	x?: number;

	/**Specifies the yDistanceFromScale of labels.
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesLabelsFont {

	/**Specifies the fontFamily of font.
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of font.See FontStyle
	* @Default {ej.datavisualization.LinearGauge.FontStyle.Bold}
	*/
	fontStyle?: ej.datavisualization.LinearGauge.FontStyle|string;

	/**Specifies the size of font.
	* @Default {11px}
	*/
	size?: string;
}

export interface ScalesLabels {

	/**Specifies the angle of labels.
	* @Default {0}
	*/
	angle?: number;

	/**Specifies the DistanceFromScale of labels.
	* @Default {null}
	*/
	distanceFromScale?: ScalesLabelsDistanceFromScale;

	/**Specifies the font of labels.
	* @Default {null}
	*/
	font?: ScalesLabelsFont;

	/**need to includeFirstValue.
	* @Default {true}
	*/
	includeFirstValue?: boolean;

	/**Specifies the opacity of label.
	* @Default {0}
	*/
	opacity?: number;

	/**Specifies the label Placement of label. See LabelPlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.LinearGauge.PointerPlacement|string;

	/**Specifies the textColor of font.
	* @Default {null}
	*/
	textColor?: string;

	/**Specifies the label Style of label. See LabelType
	* @Default {ej.datavisualization.LinearGauge.LabelType.Major}
	*/
	type?: ej.datavisualization.LinearGauge.ScaleType|string;

	/**Specifies the unitText of label.
	*/
	unitText?: string;

	/**Specifies the unitText Position of label.See UnitTextPlacement
	* @Default {Back}
	*/
	unitTextPlacement?: ej.datavisualization.LinearGauge.UnitTextPlacement|string;
}

export interface ScalesMarkerPointersBorder {

	/**Specifies the border color of marker pointer
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border of marker pointer
	* @Default {number}
	*/
	width?: number;
}

export interface ScalesMarkerPointers {

	/**Specifies the backgroundColor of marker pointer
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the border of marker pointer
	* @Default {null}
	*/
	border?: ScalesMarkerPointersBorder;

	/**Specifies the distanceFromScale of marker pointer
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specifies the pointer Gradient of marker pointer
	* @Default {null}
	*/
	gradients?: any;

	/**Specifies the pointer Length of marker pointer
	* @Default {30}
	*/
	length?: number;

	/**Specifies the opacity of marker pointer
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the pointer Placement of marker pointer See PointerPlacement
	* @Default {Far}
	*/
	placement?: ej.datavisualization.LinearGauge.PointerPlacement|string;

	/**Specifies the marker Style of marker pointerSee MarkerType
	* @Default {Triangle}
	*/
	type?: ej.datavisualization.LinearGauge.MarkerType|string;

	/**Specifies the value of marker pointer
	* @Default {null}
	*/
	value?: number;

	/**Specifies the pointer Width of marker pointer
	* @Default {30}
	*/
	width?: number;
}

export interface ScalesPosition {

	/**Specifies the Horizontal position
	* @Default {50}
	*/
	x?: number;

	/**Specifies the vertical position
	* @Default {50}
	*/
	y?: number;
}

export interface ScalesRangesBorder {

	/**Specifies the border color in the ranges.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border width in the ranges.
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesRanges {

	/**Specifies the backgroundColor in the ranges.
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the border in the ranges.
	* @Default {null}
	*/
	border?: ScalesRangesBorder;

	/**Specifies the distanceFromScale in the ranges.
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specifies the endValue in the ranges.
	* @Default {60}
	*/
	endValue?: number;

	/**Specifies the endWidth in the ranges.
	* @Default {10}
	*/
	endWidth?: number;

	/**Specifies the range Gradient in the ranges.
	* @Default {null}
	*/
	gradients?: any;

	/**Specifies the opacity in the ranges.
	* @Default {null}
	*/
	opacity?: number;

	/**Specifies the range Position in the ranges. See RangePlacement
	* @Default {Center}
	*/
	placement?: ej.datavisualization.LinearGauge.PointerPlacement|string;

	/**Specifies the startValue in the ranges.
	* @Default {20}
	*/
	startValue?: number;

	/**Specifies the startWidth in the ranges.
	* @Default {10}
	*/
	startWidth?: number;
}

export interface ScalesTicksDistanceFromScale {

	/**Specifies the xDistanceFromScale in the tick.
	* @Default {0}
	*/
	x?: number;

	/**Specifies the yDistanceFromScale in the tick.
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesTicks {

	/**Specifies the angle in the tick.
	* @Default {0}
	*/
	angle?: number;

	/**Specifies the tick Color in the tick.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the DistanceFromScale in the tick.
	* @Default {null}
	*/
	distanceFromScale?: ScalesTicksDistanceFromScale;

	/**Specifies the tick Height in the tick.
	* @Default {10}
	*/
	height?: number;

	/**Specifies the opacity in the tick.
	* @Default {0}
	*/
	opacity?: number;

	/**Specifies the tick Placement in the tick. See TickPlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.LinearGauge.PointerPlacement|string;

	/**Specifies the tick Style in the tick. See TickType
	* @Default {MajorInterval}
	*/
	type?: ej.datavisualization.LinearGauge.TicksType|string;

	/**Specifies the tick Width in the tick.
	* @Default {3}
	*/
	width?: number;
}

export interface Scales {

	/**Specifies the backgroundColor of the Scale.
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specifies the scaleBar Gradient of bar pointer
	* @Default {Array}
	*/
	barPointers?: Array<ScalesBarPointers>;

	/**Specifies the border of the Scale.
	* @Default {null}
	*/
	border?: ScalesBorder;

	/**Specifies the customLabel
	* @Default {Array}
	*/
	customLabels?: Array<ScalesCustomLabels>;

	/**Specifies the scale Direction of the Scale. See Directions
	* @Default {CounterClockwise}
	*/
	direction?: ej.datavisualization.LinearGauge.Direction|string;

	/**Specifies the indicator
	* @Default {Array}
	*/
	indicators?: Array<ScalesIndicators>;

	/**Specifies the labels.
	* @Default {Array}
	*/
	labels?: Array<ScalesLabels>;

	/**Specifies the scaleBar Length.
	* @Default {290}
	*/
	length?: number;

	/**Specifies the majorIntervalValue of the Scale.
	* @Default {10}
	*/
	majorIntervalValue?: number;

	/**Specifies the markerPointers
	* @Default {Array}
	*/
	markerPointers?: Array<ScalesMarkerPointers>;

	/**Specifies the maximum of the Scale.
	* @Default {null}
	*/
	maximum?: number;

	/**Specifies the minimum of the Scale.
	* @Default {null}
	*/
	minimum?: number;

	/**Specifies the minorIntervalValue of the Scale.
	* @Default {2}
	*/
	minorIntervalValue?: number;

	/**Specifies the opacity of the Scale.
	* @Default {NaN}
	*/
	opacity?: number;

	/**Specifies the position
	* @Default {null}
	*/
	position?: ScalesPosition;

	/**Specifies the ranges in the tick.
	* @Default {Array}
	*/
	ranges?: Array<ScalesRanges>;

	/**Specifies the shadowOffset.
	* @Default {0}
	*/
	shadowOffset?: number;

	/**Specifies the showBarPointers state.
	* @Default {true}
	*/
	showBarPointers?: boolean;

	/**Specifies the showCustomLabels state.
	* @Default {false}
	*/
	showCustomLabels?: boolean;

	/**Specifies the showIndicators state.
	* @Default {false}
	*/
	showIndicators?: boolean;

	/**Specifies the showLabels state.
	* @Default {true}
	*/
	showLabels?: boolean;

	/**Specifies the showMarkerPointers state.
	* @Default {true}
	*/
	showMarkerPointers?: boolean;

	/**Specifies the showRanges state.
	* @Default {false}
	*/
	showRanges?: boolean;

	/**Specifies the showTicks state.
	* @Default {true}
	*/
	showTicks?: boolean;

	/**Specifies the ticks in the scale.
	* @Default {Array}
	*/
	ticks?: Array<ScalesTicks>;

	/**Specifies the scaleBar type .See ScaleType
	* @Default {Rectangle}
	*/
	type?: ej.datavisualization.LinearGauge.ScaleType|string;

	/**Specifies the scaleBar width.
	* @Default {30}
	*/
	width?: number;
}

export interface Tooltip {

	/**Specify showCustomLabelTooltip value of linear gauge
	* @Default {false}
	*/
	showCustomLabelTooltip?: boolean;

	/**Specify showLabelTooltip value of linear gauge
	* @Default {false}
	*/
	showLabelTooltip?: boolean;

	/**Specify templateID value of linear gauge
	* @Default {false}
	*/
	templateID?: string;
}
}
module LinearGauge
{
enum OuterCustomLabelPosition
{
//string
Left,
//string
Right,
//string
Top,
//string
Bottom,
}
}
module LinearGauge
{
enum FontStyle
{
//string
Bold,
//string
Italic,
//string
Regular,
//string
Strikeout,
//string
Underline,
}
}
module LinearGauge
{
enum Direction
{
//string
Clockwise,
//string
CounterClockwise,
}
}
module LinearGauge
{
enum IndicatorTypes
{
//string
Rectangle,
//string
Circle,
//string
RoundedRectangle,
//string
Text,
}
}
module LinearGauge
{
enum PointerPlacement
{
//string
Near,
//string
Far,
//string
Center,
}
}
module LinearGauge
{
enum ScaleType
{
//string
Major,
//string
Minor,
}
}
module LinearGauge
{
enum UnitTextPlacement
{
//string
Back,
//string
From,
}
}
module LinearGauge
{
enum MarkerType
{
//string
Rectangle,
//string
Triangle,
//string
Ellipse,
//string
Diamond,
//string
Pentagon,
//string
Circle,
//string
Star,
//string
Slider,
//string
Pointer,
//string
Wedge,
//string
Trapezoid,
//string
RoundedRectangle,
}
}
module LinearGauge
{
enum TicksType
{
//string
Majorinterval,
//string
Minorinterval,
}
}
module LinearGauge
{
enum Themes
{
//string
FlatLight,
//string
FlatDark,
}
}

class CircularGauge extends ej.Widget {
	static fn: CircularGauge;
	constructor(element: JQuery, options?: CircularGauge.Model);
	constructor(element: Element, options?: CircularGauge.Model);
	model:CircularGauge.Model;
	defaults:CircularGauge.Model;

	/** destroy the circular gauge widget. all events bound using this._on will be unbind automatically and bring the control to pre-init state.
	* @returns {void}
	*/
	destroy(): void;

	/** To export Image
	* @returns {void}
	*/
	exportImage(): void;

	/** To get BackNeedleLength
	* @returns {void}
	*/
	getBackNeedleLength(): void;

	/** To get CustomLabelAngle
	* @returns {void}
	*/
	getCustomLabelAngle(): void;

	/** To get CustomLabelValue
	* @returns {void}
	*/
	getCustomLabelValue(): void;

	/** To get LabelAngle
	* @returns {void}
	*/
	getLabelAngle(): void;

	/** To get LabelDistanceFromScale
	* @returns {void}
	*/
	getLabelDistanceFromScale(): void;

	/** To get LabelPlacement
	* @returns {void}
	*/
	getLabelPlacement(): void;

	/** To get LabelStyle
	* @returns {void}
	*/
	getLabelStyle(): void;

	/** To get MajorIntervalValue
	* @returns {void}
	*/
	getMajorIntervalValue(): void;

	/** To get MarkerDistanceFromScale
	* @returns {void}
	*/
	getMarkerDistanceFromScale(): void;

	/** To get MarkerStyle
	* @returns {void}
	*/
	getMarkerStyle(): void;

	/** To get MaximumValue
	* @returns {void}
	*/
	getMaximumValue(): void;

	/** To get MinimumValue
	* @returns {void}
	*/
	getMinimumValue(): void;

	/** To get MinorIntervalValue
	* @returns {void}
	*/
	getMinorIntervalValue(): void;

	/** To get NeedleStyle
	* @returns {void}
	*/
	getNeedleStyle(): void;

	/** To get PointerCapBorderWidth
	* @returns {void}
	*/
	getPointerCapBorderWidth(): void;

	/** To get PointerCapRadius
	* @returns {void}
	*/
	getPointerCapRadius(): void;

	/** To get PointerLength
	* @returns {void}
	*/
	getPointerLength(): void;

	/** To get PointerNeedleType
	* @returns {void}
	*/
	getPointerNeedleType(): void;

	/** To get PointerPlacement
	* @returns {void}
	*/
	getPointerPlacement(): void;

	/** To get PointerValue
	* @returns {void}
	*/
	getPointerValue(): void;

	/** To get PointerWidth
	* @returns {void}
	*/
	getPointerWidth(): void;

	/** To get RangeBorderWidth
	* @returns {void}
	*/
	getRangeBorderWidth(): void;

	/** To get RangeDistanceFromScale
	* @returns {void}
	*/
	getRangeDistanceFromScale(): void;

	/** To get RangeEndValue
	* @returns {void}
	*/
	getRangeEndValue(): void;

	/** To get RangePosition
	* @returns {void}
	*/
	getRangePosition(): void;

	/** To get RangeSize
	* @returns {void}
	*/
	getRangeSize(): void;

	/** To get RangeStartValue
	* @returns {void}
	*/
	getRangeStartValue(): void;

	/** To get ScaleBarSize
	* @returns {void}
	*/
	getScaleBarSize(): void;

	/** To get ScaleBorderWidth
	* @returns {void}
	*/
	getScaleBorderWidth(): void;

	/** To get ScaleDirection
	* @returns {void}
	*/
	getScaleDirection(): void;

	/** To get ScaleRadius
	* @returns {void}
	*/
	getScaleRadius(): void;

	/** To get StartAngle
	* @returns {void}
	*/
	getStartAngle(): void;

	/** To get SubGaugeLocation
	* @returns {void}
	*/
	getSubGaugeLocation(): void;

	/** To get SweepAngle
	* @returns {void}
	*/
	getSweepAngle(): void;

	/** To get TickAngle
	* @returns {void}
	*/
	getTickAngle(): void;

	/** To get TickDistanceFromScale
	* @returns {void}
	*/
	getTickDistanceFromScale(): void;

	/** To get TickHeight
	* @returns {void}
	*/
	getTickHeight(): void;

	/** To get TickPlacement
	* @returns {void}
	*/
	getTickPlacement(): void;

	/** To get TickStyle
	* @returns {void}
	*/
	getTickStyle(): void;

	/** To get TickWidth
	* @returns {void}
	*/
	getTickWidth(): void;

	/** To set includeFirstValue
	* @returns {void}
	*/
	includeFirstValue(): void;

	/** Switching the redraw option for the gauge
	* @returns {void}
	*/
	redraw(): void;

	/** To set BackNeedleLength
	* @returns {void}
	*/
	setBackNeedleLength(): void;

	/** To set CustomLabelAngle
	* @returns {void}
	*/
	setCustomLabelAngle(): void;

	/** To set CustomLabelValue
	* @returns {void}
	*/
	setCustomLabelValue(): void;

	/** To set LabelAngle
	* @returns {void}
	*/
	setLabelAngle(): void;

	/** To set LabelDistanceFromScale
	* @returns {void}
	*/
	setLabelDistanceFromScale(): void;

	/** To set LabelPlacement
	* @returns {void}
	*/
	setLabelPlacement(): void;

	/** To set LabelStyle
	* @returns {void}
	*/
	setLabelStyle(): void;

	/** To set MajorIntervalValue
	* @returns {void}
	*/
	setMajorIntervalValue(): void;

	/** To set MarkerDistanceFromScale
	* @returns {void}
	*/
	setMarkerDistanceFromScale(): void;

	/** To set MarkerStyle
	* @returns {void}
	*/
	setMarkerStyle(): void;

	/** To set MaximumValue
	* @returns {void}
	*/
	setMaximumValue(): void;

	/** To set MinimumValue
	* @returns {void}
	*/
	setMinimumValue(): void;

	/** To set MinorIntervalValue
	* @returns {void}
	*/
	setMinorIntervalValue(): void;

	/** To set NeedleStyle
	* @returns {void}
	*/
	setNeedleStyle(): void;

	/** To set PointerCapBorderWidth
	* @returns {void}
	*/
	setPointerCapBorderWidth(): void;

	/** To set PointerCapRadius
	* @returns {void}
	*/
	setPointerCapRadius(): void;

	/** To set PointerLength
	* @returns {void}
	*/
	setPointerLength(): void;

	/** To set PointerNeedleType
	* @returns {void}
	*/
	setPointerNeedleType(): void;

	/** To set PointerPlacement
	* @returns {void}
	*/
	setPointerPlacement(): void;

	/** To set PointerValue
	* @returns {void}
	*/
	setPointerValue(): void;

	/** To set PointerWidth
	* @returns {void}
	*/
	setPointerWidth(): void;

	/** To set RangeBorderWidth
	* @returns {void}
	*/
	setRangeBorderWidth(): void;

	/** To set RangeDistanceFromScale
	* @returns {void}
	*/
	setRangeDistanceFromScale(): void;

	/** To set RangeEndValue
	* @returns {void}
	*/
	setRangeEndValue(): void;

	/** To set RangePosition
	* @returns {void}
	*/
	setRangePosition(): void;

	/** To set RangeSize
	* @returns {void}
	*/
	setRangeSize(): void;

	/** To set RangeStartValue
	* @returns {void}
	*/
	setRangeStartValue(): void;

	/** To set ScaleBarSize
	* @returns {void}
	*/
	setScaleBarSize(): void;

	/** To set ScaleBorderWidth
	* @returns {void}
	*/
	setScaleBorderWidth(): void;

	/** To set ScaleDirection
	* @returns {void}
	*/
	setScaleDirection(): void;

	/** To set ScaleRadius
	* @returns {void}
	*/
	setScaleRadius(): void;

	/** To set StartAngle
	* @returns {void}
	*/
	setStartAngle(): void;

	/** To set SubGaugeLocation
	* @returns {void}
	*/
	setSubGaugeLocation(): void;

	/** To set SweepAngle
	* @returns {void}
	*/
	setSweepAngle(): void;

	/** To set TickAngle
	* @returns {void}
	*/
	setTickAngle(): void;

	/** To set TickDistanceFromScale
	* @returns {void}
	*/
	setTickDistanceFromScale(): void;

	/** To set TickHeight
	* @returns {void}
	*/
	setTickHeight(): void;

	/** To set TickPlacement
	* @returns {void}
	*/
	setTickPlacement(): void;

	/** To set TickStyle
	* @returns {void}
	*/
	setTickStyle(): void;

	/** To set TickWidth
	* @returns {void}
	*/
	setTickWidth(): void;
}
export module CircularGauge{

export interface Model {

	/**Specifies animationSpeed of circular gauge
	* @Default {500}
	*/
	animationSpeed?: number;

	/**Specifies the background color of circular gauge.
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specify distanceFromCorner value of circular gauge
	* @Default {center}
	*/
	distanceFromCorner?: number;

	/**Specify animate value of circular gauge
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Specify enableResize value of circular gauge
	* @Default {false}
	*/
	enableResize?: boolean;

	/**Specify the frame of circular gauge
	* @Default {Object}
	*/
	frame?: Frame;

	/**Specify gaugePosition value of circular gauge See GaugePosition
	* @Default {center}
	*/
	gaugePosition?: ej.datavisualization.CircularGauge.gaugePosition|string;

	/**Specifies the height of circular gauge.
	* @Default {360}
	*/
	height?: number;

	/**Specifies the interiorGradient of circular gauge.
	* @Default {null}
	*/
	interiorGradient?: any;

	/**Specify isRadialGradient value of circular gauge
	* @Default {false}
	*/
	isRadialGradient?: boolean;

	/**Specifies the maximum value of circular gauge.
	* @Default {100}
	*/
	maximum?: number;

	/**Specifies the minimum value of circular gauge.
	* @Default {0}
	*/
	minimum?: number;

	/**Specify outerCustomLabelPosition value of circular gauge See OuterCustomLabelPosition
	* @Default {bottom}
	*/
	outerCustomLabelPosition?: ej.datavisualization.CircularGauge.CustomLabelPositionType|string;

	/**Specifies the radius of circular gauge.
	* @Default {180}
	*/
	radius?: number;

	/**Specify readonly value of circular gauge
	* @Default {true}
	*/
	readOnly?: boolean;

	/**Specify the pointers, ticks, labels, indicators, ranges of circular gauge
	* @Default {null}
	*/
	scales?: Scales;

	/**Specify the theme of circular gauge.
	* @Default {flatlight}
	*/
	theme?: string;

	/**Specify tooltip option of circular gauge
	* @Default {object}
	*/
	tooltip?: Tooltip;

	/**Specifies the value of circular gauge.
	* @Default {0}
	*/
	value?: number;

	/**Specifies the width of circular gauge.
	* @Default {360}
	*/
	width?: number;

	/**Triggers while the custom labels are being drawn on the gauge.*/
	drawCustomLabel? (e: DrawCustomLabelEventArgs): void;

	/**Triggers while the indicators are being started to drawn on the gauge.*/
	drawIndicators? (e: DrawIndicatorsEventArgs): void;

	/**Triggers while the labels are being drawn on the gauge.*/
	drawLabels? (e: DrawLabelsEventArgs): void;

	/**Triggers while the pointer cap is being drawn on the gauge.*/
	drawPointerCap? (e: DrawPointerCapEventArgs): void;

	/**Triggers while the pointers are being drawn on the gauge.*/
	drawPointers? (e: DrawPointersEventArgs): void;

	/**Triggers when the ranges begin to be getting drawn on the gauge.*/
	drawRange? (e: DrawRangeEventArgs): void;

	/**Triggers while the ticks are being drawn on the gauge.*/
	drawTicks? (e: DrawTicksEventArgs): void;

	/**Triggers while the gauge start to Load.*/
	load? (e: LoadEventArgs): void;

	/**Triggers when the left mouse button is clicked.*/
	mouseClick? (e: MouseClickEventArgs): void;

	/**Triggers when clicking and dragging the mouse pointer over the gauge pointer.*/
	mouseClickMove? (e: MouseClickMoveEventArgs): void;

	/**Triggers when the mouse click is released.*/
	mouseClickUp? (e: MouseClickUpEventArgs): void;

	/**Triggers when the rendering of the gauge is completed.*/
	renderComplete? (e: RenderCompleteEventArgs): void;
}

export interface DrawCustomLabelEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the custom label
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the custom label belongs.
	*/
	scaleIndex?: number;

	/**returns the custom label style
	*/
	style?: string;

	/**returns the current custom label element.
	*/
	customLabelElement?: any;

	/**returns the index of the custom label.
	*/
	customLabelIndex?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawIndicatorsEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the indicator
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the indicator belongs.
	*/
	scaleIndex?: number;

	/**returns the indicator style
	*/
	style?: string;

	/**returns the current indicator element.
	*/
	indicatorElement?: any;

	/**returns the index of the indicator.
	*/
	indicatorIndex?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawLabelsEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the labels
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the label belongs.
	*/
	scaleIndex?: number;

	/**returns the label style
	*/
	style?: string;

	/**returns the angle of the labels.
	*/
	angle?: number;

	/**returns the current label element.
	*/
	element?: any;

	/**returns the index of the label.
	*/
	index?: number;

	/**returns the value of the label.
	*/
	pointerValue?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawPointerCapEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the startX and startY of the pointer cap.
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the pointer cap style
	*/
	style?: string;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawPointersEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the pointer
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the angle of the pointer.
	*/
	angle?: number;

	/**returns the current pointer element.
	*/
	element?: any;

	/**returns the index of the pointer.
	*/
	index?: number;

	/**returns the value of the pointer.
	*/
	value?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawRangeEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the range
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the range belongs.
	*/
	scaleIndex?: number;

	/**returns the range style
	*/
	style?: string;

	/**returns the current range element.
	*/
	rangeElement?: any;

	/**returns the index of the range.
	*/
	rangeIndex?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface DrawTicksEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the startX and startY of the ticks
	*/
	position?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the tick belongs.
	*/
	scaleIndex?: number;

	/**returns the ticks style
	*/
	style?: string;

	/**returns the angle of the tick.
	*/
	angle?: number;

	/**returns the current tick element.
	*/
	element?: any;

	/**returns the index of the tick.
	*/
	index?: number;

	/**returns the label value of the tick.
	*/
	pointerValue?: number;

	/**returns the name of the event
	*/
	type?: string;
}

export interface LoadEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	Model?: any;

	/**returns the entire scale element.
	*/
	scaleElement?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface MouseClickEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	index?: number;

	/**returns the pointer element.
	*/
	element?: any;

	/**returns the value of the pointer.
	*/
	value?: number;

	/**returns the angle of the pointer.
	*/
	angle?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface MouseClickMoveEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	index?: number;

	/**returns the pointer element.
	*/
	element?: any;

	/**returns the value of the pointer.
	*/
	value?: number;

	/**returns the angle of the pointer.
	*/
	angle?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface MouseClickUpEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: any;

	/**returns the scale element.
	*/
	scaleElement?: any;

	/**returns the scaleIndex to which the pointer belongs.
	*/
	scaleIndex?: number;

	/**returns the context element
	*/
	context?: any;

	/**returns the pointer Index
	*/
	index?: number;

	/**returns the pointer element.
	*/
	element?: any;

	/**returns the value of the pointer.
	*/
	value?: number;

	/**returns the angle of the pointer.
	*/
	angle?: number;

	/**returns the pointer style
	*/
	style?: string;

	/**returns the startX and startY of the pointer.
	*/
	position?: any;
}

export interface RenderCompleteEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the context element
	*/
	context?: any;

	/**returns the entire scale element.
	*/
	scaleElement?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface Frame {

	/**Specify the url of the frame background image for circular gauge
	* @Default {null}
	*/
	backgroundImageUrl?: string;

	/**Specifies the frameType of circular gauge. See Frame
	* @Default {FullCircle}
	*/
	frameType?: ej.datavisualization.CircularGauge.FrameType|string;

	/**Specifies the end angle for the half circular frame.
	* @Default {360}
	*/
	halfCircleFrameEndAngle?: number;

	/**Specifies the start angle for the half circular frame.
	* @Default {180}
	*/
	halfCircleFrameStartAngle?: number;
}

export interface ScalesBorder {

	/**Specify border color for scales of circular gauge
	* @Default {null}
	*/
	color?: string;

	/**Specify border width of circular gauge
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesIndicatorsPosition {

	/**Specify x-axis of position of circular gauge
	* @Default {0}
	*/
	x?: number;

	/**Specify y-axis of position of circular gauge
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesIndicatorsStateRanges {

	/**Specify backgroundColor for indicator of circular gauge
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specify borderColor for indicator of circular gauge
	* @Default {null}
	*/
	borderColor?: string;

	/**Specify end value for each specified state of circular gauge
	* @Default {0}
	*/
	endValue?: number;

	/**Specify value of the font as the indicator when the indicator style is set with the value &quot;text&quot; of circular gauge
	* @Default {null}
	*/
	font?: any;

	/**Specify start value for each specified state of circular gauge
	* @Default {0}
	*/
	startValue?: number;

	/**Specify value of the text as the indicator when the indicator style is set with the value &quot;text&quot; of circular gauge
	*/
	text?: string;

	/**Specify value of the textColor as the indicator when the indicator style is set with the value &quot;text&quot; of circular gauge
	* @Default {null}
	*/
	textColor?: string;
}

export interface ScalesIndicators {

	/**Specify indicator height of circular gauge
	* @Default {15}
	*/
	height?: number;

	/**Specify imageUrl of circular gauge
	* @Default {null}
	*/
	imageUrl?: string;

	/**Specify position of circular gauge
	* @Default {Object}
	*/
	position?: ScalesIndicatorsPosition;

	/**Specify the various states of circular gauge
	* @Default {Array}
	*/
	stateRanges?: Array<ScalesIndicatorsStateRanges>;

	/**Specify indicator style of circular gauge. See IndicatorType
	* @Default {Circle}
	*/
	type?: ej.datavisualization.CircularGauge.IndicatorTypes|string;

	/**Specify indicator width of circular gauge
	* @Default {15}
	*/
	width?: number;
}

export interface ScalesLabelsFont {

	/**Specify font fontFamily for labels of circular gauge
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Specify font Style for labels of circular gauge
	* @Default {Bold}
	*/
	fontStyle?: string;

	/**Specify font size for labels of circular gauge
	* @Default {11px}
	*/
	size?: string;
}

export interface ScalesLabels {

	/**Specify the angle for the labels of circular gauge
	* @Default {0}
	*/
	angle?: number;

	/**Specify labels autoAngle value of circular gauge
	* @Default {false}
	*/
	autoAngle?: boolean;

	/**Specify label color of circular gauge
	* @Default {null}
	*/
	color?: string;

	/**Specify distanceFromScale value for labels of circular gauge
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specify font for labels of circular gauge
	* @Default {Object}
	*/
	font?: ScalesLabelsFont;

	/**Specify includeFirstValue of circular gauge
	* @Default {true}
	*/
	includeFirstValue?: boolean;

	/**Specify opacity value for labels of circular gauge
	* @Default {null}
	*/
	opacity?: number;

	/**Specify label placement of circular gauge. See LabelPlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.CircularGauge.Placement|string;

	/**Specify label Style of circular gauge. See LabelType
	* @Default {Major}
	*/
	type?: ej.datavisualization.CircularGauge.LabelType|string;

	/**Specify unitText of circular gauge
	*/
	unitText?: string;

	/**Specify unitTextPosition of circular gauge. See UnitTextPosition
	* @Default {Back}
	*/
	unitTextPosition?: ej.datavisualization.CircularGauge.UnitTextPlacement|string;
}

export interface ScalesPointerCap {

	/**Specify cap backgroundColor of circular gauge
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specify cap borderColor of circular gauge
	* @Default {null}
	*/
	borderColor?: string;

	/**Specify pointerCap borderWidth value of circular gauge
	* @Default {3}
	*/
	borderWidth?: number;

	/**Specify cap interiorGradient value of circular gauge
	* @Default {null}
	*/
	interiorGradient?: any;

	/**Specify pointerCap Radius value of circular gauge
	* @Default {7}
	*/
	radius?: number;
}

export interface ScalesPointersBorder {

	/**Specify border color for pointer of circular gauge
	* @Default {null}
	*/
	color?: string;

	/**Specify border width for pointers of circular gauge
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesPointersPointerValueTextFont {

	/**Specify pointer value text font family of circular gauge.
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Specify pointer value text font style of circular gauge.
	* @Default {Bold}
	*/
	fontStyle?: string;

	/**Specify pointer value text size of circular gauge.
	* @Default {11px}
	*/
	size?: string;
}

export interface ScalesPointersPointerValueText {

	/**Specify pointer text angle of circular gauge.
	* @Default {0}
	*/
	angle?: number;

	/**Specify pointer text auto angle of circular gauge.
	* @Default {false}
	*/
	autoAngle?: boolean;

	/**Specify pointer value text color of circular gauge.
	* @Default {#8c8c8c}
	*/
	color?: string;

	/**Specify pointer value text distance from pointer of circular gauge.
	* @Default {20}
	*/
	distance?: number;

	/**Specify pointer value text font option of circular gauge.
	* @Default {object}
	*/
	font?: ScalesPointersPointerValueTextFont;

	/**Specify pointer value text opacity of circular gauge.
	* @Default {1}
	*/
	opacity?: number;

	/**enable pointer value text visibility of circular gauge.
	* @Default {false}
	*/
	showValue?: boolean;
}

export interface ScalesPointers {

	/**Specify backgroundColor for the pointer of circular gauge
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specify backNeedleLength of circular gauge
	* @Default {10}
	*/
	backNeedleLength?: number;

	/**Specify the border for pointers of circular gauge
	* @Default {Object}
	*/
	border?: ScalesPointersBorder;

	/**Specify distanceFromScale value for pointers of circular gauge
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specify pointer gradients of circular gauge
	* @Default {null}
	*/
	gradients?: any;

	/**Specify pointer image of circular gauge.It is applicable for both marker as well as needle type pointers.
	* @Default {NULL}
	*/
	imageUrl?: string;

	/**Specify pointer length of circular gauge
	* @Default {150}
	*/
	length?: number;

	/**Specify marker Style value of circular gauge. See MarkerType
	* @Default {Rectangle}
	*/
	markerType?: ej.datavisualization.CircularGauge.MarkerType|string;

	/**Specify needle Style value of circular gauge. See NeedleType
	* @Default {Triangle}
	*/
	needleType?: ej.datavisualization.CircularGauge.NeedleType|string;

	/**Specify opacity value for pointer of circular gauge
	* @Default {1}
	*/
	opacity?: number;

	/**Specify pointer Placement value of circular gauge. See PointerPlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.CircularGauge.Placement|string;

	/**Specify pointer value text of circular gauge.
	* @Default {Object}
	*/
	pointerValueText?: ScalesPointersPointerValueText;

	/**Specify showBackNeedle value of circular gauge
	* @Default {false}
	*/
	showBackNeedle?: boolean;

	/**Specify pointer type value of circular gauge. See PointerType
	* @Default {Needle}
	*/
	type?: ej.datavisualization.CircularGauge.PointerType|string;

	/**Specify value of the pointer of circular gauge
	* @Default {null}
	*/
	value?: number;

	/**Specify pointer width of circular gauge
	* @Default {7}
	*/
	width?: number;
}

export interface ScalesRangesBorder {

	/**Specify border color for ranges of circular gauge
	* @Default {#32b3c6}
	*/
	color?: string;

	/**Specify border width for ranges of circular gauge
	* @Default {1.5}
	*/
	width?: number;
}

export interface ScalesRanges {

	/**Specify backgroundColor for the ranges of circular gauge
	* @Default {#32b3c6}
	*/
	backgroundColor?: string;

	/**Specify border for ranges of circular gauge
	* @Default {Object}
	*/
	border?: ScalesRangesBorder;

	/**Specify distanceFromScale value for ranges of circular gauge
	* @Default {25}
	*/
	distanceFromScale?: number;

	/**Specify endValue for ranges of circular gauge
	* @Default {null}
	*/
	endValue?: number;

	/**Specify endWidth for ranges of circular gauge
	* @Default {10}
	*/
	endWidth?: number;

	/**Specify range gradients of circular gauge
	* @Default {null}
	*/
	gradients?: any;

	/**Specify opacity value for ranges of circular gauge
	* @Default {null}
	*/
	opacity?: number;

	/**Specify placement of circular gauge. See RangePlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.CircularGauge.Placement|string;

	/**Specify size of the range value of circular gauge
	* @Default {5}
	*/
	size?: number;

	/**Specify startValue for ranges of circular gauge
	* @Default {null}
	*/
	startValue?: number;

	/**Specify startWidth of circular gauge
	* @Default {[Array.number] scale.ranges.startWidth = 10}
	*/
	startWidth?: number;
}

export interface ScalesSubGaugesPosition {

	/**Specify x-axis position for sub-gauge of circular gauge
	* @Default {0}
	*/
	x?: number;

	/**Specify y-axis position for sub-gauge of circular gauge
	* @Default {0}
	*/
	y?: number;
}

export interface ScalesSubGauges {

	/**Specify subGauge Height of circular gauge
	* @Default {150}
	*/
	height?: number;

	/**Specify position for sub-gauge of circular gauge
	* @Default {Object}
	*/
	position?: ScalesSubGaugesPosition;

	/**Specify subGauge Width of circular gauge
	* @Default {150}
	*/
	width?: number;
}

export interface ScalesTicks {

	/**Specify the angle for the ticks of circular gauge
	* @Default {0}
	*/
	angle?: number;

	/**Specify tick color of circular gauge
	* @Default {null}
	*/
	color?: string;

	/**Specify distanceFromScale value for ticks of circular gauge
	* @Default {0}
	*/
	distanceFromScale?: number;

	/**Specify tick height of circular gauge
	* @Default {16}
	*/
	height?: number;

	/**Specify tick placement of circular gauge. See TickPlacement
	* @Default {Near}
	*/
	placement?: ej.datavisualization.CircularGauge.Placement|string;

	/**Specify tick Style of circular gauge. See TickType
	* @Default {Major}
	*/
	type?: ej.datavisualization.CircularGauge.LabelType|string;

	/**Specify tick width of circular gauge
	* @Default {3}
	*/
	width?: number;
}

export interface Scales {

	/**Specify backgroundColor for the scale of circular gauge
	* @Default {null}
	*/
	backgroundColor?: string;

	/**Specify border for scales of circular gauge
	* @Default {Object}
	*/
	border?: ScalesBorder;

	/**Specify scale direction of circular gauge. See Directions
	* @Default {Clockwise}
	*/
	direction?: ej.datavisualization.CircularGauge.Direction|string;

	/**Specify representing state of circular gauge
	* @Default {Array}
	*/
	indicators?: Array<ScalesIndicators>;

	/**Specify the text values displayed in a meaningful manner alongside the ticks of circular gauge
	* @Default {Array}
	*/
	labels?: Array<ScalesLabels>;

	/**Specify majorIntervalValue of circular gauge
	* @Default {10}
	*/
	majorIntervalValue?: number;

	/**Specify maximum scale value of circular gauge
	* @Default {null}
	*/
	maximum?: number;

	/**Specify minimum scale value of circular gauge
	* @Default {null}
	*/
	minimum?: number;

	/**Specify minorIntervalValue of circular gauge
	* @Default {2}
	*/
	minorIntervalValue?: number;

	/**Specify opacity value of circular gauge
	* @Default {1}
	*/
	opacity?: number;

	/**Specify pointer cap of circular gauge
	* @Default {Object}
	*/
	pointerCap?: ScalesPointerCap;

	/**Specify pointers value of circular gauge
	* @Default {Array}
	*/
	pointers?: Array<ScalesPointers>;

	/**Specify scale radius of circular gauge
	* @Default {170}
	*/
	radius?: number;

	/**Specify ranges value of circular gauge
	* @Default {Array}
	*/
	ranges?: Array<ScalesRanges>;

	/**Specify shadowOffset value of circular gauge
	* @Default {0}
	*/
	shadowOffset?: number;

	/**Specify showIndicators of circular gauge
	* @Default {false}
	*/
	showIndicators?: boolean;

	/**Specify showLabels of circular gauge
	* @Default {true}
	*/
	showLabels?: boolean;

	/**Specify showPointers of circular gauge
	* @Default {true}
	*/
	showPointers?: boolean;

	/**Specify showRanges of circular gauge
	* @Default {false}
	*/
	showRanges?: boolean;

	/**Specify showScaleBar of circular gauge
	* @Default {false}
	*/
	showScaleBar?: boolean;

	/**Specify showTicks of circular gauge
	* @Default {true}
	*/
	showTicks?: boolean;

	/**Specify scaleBar size of circular gauge
	* @Default {6}
	*/
	size?: number;

	/**Specify startAngle of circular gauge
	* @Default {115}
	*/
	startAngle?: number;

	/**Specify subGauge of circular gauge
	* @Default {Array}
	*/
	subGauges?: Array<ScalesSubGauges>;

	/**Specify sweepAngle of circular gauge
	* @Default {310}
	*/
	sweepAngle?: number;

	/**Specify ticks of circular gauge
	* @Default {Array}
	*/
	ticks?: Array<ScalesTicks>;
}

export interface Tooltip {

	/**enable showCustomLabelTooltip of circular gauge
	* @Default {false}
	*/
	showCustomLabelTooltip?: boolean;

	/**enable showLabelTooltip of circular gauge
	* @Default {false}
	*/
	showLabelTooltip?: boolean;

	/**Specify tooltip templateID of circular gauge
	* @Default {false}
	*/
	templateID?: string;
}
}
module CircularGauge
{
enum FrameType
{
//string
FullCircle,
//string
HalfCircle,
}
}
module CircularGauge
{
enum gaugePosition
{
//string
TopLeft,
//string
TopRight,
//string
TopCenter,
//string
MiddleLeft,
//string
MiddleRight,
//string
Center,
//string
BottomLeft,
//string
BottomRight,
//string
BottomCenter,
}
}
module CircularGauge
{
enum CustomLabelPositionType
{
//string
Top,
//string
Bottom,
//string
Right,
//string
Left,
}
}
module CircularGauge
{
enum Direction
{
//string
Clockwise,
//string
CounterClockwise,
}
}
module CircularGauge
{
enum IndicatorTypes
{
//string
Rectangle,
//string
Circle,
//string
Text,
//string
RoundedRectangle,
//string
Image,
}
}
module CircularGauge
{
enum Placement
{
//string
Near,
//string
Far,
}
}
module CircularGauge
{
enum LabelType
{
//string
Major,
//string
Minor,
}
}
module CircularGauge
{
enum UnitTextPlacement
{
//string
Back,
//string
Front,
}
}
module CircularGauge
{
enum MarkerType
{
//string
Rectangle,
//string
Circle,
//string
Triangle,
//string
Ellipse,
//string
Diamond,
//string
Pentagon,
//string
Slider,
//string
Pointer,
//string
Wedge,
//string
Trapezoid,
//string
RoundedRectangle,
//string
Image,
}
}
module CircularGauge
{
enum NeedleType
{
//string
Triangle,
//string
Rectangle,
//string
Arrow,
//string
Image,
//string
Trapezoid,
}
}
module CircularGauge
{
enum PointerType
{
//string
Needle,
//string
Marker,
}
}

class DigitalGauge extends ej.Widget {
	static fn: DigitalGauge;
	constructor(element: JQuery, options?: DigitalGauge.Model);
	constructor(element: Element, options?: DigitalGauge.Model);
	model:DigitalGauge.Model;
	defaults:DigitalGauge.Model;

	/** To destroy the digital gauge
	* @returns {void}
	*/
	destroy(): void;

	/** To export Digital Gauge as Image
	* @param {string} fileName for the Image
	* @param {string} fileType for the Image
	* @returns {void}
	*/
	exportImage(fileName: string, fileType: string): void;

	/** Gets the location of an item that is displayed on the gauge.
	* @param {number} Position value of an item that is displayed on the gauge.
	* @returns {void}
	*/
	getPosition(itemIndex: number): void;

	/** ClientSideMethod getValue Gets the value of an item that is displayed on the gauge
	* @param {number} Index value of an item that displayed on the gauge
	* @returns {void}
	*/
	getValue(itemIndex: number): void;

	/** Refresh the digital gauge widget
	* @returns {void}
	*/
	refresh(): void;

	/** ClientSideMethod Set Position Sets the location of an item to be displayed in the gauge
	* @param {number} Index value of the digital gauge item
	* @param {any} Location value of the digital gauge
	* @returns {void}
	*/
	setPosition(itemIndex: number, value: any): void;

	/** ClientSideMethod SetValue Sets the value of an item to be displayed in the gauge.
	* @param {number} Index value of the digital gauge item
	* @param {string} Text value to be displayed in the gaugeS
	* @returns {void}
	*/
	setValue(itemIndex: number, value: string): void;
}
export module DigitalGauge{

export interface Model {

	/**Specifies the resize option of the DigitalGauge.
	* @Default {false}
	*/
	enableResize?: boolean;

	/**Specifies the frame of the Digital gauge.
	* @Default {{backgroundImageUrl: null, innerWidth: 6, outerWidth: 10}}
	*/
	frame?: Frame;

	/**Specifies the height of the DigitalGauge.
	* @Default {150}
	*/
	height?: number;

	/**Specifies the items for the DigitalGauge.
	* @Default {null}
	*/
	items?: Items;

	/**Specifies the matrixSegmentData for the DigitalGauge.
	*/
	matrixSegmentData?: any;

	/**Specifies the segmentData for the DigitalGauge.
	*/
	segmentData?: any;

	/**Specifies the themes for the Digital gauge. See Themes
	* @Default {flatlight}
	*/
	themes?: string;

	/**Specifies the value to the DigitalGauge.
	* @Default {text}
	*/
	value?: string;

	/**Specifies the width for the Digital gauge.
	* @Default {400}
	*/
	width?: number;

	/**Triggers when the gauge is initialized.*/
	init? (e: InitEventArgs): void;

	/**Triggers when the gauge item rendering.*/
	itemRendering? (e: ItemRenderingEventArgs): void;

	/**Triggers when the gauge is start to load.*/
	load? (e: LoadEventArgs): void;

	/**Triggers when the gauge render is completed.*/
	renderComplete? (e: RenderCompleteEventArgs): void;
}

export interface InitEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the all the options of the items.
	*/
	items?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface ItemRenderingEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the all the options of the items.
	*/
	items?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface LoadEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the all the options of the items.
	*/
	items?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface RenderCompleteEventArgs {

	/**returns the object of the gauge.
	*/
	object?: any;

	/**returns the cancel option value
	*/
	cancel?: boolean;

	/**returns the all the options of the items.
	*/
	items?: any;

	/**returns the context element
	*/
	context?: any;

	/**returns the gauge model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface Frame {

	/**Specifies the url of an image to be displayed as background of the Digital gauge.
	* @Default {null}
	*/
	backgroundImageUrl?: string;

	/**Specifies the inner width for the frame, when the background image has been set for the Digital gauge..
	* @Default {6}
	*/
	innerWidth?: number;

	/**Specifies the outer width of the frame, when the background image has been set for the Digital gauge.
	* @Default {10}
	*/
	outerWidth?: number;
}

export interface ItemsCharacterSettings {

	/**Specifies the CharacterCount value for the DigitalGauge.
	* @Default {4}
	*/
	count?: number;

	/**Specifies the opacity value for the DigitalGauge.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the value for spacing between the characters
	* @Default {2}
	*/
	spacing?: number;

	/**Specifies the character type for the text to be displayed.
	* @Default {ej.datavisualization.DigitalGauge.CharacterType.EightCrossEightDotMatrix}
	*/
	type?: ej.datavisualization.DigitalGauge.CharacterType|string;
}

export interface ItemsFont {

	/**Set the font family value
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Set the font style for the font
	* @Default {italic}
	*/
	fontStyle?: ej.datavisualization.DigitalGauge.FontStyle|string;

	/**Set the font size value
	* @Default {11px}
	*/
	size?: string;
}

export interface ItemsPosition {

	/**Set the horizontal location for the text, where it needs to be placed within the gauge.
	* @Default {0}
	*/
	x?: number;

	/**Set the vertical location for the text, where it needs to be placed within the gauge.
	* @Default {0}
	*/
	y?: number;
}

export interface ItemsSegmentSettings {

	/**Set the color for the text segments.
	* @Default {null}
	*/
	color?: string;

	/**Set the gradient for the text segments.
	* @Default {null}
	*/
	gradient?: any;

	/**Set the length for the text segments.
	* @Default {2}
	*/
	length?: number;

	/**Set the opacity for the text segments.
	* @Default {0}
	*/
	opacity?: number;

	/**Set the spacing for the text segments.
	* @Default {1}
	*/
	spacing?: number;

	/**Set the width for the text segments.
	* @Default {1}
	*/
	width?: number;
}

export interface Items {

	/**Specifies the Character settings for the DigitalGauge.
	* @Default {null}
	*/
	characterSettings?: ItemsCharacterSettings;

	/**Enable/Disable the custom font to be applied to the text in the gauge.
	* @Default {false}
	*/
	enableCustomFont?: boolean;

	/**Set the specific font for the text, when the enableCustomFont is set to true
	* @Default {null}
	*/
	font?: ItemsFont;

	/**Set the location for the text, where it needs to be placed within the gauge.
	* @Default {null}
	*/
	position?: ItemsPosition;

	/**Set the segment settings for the digital gauge.
	* @Default {null}
	*/
	segmentSettings?: ItemsSegmentSettings;

	/**Set the value for enabling/disabling the blurring effect for the shadows of the text
	* @Default {0}
	*/
	shadowBlur?: number;

	/**Specifies the color of the text shadow.
	* @Default {null}
	*/
	shadowColor?: string;

	/**Set the x offset value for the shadow of the text, indicating the location where it needs to be displayed.
	* @Default {1}
	*/
	shadowOffsetX?: number;

	/**Set the y offset value for the shadow of the text, indicating the location where it needs to be displayed.
	* @Default {1}
	*/
	shadowOffsetY?: number;

	/**Set the alignment of the text that is displayed within the gauge.See TextAlign
	* @Default {left}
	*/
	textAlign?: string;

	/**Specifies the color of the text.
	* @Default {null}
	*/
	textColor?: string;

	/**Specifies the text value.
	* @Default {null}
	*/
	value?: string;
}
}
module DigitalGauge
{
enum CharacterType
{
//string
SevenSegment,
//string
FourteenSegment,
//string
SixteenSegment,
//string
EightCrossEightDotMatrix,
//string
EightCrossEightSquareMatrix,
}
}
module DigitalGauge
{
enum FontStyle
{
//string
Normal,
//string
Bold,
//string
Italic,
//string
Underline,
//string
Strikeout,
}
}

class Chart extends ej.Widget {
	static fn: Chart;
	constructor(element: JQuery, options?: Chart.Model);
	constructor(element: Element, options?: Chart.Model);
	model:Chart.Model;
	defaults:Chart.Model;

	/** Animates the series and/or indicators in Chart. When parameter is not passed to this method, then all the series and indicators present in Chart are animated.
	* @param {Array<any>} Series and indicator objects passed in the array collection are animated.Example
	* @param {any} Series or indicator object passed to this method are animated.Example,
	* @returns {void}
	*/
	animate(options: Array<any>, option: any): void;

	/** Exports chart as an image or to an excel file. Chart can be exported as an image only when exportCanvasRendering option is set to true.
	* @param {string} Type of the export operation to be performed. Following are the two export types that are supported now,1. 'image'2. 'excel'Example
	* @param {string} URL of the service, where the chart will be exported to excel.Example,
	* @param {boolean} When this parameter is true, all the chart objects initialized to the same document are exported to a single excel file. This is an optional parameter. By default, it is false.Example,
	* @returns {void}
	*/
	export(type: string, url: string, exportMultipleChart: boolean): void;

	/** Redraws the entire chart. You can call this method whenever you update, add or remove points from the data source or whenever you want to refresh the UI.
	* @returns {void}
	*/
	redraw(): void;
}
export module Chart{

export interface Model {

	/**Options for adding and customizing annotations in Chart.
	*/
	annotations?: Array<Annotations>;

	/**Url of the image to be used as chart background.
	* @Default {null}
	*/
	backGroundImageUrl?: string;

	/**Options for customizing the color, opacity and width of the chart border.
	*/
	border?: Border;

	/**Controls whether Chart has to be responsive or not.
	* @Default {false}
	*/
	canResize?: boolean;

	/**Options for configuring the border and background of the plot area.
	*/
	chartArea?: ChartArea;

	/**Options to split Chart into multiple plotting areas vertically. Each object in the collection represents a plotting area in Chart.
	*/
	columnDefinitions?: Array<ColumnDefinitions>;

	/**Options for configuring the properties of all the series. You can also override the options for specific series by using series collection.
	*/
	commonSeriesOptions?: CommonSeriesOptions;

	/**Options for displaying and customizing the crosshair.
	*/
	crosshair?: Crosshair;

	/**Depth of the 3D Chart from front view of series to background wall. This property is applicable only for 3D view.
	* @Default {100}
	*/
	depth?: number;

	/**Controls whether 3D view has to be enabled or not. 3D view is supported only for column, bar. Stacking column, stacking bar, pie and doughnut series types.
	* @Default {false}
	*/
	enable3D?: boolean;

	/**Controls whether Chart has to be rendered as Canvas or SVG. Canvas rendering supports all functionalities in SVG rendering except 3D Charts.
	* @Default {false}
	*/
	enableCanvasRendering?: boolean;

	/**Controls whether 3D view has to be rotated on dragging. This property is applicable only for 3D view.
	* @Default {false}
	*/
	enableRotation?: boolean;

	/**Options to customize the technical indicators.
	*/
	indicators?: Array<Indicators>;

	/**Options to customize the legend items and legend title.
	*/
	legend?: Legend;

	/**Name of the culture based on which chart should be localized. Number and date time values are localized with respect to the culture name.String type properties like title text are not localized automatically. Provide localized text as value to string type properties.
	* @Default {en-US}
	*/
	locale?: string;

	/**Palette is used to store the series fill color in array and apply the color to series collection in the order of series index.
	* @Default {null}
	*/
	palette?: Array<any>;

	/**Options to customize the left, right, top and bottom margins of chart area.
	*/
	Margin?: any;

	/**Perspective angle of the 3D view. Chart appears closer when perspective angle is decreased, and distant when perspective angle is increased.This property is applicable only when 3D view is enabled
	* @Default {90}
	*/
	perspectiveAngle?: number;

	/**This is a horizontal axis that contains options to configure axis and it is the primary x axis for all the series in series array. To override x axis for particular series, create an axis object by providing unique name by using name property and add it to axes array. Then, assign the name to the seriesâ€™s xAxisName property to link both axis and series.
	*/
	primaryXAxis?: PrimaryXAxis;

	/**This is a vertical axis that contains options to configure axis. This is the primary y axis for all the series in series array. To override y axis for particular series, create an axis object by providing unique name by using name property and add it to axes array. Then, assign the name to the seriesâ€™s yAxisName property to link both axis and series.
	*/
	primaryYAxis?: PrimaryYAxis;

	/**Rotation angle of the 3D view. This property is applicable only when 3D view is enabled.
	* @Default {0}
	*/
	rotation?: number;

	/**Options to split Chart into multiple plotting areas horizontally. Each object in the collection represents a plotting area in Chart.
	*/
	rowDefinitions?: Array<RowDefinitions>;

	/**Specifies the properties used for customizing the series.
	*/
	series?: Array<Series>;

	/**Controls whether data points has to be displayed side by side or along the depth of the axis.
	* @Default {false}
	*/
	sideBySideSeriesPlacement?: boolean;

	/**Options to customize the Chart size.
	*/
	size?: Size;

	/**Specifies the theme for Chart.
	* @Default {Flatlight. See Theme}
	*/
	theme?: ej.datavisualization.Chart.Theme|string;

	/**Slope angle of 3D Chart. This property is applicable only when 3D view is enabled.
	* @Default {0}
	*/
	tilt?: number;

	/**Options for customizing the title and subtitle of Chart.
	*/
	title?: Title;

	/**Width of the wall used in 3D Chart. Wall is present only in Cartesian type 3D series and not in 3D pie or Doughnut series. This property is applicable only when 3D view is enabled.
	* @Default {2}
	*/
	wallSize?: number;

	/**Options for enabling zooming feature of chart.
	*/
	zooming?: Zooming;

	/**Fires after the series animation is completed. This event will be triggered for each series when animation is enabled.*/
	animationComplete? (e: AnimationCompleteEventArgs): void;

	/**Fires before rendering the labels. This event is fired for each label in axis. You can use this event to add custom text to axis labels.*/
	axesLabelRendering? (e: AxesLabelRenderingEventArgs): void;

	/**Fires during the initialization of axis labels.*/
	axesLabelsInitialize? (e: AxesLabelsInitializeEventArgs): void;

	/**Fires during axes range calculation. This event is fired for each axis present in Chart. You can use this event to customize axis range as required.*/
	axesRangeCalculate? (e: AxesRangeCalculateEventArgs): void;

	/**Fires before rendering the axis title. This event is triggered for each axis with title. You can use this event to add custom text to axis title.*/
	axesTitleRendering? (e: AxesTitleRenderingEventArgs): void;

	/**Fires during the calculation of chart area bounds. You can use this event to customize the bounds of chart area.*/
	chartAreaBoundsCalculate? (e: ChartAreaBoundsCalculateEventArgs): void;

	/**Fires after chart is created.*/
	create? (e: CreateEventArgs): void;

	/**Fires when chart is destroyed completely.*/
	destroy? (e: DestroyEventArgs): void;

	/**Fires before rendering the data labels. This event is triggered for each data label in the series. You can use this event to add custom text in data labels.*/
	displayTextRendering? (e: DisplayTextRenderingEventArgs): void;

	/**Fires during the calculation of legend bounds. You can use this event to customize the bounds of legend.*/
	legendBoundsCalculate? (e: LegendBoundsCalculateEventArgs): void;

	/**Fires on clicking the legend item.*/
	legendItemClick? (e: LegendItemClickEventArgs): void;

	/**Fires when moving mouse over legend item. You can use this event for hit testing on legend items.*/
	legendItemMouseMove? (e: LegendItemMouseMoveEventArgs): void;

	/**Fires before rendering the legend item. This event is fired for each legend item in Chart. You can use this event to customize legend item shape or add custom text to legend item.*/
	legendItemRendering? (e: LegendItemRenderingEventArgs): void;

	/**Fires before loading the chart.*/
	load? (e: LoadEventArgs): void;

	/**Fires on clicking a point in chart. You can use this event to handle clicks made on points.*/
	pointRegionClick? (e: PointRegionClickEventArgs): void;

	/**Fires when mouse is moved over a point.*/
	pointRegionMouseMove? (e: PointRegionMouseMoveEventArgs): void;

	/**Fires before rendering chart.*/
	preRender? (e: PreRenderEventArgs): void;

	/**Fires after selecting a series. This event is triggered after selecting a series only if selection mode is series.*/
	seriesRegionClick? (e: SeriesRegionClickEventArgs): void;

	/**Fires before rendering a series. This event is fired for each series in Chart.*/
	seriesRendering? (e: SeriesRenderingEventArgs): void;

	/**Fires before rendering the marker symbols. This event is triggered for each marker in Chart.*/
	symbolRendering? (e: SymbolRenderingEventArgs): void;

	/**Fires before rendering the Chart title. You can use this event to add custom text in Chart title.*/
	titleRendering? (e: TitleRenderingEventArgs): void;

	/**Fires before rendering the tooltip. This event is fired when tooltip is enabled and mouse is hovered on a Chart point. You can use this event to customize tooltip before rendering.*/
	toolTipInitialize? (e: ToolTipInitializeEventArgs): void;

	/**Fires before rendering crosshair tooltip in axis. This event is fired for each axis with crosshair label enabled. You can use this event to customize crosshair label before rendering*/
	trackAxisToolTip? (e: TrackAxisToolTipEventArgs): void;

	/**Fires before rendering trackball tooltip. This event is fired for each series in Chart because trackball tooltip is displayed for all the series. You can use this event to customize the text displayed in trackball tooltip.*/
	trackToolTip? (e: TrackToolTipEventArgs): void;

	/**Fires, on clicking the axis label.*/
	axisLabelClick? (e: AxisLabelClickEventArgs): void;

	/**Fires on moving mouse over the axis label.*/
	axisLabelMouseMove? (e: AxisLabelMouseMoveEventArgs): void;

	/**Fires, on the clicking the chart.*/
	chartClick? (e: ChartClickEventArgs): void;

	/**Fires on moving mouse over the chart.*/
	chartMouseMove? (e: ChartMouseMoveEventArgs): void;

	/**Fires, on double clicking the chart.*/
	chartDoubleClick? (e: ChartDoubleClickEventArgs): void;

	/**Fires on clicking the annotation.*/
	annotationClick? (e: AnnotationClickEventArgs): void;

	/**Fires, after the chart is resized.*/
	afterResize? (e: AfterResizeEventArgs): void;

	/**Fires, when chart size is changing.*/
	beforeResize? (e: BeforeResizeEventArgs): void;

	/**Fires, when error bar is rendering.*/
	errorBarRendering? (e: ErrorBarRenderingEventArgs): void;
}

export interface AnimationCompleteEventArgs {

	/**Instance of the series that completed has animation.
	*/
	series?: any;

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface AxesLabelRenderingEventArgs {

	/**Instance of the corresponding axis.
	*/
	Axis?: any;

	/**Formatted text of the respective label. You can also add custom text to the label.
	*/
	LabelText?: string;

	/**Actual value of the label.
	*/
	LabelValue?: string;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface AxesLabelsInitializeEventArgs {

	/**Collection of axes in Chart
	*/
	dataAxes?: any;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface AxesRangeCalculateEventArgs {

	/**Difference between minimum and maximum value of axis range.
	*/
	delta?: number;

	/**Interval value of axis range. Grid lines, tick lines and axis labels are drawn based on this interval value.
	*/
	interval?: number;

	/**Maximum value of axis range.
	*/
	max?: number;

	/**Minimum value of axis range.
	*/
	min?: number;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface AxesTitleRenderingEventArgs {

	/**Instance of the axis whose title is being rendered
	*/
	axes?: any;

	/**X-coordinate of title location
	*/
	locationX?: number;

	/**Y-coordinate of title location
	*/
	locationY?: number;

	/**Axis title text. You can add custom text to the title.
	*/
	title?: string;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface ChartAreaBoundsCalculateEventArgs {

	/**Height of the chart area.
	*/
	areaBoundsHeight?: number;

	/**Width of the chart area.
	*/
	areaBoundsWidth?: number;

	/**X-coordinate of the chart area.
	*/
	areaBoundsX?: number;

	/**Y-coordinate of the chart area.
	*/
	areaBoundsY?: number;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface CreateEventArgs {

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface DestroyEventArgs {

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface DisplayTextRenderingEventArgs {

	/**Text displayed in data label. You can add custom text to the data label
	*/
	text?: string;

	/**X-coordinate of data label location
	*/
	locationX?: number;

	/**Y-coordinate of data label location
	*/
	locationY?: number;

	/**Index of the series in series Collection whose data label is being rendered 
	*/
	seriesIndex?: number;

	/**Index of the point in series whose data label is being rendered 
	*/
	pointIndex?: number;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface LegendBoundsCalculateEventArgs {

	/**Height of the legend.
	*/
	legendBoundsHeight?: number;

	/**Width of the legend.
	*/
	legendBoundsWidth?: number;

	/**Number of rows to display the legend items
	*/
	legendBoundsRows?: number;

	/**Set this option to true to cancel the event.
	*/
	cancel?: boolean;

	/**Instance of the chart model object.
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface LegendItemClickEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X-coordinate of legend item in pixel
	*/
	startX?: number;

	/**Y-coordinate of legend item in pixel
	*/
	startY?: number;

	/**Instance of the legend item object that is about to be rendered
	*/
	LegendItem?: any;

	/**Options to customize the legend item styles such as border, color, size, etcâ€¦,
	*/
	style?: any;

	/**Instance that holds information about legend bounds and legend item bounds.
	*/
	Bounds?: any;

	/**Name of the legend item shape. Use this option to customize legend item shape before rendering
	*/
	symbolShape?: string;

	/**Instance of the series object corresponding to the legend item
	*/
	series?: any;
}

export interface LegendItemMouseMoveEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X-coordinate of legend item in pixel
	*/
	startX?: number;

	/**Y-coordinate of legend item in pixel
	*/
	startY?: number;

	/**Instance of the legend item object that is about to be rendered
	*/
	LegendItem?: any;

	/**Options to customize the legend item styles such as border, color, size, etcâ€¦,
	*/
	style?: any;

	/**Options to customize the legend item styles such as border, color, size, etcâ€¦,
	*/
	Bounds?: any;

	/**Name of the legend item shape. Use this option to customize legend item shape before rendering
	*/
	symbolShape?: string;

	/**Instance of the series object corresponding to the legend item
	*/
	series?: any;
}

export interface LegendItemRenderingEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X-coordinate of legend item in pixel
	*/
	startX?: number;

	/**Y-coordinate of legend item in pixel
	*/
	startY?: number;

	/**Instance of the legend item object that is about to be rendered
	*/
	legendItem?: any;

	/**Options to customize the legend item styles such as border, color, size, etc.
	*/
	style?: any;

	/**Name of the legend item shape. Use this option to customize legend item shape before rendering
	*/
	symbolShape?: string;
}

export interface LoadEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface PointRegionClickEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X-coordinate of point in pixel
	*/
	locationX?: number;

	/**Y-coordinate of point in pixel
	*/
	locationY?: number;

	/**Index of the point in series
	*/
	pointIndex?: number;

	/**Index of the series in series collection to which the point belongs
	*/
	seriesIndex?: number;
}

export interface PointRegionMouseMoveEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X-coordinate of point in pixel
	*/
	locationX?: number;

	/**Y-coordinate of point in pixel
	*/
	locationY?: number;

	/**Index of the point in series
	*/
	pointIndex?: number;

	/**Index of the series in series collection to which the point belongs
	*/
	seriesIndex?: number;
}

export interface PreRenderEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;
}

export interface SeriesRegionClickEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Instance of the selected series
	*/
	series?: any;

	/**Index of the selected series
	*/
	seriesIndex?: number;
}

export interface SeriesRenderingEventArgs {

	/**Set this option to true to cancel the event
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Instance of the series which is about to get rendered
	*/
	series?: any;
}

export interface SymbolRenderingEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Instance that holds the location of marker symbol
	*/
	location?: any;

	/**Options to customize the marker style such as color, border and size
	*/
	style?: any;
}

export interface TitleRenderingEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Option to customize the title location in pixels
	*/
	location?: any;

	/**Read-only option to find the size of the title
	*/
	size?: any;

	/**Use this option to add custom text in title
	*/
	title?: string;
}

export interface ToolTipInitializeEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Text to be displayed in tooltip. Set this option to customize the text displayed in tooltip
	*/
	currentText?: string;

	/**Index of the point on which mouse is hovered
	*/
	pointIndex?: number;

	/**Index of the series in series collection whose point is hovered by mouse
	*/
	seriesIndex?: number;
}

export interface TrackAxisToolTipEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Location of the crosshair label in pixels
	*/
	location?: any;

	/**Index of the axis for which crosshair label is displayed
	*/
	axisIndex?: number;

	/**Instance of the chart axis object for which cross hair label is displayed
	*/
	crossAxis?: number;

	/**Text to be displayed in crosshair label. Use this option to add custom text in crosshair label
	*/
	currentTrackText?: string;
}

export interface TrackToolTipEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Location of the trackball tooltip in pixels
	*/
	location?: any;

	/**Index of the point for which trackball tooltip is displayed
	*/
	pointIndex?: number;

	/**Index of the series in series collection
	*/
	seriesIndex?: number;

	/**Text to be displayed in trackball tooltip. Use this option to add custom text in trackball tooltip
	*/
	currentText?: string;

	/**Instance of the series object for which trackball tooltip is displayed.
	*/
	series?: any;
}

export interface AxisLabelClickEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the labels in chart area. 
	*/
	location?: any;

	/**Index of the label.
	*/
	index?: number;

	/**Instance of the corresponding axis.
	*/
	axis?: any;

	/**Label that is clicked.
	*/
	text?: string;
}

export interface AxisLabelMouseMoveEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the labels in chart area. 
	*/
	location?: any;

	/**Index of the label.
	*/
	index?: number;

	/**Instance of the corresponding axis.
	*/
	axis?: any;

	/**Label that is hovered.
	*/
	text?: string;
}

export interface ChartClickEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the points with respect to chart area.  
	*/
	location?: any;

	/**ID of the target element. 
	*/
	id?: string;

	/**Width and height of the chart. 
	*/
	size?: any;

	/**x-coordinate of the pointer, relative to the page 
	*/
	pageX?: number;

	/**y-coordinate of the pointer, relative to the page 
	*/
	pageY?: number;
}

export interface ChartMouseMoveEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the points with respect to chart area.  
	*/
	location?: any;

	/**ID of the target element. 
	*/
	id?: string;

	/**Width and height of the chart. 
	*/
	size?: any;

	/**x-coordinate of the pointer, relative to the page 
	*/
	pageX?: number;

	/**y-coordinate of the pointer, relative to the page 
	*/
	pageY?: number;
}

export interface ChartDoubleClickEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the points with respect to chart area.  
	*/
	location?: any;

	/**ID of the target element. 
	*/
	id?: string;

	/**Width and height of the chart. 
	*/
	size?: any;

	/**x-coordinate of the pointer, relative to the page 
	*/
	pageX?: number;

	/**y-coordinate of the pointer, relative to the page 
	*/
	pageY?: number;
}

export interface AnnotationClickEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**X and Y co-ordinate of the annotation in chart area.  
	*/
	location?: any;

	/**Information about the annotation, like Coordinate unit, Region, content 
	*/
	contentData?: any;

	/**x-coordinate of the pointer, relative to the page  
	*/
	pageX?: number;

	/**y-coordinate of the pointer, relative to the page 
	*/
	pageY?: number;
}

export interface AfterResizeEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Chart width, after resize  
	*/
	width?: number;

	/**Chart height, after resize  
	*/
	height?: number;

	/**Chart width, before resize  
	*/
	prevWidth?: number;

	/**Chart height, before resize  
	*/
	prevHeight?: number;

	/**Chart width, when the chart was first rendered  
	*/
	originalWidth?: number;

	/**Chart height, when the chart was first rendered  
	*/
	originalHeight?: number;
}

export interface BeforeResizeEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Chart width, before resize  
	*/
	currentWidth?: number;

	/**Chart height, before resize  
	*/
	currentHeight?: number;

	/**Chart width, after resize   
	*/
	newWidth?: number;

	/**Chart height, after resize   
	*/
	newHeight?: number;
}

export interface ErrorBarRenderingEventArgs {

	/**Set this option to true to cancel the event    
	*/
	cancel?: boolean;

	/**Instance of the chart model object
	*/
	model?: any;

	/**Name of the event
	*/
	type?: string;

	/**Error bar Object  
	*/
	errorbar?: any;
}

export interface AnnotationsMargin {

	/**Annotation is placed at the specified value above its original position.
	* @Default {0}
	*/
	bottom?: number;

	/**Annotation is placed at the specified value from left side of its original position.
	* @Default {0}
	*/
	left?: number;

	/**Annotation is placed at the specified value from the right side of its original position.
	* @Default {0}
	*/
	right?: number;

	/**Annotation is placed at the specified value under its original position.
	* @Default {0}
	*/
	top?: number;
}

export interface Annotations {

	/**Angle to rotate the annotation in degrees.
	* @Default {'0'}
	*/
	angle?: number;

	/**Text content or id of a HTML element to be displayed as annotation.
	*/
	content?: string;

	/**Specifies how annotations have to be placed in Chart.
	* @Default {none. See CoordinateUnit}
	*/
	coordinateUnit?: ej.datavisualization.Chart.CoordinateUnit|string;

	/**Specifies the horizontal alignment of the annotation.
	* @Default {middle. See HorizontalAlignment}
	*/
	horizontalAlignment?: ej.datavisualization.Chart.HorizontalAlignment|string;

	/**Options to customize the margin of annotation.
	*/
	margin?: AnnotationsMargin;

	/**Controls the opacity of the annotation.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies whether annotation has to be placed with respect to chart or series.
	* @Default {chart. See Region}
	*/
	region?: ej.datavisualization.Chart.Region|string;

	/**Specifies the vertical alignment of the annotation.
	* @Default {middle. See VerticalAlignment}
	*/
	verticalAlignment?: ej.datavisualization.Chart.VerticalAlignment|string;

	/**Controls the visibility of the annotation.
	* @Default {false}
	*/
	visible?: boolean;

	/**Represents the horizontal offset when coordinateUnit is pixels.when coordinateUnit is points, it represents the x-coordinate of axis bounded with xAxisName property or primary X axis when xAxisName is not provided.This property is not applicable when coordinateUnit is none.
	* @Default {0}
	*/
	x?: number;

	/**Name of the horizontal axis to be used for positioning the annotation. This property is applicable only when coordinateUnit is points.
	*/
	xAxisName?: string;

	/**Represents the vertical offset when coordinateUnit is pixels.When coordinateUnit is points, it represents the y-coordinate of axis bounded with yAxisName property or primary Y axis when yAxisName is not provided.This property is not applicable when coordinateUnit is none.
	* @Default {0}
	*/
	y?: number;

	/**Name of the vertical axis to be used for positioning the annotation.This property is applicable only when coordinateUnit is points.
	*/
	yAxisName?: string;
}

export interface Border {

	/**Border color of the chart.
	* @Default {null}
	*/
	color?: string;

	/**Opacity of the chart border.
	* @Default {0.3}
	*/
	opacity?: number;

	/**Width of the Chart border.
	* @Default {0}
	*/
	width?: number;
}

export interface ChartAreaBorder {

	/**Border color of the plot area.
	* @Default {Gray}
	*/
	color?: string;

	/**Opacity of the plot area border.
	* @Default {0.3}
	*/
	opacity?: number;

	/**Border width of the plot area.
	* @Default {0.5}
	*/
	width?: number;
}

export interface ChartArea {

	/**Background color of the plot area.
	* @Default {transparent}
	*/
	background?: string;

	/**Options for customizing the border of the plot area.
	*/
	border?: ChartAreaBorder;
}

export interface ColumnDefinitions {

	/**Specifies the unit to measure the width of the column in plotting area.
	* @Default {'pixel'. See Unit}
	*/
	unit?: ej.datavisualization.Chart.Unit|string;

	/**Width of the column in plotting area. Width is measured in either pixel or percentage based on the value of unit property.
	* @Default {50}
	*/
	columnWidth?: number;

	/**Color of the line that indicates the starting point of the column in plotting area.
	* @Default {transparent}
	*/
	lineColor?: string;

	/**Width of the line that indicates the starting point of the column in plot area.
	* @Default {1}
	*/
	lineWidth?: number;
}

export interface CommonSeriesOptionsBorder {

	/**Border color of all series.
	* @Default {transparent}
	*/
	color?: string;

	/**DashArray for border of the series.
	* @Default {null}
	*/
	dashArray?: string;

	/**Border width of all series.
	* @Default {1}
	*/
	width?: number;
}

export interface CommonSeriesOptionsFont {

	/**Font color of the text in all series.
	* @Default {#707070}
	*/
	color?: string;

	/**Font Family for all the series.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the font Style for all the series.
	* @Default {normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Specifies the font weight for all the series.
	* @Default {regular}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity for text in all the series.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size for text in all the series.
	* @Default {12px}
	*/
	size?: string;
}

export interface CommonSeriesOptionsMarkerBorder {

	/**Border color of the marker shape.
	* @Default {white}
	*/
	color?: string;

	/**Border width of the marker shape.
	* @Default {3}
	*/
	width?: number;
}

export interface CommonSeriesOptionsMarkerDataLabelBorder {

	/**Border color of the data label.
	* @Default {null}
	*/
	color?: string;

	/**Border width of the data label.
	* @Default {0.1}
	*/
	width?: number;
}

export interface CommonSeriesOptionsMarkerDataLabelConnectorLine {

	/**Specifies when the connector has to be drawn as Bezier curve or straight line. This is applicable only for Pie and Doughnut chart types.
	* @Default {line. See ConnectorLineType}
	*/
	type?: ej.datavisualization.Chart.ConnectorLineType|string;

	/**Width of the connector.
	* @Default {0.5}
	*/
	width?: number;
}

export interface CommonSeriesOptionsMarkerDataLabelFont {

	/**Font family of the data label.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the data label.
	* @Default {normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the data label.
	* @Default {regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the data label.
	* @Default {12px}
	*/
	size?: string;
}

export interface CommonSeriesOptionsMarkerDataLabelMargin {

	/**Bottom margin of the text.
	* @Default {5}
	*/
	bottom?: number;

	/**Left margin of the text.
	* @Default {5}
	*/
	left?: number;

	/**Right margin of the text.
	* @Default {5}
	*/
	right?: number;

	/**Top margin of the text.
	* @Default {5}
	*/
	top?: number;
}

export interface CommonSeriesOptionsMarkerDataLabel {

	/**Angle of the data label in degrees. Only the text gets rotated, whereas the background and border does not rotate.
	* @Default {null}
	*/
	angle?: number;

	/**Options for customizing the border of the data label.
	*/
	border?: CommonSeriesOptionsMarkerDataLabelBorder;

	/**Options for displaying and customizing the line that connects point and data label.
	*/
	connectorLine?: CommonSeriesOptionsMarkerDataLabelConnectorLine;

	/**Background color of the data label.
	* @Default {null}
	*/
	fill?: string;

	/**Options for customizing the data label font.
	*/
	font?: CommonSeriesOptionsMarkerDataLabelFont;

	/**Horizontal alignment of the data label.
	* @Default {center}
	*/
	horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment|string;

	/**Margin of the text to its background shape. The size of the background shape increases based on the margin applied to its text.
	*/
	margin?: CommonSeriesOptionsMarkerDataLabelMargin;

	/**Opacity of the data label.
	* @Default {1}
	*/
	opacity?: number;

	/**Background shape of the data label.
	* @Default {none. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Name of a field in data source, where datalabel text is displayed.
	*/
	textMappingName?: string;

	/**Specifies the position of the data label. This property can be used only for the series such as column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, candle and OHLC.
	* @Default {top. See TextPosition}
	*/
	textPosition?: ej.datavisualization.Chart.TextPosition|string;

	/**Vertical alignment of the data label.
	* @Default {center}
	*/
	verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment|string;

	/**Controls the visibility of the data labels.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface CommonSeriesOptionsMarkerSize {

	/**Height of the marker.
	* @Default {6}
	*/
	height?: number;

	/**Width of the marker.
	* @Default {6}
	*/
	width?: number;
}

export interface CommonSeriesOptionsMarker {

	/**Options for customizing the border of the marker shape.
	*/
	border?: CommonSeriesOptionsMarkerBorder;

	/**Options for displaying and customizing data labels.
	*/
	dataLabel?: CommonSeriesOptionsMarkerDataLabel;

	/**Color of the marker shape.
	* @Default {null}
	*/
	fill?: string;

	/**The URL for the Image to be displayed as marker. In order to display image as marker, set series.marker.shape as â€˜imageâ€™.
	*/
	imageUrl?: string;

	/**Opacity of the marker.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the shape of the marker.
	* @Default {circle. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Options for customizing the size of the marker shape.
	*/
	size?: CommonSeriesOptionsMarkerSize;

	/**Controls the visibility of the marker shape.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface CommonSeriesOptionsTooltipBorder {

	/**Border color of the tooltip.
	* @Default {null}
	*/
	color?: string;

	/**Border width of the tooltip.
	* @Default {1}
	*/
	width?: number;
}

export interface CommonSeriesOptionsTooltip {

	/**Options for customizing the border of the tooltip.
	*/
	border?: CommonSeriesOptionsTooltipBorder;

	/**Customize the corner radius of the tooltip rectangle.
	* @Default {0}
	*/
	rx?: number;

	/**Customize the corner radius of the tooltip rectangle.
	* @Default {0}
	*/
	ry?: number;

	/**Specifies the duration, the tooltip has to be displayed.
	* @Default {500ms}
	*/
	duration?: string;

	/**Enables/disables the animation of the tooltip when moving from one point to other.
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Background color of the tooltip.
	* @Default {null}
	*/
	fill?: string;

	/**Format of the tooltip content.
	* @Default {#point.x# : #point.y#}
	*/
	format?: string;

	/**Opacity of the tooltip.
	* @Default {0.5}
	*/
	opacity?: number;

	/**Custom template to format the tooltip content. Use â€œpoint.xâ€ and â€œpoint.yâ€ as a placeholder text to display the corresponding data pointâ€™s x and y value.
	* @Default {null}
	*/
	template?: string;

	/**Controls the visibility of the tooltip.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface CommonSeriesOptionsEmptyPointSettingsStyleBorder {

	/**Border color of the empty point.
	*/
	color?: string;

	/**Border width of the empty point.
	* @Default {1}
	*/
	width?: number;
}

export interface CommonSeriesOptionsEmptyPointSettingsStyle {

	/**Color of the empty point.
	*/
	color?: string;

	/**Options for customizing border of the empty point in the series.
	*/
	border?: CommonSeriesOptionsEmptyPointSettingsStyleBorder;
}

export interface CommonSeriesOptionsEmptyPointSettings {

	/**Controls the visibility of the empty point.
	* @Default {true}
	*/
	visible?: boolean;

	/**Specifies the mode of empty point.
	* @Default {gap}
	*/
	displayMode?: ej.datavisualization.Chart.EmptyPointMode|string;

	/**Options for customizing the color and border of the empty point in the series.
	*/
	style?: CommonSeriesOptionsEmptyPointSettingsStyle;
}

export interface CommonSeriesOptionsConnectorLine {

	/**Width of the connector line.
	* @Default {1}
	*/
	width?: number;

	/**Color of the connector line.
	* @Default {#565656}
	*/
	color?: string;

	/**DashArray of the connector line.
	* @Default {null}
	*/
	dashArray?: string;

	/**DashArray of the connector line.
	* @Default {1}
	*/
	opacity?: number;
}

export interface CommonSeriesOptionsErrorBarCap {

	/**Show/Hides the error bar cap.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the error bar cap.
	* @Default {1}
	*/
	width?: number;

	/**Length of the error bar cap.
	* @Default {1}
	*/
	length?: number;

	/**Color of the error bar cap.
	* @Default {â€œ#000000â€}
	*/
	fill?: string;
}

export interface CommonSeriesOptionsErrorBar {

	/**Show/hides the error bar
	* @Default {visible}
	*/
	visibility?: boolean;

	/**Specifies the type of error bar.
	* @Default {FixedValue}
	*/
	type?: ej.datavisualization.Chart.ErrorBarType|string;

	/**Specifies the mode of error bar.
	* @Default {vertical}
	*/
	mode?: ej.datavisualization.Chart.ErrorBarMode|string;

	/**Specifies the direction of error bar.
	* @Default {both}
	*/
	direction?: ej.datavisualization.Chart.ErrorBarDirection|string;

	/**Value of vertical error bar.
	* @Default {3}
	*/
	verticalErrorValue?: number;

	/**Value of horizontal  error bar.
	* @Default {1}
	*/
	horizontalErrorValue?: number;

	/**Value of positive horizontal error bar.
	* @Default {1}
	*/
	horizontalPositiveErrorValue?: number;

	/**Value of negative horizontal error bar.
	* @Default {1}
	*/
	horizontalNegativeErrorValue?: number;

	/**Value of positive vertical error bar.
	* @Default {5}
	*/
	verticalPositiveErrorValue?: number;

	/**Value of negative vertical error bar.
	* @Default {5}
	*/
	verticalNegativeErrorValue?: number;

	/**Fill color of the error bar.
	* @Default {#000000}
	*/
	fill?: string;

	/**Width of the error bar.
	* @Default {1}
	*/
	width?: number;

	/**Options for customizing the error bar cap.
	*/
	cap?: CommonSeriesOptionsErrorBarCap;
}

export interface CommonSeriesOptionsTrendlines {

	/**Show/hides the trendline.
	*/
	visibility?: boolean;

	/**Specifies the type of the trendline for the series.
	* @Default {linear. See TrendlinesType}
	*/
	type?: string;

	/**Name for the trendlines that is to be displayed in the legend text.
	* @Default {trendline}
	*/
	name?: string;

	/**Fill color of the trendlines.
	* @Default {#0000FF}
	*/
	fill?: string;

	/**Width of the trendlines.
	* @Default {1}
	*/
	width?: number;

	/**Opacity of the trendline.
	* @Default {1}
	*/
	opacity?: number;

	/**Pattern of dashes and gaps used to stroke the trendline.
	*/
	dashArray?: string;

	/**Future trends of the current series.
	* @Default {0}
	*/
	forwardForecast?: number;

	/**Past trends of the current series.
	* @Default {0}
	*/
	backwardForecast?: number;

	/**Specifies the order of the polynomial trendlines.
	* @Default {0}
	*/
	polynomialOrder?: number;

	/**Specifies the moving average starting period value.
	* @Default {2}
	*/
	period?: number;
}

export interface CommonSeriesOptionsHighlightSettingsBorder {

	/**Border color of the series/point on highlight.
	*/
	color?: string;

	/**Border width of the series/point on highlight.
	* @Default {2}
	*/
	width?: string;
}

export interface CommonSeriesOptionsHighlightSettings {

	/**Enables/disables the ability to highlight the series or data point interactively.
	* @Default {false}
	*/
	enable?: boolean;

	/**Specifies whether the series or data point has to be highlighted.
	* @Default {series. See Mode}
	*/
	mode?: ej.datavisualization.Chart.Mode|string;

	/**Color of the series/point on highlight.
	*/
	color?: string;

	/**Opacity of the series/point on highlight.
	* @Default {0.6}
	*/
	opacity?: number;

	/**Options for customizing the border of series on highlight.
	*/
	border?: CommonSeriesOptionsHighlightSettingsBorder;

	/**Specifies the pattern for the series/point on highlight.
	* @Default {none. See Pattern}
	*/
	pattern?: string;

	/**Custom pattern for the series on highlight.
	*/
	customPattern?: string;
}

export interface CommonSeriesOptionsSelectionSettingsBorder {

	/**Border color of the series/point on selection.
	*/
	color?: string;

	/**Border width of the series/point on selection.
	* @Default {2}
	*/
	width?: string;
}

export interface CommonSeriesOptionsSelectionSettings {

	/**Enables/disables the ability to select a series/data point interactively.
	* @Default {false}
	*/
	enable?: boolean;

	/**Specifies the type of selection.
	* @Default {single}
	*/
	type?: ej.datavisualization.Chart.SelectionType|string;

	/**Specifies whether the series or data point has to be selected.
	* @Default {series. See Mode}
	*/
	mode?: ej.datavisualization.Chart.Mode|string;

	/**Color of the series/point on selection.
	*/
	color?: string;

	/**Opacity of the series/point on selection.
	* @Default {0.6}
	*/
	opacity?: number;

	/**Options for customizing the border of the series on selection.
	*/
	border?: CommonSeriesOptionsSelectionSettingsBorder;

	/**Specifies the pattern for the series/point on selection.
	* @Default {none. See Pattern}
	*/
	pattern?: string;

	/**Custom pattern for the series on selection.
	*/
	customPattern?: string;
}

export interface CommonSeriesOptions {

	/**Options to customize the border of all the series.
	*/
	border?: CommonSeriesOptionsBorder;

	/**Pattern of dashes and gaps used to stroke all the line type series.
	*/
	dashArray?: string;

	/**Set the dataSource for all series. It can be an array of JSON objects or an instance of ej.DataManager.
	* @Default {null}
	*/
	dataSource?: any;

	/**Controls the size of the hole in doughnut series. Value ranges from 0 to 1
	* @Default {0.4}
	*/
	doughnutCoefficient?: number;

	/**Controls the size of the doughnut series. Value ranges from 0 to 1.
	* @Default {0.8}
	*/
	doughnutSize?: number;

	/**Specifies the type of series to be drawn in radar or polar series.
	* @Default {line. See DrawType}
	*/
	drawType?: ej.datavisualization.Chart.DrawType|string;

	/**Enable/disable the animation for all the series.
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**To avoid overlapping of data labels smartly.
	* @Default {true}
	*/
	enableSmartLabels?: boolean;

	/**Start angle of pie/doughnut series.
	* @Default {null}
	*/
	endAngle?: number;

	/**Explodes the pie/doughnut slices on mouse move.
	* @Default {false}
	*/
	explode?: boolean;

	/**Explodes all the slice of pie/doughnut on render.
	* @Default {false}
	*/
	explodeAll?: boolean;

	/**Index of the point to be exploded from pie/doughnut/pyramid/funnel.
	* @Default {null}
	*/
	explodeIndex?: number;

	/**Specifies the distance of the slice from the center, when it is exploded.
	* @Default {0.4}
	*/
	explodeOffset?: number;

	/**Fill color for all the series.
	* @Default {null}
	*/
	fill?: string;

	/**Options for customizing the font of all the series.
	*/
	font?: CommonSeriesOptionsFont;

	/**Sets the height of the funnel in funnel series. Values can be either pixel or percentage.
	* @Default {32.7%}
	*/
	funnelHeight?: string;

	/**Sets the width of the funnel in funnel series. Values can be either pixel or percentage.
	* @Default {11.6%}
	*/
	funnelWidth?: string;

	/**Gap between the slices in pyramid and funnel series.
	* @Default {0}
	*/
	gapRatio?: number;

	/**Specifies whether to join start and end point of a line/area series used in polar/radar chart to form a closed path.
	* @Default {true}
	*/
	isClosed?: boolean;

	/**Specifies whether to stack the column series in polar/radar charts.
	* @Default {false}
	*/
	isStacking?: boolean;

	/**Renders the chart vertically. This is applicable only for cartesian type series.
	* @Default {false}
	*/
	isTransposed?: boolean;

	/**Position of the data label in pie/doughnut/pyramid/funnel series. OutsideExtended position is not applicable for pyramid/funnel.
	* @Default {inside. See LabelPosition}
	*/
	labelPosition?: ej.datavisualization.Chart.LabelPosition|string;

	/**Specifies the line cap of the series.
	* @Default {butt. See LineCap}
	*/
	lineCap?: ej.datavisualization.Chart.LineCap|string;

	/**Specifies the type of shape to be used where two lines meet.
	* @Default {round. See LineJoin}
	*/
	lineJoin?: ej.datavisualization.Chart.LineJoin|string;

	/**Options for displaying and customizing marker for individual point in a series. Marker contains shapes and/or data labels.
	*/
	marker?: CommonSeriesOptionsMarker;

	/**Opacity of the series.
	* @Default {1}
	*/
	opacity?: number;

	/**Name of a field in data source, where the fill color for all the data points is generated.
	*/
	palette?: string;

	/**Controls the size of pie series. Value ranges from 0 to 1.
	* @Default {0.8}
	*/
	pieCoefficient?: number;

	/**Specifies the mode of the pyramid series.
	* @Default {linear. See PyramidMode}
	*/
	pyramidMode?: ej.datavisualization.Chart.PyramidMode|string;

	/**Start angle from where the pie/doughnut series renders. By default it starts from 0.
	* @Default {null}
	*/
	startAngle?: number;

	/**Options for customizing the tooltip of chart.
	*/
	tooltip?: CommonSeriesOptionsTooltip;

	/**Specifies the type of the series to render in chart.
	* @Default {column. See Type}
	*/
	type?: ej.datavisualization.Chart.Type|string;

	/**Specifies the name of the x-axis that has to be associated with this series. Add an axis instance with this name to axes collection.
	* @Default {null}
	*/
	xAxisName?: string;

	/**Name of the property in the datasource that contains x value for the series.
	* @Default {null}
	*/
	xName?: string;

	/**Specifies the name of the y-axis that has to be associated with this series. Add an axis instance with this name to axes collection.
	* @Default {null}
	*/
	yAxisName?: string;

	/**Name of the property in the datasource that contains y value for the series.
	* @Default {null}
	*/
	yName?: string;

	/**Name of the property in the datasource that contains high value for the series.
	* @Default {null}
	*/
	high?: string;

	/**Name of the property in the datasource that contains low value for the series.
	* @Default {null}
	*/
	low?: string;

	/**Name of the property in the datasource that contains open value for the series.
	* @Default {null}
	*/
	open?: string;

	/**Name of the property in the datasource that contains close value for the series.
	* @Default {null}
	*/
	close?: string;

	/**Name of the property in the datasource that contains the size value for the bubble series.
	* @Default {null}
	*/
	size?: string;

	/**Options for customizing the empty point in the series.
	*/
	emptyPointSettings?: CommonSeriesOptionsEmptyPointSettings;

	/**Fill color for the positive column of the waterfall.
	* @Default {null}
	*/
	positiveFill?: string;

	/**Options for customizing the waterfall connector line.
	*/
	connectorLine?: CommonSeriesOptionsConnectorLine;

	/**Options to customize the error bar in series.
	*/
	errorBar?: CommonSeriesOptionsErrorBar;

	/**Option to add the trendlines to chart.
	*/
	trendlines?: Array<CommonSeriesOptionsTrendlines>;

	/**Options for customizing the appearance of the series or data point while highlighting.
	*/
	highlightSettings?: CommonSeriesOptionsHighlightSettings;

	/**Options for customizing the appearance of the series/data point on selection.
	*/
	selectionSettings?: CommonSeriesOptionsSelectionSettings;
}

export interface CrosshairMarkerBorder {

	/**Border width of the marker.
	* @Default {3}
	*/
	width?: number;
}

export interface CrosshairMarkerSize {

	/**Height of the marker.
	* @Default {10}
	*/
	height?: number;

	/**Width of the marker.
	* @Default {10}
	*/
	width?: number;
}

export interface CrosshairMarker {

	/**Options for customizing the border.
	*/
	border?: CrosshairMarkerBorder;

	/**Opacity of the marker.
	* @Default {true}
	*/
	opacity?: boolean;

	/**Options for customizing the size of the marker.
	*/
	size?: CrosshairMarkerSize;

	/**Show/hides the marker.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface Crosshair {

	/**Options for customizing the marker in crosshair.
	*/
	marker?: CrosshairMarker;

	/**Specifies the type of the crosshair. It can be trackball or crosshair
	* @Default {crosshair. See CrosshairType}
	*/
	type?: ej.datavisualization.Chart.CrosshairType|string;

	/**Show/hides the crosshair/trackball visibility.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface IndicatorsHistogramBorder {

	/**Color of the histogram border in MACD indicator.
	* @Default {#9999ff}
	*/
	color?: string;

	/**Controls the width of histogram border line in MACD indicator.
	* @Default {1}
	*/
	width?: number;
}

export interface IndicatorsHistogram {

	/**Options to customize the histogram border in MACD indicator.
	*/
	border?: IndicatorsHistogramBorder;

	/**Color of histogram columns in MACD indicator.
	* @Default {#ccccff}
	*/
	fill?: string;

	/**Opacity of histogram columns in MACD indicator.
	* @Default {1}
	*/
	opacity?: number;
}

export interface IndicatorsLowerLine {

	/**Color of lower line.
	* @Default {#008000}
	*/
	fill?: string;

	/**Width of the lower line.
	* @Default {2}
	*/
	width?: number;
}

export interface IndicatorsMacdLine {

	/**Color of MACD line.
	* @Default {#ff9933}
	*/
	fill?: string;

	/**Width of the MACD line.
	* @Default {2}
	*/
	width?: number;
}

export interface IndicatorsPeriodLine {

	/**Color of period line in indicator.
	* @Default {blue}
	*/
	fill?: string;

	/**Width of the period line in indicators.
	* @Default {2}
	*/
	width?: number;
}

export interface IndicatorsTooltipBorder {

	/**Border color of indicator tooltip.
	* @Default {null}
	*/
	color?: string;

	/**Border width of indicator tooltip.
	* @Default {1}
	*/
	width?: number;
}

export interface IndicatorsTooltip {

	/**Option to customize the border of indicator tooltip.
	*/
	border?: IndicatorsTooltipBorder;

	/**Specifies the animation duration of indicator tooltip.
	* @Default {500ms}
	*/
	duration?: string;

	/**Enables/disables the tooltip animation.
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Format of indicator tooltip. Use â€œpoint.xâ€ and â€œpoint.yâ€ as a placeholder text to display the corresponding data pointâ€™s x and y value.
	* @Default {#point.x# : #point.y#}
	*/
	format?: string;

	/**Background color of indicator tooltip.
	* @Default {null}
	*/
	fill?: string;

	/**Opacity of indicator tooltip.
	* @Default {0.95}
	*/
	opacity?: number;

	/**Controls the visibility of indicator tooltip.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface IndicatorsUpperLine {

	/**Fill color of the upper line in indicators
	* @Default {#ff9933}
	*/
	fill?: string;

	/**Width of the upper line in indicators.
	* @Default {2}
	*/
	width?: number;
}

export interface Indicators {

	/**The dPeriod value for stochastic indicator.
	* @Default {3}
	*/
	dPeriod?: number;

	/**Enables/disables the animation.
	* @Default {false}
	*/
	enableAnimation?: boolean;

	/**Color of the technical indicator.
	* @Default {#00008B}
	*/
	fill?: string;

	/**Options to customize the histogram in MACD indicator.
	*/
	histogram?: IndicatorsHistogram;

	/**Specifies the k period in stochastic indicator.
	* @Default {3}
	*/
	kPeriod?: number;

	/**Specifies the long period in MACD indicator.
	* @Default {26}
	*/
	longPeriod?: number;

	/**Options to customize the lower line in indicators.
	*/
	lowerLine?: IndicatorsLowerLine;

	/**Options to customize the MACD line.
	*/
	macdLine?: IndicatorsMacdLine;

	/**Specifies the type of the MACD indicator.
	* @Default {line. See MACDType}
	*/
	macdType?: string;

	/**Specifies period value in indicator.
	* @Default {14}
	*/
	period?: number;

	/**Options to customize the period line in indicators.
	*/
	periodLine?: IndicatorsPeriodLine;

	/**Name of the series for which indicator has to be drawn.
	*/
	seriesName?: string;

	/**Specifies the short period in MACD indicator.
	* @Default {13}
	*/
	shortPeriod?: number;

	/**Specifies the standard deviation value for Bollinger band indicator.
	* @Default {2}
	*/
	standardDeviations?: number;

	/**Options to customize the tooltip.
	*/
	tooltip?: IndicatorsTooltip;

	/**Trigger value of MACD indicator.
	* @Default {9}
	*/
	trigger?: number;

	/**Specifies the visibility of indicator.
	* @Default {visible}
	*/
	visibility?: string;

	/**Specifies the type of indicator that has to be rendered.
	* @Default {sma. See IndicatorsType}
	*/
	type?: string;

	/**Options to customize the upper line in indicators
	*/
	upperLine?: IndicatorsUpperLine;

	/**Width of the indicator line.
	* @Default {2}
	*/
	width?: number;

	/**Name of the horizontal axis used for indicator. Primary X axis is used when x axis name is not specified.
	*/
	xAxisName?: string;

	/**Name of the vertical axis used for indicator. Primary Y axis is used when y axis name is not specified
	*/
	yAxisName?: string;
}

export interface LegendBorder {

	/**Border color of the legend.
	* @Default {transparent}
	*/
	color?: string;

	/**Border width of the legend.
	* @Default {1}
	*/
	width?: number;
}

export interface LegendFont {

	/**Font family for legend item text.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style for legend item text.
	* @Default {Normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight for legend item text.
	* @Default {Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Font size for legend item text.
	* @Default {12px}
	*/
	size?: string;
}

export interface LegendItemStyleBorder {

	/**Border color of the legend items.
	* @Default {transparent}
	*/
	color?: string;

	/**Border width of the legend items.
	* @Default {1}
	*/
	width?: number;
}

export interface LegendItemStyle {

	/**Options for customizing the border of legend items.
	*/
	border?: LegendItemStyleBorder;

	/**Height of the shape in legend items.
	* @Default {10}
	*/
	height?: number;

	/**Width of the shape in legend items.
	* @Default {10}
	*/
	width?: number;
}

export interface LegendLocation {

	/**X value or horizontal offset to position the legend in chart.
	* @Default {0}
	*/
	x?: number;

	/**Y value or vertical offset to position the legend.
	* @Default {0}
	*/
	y?: number;
}

export interface LegendSize {

	/**Height of the legend. Height can be specified in either pixel or percentage.
	* @Default {null}
	*/
	height?: string;

	/**Width of the legend. Width can be specified in either pixel or percentage.
	* @Default {null}
	*/
	width?: string;
}

export interface LegendTitleFont {

	/**Font family for the text in legend title.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style for legend title.
	* @Default {normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight for legend title.
	* @Default {normal. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Font size for legend title.
	* @Default {12px}
	*/
	size?: string;
}

export interface LegendTitle {

	/**Options to customize the font used for legend title
	*/
	font?: LegendTitleFont;

	/**Text to be displayed in legend title.
	*/
	text?: string;

	/**Alignment of the legend title.
	* @Default {center. See Alignment}
	*/
	textAlignment?: ej.datavisualization.Chart.Alignment|string;
}

export interface Legend {

	/**Horizontal alignment of the legend.
	* @Default {Center. See Alignment}
	*/
	alignment?: ej.datavisualization.Chart.Alignment|string;

	/**Background for the legend. Use this property to add a background image or background color for the legend.
	*/
	background?: string;

	/**Options for customizing the legend border.
	*/
	border?: LegendBorder;

	/**Number of columns to arrange the legend items.
	* @Default {null}
	*/
	columnCount?: number;

	/**Controls whether legend has to use scrollbar or not. When enabled, scroll bar appears depending upon size and position properties of legend.
	* @Default {true}
	*/
	enableScrollbar?: boolean;

	/**Fill color for the legend items. By using this property, it displays all legend item shapes in same color.Legend items representing invisible series is displayed in gray color.
	* @Default {null}
	*/
	fill?: string;

	/**Options to customize the font used for legend item text.
	*/
	font?: LegendFont;

	/**Gap or padding between the legend items.
	* @Default {10}
	*/
	itemPadding?: number;

	/**Options to customize the style of legend items.
	*/
	itemStyle?: LegendItemStyle;

	/**Options to customize the location of chart legend. Legend is placed in provided location only when value of position property is custom
	*/
	location?: LegendLocation;

	/**Opacity of the legend.
	* @Default {1}
	*/
	opacity?: number;

	/**Places the legend at specified position. Legend can be placed at left, right, top or bottom of the chart area.To manually specify the location of legend, set custom as value to this property.
	* @Default {Bottom. See Position}
	*/
	position?: ej.datavisualization.Chart.Position|string;

	/**Number of rows to arrange the legend items.
	* @Default {null}
	*/
	rowCount?: number;

	/**Shape of the legend items. Default shape for pie and doughnut series is circle and all other series uses rectangle.
	* @Default {None. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Options to customize the size of the legend.
	*/
	size?: LegendSize;

	/**Options to customize the legend title.
	*/
	title?: LegendTitle;

	/**Specifies the action taken when the legend width is more than the textWidth.
	* @Default {none. See textOverflow}
	*/
	textOverflow?: ej.datavisualization.Chart.TextOverflow|string;

	/**Text width for legend item.
	* @Default {34}
	*/
	textWidth?: number;

	/**Controls the visibility of the legend.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface PrimaryXAxisAlternateGridBandEven {

	/**Fill color for the even grid bands.
	* @Default {transparent}
	*/
	fill?: string;

	/**Opacity of the even grid band.
	* @Default {1}
	*/
	opacity?: number;
}

export interface PrimaryXAxisAlternateGridBandOdd {

	/**Fill color of the odd grid bands
	* @Default {transparent}
	*/
	fill?: string;

	/**Opacity of odd grid band
	* @Default {1}
	*/
	opacity?: number;
}

export interface PrimaryXAxisAlternateGridBand {

	/**Options for customizing even grid band.
	*/
	even?: PrimaryXAxisAlternateGridBandEven;

	/**Options for customizing odd grid band.
	*/
	odd?: PrimaryXAxisAlternateGridBandOdd;
}

export interface PrimaryXAxisAxisLine {

	/**Pattern of dashes and gaps to be applied to the axis line.
	* @Default {null}
	*/
	dashArray?: string;

	/**Padding for axis line. Normally, it is used along with plotOffset to pad the plot area.
	* @Default {null}
	*/
	offset?: number;

	/**Show/hides the axis line.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of axis line.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryXAxisCrosshairLabel {

	/**Show/hides the crosshair label associated with this axis.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface PrimaryXAxisFont {

	/**Font family of labels.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of labels.
	* @Default {ej.datavisualization.Chart.FontStyle.Normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the label.
	* @Default {ej.datavisualization.Chart.FontWeight.Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the axis labels.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the axis labels.
	* @Default {13px}
	*/
	size?: string;
}

export interface PrimaryXAxisMajorGridLines {

	/**Pattern of dashes and gaps used to stroke the major grid lines.
	* @Default {null}
	*/
	dashArray?: string;

	/**Opacity of major grid lines.
	* @Default {1}
	*/
	opacity?: number;

	/**Show/hides the major grid lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the major grid lines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryXAxisMajorTickLines {

	/**Length of the major tick lines.
	* @Default {5}
	*/
	size?: number;

	/**Show/hides the major tick lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the major tick lines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryXAxisMinorGridLines {

	/**Patterns of dashes and gaps used to stroke the minor grid lines.
	* @Default {null}
	*/
	dashArray?: string;

	/**Show/hides the minor grid lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the minorGridLines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryXAxisMinorTickLines {

	/**Length of the minor tick lines.
	* @Default {5}
	*/
	size?: number;

	/**Show/hides the minor tick lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the minor tick line.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryXAxisRange {

	/**Minimum value of the axis range.
	* @Default {null}
	*/
	minimum?: number;

	/**Maximum value of the axis range.
	* @Default {null}
	*/
	maximum?: number;

	/**Interval of the axis range.
	* @Default {null}
	*/
	interval?: number;
}

export interface PrimaryXAxisStripLineFont {

	/**Font color of the strip line text.
	* @Default {black}
	*/
	color?: string;

	/**Font family of the strip line text.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the strip line text.
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the strip line text.
	* @Default {regular}
	*/
	fontWeight?: string;

	/**Opacity of the strip line text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the strip line text.
	* @Default {12px}
	*/
	size?: string;
}

export interface PrimaryXAxisStripLine {

	/**Border color of the strip line.
	* @Default {gray}
	*/
	borderColor?: string;

	/**Background color of the strip line.
	* @Default {gray}
	*/
	color?: string;

	/**End value of the strip line.
	* @Default {null}
	*/
	end?: number;

	/**Options for customizing the font of the text.
	*/
	font?: PrimaryXAxisStripLineFont;

	/**Start value of the strip line.
	* @Default {null}
	*/
	start?: number;

	/**Indicates whether to render the strip line from the minimum/start value of the axis. This property does not work when start property is set.
	* @Default {false}
	*/
	startFromAxis?: boolean;

	/**Specifies text to be displayed inside the strip line.
	* @Default {stripLine}
	*/
	text?: string;

	/**Specifies the alignment of the text inside the strip line.
	* @Default {middlecenter. See TextAlignment}
	*/
	textAlignment?: ej.datavisualization.Chart.TextAlignment|string;

	/**Show/hides the strip line.
	* @Default {false}
	*/
	visible?: boolean;

	/**Width of the strip line.
	* @Default {0}
	*/
	width?: number;

	/**Specifies the order where the strip line and the series have to be rendered. When zOrder is â€œbehindâ€, strip line is rendered under the series and when it is â€œoverâ€, it is rendered above the series.
	* @Default {over. See ZIndex}
	*/
	zIndex?: ej.datavisualization.Chart.ZIndex|string;
}

export interface PrimaryXAxisTitleFont {

	/**Font family of the title text.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the title text.
	* @Default {ej.datavisualization.Chart.FontStyle.Normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the title text.
	* @Default {ej.datavisualization.Chart.FontWeight.Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the axis title text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the axis title.
	* @Default {16px}
	*/
	size?: string;
}

export interface PrimaryXAxisTitle {

	/**Specifies whether to trim the axis title when it exceeds the chart area or the maximum width of the title.
	* @Default {false}
	*/
	enableTrim?: boolean;

	/**Options for customizing the title font.
	*/
	font?: PrimaryXAxisTitleFont;

	/**Maximum width of the title, when the title exceeds this width, the title gets trimmed, when enableTrim is true.
	* @Default {34}
	*/
	maximumTitleWidth?: number;

	/**Title for the axis.
	*/
	text?: string;

	/**Controls the visibility of axis title.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface PrimaryXAxis {

	/**Options for customizing horizontal axis alternate grid band.
	*/
	alternateGridBand?: PrimaryXAxisAlternateGridBand;

	/**Options for customizing the axis line.
	*/
	axisLine?: PrimaryXAxisAxisLine;

	/**Specifies the index of the column where the axis is associated, when the chart area is divided into multiple plot areas by using columnDefinitions.
	* @Default {null}
	*/
	columnIndex?: number;

	/**Specifies the number of columns or plot areas an axis has to span horizontally.
	* @Default {null}
	*/
	columnSpan?: number;

	/**Options to customize the crosshair label.
	*/
	crosshairLabel?: PrimaryXAxisCrosshairLabel;

	/**With this setting, you can request axis to calculate intervals approximately equal to your desired interval.
	* @Default {null}
	*/
	desiredIntervals?: number;

	/**Specifies the position of labels at the edge of the axis.
	* @Default {ej.datavisualization.Chart.EdgeLabelPlacement.None. See EdgeLabelPlacement}
	*/
	edgeLabelPlacement?: ej.datavisualization.Chart.EdgeLabelPlacement|string;

	/**Specifies whether to trim the axis label when the width of the label exceeds the maximumLabelWidth.
	* @Default {false}
	*/
	enableTrim?: boolean;

	/**Options for customizing the font of the axis Labels.
	*/
	font?: PrimaryXAxisFont;

	/**Specifies the type of interval in date time axis.
	* @Default {null. See IntervalType}
	*/
	intervalType?: ej.datavisualization.Chart.IntervalType|string;

	/**Specifies whether to inverse the axis.
	* @Default {false}
	*/
	isInversed?: boolean;

	/**Custom formatting for axis label and supports all standard formatting type of numerical and date time values.
	* @Default {null}
	*/
	labelFormat?: string;

	/**Specifies the action to take when the axis labels are overlapping with each other.
	* @Default {ej.datavisualization.Chart.LabelIntersectAction.None. See LabelIntersectAction}
	*/
	labelIntersectAction?: ej.datavisualization.Chart.LabelIntersectAction|string;

	/**Specifies the position of the axis labels.
	* @Default {outside. See LabelPosition}
	*/
	labelPosition?: ej.datavisualization.Chart.LabelPosition|string;

	/**Angle in degrees to rotate the axis labels.
	* @Default {null}
	*/
	labelRotation?: number;

	/**Logarithmic base value. This is applicable only for logarithmic axis.
	* @Default {10}
	*/
	logBase?: number;

	/**Options for customizing major gird lines.
	*/
	majorGridLines?: PrimaryXAxisMajorGridLines;

	/**Options for customizing the major tick lines.
	*/
	majorTickLines?: PrimaryXAxisMajorTickLines;

	/**Maximum number of labels to be displayed in every 100 pixels.
	* @Default {3}
	*/
	maximumLabels?: number;

	/**Maximum width of the axis label. When the label exceeds the width, the label gets trimmed when the enableTrim is set to true.
	* @Default {34}
	*/
	maximumLabelWidth?: number;

	/**Options for customizing the minor grid lines.
	*/
	minorGridLines?: PrimaryXAxisMinorGridLines;

	/**Options for customizing the minor tick lines.
	*/
	minorTickLines?: PrimaryXAxisMinorTickLines;

	/**Specifies the number of minor ticks per interval.
	* @Default {null}
	*/
	minorTicksPerInterval?: number;

	/**Unique name of the axis. To associate an axis with the series, you have to set this name to the xAxisName/yAxisName property of the series.
	* @Default {null}
	*/
	name?: string;

	/**Specifies whether to render the axis at the opposite side of its default position.
	* @Default {false}
	*/
	opposedPosition?: boolean;

	/**Specifies the padding for the plot area.
	* @Default {10}
	*/
	plotOffset?: number;

	/**Options to customize the range of the axis.
	*/
	range?: PrimaryXAxisRange;

	/**Specifies the padding for the axis range.
	* @Default {None. See RangePadding}
	*/
	rangePadding?: ej.datavisualization.Chart.RangePadding|string;

	/**Rounds the number to the given number of decimals.
	* @Default {null}
	*/
	roundingPlaces?: number;

	/**Options for customizing the strip lines.
	* @Default {[ ]}
	*/
	stripLine?: Array<PrimaryXAxisStripLine>;

	/**Specifies the position of the axis tick lines.
	* @Default {outside. See TickLinesPosition}
	*/
	tickLinesPosition?: ej.datavisualization.Chart.TickLinesPosition|string;

	/**Options for customizing the axis title.
	*/
	title?: PrimaryXAxisTitle;

	/**Specifies the type of data the axis is handling.
	* @Default {null. See ValueType}
	*/
	valueType?: ej.datavisualization.Chart.ValueType|string;

	/**Show/hides the axis.
	* @Default {true}
	*/
	visible?: boolean;

	/**The axis is scaled by this factor. When zoomFactor is 0.5, the chart is scaled by 200% along this axis. Value ranges from 0 to 1.
	* @Default {1}
	*/
	zoomFactor?: number;

	/**Position of the zoomed axis. Value ranges from 0 to 1.
	* @Default {0}
	*/
	zoomPosition?: number;
}

export interface PrimaryYAxisAlternateGridBandEven {

	/**Fill color for the even grid bands.
	* @Default {transparent}
	*/
	fill?: string;

	/**Opacity of the even grid band.
	* @Default {1}
	*/
	opacity?: number;
}

export interface PrimaryYAxisAlternateGridBandOdd {

	/**Fill color of the odd grid bands.
	* @Default {transparent}
	*/
	fill?: string;

	/**Opacity of odd grid band.
	* @Default {1}
	*/
	opacity?: number;
}

export interface PrimaryYAxisAlternateGridBand {

	/**Options for customizing even grid band.
	*/
	even?: PrimaryYAxisAlternateGridBandEven;

	/**Options for customizing odd grid band.
	*/
	odd?: PrimaryYAxisAlternateGridBandOdd;
}

export interface PrimaryYAxisAxisLine {

	/**Pattern of dashes and gaps to be applied to the axis line.
	* @Default {null}
	*/
	dashArray?: string;

	/**Padding for axis line. Normally, it is used along with plotOffset to pad the plot area.
	* @Default {null}
	*/
	offset?: number;

	/**Show/hides the axis line.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of axis line.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryYAxisCrosshairLabel {

	/**Show/hides the crosshair label associated with this axis.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface PrimaryYAxisFont {

	/**Font family of labels.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of labels.
	* @Default {ej.datavisualization.Chart.FontStyle.Normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the label.
	* @Default {ej.datavisualization.Chart.FontWeight.Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the axis labels.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the axis labels.
	* @Default {13px}
	*/
	size?: string;
}

export interface PrimaryYAxisMajorGridLines {

	/**Pattern of dashes and gaps used to stroke the major grid lines.
	* @Default {null}
	*/
	dashArray?: string;

	/**Opacity of major grid lines.
	* @Default {1}
	*/
	opacity?: number;

	/**Show/hides the major grid lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the major grid lines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryYAxisMajorTickLines {

	/**Length of the major tick lines.
	* @Default {5}
	*/
	size?: number;

	/**Show/hides the major tick lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the major tick lines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryYAxisMinorGridLines {

	/**Patterns of dashes and gaps used to stroke the minor grid lines.
	* @Default {null}
	*/
	dashArray?: string;

	/**Show/hides the minor grid lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the minorGridLines.
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryYAxisMinorTickLines {

	/**Length of the minor tick lines.
	* @Default {5}
	*/
	size?: number;

	/**Show/hides the minor tick lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the minor tick line
	* @Default {1}
	*/
	width?: number;
}

export interface PrimaryYAxisStripLineFont {

	/**Font color of the strip line text.
	* @Default {black}
	*/
	color?: string;

	/**Font family of the strip line text.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the strip line text.
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the strip line text.
	* @Default {regular}
	*/
	fontWeight?: string;

	/**Opacity of the strip line text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the strip line text.
	* @Default {12px}
	*/
	size?: string;
}

export interface PrimaryYAxisStripLine {

	/**Border color of the strip line.
	* @Default {gray}
	*/
	borderColor?: string;

	/**Background color of the strip line.
	* @Default {gray}
	*/
	color?: string;

	/**End value of the strip line.
	* @Default {null}
	*/
	end?: number;

	/**Options for customizing the font of the text.
	*/
	font?: PrimaryYAxisStripLineFont;

	/**Start value of the strip line.
	* @Default {null}
	*/
	start?: number;

	/**Indicates whether to render the strip line from the minimum/start value of the axis. This property wonâ€™t work when start property is set.
	* @Default {false}
	*/
	startFromAxis?: boolean;

	/**Specifies text to be displayed inside the strip line.
	* @Default {stripLine}
	*/
	text?: string;

	/**Specifies the alignment of the text inside the strip line.
	* @Default {middlecenter. See TextAlignment}
	*/
	textAlignment?: ej.datavisualization.Chart.TextAlignment|string;

	/**Show/hides the strip line.
	* @Default {false}
	*/
	visible?: boolean;

	/**Width of the strip line.
	* @Default {0}
	*/
	width?: number;

	/**Specifies the order in which strip line and the series have to be rendered. When zOrder is â€œbehindâ€, strip line is rendered below the series and when it is â€œoverâ€, it is rendered above the series.
	* @Default {over. See ZIndex}
	*/
	zIndex?: ej.datavisualization.Chart.ZIndex|string;
}

export interface PrimaryYAxisTitleFont {

	/**Font family of the title text.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the title text.
	* @Default {ej.datavisualization.Chart.FontStyle.Normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the title text.
	* @Default {ej.datavisualization.Chart.FontWeight.Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the axis title text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the axis title.
	* @Default {16px}
	*/
	size?: string;
}

export interface PrimaryYAxisTitle {

	/**Specifies whether to trim the axis title when it exceeds the chart area or the maximum width of the title.
	* @Default {ej.datavisualization.Chart.enableTrim}
	*/
	enableTrim?: boolean;

	/**Options for customizing the title font.
	*/
	font?: PrimaryYAxisTitleFont;

	/**Maximum width of the title, when the title exceeds this width, the title gets trimmed, when enableTrim is true.
	* @Default {ej.datavisualization.Chart.maximumTitleWidth.null}
	*/
	maximumTitleWidth?: number;

	/**Title for the axis.
	*/
	text?: string;

	/**Controls the visibility of axis title.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface PrimaryYAxis {

	/**Options for customizing vertical axis alternate grid band.
	*/
	alternateGridBand?: PrimaryYAxisAlternateGridBand;

	/**Options for customizing the axis line.
	*/
	axisLine?: PrimaryYAxisAxisLine;

	/**Options to customize the crosshair label.
	*/
	crosshairLabel?: PrimaryYAxisCrosshairLabel;

	/**With this setting, you can request axis to calculate intervals approximately equal to your desired interval.
	* @Default {null}
	*/
	desiredIntervals?: number;

	/**Specifies the position of labels at the edge of the axis.
	* @Default {ej.datavisualization.Chart.EdgeLabelPlacement.None. See EdgeLabelPlacement}
	*/
	edgeLabelPlacement?: ej.datavisualization.Chart.EdgeLabelPlacement|string;

	/**Specifies whether to trim the axis label when the width of the label exceeds the maximumLabelWidth.
	* @Default {false}
	*/
	enableTrim?: boolean;

	/**Options for customizing the font of the axis Labels.
	*/
	font?: PrimaryYAxisFont;

	/**Specifies the type of interval in date time axis.
	* @Default {null. See IntervalType}
	*/
	intervalType?: ej.datavisualization.Chart.IntervalType|string;

	/**Specifies whether to inverse the axis.
	* @Default {false}
	*/
	isInversed?: boolean;

	/**Custom formatting for axis label and supports all standard formatting type of numerical and date time values.
	* @Default {null}
	*/
	labelFormat?: string;

	/**Specifies the action to take when the axis labels are overlapping with each other.
	* @Default {ej.datavisualization.Chart.LabelIntersectAction.None}
	*/
	labelIntersectAction?: ej.datavisualization.Chart.LabelIntersectAction|string;

	/**Default Value
	* @Default {outside. See LabelPosition}
	*/
	labelPosition?: ej.datavisualization.Chart.LabelPosition|string;

	/**Logarithmic base value. This is applicable only for logarithmic axis.
	* @Default {10}
	*/
	logBase?: number;

	/**Options for customizing major gird lines.
	*/
	majorGridLines?: PrimaryYAxisMajorGridLines;

	/**Options for customizing the major tick lines.
	*/
	majorTickLines?: PrimaryYAxisMajorTickLines;

	/**Maximum number of labels to be displayed in every 100 pixels.
	* @Default {3}
	*/
	maximumLabels?: number;

	/**Maximum width of the axis label. When the label exceeds the width, the label gets trimmed when the enableTrim is set to true.
	* @Default {ej.datavisualization.Chart.maximumLabelWidth type {int}}
	*/
	maximumLabelWidth?: number;

	/**Options for customizing the minor grid lines.
	*/
	minorGridLines?: PrimaryYAxisMinorGridLines;

	/**Options for customizing the minor tick lines.
	*/
	minorTickLines?: PrimaryYAxisMinorTickLines;

	/**Specifies the number of minor ticks per interval.
	* @Default {null}
	*/
	minorTicksPerInterval?: number;

	/**Unique name of the axis. To associate an axis with the series, you have to set this name to the xAxisName/yAxisName property of the series.
	* @Default {null}
	*/
	name?: string;

	/**Specifies whether to render the axis at the opposite side of its default position.
	* @Default {false}
	*/
	opposedPosition?: boolean;

	/**Specifies the padding for the plot area.
	* @Default {10}
	*/
	plotOffset?: number;

	/**Specifies the padding for the axis range.
	* @Default {ej.datavisualization.Chart.RangePadding.None. See RangePadding}
	*/
	rangePadding?: ej.datavisualization.Chart.RangePadding|string;

	/**Rounds the number to the given number of decimals.
	* @Default {null}
	*/
	roundingPlaces?: number;

	/**Specifies the index of the row to which the axis is associated, when the chart area is divided into multiple plot areas by using rowDefinitions.
	* @Default {null}
	*/
	rowIndex?: number;

	/**Specifies the number of row or plot areas an axis has to span vertically.
	* @Default {null}
	*/
	rowSpan?: number;

	/**Options for customizing the strip lines.
	* @Default {[ ]}
	*/
	stripLine?: Array<PrimaryYAxisStripLine>;

	/**Specifies the position of the axis tick lines.
	* @Default {outside. See TickLinesPosition}
	*/
	tickLinesPosition?: ej.datavisualization.Chart.TickLinesPosition|string;

	/**Options for customizing the axis title.
	*/
	title?: PrimaryYAxisTitle;

	/**Specifies the type of data the axis is handling.
	* @Default {null. See ValueType}
	*/
	valueType?: ej.datavisualization.Chart.ValueType|string;

	/**Show/hides the axis.
	* @Default {true}
	*/
	visible?: boolean;

	/**The axis is scaled by this factor. When zoomFactor is 0.5, the chart is scaled by 200% along this axis. Values ranges from 0 to 1.
	* @Default {1}
	*/
	zoomFactor?: number;

	/**Position of the zoomed axis. Value ranges from 0 to 1
	* @Default {0}
	*/
	zoomPosition?: number;
}

export interface RowDefinitions {

	/**Specifies the unit to measure the height of the row in plotting area.
	* @Default {'pixel'. See Unit}
	*/
	unit?: ej.datavisualization.Chart.Unit|string;

	/**Height of the row in plotting area. Height is measured in either pixel or percentage based on the value of unit property.
	* @Default {50}
	*/
	rowHeight?: number;

	/**Color of the line that indicates the starting point of the row in plotting area.
	* @Default {transparent}
	*/
	lineColor?: string;

	/**Width of the line that indicates the starting point of the row in plot area.
	* @Default {1}
	*/
	lineWidth?: number;
}

export interface SeriesBorder {

	/**Border color of the series.
	* @Default {transparent}
	*/
	color?: string;

	/**Border width of the series.
	* @Default {1}
	*/
	width?: number;

	/**DashArray for border of the series.
	* @Default {null}
	*/
	dashArray?: string;
}

export interface SeriesFont {

	/**Font color of the series text.
	* @Default {#707070}
	*/
	color?: string;

	/**Font Family of the series.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font Style of the series.
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the series.
	* @Default {Regular}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of series text.
	* @Default {1}
	*/
	opacity?: number;

	/**Size of the series text.
	* @Default {12px}
	*/
	size?: string;
}

export interface SeriesMarkerBorder {

	/**Border color of the marker shape.
	* @Default {white}
	*/
	color?: string;

	/**Border width of the marker shape.
	* @Default {3}
	*/
	width?: number;
}

export interface SeriesMarkerDataLabelBorder {

	/**Border color of the data label.
	* @Default {null}
	*/
	color?: string;

	/**Border width of the data label.
	* @Default {0.1}
	*/
	width?: number;
}

export interface SeriesMarkerDataLabelConnectorLine {

	/**Specifies when the connector has to be drawn as Bezier curve or straight line. This is applicable only for Pie and Doughnut chart types.
	* @Default {line. See ConnectorLineType}
	*/
	type?: ej.datavisualization.Chart.Type|string;

	/**Width of the connector.
	* @Default {0.5}
	*/
	width?: number;
}

export interface SeriesMarkerDataLabelFont {

	/**Font family of the data label.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the data label.
	* @Default {normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the data label.
	* @Default {regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the data label.
	* @Default {12px}
	*/
	size?: string;
}

export interface SeriesMarkerDataLabelMargin {

	/**Bottom margin of the text.
	* @Default {5}
	*/
	bottom?: number;

	/**Left margin of the text.
	* @Default {5}
	*/
	left?: number;

	/**Right margin of the text.
	* @Default {5}
	*/
	right?: number;

	/**Top margin of the text.
	* @Default {5}
	*/
	top?: number;
}

export interface SeriesMarkerDataLabel {

	/**Angle of the data label in degrees. Only the text gets rotated, whereas the background and border does not rotate.
	* @Default {null}
	*/
	angle?: number;

	/**Options for customizing the border of the data label.
	*/
	border?: SeriesMarkerDataLabelBorder;

	/**Options for displaying and customizing the line that connects point and data label.
	*/
	connectorLine?: SeriesMarkerDataLabelConnectorLine;

	/**Background color of the data label.
	* @Default {null}
	*/
	fill?: string;

	/**Options for customizing the data label font.
	*/
	font?: SeriesMarkerDataLabelFont;

	/**Horizontal alignment of the data label.
	* @Default {center}
	*/
	horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment|string;

	/**Margin of the text to its background shape. The size of the background shape increases based on the margin applied to its text.
	*/
	margin?: SeriesMarkerDataLabelMargin;

	/**Opacity of the data label.
	* @Default {1}
	*/
	opacity?: number;

	/**Background shape of the data label.
	* @Default {No shape is rendered by default, so its value is â€˜noneâ€™. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Name of a field in data source where datalabel text is displayed.
	*/
	textMappingName?: string;

	/**Specifies the position of the data label. This property can be used only for the series such as column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, candle and OHLC.
	* @Default {top. See TextPosition}
	*/
	textPosition?: ej.datavisualization.Chart.TextPosition|string;

	/**Vertical alignment of the data label.
	* @Default {'center'}
	*/
	verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment|string;

	/**Controls the visibility of the data labels.
	* @Default {false}
	*/
	visible?: boolean;

	/**Custom template to format the data label content. Use â€œpoint.xâ€ and â€œpoint.yâ€ as a placeholder text to display the corresponding data pointâ€™s x and y value.
	*/
	template?: string;

	/**Moves the label vertically by some offset.
	* @Default {0}
	*/
	offset?: number;
}

export interface SeriesMarkerSize {

	/**Height of the marker.
	* @Default {6}
	*/
	height?: number;

	/**Width of the marker.
	* @Default {6}
	*/
	width?: number;
}

export interface SeriesMarker {

	/**Options for customizing the border of the marker shape.
	*/
	border?: SeriesMarkerBorder;

	/**Options for displaying and customizing data labels.
	*/
	dataLabel?: SeriesMarkerDataLabel;

	/**Color of the marker shape.
	* @Default {null}
	*/
	fill?: string;

	/**The URL for the Image that is to be displayed as marker. In order to display image as marker, set series.marker.shape as â€˜imageâ€™.
	*/
	imageUrl?: string;

	/**Opacity of the marker.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the shape of the marker.
	* @Default {circle. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Options for customizing the size of the marker shape.
	*/
	size?: SeriesMarkerSize;

	/**Controls the visibility of the marker shape.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface SeriesEmptyPointSettingsStyleBorder {

	/**Border color of the empty point.
	*/
	color?: string;

	/**Border width of the empty point.
	* @Default {1}
	*/
	width?: number;
}

export interface SeriesEmptyPointSettingsStyle {

	/**Color of the empty point.
	*/
	color?: string;

	/**Options for customizing border of the empty point in the series.
	*/
	border?: SeriesEmptyPointSettingsStyleBorder;
}

export interface SeriesEmptyPointSettings {

	/**Controls the visibility of the empty point.
	* @Default {true}
	*/
	visible?: boolean;

	/**Specifies the mode of empty point.
	* @Default {gap}
	*/
	displayMode?: ej.datavisualization.Chart.EmptyPointMode|string;

	/**Options for customizing the color and border of the empty point in the series.
	*/
	style?: SeriesEmptyPointSettingsStyle;
}

export interface SeriesConnectorLine {

	/**Width of the connector line.
	* @Default {1}
	*/
	width?: number;

	/**Color of the connector line.
	* @Default {#565656}
	*/
	color?: string;

	/**DashArray of the connector line.
	* @Default {null}
	*/
	dashArray?: string;

	/**DashArray of the connector line.
	* @Default {1}
	*/
	opacity?: number;
}

export interface SeriesErrorBarCap {

	/**Show/Hides the error bar cap.
	* @Default {true}
	*/
	visible?: boolean;

	/**Width of the error bar cap.
	* @Default {1}
	*/
	width?: number;

	/**Length of the error bar cap.
	* @Default {1}
	*/
	length?: number;

	/**Color of the error bar cap.
	* @Default {#000000}
	*/
	fill?: string;
}

export interface SeriesErrorBar {

	/**Show/hides the error bar
	* @Default {visible}
	*/
	visibility?: boolean;

	/**Specifies the type of error bar.
	* @Default {FixedValue}
	*/
	type?: ej.datavisualization.Chart.ErrorBarType|string;

	/**Specifies the mode of error bar.
	* @Default {vertical}
	*/
	mode?: ej.datavisualization.Chart.ErrorBarMode|string;

	/**Specifies the direction of error bar.
	* @Default {both}
	*/
	direction?: ej.datavisualization.Chart.ErrorBarDirection|string;

	/**Value of vertical error bar.
	* @Default {3}
	*/
	verticalErrorValue?: number;

	/**Value of horizontal  error bar.
	* @Default {1}
	*/
	horizontalErrorValue?: number;

	/**Value of positive horizontal error bar.
	* @Default {1}
	*/
	horizontalPositiveErrorValue?: number;

	/**Value of negative horizontal error bar.
	* @Default {1}
	*/
	horizontalNegativeErrorValue?: number;

	/**Value of positive vertical error bar.
	* @Default {5}
	*/
	verticalPositiveErrorValue?: number;

	/**Value of negative vertical error bar.
	* @Default {5}
	*/
	verticalNegativeErrorValue?: number;

	/**Fill color of the error bar.
	* @Default {#000000}
	*/
	fill?: string;

	/**Width of the error bar.
	* @Default {1}
	*/
	width?: number;

	/**Options for customizing the error bar cap.
	*/
	cap?: SeriesErrorBarCap;
}

export interface SeriesPointsBorder {

	/**Border color of the point.
	* @Default {null}
	*/
	color?: string;

	/**Border width of the point.
	* @Default {null}
	*/
	width?: number;
}

export interface SeriesPointsMarkerBorder {

	/**Border color of the marker shape.
	* @Default {white}
	*/
	color?: string;

	/**Border width of the marker shape.
	* @Default {3}
	*/
	width?: number;
}

export interface SeriesPointsMarkerDataLabelBorder {

	/**Border color of the data label.
	* @Default {null}
	*/
	color?: string;

	/**Border width of the data label.
	* @Default {0.1}
	*/
	width?: number;
}

export interface SeriesPointsMarkerDataLabelConnectorLine {

	/**Specifies when the connector has to be drawn as Bezier curve or straight line. This is applicable only for Pie and Doughnut chart types.
	* @Default {line. See ConnectorLineType}
	*/
	type?: ej.datavisualization.Chart.ConnectorLineType|string;

	/**Width of the connector.
	* @Default {0.5}
	*/
	width?: number;
}

export interface SeriesPointsMarkerDataLabelFont {

	/**Font family of the data label.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style of the data label.
	* @Default {normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight of the data label.
	* @Default {regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the text.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size of the data label.
	* @Default {12px}
	*/
	size?: string;
}

export interface SeriesPointsMarkerDataLabelMargin {

	/**Bottom margin of the text.
	* @Default {5}
	*/
	bottom?: number;

	/**Left margin of the text.
	* @Default {5}
	*/
	left?: number;

	/**Right margin of the text.
	* @Default {5}
	*/
	right?: number;

	/**Top margin of the text.
	* @Default {5}
	*/
	top?: number;
}

export interface SeriesPointsMarkerDataLabel {

	/**Angle of the data label in degrees. Only the text gets rotated, whereas the background and border does not rotate.
	* @Default {null}
	*/
	angle?: number;

	/**Options for customizing the border of the data label.
	*/
	border?: SeriesPointsMarkerDataLabelBorder;

	/**Options for displaying and customizing the line that connects point and data label.
	*/
	connectorLine?: SeriesPointsMarkerDataLabelConnectorLine;

	/**Background color of the data label.
	* @Default {null}
	*/
	fill?: string;

	/**Options for customizing the data label font.
	*/
	font?: SeriesPointsMarkerDataLabelFont;

	/**Horizontal alignment of the data label.
	* @Default {center}
	*/
	horizontalTextAlignment?: ej.datavisualization.Chart.HorizontalTextAlignment|string;

	/**Margin of the text to its background shape. The size of the background shape increases based on the margin applied to its text.
	*/
	margin?: SeriesPointsMarkerDataLabelMargin;

	/**Opacity of the data label.
	* @Default {1}
	*/
	opacity?: number;

	/**Background shape of the data label.
	* @Default {No shape is rendered by default, so its value is â€˜noneâ€™. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Specifies the position of the data label. This property can be used only for the series such as column, bar, stacked column, stacked bar, 100% stacked column, 100% stacked bar, candle and OHLC.
	* @Default {top. See TextPosition}
	*/
	textPosition?: ej.datavisualization.Chart.TextPosition|string;

	/**Vertical alignment of the data label.
	* @Default {'center'}
	*/
	verticalTextAlignment?: ej.datavisualization.Chart.VerticalTextAlignment|string;

	/**Controls the visibility of the data labels.
	* @Default {false}
	*/
	visible?: boolean;

	/**Custom template to format the data label content. Use â€œpoint.xâ€ and â€œpoint.yâ€ as a placeholder text to display the corresponding data pointâ€™s x and y value.
	*/
	template?: string;

	/**Moves the label vertically by specified offset.
	* @Default {0}
	*/
	offset?: number;
}

export interface SeriesPointsMarkerSize {

	/**Height of the marker.
	* @Default {6}
	*/
	height?: number;

	/**Width of the marker.
	* @Default {6}
	*/
	width?: number;
}

export interface SeriesPointsMarker {

	/**Options for customizing the border of the marker shape.
	*/
	border?: SeriesPointsMarkerBorder;

	/**Options for displaying and customizing data label.
	*/
	dataLabel?: SeriesPointsMarkerDataLabel;

	/**Color of the marker shape.
	* @Default {null}
	*/
	fill?: string;

	/**The URL for the Image that is to be displayed as marker. In order to display image as marker, set series.marker.shape as â€˜imageâ€™.
	*/
	imageUrl?: string;

	/**Opacity of the marker.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the shape of the marker.
	* @Default {circle. See Shape}
	*/
	shape?: ej.datavisualization.Chart.Shape|string;

	/**Options for customizing the size of the marker shape.
	*/
	size?: SeriesPointsMarkerSize;

	/**Controls the visibility of the marker shape.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface SeriesPoints {

	/**Options for customizing the border of a point. This is applicable only for column type series and accumulation type series.
	*/
	border?: SeriesPointsBorder;

	/**To show/hide the intermediate summary from the last intermediate point.
	* @Default {false}
	*/
	showIntermediateSum?: boolean;

	/**To show/hide the total summary of the waterfall series.
	* @Default {false}
	*/
	showTotalSum?: boolean;

	/**Close value of the point. Close value is applicable only for financial type series.
	* @Default {null}
	*/
	close?: number;

	/**Size of a bubble in the bubble series. This is applicable only for the bubble series.
	* @Default {null}
	*/
	size?: number;

	/**Background color of the point. This is applicable only for column type series and accumulation type series.
	* @Default {null}
	*/
	fill?: string;

	/**High value of the point. High value is applicable only for financial type series, range area series and range column series.
	* @Default {null}
	*/
	high?: number;

	/**Low value of the point. Low value is applicable only for financial type series, range area series and range column series.
	* @Default {null}
	*/
	low?: number;

	/**Options for displaying and customizing marker for a data point. Marker contains shapes and/or data labels.
	*/
	marker?: SeriesPointsMarker;

	/**Open value of the point. This is applicable only for financial type series.
	* @Default {null}
	*/
	open?: number;

	/**Datalabel text for the point.
	* @Default {null}
	*/
	text?: string;

	/**X value of the point.
	* @Default {null}
	*/
	x?: number;

	/**Y value of the point.
	* @Default {null}
	*/
	y?: number;
}

export interface SeriesTooltipBorder {

	/**Border Color of the tooltip.
	* @Default {null}
	*/
	color?: string;

	/**Border Width of the tooltip.
	* @Default {1}
	*/
	width?: number;
}

export interface SeriesTooltip {

	/**Options for customizing the border of the tooltip.
	*/
	border?: SeriesTooltipBorder;

	/**Customize the corner radius of the tooltip rectangle.
	* @Default {0}
	*/
	rx?: number;

	/**Customize the corner radius of the tooltip rectangle.
	* @Default {0}
	*/
	ry?: number;

	/**Specifies the duration, the tooltip has to be displayed.
	* @Default {500ms}
	*/
	duration?: string;

	/**Enables/disables the animation of the tooltip when moving from one point to another.
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Background color of the tooltip.
	* @Default {null}
	*/
	fill?: string;

	/**Format of the tooltip content.
	* @Default {#point.x# : #point.y#}
	*/
	format?: string;

	/**Opacity of the tooltip.
	* @Default {0.95}
	*/
	opacity?: number;

	/**Custom template to format the tooltip content. Use â€œpoint.xâ€ and â€œpoint.yâ€ as a placeholder text to display the corresponding data pointâ€™s x and y value.
	* @Default {null}
	*/
	template?: string;

	/**Controls the visibility of the tooltip.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface SeriesTrendlines {

	/**Show/hides the trendline.
	*/
	visibility?: boolean;

	/**Specifies the type of trendline for the series.
	* @Default {linear. See TrendlinesType}
	*/
	type?: string;

	/**Name for the trendlines that is to be displayed in legend text.
	* @Default {Trendline}
	*/
	name?: string;

	/**Fill color of the trendlines.
	* @Default {#0000FF}
	*/
	fill?: string;

	/**Width of the trendlines.
	* @Default {1}
	*/
	width?: number;

	/**Opacity of the trendline.
	* @Default {1}
	*/
	opacity?: number;

	/**Pattern of dashes and gaps used to stroke the trendline.
	*/
	dashArray?: string;

	/**Future trends of the current series.
	* @Default {0}
	*/
	forwardForecast?: number;

	/**Past trends of the current series.
	* @Default {0}
	*/
	backwardForecast?: number;

	/**Specifies the order of polynomial trendlines.
	* @Default {0}
	*/
	polynomialOrder?: number;

	/**Specifies the moving average starting period  value.
	* @Default {2}
	*/
	period?: number;
}

export interface SeriesHighlightSettingsBorder {

	/**Border color of the series/point on highlight.
	*/
	color?: string;

	/**Border width of the series/point on highlight.
	* @Default {2}
	*/
	width?: string;
}

export interface SeriesHighlightSettings {

	/**Enables/disables the ability to highlight series or data point interactively.
	* @Default {false}
	*/
	enable?: boolean;

	/**Specifies whether series or data point has to be highlighted.
	* @Default {series. See Mode}
	*/
	mode?: ej.datavisualization.Chart.Mode|string;

	/**Color of the series/point on highlight.
	*/
	color?: string;

	/**Opacity of the series/point on highlight.
	* @Default {0.6}
	*/
	opacity?: number;

	/**Options for customizing the border of series on highlight.
	*/
	border?: SeriesHighlightSettingsBorder;

	/**Specifies the pattern for the series/point on highlight.
	* @Default {none. See Pattern}
	*/
	pattern?: string;

	/**Custom pattern for the series on highlight.
	*/
	customPattern?: string;
}

export interface SeriesSelectionSettingsBorder {

	/**Border color of the series/point on selection.
	*/
	color?: string;

	/**Border width of the series/point on selection.
	* @Default {2}
	*/
	width?: string;
}

export interface SeriesSelectionSettings {

	/**Enables/disables the ability to select a series/data point interactively.
	* @Default {false}
	*/
	enable?: boolean;

	/**Specifies whether series or data point has to be selected.
	* @Default {series. See Mode}
	*/
	mode?: ej.datavisualization.Chart.Mode|string;

	/**Specifies the type of selection.
	* @Default {single}
	*/
	type?: ej.datavisualization.Chart.SelectionType|string;

	/**Color of the series/point on selection.
	*/
	color?: string;

	/**Opacity of the series/point on selection.
	* @Default {0.6}
	*/
	opacity?: number;

	/**Options for customizing the border of series on selection.
	*/
	border?: SeriesSelectionSettingsBorder;

	/**Specifies the pattern for the series/point on selection.
	* @Default {none. See Pattern}
	*/
	pattern?: string;

	/**Custom pattern for the series on selection.
	*/
	customPattern?: string;
}

export interface Series {

	/**Color of the point, where the close is up in financial chart.
	* @Default {null}
	*/
	bearFillColor?: string;

	/**Options for customizing the border of the series.
	*/
	border?: SeriesBorder;

	/**Color of the point, where the close is down in financial chart.
	* @Default {null}
	*/
	bullFillColor?: string;

	/**Pattern of dashes and gaps used to stroke the line type series.
	*/
	dashArray?: string;

	/**Specifies the dataSource for the series. It can be an array of JSON objects or an instance of ej.DataManager.
	* @Default {null}
	*/
	dataSource?: any;

	/**Controls the size of the hole in doughnut series. Value ranges from 0 to 1.
	* @Default {0.4}
	*/
	doughnutCoefficient?: number;

	/**Controls the size of the doughnut series. Value ranges from 0 to 1.
	* @Default {0.8}
	*/
	doughnutSize?: number;

	/**Type of series to be drawn in radar or polar series.
	* @Default {line. See DrawType}
	*/
	drawType?: boolean;

	/**Enable/disable the animation of series.
	* @Default {false}
	*/
	enableAnimation?: boolean;

	/**To avoid overlapping of data labels smartly.
	* @Default {null}
	*/
	enableSmartLabels?: number;

	/**End angle of pie/doughnut series. For a complete circle, it has to be 360, by default.
	* @Default {null}
	*/
	endAngle?: number;

	/**Explodes the pie/doughnut slices on mouse move.
	* @Default {false}
	*/
	explode?: boolean;

	/**Explodes all the slice of pie/doughnut on render.
	* @Default {null}
	*/
	explodeAll?: boolean;

	/**Index of the point to be exploded from pie/doughnut/pyramid/funnel.
	* @Default {null}
	*/
	explodeIndex?: number;

	/**Specifies the distance of the slice from the center, when it is exploded.
	* @Default {25}
	*/
	explodeOffset?: number;

	/**Fill color of the series.
	* @Default {null}
	*/
	fill?: string;

	/**Options for customizing the series font.
	*/
	font?: SeriesFont;

	/**Specifies the height of the funnel in funnel series. Values can be in both pixel and percentage.
	* @Default {32.7%}
	*/
	funnelHeight?: string;

	/**Specifies the width of the funnel in funnel series. Values can be in both pixel and percentage.
	* @Default {11.6%}
	*/
	funnelWidth?: string;

	/**Gap between the slices of pyramid/funnel series.
	* @Default {0}
	*/
	gapRatio?: number;

	/**Specifies whether to join start and end point of a line/area series used in polar/radar chart to form a closed path.
	* @Default {true}
	*/
	isClosed?: boolean;

	/**Specifies whether to stack the column series in polar/radar charts.
	* @Default {true}
	*/
	isStacking?: boolean;

	/**Renders the chart vertically. This is applicable only for cartesian type series.
	* @Default {false}
	*/
	isTransposed?: boolean;

	/**Position of the data label in pie/doughnut/pyramid/funnel series. OutsideExtended position is not applicable for pyramid/funnel.
	* @Default {inside. See LabelPosition}
	*/
	labelPosition?: ej.datavisualization.Chart.LabelPosition|string;

	/**Specifies the line cap of the series.
	* @Default {Butt. See LineCap}
	*/
	lineCap?: ej.datavisualization.Chart.LineCap|string;

	/**Specifies the type of shape to be used where two lines meet.
	* @Default {Round. See LineJoin}
	*/
	lineJoin?: ej.datavisualization.Chart.LineJoin|string;

	/**Options for displaying and customizing marker for individual point in a series. Marker contains shapes and/or data labels.
	*/
	marker?: SeriesMarker;

	/**Opacity of the series.
	* @Default {1}
	*/
	opacity?: number;

	/**Name of a field in data source where fill color for all the data points is generated.
	*/
	palette?: string;

	/**Controls the size of pie series. Value ranges from 0 to 1.
	* @Default {0.8}
	*/
	pieCoefficient?: number;

	/**Options for customizing the empty point in the series.
	*/
	emptyPointSettings?: SeriesEmptyPointSettings;

	/**Fill color for the positive column of the waterfall.
	* @Default {null}
	*/
	positiveFill?: string;

	/**Options for customizing the waterfall connector line.
	*/
	connectorLine?: SeriesConnectorLine;

	/**Options to customize the error bar in series.
	*/
	errorBar?: SeriesErrorBar;

	/**Option to add data points; each point should have x and y property. Also, optionally, you can customize the points color, border, marker by using fill, border and marker options.
	*/
	points?: Array<SeriesPoints>;

	/**Specifies the mode of the pyramid series.
	* @Default {linear}
	*/
	pyramidMode?: ej.datavisualization.Chart.PyramidMode|string;

	/**Specifies ej.Query to select data from dataSource. This property is applicable only when the dataSource is ej.DataManager.
	* @Default {null}
	*/
	query?: any;

	/**Start angle from where the pie/doughnut series renders. It starts from 0, by default.
	* @Default {null}
	*/
	startAngle?: number;

	/**Options for customizing the tooltip of chart.
	*/
	tooltip?: SeriesTooltip;

	/**Specifies the type of the series to render in chart.
	* @Default {column. see Type}
	*/
	type?: ej.datavisualization.Chart.Type|string;

	/**Controls the visibility of the series.
	* @Default {visible}
	*/
	visibility?: string;

	/**Specifies the name of the x-axis that has to be associated with this series. Add an axis instance with this name to axes collection.
	* @Default {null}
	*/
	xAxisName?: string;

	/**Name of the property in the datasource that contains x value for the series.
	* @Default {null}
	*/
	xName?: string;

	/**Specifies the name of the y-axis that has to be associated with this series. Add an axis instance with this name to axes collection.
	* @Default {null}
	*/
	yAxisName?: string;

	/**Name of the property in the datasource that contains y value for the series.
	* @Default {null}
	*/
	yName?: string;

	/**Name of the property in the datasource that contains high value for the series.
	* @Default {null}
	*/
	high?: string;

	/**Name of the property in the datasource that contains low value for the series.
	* @Default {null}
	*/
	low?: string;

	/**Name of the property in the datasource that contains open value for the series.
	* @Default {null}
	*/
	open?: string;

	/**Name of the property in the datasource that contains close value for the series.
	* @Default {null}
	*/
	close?: string;

	/**Name of the property in the datasource that contains the size value for the bubble series.
	* @Default {null}
	*/
	size?: string;

	/**Option to add trendlines to chart.
	*/
	trendlines?: Array<SeriesTrendlines>;

	/**Options for customizing the appearance of the series or data point while highlighting.
	*/
	highlightSettings?: SeriesHighlightSettings;

	/**Options for customizing the appearance of the series/data point on selection.
	*/
	selectionSettings?: SeriesSelectionSettings;
}

export interface Size {

	/**Height of the Chart. Height can be specified in either pixel or percentage.
	* @Default {'450'}
	*/
	height?: string;

	/**Width of the Chart. Width can be specified in either pixel or percentage.
	* @Default {'450'}
	*/
	width?: string;
}

export interface TitleBorder {

	/**Width of the title border.
	* @Default {1}
	*/
	width?: number;

	/**color of the title border.
	* @Default {transparent}
	*/
	color?: string;

	/**opacity of the title border.
	* @Default {0.8}
	*/
	opacity?: number;

	/**opacity of the title border.
	* @Default {0.8}
	*/
	cornerRadius?: number;
}

export interface TitleFont {

	/**Font family for Chart title.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style for Chart title.
	* @Default {Normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight for Chart title.
	* @Default {Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the Chart title.
	* @Default {0.5}
	*/
	opacity?: number;

	/**Font size for Chart title.
	* @Default {20px}
	*/
	size?: string;
}

export interface TitleSubTitleFont {

	/**Font family of sub title.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Font style for sub title.
	* @Default {Normal. See FontStyle}
	*/
	fontStyle?: ej.datavisualization.Chart.FontStyle|string;

	/**Font weight for sub title.
	* @Default {Regular. See FontWeight}
	*/
	fontWeight?: ej.datavisualization.Chart.FontWeight|string;

	/**Opacity of the sub title.
	* @Default {1}
	*/
	opacity?: number;

	/**Font size for sub title.
	* @Default {12px}
	*/
	size?: string;
}

export interface TitleSubTitleBorder {

	/**Width of the subtitle border.
	* @Default {1}
	*/
	width?: number;

	/**color of the subtitle border.
	* @Default {transparent}
	*/
	color?: string;

	/**opacity of the subtitle border.
	* @Default {0.8}
	*/
	opacity?: number;

	/**opacity of the subtitle border.
	* @Default {0.8}
	*/
	cornerRadius?: number;
}

export interface TitleSubTitle {

	/**Options for customizing the font of sub title.
	*/
	font?: TitleSubTitleFont;

	/**Background color for the chart subtitle.
	* @Default {transparent}
	*/
	background?: string;

	/**Options to customize the border of the title.
	*/
	border?: TitleSubTitleBorder;

	/**Text to be displayed in sub title.
	*/
	text?: string;

	/**Alignment of sub title text.
	* @Default {far. See TextAlignment}
	*/
	textAlignment?: ej.datavisualization.Chart.Alignment|string;
}

export interface Title {

	/**Background color for the chart title.
	* @Default {transparent}
	*/
	background?: string;

	/**Options to customize the border of the title.
	*/
	border?: TitleBorder;

	/**Options for customizing the font of Chart title.
	*/
	font?: TitleFont;

	/**Options to customize the sub title of Chart.
	*/
	subTitle?: TitleSubTitle;

	/**Text to be displayed in Chart title.
	*/
	text?: string;

	/**Alignment of the title text.
	* @Default {Center. See TextAlignment}
	*/
	textAlignment?: ej.datavisualization.Chart.Alignment|string;
}

export interface Zooming {

	/**Enables or disables zooming.
	* @Default {false}
	*/
	enable?: boolean;

	/**Enable or disables the differed zooming. When it is enabled, chart is updated only on mouse up action while zooming and panning.
	* @Default {false}
	*/
	enableDeferredZoom?: boolean;

	/**Enables/disables the ability to zoom the chart on moving the mouse wheel.
	* @Default {false}
	*/
	enableMouseWheel?: boolean;

	/**Specifies whether to allow zooming the chart vertically or horizontally or in both ways.
	* @Default {'x,y'}
	*/
	type?: string;

	/**To display user specified buttons in zooming toolbar.
	* @Default {[zoomIn, zoomOut, zoom, pan, reset]}
	*/
	toolbarItems?: Array<any>;
}
}
module Chart
{
enum CoordinateUnit
{
//string
None,
//string
Pixels,
//string
Points,
}
}
module Chart
{
enum HorizontalAlignment
{
//string
Left,
//string
Right,
//string
Middle,
}
}
module Chart
{
enum Region
{
//string
Chart,
//string
Series,
}
}
module Chart
{
enum VerticalAlignment
{
//string
Top,
//string
Bottom,
//string
Middle,
}
}
module Chart
{
enum Unit
{
//string
Percentage,
//string
Pixel,
}
}
module Chart
{
enum DrawType
{
//string
Line,
//string
Area,
//string
Column,
}
}
module Chart
{
enum FontStyle
{
//string
Normal,
//string
Italic,
}
}
module Chart
{
enum FontWeight
{
//string
Regular,
//string
Bold,
//string
Lighter,
}
}
module Chart
{
enum LabelPosition
{
//string
Inside,
//string
Outside,
//string
OutsideExtended,
}
}
module Chart
{
enum LineCap
{
//string
Butt,
//string
Round,
//string
Square,
}
}
module Chart
{
enum LineJoin
{
//string
Round,
//string
Bevel,
//string
Miter,
}
}
module Chart
{
enum ConnectorLineType
{
//string
Line,
//string
Bezier,
}
}
module Chart
{
enum HorizontalTextAlignment
{
//string
Center,
//string
Near,
//string
Far,
}
}
module Chart
{
enum Shape
{
//string
None,
//string
LeftArrow,
//string
RightArrow,
//string
Circle,
//string
Cross,
//string
HorizLine,
//string
VertLine,
//string
Diamond,
//string
Rectangle,
//string
Triangle,
//string
Hexagon,
//string
Pentagon,
//string
Star,
//string
Ellipse,
//string
Trapezoid,
//string
UpArrow,
//string
DownArrow,
//string
Image,
//string
SeriesType,
}
}
module Chart
{
enum TextPosition
{
//string
Top,
//string
Bottom,
//string
Middle,
}
}
module Chart
{
enum VerticalTextAlignment
{
//string
Center,
//string
Near,
//string
Far,
}
}
module Chart
{
enum PyramidMode
{
//string
Linear,
//string
Surface,
}
}
module Chart
{
enum Type
{
//string
Area,
//string
Line,
//string
Spline,
//string
Column,
//string
Scatter,
//string
Bubble,
//string
SplineArea,
//string
StepArea,
//string
StepLine,
//string
Pie,
//string
Hilo,
//string
HiloOpenClose,
//string
Candle,
//string
Bar,
//string
StackingArea,
//string
StackingArea100,
//string
RangeColumn,
//string
StackingColumn,
//string
StackingColumn100,
//string
StackingBar,
//string
StackingBar100,
//string
Pyramid,
//string
Funnel,
//string
Doughnut,
//string
Polar,
//string
Radar,
//string
RangeArea,
}
}
module Chart
{
enum EmptyPointMode
{
//string
Gap,
//string
Zero,
//string
Average,
}
}
module Chart
{
enum ErrorBarType
{
//string
FixedValue,
//string
Percentage,
//string
StandardDeviation,
//string
StandardError,
}
}
module Chart
{
enum ErrorBarMode
{
//string
Both,
//string
Vertical,
//string
Horizontal,
}
}
module Chart
{
enum ErrorBarDirection
{
//string
Both,
//string
Plus,
//string
Minus,
}
}
module Chart
{
enum Mode
{
//string
Series,
//string
Point,
//string
Cluster,
}
}
module Chart
{
enum SelectionType
{
//string
Single,
//string
Multiple,
}
}
module Chart
{
enum CrosshairType
{
//string
Crosshair,
//string
Trackball,
}
}
module Chart
{
enum Alignment
{
//string
Center,
//string
Near,
//string
Far,
}
}
module Chart
{
enum Position
{
//string
Left,
//string
Right,
//string
Top,
//string
Bottom,
}
}
module Chart
{
enum TextOverflow
{
//string
None,
//string
Trim,
//string
Wrap,
//string
WrapAndTrim,
}
}
module Chart
{
enum EdgeLabelPlacement
{
//string
None,
//string
Shift,
//string
Hide,
}
}
module Chart
{
enum IntervalType
{
//string
Days,
//string
Hours,
//string
Seconds,
//string
Milliseconds,
//string
Minutes,
//string
Months,
//string
Years,
}
}
module Chart
{
enum LabelIntersectAction
{
//string
None,
//string
Rotate90,
//string
Rotate45,
//string
Wrap,
//string
WrapByword,
//string
Trim,
//string
Hide,
//string
MultipleRows,
}
}
module Chart
{
enum RangePadding
{
//string
Additional,
//string
Normal,
//string
None,
//string
Round,
}
}
module Chart
{
enum TextAlignment
{
//string
MiddleTop,
//string
MiddleCenter,
//string
MiddleBottom,
}
}
module Chart
{
enum ZIndex
{
//string
Inside,
//string
Over,
}
}
module Chart
{
enum TickLinesPosition
{
//string
Inside,
//string
Outside,
}
}
module Chart
{
enum ValueType
{
//string
Double,
//string
Category,
//string
DateTime,
//string
Logarithmic,
}
}
module Chart
{
enum Theme
{
//string
Azure,
//string
FlatLight,
//string
FlatDark,
//string
Azuredark,
//string
Lime,
//string
LimeDark,
//string
Saffron,
//string
SaffronDark,
//string
GradientLight,
//string
GradientDark,
}
}

class RangeNavigator extends ej.Widget {
	static fn: RangeNavigator;
	constructor(element: JQuery, options?: RangeNavigator.Model);
	constructor(element: Element, options?: RangeNavigator.Model);
	model:RangeNavigator.Model;
	defaults:RangeNavigator.Model;

	/** destroy the range navigator widget
	* @returns {void}
	*/
	_destroy (): void;
}
export module RangeNavigator{

export interface Model {

	/**Toggles the placement of slider exactly on the place it left or on the nearest interval.
	* @Default {false}
	*/
	allowSnapping?: boolean;

	/**Specifies the data source for range navigator.
	*/
	dataSource?: any;

	/**Sets a value whether to make the range navigator responsive on resize.
	* @Default {false}
	*/
	enableAutoResizing?: boolean;

	/**Toggles the redrawing of chart on moving the sliders.
	* @Default {true}
	*/
	enableDeferredUpdate?: boolean;

	/**Toggles the direction of rendering the range navigator control.
	* @Default {false}
	*/
	enableRTL?: boolean;

	/**Options for customizing the labels colors, font, style, size, horizontalAlignment and opacity.
	*/
	labelSettings?: LabelSettings;

	/**This property is to specify the localization of range navigator.
	* @Default {en-US}
	*/
	locale?: string;

	/**Options for customizing the range navigator.
	*/
	navigatorStyleSettings?: NavigatorStyleSettings;

	/**Padding specifies the gap between the container and the range navigator.
	* @Default {0}
	*/
	padding?: string;

	/**If the range is not given explicitly, range will be calculated automatically.
	* @Default {none}
	*/
	rangePadding?: ej.datavisualization.RangeNavigator.RangePadding|string;

	/**Options for customizing the starting and ending ranges.
	*/
	rangeSettings?: RangeSettings;

	/**selectedData is for getting the data when the &quot;rangeChanged&quot; event trigger from client side.
	*/
	selectedData?: any;

	/**Options for customizing the start and end range values.
	*/
	selectedRangeSettings?: SelectedRangeSettings;

	/**Contains property to customize the hight and width of range navigator.
	*/
	sizeSettings?: SizeSettings;

	/**By specifying this property the user can change the theme of the range navigator.
	* @Default {null}
	*/
	theme?: string;

	/**Options for customizing the tooltip in range navigator.
	*/
	tooltipSettings?: TooltipSettings;

	/**Options for configuring minor grid lines, major grid lines, axis line of axis.
	*/
	valueAxisSettings?: ValueAxisSettings;

	/**You can plot data of type date time or numeric. This property determines the type of data that this axis will handle.
	* @Default {datetime}
	*/
	valueType?: ej.datavisualization.RangeNavigator.ValueType|string;

	/**Specifies the xName for dataSource. This is used to take the x values from dataSource
	*/
	xName?: any;

	/**Specifies the yName for dataSource. This is used to take the y values from dataSource
	*/
	yName?: any;

	/**Fires on load of range navigator.*/
	load? (e: LoadEventArgs): void;

	/**Fires after range navigator is loaded.*/
	loaded? (e: LoadedEventArgs): void;

	/**Fires on changing the range of range navigator.*/
	rangeChanged? (e: RangeChangedEventArgs): void;
}

export interface LoadEventArgs {

	/**parameters from range navigator
	*/
	Data?: any;

	/**if the event should be canceled; otherwise, false.
	*/
	cancel?: boolean;

	/**returns the range navigator model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface LoadedEventArgs {

	/**parameters from range navigator
	*/
	Data?: any;

	/**if the event should be canceled; otherwise, false.
	*/
	cancel?: boolean;

	/**returns the range navigator model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface RangeChangedEventArgs {

	/**parameters from range navigator
	*/
	Data?: any;

	/**if the event should be canceled; otherwise, false.
	*/
	cancel?: boolean;

	/**returns the range navigator model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;
}

export interface LabelSettingsHigherLevelBorder {

	/**Specifies the border color of grid lines.
	* @Default {transparent}
	*/
	color?: string;

	/**Specifies the border width of grid lines.
	* @Default {0.5}
	*/
	width?: string;
}

export interface LabelSettingsHigherLevelGridLineStyle {

	/**Specifies the color of grid lines in higher level.
	* @Default {#B5B5B5}
	*/
	color?: string;

	/**Specifies the dashArray of grid lines in higher level.
	* @Default {20 5 0}
	*/
	dashArray?: string;

	/**Specifies the width of grid lines in higher level.
	* @Default {#B5B5B5}
	*/
	width?: string;
}

export interface LabelSettingsHigherLevelStyleFont {

	/**Specifies the label font color. Labels render with the specified font color.
	* @Default {black}
	*/
	color?: string;

	/**Specifies the label font family. Labels render with the specified font family.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the label font style. Labels render with the specified font style.
	* @Default {Normal}
	*/
	fontStyle?: string;

	/**Specifies the label font weight. Labels render with the specified font weight.
	* @Default {regular}
	*/
	fontWeight?: string;

	/**Specifies the label opacity. Labels render with the specified opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the label font size. Labels render with the specified font size.
	* @Default {12px}
	*/
	size?: string;
}

export interface LabelSettingsHigherLevelStyle {

	/**Options for customizing the font properties.
	*/
	font?: LabelSettingsHigherLevelStyleFont;

	/**Specifies the horizontal text alignment of the text in label.
	* @Default {middle}
	*/
	horizontalAlignment?: string;
}

export interface LabelSettingsHigherLevel {

	/**Options for customizing the border of grid lines in higher level.
	*/
	border?: LabelSettingsHigherLevelBorder;

	/**Specifies the fill color of higher level labels.
	* @Default {transparent}
	*/
	fill?: string;

	/**Options for customizing the grid line colors, width, dashArray, border.
	*/
	gridLineStyle?: LabelSettingsHigherLevelGridLineStyle;

	/**Specifies the intervalType for higher level labels. See IntervalType
	* @Default {years}
	*/
	intervalType?: ej.datavisualization.RangeNavigator.IntervalType|string;

	/**Specifies the position of the labels to render either inside or outside of plot area
	* @Default {outside}
	*/
	labelPlacement?: ej.datavisualization.RangeNavigator.LabelPlacement|string;

	/**Specifies the position of the labels in higher level
	* @Default {top}
	*/
	position?: ej.datavisualization.RangeNavigator.Position|string;

	/**Options for customizing the style of higher level labels.
	*/
	style?: LabelSettingsHigherLevelStyle;

	/**Toggles the visibility of higher level labels.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface LabelSettingsLowerLevelBorder {

	/**Specifies the border color of grid lines.
	* @Default {transparent}
	*/
	color?: string;

	/**Specifies the border width of grid lines.
	* @Default {0.5}
	*/
	width?: string;
}

export interface LabelSettingsLowerLevelGridLineStyle {

	/**Specifies the color of grid lines in lower level.
	* @Default {#B5B5B5}
	*/
	color?: string;

	/**Specifies the dashArray of gridLines in lowerLevel.
	* @Default {20 5 0}
	*/
	dashArray?: string;

	/**Specifies the width of grid lines in lower level.
	* @Default {#B5B5B5}
	*/
	width?: string;
}

export interface LabelSettingsLowerLevelStyleFont {

	/**Specifies the color of labels. Label text render in this specified color.
	* @Default {black}
	*/
	color?: string;

	/**Specifies the font family of labels. Label text render in this specified font family.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the font style of labels. Label text render in this specified font style.
	* @Default {Normal}
	*/
	fontStyle?: string;

	/**Specifies the font weight of labels. Label text render in this specified font weight.
	* @Default {regular}
	*/
	fontWeight?: string;

	/**Specifies the opacity of labels. Label text render in this specified opacity.
	* @Default {12px}
	*/
	opacity?: string;

	/**Specifies the size of labels. Label text render in this specified size.
	* @Default {12px}
	*/
	size?: string;
}

export interface LabelSettingsLowerLevelStyle {

	/**Options for customizing the font of labels.
	*/
	font?: LabelSettingsLowerLevelStyleFont;

	/**Specifies the horizontal text alignment of the text in label.
	* @Default {middle}
	*/
	horizontalAlignment?: string;
}

export interface LabelSettingsLowerLevel {

	/**Options for customizing the border of grid lines in lower level.
	*/
	border?: LabelSettingsLowerLevelBorder;

	/**Specifies the fill color of labels in lower level.
	* @Default {transparent}
	*/
	fill?: string;

	/**Options for customizing the grid lines in lower level.
	*/
	gridLineStyle?: LabelSettingsLowerLevelGridLineStyle;

	/**Specifies the intervalType of the labels in lower level.See IntervalType
	* @Default {years}
	*/
	intervalType?: ej.datavisualization.RangeNavigator.IntervalType|string;

	/**Specifies the position of the labels to render either inside or outside of plot area. See LabelPlacement
	* @Default {outside}
	*/
	labelPlacement?: ej.datavisualization.RangeNavigator.LabelPlacement|string;

	/**Specifies the position of the labels in lower level.See Position
	* @Default {bottom}
	*/
	position?: ej.datavisualization.RangeNavigator.Position|string;

	/**Options for customizing the style of labels.
	*/
	style?: LabelSettingsLowerLevelStyle;

	/**Toggles the visibility of labels in lower level.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface LabelSettingsStyleFont {

	/**Specifies the label color. This color is applied to the labels in range navigator.
	* @Default {#FFFFFF}
	*/
	color?: string;

	/**Specifies the label font family. Labels render with the specified font family.
	* @Default {Segoe UI}
	*/
	family?: string;

	/**Specifies the label font opacity. Labels render with the specified font opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the label font size. Labels render with the specified font size.
	* @Default {1px}
	*/
	size?: string;

	/**Specifies the label font style. Labels render with the specified font style..
	* @Default {Normal}
	*/
	style?: ej.datavisualization.RangeNavigator.FontStyle|string;

	/**Specifies the lable font weight
	* @Default {regular}
	*/
	weight?: ej.datavisualization.RangeNavigator.FontWeight|string;
}

export interface LabelSettingsStyle {

	/**Options for customizing the font of labels in range navigator.
	*/
	font?: LabelSettingsStyleFont;

	/**Specifies the horizontalAlignment of the label in RangeNavigator
	* @Default {middle}
	*/
	horizontalAlignment?: ej.datavisualization.RangeNavigator.HorizontalAlignment|string;
}

export interface LabelSettings {

	/**Options for customizing the higher level labels in range navigator.
	*/
	higherLevel?: LabelSettingsHigherLevel;

	/**Options for customizing the labels in lower level.
	*/
	lowerLevel?: LabelSettingsLowerLevel;

	/**Options for customizing the style of labels in range navigator.
	*/
	style?: LabelSettingsStyle;
}

export interface NavigatorStyleSettingsBorder {

	/**Specifies the border color of range navigator.
	* @Default {transparent}
	*/
	color?: string;

	/**Specifies the dash array of range navigator.
	* @Default {null}
	*/
	dashArray?: string;

	/**Specifies the border width of range navigator.
	* @Default {0.5}
	*/
	width?: number;
}

export interface NavigatorStyleSettingsMajorGridLineStyle {

	/**Specifies the color of major grid lines in range navigator.
	* @Default {#B5B5B5}
	*/
	color?: string;

	/**Toggles the visibility of major grid lines.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface NavigatorStyleSettingsMinorGridLineStyle {

	/**Specifies the color of minor grid lines in range navigator.
	* @Default {#B5B5B5}
	*/
	color?: string;

	/**Toggles the visibility of minor grid lines.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface NavigatorStyleSettings {

	/**Specifies the background color of range navigator.
	* @Default {#dddddd}
	*/
	background?: string;

	/**Options for customizing the border color and width of range navigator.
	*/
	border?: NavigatorStyleSettingsBorder;

	/**Specifies the left side thumb template in range navigator we can give either div id or html string
	* @Default {null}
	*/
	leftThumbTemplate?: string;

	/**Options for customizing the major grid lines.
	*/
	majorGridLineStyle?: NavigatorStyleSettingsMajorGridLineStyle;

	/**Options for customizing the minor grid lines.
	*/
	minorGridLineStyle?: NavigatorStyleSettingsMinorGridLineStyle;

	/**Specifies the opacity of RangeNavigator.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the right side thumb template in range navigator we can give either div id or html string
	* @Default {null}
	*/
	rightThumbTemplate?: string;

	/**Specifies the color of the selected region in range navigator.
	* @Default {#EFEFEF}
	*/
	selectedRegionColor?: string;

	/**Specifies the opacity of Selected Region.
	* @Default {0}
	*/
	selectedRegionOpacity?: number;

	/**Specifies the color of the thumb in range navigator.
	* @Default {#2382C3}
	*/
	thumbColor?: string;

	/**Specifies the radius of the thumb in range navigator.
	* @Default {10}
	*/
	thumbRadius?: number;

	/**Specifies the stroke color of the thumb in range navigator.
	* @Default {#303030}
	*/
	thumbStroke?: string;

	/**Specifies the color of the unselected region in range navigator.
	* @Default {#5EABDE}
	*/
	unselectedRegionColor?: string;

	/**Specifies the opacity of Unselected Region.
	* @Default {0.3}
	*/
	unselectedRegionOpacity?: number;
}

export interface RangeSettings {

	/**Specifies the ending range of range navigator.
	* @Default {null}
	*/
	end?: string;

	/**Specifies the starting range of range navigator.
	* @Default {null}
	*/
	start?: string;
}

export interface SelectedRangeSettings {

	/**Specifies the ending range of range navigator.
	* @Default {null}
	*/
	end?: string;

	/**Specifies the starting range of range navigator.
	* @Default {null}
	*/
	start?: string;
}

export interface SizeSettings {

	/**Specifies height of the range navigator.
	* @Default {null}
	*/
	height?: string;

	/**Specifies width of the range navigator.
	* @Default {null}
	*/
	width?: string;
}

export interface TooltipSettingsFont {

	/**Specifies the color of text in tooltip. Tooltip text render in the specified color.
	* @Default {#FFFFFF}
	*/
	color?: string;

	/**Specifies the font family of text in tooltip. Tooltip text render in the specified font family.
	* @Default {Segoe UI}
	*/
	family?: string;

	/**Specifies the font style of text in tooltip. Tooltip text render in the specified font style.
	* @Default {ej.datavisualization.RangeNavigator.fontStyle.Normal}
	*/
	fontStyle?: string;

	/**Specifies the opacity of text in tooltip. Tooltip text render in the specified opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the size of text in tooltip. Tooltip text render in the specified size.
	* @Default {10px}
	*/
	size?: string;

	/**Specifies the weight of text in tooltip. Tooltip text render in the specified weight.
	* @Default {ej.datavisualization.RangeNavigator.weight.Regular}
	*/
	weight?: string;
}

export interface TooltipSettings {

	/**Specifies the background color of tooltip.
	* @Default {#303030}
	*/
	backgroundColor?: string;

	/**Options for customizing the font in tooltip.
	*/
	font?: TooltipSettingsFont;

	/**Specifies the format of text to be displayed in tooltip.
	* @Default {MM/dd/yyyy}
	*/
	labelFormat?: string;

	/**Specifies the mode of displaying the tooltip. Neither to display the tooltip always nor on demand.
	* @Default {null}
	*/
	tooltipDisplayMode?: string;

	/**Toggles the visibility of tooltip.
	* @Default {true}
	*/
	visible?: boolean;
}

export interface ValueAxisSettingsAxisLine {

	/**Toggles the visibility of axis line.
	* @Default {none}
	*/
	visible?: string;
}

export interface ValueAxisSettingsFont {

	/**Text in axis render with the specified size.
	* @Default {0px}
	*/
	size?: string;
}

export interface ValueAxisSettingsMajorGridLines {

	/**Toggles the visibility of major grid lines.
	* @Default {false}
	*/
	visible?: boolean;
}

export interface ValueAxisSettingsMajorTickLines {

	/**Specifies the size of the majorTickLines in range navigator
	* @Default {0}
	*/
	size?: number;

	/**Toggles the visibility of major tick lines.
	* @Default {true}
	*/
	visible?: boolean;

	/**Specifies width of the major tick lines.
	* @Default {0}
	*/
	width?: number;
}

export interface ValueAxisSettings {

	/**Options for customizing the axis line.
	*/
	axisLine?: ValueAxisSettingsAxisLine;

	/**Options for customizing the font of the axis.
	*/
	font?: ValueAxisSettingsFont;

	/**Options for customizing the major grid lines.
	*/
	majorGridLines?: ValueAxisSettingsMajorGridLines;

	/**Options for customizing the major tick lines in axis.
	*/
	majorTickLines?: ValueAxisSettingsMajorTickLines;

	/**If the range is not given explicitly, range will be calculated automatically. You can customize the automatic range calculation using rangePadding.
	* @Default {none}
	*/
	rangePadding?: string;

	/**Toggles the visibility of axis in range navigator.
	* @Default {false}
	*/
	visible?: boolean;
}
}
module RangeNavigator
{
enum IntervalType
{
//string
Years,
//string
Quarters,
//string
Months,
//string
Weeks,
//string
Days,
//string
Hours,
}
}
module RangeNavigator
{
enum LabelPlacement
{
//string
Inside,
//string
Outside,
}
}
module RangeNavigator
{
enum Position
{
//string
Top,
//string
Bottom,
}
}
module RangeNavigator
{
enum FontStyle
{
//string
Normal,
//string
Bold,
//string
Italic,
}
}
module RangeNavigator
{
enum FontWeight
{
//string
Regular,
//string
Lighter,
}
}
module RangeNavigator
{
enum HorizontalAlignment
{
//string
Middle,
//string
Left,
//string
Right,
}
}
module RangeNavigator
{
enum RangePadding
{
//string
Additional,
//string
Normal,
//string
None,
//string
Round,
}
}
module RangeNavigator
{
enum ValueType
{
//string
Numeric,
//string
DateTime,
}
}

class BulletGraph extends ej.Widget {
	static fn: BulletGraph;
	constructor(element: JQuery, options?: BulletGraph.Model);
	constructor(element: Element, options?: BulletGraph.Model);
	model:BulletGraph.Model;
	defaults:BulletGraph.Model;

	/** To destroy the bullet graph
	* @returns {void}
	*/
	destroy (): void;

	/** To redraw the bulet graph
	* @returns {void}
	*/
	redraw(): void;

	/** To set the value for comparative measure in bullet graph.
	* @returns {void}
	*/
	setComparativeMeasureSymbol(): void;

	/** To set the value for feature measure bar.
	* @returns {void}
	*/
	setFeatureMeasureBarValue(): void;
}
export module BulletGraph{

export interface Model {

	/**Toggles the visibility of the range stroke color of the labels.
	* @Default {false}
	*/
	applyRangeStrokeToLabels?: boolean;

	/**Toggles the visibility of the range stroke color of the ticks.
	* @Default {false}
	*/
	applyRangeStrokeToTicks?: boolean;

	/**Contains property to customize the caption in bullet graph.
	*/
	captionSettings?: CaptionSettings;

	/**Comparative measure bar in bullet graph render till the specified value.
	* @Default {0}
	*/
	comparativeMeasureValue?: number;

	/**Toggles the animation of bullet graph.
	* @Default {true}
	*/
	enableAnimation?: boolean;

	/**Sets a value whether to make the bullet graph responsive on resize.
	* @Default {true}
	*/
	enableResizing?: boolean;

	/**Specifies the direction of flow in bullet graph. Neither it may be backward nor forward.
	* @Default {forward}
	*/
	flowDirection?: ej.datavisualization.BulletGraph.FlowDirection|string;

	/**Specifies the height of the bullet graph.
	* @Default {90}
	*/
	height?: number;

	/**Bullet graph will render in the specified orientation.
	* @Default {horizontal}
	*/
	orientation?: ej.datavisualization.BulletGraph.Orientation|string;

	/**Contains property to customize the qualitative ranges.
	*/
	qualitativeRanges?: Array<QualitativeRanges>;

	/**Size of the qualitative range depends up on the specified value.
	* @Default {32}
	*/
	qualitativeRangeSize?: number;

	/**Length of the quantitative range depends up on the specified value.
	* @Default {475}
	*/
	quantitativeScaleLength?: number;

	/**Contains all the properties to customize quantitative scale.
	*/
	quantitativeScaleSettings?: QuantitativeScaleSettings;

	/**By specifying this property the user can change the theme of the bullet graph.
	* @Default {flatlight}
	*/
	theme?: string;

	/**Contains all the properties to customize tooltip.
	*/
	tooltipSettings?: TooltipSettings;

	/**Feature measure bar in bullet graph render till the specified value.
	* @Default {0}
	*/
	value?: number;

	/**Specifies the width of the bullet graph.
	* @Default {595}
	*/
	width?: number;

	/**Fires on rendering the caption of bullet graph.*/
	drawCaption? (e: DrawCaptionEventArgs): void;

	/**Fires on rendering the category.*/
	drawCategory? (e: DrawCategoryEventArgs): void;

	/**Fires on rendering the comparative measure symbol.*/
	drawComparativeMeasureSymbol? (e: DrawComparativeMeasureSymbolEventArgs): void;

	/**Fires on rednering the feature measure bar.*/
	drawFeatureMeasureBar? (e: DrawFeatureMeasureBarEventArgs): void;

	/**Fires on rendering the indicator of bullet graph.*/
	drawIndicator? (e: DrawIndicatorEventArgs): void;

	/**Fires on rendering the labels.*/
	drawLabels? (e: DrawLabelsEventArgs): void;

	/**Fires on rendering the qualitative ranges.*/
	drawQualitativeRanges? (e: DrawQualitativeRangesEventArgs): void;

	/**Fires on loading bullet graph.*/
	load? (e: LoadEventArgs): void;
}

export interface DrawCaptionEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: HTMLElement;

	/**returns the current captionSettings element.
	*/
	captionElement?: HTMLElement;

	/**returns the type of the captionSettings.
	*/
	captionType?: string;
}

export interface DrawCategoryEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: HTMLElement;

	/**returns the options of category element.
	*/
	categoryElement?: HTMLElement;

	/**returns the text value of the category that is drawn.
	*/
	Value?: string;
}

export interface DrawComparativeMeasureSymbolEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: HTMLElement;

	/**returns the options of comparative measure element.
	*/
	targetElement?: HTMLElement;

	/**returns the value of the comparative measure symbol.
	*/
	Value?: number;
}

export interface DrawFeatureMeasureBarEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: HTMLElement;

	/**returns the options of feature measure element.
	*/
	currentElement?: HTMLElement;

	/**returns the value of the feature measure bar.
	*/
	Value?: number;
}

export interface DrawIndicatorEventArgs {

	/**returns an object to customize bullet graph indicator text and symbol before rendering it.
	*/
	indicatorSettings?: any;

	/**returns the object of bullet graph.
	*/
	model?: any;

	/**returns the type of event.
	*/
	type?: string;

	/**for cancelling the event.
	*/
	cancel?: boolean;
}

export interface DrawLabelsEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the options of the scale element.
	*/
	scaleElement?: HTMLElement;

	/**returns the current label element.
	*/
	tickElement?: HTMLElement;

	/**returns the label type.
	*/
	labelType?: string;
}

export interface DrawQualitativeRangesEventArgs {

	/**returns the object of the bullet graph.
	*/
	Object?: any;

	/**returns the index of current range.
	*/
	rangeIndex?: number;

	/**returns the settings for current range.
	*/
	rangeOptions?: any;

	/**returns the end value of current range.
	*/
	rangeEndValue?: number;
}

export interface LoadEventArgs {
}

export interface CaptionSettingsFont {

	/**Specifies the color of the text in caption.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the fontFamily of caption. Caption text render with this fontFamily
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of caption
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.BulletGraph.FontStyle|string;

	/**Specifies the fontWeight of caption
	* @Default {regular}
	*/
	fontWeight?: ej.datavisualization.BulletGraph.FontWeight|string;

	/**Specifies the opacity of caption. Caption text render with this opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the size of caption. Caption text render with this size
	* @Default {12px}
	*/
	size?: string;
}

export interface CaptionSettingsIndicatorFont {

	/**Specifies the color of the indicator's text.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the fontFamily of indicator. Indicator text render with this fontFamily.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of indicator. Indicator text render with this fontStyle. See FontStyle
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.BulletGraph.FontStyle|string;

	/**Specifies the fontWeight of indicator. Indicator text render with this fontWeight. See FontWeight
	* @Default {regular}
	*/
	fontWeight?: ej.datavisualization.BulletGraph.FontWeight|string;

	/**Specifies the opacity of indicator text. Indicator text render with this Opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the size of indicator. Indicator text render with this size.
	* @Default {12px}
	*/
	size?: string;
}

export interface CaptionSettingsIndicatorLocation {

	/**Specifies the horizontal position of the indicator.
	* @Default {10}
	*/
	x?: number;

	/**Specifies the vertical position of the indicator.
	* @Default {60}
	*/
	y?: number;
}

export interface CaptionSettingsIndicatorSymbolBorder {

	/**Specifies the border color of indicator symbol.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the border width of indicator symbol.
	* @Default {1}
	*/
	width?: number;
}

export interface CaptionSettingsIndicatorSymbolSize {

	/**Specifies the height of indicator symbol.
	* @Default {10}
	*/
	height?: number;

	/**Specifies the width of indicator symbol.
	* @Default {10}
	*/
	width?: number;
}

export interface CaptionSettingsIndicatorSymbol {

	/**Contains property to customize the border of indicator symbol.
	*/
	border?: CaptionSettingsIndicatorSymbolBorder;

	/**Specifies the color of indicator symbol.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the url of image that represents indicator symbol.
	*/
	imageURL?: string;

	/**Specifies the opacity of indicator symbol.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the shape of indicator symbol.
	*/
	shape?: string;

	/**Contains property to customize the size of indicator symbol.
	*/
	size?: CaptionSettingsIndicatorSymbolSize;
}

export interface CaptionSettingsIndicator {

	/**Contains property to customize the font of indicator.
	*/
	font?: CaptionSettingsIndicatorFont;

	/**Contains property to customize the location of indicator.
	*/
	location?: CaptionSettingsIndicatorLocation;

	/**Specifies the padding to be applied when text position is used.
	* @Default {2}
	*/
	padding?: number;

	/**Contains property to customize the symbol of indicator.
	*/
	symbol?: CaptionSettingsIndicatorSymbol;

	/**Specifies the text to be displayed as indicator text. By default difference between current value and target will be displayed
	*/
	text?: string;

	/**Specifies the alignement of indicator with respect to scale based on text position
	* @Default {'Near'}
	*/
	textAlignment?: ej.datavisualization.BulletGraph.TextAlignment|string;

	/**Specifies where indicator text should be anchored when indicator overlaps with other caption group text. Text will be anchored when overlapping caption group text are at same position. Anchoring is not applicable for float position.
	* @Default {'start'}
	*/
	textAnchor?: ej.datavisualization.BulletGraph.TextAnchor|string;

	/**indicator text render in the specified angle.
	* @Default {0}
	*/
	textAngle?: number;

	/**Specifies where indicator should be placed
	* @Default {'float'}
	*/
	textPosition?: ej.datavisualization.BulletGraph.TextPosition|string;

	/**Specifies the space between indicator symbol and text.
	* @Default {3}
	*/
	textSpacing?: number;

	/**Specifies whether indicator will be visible or not.
	* @Default {false}
	*/
	visibile?: boolean;
}

export interface CaptionSettingsLocation {

	/**Specifies the position in horizontal direction
	* @Default {17}
	*/
	x?: number;

	/**Specifies the position in horizontal direction
	* @Default {30}
	*/
	y?: number;
}

export interface CaptionSettingsSubTitleFont {

	/**Specifies the color of the subtitle's text.
	* @Default {null}
	*/
	color?: string;

	/**Specifies the fontFamily of subtitle. Subtitle text render with this fontFamily.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of subtitle. Subtitle text render with this fontStyle. See FontStyle
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.BulletGraph.FontStyle|string;

	/**Specifies the fontWeight of subtitle. Subtitle text render with this fontWeight. See FontWeight
	* @Default {regular}
	*/
	fontWeight?: ej.datavisualization.BulletGraph.FontWeight|string;

	/**Specifies the opacity of subtitle. Subtitle text render with this opacity.
	* @Default {1}
	*/
	opacity?: number;

	/**Specifies the size of subtitle. Subtitle text render with this size.
	* @Default {12px}
	*/
	size?: string;
}

export interface CaptionSettingsSubTitleLocation {

	/**Specifies the horizontal position of the subtitle.
	* @Default {10}
	*/
	x?: number;

	/**Specifies the vertical position of the subtitle.
	* @Default {45}
	*/
	y?: number;
}

export interface CaptionSettingsSubTitle {

	/**Contains property to customize the font of subtitle.
	*/
	font?: CaptionSettingsSubTitleFont;

	/**Contains property to customize the location of subtitle.
	*/
	location?: CaptionSettingsSubTitleLocation;

	/**Specifies the padding to be applied when text position is used.
	* @Default {5}
	*/
	padding?: number;

	/**Specifies the text to be displayed as subtitle.
	*/
	text?: string;

	/**Specifies the alignment of sub title text with respect to scale. Alignment will not be applied in float position.
	* @Default {'Near'}
	*/
	textAlignment?: ej.datavisualization.BulletGraph.TextAlignment|string;

	/**Specifies where subtitle text should be anchored when sub title text overlaps with other caption group text. Text will be anchored when overlapping caption group text are at same position. Anchoring is not applicable for float position.
	* @Default {'start'}
	*/
	textAnchor?: ej.datavisualization.BulletGraph.TextAnchor|string;

	/**Subtitle render in the specified angle.
	* @Default {0}
	*/
	textAngle?: number;

	/**Specifies where sub title text should be placed.
	* @Default {'float'}
	*/
	textPosition?: ej.datavisualization.BulletGraph.TextPosition|string;
}

export interface CaptionSettings {

	/**Specifies whether trim the labels will be true or false.
	* @Default {true}
	*/
	enableTrim?: boolean;

	/**Contains property to customize the font of caption.
	*/
	font?: CaptionSettingsFont;

	/**Contains property to customize the indicator.
	*/
	indicator?: CaptionSettingsIndicator;

	/**Contains property to customize the location.
	*/
	location?: CaptionSettingsLocation;

	/**Specifies the padding to be applied when text position is used.
	* @Default {5}
	*/
	padding?: number;

	/**Contains property to customize the subtitle.
	*/
	subTitle?: CaptionSettingsSubTitle;

	/**Specifies the text to be displayed on bullet graph.
	*/
	text?: string;

	/**Specifies the alignment of caption text with respect to scale. This property will not be applied when text position is float.
	* @Default {'Near'}
	*/
	textAlignment?: ej.datavisualization.BulletGraph.TextAlignment|string;

	/**Specifies caption text anchoring when caption text overlaps with other caption group text. Text will be anchored when overlapping caption group text are at same position. Anchoring is not applicable for float position.
	* @Default {'start'}
	*/
	textAnchor?: ej.datavisualization.BulletGraph.TextAnchor|string;

	/**Specifies the angel in which the caption is rendered.
	* @Default {0}
	*/
	textAngle?: number;

	/**Specifies how caption text should be placed.
	* @Default {'float'}
	*/
	textPosition?: ej.datavisualization.BulletGraph.TextPosition|string;
}

export interface QualitativeRanges {

	/**Specifies the ending range to which the qualitative ranges will render.
	* @Default {3}
	*/
	rangeEnd?: number;

	/**Specifies the opacity for the qualitative ranges.
	* @Default {1}
	*/
	rangeOpacity?: number;

	/**Specifies the stroke for the qualitative ranges.
	* @Default {null}
	*/
	rangeStroke?: string;
}

export interface QuantitativeScaleSettingsComparativeMeasureSettings {

	/**Specifies the stroke of the comparative measure.
	* @Default {null}
	*/
	stroke?: number;

	/**Specifies the width of the comparative measure.
	* @Default {5}
	*/
	width?: number;
}

export interface QuantitativeScaleSettingsFeaturedMeasureSettings {

	/**Specifies the Stroke of the featured measure in bullet graph.
	* @Default {null}
	*/
	stroke?: number;

	/**Specifies the width of the featured measure in bullet graph.
	* @Default {2}
	*/
	width?: number;
}

export interface QuantitativeScaleSettingsFeatureMeasures {

	/**Specifies the category of feature measure.
	* @Default {null}
	*/
	category?: string;

	/**Comparative measure render till the specified value.
	* @Default {null}
	*/
	comparativeMeasureValue?: number;

	/**Feature measure render till the specified value.
	* @Default {null}
	*/
	value?: number;
}

export interface QuantitativeScaleSettingsFields {

	/**Specifies the category of the bullet graph.
	* @Default {null}
	*/
	category?: string;

	/**Comparative measure render based on the values in the specified field.
	* @Default {null}
	*/
	comparativeMeasure?: string;

	/**Specifies the dataSource for the bullet graph.
	* @Default {null}
	*/
	dataSource?: any;

	/**Feature measure render based on the values in the specified field.
	* @Default {null}
	*/
	featureMeasures?: string;

	/**Specifies the query for fetching the values form data source to render the bullet graph.
	* @Default {null}
	*/
	query?: string;

	/**Specifies the name of the table.
	* @Default {null}
	*/
	tableName?: string;
}

export interface QuantitativeScaleSettingsLabelSettingsFont {

	/**Specifies the fontFamily of labels in bullet graph. Labels render with this fontFamily.
	* @Default {Segoe UI}
	*/
	fontFamily?: string;

	/**Specifies the fontStyle of labels in bullet graph. Labels render with this fontStyle. See FontStyle
	* @Default {Normal}
	*/
	fontStyle?: ej.datavisualization.BulletGraph.FontStyle|string;

	/**Specifies the fontWeight of labels in bullet graph. Labels render with this fontWeight. See FontWeight
	* @Default {regular}
	*/
	fontWeight?: ej.datavisualization.BulletGraph.FontWeight|string;

	/**Specifies the opacity of labels in bullet graph. Labels render with this opacity
	* @Default {1}
	*/
	opacity?: number;
}

export interface QuantitativeScaleSettingsLabelSettings {

	/**Contains property to customize the font of the labels in bullet graph.
	*/
	font?: QuantitativeScaleSettingsLabelSettingsFont;

	/**Specifies the placement of labels in bullet graph scale.
	* @Default {outside}
	*/
	labelPlacement?: ej.datavisualization.BulletGraph.LabelPlacement|string;

	/**Specifies the prefix to be added with labels in bullet graph.
	* @Default {Empty string}
	*/
	labelPrefix?: string;

	/**Specifies the suffix to be added after labels in bullet graph.
	* @Default {Empty string}
	*/
	labelSuffix?: string;

	/**Specifies the horizontal/vertical padding of labels.
	* @Default {15}
	*/
	offset?: number;

	/**Specifies the position of the labels to render either above or below the graph. See Position
	* @Default {below}
	*/
	position?: ej.datavisualization.BulletGraph.LabelPosition|string;

	/**Specifies the Size of the labels.
	* @Default {12}
	*/
	size?: number;

	/**Specifies the stroke color of the labels in bullet graph.
	* @Default {null}
	*/
	stroke?: string;
}

export interface QuantitativeScaleSettingsLocation {

	/**This property specifies the x position for rendering quantitative scale.
	* @Default {10}
	*/
	x?: number;

	/**This property specifies the y position for rendering quantitative scale.
	* @Default {10}
	*/
	y?: number;
}

export interface QuantitativeScaleSettingsMajorTickSettings {

	/**Specifies the size of the major ticks.
	* @Default {13}
	*/
	size?: number;

	/**Specifies the stroke color of the major tick lines.
	* @Default {null}
	*/
	stroke?: string;

	/**Specifies the width of the major tick lines.
	* @Default {2}
	*/
	width?: number;
}

export interface QuantitativeScaleSettingsMinorTickSettings {

	/**Specifies the size of minor ticks.
	* @Default {7}
	*/
	size?: number;

	/**Specifies the stroke color of minor ticks in bullet graph.
	* @Default {null}
	*/
	stroke?: string;

	/**Specifies the width of the minor ticks in bullet graph.
	* @Default {2}
	*/
	width?: number;
}

export interface QuantitativeScaleSettings {

	/**Contains property to customize the comparative measure.
	*/
	comparativeMeasureSettings?: QuantitativeScaleSettingsComparativeMeasureSettings;

	/**Contains property to customize the featured measure.
	*/
	featuredMeasureSettings?: QuantitativeScaleSettingsFeaturedMeasureSettings;

	/**Contains property to customize the featured measure.
	*/
	featureMeasures?: Array<QuantitativeScaleSettingsFeatureMeasures>;

	/**Contains property to customize the fields.
	*/
	fields?: QuantitativeScaleSettingsFields;

	/**Specifies the interval for the Graph.
	* @Default {1}
	*/
	interval?: number;

	/**Contains property to customize the labels.
	*/
	labelSettings?: QuantitativeScaleSettingsLabelSettings;

	/**Contains property to customize the position of the quantitative scale
	*/
	location?: QuantitativeScaleSettingsLocation;

	/**Contains property to customize the major tick lines.
	*/
	majorTickSettings?: QuantitativeScaleSettingsMajorTickSettings;

	/**Specifies the maximum value of the Graph.
	* @Default {10}
	*/
	maximum?: number;

	/**Specifies the minimum value of the Graph.
	* @Default {0}
	*/
	minimum?: number;

	/**Contains property to customize the minor ticks.
	*/
	minorTickSettings?: QuantitativeScaleSettingsMinorTickSettings;

	/**The specified number of minor ticks will be rendered per interval.
	* @Default {4}
	*/
	minorTicksPerInterval?: number;

	/**Specifies the placement of ticks to render either inside or outside the scale.
	* @Default {ej.datavisualization.BulletGraph.TickPlacement.Outside}
	*/
	tickPlacement?: ej.datavisualization.BulletGraph.TickPlacement|string;

	/**Specifies the position of the ticks to render either above,below or inside
	* @Default {ej.datavisualization.BulletGraph.TickPosition.Far}
	*/
	tickPosition?: ej.datavisualization.BulletGraph.TickPosition|string;
}

export interface TooltipSettings {

	/**Specifies template for caption tooltip
	* @Default {null}
	*/
	captionTemplate?: string;

	/**Toggles the visibility of caption tooltip
	* @Default {false}
	*/
	enableCaptionTooltip?: boolean;

	/**Specifies the ID of a div, which is to be displayed as tooltip.
	* @Default {null}
	*/
	template?: string;

	/**Toggles the visibility of tooltip
	* @Default {true}
	*/
	visible?: boolean;
}
}
module BulletGraph
{
enum FontStyle
{
//string
Normal,
//string
Italic,
//string
Oblique,
}
}
module BulletGraph
{
enum FontWeight
{
//string
Normal,
//string
Bold,
//string
Bolder,
//string
Lighter,
}
}
module BulletGraph
{
enum TextAlignment
{
//string
Near,
//string
Far,
//string
Center,
}
}
module BulletGraph
{
enum TextAnchor
{
//string
Start,
//string
Middle,
//string
End,
}
}
module BulletGraph
{
enum TextPosition
{
//string
Top,
//string
Right,
//string
Left,
//string
Bottom,
//string
Float,
}
}
module BulletGraph
{
enum FlowDirection
{
//string
Forward,
//string
Backward,
}
}
module BulletGraph
{
enum Orientation
{
//string
Horizontal,
//string
Vertical,
}
}
module BulletGraph
{
enum LabelPlacement
{
//string
Inside,
//string
Outside,
}
}
module BulletGraph
{
enum LabelPosition
{
//string
Above,
//string
Below,
}
}
module BulletGraph
{
enum TickPlacement
{
//string
Inside,
//string
Outside,
}
}
module BulletGraph
{
enum TickPosition
{
//string
Below,
//string
Above,
//string
Cross,
}
}

class Barcode extends ej.Widget {
	static fn: Barcode;
	constructor(element: JQuery, options?: Barcode.Model);
	constructor(element: Element, options?: Barcode.Model);
	model:Barcode.Model;
	defaults:Barcode.Model;

	/** To disable the barcode
	* @returns {void}
	*/
	disable(): void;

	/** To enable the barcode
	* @returns {void}
	*/
	enable(): void;
}
export module Barcode{

export interface Model {

	/**Specifies the distance between the barcode and text below it.
	*/
	barcodeToTextGapHeight?: number;

	/**Specifies the height of bars in the Barcode. By modifying the barHeight, the entire barcode height can be customized. Please refer to xDimension for two dimensional barcode height customization.
	*/
	barHeight?: number;

	/**Specifies the dark bar color of the Barcode. One dimensional barcode contains a series of dark and light bars which are usually colored as black and white respectively.
	*/
	darkBarColor?: any;

	/**Specifies whether the text below the barcode is visible or hidden.
	*/
	displayText?: boolean;

	/**Specifies whether the control is enabled.
	*/
	enabled?: boolean;

	/**Specifies the start and stop encode symbol in the Barcode. In one dimensional barcodes, an additional character is added as start and stop delimiters. These symbols are optional and the unique of the symbol allows the reader to determine the direction of the barcode being scanned.
	*/
	encodeStartStopSymbol?: number;

	/**Specifies the light bar color of the Barcode. One dimensional barcode contains a series of dark and light bars which are usually colored as black and white respectively.
	*/
	lightBarColor?: any;

	/**Specifies the width of the narrow bars in the barcode. The dark bars in the one dimensional barcode contains random narrow and wide bars based on the provided input which can be specified during initialization.
	*/
	narrowBarWidth?: number;

	/**Specifies the width of the quiet zone. In barcode, a quiet zone is the blank margin on either side of a barcode which informs the reader where a barcode's symbology starts and stops. The purpose of a quiet zone is to prevent the reader from picking up unrelated information.
	*/
	quietZone?: QuietZone;

	/**Specifies the type of the Barcode. See SymbologyType
	*/
	symbologyType?: ej.datavisualization.Barcode.SymbologyType|string;

	/**Specifies the text to be encoded in the barcode.
	*/
	text?: string;

	/**Specifies the color of the text/data at the bottom of the barcode.
	*/
	textColor?: any;

	/**Specifies the width of the wide bars in the barcode. One dimensional barcode usually contains random narrow and wide bars based on the provided which can be customized during initialization.
	*/
	wideBarWidth?: number;

	/**Specifies the width of the narrowest element(bar or space) in a barcode. The greater the x dimension, the more easily a barcode reader will scan.
	*/
	xDimension?: number;

	/**Fires after Barcode control is loaded.*/
	load? (e: LoadEventArgs): void;
}

export interface LoadEventArgs {

	/**if the event should be canceled; otherwise, false.
	*/
	cancel?: boolean;

	/**returns the barcode model
	*/
	model?: any;

	/**returns the name of the event
	*/
	type?: string;

	/**return the barcode state
	*/
	status?: boolean;
}

export interface QuietZone {

	/**Specifies the quiet zone around the Barcode.
	*/
	all?: number;

	/**Specifies the bottom quiet zone of the Barcode.
	*/
	bottom?: number;

	/**Specifies the left quiet zone of the Barcode.
	*/
	left?: number;

	/**Specifies the right quiet zone of the Barcode.
	*/
	right?: number;

	/**Specifies the top quiet zone of the Barcode.
	*/
	top?: number;
}
}
module Barcode
{
enum SymbologyType
{
//Represents the QR code
QRBarcode,
//Represents the Data Matrix barcode
DataMatrix,
//Represents the Code 39 barcode
Code39,
//Represents the Code 39 Extended barcode
Code39Extended,
//Represents the Code 11 barcode
Code11,
//Represents the Codabar barcode
Codabar,
//Represents the Code 32 barcode
Code32,
//Represents the Code 93 barcode
Code93,
//Represents the Code 93 Extended barcode
Code93Extended,
//Represents the Code 128 A barcode
Code128A,
//Represents the Code 128 B barcode
Code128B,
//Represents the Code 128 C barcode
Code128C,
}
}

class Map extends ej.Widget {
	static fn: Map;
	constructor(element: JQuery, options?: Map.Model);
	constructor(element: Element, options?: Map.Model);
	model:Map.Model;
	defaults:Map.Model;

	/** Method for navigating to specific shape based on latitude, longitude and zoomlevel.
	* @param {number} Pass the latitude value for map
	* @param {number} Pass the longitude value for map
	* @param {number} Pass the zoom level for map
	* @returns {void}
	*/
	navigateTo(latitude: number, longitude: number, level: number): void;

	/** Method to perform map panning
	* @param {string} Pass the direction in which map should be panned
	* @returns {void}
	*/
	pan(direction: string): void;

	/** Method to reload the map.
	* @returns {void}
	*/
	refresh(): void;

	/** Method to reload the shapeLayers with updated values
	* @returns {void}
	*/
	refreshLayers(): void;

	/** Method to reload the navigation control with updated values.
	* @param {any} Pass the navigation control instance
	* @returns {void}
	*/
	refreshNavigationControl(navigation: any): void;

	/** Method to perform map zooming.
	* @param {number} Pass the zoom level for map to be zoomed
	* @param {boolean} Pass the boolean value to enable or disable animation while zooming
	* @returns {void}
	*/
	zoom(level: number, isAnimate: boolean): void;
}
export module Map{

export interface Model {

	/**Specifies the background color for map
	* @Default {white}
	*/
	background?: string;

	/**Specifies the base map-index of the map to determine the shapelayer to be displayed
	* @Default {0}
	*/
	baseMapIndex?: number;

	/**Specify the center position where map should be displayed
	* @Default {[0,0]}
	*/
	centerPosition?: any;

	/**Enables or Disables the map animation
	* @Default {false}
	*/
	enableAnimation?: boolean;

	/**Enables or Disables the animation for layer change in map
	* @Default {false}
	*/
	enableLayerChangeAnimation?: boolean;

	/**Enables or Disables the map panning
	* @Default {true}
	*/
	enablePan?: boolean;

	/**Determines whether map need to resize when container is resized
	* @Default {true}
	*/
	enableResize?: boolean;

	/**Enables or Disables the zooming of map
	* @Default {true}
	*/
	enableZoom?: boolean;

	/**Enables or Disables the zoom on selecting the map shape
	* @Default {false}
	*/
	enableZoomOnSelection?: boolean;

	/**Specifies the zoom factor for map zoom value.
	* @Default {1}
	*/
	factor?: number;

	/**Hold the shapelayers to be displayed in map
	* @Default {[]}
	*/
	layers?: Array<any>;

	/**Specifies the zoom level value for which map to be zoomed
	* @Default {1}
	*/
	level?: number;

	/**Specifies the maximum zoom level of the map
	* @Default {100}
	*/
	maxValue?: number;

	/**Specifies the minimum zoomSettings level of the map
	* @Default {1}
	*/
	minValue?: number;

	/**Enables or Disables the navigation control for map to perform zooming and panning on map shapes.
	*/
	navigationControl?: any;

	/**Layer for holding the map shapes
	*/
	shapeLayer?: ShapeLayer;

	/**Enables or Disables the Zooming for map.
	*/
	zoomSettings?: any;

	/**Triggered on selecting the map markers.*/
	markerSelected? (e: MarkerSelectedEventArgs): void;

	/**Triggers while leaving the hovered map shape*/
	mouseleave? (e: MouseleaveEventArgs): void;

	/**Triggers while hovering the map shape.*/
	mouseover? (e: MouseoverEventArgs): void;

	/**Triggers once map render completed.*/
	onRenderComplete? (e: OnRenderCompleteEventArgs): void;

	/**Triggers when map panning ends.*/
	panned? (e: PannedEventArgs): void;

	/**Triggered on selecting the map shapes.*/
	shapeSelected? (e: ShapeSelectedEventArgs): void;

	/**Triggered when map is zoomed-in.*/
	zoomedIn? (e: ZoomedInEventArgs): void;

	/**Triggers when map is zoomed out.*/
	zoomedOut? (e: ZoomedOutEventArgs): void;
}

export interface MarkerSelectedEventArgs {

	/**Returns marker object.
	*/
	originalEvent?: any;
}

export interface MouseleaveEventArgs {

	/**Returns hovered map shape object.
	*/
	originalEvent?: any;
}

export interface MouseoverEventArgs {

	/**Returns hovered map shape object.
	*/
	originalEvent?: any;
}

export interface OnRenderCompleteEventArgs {

	/**Event parameters from map
	*/
	originalEvent?: any;
}

export interface PannedEventArgs {

	/**Event parameters from map
	*/
	originalEvent?: any;
}

export interface ShapeSelectedEventArgs {

	/**Returns selected shape object.
	*/
	originalEvent?: any;
}

export interface ZoomedInEventArgs {

	/**Event parameters from map
	*/
	originalEvent?: any;

	/**Returns zoom level value for which the map is zoomed.
	*/
	zoomLevel?: any;
}

export interface ZoomedOutEventArgs {

	/**Event parameters from map
	*/
	originalEvent?: any;

	/**Returns zoom level value for which the map is zoomed.
	*/
	zoomLevel?: any;
}

export interface ShapeLayerBubbleSettings {

	/**Specifies the bubble Opacity value of bubbles for shape layer in map
	* @Default {0.9}
	*/
	bubbleOpacity?: number;

	/**Specifies the mouse hover color of the shape layer in map
	* @Default {gray}
	*/
	color?: string;

	/**Specifies the colorMappings of the shape layer in map
	* @Default {null}
	*/
	colorMappings?: any;

	/**Specifies the bubble color valuePath of the shape layer in map
	* @Default {null}
	*/
	colorValuePath?: string;

	/**Specifies the maximum size value of bubbles for shape layer in map
	* @Default {20}
	*/
	maxValue?: number;

	/**Specifies the minimum size value of bubbles for shape layer in map
	* @Default {10}
	*/
	minValue?: number;

	/**Specifies the showBubble visibility status map
	* @Default {true}
	*/
	showBubble?: boolean;

	/**Specifies the tooltip visibility status of the shape layer in map
	* @Default {false}
	*/
	showTooltip?: boolean;

	/**Specifies the bubble tooltip template of the shape layer in map
	* @Default {null}
	*/
	tooltipTemplate?: string;

	/**Specifies the bubble valuePath of the shape layer in map
	* @Default {null}
	*/
	valuePath?: string;
}

export interface ShapeLayerLabelSettings {

	/**enable or disable the enableSmartLabel property
	* @Default {false}
	*/
	enableSmartLabel?: boolean;

	/**set the labelLength property
	* @Default {'2'}
	*/
	labelLength?: number;

	/**set the labelPath property
	* @Default {null}
	*/
	labelPath?: string;

	/**enable or disable the showlabel property
	* @Default {false}
	*/
	showLabels?: boolean;

	/**set the smartLabelSize property
	* @Default {fixed}
	*/
	smartLabelSize?: ej.datavisualization.Map.LabelSize|string;
}

export interface ShapeLayerLegendSettings {

	/**Determines whether the legend should be placed outside or inside the map bounds
	* @Default {false}
	*/
	dockOnMap?: boolean;

	/**Determines the legend placement and it is valid only when dockOnMap is true
	* @Default {top}
	*/
	dockPosition?: ej.datavisualization.Map.DockPosition|string;

	/**height value for legend setting
	* @Default {0}
	*/
	height?: number;

	/**to get icon value for legend setting
	* @Default {rectangle}
	*/
	icon?: ej.datavisualization.Map.LegendIcons|string;

	/**icon height value for legend setting
	* @Default {20}
	*/
	iconHeight?: number;

	/**icon Width value for legend setting
	* @Default {20}
	*/
	iconWidth?: number;

	/**set the orientation of legend labels
	* @Default {vertical}
	*/
	labelOrientation?: ej.datavisualization.Map.LabelOrientation|string;

	/**to get leftLabel value for legend setting
	* @Default {null}
	*/
	leftLabel?: string;

	/**to get mode of legend setting
	* @Default {default}
	*/
	mode?: ej.datavisualization.Map.LegendMode|string;

	/**set the position of legend settings
	* @Default {topleft}
	*/
	position?: ej.datavisualization.Map.Position|string;

	/**x position value for legend setting
	* @Default {0}
	*/
	positionX?: number;

	/**y position value for legend setting
	* @Default {0}
	*/
	positionY?: number;

	/**to get rightLabel value for legend setting
	* @Default {null}
	*/
	rightLabel?: string;

	/**Enables or Disables the showLabels
	* @Default {false}
	*/
	showLabels?: boolean;

	/**Enables or Disables the showLegend
	* @Default {false}
	*/
	showLegend?: boolean;

	/**to get title of legend setting
	* @Default {null}
	*/
	title?: string;

	/**to get type of legend setting
	* @Default {layers}
	*/
	type?: ej.datavisualization.Map.LegendType|string;

	/**width value for legend setting
	* @Default {0}
	*/
	width?: number;
}

export interface ShapeLayerShapeSettings {

	/**Enables or Disables the auto fill colors for shape layer in map. When this property value set to true, shapes will be filled with palette colors.
	* @Default {false}
	*/
	autoFill?: boolean;

	/**Specifies the colorMappings of the shape layer in map
	* @Default {null}
	*/
	colorMappings?: any;

	/**Specifies the shape color palette value of the shape layer in map. Accepted colorPalette values are palette1, palette2, palette3 and custompalette.
	* @Default {palette1}
	*/
	colorPalette?: string;

	/**Specifies the shape color valuePath of the shape layer in map
	* @Default {null}
	*/
	colorValuePath?: string;

	/**Enables or Disables the gradient colors for map shapes.
	* @Default {false}
	*/
	enableGradient?: boolean;

	/**Specifies the shape fill color of the shape layer in map
	* @Default {#E5E5E5}
	*/
	fill?: string;

	/**Specifies the mouse over width of the shape layer in map
	* @Default {1}
	*/
	highlightBorderWidth?: number;

	/**Specifies the mouse hover color of the shape layer in map
	* @Default {gray}
	*/
	highlightColor?: string;

	/**Specifies the mouse over stroke color of the shape layer in map
	* @Default {#C1C1C1}
	*/
	highlightStroke?: string;

	/**Specifies the shape selection color of the shape layer in map
	* @Default {gray}
	*/
	selectionColor?: string;

	/**Specifies the shape selection stroke color of the shape layer in map
	* @Default {#C1C1C1}
	*/
	selectionStroke?: string;

	/**Specifies the shape selection stroke width of the shape layer in map
	* @Default {1}
	*/
	selectionStrokeWidth?: number;

	/**Specifies the shape stroke color of the shape layer in map
	* @Default {#C1C1C1}
	*/
	stroke?: string;

	/**Specifies the shape stroke thickness value of the shape layer in map
	* @Default {0.2}
	*/
	strokeThickness?: number;

	/**Specifies the shape valuePath of the shape layer in map
	* @Default {null}
	*/
	valuePath?: string;
}

export interface ShapeLayer {

	/**to get the type of bing map.
	* @Default {aerial}
	*/
	bingMapType?: ej.datavisualization.Map.BingMapType|string;

	/**Specifies the bubble settings for map
	*/
	bubbleSettings?: ShapeLayerBubbleSettings;

	/**Specifies the datasource for the shape layer
	*/
	dataSource?: any;

	/**Enables or disables the animation
	* @Default {false}
	*/
	enableAnimation?: boolean;

	/**Enables or disables the shape mouse hover
	* @Default {false}
	*/
	enableMouseHover?: boolean;

	/**Enables or disables the shape selection
	* @Default {true}
	*/
	enableSelection?: boolean;

	/**to get the key of bing map
	* @Default {null}
	*/
	key?: string;

	/**Options for enabling and configuring labelSettings labelPath, smartLabelSize, labelLength etc.,
	*/
	labelSettings?: ShapeLayerLabelSettings;

	/**Specifies the map type.
	* @Default {'geometry'}
	*/
	layerType?: ej.datavisualization.Map.LayerType|string;

	/**Options for enabling and configuring legendSettings position, height, width, mode, type etc.,
	*/
	legendSettings?: ShapeLayerLegendSettings;

	/**Specifies the map items template for shapes.
	*/
	mapItemsTemplate?: string;

	/**Specify markers for shape layer.
	* @Default {[]}
	*/
	markers?: Array<any>;

	/**Specifies the map marker template for map layer.
	* @Default {null}
	*/
	markerTemplate?: string;

	/**Specify selectedMapShapes for shape layer
	* @Default {[]}
	*/
	selectedMapShapes?: Array<any>;

	/**Specifies the selection mode of the map. Accepted selection mode values are Default and Multiple.
	* @Default {default}
	*/
	selectionMode?: ej.datavisualization.Map.SelectionMode|string;

	/**Specifies the shape data for the shape layer
	*/
	shapeDataobject?: any;

	/**Specifies the shape settings of map layer
	*/
	shapeSettings?: ShapeLayerShapeSettings;

	/**Shows or hides the map items.
	* @Default {false}
	*/
	showMapItems?: boolean;

	/**Shows or hides the tooltip for shapes
	* @Default {false}
	*/
	showTooltip?: boolean;

	/**Specifies the sub shape layers
	* @Default {[]}
	*/
	subLayers?: Array<any>;

	/**Specifies the tooltip template for shapes.
	*/
	tooltipTemplate?: string;

	/**Specifies the url template for the OSM type map.
	* @Default {'http://a.tile.openstreetmap.org/level/tileX/tileY.png'}
	*/
	urlTemplate?: string;
}
}
module Map
{
enum Position
{
//specifies the none position
None,
//specifies the topleft position
Topleft,
//specifies the topcenter position
Topcenter,
//specifies the topright position
Topright,
//specifies the centerleft position
Centerleft,
//specifies the center position
Center,
//specifies the centerright position
Centerright,
//specifies the bottomleft position
Bottomleft,
//specifies the bottomcenter position
Bottomcenter,
//specifies the bottomright position
Bottomright,
}
}
module Map
{
enum Orientation
{
//specifies the horizontal position
Horizontal,
//specifies the vertical position
Vertical,
}
}
module Map
{
enum BingMapType
{
//specifies the aerial type
Aerial,
//specifies the aerialwithlabel type
Aerialwithlabel,
//specifies the road type
Road,
}
}
module Map
{
enum LabelSize
{
//specifies the fixed size
Fixed,
//specifies the default size
Default,
}
}
module Map
{
enum LayerType
{
//specifies the geometry type
Geometry,
//specifies the osm type
Osm,
//specifies the bing type
Bing,
}
}
module Map
{
enum DockPosition
{
//specifies the top position
Top,
//specifies the bottom position
Bottom,
//specifies the bottom position
Right,
//specifies the left position
Left,
}
}
module Map
{
enum LegendIcons
{
//specifies the rectangle position
Rectangle,
//specifies the circle position
Circle,
}
}
module Map
{
enum LabelOrientation
{
//specifies the horizontal position
Horizontal,
//specifies the vertical position
Vertical,
}
}
module Map
{
enum LegendMode
{
//specifies the default mode
Default,
//specifies the interactive mode
Interactive,
}
}
module Map
{
enum LegendType
{
//specifies the layers type
Layers,
//specifies the bubbles type
Bubbles,
}
}
module Map
{
enum SelectionMode
{
//specifies the default position
Default,
//specifies the multiple position
Multiple,
}
}

class TreeMap extends ej.Widget {
	static fn: TreeMap;
	constructor(element: JQuery, options?: TreeMap.Model);
	constructor(element: Element, options?: TreeMap.Model);
	model:TreeMap.Model;
	defaults:TreeMap.Model;

	/** Method to reload treemap with updated values.
	* @returns {void}
	*/
	refresh(): void;
}
export module TreeMap{

export interface Model {

	/**Specifies the border brush color of the treemap
	* @Default {white}
	*/
	borderBrush?: string;

	/**Specifies the border thickness of the treemap
	* @Default {1}
	*/
	borderThickness?: number;

	/**Specifies the colors of the paletteColorMapping
	* @Default {[]}
	*/
	colors?: Array<any>;

	/**Specifies the color valuepath of the treemap
	* @Default {null}
	*/
	colorValuePath?: string;

	/**Specifies the datasource of the treemap
	* @Default {null}
	*/
	dataSource?: any;

	/**Specifies the desaturationColorMapping settings of the treemap
	*/
	desaturationColorMapping?: any;

	/**Specifies the dockPosition for legend
	* @Default {top}
	*/
	dockPosition?: ej.datavisualization.TreeMap.DockPosition|string;

	/**specifies the drillDown header color
	* @Default {'null'}
	*/
	drillDownHeaderColor?: string;

	/**specifies the drillDown selection color
	* @Default {'#000000'}
	*/
	drillDownSelectionColor?: string;

	/**Enable/Disable the drillDown for treemap
	* @Default {false}
	*/
	enableDrillDown?: boolean;

	/**Specifies whether treemap need to resize when container is resized
	* @Default {true}
	*/
	enableResize?: boolean;

	/**Specifies the from value for desaturation color mapping
	* @Default {0}
	*/
	from?: number;

	/**Specifies the group color mapping of the treemap
	* @Default {[]}
	*/
	groupColorMapping?: Array<any>;

	/**Specifies the height for legend
	* @Default {30}
	*/
	height?: number;

	/**Specifies the highlight border brush of treemap
	* @Default {gray}
	*/
	highlightBorderBrush?: string;

	/**Specifies the border thickness when treemap items is highlighted in the treemap
	* @Default {5}
	*/
	highlightBorderThickness?: number;

	/**Specifies the highlight border brush of treemap
	* @Default {gray}
	*/
	highlightGroupBorderBrush?: string;

	/**Specifies the border thickness when treemap items is highlighted in the treemap
	* @Default {5}
	*/
	highlightGroupBorderThickness?: number;

	/**Specifies whether treemap item need to highlighted on selection
	* @Default {false}
	*/
	highlightGroupOnSelection?: boolean;

	/**Specifies whether treemap item need to highlighted on selection
	* @Default {false}
	*/
	highlightOnSelection?: boolean;

	/**Specifies the iconHeight for legend
	* @Default {15}
	*/
	iconHeight?: number;

	/**Specifies the iconWidth for legend
	* @Default {15}
	*/
	iconWidth?: number;

	/**Specifies the items layout mode of the treemap. Accepted itemsLayoutMode values are Squarified, SliceAndDiceHorizontal, SliceAndDiceVertical and SliceAndDiceAuto
	* @Default {Squarified}
	*/
	itemsLayoutMode?: ej.datavisualization.TreeMap.ItemsLayoutMode|string;

	/**Specifies the leaf settings of the treemap
	*/
	leafItemSettings?: LeafItemSettings;

	/**Specifies the legend settings of the treemap
	*/
	legendSettings?: any;

	/**Specify levels of treemap for grouped visualization of datas
	* @Default {[]}
	*/
	levels?: Array<any>;

	/**Specifies the paletteColorMapping of the treemap
	*/
	paletteColorMapping?: any;

	/**Specifies the rangeColorMapping settings of the treemap
	*/
	rangeColorMapping?: Array<any>;

	/**Specifies the rangeMaximum value for desaturation color mapping
	* @Default {0}
	*/
	rangeMaximum?: number;

	/**Specifies the rangeMinimum value for desaturation color mapping
	* @Default {0}
	*/
	rangeMinimum?: number;

	/**Specifies the legend visibility status of the treemap
	* @Default {false}
	*/
	showLegend?: boolean;

	/**Specifies whether treemap tooltip need to be visible
	* @Default {false}
	*/
	showTooltip?: boolean;

	/**Specifies the template for legendSettings
	* @Default {null}
	*/
	template?: string;

	/**Specifies the to value for desaturation color mapping
	* @Default {0}
	*/
	to?: number;

	/**Specifies the tooltip template of the treemap
	* @Default {null}
	*/
	tooltipTemplate?: string;

	/**Hold the treeMapItems to be displayed in treemap
	* @Default {[]}
	*/
	treeMapItems?: Array<any>;

	/**Hold the Level settings of TreeMap
	*/
	treeMapLevel?: TreeMapLevel;

	/**Specifies the uniColorMapping settings of the treemap
	*/
	uniColorMapping?: any;

	/**Specifies the weight valuepath of the treemap
	* @Default {null}
	*/
	weightValuePath?: string;

	/**Specifies the width for legend
	* @Default {100}
	*/
	width?: number;

	/**Triggers on treemap item selected.*/
	treeMapItemSelected? (e: TreeMapItemSelectedEventArgs): void;
}

export interface TreeMapItemSelectedEventArgs {

	/**Returns selected treeMapItem object.
	*/
	originalEvent?: any;
}

export interface LeafItemSettings {

	/**Specifies the border bruch color of the leaf item.
	* @Default {white}
	*/
	borderBrush?: string;

	/**Specifies the border thickness of the leaf item.
	* @Default {1}
	*/
	borderThickness?: number;

	/**Specifies the label template of the leaf item.
	* @Default {null}
	*/
	itemTemplate?: string;

	/**Specifies the label path of the leaf item.
	* @Default {null}
	*/
	labelPath?: string;

	/**Specifies the position of the leaf labels.
	* @Default {center}
	*/
	labelPosition?: ej.datavisualization.TreeMap.Position|string;

	/**Specifies the mode of label visibility
	* @Default {visible}
	*/
	labelVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode|string;

	/**Shows or hides the label of the leaf item.
	* @Default {false}
	*/
	showLabels?: boolean;
}

export interface TreeMapLevel {

	/**specifies the group background
	* @Default {null}
	*/
	groupBackground?: string;

	/**Specifies the group border color for tree map level.
	* @Default {null}
	*/
	groupBorderColor?: string;

	/**Specifies the group border thickness for tree map level.
	* @Default {1}
	*/
	groupBorderThickness?: number;

	/**Specifies the group gap for tree map level.
	* @Default {1}
	*/
	groupGap?: number;

	/**Specifies the group padding for tree map level.
	* @Default {4}
	*/
	groupPadding?: number;

	/**Specifies the group path for tree map level.
	*/
	groupPath?: string;

	/**Specifies the header height for tree map level.
	* @Default {0}
	*/
	headerHeight?: number;

	/**Specifies the header template for tree map level.
	* @Default {null}
	*/
	headerTemplate?: string;

	/**Specifies the mode of header visibility
	* @Default {visible}
	*/
	headerVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode|string;

	/**Specifies the position of the labels.
	* @Default {center}
	*/
	labelPosition?: ej.datavisualization.TreeMap.Position|string;

	/**Specifies the label template for tree map level.
	* @Default {null}
	*/
	labelTemplate?: string;

	/**Specifies the mode of label visibility
	* @Default {visible}
	*/
	labelVisibilityMode?: ej.datavisualization.TreeMap.VisibilityMode|string;

	/**Shows or hides the header for tree map level.
	* @Default {false}
	*/
	showHeader?: boolean;

	/**Shows or hides the labels for tree map level.
	* @Default {false}
	*/
	showLabels?: boolean;
}
}
module TreeMap
{
enum DockPosition
{
//specifies the top position
Top,
//specifies the bottom position
Bottom,
//specifies the bottom position
Right,
//specifies the left position
Left,
}
}
module TreeMap
{
enum ItemsLayoutMode
{
//specifies the squarified as layout type position
Squarified,
//specifies the sliceanddicehorizontal as layout type position
Sliceanddicehorizontal,
//specifies the sliceanddicevertical as layout type position
Sliceanddicevertical,
//specifies the sliceanddiceauto as layout type position
Sliceanddiceauto,
}
}
module TreeMap
{
enum Position
{
//specifies the none position
None,
//specifies the topleft position
Topleft,
//specifies the topcenter position
Topcenter,
//specifies the topright position
Topright,
//specifies the centerleft position
Centerleft,
//specifies the center position
Center,
//specifies the centerright position
Centerright,
//specifies the bottomleft position
Bottomleft,
//specifies the bottomcenter position
Bottomcenter,
//specifies the bottomright position
Bottomright,
}
}
module TreeMap
{
enum VisibilityMode
{
//specifies the visible mode
Top,
//specifies the hideonexceededlength mode
Hideonexceededlength,
}
}
module TreeMap
{
enum groupSelectionMode
{
//specifies the default mode
Default,
//specifies the multiple mode
Multiple,
}
}

class Diagram extends ej.Widget {
	static fn: Diagram;
	constructor(element: JQuery, options?: Diagram.Model);
	constructor(element: Element, options?: Diagram.Model);
	model:Diagram.Model;
	defaults:Diagram.Model;

	/** Add nodes and connectors to diagram at runtime
	* @param {any} a JSON to define a node/connector or an array of nodes and connector
	* @returns {void}
	*/
	add(node: any): void;

	/** Add a label to a node at runtime
	* @param {string} name of the node to which label will be added
	* @param {any} JSON for the new label to be added
	* @returns {void}
	*/
	addLabel(nodeName: string, newLabel: any): void;

	/** Add a phase to a swimlane at runtime
	* @param {string} name of the swimlane to which the phase will be added
	* @param {any} JSON object to define the phase to be added
	* @returns {void}
	*/
	addPhase(name: string, options: any): void;

	/** Add a collection of ports to the node specified by name
	* @param {string} name of the node to which the ports have to be added
	* @param {Array<any>} a collection of ports to be added to the specified node
	* @returns {void}
	*/
	addPorts(name: string, ports: Array<any>): void;

	/** Add the specified node to selection list
	* @param {any} the node to be selected
	* @param {boolean} to define whether to clear the existing selection or not
	* @returns {void}
	*/
	addSelection(node: any, clearSelection: boolean): void;

	/** Align the selected objects based on the reference object and direction
	* @param {string} to specify the direction towards which the selected objects are to be aligned("left","right",top","bottom")
	* @returns {void}
	*/
	align(direction: string): void;

	/** Bring the specified portion of the diagram content to the diagram viewport
	* @param {any} the rectangular region that is to be brought into diagram viewport
	* @returns {void}
	*/
	bringIntoView(rect: any): void;

	/** Bring the specified portion of the diagram content to the center of the diagram viewport
	* @param {any} the rectangular region that is to be brought to the center of diagram viewport
	* @returns {void}
	*/
	bringToCenter(rect: any): void;

	/** Visually move the selected object over all other intersected objects
	* @returns {void}
	*/
	bringToFront(): void;

	/** Remove all the elements from diagram
	* @returns {void}
	*/
	clear(): void;

	/** Remove the current selection in diagram
	* @returns {void}
	*/
	clearSelection(): void;

	/** Copy the selected object to internal clipboard and get the copied object
	* @returns {any}
	*/
	copy(): any;

	/** Cut the selected object from diagram to diagram internal clipboard
	* @returns {void}
	*/
	cut(): void;

	/** Export the diagram as downloadable files or as data
	* @param {Diagram.Options} options to export the desired region of diagram to the desired formats.NameTypeDescriptionfileNamestringname of the file to be downloaded.formatstringformat of the exported file/data. See [File Formats](/js/api/global#fileformats).modestringto set whether to export diagram as a file or as raw data. See [Export Modes](/js/api/global#exportmodes).regionstringto set the region of the diagram to be exported. See [Region](/js/api/global#region).boundsobjectto export any custom region of diagram.marginobjectto set margin to the exported data.
	* @returns {string}
	*/
	exportDiagram(options: Diagram.Options): string;

	/** Read a node/connector object by its name
	* @param {string} name of the node/connector that is to be identified
	* @returns {any}
	*/
	findNode(name: string): any;

	/** Fit the diagram content into diagram viewport
	* @param {string} to set the mode of fit to command. See [Fit Mode](/js/api/global#fitmode)
	* @param {string} to set whether the region to be fit will be based on diagram elements or page settings [Region](/js/api/global#region)
	* @param {any} to set the required margin
	* @returns {void}
	*/
	fitToPage(mode: string, region: string, margin: any): void;

	/** Group the selected nodes and connectors
	* @returns {void}
	*/
	group(): void;

	/** Insert a label into a node's label collection at runtime
	* @param {string} name of the node to which the label has to be inserted
	* @param {any} JSON to define the new label
	* @param {number} index to insert the label into the node
	* @returns {void}
	*/
	insertLabel(name: string, label: any, index: number): void;

	/** Refresh the diagram with the specified layout
	* @returns {void}
	*/
	layout(): void;

	/** Load the diagram
	* @param {any} JSON data to load the diagram
	* @returns {void}
	*/
	load(data: any): void;

	/** Visually move the selected object over its closest intersected object
	* @returns {void}
	*/
	moveForward(): void;

	/** Move the selected objects by either one pixel or by the pixels specified through argument
	* @param {string} specifies the direction to move the selected objects ("left","right",top","bottom")
	* @param {number} specifies the number of pixels by which the selected objects have to be moved
	* @returns {void}
	*/
	nudge(direction: string, delta: number): void;

	/** Paste the selected object from internal clipboard to diagram
	* @param {any} object to be added to diagram
	* @param {boolean} to define whether the specified object is to be renamed or not
	* @returns {void}
	*/
	paste(object: any, rename: boolean): void;

	/** Print the diagram as image
	* @returns {void}
	*/
	print(): void;

	/** Restore the last action that was reverted
	* @returns {void}
	*/
	redo(): void;

	/** Refresh the diagram at runtime
	* @returns {void}
	*/
	refresh(): void;

	/** Remove either the given node/connector or the selected element from diagram
	* @param {any} the node/connector to be removed from diagram
	* @returns {void}
	*/
	remove(node: any): void;

	/** Remove a particular object from selection list
	* @param {any} the node/connector to be removed from selection list
	* @returns {void}
	*/
	removeSelection(node: any): void;

	/** Scale the selected objects to the height of the first selected object
	* @returns {void}
	*/
	sameHeight(): void;

	/** Scale the selected objects to the size of the first selected object
	* @returns {void}
	*/
	sameSize(): void;

	/** Scale the selected objects to the width of the first selected object
	* @returns {void}
	*/
	sameWidth(): void;

	/** Returns the diagram as serialized JSON
	* @returns {any}
	*/
	save(): any;

	/** Bring the node into view
	* @param {any} the node/connector to be brought into view
	* @returns {void}
	*/
	scrollToNode(node: any): void;

	/** Select all nodes and connector in diagram
	* @returns {void}
	*/
	selectAll(): void;

	/** Visually move the selected object behind its closest intersected object
	* @returns {void}
	*/
	sendBackward(): void;

	/** Visually move the selected object behind all other intersected objects
	* @returns {void}
	*/
	sendToBack(): void;

	/** Update the horizontal space between the selected objects as equal and within the selection boundary
	* @returns {void}
	*/
	spaceAcross(): void;

	/** Update the vertical space between the selected objects as equal and within the selection boundary
	* @returns {void}
	*/
	spaceDown(): void;

	/** Move the specified label to edit mode
	* @param {any} node/connector that contains the label to be edited
	* @param {any} to be edited
	* @returns {void}
	*/
	startLabelEdit(node: any, label: any): void;

	/** Reverse the last action that was performed
	* @returns {void}
	*/
	undo(): void;

	/** Ungroup the selected group
	* @returns {void}
	*/
	ungroup(): void;

	/** Update diagram at runtime
	* @param {any} JSON to specify the diagram properties that have to be modified
	* @returns {void}
	*/
	update(options: any): void;

	/** Update Connectors at runtime
	* @param {string} name of the connector to be updated
	* @param {any} JSON to specify the connector properties that have to be updated
	* @returns {void}
	*/
	updateConnector(name: string, options: any): void;

	/** Update the given label at runtime
	* @param {string} the name of node/connector which contains the label to be updated
	* @param {any} the label to be modified
	* @param {any} JSON to specify the label properties that have to be updated
	* @returns {any}
	*/
	updateLabel(nodeName: string, label: any, options: any): any;

	/** Update nodes at runtime
	* @param {string} name of the node that is to be updated
	* @param {any} JSON to specify the properties of node that have to be updated
	* @returns {void}
	*/
	updateNode(name: string, options: any): void;

	/** Update a port with its modified properties at runtime
	* @param {string} the name of node which contains the port to be updated
	* @param {any} the port to be updated
	* @param {any} JSON to specify the properties of the port that have to be updated
	* @returns {void}
	*/
	updatePort(nodeName: string, port: any, options: any): void;

	/** Update the specified node as selected object
	* @param {string} name of the node to be updated as selected object
	* @returns {void}
	*/
	updateSelectedObject(name: string): void;

	/** Update the selection at runtime
	* @param {boolean} to specify whether to show the user handles or not
	* @returns {void}
	*/
	updateSelection(showUserHandles: boolean): void;

	/** Update userhandles with respect to the given node
	* @param {any} node/connector with respect to which, the user handles have to be updated
	* @returns {void}
	*/
	updateUserHandles(node: any): void;

	/** Update the diagram viewport at runtime
	* @returns {void}
	*/
	updateViewPort(): void;

	/** Upgrade the diagram from old version
	* @param {any} to be upgraded
	* @returns {void}
	*/
	upgrade(data: any): void;

	/** Used to zoomIn/zoomOut diagram
	* @param {any} options to zoom the diagram(zoom factor, zoomIn/zoomOut)
	* @returns {void}
	*/
	zoomTo(zoom: any): void;
}
export module Diagram{

export interface Options {

	/**name of the file to be downloaded.
	*/
	fileName?: string;

	/**format of the exported file/data. See [File Formats](/js/api/global#fileformats).
	*/
	format?: string;

	/**to set whether to export diagram as a file or as raw data. See [Export Modes](/js/api/global#exportmodes).
	*/
	mode?: string;

	/**to set the region of the diagram to be exported. See [Region](/js/api/global#region).
	*/
	region?: string;

	/**to export any custom region of diagram.
	*/
	bounds?: any;

	/**to set margin to the exported data.
	*/
	margin?: any;
}

export interface Model {

	/**Defines the background color of diagram elements
	* @Default {transparent}
	*/
	backgroundColor?: string;

	/**Defines the path of the background image of diagram elements
	* @Default {null}
	*/
	backgroundImage?: string;

	/**Sets the direction of line bridges.
	* @Default {ej.datavisualization.Diagram.BridgeDirection.Top}
	*/
	bridgeDirection?: ej.datavisualization.Diagram.BridgeDirection|string;

	/**Defines a set of custom commands and binds them with a set of desired key gestures.
	*/
	commandManager?: CommandManager;

	/**A collection of JSON objects where each object represents a connector
	* @Default {[]}
	*/
	connectors?: Array<Connectors>;

	/**Binds the custom JSON data with connector properties
	* @Default {null}
	*/
	connectorTemplate?: any;

	/**Enables/Disables the default behaviors of the diagram.
	* @Default {ej.datavisualization.Diagram.DiagramConstraints.All}
	*/
	constraints?: ej.datavisualization.Diagram.DiagramConstraints|string;

	/**An object to customize the context menu of diagram
	*/
	contextMenu?: ContextMenu;

	/**Configures the data source that is to be bound with diagram
	*/
	dataSourceSettings?: DataSourceSettings;

	/**Initializes the default values for nodes and connectors
	* @Default {{}}
	*/
	defaultSettings?: DefaultSettings;

	/**Sets the type of Json object to be drawn through drawing tool
	* @Default {{}}
	*/
	drawType?: any;

	/**Enables or disables auto scroll in diagram
	* @Default {true}
	*/
	enableAutoScroll?: boolean;

	/**Enables or disables diagram context menu
	* @Default {true}
	*/
	enableContextMenu?: boolean;

	/**Specifies the height of the diagram
	* @Default {null}
	*/
	height?: string;

	/**Customizes the undo redo functionality
	*/
	historyManager?: HistoryManager;

	/**Automatically arranges the nodes and connectors in a predefined manner
	*/
	layout?: Layout;

	/**Defines the current culture of diagram
	* @Default {en-US}
	*/
	locale?: string;

	/**Array of JSON objects where each object represents a node
	* @Default {[]}
	*/
	nodes?: Array<Nodes>;

	/**Binds the custom JSON data with node properties
	* @Default {null}
	*/
	nodeTemplate?: any;

	/**Defines the size and appearance of diagram page
	*/
	pageSettings?: PageSettings;

	/**Defines the zoom value, zoom factor, scroll status and view port size of the diagram
	*/
	scrollSettings?: ScrollSettings;

	/**Defines the size and position of selected items and defines the appearance of selector
	*/
	selectedItems?: SelectedItems;

	/**Enables or disables tooltip of diagram
	* @Default {true}
	*/
	showTooltip?: boolean;

	/**Defines the gridlines and defines how and when the objects have to be snapped
	*/
	snapSettings?: SnapSettings;

	/**Enables/Disables the interactive behaviors of diagram.
	* @Default {ej.datavisualization.Diagram.Tool.All}
	*/
	tool?: ej.datavisualization.Diagram.Tool|string;

	/**An object that defines the description, appearance and alignments of tooltips
	* @Default {null}
	*/
	tooltip?: Tooltip;

	/**Specifies the width of the diagram
	* @Default {null}
	*/
	width?: string;

	/**Sets the factor by which we can zoom in or zoom out
	* @Default {0.2}
	*/
	zoomFactor?: number;

	/**Triggers When auto scroll is changed*/
	autoScrollChange? (e: AutoScrollChangeEventArgs): void;

	/**Triggers when a node, connector or diagram is clicked*/
	click? (e: ClickEventArgs): void;

	/**Triggers when the connection is changed*/
	connectionChange? (e: ConnectionChangeEventArgs): void;

	/**Triggers when the connector collection is changed*/
	connectorCollectionChange? (e: ConnectorCollectionChangeEventArgs): void;

	/**Triggers when the connectors' source point is changed*/
	connectorSourceChange? (e: ConnectorSourceChangeEventArgs): void;

	/**Triggers when the connectors' target point is changed*/
	connectorTargetChange? (e: ConnectorTargetChangeEventArgs): void;

	/**Triggers before opening the context menu*/
	contextMenuBeforeOpen? (e: ContextMenuBeforeOpenEventArgs): void;

	/**Triggers when a context menu item is clicked*/
	contextMenuClick? (e: ContextMenuClickEventArgs): void;

	/**Triggers when a node, connector or diagram model is clicked twice*/
	doubleClick? (e: DoubleClickEventArgs): void;

	/**Triggers while dragging the elements in diagram*/
	drag? (e: DragEventArgs): void;

	/**Triggers when a symbol is dragged into diagram from symbol palette*/
	dragEnter? (e: DragEnterEventArgs): void;

	/**Triggers when a symbol is dragged outside of the diagram.*/
	dragLeave? (e: DragLeaveEventArgs): void;

	/**Triggers when a symbol is dragged over diagram*/
	dragOver? (e: DragOverEventArgs): void;

	/**Triggers when a symbol is dragged and dropped from symbol palette to drawing area*/
	drop? (e: DropEventArgs): void;

	/**Triggers when a child is added to or removed from a group*/
	groupChange? (e: GroupChangeEventArgs): void;

	/**Triggers when a diagram element is clicked*/
	itemClick? (e: ItemClickEventArgs): void;

	/**Triggers when mouse enters a node/connector*/
	mouseEnter? (e: MouseEnterEventArgs): void;

	/**Triggers when mouse leaves node/connector*/
	mouseLeave? (e: MouseLeaveEventArgs): void;

	/**Triggers when mouse hovers over a node/connector*/
	mouseOver? (e: MouseOverEventArgs): void;

	/**Triggers when node collection is changed*/
	nodeCollectionChange? (e: NodeCollectionChangeEventArgs): void;

	/**Triggers when the node properties(x, y,width and height alone) are changed using nudge commands or updateNode API.*/
	propertyChange? (e: PropertyChangeEventArgs): void;

	/**Triggers when the diagram elements are rotated*/
	rotationChange? (e: RotationChangeEventArgs): void;

	/**Triggers when the diagram is zoomed or panned*/
	scrollChange? (e: ScrollChangeEventArgs): void;

	/**Triggers when a connector segment is edited*/
	segmentChange? (e: SegmentChangeEventArgs): void;

	/**Triggers when the selection is changed in diagram*/
	selectionChange? (e: SelectionChangeEventArgs): void;

	/**Triggers when a node is resized*/
	sizeChange? (e: SizeChangeEventArgs): void;

	/**Triggers when label editing is ended*/
	textChange? (e: TextChangeEventArgs): void;
}

export interface AutoScrollChangeEventArgs {

	/**Returns the delay between subsequent auto scrolls
	*/
	delay?: string;
}

export interface ClickEventArgs {

	/**parameter returns the clicked node, connector or diagram
	*/
	element?: any;

	/**parameter returns the object that is actually clicked
	*/
	actualObject?: number;

	/**parameter returns the horizontal coordinate of the mouse pointer, relative to the diagram
	*/
	offsetX?: number;

	/**parameter returns  the vertical coordinate of the mouse pointer, relative to the diagram
	*/
	offsetY?: number;

	/**parameter returns the count of how many times the mouse button is pressed
	*/
	count?: number;

	/**parameter returns the actual click event arguments that explains which button is clicked
	*/
	event?: any;
}

export interface ConnectionChangeEventArgs {

	/**parameter returns the connection that is changed between nodes, ports or points
	*/
	element?: any;

	/**parameter returns the new source node or target node of the connector
	*/
	connection?: string;

	/**parameter returns the new source port or target port of the connector
	*/
	port?: any;

	/**parameter defines whether to cancel the change or not
	*/
	cancel?: boolean;
}

export interface ConnectorCollectionChangeEventArgs {

	/**parameter returns whether the connector is inserted or removed
	*/
	changeType?: string;

	/**parameter returns the connector that is to be added or deleted
	*/
	element?: any;

	/**parameter defines whether to cancel the collection change or not
	*/
	cancel?: boolean;
}

export interface ConnectorSourceChangeEventArgs {

	/**returns the connector, the source point of which is being dragged
	*/
	element?: any;

	/**returns the source node of the element
	*/
	node?: any;

	/**returns the source point of the element
	*/
	point?: any;

	/**returns the source port of the element
	*/
	port?: any;

	/**returns the state of connection end point dragging(starting, dragging, completed)
	*/
	dragState?: string;

	/**parameter defines whether to cancel the change or not
	*/
	cancel?: boolean;
}

export interface ConnectorTargetChangeEventArgs {

	/**parameter returns the connector, the target point of which is being dragged
	*/
	element?: any;

	/**returns the target node of the element
	*/
	node?: any;

	/**returns the target point of the element
	*/
	point?: any;

	/**returns the target port of the element
	*/
	port?: any;

	/**returns the state of connection end point dragging(starting, dragging, completed)
	*/
	dragState?: string;

	/**parameter defines whether to cancel the change or not
	*/
	cancel?: boolean;
}

export interface ContextMenuBeforeOpenEventArgs {

	/**parameter returns the diagram object
	*/
	diagram?: any;

	/**parameter returns the actual arguments from context menu
	*/
	contextmenu?: any;

	/**parameter returns the object that was clicked
	*/
	target?: any;
}

export interface ContextMenuClickEventArgs {

	/**parameter returns the id of the selected context menu item
	*/
	id?: string;

	/**parameter returns the text of the selected context menu item
	*/
	text?: string;

	/**parameter returns the parent id of the selected context menu item
	*/
	parentId?: string;

	/**parameter returns the parent text of the selected context menu item
	*/
	parentText?: string;

	/**parameter returns the object that was clicked
	*/
	target?: any;

	/**parameter defines whether to execute the click event or not
	*/
	canExecute?: boolean;
}

export interface DoubleClickEventArgs {

	/**parameter returns the object that is actually clicked
	*/
	actualObject?: any;

	/**parameter returns the selected object
	*/
	element?: any;
}

export interface DragEventArgs {

	/**parameter returns the node or connector that is being dragged
	*/
	element?: any;

	/**parameter returns the previous position of the node/connector
	*/
	oldValue?: any;

	/**parameter returns the new position of the node/connector
	*/
	newValue?: any;

	/**parameter returns the state of drag event (Starting, dragging, completed)
	*/
	dragState?: string;

	/**parameter returns whether or not to cancel the drag event
	*/
	cancel?: boolean;
}

export interface DragEnterEventArgs {

	/**parameter returns the node or connector that is dragged into diagram
	*/
	element?: any;

	/**parameter returns whether to add or remove the symbol from diagram
	*/
	cancel?: boolean;
}

export interface DragLeaveEventArgs {

	/**parameter returns the node or connector that is dragged outside of the diagram
	*/
	element?: any;
}

export interface DragOverEventArgs {

	/**parameter returns the node or connector that is dragged over diagram
	*/
	element?: any;

	/**parameter defines whether the symbol can be dropped at the current mouse position
	*/
	allowDrop?: boolean;

	/**parameter returns the node/connector over which the symbol is dragged
	*/
	target?: any;

	/**parameter returns the previous position of the node/connector
	*/
	oldValue?: any;

	/**parameter returns the new position of the node/connector
	*/
	newValue?: any;

	/**parameter returns whether or not to cancel the dragOver event
	*/
	cancel?: boolean;
}

export interface DropEventArgs {

	/**parameter returns node or connector that is being dropped
	*/
	element?: any;

	/**parameter returns whether or not to cancel the drop event
	*/
	cancel?: boolean;

	/**parameter returns the object from where the element is dragged
	*/
	source?: any;

	/**parameter returns the object over which the object will be dropped
	*/
	target?: any;

	/**parameter returns the enum which defines the type of the source
	*/
	sourceType?: string;
}

export interface GroupChangeEventArgs {

	/**parameter returns the object that is added to/removed from a group
	*/
	element?: any;

	/**parameter returns the old parent group(if any) of the object
	*/
	oldParent?: any;

	/**parameter returns the new parent group(if any) of the object
	*/
	newParent?: any;

	/**parameter returns the cause of group change("group", unGroup")
	*/
	cause?: string;
}

export interface ItemClickEventArgs {

	/**parameter returns the object that was actually clicked
	*/
	actualObject?: any;

	/**parameter returns the object that is selected
	*/
	selectedObject?: any;

	/**parameter returns whether or not to cancel the drop event
	*/
	cancel?: boolean;

	/**parameter returns the actual click event arguments that explains which button is clicked
	*/
	event?: any;
}

export interface MouseEnterEventArgs {

	/**parameter returns the target node or connector
	*/
	element?: any;

	/**parameter returns the object from where the selected object is dragged
	*/
	source?: any;

	/**parameter returns the target object over which the selected object is dragged
	*/
	target?: any;
}

export interface MouseLeaveEventArgs {

	/**parameter returns the target node or connector
	*/
	element?: any;

	/**parameter returns the object from where the selected object is dragged
	*/
	source?: any;

	/**parameter returns the target object over which the selected object is dragged
	*/
	target?: any;
}

export interface MouseOverEventArgs {

	/**parameter returns the target node or connector
	*/
	element?: any;

	/**parameter returns the object from where the element is dragged
	*/
	source?: any;

	/**parameter returns the object over which the element is being dragged.
	*/
	target?: any;
}

export interface NodeCollectionChangeEventArgs {

	/**parameter returns whether the node is to be added or removed
	*/
	changeType?: string;

	/**parameter returns the node which needs to be added or deleted
	*/
	element?: any;

	/**parameter defines whether to cancel the collection change or not
	*/
	cancel?: boolean;
}

export interface PropertyChangeEventArgs {

	/**parameter returns the selected element
	*/
	element?: any;

	/**parameter returns the action is nudge or not
	*/
	cause?: string;

	/**parameter returns the new value of the node property that is being changed
	*/
	newValue?: any;

	/**parameter returns the old value of the property that is being changed
	*/
	oldValue?: any;

	/**parameter returns the name of the property that is changed
	*/
	propertyName?: string;
}

export interface RotationChangeEventArgs {

	/**parameter returns the node that is rotated
	*/
	element?: any;

	/**parameter returns the previous rotation angle
	*/
	oldValue?: any;

	/**parameter returns the new rotation angle
	*/
	newValue?: any;

	/**parameter to specify whether or not to cancel the event
	*/
	cancel?: boolean;
}

export interface ScrollChangeEventArgs {

	/**Parameter returns the new zoom value, horizontal and vertical scroll offsets.
	*/
	newValues?: any;

	/**parameter returns the previous zoom value, horizontal and vertical scroll offsets.
	*/
	oldValues?: any;
}

export interface SegmentChangeEventArgs {

	/**Parameter returns the connector that is being edited
	*/
	element?: any;

	/**parameter returns the state of editing (starting, dragging, completed)
	*/
	dragState?: string;

	/**parameter returns the current mouse position
	*/
	point?: any;

	/**parameter to specify whether or not to cancel the event
	*/
	cancel?: boolean;
}

export interface SelectionChangeEventArgs {

	/**parameter returns whether the item is selected or removed selection
	*/
	changeType?: string;

	/**parameter returns the item which is selected or to be selected
	*/
	element?: any;

	/**parameter returns the collection of nodes and connectors that have to be removed from selection list
	*/
	oldItems?: Array<any>;

	/**parameter returns the collection of nodes and connectors that have to be added to selection list
	*/
	newItems?: Array<any>;

	/**parameter returns the collection of nodes and connectors that will be selected after selection change
	*/
	selectedItems?: Array<any>;

	/**parameter to specify whether or not to cancel the selection change event
	*/
	cancel?: boolean;
}

export interface SizeChangeEventArgs {

	/**parameter returns node that was resized
	*/
	element?: any;

	/**parameter to cancel the size change
	*/
	cancel?: boolean;

	/**parameter returns the new width, height, offsetX and offsetY values of the element that is being resized
	*/
	newValue?: any;

	/**parameter returns the previous width,height,offsetX and offsetY values of the element that is being resized
	*/
	oldValue?: any;

	/**parameter returns the state of resizing(starting,resizing,completed)
	*/
	resizeState?: string;

	/**parameter returns the difference between new and old value
	*/
	offset?: any;
}

export interface TextChangeEventArgs {

	/**parameter returns the node that contains the text being edited
	*/
	element?: any;

	/**parameter returns the new text
	*/
	value?: string;

	/**parameter returns the keyCode of the key entered
	*/
	keyCode?: string;
}

export interface CommandManagerCommandsGesture {

	/**Sets the key value, on recognition of which the command will be executed.
	* @Default {ej.datavisualization.Diagram.Keys.None}
	*/
	key?: ej.datavisualization.Diagram.Keys|string;

	/**Sets a combination of key modifiers, on recognition of which the command will be executed.
	* @Default {ej.datavisualization.Diagram.KeyModifiers.None}
	*/
	keyModifiers?: ej.datavisualization.Diagram.KeyModifiers|string;
}

export interface CommandManagerCommands {

	/**A method that defines whether the command is executable at the moment or not.
	*/
	canExecute?: Function;

	/**A method that defines what to be executed when the key combination is recognized.
	*/
	execute?: Function;

	/**Defines a combination of keys and key modifiers, on recognition of which the command will be executed
	*/
	gesture?: CommandManagerCommandsGesture;

	/**Defines any additional parameters that are required at runtime
	* @Default {null}
	*/
	parameter?: any;
}

export interface CommandManager {

	/**An object that maps a set of command names with the corresponding command objects
	* @Default {{}}
	*/
	commands?: CommandManagerCommands;
}

export interface ConnectorsSegments {

	/**Sets the direction of orthogonal segment
	*/
	direction?: string;

	/**Describes the length of orthogonal segment
	* @Default {undefined}
	*/
	length?: number;

	/**Describes the end point of bezier/straight segment
	* @Default {Diagram.Point()}
	*/
	point?: ej.datavisualization.Diagram.ConnectorsSourcePoint|string;

	/**Defines the first control point of the bezier segment
	* @Default {null}
	*/
	point1?: ej.datavisualization.Diagram.ConnectorsSourcePoint|string;

	/**Defines the second control point of bezier segment
	* @Default {null}
	*/
	point2?: ej.datavisualization.Diagram.ConnectorsSourcePoint|string;

	/**Sets the type of the segment.
	* @Default {ej.datavisualization.Diagram.Segments.Straight}
	*/
	type?: ej.datavisualization.Diagram.Segments|string;

	/**Describes the length and angle between the first control point and the start point of bezier segment
	* @Default {null}
	*/
	vector1?: any;

	/**Describes the length and angle between the second control point and end point of bezier segment
	* @Default {null}
	*/
	vector2?: any;
}

export interface ConnectorsSourceDecorator {

	/**Sets the border color of the source decorator
	* @Default {black}
	*/
	borderColor?: string;

	/**Sets the border width of the decorator
	* @Default {1}
	*/
	borderWidth?: number;

	/**Sets the fill color of the source decorator
	* @Default {black}
	*/
	fillColor?: string;

	/**Sets the height of the source decorator
	* @Default {8}
	*/
	height?: number;

	/**Defines the custom shape of the source decorator
	*/
	pathData?: string;

	/**Defines the shape of the source decorator.
	* @Default {ej.datavisualization.Diagram.DecoratorShapes.Arrow}
	*/
	shape?: ej.datavisualization.Diagram.DecoratorShapes|string;

	/**Defines the width of the source decorator
	* @Default {8}
	*/
	width?: number;
}

export interface ConnectorsSourcePoint {

	/**Defines the x-coordinate of a position
	* @Default {0}
	*/
	x?: number;

	/**Defines the y-coordinate of a position
	* @Default {0}
	*/
	y?: number;
}

export interface ConnectorsTargetDecorator {

	/**Sets the border color of the decorator
	* @Default {black}
	*/
	borderColor?: string;

	/**Sets the color with which the decorator will be filled
	* @Default {black}
	*/
	fillColor?: string;

	/**Defines the height of the target decorator
	* @Default {8}
	*/
	height?: number;

	/**Defines the custom shape of the target decorator
	*/
	pathData?: string;

	/**Defines the shape of the target decorator.
	* @Default {ej.datavisualization.Diagram.DecoratorShapes.Arrow}
	*/
	shape?: ej.datavisualization.Diagram.DecoratorShapes|string;

	/**Defines the width of the target decorator
	* @Default {8}
	*/
	width?: number;
}

export interface Connectors {

	/**To maintain additional information about connectors
	* @Default {null}
	*/
	addInfo?: any;

	/**Defines the width of the line bridges
	* @Default {10}
	*/
	bridgeSpace?: number;

	/**Enables or disables the behaviors of connectors.
	* @Default {ej.datavisualization.Diagram.ConnectorConstraints.Default}
	*/
	constraints?: ej.datavisualization.Diagram.ConnectorConstraints|string;

	/**Defines the radius of the rounded corner
	* @Default {0}
	*/
	cornerRadius?: number;

	/**Configures the styles of shapes
	*/
	cssClass?: string;

	/**Sets the horizontal alignment of the connector. Applicable, if the parent of the connector is a container.
	* @Default {ej.datavisualization.Diagram.HorizontalAlignment.Left}
	*/
	horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment|string;

	/**A collection of JSON objects where each object represents a label. For label properties, refer Labels
	* @Default {[]}
	*/
	labels?: Array<any>;

	/**Sets the stroke color of the connector
	* @Default {black}
	*/
	lineColor?: string;

	/**Sets the pattern of dashes and gaps used to stroke the path of the connector
	*/
	lineDashArray?: string;

	/**Defines the padding value to ease the interaction with connectors
	* @Default {10}
	*/
	lineHitPadding?: number;

	/**Sets the width of the line
	* @Default {1}
	*/
	lineWidth?: number;

	/**Defines the minimum space to be left between the bottom of parent bounds and the connector. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginBottom?: number;

	/**Defines the minimum space to be left between the left of parent bounds and the connector. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginLeft?: number;

	/**Defines the minimum space to be left between the right of parent bounds and the connector. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginRight?: number;

	/**Defines the minimum space to be left between the top of parent bounds and the connector. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginTop?: number;

	/**Sets a unique name for the connector
	*/
	name?: string;

	/**Defines the transparency of the connector
	* @Default {1}
	*/
	opacity?: number;

	/**Defines the size and preview size of the node to add that to symbol palette. To explore palette item, refer Palette Item
	* @Default {null}
	*/
	paletteItem?: any;

	/**Sets the parent name of the connector.
	*/
	parent?: string;

	/**An array of JSON objects where each object represents a segment
	* @Default {[ { type:straight } ]}
	*/
	segments?: Array<ConnectorsSegments>;

	/**Defines the source decorator of the connector
	* @Default {{ shape:arrow, width: 8, height:8, borderColor:black, fillColor:black }}
	*/
	sourceDecorator?: ConnectorsSourceDecorator;

	/**Sets the source node of the connector
	*/
	sourceNode?: string;

	/**Defines the space to be left between the source node and the source point of a connector
	* @Default {0}
	*/
	sourcePadding?: number;

	/**Describes the start point of the connector
	* @Default {ej.datavisualization.Diagram.Point()}
	*/
	sourcePoint?: ConnectorsSourcePoint;

	/**Sets the source port of the connector
	*/
	sourcePort?: string;

	/**Defines the target decorator of the connector
	* @Default {{ shape:arrow, width: 8, height:8, borderColor:black, fillColor:black }}
	*/
	targetDecorator?: ConnectorsTargetDecorator;

	/**Sets the target node of the connector
	*/
	targetNode?: string;

	/**Defines the space to be left between the target node and the target point of the connector
	* @Default {0}
	*/
	targetPadding?: number;

	/**Describes the end point of the connector
	* @Default {ej.datavisualization.Diagram.Point()}
	*/
	targetPoint?: ej.datavisualization.Diagram.ConnectorsSourcePoint|string;

	/**Sets the targetPort of the connector
	*/
	targetPort?: string;

	/**Defines the tooltip that should be shown when the mouse hovers over connector. For tooltip properties, refer Tooltip
	* @Default {null}
	*/
	tooltip?: any;

	/**To set the vertical alignment of connector (Applicable,if the parent is group).
	* @Default {ej.datavisualization.Diagram.VerticalAlignment.Top}
	*/
	verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment|string;

	/**Enables or disables the visibility of connector
	* @Default {true}
	*/
	visible?: boolean;

	/**Sets the z-index of the connector
	* @Default {0}
	*/
	zOrder?: number;
}

export interface ContextMenu {

	/**Defines the collection of context menu items
	* @Default {[]}
	*/
	items?: Array<any>;

	/**To set whether to display the default context menu items or not
	* @Default {false}
	*/
	showCustomMenuItemsOnly?: boolean;
}

export interface DataSourceSettings {

	/**Defines the data source either as a collection of objects or as an instance of ej.DataManager
	* @Default {null}
	*/
	dataSource?: any;

	/**Sets the unique id of the data source items
	*/
	id?: string;

	/**Defines the parent id of the data source item
	* @Default {''}
	*/
	parent?: string;

	/**Describes query to retrieve a set of data from the specified datasource
	* @Default {null}
	*/
	query?: string;

	/**Sets the unique id of the root data source item
	*/
	root?: string;

	/**Describes the name of the table on which the specified query has to be executed
	* @Default {null}
	*/
	tableName?: string;
}

export interface DefaultSettings {

	/**Initializes the default connector properties
	* @Default {null}
	*/
	connector?: any;

	/**Initializes the default properties of groups
	* @Default {null}
	*/
	group?: any;

	/**Initializes the default properties for nodes
	* @Default {null}
	*/
	node?: any;
}

export interface HistoryManager {

	/**A method that takes a history entry as argument and returns whether the specific entry can be popped or not
	*/
	canPop?: Function;

	/**A method that ends grouping the changes
	*/
	closeGroupAction?: Function;

	/**A method that removes the history of a recent change made in diagram
	*/
	pop?: Function;

	/**A method that allows to track the custom changes made in diagram
	*/
	push?: Function;

	/**Defines what should be happened while trying to restore a custom change
	* @Default {null}
	*/
	redo?: Function;

	/**A method that starts to group the changes to revert/restore them in a single undo or redo
	*/
	startGroupAction?: Function;

	/**Defines what should be happened while trying to revert a custom change
	*/
	undo?: Function;
}

export interface Layout {

	/**Defines the fixed node with reference to which, the layout will be arranged and fixed node will not be repositioned
	*/
	fixedNode?: string;

	/**Customizes the orientation of trees/sub trees. For orientations, see Chart Orientations. For chart types, see Chart Types
	* @Default {null}
	*/
	getLayoutInfo?: any;

	/**Sets the space to be horizontally left between nodes
	* @Default {30}
	*/
	horizontalSpacing?: number;

	/**Sets the margin value to be horizontally left between the layout and diagram
	* @Default {0}
	*/
	marginX?: number;

	/**Sets the margin value to be vertically left between layout and diagram
	* @Default {0}
	*/
	marginY?: number;

	/**Sets the orientation/direction to arrange the diagram elements.
	* @Default {ej.datavisualization.Diagram.LayoutOrientations.TopToBottom}
	*/
	orientation?: ej.datavisualization.Diagram.LayoutOrientations|string;

	/**Sets the type of the layout based on which the elements will be arranged.
	* @Default {ej.datavisualization.Diagram.LayoutTypes.None}
	*/
	type?: ej.datavisualization.Diagram.LayoutTypes|string;

	/**Sets the space to be vertically left between nodes
	* @Default {30}
	*/
	verticalSpacing?: number;
}

export interface NodesContainer {

	/**Defines the orientation of the container. Applicable, if the group is a container.
	* @Default {vertical}
	*/
	orientation?: string;

	/**Sets the type of the container. Applicable if the group is a container.
	* @Default {ej.datavisualization.Diagram.ContainerType.Canvas}
	*/
	type?: ej.datavisualization.Diagram.ContainerType|string;
}

export interface NodesGradientLinearGradient {

	/**Defines the different colors and the region of color transitions
	* @Default {[]}
	*/
	stops?: Array<any>;

	/**Defines the left most position(relative to node) of the rectangular region that needs to be painted
	* @Default {0}
	*/
	x1?: number;

	/**Defines the right most position(relative to node) of the rectangular region that needs to be painted
	* @Default {0}
	*/
	x2?: number;

	/**Defines the top most position(relative to node) of the rectangular region that needs to be painted
	* @Default {0}
	*/
	y1?: number;

	/**Defines the bottom most position(relative to node) of the rectangular region that needs to be painted
	* @Default {0}
	*/
	y2?: number;
}

export interface NodesGradientRadialGradient {

	/**Defines the position of the outermost circle
	* @Default {0}
	*/
	cx?: number;

	/**Defines the outer most circle of the radial gradient
	* @Default {0}
	*/
	cy?: number;

	/**Defines the innermost circle of the radial gradient
	* @Default {0}
	*/
	fx?: number;

	/**Defines the innermost circle of the radial gradient
	* @Default {0}
	*/
	fy?: number;

	/**Defines the different colors and the region of color transitions.
	* @Default {[]}
	*/
	stops?: Array<any>;
}

export interface NodesGradientStop {

	/**Sets the color to be filled over the specified region
	*/
	color?: string;

	/**Sets the position where the previous color transition ends and a new color transition starts
	* @Default {0}
	*/
	offset?: number;

	/**Describes the transparency level of the region
	* @Default {1}
	*/
	opacity?: number;
}

export interface NodesGradient {

	/**Paints the node with linear color transitions
	*/
	LinearGradient?: NodesGradientLinearGradient;

	/**Paints the node with radial color transitions. A focal point defines the beginning of the gradient, and a circle defines the end point of the gradient.
	*/
	RadialGradient?: NodesGradientRadialGradient;

	/**Defines the color and a position where the previous color transition ends and a new color transition starts
	*/
	Stop?: NodesGradientStop;
}

export interface NodesLabels {

	/**Enables/disables the bold style
	* @Default {false}
	*/
	bold?: boolean;

	/**Sets the border color of the label
	* @Default {transparent}
	*/
	borderColor?: string;

	/**Sets the border width of the label
	* @Default {0}
	*/
	borderWidth?: number;

	/**Sets the fill color of the text area
	* @Default {transparent}
	*/
	fillColor?: string;

	/**Sets the font color of the text
	* @Default {black}
	*/
	fontColor?: string;

	/**Sets the font family of the text
	* @Default {Arial}
	*/
	fontFamily?: string;

	/**Defines the font size of the text
	* @Default {12}
	*/
	fontSize?: number;

	/**Sets the horizontal alignment of the label.
	* @Default {ej.datavisualization.Diagram.HorizontalAlignment.Center}
	*/
	horizontalAlignment?: ej.datavisualization.Diagram.HorizontalAlignment|string;

	/**Enables/disables the italic style
	* @Default {false}
	*/
	italic?: boolean;

	/**To set the margin of the label
	* @Default {ej.datavisualization.Diagram.Margin()}
	*/
	margin?: any;

	/**Gets whether the label is currently being edited or not.
	* @Default {ej.datavisualization.Diagram.LabelEditMode.Edit}
	*/
	mode?: ej.datavisualization.Diagram.LabelEditMode|string;

	/**Sets the unique identifier of the label
	*/
	name?: string;

	/**Sets the fraction/ratio(relative to node) that defines the position of the label
	* @Default {ej.datavisualization.Diagram.Point(0.5, 0.5)}
	*/
	offset?: any;

	/**Defines whether the label is editable or not
	* @Default {false}
	*/
	readOnly?: boolean;

	/**Defines the angle to which the label needs to be rotated
	* @Default {0}
	*/
	rotateAngle?: number;

	/**Defines the label text
	*/
	text?: string;

	/**Defines how to align the text inside the label.
	* @Default {ej.datavisualization.Diagram.TextAlign.Center}
	*/
	textAlign?: ej.datavisualization.Diagram.TextAlign|string;

	/**Sets how to decorate the label text.
	* @Default {ej.datavisualization.Diagram.TextDecorations.None}
	*/
	textDecoration?: ej.datavisualization.Diagram.TextDecorations|string;

	/**Sets the vertical alignment of the label.
	* @Default {ej.datavisualization.Diagram.VerticalAlignment.Center}
	*/
	verticalAlignment?: ej.datavisualization.Diagram.VerticalAlignment|string;

	/**Enables or disables the visibility of the label
	* @Default {true}
	*/
	visible?: boolean;

	/**Sets the width of the label(the maximum value of label width and the node width will be considered as label width)
	* @Default {50}
	*/
	width?: number;

	/**Defines how the label text needs to be wrapped.
	* @Default {ej.datavisualization.Diagram.TextWrapping.WrapWithOverflow}
	*/
	wrapping?: ej.datavisualization.Diagram.TextWrapping|string;
}

export interface NodesLanes {

	/**Allows to maintain additional information about lane
	* @Default {{}}
	*/
	addInfo?: any;

	/**An array of objects where each object represents a child node of the lane
	* @Default {[]}
	*/
	children?: Array<any>;

	/**Defines the fill color of the lane
	* @Default {white}
	*/
	fillColor?: string;

	/**Defines the header of the lane
	* @Default {{ text: Function, fontSize: 11 }}
	*/
	header?: any;

	/**Defines the object as a lane
	* @Default {false}
	*/
	isLane?: boolean;

	/**Sets the unique identifier of the lane
	*/
	name?: string;

	/**Sets the orientation of the lane.
	* @Default {vertical}
	*/
	orientation?: string;
}

export interface NodesPaletteItem {

	/**Defines whether the symbol should be drawn at its actual size regardless of precedence factors or not
	* @Default {true}
	*/
	enableScale?: boolean;

	/**Defines the height of the symbol
	* @Default {0}
	*/
	height?: number;

	/**Defines the margin of the symbol item
	* @Default {{ left: 4, right: 4, top: 4, bottom: 4 }}
	*/
	margin?: any;

	/**Defines the preview height of the symbol
	* @Default {undefined}
	*/
	previewHeight?: number;

	/**Defines the preview width of the symbol
	* @Default {undefined}
	*/
	previewWidth?: number;

	/**Defines the width of the symbol
	* @Default {0}
	*/
	width?: number;
}

export interface NodesPhases {

	/**Defines the header of the smaller regions
	* @Default {null}
	*/
	label?: any;

	/**Defines the line color of the splitter that splits adjacent phases.
	* @Default {#606060}
	*/
	lineColor?: string;

	/**Sets the dash array that used to stroke the phase splitter
	* @Default {3,3}
	*/
	lineDashArray?: string;

	/**Sets the lineWidth of the phase
	* @Default {1}
	*/
	lineWidth?: number;

	/**Sets the unique identifier of the phase
	*/
	name?: string;

	/**Sets the length of the smaller region(phase) of a swimlane
	* @Default {100}
	*/
	offset?: number;

	/**Sets the orientation of the phase
	* @Default {horizontal}
	*/
	orientation?: string;

	/**Sets the type of the object as phase
	* @Default {phase}
	*/
	type?: string;
}

export interface NodesPorts {

	/**Sets the border color of the port
	* @Default {#1a1a1a}
	*/
	borderColor?: string;

	/**Sets the stroke width of the port
	* @Default {1}
	*/
	borderWidth?: number;

	/**Defines the space to be left between the port bounds and its incoming and outgoing connections.
	* @Default {0}
	*/
	connectorPadding?: number;

	/**Defines whether connections can be created with the port
	* @Default {ej.datavisualization.Diagram.PortConstraints.Connect}
	*/
	constraints?: ej.datavisualization.Diagram.PortConstraints|string;

	/**Sets the fill color of the port
	* @Default {white}
	*/
	fillColor?: string;

	/**Sets the unique identifier of the port
	*/
	name?: string;

	/**Defines the position of the port as fraction/ ratio relative to node
	* @Default {ej.datavisualization.Diagram.Point(0, 0)}
	*/
	offset?: any;

	/**Defines the path data to draw the port. Applicable, if the port shape is path.
	*/
	pathData?: string;

	/**Defines the shape of the port.
	* @Default {ej.datavisualization.Diagram.PortShapes.Square}
	*/
	shape?: ej.datavisualization.Diagram.PortShapes|string;

	/**Defines the size of the port
	* @Default {8}
	*/
	size?: number;

	/**Defines when the port should be visible.
	* @Default {ej.datavisualization.Diagram.PortVisibility.Default}
	*/
	visibility?: ej.datavisualization.Diagram.PortVisibility|string;
}

export interface NodesShadow {

	/**Defines the angle of the shadow relative to node
	* @Default {45}
	*/
	angle?: number;

	/**Sets the distance to move the shadow relative to node
	* @Default {5}
	*/
	distance?: number;

	/**Defines the opaque of the shadow
	* @Default {0.7}
	*/
	opacity?: number;
}

export interface NodesSubProcess {

	/**Defines whether the bpmn sub process is without any prescribed order or not
	* @Default {false}
	*/
	adhoc?: boolean;

	/**Sets the boundary of the BPMN process
	* @Default {ej.datavisualization.Diagram.BPMNBoundary.Default}
	*/
	boundary?: ej.datavisualization.Diagram.BPMNBoundary|string;

	/**Sets whether the bpmn subprocess is triggered as a compensation of a specific activity
	* @Default {false}
	*/
	compensation?: boolean;

	/**Defines the loop type of a sub process.
	* @Default {ej.datavisualization.Diagram.BPMNLoops.None}
	*/
	loop?: ej.datavisualization.Diagram.BPMNLoops|string;
}

export interface NodesTask {

	/**To set whether the task is a global task or not
	* @Default {false}
	*/
	call?: boolean;

	/**Sets whether the task is triggered as a compensation of another specific activity
	* @Default {false}
	*/
	compensation?: boolean;

	/**Sets the loop type of a bpmn task.
	* @Default {ej.datavisualization.Diagram.BPMNLoops.None}
	*/
	loop?: ej.datavisualization.Diagram.BPMNLoops|string;

	/**Sets the type of the BPMN task.
	* @Default {ej.datavisualization.Diagram.BPMNTasks.None}
	*/
	type?: ej.datavisualization.Diagram.BPMNTasks|string;
}

export interface Nodes {

	/**Defines the type of BPMN Activity. Applicable, if the node is a bpmn activity.
	* @Default {ej.datavisualization.Diagram.BPMNActivity.Task}
	*/
	activity?: ej.datavisualization.Diagram.BPMNActivity|string;

	/**To maintain additional information about nodes
	* @Default {{}}
	*/
	addInfo?: any;

	/**Sets the border color of node
	* @Default {black}
	*/
	borderColor?: string;

	/**Sets the pattern of dashes and gaps to stroke the border
	*/
	borderDashArray?: string;

	/**Sets the border width of the node
	* @Default {1}
	*/
	borderWidth?: number;

	/**Defines whether the group can be ungrouped or not
	* @Default {true}
	*/
	canUngroup?: boolean;

	/**Array of JSON objects where each object represents a child node/connector
	* @Default {[]}
	*/
	children?: Array<any>;

	/**Defines whether the BPMN data object is a collection or not
	* @Default {false}
	*/
	collection?: boolean;

	/**Defines the distance to be left between a node and its connections(In coming and out going connections).
	* @Default {0}
	*/
	connectorPadding?: number;

	/**Enables or disables the default behaviors of the node.
	* @Default {ej.datavisualization.Diagram.NodeConstraints.Default}
	*/
	constraints?: ej.datavisualization.Diagram.NodeConstraints|string;

	/**Defines how the child objects need to be arranged(Either in any predefined manner or automatically). Applicable, if the node is a group.
	* @Default {null}
	*/
	container?: NodesContainer;

	/**Defines the corner radius of rectangular shapes.
	* @Default {0}
	*/
	cornerRadius?: number;

	/**Configures the styles of shapes
	*/
	cssClass?: string;

	/**Sets the type of the BPMN Events. Applicable, if the node is a bpmn event.
	* @Default {ej.datavisualization.Diagram.BPMNEvents.Start}
	*/
	event?: ej.datavisualization.Diagram.BPMNEvents|string;

	/**Defines whether the node can be automatically arranged using layout or not
	* @Default {false}
	*/
	excludeFromLayout?: boolean;

	/**Defines the fill color of the node
	* @Default {white}
	*/
	fillColor?: string;

	/**Sets the type of the BPMN Gateway. Applicable, if the node is a bpmn gateway.
	* @Default {ej.datavisualization.Diagram.BPMNGateways.None}
	*/
	gateway?: ej.datavisualization.Diagram.BPMNGateways|string;

	/**Paints the node with a smooth transition from one color to another color
	*/
	gradient?: NodesGradient;

	/**Defines the header of a swimlane/lane
	* @Default {{ text: Title, fontSize: 11 }}
	*/
	header?: any;

	/**Defines the height of the node
	* @Default {0}
	*/
	height?: number;

	/**Sets the horizontal alignment of the node. Applicable, if the parent of the node is a container.
	* @Default {ej.datavisualization.Diagram.HorizontalAlignment.Left}
	*/
	horizontalAlign?: ej.datavisualization.Diagram.HorizontalAlignment|string;

	/**A read only collection of the incoming connectors/edges of the node
	* @Default {[]}
	*/
	inEdges?: Array<any>;

	/**Defines whether the sub tree of the node is expanded or collapsed
	* @Default {true}
	*/
	isExpanded?: boolean;

	/**Sets the node as a swimlane
	* @Default {false}
	*/
	isSwimlane?: boolean;

	/**A collection of objects where each object represents a label
	* @Default {[]}
	*/
	labels?: Array<NodesLabels>;

	/**An array of objects where each object represents a lane. Applicable, if the node is a swimlane.
	* @Default {[]}
	*/
	lanes?: Array<NodesLanes>;

	/**Defines the minimum space to be left between the bottom of parent bounds and the node. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginBottom?: number;

	/**Defines the minimum space to be left between the left of parent bounds and the node. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginLeft?: number;

	/**Defines the minimum space to be left between the right of the parent bounds and the node. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginRight?: number;

	/**Defines the minimum space to be left between the top of parent bounds and the node. Applicable, if the parent is a container.
	* @Default {0}
	*/
	marginTop?: number;

	/**Defines the maximum height limit of the node
	* @Default {0}
	*/
	maxHeight?: number;

	/**Defines the maximum width limit of the node
	* @Default {0}
	*/
	maxWidth?: number;

	/**Defines the minimum height limit of the node
	* @Default {0}
	*/
	minHeight?: number;

	/**Defines the minimum width limit of the node
	* @Default {0}
	*/
	minWidth?: number;

	/**Sets the unique identifier of the node
	*/
	name?: string;

	/**Defines the position of the node on X-Axis
	* @Default {0}
	*/
	offsetX?: number;

	/**Defines the position of the node on Y-Axis
	* @Default {0}
	*/
	offsetY?: number;

	/**Defines the opaque of the node
	* @Default {1}
	*/
	opacity?: number;

	/**Defines the orientation of nodes. Applicable, if the node is a swimlane.
	* @Default {vertical}
	*/
	orientation?: string;

	/**A read only collection of outgoing connectors/edges of the node
	* @Default {[]}
	*/
	outEdges?: Array<any>;

	/**Defines the minimum padding value to be left between the bottom most position of a group and its children. Applicable, if the group is a container.
	* @Default {0}
	*/
	paddingBottom?: number;

	/**Defines the minimum padding value to be left between the left most position of a group and its children. Applicable, if the group is a container.
	* @Default {0}
	*/
	paddingLeft?: number;

	/**Defines the minimum padding value to be left between the right most position of a group and its children. Applicable, if the group is a container.
	* @Default {0}
	*/
	paddingRight?: number;

	/**Defines the minimum padding value to be left between the top most position of a group and its children. Applicable, if the group is a container.
	* @Default {0}
	*/
	paddingTop?: number;

	/**Defines the size and preview size of the node to add that to symbol palette
	* @Default {null}
	*/
	paletteItem?: NodesPaletteItem;

	/**Sets the name of the parent group
	*/
	parent?: string;

	/**Sets the path geometry that defines the shape of a path node
	*/
	pathData?: string;

	/**An array of objects, where each object represents a smaller region(phase) of a swimlane.
	* @Default {[]}
	*/
	phases?: Array<NodesPhases>;

	/**Sets the height of the phase headers
	* @Default {0}
	*/
	phaseSize?: number;

	/**Sets the ratio/ fractional value relative to node, based on which the node will be transformed(positioning, scaling and rotation)
	* @Default {ej.datavisualization.Diagram.Points(0.5,0.5)}
	*/
	pivot?: any;

	/**Defines a collection of points to draw a polygon. Applicable, if the shape is a polygon.
	* @Default {[]}
	*/
	points?: Array<any>;

	/**An array of objects where each object represents a port
	* @Default {[]}
	*/
	ports?: Array<NodesPorts>;

	/**Sets the angle to which the node should be rotated
	* @Default {0}
	*/
	rotateAngle?: number;

	/**Defines the opacity and the position of shadow
	* @Default {ej.datavisualization.Diagram.Shadow()}
	*/
	shadow?: NodesShadow;

	/**Sets the shape of the node. It depends upon the type of node.
	* @Default {ej.datavisualization.Diagram.BasicShapes.Rectangle}
	*/
	shape?: ej.datavisualization.Diagram.BasicShapes|string;

	/**Sets the source path of the image. Applicable, if the type of the node is image.
	*/
	source?: string;

	/**Defines the sub process of a BPMN Activity. Applicable, if the type of the bpmn activity is sub process.
	* @Default {ej.datavisualization.Diagram.BPMNSubProcess()}
	*/
	subProcess?: NodesSubProcess;

	/**Defines the task of the bpmn activity. Applicable, if the type of activity is set as task.
	* @Default {ej.datavisualization.Diagram.BPMNTask()}
	*/
	task?: NodesTask;

	/**Sets the id of svg/html templates. Applicable, if the node is html or native.
	*/
	templateId?: string;

	/**Defines the textBlock of a text node
	* @Default {null}
	*/
	textBlock?: any;

	/**Defines the tooltip that should be shown when the mouse hovers over node. For tooltip properties, refer Tooltip
	* @Default {null}
	*/
	tooltip?: any;

	/**Sets the type of BPMN Event Triggers.
	* @Default {ej.datavisualization.Diagram.BPMNTriggers.None}
	*/
	trigger?: ej.datavisualization.Diagram.BPMNTriggers|string;

	/**Defines the type of the node.
	* @Default {ej.datavisualization.Diagram.Shapes.Basic}
	*/
	type?: ej.datavisualization.Diagram.Shapes|string;

	/**Sets the vertical alignment of a node. Applicable, if the parent of a node is a container.
	* @Default {ej.datavisualization.Diagram.VerticalAlignment.Top}
	*/
	verticalAlign?: ej.datavisualization.Diagram.VerticalAlignment|string;

	/**Defines the visibility of the node
	* @Default {true}
	*/
	visible?: boolean;

	/**Defines the width of the node
	* @Default {0}
	*/
	width?: number;

	/**Defines the z-index of the node
	* @Default {0}
	*/
	zOrder?: number;
}

export interface PageSettings {

	/**Defines the maximum distance to be left between the object and the scroll bar to trigger auto scrolling
	* @Default {{ left: 15, top: 15, right: 15, bottom: 15 }}
	*/
	autoScrollBorder?: any;

	/**Sets whether multiple pages can be created to fit all nodes and connectors
	* @Default {false}
	*/
	multiplePage?: boolean;

	/**Defines the background color of diagram pages
	* @Default {#ffffff}
	*/
	pageBackgroundColor?: string;

	/**Defines the page border color
	* @Default {#565656}
	*/
	pageBorderColor?: string;

	/**Sets the border width of diagram pages
	* @Default {0}
	*/
	pageBorderWidth?: number;

	/**Defines the height of a page
	* @Default {null}
	*/
	pageHeight?: number;

	/**Defines the page margin
	* @Default {24}
	*/
	pageMargin?: number;

	/**Sets the orientation of the page.
	* @Default {ej.datavisualization.Diagram.PageOrientations.Portrait}
	*/
	pageOrientation?: ej.datavisualization.Diagram.PageOrientations|string;

	/**Defines the height of a diagram page
	* @Default {null}
	*/
	pageWidth?: number;

	/**Defines the scrollable area of diagram. Applicable, if the scroll limit is &quot;limited&quot;.
	* @Default {null}
	*/
	scrollableArea?: any;

	/**Defines the scrollable region of diagram.
	* @Default {ej.datavisualization.Diagram.ScrollLimit.Infinite}
	*/
	scrollLimit?: ej.datavisualization.Diagram.ScrollLimit|string;

	/**Enables or disables the page breaks
	* @Default {false}
	*/
	showPageBreak?: boolean;
}

export interface ScrollSettings {

	/**Allows to read the zoom value of diagram
	* @Default {0}
	*/
	currentZoom?: number;

	/**Sets the horizontal scroll offset
	* @Default {0}
	*/
	horizontalOffset?: number;

	/**Allows to extend the scrollable region that is based on the scroll limit
	* @Default {{left: 0, right: 0, top:0, bottom: 0}}
	*/
	padding?: any;

	/**Sets the vertical scroll offset
	* @Default {0}
	*/
	verticalOffset?: number;

	/**Allows to read the view port height of the diagram
	* @Default {0}
	*/
	viewPortHeight?: number;

	/**Allows to read the view port width of the diagram
	* @Default {0}
	*/
	viewPortWidth?: number;
}

export interface SelectedItems {

	/**A read only collection of the selected items
	* @Default {[]}
	*/
	children?: Array<any>;

	/**Controls the visibility of selector.
	* @Default {ej.datavisualization.Diagram.SelectorConstraints.All}
	*/
	constraints?: ej.datavisualization.Diagram.SelectorConstraints|string;

	/**Defines a method that dynamically enables/ disables the interaction with multiple selection.
	* @Default {null}
	*/
	getConstraints?: any;

	/**Sets the height of the selected items
	* @Default {0}
	*/
	height?: number;

	/**Sets the x position of the selector
	* @Default {0}
	*/
	offsetX?: number;

	/**Sets the y position of the selector
	* @Default {0}
	*/
	offsetY?: number;

	/**Sets the angle to rotate the selected items
	* @Default {0}
	*/
	rotateAngle?: number;

	/**Sets the angle to rotate the selected items. For tooltip properties, refer Tooltip
	* @Default {ej.datavisualization.Diagram.Tooltip()}
	*/
	tooltip?: any;

	/**A collection of frequently using commands that have to be added around the selector.
	* @Default {[]}
	*/
	userHandles?: Array<any>;

	/**Sets the width of the selected items
	* @Default {0}
	*/
	width?: number;
}

export interface SnapSettingsHorizontalGridLines {

	/**Defines the line color of horizontal grid lines
	* @Default {lightgray}
	*/
	lineColor?: string;

	/**Specifies the pattern of dashes and gaps used to stroke horizontal grid lines
	*/
	lineDashArray?: string;

	/**A pattern of lines and gaps that defines a set of horizontal gridlines
	* @Default {[1.25, 18.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75]}
	*/
	linesInterval?: Array<any>;

	/**Specifies a set of intervals to snap the objects
	* @Default {[20]}
	*/
	snapInterval?: Array<any>;
}

export interface SnapSettingsVerticalGridLines {

	/**Defines the line color of horizontal grid lines
	* @Default {lightgray}
	*/
	lineColor?: string;

	/**Specifies the pattern of dashes and gaps used to stroke horizontal grid lines
	*/
	lineDashArray?: string;

	/**A pattern of lines and gaps that defines a set of horizontal gridlines
	* @Default {[1.25, 18.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75, 0.25, 19.75]}
	*/
	linesInterval?: Array<any>;

	/**Specifies a set of intervals to snap the objects
	* @Default {[20]}
	*/
	snapInterval?: Array<any>;
}

export interface SnapSettings {

	/**Enables or disables snapping nodes/connectors to objects
	* @Default {true}
	*/
	enableSnapToObject?: boolean;

	/**Defines the appearance of horizontal gridlines
	*/
	horizontalGridLines?: SnapSettingsHorizontalGridLines;

	/**Defines the angle by which the object needs to be snapped
	* @Default {5}
	*/
	snapAngle?: number;

	/**Defines the minimum distance between the selected object and the nearest object
	* @Default {5}
	*/
	snapObjectDistance?: number;

	/**Defines the appearance of horizontal gridlines
	*/
	verticalGridLines?: SnapSettingsVerticalGridLines;
}

export interface TooltipAlignment {

	/**Defines the horizontal alignment of tooltip.
	* @Default {ej.datavisualization.Diagram.HorizontalAlignment.Center}
	*/
	horizontal?: ej.datavisualization.Diagram.HorizontalAlignment|string;

	/**Defines the vertical alignment of tooltip.
	* @Default {ej.datavisualization.Diagram.VerticalAlignment.Bottom}
	*/
	vertical?: ej.datavisualization.Diagram.VerticalAlignment|string;
}

export interface Tooltip {

	/**Aligns the tooltip around nodes/connectors
	*/
	alignment?: TooltipAlignment;

	/**Sets the margin of the tooltip
	* @Default {{ left: 5, right: 5, top: 5, bottom: 5 }}
	*/
	margin?: any;

	/**Defines whether the tooltip should be shown at the mouse position or around node.
	* @Default {ej.datavisualization.Diagram.RelativeMode.Object}
	*/
	relativeMode?: ej.datavisualization.Diagram.RelativeMode|string;

	/**Sets the svg/html template to be bound with tooltip
	*/
	templateId?: string;
}
}
module Diagram
{
enum BridgeDirection
{
//Used to set the direction of line bridges as left
Left,
//Used to set the direction of line bridges as right
Right,
//Used to set the direction of line bridges as top
Top,
//Used to set the direction of line bridges as bottom
Bottom,
}
}
module Diagram
{
enum Keys
{
//No key pressed.
None,
//The A key.
A,
//The B key.
B,
//The C key.
C,
//The D Key.
D,
//The E key.
E,
//The F key.
F,
//The G key.
G,
//The H Key.
H,
//The I key.
I,
//The J key.
J,
//The K key.
K,
//The L Key.
L,
//The M key.
M,
//The N key.
N,
//The O key.
O,
//The P Key.
P,
//The Q key.
Q,
//The R key.
R,
//The S key.
S,
//The T Key.
T,
//The U key.
U,
//The V key.
V,
//The W key.
W,
//The X key.
X,
//The Y key.
Y,
//The Z key.
Z,
//The 0 key.
Number0,
//The 1 key.
Number1,
//The 2 key.
Number2,
//The 3 key.
Number3,
//The 4 key.
Number4,
//The 5 key.
Number5,
//The 6 key.
Number6,
//The 7 key.
Number7,
//The 8 key.
Number8,
//The 9 key.
Number9,
//The LEFT ARROW key.
Left,
//The UP ARROW key.
Up,
//The RIGHT ARROW key.
Right,
//The DOWN ARROW key.
Down,
//The ESC key.
Escape,
//The DEL key.
Delete,
//The TAB key.
Tab,
//The ENTER key.
Enter,
}
}
module Diagram
{
enum KeyModifiers
{
//No modifiers are pressed.
None,
//The ALT key.
Alt,
//The CTRL key.
Control,
//The SHIFT key.
Shift,
}
}
module Diagram
{
enum ConnectorConstraints
{
//Disable all connector Constraints
None,
//Enables connector to be selected
Select,
//Enables connector to be Deleted
Delete,
//Enables connector to be Dragged
Drag,
//Enables connectors source end to be selected
DragSourceEnd,
//Enables connectors target end to be selected
DragTargetEnd,
//Enables control point and end point of every segment in a connector for editing
DragSegmentThumb,
//Enables bridging to the connector
Bridging,
//Enables label of node to be Dragged
DragLabel,
//Enables bridging to the connector
InheritBridging,
//Enables all constraints
Default,
}
}
module Diagram
{
enum HorizontalAlignment
{
//Used to align text horizontally on left side of node/connector
Left,
//Used to align text horizontally on center of node/connector
Center,
//Used to align text horizontally on right side of node/connector
Right,
}
}
module Diagram
{
enum Segments
{
//Used to specify the lines as Straight
Straight,
//Used to specify the lines as Orthogonal
Orthogonal,
//Used to specify the lines as Bezier
Bezier,
}
}
module Diagram
{
enum DecoratorShapes
{
//Used to set decorator shape as none
None,
//Used to set decorator shape as Arrow
Arrow,
//Used to set decorator shape as Open Arrow
OpenArrow,
//Used to set decorator shape as Circle
Circle,
//Used to set decorator shape as Diamond
Diamond,
//Used to set decorator shape as path
Path,
}
}
module Diagram
{
enum VerticalAlignment
{
//Used to align text Vertically on left side of node/connector
Top,
//Used to align text Vertically on center of node/connector
Center,
//Used to align text Vertically on bottom of node/connector
Bottom,
}
}
module Diagram
{
enum DiagramConstraints
{
//Disables all DiagramConstraints
None,
//Enables/Disables PageEditing
PageEditable,
//Enables/Disables Bridging
Bridging,
//Enables/Disables Zooming
Zoomable,
//Enables/Disables panning on horizontal axis
PannableX,
//Enables/Disables panning on vertical axis
PannableY,
//Enables/Disables Panning
Pannable,
//Enables/Disables undo actions
Undoable,
//Enables all Constraints
Default,
}
}
module Diagram
{
enum LayoutOrientations
{
//Used to set LayoutOrientation from top to bottom
TopToBottom,
//Used to set LayoutOrientation from bottom to top
BottomToTop,
//Used to set LayoutOrientation from left to right
LeftToRight,
//Used to set LayoutOrientation from right to left
RightToLeft,
}
}
module Diagram
{
enum LayoutTypes
{
//Used not to set any specific layout
None,
//Used to set layout type as hierarchical layout
HierarchicalTree,
//Used to set layout type as organnizational chart
OrganizationalChart,
}
}
module Diagram
{
enum BPMNActivity
{
//Used to set BPMN Activity as None
None,
//Used to set BPMN Activity as Task
Task,
//Used to set BPMN Activity as SubProcess
SubProcess,
}
}
module Diagram
{
enum NodeConstraints
{
//Disable all node Constraints
None,
//Enables node to be selected
Select,
//Enables node to be Deleted
Delete,
//Enables node to be Dragged
Drag,
//Enables node to be Rotated
Rotate,
//Enables node to be connected
Connect,
//Enables node to be resize north east
ResizeNorthEast,
//Enables node to be resize east
ResizeEast,
//Enables node to be resize south east
ResizeSouthEast,
//Enables node to be resize south
ResizeSouth,
//Enables node to be resize south west
ResizeSouthWest,
//Enables node to be resize west
ResizeWest,
//Enables node to be resize north west
ResizeNorthWest,
//Enables node to be resize north
ResizeNorth,
//Enables node to be Resized
Resize,
//Enables shadow
Shadow,
//Enables label of node to be Dragged
DragLabel,
//Enables panning should be done while node dragging
AllowPan,
//Enables Proportional resize for node
AspectRatio,
//Enables all node constraints
Default,
}
}
module Diagram
{
enum ContainerType
{
//Sets the container type as Canvas
Canvas,
//Sets the container type as Stack
Stack,
}
}
module Diagram
{
enum BPMNEvents
{
//Used to set BPMN Event as Start
Start,
//Used to set BPMN Event as Intermediate
Intermediate,
//Used to set BPMN Event as End
End,
//Used to set BPMN Event as NonInterruptingStart
NonInterruptingStart,
//Used to set BPMN Event as NonInterruptingIntermediate
NonInterruptingIntermediate,
}
}
module Diagram
{
enum BPMNGateways
{
//Used to set BPMN Gateway as None
None,
//Used to set BPMN Gateway as Exclusive
Exclusive,
//Used to set BPMN Gateway as Inclusive
Inclusive,
//Used to set BPMN Gateway as Parallel
Parallel,
//Used to set BPMN Gateway as Complex
Complex,
//Used to set BPMN Gateway as EventBased
EventBased,
}
}
module Diagram
{
enum LabelEditMode
{
//Used to set label edit mode as edit
Edit,
//Used to set label edit mode as view
View,
}
}
module Diagram
{
enum TextAlign
{
//Used to align text on left side of node/connector
Left,
//Used to align text on center of node/connector
Center,
//Used to align text on Right side of node/connector
Right,
}
}
module Diagram
{
enum TextDecorations
{
//Used to set text decoration of the label as Underline
Underline,
//Used to set text decoration of the label as Overline
Overline,
//Used to set text decoration of the label as LineThrough
LineThrough,
//Used to set text decoration of the label as None
None,
}
}
module Diagram
{
enum TextWrapping
{
//Disables wrapping
NoWrap,
//Enables Line-break at normal word break points
Wrap,
//Enables Line-break at normal word break points with longer word overflows
WrapWithOverflow,
}
}
module Diagram
{
enum PortConstraints
{
//Disable all constraints
None,
//Enables connections with connector
Connect,
}
}
module Diagram
{
enum PortShapes
{
//Used to set port shape as X
X,
//Used to set port shape as Circle
Circle,
//Used to set port shape as Square
Square,
//Used to set port shape as Path
Path,
}
}
module Diagram
{
enum PortVisibility
{
//Set the port visibility as Visible
Visible,
//Set the port visibility as Hidden
Hidden,
//Port get visible when hover connector on node
Hover,
//Port gets visible when connect connector to node
Connect,
//Specifies the port visibility as default
Default,
}
}
module Diagram
{
enum BasicShapes
{
//Used to specify node Shape as Rectangle
Rectangle,
//Used to specify node Shape as Ellipse
Ellipse,
//Used to specify node Shape as Path
Path,
//Used to specify node Shape as Polygon
Polygon,
//Used to specify node Shape as Triangle
Triangle,
//Used to specify node Shape as Plus
Plus,
//Used to specify node Shape as Star
Star,
//Used to specify node Shape as Pentagon
Pentagon,
//Used to specify node Shape as Heptagon
Heptagon,
//Used to specify node Shape as Octagon
Octagon,
//Used to specify node Shape as Trapezoid
Trapezoid,
//Used to specify node Shape as Decagon
Decagon,
//Used to specify node Shape as RightTriangle
RightTriangle,
//Used to specify node Shape as Cylinder
Cylinder,
}
}
module Diagram
{
enum BPMNBoundary
{
//Used to set BPMN SubProcess's Boundary as Default
Default,
//Used to set BPMN SubProcess's Boundary as Call
Call,
//Used to set BPMN SubProcess's Boundary as Event
Event,
}
}
module Diagram
{
enum BPMNLoops
{
//Used to set BPMN Activity's Loop as None
None,
//Used to set BPMN Activity's Loop as Standard
Standard,
//Used to set BPMN Activity's Loop as ParallelMultiInstance
ParallelMultiInstance,
//Used to set BPMN Activity's Loop as SequenceMultiInstance
SequenceMultiInstance,
}
}
module Diagram
{
enum BPMNTasks
{
//Used to set BPMN Task Type as None
None,
//Used to set BPMN Task Type as Service
Service,
//Used to set BPMN Task Type as Receive
Receive,
//Used to set BPMN Task Type as Send
Send,
//Used to set BPMN Task Type as InstantiatingReceive
InstantiatingReceive,
//Used to set BPMN Task Type as Manual
Manual,
//Used to set BPMN Task Type as BusinessRule
BusinessRule,
//Used to set BPMN Task Type as User
User,
//Used to set BPMN Task Type as Script
Script,
//Used to set BPMN Task Type as Parallel
Parallel,
}
}
module Diagram
{
enum BPMNTriggers
{
//Used to set Event Trigger as None
None,
//Used to set Event Trigger as Message
Message,
//Used to set Event Trigger as Timer
Timer,
//Used to set Event Trigger as Escalation
Escalation,
//Used to set Event Trigger as Link
Link,
//Used to set Event Trigger as Error
Error,
//Used to set Event Trigger as Compensation
Compensation,
//Used to set Event Trigger as Signal
Signal,
//Used to set Event Trigger as Multiple
Multiple,
//Used to set Event Trigger as Parallel
Parallel,
}
}
module Diagram
{
enum Shapes
{
//Used to set decorator shape as none
None,
//Used to set decorator shape as Arrow
Arrow,
//Used to set decorator shape as Open Arrow
OpenArrow,
//Used to set decorator shape as Circle
Circle,
//Used to set decorator shape as Diamond
Diamond,
//Used to set decorator shape as path
Path,
}
}
module Diagram
{
enum PageOrientations
{
//Used to set orientation as Landscape
Landscape,
//Used to set orientation as portrait
Portrait,
}
}
module Diagram
{
enum ScrollLimit
{
//Used to set scrollLimit as Infinite
Infinite,
//Used to set scrollLimit as Diagram
Diagram,
//Used to set scrollLimit as Limited
Limited,
}
}
module Diagram
{
enum SelectorConstraints
{
//Hides the selector
None,
//Sets the visibility of rotation handle as visible
Rotator,
//Sets the visibility of resize handles as visible
Resizer,
//Sets the visibility of user handles as visible
UserHandles,
//Sets the visibility of all selection handles as visible
All,
}
}
module Diagram
{
enum Tool
{
//Disables all Tools
None,
//Enables/Disables SingleSelect tool
SingleSelect,
//Enables/Disables MultiSelect tool
MultipleSelect,
//Enables/Disables ZoomPan tool
ZoomPan,
//Enables/Disables DrawOnce tool
DrawOnce,
//Enables/Disables ContinuousDraw tool
ContinuesDraw,
}
}
module Diagram
{
enum RelativeMode
{
//Shows tooltip around the node
Object,
//Shows tooltip at the mouse position
Mouse,
}
}

}

interface JQueryXHR {
}
interface JQueryPromise<T> {
}
interface JQueryDeferred<T> extends JQueryPromise<T> {
}
interface JQueryParam {
}
interface JQuery {
    data(key: any): any;
}
interface JQuery { 

    /*Accordion*/
    ejmAccordion(): JQuery;
    ejmAccordion(options?: ej.mobile.AccordionOptions): JQuery;
    data(key: "ejmAccordion"): ej.mobile.Accordion;
    /*Accordion*/

    /*AutoComplete*/
    ejmAutocomplete(): JQuery;
    ejmAutocomplete(options?: ej.mobile.AutocompleteOptions): JQuery;
    data(key: "ejmAutocomplete"): ej.mobile.Autocomplete;
    /*AutoComplete*/

    /*Button*/
    ejmButton(): JQuery;
    ejmButton(options?: ej.mobile.ButtonOptions): JQuery;
    data(key: "ejmButton"): ej.mobile.Button;

    ejmActionlink(): JQuery;
    ejmActionlink(options?: ej.mobile.ButtonOptions): JQuery;
    data(key: "ejmActionlink"): ej.mobile.Button;
    /*Button*/

    /* DatePicker */
    ejmDatePicker(): JQuery;
    ejmDatePicker(options?: ej.mobile.DatePickerOptions): JQuery;
    data(key: "ejmDatePicker"): ej.mobile.DatePicker;
    /* DatePicker */

    /*Editor*/
    ejmNumeric(): JQuery;
    ejmNumeric(options?: ej.mobile.EditorOptions): JQuery;
    data(key: "ejmNumeric"): ej.mobile.Numeric;
    /*Editor*/

    /* Grid Start */
    ejmGrid(): JQuery;
    ejmGrid(options?: ej.mobile.GridOptions): JQuery;
    data(key: "ejmGrid"): ej.mobile.Grid;
    /* Grid End */

    /*Header*/
    ejmHeader(): JQuery;
    ejmHeader(options?: ej.mobile.HeaderOptions): JQuery;
    data(key: "ejmHeader"): ej.mobile.Header;
    /*Header*/

    /*ListView*/
    ejmListView(): JQuery;
    ejmListView(options?: ej.mobile.ListViewOptions): JQuery;
    data(key: "ejmListView"): ej.mobile.ListView;
    /*ListView*/

    /*Menu*/
    ejmMenu(): JQuery;
    ejmMenu(options?: ej.mobile.MenuOptions): JQuery;
    data(key: "ejmMenu"): ej.mobile.Menu;
    /*Menu*/

    /* ProgressBar */
    ejmProgress(): JQuery;
    ejmProgress(options?: ej.mobile.ProgressOptions): JQuery;
    data(key: "ejmProgress"): ej.mobile.Progress;
    /* ProgressBar */

    /*Radio Button*/
    ejmRadioButton(): JQuery;
    ejmRadioButton(options?: ej.mobile.RadioButtonOptions): JQuery;
    data(key: "ejmRadioButton"): ej.mobile.RadioButton;
    /*Radio Button*/

    /*Rating*/
    ejmRating(): JQuery;
    ejmRating(options?: ej.mobile.RatingOptions): JQuery;
    data(key: "ejmRating"): ej.mobile.Rating;
    /*Rating*/


    /*Rotator*/
    ejmRotator(): JQuery;
    ejmRotator(options?: ej.mobile.RotatorOptions): JQuery;
    data(key: "ejmRotator"): ej.mobile.Rotator;
    /*Rotator*/

    /*Slider*/
    ejmSlider(): JQuery;
    ejmSlider(options?: ej.mobile.SliderOptions): JQuery;
    data(key: "ejmSlider"): ej.mobile.Slider;
    /*Slider*/

    /* Tab */
    ejmTab(): JQuery;
    ejmTab(options?: ej.mobile.TabOptions): JQuery;
    data(key: "ejmTab"): ej.mobile.Tab;
    /* Tab */

    /*Tile*/
    ejmTile(): JQuery;
    ejmTile(options?: ej.mobile.TileOptions): JQuery;
    data(key: "ejmTile"): ej.mobile.Tile;
    /*Tile*/

    /* TimePicker */
    ejmTimePicker(): JQuery;
    ejmTimePicker(options?: ej.mobile.TimePickerOptions): JQuery;
    data(key: "ejmTimePicker"): ej.mobile.TimePicker;
    /* TimePicker */

    /*ToggleButton*/
    ejmToggleButton(): JQuery;
    ejmToggleButton(options?: ej.mobile.ToggleButtonOptions): JQuery;
    data(key: "ejmToggleButton"): ej.mobile.ToggleButton;
    /*ToggleButton*/

    /*Toolbar*/
    ejmToolbar(): JQuery;
    ejmToolbar(options?: ej.mobile.ToolbarOptions): JQuery;
    data(key: "ejmToolbar"): ej.mobile.Toolbar;
    /*Toolbar*/

    /*GroupButton*/
    ejmGroupButton(): JQuery;
    ejmGroupButton(options?: ej.mobile.GroupButtonOptions): JQuery;
    data(key: "ejmGroupButton"): ej.mobile.GroupButton;
    /*GroupButton*/

    /* SplitPane */
    ejmSplitPane(): JQuery;
    ejmSplitPane(options?: ej.mobile.SplitPaneOptions): JQuery;
    data(key: "ejmSplitPane"): ej.mobile.SplitPane;
    /* SplitPane */

    /* Dialog */
    ejmDialog(): JQuery;
    ejmDialog(options?: ej.mobile.DialogOptions): JQuery;
    data(key: "ejmDialog"): ej.mobile.Dialog;
    /* Dialog */

    /* TextBox */
    ejmTextBox(): JQuery;
    ejmTextBox(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmTextBox"): ej.mobile.TextBox;
    /* TextBox */

    /* Password */
    ejmPassword(): JQuery;
    ejmPassword(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmPassword"): ej.mobile.TextBox;
    /* Password */

    /* MaskEdit */
    ejmMaskEdit(): JQuery;
    ejmMaskEdit(options?: ej.mobile.MaskEditOptions): JQuery;
    data(key: "ejmMaskEdit"): ej.mobile.MaskEdit;
    /* MaskEdit */

    /* TextArea */
    ejmTextArea(): JQuery;
    ejmTextArea(options?: ej.mobile.TextBoxOptions): JQuery;
    data(key: "ejmTextArea"): ej.mobile.TextBox;
    /* MaskEdit */

    /* Footer */
    ejmFooter(): JQuery;
    ejmFooter(options?: ej.mobile.FooterOptions): JQuery;
    data(key: "ejmFooter"): ej.mobile.Footer;
    /* Footer */

    /* CheckBox */
    ejmCheckBox(): JQuery;
    ejmCheckBox(options?: ej.mobile.CheckBoxOptions): JQuery;
    data(key: "ejmCheckBox"): ej.mobile.CheckBox;
    /* CheckBox */

    /* ScrollPanel */
    ejmScrollPanel(): JQuery;
    ejmScrollPanel(options: ej.mobile.ScrollPanelOptions): JQuery;
    data(key: "ejmScrollPanel"): ej.mobile.ScrollPanel;
    /* ScrollPanel */	

    /* NavigationDrawer */
    ejmNavigationDrawer(): JQuery;
    ejmNavigationDrawer(options: ej.mobile.NavigationDrawerOptions): JQuery;
    data(key: "ejmNavigationDrawer"): ej.mobile.NavigationDrawer;
    /* NavigationDrawer */	

    /* RadialMenu */
    ejmRadialMenu(): JQuery;
    ejmRadialMenu(options?: ej.mobile.RadialMenuOptions): JQuery;
    data(key: "ejmRadialMenu"): ej.mobile.RadialMenu;
    /* RadialMenu */

    ejLinearGauge(): JQuery;
    ejLinearGauge(options?: ej.datavisualization.LinearGauge.Model): JQuery;
    data(key: "ejLinearGauge"): ej.datavisualization.LinearGauge;

    ejDigitalGauge(): JQuery;
    ejDigitalGauge(options?: ej.datavisualization.DigitalGauge.Model): JQuery;
    data(key: "ejDigitalGauge"): ej.datavisualization.DigitalGauge;

    ejCircularGauge(): JQuery;
    ejCircularGauge(options?: ej.datavisualization.CircularGauge.Model): JQuery;
    data(key: "ejCircularGauge"): ej.datavisualization.CircularGauge;

    ejChart(): JQuery;
    ejChart(options?: ej.datavisualization.Chart.Model): JQuery;
    data(key: "ejChart"): ej.datavisualization.Chart;

    ejRangeNavigator(): JQuery;
    ejRangeNavigator(options?: ej.datavisualization.RangeNavigator.Model): JQuery;
    data(key: "ejRangeNavigator"): ej.datavisualization.RangeNavigator;

    ejBulletGraph(): JQuery;
    ejBulletGraph(options?: ej.datavisualization.BulletGraph.Model): JQuery;
    data(key: "ejBulletGraph"): ej.datavisualization.BulletGraph;

    ejMap(): JQuery;
    ejMap(options?: ej.datavisualization.Map.Model): JQuery;
    data(key: "ejMap"): ej.datavisualization.Map;

    ejTreeMap(): JQuery;
    ejTreeMap(options?: ej.datavisualization.TreeMap.Model): JQuery;
    data(key: "ejTreeMap"): ej.datavisualization.TreeMap;

    ejBarcode(): JQuery;
    ejBarcode(options?: ej.datavisualization.Barcode.Model): JQuery;
    data(key: "ejBarcode"): ej.datavisualization.Barcode;
	
	ejDiagram(): JQuery;
    ejDiagram(options?: ej.datavisualization.Diagram.Model): JQuery;
    data(key: "ejDiagram"): ej.datavisualization.Diagram;

}