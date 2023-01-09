import co = require('co');

function* gen(
    num: number,
    str: string,
    arr: number[],
    obj: object,
    fun: () => void,
): Generator<undefined, number, undefined> {
    return num;
}

co(gen, 42, 'forty-two', [42], { value: 42 }, () => {})
    .then(
        (num: number) => {},
        (err: Error) => {},
    )
    .catch((err: Error) => {});

co.default(gen, 42, 'forty-two', [42], { value: 42 }, () => {})
    .then(
        (num: number) => {},
        (err: Error) => {},
    )
    .catch((err: Error) => {});

co.co(gen, 42, 'forty-two', [42], { value: 42 }, () => {})
    .then(
        (num: number) => {},
        (err: Error) => {},
    )
    .catch((err: Error) => {});

co.wrap(gen)(42, 'forty-two', [42], { value: 42 }, () => {})
    .then(
        (num: number) => {},
        (err: Error) => {},
    )
    .catch((err: Error) => {});

// @ts-expect-error
co(gen, 42, 'forty-two', [42], { value: 42 }, () => {}).then((str: string) => {});

// @ts-expect-error
co.wrap(gen)();

// @ts-expect-error
co.wrap(gen)('forty-two');

// example from https://github.com/tj/co/blob/master/Readme.md
function* gen1(): Generator<Promise<boolean>, boolean, boolean> {
    const result = yield Promise.resolve(true);
    return result;
}
co.co(gen1)
    .then(
        (result: boolean) => {},
        (err: Error) => {},
    )
    .catch((err: Error) => {});
