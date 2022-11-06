import { Lanes, Fiber } from 'react-reconciler';
import { Config } from './frontend';

export type AnyFn = (...args: any[]) => any;
export interface Wall {
    listen(fn: AnyFn): AnyFn;
    send(event: string, payload: any, transferable?: any[]): void;
}

export type ElementType =
    | 1 // Class
    | 2 // Context
    | 5 // Function
    | 6 // ForwardRef
    | 7 // HostComponent
    | 8 // Memo
    | 9 // OtherOrUnknown
    | 10 // Profiler
    | 11 // Root
    | 12 // Suspense
    | 13 // SuspenseList
    | 14; // TracingMarker
export interface StyleXPlugin {
    sources: string[];
    resolvedStyles: Record<string, unknown>;
}
export interface Plugins {
    stylex: StyleXPlugin | null;
}

export type BrowserTheme = 'dark' | 'light';

export type CanViewElementSource = (inspectedElement: InspectedElement) => boolean;

export type TabID = 'components' | 'profiler';

export type ViewAttributeSource = (id: number, path: Array<string | number>) => void;

export type ViewElementSource = (id: number, inspectedElement: InspectedElement) => void;

export type FetchFileWithCaching = (url: string) => Promise<string>;

export type Context = FetchFileWithCaching | null;

export interface DevtoolsProps {
    bridge?: FrontendBridge;
    browserTheme?: BrowserTheme | undefined;
    canViewElementSourceFunction?: CanViewElementSource | null | undefined;
    defaultTab?: TabID | undefined;
    enabledInspectedElementContextMenu?: boolean | undefined;
    showTabBar?: boolean | undefined;
    store?: Store;
    warnIfLegacyBackendDetected?: boolean | undefined;
    warnIfUnsupportedVersionDetected?: boolean | undefined;
    viewAttributeSourceFunction?: ViewAttributeSource | null | undefined;
    viewElementSourceFunction?: ViewElementSource | null | undefined;
    readOnly?: boolean | undefined;
    hideSettings?: boolean | undefined;
    hideToggleErrorAction?: boolean | undefined;
    hideToggleSuspenseAction?: boolean | undefined;
    hideLogAction?: boolean | undefined;
    hideViewSourceAction?: boolean | undefined;
    overrideTab?: TabID | undefined;
    componentsPortalContainer?: Element | undefined;
    profilerPortalContainer?: Element | undefined;
    fetchFileWithCaching?: FetchFileWithCaching | null | undefined;
    hookNamesModuleLoaderFunction?: HookNamesModuleLoaderFunction | null | undefined;
    viewUrlSourceFunction?: ViewUrlSourceFunction | null | undefined;
}

export interface SerializedElement {
    type: ElementType;
    displayName: string | null;
    id: number;
    key: number | string | null;
    hocDisplayNames: string[] | null;
}

export interface Source {
    fileName: string;
    lineNumber: number;
}

export interface InspectedElement {
    type: ElementType;
    id: number;
    canEditHooks: boolean;
    canEditFunctionProps: boolean;
    canEditHooksAndDeletePaths: boolean;
    canEditHooksAndRenamePaths: boolean;
    canEditFunctionPropsDeletePaths: boolean;
    canEditFunctionPropsRenamePaths: boolean;
    isErrored: boolean;
    canToggleError: boolean;
    targetErrorBoundaryID: number | null | undefined;
    canToggleSuspense: boolean;
    canViewSource: boolean;
    hasLegacyContext: boolean;
    context: Record<string, unknown> | null;
    hooks: Record<string, unknown> | null;
    props: Record<string, unknown> | null;
    state: Record<string, unknown> | null;
    key: number | string | null;
    errors: Array<[string, number]>;
    warnings: Array<[string, number]>;
    owners: SerializedElement[] | null;
    source: Source | null;
    rootType: string | null;
    rendererPackageName: string | null;
    rendererVersion: string | null;
    plugins: Plugins;
}
export interface HookSource {
    lineNumber: number | null;
    columnNumber: number | null;
    fileName: string | null;
    functionName: string | null;
}

export interface HooksNode {
    id: number | null;
    isStateEditable: boolean;
    name: string;
    value: unknown;
    subHooks: HooksNode[];
    hookSource?: HookSource | undefined;
}
export interface EncodedHookMap {
    names: ReadonlyArray<string>;
    mappings: string;
}
export type ReactSourceMetadata = [EncodedHookMap | null | undefined];
export type ReactSourcesArray = ReadonlyArray<ReactSourceMetadata | null | undefined>;
export type FBSourceMetadata = [unknown | undefined, ReactSourceMetadata | null | undefined];
export type FBSourcesArray = ReadonlyArray<FBSourceMetadata | null | undefined>;

export interface BasicSourceMap {
    readonly file?: string | undefined;
    readonly mappings: string;
    readonly names: string[];
    readonly sourceRoot?: string | undefined;
    readonly sources: string[];
    readonly sourcesContent?: Array<string | null | undefined> | undefined;
    readonly version: number;
    readonly x_facebook_sources?: FBSourcesArray | undefined;
    readonly x_react_sources?: ReactSourcesArray | undefined;
}

export interface IndexSourceMapSection {
    map: IndexSourceMap | BasicSourceMap;
    offset: {
        line: number;
        column: number;
    };
}

export interface IndexSourceMap {
    readonly file?: string | undefined;
    /** avoids SourceMap being a disjoint union */
    readonly mappings?: undefined;
    readonly sourcesContent?: undefined;
    readonly sections: IndexSourceMapSection[];
    readonly version: number;
    readonly x_facebook_sources?: FBSourcesArray | undefined;
    readonly x_react_sources?: ReactSourcesArray | undefined;
}
export type MixedSourceMap = IndexSourceMap | BasicSourceMap;

