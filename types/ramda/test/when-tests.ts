import * as R from 'ramda';

() => {
    // $ExpectType (a: string) => string
    const truncate = R.when(
        (str: string) => str.length > 10,
        (str: string) => str.slice(0, 10) + '…',
    );

  // $ExpectType string
  truncate('12345'); // => '12345'
  // $ExpectType string
  truncate('0123456789ABC'); // => '0123456789…'

  // $ExpectType (a: number | undefined) => number | undefined
  const addOneIfNotNil = R.when<undefined | number, number>(
      x => x != null,
      R.add(1)
  );

    // $ExpectType (a: number) => string | number
    const testBroaderType = R.when(
        (x: number | undefined) => x != null,
        (x: number | string) => 'some text',
    );

    // $Expect (a: number) => (string | number)
    const testBroaderTypeCompatible = R.when<number, string>(
        (x: number | undefined) => x != null,
        (x: number | string) => 'some text',
    );

    // $ExpectError
    testBroaderType(undefined);

    // $ExpectError
    testBroaderType('some string');

    // $Expect (a: number) => number
    const testSimple = R.when(
        (x: number) => x != null,
        (x: number) => 1,
    );

    // Expect (a: ({a: string, b: number} & {a: string, c: number})) => (string | ({a: string, b: number} & {a: string, c: number}))
    const performActionOnObject = R.when(
        (x: { a: string; b: number }) => x != null,
        (x: { a: string; c: string }) => `a is: ${x.a}, c is: ${x.c}`,
    );

    // $Expect (a: {a: string, b: number, c: number}) => (string | {a: string, b: number, c: number})
    const performActionOnObjectCompatible = R.when<{ a: string; b: number; c: number }, string>(
        (x: { a: string; b: number }) => x != null,
        (x: { a: string; c: number }) => 'some text',
    );

    // $Expect string | ({a: string, b: number} & {a: string, c: number})
    const res = performActionOnObject({ a: 'some text', b: 1, c: 'another text' });

    // $ExpectError
    performActionOnObject({ a: 'some text', b: 1 });
};
