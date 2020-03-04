import * as R from "ramda";
import { Dictionary } from "ramda/tools";

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
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    const u1: (a: any) => any = R.unary(takesOneArg);
    const u2: (a: any) => any = R.unary(takesTwoArgs);
    const u3: (a: any) => any = R.unary(takesThreeArgs);
};

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
    const addFour          = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    const uncurriedAddFour = R.uncurryN<number>(4, addFour);
    const res: number      = uncurriedAddFour(1, 2, 3, 4); // => 10
};

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.is(Array), R.of);
    const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
    const b: number[] = coerceArray(1);         // => [1]
};

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

/* pipe */
() => {
    const func: (x: number) => string = R.pipe(double, double, shout);
    const res: string                 = R.pipe(double, double, shout)(10);

    const capitalize = (str: string) => R.pipe(
        R.split(""),
        R.adjust(0, R.toUpper),
        R.join("")
    )(str);

    const f          = R.pipe(Math.pow, R.negate, R.inc);
    const fr: number = f(3, 4); // -(3^4) + 1

    // pipe with first function taking no params
    const f10 = () => 'str';
    const f11 = (str: string) => str;
    const f12: () => string = R.pipe(f10, f11);
};

/* pipeK */
() => {
    const parseJson = (input: string): any[] => {
        try {
            return [JSON.parse(input)];
        } catch (e) {
            return [];
        }
    };
    const get = (prop: string) => (obj: any): any[] => {
        const propVal = obj[prop];
        if (propVal) {
            return [propVal];
        } else {
            return [];
        }
    };

    const getStateCode: (input: string) => string[] = R.pipeK(
        parseJson,
        get('user'),
        get('address'),
        get('state'),
        R.compose((val) => [val], R.toUpper)
    );

    getStateCode('{"user":{"address":{"state":"ny"}}}');
    // => Just('NY')
    getStateCode('[Invalid JSON]');
    // => Nothing()
};

/* pipeP */
() => {
    interface User {
        followers: string[];
        name: string;
    }

    const db = {
        getUserById(userName: string): Promise<User> {
            return Promise.resolve({
                name: 'Jon',
                followers: [
                    'Samwell',
                    'Edd',
                    'Grenn',
                ],
            });
        },
        getFollowers(user: User): Promise<string[]> {
            return Promise.resolve(user.followers);
        },
    };
    const followersForUser: (userName: string) => Promise<string[]> = R.pipeP(db.getUserById, db.getFollowers);
};

() => {
    interface User {
        followers: string[];
        name: string;
    }

    const db = {
        getUserById(userName: string): Promise<User> {
            return Promise.resolve({
                name: 'Jon',
                followers: [
                    'Samwell',
                    'Edd',
                    'Grenn',
                ],
            });
        },
        getFollowers(user: User): Promise<string[]> {
            return Promise.resolve(user.followers);
        },
    };
    const followersForUser: (userName: string) => Promise<string[]> = R.pipeWith(R.then, [db.getUserById, db.getFollowers]);
    const followersForUser2: (userName: string) => Promise<string[]> = R.pipeWith(R.then)([db.getUserById, db.getFollowers]);
};

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
    const numbers = [1, 2, 3];
    R.reduce((a, b) => a + b, 10, numbers); // => 16;
})();

(() => {
    const pairs = [["a", 1], ["b", 2], ["c", 3]];

    function flattenPairs(pair: [string, number], acc: Array<string|number>): Array<string|number> {
        return acc.concat(pair);
    }

    R.reduceRight(flattenPairs, [], pairs); // => [ 'c', 3, 'b', 2, 'a', 1 ]
})();

(() => {
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

/*********************
 * List category
 */
() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }
    const rejectEven = R.reject(isEven);
    const objB: Dictionary<number> = rejectEven({ a: 0, b: 1 }); // => { b: 1 }
    const listB: number[] = rejectEven([0, 1]); // => [1]
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    const a: Dictionary<number> = R.pipe(
        R.filter<number, 'object'>(isEven),
    )({ a: 0, b: 1 }); // => { a: 0 }

    const b: number[] = R.pipe(
        R.filter<number, 'array'>(isEven),
    )([0, 1]); // => [0]

    const c: Dictionary<number> = R.pipe(
        R.reject<number, 'object'>(isEven),
    )({ a: 0, b: 1 }); // => { b: 1 }

    const d: number[] = R.pipe(
        R.reject<number, 'array'>(isEven),
    )([0, 1]); // => [1]
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
    interface MyObject {
        id: string;
        quantity: number;
    }

    const reduceWithCombinedQuantities = (items: MyObject[]) =>
        items.reduce<MyObject>(
            (acc, item) => ({...item, quantity: acc.quantity + item.quantity}),
            {id: '', quantity: 0},
        );

    const combineMyObjects = R.pipe(
        R.groupBy<MyObject>(s => s.id),
        R.values,
        R.map(reduceWithCombinedQuantities),
    );

    const combined = combineMyObjects([
        {id: 'foo', quantity: 4},
        {id: 'bar', quantity: 3},
        {id: 'foo', quantity: 2},
    ]);

    return {
        id: combined[0].id,
        quantity: combined[0].quantity
    };
};

