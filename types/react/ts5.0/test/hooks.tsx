import * as React from "react";

const { useSyncExternalStore } = React;

interface PersonProps {
    name: string;
    age: number;
}
export function Person(props: PersonProps) {
    return (
        <div>
            hello! I'm {props.name} and I'm {props.age} years old!
        </div>
    );
}

export interface FancyButtonProps {
    onClick: () => void;
    children?: React.ReactNode | undefined;
}
export interface FancyButtonMethod {
    fancyClick(): void;
}
export const FancyButton = React.forwardRef((props: FancyButtonProps, ref: React.Ref<FancyButtonMethod>) => {
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const [count, setCount] = React.useState(0);

    React.useImperativeHandle(ref, () => ({
        fancyClick() {
            buttonRef.current!; // $ExpectType HTMLButtonElement
        },
        getClickCount() {
            return count;
        },
    }));

    return (
        <button
            onClick={() => {
                setCount(count + 1);
                props.onClick();
            }}
        >
            {props.children}
        </button>
    );
});

interface AppState {
    name: string;
    age: number;
}

type AppActions =
    | { type: "getOlder" }
    | { type: "resetAge" };

function reducer(s: AppState, action: AppActions): AppState {
    switch (action.type) {
        case "getOlder":
            return { ...s, age: s.age + 1 };
        case "resetAge":
            return { ...s, age: 0 };
    }
}

const initialState = {
    name: "Daniel",
    age: 26,
};

export function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const birthdayRef = React.useRef<React.ComponentRef<typeof FancyButton>>(null);

    React.useLayoutEffect(() => {
        if (birthdayRef.current !== null) {
            birthdayRef.current.fancyClick();
        } else {
            // this looks redundant but it ensures the type actually has "null" in it instead of "never"
            // $ExpectType null
            birthdayRef.current;
        }
    });

    return (
        <>
            <Person {...state} />
            <FancyButton onClick={() => dispatch({ type: "getOlder" })}>
                Birthday time!
            </FancyButton>
            <FancyButton onClick={() => dispatch({ type: "resetAge" })}>
                Let's start over.
            </FancyButton>
        </>
    );
}

interface Context {
    test: true;
}
const context = React.createContext<Context>({ test: true });

