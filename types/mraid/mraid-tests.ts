import { MRAID1, MRAID2, MRAID3 }  from 'mraid';
describe('MRAID Versions', () => {
  const identity = (property: MRAID1| MRAID2 | MRAID3 ): MRAID1| MRAID2 | MRAID3  => property;
  test('Should return mraid version', () => {
    const testVersion: Partial<MRAID1> = { getVersion: jest.fn( () =>  "3.0")};
    expect(identity(testVersion as MRAID1))
    .toEqual(testVersion);
  });
})