export interface HookSourceAndMetadata {
    /** Generated by react-debug-tools. */
    hookSource: HookSource;
    /** Compiled code (React components or custom hooks) containing primitive hook calls. */
    runtimeSourceCode: string | null;
    /** Same as hookSource.fileName but guaranteed to be non-null. */
    runtimeSourceURL: string;
    /**
     * Raw source map JSON.
     * Either decoded from an inline source map or loaded from an external source map file.
     * Sources without source maps won't have this.
     */
    sourceMapJSON: MixedSourceMap | null;
    /**
     * External URL of source map.
     * Sources without source maps (or with inline source maps) won't have this.
     */
    sourceMapURL: string | null;
}
export type HookName = string | null;
export type HookSourceLocationKey = string;
export type HookNames = Map<HookSourceLocationKey, HookName>;

export type ParseSourceAndMetadata = (
    hooksList: HooksNode[],
    locationKeyToHookSourceAndMetadata: Map<string, HookSourceAndMetadata>,
) => Promise<HookNames | null>;

export type ParseHookNames = (
    hooksTree: HooksNode[],
    fetchFileWithCaching: FetchFileWithCaching | null,
) => Promise<HookNames | null>;

export interface ParseHookNamesModule {
    purgeCachedMetadata: () => void;
    parseSourceAndMetadata: ParseSourceAndMetadata;
    parseHookNames: ParseHookNames;
}

export type HookNamesModuleLoaderFunction = () => PromiseLike<ParseHookNamesModule>;
export type ViewUrlSourceFunction = (url: string, line: number, col: number) => void;
export type EventParams<T> = T extends any[] ? T : never;
export class EventEmitter<Events> {
    listenersMap: Map<string, AnyFn[]>;
    addListener<Event extends keyof Events>(
        event: Event,
        listener: (...args: EventParams<Events[Event]>) => void,
    ): void;
    emit: <Event extends keyof Events>(event: Event, ...args: EventParams<Events[Event]>) => void;
    removeAllListeners: () => void;
    removeListener: (event: keyof Events, listener: AnyFn) => void;
}

export interface ChangeDescription {
    context: string[] | boolean | null;
    didHooksChange: boolean;
    isFirstMount: boolean;
    props: string[] | null;
    state: string[] | null;
    hooks?: number[] | null | undefined;
}

export interface CommitDataFrontend {
    /** Map of Fiber (ID) to a description of what changed in this commit. */
    changeDescriptions: Map<number, ChangeDescription> | null;
    /** How long was the render phase? */
    duration: number;
    /**
     * How long was the layout commit phase?
     * Note that not all builds of React expose this property.
     */
    effectDuration: number | null;
    /**
     * Map of Fiber (ID) to actual duration for this commit;
     * Fibers that did not render will not have entries in this Map.
     */
    fiberActualDurations: Map<number, number>;
    /**
     * Map of Fiber (ID) to "self duration" for this commit;
     * Fibers that did not render will not have entries in this Map.
     */
    fiberSelfDurations: Map<number, number>;
    /**
     * How long was the passive commit phase?
     * Note that not all builds of React expose this property.
     */
    passiveEffectDuration: number | null;
    /** Priority level of the commit (if React provided this info) */
    priorityLevel: string | null;
    /** When did this commit occur (relative to the start of profiling) */
    timestamp: number;
    /** Fiber(s) responsible for scheduling this update. */
    updaters: SerializedElement[] | null;
}
export interface SnapshotNode {
    type: ElementType;
    id: number;
    children: number[];
    displayName: string | null;
    hocDisplayNames: string[] | null;
    key: number | string | null;
}
export interface ProfilingDataForRootFrontend {
    /**
     * Timing, duration, and other metadata about each commit.
     */
    commitData: CommitDataFrontend[];
    /**
     * Display name of the nearest descendant component (ideally a function or class component).
     * This value is used by the root selector UI.
     */
    displayName: string;
    /**
     * Map of fiber id to (initial) tree base duration when Profiling session was started.
     * This info can be used along with commitOperations to reconstruct the tree for any commit.
     */
    initialTreeBaseDurations: Map<number, number>;
    /**
     * List of tree mutation that occur during profiling.
     * These mutations can be used along with initial snapshots to reconstruct the tree for any commit.
     */
    operations: number[][];
    /** Identifies the root this profiler data corresponds to. */
    rootID: number;
    /**
     * Map of fiber id to node when the Profiling session was started.
     * This info can be used along with commitOperations to reconstruct the tree for any commit.
     */
    snapshots: Map<number, SnapshotNode>;
}

export interface CommitTreeNode {
    type: ElementType;
    id: number;
    children: number[];
    displayName: string | null;
    hocDisplayNames: string[] | null;
    key: number | string | null;
    parentID: number;
    treeBaseDuration: number;
}
export interface CommitTree {
    nodes: Map<number, CommitTreeNode>;
    rootID: number;
}

export type getCommitTree = (options: {
    commitIndex: number;
    profilerStore: ProfilerStore;
    rootID: number;
}) => CommitTree;

export interface ChartNode {
    actualDuration: number;
    didRender: boolean;
    id: number;
    label: string;
    name: string;
    offset: number;
    selfDuration: number;
    treeBaseDuration: number;
}
export interface FlamegraphChartData {
    baseDuration: number;
    depth: number;
    idToDepthMap: Map<number, number>;
    maxSelfDuration: number;
    renderPathNodes: Set<number>;
    rows: ChartNode[][];
}

