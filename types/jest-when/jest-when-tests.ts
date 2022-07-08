import { when, resetAllWhenMocks, verifyAllWhenMocksCalled } from 'jest-when';
import { toBeMocked } from './example-module';

jest.mock('./example-module');

describe('mock-when test', () => {
    it('basic usage:', () => {
        const fn = jest.fn();
        when(fn).calledWith(1).mockReturnValue('yay!');

        const result = fn(1);
        expect(result).toEqual('yay!');
    });

    it('Supports multiple args:', () => {
        const fn = jest.fn();
        when(fn).calledWith(1, true, 'foo').mockReturnValue('yay!');

        const result = fn(1, true, 'foo');
        expect(result).toEqual('yay!');
    });

    it('Supports jest matchers:', () => {
        const fn = jest.fn();
        when(fn)
            .calledWith(expect.anything(), expect.any(Number), expect.arrayContaining([false]))
            .mockReturnValue('yay!');

        const result = fn('whatever', 100, [true, false]);
        expect(result).toEqual('yay!');
    });

    it('is not a jest MockInstance', () => {
        const fn = jest.fn();

        // @ts-expect-error
        const mockInstance: jest.MockInstance<any, any> = when(fn);
    });

    it('is not a jest MockInstance when matchers provided', () => {
        const fn = jest.fn();

        // @ts-expect-error
        const mockInstance: jest.MockInstance<any, any> = when(fn).calledWith();
    });

    it('should support resetWhenMocks', () => {
        const fn = jest.fn();

        when(fn).resetWhenMocks();
    });

    it('should not support resetWhenMocks when matchers provided', () => {
        const fn = jest.fn();

        // @ts-expect-error
        when(fn).calledWith().resetWhenMocks();
    });

    it('should support resetWhenMocks when implementation mocked', () => {
        const fn = jest.fn();

        when(fn).mockImplementation(() => 1).resetWhenMocks();
    });

    it('Supports compound declarations:', () => {
        const fn = jest.fn();
        when(fn).calledWith(1).mockReturnValueOnce('no').mockReturnValue('yes');
        when(fn).calledWith(2).mockReturnValue('way?');
        when(fn).calledWith(3).mockResolvedValueOnce('no');
        when(fn).calledWith(3).mockResolvedValue('yes');
        when(fn).calledWith(4).mockRejectedValueOnce('no');
        when(fn).calledWith(4).mockRejectedValue('yes');

        expect(fn(1)).toEqual('no');
        expect(fn(1)).toEqual('yes');
        expect(fn(2)).toEqual('way?');
        expect(fn(3)).resolves.toEqual('no');
        expect(fn(3)).resolves.toEqual('yes');
        expect(fn(4)).rejects.toEqual('no');
        expect(fn(4)).rejects.toEqual('yes');
    });

    it('Supports chained calls:', () => {
        const fn = jest.fn();
        when(fn)
            .calledWith(1)
            .mockReturnValue('no')
            .calledWith(2)
            .mockReturnValue('way?')
            .calledWith(3)
            .mockReturnValue('yes')
            .calledWith(4)
            .mockReturnValue('way!');

        expect(fn(1)).toEqual('no');
        expect(fn(2)).toEqual('way?');
        expect(fn(3)).toEqual('yes');
        expect(fn(4)).toEqual('way!');
        expect(fn(5)).toEqual(undefined);
    });

    it('Supports chained calls with defaults:', () => {
        const fn = jest.fn();
        when(fn)
            .mockReturnValue('nice')
            .calledWith(1)
            .mockReturnValue('no')
            .calledWith(2)
            .mockReturnValue('way?')
            .calledWith(3)
            .mockReturnValue('yes')
            .calledWith(4)
            .mockReturnValue('way!');

        expect(fn(1)).toEqual('no');
        expect(fn(2)).toEqual('way?');
        expect(fn(3)).toEqual('yes');
        expect(fn(4)).toEqual('way!');
        expect(fn(5)).toEqual('nice');
    });

    it('Assert the args:', () => {
        const fn = jest.fn();
        when(fn).expectCalledWith(1).mockReturnValue('x');
        let testPassed = false;
        try {
            fn(2); // Will throw a helpful jest assertion error with args diff
        } catch (e) {
            testPassed = true;
        }
        expect(testPassed).toBeTruthy();
    });

    it('should not support all *Once functions without matchers', () => {
        const fn = jest.fn();
        // @ts-expect-error
        when(fn).mockReturnValueOnce(() => 1);
        // @ts-expect-error
        when(fn).mockResolvedValueOnce(() => 1);
        // @ts-expect-error
        when(fn).mockRejectedValueOnce(() => 1);
        // @ts-expect-error
        when(fn).mockImplementationOnce(() => 1);
    });

    it('should support for mockImplementation', () => {
        const fn = jest.fn();
        const expectValue = { a: 1, b: 2 };
        when(fn)
            .calledWith(expect.anything())
            .mockImplementation(() => expectValue);

        const result = fn('whatever');
        expect(result).toMatchObject(expectValue);
    });

    it('should support for mockImplementationOnce', () => {
        const fn = jest.fn();
        const expectValue = { a: 1, b: 2 };
        when(fn)
            .calledWith(expect.anything())
            .mockImplementationOnce(() => expectValue);

        const result = fn('whatever');
        const result2 = fn('whatever');
        expect(result).toMatchObject(expectValue);
        expect(result2).toEqual(undefined);
    });

    it('should support resetAllWhenMocks', () => {
        const fn = jest.fn(_ => 'initial');

        when(fn).expectCalledWith(1).mockReturnValueOnce('x');

        resetAllWhenMocks();

        expect(fn(1)).toEqual('initial');
    });

    it('should not support resetAllWhenMocks when matchers provided', () => {
        const fn = jest.fn();

        // @ts-expect-error
        when(fn).calledWith().resetAllWhenMocks();
    });

    it('should supper verifyAllWhenMocksCalled', () => {
        const fn1 = jest.fn();
        const fn2 = jest.fn();

        when(fn1).expectCalledWith(1).mockReturnValue('z');
        when(fn2).expectCalledWith(1).mockReturnValueOnce('x');
        when(fn2).expectCalledWith(1).mockReturnValueOnce('y');
        when(fn2).expectCalledWith(1).mockReturnValue('z');

        fn1(1);
        fn2(1);
        fn2(1);
        fn2(1);

        expect(verifyAllWhenMocksCalled).not.toThrow();
    });

    it('allows mocked modules', () => {
        when(toBeMocked).calledWith('another one').mockReturnValue('another one');

        expect(toBeMocked('another one')).toEqual('another one');
    });

    it('supports function matchers', () => {
        const fn = jest.fn<string, [{ [key: string]: boolean }, number]>();
        const allValuesTrue = when((arg: { [key: string]: boolean }) =>
            Object.keys(arg)
                .map(k => arg[k])
                .every(Boolean),
        );
        const numberDivisibleBy3 = when((arg: number) => arg % 3 === 0);

        when(fn).calledWith(allValuesTrue, numberDivisibleBy3).mockReturnValue('yay!');

        expect(fn({ foo: true, bar: true }, 9)).toEqual('yay!');
        expect(fn({ foo: true, bar: false }, 9)).toEqual(undefined);
        expect(fn({ foo: true, bar: false }, 13)).toEqual(undefined);

        when(fn)
            // @ts-expect-error
            .calledWith('foo', 123)
            .mockReturnValue('nay!');

        const badMatcher = when((arg: string) => arg.length === 5);
        when(fn)
            // @ts-expect-error
            .calledWith(badMatcher, numberDivisibleBy3)
            .mockReturnValue('nay!');
    });

    it('supports mixing function matchers and bare matchers', () => {
        const fn = jest.fn<string, [{ [key: string]: boolean }, number]>();
        const allValuesTrue = when((arg: { [key: string]: boolean }) =>
            Object.keys(arg)
                .map(k => arg[k])
                .every(Boolean),
        );

        when(fn).calledWith(allValuesTrue, 10).mockReturnValue('yay!');
        // @ts-expect-error
        when(fn).calledWith({ foo: true }, allValuesTrue);
        // @ts-expect-error
        when(fn).calledWith(10, allValuesTrue);
        // @ts-expect-error
        when(fn).calledWith(allValuesTrue, '10');
    });

    it('supports allArgs', () => {
        const fn = jest.fn<string, [] | [number] | [number, number]>();
        const allArgsMatcher = when.allArgs((args: number[]) => args.length === 1);

        when(fn).calledWith(allArgsMatcher).mockReturnValue('yay!');

        expect(fn()).toBe(undefined);
        expect(fn(123)).toBe('yay!');
        expect(fn(123, 456)).toBe(undefined);

        // allArgs matcher should be the only argument to calledWith/expectCalledWith
        when(fn)
            // @ts-expect-error
            .calledWith(allArgsMatcher, 456)
            .mockReturnValue('nay!');

        // @ts-expect-error
        when.allArgs((args: number) => args > 0);

        when.allArgs((args: number[], equals) => args.length > 0 && equals(args, expect.arrayContaining([123])));
    });

    it('supports default methods', () => {
        const fn = jest.fn<string, [string]>();

        when(fn).calledWith('foo').mockReturnValue('special').defaultReturnValue('default');

        expect(fn('foo')).toEqual('special');
        expect(fn('bar')).toEqual('default');

        function unsupportedCallError(...args: any[]): never {
            throw new Error(`Wrong args: ${JSON.stringify(args, null, 2)}`);
        }

        when(fn).calledWith('foo').mockReturnValue('bar').defaultImplementation(unsupportedCallError);
    });
});
