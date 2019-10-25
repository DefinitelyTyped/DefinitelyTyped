/// <reference types="../experimental"/>

import React = require('react');

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    const [startTransition, done] = React.useTransition({ busyMinDurationMs: 100, busyDelayMs: 200, timeoutMs: 300 });
    // $ExpectType boolean
    done;

    // $ExpectType boolean
    const deferredToggle = React.useDeferredValue(toggle, { timeoutMs: 500 });

    const [func] = React.useState(() => () => 0);

    // if the overload is working correctly, it should produce the function's return type instead of the function
    // this is very not nice, but it's the only way I've found to make the code "obviously wrong"
    // without access to negation types

    // $ExpectType () => number
    func;
    // $ExpectType number
    const deferredFunc = React.useDeferredValue(func);

    // $ExpectType never
    const willCrash = React.useDeferredValue(class {});

    // $ExpectType string
    const noCrashButInvalidToo = React.useDeferredValue(Constructible);

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
