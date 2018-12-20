import * as mori from "mori";

/*
These tests are based on the code examples listed on:

http://swannodette.github.io/mori/
*/

// mock the jest functions to get types to check out
const describe = (d: any, f: any) => undefined;
const it = (d: any, f: any) => undefined;
const expect = (t: any) => ({
    toBe: (t: any) => undefined,
    toEqual: (t: any) => undefined,
    not: {
        toBe: (t: any) => undefined,
        toEqual: (t: any) => undefined,
    }
});

describe("mori", () => {
    const l0 = mori.list(1, 2, 3);
    const l1 = mori.list(1, 2, 3);
    const l2 = mori.list(2, 3, 4);
    const v1 = mori.vector(1, 2, 3);
    const v2 = mori.vector(2, 3, 4);
    const v3 = mori.vector(1, 2, 3);
    const m0 = mori.hashMap("foo", 1);
    const m1 = mori.hashMap("foo", 1);
    const m2 = mori.hashMap("foo", 2);
    const s1 = mori.set([1, 2, 3]);

    describe("Fundamentals", () => {
        describe("equals", () => {
            it("compares lists", () => {
                expect(mori.equals(l0, l1)).toBe(true);
                expect(mori.equals(l0, l2)).toBe(false);
            });

            it("compares vectors with lists", () => {
                expect(mori.equals(v1, l0)).toBe(true);
                expect(mori.equals(v1, l2)).toBe(false);
                expect(mori.equals(v1, v2)).toBe(false);
            });

            it("compares objects converted from JS world", () => {
                expect(mori.equals(m0, m1)).toBe(true);
                expect(mori.equals(m0, m2)).toBe(false);
            });
        });

        describe("hash", () => {
            it("returns the same hash for the same contents", () => {
                expect(mori.hash(l1)).toEqual(mori.hash(v1));
                expect(mori.hash(v1)).toEqual(mori.hash(v3));
                expect(mori.hash(v1)).not.toEqual(mori.hash(v2));
            });
        });
    });

    describe("Type Predicates", () => {
        it("tells if is a list", () => {
            expect(mori.isList(l1)).toBe(true);
            expect(mori.isList(v1)).toBe(false);
            expect(mori.isList(m0)).toBe(false);
            expect(mori.isList(s1)).toBe(false);
        });
        it("tells if is a seq", () => {
            expect(mori.isSeq(l1)).toBe(true);
            expect(mori.isSeq(v1)).toBe(false);
            expect(mori.isSeq(m0)).toBe(false);
            expect(mori.isSeq(s1)).toBe(false);
        });
        it("tells if is a vector", () => {
            expect(mori.isVector(l1)).toBe(false);
            expect(mori.isVector(v1)).toBe(true);
            expect(mori.isVector(m0)).toBe(false);
            expect(mori.isVector(s1)).toBe(false);
        });
        it("tells if is a map", () => {
            expect(mori.isMap(l1)).toBe(false);
            expect(mori.isMap(v1)).toBe(false);
            expect(mori.isMap(m0)).toBe(true);
            expect(mori.isMap(s1)).toBe(false);
        });
        it("tells if is a set", () => {
            expect(mori.isSet(l1)).toBe(false);
            expect(mori.isSet(v1)).toBe(false);
            expect(mori.isSet(m0)).toBe(false);
            expect(mori.isSet(s1)).toBe(true);
        });
        it("tells if is a collection", () => {
            expect(mori.isCollection(l1)).toBe(true);
            expect(mori.isCollection(v1)).toBe(true);
            expect(mori.isCollection(m0)).toBe(true);
            expect(mori.isCollection(s1)).toBe(true);
        });
        it("tells if is a sequential", () => {
            expect(mori.isSequential(l1)).toBe(true);
            expect(mori.isSequential(v1)).toBe(true);
            expect(mori.isSequential(m0)).toBe(false);
            expect(mori.isSequential(s1)).toBe(false);
        });
        it("tells if is an associative", () => {
            expect(mori.isAssociative(l1)).toBe(false);
            expect(mori.isAssociative(v1)).toBe(true);
            expect(mori.isAssociative(m0)).toBe(true);
            expect(mori.isAssociative(s1)).toBe(false);
        });
        it("tells if is counted", () => {
            expect(mori.isCounted(l1)).toBe(true);
            expect(mori.isCounted(v1)).toBe(true);
            expect(mori.isCounted(m0)).toBe(true);
            expect(mori.isCounted(s1)).toBe(true);
        });
        it("tells if is indexed", () => {
            expect(mori.isIndexed(l1)).toBe(false);
            expect(mori.isIndexed(v1)).toBe(true);
            expect(mori.isIndexed(m0)).toBe(false);
            expect(mori.isIndexed(s1)).toBe(false);
        });
        it("tells if is reduceable", () => {
            expect(mori.isReduceable(l1)).toBe(true);
            expect(mori.isReduceable(v1)).toBe(true);
            expect(mori.isReduceable(m0)).toBe(true);
            expect(mori.isReduceable(s1)).toBe(false);
        });
        it("tells if is seqable", () => {
            expect(mori.isSeqable(l1)).toBe(true);
            expect(mori.isSeqable(v1)).toBe(true);
            expect(mori.isSeqable(m0)).toBe(true);
            expect(mori.isSeqable(s1)).toBe(true);
        });
        it("tells if is reversible", () => {
            expect(mori.isReversible(l1)).toBe(false);
            expect(mori.isReversible(v1)).toBe(true);
            expect(mori.isReversible(m0)).toBe(false);
            expect(mori.isReversible(s1)).toBe(false);
        });
    });

    describe("Collection Operations", () => {
        it("can conj", () => {
            const l = mori.list(2, 3);
            expect(mori.conj(l, 1)).toEqual(mori.list(1, 2, 3));

            const v = mori.vector(1, 2);
            expect(mori.conj(v, 3)).toEqual(mori.vector(1, 2, 3));

            const m = mori.hashMap("foo", 1);
            expect(mori.conj(m, mori.vector("bar", 2)))
                .toEqual(mori.hashMap("foo", 1, "bar", 2));

            const s = mori.set(["cat", "bird", "dog"]);
            expect(mori.conj(s, "zebra"))
                .toEqual(mori.set(["cat", "bird", "dog", "zebra"]));
        });

        it("can into", () => {
            const l = mori.list(2, 3);
            const v = mori.vector(1, 2);

            expect(mori.into(l, v)).toEqual(mori.list(2, 1, 2, 3));
            expect(mori.into(l, l)).toEqual(mori.list(3, 2, 2, 3));
            expect(mori.into(v, l)).toEqual(mori.vector(1, 2, 2, 3));
            expect(mori.into(v, v)).toEqual(mori.vector(1, 2, 1, 2));
        });

        it("can assoc", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.assoc(v, 1, "quux"))
                .toEqual(mori.vector("foo", "quux", "baz"));

            const m = mori.hashMap("foo", 1);
            expect(mori.assoc(m, "bar", 2))
                .toEqual(mori.hashMap("foo", 1, "bar", 2));
            expect(mori.assoc(m, "foo", 6))
                .toEqual(mori.hashMap("foo", 6));
        });

        it("can disassoc", () => {
            const m = mori.hashMap("foo", 1, "bar", 2, "baz", 3);
            expect(mori.dissoc(m, "bar", "baz"))
                .toEqual(mori.hashMap("foo", 1));
        });

        it("can distinct", () => {
            const v = mori.vector(1, 1, 2, 3, 3, 4, 5);
            expect(
                mori.equals(mori.distinct(v),
                mori.list(1, 2, 3, 4, 5))).toBe(true);
            // interestingly it doesn't using deep equal in this case
            expect(mori.distinct(v))
                .not.toEqual(mori.list(1, 2, 3, 4, 5));
        });

        it("can empty", () => {
            const m = mori.hashMap("foo", 1, "bar", 2, "baz", 3);
            expect(mori.equals(mori.empty(m), mori.hashMap())).toBe(true);

            const v = mori.vector("foo", "bar", "baz");
            expect(mori.equals(mori.empty(v), mori.vector())).toBe(true);
        });

        it("can get", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.get(v, 1)).toEqual("bar");

            const m = mori.hashMap("foo", 1, "bar", 2);
            const v2 = mori.get(m, "foo");
            expect(mori.get(m, "foo")).toEqual(1);
            expect(mori.get(m, "baz", "nope")).toEqual("nope");
        });

        it("can getIn", () => {
            const v = mori.vector("foo", "bar", "baz");
            const v2 = mori.vector("quux", v);
            expect(mori.getIn(v2, [1, 2])).toEqual("baz");

            const m = mori.hashMap("foo", 1, "bar", 2);
            const m2 = mori.hashMap("baz", 3, "quux", m);
            expect(mori.getIn(m2, ["quux", "bar"])).toEqual(2);
        });

        it("can tell if hasKey", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.hasKey(v, 1)).toBe(true);
            expect(mori.hasKey(v, 9)).toBe(false);

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.hasKey(m, "foo")).toBe(true);
            expect(mori.hasKey(m, "quux")).toBe(false);

            const s = mori.set(["foo", "bar", "baz"]);
            expect(mori.hasKey(s, "foo")).toBe(true);
            expect(mori.hasKey(s, "quux")).toBe(false);
        });

        it("can find", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.find(v, 2))
                .toEqual(mori.vector(2, "baz"));
            expect(mori.find(v, 9)).toBe(null);

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.find(m, "foo"))
                .toEqual(mori.vector("foo", 1));
            expect(mori.find(m, "quux")).toBe(null);
        });

        it("can find nth item", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.nth(v, 1)).toEqual("bar");
        });

        it("can get last item", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.last(v)).toEqual("baz");
        });

        it("can assocIn", () => {
            const h = mori.hashMap("foo", mori.hashMap("bar", 1));
            expect(mori.assocIn(h, ["foo", "baz"], 2))
                .toEqual(mori.hashMap("foo", mori.hashMap("bar", 1, "baz", 2)));
        });

        it("can updateIn", () => {
            const h = mori.hashMap("foo", mori.vector(1, 2, 3));
            expect(mori.updateIn(h, ["foo", 1], mori.inc))
                .toEqual(mori.hashMap("foo", mori.vector(1, 3, 3)));
        });

        it("can count", () => {
            const l = mori.list("foo", "bar", "baz");
            expect(mori.count(l)).toEqual(3);

            const v = mori.vector("foo", "bar", "baz");
            expect(mori.count(v)).toEqual(3);

            const s = mori.set(["foo", "bar", "baz"]);
            expect(mori.count(s)).toEqual(3);

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.count(m)).toEqual(2);
        });

        it("can tell isEmpty", () => {
            const l = mori.list("foo", "bar", "baz");
            expect(mori.isEmpty(l)).toBe(false);

            const v = mori.vector();
            expect(mori.isEmpty(v)).toBe(true);
        });

        it("can peek", () => {
            const l = mori.list("foo", "bar", "baz");
            expect(mori.peek(l)).toEqual("foo");

            const v = mori.vector("foo", "bar", "baz");
            expect(mori.peek(v)).toEqual("baz");
        });

        it("can pop", () => {
            const l = mori.list("foo", "bar", "baz");
            expect(mori.pop(l)).toEqual(mori.list("bar", "baz"));

            const v = mori.vector("foo", "bar", "baz");
            expect(mori.pop(v)).toEqual(mori.vector("foo", "bar"));
        });

        it("can zipmap", () => {
            const keys = ["foo", "bar", "baz"];
            const vals = [1, 2, 3];
            const h = mori.zipmap(keys, vals);
            expect(h).toEqual(mori.hashMap("foo", 1, "bar", 2, "baz", 3));
        });

        it("can reverse", () => {
            const v = mori.vector("foo", "bar", "baz");
            expect(mori.equals(
                mori.reverse(v),
                mori.vector("baz", "bar", "foo"))).toBe(true);
        });
    });

    describe("Vector Specific Operations", () => {
        it("can subvec", () => {
            const v = mori.vector("cat", "dog", "bird", "zebra");
            expect(mori.equals(
                mori.subvec(v, 1, 2),
                mori.vector("dog"))).toBe(true);
        });
    });

    describe("HashMap Specific Operations", () => {
        it("can give its keys", () => {
            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.equals(mori.keys(m), mori.list("foo", "bar"))).toBe(true);
        });

        it("can give its values", () => {
            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.equals(mori.vals(m), mori.list(1, 2)));
        });

        it("can merge", () => {
            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(
                mori.merge(m, mori.hashMap("bar", 3, "baz", 4))
            ).toEqual(mori.hashMap("foo", 1, "bar", 3, "baz", 4));
        });
    });

    describe("Set Specific Operations", () => {
        it("can disj", () => {
            const s = mori.set(["cat", "dog", "bird"]);
            expect(mori.equals(
                mori.disj(s, "bird"),
                mori.set(["dog", "cat"]))).toBe(true);
        });

        it("can union", () => {
            const s0 = mori.set(["cat", "dog"]);
            const s1 = mori.set(["zebra", "lion"]);
            const result = mori.set(["lion", "cat", "dog", "zebra"]);
            expect(
                mori.equals(mori.union(s0, s1), result)).toBe(true);
        });

        it("can intersection", () => {
            const s0 = mori.set(["cat", "dog", "mouse"]);
            const s1 = mori.set(["dog", "cat", "bird"]);
            expect(
                mori.equals(
                    mori.intersection(s0, s1),
                    mori.set(["cat", "dog"])
                )).toBe(true);
        });

        it("can difference", () => {
            const s0 = mori.set(["cat", "dog", "mouse"]);
            const s1 = mori.set(["dog", "cat", "bird"]);

            // Mistake in the original code example which
            // said it should equal #{"mouse" "bird"}
            expect(mori.equals(
                mori.difference(s0, s1),
                mori.set(["mouse"])
            )).toBe(true);
        });

        it("can tell if is subset", () => {
            const s0 = mori.set(["dog", "cat"]);
            const s1 = mori.set(["cat", "dog", "bird"]);

            expect(mori.isSubset(s0, s1)).toBe(true);
        });

        it("can tell if is superset", () => {
            const s0 = mori.set(["cat", "dog", "bird"]);
            const s1 = mori.set(["dog", "cat"]);

            expect(mori.isSuperset(s0, s1)).toBe(true);
        });
    });

    describe("Sequence", () => {
        it("it can first", () => {
            expect(mori.first("foobar")).toEqual("f");

            expect(mori.first([1, 2, 3])).toEqual(1);

            const l = mori.list(1, 2, 3);
            expect(mori.first(l)).toEqual(1);

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.first(m)).toEqual(mori.vector("foo", 1));
        });

        it("it can rest", () => {
            expect(mori.equals(
                mori.rest("foobar"),
                mori.list("o", "o", "b", "a", "r")
            )).toBe(true);

            expect(mori.equals(
                mori.rest([1, 2, 3]),
                mori.list(2, 3)
            )).toBe(true);

            const l = mori.list(1, 2, 3);
            expect(mori.equals(
                mori.rest(l),
                mori.list(2, 3)
            )).toBe(true);

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.equals(
                mori.rest(m),
                mori.list(mori.vector("bar", 2))
            )).toBe(true);
        });

        it("can convert a collection to a seq", () => {
            expect(mori.equals(
                mori.seq("foo"),
                mori.list("f", "o", "o")
            )).toBe(true);
            expect(mori.seq(mori.list())).toBe(null);
        });

        it("can cons", () => {
            const v = mori.vector(2, 3);
            expect(mori.equals(
                mori.cons(1, v),
                mori.list(1, 2, 3)
            )).toBe(true);
        });

        it("can concat", () => {
            const r = mori.range(3);
            const a = [3, 4, 5];
            const l = mori.list(6, 7);
            const v = mori.vector(8, 9);
            expect(mori.equals(
                mori.concat(r, a, l, v),
                mori.list(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            )).toBe(true);
        });

        it("can concat 2", () => {
            const a = ["a", "b", "c"];
            const l = mori.list("d", "e");
            const v = mori.vector("f", "g");
            const s = "hi";
            expect(mori.equals(
                mori.concat(a, l, v, s),
                mori.list("a", "b", "c", "d", "e", "f", "g", "h", "i")
            )).toBe(true);
        });

        it("can flatten", () => {
            const v = mori.toClj([[1, 2], 3, [4], [[5, 6], 7]]);
            expect(mori.equals(
                mori.flatten(v),
                mori.list(1, 2, 3, 4, 5, 6, 7)
            )).toBe(true);
        });

        it("turn intoArray", () => {
            const lazy = mori.map(mori.inc, [1, 2, 3]);
            expect(mori.intoArray(lazy)).toEqual([2, 3, 4]);
        });

        it("can each", () => {
            const xs = mori.map(mori.inc, [1, 2, 3]);
            const ns: number[] = [];
            mori.each(xs, (n: number) => {
                ns.push(n);
            });
            expect(ns).toEqual([2, 3, 4]);
        });

        it("can map", () => {
            const a0 = [1, 2, 3];

            expect(mori.equals(
                mori.map(mori.inc, a0),
                mori.list(2, 3, 4)
            )).toBe(true);

            const a1 = [4, 5, 6];
            const a2 = [7, 8, 9];

            expect(mori.equals(
                mori.map(mori.vector, a0, a1, a2),
                mori.list(
                    mori.vector(1, 4, 7),
                    mori.vector(2, 5, 8),
                    mori.vector(3, 6, 9))
            )).toBe(true);
        });

        it("can mapcat", () => {
            const a = mori.seq("abc");
            const b = mori.seq("123");
            const f = (x: string, y: string) => mori.list(x, x + y);

            expect(mori.equals(
                mori.mapcat(f, a, b),
                mori.list("a", "a1", "b", "b2", "c", "c3")
            )).toBe(true);

            // above is equivalent to below:
            expect(mori.equals(
                mori.reduce(mori.concat, mori.map(f, a, b)),
                mori.list("a", "a1", "b", "b2", "c", "c3")
            )).toBe(true);
        });

        it("can filter", () => {
            const a = [0, 1, 2, 3, 4, 5, 7, 7, 9];
            // Mistake in the original example here, had a as a0.
            expect(mori.equals(
                mori.filter(mori.isEven, a),
                // Mistake in the origin example here, had it as (0 2 4 6 8)
                mori.list(0, 2, 4)
            )).toBe(true);
        });

        it("can filter strings", () => {
            const s = "bananas";
            expect(mori.equals(
                mori.filter((c) => c !== "a", s),
                mori.list("b", "n", "n", "s")
            )).toBe(true);
        });

        it("can remove", () => {
            const a = [0, 1, 2, 3, 4, 5, 6, 7, 9];
            // Mistake in the original example here, had a as a0.
            expect(mori.equals(
                mori.remove(mori.isEven, a),
                mori.list(1, 3, 5, 7, 9)
            )).toBe(true);
        });

        it("can remove from strings", () => {
            const s = "bananas";
            expect(mori.equals(
                mori.remove((c) => c === "a", s),
                mori.list("b", "n", "n", "s")
            )).toBe(true);
        });

        it("can reduce", () => {
            const a = mori.range(10);
            // Mistake in the origin example here, had a as r.
            expect(mori.reduce(mori.sum, 0, a)).toBe(45);
        });

        it("can reduceKV", () => {
            const f = (acc: string, key: any, val: number) => {
                return `${acc}(${key}:${val})`;
            };

            const m = mori.hashMap("foo", 1, "bar", 2);
            expect(mori.reduceKV(f, "", m)).toEqual("(foo:1)(bar:2)");

            const v = mori.vector(5, 7);
            expect(mori.reduceKV(f, "", v)).toEqual("(0:5)(1:7)");
        });

        it("can take", () => {
            const a = mori.range(); // infinite sequence
            // Mistake in the origin example, had a as r.
            expect(mori.equals(
                mori.take(10, a),
                mori.list(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            )).toBe(true);
        });

        it("can takeWhile", () => {
            const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // Mistake in the origin example, had a as r. Also unclosed ).
            expect(mori.equals(
                mori.takeWhile((n) => n < 5, a),
                mori.list(0, 1, 2, 3, 4)
            )).toBe(true);
        });

        it("can takeWhile strings", () => {
            const s = "abcde";
            // Mistake in the origin example, had a as r. Also unclosed ).
            expect(mori.equals(
                mori.takeWhile((c) => c !== "d", s),
                mori.list("a", "b", "c")
            )).toBe(true);
        });

        it("can drop", () => {
            const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect(mori.equals(
                mori.drop(5, a),
                mori.list(5, 6, 7, 8, 9)
            )).toBe(true);
        });

        it("can drop strings", () => {
            const s = "bananas";
            expect(mori.equals(
                mori.drop(5, s),
                mori.list("a", "s")
            )).toBe(true);
        });

        it("can dropWhile", () => {
            const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect(mori.equals(
                mori.dropWhile((n) => n < 5, a),
                mori.list(5, 6, 7, 8, 9)
            )).toBe(true);
        });

        it("can dropWhile strings", () => {
            const s = "bananas";
            expect(mori.equals(
                mori.dropWhile((c) => c !== "a", s),
                mori.list("a", "n", "a", "n", "a", "s")
            )).toBe(true);
        });

        it("can some", () => {
            const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const f = (x: number) => x % 5 === 0 && x * x;
            expect(mori.some(f, a)).toEqual(25);
        });

        it("can some strings", () => {
            const s = "bananas";
            const f = (c: string) => c === "a";
            expect(mori.some(f, s)).toEqual(true);
        });

        it("can every", () => {
            const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const f = (x: number) => mori.isEven(x);
            const g = (x: number) => mori.isEven(x) || mori.isOdd(x);

            expect(mori.every(f, a)).toBe(false);
            expect(mori.every(g, a)).toBe(true);
        });

        it("can every strings", () => {
            const s = "bananans";
            const s1 = "aaaa";

            expect(mori.every((c) => c === "a", s)).toBe(false);
            expect(mori.every((c) => c === "a", s1)).toBe(true);
        });

        it("can sort", () => {
            const a = [4, 6, 2, 7, 1, 0, 9, 5, 8, 3];
            const f = (a: number, b: number) => b - a;

            expect(mori.equals(
                mori.sort(a),
                mori.list(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
            )).toBe(true);
            expect(mori.equals(
                mori.sort(f, a),
                mori.list(9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
            )).toBe(true);
        });

        it("can sortBy", () => {
            const a = [0, 1, 2, 3, 4, 5, 6];
            const kf = (x: number) => x * 5 % 7;
            const f = (a: number, b: number) => b - a;

            expect(mori.equals(
                mori.map(kf, a),
                mori.list(0, 5, 3, 1, 6, 4, 2)
            )).toBe(true);

            expect(mori.equals(
                mori.sortBy(kf, a),
                mori.list(0, 3, 6, 2, 5, 1, 4)
            )).toBe(true);

            expect(mori.equals(
                mori.sortBy(kf, f, a),
                // Mistake in original example here, they had (4 1 5 2 3 6 0)
                mori.list(4, 1, 5, 2, 6, 3, 0)
            )).toBe(true);
        });

        it("can interpose", () => {
            const a = [1, 2, 3];

            expect(mori.equals(
                mori.interpose("foo", a),
                mori.list(1, "foo", 2, "foo", 3)
            )).toBe(true);
        });

        it("can interleave", () => {
            const ns = [1, 2, 3];
            const as = ["a", "b", "c"];

            expect(mori.equals(
                mori.interleave(ns, as),
                mori.list(1, "a", 2, "b", 3, "c")
            )).toBe(true);
        });

        it("can iterate", () => {
            // Mistake in original example, spelling mistake mor for mori
            expect(mori.equals(
                mori.take(6, mori.iterate(mori.inc, 0)),
                mori.list(0, 1, 2, 3, 4, 5)
            )).toBe(true);
        });

        it("can repeat", () => {
            const foos = mori.repeat("foo");
            expect(mori.equals(
                mori.zipmap([1, 2, 3], foos),
                mori.hashMap(1, "foo", 2, "foo", 3, "foo")
            )).toBe(true);
        });

        it("can repeatedly", () => {
            // Not following original example
            // mori.repeatedly(5, Math.random);
            // here because it uses Math.random
            // as is not predictable
            expect(mori.equals(
                mori.take(5, mori.repeatedly(5, () => 1)),
                mori.list(1, 1, 1, 1, 1)
            )).toBe(true);
        });

        it("can partition", () => {
            const m   = mori;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            let ps  = m.partition(2, arr);

            expect(m.intoArray(m.map(m.intoArray, ps)))
                .toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]);

            ps = m.partition(2, 1, arr);
            expect(m.intoArray(m.map(m.intoArray, ps)))
                .toEqual([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]);
        });

        it("can partition 2", () => {
            const m   = mori;
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const ps  = m.partition(2, arr);
        });

        it("can partition 3", () => {
            const m   = mori;
            const v = mori.vector(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
            const ps  = m.partition(2, v);
        });

        it("can partition strings", () => {
            const s = "bananas";
            const ps  = mori.partition(2, s);

            expect(mori.equals(ps,
                mori.list(mori.list("b", "a"), mori.list("n", "a"),
                mori.list("n", "a")))).toBe(true);
        });

        it("can partitionBy", () => {
            const v = mori.vector("foo", "bar", "baz", "grapefruit");
            const f = (s: string) => s[0];

            expect(mori.equals(
                mori.partitionBy(f, v),
                mori.list(
                    mori.list("foo"),
                    mori.list("bar", "baz"),
                    mori.list("grapefruit")
                ))).toBe(true);
        });

        it("can groupBy", () => {
            function evenOdd(n: number) {
                return mori.isEven(n) ? "even" : "odd";
            }

            const r = mori.range(10);
            expect(mori.equals(
                mori.groupBy(evenOdd, r),
                mori.hashMap(
                    "even", mori.list(0, 2, 4, 6, 8),
                    "odd", mori.list(1, 3, 5, 7, 9)
                ))).toBe(true);
        });
    });

    describe("Helper Functionts", () => {
        it("can primSeq", () => {
            // tslint:disable-next-line:only-arrow-functions
            const foo: any = function() {
                const args = mori.primSeq(arguments);
                const f = mori.first(args);
                return f;
            };
            expect(foo(1, 2, 3)).toEqual(1);
        });

        it("can identity", () => {
            expect(mori.identity(5)).toEqual(5);
        });

        it("can constantly", () => {
            expect(mori.equals(
                mori.map(mori.constantly("foo"), mori.range(4)),
                mori.list("foo", "foo", "foo", "foo")
            )).toBe(true);
        });

        it("can inc", () => {
            expect(mori.inc(1)).toEqual(2);
        });

        it("can dec", () => {
            expect(mori.dec(1)).toEqual(0);
        });

        it("can sum", () => {
            expect(mori.sum(1, 2)).toEqual(3);
            expect(mori.reduce(mori.sum, 0, mori.range(10))).toEqual(45);
        });

        it("can tell if even", () => {
            expect(mori.isEven(4)).toBe(true);
            expect(mori.isEven(5)).toBe(false);
        });

        it("can tell if odd", () => {
            expect(mori.isOdd(4)).toBe(false);
            expect(mori.isOdd(5)).toBe(true);
        });

        it("can comp functions", () => {
            expect(mori.equals(
                mori.map(mori.comp(mori.isOdd, mori.inc), [1, 2, 3]),
                mori.list(false, true, false)
            )).toBe(true);
        });

        it("can juxt", () => {
            const f = mori.juxt<number, number>(
                mori.first,
                mori.last
            );
            expect(f([1, 2, 3, 4, 5, 6])).toEqual([ 1, 6 ]);
        });

        it("can juxt strings", () => {
            const f = mori.juxt(
                mori.first,
                mori.last
            );
            expect(f("bananans")).toEqual([ "b", "s" ]);
        });

        it("can knit", () => {
            const f = mori.knit(
                (s: string) => s.toLowerCase(),
                (s: string) => s.toUpperCase());
            expect(f(["FoO", "bAr"])).toEqual(["foo", "BAR"]);
        });

        it("can pipeline", () => {
            const _ = mori;

            expect(_.pipeline(
                _.vector(1, 2, 3),
                _.curry(_.conj, 4),
                _.curry(_.conj, 5)
            )).toEqual(mori.vector(1, 2, 3, 4, 5));
        });

        it("can partial", () => {
            const _ = mori;
            const f = _.partial
                <mori.Vector<number>, number, mori.Vector<number>>(
                    _.conj, _.vector(1, 2, 3));

            expect(f(4)).toEqual(mori.vector(1, 2, 3, 4));
            expect(f(5)).toEqual(mori.vector(1, 2, 3, 5));
        });

        it("can curry", () => {
            const _ = mori;
            const f = _.curry(_.conj, 4);

            expect(f(_.vector(1, 2, 3))).toEqual(mori.vector(1, 2, 3, 4));
        });

        it("can fnil", () => {
            const _ = mori;
            const f = (x: mori.HashMap<string, number>) => {
                return _.updateIn(x, ["count"], _.fnil(_.inc, 0));
            };

            expect(f(_.hashMap())).toEqual(mori.hashMap("count", 1));
        });

        it("can toClj", () => {
            const data = {foo: "bar"};
            expect(mori.toClj(data)).toEqual(mori.hashMap("foo", "bar"));
        });

        it("can toJs", () => {
            const data = mori.hashMap("foo", "bar");
            expect(mori.toJs(data)).toEqual({ foo: "bar" });
        });
    });
});
