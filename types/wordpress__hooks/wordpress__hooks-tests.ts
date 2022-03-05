import {
    addAction,
    addFilter,
    applyFilters,
    createHooks,
    didAction,
    didFilter,
    doAction,
    doingAction,
    doingFilter,
    hasAction,
    hasFilter,
    removeAction,
    removeAllActions,
    removeAllFilters,
    removeFilter,
} from '@wordpress/hooks';

const callback = () => {};
const priority = 10;
const arg1 = 'arg1';

// $ExpectType Hooks
const hooks = createHooks();

hooks.addAction('hookName', 'namespace', callback); // $ExpectType void

addAction('hookName', 'namespace', callback); // $ExpectType void
addAction('hookName', 'namespace', callback, priority); // $ExpectType void

addFilter('hookName', 'namespace', callback); // $ExpectType void
addFilter('hookName', 'namespace', callback, priority); // $ExpectType void

removeAction('hookName'); // $ExpectType number | undefined
removeAction('hookName', 'namespace'); // $ExpectType number | undefined

removeFilter('hookName'); // $ExpectType number | undefined
removeFilter('hookName', 'namespace'); // $ExpectType number | undefined

removeAllActions('hookName'); // $ExpectType number | undefined

removeAllFilters('hookName'); // $ExpectType number | undefined

doAction('hookName'); // $ExpectType unknown
doAction('hookName', arg1); // $ExpectType unknown

applyFilters('hookName'); // $ExpectType unknown
applyFilters('hookName', arg1); // $ExpectType unknown

doingAction('hookName'); // $ExpectType boolean

doingFilter('hookName'); // $ExpectType boolean

didAction('hookName'); // $ExpectType number | undefined

didFilter('hookName'); // $ExpectType number | undefined

hasAction('hookName'); // $ExpectType boolean
hasAction('hookName', 'namespace'); // $ExpectType boolean

hasFilter('hookName'); // $ExpectType boolean
hasFilter('hookName', 'namespace'); // $ExpectType boolean
