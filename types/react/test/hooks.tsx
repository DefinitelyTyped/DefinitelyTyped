import * as React from "react";

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
    children?: React.ReactNode;
}
export interface FancyButton {
    fancyClick(): void;
}
export const FancyButton = React.forwardRef((props: FancyButtonProps, ref: React.Ref<FancyButton>) => {
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
    const birthdayRef = React.useRef<FancyButton>(null);

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
    // $ExpectError
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
    // $ExpectError
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
        // $ExpectError
        dispatch();

        simpleDispatch();
        setState(reducerState.age);
    }, []);

    // effects are only allowed to either be actually void or return actually void functions
    React.useEffect(() => () => {});
    // indistinguishable
    React.useEffect(() => () => undefined);
    // $ExpectError
    React.useEffect(() => null);
    // $ExpectError
    React.useEffect(() => Math.random() ? null : undefined);
    // $ExpectError
    React.useEffect(() => () => null);
    // $ExpectError
    React.useEffect(() => () => Math.random() ? null : undefined);
    // $ExpectError
    React.useEffect(() => async () => {});
    // $ExpectError
    React.useEffect(async () => () => {});

    React.useDebugValue(id, value => value.toFixed());
    React.useDebugValue(id);

    // allow passing an explicit undefined
    React.useMemo(() => {}, undefined);
    // but don't allow it to be missing
    // $ExpectError
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
    // $ExpectError
    React.useState<number>(undefined)[0];
    // make sure useState does not widen
    const [toggle, setToggle] = React.useState(false);
    // $ExpectType boolean
    toggle;
    // make sure setState accepts a function
    setToggle(r => !r);

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

// TODO: "implicit any" in typescript@3.0 but not in typescript@3.1
// <UsesEveryHook ref={ref => { ref && console.log(ref.id); }}/>;
