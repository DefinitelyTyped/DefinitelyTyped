import hooks from 'colorjs.io/src/hooks';

// @ts-expect-error
hooks.add();
// @ts-expect-error
hooks.add('foo');

hooks.add('foo', env => {
    env; // $ExpectType Record<string, any>
});

hooks.add('bar', () => {}, true);
