import * as R from 'ramda';

() => {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    const a: ABC = R.assoc('c', 3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    const b: ABC = R.assoc('c')(3, { a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    const c: ABC = R.assoc('c', 3)({ a: 1, b: 2 }); // => {a: 1, b: 2, c: 3}
    const d: ABC = R.assoc(R.__, 3, { a: 1, b: 2 })('c'); // => {a: 1, b: 2, c: 3}
    const e: ABC = R.assoc('c', R.__, { a: 1, b: 2 })(3); // => {a: 1, b: 2, c: 3}
};

() => {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    // $ExpectType ABC
    R.assoc('c', R.__, { a: 1, b: 2, c: 3 } as ABC)(4); // => {a: 1, b: 2, c: 4}
    // $ExpectType Record<"c", string> & Omit<ABC, "c">
    R.assoc('c', R.__, { a: 1, b: 2, c: 3 } as ABC)('test'); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"d", string> & Omit<ABC, "d">
    R.assoc('d', R.__, { a: 1, b: 2, c: 3 } as ABC)('test'); // => {a: 1, b: 2, c: 3, d: "test"}
    // $ExpectType { a: number; b: number; c: number; }
    R.assoc('c', R.__, { a: 1, b: 2, c: 3 })(4); // => {a: 1, b: 2, c: 4}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c', R.__, { a: 1, b: 2, c: 3 })('test'); // => {a: 1, b: 2, c: "test"}
}

() => {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    // $ExpectType ABC
    R.assoc(R.__, 4, { a: 1, b: 2, c: 3 } as ABC)('c'); // => {a: 1, b: 2, c: 4}
    // $ExpectType Record<"c", string> & Omit<ABC, "c">
    R.assoc(R.__, 'test', { a: 1, b: 2, c: 3 } as ABC)('c'); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"d", string> & Omit<ABC, "d">
    R.assoc(R.__, 'test', { a: 1, b: 2, c: 3 } as ABC)('d'); // => {a: 1, b: 2, c: 3, d: "test"}
    // $ExpectType { a: number; b: number; c: number; }
    R.assoc(R.__, 4, { a: 1, b: 2, c: 3 })('c'); // => {a: 1, b: 2, c: 4}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc(R.__, 'test', { a: 1, b: 2, c: 3 })('c'); // => {a: 1, b: 2, c: "test"}
}

() => {
    interface ABC {
        a: number;
        b: number;
        c: number;
    }

    // $ExpectType ABC
    R.assoc('c', 4, { a: 1, b: 2, c: 3 } as ABC); // => {a: 1, b: 2, c: 4}
    // $ExpectType Record<"c", string> & Omit<ABC, "c">
    R.assoc('c', 'test', { a: 1, b: 2, c: 3 } as ABC); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c', 'test', { a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c', 'test')({ a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c')('test')({ a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c')('test', { a: 1, b: 2, c: 3 }); // => {a: 1, b: 2, c: "test"}
    // $ExpectType Record<"c", string> & Omit<{ a: number; b: number; c: number; }, "c">
    R.assoc('c')('test', { a: 1, b: 2, c: 3 });
};

() => {
    type ABC = Record<string, string>;
    const b: ABC = R.compose(R.assoc, R.toString)(3)('c', { 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
    const c: ABC = R.compose(R.assoc, R.toString)(3)('c')({ 1: 'a', 2: 'b' }); // => {1: "a", 2: "b", 3: "c"}
};
