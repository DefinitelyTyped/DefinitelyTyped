import {
    initialize as initializeFE,
    createBridge as createBridgeFE,
    createStore,
} from 'react-devtools-inline/frontend';
import {
    activate,
    createBridge as createBridgeBE,
    initialize as initializeBE,
    ElementType,
    Plugins,
    StyleXPlugin,
    BrowserTheme,
    CanViewElementSource,
    DevtoolsProps,
    TabID,
    ViewAttributeSource,
    ViewElementSource,
    InspectedElement,
    SerializedElement,
    Source,
    FetchFileWithCaching,
    Context,
    ParseHookNames,
    HooksNode,
    HookSourceAndMetadata,
    ParseSourceAndMetadata,
    Wall,
    HookSource,
    Bridge,
    FrontendBridge,
} from 'react-devtools-inline/backend';

const sendWall = (some: string, payload = { a: 1 }) => {};

const wall: Wall = {
    listen: () => () => {},
    send: sendWall,
};

// $ExpectType FrontendBridge
const frontendBridgeWithWall = createBridgeFE(window, wall);
// $ExpectType FrontendBridge
const frontendBridgeWithoutWall = createBridgeFE(window);

// $ExpectType Store
const storeWithoutConfig = createStore(frontendBridgeWithoutWall);

// $ExpectType Store
const storeWithFullConfig = createStore(frontendBridgeWithWall, {
    checkBridgeProtocolCompatibility: true,
    supportsNativeInspection: false,
    supportsProfiling: true,
    isProfiling: false,
    supportsReloadAndProfile: true,
    supportsTimeline: true,
    supportsTraceUpdates: true,
});

// $ExpectType Store
const storeWithOneConfigOption = createStore(frontendBridgeWithWall, {
    checkBridgeProtocolCompatibility: true,
});

// $ExpectType Store
const storeWithTwoConfigOption = createStore(frontendBridgeWithWall, {
    supportsNativeInspection: false,
    supportsProfiling: true,
});

initializeFE(window, {});
initializeFE(window, { bridge: frontendBridgeWithoutWall });
initializeFE(window, { store: storeWithoutConfig });
initializeFE(window, { bridge: frontendBridgeWithoutWall, store: storeWithoutConfig });

// $ExpectType BackendBridge
const backendBridgeWithoutWall = createBridgeBE(window);
// $ExpectType BackendBridge
const backendBridgeWithWall = createBridgeBE(window, wall);
initializeBE(window);

activate(window);
activate(window, {});
activate(window, { bridge: backendBridgeWithoutWall });

// commons.d.ts

const elementType: ElementType = 1;

const styleXpPlugin: StyleXPlugin = {
    sources: ['str'],
    resolvedStyles: {
        str: 'str',
        number: 5,
        array: [],
    },
};

const pluginsObj: Plugins = {
    stylex: styleXpPlugin,
};
const pluginsNull: Plugins = {
    stylex: null,
};

const browserThemeDark: BrowserTheme = 'dark';
const browserThemeLight: BrowserTheme = 'light';

const tabIdComponents: TabID = 'components';
const tabIdProfiler: TabID = 'profiler';

const viewAttributeSourceString: ViewAttributeSource = (id = 5, path = ['s', 't', 'r']) => {};

const viewAttributeSourceFunction: ViewAttributeSource = (id = 5, path = [1, 2, 3]) => {};

const serializedElement: SerializedElement = {
    displayName: 'str',
    id: 5,
    key: 'str',
    hocDisplayNames: ['str'],
    type: elementType,
};

const sourceObj: Source = {
    fileName: 'fileName',
    lineNumber: 5,
};

const inspectedElementObj: InspectedElement = {
    id: 5,
    canEditHooks: true,
    canEditFunctionProps: true,
    canEditHooksAndDeletePaths: true,
    canEditHooksAndRenamePaths: true,
    canEditFunctionPropsDeletePaths: true,
    canEditFunctionPropsRenamePaths: true,
    isErrored: true,
    canToggleError: true,
    targetErrorBoundaryID: null,
    canToggleSuspense: true,
    canViewSource: true,
    hasLegacyContext: true,
    context: { str: 'anything' },
    hooks: { str: 'anything' },
    props: { str: 'anything' },
    state: { str: 'anything' },
    key: 2,
    errors: [['str', 5]],
    warnings: [['str', 5]],
    owners: [serializedElement],
    source: sourceObj,
    type: 5,
    rootType: 'str',
    rendererPackageName: 'str',
    rendererVersion: 'str',
    plugins: pluginsObj,
};

const canViewElementSource: CanViewElementSource = (inspectedElement = inspectedElementObj) => true;
const viewElementSource: ViewElementSource = (id = 5, inspectedElement = inspectedElementObj) => {};

const fetchFileWithCachingFunc: FetchFileWithCaching = (url = 'str') => Promise.resolve(url);
const context: Context = fetchFileWithCachingFunc;

const hookNode: HooksNode = { id: 1, isStateEditable: true, name: 'some-name', value: 4, subHooks: [] };
const parseHookNames: ParseHookNames = async ([hookNode], fetchFileWithCachingFunc) => null;

const hookSourceObj: HookSource = {
    lineNumber: 1,
    columnNumber: 2,
    fileName: 'str',
    functionName: 'str',
};

const locationKeyToHookSourceAndMetadata: Map<string, HookSourceAndMetadata> = new Map().set('str', {
    hookSource: hookSourceObj,
    runtimeSourceCode: 'str',
    runtimeSourceURL: 'str',
    sourceMapJSON: null,
    sourceMapURL: 'str',
});

const parseSourceAndMetadata: ParseSourceAndMetadata = async ([hookNode], locationKeyToHookSourceAndMetadata) => null;

const frontendBridge: FrontendBridge = new Bridge(wall);
const store = createStore(frontendBridge);

const props: DevtoolsProps = {
    bridge: frontendBridge,
    browserTheme: browserThemeDark,
    canViewElementSourceFunction: canViewElementSource,
    defaultTab: tabIdComponents,
    enabledInspectedElementContextMenu: true,
    showTabBar: true,
    store,
    warnIfLegacyBackendDetected: true,
    warnIfUnsupportedVersionDetected: true,
    viewAttributeSourceFunction: viewAttributeSourceString,
    viewElementSourceFunction: viewElementSource,
    readOnly: true,
    hideSettings: true,
    hideToggleErrorAction: true,
    hideToggleSuspenseAction: true,
    hideLogAction: true,
    hideViewSourceAction: true,
    overrideTab: tabIdComponents,
    componentsPortalContainer: document.createElement('div'),
    profilerPortalContainer: document.createElement('div'),
    fetchFileWithCaching: fetchFileWithCachingFunc,
    hookNamesModuleLoaderFunction: () =>
        Promise.resolve({ parseHookNames, parseSourceAndMetadata, purgeCachedMetadata: () => { } }),
    viewUrlSourceFunction: () => {},
};
