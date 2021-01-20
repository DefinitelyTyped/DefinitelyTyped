import {
    DefaultValue,
    RecoilRoot,
    RecoilValueReadOnly,
    atom,
    selector,
    useRecoilValue,
    useRecoilValueLoadable,
    useRecoilState,
    useRecoilStateLoadable,
    useSetRecoilState,
    useResetRecoilState,
    useRecoilCallback,
    isRecoilValue,
    RecoilState,
    atomFamily,
    selectorFamily,
    constSelector,
    errorSelector,
    readOnlySelector,
    noWait,
    waitForNone,
    waitForAny,
    waitForAll,
} from 'recoil';
// import { atomFamily } from 'recoil/utils';

// DefaultValue
new DefaultValue();

// atom
const myAtom = atom({
    key: 'asds',
    default: 5,
});

// selector
const mySelector1 = selector({
    key: 'asdfasfds',
    get: () => 5,
});

const mySelector2 = selector({
    key: 'asds',
    get: () => '',
});

// $ExpectError
selector({
    key: 'asdfasfds',
    get: () => '',
}) as RecoilValueReadOnly<boolean>;

const readOnlySelectorSel = selector({
    key: 'asdfasf',
    get: ({ get }) => {
        get(myAtom) + 10;
        get(mySelector1);
        get(5); // $ExpectError
    },
});

const writeableSelector = selector({
    key: 'asdfsadfs',
    get: ({ get }) => {
        get(mySelector1) + 10;
    },
    set: ({ get, set, reset }) => {
        get(myAtom);
        set(myAtom, 5);
        reset(myAtom);

        set(readOnlySelectorSel, 2); // $ExpectError
        reset(readOnlySelectorSel); // $ExpectError
    },
});

// RecoilRoot
RecoilRoot({});
RecoilRoot({
    initializeState: ({ set, setUnvalidatedAtomValues }) => {
        set(myAtom, 5);
        setUnvalidatedAtomValues(new Map());

        set(readOnlySelectorSel, 2); // $ExpectError
        setUnvalidatedAtomValues({}); // $ExpectError
    },
});

// Hooks
const roAtom: RecoilValueReadOnly<string> = {} as any;
const waAtom: RecoilState<string> = {} as any;
const nsAtom: RecoilState<number | string> = {} as any; // number or string

useRecoilValue(roAtom);
useRecoilValue(waAtom);

useRecoilState(roAtom); // $ExpectError
useRecoilState(waAtom);

useRecoilState<number>(waAtom); // $ExpectError
useRecoilState<number | string>(waAtom); // $ExpectError
useRecoilValue<number>(waAtom); // $ExpectError
useRecoilValue<number | string>(waAtom);
useRecoilValue<number>(nsAtom); // $ExpectError

useRecoilValue(myAtom);
useRecoilValue(mySelector1);
useRecoilValue(readOnlySelectorSel);
useRecoilValue(writeableSelector);
useRecoilValue({}); // $ExpectError

useRecoilValueLoadable(myAtom);
useRecoilValueLoadable(readOnlySelectorSel);
useRecoilValueLoadable(writeableSelector);
useRecoilValueLoadable({}); // $ExpectError

useRecoilState(myAtom);
useRecoilState(writeableSelector);
useRecoilState(readOnlySelectorSel); // $ExpectError
useRecoilState({}); // $ExpectError

useRecoilStateLoadable(myAtom);
useRecoilStateLoadable(writeableSelector);
useRecoilStateLoadable(readOnlySelectorSel); // $ExpectError
useRecoilStateLoadable({}); // $ExpectError

useSetRecoilState(myAtom);
useSetRecoilState(writeableSelector);
useSetRecoilState(readOnlySelectorSel); // $ExpectError
useSetRecoilState({}); // $ExpectError

useResetRecoilState(myAtom);
useResetRecoilState(writeableSelector);
useResetRecoilState(readOnlySelectorSel); // $ExpectError
useResetRecoilState({}); // $ExpectError

useRecoilCallback(async ({ getPromise, getLoadable, set, reset }) => {
    const val: number = await getPromise(mySelector1);
    const loadable = getLoadable(mySelector1);

    loadable.contents;
    loadable.state;

    set(myAtom, 5);
    reset(myAtom);
});

// Other
isRecoilValue(4);
isRecoilValue(myAtom);
isRecoilValue(null);
isRecoilValue(mySelector1);

