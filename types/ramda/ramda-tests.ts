import * as R from './index';

declare let console: any;

let double = (x: number): number => x + x;

let shout = function(x: number): string {
    return x >= 10
        ? 'big'
        : 'small';
};

// check type information is not lost for lists
let onlyNumberList = function(xs: number[]): number[] {
  return xs;
};

// check type information is not lost for simple objects
let onlyNumberObj = function(xs: {[key: string]: number}): {[key: string]: number} {
  return xs;
};


class F {
    x = 'X';
    y = 'Y';
}
class F2 {
    a = 100;
    y = 1;
    x() {};
    z() {};
}

// isArrayLike
() => {
    // $ExpectType boolean
    R.isArrayLike('a');
    // $ExpectType boolean
    R.isArrayLike([1,2,3]);
    // $ExpectType boolean
    R.isArrayLike([]);
};

// propIs
(() => {
    // $ExpectType boolean
    R.propIs(Number, 'x', {x: 1, y: 2});  // => true
    // $ExpectType boolean
    R.propIs(Number, 'x')({x: 1, y: 2});  // => true
    // $ExpectType boolean
    R.propIs(Number)('x', {x: 1, y: 2});  // => true
    // $ExpectType boolean
    R.propIs(Number)('x')({x: 1, y: 2});  // => true
    // $ExpectType boolean
    R.propIs(Number, 'x', {x: 'foo'});    // => false
    // $ExpectError Argument of type 'x' is not assignable to parameter of type 'never'.`, because 'x' is not in `{}`.
    R.propIs(Number, 'x', {});            // => false
});

// type
(() => {
    // $ExpectType string
    R.type({}); // => 'Object'
    // $ExpectType string
    R.type(1); // => 'Number'
    // $ExpectType string
    R.type(false); // => 'Boolean'
    // $ExpectType string
    R.type('s'); // => 'String'
    // $ExpectType string
    R.type(null); // => 'Null'
    // $ExpectType string
    R.type([]); // => 'Array'
    // $ExpectType string
    R.type(/[A-z]/); // => 'RegExp'
});

// curry
() => {
    const addTwo = R.curry((x: number, y: number) => x + y);
    // $ExpectType (v2: number) => number
    addTwo(3);
    // $ExpectType number
    addTwo(3)(1);
    const addThree = R.curry((x: number, y: number, z: number) => x + y + z);
    // $ExpectType number
    addThree(3, 2, 1);
    // $ExpectType number
    addThree(3)(2)(1);
    // $ExpectType (v3: number) => number
    addThree(3, 2);
    // $ExpectType (v2: number) => number
    addThree(3)(2);
    // $ExpectType CurriedFunction2<number, number, number>
    addThree(3);

    const xy = R.curry(<X,Y>(x: X, y: Y) => ({ x, y }));
    // $ExpectType <Y>(v2: Y) => { x: number; y: Y; }
    xy(3);
    // $ExpectType { x: number; y: number; }
    xy(3)(1);
    const xyz = R.curry(<X,Y,Z>(x: X, y: Y, z: Z) => ({ x, y, z }));
    // $ExpectType { x: number; y: number; z: number; }
    xyz(3, 2, 1);
    // $ExpectType { x: number; y: number; z: number; }
    xyz(3)(2)(1);
    // $ExpectType <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
    xyz(3, 2);
    // $ExpectType <Z>(v3: Z) => ({ x: number; y: number; z: Z; })
    xyz(3)(2);
    // $ExpectType <Y, Z>(v2: Y, v3: Z) => ({ x: number; y: Y; z: Z; })
    xyz(3);
};

// unary, binary, nAry
() => {
    let takesNoArg = function() { return true; };
    let takesOneArg = function(a: number) { return [a]; };
    let takesTwoArgs = function(a: number, b: number) { return [a, b]; };
    let takesThreeArgs = function(a: number, b: number, c: number) { return [a, b, c]; };

    let addFourNumbers = function(a: number, b: number, c: number, d: number): number {
      return a + b + c + d;
    };

    const curriedFourNumbers = R.curry(addFourNumbers);
    // $ExpectType CurriedFunction4<number, number, number, number, number>
    curriedFourNumbers;
    // $ExpectType CurriedFunction3<number, number, number, number>
    curriedFourNumbers(1);
    // $ExpectType CurriedFunction2<number, number, number>
    curriedFourNumbers(1)(2);
    // $ExpectType <T1,R>(v1: T1) => R
    curriedFourNumbers(1)(2)(3);
    // $ExpectType <T1,R>(v1: T1) => R
    curriedFourNumbers(1,2,4);
    // $ExpectType number
    curriedFourNumbers(1)(2)(3)(4);
    // $ExpectType number
    curriedFourNumbers(1,2)(3,4);
    // $ExpectType number
    curriedFourNumbers(1,2,3)(4);

    // $ExpectType () => boolean
    R.nAry(0, takesNoArg);
    // $ExpectType () => number[]
    R.nAry(0, takesOneArg);
    // $ExpectType (a: number) => number[]
    R.nAry(1, takesTwoArgs);
    // $ExpectType (a: number) => number[]
    R.nAry(1, takesThreeArgs);

    // $ExpectType (a: number) => number[]
    R.unary(takesOneArg);
    // $ExpectType (a: number) => number[]
    R.unary(takesTwoArgs);
    // $ExpectType (a: number) => number[]
    R.unary(takesThreeArgs);

    // $ExpectType (a: number, b: number) => number[]
    R.binary(takesTwoArgs);
    // $ExpectType (a: number, b: number) => number[]
    R.binary(takesThreeArgs);

    let addTwoNumbers = function(a: number, b: number) { return a + b; };
    // $ExpectType CurriedFunction2<number, number, number>
    let addTwoNumbersCurried = R.curry(addTwoNumbers);

    let inc = addTwoNumbersCurried(1);
    // $ExpectType number
    inc(2);
    // $ExpectType number
    addTwoNumbersCurried(2,3);
};

// uncurry
() => {
    const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN<number>(4, addFour);
    // $ExpectType number
    uncurriedAddFour(1, 2, 3, 4); // => 10
};

// unless
() => {
    // $ExpectType <a>(v: a|[a]) => [a]
    const coerceArray = R.unless(R.isArrayLike, R.of);
    // $ExpectType number[]
    coerceArray([1, 2, 3]); // => [1, 2, 3]
    // $ExpectType number[]
    coerceArray(1);         // => [1]
};

// nthArg
(() => {
    // $ExpectType string
    R.nthArg(1)('a', 'b', 'c'); // => 'b'
    // $ExpectType string
    R.nthArg(-1)('a', 'b', 'c'); // => 'c'
});

// unapply
() => {
    // $ExpectType (...args: string[])=>string
    R.unapply(JSON.stringify);
    // $ExpectType string
    R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]'
};

// until
() => {
    // $ExpectType number
    R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
};

// propSatisfies
() => {
    const truncate = R.when(
        R.propSatisfies(R.flip(R.gt)(10), 'length'),
        R.pipe(R.take(10), R.append('…'), R.join(''))
    );
    // $ExpectType string
    truncate('12345');         // => '12345'
    // $ExpectType string
    truncate('0123456789ABC'); // => '0123456789…'
};

/* compose */
() => {
    let limit10 = function(x: number): boolean {
        return x >= 10;
    };
    // $ExpectType (x0: number) => boolean
    R.compose(limit10, double);
    // $ExpectType boolean
    R.compose(limit10, double)(10);

    const f0 = (s: string) => +s;      // string -> number
    const f1 = (n: number) => n === 1; // number -> boolean
    const f2 = R.compose(f1, f0);      // string -> boolean

    // akward example that bounces types between number and string
    const g0 = (list: number[]) => R.map(R.inc, list);
    const g1 = R.dropWhile(R.gt(10));
    const g2 = R.map((i: number) => i > 5 ? 'bigger' : 'smaller');
    const g3 = R.all((i: string) => i === 'smaller');
    // $ExpectType (list: number[]) => boolean
    const g = R.compose(g3, g2, g1, g0);
    // $ExpectType boolean
    g([1, 2, 10, 13]);
};

/* pipe */
() => {
    // $ExpectType (x0: number) => string
    R.pipe(double, double, shout);
    // $ExpectType string
    R.pipe(double, double, shout)(10);

    // $ExpectType string
    const capitalize = (str: string) => R.pipe(
        R.split(''),
        R.adjust(R.toUpper, 0),
        R.join('')
    )(str);

    let f = R.pipe(Math.pow, R.negate, R.inc);
    // $ExpectType number
    f(3, 4); // -(3^4) + 1

    // test for type degeneration if the first function has generics
    // $ExpectType (x0: number) => number
    R.pipe(R.identity, double);
};

/* pipeP */
() => {
    // $ExpectType Promise<number>
    R.pipeP(
        (m: number) => Promise.resolve(R.multiply(2, m)),
        (m: number) => Promise.resolve(m / 2),
        R.multiply(2)
    )(10);
};

// TODO: pipeK

// invoker
() => {
    // $ExpectType string
    R.invoker(0, 'toUpperCase', 'foo');
    // $ExpectType string
    R.invoker(1, 'charAt', 'foo', 1);
};

// juxt
(() => {
    const range = R.juxt([Math.min, Math.max]);
    // $ExpectType number[]
    range(3, 4, 9, -3); // => [-3, 9]

    const chopped = R.juxt([R.head, R.last]);
    // $ExpectType string[]
    chopped('longstring'); // => ['l', 'g']
});

// useWith
(() => {
    let square = function(x: number) { return x * x; };
    let add = function(a: number, b: number) { return a + b; };
    // Adds any number of arguments together
    let addAll = function() {
      return 0;
    };

    // Basic example
    R.useWith(addAll, [ double, square ]);
});

// clone
(() => {
  let printXPlusFive = function(x: number) { console.log(x + 5); };
  R.forEach(printXPlusFive, [1, 2, 3]);
  // $ExpectType Object[]
  R.clone([{},{},{}]);
  // $ExpectType number[]
  R.clone([1,2,3]);
})();

// forEach
// (() => {
//   let printXPlusFive = function(x, i) { console.log(i + 5); };
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

// times
(() => {
    let i = function(x: number) {return x;};
    // $ExpectType number[]
    R.times(i, 5);
})();

// pipe
(() => {
  let triple = function(x: number): number { return x * 3; };
  let square = function(x: number): number { return x * x; };
  let squareThenDoubleThenTriple = R.pipe(square, double, triple);
  // $ExpectType number
  squareThenDoubleThenTriple(5); // => 150
})();

// partial
(() => {
    let multiply = function(a: number, b: number) { return a * b; };
    let double = R.partial(multiply, [2]);
    // $ExpectType number
    double(2); // => 4

    let greet = function(salutation: string, title: string, firstName: string, lastName: string) {
      return salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
    };
    let sayHello = R.partial(greet, ['Hello']);
    let sayHelloToMs = R.partial(sayHello, ['Ms.']);
    // $ExpectType string
    sayHelloToMs('Jane', 'Jones'); // => 'Hello, Ms. Jane Jones!'

    let greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
    // $ExpectType string
    greetMsJaneJones('Hello'); // => 'Hello, Ms. Jane Jones!'
})();

// memoize
(() => {
    let numberOfCalls = 0;
    let trackedAdd = function(a: number, b: number) {
      numberOfCalls += 1;
      return a + b;
    };
    let memoTrackedAdd = R.memoize(trackedAdd);

    // $ExpectType number
    memoTrackedAdd(1, 2); // => 3
    // $ExpectType number
    numberOfCalls;        // => 1
    // $ExpectType number
    memoTrackedAdd(1, 2); // => 3
    // $ExpectType number
    numberOfCalls;        // => 1
    // $ExpectType number
    memoTrackedAdd(2, 3); // => 5
    // $ExpectType number
    numberOfCalls;        // => 2

    // Note that argument order matters
    // $ExpectType number
    memoTrackedAdd(2, 1); // => 3
    // $ExpectType number
    numberOfCalls; // => 3
})();

