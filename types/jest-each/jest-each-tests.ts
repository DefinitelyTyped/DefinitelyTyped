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

each(params).test('', (a: number, b: string, c: object) => {});
each(params).it('', (a: number, b: string, c: object) => {});
each(params).test.only('', (a: number, b: string, c: object) => {});
each(params).it.only('', (a: number, b: string, c: object) => {});
each(params).fit('', (a: number, b: string, c: object) => {});
each(params).test.skip('', (a: number, b: string, c: object) => {});
each(params).it.skip('', (a: number, b: string, c: object) => {});
each(params).xit('', (a: number, b: string, c: object) => {});
each(params).xtest('', (a: number, b: string, c: object) => {});

each(params).describe('', (a: number, b: string, c: object) => {});
each(params).describe.only('', (a: number, b: string, c: object) => {});
each(params).fdescribe('', (a: number, b: string, c: object) => {});
each(params).describe.skip('', (a: number, b: string, c: object) => {});
each(params).xdescribe('', (a: number, b: string, c: object) => {});
