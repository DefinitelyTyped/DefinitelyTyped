import * as hooks from '@wordpress/hooks';

hooks.addAction('my-action', 'my/namespace', () => {});
hooks.addAction('my-action', 'my/namespace', () => {}, 20);

hooks.addFilter('my-filter', 'my/namespace', (foo: string, bar: number) => `${foo}${bar}`);
hooks.addFilter('my-filter', 'my/namespace', (foo: number, bar: number) => bar, 23);

hooks.removeAction('my-action', 'my/namespace');
hooks.removeFilter('my-filter', 'my/namespace');

// $ExpectType boolean
hooks.hasAction('my-action');
// $ExpectType boolean
hooks.hasFilter('my-filter');

hooks.removeAllActions('my-action', 'my/namespace');
hooks.removeAllFilters('my-filter', 'my/namespace');

// $ExpectType unknown
hooks.doAction('my-action');
// $ExpectType string
hooks.doAction('my-action', 'foo');

// $ExpectType unknown
hooks.applyFilters('my-filter');
// $ExpectType number
hooks.applyFilters('my-action', 123);
// $ExpectType (string | number)[]
hooks.applyFilters('my-action', [123, '456']);

// $ExpectType string | null
hooks.currentAction();
// $ExpectType string | null
hooks.currentFilter();

// $ExpectType boolean
hooks.doingAction();
// $ExpectType boolean
hooks.doingAction('my-action');
// $ExpectType boolean
hooks.doingFilter();
// $ExpectType boolean
hooks.doingFilter('my-action');

// $ExpectType number
hooks.didAction('my-action');
// $ExpectType number
hooks.didFilter('my-filter');

// $ExpectType HookMap<ActionCallback>
hooks.actions;
// $ExpectType HookMap<FilterCallback>
hooks.filters;

(() => {
    const {
        // $ExpectType HookMap<ActionCallback>
        actions,
        // $ExpectType HookMap<FilterCallback>
        filters,
    } = hooks.createHooks();

    // $ExpectType ActionCallback[]
    actions.__current;

    // $ExpectType FilterCallback[]
    filters.__current;

    // $ExpectType Hook<ActionCallback>[] | undefined
    const fooActions = actions.foo;
    // $ExpectType Hook<FilterCallback>[] | undefined
    const barFilters = filters.bar;

    if (fooActions && barFilters) {
        const firstAction = fooActions[0].handlers[0];
        const firstFilter = barFilters[0].handlers[0];

        // $ExpectType void
        firstAction();

        // $ExpectType void
        firstAction(1, undefined, 'foobar', false);

        // $ExpectType string
        firstFilter('foo');

        // $ExpectType string
        firstFilter('foo', 'other', 'args', 34, 'blah', true);

        // $ExpectType boolean
        firstFilter(1 < 2);

        // $ExpectType number
        firstFilter(123);

        // $ExpectType string[]
        firstFilter(['hello', 'world']);
    }
})();
