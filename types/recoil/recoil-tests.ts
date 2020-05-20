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

// $ExpectError
selector({
    key: 'asdfasfds',
    get: () => '',
}) as RecoilValueReadOnly<boolean>;

const readOnlySelector = selector({
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

        set(readOnlySelector, 2); // $ExpectError
        reset(readOnlySelector); // $ExpectError
    },
});

// RecoilRoot
RecoilRoot({});
RecoilRoot({
    initializeState: ({ set, setUnvalidatedAtomValues }) => {
        set(myAtom, 5);
        setUnvalidatedAtomValues(new Map());

        set(readOnlySelector, 2); // $ExpectError
        setUnvalidatedAtomValues({}); // $ExpectError
    },
});

// Hooks
useRecoilValue(myAtom);
useRecoilValue(mySelector1);
useRecoilValue(readOnlySelector);
useRecoilValue(writeableSelector);
useRecoilValue({}); // $ExpectError

useRecoilValueLoadable(myAtom);
useRecoilValueLoadable(readOnlySelector);
useRecoilValueLoadable(writeableSelector);
useRecoilValueLoadable({}); // $ExpectError

useRecoilState(myAtom);
useRecoilState(writeableSelector);
useRecoilState(readOnlySelector); // $ExpectError
useRecoilState({}); // $ExpectError

useRecoilStateLoadable(myAtom);
useRecoilStateLoadable(writeableSelector);
useRecoilStateLoadable(readOnlySelector); // $ExpectError
useRecoilStateLoadable({}); // $ExpectError

useSetRecoilState(myAtom);
useSetRecoilState(writeableSelector);
useSetRecoilState(readOnlySelector); // $ExpectError
useSetRecoilState({}); // $ExpectError

useResetRecoilState(myAtom);
useResetRecoilState(writeableSelector);
useResetRecoilState(readOnlySelector); // $ExpectError
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

// UTILS

// atomFamily
// atomFamily({
//     key: 'asdfs',
//     default: (a) => {return ''},
// });
