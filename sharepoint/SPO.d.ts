// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>
/// <reference path="SP.Init.d.ts"/>
/// <reference path="clienttemplates.d.ts"/>

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
declare class IE8Support {
    static arrayIndexOf<T>(array: T[], item: T, startIdx?: number): number;
    static attachDOMContentLoaded(handler: Function): void;
    static getComputedStyle(domObj: HTMLElement, camelStyleName: string, dashStyleName: string): string;
    static stopPropagation(evt: Event): void;
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
declare class Nav {
    static ajaxNavigate: AjaxNavigate;
    static convertRegularURLtoMDSURL(webUrl: string, fullPath: string): string;
    static isMDSUrl(url: string): boolean;
    static isPageUrlValid(url: string): boolean;
    static isPortalTemplatePage(url: string): boolean;
    static getAjaxLocationWindow(): string;
    static getSource(defaultSource?: string): string;
    static getUrlKeyValue(keyName: string, bNoDecode: boolean, url: string, bCaseInsensitive: boolean): string;
    static getWindowLocationNoHash(hre: string): string;
    static goToHistoryLink(el: HTMLAnchorElement, strVersion: string): void;
    static getGoToLinkUrl(el: HTMLAnchorElement): string;
    static goToLink(el: HTMLAnchorElement): void;
    static goToLinkOrDialogNewWindow(el: HTMLAnchorElement): void;
    static goToDiscussion(url: string): void;
    static onClickHook(evt: Event, topElm: HTMLElement): void;
    static pageUrlValidation(url: string, alertString: string): string;
    static parseHash(hash: string): Object;
    static navigate(url: string): void;
    static removeMDSQueryParametersFromUrl(url: string): string;
    static urlFromHashBag(hashObject: Object): string;
    static wantsNewTab(evt: Event): boolean;
}

/** Available only in SharePoint Online*/
declare class URI_Encoding {
    static encodeURIComponent(str: string, bAsUrl?: boolean, bForFilterQuery?: boolean, bForCallback?: boolean): string;
    static escapeUrlForCallback(str: string): string;
}

interface IListItem {
    ID: number;
    ContentTypeId: string;
}

/** Available only in SharePoint Online*/
declare namespace ListModule {
    export class Util {
        static createViewEditUrl(renderCtx: SPClientTemplates.RenderContext, listItem: IListItem, useEditFormUrl?: boolean, appendSource?: boolean): string;
        static createItemPropertiesTitle(renderCtx: SPClientTemplates.RenderContext, listItem: IListItem): string;
        static clearSelectedItemsDict(context: any): void;
        static ctxInitItemState(context: any): void;
        static getAttributeFromItemTable(itemTableParam: HTMLElement, strAttributeName: string, strAttributeOldName: string): string
        static getSelectedItemsDict(context: any): any;
        static removeOnlyPagingArgs(url: string): string;
        static removePagingArgs(url: string): string;
        static showAttachmentRows(): void;
    }
}

/** Available only in SharePoint Online*/
declare namespace SPThemeUtils {
    export function ApplyCurrentTheme(): void;
    export function WithCurrentTheme(resultCallback: Function): void;
    export function UseClientSideTheming(): boolean;
    export function Suspend(): void;
}
