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

function log<T extends boolean>(
    passed: T,
    expression: Serializable | Basic,
    success?: string,
    fail?: string)
{
    expression =
        expression
            .toString()
            .slice(0, 20)
            .padEnd(20, '                    ');

    if (success !== undefined && fail !== undefined)
    {
        success = success.slice(0, 20);
        fail = fail.slice(0, 20);
    }
    else
    {
        success = 'is true';
        fail = 'is false';
    }
    success = success.padEnd(20, '                    ');
    fail = fail.padEnd(20, '                    ');

    console.log(
        passed ?
        `x: ${expression} ${success}` :
        `F: ${expression} ${fail}`);

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
    };
}
