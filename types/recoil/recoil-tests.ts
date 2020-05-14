import {
    DefaultValue,
    RecoilRoot,
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
import { atomFamily } from 'recoil/utils';

// DefaultValue
new DefaultValue() instanceof DefaultValue;

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

const readOnlySelector = selector({
    key: 'asdfasf',
    get: ({ get }) => {
        get(myAtom);
        get(mySelector1);
    },
});

const writeableSelector = selector({
    key: 'asdfsadfs',
    get: () => 5,
    // FIXME (options are implicitly any for some reason)
    // $ExpectError
    set: ({ get, set, reset }) => {
        get(myAtom);
        set(myAtom, 5);
        reset(myAtom);
    },
});

// RecoilRoot
RecoilRoot({});
RecoilRoot({
    initializeState: ({ set, setUnvalidatedAtomValues }) => {
        set(myAtom, 5);
        setUnvalidatedAtomValues(new Map());
    },
});

// Hooks
useRecoilValue(myAtom);
useRecoilValue(mySelector1);
useRecoilValue(readOnlySelector);
useRecoilValue(writeableSelector);

useRecoilValueLoadable(myAtom);
useRecoilValueLoadable(readOnlySelector);
useRecoilValueLoadable(writeableSelector);

useRecoilState(myAtom);
useRecoilState(writeableSelector);

useRecoilStateLoadable(myAtom);
useRecoilStateLoadable(writeableSelector);

useSetRecoilState(myAtom);
useSetRecoilState(writeableSelector);

useResetRecoilState(myAtom);
useResetRecoilState(writeableSelector);

useRecoilCallback(async ({ getPromise, getLoadable, set, reset }) => {
    const val = await getPromise(writeableSelector);
    const loadable = getLoadable(readOnlySelector);
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
atomFamily({
    key: 'asdfs',
    default: (param: number) => param + 1 /* FIXME (any) */,
});
