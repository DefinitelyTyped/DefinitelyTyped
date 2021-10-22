import ReactReconciler = require('react-reconciler');
import * as ReactTestHostConfig from './ReactTestHostConfig';

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
