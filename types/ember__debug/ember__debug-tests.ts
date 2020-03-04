import {
    runInDebug,
    warn,
    debug,
    assert,
    registerWarnHandler,
    registerDeprecationHandler,
    deprecate,
} from '@ember/debug';

/**
 * @ember/debug tests
 */
runInDebug(); // $ExpectError
runInDebug(() => console.log('Should not show up in prod')); // $ExpectType void

// Log a warning if we have more than 3 tomsters
const tomsterCount = 2;
warn('Too many tomsters!'); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3, { // $ExpectType void
    id: 'ember-debug.too-many-tomsters'
});

debug(); // $ExpectError
debug('Too many tomsters!'); // $ExpectType void
debug('Too many tomsters!', 'foo'); // $ExpectError

// Test for truthiness
const str = 'hello';
assert('Must pass a string', typeof str === 'string'); // $ExpectType void

const anObject = {};
assert('Must pass an object', anObject); // $ExpectType void

// Test with null and undefined
assert('Can handle falsiness', null); // $ExpectType void
assert('Can handle falsiness', undefined); // $ExpectType void

// Fail unconditionally
assert('This code path should never be run'); // $ExpectType void

// Require first argument
assert(); // $ExpectError

// next is not called, so no warnings get the default behavior
registerWarnHandler(); // $ExpectError
registerWarnHandler(() => {}); // $ExpectType void
registerWarnHandler((message, { id }, next) => { // $ExpectType void
    message; // $ExpectType string
    id; // $ExpectType string
    next; // $ExpectType () => void
});

// next is not called, so no warnings get the default behavior
registerDeprecationHandler(); // $ExpectError
registerDeprecationHandler(() => {}); // $ExpectType void
registerDeprecationHandler((message, { id, until }, next) => { // $ExpectType void
    message; // $ExpectType string
    id; // $ExpectType string
    until; // $ExpectType string
    next; // $ExpectType () => void
});

deprecate(); // $ExpectError
deprecate('missing test and options'); // $ExpectError
deprecate('missing options', true); // $ExpectError
deprecate('missing options', false); // $ExpectError
deprecate('missing options body', true, {}); // $ExpectError
deprecate('missing options id', true, { until: 'v4.0.0' }); // $ExpectError
deprecate('missing options until', true, { id: 'some.deprecation' }); // $ExpectError
deprecate('a valid deprecation without url', true, { id: 'some.deprecation', until: 'v4.0.0' }); // $ExpectType void
deprecate('incorrect options url', true, { id: 'some.deprecation', until: 'v4.0.0', url: 123 }); // $ExpectError
deprecate('a valid deprecation with url', true, { id: 'some.deprecation', until: 'v4.0.0', url: 'https://example.com/ember-deprecations-yo' }); // $ExpectType void
