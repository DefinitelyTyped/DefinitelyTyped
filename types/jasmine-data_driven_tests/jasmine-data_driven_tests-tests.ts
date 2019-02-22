/// <reference types="jasmine" />

all("A data driven test is a suite with multiple specs",
    ['a', 'b', 'c'],
    value => {
        expect(value).not.toBe('d');
    }
);

all("A data driven test can have many arguments",
    [
        [1, 2, 3],
        [2, 4, 6]
    ],
    (a, b, c) => {
        expect(c - (a + b)).toBe(0);
    }
);

all("A data driven test can be asynchronous",
    [
        [3, 1],
        [5, 2]
    ],
    (a, b, done) => {
        setTimeout(() => {
            expect(a - b > 0).toBe(true);
            done();
        }, 50);
    }
);

xall("A data driven test can be pending",
    [1, 2, 3],
    value => {
        expect(value < 4).toBe(true);
    }
);

all("A data set must consist of array-wrapped arrays, if test expects single array input",
    [[[1, 2]], [[3, 4]], [[5, 6]]],
    (numberArray: number[]) => {
        expect(numberArray.length).toBe(2);
    }
);

describe("A suite", () => {
    let a: number;

    beforeEach(() => {
        a = 5;
    });

    all("can contain data driven tests",
        [1, 2, 3],
        b => {
            expect(a - b > 0).toBe(true);
        }
    );
});
