import * as areEqual from 'fbjs/lib/areEqual';
import * as invariant from 'fbjs/lib/invariant';
import * as warning from 'fbjs/lib/warning';

const a = {};

const isEqual = areEqual(a, a);
invariant(isEqual, 'areEqual(`%s`, `%s`)', a, a);
warning(isEqual, 'areEqual(`%s`, `%s`)', a, a);
