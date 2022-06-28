import * as R from 'ramda';

() => {
    // tslint:disable:max-line-length
    // $ExpectType { <T>(transform: (value: T) => unknown, a: T, b: T): boolean; <T>(transform: (value: T) => unknown, a: T): (b: T) => boolean; <T>(transform: (value: T) => unknown): { (a: T, b: T): boolean; (a: T): (b: T) => boolean; }; }
    const eqBy = R.on(<T>(a: T, b: T) => a === b);
    // $ExpectType boolean
    eqBy(R.prop('a'), { b: 0, a: 1 }, { a: 1 }); // => true;

    // $ExpectType { <T>(transform: (value: T) => number, a: T, b: T): boolean; <T>(transform: (value: T) => number, a: T): (b: T) => boolean; <T>(transform: (value: T) => number): { (a: T, b: T): boolean; (a: T): (b: T) => boolean; }; }
    const eqBy2 = R.on((a: number, b) => a === b);
    // $ExpectType boolean
    eqBy2(R.prop('a'), { b: 0, a: 1 }, { a: 1 }); // => true;
    // tslint:enable:max-line-length

    // $ExpectType { (a: string, b: string): (list: readonly unknown[]) => boolean; (a: string): (b: string) => (list: readonly unknown[]) => boolean; }
    const containsInsensitive = R.on(R.contains, R.toLower);
    // $ExpectType (list: readonly unknown[]) => boolean
    containsInsensitive('o', 'FOO'); // => true

    // $ExpectType number
    R.on((a, b) => a + b, Number, '1', '2');
    // $ExpectType number
    R.on((a, b) => a + b, Number, String('1'))('2');
    // $ExpectType number
    R.on((a, b) => a + b, Number)('1', '2');
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number, '1', '2');
    // $ExpectType number
    R.on((a, b) => a + b, Number)('1')('2');
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number, String('1'))('2');
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number)('1', '2');
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number)('1')('2');
    // Using literals is a mistake

    // @ts-expect-error
    R.on((a, b) => a + b, Number, '1')('2');
    // @ts-expect-error
    R.on((a: number, b: number) => a + b)(Number, '1')('2');

    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number, '1', '2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number, '1')('2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number)('1', '2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number, '1', '2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number)('1')('2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number, '1')('2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number)('1', '2');
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number)('1')('2');

    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number, '1', '2');
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number, String('1'))('2');
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number)('1', '2');
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number)('1')('2');
};
