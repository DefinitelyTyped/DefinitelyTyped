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
warn('Too many tomsters!'); // $ExpectError
warn('Too many tomsters!', { id: 'some-warning' }); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3); // $ExpectError
warn('Too many tomsters!', tomsterCount <= 3, { id: 'some-warning' }); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3, { // $ExpectType void
    id: 'ember-debug.too-many-tomsters'
});

debug(); // $ExpectError
debug('Too many tomsters!'); // $ExpectType void
debug('Too many tomsters!', 'foo'); // $ExpectError

// Test for truthiness
const str: unknown = 'hello';
assert('Must pass a string', typeof str === 'string'); // $ExpectType void
str; // $ExpectType string

const anObject = {};
assert('Must pass an object', anObject); // $ExpectType void

// Test with null and undefined
assert('Can handle falsiness', null); // $ExpectType void
assert('Can handle falsiness', undefined); // $ExpectType void

// Fail unconditionally
assert('This code path should never be run'); // $ExpectType never

// Require first argument
assert(); // $ExpectError

// next is not called, so no warnings get the default behavior
registerWarnHandler(); // $ExpectError
registerWarnHandler(() => {}); // $ExpectType void
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    next; // $ExpectType (message: string, options?: { id: string; } | undefined) => void
});
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    next(); // $ExpectError
});
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    next(message); // $ExpectType void
});
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    next(message, options); // $ExpectType void
});

// next is not called, so no warnings get the default behavior
registerDeprecationHandler(); // $ExpectError
registerDeprecationHandler(() => {}); // $ExpectType void
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    next; // $ExpectType (message: string, options?: { id: string; until: string; } | undefined) => void
});
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    next(); // $ExpectError
});
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    next(message); // $ExpectType void
});
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    next(message, options); // $ExpectType void
});

deprecate(); // $ExpectError
deprecate('missing test and options'); // $ExpectError
deprecate('missing options', true); // $ExpectError
deprecate('missing options', false); // $ExpectError
deprecate('missing options body', true, {}); // $ExpectError
deprecate('missing options id', true, { until: 'v4.0.0' }); // $ExpectError
deprecate('missing options until', true, { id: 'some.deprecation' }); // $ExpectError
deprecate('a valid deprecation without `url`', true, { // $ExpectType void
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    available: 'some.early.version',
    enabled: 'some.version',
  },
});
deprecate('incorrect options `url`', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  url: 123, // $ExpectError
  for: 'some.namespace',
  since: {
    available: 'some.earlier.version',
    enabled: 'some.version',
  },
});
deprecate('a valid deprecation with `url`', true, { // $ExpectType void
  id: 'some.deprecation',
  until: 'v4.0.0',
  url: 'https://example.com/ember-deprecations-yo',
  for: 'some.namespace',
  since: {
    available: 'some.earlier.version',
    enabled: 'some.version',
  },
});
deprecate('a valid deprecation with `for`', true, { // $ExpectType void
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    available: 'some.earlier.version',
    enabled: 'some.version',
  },
});
deprecate('incorrect options `for`', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 123, // $ExpectError
  since: {
    available: 'some.earlier.version',
    enabled: 'some.version',
  },
});
deprecate('a valid deprecation with `since`', true, { // $ExpectType void
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    available: 'some.version',
  },
});
deprecate('a valid deprecation with `since`', true, { // $ExpectType void
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    available: 'some.version',
    enabled: 'some.version',
  },
});
deprecate('incorrect options `since`', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: 123, // $ExpectError
});
deprecate('incorrect options `since`', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    wrongKey: 'some.version', // $ExpectError
  },
});
deprecate('incorrect options `since` available', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    available: 123, // $ExpectError
  },
});
deprecate('incorrect options `since` enabled', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
      available: 'some.earlier.version',
      enabled: 123, // $ExpectError
  },
});
deprecate('incorrect options `since` empty', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {}, // $ExpectError
});
deprecate('incorrect options `since` enabled w/o available', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: { // $ExpectError
      enabled: 'some.version',
  },
});
