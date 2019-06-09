import * as data from "@wordpress/data";

data.select("core/block-editor").isTyping<boolean>();
data.dispatch("core/block-editor").resetBlocks("");

data.use(data.plugins.persistence, { storage: window.localStorage });

interface FooBar {
    foo: string;
    bar: number;
}

data.registerStore<FooBar>("foo", {
    reducer(state = { foo: "foo", bar: 21 }, action) {
        return state;
    },
    selectors: {
        getFoo: ({ foo }) => foo,
        getBar: ({ bar }) => bar,
        getSomething: (state, thing: keyof FooBar) => state[thing]
    },
    actions: {
        setFoo: (text: "foo") => ({ type: "SET_FOO", text })
    }
});
