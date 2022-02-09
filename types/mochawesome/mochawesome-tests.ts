// tslint:disable:no-duplicate-imports

// $ExpectType (testCtx: Context, context: TestContext) => void
import addContext = require('mochawesome/addContext');

// $ExpectType any
import { TestContext } from 'mochawesome/addContext';

// $ExpectType any
import * as addContext2 from 'mochawesome/addContext';

// $ExpectType any
import * as addContext4 from 'mochawesome';

// $ExpectError
import { addContext as addContext3 } from 'mochawesome/addContext';

// $ExpectError
import { addContext as addContext5 } from 'mochawesome';

// $ExpectType void
addContext(new Mocha.Context(), 'context');

// $ExpectType void
addContext(new Mocha.Context(), { title: 'Test', value: 'Test' });

// $ExpectTye void
addContext(new Mocha.Context(), { title: 'Test 1', value: 2 });

// $ExpectType void
addContext(new Mocha.Context(), { title: 'Test 2', value: {} });

// $ExpectType void
addContext(new Mocha.Context(), { title: 'Test 3', value: undefined });

// $ExpectType void
addContext(new Mocha.Context(), { title: 'Test 4', value: [] });

// $ExpectError
addContext('');

// $ExpectError
addContext(new Mocha.Context(), { noTitle: 'sorry', noValue: 'yep' });

// $ExpectError
addContext(new Mocha.Context(), { title: 'Title' });

// $ExpectError
addContext(new Mocha.Context(), { value: '' });

import Mochawesome = require('mochawesome');

// $ExpectType Mochawesome
new Mochawesome(new Mocha.Runner(new Mocha.Suite(''), false), {});

// $ExpectError
new Mochawesome();

// $ExpectError
new Mochawesome({}, {});

// $ExpectError
Mochawesome(new Mocha.Runner(new Mocha.Suite(''), false), {
    inlineDiffs: true,
    reporterOptions: {},
});
