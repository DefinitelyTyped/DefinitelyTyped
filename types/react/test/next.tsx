/// <reference types="../next"/>

import React = require('react');

const { useSyncExternalStore } = React;

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


    React.useInsertionEffect(() => {});
    React.useInsertionEffect(() => {}, []);
    React.useInsertionEffect(() => {
        return () => {};
    }, [toggle]);

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
    const id = React.useId();
    const nameId = `${id}-name`;
    const descriptionId = `${id}-description`;

    return (
        <div role="dialog" aria-labelledby={nameId} aria-describedby={descriptionId}>
            <h2 id={nameId}>Name</h2>
            <p id={descriptionId}>Description</p>
        </div>
    );
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
