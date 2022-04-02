import * as R from 'ramda';

() => {
    const obj1 = [{}, {}, {}];
    const obj2 = [{ a: 1 }, { a: 2 }, { a: 3 }];
    // $ExpectType {}[]
    R.clone(obj1);
    // $ExpectType { a: number; }[]
    R.clone(obj2);
    // $ExpectType {}
    R.clone({});
    // $ExpectType 10
    R.clone(10);
    // $ExpectType "foo"
    R.clone('foo');
    // $ExpectType number
    R.clone(Date.now());
};

(() => {
    // $ExpectType {}[]
    R.clone([{}, {}, {}]);
    // $ExpectType number[]
    R.clone([1, 2, 3]);
})();
