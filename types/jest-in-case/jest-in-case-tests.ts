declare const global: any;

import cases = require("jest-in-case");

function add(augend: number, addend: number) {
    return augend + addend;
}

function subtract(minuend: number, subtrahend: number) {
    return minuend - subtrahend;
}

beforeEach(() => {
    jest.spyOn(global, 'describe').mockImplementation((title, fn) => fn());
    jest.spyOn(global, 'test').mockImplementation((name, fn) => fn());
    global.test.skip = jest.fn((name, fn) => fn());
    global.test.only = jest.fn((name, fn) => fn());
});

afterEach(() => {
    global.describe.mockRestore();
    global.test.mockRestore();
});

test('array', () => {
    const title = 'add(augend, addend)';

    const tester = jest.fn(opts => {
        expect(add(opts.augend, opts.addend)).toBe(opts.total);
    });

    const testCases = [
        { name: '1 + 1 = 2', augend: 1, addend: 1, total: 2 },
        { name: '2 + 1 = 3', augend: 2, addend: 1, total: 3 },
        { name: '3 + 1 = 4', augend: 3, addend: 1, total: 4 },
    ];

    cases(title, tester, testCases);

    expect(global.describe).toHaveBeenCalledTimes(1);
    expect(global.test).toHaveBeenCalledTimes(3);
    expect(tester).toHaveBeenCalledTimes(3);

    expect(global.describe.mock.calls[0][0]).toBe(title);
    expect(global.test.mock.calls[0][0]).toBe(testCases[0].name);
    expect(global.test.mock.calls[1][0]).toBe(testCases[1].name);
    expect(global.test.mock.calls[2][0]).toBe(testCases[2].name);
    expect(global.test.mock.calls[0][1]).toHaveLength(0);
    expect(global.test.mock.calls[1][1]).toHaveLength(0);
    expect(global.test.mock.calls[2][1]).toHaveLength(0);
    expect(tester).toHaveBeenCalledWith(testCases[0]);
    expect(tester).toHaveBeenCalledWith(testCases[1]);
    expect(tester).toHaveBeenCalledWith(testCases[2]);
});

test('object', () => {
    jest.spyOn(global, 'describe').mockImplementation((title, fn) => fn());
    jest.spyOn(global, 'test').mockImplementation((name, fn) => fn());

    const title = 'add(augend, addend)';

    const tester = jest.fn(opts => {
        expect(subtract(opts.minuend, opts.subtrahend)).toBe(opts.difference);
    });

    const testCases = {
        '1 - 1 = 0': { minuend: 1, subtrahend: 1, difference: 0 },
        '2 - 1 = 1': { minuend: 2, subtrahend: 1, difference: 1 },
        '3 - 1 = 2': { minuend: 3, subtrahend: 1, difference: 2 },
    };

    cases(title, tester, testCases);

    expect(global.describe).toHaveBeenCalledTimes(1);
    expect(global.test).toHaveBeenCalledTimes(3);
    expect(tester).toHaveBeenCalledTimes(3);

    expect(global.describe.mock.calls[0][0]).toBe(title);
    expect(global.test.mock.calls[0][0]).toBe('1 - 1 = 0');
    expect(global.test.mock.calls[1][0]).toBe('2 - 1 = 1');
    expect(global.test.mock.calls[2][0]).toBe('3 - 1 = 2');
    expect(global.test.mock.calls[0][1]).toHaveLength(0);
    expect(global.test.mock.calls[1][1]).toHaveLength(0);
    expect(global.test.mock.calls[2][1]).toHaveLength(0);
    expect(tester.mock.calls[0][0]).toMatchObject(testCases['1 - 1 = 0']);
    expect(tester.mock.calls[1][0]).toMatchObject(testCases['2 - 1 = 1']);
    expect(tester.mock.calls[2][0]).toMatchObject(testCases['3 - 1 = 2']);
});

test('no names', () => {
    cases('foo', () => { }, [
        {},
        {},
    ]);

    expect(global.test.mock.calls[0][0]).toBe('case: 1');
    expect(global.test.mock.calls[1][0]).toBe('case: 2');
});

test('only', () => {
    cases('foo', () => { }, [
        {},
        { only: true },
    ]);

    expect(global.test.mock.calls[0][0]).toBe('case: 1');
    expect(global.test.only.mock.calls[0][0]).toBe('case: 2');
});

test('skip', () => {
    cases('foo', () => { }, [
        {},
        { skip: true },
    ]);

    expect(global.test.mock.calls[0][0]).toBe('case: 1');
    expect(global.test.skip.mock.calls[0][0]).toBe('case: 2');
});
