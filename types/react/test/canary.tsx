/// <reference types="../canary"/>

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

function cacheTest() {
    const getLength = React.cache((a: string) => a.length);
    const fooLength: number = getLength("foo");
    getLength(
        // @ts-expect-error -- number not assignable to string
        133,
    );

    React.cache(
        // @ts-expect-error implicit any
        a => a,
    );
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

function PopoverAPI() {
    return (
        <>
            <div
                id="popover-target"
                popover=""
                onBeforeToggle={event => {
                    // $ExpectType 'open' | 'closed'
                    event.newState;
                    // $ExpectType 'open' | 'closed'
                    event.oldState;
                }}
                onToggle={event => {
                    // $ExpectType 'open' | 'closed'
                    event.newState;
                    // $ExpectType 'open' | 'closed'
                    event.oldState;
                }}
            >
            </div>
            <div popover="auto" />
            <div popover="manual" />
            <div
                // @ts-expect-error accidental boolean
                popover
            />
            <button popoverTarget="popover-target">Toggle</button>
            <button popoverTarget="popover-target" popoverTargetAction="toggle">Toggle</button>
            <button popoverTarget="popover-target" popoverTargetAction="show">Show</button>
            <button popoverTarget="popover-target" popoverTargetAction="hide">Hide</button>
            <button
                popoverTarget="popover-target"
                // @ts-expect-error
                popoverTargetAction="bad"
            >
                Hide
            </button>
        </>
    );
}