(() => {
    interface Book {
        id: string;
        title: string;
    }
    const list: Book[] = [{id: "xyz", title: "A"}, {id: "abc", title: "B"}];
    const titlesIndexedByTitles: { [k: string]: string } = R.pipe(
        R.map((x: Book) => x.title),
        R.indexBy(x => x),
    )(list);
});

() => {
    const headLens = R.lensIndex(0);
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
    R.set(headLens, "x", ["a", "b", "c"]);        // => ['x', 'b', 'c']
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
    const isOdd = (acc: number, x: number) => x % 2 === 1;

    const xs: number[] = [1, 3, 5, 60, 777, 800];
    R.reduceWhile(isOdd, R.add, 0, xs); // => 9
    R.reduceWhile(isOdd)(R.add, 0, xs); // => 9
    R.reduceWhile(isOdd)(R.add, 0)(xs); // => 9
    R.reduceWhile(isOdd)(R.add)(0, xs); // => 9
    R.reduceWhile(isOdd)(R.add)(0)(xs); // => 9
    R.reduceWhile(isOdd, R.add)(0, xs); // => 9
    R.reduceWhile(isOdd, R.add)(0)(xs); // => 9
    R.reduceWhile(isOdd, R.add, 0)(xs); // => 9

    const ys: number[] = [];
    R.reduceWhile(isOdd, R.add, 111, ys); // => 111
    R.reduceWhile(isOdd)(R.add, 111, ys); // => 111
    R.reduceWhile(isOdd)(R.add, 111)(ys); // => 111
    R.reduceWhile(isOdd)(R.add)(111, ys); // => 111
    R.reduceWhile(isOdd)(R.add)(111)(ys); // => 111
    R.reduceWhile(isOdd, R.add)(111, ys); // => 111
    R.reduceWhile(isOdd, R.add)(111)(ys); // => 111
    R.reduceWhile(isOdd, R.add, 111)(ys); // => 111
};

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
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
    R.reverse('abc');      // => 'cba'
    R.reverse('ab');       // => 'ba'
    R.reverse('a');        // => 'a'
    R.reverse('');         // => ''
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

    // $ExpectType string[]
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
    interface Person { id: number; firstName: string; lastName: string; }
    const makeQuery = (email: string) => ({ query: { email }});
    const fetchMember = (query: any) => Promise.resolve({ id: 1, firstName: 'Jon', lastName: 'Snow' });
    const getTitleAsync = (person: Person) => person.firstName === 'Jon' && person.lastName === 'Snow' ? Promise.resolve('King in the North') : Promise.reject('Unknown');

    const getMemberName: (email: string) => Promise<{ firstName: string, lastName: string }> = R.pipe(
        makeQuery,
        fetchMember,
        R.then(R.pick(['firstName', 'lastName'])),
    );

    const getMemberTitle: (email: string) => Promise<string> = R.pipe(
        makeQuery,
        fetchMember,
        R.then(getTitleAsync),
    );
};

() => {
    const x: unknown = R.thunkify(R.identity)(42)();
    const y: number = R.thunkify((a: number, b: number) => a + b)(25, 17)();
    const z: number = R.thunkify((a: number, b: number) => a + b)(25)(17)();
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
    R.traverse<number, number>(of)(fn, list);
};

() => {
    const x          = R.prop("x");
    const a: boolean  = R.tryCatch<boolean>(R.prop("x"), R.F)({x: true}); // => true
    const a1: boolean = R.tryCatch(R.prop<"x", true>("x"), R.F)({x: true}); // => true
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
    interface Person { firstName: string; lastName: string; }
    const failedFetch = (id: string): Promise<Person> => Promise.reject('bad ID');
    const useDefault = (): Person => ({ firstName: 'Bob', lastName: 'Loblaw' });
    const loadAlternative = (): Promise<Person> => Promise.resolve({ firstName: 'Saul', lastName: 'Goodman' });

    const recoverFromFailure: (id: string) => Promise<{ firstName: string; lastName: string; }> = R.pipe(
      failedFetch,
      R.otherwise(useDefault),
      R.then(R.pick(['firstName', 'lastName'])),
    );

    const recoverFromFailureByAlternative: (id: string) => Promise<Person> = R.pipe(
      failedFetch,
      R.otherwise(useDefault),
      R.then(loadAlternative),
    );
};

