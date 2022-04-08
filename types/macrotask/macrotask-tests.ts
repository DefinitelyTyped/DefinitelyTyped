import { run, clear } from 'macrotask';

const token = run(() => {});
run(arg1 => {}); // $ExpectError

run(
    (arg1, arg2) => {
        arg1; // $ExpectType string
        arg2; // $ExpectType number
    },
    'foo',
    1
);
// $ExpectError
run((arg1, arg2) => {}, 'foo');
// $ExpectError
run((arg1: string, arg2: number) => {}, 'foo', 'bar');

clear(token);
clear({}); // $ExpectError
