import { el, core } from './load';

// import * as colors from 'colors';

const messages: string[] = [];

export function print(message: string) {
    messages.push(message);
}

export function flush(endMessage?: string) {
    throw Error(`
${messages.reduce((e, m) => `${e}\n${m}`, '')}
${endMessage}`);
}

export function padEnd(s: string, n: number, c: string) {
    s = s.slice(0, n);
    c = c.slice(0, n - s.length);
    return s + c;
}

interface Serializable {
    toString(): string;
}

type Basic =
    number |
    string |
    bigint |
    boolean |
    { (...args: unknown[]): unknown } |
    any[] |
    object;

export type Testable = Serializable | Basic;

const logLimit = 40;

function log(
    passed: boolean,
    expression: Testable,
    success?: string,
    fail?: string) {
    expression =
        padEnd(
            expression
                .toString()
                .slice(0, logLimit),
            logLimit,
            ' ');

    if (success !== undefined && fail !== undefined) {
        success = success.slice(0, logLimit);
        fail = fail.slice(0, logLimit);
    } else {
        success = 'is true';
        fail = 'is false';
    }
    success = padEnd(success, logLimit, ' ');
    fail = padEnd(fail, logLimit, ' ');

    if (passed)
        print(`x: ${expression}\n${success}\n`);
    else
        flush(`FAIL:\n${expression}\n${success}\n`);

    return passed;
}

export function expect(x: Testable) {
    return {
        passes:
            (given: (y: Testable) => boolean) =>
                log(given(x),
                    x,
                    `passed ${given.name}`,
                    `didn't pass ${given.name}`),

        isANumber:
            () =>
                log(typeof x === 'number',
                    x,
                    'is a number',
                    'is not a number'),
        isAString:
            () =>
                log(typeof x === 'string',
                    x,
                    'is a string',
                    'is not a string'),
        isABoolean:
            () =>
                log(typeof x === 'boolean',
                    x,
                    'is a boolean',
                    'is not a boolean'),
        isABigInt:
            () =>
                log(typeof x === 'bigint',
                    x,
                    'is a bigint',
                    'is not a bigint'),
        isAFunction:
            () =>
                log(typeof x === 'function',
                    x,
                    'is a function',
                    'is not a function'),
        isASymbol:
            () =>
                log(typeof x === 'symbol',
                    x,
                    'is a symbol',
                    'is not a symbol'),
        isAnArray:
            () =>
                log(Array.isArray(x),
                    x,
                    'is an array',
                    'is not an array'),
        isAnObject:
            () =>
                log(typeof x === 'object',
                    x,
                    'is an object',
                    'is not an object'),

        isEqualTo:
            (y: Testable) =>
                log(x === y,
                    `${x} == ${y}`),
        isGreaterThan:
            (y: Testable) =>
                log(x > y,
                    `${x} > ${y}`),
        isGreaterOrEqualTo:
            (y: Testable) =>
                log(x >= y,
                    `${x} >= ${y}`),
        isLesserThan:
            (y: Testable) =>
                log(x < y,
                    `${x} < ${y}`),
        isLesserOrEqualTo:
            (y: Testable) =>
                log(x <= y,
                    `${x} <= ${y}`),

        isANode:
            () =>
                log(core.Node.isNode(x),
                    `${x} is a Node`),
        isANodeOfType:
            (t: el.core.NodeType) =>
                log(core.Node.isNode(x) &&
                    (x as any)._type === t,
                    `${x} is a Node of type ${t}`),
        hasNodeProps:
            (p: el.core.Props) =>
                log(core.Node.isNode(x) &&
                    Object.keys(p).reduce(
                        (r: boolean, k: string) =>
                            !r ? false :
                            (x as any)._props[k as keyof {}] === p[k],
                        true),
                    `${x} has props ${p}`),
        hasNodeChildren:
            (...c: el.core.Children) =>
                log(core.Node.isNode(x) &&
                    (c as el.core.Child[]).reduce(
                        (r: boolean, v: el.core.Child, i: number) =>
                            !r ? false :
                            (x as any)._children[i as keyof []] === v,
                        true),
                    `${x} has children ${c}`)
    };
}
