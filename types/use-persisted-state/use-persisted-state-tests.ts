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
// @ts-expect-error
createPersistedState();

/**
 * The `key` argument must be of type `string`.
 */
// @ts-expect-error
createPersistedState(1);
// @ts-expect-error
createPersistedState({});
// @ts-expect-error
createPersistedState(Symbol.iterator);
// @ts-expect-error
createPersistedState(undefined);

/**
 * The `provider` argument, when passed, must partially implement `Storage`.
 */
// @ts-expect-error
createPersistedState('myKey', { });
// @ts-expect-error
createPersistedState('myKey', { getItem: localStorage.getItem });
// @ts-expect-error
createPersistedState('myKey', { setItem: localStorage.setItem });

/**
 * createPersistedState takes an optional type parameter, which carries through
 * to the returned hook
 *
 * (based on the README example)
 */
const useCounterState = createPersistedState<number>('count');
const initialCount = 1;
const [count, setCount] = useCounterState(initialCount);
count; // $ExpectType number
setCount; // $ExpectType Dispatch<SetStateAction<number>>
