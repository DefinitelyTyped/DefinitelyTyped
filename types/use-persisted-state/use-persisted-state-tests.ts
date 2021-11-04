import createPersistedState from 'use-persisted-state';
import { useState } from 'react';

/**
 * Only the first argument is required.
 */
createPersistedState('myKey');

/**
 * The generated hook conforms to the same signature as `React.useState`.
 */
const myHook: typeof useState = createPersistedState('myKey');

/**
 * Custom storage provider can be passed as the second argument.
 */
createPersistedState('myKey', localStorage);
createPersistedState('myKey', sessionStorage);

/**
 * The provider is similar to the `Storage` interface,
 * but cares only about `getItem` and `setItem` methods.
 */
const { getItem, setItem } = localStorage;
createPersistedState('myKey', { getItem, setItem });

/**
 * At least one argument must be provided.
 */
createPersistedState(); // $ExpectError

/**
 * The `key` argument must be of type `string`.
 */
createPersistedState(1);               // $ExpectError
createPersistedState({});              // $ExpectError
createPersistedState(Symbol.iterator); // $ExpectError
createPersistedState(undefined);       // $ExpectError

/**
 * The `provider` argument, when passed, must partially implement `Storage`.
 */
createPersistedState('myKey', { });                               // $ExpectError
createPersistedState('myKey', { getItem: localStorage.getItem }); // $ExpectError
createPersistedState('myKey', { setItem: localStorage.setItem }); // $ExpectError
