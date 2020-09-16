import rfdc = require('rfdc');
interface Obj {
    foo?: 'bar';
}
const obj: Obj = {};
const clone = rfdc({ proto: false, circles: false });
// $ExpectType Obj
clone(obj);

// Note: we can't replicate the actual behaviour in the type system
// as typescript doesn't expose prototypes in any special way.
const err: Error & {code?: number} = Error();
err.code = 1;
JSON.parse(JSON.stringify(err)); // {code: 1}
// $ExpectType Error & { code?: number | undefined; }
clone(err); // Actual type: {code: 1}

JSON.parse(JSON.stringify(new Uint8Array([1, 2, 3]))); //  {'0': 1, '1': 2, '2': 3 }
// $ExpectType Uint8Array
clone(new Uint8Array([1, 2, 3])); // Actual type: {'0': 1, '1': 2, '2': 3 }

JSON.parse(JSON.stringify({rx: /foo/})); // {rx: {}}
// $ExpectType { rx: RegExp; }
clone({rx: /foo/}); // {rx: {}}