export interface RankedChartData {
    maxValue: number;
    nodes: ChartNode[];
}

export class ProfilingCache {
    constructor(profilerStore: ProfilerStore);

    getCommitTree: ({ commitIndex, rootID }: { commitIndex: number; rootID: number }) => ReturnType<getCommitTree>;
    getFiberCommits: ({ fiberID, rootID }: { fiberID: number; rootID: number }) => number[];
    getFlamegraphChartData: (options: {
        commitIndex: number;
        commitTree: CommitTree;
        rootID: number;
    }) => FlamegraphChartData;
    getRankedChartData: (options: { commitIndex: number; commitTree: CommitTree; rootID: number }) => RankedChartData;
    invalidate(): void;
}

export type BatchUID = number;
export type Milliseconds = number;
export type ReactMeasureType = 'commit' | 'render-idle' | 'render' | 'layout-effects' | 'passive-effects';
export type ReactLane = number;

export interface ReactMeasure {
    readonly type: ReactMeasureType;
    readonly lanes: ReactLane[];
    readonly timestamp: Milliseconds;
    readonly duration: Milliseconds;
    readonly batchUID: BatchUID;
    readonly depth: number;
}

export type ReactComponentMeasureType =
    | 'render'
    | 'layout-effect-mount'
    | 'layout-effect-unmount'
    | 'passive-effect-mount'
    | 'passive-effect-unmount';
export interface ReactComponentMeasure {
    readonly type: ReactComponentMeasureType;
    readonly componentName: string;
    duration: Milliseconds;
    readonly timestamp: Milliseconds;
    warning: string | null;
}

export interface FlamechartStackFrame {
    name: string;
    timestamp: Milliseconds;
    duration: Milliseconds;
    scriptUrl?: string | undefined;
    locationLine?: number | undefined;
    locationColumn?: number | undefined;
}
export type FlamechartStackLayer = FlamechartStackFrame[];
export type Flamechart = FlamechartStackLayer[];

export interface ErrorStackFrame {
    fileName: string;
    lineNumber: number;
    columnNumber: number;
}
export type InternalModuleSourceToRanges = Map<string, Array<[ErrorStackFrame, ErrorStackFrame]>>;
export type LaneToLabelMap = Map<ReactLane, string>;
export interface NativeEvent {
    readonly type: string;
    readonly depth: number;
    readonly duration: Milliseconds;
    readonly timestamp: Milliseconds;
    warning: string | null;
}

export interface NetworkMeasure {
    readonly depth: number;
    finishTimestamp: Milliseconds;
    firstReceivedDataTimestamp: Milliseconds;
    lastReceivedDataTimestamp: Milliseconds;
    priority: string;
    receiveResponseTimestamp: Milliseconds;
    readonly requestId: string;
    requestMethod: string;
    sendRequestTimestamp: Milliseconds;
    url: string;
}

export interface UserTimingMark {
    name: string;
    timestamp: Milliseconds;
}

export interface BaseReactEvent {
    readonly componentName?: string | undefined;
    readonly timestamp: Milliseconds;
    warning: string | null;
}
export interface BaseReactScheduleEvent extends BaseReactEvent {
    readonly lanes: ReactLane[];
}

export interface ReactScheduleRenderEvent extends BaseReactScheduleEvent {
    readonly type: 'schedule-render';
}
export interface ReactScheduleStateUpdateEvent extends BaseReactScheduleEvent {
    readonly type: 'schedule-state-update';
}
export interface ReactScheduleForceUpdateEvent extends BaseReactScheduleEvent {
    readonly type: 'schedule-force-update';
}
export type SchedulingEvent = ReactScheduleRenderEvent | ReactScheduleStateUpdateEvent | ReactScheduleForceUpdateEvent;

export interface Snapshot {
    height: number;
    image: typeof Image | null;
    readonly imageSource: string;
    readonly timestamp: Milliseconds;
    width: number;
}
export type Phase = 'mount' | 'update';

export interface SuspenseEvent extends BaseReactEvent {
    readonly type: 'suspense';
    depth: number;
    duration: number | null;
    readonly id: string;
    readonly phase: Phase | null;
    promiseName: string | null;
    resolution: 'rejected' | 'resolved' | 'unresolved';
}

export interface ThrownError {
    readonly type: 'thrown-error';
    readonly componentName?: string | undefined;
    readonly message: string;
    readonly phase: Phase;
    readonly timestamp: Milliseconds;
}
export interface TimelineData {
    batchUIDToMeasuresMap: Map<BatchUID, ReactMeasure[]>;
    componentMeasures: ReactComponentMeasure[];
    duration: number;
    flamechart: Flamechart;
    internalModuleSourceToRanges: InternalModuleSourceToRanges;
    laneToLabelMap: LaneToLabelMap;
    laneToReactMeasureMap: Map<ReactLane, ReactMeasure[]>;
    nativeEvents: NativeEvent[];
    networkMeasures: NetworkMeasure[];
    otherUserTimingMarks: UserTimingMark[];
    reactVersion: string | null;
    schedulingEvents: SchedulingEvent[];
    snapshots: Snapshot[];
    snapshotHeight: number;
    startTime: number;
    suspenseEvents: SuspenseEvent[];
    thrownErrors: ThrownError[];
}

export interface ProfilingDataFrontend {
    dataForRoots: Map<number, ProfilingDataForRootFrontend>;
    timelineData: TimelineData[];
    imported: boolean;
}

