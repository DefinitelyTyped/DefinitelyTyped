import ttest from 'ttest';

const options = {
    mu: -1,
    varEqual: false,
    alpha: 0.05,
};

const result = ttest([1, 2, 3], [4, 5, 6], options);

result.pValue();
