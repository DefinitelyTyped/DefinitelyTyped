import * as R from 'ramda';

() => {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }
    // $ExpectType Record<"c", number> & Omit<{ a: number; b: number; }, "c">
    const a: ABC = R.assoc('c', 3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<"c", number> & Omit<{ a: number; b: number; }, "c">
    const b: ABC = R.assoc('c')(3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<"c", number> & Omit<{ a: number; b: number; }, "c">
    const c: ABC = R.assoc('c', 3)({ a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<"c", number> & Omit<{ a: number; b: number; }, "c">
    const d: ABC = R.assoc(R.__, 3, { a: 1, b: 2 })('c'); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<"c", number> & Omit<{ a: number; b: number; }, "c">
    const e: ABC = R.assoc('c', R.__, { a: 1, b: 2 })(3); // => {a: 1, b: 2, c: 3}

    interface ABC2 {
        a: number;
        b: number;
        c: string;
    }

    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    const f: ABC2 = R.assoc('c', 'test', { a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    const g: ABC2 = R.assoc('c', 'test')({ a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    const h: ABC2 = R.assoc('c')('test')({ a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    const i: ABC2 = R.assoc('c')('test', { a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}

    interface Point {
        x: number;
        y: number;
    }

    interface Item {
        id: number;
        name: string;
    }

    // $ExpectType { (val: number, obj: Point): Point; (val: number): (obj: Point) => Point; }
    R.assoc<Point>('x');
    // $ExpectType { (val: number, obj: Point): Point; (val: number): (obj: Point) => Point; }
    R.assoc<Point, 'x'>('x');
    // $ExpectType { (val: string | number, obj: Item): Item; (val: string | number): (obj: Item) => Item; }
    R.assoc<Item>('id');
    // $ExpectType { (val: number, obj: Item): Item; (val: number): (obj: Item) => Item; }
    R.assoc<Item, 'id'>('id');
};

() => {
    type ABC = Record<string, string>;
    // $ExpectType Record<string, string> & Omit<{ 1: string; 2: string; }, string>
    const b: ABC = R.compose(R.assoc, R.toString)(3)('c', { 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
    // $ExpectType Record<string, string> & Omit<{ 1: string; 2: string; }, string>
    const c: ABC = R.compose(R.assoc, R.toString)(3)('c')({ 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
};
