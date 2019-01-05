import { when } from 'jest-when';

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
    when(fn).calledWith(
      expect.anything(),
      expect.any(Number),
      expect.arrayContaining([false])
    ).mockReturnValue('yay!');

    const result = fn('whatever', 100, [true, false]);
    expect(result).toEqual('yay!');
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
      .calledWith(1).mockReturnValue('no')
      .calledWith(2).mockReturnValue('way?')
      .calledWith(3).mockReturnValue('yes')
      .calledWith(4).mockReturnValue('way!');

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
      .calledWith(1).mockReturnValue('no')
      .calledWith(2).mockReturnValue('way?')
      .calledWith(3).mockReturnValue('yes')
      .calledWith(4).mockReturnValue('way!');

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
});
