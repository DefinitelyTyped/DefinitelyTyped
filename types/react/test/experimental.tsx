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
            <React.Suspense fallback="computing..." defer>
                <DisplayData />
            </React.Suspense>
        );
    }
}

function suspenseListTests() {
    <React.unstable_SuspenseList>
        <React.Suspense fallback="Loading">Content</React.Suspense>
        <React.Suspense fallback="Loading">Content</React.Suspense>
    </React.unstable_SuspenseList>;
    // @ts-expect-error -- Directional SuspenseList needs more than one child
    <React.unstable_SuspenseList>
        <React.Suspense fallback="Loading">Content</React.Suspense>
    </React.unstable_SuspenseList>;
    // Unsupported `revealOrder` triggers a runtime warning
    // @ts-expect-error
    <React.unstable_SuspenseList revealOrder="something">
        <React.Suspense fallback="Loading">Content</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="forwards">
        <React.Suspense fallback="Loading">Content</React.Suspense>
        <React.Suspense fallback="Loading">Content</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="backwards" tail="collapsed">
        <React.Suspense fallback="Loading">A</React.Suspense>
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    // @ts-expect-error -- Must have more than one static child
    <React.unstable_SuspenseList revealOrder="backwards" tail="collapsed">
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="unstable_legacy-backwards" tail="collapsed">
        <React.Suspense fallback="Loading">A</React.Suspense>
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="independent">
        <React.Suspense fallback="Loading">A</React.Suspense>
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="forwards" tail="hidden">
        <React.Suspense fallback="Loading">A</React.Suspense>
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    <React.unstable_SuspenseList revealOrder="together">
        <React.Suspense fallback="Loading">A</React.Suspense>
        <React.Suspense fallback="Loading">B</React.Suspense>
    </React.unstable_SuspenseList>;

    function Page({ children }: { children: NonNullable<React.ReactNode> }) {
        return (
            // @ts-expect-error -- Can't pass arbitrary Nodes. Must be an Element or Iterable of Elements.
            <React.unstable_SuspenseList revealOrder="forwards" tail="collapsed">
                {children}
            </React.unstable_SuspenseList>
        );
    }
}

function elementTypeTests() {
    const ReturnPromise = () => Promise.resolve("React");
    const FCPromise: React.FC = ReturnPromise;
    class RenderPromise extends React.Component {
        render() {
            return Promise.resolve("React");
        }
    }

    <ReturnPromise />;
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

// @enableGestureTransition
function swipeTransitionTest() {
    const startGestureTransition = React.unstable_startGestureTransition;

    const url: string = "";
    const [renderedUrl, optimisticNavigate] = React.useOptimistic(
        url,
        (state, direction) => {
            return direction === "left" ? "/?a" : "/?b";
        },
    );

    function onScroll() {
        const gestureProvider: {} = {};
        // $ExpectType () => void
        startGestureTransition(
            gestureProvider,
            () => {
                optimisticNavigate("left");
            },
            {
                rangeStart: 0,
                rangeEnd: 100,
            },
        );
        // @ts-expect-error -- missing gesture provider
        startGestureTransition();
        // @ts-expect-error -- missing scope
        startGestureTransition(gestureProvider);
        // options can be omitted
        startGestureTransition(gestureProvider, () => {});
        // options can be empty
        startGestureTransition(gestureProvider, () => {}, {});
    }
}
