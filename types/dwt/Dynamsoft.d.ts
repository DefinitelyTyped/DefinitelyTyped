import { DynamsoftEnums } from "./Dynamsoft.Enum";
import { WebTwain } from "./WebTwain";
import { Settings } from "./Addon.OCRPro";
import { FileUploader } from "./Dynamsoft.FileUploader";

export namespace DynamsoftStatic {
    let Lib: DynamsoftLib;
    let MSG: Messages;
    let WebTwainEnv: WebTwainEnv;
    let managerEnv: ManagerEnv;
    let FileUploader: FileUploader;
    namespace WebTwain {
        namespace Addon {
            namespace OCRPro {
                function NewSettings(): Settings;
            }
        }
    }
}
export interface DWTInitialConfig {
    WebTwainId: string;
    Host?: string;
    Port?: string;
    SSLPort?: string;
}
export interface DynamsoftLib {
    /**
     * A built-in method to set up a listener for the specified event type on the target element.
     * @param target Specify the HTML element.
     * @param type Specify the event
     * @param listener Specify the callback
     */
    addEventListener(target: HTMLElement, type: string, listener: EventListenerOrEventListenerObject): void;
    /**
     * Whether to enable debugging. Once enabled, debugging inforamtion is printed out in the browser console.
     */
    debug: boolean;
    detect: DSLibDetect;
    env: DSLibEnv;
    /**
     * Hide the built-in page mask
     */
    hideMask(): void;
    /**
     * Show the built-in page mask
     */
    showMask(): void;
    /**
     * Load the specified script.
     * @param url Specify the URL of the script.
     * @param bAsync Whether to load the script asynchronously.
     * @param callback Callback function triggered when the script is loaded.
     */
    getScript(url: string, bAsync: boolean, callback: () => void): void;
    /**
     * Load the specified scripts.
     * @param urls Specify the URLs of the scripts.
     * @param bAsync Whether to load the script asynchronously.
     * @param callback Callback function triggered when the scripts are all loaded.
     */
    getScripts(urls: string[], bAsync: boolean, callback: () => void): void;

