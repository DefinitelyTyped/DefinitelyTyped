import * as R from "ramda";

function double(x: number): number {
    return x + x;
}

function shout(x: number): string {
    return x >= 10 ? "big" : "small";
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

(() => {
    let x: boolean;
    x = R.isArrayLike("a");
    x = R.isArrayLike([1, 2, 3]);
    x = R.isArrayLike([]);
});

(() => {
    R.propIs(Number, "x", {x: 1, y: 2});  // => true
    R.propIs(Number, "x")({x: 1, y: 2});  // => true
    R.propIs(Number)("x", {x: 1, y: 2});  // => true
    R.propIs(Number)("x")({x: 1, y: 2});  // => true
    R.propIs(Number, "x", {x: "foo"});    // => false
    R.propIs(Number, "x", {});            // => false
});

(() => {
    R.type({}); // => "Object"
    R.type(1); // => "Number"
    R.type(false); // => "Boolean"
    R.type("s"); // => "String"
    R.type(null); // => "Null"
    R.type([]); // => "Array"
    R.type(/[A-z]/); // => "RegExp"
});

() => {
    function takesNoArg() {
        return true;
    }
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    function addFourNumbers(a: number, b: number, c: number, d: number): number {
        return a + b + c + d;
    }

    const x1: (a: number, b: number, c: number, d: number) => number = R.curry(addFourNumbers);
    // because of the current way of currying, the following call results in a type error
    // const x2: Function = R.curry(addFourNumbers)(1,2,4)
    const x3: (c: number, d: number) => number = R.curry(addFourNumbers)(1)(2);
    const x4: (d: number) => number = R.curry(addFourNumbers)(1)(2)(3);
    const y1: number   = R.curry(addFourNumbers)(1)(2)(3)(4);
    const y2: number   = R.curry(addFourNumbers)(1, 2)(3, 4);
    const y3: number   = R.curry(addFourNumbers)(1, 2, 3)(4);

    R.nAry(0);
    R.nAry(0, takesNoArg);
    R.nAry(0, takesOneArg);
    R.nAry(1, takesTwoArgs);
    R.nAry(1, takesThreeArgs);

    const u1: (a: any) => any = R.unary(takesOneArg);
    const u2: (a: any) => any = R.unary(takesTwoArgs);
    const u3: (a: any) => any = R.unary(takesThreeArgs);

    R.binary(takesTwoArgs);
    R.binary(takesThreeArgs);

    function addTwoNumbers(a: number, b: number) {
        return a + b;
    }

    const addTwoNumbersCurried = R.curry(addTwoNumbers);

    const inc        = addTwoNumbersCurried(1);
    const z1: number = inc(2);
    const z2: number = addTwoNumbersCurried(2, 3);
};

() => {
    interface Car { speed?: number;
    }
    interface FastCar { speed: number;
    }

    function typeGuard(a: number, b: number, c: number, d: number, e: number, car: Car): car is FastCar {
        return car.speed !== undefined;
    }

    const typeGuardCurried = R.curry(typeGuard);

    function drive(fastCar: FastCar) {
    }

    const cars: Car[] = [{speed: 65}, {}];
    for (const car of cars) {
        if (typeGuardCurried(1)(2)(3)(4)(5)(car)) {
            drive(car);
        }
    }
};

() => {
    const addFour          = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN<number>(4, addFour);
    const res: number      = uncurriedAddFour(1, 2, 3, 4); // => 10
};

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.isArrayLike, R.of);
    const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
    const b: number[] = coerceArray(1);         // => [1]
};

(() => {
    R.nthArg(1)("a", "b", "c"); // => 'b'
    R.nthArg(-1)("a", "b", "c"); // => 'c'
});

() => {
    const fn: (...args: string[]) => string = R.unapply(JSON.stringify);
    const res: string                       = R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]'
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

/* compose */
() => {
    function double(x: number): number {
        return x + x;
    }

    function limit10(x: number): boolean {
        return x >= 10;
    }

    const func: (x: number) => boolean = R.compose(limit10, double);
    const res: boolean                 = R.compose(limit10, double)(10);

    const f0 = (s: string) => +s;      // string -> number
    const f1 = (n: number) => n === 1; // number -> boolean
    const f2 = R.compose(f1, f0);      // string -> boolean

    // akward example that bounces types between number and string
    const g0             = (list: number[]) => R.map(R.inc, list);
    const g1             = R.dropWhile(R.gt(10));
    const g2             = R.map((i: number) => i > 5 ? "bigger" : "smaller");
    const g3             = R.all((i: string) => i === "smaller");
    const g              = R.compose(g3, g2, g1, g0);
    const g_res: boolean = g([1, 2, 10, 13]);
};

/* pipe */
() => {
    const func: (x: number) => string = R.pipe(double, double, shout);
    const res: string                 = R.pipe(double, double, shout)(10);

    const capitalize = (str: string) => R.pipe(
        R.split(""),
        R.adjust(R.toUpper, 0),
        R.join("")
    )(str);

    const f          = R.pipe(Math.pow, R.negate, R.inc);
    const fr: number = f(3, 4); // -(3^4) + 1
};

() => {
    R.invoker("charAt", String.prototype);
    R.invoker("charAt", String.prototype, 1);
};

(() => {
    const range = R.juxt([Math.min, Math.max]);
    range(3, 4, 9, -3); // => [-3, 9]

    const chopped = R.juxt([R.head, R.last]);
    chopped("longstring"); // => ["l", "g"]
});

function square(x: number) {
    return x * x;
}
function add(a: number, b: number) {
    return a + b;
}
// Adds any number of arguments together
function addAll() {
    return 0;
}

// Basic example
R.useWith(addAll, [double, square]);

(() => {
    function printXPlusFive(x: number) {
        console.log(x + 5);
    }

    R.forEach(printXPlusFive, [1, 2, 3]);
    R.clone([{}, {}, {}]);
    R.clone([1, 2, 3]);
})();

// (() => {
//   function printXPlusFive(x, i) { console.log(i + 5); }
//   R.forEach.idx(printXPlusFive, [{name: 1}, {name: 2}, {name: 3}]);
// })();

function i(x: number) {
    return x;
}
R.times(i, 5);

(() => {
    function triple(x: number): number {
        return x * 3;
    }

    function square(x: number): number {
        return x * x;
    }

    const squareThenDoubleThenTriple = R.pipe(square, double, triple);
    squareThenDoubleThenTriple(5); // => 150
})();

(() => {
    function multiply(a: number, b: number): number {
        return a * b;
    }

    const double = R.partial<number>(multiply, [2]);
    double(2); // => 4

    function greet(salutation: string, title: string, firstName: string, lastName: string) {
        return `${salutation}, ${title} ${firstName} ${lastName}!`;
    }

    const sayHello     = R.partial(greet, ["Hello"]);
    const sayHelloToMs = R.partial(sayHello, ["Ms."]);
    sayHelloToMs("Jane", "Jones"); // => 'Hello, Ms. Jane Jones!'

    const greetMsJaneJones = R.partialRight(greet, ["Ms.", "Jane", "Jones"]);
    greetMsJaneJones("Hello"); // => 'Hello, Ms. Jane Jones!'
})();

(() => {
    let numberOfCalls = 0;

    function trackedAdd(a: number, b: number) {
        numberOfCalls += 1;
        return a + b;
    }

    const memoTrackedAdd = R.memoize(trackedAdd);

    memoTrackedAdd(1, 2); // => 3
    numberOfCalls; // => 1
    memoTrackedAdd(1, 2); // => 3
    numberOfCalls; // => 1
    memoTrackedAdd(2, 3); // => 5
    numberOfCalls; // => 2

    // Note that argument order matters
    memoTrackedAdd(2, 1); // => 3
    numberOfCalls; // => 3

    function stringLength(str: string): number {
      return str.length;
    }
    const memoStringLength = R.memoize<number>(stringLength);
    const isLong = memoStringLength('short') > 10; // false
})();

(() => {
    const addOneOnce = R.once((x: number) => x + 1);
    addOneOnce(10); // => 11
    addOneOnce(addOneOnce(50)); // => 11

    const str = R.once<string>(() => 'test')();
})();