// once
(() => {
    let x: number;
    let addOneOnce = R.once(function(x: number){ return x + 1; });
    // $ExpectType number
    addOneOnce(10); // => 11
    // $ExpectType number
    addOneOnce(addOneOnce(50)); // => 11
})();

// match
() => {
    // $ExpectType string[]
    R.match(/([a-z]a)/g, 'bananas'); // => ['ba', 'na', 'na']
    // $ExpectType string[]
    R.match(/a/, 'b'); // => []
    // $ExpectError Argument of type 'null' is not assignable to parameter of type 'string'.
    let sr = R.match(/a/, null); // error with strict null checks
};

// reduce
(() => {
    let numbers = [1, 2, 3];
    let add = function(a: number, b: number) {
        return a + b;
    };
    // $ExpectType number
    R.reduce(add, 10, numbers); // => 16;
})();

// add
(() => {
    let plus3 = R.add(3);
    // $ExpectType number
    plus3(5);
})();

// reduceRight
(() => {
    let pairs = [ ['a', 1], ['b', 2], ['c', 3] ];
    let flattenPairs = function(acc: [string, number], pair: [string, number]) {
      return acc.concat(pair);
    };
    // $ExpectType Array<number|string>
    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
})();

// reduceWhile
() => {
    let isOdd = (x: number, acc: number) => x % 2 === 1;
    let xs = [1, 3, 5, 60, 777, 800];
    // $ExpectType number
    R.reduceWhile(isOdd, R.add, 0, xs); // => 9

    let ys = [2, 4, 6];
    // $ExpectType number
    R.reduceWhile(isOdd, R.add, 111, ys); // => 111
};

// mapObjIndexed
(() => {
    let values = { x: 1, y: 2, z: 3 };
    let prependKeyAndDouble = function(num: number, key: string, obj: any) {
        return key + (num * 2);
    };
    // $ExpectType Dictionary<string>
    R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
});

// ap, of
(() => {
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)], [1,2,3]); // => [2, 4, 6, 4, 5, 6]
    // $ExpectType number[][]
    R.of([1]); // => [[1]]
    // $ExpectType number[]
    R.of(1);
});

// empty
() => {
    // $ExpectType number[]
    R.empty([1,2,3,4,5]); // => []
    // $ExpectType number[]
    R.empty([1, 2, 3]);     // => []
    // $ExpectType string
    R.empty('unicorns');    // => ''
    // $ExpectType {}
    R.empty({x: 1, y: 2});  // => {}
};

// length
(() => {
    // $ExpectType number
    R.length([1, 2, 3]); // => 3
});

// addIndex, filter, reject
(() => {
    const isEven = function(n: number) {
        return n % 2 === 0;
    };
    const filterIndexed = R.addIndex(R.filter);

    // $ExpectType number[]
    R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]

    let lastTwo = function(val: number, idx: number, list: number[]) {
      return list.length - idx <= 2;
    };
    // $ExpectType number[]
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]

    let isOdd = function(n: number) {
      return n % 2 === 1;
    };
    // $ExpectType number[]
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
});

// take, takeWhile
(() => {
    let isNotFour = function(x: number) {
      return !(x === 4);
    };
    // $ExpectType number[]
    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
    // $ExpectType number[]
    R.take(2, [1, 2, 3, 4]); // => [1, 2]
});

// unfold
(() => {
    let f = function(n: number) { return n > 50 ? false : [-n, n + 10]; };
    // $ExpectType number[]
    R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
    let b = R.unfold(f); // => [-10, -20, -30, -40, -50]
    // $ExpectType number[]
    b(10);
});

/*****************************************************************
 * Function category
 */

// flip
() => {
    let mergeThree = function(a: number, b: number, c: number): number[] {
      return ([] as number[]).concat(a, b, c);  // strictNullChecks: must cast array to right type
    };
    // $ExpectType number[]
    mergeThree(1, 2, 3); // => [1, 2, 3]
    let flipped = R.flip(mergeThree);
    // $ExpectType number[]
    flipped(1, 2, 3); // => [2, 1, 3]
 };

/*********************
 * List category
 ********************/

// all
() => {
    let lessThan2 = R.flip(R.lt)(2);
    let lessThan3 = R.flip(R.lt)(3);
    // $ExpectType boolean
    R.all(lessThan2)([1, 2]); // => false
    // $ExpectType boolean
    R.all(lessThan3)([1, 2]); // => true
};

// any
() => {
    let lessThan0 = R.flip(R.lt)(0);
    let lessThan2 = R.flip(R.lt)(2);
    // $ExpectType boolean
    R.any(lessThan0)([1, 2]); // => false
    // $ExpectType boolean
    R.any(lessThan2)([1, 2]); // => true
};

// ascend
() => {
  let byAge = R.ascend(R.prop('age'));
  let alice = {
    name: 'ALICE',
    age: 101
  };
  let bob = {
    name: 'Bob',
    age: -10
  };
  let clara = {
    name: 'clara',
    age: 314.159
  };
  let people = [clara, bob, alice];
  // $ExpectType typeof people
  let peopleByYoungestFirst = R.sort(byAge, people);
};

// aperture
() => {
    // $ExpectType number[][]
    R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
    // $ExpectType number[][]
    R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    // $ExpectType number[][]
    R.aperture(7, [1, 2, 3, 4, 5]); // => []
    // $ExpectType number[][]
    R.aperture(7)([1, 2, 3, 4, 5]); // => []
};

// append
() => {
    // $ExpectType string[]
    R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType string[]
    R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType string[]
    R.append('tests', []); // => ['tests']
    // $ExpectType Array<string[]|string>
    R.append<string, string[]>(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]
    // $ExpectType Array<string[]|string>
    R.append(['tests'], ['write', 'more']); // => ['write', 'more', ['tests']]
    // $ExpectType Array<string[]|string>
    R.append<string[]>(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]
    // $ExpectType Array<string[]|string>
    R.append(['tests'])(['write', 'more']); // => ['write', 'more', ['tests']]
};

// chain
() => {
    let duplicate = function(n: number) {
        return [n, n];
    };
    // $ExpectType number[]
    R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
    // $ExpectType number[]
    R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
    // $ExpectType number[]
    R.chain(R.append, R.head)([1, 2, 3]); // => [1, 2, 3, 1]
    // $ExpectType number[]
    R.chain(R.append)(R.head)([1, 2, 3]); // => [1, 2, 3, 1]
};

// clamp
() => {
    // $ExpectType number
    R.clamp(1, 10, -1); // => 1
    // $ExpectType number
    R.clamp(1, 10)(11); // => 10
    // $ExpectType number
    R.clamp(1)(10, 4);  // => 4
    // $ExpectType string
    R.clamp('a', 'd', 'e');  // => 'd'
};

// concat
() => {
    R.concat([], []); // => []   // let r: [] =
    // $ExpectType number[]
    R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
    // $ExpectType number[]
    R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
    // $ExpectType string
    R.concat('ABC')('DEF'); // 'ABCDEF'
};

// contains
() => {
    // $ExpectType boolean
    R.contains(3)([1, 2, 3]); // => true
    // $ExpectType boolean
    R.contains(3, [1, 2, 3]); // => true
    // $ExpectType boolean
    R.contains(4)([1, 2, 3]); // => false
    // $ExpectType boolean
    R.contains({})([{}, {}]); // => false
    let obj = {};
    // $ExpectType boolean
    R.contains(obj)([{}, obj, {}]); // => true
};

// descend
() => {
  let byAge = R.descend(R.prop('age'));
  let alice = {
    name: 'ALICE',
    age: 101
  };
  let bob = {
    name: 'Bob',
    age: -10
  };
  let clara = {
    name: 'clara',
    age: 314.159
  };
  let people = [clara, bob, alice];
  // $ExpectType typeof people
  let peopleByOldestFirst = R.sort(byAge, people);
};

// drop
() => {
    // $ExpectType number[]
    R.drop(3, [1,2,3,4,5,6,7]); // => [4,5,6,7]
    // $ExpectType number[]
    R.drop(3)([1,2,3,4,5,6,7]); // => [4,5,6,7]
    // $ExpectType string
    R.drop(3, 'ramda'); // => 'ram'
    // $ExpectType string
    R.drop(3)('ramda'); // => 'ram'
};

// dropLast
(() => {
    // $ExpectType string[]
    R.dropLast(1, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
    // $ExpectType string[]
    R.dropLast(2)(['foo', 'bar', 'baz']); // => ['foo']
    // $ExpectType string
    R.dropLast(3, 'ramda');               // => 'ra'
    // $ExpectType string
    R.dropLast(3)('ramda');               // => 'ra'
});

// dropLastWhile
(() => {
    let lteThree = (x: number) => x <= 3;
    // $ExpectType number[]
    R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4]
});

// dropWhile
() => {
    let lteTwo = function(x: number) {
        return x <= 2;
    };
    // $ExpectType number[]
    R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
    // $ExpectType number[]
    R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
};

// filter
() => {
    let isEven = function(n: number) {
        return n % 2 === 0;
    };
    // filter works with lists...
    // $ExpectType number[]
    R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
    let isEvenFn = R.filter(isEven);
    isEvenFn([1, 2, 3, 4]);
    // ... but also objects
    // $ExpectType Dictionary<number>
    R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, d: 4}
    let isEvenFnObj = R.filter(isEven);
    // see that we did not break anything
    // and we kept type information
    // $ExpectType number[]
    onlyNumberList(R.filter(isEven,[1,2,3,4]));
    // $ExpectType Dictionary<number>
    onlyNumberObj(R.filter(isEven, {a: 1, b: 2, c: 3, d: 4})); // strictNullChecks: Partial fails, consider Pick
};

// addIndex
() => {
    let lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    let filterIndexed = R.addIndex(R.filter);

    // $ExpectType number[]
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
    let lastTwoFn = filterIndexed(lastTwo);
    // $ExpectType number[]
    lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
};

// find, propEq
() => {
    let xs = [{a: 1}, {a: 2}, {a: 3}];
    // $ExpectType Dictionary<number>
    R.find(R.propEq('a', 2))(xs); // => {a: 2}
    // $ExpectType undefined
    R.find(R.propEq('a', 4))(xs); // => undefined
};

// find
() => {
    type Task = {id: number};
    let tasks: Task[] = [];
    const a = R.find((task: Task) => task.id === 1, tasks); // this works
    const f: (list: Task[]) => Task = R.find<Task>((task: Task) => task.id === 1);
    // $ExpectType Task
    f(tasks); // works
};

// findIndex
() => {
    type Task = {a: number};
    let xs = [{a: 1}, {a: 2}, {a: 3}];
    const a: (list: Task[]) => number = R.findIndex(R.propEq('a', 2));
    // $ExpectType number
    a(xs); // => 1
    // $ExpectType number
    R.findIndex(R.propEq('a', 4))(xs); // => -1

    // $ExpectType number
    R.findIndex((x: number) => x === 1, [1, 2, 3]);
};

// findLast
() => {
    let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    // $ExpectType Dictionary<number>
    R.findLast(R.propEq('a', 1))(xs); // => {a: 1, b: 1}
    // $ExpectType undefined
    R.findLast(R.propEq('a', 4))(xs); // => undefined
};

// findLastIndex
() => {
    let xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    // $ExpectType number
    R.findLastIndex(R.propEq('a', 1))(xs); // => 1
    // $ExpectType number
    R.findLastIndex(R.propEq('a', 4))(xs); // => -1
    // $ExpectType number[]
    R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
};

// pathEq
() => {
    let user1 = { address: { zipCode: 90210 } };
    let user2 = { address: { zipCode: 55555 } };
    let user3 = { name: 'Bob' };
    let users = [ user1, user2, user3 ];
    let isFamous = R.pathEq(['address', 'zipCode'], 90210);
    // $ExpectType Object[]
    R.filter(isFamous, users); // => [ user1 ]
};

