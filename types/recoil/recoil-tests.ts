import {
  atom,
  selector,
  useRecoilState,
  useRecoilCallback,
  isRecoilValue,
  useResetRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
  useRecoilStateLoadable,
} from 'recoil';

function describe(desc: string, fn: () => void) {}
function it(desc: string, fn: () => void) {}

describe('atom', () => {
  it('has a key prop', () => {
    const a = atom({
      key: 'a',
      default: '123',
    });
    a; // $ExpectType Atom<string>
    a.key; // $ExpectType string
  });
});

describe('selector', () => {
  it('has a get prop', () => {
    const s = selector({
      key: 's',
      get: () => 123
    });
    s; // $ExpectType Selector<number>
    s.key; // $ExpectType string
  });

  // Yo dawg
  it('gets the `get` callback to get', () => {
    const a = atom({ key: 'a', default: 123 });
    const s = selector({
      key: 's',
      get: ({ get }) => {
        const got = get(a); // $ExpectType number
        return `${got}`;
      }
    });
    s; // $ExpectType Selector<string>
  });

  it('gets the `get` callback to set', () => {
    const a = atom({ key: 'a', default: 123 });
    const s = selector({
      key: 's',
      get: () => 123,
      set: ({ get }) => {
        const got = get(a); // $ExpectType number
      }
    });
  });

  it('gets the `set` callback to set', () => {
    const a = atom({ key: 'a', default: 123 });
    const s = selector({
      key: 's',
      get: () => 123,
      set: ({ set }) => {
        set(a, '123'); // $ExpectError
        set(a, 321);
      }
    });
  });
});

describe('atom <-> selector uniqueness', () => {
  it(`can't assign atom to selector or vice versa`, () => {
    let a = atom({ key: 'a', default: '123' });
    let s = selector({ key: 'a', get: () => '123' });
    a = s; // $ExpectError
    s = a; // $ExpectError
  });
});

describe('useRecoilState', () => {
  it('works on atoms', () => {
    const a = atom({ key: 'a', default: '123' });
    const [aState, setAState] = useRecoilState(a);
    aState; // $ExpectType string
    setAState; // $ExpectType Dispatch<SetStateAction<string>>
  });
});

describe('useRecoilValue', () => {
  it('works on atoms', () => {
    const a = atom({ key: 'a', default: '123' });
    const aState = useRecoilValue(a);
    aState; // $ExpectType string
  });
});

describe('useSetRecoilState', () => {
  it('works on atoms', () => {
    const a = atom({ key: 'a', default: '123' });
    const setAState = useSetRecoilState(a);
    setAState; // $ExpectType Dispatch<SetStateAction<string>>
  });
});

describe('isRecoilValue', () => {
  it('is a typeguard', () => {
    const x = {} as any;
    if (isRecoilValue(x)) {
      x; // $ExpectType RecoilValue<any>
    }
  });
});

describe('useResetRecoilState', () => {
  it('is a void fn', () => {
    const a = atom({ key: 'a', default: '123' });
    const fn = useResetRecoilState(a);
    fn; // $ExpectType () => void
  });
});

describe('useRecoilValueLoadable', () => {
  it(`has a 'hasValue' state`, () => {
    const a = atom({ key: 'a', default: '123' });
    const loadableState = useRecoilValueLoadable(a);
    if (loadableState.state === 'hasValue') {
      loadableState.contents; // $ExpectType string
      loadableState.getValue; // $ExpectType () => Promise<string>
      loadableState.state; // $ExpectType "hasValue"
      loadableState.toPromise; // $ExpectType () => Promise<string>
    }
  });

  it(`has a 'loading' state`, () => {
    const a = atom({ key: 'a', default: '123' });
    const loadableState = useRecoilValueLoadable(a);
    if (loadableState.state === 'loading') {
      loadableState.contents; // $ExpectType Promise<string>

      // DocComment should be: "When state is 'loading' getValue throws a Promise<T>"
      loadableState.getValue; // $ExpectType () => never
      loadableState.state; // $ExpectType "loading"
      loadableState.toPromise; // $ExpectType () => Promise<string>
    }
  });

  it(`has a 'hasError' state`, () => {
    const a = atom({ key: 'a', default: '123' });
    const loadableState = useRecoilValueLoadable(a);
    if (loadableState.state === 'hasError') {
      loadableState.contents; // $ExpectType Error
      // DocComment should be: "When state is 'hasError' getValue() throws the error"
      loadableState.getValue; // $ExpectType () => never
      loadableState.state; // $ExpectType "hasError"
      loadableState.toPromise; // $ExpectType () => Promise<never>
    }
  });
});

describe('useRecoilValueLoadable', () => {
  it(`has a 'hasValue' state`, () => {
    const a = atom({ key: 'a', default: '123' });
    const [loadableState, [state, setState]] = useRecoilStateLoadable(a);

    // See `useRecoilValueLoadable` suite above for better tests.
    loadableState; // $ExpectType Loadable<string>

    state; // $ExpectType string
    setState; // $ExpectType Dispatch<SetStateAction<string>>
  });
});

describe('useRecoilCallback', () => {
  it('gets the correct arguments in the callback', () => {
    const itemsInCart = atom({ key: 'a', default: 123 });
    const logCartItems = useRecoilCallback(async ({getPromise}) => {
      const numItemsInCart = await getPromise(itemsInCart);  // $ExpectType number

      /* console.log( */ `items in cart: ${numItemsInCart}` /* ) */;
    });
    logCartItems; // $ExpectType () => void
  });
});
