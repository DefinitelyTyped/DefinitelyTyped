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
