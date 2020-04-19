/// <reference types="../experimental"/>

import React = require('react');

declare global {
    interface Location {
        href: string;
        pathname: string;
    }

    interface Window {
        location: Location;
        addEventListener(event: string, callback: ((...args: any[]) => void)): void;
        removeEventListener(event: string, callback: ((...args: any[]) => void)): void;
    }

    let window: Window;
}

const locationSource = React.createMutableSource(
    window,
    // Although not the typical "version", the href attribute is stable,
    // and will change whenever part of the Location changes,
    // so it's safe to use as a version.
    () => window.location.href
);

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    const [startTransition, done] = React.useTransition({ busyMinDurationMs: 100, busyDelayMs: 200, timeoutMs: 300 });
    // $ExpectType boolean
    done;

    // $ExpectType boolean
    const deferredToggle = React.useDeferredValue(toggle, { timeoutMs: 500 });

    const [func] = React.useState(() => () => 0);

    // $ExpectType () => number
    func;
    // $ExpectType () => number
    const deferredFunc = React.useDeferredValue(func);

    class Constructor {}
    // $ExpectType typeof Constructor
    const deferredConstructor = React.useDeferredValue(Constructor);

    // $ExpectType () => string
    const deferredConstructible = React.useDeferredValue(Constructible);

    // $ExpectType string
    const pathname = React.useMutableSource(
        locationSource,
        source => source.location.pathname,
        (window, callback) => {
            // $ExpectType Window
            window;
            // $ExpectType (version: string) => void
            callback;

            window.addEventListener("popstate", callback);
            return () => window.removeEventListener("popstate", callback);
        }
    );

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