/**
 * ================ UTILS ================
 */

/**
 * atomFamily() tests
 */

{
    const myAtomFam = atomFamily({
        key: 'myAtomFam1',
        default: (param: number) => param,
    });

    const atm = myAtomFam(2); // $ExpectType RecoilState<number>
    useRecoilValue(atm); // $ExpectType number

    myAtomFam(''); // $ExpectError
}

/**
 * selectorFamily() tests
 */
{
    const mySelectorFam = selectorFamily({
        key: 'myAtomFam1',
        get: (param: number) => ({ get }) => {
            get(mySelector1); // $ExpectType number

            return param;
        },
    });

    const atm = mySelectorFam(2); // $ExpectType RecoilValueReadOnly<number>
    useRecoilValue(atm); // $ExpectType number

    mySelectorFam(''); // $ExpectError

    useRecoilState(mySelectorFam(3)); // $ExpectError

    const mySelectorFamWritable = selectorFamily({
        key: 'myAtomFam1',
        get: (param: number) => ({ get }) => {
            get(mySelector1); // $ExpectType number

            return param;
        },
        set: (param: number) => () => {},
    });

    useRecoilState(mySelectorFamWritable(3))[0]; // $ExpectType number
}

/**
 * constSelector() tests
 */
{
    const mySel = constSelector(1);
    const mySel2 = constSelector('hello');
    const mySel3 = constSelector([1, 2]);
    const mySel4 = constSelector({ a: 1, b: '2' });

    useRecoilValue(mySel); // $ExpectType 1
    useRecoilValue(mySel2); // $ExpectType "hello"
    useRecoilValue(mySel3); // $ExpectType number[]
    useRecoilValue(mySel4); // $ExpectType { a: number; b: string; }

    constSelector(new Map()); // $ExpectError
    constSelector(new Set()); // $ExpectError
}

/**
 * errorSelector() tests
 */
{
    const mySel = errorSelector('Error msg');

    useRecoilValue(mySel); // $ExpectType never

    errorSelector(2); // $ExpectError
    errorSelector({}); // $ExpectError
}

/**
 * readOnlySelector() tests
 */
{
    const myWritableSel: RecoilState<number> = {} as any;

    readOnlySelector(myWritableSel); // $ExpectType RecoilValueReadOnly<number>
}

/**
 * noWait() tests
 */
{
    const numSel: RecoilValueReadOnly<number> = {} as any;
    const mySel = noWait(numSel);

    useRecoilValue(mySel); // $ExpectType Loadable<number>
}

/**
 * waitForNone() tests
 */
{
    const numSel: RecoilValueReadOnly<number> = {} as any;
    const strSel: RecoilValueReadOnly<string> = {} as any;

    const mySel = waitForNone([numSel, strSel]);
    const mySel2 = waitForNone({ a: numSel, b: strSel });

    useRecoilValue(mySel)[0]; // $ExpectType Loadable<number>
    useRecoilValue(mySel)[1]; // $ExpectType Loadable<string>

    useRecoilValue(mySel2).a; // $ExpectType Loadable<number>
    useRecoilValue(mySel2).b; // $ExpectType Loadable<string>
}

/**
 * waitForAny() tests
 */
{
    const numSel: RecoilValueReadOnly<number> = {} as any;
    const strSel: RecoilValueReadOnly<string> = {} as any;

    const mySel = waitForAny([numSel, strSel]);
    const mySel2 = waitForAny({ a: numSel, b: strSel });

    useRecoilValue(mySel)[0]; // $ExpectType Loadable<number>
    useRecoilValue(mySel)[1]; // $ExpectType Loadable<string>

    useRecoilValue(mySel2).a; // $ExpectType Loadable<number>
    useRecoilValue(mySel2).b; // $ExpectType Loadable<string>
}

/**
 * waitForAll() tests
 */
{
    const numSel: RecoilValueReadOnly<number> = {} as any;
    const strSel: RecoilValueReadOnly<string> = {} as any;

    const mySel = waitForAll([numSel, strSel]);
    const mySel2 = waitForAll({ a: numSel, b: strSel });

    useRecoilValue(mySel)[0]; // $ExpectType Loadable<number>
    useRecoilValue(mySel)[1]; // $ExpectType Loadable<string>

    useRecoilValue(mySel2).a; // $ExpectType Loadable<number>
    useRecoilValue(mySel2).b; // $ExpectType Loadable<string>
}
