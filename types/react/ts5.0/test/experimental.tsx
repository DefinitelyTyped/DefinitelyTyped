/// <reference types="../experimental"/>

import React = require('react');

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

function suspenseTest() {
    function DisplayData() {
        return null;
    }

    function FlameChart() {
        return (
            <React.Suspense fallback="computing..." unstable_expectedLoadTime={2000}>
                <DisplayData />
            </React.Suspense>
        );
    }
}

// Unsupported `revealOrder` triggers a runtime warning
// @ts-expect-error
<React.SuspenseList revealOrder="something">
    <React.Suspense fallback="Loading">Content</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="backwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="forwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

<React.SuspenseList revealOrder="together">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.SuspenseList>;

function useEvent() {
    // Implicit any
    // @ts-expect-error
    const anyEvent = React.experimental_useEffectEvent(value => {
        // $ExpectType any
        return value;
    });
    // $ExpectType any
    anyEvent({});
    // $ExpectType (value: string) => number
    const typedEvent = React.experimental_useEffectEvent((value: string) => {
        return Number(value);
    });
    // $ExpectType number
    typedEvent('1');
    // Argument of type '{}' is not assignable to parameter of type 'string'.
    // @ts-expect-error
    typedEvent({});

    function useContextuallyTypedEvent(fn: (event: Event) => string) {}
    useContextuallyTypedEvent(
        React.experimental_useEffectEvent(event => {
            // $ExpectType Event
            event;
            return String(event);
        }),
    );
}

function useAsyncAction() {
    const [isPending, startTransition] = React.useTransition();

    function handleClick() {
        // $ExpectType void
        startTransition(async () => {});
    }
}

function formActionsTest() {
    <form
        action={formData => {
            // $ExpectType FormData
            formData;
        }}
    >
        <input type="text" name="title" defaultValue="Hello" />
        <input
            type="submit"
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
            value="Save"
        />
        <button
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
        >
            Delete
        </button>
    </form>;
}

const useOptimistic = React.experimental_useOptimistic;
function Optimistic() {
    const savedCartSize = 0;
    const [optimisticCartSize, addToOptimisticCart] = useOptimistic(savedCartSize, (prevSize, newItem) => {
        // This is the default type for un-inferrable generics in TypeScript.
        // To have a concrete type either type the second parameter in the reducer (see addToOptimisticCartTyped)
        // or declare the type of the generic (see addToOptimisticCartTyped2)
        // $ExpectType unknown
        newItem;
        console.log('Increment optimistic cart size for ' + newItem);
        return prevSize + 1;
    });
    // $ExpectType number
    optimisticCartSize;

    const [, addToOptimisticCartTyped] = useOptimistic(savedCartSize, (prevSize, newItem: string) => {
        // $ExpectType string
        newItem;
        console.log('Increment optimistic cart size for ' + newItem);
        return prevSize + 1;
    });
    const [, addToOptimisticCartTyped2] = useOptimistic<number, string>(savedCartSize, (prevSize, newItem) => {
        // $ExpectType string
        newItem;
        console.log('Increment optimistic cart size for ' + newItem);
        return prevSize + 1;
    });

    const addItemToCart = (item: unknown) => {
        addToOptimisticCart(item);
        addToOptimisticCartTyped(
            // @ts-expect-error unknown is not assignable to string
            item,
        );
        addToOptimisticCartTyped(String(item));
        addToOptimisticCartTyped2(
            // @ts-expect-error unknown is not assignable to string
            item,
        );
        addToOptimisticCartTyped2(String(item));
    };
}
