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