// propEq
() => {
    let xs: {[key: string]: string} = {a: '1', b: '0'};
    // $ExpectType boolean
    R.propEq('a', '1', xs);// => true
    // $ExpectType boolean
    R.propEq('a', '4', xs); // => false
};
() => {
    let xs: {[key: string]: number} = {a: 1, b: 0};
    // $ExpectType boolean
    R.propEq('a', 1, xs);// => true
    // $ExpectType boolean
    R.propEq('a', 4, xs); // => false
};
() => {
    let xs = {a: '1', b: '0'};
    // $ExpectType boolean
    R.propEq('a', '1', xs);// => true
    // $ExpectType boolean
    R.propEq('a', '4', xs); // => false
};
() => {
    let xs = {a: 1, b: 0};
    // $ExpectType boolean
    R.propEq('a', 1, xs);// => true
    // $ExpectType boolean
    R.propEq('a', 4, xs); // => false
};
interface Obj { a: number; b: number; };
() => {
    let xs: Obj = {a: 1, b: 0};
    // $ExpectType boolean
    R.propEq('a', 1, xs);// => true
    // $ExpectType boolean
    R.propEq('a', 4, xs); // => false
};

// forEach
() => {
    let printXPlusFive = function(x: number) { console.log(x + 5); };
    // $ExpectType number[]
    R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
    // $ExpectType number[]
    R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
    // => 6
    // => 7
    // => 8
};

// forEach
() => {
    let printKeyConcatValue = (value: any, key: string, obj: any) => console.log(key + ':' + value);
    // $ExpectType {x: 1, y: 2}
    R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2});
    // $ExpectType {x: 1, y: 2}
    R.forEachObjIndexed(printKeyConcatValue)({x: 1, y: 2});
    // $ExpectType [1, 2]
    R.forEachObjIndexed(printKeyConcatValue, [1, 2]);
    // $ExpectType [1, 2]
    R.forEachObjIndexed(printKeyConcatValue)([1, 2]);
};

// addIndex?
() => {
    let plusFive = function(num: number, idx: number, list: number[]) { list[idx] = num + 5; };
    // $ExpectType number[]
    R.addIndex(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
};

// groupBy
() => {
    let byGrade = R.groupBy(function(student: {score: number; name: string}) {
        let score = student.score;
        return score < 65 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' : 'A';
    });
    let students = [{name: 'Abby', score: 84},
      {name: 'Eddy', score: 58},
      {name: 'Jack', score: 69}];
    // $ExpectType Dictionary<Object[]>
    byGrade(students);
};

// groupWith
() => {
    // $ExpectType number[][]
    R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

    // $ExpectType number[][]
    R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

    const isVowel = (a: string) => R.contains(a, 'aeiou') ? a : '';
    // $ExpectType string[]
    R.groupWith(R.eqBy<string>(isVowel), 'aestiou');
    // ['ae', 'st', 'iou']
};

// head
() => {
    // $ExpectType string
    R.head(['fi', 'fo', 'fum']); // => 'fi'
    // $ExpectType number
    R.head([10, 'ten']); // => 10
    // $ExpectType string
    R.head(['10', 10]); // => '10'
};

// indexBy
(() => {
    let list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    // $ExpectType Dictionary<Object>
    R.indexBy(R.prop('id'), list);
    // $ExpectType Dictionary<Object>
    R.indexBy(R.prop('id'))(list);
    // $ExpectType Dictionary<Object>
    R.indexBy<{id: string}>(R.prop('id'))(list);
});

// indexOf
() => {
    // $ExpectType number
    R.indexOf(3, [1,2,3,4]); // => 2
    // $ExpectType number
    R.indexOf(10)([1,2,3,4]); // => -1
};

// init
() => {
    // $ExpectType string[]
    R.init(['fi', 'fo', 'fum']); // => ['fi', 'fo']
};

// insert
() => {
    // $ExpectType number[]
    R.insert(2, 5, [1,2,3,4]); // => [1,2,5,3,4]
    // $ExpectType number[]
    R.insert(2)(5, [1,2,3,4]); // => [1,2,5,3,4]
    // $ExpectType number[]
    R.insert(2, 5)([1,2,3,4]); // => [1,2,5,3,4]
    // $ExpectType number[]
    R.insert(2)(5)([1,2,3,4]); // => [1,2,5,3,4]
};

// insertAll
() => {
    // $ExpectType number[]
    R.insertAll(2, [10,11,12], [1,2,3,4]);
    // $ExpectType number[]
    R.insertAll(2)([10,11,12], [1,2,3,4]);
    // $ExpectType number[]
    R.insertAll(2, [10,11,12])([1,2,3,4]);
    // $ExpectType number[]
    R.insertAll(2)([10,11,12])([1,2,3,4]);
};

// intersection
() => {
    // $ExpectType number[]
    R.intersection([1,2,3,4], [7,6,5,4,3]); // => [4, 3]
    // $ExpectType number[]
    R.intersection([1,2,3,4])([7,6,5,4,3]); // => [4, 3]
    // $ExpectType number[]
    R.intersection([1,2,4], [1,2,3]); // => [1,2]
    // $ExpectType number[]
    R.intersection([1,2,4])([1,2,3]); // => [1,2]
};

// intersectionWith
() => {
    let buffaloSpringfield = [
      {id: 824, name: 'Richie Furay'},
      {id: 956, name: 'Dewey Martin'},
      {id: 313, name: 'Bruce Palmer'},
      {id: 456, name: 'Stephen Stills'},
      {id: 177, name: 'Neil Young'}
    ];
    let csny = [
      {id: 204, name: 'David Crosby'},
      {id: 456, name: 'Stephen Stills'},
      {id: 539, name: 'Graham Nash'},
      {id: 177, name: 'Neil Young'}
    ];

    // $ExpectType { id: number, name: string }[]
    R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
    // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    // $ExpectType { id: number, name: string }[]
    R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
        // => [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
    // $ExpectType { id: number, name: string }[]
    R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield, csny);
    // $ExpectType { id: number, name: string }[]
    R.intersectionWith(R.eqBy(R.prop('id')))(buffaloSpringfield)(csny);
};

// into
() => {
    let numbers = [1, 2, 3, 4];
    let a  = R.map(R.add(1), R.take(2, numbers));
    let b = R.take(2);
    let transducer = R.compose(R.map(R.add(1)), R.take(2));


    // $ExpectType number[]
    R.into([], transducer, numbers); // => [2, 3]
    // $ExpectType number[]
    R.into([])(transducer, numbers); // => [2, 3]
    // $ExpectType number[]
    R.into([], transducer)(numbers); // => [2, 3]

    let intoArray = R.into([]);
    // $ExpectType number[]
    intoArray(transducer, numbers); // => [2, 3]
    // $ExpectType number[]
    intoArray(transducer)(numbers); // => [2, 3]
};

// join
() => {
    let spacer = R.join(' ');
    // $ExpectType string
    spacer(['a', 2, 3.4]);   // => 'a 2 3.4'
    // $ExpectType string
    R.join('|', [1, 2, 3]);    // => '1|2|3'
};

// last
() => {
    // $ExpectType string
    R.last(['fi', 'fo', 'fum']); // => 'fum'
};

// lastIndexOf
() => {
    R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); // => 6
    R.lastIndexOf(10, [1,2,3,4]); // => -1
    R.lastIndexOf(10)([1,2,3,4]); // => -1
};

// length
() => {
    // $ExpectType number
    R.length([]); // => 0
    // $ExpectType number
    R.length([1, 2, 3]); // => 3
};

// lensIndex, set, view, over
() => {
    let headLens = R.lensIndex(0);
    // $ExpectType number
    headLens([10, 20, 30, 40]); // => 10
    // $ExpectType Array<number|string>
    headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]
    // $ExpectType string
    R.view(headLens, ['a', 'b', 'c']);            // => 'a'
    // $ExpectType string[]
    R.set(headLens, 'x', ['a', 'b', 'c']);        // => ['x', 'b', 'c']
    // $ExpectType string[]
    R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

// map
() => {
    let arrayify = <T>(v: T): T[] => [v];
    // homogeneous array
    // $ExpectType number[]
    R.map(double, [1, 2, 3]); // => [2, 4, 6]
    // $ExpectType number[]
    R.map(double)([1, 2, 3]); // => [2, 4, 6]
    // homogeneous object
    // $ExpectType Dictionary<number>
    R.map(double, { a: 1, b: 2, c: 3 }); // => { a: 2, b: 4, c: 6 }
    // $ExpectType Dictionary<number>
    R.map(double)({ a: 1, b: 2, c: 3 }); // => { a: 2, b: 4, c: 6 }
    // heterogeneous array
    // $ExpectType [number[], string[]]
    R.map(arrayify, [1, 'a']); // => [[1], ['a']]
    // $ExpectType [number[], string[]]
    R.map(arrayify)([1, 'a']); // => [[1], ['a']]
    // heterogeneous object
    // $ExpectType { a: number[], b: string[] }
    R.map(arrayify, { a: 1, b: 'c' }); // => { a: [1], b: ['c'] }
    // $ExpectType { a: number[], b: string[] }
    R.map(arrayify)({ a: 1, b: 'c' }); // => { a: [1], b: ['c'] }

    // functor
    // I'm sorry, I have no clue how to make this example work with proper functor typing
    // const stringFunctor = {
    //     map: (fn: (c: number) => number) => {
    //         let chars = 'Ifmmp!Xpsme'.split('');
    //         return chars.map((char) => String.fromCharCode(fn(char.charCodeAt(0)))).join('');
    //     }
    // };
    // let s = R.map((x: number) => x-1, stringFunctor); // => 'Hello World'
};

