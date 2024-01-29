import * as R from "ramda";

(() => {
    // $ExpectType { (a: string): (b: string) => boolean; (a: string, b: string): boolean; }
    const containsInsensitive = R.on(R.includes, R.toLower);
    // $ExpectType boolean
    containsInsensitive("o", "FOO"); // => true

    // $ExpectType number
    R.on((a, b) => a + b, Number, "1", "2");
    // $ExpectType number
    R.on((a, b) => a + b, Number, String("1"))("2");
    // $ExpectType number
    R.on((a, b) => a + b, Number)("1", "2");
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number, "1", "2");
    // $ExpectType number
    R.on((a, b) => a + b, Number)("1")("2");
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number, String("1"))("2");
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number)("1", "2");
    // $ExpectType number
    R.on((a: number, b: number) => a + b)(Number)("1")("2");
    // Using literals is a mistake

    // @ts-expect-error
    R.on((a, b) => a + b, Number, "1")("2");
    // @ts-expect-error
    R.on((a: number, b: number) => a + b)(Number, "1")("2");

    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number, "1", "2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number, "1")("2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number)("1", "2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number, "1", "2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b), Number)("1")("2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number, "1")("2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number)("1", "2");
    // $ExpectType string
    R.on<string, number, string>((a, b) => String(a + b))(Number)("1")("2");

    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number, "1", "2");
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number, String("1"))("2");
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number)("1", "2");
    // $ExpectType string
    R.on<number, string>((a, b) => String(a + b))(Number)("1")("2");
});
