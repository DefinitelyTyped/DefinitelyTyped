import register, { DEFAULT_EXTENSIONS, oldHandlers, noOp, restore } from 'ignore-styles';

register(['.css'], (module, filename) => {}); // $ExpectType void
register(['.css']); // $ExpectType void
register(undefined, (module, filename) => {}); // $ExpectType void
register([1], (module, filename) => {}); // $ExpectError
register(['.css'], 1); // $ExpectError

DEFAULT_EXTENSIONS[0]; // $ExpectType string

oldHandlers['.css']; // $ExpectType Handler

noOp(); // $ExpectType void

restore(); // $ExpectType void
