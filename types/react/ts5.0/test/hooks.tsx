import * as React from "react";

const {useSyncExternalStore} = React;

interface PersonProps {
    name: string;
    age: number;
}
export function Person(props: PersonProps) {
    return <div>
        hello! I'm {props.name} and I'm {props.age} years old!
    </div>;
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
        }
    }));

    return <button onClick={() => { setCount(count + 1); props.onClick(); }}>
        {props.children}
    </button>;
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
    age: 26
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

    return <>
        <Person {...state} />
        <FancyButton onClick={() => dispatch({ type: "getOlder" })}>
            Birthday time!
        </FancyButton>
        <FancyButton onClick={() => dispatch({ type: "resetAge" })}>
            Let's start over.
        </FancyButton>
    </>;
}

interface Context {
    test: true;
}
const context = React.createContext<Context>({ test: true });

function useEveryHook(ref: React.Ref<{ id: number }>|undefined): () => boolean {
    const value: Context = React.useContext(context);
    const [, setState] = React.useState(() => 0);
    // Bonus typescript@next version
    // const [reducerState, dispatch] = React.useReducer(reducer, true as const, arg => arg && initialState);
    // Compile error in typescript@3.0 but not in typescript@3.1.
    // const [reducerState, dispatch] = React.useReducer(reducer, true as true, arg => arg && initialState);
    const [reducerState, dispatch] = React.useReducer(reducer, true as true, (arg: true): AppState => arg && initialState);

    const [, simpleDispatch] = React.useReducer(v => v + 1, 0);

    // inline object, to (manually) check if autocomplete works
    React.useReducer(reducer, { age: 42, name: 'The Answer' });

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
    // $ExpectType MutableRefObject<number>
    React.useRef(0);

    // these are not very useful (can't assign anything else to .current)
    // but it's the only safe way to resolve them
    // $ExpectType MutableRefObject<null>
    React.useRef(null);
    // $ExpectType MutableRefObject<undefined>
    React.useRef(undefined);

    // |null convenience overload
    // it should _not_ be mutable if the generic argument doesn't include null
    // $ExpectType RefObject<number>
    React.useRef<number>(null);
    // but it should be mutable if it does (i.e. is not the convenience overload)
    // $ExpectType MutableRefObject<number | null>
    React.useRef<number | null>(null);

    // |undefined convenience overload
    // with no contextual type or generic argument it should default to undefined only (not {} or unknown!)
    // $ExpectType MutableRefObject<undefined>
    React.useRef();
    // $ExpectType MutableRefObject<number | undefined>
    React.useRef<number>();
    // don't just accept a potential undefined if there is a generic argument
    // @ts-expect-error
    React.useRef<number>(undefined);
    // make sure once again there's no |undefined if the initial value doesn't either
    // $ExpectType MutableRefObject<number>
    React.useRef<number>(1);
    // and also that it is not getting erased if the parameter is wider
    // $ExpectType MutableRefObject<number | undefined>
    React.useRef<number | undefined>(1);

    // should be contextually typed
    const a: React.MutableRefObject<number | undefined> = React.useRef(undefined);
    const b: React.MutableRefObject<number | undefined> = React.useRef();
    const c: React.MutableRefObject<number | null> = React.useRef(null);
    const d: React.RefObject<number> = React.useRef(null);

    const id = React.useMemo(() => Math.random(), []);
    React.useImperativeHandle(ref, () => ({ id }), [id]);
    // was named like this in the first alpha, renamed before release
    // @ts-expect-error
    React.useImperativeMethods(ref, () => ({}), [id]);

    // make sure again this is not going to the |null convenience overload
    // $ExpectType MutableRefObject<boolean>
    const didLayout = React.useRef(false);

    React.useLayoutEffect(() => {
        setState(1);
        setState(prevState => prevState - 1);
        didLayout.current = true;
    }, []);
    React.useEffect(() => {
        dispatch({ type: 'getOlder' });
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

    // allow passing an explicit undefined
    React.useMemo(() => {}, undefined);
    // but don't allow it to be missing
    // @ts-expect-error
    React.useMemo(() => {});

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

    const [numFunc, setNumFunc] =  React.useState<() => number>(() => () => 0);
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
    }
);
const everyHookRef = React.createRef<{ id: number }>();
<UsesEveryHook ref={everyHookRef}/>;

<UsesEveryHook ref={ref => {
    // $ExpectType { id: number; } | null
    ref;
 }}/>;

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

        // The function must be synchronous, even if it can start an asynchronous update
        // it's no different from an useEffect callback in this respect
        // Will not type-check in a real project but accepted in DT tests since experimental.d.ts is part of compilation.
        startTransition(async () => {});

        // Unlike Effect callbacks, though, there is no possible destructor to return
        // @ts-expect-error
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

    // @ts-expect-error
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
