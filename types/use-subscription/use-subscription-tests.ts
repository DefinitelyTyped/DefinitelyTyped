import { useMemo } from 'react';
import { useSubscription, Subscription } from 'use-subscription';

// https://github.com/facebook/react/tree/d96f478f8a79da3125f6842c16efbc2ae8bcd3bf/packages/use-subscription#subscribing-to-event-dispatchers
function EventDispatcherExample({ input }: { input: HTMLInputElement }) {
    const subscription = useMemo(
        (): Subscription<string> => ({
            getCurrentValue: () => input.value,
            subscribe: callback => {
                input.addEventListener('change', callback);
                return () => input.removeEventListener('change', callback);
            },
        }),

        [input],
    );

    // $ExpectType string
    const value = useSubscription(subscription);

    // Your rendered output goes here ...
}
