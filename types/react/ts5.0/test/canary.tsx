/// <reference types="../canary"/>

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

function useCacheTest() {
    const useCacheRefresh = React.unstable_useCacheRefresh;

    const refresh = useCacheRefresh();

    function handleRefresh() {
        // @ts-expect-error -- experimental only
        refresh(() => "refresh", "initial");
        // @ts-expect-error -- experimental only
        refresh(() => "refresh");
        refresh();

        // @ts-expect-error -- experimental only
        refresh(() => "refresh", 0);

        // @ts-expect-error -- experimental only
        refresh(() => "refresh");
    }
}

function cacheSignalTest() {
    const cacheSignal = React.cacheSignal;

    const signal = cacheSignal();
    if (signal !== null) {
        // $ExpectType CacheSignal
        signal;
        // @ts-expect-error -- implemented by renderer
        signal.aborted;
    }
}

// @enableActivity
function activityTest() {
    const Activity = React.Activity;

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
    <Activity children="peekaboo" name="/" />;
}

function useEffectEventTest() {
    // Implicit any
    // @ts-expect-error
    const anyEvent = React.useEffectEvent(value => {
        // $ExpectType any
        return value;
    });
    // $ExpectType any
    anyEvent({});
    // $ExpectType (value: string) => number
    const typedEvent = React.useEffectEvent((value: string) => {
        return Number(value);
    });
    // $ExpectType number
    typedEvent("1");
    // Argument of type '{}' is not assignable to parameter of type 'string'.
    // @ts-expect-error
    typedEvent({});

    function useContextuallyTypedEvent(fn: (event: Event) => string) {}
    useContextuallyTypedEvent(
        React.useEffectEvent(event => {
            // $ExpectType Event
            event;
            return String(event);
        }),
    );
}
