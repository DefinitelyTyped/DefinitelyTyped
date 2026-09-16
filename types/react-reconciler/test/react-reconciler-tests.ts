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
    ReactTestHostConfig.FormStateMarkerInstance
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
    ReactTestHostConfig.FormStateMarkerInstance
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
    ReactTestHostConfig.FormStateMarkerInstance
> = ReactTestHostConfig;

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

// getRootHostContext is unchanged and still receives the container.
// $ExpectType HostContext | null
hostConfig.getRootHostContext(rootContainer);

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
declare const suspenseInstance: ReactTestHostConfig.SuspenseInstance;
declare const hydratableInstance: ReactTestHostConfig.HydratableInstance;
declare const textInstance: ReactTestHostConfig.TextInstance;
declare const hostContext: ReactTestHostConfig.HostContext;
declare const formStateMarker: ReactTestHostConfig.FormStateMarkerInstance;

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
