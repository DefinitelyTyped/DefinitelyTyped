import * as React from "react";
import { useMemo } from "react";
import { Subscription, useSubscription } from "use-subscription";

// https://github.com/facebook/react/tree/d96f478f8a79da3125f6842c16efbc2ae8bcd3bf/packages/use-subscription#subscribing-to-event-dispatchers
function EventDispatcherExample({ input }: { input: HTMLInputElement }) {
    const subscription = useMemo(
        (): Subscription<string> => ({
            getCurrentValue: () => input.value,
            subscribe: handler => {
                input.addEventListener("input", handler);
                return () => input.removeEventListener("input", handler);
            },
        }),
        React.UNSAFE_memoizedDeps([input]),
    );

    // $ExpectType string
    const value = useSubscription(subscription);

    // Your rendered output goes here ...
}
