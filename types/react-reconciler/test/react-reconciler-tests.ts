import ReactReconciler = require("react-reconciler");
import ReactReconcilerConstants = require("react-reconciler/constants");
import * as Constants from "./ReactReconcilerPriorityConstant";
import * as ReactTestHostConfig from "./ReactTestHostConfig";

// $ExpectType Reconciler<Container, Instance, TextInstance, any, Instance, PublicInstance>
ReactReconciler<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.ActivityInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.FormInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout,
    ReactTestHostConfig.TransitionStatus,
    ReactTestHostConfig.SuspendedState,
    ReactTestHostConfig.RendererInspectionConfig,
    ReactTestHostConfig.FormStateMarkerInstance,
    ReactTestHostConfig.HoistableRoot,
    ReactTestHostConfig.Resource
>(ReactTestHostConfig);

function isEqual(target: number, value: number): boolean {
    return target === value;
}

// $ExpectType boolean
isEqual(Constants.CONTINUOUS_EVENT_PRIORITY, ReactReconcilerConstants.ContinuousEventPriority);

// $ExpectType boolean
isEqual(Constants.DISCRETE_EVENT_PRIORITY, ReactReconcilerConstants.DiscreteEventPriority);

// $ExpectType boolean
isEqual(Constants.DEFAULT_EVENT_PRIORITY, ReactReconcilerConstants.DefaultEventPriority);

// $ExpectType boolean
isEqual(Constants.IDLE_EVENT_PRIORITY, ReactReconcilerConstants.IdleEventPriority);

// $ExpectType boolean
isEqual(Constants.LEGACY_ROOT, ReactReconcilerConstants.LegacyRoot);

// $ExpectType boolean
isEqual(Constants.CONCURRENT_ROOT, ReactReconcilerConstants.ConcurrentRoot);

// $ExpectType boolean
isEqual(Constants.NO_EVENT_PRIORITY, ReactReconcilerConstants.NoEventPriority);

// Test createContainer and createHydrationContainer signatures
const TestReconciler = ReactReconciler<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.ActivityInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.FormInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout,
    ReactTestHostConfig.TransitionStatus,
    ReactTestHostConfig.SuspendedState,
    ReactTestHostConfig.RendererInspectionConfig,
    ReactTestHostConfig.FormStateMarkerInstance,
    ReactTestHostConfig.HoistableRoot,
    ReactTestHostConfig.Resource
>(ReactTestHostConfig);

const container: ReactTestHostConfig.Container = {
    children: [],
    createNodeMock: () => null,
    tag: "CONTAINER",
};

// Test createContainer signature (11 arguments, including transitionCallbacks)
// $ExpectType any
const root = TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {}, // onUncaughtError
    (error, info) => {}, // onCaughtError
    (error, info) => {}, // onRecoverableError
    () => {}, // onDefaultTransitionIndicator
    null, // transitionCallbacks
);

// Test createHydrationContainer signature (14 arguments including new error handlers and formState)
// $ExpectType any
const hydrationRoot = TestReconciler.createHydrationContainer(
    null, // initialChildren
    null, // callback
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {}, // onUncaughtError
    (error, info) => {}, // onCaughtError
    (error, info) => {}, // onRecoverableError
    () => {}, // onDefaultTransitionIndicator
    null, // transitionCallbacks
    null, // formState
);

// Use root and hydrationRoot to verify they are valid OpaqueRoot types
TestReconciler.updateContainer(null, root, null);
TestReconciler.updateContainer(null, hydrationRoot, null);

// Test updateContainerSync
// $ExpectType Lane
TestReconciler.updateContainerSync(null, root, null);

// Test flushSyncFromReconciler
// $ExpectType void
TestReconciler.flushSyncFromReconciler();
// $ExpectType string
TestReconciler.flushSyncFromReconciler(() => "test");

// Test flushSyncWork
// $ExpectType boolean
TestReconciler.flushSyncWork();

// Test default error handlers, which live on the reconciler instance

// Test injectIntoDevTools (no arguments as of react-reconciler 0.33)
// $ExpectType boolean
const foundDevTools = TestReconciler.injectIntoDevTools();

