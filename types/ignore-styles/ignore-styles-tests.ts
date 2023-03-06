import register, { DEFAULT_EXTENSIONS, oldHandlers, noOp, restore } from 'ignore-styles';

register(['.css'], (module, filename) => {}); // $ExpectType void
register(['.css']); // $ExpectType void
register(undefined, (module, filename) => {}); // $ExpectType void
// @ts-expect-error
register([1], (module, filename) => {});
// @ts-expect-error
register(['.css'], 1);

DEFAULT_EXTENSIONS[0]; // $ExpectType string

oldHandlers['.css']; // $ExpectType Handler

noOp(); // $ExpectType void

restore(); // $ExpectType void
