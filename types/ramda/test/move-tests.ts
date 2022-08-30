import * as R from 'ramda';

() => {
    const sampleList = ['a', 'b', 'c', 'd', 'e', 'f'];

    R.move<string>(0, 2, sampleList); // => ['b', 'c', 'a', 'd', 'e', 'f']
    R.move<string>(-1, 0, sampleList); // => ['f', 'a', 'b', 'c', 'd', 'e'] list rotation

    const moveCurried1 = R.move(0, 2);
    moveCurried1<string>(sampleList); // => ['b', 'c', 'a', 'd', 'e', 'f']

    const moveCurried2 = R.move(0);
    moveCurried2<string>(2, sampleList); // => ['b', 'c', 'a', 'd', 'e', 'f']

    const moveCurried3 = R.move(0);
    const moveCurried4 = moveCurried3(2);
    moveCurried4<string>(sampleList); // => ['b', 'c', 'a', 'd', 'e', 'f']
};
