import 'jest';
import 'jest-extended';

declare const expect: jest.Expect;

expect([]).toEqual(expect.toBeArray());
