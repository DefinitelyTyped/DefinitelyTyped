import {
    ClearDataOptions,
    ClearDataTypeSet,
    ContentScriptDetails,
    ContextMenusCreateProperties,
    DialogType,
    ImageDetails,
    InjectDetails,
    PermissionType,
    RequestedHeaders,
    ResourceType,
    RunAt,
    URLPattern,
    WebRequestAuthCredentials,
    WebRequestAuthOptions,
    WebRequestInterceptorOptions,
    WindowOpenDisposition,
    ZoomMode,
} from "w3c-controlled-frame";

const dummyControlledFrame: HTMLControlledFrameElement = {} as HTMLControlledFrameElement;
const dummyDialog: DialogController = {} as DialogController;
const dummyPermController: PermissionRequestControllerBase = {} as PermissionRequestControllerBase;
const dummyNewWindowController: NewWindowController = {} as NewWindowController;
const dummyResponse: WebRequestResponse = {} as WebRequestResponse;
const dummyHeaders: Headers = {} as Headers;

const urlPatternInput = { pathname: "/test/*" };
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
    // $ExpectType void
    dummyControlledFrame.reload();

    const contentScript: ContentScriptDetails = {
        name: "myScript",
        urlPatterns: [urlPatternInput],
        js: { files: ["script.js"] },
        runAt: "document-idle" as RunAt,
    };
    // $ExpectType Promise<void>
    dummyControlledFrame.addContentScripts([contentScript]);

    const injectDetails: InjectDetails = { code: "console.log(\"hi\")" };
    // $ExpectType Promise<any>
    dummyControlledFrame.executeScript(injectDetails);
    // $ExpectType Promise<void>
    dummyControlledFrame.insertCSS({ file: "style.css" });
    // $ExpectType Promise<void>
    dummyControlledFrame.removeContentScripts(["myScript"]);

    const clearOptions: ClearDataOptions = { since: 0 };
    const clearTypes: ClearDataTypeSet = { cookies: true, localStorage: true };
    // $ExpectType Promise<void>
    dummyControlledFrame.clearData(clearOptions, clearTypes);
    // $ExpectType Promise<number>
    dummyControlledFrame.getZoom();
    // $ExpectType void
    dummyControlledFrame.setAudioMuted(true);
    // $ExpectType Promise<void>
    dummyControlledFrame.setZoomMode("disabled" as ZoomMode);

    const imageDetails: ImageDetails = { format: "jpeg", quality: "90" };
    // $ExpectType Promise<void>
    dummyControlledFrame.captureVisibleRegion(imageDetails);
    // $ExpectType void
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

    // $ExpectType Promise<void>
    contextMenus.create(createProps);
    // $ExpectType Promise<void>
    contextMenus.remove("1");
    // $ExpectType Promise<void>
    contextMenus.removeAll();
    // $ExpectType Promise<void>
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

    // $ExpectType ((this: ContextMenus, ev: ContextMenusClickEvent) => any) | null
    contextMenus.onclick;

    // --------------------------------------------------------------------------------
    // WebRequest API
    // --------------------------------------------------------------------------------

    const webRequest: WebRequest = dummyControlledFrame.request;
    const interceptorOptions: WebRequestInterceptorOptions = {
        urlPatterns: [new URLPattern()],
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

    // $ExpectType void
    authEvent.setCredentials(credentialsPromise, authOptions);

    const beforeRequestEvent: WebRequestBeforeRequestEvent = {} as WebRequestBeforeRequestEvent;
    // $ExpectType void
    beforeRequestEvent.redirect("https://new.url");

    const beforeSendHeadersEvent: WebRequestBeforeSendHeadersEvent = {} as WebRequestBeforeSendHeadersEvent;
    // $ExpectType void
    beforeSendHeadersEvent.setRequestHeaders(dummyHeaders);

    const headersReceivedEvent: WebRequestHeadersReceivedEvent = {
        response: dummyResponse,
    } as WebRequestHeadersReceivedEvent;
    // $ExpectType void
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

function testTagNameMap() {
    // This string must match what you put in HTMLElementTagNameMap.
    // If the map works, TS infers 'HTMLControlledFrameElement'.
    const frame = document.createElement("controlledframe");

    // $ExpectType HTMLControlledFrameElement
    frame;

    // Verify we can access specific properties without casting
    // (This would fail if it returned a generic HTMLElement)
    frame.src = "https://example.com";
    frame.back();

    // Selectors are trickier, but tag selectors should work.
    const queriedFrame = document.querySelector("controlledframe");

    // $ExpectType HTMLControlledFrameElement | null
    queriedFrame;

    if (queriedFrame) {
        queriedFrame.reload(); // Should compile
    }
}

function testEventListeners(frame: HTMLControlledFrameElement) {
    // We do NOT add specific types to 'e'. We let TS infer them.
    frame.addEventListener("consolemessage", (e) => {
        // $ExpectType ConsoleMessageEvent
        e;

        // This property exists ONLY on ConsoleMessageEvent.
        // If inference failed (and it fell back to generic Event), this would error.
        console.log(e.consoleMessage.level);
    });

    frame.contextMenus.addEventListener("click", (e) => {
        // $ExpectType ContextMenusClickEvent
        e;
        console.log(e.menuItem.id);
    });

    frame.addEventListener("consolemessage", (e) => {
        // @ts-expect-error
        // Error: Property 'menuItem' does not exist on type 'ConsoleMessageEvent'.
        console.log(e.menuItem);
    });

    frame.addEventListener("loadcommit", function(e) {
        // $ExpectType HTMLControlledFrameElement
        this;

        // We can access the element's properties via 'this'
        this.reload();
    });
}