export interface CommitDataBackend {
    /** Tuple of fiber ID and change description */
    changeDescriptions: Array<[number, ChangeDescription]> | null;
    duration: number;
    /** Only available in certain (newer) React builds, */
    effectDuration: number | null;
    /** Tuple of fiber ID and actual duration */
    fiberActualDurations: Array<[number, number]>;
    /** Tuple of fiber ID and computed "self" duration */
    fiberSelfDurations: Array<[number, number]>;
    /** Only available in certain (newer) React builds, */
    passiveEffectDuration: number | null;
    priorityLevel: string | null;
    timestamp: number;
    updaters: SerializedElement[] | null;
}

export interface ProfilingDataForRootBackend {
    commitData: CommitDataBackend[];
    displayName: string;
    initialTreeBaseDurations: Array<[number, number]>;
    rootID: number;
}

export interface TimelineDataExport {
    batchUIDToMeasuresKeyValueArray: Array<[BatchUID, ReactMeasure[]]>;
    componentMeasures: ReactComponentMeasure[];
    duration: number;
    flamechart: Flamechart;
    internalModuleSourceToRanges: Array<[string, Array<[ErrorStackFrame, ErrorStackFrame]>]>;
    laneToLabelKeyValueArray: Array<[ReactLane, string]>;
    laneToReactMeasureKeyValueArray: Array<[ReactLane, ReactMeasure[]]>;
    nativeEvents: NativeEvent[];
    networkMeasures: NetworkMeasure[];
    otherUserTimingMarks: UserTimingMark[];
    reactVersion: string | null;
    schedulingEvents: SchedulingEvent[];
    snapshots: Snapshot[];
    snapshotHeight: number;
    startTime: number;
    suspenseEvents: SuspenseEvent[];
    thrownErrors: ThrownError[];
}
export interface ProfilingDataBackend {
    dataForRoots: ProfilingDataForRootBackend[];
    rendererID: number;
    timelineData: TimelineDataExport | null;
}

export default class ProfilerStore extends EventEmitter<{
    isProcessingData: [];
    isProfiling: [];
    profilingData: [];
}> {
    constructor(bridge: FrontendBridge, store: Store, defaultIsProfiling: boolean);

    getCommitData(rootID: number, commitIndex: number): CommitDataFrontend;

    getDataForRoot(rootID: number): ProfilingDataForRootFrontend;

    /** Profiling data has been recorded for at least one root. */
    get didRecordCommits(): boolean;

    get isProcessingData(): boolean;

    get isProfiling(): boolean;

    get profilingCache(): ProfilingCache;

    get profilingData(): ProfilingDataFrontend | null;

    set profilingData(value: ProfilingDataFrontend | null);

    clear(): void;

    startProfiling(): void;
    stopProfiling(): void;

    onBridgeOperations: (operations: number[]) => void;
    onBridgeProfilingData: (dataBackend: ProfilingDataBackend) => void;
    onBridgeShutdown: () => void;
    onProfilingStatus: (isProfiling: boolean) => void;
}

export interface RegExpComponentFilter {
    type: 2 | 3;
    isEnabled: boolean;
    isValid: boolean;
    value: string;
}

export interface ElementTypeComponentFilter {
    type: 1;
    isEnabled: boolean;
    value: ElementType;
}
export interface BooleanComponentFilter {
    type: 4;
    isEnabled: boolean;
    isValid: boolean;
}

export type ComponentFilter = BooleanComponentFilter | ElementTypeComponentFilter | RegExpComponentFilter;

export interface BridgeProtocol {
    /** Version supported by the current frontend/backend. */
    version: number;
    /**
     * NPM version range that also supports this version.
     * Note that 'maxNpmVersion' is only set when the version is bumped.
     */
    minNpmVersion: string;
    maxNpmVersion: string | null;
}

