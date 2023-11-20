/// <reference types="../experimental"/>

import React = require("react");

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
<React.unstable_SuspenseList revealOrder="something">
    <React.Suspense fallback="Loading">Content</React.Suspense>
</React.unstable_SuspenseList>;

<React.unstable_SuspenseList revealOrder="backwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.unstable_SuspenseList>;

<React.unstable_SuspenseList revealOrder="forwards">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.unstable_SuspenseList>;

<React.unstable_SuspenseList revealOrder="together">
    <React.Suspense fallback="Loading">A</React.Suspense>
    <React.Suspense fallback="Loading">B</React.Suspense>
</React.unstable_SuspenseList>;

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
    typedEvent("1");
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

// ReactNode tests
{
    // @ts-expect-error
    const render: React.ReactNode = () => React.createElement("div");
    // @ts-expect-error
    const emptyObject: React.ReactNode = {};
    // @ts-expect-error
    const plainObject: React.ReactNode = { dave: true };
    const promise: React.ReactNode = Promise.resolve("React");
    // @ts-expect-error plain objects are not allowed
    <div>{{ dave: true }}</div>;
    <div>{Promise.resolve("React")}</div>;
}

function elementTypeTests() {
    const ReturnPromise = () => Promise.resolve("React");
    // @ts-expect-error Needs https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65135
    const FCPromise: React.FC = ReturnPromise;
    class RenderPromise extends React.Component {
        render() {
            return Promise.resolve("React");
        }
    }

    // @ts-expect-error Needs https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65135
    <ReturnPromise />;
    // @ts-expect-error Needs https://github.com/DefinitelyTyped/DefinitelyTyped/pull/65135
    React.createElement(ReturnPromise);
    <RenderPromise />;
    React.createElement(RenderPromise);
}

function taintTests() {
    const taintUniqueValue = React.experimental_taintUniqueValue;
    const taintObjectReference = React.experimental_taintObjectReference;

    const process = {
        env: {
            SECRET: "0967af1802d2a516e88c7c42e0b8ef95",
        },
    };
    const user = {
        name: "Sebbie",
    };

    taintUniqueValue("Cannot pass a secret token to the client", process, process.env.SECRET);
    taintUniqueValue(undefined, process, process.env.SECRET);
    // @ts-expect-error Probably meant `taintObjectReference`
    taintUniqueValue(
        undefined,
        user,
    );
    taintUniqueValue(
        undefined,
        process,
        // @ts-expect-error should use taintObjectReference instead
        process.env,
    );
    taintUniqueValue(
        undefined,
        process,
        // @ts-expect-error Not unique
        5,
    );

    taintObjectReference("Don't pass the raw user object to the client", user);
    taintObjectReference(undefined, user);
    taintObjectReference(
        undefined,
        // @ts-expect-error Not a reference
        process.env.SECRET,
    );
    taintObjectReference(
        undefined,
        // @ts-expect-error Not a reference
        true,
    );
}
