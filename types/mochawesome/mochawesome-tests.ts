// tslint:disable:no-duplicate-imports

// $ExpectType any
import * as addContext from 'mochawesome/addContext';

// $ExpectError
import addContext2 from 'mochawesome/addContext';

// $ExpectError
import { addContext as addContext3 } from 'mochawesome/addContext';

// $ExpectError
import * as addContext4 from 'mochawesome';

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
