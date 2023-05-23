import * as NamespaceJs from 'namespace-js';

interface UserObject {
    foo: () => string;
    bar: () => string;
}

NamespaceJs('com.example.application').define(ns => {
    ns.provide<UserObject>({
        foo() {
            return 'foo';
        },
        bar() {
            return 'bar';
        },
    });
});

NamespaceJs.use('com.example.application foo,bar').apply<UserObject>(ns => {
    // $ExpectType UserObject
    ns;
    // $ExpectType string
    ns.foo();
    // $ExpectType string
    ns.bar();
    // @ts-expect-error
    ns.baz();
});
