import * as NamespaceJs from 'namespace-js';

interface UserObject {
    foo: () => string;
    bar: () => string;
}

NamespaceJs('com.example.application').define(function (ns) {
    ns.provide<UserObject>({
        foo: function () {
            return 'foo';
        },
        bar: function () {
            return 'bar';
        },
    });
});

NamespaceJs.use('com.example.application foo,bar').apply<UserObject>(function (ns) {
    ns.foo();
    ns.bar();
});
