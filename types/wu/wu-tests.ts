// adapted from `cat wu.js/test/* |sed '/= require/d'> wu-tests.ts`

declare const describe: any;
declare const it: any;
declare const mocha: any;
declare const assert: {
  iterable: any;
  eqSet<T>(expected: Set<T>, actual: Iterable<T>): any;
  ok: any;
  equal<T>(x: T, y: T): any;
  eqArray<T>(x: T[], y: Iterable<T>): any;
  deepEqual<T>(x: T, y: T): any;
};

// Helper for asserting that the given thing is iterable.
assert.iterable = (thing: any) => {
  assert.ok(wu(thing));
};

// Helper for asserting that all the elements yielded from the |actual|
// iterator are in the |expected| set.
assert.eqSet = (expected: any, actual: any) => {
  assert.iterable(actual);
  for (const x of actual) {
    assert.ok(expected.has(x));
    expected.delete(x);
  }
};

// Helper for asserting that all the elements yielded from the |actual|
// iterator are equal to and in the same order as the elements of the
// |expected| array.
assert.eqArray = (expected: any, actual: any) => {
  assert.iterable(actual);
  assert.deepEqual(expected, [...actual]);
};

mocha.setup('bdd');
describe("wu.asyncEach", () => {
  it("should iterate over each item", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let n = 0;

    return wu(arr)
      .asyncEach(x => {
        n++;
        const start = Date.now();
        while (Date.now() - start <= 3) {
          // Kill time.
        }
      }, 3)
      .then(() => {
        assert.equal(n, arr.length);
      });
  });
});
describe("wu.chain", () => {
  it("should concatenate iterables", () => {
    assert.eqArray([1, 2, 3, 4, 5, 6],
                   wu.chain([1, 2], [3, 4], [5, 6]));
  });
});
describe("wu.chunk", () => {
  it("should chunk items into tuples", () => {
    assert.eqArray([[1, 2, 3], [4, 5, 6]],
                   wu.chunk(3, [1, 2, 3, 4, 5, 6]));
  });
});
describe("wu.concatMap", () => {
  it("should map the function over the iterable and concatenate results", () => {
    assert.eqArray([1, 1, 2, 4, 3, 9],
                   wu.concatMap(x => [x, x * x], [1, 2, 3]));
  });
});
describe("wu.count", () => {
  it("should keep incrementing", () => {
    const count = wu.count();
    assert.equal(count.next().value, 0);
    assert.equal(count.next().value, 1);
    assert.equal(count.next().value, 2);
    assert.equal(count.next().value, 3);
    assert.equal(count.next().value, 4);
    assert.equal(count.next().value, 5);
  });

  it("should start at the provided number", () => {
    const count = wu.count(5);
    assert.equal(count.next().value, 5);
    assert.equal(count.next().value, 6);
    assert.equal(count.next().value, 7);
  });

  it("should increment by the provided step", () => {
    const count = wu.count(0, 2);
    assert.equal(count.next().value, 0);
    assert.equal(count.next().value, 2);
    assert.equal(count.next().value, 4);
  });
});
describe("wu.curryable", () => {
  it("should wait until its given enough arguments", () => {
    const f = wu.curryable((a, b) => a + b);

    const f0 = f()()()()();
    assert.equal(typeof f0, "function");

    const f1 = f(1);
    assert.equal(typeof f1, "function");
    assert.equal(f1(2), 3);
  });

  it("should just call the function when given enough arguments", () => {
    const f = wu.curryable((a, b) => a + b);
    assert.equal(f(1, 2), 3);
  });

  it("should expect the number of arguments we tell it to", () => {
    const f = wu.curryable((...args) => 5, 5);
    assert.equal(typeof f(1, 2, 3, 4), "function");
    assert.equal(f(1, 2, 3, 4, 5), 5);
  });
});
describe("wu.cycle", () => {
  it("should keep yielding items from the original iterable", () => {
    let i = 0;
    const arr = [1, 2, 3];
    for (const x of wu.cycle(arr)) {
      assert.equal(x, arr[i % 3]);
      if (i++ > 9) {
        break;
      }
    }
  });
});
describe("wu.drop", () => {
  it("should drop the number of items specified", () => {
    const count = wu.count().drop(5);
    assert.equal(count.next().value, 5);
  });
});
describe("wu.dropWhile", () => {
  it("should drop items while the predicate is true", () => {
    const count = wu.dropWhile(x => x < 5, wu.count());
    assert.equal(count.next().value, 5);
  });
});
describe("wu.entries", () => {
  it("should iterate over entries", () => {
    const expected = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);
    for (const [k, v] of wu.entries({ foo: 1, bar: 2, baz: 3 })) {
      assert.equal(expected.get(k), v);
    }
  });
});
describe("wu.enumerate", () => {
  it("should yield items with their index", () => {
    assert.eqArray([["a", 0], ["b", 1], ["c", 2]],
                   wu.enumerate("abc"));
  });
});
describe("wu.every", () => {
  it("should return true when the predicate succeeds for all items", () => {
    assert.equal(true, wu.every(x => typeof x === "number", [1, 2, 3]));
  });

  it("should return false when the predicate fails for any item", () => {
    assert.equal(false, wu.every(x => typeof x === "number", [1, 2, "3"]));
  });
});
describe("wu.filter", () => {
  it("should filter based on the predicate", () => {
    assert.eqArray(["a", "b", "c"],
                   wu.filter(x => typeof x === "string",
                            [1, "a", true, "b", {}, "c"]));
  });
});
describe("wu.find", () => {
  it("should return the first item that matches the predicate", () => {
    assert.deepEqual({ name: "rza" },
                    wu.find(x => !!x.name.match(/.za$/),
                            [{ name: "odb" },
                             { name: "method man" },
                             { name: "rza" },
                             { name: "gza" }]));
  });

  it("should return undefined if no items match the predicate", () => {
    assert.equal(undefined,
                 wu.find(x => (<any> x) === "raekwon",
                         [{ name: "odb" },
                          { name: "method man" },
                          { name: "rza" },
                          { name: "gza" }]));
  });
});
describe("wu.flatten", () => {
  it("should flatten iterables", () => {
    assert.eqArray(["I", "like", "LISP"],
                   wu(["I", ["like", ["LISP"]]]).flatten());
  });

  it("should shallowly flatten iterables", () => {
    assert.eqArray([1, 2, 3, [[4]]],
                   wu.flatten(true, [1, [2], [3, [[4]]]]));
  });
});
describe("wu.forEach", () => {
  it("should iterate over every item", () => {
    const items: any[] = [];
    wu.forEach(x => items.push(x), [1, 2, 3]);
    assert.eqArray([1, 2, 3], items);
  });
});
describe("wu.has", () => {
  it("should return true if the item is in the iterable", () => {
    assert.ok(wu.has(3, [1, 2, 3]));
  });

  it("should return false if the item is not in the iterable", () => {
    assert.ok(!wu.has(<any> "36 chambers", [1, 2, 3]));
  });
});
describe("wu.invoke", () => {
  it("should yield the method invokation on each item", () => {
    class Greeter {
      constructor(readonly name: string) {}
      greet(tail: string) { return `hello ${this.name}${tail}`; }
    }
    assert.eqArray(["hello world!", "hello test!"],
                   wu.invoke("greet", "!",
                             [new Greeter("world"), new Greeter("test")]));
  });
});
describe("wu.keys", () => {
  it("should iterate over keys", () => {
    assert.eqSet(new Set(["foo", "bar", "baz"]),
                 wu.keys({ foo: 1, bar: 2, baz: 3 }));
  });
});
describe("wu.map", () => {
  it("should map the function over the iterable", () => {
    assert.eqArray([1, 4, 9],
                   wu.map(x => x * x, [1, 2, 3]));
  });
});
describe("wu.pluck", () => {
  it("should access the named property of each item in the iterable", () => {
    assert.eqArray([1, 2, 3],
                   wu.pluck("i", [{ i: 1 }, { i: 2 }, { i: 3 }]));
  });
});
describe("wu.reduce", () => {
  it("should reduce the iterable with the function", () => {
    assert.equal(6, wu([1, 2, 3]).reduce((x, y) => x + y));
  });

  it("should accept an initial state for the reducer function", () => {
    assert.equal(16, wu.reduce((x, y) => x + y, 10, [1, 2, 3]));
  });
});
describe("wu.reductions", () => {
  it("should yield the intermediate reductions of the iterable", () => {
    assert.eqArray([1, 3, 6],
                   wu.reductions((x, y) => x + y, undefined, [1, 2, 3]));
  });
});
describe("wu.reject", () => {
  it("should yield items for which the predicate is false", () => {
    assert.eqArray([1, true, {}],
                   wu.reject(x => typeof x === "string",
                             [1, "a", true, "b", {}, "c"]));
  });
});
describe("wu.repeat", () => {
  it("should keep yielding its item", () => {
    const repeat = wu.repeat(3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
  });

  it("should repeat n times", () => {
    const repeat = wu.repeat(3, 2);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, 3);
    assert.equal(repeat.next().value, undefined);
    assert.equal(repeat.next().done, true);
  });
});
describe("wu.slice", () => {
  it("should slice the front of iterables", () => {
    assert.eqArray([3, 4, 5],
                   wu.slice(3, undefined, [0, 1, 2, 3, 4, 5]));
  });

  it("should slice the end of iterables", () => {
    assert.eqArray([0, 1, 2],
                   wu.slice(undefined,
                            3,
                            [0, 1, 2, 3, 4, 5]));
  });
});
describe("wu.some", () => {
  it("should return true if any item matches the predicate", () => {
    assert.ok(wu.some(x => x % 2 === 0, [1, 2, 3]));
  });

  it("should return false if no items match the predicate", () => {
    assert.ok(!wu.some(x => x % 5 === 0, [1, 2, 3]));
  });
});
describe("wu.spreadMap", () => {
  it("should map the function over the iterable with spread arguments", () => {
    assert.eqArray([32, 9, 1000],
                   wu.spreadMap(Math.pow, [[2, 5], [3, 2], [10, 3]]));
  });
});
describe("wu.take", () => {
  it("should yield as many items as requested", () => {
    assert.eqArray([0, 1, 2, 3, 4],
                   wu.take(5, wu.count()));
  });
});
describe("wu.takeWhile", () => {
  it("should keep yielding items from the iterable until the predicate is false", () => {
    assert.eqArray([0, 1, 2, 3, 4],
                   wu.takeWhile(x => x < 5, wu.count()));
  });
});
describe("wu.tap", () => {
  it("should perform side effects and yield the original item", () => {
    let i = 0;
    assert.eqArray([1, 2, 3],
                   wu.tap(x => i++, [1, 2, 3]));
    assert.equal(i, 3);
  });
});
describe("wu.tee", () => {
  it("should clone iterables", () => {
    const factorials = wu(wu.count(1)).reductions((a, b) => a * b);
    const [i1, i2] = wu(factorials).tee();

    assert.equal(i1.next().value, 1);
    assert.equal(i1.next().value, 2);
    assert.equal(i1.next().value, 6);
    assert.equal(i1.next().value, 24);

    assert.equal(i2.next().value, 1);
    assert.equal(i2.next().value, 2);
    assert.equal(i2.next().value, 6);
    assert.equal(i2.next().value, 24);
  });
});
describe("wu.toArray", () => {
  it("should return array from the iterable", () => {
    assert.eqArray(
      wu.count(0).take(3).toArray(),
      [0, 1, 2],
    );
    assert.eqArray(
      wu([0, 1, 2]).toArray(),
      [0, 1, 2]
    );
  });
});
describe("wu.unique", () => {
  it("should yield only the unique items from the iterable", () => {
    assert.eqArray([1, 2, 3],
                   wu.unique([1, 1, 2, 2, 1, 1, 3, 3]));
  });
});
describe("wu.unzip", () => {
  it("should create iterables from zipped items", () => {
    const pairs = [
      ["one", 1],
      ["two", 2],
      ["three", 3]
    ];
    const [i1, i2] = wu(pairs).unzip();
    assert.eqArray(["one", "two", "three"], [...i1]);
    assert.eqArray([1, 2, 3], [...i2]);
  });
});
describe("wu.values", () => {
  it("should iterate over values", () => {
    assert.eqSet(new Set([1, 2, 3]),
                 wu.values({ foo: 1, bar: 2, baz: 3 }));
  });
});
describe("wu.zip", () => {
  it("should zip two iterables together", () => {
    assert.eqArray([["a", 1], ["b", 2], ["c", 3]],
                   wu.zip("abc", [1, 2, 3]));
  });

  it("should stop with the shorter iterable", () => {
    assert.eqArray([["a", 1], ["b", 2], ["c", 3]],
                   wu.zip("abc", wu.count(1)));
  });
});
describe("wu.zipLongest", () => {
  it("should stop with the longer iterable", () => {
    const arr1: any[] = [];
    arr1[1] = 2;
    const arr2: any[] = [];
    arr2[1] = 3;
    assert.eqArray([["a", 1], arr1, arr2],
                   wu.zipLongest("a", [1, 2, 3]));
  });
});
describe("wu.zipWith", () => {
  it("should spread map over the zipped iterables", () => {
    const add3 = (a: any, b: any, c: any) => a + b + c;
    assert.eqArray([12, 15, 18],
                   wu.zipWith(add3,
                              [1, 2, 3],
                              [4, 5, 6],
                              [7, 8, 9]));
  });
});