export class Store extends EventEmitter<{
    backendVersion: [];
    collapseNodesByDefault: [];
    componentFilters: [];
    error: [Error];
    mutated: [[number[], Map<number, number>]];
    recordChangeDescriptions: [];
    roots: [];
    rootSupportsBasicProfiling: [];
    rootSupportsTimelineProfiling: [];
    supportsNativeStyleEditor: [];
    supportsReloadAndProfile: [];
    unsupportedBridgeProtocolDetected: [];
    unsupportedRendererVersionDetected: [];
}> {
    constructor(bridge: FrontendBridge, config?: Config);

    /** This is only used in tests to avoid memory leaks. */
    assertExpectedRootMapSizes(): void;

    /**  This is only used in tests to avoid memory leaks. */
    assertMapSizeMatchesRootCount(map: Map<any, any>, mapName: string): void;

    get backendVersion(): string | null;

    get collapseNodesByDefault(): boolean;

    set collapseNodesByDefault(value: boolean);

    get componentFilters(): ComponentFilter[];

    set componentFilters(value: ComponentFilter[]);

    get bridgeProtocol(): BridgeProtocol | null;

    get errorCount(): number;

    get hasOwnerMetadata(): boolean;

    get nativeStyleEditorValidAttributes(): ReadonlyArray<string> | null;

    get numElements(): number;

    get profilerStore(): ProfilerStore;

    get recordChangeDescriptions(): boolean;

    set recordChangeDescriptions(value: boolean);

    get revision(): number;

    get rootIDToRendererID(): Map<number, number>;

    get roots(): ReadonlyArray<number>;

    /**
     * At least one of the currently mounted roots support the Legacy profiler.
     */
    get rootSupportsBasicProfiling(): boolean;

    /** At least one of the currently mounted roots support the Timeline profiler. */
    get rootSupportsTimelineProfiling(): boolean;

    get supportsNativeInspection(): boolean;

    get supportsNativeStyleEditor(): boolean;
    /**
     * This build of DevTools supports the legacy profiler.
     * This is a static flag, controlled by the Store config.
     */
    get supportsProfiling(): boolean;

    get supportsReloadAndProfile(): boolean;

    /**
     * This build of DevTools supports the Timeline profiler.
     * This is a static flag, controled by the Store config.
     */
    get supportsTimeline(): boolean;

    get supportsTraceUpdates(): boolean;

    get unsupportedBridgeProtocolDetected(): boolean;

    get unsupportedRendererVersionDetected(): boolean;

    get warningCount(): number;

    containsElement(id: number): boolean;

    getElementAtIndex(index: number): Element | null;

    getElementIDAtIndex(index: number): number | null;

    getElementByID(id: number): Element | null;

    getElementsWithErrorsAndWarnings(): Array<{ id: number; index: number }>;

    getErrorAndWarningCountForElementID(id: number): { errorCount: number; warningCount: number };

    getIndexOfElementID(id: number): number | null;

    getOwnersListForElement(ownerID: number): Element[];

    getRendererIDForElement(id: number): number | null;

    getRootIDForElement(id: number): number | null;

    isInsideCollapsedSubTree(id: number): boolean;

    toggleIsCollapsed(id: number, isCollapsed: boolean): void;

    onBridgeNativeStyleEditorSupported: ({
        isSupported,
        validAttributes,
    }: {
        isSupported: boolean;
        validAttributes: ReadonlyArray<string> | null | undefined;
    }) => void;

    onBridgeOperations: (operations: number[]) => void;

    /**
     * Certain backends save filters on a per-domain basis.
     * In order to prevent filter preferences and applied filters from being out of sync,
     * this message enables the backend to override the frontend's current ("saved") filters.
     * This action should also override the saved filters too,
     * else reloading the frontend without reloading the backend would leave things out of sync.
     */
    onBridgeOverrideComponentFilters: (componentFilters: ComponentFilter[]) => void;

    onBridgeShutdown: () => void;

    onBackendStorageAPISupported: (isBackendStorageAPISupported: boolean) => void;
    onBridgeSynchronousXHRSupported: (isSynchronousXHRSupported: boolean) => void;
    onBridgeUnsupportedRendererVersion: () => void;
    onBridgeBackendVersion: (backendVersion: string) => void;
    onBridgeProtocol: (bridgeProtocol: BridgeProtocol) => void;
    onBridgeProtocolTimeout: () => void;
}
export type RendererID = number;
export interface ElementAndRendererID {
    id: number;
    rendererID: RendererID;
}

export type PathType = 'props' | 'hooks' | 'state' | 'context';

export interface OverrideValueAtPath extends ElementAndRendererID {
    type: PathType;
    hookID?: number | null | undefined;
    path: Array<string | number>;
    value: any;
}

export class Bridge<
    OutgoingEvents extends Record<string, unknown[]>,
    IncomingEvents extends Record<string, unknown[]>,
> extends EventEmitter<IncomingEvents & OutgoingEvents> {
    constructor(wall: Wall);

    /**
     *  Listening directly to the wall isn't advised.
     */
    get wall(): Wall;
    send<EventName extends keyof OutgoingEvents>(event: EventName, ...payload: OutgoingEvents[EventName]): void;
    shutdown(): void;

    /**
     * Temporarily support older standalone backends by forwarding "overrideValueAtPath"
     * commands to the older message types they may be listening to.
     */
    overrideValueAtPath: (overrideValueAtPath: OverrideValueAtPath) => void;
}
export interface InspectElementError {
    type: 'error';
    id: number;
    responseID: number;
    errorType: 'user' | 'unknown-hook' | 'uncaught';
    message: string;
    stack?: string | undefined;
}

export interface InspectElementFullData {
    type: 'full-data';
    id: number;
    responseID: number;
    value: InspectedElement;
}
export interface InspectElementHydratedPath {
    type: 'hydrated-path';
    id: number;
    responseID: number;
    path: Array<string | number>;
    value: any;
}
export interface InspectElementNoChange {
    type: 'no-change';
    id: number;
    responseID: number;
}
export interface InspectElementNotFound {
    type: 'not-found';
    id: number;
    responseID: number;
}

export type InspectedElementPayload =
    | InspectElementError
    | InspectElementFullData
    | InspectElementHydratedPath
    | InspectElementNoChange
    | InspectElementNotFound;

export interface OwnersList {
    id: number;
    owners: SerializedElement[] | null;
}

export type BoxStyle = Readonly<{
    bottom: number;
    left: number;
    right: number;
    top: number;
}>;

export interface Layout {
    x: number;
    y: number;
    width: number;
    height: number;
    left: number;
    top: number;
    margin: BoxStyle;
    padding: BoxStyle;
}

export interface StyleAndLayout {
    id: number;
    style: object | null;
    layout: Layout | null;
}