(() => {
    const slashify = R.wrap(R.flip(R.add)("/"), (f: (x: string) => string, x: string) => R.match(/\/$/, x) ? x : f(x));

    slashify("a");  // => 'a/'
    slashify("a/"); // => 'a/'
})();

(() => {
    const numbers = [1, 2, 3];
    R.reduce((a, b) => a + b, 10, numbers); // => 16;
})();

(() => {
    const plus3 = R.add(3);
})();

(() => {
    const pairs = [["a", 1], ["b", 2], ["c", 3]];

    function flattenPairs(pair: [string, number], acc: Array<string|number>): Array<string|number> {
        return acc.concat(pair);
    }

    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
})();

(() => {
    const values = {x: 1, y: 2, z: 3};

    function prependKeyAndDouble(num: number, key: string, obj: any) {
        return key + (num * 2);
    }

    R.mapObjIndexed(prependKeyAndDouble, values); // => { x: 'x2', y: 'y4', z: 'z6' }
});

(() => {
    const a: number[]   = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
    const b: number[][] = R.of([1]); // => [[1]]
    const c: number[]   = R.of(1);
});

() => {
    const a1 = R.empty([1, 2, 3, 4, 5]); // => []
    const a2 = R.empty([1, 2, 3]);     // => []
    const a3 = R.empty("unicorns");    // => ''
    const a4 = R.empty({x: 1, y: 2});  // => {}
};

(() => {
    R.length([1, 2, 3]); // => 3
});

(() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const filterIndexed = R.addIndex(R.filter);

    R.filter(isEven, [1, 2, 3, 4]); // => [2, 4]
    R.filter(isEven, { a: 0, b: 1 }); // => { a: 0 }

    function lastTwo(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]

    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd, { a: 0, b: 1 }); // => { a: 0 }
});
(() => {
    function isNotFour(x: number) {
        return !(x === 4);
    }

    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
    R.take(2, [1, 2, 3, 4]); // => [1, 2]
});
(() => {
    function f(n: number): false | [number, number] {
        return n > 50 ? false : [-n, n + 10];
    }

    const a = R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
    const b = R.unfold(f); // => [-10, -20, -30, -40, -50]
    const c = b(10);
});
/*****************************************************************
 * Function category
 */
() => {
    function mergeThree(a: number, b: number, c: number): number[] {
        return ([]).concat(a, b, c);
    }

    mergeThree(1, 2, 3); // => [1, 2, 3]
    const flipped = R.flip(mergeThree);
    flipped(1, 2, 3); // => [2, 1, 3]
};

/*********************
 * List category
 ********************/
() => {
    const lessThan2 = R.flip(R.lt)(2);
    const lessThan3 = R.flip(R.lt)(3);
    R.all(lessThan2)([1, 2]); // => false
    R.all(lessThan3)([1, 2]); // => true
};

() => {
    const lessThan0 = R.flip(R.lt)(0);
    const lessThan2 = R.flip(R.lt)(2);
    R.any(lessThan0)([1, 2]); // => false
    R.any(lessThan2)([1, 2]); // => true
};

() => {
    R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
    R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    R.aperture(7, [1, 2, 3, 4, 5]); // => []
    R.aperture(7)([1, 2, 3, 4, 5]); // => []
};

() => {
    R.append("tests", ["write", "more"]); // => ['write', 'more', 'tests']
    R.append("tests")(["write", "more"]); // => ['write', 'more', 'tests']
    R.append("tests", []); // => ['tests']
};

