import immediate = require('immediate');

immediate(() => {});
immediate(arg1 => {}); // $ExpectError

immediate(
    (arg1, arg2) => {
        arg1; // $ExpectType string
        arg2; // $ExpectType number
    },
    'foo',
    1
);
// $ExpectError
immediate((arg1, arg2) => {}, 'foo');
// $ExpectError
immediate((arg1: string, arg2: number) => {}, 'foo', 'bar');