// mapAccum
() => {
    let digits = ['1', '2', '3', '4'];
    let append = function(a: string, b: string): [string, string]{
        return [a + b, a + b];
    };
    // $ExpectType Array<string[]|string>
    R.mapAccum(append, '0', digits); // => ['01234', ['01', '012', '0123', '01234']]
    // $ExpectType Array<string[]|string>
    R.mapAccum(append)('0', digits); // => ['01234', ['01', '012', '0123', '01234']]
    // $ExpectType Array<string[]|string>
    R.mapAccum(append, '0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
    // $ExpectType Array<string[]|string>
    R.mapAccum(append)('0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
};

// mapAccumRight
() => {
    let digits = ['1', '2', '3', '4'];
    let append = function(a: string, b: string): [string, string] {
        return [a + b, a + b];
    };
    // $ExpectType Array<string|string[]>
    R.mapAccumRight(append, '0', digits); // => ['04321', ['04321', '0432', '043', '04']]
    // $ExpectType Array<string|string[]>
    R.mapAccumRight(append)('0', digits); // => ['04321', ['04321', '0432', '043', '04']]
    // $ExpectType Array<string|string[]>
    R.mapAccumRight(append, '0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
    // $ExpectType Array<string|string[]>
    R.mapAccumRight(append)('0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
};

// addIndex
() => {
    let squareEnds = function(elt: number, idx: number, list: number[]) {
        if (idx === 0 || idx === list.length - 1) {
            return elt * elt;
        }
        return elt;
    };
    // $ExpectType number[]
    R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
    // $ExpectType number[]
    R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
};

// none
() => {
    // $ExpectType boolean
    R.none(R.isNaN, [1, 2, 3]); // => true
    // $ExpectType boolean
    R.none(R.isNaN, [1, 2, 3, NaN]); // => false
    // $ExpectType boolean
    R.none(R.isNaN)([1, 2, 3, NaN]); // => false
};

// nth
() => {
    let list = ['foo', 'bar', 'baz', 'quux'];
    // $ExpectType string
    R.nth(1, list); // => 'bar'
    // $ExpectType string
    R.nth(-1, list); // => 'quux'
    // $ExpectType undefined
    R.nth(-99, list); // => undefined
    // $ExpectType undefined
    R.nth(-99)(list); // => undefined
};

// partition, contains
() => {
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [string[], string[]]
    R.partition(R.contains('s'))(['sss', 'ttt', 'foo', 'bars']);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    // $ExpectType [number[], number[]]
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
    // $ExpectType Object[]
    R.partition(R.contains('s'),{ a: 'sss', b: 'ttt', foo: 'bars' }); // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
};

// pluck
() => {
    // $ExpectType number[]
    R.pluck('a', [{a: 1}, {a: 2}]); // => [1, 2]
    // $ExpectType number[]
    R.pluck(0, [[1, 2], [3, 4]]);   // => [1, 3]
    // $ExpectType number[]
    R.pluck('a')([{a: 1}, {a: 2}]); // => [1, 2]
    // $ExpectType number[]
    R.pluck(0)([[1, 2], [3, 4]]);   // => [1, 3]
};

// prepend
() => {
    // $ExpectType string[]
    R.prepend('fee', ['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum']
    // $ExpectType string[]
    R.prepend('fee')(['fi', 'fo', 'fum']); // => ['fee', 'fi', 'fo', 'fum']
};

// range
() => {
    // $ExpectType number[]
    R.range(1, 5);    // => [1, 2, 3, 4]
    // $ExpectType number[]
    R.range(50)(53);  // => [50, 51, 52]
};

// reduce
() => {
    let numbers = [1, 2, 3];
    let add = function(a: number, b: number) {
        return a + b;
    };
    // $ExpectType number
    R.reduce(add, 10, numbers); // => 16
    // $ExpectType number
    R.reduce(add)(10, numbers); // => 16
    // $ExpectType number
    R.reduce(add, 10)(numbers); // => 16
};

// reduceBy

interface Student {
    name: string;
    score: number;
}
() => {
    const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
    const namesByGrade = reduceToNamesBy(function(student: Student) {
          let score = student.score;
          return score < 65 ? 'F' :
                 score < 70 ? 'D' :
                 score < 80 ? 'C' :
                 score < 90 ? 'B' : 'A';
    });
    let students = [{name: 'Lucy', score: 92},
                    {name: 'Drew', score: 85},
                    {name: 'Bart', score: 62}];
    // $ExpectType Dictionary<string[]>
    namesByGrade(students);
    // {
    //   'A': ['Lucy'],
    //   'B': ['Drew']
    //   'F': ['Bart']
    // }
};

// addIndex
() => {
    let reduceIndexed = R.addIndex(R.reduce);
    let letters = ['a', 'b', 'c'];
    let objectify = function(accObject: {[elem: string]: number}, elem: string, idx: number, list: string[]) {
        accObject[elem] = idx;
        return accObject;
    };
    // $ExpectType Dictionary<number>
    reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    // $ExpectType Dictionary<number>
    reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    // $ExpectType Dictionary<number>
    reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
};

// reduceRight
interface KeyValuePair<K, V> extends Array<K | V> { 0 : K; 1 : V; }
type Pair = KeyValuePair<string, number>;
() => {
    let pairs: Pair[] = [ ['a', 1], ['b', 2], ['c', 3] ];
    let flattenPairs = function(pair: Pair, acc: Pair[]): Pair[] {
        return acc.concat(pair);
    };
    // $ExpectType Array<string[]|string>
    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    // $ExpectType Array<string[]|string>
    R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    // $ExpectType Array<string[]|string>
    R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
};

// reject
() => {
    let isOdd = function(n: number) {
        return n % 2 === 1;
    };
    // $ExpectType number[]
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    const a2 = R.reject(isOdd);
    // $ExpectType number[]
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
};

// rejectIndexed
() => {
    const lastTwo = function(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    };
    const rejectIndexed = R.addIndex(R.reject);
    // $ExpectType number[]
    rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
    // $ExpectType number[]
    rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
};

// remove
() => {
    // $ExpectType number[]
    R.remove(2, 3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
    // $ExpectType number[]
    R.remove(2, 3)([1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
    // $ExpectType number[]
    R.remove(2)(3, [1,2,3,4,5,6,7,8]); // => [1,2,6,7,8]
};

// repeat
() => {
    // $ExpectType string[]
    R.repeat('hi', 5); // => ['hi', 'hi', 'hi', 'hi', 'hi']
    let obj = {};
    let repeatedObjs = R.repeat(obj, 5); // => [{}, {}, {}, {}, {}]
    // $ExpectType boolean
    repeatedObjs[0] === repeatedObjs[1]; // => true
};

// reverse
() => {
    // $ExpectType number[]
    R.reverse([1, 2, 3]);  // => [3, 2, 1]
    // $ExpectType number[]
    R.reverse([1, 2]);     // => [2, 1]
    // $ExpectType number[]
    R.reverse([1]);        // => [1]
    // $ExpectType number[]
    R.reverse([]);         // => []
};

// scan
() => {
    let numbers = [1, 2, 3, 4];
    // $ExpectType number[]
    R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24]
    // $ExpectType number[]
    R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24]
    // $ExpectType number[]
    R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24]
};

// slice
() => {
    let xs = R.range(0, 10);
    // $ExpectType number[]
    R.slice(2, 5, xs); // => [2, 3, 4]
    // $ExpectType number[]
    R.slice(2, 5)(xs); // => [2, 3, 4]
    // $ExpectType number[]
    R.slice(2)(5, xs); // => [2, 3, 4]

    let str = 'Hello World';
    // $ExpectType string
    R.slice(2, 5, str); // => 'llo'
    // $ExpectType string
    R.slice(2, 5)(str); // => 'llo'
    // $ExpectType string
    R.slice(2)(5, str); // => 'llo'
};

// sort
() => {
    let diff = function(a: number, b: number) { return a - b; };
    // $ExpectType number[]
    R.sort(diff, [4,2,7,5]); // => [2, 4, 5, 7]
    // $ExpectType number[]
    R.sort(diff)([4,2,7,5]); // => [2, 4, 5, 7]
};

// cond, equals, always
() => {
    const fn = R.cond([
        [R.equals(0),   R.always('water freezes at 0°C')],
        [R.equals(100), R.always('water boils at 100°C')],
        [R.T,           (temp: number) => 'nothing special happens at ' + temp + '°C']
    ]);
    // $ExpectType string
    fn(0); // => 'water freezes at 0°C'
    // $ExpectType string
    fn(50); // => 'nothing special happens at 50°C'
    // $ExpectType string
    fn(100); // => 'water boils at 100°C'
};

// tail
() => {
    // $ExpectType string[]
    R.tail(['fi', 'fo', 'fum']); // => ['fo', 'fum']
    // $ExpectType number[]
    R.tail([1, 2, 3]); // => [2, 3]
};

// take
() => {
    // $ExpectType number[]
    R.take(3,[1,2,3,4,5]); // => [1,2,3]

    let members= [ 'Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis','Joe Morello','Norman Bates',
    'Eugene Wright','Gerry Mulligan','Jack Six','Alan Dawson','Darius Brubeck','Chris Brubeck',
    'Dan Brubeck','Bobby Militello','Michael Moore','Randy Jones'];
    let takeFive = R.take(5);
    // $ExpectType string[]
    takeFive(members); // => ['Paul Desmond','Bob Bates','Joe Dodge','Ron Crotty','Lloyd Davis']
};
() => {
    // $ExpectType string
    R.take(3,'Example'); // => 'Exa'

    let takeThree = R.take(3);
    // $ExpectType string
    takeThree('Example'); // => 'Exa'
};

// takeLast
() => {
    // $ExpectType string[]
    R.takeLast(1, ['foo', 'bar', 'baz']); // => ['baz']
    // $ExpectType string[]
    R.takeLast(2)(['foo', 'bar', 'baz']); // => ['bar', 'baz']
    // $ExpectType string
    R.takeLast(3, 'ramda');               // => 'mda'
    // $ExpectType string
    R.takeLast(3)('ramda');               // => 'mda'
};

// takeLastWhile
() => {
  const isNotOne = (x: number) => x !== 1;
  // $ExpectType number[]
  R.takeLastWhile(isNotOne, [1, 2, 3, 4]); // => [2, 3, 4]
  // $ExpectType number[]
  R.takeLastWhile(isNotOne)([1, 2, 3, 4]); // => [2, 3, 4]
};

// takeWhile
() => {
    let isNotFour = function(x: number) {
        return !(x === 4);
    };
    // $ExpectType number[]
    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
    // $ExpectType number[]
    R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3]
};

// tap
() => {
    const sayX = (x: number) => console.log('x is ' + x);
    // $ExpectType number
    R.tap(sayX, 100); // => 100
};

// test
() => {
    // $ExpectType boolean
    R.test(/^x/, 'xyz'); // => true
    // $ExpectType boolean
    R.test(/^y/)('xyz'); // => false
};

// times
() => {
    // $ExpectType number[]
    R.times(R.identity, 5); // => [0, 1, 2, 3, 4]
    // $ExpectType number[]
    R.times(R.identity)(5); // => [0, 1, 2, 3, 4]
};

// toString
() => {
  class Point {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }
    toStringn() {
          return 'new Point(' + this.x + ', ' + this.y + ')';
    }
    };
    // $ExpectType string
    R.toString(new Point(1, 2)); // => 'new Point(1, 2)'
    // $ExpectType string
    R.toString(42); // => '42'
    // $ExpectType string
    R.toString('abc'); // => ''abc''
    // $ExpectType string
    R.toString([1, 2, 3]); // => '[1, 2, 3]'
    // $ExpectType string
    R.toString({foo: 1, bar: 2, baz: 3}); // => '{'bar': 2, 'baz': 3, 'foo': 1}'
    // $ExpectType string
    R.toString(new Date('2001-02-03T04: 05: 06Z')); // => 'new Date('2001-02-03T04: 05: 06.000Z')'
};

// transduce
() => {
    let numbers = [1, 2, 3, 4];
    let transducer = R.compose(R.map(R.add(1)), R.take(2));
    let fn = R.flip<number, number[], number[]>(R.append);
    // $ExpectType number[]
    R.transduce(transducer, fn, [] as number[], numbers); // => [2, 3]   // strictNullChecks: must annotate empty array type
    // $ExpectType number[]
    R.transduce(transducer, fn, [] as number[])(numbers); // => [2, 3]
    // $ExpectType number[]
    R.transduce(transducer, fn)([] as number[], numbers); // => [2, 3]
    // $ExpectType number[]
    R.transduce(transducer)(fn, [] as number[], numbers); // => [2, 3]
};

// // traverse
// () => {
//     // Returns `Nothing` if the given divisor is `0`
//     safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
//
//     R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); // => Just([5, 2.5, 2])
//     R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); // => Nothing
// }

// transpose
() => {
    // $ExpectType any[][]
    R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']]
    // $ExpectType any[][]
    R.transpose([[1, 2, 3], ['a', 'b', 'c']]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    // $ExpectType number[][]
    R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]]
};

// tryCatch
() => {
    const x = R.prop('x');
    // $ExpectType boolean
    R.tryCatch<boolean>(R.prop('x'), R.F)({x: true}); // => true
    // $ExpectType boolean
    R.tryCatch<boolean>(R.prop('x'), R.F)(null);      // => false
};

// uniq
() => {
    // $ExpectType number[]
    R.uniq([1, 1, 2, 1]); // => [1, 2]
    // $ExpectType Object[]
    R.uniq([{}, {}]);     // => [{}, {}]
    // $ExpectType any[]
    R.uniq([1, '1']);     // => [1, '1']
};

// uniqWith
() => {
    let strEq = function(a: any, b: any) { return String(a) === String(b); };
    // $ExpectType number[]
    R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2]
    // $ExpectType number[]
    R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2]
    // $ExpectType Object[]
    R.uniqWith(strEq)([{}, {}]);       // => [{}]
    // $ExpectType number[]
    R.uniqWith(strEq)([1, '1', 1]);    // => [1]
    // $ExpectType string[]
    R.uniqWith(strEq)(['1', 1, 1]);    // => ['1']
};

