import * as builtins from 'builtin-modules';
import * as builtinsStatic from 'builtin-modules/static';

let builtin: string = builtins[0];
builtin = builtinsStatic[0];

builtins.push('foo'); // $ExpectError
builtinsStatic.pop('foo'); // $ExpectError
