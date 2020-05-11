/// <reference types="../experimental"/>

import React = require('react');

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    const [startTransition, done] = React.unstable_useTransition({ busyMinDurationMs: 100, busyDelayMs: 200, timeoutMs: 300 });
    // $ExpectType boolean
    done;

    // $ExpectType boolean
    const deferredToggle = React.unstable_useDeferredValue(toggle, { timeoutMs: 500 });

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
