import immediate = require('immediate');

immediate(() => {});
// @ts-expect-error
immediate(arg1 => {});

immediate(
    (arg1, arg2) => {
        arg1; // $ExpectType string
        arg2; // $ExpectType number
    },
    'foo',
    1
);
// @ts-expect-error
immediate((arg1, arg2) => {}, 'foo');
// @ts-expect-error
immediate((arg1: string, arg2: number) => {}, 'foo', 'bar');