// unnest, equals
() => {
    // $ExpectType boolean
    R.equals(R.unnest([1, [2], [[3]]]), [1,2,[3]]); // => true
    // $ExpectType boolean
    R.equals(R.unnest([[1, 2], [3, 4], [5, 6]]),[1,2,3,4,5,6]); // => true
};

// xprod
() => {
    // $ExpectType [number, string][]
    R.xprod([1, 2], ['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    // $ExpectType [number, string][]
    R.xprod([1, 2])(['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
};

// zip
() => {
    // $ExpectType [number, string][]
    R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    // $ExpectType [number, string][]
    R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
};

// zipObj
() => {
    // $ExpectType Dictionary<number>
    R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
    // $ExpectType Dictionary<number>
    R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
};

// zipWith
() => {
    let f = function(x: number, y: string) {
        // ...
    };
    // $ExpectType any[]
    R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    // $ExpectType any[]
    R.zipWith(f)([1, 2, 3], ['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
    // $ExpectType any[]
    R.zipWith(f, [1, 2, 3])(['a', 'b', 'c']); // => [f(1, 'a'), f(2, 'b'), f(3, 'c')]
};

/*****************************************************************
 * Object category
 */

// assoc
() => {
    // $ExpectType Dictionary<number>
    R.assoc('c', 3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
    // $ExpectType Dictionary<number>
    R.assoc('c')(3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
    // $ExpectType Dictionary<number>
    R.assoc('c', 3)({a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
};

// dissoc
() => {
    // $ExpectType Dictionary<number>
    R.dissoc<{a: number, c: number}>('b', {a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
    // $ExpectType Dictionary<number>
    R.dissoc('b', {a: 1, b: 2, c: 3});                         // => {a: 1, c: 3}
    // $ExpectType Dictionary<number>
    R.dissoc('b')<{a: number, c: number}>({a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
};

// assocPath
() => {
    // $ExpectType {a: {b: {c: number}}}
    R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
    // $ExpectType {a: {b: {c: number}}}
    R.assocPath(['a', 'b', 'c'])(42, {a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
    // $ExpectType {a: {b: {c: number}}}
    R.assocPath(['a', 'b', 'c'], 42)({a: {b: {c: 0}}}); // => {a: {b: {c: 42}}}
};

// dissocPath
() => {
    // $ExpectType {a: {b: {}}}
    R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}}
    // optionally specify return type
    // $ExpectType {a: {b: {}}}
    R.dissocPath<{a : { b: number}}>(['a', 'b', 'c'], {a: {b: {c: 42}}}); // => {a: {b: {}}}
    // $ExpectType {a: {b: {}}}
    R.dissocPath(['a', 'b', 'c'])({a: {b: {c: 42}}}); // => {a: {b: {}}}
};

// clone
() => {
    let obj1 = [{}, {}, {}];
    let obj2 = [{a: 1}, {a: 2}, {a: 3}];
    // $ExpectType any[]
    R.clone(obj1);
    // $ExpectType {a: number}[]
    R.clone(obj2);
    // $ExpectType Object
    R.clone({});
    // $ExpectType 10
    R.clone(10);
    // $ExpectType "foo"
    R.clone('foo');
    // $ExpectType number
    R.clone(Date.now());
};

// eqProps
() => {
    let o1 = { a: 1, b: 2, c: 3, d: 4 };
    let o2 = { a: 10, b: 20, c: 3, d: 40 };
    // $ExpectType boolean
    R.eqProps('a', o1, o2); // => false
    // $ExpectType boolean
    R.eqProps('c', o1, o2); // => true
    // $ExpectType {<T,U>(obj1: T, obj2: U): boolean}
    R.eqProps('c');
    // $ExpectType {<U>(obj2: U): boolean}
    R.eqProps('c', o1);
};

// evolve
() => {
    let tomato = {firstName: 'Tomato ', data: {elapsed: 100, remaining: 1400}, id: 123};
    let transformations = {
        firstName: R.trim,
        lastName: R.trim, // Will not get invoked.
        data: {elapsed: R.add(1), remaining: R.add(-1)}
    };
    // $ExpectType typeof tomato
    const a: typeof tomato = R.evolve(transformations, tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
    // $ExpectType typeof tomato
    const b: typeof tomato = R.evolve(transformations)(tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id: 123}
};

// has
() => {
    const hasName = R.has('name');
    // $ExpectType boolean
    hasName({name: 'alice'});   // => true
    // $ExpectType boolean
    hasName({name: 'bob'});     // => true
    // $ExpectType boolean
    hasName({});                // => false

    const point = {x: 0, y: 0};
    const pointHas = R.flip(R.has)(point);
    // $ExpectType boolean
    pointHas('x');  // => true
    // $ExpectType boolean
    pointHas('y');  // => true
    // $ExpectType boolean
    pointHas('z');  // => false
};

// hasIn
class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
};
() => {
    let square = new Rectangle(2, 2);
    // $ExpectType boolean
    R.hasIn('width', square);  // => true
    // $ExpectType boolean
    R.hasIn('area', square);  // => true
    // $ExpectType boolean
    R.flip(R.hasIn)(square)('area');  // => true
};

// invert
() => {
    let raceResultsByFirstName = {
      first: 'alice',
      second: 'jake',
      third: 'alice'
    };
    // $ExpectType Dictionary<string[]>
    R.invert(raceResultsByFirstName);
    // => { 'alice': ['first', 'third'], 'jake': ['second'] }
};

// invertObj
() => {
    let raceResults0 = {
      first: 'alice',
      second: 'jake'
    };
    // $ExpectType Dictionary<string>
    R.invertObj(raceResults0);
    // => { 'alice': 'first', 'jake': 'second' }

    // Alternatively:
    let raceResults1 = ['alice', 'jake'];
    // $ExpectType Dictionary<string>
    R.invertObj(raceResults1);
    // => { 'alice': '0', 'jake': '1' }
};

// keys
() => {
    // $ExpectType string[]
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
};

// keysIn
() => {
    let f = new F();
    // $ExpectType string[]
    R.keysIn(f); // => ['x', 'y']
};

// lens
() => {
    interface xy {
      x: number;
      y: number;
    }
    // let xLens = R.lens(R.prop('x'), R.assoc('x'));
    // let xLens = R.lens<number, xy>(R.prop('x'), R.assoc('x'));
    let xLens = R.lens<number>(R.prop('x'))(R.assoc('x'));
    // ^ works with only 1 generic, for curried version managed to split the inferred generic from the manual generic
    // $ExpectType number
    R.view(xLens, {x: 1, y: 2});            // => 1
    // $ExpectType { x: number, y: number }
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
    // $ExpectType { x: number, y: number }
    R.set(xLens)(4, {x: 1, y: 2});          // => {x: 4, y: 2}
    // $ExpectType { x: number, y: number }
    R.set(xLens, 4)({x: 1, y: 2});          // => {x: 4, y: 2}
    // $ExpectType { x: number, y: number }
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
    // $ExpectType { x: number, y: number }
    R.over(xLens, R.negate)({x: 1, y: 2});  // => {x: -1, y: 2}
    // $ExpectType { x: number, y: number }
    R.over(xLens)(R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
};

// lensIndex
() => {
    let headLens = R.lensIndex(0);
    // $ExpectType string
    R.view(headLens, ['a', 'b', 'c']);            // => 'a'
    // $ExpectType string[]
    R.set(headLens, 'x', ['a', 'b', 'c']);        // => ['x', 'b', 'c']
    // $ExpectType string[]
    R.over(headLens, R.toUpper, ['a', 'b', 'c']); // => ['A', 'b', 'c']
};

// lensProp
() => {
    let xLens = R.lensProp('x');
    // $ExpectType number
    R.view(xLens, {x: 1, y: 2});            // => 1
    // $ExpectType Dictionary<number>
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
    // $ExpectType Dictionary<number>
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
};

// lensPath
() => {
  const xyLens = R.lensPath(['x', 'y']);
  // $ExpectType number
  R.view(xyLens, {x: {y: 2, z: 3}});            // => 2
  // $ExpectType { [s: string]: { [s: string]: number } }
  R.set(xyLens, 4, {x: {y: 2, z: 3}});          // => {x: {y: 4, z: 3}}
  // $ExpectType { [s: string]: { [s: string]: number } }
  R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  // => {x: {y: -2, z: 3}}
};

// keys
() => {
    // $ExpectType string[]
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
};

// keysIn
() => {
    let f = new F();
    // $ExpectType string[]
    R.keysIn(f); // => ['x', 'y']
};

// lens
() => {
    let headLens = R.lens(
      function get(arr: number[]) { return arr[0]; },
      function set(val: number, arr: number[]) { return [val].concat(arr.slice(1)); }
    );
    headLens([10, 20, 30, 40]); // => 10
    // // $ExpectError Argument of type 'mu' is not assignable to parameter of type 'number'.
    // headLens.set('mu', [10, 20, 30, 40]); // => ['mu', 20, 30, 40]

    let phraseLens = R.lens(
      function get(obj: any) { return obj.phrase; },
      function set(val: string, obj: any) {
        let out = R.clone(obj);
        out.phrase = val;
        return out;
      }
    );
    let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    let obj2 = { phrase: "What's all this, then?"};
    // $ExpectType string
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    // $ExpectType string
    phraseLens(obj2); // => "What's all this, then?"
    // $ExpectType Dictionary<string>
    phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
};

// lensProp
() => {
    let phraseLens = R.lensProp('phrase');
    let obj1 = { phrase: 'Absolute filth . . . and I LOVED it!'};
    let obj2 = { phrase: "What's all this, then?"};
    // $ExpectType string
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    // $ExpectType string
    phraseLens(obj2); // => 'What's all this, then?'
    // $ExpectType Dictionary<string>
    phraseLens.set('Ooh Betty', obj1); // => { phrase: 'Ooh Betty'}
};

// merge
() => {
    // $ExpectType Dictionary<any>
    R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
    // => { 'name': 'fred', 'age': 40 }
    let resetToDefault = R.flip(R.merge)({x: 0});
    // $ExpectType Dictionary<number>
    resetToDefault({x: 5, y: 2}); // => {x: 0, y: 2}
};

// megeAll
() => {
    // $ExpectType Dictionary<number>
    R.mergeAll([{foo: 1},{bar: 2},{baz: 3}]); // => {foo: 1,bar: 2,baz: 3}
    // $ExpectType Dictionary<number>
    R.mergeAll([{foo: 1},{foo: 2},{bar: 2}]); // => {foo: 2,bar: 2}
};

// mergeWith
() => {
    // $ExpectType { a: boolean, b: boolean, values: number[] }
    R.mergeWith(R.concat,
        { a: true, values: [10, 20] },
        { b: true, values: [15, 35] });
        // => { a: true, b: true, values: [10, 20, 15, 35] }
};

// mergeWithKey
() => {
    let concatValues = (k: string, l: string, r: string) => k === 'values' ? R.concat(l, r) : r;
    R.mergeWithKey(concatValues,
        { a: true, thing: 'foo', values: [10, 20] },
        { b: true, thing: 'bar', values: [15, 35] });
    const merge = R.mergeWithKey(concatValues);
    // $ExpectType { a: boolean, b: boolean, values: number[], thing: string }
    merge({ a: true, thing: 'foo', values: [10, 20] }, { b: true, thing: 'bar', values: [15, 35] });
};

// pathOr
() => {
    // $ExpectType number
    R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); // => 2
    // $ExpectType number
    R.pathOr('N/A', ['a', 'b'])({a: {b: 2}}); // => 2
    // $ExpectType number
    R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); // => 'N/A'
    // $ExpectType number
    R.pathOr({c: 2})(['a', 'b'], {c: {b: 2}}); // => 'N/A'
};

// pathSatisfies
() => {
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 'foo', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => true
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 'bar', ['a', 'b', 'c'], {a: {b: {c: 'foo'}}}); // => false
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a !== 1, ['a', 'b', 'c'], {a: {b: {c: 2}}}); // => true
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'], {a: {b: {c: 1}}}); // => true
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1, ['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true
    // $ExpectType boolean
    R.pathSatisfies((a: any) => a === 1)(['a', 'b', 'c'])({a: {b: {c: 1}}}); // => true
};

// pickBy
() => {
    let isPositive = function(n: number) {
        return n > 0;
    };
    // $ExpectType Dictionary<number>
    R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
    let containsBackground = function(val: any) {
        return val.bgcolor;
    };
    let colors = {1: {color: 'read'}, 2: {color: 'black', bgcolor: 'yellow'}};
    // $ExpectType { 2: R.Dictionary<string> }
    R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

    let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
    // $ExpectType Dictionary<number>
    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
};


// pick
() => {
    // $ExpectType Dictionary<number>
    R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    // the following should errror: e/f are not keys in these objects
    // $ExpectError not keys
    let no1 = R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
    // $ExpectError not keys
    let no2 = R.pick(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
    // $ExpectError not keys
    let no3 = R.pick(['a', 'e', 'f'], [1, 2, 3, 4]);             // => {a: 1}
};

// objOf
() => {
    let matchPhrases = R.compose(
      R.objOf('must'),
      R.map(R.objOf('match_phrase'))
    );
    // $ExpectType { must: { match_phrase: string }[] }
    matchPhrases(['foo', 'bar', 'baz']);
};

// omit
() => {
    // $ExpectType Dictionary<number>
    R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
    // $ExpectType Dictionary<number>
    R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
};

// fromPairs
() => {
    // $ExpectType Dictionary<number>
    R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); // => {a: 1, b: 2, c: 3}
};

// pair
() => {
    R.pair('foo', 'bar'); // => ['foo', 'bar']
    let p = R.pair('foo', 1); // => ['foo', 'bar']
    // $ExpectType string
    p[0];
    // $ExpectType number
    p[1];
};

// over, lensIndex
() => {
    let headLens = R.lensIndex(0);
    // $ExpectType string[]
    R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); // => ['FOO', 'bar', 'baz']
};

// pickAll
() => {
    // $ExpectType Dictionary<number>
    R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    // $ExpectType Dictionary<number>
    R.pickAll(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    // $ExpectType Dictionary<number>
    R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
    // $ExpectType Dictionary<number>
    R.pickAll(['a', 'e', 'f'])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}    // why does this pass while the above fails?
};

// pickBy
() => {
    let isUpperCase = function(val: number, key: string) { return key.toUpperCase() === key; };
    // $ExpectType Dictionary<number>
    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
};

// project
() => {
    let abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
    let fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
    let kids = [abby, fred];
    // $ExpectType { name: string, grade: number }[]
    R.project(['name', 'grade'], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
};

// prop
() => {
    // $ExpectType number
    R.prop('x', {x: 100}); // => 100
    // $ExpectError Argument of type 'x' is not assignable to parameter of type 'never'.
    R.prop('x', {}); // => undefined
};

// propOr
() => {
    let alice = {
      name: 'ALICE',
      age: 101
    };
    let favorite = R.prop('favoriteLibrary');
    let favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

    // $ExpectType undefined
    favorite(alice);  // => undefined
    // $ExpectType string
    favoriteWithDefault(alice);  // => 'Ramda'
};

// propSatisfies
() => {
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0, 'x', {x: 1, y: 2}); // => true
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0, 'x')({x: 1, y: 2}); // => true
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0)('x')({x: 1, y: 2}); // => true
};

// props
() => {
    // $ExpectType number[]
    R.props(['x', 'y'], {x: 1, y: 2}); // => [1, 2]
    // $ExpectType Array<number|undefined>
    R.props(['c', 'a', 'b'], {b: 2, a: 1}); // => [undefined, 1, 2]

    let fullName = R.compose(R.join(' '), R.props(['first', 'last']));
    // $ExpectType string
    fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); // => 'Tony Bullet-Tooth'
};

// toPairs
() => {
    // $ExpectType [string, number][]
    R.toPairs({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]]
};

// toPairsIn
() => {
    let f = new F();
    // $ExpectType [string, string][]
    R.toPairsIn(f); // => [['x','X'], ['y','Y']]
    // $ExpectType [string, string][]
    R.toPairsIn(f); // => [['x','X'], ['y','Y']]
};

// values
() => {
    // $ExpectType number[]
    R.values({a: 1, b: 2, c: 3}); // => [1, 2, 3]
};

// valuesIn
() => {
    let f = new F();
    // $ExpectType string[]
    R.valuesIn(f); // => ['X', 'Y']
};

// where
() => {
    let spec = {x: 2};
    // $ExpectType boolean
    R.where(spec, {w: 10, x: 2, y: 300}); // => true
    // $ExpectType boolean
    R.where(spec, {x: 1, y: 'moo', z: true}); // => false
    // $ExpectType boolean
    R.where(spec)({w: 10, x: 2, y: 300}); // => true
    // $ExpectType boolean
    R.where(spec)({x: 1, y: 'moo', z: true}); // => false

    // There's no way to represent the below functionality in typescript
    // per http: //stackoverflow.com/a/29803848/632495
    // will need a work around.

    let spec2 = {x: function(val: number, obj: any) { return  val + obj.y > 10; }};
    // $ExpectType boolean
    R.where(spec2, {x: 2, y: 7}); // => false
    // $ExpectType boolean
    R.where(spec2, {x: 3, y: 8}); // => true

    let xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
    // $ExpectType { x: number, y: number }[]
    R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    // $ExpectType { x: number, y: number }[]
    R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
};

// whereEq
() => {
    // $ExpectType (v: Object) => Boolean
    let pred = R.whereEq({a: 1, b: 2});
    // $ExpectType boolean
    pred({a: 1});              // => false
    // $ExpectType boolean
    pred({a: 1, b: 2});        // => true
    // $ExpectType boolean
    pred({a: 1, b: 2, c: 3});  // => true
    // $ExpectType boolean
    pred({a: 1, b: 1});        // => false
    // $ExpectType boolean
    R.whereEq({a: 'one'}, {a: 'one'}); // => true
};

// without
() => {
    // $ExpectType number[]
    R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
};

// mapIndexed, addIndex
() => {
    let mapIndexed = R.addIndex<string,string>(R.map);
    // $ExpectType string[]
    mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']);
    // $ExpectType string[]
    R.mapIndexed(function(val: string, idx: number) {return idx + '-' + val;})(['f', 'o', 'o', 'b', 'a', 'r']);
    // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
    // $ExpectType number[]
    R.mapIndexed((rectangle: Rectangle, idx: number): number => rectangle.area()*idx, [new Rectangle(1,2), new Rectangle(4,7)]);
    // => [2, 56]
};

// addIndex
() => {
    let reduceIndexed = R.addIndex(R.reduce);
    // $ExpectType string[]
    reduceIndexed(
      (acc: string, val: string, idx: number) => acc + ',' + idx + '-' + val
      ,''
      ,['f', 'o', 'o', 'b', 'a', 'r']
    );
    // => ['0-f,1-o,2-o,3-b,4-a,5-r']
};

// always
() => {
    let t = R.always('Tee');
    // $ExpectType string
    t(); // => 'Tee'
};

// ap
() => {
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)], [1,2,3]); // => [2, 4, 6, 4, 5, 6]
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)])([1,2,3]); // => [2, 4, 6, 4, 5, 6]
};

// apply
() => {
    let nums = [1, 2, 3, -99, 42, 6, 7];
    // $ExpectType number
    R.apply(Math.max, nums); // => 42
    // $ExpectType number
    R.apply(Math.max)(nums); // => 42
};

// applySpec
() => {
    type T = {sum: number, nested: {mul: number}};
    const getMetrics = R.applySpec<T>({
        sum: R.add, nested: { mul: R.multiply }
    });
    // $ExpectType T
    getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
};

// binary
() => {
    let takesThreeArgs = function(a: number, b: number, c: number) {
        return [a, b, c];
    };
    // $ExpectType number
    takesThreeArgs.length; // => 3
    // $ExpectType number[]
    takesThreeArgs(1, 2, 3); // => [1, 2, 3]

    let takesTwoArgs = R.binary(takesThreeArgs);
    // $ExpectType number
    takesTwoArgs.length; // => 2
    // Only 2 arguments are passed to the wrapped function
    // $ExpectError Supplied parameters do not match any signature of call target.
    takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
};

// pipe, inc, negate
() => {
    const f = R.pipe(Math.pow, R.negate, R.inc);
    // $ExpectType number
    f(3, 4); // -(3^4) + 1
};

// comparator
() => {
    type T = {age: number};
    let cmp = R.comparator(function(a: T, b: T) {
      return a.age < b.age;
    });
    let people = [
      {name: 'Agy', age: 33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
    ];
    // $ExpectType { age: number, name: string }[]
    R.sort(cmp, people);
};

// converge
() => {
    let add = function(a: number, b: number) { return a + b; };
    let multiply = function(a: number, b: number) { return a * b; };
    let subtract = function(a: number, b: number) { return a - b; };

    // ≅ multiply( add(1, 2), subtract(1, 2) );
    // $ExpectType number
    R.converge(multiply, [ add, subtract ])(1, 2); // => -3

    let add3 = function(a: number, b: number, c: number) { return a + b + c; };
    // $ExpectType number
    R.converge(add3, [ multiply, add, subtract ])(1, 2); // => 4
};

// compose
() => {
    const f0 = R.compose(Math.pow);
    const f1 = R.compose(R.negate, Math.pow);
    const f2 = R.compose(R.inc, R.negate, Math.pow);
    const f3 = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4 = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5 = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    // $ExpectType number
    f0(3, 4); // -(3^4) + 1
    // $ExpectType number
    f1(3, 4); // -(3^4) + 1
    // $ExpectType number
    f2(3, 4); // -(3^4) + 1
    // $ExpectType number
    f3(3, 4); // -(3^4) + 1
    // $ExpectType number
    f4(3, 4); // -(3^4) + 1
    // $ExpectType number
    f5(3, 4); // -(3^4) + 1

    // test for type degeneration if the first function has generics
    // $ExpectType (x0: number) => number
    R.compose(double, R.identity);
};

// compose
() => {
    const fn = function(a: string, b: number, c: string) {
        return [a,b,c];
    };
    const gn = R.compose(R.length, fn);
    // $ExpectType number
    gn('Hello', 4, 'world');
};

// TODO: composeP

// TODO: composeK

// construct, constructN
(() => {
    type circle = { r: number, colors: string[] };
    let Circle = function(r: number) {
        this.r = r;
        this.colors = Array.prototype.slice.call(arguments, 1);
    };
    Circle.prototype.area = function() {return Math.PI * Math.pow(this.r, 2);};
    let circleN = R.constructN(2, Circle);
    // $ExpectType circle
    circleN(1, 'red');
    let circle = R.construct(Circle);
    // $ExpectType circle
    circle(1, 'red');
})();

/*****************************************************************
 * Relation category
 */

// countBy
() => {
    let numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    let letters = R.split('', 'abcABCaaaBBc');
    // $ExpectType Dictionary<number>
    R.countBy(Math.floor)(numbers);    // => {'1': 3, '2': 2, '3': 1}
    // $ExpectType Dictionary<number>
    R.countBy(R.toLower)(letters);   // => {'a': 5, 'b': 4, 'c': 3}
};

// difference
() => {
    // $ExpectType number[]
    R.difference([1,2,3,4], [7,6,5,4,3]); // => [1,2]
    // $ExpectType number[]
    R.difference([7,6,5,4,3], [1,2,3,4]); // => [7,6,5]
};

// differenceWith
() => {
    function cmp(x: any, y: any) { return x.a === y.a; }
    let l1 = [{a: 1}, {a: 2}, {a: 3}];
    let l2 = [{a: 3}, {a: 4}];
    // $ExpectType {a: number}[]
    R.differenceWith(cmp, l1, l2); // => [{a: 1}, {a: 2}]
    // $ExpectType {a: number}[]
    R.differenceWith(cmp)(l1, l2); // => [{a: 1}, {a: 2}]
    // $ExpectType {a: number}[]
    R.differenceWith(cmp)(l1)(l2); // => [{a: 1}, {a: 2}]
};

// equals
() => {
    // $ExpectType boolean
    R.equals(1, 1);     // => true
    // $ExpectType boolean
    R.equals('2', '1'); // => false
    // $ExpectType boolean
    R.equals([1, 2, 3], [1, 2, 3]); // => true

    let a: any = {}; a.v = a;
    let b: any = {}; b.v = b;
    // $ExpectType boolean
    R.equals(a, b); // => true
};

// identity
() => {
    const a1 = R.identity(1); // => 1
    let obj = {};
    // $ExpectType number[]
    R.identity([1,2,3]);
    // $ExpectType string[]
    R.identity(['a','b','c']);
    // $ExpectType boolean
    R.identity(obj) === obj; // => true
};

// identical
() => {
    let o = {};
    // $ExpectType boolean
    R.identical(o, o); // => true
    // $ExpectType boolean
    R.identical(1, 1); // => true
    // $ExpectType boolean
    R.identical('2', '1'); // => false
    // $ExpectType boolean
    R.identical([], []); // => false
    // $ExpectType boolean
    R.identical(0, -0); // => false
    // $ExpectType boolean
    R.identical(NaN, NaN); // => true
};

// path
() => {
    // $ExpectType number
    R.path(['a', 'b'], {a: {b: 2}}); // => 2
    // $ExpectType number
    R.path(['a', 'b'])({a: {b: 2}}); // => 2
};

// sortBy
() => {
    let sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
    let sortByAgeAscending = R.sortBy(R.prop('age'));
    let alice = {
      name: 'ALICE',
      age: 101
    };
    let bob = {
      name: 'Bob',
      age: -10
    };
    let clara = {
      name: 'clara',
      age: 314.159
    };
    let people = [clara, bob, alice];
    // $ExpectType { name: string, age: number }[]
    sortByNameCaseInsensitive(people); // => [alice, bob, clara]
    sortByAgeAscending(people); // => [bob, alice, clara]
};

// sortWith
() => {
  let alice = {
    name: 'alice',
    age: 40
  };
  let bob = {
    name: 'bob',
    age: 30
  };
  let clara = {
    name: 'clara',
    age: 40
  };
  let people = [clara, bob, alice];
  // $ExpectType typeof people
  R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ], people);
  let ageNameSort = R.sortWith([
    R.descend(R.prop('age')),
    R.ascend(R.prop('name'))
  ]);
  // $ExpectType typeof people
  ageNameSort(people);
  // => [alice, clara, bob]
};

// splitAt
() => {
    // $ExpectType number[][]
    R.splitAt(1, [1, 2, 3]);        // => [[1], [2, 3]]
    // $ExpectType number[][]
    R.splitAt(1)([1, 2, 3]);        // => [[1], [2, 3]]
    // $ExpectType string[]
    R.splitAt(5, 'hello world');    // => ['hello', ' world']
    // $ExpectType string[]
    R.splitAt(-1, 'foobar');        // => ['fooba', 'r']
};

// splitWhen
() => {
  // $ExpectType number[][]
  R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]]
  // $ExpectType number[][]
  R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]]
};

