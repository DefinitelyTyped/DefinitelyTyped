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

// @ts-expect-error -- no revealOrder
<React.unstable_SuspenseList>
    <React.Suspense fallback="Loading">Content</React.Suspense>
</React.unstable_SuspenseList>;
// Unsupported `revealOrder` triggers a runtime warning
// @ts-expect-error
<React.unstable_SuspenseList revealOrder="something">
    <React.Suspense fallback="Loading">Content</React.Suspense>
</React.unstable_SuspenseList>;

// @ts-expect-error -- no tail
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

function viewTransitionTests() {
    const ViewTransition = React.unstable_ViewTransition;
    const addTransitionType = React.unstable_addTransitionType;

    <ViewTransition />;
    <ViewTransition
        default="enter-slide-in exit-fade-out update-cross-fade"
        enter="slide-from-left"
        exit="slide-to-right"
        update="none"
        share="cross-fade"
    />;
    <ViewTransition name="auto" />;
    <ViewTransition name="foo" />;
    <ViewTransition
        // autocomplete should display "auto"
        name=""
        // autocomplete should display "auto" | "none"
        default=""
    />;
    <ViewTransition
        // @ts-expect-error -- Either a string or an object with at least one property.
        default={{}}
    />;
    <ViewTransition
        // autocomplete should display "default" for keys, "auto" | "none" for values
        default={{ default: "default" }}
    />;

    <ViewTransition
        onEnter={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onExit={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onShare={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onUpdate={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
    />;

    <ViewTransition
        ref={current => {
            if (current !== null) {
                // $ExpectType string
                current.name;
            }
        }}
    >
        <div />
    </ViewTransition>;

    <ViewTransition>
        <div />
    </ViewTransition>;

    const Null = () => null;
    <ViewTransition>
        <Null />
    </ViewTransition>;

    const Div = ({ children }: { children?: React.ReactNode }) => <div>{children}</div>;
    <ViewTransition>
        <Div />
    </ViewTransition>;

    function Component() {
        function handleNavigation() {
            React.startTransition(() => {
                // @ts-expect-error
                addTransitionType();
                // @ts-expect-error
                addTransitionType(undefined);
                addTransitionType("navigation");
            });
        }
    }
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

// @enableFragmentRefs
function fragmentRefTest() {
    <React.Fragment
        ref={maybeInstance => {
            // $ExpectType FragmentInstance | null
            maybeInstance;

            // See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/69022/commits/57825689c7abb50a79395d1266226cfa1b31a4e1
            const instance = maybeInstance!;

            // @ts-expect-error -- Not implemented by isomorphic renderer but react-dom.
            instance.focus;

            return () => {};
        }}
    >
        <div />
        <div />
    </React.Fragment>;
}

// @enableActivity
function activityTest() {
    const Activity = React.unstable_Activity;

    <Activity children="peekaboo" />;
    <Activity children="peekaboo" mode={undefined} />;
    <Activity children="peekaboo" mode="visible" />;
    <Activity children="peekaboo" mode="hidden" />;
    // @ts-expect-error -- Forgot children
    <Activity />;
    <Activity
        children="peekaboo"
        // @ts-expect-error -- Unknown mode
        mode="not-a-mode"
    />;
}