() => {
    function duplicate(n: number) {
        return [n, n];
    }

    R.chain(duplicate, [1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
    R.chain(duplicate)([1, 2, 3]); // => [1, 1, 2, 2, 3, 3]
};

() => {
    R.clamp(1, 10, -1); // => 1
    R.clamp(1, 10)(11); // => 10
    R.clamp(1)(10, 4);  // => 4
    R.clamp("a", "d", "e");  // => 'd'
};

() => {
    R.concat([], []); // => []
    R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
    R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
    R.concat("ABC")("DEF"); // 'ABCDEF'
};

() => {
    R.contains(3)([1, 2, 3]); // => true
    R.contains(3, [1, 2, 3]); // => true
    R.contains(4)([1, 2, 3]); // => false
    R.contains({})([{}, {}]); // => false
    const obj = {};
    R.contains(obj)([{}, obj, {}]); // => true
};

() => {
    R.drop(3, [1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
    R.drop(3)([1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
    R.drop(3, "ramda"); // => 'ram'
    R.drop(3)("ramda"); // => 'ram'
};

(() => {
    R.dropLast(1, ["foo", "bar", "baz"]); // => ['foo', 'bar']
    R.dropLast(2)(["foo", "bar", "baz"]); // => ['foo']
    R.dropLast(3, "ramda");               // => 'ra'
    R.dropLast(3)("ramda");               // => 'ra'
});

(() => {
    const lteThree = (x: number) => x <= 3;
    R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4]
});

() => {
    function lteTwo(x: number) {
        return x <= 2;
    }

    R.dropWhile(lteTwo, [1, 2, 3, 4]); // => [3, 4]
    R.dropWhile(lteTwo)([1, 2, 3, 4]); // => [3, 4]
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const filterEven = R.filter(isEven);
    filterEven({ a: 0, b: 1 }); // => { a: 0 }
    filterEven([0, 1]); // => [0]

    const rejectEven = R.reject(isEven);
    rejectEven({ a: 0, b: 1 }); // => { b: 1 }
    rejectEven([0, 1]); // => [1]
};

() => {
    function lastTwo(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    const filterIndexed = R.addIndex(R.filter);

    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
    const lastTwoFn = filterIndexed(lastTwo);
    lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
};

() => {
    const xs = [{a: 1}, {a: 2}, {a: 3}];
    R.find(R.propEq("a", 2))(xs); // => {a: 2}
    R.find(R.propEq("a", 4))(xs); // => undefined
};

() => {
    const xs = [{a: 1}, {a: 2}, {a: 3}];
    R.findIndex(R.propEq("a", 2))(xs); // => 1
    R.findIndex(R.propEq("a", 4))(xs); // => -1

    R.findIndex((x: number) => x === 1, [1, 2, 3]);
};

() => {
    const xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    R.findLast(R.propEq("a", 1))(xs); // => {a: 1, b: 1}
    R.findLast(R.propEq("a", 4))(xs); // => undefined
};

() => {
    const xs = [{a: 1, b: 0}, {a: 1, b: 1}];
    R.findLastIndex(R.propEq("a", 1))(xs); // => 1
    R.findLastIndex(R.propEq("a", 4))(xs); // => -1
    R.findLastIndex((x: number) => x === 1, [1, 2, 3]);
};

() => {
    const testPath = ["x", 0, "y"];
    const testObj  = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.pathEq(testPath, 2, testObj); // => true
    R.pathEq(testPath, 2)(testObj); // => true
    R.pathEq(testPath)(2)(testObj); // => true
    R.pathEq(testPath)(2, testObj); // => true

    const user1    = {address: {zipCode: 90210}};
    const user2    = {address: {zipCode: 55555}};
    const user3    = {name: "Bob"};
    const users    = [user1, user2, user3];
    const isFamous = R.pathEq(["address", "zipCode"], 90210);
    R.filter(isFamous, users); // => [ user1 ]
};

() => {
    const xs: { [key: string]: string } = {a: "1", b: "0"};
    R.propEq("a", "1", xs); // => true
    R.propEq("a", "4", xs); // => false
};

() => {
    const xs: { [key: string]: number } = {a: 1, b: 0};
    R.propEq("a", 1, xs); // => true
    R.propEq("a", 4, xs); // => false
};

() => {
    const xs = {a: "1", b: "0"};
    R.propEq("a", "1", xs); // => true
    R.propEq("a", "4", xs); // => false
};

() => {
    const xs = {a: 1, b: 0};
    R.propEq("a", 1, xs); // => true
    R.propEq("a", 4, xs); // => false
};

interface Obj {
    a: number;
    b: number;
}

() => {
    const xs: Obj = {a: 1, b: 0};
    R.propEq("a", 1, xs); // => true
    R.propEq("a", 4, xs); // => false
};

() => {
    R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
    // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

() => {
    function printXPlusFive(x: number) {
        console.log(x + 5);
    }

    R.forEach(printXPlusFive, [1, 2, 3]); // => [1, 2, 3]
    R.forEach(printXPlusFive)([1, 2, 3]); // => [1, 2, 3]
    // -> 6
    // -> 7
    // -> 8
};

() => {
    function plusFive(num: number, idx: number, list: number[]) {
        list[idx] = num + 5;
    }

    R.addIndex(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
};

() => {
    const byGrade  = R.groupBy((student: { score: number; name: string }) => {
        const score = student.score;
        return score < 65 ? "F" :
            score < 70 ? "D" :
                score < 80 ? "C" :
                    score < 90 ? "B" : "A";
    });
    const students = [{name: "Abby", score: 84},
        {name: "Eddy", score: 58},
        {name: "Jack", score: 69}];
    byGrade(students);
};

() => {
    R.groupWith(R.equals)([0, 1, 1, 2, 3, 5, 8, 13, 21]);

    R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

    R.groupWith((a: number, b: number) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
    // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

    const isVowel = (a: string) => R.contains(a, "aeiou") ? a : "";
    R.groupWith(R.eqBy<string>(isVowel), "aestiou");
    // ['ae', 'st', 'iou']
};

() => {
    R.head(["fi", "fo", "fum"]); // => 'fi'
    R.head([10, "ten"]); // => 10
    R.head(["10", 10]); // => '10'
    R.head("abc"); // => 'a'
    R.head(""); // => ''
};

(() => {
    interface Book {
        id: string;
        title: string;
    }
    const list: Book[] = [{id: "xyz", title: "A"}, {id: "abc", title: "B"}];
    const a1 = R.indexBy(R.prop("id"), list);
    const a2 = R.indexBy(R.prop("id"))(list);
    const a3 = R.indexBy<{ id: string }>(R.prop<string>("id"))(list);

    const titlesIndexedByTitles: { [k: string]: string } = R.pipe(
        R.map((x: Book) => x.title),
        R.indexBy(x => x),
    )(list);
});

() => {
    R.indexOf(3, [1, 2, 3, 4]); // => 2
    R.indexOf(10)([1, 2, 3, 4]); // => -1
};

() => {
    R.init(["fi", "fo", "fum"]); // => ['fi', 'fo']
    R.init("abc"); // => 'ab'
    R.init(""); // => ''
};

() => {
    R.insert(2, 5, [1, 2, 3, 4]); // => [1,2,5,3,4]
    R.insert(2)(5, [1, 2, 3, 4]); // => [1,2,5,3,4]
    R.insert(2, 5)([1, 2, 3, 4]); // => [1,2,5,3,4]
};

() => {
    R.insertAll(2, [10, 11, 12], [1, 2, 3, 4]);
    R.insertAll(2)([10, 11, 12], [1, 2, 3, 4]);
    R.insertAll(2, [10, 11, 12])([1, 2, 3, 4]);
};

() => {
    const numbers    = [1, 2, 3, 4];
    const transducer = R.compose(R.map(R.add(1)), R.take(2));

    R.into([], transducer, numbers); // => [2, 3]

    const intoArray = R.into([]);
    intoArray(transducer, numbers); // => [2, 3]
};

() => {
    const spacer = R.join(" ");
    spacer(["a", 2, 3.4]);   // => 'a 2 3.4'
    R.join("|", [1, 2, 3]);    // => '1|2|3'
};

() => {
    R.last(["fi", "fo", "fum"]); // => 'fum'
    R.last("abc"); // => 'c'
    R.last(""); // => ''
};

() => {
    R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); // => 6
    R.lastIndexOf(10, [1, 2, 3, 4]); // => -1
};

() => {
    R.length([]); // => 0
    R.length([1, 2, 3]); // => 3
};

() => {
    const headLens = R.lensIndex(0);
    headLens([10, 20, 30, 40]); // => 10
    headLens.set("mu", [10, 20, 30, 40]); // => ['mu', 20, 30, 40]
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
    R.set(headLens, "x", ["a", "b", "c"]);        // => ['x', 'b', 'c']
    R.over(headLens, R.toUpper, ["a", "b", "c"]); // => ['A', 'b', 'c']
};

() => {
    function double(x: number) {
        return x * 2;
    }

    R.map(double, [1, 2, 3]); // => [2, 4, 6]

    // functor
    const numberFunctor = {
        map: <U>(fn: (c: number) => U) => {
            const chars = "Ifmmp!Xpsme".split("");
            return chars.map(char => fn(char.charCodeAt(0)));
        }
    };
    R.map((x: number) => x - 1, numberFunctor); // => "Hello World"
};

() => {
    interface A {
        a: number;
        b: number;
    }

    interface B {
        a: string;
        b: string;
    }

    R.map<A, A>(R.inc, {a: 1, b: 2});
    R.map<A, B>(R.toString, {a: 1, b: 2});

    R.map<A, A>(R.inc)({a: 1, b: 2});
    R.map<A, B>(R.toString)({a: 1, b: 2});
};

() => {
    const digits = ["1", "2", "3", "4"];

    function append(a: string, b: string): [string, string] {
        return [a + b, a + b];
    }

    R.mapAccum(append, "0", digits); // => ['01234', ['01', '012', '0123', '01234']]
    R.mapAccum(append)("0", digits); // => ['01234', ['01', '012', '0123', '01234']]
    R.mapAccum(append, "0")(digits); // => ['01234', ['01', '012', '0123', '01234']]
};

() => {
    const digits = ["1", "2", "3", "4"];

    function append(a: string, b: string): [string, string] {
        return [a + b, a + b];
    }

    R.mapAccumRight(append, "0", digits); // => ['04321', ['04321', '0432', '043', '04']]
    R.mapAccumRight(append)("0", digits); // => ['04321', ['04321', '0432', '043', '04']]
    R.mapAccumRight(append, "0")(digits); // => ['04321', ['04321', '0432', '043', '04']]
};

() => {
    function squareEnds(elt: number, idx: number, list: number[]) {
        if (idx === 0 || idx === list.length - 1) {
            return elt * elt;
        }
        return elt;
    }

    R.addIndex(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
    R.addIndex(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
};

() => {
    R.none(R.isNaN, [1, 2, 3]); // => true
    R.none(R.isNaN, [1, 2, 3, NaN]); // => false
    R.none(R.isNaN)([1, 2, 3, NaN]); // => false
};

() => {
    const list = ["foo", "bar", "baz", "quux"];
    R.nth(1, list); // => 'bar'
    R.nth(-1, list); // => 'quux'
    R.nth(-99, list); // => undefined
    R.nth(-99)(list); // => undefined
};

() => {
    R.partition(R.contains("s"), ["sss", "ttt", "foo", "bars"]);
    R.partition(R.contains("s"))(["sss", "ttt", "foo", "bars"]);
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
};

() => {
    const a = R.pluck("a")([{a: 1}, {a: 2}]); // => [1, 2]
    const b = R.pluck(0)([[1, 2], [3, 4]]);   // => [1, 3]
};

() => {
    R.prepend("fee", ["fi", "fo", "fum"]); // => ['fee', 'fi', 'fo', 'fum']
    R.prepend("fee")(["fi", "fo", "fum"]); // => ['fee', 'fi', 'fo', 'fum']
};

() => {
    R.range(1, 5);    // => [1, 2, 3, 4]
    R.range(50)(53);  // => [50, 51, 52]
};

() => {
    const numbers = [1, 2, 3];

    R.reduce((a, b) => a + b, 10, numbers); // => 16
    R.reduce(add)(10, numbers); // => 16
    R.reduce<number, number>((a, b) => a + b, 10)(numbers); // => 16
};

interface Student {
    name: string;
    score: number;
}

() => {
    const reduceToNamesBy = R.reduceBy((acc: string[], student: Student) => acc.concat(student.name), []);
    const namesByGrade    = reduceToNamesBy((student) => {
        const score = student.score;
        return score < 65 ? "F" :
            score < 70 ? "D" :
                score < 80 ? "C" :
                    score < 90 ? "B" : "A";
    });
    const students          = [{name: "Lucy", score: 92},
        {name: "Drew", score: 85},
        {name: "Bart", score: 62}];
    const names           = namesByGrade(students);
    // {
    //   'A': ['Lucy'],
    //   'B': ['Drew']
    //   'F': ['Bart']
    // }
};

() => {
    const reduceIndexed = R.addIndex(R.reduce);
    const letters       = ["a", "b", "c"];

    function objectify(accObject: { [elem: string]: number }, elem: string, idx: number, list: string[]) {
        accObject[elem] = idx;
        return accObject;
    }

    reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
};

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}
type Pair = KeyValuePair<string, number>;

() => {
    const pairs: Pair[] = [["a", 1], ["b", 2], ["c", 3]];

    function flattenPairs(pair: Pair, acc: Array<string|number>): Array<string|number> {
        return acc.concat(pair);
    }

    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    R.reduceRight(flattenPairs, [])(pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
    R.reduceRight(flattenPairs)([], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
};

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
};

() => {
    function lastTwo(val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    const rejectIndexed = R.addIndex(R.reject);
    rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
    rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
};

() => {
    R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
    R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
    R.remove(2)(3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
};

() => {
    R.repeat("hi", 5); // => ['hi', 'hi', 'hi', 'hi', 'hi']
    const obj          = {};
    const repeatedObjs = R.repeat(obj, 5); // => [{}, {}, {}, {}, {}]
    repeatedObjs[0] === repeatedObjs[1]; // => true
};

() => {
    R.reverse([1, 2, 3]);  // => [3, 2, 1]
    R.reverse([1, 2]);     // => [2, 1]
    R.reverse([1]);        // => [1]
    R.reverse([]);         // => []
};

() => {
    const numbers = [1, 2, 3, 4];
    R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24]
    R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24]
    R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24]
};

() => {
    const xs = R.range(0, 10);
    R.slice(2, 5, xs); // => [2, 3, 4]
    R.slice(2, 5)(xs); // => [2, 3, 4]
    R.slice(2)(5, xs); // => [2, 3, 4]

    const str = "Hello World";
    R.slice(2, 5, str); // => 'llo'
    R.slice(2, 5)(str); // => 'llo'
    R.slice(2)(5, str); // => 'llo'
};

() => {
    function diff(a: number, b: number) {
        return a - b;
    }

    R.sort(diff, [4, 2, 7, 5]); // => [2, 4, 5, 7]
    R.sort(diff)([4, 2, 7, 5]); // => [2, 4, 5, 7]
};

() => {
    const fn        = R.cond([
        [R.equals(0), R.always("water freezes at 0°C")],
        [R.equals(100), R.always("water boils at 100°C")],
        [R.T, (temp: number) => `nothing special happens at ${temp}°C`]
    ]);
    const a: string = fn(0); // => 'water freezes at 0°C'
    const b: string = fn(50); // => 'nothing special happens at 50°C'
    const c: string = fn(100); // => 'water boils at 100°C'
};

() => {
    R.tail(["fi", "fo", "fum"]); // => ['fo', 'fum']
    R.tail([1, 2, 3]); // => [2, 3]
    R.tail("abc");  // => 'bc'
    R.tail("");     // => ''
};

() => {
    R.take(3, [1, 2, 3, 4, 5]); // => [1,2,3]

    const members  = ["Paul Desmond", "Bob Bates", "Joe Dodge", "Ron Crotty", "Lloyd Davis", "Joe Morello", "Norman Bates",
        "Eugene Wright", "Gerry Mulligan", "Jack Six", "Alan Dawson", "Darius Brubeck", "Chris Brubeck",
        "Dan Brubeck", "Bobby Militello", "Michael Moore", "Randy Jones"];
    const takeFive = R.take(5);
    takeFive(members); // => ["Paul Desmond","Bob Bates","Joe Dodge","Ron Crotty","Lloyd Davis"]
};

() => {
    R.take(3, "Example"); // => "Exa"

    const takeThree = R.take(3);
    takeThree("Example"); // => "Exa"
};

() => {
    const a: string[] = R.takeLast(1, ["foo", "bar", "baz"]); // => ['baz']
    const b: string[] = R.takeLast(2)(["foo", "bar", "baz"]); // => ['bar', 'baz']
    const c: string   = R.takeLast(3, "ramda");               // => 'mda'
    const d: string   = R.takeLast(3)("ramda");               // => 'mda'
};

() => {
    const isNotOne    = (x: number) => x !== 1;
    const a: number[] = R.takeLastWhile(isNotOne, [1, 2, 3, 4]); // => [2, 3, 4]
    const b: number[] = R.takeLastWhile(isNotOne)([1, 2, 3, 4]); // => [2, 3, 4]
};

() => {
    function isNotFour(x: number) {
        return !(x === 4);
    }

    R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
    R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3]
};

() => {
    const sayX      = (x: number) => console.log("x is " + x);
    const a: number = R.tap(sayX, 100); // => 100
};

() => {
    const a: boolean = R.test(/^x/, "xyz"); // => true
    const b: boolean = R.test(/^y/)("xyz"); // => false
};

() => {
    const a1 = R.times(R.identity, 5); // => [0, 1, 2, 3, 4]
    const a2 = R.times(R.identity)(5); // => [0, 1, 2, 3, 4]
};

() => {
    class Point {
        constructor(public x: number, public y: number) {
            this.x = x;
            this.y = y;
        }

        toStringn() {
            return `new Point(${this.x}, ${this.y})`;
        }
    }
    R.toString(new Point(1, 2)); // => 'new Point(1, 2)'

    R.toString(42); // => '42'
    R.toString("abc"); // => '"abc"'
    R.toString([1, 2, 3]); // => '[1, 2, 3]'
    R.toString({foo: 1, bar: 2, baz: 3}); // => '{"bar": 2, "baz": 3, "foo": 1}'
    R.toString(new Date("2001-02-03T04:05:06Z")); // => 'new Date("2001-02-03T04:05:06.000Z")'
};

() => {
    const numbers    = [1, 2, 3, 4];
    const transducer = R.compose(R.map(R.add(1)), R.take(2));
    const fn         = R.flip<number, number[], number[]>(R.append);
    R.transduce(transducer, fn, [], numbers); // => [2, 3]
    R.transduce(transducer, fn, [])(numbers); // => [2, 3]
    R.transduce(transducer, fn)([], numbers); // => [2, 3]
    R.transduce<number, number>(transducer)(fn, [], numbers); // => [2, 3]
};

() => {
    const a: Array<Array<number | string>> = R.transpose<number | string>([[1, "a"], [2, "b"], [3, "c"]]); // => [[1, 2, 3], ['a', 'b', 'c']]
    const b: Array<Array<number | string>> = R.transpose<number | string>([[1, 2, 3], ["a", "b", "c"]]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    const c: number[][]            = R.transpose([[10, 11], [20], [], [30, 31, 32]]); // => [[10, 20, 30], [11, 31], [32]]
};

() => {
    const of = Array.of;
    const fn = (x: number) => Array.of(x + 1);
    const list = [1, 2, 3];
    R.traverse(of, fn, list);
    R.traverse(of, fn)(list);
    R.traverse<number, number[], {}>(of)(fn, list);
};

() => {
    const x          = R.prop("x");
    const a: boolean = R.tryCatch<boolean>(R.prop("x"), R.F)({x: true}); // => true
    const b: boolean = R.tryCatch<boolean>(R.prop("x"), R.F)(null);      // => false
    const c: boolean = R.tryCatch<boolean>(R.and, R.F)(true, true);      // => true
};

() => {
    R.uniq([1, 1, 2, 1]); // => [1, 2]
    R.uniq([{}, {}]);     // => [{}, {}]
    R.uniq([1, "1"]);     // => [1, '1']
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
    R.equals(R.unnest([1, [2], [[3]]]), [1, 2, [3]]); // => true
    R.equals(R.unnest<number>([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]); // => true
};

() => {
    R.xprod([1, 2], ["a", "b"]); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    R.xprod([1, 2])(["a", "b"]); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
};

() => {
    R.zip([1, 2, 3], ["a", "b", "c"]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
    R.zip([1, 2, 3])(["a", "b", "c"]); // => [[1, 'a'], [2, 'b'], [3, 'c']]
};

() => {
    R.zipObj(["a", "b", "c"], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
    R.zipObj(["a", "b", "c"])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
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
    interface ABC { a: number; b: number; c: number; }
    const a: ABC = R.assoc("c", 3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
    const b: ABC = R.assoc("c")(3, {a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
    const c: ABC = R.assoc("c", 3)({a: 1, b: 2}); // => {a: 1, b: 2, c: 3}
};

() => {
    const a1 = R.dissoc<{ a: number, c: number }>("b", {a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
    const a2 = R.dissoc("b", {a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
    const a4 = R.dissoc("b")<{ a: number, c: number }>({a: 1, b: 2, c: 3}); // => {a: 1, c: 3}
};

() => {
    const testPath = ["x", 0, "y"];
    const testObj  = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.assocPath(testPath, 42, testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath, 42)(testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath)(42)(testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath)(42, testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
};

() => {
    const a1 = R.dissocPath(["a", "b", "c"], {a: {b: {c: 42}}}); // => {a: {b: {}}}
    // optionally specify return type
    const a2 = R.dissocPath<{ a: { b: number } }>(["a", "b", "c"], {a: {b: {c: 42}}}); // => {a: {b: {}}}
    const a3 = R.dissocPath(["a", "b", "c"])({a: {b: {c: 42}}}); // => {a: {b: {}}}

    const testPath = ["x", 0, "y"];
    const testObj  = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.dissocPath(testPath, testObj); // => {x: [{z: 3}, {y: 4, z: 5}]}
    R.dissocPath(testPath)(testObj); // => {x: [{z: 3}, {y: 4, z: 5}]}
};

() => {
    const obj1                  = [{}, {}, {}];
    const obj2                  = [{a: 1}, {a: 2}, {a: 3}];
    const a1: any[]           = R.clone(obj1);
    const a2: Array<{ a: number }> = R.clone(obj2);
    const a3: any             = R.clone({});
    const a4: number          = R.clone(10);
    const a5: string          = R.clone("foo");
    const a6: number          = R.clone(Date.now());
};

() => {
    const o1                                        = {a: 1, b: 2, c: 3, d: 4};
    const o2                                        = {a: 10, b: 20, c: 3, d: 40};
    const a1                                      = R.eqProps("a", o1, o2); // => false
    const a2                                      = R.eqProps("c", o1, o2); // => true
    const a3: <T extends { c: any }, U extends { c: any }>(obj1: T, obj2: U) => boolean = R.eqProps("c");
    const a4: <U>(obj2: U) => boolean             = R.eqProps("c", o1);
};

() => {
    const a1 = R.evolve({elapsed: R.add(1), remaining: R.add(-1)}, {name: "Tomato", elapsed: 100, remaining: 1400});
    const a2 = R.evolve({elapsed: R.add(1), remaining: R.add(-1)})({name: "Tomato", elapsed: 100, remaining: 1400});
};

() => {
    // const tomato = {firstName: 'Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
    // const transformations = {
    //     firstName: R.trim,
    //     lastName: R.trim, // Will not get invoked.
    //     data: {elapsed: R.add(1), remaining: R.add(-1)}
    // };
    // const a = R.evolve(transformations, tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
    // const b = R.evolve(transformations)(tomato); // => {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
};

() => {
    const hasName     = R.has("name");
    const a1: boolean = hasName({name: "alice"});   // => true
    const a2: boolean = hasName({name: "bob"});     // => true
    const a3: boolean = hasName({});                // => false

    const point       = {x: 0, y: 0};
    const pointHas    = R.flip(R.has)(point);
    const b1: boolean = pointHas("x");  // => true
    const b2: boolean = pointHas("y");  // => true
    const b3: boolean = pointHas("z");  // => false
};

class Rectangle {
    constructor(public width: number, public height: number) {
        this.width  = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

() => {
    const square = new Rectangle(2, 2);
    R.hasIn("width", square);  // => true
    R.hasIn("area", square);  // => true
    R.flip(R.hasIn)(square)("area");  // => true
};

() => {
    const raceResultsByFirstName = {
        first : "alice",
        second: "jake",
        third : "alice",
    };
    R.invert(raceResultsByFirstName);
    // => { 'alice': ['first', 'third'], 'jake':['second'] }
};

() => {
    const raceResults0 = {
        first : "alice",
        second: "jake"
    };
    R.invertObj(raceResults0);
    // => { 'alice': 'first', 'jake':'second' }

    // Alternatively:
    const raceResults1 = ["alice", "jake"];
    R.invertObj(raceResults1);
    // => { 'alice': '0', 'jake':'1' }
};

() => {
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
};

() => {
    const f = new F();
    R.keysIn(f); // => ['x', 'y']
};

() => {
    const xLens = R.lens(R.prop("x"), R.assoc("x"));
    R.view(xLens, {x: 1, y: 2});            // => 1
    R.view(xLens)({x: 1, y: 2});            // => 1
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
    R.set(xLens)(4, {x: 1, y: 2});          // => {x: 4, y: 2}
    R.set(xLens, 4)({x: 1, y: 2});          // => {x: 4, y: 2}
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
    R.over(xLens, R.negate)({x: 1, y: 2});  // => {x: -1, y: 2}
    R.over(xLens)(R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
};

() => {
    const headLens = R.lensIndex(0);
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
    R.set(headLens, "x", ["a", "b", "c"]);        // => ['x', 'b', 'c']
    R.over(headLens, R.toUpper, ["a", "b", "c"]); // => ['A', 'b', 'c']
};

() => {
    const xLens = R.lensProp("x");
    R.view(xLens, {x: 1, y: 2});            // => 1
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
    R.over(xLens, R.negate, {x: 1, y: 2});  // => {x: -1, y: 2}
};

() => {
    const xyLens  = R.lensPath(["x", 0, "y"]);
    const testObj = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.view(xyLens, testObj);            // => 2
    R.set(xyLens, 4, testObj);          // => {x: [{y: 4, z: 3}, {y: 4, z: 5}]}
    R.over(xyLens, R.negate, testObj);  // => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
};

() => {
    R.keys({a: 1, b: 2, c: 3}); // => ['a', 'b', 'c']
};

() => {
    const f = new F();
    R.keysIn(f); // => ['x', 'y']
};

() => {
    const headLens = R.lens(
        function get(arr: number[]) {
            return arr[0];
        },
        function set(val: number, arr: number[]) {
            return [val].concat(arr.slice(1));
        }
    );
    headLens([10, 20, 30, 40]); // => 10
    headLens.set("mu", [10, 20, 30, 40]); // => ['mu', 20, 30, 40]

    const phraseLens = R.lens(
        function get(obj: any) {
            return obj.phrase;
        },
        function set(val: string, obj: any) {
            const out    = R.clone(obj);
            out.phrase = val;
            return out;
        }
    );
    const obj1       = {phrase: "Absolute filth . . . and I LOVED it!"};
    const obj2       = {phrase: "What's all this, then?"};
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    phraseLens(obj2); // => "What's all this, then?"
    phraseLens.set("Ooh Betty", obj1); // => { phrase: 'Ooh Betty'}
};

() => {
    const phraseLens = R.lensProp("phrase");
    const obj1       = {phrase: "Absolute filth . . . and I LOVED it!"};
    const obj2       = {phrase: "What's all this, then?"};
    phraseLens(obj1); // => 'Absolute filth . . . and I LOVED it!'
    phraseLens(obj2); // => "What's all this, then?"
    phraseLens.set("Ooh Betty", obj1); // => { phrase: 'Ooh Betty'}
};

() => {
    R.merge({name: "fred", age: 10}, {age: 40});
    // => { 'name': 'fred', 'age': 40 }

    const resetToDefault = R.flip(R.merge)({x: 0});
    resetToDefault({x: 5, y: 2}); // => {x: 0, y: 2}
};

() => {
    const a = R.mergeAll([{foo: 1}, {bar: 2}, {baz: 3}]); // => {foo:1,bar:2,baz:3}
    const b = R.mergeAll([{foo: 1}, {foo: 2}, {bar: 2}]); // => {foo:2,bar:2}
};

() => {
    const a = R.mergeDeepLeft({foo: {bar: 1}}, {foo: {bar: 2}}); // => {foo: {bar: 1}}
};

() => {
    const a = R.mergeDeepRight({foo: {bar: 1}}, {foo: {bar: 2}}); // => {foor: bar: 2}}
};

() => {
    const a = R.mergeDeepWith(
        (a: number[], b: number[]) => a.concat(b),
        {foo: {bar: [1, 2]}},
        {foo: {bar: [3, 4]}},
    ); // => {foo: {bar: [1,2,3,4]}}
};

() => {
    const a = R.mergeDeepWithKey(
        (k: string, a: number[], b: number[]) => k === 'bar' ? a.concat(b) : a,
        {foo: {bar: [1, 2], userIds: [42]}},
        {foo: {bar: [3, 4], userIds: [34]}}
    ); // => { foo: { bar: [ 1, 2, 3, 4 ], userIds: [42] } }
};

() => {
    const a = R.mergeWith(R.concat,
        {a: true, values: [10, 20]},
        {b: true, values: [15, 35]});
    // => { a: true, b: true, values: [10, 20, 15, 35] }
};

() => {
    const concatValues = (k: string, l: string, r: string) => k === "values" ? R.concat(l, r) : r;
    R.mergeWithKey(concatValues,
        {a: true, thing: "foo", values: [10, 20]},
        {b: true, thing: "bar", values: [15, 35]});
    const merge = R.mergeWithKey(concatValues);
    merge({a: true, thing: "foo", values: [10, 20]}, {b: true, thing: "bar", values: [15, 35]});
};

() => {
    const orValue  = "N/A";
    const testPath = ["x", 0, "y"];
    const testObj  = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.pathOr(orValue, testPath, testObj); // => 2
    R.pathOr(orValue, testPath)(testObj); // => 2
    R.pathOr(orValue)(testPath)(testObj); // => 2
    R.pathOr(orValue)(testPath, testObj); // => 2
    R.pathOr(orValue, testPath, {c: {b: 2}}); // => "N/A"
};

() => {
    const a: boolean = R.pathSatisfies(x => x > 0, ["x"], {x: 1, y: 2}); // => true
    const b: boolean = R.pathSatisfies(x => x > 0, ["x"])({x: 1, y: 2}); // => true
    const c: boolean = R.pathSatisfies(x => x > 0)(["x"])({x: 1, y: 2}); // => true
};

() => {
    function isPositive(n: number) {
        return n > 0;
    }

    const a1 = R.pickBy(isPositive, {a: 1, b: 2, c: -1, d: 0, e: 5}); // => {a: 1, b: 2, e: 5}
    function containsBackground(val: any) {
        return val.bgcolor;
    }

    const colors = {1: {color: "read"}, 2: {color: "black", bgcolor: "yellow"}};
    R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

    function isUpperCase(val: number, key: string) {
        return key.toUpperCase() === key;
    }

    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
};

() => {
    const a1 = R.pick(["a", "d"], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    const a2 = R.pick(["a", "e", "f"], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
    const a3 = R.pick(["a", "e", "f"])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1}
    const a4 = R.pick(["a", "e", "f"], [1, 2, 3, 4]); // => {a: 1}
};

() => {
    const matchPhrases = (xs: string[]) => R.objOf("must",
        R.map(
            (x: string) => R.objOf("match_phrase", x),
            xs
        )
    );

    const out: { must: Array<{ match_phrase: string }> } =
              matchPhrases(["foo", "bar", "baz"]);
};

() => {
    R.omit(["a", "d"], {a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
    R.omit(["a", "d"])({a: 1, b: 2, c: 3, d: 4}); // => {b: 2, c: 3}
};

() => {
    R.fromPairs([["a", 1], ["b", 2], ["c", 3]]); // => {a: 1, b: 2, c: 3}
};

() => {
    R.pair("foo", "bar"); // => ['foo', 'bar']
    const p         = R.pair("foo", 1); // => ['foo', 'bar']
    const x: string = p[0];
    const y: number = p[1];
};

() => {
    const headLens = R.lensIndex(0);
    R.over(headLens, R.toUpper, ["foo", "bar", "baz"]); // => ['FOO', 'bar', 'baz']
};

() => {
    R.pickAll(["a", "d"], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    R.pickAll(["a", "d"])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, d: 4}
    R.pickAll(["a", "e", "f"], {a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
    R.pickAll(["a", "e", "f"])({a: 1, b: 2, c: 3, d: 4}); // => {a: 1, e: undefined, f: undefined}
};

() => {
    function isUpperCase(val: number, key: string) {
        return key.toUpperCase() === key;
    }

    R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); // => {A: 3, B: 4}
};

() => {
    const abby = {name: "Abby", age: 7, hair: "blond", grade: 2};
    const fred = {name: "Fred", age: 12, hair: "brown", grade: 7};
    const kids = [abby, fred];
    R.project(["name", "grade"], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
};

() => {
    const x: number = R.prop("x", {x: 100}); // => 100
    const obj = {
        str: 'string',
        num: 5,
    };

    const strVal: string = R.prop('str', obj); // => 'string'
    const numVal: number = R.prop('num', obj); // => 5

    const strValCur: string = R.prop('str')(obj); // => 'string'
    const numValCur: number = R.prop('num')(obj); // => 5
};

() => {
    const alice               = {
        name: "ALICE",
        age : 101
    };
    const favorite            = R.prop("favoriteLibrary");
    const favoriteWithDefault = R.propOr("Ramda", "favoriteLibrary");

    const s2 = favoriteWithDefault(alice);  // => 'Ramda'
};

() => {
    const a: boolean = R.propSatisfies(x => x > 0, "x", {x: 1, y: 2}); // => true
    const b: boolean = R.propSatisfies(x => x > 0, "x")({x: 1, y: 2}); // => true
    const c: boolean = R.propSatisfies(x => x > 0)("x")({x: 1, y: 2}); // => true
};

() => {
    R.props(["x", "y"], {x: 1, y: 2}); // => [1, 2]

    const fullName = R.compose(R.join(" "), R.props(["first", "last"]));
    fullName({last: "Bullet-Tooth", age: 33, first: "Tony"}); // => 'Tony Bullet-Tooth'
};

() => {
    const a = R.toPairs<string, number>({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]]
};

() => {
    const f    = new F();
    const a1 = R.toPairsIn(f); // => [['x','X'], ['y','Y']]
    const a2 = R.toPairsIn<string, string>(f); // => [['x','X'], ['y','Y']]
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

    const xs = [{x: 2, y: 1}, {x: 10, y: 2}, {x: 8, y: 3}, {x: 10, y: 4}];
    R.filter(R.where({x: 10}), xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
    R.filter(R.where({x: 10}))(xs); // ==> [{x: 10, y: 2}, {x: 10, y: 4}]
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
    const mapIndexed = R.addIndex(R.map);
    mapIndexed((val: string, idx: number) => `${idx}-${val}`)(["f", "o", "o", "b", "a", "r"]);
    // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
    mapIndexed((rectangle: Rectangle, idx: number): number => rectangle.area() * idx, [new Rectangle(1, 2), new Rectangle(4, 7)]);
    // => [2, 56]
};

() => {
    const reduceIndexed = R.addIndex(R.reduce);
    reduceIndexed((acc: string, val: string, idx: number) => `${acc},${idx}-${val}`, "", ["f", "o", "o", "b", "a", "r"]);
    // => ['0-f,1-o,2-o,3-b,4-a,5-r']
};

() => {
    const t           = R.always("Tee");
    const x: string = t(); // => 'Tee'
};

() => {
    const x: number[] = R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
    const y: number[] = R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
};

() => {
    const nums = [1, 2, 3, -99, 42, 6, 7];
    R.apply(Math.max, nums); // => 42
    R.apply(Math.max)(nums); // => 42
};

() => {
    interface T { sum: number; nested: { mul: number; }; }
    const getMetrics = R.applySpec<T>({
        sum: R.add, nested: {mul: R.multiply}
    });
    const result     = getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
};

() => {
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    takesThreeArgs.length; // => 3
    takesThreeArgs(1, 2, 3); // => [1, 2, 3]

    const takesTwoArgs = R.binary(takesThreeArgs);
    takesTwoArgs.length; // => 2
    // Only 2 arguments are passed to the wrapped function
    takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
};

() => {
    const indentN = R.pipe(R.times(R.always(" ")),
        R.join(""),
        R.replace(/^(?!$)/gm)
    );

    const format = R.converge(
        R.call, [
            R.pipe<{}, number, (s: string) => string>(R.prop("indent"), indentN),
            R.prop("value")
        ]
    );

    format({indent: 2, value: "foo\nbar\nbaz\n"}); // => '  foo\n  bar\n  baz\n'
};

() => {
    interface T { age: number; }
    const cmp    = R.comparator((a: T, b: T) => a.age < b.age);
    const people = [
        {name: "Agy", age: 33}, {name: "Bib", age: 15}, {name: "Cari", age: 16}
    ];
    R.sort(cmp, people);
};

() => {
    const people = [
        {name: 'Agy', age: 33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
    ];

    R.sortWith([R.ascend(R.prop('age')), R.descend(R.prop('name'))], people);
};

() => {
    function add(a: number, b: number) {
        return a + b;
    }

    function multiply(a: number, b: number) {
        return a * b;
    }

    function subtract(a: number, b: number) {
        return a - b;
    }

    // ≅ multiply( add(1, 2), subtract(1, 2) );
    const x: number = R.converge(multiply, [add, subtract])(1, 2); // => -3

    function add3(a: number, b: number, c: number) {
        return a + b + c;
    }

    const y: number = R.converge(add3, [multiply, add, subtract])(1, 2); // => 4
};

() => {
    const f0         = R.compose(Math.pow);
    const f1         = R.compose(R.negate, Math.pow);
    const f2         = R.compose(R.inc, R.negate, Math.pow);
    const f3         = R.compose(R.inc, R.inc, R.negate, Math.pow);
    const f4         = R.compose(R.inc, R.inc, R.inc, R.negate, Math.pow);
    const f5         = R.compose(R.inc, R.inc, R.inc, R.inc, R.negate, Math.pow);
    const x0: number = f0(3, 4); // -(3^4) + 1
    const x1: number = f1(3, 4); // -(3^4) + 1
    const x2: number = f2(3, 4); // -(3^4) + 1
    const x3: number = f3(3, 4); // -(3^4) + 1
    const x4: number = f4(3, 4); // -(3^4) + 1
    const x5: number = f5(3, 4); // -(3^4) + 1
};

() => {
    function fn(a: string, b: number, c: string) {
        return [a, b, c];
    }

    const gn        = R.compose(R.length, fn);
    const x: number = gn("Hello", 4, "world");
};

(() => {
    function Circle(r: number) {
        this.r      = r;
        this.colors = Array.prototype.slice.call(arguments, 1);
    }

    Circle.prototype.area = () => Math.PI * Math.pow(this.r, 2);

    const circleN = R.constructN(2, Circle);
    let c1      = circleN(1, "red");
    const circle  = R.construct(Circle);
    c1          = circle(1, "red");
})();

/*****************************************************************
 * Relation category
 */
() => {
    const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    const letters = R.split("", "abcABCaaaBBc");
    R.countBy(Math.floor)(numbers);    // => {'1': 3, '2': 2, '3': 1}
    R.countBy(R.toLower)(letters);   // => {'a': 5, 'b': 4, 'c': 3}
};

() => {
    R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [1,2]
    R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); // => [7,6,5]
};

() => {
    function cmp(x: any, y: any) {
        return x.a === y.a;
    }

    const l1 = [{a: 1}, {a: 2}, {a: 3}];
    const l2 = [{a: 3}, {a: 4}];
    R.differenceWith(cmp, l1, l2); // => [{a: 1}, {a: 2}]
};

() => {
    R.equals(1, 1); // => true
    R.equals("2", "1"); // => false
    R.equals([1, 2, 3], [1, 2, 3]); // => true

    const a: any = {};
    a.v        = a;
    const b: any = {};
    b.v        = b;
    R.equals(a, b); // => true
};

() => {
    const a1 = R.identity(1); // => 1
    const obj  = {};
    const a2 = R.identity([1, 2, 3]);
    const a3 = R.identity(["a", "b", "c"]);
    const a4 = R.identity(obj) === obj; // => true
};

() => {
    const o = {};
    R.identical(o, o); // => true
    R.identical(1, 1); // => true
    R.identical("2", "1"); // => false
    R.identical([], []); // => false
    R.identical(0, -0); // => false
    R.identical(NaN, NaN); // => true
};

() => {
    const testPath = ["x", 0, "y"];
    const testObj  = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.path(testPath, testObj); // => 2
    R.path(testPath)(testObj); // => 2
};

() => {
    const sortByAgeDescending = R.sortBy(R.compose<{}, number, number>(R.negate, R.prop("age")));
    const alice               = {
        name: "ALICE",
        age : 101
    };
    const bob                 = {
        name: "Bob",
        age : -10
    };
    const clara               = {
        name: "clara",
        age : 314.159
    };
    const people              = [clara, bob, alice];
    sortByAgeDescending(people); // => [alice, bob, clara]
};

() => {
    const sortByNameCaseInsensitive = R.sortBy(R.compose<Record<'name', string>, string, string>(R.toLower, R.prop("name")));
    const alice                     = {
        name: "ALICE",
        age : 101
    };
    const bob                       = {
        name: "Bob",
        age : -10
    };
    const clara                     = {
        name: "clara",
        age : 314.159
    };
    const people                    = [clara, bob, alice];
    sortByNameCaseInsensitive(people); // => [alice, bob, clara]
};

() => {
    const a: number[][] = R.splitAt(1, [1, 2, 3]);        // => [[1], [2, 3]]
    const b: number[][] = R.splitAt(1)([1, 2, 3]);        // => [[1], [2, 3]]
    const c: string[]   = R.splitAt(5, "hello world");      // => ['hello', ' world']
    const d: string[]   = R.splitAt(-1, "foobar");          // => ['fooba', 'r']
    const e: string[]   = R.splitAt(-1)("foobar");          // => ['fooba', 'r']
};

() => {
    const a: number[][] = R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); // => [[1, 2, 3], [4, 5, 6], [7]]
    const b: number[][] = R.splitEvery(3)([1, 2, 3, 4, 5, 6, 7]); // => [[1, 2, 3], [4, 5, 6], [7]]
    const c: string[]   = R.splitEvery(3, 'foobarbaz'); // => ['foo', 'bar', 'baz']
    const d: string[]   = R.splitEvery(3)('foobarbaz'); // => ['foo', 'bar', 'baz']
};

() => {
    const a: number[][] = R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]]
    const b: number[][] = R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]);   // => [[1], [2, 3, 1, 2, 3]]
};

() => {
    R.startsWith("a", "abc");   // => true
    R.startsWith("a")("abc");   // => true
    R.startsWith(1, [1, 2, 3]);   // => true
    R.startsWith(1)([1, 2, 3]);   // => true
    R.startsWith([1], [1, 2, 3]);   // => true
    R.startsWith([1])([1, 2, 3]);   // => true
};

() => {
    R.add(2, 3);       // =>  5
    R.add(7)(10);      // => 17
    R.add("Hello", " World");  // =>  "Hello World"
    R.add("Hello")(" World");  // =>  "Hello World"
};

() => {
    R.dec(42); // => 41
};

() => {
    R.divide(71, 100); // => 0.71

    const half = R.flip(R.divide)(2);
    half(42); // => 21

    const reciprocal = R.divide(1);
    reciprocal(4);   // => 0.25
};

() => {
    R.gt(2, 6); // => false
    R.gt(2, 0); // => true
    R.gt(2, 2); // => false
    R.flip(R.gt)(2)(10); // => true
    R.gt(2)(10); // => false
};

() => {
    R.gte(2, 6); // => false
    R.gte(2, 0); // => true
    R.gte(2, 2); // => false
    R.flip(R.gte)(2)(10); // => true
    R.gte(2)(10); // => false
};

() => {
    R.isNaN(NaN);        // => true
    R.isNaN(undefined);  // => false
    R.isNaN({});         // => false
};

() => {
    R.lt(2, 6); // => true
    R.lt(2, 0); // => false
    R.lt(2, 2); // => false
    R.lt(5)(10); // => true
    R.flip(R.lt)(5)(10); // => false // right-sectioned currying
};

() => {
    R.lte(2, 6); // => true
    R.lte(2, 0); // => false
    R.lte(2, 2); // => true
    R.flip(R.lte)(2)(1); // => true
    R.lte(2)(10); // => true
};

() => {
    R.mathMod(-17, 5);  // => 3
    R.mathMod(17, 5);   // => 2
    R.mathMod(17, -5);  // => NaN
    R.mathMod(17, 0);   // => NaN
    R.mathMod(17.2, 5); // => NaN
    R.mathMod(17, 5.3); // => NaN

    const clock = R.flip(R.mathMod)(12);
    clock(15); // => 3
    clock(24); // => 0

    const seventeenMod = R.mathMod(17);
    seventeenMod(3);  // => 2
};

() => {
    const hasName = R.has("name");
    hasName({name: "alice"});   // => true
    hasName({name: "bob"});     // => true
    hasName({});                // => false

    const point    = {x: 0, y: 0};
    const pointHas = R.flip(R.has)(point);
    pointHas("x");  // => true
    pointHas("y");  // => true
    pointHas("z");  // => false
};

() => {
    const x: number = R.max(7, 3); // => 7
    const y: string = R.max("a", "z"); // => 'z'
};

() => {
    function cmp(obj: { x: R.Ord }) {
        return obj.x;
    }

    const a = {x: 1};
    const b = {x: 2};
    const c = {x: 3};
    const d = {x: "a"};
    const e = {x: "z"};
    R.maxBy(cmp, a, c); // => {x: 3}
    R.maxBy(cmp)(a, c); // => {x: 3}
    R.maxBy(cmp)(a)(b);
    R.maxBy(cmp)(d)(e);
};

() => {
    const a: number = R.mean([2, 7, 9]); // => 6
    const b: number = R.mean([]); // => NaN
};

() => {
    const a: number = R.median([7, 2, 10, 9]); // => 8
    const b: number = R.median([]); // => NaN
};

() => {
    const x: number = R.min(9, 3); // => 3
    const y: string = R.min("a", "z"); // => 'a'
};

() => {
    function cmp(obj: { x: R.Ord }) {
        return obj.x;
    }

    const a = {x: 1};
    const b = {x: 2};
    const c = {x: 3};
    const d = {x: "a"};
    const e = {x: "z"};
    R.minBy(cmp, a, b); // => {x: 1}
    R.minBy(cmp)(a, b); // => {x: 1}
    R.minBy(cmp)(a)(c);
    R.minBy(cmp, d, e);
};

() => {
    R.modulo(17, 3); // => 2
    // JS behavior:
    R.modulo(-17, 3); // => -2
    R.modulo(17, -3); // => 2

    const isOdd = R.flip(R.modulo)(2);
    isOdd(42); // => 0
    isOdd(21); // => 1
};

() => {
    const double = R.multiply(2);
    const triple = R.multiply(3);
    double(3);       // =>  6
    triple(4);       // => 12
    R.multiply(2, 5);  // => 10
};

() => {
    R.negate(42); // => -42
};

() => {
    R.product([2, 4, 6, 8, 100, 1]); // => 38400
};

() => {
    R.subtract(10, 8); // => 2

    const minus5 = R.flip(R.subtract)(5);
    minus5(17); // => 12

    const complementaryAngle = R.subtract(90);
    complementaryAngle(30); // => 60
    complementaryAngle(72); // => 18
};

() => {
    R.sum([2, 4, 6, 8, 100, 1]); // => 121
};

() => {
    const a: number[] = R.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [1,2,7,6,5]
    const b: number[] = R.symmetricDifference([7, 6, 5, 4, 3])([1, 2, 3, 4]); // => [7,6,5,1,2]
};

() => {
    const eqA = R.eqBy(R.prop("a"));
    const l1  = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
    const l2  = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
    R.symmetricDifferenceWith(eqA, l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
    R.symmetricDifferenceWith(eqA)(l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
    const c: (a: any[]) => any[] = R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
};

/*****************************************************************
 * String category
 */
() => {
    R.replace("foo", "bar", "foo foo foo"); // => 'bar foo foo'
    R.replace("foo", "bar")("foo foo foo"); // => 'bar foo foo'
    R.replace("foo")("bar")("foo foo foo"); // => 'bar foo foo'
    R.replace(/foo/, "bar", "foo foo foo"); // => 'bar foo foo'

    // Use the "g" (global) flag to replace all occurrences:
    R.replace(/foo/g, "bar", "foo foo foo"); // => 'bar bar bar'
    R.replace(/foo/g, "bar")("foo foo foo"); // => 'bar bar bar'
    R.replace(/foo/g)("bar")("foo foo foo"); // => 'bar bar bar'
};

/*****************************************************************
 * Is category
 */
() => {
    R.is(Object, {}); // => true
    R.is(Object)({}); // => true
    R.is(Number, 1); // => true
    R.is(Number)(1); // => true
    R.is(Object, 1); // => false
    R.is(Object)(1); // => false
    R.is(String, "s"); // => true
    R.is(String)("s"); // => true
    R.is(String, new String("")); // => true
    R.is(String)(new String("")); // => true
    R.is(Object, new String("")); // => true
    R.is(Object)(new String("")); // => true
    R.is(Object, "s"); // => false
    R.is(Object)("s"); // => false
    R.is(Number, {}); // => false
    R.is(Number)({}); // => false
};

/*****************************************************************
 * Logic category
 */
() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    const f = R.allPass([gt10, even]);
    f(11); // => false
    f(12); // => true
};

() => {
    R.and(false, true); // => false
    R.and(0, []); // => 0
    R.and(0)([]); // => 0
    R.and(null, ""); // => null
    const Why: any = ((val: boolean) => {
        const why = {} as any;
        why.val = val;
        why.and = (x: boolean) => this.val && x;
        return Why;
    })(true);
    const why      = new Why(true);
    R.and(why, false); // false
};

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    const f = R.anyPass([gt10, even]);
    f(11); // => true
    f(8); // => true
    f(9); // => false
};

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    const f = R.both(gt10, even);
    const g = R.both(gt10)(even);
    f(100); // => true
    f(101); // => false
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const isOdd = R.complement(isEven);
    isOdd(21); // => true
    isOdd(42); // => false
};

(() => {
    R.eqBy(Math.abs, 5, -5); // => true
});

() => {
    const defaultTo42 = R.defaultTo(42);
    defaultTo42(null);  // => 42
    defaultTo42(undefined);  // => 42
    defaultTo42("Ramda");  // => 'Ramda'
};

() => {
    function gt10(x: number) {
        return x > 10;
    }

    function even(x: number) {
        return x % 2 === 0;
    }

    const f = R.either(gt10, even);
    const g = R.either(gt10)(even);
    f(101); // => true
    f(8); // => true
};

() => {
    // Flatten all arrays in the list but leave other values alone.
    const flattenArrays = R.map(R.ifElse(Array.isArray, R.flatten, R.identity));

    flattenArrays([[0], [[10], [8]], 1234, {}]); // => [[0], [10, 8], 1234, {}]
    flattenArrays([[[10], 123], [8, [10]], "hello"]); // => [[10, 123], [8, 10], "hello"]
};

() => {
    R.isEmpty([1, 2, 3]); // => false
    R.isEmpty([]); // => true
    R.isEmpty(""); // => true
    R.isEmpty(null); // => false
    R.isEmpty({}); // =>true
    R.isEmpty({a: 1}); // => false
};

() => {
    R.endsWith("c", "abc");   // => true
    R.endsWith("c")("abc");   // => true
    R.endsWith(3, [1, 2, 3]);   // => true
    R.endsWith(3)([1, 2, 3]);   // => true
    R.endsWith([3], [1, 2, 3]);   // => true
    R.endsWith([3])([1, 2, 3]);   // => true
};

() => {
    R.not(true); // => false
    R.not(false); // => true
    R.not(0); // => true
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
() => {
    const x0: boolean        = R.or(false, true); // => false
    const x1: number | any[] = R.or(0, []); // => []
    const x2: number | any[] = R.or(0)([]); // => []
    const x3: string         = R.or(null, ""); // => ''

    const why = new Why(true);
    why.or(true);
    const x4: Why | boolean = R.or(why, false); // false
};

() => {
    R.intersperse(",", ["foo", "bar"]); // => ['foo', ',', 'bar']
    R.intersperse(0, [1, 2]); // => [1, 0, 2]
    R.intersperse(0, [1]); // => [1]
};

() => {
    R.intersection([1, 2, 3], [2, 3, 3, 4]); // => [2, 3]
    R.intersection([1, 2, 3])([2, 3, 3, 4]); // => [2, 3]
};
