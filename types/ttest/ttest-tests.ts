import ttest = require('ttest');

// $ExpectType boolean
ttest([0, 1, 1, 1], { mu: -1, alpha: 0.06, alternative: 'not equal' }).valid();

// varEqual only available with `left` AND `right`
// @ts-expect-error
ttest([0, 1, 1, 1], { varEqual: true }).valid();

// $ExpectType boolean
ttest([0, 1, 1, 1], [1, 2, 2, 2], { mu: -1, varEqual: true, alpha: 0.06, alternative: 'less' }).valid();

// $ExpectType number
ttest([0, 1, 1, 1], { mu: 1 }).testValue();
// $ExpectType number
ttest([0, 1, 1, 1], { mu: 1 }).pValue();
// $ExpectType number[]
ttest([0, 1, 1, 1], { mu: 1 }).confidence();
// $ExpectType number
ttest([0, 1, 1, 1], { mu: 1 }).freedom();