// add
() => {
    // $ExpectType number
    R.add(2, 3);       // =>  5
    // $ExpectType number
    R.add(7)(10);      // => 17
};

// dec
() => {
    // $ExpectType number
    R.dec(42); // => 41
};

// divide
() => {
    // $ExpectType number
    R.divide(71, 100); // => 0.71

    let half = R.flip(R.divide)(2);
    // $ExpectType number
    half(42); // => 21

    let reciprocal = R.divide(1);
    // $ExpectType number
    reciprocal(4);   // => 0.25
};

// gt
() => {
    // $ExpectType boolean
    R.gt(2, 6); // => false
    // $ExpectType boolean
    R.gt(2, 0); // => true
    // $ExpectType boolean
    R.gt(2, 2); // => false
    // $ExpectType boolean
    R.flip(R.gt)(2)(10); // => true
    // $ExpectType boolean
    R.gt(2)(10); // => false
};

// gte
() => {
    // $ExpectType boolean
    R.gte(2, 6); // => false
    // $ExpectType boolean
    R.gte(2, 0); // => true
    // $ExpectType boolean
    R.gte(2, 2); // => false
    // $ExpectType boolean
    R.flip(R.gte)(2)(10); // => true
    // $ExpectType boolean
    R.gte(2)(10); // => false
};