// Test the suspensey-commit host config methods (react-reconciler 0.33 signatures)
const hostConfig: ReactReconciler.HostConfig<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.ActivityInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.FormInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout,
    ReactTestHostConfig.TransitionStatus,
    ReactTestHostConfig.SuspendedState,
    ReactTestHostConfig.RendererInspectionConfig,
    ReactTestHostConfig.FormStateMarkerInstance,
    ReactTestHostConfig.HoistableRoot,
    ReactTestHostConfig.Resource
> = ReactTestHostConfig;

type TestHostConfig = typeof hostConfig;

// A host config over literal types, for checks that don't need the test renderer's types.
type LiteralHostConfig<HostContext = unknown> = ReactReconciler.HostConfig<
    string,
    {},
    "container",
    "instance",
    "text",
    "activity",
    "suspense",
    unknown,
    unknown,
    unknown,
    HostContext,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
>;

declare const instance: ReactTestHostConfig.Instance;
declare const props: ReactTestHostConfig.Props;

// $ExpectType SuspendedState
const suspendedState = hostConfig.startSuspendingCommit();

// $ExpectType boolean
hostConfig.preloadInstance(instance, "div", props);

// $ExpectType void
hostConfig.suspendInstance(suspendedState, instance, "div", props);

// $ExpectType ((initiateCommit: (...args: unknown[]) => unknown) => (...args: unknown[]) => unknown) | null
hostConfig.waitForCommitToBeReady(suspendedState, 0);

// The pre-0.33 call shapes no longer type-check.
// @ts-expect-error -- preloadInstance now takes the instance first
hostConfig.preloadInstance("div", props);
// @ts-expect-error -- suspendInstance now takes the suspended state and instance first
hostConfig.suspendInstance("div", props);
// @ts-expect-error -- waitForCommitToBeReady now requires the state and timeout offset
hostConfig.waitForCommitToBeReady();

// Test getChildHostContext (the reconciler never passes a root container)
declare const parentHostContext: ReactTestHostConfig.HostContext;
declare const rootContainer: ReactTestHostConfig.Container;

// $ExpectType HostContext
hostConfig.getChildHostContext(parentHostContext, "div");

// @ts-expect-error -- rootContainer is never passed by the reconciler
hostConfig.getChildHostContext(parentHostContext, "div", rootContainer);

// getRootHostContext returns a non-nullable HostContext.
// $ExpectType HostContext
hostConfig.getRootHostContext(rootContainer);

// Returning null only works when the renderer's HostContext includes null.
const nullRootContextConfig: Pick<typeof hostConfig, "getRootHostContext"> = {
    // @ts-expect-error -- HostContext here is an object type, so null isn't assignable
    getRootHostContext: () => null,
};

// Renderers that don't use host context opt in by setting HostContext to null.
declare const noContextConfig: LiteralHostConfig<null>;
// $ExpectType null
noContextConfig.getRootHostContext("container");

// finalizeInitialChildren receives the host context as its 4th argument.
// $ExpectType [instance: Instance, type: string, props: Props, hostContext: HostContext]
type FinalizeInitialChildrenParams = Parameters<TestHostConfig["finalizeInitialChildren"]>;

// Test the rest of the suspensey-commit family added alongside maySuspendCommit.
// $ExpectType boolean
hostConfig.maySuspendCommitOnUpdate("div", props, props);

// $ExpectType boolean
hostConfig.maySuspendCommitInSyncRender("div", props);

// $ExpectType void
hostConfig.suspendOnActiveViewTransition(suspendedState, rootContainer);

// $ExpectType string | null
hostConfig.getSuspendedCommitReason(suspendedState, rootContainer);

// @ts-expect-error -- maySuspendCommitOnUpdate needs the old and new props
hostConfig.maySuspendCommitOnUpdate("div", props);
// @ts-expect-error -- maySuspendCommitInSyncRender takes the type and props, not the props alone
hostConfig.maySuspendCommitInSyncRender(props);
// @ts-expect-error -- suspendOnActiveViewTransition takes the suspended state and root container
hostConfig.suspendOnActiveViewTransition(rootContainer);
// @ts-expect-error -- getSuspendedCommitReason takes the suspended state and root container
hostConfig.getSuspendedCommitReason(rootContainer);

// Test the renderer metadata that replaced the old injectIntoDevTools argument
// $ExpectType string
hostConfig.rendererVersion;

