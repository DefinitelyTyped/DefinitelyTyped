import Ember from 'ember';

const {
    runInDebug,
    warn,
    debug,
    Debug: { registerDeprecationHandler, registerWarnHandler },
} = Ember;

// Workaround for https://github.com/microsoft/TypeScript/issues/36931.
const assert: typeof Ember.assert = Ember.assert;

/**
 * @ember/debug tests
 */
runInDebug(); // $ExpectError
runInDebug(() => console.log('Should not show up in prod')); // $ExpectType void

// Log a warning if we have more than 3 tomsters
const tomsterCount = 2;
warn('Too many tomsters!'); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3); // $ExpectType void
// $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3, {
    id: 'ember-debug.too-many-tomsters',
});

debug(); // $ExpectError
debug('Too many tomsters!'); // $ExpectType void
debug('Too many tomsters!', 'foo'); // $ExpectError

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

// Test for truthiness
const str: unknown = 'hello';
assert('Must pass a string', typeof str === 'string');
str; // $ExpectType string

// Fail unconditionally
// This has to be last because `assert never` will raise TS's checks for
// unreachable code.
assert('This code path should never be run'); // $ExpectType never
