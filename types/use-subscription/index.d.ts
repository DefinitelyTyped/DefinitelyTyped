// Type definitions for use-subscription 1.0
// Project: https://github.com/facebook/react/
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type Unsubscribe = () => void;

export interface Subscription<T> {
    /**
     * (Synchronously) returns the current value of our subscription.
     */
    getCurrentValue: () => T;
    /**
     * This function is passed an event handler to attach to the subscription.
     * It must return an unsubscribe function that removes the handler.
     */
    subscribe: (callback: () => void) => Unsubscribe;
}

export function useSubscription<T>(subscription: Subscription<T>): T;