// $ExpectType string
hostConfig.rendererPackageName;

// $ExpectType RendererInspectionConfig | null
hostConfig.extraDevToolsConfig;

// All three are required — a host config that omits them is not assignable.
declare const metadata: Pick<
    typeof hostConfig,
    "rendererVersion" | "rendererPackageName" | "extraDevToolsConfig"
>;

// @ts-expect-error -- rendererPackageName is required
const missingPackageName: typeof metadata = {
    rendererVersion: "19.2.0",
    extraDevToolsConfig: null,
};

// @ts-expect-error -- extraDevToolsConfig is nullable but not optional
const missingExtraConfig: typeof metadata = {
    rendererVersion: "19.2.0",
    rendererPackageName: "react-test-renderer",
};

// Transition tracing can now be configured at root creation, matching createHydrationContainer.
const transitionCallbacks: ReactReconciler.TransitionTracingCallbacks = {
    onTransitionStart: (transitionName, startTime) => {},
    onTransitionComplete: (transitionName, startTime, endTime) => {},
};

// $ExpectType any
TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {}, // onUncaughtError
    (error, info) => {}, // onCaughtError
    (error, info) => {}, // onRecoverableError
    () => {}, // onDefaultTransitionIndicator
    transitionCallbacks,
);

// transitionCallbacks is required, as it is on createHydrationContainer.
// @ts-expect-error -- missing transitionCallbacks
TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {}, // onUncaughtError
    (error, info) => {}, // onCaughtError
    (error, info) => {}, // onRecoverableError
    () => {}, // onDefaultTransitionIndicator
);

// flushSync was removed from the reconciler in 0.33 — flushSyncFromReconciler and
// flushSyncWork are what remain. See the export list in ReactFiberReconciler.js.
// @ts-expect-error -- flushSync no longer exists on the reconciler
TestReconciler.flushSync();

// @ts-expect-error -- including the callback overload
TestReconciler.flushSync(() => "test");

// $ExpectType boolean | null | undefined
TestReconciler.shouldError(root.current);

// $ExpectType void
TestReconciler.defaultOnUncaughtError(new Error("test"), { componentStack: "" });
// $ExpectType void
TestReconciler.defaultOnCaughtError(new Error("test"), { componentStack: "" });
// $ExpectType void
TestReconciler.defaultOnRecoverableError(new Error("test"), { componentStack: "" });

// They exist to be handed straight to createContainer.
TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    TestReconciler.defaultOnUncaughtError,
    TestReconciler.defaultOnCaughtError,
    TestReconciler.defaultOnRecoverableError,
    () => {}, // onDefaultTransitionIndicator
    null, // transitionCallbacks
);

declare const formFiber: ReactReconciler.Fiber;
declare const formData: FormData;

// $ExpectType void
TestReconciler.startHostTransition(formFiber, null, null, formData);

// startHostTransition is generic over the renderer's form data.
TestReconciler.startHostTransition(formFiber, null, (data: { name: string }) => {}, { name: "x" });
// @ts-expect-error -- action and form data must agree
TestReconciler.startHostTransition(formFiber, null, (data: { name: string }) => {}, { id: 1 });

// These hydration dev-warning hooks were removed in React 19.2 and no longer
// exist on the host config. Their replacements are the diffHydrated*ForDevWarnings
// and describeHydratableInstanceForDevWarnings members.
declare const removedHydrationHooks: Extract<
    keyof typeof hostConfig,
    | "didNotMatchHydratedContainerTextInstance"
    | "didNotMatchHydratedTextInstance"
    | "didNotHydrateContainerInstance"
    | "didNotHydrateInstance"
    | "didNotFindHydratableContainerInstance"
    | "didNotFindHydratableContainerTextInstance"
    | "didNotFindHydratableContainerSuspenseInstance"
    | "didNotFindHydratableInstance"
    | "didNotFindHydratableTextInstance"
    | "didNotFindHydratableSuspenseInstance"
    | "getParentSuspenseInstance"
    | "errorHydratingContainer"
>;
// $ExpectType never
removedHydrationHooks;