    dlgLoadingShowStatus: boolean;
    product: Product;
    /**
     * The following Functions & Options are internal & ignored
     *
     * Addon_Events, Addon_Sendback_Events, Attributes, BGR2RGB, BIO, DOM,
     * DynamicLoadAddonFuns, DynamicWebTwain, EnumMouseButton, Errors,
     * Events, File, Index, IntToColorStr, LS, License, MobileFuns, Path,
     * ProgressBar, RGB2BGR, ShowLicenseDialog, UI, Uri
     * ajax, all, appendMessage, appendRichMessage, asyncQueue, atob,
     * attachAddon, attachProperty, attachPropertyUI, base64, bio, btoa,
     * cancelFrome, checkDomReady, checkNavInfoReady, clearMessage, clone,
     * closeAll, closeLoadingMsg, closeProgress, colorStrToInt, config,css,
     * currentStyle, detectButton, dialog, dialogShowStatus, dlgLoading,
     * dlgLoadingShowStatus, dlgProgress, dlgRef, doc, domReady,
     * each, empty, endsWith, error, escapeHtml, escapeRegExp, extend,
     * filter, fireEvent, fromUnicode, get, getAllCss, getColor, getCss,
     * getElDimensions, getHex, getHttpUrl, getLogger, getNavInfo,
     * getNavInfoByUAData, getNavInfoByUserAgent, getNavInfoSync, getRandom,
     * getRealPath, getWS, getWSUrl, getWheelDelta, globalEval, guid, hide,
     * html5, indexOf, initProgress, install,io, isArray, isBoolean, isDef,
     * isFunction, isLocalIP, isNaN, isNodeList, isNull, isNumber, isObject,
     * isPlainObject, isString, isUndef, isUndefined, isWindow, keys, makeArray,
     * mask, mix, needShowTwiceShowDialog, nil, noop, now, obj, one, openLoadingMsg,
     * page, param, parse, parseHTML, progressMessage, ready,
     * removeEventListener, replaceAll, replaceControl, setBtnCancelVisibleForProgress,
     * show, showLoadingMsg, showProgress, showProgressMsg, sizzle, sprintf, startWS,
     * startWSByIP, startsWith, stopPropagation, stringify, style, support, switchEvent,
     * tmp, toggle, trim, type, unEscapeHtml, uniq, unparam, upperCaseFirst, uriQuery,
     * urlDecode, urlEncode, utf8, vsprintf, win
     */
}
export interface DSLibDetect {
    /**
     * Whether or not the site is secure (Https://).
     */
    readonly ssl: boolean;
    readonly scriptLoaded: boolean;
    /**
     * The following Functions & Options are internal & ignored
     * OnCreatWS, OnDetectNext, StartWSByIPTimeoutId, StartWSTimeoutId,
     * aryReconnectSTwains, arySTwains, arySTwainsByIP, bFirst,
     * bNeedUpgradeEvent, bNoControlEvent, bOK, bPromptJSOrServerOutdated,
     * cUrlIndex, cssLoaded, dcpCallbackType, dcpStatus, detectType, getVersionArray,
     * isDWTVersionLatest, needUpgrade, onNoControl, onNotAllowedForChrome, ports,
     * starting, tryTimes, urls, viewerScriptLoaded, wasmScriptLoaded,
     * OnWebTwainPostExecute, OnWebTwainPreExecute, hideMask, showMask,
     * win64Ports, __WebTwainMain, __dialog
     */
}
export interface DSLibEnv {
    /**
     * Whether the browser is Chrome.
     */
    readonly bChrome: boolean;
    /**
     * Whether the browser is Edge.
     */
    readonly bEdge: boolean;
    /**
     * Whether the page is opening from the disk.
     */
    readonly bFileSystem: boolean;
    /**
     * Whether the browser is Firefox.
     */
    readonly bFirefox: boolean;
    /**
     * Whether the browser is IE.
     */
    readonly bIE: boolean;
    /**
     * Whether the browser is Safari.
     */
    readonly bSafari: boolean;
    /**
     * Whether the operating system is Linux.
     */
    readonly bLinux: boolean;
    /**
     * Whether the operating system is macOS.
     */
    readonly bMac: boolean;
    /**
     * Whether the operating system is mobile (Android & iOS & iPadOS).
     */
    readonly bMobile: boolean;
    /**
     * Whether the operating system is Windows.
     */
    readonly bWin: boolean;
    /**
     * Whether the operating system is 64bit Windows.
     */
    readonly bWin64: boolean;
    /**
     * The base path.
     */
    readonly basePath: string;
    /**
     * The WebSocket session id.
     */
    readonly WSSession: number;
    /**
     * The WebSocket version.
     */
    readonly WSVersion: string;
    /**
     * The plugin lenghth.
     */
    readonly iPluginLength: number;
    /**
     * Whether it is a desktop viewer.
     */
    isDesktopViewer(): boolean;
    /**
     * Whether it is a mobile viewer.
     */
    isMobileViewer(): boolean;
    /**
     * Whether it is a pad viewer.
     */
    isPadViewer(): boolean;
    /**
     * Whether the platform is 64bit.
     */
    readonly isX64: boolean;
    /**
     * Information about macOSX.
     */
    readonly macOSX: string;
    /**
     * OS version.
     */
    readonly osVersion: string;
    /**
     * The path type used to calculate the real path.
     */
    readonly pathType: number;
    /**
     * The version of Chrome.
     */
    readonly strChromeVersion: number | string;
    /**
     * The version of Firefox.
     */
    readonly strFirefoxVersion: number | string;
    /**
     * The version of IE.
     */
    readonly strIEVersion: number | string;
}
export interface WebTwainEnv {
    /**
     * Whether to install the ActiveX with CAB.
     */
    ActiveXInstallWithCAB: boolean;
    /**
     * The version of the ActiveX;
     */
    readonly ActiveXVersion: string;
    /**
     * Whether to create a WebTwain instance automatically upon page load.
     */
    AutoLoad: boolean;
    /**
     * Close a dialog opened by the method ShowDialog.
     */
    CloseDialog(): void;
    /**
     * A map of all WebTwain instances.
     */
    ContainerMap: any;
    /**
     * Define the Id and UI of the WebTwain instances.
     */
    Containers: Container[];
    /**
     * Create a WebTwain instance with UI.
     * @param ContainerId Specify the HTML element (typically of the type HTMLDivElement) to hold the UI.
     * @param host Specify the host.
     * @param port Specify the port.
     * @param portSSL Specify the SSL port.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     */
    CreateDWTObject(
        ContainerId: string,
        host: string,
        port: string | number,
        portSSL: string | number,
        successCallBack: (DWObject: WebTwain) => void,
        failureCallBack: (errorString: string) => void): void;
    /**
     * Create a WebTwain instance with UI.
     * @param ContainerId Specify the HTML element (typically of the type HTMLDivElement) to hold the UI.
     * @param host Specify the host.
     * @param port Specify the port.
     * @param portSSL Specify the SSL port.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     */
    CreateDWTObject(ContainerId: string, successCallBack: (DWObject: WebTwain) => void, failureCallBack: (errorString: string) => void): void;
    /**
     * Create a WebTwain instance without UI.
     * @param WebTwainId Specify the Id of the instance.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     */
    CreateDWTObjectEx(dwtInitialConfig: DWTInitialConfig, successCallBack: (DWObject: WebTwain) => void, failureCallBack: (errorString: string) => void): void;
    /**
     * Define the display info.
     */
    CustomizableDisplayInfo: DisplayInfo;
    /**
     * Remove and destroy a WebTwain instance.
     * @param Id Specify the instance with its ContainerId or WebTwainId.
     */
    DeleteDWTObject(Id: string): boolean;
    /**
     * Return the WebTwain instance specified by its ContainerId. If no parameter is provided, the first valid WebTwain instance is returnd.
     * @param ContainerId The ContainerId.
     */
    GetWebTwain(ContainerId?: string): WebTwain;
    /**
     * Return the WebTwain instance specified by its WebTwainId. If no parameter is provided, the first valid WebTwain instance is returnd.
     * @param WebTwainId The WebTwainId.
     */
    GetWebTwainEx(WebTwainId?: string): WebTwain;
    /**
     * Whether or not an md5 header `dwt-md5` should be included in HTTP upload requests.
     */
    IfAddMD5InUploadHeader: boolean;
    /**
     * Whether to confine the mask within the viewer element.
     */
    IfConfineMaskWithinTheViewer: boolean;
    /**
     * Whether to use ActiveX for IE 10 & 11.
     */
    IfUseActiveXForIE10Plus: boolean;
    /**
     * The version of the JavaScript script.
     */
    readonly JSVersion: string;
    /**
     * Create a WebTwain instance(s).
     */
    Load(): void;
    /**
     * A callback function that is executed when the WebTwain related files are not found.
     */
    OnWebTwainNotFound: () => {};
    /**
     * A callback function that is executed after a time-consuming operation.
     */
    OnWebTwainPostExecute: () => {};
    /**
     * A callback function that is executed before a time-consuming operation.
     */
    OnWebTwainPreExecute: () => {};
    /**
     * A callback function that is executed when a WebTwain instance is created.
     */
    OnWebTwainReady: () => {};
    /**
     * A callback function that is executed right before the creation of a WebTwain instance.
     */
    OnWebTwainWillInit: () => {};
    /**
     * The version of the PDF module (not the rasterizer).
     */
    PdfVersion: string;
    /**
     * The version of the plug-in edition.
     */
    PluginVersion: string;
    /**
     * Set or return the product key for the library. A product key is required to enables certain modules of the library.
     */
    ProductKey: string;
    /**
     * The product name.
     */
    readonly ProductName: string;
    /**
     * Attach the callback function to the specified event.
     * @param event Specify the event.
     * @param callback Specify the callback.
     */
    RegisterEvent(event: string, callback: (...args: any[]) => void): void;
    /**
     * Remove all authorizations for accessing local resources.
     */
    RemoveAllAuthorizations(): void;
    /**
     * Set or return where the library looks for resources files including service installers, CSS, etc.
     */
    ResourcesPath: string;
    /**
     * The version of the Linux edition (the service, not wasm).
     */
    ServerLinuxVersionInfo: string;
    /**
     * The version of the macOS edition (the service, not wasm).
     */
    ServerMacVersionInfo: string;
    /**
     * The version of the Windows edition (the service, not wasm).
     */
    ServerVersionInfo: string;
    /**
     * Built-in method to show a modal dialog.
     * @param width Width of the dialog.
     * @param height Height of the dialog.
     * @param content Content of the dialog.
     * @param simple Whether to show a simple dialog with no header.
     * @param hideCloseButton Whether to hide the close button.
     */
    ShowDialog(width: number, height: number, content: string, simple: boolean, hideCloseButton: boolean): void;
    /**
     * Remove and destroy all WebTwain instances.
     */
    Unload(): void;
    /**
     * Whether to download the wasm for Camera Addon to use on initialization.
     */
    UseCameraAddonWasm: boolean;
    /**
     * Whether to use the library in Local-Service mode or WASM mode.
     */
    UseLocalService: boolean;
    ConnectToTheService: () => void;
    initQueue: any[];
    /**
     * The following Functions & Options are internal & ignored
     * ActiveXIntegerited, CheckConnectToTheService,
     * ContainerMap, Debug, DynamicContainers,
     * DynamicDWTMap, GetLocalServiceStatus,IfCheck64bitServiceFirst,
     * IfCheckDCP, IfCheckDWT,
     * IfDisableDefaultSettings, IfDownload64bitService,
     * IfInstallDWTModuleWithZIP, IfUpdateService,
     * IfUseEmbeddedDownloadNoticeForActiveX, IfUseViewer,
     * OnWebTwainInitMessage, OnWebTwainNeedUpgrade,
     * OnWebTwainNeedUpgradeWebJavascript, OnWebTwainInitMessage
     * OnWebTwainOldPluginNotAllowed, OnWebTwainOldPluginNotAllowed
     * Trial, UseDefaultInstallUI, ViewerJSIntegerited,
     * inited, _srcUseLocalService
     */
}
export interface DisplayInfo {
    buttons: any;
    customProgressText: any;
    dialogText: any;
    errorMessages: any;
    generalMessages: any;
}
/**
 * Define default messages.
 */
