import EventEmitter, { EmitterSubscription, EventSubscriptionVendor } from "../vendor/emitter/EventEmitter";

/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTDeviceEventEmitter.
 */
interface DeviceEventEmitterStatic extends EventEmitter {
    sharedSubscriber: EventSubscriptionVendor;
    new(): DeviceEventEmitterStatic;
    addListener(
        type: string,
        listener: (data: any) => void,
        context?: any,
    ): EmitterSubscription;
}

export const DeviceEventEmitter: DeviceEventEmitterStatic;