function useEveryHook(ref: React.Ref<{ id: number }> | undefined): () => boolean {
    const value: Context = React.useContext(context);
    const [, setState] = React.useState(() => 0);
    // Bonus typescript@next version
    // const [reducerState, dispatch] = React.useReducer(reducer, true as const, arg => arg && initialState);
    // Compile error in typescript@3.0 but not in typescript@3.1.
    // const [reducerState, dispatch] = React.useReducer(reducer, true as true, arg => arg && initialState);
    const [reducerState, dispatch] = React.useReducer(
        reducer,
        true as true,
        (arg: true): AppState => arg && initialState,
    );

    const [, simpleDispatch] = React.useReducer(v => v + 1, 0);

    // Infer reducer state type
    React.useReducer(
        v => {
            // $ExpectType { name: string; }
            const s = v;
            return s;
        },
        { name: "asdf" },
    );

    // @ts-expect-error reducer should have at most 2 arguments
    React.useReducer((v, a: any, b: any) => v, 0);

    // useReducer should handle optional action
    const reducerWithOptionalAction = (state: boolean, next?: boolean) => {
        return next !== undefined ? next : !state;
    };
    const useToggle = (initialState: boolean) => React.useReducer(reducerWithOptionalAction, initialState);

    const [isTooltipVisible, toggleTooltipVisibility] = useToggle(false);
    toggleTooltipVisibility();
    toggleTooltipVisibility(false);

    // inline object, to (manually) check if autocomplete works
    React.useReducer(reducer, { age: 42, name: "The Answer" });

    // Missing deps are most likely an error and would also trigger react-hooks/exhaustive-deps
    // @ts-expect-error
    React.useCallback(() => {});

    React.useCallback(
        () => {},
        // @ts-expect-error -- Go beyond what ESLint can do and also "missing deps" at the type-level
        undefined,
    );

    // Implicit any
    // @ts-expect-error
    const anyCallback = React.useCallback(value => {
        // $ExpectType any
        return value;
    }, []);
    // $ExpectType any
    anyCallback({});
    // $ExpectType (value: string) => number
    const typedCallback = React.useCallback((value: string) => {
        return Number(value);
    }, []);
    // $ExpectType number
    typedCallback("1");
    // Argument of type '{}' is not assignable to parameter of type 'string'.
    // @ts-expect-error
    typedCallback({});

    function useContextuallyTypedCallback(fn: (event: Event) => string) {}
    useContextuallyTypedCallback(React.useCallback(event => {
        // $ExpectType Event
        event;
        return String(event);
    }, []));

    // test useRef and its convenience overloads
    // $ExpectType RefObject<number>
    React.useRef(0);

    // these are not very useful (can't assign anything else to .current)
    // but it's the only safe way to resolve them
    // $ExpectType RefObject<null>
    React.useRef(null);
    // $ExpectType RefObject<undefined>
    React.useRef(undefined);

    // |null convenience overload
    // $ExpectType RefObject<number | null>
    React.useRef<number>(null);
    // $ExpectType RefObject<number | null>
    React.useRef<number | null>(null);

    // |undefined convenience overload
    // with no contextual type or generic argument it should default to undefined only (not {} or unknown!)
    // $ExpectType RefObject<undefined>
    React.useRef(undefined);
    // $ExpectType RefObject<number | undefined>
    React.useRef<number>(undefined);
    // make sure once again there's no |undefined if the initial value doesn't either
    // $ExpectType RefObject<number>
    React.useRef<number>(1);
    // and also that it is not getting erased if the parameter is wider
    // $ExpectType RefObject<number | undefined>
    React.useRef<number | undefined>(1);

    // should be contextually typed
    const a: React.RefObject<number | undefined | null> = React.useRef(undefined);
    const b: React.RefObject<number | undefined | null> = React.useRef(null);
    const c: React.RefObject<number | null> = React.useRef(null);

    const id = React.useMemo(() => Math.random(), []);
    React.useImperativeHandle(ref, () => ({ id }), [id]);
    // was named like this in the first alpha, renamed before release
    // @ts-expect-error
    React.useImperativeMethods(ref, () => ({}), [id]);

    // make sure again this is not going to the |null convenience overload
    // $ExpectType RefObject<boolean>
    const didLayout = React.useRef(false);

    React.useLayoutEffect(() => {
        setState(1);
        setState(prevState => prevState - 1);
        didLayout.current = true;
    }, []);
    React.useEffect(() => {
        dispatch({ type: "getOlder" });
        // @ts-expect-error
        dispatch();

        simpleDispatch();
        setState(reducerState.age);
    }, []);

    // effects are only allowed to either be actually void or return actually void functions
    React.useEffect(() => () => {});
    // indistinguishable
    React.useEffect(() => () => undefined);
    // @ts-expect-error
    React.useEffect(() => null);
    // @ts-expect-error
    React.useEffect(() => Math.random() ? null : undefined);
    // @ts-expect-error
    React.useEffect(() => () => null);
    // @ts-expect-error
    React.useEffect(() => () => Math.random() ? null : undefined);
    // @ts-expect-error
    React.useEffect(() => async () => {});
    // @ts-expect-error
    React.useEffect(async () => () => {});

    React.useDebugValue(id, value => value.toFixed());
    React.useDebugValue(id);

    // Missing deps are most likely an error and would also trigger react-hooks/exhaustive-deps
    // @ts-expect-error
    React.useMemo(() => {});

    React.useMemo(
        () => {},
        // @ts-expect-error -- Go beyond what ESLint can do and also "missing deps" at the type-level
        undefined,
    );

    // useState convenience overload
    // default to undefined only (not that useful, but type-safe -- no {} or unknown!)
    // $ExpectType undefined
    React.useState()[0];
    // $ExpectType number | undefined
    React.useState<number>()[0];
    // default overload
    // $ExpectType number
    React.useState(0)[0];
    // $ExpectType undefined
    React.useState(undefined)[0];
    // make sure the generic argument does reject actual potentially undefined inputs
    // @ts-expect-error
    React.useState<number>(undefined)[0];
    // make sure useState does not widen
    const [toggle, setToggle] = React.useState(false);
    // $ExpectType boolean
    toggle;
    // make sure setState accepts a function
    setToggle(r => !r);

    // Undesired
    // Should not type-check since `number` will be `number` at runtime but `() => number` in the type-checker
    const [number, setNumber] = React.useState<() => number>(() => 0);
    // Should be `number`
    // $EpectType () => number
    number;

    const [numFunc, setNumFunc] = React.useState<() => number>(() => () => 0);
    // $ExpectType () => number
    numFunc;
    // Undesired
    // Should not typecheck since that would update the state to `number` when the type-checker would still consider the state to be `() => number`
    setNumFunc(() => 42);
    // this is the correct way to set a function in state
    setNumFunc(() => () => 42);

    // when using a function without a generic, infer the return type
    // $ExpectType number
    React.useState(() => 0)[0];
    // When storing a function it must be wrapped
    // $ExpectType () => number
    React.useState<() => number>(() => () => 0)[0];
    // When storing a function, even without a generic, it must be wrapped
    // $ExpectType () => number
    React.useState(() => () => 0)[0];

    // Undesired
    // Classes should only be accepted as a return value of state initializer/updater functions not direct input.
    // React would call the constructor causing a TypeError.
    React.useState(class {});
    // This is the correct way to store classes in state.
    // $ExpectType typeof A
    React.useState(() => class A {})[0];

    const [_, setClass] = React.useState(() => class {});
    // Undesired
    // Classes should only be accepted as a return value of state initializer/updater functions not direct input.
    // React would call the constructor causing a TypeError,
    setClass(class {});
    setClass(() => class {});

    // useReducer convenience overload

    return React.useCallback(() => didLayout.current, []);
}

const UsesEveryHook = React.forwardRef(
    function UsesEveryHook(props: {}, ref?: React.Ref<{ id: number }>) {
        // $ExpectType boolean
        useEveryHook(ref)();

        return null;
    },
);
const everyHookRef = React.createRef<{ id: number }>();
<UsesEveryHook ref={everyHookRef} />;

<UsesEveryHook
    ref={ref => {
        // $ExpectType { id: number; } | null
        ref;
    }}
/>;

function useConcurrentHooks() {
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

        startTransition(async () => {});

        // Unlike Effect callbacks, though, there is no possible destructor to return
        // @ts-expect-error
        startTransition(() => () => {});
    };

    function Constructible() {
        return "";
    }
}

function startTransitionTest() {
    function transitionToPage(page: string) {}

    React.startTransition(() => {
        transitionToPage("/");
    });

    React.startTransition(async () => {});
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
        // @ts-expect-error
        () => {
            return null;
        },
        () => 1,
    );

    // `string` is not assignable to `number`
    // @ts-expect-error
    const version: number = useSyncExternalStore(
        () => () => {},
        () => "1",
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

function useAsyncAction() {
    const [isPending, startTransition] = React.useTransition();

    function handleClick() {
        // $ExpectType void
        startTransition(async () => {});
        React.startTransition(async () => {});
    }
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
