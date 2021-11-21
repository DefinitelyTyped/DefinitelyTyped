/// <reference types="../next"/>

import React = require('react');

const { useSyncExternalStore } = React;
// We need these Window interfaces to compile
interface Window {
    location: {
        href: string;
        pathname: string;
    };
    addEventListener(type: string, callback: () => void): void;
    removeEventListener(type: string, callback: () => void): void;
}

const noop = () => {};

const window: Window = { location: { href: '', pathname: '' }, addEventListener: noop, removeEventListener: noop };

const locationSource = React.unstable_createMutableSource(window, () => window.location.href);

const getSnapshot = (window: Window) => window.location.pathname;

const subscribe: React.MutableSourceSubscribe<Window> = (window, callback) => {
    window.addEventListener("popstate", callback);
    return () => window.removeEventListener("popstate", callback);
};

function useExperimentalHooks() {
    const [toggle, setToggle] = React.useState(false);

    const [done, startTransition] = React.useTransition();
    // $ExpectType boolean
    done;

    // $ExpectType boolean
    const deferredToggle = React.useDeferredValue(toggle);

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
    const pathName = React.unstable_useMutableSource(locationSource, getSnapshot, subscribe);

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

function startTransitionTest() {
    function transitionToPage(page: string) {}

    React.startTransition(() => {
        transitionToPage('/');
    });

    // $ExpectError
    React.startTransition(async () => {});
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

function SuspenseTest() {
    // TODO(react18): Should not error.
    // `fallback` is optional in React 18
    // $ExpectError
    <React.Suspense></React.Suspense>;
    // TODO(react18): Should not error.
    // `fallback` is optional in React 18.
    // $ExpectError
    <React.Suspense fallback={undefined}></React.Suspense>;
    // Workaround.
    // TODO(react18): Remove.
    <React.Suspense fallback={undefined!}></React.Suspense>;
}

// keep in sync with `use-sync-external-store-tests.ts`
interface Store<State> {
    getState(): State;
    getServerState(): State;
    subscribe(onStoreChange: () => void): () => void;
}

declare const numberStore: Store<number>;
function useVersion(): number {
    return useSyncExternalStore(numberStore.subscribe, numberStore.getState);
}

function useStoreWrong() {
    useSyncExternalStore(
        // no unsubscribe returned
        // $ExpectError
        () => {
            return null;
        },
        () => 1,
    );

    // `string` is not assignable to `number`
    // $ExpectError
    const version: number = useSyncExternalStore(
        () => () => {},
        () => '1',
    );
}

declare const objectStore: Store<{ version: { major: number; minor: number }; users: string[] }>;
function useUsers(): string[] {
    return useSyncExternalStore(
        objectStore.subscribe,
        () => objectStore.getState().users,
        () => objectStore.getServerState().users,
    );
}
