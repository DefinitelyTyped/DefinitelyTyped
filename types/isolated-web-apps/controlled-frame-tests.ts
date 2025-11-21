import {
  ClearDataOptions,
  ClearDataTypeSet,
  ConsoleMessageEvent,
  ContentScriptDetails,
  ContextMenus,
  ContextMenusClickEvent,
  ContextMenusCreateProperties,
  DialogController,
  DialogEvent,
  DialogType,
  HTMLControlledFrameElement,
  ImageDetails,
  InjectDetails,
  LoadAbortEvent,
  LoadRedirectEvent,
  NewWindowController,
  NewWindowEvent,
  PermissionRequestControllerBase,
  PermissionRequestEvent,
  PermissionType,
  RequestedHeaders,
  ResourceType,
  RunAt,
  SizeChangedEvent,
  WebRequest,
  WebRequestAuthCredentials,
  WebRequestAuthOptions,
  WebRequestAuthRequiredEvent,
  WebRequestBeforeRequestEvent,
  WebRequestBeforeSendHeadersEvent,
  WebRequestHeadersReceivedEvent,
  WebRequestInterceptorOptions,
  WebRequestResponse,
  WindowOpenDisposition,
  ZoomChangeEvent,
  ZoomMode,
} from "isolated-web-apps";

const dummyControlledFrame: HTMLControlledFrameElement = {} as HTMLControlledFrameElement;
const dummyDialog: DialogController = {} as DialogController;
const dummyPermController: PermissionRequestControllerBase = {} as PermissionRequestControllerBase;
const dummyNewWindowController: NewWindowController = {} as NewWindowController;
const dummyResponse: WebRequestResponse = {} as WebRequestResponse;
const dummyHeaders: Headers = {} as Headers;

const urlPatternInput = { pathname: "/test/*" };
const urlPattern = {} as URLPattern;
const url = "https://example.com/page";

