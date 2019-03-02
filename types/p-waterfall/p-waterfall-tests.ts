import pWaterfall = require('p-waterfall');

pWaterfall([() => `I ❤️ unicorn`]).then(finalValue => {
    // $ExpectType string
    finalValue;
});
pWaterfall([() => `I ❤️ unicorn`, (str: string) => true]).then(finalValue => {
    // $ExpectType boolean
    finalValue;
});
pWaterfall([() => `I ❤️ unicorn`, (str: string) => true, (bool: boolean) => 1]).then(finalValue => {
    // $ExpectType number
    finalValue;
});
pWaterfall([
    () => `I ❤️ unicorn`,
    (str: string) => true,
    (bool: boolean) => 1,
    (num: number) => null,
]).then(finalValue => {
    // $ExpectType null
    finalValue;
});
pWaterfall([
    () => `I ❤️ unicorn`,
    (str: string) => true,
    (bool: boolean) => 1,
    (num: number) => null,
    (n: null) => undefined,
]).then(finalValue => {
    // $ExpectType undefined
    finalValue;
});
pWaterfall([
    () => `I ❤️ unicorn`,
    (str: string) => true,
    (bool: boolean) => 1,
    (num: number) => null,
    (n: null) => undefined,
    (u: undefined) => ({}),
]).then(finalValue => {
    // $ExpectType {}
    finalValue;
});
pWaterfall([
    () => `I ❤️ unicorn`,
    (str: string) => true,
    (bool: boolean) => 1,
    (num: number) => null,
    (n: null) => undefined,
    (u: undefined) => ({}),
    (o: {}) => 'foo',
]).then(finalValue => {
    // $ExpectType string
    finalValue;
});
pWaterfall([
    () => `I ❤️ unicorn`,
    (str: string) => true,
    (bool: boolean) => 1,
    (num: number) => null,
    (n: null) => undefined,
    (u: undefined) => ({}),
    (o: {}) => 'foo',
    (s: string) => 1,
]).then(finalValue => {
    // $ExpectType number
    finalValue;
});

pWaterfall([previousValue => `I ❤️ ${previousValue}`], 'unicorn').then(finalValue => {
    // $ExpectType string
    finalValue;
});
pWaterfall([previousValue => `I ❤️ ${previousValue}`, (str: string) => true], 'unicorn').then(
    finalValue => {
        // $ExpectType boolean
        finalValue;
    }
);
pWaterfall(
    [previousValue => `I ❤️ ${previousValue}`, (str: string) => true, (bool: boolean) => 1],
    'unicorn'
).then(finalValue => {
    // $ExpectType number
    finalValue;
});
pWaterfall(
    [
        previousValue => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
    ],
    'unicorn'
).then(finalValue => {
    // $ExpectType null
    finalValue;
});
pWaterfall(
    [
        previousValue => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
        (n: null) => undefined,
    ],
    'unicorn'
).then(finalValue => {
    // $ExpectType undefined
    finalValue;
});
pWaterfall(
    [
        previousValue => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
        (n: null) => undefined,
        (u: undefined) => ({}),
    ],
    'unicorn'
).then(finalValue => {
    // $ExpectType {}
    finalValue;
});
pWaterfall(
    [
        previousValue => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
        (n: null) => undefined,
        (u: undefined) => ({}),
        (o: {}) => 'foo',
    ],
    'unicorn'
).then(finalValue => {
    // $ExpectType string
    finalValue;
});
pWaterfall(
    [
        previousValue => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
        (n: null) => undefined,
        (u: undefined) => ({}),
        (o: {}) => 'foo',
        (s: string) => 1,
    ],
    'unicorn'
).then(finalValue => {
    // $ExpectType number
    finalValue;
});

pWaterfall(
    new Set([
        (previousValue: string) => `I ❤️ ${previousValue}`,
        (str: string) => true,
        (bool: boolean) => 1,
        (num: number) => null,
        (n: null) => undefined,
    ]),
    'unicorn'
).then(finalValue => {
    // $ExpectType any
    finalValue;
});
