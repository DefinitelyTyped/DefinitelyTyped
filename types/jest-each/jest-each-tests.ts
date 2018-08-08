import each from "jest-each";

const params = [[1, 0, 1], [1, 1, 0], ['1', 'two', 'three']];

each(params).test('', () => {});
each(params).it('', () => {});
each(params).test.only('', () => {});
each(params).it.only('', () => {});
each(params).fit('', () => {});
each(params).test.skip('', () => {});
each(params).it.skip('', () => {});
each(params).xit('', () => {});
each(params).xtest('', () => {});

each(params).describe('', () => {});
each(params).describe.only('', () => {});
each(params).fdescribe('', () => {});
each(params).describe.skip('', () => {});
each(params).xdescribe('', () => {});
