import * as R from "ramda";

function double(x: number): number {
    return x + x;
}

class F {
    [k: string]: string;
    x = "X";
    y = "Y";
}
class F2 {
    a = 100;
    y = 1;

    x() {
    }

    z() {
    }
}

/** R.__ */
() => {
  R.concat(R.__, [4, 5, 6])([1, 2, 3]); // [1, 2, 3, 4, 5, 6]
  R.concat(R.__)([4, 5, 6], [1, 2, 3]); // [1, 2, 3, 4, 5, 6]

  R.contains(R.__, [1, 2, 3])(3); // true
  R.contains<number>(R.__)([1, 2, 3], 3); // true

  R.divide(R.__)(2, 42); // 21
  R.divide(R.__, 2)(42); // 21

  R.gt(R.__, 2)(10); // true
  R.gt(R.__)(2, 10); // true

  R.gte(R.__, 6)(2); // false
  R.gte(R.__)(6, 2); // false

  R.has(R.__, {x: 0, y: 0})('x'); // true;
  R.has(R.__)({x: 0, y: 0}, 'x'); // true;

  R.lt(R.__, 5)(10); // false
  R.lt(R.__)(5, 10); // false

  R.lte(R.__, 2)(1); // true
  R.lte(R.__)(2, 1); // true

  R.mathMod(R.__, 12)(15); // 3
  R.mathMod(R.__)(12, 15); // 3

  R.modulo(R.__, 2)(42); // 0
  R.modulo(R.__)(2, 42); // 0

  R.merge(R.__, {x: 0})({x: 5, y: 2}); // {x: 0, y: 2}
  R.merge(R.__)({x: 0}, {x: 5, y: 2}); // {x: 0, y: 2}

  R.subtract(R.__, 5)(17); // 12
  R.subtract(R.__)(5, 17); // 12
};

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.is(Array), R.of);
    const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
    const b: number[] = coerceArray(1);         // => [1]
};

() => {
    const a: number = R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
};

() => {
    const truncate = R.when(
        R.propSatisfies(R.flip(R.gt)(10), "length"),
        R.pipe<string, string, string[], string>(R.take(10), R.append("…") as (wrong: any) => string[], R.join(""))
    );
    const a: string = truncate("12345");         // => '12345'
    const b: string = truncate("0123456789ABC"); // => '0123456789…'
};

function square(x: number) {
    return x * x;
}
// Adds any number of arguments together
function addAll() {
    return 0;
}

// Basic example
R.useWith(addAll, [double, square]);

/*********************
 * List category
 */
() => {
    const headLens = R.lensIndex(0);
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
};

() => {
    function strEq(a: any, b: any) {
        return String(a) === String(b);
    }

    R.uniqWith(strEq, [1, "1", 2, 1]); // => [1, 2]
    R.uniqWith(strEq)([1, "1", 2, 1]); // => [1, 2]
    R.uniqWith(strEq)([{}, {}]);       // => [{}]
    R.uniqWith(strEq)([1, "1", 1]);    // => [1]
    R.uniqWith(strEq)(["1", 1, 1]);    // => ['1']
};

() => {
    R.xprod([1, 2], ["a", "b"]); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    R.xprod([1, 2])(["a", "b"]); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
};

() => {
    R.zip([1, 2, 3], ["a", "b", "c"]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    R.zip([1, 2, 3])(["a", "b", "c"]); // => [[1, 'a'], [2, 'b'], [3, 'c']]

    type TNames = string[];
    const fullNames: TNames[] = R.zip<string, string>(["John", "Juliet", "Melanie"], ["Titor", "Burke", "Cross"]);
    const fullNames2: TNames[] = R.zip(["John", "Juliet", "Melanie"])(["Titor", "Burke", "Cross"]);

    type TNameAge = [string, number];
    const namesAndAges: TNameAge[] = R.zip<string, number>(["John", "Juliet", "Melanie"], [21, 22, 23]);
    const namesAndAges2: TNameAge[] = R.zip(["John", "Juliet", "Melanie"])([21, 22, 23]);
};

() => {
    R.zipObj(["a", "b", "c"], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
    R.zipObj(["a", "b", "c"])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
    R.zipObj([1, 2, 3], ['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
    R.zipObj([1, 2, 3])(['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
};

() => {
    function f(x: number, y: string) {
        // ...
    }

    R.zipWith(f, [1, 2, 3], ["a", "b", "c"]); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    R.zipWith(f)([1, 2, 3], ["a", "b", "c"]); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    R.zipWith(f, [1, 2, 3])(["a", "b", "c"]); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
};

/*****************************************************************
 * Object category
 */

() => {
    const xLens = R.lens(R.prop("x"), R.assoc("x"));
    R.view(xLens, {x: 1, y: 2});            // => 1
    R.view(xLens)({x: 1, y: 2});            // => 1
};

() => {
    const headLens = R.lensIndex(0);
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
};

() => {
    const xLens = R.lensProp("x");
    R.view(xLens, {x: 1, y: 2});            // => 1
};

() => {
    const xyLens  = R.lensPath(["x", 0, "y"]);
    const testObj = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.view(xyLens, testObj);            // => 2
};

() => {
    interface A {
        a: string;
        b: string;
    }
    const a1: A = { a: 'something', b: 'else' };
    const v1 = R.values(a1);

    const a = R.values({a: 1, b: 2, c: 3}); // => [1, 2, 3] (number[])
    const addition = a[0] + a[1];

    const b = R.values({a: 1, b: 'something'}); // b = (string|number)[]
    const c = R.values({1: 3});
    // const d = R.values('something');
};

() => {
    const f   = new F();
    const a = R.valuesIn(f); // => ['X', 'Y']
};

() => {
    const spec        = {x: 2};
    const x1: boolean = R.where(spec, {w: 10, x: 2, y: 300}); // => true
    const x2: boolean = R.where(spec, {x: 1, y: "moo", z: true}); // => false
    const x3: boolean = R.where(spec)({w: 10, x: 2, y: 300}); // => true
    const x4: boolean = R.where(spec)({x: 1, y: "moo", z: true}); // => false

    // There's no way to represent the below functionality in typescript
    // per http://stackoverflow.com/a/29803848/632495
    // will need a work around.

    const spec2 = {
        x: (val: number, obj: any) => val + obj.y > 10
    };
    R.where(spec2, {x: 2, y: 7}); // => false
    R.where(spec2, {x: 3, y: 8}); // => true
};

() => {
    // pred :: Object -> Boolean
    const pred = R.whereEq({a: 1, b: 2});
    pred({a: 1});              // => false
    pred({a: 1, b: 2});        // => true
    pred({a: 1, b: 2, c: 3});  // => true
    pred({a: 1, b: 1});        // => false
    R.whereEq({a: "one"}, {a: "one"}); // => true
};

() => {
    const a: number[] = R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
};

() => {
    interface A {
        a: number;
    }

    interface B {
        b: number;
    }

    const As = [{ a: 1 }, { a: 2 }];
    const AsToBs: (a: A[]) => B[] = R.map((a: A): B => ({
        b: a.a,
    }));

    function test(): B[] {
        return R.into<A, B>([], AsToBs, As);
    }
    test(); // => [{ b: 1 }, { b: 2 }]
};