export interface BackendEvents extends Record<string, unknown[]> {
    backendVersion: [string];
    bridgeProtocol: [BridgeProtocol];
    extensionBackendInitialized: [];
    fastRefreshScheduled: [];
    getSavedPreferences: [];
    inspectedElement: [InspectedElementPayload];
    isBackendStorageAPISupported: [boolean];
    isSynchronousXHRSupported: [boolean];
    operations: [number[]];
    ownersList: [OwnersList];
    overrideComponentFilters: [ComponentFilter[]];
    profilingData: [ProfilingDataBackend];
    profilingStatus: [boolean];
    reloadAppForProfiling: [];
    selectFiber: [number];
    shutdown: [];
    stopInspectingNative: [boolean];
    syncSelectionFromNativeElementsPanel: [];
    syncSelectionToNativeElementsPanel: [];
    unsupportedRendererVersion: [RendererID];
    isNativeStyleEditorSupported: [
        {
            isSupported: boolean;
            validAttributes: ReadonlyArray<string> | null | undefined;
        },
    ];
    NativeStyleEditor_styleAndLayout: [StyleAndLayout];
}
export interface CopyElementPathParams extends ElementAndRendererID {
    path: Array<string | number>;
}

export interface DeletePath extends ElementAndRendererID {
    type: PathType;
    hookID?: number | null | undefined;
    path: Array<string | number>;
}

export interface HighlightElementInDOM extends ElementAndRendererID {
    displayName: string | null;
    hideAfterTimeout: boolean;
    openNativeElementsPanel: boolean;
    scrollIntoView: boolean;
}

export interface InspectElementParams extends ElementAndRendererID {
    forceFullData: boolean;
    path: Array<number | string> | null;
    requestID: number;
}
export interface OverrideError extends ElementAndRendererID {
    forceError: boolean;
}
export interface OverrideSuspense extends ElementAndRendererID {
    forceFallback: boolean;
}

export interface RenamePath extends ElementAndRendererID {
    type: PathType;
    hookID?: number | null | undefined;
    oldPath: Array<string | number>;
    newPath: Array<string | number>;
}

export interface SavedPreferencesParams {
    appendComponentStack: boolean;
    breakOnConsoleErrors: boolean;
    componentFilters: ComponentFilter[];
    showInlineWarningsAndErrors: boolean;
    hideConsoleLogsInStrictMode: boolean;
}

export interface StoreAsGlobalParams extends ElementAndRendererID {
    count: number;
    path: Array<string | number>;
}

export interface UpdateConsolePatchSettingsParams {
    appendComponentStack: boolean;
    breakOnConsoleErrors: boolean;
    showInlineWarningsAndErrors: boolean;
    hideConsoleLogsInStrictMode: boolean;
    browserTheme: BrowserTheme;
}
export interface ViewAttributeSourceParams extends ElementAndRendererID {
    path: Array<string | number>;
}
export interface NativeStyleEditor_RenameAttributeParams extends ElementAndRendererID {
    oldName: string;
    newName: string;
    value: string;
}
export interface NativeStyleEditor_SetValueParams extends ElementAndRendererID {
    name: string;
    value: string;
}

export interface OverrideValue extends ElementAndRendererID {
    path: Array<string | number>;
    wasForwarded?: boolean | undefined;
    value: unknown;
}
export interface OverrideHookState extends OverrideValue {
    hookID: number;
}

export interface FrontendEvents extends Record<string, unknown[]> {
    clearErrorsAndWarnings: [
        {
            rendererID: RendererID;
        },
    ];
    clearErrorsForFiberID: [ElementAndRendererID];
    clearNativeElementHighlight: [];
    clearWarningsForFiberID: [ElementAndRendererID];
    copyElementPath: [CopyElementPathParams];
    deletePath: [DeletePath];
    getBackendVersion: [];
    getBridgeProtocol: [];
    getOwnersList: [ElementAndRendererID];
    getProfilingData: [
        {
            rendererID: RendererID;
        },
    ];
    getProfilingStatus: [];
    highlightNativeElement: [HighlightElementInDOM];
    inspectElement: [InspectElementParams];
    logElementToConsole: [ElementAndRendererID];
    overrideError: [OverrideError];
    overrideSuspense: [OverrideSuspense];
    overrideValueAtPath: [OverrideValueAtPath];
    profilingData: [ProfilingDataBackend];
    reloadAndProfile: [boolean];
    renamePath: [RenamePath];
    savedPreferences: [SavedPreferencesParams];
    selectFiber: [number];
    setTraceUpdatesEnabled: [boolean];
    shutdown: [];
    startInspectingNative: [];
    startProfiling: [boolean];
    stopInspectingNative: [boolean];
    stopProfiling: [];
    storeAsGlobal: [StoreAsGlobalParams];
    updateComponentFilters: [ComponentFilter[]];
    updateConsolePatchSettings: [UpdateConsolePatchSettingsParams];
    viewAttributeSource: [ViewAttributeSourceParams];
    viewElementSource: [ElementAndRendererID];
    NativeStyleEditor_measure: [ElementAndRendererID];
    NativeStyleEditor_renameAttribute: [NativeStyleEditor_RenameAttributeParams];
    NativeStyleEditor_setValue: [NativeStyleEditor_SetValueParams];
    overrideContext: [OverrideValue];
    overrideHookState: [OverrideHookState];
    overrideProps: [OverrideValue];
    overrideState: [OverrideValue];
}

export type BackendBridge = Bridge<BackendEvents, FrontendEvents>;
export type FrontendBridge = Bridge<FrontendEvents, BackendEvents>;
export interface PathMatch {
    id: number;
    isFullMatch: boolean;
}
export type FindNativeNodesForFiberID = (id: number) => any[] | null | undefined;
export type Type = 'props' | 'hooks' | 'state' | 'context';

export type NativeType = unknown;
export type GetFiberIDForNative = (component: NativeType, findNearestUnfilteredAncestor?: boolean) => number | null;
export type GetDisplayNameForFiberID = (id: number, findNearestUnfilteredAncestor?: boolean) => string | null;

export interface InstanceAndStyle {
    instance: Record<string, unknown> | null;
    style: Record<string, unknown> | null;
}

