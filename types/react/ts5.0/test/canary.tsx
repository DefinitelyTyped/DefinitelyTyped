/// <reference types="../canary"/>

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

const contextUsers = React.createContext(["HAL"]);
const promisedUsers = Promise.resolve(["Dave"]);

function useUse() {
    // @ts-expect-error Missing value
    React.use();

    // $ExpectType string[]
    const users = React.use(promisedUsers);
    // @ts-expect-error incompatible type. Mainly to potentially inspect TypeScript error message
    React.use({});

    // $ExpectType string[]
    const contextValue = React.use(contextUsers);
}

function serverContextTest() {
    const ServerContext = React.createServerContext<string>("ServerContext", "default");

    function ServerContextUser() {
        const context = React.useContext(ServerContext);
        return <React.Fragment>{context}</React.Fragment>;
    }
    // @ts-expect-error Consumer pattern is not supported on server context
    ServerContext.Consumer;

    function ServerContextProivder() {
        return (
            <ServerContext.Provider value="provided">
                <ServerContextUser />
            </ServerContext.Provider>
        );
    }

    const ClientContext = React.createContext<string>("default");
    function ClientContextUser() {
        const context = React.useContext(ClientContext);
        return <React.Fragment>{context}</React.Fragment>;
    }

    // plain objects work
    React.createServerContext("PlainObjectContext", { foo: 1 });
    // readonly arrays work
    React.createServerContext("ReadonlyArrayContext", ["foo", "bar"] as const);
    // nested readonly arrays work
    React.createServerContext("ReadonlyArrayContext", ["foo", ["bar"]] as const);
    // @ts-expect-error Incompatible with JSON stringify+parse
    React.createServerContext("DateContext", new Date());
    // @ts-expect-error Incompatible with JSON stringify+parse
    React.createServerContext("SetContext", new Set());
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

function useAsyncAction() {
    const [isPending, startTransition] = React.useTransition();

    function handleClick() {
        // $ExpectType void
        startTransition(async () => {});
        React.startTransition(async () => {});
    }
}

function formActionsTest() {
    <form
        action={formData => {
            // $ExpectType FormData
            formData;
        }}
    >
        <input type="text" name="title" defaultValue="Hello" />
        <input
            type="submit"
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
            value="Save"
        />
        <button
            formAction={formData => {
                // $ExpectType FormData
                formData;
            }}
        >
            Delete
        </button>
    </form>;

    <form
        action={async (formData) => {
            // $ExpectType FormData
            formData;
        }}
    />;

    <form
        // @ts-expect-error -- Type 'Promise<number>' is not assignable to type 'Promise<void>'
        action={async () => {
            return 1;
        }}
    />;
}

const useOptimistic = React.useOptimistic;
function Optimistic() {
    const savedCartSize = 0;
    const [optimisticCartSize, addToOptimisticCart] = useOptimistic(savedCartSize, (prevSize, newItem) => {
        // This is the default type for un-inferrable generics in TypeScript.
        // To have a concrete type either type the second parameter in the reducer (see addToOptimisticCartTyped)
        // or declare the type of the generic (see addToOptimisticCartTyped2)
        // $ExpectType unknown
        newItem;
        console.log("Increment optimistic cart size for " + newItem);
        return prevSize + 1;
    });
    // $ExpectType number
    optimisticCartSize;

    const [, addToOptimisticCartTyped] = useOptimistic(savedCartSize, (prevSize, newItem: string) => {
        // $ExpectType string
        newItem;
        console.log("Increment optimistic cart size for " + newItem);
        return prevSize + 1;
    });
    const [, addToOptimisticCartTyped2] = useOptimistic<number, string>(savedCartSize, (prevSize, newItem) => {
        // $ExpectType string
        newItem;
        console.log("Increment optimistic cart size for " + newItem);
        return prevSize + 1;
    });

    const addItemToCart = (item: unknown) => {
        addToOptimisticCart(item);
        addToOptimisticCartTyped(
            // @ts-expect-error unknown is not assignable to string
            item,
        );
        addToOptimisticCartTyped(String(item));
        addToOptimisticCartTyped2(
            // @ts-expect-error unknown is not assignable to string
            item,
        );
        addToOptimisticCartTyped2(String(item));
    };

    const [state, setStateDefaultAction] = useOptimistic(1);
    const handleClick = () => {
        setStateDefaultAction(2);
        setStateDefaultAction(() => 3);
        setStateDefaultAction(n => n + 1);
        // @ts-expect-error string is not assignable to number
        setStateDefaultAction("4");
    };
}

// ref cleanup
const ref: React.RefCallback<HTMLDivElement> = current => {
    // Should be non-nullable
    // $ExpectType HTMLDivElement | null
    current;
    return function refCleanup() {
    };
};
<div
    ref={current => {
        // Should be non-nullable
        // $ExpectType HTMLDivElement | null
        current;
        return function refCleanup() {
        };
    }}
/>;
<div
    // @ts-expect-error ref cleanup does not accept arguments
    ref={current => {
        // @ts-expect-error
        return function refCleanup(implicitAny) {
        };
    }}
/>;
<div
    // @ts-expect-error ref cleanup does not accept arguments
    ref={current => {
        return function refCleanup(neverPassed: string) {
        };
    }}
/>;

const useActionState = React.useActionState;
// Keep in sync with ReactDOM.useFormState tests
function formTest() {
    function Page1() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
            // $ExpectType boolean
            isPending,
        ] = useActionState(action, 1);

        function actionExpectingPromiseState(state: Promise<number>) {
            return state.then((s) => s + 1);
        }

        useActionState(
            // @ts-expect-error
            actionExpectingPromiseState,
            Promise.resolve(1),
        );
        useActionState(
            action,
            // @ts-expect-error
            Promise.resolve(1),
        );
        // $ExpectType number
        useActionState<Promise<number>>(action, 1)[0];

        useActionState(
            async (
                prevState: // only needed in TypeScript 4.9
                    // 5.0 infers `number` whereas 4.9 infers `0`
                    number,
            ) => prevState + 1,
            0,
        )[0];
        // $ExpectType number
        useActionState(
            async (prevState) => prevState + 1,
            // @ts-expect-error
            Promise.resolve(0),
        )[0];

        const [
            state2,
            action2,
            // $ExpectType boolean
            isPending2,
        ] = useActionState(
            async (state: React.ReactNode, payload: FormData): Promise<React.ReactNode> => {
                return state;
            },
            (
                <button>
                    New Project
                </button>
            ),
        );

        return (
            <button
                onClick={() => {
                    dispatch();
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page2() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useActionState(action, 1, "/permalink");
        return (
            <form action={dispatch}>
                <span>Count: {state}</span>
                <input type="text" name="incrementAmount" defaultValue="5" />
            </form>
        );
    }

    function Page3() {
        function actionSync(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useActionState(actionSync, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page4() {
        async function action(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useActionState(action, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
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

// New <link> and <style> props
<link href="https://foo.bar" precedence="medium" rel="canonical" />;
<style href="unique-style-hash" precedence="anything">{` p { color: red; } `}</style>;