export interface Messages {
    ConvertingToBase64: string;
    ConvertingToBlob: string;
    Downloading: string;
    Encoding: string;
    Err_BrowserNotSupportWasm: string;
    Init_AllJsLoaded: string;
    Init_CheckDWT: string;
    Init_CheckDWTVersion: string;
    Init_CheckingLicense: string;
    Init_CompilingWasm: string;
    Init_ConfiguringDWT: string;
    Init_CreatingDWT: string;
    Init_DownloadingWasm: string;
    Init_FireBeforeInitEvt: string;
    Init_GetLicenseInfoForDWT: string;
    Init_InitActiveX: string;
    Init_InitDynamsoftService: string;
    Init_InitH5: string;
    Init_InitWasm: string;
    Init_LoadingViewerJs: string;
    Init_LookingLicense: string;
    Init_SetLicenseForDWT: string;
    Loading: string;
    LoadingPdf: string;
    LoadingTiff: string;
    SavingPdf: string;
    SavingTiff: string;
    Uploading: string;
}
export interface ManagerEnv {
    IfUpdateService: boolean;
    resourcesPath: string;
}
/**
 * Interface for a WebTwain profile.
 */
export interface Container {
    WebTwainId: string;
    ContainerId?: string;
    Width?: string | number;
    Height?: string | number;
    bNoUI?: boolean;
    bLocalService?: boolean;
}
export interface Product {
    bActiveXEdition: boolean;
    bChromeEdition: boolean;
    bHTML5Edition: boolean;
    bPluginEdition: boolean;
    host: string;
    name: string;
}
declare const Dynamsoft: (typeof DynamsoftEnums & typeof DynamsoftStatic);
export default Dynamsoft;
