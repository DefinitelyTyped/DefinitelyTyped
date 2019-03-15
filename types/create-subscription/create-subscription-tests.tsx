import * as React from "react";
import { createSubscription, Subscription } from "create-subscription";

//
// Example: Subscribing to event dispatchers
// https://github.com/facebook/react/blob/fa7fa812c70084e139d13437fb204fcdf9152299/packages/create-subscription/README.md#subscribing-to-event-dispatchers
// ----------------------------------------------------------------------------

// Start with a simple component.
// In this case, it's a functional component, but it could have been a class.
function FollowerComponent({ followersCount }: { followersCount: number }) {
    return <div>You have {followersCount} followers!</div>;
}

interface EventDispatcher<T> {
    value: T;
    addEventListener(eventName: "change", onChange: (newValue: T) => any): void;
    removeEventListener(eventName: "change", onChange: (newValue: T) => any): void;
}

// Create a wrapper component to manage the subscription.
// $ExpectType Subscription<EventDispatcher<number>, number>
const EventHandlerSubscription = createSubscription({
    getCurrentValue: (eventDispatcher: EventDispatcher<number>) => eventDispatcher.value,
    subscribe: (eventDispatcher: EventDispatcher<number>, callback) => {
        const onChange = (event: any) => callback(eventDispatcher.value);
        eventDispatcher.addEventListener("change", onChange);
        return () => eventDispatcher.removeEventListener("change", onChange);
    }
});

declare const eventDispatcher: EventDispatcher<number>;

// Your component can now be used as shown below.
// In this example, 'eventDispatcher' represents a generic event dispatcher.
<EventHandlerSubscription source={eventDispatcher}>
    {value => {
        // $ExpectType number
        const followersCount = value;
        return <FollowerComponent followersCount={followersCount} />;
    }}
</EventHandlerSubscription>;

//
// Example: Subscribing to event dispatchers
// https://github.com/facebook/react/blob/fa7fa812c70084e139d13437fb204fcdf9152299/packages/create-subscription/README.md#subscribing-to-a-promise
// ----------------------------------------------------------------------------

// Start with a simple component.
const LoadingComponent: React.SFC<{ loadingStatus: string | undefined }> = ({ loadingStatus }) => {
    if (loadingStatus === undefined) {
        // Loading
    } else if (loadingStatus === null) {
        // Error
    } else {
        // Success
    }
    return null;
};

// Wrap the functional component with a subscriber HOC.
// This HOC will manage subscriptions and pass values to the decorated component.
// It will add and remove subscriptions in an async-safe way when props change.
// $ExpectType Subscription<Promise<string>, string | undefined>
const PromiseSubscription = createSubscription({
    getCurrentValue: promise => {
        // There is no way to synchronously read a Promise's value,
        // So this method should return undefined.
        return undefined;
    },
    subscribe: (promise: Promise<string>, callback: (newValue: string | undefined) => void) => {
        promise.then(
            // Success
            callback,
            // Failure
            () => callback(undefined)
        );

        // There is no way to "unsubscribe" from a Promise.
        // create-subscription will still prevent stale values from rendering.
        return () => {};
    }
});

declare const loadingPromise: Promise<string>;

// Your component can now be used as shown below.
<PromiseSubscription source={loadingPromise}>
    {value => {
        // $ExpectType string | undefined
        const loadingStatus = value;
        return <LoadingComponent loadingStatus={loadingStatus} />;
    }}
</PromiseSubscription>;

//
// Error cases
// ----------------------------------------------------------------------------

declare const wrongPromise: Promise<number>;

// $ExpectError
<PromiseSubscription source={wrongPromise}>
    {value => null}
</PromiseSubscription>;

// $ExpectError
const MismatchSubscription = createSubscription({ getCurrentValue: (a: number) => null, subscribe: (a: string, callback) => (() => undefined) });

// $ExpectError
const NoUnsubscribe = createSubscription({ getCurrentValue: (a: number) => a, subscribe: (a: number, callback) => { /* oops, should've returned a callback here */ }});
