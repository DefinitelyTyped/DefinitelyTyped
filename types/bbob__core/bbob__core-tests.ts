// utils.d.ts

import { match, same } from "./utils";

// $ExpectType boolean
same(1, {});

// $ExpectType boolean
same(true, true);

// $ExpectType boolean
same(null, null);

// $ExpectType boolean
same([1, 2, 3], [1, 2, 3, 4]);

// $ExpectType boolean
same({ foo: true, bar: 'test' }, { foo: true, bar: 'test', ext: true });

type Before = {
    tag: string,
    one?: number,
    two?: number,
    three?: number,
    four?: number,
    five?: number,
    six?: number,
}

type After = {
    tag: string,
    one?: number,
    two?: number,
    three?: number,
    four?: number,
    five?: number,
    six?: number,
    pass?: number
}

const testArr: Before[] = [
    { tag: 'mytag1', one: 1 },
    { tag: 'mytag2', two: 1 },
    { tag: 'mytag3', three: 1 },
    { tag: 'mytag4', four: 1 },
    { tag: 'mytag5', five: 1 },
    { tag: 'mytag6', six: 1 },
];

function callback(node: Before): After {
    return {...node, pass: 1};
}

// $ExpectType (Before | After)[] 
const resultArr = match([{ tag: 'mytag1' }, { tag: 'mytag2' }], callback);
