import { when, resetAllWhenMocks, verifyAllWhenMocksCalled } from 'jest-when';

describe('mock-when test', () => {
    it('basic usage:', () => {
      const fn = jest.fn();
      when(fn)
        .calledWith(1)
        .mockReturnValue('yay!');

      const result = fn(1);
      expect(result).toEqual('yay!');
    });

    it('Supports multiple args:', () => {
      const fn = jest.fn();
      when(fn)
        .calledWith(1, true, 'foo')
        .mockReturnValue('yay!');

      const result = fn(1, true, 'foo');
      expect(result).toEqual('yay!');
    });

    it('Supports jest matchers:', () => {
      const fn = jest.fn();
      when(fn)
        .calledWith(
          expect.anything(),
          expect.any(Number),
          expect.arrayContaining([false]),
        )
        .mockReturnValue('yay!');

      const result = fn('whatever', 100, [true, false]);
      expect(result).toEqual('yay!');
    });

    it('Supports compound declarations:', () => {
      const fn = jest.fn();
      when(fn)
        .calledWith(1)
        .mockReturnValueOnce('no')
        .mockReturnValue('yes');
      when(fn)
        .calledWith(2)
        .mockReturnValue('way?');
      when(fn)
        .calledWith(3)
        .mockResolvedValueOnce('no');
      when(fn)
        .calledWith(3)
        .mockResolvedValue('yes');
      when(fn)
        .calledWith(4)
        .mockRejectedValueOnce('no');
      when(fn)
        .calledWith(4)
        .mockRejectedValue('yes');

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
      when(fn)
        .expectCalledWith(1)
        .mockReturnValue('x');
      let testPassed = false;
      try {
        fn(2); // Will throw a helpful jest assertion error with args diff
      } catch (e) {
        testPassed = true;
      }
      expect(testPassed).toBeTruthy();
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

      when(fn)
        .expectCalledWith(1)
        .mockReturnValueOnce('x');

      resetAllWhenMocks();

      expect(fn(1)).toEqual('initial');
    });

    it('should supper verifyAllWhenMocksCalled', () => {
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      when(fn1)
        .expectCalledWith(1)
        .mockReturnValue('z');
      when(fn2)
        .expectCalledWith(1)
        .mockReturnValueOnce('x');
      when(fn2)
        .expectCalledWith(1)
        .mockReturnValueOnce('y');
      when(fn2)
        .expectCalledWith(1)
        .mockReturnValue('z');

      fn1(1);
      fn2(1);
      fn2(1);
      fn2(1);

      expect(verifyAllWhenMocksCalled).not.toThrow();
    });
});
