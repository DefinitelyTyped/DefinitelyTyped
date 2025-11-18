import {
    HTMLControlledFrameElement,
    ControlledFrameEventMap,
    ConsoleMessageEvent,
    DialogEvent,
    DialogController,
    NewWindowEvent,
    NewWindowController,
    PermissionRequestEvent,
    PermissionRequestController,
    SizeChangedEvent,
    ZoomChangeEvent,
    ContentScriptDetails,
    InjectDetails,
    ClearDataOptions,
    ClearDataTypeSet,
    ZoomMode,
    ImageDetails,
    ContextMenus,
    ContextMenusCreateProperties,
    LoadAbortEvent,
    LoadRedirectEvent,
    WebRequestBeforeSendHeadersEvent,
    WebRequestHeadersReceivedEvent,
    ContextMenusClickEvent,
    WebRequest,
    WebRequestInterceptorOptions,
    WebRequestInterceptor,
    WebRequestInterceptorEventMap,
    WebRequestBeforeRequestEvent,
    WebRequestAuthRequiredEvent,
    WebRequestResponse,
    WebRequestAuthCredentials,
    WebRequestAuthOptions,
    WindowOpenDisposition,
    PermissionType,
    DialogType,
    RunAt,
    ResourceType,
    RequestedHeaders,
    URLPattern
} from 'isolated-web-apps';

const dummyControlledFrame: HTMLControlledFrameElement = {} as HTMLControlledFrameElement;
const dummyControlledFrameTarget: HTMLControlledFrameElement = {} as HTMLControlledFrameElement;
const dummyDialog: DialogController = {} as DialogController;
const dummyPermController: PermissionRequestController = {} as PermissionRequestController;
const dummyNewWindowController: NewWindowController = {} as NewWindowController;
const dummyResponse: WebRequestResponse = {} as WebRequestResponse;
const dummyHeaders: Headers = {} as Headers; // Assuming Headers is available globally

// Constants
const urlPatternInput = { pathname: '/test/*' };
const urlPattern = {} as URLPattern;
const url = 'https://example.com/page';