() => {
    const xLens = R.lens(R.prop("x"), R.assoc("x"));
    R.view(xLens, {x: 1, y: 2});            // => 1
    R.view(xLens)({x: 1, y: 2});            // => 1
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
    R.set(xLens)(4, {x: 1, y: 2});          // => {x: 4, y: 2}
    R.set(xLens, 4)({x: 1, y: 2});          // => {x: 4, y: 2}
};

() => {
    const headLens = R.lensIndex(0);
    R.view(headLens, ["a", "b", "c"]);            // => 'a'
    R.set(headLens, "x", ["a", "b", "c"]);        // => ['x', 'b', 'c']
};

() => {
    const xLens = R.lensProp("x");
    R.view(xLens, {x: 1, y: 2});            // => 1
    R.set(xLens, 4, {x: 1, y: 2});          // => {x: 4, y: 2}
};

() => {
    const xyLens  = R.lensPath(["x", 0, "y"]);
    const testObj = {x: [{y: 2, z: 3}, {y: 4, z: 5}]};

    R.view(xyLens, testObj);            // => 2
    R.set(xyLens, 4, testObj);          // => {x: [{y: 4, z: 3}, {y: 4, z: 5}]}
};

() => {
    const abby = {name: "Abby", age: 7, hair: "blond", grade: 2};
    const fred = {name: "Fred", age: 12, hair: "brown", grade: 7};
    const kids = [abby, fred];
    R.project(["name", "grade"], kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
    R.project(["name", "grade"])(kids); // => [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
};

() => {
    const x: number = R.prop("x", {x: 100}); // => 100
    const obj = {
        str: 'string',
        num: 5,
    };

    const strVal: string = R.prop('str', obj); // => 'string'
    const numVal: number = R.prop('num', obj); // => 5

    const strValPl: string = R.prop(R.__, obj)('str'); // => 'string'

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
    R.propOr('Ramda', R.__, alice)('name');  // => 'ALICE'
    R.propOr(R.__, 'foo', alice)('default');  // => 'default'
};

() => {
    const a: boolean = R.propSatisfies((x: number) => x > 0, "x", {x: 1, y: 2}); // => true
    const b: boolean = R.propSatisfies((x: number) => x > 0, "x")({x: 1, y: 2}); // => true
    const c: boolean = R.propSatisfies((x: number) => x > 0)("x")({x: 1, y: 2}); // => true
};

() => {
    R.props(["x", "y"], {x: 1, y: 2}); // => [1, 2]
};

() => {
    const a = R.toPairs<number>({a: 1, b: 2, c: 3}); // => [['a', 1], ['b', 2], ['c', 3]]
    const b = R.toPairs({1: 'a'}); // => [['1', 'something']]
};

() => {
    const f    = new F();
    const a1 = R.toPairsIn(f); // => [['x','X'], ['y','Y']]
    const a2 = R.toPairsIn<string>(f); // => [['x','X'], ['y','Y']]
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
    const people = [
        {name: 'Agy', age: 33}, {name: 'Bib', age: 15}, {name: 'Cari', age: 16}
    ];

    R.sortWith([R.ascend(R.prop('age')), R.descend(R.prop('name'))], people);
};

/*****************************************************************
 * Relation category
 */
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
    R.product([2, 4, 6, 8, 100, 1]); // => 38400
};

() => {
    R.subtract(10, 8); // => 2

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
    // const c: (a: any[]) => any[] = R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
};

() => {
    const eqL = R.eqBy<string, number>(s => s.length);
    const l1 = ['bb', 'ccc', 'dddd'];
    const l2 = ['aaa', 'bb', 'c'];
    R.symmetricDifferenceWith(eqL, l1, l2); // => ['dddd', 'c']
    R.symmetricDifferenceWith(eqL)(l1, l2); // => ['dddd', 'c']
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

    // Using a function as the replacement value
    R.replace(/([cfk])oo/g, (match, p1, offset) => `${p1}-${offset}`, "coo foo koo"); // => 'c0oo f4oo k8oo'
    R.replace(/([cfk])oo/g, (match, p1, offset) => `${p1}-${offset}`)("coo foo koo"); // => 'c0oo f4oo k8oo'
    R.replace(/([cfk])oo/g)((match, p1, offset) => `${p1}-${offset}`) ("coo foo koo"); // => 'c0oo f4oo k8oo'
};
