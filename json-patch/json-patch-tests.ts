/// <reference path="./json-patch.d.ts" />

import jp = require("json-patch");

// Add property, result: {foo: 'bar'}
jsonpatch.apply({}, [{ op: 'add', path: '/foo', value: 'bar' }]);
// Add array element, result: {foo: [1, 2, 3]}
jsonpatch.apply({ foo: [1, 3] }, [{ op: 'add', path: '/foo/1', value: 2 }]);
// Complex, result: {foo: [{bar: 'baz'}]}
jsonpatch.apply({ foo: [{}] }, [{ op: 'add', path: '/foo/0/bar', value: 'baz' }]);

// Remove property, result: {}
jsonpatch.apply({ foo: 'bar' }, [{ op: 'remove', path: '/foo' }]);
// Remove array element, result: {foo: [1, 3]}
jsonpatch.apply({ foo: [1, 2, 3] }, [{ op: 'remove', path: '/foo/1' }]);
// Complex, result: {foo: [{}]}
jsonpatch.apply({ foo: [{ bar: 'baz' }] }, [{ op: 'remove', path: '/foo/0/bar' }]);

// Replace property, result: {foo: 1}
jsonpatch.apply({ foo: 'bar' }, [{ op: 'replace', path: '/foo', value: 1 }]);
// Repalce array element, result: {foo: [1, 4, 3]}
jsonpatch.apply({ foo: [1, 2, 3] }, [{ op: 'replace', path: '/foo/1', value: 4 }]);
// Complex, result: {foo: [{bar: 1}]}
jsonpatch.apply({ foo: [{ bar: 'baz' }] }, [{ op: 'replace', path: '/foo/0/bar', value: 1 }]);

// Move property, result {bar: [1, 2, 3]}
jsonpatch.apply({ foo: [1, 2, 3] }, [{ op: 'move', from: '/foo', path: '/bar' }]);
// Copy property, result {foo: [1, 2, 3], bar: 2}
jsonpatch.apply({ foo: [1, 2, 3] }, [{ op: 'copy', from: '/foo/1', path: '/bar' }]);
// Test equality of property to value, result: true
jsonpatch.apply({ foo: 'bar' }, [{ op: 'test', path: '/foo', value: 'bar' }]);

jsonpatch.compile([{ op: 'test', path: '/foo', value: 'bar' }])({ foo: 'bar' });

jp.apply({}, [{ op: 'add', path: '/foo', value: 'bar' }]);
