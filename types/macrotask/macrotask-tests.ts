import { run, clear } from 'macrotask';

const token = run(() => {});
// @ts-expect-error
run(arg1 => {});

run(
    (arg1, arg2) => {
        arg1; // $ExpectType string
        arg2; // $ExpectType number
    },
    'foo',
    1
);
// @ts-expect-error
run((arg1, arg2) => {}, 'foo');
// @ts-expect-error
run((arg1: string, arg2: number) => {}, 'foo', 'bar');

clear(token);
// @ts-expect-error
clear({});
