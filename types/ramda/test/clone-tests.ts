import * as R from 'ramda';

() => {
    const obj1 = [{}, {}, {}];
    const obj2 = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const a1: any[] = R.clone(obj1);
    const a2: Array<{ a: number }> = R.clone(obj2);
    const a3: any = R.clone({});
    const a4: number = R.clone(10);
    const a5: string = R.clone('foo');
    const a6: number = R.clone(Date.now());
};

(() => {
    R.clone([{}, {}, {}]);
    R.clone([1, 2, 3]);
})();
