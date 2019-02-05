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

    // inline object, to (manually) check if autocomplete works
    React.useReducer(reducer, { age: 42, name: 'The Answer' });

    // make sure this is not going to the |null overload
    // $ExpectType MutableRefObject<boolean>
    const didLayout = React.useRef(false);

    const id = React.useMemo(() => Math.random(), []);
    React.useImperativeHandle(ref, () => ({ id }), [id]);
    // was named like this in the first alpha, renamed before release
    // $ExpectError
    React.useImperativeMethods(ref, () => ({}), [id]);

    React.useLayoutEffect(() => {
        setState(1);
        setState(prevState => prevState - 1);
        didLayout.current = true;
    }, []);
    React.useEffect(() => {
        dispatch({ type: 'getOlder' });
        setState(reducerState.age);
    }, []);

    React.useDebugValue(id, value => value.toFixed());
    React.useDebugValue(id);

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
