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
// @ts-expect-error
runInDebug();
runInDebug(() => console.log('Should not show up in prod')); // $ExpectType void

// Log a warning if we have more than 3 tomsters
const tomsterCount = 2;
// @ts-expect-error
warn('Too many tomsters!');
warn('Too many tomsters!', { id: 'some-warning' }); // $ExpectType void
// @ts-expect-error
warn('Too many tomsters!', tomsterCount <= 3);
warn('Too many tomsters!', tomsterCount <= 3, { id: 'some-warning' }); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3, { // $ExpectType void
    id: 'ember-debug.too-many-tomsters'
});

// @ts-expect-error
debug();
debug('Too many tomsters!'); // $ExpectType void
// @ts-expect-error
debug('Too many tomsters!', 'foo');

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
// @ts-expect-error
assert();

// next is not called, so no warnings get the default behavior
// @ts-expect-error
registerWarnHandler();
registerWarnHandler(() => {}); // $ExpectType void
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    next; // $ExpectType (message: string, options?: { id: string; } | undefined) => void
});
registerWarnHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; } | undefined
    // @ts-expect-error
    next();
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
// @ts-expect-error
registerDeprecationHandler();
registerDeprecationHandler(() => {}); // $ExpectType void
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    next; // $ExpectType (message: string, options?: { id: string; until: string; } | undefined) => void
});
registerDeprecationHandler((message, options, next) => { // $ExpectType void
    message; // $ExpectType string
    options; // $ExpectType { id: string; until: string; } | undefined
    // @ts-expect-error
    next();
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

// @ts-expect-error
deprecate();
// @ts-expect-error
deprecate('missing test and options');
// @ts-expect-error
deprecate('missing options', true);
// @ts-expect-error
deprecate('missing options', false);
// @ts-expect-error
deprecate('missing options body', true, {});
// @ts-expect-error
deprecate('missing options id', true, { until: 'v4.0.0' });
// @ts-expect-error
deprecate('missing options until', true, { id: 'some.deprecation' });
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
  // @ts-expect-error
  url: 123,
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
  // @ts-expect-error
  for: 123,
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
  // @ts-expect-error
  since: 123,
});
deprecate('incorrect options `since`', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    // @ts-expect-error
    wrongKey: 'some.version',
  },
});
deprecate('incorrect options `since` available', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
    // @ts-expect-error
    available: 123,
  },
});
deprecate('incorrect options `since` enabled', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  since: {
      available: 'some.earlier.version',
      // @ts-expect-error
      enabled: 123,
  },
});
deprecate('incorrect options `since` empty', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  // @ts-expect-error
  since: {},
});
deprecate('incorrect options `since` enabled w/o available', true, {
  id: 'some.deprecation',
  until: 'v4.0.0',
  for: 'some.namespace',
  // @ts-expect-error
  since: {
      enabled: 'some.version',
  },
});
