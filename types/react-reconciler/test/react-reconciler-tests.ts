import ReactFiberReconciler = require("react-reconciler");
import * as ReactTestHostConfig from './ReactTestHostConfig';

// $ExpectType Reconciler<Instance, TextInstance, Container, HydratableInstance>
ReactFiberReconciler<
    ReactTestHostConfig.Type,
    ReactTestHostConfig.Props,
    ReactTestHostConfig.Container,
    ReactTestHostConfig.Instance,
    ReactTestHostConfig.TextInstance,
    ReactTestHostConfig.HydratableInstance,
    ReactTestHostConfig.PublicInstance,
    ReactTestHostConfig.HostContext,
    ReactTestHostConfig.UpdatePayload,
    ReactTestHostConfig.ChildSet,
    ReactTestHostConfig.TimeoutHandle,
    ReactTestHostConfig.NoTimeout
>(ReactTestHostConfig);
