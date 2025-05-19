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

// @enableStore
function storeTest() {
    const createStore = React.unstable_createStore;

    const simpleNumberStore = createStore(0);
    simpleNumberStore.update(5);
    simpleNumberStore.update(
        // @ts-expect-error -- Reducer goes into `createStore`
        (prev: number) => prev + 1,
    );
    simpleNumberStore.update(
        // @ts-expect-error -- assumed store has a reducer
        "increment",
    );
    // $ExpectType number
    React.use(simpleNumberStore);

    const numberStore = createStore(0, (
        // TODO: Would be nice to have `prev` inferred from the initial value and return type
        prev: number,
        action: "increment" | "double",
    ) => {
        if (action === "increment") {
            return prev + 1;
        } else if (action === "double") {
            return prev * 2;
        } else {
            throw new Error("unreachable");
        }
    });
    numberStore.update(
        // @ts-expect-error -- assumed reducer-less store
        5,
    );
    numberStore.update(
        // @ts-expect-error -- Reducer goes into `createStore`
        (prev: number) => prev + 1,
    );
    numberStore.update("increment");
    numberStore.update(
        // @ts-expect-error -- Unsupported action
        "decrement",
    );

    // Ideally this would be `number | null` and people opt-into literals via `as const`
    // $ExpectType 0 | null
    React.use(createStore(0, () => null));

    const voidStore = createStore<number>(0, n => n + 1);
    voidStore.update();
    voidStore.update(
        // @ts-expect-error -- would be ignored by the reducer
        5,
    );

    createStore<number>(
        // @ts-expect-error -- Initial value is not a number
        "not a number",
    );

    createStore<number, "increment">(5, (n, action) => {
        // $ExpectType number
        n;
        // $ExpectType "increment"
        action;
        return n + 1;
    });

    const updaterStore = createStore(0, (n: number, updaterOrN: number | ((n: number) => number)) => {
        // $ExpectType number
        n;
        // $ExpectType number | ((n: number) => number)
        updaterOrN;
        if (typeof updaterOrN === "number") {
            return n + updaterOrN;
        } else {
            return updaterOrN(n);
        }
    });
    // $ExpectType number
    React.use(updaterStore);
    updaterStore.update(5);
    updaterStore.update(n => n - 1);

    // @ts-expect-error -- missing reducer, omit the Action argument
    createStore<number, "increment">(5);
}
