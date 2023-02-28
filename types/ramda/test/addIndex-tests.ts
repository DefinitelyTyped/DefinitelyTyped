import * as R from 'ramda';

class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

() => {
    const filterIndexed = R.addIndex<number>(R.filter);

    function lastTwo(_val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    // $ExpectType number[]
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
};

() => {
    function lastTwo(_val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    const filterIndexed = R.addIndex<number>(R.filter);

    // $ExpectType number[]
    filterIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [0, 9]
    const lastTwoFn = filterIndexed(lastTwo);
    lastTwoFn([8, 6, 7, 5, 3, 0, 9]);
};

() => {
    function plusFive(num: number, idx: number, list: number[]) {
        list[idx] = num + 5;
    }

    // $ExpectType number[]
    R.addIndex<number>(R.forEach)(plusFive)([1, 2, 3]); // => [6, 7, 8]
};

() => {
    function squareEnds(elt: number, idx: number, list: number[]) {
        if (idx === 0 || idx === list.length - 1) {
            return elt * elt;
        }
        return elt;
    }

    // $ExpectType number[]
    R.addIndex<number>(R.map)(squareEnds, [8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
    // $ExpectType number[]
    R.addIndex<number>(R.map)(squareEnds)([8, 5, 3, 0, 9]); // => [64, 5, 3, 0, 81]
};

() => {
    const reduceIndexed = R.addIndex<string, { [elem: string]: number }>(R.reduce);
    const letters = ['a', 'b', 'c'];

    function objectify(accObject: { [elem: string]: number }, elem: string, idx: number, _list: string[]) {
        accObject[elem] = idx;
        return accObject;
    }

    // $ExpectType { [elem: string]: number; }
    reduceIndexed(objectify, {}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    // $ExpectType { [elem: string]: number; }
    reduceIndexed(objectify)({}, letters); // => { 'a': 0, 'b': 1, 'c': 2 }
    // $ExpectType { [elem: string]: number; }
    reduceIndexed(objectify, {})(letters); // => { 'a': 0, 'b': 1, 'c': 2 }
};

() => {
    function lastTwo(_val: number, idx: number, list: number[]) {
        return list.length - idx <= 2;
    }

    const rejectIndexed = R.addIndex<number>(R.reject);
    // $ExpectType number[]
    rejectIndexed(lastTwo, [8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
    // $ExpectType number[]
    rejectIndexed(lastTwo)([8, 6, 7, 5, 3, 0, 9]); // => [8, 6, 7, 5, 3]
};

() => {
    const mapIndexed = R.addIndex<string, string>(R.map);
    mapIndexed((val: string, idx: number) => `${idx}-${val}`)(['f', 'o', 'o', 'b', 'a', 'r']);
    // => ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
    const mapIndexed2 = R.addIndex<Rectangle, number>(R.map);
    // $ExpectType number[]
    mapIndexed2(
        (rectangle: Rectangle, idx: number): number => rectangle.area() * idx,
        [new Rectangle(1, 2), new Rectangle(4, 7)],
    );
    // => [2, 56]
};

() => {
    const reduceIndexed = R.addIndex<string, string>(R.reduce);
    // $ExpectType string
    reduceIndexed((acc: string, val: string, idx: number) => `${acc},${idx}-${val}`, '', [
        'f',
        'o',
        'o',
        'b',
        'a',
        'r',
    ]);
    // => ['0-f,1-o,2-o,3-b,4-a,5-r']
};
