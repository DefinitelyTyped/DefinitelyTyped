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

export function expect<T extends Serializable | Basic>(x: T)
{
    return {
        passes:
            (given: (y: T) => boolean) =>
                console.log(
                    given(x) ?

                    'x: ' + x.toString() + ' passed \"' +
                    given.toString().slice(0, 20) + '\"...' :

                    'F: ' + x.toString() + ' did not pass \"' +
                    given.toString().slice(0, 20) + '\"...'),

        isANumber:
            () =>
                console.log(
                    typeof x === 'number' ?
                    'x: ' + x.toString() + ' is a number' :
                    'F: ' + x.toString() + ' is not a number'),
        isAString:
            () =>
                console.log(
                    typeof x === 'string' ?
                    'x: ' + x.toString() + ' is a string' :
                    'F: ' + x.toString() + ' is not a string'),
        isABoolean:
            () =>
                console.log(
                    typeof x === 'boolean' ?
                    'x: ' + x.toString() + ' is a boolean' :
                    'F: ' + x.toString() + ' is not a boolean'),
        isABigInt:
            () =>
                console.log(
                    typeof x === 'bigint' ?
                    'x: ' + x.toString() + ' is a bigint.' :
                    'F: ' + x.toString() + ' is not a bigint.'),
        isAFunction:
            () =>
                console.log(
                    typeof x === 'function' ?
                    'x: ' + x.toString() + ' is a function.' :
                    'F: ' + x.toString() + ' is not a function.'),
        isASymbol:
            () =>
                console.log(
                    typeof x === 'symbol' ?
                    'x: ' + x.toString() + ' is a symbol.' :
                    'F: ' + x.toString() + ' is not a symbol.'),
        isAnArray:
            () =>
                console.log(
                    Array.isArray(x) ?
                    'x: ' + x.toString() + ' is an array.' :
                    'F: ' + x.toString() + ' is not an array.'),
        isAnObject:
            () =>
                console.log(
                    typeof x === 'object' ?
                    'x: ' + x.toString() + ' is an object.' :
                    'F: ' + x.toString() + ' is not an object.'),

        isEqualTo:
            (y: T) =>
                console.log(
                    x == y ?
                    'x: ' + x.toString() + ' == ' + y.toString() :
                    'F: ' + x.toString() + ' != ' + y.toString()),
        isGreaterThan:
            (y: T) =>
                console.log(
                    x > y ?
                    'x: ' + x.toString() + ' > ' + y.toString() :
                    'F: ' + x.toString() + ' <= ' + y.toString()),
        isGreaterOrEqualTo:
            (y: T) =>
                console.log(
                    x >= y ?
                    'x: ' + x.toString() + ' >= ' + y.toString() :
                    'F: ' + x.toString() + ' < ' + y.toString()),
        isLesserThan:
            (y: T) =>
                console.log(
                    x < y ?
                    'x: ' + x.toString() + ' < ' + y.toString() :
                    'F: ' + x.toString() + ' >= ' + y.toString()),
        isLesserOrEqualTo:
            (y: T) =>
                console.log(
                    x <= y ?
                    'x: ' + x.toString() + ' <= ' + y.toString() :
                    'F: ' + x.toString() + ' > ' + y.toString()),
    };
}
