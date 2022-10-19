import * as R from 'ramda';

() => {
    const x = R.prop('x');
};

() => {
    const x: number = R.prop('x', { x: 100 }); // => 100
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
    const favorite = R.prop('favoriteLibrary');
};

// FIXME: TS 4.9 handles `const a = value as Value | undefined;` as `Value`
function maybe<T>(value: T): T | undefined { return value; }

() => { // get defined prop from obj
    const obj = { x: 100 };
    R.prop('x')(obj); // $ExpectType number
    R.prop('x', obj); // $ExpectType number
    R.prop(R.__, obj)('x'); // $ExpectType number
};

() => { // get defined typed prop from obj
    const obj: { x: 100 } = { x: 100 };
    R.prop('x')(obj); // $ExpectType 100
    R.prop('x', obj); // $ExpectType 100
    R.prop(R.__, obj)('x'); // $ExpectType 100
};

() => { // get undefined prop from obj
    const obj = { y: 100 };
    R.prop('x')(obj); // $ExpectType undefined
    R.prop('x', obj); // $ExpectType undefined
    R.prop(R.__, obj)('x'); // $ExpectType undefined
};

() => { // get prop from undefined
    R.prop('x')(undefined); // $ExpectType undefined
    R.prop('x', undefined); // $ExpectType undefined
    R.prop(R.__, undefined)('x'); // $ExpectType undefined
};

() => { // get prop from maybe obj
    const obj = maybe({ x: 100 });
    R.prop('x')(obj); // $ExpectType number | undefined
    R.prop('x', obj); // $ExpectType number | undefined
    R.prop(R.__, obj)('x'); // $ExpectType number | undefined
};

() => { // get first element from array
    const array = [100, 200];
    R.prop(0)(array); // $ExpectType number
    R.prop(0, array); // $ExpectType number
    R.prop(R.__, array)(0); // $ExpectType number
};

() => { // get first element from tuple
    const tuple = [100, 200] as const;
    R.prop(0)(tuple); // $ExpectType 100
    R.prop(0, tuple); // $ExpectType 100
    R.prop(R.__, tuple)(0); // $ExpectType 100
};

() => { // get overflow element from tuple
    const tuple = [100, 200] as const;
    R.prop(2)(tuple); // $ExpectType undefined
    R.prop(2, tuple); // $ExpectType undefined
    R.prop(R.__, tuple)(2); // $ExpectType undefined
};

() => { // get variadic element from tuple
    const tuple = [100, '200'] as [number, ...string[]];
    R.prop(2)(tuple); // $ExpectType string
    R.prop(2, tuple); // $ExpectType string
    R.prop(R.__, tuple)(2); // $ExpectType string
};

() => { // get first element from undefined
    R.prop(0)(undefined); // $ExpectType undefined
    R.prop(0, undefined); // $ExpectType undefined
    R.prop(R.__, undefined)(0); // $ExpectType undefined
};

() => { // get prop from maybe array
    const array = maybe([100, 200]);
    R.prop(0)(array); // $ExpectType number | undefined
    R.prop(0, array); // $ExpectType number | undefined
    R.prop(R.__, array)(0); // $ExpectType number | undefined
};

() => { // pass types
    const obj = { x: 100 };
    R.prop<'x', { x: number }>('x')(obj); // $ExpectType number
    R.prop<'x', number>('x')(obj); // $ExpectType number
    R.prop<'x'>('x')<{ x: number }>(obj); // $ExpectType number
    R.prop<'x'>('x')<number>(obj); // $ExpectType number
    R.prop<'x', { x: number }>('x', obj); // $ExpectType number
    R.prop<'x', { x: number }>(R.__, obj)('x'); // $ExpectType number
    R.prop<{ x: number }>(R.__, obj)<'x'>('x'); // $ExpectType number
};
