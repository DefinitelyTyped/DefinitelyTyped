import * as data from '@wordpress/data';

data.select('core/block-editor').isTyping<boolean>();
data.dispatch('core/block-editor').resetBlocks('');

const unsubscribe = data.subscribe(() => console.log('Store was updated.'));
unsubscribe();

data.use(data.plugins.persistence, { storage: window.localStorage });

interface FooBar {
    foo: string;
    bar: number;
}

data.registerStore<FooBar>('foo', {
    reducer(state = { foo: 'foo', bar: 21 }, action) {
        return state;
    },
    selectors: {
        getFoo: ({ foo }) => foo,
        getBar: ({ bar }) => bar,
        getSomething: (state, thing: keyof FooBar) => state[thing],
    },
    actions: {
        setFoo: (text: string) => ({ type: 'SET_FOO', text }),
    },
    persist: ['foo'],
});

data.registerStore<{ key: string }>('bad-persist', {
    reducer: (state = { key: 'value' }) => state,
    persist: ['invalid-persist-key'], // $ExpectError
});

const HookComponent = () => {
    const isTyping = data.useSelect(select => select('core/block-editor').isTyping<boolean>());
    const { resetBlocks } = data.useDispatch('core/block-editor');
    const dispatch = data.useDispatch();
    return (
        <button disabled={isTyping} onClick={resetBlocks} onBlur={() => dispatch('core/data').resetBlocks()}>
            Reset
        </button>
    );
};

//
// `dispatch` overload tests
//

// $ExpectType Record<string, <T = void>(...args: readonly any[]) => T>
data.dispatch('foo/bar');

// $ExpectType void
data.dispatch('foo/bar').foobar();

// $ExpectType number
data.dispatch('foo/bar').foobar<number>();

// $ExpectType Record<string, <T = unknown>(...args: readonly any[]) => T>
data.select('foo/bar');

// $ExpectType unknown
data.select('foo/bar').getFoo();

// $ExpectType string
data.select('foo/bar').getFoo<string>();