// The hydration members React 19.2 actually calls
declare const activityInstance: ReactTestHostConfig.ActivityInstance;
declare const suspenseInstance: ReactTestHostConfig.SuspenseInstance;
declare const hydratableInstance: ReactTestHostConfig.HydratableInstance;
declare const textInstance: ReactTestHostConfig.TextInstance;
declare const hostContext: ReactTestHostConfig.HostContext;
declare const formStateMarker: ReactTestHostConfig.FormStateMarkerInstance;

// The <Activity> boundary hydration members React 19.2 adds alongside Suspense.
// $ExpectType ActivityInstance | null
hostConfig.canHydrateActivityInstance!(hydratableInstance, false);
hostConfig.hydrateActivityInstance!(activityInstance, {});
// $ExpectType HydratableInstance | null
hostConfig.getFirstHydratableChildWithinActivityInstance!(activityInstance);
// $ExpectType HydratableInstance | null
hostConfig.getNextHydratableInstanceAfterActivityInstance!(activityInstance);
hostConfig.commitHydratedActivityInstance!(activityInstance);
hostConfig.clearActivityBoundary!(instance, activityInstance);
hostConfig.clearActivityBoundaryFromContainer!(container, activityInstance);
// Dehydrated Activity boundaries can be insertion anchors and can be removed.
hostConfig.insertBefore!(instance, instance, activityInstance);
hostConfig.insertInContainerBefore!(container, instance, activityInstance);
hostConfig.removeChild!(instance, activityInstance);
hostConfig.removeChildFromContainer!(container, activityInstance);

hostConfig.clearSuspenseBoundary!(instance, suspenseInstance);
hostConfig.clearSuspenseBoundaryFromContainer!(container, suspenseInstance);
hostConfig.commitHydratedInstance!(instance, "div", props, {});
hostConfig.flushHydrationEvents!();
hostConfig.hideDehydratedBoundary!(suspenseInstance);
hostConfig.unhideDehydratedBoundary!(suspenseInstance);

// $ExpectType boolean
hostConfig.finalizeHydratedChildren!(instance, "div", props, hostContext);
// $ExpectType boolean
hostConfig.shouldDeleteUnhydratedTailInstances!("div");

// $ExpectType HydratableInstance | null
hostConfig.getFirstHydratableChildWithinContainer!(container);
// $ExpectType HydratableInstance | null
hostConfig.getFirstHydratableChildWithinSuspenseInstance!(suspenseInstance);
// $ExpectType HydratableInstance | null
hostConfig.getFirstHydratableChildWithinSingleton!("div", instance, hydratableInstance);
// $ExpectType HydratableInstance | null
hostConfig.getNextHydratableSiblingAfterSingleton!("div", hydratableInstance);

// $ExpectType SuspenseInstanceFallbackErrorDetails
hostConfig.getSuspenseInstanceFallbackErrorDetails!(suspenseInstance);

// $ExpectType FormStateMarkerInstance | null
hostConfig.canHydrateFormStateMarker!(hydratableInstance, false);
// $ExpectType boolean
hostConfig.isFormStateMarkerMatching!(formStateMarker);

// Replacements for the removed didNot* dev warnings.
// $ExpectType Props | null
hostConfig.diffHydratedPropsForDevWarnings!(instance, "div", props, hostContext);
// $ExpectType string | null
hostConfig.diffHydratedTextForDevWarnings!(textInstance, "text", null);
// $ExpectType string | HydratableInstanceDescription
hostConfig.describeHydratableInstanceForDevWarnings!(hydratableInstance);
// $ExpectType boolean
hostConfig.validateHydratableInstance!("div", props, hostContext);
// $ExpectType boolean
hostConfig.validateHydratableTextInstance!("text", hostContext);

hostConfig.unhideDehydratedBoundary!(suspenseInstance);
hostConfig.unhideDehydratedBoundary!(activityInstance);

// Dehydrated Activity boundaries go through the same clear/hide methods as Suspense ones.
declare const activityOrSuspenseConfig: Pick<
    LiteralHostConfig,
    "clearSuspenseBoundary" | "clearSuspenseBoundaryFromContainer" | "hideDehydratedBoundary"
>;
activityOrSuspenseConfig.clearSuspenseBoundary!("instance", "activity");
activityOrSuspenseConfig.clearSuspenseBoundaryFromContainer!("container", "activity");
activityOrSuspenseConfig.hideDehydratedBoundary!("activity");
activityOrSuspenseConfig.hideDehydratedBoundary!("suspense");

