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
    ReactTestHostConfig.TransitionStatus
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
    ReactTestHostConfig.TransitionStatus
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
