import * as Range from 'strange';
import * as RangeTree from 'strange/tree';

{
    new Range();
    new Range(1, Infinity);
    new Range(null, 10);
    new Range(undefined, 10);
    new Range(1, 10, '[]');
    new Range(-Infinity, null, '[]');
    new Range(1, undefined, '[]');

    Range();
    Range(1, Infinity);
    Range(null, 10);
    Range(undefined, 10);
    Range(1, 10, '[]');
    Range(-Infinity, null, '[]');
    Range(1, undefined, '[]');

    new Range(new Date(2000, 5, 18), new Date(2000, 5, 22));

    new Range(0, 10).begin;
    new Range(0, 10).end;
    new Range(0, 10).bounds;

    new Range<number>(0, 10).compareBegin(5); // => -1
    new Range<number>(0, 10).compareBegin(0); // => 0
    new Range<number>(5, 10).compareBegin(0); // => 1
    new Range(5, 10).compareBegin(null); // => 1

    new Range<number>(0, 10).compareEnd(5); // => -1
    new Range<number>(0, 10).compareEnd(10); // => 0
    new Range<number>(0, 5).compareEnd(10); // => 1
    new Range(0, 5).compareEnd(null); // => -1

    new Range().isEmpty(); // => true
    new Range(5, 5, "[)").isEmpty(); // => true
    new Range(1, 10).isEmpty(); // => false

    new Range().isBounded(); // => true
    new Range(5, 5).isBounded(); // => true
    new Range(null, new Date(2000, 5, 18)).isBounded(); // => false
    new Range(0, Infinity).isBounded(); // => false
    new Range(-Infinity, Infinity).isBounded(); // => false

    new Range().isFinite(); // => true
    new Range(5, 5).isFinite(); // => true
    new Range(null, new Date(2000, 5, 18)).isFinite(); // => false
    new Range(0, Infinity).isFinite(); // => false
    new Range(-Infinity, Infinity).isFinite(); // => false

    new Range().isUnbounded(); // => false
    new Range(5, 5).isUnbounded(); // => false
    new Range(null, new Date(2000, 5, 18)).isUnbounded(); // => true
    new Range(0, Infinity).isUnbounded(); // => true
    new Range(-Infinity, Infinity).isUnbounded(); // => true

    new Range().isInfinite(); // => false
    new Range(5, 5).isInfinite(); // => false
    new Range(null, new Date(2000, 5, 18)).isInfinite(); // => true
    new Range(0, Infinity).isInfinite(); // => true
    new Range(-Infinity, Infinity).isInfinite(); // => true

    new Range<number>(0, 10).contains(5); // => true
    new Range(0, 10).contains(10); // => true
    new Range(0, 10, "[)").contains(10); // => false

    new Range<number>(0, 10).intersects(new Range(5, 7)); // => true
    new Range<number>(0, 10).intersects(new Range(10, 20)); // => true
    new Range<number>(0, 10, "[)").intersects(new Range(10, 20)); // => false
    new Range<number>(0, 10).intersects(new Range(20, 30)); // => false

    new Range(1, 10, "[)").valueOf(); // => [1, 10, "[)"]

    new Range(1, 5).toString(); // => "[1,5]"
    new Range(1, 10, "[)").toString(); // => "[1,10)"

    JSON.stringify(new Range(1, 10)); // "\"[1,10]\""
    new Range(1, 10).toJSON(); // "\"[1,10]\""
    new Range(1, 10).inspect(); // "\"[1,10]\""

    Range.compareBeginToBegin(new Range(0, 10), new Range(5, 15)); // => -1
    Range.compareBeginToBegin(new Range(0, 10), new Range(0, 15)); // => 0
    Range.compareBeginToBegin(new Range(0, 10), new Range(0, 15, "()")); // => 1

    Range.compareBeginToEnd(new Range(0, 10), new Range(0, 5)); // => -1
    Range.compareBeginToEnd(new Range(0, 10), new Range(-10, 0)); // => 0
    Range.compareBeginToEnd(new Range(0, 10), new Range(-10, -5)); // => 1

    Range.compareEndToEnd(new Range(0, 10), new Range(5, 15)); // => -1
    Range.compareEndToEnd(new Range(0, 10), new Range(5, 10)); // => 0
    Range.compareEndToEnd(new Range(0, 10), new Range(5, 10, "()")); // => 1

    Range.parse("[a,z)"); // => new Range("a", "z", "[)")
    Range.parse("[42,69]", Number); // => new Range(42, 69)
    Range.parse("[15,]", Number); // => new Range(15, Infinity)
    Range.parse("(,3.14]", Number); // => new Range(-Infinity, 3.14, "(]")

    Range.union(new Range(0, 5), new Range(5, 10)); // => new Range(0, 10)
    Range.union(new Range(0, 10), new Range(5, 15)); // => new Range(0, 15)

    const a = new Range(-5, 0, "()");
    const b = new Range(5, 10);
    Range.union(a, b); // => new Range(-5, 10, "(]")
}

{
    const left = new RangeTree([new Range(-5, 0)]);
    const right = new RangeTree([new Range(5, 10)]);
    const root = new RangeTree<number>([new Range(0, 5), new Range(0, 10)], left, right);
    root.search(7); // => [new Range(0, 10), new Range(5, 10)]
    root.search(new Range(8, 9)); // => [new Range(5, 10), new Range(0, 10)]

    const ranges = [new Range(0, 10), new Range(20, 30), new Range(40, 50)];
    RangeTree.from<number>(ranges).search(42); // => [new Range(40, 50)]
}
