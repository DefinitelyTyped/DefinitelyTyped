import * as using from 'jasmine-data-provider';
import 'jasmine';

declare const calculator: any;

describe('test subtraction with data provider - direct array', () => {
    using([{ a: 5, b: 2, expected: 3 }, { a: 25, b: 26, expected: -1 }], (data) => {
        it('should calc with operator -', () => {
            const result = calculator.calc(data.a, data.b, '-');

            expect(result).toEqual(data.expected);
        });
    });
});

describe('test addition with data provider - provider function', () => {
    function plusProvider() {
        return [
            { a: 2, b: 3, expected: 5 },
            { a: '14', b: 15, expected: 29 },
            { a: 12, b: '13', expected: 25 },
            { a: '22', b: '13', expected: 35 },
        ];
    }

    using(plusProvider, (data) => {
        it('should calc with operator +', () => {
            const result = calculator.calc(data.a, data.b, '+');

            expect(result).toEqual(data.expected);
        });
    });
});

describe('My fantastic test', () => {
    const objectDataProvider = {
        'First one is awesome!': { a: 6, b: 3, expected: 9 },
        'Second test should fail': { a: 8, b: 1, expected: 10 }
    };

    using(objectDataProvider, (data, description) => {
        it(description, () => {
            const result = calculator.calc(data.a, data.b, '+');

            expect(result).toEqual(data.expected);
        });
    });
});