export interface PathFrame {
    key: string | null;
    index: number;
    displayName: string | null;
}
export type BundleType =
    | 0 // PROD
    | 1; // DEV

export interface CurrentDispatcherRef {
    current: unknown;
}

export type Lane = number;
export interface DevToolsProfilingHooks {
    // Scheduling methods:
    markRenderScheduled: (lane: Lane) => void;
    markStateUpdateScheduled: (fiber: Fiber, lane: Lane) => void;
    markForceUpdateScheduled: (fiber: Fiber, lane: Lane) => void;
    // Work loop level methods:
    markRenderStarted: (lanes: Lanes) => void;
    markRenderYielded: () => void;
    markRenderStopped: () => void;
    markCommitStarted: (lanes: Lanes) => void;
    markCommitStopped: () => void;
    markLayoutEffectsStarted: (lanes: Lanes) => void;
    markLayoutEffectsStopped: () => void;
    markPassiveEffectsStarted: (lanes: Lanes) => void;
    markPassiveEffectsStopped: () => void;
    // Fiber level methods:
    markComponentRenderStarted: (fiber: Fiber) => void;
    markComponentRenderStopped: () => void;
    markComponentErrored: (fiber: Fiber, thrownValue: unknown, lanes: Lanes) => void;
    markComponentSuspended: (fiber: Fiber, wakeable: PromiseLike<unknown>, lanes: Lanes) => void;
    markComponentLayoutEffectMountStarted: (fiber: Fiber) => void;
    markComponentLayoutEffectMountStopped: () => void;
    markComponentLayoutEffectUnmountStarted: (fiber: Fiber) => void;
    markComponentLayoutEffectUnmountStopped: () => void;
    markComponentPassiveEffectMountStarted: (fiber: Fiber) => void;
    markComponentPassiveEffectMountStopped: () => void;
    markComponentPassiveEffectUnmountStarted: (fiber: Fiber) => void;
    markComponentPassiveEffectUnmountStopped: () => void;
}

export interface ReactRenderer {
    findFiberByHostInstance: (hostInstance: NativeType) => Fiber | null;
    version: string;
    rendererPackageName: string;
    bundleType: BundleType;
    /** 16.9+ */
    overrideHookState?:
        | ((fiber: Record<string, unknown>, id: number, path: Array<string | number>, value: unknown) => void)
        | null
        | undefined;
    /** 17+ */
    overrideHookStateDeletePath?:
        | ((fiber: Record<string, unknown>, id: number, path: Array<string | number>) => void)
        | null
        | undefined;
    /** 17+ */
    overrideHookStateRenamePath?:
        | ((
              fiber: Record<string, unknown>,
              id: number,
              oldPath: Array<string | number>,
              newPath: Array<string | number>,
          ) => void)
        | null
        | undefined;
    /** 16.7+ */
    overrideProps?:
        | ((fiber: Record<string, unknown>, path: Array<string | number>, value: unknown) => void)
        | null
        | undefined;
    /** 17+ */
    overridePropsDeletePath?:
        | ((fiber: Record<string, unknown>, path: Array<string | number>) => void)
        | null
        | undefined;
    /** 17+ */
    overridePropsRenamePath?:
        | ((fiber: Record<string, unknown>, oldPath: Array<string | number>, newPath: Array<string | number>) => void)
        | null
        | undefined;
    /** 16.9+ */
    scheduleUpdate?: ((fiber: Record<string, unknown>) => void) | null | undefined;
    setSuspenseHandler?: ((shouldSuspend: (fiber: Record<string, unknown>) => boolean) => void) | null | undefined;
    /** Only injected by React v16.8+ in order to support hooks inspection. */
    currentDispatcherRef?: CurrentDispatcherRef | undefined;
    /**
     * Only injected by React v16.9+ in DEV mode.
     * Enables DevTools to append owners-only component stack to error messages.
     */
    getCurrentFiber?: (() => Fiber | null) | undefined;
    /** 17.0.2+ */
    reconcilerVersion?: string | undefined;
    /** Uniquely identifies React DOM v15. */
    ComponentTree?: unknown | undefined;
    /** Present for React DOM v12 (possibly earlier) through v15. */
    Mount?: unknown | undefined;
    /** Only injected by React v17.0.3+ in DEV mode */
    setErrorHandler?:
        | ((shouldError: (fiber: Record<string, unknown>) => boolean | null | undefined) => void)
        | null
        | undefined;
    /**
     * Intentionally opaque type to avoid coupling DevTools to different Fast Refresh versions.
     */
    scheduleRefresh?: AnyFn | undefined;
    /**
     * 18.0+
     */
    injectProfilingHooks?: ((profilingHooks: DevToolsProfilingHooks) => void) | undefined;
    getLaneLabelMap?: (() => Map<number, string> | null) | undefined;
    setRefreshHandler: (fn: AnyFn) => void;
}

