import { el, core } from './load';

interface Serializable
{
    toString(): string;
}

type Basic =
    number |
    string |
    bigint |
    boolean |
    symbol |
    { (...args: unknown[]): unknown } |
    any[] |
    object;

const logLimit = 40;

function log<T extends boolean>(
    passed: T,
    expression: Serializable | Basic,
    success?: string,
    fail?: string)
{
    expression =
        expression
            .toString()
            .slice(0, logLimit)
            .padEnd(logLimit, ' ');

    if (success !== undefined && fail !== undefined)
    {
        success = success.slice(0, logLimit);
        fail = fail.slice(0, logLimit);
    }
    else
    {
        success = 'is true';
        fail = 'is false';
    }
    success = success.padEnd(logLimit, ' ');
    fail = fail.padEnd(logLimit, ' ');

    console.log(
        passed ?
        `x: ${expression}\n${success}\n` :
        `F: ${expression}\n${fail}\n`);

    return passed;
}

export function expect<T extends Serializable | Basic>(x: T)
{
    return {
        passes:
            (given: (y: T) => boolean) =>
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
            (y: T) =>
                log(x === y,
                    `${x} == ${y}`),
        isGreaterThan:
            (y: T) =>
                log(x > y,
                    `${x} > ${y}`),
        isGreaterOrEqualTo:
            (y: T) =>
                log(x >= y,
                    `${x} >= ${y}`),
        isLesserThan:
            (y: T) =>
                log(x < y,
                    `${x} < ${y}`),
        isLesserOrEqualTo:
            (y: T) =>
                log(x <= y,
                    `${x} <= ${y}`),

        isANode:
            () =>
                log(core.Node.isNode(x),
                    `${x} is a Node`),
        isANodeOfType:
            (t: el.core.NodeType) =>
                log((() =>
                    {
                        if (core.Node.isNode(x))
                            return (x as el.core.Node)._type === t;

                        return false;
                    })(),
                    `${x} is a Node of type ${t}`),
        hasNodeProps:
            (p: {}) =>
                log((() =>
                    {
                        if (!core.Node.isNode(x))
                            return Object.keys(p).reduce(
                                (r, k) =>
                                    !r ? false :
                                    (x as el.core.Node)._props[k as keyof {}] ===
                                    p[k as keyof typeof p],
                                true);

                        return false;
                    })(),
                    `${x} has props ${p}`),
        hasNodeChildren:
            (c: number[]) =>
                log((() =>
                    {
                        if (core.Node.isNode(x))
                            return (x as el.core.Node)._children === c;

                        return false;
                    })(),
                    `${x} has children ${c}`),
    };
}
