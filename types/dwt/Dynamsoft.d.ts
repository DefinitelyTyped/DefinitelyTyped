declare namespace Dynamsoft {
    let Lib: DynamsoftLib;
    let WebTwainEnv: dwtEnv;
    namespace WebTwain {
        namespace Addon {
            let OCRPro: OCRProAddon;
        }
    }
    namespace DWT {
        let defaultEnv: dwtEnv;
    }
}

declare const dwt: WebTwain;

interface dwtEnv {
    ActiveXInstallWithCAB: boolean;
    ActiveXVersion: string;
    AutoLoad: boolean;
    CloseDialog(): void;
    ContainerMap: {};
    Containers: Container[];
    CreateDWTObject(newObjID: string, successFn: (dwtObject: WebTwain) => void, failurefn: (...args: any[]) => void): void;
    CreateDWTObject(newObjID: string, ip: number | string, port: number | string, portSSL: number | string, successFn: (dwtObject: WebTwain) => void, failurefn: (...args: any[]) => void): void;
    Debug: boolean;
    DeleteDWTObject(objID: string): void;
    DynamicContainers: string[];
    DynamicDWTMap: {};
    GetWebTwain(cid: string): WebTwain;
    IfUpdateService: boolean;
    IfUseActiveXForIE10Plus: boolean;
    JSVersion: string;
    Load(): void;

    /*ignored
    OnWebTwainInitMessage  OnWebTwainNeedUpgrade  OnWebTwainNeedUpgradeWebJavascript  OnWebTwainNotFound  OnWebTwainOldPluginNotAllowed
    */

    OnWebTwainPostExecute(): void;
    OnWebTwainPreExecute(): void;

    /*ignored
    OnWebTwainReady
    */

    PluginVersion: string;
    ProductKey: string;
    RegisterEvent(event: string, fn: (...args: any[]) => void): void;
    RemoveAllAuthorizations(): void;
    ResourcesPath: string;
    ServerVersionInfo: string;
    ShowDialog(_dialogWidth: number, _dialogHeight: number, _strDialogMessageWithHtmlFormat: string, _bChangeImage: boolean, bHideCloseButton: boolean): void;
    Trial: boolean;
    Unload(): void;
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

/**
 * interface for a DWT container which basically defines a DIV on the page
 */
interface Container {
    ContainerId: string;
    Width: string | number;
    Height: string | number;
}
