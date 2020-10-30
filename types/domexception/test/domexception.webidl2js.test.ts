import DOMException = require('domexception/webidl2js-wrapper');

declare const any: unknown;
const global: { [prop: string]: any; Error: ErrorConstructor } = { Error };

DOMException.install(global);

DOMException.create(global, []); // $ExpectType DOMException
DOMException.create(global, ['foo']); // $ExpectType DOMException
DOMException.create(global, ['foo', 'SyntaxError']); // $ExpectType DOMException

DOMException.createImpl(global, []); // $ExpectType DOMExceptionImpl
DOMException.createImpl(global, ['foo']); // $ExpectType DOMExceptionImpl
DOMException.createImpl(global, ['foo', 'SyntaxError']); // $ExpectType DOMExceptionImpl

if (DOMException.is(any)) {
    any; // $ExpectType DOMException
    const impl = DOMException.convert(any);

    impl; // $ExpectType DOMExceptionImpl
}

if (DOMException.isImpl(any)) {
    any; // $ExpectType DOMExceptionImpl
}

DOMException.setup<DOMException>(Object.create(global.DOMException.prototype), global, [
    'foo',
    'SyntaxError',
]);
