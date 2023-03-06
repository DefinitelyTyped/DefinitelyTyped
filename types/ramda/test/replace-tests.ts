import * as R from 'ramda';

() => {
    R.replace('foo', 'bar', 'foo foo foo'); // => 'bar foo foo'
    R.replace('foo', 'bar')('foo foo foo'); // => 'bar foo foo'
    R.replace('foo')('bar')('foo foo foo'); // => 'bar foo foo'
    R.replace(/foo/, 'bar', 'foo foo foo'); // => 'bar foo foo'

    // Use the "g" (global) flag to replace all occurrences:
    R.replace(/foo/g, 'bar', 'foo foo foo'); // => 'bar bar bar'
    R.replace(/foo/g, 'bar')('foo foo foo'); // => 'bar bar bar'
    R.replace(/foo/g)('bar')('foo foo foo'); // => 'bar bar bar'

    // Using a function as the replacement value
    R.replace(/([cfk])oo/g, (match, p1, offset) => `${p1}-${offset}`, 'coo foo koo'); // => 'c0oo f4oo k8oo'
    R.replace(/([cfk])oo/g, (match, p1, offset) => `${p1}-${offset}`)('coo foo koo'); // => 'c0oo f4oo k8oo'
    R.replace(/([cfk])oo/g)((match, p1, offset) => `${p1}-${offset}`)('coo foo koo'); // => 'c0oo f4oo k8oo'
};