// isNaN
() => {
    // $ExpectType boolean
    R.isNaN(NaN);        // => true
    // $ExpectType boolean
    R.isNaN(undefined);  // => false
    // $ExpectType boolean
    R.isNaN({});         // => false
};

// lt
() => {
    // $ExpectType boolean
    R.lt(2, 6); // => true
    // $ExpectType boolean
    R.lt(2, 0); // => false
    // $ExpectType boolean
    R.lt(2, 2); // => false
    // $ExpectType boolean
    R.lt(5)(10); // => true
    // $ExpectType boolean
    R.flip(R.lt)(5)(10); // => false // right-sectioned currying
};

// lte
() => {
    // $ExpectType boolean
    R.lte(2, 6); // => true
    // $ExpectType boolean
    R.lte(2, 0); // => false
    // $ExpectType boolean
    R.lte(2, 2); // => true
    // $ExpectType boolean
    R.flip(R.lte)(2)(1); // => true
    // $ExpectType boolean
    R.lte(2)(10); // => true
};

// mathMod
() => {
    // $ExpectType number
    R.mathMod(-17, 5);  // => 3
    // $ExpectType number
    R.mathMod(17, 5);   // => 2
    // $ExpectType number
    R.mathMod(17, -5);  // => NaN
    // $ExpectType number
    R.mathMod(17, 0);   // => NaN
    // $ExpectType number
    R.mathMod(17.2, 5); // => NaN
    // $ExpectType number
    R.mathMod(17, 5.3); // => NaN

    let clock = R.flip(R.mathMod)(12);
    // $ExpectType number
    clock(15); // => 3
    // $ExpectType number
    clock(24); // => 0

    let seventeenMod = R.mathMod(17);
    // $ExpectType number
    seventeenMod(3);  // => 2
};

// max
() => {
    // $ExpectType number
    R.max(7, 3); // => 7
    // $ExpectType string
    R.max('a', 'z'); // => 'z'
};

// maxBy
() => {
    function cmp(obj: { x: number }) { return obj.x; }
    let a = {x: 1};
    let b = {x: 2};
    let c = {x: 3};
    let d = {x: 'a'};
    let e = {x: 'z'};
    // $ExpectType { x: number; }
    R.maxBy(cmp, a, c); // => {x: 3}
    // $ExpectType { x: number; }
    R.maxBy(cmp)(a, c); // => {x: 3}
    // $ExpectType { x: number; }
    R.maxBy(cmp)(a)(b);
    // $ExpectError Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
    R.maxBy(cmp)(d)(e);
};

// mean
() => {
    // $ExpectType number
    R.mean([2, 7, 9]); // => 6
    // $ExpectType number
    R.mean([]); // => NaN
};

// median
() => {
    // $ExpectType number
    R.median([7, 2, 10, 9]); // => 8
    // $ExpectType number
    R.median([]); // => NaN
};

// min
() => {
    // $ExpectType number
    R.min(9, 3); // => 3
    // $ExpectType string
    R.min('a', 'z'); // => 'a'
};

// minBy
() => {
    function cmp(obj: { x: number }) { return obj.x; }
    let a = {x: 1};
    let b = {x: 2};
    let c = {x: 3};
    let d = {x: 'a'};
    let e = {x: 'z'};
    // $ExpectType { x: number }
    R.minBy(cmp, a, b); // => {x: 1}
    // $ExpectType { x: number }
    R.minBy(cmp)(a, b); // => {x: 1}
    // $ExpectType { x: number }
    R.minBy(cmp)(a)(c);
    // $ExpectError Argument of type '{ x: string; }' is not assignable to parameter of type '{ x: number; }'
    R.minBy(cmp, d, e);
};

// modulo
() => {
    // $ExpectType number
    R.modulo(17, 3); // => 2
    // JS behavior:
    // $ExpectType number
    R.modulo(-17, 3); // => -2
    // $ExpectType number
    R.modulo(17, -3); // => 2

    let isOdd = R.flip(R.modulo)(2);
    // $ExpectType number
    isOdd(42); // => 0
    // $ExpectType number
    isOdd(21); // => 1
};

// multiply
() => {
    let double = R.multiply(2);
    let triple = R.multiply(3);
    // $ExpectType number
    double(3);       // =>  6
    // $ExpectType number
    triple(4);       // => 12
    // $ExpectType number
    R.multiply(2, 5);  // => 10
};

// negate
() => {
    // $ExpectType number
    R.negate(42); // => -42
};

// product
() => {
    // $ExpectType number
    R.product([2,4,6,8,100,1]); // => 38400
};

// subtract
() => {
    // $ExpectType number
    R.subtract(10, 8); // => 2

    let minus5 = R.flip(R.subtract)(5);
    // $ExpectType number
    minus5(17); // => 12

    let complementaryAngle = R.subtract(90);
    // $ExpectType number
    complementaryAngle(30); // => 60
    // $ExpectType number
    complementaryAngle(72); // => 18
};

// sum
() => {
    // $ExpectType number
    R.sum([2,4,6,8,100,1]); // => 121
};

// symmetricDifference
() => {
  // $ExpectType number[]
  R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); // => [1,2,7,6,5]
  // $ExpectType number[]
  R.symmetricDifference([7,6,5,4,3])([1,2,3,4]); // => [7,6,5,1,2]
};

// symmetricDifferenceWith
() => {
  const eqA = R.eqBy(R.prop('a'));
  const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
  const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
  // $ExpectType { a: number }[]
  R.symmetricDifferenceWith(eqA, l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // $ExpectType { a: number }[]
  R.symmetricDifferenceWith(eqA)(l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
  // $ExpectType (a: any[]) => any[]
  R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
};

/*****************************************************************
 * String category
 */

// replace
() => {
    // $ExpectType string
    R.replace('foo', 'bar', 'foo foo foo'); // => 'bar foo foo'
    // $ExpectType string
    R.replace('foo', 'bar')('foo foo foo'); // => 'bar foo foo'
    // $ExpectType string
    R.replace('foo')('bar')('foo foo foo'); // => 'bar foo foo'
    // $ExpectType string
    R.replace(/foo/, 'bar', 'foo foo foo'); // => 'bar foo foo'

    // Use the 'g' (global) flag to replace all occurrences:
    // $ExpectType string
    R.replace(/foo/g, 'bar', 'foo foo foo'); // => 'bar bar bar'
    // $ExpectType string
    R.replace(/foo/g, 'bar')('foo foo foo'); // => 'bar bar bar'
    // $ExpectType string
    R.replace(/foo/g)('bar')('foo foo foo'); // => 'bar bar bar'
};

/*****************************************************************
 * Is category
 */

() => {
    // $ExpectType boolean
    R.is(Object, {}); // => true
    // $ExpectType boolean
    R.is(Object)({}); // => true
    // $ExpectType boolean
    R.is(Number, 1); // => true
    // $ExpectType boolean
    R.is(Number)(1); // => true
    // $ExpectType boolean
    R.is(Object, 1); // => false
    // $ExpectType boolean
    R.is(Object)(1); // => false
    // $ExpectType boolean
    R.is(String, 's'); // => true
    // $ExpectType boolean
    R.is(String)('s'); // => true
    // $ExpectType boolean
    R.is(String, ''); // => true
    // $ExpectType boolean
    R.is(String)(''); // => true
    // $ExpectType boolean
    R.is(Object, new Object()); // => true
    // $ExpectType boolean
    R.is(Object)(new Object()); // => true
    // $ExpectType boolean
    R.is(Object, 's'); // => false
    // $ExpectType boolean
    R.is(Object)('s'); // => false
    // $ExpectType boolean
    R.is(Number, {}); // => false
    // $ExpectType boolean
    R.is(Number)({}); // => false
};

/*****************************************************************
 * Logic category
 */

// allPass
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0;};
    let f = R.allPass([gt10, even]);
    // $ExpectType boolean
    f(11); // => false
    // $ExpectType boolean
    f(12); // => true
};

