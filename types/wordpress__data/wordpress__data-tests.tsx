import * as data from '@wordpress/data';
import { NamedFormatConfiguration } from '@wordpress/rich-text';

data.select('core/block-editor').isTyping<boolean>();
data.dispatch('core/block-editor').resetBlocks('');

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
        setFoo: (text: 'foo') => ({ type: 'SET_FOO', text }),
    },
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
data.dispatch('core/rich-text').addFormatTypes({
    className: null,
    edit: () => null,
    name: 'my/foo',
    tagName: 'a',
    title: 'foo',
});
data.dispatch('core/rich-text').removeFormatTypes('my/foo');
data.dispatch('core/rich-text').removeFormatTypes(['my/foo', 'my/bar']);

//
// `select` overload tests
//
data.select('core/rich-text').getFormatTypes(); // $ExpectType NamedFormatConfiguration[]
data.select('core/rich-text').getFormatTypeForBareElement('a'); // $ExpectType NamedFormatConfiguration | undefined
