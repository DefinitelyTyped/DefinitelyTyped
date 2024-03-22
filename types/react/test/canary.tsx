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

// New transition events
<div
    onTransitionStart={event => {
        // $ExpectType TransitionEvent<HTMLDivElement>
        event;
    }}
    onTransitionRun={event => {
        // $ExpectType TransitionEvent<HTMLDivElement>
        event;
    }}
    onTransitionCancel={event => {
        // $ExpectType TransitionEvent<HTMLDivElement>
        event;
    }}
    onTransitionEnd={event => {
        // $ExpectType TransitionEvent<HTMLDivElement>
        event;
    }}
/>;

// ReactNode tests
{
    // @ts-expect-error
    const render: React.ReactNode = () => React.createElement("div");
    // @ts-expect-error
    const emptyObject: React.ReactNode = {};
    // @ts-expect-error
    const plainObject: React.ReactNode = { dave: true };
    const promise: React.ReactNode = Promise.resolve("React");
    // @ts-expect-error plain objects are not allowed
    <div>{{ dave: true }}</div>;
    <div>{Promise.resolve("React")}</div>;

    const asyncTests = async function asyncTests() {
        const node: Awaited<React.ReactNode> = await Promise.resolve("React");
    };

    const RenderableContext = React.createContext<React.ReactNode>("HAL");
    const NestedContext = React.createContext(RenderableContext);
    // @ts-expect-error TODO Is supported in Canary release channel
    let node: React.ReactNode = RenderableContext;
    // @ts-expect-error TODO context values are recursively unwrapped so this should be allowed by types.
    node = NestedContext;

    const NotRenderableContext = React.createContext(() => {});
    // @ts-expect-error
    node = NotRenderableContext;

    node = BigInt(10);
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
