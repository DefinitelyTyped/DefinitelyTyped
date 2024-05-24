import { prng } from './prng';

describe('PRNG', () => {
  it('should generate a random number between 0 and 1', () => {
    const randomNumber = prng();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });

  it('should generate different random numbers on each call', () => {
    const randomNumber1 = prng();
    const randomNumber2 = prng();
    expect(randomNumber1).not.toBe(randomNumber2);
  });

  it('should generate random numbers within a specified range', () => {
    const min = 10;
    const max = 20;
    const randomNumber = prng(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it('should generate an integer when min and max are integers', () => {
    const min = 5;
    const max = 10;
    const randomNumber = prng(min, max);
    expect(Number.isInteger(randomNumber)).toBe(true);
  });
});