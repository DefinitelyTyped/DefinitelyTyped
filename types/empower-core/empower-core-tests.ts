import empowerCore = require('empower-core');
import originalAssert = require('assert');

const defaultOptions: empowerCore.Options = empowerCore.defaultOptions();

const partialOptions: empowerCore.Options = {
    destructive: false,
    patterns: [
        'assert(value, [message])',
        {
            pattern: 'assert.fail([message])',
            defaultMessage: 'assert.fail() was called!!',
        },
    ],
};

{
    const assert: typeof originalAssert = empowerCore(originalAssert);
}
{
    const assert: typeof originalAssert = empowerCore(originalAssert, defaultOptions);
}
{
    const assert: typeof originalAssert = empowerCore(originalAssert, partialOptions);
}
