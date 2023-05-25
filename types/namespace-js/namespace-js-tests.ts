import * as NamespaceJs from 'namespace-js';

interface UserObject1 {
    foo: () => string;
    bar: () => string;
}

interface UserObject2 {
    baz: () => string;
}

NamespaceJs('com.example.application').define(ns => {
    ns.provide<UserObject1>({
        foo() {
            return 'foo';
        },
        bar() {
            return 'bar';
        },
    });
});

NamespaceJs<UserObject1>('com.example.application').define(ns => {
    // $ExpectType string
    ns.bar();
    // $ExpectType string
    ns.bar();
    ns.provide<UserObject2>({
        baz() {
            return 'baz';
        },
    });
});

NamespaceJs.use<UserObject1>('com.example.application foo,bar')
    .use<UserObject2>('com.example.application baz')
    .apply(ns => {
        // $ExpectType UserObject1 & UserObject2
        ns;
        // $ExpectType string
        ns.foo();
        // $ExpectType string
        ns.bar();
        // $ExpectType string
        ns.baz();
        // @ts-expect-error
        ns.qux();
    });
