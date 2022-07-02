import * as R from 'ramda';

() => {
    // $ExpectType Lens<number[], number>
    R.lensIndex<number>(0);
};

() => {
    type First = string;
    type Second = number;
    type Third = boolean;

    type Line = [First, Second, Third];

    const lines: Line[] = [
        ['a', 1, true],
        ['b', 2, false],
        ['c', 3, true],
    ];

    // $ExpectType Lens<Line, string>
    const firstLens = R.lensIndex<Line, 0>(0);

    // $ExpectType (obj: Line) => string
    const viewFirst = R.view(firstLens);
};
