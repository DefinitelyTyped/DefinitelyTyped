import ReactReconciler = require('react-reconciler');
import ReactReconcilerConstants = require('react-reconciler/constants');
import * as ReactTestHostConfig from './ReactTestHostConfig';
import * as Constants from './ReactReconcilerPriorityConstant';

// $ExpectType Reconciler<Container, Instance, TextInstance, any, PublicInstance>
ReactReconciler<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.SuspenseInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.UpdatePayload,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout
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
