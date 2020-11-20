/// <reference types="../experimental"/>

import React = require('react');

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    const [startTransition, done] = React.unstable_useTransition({
        busyMinDurationMs: 100,
        busyDelayMs: 200,
    });
    // $ExpectType boolean
    done;

    // $ExpectType boolean
    const deferredToggle = React.unstable_useDeferredValue(toggle);

    const [func] = React.useState(() => () => 0);

    // $ExpectType () => number
    func;
    // $ExpectType () => number
    const deferredFunc = React.unstable_useDeferredValue(func);

    class Constructor {}
    // $ExpectType typeof Constructor
    const deferredConstructor = React.unstable_useDeferredValue(Constructor);

    // $ExpectType () => string
    const deferredConstructible = React.unstable_useDeferredValue(Constructible);

    return () => {
        startTransition(() => {
            setToggle(toggle => !toggle);
        });

        // The function must be synchronous, even if it can start an asynchronous update
        // it's no different from an useEffect callback in this respect
        // $ExpectError
        startTransition(async () => {});

        // Unlike Effect callbacks, though, there is no possible destructor to return
        // $ExpectError
        startTransition(() => () => {});
    };

    function Constructible() {
        return '';
    }
}

function Dialog() {
    const nameId = React.unstable_useOpaqueIdentifier();

    return (
        <div role="dialog" aria-labelledby={nameId}>
            <h2 id={nameId}></h2>
        </div>
    );
}

function InvalidOpaqueIdentifierUsage() {
    const id = React.unstable_useOpaqueIdentifier();
    // undesired, would warn in React should not type-check
    const stringified1: string = id.toString();
    // undesired, would warn in React should not type-check
    const stringified2: string = id + '';

    return null;
}

function startTransitionTest() {
    function transitionToPage(page: string) {}

    React.unstable_startTransition(() => {
        transitionToPage('/');
    });

    // $ExpectError
    React.unstable_startTransition(async () => {});
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
