// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../microsoft-ajax/microsoft.ajax.d.ts" />
/// <reference path="SP.d.ts" />
/// <reference path="clienttemplates.d.ts" />

declare var _spBodyOnLoadFunctions: Function[];
declare var _spBodyOnLoadFunctionNames: string[];
declare var _spBodyOnLoadCalled: boolean;
declare function ExecuteOrDelayUntilBodyLoaded(initFunc: () => void): void;
declare function ExecuteOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean;
declare function ExecuteOrDelayUntilEventNotified(func: Function, eventName: string): boolean;
declare var Strings: any;


declare namespace SP {
    export var Ribbon: any;

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

    export namespace ListOperation {
        export class ViewOperation {
            static getSelectedView(): string;
            static navigateUp(viewId: string): void;
            static refreshView(viewId: string): void;
        }
        export class Selection {
            static selectListItem(iid: string, bSelect: boolean): void;
            static getSelectedItems(): { id: number; fsObjType: FileSystemObjectType; }[];
            static getSelectedList(): string;
            static getSelectedView(): string;
            static navigateUp(viewId: string): void;
            static deselectAllListItems(iid: string): void;
        }
        export class Overrides {
            static overrideDeleteConfirmation(listId: string, overrideText: string): void;
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