import debounce = require('debounce-promise');
import { DebounceOptions } from 'debounce-promise';

const options: DebounceOptions = {};
const optionsA: DebounceOptions = { leading: true };
const f = async () => 2;
const f2 = (a: string) => 2;

debounce(f, 100);
debounce(f, 0, options);
debounce(f, 100, optionsA);
debounce(f, 10, { accumulate: true });
const foo = debounce(async () => f2, 10, {
    leading: true,
    accumulate: true,
});
foo().then(f => f('2'));
const bar = debounce(async () => [1, 2, 3], 100);
bar().then(ar => ar.concat());

const baz = debounce(async () => f2, 10, {
    leading: true,
    accumulate: false,
});
baz().then(f => f('2'));

// on accumulate mode, arguments will be collected in one param
const two = debounce((args: Array<[string, number, { d: boolean }]>) => [4], 10, {
    leading: true,
    accumulate: true,
});
two('1', 2, { d: false }).then(ar => ar.pop(), () => 2);

const three = debounce((args: number[][]) => [4], 10, {
    leading: true,
    accumulate: true,
});
three(1, 2, 3, 4).then(ar => ar.pop(), () => 2);