async function testControlledFrameApi() {

    // --------------------------------------------------------------------------------
    // HTMLControlledFrameElement Properties (Attribute Checking)
    // --------------------------------------------------------------------------------

    // R/W Properties
    // $ExpectType string
    dummyControlledFrame.src;
    // $ExpectType string
    dummyControlledFrame.partition;

    // Readonly Properties
    // $ExpectType ContextMenus
    dummyControlledFrame.contextMenus;
    // $ExpectType WebRequest
    dummyControlledFrame.request;

    // Autosize/Dimensions
    // $ExpectType boolean
    dummyControlledFrame.autosize;
    // $ExpectType number
    dummyControlledFrame.minwidth;


    // --------------------------------------------------------------------------------
    // HTMLControlledFrameElement Methods
    // --------------------------------------------------------------------------------

    // Navigation Methods
    // $ExpectType Promise<boolean>
    dummyControlledFrame.back();
    // $ExpectType Promise<boolean>
    dummyControlledFrame.canGoBack();
    // $ExpectType Promise<boolean>
    dummyControlledFrame.go(1);
    // $ExpectType void
    dummyControlledFrame.reload();

    // Scripting Methods
    const contentScript: ContentScriptDetails = {
        name: 'myScript',
        urlPatterns: [urlPatternInput],
        js: { files: ['script.js'] },
        runAt: 'document-idle' as RunAt,
    };
    // $ExpectType Promise<void>
    dummyControlledFrame.addContentScripts([contentScript]);

    const injectDetails: InjectDetails = { code: 'console.log("hi")' };
    // $ExpectType Promise<any>
    dummyControlledFrame.executeScript(injectDetails);
    // $ExpectType Promise<void>
    dummyControlledFrame.insertCSS({ file: 'style.css' });
    // $ExpectType Promise<void>
    dummyControlledFrame.removeContentScripts(['myScript']);

    // Configuration Methods
    const clearOptions: ClearDataOptions = { since: 0 };
    const clearTypes: ClearDataTypeSet = { cookies: true, localStorage: true };
    // $ExpectType Promise<void>
    dummyControlledFrame.clearData(clearOptions, clearTypes);
    // $ExpectType Promise<number>
    dummyControlledFrame.getZoom();
    // $ExpectType void
    dummyControlledFrame.setAudioMuted(true);
    // $ExpectType Promise<void>
    dummyControlledFrame.setZoomMode('disabled' as ZoomMode);

    // Capture Methods
    const imageDetails: ImageDetails = { format: 'jpeg', quality: '90' };
    // $ExpectType Promise<void>
    dummyControlledFrame.captureVisibleRegion(imageDetails);
    // $ExpectType void
    dummyControlledFrame.print();


    // --------------------------------------------------------------------------------
    // Complex Event Types
    // --------------------------------------------------------------------------------

    // ConsoleMessageEvent
    const consoleEvent: ControlledFrameEventMap['consolemessage'] = {} as ConsoleMessageEvent;
    // $ExpectType number
    consoleEvent.level;
    // $ExpectType string
    consoleEvent.message;

    // DialogEvent
    const dialogEvent: ControlledFrameEventMap['dialog'] = {
        messageType: 'prompt' as DialogType,
        messageText: 'What is your name?',
        dialog: dummyDialog,
    } as DialogEvent;
    // $ExpectType DialogType
    dialogEvent.messageType;
    // $ExpectType DialogController
    dialogEvent.dialog;
    // $ExpectType void
    dummyDialog.okay('Response');
    // $ExpectType void
    dummyDialog.cancel();

    // LoadAbortEvent
    const loadAbortEvent: ControlledFrameEventMap['loadabort'] = {} as LoadAbortEvent;
    // $ExpectType number
    loadAbortEvent.code;

    // LoadRedirectEvent
    const loadRedirectEvent: ControlledFrameEventMap['loadredirect'] = {} as LoadRedirectEvent;
    // $ExpectType string
    loadRedirectEvent.oldUrl;
    // $ExpectType string
    loadRedirectEvent.newUrl;

    // NewWindowEvent
    const newWindowEvent: ControlledFrameEventMap['newwindow'] = {
        window: dummyNewWindowController,
        targetUrl: url,
        windowOpenDisposition: 'new_window' as WindowOpenDisposition,
        partition: 'persist:default',
        initialWidth: 800,
    } as NewWindowEvent;
    // $ExpectType NewWindowController
    newWindowEvent.window;
    // $ExpectType void
    dummyNewWindowController.attach(dummyControlledFrameTarget);
    // $ExpectType void
    dummyNewWindowController.discard();

    // PermissionRequestEvent
    const permissionEvent: ControlledFrameEventMap['permissionrequest'] = {
        permission: 'media' as PermissionType,
        request: dummyPermController,
    } as PermissionRequestEvent;
    // $ExpectType PermissionType
    permissionEvent.permission;
    // $ExpectType PermissionRequestController
    permissionEvent.request;
    // $ExpectType void
    dummyPermController.allow();
    // $ExpectType boolean | undefined
    dummyPermController.userGesture;

    // SizeChangedEvent
    const sizeEvent: ControlledFrameEventMap['sizechanged'] = {} as SizeChangedEvent;
    // $ExpectType number
    sizeEvent.oldWidth;

    // ZoomChangeEvent
    const zoomEvent: ControlledFrameEventMap['zoomchange'] = {} as ZoomChangeEvent;
    // $ExpectType number
    zoomEvent.oldZoomFactor;


    // --------------------------------------------------------------------------------
    // ContextMenus API
    // --------------------------------------------------------------------------------

    const contextMenus: ContextMenus = dummyControlledFrame.contextMenus;
    const createProps: ContextMenusCreateProperties = {
        id: '1',
        title: 'New Item',
        contexts: ['page', 'selection'],
    };

    // Methods
    // $ExpectType Promise<void>
    contextMenus.create(createProps);
    // $ExpectType Promise<void>
    contextMenus.remove('1');
    // $ExpectType Promise<void>
    contextMenus.removeAll();
    // $ExpectType Promise<void>
    contextMenus.update('1', { enabled: false });

    // Event Listener (Type Check)
    // $ExpectType void
    contextMenus.addEventListener('click', (ev: ContextMenusClickEvent) => ev.menuItem.id);


    // --------------------------------------------------------------------------------
    // WebRequest API
    // --------------------------------------------------------------------------------

    const webRequest: WebRequest = dummyControlledFrame.request;
    const interceptorOptions: WebRequestInterceptorOptions = {
        urlPatterns: [urlPattern],
        resourceTypes: ['script', 'image'] as ResourceType[],
        blocking: true,
        includeHeaders: 'all' as RequestedHeaders,
    };

    // Method
    const interceptor = webRequest.createWebRequestInterceptor(interceptorOptions);
    // $ExpectType WebRequestInterceptor
    interceptor;

    // WebRequestAuthRequiredEvent (Complex Method Check)
    const authEvent: WebRequestInterceptorEventMap['authrequired'] = {
        response: dummyResponse,
    } as WebRequestAuthRequiredEvent;

    const credentialsPromise: Promise<WebRequestAuthCredentials> = Promise.resolve({ username: 'u', password: 'p' });
    const authOptions: WebRequestAuthOptions = { signal: {} as AbortSignal };

    // $ExpectType void
    authEvent.setCredentials(credentialsPromise, authOptions);

    // WebRequestBeforeRequestEvent
    const beforeRequestEvent: WebRequestInterceptorEventMap['beforerequest'] = {} as WebRequestBeforeRequestEvent;
    // $ExpectType void
    beforeRequestEvent.redirect('https://new.url');

    // WebRequestBeforeSendHeadersEvent
    const beforeSendHeadersEvent: WebRequestInterceptorEventMap['beforesendheaders'] = {} as WebRequestBeforeSendHeadersEvent;
    // $ExpectType void
    beforeSendHeadersEvent.setRequestHeader(dummyHeaders);

    // WebRequestHeadersReceivedEvent
    const headersReceivedEvent: WebRequestInterceptorEventMap['headersreceived'] = {
        response: dummyResponse,
    } as WebRequestHeadersReceivedEvent;
    // $ExpectType void
    headersReceivedEvent.setResponseHeaders(dummyHeaders);

    // WebRequestInterceptor Event Listener (Type Check)
    // $ExpectType void
    interceptor.addEventListener('beforerequest', (ev: WebRequestBeforeRequestEvent) => ev.redirect(url));

}
