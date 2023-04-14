import * as R from 'ramda';

(() => {
    interface Vector {
        x: number;
        y: number;
    }

    let numberOfCalls = 0;

    function vectorSum(a: Vector, b: Vector): Vector {
        numberOfCalls += 1;
        return {
            x: a.x + b.x,
            y: a.y + b.y,
        };
    }

    const memoVectorSum = R.memoizeWith((a, b) => JSON.stringify([a, b]), vectorSum);

    memoVectorSum({ x: 1, y: 1 }, { x: 2, y: 2 }); // => { x: 3, y: 3 }
    numberOfCalls; // => 1
    memoVectorSum({ x: 1, y: 1 }, { x: 2, y: 2 }); // => { x: 3, y: 3 }
    numberOfCalls; // => 1
    memoVectorSum({ x: 1, y: 2 }, { x: 2, y: 3 }); // => { x: 3, y: 5 }
    numberOfCalls; // => 2

    // Note that argument order matters
    memoVectorSum({ x: 2, y: 3 }, { x: 1, y: 2 }); // => { x: 3, y: 5 }
    numberOfCalls; // => 3
})();