// -------------------
//     Resources
// -------------------
// This test config doesn't opt in (supportsResources is left undefined), but
// the members still need to type-check against the HoistableRoot/Resource
// generics threaded through HostConfig.
declare const hoistableRoot: ReactTestHostConfig.HoistableRoot;
declare const resource: ReactTestHostConfig.Resource;

// $ExpectType boolean | undefined
hostConfig.supportsResources;

// $ExpectType boolean
hostConfig.isHostHoistableType!("link", props, hostContext);

// $ExpectType HoistableRoot
hostConfig.getHoistableRoot!(container);

// $ExpectType Resource | null
hostConfig.getResource!("link", props, props, null);

// $ExpectType Instance | null
hostConfig.acquireResource!(hoistableRoot, resource, props);

hostConfig.releaseResource!(resource);

// $ExpectType Instance
hostConfig.hydrateHoistable!(hoistableRoot, "link", props, {});

hostConfig.mountHoistable!(hoistableRoot, "link", instance);
hostConfig.unmountHoistable!(instance);

// $ExpectType Instance
hostConfig.createHoistableInstance!("link", props, container, {});

hostConfig.prepareToCommitHoistables!();

// $ExpectType boolean
hostConfig.mayResourceSuspendCommit!(resource);

// $ExpectType boolean
hostConfig.preloadResource!(resource);

hostConfig.suspendResource!(suspendedState, hoistableRoot, resource, props);

// @ts-expect-error -- getResource needs the type, current props, pending props, and current resource
hostConfig.getResource!("link", props);

// -------------------
//     Singletons
// -------------------
// Also not opted into by this test config, but the members still need to
// type-check.

// $ExpectType boolean | undefined
hostConfig.supportsSingletons;

// $ExpectType Instance
hostConfig.resolveSingletonInstance!("head", props, container, hostContext, false);

hostConfig.acquireSingletonInstance!("head", props, instance, {});
hostConfig.releaseSingletonInstance!(instance, "head", props);
// @ts-expect-error -- releaseSingletonInstance takes the type and props too
hostConfig.releaseSingletonInstance!(instance);

const releasingConfig: Pick<TestHostConfig, "releaseSingletonInstance"> = {
    releaseSingletonInstance(instance, type, props) {
        // $ExpectType Instance
        instance;
        // $ExpectType string
        type;
        // $ExpectType Props
        props;
    },
};

// A one-parameter implementation is still assignable.
const legacyReleasingConfig: Pick<TestHostConfig, "releaseSingletonInstance"> = {
    releaseSingletonInstance(instance) {},
};

// $ExpectType boolean
hostConfig.isHostSingletonType!("head");
// $ExpectType boolean
hostConfig.isSingletonScope!("head");

// @ts-expect-error -- resolveSingletonInstance needs validateDOMNestingDev too
hostConfig.resolveSingletonInstance!("head", props, container, hostContext);

// -------------------
//  View Transitions
// -------------------
// InstanceMeasurement and RunningViewTransition are renderer-chosen and threaded
// between host config calls.

interface Measurement {
    x: number;
    y: number;
}
interface RunningTransition {
    finished: Promise<void>;
}

declare const vtConfig: ReactReconciler.HostConfig<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.ActivityInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.FormInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout,
    ReactTestHostConfig.TransitionStatus,
    ReactTestHostConfig.SuspendedState,
    ReactTestHostConfig.RendererInspectionConfig,
    ReactTestHostConfig.FormStateMarkerInstance,
    ReactTestHostConfig.HoistableRoot,
    ReactTestHostConfig.Resource,
    Measurement,
    RunningTransition
>;

const measurement = vtConfig.measureInstance!(instance);
// $ExpectType Measurement
measurement;
// $ExpectType boolean
vtConfig.hasInstanceChanged!(measurement, vtConfig.measureClonedInstance!(instance));
// $ExpectType boolean
vtConfig.wasInstanceInViewport!(measurement);
// @ts-expect-error -- measurements must be the renderer's InstanceMeasurement
vtConfig.hasInstanceAffectedParent!(measurement, { x: "0" });