export interface RendererInterface {
    cleanup: () => void;
    clearErrorsAndWarnings: () => void;
    clearErrorsForFiberID: (id: number) => void;
    clearWarningsForFiberID: (id: number) => void;
    copyElementPath: (id: number, path: Array<string | number>) => void;
    deletePath: (type: Type, id: number, hookID: number | null | undefined, path: Array<string | number>) => void;
    findNativeNodesForFiberID: FindNativeNodesForFiberID;
    flushInitialOperations: () => void;
    getBestMatchForTrackedPath: () => PathMatch | null;
    getFiberForNative: (component: NativeType) => Fiber | null;
    getFiberIDForNative: GetFiberIDForNative;
    getDisplayNameForFiberID: GetDisplayNameForFiberID;
    getInstanceAndStyle(id: number): InstanceAndStyle;
    getProfilingData(): ProfilingDataBackend;
    getOwnersList: (id: number) => SerializedElement[] | null;
    getPathForElement: (id: number) => PathFrame[] | null;
    handleCommitFiberRoot: (fiber: Record<string, unknown>, commitPriority?: number) => void;
    handleCommitFiberUnmount: (fiber: Record<string, unknown>) => void;
    handlePostCommitFiberRoot: (fiber: Record<string, unknown>) => void;
    inspectElement: (
        requestID: number,
        id: number,
        inspectedPaths: Record<string, unknown>,
        forceFullData: boolean,
    ) => InspectedElementPayload;
    logElementToConsole: (id: number) => void;
    overrideError: (id: number, forceError: boolean) => void;
    overrideSuspense: (id: number, forceFallback: boolean) => void;
    overrideValueAtPath: (
        type: Type,
        id: number,
        hook: number | null | undefined,
        path: Array<string | number>,
        value: unknown,
    ) => void;
    patchConsoleForStrictMode: () => void;
    prepareViewAttributeSource: (id: number, path: Array<string | number>) => void;
    prepareViewElementSource: (id: number) => void;
    renamePath: (
        type: Type,
        id: number,
        hookID: number | null | undefined,
        oldPath: Array<string | number>,
        newPath: Array<string | number>,
    ) => void;
    renderer: ReactRenderer | null;
    setTraceUpdatesEnabled: (enabled: boolean) => void;
    setTrackedPath: (path: PathFrame[] | null) => void;
    startProfiling: (recordChangeDescriptions: boolean) => void;
    stopProfiling: () => void;
    storeAsGlobal: (id: number, path: Array<string | number>, count: number) => void;
    unpatchConsoleForStrictMode: () => void;
    /** Timeline profiler interface */
    updateComponentFilters: (componentFilters: ComponentFilter[]) => void;
}
export type ResolveNativeStyle = (stylesheetID: unknown) => Record<string, unknown> | null | undefined;
export type ListenerHandler = (data: unknown) => void;

export type HookEvents = keyof HookEventPayload;
export interface HookEventPayload {
    renderer: {
        id: number;
        renderer: ReactRenderer;
        reactBuildType: string;
    };
    operations: number[];
    /** value: nodes */
    traceUpdates: Set<NativeType>;
    'react-devtools': unknown;
    'renderer-attached': {
        id: number;
        renderer: ReactRenderer;
        rendererInterface: RendererInterface;
    };
    shutdown: undefined;
    fastRefreshScheduled: undefined;
    /** Value: id */
    'unsupported-renderer-version': number;
}

export type HookEventListener<EV extends HookEvents> = (
    params: EV extends keyof HookEventPayload ? HookEventPayload[EV] : unknown,
) => any;

export interface FiberRootNode {
    current: FiberNode;
}

export interface FiberNode {
    /** First child */
    child: FiberNode | null;
    /** Next sibling */
    sibling: FiberNode | null;
    /** Parent */
    return: FiberNode | null;
    /** Alternate */
    alternate: FiberNode | null;
    /**
     * For custom components: the component class or function.
     * For built-in DOM components: tag name in lower case.
     * For text: null.
     */
    type: React.ComponentType | string | null;
    /**
     * For class components: an instance of the component.
     * For built-in DOM components and text: DOM node.
     * For FC components: null.
     */
    stateNode: React.Component | Element | Text | null;
    pendingProps: Record<string, unknown> | null;
    _debugSource: Source | null;
    key: string | null;
}
export interface DevToolsHook {
    listeners: Record<string, ListenerHandler[]>;
    rendererInterfaces: Map<RendererID, RendererInterface>;
    renderers: Map<RendererID, ReactRenderer>;
    emit(event: HookEvents, data: unknown): void;
    getFiberRoots: (rendererID: RendererID) => Set<FiberRootNode>;
    inject: (renderer: ReactRenderer) => number | null;
    on<EV extends HookEvents>(event: EV, handler: HookEventListener<EV>): void;
    off<EV extends HookEvents>(event: EV, handler: HookEventListener<EV>): void;
    sub<EV extends HookEvents>(event: EV, handler: HookEventListener<EV>): () => void;
    reactDevtoolsAgent?: Record<string, unknown> | null | undefined;
    /**
     * Used by react-native-web and Flipper/Inspector
     */
    resolveRNStyle?: ResolveNativeStyle | undefined;
    nativeStyleEditorValidAttributes?: ReadonlyArray<string> | undefined;
    /** React uses these methods. */
    checkDCE: (fn: AnyFn) => void;
    onCommitFiberUnmount: (rendererID: RendererID, fiber: Record<string, unknown>) => void;
    onCommitFiberRoot: (
        rendererID: RendererID,
        /** Added in v16.9 to support Profiler priority labels */
        fiber: Record<string, unknown>,
        /** Added in v16.9 to support Fast Refresh */
        commitPriority?: number,
        didError?: boolean,
    ) => void;
    /** Timeline internal module filtering */
    getInternalModuleRanges: () => Array<[string, string]>;
    registerInternalModuleStart: (moduleStartError: Error) => void;
    registerInternalModuleStop: (moduleStopError: Error) => void;
    dangerous_setTargetConsoleForTesting?: (fakeConsole: Record<string, unknown>) => void | undefined;
}

declare global {
    interface Window {
        __REACT_DEVTOOLS_GLOBAL_HOOK__: DevToolsHook;
    }
}
