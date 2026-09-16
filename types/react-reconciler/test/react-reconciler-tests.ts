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
    ReactTestHostConfig.SuspendedState
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
    ReactTestHostConfig.SuspendedState
>(ReactTestHostConfig);

const container: ReactTestHostConfig.Container = {
    children: [],
    createNodeMock: () => null,
    tag: "CONTAINER",
};

// Test createContainer signature (10 arguments, no transitionCallbacks)
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

// Test default error handlers
// $ExpectType void
ReactReconciler.defaultOnUncaughtError(new Error("test"));
// $ExpectType void
ReactReconciler.defaultOnCaughtError(new Error("test"));
// $ExpectType void
ReactReconciler.defaultOnRecoverableError(new Error("test"));

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
    ReactTestHostConfig.SuspendedState
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
