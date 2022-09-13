import {
  forwardRef,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  createRef,
  createContext,
  RaxNode,
  useImperativeHandle,
  Ref,
  useReducer,
  useLayoutEffect,
  ComponentRef,
  useMemo,
 } from "rax";

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
    children?: RaxNode | undefined;
}
export interface FancyButtonMethod {
    fancyClick(): void;
}
export const FancyButton = forwardRef((props: FancyButtonProps, ref: Ref<FancyButtonMethod>) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
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
    const [state, dispatch] = useReducer(reducer, initialState);
    const birthdayRef = useRef<ComponentRef<typeof FancyButton>>(null);

    useLayoutEffect(() => {
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
const context = createContext<Context>({ test: true });

function useEveryHook(ref: Ref<{ id: number }>|undefined): () => boolean {
    const value: Context = useContext(context);
    const [, setState] = useState(() => 0);

    // inline object, to (manually) check if autocomplete works
    useReducer(reducer, { age: 42, name: 'The Answer' });

    // test useRef and its convenience overloads
    // $ExpectType MutableRefObject<number>
    useRef(0);

    // these are not very useful (can't assign anything else to .current)
    // but it's the only safe way to resolve them
    // $ExpectType MutableRefObject<null>
    useRef(null);
    // $ExpectType MutableRefObject<undefined>
    useRef(undefined);

    // |null convenience overload
    // it should _not_ be mutable if the generic argument doesn't include null
    // $ExpectType RefObject<number>
    useRef<number>(null);
    // but it should be mutable if it does (i.e. is not the convenience overload)
    // $ExpectType MutableRefObject<number | null>
    useRef<number | null>(null);

    // |undefined convenience overload
    // with no contextual type or generic argument it should default to undefined only (not {} or unknown!)
    // $ExpectType MutableRefObject<undefined>
    useRef();
    // $ExpectType MutableRefObject<number | undefined>
    useRef<number>();
    // don't just accept a potential undefined if there is a generic argument
    // @ts-expect-error
    useRef<number>(undefined);
    // make sure once again there's no |undefined if the initial value doesn't either
    // $ExpectType MutableRefObject<number>
    useRef<number>(1);
    // and also that it is not getting erased if the parameter is wider
    // $ExpectType MutableRefObject<number | undefined>
    useRef<number | undefined>(1);

    // should be contextually typed
    const a: MutableRefObject<number | undefined> = useRef(undefined);
    const b: MutableRefObject<number | undefined> = useRef();
    const c: MutableRefObject<number | null> = useRef(null);
    const d: RefObject<number> = useRef(null);

    const id = useMemo(() => Math.random(), []);
    useImperativeHandle(ref, () => ({ id }), [id]);
    // was named like this in the first alpha, renamed before release

    // make sure again this is not going to the |null convenience overload
    // $ExpectType MutableRefObject<boolean>
    const didLayout = useRef(false);

    useLayoutEffect(() => {
        setState(1);
        setState(prevState => prevState - 1);
        didLayout.current = true;
    }, []);

    // effects are only allowed to either be actually void or return actually void functions
    useEffect(() => () => {});
    // indistinguishable
    useEffect(() => () => undefined);
    // @ts-expect-error
    useEffect(() => null);
    // @ts-expect-error
    useEffect(() => Math.random() ? null : undefined);
    // @ts-expect-error
    useEffect(() => () => null);
    // @ts-expect-error
    useEffect(() => () => Math.random() ? null : undefined);
    // @ts-expect-error
    useEffect(() => async () => {});
    // @ts-expect-error
    useEffect(async () => () => {});

    // allow passing an explicit undefined
    useMemo(() => {}, undefined);
    // but don't allow it to be missing
    // @ts-expect-error
    useMemo(() => {});

    // useState convenience overload
    // default to undefined only (not that useful, but type-safe -- no {} or unknown!)
    // $ExpectType undefined
    useState()[0];
    // $ExpectType number | undefined
    useState<number>()[0];
    // default overload
    // $ExpectType number
    useState(0)[0];
    // $ExpectType undefined
    useState(undefined)[0];
    // make sure the generic argument does reject actual potentially undefined inputs
    // @ts-expect-error
    useState<number>(undefined)[0];
    // make sure useState does not widen
    const [toggle, setToggle] = useState(false);
    // $ExpectType boolean
    toggle;
    // make sure setState accepts a function
    setToggle(r => !r);

    // useReducer convenience overload

    return useCallback(() => didLayout.current, []);
}

const UsesEveryHook = forwardRef(
    function UsesEveryHook(props: {}, ref?: Ref<{ id: number }>) {
        // $ExpectType boolean
        useEveryHook(ref)();

        return null;
    }
);
const everyHookRef = createRef<{ id: number }>();
<UsesEveryHook ref={everyHookRef}/>;

<UsesEveryHook ref={ref => {
    // $ExpectType { id: number; } | null
    ref;
 }}/>;
