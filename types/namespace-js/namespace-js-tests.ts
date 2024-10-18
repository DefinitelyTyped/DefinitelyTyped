import * as Namespace from "namespace-js";

interface UserObject1 {
    foo: () => string;
    bar: () => string;
}

interface UserObject2 {
    baz: () => string;
}

Namespace("com.example.application").define(ns => {
    ns.provide<UserObject1>({
        foo() {
            return "foo";
        },
        bar() {
            return "bar";
        },
    });
});

Namespace<UserObject1>("com.example.application").define(ns => {
    // $ExpectType string
    ns.bar();
    // $ExpectType string
    ns.bar();
    ns.provide<UserObject2>({
        baz() {
            return "baz";
        },
    });
});

Namespace.use<UserObject1, "com.example.application foo,bar">("com.example.application foo,bar")
    .use<UserObject2, "com.example.application baz">("com.example.application baz")
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

Namespace.use<UserObject1, "com.example.application">("com.example.application")
    .use<UserObject2, "com.example.application baz">("com.example.application baz")
    .apply(ns => {
        // $ExpectType string
        ns.com.example.application.foo();
        // $ExpectType string
        ns.com.example.application.bar();
        // $ExpectType string
        ns.baz();
        // @ts-expect-error
        ns.qux();
    });
