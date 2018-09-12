import { registerDeprecationHandler, runInDebug, warn, assert, debug, registerWarnHandler } from '@ember/debug';
import ContainerDebugAdapter from '@ember/debug/container-debug-adapter';
import DataAdapter from '@ember/debug/data-adapter';

/**
 * @ember/debug tests
 */
runInDebug(); // $ExpectError
let x = runInDebug(() => console.log('Should not show up in prod')); // $ExpectType void

 // Log a warning if we have more than 3 tomsters
const tomsterCount = 2;
warn('Too many tomsters!'); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3); // $ExpectType void
warn('Too many tomsters!', tomsterCount <= 3, { id: 'ember-debug.too-many-tomsters' }); // $ExpectType void

debug(); // $ExpectError
debug('Too many tomsters!'); // $ExpectType void
debug('Too many tomsters!', 'foo'); // $ExpectError

// Test for truthiness
const str = 'hello';
assert('Must pass a string', typeof str === 'string'); // $ExpectType void

// Fail unconditionally
assert('This code path should never be run'); // $ExpectType void

// next is not called, so no warnings get the default behavior
registerWarnHandler(); // $ExpectError
registerWarnHandler(() => {}); // $ExpectType void
registerWarnHandler((message, {id, next}) => { // $ExpectType void
    message; // $ExpectType string
    id; // $ExpectType string
    next; // $ExpectType () => void
});

// next is not called, so no warnings get the default behavior
registerDeprecationHandler(); // $ExpectError
registerDeprecationHandler(() => {}); // $ExpectType void
registerDeprecationHandler((message, {id, next, until}) => { // $ExpectType void
    message; // $ExpectType string
    id; // $ExpectType string
    until; // $ExpectType string
    next; // $ExpectType () => void
});

/**
 * @ember/debug/data-adapter tests
 */

 const da = new DataAdapter(); // $ExpectType DataAdapter
 const da2 = DataAdapter.create(); // $ExpectType DataAdapter

 da.containerDebugAdapter; // $ExpectType any
 da.acceptsModelName; // $ExpectType any
 da.getFilters; // $ExpectType () => any[]
 da.watchModelTypes(() => ({}), () => ({})); // ExpectType (...args: any[]) => any
 da.watchRecords('model:book', () => ({}), () => ({}), () => ({})); // ExpectType (...args: any[]) => any

 /**
 * @ember/debug/container-debug-adapter tests
 */

const cda = new ContainerDebugAdapter(); // $ExpectType ContainerDebugAdapter
const cda2 = ContainerDebugAdapter.create(); // $ExpectType ContainerDebugAdapter

cda.catalogEntriesByType('service'); // $ExpectType string[]
cda.canCatalogEntriesByType('service'); // $ExpectType boolean