async function testControlledFrame() {
  // --------------------------------------------------------------------------------
  // HTMLControlledFrameElement Properties (Attribute Checking)
  // --------------------------------------------------------------------------------

  // $ExpectType string
  dummyControlledFrame.src;
  // $ExpectType string
  dummyControlledFrame.partition;

  // $ExpectType ContextMenus
  dummyControlledFrame.contextMenus;
  // $ExpectType WebRequest
  dummyControlledFrame.request;

  // --------------------------------------------------------------------------------
  // HTMLControlledFrameElement Methods
  // --------------------------------------------------------------------------------

  // $ExpectType Promise<boolean>
  dummyControlledFrame.back();
  // $ExpectType Promise<boolean>
  dummyControlledFrame.canGoBack();
  // $ExpectType Promise<boolean>
  dummyControlledFrame.go(1);
  // $ExpectType undefined
  dummyControlledFrame.reload();

  const contentScript: ContentScriptDetails = {
    name: "myScript",
    urlPatterns: [urlPatternInput],
    js: { files: ["script.js"] },
    runAt: "document-idle" as RunAt,
  };
  // $ExpectType Promise<undefined>
  dummyControlledFrame.addContentScripts([contentScript]);

  const injectDetails: InjectDetails = { code: "console.log(\"hi\")" };
  // $ExpectType Promise<any>
  dummyControlledFrame.executeScript(injectDetails);
  // $ExpectType Promise<undefined>
  dummyControlledFrame.insertCSS({ file: "style.css" });
  // $ExpectType Promise<undefined>
  dummyControlledFrame.removeContentScripts(["myScript"]);

  const clearOptions: ClearDataOptions = { since: 0 };
  const clearTypes: ClearDataTypeSet = { cookies: true, localStorage: true };
  // $ExpectType Promise<undefined>
  dummyControlledFrame.clearData(clearOptions, clearTypes);
  // $ExpectType Promise<number>
  dummyControlledFrame.getZoom();
  // $ExpectType undefined
  dummyControlledFrame.setAudioMuted(true);
  // $ExpectType Promise<undefined>
  dummyControlledFrame.setZoomMode("disabled" as ZoomMode);

  const imageDetails: ImageDetails = { format: "jpeg", quality: "90" };
  // $ExpectType Promise<undefined>
  dummyControlledFrame.captureVisibleRegion(imageDetails);
  // $ExpectType undefined
  dummyControlledFrame.print();

  // --------------------------------------------------------------------------------
  // Complex Event Types
  // --------------------------------------------------------------------------------

  const consoleMessage: ConsoleMessage = {} as ConsoleMessage;
  const consoleEvent = new ConsoleMessageEvent("consolemessage", {
    consoleMessage,
  });
  // $ExpectType ConsoleMessage
  consoleEvent.consoleMessage;

  const dialogMessage: DialogMessage = {
    messageType: "prompt" as DialogType,
    messageText: "Q",
    dialog: dummyDialog,
  } as DialogMessage;
  const dialogEvent = new DialogEvent("dialog", { dialogMessage });
  // $ExpectType DialogMessage
  dialogEvent.dialogMessage;

  const newWindow: NewWindow = {
    window: dummyNewWindowController,
    targetUrl: url,
    name: "NewPopup",
    windowOpenDisposition: "new_window" as WindowOpenDisposition,
  } as NewWindow;
  const newWindowEvent = new NewWindowEvent("newwindow", { newWindow });
  // $ExpectType NewWindow
  newWindowEvent.newWindow;

  const permRequest: PermissionRequest = {
    permission: "media" as PermissionType,
    request: dummyPermController,
  } as PermissionRequest;
  const permissionEvent = new PermissionRequestEvent("permissionrequest", {
    permissionRequest: permRequest,
  });
  // $ExpectType PermissionRequest
  permissionEvent.permissionRequest;

  const sizeChange: SizeChange = {
    oldWidth: 100,
    oldHeight: 100,
    newWidth: 200,
    newHeight: 200,
  };
  const sizeEvent = new SizeChangedEvent("sizechanged", { sizeChange });
  // $ExpectType SizeChange
  sizeEvent.sizeChange;

  const zoomChange: ZoomChange = { oldZoomFactor: 1.0, newZoomFactor: 1.2 };
  const zoomEvent = new ZoomChangeEvent("zoomchange", { zoomChange });
  // $ExpectType ZoomChange
  zoomEvent.zoomChange;

  // LoadAbortEvent
  const loadAbortInfo: LoadAbortInfo = {
    url,
    isTopLevel: true,
    code: 1,
    reason: "ERR",
  } as LoadAbortInfo;
  const loadAbortEvent = new LoadAbortEvent("loadabort", { loadAbortInfo });
  // $ExpectType LoadAbortInfo
  loadAbortEvent.loadAbortInfo;

  // LoadRedirectEvent
  const loadRedirectInfo: LoadRedirectInfo = {
    oldUrl: "a",
    newUrl: "b",
    isTopLevel: true,
  } as LoadRedirectInfo;
  const loadRedirectEvent = new LoadRedirectEvent("loadredirect", {
    loadRedirectInfo,
  });
  // $ExpectType LoadRedirectInfo
  loadRedirectEvent.loadRedirectInfo;

  // --------------------------------------------------------------------------------
  // ContextMenus API
  // --------------------------------------------------------------------------------

  const contextMenus: ContextMenus = dummyControlledFrame.contextMenus;
  const createProps: ContextMenusCreateProperties = {
    id: "1",
    title: "New Item",
    contexts: ["page", "selection"],
    documentURLPatterns: [urlPatternInput],
  };

  // $ExpectType Promise<undefined>
  contextMenus.create(createProps);
  // $ExpectType Promise<undefined>
  contextMenus.remove("1");
  // $ExpectType Promise<undefined>
  contextMenus.removeAll();
  // $ExpectType Promise<undefined>
  contextMenus.update("1", {
    enabled: false,
    targetURLPatterns: [urlPatternInput],
  });

  const clickEvent: ContextMenusClickEvent = {} as ContextMenusClickEvent;
  // $ExpectType number
  clickEvent.frameId;
  // $ExpectType string
  clickEvent.pageURL;
  // $ExpectType MenuItemDetails
  clickEvent.menuItem;
  // $ExpectType string | null
  clickEvent.linkURL;

  type ContextMenusClickListener = (ev: ContextMenusClickEvent) => any;
  const clickListener: ContextMenusClickListener = (ev) => ev.menuItem.id;
  // $ExpectType void
  contextMenus.addEventListener(
    "click",
    clickListener as EventListenerOrEventListenerObject,
  );

  // $ExpectType ((ev: Event) => any) | null
  contextMenus.onclick;

  // --------------------------------------------------------------------------------
  // WebRequest API
  // --------------------------------------------------------------------------------

  const webRequest: WebRequest = dummyControlledFrame.request;
  const interceptorOptions: WebRequestInterceptorOptions = {
    urlPatterns: [urlPattern],
    resourceTypes: ["script", "image"] as ResourceType[],
    blocking: true,
    includeHeaders: "all" as RequestedHeaders,
  };

  const interceptor = webRequest.createWebRequestInterceptor(interceptorOptions);
  // $ExpectType WebRequestInterceptor
  interceptor;

  const authEvent: WebRequestAuthRequiredEvent = {
    response: dummyResponse,
  } as WebRequestAuthRequiredEvent;

  const credentialsPromise: Promise<WebRequestAuthCredentials> = Promise.resolve({ username: "u", password: "p" });
  const authOptions: WebRequestAuthOptions = { signal: {} as AbortSignal };

  // $ExpectType undefined
  authEvent.setCredentials(credentialsPromise, authOptions);

  const beforeRequestEvent: WebRequestBeforeRequestEvent = {} as WebRequestBeforeRequestEvent;
  // $ExpectType undefined
  beforeRequestEvent.redirect("https://new.url");

  const beforeSendHeadersEvent: WebRequestBeforeSendHeadersEvent = {} as WebRequestBeforeSendHeadersEvent;
  // $ExpectType undefined
  beforeSendHeadersEvent.setRequestHeaders(dummyHeaders);

  const headersReceivedEvent: WebRequestHeadersReceivedEvent = {
    response: dummyResponse,
  } as WebRequestHeadersReceivedEvent;
  // $ExpectType undefined
  headersReceivedEvent.setResponseHeaders(dummyHeaders);

  type BeforeRequestListener = (ev: WebRequestBeforeRequestEvent) => any;
  const beforeRequestListener: BeforeRequestListener = (ev) => {
    ev.redirect(url);
  };
  // $ExpectType void
  interceptor.addEventListener(
    "beforerequest",
    beforeRequestListener as EventListenerOrEventListenerObject,
  );
}
