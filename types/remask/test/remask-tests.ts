import { mask, unmask } from 'remask';

describe('remask', () => {
  it('should mask a value using a pattern', () => {
    const value = '1234567890';
    const pattern = '(99) 9999-9999';

    expect(mask(value, pattern)).toBe('(12) 3456-7890');
  });

  it('should unmask a value', () => {
    const value = '(12) 3456-7890';

    expect(unmask(value)).toBe('1234567890');
  });
});