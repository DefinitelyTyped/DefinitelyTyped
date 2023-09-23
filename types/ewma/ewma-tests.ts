import EWMA = require("ewma");
const clock = {
    now() {
        return 4541;
    },
};

// $ExpectType EwmaClass
const ewmaClass = new EWMA(1, 10, clock);
// $ExpectType EwmaClass
const ewmaFunction = EWMA(1, 10, clock);

// $ExpectType EwmaClass
const ewmaClassNoClock = new EWMA(1, 10);
// $ExpectType EwmaClass
const ewmaFunctionNoClick = EWMA(1, 10);

// $ExpectType EwmaClass
const ewmaClassDate = new EWMA(1, 10, Date);
// $ExpectType EwmaClass
const ewmaFunctionDate = EWMA(1, 10, Date);

// @ts-expect-error
const ewmaClassInvalidClock = new EWMA(1, 10, 5);
// @ts-expect-error
const ewmaFunctionInvalidClick = EWMA(1, 10, 55);

// @ts-expect-error
const ewmaClassInvalidParams = new EWMA(new Symbol(5), 1);
// @ts-expect-error
const ewmaClassInvalidParams2 = new EWMA(1, new Symbol(5));
// @ts-expect-error
const ewmaFunctionInvalidParams = EWMA(1, new Symbol(5));
// @ts-expect-error
const ewmaFunctionInvalidParams2 = EWMA(new Symbol(5), 1);
