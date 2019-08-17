import * as R from "ramda";

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