const running = vtConfig.startViewTransition!(
    suspendedState,
    container,
    ["nav"],
    () => {},
    () => {},
    () => {},
    () => {},
    () => {},
    error => {},
    reason => {},
    () => {},
);
// $ExpectType RunningTransition | null
running;
if (running) {
    vtConfig.addViewTransitionFinishedListener!(running, () => {});
    vtConfig.stopViewTransition!(running);
}

vtConfig.applyViewTransitionName!(instance, "hero", null);
vtConfig.restoreViewTransitionName!(instance, props);
vtConfig.cancelViewTransitionName!(instance, "hero", props);
// $ExpectType Instance
vtConfig.cloneRootViewTransitionContainer!(container);
// $ExpectType { name: string; } | null
vtConfig.createViewTransitionInstance!("hero");

// The default config (no VT generics) leaves the renderer types as unknown.
// $ExpectType unknown
hostConfig.measureInstance!(instance);

// blockedCallback and finishedAnimation are only passed in profiling builds.
const vtStartConfig: Pick<typeof vtConfig, "startViewTransition"> = {
    startViewTransition(
        suspendedState,
        rootContainer,
        transitionTypes,
        mutationCallback,
        layoutCallback,
        afterMutationCallback,
        spawnedWorkCallback,
        passiveCallback,
        errorCallback,
        blockedCallback,
        finishedAnimation,
    ) {
        // $ExpectType ((reason: string) => void) | null
        blockedCallback;
        // @ts-expect-error -- finishedAnimation may be null outside profiling builds
        finishedAnimation();
        finishedAnimation?.();
        return null;
    },
};

// -------------------
//   Fragment refs
// -------------------
// Called when a ref is attached to a <Fragment>. FragmentInstance is renderer-chosen
// and threaded between host config calls.

interface FragmentHandle {
    children: Set<ReactTestHostConfig.Instance | ReactTestHostConfig.TextInstance>;
}

declare const fragmentConfig: ReactReconciler.HostConfig<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.ActivityInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.FormInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout,
    ReactTestHostConfig.TransitionStatus,
    ReactTestHostConfig.SuspendedState,
    ReactTestHostConfig.RendererInspectionConfig,
    ReactTestHostConfig.FormStateMarkerInstance,
    ReactTestHostConfig.HoistableRoot,
    ReactTestHostConfig.Resource,
    unknown,
    unknown,
    FragmentHandle
>;
declare const fragmentFiber: ReactReconciler.Fiber;

const fragmentInstance = fragmentConfig.createFragmentInstance!(fragmentFiber);
// $ExpectType FragmentHandle
fragmentInstance;
// $ExpectType void
fragmentConfig.updateFragmentInstanceFiber!(fragmentFiber, fragmentInstance);
// $ExpectType void
fragmentConfig.commitNewChildToFragmentInstance!(instance, fragmentInstance);
// Text children are passed too.
fragmentConfig.commitNewChildToFragmentInstance!(textInstance, fragmentInstance);
// $ExpectType void
fragmentConfig.deleteChildFromFragmentInstance!(instance, fragmentInstance);
fragmentConfig.deleteChildFromFragmentInstance!(textInstance, fragmentInstance);

// @ts-expect-error -- fragment instances must be the renderer's FragmentInstance
fragmentConfig.updateFragmentInstanceFiber!(fragmentFiber, { children: [] });
// @ts-expect-error -- only host instances are committed to a fragment
fragmentConfig.commitNewChildToFragmentInstance!(container, fragmentInstance);

const fragmentImpl: Pick<
    typeof fragmentConfig,
    | "createFragmentInstance"
    | "updateFragmentInstanceFiber"
    | "commitNewChildToFragmentInstance"
    | "deleteChildFromFragmentInstance"
> = {
    createFragmentInstance(fiber) {
        // $ExpectType Fiber
        fiber;
        return { children: new Set() };
    },
    updateFragmentInstanceFiber(fiber, handle) {
        // $ExpectType FragmentHandle
        handle;
    },
    commitNewChildToFragmentInstance(child, handle) {
        // $ExpectType Instance | TextInstance
        child;
        handle.children.add(child);
    },
    deleteChildFromFragmentInstance(child, handle) {
        handle.children.delete(child);
    },
};

