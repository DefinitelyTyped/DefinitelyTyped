import DOMException = require('domexception/webidl2js-wrapper');

declare const global: object;
declare const any: unknown;

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
