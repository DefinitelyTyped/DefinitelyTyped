// Type definitions for SharePoint 2010 and 2013
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../microsoft-ajax/microsoft.ajax.d.ts" />
declare var _spBodyOnLoadFunctions: Function[];
declare var _spBodyOnLoadFunctionNames: string[];
declare var _spBodyOnLoadCalled: boolean;
declare function ExecuteOrDelayUntilBodyLoaded(initFunc: () => void): void;
declare function ExecuteOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean;
declare function ExecuteOrDelayUntilEventNotified(func: Function, eventName: string): boolean;
declare var Strings:any;

declare namespace SP {
    export class SOD {
        static execute(fileName: string, functionName: string, ...args: any[]): void;
        static executeFunc(fileName: string, typeName: string, fn: () => void): void;
        static executeOrDelayUntilEventNotified(func: Function, eventName: string): boolean;
        static executeOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean;
        static notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName: string): void;
        static notifyEventAndExecuteWaitingJobs(eventName: string, args?: any[]): void;
        static registerSod(fileName: string, url: string): void;
        static registerSodDep(fileName: string, dependentFileName: string): void;
        static loadMultiple(keys: string[], fn: () => void, bSync?: boolean): void;
        static delayUntilEventNotified(func: Function, eventName: string): void;

        static get_prefetch(): boolean;
        static set_prefetch(value: boolean): void;

        static get_ribbonImagePrefetchEnabled(): boolean;
        static set_ribbonImagePrefetchEnabled(value: boolean): void;
    }

    export enum ListLevelPermissionMask {
        viewListItems,//: 1,
        insertListItems,//: 2,
        editListItems,//: 4,
        deleteListItems,//: 8,
        approveItems,//: 16,
        openItems,//: 32,
        viewVersions,//: 64,
        deleteVersions,//: 128,
        breakCheckout,//: 256,
        managePersonalViews,//: 512,
        manageLists//: 2048
    }

    export class HtmlBuilder {
        constructor();
        addAttribute(name: string, value: string): void;
        addCssClass(cssClassName: string): void;
        addCommunitiesCssClass(cssClassName: string): void;
        renderBeginTag(tagName: string): void;
        renderEndTag(): void;
        write(s: string): void;
        writeEncoded(s: string): void;
        toString(): string;
    }

    export class ScriptHelpers {
        static disableWebpartSelection(context: SPClientTemplates.RenderContext): void;
        static getDocumentQueryPairs(): { [index: string]: string; };
        static getFieldFromSchema(schema: SPClientTemplates.ListSchema, fieldName: string): SPClientTemplates.FieldSchema;
        static getLayoutsPageUrl(pageName: string, webServerRelativeUrl: string): string;
        static getListLevelPermissionMask(jsonItem: string): number;
        static getTextAreaElementValue(textAreaElement: HTMLTextAreaElement): string;
        static getUrlQueryPairs(docUrl: string): { [index: string]: string; };
        static getUserFieldProperty(item: ListItem, fieldName: string, propertyName: string): any;
        static hasPermission(listPermissionMask: number, listPermission: ListLevelPermissionMask): boolean;
        static newGuid(): SP.Guid;
        static isNullOrEmptyString(str: string): boolean;
        static isNullOrUndefined(obj: any): boolean;
        static isNullOrUndefinedOrEmpty(str: string): boolean;
        static isUndefined(obj: any): boolean;
        static replaceOrAddQueryString(url: string, key: string, value: string): string;
        static removeHtml(str: string): string;
        static removeStyleChildren(element: HTMLElement): void;
        static removeHtmlAndTrimStringWithEllipsis(str: string, maxLength: number): string;
        static setTextAreaElementValue(textAreaElement: HTMLTextAreaElement, newValue: string): void;
        static truncateToInt(n: number): number;
        static urlCombine(path1: string, path2: string): string;
        static resizeImageToSquareLength(imgElement: HTMLImageElement, squareLength: number): void;
    }


    export class PageContextInfo {
        static get_siteServerRelativeUrl(): string;
        static get_webServerRelativeUrl(): string;
        static get_webAbsoluteUrl(): string;
        static get_serverRequestPath(): string;
        static get_siteAbsoluteUrl(): string;
        static get_webTitle(): string;
        static get_tenantAppVersion(): string;
        static get_webLogoUrl(): string;
        static get_webLanguage(): number;
        static get_currentLanguage(): number;
        static get_pageItemId(): number;
        static get_pageListId(): string;
        static get_webPermMasks(): { High: number; Low: number; };
        static get_currentCultureName(): string;
        static get_currentUICultureName(): string;
        static get_clientServerTimeDelta(): number;
        static get_userLoginName(): string;
        static get_webTemplate(): string;
        get_pagePersonalizationScope(): string;
    }

    export class ContextPermissions {
        has(perm: number): boolean;
        hasPermissions(high: number, low: number): boolean;
        fromJson(json: { High: number; Low: number; }): void;
    }

    export module ListOperation {
        export module ViewOperation {
            export function getSelectedView(): string;
            export function navigateUp(viewId: string): void;
            export function refreshView(viewId: string): void;
        }
        export module Selection {
            export function selectListItem(iid: string, bSelect: boolean): void;
            export function getSelectedItems(): { id: number; fsObjType: FileSystemObjectType; }[];
            export function getSelectedList(): string;
            export function getSelectedView(): string;
            export function navigateUp(viewId: string): void;
            export function deselectAllListItems(iid: string): void;
        }
        export module Overrides {
            export function overrideDeleteConfirmation(listId: string, overrideText: string): void;
        }
    }


}

/** Register function to rerun on partial update in MDS-enabled site.*/
declare function RegisterModuleInit(scriptFileName: string, initFunc: () => void): void;

/** Provides access to url and query string parts.*/
declare class JSRequest {
    /** Query string parts.*/
    static QueryString: { [parameter: string]: string; };

    /** initializes class.*/
    static EnsureSetup(): void;

    /** Current file name (after last '/' in url).*/
    static FileName: string;

    /** Current file path (before last '/' in url).*/
    static PathName: string;
}

declare class _spPageContextInfo {
    static alertsEnabled: boolean; //true
    static allowSilverlightPrompt: string; //"True"
    static clientServerTimeDelta: number; //-182
    static crossDomainPhotosEnabled: boolean; //true
    static currentCultureName: string; //"ru-RU"
    static currentLanguage: number; //1049
    static currentUICultureName: string; //"ru-RU"
    static layoutsUrl: string;  //"_layouts/15"
    static pageListId: string;  //"{06ee6d96-f27f-4160-b6bb-c18f187b18a7}"
    static pageItemId: number;
    static pagePersonalizationScope: string; //1
    static serverRequestPath: string; //"/SPTypeScript/Lists/ConditionalFormattingTasksList/AllItems.aspx"
    static siteAbsoluteUrl: string; // "https://gandjustas-7b20d3715e8ed4.sharepoint.com"
    static siteClientTag: string; //"0$$15.0.4454.1021"
    static siteServerRelativeUrl: string; // "/"
    static systemUserKey: string; //"i:0h.f|membership|10033fff84e7cb2b@live.com"
    static tenantAppVersion: string; //"0"
    static userId: number; //12
    static webAbsoluteUrl: string; //"https://gandjustas-7b20d3715e8ed4.sharepoint.com/SPTypeScript"
    static webLanguage: number; //1049
    static webLogoUrl: string; //"/_layouts/15/images/siteIcon.png?rev=23"
    static webPermMasks: { High: number; Low: number; };
    static webServerRelativeUrl: string; //"/SPTypeScript"
    static webTemplate: string; //"17"
    static webTitle: string; //"SPTypeScript"
    static webUIVersion: number; //15
}

declare function STSHtmlEncode(value: string): string;
declare function STSHtmlDecode(value: string): string;

declare function AddEvtHandler(element: HTMLElement, event: string, func: EventListener): void;

/** Gets query string parameter */
declare function GetUrlKeyValue(key: string): string;

declare class AjaxNavigate {
    update(url: string, updateParts: Object, fullNavigate: boolean, anchorName: string): void;
    add_navigate(handler: Function): void;
    remove_navigate(handler: Function): void;
    submit(formToSubmit: HTMLFormElement): void;
    getParam(paramName: string): string;
    getSavedFormAction(): string;
    get_href(): string;
    get_hash(): string;
    get_search(): string;
    convertMDSURLtoRegularURL(mdsPath: string): string;
}

declare var ajaxNavigate: AjaxNavigate;

declare class Browseris {
    firefox: boolean;
    firefox36up: boolean;
    firefox3up: boolean;
    firefox4up: boolean;
    ie: boolean;
    ie55up: boolean;
    ie5up: boolean;
    ie7down: boolean;
    ie8down: boolean;
    ie9down: boolean;
    ie8standard: boolean;
    ie8standardUp: boolean;
    ie9standardUp: boolean;
    ipad: boolean;
    windowsphone: boolean;
    chrome: boolean;
    chrome7up: boolean;
    chrome8up: boolean;
    chrome9up: boolean;
    iever: boolean;
    mac: boolean;
    major: boolean;
    msTouch: boolean;
    isTouch: boolean;
    nav: boolean;
    nav6: boolean;
    nav6up: boolean;
    nav7up: boolean;
    osver: boolean;
    safari: boolean;
    safari125up: boolean;
    safari3up: boolean;
    verIEFull: boolean;
    w3c: boolean;
    webKit: boolean;
    win: boolean;
    win8AppHost: boolean;
    win32: boolean;
    win64bit: boolean;
    winnt: boolean;
    armProcessor: boolean
}

declare var browseris: Browseris;

interface ContextInfo extends SPClientTemplates.RenderContext {
    AllowGridMode: boolean;
    BasePermissions: any;
    BaseViewID: any;
    CascadeDeleteWarningMessage: string;
    ContentTypesEnabled: boolean;
    CurrentSelectedItems: boolean;
    CurrentUserId: number;
    EnableMinorVersions: boolean;
    ExternalDataList: boolean;
    HasRelatedCascadeLists: boolean;
    HttpPath: string;
    HttpRoot: string;
    LastSelectableRowIdx: number;
    LastSelectedItemIID: number;
    LastRowIndexSelected: number;
    RowFocusTimerID: number;
    ListData: any;// SPClientTemplates.ListData_InView | SPClientTemplates.ListData_InForm
    ListSchema: SPClientTemplates.ListSchema;
    ModerationStatus: number;
    PortalUrl: string;
    RecycleBinEnabled: number;
    SelectAllCbx: HTMLElement;
    SendToLocationName: string;
    SendToLocationUrl: string;
    StateInitDone: boolean;
    TableCbxFocusHandler: Function;
    TableMouseoverHandler: Function;
    TotalListItems: number;
    WorkflowsAssociated: boolean;
    clvp: any;
    ctxId: number;
    ctxType: any;
    dictSel: any;
    displayFormUrl: string;
    editFormUrl: string;
    imagesPath: string;
    inGridMode: boolean;
    inGridFullRender: boolean;
    isForceCheckout: boolean;
    isModerated: boolean;
    isPortalTemplate: boolean;
    isVersions: boolean;
    isWebEditorPreview: boolean;
    leavingGridMode: boolean;
    loadingAsyncData: boolean;
    listBaseType: number;
    listName: string;
    listTemplate: string;
    listUrlDir: string;
    newFormUrl: string;
    onRefreshFailed: Function;
    overrideDeleteConfirmation: string;
    overrideFilterQstring: string;
    recursiveView: boolean;
    rootFolderForDisplay: string;
    serverUrl: string;
    verEnabled: boolean;
    view: string;
    queryString: string;
    IsClientRendering: boolean;
    wpq: string;
    rootFolder: string;
    IsAppWeb: boolean;
    NewWOPIDocumentEnabled: boolean;
    NewWOPIDocumentUrl: string;
    AllowCreateFolder: boolean;
    CanShareLinkForNewDocument: boolean;
    noGroupCollapse: boolean;
    SiteTemplateId: number;
    ExcludeFromOfflineClient: boolean;

}

declare function GetCurrentCtx(): ContextInfo;
declare function SetFullScreenMode(fullscreen: boolean): void;
declare namespace SP {
    export enum RequestExecutorErrors {
        requestAbortedOrTimedout,
        unexpectedResponse,
        httpError,
        noAppWeb,
        domainDoesNotMatch,
        noTrustedOrigins,
        iFrameLoadError
    }

    export class RequestExecutor {
        constructor(url: string, options?: any);
        get_formDigestHandlingEnabled(): boolean;
        set_formDigestHandlingEnabled(value: boolean): void;
        get_iFrameSourceUrl(): string;
        set_iFrameSourceUrl(value: string): void;
        executeAsync(requestInfo: RequestInfo): void;
        attemptLogin(returnUrl: string, success: (response: ResponseInfo) => void, error?: (response: ResponseInfo, error: RequestExecutorErrors, statusText: string) => void): void;
    }

    export interface RequestInfo {
        url: string;
        method?: string;
        headers?: { [key: string]: string; };
        /** Can be string or bytearray depending on binaryStringRequestBody field */
        body?: string | Uint8Array;
        binaryStringRequestBody?: boolean;

        /** Currently need fix to get ginary response. Details: http://techmikael.blogspot.ru/2013/07/how-to-copy-files-between-sites-using.html */
        binaryStringResponseBody?: boolean;
        timeout?: number;
        success?: (response: ResponseInfo) => void;
        error?: (response: ResponseInfo, error: RequestExecutorErrors, statusText: string) => void;
        state?: any;
    }

    export interface ResponseInfo {
        statusCode?: number;
        statusText?: string;
        responseAvailable: boolean;
        allResponseHeaders?: string;
        headers?: { [key: string]: string; };
        contentType?: string;
        /** Can be string or bytearray depending on request.binaryStringResponseBody field */
        body?: string | Uint8Array;
        state?: any;
    }

    export class ProxyWebRequestExecutor extends Sys.Net.WebRequestExecutor {
        constructor(url: string, options?: any);
    }

    export class ProxyWebRequestExecutorFactory implements SP.IWebRequestExecutorFactory {
        constructor(url: string, options?: any);
        createWebRequestExecutor(): ProxyWebRequestExecutor;
    }
}
interface MQuery {
    (selector: string, context?: any): MQueryResultSetElements;
    (element: HTMLElement): MQueryResultSetElements;
    (object: MQueryResultSetElements): MQueryResultSetElements;
    <T>(object: MQueryResultSet<T>): MQueryResultSet<T>;
    <T>(object: T): MQueryResultSet<T>;
    (elementArray: HTMLElement[]): MQueryResultSetElements;
    <T>(array: T[]): MQueryResultSet<T>;
    <T>(): MQueryResultSet<T>;

    throttle(fn: Function, interval: number, shouldOverrideThrottle: boolean): Function;

    extend(target: any, ...objs: any[]): Object;
    extend(deep: boolean, target: any, ...objs: any[]): Object;

    makeArray<T>(obj: any): any[];

    isDefined(obj: any): boolean;
    isNotNull(obj: any): boolean;
    isUndefined(obj: any): boolean;
    isNull(obj: any): boolean;
    isUndefinedOrNull(obj: any): boolean;
    isDefinedAndNotNull(obj: any): boolean;
    isString(obj: any): boolean;
    isBoolean(obj: any): boolean;
    isFunction(obj: any): boolean;
    isArray(obj: any): boolean;
    isNode(obj: any): boolean;
    isElement(obj: any): boolean;
    isMQueryResultSet(obj: any): boolean;
    isNumber(obj: any): boolean;
    isObject(obj: any): boolean;
    isEmptyObject(obj: any): boolean;

    ready(callback: () => void): void;
    contains(container: HTMLElement, contained: HTMLElement): boolean;

    proxy(fn: (...args: any[]) => any, context: any, ...args: any[]): Function;
    proxy(context: any, name: string, ...args: any[]): any;

    every<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean;
    every<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: any) => boolean, context?: any): boolean;

    some<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean;
    some<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any): boolean;

    filter<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): T[];
    filter<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): MQueryResultSet<T>;
    filter<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): T[];
    filter<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any): MQueryResultSet<T>;

    forEach<T>(obj: T[], fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach<T>(obj: T[], fn: (elementOfArray: T) => void, context?: any): void;
    forEach<T>(obj: MQueryResultSet<T>, fn: (elementOfArray: T) => void, context?: any): void;

    map<T, U>(array: T[], callback: (elementOfArray: T, indexInArray: number) => U): U[];
    map<T, U>(array: MQueryResultSet<T>, callback: (elementOfArray: T, indexInArray: number) => U): MQueryResultSet<U>;
    map<T, U>(array: T[], callback: (elementOfArray: T) => U): U[];
    map<T, U>(array: MQueryResultSet<T>, callback: (elementOfArray: T) => U): MQueryResultSet<U>;

    indexOf<T>(obj: T[], object: T, startIndex?: number): number;
    lastIndexOf<T>(obj: T[], object: T, startIndex?: number): number;

    data(element: HTMLElement, key: string, value: any): any;
    data(element: HTMLElement, key: string): any;
    data(element: HTMLElement): any;

    removeData(element: HTMLElement, name?: string): MQueryResultSetElements;
    hasData(element: HTMLElement): boolean;
}

interface MQueryResultSetElements extends MQueryResultSet<HTMLElement> {
    append(node: HTMLElement): MQueryResultSetElements;
    append(mQuerySet: MQueryResultSetElements): MQueryResultSetElements;
    append(html: string): MQueryResultSetElements;

    bind(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    unbind(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    trigger(eventType: string): MQueryResultSetElements;
    one(eventType: string, handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;

    detach(): MQueryResultSetElements;

    find(selector: string): MQueryResultSetElements;
    closest(selector: string, context?: any): MQueryResultSetElements;
    offset(): { left: number; top: number; };
    offset(coordinates: { left: any; top: any; }): MQueryResultSetElements;

    filter(selector: string): MQueryResultSetElements;
    filter(fn: (elementOfArray: HTMLElement, indexInArray: number) => boolean, context?: any): MQueryResultSetElements;
    filter(fn: (elementOfArray: HTMLElement) => boolean, context?: any): MQueryResultSetElements;

    not(selector: string): MQueryResultSetElements;

    parent(selector?: string): MQueryResultSetElements;

    offsetParent(selector?: string): MQueryResultSetElements;

    parents(selector?: string): MQueryResultSetElements;
    parentsUntil(selector?: string, filter?: string): MQueryResultSetElements;
    parentsUntil(element?: HTMLElement, filter?: string): MQueryResultSetElements;

    position(): { top: number; left: number; };

    attr(attributeName: string): string;
    attr(attributeName: string, value: any): MQueryResultSetElements;
    attr(map: { [key: string]: any; }): MQueryResultSetElements;
    attr(attributeName: string, func: (index: number, attr: any) => any): MQueryResultSetElements;

    addClass(classNames: string): MQueryResultSetElements;
    removeClass(classNames: string): MQueryResultSetElements;

    css(propertyName: string): string;
    css(propertyNames: string[]): string;
    css(properties: any): MQueryResultSetElements;
    css(propertyName: string, value: any): MQueryResultSetElements;
    css(propertyName: any, value: any): MQueryResultSetElements;

    remove(selector?: string): MQueryResultSetElements;
    children(selector?: string): MQueryResultSetElements;
    empty(): MQueryResultSetElements;
    first(): MQueryResultSetElements;

    data(key: string, value: any): MQueryResultSetElements;
    data(obj: { [key: string]: any; }): MQueryResultSetElements;
    data(key: string): any;

    removeData(key: string): MQueryResultSetElements;

    map(callback: (elementOfArray: HTMLElement, indexInArray: number) => any): MQueryResultSetElements;
    map(callback: (elementOfArray: HTMLElement) => any): MQueryResultSetElements;

    blur(): MQueryResultSetElements;
    blur(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    change(): MQueryResultSetElements;
    change(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    click(): MQueryResultSetElements;
    click(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    dblclick(): MQueryResultSetElements;
    dblclick(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    error(): MQueryResultSetElements;
    error(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focus(): MQueryResultSetElements;
    focus(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focusin(): MQueryResultSetElements;
    focusin(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    focusout(): MQueryResultSetElements;
    focusout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keydown(): MQueryResultSetElements;
    keydown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keypress(): MQueryResultSetElements;
    keypress(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    keyup(): MQueryResultSetElements;
    keyup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    load(): MQueryResultSetElements;
    load(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mousedown(): MQueryResultSetElements;
    mousedown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseenter(): MQueryResultSetElements;
    mouseenter(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseleave(): MQueryResultSetElements;
    mouseleave(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mousemove(): MQueryResultSetElements;
    mousemove(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseout(): MQueryResultSetElements;
    mouseout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseover(): MQueryResultSetElements;
    mouseover(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    mouseup(): MQueryResultSetElements;
    mouseup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    resize(): MQueryResultSetElements;
    resize(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    scroll(): MQueryResultSetElements;
    scroll(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    select(): MQueryResultSetElements;
    select(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    submit(): MQueryResultSetElements;
    submit(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;
    unload(): MQueryResultSetElements;
    unload(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements;

}

interface MQueryResultSet<T> {
    [index: number]: T;
    contains(contained: T): boolean;

    filter(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): MQueryResultSet<T>;
    filter(fn: (elementOfArray: T) => boolean, context?: any): MQueryResultSet<T>;

    every(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    every(fn: (elementOfArray: T) => boolean, context?: any): boolean;

    some(fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any): boolean;
    some(fn: (elementOfArray: T) => boolean, context?: any): boolean;

    map(callback: (elementOfArray: T, indexInArray: number) => any): MQueryResultSet<T>;
    map(callback: (elementOfArray: T) => any): MQueryResultSet<T>;

    forEach(fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void;
    forEach(fn: (elementOfArray: T) => void, context?: any): void;

    indexOf(object: any, startIndex?: number): number;
    lastIndexOf(object: any, startIndex?: number): number;

}

interface MQueryEvent extends Event {
    altKey: boolean;
    attrChange: number;
    attrName: string;
    bubbles: boolean;
    button: number;
    cancelable: boolean;
    ctrlKey: boolean;
    defaultPrevented: boolean;
    detail: number;
    eventPhase: number;
    newValue: string;
    prevValue: string;
    relatedNode: HTMLElement;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
    view: any;
}

declare var m$: MQuery;
declare class CalloutActionOptions {
    /** Text for the action link */
    text: string;
    tooltip: string;
    disabledTooltip: string;
    /** Callback that is executed when the action link is clicked.
        @param event Standard javascript event object
        @param action The action object */
    onClickCallback: (event: Event, action: CalloutAction) => any;
    /** Callback which returns if the action link is enabled */
    isEnabledCallback: (action: CalloutAction) => boolean;
    /** Callback which returns if the action link is visible */
    isVisibleCallback: (action: CalloutAction) => boolean;
    /** Submenu entries for the action. If defined, the action link click will popup the specified menu. */
    menuEntries: CalloutActionMenuEntry[];
}

/** Defines a callout action menu entry */
declare class CalloutActionMenuEntry {
    /** Creates a callout action menu entry
        @param text Text to be displayed as the menu item text
        @param onClickCallback Callback that will be fired when the item is clicked
        @param wzISrc Url of the icon
        @param wzIAlt Alternative text for the icon image
        @param wzISeq Sequence for the menu item
        @param wzDesc Description of the menu item */
    constructor(
        text: string,
        onClickCallback: (actionMenuEntry: CalloutActionMenuEntry, actionMenuEntryIndex: number) => void,
        wzISrc: string,
        wzIAlt: string,
        wzISeq: number,
        wzDesc: string);
}


declare class CalloutActionMenu {
    constructor(actionsId: any);
    addAction(action: CalloutAction): void;
    getActions(): CalloutAction[];
    render(): void;
    refreshActions(): void;
    calculateActionWidth(): void;
}


declare class CalloutAction {
    constructor(options: CalloutActionOptions);
    getText(): string;
    getToolTop(): string;
    getDisabledToolTip(): string;
    getOnClickCallback(event: any, action: CalloutAction): any;
    getIsDisabledCallback(action: CalloutAction): boolean;
    getIsVisibleCallback(action: CalloutAction): boolean;
    getIsMenu(): boolean;
    getMenuEntries(): CalloutActionMenuEntry[];
    render(): void;
    isEnabled(): boolean;
    isVisible(): boolean;
    set(options: CalloutActionOptions): void;
}

declare class Callout {
    /** Sets options for the callout. Not all options can be changed for the callout after its creation. */
    set(options: CalloutOptions): any;
    /** Adds event handler to the callout.
        @param eventName one of the following: "opened", "opening", "closing", "closed" */
    addEventCallback(eventName: string, callback: (callout: Callout) => void): void;
    /** Returns the launch point element of the callout. */
    getLaunchPoint(): HTMLElement;
    /** Returns the ID of the callout. */
    getID(): string;
    /** Returns the title of the callout. */
    getTitle(): string;
    /** Returns the contents of the callout. */
    getContent(): string;
    /** Returns the content element of the callout. */
    getContentElement(): HTMLElement;
    /** Returns the bounding element defined for the callout during its creation. */
    getBoundingBox(): HTMLElement;
    /** Returns the content width defined for the callout during its creation. */
    getContentWidth(): number;
    /** Returns the object that represents open behaivor defined for the callout during its creation. */
    getOpenOptions(): CalloutOpenOptions;
    /** Returns the beak orientation defined for the callout during its creation. */
    getBeakOrientation(): string;
    /** Returns the position algorithm function defined for the callout during its creation. */
    getPositionAlgorithm(): any;
    /** Specifies wherever callout is in "Opened" state */
    isOpen(): boolean;
    /** Specifies wherever callout is in "Opening" state */
    isOpening(): boolean;
    /** Specifies wherever callout is in "Opened" or "Opening" state */
    isOpenOrOpening(): boolean;
    /** Specifies wherever callout is in "Closing" state */
    isClosing(): boolean;
    /** Specifies wherever callout is in "Closed" state */
    isClosed(): boolean;
    /** Returns the callout actions menu */
    getActionMenu(): CalloutActionMenu;
    /** Adds a link to the actions panel in the bottom part of the callout window */
    addAction(action: CalloutAction): void;
    /** Re-renders the actions menu. Call after the actions menu is changed. */
    refreshActions(): void;
    /** Display the callout. Animation can be used only for IE9+ */
    open(useAnimation: boolean): void;
    /** Hide the callout. Animation can be used only for IE9+ */
    close(useAnimation: boolean): void;
    /** Display if hidden, hide if shown. */
    toggle(): void;
    /** Do not call this directly. Instead, use CalloutManager.remove */
    destroy(): void;
}

declare class CalloutOpenOptions {
    /** HTML event name, e.g. "click" */
    event: string;
    /** Callout will be closed on blur */
    closeCalloutOnBlur: boolean;
    /** Close button will be shown within the callout window */
    showCloseButton: boolean;
}

declare class CalloutOptions {
    /** Some unique id for the callout. */
    ID: string;
    /** Element on that the callout is shown. */
    launchPoint: HTMLElement;
    /** One of the following: "topBottom" (default) or "leftRight". */
    beakOrientation: string;
    /** String (HTML allowed) that represents contents of the callout window. */
    content: string;
    /** Title for the callout */
    title: string;
    /** HTML element that represents contents of the callout window. */
    contentElement: HTMLElement;
    /** If defined, callout will be inscribed into the bounding element. */
    boundingBox: HTMLElement;
    /** Content element's width in pixels. By default = 350. */
    contentWidth: number;
    /** Defines opening behavior */
    openOptions: CalloutOpenOptions;
    /** Fires after the callout is rendered but before it is positioned and shown */
    onOpeningCallback: (callout: Callout) => void;
    /** Fires right after the callout is shown */
    onOpenedCallback: (callout: Callout) => void;
    /** Fires right before the callout is closed */
    onClosingCallback: (callout: Callout) => void;
    /** Fires right after the callout is closed */
    onClosedCallback: (callout: Callout) => void;
    /** Sets the position of the callout during its opening phase. For an example of a position algorithm function, please explore defaultPositionAlgorithm function from the callout.debug.js file */
    positionAlgorithm: (callout: Callout) => void;
}


declare class CalloutManager {
    /** Creates a new callout */
    static createNew(options: CalloutOptions): Callout;
    /** Checks if callout with specified ID already exists. If it doesn't, creates it, otherwise returns the existing one. */
    static createNewIfNecessary(options: CalloutOptions): Callout;
    /** Detaches callout from the launch point and destroys it. */
    static remove(callout: Callout): void;
    /** Searches for a callout associated with the specified launch point. Throws error if not found. */
    static getFromLaunchPoint(launchPoint: HTMLElement): Callout;
    /** Searches for a callout associated with the specified launch point. Returns null if not found. */
    static getFromLaunchPointIfExists(launchPoint: HTMLElement): Callout;
    /** Gets the first launch point within the specified ancestor element, and returns true if the associated with it callout is opened or opening.
        If the launch point is not found or the callout is hidden, returns false. */
    static containsOneCalloutOpen(ancestor: HTMLElement): boolean;
    /** Finds the closest launch point based on the specified descendant element, and returns callout associated with the launch point. */
    static getFromCalloutDescendant(descendant: HTMLElement): Callout;
    /** Perform some action for each callout on the page. */
    static forEach(callback: (callout: Callout) => void): void;
    /** Closes all callouts on the page */
    static closeAll(): boolean;
    /** Returns true if at least one of the defined on page callouts is opened. */
    static isAtLeastOneCalloutOpen(): boolean;
    /** Returns true if at least one of the defined on page callouts is opened or opening. */
    static isAtLeastOneCalloutOn(): boolean;
}


declare namespace SPClientTemplates {

    export enum FileSystemObjectType {
        Invalid,
        File,
        Folder,
        Web
    }
    export enum ChoiceFormatType {
        Dropdown,
        Radio
    }

    export enum ClientControlMode {
        Invalid,
        DisplayForm,
        EditForm,
        NewForm,
        View
    }

    export enum RichTextMode {
        Compatible,
        FullHtml,
        HtmlAsXml,
        ThemeHtml
    }
    export enum UrlFormatType {
        Hyperlink,
        Image
    }

    export enum DateTimeDisplayFormat {
        DateOnly,
        DateTime,
        TimeOnly
    }

    export enum DateTimeCalendarType {
        None,
        Gregorian,
        Japan,
        Taiwan,
        Korea,
        Hijri,
        Thai,
        Hebrew,
        GregorianMEFrench,
        GregorianArabic,
        GregorianXLITEnglish,
        GregorianXLITFrench,
        KoreaJapanLunar,
        ChineseLunar,
        SakaEra,
        UmAlQura
    }
    export enum UserSelectionMode {
        PeopleOnly,
        PeopleAndGroups
    }

    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Choice extends FieldSchema_InForm {
        /** List of choices for this field. */
        Choices: string[];
        /** Display format for the choice field */
        FormatType: ChoiceFormatType;
    }
    /** Represents schema for a Lookup field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Lookup extends FieldSchema_InForm {
        /** Specifies if the field allows multiple values */
        AllowMultipleValues: boolean;
        /** Returns base url for a list display form, e.g. "http://portal/web/_layouts/15/listform.aspx?PageType=4"
            You must add "ListId" (Guid of the list) and "ID" (integer Id of the item) parameters in order to use this Url */
        BaseDisplayFormUrl: string;
        /** Indicates if the field is a dependent lookup */
        DependentLookup: boolean;
        /** Indicates wherever the lookup list is throttled (contains more items than value of the "List Throttle Limit" setting). */
        Throttled: boolean;
        /** Returns string representation of a number that represents the current value for the "List Throttle Limit" web application setting.
            Only appears if Throttled property is true, i.e. the target lookup list is throttled. */
        MaxQueryResult: string;
        /** List of choices for this field. */
        Choices: { LookupId: number; LookupValue: string; }[];
        /** Number of choices. Appears only for Lookup field. */
        ChoiceCount: number;

        LookupListId: string;

    }
    /** Represents schema for a DateTime field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_DateTime extends FieldSchema_InForm {
        /** Type of calendar to use */
        CalendarType: DateTimeCalendarType;
        /** Display format for DateTime field. */
        DisplayFormat: DateTimeDisplayFormat;
        /** Indicates wherever current user regional settings specify to display week numbers in day or week views of a calendar.
            Only appears for DateTime fields. */
        ShowWeekNumber: boolean;
        TimeSeparator: string;
        TimeZoneDifference: string;
        FirstDayOfWeek: number;
        FirstWeekOfYear: number;
        HijriAdjustment: number;
        WorkWeek: string;
        LocaleId: string;
        LanguageId: string;
        MinJDay: number;
        MaxJDay: number;
        HoursMode24: boolean;
        HoursOptions: string[];
    }
    /** Represents schema for a DateTime field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Geolocation extends FieldSchema_InForm {
        BingMapsKey: string;
        IsBingMapBlockedInCurrentRegion: boolean;
    }
    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_MultiChoice extends FieldSchema_InForm {
        /** List of choices for this field. */
        MultiChoices: string[];
        /** Indicates wherever fill-in choice is allowed */
        FillInChoice: boolean;
    }
    /** Represents schema for a Choice field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_MultiLineText extends FieldSchema_InForm {
        /** Specifies whether rich text formatting can be used in the field */
        RichText: boolean;
        /** Changes are appended to the existing text. */
        AppendOnly: boolean;
        /** Rich text mode for the field */
        RichTextMode: RichTextMode;
        /** Number of lines configured to display */
        NumberOfLines: number;
        /** A boolean value that specifies whether hyperlinks can be used in this fields. */
        AllowHyperlink: boolean;
        /** WebPartAdderId for the ScriptEditorWebPart */
        ScriptEditorAdderId: string;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Number extends FieldSchema_InForm {
        ShowAsPercentage: boolean;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Text extends FieldSchema_InForm {
        MaxLength: number;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_Url extends FieldSchema_InForm {
        DisplayFormat: UrlFormatType;
    }
    /** Represents schema for a Number field in list form or in list view in grid mode */
    export interface FieldSchema_InForm_User extends FieldSchema_InForm {
        Presence: boolean;
        WithPicture: boolean;
        DefaultRender: boolean;
        WithPictureDetail: boolean;
        /** Server relative Url for ~site/_layouts/listform.aspx */
        ListFormUrl: string;
        /** Server relative Url for ~site/_layouts/userdisp.aspx */
        UserDisplayUrl: string;
        EntitySeparator: string;
        PictureOnly: boolean;
        PictureSize: string;
    }

    export interface FieldSchema {
        /** Specifies if the field can be edited while list view is in the Grid mode */
        AllowGridEditing: boolean;
        /** String representation of the field type, e.g. "Lookup". Same as SPField.TypeAsString */
        FieldType: string;
        /** Internal name of the field */
        Name: string;
        /** For OOTB fields, returns the type of field. For "UserMulti" returns "User", for "LookupMulti" returns "Lookup".
            For custom field types, returns base type of the field. */
        Type: string;
    }

    /** Represents field schema in Grid mode and on list forms.
            Consider casting objects of this type to more specific field types, e.g. FieldSchemaInForm_Lookup */
    export interface FieldSchema_InForm extends FieldSchema {
        /** Description for this field. */
        Description: string;
        /** Direction of the reading order for the field. */
        Direction: string;
        /** Indicates whether the field is hidden */
        Hidden: boolean;
        /** Guid of the field */
        Id: string;
        /** Specifies Input Method Editor (IME) mode bias to use for the field.
            The IME enables conversion of keystrokes between languages when one writing system has more characters than can be encoded for the given keyboard. */
        IMEMode: any;
        /** Specifies if the field is read only */
        ReadOnlyField: boolean;
        /** Specifies wherever field requires values */
        Required: boolean;
        RestrictedMode: boolean;
        /** Title of the field */
        Title: string;
        /** If SPFarm.Local.UseMinWidthForHtmlPicker is true, UseMinWidth will be set to true. Undefined in other cases. */
        UseMinWidth: boolean;
    }

    export interface ListSchema {
        Field: FieldSchema[];
    }


    export interface ListSchema_InForm extends ListSchema {
        Field: FieldSchema_InForm[];
    }
    export interface ListData_InForm {
        Items: Item[];
    }
    export interface RenderContext_FieldInForm extends RenderContext_Form {
        CurrentGroupIdx: number;
        CurrentGroup: Group;
        CurrentItems: Item[];
        CurrentFieldSchema: FieldSchema_InForm;
        CurrentFieldValue: any;
    }
    export interface RenderContext_Form extends RenderContext {
        CurrentItem: Item;
        FieldControlModes: { [fieldInternalName: string]: ClientControlMode; };
        FormContext: ClientFormContext;
        FormUniqueId: string;
        ListData: ListData_InForm;
        ListSchema: ListSchema_InForm;
        CSRCustomLayout?: boolean;
    }



    export interface FieldSchema_InView_LookupField extends FieldSchema_InView {
        /** Either "TRUE" or "FALSE" */
        AllowMultipleValues: string;
        /** Target lookup list display form URL, including PageType and List attributes. */
        DispFormUrl: string;
        /** Either "TRUE" or "FALSE" */
        HasPrefix: string;
    }
    export interface FieldSchema_InView_UserField extends FieldSchema_InView {
        /** Either "TRUE" or "FALSE" */
        AllowMultipleValues: string;
        /** Either "TRUE" or "FALSE" */
        ImnHeader: string;
        /** Either "TRUE" or "FALSE" */
        HasPrefix: string;
        /** Either "1" or "0" */
        HasUserLink: string;
        /** Either "1" or "0" */
        DefaultRender: string;
    }
    /** Represents field schema in a list view. */
    export interface FieldSchema_InView extends FieldSchema {
        /** Either "TRUE" or "FALSE" */
        CalloutMenu: string;
        ClassInfo: string; // e.g. "Menu"
        css: string;
        DisplayName: string;
        /** Either "TRUE" or "FALSE" */
        Explicit: string;
        fieldRenderer: any;
        FieldTitle: string;
        /** Indicates whether the field can be filtered. Either "TRUE" or "FALSE" */
        Filterable: string;
        /** Set to "TRUE" for fields that comply to the following Xpath query:
            ViewFields/FieldRef[@Explicit='TRUE'] | Query/GroupBy/FieldRef[not(@Name=ViewFields/FieldRef/@Name)] */
        GroupField: string;
        /** Either "TRUE" or "FALSE" */
        GridActiveAndReadOnly: string;
        /** Guid of the field */
        ID: string;
        /** Specifies if the field contains list item menu.
            Corresponds to ViewFields/FieldRef/@ListItemMenu attribute. Either "TRUE" or "FALSE" and might be missing. */
        listItemMenu: string;
        RealFieldName: string;
        /** Either "TRUE" or "FALSE" */
        ReadOnly: string;
        ResultType: string;
        /** Indicates whether the field can be sorted. Either "TRUE" or "FALSE" */
        Sortable: string;
    }
    export interface ListSchema_InView extends ListSchema {
        /** Key-value object that represents all aggregations defined for the view.
            Key specifies the field internal name, and value specifies the type of the aggregation. */
        Aggregate: { [name: string]: string; };
        /** Either "TRUE" or false (for grouping) */
        Collapse: string;
        /** Specifies whether to open items in a client application ("1") or in browser ("0"). */
        DefaultItemOpen: string;
        Direction: string;
        /** Either "0" or "1" */
        EffectivePresenceEnabled: string;
        /** If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm[], otherwise cast to FieldSchema_InView[] */
        FieldSortParam: string;
        Filter: any;
        /** Either "0" or "1" */
        ForceCheckout: string;
        /** Internal name for the first group by field, if any */
        group1: string;
        /** Internal name for the second group by field, if any */
        group2: string;
        /** "1" if the view contains "Title" field, otherwise not defined. */
        HasTitle: string;
        HttpVDir: string;
        /** Either "0" or "1" */
        InplaceSearchEnabled: string;
        /** Either "0" or "1" */
        IsDocLib: string;
        /** e.g. "1033" */
        LCID: string;
        /** Either "0" or "1" */
        ListRight_AddListItems: string;
        NoListItem: string;
        NoListItemHowTo: string;
        /** Server-relative path to the current page */
        PagePath: string;
        /** Internal name of the field inside which the hierarchy buttons are displayed */
        ParentHierarchyDisplayField: string;
        PresenceAlt: string;
        /** Represents SPList.RootFolder.Properties. Exists only if SPList.FetchPropertyBagForListView property is set to true. */
        PropertyBag: { [key: string]: string; };
        /** Either "True" or "False" */
        RenderSaveAsNewViewButton: string;
        /** Either "True" or "False" */
        RenderViewSelectorPivotMenu: string;
        /** Either "True" or "False" */
        RenderViewSelectorPivotMenuAsync: string;
        /** Query string parameters that specify GUID of the current view and the current root folder */
        RootFolderParam: string;
        SelectedID: string; // number
        ShowWebPart: string;
        /** Either "1" or undefined. */
        StrikeThroughOnCompletedEnabled: string;
        /** Either "0" or "1" */
        TabularView: string;
        Toolbar: string;
        UIVersion: string; // number
        Userid: string; // number
        UserVanilla: any;
        /** Server relative path to "/_layouts/userdisp.aspx" in the current web */
        UserDispUrl: string;
        /** Either "1" or "" */
        UseParentHierarchy: string;
        /** Guid of the view */
        View: string;
        /** JSON string */
        ViewSelectorPivotMenuOptions: string;
        /** Query string parameters that specify current root folder (RootFolder) and folder content type id (FolderCTID) */
        ViewSelector_ViewParameters: string;
    }
    export interface ListData_InView {
        FilterLink: string;
        FilterFields: string;
        FirstRow: number;
        /** Either "0" or "1" */
        ForceNoHierarchy: string;
        HierarchyHasIndention: string;
        /** Link to the previous page (not defined if not available) */
        PrevHref: string;
        /** Link to the next page  (not defined if not available) */
        NextHref: string;
        SortField: string;
        SortDir: string;
        LastRow: number;
        Row: Item[];
    }
    export interface RenderContext_GroupInView extends RenderContext_InView {
        CurrentGroupIdx: number;
        CurrentGroup: Group;
        CurrentItems: Item[];
    }
    export interface RenderContext_InView extends RenderContext {
        AllowCreateFolder: boolean;
        AllowGridMode: boolean;
        BasePermissions: { [PermissionName: string]: boolean; }; // SP.BasePermissions?
        bInitialRender: boolean;
        CanShareLinkForNewDocument: boolean;
        CascadeDeleteWarningMessage: string;
        clvp: HTMLElement; // not in View
        ContentTypesEnabled: boolean;
        ctxId: number;
        ctxType: any; // not in View
        CurrentUserId: number;
        CurrentUserIsSiteAdmin: boolean;
        dictSel: any;
        /** Absolute path for the list display form */
        displayFormUrl: string;
        /** Absolute path for the list edit form */
        editFormUrl: string;
        EnableMinorVersions: boolean;
        ExternalDataList: boolean;
        enteringGridMode: boolean;
        existingServerFilterHash: any;
        HasRelatedCascadeLists: number;
        heroId: string; // e.g. "idHomePageNewItem"
        HttpPath: string;
        HttpRoot: string;
        imagesPath: string;
        inGridFullRender: any; // not in View
        inGridMode: boolean;
        IsAppWeb: boolean;
        IsClientRendering: boolean;
        isForceCheckout: boolean;
        isModerated: boolean;
        isPortalTemplate: any;
        isWebEditorPreview: number;
        isVersions: number;
        isXslView: boolean;
        LastRowIndexSelected: any; // not in View
        LastSelectableRowIdx: any;
        LastSelectedItemId: any; // not in View
        leavingGridMode: boolean;
        listBaseType: number;
        ListData: ListData_InView;
        ListDataJSONItemsKey: string; // ="Row"
        /** Guid of the list */
        listName: string;
        ListSchema: ListSchema_InView;
        listTemplate: string;
        ListTitle: string;
        listUrlDir: string;
        loadingAsyncData: boolean;
        ModerationStatus: number;
        NavigateForFormsPages: boolean;
        /** Absolute path for the list new form */
        newFormUrl: string;
        NewWOPIDocumentEnabled: any;
        NewWOPIDocumentUrl: any;
        noGroupCollapse: boolean;
        OfficialFileName: string;
        OfficialFileNames: string;
        overrideDeleteConfirmation: string; // not in View
        overrideFilterQstring: string; // not in View
        PortalUrl: string;
        queryString: any;
        recursiveView: boolean;
        /** either 1 or 0 */
        RecycleBinEnabled: number;
        RegionalSettingsTimeZoneBias: string;
        rootFolder: string;
        rootFolderForDisplay: any;
        RowFocusTimerID: any;
        SelectAllCbx: any;
        SendToLocationName: string;
        SendToLocationUrl: string;
        serverUrl: any;
        SiteTitle: string;
        StateInitDone: boolean;
        TableCbxFocusHandler: any;
        TableMouseOverHandler: any;
        TotalListItems: number;
        verEnabled: number;
        /** Guid of the view. */
        view: string;
        viewTitle: string;
        WorkflowAssociated: boolean;
        wpq: string;
        WriteSecurity: string;
    }
    export interface RenderContext_ItemInView extends RenderContext_InView {
        CurrentItem: Item;
        CurrentItemIdx: number;
    }
    export interface RenderContext_FieldInView extends RenderContext_ItemInView {
        /** If in grid mode (context.inGridMode == true), cast to FieldSchema_InForm, otherwise cast to FieldSchema_InView */
        CurrentFieldSchema: FieldSchema_InForm | FieldSchema_InView;
        CurrentFieldValue: any;
        FieldControlsModes: { [fieldInternalName: string]: ClientControlMode; };
        FormContext: ClientFormContext;
        FormUniqueId: string;
    }

    export interface Item {
        [fieldInternalName: string]: any;
    }
    export interface Group {
        Items: Item[];
    }
    type RenderCallback = (ctx: RenderContext) => void;

    export interface RenderContext {
        BaseViewID?: number;
        ControlMode?: ClientControlMode;
        CurrentCultureName?: string;
        CurrentLanguage?: number;
        CurrentSelectedItems?: any;
        CurrentUICultureName?: string;
        ListTemplateType?: number;
        OnPostRender?: RenderCallback | RenderCallback[];
        OnPreRender?: RenderCallback | RenderCallback[];
        onRefreshFailed?: any;
        RenderBody?: (renderContext: RenderContext) => string;
        RenderFieldByName?: (renderContext: RenderContext, fieldName: string) => string;
        RenderFields?: (renderContext: RenderContext) => string;
        RenderFooter?: (renderContext: RenderContext) => string;
        RenderGroups?: (renderContext: RenderContext) => string;
        RenderHeader?: (renderContext: RenderContext) => string;
        RenderItems?: (renderContext: RenderContext) => string;
        RenderView?: (renderContext: RenderContext) => string;
        SiteClientTag?: string;
        Templates?: Templates;
    }

    export interface SingleTemplateCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_InView): string;
    }
    export interface GroupCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_GroupInView): string;
    }
    export interface ItemCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext): string;
    }

    export interface FieldCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext): string;
    }

    export interface FieldInFormCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_FieldInForm): string;
    }
    export interface FieldInViewCallback {
        /** Must return null in order to fall back to a more common template or to a system default template */
        (renderContext: RenderContext_FieldInView): string;
    }

    export interface FieldTemplateOverrides {
        /** Defines templates for rendering the field on a display form. */
        DisplayForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on an edit form. */
        EditForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on a new form. */
        NewForm?: FieldInFormCallback;
        /** Defines templates for rendering the field on a list view. */
        View?: FieldInViewCallback;
    }

    export interface FieldTemplates {
        [fieldInternalName: string]: FieldCallback;
    }

    export interface Templates {
        View?: RenderCallback | string; // TODO: determine appropriate context type and purpose of this template
        Body?: RenderCallback | string; // TODO: determine appropriate context type and purpose of this template
        /** Defines templates for rendering groups (aggregations). */
        Group?: GroupCallback | string;
        /** Defines templates for list items rendering. */
        Item?: ItemCallback | string;
        /** Defines template for rendering list view header.
            Can be either string or SingleTemplateCallback */
        Header?: SingleTemplateCallback | string;
        /** Defines template for rendering list view footer.
            Can be either string or SingleTemplateCallback */
        Footer?: SingleTemplateCallback | string;
        /** Defines templates for fields rendering. The field is specified by it's internal name. */
        Fields?: FieldTemplates;
    }

    export interface FieldTemplateMap {
        [fieldInternalName: string]: FieldTemplateOverrides;
    }

    export interface TemplateOverrides {
        View?: RenderCallback | string; // TODO: determine appropriate context type and purpose of this template
        Body?: RenderCallback | string; // TODO: determine appropriate context type and purpose of this template
        /** Defines templates for rendering groups (aggregations). */
        Group?: GroupCallback | string;
        /** Defines templates for list items rendering. */
        Item?: ItemCallback | string;
        /** Defines template for rendering list view header.
            Can be either string or SingleTemplateCallback */
        Header?: SingleTemplateCallback | string;
        /** Defines template for rendering list view footer.
            Can be either string or SingleTemplateCallback */
        Footer?: SingleTemplateCallback | string;
        /** Defines templates for fields rendering. The field is specified by it's internal name. */
        Fields?: FieldTemplateMap;
    }
    export interface TemplateOverridesOptions {
        /** Template overrides */
        Templates?: TemplateOverrides;

        /** �allbacks called before rendering starts. Can be function (ctx: RenderContext) => void or array of functions.*/
        OnPreRender?: RenderCallback | RenderCallback[];

        /** �allbacks called after rendered html inserted into DOM. Can be function (ctx: RenderContext) => void or array of functions.*/
        OnPostRender?: RenderCallback | RenderCallback[];

        /** View style (SPView.StyleID) for which the templates should be applied.
            If not defined, the templates will be applied only to default view style. */
        ViewStyle?: number;
        /** List template type (SPList.BaseTemplate) for which the template should be applied.
            If not defined, the templates will be applied to all lists. */
        ListTemplateType?: number;
        /** Base view ID (SPView.BaseViewID) for which the template should be applied.
            If not defined, the templates will be applied to all views. */
        BaseViewID?: number | string;
    }
    export class TemplateManager {
        static RegisterTemplateOverrides(renderCtx: TemplateOverridesOptions): void;
        static GetTemplates(renderCtx: RenderContext): Templates;
    }

    export interface ClientUserValue {
        lookupId: number;
        lookupValue: string;
        displayStr: string;
        email: string;
        sip: string;
        title: string;
        picture: string;
        department: string;
        jobTitle: string;
    }
    export interface ClientLookupValue {
        LookupId: number;
        LookupValue: string;
    }
    export interface ClientUrlValue {
        URL: string;
        Description: string;
    }
    export class Utility {
        static ComputeRegisterTypeInfo(renderCtx: TemplateOverridesOptions): any;
        static ControlModeToString(mode: SPClientTemplates.ClientControlMode): string;
        static FileSystemObjectTypeToString(fileSystemObjectType: SPClientTemplates.FileSystemObjectType): string;
        static ChoiceFormatTypeToString(fileSystemObjectType: SPClientTemplates.ChoiceFormatType): string;
        static RichTextModeToString(fileSystemObjectType: SPClientTemplates.RichTextMode): string;
        static IsValidControlMode(mode: number): boolean;
        /** Removes leading and trailing spaces */
        static Trim(str: string): string;
        /** Creates SP.ClientContext based on the specified Web URL. If the SP.Runtime.js script is not loaded, returns null */
        static InitContext(webUrl: string): SP.ClientContext;
        static GetControlOptions(control: HTMLElement): any;
        static TryParseInitialUserValue(userStr: string): ClientUserValue[];
        /** Tries to resolve user names from string. Pushes either ClientUserValue (if resolved successfully) or original string (if not) to the resulting array. */
        static TryParseUserControlValue(userStr: string, separator: string): any[];
        static GetPropertiesFromPageContextInfo(context: RenderContext): void;
        /** Replaces tokens "~site/", "~sitecollection/", "~sitecollectionmasterpagegallery", "{lcid}", "{locale}" and "{siteclienttag}" with appropriate context values */
        static ReplaceUrlTokens(tokenUrl: string): string;
        static ParseLookupValue(valueStr: string): ClientLookupValue;
        static ParseMultiLookupValues(valueStr: string): ClientLookupValue[];
        /** Represents lookup values array in some strange format */
        static BuildLookupValuesAsString(choiceArray: ClientLookupValue[], isMultiLookup: boolean, setGroupDesc: boolean): string;
        static ParseURLValue(value: string): ClientUrlValue;
        static GetFormContextForCurrentField(context: RenderContext_Form): ClientFormContext;
        /** Returns ";#" */
        static UserLookupDelimitString: string;
        /** Returns ";#" */
        static UserMultiValueDelimitString:string;
    }

    export class ClientFormContext {
        fieldValue: any;
        fieldSchema: SPClientTemplates.FieldSchema_InForm;
        fieldName: string;
        controlMode: number;
        webAttributes: {
            AllowScriptableWebParts: boolean;
            CurrentUserId: number;
            EffectivePresenceEnabled: boolean;
            LCID: string;
            PermissionCustomizePages: boolean;
            WebUrl: string;
        };
        itemAttributes: {
            ExternalListItem: boolean;
            FsObjType: number;
            Id: number;
            Url: string;
        };
        listAttributes: {
            BaseType: number;
            DefaultItemOpen: number;
            Direction: string;
            EnableVesioning: boolean;
            Id: string;
        };
        registerInitCallback(fieldname: string, callback: () => void): void;
        registerFocusCallback(fieldname: string, callback: () => void): void;
        registerValidationErrorCallback(fieldname: string, callback: (error: any) => void): void;
        registerGetValueCallback(fieldname: string, callback: () => any): void;
        updateControlValue(fieldname: string, value: any): void;
        registerClientValidator(fieldname: string, validator: SPClientForms.ClientValidation.ValidatorSet): void;
        registerHasValueChangedCallback(fieldname: string, callback: (eventArg?: any) => void): void;
    }

}

declare function GenerateIID(renderCtx: SPClientTemplates.RenderContext_ItemInView): string;
declare function GenerateIIDForListItem(renderCtx: SPClientTemplates.RenderContext_InView, listItem: SPClientTemplates.Item): string;

declare function SPFormControl_AppendValidationErrorMessage(nodeId: string, errorResult: any): void;
declare function CoreRender(template: any, context: any): string;

declare namespace SPClientForms {
    namespace ClientValidation {
        export class ValidationResult {
            constructor(hasErrors: boolean, errorMsg: string);
        }

        export class ValidatorSet {
            public RegisterValidator(validator: IValidator): void;
        }

        export interface IValidator {
            Validate(value: any): ValidationResult;
        }

        export class RequiredValidator implements IValidator {
            Validate(value: any): ValidationResult;
        }

        export class RequiredFileValidator implements IValidator {
            Validate(value: any): ValidationResult;
        }

        export class RequiredRichTextValidator implements IValidator {
            Validate(value: any): ValidationResult;
        }

        export class MaxLengthUrlValidator implements IValidator {
            Validate(value: any): ValidationResult;
        }


    }

    export enum FormManagerEvents {
        Event_OnControlValueChanged,//: 1,
        Event_OnControlInitializedCallback,//: 2,
        Event_OnControlFocusSetCallback,//: 3,
        Event_GetControlValueCallback,//: 4,
        Event_OnControlValidationError,//: 5,
        Event_RegisterControlValidator,//: 6,
        Event_GetHasValueChangedCallback//: 7
    }

    export class ClientForm {
        constructor(qualifier: string);
        RenderClientForm(): void;
        SubmitClientForm(): boolean;
        NotifyControlEvent(eventName: FormManagerEvents, fldName: string, eventArg: any): void;
    }

    export class ClientFormManager {
        static GetClientForm(qualifier: string): ClientForm;
        static RegisterClientForm(qualifier: string): void;
        static SubmitClientForm(qualifier: string): boolean;
    }
}

declare class SPMgr {
    NewGroup(listItem: Object, fieldName: string): boolean;
    RenderHeader(renderCtx: SPClientTemplates.RenderContext, field: SPClientTemplates.FieldSchema): string;
    RenderField(renderCtx: SPClientTemplates.RenderContext, field: SPClientTemplates.FieldSchema, listItem: Object, listSchema: SPClientTemplates.ListSchema): string;
    RenderFieldByName(renderCtx: SPClientTemplates.RenderContext, fieldName: string, listItem: Object, listSchema: SPClientTemplates.ListSchema): string;
}

declare var spMgr: SPMgr;

declare function SPField_FormDisplay_Default(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPField_FormDisplay_DefaultNoEncode(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPField_FormDisplay_Empty(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldText_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldNumber_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldBoolean_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldNote_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldNote_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldFile_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldFile_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldChoice_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldChoice_Dropdown_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldChoice_Radio_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldMultiChoice_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldDateTime_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldDateTime_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldUrl_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldUrl_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldUser_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldUserMulti_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPClientPeoplePickerCSRTemplate(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldLookup_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldLookup_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldLookupMulti_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string;
declare function SPFieldAttachments_Default(ctx: SPClientTemplates.RenderContext_FieldInForm): string;

declare namespace SPAnimation {
    export enum Attribute {
        PositionX,
        PositionY,
        Height,
        Width,
        Opacity
    }

    export enum ID {
        Basic_Show,
        Basic_SlowShow,
        Basic_Fade,
        Basic_Move,
        Basic_Size,
        Content_SlideInFadeInRight,
        Content_SlideInFadeInRightInc,
        Content_SlideOutFadeOutRight,
        Content_SlideInFadeInLeft,
        Content_SlideInFadeInLeftInc,
        SmallObject_SlideInFadeInTop,
        SmallObject_SlideInFadeInLeft,
        Test_Instant,
        Test_Hold,
        Basic_Opacity,
        Basic_QuickShow,
        Basic_QuickFade,
        Content_SlideInFadeInGeneric,
        Basic_StrikeThrough,
        SmallObject_SlideInFadeInBottom,
        SmallObject_SlideOutFadeOutBottom,
        Basic_QuickSize
    }

    export class Settings {
        static DisableAnimation(): void;
        static DisableSessionAnimation(): void;
        static IsAnimationEnabled(): boolean;
    }


    export class State {
        SetAttribute(attributeId: Attribute, value: number): void;
        GetAttribute(attributeId: Attribute): number;
        GetDataIndex(attributeId: Attribute): number
    }

    export class Object {
        constructor(animationID: ID, delay: number, element: HTMLElement, finalState: State, finishFunc?: (data: any) => void, data?: any);
        constructor(animationID: ID, delay: number, element: HTMLElement[], finalState: State, finishFunc?: (data: any) => void, data?: any);
        RunAnimation(): void;
    }
}

declare namespace SPAnimationUtility {
    export class BasicAnimator {
        static FadeIn(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
        static FadeOut(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
        static Move(element: HTMLElement, posX: number, posY: number, finishFunc?: (data: any) => void, data?: any): void;
        static StrikeThrough(element: HTMLElement, strikeThroughWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static Resize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static CommonResize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc: (data: any) => void, data: any, animationId: SPAnimation.ID): void;
        static QuickResize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static ResizeContainerAndFillContent(element: HTMLElement, newHeight: number, newWidth: number, finishFunc: () => void, fAddToEnd: boolean): void;
        static GetWindowScrollPosition(): { x: number; y: number; };
        static GetLeftOffset(element: HTMLElement): number;
        static GetTopOffset(element: HTMLElement): number;
        static GetRightOffset(element: HTMLElement): number;
        static PositionElement(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static PositionAbsolute(element: HTMLElement): void;
        static PositionRelative(element: HTMLElement): void;
        static PositionRelativeExact(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static PositionAbsoluteExact(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static IsPositioned(element: HTMLElement): boolean;
    }
}

interface IEnumerator<T> {
    get_current(): T;
    moveNext(): boolean;
    reset(): void;
}

interface IEnumerable<T> {
    getEnumerator(): IEnumerator<T>;
}

declare namespace SP {
    export class ScriptUtility {
        static isNullOrEmptyString(str: string): boolean;
        static isNullOrUndefined(obj: any): boolean;
        static isUndefined(obj: any): boolean;
        static truncateToInt(n: number): number;
    }
    export class Guid {
        constructor(guidText: string);
        static get_empty(): SP.Guid;
        static newGuid(): SP.Guid;
        static isValid(uuid: string): boolean;
        toString(): string;
        toString(format: string): string;
        equals(uuid: SP.Guid): boolean;
        toSerialized(): string;
    }
    /** Specifies permissions that are used to define user roles. Represents SPBasePermissions class. */
    export enum PermissionKind {
        /** Has no permissions on the Web site. Not available through the user interface. */
        emptyMask,
        /** View items in lists, documents in document libraries, and view Web discussion comments. */
        viewListItems,
        /** Add items to lists, add documents to document libraries, and add Web discussion comments. */
        addListItems,
        /** Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents, and customize Web Part Pages in document libraries. */
        editListItems,
        /** Delete items from a list, documents from a document library, and Web discussion comments in documents. */
        deleteListItems,
        /** Approve a minor version of a list item or document. */
        approveItems,
        /** View the source of documents with server-side file handlers. */
        openItems,
        /** View past versions of a list item or document. */
        viewVersions,
        /** Delete past versions of a list item or document. */
        deleteVersions,
        /** Discard or check in a document which is checked out to another user. */
        cancelCheckout,
        /** Create, change, and delete personal views of lists. */
        managePersonalViews,
        /** Create and delete lists, add or remove columns in a list, and add or remove public views of a list. */
        manageLists,
        /** View forms, views, and application pages, and enumerate lists. */
        viewFormPages,
        /** Make content of a list or document library retrieveable for anonymous users through SharePoint search. The list permissions in the site do not change.  */
        anonymousSearchAccessList,
        /** Allow users to open a Web site, list, or folder to access items inside that container. */
        open,
        /** View pages in a Web site. */
        viewPages,
        /** Add, change, or delete HTML pages or Web Part Pages, and edit the Web site using a SharePoint Foundation?compatible editor. */
        addAndCustomizePages,
        /** Apply a theme or borders to the entire Web site. */
        applyThemeAndBorder,
        /** Apply a style sheet (.css file) to the Web site. */
        applyStyleSheets,
        /** View reports on Web site usage. */
        viewUsageData,
        /** Create a Web site using Self-Service Site Creation. */
        createSSCSite,
        /** Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.  */
        manageSubwebs,
        /** Create a group of users that can be used anywhere within the site collection. */
        createGroups,
        /** Create and change permission levels on the Web site and assign permissions to users and groups. */
        managePermissions,
        /** Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces. */
        browseDirectories,
        /** View information about users of the Web site. */
        browseUserInfo,
        /** Add or remove personal Web Parts on a Web Part Page. */
        addDelPrivateWebParts,
        /** Update Web Parts to display personalized information. */
        updatePersonalWebParts,
        /** Grant the ability to perform all administration tasks for the Web site as well as manage content. Activate, deactivate, or edit properties of Web site scoped Features through the object model or through the user interface (UI). When granted on the root Web site of a site collection, activate, deactivate, or edit properties of site collection scoped Features through the object model. To browse to the Site Collection Features page and activate or deactivate site collection scoped Features through the UI, you must be a site collection administrator. */
        manageWeb,
        /** Content of lists and document libraries in the Web site will be retrieveable for anonymous users through SharePoint search if the list or document library has AnonymousSearchAccessList set.  */
        anonymousSearchAccessWebLists,
        /** Use features that launch client applications; otherwise, users must work on documents locally and upload changes.  */
        useClientIntegration,
        /** Use SOAP, WebDAV, or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site. */
        useRemoteAPIs,
        /** Manage alerts for all users of the Web site. */
        manageAlerts,
        /** Create e-mail alerts. */
        createAlerts,
        /** Allows a user to change his or her user information, such as adding a picture. */
        editMyUserInfo,
        /** Enumerate permissions on the Web site, list, folder, document, or list item. */
        enumeratePermissions,
        /** Has all permissions on the Web site. Not available through the user interface. */
        fullMask,
    }

    export class BaseCollection<T> implements IEnumerable<T> {
        getEnumerator(): IEnumerator<T>;
        get_count(): number;
        itemAtIndex(index: number): T;
        constructor();
    }
    export interface IFromJson {
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class Base64EncodedByteArray {
        constructor();
        constructor(base64Str: string);
        get_length(): number;
        toBase64String(): string;
        append(b: any): void;
        getByteAt(index: number): any;
        setByteAt(index: number, b: any): void;
    }
    export class ConditionalScopeBase {
        startScope(): any;
        startIfTrue(): any;
        startIfFalse(): any;
        get_testResult(): boolean;
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class ClientObjectPropertyConditionalScope extends SP.ConditionalScopeBase {
        constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any);
        constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any, allowAllActions: boolean);
    }
    //export class ClientResult {
    //    get_value(): any;
    //    setValue(value: any): void;
    //    constructor();
    //}
    export class ClientResult<T> {
        get_value(): T;
        setValue(value: T): void;
        constructor();
    }
    export class BooleanResult {
        get_value(): boolean;
        constructor();
    }
    export class CharResult {
        get_value(): any;
        constructor();
    }
    export class IntResult {
        get_value(): number;
        constructor();
    }
    export class DoubleResult {
        get_value(): number;
        constructor();
    }
    export class StringResult {
        get_value(): string;
        constructor();
    }
    export class DateTimeResult {
        get_value(): Date;
        constructor();
    }
    export class GuidResult {
        get_value(): SP.Guid;
        constructor();
    }
    export class JsonObjectResult {
        get_value(): any;
        constructor();
    }
    export class ClientDictionaryResultHandler<T> {
        constructor(dict: SP.ClientResult<T>);
    }
    export class ClientUtility {
        static urlPathEncodeForXmlHttpRequest(url: string): string;
        static getOrCreateObjectPathForConstructor(context: SP.ClientRuntimeContext, typeId: string, args: any[]): SP.ObjectPath;
    }
    export class XElement {
        get_name(): string;
        set_name(value: string): void;
        get_attributes(): any;
        set_attributes(value: any): void;
        get_children(): any;
        set_children(value: any): void;
        constructor();
    }
    export class ClientXElement {
        get_element(): SP.XElement;
        set_element(value: SP.XElement): void;
        constructor();
    }
    export class ClientXDocument {
        get_root(): SP.XElement;
        set_root(value: SP.XElement): void;
        constructor();
    }
    export class DataConvert {
        static writePropertiesToXml(writer: SP.XmlWriter, obj: any, propNames: string[], serializationContext: SP.SerializationContext): void;
        static populateDictionaryFromObject(dict: any, parentNode: any): void;
        static fixupTypes(context: SP.ClientRuntimeContext, dict: any): void;
        static populateArray(context: SP.ClientRuntimeContext, dest: any, jsonArrayFromServer: any): void;
        static fixupType(context: SP.ClientRuntimeContext, obj: any): any;
        static writeDictionaryToXml(writer: SP.XmlWriter, dict: any, topLevelElementTagName: string, keys: any, serializationContext: SP.SerializationContext): void;
        static writeValueToXmlElement(writer: SP.XmlWriter, objValue: any, serializationContext: SP.SerializationContext): void;
        static invokeSetProperty(obj: any, propName: string, propValue: any): void;
        static invokeGetProperty(obj: any, propName: string): any;
        static specifyDateTimeKind(datetime: Date, kind: SP.DateTimeKind): void;
        static getDateTimeKind(datetime: Date): SP.DateTimeKind;
        static createUnspecifiedDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, milliseconds: number): Date;
        static createUtcDateTime(milliseconds: number): Date;
        static createLocalDateTime(milliseconds: number): Date;
    }
    export interface IWebRequestExecutorFactory {
        createWebRequestExecutor(): Sys.Net.WebRequestExecutor;
    }
    export class PageRequestFailedEventArgs extends Sys.EventArgs {
        get_executor(): Sys.Net.WebRequestExecutor;
        get_errorMessage(): string;
        get_isErrorPage(): boolean;
    }
    export class PageRequestSucceededEventArgs extends Sys.EventArgs {
        get_executor(): Sys.Net.WebRequestExecutor;
    }
    export class PageRequest {
        get_request(): Sys.Net.WebRequest;
        get_url(): string;
        set_url(value: string): void;
        get_expectedContentType(): string;
        set_expectedContentType(value: string): void;
        post(body: string): void;
        get(): void;
        static doPost(url: string, body: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        static doGet(url: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        add_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
        remove_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
        add_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        remove_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
        constructor();
    }
    export class ResResources {
        static getString(resourceId: string, args: any[]): string;
    }
    /** Defines a writer that provides a set of methods to append text in XML format. Use the static SP.XmlWriter.create(sb) Method to create an SP.XmlWriter object with the Sys.StringBuilder object you pass in. */
    export class XmlWriter {
        /** Creates a new instance of the XmlWriter class with the specified string builder. */
        static create(sb: Sys.StringBuilder): SP.XmlWriter;
        /** Appends a start element tag with the specified name in XML format to the object?s string builder. */
        writeStartElement(tagName: string): void;
        /** Appends an element with the specified tag name and value in XML format to the string builder. */
        writeElementString(tagName: string, value: string): void;
        /** Appends an end element tag in XML format to the object?s string builder. This method appends the end element tag ?/>? if the start element tag is not closed; otherwise, it appends a full end element tag ?</tagName>? to the string builder. */
        writeEndElement(): void;
        /** Appends an attribute with the specified name and value in XML format to the object?s string builder. */
        writeAttributeString(localName: string, value: string): void;
        /** This method only appends the name of the attribute. You can append the value of the attribute by calling the SP.XmlWriter.writeString(value) Method, and close the attribute by calling the SP.XmlWriter.writeEndAttribute() Method. */
        writeStartAttribute(localName: string): void;
        /** Appends an end of an attribute in XML format to the object?s string builder. */
        writeEndAttribute(): void;
        /** Appends the specified value for an element tag or attribute to the object?s string builder. */
        writeString(value: string): void;
        /** Appends the specified text to the object?s string builder. */
        writeRaw(xml: string): void;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        close(): void;
    }

    export class ClientConstants {
        AddExpandoFieldTypeSuffix: string;
        Actions: string;
        ApplicationName: string;
        Body: string;
        CatchScope: string;
        ChildItemQuery: string;
        ChildItems: string;
        ConditionalScope: string;
        Constructor: string;
        Context: string;
        ErrorInfo: string;
        ErrorMessage: string;
        ErrorStackTrace: string;
        ErrorCode: string;
        ErrorTypeName: string;
        ErrorValue: string;
        ErrorDetails: string;
        ErrorTraceCorrelationId: string;
        ExceptionHandlingScope: string;
        ExceptionHandlingScopeSimple: string;
        QueryableExpression: string;
        FinallyScope: string;
        HasException: string;
        Id: string;
        Identity: string;
        IfFalseScope: string;
        IfTrueScope: string;
        IsNull: string;
        LibraryVersion: string;
        TraceCorrelationId: string;
        Count: string;
        Method: string;
        Methods: string;
        Name: string;
        Object: string;
        ObjectPathId: string;
        ObjectPath: string;
        ObjectPaths: string;
        ObjectType: string;
        ObjectIdentity: string;
        ObjectIdentityQuery: string;
        ObjectVersion: string;
        Parameter: string;
        Parameters: string;
        ParentId: string;
        Processed: string;
        Property: string;
        Properties: string;
        Query: string;
        QueryResult: string;
        Request: string;
        Results: string;
        ScalarProperty: string;
        SchemaVersion: string;
        ScopeId: string;
        SelectAll: string;
        SelectAllProperties: string;
        SetProperty: string;
        SetStaticProperty: string;
        StaticMethod: string;
        StaticProperty: string;
        SuffixChar: string;
        SuffixByte: string;
        SuffixInt16: string;
        SuffixUInt16: string;
        SuffixInt32: string;
        SuffixUInt32: string;
        SuffixInt64: string;
        SuffixUInt64: string;
        SuffixSingle: string;
        SuffixDouble: string;
        SuffixDecimal: string;
        SuffixTimeSpan: string;
        SuffixArray: string;
        Test: string;
        TryScope: string;
        Type: string;
        TypeId: string;
        Update: string;
        Version: string;
        XmlElementName: string;
        XmlElementAttributes: string;
        XmlElementChildren: string;
        XmlNamespace: string;
        FieldValuesMethodName: string;
        RequestTokenHeader: string;
        FormDigestHeader: string;
        useWebLanguageHeader: string;
        useWebLanguageHeaderValue: string;
        ClientTagHeader: string;
        TraceCorrelationIdRequestHeader: string;
        TraceCorrelationIdResponseHeader: string;
        greaterThan: string;
        lessThan: string;
        equal: string;
        notEqual: string;
        greaterThanOrEqual: string;
        lessThanOrEqual: string;
        andAlso: string;
        orElse: string;
        not: string;
        expressionParameter: string;
        expressionProperty: string;
        expressionStaticProperty: string;
        expressionMethod: string;
        expressionStaticMethod: string;
        expressionConstant: string;
        expressionConvert: string;
        expressionTypeIs: string;
        ofType: string;
        take: string;
        where: string;
        orderBy: string;
        orderByDescending: string;
        thenBy: string;
        thenByDescending: string;
        queryableObject: string;
        ServiceFileName: string;
        ServiceMethodName: string;
        fluidApplicationInitParamUrl: string;
        fluidApplicationInitParamViaUrl: string;
        fluidApplicationInitParamRequestToken: string;
        fluidApplicationInitParamFormDigestTimeoutSeconds: string;
        fluidApplicationInitParamFormDigest: string;

    }
    export class ClientSchemaVersions {
        version14: string;
        version15: string;
        currentVersion: string;
    }
    export class ClientErrorCodes {
        genericError: number;
        accessDenied: number;
        docAlreadyExists: number;
        versionConflict: number;
        listItemDeleted: number;
        invalidFieldValue: number;
        notSupported: number;
        redirect: number;
        notSupportedRequestVersion: number;
        fieldValueFailedValidation: number;
        itemValueFailedValidation: number;
    }
    export class ClientAction {
        get_id(): number;
        get_path(): SP.ObjectPath;
        get_name(): string;
    }
    export class ClientActionSetProperty extends SP.ClientAction {
        constructor(obj: SP.ClientObject, propName: string, propValue: any);
    }
    export class ClientActionSetStaticProperty extends SP.ClientAction {
        constructor(context: SP.ClientRuntimeContext, typeId: string, propName: string, propValue: any);
    }
    export class ClientActionInvokeMethod extends SP.ClientAction {
        constructor(obj: SP.ClientObject, methodName: string, parameters: any[]);
    }
    export class ClientActionInvokeStaticMethod extends SP.ClientAction {
        constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]);
    }
    export class ClientObject {
        get_context(): SP.ClientRuntimeContext;
        get_path(): SP.ObjectPath;
        get_objectVersion(): string;
        set_objectVersion(value: string): void;
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
        retrieve(): void;
        refreshLoad(): void;
        retrieve(propertyNames: string[]): void;
        isPropertyAvailable(propertyName: string): boolean;
        isObjectPropertyInstantiated(propertyName: string): boolean;
        get_serverObjectIsNull(): boolean;
        get_typedObject(): SP.ClientObject;
    }
    export class ClientObjectData {
        get_properties(): any;
        get_clientObjectProperties(): any;
        get_methodReturnObjects(): any;
        constructor();
    }
    /** Provides a base class for a collection of objects on a remote client. */
    export class ClientObjectCollection<T> extends SP.ClientObject implements IEnumerable<T> {
        get_areItemsAvailable(): boolean;
        /** Gets the data for all of the items in the collection. */
        retrieveItems(): SP.ClientObjectPrototype;
        /** Returns an enumerator that iterates through the collection. */
        getEnumerator(): IEnumerator<T>;
        /** Returns number of items in the collection. */
        get_count(): number;
        get_data(): T[];
        addChild(obj: T): void;
        getItemAtIndex(index: number): T;
        fromJson(obj: any): void;
    }
    export class ClientObjectList<T> extends SP.ClientObjectCollection<T> {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPath, childItemType: any);
        fromJson(initValue: any): void;
        customFromJson(initValue: any): boolean;
    }
    export class ClientObjectPrototype {
        retrieve(): void;
        retrieve(propertyNames: string[]): void;
        retrieveObject(propertyName: string): SP.ClientObjectPrototype;
        retrieveCollectionObject(propertyName: string): SP.ClientObjectCollectionPrototype;
    }
    export class ClientObjectCollectionPrototype extends SP.ClientObjectPrototype {
        retrieveItems(): SP.ClientObjectPrototype;
    }
    export enum ClientRequestStatus {
        active,
        inProgress,
        completedSuccess,
        completedException,
    }
    export class WebRequestEventArgs extends Sys.EventArgs {
        constructor(webRequest: Sys.Net.WebRequest);
        get_webRequest(): Sys.Net.WebRequest;
    }
    export class ClientRequest {
        static get_nextSequenceId(): number;
        get_webRequest(): Sys.Net.WebRequest;
        add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        get_navigateWhenServerRedirect(): boolean;
        set_navigateWhenServerRedirect(value: boolean): void;
    }
    export class ClientRequestEventArgs extends Sys.EventArgs {
        get_request(): SP.ClientRequest;
    }
    export class ClientRequestFailedEventArgs extends SP.ClientRequestEventArgs {
        constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any);
        constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any, errorTraceCorrelationId: string);
        get_message(): string;
        get_stackTrace(): string;
        get_errorCode(): number;
        get_errorValue(): string;
        get_errorTypeName(): string;
        get_errorDetails(): any;
        get_errorTraceCorrelationId(): string;
    }
    export class ClientRequestSucceededEventArgs extends SP.ClientRequestEventArgs {
    }
    export class ClientRuntimeContext implements Sys.IDisposable {
        constructor(serverRelativeUrlOrFullUrl: string);
        get_url(): string;
        get_viaUrl(): string;
        set_viaUrl(value: string): void;
        get_formDigestHandlingEnabled(): boolean;
        set_formDigestHandlingEnabled(value: boolean): void;
        get_applicationName(): string;
        set_applicationName(value: string): void;
        get_clientTag(): string;
        set_clientTag(value: string): void;
        get_webRequestExecutorFactory(): SP.IWebRequestExecutorFactory;
        set_webRequestExecutorFactory(value: SP.IWebRequestExecutorFactory): void;
        get_pendingRequest(): SP.ClientRequest;
        get_hasPendingRequest(): boolean;
        add_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
        remove_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
        add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        add_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
        remove_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
        get_requestTimeout(): number;
        set_requestTimeout(value: number): void;
        executeQueryAsync(succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void, failedCallback: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
        executeQueryAsync(succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
        executeQueryAsync(): void;
        get_staticObjects(): any;
        castTo(obj: SP.ClientObject, type: any): SP.ClientObject;
        addQuery(query: SP.ClientAction): void;
        addQueryIdAndResultObject(id: number, obj: any): void;
        parseObjectFromJsonString(json: string): any;
        parseObjectFromJsonString(json: string, skipTypeFixup: boolean): any;
        load(clientObject: SP.ClientObject): void;
        loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>, exp: string): any;
        load(clientObject: SP.ClientObject, ...exps: string[]): void;
        loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>): any;
        get_serverSchemaVersion(): string;
        get_serverLibraryVersion(): string;
        get_traceCorrelationId(): string;
        set_traceCorrelationId(value: string): void;
        dispose(): void;
    }
    export class SimpleDataTable {
        get_rows(): any[];
        constructor();
    }
    export class ClientValueObject {
        fromJson(obj: any): void;
        customFromJson(obj: any): boolean;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        customWriteToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): boolean;
        get_typeId(): string;
    }
    export class ClientValueObjectCollection<T> extends SP.ClientValueObject implements IEnumerable<T> {
        get_count(): number;
        getEnumerator(): IEnumerator<T>;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class ExceptionHandlingScope {
        constructor(context: SP.ClientRuntimeContext);
        startScope(): any;
        startTry(): any;
        startCatch(): any;
        startFinally(): any;
        get_processed(): boolean;
        get_hasException(): boolean;
        get_errorMessage(): string;
        get_serverStackTrace(): string;
        get_serverErrorCode(): number;
        get_serverErrorValue(): string;
        get_serverErrorTypeName(): string;
        get_serverErrorDetails(): any;
    }
    export class ObjectIdentityQuery extends SP.ClientAction {
        constructor(objectPath: SP.ObjectPath);
    }
    export class ObjectPath {
        setPendingReplace(): void;
    }
    export class ObjectPathProperty extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, propertyName: string);
    }
    export class ObjectPathStaticProperty extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, propertyName: string);
    }
    export class ObjectPathMethod extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, methodName: string, parameters: any[]);
    }
    export class ObjectPathStaticMethod extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]);
    }
    export class ObjectPathConstructor extends SP.ObjectPath {
        constructor(context: SP.ClientRuntimeContext, typeId: string, parameters: any[]);
    }
    export class SerializationContext {
        addClientObject(obj: SP.ClientObject): void;
        addObjectPath(path: SP.ObjectPath): void;
    }
    export class ResourceStrings {
        argumentExceptionMessage: string;
        argumentNullExceptionMessage: string;
        cC_AppIconAlt: string;
        cC_AppWebUrlNotSet: string;
        cC_ArrowImageAlt: string;
        cC_BackToSite: string;
        cC_ErrorGettingThemeInfo: string;
        cC_HelpLinkToolTip: string;
        cC_HostSiteUrlNotSet: string;
        cC_InvalidArgument: string;
        cC_InvalidJSON: string;
        cC_InvalidOperation: string;
        cC_PlaceHolderElementNotFound: string;
        cC_RequiredScriptNotLoaded: string;
        cC_SendFeedback: string;
        cC_SettingsLinkToolTip: string;
        cC_TimeoutGettingThemeInfo: string;
        cC_Welcome: string;
        cannotFindContextWebServerRelativeUrl: string;
        collectionHasNotBeenInitialized: string;
        collectionModified: string;
        invalidUsageOfConditionalScope: string;
        invalidUsageOfConditionalScopeNowAllowedAction: string;
        invalidUsageOfExceptionHandlingScope: string;
        namedPropertyHasNotBeenInitialized: string;
        namedServerObjectIsNull: string;
        noObjectPathAssociatedWithObject: string;
        notSameClientContext: string;
        notSupportedQueryExpressionWithExpressionDetail: string;
        objectNameIdentity: string;
        objectNameMethod: string;
        objectNameProperty: string;
        objectNameType: string;
        propertyHasNotBeenInitialized: string;
        rE_BrowserBinaryDataNotSupported: string;
        rE_BrowserNotSupported: string;
        rE_CannotAccessSite: string;
        rE_CannotAccessSiteCancelled: string;
        rE_CannotAccessSiteOpenWindowFailed: string;
        rE_DismissOpenWindowMessageLinkText: string;
        rE_DomainDoesNotMatch: string;
        rE_FixitHelpMessage: string;
        rE_InvalidArgumentOrField: string;
        rE_InvalidOperation: string;
        rE_NoTrustedOrigins: string;
        rE_OpenWindowButtonText: string;
        rE_OpenWindowMessage: string;
        rE_RequestAbortedOrTimedout: string;
        rE_RequestUnexpectedResponse: string;
        rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
        requestAbortedOrTimedOut: string;
        requestEmptyQueryName: string;
        requestHasBeenExecuted: string;
        requestUnexpectedResponse: string;
        requestUnexpectedResponseWithContentTypeAndStatus: string;
        requestUnexpectedResponseWithStatus: string;
        requestUnknownResponse: string;
        serverObjectIsNull: string;
        unknownError: string;
        unknownResponseData: string;
    }
    export class RuntimeRes {
        cC_PlaceHolderElementNotFound: string;
        rE_CannotAccessSiteOpenWindowFailed: string;
        noObjectPathAssociatedWithObject: string;
        cC_TimeoutGettingThemeInfo: string;
        unknownResponseData: string;
        requestUnexpectedResponseWithStatus: string;
        objectNameProperty: string;
        requestUnknownResponse: string;
        rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
        rE_BrowserNotSupported: string;
        argumentExceptionMessage: string;
        namedServerObjectIsNull: string;
        objectNameType: string;
        requestUnexpectedResponseWithContentTypeAndStatus: string;
        cC_InvalidJSON: string;
        invalidUsageOfExceptionHandlingScope: string;
        serverObjectIsNull: string;
        cC_AppWebUrlNotSet: string;
        rE_OpenWindowMessage: string;
        argumentNullExceptionMessage: string;
        cC_HelpLinkToolTip: string;
        propertyHasNotBeenInitialized: string;
        rE_RequestAbortedOrTimedout: string;
        invalidUsageOfConditionalScope: string;
        cC_ErrorGettingThemeInfo: string;
        rE_DismissOpenWindowMessageLinkText: string;
        rE_CannotAccessSiteCancelled: string;
        objectNameIdentity: string;
        cC_HostSiteUrlNotSet: string;
        rE_FixitHelpMessage: string;
        notSupportedQueryExpressionWithExpressionDetail: string;
        rE_RequestUnexpectedResponse: string;
        rE_DomainDoesNotMatch: string;
        cC_BackToSite: string;
        rE_NoTrustedOrigins: string;
        rE_InvalidOperation: string;
        collectionModified: string;
        cC_Welcome: string;
        cC_AppIconAlt: string;
        cC_SendFeedback: string;
        cC_ArrowImageAlt: string;
        cC_InvalidOperation: string;
        requestAbortedOrTimedOut: string;
        invalidUsageOfConditionalScopeNowAllowedAction: string;
        cannotFindContextWebServerRelativeUrl: string;
        rE_OpenWindowButtonText: string;
        unknownError: string;
        cC_InvalidArgument: string;
        rE_InvalidArgumentOrField: string;
        cC_SettingsLinkToolTip: string;
        requestEmptyQueryName: string;
        cC_RequiredScriptNotLoaded: string;
        rE_CannotAccessSite: string;
        notSameClientContext: string;
        requestUnexpectedResponse: string;
        rE_BrowserBinaryDataNotSupported: string;
        collectionHasNotBeenInitialized: string;
        namedPropertyHasNotBeenInitialized: string;
        requestHasBeenExecuted: string;
        objectNameMethod: string;
    }
    export class ParseJSONUtil {
        static parseObjectFromJsonString(json: string): any;
        static validateJson(text: string): boolean;
    }
    export enum DateTimeKind {
        unspecified,
        utc,
        local,
    }
    export class OfficeVersion {
        majorBuildVersion: number;
        previousMajorBuildVersion: number;
        majorVersion: string;
        previousVersion: string;
        majorVersionDotZero: string;
        previousVersionDotZero: string;
        assemblyVersion: string;
        wssMajorVersion: string;
    }
    export class ClientContext extends SP.ClientRuntimeContext {
        constructor(serverRelativeUrlOrFullUrl: string);
        static get_current(): SP.ClientContext;
        constructor();
        get_web(): SP.Web;
        get_site(): SP.Site;
        get_serverVersion(): string;
    }
    export enum ULSTraceLevel {
        verbose,
    }
    /** Provides a Unified Logging Service (ULS) that monitors log messages. */
    export class ULS {
        /** Gets a value that indicates whether the Unified Logging Service (ULS) is enabled. */
        static get_enabled(): boolean;
        /** Sets a value that indicates whether the Unified Logging Service (ULS) is enabled. */
        static set_enabled(value: boolean): void;
        /** Logs the specified debug message.
            This method logs the message with a time stamp. If any log messages are pending, this method also logs them. If the message cannot be logged, the message is added to the list of pending log messages. */
        static log(debugMessage: string): void;
        /** Increases the indentation for subsequent log messages. */
        static increaseIndent(): void;
        /** Decreases the indentation for subsequent log messages. */
        static decreaseIndent(): void;
        /** Traces when the function was entered. */
        static traceApiEnter(functionName: string, args: any[]): void;
        /** Traces when the function was entered. */
        static traceApiEnter(functionName: string): void;
        /** Traces when the function has finished. */
        static traceApiLeave(): void;
    }
    export class AccessRequests {
        static changeRequestStatus(context: SP.ClientRuntimeContext, itemId: number, newStatus: number, convStr: string, permType: string, permissionLevel: number): void;
        static changeRequestStatusBulk(context: SP.ClientRuntimeContext, requestIds: number[], newStatus: number): void;
    }
    export enum AddFieldOptions {
        defaultValue,
        addToDefaultContentType,
        addToNoContentType,
        addToAllContentTypes,
        addFieldInternalNameHint,
        addFieldToDefaultView,
        addFieldCheckDisplayName,
    }
    export class AlternateUrl extends SP.ClientObject {
        get_uri(): string;
        get_urlZone(): SP.UrlZone;
    }
    export class App extends SP.ClientObject {
        get_assetId(): string;
        get_contentMarket(): string;
        get_versionString(): string;
    }
    export class AppCatalog {
        static getAppInstances(context: SP.ClientRuntimeContext, web: SP.Web): SP.ClientObjectList<SP.AppInstance>;
        static getDeveloperSiteAppInstancesByIds(context: SP.ClientRuntimeContext, site: SP.Site, appInstanceIds: SP.Guid[]): SP.ClientObjectList<SP.AppInstance>;
        static isAppSideloadingEnabled(context: SP.ClientRuntimeContext): SP.BooleanResult;
    }
    export class AppContextSite extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, siteUrl: string);
        get_site(): SP.Site;
        get_web(): SP.Web;
        static newObject(context: SP.ClientRuntimeContext, siteUrl: string): SP.AppContextSite;
    }
    export class AppInstance extends SP.ClientObject {
        get_appPrincipalId(): string;
        get_appWebFullUrl(): string;
        get_id(): SP.Guid;
        get_inError(): boolean;
        get_startPage(): string;
        get_remoteAppUrl(): string;
        get_settingsPageUrl(): string;
        get_siteId(): SP.Guid;
        get_status(): SP.AppInstanceStatus;
        get_title(): string;
        get_webId(): SP.Guid;
        getErrorDetails(): SP.ClientObjectList<SP.AppInstanceErrorDetails>;
        uninstall(): SP.GuidResult;
        upgrade(appPackageStream: SP.Base64EncodedByteArray): void;
        cancelAllJobs(): SP.BooleanResult;
        install(): SP.GuidResult;
        getPreviousAppVersion(): SP.App;
        retryAllJobs(): void;
    }
    export class AppInstanceErrorDetails extends SP.ClientObject {
        get_correlationId(): SP.Guid;
        set_correlationId(value: SP.Guid): void;
        get_errorDetail(): string;
        get_errorType(): SP.AppInstanceErrorType;
        set_errorType(value: SP.AppInstanceErrorType): void;
        get_errorTypeName(): string;
        get_exceptionMessage(): string;
        get_source(): SP.AppInstanceErrorSource;
        set_source(value: SP.AppInstanceErrorSource): void;
        get_sourceName(): string;
    }
    export enum AppInstanceErrorSource {
        common,
        appWeb,
        parentWeb,
        remoteWebSite,
        database,
        officeExtension,
        eventCallouts,
        finalization,
    }
    export enum AppInstanceErrorType {
        transient,
        configuration,
        app,
    }
    export enum AppInstanceStatus {
        invalidStatus,
        installing,
        canceling,
        uninstalling,
        installed,
        upgrading,
        initialized,
        upgradeCanceling,
        disabling,
        disabled,
    }
    export class AppLicense extends SP.ClientValueObject {
        get_rawXMLLicenseToken(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class AppLicenseCollection extends SP.ClientValueObjectCollection<AppLicense> {
        add(item: SP.AppLicense): void;
        get_item(index: number): SP.AppLicense;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum AppLicenseType {
        perpetualMultiUser,
        perpetualAllUsers,
        trialMultiUser,
        trialAllUsers,
    }
    export class Attachment extends SP.ClientObject {
        get_fileName(): string;
        get_serverRelativeUrl(): string;
        deleteObject(): void;
    }
    export class AttachmentCollection extends SP.ClientObjectCollection<Attachment> {
        itemAt(index: number): SP.Attachment;
        get_item(index: number): SP.Attachment;
        getByFileName(fileName: string): SP.Attachment;
    }
    export class AttachmentCreationInformation extends SP.ClientValueObject {
        get_contentStream(): SP.Base64EncodedByteArray;
        set_contentStream(value: SP.Base64EncodedByteArray): void;
        get_fileName(): string;
        set_fileName(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class BasePermissions extends SP.ClientValueObject {
        set(perm: SP.PermissionKind): void;
        clear(perm: SP.PermissionKind): void;
        clearAll(): void;
        has(perm: SP.PermissionKind): boolean;
        equals(perm: SP.BasePermissions): boolean;
        hasPermissions(high: number, low: number): boolean;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Specifies the base type for a list. */
    export enum BaseType {
        none,
        genericList,
        documentLibrary,
        unused,
        discussionBoard,
        survey,
        issue,
    }
    export enum BrowserFileHandling {
        permissive,
        strict,
    }
    export enum CalendarType {
        none,
        gregorian,
        japan,
        taiwan,
        korea,
        hijri,
        thai,
        hebrew,
        gregorianMEFrench,
        gregorianArabic,
        gregorianXLITEnglish,
        gregorianXLITFrench,
        koreaJapanLunar,
        chineseLunar,
        sakaEra,
        umAlQura,
    }
    /** Specifies a Collaborative Application Markup Language (CAML) query on a list. */
    export class CamlQuery extends SP.ClientValueObject {
        constructor();
        /** This method creates a Collaborative Application Markup Language (CAML) string
            that can be used to recursively get all of the items in a list, including
            the items in the subfolders. */
        static createAllItemsQuery(): SP.CamlQuery;
        /** This method creates a Collaborative Application Markup Language (CAML) string
            that can be used to recursively get all of the folders in a list, including
            the subfolders. */
        static createAllFoldersQuery(): SP.CamlQuery;
        /** Returns true if the query returns dates in Coordinated Universal Time (UTC) format. */
        get_datesInUtc(): boolean;
        /** Sets a value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        set_datesInUtc(value: boolean): void;
        /** Server relative URL of a list folder from which results will be returned. */
        get_folderServerRelativeUrl(): string;
        /** Sets a value that specifies the server relative URL of a list folder from which results will be returned. */
        set_folderServerRelativeUrl(value: string): void;
        get_listItemCollectionPosition(): SP.ListItemCollectionPosition;
        /** Sets a value that specifies the information required to get the next page of data for the list view. */
        set_listItemCollectionPosition(value: SP.ListItemCollectionPosition): void;
        /** Gets value that specifies the XML schema that defines the list view. */
        get_viewXml(): string;
        /** Sets value that specifies the XML schema that defines the list view. It must be null, empty, or an XML fragment that conforms to the ViewDefinition type.  */
        set_viewXml(value: string): void;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class Change extends SP.ClientObject {
        get_changeToken(): SP.ChangeToken;
        get_changeType(): SP.ChangeType;
        get_siteId(): SP.Guid;
        get_time(): Date;
    }
    export class ChangeAlert extends SP.Change {
        get_alertId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeCollection extends SP.ClientObjectCollection<Change> {
        itemAt(index: number): SP.Change;
        get_item(index: number): SP.Change;
    }
    export class ChangeContentType extends SP.Change {
        get_contentTypeId(): SP.ContentTypeId;
        get_webId(): SP.Guid;
    }
    export class ChangeField extends SP.Change {
        get_fieldId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeFile extends SP.Change {
        get_uniqueId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeFolder extends SP.Change {
        get_uniqueId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeGroup extends SP.Change {
        get_groupId(): number;
    }
    export class ChangeItem extends SP.Change {
        get_itemId(): number;
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeList extends SP.Change {
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeLogItemQuery extends SP.ClientValueObject {
        get_changeToken(): string;
        set_changeToken(value: string): void;
        get_contains(): string;
        set_contains(value: string): void;
        get_query(): string;
        set_query(value: string): void;
        get_queryOptions(): string;
        set_queryOptions(value: string): void;
        get_rowLimit(): string;
        set_rowLimit(value: string): void;
        get_viewFields(): string;
        set_viewFields(value: string): void;
        get_viewName(): string;
        set_viewName(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ChangeQuery extends SP.ClientValueObject {
        constructor();
        constructor(allChangeObjectTypes: boolean, allChangeTypes: boolean);
        get_add(): boolean;
        set_add(value: boolean): void;
        get_alert(): boolean;
        set_alert(value: boolean): void;
        get_changeTokenEnd(): SP.ChangeToken;
        set_changeTokenEnd(value: SP.ChangeToken): void;
        get_changeTokenStart(): SP.ChangeToken;
        set_changeTokenStart(value: SP.ChangeToken): void;
        get_contentType(): boolean;
        set_contentType(value: boolean): void;
        get_deleteObject(): boolean;
        set_deleteObject(value: boolean): void;
        get_field(): boolean;
        set_field(value: boolean): void;
        get_file(): boolean;
        set_file(value: boolean): void;
        get_folder(): boolean;
        set_folder(value: boolean): void;
        get_group(): boolean;
        set_group(value: boolean): void;
        get_groupMembershipAdd(): boolean;
        set_groupMembershipAdd(value: boolean): void;
        get_groupMembershipDelete(): boolean;
        set_groupMembershipDelete(value: boolean): void;
        get_item(): boolean;
        set_item(value: boolean): void;
        get_list(): boolean;
        set_list(value: boolean): void;
        get_move(): boolean;
        set_move(value: boolean): void;
        get_navigation(): boolean;
        set_navigation(value: boolean): void;
        get_rename(): boolean;
        set_rename(value: boolean): void;
        get_restore(): boolean;
        set_restore(value: boolean): void;
        get_roleAssignmentAdd(): boolean;
        set_roleAssignmentAdd(value: boolean): void;
        get_roleAssignmentDelete(): boolean;
        set_roleAssignmentDelete(value: boolean): void;
        get_roleDefinitionAdd(): boolean;
        set_roleDefinitionAdd(value: boolean): void;
        get_roleDefinitionDelete(): boolean;
        set_roleDefinitionDelete(value: boolean): void;
        get_roleDefinitionUpdate(): boolean;
        set_roleDefinitionUpdate(value: boolean): void;
        get_securityPolicy(): boolean;
        set_securityPolicy(value: boolean): void;
        get_site(): boolean;
        set_site(value: boolean): void;
        get_systemUpdate(): boolean;
        set_systemUpdate(value: boolean): void;
        get_update(): boolean;
        set_update(value: boolean): void;
        get_user(): boolean;
        set_user(value: boolean): void;
        get_view(): boolean;
        set_view(value: boolean): void;
        get_web(): boolean;
        set_web(value: boolean): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
    }
    export class ChangeSite extends SP.Change {
    }
    export class ChangeToken extends SP.ClientValueObject {
        get_stringValue(): string;
        set_stringValue(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum ChangeType {
        noChange,
        add,
        update,
        deleteObject,
        rename,
        moveAway,
        moveInto,
        restore,
        roleAdd,
        roleDelete,
        roleUpdate,
        assignmentAdd,
        assignmentDelete,
        memberAdd,
        memberDelete,
        systemUpdate,
        navigation,
        scopeAdd,
        scopeDelete,
        listContentTypeAdd,
        listContentTypeDelete,
    }
    export class ChangeUser extends SP.Change {
        get_activate(): boolean;
        get_userId(): number;
    }
    export class ChangeView extends SP.Change {
        get_viewId(): SP.Guid;
        get_listId(): SP.Guid;
        get_webId(): SP.Guid;
    }
    export class ChangeWeb extends SP.Change {
        get_webId(): SP.Guid;
    }
    export enum CheckinType {
        minorCheckIn,
        majorCheckIn,
        overwriteCheckIn,
    }
    export enum CheckOutType {
        online,
        offline,
        none,
    }
    export enum ChoiceFormatType {
        dropdown,
        radioButtons,
    }
    export class CompatibilityRange extends SP.ClientObject {
    }
    export class ContentType extends SP.ClientObject {
        get_description(): string;
        set_description(value: string): void;
        get_displayFormTemplateName(): string;
        set_displayFormTemplateName(value: string): void;
        get_displayFormUrl(): string;
        set_displayFormUrl(value: string): void;
        get_documentTemplate(): string;
        set_documentTemplate(value: string): void;
        get_documentTemplateUrl(): string;
        get_editFormTemplateName(): string;
        set_editFormTemplateName(value: string): void;
        get_editFormUrl(): string;
        set_editFormUrl(value: string): void;
        get_fieldLinks(): SP.FieldLinkCollection;
        get_fields(): SP.FieldCollection;
        get_group(): string;
        set_group(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.ContentTypeId;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_newFormTemplateName(): string;
        set_newFormTemplateName(value: string): void;
        get_newFormUrl(): string;
        set_newFormUrl(value: string): void;
        get_parent(): SP.ContentType;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        get_schemaXml(): string;
        get_schemaXmlWithResourceTokens(): string;
        set_schemaXmlWithResourceTokens(value: string): void;
        get_scope(): string;
        get_sealed(): boolean;
        set_sealed(value: boolean): void;
        get_stringId(): string;
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        update(updateChildren: boolean): void;
        deleteObject(): void;
    }
    export class ContentTypeCollection extends SP.ClientObjectCollection<ContentType> {
        itemAt(index: number): SP.ContentType;
        get_item(index: number): SP.ContentType;
        getById(contentTypeId: string): SP.ContentType;
        addExistingContentType(contentType: SP.ContentType): SP.ContentType;
        add(parameters: SP.ContentTypeCreationInformation): SP.ContentType;
    }
    export class ContentTypeCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_group(): string;
        set_group(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_parentContentType(): SP.ContentType;
        set_parentContentType(value: SP.ContentType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ContentTypeId extends SP.ClientValueObject {
        toString(): string;
        get_stringValue(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum CustomizedPageStatus {
        none,
        uncustomized,
        customized,
    }
    export enum DateTimeFieldFormatType {
        dateOnly,
        dateTime,
    }
    export enum DateTimeFieldFriendlyFormatType {
        unspecified,
        disabled,
        relative,
    }
    export enum DraftVisibilityType {
        reader,
        author,
        approver,
    }
    export class EventReceiverDefinition extends SP.ClientObject {
        get_receiverAssembly(): string;
        get_receiverClass(): string;
        get_receiverId(): SP.Guid;
        get_receiverName(): string;
        get_sequenceNumber(): number;
        get_synchronization(): SP.EventReceiverSynchronization;
        get_eventType(): SP.EventReceiverType;
        get_receiverUrl(): string;
        update(): void;
        deleteObject(): void;
    }
    export class EventReceiverDefinitionCollection extends SP.ClientObjectCollection<EventReceiverDefinition> {
        itemAt(index: number): SP.EventReceiverDefinition;
        get_item(index: number): SP.EventReceiverDefinition;
        getById(eventReceiverId: SP.Guid): SP.EventReceiverDefinition;
        add(eventReceiverCreationInformation: SP.EventReceiverDefinitionCreationInformation): SP.EventReceiverDefinition;
    }
    export class EventReceiverDefinitionCreationInformation extends SP.ClientValueObject {
        get_receiverAssembly(): string;
        set_receiverAssembly(value: string): void;
        get_receiverClass(): string;
        set_receiverClass(value: string): void;
        get_receiverName(): string;
        set_receiverName(value: string): void;
        get_sequenceNumber(): number;
        set_sequenceNumber(value: number): void;
        get_synchronization(): SP.EventReceiverSynchronization;
        set_synchronization(value: SP.EventReceiverSynchronization): void;
        get_eventType(): SP.EventReceiverType;
        set_eventType(value: SP.EventReceiverType): void;
        get_receiverUrl(): string;
        set_receiverUrl(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum EventReceiverSynchronization {
        defaultSynchronization,
        synchronous,
        asynchronous,
    }
    export enum EventReceiverType {
        invalidReceiver,
        itemAdding,
        itemUpdating,
        itemDeleting,
        itemCheckingIn,
        itemCheckingOut,
        itemUncheckingOut,
        itemAttachmentAdding,
        itemAttachmentDeleting,
        itemFileMoving,
        itemVersionDeleting,
        fieldAdding,
        fieldUpdating,
        fieldDeleting,
        listAdding,
        listDeleting,
        siteDeleting,
        webDeleting,
        webMoving,
        webAdding,
        groupAdding,
        groupUpdating,
        groupDeleting,
        groupUserAdding,
        groupUserDeleting,
        roleDefinitionAdding,
        roleDefinitionUpdating,
        roleDefinitionDeleting,
        roleAssignmentAdding,
        roleAssignmentDeleting,
        inheritanceBreaking,
        inheritanceResetting,
        workflowStarting,
        itemAdded,
        itemUpdated,
        itemDeleted,
        itemCheckedIn,
        itemCheckedOut,
        itemUncheckedOut,
        itemAttachmentAdded,
        itemAttachmentDeleted,
        itemFileMoved,
        itemFileConverted,
        itemVersionDeleted,
        fieldAdded,
        fieldUpdated,
        fieldDeleted,
        listAdded,
        listDeleted,
        siteDeleted,
        webDeleted,
        webMoved,
        webProvisioned,
        groupAdded,
        groupUpdated,
        groupDeleted,
        groupUserAdded,
        groupUserDeleted,
        roleDefinitionAdded,
        roleDefinitionUpdated,
        roleDefinitionDeleted,
        roleAssignmentAdded,
        roleAssignmentDeleted,
        inheritanceBroken,
        inheritanceReset,
        workflowStarted,
        workflowPostponed,
        workflowCompleted,
        entityInstanceAdded,
        entityInstanceUpdated,
        entityInstanceDeleted,
        appInstalled,
        appUpgraded,
        appUninstalling,
        emailReceived,
        contextEvent,
    }
    export class Feature extends SP.ClientObject {
        get_definitionId(): SP.Guid;
    }
    export class FeatureCollection extends SP.ClientObjectCollection<Feature> {
        itemAt(index: number): SP.Feature;
        get_item(index: number): SP.Feature;
        getById(featureId: SP.Guid): SP.Feature;
        add(featureId: SP.Guid, force: boolean, featdefScope: SP.FeatureDefinitionScope): SP.Feature;
        remove(featureId: SP.Guid, force: boolean): void;
    }
    export enum FeatureDefinitionScope {
        none,
        farm,
        site,
        web,
    }
    export class Field extends SP.ClientObject {
        get_canBeDeleted(): boolean;
        get_defaultValue(): string;
        set_defaultValue(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_direction(): string;
        set_direction(value: string): void;
        get_enforceUniqueValues(): boolean;
        set_enforceUniqueValues(value: boolean): void;
        get_entityPropertyName(): string;
        get_filterable(): boolean;
        get_fromBaseType(): boolean;
        get_group(): string;
        set_group(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.Guid;
        get_indexed(): boolean;
        set_indexed(value: boolean): void;
        get_internalName(): string;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_readOnlyField(): boolean;
        set_readOnlyField(value: boolean): void;
        get_required(): boolean;
        set_required(value: boolean): void;
        get_schemaXml(): string;
        set_schemaXml(value: string): void;
        get_schemaXmlWithResourceTokens(): string;
        get_scope(): string;
        get_sealed(): boolean;
        get_sortable(): boolean;
        get_staticName(): string;
        set_staticName(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_fieldTypeKind(): SP.FieldType;
        set_fieldTypeKind(value: SP.FieldType): void;
        get_typeAsString(): string;
        set_typeAsString(value: string): void;
        get_typeDisplayName(): string;
        get_typeShortDescription(): string;
        get_validationFormula(): string;
        set_validationFormula(value: string): void;
        get_validationMessage(): string;
        set_validationMessage(value: string): void;
        validateSetValue(item: SP.ListItem, value: string): void;
        updateAndPushChanges(pushChangesToLists: boolean): void;
        update(): void;
        deleteObject(): void;
        setShowInDisplayForm(value: boolean): void;
        setShowInEditForm(value: boolean): void;
        setShowInNewForm(value: boolean): void;
    }
    export class FieldCalculated extends SP.Field {
        get_dateFormat(): SP.DateTimeFieldFormatType;
        set_dateFormat(value: SP.DateTimeFieldFormatType): void;
        get_formula(): string;
        set_formula(value: string): void;
        get_outputType(): SP.FieldType;
        set_outputType(value: SP.FieldType): void;
    }
    export class FieldCalculatedErrorValue extends SP.ClientValueObject {
        get_errorMessage(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldMultiChoice extends SP.Field {
        get_fillInChoice(): boolean;
        set_fillInChoice(value: boolean): void;
        get_mappings(): string;
        get_choices(): string[];
        set_choices(value: string[]): void;
    }
    export class FieldChoice extends SP.FieldMultiChoice {
        get_editFormat(): SP.ChoiceFormatType;
        set_editFormat(value: SP.ChoiceFormatType): void;
    }
    export class FieldCollection extends SP.ClientObjectCollection<Field> {
        itemAt(index: number): SP.Field;
        get_item(index: number): SP.Field;
        get_schemaXml(): string;
        getByTitle(title: string): SP.Field;
        getById(id: SP.Guid): SP.Field;
        add(field: SP.Field): SP.Field;
        addDependentLookup(displayName: string, primaryLookupField: SP.Field, lookupField: string): SP.Field;
        addFieldAsXml(schemaXml: string, addToDefaultView: boolean, options: SP.AddFieldOptions): SP.Field;
        getByInternalNameOrTitle(strName: string): SP.Field;
    }
    export class FieldComputed extends SP.Field {
        get_enableLookup(): boolean;
        set_enableLookup(value: boolean): void;
    }
    export class FieldNumber extends SP.Field {
        get_maximumValue(): number;
        set_maximumValue(value: number): void;
        get_minimumValue(): number;
        set_minimumValue(value: number): void;
    }
    export class FieldCurrency extends SP.FieldNumber {
        get_currencyLocaleId(): number;
        set_currencyLocaleId(value: number): void;
    }
    export class FieldDateTime extends SP.Field {
        get_dateTimeCalendarType(): SP.CalendarType;
        set_dateTimeCalendarType(value: SP.CalendarType): void;
        get_displayFormat(): SP.DateTimeFieldFormatType;
        set_displayFormat(value: SP.DateTimeFieldFormatType): void;
        get_friendlyDisplayFormat(): SP.DateTimeFieldFriendlyFormatType;
        set_friendlyDisplayFormat(value: SP.DateTimeFieldFriendlyFormatType): void;
    }
    export class FieldGeolocation extends SP.Field {
    }
    export class FieldGeolocationValue extends SP.ClientValueObject {
        get_altitude(): number;
        set_altitude(value: number): void;
        get_latitude(): number;
        set_latitude(value: number): void;
        get_longitude(): number;
        set_longitude(value: number): void;
        get_measure(): number;
        set_measure(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldGuid extends SP.Field {
    }
    export class FieldLink extends SP.ClientObject {
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_id(): SP.Guid;
        get_name(): string;
        get_required(): boolean;
        set_required(value: boolean): void;
        deleteObject(): void;
    }
    export class FieldLinkCollection extends SP.ClientObjectCollection<FieldLink> {
        itemAt(index: number): SP.FieldLink;
        get_item(index: number): SP.FieldLink;
        getById(id: SP.Guid): SP.FieldLink;
        add(parameters: SP.FieldLinkCreationInformation): SP.FieldLink;
        reorder(internalNames: string[]): void;
    }
    export class FieldLinkCreationInformation extends SP.ClientValueObject {
        get_field(): SP.Field;
        set_field(value: SP.Field): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldLookup extends SP.Field {
        get_allowMultipleValues(): boolean;
        set_allowMultipleValues(value: boolean): void;
        get_isRelationship(): boolean;
        set_isRelationship(value: boolean): void;
        get_lookupField(): string;
        set_lookupField(value: string): void;
        get_lookupList(): string;
        set_lookupList(value: string): void;
        get_lookupWebId(): SP.Guid;
        set_lookupWebId(value: SP.Guid): void;
        get_primaryFieldId(): string;
        set_primaryFieldId(value: string): void;
        get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
        set_relationshipDeleteBehavior(value: SP.RelationshipDeleteBehaviorType): void;
    }
    export class FieldLookupValue extends SP.ClientValueObject {
        get_lookupId(): number;
        set_lookupId(value: number): void;
        get_lookupValue(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldMultiLineText extends SP.Field {
        get_allowHyperlink(): boolean;
        set_allowHyperlink(value: boolean): void;
        get_appendOnly(): boolean;
        set_appendOnly(value: boolean): void;
        get_numberOfLines(): number;
        set_numberOfLines(value: number): void;
        get_restrictedMode(): boolean;
        set_restrictedMode(value: boolean): void;
        get_richText(): boolean;
        set_richText(value: boolean): void;
        get_wikiLinking(): boolean;
    }
    export class FieldRatingScale extends SP.FieldMultiChoice {
        get_gridEndNumber(): number;
        set_gridEndNumber(value: number): void;
        get_gridNAOptionText(): string;
        set_gridNAOptionText(value: string): void;
        get_gridStartNumber(): number;
        set_gridStartNumber(value: number): void;
        get_gridTextRangeAverage(): string;
        set_gridTextRangeAverage(value: string): void;
        get_gridTextRangeHigh(): string;
        set_gridTextRangeHigh(value: string): void;
        get_gridTextRangeLow(): string;
        set_gridTextRangeLow(value: string): void;
        get_rangeCount(): number;
    }
    export class FieldRatingScaleQuestionAnswer extends SP.ClientValueObject {
        get_answer(): number;
        set_answer(value: number): void;
        get_question(): string;
        set_question(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldStringValues extends SP.ClientObject {
        get_fieldValues(): any;
        get_item(fieldName: string): string;
        refreshLoad(): void;
    }
    export class FieldText extends SP.Field {
        get_maxLength(): number;
        set_maxLength(value: number): void;
    }
    export enum FieldType {
        invalid,
        integer,
        text,
        note,
        dateTime,
        counter,
        choice,
        lookup,
        boolean,
        number,
        currency,
        URL,
        computed,
        threading,
        guid,
        multiChoice,
        gridChoice,
        calculated,
        file,
        attachments,
        user,
        recurrence,
        crossProjectLink,
        modStat,
        error,
        contentTypeId,
        pageSeparator,
        threadIndex,
        workflowStatus,
        allDayEvent,
        workflowEventType,
        geolocation,
        outcomeChoice,
        maxItems,
    }
    export class FieldUrl extends SP.Field {
        get_displayFormat(): SP.UrlFieldFormatType;
        set_displayFormat(value: SP.UrlFieldFormatType): void;
    }
    export class FieldUrlValue extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class FieldUser extends SP.FieldLookup {
        get_allowDisplay(): boolean;
        set_allowDisplay(value: boolean): void;
        get_presence(): boolean;
        set_presence(value: boolean): void;
        get_selectionGroup(): number;
        set_selectionGroup(value: number): void;
        get_selectionMode(): SP.FieldUserSelectionMode;
        set_selectionMode(value: SP.FieldUserSelectionMode): void;
    }
    export enum FieldUserSelectionMode {
        peopleOnly,
        peopleAndGroups,
    }
    export class FieldUserValue extends SP.FieldLookupValue {
        static fromUser(userName: string): SP.FieldUserValue;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Represents a file in a SharePoint Web site that can be a Web Part Page, an item in a document library, or a file in a folder. */
    export class File extends SP.ClientObject {
        get_author(): SP.User;
        /** Returns the user who has checked out the file. */
        get_checkedOutByUser(): SP.User;
        /** Returns the comment that was specified when the document was checked into the document library. */
        get_checkInComment(): string;
        /** The type of checkout that exists on the document. */
        get_checkOutType(): SP.CheckOutType;
        get_contentTag(): string;
        /** Gets the customization(ghost) status of the SPFile. */
        get_customizedPageStatus(): SP.CustomizedPageStatus;
        /** Gets the ETag of the file  */
        get_eTag(): string;
        /** Specifies whether the file exists  */
        get_exists(): boolean;
        get_length(): number;
        get_level(): SP.FileLevel;
        /** Specifies the SPListItem corresponding to this file if this file belongs to a doclib. Values for all fields are returned also. */
        get_listItemAllFields(): SP.ListItem;
        /** Returns the user that owns the current lock on the file. MUST return null if there is no lock. */
        get_lockedByUser(): SP.User;
        /** Specifies the major version of the file. */
        get_majorVersion(): number;
        /** Specifies the minor version of the file. */
        get_minorVersion(): number;
        get_modifiedBy(): SP.User;
        get_name(): string;
        get_serverRelativeUrl(): string;
        /** Specifies when the file was created. */
        get_timeCreated(): Date;
        /** Specifies when the file was created. */
        get_timeLastModified(): Date;
        get_title(): string;
        /** Specifies the implementation-specific version identifier of the file. */
        get_uIVersion(): number;
        /** Specifies the implementation-specific version identifier of the file. */
        get_uIVersionLabel(): string;
        /** Returns a collection of file version objects that represent the versions of the file. */
        get_versions(): SP.FileVersionCollection;
        /** Reverts an existing online or offline checkout for the file. */
        undoCheckOut(): void;
        checkIn(comment: string, checkInType: SP.CheckinType): void;
        publish(comment: string): void;
        /** Removes the file from content approval with the specified comment. */
        unPublish(comment: string): void;
        /** Approves the file submitted for content approval with the specified comment.  */
        approve(comment: string): void;
        /** Denies the file submitted for content approval. */
        deny(comment: string): void;
        static getContentVerFromTag(context: SP.ClientRuntimeContext, contentTag: string): SP.IntResult;
        getLimitedWebPartManager(scope: SP.WebParts.PersonalizationScope): SP.WebParts.LimitedWebPartManager;
        moveTo(newUrl: string, flags: SP.MoveOperations): void;
        copyTo(strNewUrl: string, bOverWrite: boolean): void;
        saveBinary(parameters: SP.FileSaveBinaryInformation): void;
        deleteObject(): void;
        /** Moves the file to the recycle bin. MUST return the identifier of the new Recycle Bin item */
        recycle(): SP.GuidResult;
        checkOut(): void;
    }
    export class FileCollection extends SP.ClientObjectCollection<File> {
        itemAt(index: number): SP.File;
        get_item(index: number): SP.File;
        getByUrl(url: string): SP.File;
        add(parameters: SP.FileCreationInformation): SP.File;
        addTemplateFile(urlOfFile: string, templateFileType: SP.TemplateFileType): SP.File;
    }
    export class FileCreationInformation extends SP.ClientValueObject {
        get_content(): SP.Base64EncodedByteArray;
        set_content(value: SP.Base64EncodedByteArray): void;
        get_overwrite(): boolean;
        set_overwrite(value: boolean): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum FileLevel {
        published,
        draft,
        checkout,
    }
    export class FileSaveBinaryInformation extends SP.ClientValueObject {
        get_checkRequiredFields(): boolean;
        set_checkRequiredFields(value: boolean): void;
        get_content(): SP.Base64EncodedByteArray;
        set_content(value: SP.Base64EncodedByteArray): void;
        get_eTag(): string;
        set_eTag(value: string): void;
        get_fieldValues(): any;
        set_fieldValues(value: any): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum FileSystemObjectType {
        invalid,
        file,
        folder,
        web,
    }
    export class FileVersion extends SP.ClientObject {
        get_checkInComment(): string;
        get_created(): Date;
        get_createdBy(): SP.User;
        get_iD(): number;
        get_isCurrentVersion(): boolean;
        get_size(): number;
        get_url(): string;
        get_versionLabel(): string;
        deleteObject(): void;
    }
    export class FileVersionCollection extends SP.ClientObjectCollection<FileVersion> {
        itemAt(index: number): SP.FileVersion;
        get_item(index: number): SP.FileVersion;
        getById(versionid: number): SP.FileVersion;
        deleteByID(vid: number): void;
        deleteByLabel(versionlabel: string): void;
        deleteAll(): void;
        restoreByLabel(versionlabel: string): void;
    }
    export class Folder extends SP.ClientObject {
        get_contentTypeOrder(): SP.ContentTypeId[];
        get_files(): SP.FileCollection;
        get_listItemAllFields(): SP.ListItem;
        get_itemCount(): number;
        get_name(): string;
        get_parentFolder(): SP.Folder;
        get_properties(): SP.PropertyValues;
        get_serverRelativeUrl(): string;
        get_folders(): SP.FolderCollection;
        get_uniqueContentTypeOrder(): SP.ContentTypeId[];
        set_uniqueContentTypeOrder(value: SP.ContentTypeId[]): void;
        get_welcomePage(): string;
        set_welcomePage(value: string): void;
        update(): void;
        deleteObject(): void;
        recycle(): SP.GuidResult;
    }
    export class FolderCollection extends SP.ClientObjectCollection<Folder> {
        itemAt(index: number): SP.Folder;
        get_item(index: number): SP.Folder;
        getByUrl(url: string): SP.Folder;
        add(url: string): SP.Folder;
    }
    export class Form extends SP.ClientObject {
        get_id(): SP.Guid;
        get_serverRelativeUrl(): string;
        get_formType(): SP.PageType;
    }
    export class FormCollection extends SP.ClientObjectCollection<Form> {
        itemAt(index: number): SP.Form;
        get_item(index: number): SP.Form;
        getByPageType(formType: SP.PageType): SP.Form;
        getById(id: SP.Guid): SP.Form;
    }
    export class Principal extends SP.ClientObject {
        get_id(): number;
        get_isHiddenInUI(): boolean;
        get_loginName(): string;
        get_title(): string;
        set_title(value: string): void;
        get_principalType(): SP.Utilities.PrincipalType;
    }
    export class Group extends SP.Principal {
        get_allowMembersEditMembership(): boolean;
        set_allowMembersEditMembership(value: boolean): void;
        get_allowRequestToJoinLeave(): boolean;
        set_allowRequestToJoinLeave(value: boolean): void;
        get_autoAcceptRequestToJoinLeave(): boolean;
        set_autoAcceptRequestToJoinLeave(value: boolean): void;
        get_canCurrentUserEditMembership(): boolean;
        get_canCurrentUserManageGroup(): boolean;
        get_canCurrentUserViewMembership(): boolean;
        get_description(): string;
        set_description(value: string): void;
        get_onlyAllowMembersViewMembership(): boolean;
        set_onlyAllowMembersViewMembership(value: boolean): void;
        get_owner(): SP.Principal;
        set_owner(value: SP.Principal): void;
        get_ownerTitle(): string;
        get_requestToJoinLeaveEmailSetting(): string;
        set_requestToJoinLeaveEmailSetting(value: string): void;
        get_users(): SP.UserCollection;
        update(): void;
    }
    export class GroupCollection extends SP.ClientObjectCollection<Group> {
        itemAt(index: number): SP.Group;
        get_item(index: number): SP.Group;
        getByName(name: string): SP.Group;
        getById(id: number): SP.Group;
        add(parameters: SP.GroupCreationInformation): SP.Group;
        removeByLoginName(loginName: string): void;
        removeById(id: number): void;
        remove(group: SP.Group): void;
    }
    export class GroupCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class InformationRightsManagementSettings extends SP.ClientObject {
        get_allowPrint(): boolean;
        set_allowPrint(value: boolean): void;
        get_allowScript(): boolean;
        set_allowScript(value: boolean): void;
        get_allowWriteCopy(): boolean;
        set_allowWriteCopy(value: boolean): void;
        get_disableDocumentBrowserView(): boolean;
        set_disableDocumentBrowserView(value: boolean): void;
        get_documentAccessExpireDays(): number;
        set_documentAccessExpireDays(value: number): void;
        get_documentLibraryProtectionExpireDate(): Date;
        set_documentLibraryProtectionExpireDate(value: Date): void;
        get_enableDocumentAccessExpire(): boolean;
        set_enableDocumentAccessExpire(value: boolean): void;
        get_enableDocumentBrowserPublishingView(): boolean;
        set_enableDocumentBrowserPublishingView(value: boolean): void;
        get_enableGroupProtection(): boolean;
        set_enableGroupProtection(value: boolean): void;
        get_enableLicenseCacheExpire(): boolean;
        set_enableLicenseCacheExpire(value: boolean): void;
        get_groupName(): string;
        set_groupName(value: string): void;
        get_licenseCacheExpireDays(): number;
        set_licenseCacheExpireDays(value: number): void;
        get_policyDescription(): string;
        set_policyDescription(value: string): void;
        get_policyTitle(): string;
        set_policyTitle(value: string): void;
        reset(): void;
        update(): void;
    }
    export class Language extends SP.ClientValueObject {
        get_displayName(): string;
        get_languageTag(): string;
        get_lcid(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class SecurableObject extends SP.ClientObject {
        get_firstUniqueAncestorSecurableObject(): SP.SecurableObject;
        get_hasUniqueRoleAssignments(): boolean;
        get_roleAssignments(): SP.RoleAssignmentCollection;
        resetRoleInheritance(): void;
        breakRoleInheritance(copyRoleAssignments: boolean, clearSubscopes: boolean): void;
    }
    /** Represents display mode for a control or form */
    export enum ControlMode {
        invalid,
        displayMode,
        editMode,
        newMode
    }
    /** Represents a list on a SharePoint Web site. */
    export class List extends SP.SecurableObject {
        /** Gets item by id. */
        getItemById(id: number): SP.ListItem;
        /** Gets a value that specifies whether the list supports content types. */
        get_allowContentTypes(): boolean;
        /** Gets the list definition type on which the list is based. For lists based on OOTB list definitions, return value corresponds the SP.ListTemplateType enumeration. */
        get_baseTemplate(): number;
        /** Gets base type for the list. */
        get_baseType(): SP.BaseType;
        /** Gets a value that specifies the override of the web application�s BrowserFileHandling property at the list level. */
        get_browserFileHandling(): SP.BrowserFileHandling;
        /** Gets the content types that are associated with the list. */
        get_contentTypes(): SP.ContentTypeCollection;
        /** Gets a value that specifies whether content types are enabled for the list. */
        get_contentTypesEnabled(): boolean;
        /** Sets a value that specifies whether content types are enabled for the list. */
        set_contentTypesEnabled(value: boolean): void;
        /** Gets a value that specifies when the list was created. */
        get_created(): Date;
        /** Gets the data source associated with the list, or null if the list is not a virtual list. */
        get_dataSource(): SP.ListDataSource;
        /** Gets a value that specifies the default workflow identifier for content approval on the list. */
        get_defaultContentApprovalWorkflowId(): SP.Guid;
        /** Sets a value that specifies the default workflow identifier for content approval on the list. */
        set_defaultContentApprovalWorkflowId(value: SP.Guid): void;
        /** Gets a value that specifies the location of the default display form for the list. */
        get_defaultDisplayFormUrl(): string;
        /** Sets a value that specifies the location of the default display form for the list. */
        set_defaultDisplayFormUrl(value: string): void;
        /** Gets a value that specifies the URL of the edit form to use for list items in the list. */
        get_defaultEditFormUrl(): string;
        /** Sets a value that specifies the URL of the edit form to use for list items in the list. */
        set_defaultEditFormUrl(value: string): void;
        /** Gets a value that specifies the location of the default new form for the list. */
        get_defaultNewFormUrl(): string;
        /** Sets a value that specifies the location of the default new form for the list. */
        set_defaultNewFormUrl(value: string): void;
        /** Gets default view for the list. */
        get_defaultView(): SP.View;
        /** Get URL of the default view for the list. */
        get_defaultViewUrl(): string;
        /** Gets a value that specifies the description of the list. */
        get_description(): string;
        /** Sets a value that specifies the description of the list. */
        set_description(value: string): void;
        /** Gets a value that specifies the reading order of the list. */
        get_direction(): string;
        /** Sets a value that specifies the reading order of the list. */
        set_direction(value: string): void;
        /** Gets a value that specifies the server-relative URL of the document template for the list */
        get_documentTemplateUrl(): string;
        /** Sets a value that specifies the server-relative URL of the document template for the list */
        set_documentTemplateUrl(value: string): void;
        /** Gets a value that specifies the minimum permission required to view minor versions and drafts within the list. */
        get_draftVersionVisibility(): SP.DraftVisibilityType;
        /** Sets a value that specifies the minimum permission required to view minor versions and drafts within the list. */
        set_draftVersionVisibility(value: SP.DraftVisibilityType): void;
        /** Gets a value that specifies the effective permissions on the list that are assigned to the current user. */
        get_effectiveBasePermissions(): SP.BasePermissions;
        /** Gets the effective base permissions for the current user, as they should be displayed in UI. This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions. */
        get_effectiveBasePermissionsForUI(): SP.BasePermissions;
        /** Gets a value that specifies whether list item attachments are enabled for the list. */
        get_enableAttachments(): boolean;
        /** Sets a value that specifies whether list item attachments are enabled for the list. */
        set_enableAttachments(value: boolean): void;
        /** Gets a value that specifies whether new list folders can be added to the list. */
        get_enableFolderCreation(): boolean;
        /** Sets a value that specifies whether new list folders can be added to the list. */
        set_enableFolderCreation(value: boolean): void;
        /** Gets a value that specifies whether minor versions are enabled for the list. */
        get_enableMinorVersions(): boolean;
        /** Sets a value that specifies whether minor versions are enabled for the list. */
        set_enableMinorVersions(value: boolean): void;
        /** Gets a value that specifies whether content approval is enabled for the list. */
        get_enableModeration(): boolean;
        /** Sets a value that specifies whether content approval is enabled for the list */
        set_enableModeration(value: boolean): void;
        /** Gets a value that specifies whether historical versions of list items and documents can be created in the list */
        get_enableVersioning(): boolean;
        /** Sets a value that specifies whether historical versions of list items and documents can be created in the list */
        set_enableVersioning(value: boolean): void;
        /** The entity type name. */
        get_entityTypeName(): string;
        /** Gets collection of event receiver objects associated with the list. */
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        /** Gets a value that specifies the collection of all fields in the list. */
        get_fields(): SP.FieldCollection;
        /** Gets a value that indicates whether forced checkout is enabled for the document library. */
        get_forceCheckout(): boolean;
        /** Sets a value that indicates whether forced checkout is enabled for the document library */
        set_forceCheckout(value: boolean): void;
        /** Gets collections of forms associated with the list. */
        get_forms(): SP.FormCollection;
        /** Returns true if this is external list. */
        get_hasExternalDataSource(): boolean;
        /** Gets wherever the list is hidden */
        get_hidden(): boolean;
        /** Sets if the list is hidden from "All site contents" or not. */
        set_hidden(value: boolean): void;
        /** Gets id of the list */
        get_id(): SP.Guid;
        /** Gets a value that specifies the URI for the icon of the list */
        get_imageUrl(): string;
        /** Sets a value that specifies the URI for the icon of the list */
        set_imageUrl(value: string): void;
        /** Settings of document library Information Rights Management (IRM)  */
        get_informationRightsManagementSettings(): SP.InformationRightsManagementSettings;
        /** Gets a value that specifies whether Information Rights Management (IRM) is enabled for the list.  */
        get_irmEnabled(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) is enabled for the list.  */
        set_irmEnabled(value: boolean): void;
        /** Gets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.  */
        get_irmExpire(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) expiration is enabled for the list.  */
        set_irmExpire(value: boolean): void;
        /** Gets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.  */
        get_irmReject(): boolean;
        /** Sets a value that specifies whether Information Rights Management (IRM) rejection is enabled for the list.  */
        set_irmReject(value: boolean): void;
        /** Indicates whether this list should be treated as a top level navigation object or not.  */
        get_isApplicationList(): boolean;
        /** Sets a value that indicates whether this list should be treated as a top level navigation object or not.  */
        set_isApplicationList(value: boolean): void;
        /** Gets a value that specifies whether the list is a gallery. */
        get_isCatalog(): boolean;
        /** Gets a value that indicates whether the document library is a private list with restricted permissions, such as for Solutions.  */
        get_isPrivate(): boolean;
        /** Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages. */
        get_isSiteAssetsLibrary(): boolean;
        /** Gets a value that specifies the number of list items in the list */
        get_itemCount(): number;
        /** Gets a value that specifies the last time a list item was deleted from the list. */
        get_lastItemDeletedDate(): Date;
        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        get_lastItemModifiedDate(): Date;
        /** Sets a value that specifies the last time the list was modified. */
        set_lastItemModifiedDate(value: Date): void;
        /** The entity type full name of the list item in the list. */
        get_listItemEntityTypeFullName(): string;
        /** Gets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site */
        get_multipleDataList(): boolean;
        /** Sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site */
        set_multipleDataList(value: boolean): void;
        /** Gets a value that specifies that the crawler must not crawl the list */
        get_noCrawl(): boolean;
        /** Sets a value that specifies that the crawler must not crawl the list */
        set_noCrawl(value: boolean): void;
        /** Gets a value that specifies whether the list appears on the Quick Launch of the site */
        get_onQuickLaunch(): boolean;
        /** Sets a value that specifies whether the list appears on the Quick Launch of the site */
        set_onQuickLaunch(value: boolean): void;
        /** Gets a value that specifies the site that contains the list. */
        get_parentWeb(): SP.Web;
        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        get_parentWebUrl(): string;
        /** Gets the root folder that contains the files in the list and any related files. */
        get_rootFolder(): SP.Folder;
        /** Gets a value that specifies the list schema of the list. */
        get_schemaXml(): string;
        /** Gets a value that indicates whether folders can be created within the list. */
        get_serverTemplateCanCreateFolders(): boolean;
        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. */
        get_templateFeatureId(): SP.Guid;
        /** Gets the list title. You can determine list URL from it's root folder URL. */
        get_title(): string;
        /** Sets the list title. To change list URL you should change name of the root folder. */
        set_title(value: string): void;
        /** Gets collection of custom actions associated with the list. */
        get_userCustomActions(): SP.UserCustomActionCollection;
        /** Gets a value that specifies the data validation criteria for a list item. */
        get_validationFormula(): string;
        /** Sets a value that specifies the data validation criteria for a list item. */
        set_validationFormula(value: string): void;
        /** Gets a value that specifies the error message returned when data validation fails for a list item. */
        get_validationMessage(): string;
        /** Sets a value that specifies the error message returned when data validation fails for a list item. */
        set_validationMessage(value: string): void;
        /** Returns collection of views added to the list */
        get_views(): SP.ViewCollection;
        /** Gets the collection of workflow association objects that represents all the workflows that are associated with the list. */
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        /** Returns the collection of changes from the change log that have occurred within the list, based on the specified query. */
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        /** Returns array of items describing changes since time specified in the query */
        getListItemChangesSinceToken(query: SP.ChangeLogItemQuery): any[];
        /** Gets the effective permissions that a specified user has on the list. */
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        /** First tries to find if the view already exists. Overwrite it if yes, add a new view if no. Then extract all the adhoc filter/sort info from the URL and build and update the view's xml Returns the url of the new/overwritten view.
            @param oldName The name of the view the user did the adhoc filter on (is currently on).
            @param newName The desired name the user typed
            @param privateView Boolean true when the user wants make a new view that's personal
            @param uri Url that keeps all the adhoc filter/sort inforatmion */
        saveAsNewView(oldName: string, newName: string, privateView: boolean, uri: string): SP.StringResult;
        /** Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true. */
        getRelatedFields(): SP.RelatedFieldCollection;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        getRelatedFieldsExtendedData(): SP.RelatedFieldExtendedDataCollection;
        /** Returns json string which contains all information necessary for rendering the specified list form for the specified itemId. Mode is SP.ControlMode */
        renderListFormData(itemId: number, formId: string, mode: SP.ControlMode): SP.StringResult;
        /** Returns the data for the specified query view. */
        renderListData(viewXml: string): SP.StringResult;
        /** This member is reserved for internal use and is not intended to be used directly from your code. */
        reserveListItemId(): SP.IntResult;
        /** Updates the database with changes that are made to the list object. */
        update(): void;
        /** Returns the list view with the specified view identifier. */
        getView(viewGuid: SP.Guid): SP.View;
        /** Deletes the list. */
        deleteObject(): void;
        /** Sends the list to the site recycle bin. */
        recycle(): SP.GuidResult;
        /** Returns collection of list items based on the specified CAML query. */
        getItems(query: SP.CamlQuery): SP.ListItemCollection;
        /** Creates a new list item in the list. */
        addItem(parameters: SP.ListItemCreationInformation): SP.ListItem;
    }
    /** Represents a collection of SP.List objects */
    export class ListCollection extends SP.ClientObjectCollection<List> {
        /** Gets the list at the specified index in the collection. */
        itemAt(index: number): SP.List;
        /** Gets the list at the specified index in the collection. */
        get_item(index: number): SP.List;
        /** Returns the list with the specified title from the collection. */
        getByTitle(title: string): SP.List;
        /** Returns the list with the specified list identifier. */
        getById(id: SP.Guid): SP.List;
        /** Returns the list with the specified list identifier. */
        getById(id: string): SP.List;
        /** Creates a new list or a document library. */
        add(parameters: SP.ListCreationInformation): SP.List;
        /** Gets a list that is the default location for wiki pages. */
        ensureSitePagesLibrary(): SP.List;
        /** Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages. */
        ensureSiteAssetsLibrary(): SP.List;
    }
    export class ListCreationInformation extends SP.ClientValueObject {
        get_customSchemaXml(): string;
        set_customSchemaXml(value: string): void;
        get_dataSourceProperties(): any;
        set_dataSourceProperties(value: any): void;
        get_description(): string;
        set_description(value: string): void;
        get_documentTemplateType(): number;
        set_documentTemplateType(value: number): void;
        get_quickLaunchOption(): SP.QuickLaunchOptions;
        set_quickLaunchOption(value: SP.QuickLaunchOptions): void;
        get_templateFeatureId(): SP.Guid;
        set_templateFeatureId(value: SP.Guid): void;
        get_templateType(): number;
        set_templateType(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataSource extends SP.ClientValueObject {
        get_properties(): any;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataValidationExceptionValue extends SP.ClientValueObject {
        get_fieldFailures(): SP.ListDataValidationFailure[];
        get_itemFailure(): SP.ListDataValidationFailure;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListDataValidationFailure extends SP.ClientValueObject {
        get_displayName(): string;
        get_message(): string;
        get_name(): string;
        get_reason(): SP.ListDataValidationFailureReason;
        get_validationType(): SP.ListDataValidationType;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum ListDataValidationFailureReason {
        dataFailure,
        formulaError,
    }
    export enum ListDataValidationType {
        userFormulaField,
        userFormulaItem,
        requiredField,
        choiceField,
        minMaxField,
        textField,
    }
    /** Represents an item or row in a list. */
    export class ListItem extends SP.SecurableObject {
        get_fieldValues(): any;
        /** Gets the specified field value for the list item. Field value is returned as string, but it can be casted to a specific field value type, e.g. SP.LookupFieldValue, etc. */
        get_item(fieldInternalName: string): any;
        /** Sets the specified field value for the list item. Consider using parseAndSetFieldValue instead. */
        set_item(fieldInternalName: string, value: any): void;
        /** Gets collection of objects that represent attachments for the list item. */
        get_attachmentFiles(): SP.AttachmentCollection;
        /** Gets the content type of the item. */
        get_contentType(): SP.ContentType;
        /** Gets a value that specifies the display name of the list item.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string. */
        get_displayName(): string;
        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string. */
        get_effectiveBasePermissions(): SP.BasePermissions;
        /** Gets the effective base permissions for the current user, as they should be displayed in UI.
            This will only differ from EffectiveBasePermissions if ReadOnlyUI is set to true on the item's parent list, and in all cases will be a subset of EffectiveBasePermissions. To put it another way, EffectiveBasePermissionsForUI will always be as or more restrictive than EffectiveBasePermissions.
            This property is not available by default when you return list items. Trying to call this method returns a PropertyOrFieldNotInitializedException if you try to access one of these properties. To access this property, use the Include method as part of the query string.  */
        get_effectiveBasePermissionsForUI(): SP.BasePermissions;
        get_fieldValuesAsHtml(): SP.FieldStringValues;
        get_fieldValuesAsText(): SP.FieldStringValues;
        get_fieldValuesForEdit(): SP.FieldStringValues;
        /** Gets the file that is represented by the item from a document library. Only for document libraries. */
        get_file(): SP.File;
        /** Gets or sets the file system object type for the item (file, folder or invalid). */
        get_fileSystemObjectType(): SP.FileSystemObjectType;
        /** Gets the parent folder for the list item */
        get_folder(): SP.Folder;
        /** Gets id of the item */
        get_id(): number;
        /** Get the list in which the item resides. */
        get_parentList(): SP.List;
        refreshLoad(): void;
        getWOPIFrameUrl(action: SP.Utilities.SPWOPIFrameAction): SP.StringResult;
        /** Commits changed properties of the list item. The actual update is performed during context.executeQueryAsync method call. */
        update(): void;
        /** Deletes the list item */
        deleteObject(): void;
        /** Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item. */
        recycle(): SP.GuidResult;
        /** Gets effective permissions for the specified user. */
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        /** Sets the value of the field for the list item based on an implementation specific transformation of the value. */
        parseAndSetFieldValue(fieldInternalName: string, value: string): void;
        /** Validates form values specified for the list item. Errors are returned through hasException and errorMessage properties of the ListItemFormUpdateValue objects */
        validateUpdateListItem(formValues: SP.ListItemFormUpdateValue[], bNewDocumentUpdate: boolean): SP.ListItemFormUpdateValue[];
    }
    export class ListItemCollection extends SP.ClientObjectCollection<ListItem> {
        itemAt(index: number): SP.ListItem;
        get_item(index: number): SP.ListItem;
        getById(id: number): SP.ListItem;
        getById(id: string): SP.ListItem;
        get_listItemCollectionPosition(): SP.ListItemCollectionPosition;
    }
    export class ListItemCollectionPosition extends SP.ClientValueObject {
        get_pagingInfo(): string;
        set_pagingInfo(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    /** Specifies the properties of the new list item. */
    export class ListItemCreationInformation extends SP.ClientValueObject {
        get_folderUrl(): string;
        /** Sets a value that specifies the folder for the new list item. */
        set_folderUrl(value: string): void;
        get_leafName(): string;
        /** Sets a value that specifies the name of the new list item. It must be the name of the file if the parent list of the list item is a document library. */
        set_leafName(value: string): void;
        get_underlyingObjectType(): SP.FileSystemObjectType;
        /** Sets a value that specifies whether the new list item is a file or a folder. */
        set_underlyingObjectType(value: SP.FileSystemObjectType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListItemEntityCollection extends SP.ClientObjectCollection<ListItem> {
        itemAt(index: number): SP.ListItem;
        get_item(index: number): SP.ListItem;
    }
    export class ListItemFormUpdateValue extends SP.ClientValueObject {
        get_errorMessage(): string;
        set_errorMessage(value: string): void;
        get_fieldName(): string;
        set_fieldName(value: string): void;
        get_fieldValue(): string;
        set_fieldValue(value: string): void;
        get_hasException(): boolean;
        set_hasException(value: boolean): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ListTemplate extends SP.ClientObject {
        get_allowsFolderCreation(): boolean;
        get_baseType(): SP.BaseType;
        get_description(): string;
        get_featureId(): SP.Guid;
        get_hidden(): boolean;
        get_imageUrl(): string;
        get_internalName(): string;
        get_isCustomTemplate(): boolean;
        get_name(): string;
        get_onQuickLaunch(): boolean;
        get_listTemplateTypeKind(): number;
        get_unique(): boolean;
    }
    export class ListTemplateCollection extends SP.ClientObjectCollection<ListTemplate> {
        itemAt(index: number): SP.ListTemplate;
        get_item(index: number): SP.ListTemplate;
        getByName(name: string): SP.ListTemplate;
    }
    export enum ListTemplateType {
        invalidType,
        noListTemplate,
        genericList,
        documentLibrary,
        survey,
        links,
        announcements,
        contacts,
        events,
        tasks,
        discussionBoard,
        pictureLibrary,
        dataSources,
        webTemplateCatalog,
        userInformation,
        webPartCatalog,
        listTemplateCatalog,
        xMLForm,
        masterPageCatalog,
        noCodeWorkflows,
        workflowProcess,
        webPageLibrary,
        customGrid,
        solutionCatalog,
        noCodePublic,
        themeCatalog,
        designCatalog,
        appDataCatalog,
        dataConnectionLibrary,
        workflowHistory,
        ganttTasks,
        helpLibrary,
        accessRequest,
        tasksWithTimelineAndHierarchy,
        maintenanceLogs,
        meetings,
        agenda,
        meetingUser,
        decision,
        meetingObjective,
        textBox,
        thingsToBring,
        homePageLibrary,
        posts,
        comments,
        categories,
        facility,
        whereabouts,
        callTrack,
        circulation,
        timecard,
        holidays,
        iMEDic,
        externalList,
        mySiteDocumentLibrary,
        issueTracking,
        adminTasks,
        healthRules,
        healthReports,
        developerSiteDraftApps,
    }
    export enum MoveOperations {
        none,
        overwrite,
        allowBrokenThickets,
        bypassApprovePermission,
    }
    export class Navigation extends SP.ClientObject {
        get_quickLaunch(): SP.NavigationNodeCollection;
        get_topNavigationBar(): SP.NavigationNodeCollection;
        get_useShared(): boolean;
        set_useShared(value: boolean): void;
        getNodeById(id: number): SP.NavigationNode;
    }
    export class NavigationNode extends SP.ClientObject {
        get_children(): SP.NavigationNodeCollection;
        get_id(): number;
        get_isDocLib(): boolean;
        get_isExternal(): boolean;
        get_isVisible(): boolean;
        set_isVisible(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        update(): void;
        deleteObject(): void;
    }
    export class NavigationNodeCollection extends SP.ClientObjectCollection<NavigationNode> {
        itemAt(index: number): SP.NavigationNode;
        get_item(index: number): SP.NavigationNode;
        add(parameters: SP.NavigationNodeCreationInformation): SP.NavigationNode;
    }
    export class NavigationNodeCreationInformation extends SP.ClientValueObject {
        get_asLastNode(): boolean;
        set_asLastNode(value: boolean): void;
        get_isExternal(): boolean;
        set_isExternal(value: boolean): void;
        get_previousNode(): SP.NavigationNode;
        set_previousNode(value: SP.NavigationNode): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ObjectSharingInformation extends SP.ClientObject {
        get_anonymousEditLink(): string;
        get_anonymousViewLink(): string;
        get_canManagePermissions(): boolean;
        get_hasPendingAccessRequests(): boolean;
        get_hasPermissionLevels(): boolean;
        get_isSharedWithCurrentUser(): boolean;
        get_isSharedWithGuest(): boolean;
        get_isSharedWithMany(): boolean;
        get_isSharedWithSecurityGroup(): boolean;
        get_pendingAccessRequestsLink(): string;
        getSharedWithUsers(): SP.ClientObjectList<SP.ObjectSharingInformationUser>;
        static getListItemSharingInformation(context: SP.ClientRuntimeContext, listID: SP.Guid, itemID: number, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean): SP.ObjectSharingInformation;
        static getWebSharingInformation(context: SP.ClientRuntimeContext, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean): SP.ObjectSharingInformation;
        static getObjectSharingInformation(context: SP.ClientRuntimeContext, securableObject: SP.SecurableObject, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean, retrievePermissionLevels: boolean): SP.ObjectSharingInformation;
    }
    export class ObjectSharingInformationUser extends SP.ClientObject {
        get_customRoleNames(): string;
        get_department(): string;
        get_email(): string;
        get_hasEditPermission(): boolean;
        get_hasViewPermission(): boolean;
        get_id(): number;
        get_isSiteAdmin(): boolean;
        get_jobTitle(): string;
        get_loginName(): string;
        get_name(): string;
        get_picture(): string;
        get_principal(): SP.Principal;
        get_sipAddress(): string;
        get_user(): SP.User;
    }
    export enum OpenWebOptions {
        none,
        initNavigationCache,
    }
    export enum PageType {
        invalid,
        defaultView,
        normalView,
        dialogView,
        view,
        displayForm,
        displayFormDialog,
        editForm,
        editFormDialog,
        newForm,
        newFormDialog,
        solutionForm,
        pAGE_MAXITEMS,
    }
    export class PropertyValues extends SP.ClientObject {
        get_fieldValues(): any;
        get_item(fieldName: string): any;
        set_item(fieldName: string, value: any): void;
        refreshLoad(): void;
    }
    export class PushNotificationSubscriber extends SP.ClientObject {
        get_customArgs(): string;
        set_customArgs(value: string): void;
        get_deviceAppInstanceId(): SP.Guid;
        get_lastModifiedTimeStamp(): Date;
        get_registrationTimeStamp(): Date;
        get_serviceToken(): string;
        set_serviceToken(value: string): void;
        get_subscriberType(): string;
        set_subscriberType(value: string): void;
        get_user(): SP.User;
        update(): void;
    }
    export class PushNotificationSubscriberCollection extends SP.ClientObjectCollection<PushNotificationSubscriber> {
        itemAt(index: number): SP.PushNotificationSubscriber;
        get_item(index: number): SP.PushNotificationSubscriber;
        getByStoreId(id: string): SP.PushNotificationSubscriber;
    }
    export enum QuickLaunchOptions {
        off,
        on,
        defaultValue,
    }
    export class RecycleBinItem extends SP.ClientObject {
        get_author(): SP.User;
        get_deletedBy(): SP.User;
        get_deletedDate(): Date;
        get_dirName(): string;
        get_id(): SP.Guid;
        get_itemState(): SP.RecycleBinItemState;
        get_itemType(): SP.RecycleBinItemType;
        get_leafName(): string;
        get_size(): number;
        get_title(): string;
        deleteObject(): void;
        restore(): void;
    }
    export class RecycleBinItemCollection extends SP.ClientObjectCollection<RecycleBinItem> {
        itemAt(index: number): SP.RecycleBinItem;
        get_item(index: number): SP.RecycleBinItem;
        getById(id: SP.Guid): SP.RecycleBinItem;
        deleteAll(): void;
        restoreAll(): void;
    }
    export enum RecycleBinItemState {
        none,
        firstStageRecycleBin,
        secondStageRecycleBin,
    }
    export enum RecycleBinItemType {
        none,
        file,
        fileVersion,
        listItem,
        list,
        folder,
        folderWithLists,
        attachment,
        listItemVersion,
        cascadeParent,
        web,
    }
    export class RegionalSettings extends SP.ClientObject {
        get_adjustHijriDays(): number;
        get_alternateCalendarType(): number;
        get_aM(): string;
        get_calendarType(): number;
        get_collation(): number;
        get_collationLCID(): number;
        get_dateFormat(): number;
        get_dateSeparator(): string;
        get_decimalSeparator(): string;
        get_digitGrouping(): string;
        get_firstDayOfWeek(): number;
        get_firstWeekOfYear(): number;
        get_isEastAsia(): boolean;
        get_isRightToLeft(): boolean;
        get_isUIRightToLeft(): boolean;
        get_listSeparator(): string;
        get_localeId(): number;
        get_negativeSign(): string;
        get_negNumberMode(): number;
        get_pM(): string;
        get_positiveSign(): string;
        get_showWeeks(): boolean;
        get_thousandSeparator(): string;
        get_time24(): boolean;
        get_timeMarkerPosition(): number;
        get_timeSeparator(): string;
        get_timeZone(): SP.TimeZone;
        get_timeZones(): SP.TimeZoneCollection;
        get_workDayEndHour(): number;
        get_workDays(): number;
        get_workDayStartHour(): number;
    }
    export class RelatedField extends SP.ClientObject {
        get_fieldId(): SP.Guid;
        get_listId(): SP.Guid;
        get_lookupList(): SP.List;
        get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
        get_webId(): SP.Guid;
    }
    export class RelatedFieldCollection extends SP.ClientObjectCollection<RelatedField> {
        itemAt(index: number): SP.RelatedField;
        get_item(index: number): SP.RelatedField;
    }
    export class RelatedFieldExtendedData extends SP.ClientObject {
        get_fieldId(): SP.Guid;
        get_listId(): SP.Guid;
        get_listImageUrl(): string;
        get_resolvedListTitle(): string;
        get_toolTipDescription(): string;
        get_webId(): SP.Guid;
    }
    export class RelatedFieldExtendedDataCollection extends SP.ClientObjectCollection<RelatedFieldExtendedData> {
        itemAt(index: number): SP.RelatedFieldExtendedData;
        get_item(index: number): SP.RelatedFieldExtendedData;
    }
    export class RelatedItem extends SP.ClientValueObject {
        get_iconUrl(): string;
        set_iconUrl(value: string): void;
        get_itemId(): number;
        set_itemId(value: number): void;
        get_listId(): string;
        set_listId(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_webId(): string;
        set_webId(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class RelatedItemManager extends SP.ClientObject {
        static getRelatedItems(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number): SP.RelatedItem[];
        static getPageOneRelatedItems(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number): SP.RelatedItem[];
        static addSingleLink(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryAddReverseLink: boolean): void;
        static addSingleLinkToUrl(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, TargetItemUrl: string, TryAddReverseLink: boolean): void;
        static addSingleLinkFromUrl(context: SP.ClientRuntimeContext, SourceItemUrl: string, TargetListName: string, TargetItemID: number, TryAddReverseLink: boolean): void;
        static deleteSingleLink(context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryDeleteReverseLink: boolean): void;
    }
    export enum RelationshipDeleteBehaviorType {
        none,
        cascade,
        restrict,
    }
    export class RequestVariable extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext);
        get_value(): string;
        static newObject(context: SP.ClientRuntimeContext): SP.RequestVariable;
        append(value: string): void;
        set(value: string): void;
    }
    export class RoleAssignment extends SP.ClientObject {
        get_member(): SP.Principal;
        get_principalId(): number;
        get_roleDefinitionBindings(): SP.RoleDefinitionBindingCollection;
        importRoleDefinitionBindings(roleDefinitionBindings: SP.RoleDefinitionBindingCollection): void;
        update(): void;
        deleteObject(): void;
    }
    export class RoleAssignmentCollection extends SP.ClientObjectCollection<RoleAssignment> {
        itemAt(index: number): SP.RoleAssignment;
        get_item(index: number): SP.RoleAssignment;
        get_groups(): SP.GroupCollection;
        getByPrincipal(principalToFind: SP.Principal): SP.RoleAssignment;
        getByPrincipalId(principalId: number): SP.RoleAssignment;
        add(principal: SP.Principal, roleBindings: SP.RoleDefinitionBindingCollection): SP.RoleAssignment;
    }
    export class RoleDefinition extends SP.ClientObject {
        get_basePermissions(): SP.BasePermissions;
        set_basePermissions(value: SP.BasePermissions): void;
        get_description(): string;
        set_description(value: string): void;
        get_hidden(): boolean;
        get_id(): number;
        get_name(): string;
        set_name(value: string): void;
        get_order(): number;
        set_order(value: number): void;
        get_roleTypeKind(): SP.RoleType;
        update(): void;
        deleteObject(): void;
    }
    export class RoleDefinitionBindingCollection extends SP.ClientObjectCollection<RoleDefinition> {
        itemAt(index: number): SP.RoleDefinition;
        get_item(index: number): SP.RoleDefinition;
        constructor(context: SP.ClientRuntimeContext);
        static newObject(context: SP.ClientRuntimeContext): SP.RoleDefinitionBindingCollection;
        add(roleDefinition: SP.RoleDefinition): void;
        remove(roleDefinition: SP.RoleDefinition): void;
        removeAll(): void;
    }
    export class RoleDefinitionCollection extends SP.ClientObjectCollection<RoleDefinition> {
        itemAt(index: number): SP.RoleDefinition;
        get_item(index: number): SP.RoleDefinition;
        getByName(name: string): SP.RoleDefinition;
        add(parameters: SP.RoleDefinitionCreationInformation): SP.RoleDefinition;
        getById(id: number): SP.RoleDefinition;
        getByType(roleType: SP.RoleType): SP.RoleDefinition;
    }
    export class RoleDefinitionCreationInformation extends SP.ClientValueObject {
        get_basePermissions(): SP.BasePermissions;
        set_basePermissions(value: SP.BasePermissions): void;
        get_description(): string;
        set_description(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_order(): number;
        set_order(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum RoleType {
        none,
        guest,
        reader,
        contributor,
        webDesigner,
        administrator,
        editor,
    }
    export class ServerSettings {
        static getAlternateUrls(context: SP.ClientRuntimeContext): SP.ClientObjectList<SP.AlternateUrl>;
        static getGlobalInstalledLanguages(context: SP.ClientRuntimeContext, compatibilityLevel: number): SP.Language[];
    }
    export class Site extends SP.ClientObject {
        get_allowDesigner(): boolean;
        set_allowDesigner(value: boolean): void;
        get_allowMasterPageEditing(): boolean;
        set_allowMasterPageEditing(value: boolean): void;
        get_allowRevertFromTemplate(): boolean;
        set_allowRevertFromTemplate(value: boolean): void;
        get_allowSelfServiceUpgrade(): boolean;
        set_allowSelfServiceUpgrade(value: boolean): void;
        get_allowSelfServiceUpgradeEvaluation(): boolean;
        set_allowSelfServiceUpgradeEvaluation(value: boolean): void;
        get_canUpgrade(): boolean;
        get_compatibilityLevel(): number;
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        get_features(): SP.FeatureCollection;
        get_id(): SP.Guid;
        get_lockIssue(): string;
        get_maxItemsPerThrottledOperation(): number;
        get_owner(): SP.User;
        set_owner(value: SP.User): void;
        get_primaryUri(): string;
        get_readOnly(): boolean;
        get_recycleBin(): SP.RecycleBinItemCollection;
        get_rootWeb(): SP.Web;
        get_serverRelativeUrl(): string;
        get_shareByLinkEnabled(): boolean;
        get_showUrlStructure(): boolean;
        set_showUrlStructure(value: boolean): void;
        get_uIVersionConfigurationEnabled(): boolean;
        set_uIVersionConfigurationEnabled(value: boolean): void;
        get_upgradeInfo(): SP.UpgradeInfo;
        get_upgradeReminderDate(): Date;
        get_upgrading(): boolean;
        get_url(): string;
        get_usage(): SP.UsageInfo;
        get_userCustomActions(): SP.UserCustomActionCollection;
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: boolean): void;
        needsUpgradeByType(versionUpgrade: boolean, recursive: boolean): SP.BooleanResult;
        runHealthCheck(ruleId: SP.Guid, bRepair: boolean, bRunAlways: boolean): SP.SiteHealth.SiteHealthSummary;
        createPreviewSPSite(upgrade: boolean, sendemail: boolean): void;
        runUpgradeSiteSession(versionUpgrade: boolean, queueOnly: boolean, sendEmail: boolean): void;
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        openWeb(strUrl: string): SP.Web;
        openWebById(gWebId: SP.Guid): SP.Web;
        getWebTemplates(LCID: number, overrideCompatLevel: number): SP.WebTemplateCollection;
        getCustomListTemplates(web: SP.Web): SP.ListTemplateCollection;
        getCatalog(typeCatalog: number): SP.List;
        extendUpgradeReminderDate(): void;
        invalidate(): void;
    }
    export class SiteUrl extends SP.ClientObject {
    }
    export class SubwebQuery extends SP.ClientValueObject {
        get_configurationFilter(): number;
        set_configurationFilter(value: number): void;
        get_webTemplateFilter(): number;
        set_webTemplateFilter(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum TemplateFileType {
        standardPage,
        wikiPage,
        formPage,
    }
    export class ThemeInfo extends SP.ClientObject {
        get_accessibleDescription(): string;
        get_themeBackgroundImageUri(): string;
        getThemeShadeByName(name: string): SP.StringResult;
        getThemeFontByName(name: string, lcid: number): SP.StringResult;
    }
    export class TimeZone extends SP.ClientObject {
        get_description(): string;
        get_id(): number;
        get_information(): SP.TimeZoneInformation;
        localTimeToUTC(date: Date): SP.DateTimeResult;
        utcToLocalTime(date: Date): SP.DateTimeResult;
    }
    export class TimeZoneCollection extends SP.ClientObjectCollection<TimeZone> {
        itemAt(index: number): SP.TimeZone;
        get_item(index: number): SP.TimeZone;
        getById(id: number): SP.TimeZone;
    }
    export class TimeZoneInformation extends SP.ClientValueObject {
        get_bias(): number;
        get_daylightBias(): number;
        get_standardBias(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class UpgradeInfo extends SP.ClientValueObject {
        get_errorFile(): string;
        get_errors(): number;
        get_lastUpdated(): Date;
        get_logFile(): string;
        get_requestDate(): Date;
        get_retryCount(): number;
        get_startTime(): Date;
        get_status(): SP.UpgradeStatus;
        get_upgradeType(): SP.UpgradeType;
        get_warnings(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export enum UpgradeStatus {
        none,
        inProgress,
        failed,
        completed,
    }
    export enum UpgradeType {
        buildUpgrade,
        versionUpgrade,
    }
    export enum UrlFieldFormatType {
        hyperlink,
        image,
    }
    export enum UrlZone {
        defaultZone,
        intranet,
        internet,
        custom,
        extranet,
    }
    export class UsageInfo extends SP.ClientValueObject {
        get_bandwidth(): number;
        get_discussionStorage(): number;
        get_hits(): number;
        get_storage(): number;
        get_storagePercentageUsed(): number;
        get_visits(): number;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class User extends SP.Principal {
        get_email(): string;
        set_email(value: string): void;
        get_groups(): SP.GroupCollection;
        get_isSiteAdmin(): boolean;
        set_isSiteAdmin(value: boolean): void;
        get_userId(): SP.UserIdInfo;
        update(): void;
    }
    export class UserCollection extends SP.ClientObjectCollection<User> {
        itemAt(index: number): SP.User;
        get_item(index: number): SP.User;
        getByLoginName(loginName: string): SP.User;
        getById(id: number): SP.User;
        getByEmail(emailAddress: string): SP.User;
        removeByLoginName(loginName: string): void;
        removeById(id: number): void;
        remove(user: SP.User): void;
        add(parameters: SP.UserCreationInformation): SP.User;
        addUser(user: SP.User): SP.User;
    }
    export class UserCreationInformation extends SP.ClientValueObject {
        get_email(): string;
        set_email(value: string): void;
        get_loginName(): string;
        set_loginName(value: string): void;
        get_title(): string;
        set_title(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class UserCustomAction extends SP.ClientObject {
        get_commandUIExtension(): string;
        set_commandUIExtension(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_group(): string;
        set_group(value: string): void;
        get_id(): SP.Guid;
        get_imageUrl(): string;
        set_imageUrl(value: string): void;
        get_location(): string;
        set_location(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_registrationId(): string;
        set_registrationId(value: string): void;
        get_registrationType(): SP.UserCustomActionRegistrationType;
        set_registrationType(value: SP.UserCustomActionRegistrationType): void;
        get_rights(): SP.BasePermissions;
        set_rights(value: SP.BasePermissions): void;
        get_scope(): SP.UserCustomActionScope;
        get_scriptBlock(): string;
        set_scriptBlock(value: string): void;
        get_scriptSrc(): string;
        set_scriptSrc(value: string): void;
        get_sequence(): number;
        set_sequence(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_versionOfUserCustomAction(): string;
        update(): void;
        deleteObject(): void;
    }
    export class UserCustomActionCollection extends SP.ClientObjectCollection<UserCustomAction> {
        itemAt(index: number): SP.UserCustomAction;
        get_item(index: number): SP.UserCustomAction;
        getById(id: SP.Guid): SP.UserCustomAction;
        clear(): void;
        add(): SP.UserCustomAction;
    }
    export enum UserCustomActionRegistrationType {
        none,
        list,
        contentType,
        progId,
        fileType,
    }
    export enum UserCustomActionScope {
        unknown,
        site,
        web,
        list,
    }
    export class UserIdInfo extends SP.ClientValueObject {
        get_nameId(): string;
        get_nameIdIssuer(): string;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class View extends SP.ClientObject {
        get_aggregations(): string;
        set_aggregations(value: string): void;
        get_aggregationsStatus(): string;
        set_aggregationsStatus(value: string): void;
        get_baseViewId(): string;
        get_contentTypeId(): SP.ContentTypeId;
        set_contentTypeId(value: SP.ContentTypeId): void;
        get_defaultView(): boolean;
        set_defaultView(value: boolean): void;
        get_defaultViewForContentType(): boolean;
        set_defaultViewForContentType(value: boolean): void;
        get_editorModified(): boolean;
        set_editorModified(value: boolean): void;
        get_formats(): string;
        set_formats(value: string): void;
        get_hidden(): boolean;
        set_hidden(value: boolean): void;
        get_htmlSchemaXml(): string;
        get_id(): SP.Guid;
        get_imageUrl(): string;
        get_includeRootFolder(): boolean;
        set_includeRootFolder(value: boolean): void;
        get_viewJoins(): string;
        set_viewJoins(value: string): void;
        get_jsLink(): string;
        set_jsLink(value: string): void;
        get_listViewXml(): string;
        set_listViewXml(value: string): void;
        get_method(): string;
        set_method(value: string): void;
        get_mobileDefaultView(): boolean;
        set_mobileDefaultView(value: boolean): void;
        get_mobileView(): boolean;
        set_mobileView(value: boolean): void;
        get_moderationType(): string;
        get_orderedView(): boolean;
        get_paged(): boolean;
        set_paged(value: boolean): void;
        get_personalView(): boolean;
        get_viewProjectedFields(): string;
        set_viewProjectedFields(value: string): void;
        get_viewQuery(): string;
        set_viewQuery(value: string): void;
        get_readOnlyView(): boolean;
        get_requiresClientIntegration(): boolean;
        get_rowLimit(): number;
        set_rowLimit(value: number): void;
        get_scope(): SP.ViewScope;
        set_scope(value: SP.ViewScope): void;
        get_serverRelativeUrl(): string;
        get_styleId(): string;
        get_threaded(): boolean;
        get_title(): string;
        set_title(value: string): void;
        get_toolbar(): string;
        set_toolbar(value: string): void;
        get_toolbarTemplateName(): string;
        get_viewType(): string;
        get_viewData(): string;
        set_viewData(value: string): void;
        get_viewFields(): SP.ViewFieldCollection;
        deleteObject(): void;
        renderAsHtml(): SP.StringResult;
        update(): void;
    }
    export class ViewCollection extends SP.ClientObjectCollection<View> {
        itemAt(index: number): SP.View;
        get_item(index: number): SP.View;
        getByTitle(strTitle: string): SP.View;
        getById(guidId: SP.Guid): SP.View;
        add(parameters: SP.ViewCreationInformation): SP.View;
    }
    export class ViewCreationInformation extends SP.ClientValueObject {
        get_paged(): boolean;
        set_paged(value: boolean): void;
        get_personalView(): boolean;
        set_personalView(value: boolean): void;
        get_query(): string;
        set_query(value: string): void;
        get_rowLimit(): number;
        set_rowLimit(value: number): void;
        get_setAsDefaultView(): boolean;
        set_setAsDefaultView(value: boolean): void;
        get_title(): string;
        set_title(value: string): void;
        get_viewFields(): string[];
        set_viewFields(value: string[]): void;
        get_viewTypeKind(): SP.ViewType;
        set_viewTypeKind(value: SP.ViewType): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class ViewFieldCollection extends SP.ClientObjectCollection<string> {
        itemAt(index: number): string;
        get_item(index: number): string;
        get_schemaXml(): string;
        moveFieldTo(field: string, index: number): void;
        add(strField: string): void;
        remove(strField: string): void;
        removeAll(): void;
    }
    export enum ViewScope {
        defaultValue,
        recursive,
        recursiveAll,
        filesOnly,
    }
    export enum ViewType {
        none,
        html,
        grid,
        calendar,
        recurrence,
        chart,
        gantt,
    }
    export class Web extends SP.SecurableObject {
        get_allowDesignerForCurrentUser(): boolean;
        get_allowMasterPageEditingForCurrentUser(): boolean;
        get_allowRevertFromTemplateForCurrentUser(): boolean;
        get_allowRssFeeds(): boolean;
        get_allProperties(): SP.PropertyValues;
        get_appInstanceId(): SP.Guid;
        get_associatedMemberGroup(): SP.Group;
        set_associatedMemberGroup(value: SP.Group): void;
        get_associatedOwnerGroup(): SP.Group;
        set_associatedOwnerGroup(value: SP.Group): void;
        get_associatedVisitorGroup(): SP.Group;
        set_associatedVisitorGroup(value: SP.Group): void;
        get_availableContentTypes(): SP.ContentTypeCollection;
        get_availableFields(): SP.FieldCollection;
        get_configuration(): number;
        get_contentTypes(): SP.ContentTypeCollection;
        get_created(): Date;
        get_currentUser(): SP.User;
        get_customMasterUrl(): string;
        set_customMasterUrl(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_documentLibraryCalloutOfficeWebAppPreviewersDisabled(): boolean;
        get_effectiveBasePermissions(): SP.BasePermissions;
        get_enableMinimalDownload(): boolean;
        set_enableMinimalDownload(value: boolean): void;
        get_eventReceivers(): SP.EventReceiverDefinitionCollection;
        get_features(): SP.FeatureCollection;
        get_fields(): SP.FieldCollection;
        get_folders(): SP.FolderCollection;
        get_id(): SP.Guid;
        get_language(): number;
        get_lastItemModifiedDate(): Date;
        get_lists(): SP.ListCollection;
        get_listTemplates(): SP.ListTemplateCollection;
        get_masterUrl(): string;
        set_masterUrl(value: string): void;
        get_navigation(): SP.Navigation;
        get_parentWeb(): SP.WebInformation;
        get_pushNotificationSubscribers(): SP.PushNotificationSubscriberCollection;
        get_quickLaunchEnabled(): boolean;
        set_quickLaunchEnabled(value: boolean): void;
        get_recycleBin(): SP.RecycleBinItemCollection;
        get_recycleBinEnabled(): boolean;
        get_regionalSettings(): SP.RegionalSettings;
        get_roleDefinitions(): SP.RoleDefinitionCollection;
        get_rootFolder(): SP.Folder;
        get_saveSiteAsTemplateEnabled(): boolean;
        set_saveSiteAsTemplateEnabled(value: boolean): void;
        get_serverRelativeUrl(): string;
        set_serverRelativeUrl(value: string): void;
        get_showUrlStructureForCurrentUser(): boolean;
        get_siteGroups(): SP.GroupCollection;
        get_siteUserInfoList(): SP.List;
        get_siteUsers(): SP.UserCollection;
        get_supportedUILanguageIds(): number[];
        get_syndicationEnabled(): boolean;
        set_syndicationEnabled(value: boolean): void;
        get_themeInfo(): SP.ThemeInfo;
        get_title(): string;
        set_title(value: string): void;
        get_treeViewEnabled(): boolean;
        set_treeViewEnabled(value: boolean): void;
        get_uIVersion(): number;
        set_uIVersion(value: number): void;
        get_uIVersionConfigurationEnabled(): boolean;
        set_uIVersionConfigurationEnabled(value: boolean): void;
        get_url(): string;
        get_userCustomActions(): SP.UserCustomActionCollection;
        get_webs(): SP.WebCollection;
        get_webTemplate(): string;
        get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
        get_workflowTemplates(): SP.Workflow.WorkflowTemplateCollection;
        doesUserHavePermissions(permissionMask: SP.BasePermissions): SP.BooleanResult;
        getUserEffectivePermissions(userName: string): SP.BasePermissions;
        mapToIcon(fileName: string, progId: string, size: SP.Utilities.IconSize): SP.StringResult;
        registerPushNotificationSubscriber(deviceAppInstanceId: SP.Guid, serviceToken: string): SP.PushNotificationSubscriber;
        unregisterPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): void;
        getPushNotificationSubscribersByArgs(customArgs: string): SP.PushNotificationSubscriberCollection;
        getPushNotificationSubscribersByUser(userName: string): SP.PushNotificationSubscriberCollection;
        doesPushNotificationSubscriberExist(deviceAppInstanceId: SP.Guid): SP.BooleanResult;
        getPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): SP.PushNotificationSubscriber;
        getUserById(userId: number): SP.User;
        getAvailableWebTemplates(lcid: number, doIncludeCrossLanguage: boolean): SP.WebTemplateCollection;
        getCatalog(typeCatalog: number): SP.List;
        getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
        applyWebTemplate(webTemplate: string): void;
        deleteObject(): void;
        update(): void;
        getFileByServerRelativeUrl(serverRelativeUrl: string): SP.File;
        getFolderByServerRelativeUrl(serverRelativeUrl: string): SP.Folder;
        getEntity(namespace: string, name: string): SP.BusinessData.Entity;
        getAppBdcCatalogForAppInstance(appInstanceId: SP.Guid): SP.BusinessData.AppBdcCatalog;
        getAppBdcCatalog(): SP.BusinessData.AppBdcCatalog;
        getSubwebsForCurrentUser(query: SP.SubwebQuery): SP.WebCollection;
        getAppInstanceById(appInstanceId: SP.Guid): SP.AppInstance;
        getAppInstancesByProductId(productId: SP.Guid): SP.ClientObjectList<SP.AppInstance>;
        loadAndInstallAppInSpecifiedLocale(appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number): SP.AppInstance;
        loadApp(appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number): SP.AppInstance;
        loadAndInstallApp(appPackageStream: SP.Base64EncodedByteArray): SP.AppInstance;
        ensureUser(logonName: string): SP.User;
        applyTheme(colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean): void;

        /** Available after March 2015 CU for SharePoint 2013*/
        getList(url: string): List;
    }
    export class WebCollection extends SP.ClientObjectCollection<Web> {
        itemAt(index: number): SP.Web;
        get_item(index: number): SP.Web;
        add(parameters: SP.WebCreationInformation): SP.Web;
    }
    export class WebCreationInformation extends SP.ClientValueObject {
        get_description(): string;
        set_description(value: string): void;
        get_language(): number;
        set_language(value: number): void;
        get_title(): string;
        set_title(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_useSamePermissionsAsParentSite(): boolean;
        set_useSamePermissionsAsParentSite(value: boolean): void;
        get_webTemplate(): string;
        set_webTemplate(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebInformation extends SP.ClientObject {
        get_configuration(): number;
        get_created(): Date;
        get_description(): string;
        get_id(): SP.Guid;
        get_language(): number;
        get_lastItemModifiedDate(): Date;
        get_serverRelativeUrl(): string;
        get_title(): string;
        get_webTemplate(): string;
        get_webTemplateId(): number;
    }
    export class WebProxy {
        static invoke(context: SP.ClientRuntimeContext, requestInfo: SP.WebRequestInfo): SP.WebResponseInfo;
    }
    export class WebRequestInfo extends SP.ClientValueObject {
        get_body(): string;
        set_body(value: string): void;
        get_headers(): any;
        set_headers(value: any): void;
        get_method(): string;
        set_method(value: string): void;
        get_url(): string;
        set_url(value: string): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebResponseInfo extends SP.ClientValueObject {
        get_body(): string;
        set_body(value: string): void;
        get_headers(): any;
        set_headers(value: any): void;
        get_statusCode(): number;
        set_statusCode(value: number): void;
        get_typeId(): string;
        writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
        constructor();
    }
    export class WebTemplate extends SP.ClientObject {
        get_description(): string;
        get_displayCategory(): string;
        get_id(): number;
        get_imageUrl(): string;
        get_isHidden(): boolean;
        get_isRootWebOnly(): boolean;
        get_isSubWebOnly(): boolean;
        get_lcid(): number;
        get_name(): string;
        get_title(): string;
    }
    export class WebTemplateCollection extends SP.ClientObjectCollection<WebTemplate> {
        itemAt(index: number): SP.WebTemplate;
        get_item(index: number): SP.WebTemplate;
        getByName(name: string): SP.WebTemplate;
    }

    export module Application {
        export module UI {
            export interface DefaultFormsInformationRequestor {
                onDefaultFormsInformationRetrieveSuccess(defaultForms: SP.Application.UI.DefaultFormsInformation): void;
                onDefaultFormsInformationRetrieveFailure(): void;
            }
            export class FormsInfo {
                ContentTypeName: string;
                NewFormUrl: string;
                DisplayFormUrl: string;
                EditFormUrl: string;
                constructor();
            }
            export class DefaultFormsInformation {
                DefaultForms: SP.Application.UI.FormsInfo;
                OtherForms: any;
                constructor();
            }
            export class DefaultFormsMenuBuilder {
                static getDefaultFormsInformation(requestor: SP.Application.UI.DefaultFormsInformationRequestor, listId: SP.Guid): void;
            }
            export class ViewSelectorMenuOptions {
                showRepairView: boolean;
                showMergeView: boolean;
                showEditView: boolean;
                showCreateView: boolean;
                showApproverView: boolean;
                listId: string;
                viewId: string;
                viewParameters: string;
                constructor();
            }
            export interface ViewInformationRequestor {
                onViewInformationReturned(viewGroups: SP.Application.UI.ViewSelectorGroups): void;
            }
            export class ViewSelectorGroups {
                ModeratedViews: any;
                PublicViews: any;
                PersonalViews: any;
                OtherViews: any;
                DefaultView: SP.Application.UI.ViewSelectorMenuItem;
                ViewCreation: any;
                constructor();
            }
            export class ViewSelectorMenuItem {
                Text: string;
                ActionScriptText: string;
                NavigateUrl: string;
                ImageSourceUrl: string;
                Description: string;
                Id: string;
                Sequence: number;
                ItemType: string;
                GroupId: number;
                constructor();
            }
            export class ViewSelectorSubMenu {
                Text: string;
                ImageSourceUrl: string;
                SubMenuItems: any;
                constructor();
            }
            export class ViewSelectorMenuBuilder {
                static get_filterMenuItemsCallback(): (menuItems: any) => any;
                static set_filterMenuItemsCallback(value: (menuItems: any) => any): void;
                static showMenu(elem: HTMLElement, options: SP.Application.UI.ViewSelectorMenuOptions): void;
                static getViewInformation(requestor: SP.Application.UI.ViewInformationRequestor, options: SP.Application.UI.ViewSelectorMenuOptions): void;
            }
            export class MoreColorsPicker extends Sys.UI.Control {
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                get_colorValue(): string;
                set_colorValue(value: string): void;
            }
            export class MoreColorsPage extends Sys.UI.Control {
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                get_moreColorsPicker(): SP.Application.UI.MoreColorsPicker;
                set_moreColorsPicker(value: SP.Application.UI.MoreColorsPicker): void;
            }
            export class ThemeWebPage extends Sys.UI.Control {
                add_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
                remove_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
                constructor(e: HTMLElement);
                initialize(): void;
                dispose(): void;
                onThemeSelectionChanged(evt: Sys.UI.DomEvent): void;
                updateThemeDisplay(): void;
                get_thmxThemes(): any;
                set_thmxThemes(value: any): void;
            }
            export class WikiPageNameInPlaceEditor {
                constructor(ownerDoc: any, displayElemId: string, editElemId: string, editTextBoxId: string);
                editingPageCallback(): void;
                savingPageCallback(): void;
            }
        }
    }


    export module Analytics {
        export class AnalyticsUsageEntry extends SP.ClientObject {
            static logAnalyticsEvent(context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string): void;
            static logAnalyticsEvent2(context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string): void;
            static logAnalyticsAppEvent(context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string): void;
            static logAnalyticsAppEvent2(context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string): void;
        }
        export enum EventTypeId {
            none,
            first,
            view,
            recommendationView,
            recommendationClick,
            last,
        }
    }

    export module SiteHealth {
        export class SiteHealthResult extends SP.ClientValueObject {
            get_messageAsText(): string;
            get_ruleHelpLink(): string;
            get_ruleId(): SP.Guid;
            get_ruleIsRepairable(): boolean;
            get_ruleName(): string;
            get_status(): SP.SiteHealth.SiteHealthStatusType;
            set_status(value: SP.SiteHealth.SiteHealthStatusType): void;
            get_timeStamp(): Date;
            set_timeStamp(value: Date): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum SiteHealthStatusType {
            passed,
            failedWarning,
            failedError,
        }
        export class SiteHealthSummary extends SP.ClientObject {
            get_failedErrorCount(): number;
            get_failedWarningCount(): number;
            get_passedCount(): number;
            get_results(): SP.SiteHealth.SiteHealthResult[];
        }
    }

}




declare namespace Microsoft.SharePoint.Client.Search {
    namespace Query {

        /**Contains information common to all types of search queries.*/
        export class Query extends SP.ClientObject {
            get_blockDedupeMode: () => number;
            set_blockDedupeMode: (value: number) => void;

            get_bypassResultTypes: () => boolean;
            set_bypassResultTypes: (value: boolean) => void;

            get_clientType: () => string;
            set_clientType: (value: string) => void;

            get_culture: () => number;
            set_culture: (value: number) => void;

            get_desiredSnippetLength: () => number;
            set_desiredSnippetLength: (value: number) => void;

            get_enableInterleaving: () => boolean;
            set_enableInterleaving: (value: boolean) => void;

            get_enableNicknames: () => boolean;
            set_enableNicknames: (value: boolean) => void;

            get_enableOrderingHitHighlightedProperty: () => boolean;
            set_enableOrderingHitHighlightedProperty: (value: boolean) => void;

            get_enablePhonetic: () => boolean;
            set_enablePhonetic: (value: boolean) => void;

            get_enableQueryRules: () => boolean;
            set_enableQueryRules: (value: boolean) => void;

            get_enableStemming: () => boolean;
            set_enableStemming: (value: boolean) => void;

            get_generateBlockRankLog: () => boolean;
            set_generateBlockRankLog: (value: boolean) => void;

            get_hitHighlightedMultivaluePropertyLimit: () => number;
            set_hitHighlightedMultivaluePropertyLimit: (value: number) => void;

            get_hitHighlightedProperties: () => StringCollection;

            get_ignoreSafeQueryPropertiesTemplateUrl: () => boolean;
            set_ignoreSafeQueryPropertiesTemplateUrl: (value: boolean) => void;

            get_impressionID: () => string;
            set_impressionID: (value: string) => void;

            get_maxSnippetLength: () => number;
            set_maxSnippetLength: (value: number) => void;

            get_personalizationData: () => QueryPersonalizationData;
            set_personalizationData: (value: QueryPersonalizationData) => void;

            get_processBestBets: () => boolean;
            set_processBestBets: (value: boolean) => void;

            get_processPersonalFavorites: () => boolean;
            set_processPersonalFavorites: (value: boolean) => void;

            get_queryTag: () => string;
            set_queryTag: (value: string) => void;

            get_queryTemplate: () => string;
            set_queryTemplate: (value: string) => void;

            get_queryTemplateParameters: () => { [key: string]: boolean; };

            get_queryText: () => string;
            set_queryText: (value: string) => void;

            get_rankingModelId: () => string;
            set_rankingModelId: (value: string) => void;

            get_resultsUrl: () => string;
            set_resultsUrl: (value: string) => void;

            get_rowLimit: () => number;
            set_rowLimit: (value: number) => void;

            get_rowsPerPage: () => number;
            set_rowsPerPage: (value: number) => void;

            get_safeQueryPropertiesTemplateUrl: () => string;
            set_safeQueryPropertiesTemplateUrl: (value: string) => void;

            get_showPeopleNameSuggestions: () => boolean;
            set_showPeopleNameSuggestions: (value: boolean) => void;

            get_sourceId: () => SP.Guid;
            set_sourceId: (value: SP.Guid) => void;

            get_startRow: () => number;
            set_startRow: (value: number) => void;

            get_summaryLength: () => number;
            set_summaryLength: (value: number) => void;

            get_timeout: () => number;
            set_timeout: (value: number) => void;

            get_totalRowsExactMinimum: () => number;
            set_totalRowsExactMinimum: (value: number) => void;

            get_trimDuplicates: () => boolean;
            set_trimDuplicates: (value: boolean) => void;


            get_uiLanguage: () => number;
            set_uiLanguage: (value: number) => void;



            getQuerySuggestionsWithResults: (iNumberOfQuerySuggestions: number,
                iNumberOfResultSuggestions: number,
                fPreQuerySuggestions: boolean,
                fHitHighlighting: boolean,
                fCapitalizeFirstLetters: boolean,
                fPrefixMatchAllTerms: boolean) => QuerySuggestionResults;


        }

        /**Contains information about a keyword based search query.*/
        export class KeywordQuery extends Query {
            constructor(context: SP.ClientContext);

            get_collapseSpecification: () => string;
            set_collapseSpecification: (value: string) => void;

            get_enableSorting: () => boolean;
            set_enableSorting: (value: boolean) => void;

            get_hiddenConstraints: () => string;
            set_hiddenConstraints: (value: string) => void;

            get_properties: () => KeywordQueryProperties;

            get_refinementFilters: () => StringCollection;
            set_refinementFilters: (value: StringCollection) => void;

            get_refiners: () => string;
            set_refiners: (value: string) => void;

            get_reorderingRules: () => ReorderingRuleCollection;
            set_reorderingRules: (value: ReorderingRuleCollection) => void;

            /**Specifies the list of managed properties to be returned for each search result.*/
            get_selectProperties: () => StringCollection;

            get_sortList: () => SortCollection;

            get_trimDuplicatesIncludeId: () => number;
            set_trimDuplicatesIncludeId: (value: number) => void;
        }

        /**Executes queries against a search server.*/
        export class SearchExecutor extends SP.ClientObject {
            constructor(context: SP.ClientContext);

            /**Runs a query.*/
            executeQuery: (query: Query) => SP.JsonObjectResult;
            executeQueries: (queryIds: string[], queries: Query[], handleExceptions: boolean) => SP.JsonObjectResult;
            recordPageClick: (
                pageInfo: string,
                clickType: string,
                blockType: number,
                clickedResultId: string,
                subResultIndex: number,
                immediacySourceId: string,
                immediacyQueryString: string,
                immediacyTitle: string,
                immediacyUrl: string) => void;
            exportPopularQueries: (web: SP.Web, sourceId: SP.Guid) => SP.JsonObjectResult;
        }


        export class StringCollection extends SP.ClientObjectCollection<string> {
            constructor(context: SP.ClientContext);
            itemAt: (index: number) => string;
            get_item: (index: number) => string;
            get_childItemType: () => Object;
            add: (property: string) => void;
            clear: () => void;
        }

        export class QueryPersonalizationData extends SP.ClientObject {
            //It's really empty;
        }

        export class QuerySuggestionResults extends SP.ClientValueObject {
            get_peopleNames: () => string[];
            set_peopleNames: (value: string[]) => void;

            get_personalResults: () => PersonalResultSuggestion[];
            set_personalResults: (value: PersonalResultSuggestion[]) => void;

            get_queries: () => QuerySuggestionQuery[];
            set_queries: (value: QuerySuggestionQuery[]) => void;
        }

        export class PersonalResultSuggestion extends SP.ClientValueObject {
            get_highlightedTitle: () => string;
            set_highlightedTitle: (value: string) => void;

            get_isBestBet: () => boolean;
            set_isBestBet: (value: boolean) => void;

            get_title: () => string;
            set_title: (value: string) => void;

            get_url: () => string;
            set_url: (value: string) => void;
        }

        export class QuerySuggestionQuery extends SP.ClientValueObject {
            get_isPersonal: () => boolean;
            set_isPersonal: (value: boolean) => void;

            get_query: () => string;
            set_query: (value: string) => void;
        }

        export class KeywordQueryProperties extends SP.ClientObject {
            get_item: (key: string) => any;
            set_item: (key: string, value: any) => void;
            setQueryPropertyValue: (name: string) => QueryPropertyValue;
            getQueryPropertyValue: (name: string, value: QueryPropertyValue) => void;
        }

        export enum QueryPropertyValueType {
            none,
            stringType,
            int32TYpe,
            booleanType,
            stringArrayType,
            unSupportedType
        }

        export class QueryPropertyValue extends SP.ClientValueObject {
            get_boolVal: () => boolean;
            set_boolVal: (value: boolean) => boolean;

            get_intVal: () => number;
            set_intVal: (value: number) => number;
            get_queryPropertyValueTypeIndex: () => number;
            set_queryPropertyValueTypeIndex: (value: number) => void;
            get_strArray: () => string[];
            set_strArray: (value: string[]) => string[];
            get_strVal: () => string;
            set_strVal: (value: string) => string;
        }

        export class QueryUtility {
            static create: (name: string, val: any) => QueryPropertyValue;
            static getQueryPropertyValueType: (val: QueryPropertyValue) => QueryPropertyValueType;
            static queryPropertyValueToObject: (val: QueryPropertyValue) => any;
        }
        export class ReorderingRuleCollection extends SP.ClientObjectCollection<ReorderingRule> {
            itemAt: (index: number) => ReorderingRule;
            get_item: (index: number) => ReorderingRule;
            get_childItemType: () => Object;
            add: (property: ReorderingRule) => void;
            clear: () => void;
        }

        export enum ReorderingRuleMatchType {
            resultContainsKeyword,
            titleContainsKeyword,
            titleMatchesKeyword,
            urlStartsWith,
            urlExactlyMatches,
            contentTypeIs,
            fileExtensionMatches,
            resultHasTag,
            manualCondition
        }

        export class ReorderingRule extends SP.ClientValueObject {
            get_boost: () => number;
            set_boost: (value: number) => void;

            get_matchType: () => ReorderingRuleMatchType;
            set_matchType: (value: ReorderingRuleMatchType) => void;

            get_matchValue: () => string;
            set_matchValue: (value: string) => void;
        }

        export class SortCollection extends SP.ClientObjectCollection<Sort> {
            itemAt: (index: number) => Sort;
            get_item: (index: number) => Sort;
            get_childItemType: () => Object;
            add: (strProperty: string, sortDirection: SortDirection) => void;
            clear: () => void;
        }

        enum SortDirection {
            ascending,
            descending,
            fqlFormula
        }
        export class Sort extends SP.ClientValueObject {
            get_direction: () => SortDirection;
            set_direction: (value: SortDirection) => void;

            get_property: () => string;
            set_property: (value: string) => void;
        }


        export class ResultTableCollection extends SP.ClientValueObjectCollection<ResultTable> {
            get_item: (index: number) => ResultTable;

            get_elapsedTime: () => number;
            set_elapsedTime: (value: number) => void;

            get_properties: () => { [key: string]: any; };

            get_queryErrors: () => { [key: string]: WebControls.ControlMessage; };

            get_queryId: () => string;

            get_spellingSuggestion: () => string;

            get_triggeredRules: () => SP.Guid[];

            initPropertiesFromJson: (parentNode: any) => void;

        }

        export class ResultTable extends SP.ClientValueObject {
            get_groupTemplateId: () => string;

            get_itemTemplateId: () => string;

            get_properties: () => { [key: string]: any; };

            get_queryId: () => string;

            get_queryRuleId: () => string;

            get_resultRows: () => { [key: string]: any; }[];

            get_resultTitle: () => string;

            get_resultTitleUrl: () => string;

            get_rowCount: () => number;

            get_tableType: () => string;

            get_totalRows: () => number;

            get_totalRowsIncludingDuplicates: () => number;

            initPropertiesFromJson: (parentNode: any) => void;
        }

        export class RankingLabeling extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            getJudgementsForQuery: (query: string) => SP.JsonObjectResult;
            addJudgment: (userQuery: string, url: string, labelId: number) => void;
            normalizeResultUrl: (url: string) => SP.JsonObjectResult;
        }

        export class PopularQuery extends SP.ClientValueObject {
            get_clickCount: () => number;
            set_clickCount: (value: number) => void;

            get_LCID: () => number;
            set_LCID: (value: number) => void;

            get_queryCount: () => number;
            set_queryCount: (value: number) => void;

            get_queryText: () => string;
            set_queryText: (value: string) => void;
        }

        export class QueryPropertyNames {
            static blockDedupeMode: string; // 'BlockDedupeMode';
            static bypassResultTypes: string; // 'BypassResultTypes';
            static clientType: string; // 'ClientType';
            static culture: string; // 'Culture';
            static desiredSnippetLength: string; // 'DesiredSnippetLength';
            static enableInterleaving: string; // 'EnableInterleaving';
            static enableNicknames: string; // 'EnableNicknames';
            static enableOrderingHitHighlightedProperty: string; // 'EnableOrderingHitHighlightedProperty';
            static enablePhonetic: string; // 'EnablePhonetic';
            static enableQueryRules: string; // 'EnableQueryRules';
            static enableStemming: string; // 'EnableStemming';
            static generateBlockRankLog: string; // 'GenerateBlockRankLog';
            static hitHighlightedMultivaluePropertyLimit: string; // 'HitHighlightedMultivaluePropertyLimit';
            static ignoreSafeQueryPropertiesTemplateUrl: string; // 'IgnoreSafeQueryPropertiesTemplateUrl';
            static impressionID: string; // 'ImpressionID';
            static maxSnippetLength: string; // 'MaxSnippetLength';
            static processBestBets: string; // 'ProcessBestBets';
            static processPersonalFavorites: string; // 'ProcessPersonalFavorites';
            static queryTag: string; // 'QueryTag';
            static queryTemplate: string; // 'QueryTemplate';
            static queryTemplateParameters: string; // 'QueryTemplateParameters';
            static queryText: string; // 'QueryText';
            static rankingModelId: string; // 'RankingModelId';
            static resultsUrl: string; // 'ResultsUrl';
            static rowLimit: string; // 'RowLimit';
            static rowsPerPage: string; // 'RowsPerPage';
            static safeQueryPropertiesTemplateUrl: string; // 'SafeQueryPropertiesTemplateUrl';
            static showPeopleNameSuggestions: string; // 'ShowPeopleNameSuggestions';
            static sourceId: string; // 'SourceId';
            static startRow: string; // 'StartRow';
            static summaryLength: string; // 'SummaryLength';
            static timeout: string; // 'Timeout';
            static totalRowsExactMinimum: string; // 'TotalRowsExactMinimum';
            static trimDuplicates: string; // 'TrimDuplicates';
            static uiLanguage: string; // 'UILanguage';
        }

        export class QueryObjectPropertyNames {
            static hitHighlightedProperties: string; // = 'HitHighlightedProperties';
            static personalizationData: string; // = 'PersonalizationData';
        }

        export class KeywordQueryPropertyNames {
            static collapseSpecification: string; // 'CollapseSpecification';
            static enableSorting: string; // 'EnableSorting';
            static hiddenConstraints: string; // 'HiddenConstraints';
            static refiners: string; // 'Refiners';
            static trimDuplicatesIncludeId: string; // 'TrimDuplicatesIncludeId';
        }

        export class KeywordQueryObjectPropertyNames {
            static properties: string; // 'Properties';
            static refinementFilters: string; // 'RefinementFilters';
            static reorderingRules: string; // 'ReorderingRules';
            static selectProperties: string; // 'SelectProperties';
            static sortList: string; // 'SortList';
        }
    }

    namespace WebControls {
        export class ControlMessage extends SP.ClientValueObject {
            get_code: () => number;

            get_correlationID: () => string;

            get_encodeDetails: () => boolean;

            get_header: () => string;

            get_level: () => MessageLevel;

            get_messageDetails: () => string;

            get_messageDetailsForViewers: () => string;

            get_serverTypeId: () => string;

            get_showForViewerUsers: () => boolean;

            get_showInEditModeOnly: () => boolean;

            get_stackTrace: () => string;

            get_type: () => string;
        }

        export enum MessageLevel {
            information,
            warning,
            error
        }
    }

    namespace Administration {
        export class DocumentCrawlLog extends SP.ClientObject {
            constructor(context: SP.ClientContext, site: SP.Site);
            getCrawledUrls: (getCountOnly: boolean,
                maxRows: { High: number; Low: number; },
                queryString: string,
                isLike: boolean,
                contentSourceID: number,
                errorLevel: number,
                errorID: number,
                startDateTime: Date,
                endDateTime: Date) => SP.JsonObjectResult;
        }

        export class SearchObjectOwner extends SP.ClientObject {
            constructor(context: SP.ClientContext, lowestCurrentLevelToUse: SearchObjectLevel);
        }

        export enum SearchObjectLevel {
            spWeb,
            spSite,
            spSiteSubscription,
            ssa
        }
    }

    namespace Portability {
        export class SearchConfigurationPortability extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            get_importWarnings: () => string;

            exportSearchConfiguration: (owningScope: Administration.SearchObjectOwner) => SP.JsonObjectResult;

            importSearchConfiguration: (owningScope: Administration.SearchObjectOwner, searchConfiguration: string) => void;

            deleteSearchConfiguration: (owningScope: Administration.SearchObjectOwner, searchConfiguration: string) => void;
        }

        export class SearchConfigurationPortabilityPropertyNames {
            static importWarnings: string;// = 'ImportWarnings'
        }
    }

    /**Located in sp.search.apps.js*/
    namespace Analytics {
        export class AnalyticsItemData extends SP.ClientObject {
            get_lastProcessingTime: () => Date;

            get_totalHits: () => number;

            get_totalUniqueUsers: () => number;

            getHitCountForDay: (day: Date) => number;

            getUniqueUsersCountForDay: (day: Date) => number;

            getHitCountForMonth: (day: Date) => number;

            getUniqueUsersCountForMonth: (day: Date) => number;
        }

        export class UsageAnalytics extends SP.ClientObject {
            getAnalyticsItemData: (eventType: number, listItem: SP.ListItem) => AnalyticsItemData;

            getAnalyticsItemDataForApplicationEventType: (appEventType: SP.Guid, listItem: SP.ListItem) => AnalyticsItemData;

            deleteStandardEventUsageData: (eventType: number) => void;

            deleteCustomEventUsageData: (appEventTypeId: SP.Guid) => void;
        }



    }
}

declare namespace SP {
    export module BusinessData {
        export class AppBdcCatalog extends SP.ClientObject {
            getEntity(namespace: string, name: string): SP.BusinessData.Entity;
            getLobSystemProperty(lobSystemName: string, propertyName: string): SP.StringResult;
            setLobSystemProperty(lobSystemName: string, propertyName: string, propertyValue: string): void;
            getLobSystemInstanceProperty(lobSystemName: string, lobSystemInstanceName: string, propertyName: string): SP.StringResult;
            setLobSystemInstanceProperty(lobSystemName: string, lobSystemInstanceName: string, propertyName: string, propertyValue: string): void;
            getConnectionId(lobSystemName: string, lobSystemInstanceName: string): SP.StringResult;
            setConnectionId(lobSystemName: string, lobSystemInstanceName: string, connectionId: string): void;
            getPermissibleConnections(): string[];
        }
        export class Entity extends SP.ClientObject {
            get_estimatedInstanceCount(): number;
            get_name(): string;
            get_namespace(): string;
            getIdentifiers(): SP.BusinessData.Collections.EntityIdentifierCollection;
            getIdentifierCount(): SP.IntResult;
            getLobSystem(): SP.BusinessData.LobSystem;
            getCreatorView(methodInstanceName: string): SP.BusinessData.EntityView;
            getUpdaterView(updaterName: string): SP.BusinessData.EntityView;
            getFinderView(methodInstanceName: string): SP.BusinessData.EntityView;
            getSpecificFinderView(specificFinderName: string): SP.BusinessData.EntityView;
            getDefaultSpecificFinderView(): SP.BusinessData.EntityView;
            findSpecificDefault(identity: SP.BusinessData.Runtime.EntityIdentity, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecific(identity: SP.BusinessData.Runtime.EntityIdentity, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecificDefaultByBdcId(bdcIdentity: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findSpecificByBdcId(bdcIdentity: string, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityInstance;
            findFiltered(filterList: SP.BusinessData.Collections.FilterCollection, nameOfFinder: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Collections.EntityInstanceCollection;
            findAssociated(entityInstance: SP.BusinessData.Runtime.EntityInstance, associationName: string, filterList: SP.BusinessData.Collections.FilterCollection, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Collections.EntityInstanceCollection;
            getFilters(methodInstanceName: string): SP.BusinessData.Collections.FilterCollection;
            execute(methodInstanceName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance, inputParams: any[]): SP.BusinessData.MethodExecutionResult;
            getAssociationView(associationName: string): SP.BusinessData.EntityView;
            create(fieldValues: SP.BusinessData.Runtime.EntityFieldValueDictionary, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.EntityIdentity;
            subscribe(eventType: SP.BusinessData.Runtime.EntityEventType, notificationCallback: SP.BusinessData.Runtime.NotificationCallback, onBehalfOfUser: string, subscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): SP.BusinessData.Runtime.Subscription;
            unsubscribe(subscription: SP.BusinessData.Runtime.Subscription, onBehalfOfUser: string, unsubscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance): void;
        }
        export class EntityField extends SP.ClientObject {
            get_containsLocalizedDisplayName(): boolean;
            get_defaultDisplayName(): string;
            get_localizedDisplayName(): string;
            get_name(): string;
        }
        export class EntityIdentifier extends SP.ClientObject {
            get_identifierType(): string;
            get_name(): string;
            getDefaultDisplayName(): SP.StringResult;
            containsLocalizedDisplayName(): SP.BooleanResult;
            getLocalizedDisplayName(): SP.StringResult;
        }
        export class EntityView extends SP.ClientObject {
            get_fields(): SP.BusinessData.Collections.EntityFieldCollection;
            get_name(): string;
            get_relatedSpecificFinderName(): string;
            getDefaultValues(): SP.BusinessData.Runtime.EntityFieldValueDictionary;
            getXmlSchema(): SP.StringResult;
            getTypeDescriptor(fieldDotNotation: string): SP.BusinessData.TypeDescriptor;
            getType(fieldDotNotation: string): SP.StringResult;
        }
        export class Filter extends SP.ClientObject {
            get_defaultDisplayName(): string;
            get_filterField(): string;
            get_filterType(): string;
            get_localizedDisplayName(): string;
            get_name(): string;
            get_valueCount(): number;
        }
        export class LobSystem extends SP.ClientObject {
            get_name(): string;
            getLobSystemInstances(): SP.BusinessData.Collections.LobSystemInstanceCollection;
        }
        export class LobSystemInstance extends SP.ClientObject {
            get_name(): string;
        }
        export class MethodExecutionResult extends SP.ClientObject {
            get_returnParameterCollection(): SP.BusinessData.ReturnParameterCollection;
        }
        export class ReturnParameterCollection extends SP.ClientObjectCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary> {
            itemAt(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary;
            get_item(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary;
        }
        export class TypeDescriptor extends SP.ClientObject {
            get_containsReadOnly(): boolean;
            get_isCollection(): boolean;
            get_isReadOnly(): boolean;
            get_name(): string;
            get_typeName(): string;
            containsLocalizedDisplayName(): SP.BooleanResult;
            getLocalizedDisplayName(): SP.StringResult;
            getDefaultDisplayName(): SP.StringResult;
            isRoot(): SP.BooleanResult;
            isLeaf(): SP.BooleanResult;
            getChildTypeDescriptors(): SP.BusinessData.Collections.TypeDescriptorCollection;
            getParentTypeDescriptor(): SP.BusinessData.TypeDescriptor;
        }
        export module Collections {
            export class EntityFieldCollection extends SP.ClientObjectCollection<SP.BusinessData.EntityField> {
                itemAt(index: number): SP.BusinessData.EntityField;
                get_item(index: number): SP.BusinessData.EntityField;
            }
            export class EntityIdentifierCollection extends SP.ClientObjectCollection<SP.BusinessData.EntityIdentifier> {
                itemAt(index: number): SP.BusinessData.EntityIdentifier;
                get_item(index: number): SP.BusinessData.EntityIdentifier;
            }
            export class EntityInstanceCollection extends SP.ClientObjectCollection<SP.BusinessData.Runtime.EntityInstance> {
                itemAt(index: number): SP.BusinessData.Runtime.EntityInstance;
                get_item(index: number): SP.BusinessData.Runtime.EntityInstance;
            }
            export class FilterCollection extends SP.ClientObjectCollection<SP.BusinessData.Filter> {
                itemAt(index: number): SP.BusinessData.Filter;
                get_item(index: number): SP.BusinessData.Filter;
                setFilterValue(inputFilterName: string, valueIndex: number, value: any): void;
            }
            export class LobSystemInstanceCollection extends SP.ClientObjectCollection<SP.BusinessData.LobSystemInstance> {
                itemAt(index: number): SP.BusinessData.LobSystemInstance;
                get_item(index: number): SP.BusinessData.LobSystemInstance;
            }
            export class TypeDescriptorCollection extends SP.ClientObjectCollection<SP.BusinessData.TypeDescriptor> {
                itemAt(index: number): SP.BusinessData.TypeDescriptor;
                get_item(index: number): SP.BusinessData.TypeDescriptor;
            }
        }

        export module Infrastructure {
            export class ExternalSubscriptionStore extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, web: SP.Web);
                static newObject(context: SP.ClientRuntimeContext, web: SP.Web): SP.BusinessData.Infrastructure.ExternalSubscriptionStore;
                indexStore(): void;
            }
        }

        export module Runtime {
            export enum EntityEventType {
                none,
                itemAdded,
                itemUpdated,
                itemDeleted,
            }
            export class EntityFieldValueDictionary extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                set_item(fieldName: string, value: any): void;
                refreshLoad(): void;
                fromXml(xml: string): void;
                toXml(): SP.StringResult;
                createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
                createCollectionInstance(fieldDotNotation: string, size: number): void;
                getCollectionSize(fieldDotNotation: string): SP.IntResult;
            }
            export class EntityIdentity extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                constructor(context: SP.ClientRuntimeContext, identifierValues: any[]);
                get_identifierCount(): number;
                static newObject(context: SP.ClientRuntimeContext, identifierValues: any[]): SP.BusinessData.Runtime.EntityIdentity;
                refreshLoad(): void;
            }
            export class EntityInstance extends SP.ClientObject {
                get_fieldValues(): any;
                get_item(fieldName: string): any;
                set_item(fieldName: string, value: any): void;
                refreshLoad(): void;
                createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
                createCollectionInstance(fieldDotNotation: string, size: number): void;
                getIdentity(): SP.BusinessData.Runtime.EntityIdentity;
                deleteObject(): void;
                update(): void;
                fromXml(xml: string): void;
                toXml(): SP.StringResult;
            }
            export class NotificationCallback extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, notificationEndpoint: string);
                get_notificationContext(): string;
                set_notificationContext(value: string): void;
                get_notificationEndpoint(): string;
                get_notificationForwarderType(): string;
                set_notificationForwarderType(value: string): void;
                static newObject(context: SP.ClientRuntimeContext, notificationEndpoint: string): SP.BusinessData.Runtime.NotificationCallback;
            }
            export class Subscription extends SP.ClientObject {
                constructor(context: SP.ClientRuntimeContext, id: any, hash: string);
                get_hash(): string;
                get_iD(): any;
                static newObject(context: SP.ClientRuntimeContext, id: any, hash: string): SP.BusinessData.Runtime.Subscription;
            }
        }
    }
}

declare namespace SP {
    export module Sharing {
        export class DocumentSharingManager {
            static getRoleDefinition(context: SP.ClientRuntimeContext, role: SP.Sharing.Role): SP.RoleDefinition;
            static isDocumentSharingEnabled(context: SP.ClientRuntimeContext, list: SP.List): SP.BooleanResult;
            static updateDocumentSharingInfo(context: SP.ClientRuntimeContext, resourceAddress: string, userRoleAssignments: SP.Sharing.UserRoleAssignment[], validateExistingPermissions: boolean, additiveMode: boolean, sendServerManagedNotification: boolean, customMessage: string, includeAnonymousLinksInNotification: boolean): SP.Sharing.UserSharingResult[];
        }
        export enum Role {
            none,
            view,
            edit,
            owner,
        }
        export class UserRoleAssignment extends SP.ClientValueObject {
            get_role(): SP.Sharing.Role;
            set_role(value: SP.Sharing.Role): void;
            get_userId(): string;
            set_userId(value: string): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class UserSharingResult extends SP.ClientValueObject {
            get_allowedRoles(): SP.Sharing.Role[];
            get_currentRole(): SP.Sharing.Role;
            get_isUserKnown(): boolean;
            get_message(): string;
            get_status(): boolean;
            get_user(): string;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
    }

}

declare namespace SP {

    export module Social {
        /** Identifies an actor as a user, document, site, or tag. */
        export enum SocialActorType {
            user,
            document,
            site,
            tag
        }
        /** Specifies one or more actor types in a query to the server. */
        export enum SocialActorTypes {
            none,
            users,
            documents,
            sites,
            tags,
            /** The set excludes documents and sites that do not have feeds. */
            excludeContentWithoutFeeds,
            all
        }
        /** Specifies whether the action is to navigate to the attachment or to perform some action dependent on the context in which the attachment is presented to the user. */
        export enum SocialAttachmentActionKind {
            /** This value specifies that the action is to navigate to the attachment. */
            navigate,
            /** This value specifies that the action is dependent on the context that the attachment is displayed to the user. */
            adHocAction
        }

        export enum SocialAttachmentKind {
            image,
            video,
            document
        }

        /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
        export enum SocialDataItemType {
            user,
            document,
            site,
            tag,
            link
        }

        /** Specifies whether the overlay is a link or one or more actors. */
        export enum SocialDataOverlayType {
            link,
            actors
        }

        /** Specifies whether the sort order is by creation time or modification time. */
        export enum SocialFeedSortOrder {
            byModifiedTime,
            byCreatedTime
        }

        /** Identifies the kind of post to be retrieved.  */
        export enum SocialFeedType {
            personal,
            news,
            timeline,
            likes,
            everyone
        }

        // For some reasons this enum doesn't exist
        //export enum SocialFollowResult {
        //    ok = 0,
        //    alreadyFollowing = 1,
        //    limitReached = 2,
        //    internalError = 3
        //}

        /** Provides information about the feed.
            This type provides information about whether the feed on the server contains additional threads that were not returned. */
        export enum SocialFeedAttributes {
            none,
            moreThreadsAvailable
        }

        /** Specifies attributes of the post, such as whether the current user can like or delete the post. */
        export enum SocialPostAttributes {
            none,
            canLike,
            canDelete,
            useAuthorImage,
            useSmallImage,
            canFollowUp
        }

        /** Defines the type of item being specified in the SocialPostDefinitionDataItem.
            This type is only available in server-to-server calls. */
        export enum SocialPostDefinitionDataItemType {
            text,
            user,
            document,
            site,
            tag,
            link
        }

        export enum SocialPostType {
            root,
            reply
        }

        /** Specifies a status or error code. */
        export enum SocialStatusCode {
            OK,
            /** This value specifies that an invalid request was encountered. */
            invalidRequest,
            /** This value specifies that access was denied to the current user. */
            accessDenied,
            itemNotFound,
            /** This value specifies that an invalid operation was attempted. */
            invalidOperation,
            /** This value specifies that the item was not changed by the operation. */
            itemNotModified,
            internalError,
            /** This value specifies that there was an error reading the cache. */
            cacheReadError,
            /** This value specifies that there was an error updating the cache. */
            cacheUpdateError,
            personalSiteNotFound,
            failedToCreatePersonalSite,
            notAuthorizedToCreatePersonalSite,
            cannotCreatePersonalSite,
            /** This value specifies that a server limit was reached. */
            limitReached,
            /** This value specifies that the operation failed because there was an error handling an attachment. */
            attachmentError,
            /** This value specifies that the operation completed with recoverable errors and that the returned data is incomplete. */
            partialData,
            /** This value specifies that the operation failed because a required server feature was disabled by administrative action. */
            featureDisabled
        }

        /** Specifies properties of the thread. */
        export enum SocialThreadAttributes {
            none,
            isDigest,
            canReply,
            canLock,
            isLocked,
            replyLimitReached
        }

        export enum SocialThreadType {
            normal,
            likeReference,
            replyReference,
            mentionReference,
            tagReference
        }

        /** Contains information about an actor retrieved from server. An actor is a user, document, site, or tag. */
        export class SocialActor extends SP.ClientValueObject {
            /** The AccountName property returns the user account name.
                This property is only available for social actors of type "user". */
            get_accountName(): string;
            /** Identifies whether the actor is a user, document, site, or tag. */
            get_actorType(): SocialActorType;
            /** Specifies whether the actor can be followed by the current user. */
            get_canFollow(): boolean;
            /** Returns the URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            get_contentUri(): string;
            get_emailAddress(): string;
            /** Returns the URI of the user's followed content folder.
                This property is only available for social actors of type "user". */
            get_followedContentUri(): string;
            /** Returns the actor's unique identifier. */
            get_id(): string;
            /** Returns the URI of the image representing the actor.
                This property is only available if actor is User, Document, or Site. */
            get_imageUri(): string;
            /** Returns true if the current user is following the actor; otherwise, it returns false. */
            get_isFollowed(): boolean;
            /** Returns the URI of the library containing the document.
                This property is only available for social actors of type "document". */
            get_libraryUri(): string;
            /** The Name property returns the actor's display name. */
            get_name(): string;
            /** Returns the URI of the user's personal site.
                This property is only available for social actors of type "user". */
            get_personalSiteUri(): string;
            /** Represents the status of retrieving the actor */
            get_status(): SocialStatusCode;
            /** The StatusText property returns the most recent post of the user.
                This property is only available for social actors of type "user". */
            get_statusText(): string;
            /** Returns the GUID of the tag.
                Only available for social actors of type "tag" */
            get_tagGuid(): string;
            /** Returns the user's title
                This property is only available for social actors of type "user". */
            get_title(): string;
            /** Returns the URI of the actor. */
            get_uri(): string;
        }

        /** Identifies an actor to the server. An actor can be a user, document, site, or tag. */
        export class SocialActorInfo extends SP.ClientValueObject {
            /** User account name.
                This property is only available for social actors of type "user". */
            get_accountName(): string;
            /** User account name.
                This property is only available for social actors of type "user". */
            set_accountName(value: string): string;
            /** Identifies whether the actor is a user, document, site, or tag. */
            get_actorType(): SocialActorType;
            /** Identifies whether the actor is a user, document, site, or tag. */
            set_actorType(value: SocialActorType): SocialActorType;
            /** URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            get_contentUri(): string;
            /** URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            set_contentUri(value: string): string;
            /** Actor's unique identifier. */
            get_id(): string;
            /** Actor's unique identifier. */
            set_id(value: string): string;
            /** GUID of the tag.
                Only available for social actors of type "tag" */
            get_tagGuid(): string;
            /** GUID of the tag.
                Only available for social actors of type "tag" */
            set_tagGuid(value: string): string;
        }

        /** Represents an image, document preview, or video preview attachment.  */
        export class SocialAttachment extends SP.ClientValueObject {
            /** Specifies the type of object that the attachment contains. */
            get_attachmentKind(): SocialAttachmentKind;
            /** Specifies the type of object that the attachment contains. */
            set_attachmentKind(value: SocialAttachmentKind): SocialAttachmentKind;
            /** Specifies the action to take when the user selects the attachment.
                This property is only present if the AttachmentKind is Video. */
            get_clickAction(): SocialAttachmentAction;
            /** Specifies the action to take when the user selects the attachment.
                This property is only present if the AttachmentKind is Video. */
            set_clickAction(value: SocialAttachmentAction): SocialAttachmentAction;
            /** Specifies the URI of the attachment content. */
            get_contentUri(): string;
            /** Specifies the URI of the attachment content. */
            set_contentUri(value: string): string;
            /** Provides a text description of the attachment. */
            get_description(): string;
            /** Provides a text description of the attachment. */
            set_description(value: string): string;
            /** Specifies the height of the attachment or of the attachment preview. */
            get_height(): number;
            /** Specifies the height of the attachment or of the attachment preview. */
            set_height(value: number): number;
            /** Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video. */
            get_length(): number;
            /** Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video. */
            set_length(value: number): number;
            /** Provides the attachment name. */
            get_name(): string;
            /** Provides the attachment name. */
            set_name(value: string): string;
            /** Specifies the URI of the attachment�s preview thumbnail.
                This property is only present if the AttachmentKind is Document or Video. */
            get_previewUri(): string;
            /** Specifies the URI of the attachment�s preview thumbnail.
                This property is only present if the AttachmentKind is Document or Video. */
            set_previewUri(value: string): string;
            /** Provides the attachment URI. */
            get_uri(): string;
            /** Provides the attachment URI. */
            set_uri(value: string): string;
            /** Specifies the width of the attachment or of the attachment preview. */
            get_width(): number;
            /** Specifies the width of the attachment or of the attachment preview. */
            set_width(value: number): number;
        }
        /** Specifies the user actions that are allowed for the attachment object. */
        export class SocialAttachmentAction extends SP.ClientValueObject {
            /** Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user. */
            get_actionKind(): SocialAttachmentActionKind;
            /** Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user. */
            set_actionKind(value: SocialAttachmentActionKind): SocialAttachmentActionKind;
            /** Specifies the URI associated with the action. */
            get_actionUri(): string;
            /** Specifies the URI associated with the action. */
            set_actionUri(value: string): string;
        }

        /** Defines a user, document, site, tag, or link to be inserted in a new post.
            The SocialPostCreationData class defines the content text that contains substitution strings.
            Each substitution string is replaced by a SocialDataItem value. */
        export class SocialDataItem extends SP.ClientValueObject {
            /** Identifies the user.  */
            get_accountName(): string;
            /** Identifies the user.  */
            set_accountName(value: string): string;
            /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
            get_itemType(): SocialDataItemType;
            /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
            set_itemType(value: SocialDataItemType): SocialDataItemType;
            /** Identifies the tag.  */
            get_tagGuid(): string;
            /** Identifies the tag.  */
            set_tagGuid(value: string): string;
            /** Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.  */
            get_text(): string;
            /** Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.  */
            set_text(value: string): string;
            /** Identifies the site, document, or link.  */
            get_uri(): string;
            /** Identifies the site, document, or link.  */
            set_uri(value: string): string;
        }

        /** Provides information about an overlay.
            An overlay is a substring in a post that represents a user, document, site, tag, or link.
            The SocialPost class contains an array of SocialDataOverlay objects.
            Each of the SocialDataOverlay objects specifies a link or one or more actors. */
        export class SocialDataOverlay extends SP.ClientValueObject {
            /** Specifies one or more actors as an array of integers where each integer specifies an index into the SocialThreadActors array.
                This property is only available if the get_overlayType() has a value of SocialDataOverlayType.actors. */
            get_actorIndexes(): number[];
            /** The Index property specifies the starting position of the overlay in the SocialPostText string  */
            get_index(): number;
            /** The Length property specifies the number of characters in the overlay.  */
            get_length(): number;
            /** The LinkUri property specifies the URI of the link.
                This property is only available if the get_overlayType() has a value of SocialDataOverlayType.link.  */
            get_linkUri(): string;
            /** Specifies whether the overlay is a link or one or more actors. */
            get_overlayType(): SocialDataOverlayType;
        }

        /** Specifies information about errors that the server has encountered. */
        export class SocialExceptionDetails extends SP.ClientValueObject {
            get_internalErrorCode(): number;
            get_internalMessage(): string;
            get_internalStackTrace(): string;
            /** Specifies a type name associated with the internal error if a type name is available. */
            get_internalTypeName(): string;
            get_status(): SocialStatusCode;
        }

        /** Specifies a feed, which contains an array of SocialThreads, each of which specifies a root SocialPost object and an array of response SocialPost objects. */
        export class SocialFeed extends SP.ClientValueObject {
            /** Specifies attributes of the returned feed.
                The attributes specify if the requested feed has additional threads that were not included in the returned thread. */
            get_attributes(): SocialFeedAttributes;
            /** Returns the date-time of the most recent post that was requested.
                The most recent post that was requested can be removed from the feed if the current user does not have access to it.
                Consequently, the feed does not always contain the post with the date specified in this property. */
            get_newestProcessed(): string;
            /** The OldestProcessed property returns the date-time of the oldest post that was requested.
                The oldest post that was requested can be removed from the feed if the current user does not have access to it.
                Consequently, the feed does not always contain the post with the date specified in this property */
            get_oldestProcessed(): string;
            /** Contains the social threads in the feed. */
            get_threads(): SocialThread[];
            /** Returns the number of mentions of the current user that have been added to the feed on the server since the time that the unread mention count was cleared for the current user. */
            get_unreadMentionCount(): number;
        }

        /** Provides access to social feeds.
            It provides methods to create posts, delete posts, read posts, and perform other operations on posts. */
        export class SocialFeedManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            /** Returns the current user */
            get_owner(): SocialActor;
            /** Specifies the URI of the personal site portal. */
            get_personalSitePortalUri(): string;
            /** Creates a post in the current user's newsfeed, in the specified user's feed, or in the specified thread.
                This method returns a new or a modified thread.
                @param targetId Optional, specifies the target of the post.
                                If this parameter is null, the post is created as a root post in the current user's feed.
                                If this parameter is set to a site URL or a site actor identification, the post is created as a root post in the specified site feed.
                                If this parameter is set to a thread identification, the post is created as a reply post in the specified thread.
                @param creationData Specifies the format and content of the post. */
            createPost(targetId: string, creationData: SocialPostCreationData): SocialThread;
            /** Deletes the specified post.
                This method returns a digest of the modified thread.
                If the entire thread is deleted, this method returns null.
                If the post being deleted is the root post of a thread, all reply posts are also deleted.
                @param postId   Specifies the post to be deleted.
                                Corresponds the value returned from SocialPost.get_id(). */
            deletePost(postId: string): SocialThread;
            /** Returns the set of users who have liked the specified post.
                @param postId   Specifies the post being queried for information about users that like the post.
                                Corresponds the value returned from SocialPost.get_id().*/
            getAllLikers(postId: string): SocialActor[];
            /** Returns a feed for the current user.
                The feed consists of an array of message threads.
                Each thread consists of a root post and an array of reply posts. */
            getFeed(type: SocialFeedType, options: SocialFeedOptions): SocialFeed;
            /** Returns the public feed for a user or for a site.
                The feed lists activity by the user and posts created by the server for that user.
                For example, the feed can include posts indicating the user's birthday or indicating that the user liked a post.
                @param actorId  Corresponds to the value returned by SocialActor.get_id().
                                If the actorId specifies the current user, this method returns the public feed for the current user. */
            getFeedFor(actorId: string, options: SocialFeedOptions): SocialFeed;
            /** Returns the root post and all reply posts in the thread. */
            getFullThread(threadId: string): SocialThread;
            /** Returns a feed containing mention reference threads from the current user's personal feed. */
            getMentions(clearUnreadMentions: boolean, options: SocialFeedOptions): SocialFeed;
            /** Returns the server's count of unread mentions of the current user.
                The server maintains a count of unread mentions in posts, but does not track which mentions have been read.
                When a new mention is stored on the server, it increments the unread mention for the user specified by the mention.
                The unread mention count is cleared by the GetMentions method. */
            getUnreadMentionCount(): SP.IntResult;
            /** Specifies that the current user likes the specified post.
                Returns a digest thread containing the specified post.
                A digest thread contains the root post and a selection of reply posts */
            likePost(postId: string): SocialThread;
            /** Specifies that the current user does not like the specified post.
                Returns a digest thread containing the specified post.  */
            unlikePost(postId: string): SocialThread;
            /** Prevents any user from adding a new reply post to the specified thread.
                Once a thread is locked, no new reply posts can be added until after the thread has been unlocked with the unlockThread method.
                This method returns a digest of the locked thread */
            lockThread(threadId: string): SocialThread;
            /** Allows users to add new reply posts to the specified thread. */
            unlockThread(threadId: string): SocialThread;
            /** Suppresses activity notifications for the current user of updates to the specified thread. */
            suppressThreadNotifications(threadId: string): void;
            /** Creates an image attachment for a future post. */
            createImageAttachment(name: string, description: string, imageData: any): SocialAttachment;
            /** Generates a preview for the content specified by the URL. */
            getPreview(itemUrl: string): SocialAttachment;
            /** Returns the preview image data for an image attachment.
                @param url Specifies the URL of the preview image relative to the personal site portal.
                @param key Specifies the URL-encoded key to decrypt the image.
                @param iv Specifies the URL-encoded initialization vector for decrypting the image. */
            getPreviewImage(url: string, key: string, iv: string): any;
        }

        export class SocialFeedOptions extends SP.ClientObject {
            get_maxThreadCount(): number;
            set_maxThreadCount(value: number): number;
            get_newerThan(): string;
            set_newerThan(value: string): string;
            get_olderThan(): string;
            set_olderThan(value: string): string;
            get_sortOrder(): SocialFeedSortOrder;
            set_sortOrder(value: SocialFeedSortOrder): SocialFeedSortOrder;
        }

        /** Provides properties and methods for managing a user's list of followed actors.
            Actors can be users, documents, sites, and tags. */
        export class SocialFollowingManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            /** URI to a site  that lists the current user's followed documents. */
            get_followedDocumentsUri(): string;
            /** URI to a site  that lists the current user's followed sites. */
            get_followedSitesUri(): string;
            /** Adds the specified actor to the current user's list of followed items.
                Returns one of the following values, wrapped into the SP.IntResult object:
                0 = ok,
                1 = alreadyFollowing,
                2 = limitReached,
                3 = internalError */
            follow(actor: SocialActorInfo): SP.IntResult;
            stopFollowing(actor: SocialActorInfo): SP.BooleanResult;
            isFollowed(actor: SocialActorInfo): SP.BooleanResult;
            getFollowed(types: SocialActorTypes): SocialActor[];
            getFollowedCount(types: SocialActorTypes): SP.IntResult;
            /** Returns the users who are followers of the current user. */
            getFollowers(): SocialActor[];
            getSuggestions(): SocialActor[];
        }

        /** Defines a link that includes a URI and text representation.
            This class is used to represent the location of a web site.  */
        export class SocialLink extends SP.ClientValueObject {
            get_text(): string;
            set_text(value: string): string;
            get_uri(): string;
            set_uri(value: string): string;
        }

        /** Specifies a post read from the server. */
        export class SocialPost extends SP.ClientValueObject {
            /** Specifies an image, document preview, or video preview attachment */
            get_attachment(): SocialAttachment;
            /** Describes attributes about the post, such as whether the current user can delete or like the post.  */
            get_attributes(): SocialPostAttributes;
            /** Specifies the author of the post as an index to the social thread's Actors array. */
            get_authorIndex(): number;
            /** Specifies the date and time that the post was created on the server. */
            get_createdTime(): string;
            /** Specifies the unique identifier of the post. */
            get_id(): string;
            /** Specifies information about users who like the post. */
            get_likerInfo(): SocialPostActorInfo;
            /** Specifies the date and time that the post was last modified on the server. */
            get_modifiedTime(): string;
            /** An array of objects in a post, where each object represents a user, document, site, tag, or link. */
            get_overlays(): SocialDataOverlay[];
            /** Specifies whether a post is the root post or a reply post in a thread */
            get_postType(): SocialPostType;
            /** Specifies the URI of the image to be displayed with the post.  */
            get_preferredImageUri(): string;
            /** Specifies the link to a web site associated with the application that created the post. */
            get_source(): SocialLink;
            /** Specifies the text of the post. */
            get_text(): string;
        }

        /** Specifies a set of users, documents, sites, and tags by an index into the SocialThreadActors array  */
        export class SocialPostActorInfo extends SP.ClientValueObject {
            get_includesCurrentUser(): boolean;
            /** Specifies an array of indexes into the SocialThreadActors array.
                The server can choose to return a limited set of actors. For example, the server can choose to return a subset of the users that like a post. */
            get_indexes(): number[];
            get_totalCount(): number;
        }

        /** Specifies the content of a post in the SocialFeedManager.createPost method.
            The post consists of a text message, which can optionally include social tags, mentions of users, and links. */
        export class SocialPostCreationData extends SP.ClientValueObject {
            /** Specifies an image, document preview, or video preview to be used in the post. */
            get_attachment(): SocialAttachment;
            /** Specifies an image, document preview, or video preview to be used in the post. */
            set_attachment(value: SocialAttachment): SocialAttachment;
            /** Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
                Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string. */
            get_contentItems(): SocialDataItem;
            /** Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
                Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string. */
            set_contentItems(value: SocialDataItem): SocialDataItem;
            /** Contains the text body of the post. */
            get_contentText(): string;
            /** Contains the text body of the post.
                It can optionally contain one or more substitution references to elements in the zero-based ContentItems array.
                A substitution reference consists of a series of characters that consist of an open-brace character ({) followed by one of more digits in the range 0 to 9 and terminated by a close-brace character (}).
                The substitution reference is replaced by the text value of the element in the in the array at the offset specified by the value of the digits.
                For example, the text string "{0}" is replaced by the first element in the ContentItems array. */
            set_contentText(value: string): string;
            /** Specifies additional information when creating server-generated posts */
            get_definitionData(): SocialPostDefinitionData;
            /** Specifies additional information when creating server-generated posts */
            set_definitionData(value: SocialPostDefinitionData): SocialPostDefinitionData;
            /** Specifies the link to a web site associated with the application that created the post */
            get_source(): SocialLink;
            /** Specifies the link to a web site associated with the application that created the post */
            set_source(value: SocialLink): SocialLink;
            /** Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs */
            get_securityUris(): string[];
            /** Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs */
            set_securityUris(value: string[]): string[];
            /** Indicates whether the post is to be used as the current user's new status message. */
            get_updateStatusText(): boolean;
            /** Indicates whether the post is to be used as the current user's new status message. */
            set_updateStatusText(value: boolean): boolean;
        }

        /** Provides additional information about server-generated posts.
            This type can only be specified in a server-to-server call. */
        export class SocialPostDefinitionData extends SP.ClientValueObject {
            get_items(): SocialPostDefinitionDataItem[];
            set_items(value: SocialPostDefinitionDataItem[]): SocialPostDefinitionDataItem[];
            get_name(): string;
            set_name(value: string): string;
        }

        /** Specifies an item to be inserted in a post by replacing a token in the post definition.
            This type can only be specified in a server-to-server call. */
        export class SocialPostDefinitionDataItem extends SP.ClientValueObject {
            /** Specifies the name of the user.
                This property is only used if the ItemType property specifies that the item is a User. */
            get_accountName(): string;
            /** Specifies the name of the user.
                This property is only used if the ItemType property specifies that the item is a User. */
            set_accountName(value: string): string;
            /** Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link. */
            get_itemType(): SocialPostDefinitionDataItemType;
            /** Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link. */
            set_itemType(value: SocialPostDefinitionDataItemType): SocialPostDefinitionDataItemType;
            /** Specifies the post definition token to be replaced by the item */
            get_placeholderName(): string;
            /** Specifies the post definition token to be replaced by the item */
            set_placeholderName(value: string): string;
            /** Specifies the GUID that identifies the tag.
                This property is only used if the ItemType property specifies that the item is a Tag. */
            get_tagGuid(): string;
            /** Specifies the GUID that identifies the tag.
                This property is only used if the ItemType property specifies that the item is a Tag. */
            set_tagGuid(value: string): string;
            /** Specifies the text that is substituted for the placeholder */
            get_text(): string;
            /** Specifies the text that is substituted for the placeholder */
            set_text(value: string): string;
            /** Specifies the URI of the document, site, or link.
                This property is only available if the ItemType property specifies that the item is a Document, Link, or Site. */
            get_uri(): string;
            /** Specifies the URI of the document, site, or link.
                This property is only available if the ItemType property specifies that the item is a Document, Link, or Site. */
            set_uri(value: string): string;
        }

        /** Specifies a reference to a post in another thread.
            The referenced post can be a post with a tag, a post that is liked, a post that mentions a user, or a post that is a reply. */
        export class SocialPostReference extends SP.ClientValueObject {
            /** Provides a digest of the thread containing the referenced post */
            get_digest(): SocialThread;
            get_post(): SocialPost;
            /** Specifies the unique identifier of the thread containing the referenced post. */
            get_threadId(): string;
            /** Specifies the current owner of the thread as an index into the SocialThreadActors array. */
            get_threadOwnerIndex(): number;
        }

        /** Specifies a thread that is stored on the server.
            The thread contains a root post and zero or more reply posts. */
        export class SocialThread extends SP.ClientValueObject {
            /** Specifies the users who have created a post in the returned thread and also contains any users, documents, sites, and tags that are referenced in any of the posts in the returned thread. */
            get_actors(): SocialActor[];
            /** Specifies attributes of the thread, such as whether the current user can reply or lock the thread and whether the thread is a digest of a thread on the server, whether the number of replies has reached the maximum, and whether the thread is locked. */
            get_attributes(): SocialThreadAttributes;
            /** Specifies the unique identification of the thread. */
            get_id(): string;
            /** Specifies the thread owner as an index into the Actors array.
                Typically, the thread owner is the user who created the root post, but the thread owner can be any user included in the Actors array. */
            get_ownerIndex(): number;
            /** Specifies a URI that is a permanent reference to the thread, if such a permanent reference is available.  */
            get_permalink(): string;
            /** Specifies a reference to a post in another thread.
                The PostReference property is available only if the ThreadType has a value of ReplyReference, LikeReference, MentionReference, or TagReference.  */
            get_postReference(): SocialPostReference;
            /** Returns an array of zero or more reply posts.
                The server can return a subset of the reply posts that are stored on the server. */
            get_replies(): SocialPost[];
            get_rootPost(): SocialPost;
            /** Provides information about conditions that were encountered retrieving the thread that did not prevent the operation from completing. */
            get_status(): SocialStatusCode;
            /** Specifies if the thread is a normal thread created by one or more CreatePost calls or a reference post generated by the server when a user replies to a post, likes a post, or creates a post with a tag or mention */
            get_threadType(): SocialThreadType;
            get_totalReplyCount(): number;
        }

    }

}
declare namespace SP {
    namespace Taxonomy {
        export enum StringMatchOption {
            startsWith,
            exactMatch
        }

        export enum ChangeItemType {
            unknown,
            term,
            termSet,
            group,
            termStore,
            site
        }

        export enum ChangeOperationType {
            unknown,
            add,
            edit,
            deleteObject,
            move,
            copy,
            pathChange,
            merge,
            importObject,
            restore
        }


        export class TaxonomySession extends SP.ClientObject {
            static getTaxonomySession(context: SP.ClientContext): TaxonomySession;
            get_offlineTermStoreNames(): string[];
            get_termStores(): TermStoreCollection;
            getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
            updateCache(): void;
            getTerm(guid: SP.Guid): Term;
            getTermsById(termIds: SP.Guid[]): TermCollection;
            getTermsInDefaultLanguage(
                termLabel: string,
                defaultLabelOnly: boolean,
                stringMatchOption: StringMatchOption,
                resultCollectionSize: number,
                trimUnavailable: boolean,
                trimDeprecated: boolean): TermCollection;

            getTermsInWorkingLocale(
                termLabel: string,
                defaultLabelOnly: boolean,
                stringMatchOption: StringMatchOption,
                resultCollectionSize: number,
                trimUnavailable: boolean,
                trimDeprecated: boolean): TermCollection;

            getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
            getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;
            getTermSetsByName(termSetName: string, lcid: number): TermSetCollection;
            getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): TermSetCollection;
            getDefaultKeywordsTermStore(): TermStore;
            getDefaultSiteCollectionTermStore(): TermStore;
        }

        export class TermStoreCollection extends SP.ClientObjectCollection<TermStore> {
            itemAt(index: number): TermStore;
            get_item(index: number): TermStore;
            getById(id: SP.Guid): TermStore;
            getByName(name: string): TermStore;
        }

        export class TermStore extends SP.ClientObject {
            get_contentTypePublishingHub(): string;
            get_defaultLanguage(): number;
            set_defaultLanguage(value: number): void;
            get_groups(): TermGroupCollection;
            get_hashTagsTermSet(): TermSet;
            get_id(): SP.Guid;
            get_isOnline(): boolean;
            get_keywordsTermSet(): TermSet;
            get_languages(): number[];
            get_name(): string;
            get_orphanedTermsTermSet(): TermSet;
            get_systemGroup(): TermGroup;
            get_workingLanguage(): number;
            set_workingLanguage(value: number): void;

            addLanguage(lcid: number): void;
            commitAll(): void;
            createGroup(name: string): TermGroup;
            createGroup(name: string, groupId: SP.Guid): TermGroup;

            deleteLanguage(lcid: number): void;

            getChanges(changeInformation: ChangeInformation): ChangedItemCollection;

            getGroup(id: SP.Guid): TermGroup;
            getTerm(termId: SP.Guid): Term;
            getTermInTermSet(termSetId: SP.Guid, termId: SP.Guid): Term;
            getTermsById(termIds: SP.Guid[]): TermCollection;
            getTerms(termLabel: string, trimUnavailable: boolean): TermCollection;
            getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
            getTermSetsByName(termSetName: string, lcid: number): TermSetCollection;
            getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): TermSetCollection;
            getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
            getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;

            getTermSet(termSetId: SP.Guid): TermSet;
            getTermSetsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermSetCollection;
            rollbackAll(): void;
            updateCache(): void;
            getSiteCollectionGroup(currentSite: SP.Site, createIfMissing: boolean): TermGroup;
            updateUsedTermsOnSite(currentSite: SP.Site): void;
        }

        export class TaxonomyItem extends SP.ClientObject {
            static normalizeName(context: SP.ClientContext, name: string): SP.StringResult;
            get_createdDate(): Date;
            get_id(): SP.Guid;
            get_lastModifiedDate(): Date;
            get_name(): string;
            set_name(value: string): void;
            get_termStore(): TermStore;
            deleteObject(): void;
        }

        export class TermGroupCollection extends SP.ClientObjectCollection<TermGroup> {
            itemAt(index: number): TermGroup;
            get_item(index: number): TermGroup;
            getById(id: SP.Guid): TermGroup;
            getByName(name: string): TermGroup;
        }

        export class TermGroup extends TaxonomyItem {
            get_description(): string;
            set_description(value: string): void;
            get_isSiteCollectionGroup(): boolean;
            get_isSystemGroup(): boolean;
            get_termSets(): TermSetCollection;
            createTermSet(name: string, newTermSetId: SP.Guid, lcid: number): TermSet;
            exportObject(): SP.StringResult;
            getChanges(changeInformation: ChangeInformation): ChangedItemCollection;
            getTermSetsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermSetCollection;
        }

        export class TermSetItem extends TaxonomyItem {
            get_customProperties(): { [key: string]: string; };
            get_customSortOrder(): string;
            set_customSortOrder(value: string): void;
            get_isAvailableForTagging(): boolean;
            set_isAvailableForTagging(value: boolean): void;
            get_owner(): string;
            set_owner(value: string): void;
            get_terms(): TermCollection;
            createTerm(name: string, lcid: number, newTermId: SP.Guid): Term;
            /*getTerms(pagingLimit: number): TermCollection;*/ //Moved to descendants to void TypeScript errors
            reuseTerm(sourceTerm: Term, reuseBranch: boolean): Term;
            reuseTermWithPinning(sourceTerm: Term): Term;
            deleteCustomProperty(name: string): void;
            deleteAllCustomProperties(): void;
            setCustomProperty(name: string, value: string): void;
        }

        export class TermSetCollection extends SP.ClientObjectCollection<TermSet> {
            itemAt(index: number): TermSet;
            get_item(index: number): TermSet;
            getById(id: SP.Guid): TermSet;
            getByName(name: string): TermSet;
        }

        export class TermSet extends TermSetItem {
            get_contact(): string;
            set_contact(value: string): void;
            get_description(): string;
            set_description(value: string): void;
            get_group(): TermGroup;
            get_isOpenForTermCreation(): boolean;
            set_isOpenForTermCreation(value: boolean): void;
            get_stakeholders(): string[];
            addStakeholder(stakeholderName: string): void;
            copy(): TermSet;
            deleteStakeholder(stakeholderName: string): void;
            exportObject(): SP.StringResult;
            getAllTerms(): TermCollection;
            getChanges(changeInformation: ChangeInformation): ChangedItemCollection;
            getTerm(termId: SP.Guid): Term;
            getTerms(pagingLimit: number): TermCollection;
            getTerms(termLabel: string, trimUnavailable: boolean): TermCollection;
            getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
            getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
            getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;
            move(targetGroup: TermGroup): void;
        }

        export class TermCollection extends SP.ClientObjectCollection<Term> {
            itemAt(index: number): Term;
            get_item(index: number): Term;
            getById(id: SP.Guid): Term;
            getByName(name: string): Term;
        }

        export class Term extends TermSetItem {
            get_description(): string;
            get_isDeprecated(): boolean;
            get_isKeyword(): boolean;
            get_isPinned(): boolean;
            get_isPinnedRoot(): boolean;
            get_isReused(): boolean;
            get_isRoot(): boolean;
            get_isSourceTerm(): boolean;
            get_labels(): LabelCollection;
            get_localCustomProperties(): { [key: string]: string; };
            get_mergedTermIds(): SP.Guid[];
            get_parent(): Term;
            get_pathOfTerm(): string;
            get_pinSourceTermSet(): TermSet;
            get_reusedTerms(): TermCollection;
            get_sourceTerm(): Term;
            get_termsCount(): number;
            get_termSet(): TermSet;
            get_termSets(): TermSetCollection;
            copy(doCopyChildren: boolean): Term;
            createLabel(labelName: string, lcid: number, isDefault: boolean): Label;
            deleteLocalCustomProperty(name: string): void;
            deleteAllLocalCustomProperties(): void;
            deprecate(doDepricate: boolean): void;
            getAllLabels(lcid: number): LabelCollection;
            getDefaultLabel(lcid: number): Label;
            getDescription(lcid: number): SP.StringResult;

            getTerms(pagingLimit: number): TermCollection;
            getTerms(
                termLabel: string,
                lcid: number,
                defaultLabelOnly: boolean,
                stringMatchOption: StringMatchOption,
                resultCollectionSize: number,
                trimUnavailable: boolean): TermCollection;

            merge(termToMerge: Term): void;
            move(newParnt: TermSetItem): void;
            reassignSourceTerm(reusedTerm: Term): void;
            setDescription(description: string, lcid: number): void;
            setLocalCustomProperty(name: string, value: string): void;
            getIsDescendantOf(ancestorTerm: Term): SP.BooleanResult;
            getPath(lcid: number): SP.StringResult;
        }


        export class LabelCollection extends SP.ClientObjectCollection<Label> {
            itemAt(index: number): Label;
            get_item(index: number): Label;
            getByValue(name: string): Label;
        }

        export class Label extends SP.ClientObject {
            get_isDefaultForLanguage(): boolean;
            get_language(): number;
            set_language(value: number): void;
            get_term(): Term;
            get_value(): string;
            set_value(value: string): void;
            deleteObject(): void;
            setAsDefaultForLanguage(): void;
        }

        export class LabelMatchInformation extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            get_defaultLabelOnly(): boolean;
            set_defaultLabelOnly(value: boolean): void;
            get_excludeKeyword(): boolean;
            set_excludeKeyword(value: boolean): void;
            get_lcid(): number;
            set_lcid(value: number): void;
            get_resultCollectionSize(): number;
            set_resultCollectionSize(value: number): void;
            get_stringMatchOption(): StringMatchOption;
            set_stringMatchOption(value: StringMatchOption): void;
            get_termLabel(): string;
            set_termLabel(value: string): void;
            get_trimDeprecated(): boolean;
            set_trimDeprecated(value: boolean): void;
            get_trimUnavailable(): boolean;
            set_trimUnavailable(value: boolean): void;
        }

        export class CustomPropertyMatchInformation extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            get_customPropertyName(): string;
            set_customPropertyName(value: string): void;
            get_customPropertyValue(): string;
            set_customPropertyValue(value: string): void;
            get_resultCollectionSize(): number;
            set_resultCollectionSize(value: number): void;
            get_stringMatchOption(): StringMatchOption;
            set_stringMatchOption(value: StringMatchOption): void;
            get_trimUnavailable(): boolean;
            set_trimUnavailable(value: boolean): void;
        }

        export class ChangeInformation extends SP.ClientObject {
            constructor(context: SP.ClientContext);
            get_itemType(): ChangeItemType;
            set_itemType(value: ChangeItemType): void;
            get_operationType(): ChangeOperationType;
            set_operationType(value: ChangeOperationType): void;
            get_startTime(): Date;
            set_startTime(value: Date): void;
            get_withinTimeSpan(): number;
            set_withinTimeSpan(value: number): void;
        }

        export class ChangedItemCollection extends SP.ClientObjectCollection<ChangedItem> {
            itemAt(index: number): ChangedItem;
            get_item(index: number): ChangedItem;
        }

        export class ChangedItem extends SP.ClientObject {
            get_changedBy(): string;
            get_changedTime(): Date;
            get_id(): SP.Guid;
            get_itemType(): ChangeItemType;
            get_operation(): ChangeOperationType;
        }

        export class ChangedSite extends ChangedItem {
            get_siteId(): SP.Guid;
            get_termId(): SP.Guid;
            get_termSetId(): SP.Guid;
        }

        export class ChangedGroup extends ChangedItem {
        }

        export class ChangedTerm extends ChangedItem {
            get_changedCustomProperties(): string[];
            get_changedLocalCustomProperties(): string[];
            get_groupId(): SP.Guid;
            get_lcidsForChangedDescriptions(): number[];
            get_lcidsForChangedLabels(): number[];
            get_termSetId(): SP.Guid;
        }

        export class ChangedTermSet extends ChangedItem {
            get_fromGroupId(): SP.Guid;
            get_groupId(): SP.Guid;
        }
        export class ChangedTermStore extends ChangedItem {
            get_changedLanguage(): number;
            get_isDefaultLanguageChanged(): boolean;
            get_isFullFarmRestore(): boolean;
        }

        export class TaxonomyField extends SP.FieldLookup {
            constructor(context: SP.ClientContext, fields: SP.FieldCollection, filedName: string);
            get_anchorId(): SP.Guid;
            set_anchorId(value: SP.Guid): void;
            get_createValuesInEditForm(): boolean;
            set_createValuesInEditForm(value: boolean): void;
            get_isAnchorValid(): boolean;
            get_isKeyword(): boolean;
            set_isKeyword(value: boolean): void;
            get_isPathRendered(): boolean;
            set_isPathRendered(value: boolean): void;
            get_isTermSetValid(): boolean;
            get_open(): boolean;
            set_open(value: boolean): void;
            get_sspId(): SP.Guid;
            set_sspId(value: SP.Guid): void;
            get_targetTemplate(): string;
            set_targetTemplate(value: string): void;
            get_termSetId(): SP.Guid;
            set_termSetId(value: SP.Guid): void;
            get_textField(): SP.Guid;
            get_userCreated(): SP.Guid;
            set_userCreated(value: SP.Guid): void;

            getFieldValueAsText(value: TaxonomyFieldValue): SP.StringResult;
            getFieldValueAsTaxonomyFieldValue(value: string): TaxonomyFieldValue;
            getFieldValueAsTaxonomyFieldValueCollection(value: string): TaxonomyFieldValueCollection;
            setFieldValueByTerm(listItem: SP.ListItem, term: Term, lcid: number): void;
            setFieldValueByTermCollection(listItem: SP.ListItem, terms: TermCollection, lcid: number): void;
            setFieldValueByCollection(listItem: SP.ListItem, terms: Term[], lcid: number): void;
            setFieldValueByValue(listItem: SP.ListItem, taxValue: TaxonomyFieldValue): void;
            setFieldValueByValueCollection(listItem: SP.ListItem, taxValueCollection: TaxonomyFieldValueCollection): void;
            getFieldValueAsHtml(value: TaxonomyFieldValue): SP.StringResult;
            getValidatedString(value: TaxonomyFieldValue): SP.StringResult;

        }

        export class TaxonomyFieldValueCollection extends SP.ClientObjectCollection<TaxonomyFieldValue> {
            constructor(context: SP.ClientContext, fieldValue: string, creatingField: SP.Field);
            itemAt(index: number): TaxonomyFieldValue;
            get_item(index: number): TaxonomyFieldValue;
            populateFromLabelGuidPairs(text: string): void;
        }

        export class TaxonomyFieldValue extends SP.ClientValueObject {
            get_label(): string;
            set_label(value: string): void;
            get_termGuid(): SP.Guid;
            set_termGuid(value: SP.Guid): void;
            get_wssId(): number;
            set_wssId(value: number): void;
        }

        export class MobileTaxonomyField extends SP.ClientObject {
            get_readOnly(): boolean;
        }
    }
}

declare namespace SP {
    export module DocumentSet {
        export class DocumentSet extends ClientObject {
            static create(context: ClientContext, parentFolder: Folder, name: string, ctid: ContentTypeId): StringResult;
        }
    }

    export module Video {
        export class EmbedCodeConfiguration extends ClientValueObject {
            public get_autoPlay(): boolean;
            public set_autoPlay(value: boolean): boolean;

            public get_displayTitle(): boolean;
            public set_displayTitle(value: boolean): boolean;

            public get_linkToOwnerProfilePage(): boolean;
            public set_linkToOwnerProfilePage(value: boolean): boolean;

            public get_linkToVideoHomePage(): boolean;
            public set_linkToVideoHomePage(value: boolean): boolean;

            public get_loop(): boolean;
            public set_loop(value: boolean): boolean;

            public get_pixelHeight(): number;
            public set_pixelHeight(value: number): number;

            public get_pixelWidth(): number;
            public set_pixelWidth(value: number): number;

            public get_startTime(): number;
            public set_startTime(value: number): number;

            public get_previewImagePath(): string;
            public set_previewImagePath(value: string): string;
        }

        export class VideoSet extends DocumentSet.DocumentSet {
            static createVideo(context: ClientContext, parentFolder: Folder, name: string, ctid: ContentTypeId): StringResult;
            static uploadVideo(context: ClientContext, list: List, fileName: string, file: any[], overwriteIfExists: boolean, parentFolderPath: string): StringResult;
            static getEmbedCode(context: ClientContext, videoPath: string, properties: EmbedCodeConfiguration): StringResult;
            static migrateVideo(context: ClientContext, videoFile: File): SP.ListItem;
        }
    }
}


declare namespace SP {
    export module UI {
        export module ApplicationPages {
            export class SelectorSelectionEventArgs extends Sys.EventArgs {
                constructor(entities: any);
                get_entities(): any;
            }
            export interface ISelectorComponent {
                get_selectedEntities(): any;
                set_selectedEntities(value: any): void;
                get_callback(): (sender: any, e: Sys.EventArgs) => void;
                set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
                get_scopeKey(): string;
                get_componentType(): SP.UI.ApplicationPages.SelectorType;
                revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
            }
            export enum SelectorType {
                none,
                resource,
                people,
                people_And_Resource,
                event,
            }
            export class CalendarSelector extends Sys.Component {
                static instance(): SP.UI.ApplicationPages.CalendarSelector;
                registerSelector(selector: SP.UI.ApplicationPages.ISelectorComponent): void;
                getSelector(type: SP.UI.ApplicationPages.SelectorType, scopeKey: string): SP.UI.ApplicationPages.ISelectorComponent;
                addHandler(scopeKey: string, people: boolean, resource: boolean, handler: (sender: any, selection: SP.UI.ApplicationPages.SelectorSelectionEventArgs) => void): void;
                revertTo(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
                constructor();
            }
            export class BaseSelectorComponent implements SP.UI.ApplicationPages.ISelectorComponent {
                constructor(key: string, type: SP.UI.ApplicationPages.SelectorType);
                get_scopeKey(): string;
                get_componentType(): SP.UI.ApplicationPages.SelectorType;
                get_selectedEntities(): any;
                set_selectedEntities(value: any): void;
                get_callback(): (sender: any, e: Sys.EventArgs) => void;
                set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
                revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
                setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
            }
            export interface ICalendarController {
                moveToDate(date: string): void;
                moveToViewType(viewType: string): void;
                moveToViewDate(scope: SP.UI.ApplicationPages.CalendarScope, date: string): void;
                moveToView(scope: SP.UI.ApplicationPages.CalendarScope): void;
                expandAll(): void;
                collapseAll(): void;
                refreshItems(): void;
                getActiveScope(): SP.UI.ApplicationPages.CalendarScope;
                newItemDialog(contentTypeId: string): void;
                deleteItem(itemId: string): void;
            }
            export enum CalendarScope {
                nothing,
                monthly,
                weeklyGroup,
                daily,
                weekly,
                dailyGroup,
            }
            export class CalendarInstanceRepository {
                static registerInstance(instanceId: string, contoller: SP.UI.ApplicationPages.ICalendarController): void;
                static lookupInstance(instanceId: string): SP.UI.ApplicationPages.ICalendarController;
                static firstInstance(): SP.UI.ApplicationPages.ICalendarController;
            }
            export class ResolveEntity {
                tYPE_EVENT: string;
                tYPE_USER: string;
                tYPE_RESOURCE: string;
                tYPE_EXCHANGE: string;
                entityType: string;
                displayName: string;
                email: string;
                accountName: string;
                id: string;
                members: SP.UI.ApplicationPages.ResolveEntity[];
                needResolve: boolean;
                isGroup: boolean;
                get_key(): string;
                constructor();
            }
            export class ClientPeoplePickerQueryParameters extends SP.ClientValueObject {
                get_allowEmailAddresses(): boolean;
                set_allowEmailAddresses(value: boolean): void;
                get_allowMultipleEntities(): boolean;
                set_allowMultipleEntities(value: boolean): void;
                get_allUrlZones(): boolean;
                set_allUrlZones(value: boolean): void;
                get_enabledClaimProviders(): string;
                set_enabledClaimProviders(value: string): void;
                get_forceClaims(): boolean;
                set_forceClaims(value: boolean): void;
                get_maximumEntitySuggestions(): number;
                set_maximumEntitySuggestions(value: number): void;
                get_principalSource(): SP.Utilities.PrincipalSource;
                set_principalSource(value: SP.Utilities.PrincipalSource): void;
                get_principalType(): SP.Utilities.PrincipalType;
                set_principalType(value: SP.Utilities.PrincipalType): void;
                get_queryString(): string;
                set_queryString(value: string): void;
                get_required(): boolean;
                set_required(value: boolean): void;
                get_sharePointGroupID(): number;
                set_sharePointGroupID(value: number): void;
                get_urlZone(): SP.UrlZone;
                set_urlZone(value: SP.UrlZone): void;
                get_urlZoneSpecified(): boolean;
                set_urlZoneSpecified(value: boolean): void;
                get_web(): SP.Web;
                set_web(value: SP.Web): void;
                get_webApplicationID(): SP.Guid;
                set_webApplicationID(value: SP.Guid): void;
                get_typeId(): string;
                writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
                constructor();
            }
            export class ClientPeoplePickerWebServiceInterface {
                static clientPeoplePickerSearchUser(context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters): SP.StringResult;
                static clientPeoplePickerResolveUser(context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters): SP.StringResult;
            }
            export class PeoplePickerWebServiceInterface {
                static getSearchResultsByHierarchy(context: SP.ClientRuntimeContext, providerID: string, hierarchyNodeID: string, entityTypes: string, contextUrl: string): SP.StringResult;
                static getSearchResults(context: SP.ClientRuntimeContext, searchPattern: string, providerID: string, hierarchyNodeID: string, entityTypes: string): SP.StringResult;
            }
        }
    }
}

declare namespace SP {
    export module UI {
        export class PopoutMenu implements Sys.IDisposable {
            constructor(launcherId: string, menuId: string, iconId: string, launcherOpenCssClass: string, textDirection: string, closeIconUrl: string, isClustered: boolean, closeIconOffsetLeft: number, closeIconOffsetTop: number, closeIconHeight: number, closeIconWidth: number);
            launchMenu(): void;
            closeMenu(): void;
            static createPopoutMenuInstanceAndLaunch(anchorId: string, menuId: string, iconId: string, anchorOpenCss: string, textDirection: string, closeIconUrl: string, isClustered: boolean, x: number, y: number, height: number, width: number): void;
            static closeActivePopoutMenuInstance(): void;
            dispose(): void;
        }
        export class AttractModeControl extends Sys.UI.Control {
            defaultAttractModeIcon: string;
            cssAttractMode: string;
            cssAttractModeBackground: string;
            cssAttractModeCell: string;
            cssAttractModeWrapper: string;
            cssAttractModeIcon: string;
            cssAttractModeText: string;
            get_imageElement(): any;
            get_textElement(): HTMLElement;
            constructor();
        }

        export module Notify {
            export function addNotification(strHtml: string, bSticky: boolean): string;
            export function removeNotification(nid: string): void;
            export function showLoadingNotification(bSticky: boolean): string;


            export class Notification {
                constructor(containerId: SPNotifications.ContainerID, strHtml: string, bSticky?: boolean, strTooltip?: string, onclickHandler?: () => void, extraData?: SPStatusNotificationData);
                get_id(): string;
                Show(bNoAnimate: boolean): void;
                Hide(bNoAnimate: boolean): void;
            }
            export class NotificationContainer {
                constructor(id: number, element: any, layer: number, notificationLimit?: number);
                Clear(): void;
                GetCount(): number;
                SetEventHandler(eventId: SPNotifications.EventID, eventHandler: any): void;
            }
        }

        export class Status {
            static addStatus(strTitle: string, strHtml?: string, atBegining?: boolean): string;
            static appendStatus(sid: string, strTitle: string, strHtml: string): string;
            static updateStatus(sid: string, strHtml: string): void;
            static setStatusPriColor(sid: string, strColor: string): void;
            static removeStatus(sid: string): void;
            static removeAllStatus(hide: boolean): void;
            constructor();
        }

        export module Workspace {
            export function add_resized(handler: () => void): void;
            export function remove_resized(handler: () => void): void;
        }
        export class Menu {
            static create(id: string): SP.UI.Menu;
            addMenuItem(text: string, actionScriptText: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string): HTMLElement;
            addSeparator(): void;
            addSubMenu(text: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string): SP.UI.Menu;
            show(relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number): void;
            showFilterMenu(relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number, fShowClose: boolean, fShowCheckBoxes: boolean): void;
            hideIcons(): void;
            showIcons(): void;
        }
        export class MenuTest {
            static setup(relativeElement: HTMLElement): void;
            constructor();
        }

        export function $create_DialogOptions(): DialogOptions;

        /** Result of a modal dialog execution */
        export enum DialogResult {
            /** Do not use this */
            invalid,
            /** User closed dialog, cancelling the action */
            cancel,
            /** Dialog actions completed successfully */
            OK
        }
        /** Callback which processes dialog result value after dialog is closed */
        export interface DialogReturnValueCallback {
            (dialogResult: DialogResult, returnValue: any): void;
        }
        /** Options for dialog creation */
        export interface IDialogOptions {
            /** Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property. */
            title?: string;
            /** X coordinate of the dialog box. */
            x?: number;
            /** Y coordinate of the dialog box. */
            y?: number;
            /** The dialog will be maximized when shown. */
            showMaximized?: boolean;
            /** url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both. */
            url?: string;
            /** specifies if close button should be shown on the dialog */
            showClose?: boolean;
            /** specifies if maximize button should be shown on the dialog */
            allowMaximize?: boolean;
            /** callback that is called after dialog is closed */
            dialogReturnValueCallback?: DialogReturnValueCallback;
            /** automatically determine size of the dialog based on its contents. */
            autoSize?: boolean;
            /** minimum width of the dialog when using autoSize option */
            autoSizeStartWidth?: number;
            /** include padding for adding a scrollbar */
            includeScrollBarPadding?: boolean;
            /** width of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            width?: number;
            /** height of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            height?: number;
            /** html element which will be used as contents of the dialog. You should use either html or url attribute, but not both. */
            html?: HTMLElement;
            /** custom arguments to be passed to the dialog */
            args?: any;
        }
        export class DialogOptions implements IDialogOptions {
            /** Text displayed in the title bar of the dialog box. If not defined, it will default to the title of the page defined by url property. */
            title: string;
            /** X coordinate of the dialog box. */
            x: number;
            /** Y coordinate of the dialog box. */
            y: number;
            /** The dialog will be maximized when shown. */
            showMaximized: boolean;
            /** url of the page which is shown in the modal dialog. You should use either html or url attribute, but not both. */
            url: string;
            /** specifies if close button should be shown on the dialog */
            showClose: boolean;
            /** specifies if maximize button should be shown on the dialog */
            allowMaximize: boolean;
            /** callback that is called after dialog is closed */
            dialogReturnValueCallback: DialogReturnValueCallback;
            /** automatically determine size of the dialog based on its contents. */
            autoSize: boolean;
            /** minimum width of the dialog when using autoSize option */
            autoSizeStartWidth: number;
            /** include padding for adding a scrollbar */
            includeScrollBarPadding: boolean;
            /** width of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            width: number;
            /** height of the dialog. if not specified, will be determined automatically based on the contents of the dialog */
            height: number;
            /** html element which will be used as contents of the dialog. You should use either html or url attribute, but not both. */
            html: HTMLElement;
            /** custom arguments to be passed to the dialog */
            args: any;
        }
        /** Represents a dialog. Do not use this class directly from your code. */
        export class Dialog {
            get_firstTabStop(): HTMLElement;
            get_lastTabStop(): HTMLElement;
            get_url(): string;
            get_html(): string;
            get_title(): string;
            get_args(): any;
            get_allowMaximize(): boolean;
            get_showClose(): boolean;
            get_returnValue(): any;
            set_returnValue(value: any): void;
            get_frameElement(): HTMLFrameElement;
            get_dialogElement(): HTMLElement;
            get_isMaximized(): boolean;
            get_closed(): boolean;
            autoSizeSuppressScrollbar(resizePageCallBack: any): void;
            autoSize(): void;
        }
        /** Represents a modal dialog */
        export class ModalDialog extends SP.UI.Dialog {
            /** Displays a modal dialog defined by the specified options. */
            static showModalDialog(options: SP.UI.IDialogOptions): SP.UI.ModalDialog;
            /** Should be called from an existing dialog. */
            static commonModalDialogClose(dialogResult: SP.UI.DialogResult, returnValue: any): void;
            /** Shows a modal dialog, specified by url, callback, args, and options. Internally, uses SP.UI.ModalDialog.showModalDialog.
                @param url overrides options.url
                @param callback overrides options.dialogResultValueCallback
                @param args overrides options.args */
            static commonModalDialogOpen(url: string, options: SP.UI.IDialogOptions, callback?: SP.UI.DialogReturnValueCallback, args?: any): void;
            /** Refresh the page if specified dialogResult equals to SP.UI.DialogResult.OK */
            static RefreshPage(dialogResult: SP.UI.DialogResult): void;
            /** Show page specified by the url in a modal dialog. If the dialog returns SP.UI.DialogResult.OK, the page is refreshed. */
            static ShowPopupDialog(url: string): void;
            /** Show modal dialog specified by url, callback, height and width. */
            static OpenPopUpPage(url: string, callback: SP.UI.DialogReturnValueCallback, width?: number, height?: number): void;
            /** Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel/close button is not shown. */
            static showWaitScreenWithNoClose(title: string, message?: string, height?: number, width?: number): SP.UI.ModalDialog;
            /** Displays a wait/loading modal dialog with the specified title, message, height and width. Height and width are defined in pixels. Cancel button is shown. If user clicks it, the callbackFunc is called. */
            static showWaitScreenSize(title: string, message?: string, callbackFunc?: SP.UI.DialogReturnValueCallback, height?: number, width?: number): SP.UI.ModalDialog;
            static showPlatformFirstRunDialog(url: string, callbackFunc: SP.UI.DialogReturnValueCallback): SP.UI.ModalDialog;
            static get_childDialog(): SP.UI.ModalDialog;
            /** Closes the dialog using the specified dialog result. */
            close(dialogResult: SP.UI.DialogResult): void;
        }


        export class Command {
            constructor(name: string, displayName: string);
            get_displayName(): string;
            set_displayName(value: string): string;

            get_tooltip(): string;
            set_tooltip(value: string): string;

            get_isEnabled(): boolean;
            set_isEnabled(value: boolean): boolean;

            get_href(): string;
            get_name(): string;
            get_elementIDPrefix(): string;
            set_elementIDPrefix(value: string): string;

            get_linkElement(): HTMLAnchorElement;

            get_isDropDownCommand(): boolean;
            set_isDropDownCommand(value: boolean): boolean;

            attachEvents(): void;
            render(builder: HtmlBuilder): void;


            /**Should override*/
            onClick(): void;

        }


        export class CommandBar {
            constructor();
            get_commands(): Command[];
            get_dropDownThreshold(): number;
            set_dropDownThreshold(value: number): number;
            get_elementID(): string;
            get_overrideClass(): string;
            set_overrideClass(value: string): string;
            addCommand(action: Command): void;
            insertCommand(action: Command, position: number): void;
            render(builder: HtmlBuilder): void;
            attachEvents(): void;
            findCommandByName(name: string): Command;
        }


        export class PagingControl {
            constructor(id: string);
            render(innerContent: string): string;
            postRender(): void;
            get_innerContent(): HTMLSpanElement;
            get_innerContentClass(): string;
            setButtonState(buttonId: number, state: number): void;
            getButtonState(buttonId: number): number;
            onWindowResized(): void;

            /**Should override*/
            onPrev(): void;
            onNext(): void;

            static ButtonIDs: {
                prev: number;
                next: number;
            }

            static ButtonState: {
                hidden: number
                disabled: number;
                enabled: number;
            }
        }

        export module Workplace {
            export function add_resized(handler: Function): void;
            export function remove_resized(handler: Function): void;
        }

        export module UIUtility {
            export function generateRandomElementId(): string;
            export function cancelEvent(evt: Event): void;
            export function clearChildNodes(elem: HTMLElement): void;
            export function hideElement(elem: HTMLElement): void;
            export function showElement(elem: HTMLElement): void;
            export function insertBefore(elem: HTMLElement, targetElement: HTMLElement): void;
            export function insertAfter(elem: HTMLElement, targetElement: HTMLElement): void;
            export function removeNode(elem: HTMLElement): void;
            export function calculateOffsetLeft(elem: HTMLElement): number;
            export function calculateOffsetTop(elem: HTMLElement): number;
            export function createHtmlInputText(text: string): HTMLInputElement;
            export function createHtmlInputCheck(isChecked: boolean): HTMLInputElement;
            export function setInnerText(elem: HTMLElement, value: string): void;
            export function getInnerText(elem: HTMLElement): string;
            export function isTextNode(elem: HTMLElement): boolean;
            export function isSvgNode(elem: HTMLElement): boolean;
            export function isNodeOfType(elem: HTMLElement, tagNames: string[]): boolean;
            export function focusValidOnThisNode(elem: HTMLElement): boolean;
        }
    }
}

declare namespace SPNotifications {

    export enum ContainerID {
        Basic,
        Status,
    }
    export enum EventID {
        OnShow,
        OnHide,
        OnDisplayNotification,
        OnRemoveNotification,
        OnNotificationCountChanged,
    }
}

declare class SPStatusNotificationData {
    constructor(text: string, subText: string, imageUrl: string, sip: string);
}
declare function RefreshCommandUI():void;

declare namespace SP {
    export module UI {
        export module Controls {

            export interface INavigationOptions {
                assetId?: string;
                siteTitle?: string;
                siteUrl?: string;
                appTitle?: string;
                appTitleIconUrl?: string;
                rightToLeft?: boolean;
                appStartPage?: string;
                appIconUrl?: string;
                appHelpPageUrl?: string;
                appHelpPageOnClick?: string;
                settingsLinks?: ISettingsLink[];
                language?: string;
                clientTag?: string;
                appWebUrl?: string;
                onCssLoaded?: string;


                bottomHeaderVisible?: boolean;
                topHeaderVisible?: boolean;
            }

            export class NavigationOptions implements INavigationOptions { }


            export interface ISettingsLink {
                linkUrl: string;
                displayName: string;
            }

            export class SettingsLink implements ISettingsLink {
                linkUrl: string;
                displayName: string;
            }


            export class Navigation {
                constructor(placeholderDOMElementId: string, options: INavigationOptions);
                public get_assetId(): string;
                public get_siteTitle(): string;
                public get_siteUrl(): string;

                public get_appTitle(): string;
                public set_appTitle(value: string): string;

                public get_appTitleIconUrl(): string;
                public set_appTitleIconUrl(value: string): string;

                public get_rightToLeft(): boolean;
                public set_rightToLeft(value: boolean): boolean;

                public get_appStartPage(): string;
                public set_appStartPage(value: string): string;

                public get_appIconUrl(): string;
                public set_appIconUrl(value: string): string;

                public get_appHelpPageUrl(): string;
                public set_appHelpPageUrl(value: string): string;

                public get_appHelpPageOnClick(): string;
                public set_appHelpPageOnClick(value: string): string;

                public get_settingsLinks(): ISettingsLink[];
                public set_settingsLinks(value: ISettingsLink[]): ISettingsLink[];

                public setVisible(value: boolean): void;

                public setTopHeaderVisible(value: boolean): void;
                public setBottomHeaderVisible(value: boolean): void;
                public remove(): void;

                static getVersionedLayoutsUrl(pageName: string): string;
            }


            export class ControlManager {
                static getControl(placeHolderId: string): any;
            }
        }
    }
}

declare namespace SP {

    export module UserProfiles {
        /** Specifies types of changes made in the user profile store. */
        export enum ChangeTypes {
            /** No change was made */
            none,
            /** An object was added */
            add,
            /** An object was modified */
            modify,
            /** An object was removed */
            remove,
            /** The metadata of an object was modified */
            metadata,
            /** Multiple operations were performed on an object */
            all
        }

        export class HashTag extends ClientValueObject {
            get_name(): string;
            get_useCount(): number;
        }

        export class HashTagCollection extends SP.ClientObjectCollection<HashTag> {
            itemAt(index: number): HashTag;
            get_item(index: number): HashTag;
        }

        /** Specifies types of user-related objects that can be changed in the user profile store. */
        export enum ObjectTypes {
            none,
            singleValueProperty,
            multiValueProperty,
            anniversary,
            dlMembership,
            siteMembership,
            quickLink,
            colleague,
            personalizationSite,
            userProfile,
            webLog,
            custom,
            organizationProfile,
            organizationMembership,
            all
        }

        /** Provides methods for operations related to people.
            Note: The SocialFollowingManager object is the recommended object for performing Following People and Following Content tasks.
            However, PeopleManager provides some methods that SocialFollowingManager doesn�t. */
        export class PeopleManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            static getTrendingTags(context: SP.ClientRuntimeContext): HashTagCollection;
            /** Checks whether the first user is following the second user. */
            static isFollowing(context: SP.ClientRuntimeContext, possibleFollowerAccountName: string, possibleFolloweeAccountName: string): SP.BooleanResult;
            /** Gets the URL of the edit profile page for the current user. */
            get_editProfileLink(): string;
            /** Gets a Boolean value that indicates whether the current user's People I'm Following list is public. */
            get_isMyPeopleListPublic(): boolean;
            /** Gets tags that the user is following. */
            getFollowedTags(numberOfTagsToFetch: number): string[];
            /** Gets user properties for the current user. */
            getMyProperties(): PersonProperties;
            getPropertiesFor(accountName: string): PersonProperties;
            /** Gets the specified user profile property for the specified user. */
            getUserProfilePropertyFor(accountName: string, propertyName: string): string;
            /** Gets the specified user profile properties for the specified user. */
            getUserProfilePropertiesFor(propertiesForUser: UserProfilePropertiesForUser): any[];
            /** Gets suggestions for who the current user might want to follow.
                Note: The recommended API to use for this task is SocialFollowingManager.getSuggestions.
                Returns list of PersonProperties objects */
            getMySuggestions(): SP.ClientObjectList<PersonProperties>;
            /** Removes the specified user from the user's list of suggested people to follow. */
            hideSuggestion(accountName: string): void;
            follow(accountName: string): void;
            stopFollowing(accountName: string): void;
            /** Add the specified tag to the current user's list of followed tags.
                @param tagId GUID of the tag to start following. */
            followTag(tagId: string): void;
            /** Remove the specified tag from the current user's list of followed tags.
                @param tagId GUID of the tag to stop following. */
            stopFollowingTag(tagId: string): void;
            amIFollowing(accountName: string): SP.BooleanResult;
            getPeopleFollowedByMe(): SP.ClientObjectList<PersonProperties>;
            getPeopleFollowedBy(accountName: string): SP.ClientObjectList<PersonProperties>;
            getMyFollowers(): SP.ClientObjectList<PersonProperties>;
            getFollowersFor(accountName: string): SP.ClientObjectList<PersonProperties>;
            amIFollowedBy(accountName: string): SP.BooleanResult;
            /** Uploads and sets the user profile picture.
                Pictures in bmp, jpg and png formats and up to 5,000,000 bytes are supported.
                A user can upload a picture only to the user's own profile.
                @param data Binary content of an image file */
            setMyProfilePicture(data: SP.Base64EncodedByteArray): void;
        }

        /** Specifies the capabilities of a personal site. */
        export enum PersonalSiteCapabilities {
            none,
            profile,
            social,
            storage,
            myTasksDashboard,
            education,
            guest
        }

        /** Specifies an exception or status code for the state of a personal site instantiation. */
        export enum PersonalSiteInstantiationState {
            uninitialized,
            enqueued,
            created,
            deleted,
            permissionsGeneralFailure,
            permissionsUPANotGranted,
            permissionsUserNotLicensed,
            permissionsSelfServiceSiteCreationDisabled,
            permissionsNoMySitesInPeopleLight,
            permissionsEmptyHostUrl,
            permissionsHostFailedToInitializePersonalSiteContext,
            errorGeneralFailure,
            errorManagedPathDoesNotExist,
            errorLanguageNotInstalled,
            errorPartialCreate,
            errorPersonalSiteAlreadyExists,
            errorRootSiteNotPresent,
            errorSelfServiceSiteCreateCallFailed
        }

        export enum SocialDataStoreExceptionCode {
            socialListNotFound,
            personalSiteNotFound,
            cannotCreatePersonalSite,
            noSocialFeatures
        }

        /** Represents user properties. */
        export class PersonProperties extends SP.ClientObject {
            /** Specifies the person's account name */
            get_accountName(): string;
            /** Specifies an array of strings containing the account names of a person's direct reports. */
            get_directReports(): string[];
            /** Specifies the person's name. */
            get_displayName(): string;
            /** Specifies the person's email address. */
            get_email(): string;
            /** Specifies an array of strings that specify the account names of a person's managers. */
            get_extendedManagers(): string[];
            /** Specifies an array of strings that specify the account names of person's extended reports. */
            get_extendedReports(): string[];
            /** Represents whether or not the current user is following this person. */
            get_isFollowed(): boolean;
            /** Specifies the person's latest microblog post. */
            get_latestPost(): string;
            /** Specifies an array of strings that specify the account names of person's peers, that is, those who have the same manager. */
            get_peers(): string[];
            /** Specifies the absolute URL of the person's personal page. */
            get_personalUrl(): string;
            /** Specifies the URL for the person's profile picture. */
            get_pictureUrl(): string;
            /** Specifies the person's title. */
            get_title(): string;
            /** Represents all user profile properties including custom.
                The privacy settings affect which properties can be retrieved.
                Multiple values are delimited by the vertical bar "|".
                Null values are specified as empty strings. */
            get_userProfileProperties(): { [name: string]: string; };
            /** Specifies the URL for the person's profile. */
            get_userUrl(): string;
        }

        /** Provides an alternate entry point to user profiles rather than calling methods directly. */
        export class ProfileLoader extends SP.ClientObject {
            static getProfileLoader(context: SP.ClientRuntimeContext): ProfileLoader;
            getUserProfile(): UserProfile;
        }

        /** Represents a client-side user profile for a person.
            Note: The client-side UserProfile object provides methods you can use to create a personal site for the current user.
            However, it does not contain the user properties that the server-side UserProfile object contains.
            To access user properties from client-side code, use PeopleManager */
        export class UserProfile extends SP.ClientObject {
            constructor();
            /** Represents the content that the user is following. */
            get_followedContent(): FollowedContent;
            /** Retrieves SP.Site object that represents the user's personal site. */
            get_personalSite(): SP.Site;
            /** Specifies attributes of the user's personal site. */
            get_personalSiteCapabilities(): PersonalSiteCapabilities;
            /** Provides the state of the user's personal site */
            get_personalSiteInstantiationState(): PersonalSiteInstantiationState;
            /** Specifies whether the user can import pictures */
            get_pictureImportEnabled(): boolean;
            /** Specifies the URL to allow the current user to create a personal site. */
            get_urlToCreatePersonalSite(): string;
            /** Specifies whether the current user's social data is to be shared. */
            shareAllSocialData(shareAll: boolean): void;
            /** This member is reserved for internal use and is not intended to be used directly from your code.
                Use the createPersonalSiteEnque method to create a personal site. */
            createPersonalSite(lcid: number): void;
            /** Enquees creation of a personal site for the current user.
                @param isInteractive Has a true value if the request is from a web browser and a false value if the request is from a client application. */
            createPersonalSiteEnque(isInteractive: boolean): void;
        }

        /** Provides access to followed content items. */
        export class FollowedContent extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            static newObject(context: SP.ClientRuntimeContext): FollowedContent;
            /** Gets the location of the followed sites view */
            get_followedDocumentsUrl(): string;
            /** Gets the location of the followed documents view. */
            get_followedSitesUrl(): string;
            /** The Follow method adds the specified document or site to the list of followed content.
                @param url  URL that identifies the item to follow.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId>
                @param data Optional parameter that holds application-defined data for the item.
                */
            follow(url: string, data?: FollowedItemData): FollowResult;
            /** The FollowItem method is reserved for server-to-server use only.
                The server sets the specified item to be followed by the current user.
                This method cannot be called from the client. */
            followItem(item: FollowedItem): FollowResult;
            /** Removes the specified document or site from list of followed content.
                @param url  URL that identifies the item to stop following.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            stopFollowing(url: string): void;
            /** Determines if the specified document or site is being followed.
                @param url  URL that identifies the item that is supposed to be followed.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            isFollowed(url: string): SP.BooleanResult;
            /** Retrieves the followed status of the specified document or site.
                Returns a value of type FollowedStatus, wrapped into a SP.IntResult object.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            getFollowedStatus(url: string): SP.IntResult;
            /** Returns the followed item identified by a given URL or returns null if the item does not exist.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            getItem(url: string): FollowedItem;
            /** Returns an array of zero or more followed items described by the type and subtype parameters.
                @param options Describes the type of item to return.
                @param subType Integer that identifies the sites to return by the web template. */
            getItems(options: FollowedContentQueryOptions, subtype: number): FollowedItem[];
            /** Updates the properties for followed item with specified URL.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId>
                @param data Application-defined data stored with the followed item. */
            updateData(url: string, data: FollowedItemData): void;
            /** Returns the refreshed item that is being pointed to in the Social list.
                @param item The original item as stored in the Followed Content list. */
            refreshFollowedItem(item: FollowedItem): FollowedItem;
            /** Finds the original item that is being pointed to in the Followed Content list and updates the Title, Url, and IconUrl fields if they have been changed.
                @param url The URL of the original item as stored in the Followed Content list. */
            findAndUpdateFollowedItem(url: string): FollowedItem;
        }

        /** Represents a followed content resource. */
        export class FollowedItem extends SP.ClientValueObject {
            /** Additional metadata associated with this item */
            get_data(): { [name: string]: any; };
            /** Additional metadata associated with this item */
            set_data(value: { [name: string]: any; }): { [name: string]: any; };
            /** Specifies the type of the file if this item is a file. Otherwise, this property is the empty string. */
            get_fileType(): string;
            /** Specifies the type of the file if this item is a file. Otherwise, this property is the empty string. */
            set_fileType(value: string): string;
            /** Provides information about the application that opens a followed document. */
            get_fileTypeProgid(): string;
            /** Provides information about the application that opens a followed document. */
            set_fileTypeProgid(value: string): string;
            /** Specifies additional information about the followed item.
                The server stores the data so that it can return it to the client. */
            get_flags(): string;
            /** Specifies additional information about the followed item.
                The server stores the data so that it can return it to the client. */
            set_flags(value: string): string;
            /** Indicates whether the followed site has a feed. */
            get_hasFeed(): boolean;
            /** Indicates whether the followed site has a feed. */
            set_hasFeed(value: boolean): boolean;
            /** Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed. */
            get_hidden(): boolean;
            /** Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed. */
            set_hidden(value: boolean): boolean;
            /** Specifies the URL of an icon to represent this item. */
            get_iconUrl(): string;
            /** Specifies the URL of an icon to represent this item. */
            set_iconUrl(value: string): string;
            /** Specifies the identification for this item in the Content database. */
            get_itemId(): number;
            /** Specifies the identification for this item in the Content database. */
            set_itemId(value: number): number;
            /** Specifies the type of this item. */
            get_itemType(): FollowedItemType;
            /** Specifies the type of this item. */
            set_itemType(value: FollowedItemType): FollowedItemType;
            /** The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
                If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified. */
            get_listId(): string;
            /** The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
                If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified. */
            set_listId(value: string): string;
            /** Specifies the URL of this item's parent list or web. */
            get_parentUrl(): string;
            /** Specifies the URL of this item's parent list or web. */
            set_parentUrl(value: string): string;
            /** Provides information about the followed document to the application that opens it. */
            get_serverUrlProgid(): string;
            /** Provides information about the followed document to the application that opens it. */
            set_serverUrlProgid(value: string): string;
            /** Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site. */
            get_siteId(): string;
            /** Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site. */
            set_siteId(value: string): string;
            /** Specifies the subtype of this item.
                If the ItemType is Site, the Subtype specifies the web template identification.
                If the ItemType is Document, the Subtype has a value of 1. */
            get_subtype(): number;
            /** Specifies the subtype of this item.
                If the ItemType is Site, the Subtype specifies the web template identification.
                If the ItemType is Document, the Subtype has a value of 1. */
            set_subtype(value: number): number;
            /** Specifies the item of this item */
            get_title(): string;
            /** Specifies the item of this item */
            set_title(value: string): string;
            /** Specifies the GUID for this item in the Content database. */
            get_uniqueId(): SP.Guid;
            /** Specifies the GUID for this item in the Content database. */
            set_uniqueId(value: SP.Guid): SP.Guid;
            /** Specifies the URL of this item. */
            get_url(): string;
            /** Specifies the URL of this item. */
            set_url(value: string): string;
            /** Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document. */
            get_webId(): SP.Guid;
            /** Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document. */
            set_webId(value: SP.Guid): any;
        }

        export enum FollowedItemType {
            unknown,
            document,
            site,
            all
        }

        export enum FollowedContentExceptionType {
            itemAlreadyExists,
            itemDoesNotExist,
            invalidQueryString,
            invalidSubtypeValue,
            unsupportedItemType,
            followLimitReached,
            untrustedSource,
            unsupportedSite,
            internalError
        }

        export enum FollowedContentQueryOptions {
            unset,
            sites,
            documents,
            hidden,
            nonFeed,
            defaultOptions,
            all
        }

        export enum FollowedStatus {
            followed,
            notFollowed,
            notFollowable
        }


        /** Contains additional data that can be attached to a FollowedItem object */
        export class FollowedItemData extends SP.ClientObject {
            /** An unordered collection of key/value pairs for custom properties to be set on the item. */
            get_properties(): { [name: string]: any; };
        }

        /** Returns information about a request to follow an item. */
        export class FollowResult extends SP.ClientValueObject {
            /** Contains the item being followed. */
            get_item(): FollowedItem;
            /** Provides information about the attempt to follow an item. */
            get_resultType(): FollowResultType;
        }

        export enum FollowResultType {
            /** Result is unknown */
            unknown,
            /** The request succeeded and the item is being followed. */
            followed,
            /** The item was already being followed by the current user so there is no change in status. */
            refollowed,
            /** The request encountered the maximum follow limit. */
            hitFollowLimit,
            /** The request failed. */
            failed
        }

        /** Represents a set of user profile properties for a specified user. */
        export class UserProfilePropertiesForUser extends SP.ClientObject {
            /** Creates new UserProfilePropertiesForUser object
                @param context Specifies the client context to use.
                @param accountName Specifies the user by account name.
                @param propertyNames Specifies an array of strings that specify the properties to retrieve. */
            constructor(context: SP.ClientContext, accountName: string, propertyNames: string[]);

            /** Specifies the user account name */
            get_accountName(): string;
            /** Specifies the user account name */
            set_accountName(value: string): string;
            /** Gets an array of strings that specify the user profile property names. */
            getPropertyNames(): string[];
        }
    }

}

declare namespace SP {

    export module Utilities {
        export class Utility {
            lAYOUTS_LATESTVERSION_RELATIVE_URL: string;
            lAYOUTS_LATESTVERSION_URL: string;
            static get_layoutsLatestVersionRelativeUrl(): string;
            static get_layoutsLatestVersionUrl(): string;
            static getLayoutsPageUrl(pageName: string): string;
            static getImageUrl(imageName: string): string;
            static createWikiPageInContextWeb(context: SP.ClientRuntimeContext, parameters: SP.Utilities.WikiPageCreationInformation): SP.File;
            static localizeWebPartGallery(context: SP.ClientRuntimeContext, items: SP.ListItemCollection): SP.ClientObjectList<SP.ListItem>;
            static getAppLicenseInformation(context: SP.ClientRuntimeContext, productId: SP.Guid): SP.AppLicenseCollection;
            static importAppLicense(context: SP.ClientRuntimeContext, licenseTokenToImport: string, contentMarket: string, billingMarket: string, appName: string, iconUrl: string, providerName: string, appSubtype: number): void;
            static getAppLicenseDeploymentId(context: SP.ClientRuntimeContext): SP.GuidResult;
            static logCustomAppError(context: SP.ClientRuntimeContext, error: string): SP.IntResult;
            static logCustomRemoteAppError(context: SP.ClientRuntimeContext, productId: SP.Guid, error: string): SP.IntResult;
            static getLocalizedString(context: SP.ClientRuntimeContext, source: string, defaultResourceFile: string, language: number): SP.StringResult;
            static createNewDiscussion(context: SP.ClientRuntimeContext, list: SP.List, title: string): SP.ListItem;
            static createNewDiscussionReply(context: SP.ClientRuntimeContext, parent: SP.ListItem): SP.ListItem;
            static markDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
            static unmarkDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
            static searchPrincipals(context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, maxCount: number): SP.Utilities.PrincipalInfo[];
            static getCurrentUserEmailAddresses(context: SP.ClientRuntimeContext): SP.StringResult;
            static createEmailBodyForInvitation(context: SP.ClientRuntimeContext, pageAddress: string): SP.StringResult;
            static getPeoplePickerURL(context: SP.ClientRuntimeContext, web: SP.Web, fieldUser: SP.FieldUser): SP.StringResult;
            static resolvePrincipal(context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, inputIsEmailOnly: boolean): SP.Utilities.PrincipalInfo;
            static getLowerCaseString(context: SP.ClientRuntimeContext, sourceValue: string, lcid: number): SP.StringResult;
            static formatDateTime(context: SP.ClientRuntimeContext, web: SP.Web, datetime: Date, format: SP.Utilities.DateTimeFormat): SP.StringResult;
            static isUserLicensedForEntityInContext(context: SP.ClientRuntimeContext, licensableEntity: string): SP.BooleanResult;
        }
        export enum DateTimeFormat {
            dateTime,
            dateOnly,
            timeOnly,
            iSO8601,
            monthDayOnly,
            monthYearOnly,
            longDate,
            unknownFormat,
        }
        export class EmailProperties extends SP.ClientValueObject {
            get_additionalHeaders(): any;
            set_additionalHeaders(value: any): void;
            get_bCC(): string[];
            set_bCC(value: string[]): void;
            get_body(): string;
            set_body(value: string): void;
            get_cC(): string[];
            set_cC(value: string[]): void;
            get_from(): string;
            set_from(value: string): void;
            get_subject(): string;
            set_subject(value: string): void;
            get_to(): string[];
            set_to(value: string[]): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum IconSize {
            size16,
            size32,
            size256,
        }
        export enum LogAppErrorResult {
            success,
            errorsThrottled,
            accessDenied,
        }
        export class PrincipalInfo extends SP.ClientValueObject {
            get_department(): string;
            get_displayName(): string;
            get_email(): string;
            get_jobTitle(): string;
            get_loginName(): string;
            get_mobile(): string;
            get_principalId(): number;
            get_principalType(): SP.Utilities.PrincipalType;
            get_sIPAddress(): string;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum PrincipalSource {
            none,
            userInfoList,
            windows,
            membershipProvider,
            roleProvider,
            all,
        }
        export enum PrincipalType {
            none,
            user,
            distributionList,
            securityGroup,
            sharePointGroup,
            all,
        }
        export enum SPWOPIFrameAction {
            view,
            edit,
            mobileView,
            interactivePreview,
        }
        export class WikiPageCreationInformation extends SP.ClientValueObject {
            get_serverRelativeUrl(): string;
            set_serverRelativeUrl(value: string): void;
            get_wikiHtmlContent(): string;
            set_wikiHtmlContent(value: string): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class DateUtility {
            static isLeapYear(year: number): boolean;
            static dateToJulianDay(year: number, month: number, day: number): number;
            static julianDayToDate(julianDay: number): SP.DateTimeUtil.SimpleDate;
            static daysInMonth(year: number, month: number): number;
        }
        export class HttpUtility {
            /** Official version of STSHtmlEncode. Calls it internally. */
            static htmlEncode(stringToEncode: string): string;
            static urlPathEncode(stringToEncode: string): string;
            static urlKeyValueEncode(keyOrValueToEncode: string): string;
            static ecmaScriptStringLiteralEncode(scriptLiteralToEncode: string): string;
            static navigateTo(url: string): void;
            /** Appends correct "Source" parameter to the specified url, and then navigates to this url.
                "Source" parameter is recognized in many places in SharePoint, usually to determine "Cancel" behavior. */
            static appendSourceAndNavigateTo(url: string): void;
            static escapeXmlText(stringToEscape: string): string;
            static navigateHttpFolder(urlSrc: string, frameTarget: string): void;
        }
        export class UrlBuilder {
            constructor(path: string);
            static urlCombine(path1: string, path2: string): string;
            static replaceOrAddQueryString(url: string, key: string, value: string): string;
            static removeQueryString(url: string, key: string): string;
            combinePath(path: string): void;
            addKeyValueQueryString(key: string, value: string): void;
            /** Returns the resulting url */
            get_url(): string;
            /** Same as get_url() */
            toString(): string;
        }

        export class LocUtility {
            static getLocalizedCountValue(locText: string, intervals: string, count: number): string;
        }

        export class VersionUtility {
            static get_layoutsLatestVersionRelativeUrl(): string;
            static get_layoutsLatestVersionUrl(): string;
            static getLayoutsPageUrl(pageName: string): string;
            static getImageUrl(imageName: string): string;
        }

    }

    export module DateTimeUtil {
        export class SimpleDate {
            constructor(year: number, month: number, day: number, era: number);
            get_year(): number;
            set_year(value: number): void;
            get_month(): number;
            set_month(value: number): void;
            get_day(): number;
            set_day(value: number): void;
            get_era(): number;
            set_era(value: number): void;
            static dateEquals(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateLessEqual(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateGreaterEqual(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateLess(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateGreater(date1: SimpleDate, date2: SimpleDate): boolean;
        }
    }
}

declare namespace SP {
    export module WebParts {
        export class LimitedWebPartManager extends SP.ClientObject {
            get_hasPersonalizedParts(): boolean;
            get_scope(): SP.WebParts.PersonalizationScope;
            get_webParts(): SP.WebParts.WebPartDefinitionCollection;
            addWebPart(webPart: SP.WebParts.WebPart, zoneId: string, zoneIndex: number): SP.WebParts.WebPartDefinition;
            importWebPart(webPartXml: string): SP.WebParts.WebPartDefinition;
        }
        export enum PersonalizationScope {
            user,
            shared,
        }
        export class TileData extends SP.ClientValueObject {
            get_backgroundImageLocation(): string;
            set_backgroundImageLocation(value: string): void;
            get_description(): string;
            set_description(value: string): void;
            get_iD(): number;
            set_iD(value: number): void;
            get_linkLocation(): string;
            set_linkLocation(value: string): void;
            get_tileOrder(): number;
            set_tileOrder(value: number): void;
            get_title(): string;
            set_title(value: string): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class WebPart extends SP.ClientObject {
            get_hidden(): boolean;
            set_hidden(value: boolean): void;
            get_isClosed(): boolean;
            get_properties(): SP.PropertyValues;
            get_subtitle(): string;
            get_title(): string;
            set_title(value: string): void;
            get_titleUrl(): string;
            set_titleUrl(value: string): void;
            get_zoneIndex(): number;
        }
        export class WebPartDefinition extends SP.ClientObject {
            get_id(): SP.Guid;
            get_webPart(): SP.WebParts.WebPart;
            saveWebPartChanges(): void;
            closeWebPart(): void;
            openWebPart(): void;
            deleteWebPart(): void;
            moveWebPartTo(zoneID: string, zoneIndex: number): void;
        }
        export class WebPartDefinitionCollection extends SP.ClientObjectCollection<WebPartDefinition> {
            itemAt(index: number): SP.WebParts.WebPartDefinition;
            get_item(index: number): SP.WebParts.WebPartDefinition;
            getById(id: SP.Guid): SP.WebParts.WebPartDefinition;
            getByControlId(controlId: string): SP.WebParts.WebPartDefinition;
        }
    }
}

declare namespace SP {
    export module Workflow {
        export class WorkflowAssociation extends SP.ClientObject {
            get_allowManual(): boolean;
            set_allowManual(value: boolean): void;
            get_associationData(): string;
            set_associationData(value: string): void;
            get_autoStartChange(): boolean;
            set_autoStartChange(value: boolean): void;
            get_autoStartCreate(): boolean;
            set_autoStartCreate(value: boolean): void;
            get_baseId(): SP.Guid;
            get_created(): Date;
            get_description(): string;
            set_description(value: string): void;
            get_enabled(): boolean;
            set_enabled(value: boolean): void;
            get_historyListTitle(): string;
            set_historyListTitle(value: string): void;
            get_id(): SP.Guid;
            get_instantiationUrl(): string;
            get_internalName(): string;
            get_isDeclarative(): boolean;
            get_listId(): SP.Guid;
            get_modified(): Date;
            get_name(): string;
            set_name(value: string): void;
            get_taskListTitle(): string;
            set_taskListTitle(value: string): void;
            get_webId(): SP.Guid;
            update(): void;
            deleteObject(): void;
        }
        export class WorkflowAssociationCollection extends SP.ClientObjectCollection<WorkflowAssociation> {
            itemAt(index: number): SP.Workflow.WorkflowAssociation;
            get_item(index: number): SP.Workflow.WorkflowAssociation;
            getById(associationId: SP.Guid): SP.Workflow.WorkflowAssociation;
            add(parameters: SP.Workflow.WorkflowAssociationCreationInformation): SP.Workflow.WorkflowAssociation;
            getByName(name: string): SP.Workflow.WorkflowAssociation;
        }
        export class WorkflowAssociationCreationInformation extends SP.ClientValueObject {
            get_contentTypeAssociationHistoryListName(): string;
            set_contentTypeAssociationHistoryListName(value: string): void;
            get_contentTypeAssociationTaskListName(): string;
            set_contentTypeAssociationTaskListName(value: string): void;
            get_historyList(): SP.List;
            set_historyList(value: SP.List): void;
            get_name(): string;
            set_name(value: string): void;
            get_taskList(): SP.List;
            set_taskList(value: SP.List): void;
            get_template(): SP.Workflow.WorkflowTemplate;
            set_template(value: SP.Workflow.WorkflowTemplate): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class WorkflowTemplate extends SP.ClientObject {
            get_allowManual(): boolean;
            get_associationUrl(): string;
            get_autoStartChange(): boolean;
            get_autoStartCreate(): boolean;
            get_description(): string;
            get_id(): SP.Guid;
            get_isDeclarative(): boolean;
            get_name(): string;
            get_permissionsManual(): SP.BasePermissions;
        }
        export class WorkflowTemplateCollection extends SP.ClientObjectCollection<WorkflowTemplate> {
            itemAt(index: number): SP.Workflow.WorkflowTemplate;
            get_item(index: number): SP.Workflow.WorkflowTemplate;
            getById(templateId: SP.Guid): SP.Workflow.WorkflowTemplate;
            getByName(name: string): SP.Workflow.WorkflowTemplate;
        }
    }
}

declare namespace SP.WorkflowServices {

    export enum WorkflowStatus {
        notStarted,
        started,
        suspended,
        canceling,
        canceled,
        terminated,
        completed,
        notSpecified,
        invalid
    }

    // TODO: comments, types
    export class InteropService extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty);
        static getCurrent(context: SP.ClientRuntimeContext): InteropService;
        enableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
        disableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
        startWorkflow(associationName: string, correlationId: SP.Guid, listId: SP.Guid, itemGuid: SP.Guid, workflowParameters: any): SP.GuidResult;
        cancelWorkflow(instanceId: SP.Guid): void;
    }

    /** Represents a workflow definition and associated properties. */
    export class WorkflowDefinition extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext);
        /** Url of the association form */
        get_associationUrl(): string;
        /** Url of the association form */
        set_associationUrl(value: string): string;
        get_description(): string;
        set_description(value: string): string;
        get_displayName(): string;
        set_displayName(value: string): string;
        /** Identifier for a draft version of the workflow definition */
        get_draftVersion(): string;
        /** Identifier for a draft version of the workflow definition */
        set_draftVersion(value: string): string;
        /** Defines the fields of the workflow initiation forms and association forms (CAML string)  */
        get_formField(): string;
        /** Defines the fields of the workflow initiation forms and association forms (CAML string)  */
        set_formField(value: string): string;
        get_id(): string;
        set_id(value: string): string;
        get_initiationUrl(): string;
        set_initiationUrl(value: string): string;
        /** Gets custom properties of the workflow definition */
        get_properties(): { [propertyName: string]: any; };
        /** true if the workflow definition has been published to the external workflow host; false if the workflow definition is only saved on the site  */
        get_published(): boolean;
        /** Determines whether to automatically generate an association form for this workflow.
            If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.  */
        get_requiresAssociationForm(): boolean;
        /** Determines whether to automatically generate an association form for this workflow.
            If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.  */
        set_requiresAssociationForm(value: boolean): boolean;
        /** Determines whether to automatically generate an initiation form for this workflow.
            If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.  */
        get_requiresInitiationForm(): boolean;
        /** Determines whether to automatically generate an initiation form for this workflow.
            If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.  */
        set_requiresInitiationForm(value: boolean): boolean;
        /** RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
            For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
            If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list. */
        get_restrictToScope(): string;
        /** RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
            For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
            If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list. */
        set_restrictToScope(value: string): string;
        /** RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
            Possible values include "List", "Site", the empty string, or null.  */
        get_restrictToType(): string;
        /** RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
            Possible values include "List", "Site", the empty string, or null.  */
        set_restrictToType(value: string): string;
        /** XAML definition of the workflow */
        get_xaml(): string;
        /** XAML definition of the workflow */
        set_xaml(value: string): string;
        /** This method adds a key-value pair (propertyName, value) to the workflow definition object�s property bag.  */
        setProperty(propertyName: string, value: string): void;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Represents a collection of WorkflowDefinition objects */
    export class WorkflowDefinitionCollection extends SP.ClientObjectCollection<WorkflowDefinition> {
        itemAt(index: number): WorkflowDefinition;
        get_item(index: number): WorkflowDefinition;
        /** returns SP.WorkflowDefinition class */
        get_childItemType(): any;
    }

    /** Manages workflow definitions and workflow activity authoring. */
    export class WorkflowDeploymentService extends SP.ClientObject {
        /** Returns an XML representation of a list of valid Workflow Manager Client 1.0 actions for the specified web (WorkflowInfo element). */
        getDesignerActions(web: SP.Web): SP.StringResult;
        /** Returns an XML representation of a collection of XAML class signatures for workflow definitions.
            @param lastChanges Date time value representing the latest changes; class signatures older than this time are excluded from the result set.  */
        getActivitySignatures(lastChanged: string): SP.ClientResult<any>;
        /** Saves a SharePoint workflow definition to the workflow store.  */
        saveDefinition(definition: WorkflowDefinition): SP.GuidResult;
        /** Validates the specified activity against workflow definitions in the workflow store.  */
        validateActivity(activityXaml: string): SP.StringResult;
        /** Publishes a workflow definition to the workflow store.  */
        publishDefinition(definitionId: string): void;
        /** Marks a workflow definition as deprecated. Currently running workflow instances are allowed to complete, but new instances of the workflow definition are prevented from starting.  */
        deprecateDefinition(definitionId: string): void;
        /** Deletes a workflow definition.
            @param definitionId The guid identifier of the workflow definition.  */
        deleteDefinition(definitionId: string): void;
        /** Retrieves workflow definitions from the workflow store that match the tags. */
        enumerateDefinitions(publishedOnly: boolean): WorkflowDefinitionCollection;
        /** Retrieves a specified workflow definition from the workflow store.
            @param definitionId The guid identifier of the workflow definition.  */
        getDefinition(definitionId: string): WorkflowDefinition;
        /** Saves the collateral file of a workflow definition.
            @param workflowDefinitionId The guid identifier of the workflow definition.*/
        saveCollateral(workflowDefinitionId: string, leafFileName: string, fileContent: Base64EncodedByteArray): void;
        /** Deletes the URL of a workflow definition's collateral file.
            @param workflowDefinitionId The guid identifier of the workflow definition.  */
        deleteCollateral(workflowDefinitionId: string, leafFileName: string): void;
        /** Retrieves the URL of the collateral file of the workflow definition.
            @param workflowDefinitionId The guid identifier of the workflow definition.
            @param leafFileName The leaf name of the collateral file. */
        getCollateralUri(workflowDefinitionId: string, leafFileName: string): SP.StringResult;
        /** Packages a single workflow definition into a SharePoint solution package (.wsp file) and saves the package to the Site Assets library.
            Returns the URL of the package file in the Site Asset library.
            Remarks:
            1. This method does not activate the package.
            2. If a package with the same name already exists in the Site Assets library, the method adds an integer suffix in braces to the file name, e.g. packageDefaultFilename{2}.wsp
            @param definitionId The guid identifier of the workflow definition.
            @param packageDefaultFilename The default filename to choose for the new package.
            @param packageTitle The title of the package.
            @param packageDescription The description of the package. */
        packageDefinition(definitionId: SP.Guid, packageDefaultFilename: string, packageTitle: string, packageDescription: string): SP.StringResult;
    }

    /** Represents an instance of a workflow association that performs on a list item the process that is defined in a workflow template */
    export class WorkflowInstance extends SP.ClientObject {
        /** Contains the error string or exception information if the workflow faults. */
        get_faultInfo(): string;
        /** Unique identifier (GUID) for the workflow instance */
        get_id(): string;
        /** Gets the Coordinated Universal Time (UTC) when this workflow instance was created. */
        get_instanceCreated(): string;
        /** Gets the Coordinated Universal Time (UTC) when the workflow instance state was last persisted */
        get_lastUpdated(): string;
        /** Specifies properties of this workflow instance */
        get_properties(): { [name: string]: string; };
        /** Returns runtime status of the workflow instance */
        get_status(): WorkflowStatus;
        /** Specifies the custom status set by workflow authors. */
        get_userStatus(): string;
        /** Specifies the custom status set by workflow authors. */
        set_userStatus(value: string): string;
        /** Gets the unique identifier (GUID) of the subscription that instantiates the WorkflowInstance */
        get_workflowSubscriptionId(): SP.Guid;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;

    }

    /** Represents a collection of WorkflowInstance objects */
    export class WorkflowInstanceCollection extends SP.ClientObjectCollection<WorkflowInstance> {
        itemAt(index: number): WorkflowInstance;
        get_item(index: number): WorkflowInstance;
        /** returns SP.WorkflowInstance class */
        get_childItemType(): any;
    }

    /** Reads the SharePoint workflow instances from the external workflow host and manages the instance execution. */
    export class WorkflowInstanceService extends SP.ClientObject {
        /** Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
            Returns GUID of the instance object.
            @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance. */
        startWorkflow(subscription: WorkflowSubscription, payload: { [name: string]: any; }): SP.GuidResult;
        /** Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
            Returns GUID of the instance object.
            @param subscription The subscription associated with the workflow instance.
            @param itemId The integer id of the list item on which to start the workflow instance.
            @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance. */
        startWorkflowOnListItem(subscription: WorkflowSubscription, itemId: number, payload: { [name: string]: any; }): SP.GuidResult;
        /** Gets workflow instance specified by the provided instance GUID */
        getInstance(instanceId: string): WorkflowInstance;
        /** Gets a workflow instance collection comprising the 100 most recent workflow instances started by a specified subscription.  */
        enumerate(parentSubscription: WorkflowSubscription): WorkflowInstanceCollection;
        /** Gets a workflow instance collection comprising 100 workflow instances starting at the specified offset.  */
        enumerateWithOffset(parentSubscription: WorkflowSubscription, offset: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the specified list item. */
        enumerateInstancesForListItem(listId: string, itemId: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the specified list item. */
        enumerateInstancesForListItemWithOffset(listId: string, itemId: number, offset: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the current site. */
        enumerateInstancesForSite(): WorkflowInstanceCollection;
        /** Gets the list of instances for the current site. */
        enumerateInstancesForSiteWithOffset(offset: number): WorkflowInstanceCollection;
        /** Retrieves a count of all the instances of the specified WorkflowSubscription. */
        countInstances(parentSubscription: WorkflowSubscription): SP.IntResult;
        /** Retrieves a count of the instances of the specified WorkflowSubscription that have a specified status. */
        countInstancesWithStatus(parentSubscription: WorkflowSubscription, status: WorkflowStatus): SP.IntResult;
        /** Sends a cancel message to the specified workflow instance and permits the instance to execute a cancellation scope. */
        cancelWorkflow(instance: WorkflowInstance): void;
        /** Terminate a workflow instance forcefully by deleting it from memory. The instance is not allowed to execute a cancellation scope */
        terminateWorkflow(instance: WorkflowInstance): void;
        suspendWorkflow(instance: WorkflowInstance): void;
        resumeWorkflow(instance: WorkflowInstance): void;
        /** Sends a custom event to a running workflow with the event payload. */
        publishCustomEvent(instance: WorkflowInstance, eventName: string, payload: string): void;
        getDebugInfo(instance: WorkflowInstance): SP.StringResult;
    }

    /** Describes the workflow host configuration states and provides service objects that interact with the workflow */
    export class WorkflowServicesManager extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, web: SP.Web);
        static newObject(context: SP.ClientRuntimeContext, web: SP.Web): WorkflowServicesManager;
        /** The current application identifier.*/
        get_appId(): string;
        /** Indicates whether this workflow service is actively connected to a workflow host. */
        get_isConnected(): boolean;
        /** Returns the path of the current scope in the workflow host. */
        get_scopePath(): string;
        getWorkflowDeploymentService(): WorkflowDeploymentService;
        getWorkflowInstanceService(): WorkflowInstanceService;
        getWorkflowInteropService(): InteropService;
        getWorkflowSubscriptionService(): WorkflowSubscriptionService;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Base class representing subscriptions for the external workflow host. */
    export class WorkflowSubscription extends SP.ClientObject {
        /** Gets the unique ID of the workflow definition to activate. */
        get_definitionId(): SP.Guid;
        /** Sets the unique ID of the workflow definition to activate. */
        set_definitionId(value: SP.Guid): SP.Guid;
        /** Gets a boolean value that specifies if the workflow subscription is enabled.
            When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.  */
        get_enabled(): boolean;
        /** Sets a boolean value that enables or disables the workflow subscription.
            When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.  */
        set_enabled(value: boolean): boolean;
        /** Gets the logical source instance name of the event. (GUID) */
        get_eventSourceId(): string;
        /** Sets the logical source instance name of the event. (GUID) */
        set_eventSourceId(value: string): string;
        /** Gets or sets the list of event types for which the subscription is listening.
            For SharePoint events, these will map to a value in the SPEventReceiverType enumeration. */
        get_eventTypes(): string[];
        /** Gets or sets the list of event types for which the subscription is listening.
            For SharePoint events, these will map to a value in the SPEventReceiverType enumeration. */
        set_eventTypes(value: string[]): string[];
        /** Unique identifier (GUID) of the workflow subscription */
        get_id(): string;
        /** Unique identifier (GUID) of the workflow subscription */
        set_id(value: string): string;
        /** Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.  */
        get_manualStartBypassesActivationLimit(): boolean;
        /** Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.  */
        set_manualStartBypassesActivationLimit(value: boolean): boolean;
        /** Gets the name of the workflow subscription for the specified event source.  */
        get_name(): string;
        /** Sets the name of the workflow subscription for the specified event source.  */
        set_name(value: string): string;
        /** Gets the properties and values to pass to the workflow definition when the subscription is matched. */
        get_propertyDefinitions(): any;
        /** Gets the name of the workflow status field on the specified list.  */
        get_statusFieldName(): string;
        /** Gets or sets the name of the workflow status field on the specified list.  */
        set_statusFieldName(value: string): string;
        /** Sets the name-value pairs for workflow definition initiation parameters that are stored in the PropertyDefinitions property  */
        setProperty(propertyName: string, value: string): void;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Represents a collection of WorkflowSubscription objects */
    export class WorkflowSubscriptionCollection extends SP.ClientObjectCollection<WorkflowSubscription> {
        itemAt(index: number): WorkflowSubscription;
        get_item(index: number): WorkflowSubscription;
        /** returns SP.WorkflowInstance class */
        get_childItemType(): any;
    }

    export class WorkflowSubscriptionService extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty);
        static getCurrent(context: SP.ClientRuntimeContext): WorkflowSubscriptionService;
        /** Creates a workflow subscription for a workflow, and returns the unique identifier of the new subscription. */
        publishSubscription(subscription: WorkflowSubscription): SP.GuidResult;
        /** Creates a workflow subscription for a workflow and if necessary an event receiver on the specified list.
            Also writes an EventSourceId that matches the list as the event source.
            Returns the unique identifier of the new subscription.
            @param listId Unique identifier (GUID) for the specified list. */
        publishSubscriptionForList(subscription: WorkflowSubscription, listId: string): SP.GuidResult;
        /** Ensures that an event receiver will monitor a list for the specified event.
            @param listId Unique identifier (GUID) for the specified list.
            @eventName eventName The name of the event to be monitored. */
        registerInterestInList(listId: string, eventName: string): void;
        /** Removes monitoring for an event receiver on the specified list with the specified event.
            @param listId GUID of the list containing the event receiver to be unregistered.
            @eventName eventName The name of the event to be removed. */
        unregisterInterestInList(listId: string, eventName: string): void;
        getSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
        deleteSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
        /** Retrieves workflow subscriptions that contains all of the workflow subscriptions on the Web  */
        enumerateSubscriptions(): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on workflow definition */
        enumerateSubscriptionsByDefinition(definitionId: string): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on the specified EventSourceId */
        enumerateSubscriptionsByEventSource(eventSourceId: string): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on the specified list.
            @param listId The unique identifier (GUID) of the list on which to filter the subscriptions. */
        enumerateSubscriptionsByList(listId: string): WorkflowSubscriptionCollection;
    }

}



declare namespace SP {
    export module Publishing {
        export class PublishingWeb extends ClientObject {
            static getPublishingWeb(context: ClientContext, web: Web): PublishingWeb;

            public get_web(): Web;
            public addPublishingPage(pageInformation: PublishingPageInformation): PublishingPage;
        }

        export class PublishingPageInformation extends ClientValueObject {

            public get_folder(): Folder;
            public set_folder(value: Folder): Folder;

            public get_name(): string;
            public set_name(value: string): string;

            public get_pageLayoutListItem(): ListItem;
            public set_pageLayoutListItem(value: ListItem): ListItem;
        }

        export class PublishingPage extends ScheduledItem {
            static getPublishingPage(context: ClientContext, sourceListItem: ListItem): PublishingPage;
            public addFriendlyUrl(friendlyUrlSegment: string, editableParent: Navigation.NavigationTermSetItem, doAddToNavigation: boolean): StringResult;
        }

        export class ScheduledItem extends ClientObject {
            public get_listItem(): ListItem;

            public get_startDate(): Date;
            public set_startDate(value: Date): Date;

            public get_endDate(): Date;
            public set_endDate(value: Date): Date;

            public schedule(approvalComment: string): void;
        }

        export class PublishingSite extends ClientObject {
            static createPageLayout(context: ClientContext, parameters: PageLayoutCreationInformation): void;
        }

        export class PageLayoutCreationInformation extends ClientValueObject {
            public get_web(): Web;
            public set_web(value: Web): Web;

            public get_associatedContentTypeId(): string;
            public set_associatedContentTypeId(value: string): string;

            public get_masterPageUrl(): string;
            public set_masterPageUrl(value: string): string;

            public get_newPageLayoutNameWithoutExtension(): string;
            public set_newPageLayoutNameWithoutExtension(value: string): string;

            public get_newPageLayoutEditablePath(): string;
            public set_newPageLayoutEditablePath(value: string): string;
        }

        export class SiteServicesAddins {
            static getSettings(context: ClientContext, addinId: Guid): AddinSettings;
            static setSettings(context: ClientContext, addin: AddinSettings): void;
            static deleteSettings(context: ClientContext, addinId: Guid): void;

            static getPlugin(context: ClientContext, pluginName: string): AddinPlugin;
            static setPlugin(context: ClientContext, addin: AddinPlugin): void;
            static deletePlugin(context: ClientContext, pluginName: string): void;
        }

        export class AddinSettings extends ClientObject {
            constructor(ctx: ClientContext, id: Guid);

            public get_id(): Guid;

            public get_title(): string;
            public set_title(value: string): string;

            public get_description(): string;
            public set_description(value: string): string;

            public get_enabled(): boolean;
            public set_enabled(value: boolean): boolean;

            public get_namespace(): boolean;
            public set_namespace(value: boolean): boolean;

            public get_headScript(): string;
            public set_headScript(value: string): string;

            public get_htmlStartBody(): string;
            public set_htmlStartBody(value: string): string;

            public get_htmlEndBody(): string;
            public set_htmlEndBody(value: string): string;

            public get_metaTagPagePropertyMappings(): { [key: string]: string };
            public set_metaTagPagePropertyMappings(value: { [key: string]: string }): { [key: string]: string };

        }

        export class AddinPlugin extends ClientObject {
            constructor(ctx: ClientContext);

            public get_description(): string;
            public set_description(value: string): string;

            public get_markup(): string;
            public set_markup(value: string): string;

            public get_title(): string;
            public set_title(value: string): string;
        }


        export class DesignPackage {
            static install(context: ClientContext, site: Site, info: DesignPackageInfo, path: string): void;
            static uninstall(context: ClientContext, site: Site, info: DesignPackageInfo): void;
            static apply(context: ClientContext, site: Site, info: DesignPackageInfo): void;
            static exportEnterprise(context: ClientContext, site: Site, includeSearchConfiguration: boolean): ClientResult<DesignPackageInfo>;
            static exportSmallBusiness(context: ClientContext, site: Site, packageName: string, includeSearchConfiguration: boolean): ClientResult<DesignPackageInfo>;
        }

        export class DesignPackageInfo extends ClientValueObject {
            public get_packageName(): string;
            public set_packageName(value: string): string;

            public get_packageGuid(): Guid;
            public set_packageGuid(value: Guid): Guid;

            public get_majorVersion(): number;
            public set_majorVersion(value: number): number;

            public get_minorVersion(): number;
            public set_minorVersion(value: number): number;
        }

        export class SiteImageRenditions {
            static getRenditions(context: ClientContext): ImageRendition[];
            static setRenditions(context: ClientContext, renditions: ImageRendition[]): void;
        }

        export class ImageRendition extends ClientValueObject {
            public get_id(): number;
            public get_version(): number;

            public get_name(): string;
            public set_name(value: string): string;

            public get_width(): number;
            public set_width(value: number): number;

            public get_height(): number;
            public set_height(value: number): number;
        }

        export class Variations extends ClientObject {
            static getLabels(context: ClientContext): ClientObjectList<VariationLabel>;
            static getPeerUrl(context: ClientContext, currentUrl: string, labelTitle: string): StringResult;
            static updateListItems(context: ClientContext, listId: Guid, itemIds: number[]): void;
        }

        export class VariationLabel extends ClientObject {
            public get_displayName(): string;
            public set_displayName(value: string): string;

            public get_isSource(): boolean;
            public set_isSource(value: boolean): boolean;

            public get_language(): string;
            public set_language(value: string): string;

            public get_locale(): string;
            public set_locale(value: string): string;

            public get_title(): string;
            public set_title(value: string): string;

            public get_topWebUrl(): string;
            public set_topWebUrl(value: string): string;
        }

        export class CustomizableString extends ClientObject {
            public get_defaultValue(): string;

            public get_value(): string;
            public set_value(value: string): string;

            public get_usesDefaultValue(): boolean;
            public set_usesDefaultValue(value: boolean): boolean;

        }


        export module Navigation {
            export enum NavigationLinkType {
                root,
                friendlyUrl,
                simpleLink
            }

            export enum StandardNavigationSource {
                unknown,
                portalProvider,
                taxonomyProvider,
                inheritFromParentWeb
            }

            export class NavigationTermSetItem extends ClientObject {
                public get_id(): Guid;

                public get_isReadOnly(): boolean;

                public get_linkType(): NavigationLinkType;
                public set_linkType(value: NavigationLinkType): NavigationLinkType;

                public get_targetUrlForChildTerms(): CustomizableString;

                public get_catalogTargetUrlForChildTerms(): CustomizableString;

                public get_taxonomyName(): string;

                public get_title(): CustomizableString;

                public get_terms(): NavigationTermCollection;

                public get_view(): NavigationTermSetView;

                public createTerm(termName: string, linkType: NavigationLinkType, termId: Guid): Taxonomy.Term;

                public getTaxonomyTermStore(): Taxonomy.TermStore;

                public getResolvedDisplayUrl(browserQueryString: string): StringResult;
            }

            export class NavigationTermCollection extends ClientObjectCollection<NavigationTerm> {

            }

            export class NavigationTerm extends NavigationTermSetItem {
                public get_associatedFolderUrl(): string;
                public set_associatedFolderUrl(value: string): string;

                public get_catalogTargetUrl(): CustomizableString;

                public get_categoryImageUrl(): string;
                public set_categoryImageUrl(value: string): string;

                public get_excludedProviders(): NavigationTermProviderNameCollection;

                public get_excludeFromCurrentNavigation(): boolean;
                public set_excludeFromCurrentNavigation(value: boolean): boolean;

                public get_excludeFromGlobalNavigation(): boolean;
                public set_excludeFromGlobalNavigation(value: boolean): boolean;

                public get_friendlyUrlSegment(): CustomizableString;

                public get_hoverText(): string;
                public set_hoverText(value: string): string;

                public get_isDeprecated(): boolean;
                public get_isPinned(): boolean;
                public get_isPinnedRoot(): boolean;

                public get_parent(): NavigationTerm;

                public get_simpleLinkUrl(): string;

                public set_simpleLinkUrl(value: string): string;

                public get_targetUrl(): CustomizableString;

                public get_termSet(): NavigationTermSet;

                public getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTerm;

                public getWithNewView(newView: NavigationTermSetView): NavigationTerm;

                public getResolvedTargetUrl(browserQueryString: string, remainingUrlSegments: string[]): StringResult;

                public getResolvedTargetUrlWithoutQuery(): StringResult;

                public getResolvedAssociatedFolderUrl(): StringResult;

                public getWebRelativeFriendlyUrl(): StringResult;

                public getAllParentTerms(): NavigationTermCollection;

                public getTaxonomyTerm(): Taxonomy.Term;

                public move(newParent: NavigationTermSetItem): void;

                public deleteObject(): void;

                static getAsResolvedByWeb(context: ClientContext, term: Taxonomy.Term, web: Web, siteMapProviderName: string): NavigationTerm;
                static getAsResolvedByView(context: ClientContext, term: Taxonomy.Term, view: NavigationTermSetView): NavigationTerm;
            }


            export class NavigationTermSet extends NavigationTermSetItem {
                public get_isNavigationTermSet(): boolean;
                public set_isNavigationTermSet(value: boolean): boolean;

                public get_lcid(): number;

                public get_loadedFromPersistedData(): boolean;

                public get_termGroupId(): Guid;
                public get_termStoreId(): Guid;

                public getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTermSet;

                public getWithNewView(newView: NavigationTermSetView): NavigationTermSet;

                public getTaxonomyTermSet(): Taxonomy.TermSet;

                public getAllTerms(): NavigationTermCollection;

                public findTermForUrl(url: string): NavigationTerm;

                static getAsResolvedByWeb(context: ClientContext, termSet: Taxonomy.TermSet, web: Web, siteMapProviderName: string): NavigationTermSet;
                static getAsResolvedByView(context: ClientContext, termSet: Taxonomy.TermSet, view: NavigationTermSetView): NavigationTermSet;
            }


            export class NavigationTermProviderNameCollection extends ClientObjectCollection<string> {
                public Add(item: string): void;
                public Clear(): void;
                public Remove(item: string): BooleanResult;
            }

            export class NavigationTermSetView extends ClientObject {
                constructor(context: ClientContext, web: Web, siteMapProviderName: string);

                public get_excludeDeprecatedTerms(): boolean;
                public set_excludeDeprecatedTerms(value: boolean): boolean;

                public get_excludeTermsByPermissions(): boolean;
                public set_excludeTermsByPermissions(value: boolean): boolean;

                public get_excludeTermsByProvider(): boolean;
                public set_excludeTermsByProvider(value: boolean): boolean;

                public get_serverRelativeSiteUrl(): string;

                public get_serverRelativeWebUrl(): string;

                public get_siteMapProviderName(): string;
                public set_siteMapProviderName(value: string): string;

                public get_webId(): Guid;
                public get_webTitle(): string;

                public getCopy(): NavigationTermSetView;

                static createEmptyInstance(context: ClientContext): NavigationTermSetView;
            }

            export class TaxonomyNavigation {
                static getWebNavigationSettings(context: ClientContext, web: Web): WebNavigationSettings;
                static getTermSetForWeb(context: ClientContext, web: Web, siteMapProviderName: string, includeInheritedSettings: boolean): NavigationTermSet;
                static setCrawlAsFriendlyUrlPage(context: ClientContext, navigationTerm: Taxonomy.Term, crawlAsFriendlyUrlPage: boolean): BooleanResult;
                static getNavigationLcidForWeb(context: ClientContext, web: Web): IntResult;
                static flushSiteFromCache(context: ClientContext, site: Site): void;
                static flushWebFromCache(context: ClientContext, web: Web): void;
                static flushTermSetFromCache(context: ClientContext, webForPermissions: Web, termStoreId: Guid, termSetId: Guid): void;
            }

            export class WebNavigationSettings extends ClientObject {
                constructor(context: ClientContext, web: Web);

                public get_addNewPagesToNavigation(): boolean;
                public set_addNewPagesToNavigation(value: boolean): boolean;

                public get_createFriendlyUrlsForNewPages(): boolean;
                public set_createFriendlyUrlsForNewPages(value: boolean): boolean;

                public get_currentNavigation(): StandardNavigationSettings;
                public get_globalNavigation(): StandardNavigationSettings;

                public update(taxonomySession: Taxonomy.TaxonomySession): void;
                public resetToDefaults(): void;
            }

            export class StandardNavigationSettings extends ClientObject {
                public get_termSetId(): Guid;
                public set_termSetId(value: Guid): Guid;

                public get_termStoreId(): Guid;
                public set_termStoreId(value: Guid): Guid;

                public get_source(): StandardNavigationSource;

                public set_source(value: StandardNavigationSource): StandardNavigationSource;
            }

        }
    }
}

declare namespace SP {
    export module CompliancePolicy {
        export enum SPContainerType {
            site,//: 0,
            web,//: 1,
            list//: 2
        }

        export class SPContainerId extends ClientObject {
            static createFromList(context: ClientRuntimeContext, list: List): SPContainerId;
            static createFromWeb(context: ClientRuntimeContext, web: Web): SPContainerId;
            static createFromSite(context: ClientRuntimeContext, site: Site): SPContainerId;
            static create(context: ClientRuntimeContext, containerId: any): SPContainerId;

            get_containerType(): ContentType;
            set_containerType(value: ContentType): ContentType;

            get_listId(): SP.Guid;
            set_listId(value: SP.Guid): SP.Guid;

            get_siteId(): SP.Guid;
            set_siteId(value: SP.Guid): SP.Guid;

            get_siteUrl(): string;
            set_siteUrl(value: string): string;

            get_tenantId(): SP.Guid;
            set_tenantId(value: SP.Guid): SP.Guid;

            get_title(): string;
            set_title(value: string): string;

            get_version(): any;
            set_version(value: any): any;

            get_webId(): SP.Guid;
            set_webId(value: SP.Guid): SP.Guid;

            serialize(): SP.StringResult;
        }

        export class SPPolicyAssociation extends ClientObject {

            get_allowOverride(): boolean;
            set_allowOverride(value: boolean): boolean;

            get_comment(): string;
            set_comment(value: string): string;

            get_defaultPolicyDefinitionConfigId(): any[];
            set_defaultPolicyDefinitionConfigId(value: any[]): any[];

            get_description(): string;
            set_description(value: string): string;

            get_identity(): boolean;
            set_identity(value: boolean): boolean;

            get_name(): string;
            set_name(value: string): string;

            get_policyApplyStatus(): any;
            set_policyApplyStatus(value: any): any;

            get_policyDefinitionConfigIds(): any[];
            set_policyDefinitionConfigIds(value: any[]): any[];

            get_scope(): any;
            set_scope(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenAppliedUTC(): Date;
            set_whenAppliedUTC(value: Date): Date;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyBinding extends ClientObject {

            get_identity(): any;
            set_identity(value: any): any;

            get_isExempt(): boolean;
            set_isExempt(value: boolean): boolean;

            get_mode(): any;
            set_mode(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_policyApplyStatus(): any;
            set_policyApplyStatus(value: any): any;

            get_policyAssociationConfigId(): any;
            set_policyAssociationConfigId(value: any): any;

            get_policyDefinitionConfigId(): any;
            set_policyDefinitionConfigId(value: any): any;

            get_policyRuleConfigId(): any;
            set_policyRuleConfigId(value: any): any;

            get_scope(): any;
            set_scope(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenAppliedUTC(): Date;
            set_whenAppliedUTC(value: Date): Date;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyDefinition extends ClientObject {

            get_comment(): string;
            set_comment(value: string): string;

            get_createdBy(): any;
            set_createdBy(value: any): any;

            get_defaultPolicyRuleConfigId(): any;
            set_defaultPolicyRuleConfigId(value: any): any;

            get_description(): string;
            set_description(value: string): string;

            get_enabled(): boolean;
            set_enabled(value: boolean): boolean;

            get_identity(): any;
            set_identity(value: any): any;

            get_lastModifiedBy(): any;
            set_lastModifiedBy(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_mode(): any;
            set_mode(value: any): any;

            get_scenario(): any;
            set_scenario(value: any): any;

            get_source(): any;
            set_source(value: any): any;

            get_version(): any;
            set_version(value: any): any;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;


        }

        export class SPPolicyRule extends ClientObject {

            get_comment(): string;
            set_comment(value: string): string;

            get_createdBy(): any;
            set_createdBy(value: any): any;

            get_description(): string;
            set_description(value: string): string;

            get_enabled(): boolean;
            set_enabled(value: boolean): boolean;
            get_identity(): any;
            set_identity(value: any): any;

            get_lastModifiedBy(): any;
            set_lastModifiedBy(value: any): any;

            get_mode(): any;
            set_mode(value: any): any;

            get_name(): string;
            set_name(value: string): string;

            get_policyDefinitionConfigId(): any;
            set_policyDefinitionConfigId(value: any): any;

            get_priority(): any;
            set_priority(value: any): any;

            get_ruleBlob(): any;
            set_ruleBlob(value: any): any;

            get_whenChangedUTC(): Date;
            set_whenChangedUTC(value: Date): Date;

            get_whenCreatedUTC(): Date;
            set_whenCreatedUTC(value: Date): Date;
        }

        export class SPPolicyStore extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);

            static createPolicyDefinition(context: ClientRuntimeContext): SPPolicyDefinition;
            static createPolicyBinding(context: ClientRuntimeContext): SPPolicyBinding;
            static createPolicyAssociation(context: ClientRuntimeContext): SPPolicyAssociation;
            static createPolicyRule(context: ClientRuntimeContext): SPPolicyRule;


            updatePolicyRule(policyRule: SPPolicyRule): void;

            getPolicyRule(policyRuleId: any, throwIfNull: boolean): SPPolicyRule;

            deletePolicyRule(policyRuleId: any): void;

            notifyUnifiedPolicySync(notificationId: any, syncSvcUrl: string, changeInfos: any, syncNow: boolean, fullSyncForTenant: boolean): void;

            updatePolicyDefinition(policyDefinition: SPPolicyDefinition): void;

            getPolicyDefinition(policyDefinitionId: any): SPPolicyDefinition;

            deletePolicyDefinition(policyDefinitionId: any): void;

            getPolicyDefinitions(scenario: any): ClientObjectList<SPPolicyDefinition>;

            updatePolicyBinding(policyBinding: SPPolicyBinding): void;

            getPolicyBinding(policyBindingId: any): SPPolicyBinding;

            deletePolicyBinding(policyBindingId: any): void;

            updatePolicyAssociation(policyAssociation: SPPolicyAssociation): void;

            getPolicyAssociation(policyAssociationId: any): SPPolicyAssociation;

            getPolicyAssociationForContainer(containerId: SPContainerId): SPPolicyAssociation;

            deletePolicyAssociation(policyAssociationId: any): void;
        }

        export class SPPolicyStoreProxy extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);

            get_policyStoreUrl(): string;
        }

    }

    export module Discovery {

        export enum ExportStatus {
            notStarted,//: 0,
            started,//: 1,
            complete,//: 2,
            failed//: 3
        }

        export class Case extends ClientObject {
            constructor(context: ClientRuntimeContext, web: Web);
            getExportContent(sourceIds: number[]): SP.StringResult;
        }
        export class Export extends ClientObject {
            constructor(context: ClientRuntimeContext, item: ListItem);
            get_status(): ExportStatus;
            set_status(value: ExportStatus): ExportStatus;
            update(): void;
            getExportContent(): SP.StringResult;
        }
    }

    export module InformationPolicy {
        export class ProjectPolicy extends SP.ClientObject {
            constructor(context: ClientRuntimeContext, objectPath: ObjectPath);
            get_description(): string;

            get_emailBody(): string;
            set_emailBody(value: string): string;

            get_emailBodyWithTeamMailbox(): string;
            set_emailBodyWithTeamMailbox(value: string): string;

            get_emailSubject(): string;
            set_emailSubject(value: string): string;

            get_name(): string;
            savePolicy(): void;


            static getProjectPolicies(context: ClientRuntimeContext, web: Web): ClientObjectList<ProjectPolicy>;
            static getCurrentlyAppliedProject(context: ClientRuntimeContext, web: Web): ProjectPolicy;
            static applyProjectPolicy(context: ClientRuntimeContext, web: Web, projectPolicy: ProjectPolicy): void;
            static openProject(context: ClientRuntimeContext, web: Web): void;
            static closeProject(context: ClientRuntimeContext, web: Web): void;
            static postponeProject(context: ClientRuntimeContext, web: Web): void;
            static doesProjectHavePolicy(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
            static isProjectClosed(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
            static getProjectCloseDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult;
            static getProjectExpirationDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult;
        }
    }
}
declare class SPClientAutoFill {
    static MenuOptionType: {
        Option: number;
        Footer: number;
        Separator: number;
        Loading: number;
    }

    static KeyProperty: string; //= 'AutoFillKey';
    static DisplayTextProperty: string;// = 'AutoFillDisplayText';
    static SubDisplayTextProperty: string; //= 'AutoFillSubDisplayText';
    static TitleTextProperty: string; //= 'AutoFillTitleText';
    static MenuOptionTypeProperty: string;//= 'AutoFillMenuOptionType';

    static GetAutoFillObjFromInput(elmText: HTMLInputElement): SPClientAutoFill;
    static GetAutoFillObjFromContainer(elmChild: HTMLElement): SPClientAutoFill;
    static GetAutoFillMenuItemFromOption(elmChild: HTMLElement): HTMLElement;

    constructor(elmTextId: string, elmContainerId: string, fnPopulateAutoFill: (targetElement: HTMLInputElement) => void);
    public TextElementId: string;
    public AutoFillContainerId: string;
    public AutoFillMenuId: string;
    public VisibleItemCount: number;
    public CurrentFocusOption: number;
    public AutoFillMinTextLength: number;
    public AutoFillTimeout: number;
    public AutoFillCallbackTimeoutID: string;
    public FuncOnAutoFillClose: (elmTextId: string, ojData: ISPClientAutoFillData) => void;
    public FuncPopulateAutoFill: (targetElement: HTMLElement) => void;
    public AllOptionData: { [key: string]: ISPClientAutoFillData };

    PopulateAutoFill(jsonObjSuggestions: ISPClientAutoFillData[], fnOnAutoFillCloseFuncName: (elmTextId: string, objData: ISPClientAutoFillData) => void): void;
    IsAutoFillOpen(): boolean;
    SetAutoFillHeight(): void;
    SelectAutoFillOption(elemOption: HTMLElement): void;
    FocusAutoFill(): void;
    BlurAutoFill(): void;
    CloseAutoFill(ojData: ISPClientAutoFillData): void;
    UpdateAutoFillMenuFocus(bMoveNextLink: boolean): void;
    UpdateAutoFillPosition(): void;
}

interface ISPClientAutoFillData {
    AutoFillKey?: any;
    AutoFillDisplayText?: string;
    AutoFillSubDisplayText?: string;
    AutoFillTitleText?: string;
    AutoFillMenuOptionType?: number;
}


declare class SPClientPeoplePicker {
    static ValueName: string; // = 'Key';
    static DisplayTextName: string; // = 'DisplayText';
    static SubDisplayTextName: string; // = 'Title';
    static DescriptionName: string; // = 'Description';
    static SIPAddressName: string; // = 'SIPAddress';
    static SuggestionsName: string; // = 'MultipleMatches';
    static UnvalidatedEmailAddressKey: string; // = "UNVALIDATED_EMAIL_ADDRESS";
    static KeyProperty: string; // = 'AutoFillKey';
    static DisplayTextProperty: string; // = 'AutoFillDisplayText';
    static SubDisplayTextProperty: string; // = 'AutoFillSubDisplayText';
    static TitleTextProperty: string; // = 'AutoFillTitleText';
    static DomainProperty: string; // = 'DomainText';

    static SPClientPeoplePickerDict: {
        [pickerIelementId: string]: SPClientPeoplePicker;
    };

    static InitializeStandalonePeoplePicker(clientId: string, value: ISPClientPeoplePickerEntity[], schema: ISPClientPeoplePickerSchema): void;
    static ParseUserKeyPaste(userKey: string): string;
    static GetTopLevelControl(elmChild: HTMLElement): HTMLElement;
    static AugmentEntity(entity: ISPClientPeoplePickerEntity): ISPClientPeoplePickerEntity;
    static AugmentEntitySuggestions(pickerObj: SPClientPeoplePicker, allEntities: ISPClientPeoplePickerEntity[], mergeLocal?: boolean): ISPClientPeoplePickerEntity[];
    static PickerObjectFromSubElement(elmSubElement: HTMLElement): SPClientPeoplePicker;
    static TestLocalMatch(strSearchLower: string, dataEntity: ISPClientPeoplePickerEntity): boolean;
    static BuildUnresolvedEntity(key: string, dispText: string): ISPClientPeoplePickerEntity;
    static AddAutoFillMetaData(pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[], numOpts: number): ISPClientPeoplePickerEntity[];
    static BuildAutoFillMenuItems(pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[]): ISPClientPeoplePickerEntity[];
    static IsUserEntity(entity: ISPClientPeoplePickerEntity): boolean;
    static CreateSPPrincipalType(acctStr: string): number;


    public TopLevelElementId: string; // '',
    public EditorElementId: string; //'',
    public AutoFillElementId: string; //'',
    public ResolvedListElementId: string; //'',
    public InitialHelpTextElementId: string; //'',
    public WaitImageId: string; //'',
    public HiddenInputId: string; //'',
    public AllowEmpty: boolean; //true,
    public ForceClaims: boolean; //false,
    public AutoFillEnabled: boolean; //true,
    public AllowMultipleUsers: boolean; //false,
    public OnValueChangedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public OnUserResolvedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public OnControlValidateClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    public UrlZone: SP.UrlZone; //null,
    public AllUrlZones: boolean; //false,
    public SharePointGroupID: number; //0,
    public AllowEmailAddresses: boolean; //false,
    public PPMRU: SPClientPeoplePickerMRU;
    public UseLocalSuggestionCache: boolean; //true,
    public CurrentQueryStr: string; //'',
    public LatestSearchQueryStr: string; // '',
    public InitialSuggestions: ISPClientPeoplePickerEntity[];
    public CurrentLocalSuggestions: ISPClientPeoplePickerEntity[];
    public CurrentLocalSuggestionsDict: ISPClientPeoplePickerEntity;
    public VisibleSuggestions: number; //5,
    public PrincipalAccountType: string; //'',
    public PrincipalAccountTypeEnum: SP.Utilities.PrincipalType;
    public EnabledClaimProviders: string; //'',
    public SearchPrincipalSource: SP.Utilities.PrincipalSource; //null,
    public ResolvePrincipalSource: SP.Utilities.PrincipalSource; //null,
    public MaximumEntitySuggestions: number; //30,
    public EditorWidthSet: boolean; //false,
    public QueryScriptInit: boolean; //false,
    public AutoFillControl: SPClientAutoFill; //null,
    public TotalUserCount: number; //0,
    public UnresolvedUserCount: number; //0,
    public UserQueryDict: { [index: string]: SP.StringResult };
    public ProcessedUserList: { [index: string]: SPClientPeoplePickerProcessedUser };
    public HasInputError: boolean; //false,
    public HasServerError: boolean; //false,
    public ShowUserPresence: boolean; //true,
    public TerminatingCharacter: string; //';',
    public UnresolvedUserElmIdToReplace: string; //'',
    public WebApplicationID: SP.Guid; //'{00000000-0000-0000-0000-000000000000}',
    public GetAllUserInfo(): ISPClientPeoplePickerEntity[];

    public SetInitialValue(entities: ISPClientPeoplePickerEntity[], initialErrorMsg?: string): void
    public AddUserKeys(userKeys: string, bSearch: boolean): void;
    public BatchAddUserKeysOperation(allKeys: string[], numProcessed: number): void;
    public ResolveAllUsers(fnContinuation: () => void): void;
    public ExecutePickerQuery(queryIds: string, onSuccess: (queryId: string, result: SP.StringResult) => void, onFailure: (queryId: string, result: SP.StringResult) => void, fnContinuation: () => void): void;
    public AddUnresolvedUserFromEditor(bRunQuery?: boolean): void;
    public AddUnresolvedUser(unresolvedUserObj: ISPClientPeoplePickerEntity, bRunQuery?: boolean): void;
    public UpdateUnresolvedUser(results: SP.StringResult, user: ISPClientPeoplePickerEntity): void;
    public AddPickerSearchQuery(queryStr: string): string;
    public AddPickerResolveQuery(queryStr: string): string;
    public GetPeoplePickerQueryParameters(): SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters;
    public AddProcessedUser(userObject: ISPClientPeoplePickerEntity, fResolved?: boolean): string;
    public DeleteProcessedUser(elmToRemove: HTMLElement): void;
    public OnControlValueChanged(): void;
    public OnControlResolvedUserChanged(): void;
    public EnsureAutoFillControl(): void;
    public ShowAutoFill(resultsTable: ISPClientAutoFillData[]): void;
    public FocusAutoFill(): void;
    public BlurAutoFill(): void;
    public IsAutoFillOpen(): boolean;
    public EnsureEditorWidth(): void;
    public SetFocusOnEditorEnd(): void;
    public ToggleWaitImageDisplay(bShowImage?: boolean): void;
    public SaveAllUserKeysToHiddenInput(): void;
    public GetCurrentEditorValue(): string;
    public GetControlValueAsJSObject(): ISPClientPeoplePickerEntity[];
    public GetAllUserKeys(): string;
    public GetControlValueAsText(): string;
    public IsEmpty(): boolean;
    public IterateEachProcessedUser(fnCallback: (index: number, user: SPClientPeoplePickerProcessedUser) => void): void;
    public HasResolvedUsers(): boolean;
    public Validate(): void;
    public ValidateCurrentState(): void
    public GetUnresolvedEntityErrorMessage(): string;
    public ShowErrorMessage(msg: string): void;
    public ClearServerError(): void;
    public SetServerError(): void;
    public OnControlValidate(): void;
    public SetEnabledState(bEnabled: boolean): void;
    public DisplayLocalSuggestions(): void;
    public CompileLocalSuggestions(input: string): void;
    public PlanningGlobalSearch(): boolean;
    public AddLoadingSuggestionMenuOption(): void;
    public ShowingLocalSuggestions(): boolean;
    public ShouldUsePPMRU(): boolean;
    public AddResolvedUserToLocalCache(resolvedEntity: ISPClientPeoplePickerEntity, resolveText: string): void;
}

interface ISPClientPeoplePickerSchema {
    TopLevelElementId?: string;
    EditorElementId?: string;
    AutoFillElementId?: string;
    ResolvedListElementId?: string;
    InitialHelpTextElementId?: string;
    WaitImageId?: string;
    HiddenInputId?: string;

    AllowMultipleValues?: boolean;
    Required?: boolean;
    AutoFillEnabled?: boolean;
    ForceClaims?: boolean;
    AllowEmailAddresses?: boolean;
    AllUrlZones?: boolean;
    UseLocalSuggestionCache?: boolean;
    UserNoQueryPermission?: boolean;

    VisibleSuggestions?: number;
    MaximumEntitySuggestions?: number;

    ErrorMessage?: string;
    InitialHelpText?: string;

    InitialSuggestions?: ISPClientPeoplePickerEntity[];


    UrlZone?: SP.UrlZone;
    WebApplicationID?: SP.Guid;
    SharePointGroupID?: number;

    /** Specify User, DL, SecGroup or SPGroup*/
    PrincipalAccountType?: string;

    EnabledClaimProvider?: string;
    ResolvePrincipalSource?: SP.Utilities.PrincipalSource;
    SearchPrincipalSource?: SP.Utilities.PrincipalSource;

    OnUserResolvedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
    OnValueChangedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;

    /** Number or '100%'*/
    Width?: any;

    Rows?: number;

}

declare class SPClientPeoplePickerMRU {
    static PPMRUVersion: number;// = 1;
    static MaxPPMRUItems: number;// = 200;
    static PPMRUDomLocalStoreKey: string;// = "ClientPeoplePickerMRU";
    static GetSPClientPeoplePickerMRU(): SPClientPeoplePickerMRU;

    GetItems(strKey: string): Object[];
    SetItem(strSearchTerm: string, objEntity: Object): void;
    ResetCache(): void;
}

interface ISPClientPeoplePickerEntity {
    Key?: string;
    Description?: string;
    DisplayText?: string;
    EntityType?: string;
    ProviderDisplayName?: string;
    ProviderName?: string;
    IsResolved?: boolean;
    EntityData?: {
        Title: string;
        MobilePhone: string;
        Department: string;
        Email: string;
    };
    MultipleMatches: ISPClientPeoplePickerEntity[];
    DomainText?: string;
    [key: string]: any;
}

declare class SPClientPeoplePickerProcessedUser {
    UserContainerElementId: string;// '',
    DisplayElementId: string;// '',
    PresenceElementId: string;// '',
    DeleteUserElementId: string;// '',
    SID: string;// '',
    DisplayName: string;// '',
    SIPAddress: string;// '',
    UserInfo: ISPClientPeoplePickerEntity;// null,
    ResolvedUser: boolean;// true,
    Suggestions: ISPClientAutoFillData[];// null,
    ErrorDescription: string;// '',
    ResolveText: string;// '',
    public UpdateResolvedUser(newUserInfo: ISPClientPeoplePickerEntity, strNewElementId: string): void;
    public UpdateSuggestions(entity: ISPClientPeoplePickerEntity): void;
    public BuildUserHTML(): string;
    public UpdateUserMaxWidth(): void;
    public ResolvedAsUnverifiedEmail(): string;

    static BuildUserPresenceHtml(elmId: string, strSip: string, bResolved?: boolean): string;
    static GetUserContainerElement(elmChild: HTMLElement): HTMLElement;
    static HandleProcessedUserClick(ndClicked: HTMLElement): void;
    static DeleteProcessedUser(elmToRemove: HTMLElement): void;
    static HandleDeleteProcessedUserKey(e: Event): void;
    static HandleResolveProcessedUserKey(e: Event): void;
}

declare namespace Microsoft {
    export module Office {
        export module Server {
            export module ReputationModel {
                export class Reputation {
                    constructor();
                    static setLike(context: SP.ClientContext, listId: string, itemId: number, like: boolean): void;
                    static setRating(context: SP.ClientContext, listId: string, itemId: number, rating: number): void;
                }
            }
        }
    }
}

/** Available only in SharePoint Online*/
declare namespace Define {
    export function loadScript(url: string, successCallback: () => void, errCallback: () => void): void;
    /** Loads script from _layouts/15/[req].js */
    export function require(req: string, callback: Function): void;
    /** Loads script from _layouts/15/[req].js */
    export function require(req: string[], callback: Function): void;
    export function define(name: string, deps: string[], def: Function): void;
}

/** Available only in SharePoint Online*/
declare namespace Verify {
    export function ArgumentType(arg: string, expected: any): void;
}


/** Available only in SharePoint Online*/
declare namespace BrowserStorage {
    export var local: CachedStorage;
    export var session: CachedStorage;

    /** Available only in SharePoint Online*/
    interface CachedStorage {
        getItem(key: string): string;
        setItem(key: string, value: string): void;
        removeItem(key: string): void;
        clead(): void;
        length: number;
    }
}

/** Available only in SharePoint Online*/
declare namespace BrowserDetection {
    export var browseris: Browseris;
}

/** Available only in SharePoint Online*/
declare namespace CSSUtil {
    export function HasClass(elem: HTMLElement, className: string): boolean;
    export function AddClass(elem: HTMLElement, className: string): void;
    export function RemoveClass(elem: HTMLElement, className: string): void;
    export function pxToFloat(pxString: string): number;
    export function pxToNum(px: string): number;
    export function numToPx(n: number): string;
    export function getCurrentEltStyleByNames(elem: HTMLElement, styleNames: string[]): string;
    export function getCurrentStyle(elem: HTMLElement, cssStyle: string): string;
    export function getCurrentStyleCorrect(element: HTMLElement, camelStyleName: string, dashStyleName: string): string;
    export function getOpacity(element: HTMLElement): number;
    export function setOpacity(element: HTMLElement, value: number): void;
}

/** Available only in SharePoint Online*/
declare namespace DOM {
    export var rightToLeft: boolean;
    export function cancelDefault(evt: Event): void;
    export function AbsLeft(el: HTMLElement): number;
    export function AbsTop(el: HTMLElement): number;
    export function CancelEvent(evt: Event): void;
    export function GetElementsByName(nae: string): NodeList;
    export function GetEventCoords(evt: Event): { x: number; y: number; };
    export function GetEventSrcElement(evt: Event): HTMLElement;
    export function GetInnerText(el: HTMLElement): string;
    export function PreventDefaultNavigation(evt: Event): void;
    export function SetEvent(eventName: string, eventFunc: Function, el: HTMLElement): void;
}

/** Available only in SharePoint Online*/
declare namespace Encoding {
    export function EncodeScriptQuote(str: string): string;
    export function HtmlEncode(str: string): string;
    export function HtmlDecode(str: string): string;
    export function AttrQuote(str: string): string;
    export function ScriptEncode(str: string): string;
    export function ScriptEncodeWithQuote(str: string): string;
    export function CanonicalizeUrlEncodingCase(str: string): string;
}

/** Available only in SharePoint Online*/
declare namespace IE8Support {
    export function arrayIndexOf<T>(array: T[], item: T, startIdx?: number): number;
    export function attachDOMContentLoaded(handler: Function): void;
    export function getComputedStyle(domObj: HTMLElement, camelStyleName: string, dashStyleName: string): string;
    export function stopPropagation(evt: Event): void;
}

/** Available only in SharePoint Online*/
declare namespace StringUtil {
    export function BuildParam(stPattern: string, ...params: any[]): string;
    export function ApplyStringTemplate(str: string, ...params: any[]): string;
}

/** Available only in SharePoint Online*/
declare namespace TypeUtil {
    export function IsArray(value: any): boolean;
    export function IsNullOrUndefined(value: any): boolean;
}

/** Available only in SharePoint Online*/
declare namespace Nav {
    export var ajaxNavigate: AjaxNavigate;
    export function convertRegularURLtoMDSURL(webUrl: string, fullPath: string): string;
    export function isMDSUrl(url: string): boolean;
    export function isPageUrlValid(url: string): boolean;
    export function isPortalTemplatePage(url: string): boolean;
    export function getAjaxLocationWindow(): string;
    export function getSource(defaultSource?: string): string;
    export function getUrlKeyValue(keyName: string, bNoDecode: boolean, url: string, bCaseInsensitive: boolean): string;
    export function getWindowLocationNoHash(hre: string): string;
    export function goToHistoryLink(el: HTMLAnchorElement, strVersion: string): void;
    export function getGoToLinkUrl(el: HTMLAnchorElement): string;
    export function goToLink(el: HTMLAnchorElement): void;
    export function goToLinkOrDialogNewWindow(el: HTMLAnchorElement): void;
    export function goToDiscussion(url: string): void;
    export function onClickHook(evt: Event, topElm: HTMLElement): void;
    export function pageUrlValidation(url: string, alertString: string): string;
    export function parseHash(hash: string): Object;
    export function navigate(url: string): void;
    export function removeMDSQueryParametersFromUrl(url: string): string;
    export function urlFromHashBag(hashObject: Object): string;
    export function wantsNewTab(evt: Event): boolean;
}

/** Available only in SharePoint Online*/
declare namespace URI_Encoding {
    export function encodeURIComponent(str: string, bAsUrl?: boolean, bForFilterQuery?: boolean, bForCallback?: boolean): string;
    export function escapeUrlForCallback(str: string): string;
}

interface IListItem {
    ID: number;
    ContentTypeId: string;
}

/** Available only in SharePoint Online*/
declare namespace ListModule {
    export module Util {
        export function createViewEditUrl(renderCtx: SPClientTemplates.RenderContext, listItem: IListItem, useEditFormUrl?: boolean, appendSource?: boolean): string;
        export function createItemPropertiesTitle(renderCtx: SPClientTemplates.RenderContext, listItem: IListItem): string;
        export function clearSelectedItemsDict(context: any): void;
        export function ctxInitItemState(context: any): void;
        export function getAttributeFromItemTable(itemTableParam: HTMLElement, strAttributeName: string, strAttributeOldName: string): string
        export function getSelectedItemsDict(context: any): any;
        export function removeOnlyPagingArgs(url: string): string;
        export function removePagingArgs(url: string): string;
        export function showAttachmentRows(): void;
    }
}

/** Available only in SharePoint Online*/
declare namespace SPThemeUtils {
    export function ApplyCurrentTheme(): void;
    export function WithCurrentTheme(resultCallback: Function): void;
    export function UseClientSideTheming(): boolean;
    export function Suspend(): void;
}

declare namespace SP {
    export module JsGrid {

        export enum TextDirection {
            Default, //0,
            RightToLeft, //1,
            LeftToRight //2
        }

        export enum PaneId {
            MainGrid, //0,
            PivotedGrid, //1,
            Gantt //2
        }

        export enum PaneLayout {
            GridOnly, //0,
            GridAndGantt, //1,
            GridAndPivotedGrid //2

        }
        export enum EditMode {
            ReadOnly, //0,
            ReadWrite, //1,
            ReadOnlyDefer, //2,
            ReadWriteDefer, //3,
            Defer //4
        }

        export enum GanttDrawBarFlags {
            LeftLink, //0x01,
            RightLink //0x02

        }
        export enum GanttBarDateType {
            Start, //0,
            End //1
        }

        export enum ValidationState {
            Valid, //0,
            Pending, //1,
            Invalid //2
        }

        export enum HierarchyMode {
            None, //0,
            Standard, //1,
            Grouping //2
        }

        export enum EditActorWriteType {
            Both, //1,
            LocalizedOnly, //2,
            DataOnly, //3,
            Either //4
        }

        export enum EditActorReadType {
            Both, //1,
            LocalizedOnly, //2,
            DataOnly //3
        }

        export enum EditActorUpdateType {
            Committed, //0,
            Uncommitted, //1
        }

        export enum SortMode {
            Ascending, //1,
            Descending, //-1,
            None //0
        }

        export module RowHeaderStyleId {
            export var Transfer: string; //'Transfer',
            export var Conflict: string; //'Conflict'

        }

        export module RowHeaderAutoStyleId {
            export var Dirty: string; //'Dirty',
            export var Error: string; //'Error',
            export var NewRow: string; //'NewRow'
        }

        export enum RowHeaderStatePriorities {
            Dirty, //10,
            Transfer, //30,
            CellError, //40,
            Conflict, //50,
            RowError, //60,
            NewRow //90
        }

        export enum UpdateSerializeMode {
            Cancel, //0,
            Default, //1,
            PropDataOnly, //2,
            PropLocalizedOnly, //3,
            PropBoth //4
        }

        export enum UpdateTrackingMode {
            PropData, //2,
            PropLocalized, //3,
            PropBoth //4
        }

        export module UserAction {
            export var UserEdit: string; //'User Edit':string;
            export var DeleteRecord: string; //'Delete Record':string;
            export var InsertRecord: string; //'Insert Record':string;
            export var Indent: string; //'Indent':string;
            export var Outdent: string; //'Outdent':string;
            export var Fill: string; //'Fill':string;
            export var Paste: string; //'Paste':string;
            export var CutPaste: string; //'Cut/Paste'
        }

        export enum ReadOnlyActiveState {
            ReadOnlyActive, //0,
            ReadOnlyDisabled, //1
        }

        export interface IValue {
            data?: any;
            localized?: string;
        }
        export enum SelectionTypeFlags {
            MultipleCellRanges,
            MultipleRowRanges,
            MultipleColRanges
        }


        export class JsGridControl {
            constructor(parentNode: HTMLElement, bShowLoadingBanner: boolean);
            /** Returns true if Init method has been executed successfully */
            IsInitialized(): boolean;
            /** Replaces the control TableCache object with the provided one */
            ResetData(cache: SP.JsGrid.TableCache): void;
            /** Initialize the control */
            Init(parameters: SP.JsGrid.JsGridControl.Parameters): void;
            Cleanup(): void;
            /** Removes all event handlers and markup associated with the control */
            Dispose(): void;

            // todo
            NotifyDataAvailable(): void;
            NotifySave(): void;
            NotifyHide(): void;
            NotifyResize(): void;
            ClearTableView(): void;
            HideInitialLoadingBanner(): void;
            ShowInitialGridErrorMsg(errorMsg: string): void;
            ShowGridErrorMsg(errorMsg: string): void;
            LaunchPrintView(
                additionalScriptFiles: any,
                beforeInitFnName: any,
                beforeInitFnArgsObj: any,
                title: string,
                bEnableGantt: boolean,
                optGanttDelegateNames?: any,
                optInitTableViewParamsFnName?: any,
                optInitTableViewParamsFnArgsObj?: any,
                optInitGanttStylesFnName?: any,
                optInitGanttStylesFnArgsObj?: any): void;
            GetAllDataJson(fnOnFinished: any, optFnGetCellStyleID?: any): void;
            SetTableView(tableViewParams: any): void;
            SetRowView(rowViewParam: any): void;

            /** Enable grid after Disable. */
            Enable(): void;
            /** Covers the grid with the semi-transparent panel, preventing any operations with it.
                Additionally, displays loading animated gif and optMsg as the message next to it.
                If optMsg is not specified, displays "Loading..." text. */
            Disable(optMsg?: string): void;
            /** Enables grid editing */
            EnableEditing(): void;
            /** Disables grid editing: all the records become readonly */
            DisableEditing(): void;
            /** Switches the currently selected cell into edit mode: displays edit control and sets focus into it.
                Returns true if success. */
            TryBeginEdit(): boolean;
            FinalizeEditing(fnContinue: Function, fnError: Function): void;
            /** Get diff tracker object that tracks changes to the grid data. */
            GetDiffTracker(): SP.JsGrid.Internal.DiffTracker;
            /** Moves focus to the JsGrid control */
            Focus(): void;

            /** Try saving the new record row (aka entry row) if it was edited. */
            TryCommitFirstEntryRecords(fnCommitComplete: { (): void }): void;
            /** Removes all new record rows (aka entry rows), including unsaved and even empty ones.
                The latter seems to be a bug, as I haven't found any easy way to restore the empty entry row. */
            ClearUncommitedEntryRecords(): void;
            /** Returns true if there are any unsaved new record rows (aka entry rows). */
            AnyUncommitedEntryRecords(): boolean;


            // todo
            AnyUncomittedProvisionalRecords(): boolean;

            /** Gets record based on the recordKey
                @recordKey internal unique id of a row. You can get recordKey from view index via GetRecordKeyByViewIndex method. */
            GetRecord(recordKey: number): IRecord;
            /** Get entry record with the specified key.
                Entry record is a special type of record because it represents a new record that doesn't exist yet. */
            GetEntryRecord(key: any): any;
            /** Determine if the specified record key identifies valid entry row. */
            IsEntryRecord(recordKey: number): boolean;
            /** Determine whether the specified cell is editable. */
            IsCellEditable(record: IRecord, fieldKey: string, optPaneId?: any): boolean;
            /** Adds one of builtin row state indicator icons into the row header.
                Please pass one of the values of SP.JsGrid.RowHeaderStyleId
                Row header is the leftmost gray column of the table. */
            AddBuiltInRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
            /** Adds the specified state into the row header.
                There can be several row header states for one row. Only one is shown (according to the Priority).
                Row header is the leftmost gray column of the table. */
            AddRowHeaderState(recordKey: number, rowHeaderState: SP.JsGrid.RowHeaderState): void;
            /** Removes header state with specified id from the row. */
            RemoveRowHeaderState(recordKey: number, rowHeaderStateId: string): void;

            GetCheckSelectionManager(): any;
            UpdateProperties(propertyUpdates: any, changeName: any, optChangeKey?: any): any;
            GetLastRecordKey(): string;
            InsertProvisionalRecordBefore(beforeRecordKey: number, newRecord: any, initialValues: any): any;
            InsertProvisionalRecordAfter(afterRecordKey: number, newRecord: any, initialValues: any): any;
            IsProvisionalRecordKey(recordKey: number): boolean;
            InsertRecordBefore(beforeRecordKey: number, newRecord: any, optChangeKey?: any): any;
            InsertRecordAfter(afterRecordKey: number, newRecord: any, optChangeKey?: any): any;
            InsertHiddenRecord(recordKey: number, changeKey: any, optAfterRecordKey?: any): any;
            DeleteRecords(recordKeys: any, optChangeKey?: any): any;
            IndentRecords(recordKeys: any, optChangeKey?: any): any;
            OutdentRecords(recordKeys: any, optChangeKey?: any): any;
            ReorderRecords(beginRecordKey: number, endRecordKey: number, afterRecordKey: number, bSelectAfterwards: boolean): any;
            GetContiguousRowSelectionWithoutEntryRecords(): { begin: any; end: any; keys: any };
            CanMoveRecordsUpByOne(recordKeys: any): boolean;
            CanMoveRecordsDownByOne(recordKeys: any): boolean;
            MoveRecordsUpByOne(recordKeys: any): any;
            MoveRecordsDownByOne(recordKeys: any): any;
            GetReorderRange(recordKeys: any): any;
            GetNodeExpandCollapseState(recordKey: number): any;
            ToggleExpandCollapse(recordKey: number): void;

            /** Attach event handler to a particular event type */
            AttachEvent(eventType: JsGrid.EventType, fnOnEvent: { (args: IEventArgs): void }): void;
            /** Detach a previously set event handler */
            DetachEvent(eventType: JsGrid.EventType, fnOnEvent: any): void;

            /** Set a delegate. Delegates are way to replace default functionality with custom one. */
            SetDelegate(delegateKey: JsGrid.DelegateType, fn: any): void;
            /** Get current delegate. */
            GetDelegate(delegateKey: JsGrid.DelegateType): any;

            /** Re-render the specified row in the view. */
            RefreshRow(recordKey: number): void;
            /** Re-render all rows in the view.
                It can be used e.g. if you have some custom display controls and they are rendered differently depending on some external settings.
                In this case, if you update the external settings, obviously you have to then update the view for these settings to take effect. */
            RefreshAllRows(): void;
            /** Clears undo queue, and also differencies tracker state and versions manager state. */
            ClearChanges(): void;

            GetGanttZoomLevel(): any;
            SetGanttZoomLevel(level: any): void;
            ScrollGanttToDate(date: any): void;

            /** Get top record view index.
                You can then use GetRecordKeyByViewIndex to convert this value into the recordKey. */
            GetTopRecordIndex(): number;
            /** Get number of rows displayed in the current view. */
            GetViewRecordCount(): number;
            /** Get record key for a row that is specified by the viewIdx.
                viewIdx - index of the row in the view, use GetTopRecordIndex to get the first one.
                Returns recordKey, which is a unique numeric identifier of a row within a dataset.
                Main difference between viewIdx and recordKey is that viewIdx is only unique within a view,
                e.g. if you do paging, it can be same for different records.
             */
            GetRecordKeyByViewIndex(viewIdx: number): number;
            /** Opposite to GetRecordKeyByViewIndex, resolves the view index of the record based on record key.
                recordKey - unique numeric identifier of a row in the current dataset.
                Returns viewIdx - index of the row in the current view */
            GetViewIndexOfRecord(recordKey: number): number;
            /** Get top row index. Usually returns 0.
                You can then use GetRecordKeyByViewIndex to convert this value into the recordKey. */
            GetTopRowIndex(): number;

            GetOutlineLevel(record: any): any;
            GetSplitterPosition(): any;
            SetSplitterPosition(pos: any): void;
            GetLeftColumnIndex(optPaneId?: any): any;
            EnsurePaneWidth(): void;

            /** Show a previously hidden column at a specified position.
                If atIdx is not defined, column will be shown at it's previous position. */
            ShowColumn(columnKey: string, atIdx?: number): void;
            /** Hide the specified column from grid */
            HideColumn(columnKey: string): void;
            /** Update column descriptions */
            UpdateColumns(columnInfoCollection: ColumnInfoCollection): void;
            GetColumns(optPaneId?: string): ColumnInfo[];
            /** Get ColumnInfo object by fieldKey
                @fieldKey when working with SharePoint data sources, fieldKey corresponds to field internal name */
            GetColumnByFieldKey(fieldKey: string, optPaneId?: any): ColumnInfo;
            /** Adds a column, based on the specified grid field */
            AddColumn(columnInfo: ColumnInfo, gridField: GridField): void;

            /** Switches column header in rename mode, showing textbox and thus giving the user possibility to rename this column. */
            RenameColumn(columnKey: string): void;
            /** Shows a dialog where user can reorder columns and change their widths. */
            ShowColumnConfigurationDialog(): void;


            /** Returns true, if there are any errors in the JsGrid */
            AnyErrors(): boolean;
            /** Returns true, if there are any errors in a specified row */
            AnyErrorsInRecord(recordKey: number): boolean;
            /** Set error for the specified by recordKey and fieldKey cell.
                Returns id of the error, so that later you can clear the error using this id. */
            SetCellError(recordKey: number, fieldKey: string, errorMessage: string): number;
            /** Set error for the specified by recordKey row.
                In the leftmost column of this row, exclamation mark error indicator will appear.
                Clicking on this indicator will cause the specified error message appear in form of a reddish tooltip.
                Returns id of the error, so that later you can clear the error using this id. */
            SetRowError(recordKey: number, errorMessage: string): number;
            /** Clear specified by id error that was previously set on the specified by recordKey and fieldKey cell. */
            ClearCellError(recordKey: number, fieldKey: string, id: number): void;
            /** Clear all errors in the specified cell. */
            ClearAllErrorsOnCell(recordKey: number, fieldKey: string): void;
            /** Clear specified by id error that was previously set on the specified by recordKey row. */
            ClearRowError(recordKey: number, id: number): void;
            /** Clear all errors in the specified row. */
            ClearAllErrorsOnRow(recordKey: number): void;
            /** Get error message for the specified cell.
                If many errors are set on the cell, only first is returned.
                If there are no errors in the cell, returns null. */
            GetCellErrorMessage(recordKey: number, fieldKey: string): string;
            /** Get error message for the specified row.
                If many errors are set on the row, only first is returned.
                If there are no errors in the row, returns null. */
            GetRowErrorMessage(recordKey: number): string;
            /** This method is used mostly when you have a rather tall JSGrid and you want to ensure that user sees
                that some error has occured.
                You can specify the minId or/and filter function.
                If minId is specified, method searches for an error with first id which is greater than minId.
                Scrolls to the Returns the id of the found record.
                If there aren't any errors, that satisfy the conditions, method does nothing and returns null. */
            ScrollToAndExpandNextError(minId?: number, fnFilter?: { (recordKey: number, fieldKey: string, id: number): boolean }): any;
            /** Same as ScrollToAndExpandNextError, but searches within the specified record.
                recordKey should be not null, otherwise you'll get an exception.
                bDontExpand controls whether the error tooltip will be shown (if bDontExpand=true, tooltip will not be shown). */
            ScrollToAndExpandNextErrorOnRecord(minId?: number, recordKey?: number, fnFilter?: { (recordKey: number, fieldKey: string, id: number): boolean }, bDontExpand?: boolean): any;

            GetFocusedItem(): any;
            SendKeyDownEvent(eventInfo: Sys.UI.DomEvent): any;
            /** Moves cursor to entry record (the row that is used to add new records) */
            JumpToEntryRecord(): void;

            SelectRowRange(rowIdx1: number, rowIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectColumnRange(colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectCellRange(rowIdx1: number, rowIdx2: number, colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
            SelectRowRangeByKey(rowKey1: any, rowKey2: any, bAppend: boolean, optPaneId?: string): void;
            SelectColumnRangeByKey(colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;
            SelectCellRangeByKey(recordKey1: string, recordKey2: string, colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;

            ChangeKeys(oldKey: any, newKey: any): void;
            GetSelectedRowRanges(optPaneId?: any): any;
            GetSelectedColumnRanges(optPaneId?: any): any;
            GetSelectedRanges(optPaneId?: any): any;
            MarkPropUpdateInvalid(recordKey: number, fieldKey: any, changeKey: any, optErrorMsg?: any): any;
            GetCurrentChangeKey(): any;
            CreateAndSynchronizeToNewChangeKey(): any;
            CreateDataUpdateCmd(bUseCustomInitialUpdate: boolean): any;
            IsChangeKeyApplied(changeKey: any): any;
            GetChangeKeyForVersion(version: any): any;
            TryReadPropForChangeKey(recordKey: number, fieldKey: any, changeKey: any): any;
            GetUnfilteredHierarchyMap(): any;
            GetHierarchyState(bDecompressGuidKeys: boolean): any;
            IsGroupingRecordKey(recordKey: number): boolean;
            IsGroupingColumnKey(recordKey: number): boolean;
            GetSelectedRecordKeys(bDuplicatesAllowed: boolean): any;
            /** Cut data from currently selected cells into the clipboard.
                Will not work if current selection contains entry row or readonly cells. */
            CutToClipboard(): void;
            /** Copy data from currently selected cells into the clipboard. */
            CopyToClipboard(): void;
            /** Paste data from clipboard into currently selected cells. */
            PasteFromClipboard(): void;
            TryRestoreFocusAfterInsertOrDeleteColumns(origFocus: any): void;
            /** Get undo manager for performing undo/redo operations programmatically. */
            GetUndoManager(): SP.JsGrid.CommandManager;
            /** Gets number of records visible in the current view, including the entry row. */
            GetVisibleRecordCount(): number;
            /** Returns index of the system RecordIndicatorCheckBoxColumn. If not present in the view, returns null. */
            GetRecordIndicatorCheckBoxColumnIndex(): number;
            /** Determines if the specified record is visible in the current view. */
            IsRecordVisibleInView(recordKey: number): boolean;
            GetHierarchyQueryObject(): any;
            GetSpCsrRenderCtx(): any;
        }

        export interface IChangeKey {
            Reserve(): void;
            Release(): void;
            GetVersionNumber(): number;
            CompareTo(changeKey: IChangeKey): number;
        }

        export enum EventType {
            OnCellFocusChanged,
            OnRowFocusChanged,
            OnCellEditBegin,
            OnCellEditCompleted,
            OnRightClick,
            OnPropertyChanged,
            OnRecordInserted,
            OnRecordDeleted,
            OnRecordChecked,
            OnCellErrorStateChanged,
            OnEntryRecordAdded,
            OnEntryRecordCommitted,
            OnEntryRecordPropertyChanged,
            OnRowErrorStateChanged,
            OnDoubleClick,
            OnBeforeGridDispose,
            OnSingleCellClick,
            OnInitialChangesForChangeKeyComplete,
            OnVacateChange,
            OnGridErrorStateChanged,
            OnSingleCellKeyDown,
            OnRecordsReordered,
            OnBeforePropertyChanged,
            OnRowEscape,
            OnBeginRenameColumn,
            OnEndRenameColumn,
            OnPasteBegin,
            OnPasteEnd,
            OnBeginRedoDataUpdateChange,
            OnBeginUndoDataUpdateChange
        }

        export enum DelegateType {
            ExpandColumnMenu,
            AddColumnMenuItems,
            Sort,
            Filter,
            InsertRecord,
            DeleteRecords,
            IndentRecords,
            OutdentRecords,
            IsRecordInsertInView,
            ExpandDelayLoadedHierarchyNode,
            AutoFilter,
            ExpandConflictResolution,
            GetAutoFilterEntries,
            LaunchFilterDialog,
            ShowColumnConfigurationDialog,
            GetRecordEditMode,
            GetGridRowStyleId,
            CreateEntryRecord,
            TryInsertEntryRecord,
            WillAddColumnMenuItems,
            NextPage,
            AddNewColumn,
            RemoveColumnFromView,
            ReorderColumnPositionInView,
            TryCreateProvisionalRecord,
            CanReorderRecords,
            AddNewColumnMenuItems,
            TryBeginPaste,
            AllowSelectionChange,
            GetFieldEditMode,
            GetFieldReadOnlyActiveState,
            OnBeforeRecordReordered
        }

        export enum ClickContext {
            SelectAllSquare,
            RowHeader,
            ColumnHeader,
            Cell,
            Gantt,
            Other
        }

        export class RowHeaderState {
            constructor(id: string, img: SP.JsGrid.Image, priority: SP.JsGrid.RowHeaderStatePriorities, tooltip: string, fnOnClick: { (eventInfo: Sys.UI.DomEvent, recordKey: number): void });
            GetId(): string;
            GetImg(): SP.JsGrid.Image;
            GetPriority(): SP.JsGrid.RowHeaderStatePriorities;
            GetOnClick(): { (eventInfo: Sys.UI.DomEvent, recordKey: number): void };
            GetTooltip(): string;
            toString(): string;
        }

        export class Image {
            /** optOuterCssNames and optImgCssNames are strings that contain css class names separated by spaces.
                optImgCssNames are applied to the img tag.
                if bIsClustered, image is rendered inside div, and optOuterCssNames are applied to the div. */
            constructor(imgSrc: string, bIsClustered: boolean, optOuterCssNames: string, optImgCssNames: string, bIsAnimated: boolean);
            imgSrc: string;
            bIsClustered: boolean;
            optOuterCssNames: string;
            imgCssNames: string;
            bIsAnimated: boolean;
            /** Renders the image with specified alternative text and on-click handler.
                If bHideTooltip == false, then alternative text is also shown as the tooltip (title attribute). */
            Render(altText: string, clickFn: { (eventInfo: Sys.UI.DomEvent): void }, bHideTooltip: boolean): HTMLElement;
        }

        export interface IEventArgs { }
        export module EventArgs {
            export class OnEntryRecordAdded implements IEventArgs {
                constructor(recordKey: number);
                recordKey: number;
            }

            export class CellFocusChanged implements IEventArgs {
                constructor(newRecordKey: number, newFieldKey: string, oldRecordKey: number, oldFieldKey: string);
                newRecordKey: number;
                newFieldKey: string;
                oldRecordKey: number;
                oldFieldKey: string;
            }
            export class RowFocusChanged implements IEventArgs {
                constructor(newRecordKey: number, oldRecordKey: number);
                newRecordKey: number;
                oldRecordKey: number;
            }
            export class CellEditBegin implements IEventArgs {
                constructor(recordKey: number, fieldKey: string);
                recordKey: number;
                fieldKey: string;
            }
            export class CellEditCompleted implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, changeKey: JsGrid.IChangeKey, bCancelled: boolean);
                recordKey: number;
                fieldKey: string;
                changeKey: JsGrid.IChangeKey;
                bCancelled: boolean;
            }
            export class Click implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, context: JsGrid.ClickContext, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                context: JsGrid.ClickContext;
                recordKey: number;
                fieldKey: string;
            }
            export class PropertyChanged implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, oldProp: SP.JsGrid.Internal.PropertyUpdate, newProp: SP.JsGrid.Internal.PropertyUpdate, propType: SP.JsGrid.IPropertyType, changeKey: SP.JsGrid.IChangeKey, validationState: SP.JsGrid.ValidationState);
                recordKey: number;
                fieldKey: string;
                oldProp: SP.JsGrid.Internal.PropertyUpdate;
                newProp: SP.JsGrid.Internal.PropertyUpdate;
                propType: SP.JsGrid.IPropertyType;
                changeKey: SP.JsGrid.IChangeKey;
                validationState: SP.JsGrid.ValidationState;
            }
            export class RecordInserted implements IEventArgs {
                constructor(recordKey: number, recordIdx: number, afterRecordKey: number, changeKey: JsGrid.IChangeKey);
                recordKey: number;
                recordIdx: number;
                afterRecordKey: number;
                changeKey: JsGrid.IChangeKey;
            }
            export class RecordDeleted implements IEventArgs {
                constructor(recordKey: number, recordIdx: number, changeKey: JsGrid.IChangeKey);
                recordKey: number;
                recordIdx: number;
                changeKey: JsGrid.IChangeKey;
            }
            export class RecordChecked implements IEventArgs {
                constructor(recordKeySet: SP.Utilities.Set, bChecked: boolean);
                recordKeySet: SP.Utilities.Set;
                bChecked: boolean;
            }
            export class OnCellErrorStateChanged implements IEventArgs {
                constructor(recordKey: number, fieldKey: string, bAddingError: boolean, bCellCurrentlyHasError: boolean, bCellHadError: boolean, errorId: number);
                recordKey: number;
                fieldKey: string;
                bAddingError: boolean;
                bCellCurrentlyHasError: boolean;
                bCellHadError: boolean;
                errorId: number;
            }
            export class OnRowErrorStateChanged implements IEventArgs {
                constructor(recordKey: number, bAddingError: boolean, bErrorCurrentlyInRow: boolean, bRowHadError: boolean, errorId: number, message: string);
                recordKey: number;
                bAddingError: boolean;
                bErrorCurrentlyInRow: boolean;
                bRowHadError: boolean;
                errorId: number;
                message: string;
            }
            export class OnEntryRecordCommitted implements IEventArgs {
                constructor(origRecKey: string, recordKey: number, changeKey: JsGrid.IChangeKey);
                originalRecordKey: number;
                recordKey: number;
                changeKey: JsGrid.IChangeKey
            }
            export class SingleCellClick implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                recordKey: number;
                fieldKey: string;
            }
            export class PendingChangeKeyInitiallyComplete implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class VacateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class GridErrorStateChanged implements IEventArgs {
                constructor(bAnyErrors: boolean);
                bAnyErrors: boolean;
            }
            export class SingleCellKeyDown implements IEventArgs {
                constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string);
                eventInfo: Sys.UI.DomEvent;
                recordKey: number;
                fieldKey: string;
            }
            export class OnRecordsReordered implements IEventArgs {
                constructor(recordKeys: string[], changeKey: JsGrid.IChangeKey);
                reorderedKeys: string[];
                changeKey: JsGrid.IChangeKey;
            }
            export class OnRowEscape implements IEventArgs {
                constructor(recordKey: number);
                recordKey: number;
            }
            export class OnEndRenameColumn implements IEventArgs {
                constructor(columnKey: string, originalColumnTitle: string, newColumnTitle: string);
                columnKey: string;
                originalColumnTitle: string;
                newColumnTitle: string;
            }
            export class OnBeginRedoDataUpdateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }
            export class OnBeginUndoDataUpdateChange implements IEventArgs {
                constructor(changeKey: JsGrid.IChangeKey);
                changeKey: JsGrid.IChangeKey
            }

        }

        export module JsGridControl {
            export class Parameters {
                tableCache: SP.JsGrid.TableCache;
                name: any; // TODO
                bNotificationsEnabled: boolean;
                styleManager: IStyleManager;
                minHeaderHeight: number;
                minRowHeight: number;
                commandMgr: SP.JsGrid.CommandManager;
                enabledRowHeaderAutoStates: SP.Utilities.Set;
                tableViewParams: TableViewParameters;
                bEnableDiffTracking: boolean;
                isRTL: boolean;

            }
            export class TableViewParameters {
                paneLayout: SP.JsGrid.PaneLayout;
                defaultEditMode: SP.JsGrid.EditMode;
                allowedSelectionTypes: SP.JsGrid.SelectionTypeFlags;

                bMovableColumns: boolean;
                bResizableColumns: boolean;
                bHidableColumns: boolean;
                bSortableColumns: boolean;
                bAutoFilterableColumns: boolean;
                bRowHeadersEnabled: boolean;
                bRecordIndicatorCheckboxesEnabled: boolean;
                bFillControlEnabled: boolean;
                bEditingEnabled: boolean;
                bNewRowEnabled: boolean;

                checkSelectionCheckboxHiddenRecordKeys: string[];
                checkSelectionCheckboxDisabledRecordKeys: string[];
                checkSelectionCheckedRecordKeys: string[];

                keyFieldName: string;
                gridFieldMap: { [name: string]: GridField };

                columns: ColumnInfoCollection;
                messageOverrides: any; //TODO
                operationalConstantsFieldKeyMap: any; //TODO

                ganttParams: GanttParameters;
                pivotedGridParams: PivotedGridParameters;
                rowViewParams: RowViewParameters;
            }
            export class PivotedGridParameters {
        	    //this.dateRange = null;
             //   this.ganttBarStyles = null;
             //   this.ganttZoomLevel = 3;
             //   this.fnRenderGanttRow = null;
             //   this.fnGetGanttBarDate = null;
             //   this.fnGetGanttBarStyleIds = null;
             //   this.fnGetPredecessors = null;
             //   this.workDayStart = _spRegionalSettings.workDayStart;
             //   this.workDayEnd = _spRegionalSettings.workDayEnd;
             //   this.fieldKeyRedrawFilter = null;
            }

            export class GanttParameters {
                columns: ColumnInfoCollection;
            }

            export class RowViewParameters {
                hierarchyMode: SP.JsGrid.HierarchyMode;
                view: any;

                topViewIdx: number;


                groupingLevel: any;
                groupingRecordKeyPrefix: any;
                autoFilterState: any;
                unfilteredHierarchyMgr: any;
                hierarchyDelayLoadKeys: any;
                hierarchyState: any;
                sortState: any;
                filterState: any;
                autoFilterEntries: any;
                filteredDescCounts: any;

            }
        }

        export class CommandManager {
            // todo
        }

        export class TableCache {
            // todo
        }

        export interface IStyleManager {
            gridPaneStyle: IStyleType.GridPane;
            columnHeaderStyleCollection: {
                normal: IStyleType.Header;
                normalHover: IStyleType.Header;
                partSelected: IStyleType.Header;
                partSelectedHover: IStyleType.Header;
                allSelected: IStyleType.Header;
                allSelectedHover: IStyleType.Header;
            };
            rowHeaderStyleCollection: {
                normal: IStyleType.Header;
                normalHover: IStyleType.Header;
                partSelected: IStyleType.Header;
                partSelectedHover: IStyleType.Header;
                allSelected: IStyleType.Header;
                allSelectedHover: IStyleType.Header;
            };
            splitterStyleCollection: {
                normal: IStyleType.Splitter;
                normalHandle: IStyleType.SplitterHandle;
                hover: IStyleType.Splitter;
                hoverHandle: IStyleType.SplitterHandle;
                dra: IStyleType.Splitter;
                dragHandle: IStyleType.SplitterHandle;
            };
            defaultCellStyle: IStyleType.Cell;
            readOnlyCellStyle: IStyleType.Cell;
            readOnlyFocusedCellStyle: IStyleType.Cell;
            timescaleTierStyle: IStyleType.TimescaleTier;
            groupingStyles: any[];
            widgetDockStyle: IStyleType.Widget;
            widgetDockHoverStyle: IStyleType.Widget;
            widgetDockPressedStyle: IStyleType.Widget;
            RegisterCellStyle(styleId: string, cellStyle: IStyleType.Cell): void;
            GetCellStyle(styleId: string): IStyleType.Cell;
            UpdateSplitterStyleFromCss(styleObject: IStyleType.Splitter, splitterStyleNameCollection: any): void;
            UpdateHeaderStyleFromCss(styleObject: IStyleType.Header, headerStyleNameCol: any): void;
            UpdateGridPaneStyleFromCss(styleObject: IStyleType.GridPane, gridStyleNameCollection: any): void;
            UpdateDefaultCellStyleFromCss(styleObject: IStyleType.Cell, cssClass: string): void;
            UpdateGroupStylesFromCss(styleObject: IStyleType.Cell, prefix: string): void;
        }

        export interface IStyleType { }
        export module IStyleType {
            export interface Splitter extends IStyleType {
                outerBorderColor: any;
                leftInnerBorderColor: any;
                innerBorderColor: any;
                backgroundColor: any;
            }
            export interface SplitterHandle extends IStyleType {
                outerBorderColor: any;
                leftInnerBorderColor: any;
                innerBorderColor: any;
                backgroundColor: any;
                gripUpperColor: any;
                gripLowerColor: any;
            }
            export interface GridPane {
                verticalBorderColor: any;
                verticalBorderStyle: any;
                horizontalBorderColor: any;
                horizontalBorderStyle: any;
                backgroundColor: any;
                columnDropIndicatorColor: any;
                rowDropIndicatorColor: any;
                linkColor: any;
                visitedLinkColor: any;
                copyRectForeBorderColor: any;
                copyRectBackBorderColor: any;
                focusRectBorderColor: any;
                selectionRectBorderColor: any;
                selectedCellBgColor: any;
                readonlySelectionRectBorderColor: any;
                changeHighlightCellBgColor: any;
                fillRectBorderColor: any;
                errorRectBorderColor: any;
            }
            export interface Header {
                font: any;
                fontSize: any;
                fontWeight: any;
                textColor: any;
                backgroundColor: any;
                outerBorderColor: any;
                innerBorderColor: any;
                eyeBrowBorderColor: any;
                eyeBrowColor: any;
                menuColor: any;
                menuBorderColor: any;
                resizeColor: any;
                resizeBorderColor: any;
                menuHoverColor: any;
                menuHoverBorderColor: any;
                resizeHoverColor: any;
                resizeHoverBorderColor: any;
                eyeBrowHoverColor: any;
                eyeBrowHoverBorderColor: any;
                elementClickColor: any;
                elementClickBorderColor: any;
            }
            export interface Cell extends IStyleType {
                /** -> CSS font-family */
                font: any;
                /** -> CSS font-size */
                fontSize: any;
                /** -> CSS font-weight */
                fontWeight: any;
                /** -> CSS font-style */
                fontStyle: any;
                /** -> CSS color */
                textColor: any;
                /** -> CSS background-color */
                backgroundColor: any;
                /** -> CSS text-align */
                textAlign: any;
            }
            export interface Widget {
                backgroundColor: any;
                borderColor: any;
            }
            export interface RowHeaderStyle {
                backgroundColor: any;
                outerBorderColor: any;
                innerBorderColor: any;
            }
            export interface TimescaleTier {
                font: any;
                fontSize: any;
                fontWeight: any;
                textColor: any;
                backgroundColor: any;
                verticalBorderColor: any;
                verticalBorderStyle: any;
                horizontalBorderColor: any;
                horizontalBorderStyle: any;
                outerBorderColor: any;
                todayLineColor: any;
            }
        }

        export class Style {

            static Type: {
                Splitter: IStyleType.Splitter;
                SplitterHandle: IStyleType.SplitterHandle;
                GridPane: IStyleType.GridPane;
                Header: IStyleType.Header;
                RowHeaderStyle: IStyleType.RowHeaderStyle;
                TimescaleTier: IStyleType.TimescaleTier;
                Cell: IStyleType.Cell;
                Widget: IStyleType.Widget;
            };

            static SetRTL: { (rtlObject: any): void; };
            static MakeJsGridStyleManager: { (): IStyleManager };
            static CreateStyleFromCss: { (styleType: IStyleType, cssStyleName: string, optExistingStyle?: any, optClassId?: any): any; };
            static CreateStyle: { (styleType: IStyleType, styleProps: any): any; };
            static MergeCellStyles: { (majorStyle: any, minorStyle: any): any; };
            static ApplyCellStyle: { (td: HTMLTableCellElement, style: any): void; };
            static ApplyRowHeaderStyle: { (domObj: HTMLElement, style: any, fnGetHeaderSibling: Function): void; };
            static ApplyCornerHeaderBorderStyle: { (domObj: HTMLElement, colStyle: any, rowStyle: any): void; };
            static ApplyHeaderInnerBorderStyle: { (domObj: HTMLElement, bIsRowHeader: any, headerObject: any): void };
            static ApplyColumnContextMenuStyle: { (domObj: HTMLElement, style: any): void };
            static ApplySplitterStyle: { (domObj: HTMLElement, style: any): void };
            static MakeBorderString: { (width: number, style: string, color: string): string };
            static GetCellStyleDefaultBackgroundColor: { (): string };

        }

        export class ColumnInfoCollection {
            constructor(colInfoArray: any[]);
            GetColumnByKey(key: string): any;
            GetColumnArray(bVisibleOnly?: boolean): any[];
            GetColumnMap(): { [key: string]: any; };
            AppendColumn(colInfo: any): void;
            InsertColumnAt(idx: number, colInfo: any): void;
            RemoveColumn(key: string): void;
            /** Returns null if the specified column is not found or hidden. */
            GetColumnPosition(key: string): number;
        }

        export class ColumnInfo {
            constructor(name: string, imgSrc: string, key: string, width: number);
            /** Column title */
            name: string;
            /** Column image URL.
                If not null, the column header cell will show the image instead of title text.
                If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip. */
            imgSrc: string;
            /** Custom image HTML.
                If you define this in addition to the imgSrc attribute, then instead of standard img tag
                the custom HTML defined by this field will be used. */
            imgRawSrc: string;
            /** Column identifier */
            columnKey: string;
            /** Field keys of the fields, that are displayed in this column */
            fieldKeys: string[];
            /** Width of the column */
            width: number;
            bOpenMenuOnContentClick: boolean;
            /** always returns 'column' */
            ColumnType(): string;
            /** true by default */
            isVisible: boolean;
            /** true by default */
            isHidable: boolean;
            /** true by default */
            isResizable: boolean;
            /** true by default */
            isSortable: boolean;
            /** true by default */
            isAutoFilterable: boolean;
            /** false by default */
            isFooter: boolean;
            /** determine whether the cells in this column should be clickable */
            fnShouldLinkSingleValue: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): boolean };
            /** if a particular cell is determined as clickable by fnShouldLinkSingleValue, this function will be called when the cell is clicked */
            fnSingleValueClicked: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): void };
            /** this is used when you need to make some of the cells in the column readonly, but at the same time keep others editable */
            fnGetCellEditMode: { (record: IRecord, fieldKey: string): JsGrid.EditMode };
            /** this function should return name of the display control for the given cell in the column
                the name should be previously associated with the display control via SP.JsGrid.PropertyType.Utils.RegisterDisplayControl method */
            fnGetDisplayControlName: { (record: IRecord, fieldKey: string): string };
            /** this function should return name of the edit control for the given cell in the column
                the name should be previously associated with the edit control via SP.JsGrid.PropertyType.Utils.RegisterEditControl method */
            fnGetEditControlName: { (record: IRecord, fieldKey: string): string };
            /** set widget control names for a particular cell
                widgets are basically in-cell buttons with associated popup controls, e.g. date selector or address book button
                standard widget ids are defined in the SP.JsGrid.WidgetControl.Type enumeration
                it is also possible to create your own widgets
                usually this function is not used, and instead, widget control names are determined via PropertyType
             */
            fnGetWidgetControlNames: { (record: IRecord, fieldKey: string): string[] };
            /** this function should return id of the style for the given cell in the column
                styles and their ids are registered for a JsGridControl via jsGridParams.styleManager.RegisterCellStyle method */
            fnGetCellStyleId: { (record: IRecord, fieldKey: string, dataValue: any): string };
            /** set custom tooltip for the given cell in the column. by default, localized value is displayed as the tooltip */
            fnGetSingleValueTooltip: { (record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): string };
        }


        export interface IRecord {
            /** True if this is an entry row */
            bIsNewRow: boolean;

            /** Please use SetProp and GetProp */
            properties: { [fieldKey: string]: IPropertyBase };

            /** returns recordKey */
            key(): number;
            /** returns raw data value for the specified field */
            GetDataValue(fieldKey: string): any;
            /** returns localized text value for the specified field */
            GetLocalizedValue(fieldKey: string): string;
            /** returns true if data value for the specified field is available */
            HasDataValue(fieldKey: string): boolean;
            /** returns true if localized text value for the specified field is available */
            HasLocalizedValue(fieldKey: string): boolean;

            GetProp(fieldKey: string): IPropertyBase;
            SetProp(fieldKey: string, prop: IPropertyBase): void;

            /** Update the specified field with the specified value */
            AddFieldValue(fieldKey: string, value: any): void;
            /** Removes value of the specified field.
                Does not refresh the view. */
            RemoveFieldValue(fieldKey: string): void;
        }


        export class RecordFactory {
            constructor(gridFieldMap: any, keyColumnName: string, fnGetPropType: any);
            gridFieldMap: any;
            /** Create a new record */
            MakeRecord(dataPropMap: any, localizedPropMap: any, bKeepRawData: boolean): IRecord;
        }

        export interface IPropertyBase {
            HasLocalizedValue(): boolean;
            HasDataValue(): boolean;
            Clone(): IPropertyBase;
            /** dataValue actually is cloned */
            Update(dataValue: any, localizedValue: string): void;
            GetLocalized(): string;
            GetData(): any;
        }

        export class Property {
            static MakeProperty(dataValue: any, localizedValue: string, bHasDataValue: boolean, bHasLocalizedValue: boolean, propType: any): IPropertyBase;
            static MakePropertyFromGridField(gridField: any, dataValue: any, localizedVal: string, optPropType?: any): IPropertyBase;
        }

        export class GridField {
            constructor(key: string, hasDataValue: boolean, hasLocalizedValue: boolean, textDirection: TextDirection, defaultCellStyleId?: any, editMode?: EditMode, dateOnly?: boolean, csrInfo?: any);
            key: string;
            hasDataValue: boolean;
            hasLocalizedValue: boolean;
            textDirection: TextDirection;
            dateOnly: boolean;
            csrInfo: any;
            GetEditMode(): EditMode;
            SetEditMode(mode: EditMode): void;
            GetDefaultCellStyleId(): any;
            CompareSingleDataEqual(dataValue1: any, dataValue2: any): boolean;
            GetPropType(): any;
            GetSingleValuePropType(): any;
            GetMultiValuePropType(): any;
            SetSingleValuePropType(svPropType: any): void;
            SetIsMultiValue(listSeparator: any): void;
            GetIsMultiValue(): boolean;
        }

        export interface IEditActorGridContext {
            jsGridObj: JsGridControl;
            parentNode: HTMLElement;
            styleManager: IStyleManager;
            RTL: any;
            emptyValue: any;
            bLightFocus: boolean;
            OnKeyDown: { (domEvent: Sys.UI.DomEvent): void; };
        }

        export interface IEditControlGridContext extends IEditActorGridContext {
            OnActivateActor(): void;
            OnDeactivateActor(): void;
        }

        export interface IPropertyType {
            ID: string;
            BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
        }

        export interface ILookupPropertyType extends IPropertyType {
            GetItems(fnCallback: any): void;
            DataToLocalized(dataValue: any): string;
            LocalizedToData(localized: string): any;
            GetImageSource(record: IRecord, dataValue: any): string;
            GetStyleId(dataValue: any): string;
            GetIsLimitedToList(): boolean;
            GetSerializableLookupPropType(): { items: any[]; id: string; bLimitToList: boolean };
        }

        export interface IMultiValuePropertyType extends IPropertyType {
            bMultiValue: boolean;
            separator: string;
            singleValuePropType: string;
            GetSerializableMultiValuePropType(): { singleValuePropTypeID: string; separatorChar: string; bDelayInit: boolean; };
            InitSingleValuePropType(): void;
            LocStrToLocStrArray(locStr: string): string[];
            LocStrArrayToLocStr(locStrArray: string[]): string;
        }

        export class PropertyType {
            /** Lookup property type factory, based on SP.JsGrid.PropertyType.LookupTable class.
                displayCtrlName should be one of the following: SP.JsGrid.DisplayControl.Type.Image, SP.JsGrid.DisplayControl.Type.ImageText or SP.JsGrid.DisplayControl.Type.Text
             */
            static RegisterNewLookupPropType(id: string, items: any[], displayCtrlName: string, bLimitToList: boolean): void;

            /** Register a custom property type. */
            static RegisterNewCustomPropType(propType: IPropertyType, displayCtrlName: string, editControlName: string, widgetControlNames: string[]): void;

            /** Register a custom property type, where display and edit controls, and also widgets, are derived from the specified parent property type. */
            static RegisterNewDerivedCustomPropType(propType: IPropertyType, baseTypeName: string): void;
        }

        export module PropertyType {
            export class String implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                toString(): string;
            }
            export class LookupTable implements ILookupPropertyType {
                constructor(items: any[], id: string, bLimitToList: boolean);
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                GetItems(fnCallback: any): void;
                DataToLocalized(dataValue: any): string;
                LocalizedToData(localized: string): any;
                GetImageSource(record: IRecord, dataValue: any): string;
                GetStyleId(dataValue: any): string;
                GetIsLimitedToList(): boolean;
                GetSerializableLookupPropType(): { items: any[]; id: string; bLimitToList: boolean };

            }
            export class CheckBoxBoolean implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                DataToLocalized(dataValue: any): string;
                GetBool(dataValue: any): boolean;
                toString(): string;
            }
            export class DropDownBoolean implements IPropertyType {
                constructor();
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                DataToLocalized(dataValue: any): string;
                GetBool(dataValue: any): boolean;
                toString(): string;
            }
            export class MultiValuePropType implements IMultiValuePropertyType {
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                bMultiValue: boolean;
                separator: string;
                singleValuePropType: string;
                GetSerializableMultiValuePropType(): { singleValuePropTypeID: string; separatorChar: string; bDelayInit: boolean; };
                InitSingleValuePropType(): void;
                LocStrToLocStrArray(locStr: string): string[];
                LocStrArrayToLocStr(locStrArray: string[]): string;
            }
            export class HyperLink implements IPropertyType {
                ID: string;
                BeginValidateNormalizeConvert(recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: { (args: { isValid: boolean; dataValue: any; normalizedLocValue: string }): void; }, fnError: any): void;
                bHyperlink: boolean;
                DataToLocalized(dataValue: any): string;
                GetAddress(dataValue: any): string;
                /** Returns string like this: '"http://site.com, Site title"' */
                GetCopyValue(record: IRecord, dataValue: any, locValue: string): string;
                toString(): string;
            }


            export class Utils {
                static RegisterDisplayControl(name: string, singleton: any, requiredFunctionNames: string[]): void;
                static RegisterEditControl(name: string, factory: (gridContext: IEditControlGridContext, gridTextInputElement: HTMLElement) => IEditControl, requiredFunctionNames: string[]): void;
                static RegisterWidgetControl(name: string, factory: { (ddContext: any): IPropertyType; }, requiredFunctionNames: string[]): void;

                static UpdateDisplayControlForPropType(propTypeName: string, displayControlType: string): void;
            }
        }

        export module WidgetControl {
            export class Type {
                static Demo: string;
                static Date: string;
                static AddressBook: string;
                static Hyperlink: string;
            }
        }

        export module Internal {
            export class DiffTracker {
                constructor(objBag: any, fnGetChange: Function);
                ExternalAPI: {
                    AnyChanges(): boolean;
                    ChangeKeySliceInfo(): any;
                    ChangeQuery(): any;
                    EventSliceInfo(): any;
                    GetChanges(optStartEvent: any, optEndEvent: any, optRecordKeys: any, bFirstStartEvent: boolean, bStartInclusive: boolean, bEndInclusive: boolean, bIncludeInvalidPropUpdates: boolean, bLastEndEvent: boolean): any;
                    GetChangesAsJson(changeQuery: any, optfnPreProcessUpdateForSerialize?: any): string;
                    GetUniquePropertyChanges(changeQuery: any, optfnFilter?: any): any;
                    RegisterEvent(changeKey: IChangeKey, eventObject: any): void;
                    UnregisterEvent(changeKey: IChangeKey, eventObject: any): void;
                };
                Clear(): void;
                NotifySynchronizeToChange(changeKey: IChangeKey): void;
                NotifyRollbackChange(changeKey: IChangeKey): void;
                NotifyVacateChange(changeKey: IChangeKey): void;
            }

            export class PropertyUpdate implements IValue {
                constructor(data: any, localized: string);
                data: any;
                localized: string;
            }
        }

        export interface IEditActorCellContext {
            propType: IPropertyType;
            originalValue: IValue;
            record: IRecord;
            column: ColumnInfo;
            field: GridField;
            fieldKey: string;
            cellExpandSpace: { left: number; top: number; fight: number; bottom: number; };
            SetCurrentValue(value: any): void;
        }

        export interface IEditControlCellContext extends IEditActorCellContext {
            cellWidth: number;
            cellHeight: number;
            cellStyle: any; //TODO: Determine correct type
            cellRect: any;
            NotifyExpandControl(): void;
            NotifyEditComplete(): void;
            Show(element: HTMLElement): void;
            Hide(element: HTMLElement): void;
        }


        export module EditControl {

        }

        export interface IEditControl {
            SupportedWriteMode?: SP.JsGrid.EditActorWriteType;
            SupportedReadMode?: SP.JsGrid.EditActorReadType;
            GetCellContext?(): IEditControlCellContext;
            GetOriginalValue?(): IValue;
            SetValue?(value: IValue): void;
            Dispose(): void;
            GetInputElement?(): HTMLElement;
            Focus?(eventInfo: Sys.UI.DomEvent): void;
            BindToCell(cellContext: IEditControlCellContext): void;
            OnBeginEdit(eventInfo: Sys.UI.DomEvent): void;
            Unbind(): void;
            OnEndEdit(): void;
            OnCellMove?(): void;
            OnValueChanged?(newValue: IValue): void;
            IsCurrentlyUsingGridTextInputElement?(): boolean;
            SetSize?(width: number, height: number): void;
        }


        export class StaticDataSource {
            constructor(jsGridData: IGridData, optFnGetPropType?: Function);
            AddColumn(gridField: SP.JsGrid.GridField, values: IValue[]):void;
            RemoveColumn(fieldKey: string):void;
            InitJsGridParams(optGridParams?: JsGridControl.Parameters): JsGridControl.Parameters;
        }

        export interface IGridData {
            MetaData: IGridMetadata

            Fields: IFieldInfo[];
            Columns: IColumnInfo[];

            LocalizedTable: any[];
            UnlocalizedTable: any[];
            ViewInfo: any[];

            MultiValueSeparator?: string;
            LookupTableInfo?: ILookupTableInfo[];
            PivotedColumns?: ColumnInfo[];
            PaneLayout?: PaneLayout;
            GanttInfo?: any;
            AutoFilterableColumns?: boolean;
            AutoFilterState?: any;
            SortState?: any[];
            HierarchyState?: any;
            TopRecord?: number;
            RecordCount?: number;
            AdditionalParams?: any;
            CellStyles?: any;
            GroupingGridRowStyleIds?: any[];
            UnfilteredHierarchy?: any;
            AutoFilterEntries?: any;

            ViewDepKeys?: any[];
        }

        export interface IColumnInfo {
            /** Column title */
            name: string;
            /** Column image URL.
                If not null, the column header cell will show the image instead of title text.
                If the title is defined at the same time as the imgSrc, the title will be shown as a tooltip. */
            imgSrc?: string;
            /** Column identifier */
            columnKey: string;
            /** Column identifier */
            fieldKey: string;
            /** Field keys of the fields, that are displayed in this column */
            fieldKeys: string[];
            /** Width of the column */
            width: number;
            /** true by default */
            isVisible?: boolean;
            /** true by default */
            isHidable?: boolean;
            /** true by default */
            isResizable?: boolean;
            /** true by default */
            isSortable?: boolean;
            /** true by default */
            isAutoFilterable?: boolean;
            /** false by default */
            isFooter?: boolean;
        }

        export interface IGridMetadata {
            KeyColumnName: string;
            IsGanttEnabled?: boolean;
            IsHierarchyEnabled?: boolean;
            IsSorted?: boolean;
            GroupingLevel?: number;
            GroupingPrefix?: string;
            RecordKeyHash?: string;
            RecordKeyOrderChanged?: any;
            GridOperationalConstantsFieldKeyMap?: { [index: number]: string };

        }

        export interface IFieldInfo {
            fieldKey: string;
            propertyTypeId: string;
            editMode?: EditMode;
            hasDataValue?: boolean;
            hasLocalizedValue?: boolean;
            multiValue?: boolean;
            textDirection?: TextDirection;
            dateOnly?: boolean;
            defaultCellStyleId?: any;

        }

        export interface ILookupTableInfo {
            id: string;
            showImage?: boolean;
            showText?: boolean;
            limitToList?: boolean;
            lookup: ILookupInfo[];
        }
        export interface ILookupInfo {
            localString: string;
            value: number;
        }


    }

    export module Utilities {
        export class Set {
            constructor(items?: { [item: string]: number });
            constructor(items?: { [item: number]: number });
            /** Returns true if the set is empty */
            IsEmpty(): boolean;
            /** Returns first item in the set */
            First(): any;
            /** Returns the underlying collection of items as dictionary.
                Items are the keys, and values are always 1.
                So the return value may be either { [item: string]: number } or { [item: number]: number } */
            GetCollection(): any;
            /** Returns all items from the set as an array */
            ToArray(): any[];
            /** Adds all items from array to the set, and returns the set */
            AddArray(array: any[]): SP.Utilities.Set;
            /** Adds an item to the set */
            Add(item: any): any;
            /** Removes the specified item from the set and returns the removed item */
            Remove(item: any): any;
            /** Clears all the items from set */
            Clear(): SP.Utilities.Set;
            /** Returns true if item exists in this set */
            Contains(item: any): boolean;
            /** Returns a copy of this set */
            Clone(): SP.Utilities.Set;
            /** Returns a set that contains all the items that exist only in one of the sets (this and other), but not in both */
            SymmetricDifference(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Returns a set that contains all the items that are in this set but not in the otherSet */
            Difference(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Returns a new set, that contains items from this set and otherSet */
            Union(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Adds all items from otherSet to this set, and returns this set */
            UnionWith(otherSet: SP.Utilities.Set): SP.Utilities.Set;
            /** Returns a new set, that contains only items that exist both in this set and the otherSet */
            Intersection(otherSet: SP.Utilities.Set): SP.Utilities.Set;
        }
    }
}





declare namespace SP {
    export class GanttControl {
        static WaitForGanttCreation(callack: (control: GanttControl) => void): void;
        static Instances: GanttControl[];
        static FnGanttCreationCallback: { (control: GanttControl): void }[];

        get_Columns(): SP.JsGrid.ColumnInfo[];
    }
}


// ------- Srch namespace -------

declare namespace Srch
{
    export enum EventType
    {
        none, 
        queryReady, 
        queryIssuing, 
        batchQueryIssuing, 
        resultReady, 
        batchResultReady, 
        queryStateChanged, 
        resultRendered, 
        preLoad, 
        load, 
        postLoad
    }

    export enum MessageLevel
    {
        information, 
        warning, 
        error        
    }

    export enum UserActionType
    {
        search, 
        pageNext, 
        pagePrev, 
        refine, 
        sort, 
        filterLanguage
    }

    export enum DateTimeKind
    {
        unspecified, 
        utc, 
        local
    }

    export class ClientControl extends Sys.UI.Control
    {
        constructor(elem: Element);

        /** toggles visibility of children controls of the messageContainer */
        static toggleMessageDetails(messageContainer: Element): void;
        alternateRenderer: any;
        alternateRenderContext: any;
        loaded: boolean;
        /** returns next unique identifier for nested controls */
        get_nextUniqueId(): string;
        /** Gets the id of View display template that is used to render this control.
          * Example: '~sitecollection/_catalogs/masterpage/Display Templates/Search/Control_SearchResults.js'
          */
        get_renderTemplateId(): string;
        set_renderTemplateId(value: string): string;
        /** Returns true if control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default. */
        get_delayLoadTemplateScripts(): boolean;
        /** If set to true, control will load scripts defined by the serverTemplateScriptsToLoad field after control load. True by default. */
        set_delayLoadTemplateScripts(value: boolean): boolean;
        get_states(): any;
        set_states(value: any): any; 
        get_messages(): any[];
        set_messages(value: any[]): any[];
        get_showDataErrors(): boolean;
        /** False by default. */
        set_showDataErrors(value: boolean): boolean;
        get_alternateErrorMessage(): string;
        set_alternateErrorMessage(value: string): string;
        /** returns true if control has already been loaded at least once */
        get_isInitialLoad(): boolean;
        initialize(): void;
        dispose(): void;
        renderControl(listData: any, dataProvider: any): void;
        processDataProviderErrors(dataProviderToProcess: any): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_Load(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        loadServerTemplateScripts():void;
        serverTemplateScriptsToLoad: any[];
        serverTemplateScriptsCallback(): void;
        loadRenderTemplateScripts(scriptReferences: any, success: any, failure: any, timeout: any, loadStandAloneCustomScripts: any): boolean;
        invokeAlternateRender(callback: any, container: any, ctx: any): any;
        invokeClientRenderer(node: any, ctx: any): any;
        processDataErrorMessages(dataErrorsList: any): any;
        processRenderingErrorMessages(ctx: any): any;
        hasMessages(): any;
        updateDisplayControlWithNewMessages(): any;
        /** show/hide the DOM element associated with control */
        setControlElementVisibility(showElement: boolean): any;
        clickHandler(e: Event): any;
    }

    export class DataProvider extends ClientControl
    {
        constructor(elem: Element);
        get_currentQueryState(): any;
        get_sourceID(): string;
        set_sourceID(value: string): string;
        get_sourceName(): string;
        set_sourceName(value: string): string;
        get_sourceLevel(): string;
        set_sourceLevel(value: string): string;
        get_collapseSpecification(): string;
        set_collapseSpecification(value: string): string;
        get_queryGroupName(): string;
        set_queryGroupName(value: string): string;
        get_queryPropertiesTemplateUrl(): string;
        set_queryPropertiesTemplateUrl(value: string): string;
        get_queryTemplate(): any;
        set_queryTemplate(value: any): any;
        get_fallbackSort(): any;
        set_fallbackSort(value: any): any;
        get_rankRules(): any;
        set_rankRules(value: any): any;
        get_initialQueryState(): any;
        set_initialQueryState(value: any): any;
        get_initialResult(): string;
        set_initialResult(value: string): string;
        get_initialResultRef(): any;
        set_initialResultRef(value: any): any;
        get_initialResultObject(): any;
        get_batched(): boolean;
        set_batched(value: boolean): boolean;
        get_active(): boolean;
        set_active(value: boolean): boolean;
        get_bypassResultTypes(): boolean;
        set_bypassResultTypes(value: boolean): boolean;
        get_processBestBets(): boolean;
        set_processBestBets(value: boolean): boolean;
        get_processPersonalFavorites(): boolean;
        set_processPersonalFavorites(value: boolean): boolean;
        /** Number of results displayed per page. 10 by default */
        get_resultsPerPage(): number;
        /** Number of results displayed per page. 10 by default */
        set_resultsPerPage(value: number): number;
        get_selectedRefiners(): any;
        set_selectedRefiners(value: any): any;
        get_selectedProperties(): any;
        set_selectedProperties(value: any): any;
        get_hitHighlightedProperties(): any;
        set_hitHighlightedProperties(value: any): any;
        get_fallbackLanguage(): any;
        set_fallbackLanguage(value: any): any;
        get_fallbackRankingModelID(): string;
        set_fallbackRankingModelID(value: string): string;
        get_fallbackRefinementFilters(): any;
        set_fallbackRefinementFilters(value: any): any;
        get_availableSorts(): any;
        set_availableSorts(value: any): any;
        get_contextualScopeUrl(): string;
        set_contextualScopeUrl(value: string): string;
        get_totalRows(): number;
        set_totalRows(value: number): number;
        get_rowCount(): number;
        set_rowCount(value: number): number;
        get_refinementInfo(): any;
        get_entityInfo(): any;
        get_enableStemming(): boolean;
        set_enableStemming(value: boolean): boolean;
        get_enablePhonetic(): boolean;
        set_enablePhonetic(value: boolean): boolean;
        get_enableNicknames(): boolean;
        set_enableNicknames(value: boolean): boolean;
        get_trimDuplicates(): boolean;
        set_trimDuplicates(value: boolean): boolean;
        get_enableInterleaving(): boolean;
        set_enableInterleaving(value: boolean): boolean;
        get_enableQueryRules(): boolean;
        set_enableQueryRules(value: boolean): boolean;
        get_enableOrderingHitHighlightedProperty(): boolean;
        set_enableOrderingHitHighlightedProperty(value: boolean): boolean;
        get_hitHighlightedMultivaluePropertyLimit(): number;
        set_hitHighlightedMultivaluePropertyLimit(value: number): number;
        get_properties(): any;
        set_properties(value: any): any;
        get_clientType(): string;
        set_clientType(value: string): string;
        get_maxPagesAfterCurrent(): number;
        set_maxPagesAfterCurrent(value: number): number;
        get_userAction(): any;
        set_userAction(value: any): any;
        get_queryCount(): number;
        set_queryCount(value: number): number;
        get_resultsUrl(): any;
        set_resultsUrl(value: any): any;
        get_upScopeUrl(): any;
        get_effectiveQueryLanguage(): any;
        get_parentImpressionID(): any;
        set_parentImpressionID(value: any): any;
        get_updateAjaxNavigate(): boolean;
        set_updateAjaxNavigate(value: boolean): boolean;
        get_summaryLength(): number;
        set_summaryLength(value: number): number;
        get_desiredSnippetLength(): number;
        set_desiredSnippetLength(value: number): number;
        get_personalizedQuery(): boolean;
        set_personalizedQuery(value: boolean): boolean;
        initialize(): void;
        dispose(): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_Load(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): void;
        add_queryIssuing(value: any): void;
        remove_queryIssuing(value: any): void;
        raiseQueryIssuingEvent(arg: any): void;
        add_resultReady(value: any): void;
        remove_resultReady(value: any): void;
        raiseResultReadyEvent(arg: any): void;
        add_queryStateChanged(value: any): void;
        raiseQueryStateChangedEvent(arg: any): void;
        displayControl_QueryReady(sender: any, e: any): void;
        searchBox_QueryReady(sender: any, e: any): void;
        searchBox_BatchQueryIssuing(sender: any, e: any): void;
        searchBox_BatchResultReady(sender: any, e: any): void;
        processInitial(): void;
        issueQuery(): void;
        displayControlMessages(): void;
        raiseEmptyResultReadyEvent(): void;
        getSortRankName(): string;
        getSortName(): string;
    }

    export class DisplayControl extends ClientControl
    {
        get_queryGroupName(): string;
        set_queryGroupName(value: string): string;
        get_dataProvider(): DataProvider;
        get_renderedResult(): boolean;
        set_renderedResult(value: boolean): boolean;
        get_shouldShowNoResultMessage(): boolean;
        set_shouldShowNoResultMessage(value: boolean): boolean;
        get_currentResultTableCollection(): any;
        set_currentResultTableCollection(value: any): any;
        get_emptyMessage(): string;
        set_emptyMessage(value: string): string;
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): void;
        add_queryReady(value: any): void;
        remove_queryReady(value: any): void;
        raiseQueryReadyEvent(arg: any): void;
        add_resultRendered(value: any): void;
        remove_resultRendered(value: any): void;
        raiseResultRenderedEvent(arg: any): void;
        add_oneTimeResultRendered(value: any): void;
        remove_oneTimeResultRendered(value: any): void;
        raiseOneTimeResultRenderedEvent(arg: any): void;
        refresh(queryState: any): void;
        dataProvider_QueryIssuing(sender: any, e: any): void;
        dataProvider_ResultReady(sender: any, e: any): void;
        processQueryIssuing(queryState: any): void;
        processResultReady(resultTableCollection: any): void;
        render(): void;
    }

    export class Refinement extends DisplayControl
    {
        static createRefinementTextbox(name: string): Element;
        static submitMultiRefinement(name: string, control: Refinement, useContains: boolean, useKQL: boolean): void;
        static ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(inputText: string): string;
        static getRefinementLocalizedTitle(propertyName: string): string;
        static getRefinementTitle(currentRefinemntControl: Refinement): string;
        /** Gets expanded state of the specified filter from cookie */
        static getExpanded(filterName: string): string;
        /** Save expanded state of the specified filter to cookie */
        static setExpanded(filterName: string, value: string): void;
        static multiRefinerSpecifyOtherFilterValue(refinerName: string, clientControl: Refinement, useContains: boolean, useKQL: boolean): void;
        
        constructor(elem: Element);

        get_selectedRefinementControls(): RefinementControl[];
        set_selectedRefinementControls(value: RefinementControl[]): RefinementControl[];
        get_useManagedNavigationRefiners(): boolean;
        set_useManagedNavigationRefiners(value: boolean): boolean;
        get_emptyRefinementMessageId(): string;
        set_emptyRefinementMessageId(value: string): string;
        
        scriptApplication_PreLoad(sender: any, e: any): void;
        render(): void;
        addRefinementFilter(filterName: string, filterToken: any): void;
        addRefinementFiltersJSON(refinersJSON: string): void;
        addRefinementFiltersJSONWithOr(refinersJSON: string): void;
        addRefinementFilters(refiners: any[]): void;
        addRefinementFiltersWithOp(refiners: any[], op: string): void;
        removeRefinementFilter(filterName: string, filterToken: string): void;
        removeRefinementFiltersJSON(refinersJSON: string): void;
        updateRefinementFilters(filterName: string, filterTokens: string[], op: string, useKQL: boolean, tokenToDisplayValueMap: any): void;
        updateRefinersJSON(refinersJSON: string): void;
        updateRefiners(refiners: any[], op: string, useKQL: boolean, tokenToDisplayValueMap: any): void;
        removeRefinementCategory(rcs: any, filterName: string): void;
        replaceRefinementFilter(oldRefinementFilter: any, newRefinementFilter: any): void;
        hasRefinementFilter(filterName: string, filterToken: string): boolean;
        hasAllRefinementFilters(filterName: string, filterTokens: string[]): boolean;
        hasRefinementCategory(refinementName: string): boolean;
        getCurrentRefinementCategory(refinementName: string): any;
        /** Gets refinement control with the specified propertyName */
        getRefinementControl(refinerName: string): RefinementControl;
        /** Returns true if selected refinement controls collection contains a control with the specified propertyName */
        hasRefiner(refinerName: string): boolean;
        /** Replaces the refinement controls */
        updateRefinementControls(newControls: RefinementControl[]): void;
    }

    export class RefinementControl
    {
        constructor(propertyName: string, spec: string, renderTemplateId: string);

        propertyName: string;
        spec: string;
        renderTemplateId: string;
        overrideDisplayName: string;
        useDefaultDateIntervals: boolean;
        containerId: string;
        alternateRenderer: any;
        alternateRenderContext: any;
        countDisplay: string;
        deepHits: number;
    }

    export class Result extends DisplayControl
    {
        static parsePropertyMappingWithSlotDisplayNames(mappings: any): { [key: string]: any };
        static parsePropertyMappingsString(mappings: any): { [key: string]: any };
        static getSelectedPropertiesFromMappingDictionary(propMappings: any): any[];

        constructor(elem: Element);

        get_itemTemplateId(): string;
        set_itemTemplateId(value: string): string;
        get_groupTemplateId(): string;
        set_groupTemplateId(value: string): string;
        get_itemBodyTemplateId(): string;
        set_itemBodyTemplateId(value: string): string;
        get_maxPagesBeforeCurrent(): number;
        set_maxPagesBeforeCurrent(value: number): number;
        get_maxPagesAfterCurrent(): number;
        set_maxPagesAfterCurrent(value: number): number;
        get_currentPageNumber(): number;
        set_currentPageNumber(value: number): number;
        get_showSortOptions(): boolean;
        set_showSortOptions(value: boolean): boolean;
        get_showLanguageOptions(): boolean;
        set_showLanguageOptions(value: boolean): boolean;
        get_repositionLanguageDropDown(): boolean;
        set_repositionLanguageDropDown(value: boolean): boolean;
        get_showPaging(): boolean;
        set_showPaging(value: boolean): boolean;
        get_showResults(): boolean;
        set_showResults(value: boolean): boolean;
        get_showBestBets(): boolean;
        set_showBestBets(value: boolean): boolean;
        get_showPersonalFavorites(): boolean;
        set_showPersonalFavorites(value: boolean): boolean;
        get_showDefinitions(): boolean;
        set_showDefinitions(value: boolean): boolean;
        get_showDidYouMean(): boolean;
        set_showDidYouMean(value: boolean): boolean;
        get_showAdvancedLink(): boolean;
        set_showAdvancedLink(value: boolean): boolean;
        get_showPreferencesLink(): boolean;
        set_showPreferencesLink(value: boolean): boolean;
        get_showResultCount(): boolean;
        set_showResultCount(value: boolean): boolean;
        get_showAlertMe(): boolean;
        set_showAlertMe(value: boolean): boolean;
        get_showViewDuplicates(): boolean;
        set_showViewDuplicates(value: boolean): boolean;
        get_pagingInfo(): any;
        get_shouldShowNoResultMessage(): boolean;
        get_advancedUrl(): string;
        set_advancedUrl(value: string): string;
        get_showUpScopeMessage(): boolean;
        set_showUpScopeMessage(value: boolean): boolean;
        get_scrollToTopOnRedraw(): boolean;
        set_scrollToTopOnRedraw(value: boolean): boolean;
        get_useSimplifiedQueryBuilder(): boolean;
        set_useSimplifiedQueryBuilder(value: boolean): boolean;
        get_preloadedItemTemplateIds(): string[];
        set_preloadedItemTemplateIds(value: string[]): string[];
        processResultReady(resultTableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection): void;
        render(): void;
        scriptApplication_PreLoad(sender: any, e: any): void;
        sortOrRank(sortRankName: string): void;
        sort(sortName: string): void;
        changeQueryLanguage(queryLanguage: number): void;
        page(startAt: number): void;
        changeQueryTerm(queryTerm: any): void;
        viewDuplicates(docId: number): void;
        /** Returns true if the specified table has results and is enabled to be shown by this control */
        shouldShowTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
    }

    /** Represents the search box control */
    export class SearchBox extends ClientControl
    {
        constructor(elem: Element);

        /** Returns the current search term */
        get_currentTerm(): string;
        /** Sets the current search term.
          * Does not update results or even re-render control automatically, only sets the value.
          * You can call .renderControl() method to re-render control.
          */
        set_currentTerm(value: string): string;

        get_queryGroupNames(): string[];
        set_queryGroupNames(value: any): string[];
        
        /** Gets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}' */
        get_resultsPageAddress(): string;
        /** Sets the results page address, e.g. '~site/_layouts/15/osssearchresults.aspx?u={contexturl}'
          * Parameter u is used for setting the url filter for the search, so that only results within
          * e.g. specified site are returned. Omit this parameter if you want to search everywhere.
          */
        set_resultsPageAddress(value: string): string;
        
        get_showAdvancedLink(): boolean;
        set_showAdvancedLink(value: boolean): boolean;
        
        get_showQuerySuggestions(): boolean;
        set_showQuerySuggestions(value: boolean): boolean;
        
        get_showNavigation(): boolean;
        set_showNavigation(value: boolean): boolean;
        
        get_showPeopleNameSuggestions(): boolean;
        set_showPeopleNameSuggestions(value: boolean): boolean;
        
        /** Gets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
         * Default value is 250.
         */
        get_querySuggestionCompletionInterval(): number;
        /** Sets the interval in milliseconds, if user is idle during this interval, suggestions retrieval will be initiated.
         * Default value is 250.
         */
        set_querySuggestionCompletionInterval(value: number): number;
        
        /** Gets minimum length of the search term for suggestions to be retrieved. Default is 2 letters. */
        get_querySuggestionMinimumPrefixLength(): number;
        /** Sets minimum length of the search term for suggestions to be retrieved. Default is 2 letters. */
        set_querySuggestionMinimumPrefixLength(value: number): number;
        
        /** Gets number of suggestions to display. Default is 5. */
        get_querySuggestionCount(): number;
        /** Sets number of suggestions to display. Default is 5. */
        set_querySuggestionCount(value: number): number;
        
        get_personalResultCount(): number;
        set_personalResultCount(value: number): number;
        
        get_advancedSearchPageAddress(): string;
        set_advancedSearchPageAddress(value: string): string;
        
        get_showPreferencesLink(): boolean;
        set_showPreferencesLink(value: boolean): boolean;
        
        get_serverInitialRender(): boolean;
        set_serverInitialRender(value: boolean): boolean;
        
        get_setFocusOnPageLoad(): boolean;
        set_setFocusOnPageLoad(value: boolean): boolean;
        
        get_allowEmptySearch(): boolean;
        set_allowEmptySearch(value: boolean): boolean;
        
        get_updatePageTitle(): boolean;
        set_updatePageTitle(value: boolean): boolean;
        
        get_pageTitlePrefix(): string;
        set_pageTitlePrefix(value: string): string;
        
        /** Gets the search input placeholder text */
        get_currentPrompt(): string;
        /** Sets the search input placeholder text */
        set_currentPrompt(value: string): string;
        
        get_initialPrompt(): string;
        set_initialPrompt(value: string): string;
        
        /** Gets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText' */
        get_promptCssClass(): string;
        /** Sets the css class/classes of the placeholder text. Default is 'ms-srch-sb-prompt ms-helperText' */
        set_promptCssClass(value: string): string;
        
        get_tryInplaceQuery(): boolean;
        set_tryInplaceQuery(value: boolean): boolean;
        
        /** Gets the id of the search box input element */
        get_searchBoxInputId(): string;
        /** Sets the id of the search box input element */
        set_searchBoxInputId(value: string): string;

        get_searchBoxContainerId(): string;
        set_searchBoxContainerId(value: string): string;
        
        get_navigationButtonId(): string;
        set_navigationButtonId(value: string): string;
        
        get_suggestionsListId(): string;
        set_suggestionsListId(value: string): string;
        
        get_navigationListId(): string;
        set_navigationListId(value: string): string;
        
        get_searchBoxInputElement(): Element;
        
        get_searchBoxProgressClass(): string;
        set_searchBoxProgressClass(value: string): string;
        
        get_searchBoxContainerElement(): Element;
        
        get_searchBoxLinkId(): string;
        set_searchBoxLinkId(value: string): string;
        
        get_searchBoxLinkElement(): Element;
        
        get_navigationNodes(): any;
        set_navigationNodes(value: any): any;
        
        get_msBeforeShowingProgress(): number;
        set_msBeforeShowingProgress(value: number): number;
        
        get_maintainQueryState(): boolean;
        set_maintainQueryState(value: boolean): boolean;
        
        get_querySuggestionsSourceID(): string;
        set_querySuggestionsSourceID(value: string): string;
        
        scriptApplication_PreLoad(sender: any, e: any): void;
        scriptApplication_PostLoad(sender: any, e: any): void;
        serverTemplateScriptsCallback(): any;

        add_queryReady(value: any): void;
        remove_queryReady(value: any): void;
        raiseQueryReadyEvent(arg: any): void;

        add_batchQueryIssuing(value: any): void;
        remove_batchQueryIssuing(value: any): void;
        raiseBatchQueryIssuingEvent(arg: any): void;

        add_batchResultReady(value: any): void;
        remove_batchResultReady(value: any): void;
        raiseBatchResultReadyEvent(arg: any): void;

        dataProvider_QueryStateChanged(sender: any, e: any): void;
        dataProvider_QueryIssuing(sender: any, e: any): void;
        dataProvider_ResultReady(sender: any, e: any): void;

        search(term: string): void;
        hidePrompt(): void;
        showPrompt(): void;
        focus(): void;
        setBorder(focused: boolean): void;

        activate(prompt: string, searchBoxInputId: string, searchBoxContainerId: string, navigationButtonId: string, suggestionsListId: string, navigationListId: string, searchBoxLinkId: string, searchBoxProgressClass: string, searchBoxPromptClass: string): void;
        activateDefaultNavigationBehavior(): void;
        activateDefaultQuerySuggestionBehavior(): void;

    }

    export class U
    {
        /** Returns true if the value parameter is null or empty string */
        static e(value: string): boolean;
        /** Returns true if the value parameter is empty string */
        static w(value: any): boolean; 
        /** Returns true if the value parameter is null or undefined */
        static n(value: any): boolean;
        /** Returns true if current page is in edit mode */
        static isPageInEditMode(): boolean;
        /** Returns true if current page is displayed in the Minimal Download Strategy (MDS) mode */
        static isPageInMdsMode(): boolean;
        
        static isPagePartialLoad(): boolean;
        /** Returns true if the current page uses right-to-left mode (RTL) */
        static isRTL(): boolean;

        /** Ensures that the given value is not null or undefined; throws an exception otherwise. */
        static ensureNotNullOrUndefined(value: any, context: any, methodName: string, paraName: string): void;
        /** Ensures that the given value is not null, undefined or empty; throws an exception otherwise. */
        static ensureNotNullOrEmptyString(value: string, context: any, methodName: string, paraName: string): void;
        /** Returns copy of the passed source dictionary */
        static copyDictionary(source: { [key: string]: any }): { [key: string]: any };
        /** Returns true if the obj parameter is null, undefined, number or string */
        static isPrimitive(obj: any): boolean;
        /** Returns true if the obj parameter is array */
        static isArray(obj: any): boolean;
        /** Safely pushes item to array (does nothing if the array is null or undefined) */
        static appendArray(array: any[], item: any): void;
        /** Safely sets field of an object (does nothing if either object or fieldName is null/empty); returns true if value was set */
        static setFieldOnObject(targetObject: any, fieldName: string, fieldValue: any): boolean;
        /** Safely gets field of an object (returns null if object is null or undefined) */
        static getFieldOnObject(targetObject: any, fieldName: string): any;
        /** Safely gets field of an object or creates it if it is null or undefined */
        static getOrCreateFieldOnObject(targetObject: any, fieldName: string, defaultValue: any): any;
        /** Safely gets field of an object (returns empty string instead of null as "getFieldOnObject") */
        static getStringFieldOnObject(targetObject: any, fieldName: string): string;
        /** Returns true if the specified item is found in the specified array (uses '===' for comparing) */
        static isInArray(array: any[], item: any): boolean;
        /** Removes the specified item from the specified array and returns array that has the deleted item */
        static removeArray(array: any[], item: any): any[];
        /** Removes trailing spaces and also replaces double spaces inside string to single spaces */
        static trimExtraSpaces(value: string): string;
        /** Adds the specified CSS class to element (if not there already) */
        static ensureCSSClassNameExist(e: Element, className: string): void;
        /** Removes the specified CSS class from the element */
        static ensureCSSClassNameNotExist(e: Element, className: string): void;
        /** Adds cookie with specified parameters */
        static setCookie(name: string, value: string, expires?: Date, domain?: string, path?: string): void;
        /** Gets cookie by name */
        static getCookie(name: string): string;
        /** Returns true if the specified URL belongs to the specified host name */
        static isSameHost(url: string, hostName: string): boolean;
        /** Returns the hostname of current page */
        static getHostName(): string;

        static trace(c: Srch.ClientControl, method: string, message: string): void;
        static traceFormatted(c: Srch.ClientControl, method: string, format: string, ...values: string[]): void;

        /** Same as $addHandler with safety checks */
        static addHandler(element: Element, eventName: string, handler: Function): void;
        /** Same as $removeHandler with safety checks */
        static removeHandler(element: Element, eventName: string, handler: Function): void

        /** Returns true if the specified element is a descendant of the container element */
        static isDescendant(element: Element, container: Element): boolean;
        /** Returns the closest to startingElement parent of the specified tag name */
        static getParentElementByName(startingElement: Element, tagName: string): Element;
        /** Returns the #s4-workspace element or if not found, then the fallback element */
        static getWorkspace(fallback: Element): Element;
        /** Returns specified by attributeName attribute of startingElement or of it's closest parent who has it */
        static getParentAttributeByName(startingElement: Element, attributeName: string): string;
        /** Returns the ClientControl associated with specified DOM element */
        static getClientComponent(e: Element): ClientControl;

        static getResultObject(id: string): any;
        static setResultObject(id: string, resultObject: any): any;
        static findResultObjectFromDOM(e: Element, type: string): any;

        /** Appends specified parameter key and value string to the specified URL */
        static appendUrlParameter(url: string, keyAndValue: string): string

        /** Ensures that the given URL protocol value is allowed. Returns the specified URL value if the protocol is allowed; empty string otherwise. */
        static ensureAllowedProtocol(value: string): string;
        /** Indicates whether the specified protocol is allowed. */
        static isProtocolAllowed(value: string, allowRelativeUrl: boolean): boolean;
        
        /** Returns true if the URL is a relative URL */
        static isUrlRelative(url: string): boolean;
        /** Returns true if the URL is a server-relative URL (i.e. starts with '/') */
        static isUrlServerRelative(url: string): boolean;
        /** Returns true if the URL is a relative URL, but not a server-relative URL */
        static isUrlPagelRelative(url: string): boolean;

        static logClick(e: any, clickType: any): void;
        static fillKeywordQuery(query: any, dp: any): void;
        
        /** Parses username out from SharePoint user field value */
        static getUsernameFromAuthorField(authorField: string): string;
        /** Parses user display name out from SharePoint user field value */
        static getDisplayNameFromAuthorField(authorField: string): string;
        /** Parses SharePoint array field value and returns array of strings */
        static getArray(value: string): string[];
        /** Converts file extension to a more friendly representation, e.g. 'doc' => 'file_Word' */
        static getFriendlyNameForFileExtension(fileExtension: string): string;
        /** Returns true if the fileExtension belongs to a webpage, e.g. 'ascx', 'aspx', 'html', 'php', etc.  */
        static isWebPage(fileExtension: string): boolean;
        /** Truncates the string to specified maximum allowed amount of characters (if max amount is not exceeded - does nothing) */
        static truncateEnd(original: string, maxChars: number): string;
        /** Returns true if specified by logoUrl image is one of default site logos */
        static isDefaultSiteLogo(logoUrl: string): boolean;
        /** Returns formatted date */
        static toFormattedDate(dateValue: Date, dateTimeFormatId?: string): string;
        /** Returns formatted number */
        static toFormattedNumber(num: number, defaultDecimalPlacesIfNotInt: number): string;
        /** If number is more than 1000, rounds up three last digits, e.g. 72389 => '72,000+'. If number is more than 100000, returns '100,000+' */
        static toFriendlyNumber(num: number): string;
        /** Returns human-readable size in kilobytes/megabytes etc. (the captions are localized) */
        static toFileSizeDisplay(numberOfBytes: number, showDecimalPart: boolean): string;

        static getVideoImageWithFallbackSource(valueObject: any, width: number, height: number): string;
        static getImageSourceWithRendition(imageInfo: any, width: number, height: number): string;
        static parseTypedRangeToken(rangeFilterToken: string, objToStoreFilterTokenType: any): any;
        static modifyMediaDurationRefinementName(resultRow: any): void;
        static getDeepLinks(deeplinks: string, maxRows: number): string;
        static truncateUrl(url: string, maxChars: number): string;
        static truncateHighlightedUrl(url: string, maxChars: number): string;

        /** Copies the specified string to clipboard, if possible */
        static copyLink(link: string): void;
        
        /** Registers display template function in the system.
         *  @param name Identifier of the template. Usually template is registered twice: by URL and by name.
         *  @param template The display template. It can be either string, or function, that gets the CSR context object and returns HTML string
          */
        static registerRenderTemplateByName(name: string, templateFunction: string | { (ctx: any): string }): void;
        /** Returns display template registered (can be either string or function) */
        static getRenderTemplateByName(name: string, renderCtx: any): string | { (ctx: any): string };

        static addRenderContextCallback(renderCtx: any, callbackType: any, callbackFunction: any, enforceUnique: any, templateFunction: any): void;
        static setItemRenderWrapper(renderCtx: any, itemRenderWrapperFunction: any, templateFunction: any): any;
        static logRenderingErrorMessageToContext(renderCtx: any, messageText: any, operationName: any): void;
        /** Gets the URL of template based on display template function or the rendering context */
        static getTemplateUrlFromFunctionOrRenderCtx(templateFunctionOrRenderCtx: any): string;
        static createErrorObjectWithExecContext(messageText: any, operationName: any, templateFuncOrRenderCtx: any): any;
        /** Returns the CSR template that was previously registered using 'registerRenderTemplateByName' based on CSR template level */
        static resolveRenderTemplate(renderCtx: any, component: ClientControl, level: 'Item' | 'Group' | 'View' | 'Body'): string | { (ctx: any): string };

        /** Returns formatted time string from seconds string, which contains a number that represents amount of seconds passed since 00:00:00 today */
        static getFormattedTimeFromSeconds(secondsStr: string): string;
        /** Returns true if the keyCode is \n or \r */
        static isEnterKey(keyCode: any): boolean;

        /** Prevents default event action and stops further propagation of the event in the DOM */
        static cancelEvent(e: Event): void;
        /** Prevents default event action or/and stops further propagation of the event in the DOM */
        static cancelEventEx(e: Event, preventDefault: boolean, stopPropagation: boolean): void;
        /** Gets a value from 'Properties' field object of the specified parent object */
        static getTableProperty(parent: any, propName: string): any;
        /** Concatenates two URL fragments and returns resulting URL */
        static concatUrl(firstPart: string, secondPart: string): string;
        /** Returns URL to the html16.png image */
        static getIconUrl(): string;
        /** Returns URL to the folder.gif image */
        static getFolderIconUrl(): string;
        /** Returns URL of the appropriate file image based on the file type identifier (see getFriendlyNameForFileExtension) */
        static getIconUrlByFileExtension(item: string, defaultIconPath?: string): string;
        
        /** Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying true for wide parameter. */
        static getShowHoverPanelCallbackWide(itemId: string, hpContainerId: string, templateUrl: string): string;
        /** Returns string that contains safe call to HP.Show, passing over the itemId, hpContainerId and templateUrl parameters, and supplying false for wide parameter. */
        static getShowHoverPanelCallback(itemId: string, hpContainerId: string, templateUrl: string): string;
        /** Returns string that contains safe call to HP.Hide */
        static getHideHoverPanelCallback(): string;
        
        static getHighlightedProperty(key: string, result: any, property: string): any;
        static processHHXML(pre: string): string;
        static createXMLDocument(xml: string): XMLDocument;
        static getUnEncodedMultiValuedResults(multiValue: string, maxItems: number, rawDelimiter: string): string;
        static getTrimmedString(value: string, cutOff: number): string;
        static trimTitle(title: string, maximumLengthInChars: number, numberOfTermsToUse: number): string;
        static extractReplyTitleFromSummary(hitHighlightedSummary: string, titleLength: number): string;
        static getTrimmedProcessedHHXMLString(value: string, cutOff: number): string;
        static getMultipleHHXMLNodeValues(xmlDoc: XMLDocument, nodeName: string, numItems: number, rawDelimiter: string): string;
        static getSingleHHXMLNodeValue(xmlDoc: XMLDocument, nodeName: string): string;
        static isTableTypeof(resultTable: any, tableTypeName: string): boolean;
        static isSubstrateTable(resultTable: any): boolean;
        static getTableOfType(tableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection, tableTypeName: string): Microsoft.SharePoint.Client.Search.Query.ResultTable;
        static isFirstPromotedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static isFirstRankedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static isIntentTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
        static createBehavior(id: string, type: any, properties: any, targetElementId: string): any;
        
        /** Uses SPAnimation to animate an element */
        static animate(element: Element, animationID: any, finishFunc: any): void;
        static hideElement(element: Element): void;
        static showElement(element: Element): void;
        static positionElement(element: Element, offset: string): void;
        static resetElement(element: Element): void;
        static shouldAnimate(dp: any): boolean;
        static animateResults(result: Result, userAction: any): void;
        
        static loadScripts(scriptReferences: string[], success: any, failure: any, timeout: number): void;
        static appendScriptsToLoad(scripts: string[], script: string): void;
        static registerLoadedScripts(scripts: string[]): void;
        
        /** Returns HTML for collapsible refiner title */
        static collapsibleRefinerTitle(propertyName: string, idPrefix: string, title: string, iconClass: string, customOnClick: string): string;
        /** Returns true if current page is osssearchresults.aspx */
        static isDefaultSiteSearchPage(): boolean;
        /** Replaces tokens {searchcenterurl}, {contexturl}, {resultsurl}, {defaultpageslistname}, {Locale} and others, and converts URL to server-relative */
        static replaceUrlTokens(url: string): string;
        /** Adds ctag parameter to the URL and replaces URL tokens */
        static urlTokenExpansion(jsLink: string): string;
        
        static includeCSS(templateLink: string, relativeLink: string): void;
        static includeScript(templateLink: string, scriptLink: string): void;
        static includeLanguageScript(templateLink: string, scriptLink: string): void;

        static isSPFSKU(): boolean;
        /** Retrieves localized string with the specified id */
        static loadResource(id: string): string;
        /** Retrieves localized string with the specified id */
        static loadResourceForTemplate(id: string, templateFunc: {(ctx: any): string}): string;
        /** Registers in system resources defined by the dictionary object */
        static registerResourceDictionary(locale:string, dict: {[key: string]: string}): void;

        static restorePath(el: Element, originalText: string, selectText: string): void;
        static selectPath(text: string, el: Element): void;
        static setPath(e: Event, el: Element, text: string, originalText: string): void;
        static restoreText(el: Element, originalText: string, selectText: string): void;
        static selectText(text: string, el: Element): void;

        /** Renders datetime value in friendly format into element specified by targetElementID */
        static renderFriendlyTimeIntervalString(dateTimeSinceUTC: Date, targetElementID: string, calendarType?: number): void;
        /** Returns human-friendly representation of the datetime value, e.g. "A few seconds ago"" */
        static getFriendlyTimeInterval(dateTimeSince: Date, calendarType: number): string;
        /** Gets calendar type according to the current regional settings */
        static getCalendarType(): any;

        static htmlEncodeNonBase64ImageUrl(url: string): string;

        static hitHighlightingOpenTag: string;
        static hitHighlightingCloseTag: string;
        static titleTruncationLength: number;
        static titleTruncationLengthWithMetadata: number;
        static titleTruncationLengthWithPreview: number;
        static summaryTruncationLength: number;
        static summaryTruncationLengthWithPreview: number;
        static pathTruncationLength: number;
        static pathTruncationLengthWithPreview: number;
        static pathTruncationLengthWithMetadata: number;
        static personaControlRenderedThreshold: number;
        static maximumSocialMetadataValue: number;
        static contentFixedWidthLength: number;
    }

    export module U {
        export class PropNames
        {
            static renderTemplates: 'RenderTemplates';
            static renderTemplateId: 'RenderTemplateId';
            static tableType: 'TableType';
            static queryErrors: 'QueryErrors';
            static resultTables: 'ResultTables';
            static resultRows: 'ResultRows';
            static queryId: 'QueryId';
            static properties: 'Properties';
            static rowCount: 'RowCount';
            static totalRows: 'TotalRows';
            static totalRowsIncludingDuplicates: 'TotalRowsIncludingDuplicates';
            static queryRuleId: 'QueryRuleId';
            static parentTableReference: 'ParentTableReference';
            static isFirstPinnedBlock: 'IsFirstPinnedResultBlock';
            static isFirstRankedBlock: 'IsFirstRankedResultBlock';
        }

        export class Ids
        {
            static group: '_group';
            static groupTitle: '_groupTitle';
            static groupLink: '_groupLink';
            static groupContent: '_groupContent';
            static item: '_item';
            static body: '_itemBody';
            static title: '_itemTitle';
            static icon: '_itemIcon';
            static titleLink: '_itemTitleLink';
            static summary: '_itemSummary';
            static path: '_itemPath';
            static hover: '_hover';
            static visualBestBet: '_visualBestBet';
            static preview: '_itemPreview';
            static deepLinks: '_deepLinks';
            static members: '_members';
            static replies: '_replies';
            static discussions: '_discussions';
            static likes: '_likes';
            static postInfo: '_postInfo';
        }

        export class LoadScriptsState
        {
            scriptsToLoad: any;
            progress: number;
            timeoutHandle: any;
        }

        export enum LoadScriptsProgress
        {
            loading,
            success,
            failure
        }
    }

    export class ScriptApplicationManager
    {
        static get_current(): ScriptApplicationManager;
        static get_clientRuntimeContext(): SP.ClientRuntimeContext;
        /** Returns server-relative link to _layouts/EditUserPref.aspx */
        get_preferencesUrl(): string;
        /** Returns server-relative link to _layouts/manageresulttypes.aspx */
        get_resultTypesUrl(): string;
        /** Returns server-relative link to _layouts/DesignDisplayTemplates.aspx */
        get_displayTemplatesUrl(): string;
        /** Returns server-relative link to _layouts/listqueryrules.aspx */
        get_queryRulesUrl(): string;
        /** Returns server-relative link to _layouts/manageresultsources.aspx */
        get_resultSourcesUrl(): string;
        /** Returns absolute URL of the current page (without ? and # parts) */
        get_pagePath(): string;

        /** Adds handler for the preload event */
        add_preLoad(handlerFunction: Function): void;
        /** Removes handler for the preload event */
        remove_preLoad(handlerFunction: Function): void;
        /** Raises the preload event */
        raisePreLoadEvent(): void;

        /** Adds handler for the load event */
        add_load(handlerFunction: Function): void;
        /** Removes handler for the load event */
        remove_load(handlerFunction: Function): void;
        /** Raises the load event */
        raiseLoadEvent(): void;

        /** Adds handler for the postload event */
        add_postLoad(handlerFunction: Function): void;
        /** Removes handler for the postload event */
        remove_postLoad(handlerFunction: Function): void;
        /** Raises the postload event */
        raisePostLoadEvent(): void;

        initialize(): void;
        dispose(): void;

        /** Registers DisplayControl, DataProvider or SearchBox in the system.
         * After registration the controls will be correctly processed in the page search context.
         */
        registerClientControl(clientControl: DisplayControl | DataProvider | SearchBox): void;
        
        /** Puts specified hash-key address into the current page location.
         * @param url The hash-key, e.g. '#k=test'
         */
        navigateTo(url: string): void;

        /** Gets the current search session ID from the cookies (if session ID does not exist in the cookies yet - it will be added) */
        get_searchSessionID(): void;
    }

    export class Res
    {
        static sb_ResultsPageTitle: string;
        static sb_EmptyQueryWarning: string;
        static sb_InvalidResultPageURL: string;
        static sb_SitePrompt: string;
        static sb_Prompt: string;
        static sb_Prompt_NavNode: string;
        static sb_GoSearch: string;
        static sb_GoNav: string;
        static sb_AdvancedLink: string;
        static sb_PreferencesLink: string;
        static sb_AccessKey: string;
        static sb_SearchInProgress: string;
        static qs_PersonalResultTitleSingular: string;
        static qs_PersonalResultTitlePlural: string;
        static qs_NameSuggestionsTitle: string;
        static dp_ScriptLoadFailed: string;
        static rf_EmptyRefinement: string;
        static rf_RefinementTitle: string;
        static rf_RefineBy: string;
        static rf_All: string;
        static rf_RefineByAuthorGoButton: string;
        static rf_Apply: string;
        static rf_AddProperty: string;
        static rs_ResultsTitle: string;
        static rs_MoveToPage: string;
        static rs_MoveToPrevPage: string;
        static rs_MoveToNextPage: string;
        static rs_GroupMoreLink: string;
        static rs_Hide_Results: string;
        static qb_GetRecItems: string;
        static qb_ScopeRecItems: string;
        static qb_GetFillIn: string;
        static qb_ShowRecsOnly: string;
        static qb_FillInPopular: string;
        static qb_FillInPopularScope: string;
        static qb_FillInKeywords: string;
        static qb_NoCollapseString: string;
        static qb_ShowAllCollapseString: string;
        static qb_ShowRefinersOnly: string;
        static qb_RecsFromURLToken: string;
        static qb_Remove: string;
        static qb_FallbackResultTitle: string;
        static rf_DefaultNumberLabels_min: string;
        static rf_DefaultNumberLabels_max: string;
        static rf_DefaultNumberLabels_range: string;
        static rf_DefaultNumberLabels_value: string;
        static rf_DefaultDateRangeLabels_min: string;
        static rf_DefaultDateRangeLabels_max: string;
        static rf_DefaultDateRangeLabels_range: string;
        static rf_DefaultDateRangeLabels_value: string;
        static rf_DefaultDateBoundaryLabels_0: string;
        static rf_DefaultDateBoundaryLabels_1: string;
        static rf_DefaultDateBoundaryLabels_2: string;
        static rf_DefaultDateBoundaryLabels_3: string;
        static rf_RangeBoundariesAnyValue: string;
        static rf_RefinementTitle_Author: string;
        static rf_RefinementTitle_AuthorOWSUSER: string;
        static rf_RefinementTitle_Write: string;
        static rf_RefinementTitle_LastModifiedTime: string;
        static rf_RefinementTitle_owstaxidmetadataalltagsinfo: string;
        static rf_RefinementTitle_owsmetadatafacetinfo: string;
        static rf_RefinementTitle_languages: string;
        static rf_RefinementTitle_ContentType: string;
        static rf_RefinementTitle_Size: string;
        static rf_RefinementTitle_UrlDepth: string;
        static rf_RefinementTitle_People: string;
        static rf_RefinementTitle_FileType: string;
        static rf_RefinementTitle_FileExtension: string;
        static rf_RefinementLabel_More: string;
        static rf_ShowMoreResults_Tooltip: string;
        static rf_RefinementLabel_Less: string;
        static rf_RefinementLabel_EnterName: string;
        static rf_RefinementTitle_CreatedBy: string;
        static rf_RefinementTitle_from: string;
        static rf_RefinementTitle_recipients: string;
        static rf_RefinementTitle_subject: string;
        static rf_RefinementTitle_Kind: string;
        static rf_RefinementTitle_ContentClass: string;
        static rf_RefinementTitle_WebTemplate: string;
        static rf_RefinementTitle_participants: string;
        static rf_RefinementTitle_AttachmentType: string;
        static rf_RefinementTitle_BaseOfficeLocation: string;
        static rf_RefinementTitle_companies: string;
        static rf_RefinementTitle_ContentTypeId: string;
        static rf_RefinementTitle_Created: string;
        static rf_RefinementTitle_Department: string;
        static rf_RefinementTitle_PeopleKeywords: string;
        static rf_RefinementTitle_DisplayAuthor: string;
        static rf_RefinementTitle_format: string;
        static rf_RefinementTitle_ImageDateCreated: string;
        static rf_RefinementTitle_JobTitle: string;
        static rf_RefinementTitle_Location: string;
        static rf_RefinementTitle_locations: string;
        static rf_RefinementTitle_ManagedProperties: string;
        static rf_RefinementTitle_MediaDuration: string;
        static rf_RefinementTitle_PeopleInMedia: string;
        static rf_RefinementTitle_personnames: string;
        static rf_RefinementTitle_PictureHeight: string;
        static rf_RefinementTitle_PictureWidth: string;
        static rf_RefinementTitle_PostAuthor: string;
        static rf_RefinementTitle_recommendedfor: string;
        static rf_RefinementTitle_Responsibilities: string;
        static rf_RefinementTitle_SharedWithInternal: string;
        static rf_RefinementTitle_Site: string;
        static rf_RefinementTitle_sitename: string;
        static rf_RefinementTitle_Tags: string;
        static rf_RefinementTitle_Title: string;
        static rf_ResultTypeRefinerValue_MSAccess: string;
        static rf_ResultTypeRefinerValue_AdobePDF: string;
        static rf_ResultTypeRefinerValue_Assignment: string;
        static rf_ResultTypeRefinerValue_Archive: string;
        static rf_ResultTypeRefinerValue_Blog: string;
        static rf_ResultTypeRefinerValue_Book: string;
        static rf_ResultTypeRefinerValue_Community: string;
        static rf_ResultTypeRefinerValue_Course: string;
        static rf_ResultTypeRefinerValue_Discussion: string;
        static rf_ResultTypeRefinerValue_Email: string;
        static rf_ResultTypeRefinerValue_MSExcel: string;
        static rf_ResultTypeRefinerValue_Image: string;
        static rf_ResultTypeRefinerValue_Lesson: string;
        static rf_ResultTypeRefinerValue_LotusNotes: string;
        static rf_ResultTypeRefinerValue_NewsfeedPost: string;
        static rf_ResultTypeRefinerValue_MSOneNote: string;
        static rf_ResultTypeRefinerValue_MSPowerPoint: string;
        static rf_ResultTypeRefinerValue_MSProject: string;
        static rf_ResultTypeRefinerValue_MSPublisher: string;
        static rf_ResultTypeRefinerValue_SharePointSite: string;
        static rf_ResultTypeRefinerValue_Task: string;
        static rf_ResultTypeRefinerValue_TeamSite: string;
        static rf_ResultTypeRefinerValue_Text: string;
        static rf_ResultTypeRefinerValue_Video: string;
        static rf_ResultTypeRefinerValue_Visio: string;
        static rf_ResultTypeRefinerValue_Wiki: string;
        static rf_ResultTypeRefinerValue_Webpage: string;
        static rf_ResultTypeRefinerValue_MSWord: string;
        static rf_ResultTypeRefinerValue_XML: string;
        static rf_OtherValue: string;
        static rf_ClearAll: string;
        static cc_err_WebPartErrorMessageDisplayHeader: string;
        static cc_err_DataErrorMessageDisplayHeader: string;
        static cc_err_RenderingErrorMessageDisplayHeader: string;
        static cc_err_TemplateNotFoundMessage: string;
        static cc_err_HiddenWithNoResultsWarningMessage: string;
        static cc_err_ShowMessageDetails: string;
        static cc_err_HideMessageDetails: string;
        static cc_err_CorrelationIdMessage: string;
        static cc_err_CustomLocStringWarningDisplayHeaderFormat: string;
        static cc_err_NoCustomLoadedLocStringWarningDisplayHeaderFormat: string;
        static cc_err_MalformedHeader: string;
        static cc_err_QueryThrottledDetailsHeader: string;
        static cc_ValueRenderer_FileSizeKilobyte: string;
        static cc_ValueRenderer_FileSizeMegabyte: string;
        static cc_ValueRenderer_FileSizeGigabyte: string;
        static cc_ValueRenderer_BooleanYes: string;
        static cc_ValueRenderer_BooleanNo: string;
        static qb_SortTab_ThenBy: string;
        static qb_SortTab_ChangeRankingWhen: string;
        static qb_SortTab_OrWhen: string;
        static qb_TestQueryTab_ShowAdvanced: string;
        static qb_TestQueryTab_HideAdvanced: string;
        static recs_ControlTitle: string;
        static recs_ShowDetails: string;
        static recs_SaveLink: string;
        static recs_Open: string;
        static recs_Recommended: string;
        static recs_Fillin: string;
        static recs_LastEditedBy: string;
        static recs_Location: string;
        static recs_AltIcon: string;
        static pkr_CatalogPickerMoreLink: string;
        static pkr_CatalogPickerMoreLinkToolTip: string;
        static pkr_CatalogPickerSelectLinkToolTip: string;
        static item_CopyLink: string;
        static item_Tooltip_CopyLink: string;
        static item_Alt_Preview: string;
        static hp_Tooltip_Close: string;
        static hp_Size: string;
        static hp_Views_Singular: string;
        static hp_Views_Plural: string;
        static hp_ViewsLifeTime: string;
        static hp_Popularity: string;
        static hp_PopularityLifeTimePlural: string;
        static hp_PopularityLifeTimePluralAndRecentPlural: string;
        static hp_PopularityLifeTimeSingular: string;
        static hp_PopularityLifeTimeSingularAndRecentSingular: string;
        static hp_PopularityLifeTimePluralAndRecentSingular: string;
        static hp_Tooltip_ViewsLifeTime: string;
        static hp_Tooltip_ViewsRecent: string;
        static hp_ChangedByAuthorDate: string;
        static hp_Tooltip_Views: string;
        static hp_LastModified: string;
        static hp_Tooltip_LastModified: string;
        static hp_RecentlyEdited: string;
        static hp_Tooltip_Contributors: string;
        static hp_Authors2: string;
        static hp_Authors3: string;
        static hp_Authors4: string;
        static hp_Authors5Singular: string;
        static hp_Authors5Plural: string;
        static hp_RecentlyEdited_eDiscovery: string;
        static hp_Tooltip_RecentlyEdited_More: string;
        static hp_RecentlyEdited_More: string;
        static hp_ViewDuplicates: string;
        static hp_Tooltip_ViewDuplicates: string;
        static hp_ViewLibrary: string;
        static hp_Tooltip_ViewLibrary: string;
        static hp_Send_Title: string;
        static hp_Send_Open: string;
        static hp_Send_OpenInClient: string;
        static hp_Send_OpenInWeb: string;
        static hp_Send_ViewRelated: string;
        static hp_Send: string;
        static hp_Tooltip_Send: string;
        static hp_OpenInClient: string;
        static hp_Edit: string;
        static hp_Follow: string;
        static hp_NoData: string;
        static hp_Tooltip_OpenInClient: string;
        static hp_Alt_ImagePreview: string;
        static hp_PictureDimensions: string;
        static hp_PictureHeightWidth: string;
        static hp_DateTaken: string;
        static hp_SectionHeadings: string;
        static hp_Alt_SiteLogo: string;
        static hp_SiteDescription: string;
        static hp_Open: string;
        static hp_Tooltip_Open: string;
        static hp_Tooltip_Follow: string;
        static hp_Tooltip_StopFollowing: string;
        static tprprt_Recent: string;
        static tprprt_Lifetime: string;
        static tprprt_excel_report_entrypoint: string;
        static qb_token_Equals: string;
        static qb_token_NotEquals: string;
        static qb_token_GreaterThan: string;
        static qb_token_LessThan: string;
        static qb_token_Contains: string;
        static qb_token_NotContains: string;
        static qb_token_ContainsStartsWith: string;
        static qb_token_StartsWith: string;
        static qb_token_NotStartsWith: string;
        static qb_token_SiteColletion: string;
        static qb_token_Site: string;
        static qb_token_Page: string;
        static qb_token_Topic: string;
        static qb_token_TopicIdWithChildren: string;
        static qb_token_UserName: string;
        static qb_token_PreferredContentLanguage: string;
        static qb_token_Date: string;
        static qb_token_SearchBoxQuery: string;
        static qb_token_SearchTerms: string;
        static qb_token_QueryString: string;
        static qb_token_URLToken: string;
        static qb_token_PageField: string;
        static qb_token_SiteLocale: string;
        static qb_token_DisplayLanguage: string;
        static qb_token_OnlySites: string;
        static qb_token_OnlyLists: string;
        static qb_token_OnlyListItems: string;
        static qb_path_SiteCollection: string;
        static qb_path_Site: string;
        static qb_path_Page: string;
        static qb_path_List: string;
        static qb_path_Catalog: string;
        static qb_path_QueryString: string;
        static qb_path_URL_token: string;
        static qb_path_URL: string;
        static qb_path_None: string;
        static qb_ContentType_Article: string;
        static qb_ContentType_Audio: string;
        static qb_ContentType_DocSet: string;
        static qb_ContentType_Page: string;
        static qb_ContentType_Picture: string;
        static qb_ContentType_Report: string;
        static qb_ContentType_Task: string;
        static qb_ContentType_Video: string;
        static qb_ContentType_WikiPage: string;
        static qb_PathControl_ChooseQueryString: string;
        static qb_PathControl_ChooseURL: string;
        static qb_PathControl_ChooseTag: string;
        static qb_PathControl_ChooseTag_None: string;
        static qb_PathControl_ChooseTag_ThisTag: string;
        static qb_PathControl_ChooseTag_Topic: string;
        static qb_PathControl_ChooseTag_SubTopic: string;
        static qb_UserQuery_TypeQuery: string;
        static qb_UserQuery_Properties: string;
        static qb_UserQuery_AddToken: string;
        static qb_UserQuery_ChooseContentType: string;
        static qb_UserQuery_AddAdditionalFilter: string;
        static qb_UserQuery_ChooseSort: string;
        static qb_UserQuery_PickCatalog2: string;
        static qb_UserQuery_ConfigureCatalog: string;
        static qb_UserQuery_ManualValue: string;
        static qb_UserQuery_SelectProperty: string;
        static qb_UserQuery_SelectValue: string;
        static qb_UserQuery_ShowAllProperties: string;
        static qb_QueryType_UserQuery: string;
        static qb_QueryType_Latest: string;
        static qb_QueryType_ContentType: string;
        static qb_QueryType_RecommendedItems: string;
        static qb_QueryType_Popular: string;
        static qb_QueryType_Video: string;
        static qb_QueryType_Catalog: string;
        static qb_Error_SourceIdInvalid: string;
        static qb_Tab_FilterBy: string;
        static qb_Tab_QueryHelper: string;
        static qb_Tab_SortBy: string;
        static qb_Tab_TestQuery: string;
        static qb_Tab_Settings: string;
        static qb_NotApplicable: string;
        static qb_ComplexObject: string;
        static qb_PreviewResult_NoTemplateVariables: string;
        static qb_PreviewResult_CouldNotResolveTemplateVariables: string;
        static qb_PreviewResult_ErrorExpandTokens: string;
        static qb_PreviewResult_EmptyQuery: string;
        static searchResult_NoResult: string;
        static qb_CatalogPicker_Title: string;
        static qb_UseDefinedSort: string;
        static hp_Duration: string;
        static hp_PeopleInVideo: string;
        static hp_PostedBy: string;
        static hp_VideoDescription: string;
        static hp_GoToVideoPage: string;
        static item_Community_Member: string;
        static item_Community_Members: string;
        static item_Community_MemberLabel: string;
        static item_Community_MembersLabel: string;
        static item_Reply: string;
        static item_Replies: string;
        static item_ReplyLabel: string;
        static item_RepliesLabel: string;
        static item_NoReplies: string;
        static item_Like: string;
        static item_Likes: string;
        static item_NoLikes: string;
        static item_RepliesAndLikes: string;
        static item_MoreThan: string;
        static item_DefaultTitle: string;
        static item_BestReply: string;
        static item_postDate: string;
        static item_postAuthor: string;
        static item_postAuthorDate: string;
        static item_replyDate: string;
        static item_replyAuthor: string;
        static item_replyAuthorDate: string;
        static item_Community_Discussion: string;
        static item_Community_Discussions: string;
        static item_Community_DiscussionLabel: string;
        static item_Community_DiscussionsLabel: string;
        static hp_Discussion: string;
        static hp_DiscussionCategory: string;
        static hp_Reply: string;
        static hp_ReplyCategory: string;
        static hp_PopularDiscussions: string;
        static hp_OriginalPost: string;
        static hp_RecentReplies: string;
        static hp_ViewDiscussion: string;
        static hp_ViewConversation: string;
        static hp_Community: string;
        static hp_VisitCommunity: string;
        static hp_MicroBlog: string;
        static item_MicroBlog_Reply: string;
        static item_MicroBlog_Replies: string;
        static item_MicroBlog_Like: string;
        static item_MicroBlog_Likes: string;
        static item_MicroBlog_NoReplies: string;
        static item_MicroBlog_SeeFullConversation: string;
        static item_MicroBlog_RootPostTitle: string;
        static item_People_Responsibilities: string;
        static item_People_Skills: string;
        static item_People_PastProjects: string;
        static item_People_Interests: string;
        static item_People_Schools: string;
        static item_People_Memberships: string;
        static item_People_EditProfileLink: string;
        static item_People_SelfSearchFrequency: string;
        static item_People_SelfSearchFrequency_ViewsMonths_Singular: string;
        static item_People_SelfSearchFrequency_ViewsMonths_Plural: string;
        static item_People_SelfSearchFrequency_ViewsWeeks_Singular: string;
        static item_People_SelfSearchFrequency_ViewsWeeks_Plural: string;
        static item_People_SelfSearchKeywords: string;
        static item_People_LastModified: string;
        static item_People_NoPresenceAvailable: string;
        static hp_PeopleItem_Skills: string;
        static hp_PeopleItem_PastProjects: string;
        static hp_PeopleItem_Interests: string;
        static hp_PeopleItem_Schools: string;
        static hp_PeopleItem_Summary: string;
        static hp_PeopleItem_Memberships: string;
        static hp_PeopleItem_Authorship: string;
        static hp_PeopleItem_RelatedThrough: string;
        static hp_PeopleItem_MoreItems: string;
        static hp_PeopleItem_Related: string;
        static hp_PeopleItem_NoInformationAvailable: string;
        static hp_PeopleItem_ViewProfile: string;
        static hp_WebPageItem_Results: string;
        static hp_WebPageItem_MoreResults_Label: string;
        static rs_Preferences: string;
        static rs_Advanced: string;
        static rs_NoResult: string;
        static rs_SingleResultCount: string;
        static rs_ResultCount: string;
        static rs_ApproximateResultCount: string;
        static rs_EdiscoveryTopResultCount: string;
        static rs_UpscopeTitle: string;
        static rs_Upscope: string;
        static rs_DidYouMean: string;
        static rs_Edit_ResultSourcesTitle: string;
        static rs_Edit_ResultTypesTitle: string;
        static rs_Edit_QueryRulesTitle: string;
        static rs_Edit_ResultSourcesDescription: string;
        static rs_Edit_ResultSources: string;
        static rs_Edit_ResultTypesDescription: string;
        static rs_Edit_ResultType: string;
        static rs_Edit_DisplayTemplate: string;
        static rs_Edit_QueryRulesDescription: string;
        static rs_Edit_QueryRules: string;
        static rs_Edit_PromotedTitle: string;
        static rs_Edit_RankedTitle: string;
        static rs_Edit_PromotedDescription: string;
        static rs_Edit_RankedDescription: string;
        static rs_Edit_ConfigureSearchResults: string;
        static rs_Edit_ConfigureSearchResults_Link: string;
        static rs_NoResultsTitle: string;
        static rs_NoResultsMessageWhenSearchSkipped: string;
        static rs_NoResultsSuggestions: string;
        static rs_NoResultsSpelling: string;
        static rs_NoResultsDifferentTerms: string;
        static rs_NoResultsGeneralTerms: string;
        static rs_NoResultsFewerTerms: string;
        static rs_NoResultsRefiners: string;
        static rs_NoResultsTips: string;
        static rs_NoResultsTips_Link: string;
        static us_NoTerm_Error: string;
        static u_ScriptLoadFail: string;
        static u_ScriptLoadFailForViewer: string;
        static item_NoImageMessage: string;
        static control_NoResultsDisplayMode: string;
        static control_NoResultsEditMode: string;
        static file_CSS: string;
        static file_Help: string;
        static file_Installer: string;
        static file_JavaScript: string;
        static file_Log: string;
        static file_Mail: string;
        static file_Access: string;
        static file_Excel: string;
        static file_InfoPath: string;
        static file_OneNote: string;
        static file_PowerPoint: string;
        static file_Project: string;
        static file_Publisher: string;
        static file_SPDesigner: string;
        static file_Visio: string;
        static file_Word: string;
        static file_XPS: string;
        static file_Audio: string;
        static file_RTF: string;
        static file_Text: string;
        static file_WebPage: string;
        static file_XML: string;
        static file_XSL: string;
        static file_Zip: string;
        static ct_Folder: string;
        static ct_Image: string;
        static file_Document: string;
        static cc_sts_list_announcements: string;
        static cc_sts_list_events: string;
        static cc_sts_list_contacts: string;
        static cc_sts_list_discussionboard: string;
        static cc_sts_list_documentlibrary: string;
        static cc_sts_listitem_documentlibrary: string;
        static cc_sts_list_links: string;
        static cc_sts_list: string;
        static cc_sts_listitem: string;
        static cc_sts_list_picturelibrary: string;
        static cc_sts_listitem_picturelibrary: string;
        static cc_sts_web: string;
        static cc_sts_site: string;
        static cc_sts_list_survey: string;
        static cc_sts_list_tasks: string;
        static cc_sts_list_xmlform: string;
        static rs_SortDescription: string;
        static rs_SocialDistanceSort: string;
        static rs_LanguageDescription: string;
        static rs_LanguagePreferences: string;
        static rs_PreferredSearchLanguage: string;
        static rs_MoreLanguages: string;
        static rs_SearchScope: string;
        static rs_SearchScopeTooltip: string;
        static rs_SelectPreferredSearchLanguage: string;
        static rs_SelectPreferredSearchLanguage_Language: string;
        static edu_BookAuthor: string;
        static edu_BookCategory: string;
        static edu_BookRights: string;
        static edu_BookReleaseDate: string;
        static edu_BookHomePageLink: string;
        static edu_Class: string;
        static edu_AssignmentCategory: string;
        static edu_AssignmentFormat: string;
        static edu_AssignmentFormatNone: string;
        static edu_AssignmentFormatOnlineFile: string;
        static edu_AssignmentFormatOnlineQuiz: string;
        static edu_AssignmentFormatInClass: string;
        static edu_AssignmentFormatUnknown: string;
        static edu_AssignmentMaxPoints: string;
        static edu_DueDate: string;
        static edu_ReadPermission: string;
        static edu_PrintPermission: string;
        static edu_WritePermission: string;
        static edu_EnableScriptPermission: string;
        static edu_AssignmentLabel: string;
        static edu_LessonLabel: string;
        static edu_BookLabel: string;
        static rf_RefinementTitle_DMSDocAuthor: string;
        static rf_RefinementTitle_DMSCategory: string;
        static rf_RefinementTitle_EDiscSpecifyProperty: string;
        static refconf_NoSampleValues: string;
        static refconf_SortBy_Name: string;
        static refconf_SortBy_Number: string;
        static refconf_SortBy_Count: string;
        static refconf_SortDirection_Ascending: string;
        static refconf_SortDirection_Descending: string;
        static refconf_Error_FailedToRestoreConfiguration: string;
        static refconf_Section_SuggestedRefiners: string;
        static refconf_Section_OtherRefiners: string;
        static refconf_Section_Separator: string;
        static refconf_SampleValuesDialog_Title: string;
        static refconf_ResultsWithValues: string;
        static refconf_TotalResults: string;
        static refconf_FNT_ConfigurationLoadFailure: string;
        static refconf_FNT_ConfigurationLoadWarning: string;
        static refconf_FNT_ConfigurationLoadWarningNullResponse: string;
        static refconf_FNT_InheritModeTermInfoSingularFormatString: string;
        static refconf_FNT_DCR_InheritModeAnotherTermset: string;
        static refconf_FNT_DCR_CustomRefiners: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsTotal: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsNotInheriting: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheriting: string;
        static refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheritingLinkAnchor: string;
        static refconf_FNT_DCR_StopInheritingPopupTitle: string;
        static refconf_FNT_DCR_InheritPopupTitle: string;
        static refconf_FNT_DCR_RefinementConfigurationDialogTitle: string;
        static refconf_FNT_DCR_LoadingConfiguration: string;
        static refconf_FNT_DCR_DescendantStoppingInheritancePopupTitle: string;
        static refconf_FNT_DCR_UseManualIntervals: string;
        static refconf_FNT_DCR_RefinementPreviewPopupTitle: string;
        static refconf_FNT_DCR_PropertiesForFriendly: string;
        static refconf_FNT_DCR_PropertiesFor: string;
        static refconf_FNT_DCR_TotalResultsTooltip: string;
        static refconf_FNT_DCR_GeneratingPreview: string;
        static refconf_DCR_Yes: string;
        static refconf_DCR_No: string;
        static refconf_DCR_FacetedNavigationProgressTitle: string;
        static refconf_DCR_RefinementConfigurationDialogProgressTitle: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltip: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipNoAliases: string;
        static refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator: string;
        static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Warning: string;
        static refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Error: string;
        static refconf_DCR_RefinementConfigurationDialog_NoSuggestedRefiners_Warning: string;
        static refconf_DCR_RefinementConfigurationDialog_InvalidSelectedRefiner_Warning: string;
        static edisc_MultiValueFormat: string;
        static edisc_NoSubject: string;
        static edisc_ControlPagingFormat: string;
        static hp_Summary: string;
        static rf_DefaultMinutesLabels_min: string;
        static rf_DefaultMinutesLabels_max: string;
        static rf_DefaultMinutesLabels_range: string;
        static rf_DefaultMinutesLabels_value: string;
        static hp_NowDateTime_Today: string;
        static hp_NowDateTime_Yesterday: string;
        static hp_NowDateTime_MonthAgo: string;
        static hp_NowDateTime_YearAgo: string;
        static hp_NowDateTime_DaysAgo: string;
        static hp_NowDateTime_MonthsAgo: string;
        static hp_NowDateTime_YearsAgo: string;
        static rs_UpScopeActionPhrase: string;
        static control_Content_NoResultsDisplayMode: string;
        static control_RollupPage_NoResultsDisplayMode: string;
        static control_Content_NoResultsEditMode: string;
        static item_Diagnostic_PictureSlot: string;
        static item_Diagnostic_PathSlot: string;
        static item_Diagnostic_Preview: string;
        static item_Diagnostic_Value: string;
        static item_Diagnostic_MappedManagedProperty: string;
        static item_Diagnostic_PropertyMappings: string;
        static item_Diagnostic_SlotNameFormat: string;
        static item_Diagnostic_ItemTitleFormat: string;
        static hp_Preview_LoadingImgAlt: string;
        static rf_EDiscExTypeRefinerValue_Email: string;
        static rf_EDiscExTypeRefinerValue_Contacts: string;
        static rf_EDiscExTypeRefinerValue_Meetings: string;
        static rf_EDiscExTypeRefinerValue_Tasks: string;
        static rf_EDiscExTypeRefinerValue_Notes: string;
        static rf_EDiscExTypeRefinerValue_Documents: string;
        static rf_EDiscExTypeRefinerValue_Journal: string;
        static rf_EDiscExTypeRefinerValue_IM: string;
        static control_EDisc_Subject: string;
        static control_EDisc_Recipients: string;
        static control_EDisc_Sender: string;
        static control_EDisc_DateSent: string;
        static control_EDisc_Title: string;
        static control_EDisc_Author: string;
        static control_EDisc_DateModified: string;
        static hp_EDisc_Cc: string;
        static hp_EDisc_Bcc: string;
        static item_Content_GenericNoImageSymbol: string;
        static hp_EDisc_From: string;
        static hp_EDisc_To: string;
        static hp_EDisc_AttachmentsTooltip: string;
        static control_EDisc_DateSentTooltip: string;
        static rs_AlertMe: string;
        static item_Generic_OpenCalloutTooltip: string;
        static item_CommunityPortal_DetailsIntervals: string;
        static item_CommunityPortal_DetailsMembers: string;
        static item_CommunityPortal_DetailsDiscussions: string;
        static item_CommunityPortal_DetailsReplies: string;
        static item_CommunityPortal_Date: string;
        static item_CommunityPortal_MoreDetails: string;
        static ar_htv_Follow: string;
        static ar_htv_StartFollowing: string;
        static ar_htv_StopFollowing: string;
        static ar_rec_NoResults: string;
        static ar_Explanation: string;
        static ar_htv_IsFollowed: string;
        static ar_htv_IsNotFollowed: string;
        static hp_Post: string;
        static hp_Tooltip_Post: string;
        static rs_PartialResultWarning_Line1: string;
        static rs_PartialResultWarning_Line2: string;
        static rs_HasParseExceptionWarning_Line1: string;
        static rs_HasParseExceptionWarning_Line2: string;        
    }

}

/** Returns true if the value parameter is null or empty string */
declare function $isEmptyString(value: string): boolean;
/** Returns true if the value parameter is null or undefined */
declare function $isNull(value: any): boolean;
/** Returns true if the specified item is found in the specified array (uses '===' for comparing) */
declare function $isInArray(array: any[], item: any): boolean;
/** Returns true if the specified array is null or empty */
declare function $isEmptyArray(array: any[]): boolean;
/** (alias for SP.Utilities.HttpUtility.htmlEncode) */
declare function $htmlEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode) */
declare function $scriptEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.urlKeyValueEncode) */
declare function $urlKeyValueEncode(s: string): string;
/** (alias for SP.Utilities.HttpUtility.urlPathEncode) */
declare function $urlPathEncode(s: string): string;
/** Ensures that url has correct protocol or is a relative URL, and html-encodes it.
 * If URL is incorrect, returns empty string. */
declare function $urlHtmlEncode(s: string): string;

declare function $imgSrcUrl(p: any): string;
declare function $contentLineText(p: any): any;

/** Returns the ClientControl associated with specified DOM element (alias for Srch.U.getClientComponent) */
declare function $getClientControl(e: Element): Srch.ClientControl;

/** (alias for Srch.U.getResultObject) */
declare function $getResultItem(id: string): any;
/** (alias for Srch.U.setResultObject) */
declare function $setResultItem(id: string, resultObject: any): void;
/** (alias for Srch.U.getResultObject) */
declare function $getResultObject(id: string): any;
/** (alias for Srch.U.setResultObject) */
declare function $setResultObject(id: string, resultObject: any): void;
/** (alias for Srch.U.findResultObjectFromDOM) */
declare function $findResultObjectFromDOM(e: Element, type: string): void;

declare function $getItemValue(ctx: any, nameToLookup: string): any;
declare function $getCachedItemValue(ctx: any, nameToLookup: string): any;

declare function $includeScript(templateLink: string, relativeLink: string): void;
declare function $includeCSS(templateLink: string, scriptLink: string): void;
declare function $includeLanguageScript(templateLink: string, scriptLink: string): any;
/** Registers in system resources defined by the dictionary object (alias for Srch.U.registerResourceDictionary) */
declare function $registerResourceDictionary(locale:string, dict: {[key: string]: string}): void;
/** Retrieves localized string with the specified id */
declare function $resource(id: string): string;
/** (calls Srch.U.setItemRenderWrapper) */
declare function $setItemWrapperCallback(renderCtx: any, itemWrapperFunction: any): void;
/** (calls Srch.U.addRenderContextCallback) */
declare function $addRenderContextCallback(renderCtx: any, itemWrapperFunction: any): void;