// Renderers without fragment refs can leave them out or return null.
const noFragmentRefs: Pick<LiteralHostConfig, "createFragmentInstance"> = {
    createFragmentInstance: () => null,
};
// The default config (no FragmentInstance generic) leaves it as unknown.
// $ExpectType unknown
hostConfig.createFragmentInstance!(fragmentFiber);

// -------------------
//   Test selectors
// -------------------
// react-test-renderer doesn't support test selectors either, so this pulls in
// the same NoTestSelectors shims used by react-reconciler's own default fork.

// $ExpectType boolean | undefined
hostConfig.supportsTestSelectors;

// $ExpectType any
hostConfig.findFiberRoot!(instance);

// $ExpectType BoundingRect
hostConfig.getBoundingRect!(instance);

// $ExpectType string | null
hostConfig.getTextContent!(formFiber);

// $ExpectType boolean
hostConfig.isHiddenSubtree!(formFiber);

// $ExpectType boolean
hostConfig.matchAccessibilityRole!(instance, "button");

// $ExpectType boolean
hostConfig.setFocusIfFocusable!(instance);

// $ExpectType { disconnect: () => void; observe: (instance: Instance) => void; unobserve: (instance: Instance) => void; }
hostConfig.setupIntersectionObserver!([instance], intersections => {});

// -------------------
//     bindToConsole
// -------------------
// Required (not part of any optional feature group) — used to replay Server
// console logs on the client.

// $ExpectType () => any
hostConfig.bindToConsole("error", ["oops"], "Server");

// -------------------
//   Error callbacks
// -------------------
// React passes whatever was thrown, which is not necessarily an Error.

TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {
        // $ExpectType unknown
        error;
        // @ts-expect-error -- thrown values are not necessarily Errors
        error.message;
        if (error instanceof Error) error.message;
        // $ExpectType string | null | undefined
        info.componentStack;
    },
    (error, info) => {
        // $ExpectType unknown
        error;
    },
    (error, info) => {
        // $ExpectType unknown
        error;
    },
    () => {}, // onDefaultTransitionIndicator
    null, // transitionCallbacks
);

// Anything can be thrown, not just Errors.
TestReconciler.defaultOnUncaughtError("thrown string", { componentStack: "" });
TestReconciler.defaultOnCaughtError(null, { componentStack: "" });
TestReconciler.defaultOnRecoverableError({ code: 1 }, { componentStack: "" });
TestReconciler.defaultOnCaughtError(new Error("test"), { componentStack: "", errorBoundary: null });
TestReconciler.defaultOnRecoverableError(new Error("test"), { componentStack: null });

// Only caught errors carry the error boundary.
TestReconciler.createHydrationContainer(
    null, // initialChildren
    null, // callback
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {
        // @ts-expect-error -- only caught errors have a boundary
        info.errorBoundary;
    },
    (error, info) => {
        // $ExpectType Component<any, any, any> | null | undefined
        info.errorBoundary;
    },
    (error, info) => {},
    () => {}, // onDefaultTransitionIndicator
    null, // transitionCallbacks
    null, // formState
);

// -------------------
//  Transition indicator
// -------------------
// The indicator may return a cleanup, called when the transition ends.

declare function showSpinner(): void;
declare function hideSpinner(): void;

type DefaultTransitionIndicator = Parameters<typeof TestReconciler.createContainer>[9];
// $ExpectType void | (() => void)
type DefaultTransitionIndicatorResult = ReturnType<DefaultTransitionIndicator>;

TestReconciler.createContainer(
    container,
    ReactReconcilerConstants.ConcurrentRoot,
    null, // hydrationCallbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    "", // identifierPrefix
    (error, info) => {},
    (error, info) => {},
    (error, info) => {},
    () => {
        showSpinner();
        return () => hideSpinner();
    },
    null, // transitionCallbacks
);

// -------------------
//     Persistence
// -------------------

// React calls createContainerChildSet() with no arguments.
// $ExpectType []
type CreateContainerChildSetParams = Parameters<NonNullable<TestHostConfig["createContainerChildSet"]>>;

const persistentConfig: Pick<TestHostConfig, "createContainerChildSet"> = {
    createContainerChildSet: () => undefined,
};

