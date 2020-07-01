import depd = require('depd');

const deprecate = depd("depd-tests");

deprecate('message');

const obj = { p1: 'deprecated property', p2: 'normal property' };
deprecate.property(obj, 'p1', 'property [p1] is deprecated!');
deprecate.property(obj, 'p3', 'property [p3] is deprecated!'); // $ExpectError

interface TestDeprecatedFunction {
    func1?(): void;
    func2?(arg: string): boolean;
}
const obj2 = <TestDeprecatedFunction> {};

obj2.func1 = deprecate.function(() => {
    console.log('all calls to [func1] are deprecated ');
});

// $ExpectError
obj2.func2 = deprecate.function(() => {
    console.log('all calls to [func2] are deprecated ');
}, 'func2');

obj2.func2 = deprecate.function((arg: string) => {
    console.log('all calls to [func2] are deprecated ');
    return true;
}, 'func2');

obj2.func1();
obj2.func2('');

process.on('deprecation', error => {
    const err: depd.DeprecationError = error;
    error; // $ExpectType DeprecationError

    err.name; // $ExpectType "DeprecationError"
    err.namespace; // $ExpectType string
    err.stack; // $ExpectType string
});
