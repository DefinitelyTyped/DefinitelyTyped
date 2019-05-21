// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

interface DynamsoftStatic<TElement extends Node = HTMLElement> {
	Lib: DynamsoftLib;
    WebTwainEnv: dwtEnv;
}

interface dwtEnv {
    AutoLoad: boolean;
    ProductKey: string;
    Trial: boolean;
    Containers: Container[];
    IfUseActiveXForIE10Plus: boolean;
    ResourcesPath: string;

    RegisterEvent(event: string, fn: (...args: any[]) => void): void;
    GetWebTwain(cid: string): WebTwain;
    Load(): void;
    Unload(): void;

    Debug: boolean;
    ActiveXInstallWithCAB: boolean;
    ActiveXVersion: string;
    ContainerMap: {};
    CreateDWTObject(newObjID: string, successFn: (dwtObject: WebTwain) => void, failurefn: (...args: any[]) => void): void;
    DeleteDWTObject(objID: string): void;
    DynamicContainers: string[];
    DynamicDWTMap: {};
    IfInstallDWTModuleWithZIP: boolean;
    /*ignored
    OnWebTwainInitMessage  OnWebTwainNeedUpgrade  OnWebTwainNeedUpgradeWebJavascript  OnWebTwainNotFound  OnWebTwainOldPluginNotAllowed
    */

    OnWebTwainPostExecute(): void;
    OnWebTwainPreExecute(): void;

    /*ignored
    OnWebTwainReady
    */
    JSVersion: string;
    PluginVersion: string;
    ServerVersionInfo: string;
	
    RemoveAllAuthorizations(): void;
    ShowDialog(_dialogWidth: number, _dialogHeight: number, _strDialogMessageWithHtmlFormat: string, _bChangeImage: boolean, bHideCloseButton: boolean): void;
    CloseDialog(): void;
    UseDefaultInstallUI: boolean;
    initQueue: any[];
    inited: boolean;
}

interface DynamsoftLib {
    /*ignored
    Addon_Events  Addon_Sendback_Events  AttachAndShowImage  BIO  DOM  DynamicLoadAddonFuns  DynamicWebTwain  EnumMouseButton
    Errors  Events  IntToColorStr  LS  OnGetImageByURL  OnGetImageFromServer  Path  ProgressBar  UI  Uri
    addEventListener  ajax  all  appendMessage  appendRichMessage  aryControlLoadImage  attachAddon  attachProperty
    base64  bio  cancelFrome  clearMessage  closeAll  closeProgress  colorStrToInt  config  css  currentStyle
    debug*/

    detect: {
        /*ignored
        OnCreatWS  OnDetectNext  OnWebTwainPostExecute  OnWebTwainPreExecute  StartWSByIPTimeoutId  StartWSTimeoutId
        aryReconnectSTwains  arySTwains  arySTwainsByIP  bFirst  bNeedUpgradeEvent  bNoControlEvent  bOK  bPromptJSOrServerOutdated
        cUrlIndex  dcpCallbackType  dcpStatus  detectType  getVersionArray  global_dlg  hideMask  isDWTVersionLatest  onNoControl
        onNotAllowedForChrome  ports  scriptLoaded  showMask  starting  tryTimes*/
        ssl: boolean;
    };

    /*ignored
    detectButton  dialog  dialogShowStatus  dlgProgress  dlgRef  drawBoxBorder  drawImageWithHermite
    each  empty  endsWith
    */

    env: {
        WSSession: number, WSVersion: string,
        bChrome: boolean, bEdge: boolean, bFileSystem: boolean, bFirefox: boolean,
        bIE: boolean, bLinux: boolean, bMac: boolean, bSafari: boolean, bWin: boolean, bWin64: boolean,
        basePath: string, iPluginLength: number, isX64: boolean, pathType: number,
        strChromeVersion: string, strFirefoxVersion: string, strIEVersion: string
    };

    /*ignored
    error  escapeHtml  escapeRegExp  extend  filter  fireEvent  fromUnicode  get  getColor  getCss
    getElDimensions  getHex  getHexColor  getHttpUrl  getLogger  getOffset  getRandom  getRealPath  getScript
    getWS  getWSUrl  getWheelDelta  globalEval  guid  hide  html5  imageControlCount  indexOf  install
    io  isArray  isBoolean  isDef  isFunction  isLocalIP  isNaN  isNull  isNumber  isObject
    isPlainObject  isString  isUndef  isUndefined  isWindow  keys  log  main  makeArray  mix
    needShowTwiceShowDialog  nil  noop  now  obj  one  page  param  parse  parseHTML  parser
    product  progressMessage  ready  removeEventListener  replaceAll  replaceControl  show  showProgress  startWS
    startWSByIP  startsWith  stopPropagation  stringify  style  support  switchEvent  tmp  toggle  trim
    type  unEscapeHtml  unparam  upperCaseFirst  urlDecode  urlEncode  utf8  win
    ...other internal ones
    */
    hideMask(): void;
    showMask(): void;
}

interface DynamsoftWebTwain {
    Addon: DynamsoftWebTwainAddon;
}

/**
 * interface for a DWT container which basically defines a DIV on the page
 */
interface Container {
    ContainerId: string;
    Width: string | number;
    Height: string | number;
}
