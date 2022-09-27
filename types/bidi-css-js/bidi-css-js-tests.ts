import bidiCssJs = require('bidi-css-js');

// $ExpectType Record<string, string | number | symbol>
bidiCssJs({ start: 8 }, 'rtl');
// $ExpectType Record<string, string | number | symbol>
bidiCssJs({ paddingEnd: '10vw' }, 'ltr');
// $ExpectType Record<string, string | number | symbol>
bidiCssJs({ somethingInvalid: 123 }, 'ltr');
// @ts-expect-error
bidiCssJs({ paddingEnd: '10vw' }, '');
// @ts-expect-error
bidiCssJs({ paddingEnd: '10vw' });
// @ts-expect-error
bidiCssJs('', 'ltr');