const brokenPersistentConfig: Pick<TestHostConfig, "createContainerChildSet"> = {
    // @ts-expect-error -- container is never passed
    createContainerChildSet: (container: ReactTestHostConfig.Container) => undefined,
};

// React never passes internalInstanceHandle to these.
// $ExpectType [instance: Instance, type: string, props: Props]
type CloneHiddenInstanceParams = Parameters<NonNullable<TestHostConfig["cloneHiddenInstance"]>>;
// $ExpectType [instance: TextInstance, text: string]
type CloneHiddenTextInstanceParams = Parameters<NonNullable<TestHostConfig["cloneHiddenTextInstance"]>>;

const brokenHiddenConfig: Pick<TestHostConfig, "cloneHiddenInstance"> = {
    // @ts-expect-error -- internalInstanceHandle is never passed
    cloneHiddenInstance: (
        instance: ReactTestHostConfig.Instance,
        type: string,
        props: ReactTestHostConfig.Props,
        internalInstanceHandle: object,
    ) => instance,
};

// cloneInstance's last argument is the new child set, not a recyclable instance.
// $ExpectType [instance: Instance, type: string, oldProps: Props, newProps: Props, keepChildren: boolean, newChildSet?: null | undefined]
type CloneInstanceParams = Parameters<NonNullable<TestHostConfig["cloneInstance"]>>;

// -------------------
//    ReactContext
// -------------------

declare const ctx: ReactReconciler.ReactContext<string>;

// React 19: the context is its own Provider.
// $ExpectType ReactContext<string>
ctx.Provider;
// $ExpectType ReactConsumerType<string>
ctx.Consumer;
// $ExpectType ReactContext<string>
ctx.Consumer._context;

// @ts-expect-error -- Consumer is no longer a context
ctx.Consumer._currentValue;

// -------------------
//  Tags and hook types
// -------------------

const concurrentRootTag: ReactReconciler.RootTag = 1;
// @ts-expect-error -- React only has legacy (0) and concurrent (1) roots
const blockingRootTag: ReactReconciler.RootTag = 2;

// Newer work tags (e.g. HostHoistable = 26) are valid.
const hoistableTag: ReactReconciler.WorkTag = 26;
// @ts-expect-error -- React has no work tag 32
const unknownTag: ReactReconciler.WorkTag = 32;

const effectEventHook: ReactReconciler.HookType = "useEffectEvent";
// @ts-expect-error -- removed in React 18
const mutableSourceHook: ReactReconciler.HookType = "useMutableSource";

// -------------------
//  Fiber fields
// -------------------

declare const fiber: ReactReconciler.Fiber;

// The effect list (nextEffect/firstEffect/lastEffect) was removed in React 17.
// Code that walks it type-checks but does nothing at runtime.
// @ts-expect-error -- nextEffect no longer exists; walk child/sibling and check flags instead
fiber.nextEffect;
// @ts-expect-error -- firstEffect no longer exists
fiber.firstEffect;
// @ts-expect-error -- lastEffect no longer exists
fiber.lastEffect;

// Removed DEV-only fields
// @ts-expect-error -- _debugID was removed
fiber._debugID;
// @ts-expect-error -- _debugSource was removed
fiber._debugSource;
// @ts-expect-error -- _debugIsCurrentlyTiming was removed
fiber._debugIsCurrentlyTiming;

// What replaced the effect list still works
// $ExpectType number
fiber.flags;
// $ExpectType number
fiber.subtreeFlags;
// $ExpectType Fiber[] | null
fiber.deletions;
// $ExpectType Fiber | null | undefined
fiber._debugOwner;

// refCleanup holds the cleanup function a callback ref returned (React 19).
// It's a real, non-DEV field, so it's required rather than optional.
// $ExpectType (() => void) | null
fiber.refCleanup;
if (fiber.refCleanup !== null) {
    fiber.refCleanup();
}

// -------------------
//  Context dependencies
// -------------------

declare const contextDependency: ReactReconciler.ContextDependency<string>;

// memoizedValue is the context value read during render, used to detect changes.
// $ExpectType string
contextDependency.memoizedValue;
// @ts-expect-error -- observedBits was removed along with calculateChangedBits
contextDependency.observedBits;
// $ExpectType ReactContext<string>
contextDependency.context;
