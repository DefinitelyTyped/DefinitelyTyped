import * as almostEqual from 'almost-equal';

const res1 = almostEqual(1.999999, 2.0);

const res2 = almostEqual(1.999999, 2.0, almostEqual.DBL_EPSILON);

const res3 = almostEqual(1.999999, 2.0, almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON);