// and
() => {
    // $ExpectType boolean
    R.and(false, true); // => false
    // $ExpectType number
    R.and(0, []); // => 0
    // $ExpectType number
    R.and(0)([]); // => 0
    // $ExpectType null
    R.and(null, ''); // => null
    let Why: any = (function(val: boolean) {
        let why: any;
        why.val = val;
        why.and = function(x: boolean) {
            return this.val && x;
        };
        return Why;
    })(true);
    let why = new Why(true);
    // $ExpectType boolean
    R.and(why, false); // false
};

// anyPass
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0;};
    let f = R.anyPass([gt10, even]);
    // $ExpectType boolean
    f(11); // => true
    // $ExpectType boolean
    f(8); // => true
    // $ExpectType boolean
    f(9); // => false
};

// both
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0; };
    let f = R.both(gt10, even);
    let g = R.both(gt10)(even);
    // $ExpectType boolean
    f(100); // => true
    // $ExpectType boolean
    f(101); // => false
};

// complement
() => {
    let isEven = function(n: number) { return n % 2 === 0; };
    let isOdd = R.complement(isEven);
    // $ExpectType boolean
    isOdd(21); // => true
    // $ExpectType boolean
    isOdd(42); // => false
};

// eqBy
(() => {
    // $ExpectType boolean
    R.eqBy(Math.abs, 5, -5); // => true
    // $ExpectType boolean
    R.eqBy(Math.abs)(5, -5); // => true
    // $ExpectType boolean
    R.eqBy(Math.abs, 5)(-5); // => true
});

// defaultTo
() => {
    let defaultTo42 = R.defaultTo(42);
    // $ExpectType number
    defaultTo42(null);  // => 42
    // $ExpectType number
    defaultTo42(undefined);  // => 42
    // $ExpectType string
    defaultTo42('Ramda');  // => 'Ramda'
};

// either
() => {
    let gt10 = function(x: number) { return x > 10; };
    let even = function(x: number) { return x % 2 === 0; };
    let f = R.either(gt10, even);
    let g = R.either(gt10)(even);
    // $ExpectType boolean
    f(101); // => true
    // $ExpectType boolean
    f(8); // => true
};

// ifElse
() => {
    // Flatten all arrays in the list but leave other values alone.
    let flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

    // $ExpectType any[]
    flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
    // $ExpectType any[]
    flattenArrays([[[10], 123], [8, [10]], 'hello']); // => [[10, 123], [8, 10], 'hello']
};

// isEmpty
() => {
    // $ExpectType boolean
    R.isEmpty([1, 2, 3]); // => false
    // $ExpectType boolean
    R.isEmpty([]); // => true
    // $ExpectType boolean
    R.isEmpty(''); // => true
    // $ExpectType boolean
    R.isEmpty(null); // => false
    // $ExpectType boolean
    R.isEmpty({}); // =>true
    // $ExpectType boolean
    R.isEmpty({a: 1}); // => false
};

// not
() => {
    // $ExpectType boolean
    R.not(true); // => false
    // $ExpectType boolean
    R.not(false); // => true
    // $ExpectType boolean
    R.not(0); // => true
    // $ExpectType boolean
    R.not(1); // => false
};

class Why {
    val: boolean;
    constructor(val: boolean) {
        this.val = val;
    }
    or(x: boolean) {
        return this.val && x;
    }
}

// or
() => {
    // $ExpectType boolean
    R.or(false, true); // => false
    // $ExpectType number|any[]
    R.or(0, []); // => []
    // $ExpectType number|any[]
    R.or(0)([]); // => []
    // $ExpectType string
    R.or(null, ''); // => ''

    let why = new Why(true);
    why.or(true);
    // $ExpectType Why|boolean
    R.or(why, false); // false
};

// intersperse
() => {
    // $ExpectType string[]
    R.intersperse(',', ['foo', 'bar']); // => ['foo', ',', 'bar']
    // $ExpectType number[]
    R.intersperse(0, [1, 2]); // => [1, 0, 2]
    // $ExpectType number[]
    R.intersperse(0, [1]); // => [1]
};

// ISSUES:

// RESOLVED ISSUES:

() => {
    // #65, evolve issue
    const a1 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) }, { name: 'Tomato', elapsed: 100, remaining: 1400 });
    const a2 = R.evolve({ elapsed: R.add(1), remaining: R.add(-1) })({ name: 'Tomato', elapsed: 100, remaining: 1400 });
    let test = { a: 1, b: 2};
    // $ExpectType { a: number, b: number }
    R.evolve({ a: R.add(1)}, test );
};

() => {
    // #73
    let filterMatrix = function (v: number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.filter((c: number) => c === v), m);
      // return R.chain(R.filter(R.equals(v)), m)
    };
    let b = [
        [0, 1],
        [1, 0]
    ];
    // $ExpectType number[]
    filterMatrix(1, b); // --> [1, 1]

    // compiles
    let filterMatrix2 = function (v: number, m: Array<Array<number>>): Array<number> {
        return R.chain((r: number[]) => R.filter((c: number) => c === v, r), m);
    };

    // also compiles
    let mapMatrix3 = function(fn: (v: number) => number, m: Array<Array<number>>): Array<number> {
      return R.chain(R.map((c: number) => fn(c)), m);
    };
};

() => {
    // #109
    function grepSomethingRecursively(grepPatterns: string | string[]) {
        if (R.is(Array, grepPatterns)) {
            R.forEach(() => {}, grepPatterns);
        }
    }
};

// UNRESOLVED ISSUES:

// /*

() => {
    // #29
    // $ExpectType string[]
    R.pipe(R.append('a'), R.uniq)(['a', 'b', 'c']);
    // $ExpectType string[][]
    R.pipe(
        R.split(''),
        R.map((letter: string) => ([ letter ]))
    )('dave');

    // $ExpectType number
    R.pipe(
        R.prop<string>('name'),
        R.length
    )({ name: 'dave' });

    let build: string;
    let mapPackages = R.partial(R.map, [(test: any) => test.package]);
    let filterBuild = R.partial(R.filter, [(test: any) => test.build === build]);
    let getPackages = R.compose(R.uniq, mapPackages, filterBuild);
    this.packages = getPackages(this._tests);
    // ^ expected: ??

    interface Foo {
        build: string;
        package: string;
    }
    const build2 = 'dev';
    let mapPackages2 = R.map((test: Foo) => test.package);
    let filterBuild2 = R.filter((test: Foo) => test.build === build2);
    let getPackages2 = R.compose(R.uniq, mapPackages2, filterBuild2);
    let foos = [{
        build: 'dev',
        package: 'devPackage'
    }, {
        build: 'prod',
        package: 'prodPackage'
    }, {
        build: 'dev',
        package: 'devPackage'
    }];
    let foosFiltered = getPackages2(foos);
    // ^ expected: ??
};

() => {
    // #69: lens composition
    const sectioneditems = { sections: [
        {items: []},
        {items: []}
    ]};
    const elem = 'Hello';
    R.over(R.compose(R.lensProp('sections'), R.lensIndex(sectioneditems.sections.length - 1), R.lensProp('items')), R.append(elem), sectioneditems);
};

() => {
    // #78: curry loses generics
    // : <T>R.CurriedFunction3<R.Pred<T>, T, T[], T[]>
    // : R.CurriedFunction3<R.Pred<any>, any, any[], any[]>
    let updateBy = R.curry(<T>(pred: (v: T) => boolean, val: T, array: T[]): T[] => {
        let i = R.findIndex(pred, array);
        if (i >= 0) {
            return R.update(i, val, array);
        } else {
            return array;
        }
    });
    // $ExpectType number[]
    updateBy((n: number) => n > 1, 0, [1,2,3]);
};

() => {
    // #86: lose generics in compose
    let pairs = [['1','A'], ['2','B'], ['3','C']];
    // $ExpectType { [index: string]: string }
    R.fromPairs ([['1','A'], ['2','B'], ['3','C']]);
    // $ExpectType { [index: string]: string }
    R.fromPairs (pairs);   // fails -- variable reduced to string[][], killing tuples
    // $ExpectType { [index: string]: string }
    R.pipe   (R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);
    // $ExpectType { [index: string]: string }
    R.compose(R.fromPairs)([['1','A'], ['2','B'], ['3','C']]);

    // generics in pipe loses generics
    R.pipe(R.identity);
};

() => {
    // #90: curried function loses generics
    const map = (func: (some: string) => (x: number) => 1) => {
      return func('xx')(1);
    };
    const map2 = (func: (some: string, other: string) => '1') => {
      return func('xx', 'x');
    };
    // will work only with proposed changes
    map(R.assoc('xxx'));
    map2(R.assoc('xxx'));
};

() => {
    // #92: lose generics in compose

    // can't infer cond paths, must annotate:
    // $ExpectType <T>(v: T) => T
    const x = R.cond([
        [R.F, R.F],
        [R.T, R.identity]
    ]);
    // argument order matters for some reason...
    // $ExpectType (v: number) => number
    R.pipe   (R.inc, x); // ok
    // $ExpectType (v: number) => number
    R.compose(x, R.inc); // boom

    // don't use generics in pipe/compose/curry if it can't resolve them right away:
    let pipeF0 = R.pipe   (R.identity);         // : (v: {}) => {}
    let compF0 = R.compose(R.identity);         // : (v: {}) => {}

    // argument order matters too:
    let pipeF1 = R.pipe   (R.inc, R.identity);  // : (v: number) => number
    let compF1 = R.compose(R.identity, R.inc);  // : (v: number) => {}
    // $ExpectType number
    compF1(1);          // uh-oh, fails

    // also can't reason backward:
    let compF2 = R.compose(R.inc, R.identity);  // : (v: {}) => number
    // $ExpectType number
    compF2('foo');      // uh-oh, passes
    let pipeF2 = R.pipe   (R.identity, R.inc);  // : (v: {}) => number
    // $ExpectType number
    pipeF2('foo');      // uh-oh, passes
};

() => {
    // #101: compose can't guess types for generic functions
    interface SomeStruct {
        a: number[];
        b: string[];
        c: { [index: string]: string };
    }
    const x: SomeStruct = {
        'a': [],
        'b': [],
        'c': {}
    };
    // const fun = <(y: SomeStruct) => SomeStruct>R.compose(        // annotated: works
    const fun = R.compose(
        R.assoc('a', [1, 2, 3]),
        R.assoc('b', ['a', 'b', 'c']),
        R.assoc('c', { 'k': 'v'})
    );
    let struct: SomeStruct = fun(x);

    let a = R.assoc('a', 2, {z:3});
    let b = R.assoc('b', 2);
};

() => {
    // #118: flatten
    // $ExpectType number[]
    R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
    // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

() => {
  // #119: path
  // $ExpectType number
  R.path(['a', 'b', 'c'], {a: {b: {c: 2}}});
  // $ExpectType null
  R.path(['a', 'b', 'c'], {a: {b: 2}});   // still fails
  // let n = R.path(['a', '0', 'c'], {a: [{c: 2}] })
  // $ExpectType number
  R.path(['a', 0, 'c'], {a: [{c: 2}] });
};

() => {
  // #129: nested evolve
  type FormState = { index: number };
  function ramdaIssue(state: FormState): FormState {
    return R.evolve({
        index: R.inc
    }, state);
  }
};

// */
