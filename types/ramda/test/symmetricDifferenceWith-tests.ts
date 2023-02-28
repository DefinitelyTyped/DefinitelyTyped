import * as R from 'ramda';

() => {
    const eqA = R.eqBy<{ a: number }>(R.prop('a'));
    const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
    const l2 = [{ a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];
    // $ExpectType { a: number; }[]
    R.symmetricDifferenceWith(eqA, l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
    // $ExpectType { a: number; }[]
    R.symmetricDifferenceWith(eqA)(l1, l2); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
    // The below test is commented because it hits the type instantiation limit:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/37839
    // const c: (a: any[]) => any[] = R.symmetricDifferenceWith(eqA)(l1); // => [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
};

() => {
    const eqL = R.eqBy<string>(s => s.length);
    const l1 = ['bb', 'ccc', 'dddd'];
    const l2 = ['aaa', 'bb', 'c'];
    R.symmetricDifferenceWith(eqL, l1, l2); // => ['dddd', 'c']
    R.symmetricDifferenceWith(eqL)(l1, l2); // => ['dddd', 'c']
};
