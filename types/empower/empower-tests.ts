import baseAssert = require('assert');
import empower = require('empower');
import { Formatter } from 'power-assert-formatter';

const fakeFormatter: Formatter = (_context: any) => '';

{
    const assert: typeof baseAssert = empower(baseAssert, fakeFormatter);
}

const options: empower.Options = {
    modifyMessageOnRethrow: false,
    saveContextOnRethrow: false,
};

{
    const assert: typeof baseAssert = empower(baseAssert, fakeFormatter, options);
}

const defaultOptions: empower.Options = empower.defaultOptions();
